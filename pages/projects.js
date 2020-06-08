import Layout from "@/components/layout";

export default function Projects() {
  return (
    <Layout title="Projects">
      <div className="flex flex-col justify-center flex-1 px-3 py-5">
        <h1 className="pl-2 mb-4 text-2xl font-bold border-l-4 border-green-500">
          Projects
        </h1>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Tidus",
              description:
                "A moderation and utility bot built for the Discord chat application.",
              libs: ["Node", "Docker", "Discord.js"],
              live: "#",
              repo: "https://github.com/Danex2/tidus",
            },
            {
              title: "Thrifty",
              description:
                "A marketplace app for buying and selling items locally.",
              libs: ["Next.js", "Tailwind", "Prisma", "Vercel", "TypeScript"],
              live: "#",
              repo: "#",
            },
            {
              title: "Fotos",
              description: "Photography application similar to flickr",
              libs: ["Next.js", "Tailwind", "Prisma", "Vercel"],
              live: "#",
              repo: "#",
            },
            {
              title: "Some react project",
              description: "it does stuff",
              libs: ["React", "Tailwind", "Firebase"],
              live: "#",
              repo: "#",
            },
          ].map(({ title, description, libs, live, repo }) => (
            <div
              className="flex flex-col justify-between px-3 py-4 space-y-2 bg-gray-300 border-l-4 border-green-500"
              key={title}
            >
              <h2 className="text-xl font-semibold">{title}</h2>
              <p>{description}</p>
              <p className="text-sm break-words">{libs.join("•")}</p>
              <div className="flex justify-between text-sm text-green-500 underline">
                <a
                  href={live}
                  target="_blank"
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
        </div>
      </div>
    </Layout>
  );
}
