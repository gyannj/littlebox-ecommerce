import AWS from "aws-sdk"
import { NextRequest, NextResponse } from "next/server"
import { v4 as uuidv4 } from 'uuid'; 

export async function POST(request : NextRequest){
    try {
        //create a new instance of dynamodb client
        const dynamodbclient = new AWS.DynamoDB.DocumentClient({region : process.env.REGION , accessKeyId : process.env.ACCESS_KEY , secretAccessKey : process.env.SECRET_KEY})
        // get payload
        const {email , password} = await request.json()
        if (email && password) {
            const pk = `user#${email}`
            const payload = {
                "pk" : pk,
                "sk" :  password,
                "userId" : uuidv4()
            }
            const inv = [{

                "category": "Fictional",
                "price": 15.99,
                "sellingPrice": 19.99,
                "stock": 25,
                "productId": "FIC001",
                "vendor": "ABC Books",
                "name": "Dune",

                "categoryId" : "100",
                "image_url": "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1718964690/Ecommerce/dune_sxiuee.jpg"

            },
            {
                "category": "Fictional",
                "price": 12.50,
                "sellingPrice": 15.99,
                "stock": 18,
                "productId": "FIC002",
                "vendor": "XYZ Publishing",
                "name": "The Great Gatsby",

                "categoryId" : "100",
                "image_url": "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1718964852/Ecommerce/thegreatgatsby_gngyz8.jpg"

            },
            {
                "category": "Fictional",
                "price": 10.99,
                "sellingPrice": 13.99,
                "stock": 30,
                "productId": "FIC003",
                "vendor": "Novel House",
                "name": "Frankenstein",

                "categoryId" : "100",
                "image_url": "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1718964851/Ecommerce/frankenstein_woq5ub.jpg"

            },
            {
                "category": "Fictional",
                "price": 14.95,
                "sellingPrice": 17.99,
                "stock": 20,
                "productId": "FIC004",
                "vendor": "Middle Earth Books",
                "name": "The Hobbit",

                "categoryId" : "100",
                "image_url": "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1718964852/Ecommerce/thehobbit_ezc2aw.jpg"

            },
            {
                "category": "Fictional",
                "price": 9.75,
                "sellingPrice": 12.50,
                "stock": 22,
                "productId": "FIC005",
                "vendor": "Gothic Press",
                "name": "Dracula",

                "categoryId" : "100",
                "image_url": "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1718964850/Ecommerce/dracula_iuzz9x.jpg"
            },
            {

                "category": "Non-Fictional",
                "price": 22.00,
                "sellingPrice": 24.99,
                "stock": 10,
                "productId": "NFIC001",
                "vendor": "PQR Press",
                "name": "Steve Jobs: The Biography",
                "categoryId" : "101"
            },
            {

                "image_url":"https://m.media-amazon.com/images/I/51XWyS363pL._AC_UF1000,1000_QL80_.jpg", 

                "category": "Non-Fictional",
                "price": 30.00,
                "sellingPrice": 34.99,
                "stock": 5,
                "productId": "NFIC002",
                "vendor": "LMN Publishers",
                "name": "A Brief History of Time",
                "categoryId" : "101"
            },
            {

                "image_url": "https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF1000,1000_QL80_.jpg",

                "category": "Non-Fictional",
                "price": 18.50,
                "sellingPrice": 21.99,
                "stock": 15,
                "productId": "NFIC003",
                "vendor": "Book Haven",
                "name": "Sapiens: A Brief History of Humankind",
                "categoryId" : "101"
            },
            {

                "image_url": "https://m.media-amazon.com/images/I/71X3oKOMh0L._AC_UF1000,1000_QL80_.jpg",

                "category": "Non-Fictional",
                "price": 25.00,
                "sellingPrice": 29.99,
                "stock": 8,
                "productId": "NFIC004",
                "vendor": "Global Publishing",
                "name": "The Omnivore's Dilemma",
                "categoryId" : "101"
            },
            {

                "image_url": "https://m.media-amazon.com/images/I/51nfN26y5XL._AC_UF894,1000_QL80_.jpg",

                "category": "Non-Fictional",
                "price": 16.99,
                "sellingPrice": 19.99,
                "stock": 12,
                "productId": "NFIC005",
                "vendor": "Enlighten Books",
                "name": "Into the Wild",
                "categoryId" : "101"
            },
            {
                "category": "Academic",
                "price": 55.00,
                "sellingPrice": 59.99,
                "stock": 15,
                "productId": "ACAD001",
                "vendor": "Books R Us",
                "name": "Principles of Economics",
                "categoryId" : "102"
            },
            {
                "category": "Academic",
                "price": 45.00,
                "sellingPrice": 49.99,
                "stock": 8,
                "productId": "ACAD002",
                "vendor": "Educational Books Inc.",
                "name": "Introduction to Psychology",
                "categoryId" : "102"
            },
            {
                "category": "Academic",
                "price": 60.00,
                "sellingPrice": 64.99,
                "stock": 20,
                "productId": "ACAD003",
                "vendor": "Scholarly Press",
                "name": "Advanced Calculus",
                "categoryId" : "102"
            },
            {
                "category": "Academic",
                "price": 38.50,
                "sellingPrice": 42.99,
                "stock": 18,
                "productId": "ACAD004",
                "vendor": "Academic Publishing",
                "name": "Computer Networks: A Systems Approach",
                "categoryId" : "102"
            },
            {
                "category": "Academic",
                "price": 42.00,
                "sellingPrice": 46.99,
                "stock": 25,
                "productId": "ACAD005",
                "vendor": "University Texts",
                "name": "Introduction to Sociology",
                "categoryId" : "102"
            },
            {
                "category": "Art and Entertainment",
                "price": 18.99,
                "sellingPrice": 21.99,
                "stock": 20,
                "productId": "ART001",
                "vendor": "Artisan Books",
                "name": "The Art of War",
                "categoryId" : "103"
            },
            {
                "category": "Art and Entertainment",
                "price": 14.50,
                "sellingPrice": 17.99,
                "stock": 12,
                "productId": "ART002",
                "vendor": "Crafty Publications",
                "name": "Guitar Basics",
                "categoryId" : "103"
            },
            {
                "category": "Art and Entertainment",
                "price": 20.00,
                "sellingPrice": 24.99,
                "stock": 15,
                "productId": "ART003",
                "vendor": "Musical Books Ltd.",
                "name": "Piano Masterclass",
                "categoryId" : "103"
            },
            {
                "category": "Art and Entertainment",
                "price": 16.95,
                "sellingPrice": 19.99,
                "stock": 18,
                "productId": "ART004",
                "vendor": "Creative Publishing",
                "name": "Photography Basics",
                "categoryId" : "103"
            },
            {

                "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMvSjAD0gSSLvPon-a19tSvV7TjF48WlcrEA&s",

                "category": "Art and Entertainment",
                "price": 22.50,
                "sellingPrice": 26.99,
                "stock": 10,
                "productId": "ART005",
                "vendor": "Artful Books",
                "name": "Calligraphy Made Easy",
                "categoryId" : "103"
            }
        ]
            //dyanmodb put item
            const data = await dynamodbclient.put({TableName : process.env.TABLE_NAME as string, Item : payload, ConditionExpression : `attribute_not_exists(${pk})` }).promise()
            console.log(data)
            return NextResponse.json({
                data 
            }, {status : 200})
        }else{
            return NextResponse.json({
               error : "Email or password not provided",
            },{status : 400 })
        }
    } catch (error : any) {
        if(error && Object.hasOwn(error , "code") &&  error.code === "ValidationException"){
            return NextResponse.json({
                error: "user already exists"
            }, {status: 404})
        } else {
            return NextResponse.json({
                error: "Server could not be connected!"
            }, {status: 500})
        }
        
    }

}