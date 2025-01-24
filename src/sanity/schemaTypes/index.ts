import { type SchemaTypeDefinition } from 'sanity'
import { Cars } from '../scheema/cars'
import { carType } from '../scheema/type'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Cars, carType],
}
