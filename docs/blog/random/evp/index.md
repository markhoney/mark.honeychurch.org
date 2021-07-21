---
title: Electronic Voice Phenomena
slug: evp
date: 2019-01-10
layout: Post
categories:
  - Random
tags:
  - Paranormal
  - Ghost
  - Voice
  - EVP
---

[Electronic Voice Phenomena](https://en.wikipedia.org/wiki/Electronic_voice_phenomenon), or EVP, are "voices" detected and recorded by ghost hunters using electronic audio recording equipment.

<!-- more -->

Here's an example of EVP, courtesy of Hayley Stevens (from her website [Hayley is a Ghost](https://hayleyisaghost.co.uk/examples-of-evp/)). Can you figure out what's supposedly being said?

<p><audio controls src="/media/audio/skepticism/Keep-Out-EVP.mp3" /></p>

## Voice Recorder

Supposedly ghosts can talk in a way that humans can't hear, but that can be picked up and recorded by some modern dictaphones (more properly called a Dictation Machine or Voice Recorder). A more boring, but plausible, explanation for this phenomenon is that some dictaphones have a setting that, when the audio level is low, cranks up the gain on the input, in order to try to amplify the audio. This would be helpful, for example, if someone using a dictaphone walked away from it. Automatically increasing the gain when this happens would help to ensure a consistent audio volume during playback, despite the source audio having a varying volume.

This gain increase has the potential to cause the dictaphone to pick up more than just quiet voices. It will also amplify any internal electronics noise being created by the dictaphone's internal electronics. It is these spurious noises that are believed to be a common source of the "ghost voices" that ghost hunters end up capturing.

I wondered if I could write a simple recreation of this by wiring a PC's microphone into its speakers, via a DSP filter to increase the gain. With modern day web technology, this can all be done in a browser. Below is my simple effort to recreate EVP, with a slider to change the gain of the incoming audio. Just slide the slider to the right to increase the volume, which should cause some ungodly noises to emanate from your PC.

<code-evp-recorder />

## Spirit Box

<code-evp-spiritbox />

## Code

Here's the Vue component I put together to make this happen.

## Voice Recorder

<<< @/docs/.vuepress/components/code/evp/recorder.vue

## Spirit Box

:::: tabs

::: tab Vue

Here's the Vue code:

<<< @/docs/.vuepress/components/code/evp/spiritbox.vue

:::

::: tab JS

This JS script makes the list of stations:

<<< @/docs/.vuepress/components/code/evp/getstations.js

:::

::: tab JSON

Here's the JSON output of the above script:

<<< @/docs/.vuepress/components/code/evp/stations.json

:::

::::
