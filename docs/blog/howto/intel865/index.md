---
title: Use a 1440 x 900 Resolution on Intel 865
slug: intel865
date: 2009-03-31
layout: Post
categories:
  - HowTo
tags:
  - Hardware
  - Intel865
  - Drivers
---

As my laptop is currently b0rked, I'm using a desktop PC as my main machine. This PC has an onboard Intel 865 Video Card, but annoyingly doesn't offer the 1440x900 native resolution of my Dell monitor. After a lot of searching, I found a [blog post](http://www.jjclements.co.uk/index.php/2007/07/19/intel-gfx-driver-resolution-fix/) which came tantalizingly close to offering a solution.

<!-- more -->

The suggestion in the comments of the post to use a Dell driver didn't give me the required resolution, but another comment suggested using the [IEGD](http://downloadcenter.intel.com/Product_Filter.aspx?ProductID=2159) (Intel Embedded Graphics Drivers) to build your own driver with the required resolution. I searched the internets quickly, but couldn't find any how-tos, so I decided to just download and install the IEGD and see how it worked (I grabbed the package
[Intel Embedded Graphics Drivers (IEGD) with CED for 85x](http://downloadcenter.intel.com/Detail_Desc.aspx?agr=Y&ProductID=2159&DwnldID=16732&strOSs=44&OSFullName=Windows*%20XP%20Professional&lang=eng)).

It ended up being fairly easy to create an install package with my custom resolution added to it. To do this, firstly go to the directory you installed IEGD to and run iegd-ced.exe.

![IEGD](http://static.honeychurch.org/images/IEGD/IEGD.jpg)

Within IEGD, first click on New Configuration to create a new config. Name your config and select the Intel(R) 855GME Chipset. Add the CRT port (or whatever ports your card has) and click next.

![Port](http://static.honeychurch.org/images/IEGD/Config1.jpg)
On the second page, give the port a name and tick the two user-defined DTD boxes

![DTD](http://static.honeychurch.org/images/IEGD/Config2.jpg)
Next click on New DTD. Give your new DTD a filename and select the Mode Lines option.

![Boxes](http://static.honeychurch.org/images/IEGD/DTD1.jpg)
At the bottom of the page are boxes that we need to fill with values...

![Modelines](http://static.honeychurch.org/images/IEGD/DTD2.jpg)
To find out the Mode Line values for your monitor, download [MonInfo](http://www.entechtaiwan.com/util/moninfo.shtm). Run the program and have a look for the native/Preferred Timing Modeline.

![Values](http://static.honeychurch.org/images/IEGD/MonInfo.jpg)
Grab the values for this modeline (the numbers after the resolution in quotes) and add them to the boxes for our DTD.

![NewDTD](http://static.honeychurch.org/images/IEGD/DTD3.jpg)
Click finish, then tick our new DTD in the Custom Display Timing Descriptors box.

![Finish](http://static.honeychurch.org/images/IEGD/Config3.jpg)
Finally, click Finish, or Next, Finish if you're nosey and want to see the other options.

Now that we have our configuration, click on New Package to make a new installation package. Give the Package a File Name, tick our new Configuration and tick the relevant OS (probably Windows XP/XPe). Click Finish.

![Package](http://static.honeychurch.org/images/IEGD/Package.jpg)
To build our installer package, select the package we created (inside the package folder on the left) and click Generate Installation.

![Build](http://static.honeychurch.org/images/IEGD/Installation.jpg)
Our package will now build...

![Installation](http://static.honeychurch.org/images/IEGD/Building.jpg)
...and will show up in the left pane under installation.

![Zip](http://static.honeychurch.org/images/IEGD/Built.jpg)
The package zip file is available under C:\Program Files\IEGD\workspace\installation\. In the case of my package, it's at C:\Program Files\IEGD\workspace\installation\1440x900.pkg_installation\IEGD_8_0_2_Windows\ [IEGD_8_0_2_Windows.zip](http://static.honeychurch.org/images/IEGD/IEGD_8_0_2_Windows.zip).

After installing this driver and rebooting my machine, I was able to select my custom DTD resolution and I am once again a very happy chappy!

![Resolution](http://static.honeychurch.org/images/IEGD/NewRes.jpg)
