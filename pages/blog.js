import { getSortedPostsData } from "../lib/posts";
import Layout from "@/components/layout";
import Date from "@/components/date";
import Link from "next/link";

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <div className="flex items-center flex-1 px-1 py-5">
        <div className="grid grid-cols-1 gap-3">
          {allPostsData.map(({ id, date, title }) => (
            <Link href="/blog/[id]" as={`/blog/${id}`}>
              <a>
                <div key={id} className="px-5 py-2 bg-gray-200 rounded-lg">
                  <a>{title}</a>
                  <h2 className="text-lg font-bold">{title}</h2>
                  <p>{id}</p>
                  <Date dateString={date} />
                </div>
              </a>
            </Link>
          ))}
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
