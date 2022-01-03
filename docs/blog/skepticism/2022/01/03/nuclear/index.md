---
title: Nuclear Gandhi
slug: nuclear
date: 2022-01-03
outlet: Newsletter
layout: Post
categories:
  - Skepticism
tags:
  - Rumour
---

As a programmer, I love a good story about buggy software. Maybe it makes me feel better about my own mistakes! So when I recently heard about a fun bug in the strategy game Civilisation, from way back in 1991, I was intrigued. Apparently the fallout from this particular code error (no pun intended) was that the peaceful world leader Mahatma Gandhi would suddenly become very fond of amassing and using nuclear weapons - a quirk that has been named [Nuclear Gandhi](https://en.wikipedia.org/wiki/Nuclear_Gandhi).

<!-- more -->

The source of this problem has been described as an integer overflow (or underflow) bug. In software, integers (and other data types) are often saved with a certain number of bytes. A byte is made up of eight binary bits, making a byte able to hold one of 256 possible values. To store an integer using one byte, we could store a value between 0 to 255, or, if we want to be able to store negative numbers as well, a value between -128 and 127. These are called unsigned and signed integers respectively.

Now, sometimes if you try to store a number larger or smaller than the limit of your data type allows, it will roll around. So for an unsigned integer (from 0 to 255), trying to save the number 256 would actually just store a 0. And an attempt to store a -5 would end up saving the value 251.

And so we come to Civilisation. As [Wikipedia describes it](https://en.wikipedia.org/wiki/Civilization_(video_game)):


> _Civilization is a turn-based single or multiplayer strategy game. The player takes on the role of the ruler of a civilization, starting with one (or occasionally two) settler units, and attempts to build an empire in competition with two to seven other civilizations… Before the game begins, the player chooses which historical or current civilization to play... The game begins in 4000 BC, before the Bronze Age, and can last through to AD 2100 (on the easiest setting) with Space Age and "future technologies"._

Obviously a game like this uses a lot of variables in code to store values for many different attributes for all of the game’s mechanics, including those of how each world leader will act.

The bug that caused Gandhi to gain an affinity for nukes was apparently related to an unsigned single byte integer used to store each leader’s aggression level. These levels could be anything from 1 to 10 (or maybe 12), with numbers above that (up to 255) not being used.

The story of this bug is that Gandhi was the only world leader assigned the lowest possible value of 1 for aggression. But, whenever a nation moved to democracy, this was seen by the game as a peaceful step, and the leader’s aggression level was dropped by 2. For Gandhi, this would put his aggression at -1. But, because an unsigned integer was used, this would end up being saved as an aggression level of 255. And Gandhi with nukes and an aggression level 20 times higher than anyone else in the game was not something you wanted to have to deal with.

This particular bug is frequently used as a warning to programmers of the perils of not using the correct data type for storing your data, including in courses at Harvard University.

However, if that was all there was to it, it wouldn’t be much of a skeptical story. Not only did I learn about Nuclear Gandhi only recently (strategy games aren’t really my thing), but I also learned that the bug is almost certainly not real - despite the fact that many people have attested to having experienced it.

This video from a few years ago does a great job of delving into the details, including contacting creators Sid Meier and Bruce Shelley.

@[youtube](https://www.youtube.com/watch?v=Ur3SdgkW8W4)

Spoiler: it looks like the bug didn’t exist at all. Brian Reynolds, one of the game’s coders, remembers there only being 3 aggression levels (not 10 or 12), and that the lowest level was assigned by default to all world leaders. Additionally, he thinks the code engine for the early Civilisation games wouldn’t have suffered from a wraparound integer bug causing variables to become extremely large. Instead he suggests that other factors were likely to blame for people’s recollections of Gandhi being aggressive with nuclear weapons in the game. The game had code to make any leader with nukes become aggressive, and this, coupled with how surprising it would be to see peace-loving Gandhi suddenly become aggressive, likely left an impression in people’s minds that other leaders becoming aggressive wouldn’t. So Nuclear Gandhi is more about people’s preconceived notions of how Gandhi should act in the game, rather than a glitch in the code.

An interesting point is that ensuing Civilisation games, starting at Civilisation V, ended up programming Gandhi to have the maximum values for both building and using nukes. This was balanced in game by assigning a fixed role of Peacekeeper to Gandhi’s character, making his predilection for nukes a rare but real possibility (depending on which other roles he acquired). This retrospective adding of the non-existent Nuclear Gandhi bug as a feature in later games may have cemented the idea in many people’s minds that the original game also had this peculiar behaviour.
