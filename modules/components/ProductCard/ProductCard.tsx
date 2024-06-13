import React from 'react';
import PropTypes from 'prop-types';

function ProductCard({
  productName,
  price,
  originalPrice,
  discount,
  productImage,
  ratings,
}: {
  productName: string;
  price: string;
  originalPrice: string;
  discount: string;
  productImage: string;
  ratings: number;
}) {
  return (
    <div className="flex justify-center items-center mt-4">
      <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl w-full sm:w-3/4 lg:w-1/2 xl:w-2/3 rounded overflow-hidden shadow-lg">
        <div className="relative h-64 sm:h-72 md:h-80 lg:h-96">
          <img
            src={productImage}
            alt={productName}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="px-4 py-4 text-textColor">
          <div className="font-bold lg:text-2xl md:text-xl text-lg mb-2">{productName}</div>
          <div className="flex flex-col sm:flex-row items-center justify-between mb-2">
            <div className='flex gap-2 items-baseline'>
              <div className="text-white font-medium mb-2 sm:mb-0 text-sm md:text-lg lg:text-lg">
                {price}
              </div>
              <div className="text-gray-500 line-through mr-2 sm:mr-0 sm:ml-2 text-sm">
                {originalPrice}
              </div>
            </div>
            <div className="text-xs text-green-500">{discount}</div>
          </div>
          <div className="flex items-center mt-2">
            {[...Array(ratings)].map((_, index) => (
              <span key={index} className="text-yellow-500 mr-1">
                ★
              </span>
            ))}
            {[...Array(5 - ratings)].map((_, index) => (
              <span key={index} className="text-yellow-500 mr-1">
                ☆
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  originalPrice: PropTypes.string.isRequired,
  discount: PropTypes.string.isRequired,
  productImage: PropTypes.string.isRequired,
  ratings: PropTypes.number.isRequired,
};

export default ProductCard;





















// import React from 'react';
// import dynamic from 'next/dynamic';

// const LazyImage = dynamic(() => import('next/image'), { ssr: false });

// function ProductCard() {
//   return (
//     <div className="flex justify-center items-center mt-4">
//       <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl w-full sm:w-3/4 lg:w-1/2 xl:w-2/3 rounded overflow-hidden shadow-lg">
//         <div className="relative h-64 sm:h-72 md:h-80 lg:h-96">
//           <LazyImage src="/bookcover.jpg" alt="Book Cover" layout="fill" objectFit="cover" />
//         </div>
//         <div className="px-4 py-4 text-textColor">
//           <div className="font-bold text-lg sm:text-xl mb-2">Apple Watch</div>
//           <div className="flex flex-col sm:flex-row items-center justify-between mb-2">
//             <div className="text-white font-semibold mb-2 sm:mb-0">Rs 1500</div>
//             <div className="text-gray-500 line-through mr-2 sm:mr-0 sm:ml-2">Rs 2000</div>
//             <div className="text-xs text-green-500">20% off</div>
//           </div>
//           <div className="flex items-center mt-2">
//             <span className="text-yellow-500 mr-1">&#9733;</span>
//             <span className="text-yellow-500 mr-1">&#9733;</span>
//             <span className="text-yellow-500 mr-1">&#9733;</span>
//             <span className="text-yellow-500 mr-1">&#9733;</span>
//             <span className="text-yellow-500">&#9734;</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;














// import React from 'react';
// import dynamic from 'next/dynamic';

// const LazyImage = dynamic(() => import('next/image'), { ssr: false });

// function ProductCard() {
//   return (
//     <div className="flex justify-center items-center mt-4">
//       <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl w-full sm:w-3/4 lg:w-1/2 xl:w-2/3 rounded overflow-hidden shadow-lg">
//         <div className="relative h-64 sm:h-72 md:h-80 lg:h-96">
//           <LazyImage src="/bookcover.jpg" alt="Book Cover" layout="fill" objectFit="cover" />
//         </div>
//         <div className="px-4 py-4 text-textColor">
//           <div className="font-bold text-lg sm:text-xl mb-2">Apple Watch</div>
//           <div className="font-medium text-base mb-2 mt-2">Rs 1500</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;




































































// import React from 'react'
// import Image from 'next/image'


// function ProductCard() {
//   return (
//     <div className='h-3/4 w-3/4 mx-auto my-auto '>
//       <div className="max-w-sm rounded overflow-hidden shadow-lg ">

        
//         <div className='my-2 relative flex justify-center h-96 items-center' >
//         <Image src="/bookcover.jpg" fill alt="Sunset in the mountains" className='object-contain' />
//         </div>


//         {/* <img className="w-full" src="/apple-watch.png" alt="Sunset in the mountains" /> */}
//         <div className="px-4 py-4  text-textColor">
//           <div className="font-bold text-2xl mb-2">Apple Watch</div>
//           {/* <p className=" text-base">
//             Lorem ipsum dol
//           </p> */}
          
//           <div className="font-medium text-base mb-2 mt-2">Rs 1500</div>
//         </div>


//         {/* <div className="px-6 pt-4 pb-2">
//           <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded">
//             Buy Now
//           </button>
//         </div> */}
//       </div>
//     </div>

//   )
// }

// export default ProductCard