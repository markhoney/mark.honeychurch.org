---
title: A Better Path
date: 2012-01-09
layout: Post
categories:
  - Code
tags:
  - Software
  - Picard
  - Music
  - ID3
---

```
$setmulti(_spokentypes,spokenword;interview;audiobook,;)
$setmulti(_varioustypes,soundtrack;dj-mix,;)
$set(_secondary,$upper($left(%_secondaryreleasetype%,1))$right(%_secondaryreleasetype%,$sub($len(%_secondaryreleasetype%),1)))
$set(_various,$if($or($eq(%albumartist%,Various Artists),$inmulti(%_varioustypes%,%_secondaryreleasetype%)),true,))
$set(_spoken,$if($inmulti(%_spokentypes%,%_secondaryreleasetype%),true,))
$set(_root,$if(%_spoken%,Spoken,Music))
$set(_second,$if(%_various%,Various,Artists))
$set(_artist,$if(%_various%,%_secondary%,$if2($swapprefix(%albumartist%),$swapprefix(%artist%),%albumartistsort%,%artistsort%)))
$set(_artist,$rreplace($replace($replace($replace($rreplace(%_artist%,[/:<>|\\\\], - ),*,#),?,),",'),\\s+, ))
$set(_alpha,$if(%_various%,,$firstalphachar(%_artist%,#)))
$set(_year,$if2(%originalyear%,$truncate(%originaldate%,4),$truncate(%date%,4)))
$set(_album,$rreplace($replace($replace($replace($rreplace(%album%,[/:<>|\\\\], - ),*,#),?,),",'),\\s+, ))
$set(_disc,$if($gt(%totaldiscs%,1),$if(%discsubtitle%,Disc %discnumber% - %discsubtitle%,Disc %discnumber%)))
$set(_disc,$rreplace($replace($replace($replace($rreplace(%_disc%,[/:<>|\\\\], - ),*,#),?,),",'),\\s+, ))
$set(_file,$num(%tracknumber%,2). %title%$if($eq(%compilation%,1), - %artist%))
$set(_file,$rreplace($replace($replace($replace($rreplace(%_file%,[/:<>|\\\\], - ),*,#),?,),",'),\\s+, ))
$set(TOFN,$rreplace(%_root%/%_second%/%_alpha%/%_artist%/$if(%_year%,%_year% - ,)%_album%/%_disc%/%_file%.mp3,/+,/))
```
