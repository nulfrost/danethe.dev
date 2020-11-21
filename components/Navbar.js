import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute w-full text-lg font-semibold text-center mt-60">
      <Link href="/">
        <a className="px-3 duration-150 opacity-70 hover:opacity-100">Home</a>
      </Link>
      <Link href="/projects">
        <a className="px-3 duration-150 opacity-70 hover:opacity-100">
          Projects
        </a>
      </Link>
      <Link href="/uses">
        <a className="px-3 duration-150 opacity-70 hover:opacity-100">Uses</a>
      </Link>
    </nav>
  );
}
