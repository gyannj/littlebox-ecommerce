import Image from 'next/image'
import React from 'react'

type Props = {}

const index = (props: Props) => {
  return (
    <div className='flex-center h-screen w-full'>
        <Image 
            src="/icons/loading-circle.svg"
            alt='loading'
            width={50}
            height={50}
        />
    </div>
  )
}

export default index