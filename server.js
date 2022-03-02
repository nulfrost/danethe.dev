import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";
import * as build from "@remix-run/dev/server-build";

const handleRequest = createPagesFunctionHandler({
  build,
  mode: process.env.NODE_ENV,
  getLoadContext: (context) => ({
    ...context.env,
    DATOCMS_READONLY_TOKEN: context.env.DATOCMS_READONLY_TOKEN,
    DATOCMS_ENVIRONMENT: context.env.DATOCMS_ENVIRONMENT,
  }),
});

export function onRequest(context) {
  return handleRequest(context);
}
