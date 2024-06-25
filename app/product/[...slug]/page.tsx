import React from "react";
import SingleProduct from "@/modules/components/SingleProduct/SingleProduct";
import { getSingleProduct } from "./actions";
interface PageProps {
  params: {
    slug: string[];
  };
}

const page = async ({ params }: PageProps) => {
  const categoryId = params.slug[0];
  const productId = params.slug[1];
  const data = await getSingleProduct(categoryId, productId);
  if (data === 500) {
    return <div>product not found</div>;
  } else
    return (
      <div className="mb-24">
        <SingleProduct product={data} />
      </div>
    );
};

export default page;
