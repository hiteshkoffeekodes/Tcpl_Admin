import Image from "next/image";
import React from "react";
import Logo from "../../public/image/logo_Navbar.svg";

const Loading = () => {
  return (
    <>
      <div className="bg-[#EDF8F5]">
        <div className="h-screen flex items-center justify-center">
          <Image
            src={Logo}
            alt="logo"
            width={100}
            height={100}
            className="w-[30%] h-[30%]"
          />
        </div>
      </div>
    </>
  );
};

export default Loading;
