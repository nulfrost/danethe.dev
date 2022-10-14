import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";
import { Footer, Navbar } from "~/components";

import styles from "~/styles/app.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export function loader() {
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
  return json({ bookmarks });
}

export default function App() {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col dark:bg-black-ish dark:text-purple-mountains">
        <Navbar />
        <main className="w-full max-w-5xl px-4 mx-auto xl:px-0">
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: any) {
  console.error(error);

  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <h1>oopsies</h1>
        <Scripts />
      </body>
    </html>
  );
}
