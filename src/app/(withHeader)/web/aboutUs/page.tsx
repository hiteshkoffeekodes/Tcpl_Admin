"use client";
import Breadcurm from "@/component/breadcurm";
import Tabs from "@/component/Tabs";
import React, { useState } from "react";
import Maincontent from "@/app/maincontext";
import Texteditor from "@/component/Texteditor";

function AboutUsss() {
  const tab = [
    { id: 1, tb: "ABOUT US", setvalue: "aboutus" },
    { id: 2, tb: "OUR FOCUS", setvalue: "ourfocus" },
    { id: 3, tb: "OUR MISSION", setvalue: "ourmission" },
    { id: 4, tb: "OUR VISION", setvalue: "ourvision" },
  ];
  const [aboutTab, setAboutTab] = useState("aboutus");
  const [page_size, setPage_size] = useState(20);
  const [optionSelect, setOptionSelect] = useState("select...");

  return (
    <>
      <Maincontent>
        <Breadcurm
          title="About Us"
          mainlink="web / about us /"
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

        {aboutTab === "aboutus" && (
          <div className="w-full px-4 py-5 ">
            <Texteditor style="h-auto lg:h-[655px]" />
          </div>
        )}
        {aboutTab === "ourfocus" && (
          <div className="w-full px-4 py-5 ">
            <Texteditor style="h-auto lg:h-[655px]" />
          </div>
        )}
        {aboutTab === "ourmission" && (
          <div className="w-full px-4 py-5 ">
            <Texteditor style="h-auto lg:h-[655px]" />
          </div>
        )}
        {aboutTab === "ourvision" && (
          <div className="w-full px-4 py-5 ">
            <Texteditor style="h-auto lg:h-[655px]" />
          </div>
        )}
      </Maincontent>
    </>
  );
}
export default AboutUsss;
