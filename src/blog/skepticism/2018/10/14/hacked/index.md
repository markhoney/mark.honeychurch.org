---
title: Have I been hacked?
date: 2018-10-14
layout: Post
categories:
  - Scam
tags:
  - Hack
  - Password
---

The other day I received an ominous email telling me that I have malware installed on my PC as a result of visiting porn sites, and that I need to cough up £850 so that my sordid life isn’t made public:

<!-- more -->

> I have placed a Malware on an adult website and as you visited and watched the video your device has been affected, placing a spyware on your machine. Which has recorded you both with webcam and screen capture while you had your “fun Time” allowing me to see exactly what you see.
>
> This has also affected your smartphone via an exploit. So do not think for one minute you can circumvent this by reinstalling your OS. You have already been recorded.
>
> After that my malware collected all your messengers, emails and social networks contacts.
>
> I guess this isn’t good news right?
> But don’t worry too much, there’s a way we can fix this privacy issue. All i require is a Bitcoin payment of £ 850  which i think is a fair price considering the circumstances.
> …
> You have only 48 hours after reading this e-mail to send payment (Be warned i know when you have opened and read this email, i have placed a pixel image inside it. Which enables me to know when you have opened the messaged on exactly what day and time)

Now, I work in IT, and so many red flags become apparent straight away. Firstly, it’s pretty unlikely that a hacker’s going to be able to hack a porn website - not impossible, but unlikely. Porn is a big industry online, and my assumption is that most porn sites know a thing or two about security.

Secondly, it’s also unlikely that websites can inject malware onto your PC these days. Modern browsers are what’s known as “evergreen”, which means that they automatically update themselves to the latest version, with new features and security fixes - the days of people being stuck on an old browser like Internet Explorer 6 are thankfully gone. Given that [most people are using](http://gs.statcounter.com/browser-market-share) these modern evergreen browsers, it’s unlikely that there’s a security flaw that hackers can use through your browser to infect your PC.

The idea that these hackers have also hacked my mobile phone is silly - one hack is hard, but two hacks of different devices using different operating systems is much harder.

So, I ignored the warning that I have to send the money within 48 hours, and unsurprisingly nothing scary happened. In fact, the claim that there was a one pixel image in the email that was tracking me was another red flag - not only do gmail and other email providers block this kind of tracking by default, but I checked the HTML source of the email they sent me and there was no tracking image in there in the first place.

Yesterday I was phoned by a friend who’s received several very similar emails, but his emails have one important difference - they include a password:

> Hello!
> I'm a member of an international hacker group.
>
> As you could probably have guessed, your account xxxx@xxxxxxxxxx.co.nz was hacked, because I sent message you from it.
>
> Now I have access to you accounts!
> For example, your password for xxxx@xxxxxxxxxx.co.nz is xxxxxxxxx
> Within a period from July 17, 2018 to October 3, 2018, you were infected by the virus we've created, through an adult website you've visited.
> So far, we have access to your messages, social media accounts, and messengers.
> Moreover, we've gotten full damps of these data.
>
> We are aware of your little and big secrets...yeah, you do have them. We saw and recorded your doings on porn websites. Your tastes are so weird, you know..
>
> But the key thing is that sometimes we recorded you with your webcam, syncing the recordings with what you watched!
> I think you are not interested show this video to your friends, relatives, and your intimate one...
>
> Transfer $800 to our Bitcoin wallet

And another:

> Hi, dear user of xxxxxxxxxx.co.nz
> We have installed one RAT software into you device.
> For this moment your email account is hacked (see on "from address", I messaged you from your account).
> Your password for xxxx@xxxxxxxxxx.co.nz: xxxxxxxxx
> …
> I posted my virus on porn site, and then you installed it on your operation system.
> When you clicked the button Play on porn video, at that moment my trojan was downloaded to your device.
> After installation, your front camera shoots video every time you masturbate, in addition, the software is synchronized with the video you choose.

This was an interesting development, as the password they gave him in the emails was one that my friend has used in the past. Despite this, I’ve told him not to worry - he hasn’t been hacked. Rather, it appears that the scammers are looking up usernames and, if available, passwords in old databases of compromised user accounts and using them to scare people. So if you receive an email that tells you your username and password for a website, there’s no need to panic - although there are a few things you can do:

Firstly, if you’re using the same password in multiple places, change it - and make it different for each site. I use a simple idea of having a part of my password for each site relate to the site itself. Maybe take the numerical value of the first three letters of the website name and add them to the end of a standard password that you can use.

Make sure your password has upper and lowercase characters, numbers and punctuation. This makes it harder for people to decode your password from the lists of encrypted passwords that hackers usually get their hands on.

Make your password long. Maybe use four or five memorable words, and use the numbers and punctuation to separate the words.

Turn on two factor authentication where you can - this is where a phone app can generate a code that you use, along with your password, to log in. This ensures that even with your password, nobody else can log into your account. Just make sure to click “trust this device” when you’ve logged in on a PC or phone where you want to stay logged in.

You can also use a password manager - most modern password management software is secure, and will generate a unique long random password for each website you use. You then only need to know the one password to access your password manager - make it long and secure!

Lastly, you can use a website to see if your details have been stolen:

[https://haveibeenpwned.com/](https://haveibeenpwned.com/)
