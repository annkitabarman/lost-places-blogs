import { defineType, defineField, defineArrayMember } from "sanity";

export const lostPlace = defineType({
  name: "lostPlace",
  title: "Lost Place",
  type: "document",

  fields: [
    // Basic information
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "period",
      title: "Historical Period",
      type: "string",
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Buried Settlement", value: "buried-settlement" },
          { title: "Ancient City", value: "ancient-city" },
          { title: "Lost Civilization", value: "lost-civilization" },
          { title: "Abandoned City", value: "abandoned-city" },
        ],
      },
    }),

    defineField({
      name: "civilizations",
      title: "Associated Civilizations",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "civilization" }],
        }),
      ],
    }),

    defineField({
      name: "status",
      title: "Current Status",
      type: "string",
    }),

    // Short description
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),

    // Main image
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    // Map coordinates
    defineField({
      name: "coordinates",
      title: "Coordinates",
      type: "object",
      fields: [
        defineField({
          name: "lat",
          title: "Latitude",
          type: "number",
        }),
        defineField({
          name: "lng",
          title: "Longitude",
          type: "number",
        }),
      ],
    }),

    // Long-form historical article
    defineField({
      name: "articleBody",
      title: "Historical Article",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                ],
              },
            ],
          },
        }),
        defineArrayMember({
          type: "image",
          options: {
            hotspot: true,
          },
        }),
      ],
    }),

    defineField({
      name: "theme",
      title: "Theme",
      type: "reference",
      to: [{ type: "theme" }],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "sources",
      title: "Sources",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "source" }],
        }),
      ],
    }),

    defineField({
      name: "timeline",
      title: "Timeline Events",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "timelineEvent" }],
        }),
      ],
    }),
  ],
});
