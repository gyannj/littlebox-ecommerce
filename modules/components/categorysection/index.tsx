import React from 'react'
import ProductSlider from "@/modules/components/ProductSlider/productSlider";

type Props = {}

const index = (props: Props) => {
  return (
    
    <div className='flex justify-center items-center h-screen w-8/12 md:w-10/12 mx-auto bg-green-700'>
    <ProductSlider />
  </div>
    
  )
}

export default index