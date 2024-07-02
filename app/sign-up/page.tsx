"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

type Props = {};

const buttonStyle =
  "flex flex-row bg-dark-3 justify-center items-center py-3 px-4 size-fit rounded-lg hover:cursor-pointer hover:bg-slate-700";
const placeholderStyle =
  "flex bg-dark-3 outline-none text-searchBoxColor font-medium w-96 p-2 rounded-xl";

const page = (props: Props) => {
  const { toast } = useToast();
  return (
    <div className="flex flex-col bg-dark-1 justify-center items-center text-textColor py-24">
      <div className={buttonStyle}>
        <Image
          src="/google.png"
          width={18}
          height={18}
          alt="google logo"
          className="flex flex-col ml-2 mr-3"
        />
        <p className="font-medium">Sign Up With Google</p>
      </div>

      <div className="text-hrLineColor my-8">or</div>

      <div className="flex flex-col gap-6 items-center">
        <div className="flex flex-col gap-2">
          <p className="flex">Enter Name</p>
          <input type="text" placeholder="Name" className={placeholderStyle} />
        </div>

        <div className="flex flex-col gap-2">
          <p className="flex">Enter Username</p>
          <input
            type="text"
            placeholder="Username"
            className={placeholderStyle}
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="flex">Enter Email ID</p>
          <input
            type="email"
            placeholder="Email ID"
            className={placeholderStyle}
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="flex">Enter Mobile Number</p>
          <input
            type="tel"
            placeholder="Mobile Number"
            className={placeholderStyle}
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="flex">Enter Address</p>
          <input
            type="text"
            placeholder="Address"
            className={placeholderStyle}
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="flex">Enter Password</p>
          <input
            type="password"
            placeholder="Password"
            className={placeholderStyle}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-16 items-center">
        <div className="">
          <Link href="/sign-in" className="font-medium">
            <Button
              className="flex flex-row bg-dark-3 justify-center items-center py-3 px-4 size-fit rounded-lg hover:cursor-pointer hover:bg-slate-700"
              onClick={() => {
                toast({
                  title: "Sign Up Successful",
                  description: "Please Sign In",
                });
              }}
            >
              Sign Up
            </Button>
          </Link>
        </div>

        <div className={buttonStyle}>
          <Link href="/sign-in" className="font-medium">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
