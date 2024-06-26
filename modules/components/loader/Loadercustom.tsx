import Image from 'next/image'
import React from 'react'

type Props = {}

const Loadercustom = (props: Props) => {
  return (
    <div className=''>
        <Image 
            src="/icons/loading-circle.svg"
            alt='loading'
            width={50}
            height={50}
        />
    </div>
  )
}

export default Loadercustom