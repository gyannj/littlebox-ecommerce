import Image from "next/image";
import React from "react";

type Props = {};

const Loadercustom = (props: Props) => {
  return (
    <div className="">
      <Image
        src="/icons/loading-circle.svg"
        alt="loading"
        width={100}
        height={100}
      />
    </div>
  );
};

export default Loadercustom;
