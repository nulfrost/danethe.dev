import { Box, Link, Stack } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box as="nav" background="#040F16" color="white" p={10} position="fixed">
      <Stack direction="row" spacing={10}>
        <Link
          href="#home"
          paddingBottom={2}
          _hover={{
            borderBottom: "3px solid white",
          }}
        >
          Home
        </Link>
        <Link
          href="#about"
          paddingBottom={2}
          _hover={{
            borderBottom: "3px solid white",
          }}
        >
          About
        </Link>
        <Link
          href="#projects"
          paddingBottom={2}
          _hover={{
            borderBottom: "3px solid white",
          }}
        >
          Projects
        </Link>
      </Stack>
    </Box>
  );
}
