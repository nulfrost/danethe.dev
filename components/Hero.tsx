import { Text, Icon, Stack, Link, Box } from "@chakra-ui/react";
import Section from "../components/Section";
import { AiOutlineTwitter } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  return (
    <Section section="home">
      <Box>
        <Text as="h1" fontSize="100px" fontWeight="bold">
          Hey, I'm Dane
        </Text>
        <Text as="p" fontSize="32px" mb={5}>
          Fullstack Developer
        </Text>
        <Stack direction="row">
          <Link href="https://twitter.com/hybridearth" isExternal>
            <Icon as={AiOutlineTwitter} h={8} w={8} />
          </Link>
          <Link href="https://github.com/Danex2" isExternal>
            <Icon as={FiGithub} h={8} w={8} />
          </Link>
          <Link href="https://www.linkedin.com/in/dmiller94/" isExternal>
            <Icon as={FaLinkedinIn} h={8} w={8} />
          </Link>
        </Stack>
      </Box>
    </Section>
  );
}
