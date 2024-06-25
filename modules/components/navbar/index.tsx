import Image from "next/image";
import React from "react";
import Nav from "./Nav";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import Link from "next/link";
type Props = {};

const index = async (props: Props) => {
  const data = await getServerSession(authOptions);
  console.log("user", data);
  return (
    <div className="fixed w-screen z-20 ">
      <header className="flex flex-row justify-between p-2  bg-dark-2 items-center">
        <Link href="/" className="flex">
          <Image
            src="/logo1.png"
            alt="logo"
            width={45}
            height={40}
            className="m-0 rounded-md"
          />
        </Link>
        <Nav />
      </header>
    </div>
  );
};

export default index;
