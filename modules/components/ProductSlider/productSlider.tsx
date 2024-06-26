import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "../ProductCard/ProductCard";
import { inventory } from "@/modules/shared/utils/types";
import Link from "next/link";
type props = {
  products: inventory[];
};
function ProductSlider({ products }: props) {
  console.log("products", products);
  const calculateDiscount = (
    originalPrice: number,
    sellingPrice: number
  ): number => {
    const discount = ((originalPrice - sellingPrice) / originalPrice) * 100;
    return parseFloat(discount.toFixed(2));
  };
  return (
    <div className="basis-full h-3/4 w-full my-10 ">
      <Carousel opts={{ align: "start", loop: true }}>
        <CarouselContent className="">
          {products.map((product: inventory, index: number) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 my-auto"
            >
              <Link
                href={`/product/${product.categoryId}/${product.productId}`}
              >
                <ProductCard
                  productName={product.name}
                  price={product.price}
                  originalPrice={product.sellingPrice}
                  discount={calculateDiscount(
                    product.sellingPrice,
                    product.price
                  )}
                  productImage={product.image_url}
                  ratings={0}
                />
              </Link>
            </CarouselItem>
          ))}

          {/* Repeat CarouselItem for additional cards */}
        </CarouselContent>
        <CarouselPrevious className="text-textColor bg-dark-2" />
        <CarouselNext className="text-textColor bg-dark-2" />
      </Carousel>
    </div>
  );
}

export default ProductSlider;
