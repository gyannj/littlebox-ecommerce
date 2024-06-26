"use client"
import { createOrder } from '@/app/cart/actions';
import { cart_product } from '@/modules/shared/utils/types';
import React from 'react'

const BuyButton =(cartItems:any) => {

    const buy = async () => {
        if(cartItems !== 500){
          await createOrder(cartItems.cartItems)
        }
      }
  return (
    <div className=''>
       <div className="bg-dark-3 rounded-2xl  p-4 md:mt-10 h-32 w-8/12 md:w-auto ">
       <div className="text-lg font-bold mb-4 text-textColor">Subtotal (4 items) : $500</div>
       <div className='flex flex-col'>
         <button onClick={buy}  className="bg-dark-1 hover:bg-blue-600 text-textColor font-bold py-2 px-4 rounded ">
           Proceed to Buy
         </button>
       </div>
       
       </div>
    </div>
  )
}

export default BuyButton