import Image from "next/image";
import React from "react";
import Imagess from "../../../../public/image/llldddfff.jpg";
import login from "../../../../public/image/loginlogo.svg";
import rigttt from "../../../../public/image/loginCaretCircleRight.svg";
import lita from "../../../../public/image/lita.svg";

const Login = () => {
  return (
    <>
      <section className="w-full  justify-start items-center h-dvh flex">
        <div className="w-full lg:w-[35%] xl:w-[33.33%] relative hidden md:block h-full">
          <Image
            src={Imagess}
            alt="Images"
            width={100}
            height={100}
            className="bg-cover h-full w-full"
          />
        </div>

        <div className="w-full lg:w-[65%] xl:w-[66.67%] flex justify-center items-center h-full px-4 py-5 relative xl:py-12 bg-[--lightgreen]">
          <div className="absolute top-2 right-2 lg:top-10 lg:right-10">
            <button className="border-[--darkpopti] bg-[--lightgreen] border font-normal text-xsmall text-darkpopti w-full px-4 py-2 rounded-lg uppercase flex gap-2">
              <h6 className="text-xsmall font-normal text-[--darkpopti]">
                MORE INFO
              </h6>
              <div>
                <Image src={rigttt} alt="rigttt" />
              </div>
            </button>
          </div>

          <div className="justify-center items-center grid space-y-5">
            <div className="px-10 pr-16">
              <Image src={login} alt="login" />
            </div>
            <div className="bg-[--white] lg:w-[500px]  rounded-md shadow-2xl p-7 space-y-2">
              <div className="grid justify-center items-center text-center">
                <h1 className="text-[--darkblue] font-bold text-heading uppercase">
                  Let’s get started
                </h1>
                <h5 className="text-[--darkblue] font-light text-medium">
                  Login to manage your account
                </h5>
                <div className="justify-center items-center flex pt-2">
                  <Image src={lita} alt="lita" />
                </div>
              </div>
              <div className="space-y-5 py-3">
                <ul className="text-smallall font-normal text-[--darkblue] ">
                  <li className="pb-1">User name</li>
                  <input
                    id="Name"
                    className="w-full border-[--serviceborder] border rounded-lg p-2 text-start flex gap-2 focus:outline-none "
                    type="text"
                    placeholder="Enter your email id"
                  />
                </ul>
                <ul className="text-smallall font-normal text-[--darkblue] ">
                  <li className="pb-1">Password</li>
                  <input
                    id="Name"
                    className="w-full border-[--serviceborder] border rounded-lg p-2 text-start flex gap-2 focus:outline-none "
                    type="text"
                    placeholder="Enter your phone number"
                  />
                </ul>
                <ul className="flex justify-between">
                  <li className="text-smallall font-normal text-[--darkblue] gap-2 flex justify-center items-center">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-[15px] h-[15px] text-[--darkblue] border-[--serviceborder] border p-2 rounded-[1px]"
                    />
                    <h1>Remember me</h1>
                  </li>
                  <li className="text-smallall font-normal text-[--darkblue]">
                    Forgot Password
                  </li>
                </ul>
              </div>
              <button className="bg-[--darkpopti] font-medium text-smallall text-[--white] w-full py-3 rounded-lg uppercase">
                LOGIN
              </button>
            </div>
            <h3 className="text-[--darkblue] font-normal text-large justify-center flex text-center">
              Copyright @ 2024 TCPL
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
