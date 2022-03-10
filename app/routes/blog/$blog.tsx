import type { LoaderFunction } from "remix";
import { useLoaderData } from "remix";
import { Heading } from "~/components";
import { load } from "~/datocms/datocms.server";

const BLOG_QUERY = `
    query BLOG_QUERY($slug: String) {
        article(filter: {slug: {eq: $slug}}) {
        title
        createdAt
        content(markdown: true)
        }
    }
`;

export const loader: LoaderFunction = ({ context, params }) => {
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
      <Heading level="1" classNames="text-highlight">
        {article.title}
      </Heading>
      <div
        dangerouslySetInnerHTML={{ __html: article.content }}
        className="text-lg prose prose-p:lg:text-2xl prose-p:text-accent max-w-none prose-headings:text-secondary-4 prose-a:text-highlight prose-ul:text-accent prose-strong:text-accent prose-code:text-white prose-p:leading-relaxed"
      />
    </>
  );
}
