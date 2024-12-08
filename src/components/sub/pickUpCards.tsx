import React, { FC } from "react";
import { FaAngleDown } from "react-icons/fa";

interface Iprops {
  heading: string;
}

const PickUpCards: FC<Iprops> = ({ heading }) => {
  return (
    <div className="max-w-[126px] w-full max-h-[48px] mt-2 ">
      <h2 className="md:jakarta-pickup text-xs md:text-lg text-secondary500 font-bold">{heading}</h2>
      <div className="flex text-secondary300 w-full justify-between gap-2">
        <p className="jakarta-small text-secondary300 text-xs flex whitespace-pre ">
          Select <span className="hidden md:block">your city</span> 
        </p>
        <FaAngleDown />
      </div>
    </div>
  );
};

export default PickUpCards;
