import { MainLayout } from "../components/layout/MainLayout";
import { Navbar } from "../components/layout/Navbar";
import { AnimatePresence } from "framer-motion";
import "../styles/global.css";
import { Footer } from "../components/layout/Footer";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter key={router.route}>
      <Navbar />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
      <Footer />
    </AnimatePresence>
  );
}

export default MyApp;
