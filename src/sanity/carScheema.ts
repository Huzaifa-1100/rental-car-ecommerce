import { defineField, defineType } from 'sanity';

export const car = defineType({
  name: 'car',
  title: 'Car',
  type: 'document',
  fields: [
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'string',
      description: 'The brand of the car',
      validation: Rule => Rule.required(),
    }),
    defineField({
        name: "slug",
        type: 'slug',
        title: "Slug",
        description: 'The slug of the car',
        options: {
            source: 'brand',
            maxLength: 96,
        }
    }),
    defineField({
      name: 'image',
      title: 'Car Image',
      type: 'image',
      description: 'add car image',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'engineCapacity',
      title: 'Engine Capacity',
      type: 'number', 
      description: 'The engine capacity of the car (e.g., 90L)',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'transmission',
      title: 'Transmission',
      type: 'string',
      description: 'Transmission type (e.g., Manual or Automatic)',
      options: {
        list: [
          { title: 'Manual', value: 'manual' },
          { title: 'Automatic', value: 'automatic' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'seatingCapacity',
      title: 'Seating Capacity',
      type: 'number',
      description: 'Number of people the car can accommodate (e.g., 2 People)',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the car (e.g., $99.00)',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'carCategory' }],
      description: 'The category of the car (e.g., Sports, Luxury, SUV)',
      validation: Rule => Rule.required(),
    }),
  ],
});
