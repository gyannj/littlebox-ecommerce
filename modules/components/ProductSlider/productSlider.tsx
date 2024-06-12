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
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto "><ProductCard/></CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto"><ProductCard/></CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto"><ProductCard/></CarouselItem>
                    
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto "><ProductCard/></CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto"><ProductCard/></CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto"><ProductCard/></CarouselItem>
                    
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto "><ProductCard/></CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto"><ProductCard/></CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto"><ProductCard/></CarouselItem>
                    
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto "><ProductCard/></CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto"><ProductCard/></CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto"><ProductCard/></CarouselItem>
                    
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

                    </div>
        
        
    )
}

export default ProductSlider