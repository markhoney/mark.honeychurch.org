import {getEntry} from 'astro:content';

export async function requiredPage(id: string) {
	const entry = await getEntry('pages', id);
	if (!entry) throw new Error(`Page entry "${id}" was not found`);
	return entry;
}
