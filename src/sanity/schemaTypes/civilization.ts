import { defineType, defineField, defineArrayMember } from "sanity";

export const civilization = defineType({
  name: "civilization",
  title: "Civilization",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Civilization Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "region",
      title: "Geographical Region",
      type: "string",
    }),

    defineField({
      name: "period",
      title: "Historical Period",
      type: "string",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 5,
    }),

    defineField({
      name: "articleBody",
      title: "Historical Background",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
        }),
      ],
    }),
  ],
});
