import { defineField, defineType } from "sanity";
import TimeInput from "../../src/components/TimeInput";

export default defineType({
  name: "day",
  title: "Deň",
  type: "object",
  fields: [
    defineField({type: "boolean", name: "closed", title: "Zatvorené", initialValue: false}),
    defineField({type: "time_custom", name: "start", title: "Začiatok"}),
    defineField({type: "time_custom", name: "end", title: "Koniec"})
  ],
  components: {
    input: TimeInput
  }
})