"use client";

import React, { useState } from "react";
import Maincontent from "@/app/maincontext";
import Pagination from "@/component/pagination/page";
import Toggle from "@/component/toggle/page";
import HsnModel from "./HsnModel";
import Breadcurm from "@/component/breadcurm";
// import SoltingContact from "@/component/soltingContact/page";
import Solting from "@/component/solting/page";

const initialTableData = [
  {
    id: 1,
    Name: "123456",
    TaxRate: "15%",
    description: "Your resource to discover and connect.",
    action: "/image/q11.svg",
  },
  {
    id: 2,
    Name: "123456",
    TaxRate: "35%",
    description: "Your resource to discover and connect.",
    action: "/image/q11.svg",
  },
  {
    id: 3,
    Name: "123456",
    TaxRate: "15%",
    description: "Your resource to discover and connect.",
    action: "/image/q11.svg",
  },
  {
    id: 4,
    Name: "123456",
    TaxRate: "35%",
    description: "Your resource to discover and connect.",
    action: "/image/q11.svg",
  },
  {
    id: 1,
    Name: "123456",
    TaxRate: "15%",
    description: "Your resource to discover and connect.",
    action: "/image/q11.svg",
  },
  {
    id: 2,
    Name: "123456",
    TaxRate: "35%",
    description: "Your resource to discover and connect.",
    action: "/image/q11.svg",
  },
  {
    id: 3,
    Name: "123456",
    TaxRate: "15%",
    description: "Your resource to discover and connect.",
    action: "/image/q11.svg",
  },
  {
    id: 4,
    Name: "123456",
    TaxRate: "35%",
    description: "Your resource to discover and connect.",
    action: "/image/q11.svg",
  },
  {
    id: 1,
    Name: "123456",
    TaxRate: "15%",
    description: "Your resource to discover and connect.",
    action: "/image/q11.svg",
  },
  {
    id: 2,
    Name: "123456",
    TaxRate: "35%",
    description: "Your resource to discover and connect.",
    action: "/image/q11.svg",
  },
  {
    id: 3,
    Name: "123456",
    TaxRate: "15%",
    description: "Your resource to discover and connect.",
    action: "/image/q11.svg",
  },
  {
    id: 1,
    Name: "123456",
    TaxRate: "15%",
    description: "Your resource to discover and connect.",
    action: "/image/q11.svg",
  },
  {
    id: 2,
    Name: "123456",
    TaxRate: "35%",
    description: "Your resource to discover and connect.",
    action: "/image/q11.svg",
  },
  {
    id: 3,
    Name: "123456",
    TaxRate: "15%",
    description: "Your resource to discover and connect.",
    action: "/image/q11.svg",
  },
  {
    id: 4,
    Name: "123456",
    TaxRate: "35%",
    description: "Your resource to discover and connect.",
    action: "/image/q11.svg",
  },
  {
    id: 1,
    Name: "123456",
    TaxRate: "15%",
    description: "Your resource to discover and connect.",
    action: "/image/q11.svg",
  },
  {
    id: 2,
    Name: "123456",
    TaxRate: "35%",
    description: "Your resource to discover and connect.",
    action: "/image/q11.svg",
  },
  {
    id: 3,
    Name: "123456",
    TaxRate: "15%",
    description: "Your resource to discover and connect.",
    action: "/image/q11.svg",
  },
];

const Hsn = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [tableData, setTableData] = useState(initialTableData);
  const [aboutTab, setAboutTab] = useState("hsn");
  const [page_size, setPage_size] = useState(20);
  const [optionSelect, setOptionSelect] = useState("select...");
  const [hsnModel, setHsnModel] = useState(false);
  const [serviceGroupModel, setServiceGroupModel] = useState(false);

  const handleTabClick = () => {
    if (aboutTab === "hsn") {
      setHsnModel(!hsnModel);
    }
    if (aboutTab === "service group") {
      setServiceGroupModel(!serviceGroupModel);
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

  return (
    <>
      <Maincontent>
        <Breadcurm
          title="HSN/SAC"
          mainlink="Masters / HSN/SAC "
          addbtn={aboutTab !== "youtube" && "add hsn/sac"}
          handleTabClick={handleTabClick}
        />
        <Solting />
        <HsnModel
          setModel={setHsnModel}
          model={hsnModel}
          modeltitle="add hsn/sac"
        />

        <div className="h-full w-full">
          <div className="h-[calc(100%-169px)] overflow-auto  whitespace-nowrap">
            <table className="min-w-full ">
              <thead>
                <tr className="bg-[--white] border border-[--serviceborder] sticky shrink-0 top-[0px] z-[1] border-t-0 text-small font-semibold">
                  <th>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-[13px] h-[13px] text-[--darkblue] border border-[--serviceborder] rounded-[1px]"
                    />
                  </th>
                  <th className=" border-b py-2 border-[--serviceborder] text-center w-[5%]">
                    Sr.No.
                  </th>
                  <th className=" border-b py-2 border-[--serviceborder] text-start w-[10%]">
                    HSN/SAC Code
                  </th>
                  <th className=" border-b py-2 border-[--serviceborder] text-start w-[10%]">
                    Tax Rate (%)
                  </th>
                  <th className=" border-b py-2 border-[--serviceborder] text-start pl-4">
                    Description
                  </th>

                  <th className=" border-b py-2 border-[--serviceborder] text-center w-[2%] pr-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="border-[--serviceborder] border text-small font-medium">
                {tableData.map((item, index) => (
                  <tr key={index} className="hover:bg-[lightlightblue]">
                    <td className=" border-b border-[--serviceborder] text-center">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="w-[13px] h-[13px] text-[--darkblue] border-[--serviceborder] border rounded-[1px] "
                      />
                    </td>
                    <td className=" text-[--darkblue] border-b border-[--serviceborder] text-center">
                      {index + 1}
                    </td>
                    <td className=" text-[--darkblue] border-b border-[--serviceborder] text-start">
                      {item.Name}
                    </td>
                    <td className=" text-[--darkblue] border-b border-[--serviceborder] text-start">
                      {item.TaxRate}
                    </td>
                    <td className=" text-[--darkblue] border-b border-[--serviceborder] text-start pl-4">
                      {item.description}
                    </td>

                    <td className=" text-[--darkblue] border-b border-[--serviceborder] text-center relative">
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
                        <div className="absolute right-0 mt-2 w-32 bg-[--lightgreen] border rounded shadow-lg z-[1]">
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
        <Pagination />
      </Maincontent>
    </>
  );
};

export default Hsn;
