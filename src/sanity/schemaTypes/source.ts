import { defineType, defineField } from "sanity";

export const source = defineType({
  name: "source",
  title: "Source",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "publisher",
      title: "Publisher / Institution",
      type: "string",
    }),

    defineField({
      name: "author",
      title: "Author",
      type: "string",
    }),

    defineField({
      name: "publicationDate",
      title: "Publication Date",
      type: "date",
    }),

    defineField({
      name: "url",
      title: "Source URL",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    }),

    defineField({
      name: "sourceType",
      title: "Source Type",
      type: "string",
      options: {
        list: [
          { title: "Academic Paper", value: "academic-paper" },
          { title: "Book", value: "book" },
          { title: "Archaeological Report", value: "archaeological-report" },
          { title: "Museum Collection", value: "museum-collection" },
          { title: "Official Website", value: "official-website" },
          { title: "Other", value: "other" },
        ],
      },
    }),

    defineField({
      name: "notes",
      title: "Editorial Notes",
      type: "text",
      rows: 3,
    }),
  ],
});
