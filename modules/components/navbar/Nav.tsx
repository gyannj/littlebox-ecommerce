"use client"

import useMediaQuery from '@/modules/shared/hooks/useMediaQuery';
import { SearchIcon, ShoppingCartIcon} from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react'
import NavMobile from './NavMobile';
import BurgerButton from './HamBurgerButton';


type Props = {}

const linkStyle = 'p-2 px-3 mx-3 hover:bg-dark-3 rounded-md font-semibold ';

const Nav = (props: Props) => {
    const isAboveMediumScreen = useMediaQuery('(min-width: 768px)');
    const [isOpen, setIsOpen] = useState(false);

 const closeMenu = () => {
        setIsOpen(false);
 }

    return (
        <React.Fragment>
            <div className='flex justify-between items bg-dark-3 rounded-lg p-2 lg:w-5/12 md:flex-grow-0 flex-grow mx-6 md:mx-0'>
                <input type="text" placeholder='Search' className='flex bg-transparent outline-none text-searchBoxColor w-full' />
                <SearchIcon className='text-searchBoxColor' />
            </div>
        
            {isAboveMediumScreen ? (
                <div className='flex text-textColor align-between justify-center items-center'>
                    <Link href='/' className={linkStyle} >
                        Home
                    </Link>
                    <Link href='/' className={linkStyle}>
                        Orders
                    </Link>
                    <Link href='/' className={linkStyle}>
                        Account
                    </Link>
                    <ShoppingCartIcon className='mx-5 size-7'/>
                </div>
            ) : (
                <div className='flex flex-row items-center justify-end text-textColor'>
                        <ShoppingCartIcon size={28} className='mx-3'/> 
                        <div className='flex flex-col justify-end'>
                            <BurgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
                        </div> 
                </div>

                // Mobile Navbar


            )}
            {isOpen && (
                                <div className='fixed top-0 right-0 w-full h-full bg-dark-2 z-50'>
                                    <NavMobile isOpen={isOpen} closeMenu = {closeMenu} />
                                </div>
                            )}
        </React.Fragment>
    )
}

export default Nav