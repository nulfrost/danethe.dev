import { Link, LoaderFunction, useLoaderData } from "remix";
import { PageSection, Heading } from "~/components";
import { MetaFunction } from "remix";
import { load } from "~/datocms/datocms.server";

type Blog = {
  title: string;
  date: string;
  excerpt: string;
  id: number;
  slug: string;
};

const BLOGS_QUERY = `
  query BlogsQuery {
    allArticles(orderBy: _createdAt_DESC) {
      title
      date
      excerpt
      id
      slug
    }
  }
`;

export const meta: MetaFunction = () => {
  return { title: "Dane | Blog" };
};

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
    <PageSection>
      <Heading level="1" classNames="text-highlight">
        Blog
      </Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-14">
        {allArticles.map((blog) => (
          <article key={blog.id} className="flex flex-col">
            <h2 className="text-lg font-bold hover:underline focus-visible:underline">
              <Link to={`/blog/${blog.slug}`} prefetch="intent">
                {blog.title}
              </Link>
            </h2>
            <p className="mb-4 opacity-50">{blog.excerpt}</p>
            <footer className="flex items-end flex-1">
              <div className="flex justify-between flex-1">
                <time dateTime={blog.date}>
                  {new Intl.DateTimeFormat("en-US", {
                    dateStyle: "medium",
                  }).format(
                    new Date(blog.date.split("-").join(",")) as unknown as Date
                  )}
                </time>
                <Link
                  to={`/blog/${blog.slug}`}
                  prefetch="intent"
                  className="hover:underline focus-visible:underline"
                >
                  read more &rarr;
                </Link>
              </div>
            </footer>
          </article>
        ))}
      </div>
    </PageSection>
  );
}
