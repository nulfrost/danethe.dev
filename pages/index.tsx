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
      </Head>
      <div className="px-5 max-w-4xl mx-auto">
        <Header />
        <About />
        <Projects />
      </div>
    </>
  );
}
