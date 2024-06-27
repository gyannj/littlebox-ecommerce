"use client"
import React, { useState } from "react";
import Star from "./Star";
import { updateInventoryRating } from "@/app/actions";
import { order } from "@/modules/shared/utils/types";

function StarRatings({orderId, orderItem} : {orderId : string, orderItem : order}) {
  const [rating, setRating] = useState(0);

  async function clickHanlder (val : number) {
    const data = await updateInventoryRating(orderItem.category_id,orderItem.product_id,val,orderId)
    if(data){
      setRating(val);
    }
  } 



  function renderStarts() {
    return [1, 2, 3, 4, 5].map((val, idx) => (
      <Star
        key={idx}
        selected={val <= rating}
        onClick={() => clickHanlder(val)}
      />
    ));
  }
  return (
    <div className="flex flex-row">
      {renderStarts()}
    </div>
  );
}

export default StarRatings;
