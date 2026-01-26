import { defineType, defineField } from "sanity";

export default defineType({
  name: "pricingTable",
  title: "Pricing Table",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "tableTitle",
      title: "TableTitle",
      type: "string",
    }),
    defineField({
      name: "plans",
      title: "Plans",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Plan Name", type: "string" },
            { name: "price", title: "Price", type: "string" },
          ],
        },
      ],
    }),

    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "label",
              title: "Feature Name",
              type: "string",
            },
            {
              name: "availability",
              title: "Availability per plan",
              type: "array",
              of: [{ type: "boolean" }],
              description:
                "Order must match plan order (Basic, Premium, e-Commerce)",
            },
          ],
        },
      ],
    }),
  ],
});
