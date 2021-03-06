---
title: QR Code Generator
date: 2018-10-03
layout: Post
categories:
  - Software
tags:
  - Vue
  - QR
---

With the magic of [Vue](https://vuejs.org/), it's pretty easy to do a whole host of pretty cool things dynamically. As a quick example, here's a dynamic QR Code generator using a text box linked to the [vue-qriously](https://github.com/theomessin/vue-qriously) library.

<!-- more -->

As you edit the text, the QR code will update automagically. You can also resize the QR code with the slider. An error correction level can be chosen via the dropdown box. The colour can be selected using an html color input.

The result is a PNG image, so you can right click on it and save it locally.

<code-qr-dynamic />

## Code

Here's the code I wrote, a [Single File Component (SFC)](https://vuejs.org/v2/guide/single-file-components.html) that generates the QR Code. The \<qriously\> tag loads the vue-qriously plugin, which performs the magic of creating the QR code.

<<< @/docs/.vuepress/components/code/qr/dynamic.vue
