import AWS from "aws-sdk"
import { NextRequest, NextResponse } from "next/server"
import { v4 as uuidv4 } from 'uuid'; 

export async function POST(request : NextRequest){
    try {
        //create a new instance of dynamodb client
        const dynamodbclient = new AWS.DynamoDB.DocumentClient({region : process.env.REGION , accessKeyId : process.env.ACCESS_KEY , secretAccessKey : process.env.SECRET_KEY})
        // get payload
        const {email , password} = await request.json()
        if (email && password) {
            const pk = `user#${email}`
            const payload = {
                "pk" : pk,
                "sk" :  password,
                "userId" : uuidv4()
            }
            //dyanmodb put item
            const data = await dynamodbclient.put({TableName : process.env.TABLE_NAME as string, Item : payload, ConditionExpression : `attribute_not_exists(${pk})` }).promise()
            console.log(data)
            return NextResponse.json({
                data 
            }, {status : 200})
        }else{
            return NextResponse.json({
               error : "Email or password not provided",
            },{status : 400 })
        }
    } catch (error : any) {
        if(error && Object.hasOwn(error , "code") &&  error.code === "ValidationException"){
            return NextResponse.json({
                error: "user already exists"
            }, {status: 404})
        } else {
            return NextResponse.json({
                error: "Server could not be connected!"
            }, {status: 500})
        }
        
    }

}