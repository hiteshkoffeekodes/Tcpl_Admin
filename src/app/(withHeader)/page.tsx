import Image from "next/image";
import React from "react";
import airo from "../../../public/image/airo_home.svg";

const page = () => {
  return (
    <>
        <main className="h-full flex justify-center items-center">
      <div className="w-full max-w-[710px] relative shadow-sm ">
          <Image src={airo} alt="airo"  />
        </div>
      </main>
    </>
  );
};

export default page;
