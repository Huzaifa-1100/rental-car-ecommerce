"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import CatalogCard from "@/components/sub/productCard";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { useSelectedTypes } from "@/context/selectedTypesContext";

interface Car {
  _id: string;
  slug?: {
    current: string;
  };
  name: string;
  type: { type: string }; // Resolved `type` field
  pricePerDay: string;
  seatingCapacity: string;
  fuelCapacity: string;
  transmission: string;
  image: string;
}

export default function CarList() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState<string | null>(null); // Add error state
  const { selectedTypes, searchQuery } = useSelectedTypes(); // Use the context

  // Fetch cars from Sanity
  useEffect(() => {
    async function fetchCars() {
      try {
        const query = `*[_type == "car"]{
          _id,
          name,
          slug,
          type->{type}, 
          pricePerDay,
          seatingCapacity,
          fuelCapacity,
          transmission,
          image
        }`;
        const data = await client.fetch<Car[]>(query);
        setCars(data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching cars:", error);
        setError("Failed to fetch car data. Please try again later."); // Set error message
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
      <div className="flex justify-center items-center h-screen">
        <p>Loading cars...</p>
      </div>
    );
  }

  // Display error state
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-bg py-9">
      {/* Card Section */}
      <div className="mx-auto mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3 px-5 gap-4 place-self-center">
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
        <div className="my-16 flex justify-between items-center px-4">
          <div></div>
          <p className="text-secondary300 jakarta-small">120 Car</p>
        </div>
      </div>
    </div>
  );
}