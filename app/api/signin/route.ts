import AWS from "aws-sdk";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    // Create a new instance of DynamoDB client
    const dynamodbclient = new AWS.DynamoDB.DocumentClient({
        region: process.env.REGION,
        accessKeyId: process.env.ACCESS_KEY,
        secretAccessKey: process.env.SECRET_KEY
    });

    try {
        // Get payload
        const { email, password } = await request.json();
        
        if (email && password) {
            // DynamoDB get item parameters
            const params = {
                TableName: process.env.TABLE_NAME as string,
                Key: {
                    "pk": `user#${email}`,
                    "sk": password
                }
            };

            // Get item from DynamoDB
            const data = await dynamodbclient.get(params).promise();
            
            if (data.Item) {
                // User found
                return NextResponse.json({
                    body: data.Item
                }, { status: 200 });
            } else {
                // User not found
                return NextResponse.json({
                    error: "User not found"
                }, { status: 404 });
            }
        } else {
            // Missing email or password
            return NextResponse.json({
                error: "Email or password not provided"
            }, { status: 400 });
        }
    } catch (error) {
        console.error("Error:", error);
        // Internal server error
        return NextResponse.json({
            error: "Server error"
        }, { status: 500 });
    }
}
