import Navbar from "@/components/layouts/web/Navbar";
import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
