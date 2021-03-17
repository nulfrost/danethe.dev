import { GraphQLClient } from "graphql-request";

export function request({ query, variables }) {
  const endpoint = `https://graphql.datocms.com/`;

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN}`,
    },
  });
  return client.request(query, variables);
}
