import Hero from "@/components/main/hero";
import { getCars } from "../../utils/carsData";
import Link from "next/link";
import CatalogCard from "@/components/sub/productCard";
import { urlFor } from "@/sanity/lib/image";
import Button from "@/components/sub/button";

export default async function Home() {
  // fetct popular cars
  const PopularCars = await getCars('popular');
  // fetct recomended cars
  const recommendedCars = await getCars('recommended');

  return (
    <div className="wrapper bg-bg py-9">
      {/* Hero Section */}
      <Hero />

      {/* Card Section */}

      {/* Popular Car */}
      <div>
        <h1 className="jakarta-addButton text-secondary300 text-start my-10">
          Popular Car
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full place-self-center ">
          {PopularCars.map((car) => (
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
          ))}
        </div>
      </div>

      {/* Recomendation Car */}
      <div>
        <h1 className="jakarta-addButton text-secondary300 text-start my-10 ">
          Recomendation Car
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full  place-self-center ">
          {recommendedCars.map((car) => (
            <Link href={`/details/${car.slug.current}`} key={car._id}>
              <CatalogCard
                id={0}
                carName={car.name}
                category={car.type
                }
                price={car.pricePerDay}
                capacity={car.seatingCapacity}
                fuel={car.fuelCapacity}
                transmission={car.transmission}
                carImage={urlFor(car.image).url()}
                isLike={false}
              />
            </Link>
          ))}
        </div>
        <div className="my-16 flex justify-between items-center px-4 ">
          <div></div>
          <Button text={"Show more car"} url={"/category"} />
          <p className="text-secondary300 jakarta-small">120 Car</p>
        </div>
      </div>
    </div>
   
  );
}
