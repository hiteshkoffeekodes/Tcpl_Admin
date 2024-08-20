"use client";
import Maincontent from "@/app/maincontext";
import TableSelect from "@/component/TableSelect";
import React, { useState } from "react";
import Breadcurm from "@/component/breadcurm";
// import TableSelectUpdateService from "@/component/tableSelectUpdateService";
// import SlabModel from "../../master/serviceprovider/AddServiceProvider/SlabModel/page";
// import ServiceProviderSlabTableTo from "../../master/serviceprovider/AddServiceProvider/AddServiceProviderTableSlabTo/page";
import Image from "next/image";
import Vector from "../../../../../public/image/admin vector.svg";
import Pan from "../../../../../public/image/pan admin.svg";
import Aadhar from "../../../../../public/image/aadhar admin.svg";
import { IoMdClose } from "react-icons/io";
import AddAdminModelsss from "./AdminModelss/page";
import AddAdminAgrimentModel from "./AdminAgriment/page";

const AddAdminModel = ({ model, setModel }: any) => {
  const chargeOptions = ["Fixed", "Percentage", "Slabwise"];

  const tab = [{ id: 1, tb: "Add Admin", setvalue: "addadmin" }];
  const [aboutTab, setAboutTab] = useState("Add Admin");
  const [addAdminModel, setAddAdminModel] = useState(false);
  const [addAdminAgrimentModel, setAddAdminAgrimentModel] = useState(true);

  const handleTabClick = () => {
    setAddAdminModel(!addAdminModel);
  };
  const handleAgreementClick = () => {
    setAddAdminAgrimentModel(!addAdminAgrimentModel);
  };

  return (
    <Maincontent>
      <AddAdminModelsss
        setModel={setAddAdminModel}
        model={addAdminModel}
        modeltitle="Upload KYC Document"
      />
      <Breadcurm
        title="Add Admin"
        mainlink="Masters / Admin"
        thirdlink={`${aboutTab}`}
        // updatebtn="cancel"
        addbtn="continue"
        backbtn="cancel"
        backurl="/admin"
        handleTabClick={handleAgreementClick}
      />

      {addAdminAgrimentModel ? (
        <div className="w-full  p-10 h-[calc(100%-37px)] overflow-y-auto">
          <div>
            <h1 className="text-[--darkblue] text-main-heading font-bold">
              Personal Verification
            </h1>
            <p className="text-[--darkblue] text-small font-normal">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
              necessitatibus
              <br /> odio cumque nulla fuga! Magni!
            </p>
          </div>
          <div className="w-full">
            <div className="w-full md:flex gap-5 space-y-3 md:space-y-0">
              <h1 className="bg-[--poptishyam] w-full rounded-2xl shadow-2xl border font-light text-xsmall text-[--poptishyam]">
                1
              </h1>
              <h1 className=" bg-[--white] w-full rounded-2xl text-xsmall shadow-2xl border font-light text-[--white]">
                1
              </h1>
              <h1 className="bg-[--white] w-full rounded-2xl text-xsmall shadow-2xl border font-light text-[--white]">
                1
              </h1>
            </div>
          </div>
          <div className="w-full flex justify-between pt-5">
            <div className="w-full ">
              <div className="pt-4 flex gap-10">
                <div className="w-[41%] space-y-3">
                  <p className="text-[--darkblue] text-small font-medium">
                    Name
                  </p>
                  <input
                    id="Name"
                    className="border-[1px] border-[--serviceborder] rounded-md w-full py-2 px-4   mt-2 "
                    type="text"
                    placeholder="Enter Your Text Here"
                  />
                </div>
              </div>
              <div className="pt-4 flex gap-10">
                <div className="w-[19%] space-y-3">
                  <p className="text-[--darkblue] text-small font-medium">
                    Phone Number
                  </p>
                  <input
                    id="Name"
                    className="border-[1px] border-[--serviceborder] rounded-md w-full py-2 px-4   mt-2 "
                    type="text"
                    placeholder="Enter Your Text Here"
                  />
                </div>
                <div className="w-[19%] space-y-3">
                  <p className="text-[--darkblue] text-small font-medium">
                    Email
                  </p>
                  <input
                    id="Name"
                    className="border-[1px] border-[--serviceborder] rounded-md w-full py-2 px-4   mt-2 "
                    type="text"
                    placeholder="Enter Your Text Here"
                  />
                </div>
              </div>
              <div className="pt-4 flex gap-10">
                <div className="w-[19%] space-y-3">
                  <p className="text-[--darkblue] text-small font-medium">
                    Upload Document
                  </p>
                  <TableSelect />
                </div>
                <button
                  className="bg-[--darkpopti] text-[--white] p-2 px-5 rounded-md font-semibold mt-9"
                  onClick={handleTabClick}
                >
                  UPLOAD
                </button>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-[--blacctype] text-xsmall font-normal">
                Product images
              </h3>
              <div className="p-10  border border-[--serviceborder] rounded-md grid justify-center items-center text-center">
                <div className="flex justify-center">
                  <Image src={Vector} alt="vector" />
                </div>
                <h3 className="text-[--blacctype] text-xsmall font-normal">
                  Drag and drop a image <br /> here or click
                </h3>
                <button
                  className="bg-[--darkpopti] text-[--white] p-2 px-5 rounded-md font-semibold "
                  onClick={handleTabClick}
                >
                  UPLOAD
                </button>
              </div>
            </div>
          </div>
          <div className="flex pt-3 space-x-5">
            <div className="border border-[--serviceborder] rounded-md">
              <div className="bg-[--serviceborder] flex justify-center items-center text-center">
                <h1 className="text-[--darkblue] text-[10px] font-normal p-2">
                  Pan card Uploaded
                </h1>
                <button
                  type="button"
                  className="  text-[--darkpopti] rounded-full text-small w-6 h-6 ms-auto inline-flex justify-center items-center "
                  data-modal-hide="default-modal"
                  onClick={() => setModel(!model)}
                >
                  <IoMdClose />
                </button>
              </div>
              <Image src={Pan} alt="pan" />
            </div>
            <div className="border border-[--serviceborder] rounded-md">
              <div className="bg-[--serviceborder] flex justify-center items-center text-center">
                <h1 className="text-[--darkblue] text-[10px] font-normal p-2">
                  Aadhar Uploaded
                </h1>
                <button
                  type="button"
                  className="  text-[--darkpopti] rounded-full text-small w-6 h-6 ms-auto inline-flex justify-center items-center "
                  data-modal-hide="default-modal"
                  onClick={() => setModel(!model)}
                >
                  <IoMdClose />
                </button>
              </div>
              <Image src={Aadhar} alt="Aadhar" />
            </div>
          </div>

          <h1 className="text-[--darkblue] text-main-heading font-bold pt-10">
            Company/GST Information
          </h1>
          <div className=" w-full">
            <div className="pt-4 grid grid-cols-4 gap-10">
              <div className=" space-y-3 col-span-2">
                <p className="text-[--darkblue] text-small font-medium">
                  Company Name
                </p>
                <input
                  id="Name"
                  className="border-[1px] border-[--serviceborder] rounded-md w-full py-2 px-4  mt-2 "
                  type="text"
                  placeholder="Enter Your Text Here"
                />
              </div>

              <div className=" space-y-3 ">
                <p className="text-[--darkblue] text-small font-medium">
                  GST Number
                </p>
                <input
                  id="Name"
                  className="border-[1px] border-[--serviceborder] rounded-md w-full py-2 px-4  mt-2 "
                  type="text"
                  placeholder="Enter Your Text Here"
                />
              </div>
              <div className=" space-y-3">
                <p className="text-[--darkblue] text-small font-medium">
                  GST type
                </p>
                <TableSelect />
              </div>

              <div className=" space-y-3 ">
                <p className="text-[--darkblue] text-small font-medium">
                  Address
                </p>
                <input
                  id="Name"
                  className="border-[1px] border-[--serviceborder] rounded-md w-full py-2 px-4  mt-2 "
                  type="text"
                  placeholder="Enter Your Text Here"
                />
              </div>
              <div className=" space-y-3 ">
                <p className="text-[--darkblue] text-small font-medium">
                  State{" "}
                </p>
                <input
                  id="Name"
                  className="border-[1px] border-[--serviceborder] rounded-md w-full py-2 px-4  mt-2 "
                  type="text"
                  placeholder="Enter Your Text Here"
                />
              </div>
              <div className=" space-y-3">
                <p className="text-[--darkblue] text-small font-medium">
                  City{" "}
                </p>
                <TableSelect />
              </div>
              <div className=" space-y-3 ">
                <p className="text-[--darkblue] text-small font-medium">
                  Pin code
                </p>
                <input
                  id="Name"
                  className="border-[1px] border-[--serviceborder] rounded-md w-full py-2 px-4  mt-2 "
                  type="text"
                  placeholder="Enter Your Text Here"
                />
              </div>
              <div className=" space-y-3">
                <p className="text-[--darkblue] text-small font-medium">
                  Upload GST Certificate
                </p>
                <TableSelect />
              </div>
              <button
                className="bg-[--darkpopti] text-[--white] p-2 px-5 rounded-md font-semibold mt-9 w-[28%]"
                onClick={handleTabClick}
              >
                UPLOAD
              </button>
            </div>

            <h1 className="text-[--darkblue] text-main-heading font-bold pt-10">
              Other KYC Documents
            </h1>
            <div className=" space-y-3 pt-3">
              <p className="text-[--darkblue] text-small font-medium">
                Document Type
              </p>
              <div className="flex gap-10">
                <div className="w-[23%]">
                  <TableSelect />
                </div>
                <button
                  className="bg-[--darkpopti] text-[--white] p-2 px-5 rounded-md font-semibold "
                  onClick={handleTabClick}
                >
                  UPLOAD
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <AddAdminAgrimentModel />
      )}
    </Maincontent>
  );
};

export default AddAdminModel;
