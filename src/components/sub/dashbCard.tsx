import Image from "next/image";
import React, { FC } from "react";

interface ICarProps {
  url: string;
  name: string;
  category: string;
  date: string;
  price: number;
}

const DashbCard: FC<ICarProps> = ({ url, name, category, date, price }) => {
  return (
    <div>
      {/* Card */}
      <div className="flex justify-between max-w-[486px] my-5 border-b">
        <div className="flex items-start gap-x-4">
          <Image src={url} alt={"car1"} width={132} height={72} />
          <div>
            <h2 className="text-secondary500 jakarta-cardHeading ">{name}</h2>
            <p className="jakarta-reular text-secondary300">{category}</p>
          </div>
        </div>
        <div>
          <p>{date}</p>
          <p className="text-secondary500 jakarta-cardHeading">{`$${price}.00`}</p>
        </div>
      </div>
    </div>
  );
};

export default DashbCard;
