---
title: Ambilight Clone
date: 2016-11-30
layout: Post
categories:
  - Projects
tags:
  - Build
  - Backlight
  - Kodi
---

I built a Philips Ambilight clone for my Sony TV using WS2812B LEDs and an ESP8266 controller. The ESP connects to the WiFi network, and Kodi sends updates on which colour each LED should be via UDP to Hyperion running on the ESP. I'm impressed with how well this worked over wireless.

<!-- more -->

## Power Supply

Here's the power supply that I used:

![Power Supply](./IMG_9878.jpg)

## Controller

This the ESP8266, which is powered from the same power supply that is powering the LEDs.

![ESP8266](./IMG_9879.jpg)

## LEDS

The LEDs come with an adhesive backing, which makes sticking them to the back of the TV simple. I used plastic joiners for the corners.

![LED Join](./IMG_9876.jpg)

## Video

And here's a video of the finished product.

@[youtube](https://youtu.be/mUPjq1NMdJc)

<!--<video controls src="/media/video/Ambilight.mov" style="width: 100%;" />-->

## Previous attempt

I'd previously tried to use a Rainbowduino and WS2811 LEDs, and ended up writing my own Boblight compatible software for the Rainbowduino - [RainbowBob](https://github.com/markhoney/RainbowBob)

![Bread Board](./IMG_1628.jpg)

![LEDs](./IMG_1629.jpg)

![Lit Up](./IMG_1633.jpg)
