"use client";

import React, { useState } from "react";

const initialTableData = [
  {
    id: 1,
    minimumnumber: "1",
    maximumnumber: "100",
    ifthis: "1-100",
    chargesfrom: "500",
  },
  {
    id: 1,
    minimumnumber: "100",
    maximumnumber: "10000",
    ifthis: "100-10000",
    chargesfrom: "2000",
  },
  {
    id: 1,
    minimumnumber: "10000",
    maximumnumber: "Infinity",
    ifthis: "10000",
    chargesfrom: "5000",
  },
];

const ServiceProviderSlabTableFrom = () => {
  const [tableData, setTableData] = useState(initialTableData);

  return (
    <div className="h-full w-full">
      <div className="h-[calc(100%-65px)] overflow-auto  whitespace-nowrap">
        <table className="min-w-full">
          <thead>
            <tr className="bg-[#F9F4EC] border border-t-0  border-[--serviceborder] sticky shrink-0 top-[0px] z-[1]">
              <th className=" border border-r  py-2  border-[--serviceborder] text-start w-[18%] pl-10">
                Minimum
              </th>
              <th className=" border border-r py-2  border-[--serviceborder] text-start w-[18%] pl-10">
                Maximum
              </th>
              <th className=" border border-r py-2  border-[--serviceborder] text-start w-[18%] pl-10">
                if this
              </th>
              <th className=" border border-r py-2  border-[--serviceborder] text-start w-[18%] pl-10">
                charges from
              </th>
            </tr>
          </thead>
          <tbody className="border-[--serviceborder] border">
            {tableData.map((item, index) => (
              <tr key={index} className="hover:bg-[lightlightblue]">
                <td className=" border-b  border-r border-[--serviceborder] text-start pl-10">
                  {item.minimumnumber}
                </td>
                <td className=" border-b  border-r border-[--serviceborder] text-start pl-10">
                  {item.maximumnumber}
                </td>
                <td className=" border-b  border-r border-[--serviceborder] text-start pl-10">
                  {item.ifthis}
                </td>
                <td className=" border-b  border-r border-[--serviceborder] text-start pl-10">
                  {item.chargesfrom}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceProviderSlabTableFrom;
