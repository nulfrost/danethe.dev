import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import styles from "~/styles/app.css";
import { Navbar } from "./components/Navbar";
import asap from "@fontsource/asap/index.css";

export const links: LinksFunction = () => {
  return [
    { rel: "preload", href: styles, as: "style" },
    { rel: "preload", href: asap, as: "style" },
    { rel: "stylesheet", href: asap },
    { rel: "stylesheet", href: styles },
  ];
};

export default function App() {
  return (
    <html lang="en" dir="ltr" className="font-sans">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {/* <meta
          name="description"
          content="Dane is a self-taught developer from Toronto that enjoys building cool and accessible experiences on the web with the latest web technologies."
        />
        <meta property="og:title" content="Dane's personal website" />
        <meta
          property="og:description"
          content="Dane is a self-taught developer from Toronto that enjoys building cool and accessible experiences on the web with the latest web technologies."
        /> */}
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
