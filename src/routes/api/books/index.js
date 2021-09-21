import { variables } from '$lib/variables';

export async function get() {
	const url = `https://api.notion.com/v1/databases/${variables.notionDatabase}/query`;
	const res = await fetch(url, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${variables.notionToken}`,
			'Notion-Version': '2021-08-16'
		}
	});

	const db = await res.json();

	return {
		status: 200,
		body: {
			books: db?.results
		}
	};
}
