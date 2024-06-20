import NextAuth from "next-auth"
import type { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: AuthOptions = {
    secret : process.env.JWT_KEY,
    session : {strategy : "jwt", maxAge : 30* 24 * 60 * 60},
    callbacks : {
        async jwt({token , user}){
            console.log("jwt", token ,user)
            return {...token , ...user}
        },
        async session({session ,token , user}){
            console.log("session", session)
            return {...session , ...token , ...user}
        }
    },

    pages : {
        "signIn" : "/login"
    },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize (credentials) {
          if (typeof credentials !== "undefined") {
            console.log("here", credentials)
            const response = await fetch(`${process.env.DEV_URL}/api/login`, {
                method : "POST",
                body : JSON.stringify({
                    email : credentials.email,
                    password : credentials.password
                })
            })
            // check response status
            if(response.status === 200){
                const user = await response.json()
                console.log("user in auth", user)
                const userDetails = {
                    "id" : user.body.userId,
                    "userId" : user.body.userId,
                    "email" : user.email || "abc@gmail.com"
                } 
                return userDetails 
            }else{
                return null
            }
      }
    return null
    },
    }),

  ]
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
