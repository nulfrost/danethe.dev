import type { LoaderFunction } from "remix";
import { useLoaderData } from "remix";
import { load } from "~/datocms/datocms";

const BLOG_QUERY = `
    query BLOG_QUERY($slug: String) {
        article(filter: {slug: {eq: $slug}}) {
        title
        createdAt
        content(markdown: true)
        }
    }
`;

export const loader: LoaderFunction = ({ context, request, params }) => {
  return load({
    query: BLOG_QUERY,
    variables: { slug: params.blog },
    token: context.DATOCMS_READONLY_TOKEN,
  });
};

export default function Blog() {
  const { article } = useLoaderData();

  return (
    <>
      <h1 className="text-6xl font-bold font-lexend text-highlight mb-4 mt-96">
        {article.title}
      </h1>
      <div
        dangerouslySetInnerHTML={{ __html: article.content }}
        className="prose text-lg prose-p:text-accent max-w-none prose-headings:text-secondary-4 prose-a:text-highlight prose-ul:text-accent prose-strong:text-accent prose-code:text-white"
      />
    </>
  );
}
