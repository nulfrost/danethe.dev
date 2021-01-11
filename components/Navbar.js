import NavLink from "@/components/NavLink";

export default function Navbar() {
  return (
    <nav className="w-full mt-10 text-sm font-semibold text-center lg:absolute md:text-lg">
      <NavLink href="/" name="Home" />
      <NavLink href="/about" name="About" />
      <NavLink href="/projects" name="Projects" />
    </nav>
  );
}
