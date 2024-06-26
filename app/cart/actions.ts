"use server"
import AWS from "aws-sdk";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { v4 as uuidv4, v4 } from "uuid";
import { cart_product } from "@/modules/shared/utils/types";

// const dynamodbclient = new AWS.DynamoDB.DocumentClient();
const dynamodbclient = new AWS.DynamoDB.DocumentClient({region : process.env.REGION , accessKeyId : process.env.ACCESS_KEY , secretAccessKey : process.env.SECRET_KEY})

//order derails
//pk ,sk ,created_at, orderId, billing addresss : addresss , pincode ,state , city , shippping address, first name , last name ,price , shipping charges
//order items
//pk : <orderId>#orderitems , sk : product id , quantity , product img, product name

interface createOrderParams {
  created_at: string; // Date and time of order creation
  orderId: string; // Unique order ID
  order_items: {
    quantity: number;
    img: string;
    product_name: string;
    product_id: string;
    category_id: string;
  }[];
  billing_address: {
    address: string;
    pincode: number;
    state: string;
    city: string;
  };
  shipping_address: {
    address: string;
    pincode: number;
    state: string;
    city: string;
  };
  first_name: string; // First name of the customer
  last_name: string; // Last name of the customer
  price: number; // Total price of the order
  shipping_charges: number;
}

export const createOrder: (
  cart : cart_product[]
) => Promise<200 | 500> = async (cart) => {
  try {
    console.log("creating order", cart)
    const session = await getServerSession(authOptions);
    console.log("session",session)
    const userId = session &&  "userId" in session ? session.userId : null;
    console.log("user id" , userId)
    if (!userId) {
      return 500;
    }

    const id = uuidv4();
    const order : createOrderParams = {
      created_at : new Date().toISOString(),
      orderId : id,
      order_items: cart.map((cartItem : cart_product) => ({
        quantity: cartItem.quantity,
        img: cartItem.image_url,
        product_name: cartItem.name,
        product_id: cartItem.productId,
        category_id: cartItem.categoryId,
      })),
      billing_address: {
        address: "123",
        pincode: 781028,
        state: "Assam",
        city: "Guwahati"
      },
      shipping_address:{
        address: "123",
        pincode: 781028,
        state: "Assam",
        city: "Guwahati"
      },
      first_name: "A", // First name of the customer
      last_name: "B", // Last name of the customer
      price: cart.reduce((acc , cartItem) => acc + (cartItem.price * cartItem.quantity) ,0), // Total price of the order
      shipping_charges: 99
    }
    const newOrder = {
      pk: `order#${id}`,
      sk: `order#${id}`,
      gs1pk: userId,
      gs1sk: new Date().toISOString(),
      ...order,
    };
    const newOrderParams = {
      TableName: process.env.TABLE_NAME as string,
      Item: newOrder,
    };
    await dynamodbclient.put(newOrderParams).promise();
    //create order items
    const order_items = order.order_items;
    for (let i = 0; i < order_items.length; i++) {
      const item = {
        pk: `orderitems#${id}`,
        sk: `orderitems#${id}`,
        ...order_items[i],
      };
      //for order items
      await dynamodbclient
        .put({
          TableName: process.env.TABLE_NAME as string,
          Item: item,
        })
        .promise();
      //for sales
      await dynamodbclient
        .update({
          TableName: process.env.TABLE_NAME as string,
          Key: {
            pk: `inventory#${item.category_id}`,
            sk: item.product_id,
          },
          UpdateExpression:
            "SET gs2pk = :x, gs2sk = if_not_exists(gs2sk , :empty) + :count, sales = if_not_exists(sales , :empty) + :count",
          ExpressionAttributeValues: {
            ":empty": 0,
            ":count": item.quantity,
            ":x": "ordersales",
          },
        })
        .promise();
    }

    return 200;
  } catch (error) {
    console.log("create order error", error);
    return 500;
  }
};
