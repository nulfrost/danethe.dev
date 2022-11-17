import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = ({}) => ({
  title: "Dane's site / Home",
});

export default function Index() {
  return (
    <div className="pb-4 border-b-4 [border-style:double] border-snes-purple">
      <h1 className="mt-4 text-2xl font-bold text-snes-black">
        Howdy, I'm Dane
      </h1>
      <p>
        Currently working at{" "}
        <abbr title="Bank of Montreal" className="font-bold text-snes-purple">
          BMO
        </abbr>{" "}
        as a frontend developer on the platform team.
      </p>
      <div className="my-3"></div>
      <p>
        I'm a self-taught developer from Toronto that enjoys building cool
        experiences on the web with the latest web technologies. On my website
        you'll find things that I'm working on, my interests and maybe a blog
        post or two when I find the time to write.
      </p>
      <div className="my-3"></div>
      <p>
        In my spare time I enjoy playing video games with my friends, finding
        new places in the city to eat at, listening to music, skateboarding,
        biking, building insane website ideas and most importantly napping.
      </p>
      {/* <p>Here are some other places you can find me on the web:</p>
      <ul className="pl-4 list-disc">
        <li>
          <a
            href="https://www.linkedin.com/in/dmiller94/"
            target="_blank"
            aria-label="Dane's linkedin profile, opens in a new tab"
            className="text-blue-800 hover:underline"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/hybridearth"
            target="_blank"
            aria-label="Dane's twitter profile, opens in a new tab"
            className="text-blue-800 hover:underline"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://github.com/nulfrost"
            target="_blank"
            aria-label="Dane's github profile, opens in a new tab"
            className="text-blue-800 hover:underline"
          >
            Github
          </a>
        </li>
      </ul> */}
    </div>
  );
}
