import { Link } from 'lucide-react'
import React from 'react'


const linkStyle = 'p-2 px-3 mx-3 hover:bg-dark-3 rounded-md';

const NavMobile = ({isOpen}:{isOpen:boolean}) => {
  return (
    <div className='flex flex-col text-textColor align-between justify-center items-center'>
                <a href='/' className={linkStyle}>Home</a>
                <a href='/' className={linkStyle}>Products</a>
                
                </div>
  )
}

export default NavMobile