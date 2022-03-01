import { NavLink } from "remix";

export function SideNav() {
  let activeClass = "text-secondary-4";
  let baseClass = "hover:text-secondary-4 duration-150";

  return (
    <aside className="self-center order-2">
      <nav>
        <ul className="text-accent text-2xl text-right space-y-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeClass : baseClass)}
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? activeClass : baseClass)}
            >
              about
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? activeClass : baseClass)}
            >
              blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/uses"
              className={({ isActive }) => (isActive ? activeClass : baseClass)}
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
    </aside>
  );
}
