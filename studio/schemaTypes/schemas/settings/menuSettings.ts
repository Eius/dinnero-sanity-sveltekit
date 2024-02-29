import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'menuSettings',
  title: 'Menu stránka',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titulok stránky',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Popis stránky',
      type: 'text'
    }),
    defineField({
      name: 'main_image_title',
      title: 'Hlavný obrázok - titulok',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ]
})
