import { defineField, defineType } from "sanity";

export default defineType({
  name: "time_custom",
  title: "Čas",
  type: "object",
  fields: [
    defineField({type: "number", name: "hour", title: "Hodina"}),
    defineField({type: "number", name: "minute", title: "Minúta"}),
  ],
})