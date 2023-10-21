import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";

import Users from "./collections/Users";
import LongArticles from "./collections/LongArticles";
import Paths from "./collections/Paths";
import Media from "./collections/Media";
import ShortArticles from "./collections/ShortArticles";

import { Icon } from "./graphics/Icon";
import { Logo } from "./graphics/Logo";
import Branches from "./collections/Branches";

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    meta: {
      favicon: "/assets/favicon.ico",
      titleSuffix: "- Turnit CMS",
    },
    components: {
      graphics: {
        Icon,
        Logo,
      },
    },
    css: path.resolve(__dirname, "./main.scss"),
  },
  editor: slateEditor({}),
  localization: {
    locales: [
      {
        label: "English",
        code: "en-US",
      },
      {
        label: "Estonian",
        code: "et-EE",
      },
      {
        label: "Lithuanian",
        code: "lt-LT",
      },
    ],
    defaultLocale: "en-US",
    fallback: false,
  },
  collections: [Users, LongArticles, Paths, Media, ShortArticles, Branches],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [payloadCloud()],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  cors: "*",
});
