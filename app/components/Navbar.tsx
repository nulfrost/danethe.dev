import { Link, NavLink } from "@remix-run/react";
import React from "react";
import clsx from "clsx";

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
        <CustomLink path="/" label="Dane" />
        <ul className="flex gap-2 ml-auto">
          {[
            { path: "/blog", label: "Blog" },
            { path: "/interests", label: "Interesting Finds" },
            { path: "/uses", label: "Uses" },
          ].map(({ path, label }) => (
            <li key={JSON.stringify({ path, label })}>
              <CustomLink path={path} label={label} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

type NavLinkProps = {
  path: string;
  label: string;
} & React.ComponentPropsWithoutRef<"a">;

function CustomLink({ path, label, className, ...props }: NavLinkProps) {
  return (
    <NavLink
      to={path}
      className={clsx(
        className,
        "border-2 border-white [border-style:outset] bg-snes-purple px-2 py-1 font-bold uppercase text-white text-xs focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-dashed focus-visible:outline-snes-black active:[border-style:inset]"
      )}
      {...props}
    >
      {label}
    </NavLink>
  );
}
