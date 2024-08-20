import Image from "next/image";
import React from "react";
import ssa from "../../../../../public/image/AdminProfile.svg";

const Profile = () => {
  return (
    <>
      <div>
        <div className="w-full">
          <div className="w-full bg-[--poptishyam]  bg-[url('/image/AdminProfile.svg')] h-40 bg-cover	">
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
