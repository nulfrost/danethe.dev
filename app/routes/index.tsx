import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/server-runtime";
import { getRecentTracks } from "~/utils/spotify";
import { formatDistanceToNow } from "date-fns";
import type { MetaFunction } from "@remix-run/server-runtime";
import type { RecentSongsResponse } from "~/utils/spotify";

export const meta: MetaFunction = () => ({
  title: "Home / Dane",
});

export async function loader() {
  const songs: RecentSongsResponse = await getRecentTracks();

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
  return json({ bookmarks, songs });
}

export default function Index() {
  const { bookmarks, songs } = useLoaderData<typeof loader>();

  return (
    <>
      <Intro />
      <Bookmarks bookmarks={bookmarks} />
      <Spotify songs={songs} />
    </>
  );
}

function Intro() {
  return (
    <section className="mb-16">
      <h1 className="mb-2 text-6xl font-bold">Hey, I'm Dane</h1>
      <p className="max-w-lg mb-4 text-xl">
        I am a developer that enjoys building cool, accessible experiences on
        the web with the latest web technologies.
      </p>
      <h2 className="sr-only" id="personal">
        How to contact me
      </h2>
      <ul className="flex gap-4" role="list" aria-labelledby="personal">
        <li role="listitem">
          <a
            href="https://www.linkedin.com/in/dmiller94/"
            aria-label="Dane's linkedin profile"
            className="link-focus decoration-green-500 hover:underline underline-offset-8 decoration-2"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </li>
        <li role="listitem">
          <a
            href="https://github.com/nulfrost"
            aria-label="Dane's github profile"
            className="link-focus decoration-indigo-500 hover:underline underline-offset-8 decoration-2"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
        <li role="listitem">
          <a
            href="https://twitter.com/hybridearth"
            aria-label="Dane's twitter profile"
            className="link-focus decoration-sky-500 hover:underline underline-offset-8 decoration-2"
            rel="noreferrer"
          >
            Twitter
          </a>
        </li>
        <li role="listitem">
          <a
            href="mailto:khadane.miller@gmail.com?subject=Hello%20There!"
            aria-label="Send an email to Dane, opens an email client"
            className="link-focus decoration-orange-500 hover:underline underline-offset-8 decoration-2"
            rel="noreferrer"
          >
            Email
          </a>
        </li>
      </ul>
    </section>
  );
}

type BookmarksProps = {
  bookmarks: BookmarkProps[];
};

function Bookmarks({ bookmarks }: BookmarksProps) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold" id="bookmarks">
        Bookmarks
      </h2>
      <p className="mb-6 text-lg text-gray-500">
        Interesting things I've found on the web
      </p>
      <ul
        className="grid grid-cols-1 gap-4 mb-6 text-left md:grid-cols-3"
        role="list"
        aria-labelledby="bookmarks"
      >
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
  );
}

type BookmarkProps = {
  title: string;
  link: string;
};

function Bookmark({ title, link }: BookmarkProps) {
  return (
    <li className="p-3 border border-gray-200 rounded-md" role="listitem">
      <a
        href={link}
        aria-label={`${title}, opens in a new tab`}
        target="_blank"
        rel="noreferrer noopener"
        className="font-bold hover:underline link-focus"
      >
        {title}
      </a>
    </li>
  );
}

type SpotifyProps = {
  songs: RecentSongsResponse;
};

function Spotify({ songs }: SpotifyProps) {
  return (
    <section>
      <h2 className="text-3xl font-bold" id="spotify">
        Spotify
      </h2>
      <p className="mb-6 text-lg text-gray-500">
        Some music I'm currently jamming to
      </p>
      <ul
        className="grid grid-cols-1 gap-4 md:grid-cols-3"
        role="list"
        aria-labelledby="spotify"
      >
        {songs?.items?.map(({ played_at, track }) => (
          <li
            key={played_at}
            className="flex flex-col p-3 border border-gray-200 rounded-md"
            role="listitem"
          >
            <h2 className="mb-2 overflow-hidden font-bold whitespace-nowrap text-ellipsis">
              <a
                title={track.name}
                aria-label={`Listen to ${track.name} on spotify, opens in a new tab`}
                href={track.external_urls.spotify}
                target="_blank"
                className="hover:underline link-focus"
              >
                {track.name}
              </a>
            </h2>
            <p className="mb-2">
              {track.artists.map((artist) => (
                <span key={artist.id} className="artist-separator">
                  {artist.name}
                </span>
              ))}
            </p>
            <small className="mt-auto text-gray-400">
              Listened{" "}
              <time dateTime={played_at}>
                {formatDistanceToNow(new Date(played_at))}
              </time>{" "}
              ago
            </small>
          </li>
        ))}
      </ul>
    </section>
  );
}
