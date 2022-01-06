import { useEffect } from "react";
import { NextSeo } from "next-seo";

export function BlogLayout({ meta, children }) {
  useEffect(() => {
    document.querySelector("h1").focus();
  }, []);

  return (
    <>
      <NextSeo
        title={`${meta.title} - Dane Miller`}
        description={meta.description}
        openGraph={{
          title: meta.title,
          description: meta.description,
          url: typeof window !== "undefined" && window.location.href,
          type: "article",
          article: {
            publishedTime: new Date(meta.data).toISOString(),
            tags: meta.tags
          },
          images: [
            {
              url: `https://og-image-six-ashen.vercel.app/**${meta.title}**.png?md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets`,
              alt: meta.title
            }
          ]
        }}
      />
      <div className="mt-24 prose max-w-none">{children}</div>
    </>
  );
}
