import Head from "next/head";
import { GetStaticProps } from "next";
import { request } from "lib/datocms";
import { renderMetaTags } from "react-datocms";
import Layout from "@/components/sections/Layout";
import { motion } from "framer-motion";

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
      <Layout title="home">
        <div className="mt-[88px] lg:mt-[184px] text-skin-base">
          <motion.h1
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: -100 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
            className="mb-10 text-5xl font-bold md:text-8xl"
          >
            Hey, I'm Dane
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-2xl text-skin-secondary"
            animate="visible"
            initial="hidden"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
            transition={{ duration: 1 }}
          >
            I’m a frontend{" "}
            <span className="inline-block transform rotate-45">+</span> cloud
            developer from Toronto. I specialize in making fast and responsive
            websites using the latest web and cloud technologies.
          </motion.p>
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
