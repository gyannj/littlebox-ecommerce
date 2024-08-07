import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";

const linkStyle =
  "p-2 px-3 mx-3 hover:bg-dark-3 rounded-md text-2xl my-8 font-semibold";

const NavMobile = ({
  isOpen,
  closeMenu,
}: {
  isOpen: boolean;
  closeMenu: () => void;
}) => {
  const { data: session } = useSession();
  return (
    <>
      <div className="flex justify-end text-textColor m-4" onClick={closeMenu}>
        <X size={40} />
      </div>

      <div className="flex flex-col bg-dark-2 text-textColor align-between justify-center items-center">
        <Image
          src="/next.svg"
          alt="logo"
          width={200}
          height={80}
          className="bg-white rounded-md p-4 mt-4 mb-10"
        />
        <Link href="/" className={linkStyle}>
          Home
        </Link>
        <Link href="/developers" className={linkStyle}>
          Developers
        </Link>
        <Link href="/orders" className={linkStyle}>
          Orders
        </Link>
        {session ? (
          <Link href="/account" className={linkStyle}>
            Account
          </Link>
        ) : (
          <Link href="/sign-in" className={linkStyle}>
            Sign In
          </Link>
        )}
      </div>
    </>
  );
};

export default NavMobile;
