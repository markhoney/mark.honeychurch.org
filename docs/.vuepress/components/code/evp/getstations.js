const axios = require("axios");
const $ = require('cheerio');
const fs = require('fs');

async function getStations(url) {
	const page = await axios.get(url);
	var matches = [];
	var regex = /var stream([0-9]{1,2}) = {\n\t       mp3: "(.*?)"/g;
	while (match = regex.exec(page.data)) {
    matches.push({id: match[1], url: match[2].replace('stream/1', '')});
  }
	//return page.data.match(/var stream([0-9]{1,2}) = {\n\t       mp3: "(.*?)"/g);
	var stations = $('tr', page.data).get().map(item => {
		var id = $('td', item)[0].attribs.id.replace('play_nohtml5_', '');
		if (matches.find(match => match.id == id)) {
			return {
				id: id,
				name: $('.text-danger', item).text(),
				website: $('.small.text-success', item).attr("href"),
				url: matches.find(match => match.id == id).url
			};
		}
	});
	return stations.filter(a => a);
}

async function getAll() {
	const stations = await getStations('https://www.internet-radio.com/stations/talk/page22');
	//console.log(stations);
	fs.writeFileSync("./stations.json", JSON.stringify(stations));
}

getAll();

// mp3: "(.*?)"

// 'var stream[0-9]{1,2} = {\n	       mp3: "(.*?)"'
