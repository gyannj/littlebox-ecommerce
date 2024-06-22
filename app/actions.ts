"use server"
import { inventory } from "@/modules/shared/utils/types"
import AWS from "aws-sdk"
const dynamodbclient = new AWS.DynamoDB.DocumentClient({region : process.env.REGION , accessKeyId : process.env.ACCESS_KEY , secretAccessKey : process.env.SECRET_KEY})


export const getProductsByCategoryId : (categoryId : string) => Promise<inventory[]>= async (categoryId ) => {
    try {
        const response = await dynamodbclient.query({
            TableName : process.env.TABLE_NAME as string,
            KeyConditionExpression : " #x = :y ",
            ExpressionAttributeNames : {
                "#x" : "pk"
            },
            ExpressionAttributeValues : {
                ":y" : `inventory#${categoryId}`
            },
            Limit : 10
        }).promise()
        // console.log("response ", response)
      const data = response['Items']
      return data as inventory[]
    } catch (error) {
        console.log("error", error)
        return []
    }
}

