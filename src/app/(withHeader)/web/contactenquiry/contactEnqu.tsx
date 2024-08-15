"use client";
import React, { useState } from "react";
import Toggle from "@/component/toggle/page";

const initialTableData = [
  {
    id: 5,
    date: "01/07/2004",
    time: "09:00 AM",
    name: "Hitesh ",
    emailId: "abc@gmail.com",
    number: "9876543210",
    subject: "AADHAR ENABLED",
    message: "Your resource to discover and connect.",
    status: "Inactive",
    action: "/image/q11.svg",
  },
  {
    id: 5,
    date: "01/07/2004",
    time: "09:00 AM",
    name: "Hitesh ",
    emailId: "abc@gmail.com",
    number: "9876543210",
    subject: "AADHAR ENABLED",
    message: "Your resource to discover and connect.",
    status: "Inactive",
    action: "/image/q11.svg",
  },
  {
    id: 5,
    date: "01/07/2004",
    time: "09:00 AM",
    name: "Hitesh ",
    emailId: "abc@gmail.com",
    number: "9876543210",
    subject: "AADHAR ENABLED",
    message: "Your resource to discover and connect.",
    status: "Inactive",
    action: "/image/q11.svg",
  },
  {
    id: 5,
    date: "01/07/2004",
    time: "09:00 AM",
    name: "Hitesh ",
    emailId: "abc@gmail.com",
    number: "9876543210",
    subject: "AADHAR ENABLED",
    message: "Your resource to discover and connect.",
    status: "Inactive",
    action: "/image/q11.svg",
  },
  {
    id: 5,
    date: "01/07/2004",
    time: "09:00 AM",
    name: "Hitesh ",
    emailId: "abc@gmail.com",
    number: "9876543210",
    subject: "AADHAR ENABLED",
    message: "Your resource to discover and connect.",
    status: "Inactive",
    action: "/image/q11.svg",
  },
  {
    id: 5,
    date: "01/07/2004",
    time: "09:00 AM",
    name: "Hitesh ",
    emailId: "abc@gmail.com",
    number: "9876543210",
    subject: "AADHAR ENABLED",
    message: "Your resource to discover and connect.",
    status: "Inactive",
    action: "/image/q11.svg",
  },
  {
    id: 5,
    date: "01/07/2004",
    time: "09:00 AM",
    name: "Hitesh ",
    emailId: "abc@gmail.com",
    number: "9876543210",
    subject: "AADHAR ENABLED",
    message: "Your resource to discover and connect.",
    status: "Inactive",
    action: "/image/q11.svg",
  },
  {
    id: 5,
    date: "01/07/2004",
    time: "09:00 AM",
    name: "Hitesh ",
    emailId: "abc@gmail.com",
    number: "9876543210",
    subject: "AADHAR ENABLED",
    message: "Your resource to discover and connect.",
    status: "Inactive",
    action: "/image/q11.svg",
  },
];

const ContactEnquieyTable = () => {
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

  // const handleToggle = (id: any) => {
  //   const updatedTableData = tableData.map((item) =>
  //     item.id === id
  //       ? {
  //           ...item,
  //           onOff: !item.onOff,
  //           status: item.onOff ? "Active" : "Inactive",
  //         }
  //       : item
  //   );
  //   setTableData(updatedTableData);
  // };

  return (
    <div className="w-full h-full">
      <div className="relative h-[calc(100%-171px)] w-full">
        <div className="overflow-auto horizontal-scroll  whitespace-nowrap relative h-[calc(100%-44px)] w-full">
          <table>
            <thead>
              <tr className="border-b border-[--serviceborder] sticky shrink-0 top-0 z-[2] bg-white">
                <th className="pl-3">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-[13px] h-[13px] text-[--green] rounded-[1px]"
                  />
                </th>
                <th className="p-3 whitespace-nowrap  text-center w-[5%]">
                  Sr.No.
                </th>
                <th className="p-3 whitespace-nowrap  text-center w-[8%]">
                  Date
                </th>
                <th className="p-3 whitespace-nowrap  text-center w-[8%]">
                  Time
                </th>
                <th className="p-3 whitespace-nowrap  text-center w-[8%]">
                  Name
                </th>
                <th className="p-3 whitespace-nowrap  text-center w-[8%]">
                  Email ID
                </th>
                <th className="p-3 whitespace-nowrap  text-center w-[8%]">
                  Number
                </th>
                <th className="p-3 whitespace-nowrap  text-center w-[13%]">
                  Subject
                </th>
                <th className="p-3 whitespace-nowrap overflow-auto text-center pl-4">
                  Message
                </th>
                <th className="p-3 whitespace-nowrap  text-center w-[8%]">
                  Status
                </th>
                <th className=" border-x border-[--serviceborder] p-3 whitespace-nowrap  text-center w-[2%] pr-3 ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="border-[--serviceborder] border border-l-0 overflow-auto ">
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
                  <td className=" px-2 text-center">{index + 1}</td>
                  <td className=" px-2 text-center">{item.date}</td>
                  <td className=" px-2 text-center">{item.time}</td>
                  <td className=" px-2 text-center">{item.name}</td>
                  <td className=" px-2 text-center">{item.emailId}</td>
                  <td className=" px-2 text-center">{item.number}</td>
                  <td className=" px-2 text-center">{item.subject}</td>
                  <td className=" px-2 text-center">{item.message}</td>
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
                  {/* <td className="  text-start">
                    <Toggle
                      onOff={item.onOff}
                      onToggle={() => handleToggle(item.id)}
                    />
                  </td> */}
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
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(index)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
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

export default ContactEnquieyTable;
