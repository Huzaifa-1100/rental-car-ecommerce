import { type SchemaTypeDefinition } from 'sanity'
import { car } from '../carScheema'
import { carCategory } from '../carCategory'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [car, carCategory],
}
