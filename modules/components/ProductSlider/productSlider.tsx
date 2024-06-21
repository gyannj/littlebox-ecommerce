import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from '../ProductCard/ProductCard';
import { inventory } from '@/modules/shared/utils/types';
type props = {
    products : inventory[]
}
function ProductSlider({products } : props ) {
    console.log("products", products)
    const calculateDiscount = (originalPrice : number , sellingPrice : number) => {
        const discount = ((originalPrice - sellingPrice)/ originalPrice) * 100
        return discount.toFixed(2)
    }
    return (
        <div className='basis-full h-3/4 w-full mt-10'>
            <Carousel opts={{ align: "start", loop: true }}>
                <CarouselContent className=''>
                    {
                        products.map((product : inventory , index : number) => (
                            <CarouselItem key = {index}className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 my-auto">
                                <ProductCard
                                    productName={product.name}
                                    price={`Rs ${product.price}`}
                                    originalPrice={`Rs ${product.sellingPrice}`}
                                    discount={`${calculateDiscount(product.sellingPrice , product.price)}% off`}
                                    productImage={product.image_url}
                                    ratings={0}
                        />
                    </CarouselItem>
                        ))
                    }
                        
                    {/* Repeat CarouselItem for additional cards */}
                </CarouselContent>
                <CarouselPrevious className='text-textColor bg-dark-2' />
                <CarouselNext className='text-textColor bg-dark-2' />
            </Carousel>
        </div>
    );
}

export default ProductSlider;
