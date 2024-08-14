import React from "react";
import Maincontent from "../maincontext";

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <div className="h-dvh w-full ">{children}</div>
    </>
  );
};

export default Layout;
