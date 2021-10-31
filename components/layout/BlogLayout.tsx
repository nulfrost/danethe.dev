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
          url: window.location.href,
          type: "article",
        }}
      />
      <div className="mt-24 prose max-w-none">{children}</div>
    </>
  );
}
