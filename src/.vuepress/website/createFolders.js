const path = require('path')
const fs = require('fs')

function recurse(node) {
	let stat = fs.statSync(node)
	if (stat.isDirectory()) {
		fs.readdirSync(node).forEach(item => recurse(path.join(node, item)));
	} else {
		if (node.endsWith('.md') && !node.endsWith('index.md')) {
			var folder = node.replace('.md', '');
			fs.mkdirSync(folder);
			fs.renameSync(node, folder + '\\index.md');
			//console.log('mkdir', folder);
			//console.log('move', node, folder + '\\index.md');
		}
	}
}

recurse('./src/blog/skepticism');
