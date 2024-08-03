import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import React from "react";

type Props = {
  children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col justify-between min-h-screen ">
      <Navbar />
      <div className="flex-1 ">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
