import Image from 'next/image'
import React from 'react'
import Nav from './Nav'
import { getServerSession } from 'next-auth' 
import { authOptions } from '@/app/api/auth/[...nextauth]/options'
type Props = {}

  const index = async (props: Props) => {
    const data= await getServerSession(authOptions)
    console.log("user",data)
  return (
    <div className='fixed w-screen z-20'>
      <header className='flex flex-row justify-between p-2 py-4 bg-dark-2 items-center'>
        <div className='flex'>
          <Image src='/next.svg' alt='logo' width={100} height={60} className='bg-white rounded-md p-2' />
        </div>
        <Nav />
      </header>
    </div>
  )
}

export default index