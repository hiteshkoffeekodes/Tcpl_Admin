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
          primary: "#B6E2D8",
          primary25: "#B6E2D8",
          primary50: "#B6E2D8",
        },
      })}
    />
  );
}

export default TableSelect;
