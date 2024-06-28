import React from "react";
import ProductSlider from "@/modules/components/ProductSlider/productSlider";
import { getBestSellers } from "@/app/actions";

type Props = {};

const index = async () => {
  const data = await getBestSellers();
  console.log("data", data);

  return (
    <>
      <div>
        <h1 className="flex font-bold items-start text-textColor justify-start text-4xl pb-8">
          Our Best Sellers
        </h1>
      </div>
      <ProductSlider products={data} />
      <div className="p-16"></div>
    </>
  );
};

export default index;
