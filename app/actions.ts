"use server"
import { createOrderParams, inventory } from "@/modules/shared/utils/types"
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


export const getBestSellers : () => Promise<inventory[]>= async ( ) => {
    try {
        const response = await dynamodbclient.query({
            IndexName : "gs2-index",
            TableName : process.env.TABLE_NAME as string,
            KeyConditionExpression : " #x = :y ",
            ExpressionAttributeNames : {
                "#x" : "gs2pk"
            },
            ExpressionAttributeValues : {
                ":y" : "ordersales"
            },
            Limit : 10,
            ScanIndexForward : false
        }).promise()
        // console.log("response ", response)
      const data = response['Items']
      return data as inventory[]
    } catch (error) {
        console.log("error", error)
        return []
    }
}
export const getOrders : (userId: string) => Promise<createOrderParams[]>= async (userId) => {
    try {
        const response = await dynamodbclient.query({
            IndexName : "gs1-index",
            TableName : process.env.TABLE_NAME as string,
            KeyConditionExpression : " #x = :y ",
            ExpressionAttributeNames : {
                "#x" : "gs1pk"
            },
            ExpressionAttributeValues : {
                ":y" :userId
            },
            Limit : 10,
            ScanIndexForward : false
        }).promise()
        console.log("response ", response)
      const data = response['Items']
      console.log("data", data)
      return data as createOrderParams[]
    } catch (error) {
        console.log("error", error)
        return []
    }
}

