"use client";

import React, { useState } from "react";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

const Header = () => {
  const [menuIsOpen, setMenutIsOpen] = useState(false);

  const { status, data } = useSession();

  const handleLoginClick = () => signIn();

  const handleLogoutClick = () => {
    setMenutIsOpen(false);
    signOut();
  };

  const handleMenuClick = () => setMenutIsOpen(!menuIsOpen);

  const handleMyTripsClick = () => {};

  return (
    <div className="container mx-auto p-5 py-0 h-[93px] flex justify-between items-center lg:border-b lg:border-grayLighter">
      <div className="relative h-[32px] w-[32px] flex items-center flex-wrap gap-5">
        <Link href={"/"}>
          <Image fill src="/next-js.svg" alt="fullstack trips" />
          <span className="ml-8 font-semibold">NextTrips</span>
        </Link>
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
            <div className="z-50 absolute top-12 left-0 w-full h-[100px] bg-white rounded-lg shadow-md flex flex-col justify-center items-center">
              <Link href="/my-trips" onClick={() => setMenutIsOpen(false)}>
                <button className="text-primary text-sm font-semibold pb-2 border-b border-grayPrimary border-solid">
                  Minhas Viagens
                </button>
              </Link>
              <button
                className="text-primary text-sm font-semibold pt-2"
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
