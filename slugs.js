const {readFileSync, writeFileSync} = require('fs');
const walkSync = require('walk-sync');
const paths = walkSync('docs/blog', {includeBasePath: true, globs: ['**/*.md']});
for (const path of paths) {
	const contents = readFileSync(path, 'utf8');
	if (contents.includes('date: ') && !contents.includes('slug: ')) {
		const slug = path.split('/').reverse()[1];
		// console.log(slug);
		const lines = contents.split('\n');
		lines.splice(2, 0, 'slug: ' + slug);
		const replacement = lines.join('\n');
		// console.log(replacement);
		writeFileSync(path, replacement);
	}
}
