import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";

export const Layout = () => {
  return (
    <div style={{ display: "flex" }}>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
