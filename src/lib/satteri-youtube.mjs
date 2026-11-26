import {defineMdastPlugin} from 'satteri';

export default function satteriYoutubePlugin() {
	return defineMdastPlugin({
		name: 'satteri-youtube-embed',
		paragraph(node, context) {
			if (node.children.length !== 1 || node.children[0].type !== 'link') return;

			const link = node.children[0];
			const image = link.children.length === 1 && link.children[0].type === 'image'
				? link.children[0]
				: undefined;
			const videoId = extractYouTubeId(link.url);
			const thumbnailId = image ? extractYouTubeThumbnailId(image.url) : undefined;

			if (
				!videoId
				|| !thumbnailId
				|| thumbnailId !== videoId
			) return;

			context.replaceNode(node, {
				type: 'html',
				value:
					`<div class="youtube-embed">` +
					`<iframe src="https://www.youtube-nocookie.com/embed/${videoId}" ` +
					'title="YouTube video player" loading="lazy" ' +
					'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ' +
					'referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' +
					'</div>',
			});
		},
	});
}

function extractYouTubeThumbnailId(url) {
	let parsed;
	try {
		parsed = new URL(url);
	} catch {
		return undefined;
	}

	if (parsed.hostname !== 'img.youtube.com') return undefined;
	const [, , videoId] = parsed.pathname.split('/');
	return videoId;
}

function extractYouTubeId(url) {
	let parsed;
	try {
		parsed = new URL(url);
	} catch {
		return undefined;
	}

	const host = parsed.hostname.replace(/^www\./, '');
	if (host === 'youtu.be') return parsed.pathname.split('/').filter(Boolean)[0];
	if (host !== 'youtube.com' && host !== 'm.youtube.com') return undefined;

	const segments = parsed.pathname.split('/').filter(Boolean);
	if (segments[0] === 'watch') return parsed.searchParams.get('v') ?? undefined;
	if (segments[0] === 'embed' || segments[0] === 'v') return segments[1];
	return undefined;
}
