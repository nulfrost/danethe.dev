import { Text } from "../components/common/Text";
import { MainLayout } from "../components/layout/MainLayout";

const About = () => {
  return (
    <MainLayout>
      <div className="flex flex-col flex-1 mt-28">
        <Text as="h1" className="mb-8 text-4xl font-bold">
          A little bit aboot me
        </Text>
        <div className="space-y-8 text-grayish">
          <Text as="p" className="leading-loose">
            Programming was something I always enjoyed doing in my spare time so
            I figured I would try making a career out of it. I started off by
            learning python and making very basic tools for myself. The very
            first thing I completed was a python program that would download
            wallpapers. It was very clunky and the code wasn’t that great but it
            was something I made so I was proud of it. From there I ventured out
            and experimented in different areas of tech and web development was
            the thing I stuck with. I had some prior experience messing around
            with phpBB themes and I thought that experience would carry over, I
            was wrong.
          </Text>
          <Text as="p" className="leading-loose">
            Fast forward to now, I continue to teach myself web development by
            staying up to date on the latest technologies and building projects
            to apply my learning. I have experience building websites using
            React, TypeScript, Node and GraphQL. One thing I’m focused on now is
            learning more about accessibility so I can apply them to my projects
            and make my content more accessible.
          </Text>
          <Text as="p" className="leading-loose">
            Outside of web development I enjoy other things like skateboarding,
            playing video games, hanging out with friends, listening to music,
            taking pictures and going on long car rides.
          </Text>
          <Text as="small" className="inline-block mt-8">
            Oh and food. I LOVE food.
          </Text>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
