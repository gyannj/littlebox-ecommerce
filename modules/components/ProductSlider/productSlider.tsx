

import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from '../ProductCard/ProductCard';

function ProductSlider() {
    return (
        <div className='h-3/4 w-full bg-black'>
            <Carousel className='h-full' opts={{ align: "start", loop: true }}>
                <CarouselContent className='flex'>

//                     <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto"><ProductCard/></CarouselItem>
//                     <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto"><ProductCard/></CarouselItem>
                    
//                     <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto "><ProductCard/></CarouselItem>
//                     <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto"><ProductCard/></CarouselItem>
//                     <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto"><ProductCard/></CarouselItem>
                    
//                     <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto "><ProductCard/></CarouselItem>
//                     <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto"><ProductCard/></CarouselItem>
//                     <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto"><ProductCard/></CarouselItem>
                    
//                     <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto "><ProductCard/></CarouselItem>
//                     <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto"><ProductCard/></CarouselItem>
//                     <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto"><ProductCard/></CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}

export default ProductSlider;













// import React from 'react'
// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
// } from "@/components/ui/carousel"
// import ProductCard from '../ProductCard/ProductCard'


// function ProductSlider() {
//     return (
        

//         <div className=' h-3/4 w-full bg-black '> 
//         {/* basis-full */}
            

//             <Carousel className='h-full'
//              opts={{
//                  align: "start",
//                  loop: true,
//                  }}
                 
//                  >
//                 <CarouselContent className='my-auto '>
//                     {/* pt-20 */}
//                     <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto "><ProductCard/></CarouselItem>
//                     <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto"><ProductCard/></CarouselItem>
//                     <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto"><ProductCard/></CarouselItem>
                    
//                     <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto "><ProductCard/></CarouselItem>
//                     <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto"><ProductCard/></CarouselItem>
//                     <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto"><ProductCard/></CarouselItem>
                    
//                     <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto "><ProductCard/></CarouselItem>
//                     <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto"><ProductCard/></CarouselItem>
//                     <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto"><ProductCard/></CarouselItem>
                    
//                     <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto "><ProductCard/></CarouselItem>
//                     <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto"><ProductCard/></CarouselItem>
//                     <CarouselItem className="md:basis-1/2 lg:basis-1/3 my-auto"><ProductCard/></CarouselItem>
                    
//                 </CarouselContent>
//                 <CarouselPrevious />
//                 <CarouselNext />
//             </Carousel>

//                     </div>
        
        
//     )
// }

// export default ProductSlider