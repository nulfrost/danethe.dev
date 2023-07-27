import { type V2_MetaFunction, useLoaderData } from "@remix-run/react";
import type { LoaderArgs, LinksFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { query, type SingleArticle } from "~/utils/datocms";
import Markdown from "react-markdown";
import duotoneSea from "~/styles/dracula.css";
import { CodeBlock } from "~/components/CodeBlock";

const SINGLE_ARTICLE_QUERY = `
query Article($slug: String) {
  article(filter: {slug:{ eq: $slug }}) {
    id
    title
    date
    content
    excerpt
    coverImage {
      url
    }
  }
}
`;

export const meta: V2_MetaFunction = () => [{ title: "Does this work?" }];

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: duotoneSea }];
};

export async function loader({ params }: LoaderArgs) {
  const article = await query<SingleArticle>({
    query: SINGLE_ARTICLE_QUERY,
    variables: { slug: params.slug },
  });
  return json(article);
}

export default function Slug() {
  const data = useLoaderData<typeof loader>();
  return (
    <>
      <h1 className="mt-4 mb-1 text-2xl font-bold text-snes-black">
        {data.article.title}
      </h1>
      <p className="mb-4 text-sm">{data.article.excerpt}</p>
      <Markdown
        children={data.article.content}
        className="pb-6 prose max-w-none prose-h2:mb-1 prose-a:text-blue-700 hover:prose-a:text-blue-600 prose-h2:mt-7 prose-p:text-gray-700 prose-li:marker:text-snes-black"
        components={{
          pre({ node, className, children, ...props }) {
            return <CodeBlock {...props}>{children}</CodeBlock>;
          },
        }}
      />
    </>
  );
}
