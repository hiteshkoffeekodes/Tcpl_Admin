"use client";
import Breadcurm from "@/component/breadcurm";
import Tabs from "@/component/Tabs";
import React, { useState } from "react";
import Maincontent from "@/app/maincontext";
import Solting from "@/component/solting/page";
import Pagination from "@/component/pagination/page";
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

//   const [profileModel, setProfileModel] = useState(false);
//   const [activitiesModel, setActivitiesModel] = useState(false);

//   const [statisticsModel, setStatisticsModel] = useState(false);
//   const [serviceChargesModel, setServiceChargesModel] = useState(false);

//   const handleTabClick = () => {
//     if (aboutTab === "overView") {
//       setProfileModel(!profileModel);
//     }
//     if (aboutTab === "activities") {
//       setActivitiesModel(!activitiesModel);
//     }
//     if (aboutTab === "statistics") {
//       setStatisticsModel(!statisticsModel);
//     }
//     if (aboutTab === "service&Charges") {
//       setServiceChargesModel(!serviceChargesModel);
//     }
//   };

  return (
    <>
      <Maincontent>
        <Breadcurm
          title="Admin OverView"
          mainlink="Admin / Admin OverView /"
          editbtn="edit"
          //   thirdlink={`${aboutTab}`}
          //   addbtn={aboutTab !== "newsLetter" && "+ ADD"}
          //   handleTabClick={handleTabClick}
        />
        <Tabs
          setAboutTab={setAboutTab}
          aboutTab={aboutTab}
          array={tab}
          setPage_size={setPage_size}
          setOptionSelect={setOptionSelect}
        />
        {/* <Solting /> */}
        {/* <BannerModel
          setModel={setBannerModel}
          model={bannerModel}
          modeltitle="add banner"
        />
        <PartnerModel
          setModel={setPartnerModel}
          model={partnerModel}
          modeltitle="add partner"
        />
        <YoutubeModel
          setModel={setYoutubeModel}
          model={youtubeModel}
          modeltitle="add youtube video"
        />
        <TestimonialModel
          setModel={setTestimonialModel}
          model={testimonialModel}
          modeltitle="add testimonial"
        /> */}
       
        {aboutTab === "overView" && <Profile />}
        {aboutTab === "activities" && <Activities />}
        {aboutTab === "statistics" && <Statistics />}
        {aboutTab === "serviceCharges" && <ServicesCharges />}

        {/* <Pagination /> */}
      </Maincontent>
    </>
  );
}
export default OverView;
