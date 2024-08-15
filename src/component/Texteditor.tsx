"use client";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
function Texteditor({ style, setValue, value }: any) {
  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={(e: any) => {
        setValue(e);
      }}
      className={style}
      placeholder="Enter your title here"
    />
  );
}

export default Texteditor;
