import { client } from "@/sanity/lib/client";
import { Image } from "sanity";

// Define TypeScript interfaces for the returned data
export interface Car {
  _id: string;
  slug: {
    current: string; // Represents the current value of the slug
  };
  brand: string;
  engineCapacity: number;
  transmission: string;
  seatingCapacity: number;
  price: number;
  image: Image;
  category: {
    name: string;
  };
}

export const getCars = async (categories?: string[]): Promise<Car[]> => {
  // Ensure categories is always an array or null
  const resolvedCategories = categories?.length ? categories : null;

  const res = await client.fetch(
    `*[_type=="car" && (!defined($categories) || category->name in $categories)] {
        _id,
        brand,
        engineCapacity,
        transmission,
        seatingCapacity,
        price,
        image,
        slug,
        category->{
          name
        }
      }`,
    { categories: resolvedCategories }, // Pass resolvedCategories
    {
      cache: "no-store", // Ensure fresh data is fetched
    }
  );
  return res;
};
