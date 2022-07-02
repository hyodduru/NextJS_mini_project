import React from "react";
import Link from "next/link";
import header from "../styles/header.module.css";

const Header = () => {
  return (
    <nav className={header.nav}>
      <h1 className={header.title}>
        AWESOME <br /> FOOD STORE
      </h1>
      <ul className={header["menu-list"]}>
        <li className={header["menu-item"]}>
          <Link href="/about">
            <a className={header["menu-name"]}>ABOUT</a>
          </Link>
        </li>
        <li className={header["menu-item"]}>
          <Link href="/store">
            <a className={header["menu-name"]}>STORE</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;