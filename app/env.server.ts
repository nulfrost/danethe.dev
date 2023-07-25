import { TypeOf, z } from "zod";

declare global {
  namespace NodeJS {
    interface ProcessEnv extends TypeOf<typeof zodEnv> {}
  }
}

const zodEnv = z.object({
  NOTION_INTEGRATION_TOKEN: z.string(),
  NOTION_DATABASE_ID: z.string(),
  DATOCMS_READONLY_KEY: z.string(),
  DATOCMS_ENVIRONMENT: z.string(),
});

try {
  zodEnv.parse(process.env);
} catch (err) {
  if (err instanceof z.ZodError) {
    const { fieldErrors } = err.flatten();
    const errorMessage = Object.entries(fieldErrors)
      .map(([field, errors]) =>
        errors ? `${field}: ${errors.join(", ")}` : field
      )
      .join("\n  ");
    throw new Error(`Missing environment variables:\n  ${errorMessage}`);
  }
}
