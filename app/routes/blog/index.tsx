import { Link, LoaderFunction, useLoaderData } from "remix";
import { load } from "~/datocms/datocms";

type Blog = {
  title: string;
  createdAt: string;
  excerpt: string;
  id: number;
  slug: string;
};

const BLOGS_QUERY = `
  query BlogsQuery {
    allArticles(orderBy: _createdAt_ASC) {
      title
      createdAt
      excerpt
      id
      slug
    }
  }
`;

export const loader: LoaderFunction = ({ context }) => {
  return load({
    query: BLOGS_QUERY,
    variables: { limit: 10 },
    token: context.DATOCMS_READONLY_TOKEN,
  });
};

export default function Blog() {
  const { allArticles } = useLoaderData<{ allArticles: Blog[] }>();

  return (
    <>
      <h1 className="text-6xl font-bold font-lexend mb-4 text-highlight mt-96">
        Blog
      </h1>
      <div className="grid grid-cols-2">
        {allArticles.map((blog) => (
          <article key={blog.id}>
            <h2 className="font-bold text-lg">
              <Link to={`/blog/${blog.slug}`} prefetch="intent">
                {blog.title}
              </Link>
            </h2>
            <section>
              <p className="mb-4">{blog.excerpt}</p>
            </section>
            <footer className="flex flex-col">
              <time dateTime={blog.createdAt}>
                {new Intl.DateTimeFormat("en-US", {
                  dateStyle: "medium",
                }).format(new Date(blog.createdAt) as unknown as Date)}
              </time>
              <Link to={`/blog/${blog.slug}`} prefetch="intent">
                read more &rarr;
              </Link>
            </footer>
          </article>
        ))}
      </div>
    </>
  );
}
