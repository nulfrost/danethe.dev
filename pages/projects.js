import Layout from "@/components/layout";
import Container from "@/components/Container";

export default function Projects() {
  return (
    <Layout title="Projects | Dane Miller">
      <Container>projects</Container>

      {/* <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {[
            {
              title: "World Of Warcraft Token Price",
              description:
                "A simple website to view the current price of the World of Warcraft subscription token",
              libs: ["Next.js", "Tailwind", "Blizzard API", "Vercel"],
              live: "wowtoken.vercel.app",
              repo: "https://github.com/Danex2/wowtoken",
            },
            {
              title: "Find My Pet",
              description:
                "A web application to help pet owners find their pets",
              libs: ["React", "Tailwind", "MongoDB", "Express"],
              live: "https://findmypet1.herokuapp.com/",
              repo: "https://github.com/Danex2/findmypet",
            },
            {
              title: "QuickUI",
              description:
                "A web application made to quickly view and copy ElvUI setups for world of warcraft",
              libs: ["TypeScript", "Next.js", "GraphQL", "AWS Amplify"],
              live: "https://master.d3vtz7bmt2l79k.amplifyapp.com",
              repo: "https://github.com/Danex2/quickui",
            },
            {
              title: "Omen",
              description:
                "A utility bot for Discord",
              libs: ["Discord.js", "JavaScript", "AWS"],
              live: "#",
              repo: "https://github.com/Danex2/omen",
            },
          ].map(({ title, description, libs, live, repo }) => (
            <div
              className="flex flex-col justify-between px-3 py-4 space-y-2 bg-gray-200 border-l-4 border-green-500"
              key={title}
            >
              <h2 className="text-xl font-semibold">{title}</h2>
              <p>{description}</p>
              <p className="text-sm break-words">{libs.join(" • ")}</p>
              <div className="flex justify-between text-sm text-green-500 underline">
                <a
                  href={live}
                  rel="noopener noreferrer"
                  className="hover:text-green-800"
                >
                  Live
                </a>
                <a
                  href={repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-800"
                >
                  Repo
                </a>
              </div>
            </div>
          ))}
        </div> */}
    </Layout>
  );
}
