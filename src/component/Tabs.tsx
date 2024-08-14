"use client";
import React, { useState } from "react";

function Tabs({
  aboutTab,
  setAboutTab,
  array,
  setPage_size,
  setOptionSelect,
}: any) {
  const handleTabClick = (value: any) => {
    setAboutTab(value);
    if (setPage_size) {
      setPage_size(20);
    }
    if (setOptionSelect) {
      setOptionSelect("select...");
    }
  };

  return (
    <ul className="flex whitespace-nowrap overflow-x-auto horizontal-scroll">
      {array.map((item: any, index: number) => (
        <li key={index}>
          <button
            type="button"
            className={`cursor-pointer text-small font-semibold px-4 py-3 uppercase ${
              item.setvalue === aboutTab
                ? "bg-[--poptishyam] text-[--white] rounded-t-md"
                : "bg-[--]"
            }`}
            onClick={() => handleTabClick(item.setvalue)}
          >
            {item.tb}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tabs;