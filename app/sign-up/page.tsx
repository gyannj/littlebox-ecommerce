"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";

type Props = {};

const buttonStyle =
  "flex flex-row bg-dark-3 justify-center items-center py-3 px-4 size-fit rounded-lg hover:cursor-pointer hover:bg-slate-700";
const placeholderStyle =
  "flex bg-dark-3 outline-none text-searchBoxColor font-medium w-96 p-2 rounded-xl";

const Page = (props: Props) => {
  const { toast } = useToast();
  const router = useRouter();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      // Replace with actual sign-up logic
      const response = await fetch("./api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          username,
          email,
          mobile,
          address,
          password,
        }),
      });

      if (response.ok) {
        toast({
          title: "Sign Up Successful",
          description: "Please Sign In",
        });
        router.push("/sign-in");
      } else {
        toast({
          title: "Sign Up Failed",
          description: "Please try again.",
        });
      }
    } catch (error) {
      toast({
        title: "Sign Up Error",
        description: "An unexpected error occurred. Please try again.",
      });
      console.error("Sign-up error:", error);
    }
  };

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
          <input
            type="text"
            placeholder="Name"
            className={placeholderStyle}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="flex">Enter Username</p>
          <input
            type="text"
            placeholder="Username"
            className={placeholderStyle}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="flex">Enter Email ID</p>
          <input
            type="email"
            placeholder="Email ID"
            className={placeholderStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="flex">Enter Mobile Number</p>
          <input
            type="tel"
            placeholder="Mobile Number"
            className={placeholderStyle}
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="flex">Enter Address</p>
          <input
            type="text"
            placeholder="Address"
            className={placeholderStyle}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="flex">Enter Password</p>
          <input
            type="password"
            placeholder="Password"
            className={placeholderStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-16 items-center">
        <div className={buttonStyle}>
          <Button
            className="flex flex-row justify-center items-center py-3 px-4 size-fit rounded-lg hover:cursor-pointer hover:bg-slate-700"
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
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

export default Page;
