import { Text } from "../components/common/Text";
import { NextSeo } from "next-seo";

const About = () => {
  return (
    <>
      <NextSeo
        title="About - Dane Miller"
        description="A short bio about me and how I got into web development"
        openGraph={{
          title: "About - Dane Miller",
          description:
            "A short bio about me and how I got into web development",
          url: typeof window !== "undefined" && window.location.href,
          type: "website",
        }}
      />
      <div className="flex flex-col flex-1 mt-24">
        <Text as="h1" className="mb-8 text-3xl font-bold lg:text-4xl">
          A little bit about me
        </Text>
        <div className="space-y-6 text-sm lg:text-lg text-grayish">
          <Text as="p" className="leading-loose">
            Programming was something I always enjoyed doing in my spare time so
            I figured I would try making a career out of it. I started off by
            learning python and making very basic tools for myself. The very
            first thing I completed was a python program that would download
            wallpapers. It was very clunky and the code wasn&apos;t that great
            but it was something I made so I was proud of it. From there I
            ventured out and experimented in different areas of tech and web
            development was the thing I stuck with. I had some prior experience
            messing around with phpBB forum themes and I thought what the heck,
            let&apos;s try this out!
          </Text>
          <Text as="p" className="leading-loose">
            Fast forward to now, I still (try to) continue to stay up to date on
            the latest web technologies and trends by watching youtube videos,
            subscribing to premium services like Frontend Masters, and engaging
            in developer communities on twitter and slack. I have experience
            building websites using React, JavaScript / TypeScript, Node and
            GraphQL but I do dabble in other frontend libraries / frameworks and
            programming languages. One thing I&apos;m focused on right now is
            learning more about accessibility and making sure that any projects
            I build are fully accessible for anyone that wants to use them.
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
    </>
  );
};

export default About;
