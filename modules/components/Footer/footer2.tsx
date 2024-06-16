import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

type Props = {}

const linkStyle = 'p-2 px-3 mx-3 hover:bg-dark-3 rounded-md';

const footer2 = (props: Props) => {
  return (
    <footer className='flex flex-row justify-between bg-dark-2 text-textColor items-center pl-20 pr-40' >
        <div className='flex'>
            {/* Replace with Footer Image */}
            <Image src='/next.svg' alt='logo' width={200} height={120} className='bg-white rounded-md p-2' />
        </div>

        <div className='flex flex-col p-2 items-center'>
            <Link href='/' className={linkStyle}>
                About Us
            </Link>
            <Link href='/' className={linkStyle}>
                Developers
            </Link>
            <Link href='/' className={linkStyle}>
                Repository Link
            </Link>
        </div>
    </footer>
  )
}

export default footer2