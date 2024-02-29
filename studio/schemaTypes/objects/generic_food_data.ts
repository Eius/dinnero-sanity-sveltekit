import { defineField, defineType } from "sanity";
import TimeInput from "../../src/components/TimeInput";

export default defineType({
  name: "generic_food_data",
  title: "Údaje o jedle",
  type: "object",
  fields: [
    defineField(
      {
        type: "string", 
        name: "title", 
        title: "Názov",
        validation: (rule) => rule.required()
      }
    ),
    defineField(
      {
        type: "text", 
        name: "description", 
        title: "Popis",
      }
    ),
    defineField(
      {
        type: "number", 
        name: "weight", 
        title: "Váha",
      }
    ),
    defineField(
      {
        type: "string", 
        name: "weight_unit", 
        title: "Jednotka váhy",
        initialValue: "g",
        validation: (rule) => rule.required(),
      }
    ),
    defineField(
      {
        type: "number", 
        name: "price", 
        title: "Cena (€)", 
        initialValue: 0,
        validation: (rule) => rule.required(),
      }
    ),
    defineField(
      {
        type: "number",
        name: "order",
        title: "Poradie",
        initialValue: 0,
        validation: (rule) => rule.required(),
      }
    ),
  ],
})