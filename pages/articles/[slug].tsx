import { contentful } from "lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Syntax from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await contentful.getEntries();

  return {
    paths: articles.items.map((article) => ({
      params: { slug: (article.fields as any).slug },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const article = await contentful.getEntries({
    content_type: "blog",
    "fields.slug": params.slug,
  });

  return {
    props: {
      article: article.items[0],
    },
    revalidate: 1,
  };
};

export default function Article({ article }) {
  const router = useRouter();

  return (
    <article className="max-w-6xl px-5 pb-20 mx-auto lg:px-0 mt-36">
      {router.isFallback ? (
        <h1 className="text-5xl font-bold">
          Generating new post from CMS, please wait!
        </h1>
      ) : (
        <>
          <header>
            <Link href="/">
              <a className="block hover:underline">Home</a>
            </Link>
          </header>
          <section className="prose-sm prose max-w-none lg:prose-lg">
            <h1>{article.fields.title}</h1>
            {documentToReactComponents(article.fields.content, {
              renderNode: {
                [BLOCKS.EMBEDDED_ASSET]: (node) => (
                  <Image
                    src={`https:${node.data.target.fields.file.url}`}
                    width={node.data.target.fields.file.details.image.width}
                    height={node.data.target.fields.file.details.image.height}
                  />
                ),
                [BLOCKS.PARAGRAPH]: (node, children) => {
                  if (
                    node.content.length === 1 &&
                    (node.content[0] as any).marks.find(
                      (x) => x.type === "code"
                    )
                  ) {
                    return <div>{children}</div>;
                  }
                  return <p>{children}</p>;
                },
              },
              renderMark: {
                [MARKS.CODE]: (code) => (
                  <Syntax language="javascript" showLineNumbers style={docco}>
                    {code}
                  </Syntax>
                ),
              },
            })}
          </section>
        </>
      )}
    </article>
  );
}
