"use client";

import React, { useState } from "react";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [menuIsOpen, setMenutIsOpen] = useState(false);
  const { status, data } = useSession();

  const handleLoginClick = () => signIn();

  const handleLogoutClick = () => {
    setMenutIsOpen(false);
    signOut();
  };

  const handleMenuClick = () => setMenutIsOpen(!menuIsOpen);

  return (
    <div className="container mx-auto p-5 py-0 h-[93px] flex justify-between items-center">
      <div className="relative h-[32px] w-[182px]">
        <Image fill src="/logo.png" alt="fullstack trips" />
      </div>

      {status === "unauthenticated" && (
        <button
          className="text-primary text-sm font-semibold"
          onClick={handleLoginClick}
        >
          Login
        </button>
      )}

      {status === "authenticated" && data.user && (
        <div className="flex items-center gap-3 border-grayLighter border border-solid rounded-full py-2 px-3 relative">
          <AiOutlineMenu
            size={16}
            onClick={handleMenuClick}
            className="cursor-pointer"
          />

          <Image
            height={30}
            width={30}
            alt={data.user.name!}
            src={data.user.image!}
            className="rounded-full shadow-lg"
          />
          {menuIsOpen && (
            <div className="absolute top-12 left-0 w-full h-full bg-white rounded-lg shadow-md flex flex-col justify-center items-center">
              <button
                className="text-primary text-sm font-semibold"
                onClick={handleLogoutClick}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
