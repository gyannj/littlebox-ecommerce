import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  orderDate: any;
  price: number;
  custName: string;
  orderID: string;
  bookName: string;
  pubYear: number;
  authorName: string;
  qnty: number;
};

const headerLabel = "text-purpleText font-medium text-md";
const detailsHeader = "font-base text-sm";
const buttonStyle =
  "bg-dark-1 px-6 py-2 text-lg rounded-md w-40 flex justify-center font-medium hover:bg-dark-2";

const index = ({
  orderDate,
  price,
  custName,
  orderID,
  bookName,
  pubYear,
  authorName,
  qnty,
}: Props) => {
  return (
    <div className="flex flex-col text-textColor bg-dark-3 mx-16 rounded-2xl">
      <div className="flex flex-row justify-between bg-dark-2 p-4 rounded-t-2xl">
        <div className="flex flex-row">
          <div className="px-4">
            <p className={headerLabel}>ORDER PLACED</p>
            <p className={detailsHeader}>{orderDate}</p>
          </div>
          <div className="px-4">
            <p className={headerLabel}>TOTAL VALUE</p>
            <p className={detailsHeader}>${price}</p>
          </div>
          <div className="px-4">
            <p className={headerLabel}>SHIPPING TO</p>
            <p className={detailsHeader}>{custName}</p>
          </div>
        </div>

        <div className="flex flex-col items-end justify-end px-4">
          <p className={headerLabel}>ORDER ID</p>
          <p className={detailsHeader}>#{orderID}</p>
        </div>
      </div>

      <div className="flex flex-row p-8 justify-between">
        <div className="flex flex-row items-center">
          <div className="pr-8">
            <Image
              src="/bookcover.jpg"
              width={160}
              height={100}
              alt="bookcover"
              className="rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <div className="font-bold mb-10 text-2xl">{bookName}</div>
            <div>
              <div className="font-semibold text-base">
                Publication Year:{" "}
                <p className="font-normal inline">{pubYear}</p>
              </div>
              <div className="font-bold">
                Author: <p className="font-normal inline">{authorName}</p>
              </div>
            </div>
            <div className="font-normal mt-16 bg-buttonColor size-fit py-1 px-2 rounded-xl text-base">
              Qnty: {qnty}
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-10 items-center justify-center gap-6">
          <Link href="/" className={buttonStyle}>
            View Invoice
          </Link>
          <Link href="/" className={buttonStyle}>
            View Order
          </Link>
          <Link href="/" className={buttonStyle}>
            Give Rating
          </Link>
        </div>
      </div>
    </div>
  );
};

export default index;
