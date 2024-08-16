"use client";

import React, { useState } from "react";
import Maincontent from "@/app/maincontext";
import Pagination from "@/component/pagination/page";
import ServiceproviderModel from "./ServiceProvideModel";
import { useRouter } from "next/navigation";
import Breadcurm from "@/component/breadcurm";
import Solting from "@/component/solting/page";
import Toggle from "@/component/toggle/page";


const initialTableData = [
  {
    id: 1,
    Name: "AADHAAR ENABLED PAYMENT SYSTEM (AEPS)",
    Provider: "Mathieu Diab",
    Charges: "Fixed",
    From: "1230",
    to: "500-1000",
    label: "Hitesh Chauhan",
    status: "Active",
    onOff: true,
    action: "/image/q11.svg",
  },
  {
    id: 1,
    Name: "AADHAAR ENABLED PAYMENT SYSTEM (AEPS)",
    Provider: "Mathieu Diab",
    Charges: "Fixed",
    From: "1230",
    to: "500-1000",
    label: "Hitesh Chauhan",
    status: "Active",
    onOff: true,
    action: "/image/q11.svg",
  },
  {
    id: 1,
    Name: "AADHAAR ENABLED PAYMENT SYSTEM (AEPS)",
    Provider: "Mathieu Diab",
    Charges: "Fixed",
    From: "1230",
    to: "500-1000",
    label: "Hitesh Chauhan",
    status: "Active",
    onOff: true,
    action: "/image/q11.svg",
  },
  {
    id: 1,
    Name: "AADHAAR ENABLED PAYMENT SYSTEM (AEPS)",
    Provider: "Mathieu Diab",
    Charges: "Fixed",
    From: "1230",
    to: "500-1000",
    label: "Hitesh Chauhan",
    status: "Active",
    onOff: true,
    action: "/image/q11.svg",
  },
  {
    id: 1,
    Name: "AADHAAR ENABLED PAYMENT SYSTEM (AEPS)",
    Provider: "Mathieu Diab",
    Charges: "Fixed",
    From: "1230",
    to: "500-1000",
    label: "Hitesh Chauhan",
    status: "Active",
    onOff: true,
    action: "/image/q11.svg",
  },
];

const ServiceProviderTable = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [tableData, setTableData] = useState(initialTableData);
  const [aboutTab, setAboutTab] = useState("serviceprovider");
  const [page_size, setPage_size] = useState(20);
  const [optionSelect, setOptionSelect] = useState("select...");
  const [serviceproviderModel, setServiceproviderModel] = useState(false);
  const [serviceGroupModel, setServiceGroupModel] = useState(false);

  const handleTabClick = () => {
    if (aboutTab === "serviceprovider") {
      setServiceproviderModel(!serviceproviderModel);
    }
  };

  const router = useRouter();

  const handleEdit = (index: any) => {
    console.log("Edit clicked for index: ", index);
    router.push(`/master/serviceprovider/UpdateServiceProvider`);
    setDropdownOpen(null);
  };

  const handleActionClick = (index: any) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
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
    <>
      <Maincontent>
        <Breadcurm
          title="Service providers"
          mainlink="Masters / service providers "
          addbtn={aboutTab !== "youtube" && "add providers"}
          url="/master/serviceprovider/create_service_providers"
          handleTabClick={handleTabClick}
        />
        <Solting />
        <ServiceproviderModel
          setModel={setServiceproviderModel}
          model={serviceproviderModel}
          modeltitle="add services"
        />

        <div className="h-full w-full">
          <div className="h-[calc(100%-65px)] overflow-auto  whitespace-nowrap">
            <table className="min-w-full">
              <thead>
                <tr className="bg-[--white] border border-t-0 border-b border-[--serviceborder] sticky shrink-0 top-[0px] z-[1] text-small font-semibold">
                  <th className="pl-3">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-[13px] h-[13px] text-[--darkblue] border border-[--serviceborder] rounded-[1px]"
                    />
                  </th>
                  <th className="border-b py-2 border-[--serviceborder] text-center w-[5%]">
                    Sr.No.
                  </th>
                  <th className="border-b py-2 border-[--serviceborder] text-start">
                    Service Name
                  </th>
                  <th className="border-b py-2 border-[--serviceborder] text-start w-[15%]">
                    Service Provider Name
                  </th>
                  <th className="border-b py-2 border-[--serviceborder] text-start w-[11%]">
                    Charges Type
                  </th>
                  <th className="border-b py-2 border-[--serviceborder] text-start w-[11%]">
                    Charges From
                  </th>
                  <th className="border-b py-2 border-[--serviceborder] text-start w-[11%]">
                    Charges To
                  </th>
                  <th className="border-b py-2 border-[--serviceborder] text-start pl-4 w-[11%]">
                    Label
                  </th>
                  <th className="p-3 whitespace-nowrap text-center w-[7%]">
                    Status
                  </th>
                  <th className="p-3 whitespace-nowrap text-start w-[5%]">
                    On / Off
                  </th>
                  <th className="border-b py-2 border-[--serviceborder] text-center w-[2%] pr-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="border-[--serviceborder] border text-small font-medium">
                {tableData.map((item, index) => (
                  <tr key={index} className="hover:bg-[lightlightblue]">
                    <td className=" border-b pl-3 border-[--serviceborder] text-center">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="w-[13px] h-[13px] text-[--darkblue] border border-[--serviceborder] rounded-[1px] "
                      />
                    </td>
                    <td className="border-b border-[--serviceborder] text-center">
                      {index + 1}
                    </td>
                    <td className="border-b border-[--serviceborder] text-start">
                      {item.Name}
                    </td>

                    <td className="border-b border-[--serviceborder] text-start pl-4">
                      {item.Provider}
                    </td>
                    <td className="border-b border-[--serviceborder] text-start pl-4">
                      {item.Charges}
                    </td>
                    <td className="border-b border-[--serviceborder] text-start pl-4">
                      {item.From}
                    </td>
                    <td className="border-b border-[--serviceborder] text-start pl-4">
                      {item.to}
                    </td>
                    <td className="border-b border-[--serviceborder] text-start pl-4">
                      {item.label}
                    </td>

                    <td
                      className={`border-b border-[--serviceborder] text-start `}
                    >
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
                    <td className="border-b border-[--serviceborder] text-start">
                      <Toggle
                        onOff={item.onOff}
                        onToggle={() => handleToggle(item.id)}
                      />
                    </td>

                    <td className="border-b border-[--serviceborder] text-center relative">
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

export default ServiceProviderTable;
