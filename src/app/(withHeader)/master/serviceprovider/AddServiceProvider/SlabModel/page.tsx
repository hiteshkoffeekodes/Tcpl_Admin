"use client";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
function SlabModel({ model, setModel, modeltitle, children }: any) {
  const [isModelOpen, setIsModelOpen] = useState(false);

  const handleAddButtonClick = () => {
    setIsModelOpen(!isModelOpen);
  };

  return (
    <>
      {model && (
        <div className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[2] justify-center items-center w-full md:inset-0 h-[calc(100%-0rem)] max-h-full flex bg-black/50  transition-opacity duration-700">
          <div className="relative p-4 w-full max-w-[380px] max-h-full">
            <div className="relative bg-[--white] rounded-md shadow ">
              <div className="flex items-center justify-between p-4 border-b rounded-t bg-[--serviceborder]  ">
                <h3 className="text-medium font-semibold text-[--darkblue] uppercase">
                  {modeltitle}
                </h3>
                <button
                  type="button"
                  className="  text-[--white] rounded-full text-small w-6 h-6 ms-auto inline-flex justify-center items-center dark:hover:bg-[--darkblue] dark:hover:text-[--white]"
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
                      className="block text-[--darkblue] text-small font-bold mb-2"
                      htmlFor="title"
                    >
                      Minimum Charges
                    </label>
                    <input
                      id="title"
                      type="text"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-[--darkblue] leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-[--darkblue] text-small font-bold mb-2"
                      htmlFor="title"
                    >
                      Maximum Charges
                    </label>
                    <input
                      id="title"
                      type="text"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-[--darkblue] leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>

                  <div className="flex gap-3">
                    <th className="pl-3">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="w-[17px] h-[17px] text-[--darkblue] border border-[--serviceborder] rounded-[1px]"
                      />
                    </th>
                    If this
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-[--darkblue] text-small font-bold mb-2"
                      htmlFor="title"
                    >
                      Charges value
                    </label>
                    <input
                      id="title"
                      type="text"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-[--darkblue] leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>

                  <div className="flex items-center justify-center gap-10">
                    <button
                      type="submit"
                      className="bg-[--serviceborder] text-[--white] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline uppercase"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleAddButtonClick}
                      className="bg-[--serviceborder] text-[--white] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline uppercase"
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

export default SlabModel;
