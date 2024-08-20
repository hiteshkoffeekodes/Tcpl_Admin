"use client";
import Maincontent from "@/app/maincontext";
import TableSelect from "@/component/TableSelect";
import React, { useState } from "react";
import Breadcurm from "@/component/breadcurm";
import Image from "next/image";
import Vector from "../../../../../../public/image/admin vector.svg";
import { IoMdClose } from "react-icons/io";
import AddAdminModelsss from "../AdminModelss/page";

const AddAdminAgrimentModel = ({ model, setModel }: any) => {
  const chargeOptions = ["Fixed", "Percentage", "Slabwise"];

  const tab = [{ id: 1, tb: "Add Admin", setvalue: "addadmin" }];
  const [aboutTab, setAboutTab] = useState("Add Admin");
  const [page_size, setPage_size] = useState(20);
  const [optionSelect, setOptionSelect] = useState("select...");

  const [addAdminModel, setAddAdminModel] = useState(false);

  const handleTabClick = () => {
    setAddAdminModel(!addAdminModel);
  };

  return (
    <Maincontent>
      <div className="w-full  p-10 h-[calc(100%-37px)] overflow-y-auto">
        <div>
          <h1 className="text-[--darkblue] text-main-heading font-bold">
            Agreement Information
          </h1>
          <p className="text-[--darkblue] text-small font-normal">
            Only the following documents listed below will be accepted,
            <br /> all other documents will be rejected.
          </p>
        </div>
        <div className="w-full py-3">
          <div className="w-full md:flex gap-5 space-y-3 md:space-y-0">
            <h1 className="bg-[--poptishyam] w-full rounded-2xl shadow-2xl border font-light text-xsmall text-[--poptishyam]">
              1
            </h1>
            <h1 className="bg-[--poptishyam] w-full rounded-2xl shadow-2xl border font-light text-xsmall text-[--poptishyam]">
              1
            </h1>
            <h1 className="bg-[--poptishyam] w-full rounded-2xl shadow-2xl border font-light text-xsmall text-[--poptishyam]">
              1
            </h1>
          </div>
        </div>
        <div className="py-5 w-full md:flex justify-between">
          <div className="space-y-5 md:w-[50%]">
            <h1 className="text-small text-[--darkblue] font-normal">
              Agreement payment Details
            </h1>
            <div className="border border-[--serviceborder] rounded-md space-y-10 pt-5">
              <div className="flex justify-between px-10">
                <h1 className="text-medium text-[--darkblue] font-semibold">
                  Agreement Amount
                </h1>
                <h1 className="text-medium text-[--darkblue] font-semibold">
                  4500
                </h1>
              </div>
              <div className="flex justify-between px-10">
                <h1 className="text-medium text-[--darkblue] font-semibold">
                  GST Amount
                  <span className="text-small text-[--darkblue] font-normal">
                    <br />
                    calculated based on the agreement amount
                  </span>
                </h1>
                <h1 className="text-medium text-[--darkblue] font-semibold">
                  500
                </h1>
              </div>
              <div className="flex justify-between px-10 border border-t border-[--serviceborder] border-b-0 border-x-0 py-5">
                <h1 className="text-medium text-[--darkblue] font-semibold">
                  Total Amount
                </h1>
                <h1 className="text-medium text-[--darkblue] font-semibold">
                  5000
                </h1>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-[--blacctype] text-xsmall font-normal">
              Upload Agreement
            </h3>
            <div className="p-10  border border-[--serviceborder] rounded-md grid justify-center items-center text-center">
              <div className="flex justify-center">
                <Image src={Vector} alt="vector" />
              </div>
              <h3 className="text-[--blacctype] text-xsmall font-normal">
                Drag and drop a File <br /> here or click
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
      </div>
    </Maincontent>
  );
};

export default AddAdminAgrimentModel;
