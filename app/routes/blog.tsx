import { Link } from "remix";
import blogs from "~/blogs.json";

export default function Blog() {
  // fetch blog posts from notion
  console.log(blogs);

  return (
    <>
      <h1 className="text-6xl font-bold font-lexend mb-4 text-highlight relative -top-20">
        Blog
      </h1>
      <div className="grid grid-cols-2 max-w-[1440px] gap-12 absolute pb-12">
        {blogs.map((blog, index) => (
          <article key={blog.title + index}>
            <h2 className="font-bold text-lg">
              <Link to="/">{blog.title}</Link>
            </h2>
            <p className="mb-4">{blog.description}</p>
            <footer className="flex items-baseline">
              <time dateTime="2022-02-28">{blog.date}</time>
              <Link to="/" className="ml-auto">
                read more &rarr;
              </Link>
            </footer>
          </article>
        ))}
      </div>
    </>
  );
}
