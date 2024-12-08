import Link from "next/link";
import React, { FC } from "react";

interface IButton {
  text: string;
  url: string;
}
const Button: FC<IButton> = ({ text, url }) => {
  return (
    <div>
      <Link href={url}>
        <button className="bg-primary500 text-primary0 cursor-pointer py-2 px-4 rounded-lg hover:bg-[#ED3F3F] hover:transition-all hover:duration-500">
          {text}
        </button>
      </Link>
    </div>
  );
};

export default Button;
