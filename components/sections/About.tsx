export default function About() {
  return (
    <>
      <section aria-label="About me" className="mb-20 leading-relaxed">
        <h2 className="mb-2 text-2xl font-bold">About</h2>
        <p className="mb-10 text-gray-400">a bit of my background</p>
        <div className="text-sm lg:text-lg">
          <p className="mb-5 text-gray-500">
            I’ve always been interested with how things worked under the hood
            ever since I was a small child. Always taking things apart (sorry
            mom) and putting them back together just to get an idea of what was
            going on. It wasn’t until I started playing a video game called
            RuneScape, that I started to learn how to code. The game was just
            starting to get overrun with bots that would run 24/7 and I was
            extremely curious about how they worked and how they were able to
            run so efficiently. With some research and asking around I found (at
            the time) a pretty big community around the creation of those bots
            and quickly found myself diving into the code of many different
            scripts for different activities in the game to get an understanding
            of how they worked.
          </p>
          <p className="mb-5 text-gray-500">
            From there I started to make some scripts of my own and at the time
            I knew absolutely nothing about programming but I still managed to
            make a few (mostly broken) scripts that ran fairly well. That was my
            gateway into the world of software development and what continues to
            drive me to keep learning and become a better developer. I love the
            idea of thinking of a cool project in my head and then being able to
            immediately execute on it with just a few keystrokes. Today my focus
            is on web development and I’ve been self-teaching for about 2 years
            now and continue to push myself to learn more and grow. With that
            being said I do not know everything and feel I can learn a lot by
            working with people who have been developers for a lot longer than I
            have and look forward to an opportunity to learn from them.
          </p>
          <p className="mb-5 text-gray-500">
            The tech stack I work with is Next.js, TypeScript, GraphQL and
            Prisma to build my personal projects and I have a growing interest
            in cloud services such as AWS and other DevOps related topics. I am
            currently open to any roles that allow me to grow as a developer as
            well as help a company and their team provide the absolute best
            services that they can.
          </p>
        </div>
      </section>
      <hr
        style={{
          borderTop: "5px solid #7E90A0",
          marginBottom: "2.5rem",
        }}
      />
    </>
  );
}
