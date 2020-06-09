import Layout from "@/components/layout";
import Date from "@/components/date";
import Link from "next/link";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ postData }) {
  return (
    <Layout title={postData.title}>
      <div className="flex flex-col justify-center flex-1 px-1 py-5 ">
        <p>{postData.title}</p>
        <p>{postData.id}</p>
        <p>{postData.date}</p>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <Date dateString={postData.date} />
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
