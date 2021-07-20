---
title: Into War
date: 2019-10-09
layout: Post
categories:
  - Code
tags:
  - Software
  - DOS
  - Small
---

A friend recently let me know of a [tiny program](https://www.pouet.net/prod.php?which=82902) that runs a 3D scene with both audio and video. How tiny? The executable, a .com file, is 64 bytes in size (yeah, that's pretty damn small!), and the camera view is a flyover of a grassy field with a blue sky above. The audio is a single note played once, overlaid with the sound of a helicopter's whirring blades and a periodic swooshing noise that sounds like the wind. It seems too amazing to be real, especially when you've seen the video:

<!-- more -->

@[youtube](https://youtu.be/CAAuIgjrZWY)

## DOSBox

Being inquisitive and skeptical, I decided to grab the code and try to run it in [DOSBox](https://www.dosbox.com/). Luckily, the developer had included a config file for DOSBox in his code archive. All I needed to do was install DOSBox and launch the binary.

First, installing software on Windows is a lot easier if we use [Chocolatey](https://chocolatey.org):

```
choco install -y dosbox
```

## Launching

Once DOSBox is installed, we just need to find out which folder it was installed to (`C:\Program Files (x86)\DOSBox-0.74-3\`) and figure our our command to run in powershell:

```powershell
& "C:\Program Files (x86)\DOSBox-0.74-3\DOSBox.exe" -fullscreen -conf .\dosbox-0.74.conf -c "mount C ." -c "C:\in2war64.com"
```

The command line options above run DOXBox fullscreen (`-fullscreen`), load our custom config (`-conf .\dosbox-0.74.conf`), mount the current folder as the C drive (`-c "mount C ."`), and launch the binary from the C drive (`"C:\in2war64.com"`).

This command can be dropped into a powershell script file in the same folder as the code, so that we can run it easily. Just create a file with a .ps1 extension (I used `dosbox.ps1`) and double click on the file to launch.

## What? How?

The important thing to realise here is that these 64 bytes of code are not creating a 3D environment with textured grass, sky and a soundtrack. The code uses a few clever tricks to fake these things. Each trick does something to either the screen or audio output, and when put together they end up giving the impression of a 3D flyover of a field.

Someone far cleverer than me has [delved into what's going on](https://www.reddit.com/r/tinycode/comments/d4kdco/3d_animation_with_sound_in_64_bytes_of_assembler/f0r9kob/) over on Reddit. I recommend having a read of that comment to get a better idea of how it all works. However, ignore the thread's title - "3D animation with sound in 64 bytes of assembler" - as this is clearly not a proper 3D animation, but rather some graphical smarts that end up looking like a rendered 3D scene. It seems like a little bit of maths is used to create a single line of varying green colour pixels, wider than the screen, starting at the bottom of the screen. The lines are moved up the screen towards the "horizon", and scaled (shrunk) as they are moved up - giving the illusion of perspective. The lines of pixels only appear to change every few lines, which creates a checkerboard effect. Above this horizon the screen is simply painted blue. A new line of pixels is injected at the bottom of the screen each time a line is moved up, and the overall effect looks like a flat plane of grass heading off into the distance, with the movement of these lines of pixels giving the impression that the camera is flying over them.

The Reddit breakdown suggests that the audio is created from simply sending the code's own binary to the MIDI port. My suspicion there is that the coder just blindly tried this approach, and then when he found that the set of noises it made were reminiscent of a helicopter flying into battle, chose to name the program accordingly. This is a much more believable scenario than the idea that the code was somehow deliberately written in a way that was designed to make these particular sounds when fed to the MIDI port.

As far as my analysis is concerned, here's the code in hex (4 rows of 16 bytes), just to show that it's only 64 bytes:

```hex
14 13 BA 30 03 F3 6E CD 10 B8 4F 0C E6 40 E2 F7
1F 68 00 A5 07 B8 CD CC F7 E7 89 E8 80 EE F6 F6
F6 92 2C 7F F6 EA 02 16 6C 04 92 30 C6 F6 EE D4
09 9C 9D 2C 74 AA AF EB DC C9 38 99 46 67 51 7F
```

And here's the program loaded into the free version of [IDA](https://www.hex-rays.com/products/ida/support/download_freeware.shtml) (16 bit import):

```
seg000:0000 ; Format      : Binary file
seg000:0000 ; Base Address: 0000h Range: 0000h - 0040h Loaded length: 0040h
seg000:0000
seg000:0000                 .686p
seg000:0000                 .mmx
seg000:0000                 .model flat
seg000:0000
seg000:0000 ; ===========================================================================
seg000:0000
seg000:0000 ; Segment type: Pure code
seg000:0000 seg000          segment byte public 'CODE' use16
seg000:0000                 assume cs:seg000
seg000:0000                 assume es:nothing, ss:nothing, ds:nothing, fs:nothing, gs:nothing
seg000:0000                 adc     al, 13h
seg000:0002                 mov     dx, 330h
seg000:0005                 rep outsb
seg000:0007
seg000:0007 loc_7:                                  ; CODE XREF: seg000:000E↓j
seg000:0007                 int     10h             ; - VIDEO -
seg000:0009                 mov     ax, 0C4Fh
seg000:000C                 out     40h, al         ; Timer 8253-5 (AT: 8254.2).
seg000:000E                 loop    loc_7
seg000:0010                 pop     ds
seg000:0011                 push    0A500h
seg000:0014                 pop     es
seg000:0015                 assume es:nothing
seg000:0015
seg000:0015 loc_15:                                 ; CODE XREF: seg000:0037↓j
seg000:0015                 mov     ax, 0CCCDh
seg000:0018                 mul     di
seg000:001A                 mov     ax, bp
seg000:001C                 sub     dh, 0F6h
seg000:001F                 div     dh
seg000:0021                 xchg    ax, dx
seg000:0022                 sub     al, 7Fh
seg000:0024                 imul    dl
seg000:0026                 add     dl, ds:46Ch
seg000:002A                 xchg    ax, dx
seg000:002B                 xor     dh, al
seg000:002D                 imul    dh
seg000:002F                 aam     9
seg000:0031                 pushf
seg000:0032                 popf
seg000:0033                 sub     al, 74h
seg000:0035                 stosb
seg000:0036                 scasw
seg000:0037                 jmp     short loc_15
seg000:0037 ; ---------------------------------------------------------------------------
seg000:0039                 db 0C9h
seg000:003A                 db 38h, 99h, 46h, 67h, 51h, 7Fh
seg000:003A seg000          ends
seg000:003A
seg000:003A
seg000:003A                 end
```
