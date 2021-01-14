import { Text, Box } from "@chakra-ui/react";
import Section from "../components/Section";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Layout from "../components/Layout";

export default function About() {
  // https://codesandbox.io/s/framer-motion-animate-in-view-gqcc8?file=/src/index.js:302-403
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Layout title="About ❓">
      <Section>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 300 },
          }}
        >
          <Box maxW={{ base: "", lg: "6xl" }} lineHeight={2} px={5}>
            <Text
              as="h2"
              fontSize={{ base: "lg", lg: "36px" }}
              fontWeight="bold"
              mb={{ base: 0, lg: "10px" }}
            >
              About
            </Text>
            <Box fontSize={{ base: "md", lg: "lg" }} opacity={0.7}>
              <Text as="p" mb={3}>
                I’ve always been interested with how things worked under the
                hood ever since I was a small child. Always taking things apart
                (sorry mom) and putting them back together just to get an idea
                of what was going on. It wasn’t until I started playing a video
                game called RuneScape, that I started to learn how to code. The
                game was just starting to get overrun with bots that would run
                24/7 and I was extremely curious about how they worked and how
                they were able to run so efficiently. With some research and
                asking around I found (at the time) a pretty big community
                around the creation of those bots and quickly found myself
                diving into the code of many different scripts for different
                activities in the game to get an understanding of how they
                worked.
              </Text>
              <Text as="p" mb={3}>
                From there I started to make some scripts of my own and at the
                time I knew absolutely nothing about programming but I still
                managed to make a few (mostly broken) scripts that ran fairly
                well. That was my gateway into the world of software development
                and what continues to drive me to keep learning and become a
                better developer. I love the idea of thinking of a cool project
                in my head and then being able to immediately execute on it with
                just a few keystrokes. Today my focus is on web development and
                I’ve been self-teaching for about 2 years now and continue to
                push myself to learn more and grow. With that being said I do
                not know everything and feel I can learn a lot by working with
                people who have been developers for a lot longer than I have and
                look forward to an opportunity to learn from them.
              </Text>
              <Text as="p" mb={3}>
                The tech stack I work with is Next.js, TypeScript, GraphQL and
                Prisma to build my personal projects but I have a growing
                interest in cloud services such as AWS and other DevOps related
                topics. I am currently open to any roles that allow me to grow
                as a developer as well as help a company and their team provide
                the absolute best services that they can.
              </Text>
            </Box>
          </Box>
        </motion.div>
      </Section>
    </Layout>
  );
}
