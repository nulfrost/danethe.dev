import Head from "next/head";
import { useEffect } from "react";

export function BlogLayout({ meta, children }) {
  useEffect(() => {
    document.querySelector("h1").focus();
  }, []);

  return (
    <>
      <Head>
        <title>Dane Miller - {meta.title}</title>
      </Head>
      <div className="mt-24 prose max-w-none">{children}</div>
    </>
  );
}
