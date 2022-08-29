import { NavLink } from "@remix-run/react";

export function Navbar() {
  return (
    <header className="p-6 mb-32">
      <nav>
        <ul className="flex justify-center gap-4">
          <li>
            <NavLink
              to="/"
              className="hover:underline underline-offset-8 decoration-2 decoration-orange-500 link-focus"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="hover:underline underline-offset-8 decoration-2 decoration-sky-500 link-focus"
            >
              Writing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="hover:underline underline-offset-8 decoration-2 decoration-indigo-500 link-focus"
            >
              Bookmarks
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="hover:underline underline-offset-8 decoration-2 decoration-green-500 link-focus"
            >
              Uses
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
