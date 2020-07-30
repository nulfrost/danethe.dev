import Layout from "@/components/layout";

export default function About() {
  return (
    <Layout title="About | Dane Miller">
      <div className="flex flex-col items-center justify-center flex-1 px-1 md:p-0">
        <div className="mb-10">
          <h1 className="pl-2 mb-4 text-2xl font-bold text-gray-900 border-l-4 border-green-500">
            About
          </h1>
          <div className="space-y-8 leading-relaxed text-gray-600 text-md md:text-lg">
            <p>
              Hi, I'm Dane! I'm a Frontend Developer located in{" "}
              <span className="font-semibold text-green-500">Toronto, ON.</span>
            </p>
            <p>
              My language of choice is{" "}
              <span className="font-semibold text-green-500">JavaScript</span>{" "}
              and I build all of my personal projects using frameworks/libraries
              based around it. Some of the technologies I am familiar with are
              React/Next.js, Express, GraphQL, Node, PostgreSQL, MongoDB, Rest
              API Design, 3rd party APIs (Discord, Slack, etc.), Cloud hosting
              (Digital Ocean, Heroku, AWS) and Github Actions/TravisCI. Just to
              name a few.
            </p>
            <p>
              Outside of programming some of my{" "}
              <span className="font-semibold text-green-500">hobbies</span>{" "}
              include skateboarding, video games, cooking, and music.
            </p>
            <p>
              If you would like to get in touch or view more of what I work on
              you can check out my{" "}
              <a
                href="https://github.com/Danex2"
                className="pb-1 font-semibold text-green-500 border-b-4 border-green-500 "
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
              , send me an{" "}
              <a
                href="mailto:khadane.miller@gmail.com"
                className="pb-1 font-semibold text-green-500 border-b-4 border-green-500"
              >
                email
              </a>{" "}
              or hit me up on{" "}
              <a
                className="pb-1 font-semibold text-green-500 border-b-4 border-green-500"
                href="https://twitter.com/hybridearth"
                target="_blank"
                rel="noopener noreferrer"
              >
                twitter
              </a>
              !
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
