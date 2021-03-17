import Head from "next/head";
import { GetStaticProps } from "next";
import Header from "@/components/sections/Header";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Blog from "@/components/sections/Blog";
import { request } from "lib/datocms";
import { renderMetaTags } from "react-datocms";

const HOMEPAGE_QUERY = `
query HomePage($limit: IntType) {
  allArticles(first: $limit) {
    id
    title
    slug
    excerpt
  }
}`;

const BLOG_SEO = `
query BlogSeo {
  blog {
    _seoMetaTags {
      attributes
      content
      tag
    }
  }
}
`;

export default function Home({ articles, blogSeo }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:url" content="https://danethe.dev" />
        {renderMetaTags(blogSeo.blog._seoMetaTags)}
      </Head>
      <div className="max-w-4xl mx-auto lg:px-0">
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

  const blogSeo = await request({
    query: BLOG_SEO,
    variables: {},
  });

  return {
    props: {
      articles,
      blogSeo,
    },
    revalidate: 1,
  };
};
