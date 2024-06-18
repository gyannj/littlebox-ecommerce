import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { MoveRight } from 'lucide-react';

type Props = {}

const linkStyle = 'p-2 px-3 mx-3 hover:bg-dark-3 rounded-md';

const footer2 = (props: Props) => {
  return (
    <footer className='flex flex-col bg-dark-2 text-textColor items-center p-6'>
        {/* <div className='text-6xl font-bold mb-10'>
            Thank you for visiting!
        </div> */}
        <div className='flex flex-row justify-between gap-24 mt-6'>
            <div className='flex flex-col gap-2' >
                <Image 
                    src='/next.svg'
                    width={240}
                    height={200}
                    alt='logo' 
                    className='bg-textColor p-2'
                />
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-xl font-semibold'>VISIT US</h1>
                <p className='w-64'>NIT Silchar, NIT Silchar Road, Fakirtila, Silchar, Assam, India</p>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-xl font-semibold'>LEARN</h1>
                <p>About Us</p>
                <p>Developers</p>
                <p>FAQ</p>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-xl font-semibold'>LET'S TALK SHOP</h1>
                <div className='flex flex-col gap-1'>
                    <p className='w-48'>Questions? Comments? Email Us!</p>
                    <Link href='/'>mail@gmail.com</Link>    
                </div>
                <div className='flex flex-col gap-1 pt-2'>
                    <p className='w-48'>Shoot us a text!</p>
                    <Link href='/'>9988776655</Link>    
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <p>Join 1000+ other know-what's-good-for-'em book lovers who already get our weekly emails.</p>
                <div className='flex flex-row items-center bg-dark-3 w-56 rounded-md text-searchBoxColor'>
                    <input type="email" placeholder='Email' className='flex p-2 bg-transparent'/>
                    <MoveRight size={20} />
                </div>
            </div>
        </div>
    </footer>
  )
}

export default footer2