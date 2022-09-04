import { MetaFunction } from "@remix-run/server-runtime";
import { useMatches } from "@remix-run/react";
import { BookmarkList } from "~/components";

export const meta: MetaFunction = () => ({
  title: "Home / Dane",
});

export default function Bookmarks() {
  const { bookmarks } = useMatches().filter(
    (route) => route.pathname === "/"
  )[0].data;

  return (
    <BookmarkList bookmarks={bookmarks} showViewMore={false}>
      <h1 className="mb-2 text-6xl font-bold">Bookmarks</h1>
      <p className="mb-16 text-gray-400">
        Interesting things I've found on the web
      </p>
    </BookmarkList>
  );
}
