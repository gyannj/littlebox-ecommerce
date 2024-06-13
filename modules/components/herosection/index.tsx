import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'

type Props = {}

const index = (props: Props) => {
  return (
    <div className='w-11/12  items-center bg-red-300'>
      
      <Carousel>
        <CarouselContent>
          <CarouselItem className='basis-full'>
          <div className='relative w-full h-[400px]'>
            <Image
              src="/hero2.jpg"
              fill
              alt="Picture of the author"
              className='object-cover'
              />
              </div>
              
          </CarouselItem>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

    </div>
  )
}

export default index