---
title: Into War
date: 2019-10-09
layout: Post
categories:
  - Software
tags:
  - DOS
  - Small
---

A friend recently let me know of a [tiny program](https://www.pouet.net/prod.php?which=82902) that runs a 3D scene with both audio and video. The executable, a .com file, is 64 bytes in size (yeah, that's pretty damn small!), and the camera angle is a flyover of a grassy field with a blue sky above. The audio is a single note, with the sound of a helicopter's whirring blades overlaid on it, and a swooshing noise that sounds like the wind. It sounds too amazing to be real, especially when you've seen the video:

<!-- more -->

@[youtube](https://youtu.be/CAAuIgjrZWY)

## DOSBox

Being inquisitive and skeptical, I decided to grab the code and try to run it in [DOSBox](https://www.dosbox.com/). Luckily, the developer had included a config file for DOSBox in his code archive. All I needed to do was install DOSBox and launch the binary.

First, installing software on Windows is a lot easier if we use [Chocolatey](https://chocolatey.org):

```
choco install -y dosbox
```

## Launching

Once DOSBox is installed, we just need to find out which folder it was installed to (`"C:\Program Files (x86)\DOSBox-0.74-3\`) and figure our our command to run in powershell:

```powershell
& "C:\Program Files (x86)\DOSBox-0.74-3\DOSBox.exe" -fullscreen -conf .\dosbox-0.74.conf -c "mount C ." -c "C:\in2war64.com"
```

The command line options above run DOXBox fullscreen (`-fullscreen`), load our custom config (`-conf .\dosbox-0.74.conf`), mount the current folder as the C drive (`-c "mount C ."`), and launch the binary from the C drive (`"C:\in2war64.com"`).

This command can be dropped into a powershell script file in the same folder as the code, so that we can run it easily. Just create a file with a .ps1 extension (I used `dosbox.ps1`) and double click on the file to launch.

## What? How?

Here's the code in hex (4 rows of 16 bytes), just to show that it's only 64 bytes:

```hex
14 13 BA 30 03 F3 6E CD 10 B8 4F 0C E6 40 E2 F7
1F 68 00 A5 07 B8 CD CC F7 E7 89 E8 80 EE F6 F6
F6 92 2C 7F F6 EA 02 16 6C 04 92 30 C6 F6 EE D4
09 9C 9D 2C 74 AA AF EB DC C9 38 99 46 67 51 7F
```

The important thing to realise here is that these 64 bytes of code are not creating a 3D environment with textured grass, sky and a soundtrack. The code uses a few clever tricks to fake these things. Each trick does something to either the screen or audio output, and when put together they end up giving the impression of a 3D flyover of a field.

Someone far cleverer than me has [delved into what's going on]((https://www.reddit.com/r/tinycode/comments/d4kdco/3d_animation_with_sound_in_64_bytes_of_assembler/f0r9kob/)) over on Reddit. I recommend having a read of that comment to get a better idea of how it all works.
