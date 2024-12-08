import Image from "next/image";
import React, { FC } from "react";

interface IProps {
  bgImage: string;
  title: string;
  p1: string;
  isHidden?: boolean;
  but: string;
  carImg: string;
  bgbutton: boolean;
}

const HeroAdds: FC<IProps> = ({
  bgImage,
  title,
  p1,
  but,
  carImg,
  isHidden,
  bgbutton,
}) => {
  return (
    <div
      className={`relative lg:h-[360px] h-80 rounded-lg ${
        isHidden ? "hidden md:block" : "block"
      }`}
    >
      <Image
        className="absolute object-cover h-80 lg:h-[360px] rounded-lg "
        src={bgImage}
        alt={"add"}
        width={640}
        height={360}
      />
      <div className="absolute top-4 left-4 text-primary0 ">
        <h2 className=" max-w-[280px] jakarta-addHeading   ">{title}</h2>
        <p className="hidden sm:block max-w-[284px] jakarta-reular">{p1}</p>
        <button
          className={`jakarta-addButton px-5 py-2 rounded-md mt-2 ${
            bgbutton ? "bg-primary500" : "bg-information500"
          }`}
        >
          {but}
        </button>
      </div>
      <Image
        className="bottom-0 absolute"
        src={carImg}
        alt={"car"}
        width={460}
        height={116}
      />
    </div>
  );
};

export default HeroAdds;
