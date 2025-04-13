import Navbar from "@/components/web/partials/Navbar";
import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
