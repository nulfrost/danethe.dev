import { getSortedPostsData } from "../lib/posts";
import Layout from "@/components/layout";
import Date from "@/components/date";
import Link from "next/link";

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <div className="flex flex-1 px-1 py-5">
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {allPostsData.map(({ id, date, title }) => (
              <Link href="/blog/[id]" as={`/blog/${id}`} key={id}>
                <a>
                  <div key={id} className="px-5 py-2 bg-gray-200 border-l-4 border-green-500">
                    <h2 className="font-bold ">{title}</h2>
                    <p>{id}</p>
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