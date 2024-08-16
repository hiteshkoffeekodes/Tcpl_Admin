import Image from "next/image";
import React, { useState } from "react";
import Filter from "../../../public/image/ffiilter.svg";
import DownArrow from "../../../public/image/downarrow.svg";
import Search from "../../../public/image/seann.svg";

const Solting = () => {
  const [itemsPerPageDropdownOpen, setItemsPerPageDropdownOpen] =
    useState(false);
  const [selectDropdownOpen, setSelectDropdownOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState(10);
  const itemsPerPageOptions = [20, 40, 60, 80];
  const selectOptions = ["Export", "Delete"];

  const handleItemsPerPageToggle = () => {
    setItemsPerPageDropdownOpen(!itemsPerPageDropdownOpen);
  };

  const handleItemsPerPageSelect = (items: any) => {
    setSelectedItems(items);
    setItemsPerPageDropdownOpen(false);
  };

  const handleSelectToggle = () => {
    setSelectDropdownOpen(!selectDropdownOpen);
  };

  return (
    <div className="bg-[--white] shrink-0 lg:top-[106px] w-full  horizontal-scroll">
      <div className="flex justify-between text-font-medium border-t-0 border border-[--serviceborder] border-l-0">
        <div className="border border-[--serviceborder] border-y-0 hidden md:flex">
          <div className="relative border border-[--serviceborder] border-y-0 border-l-0 flex justify-between gap-5 px-3 py-2">
            <div className="border border-[--serviceborder] flex gap-6 rounded-md p-2">
              <p>{selectedItems}</p>
              <div className="pt-1">
                <Image
                  src={DownArrow}
                  alt="dropdown arrow"
                  width={18}
                  height={18}
                  onClick={handleItemsPerPageToggle}
                  className="cursor-pointer"
                />
              </div>
            </div>
            {itemsPerPageDropdownOpen && (
              <div className="absolute mt-8 w-20 bg-[--lightgreen] border rounded shadow-lg z-[3] top-5 left-[10px]">
                {itemsPerPageOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleItemsPerPageSelect(option)}
                    className="block px-4 py-2 text-small text-[--darkblue] hover:bg-gray-100 w-full"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="relative flex justify-between gap-5 px-3 py-2">
            <div className="border border-[--serviceborder] flex gap-20 rounded-md p-2">
              <p>Select</p>
              <div className="pt-1">
                <Image
                  src={DownArrow}
                  alt="dropdown arrow"
                  width={18}
                  height={18}
                  onClick={handleSelectToggle}
                  className="cursor-pointer"
                />
              </div>
            </div>
            {selectDropdownOpen && (
              <div className="absolute mt-8 w-32 bg-[--lightgreen] border rounded shadow-lg z-10 top-5 left-[26px]">
                {selectOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => console.log(`${option} clicked`)}
                    className="block px-4 py-2 text-small text-[--darkblue] hover:bg-gray-100 w-full text-left"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* <div className="flex border border-[--serviceborder] border-y-0 ">
          <div className="relative border  border-[--serviceborder] border-y-0 border-l-0 flex justify-between gap-5 px-3 py-2">
            <div className="border border-[--serviceborder] flex gap-6 rounded-md p-2">
              <p>{selectedItems}</p>
              <div className="pt-1">
                <Image
                  src={DownArrow}
                  alt="dropdown arrow"
                  width={18}
                  height={18}
                  onClick={handleItemsPerPageToggle}
                  className="cursor-pointer"
                />
              </div>
            </div>
            {itemsPerPageDropdownOpen && (
              <div className="absolute mt-8 w-20 bg-[--lightgreen] border rounded shadow-lg z-[3] top-5 left-[10px]">
                {itemsPerPageOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleItemsPerPageSelect(option)}
                    className="block px-4 py-2 text-small text-[--darkblue] hover:bg-gray-100 w-full"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="relative flex justify-between gap-5 px-3 py-2">
            <div className="border border-[--serviceborder] flex gap-20 rounded-md p-2">
              <p>Select</p>
              <div className="pt-1">
                <Image
                  src={DownArrow}
                  alt="dropdown arrow"
                  width={18}
                  height={18}
                  onClick={handleSelectToggle}
                  className="cursor-pointer"
                />
              </div>
            </div>
            {selectDropdownOpen && (
              <div className="absolute mt-8 w-32 bg-[--lightgreen] border rounded shadow-lg z-10 top-5 left-[26px]">
                {selectOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => console.log(`${option} clicked`)}
                    className="block px-4 py-2 text-small text-[--darkblue] hover:bg-gray-100 w-full text-left"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div> */}
        <div className="flex space-x-5 justify-center items-center">
          <div className="flex pl-3 border border-[--serviceborder] rounded-md m-2">
            <input
              id="Name"
              className="w-full py-2 px-6"
              type="Name"
              placeholder="Search..."
            />
            <div className="pt-2 pr-2">
              <Image src={Search} alt="search" />
            </div>
          </div>

          <div className="flex justify-between gap-5 pr-2">
            <div>
              <Image src={Filter} alt="filter" width={40} height={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solting;
