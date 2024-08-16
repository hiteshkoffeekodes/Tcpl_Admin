import React, { useState } from "react";
import Select from "react-select";
import { customStyle, DropdownIndicator } from "./SelectStyle";
import { useRouter } from "next/navigation";

function TableSelectUpdateService() {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const options = [
    { value: "Fixed", label: "Fixed" },
    { value: "Percentage(%)", label: "Percentage(%)" },
    { value: "Slab Wise", label: "Slab Wise" },
  ];

  const handleChange = (selectedOption: any) => {
    if (selectedOption.label === "Slab Wise") {
      router.push(`/master/serviceprovider/AddServiceProvider`);
    }
    setDropdownOpen(null);
  };
  const handleActionClick = (index: any) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <Select
      components={{ DropdownIndicator }}
      options={options}
      styles={customStyle}
      onChange={handleChange}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary: "#cfa767",
          primary25: "#cfa767",
          primary50: "#cfa767",
        },
      })}
    />
  );
}

export default TableSelectUpdateService;
