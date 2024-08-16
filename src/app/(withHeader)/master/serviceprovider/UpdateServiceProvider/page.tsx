"use client";
import Maincontent from "@/app/maincontext";

import Breadcurm from "@/component/breadCum/page";
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
        updatebtn="+ add"
        backbtn="<-"
        backurl="/master/serviceprovider"
      />

      <div className="w-[80%] h-full p-3 ">
        <div className="pt-4 flex gap-10">
          <div className="w-[23%] space-y-3">
            <p>Service Name</p>
            <TableSelect />
          </div>
          <div className="w-[23%] space-y-3">
            <p>Service Provider Name</p>
            <input
              id="Name"
              className="border-[1px] border-[#CFA767] w-full py-2 px-4 pr-20 mt-2 "
              type="text"
              placeholder="Enter Your Text Here"
            />
          </div>
          <div className="w-[23%] space-y-3">
            <p>Label</p>
            <input
              id="Name"
              className="border-[1px] border-[#CFA767] w-full py-2 px-4 pr-20 mt-2 "
              type="text"
              placeholder="Enter Your Text Here"
            />
          </div>
        </div>

        <div className="pt-4 flex gap-10">
          <div className="w-[23%] space-y-3">
            <p>Charges Type</p>
            <TableSelectUpdateService />
          </div>
          <div className="w-[23%] space-y-3">
            <p>Charges From</p>
            <input
              id="Name"
              className="border-[1px] border-[#CFA767] w-full py-2 px-4 pr-20 mt-2 "
              type="text"
              placeholder="Enter Your Text Here"
            />
          </div>
        </div>

        <div className="pt-4 flex gap-10">
          <div className="w-[23%] space-y-3">
            <p>Charges Type</p>
            <TableSelect />
          </div>
          <div className="w-[23%] space-y-3">
            <p>Charges To</p>
            <input
              id="Name"
              className="border-[1px] border-[#CFA767] w-full py-2 px-4 pr-20 mt-2 "
              type="text"
              placeholder="Enter Your Text Here"
            />
          </div>
        </div>
      </div>
    </Maincontent>
  );
};

export default ServiceProviderModel;
