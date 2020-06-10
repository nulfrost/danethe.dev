import Layout from "@/components/layout";
import Date from "@/components/date";
import { getAllPostIds, getPostData } from "lib/posts";

export default function Post({ postData }) {
  return (
    <Layout title={`${postData.title} | Dane Miller`}>
      <article className="flex-1 px-1 py-5 mt-10 markdown-body">
        <div className="mb-10">
          <p className="text-4xl font-bold">{postData.title}</p>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
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