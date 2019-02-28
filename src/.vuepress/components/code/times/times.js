var fs = require('fs');

function saveTime(output, type, time, newtime) {
	if (!(time in output)) output[time] = {};
	output[time][type] = newtime;
}

function createMarkdownTable(times) {
	var table = '| Time       | Vertical   | Horizontal | Rotated    | Reversed   |\n| ---------- | ---------- | ---------- | ---------- | ---------- |\n';
	times.forEach((time) => {
		if (time && 'time' in time) {
			table += '| ' + time.time + '      | ' + (time.vertical || '     ') + '      | ' + (time.horizontal || '     ') + '      | ' + (time.rotated || '     ') + '      | ' + (time.reversed || '     ') + '      |\n';
		}
	});
	return table;
}

function createHTMLTable(times) {
	var table = '<table><thead><tr><td>Time</td><td>Vertical</td><td>Horizontal</td><td>Rotated</td><td>Reversed</td></tr></thead><tbody>\n';
	times.forEach((time) => {
		if (time && 'time' in time) {
			table += '<tr><td>' + time.time + '</td><td>' + (time.vertical || '') + '</td><td>' + (time.horizontal || '') + '</td><td>' + (time.rotated || '') + '</td><td>' + (time.reversed || '') + '</td></tr>\n';
		}
	});
	return table + '</tbody></table>';
}

function istwelvehour(timestring) {
	if (timestring) {
		var hour = parseInt(timestring.slice(0, 2));
		var minute = parseInt(timestring.slice(3, 5));
		if (hour >= 1 && hour <= 12 && minute >= 0 && minute <= 59) return true;
	}
}

function buildTransposedTimes(output, type, times) {
	Object.entries(times[type].hours).forEach(([hour, newminute]) => {
		Object.entries(times[type].minutes).forEach(([minute, newhour]) => {
			saveTime(output, type, [hour, minute].join(":"), [newhour, newminute].join(":"));
		});
	});
}

function buildTimes(output, type, times) {
	Object.entries(times[type].hours).forEach(([hour, newhour]) => {
		Object.entries(times[type].minutes).forEach(([minute, newminute]) => {
			saveTime(output, type, [hour, minute].join(":"), [newhour, newminute].join(":"));
		});
	});
}

module.exports = (clock = 24, format = 'js') => {
	const times = require('./times.json');
	var output = {};
	
	buildTimes(output, 'vertical', times);
	['horizontal', 'rotated', 'reversed'].forEach((type) => {
		buildTransposedTimes(output, type, times);
	});
	
	var ordered = [];
	Object.keys(output).sort().forEach(function(key) {
		ordered.push(Object.assign({
			time: key
		}, output[key]));
	});
	
	if (clock == 12) {
		ordered = ordered.map(time => {
			if (!istwelvehour(time.time)) return;
			['vertical', 'horizontal', 'rotated', 'reversed'].forEach((type) => {
				if (!istwelvehour(time[type])) delete time[type];
			});
			if (Object.keys(time).length > 1) return time;
		});
	}
	var response;
	switch(format) {
		case 'js':
			response = ordered;
			break;
		case 'json':
			response = JSON.stringify(ordered);
			break;
		case 'table':
			response = createHTMLTable(ordered);
			break;
		case 'markdown':
			response = createMarkdownTable(ordered);
			break;
	}
	return response;
};
