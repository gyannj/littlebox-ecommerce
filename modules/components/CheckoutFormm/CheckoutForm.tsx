import { useEffect, useRef, useState } from "react"
import { createOrder } from "@/app/cart/actions";
import { useRouter } from "next/navigation";


import React from 'react'
import { generatePDF } from "@/modules/shared/utils/pdfUtils";

const CheckoutForm = () => {

    const router = useRouter();
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
      const storedCartItems = localStorage.getItem('cartItems');
      if (storedCartItems) {
        setCartItems(JSON.parse(storedCartItems));
      }
    }, []);

    const ref = useRef<HTMLFormElement>(null)
    const handleFormSubmit =async (formData: FormData) => {
        const formDataCopy = formData;
        ref.current?.reset();
        try {
            const newOrder = await createOrder(cartItems,formDataCopy);
            router.push('/confirmation');
            if(newOrder !== 500){

              generatePDF(newOrder);
            }

        } catch (error) {
            console.log("Error Checking Out: ", error)
        }
    }
  return (
    <form 
     ref={ref}
    action = {(formData) => {
        handleFormSubmit(formData);
    }}>
      <h2 className="text-2xl font-semibold mb-6 text-center">Shipping Address</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Address:
          <input
            type="text"
            name="address.address"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Pincode:
          <input
            type="number"
            name="address.pincode"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          State:
          <input
            type="text"
            name="address.state"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          City:
          <input
            type="text"
            name="address.city"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
      </div>
      <h2 className="text-2xl font-semibold mb-6 text-center">Personal Information</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          First Name:
          <input
            type="text"
            name="first_name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Last Name:
          <input
            type="text"
            name="last_name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Submit
      </button>
    </form>
  )
}

export default CheckoutForm