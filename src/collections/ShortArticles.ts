import { CollectionConfig } from "payload/types";

const extractTextFromSlate = (nodes) => {
  return nodes
    .map((n) => {
      if (n.text) return n.text;
      if (n.children) return extractTextFromSlate(n.children);
      return null;
    })
    .join(" ");
};

const ShortArticles: CollectionConfig = {
  slug: "short-articles",
  hooks: {
    beforeChange: [
      ({ data, req }) => {
        if (data.content) {
          data.rawContent = extractTextFromSlate(data.content);
        }
      },
    ],
  },
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: "title",
    group: "Content",
  },
  access: {
    read: () => true,
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
      name: "rawContent",
      type: "text",
      localized: true,
      admin: {
        hidden: true,
      },
    },
    {
      name: "urlPath",
      type: "relationship",
      relationTo: "paths",
      hasMany: false,
      required: true,
    },
    {
      name: "branch",
      type: "relationship",
      relationTo: "branches",
      hasMany: false,
      required: true,
    },
  ],
};

export default ShortArticles;
