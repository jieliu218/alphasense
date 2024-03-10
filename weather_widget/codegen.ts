import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://alphasense-weather-app-stxq8.ondigitalocean.app/index",
  documents: ["src/**/*.{ts,tsx}", "!./src/gql/**/*"],
  ignoreNoDocuments: true,
  generates: {
    "./src/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  hooks: { afterAllFileWrite: ["npx prettier --write"] },
};

export default config;
