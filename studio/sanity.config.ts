import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemaTypes'
import {customStructure} from './src/structures/customStructure'

export const projectId = process.env.SANITY_STUDIO_PROJECT_ID!
export const dataset = process.env.SANITY_STUDIO_DATASET!

export default defineConfig({
  name: 'dinnero-pizza',
  title: 'Dinnero Pizza',
  projectId,
  dataset,
  plugins: [
    deskTool({
      structure: customStructure
    }), 
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
