import React from 'react'
import ProductSlider from "@/modules/components/ProductSlider/productSlider";

type Props = {}

const index = (props: Props) => {
  return (
    <>
      <div>
        <h1 className='flex font-bold items-start text-textColor justify-start text-4xl'>Our Best Sellers</h1>
      </div>
      <ProductSlider />
    </>
    // <div className='flex justify-center items-center h-screen w-[300px] sm:w-11/12  bg-green-700'>
  // </div>
    
  )
}

export default index