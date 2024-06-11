import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <main style={{ marginTop: "100px" }}>
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
