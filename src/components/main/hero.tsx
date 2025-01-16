import React from "react";
import HeroAdds from "../sub/heroAdds";
import { pickupData } from "../../../utils/data";
import PickUpCards from "../sub/pickUpCards";
import { TbArrowsDownUp } from "react-icons/tb";
import RadioButton from "./radioButton";

const Hero =  () => {

  return (
    <main className=" bg-bg py-9">
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
        <div className="flex flex-col md:flex-row justify-between items-center mt-10">
          <div className="max-w-[582px] w-full p-6 bg-white  ">
            {/* Pickup */}
            <div className="flex items-center gap-5">
              {/* Dot */}
              <RadioButton option="Pick Up" />
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
            <div className="flex items-center gap-5">
              <RadioButton option="Drop - Off" />
            </div>

            {/* Location */}
            <div className="flex justify-between ">
              {pickupData.map((pickupData, index) => (
                <PickUpCards key={index} heading={pickupData.heading} />
              ))}
            </div>
          </div>
        </div>


      </div>
    </main>
  );
};

export default Hero;
