import React from 'react'
import Image from 'next/image'

const SingleProduct = () => {
  return (
    <div className='bg-dark-1 flex flex-row justify-center items-center gap-4'>





      <div className='bg-dark-1 w-4/12 md:h-72 rounded-2xl mt-10 flex flex-col items-center md:grid md:grid-cols-[40%_60%]'>

        <div className='bg-dark-1 my-auto rounded mx-auto'>
          <div className='w-full h-64 relative'>
            <Image
              src="/bookcover.jpg"
              height={160}
              width={160}
              style={{objectFit: "contain"}}
              alt="Picture of the author"
              className='rounded-lg'
            />
          </div>
        </div>


        <div className='bg-dark-1 flex flex-col justify-center pl-4 pt-6'>
          <h2 className='text-lg font-bold text-textColor'>Product Name</h2>
          <p className='text-green-600 mb-2'>In Stock</p>
          <p className='text-xs mb-1 text-textColor'>Publication Year: 2008</p>
          <p className='text-xs mb-4 text-textColor'>Author Name: Anonymous</p>
          <div className='flex flex-col'>
          
                <div className='flex gap-2'>
                    <h1 className='text-md font-bold text-textColor'>Price:</h1>
                    <p className='text-md text-textColor'>$10.99</p>
                
                </div>
                <div className='flex gap-2 mt-2'>
                
                    <p className=' text-textColor text-sm'>Quantity:</p>
                    <select className='border border-gray-300 rounded-md  w-auto'>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    </select>
                </div>
            </div>
          
          <div className='flex gap-2 mt-3 text-sm md:text-xs'>
          <button className='bg-dark-3 hover:bg-blue-900 text-white px-3 md:px-6 py-1 rounded mt-2 w-auto'>Add to Cart</button>
          <button className='bg-dark-3 hover:bg-blue-900 text-white px-3 md:px-6 py-1 rounded mt-2 w-auto'>Buy Now</button>
          </div>
          
        </div>
        
      </div>


      

      







    </div>
  )
}

export default SingleProduct