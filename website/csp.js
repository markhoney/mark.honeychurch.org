const seespee = require('seespee');
// const fs = require('fs');

seespee('./dist/index.html', {
	root: './dist/',
	ignoreMeta: true
}).then(function (result) {
	//fs.writeFile('./docs/components/code/website/csp.txt', result.contentSecurityPolicy);
	console.log(result.contentSecurityPolicy);
});
