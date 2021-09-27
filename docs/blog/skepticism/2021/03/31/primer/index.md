---
title: A BitCoin Primer
slug: primer
date: 2021-03-31
host: Graeme Hill
outlet: MagicTalk
program: Magic Nights
layout: Post
categories:
  - Skepticism
tags:
  - BitCoin
  - CryptoCurrency
---

Bitcoin is a digital currency that allows people to transfer money to other bitcoin users anonymously and securely - although [there are ways](https://www.sciencemag.org/news/2016/03/why-criminals-cant-hide-behind-bitcoin) of tracking unsuspecting users if they don’t know how to cover their tracks properly. There are two main pieces of technology that allow Bitcoin to work.

The first is the difficult one to get your head around, the blockchain. The blockchain is literally a chain of blocks, and you can imagine blocks being like text files on your PC. You start a blockchain by creating your first file and putting the details of some transactions inside it - these transactions will include the creation of new bitcoins and the transfer of bitcoin from one person to another. Once the first block is filled with transactions, with each transaction recording the users involved, amounts, etc, the data and time is added, we stop writing to it and a new block is started. Inside this second block, and all subsequent blocks, we place a signature of the previous block - in this case the first block. This signature is generated from the data in the first block, and is the result of a one way hashing algorithm. If the data in the first block is changed, when we generate a signature for the new data to check it, we’d find that it no longer matches the signature we created before. In this way, at any time we can ensure that nobody’s edited the first block of data. Now, after a while our second block is filled with transactions, so we add our datetime, stop writing to it and open a third block. Inside the third block we add the signature of the second block and start adding transactions, and so on. The more transactions we add, the longer this chain of data becomes, and the bigger the amount of disk space needed to store it all. And, at any time, a computer can work its way back through the chain of blocks, checking each one to make sure that its signature stored in the previous block matches its current signature. If all of them match, right the way back to the first block, we know that our blockchain hasn’t been tampered with.

There are extra complexities with a public blockchain like Bitcoin, because it is distributed - and that means that there are lots of computers around the world that have a copy of the chain. There’s lots of cool crypto, including public/private key pair encryption and signing. There are also some smarts around accepting transactions and copying them to other nodes, but because the data is all publicly available it brings up an interesting issue. Anyone can add a node and grab a copy of the blockchain - unlike a private chain, where you can avoid tampering by not letting anyone have access to the data, for Bitcoin everyone can have access to the data. This is both a benefit and an issue.

It’s easy to imagine someone who has access to the Bitcoin blockchain unwrapping one or more of the blocks, changing them as they see fit, and wrapping them back up with new signatures. The blockchain would still be internally consistent - if we just checked that the signatures matched all the way down to the first block, we would be given the false sense that the blockchain hadn’t been tampered with. However, with Bitcoin because many people have a copy of the chain, others would quickly find out that the tampered copy someone was using didn’t match their copies, and there’s smarts in Bitcoin to detect this. There’s also additional security here that comes from mining, which we’ll come to in a minute.

So Bitcoin is a currency that ensures integrity because everyone who has a copy of the blockchain agrees on what the chain should look like. This is fairly secure, as someone who wanted to subvert the blockchain would need to have over half of all (~83,000) Bitcoin nodes. Interestingly, though, China owns many of the nodes, and some fear that they could at some point push to get above 50% (of nodes or hash rate) and be able to dictate which version of the blockchain is correct.

The second part of Bitcoin is mining. To make the Bitcoin currency worth something, so that people can’t just magic new currency out of thin air, creating new bitcoin, known as mining, involves getting a computer to do some work. This work is used to help make the blockchain secure, by doing some difficult computation that is very hard to work out but easy to verify the answer to, and is based on a block’s signature (or hash) - basically, computers around the world take the newest block that is to be added to the chain and add a little bit of data to it before generating a new hash. If the second signature of the block with the new data added to it looks a certain way (starting with enough zeros), that data is added to the block and provides a second way of checking that the block hasn’t been tampered with. This means that unwrapping and re-wrapping blocks requires a lot of computing power, and limits the amount of tampering that it would be practical to achieve.

The more Bitcoins that are mined, the harder it becomes to create new coins - and this is artificially controlled to keep new block creation to around one block every 10 minutes. There is a limit of 21 million coins that can be generated.

One interesting thing about Bitcoin is that nobody knows who created it - someone under the pseudonym of Satoshi Nakamoto started Bitcoin’s blockchain in 2009 and created the first bitcoins. A small piece of a Bitcoin, a 100 millionth, is called a Satoshi.
