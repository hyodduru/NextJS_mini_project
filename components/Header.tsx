import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 py-5 px-0 w-full h-24 bg-white opacity-95 z-40">
      <h1 className="font-Arima absolute top-4 right-8 text-center text-blue-900 font-10 text-2xl">
        AWESOME <br /> FOOD STORE
      </h1>
      <ul className="flex translate-y-3">
        <li className="list-none">
          <Link href="/about">
            <a className="text-black font-bold text-base mx-10 my-0">ABOUT</a>
          </Link>
        </li>
        <li className="list-none">
          <Link href="/">
            <a className="text-black font-bold text-base mx-10 my-0">STORE</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
