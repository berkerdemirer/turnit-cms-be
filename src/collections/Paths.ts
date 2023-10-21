import { CollectionConfig } from "payload/types";

const Paths: CollectionConfig = {
  slug: "paths",
  admin: {
    useAsTitle: "urlPath",
    group: "Configuration",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      unique: true,
      name: "urlPath",
      type: "text",
      required: true,
    },
  ],
};

export default Paths;
