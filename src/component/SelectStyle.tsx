import { components } from "react-select";
import { TiArrowSortedDown } from "react-icons/ti";
import {
  MdOutlineArrowDropDown,
  MdOutlineArrowDropDownCircle,
} from "react-icons/md";

export const customStyle = {
  control: (
    styles: any,
    { isDisabled, isFocused }: { isDisabled: boolean; isFocused: boolean }
  ) => ({
    ...styles,
    borderColor: "#B6E2D8 !important",
    minHeight: "39px !important",
    height: "39px !important",
    alignItems: "start !important",
    display: "flex !important",
    outline: "none !important",
    borderRadius: "5px!important",

    "&:hover": {
      borderColor: "#B6E2D8 !important",
    },

    ...(isDisabled && {
      backgroundColor: "#B6E2D8 !important",
      fontWeight: "300",
    }),

    ...(isFocused && {
      backgroundColor: "white !important",
    }),
  }),
  option: (styles: any) => ({
    ...styles,
    padding: "1px 5px !important",
    zIndex: "10 !important",
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    color: "#065363",
  }),
  menu: (provided: any) => ({
    ...provided,
    color: " #000 !important",
    outline: "none !important",
    fontSize: "14px !important",
    zIndex: "10 !important",
  }),
  menuList: (provided: any) => ({
    ...provided,
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    width: "0px",
    backgroundColor: "#B6E2D8",
  }),
  indicatorsContainer: (provided: any) => ({
    ...provided,
  }),
  ValueContainer: (provided: any) => ({
    ...provided,
    padding: "5px 8px !important",
    outline: "none !important",
  }),
  placeholder: (styles: any) => ({
    ...styles,
    color: "rgba(7, 43, 44, 0.3)",
    fontWeight: "400",
    fontSize: "14px !important",
  }),
  input: (provided: any) => ({
    ...provided,
    paddingBottom: "0px !important",
    paddingTop: "6px !important",
    margin: "0px !important",
  }),
  menuPortal: (base: any) => ({ ...base, zIndex: "20 !important" }),
};

export const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <MdOutlineArrowDropDown className="size-[25px]" />
      {/* <MdOutlineArrowDropDownCircle  /> */}
    </components.DropdownIndicator>
  );
};
