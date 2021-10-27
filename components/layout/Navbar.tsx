import { Text } from "../common/Text";

export const Navbar = () => {
  return (
    <header className="mt-6">
      <nav className="flex items-baseline justify-between">
        <Text as="a" href="/" className="text-2xl font-bold">
          Dane.
        </Text>
        <ul className="flex gap-6">
          <li>
            <Text as="a" href="/about" className="text-grayish">
              About
            </Text>
          </li>
          <li>
            <Text as="a" href="/blog">
              Blog
            </Text>
          </li>
        </ul>
      </nav>
    </header>
  );
};
