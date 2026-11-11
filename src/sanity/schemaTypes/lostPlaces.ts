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
          { title: "Buried city", value: "Buried city" },
          { title: "Rock-cut city", value: "Rock-cut city" },
          {
            title: "Ancient urban settlement",
            value: "Ancient urban settlement",
          },
          { title: "Medieval stone city", value: "Medieval stone city" },
          { title: "Temple city", value: "Temple city" },
          { title: "Buried Settlement", value: "Buried Settlement" },
          { title: "Ancient City", value: "Ancient City" },
          { title: "Lost Civilization", value: "Lost Civilization" },
          { title: "Abandoned City", value: "Abandoned City" },
        ],
      },
    }),

    defineField({
      name: "theme",
      title: "Theme",
      type: "reference",
      to: [{ type: "theme" }],
      validation: (Rule) => Rule.required(),
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

    // Presentation
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    // Geography
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

    // Historical overview
    defineField({
      name: "overview",
      title: "Historical Overview",
      type: "text",
      rows: 5,
    }),

    defineField({
      name: "discovery",
      title: "Rediscovery and Excavation",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
            ],
          },
        }),
      ],
    }),

    // Archaeological findings
    defineField({
      name: "archaeologicalFindings",
      title: "Archaeological Findings",
      type: "array",
      of: [
        defineArrayMember({
          type: "text",
          rows: 3,
        }),
      ],
    }),

    // Mysteries and evidence
    defineField({
      name: "mysteries",
      title: "Mysteries and Unanswered Questions",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Mystery Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 4,
            }),

            defineField({
              name: "evidence",
              title: "Available Evidence",
              type: "text",
              rows: 4,
            }),

            defineField({
              name: "status",
              title: "Research Status",
              type: "string",
              options: {
                list: [
                  { title: "Unresolved", value: "Unresolved" },
                  {
                    title: "Partially understood",
                    value: "Partially understood",
                  },
                  { title: "Popular myth", value: "Popular myth" },
                ],
              },
            }),
          ],
        }),
      ],
    }),

    // Long-form article
    defineField({
      name: "articleBody",
      title: "Historical Article",
      description:
        "Optional long-form editorial article with rich text and images.",
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

    // Supporting documents
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

    // Historical media
    defineField({
      name: "gallery",
      title: "Historical Media Gallery",
      type: "array",
      of: [
        defineArrayMember({
          type: "historicalMedia",
        }),
      ],
    }),
  ],
});
