import React from 'react'
import ProductSlider from "@/modules/components/ProductSlider/productSlider";
import { getProductsByCategoryId } from '@/app/actions';
import { inventory } from '@/modules/shared/utils/types';

type Props = {
  categoryName : string
  categoryId : string
}

const index = async ({categoryId , categoryName}: Props) => {
  const data = await getProductsByCategoryId(categoryId)
  console.log("data", data)
  return (
    <>
      <div>
        <h1 className='flex font-bold items-start text-textColor justify-start text-4xl'>{categoryName}</h1>
      </div>
      <ProductSlider products = {data} />
    </>
    // <div className='flex justify-center items-center h-screen w-[300px] sm:w-11/12  bg-green-700'>
  // </div>
    
  )
}

export default index