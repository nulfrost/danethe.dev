import Head from "next/head";
import Header from "@/components/sections/Header";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dane Miller | Frontend Developer</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Dane Miller - Frontend Developer" />
        <meta property="og:url" content="https://danethe.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/public/images/dane2.png" />
      </Head>
      <div className="max-w-4xl px-5 mx-auto">
        <Header />
        <About />
        <Projects />
      </div>
    </>
  );
}
