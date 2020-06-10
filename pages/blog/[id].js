import Layout from "@/components/layout";
import Date from "@/components/date";
import Link from "next/link";
import { getAllPostIds, getPostData } from "lib/posts";

export default function Post({ postData }) {
  return (
    <Layout title={postData.title}>
      <div className="flex-1 px-1 py-5 mt-10 markdown">
        <p className="text-3xl font-bold">{postData.title}</p>
        <p>{postData.id}</p>
        <Date dateString={postData.date} />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <Link href="/blog">
          <a>&larr; Back to posts</a>
        </Link>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}