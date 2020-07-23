import { getSortedPostsData } from "../lib/posts";
import Layout from "@/components/layout";
import Date from "@/components/date";
import Link from "next/link";

export default function Blog({ allPostsData }) {
  return (
    <Layout title="Blog | Dane Miller">
      <div className="flex flex-1 px-1 py-5">
        <div className="mt-10">
          <div className="grid grid-cols-1 grid-rows-1 gap-3 sm:grid-cols-2">
            {allPostsData.map(({ id, date, title, description }) => (
              <Link href="/blog/[id]" as={`/blog/${id}`} key={id}>
                <a>
                  <div
                    key={id}
                    className="flex flex-col h-full p-5 bg-gray-200 border-l-4 border-green-500"
                  >
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <p className="text-sm">{description}</p>
                    <Date dateString={date} />
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
