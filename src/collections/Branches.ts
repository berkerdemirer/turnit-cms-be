import { CollectionConfig } from "payload/types";

const Branches: CollectionConfig = {
  slug: "branches",
  admin: {
    useAsTitle: "branchName",
    group: "Configuration",
  },
  fields: [
    {
      unique: true,
      name: "branchName",
      type: "text",
      required: true,
    },
  ],
};

export default Branches;
