import Sidebar from "@/components/main/sidebar";
import React from "react";
import { capacitySidebar, detailCars, typeSidebar } from "../../../utils/data";
import SidebarContent from "@/components/sub/sidebarContent";
import HeroAdds from "@/components/sub/heroAdds";

import CatalogCard from "@/components/sub/productCard";

const Page = () => {
  return (
    <main className="wrapper flex">
      {/* left */}
      <div className="basis-2/12 lg:block hidden">
        {/* type */}
        <div className="mt-10">
          <Sidebar heading={"T Y P E"} />
          <div className="space-y-4 my-5">
            {typeSidebar.map((sidebar, index) => (
              <SidebarContent
                key={index}
                iSicon={sidebar.isIcon}
                category={sidebar.category}
                qty={sidebar.qty}
              />
            ))}
          </div>
        </div>

        {/* capacity */}
        <div className="space-y-4 my-5 mt-10">
          <Sidebar heading={"C A P A C I T Y"} />
          {capacitySidebar.map((capacity, index) => (
            <SidebarContent
              key={index}
              iSicon={capacity.isIcon}
              category={capacity.category}
              qty={capacity.qty}
            />
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="wrapper bg-bg py-9">
        <div className="">
          {/* top images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            {/* add 1 */}

            <HeroAdds
              bgImage={"/hero/bg1.png"}
              title={"The Best Platform for Car Rental"}
              p1={
                "Ease of doing a car rental safely and reliably. Of course at a low price."
              }
              but={"Rental Car"}
              carImg={"/hero/car1.png"}
              bgbutton={true}
            />

            {/* add 2 */}
            <HeroAdds
              bgImage={"/hero/bg2.png"}
              title={"Easy way to rent a car at a low price"}
              p1={
                "Providing cheap car rental services and safe and comfortable facilities."
              }
              but={"Rental Car"}
              carImg={"/hero/car2.png"}
              isHidden
              bgbutton={false}
            />
          </div>

          {/* Middle section */}

          {/* Card Section */}

          {/* Recent Car */}
          <div className=" mx-auto">
            <div className="flex justify-between my-10 mx-6">
              <h2 className="jakarta-addButton text-secondary300 ">
                Recent Car
              </h2>
              <p className="text-primary500 ">View All</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-self-center ">
              {detailCars.map((car) => (
                <CatalogCard key={car.id} {...car} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
