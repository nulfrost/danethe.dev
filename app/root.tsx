import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/server-runtime";
import styles from "~/styles/app.css";
import { Navbar } from "./components/Navbar";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};


export default function App() {
  return (
    <html lang="en" dir="ltr" className="font-sans">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-snes-light-gray">
        <Navbar />
        <main className="max-w-5xl px-3 mx-auto xl:px-0" id="maincontent">
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
