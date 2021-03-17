import { Prism as Syntax } from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import ReactMarkdown from "react-markdown";
import { GetStaticPaths, GetStaticProps } from "next";
import a11yEmoji from "@fec/remark-a11y-emoji";
import { formatDate } from "lib/utils";
import { Image, renderMetaTags } from "react-datocms";
import { useRouter } from "next/router";
import Link from "next/link";
import { request } from "lib/datocms";
import Head from "next/head";

const ARTICLE = `
query Article($slug: String) {
   article(filter: {slug: {eq: $slug}}) {
    _seoMetaTags {
        attributes
        content
        tag
    }
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

const renderers = {
  code: ({ language, value }) => {
    return <Syntax style={monokai} language={language} showLineNumbers />;
  },
};

export default function Article({ article }) {
  const router = useRouter();

  console.log(article);

  return (
    <>
      <Head>{renderMetaTags(article._seoMetaTags)}</Head>
      <article className="max-w-6xl px-5 pb-20 mx-auto lg:px-0 mt-36">
        {router.isFallback ? (
          <h1 className="text-5xl font-bold">
            Generating new post from CMS, please wait!
          </h1>
        ) : (
          <>
            <header>
              <Link href="/">
                <a className="block mb-4 hover:underline">Home</a>
              </Link>
              <h1 className="mb-3 text-3xl font-bold lg:text-5xl">
                {article.title}
              </h1>
              <p className="text-xs font-bold uppercase">
                {formatDate(article.date)}
              </p>
            </header>
            <section>
              <ReactMarkdown
                children={article.content}
                className="prose-sm prose max-w-none lg:prose-lg"
                allowDangerousHtml
                plugins={[a11yEmoji]}
                renderers={renderers}
              />
            </section>
            {/* <section className="mx-auto prose-sm prose max-w-none lg:prose-lg">
            <Image data={article.coverImage.responsiveImage} />
          </section> */}
          </>
        )}
      </article>
    </>
  );
}
