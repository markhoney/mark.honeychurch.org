import {getEntry} from 'astro:content';

export async function requiredEntry(id: string) {
	const entry = await getEntry('pages', id);
	if (!entry) throw new Error(`Content entry "${id}" was not found`);
	return entry;
}
