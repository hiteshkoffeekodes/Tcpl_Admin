import Image from "next/image";
import React from "react";
import staticss from "../../../../../public/image/profilestatics.svg";
import choras from "../../../../../public/image/graphchoras.svg";
import gol from "../../../../../public/image/circlegraph.svg";

const Statistics = () => {
  return (
    <>
      <div className="overflow-auto w-full h-[calc(100vh-260px)]">
        <div className="grid md:grid-cols-4 sm:grid-cols-2   px-8 gap-5">
          <div className="bg-[--white] shadow-2xl w-full p-3">
            <Image src={staticss} alt="staticss" />
            <div className="text-right ">
              <h1 className="text-[--darkblue] text-[32px] font-bold">1,200</h1>
              <h5 className="text-[--darkblue] text-small font-normal">
                Total Users
              </h5>
            </div>
          </div>
          <div className="bg-[--white] shadow-2xl w-full p-3">
            <Image src={staticss} alt="staticss" />
            <div className="text-right ">
              <h1 className="text-[--darkblue] text-[32px] font-bold">65</h1>
              <h5 className="text-[--darkblue] text-small font-normal">
                New Registrations
              </h5>
            </div>
          </div>
          <div className="bg-[--white] shadow-2xl w-full p-3">
            <Image src={staticss} alt="staticss" />
            <div className="text-right ">
              <h1 className="text-[--darkblue] text-[32px] font-bold">23</h1>
              <h5 className="text-[--darkblue] text-small font-normal">
                Deactivated Accounts
              </h5>
            </div>
          </div>
          <div className="bg-[--white] shadow-2xl w-full p-3">
            <Image src={staticss} alt="staticss" />
            <div className="text-right ">
              <h1 className="text-[--darkblue] text-[32px] font-bold">500</h1>
              <h5 className="text-[--darkblue] text-small font-normal">
                Login Activity
              </h5>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-4 sm:grid-cols-2  p-8 gap-5">
          <div className="bg-[--white] shadow-2xl w-full p-3">
            <Image src={staticss} alt="staticss" />
            <div className="text-right ">
              <h1 className="text-[--darkblue] text-[32px] font-bold">100</h1>
              <h5 className="text-[--darkblue] text-small font-normal">
                Tickets Received
              </h5>
            </div>
          </div>
          <div className="bg-[--white] shadow-2xl w-full p-3">
            <Image src={staticss} alt="staticss" />
            <div className="text-right ">
              <h1 className="text-[--darkblue] text-[32px] font-bold">95</h1>
              <h5 className="text-[--darkblue] text-small font-normal">
                Tickets Resolved
              </h5>
            </div>
          </div>
          <div className="bg-[--white] shadow-2xl w-full p-3">
            <Image src={staticss} alt="staticss" />
            <div className="text-right ">
              <h1 className="text-[--darkblue] text-[32px] font-bold">23</h1>
              <h5 className="text-[--darkblue] text-small font-normal">
                Announcements Made
              </h5>
            </div>
          </div>
          <div className="bg-[--white] shadow-2xl w-full p-3">
            <Image src={staticss} alt="staticss" />
            <div className="text-right ">
              <h1 className="text-[--darkblue] text-[32px] font-bold">02</h1>
              <h5 className="text-[--darkblue] text-small font-normal">
                Campaigns Run
              </h5>
            </div>
          </div>
        </div>
        <div className="md:grid-cols-12 grid space-x-4 space-y-5 md:space-y-0">
          <div className="md:col-span-7 ">
            <div className="bg-[--white] shadow-lg w-full  space-y-5 p-5">
              <h1 className="text-[--darkblue] text-medium font-medium p-3">
                Sales
              </h1>
              <div className="justify-center items-center flex ">
                <Image src={choras} alt="choras" />
              </div>
              <div className="text-center flex justify-center gap-5">
                <h1 className="text-[--darkblue] text-xsmall font-normal">
                  Users
                </h1>
                <h5 className="text-[--darkblue] text-xsmall font-normal">
                  Distributer
                </h5>
              </div>
            </div>
          </div>
          <div className="md:col-span-5">  
            <div className="bg-[--white] shadow-lg w-full  space-y-5 p-5">
              <h1 className="text-[--darkblue] text-medium font-medium p-3">
                Spotify
              </h1>
              <div className="flex justify-around">
                <div className=" ">
                  <Image src={gol} alt="gol" />
                </div>
                <div className="text-center grid justify-center ">
                  <h1 className="text-[--darkblue] text-xsmall font-normal">
                    India
                  </h1>
                  <h1 className="text-[--darkblue] text-xsmall font-normal">
                    UAE
                  </h1>
                  <h1 className="text-[--darkblue] text-xsmall font-normal">
                    China
                  </h1>
                  <h1 className="text-[--darkblue] text-xsmall font-normal">
                    USA
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
