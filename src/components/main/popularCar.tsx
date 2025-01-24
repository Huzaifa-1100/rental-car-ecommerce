"use client";
import { useSelectedTypes } from "@/context/selectedTypesContext";
import React, { useEffect, useState } from "react";
import { Car, getCars } from "../../../utils/carsData";
import Link from "next/link";
import CatalogCard from "../sub/productCard";
import { urlFor } from "@/sanity/lib/image";

const PopularCar = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const { searchQuery, selectedTypes } = useSelectedTypes(); // Use the context

  // Fetch cars from Sanity
  useEffect(() => {
    async function fetchCars() {
      // fetct popular cars
      const PopularCars = await getCars("popular");
      setCars(PopularCars);
    }
    fetchCars();
  }, []);

  // Filter cars based on selected types and search query
  const filteredCars = cars.filter((car) => {
    const matchesType =
      selectedTypes.length === 0 || selectedTypes.includes(car.type.type);
    const matchesSearch = car.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full place-self-center ">
      {filteredCars.map((car) => {
        // Check if slug exists before rendering the Link
        if (!car.slug || !car.slug.current) {
          console.warn(`Car with ID ${car._id} is missing a slug.`);
          return null; // Skip rendering this car
        }

        return (
          <Link href={`/details/${car.slug.current}`} key={car._id}>
            <CatalogCard
              key={car._id}
              id={0}
              carName={car.name}
              category={car.type.type} // Pass the resolved car type name
              price={car.pricePerDay}
              capacity={car.seatingCapacity}
              fuel={car.fuelCapacity}
              transmission={car.transmission}
              carImage={urlFor(car.image).url()}
              isLike={false}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default PopularCar;
