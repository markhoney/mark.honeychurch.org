var fs = require('fs');
var markdownpdf = require("markdown-pdf");

fs.readFile('./docs/cv/index.md', 'utf8', function (err, data) {
	markdownpdf({
		cssPath: "./docs/cv/css/cv.css"
	}).from.string(data.split('\n').slice(4).join('\n')).to("./.vuepress/public/docs/MarkHoneychurchCV.pdf");
});

fs.readFile('./docs/cv/full.md', 'utf8', function (err, data) {
	markdownpdf({
		cssPath: "./docs/cv/css/cv.css"
	}).from.string(data.split('\n').slice(4).join('\n')).to("./.vuepress/public/docs/MarkHoneychurchCVFull.pdf");
});
