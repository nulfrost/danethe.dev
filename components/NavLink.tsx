import { Link } from "@chakra-ui/react";

export default function NavLink({
  name,
  href,
}: {
  name: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      paddingBottom={2}
      _hover={{
        borderBottom: "3px solid white",
      }}
    >
      {name}
    </Link>
  );
}
