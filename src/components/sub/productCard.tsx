// components/CatalogCard.tsx
import React from "react";
import Image from "next/image";
import { IoHeartOutline, IoHeartSharp, IoPeopleSharp } from "react-icons/io5";
import { BsFuelPump } from "react-icons/bs";
import { GiCartwheel } from "react-icons/gi";
import Button from "./button";

// types/Car.ts
export interface Car {
  id: number;
  carName: string;
  category: string;
  price: string;
  actualPrice?: string;
  capacity: string;
  fuel: string;
  transmission: string;
  carImage: string;
  isLike: boolean;
}

const CatalogCard: React.FC<Car> = ({
  carName,
  category,
  price,
  actualPrice,
  capacity,
  fuel,
  transmission,
  carImage,
  isLike,
}) => {
  return (
    <div className="flex flex-col bg-white lg:max-w-[304px] p-6 rounded-lg  shadow-md">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="jakarta-cardHeading text-secondary500">{carName}</h3>
          <p className="jakarta-cardSubHeading text-secondary300">{category}</p>
        </div>

        {isLike ? (
          <IoHeartSharp className="text-2xl text-[#ED3F3F]" />
        ) : (
          <IoHeartOutline className=" text-2xl text-secondary300" />
        )}
      </div>

      {/* Car Image */}
      <div className="flex justify-center mt-8 py-10">
        <Image
          src={carImage}
          alt={carName}
          width={232}
          height={72}
          className="object-contain"
        />
      </div>

      {/* Specifications */}
      <div className="flex  mt-8 gap-4 jakarta-small text-secondary300">
        <div className="flex items-center gap-2">
          <BsFuelPump />
          <p>{fuel}</p>
        </div>
        <div className="flex items-center gap-2">
          <GiCartwheel />

          <p>{transmission}</p>
        </div>
        <div className="flex items-center gap-2">
          <IoPeopleSharp />

          <p>{capacity}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-8">
        <div>
          <p className="text-xl font-bold text-gray-800">
            {price}<span className="text-sm text-gray-400">/day</span>
          </p>
          <p className="text-secondary300 jakarta-cardSubHeading line-through">
            {actualPrice}
          </p>
        </div>
        <Button text={"Rent Now"} url={"/payment"} />
      </div>
    </div>
  );
};

export default CatalogCard;
