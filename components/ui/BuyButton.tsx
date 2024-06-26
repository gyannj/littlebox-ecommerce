"use client"
import { createOrder } from '@/app/cart/actions';
import { cart_product } from '@/modules/shared/utils/types';
import React from 'react'

const BuyButton =(cartItems:any) => {

  const handleProceedToCheckout = () => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems.cartItems));
  };
  return (
    <div className=''>
       <div className="bg-dark-3 rounded-2xl  p-4 md:mt-10 h-32 w-8/12 md:w-auto ">
       <div className="text-lg font-bold mb-4 text-textColor">Subtotal (4 items) : $500</div>
       <div className='flex flex-col'>
         <form action="/checkout"  onSubmit={handleProceedToCheckout}>   
            <input  className="bg-dark-1 hover:bg-blue-600 text-textColor font-bold py-2 px-4 rounded cursor-pointer" type="submit" value="Proceed to Checkout"/>
        </form>
       </div>
       
       </div>
    </div>
  )
}

export default BuyButton