import { NavLink } from "@remix-run/react";

export function Navbar() {
  return (
    <header className="p-6 mb-32">
      <nav>
        <ul className="flex justify-center gap-4">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">Writing</NavLink>
          </li>
          <li>
            <NavLink to="/">Bookmarks</NavLink>
          </li>
          <li>
            <NavLink to="/">Uses</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
