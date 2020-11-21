import Layout from "@/components/layout";
import Link from "next/link";

export default function Custom404() {
  return (
    <Layout title="4 Oh 4">
      <div className="flex flex-col items-center justify-center h-screen opacity-70">
        <h1 className="mb-5 text-6xl font-bold">404</h1>
        <p>
          There doesn't seem to be anything here...click{" "}
          <Link href="/">
            <a className="font-bold underline opacity-100">here</a>
          </Link>{" "}
          to go back home.
        </p>
      </div>
    </Layout>
  );
}
