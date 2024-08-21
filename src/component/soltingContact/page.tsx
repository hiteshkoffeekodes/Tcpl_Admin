import Image from "next/image";
import React, { useState } from "react";
import Filter from "../../../public/image/ffiilter.svg";
import DownArrow from "../../../public/image/downarrow.svg";
import Search from "../../../public/image/seann.svg";

const SoltingContact = () => {
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
    <div className=" bg-white sticky shrink-0 top-[0px] z-[2]">
      <div className="flex justify-between text-font-medium space-x-9 border border-[#F1E5D1] border-t-0 border-l-0 ">
        <div className="flex space-x-5 border border-[#F1E5D1] border-y-0">
          <div className="relative border border-[#F1E5D1] border-y-0 border-l-0 flex justify-between gap-5 px-3 py-2">
            <p>{selectedItems}</p>
            <div className="pt-1 ">
              <Image
                src={DownArrow}
                alt="dropdown arrow"
                width={18}
                height={18}
                onClick={handleItemsPerPageToggle}
                className="cursor-pointer"
              />
            </div>
            {itemsPerPageDropdownOpen && (
              <div className="absolute mt-8 w-20 bg-white border rounded shadow-lg z-10 left-0 top-4">
                {itemsPerPageOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleItemsPerPageSelect(option)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="relative border border-[#F1E5D1] border-y-0 border-x-0 flex justify-between gap-5 px-3 py-2">
            <p>Select</p>
            <div className="pt-1 pl-10">
              <Image
                src={DownArrow}
                alt="dropdown arrow"
                width={18}
                height={18}
                onClick={handleSelectToggle}
                className="cursor-pointer"
              />
            </div>
            {selectDropdownOpen && (
              <div className="absolute mt-8 w-32 bg-[--white] border rounded shadow-lg z-10 left-0 top-4">
                {selectOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => console.log(`${option} clicked`)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex space-x-5 border border-[#F1E5D1] border-y-0">
          <div className="flex pl-3">
            <div className="pt-2">
              <Image src={Search} alt="search" />
            </div>
            <input
              id="Name"
              className="border-[--serviceborder] w-full py-2 px-6"
              type="Name"
              placeholder="Search..."
            />
          </div>

          <div className="flex justify-between gap-5">
            <div>
              <Image src={Filter} alt="filter" width={40} height={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SoltingContact;
