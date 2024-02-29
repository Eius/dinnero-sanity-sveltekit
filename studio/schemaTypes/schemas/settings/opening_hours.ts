import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'opening_hours',
  title: 'Otváracie hodiny',
  type: 'document',
  fields: [
    {
      title: "Pondelok",
      name: "monday",
      type: "day"
    },
    {
      title: "Utorok",
      name: "tuesday",
      type: "day"
    },
    {
      title: "Streda",
      name: "wednesday",
      type: "day"
    },
    {
      title: "Štvrtok",
      name: "thursday",
      type: "day"
    },
    {
      title: "Piatok",
      name: "friday",
      type: "day"
    },
  ]
})
