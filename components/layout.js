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
      <main className="min-h-screen antialiased">
        <Navbar />
        <div className="max-w-6xl mx-auto">{children}</div>
      </main>
    </>
  );
}
