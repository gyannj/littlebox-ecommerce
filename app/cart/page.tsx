import CartCard from '@/modules/components/CartCard/CartCard'
import React from 'react'
import { getCartItems, getProductsByCartItems } from '../product/[...slug]/actions'

const page =async () => {
  const cartItems = await getProductsByCartItems();
  console.log("cartItems", cartItems)
  return (
    <div className='flex bg-dark-1 gap-4 pb-4'>
    <div className='w-9/12'>
    {cartItems === 500 ? 
      <div className='text-textColor flex justify-center items-center'>No items in cart</div> : <CartCard items={cartItems}/>}
     
    </div>
    {cartItems === 500 ? null : 
       <div className=''>
       <div className="bg-dark-3 rounded-2xl  p-4 md:mt-10 h-32 w-8/12 md:w-auto ">
       <div className="text-lg font-bold mb-4 text-textColor">Subtotal (4 items) : $500</div>
       <div className='flex flex-col'>
         <button className="bg-dark-1 hover:bg-blue-600 text-textColor font-bold py-2 px-4 rounded ">
           Proceed to Buy
         </button>
       </div>
       
       </div>
 
     </div>
    }
   


    </div>
  )
}

export default page