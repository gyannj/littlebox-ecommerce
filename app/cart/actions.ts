import AWS from "aws-sdk";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { v4 as uuidv4, v4 } from "uuid";

const dynamodbclient = new AWS.DynamoDB.DocumentClient();

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
  order: createOrderParams
) => Promise<200 | 500> = async (order) => {
  try {
    const session = getServerSession(authOptions);
    const userId = "userId" in session ? session.userId : null;
    if (!userId) {
      return 500;
    }
    const id = uuidv4();
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
            "SET gs1pk = :x, gs1sk = if_not_exists(gs1sk , :empty) + :count, sales = if_not_exists(sales , :empty) + :count",
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
