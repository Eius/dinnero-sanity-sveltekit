import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contacts',
  title: 'Kontakty',
  type: 'document',
  fields: [
    defineField({
      name: 'phone_number',
      title: 'Tel. číslo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'E-mail',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Adresa',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ]
})
