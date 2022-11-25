import { MetaFunction, json } from "@remix-run/node";
import { Client } from "@notionhq/client";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = ({}) => ({
  title: "Dane's site / Bookmarks",
});

export async function loader() {
  const notion = new Client({ auth: process.env.NOTION_INTEGRATION_TOKEN });

  const databaseId = process.env.NOTION_DATABASE_ID as string;

  const bookmarks = await notion.databases.query({
    database_id: databaseId,
  });

  return json({ bookmarks });
}

export default function Bookmarks() {
  const { bookmarks } = useLoaderData<typeof loader>();
  console.log(bookmarks);
  return (
    <>
      <h1 className="mt-4 text-2xl font-bold text-snes-black mb-4">
        Bookmarks
      </h1>
      <ul className="flex flex-col gap-2 md:flex-row">
        {bookmarks.results.map((bookmark) => (
          <li key={bookmark.id}>
            <a
              href={bookmark?.properties?.URL?.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${bookmark?.properties?.Title?.title[0].plain_text}, opens in a new tab`}
              className="[border-style:outset] border-2 border-white p-3 inline-block hover:[border-style:inset]"
            >
              <h2 className="font-bold">
                {bookmark?.properties?.Title?.title[0].plain_text}
              </h2>
              <p className="text-sm">
                {bookmark?.properties?.Author.rich_text[0]?.plain_text}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
