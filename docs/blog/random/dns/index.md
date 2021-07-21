---
title: Domain Names are backwards
slug: dns
date: 2008-03-23
layout: Post
categories:
  - Alternatives
  - Software
tags:
  - DNS
  - Domain
---

Domain names are backwards - and I'm [not the only person](https://www.bcs.org/content/conWebDoc/3337) in the world who thinks so.

<!-- more -->

Why do I think that this is the case? Put simply, a domain name is the only part of of a URL (except maybe for the protocol) that doesn't flow from left to right from least specific to most specific. Reversing the domain name part of a URL would allow domain names to be parsed more easily, and would make configuring web servers (e.g. Virtual Hosts, CSPs) and other software much easier.

## URLs

A web URL can be broken down into several parts. As an example, here's the URL of this page:

[https://mark.honeychurch.org/blog/random/dns/](https://mark.honeychurch.org/blog/random/dns/)

A more fully featured URL might look like this:

[https://mark:P4ssw0rd@mark.honeychurch.org:443/blog/random/dns/?type=full#urls](https://mark:P4ssw0rd@mark.honeychurch.org:443/blog/random/dns/?type=full#urls)

The important parts of this URL are:

- **https** - the protocol (http or https for web pages)
- **mark** - an optional username (for simple authentication)
- **P4ssw0rd** - an optional password (for simple authentication)
- **mark.honeychurch.org** - the domain name
- **80** - the port to connect to (this is not needed if the default http port of 80 or https port of 443 is used)
- **blog/random/dns/** - the path to the file
- **type=full** - query parameters to pass to the server
- **urls** - the hash, which acts as a bookmark and tells the browser where on the page to scroll to

In general, these are in some kind of order of specificity of the connection. It could be argued that the protocol and username/password are in the wrong place, but we'll cover that later. For now, let's ignore those and look at everything from the domain name onwards. The order of these pieces of information flows from the least specific (the server) to the most specific (the bookmark on the web page). Firstly, the domain name gives us the IP address to connect to (once we've performed a DNS lookup). Then, once we know what server we're connecting to the port is next, which tells us how to make a connection to the server. Next up is the file path, which (for static sites at least) tells the server where the file to be served to us is located. Then we have our parameters to pass to the file, in case there's active code being run by the server that needs to be passed some variables. Finally we have our hash, or bookmark, which will cause the page to scroll to an anchor point such as a subheading.

Not only is this connection a hierarchical order, but within the file path there's also a hierarchical order from the base folder (/), through subfolders to a file. In logical terms, these folders are used to categorise what we're viewing on the site. The first folder is a general category, with subfolders drilling down through sub-categories.

Now, when we look at the domain name, we see the opposite. mark.honeychurch.org doesn't flow from the least specific to most specific from left to right - it's the opposite. When connecting to a domain name, the first required part of the name is the Top Level Domain - TLD. In this website's case, it's a **.org** domain. The next part, **honeychurch**, is the domain name that I own. Within this domain name, I can use the root domain name (honeychurch.org) and any subdomains that I would like to use (such as **www.honeychurch.org**, **mark.honeychurch.org**, etc).

## Problems

This ordering issue causes problems when I want to do clever things will machine processing domain names. To whitelist a domain and its subdomains, for example, requires use of wildcards - and sometimes multiple wildcards. So, if I wanted to cover my root domain and all subdomains, making sure my rule covers at least two levels of subdomains, I might have to use:

```csv
honeychurch.org, *.honeychurch.org, *.*.honeychurch.org
```

If domain names were reversed, it would be as simple as using:

```csv
org.honeychurch
```

Other issues crop up in places like Content Security Policies. For this site, because I've embedded a [Twitter feed](/status/twitter/) and I use a CSP to secure the site, I've needed to add this to my CSP:

```csp
img-src https://pbs.twimg.com https://ton.twimg.com; frame-src https://platform.twitter.com https://syndication.twitter.com;
```

Now, if I was happy allowing any subdomain of Twitter's, and if domain names were reversed, I would have been able to shorten this to:

```csp
img-src https://com.twimg; frame-src https://com.twitter;
```

# A better URL order

Referring to our earlier list, here's the current order of our URL:

- protocol
- username
- password
- domain
- port
- path
- query
- hash

A more sensible order would be:

- _reversed_ domain
- port
- protocol
- username
- password
- path
- query
- hash

If we simply juggle our URL around, and use some new separators, it would look like this:

[org.honeychurch.mark:8080|https^mark:P4ssw0rd/blog/random/dns/?type=full#urls](https://mark:P4ssw0rd@mark.honeychurch.org:443/blog/random/dns/?type=full#urls)

And a simpler URL, such as for this page, would look like:

[org.honeychurch.mark/blog/random/dns/](https://mark.honeychurch.org/blog/random/dns/)

## Separating connection and path

It appears that the scheme above is a little hard to read, and also splits the two hierarchal components - domain name and path - which may be less than ideal.

A cleaner to read, and easier to implement, scheme might move connection information (our port) to the start of the URL, allowing the domain and path to always sit side by side:

- protocol
- username
- password
- port
- _reversed_ domain
- path
- hash
- query

[https://mark:P4ssw0rd@8080:org.honeychurch.mark/blog/random/dns/?type=full#urls](https://mark:P4ssw0rd@mark.honeychurch.org:443/blog/random/dns/?type=full#urls)

## HTTPS

Currently, when a domain name is typed into a browser without a protocol (http or https) at the beginning, the browser defaults to assuming an http connection. The URL shown in the address bar for browsers will be **blank** for a regular HTTP request, and will show **https://** for a secure HTTPS request:

![HTTP](./http.jpg)

![HTTPS](./https.jpg)

Given the recent push towards encrypting pages by default by the [EFF](https://www.eff.org/), and the ease of obtaining an SSL certificate with [Let's Encrypt](https://letsencrypt.org/) and [Certbot](https://certbot.eff.org/), maybe it's time for this to be reversed. It would be good to see https as the default connection method, and for http sessions to be highlighted by showing the protocol in the address bar.
