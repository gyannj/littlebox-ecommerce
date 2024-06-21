"use client"
import { signIn } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { useRouter } from 'next/navigation';
type Props = {}

const buttonStyle = 'flex flex-row bg-dark-3 justify-center items-center py-3 px-4 size-fit rounded-lg hover:cursor-pointer hover:bg-slate-700';
const placeholderStyle = 'flex bg-dark-3 outline-none text-searchBoxColor font-medium w-96 p-2 rounded-xl';

const SignIn = (props: Props) => {
const router = useRouter()
    const login = async() => { 
        signIn("credentials", {
            email : "rgautam@gmail.com",
            password : "bestprogrammer"
        }).then((data) => {
            console.log("user details",data)
            router.push("/")
        }).catch((err) => {
            console.log("error",err)
        })
    }
  return (
    <div className='flex flex-col bg-dark-1 justify-center items-center text-textColor py-24'>
        <div className={buttonStyle} >
            <Image 
                src='/google.png' 
                width={18} 
                height={18} 
                alt='google logo'
                className='flex flex-col ml-2 mr-3'
            />
            <p className='font-medium'>
                Sign In With Google
            </p>
        </div>

        <div className='text-hrLineColor my-8'>
            or
        </div>

        <div className='flex flex-col gap-6 items-center'>
            <div className='flex flex-col gap-2'>
                <p className='flex'>
                    Enter Username or Email ID
                </p>
                <input type="text" placeholder='Username or Email ID' className={placeholderStyle} />
            </div>     

            <div className='flex flex-col gap-2'>
                <p className='flex'>
                    Enter Password
                </p>
            <input type="password" placeholder='Password' className={placeholderStyle} />
                <p className='flex items-end justify-end font-extralight text-xs hover:text-strikeThroughPriceColor hover:cursor-pointer'>Forgot Password</p>
            </div>
        </div>

        <div className='flex flex-col gap-4 mt-16 items-center'>
            <div className={buttonStyle} >
                <button onClick = {login}>Sign in </button>
                {/* <Link href='/' className='font-medium' >
                    Sign In
                </Link> */}
            </div>

            <div className={buttonStyle}>
                <Link href='/sign-up' className='font-medium'>
                    Sign Up
                </Link>
            </div>
        </div>
    </div>
  )
}

export default SignIn