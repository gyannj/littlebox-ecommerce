"use client"
import { createOrder } from '@/app/cart/actions';
import { generatePDF } from '@/modules/shared/utils/pdfUtils';
import { cart_product } from '@/modules/shared/utils/types';

import React from 'react'

interface BuyButtonProps {
  cartItems: cart_product[];
}
const testOrder = {
  "pk": "order#ee298630-8d45-4390-945b-62cde6ddea5c",
  "sk": "order#ee298630-8d45-4390-945b-62cde6ddea5c",
  "billing_address": {
   "address": "pssdjfksodf",
   "city": "alksfnaslkf",
   "pincode": 3243254324,
   "state": "lskjdglksd"
  },
  "created_at": "2024-06-26T20:01:11.702Z",
  "first_name": "kdfjdskf",
  "gs1pk": "d29bcfbc-f1ae-4e60-b8e0-d182fdbd5de5",
  "gs1sk": "2024-06-26T20:01:11.703Z",
  "last_name": "sldkfkjslkf",
  "orderId": "ee298630-8d45-4390-945b-62cde6ddea5c",
  "order_items": [
   {
    "category_id": "100",
    "img": "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1718964852/Ecommerce/thegreatgatsby_gngyz8.jpg",
    "product_id": "FIC002",
    "product_name": "The Great Gatsby",
    "quantity": 1,
    "rating": 4
   }
  ],
  "price": 12.5,
  "shipping_address": {
   "address": "pssdjfksodf",
   "city": "alksfnaslkf",
   "pincode": 3243254324,
   "state": "lskjdglksd"
  },
  "shipping_charges": 99
 }
const BuyButton = ({ cartItems }: BuyButtonProps) => {

  const handleProceedToCheckout = () => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };
  return (
    <div className=''>
       <div className="bg-dark-3 rounded-2xl  p-4 md:mt-10 h-32 w-8/12 md:w-auto ">
       <div className="text-lg font-bold mb-4 text-textColor">SubTotal: USD { cartItems.reduce((acc , cartItem) => acc + (cartItem.price * cartItem.quantity) ,0)}</div>
       <div className='flex flex-col'>
         <form action="/checkout"  onSubmit={handleProceedToCheckout}>   
            <input  className="bg-dark-1 hover:bg-blue-600 text-textColor font-bold py-2 px-4 rounded cursor-pointer" type="submit" value="Proceed to Checkout"/>
        </form>
       </div>
       <div onClick={() => {generatePDF(testOrder)}}>Create invoice</div>
       </div>
    </div>
  )
}

export default BuyButton