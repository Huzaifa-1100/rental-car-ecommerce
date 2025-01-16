import { defineField, defineType } from 'sanity';

export const carCategory = defineType({
    name: 'carCategory',
    title: 'Car Category',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Category Name',
            type: 'string',
            description: 'The name of the car category (e.g., Sports, Luxury, SUV)',
            validation: Rule => Rule.required(),
        })
    ],
});
