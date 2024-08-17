"use client";
import Maincontent from "@/app/maincontext";
import TableSelect from "@/component/TableSelect";
import React, { useState } from "react";
import Breadcurm from "@/component/breadcurm";
import TableSelectUpdateService from "@/component/tableSelectUpdateService";
import SlabModel from "../../master/serviceprovider/AddServiceProvider/SlabModel/page";
import ServiceProviderSlabTableTo from "../../master/serviceprovider/AddServiceProvider/AddServiceProviderTableSlabTo/page";
import Carsoul1 from "@/component/Caresoul/Carsoul1";

const AddAdminModel = () => {
  const chargeOptions = ["Fixed", "Percentage", "Slabwise"];
  const [salbModel, setSlabModel] = useState(false);

  const tab = [{ id: 1, tb: "Add Admin", setvalue: "addadmin" }];
  const [aboutTab, setAboutTab] = useState("Add Admin");
  const [page_size, setPage_size] = useState(20);
  const [optionSelect, setOptionSelect] = useState("select...");

  const [addAdminModel, setAddAdminModel] = useState(false);

  const handleTabClick = () => {
    if (aboutTab === "banner") {
      setAddAdminModel(!addAdminModel);
    }
  };

  return (
    <Maincontent>
      <SlabModel
        setModel={setSlabModel}
        model={salbModel}
        modeltitle="add Slab Wise"
      />
      <Breadcurm
        title="Add Admin"
        mainlink="Masters / Admin"
        thirdlink={`${aboutTab}`}
        updatebtn="cancel"
        submitbtn="saved"
        backbtn="<-"
        backurl="/admin"
      />

      <div className="w-full h-full p-10 ">
          {/* <Carsoul1 /> */}
        <div className="pt-4 flex gap-10">
          <div className="w-[41%] space-y-3">
            <p className="text-[--darkblue] text-small font-medium">Name</p>
            <input
              id="Name"
              className="border-[1px] border-[--serviceborder] rounded-md w-full py-2 px-4 pr-20 mt-2 "
              type="text"
              placeholder="Enter Your Text Here"
            />
          </div>
        </div>
        <div className="pt-4 flex gap-10">
          <div className="w-[19%] space-y-3">
            <p className="text-[--darkblue] text-small font-medium">Phone Number</p>
            <input
              id="Name"
              className="border-[1px] border-[--serviceborder] rounded-md w-full py-2 px-4 pr-20 mt-2 "
              type="text"
              placeholder="Enter Your Text Here"
            />
          </div>
          <div className="w-[19%] space-y-3">
            <p className="text-[--darkblue] text-small font-medium">Email</p>
            <input
              id="Name"
              className="border-[1px] border-[--serviceborder] rounded-md w-full py-2 px-4 pr-20 mt-2 "
              type="text"
              placeholder="Enter Your Text Here"
            />
          </div>
        </div>
        <div className="pt-4 flex gap-10">
          <div className="w-[19%] space-y-3">
            <p className="text-[--darkblue] text-small font-medium">Upload Document</p>
            <TableSelect />
          </div>
        </div>
      </div>
    </Maincontent>
  );
};

export default AddAdminModel;
