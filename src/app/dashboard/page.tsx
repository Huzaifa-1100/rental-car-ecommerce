import Sidebar from "@/components/main/sidebar";
import DashSidebar from "@/components/sub/dashSidebar";
import React from "react";
import { mainMenu, preferenceData } from "../../../utils/dashData";
import { TbArrowsDownUp, TbLogout2 } from "react-icons/tb";
import Image from "next/image";
import { dashboardCars, pickupData } from "../../../utils/data";
import PickUpCards from "@/components/sub/pickUpCards";
import DashbCard from "@/components/sub/dashbCard";

const Page = () => {
  return (
    <main className="wrapper flex ">
      {/* left side */}
      <div className="bg-primary0 hidden lg:block ">
        {/* Main Menu */}
        <div>
          <Sidebar heading={"M A I N  M E N U"} />
          {mainMenu.map((menu, index) => (
            <DashSidebar key={index} icon={menu.icon} title={menu.title} />
          ))}
        </div>
        {/* P R E F E R E N C E S */}
        <div className="my-10">
          <Sidebar heading={"P R E F E R E N C E S"} />
          {preferenceData.map((menu, index) => (
            <DashSidebar key={index} icon={menu.icon} title={menu.title} />
          ))}
        </div>

        <div className="flex items-center gap-3 hover:bg-primary500 w-fit p-3 pr-10 rounded-xl text-secondary300 hover:text-primary0 cursor-pointer">
          <div className="text-lg">
            <TbLogout2 />
          </div>
          <h2>Log Out</h2>
        </div>
      </div>

      {/* Right Side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto  bg-bg ">
        {/* right Left */}
        <div className="bg-primary0 px-4 ">
          <div>
            <h2 className="text-secondary500 jakarta-cardHeading my-2 ">
              Details Rental
            </h2>
            <Image
              src={"/dashboard/01.png"}
              alt={"map"}
              width={486}
              height={272}
            />
          </div>

          {/* Card */}
          <div className="flex justify-between max-w-[486px] my-5">
            <div className="flex items-start gap-x-4">
              <Image
                src={"/dashboard/car1.png"}
                alt={"car1"}
                width={132}
                height={72}
              />
              <div>
                <h2 className="text-secondary500 jakarta-cardHeading ">
                  Nissan GT - R
                </h2>
                <p className="jakarta-reular text-secondary300">Sport Car</p>
              </div>
            </div>
            <div>
              <p>#9761</p>
              <p></p>
            </div>
          </div>

          {/* Middle section */}
          <div className=" mt-10">
            <div className="max-w-[486px] w-full py-6 bg-white  ">
              {/* Pickup */}
              <div className="flex items-center gap-5">
                {/* Dot */}
                <div className="bg-primary500 h-4 w-4 rounded-full bg-opacity-40 p-1 ">
                  <div className="bg-primary500 h-2 w-2 rounded-full "></div>
                </div>
                <h2>Pick - Up</h2>
              </div>

              {/* Location */}
              <div className="md:flex w-full justify-between ">
                {pickupData.map((pickupData, index) => (
                  <PickUpCards key={index} heading={pickupData.heading} />
                ))}
              </div>
            </div>

            {/* Drop off */}
            <div className=" max-w-[582px] w-full py-6 bg-white  ">
              {/* Pickup */}
              <div className="flex items-center gap-5">
                {/* Dot */}
                <div className="bg-primary500 h-4 w-4 rounded-full bg-opacity-40 p-1 ">
                  <div className="bg-primary500 h-2 w-2 rounded-full "></div>
                </div>
                <h2>Drop - Off</h2>
              </div>

              {/* Location */}
              <div className="md:flex justify-between ">
                {pickupData.map((pickupData, index) => (
                  <PickUpCards key={index} heading={pickupData.heading} />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex justify-between items-center max-w-[486px]">
            <div>
              <h2 className="text-secondary500 text-sm jakarta-cardHeading">
                Total Rental Price
              </h2>
              <p className="text-secondary300 jakarta-reular">
                Overall price and includes rental discount
              </p>
            </div>
            <p className="text-secondary500 jakarta-logo">{`$80.00`}</p>
          </div>
        </div>

        {/* right right */}
        <div className="bg-primary0">
          <div>
            <Image
              src={"/dashboard/02.png"}
              alt={"map"}
              width={486}
              height={272}
            />
          </div>

          {/* Right right bottom */}
          <div>
            {dashboardCars.map((data, index) => (
              <DashbCard
                key={index}
                url={data.url}
                name={data.name}
                category={data.category}
                date={data.date}
                price={data.price}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
