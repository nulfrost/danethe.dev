import Head from "next/head";
import { GetStaticProps } from "next";
import Header from "@/components/sections/Header";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Blog from "@/components/sections/Blog";
import { request } from "lib/datocms";

const HOMEPAGE_QUERY = `
query HomePage($limit: IntType) {
  allArticles(first: $limit) {
    id
    title
    slug
    excerpt
  }
}`;

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Dane Miller | Frontend Developer</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Dane Miller - Frontend Developer" />
        <meta property="og:url" content="https://danethe.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/public/images/dane2.png" />
      </Head>
      <div className="max-w-4xl px-5 mx-auto">
        <Header />
        <About />
        <Projects />
        <Blog articles={articles} />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const articles = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 },
  });

  return {
    props: {
      articles,
    },
    revalidate: 1,
  };
};
