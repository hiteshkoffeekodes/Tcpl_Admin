import Image from "next/image";
import React from "react";
import sssdd from "../../../../../public/image/passport.svg";

const Profile = () => {
  return (
    <>
      <div className="w-full md:h-full overflow-auto h-[calc(100vh-50px)] ">
        <div className="w-full bg-[--backpoppti] bg-[url('/image/AdminProfile.svg')] h-[160px] bg-cover relative	">
          <div className=" right-0 absolute top-3 hidden md:block">
            <Image src={sssdd} alt="sssdd" />
          </div>
          <div className="pl-5 py-3">
            <h1 className="font-bold text-[--white] text-main-heading capitalize">
              Amar H. Shah
            </h1>
            <h5 className="font-light text-[--white] text-small">
              abc@gmail.com
            </h5>
            <div className="md:space-x-5 space-x-2">
              <button
                className="bg-[--darkpopti] text-[--white] p-2 px-5  rounded-md font-semibold mt-7"
                // onClick={handleTabClick}
              >
                LOGIN
              </button>
              <button
                className="bg-[--darkpopti] text-[--white] p-2 px-5  rounded-md font-semibold mt-7"
                // onClick={handleTabClick}
              >
                INACTIVE
              </button>
              <button
                className="bg-[--darkpopti] text-[--white] p-2 px-5  rounded-md font-semibold mt-7"
                // onClick={handleTabClick}
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-12 h-full">
          <div className="col-span-6 ">
            <div className="space-y-5 p-10">
              <h1 className="text-[--darkblue] text-xlarge font-semibold">
                Admin Information
              </h1>
              <div>
                <h6 className="text-[--darkblue] text-small font-normal">
                  Name
                </h6>
                <h4 className="text-[--darkblue] text-small font-bold">
                  Amar H. Shah
                </h4>
              </div>
              <div>
                <h6 className="text-[--darkblue] text-small font-normal">
                  Contact Number
                </h6>
                <h4 className="text-[--darkblue] text-small font-bold">
                  +9876543210 ,+9876543210
                </h4>
              </div>
              <div>
                <h6 className="text-[--darkblue] text-small font-normal">
                  Email ID
                </h6>
                <h4 className="text-[--darkblue] text-small font-bold">
                  Abc@gmail.com
                </h4>
              </div>
              <div>
                <h6 className="text-[--darkblue] text-small font-normal">
                  Role name
                </h6>
                <h4 className="text-[--darkblue] text-small font-bold">
                  Admin
                </h4>
              </div>
            </div>
          </div>
          <div className="col-span-6 border-[--serviceborder] md:border-l h-full">
            <div className="space-y-5 p-10">
              <h1 className="text-[--darkblue] text-xlarge font-semibold">
                Company Information
              </h1>
              <div>
                <h6 className="text-[--darkblue] text-small font-normal">
                  Company Name
                </h6>
                <h4 className="text-[--darkblue] text-small font-bold">
                  ABC Info.co
                </h4>
              </div>
              <div>
                <h6 className="text-[--darkblue] text-small font-normal">
                  Address
                </h6>
                <h4 className="text-[--darkblue] text-small font-bold">
                  132, My Street, Udhna, surat, Gujarat 394210
                </h4>
              </div>
              <div>
                <h6 className="text-[--darkblue] text-small font-normal">
                  GST Number
                </h6>
                <h4 className="text-[--darkblue] text-small font-bold">
                  29AAAAP0267H1ZK
                </h4>
              </div>
              <div>
                <h6 className="text-[--darkblue] text-small font-normal">
                  GST type
                </h6>
                <h4 className="text-[--darkblue] text-small font-bold">
                  Regulars
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
