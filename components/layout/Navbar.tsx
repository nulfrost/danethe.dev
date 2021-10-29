import { useRouter } from "next/router";
import Link from "next/link";

export const Navbar = () => {
  const router = useRouter();

  return (
    <header className="pt-6">
      <nav className="flex items-baseline justify-between">
        <Link href="/">
          <a
            className="text-2xl font-bold outline-none focus:ring-yellow-600 focus:ring-4"
            aria-label="Go to home page"
          >
            Dane.
          </a>
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link href="/">
              <a
                aria-label="Go to home page"
                className={`duration-150 hover:text-kinda-black outline-none focus:ring-yellow-600 focus:ring-4 ${
                  router.pathname === "/" ? "text-kinda-black" : "text-grayish"
                }`}
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a
                aria-label="Go to about page"
                className={`duration-150 hover:text-kinda-black outline-none focus:ring-yellow-600 focus:ring-4 ${
                  router.pathname === "/about"
                    ? "text-kinda-black"
                    : "text-grayish"
                }`}
              >
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a
                aria-label="Go to blog page"
                className={`duration-150 hover:text-kinda-black outline-none focus:ring-yellow-600 focus:ring-4 ${
                  router.pathname === "/blog"
                    ? "text-kinda-black"
                    : "text-grayish"
                }`}
              >
                Blog
              </a>
            </Link>
          </li>
          <li>
            <Link href="/uses">
              <a
                aria-label="Go to uses page"
                className={`duration-150 hover:text-kinda-black outline-none focus:ring-yellow-600 focus:ring-4 ${
                  router.pathname === "/uses"
                    ? "text-kinda-black"
                    : "text-grayish"
                }`}
              >
                Uses
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
