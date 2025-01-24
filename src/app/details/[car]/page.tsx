import React from "react";
import { getCars } from "../../../../utils/carsData";
import CatalogCard from "@/components/sub/productCard";
import { CheckboxReactHookFormMultiple } from "@/components/sub/sideBar";
import {
  typeSidebar,
  capacitySidebar,
} from "../../../../utils/data";
import Sidebar from "@/components/main/sidebar";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { FaRegStar, FaStar } from "react-icons/fa";
import Button from "@/components/sub/button";
import Link from "next/link";
import CarList from "@/components/main/carList";

interface PageParams {
  params: {
    car: string; // The slug of the car
  };
}

export async function generateStaticParams() {
  const carsData = await getCars();
  return carsData.map((car) => ({
    params: { car: car.slug.current },
  }));
}

const page = async (params: PageParams) => {
  const carsData = await getCars();
  const filteredCar = carsData.find(
    (car) => car.slug.current === params.params.car
  );
  console.log(filteredCar);
  return (
    <main className="wrapper flex">
      {/* left */}
      <div className="basis-2/12 lg:block hidden">
        {/* type */}
        <div className="mt-10">
         <CheckboxReactHookFormMultiple/>
          </div>
        </div>

        {/* capacity */}
        {/* <div className="space-y-4 my-5 mt-10">
          <Sidebar heading={"C A P A C I T Y"} />
          {capacitySidebar.map((capacity) => (
            <CheckboxReactHookFormMultiple
              key={capacity.id}
              category={capacity.category}
              qty={capacity.qty}
            />
          ))}
        </div>
      </div> */}
      {/* Right */}
      <div className="wrapper bg-bg py-9">
        <div className="">
          {/* top images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            {/* add 1 */}
            <div className="h-[508px]">
              <div className="bg-primary500 max-w-[492px] max-h-[360px] w-full h-full p-6 flex flex-col">
                <h2 className="jakarta-custom text-primary0 text-[32px] font-bold ">
                  Sports car with the best design and acceleration
                </h2>
                <p className="jakarta-custom text-[16px] max-w-64 text-primary0">
                  Safety and comfort while driving a futuristic and elegant
                  sports car
                </p>
                <Image
                  className="mt-auto"
                  src={
                    filteredCar?.image
                      ? urlFor(filteredCar.image).url()
                      : "/fallback-image.jpg"
                  }
                  alt={filteredCar?.name || `car image`}
                  width={400}
                  height={200}
                />
              </div>
              <div className="grid grid-cols-3 gap-3 my-7">
                <div className="bg-primary500 max-w-[148px] max-h-[124px] w-full h-full flex flex-col border p-2 rounded-md">
                  <Image
                    className="my-auto"
                    src={
                      filteredCar?.image
                        ? urlFor(filteredCar.image).url()
                        : "/fallback-image.jpg"
                    }
                    alt={filteredCar?.name || `car image`}
                    width={148}
                    height={124}
                  />
                </div>
                <Image
                  src={"/details/View 2.png"}
                  alt={"view 2"}
                  width={148}
                  height={124}
                />
                <Image
                  src={"/details/View 3.png"}
                  alt={"view 3"}
                  width={148}
                  height={124}
                />
              </div>
            </div>

            {/* add 2 */}

            <div className="bg-primary0 max-w-[492px] p-6">
              <div className=" max-h-[360px] w-full h-full  flex flex-col">
                {/* top heading section */}
                <div className="flex flex-col space-y-4 items-start">
                  <h2 className="text-secondary500 jakarta-custom font-extrabold text-3xl tracking-tighter ">
                    {filteredCar?.brand}
                  </h2>
                  <div className="flex gap-1 items-center">
                    {[1, 2, 3, 4].map((_, i) => (
                      <FaStar
                        key={i}
                        className="text-[#FBAD39] size-2 md:size-4"
                      />
                    ))}
                    <FaRegStar className="size-2 md:size-4" />
                    <p className="text-secondary300 tracking-tighter jakarta-small ">
                      440+ Reviewer
                    </p>
                  </div>
                </div>
                {/* mid */}
                <p className="jakarta-custom text-[18px] text-secondary400 my-auto">
                  {`NISMO has become the embodiment of Nissan's outstanding
                  performance, inspired by the most unforgiving proving ground,
                  the "race track".`}
                </p>
                {/* bottom */}
                <div className="grid grid-cols-4 w-full gap-2 mt-auto mb-5 jakarta-custom text-[10px] md:text-[18px]">
                  <p className=" text-secondary300 font-bold">Type Car </p>
                  <p className=" text-secondary400 font-bold">
                    {filteredCar?.type.type}
                  </p>
                  <p className=" text-secondary300 font-bold">Capacity </p>
                  <p className=" text-secondary400 font-bold">
                    {filteredCar?.seatingCapacity}
                  </p>
                  <p className=" text-secondary300 font-bold">Steering </p>
                  <p className=" text-secondary400 font-bold">
                    {filteredCar?.transmission}
                  </p>
                  <p className=" text-secondary300 font-bold">Gasoline </p>
                  <p className=" text-secondary400 font-bold">
                    {filteredCar?.fuelCapacity}
                  </p>
                </div>
              </div>
              {/* 2nd botton */}
              <div className="flex justify-between items-center h-[124px]">
                <div>
                  <p className="jakarta-cardHeading tracking-tighter">
                    {filteredCar?.pricePerDay}/ <span>days</span>
                  </p>
                  <p className="line-through">${100.0}</p>
                </div>
                <Button text={"Rent Now"} url={"/payment"} />
              </div>
            </div>
          </div>

          {/* Middle section */}

          {/* Card Section */}

          {/* Recent Car */}
          <div className=" mx-auto">
            <div className="flex justify-between my-10 mx-6 mt-20">
              <h2 className="jakarta-addButton text-secondary300 ">
                Recent Car
              </h2>
              <p className="text-primary500 ">View All</p>
            </div>

            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-self-center "> */}
             <CarList/>
              {/* {carsData.map((car) => (
                <Link href={`/details/${car.slug.current}`} key={car._id}>
                <CatalogCard
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
              </Link>
              ))} */}
            </div>
          </div>
        </div>
      {/* </div> */}
    </main>
  );
};

export default page;
