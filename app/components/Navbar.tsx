import { NavLink } from "remix";

export function Navbar() {
  let activeClass = "text-secondary-4";
  let baseClass =
    "hover:text-secondary-4 duration-150 hover:border-b-4 pb-1 border-secondary-4";

  const links = [
    {
      route: "/",
      label: "home",
    },
    {
      route: "/about",
      label: "about",
    },
    {
      route: "/blog",
      label: "blog",
    },
    {
      route: "/uses",
      label: "uses",
    },
  ];

  return (
    <header>
      <nav>
        <ul className="flex items-center justify-end h-16 gap-3 text-lg text-accent">
          {links.map((link) => (
            <li key={JSON.stringify(link)}>
              <NavLink
                to={link.route}
                className={({ isActive }) =>
                  isActive ? activeClass : baseClass
                }
                prefetch="intent"
              >
                {link.label}
              </NavLink>
            </li>
          ))}
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
