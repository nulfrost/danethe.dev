export async function load({
  query,
  variables,
  preview,
  token,
  environment,
}: {
  query: string;
  variables: unknown;
  preview?: unknown;
  token: string;
  environment?: unknown;
}) {
  let endpoint = "https://graphql.datocms.com";
  if (environment) {
    endpoint += `/environments/${environment}`;
  }
  if (preview) {
    endpoint += `/preview`;
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query, variables }),
  });

  const body = await response.json();

  // @ts-ignore
  if (body.errors) {
    // @ts-ignore
    console.error("Ouch! The query has some errors!", body.errors);
    // @ts-ignore
    throw body.errors;
  }
  // @ts-ignore
  return body.data;
}
