"use client";
import Maincontent from "@/app/maincontext";
import TableSelect from "@/component/TableSelect";

import React, { useState } from "react";
import ServiceProviderSlabTable from "./AddServiceProviderTableSlabFrom/page";
import ServiceProviderSlabTableFrom from "./AddServiceProviderTableSlabFrom/page";
import ServiceProviderSlabTableTo from "./AddServiceProviderTableSlabTo/page";
import SlabModel from "./SlabModel/page";
import Breadcurm from "@/component/breadcurm";

const AddServiceProviderModel = () => {
  const chargeOptions = ["Fixed", "Percentage", "Slabwise"];
  const [salbModel, setSlabModel] = useState(false);

  const handleTabClick = () => {
    setSlabModel(!salbModel);
  };

  return (
    <Maincontent>
      <SlabModel
        setModel={setSlabModel}
        model={salbModel}
        modeltitle="add Slab Wise"
      />
      <Breadcurm
        title="Add Service providers"
        mainlink="Masters / Add Service providers"
        updatebtn="clear all"
        submitbtn="saved"
        backbtn="<-"
        backurl="/master/serviceprovider/UpdateServiceProvider"
      />

      <div className="w-full h-full p-3 ">
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

        {/* charges from-to  */}
        <div>
          {/* from */}
          <div className="pt-4  gap-10">
            <div className="w-[23%] space-y-3">
              <p>Charges Type</p>
            </div>

            <div className="flex gap-10 pt-4">
              <p className="p-2 pr-[217px] border border-[#cfa767] text-[#333333]">
                Slab Wise
              </p>
              <button
                className="bg-[--serviceborder] text-[--white] p-2 px-5 rounded-md font-semibold"
                onClick={handleTabClick}
              >
                + ADD
              </button>
            </div>

            <div className="pt-8">
              <ServiceProviderSlabTable />
            </div>
          </div>

          {/* to */}
          <div className="pt-4  gap-10">
            <div className="w-[23%] space-y-3">
              <p>Charges Type</p>
            </div>

            <div className="flex gap-10 pt-4">
              <p className="p-2 pr-[217px] border border-[#cfa767] text-[#333333]">
                Slab Wise
              </p>
              <button
                className="bg-[--serviceborder] text-[--white] p-2 px-5 rounded-md font-semibold"
                onClick={handleTabClick}
              >
                + ADD
              </button>
            </div>

            <div className="pt-8">
              <ServiceProviderSlabTableTo />
            </div>
          </div>
        </div>
      </div>
    </Maincontent>
  );
};

export default AddServiceProviderModel;
