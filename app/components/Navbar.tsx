import { NavLink } from "@remix-run/react";
import clsx from "clsx";
import React from "react";

export function Navbar() {
  return (
    <header className="px-3 mt-10 xl:px-0">
      <nav
        className="flex w-full max-w-5xl mx-auto bg-snes-light-purple"
        aria-label="Main site navigation"
      >
        <a
          href="#maincontent"
          className="absolute -translate-y-[300%] left-2/4 focus-visible:-translate-y-[170%] duration-150 bg-snes-black text-snes-light-gray px-2 focus-visible:outline-snes-purple focus-visible:outline-4 focus-within:outline-dotted font-bold"
        >
          Skip to main content
        </a>
        <HomeLink path="/" label="Dane" />
        <ul className="flex items-center gap-2 pr-4 ml-auto">
          {[
            { path: "/blog", label: "Blog" },
            { path: "/bookmarks", label: "Bookmarks" },
            { path: "/uses", label: "Uses" },
          ].map(({ path, label }) => (
            <li key={JSON.stringify({ path, label })}>
              <NavLink
                to={path}
                className="text-blue-800 underline hover:text-blue-600 link-focus"
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

type HomeLinkProps = {
  path: string;
  label: string;
} & React.ComponentPropsWithoutRef<"a">;

function HomeLink({ path, label, className, ...props }: HomeLinkProps) {
  return (
    <NavLink
      to={path}
      className={clsx(
        className,
        "border-2 border-white [border-style:outset] bg-snes-purple px-2 py-1 font-bold uppercase text-white text-xs active:[border-style:inset] link-focus"
      )}
      {...props}
    >
      {label}
    </NavLink>
  );
}
