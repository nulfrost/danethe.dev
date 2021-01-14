import Layout from "../components/Layout";
import { Text, Icon, Stack, Link, Box } from "@chakra-ui/react";
import Section from "../components/Section";
import {
  FaTwitterSquare,
  FaGithubSquare,
  FaLinkedin,
  FaEnvelopeSquare,
} from "react-icons/fa";

import {
  CanadaFlagIcon,
  MusicNote,
  Skateboard,
  Controller,
  PersonWithComputer,
} from "../components/Icons";
import { useEffect, useState } from "react";

const icons = [
  CanadaFlagIcon,
  MusicNote,
  Skateboard,
  Controller,
  PersonWithComputer,
];

export default function Home() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (counter === icons.length - 1) {
        setCounter(0);
      } else {
        setCounter(counter + 1);
      }
    }, 1000);

    return () => clearInterval(myInterval);
  }, [counter]);

  return (
    <Layout title="Home 🏡">
      <Section>
        <Box>
          <Text
            as="h1"
            fontSize={{ base: "3xl", lg: "100px" }}
            fontWeight="bold"
          >
            Hey, I'm <Text as="span">Dane</Text> <Icon as={icons[counter]} />
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
