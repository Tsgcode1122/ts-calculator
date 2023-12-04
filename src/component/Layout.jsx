// Layout.jsx
import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="content-container">{children}</div>
    </>
  );
};

export default Layout;
