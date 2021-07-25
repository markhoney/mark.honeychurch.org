---
title: Using AI to create a new religion
slug: holyai
date: 2021-06-19
layout: Post
categories:
  - Code
tags:
  - Code
  - Religon
---

I've always been fascinated by religious holy texts - they're such a product of the time they are written, and generally have little or no useful information for how to live one's life, unless you're willing to "interpret" them with a distorting lens that helps to bring them in line with modern ideas of how we should behave and treat each other. But, if I were to create a new religion, or cult, how would I go about it? Writing an entire book seems like hard work, so what if I could train some kind of deep learning bot on existing religious texts and then ask it to use its knowledge to create a new holy book.

<!-- more -->

I decided to use the now outdated GPT-2 algorithm for this task, as it's free and the model is small enough that it can run on my laptop without taking too long. Although I have a decent graphics card in my gaming PC (an NVidia 3060 Ti), just installing the Python requirements for the CPU version of GPT-2 was arduous enough - I gave up on the idea of ever getting the CUDA version working.

I found the GPT-2-Simple project, wrestled with its very specific python library requirements, and eventually managed to get it running.

Here are the source books I downloaded:

* [The Book of Mormon](https://www.gutenberg.org/files/17/17-0.txt)
* [The Bible](https://www.gutenberg.org/files/30/30.txt)
* [The Apocrypha](https://www.gutenberg.org/files/124/124.txt)
* [The Tao Teh King](https://www.gutenberg.org/files/216/216.txt)
* [The Dhammapada](https://www.gutenberg.org/files/2017/2017.txt)
* [The Bhagavad-Gita](https://www.gutenberg.org/files/2388/2388.txt)
* [The Quran](https://www.gutenberg.org/files/7440/7440.txt)
* [The Upanishads](https://www.gutenberg.org/files/3283/3283-8.txt)
* [Science and Health With Key to the Scriptures](https://www.gutenberg.org/files/3458/3458.txt)
* [The Kitáb-i-Aqdas](https://www.gutenberg.org/files/16523/16523-0.txt)
* [The Children of Odin](https://www.gutenberg.org/files/24737/24737.txt)

First I stitched the books I'd grabbed from the Gutenberg project together with some Node JS code:

```javascript
const {readdirSync, readFileSync, writeFileSync} = require('fs');

const text = readdirSync('./data').map((file) => '<|startoftext|>' + readFileSync('./data/' + file) + '<|endoftext|>');
writeFileSync('holy.txt', text.join('\n'));
```

I then used one piece of Python code to train the model with my religious texts:

```python
import os
import gpt_2_simple as gpt2

model_name = "355M"
if not os.path.isdir(os.path.join("models", model_name)):
	print(f"Downloading {model_name} model...")
	gpt2.download_gpt2(model_name = model_name)

sess = gpt2.start_tf_sess()
gpt2.finetune(sess, "texts.txt", model_name = model_name, run_name = 'holy', steps = 1000)
```

And a second piece of Python code to generate some text:

```python
import gpt_2_simple as gpt2

sess = gpt2.start_tf_sess()
gpt2.load_gpt2(sess, run_name = 'holy')

gpt2.generate(sess, run_name = 'holy')
```

I was pretty happy with my results:

> 3:005:008 Thou art the King's counsellor, and I the King his counsellor, and thy word is truth, and I the King's counsellor, and thy word is justice; but the words of the wicked and the wicked are in your mouth: and thou shalt not deliver them, and I the King will deliver thee: so tell me the words of the wicked, as the wickedness of my soul: and thou shalt say, If, when thou art king, thou keepest the commandments of my conscience: then thou art my brother, and I shall not be ashamed.

> 20:2 And the people of Judah went down to the place, and went forth to fight against the people of Jerusalem. Nevertheless, before they did so, they did it with great courage; but not of the same courage was they like unto the city of the children of Israel.
> 20:3 And the people of Jerusalem fought not as the people of Judah did: but they were not of the same spirit, because the LORD of hosts dealt a dispute with the people of Judah.
> 20:4 And the people of this city did not rise up against the people, neither went to Jerusalem with the battle; but they went down, and returned as they went down, and departed, and went their way.
> 20:5 Thus they were scattered, with their tents; and it was not according to their numbers for that they were so scattered in like manner; but according to their number they went up against them, and did battle.

> They had seen his face from their youth, and were afraid. He had shown great power on the field; their fear was not so great. They found a place that they could put distance between the brother and his master in a distance that was ten paces. He was able to make his brother a prisoner, to cut off their right hand, and to put their master to the death by hanging. His brother then went with his master to the field, and told the people that there were two men at the door, and that the brothers had been there four or five minutes.

> It is my advice therefore to make use of all means whereby I am able to make use of my intelligence in this matter. For I feel sure that the problems that lie before thee, though greater than any before, and worse still, than were before, and yet, though less, are all to be expected from the evil and wickedness that are in his sight.

> The Supreme and Immaterial Principle
> To-day science reveals the Universe to be subject to the law of relativity, thus, in the sense of a flat, constant state, and yet that the Universe also changes for various conditions, - and this also indicates that matter, is not to blame for the existence of God. We do not find a continuity of matter in matter or a succession in matter over Matter. All that exists does so in degrees and that the higher degree of being leads to other degrees and that all that takes place rests upon this higher level of being.

It appears that, rather than synthesising all the different styles in each of the books I fed the software, it has learned each of the styles separately and is capable of generating text to emulate each of them. I'll have to spend some time figuring out how to get it to give me a concise block of combined "wisdom" from all of the books it's consumed.

I've also trained this code on a back catalog of QAnon posts, and it's eerie just how well it emulates that particular crazy right wing conspiracy. But I'll leave the results of that experiment for another blog post.
