---
title: Restore an iOS13 backup to iOS12 or earlier
date: 2019-10-08
layout: Post
categories:
  - HowTo
tags:
  - Hardware
  - Apple
  - iPhone
  - IOS
---

I recently had to move from a nice shiny new iPhone XR to an older, slower iPhone 6 Plus. I started by making a backup of my iPhone XR, which was running iOS 13. Then I tried to restore this backup to the iPhone 6, but received an error:

<!-- more -->

> The backup cannot be restored to this iPhone because the software on the iPhone is too old.
>
> To restore this iPhone from this backup, you must first set up the iPhone as new and restore the software to the latest version.

It turns out that my older iPhone is stuck on iOS 12 (Apple only usually allow a few previous generations of phone to upgrade to the newest version of iOS), and Apple have flagged these newer backups as being incompatible with iOS12.

Thankfully, there's a fix, and it just requires the use of a local iTunes backup rather than an iCloud backup. Simply backup your iOS13 phone through iTunes, and then find the backup folder in `C:\Users\<user>\AppData\Roaming\Apple Computer\MobileSync\Backup\XXXXXXXX-XXXXXXXXXXXXXXXX`. Inside that folder is a file called `info.plist`. Open the file, and edit the following XML:

```xml
	<key>Product Version</key>
	<string>13.1.2</string>
```

Replace the version string with the version of iOS on the phone you are restoring to, for example:

```xml
	<key>Product Version</key>
	<string>12.4.2</string>
```

Once this has been done, close and re-open iTunes, and then attempt the restore. Your phone should accept the restore data, and all will be right with the world.

For more details, there's a video showing how to do this:

@[youtube](https://youtu.be/Ph5MGBeClv8)
