import { Text } from "../components/common/Text";
import { MainLayout } from "../components/layout/MainLayout";

function HomePage() {
  return (
    <MainLayout>
      <section className="flex items-center h-full">
        <Text as="h1" className="font-bold text-7xl text-kinda-black">
          Hey, I’m Dane. I am a frontend developer from Toronto.
        </Text>
      </section>
    </MainLayout>
  );
}

export default HomePage;
