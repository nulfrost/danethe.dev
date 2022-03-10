import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  Link,
} from "remix";
import type { MetaFunction } from "remix";
import { useState, useEffect } from "react";
import { SideNav, RouteAnnouncer } from "~/components";
import styles from "~/styles/app.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function App() {
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    let route = document.title;
    setAnnouncement(route);
  }, [announcement]);

  return (
    <html lang="en" className="flex flex-col h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col flex-1 px-5 bg-primary md:px-16">
        <SideNav />
        <main className="flex flex-col flex-1 max-w-6xl text-accent pb-11">
          <Outlet />
        </main>
        <RouteAnnouncer location={announcement} />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  let error;

  switch (caught.status) {
    case 404:
      error = (
        <div className="flex flex-col">
          <h1 className="order-2 mb-6 text-6xl font-bold">Page not found</h1>
          <p className="order-1 text-sm font-semibold tracking-wider uppercase">
            404 error
          </p>
          <p className="order-3">
            Looks like this page doesn't exist,{" "}
            <Link to="/" className="font-bold underline text-highlight">
              click here to go back home.
            </Link>
          </p>
        </div>
      );
      break;
    case 500:
      error = (
        <div className="flex flex-col">
          <h1 className="order-2 mb-6 text-6xl font-bold">Server error</h1>
          <p className="order-1 text-sm font-semibold tracking-wider uppercase">
            500 error
          </p>
          <p className="order-3">
            Seems like the server had an issue, try refreshing the page or try
            again later
          </p>
        </div>
      );
      break;
    default:
      throw new Error(`${caught.status} not handled`);
  }

  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex items-center justify-between h-full px-16 bg-primary">
        <SideNav />
        <main className="text-accent">{error}</main>
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <>
      <h1>Catastrophic error!</h1>
    </>
  );
}
