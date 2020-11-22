import Link from "next/link";
import { useRouter } from "next/router";

export default function NavLink({ name, href }) {
  const router = useRouter();
  const activeLink = router.pathname === href;
  return (
    <Link href={href}>
      <a
        className={`px-3 duration-150 ${
          activeLink ? "opacity-100" : "opacity-70"
        } hover:opacity-100`}
      >
        {name}
      </a>
    </Link>
  );
}
