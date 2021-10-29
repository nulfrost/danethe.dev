import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Head from "next/head";

type Props = {
  children: React.ReactNode;
};

export const MainLayout: React.FunctionComponent<Props> = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>
          Dane Miller -{" "}
          {router.pathname === "/" ? "Home" : router.pathname.replace("/", "")}
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <motion.main
        className="flex flex-1 pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <section className="flex flex-1">{children}</section>
      </motion.main>
    </>
  );
};