import Layout from "@/components/sections/Layout";
import { motion } from "framer-motion";
import { Client } from "@notionhq/client";

export default function Reading({ db }) {
  console.log(db);
  return (
    <Layout title="reading">
      <motion.div className="mt-[88px] lg:mt-[184px] text-skin-base">
        <div className="mb-10">
          <h2 className="mb-2 text-4xl font-bold">Reading</h2>
          <p className="text-skin-secondary">
            books i've read / currently reading
          </p>
        </div>
        <div className="flex flex-col gap-5 text-xl">
          {db.results.slice(1).map((book) => (
            <div key={book.id} className="space-y-3 md:space-y-0">
              <div className="flex flex-col md:items-center md:flex-row">
                <p className="md:mr-3 font-bold mb-2 md:mb-0">
                  {book.properties.Name.title[0].plain_text}
                </p>
                <small
                  className={`text-xs px-2 py-0.5 w-max rounded font-semibold ${
                    book.properties.Status.select.name === "Finished"
                      ? "text-green-800 bg-green-50 border border-green-500"
                      : book.properties.Status.select.name === "Reading"
                      ? "text-yellow-800 bg-yellow-50"
                      : "text-red-800 bg-red-50"
                  }`}
                >
                  {book.properties.Status.select.name}
                </small>
              </div>
              <p className="text-sm">
                Written by:{" "}
                {book.properties.Author.multi_select
                  .map((author) => author.name)
                  .join(", ")}
              </p>
              <a
                className="text-sm underline"
                href={book.properties.Link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </Layout>
  );
}

export async function getStaticProps() {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  const db = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE,
  });

  return {
    props: {
      db,
    },
    revalidate: 3600,
  };
}
