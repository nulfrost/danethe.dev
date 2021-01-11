import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout({ children, title = "danethe.dev" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Dane's personal website" />
      </Head>
      <Navbar />
      <main className="flex flex-col justify-center max-w-6xl min-h-screen mx-auto">
        {children}
      </main>
    </>
  );
}
