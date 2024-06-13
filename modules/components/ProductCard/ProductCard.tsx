





import React from 'react'



function ProductCard() {
  return (
    <div className='h-fit w-3/4 mx-auto my-auto bg-white'>
      <div className="max-w-sm h-fit rounded overflow-hidden shadow-lg">
        <img className="w-full" src="/apple-watch.png" alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Apple Watch</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dol
          </p>
          <br></br>
          <div className="font-bold text-xl mb-2">Price: Rs 1500</div>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>

  )
}

export default ProductCard