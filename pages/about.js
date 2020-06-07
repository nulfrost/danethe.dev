import { SpeechBubble } from "react-kawaii";
import Layout from "@/components/layout";
import { useWindowSize } from "../hooks/useWindowSize";

export default function About() {
  const size = useWindowSize();
  return (
    <Layout title="About">
      <div className="flex flex-col items-center justify-center flex-1 px-3 py-5 md:flex-row md:justify-between md:p-0">
        <div className="mb-10 space-y-2 leading-relaxed text-justify text-gray-600 md:w-1/2">
          <h1 className="pl-2 mb-4 text-2xl font-bold text-gray-900 border-l-4 border-green-500">
            About
          </h1>
          <p>
            Hi, I'm Dane! I'm a Frontend Developer located in{" "}
            <span className="font-semibold text-green-500">Toronto, ON.</span>
          </p>
          <p>
            My language of choice is{" "}
            <span className="font-semibold text-green-500">JavaScript</span> and
            I build all of my personal projects using frameworks/libraries based
            around it. Some of the technologies I am familiar with are
            React/Next.js, Express, Node, PostgreSQL, MongoDB, Rest API Desgin,
            3rd party APIs (Discord, Slack, etc.), Cloud hosting (Digital Ocean,
            Heroku, AWS) and Github Actions/TravisCI. Just to name a few.
          </p>
          <p>
            Outside of programming some of my{" "}
            <span className="font-semibold text-green-500">hobbies</span> are
            skateboarding, video games, cooking, and music.
          </p>
        </div>
        <SpeechBubble
          size={size.width < 1000 ? 200 : 300}
          mood="excited"
          color="#48BB78"
        />
      </div>
    </Layout>
  );
}
