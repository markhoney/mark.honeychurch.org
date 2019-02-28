---
title: ROTx
date: 2008-03-16
layout: Post
categories:
  - Cryptography
  - Software
tags:
  - ROT13
  - ROTx
---

I became interested in cryptography a few years ago, and have been slowly working my way through Bruce Schneier's [Applied Cryptography](http://www.schneier.com/book-applied.html). From this, I became interested in simple forced decryption (cracking) of cyphers, and directed my attention to the ROT13 algorithm.

<!-- more -->

ROT13 is one of the simplest encryption techniques around, and most kids learn it as a fun way to obscure text. Basically, the idea is to rotate each letter by 13 characters, therefore a 'A' becomes 'A' + 13, which is 'N'. Similarly, 'B' becomes 'O', 'C' becomes 'P' and so on. When we get to the second half of the alphabet, the letters wrap round, so 'M' becomes 'Z', 'N' becomes 'A', etc. The easiest way to use this technique is with a substitution table, as below:

```csv
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

N O P Q R S T U V W X Y Z A B C D E F G H I J K L M
```

To use the table, for each character that needs to be changed find the character in the upper row and replace it with the corresponding character in the bottom row. Of course, with a cypher this simple some tricks are employed to maintain consistency. Firstly, punctuation and spaces are not encrypted. Secondly, lower and upper case letters are both treated in the same way. Implementing these ideas in code is fairly simple.

The idea I came up with was that the rotation of 13 characters for ROT13 can be changed with any integer from 1 to 25, and I call this ROTx. The challenge is to decypher text that has been encrypted with an unknown integer x.

The method for decryption is fairly simple, and involves comparing the letter frequency of our encrypted text with known average letter frequencies for the English Language. This has the limitation that it'll only work reliably for English text, but letter frequency tables for different languages can be substituted depending on the language the text is suspected to have been written in.

| Letter | Frequency (%) |
| ------ | ------------- |
| A      | 8.167         |
| B      | 1.492         |
| C      | 2.782         |
| D      | 4.253         |
| E      | 12.702        |
| F      | 2.228         |
| G      | 2.015         |
| H      | 6.094         |
| I      | 6.966         |
| J      | 0.153         |
| K      | 0.772         |
| L      | 4.025         |
| M      | 2.406         |
| N      | 6.749         |
| O      | 7.507         |
| P      | 1.929         |
| Q      | 0.095         |
| R      | 5.987         |
| S      | 6.327         |
| T      | 9.056         |
| U      | 2.758         |
| V      | 0.978         |
| W      | 2.360         |
| X      | 0.150         |
| Y      | 1.974         |
| Z      | 0.074         |

The frequency table I have used above comes from [Wikipedia](http://en.wikipedia.org/wiki/Letter_frequency). My code calculates the letter frequency of the cypher text and then tries to match this frequency map with that of the reference frequency table. The program rotates the frequency table one letter at a time, adds up all the differences between the frequency of each letter and the expected frequency, and keeps a record of the total. The lowest total deviation of all the rotations from the known letter frequencies is taken to be the best fit to the text, and hence the correct decryption.

Of course clever things could be done with dictionary lookups, first/last letter frequencies (which will differ from overall letter frequencies) and the like, but as it is I was quite surprised with how little text the program needs to correctly guess the plaintext. Single words such as 'Hello' are decyphered successfully. Whether a decryption is successful or not, it will give the same decrypted text whatever the chosen rotation of the original text - changing the rotation number will not alter the decrypted result.

## Encryption

Type some text in the left box, and choose your rotation amount. Remember to type something in English - gobbledygook won't be decypherable.

The encrypted text will show in the right box. Copy this text.

<code-rotx-encode />

## Decryption

Paste the text from above into the left box below. An algorithm will attempt to use letter frequencies to calculate what rotation was used to encrypt the text, and will show both the rotation and the original text.

The code used for the boxes below is not connected to the boxes above in any way, so no cheating is going on! (If you don't believe me, [go here](http://theblob.org/rot.cgi) to create some rotated text and paste it into the bottom left box for decoding, without using the top encoding boxes)

<code-rotx-decode />

Okay, that was pretty cool! Want to see how I did it? Here's my code:

## Code

:::: tabs
 
::: tab encode.vue

This vue component uses a computed property to calculate the encrypted text, given some plain text and a rotation value.

<<< ./src/.vuepress/components/code/rotx/encode.vue

:::

::: tab decode.vue

This Vue component computes the most likely rotation of a piece of encrypted text, and then displays that rotation. It also computes and displays the plain text, using the computed rotation value.

<<< ./src/.vuepress/components/code/rotx/decode.vue

:::

::: tab rot.js

This function was written by me as part of a [CodeWars Kata](https://www.codewars.com/kata/530e15517bc88ac656000716), and performs both the rotation and decryption.

<<< ./src/.vuepress/components/code/rotx/rotx.js

:::

::: tab rotx.php

Out of interest, here's the original code I wrote in PHP. It took me an hour or so to convert this to the Vue example above.

<<< ./src/blog/code/rotx/rotx.php

:::

::::
