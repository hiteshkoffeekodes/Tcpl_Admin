"use client";
import Maincontent from "@/app/maincontext";
import Breadcurm from "@/component/breadcurm";
import TableSelect from "@/component/TableSelect";
import TableSelectUpdateService from "@/component/tableSelectUpdateService";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ServiceProviderModel = () => {
  const chargeOptions = ["Fixed", "Percentage", "Slabwise"];
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const router = useRouter();

  const handleEdit = (index: any) => {
    console.log("Edit clicked for index: ", index);
    router.push(`/master/serviceprovider/UpdateServiceProvider`);
    setDropdownOpen(null);
  };

  const handleActionClick = (index: any) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <Maincontent>
      <Breadcurm
        title="Add Service providers"
        mainlink="Masters / Add Service providers"
        cancelbtn="cancel "
        submitbtn="submit"
        backurl="/master/serviceprovider"
      />

      <div className="w-full h-full p-3 text-medium">
        <div className="pt-4 flex gap-10">
          <div className="w-[23%] space-y-3">
            <p>Service Name</p>
            <TableSelect />
          </div>
          <div className="w-[23%] space-y-3">
            <p>Service Provider Name</p>
            <input
              id="title"
              type="text"
              placeholder="Enter your Text here"
              className="appearance-none border border-[--serviceborder] rounded w-full py-2 px-3 text-[--darkblue] leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="w-[23%] space-y-3">
            <p>Label</p>
            <input
              id="title"
              type="text"
              placeholder="Enter your Text here"
              className="appearance-none border border-[--serviceborder] rounded w-full py-2 px-3 text-[--darkblue] leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="w-[23%] space-y-3">
            <p>Hsn/Sac</p>
            <TableSelect />
          </div>
        </div>

        <div className="pt-4 flex gap-10">
          <div className="w-[23%] space-y-3">
            <p>Charges Type</p>
            <TableSelectUpdateService />
          </div>
          <div className="w-[23%] space-y-3">
            <p>Charges Rate Type</p>
            <TableSelectUpdateService />
          </div>
          <div className="w-[23%] space-y-3">
            <p>Charge Rate</p>
            <input
              id="title"
              type="text"
              placeholder="Enter your Text here"
              className="appearance-none border border-[--serviceborder] rounded w-full py-2 px-3 text-[--darkblue] leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        <div className="pt-4 flex gap-10">
          <div className="w-[23%] space-y-3">
            <p>Charges Type</p>
            <TableSelectUpdateService />
          </div>
          <div className="w-[23%] space-y-3">
            <p>Charges Rate Type</p>
            <TableSelectUpdateService />
          </div>
          <div className="w-[23%] space-y-3">
            <p>Charge Rate</p>
            <input
              id="title"
              type="text"
              placeholder="Enter your Text here"
              className="appearance-none border border-[--serviceborder] rounded w-full py-2 px-3 text-[--darkblue] leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
      </div>
    </Maincontent>
  );
};

export default ServiceProviderModel;
