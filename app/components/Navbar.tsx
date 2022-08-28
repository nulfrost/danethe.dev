import { Link } from "@remix-run/react";

export function Navbar() {
  return (
    <header className="p-6">
      <nav>
        <ul className="flex justify-center gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Writing</Link>
          </li>
          <li>
            <Link to="/">Bookmarks</Link>
          </li>
          <li>
            <Link to="/">Uses</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
