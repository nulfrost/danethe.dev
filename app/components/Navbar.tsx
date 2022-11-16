import { Link, NavLink } from "@remix-run/react";
import React from "react";
import clsx from "clsx";

export function Navbar() {
  return (
    <header className="mt-10">
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
        <ul className="ml-auto">
          {[
            { path: "/blog", label: "Blog" },
            { path: "/uses", label: "Uses" },
            { path: "/interests", label: "Interesting Finds" },
          ].map(({ path, label }) => (
            <CustomLink
              path={path}
              label={label}
              key={JSON.stringify({ path, label })}
            />
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
        "border-2 border-white [border-style:outset] bg-snes-purple px-2 py-1 font-bold uppercase text-white text-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dashed focus-visible:outline-lime-600"
      )}
      {...props}
    >
      {label}
    </NavLink>
  );
}
