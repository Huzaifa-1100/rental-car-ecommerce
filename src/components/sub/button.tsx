import React, { FC } from "react";

interface IButton {
  text: string;
}
const Button: FC<IButton> = ({ text }) => {
  return (
    <div>
      <button className="bg-primary500 text-primary0 py-2 px-4 rounded-lg hover:bg-[#ED3F3F] hover:transition-all hover:duration-500">
        {text}
      </button>
    </div>
  );
};

export default Button;
