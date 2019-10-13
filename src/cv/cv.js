var fs = require('fs');
var markdownpdf = require("markdown-pdf");

fs.readFile('./src/cv/index.md', 'utf8', function (err, data) {
	markdownpdf({
		cssPath: "./src/cv/css/cv.css"
	}).from.string(data.split('\n').slice(4).join('\n')).to("./src/.vuepress/public/docs/MarkHoneychurchCV.pdf");
});

fs.readFile('./src/cv/full/index.md', 'utf8', function (err, data) {
	markdownpdf({
		cssPath: "./src/cv/css/cv.css"
	}).from.string(data.split('\n').slice(4).join('\n')).to("./src/.vuepress/public/docs/MarkHoneychurchCVFull.pdf");
});
