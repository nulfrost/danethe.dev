import Head from "next/head";
import { GetStaticProps } from "next";
import { request } from "lib/datocms";
import { renderMetaTags } from "react-datocms";
import Layout from "@/components/sections/Layout";

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

export default function Home({ blogSeo }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:url" content="https://danethe.dev" />
        {renderMetaTags(blogSeo.blog._seoMetaTags)}
      </Head>
      <Layout>
        <div className="mt-[184px] text-skin-base">
          <h1 className="mb-10 text-5xl font-bold md:text-8xl">
            'Sup, I'm Dane
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-skin-secondary">
            I’m a frontend + cloud developer from Toronto. I specialize in
            making fast and responsive websites using the latest web and cloud
            technologies.
          </p>
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const blogSeo = await request({
    query: BLOG_SEO,
    variables: {},
  });

  return {
    props: {
      blogSeo,
    },
  };
};
