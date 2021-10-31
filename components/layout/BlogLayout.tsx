import Head from "next/head";

export function BlogLayout({ meta, children }) {
  return (
    <>
      <Head>
        <title>Dane Miller - {meta.title}</title>
      </Head>
      <div className="mt-24 prose max-w-none">{children}</div>
    </>
  );
}
