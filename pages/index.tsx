import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dane Miller | Fullstack Developer </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Box as="main">
        <Hero />
        <About />
      </Box>
    </>
  );
}
