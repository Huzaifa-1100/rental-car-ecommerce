"use client";
import { useSelectedTypes } from "@/context/selectedTypesContext";
import React, { useEffect, useState } from "react";
import { Car, getCars } from "../../../utils/carsData";
import Link from "next/link";
import CatalogCard from "../sub/productCard";
import { urlFor } from "@/sanity/lib/image";

const RecommendedCar = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState<string | null>(null); // Add error state
  const { searchQuery, selectedTypes } = useSelectedTypes(); // Use the context

  // Fetch cars from Sanity
  useEffect(() => {
    async function fetchCars() {
      try {
        // Fetch recommended cars
        const recommendedCars = await getCars("recommended");
        setCars(recommendedCars); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching recommended cars:", error);
        setError("Failed to fetch recommended cars. Please try again later."); // Set error message
      } finally {
        setLoading(false); // Set loading to false after fetching (whether successful or not)
      }
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

  // Display loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <p>Loading recommended cars...</p>
      </div>
    );
  }

  // Display error state
  if (error) {
    return (
      <div className="flex justify-center items-center h-40">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full place-self-center">
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

export default RecommendedCar;