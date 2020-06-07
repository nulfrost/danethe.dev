import Head from "next/head";
import Link from "next/link";

export default ({ children, title = "danethe.dev" }) => (
  <>
    <Head>
      <title>{title}</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <div className="bg-gray-100">
      <div
        className="flex flex-col max-w-6xl min-h-screen p-5 mx-auto"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <nav className="flex justify-around md:justify-between">
          <Link href="/">
            <a className="font-semibold text-green-500">danethe.dev</a>
          </Link>
          <div className="space-x-4 font-semibold">
            <Link href="/projects">
              <a className="pb-2 text-gray-500 transition duration-150 ease-in-out border-green-500 hover:text-gray-900 hover:border-b-4">
                Projects
              </a>
            </Link>
            <Link href="/about">
              <a className="pb-2 text-gray-500 transition duration-150 ease-in-out border-green-500 hover:text-gray-900 hover:border-b-4">
                About
              </a>
            </Link>
            <Link href="/blog">
              <a className="pb-2 text-gray-500 transition duration-150 ease-in-out border-green-500 hover:text-gray-900 hover:border-b-4">
                Blog
              </a>
            </Link>
          </div>
        </nav>
        {children}
        <footer className="flex flex-col justify-between text-sm sm:flex-row">
          <p>Designed and developed by Dane.</p>
          <p>
            Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 underline"
            >
              Next
            </a>
            . Hosted on{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 underline"
            >
              Vercel
            </a>
            . Illustrations by{" "}
            <a
              href="https://github.com/miukimiu/react-kawaii"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 underline"
            >
              miukimiu
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  </>
);
