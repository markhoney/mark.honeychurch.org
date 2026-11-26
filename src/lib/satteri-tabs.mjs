import {defineHastPlugin} from 'satteri';

export default function satteriTabsPlugin() {
	return defineHastPlugin({
		name: 'satteri-vuepress-tabs',
		after(root, context) {
			const children = [];
			let groupIndex = 0;

			for (let index = 0; index < root.children.length; index += 1) {
				const node = root.children[index];
				if (nodeText(node, context) !== ':::: tabs') {
					children.push(node);
					continue;
				}

				const end = findEnd(root.children, index + 1, context);
				if (end === -1) {
					context.report({
						message: 'Tabs block is missing its closing "::::" fence',
						node,
						severity: 'error',
					});
					children.push(node);
					continue;
				}

				const tabs = parseTabs(root.children.slice(index + 1, end), context);
				if (tabs.length === 0) {
					context.report({
						message: 'Tabs block contains no "::: tab" entries',
						node,
						severity: 'error',
					});
					children.push(...root.children.slice(index, end + 1));
					index = end;
					continue;
				}

				children.push(createTabs(tabs, `${hash(context.fileURL?.pathname ?? context.source)}-${groupIndex}`));
				groupIndex += 1;
				index = end;
			}

			context.setField(root, 'children', children);
		},
	});
}

function findEnd(nodes, start, context) {
	return nodes.findIndex((node, index) => (
		index >= start && nodeText(node, context) === '::::'
	));
}

function parseTabs(nodes, context) {
	const tabs = [];
	let current;

	for (const node of nodes) {
		const text = nodeText(node, context);
		const match = /^::: tab (.+)$/.exec(text);

		if (match) {
			current = {
				label: stripQuotes(match[1].trim()),
				children: [],
			};
			tabs.push(current);
			continue;
		}

		if (text === ':::') {
			current = undefined;
			continue;
		}

		if (current) current.children.push(node);
	}

	return tabs.filter(tab => tab.label && tab.children.length > 0);
}

function createTabs(tabs, groupId) {
	const tabList = element('div', {
		className: ['tab-list'],
		role: 'tablist',
		ariaLabel: 'Content tabs',
	}, tabs.map((tab, index) => {
		const id = `${groupId}-${index}`;
		return element('button', {
			type: 'button',
			className: ['tab-button'],
			role: 'tab',
			id: `${id}-tab`,
			ariaControls: `${id}-panel`,
			ariaSelected: index === 0 ? 'true' : 'false',
			tabIndex: index === 0 ? 0 : -1,
		}, [{type: 'text', value: tab.label}]);
	}));

	const panels = tabs.map((tab, index) => {
		const id = `${groupId}-${index}`;
		return element('div', {
			className: ['tab-panel'],
			role: 'tabpanel',
			id: `${id}-panel`,
			ariaLabelledBy: `${id}-tab`,
			hidden: index !== 0,
			tabIndex: 0,
		}, tab.children);
	});

	return element('div', {className: ['tabs']}, [tabList, ...panels]);
}

function element(tagName, properties, children) {
	return {type: 'element', tagName, properties, children};
}

function nodeText(node, context) {
	return node.type === 'element' && node.tagName === 'p'
		? context.textContent(node).trim()
		: '';
}

function stripQuotes(value) {
	const pairs = {
		'"': '"',
		"'": "'",
		'“': '”',
		'‘': '’',
	};
	return pairs[value[0]] === value.at(-1) ? value.slice(1, -1) : value;
}

function hash(value) {
	let result = 5381;
	for (const character of value) {
		result = (result * 33) ^ character.charCodeAt(0);
	}
	return `tabs-${(result >>> 0).toString(36)}`;
}
