import Link from "next/link";
import { formatDate } from "lib/utils";

export default function Blog({ articles }) {
  return (
    <section aria-label="Blog" className="pb-20">
      <h2 className="mb-2 text-2xl font-bold">Blog</h2>
      <p className="mb-10 text-gray-400">
        where i ramble about tech and other stuff
      </p>
      <div className="space-y-4">
        {articles.map((article) => (
          <Link key={article.sys.id} href={`/articles/${article.fields.slug}`}>
            <a className="block">
              <p className="text-2xl font-bold"> {article.fields.title}</p>
              <p className="text-gray-500">{article.fields.description}</p>
              <small className="text-xs font-semibold">
                {formatDate(article.fields.date)}
              </small>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
}
