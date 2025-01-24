// src/queries/carQuery.ts

import { client } from "@/sanity/lib/client";

interface Car {
  _id: string;
  name: string;
  brand: string;
  type: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: string;
  pricePerDay: string;
  slug: {
    current: string;
  }
  originalPrice: number;
  tags: string[];
  imageUrl?: string;  // This will be a string containing the image URL
}



export const allCars = `*[_type == "car"]{
      _id,
      name,
      brand,
      type,
      fuelCapacity,
      transmission,
      seatingCapacity,
      pricePerDay,
      slug,
      originalPrice,
      tags,
      image
  }`;


export const getRecommendedCars = async () => {

  const recommendedCars: Car[] = await client.fetch(`*[_type == "car" && "recommended" in tags][0..7]{
    _id,
    name,
    brand,
    type,
    fuelCapacity,
    transmission,
    seatingCapacity,
    pricePerDay,
    slug,
    originalPrice,
    tags,
    "imageUrl": image.asset->url
    }`
  )
  return recommendedCars
}