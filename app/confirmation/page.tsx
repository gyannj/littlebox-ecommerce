import React from 'react'

const page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-green-500 mb-4">Order Confirmed!</h1>
          <p className="text-lg text-gray-700 mb-4">Thank you for your purchase.</p>
          <p className="text-md text-gray-500 mb-8">You have successfully placed your order.</p>
          {/* <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-md text-gray-600">Your Order ID:</p>
            <p className="text-xl font-semibold text-gray-800">12345</p>
          </div> */}
          <div className="mt-8">
            <a
              href="/"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
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