import { X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'


const linkStyle = 'p-2 px-3 mx-3 hover:bg-dark-3 rounded-md text-3xl my-8';

const NavMobile = ({isOpen , closeMenu}:{isOpen:boolean , closeMenu:() => void}) => {
  return (
    <>
        <div className='flex justify-end text-textColor m-4' onClick={closeMenu}>
            <X size={40} />
        </div>

        <div className='flex flex-col bg-dark-2 text-textColor align-between justify-center items-center'>
            <Image src='/next.svg' alt='logo' width={120} height={80} className='bg-white rounded-md p-4 mt-4 mb-10' />
            <Link href='/' className={linkStyle} >
                Home
            </Link>
            <Link href='/' className={linkStyle}>
                Categories
            </Link>
            <Link href='/' className={linkStyle}>
                Account
            </Link>
        </div>
    </>
  )
}

export default NavMobile