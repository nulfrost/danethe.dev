import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";

export function loader({}: LoaderArgs) {
  const bookmarks = [
    {
      link: "https://testingaccessibility.com/introducing-keyboard-testing-library-by-grunet",
      title:
        " Bringing Together Keyboard-only and Click-based UI Tests with keyboard-testing-library",
    },
    {
      link: "https://web.dev/one-line-layouts/#02.-the-deconstructed-pancake:-flex:-lessgrowgreater-lessshrinkgreater-lessbasewidthgreater",
      title: "Ten modern layouts in one line of CSS",
    },
    {
      link: "https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/",
      title: "A (Mostly) Complete Guide to React Rendering Behavior",
    },
  ];
  // ideally return the most recent things I've bookmarked
  return json({ bookmarks });
}

export default function Index() {
  const { bookmarks } = useLoaderData<typeof loader>();

  return (
    <>
      <section className="mb-16 text-center">
        <h1 className="mb-2 text-6xl font-bold">Hi, I'm Dane</h1>
        <p className="max-w-lg mx-auto mb-4 text-xl">
          I am a developer that enjoys building cool, accessible experiences on
          the web with the latest web technologies.
        </p>
        <ul className="flex justify-center gap-4">
          <li>
            <a
              href="https://www.linkedin.com/in/dmiller94/"
              aria-label="Dane's linkedin profile"
              className="link-focus"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://github.com/nulfrost"
              aria-label="Dane's github profile"
              className="link-focus"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/hybridearth"
              aria-label="Dane's twitter profile"
              className="link-focus"
            >
              Twitter
            </a>
          </li>
          <li>
            <a href="#" className="link-focus">
              Email
            </a>
          </li>
        </ul>
      </section>
      <section className="text-center">
        <h2 className="text-3xl font-bold">Bookmarks</h2>
        <p className="mb-6 text-lg">Interesting things I've found on the web</p>
        <ul className="grid grid-cols-3 gap-4 mb-6 text-left">
          {bookmarks.map(({ link, title }) => (
            <Bookmark
              title={title}
              link={link}
              key={JSON.stringify({ link, title })}
            />
          ))}
        </ul>
        <Link
          to="/bookmarks"
          className="inline-block p-3 text-sm font-bold uppercase duration-150 border border-gray-200 rounded-md hover:bg-gray-50 link-focus"
        >
          View more bookmarks &rarr;
        </Link>
      </section>
    </>
  );
}

type BookmarkProps = {
  title: string;
  link: string;
};

function Bookmark({ title, link }: BookmarkProps) {
  return (
    <li className="p-3 border border-gray-200 rounded-md">
      <a
        href={link}
        aria-label={`${title}, opens in a new tab`}
        className="font-bold hover:underline link-focus"
      >
        {title}
      </a>
    </li>
  );
}
