import React from "react";
import { motion } from "framer-motion";

const Toggle = ({ onOff, onToggle }:any) => {
  return (
    <div className="flex justify-center items-center">
      <div
        onClick={onToggle}
        className={`flex h-4 w-8 cursor-pointer rounded-full border border-black ${
          onOff ? "justify-start bg-white" : " justify-end bg-[--poptishyam]"
        }  p-[1px]`}
      >
        <motion.div
          className={`h-3 w-3 rounded-full ${
            onOff ? "bg-[--numberblue]" : "bg-[--white]"
          } `}
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
        />
      </div>
    </div>
  );
};

export default Toggle;
