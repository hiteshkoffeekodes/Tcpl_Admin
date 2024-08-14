"use client";
import Breadcurm from "@/component/breadcurm";
import Tabs from "@/component/Tabs";
import React, { useState } from "react";
import BannerModel from "./banner/bannerModel";
import PartnerModel from "./partner/PartnerModel";
import TestimonialModel from "./testimonials/TestimonialModel";
import BannerTable from "./banner/page";
import PartnerTable from "./partner/page";
import YoutubeTable from "./youtube/page";
import TestimonialsTable from "./testimonials/page";
import Maincontent from "@/app/maincontext";
import Solting from "@/component/solting/page";
import YoutubeModel from "./youtube/YoutubeModel";
import Pagination from "@/component/pagination/page";
import NewsLetterTable from "./newsletter/page";

function Banner() {
  const tab = [
    { id: 1, tb: "Banner", setvalue: "banner" },
    { id: 2, tb: "Partner", setvalue: "partner" },
    { id: 3, tb: "YouTube", setvalue: "youTube" },
    { id: 4, tb: "Testimonials", setvalue: "testimonials" },
    { id: 5, tb: "NewsLetter", setvalue: "newsLetter" },
  ];
  const [aboutTab, setAboutTab] = useState("banner");
  const [page_size, setPage_size] = useState(20);
  const [optionSelect, setOptionSelect] = useState("select...");

  const [bannerModel, setBannerModel] = useState(false);
  const [partnerModel, setPartnerModel] = useState(false);

  const [testimonialModel, setTestimonialModel] = useState(false);
  const [youtubeModel, setYoutubeModel] = useState(false);
  const [newsLetterModel, setNewsLetterModel] = useState(false);

  const handleTabClick = () => {
    if (aboutTab === "banner") {
      setBannerModel(!bannerModel);
    }
    if (aboutTab === "partner") {
      setPartnerModel(!partnerModel);
    }
    if (aboutTab === "testimonials") {
      setTestimonialModel(!testimonialModel);
    }
    if (aboutTab === "youTube") {
      setYoutubeModel(!youtubeModel);
    } 
    if (aboutTab === "newsLetter") {
      setNewsLetterModel(!newsLetterModel);
    }
  };

  return (
    <>
      <Maincontent>
        <Breadcurm
          title="Home page"
          mainlink="web / home page /"
          thirdlink={`${aboutTab}`}
          addbtn={aboutTab !== "newsLetter" && "+ ADD"}
          handleTabClick={handleTabClick}
        />
        <Tabs
          setAboutTab={setAboutTab}
          aboutTab={aboutTab}
          array={tab}
          setPage_size={setPage_size}
          setOptionSelect={setOptionSelect}
        />
        <Solting />
        <BannerModel
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
        />

        {aboutTab === "banner" && <BannerTable />}
        {aboutTab === "partner" && <PartnerTable />}
        {aboutTab === "youTube" && <YoutubeTable />}
        {aboutTab === "testimonials" && <TestimonialsTable />}
        {aboutTab === "newsLetter" && <NewsLetterTable />}
        <Pagination />
      </Maincontent>
    </>
  );
}
export default Banner;
