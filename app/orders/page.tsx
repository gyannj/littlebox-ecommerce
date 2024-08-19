import React from "react";
import OrderCard from "@/modules/components/ordercard/index";
import { getServerSession } from "next-auth";
import { getOrders } from "../actions";
import { authOptions } from "../api/auth/[...nextauth]/options";

const Page = async () => {
  const sessions = await getServerSession(authOptions);
  console.log(sessions);
  let userId: string = "";
  if (sessions && "userId" in sessions) {
    userId = sessions.userId as string;
  }

  console.log(userId);

  const orders = await getOrders(userId);
  console.log(orders);

  return (
    <div className="bg-dark-1 p-8 py-24 min-h-screen">
      <div className="text-textColor font-bold text-4xl mb-10 mx-16">
        My Orders
      </div>

      {orders.map((singleOrder) =>
        singleOrder.order_items.map((order, index) => (
          <div className="flex flex-col gap-10" key={index}>
            <OrderCard
              orderDate={singleOrder.created_at}
              price={singleOrder.price}
              custName={singleOrder.first_name + " " + singleOrder.last_name}
              orderID={singleOrder.orderId}
              bookName={order.product_name}
              pubYear={2019}
              qnty={order.quantity}
              authorName={order.product_name}
              orderImage={order.img}
              order={order}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default Page;
