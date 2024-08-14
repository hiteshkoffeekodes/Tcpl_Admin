"use client";

import { useState } from "react";
import { IoMdClose } from "react-icons/io";
function TestimonialModel({ model, setModel, modeltitle, children }: any) {
  const [isModelOpen, setIsModelOpen] = useState(false);

  const handleAddButtonClick = () => {
    setIsModelOpen(!isModelOpen);
  };
  return (
    <>
      {model && (
        <div className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[4] justify-center items-center w-full md:inset-0 h-[calc(100%-0rem)] max-h-full flex bg-black/50  transition-opacity duration-700 ">
          <div className="relative p-4 w-full max-w-[380px] max-h-full">
            <div className="relative bg-[--white] rounded-md shadow ">
              <div className="flex items-center bg-[--serviceborder] justify-between p-4 border-b border-[--serviceborder] rounded-t">
                <h3 className="text-font16 font-semibold uppercase">
                  {modeltitle}
                </h3>
                <button
                  type="button"
                  className="rounded-full text-small w-6 h-6 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-[--white]"
                  data-modal-hide="default-modal"
                  onClick={() => setModel(!model)}
                >
                  <IoMdClose />
                </button>
              </div>
              <div className="bg-[--white]">
                <form className="p-4">
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-small font-bold mb-2"
                      htmlFor="title"
                    >
                      Name
                    </label>
                    <input
                      id="title"
                      type="text"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-small font-bold mb-2"
                      htmlFor="image"
                    >
                      Add Title
                    </label>
                    <input
                      id="title"
                      type="text"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-small font-bold mb-2"
                      htmlFor="description"
                    >
                      Description
                    </label>
                    <textarea
                      id="description"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>

                  <div className="flex items-center justify-center gap-10">
                    <button
                      type="submit"
                      className="bg-[--poptishyam] text-[--white] font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline uppercase"
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

export default TestimonialModel;
