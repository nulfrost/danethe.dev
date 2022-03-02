import { NavLink } from "remix";

export function SideNav() {
  let activeClass = "text-secondary-4";
  let baseClass = "hover:text-secondary-4 duration-150";

  return (
    <header>
      <nav>
        <ul className="text-accent text-lg flex gap-3 items-center h-16 justify-end">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeClass : baseClass)}
              prefetch="intent"
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? activeClass : baseClass)}
              prefetch="intent"
            >
              about
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? activeClass : baseClass)}
              prefetch="intent"
            >
              blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/uses"
              className={({ isActive }) => (isActive ? activeClass : baseClass)}
              prefetch="intent"
            >
              uses
            </NavLink>
          </li>
          <li>
            <a
              href="https://read.cv/enad"
              target="_blank"
              className={baseClass}
            >
              resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
