import { json, MetaFunction } from "@remix-run/server-runtime";
import { useLoaderData } from "@remix-run/react";
import { BookmarkList } from "~/components";

export const meta: MetaFunction = () => ({
  title: "Home / Dane",
});

export async function loader() {
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

export default function Bookmarks() {
  const { bookmarks } = useLoaderData<typeof loader>();

  return (
    <BookmarkList bookmarks={bookmarks} showViewMore={false}>
      <h1 className="mb-2 text-6xl font-bold">Bookmarks</h1>
      <p className="mb-16 text-gray-400">
        Interesting things I've found on the web
      </p>
    </BookmarkList>
  );
}
