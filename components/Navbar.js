import NavLink from "@/components/NavLink";

export default function Navbar() {
  return (
    <nav className="absolute w-full text-sm font-semibold text-center md:text-lg bottom-10">
      <NavLink href="/" name="Home" />
      <NavLink href="/projects" name="Projects" />
      <NavLink href="/uses" name="Uses" />
    </nav>
  );
}
