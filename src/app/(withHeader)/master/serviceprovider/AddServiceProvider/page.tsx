"use client";
import Maincontent from "@/app/maincontext";
import TableSelect from "@/component/TableSelect";
import React, { useState } from "react";
import ServiceProviderSlabTable from "./AddServiceProviderTableSlabFrom/page";
import ServiceProviderSlabTableTo from "./AddServiceProviderTableSlabTo/page";
import SlabModel from "./SlabModel/page";
import Breadcurm from "@/component/breadcurm";
import TableSelectUpdateService from "@/component/tableSelectUpdateService";

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
        backurl="/master/serviceprovider/AddServiceProvider"
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
              className="border-[1px] border-[--serviceborder] rounded-md w-full py-2 px-4 pr-20 mt-2 "
              type="text"
              placeholder="Enter Your Text Here"
            />
          </div>
          <div className="w-[23%] space-y-3">
            <p>Label</p>
            <input
              id="Name"
              className="border-[1px] border-[--serviceborder] rounded-md w-full py-2 px-4 pr-20 mt-2 "
              type="text"
              placeholder="Enter Your Text Here"
            />
          </div>
          <div className="w-[23%] space-y-3">
            <p>Hsn/Sac</p>
            <TableSelect />
          </div>
        </div>

        {/* charges from-to  */}
        <div>
          {/* from */}
          <div className="pt-4 flex gap-10">
            <div className="w-[23%] space-y-3">
              <p>Charges Type</p>
              <TableSelectUpdateService />
            </div>
            <div className="w-[23%] space-y-3">
              <p>Charges Rate Type</p>
              <TableSelectUpdateService />
            </div>
            <button
              className="bg-[--darkpopti] text-[--white] p-2 px-5 rounded-md font-semibold mt-9"
              onClick={handleTabClick}
            >
              ADD SLAB
            </button>
          </div>
          <div className="pt-8">
            <ServiceProviderSlabTableTo />
          </div>

          {/* to */}
          <div className="pt-4 flex gap-10">
            <div className="w-[23%] space-y-3">
              <p>Charges Type</p>
              <TableSelectUpdateService />
            </div>
            <div className="w-[23%] space-y-3">
              <p>Charges Rate Type</p>
              <TableSelectUpdateService />
            </div>
            <button
              className="bg-[--darkpopti] text-[--white] p-2 px-5 rounded-md font-semibold mt-9"
              onClick={handleTabClick}
            >
              ADD SLAB
            </button>
          </div>
          <div className="pt-8">
            <ServiceProviderSlabTableTo />
          </div>
        </div>
      </div>
    </Maincontent>
  );
};

export default AddServiceProviderModel;
