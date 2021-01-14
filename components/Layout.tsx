import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export default function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Dane Miller | {title} </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Box as="main">{children}</Box>
    </>
  );
}
