import Image from 'next/image'
import React from 'react'
import Nav from './Nav'

type Props = {}

  const index = (props: Props) => {

  return (
    <div className='fixed w-screen'>
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