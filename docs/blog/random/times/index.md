---
title: Palindromic Times
date: 2005-07-02
layout: Post
categories:
  - Random
tags:
  - Lists
  - Digital
  - Clock
  - Time
---

Sitting on a bus one day in Iran, as we were driving through the desert, I was looking at a digital 7-segment clock at the front of the bus. Near the clock was a convex mirror, used by the driver to allow him to see everyone in the back. In noticed the reflection of the clock in the mirror, and it amused me that sometimes the value displayed on the mirror image of the clock would still be a valid time.

<!-- more -->

This got me thinking about how many times are valid when reversed horizontally in a mirror (e.g. 00:51 = 12:00). I also wondered how many times are valid when reversed vertically in a mirror (e.g. 11:06 = 11:09), when rotated by 180 degrees (e.g. 10:20 = 05:01) and when the number order is reversed (e.g. 00:32 = 23:00). And, of course, for each of these how many are valid given a 12 hour clock (12:00 to 11:59) as well as a 24 hour clock (00:00 to 23:59).

The tables below are the fruits of my labour. I'm sure there must be a better way of describing this, with animation and maybe a 7 segment display font!

<code-times-table :clock="24"/>

<code-times-table :clock="12"/>

### Code

:::: tabs

::: tab times.js

The JavaScript code that created this data is:

<<< @/docs/.vuepress/components/code/times/times.js

:::

::: tab times.json

This is the data file (times.json) that is used by the code. It is a list of times and their reflection in the different directions:

<<< @/docs/.vuepress/components/code/times/times.json

:::

::::
