import { Box, Text } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";
import Layout from "../components/Layout";

export default function Projects() {
  // https://codesandbox.io/s/framer-motion-animate-in-view-gqcc8?file=/src/index.js:302-403
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const projects = [
    {
      name: "Giyu",
      description: `A logger middleware for express, shows information such
as the status code, route and the HTTP method. Learned 
how to publish packages to NPM as well as semantic 
versioning.`,
      libraries: ["TypeScript"],
      code: "https://github.com/nulfrost/giyu",
      website: "#",
    },
    {
      name: "Jobber",
      description: `Job posting website made using with the github jobs API, the project itself is very simple but I'm making it a thing to include tests in all side projects that I make.`,
      libraries: ["TypeScript", "Next.js", "Chakra UI", "Cypress"],
      code: "https://github.com/nulfrost/jobber",
      website: "https://jobber-chi.vercel.app/",
    },
    {
      name: "Warcraft Guilds",
      description: `A project I started to provide a better way to find a guild in world of warcraft. The current systems in-game allow players to search on a few criterias but I wanted to add a few more such as by server, raid times or the days a guild does certain events. This project is currently on hold and will probably resume development soon.`,
      libraries: [
        "TypeScript",
        "Next.js",
        "Chakra UI",
        "Cypress",
        "Prisma",
        "PostgreSQL",
      ],
      code: "https://github.com/nulfrost/warcraftguilds.app",
      website: "https://staging.warcraftguilds.app",
    },
    {
      name: "QuickUI",
      description: `World of warcraft UI interface searcher for ElvUI. I wanted a way to try out different interface profiles quickly to see which one I liked the most and had a decent layout for my character so I made this. I also wanted to try out making a website with amplify which was popping up a lot on the social media websites I frequented a lot. It also helped that I was getting into the AWS ecosystem at the time so I got to learn a lot about different services such as S3, Aurora and AppSync.`,
      libraries: [
        "TypeScript",
        "Next.js",
        "TailwindCSS",
        "Cypress",
        "AWS Amplify",
        "GraphQL",
      ],
      code: "https://github.com/nulfrost/quickui",
      website: "https://staging.warcraftguilds.app",
    },
  ];

  return (
    <Layout title="Projects 🔧">
      <Section>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 300 },
          }}
        >
          <Box px={5} pb={10}>
            <Text
              as="h2"
              fontSize={{ base: "lg", lg: "36px" }}
              fontWeight="bold"
              mb={{ base: 0, lg: "50px" }}
            >
              Projects
            </Text>
            <Box
              maxW={{ base: "", lg: "6xl" }}
              display="grid"
              gridTemplateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
              gridGap={10}
            >
              {projects.map(
                ({ name, description, libraries, code, website }) => (
                  <ProjectCard
                    key={name}
                    name={name}
                    description={description}
                    libraries={libraries}
                    code={code}
                    website={website}
                  />
                )
              )}
            </Box>
          </Box>
        </motion.div>
      </Section>
    </Layout>
  );
}
