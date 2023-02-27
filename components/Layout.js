import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
