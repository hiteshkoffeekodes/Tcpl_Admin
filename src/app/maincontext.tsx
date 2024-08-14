import React from "react";

function Maincontent({ children }: any) {
  return (
    <div className="w-full h-[calc(100%-0px)] md:h-[calc(100%-0px)] overflow-hidden relative  ">
      <div className="w-full  rounded shadow-lg  h-full relative  overflow-hidden bg-[--white]">
        {children}
      </div>
    </div>
  );
}

export default Maincontent;
