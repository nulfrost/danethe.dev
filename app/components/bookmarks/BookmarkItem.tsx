import type { BookmarkItemProps } from "./types";

export function BookmarkItem({ title, link }: BookmarkItemProps) {
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
