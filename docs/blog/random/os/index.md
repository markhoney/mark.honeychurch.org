---
title: My thoughts on the perfect OS
slug: os
date: 2005-05-26
layout: Post
categories:
  - Alternatives
  - Software
tags:
  - XML
  - Config
---

As a way to air my frustrations at inconsistencies and bad design decisions in the Linux OS, specifically server distributions, I put together a list of ways I thought that the OS and its many daemons could be standardised and simplified. Here are my thoughts:

<!-- more -->

## Config files as XML

- DTDs allow proper sanity checks
- DTD and XSL allow easy editing through text and graphical interfaces - config programs are updated dynamically!

Offenders: _Sendmail, Procmail_

## Sensible command line defaults

e.g. For tar, default should be file as an input, so tar -f should be redundant.

## Standardised command-line options

e.g.

- --help for help
- -i for input file
- -o for output file
- -v for verbose (with -vv, -vvv)
- etc.

Currently, verbose and very verbose can be:

- -v, -vv, -vvv (tcpdump)
- -v, -v -v, -v -v -v (lilo)
- -e, -e -e || -ee (netstat)

Offenders: _lilo, netstat_

## Consistent file locations

Program config files in /etc/program/xxx.conf.

## Consistent file names

program.conf, programd.conf, program-function.conf, etc

Offenders: _sshd_config_

## Sensible filesystem layout

A la [http://www.gobolinux.org/?page=at_a_glance](http://www.gobolinux.org/?page=at_a_glance)

## Easy deploy packages

Packages as a single file (zip or similar), can be dragged and dropped to a folder and run from there.

## Standardised Logs

Log files follow a consistent XML DTD, with fields for date, time, event code, description, etc.
