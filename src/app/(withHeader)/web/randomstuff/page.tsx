"use client";
import Breadcurm from "@/component/breadcurm";
import Tabs from "@/component/Tabs";
import React, { useState } from "react";
import Maincontent from "@/app/maincontext";
import Texteditor from "@/component/Texteditor";

function RandomStufff() {
  const tab = [
    { id: 1, tb: "PRIVACY POLICY", setvalue: "privacyPolicy" },
    { id: 2, tb: "TERMS & CONDITION", setvalue: "termsCondition" },
    { id: 3, tb: "REFUND & CANCELATION", setvalue: "refundCancelation" },
  ];
  const [aboutTab, setAboutTab] = useState("privacyPolicy");
  const [page_size, setPage_size] = useState(20);
  const [optionSelect, setOptionSelect] = useState("select...");

  return (
    <>
      <Maincontent>
        <Breadcurm
          title="Random Stuff"
          mainlink="web / random stuff /"
          thirdlink={`${aboutTab}`}
          previewbtn="preview"
          submitbtn="submit"
        />
        <Tabs
          setAboutTab={setAboutTab}
          aboutTab={aboutTab}
          array={tab}
          setPage_size={setPage_size}
          setOptionSelect={setOptionSelect}
        />

        {aboutTab === "privacyPolicy" && (
          <div className="w-full px-4 py-5 ">
            <Texteditor style="h-auto lg:h-[655px]" />
          </div>
        )}
        {aboutTab === "termsCondition" && (
          <div className="w-full px-4 py-5 ">
            <Texteditor style="h-auto lg:h-[655px]" />
          </div>
        )}
        {aboutTab === "refundCancelation" && (
          <div className="w-full px-4 py-5 ">
            <Texteditor style="h-auto lg:h-[655px]" />
          </div>
        )}
      </Maincontent>
    </>
  );
}
export default RandomStufff;