import AWS from "aws-sdk";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: NextRequest) {
  try {
    // Create a new instance of DynamoDB client
    const dynamodbclient = new AWS.DynamoDB.DocumentClient({
      region: process.env.REGION,
      accessKeyId: process.env.ACCESS_KEY,
      secretAccessKey: process.env.SECRET_KEY,
    });

    // Get payload from request
    const { name, username, email, mobile, address, password } = await request.json();

    if (email && password) {
      const pk = `user#${email}`;
      const payload = {
        pk,
        sk: password, // In practice, you should hash the password before storing it
        userId: uuidv4(),
        name,
        username,
        email,
        mobile,
        address,
      };

      // Put item into DynamoDB
      const data = await dynamodbclient.put({
        TableName: process.env.TABLE_NAME as string,
        Item: payload,
        ConditionExpression: `attribute_not_exists(pk)`,
      }).promise();

      console.log(data);
      return NextResponse.json({ data }, { status: 200 });
    } else {
      return NextResponse.json({ error: "Email or password not provided" }, { status: 400 });
    }
  } catch (error: any) {
    if (error && Object.hasOwn(error, "code") && error.code === "ConditionalCheckFailedException") {
      return NextResponse.json({ error: "User already exists" }, { status: 409 }); // Changed to 409 Conflict
    } else {
      console.error("Sign-up error:", error);
      return NextResponse.json({ error: "Server could not be connected!" }, { status: 500 });
    }
  }
}
