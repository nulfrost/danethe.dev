import type { LoaderFunction } from "remix";
import { useLoaderData } from "remix";
import { Heading } from "~/components";
import { load } from "~/datocms/datocms.server";
import { MetaFunction } from "remix";

export const meta: MetaFunction = ({ data, location }) =>
  // don't hard code the base URL
  ({
    title: data?.article?.title,
    description: data?.article?.excerpt,
    "og:title": data?.article?.title,
    "og:url": `https://danethe.dev${location.pathname}`,
    "og:type": "article",
    "article:publisher": "https://danethe.dev",
    "og:description": data.excerpt,
    "og:image:width": "1280",
    "og:image:height": "640",
    "og:image": `https://res.cloudinary.com/dda1jyofd/image/upload/f_auto/w_900,c_fit,l_text:Arial_64_bold:${data?.article?.title},co_rgb:DADAD2/v1646876136/danethe.dev/Dynamic_Image_jn440p.png`,
    "og:image:secure_url": `https://res.cloudinary.com/dda1jyofd/image/upload/f_auto/w_900,c_fit,l_text:Arial_64_bold:${data?.article?.title},co_rgb:DADAD2/v1646876136/danethe.dev/Dynamic_Image_jn440p.png`,
    "twitter:creator": "@hybridearth",
    "twitter:site": "@hybridearth",
    "twitter:title": data?.article?.title,
    "twitter:description": data?.article?.excerpt,
    "twitter:card": "summary_large_image",
    "twitter:image": `https://res.cloudinary.com/dda1jyofd/image/upload/f_auto/w_900,c_fit,l_text:Arial_64_bold:${data?.article?.title},co_rgb:DADAD2/v1646876136/danethe.dev/Dynamic_Image_jn440p.png`,
  });

const BLOG_QUERY = `
    query BLOG_QUERY($slug: String) {
        article(filter: {slug: {eq: $slug}}) {
        title
        createdAt
        excerpt
        content(markdown: true)
        }
    }
`;

export const loader: LoaderFunction = ({ context, params }) => {
  return load({
    query: BLOG_QUERY,
    variables: { slug: params.blog },
    token: context.DATOCMS_READONLY_TOKEN,
  });
};

export default function Blog() {
  const { article } = useLoaderData();

  return (
    <>
      <Heading level="1" classNames="text-highlight">
        {article.title}
      </Heading>
      <div
        dangerouslySetInnerHTML={{ __html: article.content }}
        className="text-lg prose prose-p:lg:text-2xl prose-p:text-accent max-w-none prose-headings:text-secondary-4 prose-a:text-highlight prose-ul:text-accent prose-strong:text-accent prose-code:text-white prose-p:lg:!leading-relaxed prose-p:!leading-9 prose-a:hover:underline"
      />
    </>
  );
}
