import Layout from "../components/Layout";
import { Text, Icon, Stack, Link, Box, createIcon } from "@chakra-ui/react";
import Section from "../components/Section";
import {
  FaTwitterSquare,
  FaGithubSquare,
  FaLinkedin,
  FaEnvelopeSquare,
} from "react-icons/fa";

const CanadaFlagIcon = createIcon({
  displayName: "CanadaFlagIcon",
  viewBox: "0 0 36 36",
  path: (
    <>
      <path
        fill="#D52B1E"
        d="M4 5C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h6V5H4zm28 0h-6v26h6c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z"
      />
      <path fill="#EEE" d="M10 5h16v26H10z" />
      <path
        fill="#D52B1E"
        d="M18.615 22.113c1.198.139 2.272.264 3.469.401l-.305-1.002c-.049-.176.021-.368.159-.476l3.479-2.834-.72-.339c-.317-.113-.23-.292-.115-.722l.531-1.936-2.021.427c-.197.03-.328-.095-.358-.215l-.261-.911-1.598 1.794c-.227.288-.687.288-.544-.376l.683-3.634-.917.475c-.257.144-.514.168-.657-.089l-1.265-2.366v.059-.059l-1.265 2.366c-.144.257-.401.233-.658.089l-.916-.475.683 3.634c.144.664-.317.664-.544.376l-1.598-1.793-.26.911c-.03.12-.162.245-.359.215l-2.021-.427.531 1.936c.113.43.201.609-.116.722l-.72.339 3.479 2.834c.138.107.208.3.158.476l-.305 1.002 3.47-.401c.106 0 .176.059.175.181l-.214 3.704h.956l-.213-3.704c.002-.123.071-.182.177-.182z"
      />
    </>
  ),
});

export default function Home() {
  return (
    <Layout title="Home 🏡">
      <Section>
        <Box>
          <Text
            as="h1"
            fontSize={{ base: "3xl", lg: "100px" }}
            fontWeight="bold"
          >
            Hey, I'm <Text as="span">Dane</Text> <Icon as={CanadaFlagIcon} />
          </Text>
          <Text as="p" fontSize={{ base: "xl", lg: "32px" }} mb={5}>
            Fullstack Developer
          </Text>
          <Stack direction="row">
            <Link href="https://twitter.com/hybridearth" isExternal>
              <Icon
                as={FaTwitterSquare}
                h={{ base: 6, lg: 8 }}
                w={{ base: 6, lg: 8 }}
              />
            </Link>
            <Link href="https://github.com/Danex2" isExternal>
              <Icon
                as={FaGithubSquare}
                h={{ base: 6, lg: 8 }}
                w={{ base: 6, lg: 8 }}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/dmiller94/" isExternal>
              <Icon
                as={FaLinkedin}
                h={{ base: 6, lg: 8 }}
                w={{ base: 6, lg: 8 }}
              />
            </Link>
            <Link
              href="mailto:khadane.miller@gmail.com?subject=Howdy, Dane!"
              isExternal
            >
              <Icon
                as={FaEnvelopeSquare}
                h={{ base: 6, lg: 8 }}
                w={{ base: 6, lg: 8 }}
              />
            </Link>
          </Stack>
        </Box>
      </Section>
    </Layout>
  );
}
