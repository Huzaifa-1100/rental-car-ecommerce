import React from "react";

const RadioButton = ({ option }: { option: string }) => {
  return (
    <div>
      <label className="flex items-center space-x-3">
        <input
          type="radio"
          name="options"
          value="option1"
          className=" w-4 h-4 peer-checked:text-radio border-gray-300  peer-checked:ring-radio"
        />
        <span className="font-semibold text-[16px] leading-6 tracking-tight text-text-dark">
          {option}
        </span>
      </label>
    </div>
  );
};

export default RadioButton;
