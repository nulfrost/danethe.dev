import Link from "next/link";
import { GetStaticProps } from "next";
import { request } from "lib/datocms";
import Layout from "@/components/sections/Layout";
import { motion } from "framer-motion";

const HOMEPAGE_QUERY = `
query HomePage($limit: IntType) {
  allArticles(first: $limit) {
    id
    title
    slug
    excerpt
  }
}`;

export const getStaticProps: GetStaticProps = async () => {
  const articles = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 },
  });

  return {
    props: {
      articles,
    },
    revalidate: 60,
  };
};

export default function Blog({ articles }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 200 },
    show: { opacity: 1, x: 0 },
  };
  return (
    <Layout title="blog">
      <div className="mt-[88px] lg:mt-[184px] text-skin-base mb-10">
        <h2 className="mb-2 text-4xl font-bold">Blog</h2>
        <p className="text-skin-secondary">
          where i ramble about tech and other stuff
        </p>
      </div>
      <motion.div
        className="space-y-10 text-skin-base"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {articles.allArticles.map((article) => (
          <Link key={article.id} href={`/articles/${article.slug}`}>
            <motion.a
              className="block"
              style={{ cursor: "pointer" }}
              variants={item}
              transition={{ type: "just" }}
              whileHover={{ marginLeft: "24px" }}
            >
              <p className="text-2xl lg:text-[32px] font-bold">
                {" "}
                {article.title}
              </p>
              <p className="text-lg lg:text-2xl text-skin-secondary">
                {article.excerpt}
              </p>
            </motion.a>
          </Link>
        ))}
      </motion.div>
    </Layout>
  );
}
