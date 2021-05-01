import Link from "next/link";
import { GetStaticProps } from "next";
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
    <section aria-label="Blog" className="pb-20">
      <h2 className="mb-2 text-2xl font-bold">Blog</h2>
      <p className="mb-10 text-gray-400">
        where i ramble about tech and other stuff
      </p>
      <div className="space-y-7">
        {articles.allArticles.map((article) => (
          <Link key={article.id} href={`/articles/${article.slug}`}>
            <a className="block">
              <p className="text-2xl font-bold"> {article.title}</p>
              <p className="text-gray-500">{article.excerpt}</p>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
}
