"use client";
import Image from "next/image";
import React, { useState } from "react";
import help from "../../../public/image/help_Navbar.svg";
import search from "../../../public/image/search_Navbar.svg";
import Imagesss from "../../../public/image/image_Navbar.svg";
import { useRouter } from "next/navigation";
import { RiMenu3Line } from "react-icons/ri";
import Sidebar from "@/component/sidebar";
import Maincontent from "../maincontext";

const Layout = ({ children }: { children: any }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isWebOpen, setIsWebOpen] = useState(false);
  const [isMasterOpen, setIsMasterOpen] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="h-dvh flex overflow-hidden w-full">
        {/* sidebar */}
        <div className="hidden lg:block z-[4]">
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </div>
        {/* navbar */}
        <div className="flex-1 h-full bg-[--serviceborder] border border-[--serviceborder] relative w-full">
          <div className="h-[80px]">
            <div className="flex relative">
              <div className="flex justify-between w-full px-3">
                <div className="grid-cols-2 pt-4 lg:block hidden">
                  <h1 className="text-xsmall font-normal text-[--darkblue]">
                    Welcome Back!
                  </h1>
                  <h1 className="text-main-heading font-bold text-[--darkblue]">
                    Ashok Sharma.
                  </h1>
                </div>

                {/* Menu button */}
                {!isSidebarOpen && (
                  <div
                    className="block lg:hidden pt-7 text-2xl"
                    onClick={toggleSidebar}
                  >
                    <RiMenu3Line />
                  </div>
                )}
              </div>

              <div className="flex justify-center items-center space-x-5 absolute right-5 top-3">
                <div className="shadow-lg hidden md:block w-96">
                  <button className="absolute right-48 top-3 bg-[--white]">
                    <Image src={search} alt="search" />
                  </button>
                  <input
                    id="title"
                    type="text"
                    placeholder="Enter your Text here"
                    className="appearance-none border border-[--serviceborder] rounded w-full py-2 px-3 text-[--darkblue] leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="pt-2 shadow-lg">
                  <button className="bg-[--darkpopti] px-2 py-1 flex gap-3 justify-center rounded-md items-center text-center">
                    <Image src={help} alt="help" />
                    <h6 className="uppercase text-[--white] font-semibold text-smallall">
                      help
                    </h6>
                  </button>
                </div>
                <button className="pt-2">
                  <Image src={Imagesss} alt="Image" />
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar with close button */}
          {isSidebarOpen && (
            <div className="h-full absolute top-0 bottom-0 left-0 z-[3] block lg:hidden bg-[--white]">
              <div className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[3] justify-start items-center w-full md:inset-0 h-[calc(100%-0rem)] max-h-full flex bg-black/50 transition-opacity duration-700 lg:hidden">
                <div className="fixed top-0  bottom-0 left-0  z-20  lg:hidden bg-[--background] max-w-[185px] w-full border  border-[--serviceborder] border-t-0 border-s-0 border-b-0  lg:border-e-0">
                  <Sidebar
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                  />
                </div>
              </div>
            </div>
          )}

          <main className="flex flex-1 flex-col gap-4 p-4  lg:gap-6 lg:px-3  h-full w-full">
            <div className=" h-[calc(100vh-150px)] lg:h-[calc(100vh-156px)]  bg-[--white] shadow-sm rounded-md w-full">
              {children}
            </div>
          </main>
        </div>
        {/* copyright */}
        <div className="border border-[--serviceborder] p-2 pl-10 fixed bottom-0 inset-x-0 bg-[--white] ">
          <h1 className="text-smallall font-normal text-[--darkblue]">
            Copyright @ 2024 TCPL
          </h1>
        </div>
      </div>
    </>
  );
};

export default Layout;
