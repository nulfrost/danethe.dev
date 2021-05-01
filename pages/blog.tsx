import Link from "next/link";
import { GetStaticProps } from "next";
import { request } from "lib/datocms";
import Layout from "@/components/sections/Layout";

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
  return (
    <Layout>
      <div className="mt-[88px] mt-[184px] text-skin-base mb-10">
        <h2 className="mb-2 text-4xl font-bold">Blog</h2>
        <p className="text-skin-secondary">
          where i ramble about tech and other stuff
        </p>
      </div>
      <div className="space-y-10 text-skin-base">
        {articles.allArticles.map((article) => (
          <Link key={article.id} href={`/articles/${article.slug}`}>
            <a className="block duration-150 hover:ml-10">
              <p className="text-[32px] font-bold"> {article.title}</p>
              <p className="text-2xl">{article.excerpt}</p>
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
