import Layout from "@/components/layout";
import Container from "@/components/Container";
import { AiFillGithub } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";

export default function Projects() {
  const projects = [
    {
      name: "QuickUI",
      description: "Custom UI gallery for world of warcraft",
      libraries: [
        "TypeScript",
        "AWS Amplify",
        "TailwindCSS",
        "Next.js",
        "GraphQL",
      ],
      website: "https://master.d3vtz7bmt2l79k.amplifyapp.com/",
      code: "https://github.com/Danex2/quickui",
    },
    {
      name: "Warcraftguilds",
      description: "Guild searching application for world of warcraft",
      libraries: ["Next.js", "ChakraUI", "Cypress", "Prisma", "PostgreSQL"],
      website: "https://staging.warcraftguilds.app/",
      code: "https://github.com/Danex2/warcraftguilds.app",
    },
    {
      name: "Giyu",
      description: "Super simple logger middleware for express",
      libraries: ["TypeScript"],
      website: "#",
      code: "https://github.com/Danex2/giyu",
    },
    {
      name: "Jobber",
      description: "Job search website powered by github jobs API",
      libraries: ["TypeScript", "ChakraUI", "Cypress", "Next.js"],
      website: "https://jobber-chi.vercel.app/",
      code: "https://github.com/Danex2/jobber",
    },
    {
      name: "Find My Pet",
      description: "Web application to help pet owners find their pets",
      libraries: ["React", "TailwindCSS", "MongoDB", "Express"],
      website: "https://findmypet1.herokuapp.com/",
      code: "https://github.com/Danex2/findmypet",
    },
  ];

  return (
    <Layout title="Projects | Dane Miller">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
          {projects.map(({ name, description, libraries, website, code }) => (
            <div
              className="p-5 transition-colors duration-150 rounded hover:bg-gray-100"
              key={name}
            >
              <h2 className="mb-1 font-bold text-md lg:text-xl">{name}</h2>
              <p className="mb-2 text-xs lg:text-lg">{description}</p>
              <div className="mb-2 text-xs lg:text-md">
                <p className="font-semibold lg:text-md">
                  {libraries.join(" // ")}
                </p>
              </div>
              <div className="flex">
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-3"
                >
                  <AiFillGithub fontSize="25px" />
                </a>
                <a href={website} target="_blank" rel="noopener noreferrer">
                  <BiWorld fontSize="25px" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
}
