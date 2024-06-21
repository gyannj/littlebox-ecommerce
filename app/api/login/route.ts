import AWS from "aws-sdk"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request : NextRequest){
    //create a new instance of dynamodb client
    const dynamodbclient = new AWS.DynamoDB.DocumentClient({region : process.env.REGION , accessKeyId : process.env.ACCESS_KEY , secretAccessKey : process.env.SECRET_KEY})
    // get payload
    const {email , password} = await request.json()
    if (email && password) {
        //dyanmodb get item
        const params = {
            TableName : process.env.TABLE_NAME as string,
            Key : {
                // partition key name = partition key value
                "pk" : `user#${email}`,
                "sk" : password
            }
        }
        const data = await dynamodbclient.get(params).promise()
        if("Item" in  data) {
            return NextResponse.json({
                body : data.Item
            }, {status : 200})
        }else{
            return NextResponse.json({
                error : "User not found"
            }, {status : 400})
        }
        console.log(data)
        
    }else{
        return NextResponse.json({
            statusCode : 500
        })
    }
    return NextResponse.json({
        statusCode : 200
    })
}