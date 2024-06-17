import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Toaster />
      <main style={{ marginTop: "100px" }}>
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
