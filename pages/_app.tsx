import { MainLayout } from "../components/layout/MainLayout";
import { Navbar } from "../components/layout/Navbar";
import { AnimatePresence } from "framer-motion";
import "../styles/global.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter key={router.route}>
      <Navbar />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AnimatePresence>
  );
}

export default MyApp;
