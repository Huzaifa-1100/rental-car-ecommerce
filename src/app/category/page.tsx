import Sidebar from "@/components/main/sidebar";
import React from "react";
import {
  capacitySidebar,
  pickupData,
  typeSidebar,
} from "../../../utils/data";
import PickUpCards from "@/components/sub/pickUpCards";
import { TbArrowsDownUp } from "react-icons/tb";
import CatalogCard from "@/components/sub/productCard";
import Button from "@/components/sub/button";
import { CheckboxReactHookFormMultiple } from "@/components/sub/sideBar";
import { getCars } from "../../../utils/carsData";
import { urlFor } from "@/sanity/lib/image";

const Page = async () => {
  const CarCategory = await getCars();
  return (
    <main className="wrapper flex justify-center">
      {/* Left sidebar */}
      <div className="basis-2/12 lg:block hidden">
        {/* type */}
        <div className="mt-10">
          <Sidebar heading={"T Y P E"} />
          <div className="space-y-4 my-5">
            {typeSidebar.map((sidebar) => (
              <CheckboxReactHookFormMultiple
                key={sidebar.id}
                category={sidebar.category}
                qty={sidebar.qty}
              />
            ))}
          </div>
        </div>

        {/* capacity */}
        <div className="space-y-4 my-5 mt-10">
          <Sidebar heading={"C A P A C I T Y"} />
          {capacitySidebar.map((capacity) => (
            <CheckboxReactHookFormMultiple
              key={capacity.id}
              category={capacity.category}
              qty={capacity.qty}
            />
          ))}
        </div>
      </div>
      {/* right side */}
      <div className="basis-10/12">
        <div className=" bg-bg py-9">
          {/* Middle section */}
          <div className="flex flex-col lg:flex-row justify-between items-center mx-5">
            <div className="max-w-[582px] w-full p-6 bg-white  ">
              {/* Pickup */}
              <div className="flex items-center gap-5">
                {/* Dot */}
                <div className="bg-primary500 h-4 w-4 rounded-full bg-opacity-40 p-1 ">
                  <div className="bg-primary500 h-2 w-2 rounded-full "></div>
                </div>
                <h2>Pick - Up</h2>
              </div>

              {/* Location */}
              <div className="flex justify-between ">
                {pickupData.map((pickupData, index) => (
                  <PickUpCards key={index} heading={pickupData.heading} />
                ))}
              </div>
            </div>

            <div className="h-[60px] w-[60px] bg-primary500 rounded-lg p-5 mx-4 -my-4 z-10 md:my-0">
              <TbArrowsDownUp className="text-primary0 text-xl" />
            </div>

            {/* Drop off */}
            <div className=" max-w-[582px] w-full p-6 bg-white  ">
              {/* Pickup */}
              <div className="flex items-center gap-5">
                {/* Dot */}
                <div className="bg-primary500 h-4 w-4 rounded-full bg-opacity-40 p-1 ">
                  <div className="bg-primary500 h-2 w-2 rounded-full "></div>
                </div>
                <h2>Drop - Off</h2>
              </div>

              {/* Location */}
              <div className="flex justify-between ">
                {pickupData.map((pickupData, index) => (
                  <PickUpCards key={index} heading={pickupData.heading} />
                ))}
              </div>
            </div>
          </div>

          {/* Card Section */}

          {/* categroy Car */}
          <div className=" mx-auto mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3 px-5 gap-4 place-self-center ">
              {CarCategory.map((car) => (
                <CatalogCard
                key={car._id}
                  id={0}
                  carName={car.name}
                  category={car.type}
                  price={car.pricePerDay}
                  capacity={car.seatingCapacity}
                  fuel={car.fuelCapacity}
                  transmission={car.transmission}
                  carImage={urlFor(car.image).url()}
                  isLike={false}
                />
              ))}
            </div>
            <div className="my-16 flex justify-between items-center px-4 ">
              <div></div>
              <Button text={"Show more car"} url={"#"} />
              <p className="text-secondary300 jakarta-small">120 Car</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
