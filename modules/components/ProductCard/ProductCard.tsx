import React from 'react'
import Image from 'next/image'


function ProductCard() {
  return (
    <div className='h-3/4 w-3/4 mx-auto my-auto '>
      <div className="max-w-sm rounded overflow-hidden shadow-lg ">

        
        <div className='my-2 relative flex justify-center h-96 items-center' >
        <Image src="/bookcover.jpg" fill alt="Sunset in the mountains" className='object-contain' />
        </div>


        {/* <img className="w-full" src="/apple-watch.png" alt="Sunset in the mountains" /> */}
        <div className="px-4 py-4  text-textColor">
          <div className="font-bold text-2xl mb-2">Apple Watch</div>
          {/* <p className=" text-base">
            Lorem ipsum dol
          </p> */}
          
          <div className="font-medium text-base mb-2 mt-2">Rs 1500</div>
        </div>


        {/* <div className="px-6 pt-4 pb-2">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded">
            Buy Now
          </button>
        </div> */}
      </div>
    </div>

  )
}

export default ProductCard