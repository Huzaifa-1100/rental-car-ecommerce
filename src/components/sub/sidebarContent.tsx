import React, { FC } from "react";
import { IoIosCheckbox } from "react-icons/io";
import { RiCheckboxBlankLine } from "react-icons/ri";

interface IBarContent {
  iSicon: boolean;
  category: string;
  qty: number;
}
const SidebarContent: FC<IBarContent> = ({ iSicon, category, qty }) => {
  return (
    <div className="flex items-center gap-2 ">
      <div className="text-primary500 text-lg">{iSicon ? <IoIosCheckbox /> : <RiCheckboxBlankLine />}</div>
      <p className="text-secondary400 jakarta-addButton">
        {category} <span className="text-secondary300">{`(${qty})`}</span>{" "}
      </p>
    </div>
  );
};

export default SidebarContent;
