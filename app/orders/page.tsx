import React from "react";
import OrderCard from "@/modules/components/ordercard/index";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="bg-dark-1 p-8 py-24">
      <div className="text-textColor font-bold text-4xl mb-10 mx-16">
        My Orders
      </div>
      <div className="flex flex-col gap-10">
        <OrderCard
          orderDate="13 June, 2024"
          price={240}
          custName="R Gautam"
          orderID="171-121-123-124"
          bookName="The Calculating Stars"
          pubYear={2019}
          qnty={4}
          authorName="Rituraj Gautam"
        />
        <OrderCard
          orderDate="13 June, 2024"
          price={240}
          custName="R Gautam"
          orderID="171-121-123-124"
          bookName="The Calculating Stars"
          pubYear={2019}
          qnty={4}
          authorName="Rituraj Gautam"
        />
        <OrderCard
          orderDate="13 June, 2024"
          price={240}
          custName="R Gautam"
          orderID="171-121-123-124"
          bookName="The Calculating Stars"
          pubYear={2019}
          qnty={4}
          authorName="Rituraj Gautam"
        />
      </div>
    </div>
  );
};

export default page;
