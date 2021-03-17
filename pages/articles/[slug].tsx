import Syntax from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import ReactMarkdown from "react-markdown";
import { GetStaticPaths, GetStaticProps } from "next";
import { Image } from "react-datocms";
import { useRouter } from "next/router";
import Link from "next/link";
import { request } from "lib/datocms";

const ARTICLE = `
query Article($slug: String) {
   article(filter: {slug: {eq: $slug}}) {
    excerpt
    slug
    title
    id
    date
    content(markdown: true)
    coverImage {
      responsiveImage(imgixParams: {fit: crop, ar: "16:9", w: 750, auto: format }) {
        srcSet
        webpSrcSet
        sizes
        src
        width
        height
        aspectRatio
        alt
        title
        base64
      }
    }
  }
}`;

const ALL_ARTICLES = `
query AllArticles {
  allArticles {
    slug
  }
}

`;

export const getStaticPaths: GetStaticPaths = async () => {
  const datoData = await request({
    query: ALL_ARTICLES,
    variables: { limit: 10 },
  });

  return {
    paths: datoData.allArticles.map((article) => ({
      params: { slug: article.slug },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const article = await request({
    query: ARTICLE,
    variables: { slug: params.slug },
  });

  return {
    props: {
      article: article.article,
    },
    revalidate: 1,
  };
};

export default function Article({ article }) {
  const router = useRouter();

  console.log(article);

  return (
    <article className="max-w-6xl px-5 pb-20 mx-auto lg:px-0 mt-36">
      {router.isFallback ? (
        <h1 className="text-5xl font-bold">
          Generating new post from CMS, please wait!
        </h1>
      ) : (
        <>
          <Link href="/">
            <a className="block mb-4 hover:underline">Home</a>
          </Link>
          <ReactMarkdown
            children={article.content}
            className="prose-sm prose max-w-none"
            allowDangerousHtml
          />
          {/* <section className="mx-auto prose-sm prose max-w-none lg:prose-lg">
            <Image data={article.coverImage.responsiveImage} />
          </section> */}
        </>
      )}
    </article>
  );
}
