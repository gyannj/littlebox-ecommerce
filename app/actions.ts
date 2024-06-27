"use server"
import { createOrderParams, inventory } from "@/modules/shared/utils/types"
import AWS from "aws-sdk"
import { getSingleProduct } from "./product/[...slug]/actions"
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
export const getOrderByOrderId : (orderId: string) => Promise<createOrderParams | null> = async (orderId) => {
    try {
        const response = await dynamodbclient.get({
            TableName : process.env.TABLE_NAME as string,
            Key : {
                "pk" : `order#${orderId}`,
                "sk" : `order#${orderId}`
            }
        }).promise()
        console.log("response ", response)
      if("Item" in response){
        return response['Item'] as createOrderParams
      }else{
        return null;
      }
    } catch (error) {
        console.log("error", error)
        return null
    }
}

export const  updateInventoryRating : (categoryId:string, productId : string , rating : number,orderId: string) => Promise<boolean> = async (categoryId, productId , rating, orderId) => {
    try {
        const order = await getOrderByOrderId(orderId);
        if(!order){
            return false
        }
        const currentOrderItems = order.order_items
        const newOrderItems = currentOrderItems.map((item) => {
            if(item.product_id === productId){
                return {
                    ...item,
                    rating
                }
            }else{
                return item
            }
        })
        await dynamodbclient.update({
            TableName : process.env.TABLE_NAME as string,
            Key : {
                "pk" : `order#${orderId}`,
                "sk" : `order#${orderId}`
            },
            UpdateExpression :  "SET order_items = :newOrderItems",
            ExpressionAttributeValues : {
                ":newOrderItems" : newOrderItems
            },
        }).promise()
        const product = await getSingleProduct(categoryId, productId)
        if(product === 500){
            return false
        }
        const currentProductRating =  product.rating ? product.rating : 0
        const currentRatingCount = product.rating_count ? product.rating_count : 0
        const newRating = (currentProductRating + rating)/(currentRatingCount + 1)
        await dynamodbclient.update({
            TableName : process.env.TABLE_NAME as string,
            Key : {
                "pk" : `inventory#${categoryId}`,
                "sk" : `${productId}`
            },
            UpdateExpression :  "SET rating_count = if_not_exists(rating_count , :empty) + :ratingcount, rating = :newRating",
            ExpressionAttributeValues : {
                ":ratingcount" : 1,
                ":empty" : 0,
                ":newRating" : newRating
            },
        }).promise()
        // console.log("response ", response)
      
      return true
    } catch (error) {
        console.log("error", error)
        return false
    }
}