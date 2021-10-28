import { useRouter } from "next/router";
import Link from "next/link";

export const Navbar = () => {
  const router = useRouter();

  return (
    <header className="mt-6">
      <nav className="flex items-baseline justify-between">
        <Link href="/">
          <a className="text-2xl font-bold">Dane.</a>
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link href="/about">
              <a
                className={`duration-150 hover:text-kinda-black ${
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
                className={`duration-150 hover:text-kinda-black ${
                  router.pathname === "/blog"
                    ? "text-kinda-black"
                    : "text-grayish"
                }`}
              >
                Blog
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
