"use client"

import useMediaQuery from '@/modules/shared/hooks/useMediaQuery';
import { AlignJustify, SearchIcon, ShoppingCartIcon} from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react'

type Props = {}

const linkStyle = 'p-2 px-3 mx-3 hover:bg-dark-3 rounded-md';

const Nav = (props: Props) => {
    const isAboveMediumScreen = useMediaQuery('(min-width: 768px)');
    const [isOpen, setIsOpen] = useState(false);

    return (
        <React.Fragment>
            <div className='flex justify-between items bg-dark-3 rounded-lg p-2 lg:w-[660px] md:flex-grow-0 flex-grow mx-6 md:mx-0'>
                <input type="text" placeholder='Search' className='flex bg-transparent outline-none text-searchBoxColor' />
                <SearchIcon className='text-searchBoxColor' />
            </div>
        
            {isAboveMediumScreen ? (
                <div className='flex text-textColor align-between justify-center items-center'>
                    <Link href='/' className={linkStyle} >
                        Home
                    </Link>
                    <Link href='/' className={linkStyle}>
                        Categories
                    </Link>
                    <Link href='/' className={linkStyle}>
                        Account
                    </Link>
                    <ShoppingCartIcon className='mx-3'/>
                </div>
            ) : (
                <div className='flex flex-row items-center justify-end text-textColor'>
                        <ShoppingCartIcon size={28} className='mx-3'/> 
                        <div onClick={() => {}}>
                            <AlignJustify size={28} className='mx-3 align-middle' /> 
                        </div> 
                </div>

                // Mobile Navbar


            )}
        </React.Fragment>
    )
}

export default Nav