const axios = require("axios");

async function getURL(url, number) {
	var head;
	try {
		head = await axios({
			maxRedirects: 0,
			method: 'head',
			url: url
		});
	} catch (err) {
		process.stdout.clearLine();
		process.stdout.cursorTo(0);
		process.stdout.write(err.response.status + ' ' + number);
	}
	if (head) {
		process.stdout.clearLine();
		process.stdout.cursorTo(0);
		console.log(url);
	}
}

wait = delay => new Promise(resolve => setTimeout(resolve, delay));

async function getURLs() {
	//var targets = /*[104500, 107500,*/ [112500, 113500, 114500, 115300, 116000];
	var targets = /*[104500, 107500,*/ [109200];
	var urlStubs = ['Skeptical-Thoughts-with-Mark-Honeychurch']; //, 'Skeptical-Thoughts'];
	var signs = [-1, 1];
	var limit = 100;
	for (var stub in urlStubs) {
		for (var target in targets) {
			for (var i = 1; i <= limit; i++) {
				for (var sign in signs) {
					var number = (targets[target] + (signs[sign] * i));
					var url = 'https://www.magic.co.nz/' + urlStubs[stub] + '/tabid/506/articleID/' + number + '/Default.aspx';
					await getURL(url, number);
					await wait();
				}
			}
		}
	}
}

getURLs();
