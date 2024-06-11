import { SearchIcon, ShoppingCartIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Nav from './Nav'

type Props = {}

const linkStyle = 'p-2 px-3 mx-3 hover:bg-dark-3 rounded-md';

  const index = (props: Props) => {

  return (
    <div className='flex flex-row justify-between p-2 bg-dark-2 items-center'>
      <div className='flex'>
        <Image src='/next.svg' alt='logo' width={100} height={60} className='bg-white rounded-md p-4' />
      </div>

      <Nav />
    </div>
  )
}

export default index