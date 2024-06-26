"use server"
import { authOptions } from "@/app/api/auth/[...nextauth]/options"
import { cart_item, cart_product, inventory } from "@/modules/shared/utils/types"
import AWS from "aws-sdk"
import { getServerSession } from "next-auth"
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

export const addToCart: (cart : cart_item[]) => Promise<cart_item[] | 500>= async (cart) => {
    try {
        const session = await getServerSession(authOptions)

        
        const cartIdCookie = cookies().get("cart")?.value
        const cartId = session  && "userId" in session ? session.userId : cartIdCookie ? cartIdCookie : null;
        console.log("adding to cart")
        if(cartId){
            console.log("cartID already exists", cartId)
            const response = await dynamodbclient.update({
                TableName : process.env.TABLE_NAME as string,
                Key : {
                    "pk" : `cart#${cartId}`,
                    "sk" : `cart#${cartId}`
                },
                UpdateExpression : `set cart = list_append(if_not_exists(cart, :emptycart) , :newcart)`,
                ExpressionAttributeValues : {
                    ":emptycart" : [],
                    ":newcart" : cart
                },
                ReturnValues : "ALL_NEW"
            }).promise()
            console.log(response['Attributes'])
            console.log("cart id:", cartId)
            return response['Attributes'] as cart_item[]
        }else{
            //create new cart Id
            console.log("creating new cart ")
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
        const session = await getServerSession(authOptions)
        console.log("session",session)
        const cartIdCookie = cookies().get("cart");
        
        const cartId = session  && "userId" in session ? session.userId : cartIdCookie ? cartIdCookie.value : null;
        if (!cartId) {
            console.log("Cart ID cookie is missing");
            return 500;
        }
        console.log("Cart ID:", cartId);
        const response = await dynamodbclient.get({
            TableName: process.env.TABLE_NAME as string,
            Key: {
                "pk": `cart#${cartId}`,
                "sk": `cart#${cartId}`
            }
        }).promise();

        console.log("DynamoDB response:", response);

        if (response.Item && response.Item.cart) {
            console.log("Cart items found:", response.Item.cart);
            const cartItems = response.Item.cart as cart_item[];
            
            return response.Item.cart as cart_item[];
        } else {
            console.log("No cart items found in response");
            return 500;
        }
    } catch (error) {
        console.log("Error fetching cart items:", error);
        return 500;
    }
}

export const getCartItemsFromCartId: (cartId: string) => Promise<cart_item[] |404| 500> = async (cartId) => {
    try {
        
        if (!cartId) {
            console.log("Cart ID cookie is missing");
            return 500;
        }

        
        console.log("Cart ID:", cartId);

        const response = await dynamodbclient.get({
            TableName: process.env.TABLE_NAME as string,
            Key: {
                "pk": `cart#${cartId}`,
                "sk": `cart#${cartId}`
            }
        }).promise();

        console.log("DynamoDB response:", response);

        if (response.Item && response.Item.cart) {
            console.log("Cart items found:", response.Item.cart);
            const cartItems = response.Item.cart as cart_item[];
            
            return response.Item.cart as cart_item[];
        } else {
            console.log("No cart items found in response");
            return 404;
        }
    } catch (error) {
        console.log("Error fetching cart items:", error);
        return 500;
    }
}

export const getProductsByCartItems: () => Promise<cart_product[] | 500> = async () => {
    try {
        const cartItems = await getCartItems();
        if (cartItems === 500) {
            return 500;
        }
        console.log(cartItems)
        const products: cart_product[] = [];

        for (const item of cartItems) {
            const categoryId = item.categoryId;
            const productId = item.productId;
            console.log(categoryId);

            console.log(productId)

            const response = await dynamodbclient.get({
                TableName: process.env.TABLE_NAME as string,
                Key: {
                    "pk": `inventory#${categoryId}`,
                    "sk": productId
                }
            }).promise();

            console.log("Product fetched:", response);

            if (response.Item) {
                const product: cart_product = {
                    ...response.Item as inventory,
                    quantity: item.quantity
                };
                products.push(product);
            } else {
                console.log(`Product ${productId} not found`);
                return 500;
            }
        }

        console.log("All products fetched with quantities:", products);
        return products as cart_product[]
    } 
 catch (error) {
        console.log("Error fetching products by cart items:", error);
        return 500;
    }
}

export const deleteCartItem: (categoryId: string, productId: string) => Promise<cart_item[] | 500> = async (categoryId, productId) => {
    try {
        const session = await getServerSession(authOptions)
        console.log("session",session)
        const cartIdCookie = cookies().get("cart");
        
        const cartId = session  && "userId" in session ? session.userId : cartIdCookie ? cartIdCookie.value : null;
        if (!cartId) {
            console.log("Cart ID cookie is missing");
            return 500;
        }

        const cartResponse = await dynamodbclient.get({
            TableName: process.env.TABLE_NAME as string,
            Key: {
                "pk": `cart#${cartId}`,
                "sk": `cart#${cartId}`
            }
        }).promise();

        if (cartResponse.Item && cartResponse.Item.cart) {
            const cartItems: cart_item[] = cartResponse.Item.cart;

            // Find the index of the item to be removed
            const indexToRemove = cartItems.findIndex(item => item.categoryId === categoryId && item.productId === productId);

            if (indexToRemove > -1) {
                cartItems.splice(indexToRemove, 1); // Remove the item from the array

                // Update the cart in DynamoDB
                const updateResponse = await dynamodbclient.update({
                    TableName: process.env.TABLE_NAME as string,
                    Key: {
                        "pk": `cart#${cartId}`,
                        "sk": `cart#${cartId}`
                    },
                    UpdateExpression: 'set cart = :updatedCart',
                    ExpressionAttributeValues: {
                        ':updatedCart': cartItems
                    },
                    ReturnValues: 'ALL_NEW'
                }).promise();

                console.log("Updated cart after deletion:", updateResponse.Attributes?.cart);
                return updateResponse.Attributes?.cart as cart_item[];
            } else {
                console.log("Item not found in cart");
                return 500;
            }
        } else {
            console.log("No cart items found in response");
            return 500;
        }
    } catch (error) {
        console.log("Error deleting cart item:", error);
        return 500;
    }
}


// export const getProductsByCartItems: () => Promise<inventory[] | 500> = async () => {
//     try {
//         const cartItems = await getCartItems();
//         if (cartItems === 500) {
//             return 500;
//         }

//         const keys = cartItems.map(item => ({
//             pk: `inventory#${item.categoryId}`,
//             sk: item.productId
//         }));

//         const params = {
//             RequestItems: {
//                 [process.env.TABLE_NAME as string]: {
//                     Keys: keys
//                 }
//             }
//         };

//         const response = await dynamodbclient.batchGet(params).promise();
//         console.log("BatchGet response:", response);

//         if (response.Responses && response.Responses[process.env.TABLE_NAME as string]) {
//             return response.Responses[process.env.TABLE_NAME as string] as inventory[];
//         } else {
//             return 500;
//         }
//     } catch (error) {
//         console.log("Error fetching products by cart items:", error);
//         return 500;
//     }
// }