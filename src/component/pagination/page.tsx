import React from "react";
import ledd from "../../../public/image/nextright22.svg";
// import ledd1 from "../../../public/image/nextright2.svg";
import ledd2 from "../../../public/image/nextleft1.svg";
import ledd3 from "../../../public/image/nextleft11.svg";
import Image from "next/image";

const Pagination = () => {
  return (
    <div className="sticky bottom-0 z-[1] w-full  bg-[--white] ">
      <div className="flex justify-between  py-2 w-full   border border-[--serviceborder] border-b-0 border-x-0 px-3">
        <div className="hidden text-small pt-1 lg:block">
          Showing 1 to 9 of 9 entries
        </div>
        <div className="uppercase font-semibold right-4 flex justify-center items-center space-x-5">
          <button className="bg-[--darkpopti] p-2">
            <Image src={ledd} alt="ledd" />
          </button>
          <button className="bg-[--darkpopti] p-2">
            <Image src={ledd} alt="ledd" />
          </button>
          <span className="hover:bg-[--ghatopopti] text-small hover:text-[--darkblue] p-1">
            1
          </span>
          <span className="hover:bg-[--ghatopopti] text-small hover:text-[--darkblue] p-1">
            2
          </span>
          <span className="hover:bg-[--ghatopopti] text-small hover:text-[--darkblue] p-1">
            3
          </span>
          
          ...
          <span className="hover:bg-[--ghatopopti] text-small hover:text-[--darkblue] p-1">
            10
          </span>
          <button className="bg-[--darkpopti] p-2">
            <Image src={ledd2} alt="ledd" />
          </button>
          <button className="bg-[--darkpopti] p-2">
            <Image src={ledd3} alt="ledd" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
