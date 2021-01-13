import { Box } from "@chakra-ui/react";

type SectionProps = {
  children: React.ReactNode;
  section: string;
};

export default function Section({ children, section }: SectionProps) {
  return (
    <Box
      as="section"
      height="100vh"
      background="#040F16"
      color="white"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      id={section}
    >
      {children}
    </Box>
  );
}
