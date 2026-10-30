import { defineType, defineField } from "sanity";

export const timelineEvent = defineType({
  name: "timelineEvent",
  title: "Timeline Event",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Event Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "year",
      title: "Display Date",
      type: "string",
      description: "For example: 79 CE, c. 1900 BCE, or 1860s",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "sortYear",
      title: "Sort Year",
      type: "number",
      description:
        "Use negative numbers for BCE dates. Example: -2600 for 2600 BCE.",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),

    defineField({
      name: "eventType",
      title: "Event Type",
      type: "string",
      options: {
        list: [
          { title: "Settlement", value: "settlement" },
          { title: "Disaster", value: "disaster" },
          { title: "Abandonment", value: "abandonment" },
          { title: "Rediscovery", value: "rediscovery" },
          { title: "Excavation", value: "excavation" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
