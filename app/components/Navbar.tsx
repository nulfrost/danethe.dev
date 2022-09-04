import { NavLink } from "@remix-run/react";
import { Sun, Moon } from "phosphor-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [theme, setTheme] = useState(false);

  // temporary lol. change this. maybe use cookies
  useEffect(() => {
    setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  return (
    <header className="w-full max-w-5xl px-4 py-6 mx-auto mb-32 xl:px-0">
      <nav aria-label="Main site navigation" className="flex">
        <ul className="flex gap-4">
          <li>
            <NavLink
              to="/"
              className="hover:underline underline-offset-8 decoration-2 decoration-orange-500 link-focus"
            >
              Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/writings"
              className="hover:underline underline-offset-8 decoration-2 decoration-sky-500 link-focus"
            >
              Writings
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/bookmarks"
              className="hover:underline underline-offset-8 decoration-2 decoration-indigo-500 link-focus"
            >
              Bookmarks
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/uses"
              className="hover:underline underline-offset-8 decoration-2 decoration-green-500 link-focus"
            >
              Uses
            </NavLink>
          </li>
        </ul>
        <button
          className="ml-auto link-focus"
          onClick={() => {
            if (theme) {
              document.documentElement.classList.remove("dark");
              setTheme(false);
            } else {
              document.documentElement.classList.add("dark");
              setTheme(true);
            }
          }}
        >
          {theme === true ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </nav>
    </header>
  );
}
