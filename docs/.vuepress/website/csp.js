const seespee = require('seespee');
// const fs = require('fs');

seespee('./docs/index.html', {
	root: './docs/',
	ignoreMeta: true
}).then(function (result) {
	//fs.writeFile('./docs/.vuepress/components/code/website/csp.txt', result.contentSecurityPolicy);
	console.log(result.contentSecurityPolicy);
});
