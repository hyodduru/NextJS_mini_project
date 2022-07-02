import React from "react";
import HeadInfo from "./HeadInfo";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <HeadInfo />
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
