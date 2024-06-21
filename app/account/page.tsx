import Image from 'next/image'
import React from 'react'

type Props = {}

const name = 'Rituraj Gautam';
const email = 'rgautam@gmail.com';
const mobNum = 1234567890;
const address = 'Dispur, Guwahati, Assam, India';
const pinCode = 781006;

const pHeading = 'text-2xl text-purpleText font-semibold';
const pData = 'text-xl font-medium';

const page = (props: Props) => {
  return (
    <div className='bg-dark-1 p-8 text-textColor'> 
        <div className='text-textColor font-bold text-4xl mb-10 mx-16'>
            My Account
        </div>
        <div className='flex flex-row justify-between px-16 items-center'>
            <div className='flex flex-col gap-8'>
                <div className='gap-4'>
                    <p className={pHeading}>
                        Name
                    </p>
                    <p className={pData}>
                        {name}
                    </p>
                </div>
                <div className='gap-4'>
                    <p className={pHeading}>
                        Email ID
                    </p>
                    <p className={pData}>
                        {email}
                    </p>
                </div>
                <div className='gap-4'>
                    <p className={pHeading}>
                        Mobile Number
                    </p>
                    <p className={pData}>
                        {mobNum}
                    </p>
                </div>
                <div className='gap-4'>
                    <p className={pHeading}>
                        Address
                    </p>
                    <p className={pData}>
                        {address}
                    </p>
                </div>
                <div className='gap-4'>
                    <p className={pHeading}>
                        Pincode
                    </p>
                    <p className={pData}>
                        {pinCode}
                    </p>
                </div>
            </div>

            <div className='rounded-3xl object-fit'>
                <Image 
                    src='/UserImage.jpeg'
                    height={1200}
                    width={400}
                    alt='User Image'       
                    className='rounded-3xl'         
                />
            </div>
        </div>
    </div>
  )
}

export default page