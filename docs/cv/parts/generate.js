const fs = require('fs');
const path = require('path');

if (process.argv.length > 2) {
	const sections = require('./' + process.argv[2]);
	let doc = "---\nsidebar: auto\n---\n";
	sections.forEach(section => {
		const filepath = "./docs/cv/parts/" + section + ".markdown";
		if (fs.existsSync(filepath)) {
			doc += "\n" + fs.readFileSync(filepath, 'utf8') + "\n";
		} else {
			doc += "\n" + section + "\n\n";
		}
	});
	fs.writeFileSync('./docs/cv/' + process.argv[2] + ".md", doc.trim().replace(/\.\n\#/g, '.\n\n#').replace(/\r\n/g, '\n').replace(/\n{3,}/g, '\n\n') + "\n");
}
