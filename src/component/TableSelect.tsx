import React from "react";
import Select from "react-select";
import { customStyle, DropdownIndicator } from "./SelectStyle";
function TableSelect() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <Select
      components={{ DropdownIndicator }}
      options={options}
      styles={customStyle}
      theme={(theme: any) => ({
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

export default TableSelect;
