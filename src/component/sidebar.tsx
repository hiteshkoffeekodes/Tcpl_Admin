"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "../../public/image/logo_Navbar.svg";
import miniLogo from "../../public/image/tcpl_Logo.svg";
import FooNone from "../../public/image/ArrowSquareLeft_side.svg";
import dash from "../../public/image/sidw1.svg";
import Web from "../../public/image/sidw2.svg";
import Master from "../../public/image/sidw10.svg";
import Expance from "../../public/image/sidw11.svg";
import Admin from "../../public/image/sidw12.svg";
import Device from "../../public/image/sidw13.svg";
import Stock from "../../public/image/sidw14.svg";
import Release from "../../public/image/sidw15.svg";
import Setting from "../../public/image/sidw16.svg";
import Reporting from "../../public/image/sidw17.svg";
import { IoClose } from "react-icons/io5";

const Sidebar = ({ setIsSidebarOpen, isSidebarOpen }: any) => {
  const [isWebOpen, setIsWebOpen] = useState(false);
  const [isMasterOpen, setIsMasterOpen] = useState(false);
  const [isSidebar, setIsSidebar] = useState(true);
  const router = useRouter();

  const toggleSidebar = () => {
    setIsSidebar(!isSidebar);
  };

  const toggleWeb = () => {
    setIsWebOpen(!isWebOpen);
  };

  const toggleMaster = () => {
    setIsMasterOpen(!isMasterOpen);
  };

  const toggleSetting = () => {
    router.push("/setting");
  };

  const handleSubItemClick = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <div
        className={`relative z-[40] overflow-y-auto pt-1 bg-white pl-4${
          isSidebar ? " w-[240px]" : "w-[100px]"
        } h-full`}
      >
        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="absolute bottom-0 right-0 pb-20"
        >
          {isSidebar ? (
            <div className="text-xl p-3 rounded-l-lg border-r-0 border border-[--serviceborder] top-4 hidden lg:block">
              <Image src={FooNone} width={32} alt="footer none " />
            </div>
          ) : (
            <div className="text-xl p-3 rounded-r-lg border-l-0 border border-[--serviceborder] top-4 hidden lg:block rotate-180">
              <Image src={FooNone} width={32} alt="footer none reverse" />
            </div>
          )}
        </button>

        {/* Logo */}
        {isSidebar ? (
          <button className="p-4 lg:block hidden">
            <Image src={Logo} alt="logo" />
          </button>
        ) : (
          <button className="p-4 lg:block hidden">
            <Image src={miniLogo} alt="miniLogo" />
          </button>
        )}

        {/* Close Button */}

        <div className="flex justify-between py-4 lg:hidden">
          <button>
            <Image src={Logo} alt="logo" />
          </button>
        </div>
        <IoClose
          className="text-2xl bg-[--darkpopti] cursor-pointer absolute right-0 top-0 lg:hidden"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        {/* Menu Items */}
        <div
          className={`h-[calc(100%-117px)] overflow-y-auto pt-5 ${
            isSidebar ? "lg:space-y-4 " : "space-y-3 lg:pt-5"
          } font-semibold`}
        >
          {[
            {
              src: dash,
              alt: "Dashboard",
              label: "Dashboard",
              href: "/dashboard",
            },
            { src: Web, alt: "Web", label: "Web" },
            { src: Master, alt: "Master", label: "Master" },
            { src: Expance, alt: "Expance", label: "Expance" },
            { src: Admin, alt: "Admin", label: "Admin" },
            { src: Device, alt: "Device Booking", label: "Device Booking" },
            { src: Stock, alt: "Stock", label: "Stock" },
            { src: Release, alt: "Release", label: "Release" },
            { src: Setting, alt: "Setting", label: "Setting" },
            { src: Reporting, alt: "Reporting", label: "Reporting" },
          ].map((item) => (
            <div key={item.alt}>
              <div
                className="flex p-2 justify-center items-center cursor-pointer hover:bg-[--lightgreen] hover:rounded-lg"
                onClick={
                  item.alt === "Web"
                    ? toggleWeb
                    : item.alt === "Master"
                    ? toggleMaster
                    : item.alt === "Setting"
                    ? toggleSetting
                    : undefined
                }
              >
                <div className="w-10 flex justify-center items-center">
                  <Image src={item.src} alt={item.alt} width={25} />
                </div>
                {isSidebar && <p className="flex-1">{item.label}</p>}
              </div>

              {item.alt === "Web" && isWebOpen && isSidebar && (
                <div className="lg:pl-14 px-4 space-y-2">
                  {[
                    { label: "Home Page", path: "/web/home" },
                    { label: "About Us", path: "/web/aboutus" },
                    { label: "Services", path: "/web/services" },
                    { label: "Random Stuff", path: "/web/randomstuff" },
                    { label: "Contact Enquiry", path: "/web/contactinquiry" },
                  ].map((subItem) => (
                    <p
                      key={subItem.label}
                      className="cursor-pointer text-small text-[--black] font-normal hover:text-[--poptishyam]"
                      onClick={() => handleSubItemClick(subItem.path)}
                    >
                      {subItem.label}
                    </p>
                  ))}
                </div>
              )}
              {item.alt === "Master" && isMasterOpen && isSidebar && (
                <div className="pl-14 space-y-2">
                  {[
                    { label: "HSN/SAC", path: "/master/hsn" },
                    { label: "Services", path: "/master/services" },
                    {
                      label: "Service Provider",
                      path: "/master/serviceprovider",
                    },
                  ].map((subItem) => (
                    <p
                      key={subItem.label}
                      className="cursor-pointer text-small text-[--black] font-normal hover:text-[--poptishyam]"
                      onClick={() => handleSubItemClick(subItem.path)}
                    >
                      {subItem.label}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
