import { useLoaderData, useMatches } from "@remix-run/react";
import { json } from "@remix-run/server-runtime";
import { getRecentTracks } from "~/utils/spotify";
import { BookmarkList } from "~/components/bookmarks";
import { formatDistanceToNow } from "date-fns";
import type { MetaFunction } from "@remix-run/server-runtime";
import type { RecentSongsResponse } from "~/utils/spotify";

export const meta: MetaFunction = () => ({
  title: "Home / Dane",
});

export async function loader() {
  const songs: RecentSongsResponse = await getRecentTracks();
  return json({ songs });
}

export default function Index() {
  const { songs } = useLoaderData<typeof loader>();
  const { bookmarks } = useMatches().filter(
    (route) => route.pathname === "/"
  )[0].data;

  return (
    <>
      <Intro />
      <BookmarkList bookmarks={bookmarks} showViewMore>
        <h2 className="text-3xl font-bold" id="bookmarks">
          Bookmarks
        </h2>
        <p className="mb-6 text-lg text-gray-500 dark:text-gray-400">
          Interesting things I've found on the web
        </p>
      </BookmarkList>
      <Spotify songs={songs} />
    </>
  );
}

function Intro() {
  return (
    <section className="mb-16">
      <h1 className="mb-2 font-sans text-6xl font-bold">Hey, I'm Dane</h1>
      <p className="max-w-lg mb-4 text-xl dark:text-gray-400">
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

type SpotifyProps = {
  songs: RecentSongsResponse;
};

function Spotify({ songs }: SpotifyProps) {
  return (
    <section>
      <h2 className="text-3xl font-bold" id="spotify">
        Spotify
      </h2>
      <p className="mb-6 text-lg text-gray-500 dark:text-gray-400">
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
            className="flex flex-col p-3 border border-gray-200 rounded-md dark:border-purple-mountains"
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
