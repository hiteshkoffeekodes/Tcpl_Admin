"use client";
import Breadcurm from "@/component/breadcurm";
import Tabs from "@/component/Tabs";
import React, { useState } from "react";
import Maincontent from "@/app/maincontext";

import Activities from "./Activities";
import Statistics from "./Statistics";
import ServicesCharges from "./ServicesCharges";
import Profile from "./Profile";

function OverView() {
  const tab = [
    { id: 1, tb: "OverView", setvalue: "overView" },
    { id: 2, tb: "Activities", setvalue: "activities" },
    { id: 3, tb: "Statistics", setvalue: "statistics" },
    { id: 4, tb: "ServiceCharges", setvalue: "serviceCharges" },
  ];
  const [aboutTab, setAboutTab] = useState("overView");
  const [page_size, setPage_size] = useState(20);
  const [optionSelect, setOptionSelect] = useState("select...");

  return (
    <>
      <Maincontent>
        <Breadcurm
          title="Admin OverView"
          mainlink="Admin / Admin OverView /"
          thirdlink={`${aboutTab}`}
          editbtn="edit"
        />
        <Tabs
          setAboutTab={setAboutTab}
          aboutTab={aboutTab}
          array={tab}
          setPage_size={setPage_size}
          setOptionSelect={setOptionSelect}
        />

        {aboutTab === "overView" && <Profile />}
        {aboutTab === "activities" && <Activities />}
        {aboutTab === "statistics" && <Statistics />}
        {aboutTab === "serviceCharges" && <ServicesCharges />}
      </Maincontent>
    </>
  );
}
export default OverView;
