"use client";
import Breadcurm from "@/component/breadcurm";
import React, { useState } from "react";
import Maincontent from "@/app/maincontext";
import Solting from "@/component/solting/page";
import Pagination from "@/component/pagination/page";
import ContactEnquieyTable from "./contactEnqu";


function ContactEnquiry() {
  const tab = [{ id: 1, tb: "ContactEnquiry", setvalue: "contactEnquiry" }];
  const [aboutTab, setAboutTab] = useState("contactEnquiry");
  const [page_size, setPage_size] = useState(20);
  const [optionSelect, setOptionSelect] = useState("select...");

  const [contactEnquiryModel, setcontactEnquiryModel] = useState(false);

  const handleTabClick = () => {
    if (aboutTab === "contactEnquiry") {
      setcontactEnquiryModel(!contactEnquiryModel);
    }
  };

  return (
    <>
      <Maincontent>
        <Breadcurm
          title="Contact Enquiry"
          mainlink="web /"
          thirdlink={`${aboutTab}`}
        />
        <Solting />

        {aboutTab === "contactEnquiry" && <ContactEnquieyTable />}

        <Pagination />
      </Maincontent>
    </>
  );
}
export default ContactEnquiry;
