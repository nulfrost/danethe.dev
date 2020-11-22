import NavLink from "@/components/NavLink";

export default function Navbar() {
  return (
    <nav className="absolute w-full text-lg font-semibold text-center mt-60">
      <NavLink href="/" name="Home" />
      <NavLink href="/projects" name="Projects" />
      <NavLink href="/uses" name="Uses" />
    </nav>
  );
}
