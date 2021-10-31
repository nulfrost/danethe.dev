import { Text } from "../components/common/Text";
import { NextSeo } from "next-seo";

function HomePage() {
  return (
    <>
      <NextSeo
        title="Home - Dane Miller"
        description="Hey, I'm Dane! A frontend developer from Toronto that focuses on building fast and accessible websites using the latest web technologies"
        openGraph={{
          title: "Home - Dane Miller",
          description:
            "Hey, I'm Dane! A frontend developer from Toronto that focuses on building fast and accessible websites using the latest web technologies",
          url: typeof window !== "undefined" && window.location.href,
          type: "website",
        }}
      />
      <div className="flex flex-col justify-center mt-40">
        <Text
          as="h1"
          className="mb-6 text-3xl font-bold lg:text-6xl text-kinda-black"
        >
          Hey, I’m Dane. I am a frontend developer from Toronto.
        </Text>
        <Text as="p" className="text-sm lg:text-lg text-grayish">
          I am a self-taught developer that enjoys building <b>fast</b> and{" "}
          <b>accessible</b> websites using the latest web technologies.
        </Text>
      </div>
    </>
  );
}

export default HomePage;
