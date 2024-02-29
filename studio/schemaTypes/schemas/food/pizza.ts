import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pizza',
  title: 'Pizza',
  type: 'document',
  fields: [
    defineField(
      {
        type: "generic_food_data",
        name: "food_data",
        title: "Údaje o jedle",
      }
    ),
    defineField(
      {
        type: "image", 
        name: "image", 
        title: "Obrázok (úvodná stránka)",
      }
    ),
  ],

  orderings: [
    {
        title: "Poradie",
        name: "orderAsc", 
        by: [
            {field: "food_data.order", direction: "asc"}
        ]
    }
  ],

  preview: {
    select: {
        title: "food_data.title",
        media: 'image',
    }
  },
})
