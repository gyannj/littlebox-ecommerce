import Image from 'next/image'
import React from 'react'

type Props = {}

const buttonStyle = 'flex flex-row bg-dark-3 justify-center items-center py-3 px-4 size-fit rounded-lg hover:cursor-pointer hover:bg-slate-700';

const page = (props: Props) => {
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
                <input type="text" placeholder='Username or Email ID' className='flex bg-dark-3 outline-none text-searchBoxColor font-medium w-96 p-2 rounded-xl' />
            </div>     

            <div className='flex flex-col gap-2'>
                <p className='flex'>
                    Enter Password
                </p>
                <input type="password" placeholder='Password' className='flex bg-dark-3 outline-none text-searchBoxColor font-medium w-96 p-2 rounded-xl' />
                <p className='flex items-end justify-end font-extralight text-xs hover:text-strikeThroughPriceColor hover:cursor-pointer'>Forgot Password</p>
            </div>
        </div>

        <div className='flex flex-col gap-4 mt-16 items-center'>
            <div className={buttonStyle} >
                <p className='font-medium'>
                    Sign In
                </p>
            </div>

            <div className={buttonStyle} >
                <p className='font-medium'>
                    Sign Up
                </p>
            </div>
        </div>
    </div>
  )
}

export default page