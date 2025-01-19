import { client } from "@/sanity/lib/client";

// Define TypeScript interfaces for the returned data
export interface Car {
  /** The unique identifier for the car document */
  _id?: string;

  /** The name of the car */
  name: string;

  /** The slug for the car, automatically generated from the name */
  slug: {
    current: string;
  };

  /** The brand of the car (e.g., Nissan, Tesla, etc.) */
  brand: string;

  /** The type of the car (e.g., Sport, Sedan, SUV, etc.) */
  type: string;

  /** The fuel or battery capacity of the car (e.g., 90L, 100kWh) */
  fuelCapacity: string;

  /** The type of transmission (e.g., Manual, Automatic) */
  transmission: string;

  /** The seating capacity of the car (e.g., 2 People, 4 seats) */
  seatingCapacity: string;

  /** The rental price per day for the car */
  pricePerDay: string;

  /** The original price of the car before any discounts */
  originalPrice: string;

  /** Tags for categorization (e.g., popular, recommended) */
  tags: string[];

  /** The image of the car, with metadata like hotspot information */
  image: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
    hotspot?: {
      x: number;
      y: number;
      height: number;
      width: number;
    };
  };

  /** Metadata automatically added by Sanity */
  _createdAt?: string;
  _updatedAt?: string;
}


export const getCars = async (categories?: string[]): Promise<Car[]> => {
  // Ensure categories is always an array or null
  const resolvedCategories = categories?.length ? categories : null;

  const res = await client.fetch(
    `*[_type=="car" && (!defined($categories) || category->name in $categories)] {
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
      }`,
    { categories: resolvedCategories }, // Pass resolvedCategories
    {
      cache: "no-store", // Ensure fresh data is fetched
    }
  );
  return res;
};
