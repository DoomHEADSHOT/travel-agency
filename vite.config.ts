import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import {sentryReactRouter, type SentryReactRouterBuildOptions} from "@sentry/react-router";

const sentryConfig: SentryReactRouterBuildOptions = {
  org: "jsmastery-el",
  project: "javascript-react",
  // An auth token is required for uploading source maps.
  authToken: "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"
  // ...
};



export default defineConfig(config => {
  return {
    plugins: [tailwindcss(), tsconfigPaths(),reactRouter(),sentryReactRouter(sentryConfig, config)],
      sentryConfig,
    ssr: {
      noExternal: [/@syncfusion/]
    }
  };
});
