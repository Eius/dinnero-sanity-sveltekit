import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepage_settings',
  title: 'Úvodná stránka',
  type: 'document',
  fields: [
    defineField({
      name: 'discount_title',
      title: "Akcia - titulok",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'discount_text',
      title: "Akcia - podtitulok (voliteľné)",
      type: "string"
    }),
  ]
})
