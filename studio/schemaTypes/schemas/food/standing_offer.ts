import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'standing_offer',
  title: 'Stála ponuka',
  type: 'document',
  fields: [
    defineField(
      {
        type: "generic_food_data",
        name: "food_data",
        title: "Údaje o jedle",
      }
    ),
  ],

  orderings: [
    {
        title: "Poradie",
        name: "orderDesc", 
        by: [
            {field: "food_data.order", direction: "asc"}
        ]
    }
  ],

  preview: {
    select: {
        title: "food_data.title",
    }
  },
})
