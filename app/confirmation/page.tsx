import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-dark-3 p-8 rounded-lg shadow-lg max-w-md w-full border border-solid outline-1 border-gray-700">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-textColor mb-4">Order Confirmed!</h1>
          <Image className='mx-auto'
            src="/ticktick.gif"
            width={200}
            height={200}
            alt="tick"
          />
          <p className="text-lg text-gray-400 mb-4">Thank you for your purchase.</p>
          <p className="text-md text-gray-400 mb-8">You have successfully placed your order.</p>
          {/* <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-md text-gray-600">Your Order ID:</p>
            <p className="text-xl font-semibold text-gray-800">12345</p>
          </div> */}
          <div className="mt-8">
            <a
              href="/"
              className="bg-dark-2 text-white font-bold py-2 px-4 rounded hover:bg-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Continue Shopping
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page