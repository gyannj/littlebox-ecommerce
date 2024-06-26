
import CartCard from '@/modules/components/CartCard/CartCard'
import React from 'react'
import { getCartItems, getProductsByCartItems } from '../product/[...slug]/actions'
import { cart_product } from '@/modules/shared/utils/types';
import { createOrder } from './actions';
import BuyButton from '@/components/ui/BuyButton';


const page = async () => {
  const cartItems = await getProductsByCartItems();
 
  console.log("cartItems", cartItems)
  return (

    <div className='flex flex-col md:flex-row bg-dark-1 gap-4 pb-4'>
    <div className='w-9/12 mx-auto'>
    {cartItems === 500||cartItems.length == 0 ? 
      <div className='text-textColor flex flex-col justify-center items-center ml-16'>No items in cart</div> : <CartCard items={cartItems}/>}
     
    </div>
    {cartItems === 500||cartItems.length == 0 ? null : 
      <BuyButton cartItems = {cartItems}/>
     
    }
   


    </div>

  )
  
}

export default page

