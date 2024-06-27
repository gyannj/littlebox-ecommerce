"use client"
import React from 'react';
import Image from 'next/image';
import { cart_product } from '@/modules/shared/utils/types';
import { deleteCartItem } from '@/app/product/[...slug]/actions';

const CartCard = ({ items }: { items: cart_product[] }) => {
  return (
    <div className='bg-dark-1 flex flex-col gap-4'>
      {items.map((item: cart_product, index: number) => (
        <div key={index} className='bg-dark-3 rounded-lg overflow-hidden flex flex-col md:flex-row gap-4'>
          <div className='md:w-1/4'>
            <div className='w-full h-64 relative'>
              <Image
                src={item.image_url}
                alt={item.name}
                layout='fill'
                objectFit='contain'
                className='rounded-lg'
              />
            </div>
          </div>

          <div className='md:w-1/2 flex flex-col justify-center p-4'>
            <h2 className='text-xl md:text-2xl font-bold text-textColor truncate'>{item.name}</h2>
            <p className='text-green-600 mb-2'>In Stock: {item.stock}</p>
            <p className='text-sm md:text-xs mb-1 text-textColor'>Publication Year: 2008</p>
            <p className='text-sm md:text-xs mb-4 text-textColor'>{item.vendor}</p>
            <p className='text-sm md:text-xs text-textColor'>Quantity: {item.quantity}</p>
          </div>

          <div className='md:w-1/4 bg-dark-3 p-4 flex items-center justify-center'>
            <div className='text-xl font-bold text-textColor'>Price:</div>
            <div className='text-xl font-bold text-textColor ml-2'>${item.price}</div>
          </div>

          <div className='md:w-1/4 bg-dark-3 p-4 flex items-center justify-center'>
            <button className='bg-red-600 hover:bg-red-800 text-white px-2 py-1 rounded' onClick={() => deleteCartItem(item.categoryId, item.productId)}>Delete</button>
          </div>
        </div>
      ))}
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

