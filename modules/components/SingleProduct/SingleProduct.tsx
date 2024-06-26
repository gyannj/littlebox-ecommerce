"use client";
import React, { useState } from "react";
import Image from "next/image";
import { cart_item, inventory } from "@/modules/shared/utils/types";
import { addToCart } from "@/app/product/[...slug]/actions";

const buttonStyle =
  "flex flex-row bg-dark-3 justify-center items-center py-2 px-4 size-fit rounded-lg hover:cursor-pointer hover:bg-slate-700 text-textColor";

const SingleProduct = ({ product }: { product: inventory }) => {
  const [quantity, setQuantity] = useState(1);
  const item = [
    {
      categoryId: product.categoryId,
      productId: product.productId,
      price: product.price,
      quantity: quantity,
    },
  ];
  const addCart = async () => {
    await addToCart(item);
  };
  return (
    <div className="bg-dark-1 flex flex-row items-center justify-center p-4">
      <div className="w-4/12 md:h-96 mt-10 flex flex-col items-center justify-between md:grid md:grid-cols-[40%_60%]">
        <div className="bg-dark-1 my-auto mx-auto">
          <div className="w-full h-84 relative">
            <Image
              src={`${product.image_url}`}
              height={420}
              width={420}
              style={{ objectFit: "contain" }}
              alt="Picture of the author"
              className="rounded-lg mr-12"
            />
          </div>
        </div>

        <div className="bg-dark-1 flex flex-col justify-center pl-12 pt-6">
          <h2 className="text-3xl font-bold text-textColor mb-6">
            {product.name}
          </h2>
          <p className="text-green-600 mb-6">In Stock</p>
          <p className="text-md mb-1 text-textColor">Publication Year: 2008</p>
          <p className="text-md mb-6 text-textColor">Author Name: Anonymous</p>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <h1 className="text-lg font-bold text-textColor">Price:</h1>
              <p className="text-lg text-textColor">${product.price}</p>
            </div>
            <div className="flex gap-2 mt-2">
              <p className=" text-textColor text-md">Quantity:</p>
              <select
                className="border border-gray-300 rounded-md  w-auto"
                onChange={(e) => setQuantity(parseInt(e.target.value))}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>

          <div className="flex gap-2 mt-3 text-sm md:text-xs pt-6">
            <div className={buttonStyle}>
              <button onClick={addCart}>Add to Cart</button>
            </div>
            <div className={buttonStyle}>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
