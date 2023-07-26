import { V2_MetaFunction, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { query, Articles } from "~/utils/datocms";

const ARTICLES_QUERY = `
{
  allArticles {
    id
    title
    _firstPublishedAt
    slug
  }
}
`;

export const meta: V2_MetaFunction = ({}) => [
  {
    title: "Dane's site / Blog",
  },
];

export async function loader() {
  const articles = await query<Articles>({ query: ARTICLES_QUERY });
  return json(articles);
}

export default function Blog() {
  const data = useLoaderData<typeof loader>();
  return (
    <>
      <h1 className="mt-4 mb-4 text-2xl font-bold text-snes-black">Blog</h1>
      <ul className="space-y-4">
        {data.allArticles
          .sort((articleA, articleB) => {
            return (
              new Date(articleB._firstPublishedAt).getTime() -
              new Date(articleA._firstPublishedAt).getTime()
            );
          })
          .map((article) => (
            <li key={article.id}>
              <article>
                <h2 className="mb-1 font-bold text-blue-700 hover:text-blue-500 hover:underline">
                  <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                </h2>
                <footer className="text-sm">
                  <time dateTime={article._firstPublishedAt}>
                    {new Intl.DateTimeFormat("en-us", {
                      dateStyle: "full",
                    }).format(new Date(article._firstPublishedAt))}
                  </time>
                </footer>
              </article>
            </li>
          ))}
      </ul>
    </>
  );
}
