import { cookies } from "next/headers";
import AWS from "aws-sdk"
import { getCartItems, getCartItemsFromCartId } from "@/app/product/[...slug]/actions";
import { cart_item } from "@/modules/shared/utils/types";
const dynamodbclient = new AWS.DynamoDB.DocumentClient({region : process.env.REGION , accessKeyId : process.env.ACCESS_KEY , secretAccessKey : process.env.SECRET_KEY})

export async function mergeCart(userId: string){
    try {
        const cartId = cookies().get("cart")?.value
        if(cartId){
            let cartItems = await getCartItemsFromCartId(cartId);
            let userCart  = await getCartItemsFromCartId(userId);
            console.log(userCart, cartItems)
            if(userCart === 404 ){
                //user cart does not exists , adding cookies cart to user cart
                const response = await dynamodbclient.put({
                    TableName : process.env.TABLE_NAME as string,
                    Item : {
                        pk : `cart#${userId}`,
                        sk : `cart#${userId}`,
                        cart : cartItems
                    }
                }).promise()
                await dynamodbclient.delete({
                    TableName : process.env.TABLE_NAME as string,
                    Key : {
                        "pk" : `cart#${cartId}`,
                        "sk" : `cart#${cartId}`
                    }
                  }).promise()
                  cookies().delete("cart")
            }else{
                if(userCart === 500){
                    userCart = [];
                }
                if(cartItems === 500|| cartItems === 404){
                    cartItems = [];
                }
                //both exists, compare and merge carts
                const allItems = [...cartItems, ...userCart]
                const mergedCartItems = allItems.reduce((acc : cart_item[] , item) => {
                    const found = acc.find(ac => ac.productId === item.productId)
                    if(found){
                        found.quantity += item.quantity
                    }else{
                        const newObj = {
                            quantity : item.quantity,
                            productId : item.productId,
                            categoryId : item.categoryId,
                            price : item.price
                        }
                        acc.push(newObj)
                    }
                    return acc
                },[])

                const response = await dynamodbclient.update({
                    TableName : process.env.TABLE_NAME as string,
                    Key : {
                        "pk" : `cart#${userId}`,
                        "sk" : `cart#${userId}`
                    },
                    UpdateExpression : `set #x = :y`,
                    ExpressionAttributeNames : {
                        "#x" : "cart"
                    },
                    ExpressionAttributeValues : {
                        ":y" : mergedCartItems
                    },
                    ReturnValues : "ALL_NEW"
                }).promise()

              await dynamodbclient.delete({
                TableName : process.env.TABLE_NAME as string,
                Key : {
                    "pk" : `cart#${cartId}`,
                    "sk" : `cart#${cartId}`
                }
              }).promise()
              cookies().delete("cart")
            }

          
        }
    } catch (error) {
        console.log("Merge cart failed: ", error)
    }
}