import { defineType, defineField } from "sanity";

export const historicalMedia = defineType({
  name: "historicalMedia",
  title: "Historical Media",
  type: "object",

  fields: [
    defineField({
      name: "title",
      title: "Media Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "mediaType",
      title: "Media Type",
      type: "string",
      options: {
        list: [
          { title: "Historical Photograph", value: "photograph" },
          { title: "Map", value: "map" },
          { title: "Artefact", value: "artefact" },
          { title: "Illustration", value: "illustration" },
          { title: "Excavation", value: "excavation" },
        ],
      },
    }),

    defineField({
      name: "creator",
      title: "Creator / Photographer",
      type: "string",
    }),

    defineField({
      name: "sourceName",
      title: "Source Institution",
      type: "string",
    }),

    defineField({
      name: "sourceUrl",
      title: "Original Source URL",
      type: "url",
    }),

    defineField({
      name: "license",
      title: "License",
      type: "string",
    }),

    defineField({
      name: "attribution",
      title: "Attribution",
      type: "text",
      rows: 2,
    }),

    defineField({
      name: "caption",
      title: "Caption",
      type: "text",
      rows: 2,
    }),
  ],
});
