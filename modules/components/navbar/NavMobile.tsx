import { Link } from 'lucide-react'
import React from 'react'

type Props = {}

const linkStyle = 'p-2 px-3 mx-3 hover:bg-dark-3 rounded-md';

const NavMobile = (props: Props) => {
  return (
    <div className='flex flex-col text-textColor align-between justify-center items-center'>
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
  )
}

export default NavMobile