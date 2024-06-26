"use client"
import React from 'react';
import Image from 'next/image';
import { cart_product, inventory } from '@/modules/shared/utils/types';
import { deleteCartItem } from '@/app/product/[...slug]/actions';

// type props = {
//   items : inventory[]
// }

const CartCard = ({items}: any) => {
  console.log(items)
  return (
    <div className='bg-dark-1 flex flex-col md:flex-row justify-center items-center gap-4 '>




  {items.map((item : cart_product , index : number) => (
      <div className='bg-dark-3 w-8/12 md:h-72 rounded-2xl mt-10 flex flex-col items-center md:grid md:grid-cols-[20%_60%_20%]'>

        <div className='bg-dark-3 my-auto rounded mx-auto'>
          <div className='w-full h-64 relative'>
            <Image
              src={`${item.image_url}`}
              height={160}
              width={160}
              style={{objectFit: "contain"}}
              alt="Picture of the author"
              className='rounded-lg ml-2'
            />
          </div>
        </div>


        <div className='bg-dark-3 flex flex-col justify-center pl-4 pt-6'>
          <h2 className='text-2xl font-bold text-textColor'>{item.name}</h2>
          <p className='text-green-600 mb-2'>In Stock: {item.stock}</p>
          <p className='text-xs mb-1 text-textColor'>Publication Year: 2008</p>
          <p className='text-xs mb-4 text-textColor'>{item.vendor}</p>
          <div className='flex gap-2'>
            <p className=' text-textColor'>Quantity: {item.quantity}</p>
            {/* <select value ={item.quantity} className='border border-gray-300 rounded-md px-2 py-1 w-10'>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select> */}
          </div>
          
          <button className='bg-red-600 hover:bg-red-800 text-white px-2 py-1 rounded mt-2 w-32' onClick={()=> deleteCartItem(item.categoryId,item.productId)}>Delete</button>
        </div>


        <div className='bg-dark-3 pl-4 pt-14 pb-4 rounded-r-2xl'>
          <h1 className='text-2xl font-bold text-textColor'>Price:</h1>
          <p className='md:text-md text-textColor'>${item.price}</p>
        </div>
      </div>

  ))
}
      

      






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

