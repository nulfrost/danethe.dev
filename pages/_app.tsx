import { MainLayout } from "../components/layout/MainLayout";
import { Navbar } from "../components/layout/Navbar";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
