"use client"
import { order } from '@/modules/shared/utils/types'
import React from 'react'
import StarRatings from '../rating/StarRatings';
import RatingView from "@/modules/components/starrating"
type Props = {
    orderId : string,
    orderItem : order;
    buttonStyle : string
}

const Rating = ({orderId, orderItem , buttonStyle}: Props) => {
    const [isOpen , setIsOpen] = React.useState(false)
  return (
    <div>
        {
             !orderItem.rating || orderItem.rating === 0 ?  <>
             {
                 isOpen ? <StarRatings orderId={orderId} orderItem = {orderItem}/> : <button onClick = {() => setIsOpen(true)}  className={buttonStyle}>
                 Give Rating
               </button>
             }
             </> :  <>
             <RatingView rating = {orderItem.rating}/>
             </>
           
        }
        
        </div>
  )
}

export default Rating