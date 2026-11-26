---
title: QR Code Generator
slug: qr
date: 2018-10-03
layout: Post
categories:
  - Code
tags:
  - Software
  - TypeScript
  - QR
---

This is a dynamic QR Code generator using the browser and the [qrcode](https://github.com/soldair/node-qrcode) library.

<!-- more -->

As you edit the text, the QR code will update automagically. You can also resize the QR code with the slider. An error correction level can be chosen via the dropdown box. The colour can be selected using an html color input.

The result is a PNG image, so you can right click on it and save it locally.
## Code

The original Vue component has been replaced with a small Astro and TypeScript widget.
_The original Vue demo source has been superseded by the current Astro implementation on this page._