"use client";

import { useState } from "react";
import { IoMdClose } from "react-icons/io";
function AddAdminModelsss({ model, setModel, modeltitle, children }: any) {
  const [isModelOpen, setIsModelOpen] = useState(false);

  const handleAddButtonClick = () => {
    setIsModelOpen(!isModelOpen);
  };
  return (
    <>
      {model && (
        <div className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[10] justify-center items-center w-full md:inset-0 h-[calc(100%-0rem)] max-h-full flex bg-black/50  transition-opacity duration-700 ">
          <div className="relative p-4 w-full max-w-[680px] max-h-full">
            <div className="relative bg-[--white] rounded-md  ">
              <div className="flex items-center bg-[--serviceborder] justify-between p-4 border-b border-[--serviceborder] rounded-t">
                <h3 className="font-semibold uppercase">{modeltitle}</h3>
                <button
                  type="button"
                  className=" bg-[--poptishyam] text-[--white] rounded-full text-smallall w-6 h-6 ms-auto inline-flex justify-center items-center dark:hover:bg-[--numberblue] dark:hover:text-[--white]"
                  data-modal-hide="default-modal"
                  onClick={() => setModel(!model)}
                >
                  <IoMdClose />
                </button>
              </div>
              <div className="bg-[--white]">
                <form className="p-4 px-8">
                  <div className="mb-4">
                    <label
                      className="block text-[--darkblue] text-small font-normal mb-2"
                      htmlFor="title"
                    >
                      Document Number
                    </label>
                    <input
                      id="title"
                      type="text"
                      placeholder="Enter Your Text Here"
                      className="md:w-[50%] appearance-none border border-[--serviceborder] rounded w-full py-2 px-3 text-[--darkblue] leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-[--darkblue] text-small font-normal mb-2">
                      Take a Photo of ID{" "}
                    </label>
                    <label className="block text-[--darkblue] text-xsmall font-normal mb-2">
                      File size must be between 10KB and 5120KB in
                      ..jpg/.jpeg/.png format.{" "}
                    </label>
                  </div>
                  <div className="w-full flex justify-center">
                    <div className="py-5">
                      <h1 className="text-[--darkblue] text-medium font-normal border border-[--serviceborder] p-20">
                        Front of Document
                      </h1>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-10">
                    <button
                      type="button"
                      className="bg-[--poptishyam] text-[--white] font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline uppercase"
                      onClick={() => setModel(!model)}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleAddButtonClick}
                      className="bg-[--poptishyam] text-[--white] font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline uppercase"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AddAdminModelsss;
