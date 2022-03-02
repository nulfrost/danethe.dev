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

export const meta: MetaFunction = () => {
  return { title: "Dane Miller - Home" };
};

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
      <body className="bg-primary px-16 flex-1 flex flex-col">
        <SideNav />
        <main className="text-accent flex flex-col flex-1 pb-11 max-w-6xl">
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
          <h1 className="font-bold text-6xl mb-6 order-2">Page not found</h1>
          <p className="text-sm uppercase font-semibold order-1 tracking-wider">
            404 error
          </p>
          <p className="order-3">
            Looks like this page doesn't exist,{" "}
            <Link to="/" className="text-highlight underline font-bold">
              click here to go back home.
            </Link>
          </p>
        </div>
      );
      break;
    case 500:
      error = (
        <div className="flex flex-col">
          <h1 className="font-bold text-6xl mb-6 order-2">Server error</h1>
          <p className="text-sm uppercase font-semibold order-1 tracking-wider">
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
      <body className="bg-primary h-full flex items-center justify-between px-16">
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
