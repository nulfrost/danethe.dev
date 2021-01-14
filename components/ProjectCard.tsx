import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { BsCode } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";

type ProjectCardProps = {
  name: string;
  description: string;
  libraries: string[];
  code: string;
  website: string;
};

export default function ProjectCard({
  name,
  description,
  libraries,
  code,
  website,
}: ProjectCardProps) {
  return (
    <Box display="flex" flexDirection="column">
      <Text as="h2" fontWeight="bold" mb={2}>
        {name}
      </Text>
      <Text as="p" opacity={0.7} mb={3} fontSize={{ base: "xs", lg: "md" }}>
        {description}
      </Text>
      <Stack direction="row" mb={4}>
        <Text as="span" fontSize={{ base: "xs", lg: "sm" }}>
          {libraries.join(" • ")}
        </Text>
      </Stack>
      <Stack direction="row">
        <Link
          href={code}
          isExternal
          _hover={{
            transform: "rotate(20deg)",
          }}
        >
          <Icon as={BsCode} h={6} w={6} />
        </Link>
        <Link
          href={website}
          isExternal
          _hover={{
            transform: "rotate(20deg)",
          }}
        >
          <Icon as={BiWorld} h={6} w={6} />
        </Link>
      </Stack>
    </Box>
  );
}
