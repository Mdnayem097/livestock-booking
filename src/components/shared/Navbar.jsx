"use client";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import userAvatar from "@/img/default-avatar.jpg";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);

  const imageSrc =
    user?.image && user.image.startsWith("http") ? user.image : userAvatar;
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink href={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink href={"/animals"}>All Animals</NavLink>
              </li>
            </ul>
          </div>
          <Link href={"/"} className="md:btn btn-ghost text-xl">
            Livestock <span className="text-green-600">Booking</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-5">
            <li>
              <NavLink href={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink href={"/animals"}>All Animals</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2 navbar-end">
          <p className="hidden md:block">Hello, {user?.name || "Guest"}</p>
          {user && (
            <Link href="/profile">
              <Image
                src={imageSrc}
                className="rounded-full cursor-pointer"
                alt="User avatar"
                width={35}
                height={35}
              />
            </Link>
          )}
          {user ? (
            <button
              className="btn bg-red-500 text-white"
              onClick={async () => await authClient.signOut()}
            >
              Logout
            </button>
          ) : (
            <>
              <Link href="/login">
                <button className="btn bg-purple-500 text-white">Login</button>
              </Link>
              <Link href="/register">
                <button className="btn bg-purple-500 text-white">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
