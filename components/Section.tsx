import { Box } from "@chakra-ui/react";

type SectionProps = {
  children: React.ReactNode;
};

export default function Section({ children }: SectionProps) {
  return (
    <Box
      as="section"
      color="white"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      background="#040F16"
      minH="100vh"
    >
      {children}
    </Box>
  );
}
