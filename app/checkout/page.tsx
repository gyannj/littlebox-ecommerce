"use client";
import { useEffect, useRef, useState } from "react";
import { createOrder } from "../cart/actions";
import { useRouter } from "next/navigation";

const placeholderStyle =
  "flex bg-dark-3 outline-none text-searchBoxColor font-medium w-full p-2 rounded-md mt-1";

const labelStyle = "block text-textColor text-sm font-bold mb-2";

const page = () => {
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
      await createOrder(cartItems, formDataCopy);
      router.push("/confirmation");
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

export default page;

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
