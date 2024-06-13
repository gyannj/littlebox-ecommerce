import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import ProductCard from '../ProductCard/ProductCard'


function ProductSlider() {
    return (
        

        <div className='basis-full h-3/4 w-full bg-dark-2 '>
            

            <Carousel 
             opts={{
                 align: "start",
                 loop: true,
                 }}
                 
                 >
                <CarouselContent className=''>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto ">

                    <ProductCard
                    productName="Apple Watch"
                    price="Rs 1500"
                    originalPrice="Rs 2000"
                    discount="20% off"
                    productImage="/bookcover.jpg"
                    ratings={1}
                    />

                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto ">

                    <ProductCard
                    productName="Apple Watch"
                    price="Rs 1500"
                    originalPrice="Rs 2000"
                    discount="20% off"
                    productImage="/bookcover.jpg"
                    ratings={2}
                    />

                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto ">

                    <ProductCard
                    productName="Apple Watch"
                    price="Rs 1500"
                    originalPrice="Rs 2000"
                    discount="20% off"
                    productImage="/bookcover.jpg"
                    ratings={3}
                    />

                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto ">

                    <ProductCard
                    productName="Apple Watch"
                    price="Rs 1500"
                    originalPrice="Rs 2000"
                    discount="20% off"
                    productImage="/bookcover.jpg"
                    ratings={4}
                    />

                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto ">

                    <ProductCard
                    productName="Apple Watch"
                    price="Rs 1500"
                    originalPrice="Rs 2000"
                    discount="20% off"
                    productImage="/bookcover.jpg"
                    ratings={5}
                    />

                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto ">

                    <ProductCard
                    productName="Apple Watch"
                    price="Rs 1500"
                    originalPrice="Rs 2000"
                    discount="20% off"
                    productImage="/bookcover.jpg"
                    ratings={5}
                    />

                    </CarouselItem>
                   
                    
                    
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

                    </div>
        
        
    )
}

export default ProductSlider