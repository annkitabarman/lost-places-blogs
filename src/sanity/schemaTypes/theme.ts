import { defineType, defineField } from "sanity";

export const theme = defineType({
  name: "theme",
  title: "Theme",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Theme Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
  ],
});
