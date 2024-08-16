"use client";
import React, { useState } from "react";
import Toggle from "@/component/toggle/page";

const initialTableData = [
  {
    id: 5,
    thumbnail: "/image/q12.svg",
    title: "Advertisement Videos",
    description: "Your resource to discover and connect.",
    status: "Inactive",
    onOff: false,
    action: "/image/q11.svg",
  },
  {
    id: 0,
    thumbnail: "/image/q12.svg",
    title: "Promotion Videos",
    description: "Your resource to discover and connect.",
    status: "Active",
    onOff: true,
    action: "/image/q11.svg",
  },
  {
    id: 1,
    thumbnail: "/image/q12.svg",
    title: "Advertisement Videos",
    description: "Your resource to discover and connect.",
    status: "Inactive",
    onOff: false,
    action: "/image/q11.svg",
  },
  {
    id: 5,
    thumbnail: "/image/q12.svg",
    title: "Advertisement Videos",
    description: "Your resource to discover and connect.",
    status: "Inactive",
    onOff: false,
    action: "/image/q11.svg",
  },
  {
    id: 0,
    thumbnail: "/image/q12.svg",
    title: "Promotion Videos",
    description: "Your resource to discover and connect.",
    status: "Active",
    onOff: true,
    action: "/image/q11.svg",
  },
];

const BannerTable = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [tableData, setTableData] = useState(initialTableData);

  const handleActionClick = (index: any) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleEdit = (index: any) => {
    setDropdownOpen(null);
  };

  const handleDelete = (index: any) => {
    setDropdownOpen(null);
  };

  const handleToggle = (id: any) => {
    const updatedTableData = tableData.map((item) =>
      item.id === id
        ? {
            ...item,
            onOff: !item.onOff,
            status: item.onOff ? "Active" : "Inactive",
          }
        : item
    );
    setTableData(updatedTableData);
  };

  return (
    <div className="w-full h-full">
      <div className="relative h-[calc(100%-171px)] w-full">
        <div className="overflow-auto horizontal-scroll  whitespace-nowrap relative h-[calc(100%-44px)] w-full">
          <table>
            <thead>
              <tr className="border-b border-[--serviceborder] sticky shrink-0 top-0 z-[2] bg-[--white] text-small font-semibold">
                <th className="pl-3">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-[13px] h-[13px] text-[--darkblue] rounded-[1px]"
                  />
                </th>
                <th className="p-3 whitespace-nowrap  text-center w-[5%]">
                  Sr.No.
                </th>
                <th className="p-3 whitespace-nowrap  text-start w-[12%]">
                  Image
                </th>
                <th className="p-3 whitespace-nowrap  text-start w-[13%]">
                  Title
                </th>
                <th className="p-3 whitespace-nowrap overflow-auto text-start pl-4 w-[56%]">
                  Description
                </th>
                <th className="p-3 whitespace-nowrap  text-center w-[7%]">
                  Status
                </th>
                <th className="p-3 whitespace-nowrap  text-start w-[5%]">
                  On / Off
                </th>
                <th className=" border-x border-[--serviceborder] p-3 whitespace-nowrap  text-center w-[2%] pr-3 ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="border-[--serviceborder] border border-l-0 overflow-auto text-small font-medium">
              {tableData.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-[--lightlightblue] border-b border-[--serviceborder]"
                >
                  <td className="  border-[--serviceborder] text-center pl-3">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-[13px] h-[13px] rounded-[1px] "
                    />
                  </td>
                  <td className="  text-center">{index + 1}</td>
                  <td className="  text-start">
                    <img
                      src={item.thumbnail}
                      alt={`Thumbnail ${item.id}`}
                      className="w-16 h-10 object-cover"
                    />
                  </td>
                  <td className="  text-start">{item.title}</td>
                  <td className="  text-start pl-4">{item.description}</td>
                  <td className={`   text-start `}>
                    <div
                      className={`m-1 py-1 text-center rounded-md border ${
                        item.status === "Active"
                          ? "border-[#0C8B6D] text-[#0C8B6D]"
                          : "border-[#E55642] text-[#E55642]"
                      }`}
                    >
                      {item.status}
                    </div>
                  </td>
                  <td className="  text-start">
                    <Toggle
                      onOff={item.onOff}
                      onToggle={() => handleToggle(item.id)}
                    />
                  </td>
                  <td className=" border-l border-[--serviceborder] text-center relative">
                    <button
                      onClick={() => handleActionClick(index)}
                      className="focus:outline-none pt-2"
                    >
                      <img
                        src={item.action}
                        alt={`Action ${item.id}`}
                        className="w-6 h-6 object-cover"
                      />
                    </button>
                    {dropdownOpen === index && (
                      <div className="absolute right-0 mt-2 w-32 bg-[--lightgreen] border rounded z-[1] shadow-lg  top-[37px]">
                        <button
                          onClick={() => handleEdit(index)}
                          className="block px-4 py-2 text-small text-[--darkblue] hover:bg-[--serviceborder] w-full text-left"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(index)}
                          className="block px-4 py-2 text-small text-[--darkblue] hover:bg-[--serviceborder] w-full text-left"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BannerTable;
