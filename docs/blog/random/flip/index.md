---
title: Flipping a Quantum Coin
slug: flip
date: 2018-12-05
layout: Post
categories:
  - Random
tags:
  - Physics
  - Coin
  - Random
---

I was watching a Sean Carroll video, and in the first few minutes Carroll used an Apple app to decide whether to hop left or right based on the results of a quantum event.

<!-- more -->

@[youtube](https://youtu.be/iXRLDatmbgA)

This got me thinking that it would probably be fairly easy to write a Vue component that would flip a coin based on a quantum event. All I had to do was find some code to display an animated coin flip, and a way to get data from quantum events.

The coin toss ended up being available [via a CodePen](https://codepen.io/le0864/pen/pbmoVQ) example. So far, so good.

For the quantum event, I first [found some hardware](https://www.idquantique.com/random-number-generation/products/quantis-random-number-generator/) that I could buy - but this seemed like a bad solution for my static site blog setup!

Thankfully I then chanced upon [an API](https://qrng.anu.edu.au/API/api-demo.php) for the ANU [Quantum Random Numbers Server](http://qrng.anu.edu.au/index.php). Yay - free quantum events, from quantum fluctuations in a vacuum.

## Heads or Tails

Putting the two together, and with a little bit of Vue magic, we get a simple coin toss that gives a truly random result for each flip. Click the coin to flip it (and be patient - sometimes the ANU website is a little slow!).

<code-coin-flip />

## Roll a d20

Of course, this method isn't restricted to coin flips, or quantum events. We could also use random data from atmospheric noise, courtesy of [random.org](https://www.random.org/), borrow a [CSS d20](https://matthewlein.com/experiments/20-sided-die) example, and make it into a Vue component. Click on the die to roll it.

<code-coin-d20 />

Don't forget, if you have a Google Home or any device with Google Assistant, you can flip a coin, roll a die, roll a d20, etc:

<audio controls src="/media/audio/blog/d20.m4a" />

## Code

Here's the Vue I put together to make this happen.

:::: tabs

::: tab "Coin Flip"

<<< @/components/code/coin/flip.vue

:::

::: tab "Roll a d20"

<<< @/components/code/coin/d20.vue

:::

::::
