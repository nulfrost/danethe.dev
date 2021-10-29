import Head from "next/head";

export function BlogLayout({ meta, children }) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div className="flex-1 mt-24 prose max-w-none">{children}</div>
    </>
  );
}
