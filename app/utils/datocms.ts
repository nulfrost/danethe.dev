export type Articles = {
  allArticles: {
    id: string;
    title: string;
    _firstPublishedAt: string;
    slug: string;
  }[];
};

export type SingleArticle = {
  article: {
    id: string;
    title: string;
    date: string;
    content: any;
    excerpt: string;
    coverImage: {
      url: string;
    };
  };
};

export async function query<T>({
  query,
  variables,
}: {
  query: string;
  variables?: any;
}): Promise<T> {
  const GQL_ENDPOINT = "https://graphql.datocms.com";

  const headers = {
    authorization: `Bearer ${process.env.DATOCMS_READONLY_KEY}`,
    "X-Environment": process.env.DATOCMS_ENVIRONMENT,
  };

  const reponse = await fetch(GQL_ENDPOINT, {
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
    headers,
  });
  const posts = await reponse.json();

  if (posts?.data?.errors) {
    console.error(posts.data?.errors);
  }

  return posts?.data;
}
