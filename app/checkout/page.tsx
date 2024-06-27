"use client"

import CheckoutForm from "@/modules/components/CheckoutFormm/CheckoutForm"


const page = () => {
   
  

   
  return (
    <div className="max-w-md mx-auto m-10 p-6 bg-white rounded-lg shadow-md">
    <CheckoutForm/>
  </div>
  )
}

export default page


// const order : createOrderParams = {
//     created_at : new Date().toISOString(),
//     orderId : id,
//     order_items: cart.map((cartItem : cart_product) => ({
//       quantity: cartItem.quantity,
//       img: cartItem.image_url,
//       product_name: cartItem.name,
//       product_id: cartItem.productId,
//       category_id: cartItem.categoryId,
//     })),
//     billing_address: {
//       address: "123",
//       pincode: 781028,
//       state: "Assam",
//       city: "Guwahati"
//     },
//     shipping_address:{
//       address: "123",
//       pincode: 781028,
//       state: "Assam",
//       city: "Guwahati"
//     },
//     first_name: "A", // First name of the customer
//     last_name: "B", // Last name of the customer
//     price: cart.reduce((acc , cartItem) => acc + (cartItem.price * cartItem.quantity) ,0), // Total price of the order
//     shipping_charges: 99
//   }