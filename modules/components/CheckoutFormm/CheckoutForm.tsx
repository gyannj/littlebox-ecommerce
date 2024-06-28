"use client";
import { useEffect, useRef, useState } from "react";
import { createOrder } from "@/app/cart/actions";
import { useRouter } from "next/navigation";

import React from "react";
import { generatePDF } from "@/modules/shared/utils/pdfUtils";

const placeholderStyle =
  "flex bg-dark-3 outline-none text-searchBoxColor font-medium w-full p-2 rounded-md mt-1";

const labelStyle = "block text-textColor text-sm font-bold mb-2";

const CheckoutForm = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const ref = useRef<HTMLFormElement>(null);
  const handleFormSubmit = async (formData: FormData) => {
    const formDataCopy = formData;
    ref.current?.reset();
    try {
      const newOrder = await createOrder(cartItems, formDataCopy);
      router.push("/confirmation");
      if (newOrder !== 500) {
        generatePDF(newOrder);
      }
    } catch (error) {
      console.log("Error Checking Out: ", error);
    }
  };
  return (
    <div className="max-w-md mx-auto m-10 p-6 bg-dark-2 flex flex-col rounded-lg shadow-md">
      <form
        ref={ref}
        action={(formData) => {
          handleFormSubmit(formData);
        }}
        className="flex flex-col"
      >
        <h2 className="text-2xl text-purpleText font-semibold mb-6 text-center">
          Shipping Address
        </h2>
        <div className="mb-4">
          <label className={labelStyle}>
            Address:
            <input
              type="text"
              name="address.address"
              className={placeholderStyle}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className={labelStyle}>
            Pincode:
            <input
              type="string" // number to string
              name="address.pincode"
              className={placeholderStyle}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className={labelStyle}>
            State:
            <input
              type="text"
              name="address.state"
              className={placeholderStyle}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className={labelStyle}>
            City:
            <input
              type="text"
              name="address.city"
              className={placeholderStyle}
            />
          </label>
        </div>
        <h2 className="text-2xl text-purpleText mt-16 font-semibold mb-6 text-center">
          Personal Information
        </h2>
        <div className="mb-4">
          <label className={labelStyle}>
            First Name:
            <input type="text" name="first_name" className={placeholderStyle} />
          </label>
        </div>
        <div className="mb-4">
          <label className={labelStyle}>
            Last Name:
            <input type="text" name="last_name" className={placeholderStyle} />
          </label>
        </div>
        <div className="flex flex-row justify-center items-center">
          <button
            type="submit"
            className="bg-dark-3 py-2.5 px-4 size-fit rounded-lg hover:cursor-pointer hover:bg-slate-700 text-textColor"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
