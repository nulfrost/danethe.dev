import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";
import * as build from "@remix-run/dev/server-build";

const handleRequest = createPagesFunctionHandler({
  build,
  mode: process.env.NODE_ENV,
  getLoadContext: (context) => ({
    ...context.env,
    SPOTIFY_ACCESS_TOKEN: context.env.SPOTIFY_ACCESS_TOKEN,
  }),
});

export function onRequest(context) {
  return handleRequest(context);
}
