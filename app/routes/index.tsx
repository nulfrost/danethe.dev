import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = ({}) => ({
  title: "Dane's site / Home",
});

export function headers() {
  return {
    "Cache-Control": "public, max-age=60, s-maxage=120",
  };
}

export default function Index() {
  return (
    <div>
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
      <div className="border-b-4 [border-style:double] border-snes-purple my-4"></div>
      <h2 className="text-lg font-bold">
        Other places on the internet where you can find me:
      </h2>
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
            rel="me"
            href="https://hachyderm.io/@dane"
            target="_blank"
            aria-label="Dane's mastodon profile, opens in a new tab"
            className="text-blue-800 hover:underline"
          >
            Mastodon
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
      </ul>
    </div>
  );
}
