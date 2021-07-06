---
title: QR Code Generator
date: 2020-08-28
layout: Post
categories:
  - Software
tags:
  - Testing
  - Jest
---

I was talking with a friend today online, and he mentioned my love of pubs. This was actually a typo, as he was aiming to be sarcastic about my love of puns:

> Richard:
>
> 	You love a pub
>
> Mark:
>
> 	I do!
>
> Richard:
>
> 	Pun!
>
> 	Well both statements are true 😁
>
> 	I typed pun. Bloody iPhone decided it knew best
>
> 	It didn’t
>
> Mark:
>
> 	Today I’m focusing on writing a test suite - so I could quickly throw together a test for that claim.

So, here's my Jest test case for my friend's claim that I like both pubs and puns. I'm pretty sure it proves once and for all that I'm not a fan of puns.

```javascript
function like(thing) {
	if (thing === 'pub') return true;
	else if (thing === 'pun') return false;
	return undefined;
}

describe('Mark', () => {
	it('likes', () => {
		test('a pub', () => expect(like('pub')).toBeTruthy());
		test('a pun', () => expect(like('pun')).toBeFalsy());
		test('a pug', () => expect(like('pug')).toBeUndefined());
		test('another pug', () => expect(like('pug2')).toBeUndefined());
	});
});
```
