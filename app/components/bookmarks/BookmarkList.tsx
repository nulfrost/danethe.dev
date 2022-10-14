import type { BookmarksProps } from "./types";
import { BookmarkItem } from "./BookmarkItem";
import { Link } from "@remix-run/react";

export function BookmarkList({
  bookmarks,
  showViewMore,
  children,
}: BookmarksProps) {
  return (
    <section className="mb-16">
      {children}
      <ul
        className="grid grid-cols-1 gap-4 mb-6 text-left md:grid-cols-3"
        role="list"
        aria-labelledby="bookmarks"
      >
        {bookmarks.map(({ link, title }) => (
          <BookmarkItem
            title={title}
            link={link}
            key={JSON.stringify({ link, title })}
          />
        ))}
      </ul>
      {showViewMore ? (
        <Link
          to="/bookmarks"
          className="inline-block p-3 text-sm font-bold uppercase duration-150 border border-gray-200 rounded-md hover:bg-gray-50 link-focus dark:hover:bg-gray-50/10 dark:border-purple-mountains"
        >
          View more bookmarks &rarr;
        </Link>
      ) : null}
    </section>
  );
}
