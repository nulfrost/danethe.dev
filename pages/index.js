import Layout from "@/components/layout";
import { Browser } from "react-kawaii";
import { useHover } from "../hooks/useHover";
import { useWindowSize } from "../hooks/useWindowSize";

export default function Home() {
  const [hoverRef, isHovered] = useHover();
  const size = useWindowSize();
  console.log(size);
  return (
    <Layout title="Home">
      <header className="flex flex-col items-center justify-center flex-1 p-5 md:flex-row md:justify-between md:p-0">
        <div className="w-full mb-10 text-center md:w-1/2 lg:text-left">
          <p className="mb-3 text-2xl font-bold text-gray-900 md:text-4xl">
            I'm Dane, <span className="text-green-500">Frontend Developer</span>{" "}
            and general tinkerer of things.
          </p>
          <p className="text-lg text-gray-600">
            I enjoy making fast and reponsive web applications using the latest
            web technologies.
          </p>
        </div>
        <div ref={hoverRef}>
          <Browser
            size={size.width < 1000 ? 200 : 300}
            mood={isHovered ? "blissful" : "happy"}
            color="#48BB78"
          />
        </div>
      </header>
    </Layout>
  );
}
