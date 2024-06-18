import React from 'react';
import Image from 'next/image';

const CartCard = () => {
  return (
    <div className='bg-dark-1 flex justify-center'>
      <div className='bg-dark-3 w-8/12 h-72 rounded-2xl mt-10 grid grid-cols-[20%_60%_20%]'>

        <div className='bg-dark-3 my-auto rounded mx-auto'>
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


        <div className='bg-dark-3 flex flex-col justify-center pl-4 pt-6'>
          <h2 className='text-2xl font-bold text-textColor'>Product Name</h2>
          <p className='text-green-600 mb-2'>In Stock</p>
          <p className='text-xs mb-1 text-textColor'>Publication Year: 2008</p>
          <p className='text-xs mb-4 text-textColor'>Author Name: Anonymous</p>
          <select className='border border-gray-300 rounded-md px-2 py-1 w-10'>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button className='bg-red-600 text-white px-2 py-1 rounded mt-2 w-32'>Delete</button>
        </div>


        <div className='bg-dark-3  pl-4 pt-14 rounded-r-2xl'>
          <h1 className='text-2xl font-bold text-textColor'>Price:</h1>
          <p className='text-md text-textColor'>$10.99</p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;





// import React from 'react';
// import Image from 'next/image';

// const CartCard = () => {
//   return (
//     <div className='bg-gray-400 min-h-screen flex justify-center'>
//       <div className='bg-green-200 w-8/12 h-auto rounded-2xl mt-10 grid grid-cols-[20%_60%_20%]'>
//         <div className='bg-red-200 my-auto rounded-l-2xl'>
//           <div className='w-full h-64 relative'>
//             <Image
//               src="/bookcover.jpg"
//               layout="fill"
//               objectFit="contain"
//               alt="Picture of the author"
//             />
//           </div>
//         </div>
//         <div className='bg-blue-200 flex flex-col justify-center'>
//           <h2 className='text-2xl font-bold'>Product Name</h2>
//           <p className='text-green-600'>In Stock</p>
//           <p className='text-xs'>Publication Year: 2008</p>
//           <p className='text-xs'>Author Name: Anonymous</p>
//           <select className='mt-2'>
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//           </select>
//           <button className='bg-red-500 text-white px-4 py-2 rounded mt-2'>Delete</button>
//         </div>
//         <div className='bg-violet-200 flex justify-center items-center rounded-r-2xl'>
//           <p className='text-xl font-bold'>$10.99</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartCard;

