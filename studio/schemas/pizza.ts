import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pizza',
  title: 'Pizza',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Názov',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Obrázok na úvodnej stránke',
      type: 'image',
    }),
    defineField({
        name: 'order',
        title: 'Poradie',
        type: 'number',
      })
  ],
  initialValue: {
    order: 0
  },
  orderings: [
    {
        title: "Poradie",
        name: "orderDesc", 
        by: [
            {field: "order", direction: "asc"}
        ]
    }
  ],
  preview: {
    select: {
        title: 'title',
        media: 'image',
    }
  },
})
