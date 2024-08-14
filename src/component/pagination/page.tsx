import React from "react";

const Pagination = () => {
  return (
    <div className="sticky bottom-0 z-[1] w-full  bg-[--white] ">
      <div className="flex justify-between  py-2 w-full   border border-[--serviceborder] border-b-0 border-x-0 px-3">
        <div className="hidden lg:block">Showing 1 to 9 of 9 entries</div>
        <div className="uppercase font-semibold right-4 flex justify-center items-center">
          previous
          <span className="hover:bg-[--lightlightblue] hover:text-[--black] p-1 gap-2">
            1
          </span>
          <span className="hover:bg-[--lightlightblue] hover:text-[--black] p-1 gap-2">
            2
          </span>
          <span className="hover:bg-[--lightlightblue] hover:text-[--black] p-1 gap-2">
            3
          </span>
          ...
          <span className="hover:bg-[--lightlightblue] hover:text-[--black] p-1 gap-2">
            10
          </span>
          next
        </div>
      </div>
    </div>
  );
};

export default Pagination;
