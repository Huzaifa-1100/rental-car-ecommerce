import { defineField, defineType } from 'sanity';

export const carType = defineType({
    name: 'carType',
    title: 'Car Type',
    type: 'document',
    fields: [
        defineField({
            name: 'type',
            title: 'Car Type',
            type: 'string',
            description: 'The type of the car (e.g., Sports, Luxury, SUV)',
            validation: Rule => Rule.required(),
        })
    ],
});
