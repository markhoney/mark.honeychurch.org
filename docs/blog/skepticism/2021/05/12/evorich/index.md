---
title: Evorich - where con, cult and crypto collide
date: 2021-05-12
host: Graeme Hill
outlet: MagicTalk
layout: Post
categories:
  - Skepticism
tags:
  - Scam
  - Cryptocurrency
---

Earlier this week I opened the LinkedIn app on my phone, and noticed a comment on a post that was made by someone who was an EvoRich consultant. His profile didn’t seem to match what I’d expect from a consultant, so I had a quick search for EvoRich to see what it was - with the suspicion that it might be a Multi Level Marketing scheme.

<!-- more -->

@[youtube](https://youtu.be/xg1PYb18Mi8)

I was not disappointed - it turns out that EvoRich is not just an MLM, it’s a CryptoCurrency MLM - or as they call it, an MLCI (Multi Level Crowd Investing). What came up pretty quickly in my search was an alert from the FMA (Financial Markets Authority) which said:

> “The FMA recommends exercising caution before dealing with Evorich... We believe Evorich [has] the hallmarks of a scam.”

The next search result was [an article](https://www.odt.co.nz/lifestyle/magazine/russian-scheme-luring-kiwi-investors) from the Otago Daily Times telling of a recent push to get people in New Zealand to sign up for the EvoRich scheme. Apparently some who have put their money in the scheme in NZ are busy running events to help sign up new victims, with hollow promises of big profits.

Next I found myself on YouTube, watching from the EvoRich 2021 Summit, where Kiwis and Aussies stood on an empty stage in what seemed to be an empty room in Queensland, telling a video camera about why they should invest in EvoRich, and why it’s going to be the next big thing in CryptoCurrencies.

@[youtube](https://www.youtu.be/d31vhuL8_8U)

They kept on thanking the same person, venerating him in a way that felt a lot like how cult leaders are treated - Andrey Khovratov. It turns out that Andrey has quite a history, having previously run Skyway, and then NEEW (New Economic Evolution of the World), and now EvoRich. And searching for each of these companies brings up warning after warning.

This whole EvoRich scheme is sadly familiar, and looks almost like a carbon copy of the OneCoin cryptocurrency the BBC did a great job of exposing as a scam in their podcast series called [The Missing Crypto Queen](https://www.bbc.co.uk/programmes/p07nkd84). Like OneCoin, EvoRich involves dodgy Russian “businessmen”, multi level marketing, the promise of a cryptocurrency with absolutely no evidence that it actually exists, slick looking websites that show you your “investment” going up in value, and lots of training on how to bring your friends in to invest in the scheme. However I have a strong suspicion, even though it’s very easy to buy into EvoRich, that it’ll be impossible for people to take their money out again. You might think that you’re becoming rich, as you see your number of WCRUs (crypto coins) going up, but like OneCoin I’m guessing that increase is just a piece of code that slowly increases a number in a database.

While trawling through EvoRich videos on YouTube, I was watching a video on how to use the website to manage your crypto wallet, and the presenter said something that piqued my interest. She said that the URLs at the top of her screen, as she was entering data on the EvoRich backoffice website, shouldn’t be used by end users, as it was just for demo purposes. Well, you can’t tell a skeptic not to open the URL and expect them to listen to you! So I typed in a couple of different URLs from the video to my browser, and the second one took me to the demo site’s API - it’s a part of a website where software can ask a server for data. Although the site needed credentials to login, I could see that it was written in Yii - a popular web framework written in the PHP language for building websites and APIs. And the developers of the site had left debug mode on, which meant that all requests to the site were being logged, and there was a convenient link to the logs. When I clicked the link, it showed me all the traffic that the API had received over the last few months. It wasn’t much, but there were a few POST requests to the /login page - and as a web developer it was obvious to me that these were login attempts. Those attempts appear to have been made by EvoRich “consultants” who accidentally tried to use the demo site to login, rather than the live site. In the logs I was able to see people’s cleartext usernames and passwords - not an admin account, but the login credentials of different people from around the world who have been conned by this company.

I’ve let the company know that they have a security issue (through their email address of ethics@evo-rich.com) so that they can fix it. But the company is owned by a Russian con man, and is actively taking money from thousands of desperate people, so I don’t think they’ll really care, and I don’t expect to hear back from them any time soon.
