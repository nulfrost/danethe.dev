import { Text } from "../components/common/Text";

function HomePage() {
  return (
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
  );
}

export default HomePage;
