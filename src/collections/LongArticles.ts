import { CollectionConfig } from "payload/types";

const LongArticles: CollectionConfig = {
  slug: "long-articles",
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: "title",
    group: "Content",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      localized: true,
      unique: true,
    },
    {
      name: "content",
      type: "richText",
      required: true,
      localized: true,
    },
    {
      name: "urlPath",
      type: "relationship",
      relationTo: ["paths"],
      required: true,
    },
    {
      name: "branch",
      type: "relationship",
      relationTo: ["branches"],
      required: true,
    },
  ],
};

export default LongArticles;
