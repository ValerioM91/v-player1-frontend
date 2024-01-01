import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  schema: "https://v-player1.co.uk/graphql",
  documents: ["./src/lib/queries.ts", "./src/sections/**/query.ts"],
  generates: {
    "./src/gql/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: false,
      },
      config: {
        scalars: {
          DecodedURL: {
            input: "string",
            output: "string",
          },
        },
      },
    },
  },
}
export default config
