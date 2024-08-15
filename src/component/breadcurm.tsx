import Link from "next/link";
import React from "react";

function Breadcurm({
  title,
  previewbtn,
  submitbtn,
  mainlink,
  secondlink,
  thirdlink,
  prebtn,
  addbtn,
  handleTabClick,
  url,
  urlbtn,
  clearbtn,
  handleSubmit,
  backbtn,
  backurl,
  updatebtn,
  editbtn,
}: any) {
  return (
    <div className="w-full border-b border-[--serviceborder] px-3 py-2  bg-[--white]">
      <div className="w-full flex justify-between items-center ">
        <div className="float-start">
          <h3 className="text-[--darkblue] text-xlarge font-semibold ">
            {title}
          </h3>
          <div className="w-full hidden md:block ">
            <ul className="flex gap-x-1">
              <li className="text-[--darkblue] text-[10px] font-normal capitalize">
                {mainlink}
              </li>
              <li className="text-[--darkblue] text-[10px] font-normal capitalize">
                {secondlink}
              </li>
              <li className="text-[--poptishyam] text-[10px] font-normal capitalize">
                {thirdlink}
              </li>
            </ul>
          </div>
        </div>
        <div className="float-end">
          <div className="w-full">
            <ul className="gap-2 flex items-center ">
              {clearbtn && (
                <li>
                  <button type="button" className="button">
                    {clearbtn}
                  </button>
                </li>
              )}
              {previewbtn && (
                <li>
                  <button type="button" className="button">
                    {previewbtn}
                  </button>
                </li>
              )}
              {submitbtn && (
                <li>
                  <button
                    type="button"
                    className="button"
                    onClick={handleSubmit}
                  >
                    {submitbtn}
                  </button>
                </li>
              )}
              {urlbtn && (
                <li>
                  <Link href={`${url}`} className="button">
                    {urlbtn}
                  </Link>
                </li>
              )}
              {addbtn && (
                <li>
                  <button
                    type="button"
                    className="button"
                    onClick={handleTabClick}
                  >
                    {addbtn}
                  </button>
                </li>
              )}
              {updatebtn && (
                <li>
                  <button
                    type="button"
                    className="button"
                    onClick={handleTabClick}
                  >
                    {updatebtn}
                  </button>
                </li>
              )}
              {backbtn && (
                <li>
                  <Link href={`${backurl}`} className="button">
                    {backbtn}
                  </Link>
                </li>
              )}
              {editbtn && (
                <li>
                  <button type="button" className="button">
                    {editbtn}
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcurm;
