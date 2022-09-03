import { ReactNode } from "react";

export type BookmarksProps = {
  bookmarks: BookmarkItemProps[];
  showViewMore: boolean;
  children: ReactNode[];
};

export type BookmarkItemProps = {
  title: string;
  link: string;
};
