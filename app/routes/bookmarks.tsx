import { V2_MetaFunction, json } from "@remix-run/node";
import { Client } from "@notionhq/client";
import { useLoaderData } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: "Dane's site / Blog",
    },
  ];
};

export async function loader() {
  const notion = new Client({ auth: process.env.NOTION_INTEGRATION_TOKEN });
  const databaseId = process.env.NOTION_DATABASE_ID as string;

  const bookmarks = await notion.databases.query({
    database_id: databaseId,
  });

  return json(
    { bookmarks },
    {
      headers: {
        "Cache-Control": "public, s-maxage=1800",
      },
    }
  );
}

export default function Bookmarks() {
  const { bookmarks } = useLoaderData<typeof loader>();
  return (
    <>
      <h1 className="mt-4 mb-4 text-2xl font-bold text-snes-black">
        Bookmarks
      </h1>
      <ul className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 auto-cols-fr">
        {bookmarks.results.map((bookmark) => (
          <li key={bookmark.id}>
            <a
              href={bookmark?.properties?.URL?.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${bookmark?.properties?.Title?.title[0].plain_text}, opens in a new tab`}
              className="[border-style:outset] border-2 border-white p-3 hover:[border-style:inset] focus-visible:outline-4 focus-visible:outline-offset-1 focus-visible:outline-snes-purple focus-visible:outline-dashed focus-visible:underline hover:underline w-full h-full flex flex-col"
            >
              <h2 className="font-bold">
                {bookmark?.properties?.Title?.title[0].plain_text}
              </h2>
              <p className="mt-auto text-sm">
                {bookmark?.properties?.Author.rich_text[0]?.plain_text}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
