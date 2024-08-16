"use client";

import React, { useState } from "react";
import Breadcurm from "@/component/breadCum/page";
import Maincontent from "@/app/maincontext";
import Pagination from "@/component/pagination/page";
import SoltingContact from "@/component/soltingContact/page";
import Toggle from "@/component/toggle/page";
import ServiceModel from "./ServiceModel";

const initialTableData = [
  {
    id: 1,
    Name: "AADHAAR ENABLED PAYMENT SYSTEM (AEPS)",
    description: "Your resource to discover and connect.",
    status: "Inactive",
    onOff: false,
    action: "/image/six-dot.svg",
  },
  {
    id: 2,
    Name: "AADHAAR ENABLED PAYMENT SYSTEM (AEPS)",
    description: "Your resource to discover and connect.",
    status: "Inactive",
    onOff: false,
    action: "/image/six-dot.svg",
  },
  {
    id: 3,
    Name: "AADHAAR ENABLED PAYMENT SYSTEM (AEPS)",
    description: "Your resource to discover and connect.",
    status: "Inactive",
    onOff: false,
    action: "/image/six-dot.svg",
  },
  {
    id: 4,
    Name: "AADHAAR ENABLED PAYMENT SYSTEM (AEPS)",
    description: "Your resource to discover and connect.",
    status: "Inactive",
    onOff: false,
    action: "/image/six-dot.svg",
  },
  {
    id: 5,
    Name: "AADHAAR ENABLED PAYMENT SYSTEM (AEPS)",
    description: "Your resource to discover and connect.",
    status: "Inactive",
    onOff: false,
    action: "/image/six-dot.svg",
  },
];

const Service = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [tableData, setTableData] = useState(initialTableData);
  const [aboutTab, setAboutTab] = useState("service");
  const [page_size, setPage_size] = useState(20);
  const [optionSelect, setOptionSelect] = useState("select...");
  const [serviceModel, setServiceModel] = useState(false);
  const [serviceGroupModel, setServiceGroupModel] = useState(false);

  const handleTabClick = () => {
    if (aboutTab === "service") {
      setServiceModel(!serviceModel);
    }
  };

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
            status: item.onOff ? "Inactive" : "Active",
          }
        : item
    );
    setTableData(updatedTableData);
  };

  return (
    <>
      <Maincontent>
        <Breadcurm
          title="Services"
          mainlink="Masters / services "
          addbtn={aboutTab !== "youtube" && "+ add"}
          backbtn={"<-"}
          handleTabClick={handleTabClick}
        />
        <SoltingContact />
        <ServiceModel
          setModel={setServiceModel}
          model={serviceModel}
          modeltitle="add services"
        />

        <div className="h-full w-full">
          <div className="h-[calc(100%-65px)] overflow-auto  whitespace-nowrap">
            <table className="min-w-full">
              <thead>
                <tr className="bg-[#F9F4EC] border border-t-0  border-[#F1E5D1]   sticky shrink-0 top-[0px] z-[1]">
                  <th>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-[13px] h-[13px] text-[--green] border-[--border]     rounded-[1px]"
                    />
                  </th>
                  <th className=" border-b py-2 border-[#F1E5D1] text-center w-[5%]">
                    Sr.No.
                  </th>
                  <th className=" border-b py-2 border-[#F1E5D1] text-start w-[25%]">
                    Service Name
                  </th>

                  <th className=" border-b py-2 border-[#F1E5D1] text-start pl-4">
                    Notes
                  </th>

                  <th className=" border-b py-2 border-[#F1E5D1] text-center w-[2%] pr-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="border-[#F1E5D1] border">
                {tableData.map((item, index) => (
                  <tr key={index} className="hover:bg-[#f1e7d5]">
                    <td className=" border-b border-[#F1E5D1] text-center">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="w-[13px] h-[13px] text-[--green] border-[--border]     rounded-[1px] "
                      />
                    </td>
                    <td className=" border-b border-[#F1E5D1] text-center">
                      {index + 1}
                    </td>
                    <td className=" border-b border-[#F1E5D1] text-start">
                      {item.Name}
                    </td>

                    <td className=" border-b border-[#F1E5D1] text-start pl-4">
                      {item.description}
                    </td>

                    <td className=" border-b border-[#F1E5D1] text-center relative">
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
                        <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-[1]">
                          <button
                            onClick={() => handleEdit(index)}
                            className="block px-4 py-2 text-small text-[--darkblue] hover:bg-gray-100 w-full text-left"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(index)}
                            className="block px-4 py-2 text-small text-[--darkblue] hover:bg-gray-100 w-full text-left"
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
        <Pagination />
      </Maincontent>
    </>
  );
};

export default Service;
