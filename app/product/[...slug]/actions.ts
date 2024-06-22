"use server"
import { cart_item, inventory } from "@/modules/shared/utils/types"
import AWS from "aws-sdk"
import { cookies } from "next/headers"
const dynamodbclient = new AWS.DynamoDB.DocumentClient({region : process.env.REGION , accessKeyId : process.env.ACCESS_KEY , secretAccessKey : process.env.SECRET_KEY})
import { v4 as uuidv4 } from 'uuid'; 

export const getSingleProduct: (categoryId : string , productId : string) => Promise<inventory | 500>= async (categoryId , productId) => {
    try {
        const response = await dynamodbclient.get({
            TableName : process.env.TABLE_NAME as string,
            Key : {
                "pk" : `inventory#${categoryId}`,
                "sk" : productId
            }
        }).promise()
        console.log("response ", response)
        if("Item" in response){
            return response['Item'] as inventory
        }else{
            return 500
        }
      
    } catch (error) {
        console.log("error", error)
        return 500
    }
}

export const addToCart: (cartString : cart_item[]) => Promise<cart_item[] | 500>= async (cartString) => {
    const cart = cartString
    try {
        const cartId = cookies().get("cart")
        console.log("adding to cart")
        if(cartId){
            const response = await dynamodbclient.update({
                TableName : process.env.TABLE_NAME as string,
                Key : {
                    "pk" : `cart${cartId}`,
                    "sk" : `cart${cartId}`
                },
                UpdateExpression : `set cart = list_append(if_not_exists(cart, :emptycart) , ${cart})`,
                ExpressionAttributeValues : {
                    ":emptycart" : []
                },
                ReturnValues : "ALL_NEW"
            }).promise()
            return response['Attributes'] as cart_item[]
        }else{
            //create new cart Id
            const newCartId = uuidv4()
            const response = await dynamodbclient.put({
                TableName : process.env.TABLE_NAME as string,
                Item : {
                    pk : `cart#${newCartId}`,
                    sk : `cart#${newCartId}`,
                    cart : cart
                }
            }).promise()
            cookies().set("cart", newCartId)
            return cart
        }
    } catch (error) {
        console.log("error", error)
        return 500
    }
}

export const getCartItems: () => Promise<cart_item[] | 500> = async () => {
    try {
        const cartId = cookies().get("cart");
        if (cartId) {
            const response = await dynamodbclient.get({
                TableName: process.env.TABLE_NAME as string,
                Key: {
                    "pk": `cart#${cartId}`,
                    "sk": `cart#${cartId}`
                }
            }).promise();
            if (response.Item && response.Item.cart) {
                return response.Item.cart as cart_item[];
            } else {
                return 500;
            }
        } else {
            return 500;
        }
    } catch (error) {
        console.log("error", error);
        return 500;
    }
}