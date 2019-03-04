/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6d50c1f9d9dd522a1dc37e91d901e855"
  },
  {
    "url": "assets/css/0.styles.css",
    "revision": "8740fa21a38af1294aa472803268d343"
  },
  {
    "url": "assets/img/0001.jpg",
    "revision": "2faa06a35921433d54252f8479e1bd82"
  },
  {
    "url": "assets/img/0002.jpg",
    "revision": "210675b52f3fea0fdcc32e3b5bc2d83c"
  },
  {
    "url": "assets/img/0003.jpg",
    "revision": "5dd79c433772f439820a7cec054e3c87"
  },
  {
    "url": "assets/img/0004.jpg",
    "revision": "5238b9fe733da970884e84011176fd4d"
  },
  {
    "url": "assets/img/0005.jpg",
    "revision": "0b0c2c7f32af57eb66db78d7f5651f0e"
  },
  {
    "url": "assets/img/0006.jpg",
    "revision": "8eeb7d1faff119aa05bbd725eb866692"
  },
  {
    "url": "assets/img/0007.jpg",
    "revision": "155908dccd2eae02518611f970fd60eb"
  },
  {
    "url": "assets/img/0008.jpg",
    "revision": "73d2312a0c2fd4edb2c1cf8bafaca122"
  },
  {
    "url": "assets/img/0009.jpg",
    "revision": "f16b9dc8019c9fd0c7a6b65344ebd0a8"
  },
  {
    "url": "assets/img/0010.jpg",
    "revision": "ccc6f9649b0e003cbbc8a4c59f1f9d1e"
  },
  {
    "url": "assets/img/0010e6dd-614.jpg",
    "revision": "c880de19a7850e13abfb360ae8e0f845"
  },
  {
    "url": "assets/img/1_Aaqc9L1Hc62hBg_dpNgBKg.png",
    "revision": "541564cb6c0b6bc7c2cb9f04a5bc6516"
  },
  {
    "url": "assets/img/13323257_1129249003764917_3406132001753365037_o.jpg",
    "revision": "1846194c731dfd61cf6d21a8249fc033"
  },
  {
    "url": "assets/img/20181007T1150-0353-CNS-ASIA-BIBI-FAMILY.jpg",
    "revision": "68f2da9184dfb48cc63896959b933c5a"
  },
  {
    "url": "assets/img/40377012_280725902746525_6686634510680850432_n.jpg",
    "revision": "47173f4289c0b6ce4711b5588938961a"
  },
  {
    "url": "assets/img/40395177_1711474995627730_3288412336901062656_n.jpg",
    "revision": "3e4a097ee5507cecdfbf53f1f97a58a8"
  },
  {
    "url": "assets/img/40475514_1743380235760301_1815240873655402496_o.jpg",
    "revision": "f69e4d4acd2d0062240835524ee7e0ac"
  },
  {
    "url": "assets/img/40522668_267609894074794_2405158248123465728_n.jpg",
    "revision": "839b4737a329f34cf772888eb9649b98"
  },
  {
    "url": "assets/img/42264990_1710084992436132_3669443693460324352_n.jpg",
    "revision": "133d4c2636bf3ee9ac167c161df093f2"
  },
  {
    "url": "assets/img/42328698-1-f.jpg",
    "revision": "9580da6a38672fcf47990b4038b2892e"
  },
  {
    "url": "assets/img/46995988_287108111914527_8172235991533223936_n.jpg",
    "revision": "c9452d3e6fa78f7a5e162a6236de47b7"
  },
  {
    "url": "assets/img/4F731F88-CC30-4DDB-B5B8-BAF285F0403F.jpg",
    "revision": "3b9613bb3c41d60eced2b664387e2e64"
  },
  {
    "url": "assets/img/81XEEM7itDL._SY606_.jpg",
    "revision": "4cd4ad31f6e11eefc394da3379c1a675"
  },
  {
    "url": "assets/img/america.jpg",
    "revision": "edf03d90225c96e99f85f863301e2554"
  },
  {
    "url": "assets/img/australiawork.jpg",
    "revision": "6a01081f01170d75908e825b97b4503a"
  },
  {
    "url": "assets/img/azerbaijan.jpg",
    "revision": "88b3385603e0e4ac503342bfee30b1ee"
  },
  {
    "url": "assets/img/Beard.jpg",
    "revision": "bd359e7701f7363cb4ac031c29642afe"
  },
  {
    "url": "assets/img/bristol.jpg",
    "revision": "12527f4d65883268549347ba3172a296"
  },
  {
    "url": "assets/img/cambodia.jpg",
    "revision": "60319b2067ce0447ea73fd769297d7c8"
  },
  {
    "url": "assets/img/china.jpg",
    "revision": "e666c64c4c3b9d62f47e5315bc67f9fd"
  },
  {
    "url": "assets/img/china2.jpg",
    "revision": "d479fabeb998485319c5689e3cdff42f"
  },
  {
    "url": "assets/img/circuit.jpg",
    "revision": "1145fe53fe5d77aa5577cef2c564f689"
  },
  {
    "url": "assets/img/Cone.jpg",
    "revision": "7aaba7605f9a62cc1d95157afe07ef67"
  },
  {
    "url": "assets/img/dia.jpg",
    "revision": "2d87b7cdfa905b3728b2d8e279a158fc"
  },
  {
    "url": "assets/img/egypt.jpg",
    "revision": "c139570d24fabe496dce6a8f4fbb4dce"
  },
  {
    "url": "assets/img/eu.jpg",
    "revision": "870c5227b9f8bf5c8758fb2d1c5315bc"
  },
  {
    "url": "assets/img/f7e40afb80fc81b22816cded8cf58c27.jpg",
    "revision": "e9682a10806e5f27d81d77606b17be00"
  },
  {
    "url": "assets/img/geni.jpg",
    "revision": "97827d221d61d2377968b38190dd6820"
  },
  {
    "url": "assets/img/georgia.jpg",
    "revision": "84dfc9cd7c1ff21e68e06d8364ead3bb"
  },
  {
    "url": "assets/img/Gyro.jpg",
    "revision": "b3bcad4f5cc9a1db888c64a7c12558d1"
  },
  {
    "url": "assets/img/Hello.jpg",
    "revision": "980479d274226c46f8f38ffa121fc0b4"
  },
  {
    "url": "assets/img/Hello2.jpg",
    "revision": "523dc7bfcc612b5ea5bc107711b6624f"
  },
  {
    "url": "assets/img/hk.jpg",
    "revision": "548aca324b9f4d8bfe711211391b99e0"
  },
  {
    "url": "assets/img/image1.jpg",
    "revision": "a1c82c2b1d8c4abce18a9f1a1f2ce8a5"
  },
  {
    "url": "assets/img/image1.png",
    "revision": "9a2032436d7304d3f9b29258abcf6647"
  },
  {
    "url": "assets/img/image10.png",
    "revision": "4cc0bfe1b099c8a0770d5456cdda3b32"
  },
  {
    "url": "assets/img/image11.png",
    "revision": "88e6ae7ff88ad75642a2e61b532627e3"
  },
  {
    "url": "assets/img/image12.png",
    "revision": "aaaf19d78420191ca8fb0e9894de9231"
  },
  {
    "url": "assets/img/image13.png",
    "revision": "1cb2261b4e94fa1315906c47112bdd95"
  },
  {
    "url": "assets/img/image2.jpg",
    "revision": "c75f4a6ceae0c2f6ef2a1006bc3935f6"
  },
  {
    "url": "assets/img/image2.png",
    "revision": "a5d62cfeb2dd983748a60a4b8cb22061"
  },
  {
    "url": "assets/img/image3.png",
    "revision": "afcb4d0a5b6716c8de31bf74c9746d33"
  },
  {
    "url": "assets/img/image4.png",
    "revision": "6b241afccad8009a6555f1178982cdf9"
  },
  {
    "url": "assets/img/image5.png",
    "revision": "553e7bd193e070885ba7c363c49c27e6"
  },
  {
    "url": "assets/img/image6.png",
    "revision": "797793c22464a3893b4dd83ceebb69cc"
  },
  {
    "url": "assets/img/image7.png",
    "revision": "de5bb410a7127c988e1a8b9d20a50301"
  },
  {
    "url": "assets/img/image8.png",
    "revision": "625afd0bd3b1effea288ab699814b992"
  },
  {
    "url": "assets/img/image9.png",
    "revision": "5922d26bb446b8ccbf5c5bfc577cc701"
  },
  {
    "url": "assets/img/Img_0010.jpg",
    "revision": "34dce9df1d56340e029ce7c39f393a35"
  },
  {
    "url": "assets/img/Img_0017.jpg",
    "revision": "4ab173b9dbdd088c2be1e11c10621ab1"
  },
  {
    "url": "assets/img/Img_0036.jpg",
    "revision": "acfd54e01b9da53024a4e17e9151dac0"
  },
  {
    "url": "assets/img/Img_0038.jpg",
    "revision": "9ebd85fcffa4109ff1862b53ebc54405"
  },
  {
    "url": "assets/img/Img_0042.jpg",
    "revision": "7d67f0925f80e39430afaf3e231869db"
  },
  {
    "url": "assets/img/Img_0045.jpg",
    "revision": "938700d7baa2c444fac02e93ca6ea892"
  },
  {
    "url": "assets/img/IMG_0136.jpg",
    "revision": "219a9711c177acd57a3dca30dc1f0492"
  },
  {
    "url": "assets/img/IMG_0144.jpg",
    "revision": "411349c39fc5de4afe81b241504bb251"
  },
  {
    "url": "assets/img/IMG_0150.jpg",
    "revision": "e77c9913bbde5d0333e0c2884e3abfb8"
  },
  {
    "url": "assets/img/IMG_0156.jpg",
    "revision": "b32bbb0ce50ada2cb6748acb0154ea72"
  },
  {
    "url": "assets/img/IMG_0157.jpg",
    "revision": "9b03760b50680ce984c76c210c9410a8"
  },
  {
    "url": "assets/img/IMG_0158.jpg",
    "revision": "79f0cacebbc62929956d95869fc17ebf"
  },
  {
    "url": "assets/img/IMG_0160.jpg",
    "revision": "2fd5e1d262fe90ccf12573392053f29e"
  },
  {
    "url": "assets/img/IMG_0161.jpg",
    "revision": "ff8baa52776ba0c0e9aef17f1b923d7a"
  },
  {
    "url": "assets/img/IMG_0163.jpg",
    "revision": "b42d89d58d8c82776dbe7a5fb21c27d7"
  },
  {
    "url": "assets/img/IMG_0168.jpg",
    "revision": "913a3c1b61e69047a1f2234de3ace4de"
  },
  {
    "url": "assets/img/IMG_0172.jpg",
    "revision": "a6916ec1fd126b3ee22658bde5de22bd"
  },
  {
    "url": "assets/img/IMG_0184.jpg",
    "revision": "9c4202c60d73c727c0a7a008150e4e56"
  },
  {
    "url": "assets/img/IMG_0188.jpg",
    "revision": "8b4deac976303a74b33b3583026af1f4"
  },
  {
    "url": "assets/img/IMG_0195.jpg",
    "revision": "6ae54d583cca242cc5527789ff993f0a"
  },
  {
    "url": "assets/img/IMG_0238.jpg",
    "revision": "aa6a097dc5a6c0339c9b8f48dabcfc0c"
  },
  {
    "url": "assets/img/IMG_0246.jpg",
    "revision": "627f5ba2ec6677710ef240377af26d45"
  },
  {
    "url": "assets/img/IMG_0254.jpg",
    "revision": "72d56b5c18adb74c46a0262347608a8e"
  },
  {
    "url": "assets/img/IMG_0267.jpg",
    "revision": "eaa50c2b93fbf9f53c031ab18e161744"
  },
  {
    "url": "assets/img/IMG_0411.jpg",
    "revision": "c5a86b985c1c83d99eff189480000a6b"
  },
  {
    "url": "assets/img/IMG_0414.jpg",
    "revision": "a6cfe4bc0109e698ac3902c425215b49"
  },
  {
    "url": "assets/img/IMG_0417.jpg",
    "revision": "4801f962197ca1a53316f6d02f28ef61"
  },
  {
    "url": "assets/img/IMG_0597.jpg",
    "revision": "8cb2cfc774d50921c847b475452bca08"
  },
  {
    "url": "assets/img/IMG_0598.jpg",
    "revision": "73c2fcf3bf65ea16ecba17d83dedc6af"
  },
  {
    "url": "assets/img/IMG_0608.jpg",
    "revision": "4b023f3b58a3dd43cfb56003bc9f2873"
  },
  {
    "url": "assets/img/IMG_1036.jpg",
    "revision": "fc689e8f902ae02c4e110a016b8d210e"
  },
  {
    "url": "assets/img/IMG_1053.jpg",
    "revision": "9e3ae2ae506beea4a17a769022364415"
  },
  {
    "url": "assets/img/IMG_1065.jpg",
    "revision": "5a6b749c0a530a8ce304f5f0e2cb98dd"
  },
  {
    "url": "assets/img/IMG_1067.jpg",
    "revision": "08795ab7707c90960f8bfd71c46a1d81"
  },
  {
    "url": "assets/img/IMG_1068.jpg",
    "revision": "7dad046b5335971a9212e92f1a01a998"
  },
  {
    "url": "assets/img/IMG_1070.jpg",
    "revision": "f6f687c5283864de75650dee712a8ed1"
  },
  {
    "url": "assets/img/IMG_1073.jpg",
    "revision": "010bd32c824f2b4491c0c40e2b97b31c"
  },
  {
    "url": "assets/img/IMG_1103.jpg",
    "revision": "a671e6f68396db3c0f5b327ccacfb590"
  },
  {
    "url": "assets/img/IMG_1191.jpg",
    "revision": "7a958bf5c2f7a8f09747df081e1b575e"
  },
  {
    "url": "assets/img/IMG_1192.jpg",
    "revision": "c06f9db23f40abebd433612ea7fec88b"
  },
  {
    "url": "assets/img/IMG_1538.jpg",
    "revision": "182f5ae830f1359c2ac49200c7411345"
  },
  {
    "url": "assets/img/IMG_1541.jpg",
    "revision": "7dd98a90ef680787fd5c1165f11d3194"
  },
  {
    "url": "assets/img/IMG_1542.jpg",
    "revision": "d412897df04630551d3f9dfe30f550f4"
  },
  {
    "url": "assets/img/IMG_1543.jpg",
    "revision": "9b9d87807bdc74e44a329016531dbc7d"
  },
  {
    "url": "assets/img/IMG_1628.jpg",
    "revision": "4be7699f2931848af7f74d09d5c3f74e"
  },
  {
    "url": "assets/img/IMG_1629.jpg",
    "revision": "afb32cdcdee90d08f2f2af853bc14c4b"
  },
  {
    "url": "assets/img/IMG_1633.jpg",
    "revision": "df6c7b822e91b347fc860483b166d27e"
  },
  {
    "url": "assets/img/IMG_1638.jpg",
    "revision": "088c13eccc6982be5f419fe7df23418b"
  },
  {
    "url": "assets/img/IMG_1702.jpg",
    "revision": "d8a472635d9833bf42eb0ed31bc8fa38"
  },
  {
    "url": "assets/img/IMG_1737.jpg",
    "revision": "dcbf66b5081d7181fed9620d221d547b"
  },
  {
    "url": "assets/img/IMG_1738.jpg",
    "revision": "b8adc2c712a5c1c9c88be85f3ac137f4"
  },
  {
    "url": "assets/img/IMG_1739.jpg",
    "revision": "b94fb7258f018c706b327fcf79f0838e"
  },
  {
    "url": "assets/img/IMG_1932.jpg",
    "revision": "4cc83b01099d4f57e62dd478620b04a6"
  },
  {
    "url": "assets/img/IMG_2050.jpg",
    "revision": "39b5a367ae61f482bc0707631c8a51cc"
  },
  {
    "url": "assets/img/IMG_2246.jpg",
    "revision": "04e4314c427a3b0d86fa2a8f8424b334"
  },
  {
    "url": "assets/img/IMG_2261.jpg",
    "revision": "bec54419a1cff419e67540b29274360b"
  },
  {
    "url": "assets/img/IMG_2262.jpg",
    "revision": "20fcd83026c1bd5c662d6a8788eab359"
  },
  {
    "url": "assets/img/IMG_2486.jpg",
    "revision": "d0d3e07fd807fe51acd4fbdff8f2e4de"
  },
  {
    "url": "assets/img/IMG_2487.jpg",
    "revision": "5d1ce1b75bed63a2ebe22d986fdeda06"
  },
  {
    "url": "assets/img/IMG_2488.jpg",
    "revision": "e33e0296b086388579d75f5c58fe08ce"
  },
  {
    "url": "assets/img/IMG_2630.jpg",
    "revision": "304c93c074ab48ec37ec583a0b4ba882"
  },
  {
    "url": "assets/img/IMG_2631.jpg",
    "revision": "e7136a3718eba7080c743093b5938a3b"
  },
  {
    "url": "assets/img/IMG_2880.jpg",
    "revision": "c69e30acbedfa38ded7d519780b403f7"
  },
  {
    "url": "assets/img/IMG_2881.jpg",
    "revision": "39b1c61578608c2054c4dc3724dec5d5"
  },
  {
    "url": "assets/img/IMG_2885.jpg",
    "revision": "0bb82dcb1eab4d68737719016acea473"
  },
  {
    "url": "assets/img/IMG_2888.jpg",
    "revision": "97f48cc0e3663af378d9868397ed5c8f"
  },
  {
    "url": "assets/img/IMG_3127.jpg",
    "revision": "96979f9923fc08bc1bb65650797629ca"
  },
  {
    "url": "assets/img/IMG_3130.jpg",
    "revision": "ad442c483d7551a356843587ef70ba8e"
  },
  {
    "url": "assets/img/IMG_3131.jpg",
    "revision": "c34a3b52a6e9d52f07dff580e2897200"
  },
  {
    "url": "assets/img/IMG_3141.jpg",
    "revision": "5740b0a1ac693f2b2a5e04ae9cf91613"
  },
  {
    "url": "assets/img/IMG_3170.jpg",
    "revision": "715d7de8a314f743d276e6036fe86eaf"
  },
  {
    "url": "assets/img/IMG_3175.jpg",
    "revision": "498ebab98dd94e979d44e39178f54dbe"
  },
  {
    "url": "assets/img/IMG_3248.jpg",
    "revision": "3fbe8cec7da99693d37717914dd456b3"
  },
  {
    "url": "assets/img/IMG_3257.jpg",
    "revision": "62e8d8386f87557b6e56c9f026d903fd"
  },
  {
    "url": "assets/img/IMG_3279.jpg",
    "revision": "9dbef548966c5ec159a438b0e644237a"
  },
  {
    "url": "assets/img/IMG_3317.jpg",
    "revision": "73112472107dc9fabf4706a54c08655b"
  },
  {
    "url": "assets/img/IMG_3319.jpg",
    "revision": "e92b6e188bdffbb7b270bf5bb4195b09"
  },
  {
    "url": "assets/img/IMG_3323.jpg",
    "revision": "1ba75a439644a9f456e6b68831dbb089"
  },
  {
    "url": "assets/img/IMG_3325.jpg",
    "revision": "267d55ede16e5d56f51904801c1374ad"
  },
  {
    "url": "assets/img/IMG_3326.jpg",
    "revision": "ac3e0bc8b488badfa837b13269bbdfc6"
  },
  {
    "url": "assets/img/IMG_3365.jpg",
    "revision": "4bb44fb7928593f6e12fe596cbd6fa0a"
  },
  {
    "url": "assets/img/IMG_3366.jpg",
    "revision": "148bf5158e76f10339ba405faa2c3ddb"
  },
  {
    "url": "assets/img/IMG_3367.jpg",
    "revision": "e1cf5e47ae6b8c831480a50aaf0b0874"
  },
  {
    "url": "assets/img/IMG_3368.jpg",
    "revision": "aed1f77b5f7e3ddfc6d375b4b03b5987"
  },
  {
    "url": "assets/img/IMG_3369.jpg",
    "revision": "37525c6240d97e9e6725bad9ba929e0c"
  },
  {
    "url": "assets/img/IMG_3461.jpg",
    "revision": "132937214595350fd738949b0943048e"
  },
  {
    "url": "assets/img/IMG_3534.jpg",
    "revision": "1ebd511e0ab1df08c6d44dc4d8872df3"
  },
  {
    "url": "assets/img/IMG_3536.jpg",
    "revision": "c0b2daca322ad9af3fa943ba39dfc094"
  },
  {
    "url": "assets/img/IMG_3560.jpg",
    "revision": "f5e00eb03c4e611daa3fa02101376c5d"
  },
  {
    "url": "assets/img/IMG_3566.jpg",
    "revision": "52c45bc8cb732f03439b36eb9af3cb42"
  },
  {
    "url": "assets/img/IMG_3574.jpg",
    "revision": "c3cc1e87954b801190d9de55137017a0"
  },
  {
    "url": "assets/img/IMG_3585.jpg",
    "revision": "62361fa104f08b6a06168d15f0b341be"
  },
  {
    "url": "assets/img/IMG_3588.jpg",
    "revision": "5f3d7dcfe95ec07ff87b54aa6d3ce87d"
  },
  {
    "url": "assets/img/IMG_3773.jpg",
    "revision": "94870d37ca599b2bb6399bd3c7ae38e5"
  },
  {
    "url": "assets/img/IMG_3794.jpg",
    "revision": "f35bfa8a76c7039ca0ac86bff9f2bd97"
  },
  {
    "url": "assets/img/IMG_3796.jpg",
    "revision": "eb7615168483610260dab6b8b2123460"
  },
  {
    "url": "assets/img/IMG_3800.jpg",
    "revision": "e256eca163ff89bf594f58288cda34f7"
  },
  {
    "url": "assets/img/IMG_3801.jpg",
    "revision": "8642041ee65bd27db2e1a5de55492a56"
  },
  {
    "url": "assets/img/IMG_4019.jpg",
    "revision": "afca07a62510f241d623ae0701f110a2"
  },
  {
    "url": "assets/img/IMG_4953.png",
    "revision": "9906f18ce16216e7021c8400acd471f5"
  },
  {
    "url": "assets/img/IMG_4955.png",
    "revision": "57f9ad1ffdc5e8b6fe4382f30daf5379"
  },
  {
    "url": "assets/img/IMG_4986.jpg",
    "revision": "121524b19ff08d4effaaabb99b6872cb"
  },
  {
    "url": "assets/img/IMG_4993.jpg",
    "revision": "4e506c498ba68632340b79cd9aa49039"
  },
  {
    "url": "assets/img/IMG_4998.jpg",
    "revision": "afef4d73e63feaf93ff0a341ee9b071a"
  },
  {
    "url": "assets/img/IMG_5005.jpg",
    "revision": "93e79874cd19836e200d64da967683b0"
  },
  {
    "url": "assets/img/IMG_5276.jpg",
    "revision": "7c506d717187845bddc6cf4f49de1340"
  },
  {
    "url": "assets/img/IMG_6113.jpg",
    "revision": "456a3358f4875d61271b72edbeebb8ba"
  },
  {
    "url": "assets/img/IMG_6114.jpg",
    "revision": "eb72aed36da17408618306cf02e18cab"
  },
  {
    "url": "assets/img/IMG_7472.jpg",
    "revision": "a0069b02c6517e3b1149e9999eb1a3c4"
  },
  {
    "url": "assets/img/IMG_8864.jpg",
    "revision": "ab0ba713838b1b1e03189a5585238234"
  },
  {
    "url": "assets/img/IMG_9137.jpg",
    "revision": "dae338b996cf9d98ac6bb336b8b029f0"
  },
  {
    "url": "assets/img/IMG_9141.jpg",
    "revision": "aa90a04ef6d00faa03dc8ae3aa42035b"
  },
  {
    "url": "assets/img/IMG_9142.jpg",
    "revision": "cf3ce1f7c87a40992fd0939fae90b988"
  },
  {
    "url": "assets/img/IMG_9145.jpg",
    "revision": "972152d60b64052e22bc51a2701989cd"
  },
  {
    "url": "assets/img/IMG_9168.jpg",
    "revision": "810d5c8f26c2ac9d087229811ca8d541"
  },
  {
    "url": "assets/img/IMG_9174.jpg",
    "revision": "ba64ccc2b9cf672db7304f333ef3baf7"
  },
  {
    "url": "assets/img/IMG_9180.jpg",
    "revision": "b549d3499582d10d0cff91fdf3bc7321"
  },
  {
    "url": "assets/img/IMG_9195.jpg",
    "revision": "af5a4a15976faaf96d04db3143f0e3d1"
  },
  {
    "url": "assets/img/IMG_9812.jpg",
    "revision": "82645d0b18c37f522560c6b2ab1a7e50"
  },
  {
    "url": "assets/img/IMG_9813.jpg",
    "revision": "0412adf73dc96682688cb35a6365389d"
  },
  {
    "url": "assets/img/IMG_9814.jpg",
    "revision": "593022231309bc6b65e4a82556b8933e"
  },
  {
    "url": "assets/img/IMG_9815.jpg",
    "revision": "bda1e96c5e3d9cff551e256235ec3fac"
  },
  {
    "url": "assets/img/IMG_9816.jpg",
    "revision": "9c97539f82e988b8fe3d95658905cc45"
  },
  {
    "url": "assets/img/IMG_9817.jpg",
    "revision": "bc2f16ee8094477cc242a83f907f8831"
  },
  {
    "url": "assets/img/IMG_9819.jpg",
    "revision": "0f3f27763beaccc9865e8ad7c60ebd9c"
  },
  {
    "url": "assets/img/IMG_9820.jpg",
    "revision": "5d3a8d781cd87a48499c7f06a7ce351e"
  },
  {
    "url": "assets/img/IMG_9822.jpg",
    "revision": "761382ae72fdf1710ccf78671992e2e4"
  },
  {
    "url": "assets/img/IMG_9823.jpg",
    "revision": "8885eddfc26b3af774f5447700dbb6e2"
  },
  {
    "url": "assets/img/IMG_9824.jpg",
    "revision": "4aed9ac3d04ce522c2462a13b7d4a7ba"
  },
  {
    "url": "assets/img/IMG_9876.jpg",
    "revision": "1b0352d3a8c397298eebfb65b77f9039"
  },
  {
    "url": "assets/img/IMG_9878.jpg",
    "revision": "f7213f5a9820c981af8a9371d32d1e7e"
  },
  {
    "url": "assets/img/IMG_9879.jpg",
    "revision": "ad047a5250ff999e73981ad6c0ef6b67"
  },
  {
    "url": "assets/img/Img1_0002.jpg",
    "revision": "11defceee57d770b67190c48201f207f"
  },
  {
    "url": "assets/img/Img2_0009.jpg",
    "revision": "ec7603ca309005f92572169ec6562914"
  },
  {
    "url": "assets/img/Img2_0023.jpg",
    "revision": "bdf5174d048978a530e5144c9b507181"
  },
  {
    "url": "assets/img/Img2_0030.jpg",
    "revision": "f5fa59916b7771aef73b2e4e42250a26"
  },
  {
    "url": "assets/img/IMGP0834.jpg",
    "revision": "01d18b03a57b2a95f27044fbb4d0792d"
  },
  {
    "url": "assets/img/IMGP0839.jpg",
    "revision": "0a1cbcc59a49fc8c4edd7048b580aaf9"
  },
  {
    "url": "assets/img/IMGP0849.jpg",
    "revision": "70c706b724a03070ee7c22d5174d25a4"
  },
  {
    "url": "assets/img/IMGP1215.jpg",
    "revision": "fad4b6556e0b4d759b04d6f23ab1135d"
  },
  {
    "url": "assets/img/IMGP1216.jpg",
    "revision": "a5fbd557ba91f01065db2d81667776d1"
  },
  {
    "url": "assets/img/IMGP1217.jpg",
    "revision": "1adffcef4da246867f7d93972b6899c0"
  },
  {
    "url": "assets/img/IMGP1218.jpg",
    "revision": "fa8627ff46409eceb5a8d1bc7a27b269"
  },
  {
    "url": "assets/img/IMGP1219.jpg",
    "revision": "a947c254e036334f0e63d3e59f2b3657"
  },
  {
    "url": "assets/img/IMGP1220.jpg",
    "revision": "9908840972a41e0a6000ffc888f50838"
  },
  {
    "url": "assets/img/IMGP1221.jpg",
    "revision": "1ef883438d81580b8885ab93861a6de3"
  },
  {
    "url": "assets/img/IMGP1222.jpg",
    "revision": "bca2fc7017cc13c7ba7e6983ee722a0b"
  },
  {
    "url": "assets/img/IMGP1223.jpg",
    "revision": "bc76a9c536b261286432cbf883a94fe7"
  },
  {
    "url": "assets/img/IMGP1224.jpg",
    "revision": "91e86b2582ed832df92d2850a88db47f"
  },
  {
    "url": "assets/img/IMGP1225.jpg",
    "revision": "0f84e8e025c8531bb04bd00df8fe008f"
  },
  {
    "url": "assets/img/IMGP1226.jpg",
    "revision": "cdb7b902796ddc7ae0554858104d09d5"
  },
  {
    "url": "assets/img/IMGP1227.jpg",
    "revision": "7556f4599912d187c0dba4d54a45caa3"
  },
  {
    "url": "assets/img/IMGP3936.jpg",
    "revision": "4845419f2586ad2264134c24f88edbc8"
  },
  {
    "url": "assets/img/india.jpg",
    "revision": "6cc73d3f9dcfb62c6cc373e93b0aad77"
  },
  {
    "url": "assets/img/indonesia.jpg",
    "revision": "47b22f409d7230f1bf54af96ba563bfe"
  },
  {
    "url": "assets/img/Inigo-Montoya-Remember.jpg",
    "revision": "863d98cc273b3f424ae6c89c4884c507"
  },
  {
    "url": "assets/img/interactive.jpg",
    "revision": "329530629de3e7c47f44b2d96e1b737f"
  },
  {
    "url": "assets/img/iran.jpg",
    "revision": "40fc757c41b33f93e98788fbb8893b59"
  },
  {
    "url": "assets/img/iranextension.jpg",
    "revision": "10fa7578261e115350be0673ce5374fa"
  },
  {
    "url": "assets/img/ISS.jpg",
    "revision": "29fb268e8c684b266e0ed132ccf6d4ce"
  },
  {
    "url": "assets/img/John-Cocksy-Cocks.jpg",
    "revision": "3b52c7f6c9cecbc28e8665eb3c66351c"
  },
  {
    "url": "assets/img/jordan.jpg",
    "revision": "ca0af0c2032c7eae8040ac3949dbda33"
  },
  {
    "url": "assets/img/korea.jpg",
    "revision": "4eab356fceb7b430ae66d05046732c09"
  },
  {
    "url": "assets/img/laos.jpg",
    "revision": "02675de7ce4bf334674586fdeff9b8b6"
  },
  {
    "url": "assets/img/laos2.jpg",
    "revision": "ecd44992f602765acc60a87b7616e833"
  },
  {
    "url": "assets/img/lebanon.jpg",
    "revision": "f54ee71242cfa3467f9240269510cd7b"
  },
  {
    "url": "assets/img/logistics.jpg",
    "revision": "1d396553b561a0de6d777816e183ea1c"
  },
  {
    "url": "assets/img/malaysia.jpg",
    "revision": "432058e1fb6596bac0d2f5ee6081df99"
  },
  {
    "url": "assets/img/malaysia2.jpg",
    "revision": "88aa183a740d2477e1843d139336b979"
  },
  {
    "url": "assets/img/MCSlides.jpg",
    "revision": "ceb3230be81fb49d4cd17ffc64b695f6"
  },
  {
    "url": "assets/img/mungo.jpg",
    "revision": "fba19e89a8e1dab13902751a9d1e2810"
  },
  {
    "url": "assets/img/mutant-chicken-final-copy-1.jpg",
    "revision": "a4fc635b075c038c3a0697773e25726a"
  },
  {
    "url": "assets/img/mutant-chicken-final.jpg",
    "revision": "209ae47da8f37c16b255f252f3da35ce"
  },
  {
    "url": "assets/img/nepal.jpg",
    "revision": "6e40c568851e1d716fa034054a292c22"
  },
  {
    "url": "assets/img/nominet.jpg",
    "revision": "fa64ce077796bedbdd160b35c05e57b2"
  },
  {
    "url": "assets/img/nzresidence.jpg",
    "revision": "2701255c20c8e14480a70b60590dd857"
  },
  {
    "url": "assets/img/nzreturning.jpg",
    "revision": "64f3a4c4c1220a699edd275bdaa3554d"
  },
  {
    "url": "assets/img/nzwork.jpg",
    "revision": "3834524fc59663c18ff259e1be077c3e"
  },
  {
    "url": "assets/img/nzwork2.jpg",
    "revision": "dd780a74b9e9890ae8fd890677c206f2"
  },
  {
    "url": "assets/img/P1000495.jpg",
    "revision": "41364e783d0e0dae88e78a721957bbbf"
  },
  {
    "url": "assets/img/PotentialPlagiarism.png",
    "revision": "77c3b68ab8a7925fc98eec8ce1fcd525"
  },
  {
    "url": "assets/img/radiolive.jpg",
    "revision": "50a8e7ba7fe7066ddf9e660e4f887c12"
  },
  {
    "url": "assets/img/rsa.jpg",
    "revision": "9e8f8e545acbeedaf030f909ae00055c"
  },
  {
    "url": "assets/img/sa.jpg",
    "revision": "90a344af2db9c52532de5a4f5ab36a6d"
  },
  {
    "url": "assets/img/Screenshot_1.jpg",
    "revision": "300ad6f23464f6f1c4b6b8f948cf6658"
  },
  {
    "url": "assets/img/Screenshot_2.jpg",
    "revision": "80ed6f11afb6e709d668fee41d52ec58"
  },
  {
    "url": "assets/img/search.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/settled_2x.png",
    "revision": "9a6ede43a05c4186b722b09057801d3f"
  },
  {
    "url": "assets/img/singapore.jpg",
    "revision": "c30b01a8eb19069f3a2de7a41d42e4d4"
  },
  {
    "url": "assets/img/spiral.jpg",
    "revision": "a92c028c03a0e596cfb541fe76df1d1a"
  },
  {
    "url": "assets/img/stgeorge.jpg",
    "revision": "b5606b9d4efe6f04b94fc82c9fb0b8ef"
  },
  {
    "url": "assets/img/syria.jpg",
    "revision": "f0cc8440a5cd618a7281eecedb93f64a"
  },
  {
    "url": "assets/img/thailand.jpg",
    "revision": "627ccafa9ade63f2111fce52f3ffa346"
  },
  {
    "url": "assets/img/Tree.jpg",
    "revision": "be44898703764ddf0e41745278a6a889"
  },
  {
    "url": "assets/img/turkey.jpg",
    "revision": "f05c825c25d13f7e41e2ce058ece4be1"
  },
  {
    "url": "assets/img/ubs.jpg",
    "revision": "0ba844eb82344f08ccb6e3a70e05a985"
  },
  {
    "url": "assets/img/vietnam.jpg",
    "revision": "3bc5c3e2accf004c42645a8a4e328d8b"
  },
  {
    "url": "assets/img/vOWAAUK.png",
    "revision": "76c6ebf42c8d36967458233e58386854"
  },
  {
    "url": "assets/img/welbeck.jpg",
    "revision": "453caca77856c00c3ad1b060c36d268a"
  },
  {
    "url": "assets/js/1.js",
    "revision": "2c24b919ce65c4aae1a16bc575e42315"
  },
  {
    "url": "assets/js/10.js",
    "revision": "48b53771b1737c236ece1b610e80e103"
  },
  {
    "url": "assets/js/100.js",
    "revision": "6af4e92aa300f71fa67f3595075c7359"
  },
  {
    "url": "assets/js/101.js",
    "revision": "809dccbf763b201c2868d86a7f269a22"
  },
  {
    "url": "assets/js/102.js",
    "revision": "bb8f6108bedfeb10b8655d5d16a63623"
  },
  {
    "url": "assets/js/103.js",
    "revision": "a52752c823bff0767a7f2ee7caa3881d"
  },
  {
    "url": "assets/js/104.js",
    "revision": "93d1dac2c86c72f0779767b528a3a632"
  },
  {
    "url": "assets/js/105.js",
    "revision": "eb64c881d256cd68fd4d961872f06964"
  },
  {
    "url": "assets/js/106.js",
    "revision": "bf96cc3f4a546241f1bbdeb8f98be237"
  },
  {
    "url": "assets/js/107.js",
    "revision": "ec27e8b00db681ef99c25e652027e0e6"
  },
  {
    "url": "assets/js/108.js",
    "revision": "f5c513244eba626b69bcc0c11fb40d8d"
  },
  {
    "url": "assets/js/109.js",
    "revision": "4ee17306d32715514f4e66f144e4a0b1"
  },
  {
    "url": "assets/js/11.js",
    "revision": "9c52a4818da048d65fc7bfa060fce492"
  },
  {
    "url": "assets/js/110.js",
    "revision": "f01466adfa3ab6175ff433f138b82228"
  },
  {
    "url": "assets/js/111.js",
    "revision": "f5d9da289aeeaa96d820b5584868bfe7"
  },
  {
    "url": "assets/js/112.js",
    "revision": "2cfe6ef40cff0434b569e4d40e786f1f"
  },
  {
    "url": "assets/js/113.js",
    "revision": "ee073d00acb12a835c79a0f76a51a3b0"
  },
  {
    "url": "assets/js/114.js",
    "revision": "00fd29673bfd7f44e0783ac86f2e5e50"
  },
  {
    "url": "assets/js/115.js",
    "revision": "78526656a440eb7776b2ffd6e37c5135"
  },
  {
    "url": "assets/js/116.js",
    "revision": "e389a547b91029eac12a298ea8375f62"
  },
  {
    "url": "assets/js/117.js",
    "revision": "cc1a9eff6c08524b0108898e37ad52fe"
  },
  {
    "url": "assets/js/118.js",
    "revision": "4cdcf3ec895f76a0aa44a6813d053be8"
  },
  {
    "url": "assets/js/119.js",
    "revision": "f15ee97586dc3b751ce74ebd519348b8"
  },
  {
    "url": "assets/js/12.js",
    "revision": "37c05022b29b76658bf3128152c71e26"
  },
  {
    "url": "assets/js/120.js",
    "revision": "79087fc1cebd8a8ac337d5be15c171af"
  },
  {
    "url": "assets/js/121.js",
    "revision": "1d25ce39769f792af9b8334a3b068cab"
  },
  {
    "url": "assets/js/122.js",
    "revision": "c42ff3053e4df99ca3bca79bc5ce40b6"
  },
  {
    "url": "assets/js/123.js",
    "revision": "dbb6201d9ed8bb4f345a61ee7f21c7b3"
  },
  {
    "url": "assets/js/124.js",
    "revision": "b7cee07b2ec6eff3241574c1e5361a4d"
  },
  {
    "url": "assets/js/125.js",
    "revision": "805716fc847472e58f5d5fe16829dc99"
  },
  {
    "url": "assets/js/126.js",
    "revision": "44457a774e812aa4ad5214bcbb5459f6"
  },
  {
    "url": "assets/js/127.js",
    "revision": "dc0ae8154163ce09a2491ef64d17a53b"
  },
  {
    "url": "assets/js/128.js",
    "revision": "ca20a4b313b91ed042497c984d4af488"
  },
  {
    "url": "assets/js/129.js",
    "revision": "79486b34b3eca983d066f905dde6fe69"
  },
  {
    "url": "assets/js/13.js",
    "revision": "199b5dc1860c792ed14a403983283711"
  },
  {
    "url": "assets/js/130.js",
    "revision": "c0a0de38f1ff2058c07e16ba3f824109"
  },
  {
    "url": "assets/js/131.js",
    "revision": "e42a5d122bebf1cc71e028bffcb09769"
  },
  {
    "url": "assets/js/132.js",
    "revision": "f94a94203d46a69bea5f2c4dbff41fae"
  },
  {
    "url": "assets/js/133.js",
    "revision": "eba0e0f0a66b08d90e979f7a3be1b21a"
  },
  {
    "url": "assets/js/134.js",
    "revision": "a7c53ac24b3e390e9b2739a0a450f4b5"
  },
  {
    "url": "assets/js/135.js",
    "revision": "865183b15fbc1bdb7c5b945e393fa1d4"
  },
  {
    "url": "assets/js/136.js",
    "revision": "1c3166a6180162943da3b061bcee34ca"
  },
  {
    "url": "assets/js/137.js",
    "revision": "3efda5c2bebc41e155e8f8ac065de44b"
  },
  {
    "url": "assets/js/138.js",
    "revision": "a975d78af955e5489ed8b6c639729ca1"
  },
  {
    "url": "assets/js/139.js",
    "revision": "8c524b37b45e8a5c036b229d2ee1fd69"
  },
  {
    "url": "assets/js/14.js",
    "revision": "1584ad929f8d8af6e564b19c79e2c1eb"
  },
  {
    "url": "assets/js/140.js",
    "revision": "e46e6307d018967c6a8df79d873ddea7"
  },
  {
    "url": "assets/js/141.js",
    "revision": "7d83a11335fcc7216b7b574e1843c554"
  },
  {
    "url": "assets/js/142.js",
    "revision": "9403b3ea22b63d320027f7e97f739ddd"
  },
  {
    "url": "assets/js/143.js",
    "revision": "08cc64a8dfde6377f95eae99016aa976"
  },
  {
    "url": "assets/js/144.js",
    "revision": "818e6f57d503f05fd9cb7a24e199a558"
  },
  {
    "url": "assets/js/145.js",
    "revision": "c27a43f859d23f4c4c2693e50c417c2b"
  },
  {
    "url": "assets/js/146.js",
    "revision": "808f8bc1f04ff640e96f2f8ebf316d7a"
  },
  {
    "url": "assets/js/147.js",
    "revision": "0f6c880e3b1fdf9066982f16bde5dbb7"
  },
  {
    "url": "assets/js/148.js",
    "revision": "127acf5e1ead606b714f0aa9cf934db3"
  },
  {
    "url": "assets/js/149.js",
    "revision": "b1f53fb28eb7f1df8af57fc2de5621e3"
  },
  {
    "url": "assets/js/15.js",
    "revision": "47e27adce095458a9d5ead3d1f2f6afb"
  },
  {
    "url": "assets/js/150.js",
    "revision": "2ced5dc8283ccbbb801df47881f3a920"
  },
  {
    "url": "assets/js/151.js",
    "revision": "6596ed5b948e0548158f4d9f86e9ff28"
  },
  {
    "url": "assets/js/152.js",
    "revision": "04e7f40cbdb1abcf54badc2cb2fe7d78"
  },
  {
    "url": "assets/js/153.js",
    "revision": "e280896de99b72bfe4c3f946c4ee6f32"
  },
  {
    "url": "assets/js/154.js",
    "revision": "52f8d9b0bf9c014e19df666086c65b84"
  },
  {
    "url": "assets/js/155.js",
    "revision": "625f4c766ac576f553418c886b0c6e91"
  },
  {
    "url": "assets/js/156.js",
    "revision": "6ce5a85c7d6e6610a84ac1eaf244e8f9"
  },
  {
    "url": "assets/js/157.js",
    "revision": "7fd4ea1c353d88995389f771d389adf9"
  },
  {
    "url": "assets/js/158.js",
    "revision": "e428d028e9b9bf40a33e496a4b70a2ad"
  },
  {
    "url": "assets/js/159.js",
    "revision": "3b6265e434894da8001dd7cc0b68960d"
  },
  {
    "url": "assets/js/16.js",
    "revision": "a6ede2bf5480d62e27f95674982cdf9c"
  },
  {
    "url": "assets/js/160.js",
    "revision": "31f3d1d54b9a8f7e71ed511891ca5153"
  },
  {
    "url": "assets/js/161.js",
    "revision": "620437e9f59f04b624c11f7d4c3175c1"
  },
  {
    "url": "assets/js/162.js",
    "revision": "86fc387df9889a486537690aa4177ebb"
  },
  {
    "url": "assets/js/163.js",
    "revision": "d11ca0a842e76b03c0666c9e0a63682e"
  },
  {
    "url": "assets/js/164.js",
    "revision": "976d38129129626ef51fc3e920f8abc8"
  },
  {
    "url": "assets/js/165.js",
    "revision": "4a8c4f775a0d5a6ae60bbb3b1303570e"
  },
  {
    "url": "assets/js/166.js",
    "revision": "214b4fff28a31806fe09a4f3a1a18b10"
  },
  {
    "url": "assets/js/167.js",
    "revision": "3722a1b50383b6b01f3060b9eb614918"
  },
  {
    "url": "assets/js/168.js",
    "revision": "890cc91ec259f76195c9411a8713c88f"
  },
  {
    "url": "assets/js/169.js",
    "revision": "a6a459279d5414f9a78881281f377a5d"
  },
  {
    "url": "assets/js/17.js",
    "revision": "1c488a0590b0a24c7057ce34b84bf567"
  },
  {
    "url": "assets/js/170.js",
    "revision": "3cee7d9b6b7f3137cf375addeecc9da0"
  },
  {
    "url": "assets/js/171.js",
    "revision": "212f14ac20802e118ffa76ecb224ee66"
  },
  {
    "url": "assets/js/172.js",
    "revision": "8f536d44164fa13d901731a5ef302684"
  },
  {
    "url": "assets/js/173.js",
    "revision": "f4ea59329a4f35e2cb1c95f146d44815"
  },
  {
    "url": "assets/js/174.js",
    "revision": "6907117c6719b87e2b30ebc618b23845"
  },
  {
    "url": "assets/js/175.js",
    "revision": "24133e9ec2f9fd9179a79d849ed580b9"
  },
  {
    "url": "assets/js/176.js",
    "revision": "b585b0178f5c72b3b046dc86027a4912"
  },
  {
    "url": "assets/js/177.js",
    "revision": "897f904a91c1049a6b3a8df597464e88"
  },
  {
    "url": "assets/js/178.js",
    "revision": "3ac137430fe4d65b424409485df0c78b"
  },
  {
    "url": "assets/js/179.js",
    "revision": "e8f79b1d45dfa202ac604b09885fd250"
  },
  {
    "url": "assets/js/18.js",
    "revision": "b25cca53a1b5a48eac13e0e10de07cb3"
  },
  {
    "url": "assets/js/180.js",
    "revision": "52b0de32533adbe16d63c23836bef43b"
  },
  {
    "url": "assets/js/181.js",
    "revision": "0d75c6f2f899970e440a73508ee12e51"
  },
  {
    "url": "assets/js/182.js",
    "revision": "420d89db50fbcb6dc53034bb42289aea"
  },
  {
    "url": "assets/js/183.js",
    "revision": "a6186bbf0d5320ac23996e7dfbb26efa"
  },
  {
    "url": "assets/js/184.js",
    "revision": "409182df187b5afa60e14cb8ba315fda"
  },
  {
    "url": "assets/js/185.js",
    "revision": "f3b65bcf4aeeabd72c99017714ea9e98"
  },
  {
    "url": "assets/js/186.js",
    "revision": "a95ccc3b961fc622f83d2d1d8d6040a8"
  },
  {
    "url": "assets/js/187.js",
    "revision": "7b88da28c1477f5af6d1b214e854a59b"
  },
  {
    "url": "assets/js/188.js",
    "revision": "f68287b2d6061b06d6cd9b7c43db693c"
  },
  {
    "url": "assets/js/189.js",
    "revision": "6a0b8dfd695f64865d5391694513b1f4"
  },
  {
    "url": "assets/js/19.js",
    "revision": "03e9ce65af0089fdd307cf7aaa1eeefe"
  },
  {
    "url": "assets/js/190.js",
    "revision": "6085ebde8a7b6555046e448da85313ad"
  },
  {
    "url": "assets/js/191.js",
    "revision": "e2086ebdaa40c63c199ac933c3d1cfc5"
  },
  {
    "url": "assets/js/192.js",
    "revision": "31d57e956019db5f3758aebf3de76d0d"
  },
  {
    "url": "assets/js/193.js",
    "revision": "16aac99e4454ff6311b38004dd50ce55"
  },
  {
    "url": "assets/js/194.js",
    "revision": "5ca1d44058a4938d55095b23edbab275"
  },
  {
    "url": "assets/js/195.js",
    "revision": "be04b1d257522fc55dae9bb6488b04e0"
  },
  {
    "url": "assets/js/196.js",
    "revision": "3d1f86c6676754b571450310645b5266"
  },
  {
    "url": "assets/js/197.js",
    "revision": "2634c8323796d52ace4826e258b5d6f3"
  },
  {
    "url": "assets/js/198.js",
    "revision": "eb25bfdabe1042ed5290199e74f342ec"
  },
  {
    "url": "assets/js/199.js",
    "revision": "05e8614b78523e1a63df606c49307d07"
  },
  {
    "url": "assets/js/2.js",
    "revision": "c78dec8013c6aa4626e4504254fd9a81"
  },
  {
    "url": "assets/js/20.js",
    "revision": "a2c12782bfb6040dfcc79616dabf90e1"
  },
  {
    "url": "assets/js/200.js",
    "revision": "77c708141ed609f54274cfc8191b505c"
  },
  {
    "url": "assets/js/201.js",
    "revision": "08fca85361ff4bd8fbee4a15ae7144fc"
  },
  {
    "url": "assets/js/202.js",
    "revision": "84ca1c153ec9875ea3a9f4a2099c8368"
  },
  {
    "url": "assets/js/203.js",
    "revision": "a67e13eb8e0223396e4379bdcb97f26a"
  },
  {
    "url": "assets/js/204.js",
    "revision": "93d6a7c7f1ae76224545d59b9149a75c"
  },
  {
    "url": "assets/js/205.js",
    "revision": "65fccc7a0ca95612d765694b4ffdc913"
  },
  {
    "url": "assets/js/206.js",
    "revision": "f3f15f259dd01bb3120acb3e0c9f902c"
  },
  {
    "url": "assets/js/207.js",
    "revision": "f91447ac75469a27cb518454387eebe8"
  },
  {
    "url": "assets/js/208.js",
    "revision": "6d66e96b6062f5652f2814e1d031da97"
  },
  {
    "url": "assets/js/209.js",
    "revision": "78ea72e9a74a647b65fe1fe5aa8cd02d"
  },
  {
    "url": "assets/js/21.js",
    "revision": "cf676382246856b7d6b4726dc76c4e7c"
  },
  {
    "url": "assets/js/210.js",
    "revision": "764ce91d5d656ae79684a4e2bf56584c"
  },
  {
    "url": "assets/js/211.js",
    "revision": "879417bd7680d47262c9a6df1a0e6c87"
  },
  {
    "url": "assets/js/212.js",
    "revision": "5a07304c2d204399cbc0ad043679138f"
  },
  {
    "url": "assets/js/213.js",
    "revision": "52c9dfab6b2203ad7ff1e87eabb4b7fa"
  },
  {
    "url": "assets/js/214.js",
    "revision": "842d5976e0497c4d64fe6b73c8420d7d"
  },
  {
    "url": "assets/js/215.js",
    "revision": "46ec7b577997873dc53fd22e8d348752"
  },
  {
    "url": "assets/js/216.js",
    "revision": "f1ca0da2194e92533c64000ba47bb0d6"
  },
  {
    "url": "assets/js/217.js",
    "revision": "b117ecb191ee46ee61197e53a5f2f4e0"
  },
  {
    "url": "assets/js/218.js",
    "revision": "9e7c9c67d1f03face93344899f7ee45e"
  },
  {
    "url": "assets/js/219.js",
    "revision": "44a0e2658f1c9f7802dc3a2e32d7d71d"
  },
  {
    "url": "assets/js/22.js",
    "revision": "dc8d3d0a4eb1cd2eafd9e65ddd6570be"
  },
  {
    "url": "assets/js/220.js",
    "revision": "3e7e23fb1ce38ca965c948c4c75707de"
  },
  {
    "url": "assets/js/221.js",
    "revision": "767a5d3fd7a64344d13a41be75403dab"
  },
  {
    "url": "assets/js/222.js",
    "revision": "f732462673bcc6bc261d83a0311a6af4"
  },
  {
    "url": "assets/js/223.js",
    "revision": "3e2773bb51851dc052c07b451ad50e02"
  },
  {
    "url": "assets/js/224.js",
    "revision": "bb6ad99a43f577a49c8f9bcc3e7209c5"
  },
  {
    "url": "assets/js/225.js",
    "revision": "995de3906e725ca5f7fd863d5ee2ee87"
  },
  {
    "url": "assets/js/226.js",
    "revision": "11d17c7a605eccfe606a6ccbe81bb09c"
  },
  {
    "url": "assets/js/227.js",
    "revision": "59a78a59e9f878f89683b46040413a73"
  },
  {
    "url": "assets/js/228.js",
    "revision": "b148a0e1b59a23f8961607bf678f242f"
  },
  {
    "url": "assets/js/229.js",
    "revision": "bd32e3d616cb30d5bbf4b37ee73efa2b"
  },
  {
    "url": "assets/js/23.js",
    "revision": "d742b84bcc26fa8a0b48f8e772e5df26"
  },
  {
    "url": "assets/js/230.js",
    "revision": "5b27f72e020e47a903093acae271d302"
  },
  {
    "url": "assets/js/231.js",
    "revision": "c919c60ee544a8e91e3cfc93d4c38d55"
  },
  {
    "url": "assets/js/232.js",
    "revision": "a210410dae8c0381fbc2dfe1c8d766bd"
  },
  {
    "url": "assets/js/233.js",
    "revision": "ca92c211f518fef67dff379dd45cc6d5"
  },
  {
    "url": "assets/js/234.js",
    "revision": "6b216b0ccce23a9a4203942be99d5cdb"
  },
  {
    "url": "assets/js/235.js",
    "revision": "491d547c2799ac8b83680053867cd140"
  },
  {
    "url": "assets/js/236.js",
    "revision": "540bb93cc13faf2a15c6da583d54e4da"
  },
  {
    "url": "assets/js/237.js",
    "revision": "efcf7fb827912c097105935eed3028ec"
  },
  {
    "url": "assets/js/238.js",
    "revision": "30325e0095b8d1fbb059a83167db7e66"
  },
  {
    "url": "assets/js/239.js",
    "revision": "611877f6595da79161be57fa64543b66"
  },
  {
    "url": "assets/js/24.js",
    "revision": "a65d1176010e76c6ee9fade0e508df46"
  },
  {
    "url": "assets/js/240.js",
    "revision": "e8ca08bd9eb6264aa03d93e61fcc35ef"
  },
  {
    "url": "assets/js/241.js",
    "revision": "95a685903c723206c3c3cae0bdac22d1"
  },
  {
    "url": "assets/js/242.js",
    "revision": "54080def9cfff705c395017fef8e8a7b"
  },
  {
    "url": "assets/js/243.js",
    "revision": "32ba4e89ba576cf733cec23f1c80ba1c"
  },
  {
    "url": "assets/js/244.js",
    "revision": "41bd7fcd4f3abffee2990a95b56a95f3"
  },
  {
    "url": "assets/js/245.js",
    "revision": "dfacf357ecb0978b9d7083af647d4d40"
  },
  {
    "url": "assets/js/246.js",
    "revision": "f050eed606cbeadf035ff0a092983cdb"
  },
  {
    "url": "assets/js/247.js",
    "revision": "8b7aeb7c793d8f109cb0a1311e1a1912"
  },
  {
    "url": "assets/js/248.js",
    "revision": "ded5eefd4c8ce6fa7cac53733a3b4246"
  },
  {
    "url": "assets/js/249.js",
    "revision": "738522b45362cfd7d45a3f1d4857459f"
  },
  {
    "url": "assets/js/25.js",
    "revision": "1d0628a1d25e909a05cb3229e8114302"
  },
  {
    "url": "assets/js/250.js",
    "revision": "d58305793c23386b7aa126f90c1cc526"
  },
  {
    "url": "assets/js/251.js",
    "revision": "200bfd80abf1f1f11de04891086df33b"
  },
  {
    "url": "assets/js/252.js",
    "revision": "ea06a6652929caf4333348326d42a8f3"
  },
  {
    "url": "assets/js/253.js",
    "revision": "dff90c4ae9af185c734d020d67bf42a8"
  },
  {
    "url": "assets/js/254.js",
    "revision": "f873396d616a87ad26cb626dfe18886f"
  },
  {
    "url": "assets/js/255.js",
    "revision": "7ba4a8bd60ff4ed543db70a6cf1e8ca4"
  },
  {
    "url": "assets/js/256.js",
    "revision": "91ad618fd51497b69ff8eff5e20ef499"
  },
  {
    "url": "assets/js/257.js",
    "revision": "807403613c6d186841e9b7b6d1695d13"
  },
  {
    "url": "assets/js/258.js",
    "revision": "2a4d3629dafd92de13a3a15bc9d0a326"
  },
  {
    "url": "assets/js/259.js",
    "revision": "3f530a9cb467dac945c82e23efae3fd5"
  },
  {
    "url": "assets/js/26.js",
    "revision": "270f6246ff0f23b6802d0582dfd48369"
  },
  {
    "url": "assets/js/260.js",
    "revision": "56e7f4e23b9b225a79a5053fa11e750a"
  },
  {
    "url": "assets/js/261.js",
    "revision": "dd8864b6d8f4c8ee8ba769320a58a0a1"
  },
  {
    "url": "assets/js/262.js",
    "revision": "6be032bd22f1ef802b8280f41305964b"
  },
  {
    "url": "assets/js/263.js",
    "revision": "71597827e858a24086655b896443e8cd"
  },
  {
    "url": "assets/js/264.js",
    "revision": "e230b430c5b8a0a678a56d53a2caa1a4"
  },
  {
    "url": "assets/js/265.js",
    "revision": "c5b46ed178ff7bbf7875890e22cbbcbb"
  },
  {
    "url": "assets/js/266.js",
    "revision": "401da46ebc12b90d1b492cfe76664737"
  },
  {
    "url": "assets/js/267.js",
    "revision": "0b885de5322a92e9a9b05c70d0fc4bce"
  },
  {
    "url": "assets/js/268.js",
    "revision": "3a44576bcac7d99efe2cb416916f81cc"
  },
  {
    "url": "assets/js/269.js",
    "revision": "6986de45dd5605cd0b588f22a6f1b35c"
  },
  {
    "url": "assets/js/27.js",
    "revision": "97f6b0fc1f5e703f77f1556aab799d64"
  },
  {
    "url": "assets/js/270.js",
    "revision": "896155bab6b82809c0f22b699624e432"
  },
  {
    "url": "assets/js/271.js",
    "revision": "533081501c2d7c8132543dbf04db197c"
  },
  {
    "url": "assets/js/272.js",
    "revision": "776d8be9ba2b008f6bf5b826da24922f"
  },
  {
    "url": "assets/js/273.js",
    "revision": "34d75f653627c779bdb7b17d0c07fc5f"
  },
  {
    "url": "assets/js/274.js",
    "revision": "08c35f557f753811403995a879af5af5"
  },
  {
    "url": "assets/js/275.js",
    "revision": "bd580563c62f519ca239fac86d706d01"
  },
  {
    "url": "assets/js/276.js",
    "revision": "a2400d5ce310f654651511f0c43e109d"
  },
  {
    "url": "assets/js/277.js",
    "revision": "83e67cb5e80810959ff8208723c55f58"
  },
  {
    "url": "assets/js/278.js",
    "revision": "c662a1d8aa47fed38c3f82df1dee6f60"
  },
  {
    "url": "assets/js/279.js",
    "revision": "a4ff7bb41e05fa372966b217c7487e4e"
  },
  {
    "url": "assets/js/28.js",
    "revision": "6bd27e01c7f3ebab598941c1db9c591a"
  },
  {
    "url": "assets/js/280.js",
    "revision": "dbc45d54ff003222d4a4e7e9c8126ebd"
  },
  {
    "url": "assets/js/281.js",
    "revision": "11ce88369b15cf2e11179ba0735d5db7"
  },
  {
    "url": "assets/js/282.js",
    "revision": "03b85cf234a63bb431c1b954eb670e2c"
  },
  {
    "url": "assets/js/283.js",
    "revision": "293fc6e3fbab8355e7c938778e2e8a11"
  },
  {
    "url": "assets/js/284.js",
    "revision": "9a989c589a6470c1ffe129675d3551e5"
  },
  {
    "url": "assets/js/285.js",
    "revision": "8348e0b1058fefc240a03ca974a91987"
  },
  {
    "url": "assets/js/286.js",
    "revision": "e24006e779162577e9e25301da299fee"
  },
  {
    "url": "assets/js/287.js",
    "revision": "785f84d2e0b28a6275e4007edd8b2016"
  },
  {
    "url": "assets/js/288.js",
    "revision": "1768cfe6a589e22ba8fe5188e64f733f"
  },
  {
    "url": "assets/js/289.js",
    "revision": "4a9df902c33f48d3657bf60ba4de848c"
  },
  {
    "url": "assets/js/29.js",
    "revision": "d660c3feedd5163d2f25534f54e0e186"
  },
  {
    "url": "assets/js/290.js",
    "revision": "e7ec3bcacf857a836a6babe34c88d659"
  },
  {
    "url": "assets/js/291.js",
    "revision": "c49038ece5afc03c69b3def2048c4d59"
  },
  {
    "url": "assets/js/292.js",
    "revision": "cb341cd71929bb3ea3d8910b2c91219e"
  },
  {
    "url": "assets/js/293.js",
    "revision": "f94135368d93ce94d9f7599ae1725c18"
  },
  {
    "url": "assets/js/294.js",
    "revision": "ae7093483050dfbaaaa3d28471caa7c6"
  },
  {
    "url": "assets/js/295.js",
    "revision": "ecd0824acb9c9241e5b29de79e868e35"
  },
  {
    "url": "assets/js/296.js",
    "revision": "4433c523d325ec1417a1176c6853b3ef"
  },
  {
    "url": "assets/js/297.js",
    "revision": "1061e37bd5877757b9a1581b4b57bb50"
  },
  {
    "url": "assets/js/298.js",
    "revision": "d77b48380ca898bd8868af8291ede295"
  },
  {
    "url": "assets/js/299.js",
    "revision": "a1fd913439707ddcdbcdad25d674e261"
  },
  {
    "url": "assets/js/30.js",
    "revision": "51575d0307aea7f6c02e7ce0ce750b0c"
  },
  {
    "url": "assets/js/300.js",
    "revision": "94d33c603d7a10f33968e31b20477040"
  },
  {
    "url": "assets/js/301.js",
    "revision": "e665d1b3994c079ff9801bc6d56afa12"
  },
  {
    "url": "assets/js/302.js",
    "revision": "9a61200f070cf95d38fe3b6a0426cc05"
  },
  {
    "url": "assets/js/303.js",
    "revision": "8097bacb1ae22dba4d4a31f5d6d57f42"
  },
  {
    "url": "assets/js/304.js",
    "revision": "9031f8f6f4ecf3575f4cbd612c1cd74e"
  },
  {
    "url": "assets/js/305.js",
    "revision": "4e23ac2e7b73df62d63069c891101f60"
  },
  {
    "url": "assets/js/306.js",
    "revision": "c8adcbe7dd3018fa3760c39ce0d5c28e"
  },
  {
    "url": "assets/js/307.js",
    "revision": "1ca0ac70caccdf8fb028fb1756849689"
  },
  {
    "url": "assets/js/308.js",
    "revision": "7ef2cb8b6fccbb60de170cf77d455717"
  },
  {
    "url": "assets/js/309.js",
    "revision": "b828a10a5a1926255253c13d9b82b8bb"
  },
  {
    "url": "assets/js/31.js",
    "revision": "f0313cecd0f47af2ba80b89775ce661d"
  },
  {
    "url": "assets/js/310.js",
    "revision": "c289f330510f3c4120f25267bc10414c"
  },
  {
    "url": "assets/js/311.js",
    "revision": "e0fc18d3fcbc83ba8017382197757f09"
  },
  {
    "url": "assets/js/312.js",
    "revision": "2c5757df78fca0233ec53b072ce47b65"
  },
  {
    "url": "assets/js/313.js",
    "revision": "686996ea550b59913ea7323383384a03"
  },
  {
    "url": "assets/js/314.js",
    "revision": "944fa5e12546e3d8be965902868e9a01"
  },
  {
    "url": "assets/js/315.js",
    "revision": "b44addc02a094f61b314625c1f383c7a"
  },
  {
    "url": "assets/js/316.js",
    "revision": "2913f5714332255f6950e5e2de9db8e8"
  },
  {
    "url": "assets/js/317.js",
    "revision": "4dd9abe904d915638eb0f3fb59044cb5"
  },
  {
    "url": "assets/js/318.js",
    "revision": "5a2a84fa2d2b77d25a60987047ae094c"
  },
  {
    "url": "assets/js/319.js",
    "revision": "889eff6230337e1f9349197d1cec0455"
  },
  {
    "url": "assets/js/32.js",
    "revision": "0358d41e95175f55bae830c90f57759d"
  },
  {
    "url": "assets/js/320.js",
    "revision": "c9d6937b276bfc7c57e51aff97a39004"
  },
  {
    "url": "assets/js/321.js",
    "revision": "ecabe6b4391c70421feff2966180fdb2"
  },
  {
    "url": "assets/js/322.js",
    "revision": "d5e9e326b20a7d87d27bf097c3c4a5b3"
  },
  {
    "url": "assets/js/323.js",
    "revision": "2ddda9734469a25fab6de9f5ee7e2d62"
  },
  {
    "url": "assets/js/324.js",
    "revision": "9d981692c621804b21c1fb26263bb6a6"
  },
  {
    "url": "assets/js/325.js",
    "revision": "dcc9094b43fc44ba0822ae28ca81e646"
  },
  {
    "url": "assets/js/326.js",
    "revision": "e757c4798948dbfc17435155507fedc5"
  },
  {
    "url": "assets/js/327.js",
    "revision": "972e29a7540905347ba3518153d95918"
  },
  {
    "url": "assets/js/328.js",
    "revision": "393926cf480cba78983faa280e3c20c5"
  },
  {
    "url": "assets/js/329.js",
    "revision": "c3c66bfd61a798e99c1e9ed18dc29d02"
  },
  {
    "url": "assets/js/33.js",
    "revision": "9ad57de5b3c24e5f67e3db38643faf02"
  },
  {
    "url": "assets/js/330.js",
    "revision": "2f4dc59a7dd6dabff0a6d996547f4dc2"
  },
  {
    "url": "assets/js/331.js",
    "revision": "f2a856d2e3fc37850e3caebe835d1539"
  },
  {
    "url": "assets/js/332.js",
    "revision": "9a56320cb1f609754e0fd8b5555a8388"
  },
  {
    "url": "assets/js/333.js",
    "revision": "5a1b750b93bf1f1e2654d1aefcfbf02a"
  },
  {
    "url": "assets/js/334.js",
    "revision": "3cdb7da245589722b9b7cf1edbd52057"
  },
  {
    "url": "assets/js/335.js",
    "revision": "411b20941542d89e2298330e146273bb"
  },
  {
    "url": "assets/js/336.js",
    "revision": "6e35571e6c01e8fdea80ce9ed78bffa1"
  },
  {
    "url": "assets/js/337.js",
    "revision": "aa019e6d86937e58fe380c6484e2a638"
  },
  {
    "url": "assets/js/338.js",
    "revision": "8d8d9199820d6ad0ffc1b91dae187183"
  },
  {
    "url": "assets/js/339.js",
    "revision": "e7256c2911451a6f5c4ade17083981f4"
  },
  {
    "url": "assets/js/34.js",
    "revision": "09561a29bb468286a61e6415bf150464"
  },
  {
    "url": "assets/js/340.js",
    "revision": "26893118894b86657a528cef5b7f8399"
  },
  {
    "url": "assets/js/341.js",
    "revision": "981dd55f259fbb7babd4e100a85b3695"
  },
  {
    "url": "assets/js/342.js",
    "revision": "d52243258c8bd294784b6973dc45538c"
  },
  {
    "url": "assets/js/343.js",
    "revision": "00d0118fb6a6ed9da057e2023b85d611"
  },
  {
    "url": "assets/js/344.js",
    "revision": "5c6283f9791ea6ebcffaeca24ef47059"
  },
  {
    "url": "assets/js/345.js",
    "revision": "0f5ad451a715ef3fa1bcbf826207de25"
  },
  {
    "url": "assets/js/346.js",
    "revision": "6835c765dc9499d3c28d416a40a467c1"
  },
  {
    "url": "assets/js/347.js",
    "revision": "ae8f85cf6db201c0a9469dce602f8320"
  },
  {
    "url": "assets/js/348.js",
    "revision": "2587d0d79120acbb820c2a543162809c"
  },
  {
    "url": "assets/js/349.js",
    "revision": "aebe3a712539a98996e00f186402cecc"
  },
  {
    "url": "assets/js/35.js",
    "revision": "717c8fc856c8d056c0482b15c8f1b70f"
  },
  {
    "url": "assets/js/350.js",
    "revision": "e07251a4ac24db4d94abad23bd28625b"
  },
  {
    "url": "assets/js/351.js",
    "revision": "8e4f92e2e5ce5b99eff87550f3a5e849"
  },
  {
    "url": "assets/js/352.js",
    "revision": "ddd34dfdff5b436a3f37de7b16727b78"
  },
  {
    "url": "assets/js/353.js",
    "revision": "3ae33fa6a90181b35c56d782bb65823c"
  },
  {
    "url": "assets/js/354.js",
    "revision": "45e85cbfd38a1743a5ef209d049a2a5c"
  },
  {
    "url": "assets/js/355.js",
    "revision": "3b6698a5067a1bd02402d23018a797c5"
  },
  {
    "url": "assets/js/356.js",
    "revision": "98c3ced311e286dda5b27b51d56652ad"
  },
  {
    "url": "assets/js/357.js",
    "revision": "2335d9ff65213bcaf2c800614da3ec58"
  },
  {
    "url": "assets/js/358.js",
    "revision": "a0b464fa14862855b578e08efcf7d683"
  },
  {
    "url": "assets/js/359.js",
    "revision": "d086c375ea6918f3f3c1d190de913d52"
  },
  {
    "url": "assets/js/36.js",
    "revision": "ca11e1484c8f3e2da46d7c6ca12b3099"
  },
  {
    "url": "assets/js/360.js",
    "revision": "74f9fe8ef3b26f457f2a336aca39dd76"
  },
  {
    "url": "assets/js/361.js",
    "revision": "346008eb507383c44219a249dfbbd21b"
  },
  {
    "url": "assets/js/362.js",
    "revision": "45284efe6946c6da49ce50259d836b75"
  },
  {
    "url": "assets/js/363.js",
    "revision": "2bb05b5dbf1782f038b2635b53d8539d"
  },
  {
    "url": "assets/js/364.js",
    "revision": "2dd2cb78245bb4cebf735e1d2c2fb73b"
  },
  {
    "url": "assets/js/365.js",
    "revision": "48f21b09498513da2925b9f0d81975f2"
  },
  {
    "url": "assets/js/366.js",
    "revision": "82258f33a27bd58a63cac46490eb28a8"
  },
  {
    "url": "assets/js/367.js",
    "revision": "42a55b519ee5133612fdb39e2fb5f664"
  },
  {
    "url": "assets/js/368.js",
    "revision": "e21031555125d818e34b3c718839107c"
  },
  {
    "url": "assets/js/369.js",
    "revision": "339d4ccdfa9abf441cf7972a44397957"
  },
  {
    "url": "assets/js/37.js",
    "revision": "15da8f70f71edfeddfa3d0c4dc07b9cc"
  },
  {
    "url": "assets/js/370.js",
    "revision": "75f5d5c8309c92021bdea6f6525581a7"
  },
  {
    "url": "assets/js/371.js",
    "revision": "97defdd6f920a385701c70c6dfc9b818"
  },
  {
    "url": "assets/js/372.js",
    "revision": "0e164b1628d5e62e5ac51fa5bc153345"
  },
  {
    "url": "assets/js/373.js",
    "revision": "0db5f3df722de9ace81704be042ae732"
  },
  {
    "url": "assets/js/374.js",
    "revision": "864e9e26f61ba56640bea30268d9bd5d"
  },
  {
    "url": "assets/js/375.js",
    "revision": "88c54f9ed18f7c2aebd341c374271fee"
  },
  {
    "url": "assets/js/376.js",
    "revision": "42fef5745661037dbdeed4b578080a4f"
  },
  {
    "url": "assets/js/377.js",
    "revision": "39103cf463b0d08f5b7dc36c87788bb9"
  },
  {
    "url": "assets/js/378.js",
    "revision": "0b11cc9923f5742adcd45d445d8bcd60"
  },
  {
    "url": "assets/js/379.js",
    "revision": "3765464ef5af726ce91dbbbfe5d5873b"
  },
  {
    "url": "assets/js/38.js",
    "revision": "fd579a88f4fa5c34762ed5a8e155887d"
  },
  {
    "url": "assets/js/380.js",
    "revision": "cc322ce5a42bb1cb89ec826526b52e2f"
  },
  {
    "url": "assets/js/381.js",
    "revision": "0d914b14168290d379a0ea2665725b2b"
  },
  {
    "url": "assets/js/382.js",
    "revision": "8e91c2b532f3f57e2787893d1c4ef27b"
  },
  {
    "url": "assets/js/383.js",
    "revision": "5f09cc77ed3ddb18ea295041332e0cf3"
  },
  {
    "url": "assets/js/384.js",
    "revision": "5ad105862a6ad0235e2e3654f568278d"
  },
  {
    "url": "assets/js/385.js",
    "revision": "8db6b651a48b8ddfdbdca528bd8f9e9e"
  },
  {
    "url": "assets/js/386.js",
    "revision": "9980e1f73ee8693bb54267944c02ddf4"
  },
  {
    "url": "assets/js/387.js",
    "revision": "8030f2a486dc0c22ae6157bd21738da4"
  },
  {
    "url": "assets/js/388.js",
    "revision": "b43711f6438ea5acc0fed39942154ac6"
  },
  {
    "url": "assets/js/389.js",
    "revision": "e2c38c02d4fbf0c773c1a9e371331a84"
  },
  {
    "url": "assets/js/39.js",
    "revision": "18a5e6d7128c40751a00e150bac9ade1"
  },
  {
    "url": "assets/js/390.js",
    "revision": "cde4312942bc82848e1c5fdba736d499"
  },
  {
    "url": "assets/js/391.js",
    "revision": "9289a2c06dc2f3bdb4f48c2c003cb2f8"
  },
  {
    "url": "assets/js/392.js",
    "revision": "1205a84f7d206741313999066f2144ee"
  },
  {
    "url": "assets/js/393.js",
    "revision": "fe71125b80a8fadb6c436494d5233281"
  },
  {
    "url": "assets/js/394.js",
    "revision": "347517e2b041803e10f3922310db54a1"
  },
  {
    "url": "assets/js/395.js",
    "revision": "6121c65cb93d75f117c7c2d295e864e2"
  },
  {
    "url": "assets/js/396.js",
    "revision": "e8f91d3fe8c5c2060d8b8321204ca085"
  },
  {
    "url": "assets/js/397.js",
    "revision": "816b82487fffa2b06d87fd33dc9b09d9"
  },
  {
    "url": "assets/js/398.js",
    "revision": "eb54d3243c40c7968e778aee8aa83379"
  },
  {
    "url": "assets/js/399.js",
    "revision": "94f4cb2761e0cc3f04607d19a6be5b57"
  },
  {
    "url": "assets/js/4.js",
    "revision": "a7d6d4992f8cf6b16d60ec512a442fe7"
  },
  {
    "url": "assets/js/40.js",
    "revision": "7ce42fb52ca74f94079b971df678c16b"
  },
  {
    "url": "assets/js/400.js",
    "revision": "ce0e4da0c55b1a993a9a34375148568f"
  },
  {
    "url": "assets/js/401.js",
    "revision": "c46ad3c5f683a5f50093f2d817f2a950"
  },
  {
    "url": "assets/js/402.js",
    "revision": "ccae5d1283b234206ea70656e19b8674"
  },
  {
    "url": "assets/js/403.js",
    "revision": "a4886adad628a565f9fde61033888086"
  },
  {
    "url": "assets/js/404.js",
    "revision": "c0334d62ce261b37815248e83c7206e7"
  },
  {
    "url": "assets/js/405.js",
    "revision": "c5b8e0638b0d86021d84aac3b98fa642"
  },
  {
    "url": "assets/js/406.js",
    "revision": "4c0f06c88572fc397633733dab95241d"
  },
  {
    "url": "assets/js/407.js",
    "revision": "13a6450daea7d6b22276d30b07dde6ee"
  },
  {
    "url": "assets/js/408.js",
    "revision": "0b8290330f42196dc9adc7416cecd773"
  },
  {
    "url": "assets/js/409.js",
    "revision": "f3e862bde30b620097330302ffc3757f"
  },
  {
    "url": "assets/js/41.js",
    "revision": "359d4232c9b9739b82546975b06f91ae"
  },
  {
    "url": "assets/js/410.js",
    "revision": "b92cb412d401cbda667daf444dff70c7"
  },
  {
    "url": "assets/js/411.js",
    "revision": "caf27bff2e4173890859aa5578abc33e"
  },
  {
    "url": "assets/js/412.js",
    "revision": "0f9a57db3b309b7c59e27144e080a987"
  },
  {
    "url": "assets/js/413.js",
    "revision": "59ee5d05fe31498342ca7d7bf3f21fcd"
  },
  {
    "url": "assets/js/414.js",
    "revision": "af8215c5b96128c9e2a8d432507195da"
  },
  {
    "url": "assets/js/415.js",
    "revision": "f69d0bcfc759b67ff58717f7fc584e00"
  },
  {
    "url": "assets/js/416.js",
    "revision": "4cd424eca2ab83f8e4eb82c0fdb5e345"
  },
  {
    "url": "assets/js/417.js",
    "revision": "644f317939034df0b46c4d8f78206aac"
  },
  {
    "url": "assets/js/418.js",
    "revision": "1e25c153c621c01d9909c062cc5acfc4"
  },
  {
    "url": "assets/js/419.js",
    "revision": "f8e7d644e92544ce49edb3f8c5b99530"
  },
  {
    "url": "assets/js/42.js",
    "revision": "2b4d74783418b1ed94f41b38b1fb84b3"
  },
  {
    "url": "assets/js/420.js",
    "revision": "9617dbd9c71722d27a18f7719045c805"
  },
  {
    "url": "assets/js/421.js",
    "revision": "ad83f745616817a9671c961ff281725e"
  },
  {
    "url": "assets/js/422.js",
    "revision": "abcaeff26f1a61be695f64b5beb0778a"
  },
  {
    "url": "assets/js/423.js",
    "revision": "4600cb56440227b59ec087df433fff77"
  },
  {
    "url": "assets/js/424.js",
    "revision": "169bc577954f97f0d6dc620c74474b26"
  },
  {
    "url": "assets/js/425.js",
    "revision": "7b889e49aec97df3c5ed923afd05e1e6"
  },
  {
    "url": "assets/js/426.js",
    "revision": "5ecbd5505ac09447bb47c6af60358bcc"
  },
  {
    "url": "assets/js/427.js",
    "revision": "8d6c95316e4cd5256632297d0d48063f"
  },
  {
    "url": "assets/js/428.js",
    "revision": "26305a13e61923b183bae9301bfba70b"
  },
  {
    "url": "assets/js/429.js",
    "revision": "90058d7ca78cd52d1ed4d66343374f40"
  },
  {
    "url": "assets/js/43.js",
    "revision": "ac07388a3ecd159846bcb87b7952960a"
  },
  {
    "url": "assets/js/430.js",
    "revision": "1dd9ee0a8db5be91afdff22fb8a251c0"
  },
  {
    "url": "assets/js/431.js",
    "revision": "8b54d0f032030d1dd4fd4ea9b75a30f2"
  },
  {
    "url": "assets/js/432.js",
    "revision": "5b48b3e331a030cb9c0ec5bc4d927150"
  },
  {
    "url": "assets/js/433.js",
    "revision": "b8de6d0a44a0ffe72090f56f4c9f1287"
  },
  {
    "url": "assets/js/434.js",
    "revision": "7083d23ecd9a1d0cb95946bb897c3564"
  },
  {
    "url": "assets/js/435.js",
    "revision": "385d521e9f10061fa5a28e8fdd948444"
  },
  {
    "url": "assets/js/436.js",
    "revision": "757687723cb142fd5a8405d504c171b5"
  },
  {
    "url": "assets/js/437.js",
    "revision": "b1a6480a1acb333439096b9b7f816dc6"
  },
  {
    "url": "assets/js/438.js",
    "revision": "2cfe7e8550a2a317e5f931d81a6cd17e"
  },
  {
    "url": "assets/js/439.js",
    "revision": "57111bf57ed7b861e49dd9a1a344ccfe"
  },
  {
    "url": "assets/js/44.js",
    "revision": "147ce8e4a44bc139403b1d8a448914f4"
  },
  {
    "url": "assets/js/440.js",
    "revision": "d6b689e94a0e831c6f97e55e5fc11358"
  },
  {
    "url": "assets/js/441.js",
    "revision": "4000e3f97879a4d12abc2f36152d8405"
  },
  {
    "url": "assets/js/442.js",
    "revision": "d7deb416e89b1bf93b0a62d3637ff75d"
  },
  {
    "url": "assets/js/443.js",
    "revision": "f1dad0227bb7d2fbbce40222b6a156a1"
  },
  {
    "url": "assets/js/444.js",
    "revision": "dd19e943867cadd108679ae4cb0904b3"
  },
  {
    "url": "assets/js/445.js",
    "revision": "f5f1ad0be333bab859534f6e46ea79ae"
  },
  {
    "url": "assets/js/446.js",
    "revision": "c6aedb5eb15451edbbadd1fec8a376ca"
  },
  {
    "url": "assets/js/447.js",
    "revision": "5e144922fc2f2e8c47ff0ff7625c4476"
  },
  {
    "url": "assets/js/448.js",
    "revision": "b21672aeb5bcb3e0ef6a221350f99874"
  },
  {
    "url": "assets/js/449.js",
    "revision": "459696cb885b8c74c1ed1273fe66dd8b"
  },
  {
    "url": "assets/js/45.js",
    "revision": "086ba31a93bc776b52d46928e68e1e50"
  },
  {
    "url": "assets/js/450.js",
    "revision": "8fbd0b352637bfc205df233de352b0f7"
  },
  {
    "url": "assets/js/451.js",
    "revision": "5b243bd76644df4856368146b27c416d"
  },
  {
    "url": "assets/js/452.js",
    "revision": "1530b680ee323f6b0430d28f809022a9"
  },
  {
    "url": "assets/js/453.js",
    "revision": "ae2abe61400fe2b5d6d4410793cb58ce"
  },
  {
    "url": "assets/js/454.js",
    "revision": "141e78c122da815e515bcbfc10116ea0"
  },
  {
    "url": "assets/js/455.js",
    "revision": "9fb66a04059bad3ac2e746419c8596ef"
  },
  {
    "url": "assets/js/456.js",
    "revision": "68881490dd4c99c193164b59d7f9304c"
  },
  {
    "url": "assets/js/457.js",
    "revision": "af5453bce9cb6bc095125256cfe9f297"
  },
  {
    "url": "assets/js/458.js",
    "revision": "1f0424723a5d34d5da8ebeaf371e04e8"
  },
  {
    "url": "assets/js/459.js",
    "revision": "44b9f91206532d68c9e68a196fc15a9d"
  },
  {
    "url": "assets/js/46.js",
    "revision": "30e09e41bee05555b6e03c83c552dca4"
  },
  {
    "url": "assets/js/460.js",
    "revision": "31d63a997603216ba923f68aa92de2d0"
  },
  {
    "url": "assets/js/461.js",
    "revision": "9ca39ef3ac94f44fbd08c5ad88d0718a"
  },
  {
    "url": "assets/js/462.js",
    "revision": "27ee8660ddaeee435c823feb23c8f435"
  },
  {
    "url": "assets/js/463.js",
    "revision": "a15ac6d20a8be9edc664b0d72d2514aa"
  },
  {
    "url": "assets/js/464.js",
    "revision": "fb03c37204fc0164e4644baa6dd633b8"
  },
  {
    "url": "assets/js/465.js",
    "revision": "347558103029f0af5d1f8799e15cfa2a"
  },
  {
    "url": "assets/js/466.js",
    "revision": "3fa298fecf96b71fe95f0500fb4f2145"
  },
  {
    "url": "assets/js/467.js",
    "revision": "d994e5c4c974ff3b87a1151a8877609d"
  },
  {
    "url": "assets/js/468.js",
    "revision": "0b8d4cb36475b5c28ceea2f4ff899865"
  },
  {
    "url": "assets/js/469.js",
    "revision": "06c930b283a96f746a3710c86f559010"
  },
  {
    "url": "assets/js/47.js",
    "revision": "ac1f13ee0ec77364f15b0a78a4e615ed"
  },
  {
    "url": "assets/js/470.js",
    "revision": "a16491f02be17874b234f82d83ea17af"
  },
  {
    "url": "assets/js/471.js",
    "revision": "cc6acf9c38be4c954d0f27c8ee5acaec"
  },
  {
    "url": "assets/js/472.js",
    "revision": "20a6286fd5d78084ff5f65251539c9ea"
  },
  {
    "url": "assets/js/473.js",
    "revision": "15b03fb6179b51664ebc54cc3543047d"
  },
  {
    "url": "assets/js/474.js",
    "revision": "9e9f03316430e7099da4c39c76bafe63"
  },
  {
    "url": "assets/js/475.js",
    "revision": "cc73abddfa70857b8d289ee2f097e1dc"
  },
  {
    "url": "assets/js/476.js",
    "revision": "164c995648fe4d7043968d703c088ec7"
  },
  {
    "url": "assets/js/477.js",
    "revision": "fbcabd1985b49cfd16841517514e4eed"
  },
  {
    "url": "assets/js/478.js",
    "revision": "8a8213cee9d1780554475106dc09b18d"
  },
  {
    "url": "assets/js/479.js",
    "revision": "de014088fa96b7e62a57a1dc542ca5bd"
  },
  {
    "url": "assets/js/48.js",
    "revision": "558ca2eae3dba30b32e20bafe74f9558"
  },
  {
    "url": "assets/js/480.js",
    "revision": "d97cd7e36c2eb749a7624d84e9c2e687"
  },
  {
    "url": "assets/js/481.js",
    "revision": "aaac0764bb4b6bb43f5655dd6a562119"
  },
  {
    "url": "assets/js/482.js",
    "revision": "fce379e3e9d904d4606ba93a89d3ffde"
  },
  {
    "url": "assets/js/483.js",
    "revision": "2f6804212b1dde601040eaa7a64873c1"
  },
  {
    "url": "assets/js/484.js",
    "revision": "304e83b2222ddb7ce56ab3ceef51820a"
  },
  {
    "url": "assets/js/485.js",
    "revision": "b25316b01876049148a31b317ee3af0c"
  },
  {
    "url": "assets/js/486.js",
    "revision": "1473370f8509444b7ea1e2799700e6ed"
  },
  {
    "url": "assets/js/487.js",
    "revision": "901d0d8b9ff6a8809adde7618b82345d"
  },
  {
    "url": "assets/js/488.js",
    "revision": "1c3a32c96f95c866e4f77f937d3eb64f"
  },
  {
    "url": "assets/js/489.js",
    "revision": "15f329a96e4f6c7eeb3fc932f1f50919"
  },
  {
    "url": "assets/js/49.js",
    "revision": "830b8bba9e2ec7b3f38a68e9364cd5f3"
  },
  {
    "url": "assets/js/490.js",
    "revision": "6b79f0ad31fb7b9e3fb9da21073aee91"
  },
  {
    "url": "assets/js/491.js",
    "revision": "7b8e0b0559de099716ec9685ab64c960"
  },
  {
    "url": "assets/js/492.js",
    "revision": "438e7650c6809320ae408d4099264ec7"
  },
  {
    "url": "assets/js/493.js",
    "revision": "b3895620257352ca38ce5a016661e1bc"
  },
  {
    "url": "assets/js/494.js",
    "revision": "65935ce6f726fbe3bd855b3dd639ce8f"
  },
  {
    "url": "assets/js/495.js",
    "revision": "8b1c86445e9779ed65cc4b265dd000aa"
  },
  {
    "url": "assets/js/496.js",
    "revision": "44b8b9cc3e012ebfab6b634b637b95a2"
  },
  {
    "url": "assets/js/497.js",
    "revision": "eca9474b1c220751a0cd18e3851e18f7"
  },
  {
    "url": "assets/js/498.js",
    "revision": "127b168010962695caf356881e2af748"
  },
  {
    "url": "assets/js/499.js",
    "revision": "4f15b4b9446f3e80346d20da463fde2d"
  },
  {
    "url": "assets/js/5.js",
    "revision": "cc40fea98d4a5f6d97c32b6498454af8"
  },
  {
    "url": "assets/js/50.js",
    "revision": "fd2e9afe5cff7da2c8fddf72cd530546"
  },
  {
    "url": "assets/js/500.js",
    "revision": "ba4242b23c3a52f96ca6a41c731dd11d"
  },
  {
    "url": "assets/js/501.js",
    "revision": "9621fc264061522ef30b1e6a31d55fec"
  },
  {
    "url": "assets/js/502.js",
    "revision": "66380f2ae3c1d1e995a056982e9c724a"
  },
  {
    "url": "assets/js/503.js",
    "revision": "a02c8b6c4ebf47daf3cdad0414bf2404"
  },
  {
    "url": "assets/js/504.js",
    "revision": "3e0827ed7c20f5735386e08b309ccedd"
  },
  {
    "url": "assets/js/505.js",
    "revision": "5124eef08e285a6ce2b13a34a7fb11c8"
  },
  {
    "url": "assets/js/506.js",
    "revision": "17e0a6e50a81c02678b62ecd2d0adfb2"
  },
  {
    "url": "assets/js/507.js",
    "revision": "d0623ff8997f8870a7aee9bd4ee7c564"
  },
  {
    "url": "assets/js/508.js",
    "revision": "d3a5b7f40d70520f67c11d8d491805c2"
  },
  {
    "url": "assets/js/509.js",
    "revision": "4d136dc6c8013ad86fd5ddcc1cb6458c"
  },
  {
    "url": "assets/js/51.js",
    "revision": "2480c87c7f820146133e1863f0c6f7df"
  },
  {
    "url": "assets/js/510.js",
    "revision": "b7c28d3d5a13e502ca56c2749c5466b0"
  },
  {
    "url": "assets/js/511.js",
    "revision": "41a4c0cf7b93f80533103a4b278b61eb"
  },
  {
    "url": "assets/js/512.js",
    "revision": "e0aa22dd211fb885d6f2fbfcfb8ddc4c"
  },
  {
    "url": "assets/js/513.js",
    "revision": "752d6fe12526f35c1d7073931fca29ed"
  },
  {
    "url": "assets/js/514.js",
    "revision": "76cfddc5350d8bc602a142c32aa1e69c"
  },
  {
    "url": "assets/js/515.js",
    "revision": "0d2e01f4a101993cfcb06870de57445a"
  },
  {
    "url": "assets/js/516.js",
    "revision": "fcc52d495a2a3dc9d90f06c75176c059"
  },
  {
    "url": "assets/js/517.js",
    "revision": "f936eb7a474a2f698315af93f0fe7288"
  },
  {
    "url": "assets/js/518.js",
    "revision": "6c4959dbe40601e674817568c0744e71"
  },
  {
    "url": "assets/js/519.js",
    "revision": "3098aad9887b204f69380e3b93cbc7db"
  },
  {
    "url": "assets/js/52.js",
    "revision": "c255a5209a805632a82b00808da1f324"
  },
  {
    "url": "assets/js/520.js",
    "revision": "7f13e20784b605b9bf243db639fd7509"
  },
  {
    "url": "assets/js/521.js",
    "revision": "35db1eab6daa564805f710322e1d468f"
  },
  {
    "url": "assets/js/522.js",
    "revision": "363b33d6dfaf8854ee05e8f88fc4b7aa"
  },
  {
    "url": "assets/js/523.js",
    "revision": "83b8997493edf6cb41ec8df19fa9d7c0"
  },
  {
    "url": "assets/js/524.js",
    "revision": "cbceee3e0b57e109f3abd8bdc816633f"
  },
  {
    "url": "assets/js/525.js",
    "revision": "934e22a3e71cc8860e79537c6a4eac9c"
  },
  {
    "url": "assets/js/526.js",
    "revision": "c56b1d4e5d9da66a69e783cd0efab94e"
  },
  {
    "url": "assets/js/527.js",
    "revision": "126f88a1a158a82e902642551d5b2ef2"
  },
  {
    "url": "assets/js/528.js",
    "revision": "592b7edb964dafd6b696ad3ef765a58b"
  },
  {
    "url": "assets/js/529.js",
    "revision": "936d4ad6ac3246c4ab27e7d41a21d1b7"
  },
  {
    "url": "assets/js/53.js",
    "revision": "728cd6cdb7cfa8bf611868409e068318"
  },
  {
    "url": "assets/js/530.js",
    "revision": "8ad6affc58caa0adfa598656e840c6cc"
  },
  {
    "url": "assets/js/531.js",
    "revision": "2714fe71b468c16f3755b8da5c827fa5"
  },
  {
    "url": "assets/js/532.js",
    "revision": "c71978486bc46008d8ce42cad1a88306"
  },
  {
    "url": "assets/js/533.js",
    "revision": "7b02991f1e96dcea068a0bf2c46328dc"
  },
  {
    "url": "assets/js/534.js",
    "revision": "e142d1f908937c0ae6738b2b382ae746"
  },
  {
    "url": "assets/js/535.js",
    "revision": "7bac176cb6774b8f69241766878b4d4c"
  },
  {
    "url": "assets/js/536.js",
    "revision": "d2038cf92698226038973e670e068d47"
  },
  {
    "url": "assets/js/537.js",
    "revision": "0f0286cf19b3bb83102b01a0064101e6"
  },
  {
    "url": "assets/js/538.js",
    "revision": "2e45f797f4332bba3e9653fed84e2090"
  },
  {
    "url": "assets/js/539.js",
    "revision": "82930a2862387320134114c3328b0f18"
  },
  {
    "url": "assets/js/54.js",
    "revision": "9e0a99af6b3af493b086e2557dd7d42b"
  },
  {
    "url": "assets/js/540.js",
    "revision": "e31758aafc7db54790d26b3446d95155"
  },
  {
    "url": "assets/js/541.js",
    "revision": "da380c160fc80696638a9c9ff7c28ce4"
  },
  {
    "url": "assets/js/542.js",
    "revision": "d11af98581a7dc22782507b9da260926"
  },
  {
    "url": "assets/js/543.js",
    "revision": "4ce14fe89a1e4364c6ba95a6607b01f4"
  },
  {
    "url": "assets/js/544.js",
    "revision": "3d03c4fc208e275404114e393c69031b"
  },
  {
    "url": "assets/js/545.js",
    "revision": "d712364bb82d1a72b3d815561e36a55f"
  },
  {
    "url": "assets/js/546.js",
    "revision": "4a78ab456255f9c456b5abeeea4b4215"
  },
  {
    "url": "assets/js/547.js",
    "revision": "a605156a78387665f13dd416f8754047"
  },
  {
    "url": "assets/js/548.js",
    "revision": "4dfff2aeb4fc89195809c56421d223e4"
  },
  {
    "url": "assets/js/549.js",
    "revision": "60f8373da23d2e1666c49ce5ea05f6bc"
  },
  {
    "url": "assets/js/55.js",
    "revision": "2f18616d1e4548a31f14e17c068209dc"
  },
  {
    "url": "assets/js/550.js",
    "revision": "0918db57652d24541208f79441596892"
  },
  {
    "url": "assets/js/551.js",
    "revision": "e938802a8d856f274bbf6677fd119de8"
  },
  {
    "url": "assets/js/552.js",
    "revision": "7b0a60f449cd91202f38a088d6f082ff"
  },
  {
    "url": "assets/js/553.js",
    "revision": "eb06e07b0350396fba3a17e74582a6e5"
  },
  {
    "url": "assets/js/554.js",
    "revision": "fe3c401bd6ed932ae0243d693c0873b0"
  },
  {
    "url": "assets/js/555.js",
    "revision": "bcb5de814eac8feeffba05762ced2882"
  },
  {
    "url": "assets/js/556.js",
    "revision": "2e57cf4a5319749ac2d9c88cf793285a"
  },
  {
    "url": "assets/js/557.js",
    "revision": "585f2dcc3d28d5e9177820f2cbf7bcf8"
  },
  {
    "url": "assets/js/558.js",
    "revision": "ad3f6dec3dcf6017abe981ac3b203ca6"
  },
  {
    "url": "assets/js/559.js",
    "revision": "87642c421dd092b2f3da2183eea57631"
  },
  {
    "url": "assets/js/56.js",
    "revision": "057785be70d05b08f0fc01a79dfe51eb"
  },
  {
    "url": "assets/js/560.js",
    "revision": "0ee1407f50cb33f4934eae1523b19b03"
  },
  {
    "url": "assets/js/561.js",
    "revision": "1de98b8b7d083c89b223e3f2c9e50600"
  },
  {
    "url": "assets/js/562.js",
    "revision": "6c78f5682865547d7034f7629aa74f77"
  },
  {
    "url": "assets/js/563.js",
    "revision": "d98464495305bd6c85de7a62f1190cd7"
  },
  {
    "url": "assets/js/564.js",
    "revision": "fbe4bdecb224a8b7fe90b0cc29610cba"
  },
  {
    "url": "assets/js/565.js",
    "revision": "f4535e4631976de8ea74d3e202a7467e"
  },
  {
    "url": "assets/js/566.js",
    "revision": "817f54f163e61e745b828bdc53221b6c"
  },
  {
    "url": "assets/js/567.js",
    "revision": "1073357aed4bd2c710dfdf5b1fe34e62"
  },
  {
    "url": "assets/js/568.js",
    "revision": "a3bc2c097aa739ff53a327d949769abe"
  },
  {
    "url": "assets/js/569.js",
    "revision": "f7add0baaccccd3151bb2ec0ccdf3724"
  },
  {
    "url": "assets/js/57.js",
    "revision": "e17497b7613e7d6269168219cd5dbb3e"
  },
  {
    "url": "assets/js/570.js",
    "revision": "44962664166f95b0b5ff3fed05fef174"
  },
  {
    "url": "assets/js/571.js",
    "revision": "84e27f60ca6c2e8f2d309d1c4c768f77"
  },
  {
    "url": "assets/js/572.js",
    "revision": "f333a68ba2193bd1b9f217d881766857"
  },
  {
    "url": "assets/js/573.js",
    "revision": "d90756aa29204bcdc6bd6a455147c941"
  },
  {
    "url": "assets/js/574.js",
    "revision": "c7877526ad568708f640b74abe89605b"
  },
  {
    "url": "assets/js/575.js",
    "revision": "a9f3f05c8262786fe3a09a32175657cd"
  },
  {
    "url": "assets/js/576.js",
    "revision": "6612e9758a567ebd926269344c4448cb"
  },
  {
    "url": "assets/js/577.js",
    "revision": "1a1a4da862a8021f149b88980f1ec35e"
  },
  {
    "url": "assets/js/578.js",
    "revision": "dec26375ed21d28c40400c3bc38a6511"
  },
  {
    "url": "assets/js/579.js",
    "revision": "92f119a645eee66541e53735a1191f2b"
  },
  {
    "url": "assets/js/58.js",
    "revision": "5a3ee307126b695db7d66681694d287a"
  },
  {
    "url": "assets/js/580.js",
    "revision": "cbcce81fd061b5babadd2340cb7b7902"
  },
  {
    "url": "assets/js/581.js",
    "revision": "8048ae9539a4d5a38c92ff2944a01cd1"
  },
  {
    "url": "assets/js/582.js",
    "revision": "8f39193f29c12b8453c6e61c9f49e8d1"
  },
  {
    "url": "assets/js/583.js",
    "revision": "12fcdb21890c4784b02692521b0198ac"
  },
  {
    "url": "assets/js/584.js",
    "revision": "78c556d358142c403fbb69c7cd396817"
  },
  {
    "url": "assets/js/585.js",
    "revision": "2e9d6e5447b9890dc0b6707870e71667"
  },
  {
    "url": "assets/js/586.js",
    "revision": "f59659d68b8fabfe1459ede0c15848b8"
  },
  {
    "url": "assets/js/587.js",
    "revision": "ac86e14e97d4c81cc0621c12f315eae3"
  },
  {
    "url": "assets/js/588.js",
    "revision": "cfedce418cadc57e82e25cfa70fb2c9a"
  },
  {
    "url": "assets/js/589.js",
    "revision": "b241fcfc66fc922f461fd53f2534e7a2"
  },
  {
    "url": "assets/js/59.js",
    "revision": "6419faa71d016a17943d5c16eb9cd965"
  },
  {
    "url": "assets/js/590.js",
    "revision": "d12cb26be44458f2a9d3407ea6663dbf"
  },
  {
    "url": "assets/js/591.js",
    "revision": "e4fa8d623839ce75413c997889044ce6"
  },
  {
    "url": "assets/js/6.js",
    "revision": "830a98a95cc00fc6d192e4f8f06f642f"
  },
  {
    "url": "assets/js/60.js",
    "revision": "b3199bfe437505af24ce8f1a6ffec64d"
  },
  {
    "url": "assets/js/61.js",
    "revision": "956d4d5b993d3d6fd1b76b77ad56c976"
  },
  {
    "url": "assets/js/62.js",
    "revision": "f8591606b295e2ffc1f76625a922d4de"
  },
  {
    "url": "assets/js/63.js",
    "revision": "7ceed64ef1f14c0f4b61b760f6e689b2"
  },
  {
    "url": "assets/js/64.js",
    "revision": "dcc41d6e5d36c082c0fcaddf11fc95ad"
  },
  {
    "url": "assets/js/65.js",
    "revision": "305aaea2785a5d6a26f83c838ade6e9b"
  },
  {
    "url": "assets/js/66.js",
    "revision": "2667a270f97b717fc900ec62c258c4e7"
  },
  {
    "url": "assets/js/67.js",
    "revision": "fdf01777d055d2f136c2a308bf16c7a9"
  },
  {
    "url": "assets/js/68.js",
    "revision": "3de02a3ef962a09c2f4242972fd76556"
  },
  {
    "url": "assets/js/69.js",
    "revision": "6c311fea7d8c19b07d9894f6ea75a581"
  },
  {
    "url": "assets/js/7.js",
    "revision": "6ae8b11c6384e842826a7d597a789ff5"
  },
  {
    "url": "assets/js/70.js",
    "revision": "ba6c169283fa1298ee2cfd3358e7282e"
  },
  {
    "url": "assets/js/71.js",
    "revision": "9aeca269aa27cc587c6dbb81c77fb680"
  },
  {
    "url": "assets/js/72.js",
    "revision": "4a3a823beb05cce331af0751d7b7d79e"
  },
  {
    "url": "assets/js/73.js",
    "revision": "d60622e842d4a8c52ee2ac1e2a2b339c"
  },
  {
    "url": "assets/js/74.js",
    "revision": "a5ba5d2a97961422f5bcfea34f183fc3"
  },
  {
    "url": "assets/js/75.js",
    "revision": "22e36590ec78534b761b115324be6533"
  },
  {
    "url": "assets/js/76.js",
    "revision": "00e5ce4f48c77ed865dba757a30451ab"
  },
  {
    "url": "assets/js/77.js",
    "revision": "656ed4988a6f882f1b3b894700ea9870"
  },
  {
    "url": "assets/js/78.js",
    "revision": "3a0d8123a197f6ce2cbd54402dc47238"
  },
  {
    "url": "assets/js/79.js",
    "revision": "cdba877d247df2c40bafe49fa7157745"
  },
  {
    "url": "assets/js/8.js",
    "revision": "6cdfbe9d9ccfed3d2d2a45d9d7a6049f"
  },
  {
    "url": "assets/js/80.js",
    "revision": "645edbae42a26f6e29e0b08d49f3b844"
  },
  {
    "url": "assets/js/81.js",
    "revision": "d086ed245cda86a347c3784da2752e31"
  },
  {
    "url": "assets/js/82.js",
    "revision": "07191023def80429cd0fbdd629a436d1"
  },
  {
    "url": "assets/js/83.js",
    "revision": "95e3fc29ba4cc7b9759045cba1796fac"
  },
  {
    "url": "assets/js/84.js",
    "revision": "29de03a587de205601c9edc152ca9d4e"
  },
  {
    "url": "assets/js/85.js",
    "revision": "f058221af70c318840bf61e47f40f34c"
  },
  {
    "url": "assets/js/86.js",
    "revision": "5a11ee085f4c3d11a590cf1d5bcb84a1"
  },
  {
    "url": "assets/js/87.js",
    "revision": "e1b7190e84ffc7695a77ea0a8401121a"
  },
  {
    "url": "assets/js/88.js",
    "revision": "0b06274aa2f59402d1a35e002355bd34"
  },
  {
    "url": "assets/js/89.js",
    "revision": "408d8d63c33fb3bddff9a45de24481e5"
  },
  {
    "url": "assets/js/9.js",
    "revision": "7b933e2a068db53f178fcb4baee71192"
  },
  {
    "url": "assets/js/90.js",
    "revision": "9a3d044ff6b17aa9ec9bf77cbe8fad99"
  },
  {
    "url": "assets/js/91.js",
    "revision": "7301b10b7986d26b7344ccf9fcb2ab53"
  },
  {
    "url": "assets/js/92.js",
    "revision": "04cd2b19a7ee26cd52a2183d2b87866a"
  },
  {
    "url": "assets/js/93.js",
    "revision": "6073bc2d86d88b33885ab0b38bf1b7b8"
  },
  {
    "url": "assets/js/94.js",
    "revision": "d310a48bdc6deb5dbe1128124fab5281"
  },
  {
    "url": "assets/js/95.js",
    "revision": "6171d17da29ba1cc4163cd17dabf9d3e"
  },
  {
    "url": "assets/js/96.js",
    "revision": "8242db79336e8fa96c592ec6744ee5af"
  },
  {
    "url": "assets/js/97.js",
    "revision": "c8be5b595d9debebb225ab459d21e682"
  },
  {
    "url": "assets/js/98.js",
    "revision": "42c07bb69486d59c6e5891327d1f4768"
  },
  {
    "url": "assets/js/99.js",
    "revision": "8a5071f06f2dc094023a7bb85a3109b6"
  },
  {
    "url": "assets/js/app.js",
    "revision": "1a0e4167969304b9389ccc4b9623a551"
  },
  {
    "url": "assets/js/styles.js",
    "revision": "22f22b49cc901aa95826401f7ce0930c"
  },
  {
    "url": "blog/category/index.html",
    "revision": "554d18654b4669798ced12006defc9bf"
  },
  {
    "url": "blog/code/artists/index.html",
    "revision": "058d6411b95a43ce8359cb659c69f2a2"
  },
  {
    "url": "blog/code/asa.sbh.nz/index.html",
    "revision": "0861bdbbafd3b02b80b56df5285c273e"
  },
  {
    "url": "blog/code/divider/index.html",
    "revision": "2c594db7f2788ebbdbad9db78da546b7"
  },
  {
    "url": "blog/code/first/index.html",
    "revision": "79af2a0dfccfd7dc43723a4c695336f7"
  },
  {
    "url": "blog/code/fishbarrel/index.html",
    "revision": "dc60071d6bca5114a5c71193d9d51ae6"
  },
  {
    "url": "blog/code/indent/index.html",
    "revision": "4f723ad72eab183df3c7c5ea67d4b3cd"
  },
  {
    "url": "blog/code/index.html",
    "revision": "5c1aca9024869df2eac73fc3b8d899f6"
  },
  {
    "url": "blog/code/ingoa.nz/index.html",
    "revision": "32d495bfeb53583dcccf0748a16bbf4c"
  },
  {
    "url": "blog/code/nzondemand/index.html",
    "revision": "88ae3f606c6f16b5620286e07adb2d38"
  },
  {
    "url": "blog/code/picard/index.html",
    "revision": "d64c7c2a72250f7925ba912e6fd32f2d"
  },
  {
    "url": "blog/code/qr/index.html",
    "revision": "5cc27430fda2a0a6ecec124a9665359a"
  },
  {
    "url": "blog/code/rotx/index.html",
    "revision": "a9c479e33a375df242147c27cac253a1"
  },
  {
    "url": "blog/code/website/index.html",
    "revision": "761922ed46c773ff0d184b2320a0c475"
  },
  {
    "url": "blog/code/website/route/index.html",
    "revision": "411506072ffd9d2b236c1fd8bb31f22a"
  },
  {
    "url": "blog/code/website/site/index.html",
    "revision": "2319ddee6d23be3fc5110f912fc25395"
  },
  {
    "url": "blog/code/xmltv.co.nz/index.html",
    "revision": "e79c457a4511900be0f12a1b51d607e9"
  },
  {
    "url": "blog/howto/index.html",
    "revision": "78c70a5976152d3324d8cdc6894ff692"
  },
  {
    "url": "blog/howto/intel865/index.html",
    "revision": "ff251c354db04aa36c77608876d84ec3"
  },
  {
    "url": "blog/howto/nexentastor/index.html",
    "revision": "b58191e683bbcbbd0b80bf304332ab33"
  },
  {
    "url": "blog/howto/pcloadletter/index.html",
    "revision": "51abdde64c20942cf1fefb09a77dc429"
  },
  {
    "url": "blog/howto/raid5/index.html",
    "revision": "57f2440f2b8a25b0e012de3601f9d064"
  },
  {
    "url": "blog/index.html",
    "revision": "65d8fc83146ad01818cd4d1ca60b3014"
  },
  {
    "url": "blog/life/anotheryear/index.html",
    "revision": "a03d66087fce5b9ea13ae0e4a2f6e655"
  },
  {
    "url": "blog/life/birthday/index.html",
    "revision": "c3851fdbd4fb8b38ed83d4990123a87b"
  },
  {
    "url": "blog/life/blasphemy/index.html",
    "revision": "dcf2d793ec7375e57e4744ad14452a5f"
  },
  {
    "url": "blog/life/blogger/index.html",
    "revision": "467351d9ef128f154d543785089e655c"
  },
  {
    "url": "blog/life/blurry/index.html",
    "revision": "acc9598266a196a224c331036b364fb4"
  },
  {
    "url": "blog/life/domain/index.html",
    "revision": "dab85f2be40ad235e88c1d8dafd6690c"
  },
  {
    "url": "blog/life/exams/index.html",
    "revision": "e88073ee26c26bc27eb01532e3141f76"
  },
  {
    "url": "blog/life/food/index.html",
    "revision": "c93c816fa88b55b2194700c14a916c3a"
  },
  {
    "url": "blog/life/glenview/index.html",
    "revision": "230bf8cfa4f0f28004c78d49dbf08a6d"
  },
  {
    "url": "blog/life/headlines/index.html",
    "revision": "1c9707e5c7c6f47f49b3c5e77f469165"
  },
  {
    "url": "blog/life/index.html",
    "revision": "31d94a6cc6d26936727d520bfdd1f2c0"
  },
  {
    "url": "blog/life/jws/index.html",
    "revision": "e76741b740694e71a742442b43f112f5"
  },
  {
    "url": "blog/life/keyboard/index.html",
    "revision": "9e55a62921abaf18548f3daf1232e675"
  },
  {
    "url": "blog/life/lpi201/index.html",
    "revision": "836b15386ac2d8311b4594c876f68705"
  },
  {
    "url": "blog/life/mashup/index.html",
    "revision": "212aeeed7e6c94fbedcf1dc87960dfda"
  },
  {
    "url": "blog/life/motorweb/index.html",
    "revision": "493ad8a3bacb01420cdc53a02443eff1"
  },
  {
    "url": "blog/life/nxe/index.html",
    "revision": "43cfca2cd329d446941ef4a00570d3a9"
  },
  {
    "url": "blog/life/plates/index.html",
    "revision": "bd3073578ff62a7ccfa738ac368bc447"
  },
  {
    "url": "blog/life/queenstown/index.html",
    "revision": "fab431207621e465e1d76fe304d87213"
  },
  {
    "url": "blog/life/racism/index.html",
    "revision": "371bf3ea381ffb02c79531f094c9aece"
  },
  {
    "url": "blog/life/roads/index.html",
    "revision": "e353bc5949005bb278580fc6fd9363ff"
  },
  {
    "url": "blog/life/scare/index.html",
    "revision": "b4448f3be4ceb6267d4d864d84760d31"
  },
  {
    "url": "blog/life/scary/index.html",
    "revision": "9981ea4e772232d7a041a4618ff213df"
  },
  {
    "url": "blog/life/seti/index.html",
    "revision": "32afae5902a197c54667c8dd2e6fa493"
  },
  {
    "url": "blog/life/skeptical/index.html",
    "revision": "850f55f84dbbb6cf7b1bf236c2d67e90"
  },
  {
    "url": "blog/life/skepticzone/index.html",
    "revision": "b37072def474b05cfea20c2b5a35712a"
  },
  {
    "url": "blog/life/spam/index.html",
    "revision": "e639540c3a448ba3f442645e4fe19ed7"
  },
  {
    "url": "blog/life/trademe/index.html",
    "revision": "8da0491b9793d4bdf675b1920e618736"
  },
  {
    "url": "blog/life/unforeseen/index.html",
    "revision": "b09e969f6ceb25874811d5408b861859"
  },
  {
    "url": "blog/life/wobbly/index.html",
    "revision": "9f55cd970b6b80e987c578c040c9bce5"
  },
  {
    "url": "blog/projects/airbag/index.html",
    "revision": "15f95cfbf457b57a7ed4120068717ab4"
  },
  {
    "url": "blog/projects/ambilight/index.html",
    "revision": "a69873e2b4c9c06f849bb44a55527360"
  },
  {
    "url": "blog/projects/automation/index.html",
    "revision": "8464fc6418b580ed34ffb9a6e5b4f316"
  },
  {
    "url": "blog/projects/eyes/index.html",
    "revision": "d598766be15663549b4248e36d3467ec"
  },
  {
    "url": "blog/projects/glitch/index.html",
    "revision": "c092f32f68813d7b48ae2308497c9e85"
  },
  {
    "url": "blog/projects/index.html",
    "revision": "411aa42d9cf21bf646e0864a724ccfb9"
  },
  {
    "url": "blog/projects/it100/index.html",
    "revision": "31398d10be0b24ea33a493e1aae86f31"
  },
  {
    "url": "blog/projects/microscope/index.html",
    "revision": "af4aa1928264a16d7e62c9511703067a"
  },
  {
    "url": "blog/projects/mirror/index.html",
    "revision": "e21a5deba4f2fe6acd3f8822603c991d"
  },
  {
    "url": "blog/projects/picture/index.html",
    "revision": "858aee762f22dcc3700882cc5d49b3ff"
  },
  {
    "url": "blog/projects/pizza/index.html",
    "revision": "e7a3ca691e9ab3ab84f14014d98a3133"
  },
  {
    "url": "blog/projects/podcast/index.html",
    "revision": "6b2751bc8404e93aac71fe325db7521f"
  },
  {
    "url": "blog/projects/reflow/index.html",
    "revision": "9d884f44ceed3c4c4687d889fe8392b3"
  },
  {
    "url": "blog/projects/sandbox/index.html",
    "revision": "f1cccc6d1461a3b0ac36af557dba06c7"
  },
  {
    "url": "blog/projects/screens/index.html",
    "revision": "55d70aafe583c21dd9abf3ed47e285ca"
  },
  {
    "url": "blog/projects/sky/index.html",
    "revision": "2b681ac47fd2755c5a5ba42bbf7e3fbb"
  },
  {
    "url": "blog/projects/starwars/index.html",
    "revision": "11d5eaf7d6196900615a6b1ccdee6e4c"
  },
  {
    "url": "blog/projects/xbox/index.html",
    "revision": "5012e6e5cc3c322c50b7711e2c8a0fca"
  },
  {
    "url": "blog/random/addresses/index.html",
    "revision": "27313ab391335405a578855a6645b6cc"
  },
  {
    "url": "blog/random/alphabet/index.html",
    "revision": "22b5e26fe503344af6a83611f108f647"
  },
  {
    "url": "blog/random/astrology/index.html",
    "revision": "6b9dd5d8bee0bb67cb1a169e4cdedd31"
  },
  {
    "url": "blog/random/chicken/index.html",
    "revision": "612c07aef7cad3bdc8dd78c6331cf8a4"
  },
  {
    "url": "blog/random/dns/index.html",
    "revision": "458cff7fb5df696e3e5740639e3ff2c1"
  },
  {
    "url": "blog/random/evp/index.html",
    "revision": "30b0f7bf05028c921f39f37be34f7695"
  },
  {
    "url": "blog/random/flip/index.html",
    "revision": "db563e6c706ca2fa6514552de5d08ccb"
  },
  {
    "url": "blog/random/honeychurch/index.html",
    "revision": "590a57800fe444052f991b7aea456bd5"
  },
  {
    "url": "blog/random/index.html",
    "revision": "4207640e3284ab593b7fdb813b375411"
  },
  {
    "url": "blog/random/lottery/index.html",
    "revision": "eedec3e51adc31a3b84190bf95744cd9"
  },
  {
    "url": "blog/random/music/index.html",
    "revision": "2fe5ec0234d5ddb00b25fc241c554b55"
  },
  {
    "url": "blog/random/octal/index.html",
    "revision": "8f630119557e8dc1c8dd85624a92cdb8"
  },
  {
    "url": "blog/random/os/index.html",
    "revision": "1092dcd0754517bf82e8dda171c2b693"
  },
  {
    "url": "blog/random/propellers/index.html",
    "revision": "3d08e1fed10731e6bf1cf54cb1d1d16f"
  },
  {
    "url": "blog/random/robux/index.html",
    "revision": "4c9018ba08c0201887e81d8ed2420aec"
  },
  {
    "url": "blog/random/super/index.html",
    "revision": "42e5dba69d279e844cbed0bf5ee925d9"
  },
  {
    "url": "blog/random/times/index.html",
    "revision": "6ff52503ef6761c4f13f1329cb9c2ae8"
  },
  {
    "url": "blog/random/travel/index.html",
    "revision": "81dc2e352d3061c4fdbad19132b03b0d"
  },
  {
    "url": "blog/random/wilhelm/index.html",
    "revision": "6caa20cba084ec8c58a6b4aac5f0aaf6"
  },
  {
    "url": "blog/random/year/index.html",
    "revision": "f2f0bf01e39f689d8db09fb4b69cceb1"
  },
  {
    "url": "blog/skepticism/2015/08/16/asa/index.html",
    "revision": "9858edc74f1b9ad477090e94507ad161"
  },
  {
    "url": "blog/skepticism/2015/08/16/awards/index.html",
    "revision": "7d02144fce5352606fdba9838ec2f492"
  },
  {
    "url": "blog/skepticism/2015/08/16/bravo/index.html",
    "revision": "c09c5cd7563cd80b3f8dd64d85e753ac"
  },
  {
    "url": "blog/skepticism/2015/08/16/index.html",
    "revision": "8cd365210b434fd5d5fe13d49334ab57"
  },
  {
    "url": "blog/skepticism/2015/08/16/jim/index.html",
    "revision": "1517c435942ef92360fe98820f4a4064"
  },
  {
    "url": "blog/skepticism/2015/08/16/naholo/index.html",
    "revision": "1638f28f9109e311029559f6489cfb5f"
  },
  {
    "url": "blog/skepticism/2015/08/16/resene/index.html",
    "revision": "8144f366dfc031ce5309fbc685d1f7d6"
  },
  {
    "url": "blog/skepticism/2015/08/index.html",
    "revision": "21363329d1964c10af4302c015276f47"
  },
  {
    "url": "blog/skepticism/2015/09/20/gop/index.html",
    "revision": "dfdd6b554609d49ad4eb5ecbd67d2253"
  },
  {
    "url": "blog/skepticism/2015/09/20/ignobel/index.html",
    "revision": "750b48b83feddcab118396e72335b4a2"
  },
  {
    "url": "blog/skepticism/2015/09/20/index.html",
    "revision": "cc7875b5a880ef594e226c7375bad817"
  },
  {
    "url": "blog/skepticism/2015/09/20/supplements/index.html",
    "revision": "ed2856682fc27bbc0c23dd066cae55fb"
  },
  {
    "url": "blog/skepticism/2015/09/27/ayahuasca/index.html",
    "revision": "435400641a40d5e84f15fb175eb37782"
  },
  {
    "url": "blog/skepticism/2015/09/27/drought/index.html",
    "revision": "7d6fda183596ab1ffa2c8cc6f16edafd"
  },
  {
    "url": "blog/skepticism/2015/09/27/index.html",
    "revision": "0e7943c40c91090f0dcedb003e520570"
  },
  {
    "url": "blog/skepticism/2015/09/27/lama/index.html",
    "revision": "e649d0e45f54d538fa25c2903b5ea331"
  },
  {
    "url": "blog/skepticism/2015/09/27/moon/index.html",
    "revision": "c5079f443a423036d8e57a303efac1e5"
  },
  {
    "url": "blog/skepticism/2015/09/27/scan/index.html",
    "revision": "cdd3184963cc4a75bb62297e002f753c"
  },
  {
    "url": "blog/skepticism/2015/09/index.html",
    "revision": "599acdd9a85cfe5315ecd44e1b6c6426"
  },
  {
    "url": "blog/skepticism/2015/10/04/ghost/index.html",
    "revision": "9c1e119727754038e904bed14d3e6dba"
  },
  {
    "url": "blog/skepticism/2015/10/04/haka/index.html",
    "revision": "f7cebd5aeef9c37856b02424640a9f3f"
  },
  {
    "url": "blog/skepticism/2015/10/04/index.html",
    "revision": "8e73396bb14b830189ee666ee1fb883a"
  },
  {
    "url": "blog/skepticism/2015/10/04/mars/index.html",
    "revision": "6b324aa2b1549917375a78caf37546cd"
  },
  {
    "url": "blog/skepticism/2015/10/04/pharmacy/index.html",
    "revision": "315e17c1397791aeea01c11f80ae1be4"
  },
  {
    "url": "blog/skepticism/2015/10/04/prostate/index.html",
    "revision": "e21c9cdba827d31262a9159ab65d1551"
  },
  {
    "url": "blog/skepticism/2015/10/11/armageddon/index.html",
    "revision": "2df3f470ee575fa3bcbe3984c256a998"
  },
  {
    "url": "blog/skepticism/2015/10/11/climate/index.html",
    "revision": "afe3966035f69ecc8f1fe66a1f6f82f0"
  },
  {
    "url": "blog/skepticism/2015/10/11/ghost/index.html",
    "revision": "0e46fd55a4f511d8a8ce40fde163bdef"
  },
  {
    "url": "blog/skepticism/2015/10/11/index.html",
    "revision": "46e6a8cfa2a1b0350b5c84e41b2a8305"
  },
  {
    "url": "blog/skepticism/2015/10/11/magnesleep/index.html",
    "revision": "f12876b836208eacf7a225a3c9291b49"
  },
  {
    "url": "blog/skepticism/2015/10/11/nhs/index.html",
    "revision": "1bed655acbadb31a468736406616aa15"
  },
  {
    "url": "blog/skepticism/2015/10/11/prophet/index.html",
    "revision": "bb9b6c47fddf17f0a7d235d90e78b15b"
  },
  {
    "url": "blog/skepticism/2015/10/index.html",
    "revision": "87bb7b5b4e66c1e23f951eb1df037cb1"
  },
  {
    "url": "blog/skepticism/2015/11/15/end/index.html",
    "revision": "8831e1d783ea16be858e4e2ce3d28582"
  },
  {
    "url": "blog/skepticism/2015/11/15/index.html",
    "revision": "7dd32302f650ab65f2165c1f8140a3e0"
  },
  {
    "url": "blog/skepticism/2015/11/index.html",
    "revision": "f284345e470082cd534728051a6e7233"
  },
  {
    "url": "blog/skepticism/2015/12/13/astrology/index.html",
    "revision": "05a35eeacf8534d389907e097bdac28c"
  },
  {
    "url": "blog/skepticism/2015/12/13/cancer/index.html",
    "revision": "51e69570b5db5794830809a7af13069d"
  },
  {
    "url": "blog/skepticism/2015/12/13/chickenpox/index.html",
    "revision": "a92ec80beed9299062f4c289fe4e2a23"
  },
  {
    "url": "blog/skepticism/2015/12/13/index.html",
    "revision": "2c2399b784d8f349c736c5661253904d"
  },
  {
    "url": "blog/skepticism/2015/12/13/osteopath/index.html",
    "revision": "3f3463d3e44607f449e699c83337b542"
  },
  {
    "url": "blog/skepticism/2015/12/13/priest/index.html",
    "revision": "eb881f65fb42344f2f54fe25182f30e5"
  },
  {
    "url": "blog/skepticism/2015/12/13/psychic/index.html",
    "revision": "4244d212cedcc8fba7d225506f10fbd4"
  },
  {
    "url": "blog/skepticism/2015/12/13/vaccines/index.html",
    "revision": "1fa59bd5f596001f2c7d9e8414a6e861"
  },
  {
    "url": "blog/skepticism/2015/12/index.html",
    "revision": "3abbbd3ed6a7c6e6795a766b6c6632b0"
  },
  {
    "url": "blog/skepticism/2015/index.html",
    "revision": "19ed06fb0c005bffb483db9734d984a7"
  },
  {
    "url": "blog/skepticism/2016/02/07/antioxidant/index.html",
    "revision": "fdecfad13fe3381918e8951c9399bcce"
  },
  {
    "url": "blog/skepticism/2016/02/07/index.html",
    "revision": "1ec7e6fcfa193ad503b0719873964bf5"
  },
  {
    "url": "blog/skepticism/2016/02/07/kfc/index.html",
    "revision": "04cdef623283911913d0ae1f45b6ed27"
  },
  {
    "url": "blog/skepticism/2016/02/07/ph/index.html",
    "revision": "01b2a6b447cf3424612bae4d22369912"
  },
  {
    "url": "blog/skepticism/2016/02/07/sandy/index.html",
    "revision": "2d4a8ddaf4fcf524054ccb8043da3e6a"
  },
  {
    "url": "blog/skepticism/2016/02/07/sarfati/index.html",
    "revision": "836e28bd87d56bfa696761e11c747e23"
  },
  {
    "url": "blog/skepticism/2016/02/07/trump/index.html",
    "revision": "386640519e8e3dbf105270c4835b456c"
  },
  {
    "url": "blog/skepticism/2016/02/14/coins/index.html",
    "revision": "f513663ea3209f69884e0a6c43f3ba63"
  },
  {
    "url": "blog/skepticism/2016/02/14/fast/index.html",
    "revision": "3e47a98ab49a09a25edec312e5aed78f"
  },
  {
    "url": "blog/skepticism/2016/02/14/fluoride/index.html",
    "revision": "75fc28a5f71c48be3ffaaa947bf74dcd"
  },
  {
    "url": "blog/skepticism/2016/02/14/icke/index.html",
    "revision": "906cdabce006a34fc2837a44bcede1e6"
  },
  {
    "url": "blog/skepticism/2016/02/14/index.html",
    "revision": "4865bbcf127ebd4a9400e7e9f4d9f9e8"
  },
  {
    "url": "blog/skepticism/2016/02/14/yeti/index.html",
    "revision": "470828fcaa7f6cabea2a2fe01bac64f3"
  },
  {
    "url": "blog/skepticism/2016/02/21/homeopathy/index.html",
    "revision": "1bd1998f78d365a85c3cee168f886db0"
  },
  {
    "url": "blog/skepticism/2016/02/21/index.html",
    "revision": "d9a6ea418a74d3e3c816d369846143d0"
  },
  {
    "url": "blog/skepticism/2016/02/21/monster/index.html",
    "revision": "00f606e601dbe93f733cb1444e19ecaa"
  },
  {
    "url": "blog/skepticism/2016/02/21/scalia/index.html",
    "revision": "cdc139f63848fa890d2df2442f6da2be"
  },
  {
    "url": "blog/skepticism/2016/02/21/shane/index.html",
    "revision": "1518dd7fcb59f73b37bf3699096935cd"
  },
  {
    "url": "blog/skepticism/2016/02/21/texas/index.html",
    "revision": "45dbe7027f9aea98de736c8be653e2f4"
  },
  {
    "url": "blog/skepticism/2016/02/28/acupuncture/index.html",
    "revision": "b91eee56fe0b21514d73454cdabe6983"
  },
  {
    "url": "blog/skepticism/2016/02/28/fsm/index.html",
    "revision": "8c5696736ebd555c4691ed4ccf7e22f3"
  },
  {
    "url": "blog/skepticism/2016/02/28/index.html",
    "revision": "4fc580767011511f93368c48347fa59b"
  },
  {
    "url": "blog/skepticism/2016/02/28/iv/index.html",
    "revision": "638cf720a07d8723e7dcd407d232e953"
  },
  {
    "url": "blog/skepticism/2016/02/28/natural/index.html",
    "revision": "47a97056110d758c1fa0d74fe9578f93"
  },
  {
    "url": "blog/skepticism/2016/02/28/talc/index.html",
    "revision": "2659e7b12103b63a1643fc30934eaf68"
  },
  {
    "url": "blog/skepticism/2016/02/index.html",
    "revision": "90dd88ccf0d221f108e315151cead85f"
  },
  {
    "url": "blog/skepticism/2016/03/13/herbs/index.html",
    "revision": "eac4e3b4df0d5efe48b15db42f74ce76"
  },
  {
    "url": "blog/skepticism/2016/03/13/index.html",
    "revision": "9f1dfc57a0b59f40f57bdeb27f5729b5"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandala/index.html",
    "revision": "aba7b129fb37cfd34c451db355fd6d4c"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandela/index.html",
    "revision": "2f0a5f780fbd2cdf2b267c00eed923a2"
  },
  {
    "url": "blog/skepticism/2016/03/13/spray/index.html",
    "revision": "68b1d4665ed66521e077bca42e184421"
  },
  {
    "url": "blog/skepticism/2016/03/index.html",
    "revision": "58113ee73ce519e496535268c6c9c82f"
  },
  {
    "url": "blog/skepticism/2016/04/17/charity/index.html",
    "revision": "af67c0c379c9c4a1e8d0379ddcb0bfe8"
  },
  {
    "url": "blog/skepticism/2016/04/17/chiro/index.html",
    "revision": "17634f3488fb2873477b42c9b0c8e0cf"
  },
  {
    "url": "blog/skepticism/2016/04/17/fluoride/index.html",
    "revision": "a8f025f541a62ce5883c9fb74794e9b6"
  },
  {
    "url": "blog/skepticism/2016/04/17/index.html",
    "revision": "5d5ed1f9d431417194c9b96eff1a960e"
  },
  {
    "url": "blog/skepticism/2016/04/17/lotto/index.html",
    "revision": "c24ac8dfb0709f81a883256970a5b4e3"
  },
  {
    "url": "blog/skepticism/2016/04/17/mind/index.html",
    "revision": "e0de70128089431ff2c1fc88f6e0af68"
  },
  {
    "url": "blog/skepticism/2016/04/17/whooping/index.html",
    "revision": "84cb412db4396925ce6424777a1bfb41"
  },
  {
    "url": "blog/skepticism/2016/04/index.html",
    "revision": "733015d190abd001e75320806b1a326b"
  },
  {
    "url": "blog/skepticism/2016/06/05/1080/index.html",
    "revision": "6cfa61e33ea0d45878ba0fa8a7caaf70"
  },
  {
    "url": "blog/skepticism/2016/06/05/acupuncture/index.html",
    "revision": "2144eb31e0b7dbef25adf4ee5974d28e"
  },
  {
    "url": "blog/skepticism/2016/06/05/family/index.html",
    "revision": "a9c6774923a1376a22ede5c63a5e42a0"
  },
  {
    "url": "blog/skepticism/2016/06/05/index.html",
    "revision": "027eac89c3e4a9c50ec7130d381b05fc"
  },
  {
    "url": "blog/skepticism/2016/06/05/limbaugh/index.html",
    "revision": "1e7287199d5085cf358b55ae444b527c"
  },
  {
    "url": "blog/skepticism/2016/06/12/bobby/index.html",
    "revision": "cd528992346bd564b09178b836579038"
  },
  {
    "url": "blog/skepticism/2016/06/12/climate/index.html",
    "revision": "b8c3f53287ee959e6fb0cc66d81b0d4b"
  },
  {
    "url": "blog/skepticism/2016/06/12/index.html",
    "revision": "9cfe41b538c932d456622b73e9f6f5c9"
  },
  {
    "url": "blog/skepticism/2016/06/12/pugh/index.html",
    "revision": "a8fc6a2118c5342f3c9687e02d8d3ddc"
  },
  {
    "url": "blog/skepticism/2016/06/12/savage/index.html",
    "revision": "7dbb374d682030a7e193c17640cf31b3"
  },
  {
    "url": "blog/skepticism/2016/06/12/sawdust/index.html",
    "revision": "c3e80b735fcf0d032e31bdd5fb36e2e0"
  },
  {
    "url": "blog/skepticism/2016/06/19/beauty/index.html",
    "revision": "d0291fe7568b022128f2903f82b5a133"
  },
  {
    "url": "blog/skepticism/2016/06/19/bilderberg/index.html",
    "revision": "be100ec023f2d61085a0badf78dd713d"
  },
  {
    "url": "blog/skepticism/2016/06/19/cyf/index.html",
    "revision": "f7948c4f3fad31e05aaec5fece1630d8"
  },
  {
    "url": "blog/skepticism/2016/06/19/holt/index.html",
    "revision": "49883e71f69c0e8e85ceca28ae1a808a"
  },
  {
    "url": "blog/skepticism/2016/06/19/index.html",
    "revision": "c57577426ae1bf5467747e0a62459af5"
  },
  {
    "url": "blog/skepticism/2016/06/19/silver/index.html",
    "revision": "14ad17b93c902436cc6c5b62de3ec1c4"
  },
  {
    "url": "blog/skepticism/2016/06/19/ufo/index.html",
    "revision": "8a47243e458b49399a5eef2783f4d17a"
  },
  {
    "url": "blog/skepticism/2016/06/26/homeopathy/index.html",
    "revision": "de71e571821a96ff4a581c2142b8c54f"
  },
  {
    "url": "blog/skepticism/2016/06/26/index.html",
    "revision": "0dde62e1dcf616b253ad657e9c17bc16"
  },
  {
    "url": "blog/skepticism/2016/06/26/robbins/index.html",
    "revision": "9cb9c12ea29ee2c6441e8eefcd694b4a"
  },
  {
    "url": "blog/skepticism/2016/06/26/selfies/index.html",
    "revision": "0402f1ea28ddf647261f26d162f5b094"
  },
  {
    "url": "blog/skepticism/2016/06/26/silver/index.html",
    "revision": "a75c98362c0b1d0c4c81ff091616dfac"
  },
  {
    "url": "blog/skepticism/2016/06/26/ufos/index.html",
    "revision": "a2087b5fc29d1c8fac265702e79e5113"
  },
  {
    "url": "blog/skepticism/2016/06/index.html",
    "revision": "1702b93604ff9104b56b658df8ecd7c1"
  },
  {
    "url": "blog/skepticism/2016/07/03/glyphosate/index.html",
    "revision": "09697cbbf8cfa70ce254b9a166850c57"
  },
  {
    "url": "blog/skepticism/2016/07/03/gmo/index.html",
    "revision": "e58c9f7648df51ff75415e5fb98f10e7"
  },
  {
    "url": "blog/skepticism/2016/07/03/index.html",
    "revision": "10b872f9b522d7e9c11369e2eab01db4"
  },
  {
    "url": "blog/skepticism/2016/07/03/jail/index.html",
    "revision": "e71499b6be4a8b166fedc52ed39e317c"
  },
  {
    "url": "blog/skepticism/2016/07/03/ken/index.html",
    "revision": "6b8a78ed63acc22b9bef662238c6f2ba"
  },
  {
    "url": "blog/skepticism/2016/07/10/ark/index.html",
    "revision": "7b10f65c6c6e95a022bc3a6e56f7fca2"
  },
  {
    "url": "blog/skepticism/2016/07/10/bee/index.html",
    "revision": "e97f82c8ca812917f6c4a32376999f55"
  },
  {
    "url": "blog/skepticism/2016/07/10/index.html",
    "revision": "ea3d2604c9f508f5c29a893b725445fb"
  },
  {
    "url": "blog/skepticism/2016/07/10/lottery/index.html",
    "revision": "f0e9c0fc0a31693fd584615f788c566c"
  },
  {
    "url": "blog/skepticism/2016/07/10/murder/index.html",
    "revision": "78b7f9e806c265aee9872617d3b43957"
  },
  {
    "url": "blog/skepticism/2016/07/17/dogs/index.html",
    "revision": "1d72011c6c575c56677a6d31d86b3fe1"
  },
  {
    "url": "blog/skepticism/2016/07/17/fsm/index.html",
    "revision": "90248eebf3de96a9350dd64c88fb2bf2"
  },
  {
    "url": "blog/skepticism/2016/07/17/fyi/index.html",
    "revision": "8114016e704a76aad70e6fe0e7407219"
  },
  {
    "url": "blog/skepticism/2016/07/17/index.html",
    "revision": "3e8b0c9e0a4282a5ace51946d75bd516"
  },
  {
    "url": "blog/skepticism/2016/07/17/natural/index.html",
    "revision": "c0904d5ce424238fa649420e3c74b137"
  },
  {
    "url": "blog/skepticism/2016/07/17/pokemon/index.html",
    "revision": "a06bb7be57070ab7230d75a25f8617ed"
  },
  {
    "url": "blog/skepticism/2016/07/index.html",
    "revision": "9950ff4542f711c41521ce296cbd6b23"
  },
  {
    "url": "blog/skepticism/2016/08/07/icke/index.html",
    "revision": "880e46e463b018e0e4eda2248c152b99"
  },
  {
    "url": "blog/skepticism/2016/08/07/index.html",
    "revision": "be1b6730c653e4325507b9c1b23a61f2"
  },
  {
    "url": "blog/skepticism/2016/08/21/brian/index.html",
    "revision": "0a03965662a8c7b84b41a2c15f08d745"
  },
  {
    "url": "blog/skepticism/2016/08/21/chlorine/index.html",
    "revision": "834bf1a34fe1ab7cc346f6254976d388"
  },
  {
    "url": "blog/skepticism/2016/08/21/index.html",
    "revision": "8ea144721d3ccd5ff749b05c881056f5"
  },
  {
    "url": "blog/skepticism/2016/08/21/murder/index.html",
    "revision": "c6843fdd306187a5b208696e83be040a"
  },
  {
    "url": "blog/skepticism/2016/08/21/superfoods/index.html",
    "revision": "2f9afe7425a2c12394c0f32da698425c"
  },
  {
    "url": "blog/skepticism/2016/08/21/witch/index.html",
    "revision": "f2b168bc1d2b4397d59dc3ab5d639d2a"
  },
  {
    "url": "blog/skepticism/2016/08/28/alcohol/index.html",
    "revision": "d2f7e6edf39732a47ccd1954607fc0b3"
  },
  {
    "url": "blog/skepticism/2016/08/28/chiro/index.html",
    "revision": "f59b92d7880c500839e41f6d449004a4"
  },
  {
    "url": "blog/skepticism/2016/08/28/index.html",
    "revision": "246e4608e7e535df3066355f7090ab25"
  },
  {
    "url": "blog/skepticism/2016/08/28/processed/index.html",
    "revision": "427379c438cbef2cc56f092f3967eebe"
  },
  {
    "url": "blog/skepticism/2016/08/28/sbh/index.html",
    "revision": "f9f8da571e44ad869aa3d5c2a5ceffdd"
  },
  {
    "url": "blog/skepticism/2016/08/index.html",
    "revision": "82091f2c45242bd90e79ce3d3d81fc6b"
  },
  {
    "url": "blog/skepticism/2016/09/18/altruism/index.html",
    "revision": "48fe5798fe89bb60246c45492231214e"
  },
  {
    "url": "blog/skepticism/2016/09/18/better/index.html",
    "revision": "868ee826ac911d609479296277cb7211"
  },
  {
    "url": "blog/skepticism/2016/09/18/homeopathy/index.html",
    "revision": "53bb40eb0b88e446c69925bec4351e67"
  },
  {
    "url": "blog/skepticism/2016/09/18/index.html",
    "revision": "fd23a2996485823132faa0303bcabd56"
  },
  {
    "url": "blog/skepticism/2016/09/18/nonsense/index.html",
    "revision": "81ba1522406537401c6685b99749c8d6"
  },
  {
    "url": "blog/skepticism/2016/09/18/trump/index.html",
    "revision": "0f9705391e7f954058a9f24fffdeddc7"
  },
  {
    "url": "blog/skepticism/2016/09/25/clinic/index.html",
    "revision": "36c7a66fe37888bb026ce63ac0e4ea21"
  },
  {
    "url": "blog/skepticism/2016/09/25/fluoride/index.html",
    "revision": "1b626caff7520b2ca97e372ab667bf33"
  },
  {
    "url": "blog/skepticism/2016/09/25/homeopathy/index.html",
    "revision": "82dd33b6cd971f0903c2600fc6c5537a"
  },
  {
    "url": "blog/skepticism/2016/09/25/index.html",
    "revision": "27a0ab2ca095047c15806370c4c2bb3a"
  },
  {
    "url": "blog/skepticism/2016/09/25/murder/index.html",
    "revision": "3ad9e992d983039d453a826a5552a741"
  },
  {
    "url": "blog/skepticism/2016/09/index.html",
    "revision": "a901347861ad4a9bb70578eac3613040"
  },
  {
    "url": "blog/skepticism/2016/10/21/bigfoot/index.html",
    "revision": "cc0fb84a397a41b0313efdd0e05f8c8a"
  },
  {
    "url": "blog/skepticism/2016/10/21/breasts/index.html",
    "revision": "456f8a338b21e7b8bdcdcbdce5438edb"
  },
  {
    "url": "blog/skepticism/2016/10/21/index.html",
    "revision": "bb21f2f76c0255dd04bf590db1706bda"
  },
  {
    "url": "blog/skepticism/2016/10/21/medsafe/index.html",
    "revision": "b281bcdfcc4a85eb8528a01ddf9de201"
  },
  {
    "url": "blog/skepticism/2016/10/21/zenteq/index.html",
    "revision": "c04469436d7767c16cbfa2e53887a9a5"
  },
  {
    "url": "blog/skepticism/2016/10/index.html",
    "revision": "39bcc64590d38120ab9c3b4732b85153"
  },
  {
    "url": "blog/skepticism/2016/11/13/conference/index.html",
    "revision": "a6d78e8f7033e54a0835e9c6c368a47e"
  },
  {
    "url": "blog/skepticism/2016/11/13/green/index.html",
    "revision": "8ca83d39e5702c25dcb6d1fc527ed089"
  },
  {
    "url": "blog/skepticism/2016/11/13/index.html",
    "revision": "3bab86299b2f1c7a7d11a2612cc269b4"
  },
  {
    "url": "blog/skepticism/2016/11/13/vice/index.html",
    "revision": "0b52c75c71df46c1c42b4f80940e79b5"
  },
  {
    "url": "blog/skepticism/2016/11/27/bioptron/index.html",
    "revision": "8043d74c6b9aaa629062dc2406a8f89c"
  },
  {
    "url": "blog/skepticism/2016/11/27/conference/index.html",
    "revision": "60aa8f027c1d83d3d6ba1fa3d755c957"
  },
  {
    "url": "blog/skepticism/2016/11/27/earthquake/index.html",
    "revision": "2aa5ddbeed78261fc003b763142d97fc"
  },
  {
    "url": "blog/skepticism/2016/11/27/index.html",
    "revision": "136399c546374bd7f48b9974892fd6f5"
  },
  {
    "url": "blog/skepticism/2016/11/index.html",
    "revision": "7adf697c759d9abd9ac6f5179ba0c754"
  },
  {
    "url": "blog/skepticism/2016/12/04/conference/index.html",
    "revision": "0a740a700febb9db3d9fd976cfc92b74"
  },
  {
    "url": "blog/skepticism/2016/12/04/index.html",
    "revision": "b440ff9636b6fa785994d0f90e379baf"
  },
  {
    "url": "blog/skepticism/2016/12/18/colin/index.html",
    "revision": "922fffab4ef95b3fa1720bd47595021b"
  },
  {
    "url": "blog/skepticism/2016/12/18/fiji/index.html",
    "revision": "650f2036035862c96f4075de2bd6c88c"
  },
  {
    "url": "blog/skepticism/2016/12/18/index.html",
    "revision": "6d5601e0060562f5922d7b0e74d568f2"
  },
  {
    "url": "blog/skepticism/2016/12/18/kinesiology/index.html",
    "revision": "2e5fe1ae2ae109babc148f3ff24e8082"
  },
  {
    "url": "blog/skepticism/2016/12/18/mmm/index.html",
    "revision": "3a39a83c37553b7b3f4cfa62b64661cb"
  },
  {
    "url": "blog/skepticism/2016/12/18/nigel/index.html",
    "revision": "722730caf454fda9b7f4b576c5f18152"
  },
  {
    "url": "blog/skepticism/2016/12/index.html",
    "revision": "374fe9716e579e1e025ec23f89fd6fda"
  },
  {
    "url": "blog/skepticism/2016/index.html",
    "revision": "bc6711bf7a3551bcff939f3ace1d7384"
  },
  {
    "url": "blog/skepticism/2017/01/22/index.html",
    "revision": "ec4de4a603df277b167902436d6aeeb6"
  },
  {
    "url": "blog/skepticism/2017/01/22/scientology/index.html",
    "revision": "2749199a0e3822bdc9a10ccb0dbf639a"
  },
  {
    "url": "blog/skepticism/2017/01/29/creation/index.html",
    "revision": "de62ac135cffcbb9f8d6b8690dd45825"
  },
  {
    "url": "blog/skepticism/2017/01/29/index.html",
    "revision": "d78c4180f45e334f182d465232de3e1f"
  },
  {
    "url": "blog/skepticism/2017/01/index.html",
    "revision": "bb70639f0272a79a0c19873dbd920022"
  },
  {
    "url": "blog/skepticism/2017/02/05/fraudster/index.html",
    "revision": "e7d363eeb6207c601fbcf4351400768b"
  },
  {
    "url": "blog/skepticism/2017/02/05/gervais/index.html",
    "revision": "c1a2cd6efc5689451ae16c2f542fae10"
  },
  {
    "url": "blog/skepticism/2017/02/05/index.html",
    "revision": "3304f9d9dee1376ffd319c2565ffc6e2"
  },
  {
    "url": "blog/skepticism/2017/02/05/scientology/index.html",
    "revision": "5f33cba4583ecf077740c5122dfcac65"
  },
  {
    "url": "blog/skepticism/2017/02/19/homeopathy/index.html",
    "revision": "9e9f4a90a6170cc24d37d20cc2217f4c"
  },
  {
    "url": "blog/skepticism/2017/02/19/index.html",
    "revision": "d2e1f2d5dead2505aa06a8467d1d8ea6"
  },
  {
    "url": "blog/skepticism/2017/02/19/lottery/index.html",
    "revision": "5b9fc6fba83d93b973e411abb527a5e9"
  },
  {
    "url": "blog/skepticism/2017/02/19/vaxxed/index.html",
    "revision": "e135a9a73f6cb5d7664048225a876bb1"
  },
  {
    "url": "blog/skepticism/2017/02/19/whales/index.html",
    "revision": "178638251e960785b04acfbe4ad763fd"
  },
  {
    "url": "blog/skepticism/2017/02/index.html",
    "revision": "7a7d214ab2e41dc57cfcfc8e082a1bb2"
  },
  {
    "url": "blog/skepticism/2017/03/05/index.html",
    "revision": "027e4cc1ea9326b8fc9610520df2cdc4"
  },
  {
    "url": "blog/skepticism/2017/03/05/rea/index.html",
    "revision": "ae48618834c9bc76728fe0f701a7ecb1"
  },
  {
    "url": "blog/skepticism/2017/03/19/fake/index.html",
    "revision": "59195932631c1374d9c88f3506f1439c"
  },
  {
    "url": "blog/skepticism/2017/03/19/index.html",
    "revision": "a6e9a18b778b33659fb04bf9841c08df"
  },
  {
    "url": "blog/skepticism/2017/03/19/murder/index.html",
    "revision": "35d79250376928422b36c9f42d06e1f9"
  },
  {
    "url": "blog/skepticism/2017/03/26/census/index.html",
    "revision": "047543adc3a0e023b1939b9756800ad9"
  },
  {
    "url": "blog/skepticism/2017/03/26/index.html",
    "revision": "73d71159e95874ea40f114ab19fa1fc6"
  },
  {
    "url": "blog/skepticism/2017/03/26/nzmj/index.html",
    "revision": "312f2f64b3996c45f4da6e1f715d5e27"
  },
  {
    "url": "blog/skepticism/2017/03/26/shaquille/index.html",
    "revision": "f3be0a022bf10fad5e8d51d96fde44bc"
  },
  {
    "url": "blog/skepticism/2017/03/index.html",
    "revision": "b795cb9dfbca87af15f930f6fced6a0b"
  },
  {
    "url": "blog/skepticism/2017/04/02/index.html",
    "revision": "a07d499c50928439916700bbb27e800c"
  },
  {
    "url": "blog/skepticism/2017/04/02/nasa/index.html",
    "revision": "c5e2c949cd6ab9673d5fdd1fc3c033a0"
  },
  {
    "url": "blog/skepticism/2017/04/02/science/index.html",
    "revision": "fbfb5a68f962fc2171ca246143196003"
  },
  {
    "url": "blog/skepticism/2017/04/02/vaxxed/index.html",
    "revision": "064bc0bd377040e932221b440de3fc23"
  },
  {
    "url": "blog/skepticism/2017/04/09/index.html",
    "revision": "a5bd07482f1900bb5a14bdb498d0882a"
  },
  {
    "url": "blog/skepticism/2017/04/09/tekiri/index.html",
    "revision": "b88641bf85e47f1fa4a319d577b33960"
  },
  {
    "url": "blog/skepticism/2017/04/09/vaxxed/index.html",
    "revision": "26ea22ddf9714d1f614ece5614d74c42"
  },
  {
    "url": "blog/skepticism/2017/04/23/arise/index.html",
    "revision": "9793f2e4f6bee8527029714998aa1432"
  },
  {
    "url": "blog/skepticism/2017/04/23/index.html",
    "revision": "34a421fddfc817ee4a627ac6592f849e"
  },
  {
    "url": "blog/skepticism/2017/04/23/kelvin/index.html",
    "revision": "b8ccf51490b6af4e810d85a99536dcf0"
  },
  {
    "url": "blog/skepticism/2017/04/index.html",
    "revision": "893ba0529ef1d194b9896a634898bf13"
  },
  {
    "url": "blog/skepticism/2017/05/07/cancer/index.html",
    "revision": "165ebd44534e1fc73c5f59ed93626cde"
  },
  {
    "url": "blog/skepticism/2017/05/07/index.html",
    "revision": "bdaa599405290365fcb45280a452f07f"
  },
  {
    "url": "blog/skepticism/2017/05/07/nigel/index.html",
    "revision": "9b1d69d0b61f446f8dd37b858cbb2c64"
  },
  {
    "url": "blog/skepticism/2017/05/21/blasphemy/index.html",
    "revision": "60c98e1db8424f6749747da431b9a442"
  },
  {
    "url": "blog/skepticism/2017/05/21/flat/index.html",
    "revision": "67fae89795b0e6a05dce1cc982a5e28c"
  },
  {
    "url": "blog/skepticism/2017/05/21/index.html",
    "revision": "da2498cef30feb2720445523769aba99"
  },
  {
    "url": "blog/skepticism/2017/05/21/maori/index.html",
    "revision": "51902480ec8e9ef191078a2631341f9a"
  },
  {
    "url": "blog/skepticism/2017/05/index.html",
    "revision": "36914947281c8bd2b022a58f5b05821d"
  },
  {
    "url": "blog/skepticism/2017/06/04/bigelow/index.html",
    "revision": "5be3449b71a23debf1a0d41e556aa3d0"
  },
  {
    "url": "blog/skepticism/2017/06/04/climate/index.html",
    "revision": "cd7083905df5654c9e86caa4a2d8f98b"
  },
  {
    "url": "blog/skepticism/2017/06/04/hansford/index.html",
    "revision": "6caaf04af3a05b6e70e11b287270ee98"
  },
  {
    "url": "blog/skepticism/2017/06/04/index.html",
    "revision": "4a5b3c2652b263dcfc868440cf538d32"
  },
  {
    "url": "blog/skepticism/2017/06/04/wasp/index.html",
    "revision": "6622c9501b62708d9c415402f95eb598"
  },
  {
    "url": "blog/skepticism/2017/06/11/colonic/index.html",
    "revision": "0a27a72f94d68af4e931a80c4ffc0105"
  },
  {
    "url": "blog/skepticism/2017/06/11/credulous/index.html",
    "revision": "0ebf8e83e31b2895b11be01b345c3c01"
  },
  {
    "url": "blog/skepticism/2017/06/11/index.html",
    "revision": "2a2f66a465c01172d5207dbb659407aa"
  },
  {
    "url": "blog/skepticism/2017/06/11/journals/index.html",
    "revision": "facce3a3545bdc2aa8e8cf6920905261"
  },
  {
    "url": "blog/skepticism/2017/06/18/breatharians/index.html",
    "revision": "0b6fed6c361c0a8b946a1e14e4c29e04"
  },
  {
    "url": "blog/skepticism/2017/06/18/fieldays/index.html",
    "revision": "2b92683b139a092825c6ded5b3a59d45"
  },
  {
    "url": "blog/skepticism/2017/06/18/index.html",
    "revision": "01d50b1d9cc9da8ba97de9f73ff5aabe"
  },
  {
    "url": "blog/skepticism/2017/06/18/jw/index.html",
    "revision": "6554e4207241114f90b2185316dc549e"
  },
  {
    "url": "blog/skepticism/2017/06/18/oil/index.html",
    "revision": "e4c111ebdd8368c09368dbacb2f68b1b"
  },
  {
    "url": "blog/skepticism/2017/06/index.html",
    "revision": "2db77db972eeacd0c9ad28a8e07c0e18"
  },
  {
    "url": "blog/skepticism/2017/07/02/baby/index.html",
    "revision": "8d7b8f825a60a721217ff8dfc265b526"
  },
  {
    "url": "blog/skepticism/2017/07/02/index.html",
    "revision": "f5dc97b2f3441db237f832799543bbf3"
  },
  {
    "url": "blog/skepticism/2017/07/02/infowars/index.html",
    "revision": "14cdd827368a1185e6c5cac4686c6e83"
  },
  {
    "url": "blog/skepticism/2017/07/02/scientology/index.html",
    "revision": "515b23d95a5f422e4648bebaf634af7f"
  },
  {
    "url": "blog/skepticism/2017/07/16/bananas/index.html",
    "revision": "530359933f5b8995949e800ce8f9b81d"
  },
  {
    "url": "blog/skepticism/2017/07/16/circles/index.html",
    "revision": "6a4e2296c6cf967204fa2b77868dfe3a"
  },
  {
    "url": "blog/skepticism/2017/07/16/index.html",
    "revision": "28aa3c66876015463adba516d2b0b9fe"
  },
  {
    "url": "blog/skepticism/2017/07/16/siggi/index.html",
    "revision": "4cf373b15a00de2315c0c8125d563861"
  },
  {
    "url": "blog/skepticism/2017/07/16/vaxxed/index.html",
    "revision": "fd267131c6452087bbe1d50a8ef1286b"
  },
  {
    "url": "blog/skepticism/2017/07/30/bleach/index.html",
    "revision": "49b5d8e06578796a7a36a56daf2e3450"
  },
  {
    "url": "blog/skepticism/2017/07/30/bluebeam/index.html",
    "revision": "c28b9bc6bbb8f7bce9068469a74a92f0"
  },
  {
    "url": "blog/skepticism/2017/07/30/index.html",
    "revision": "5af2f8d015d0825aefe97078af688144"
  },
  {
    "url": "blog/skepticism/2017/07/30/police/index.html",
    "revision": "59a163bdca3188ea59fb9c9a249cea0c"
  },
  {
    "url": "blog/skepticism/2017/07/index.html",
    "revision": "5c55f92774d6b9a2782ceecc037ebc32"
  },
  {
    "url": "blog/skepticism/2017/08/06/conned/index.html",
    "revision": "ae05ac172f4e851f30ad5303afe10564"
  },
  {
    "url": "blog/skepticism/2017/08/06/doll/index.html",
    "revision": "e15eb72504e3902d55aa706f07a02d71"
  },
  {
    "url": "blog/skepticism/2017/08/06/index.html",
    "revision": "6cc9aa4c90592c2899757db36be85fb3"
  },
  {
    "url": "blog/skepticism/2017/08/06/jacinda/index.html",
    "revision": "a200680fa97460df6d572e16061ccccd"
  },
  {
    "url": "blog/skepticism/2017/08/06/lotto/index.html",
    "revision": "e28a48011bca5111a504b3cf9cdaf002"
  },
  {
    "url": "blog/skepticism/2017/08/27/index.html",
    "revision": "184b89ad2e9cdf4cac2efe14747537dc"
  },
  {
    "url": "blog/skepticism/2017/08/27/naturopath/index.html",
    "revision": "f50d5ce32ba0aad7d60cf9b40795247b"
  },
  {
    "url": "blog/skepticism/2017/08/27/satanic/index.html",
    "revision": "2482c5a402ab2ebf251ae9c3d4569cbd"
  },
  {
    "url": "blog/skepticism/2017/08/index.html",
    "revision": "59d4501f7f9be91bee5acb0aa23f5fc8"
  },
  {
    "url": "blog/skepticism/2017/09/03/apocalypse/index.html",
    "revision": "6088ad2e0ed0998f61e83e856bbfef76"
  },
  {
    "url": "blog/skepticism/2017/09/03/cancer/index.html",
    "revision": "fb13d3706a7ddb02f784e583364429b5"
  },
  {
    "url": "blog/skepticism/2017/09/03/index.html",
    "revision": "079fce6246b06bbe617186e76d474bd4"
  },
  {
    "url": "blog/skepticism/2017/09/03/rectangle/index.html",
    "revision": "0dff6fe2f423a57c119af8b8c8e1e5b1"
  },
  {
    "url": "blog/skepticism/2017/09/03/stargate/index.html",
    "revision": "12f655a267962d4c72e003c2c42acdaf"
  },
  {
    "url": "blog/skepticism/2017/09/index.html",
    "revision": "9012cd8528dc03cc3d071278006e2d09"
  },
  {
    "url": "blog/skepticism/2017/10/01/apocalypse/index.html",
    "revision": "4d66da2a6b4ea037123a08a1eff56f7f"
  },
  {
    "url": "blog/skepticism/2017/10/01/freeman/index.html",
    "revision": "990a66a55826a73b2c11d592442e6b1d"
  },
  {
    "url": "blog/skepticism/2017/10/01/index.html",
    "revision": "5d1cbcadb4a1744683cbdf871ad0b39d"
  },
  {
    "url": "blog/skepticism/2017/10/01/pharmacy/index.html",
    "revision": "de85475b8969757a8a2c370a102502f9"
  },
  {
    "url": "blog/skepticism/2017/10/08/index.html",
    "revision": "99b6cea29e6226ffada27ac597fa7fe3"
  },
  {
    "url": "blog/skepticism/2017/10/08/pill/index.html",
    "revision": "7700a63a5eea6c42a0a03ae6d30d9d88"
  },
  {
    "url": "blog/skepticism/2017/10/08/qsb/index.html",
    "revision": "6734ab965d0a7e1e84ca20e542815021"
  },
  {
    "url": "blog/skepticism/2017/10/08/vegas/index.html",
    "revision": "48e0dc844976d559a6c5d88c0fd5b5f2"
  },
  {
    "url": "blog/skepticism/2017/10/15/doterra/index.html",
    "revision": "bbdca74d49350cd6b0f58fab2c6f7e5e"
  },
  {
    "url": "blog/skepticism/2017/10/15/index.html",
    "revision": "21ac6d8934a900681ee874b346cfa92a"
  },
  {
    "url": "blog/skepticism/2017/10/15/lie/index.html",
    "revision": "9962daa5b1cce4a24b2b861afafa4856"
  },
  {
    "url": "blog/skepticism/2017/10/15/soap/index.html",
    "revision": "4f21fd7ef1849453eec8dc86320acef4"
  },
  {
    "url": "blog/skepticism/2017/10/index.html",
    "revision": "d33e6ea7e97ec0beaae3b534ebecf829"
  },
  {
    "url": "blog/skepticism/2017/11/05/conference/index.html",
    "revision": "548985843ac95421d9d65376fd7f457c"
  },
  {
    "url": "blog/skepticism/2017/11/05/glyphosate/index.html",
    "revision": "b28ac942220352df116398fb90a01fca"
  },
  {
    "url": "blog/skepticism/2017/11/05/index.html",
    "revision": "919ae9b542f0d9863cb1e7992d1857d0"
  },
  {
    "url": "blog/skepticism/2017/11/05/stranded/index.html",
    "revision": "99e7829e307c7708f954d2c64ff2105b"
  },
  {
    "url": "blog/skepticism/2017/11/05/tracts/index.html",
    "revision": "276a96cfba543558fcf50be9c4333d11"
  },
  {
    "url": "blog/skepticism/2017/11/12/ghost/index.html",
    "revision": "c25bdad7e1bd2a8c3275d994e9598728"
  },
  {
    "url": "blog/skepticism/2017/11/12/green/index.html",
    "revision": "5ef8891ebd746a925ef50d628a83b6e0"
  },
  {
    "url": "blog/skepticism/2017/11/12/harassment/index.html",
    "revision": "f7df9cc247c8bc808e94a4274ed366c7"
  },
  {
    "url": "blog/skepticism/2017/11/12/index.html",
    "revision": "927c6638a0e148ea45b820b98ec54fa6"
  },
  {
    "url": "blog/skepticism/2017/11/12/libby/index.html",
    "revision": "ca25b51e7db596e431bf7fb23c4f3e27"
  },
  {
    "url": "blog/skepticism/2017/11/index.html",
    "revision": "78e2da31cfed384750596350a09b47ed"
  },
  {
    "url": "blog/skepticism/2017/12/03/acupuncture/index.html",
    "revision": "4dd542ab15e113511358b39e4ae213cb"
  },
  {
    "url": "blog/skepticism/2017/12/03/denialism/index.html",
    "revision": "5de7c647697e68c204c71387046fda89"
  },
  {
    "url": "blog/skepticism/2017/12/03/dowsing/index.html",
    "revision": "9be48cb0784b8429adc5206bf9b3cd19"
  },
  {
    "url": "blog/skepticism/2017/12/03/holes/index.html",
    "revision": "8e6148084406a96c3067a58935b0cc12"
  },
  {
    "url": "blog/skepticism/2017/12/03/index.html",
    "revision": "aadd1eacc37a33a57d2903046e9675f3"
  },
  {
    "url": "blog/skepticism/2017/12/17/index.html",
    "revision": "4b1d45c016d5a67873bf359138e36c43"
  },
  {
    "url": "blog/skepticism/2017/12/17/nhs/index.html",
    "revision": "3c2a7b05828cb72b6f6b8d7dc8a30d13"
  },
  {
    "url": "blog/skepticism/2017/12/17/oto/index.html",
    "revision": "d8f3cd5cb59c49eec5fa2b4812c9fa44"
  },
  {
    "url": "blog/skepticism/2017/12/17/pastafarian/index.html",
    "revision": "9c75bdd4bcda32ca547649722b3cbac6"
  },
  {
    "url": "blog/skepticism/2017/12/17/shc/index.html",
    "revision": "b8c0aeb1065824a9543202ed504bb770"
  },
  {
    "url": "blog/skepticism/2017/12/17/wellworks/index.html",
    "revision": "6c528526baf56d98298089442c5dcc27"
  },
  {
    "url": "blog/skepticism/2017/12/index.html",
    "revision": "509cb7822691d18995a1f7bdfc6ce9f7"
  },
  {
    "url": "blog/skepticism/2017/index.html",
    "revision": "07d5afdd9bc55e4663e0267257c489e6"
  },
  {
    "url": "blog/skepticism/2018/01/21/grounding/index.html",
    "revision": "6ab40036ea9c059f93b9d1b2188e639b"
  },
  {
    "url": "blog/skepticism/2018/01/21/index.html",
    "revision": "ca6c33df9e73dcdf5358566c34ae7d32"
  },
  {
    "url": "blog/skepticism/2018/01/21/naturopath/index.html",
    "revision": "9535bb9a07356141dbf53395f06c9e5c"
  },
  {
    "url": "blog/skepticism/2018/01/21/respen/index.html",
    "revision": "0f32313522e8bbfeb0bc29273db3e46b"
  },
  {
    "url": "blog/skepticism/2018/01/28/bears/index.html",
    "revision": "be830fe3aa94b19232e72e1994ddbd65"
  },
  {
    "url": "blog/skepticism/2018/01/28/index.html",
    "revision": "ab69e7026d84682448fe13cc1d3b8317"
  },
  {
    "url": "blog/skepticism/2018/01/28/peppering/index.html",
    "revision": "598b45ddb3fff012d32e6fc1492e96b3"
  },
  {
    "url": "blog/skepticism/2018/01/28/pet/index.html",
    "revision": "bd55850073a591750762fb9db4b98734"
  },
  {
    "url": "blog/skepticism/2018/01/28/quake/index.html",
    "revision": "5f23c2404d46a7c5d4b5baeabb40d53a"
  },
  {
    "url": "blog/skepticism/2018/01/28/scientology/index.html",
    "revision": "22a8a3c5e9e689a704839fe83ce6c7b7"
  },
  {
    "url": "blog/skepticism/2018/01/index.html",
    "revision": "d7062b88171077049d644c593f7c9139"
  },
  {
    "url": "blog/skepticism/2018/02/11/asa/index.html",
    "revision": "82bb2788b4f61620d080539b67872289"
  },
  {
    "url": "blog/skepticism/2018/02/11/cannabis/index.html",
    "revision": "503838289f0d743066d78bb9d1803d66"
  },
  {
    "url": "blog/skepticism/2018/02/11/elon/index.html",
    "revision": "1a6c7f8e48d97392405393f3ac21d5bc"
  },
  {
    "url": "blog/skepticism/2018/02/11/homeopathy/index.html",
    "revision": "3c89fe17f46f4011644d2943fc26a38c"
  },
  {
    "url": "blog/skepticism/2018/02/11/index.html",
    "revision": "777d01b4b26ca9f8366090662cb62135"
  },
  {
    "url": "blog/skepticism/2018/02/11/water/index.html",
    "revision": "88b8cc2b0e6500c1efd6966f013e004b"
  },
  {
    "url": "blog/skepticism/2018/02/25/crisis/index.html",
    "revision": "e772a9d8bca3932774ff5861dd724ef5"
  },
  {
    "url": "blog/skepticism/2018/02/25/eggs/index.html",
    "revision": "950fa45cee380279f80d451148062eea"
  },
  {
    "url": "blog/skepticism/2018/02/25/fsm/index.html",
    "revision": "e8a2b93be620a904d03bc93b6f25081a"
  },
  {
    "url": "blog/skepticism/2018/02/25/index.html",
    "revision": "933cada418f9c0ffee619e33953f1138"
  },
  {
    "url": "blog/skepticism/2018/02/25/number/index.html",
    "revision": "485b72fea30c8ad73767856f80aa8f05"
  },
  {
    "url": "blog/skepticism/2018/02/25/quackery/index.html",
    "revision": "459c9b92408d158cc6df0de1a5d45fb0"
  },
  {
    "url": "blog/skepticism/2018/02/index.html",
    "revision": "96461938d37917c12b465ee313495231"
  },
  {
    "url": "blog/skepticism/2018/03/11/ai/index.html",
    "revision": "822a59fad9c64d385f2e0078c5098827"
  },
  {
    "url": "blog/skepticism/2018/03/11/index.html",
    "revision": "a996a22fca6ac5f492c3f983f23dfd11"
  },
  {
    "url": "blog/skepticism/2018/03/11/radiation/index.html",
    "revision": "6a24ec6c0eaadf3b074309a11deb0541"
  },
  {
    "url": "blog/skepticism/2018/03/11/reiki/index.html",
    "revision": "92b453f84f48bb4b6823aa6d08a8127d"
  },
  {
    "url": "blog/skepticism/2018/03/11/ufo/index.html",
    "revision": "40651bccbbc45f90486c78adb5aa2d7a"
  },
  {
    "url": "blog/skepticism/2018/03/18/ghost/index.html",
    "revision": "955cf631ac3fe2a8cb8f6a4ead2dcb76"
  },
  {
    "url": "blog/skepticism/2018/03/18/index.html",
    "revision": "9b71d8e32533b70edaf909acf7da5f06"
  },
  {
    "url": "blog/skepticism/2018/03/18/psychic/index.html",
    "revision": "aa4ab2fc78a08f3a8b136cebbc01aebe"
  },
  {
    "url": "blog/skepticism/2018/03/18/quack/index.html",
    "revision": "ca6ec00c2ebbe8917abf0e12202cc075"
  },
  {
    "url": "blog/skepticism/2018/03/18/radiation/index.html",
    "revision": "2149affc47d6b508f3bfa44505ae5dd9"
  },
  {
    "url": "blog/skepticism/2018/03/index.html",
    "revision": "83e086688626834b7af7b55583255e3d"
  },
  {
    "url": "blog/skepticism/2018/04/08/calocurb/index.html",
    "revision": "d1d34afb46d92a4abd07baed955f5d99"
  },
  {
    "url": "blog/skepticism/2018/04/08/cam/index.html",
    "revision": "cd8d685c23848750c6a2f3f32d1e6ee0"
  },
  {
    "url": "blog/skepticism/2018/04/08/index.html",
    "revision": "c8b64e3c322d99b4567d0ddbfc329c9a"
  },
  {
    "url": "blog/skepticism/2018/04/08/psychic/index.html",
    "revision": "5e2623a5601393c8d6b8cb83c04b6865"
  },
  {
    "url": "blog/skepticism/2018/04/08/vaccines/index.html",
    "revision": "c0309415d08f9b882ac32fbd9ec87661"
  },
  {
    "url": "blog/skepticism/2018/04/15/coffee/index.html",
    "revision": "de4ae3563b169229da4da40b8ff1b114"
  },
  {
    "url": "blog/skepticism/2018/04/15/ignorance/index.html",
    "revision": "52661ef4cf378603f346226f949396be"
  },
  {
    "url": "blog/skepticism/2018/04/15/index.html",
    "revision": "38c28a513c20910a4dfec27c72702d12"
  },
  {
    "url": "blog/skepticism/2018/04/15/nasa/index.html",
    "revision": "68b56e20b15ce7d0f9bbc75f3081e8c5"
  },
  {
    "url": "blog/skepticism/2018/04/15/tapu/index.html",
    "revision": "8a12b219c5913686f0f47763fa207ab2"
  },
  {
    "url": "blog/skepticism/2018/04/29/google/index.html",
    "revision": "393dcc4b996fddc79877d35f198cd088"
  },
  {
    "url": "blog/skepticism/2018/04/29/homeopathy/index.html",
    "revision": "f305f2075c0e1c8fc8b5a7ca66531ec6"
  },
  {
    "url": "blog/skepticism/2018/04/29/index.html",
    "revision": "372dc312f106ec06b457d6790297c01c"
  },
  {
    "url": "blog/skepticism/2018/04/29/ken/index.html",
    "revision": "70522a6be619d647424c850b21c1e9f5"
  },
  {
    "url": "blog/skepticism/2018/04/29/v2k/index.html",
    "revision": "b56781613922db0b152c5b61c690bddd"
  },
  {
    "url": "blog/skepticism/2018/04/index.html",
    "revision": "9e857aaeb2c5910fd6a323ec4ca1f390"
  },
  {
    "url": "blog/skepticism/2018/05/13/astrology/index.html",
    "revision": "7c65603d431e2b508f06932bb1e73c51"
  },
  {
    "url": "blog/skepticism/2018/05/13/crystals/index.html",
    "revision": "f3b1b45a0f11aea237e997ea1e03e3ef"
  },
  {
    "url": "blog/skepticism/2018/05/13/dawkins/index.html",
    "revision": "520f9acd36d0f6d5f8668d8d1e8cbcbf"
  },
  {
    "url": "blog/skepticism/2018/05/13/index.html",
    "revision": "c1eb2f69dd91e435713ce8fd9bf55236"
  },
  {
    "url": "blog/skepticism/2018/05/13/kangen/index.html",
    "revision": "3b665b513072ee8678dde0e35cc4d5d7"
  },
  {
    "url": "blog/skepticism/2018/05/13/vitamins/index.html",
    "revision": "bde72d7dade83cca8b1f4e12353a49d9"
  },
  {
    "url": "blog/skepticism/2018/05/27/flat/index.html",
    "revision": "8e0be93f578997740ff98a84c27556c7"
  },
  {
    "url": "blog/skepticism/2018/05/27/index.html",
    "revision": "3a48b206399f25919e35e2556d7e8563"
  },
  {
    "url": "blog/skepticism/2018/05/27/kangen/index.html",
    "revision": "1b2520b8bab77ebbeba70d5d65d10402"
  },
  {
    "url": "blog/skepticism/2018/05/27/ness/index.html",
    "revision": "e48e0e903d627281547f3e97d4458353"
  },
  {
    "url": "blog/skepticism/2018/05/27/oz/index.html",
    "revision": "ef16e5c1bb5ba1095dc545bcda37b364"
  },
  {
    "url": "blog/skepticism/2018/05/27/psychic/index.html",
    "revision": "69ed6cf8f6062bc5f7e7e75c508360b0"
  },
  {
    "url": "blog/skepticism/2018/05/index.html",
    "revision": "953b1e3c31acae397bc4e6c6cb562724"
  },
  {
    "url": "blog/skepticism/2018/06/10/astrology/index.html",
    "revision": "f9a0940dfa68bbdf1fc02f406ea9a8ce"
  },
  {
    "url": "blog/skepticism/2018/06/10/index.html",
    "revision": "c7cf642c78d8c4184b4c156b23df388e"
  },
  {
    "url": "blog/skepticism/2018/06/10/nhs/index.html",
    "revision": "6057d614fdb039e7110327d29236cee7"
  },
  {
    "url": "blog/skepticism/2018/06/10/shakti/index.html",
    "revision": "425f340b37a64cae0a0c4c5c6a7c5906"
  },
  {
    "url": "blog/skepticism/2018/06/10/weetbix/index.html",
    "revision": "972a396e0033f64f70caff8c3a255454"
  },
  {
    "url": "blog/skepticism/2018/06/24/blasphemy/index.html",
    "revision": "40b86b7aaa45146a5f6838b021ba7c72"
  },
  {
    "url": "blog/skepticism/2018/06/24/cannabis/index.html",
    "revision": "5e1dbae9dc8b9eb78bb4ba3fea1883d9"
  },
  {
    "url": "blog/skepticism/2018/06/24/hotdog/index.html",
    "revision": "2518291186cf6cce22d6887164a84772"
  },
  {
    "url": "blog/skepticism/2018/06/24/index.html",
    "revision": "4eb08dc3a154ae65ed49d0fc722a29b8"
  },
  {
    "url": "blog/skepticism/2018/06/24/led/index.html",
    "revision": "bbe3488cb58681b52b0520401d2b16f9"
  },
  {
    "url": "blog/skepticism/2018/06/index.html",
    "revision": "499bd0e25d09dd982c6eb377f3d163f1"
  },
  {
    "url": "blog/skepticism/2018/07/08/bullet/index.html",
    "revision": "a8f92c8b1365450fc9f53cfc682700f1"
  },
  {
    "url": "blog/skepticism/2018/07/08/chiros/index.html",
    "revision": "d5555b7c69e84f7620924367e4360724"
  },
  {
    "url": "blog/skepticism/2018/07/08/hiv/index.html",
    "revision": "51ec607772f7953f2606a3529deabcaa"
  },
  {
    "url": "blog/skepticism/2018/07/08/hrv/index.html",
    "revision": "2c4fa1ae14f21c301d811c7e94d0e7e8"
  },
  {
    "url": "blog/skepticism/2018/07/08/index.html",
    "revision": "7bfba81e48ffb72ce3fee26eda415ee9"
  },
  {
    "url": "blog/skepticism/2018/07/22/cancer/index.html",
    "revision": "c624f9932b993fd35042f2c5a362dd13"
  },
  {
    "url": "blog/skepticism/2018/07/22/index.html",
    "revision": "a142de5bfccf3297d4458e1d81665d38"
  },
  {
    "url": "blog/skepticism/2018/07/22/resurrection/index.html",
    "revision": "f264da789fb3eed592ca119328313dfe"
  },
  {
    "url": "blog/skepticism/2018/07/22/talc/index.html",
    "revision": "254400dbc2156502f4ebd65d85b3f38c"
  },
  {
    "url": "blog/skepticism/2018/07/22/visas/index.html",
    "revision": "89bd3267a606a04dd6524b3e3dd5f7fe"
  },
  {
    "url": "blog/skepticism/2018/07/index.html",
    "revision": "e2376a2a6b856e2d80188643e04b00fd"
  },
  {
    "url": "blog/skepticism/2018/08/05/conf/index.html",
    "revision": "c2bae4693e9ed21ac5db5f77b88a4725"
  },
  {
    "url": "blog/skepticism/2018/08/05/index.html",
    "revision": "2cf0c8e1634e021bf1c03ca0b278fb65"
  },
  {
    "url": "blog/skepticism/2018/08/05/qanon/index.html",
    "revision": "6a13b7437d987728657ec4a185702579"
  },
  {
    "url": "blog/skepticism/2018/08/19/index.html",
    "revision": "0680b726e05089dc80cd07404718a4fd"
  },
  {
    "url": "blog/skepticism/2018/08/19/jw/index.html",
    "revision": "7408cb3b64a97a53f04d24c0a2b23b72"
  },
  {
    "url": "blog/skepticism/2018/08/index.html",
    "revision": "4d9b26fa7a259986df1fe332fa726373"
  },
  {
    "url": "blog/skepticism/2018/09/02/allergy/index.html",
    "revision": "542ef3a495948b4b482f099483b1a6a5"
  },
  {
    "url": "blog/skepticism/2018/09/02/catholic/index.html",
    "revision": "37234db823cbee799b7d6156e4f09739"
  },
  {
    "url": "blog/skepticism/2018/09/02/index.html",
    "revision": "7136004bde5bef30261a0e3fcc076299"
  },
  {
    "url": "blog/skepticism/2018/09/02/jw/index.html",
    "revision": "0a562b68cf2b760475591b975944735b"
  },
  {
    "url": "blog/skepticism/2018/09/02/sen/index.html",
    "revision": "a3333167afeddf2340bb846bec8efe8d"
  },
  {
    "url": "blog/skepticism/2018/09/16/1080/index.html",
    "revision": "57bc3cf2e08f387192b91ba225d48784"
  },
  {
    "url": "blog/skepticism/2018/09/16/church/index.html",
    "revision": "7afbc2db43c60b4072a3be3a344e89cb"
  },
  {
    "url": "blog/skepticism/2018/09/16/index.html",
    "revision": "99c8111ba8eedf400d757a5884407bdd"
  },
  {
    "url": "blog/skepticism/2018/09/16/jones/index.html",
    "revision": "e67e30b5c3da0b406050d3fcfbbcc986"
  },
  {
    "url": "blog/skepticism/2018/09/16/scammers/index.html",
    "revision": "38b9c53c6df6790355ae59a636e120cd"
  },
  {
    "url": "blog/skepticism/2018/09/30/index.html",
    "revision": "3f167b1eead79bf01660e3415bf435e2"
  },
  {
    "url": "blog/skepticism/2018/09/30/jw/index.html",
    "revision": "ecd9a2bc52296ac0e3de2e0ff1a6402b"
  },
  {
    "url": "blog/skepticism/2018/09/30/oto/index.html",
    "revision": "a946ca3dce6d7d70d77272fea73c8140"
  },
  {
    "url": "blog/skepticism/2018/09/30/who/index.html",
    "revision": "fc31a59c3480b26de0ee8b9ac2c9370b"
  },
  {
    "url": "blog/skepticism/2018/09/index.html",
    "revision": "f00c80176d459b1ac2d25a35735a154f"
  },
  {
    "url": "blog/skepticism/2018/10/14/hacked/index.html",
    "revision": "00a478efdb14c4f4de6591eb77718bf4"
  },
  {
    "url": "blog/skepticism/2018/10/14/index.html",
    "revision": "9198f66a0425e2fae06cb510ae297929"
  },
  {
    "url": "blog/skepticism/2018/10/14/kangen/index.html",
    "revision": "a364b1d54ea9e33e43d04cc1f1b2f6d7"
  },
  {
    "url": "blog/skepticism/2018/10/14/pakistan/index.html",
    "revision": "815649f446679a62c062552568b6d2c0"
  },
  {
    "url": "blog/skepticism/2018/10/14/sarah/index.html",
    "revision": "08f4907cb46c4e56c350bb8adefdde6c"
  },
  {
    "url": "blog/skepticism/2018/10/28/blasphemy/index.html",
    "revision": "83596cb1de0d710759a5b7eaba10b0f3"
  },
  {
    "url": "blog/skepticism/2018/10/28/hrv/index.html",
    "revision": "8a653c49fde380685e5f400d0f37ec48"
  },
  {
    "url": "blog/skepticism/2018/10/28/index.html",
    "revision": "930c3bd29f332801f5302b9a8afd7686"
  },
  {
    "url": "blog/skepticism/2018/10/28/jesus/index.html",
    "revision": "986cf446d5d2981a7c9903d0728a0aa5"
  },
  {
    "url": "blog/skepticism/2018/10/28/natural/index.html",
    "revision": "2793cada8e0320ea15ffd38f6d1436ae"
  },
  {
    "url": "blog/skepticism/2018/10/index.html",
    "revision": "475c833c8c2e56892b87128e08606690"
  },
  {
    "url": "blog/skepticism/2018/11/04/bibi/index.html",
    "revision": "a62f1aa564aaaeab684cacd70777fe78"
  },
  {
    "url": "blog/skepticism/2018/11/04/index.html",
    "revision": "a0ad0a8dc594441cf013f9f873f01039"
  },
  {
    "url": "blog/skepticism/2018/11/04/jesus/index.html",
    "revision": "9f61723a83204b4cb097b4e49c0103a8"
  },
  {
    "url": "blog/skepticism/2018/11/04/obdii/index.html",
    "revision": "a3c6001013678c1590d2f05b883f3747"
  },
  {
    "url": "blog/skepticism/2018/11/04/sleepdrops/index.html",
    "revision": "8ac8ad05adbd6c3ec63567fd5d2890e6"
  },
  {
    "url": "blog/skepticism/2018/11/index.html",
    "revision": "d375c6c41a372b010762593b992177ce"
  },
  {
    "url": "blog/skepticism/2018/12/02/ark/index.html",
    "revision": "ea1f5cb6f67bf760ad40f7aeca6d465c"
  },
  {
    "url": "blog/skepticism/2018/12/02/green/index.html",
    "revision": "b2ccceb034c3530b86bbeb390ea52943"
  },
  {
    "url": "blog/skepticism/2018/12/02/index.html",
    "revision": "2975d54a5315921e05cade3fde4b4bb5"
  },
  {
    "url": "blog/skepticism/2018/12/02/ri/index.html",
    "revision": "b52e571ba18fb6a3e2e449c17ac36821"
  },
  {
    "url": "blog/skepticism/2018/12/16/blasphemy/index.html",
    "revision": "52f76e8fcd401ebc9ebb62e83640cc65"
  },
  {
    "url": "blog/skepticism/2018/12/16/index.html",
    "revision": "f248d74ad4fc68ca7c42c934ca53bfa9"
  },
  {
    "url": "blog/skepticism/2018/12/16/sleepdrops/index.html",
    "revision": "4474cf948d18a571eb0ab184821ab8bc"
  },
  {
    "url": "blog/skepticism/2018/12/16/tekiri/index.html",
    "revision": "5195d593b70d5ed5b9f722260a0f79a9"
  },
  {
    "url": "blog/skepticism/2018/12/index.html",
    "revision": "6a5df88b9b91fd1daf912e341d1ce46c"
  },
  {
    "url": "blog/skepticism/2018/index.html",
    "revision": "0fefa68178fa72f66b4b7da6bd4e9acd"
  },
  {
    "url": "blog/skepticism/index.html",
    "revision": "252506b80ca12b446c5a70aeaf9b8842"
  },
  {
    "url": "blog/tag/index.html",
    "revision": "eca363e5dafc7a84c27244fb24a98829"
  },
  {
    "url": "contact/index.html",
    "revision": "48c799297e382b5520e2fd8aa3a101ac"
  },
  {
    "url": "cv/cover/index.html",
    "revision": "901cbafe7ada63ef88816f67ca06ea3a"
  },
  {
    "url": "cv/index.html",
    "revision": "678a7eecdf0da57b8e67e6f07632fbf8"
  },
  {
    "url": "googlee25d0c06da891164.html",
    "revision": "0defe75660212f417b90c5affcd03380"
  },
  {
    "url": "index.html",
    "revision": "6710c3cdfb5cae0fb8871fe46305cf6d"
  },
  {
    "url": "media/images/blog.jpg",
    "revision": "11f93100c9c31da294293bcd27081c7b"
  },
  {
    "url": "media/images/blog/code.jpg",
    "revision": "0a1e7140bea6bf31443a6953bb69a759"
  },
  {
    "url": "media/images/blog/code/artists.jpg",
    "revision": "43f910da1d5289a547800a2db41efc26"
  },
  {
    "url": "media/images/blog/code/asa.sbh.nz.jpg",
    "revision": "4ba1baf82f44b8d6ff847dcdfbc3e582"
  },
  {
    "url": "media/images/blog/code/divider.jpg",
    "revision": "22b2d3938d8be10e283fcfcce73e97b7"
  },
  {
    "url": "media/images/blog/code/first.jpg",
    "revision": "15ed7b869d17c95975291ae04ad260c9"
  },
  {
    "url": "media/images/blog/code/indent.jpg",
    "revision": "320916455d09cec3ab9d7352a4cdc601"
  },
  {
    "url": "media/images/blog/code/qr.jpg",
    "revision": "7053a18dc50d682fc9d7b85dfb11caae"
  },
  {
    "url": "media/images/blog/code/rotx.jpg",
    "revision": "c16d3368ed0cf281401c5d49d38d26a5"
  },
  {
    "url": "media/images/blog/code/website.jpg",
    "revision": "cfad2ceef01279adb2e80c9f9bc9b387"
  },
  {
    "url": "media/images/blog/howto.jpg",
    "revision": "72bd4eb72b8a2b8f2b88d29827b663e6"
  },
  {
    "url": "media/images/blog/howto/intel865.jpg",
    "revision": "5485ca2d9db8d9a31d02027bea1b5734"
  },
  {
    "url": "media/images/blog/howto/nexentastor.jpg",
    "revision": "a4811fb943deb8015111db84af53f916"
  },
  {
    "url": "media/images/blog/howto/pcloadletter.jpg",
    "revision": "459b588a32c8a72f2db186258f33cd72"
  },
  {
    "url": "media/images/blog/howto/raid5.jpg",
    "revision": "2b6568c7526a89ed74beae0eeca54f4d"
  },
  {
    "url": "media/images/blog/life.jpg",
    "revision": "2081249b1cacde29b30ab8ab5cb9d3ed"
  },
  {
    "url": "media/images/blog/life/anotheryear.jpg",
    "revision": "e0a3277651d4c343c6de141210269ebb"
  },
  {
    "url": "media/images/blog/life/birthday.jpg",
    "revision": "8f4f2be4fea09aee442df7aa26cdcb47"
  },
  {
    "url": "media/images/blog/life/blogger.jpg",
    "revision": "a0ded9ff0ac2dfc8523afa6ee430ebbe"
  },
  {
    "url": "media/images/blog/life/blurry.jpg",
    "revision": "a809910796486036b5ac9ae53872f62d"
  },
  {
    "url": "media/images/blog/life/coderdojo.jpg",
    "revision": "080b78e5657cb8880203b792fcc8fbd3"
  },
  {
    "url": "media/images/blog/life/domain.jpg",
    "revision": "e40b868f5ad6708dc4ae2f29b401edf9"
  },
  {
    "url": "media/images/blog/life/exams.jpg",
    "revision": "3cb6f9cf6eeea5d15a0e891175a1d060"
  },
  {
    "url": "media/images/blog/life/glenview.jpg",
    "revision": "5b9078b61af89ff28b516da54cccf453"
  },
  {
    "url": "media/images/blog/life/headlines.jpg",
    "revision": "160824cc87b46d5b12c2f165a931e15c"
  },
  {
    "url": "media/images/blog/life/jws.jpg",
    "revision": "248034524f1c94ce6971e37029a21cc7"
  },
  {
    "url": "media/images/blog/life/keyboard.jpg",
    "revision": "c79c55e6bd2aa48d09a55e0ff2bb9fd2"
  },
  {
    "url": "media/images/blog/life/lpi201.jpg",
    "revision": "0a71ae84c8541645b83f5d17af18bdde"
  },
  {
    "url": "media/images/blog/life/mashup.jpg",
    "revision": "97d8bb542ea5726ac21ffc35a41f1a23"
  },
  {
    "url": "media/images/blog/life/motorweb.jpg",
    "revision": "5fd295dab1dfd40d0cbcd463c40740aa"
  },
  {
    "url": "media/images/blog/life/nxe.jpg",
    "revision": "b12c71e57754ff3c79f3dc14a06354a7"
  },
  {
    "url": "media/images/blog/life/queenstown.jpg",
    "revision": "730720fc0c1f7584804918074161cde0"
  },
  {
    "url": "media/images/blog/life/racism.jpg",
    "revision": "d9d54a36e0acba4e6fd7a022f106ed95"
  },
  {
    "url": "media/images/blog/life/racism.png",
    "revision": "51f73155b8f6df58d9784778cfe3e8e4"
  },
  {
    "url": "media/images/blog/life/roads.jpg",
    "revision": "13d1699c46effb18a41d211c94d61e2c"
  },
  {
    "url": "media/images/blog/life/scary.jpg",
    "revision": "936d8c5cc1ac8d8f8a16ae864257a792"
  },
  {
    "url": "media/images/blog/life/seti.jpg",
    "revision": "fe894675bbec01452f848a50e46f8037"
  },
  {
    "url": "media/images/blog/life/skepticalthoughts.jpg",
    "revision": "85e5e46ec6182e01b3f30a799edd562b"
  },
  {
    "url": "media/images/blog/life/skepticzone.jpg",
    "revision": "fa33d750062446b48bc74fe14c0c93ad"
  },
  {
    "url": "media/images/blog/life/spam.jpg",
    "revision": "4fbb36d0685c8fdfd69f5f9fe995c621"
  },
  {
    "url": "media/images/blog/life/trademe.jpg",
    "revision": "367702c600e0db7c299772b48424e5c1"
  },
  {
    "url": "media/images/blog/life/unforeseen.jpg",
    "revision": "135adfcaefddd85ef3aa92cfae74d9d9"
  },
  {
    "url": "media/images/blog/life/wobbly.jpg",
    "revision": "5ef164021c0a3ee0379f2fbe3b6d7c07"
  },
  {
    "url": "media/images/blog/projects.jpg",
    "revision": "3bd58f70387766b858176dd055686a03"
  },
  {
    "url": "media/images/blog/projects/airbag.jpg",
    "revision": "e8f5c57ceb4a4c8e224f190eea88ee72"
  },
  {
    "url": "media/images/blog/projects/ambilight.jpg",
    "revision": "d288bd311b2a86875c1c91336fb1482a"
  },
  {
    "url": "media/images/blog/projects/automation.jpg",
    "revision": "4644ba55c5e9e4b0cfe09410c05aeba8"
  },
  {
    "url": "media/images/blog/projects/glitch.jpg",
    "revision": "709ce4fae1148453e410c8f660f366d5"
  },
  {
    "url": "media/images/blog/projects/it100.jpg",
    "revision": "0cb50a89deb673abc2fd58dac39fc921"
  },
  {
    "url": "media/images/blog/projects/picture.jpg",
    "revision": "e577fe1c6624d34aca1503fe21fded2a"
  },
  {
    "url": "media/images/blog/projects/pizza.jpg",
    "revision": "552c8b144aa55ce6a2de6d11d48962a3"
  },
  {
    "url": "media/images/blog/projects/podcast.jpg",
    "revision": "3b5fe80e5f603a485bf21a588c1304c8"
  },
  {
    "url": "media/images/blog/projects/rainbowduino.jpg",
    "revision": "20d5f02cbc23b6535c1d3d2def2fb2f2"
  },
  {
    "url": "media/images/blog/projects/reflow.jpg",
    "revision": "5083d4189e5f5d34e1dde6b800c197cb"
  },
  {
    "url": "media/images/blog/projects/sandbox.jpg",
    "revision": "e0a3277651d4c343c6de141210269ebb"
  },
  {
    "url": "media/images/blog/projects/screens.jpg",
    "revision": "2dade319b8673127bc4e07acc7a70959"
  },
  {
    "url": "media/images/blog/projects/sky.jpg",
    "revision": "25bafa8809c50e2d1d5b68e4057e81b4"
  },
  {
    "url": "media/images/blog/projects/starwars.jpg",
    "revision": "6fac6b5c0e377623fec84b5352574e89"
  },
  {
    "url": "media/images/blog/projects/xbox.jpg",
    "revision": "3823c967b8d7316d6ecefe5d6777b28a"
  },
  {
    "url": "media/images/blog/random.jpg",
    "revision": "426ef01a00d44da39e88d9c25d477a1b"
  },
  {
    "url": "media/images/blog/random/addresses.jpg",
    "revision": "19d5f9dc317086f8f348d8bded86f159"
  },
  {
    "url": "media/images/blog/random/alphabet.jpg",
    "revision": "25f9bfafc2f5f9b4061690940d776abc"
  },
  {
    "url": "media/images/blog/random/astrology.jpg",
    "revision": "4ef473adf54ca2d4a3cd12a17f100456"
  },
  {
    "url": "media/images/blog/random/chicken.jpg",
    "revision": "8f071617e5c93184f62ffca3036c1fe5"
  },
  {
    "url": "media/images/blog/random/dns.jpg",
    "revision": "f997e98ae53fdb54c26282bba486e365"
  },
  {
    "url": "media/images/blog/random/evp.jpg",
    "revision": "df43af76daf167e87ad6bc67d8cd241c"
  },
  {
    "url": "media/images/blog/random/flip.jpg",
    "revision": "207f951dd30c00288cc1016f6c9bb8e6"
  },
  {
    "url": "media/images/blog/random/flip/2017_Gold-Coin_Back-small.png",
    "revision": "c867f3d1fa4b7f02ca41c9ec879044b3"
  },
  {
    "url": "media/images/blog/random/flip/2017_Gold-Coin_Back.png",
    "revision": "0d5b703ac795d31316e342714829d10a"
  },
  {
    "url": "media/images/blog/random/flip/2017_Gold-Coin-small.png",
    "revision": "9777a03fc4e7cf01bdad440790433514"
  },
  {
    "url": "media/images/blog/random/flip/2017_Gold-Coin.png",
    "revision": "0668f218fe8ccbd2851dad37d9e52a6b"
  },
  {
    "url": "media/images/blog/random/flip/blue.png",
    "revision": "b9e14604b58be1c79ae1f8c94acbccde"
  },
  {
    "url": "media/images/blog/random/honeychurch.jpg",
    "revision": "60a2f814d3333218445d38d14adc3829"
  },
  {
    "url": "media/images/blog/random/lottery.jpg",
    "revision": "8baad08a1d5115d9f2217819736f8a7c"
  },
  {
    "url": "media/images/blog/random/octal.jpg",
    "revision": "1f8acc734cad0eeb51e8fa8c64f54225"
  },
  {
    "url": "media/images/blog/random/os.jpg",
    "revision": "652c26779f38339ab66b25d9c891f98f"
  },
  {
    "url": "media/images/blog/random/propellers.jpg",
    "revision": "5723209abdd27283aac85c51a6b0bbb2"
  },
  {
    "url": "media/images/blog/random/robux.jpg",
    "revision": "0f639435ab5da8d5819cc53a434df4f7"
  },
  {
    "url": "media/images/blog/random/times.jpg",
    "revision": "98c47f276be9d34b328af2dbdefcab2e"
  },
  {
    "url": "media/images/blog/random/travel.jpg",
    "revision": "1be89a0ed834d5bb05aa1be4c3836ea9"
  },
  {
    "url": "media/images/blog/random/wilhelm.jpg",
    "revision": "7c2f29413ed939739ad5c494cb59a641"
  },
  {
    "url": "media/images/blog/random/year.jpg",
    "revision": "06a0b95ba4bbfae33c32762024840571"
  },
  {
    "url": "media/images/blog/skepticism.jpg",
    "revision": "ecb0fd9995a5c5d0857ffb511be1c25c"
  },
  {
    "url": "media/images/blog/skepticism.old.jpg",
    "revision": "a2f42da13f2482d127be627fbade9e96"
  },
  {
    "url": "media/images/blog/skepticism/1080.jpg",
    "revision": "c0601cafaf8958cd6889030579ccbb3b"
  },
  {
    "url": "media/images/blog/skepticism/acupressure.jpg",
    "revision": "eb8b5a9b7e8a7351682c9a1311ec887d"
  },
  {
    "url": "media/images/blog/skepticism/acupuncture.jpg",
    "revision": "8885653a413825459f1545110fd117be"
  },
  {
    "url": "media/images/blog/skepticism/ai.jpg",
    "revision": "0562f0e8834378348c1ad0a370f7b494"
  },
  {
    "url": "media/images/blog/skepticism/alchemy.jpg",
    "revision": "09593b8d02513d5a0f9e420b38d45d32"
  },
  {
    "url": "media/images/blog/skepticism/alcohol.jpg",
    "revision": "c19bc7d7a2044d3be1e469f799560fa7"
  },
  {
    "url": "media/images/blog/skepticism/aliens.jpg",
    "revision": "af48a9b8766c75a169c0b4481be25154"
  },
  {
    "url": "media/images/blog/skepticism/alkaline.jpg",
    "revision": "b7376efac470ddf628db2dec3e511a48"
  },
  {
    "url": "media/images/blog/skepticism/allergy.jpg",
    "revision": "9212256503ded7d59b8d65ab7457ceb3"
  },
  {
    "url": "media/images/blog/skepticism/altruism.jpg",
    "revision": "c96cddf15ef425ca677eaade9cdd2918"
  },
  {
    "url": "media/images/blog/skepticism/amber.jpg",
    "revision": "bdf98a39e73f15ce9db4ae887ce14cc1"
  },
  {
    "url": "media/images/blog/skepticism/angel.jpg",
    "revision": "99655940aab09f0c30833b07e1955e04"
  },
  {
    "url": "media/images/blog/skepticism/antioxidants.jpg",
    "revision": "d77f9aeaf07caa9ecd668d57585af383"
  },
  {
    "url": "media/images/blog/skepticism/apocalypse.jpg",
    "revision": "a5a1bf8449f2e1eaa4f01a625f71e9d8"
  },
  {
    "url": "media/images/blog/skepticism/ark.jpg",
    "revision": "374143ab75b5644ed22a462bd184cab1"
  },
  {
    "url": "media/images/blog/skepticism/aromatherapy.jpg",
    "revision": "4bea79fbad70ab3420f87ff133570b3d"
  },
  {
    "url": "media/images/blog/skepticism/asa.jpg",
    "revision": "4ba1baf82f44b8d6ff847dcdfbc3e582"
  },
  {
    "url": "media/images/blog/skepticism/astral.jpg",
    "revision": "540bdadc99760bdd851d8ec6456f6fbb"
  },
  {
    "url": "media/images/blog/skepticism/astrology.jpg",
    "revision": "4ef473adf54ca2d4a3cd12a17f100456"
  },
  {
    "url": "media/images/blog/skepticism/astronomy.jpg",
    "revision": "c6017be8144659de7be7555ee676fd41"
  },
  {
    "url": "media/images/blog/skepticism/atheism.jpg",
    "revision": "43f0623b692533ffed6e2c45ba96372e"
  },
  {
    "url": "media/images/blog/skepticism/aura.jpg",
    "revision": "26c6770493606a968345ae96766051ef"
  },
  {
    "url": "media/images/blog/skepticism/auriculotherapy.jpg",
    "revision": "bb0261374daecf33817e0f60a8ecd716"
  },
  {
    "url": "media/images/blog/skepticism/ayahuasca.jpg",
    "revision": "3ccc11db60a269a7ff3b383e23c8c4ad"
  },
  {
    "url": "media/images/blog/skepticism/ayurveda.jpg",
    "revision": "ecaaf41ea2d4307fa1427044b15578d8"
  },
  {
    "url": "media/images/blog/skepticism/bach.jpg",
    "revision": "5aea3e46fbe5e62384eeccb0952f9263"
  },
  {
    "url": "media/images/blog/skepticism/bates.jpg",
    "revision": "e68c8f6c686fbe75ea74c1e4b89c9922"
  },
  {
    "url": "media/images/blog/skepticism/bee.jpg",
    "revision": "e496bebb5683e0d6140127d1e16a8d57"
  },
  {
    "url": "media/images/blog/skepticism/bilderberg.jpg",
    "revision": "d8eb52355dc63af9c569eecaa19913cc"
  },
  {
    "url": "media/images/blog/skepticism/binaural.jpg",
    "revision": "c6dae347bf5dbc36142cbc1a8a9b9384"
  },
  {
    "url": "media/images/blog/skepticism/biodynamic.jpg",
    "revision": "0c3f51b44f738f451af0a99e645387c9"
  },
  {
    "url": "media/images/blog/skepticism/bioptron.jpg",
    "revision": "ca21c90f4047b8612a411c1c55d54760"
  },
  {
    "url": "media/images/blog/skepticism/bioresonance.jpg",
    "revision": "58d3f2f523dbbd9b1f8ac0f3aedecb11"
  },
  {
    "url": "media/images/blog/skepticism/biorhythm.jpg",
    "revision": "25c28900fa70232bce312f45fbc82c1a"
  },
  {
    "url": "media/images/blog/skepticism/blasphemy.jpg",
    "revision": "2e9c7421cd52fc4c305021664205cc9d"
  },
  {
    "url": "media/images/blog/skepticism/blood.jpg",
    "revision": "78b907d101895b617fae62917fcec422"
  },
  {
    "url": "media/images/blog/skepticism/bluebeam.jpg",
    "revision": "00ba61810b335d6f48afbe330f392907"
  },
  {
    "url": "media/images/blog/skepticism/books.jpg",
    "revision": "4ef9a193e23ff153b963ec92fdf086de"
  },
  {
    "url": "media/images/blog/skepticism/bowen.jpg",
    "revision": "867830b119ef0fd2dd26a07a4d80f2e5"
  },
  {
    "url": "media/images/blog/skepticism/breatharianism.jpg",
    "revision": "11e8e82787602e5acfc036aea1569ecc"
  },
  {
    "url": "media/images/blog/skepticism/buddhism.jpg",
    "revision": "044eae5be87e2e6b56400de2b99683a4"
  },
  {
    "url": "media/images/blog/skepticism/cam.jpg",
    "revision": "24718bd6b3843be52f16194ec71ad44c"
  },
  {
    "url": "media/images/blog/skepticism/cancer.jpg",
    "revision": "42a12050cfcf4d2fb54c901142816dcb"
  },
  {
    "url": "media/images/blog/skepticism/candling.jpg",
    "revision": "3e1247f90c3fd494fbc70795f347ac04"
  },
  {
    "url": "media/images/blog/skepticism/cannabis.jpg",
    "revision": "2724c9e47d7e9d5463e408219972c537"
  },
  {
    "url": "media/images/blog/skepticism/chapel.jpg",
    "revision": "b63744b2f0f639838dd928aca31a91f1"
  },
  {
    "url": "media/images/blog/skepticism/charm.jpg",
    "revision": "ec1b89c71d42d84492bae22a9df58a80"
  },
  {
    "url": "media/images/blog/skepticism/chi.jpg",
    "revision": "0a9a3b1197b9fa68ca0853d062260fd1"
  },
  {
    "url": "media/images/blog/skepticism/chinese.jpg",
    "revision": "a500112814f6ccbddb91f1b7c3e737d0"
  },
  {
    "url": "media/images/blog/skepticism/chiropractic.jpg",
    "revision": "56a5a8b1bf88fa8d3f2345081c94f535"
  },
  {
    "url": "media/images/blog/skepticism/christianity.jpg",
    "revision": "f68620651edf383288f1054f2ba5b1b6"
  },
  {
    "url": "media/images/blog/skepticism/church.jpg",
    "revision": "7c87506fed8835bb798f208dad266e36"
  },
  {
    "url": "media/images/blog/skepticism/climate.jpg",
    "revision": "7a5304d5b48012a091bb62e87c5ae0b0"
  },
  {
    "url": "media/images/blog/skepticism/cloud.jpg",
    "revision": "f899d29a38e78ac0ebf42e8c07d60ce3"
  },
  {
    "url": "media/images/blog/skepticism/coals.jpg",
    "revision": "9edc2cfb798fed53e0e88efda0bac006"
  },
  {
    "url": "media/images/blog/skepticism/coffee.jpg",
    "revision": "9af181378f286b7f2b905270fbb56f9b"
  },
  {
    "url": "media/images/blog/skepticism/coins.jpg",
    "revision": "b810cbb9a9ae5a21a402d7573dec327c"
  },
  {
    "url": "media/images/blog/skepticism/coldfusion.jpg",
    "revision": "cbac33201af87b338a237455172b1a25"
  },
  {
    "url": "media/images/blog/skepticism/colonic.jpg",
    "revision": "9a516a27d8bdddb73fa80d3376b387bb"
  },
  {
    "url": "media/images/blog/skepticism/colour.jpg",
    "revision": "83752717c38e11cd40d70c17dd43ae42"
  },
  {
    "url": "media/images/blog/skepticism/craniosacral.jpg",
    "revision": "fb4a10fb23eb714eeb5ea92e7ebad5e3"
  },
  {
    "url": "media/images/blog/skepticism/creationism.jpg",
    "revision": "77e6c2699fa9fde628e12267fb050a4d"
  },
  {
    "url": "media/images/blog/skepticism/cryptozoology.jpg",
    "revision": "945fc5cc17c8bd8d72e1d5f00afab583"
  },
  {
    "url": "media/images/blog/skepticism/crystal.jpg",
    "revision": "fe28a0bbcf14874866cb059096188629"
  },
  {
    "url": "media/images/blog/skepticism/crystalball.jpg",
    "revision": "3c490a7a47a58a2871b8a189ae804b92"
  },
  {
    "url": "media/images/blog/skepticism/cupping.jpg",
    "revision": "de501b7ca17bf19810a5b7163d4d161a"
  },
  {
    "url": "media/images/blog/skepticism/curse.jpg",
    "revision": "ce4e8b9776b5c819cd0756fe29e4b0e7"
  },
  {
    "url": "media/images/blog/skepticism/detox.jpg",
    "revision": "6d8851ba75188e3cfcf9353a495b2d69"
  },
  {
    "url": "media/images/blog/skepticism/dhea.jpg",
    "revision": "e5b160424604e64423444ec2905d4aae"
  },
  {
    "url": "media/images/blog/skepticism/divination.jpg",
    "revision": "dabe027867c025aa4bf36dd6011fafbd"
  },
  {
    "url": "media/images/blog/skepticism/doctor.jpg",
    "revision": "f5e2d56ad2547a0f21e52adec957c449"
  },
  {
    "url": "media/images/blog/skepticism/doterra.jpg",
    "revision": "f389e790843dbdce99a6cb42a473810c"
  },
  {
    "url": "media/images/blog/skepticism/dowsing.jpg",
    "revision": "de41f8a83f15cdb2218ba4e8a13d0758"
  },
  {
    "url": "media/images/blog/skepticism/dream.jpg",
    "revision": "458b96d6c3fee1657745d09c6c8a8a94"
  },
  {
    "url": "media/images/blog/skepticism/drought.jpg",
    "revision": "d308ad7ed89c035030e1971fd211de1c"
  },
  {
    "url": "media/images/blog/skepticism/ear.jpg",
    "revision": "1b7ed201234504f7716bac3edb965510"
  },
  {
    "url": "media/images/blog/skepticism/earthing.jpg",
    "revision": "7b2322eb81d6feabeef66fe7ca8bf210"
  },
  {
    "url": "media/images/blog/skepticism/earthquake.jpg",
    "revision": "2008664deb213e93b51d3e1017b2ee3d"
  },
  {
    "url": "media/images/blog/skepticism/echinacea.jpg",
    "revision": "ef0fe282c72aa37a51c31c0f06a4c67b"
  },
  {
    "url": "media/images/blog/skepticism/eft.jpg",
    "revision": "a735fbc9bf9379bc56d28a44ce6c38a3"
  },
  {
    "url": "media/images/blog/skepticism/emeter.jpg",
    "revision": "902d0d709553e5c5c13ad04220ca6665"
  },
  {
    "url": "media/images/blog/skepticism/energy.jpg",
    "revision": "0635ac3ee0d76efe5ec46fd421ebd95c"
  },
  {
    "url": "media/images/blog/skepticism/esp.jpg",
    "revision": "ffffa3437f4d01c550825f4bbaa8a54c"
  },
  {
    "url": "media/images/blog/skepticism/essiac.jpg",
    "revision": "1e5e70254eb9cb4f95fd7b10ab4f8000"
  },
  {
    "url": "media/images/blog/skepticism/evangelical.jpg",
    "revision": "9c1325459089a3cce60a095bbbc1b7d1"
  },
  {
    "url": "media/images/blog/skepticism/exorcism.jpg",
    "revision": "50aab98f49acb1c58ef80eedce5bc833"
  },
  {
    "url": "media/images/blog/skepticism/expo.jpg",
    "revision": "267776ccbf3189594ee9c3cc0dc4efb4"
  },
  {
    "url": "media/images/blog/skepticism/eye.jpg",
    "revision": "04fdc2a786f14882e33050fe54d49cf7"
  },
  {
    "url": "media/images/blog/skepticism/faithhealing.jpg",
    "revision": "9d06b4c76ff80fec333ccdc77c82abce"
  },
  {
    "url": "media/images/blog/skepticism/fastfood.jpg",
    "revision": "dcbadbfdec56af6550acc3d4442f0ae4"
  },
  {
    "url": "media/images/blog/skepticism/fc.jpg",
    "revision": "209bb015e4c201b01b93e0191a4dc8bc"
  },
  {
    "url": "media/images/blog/skepticism/feldenkrais.jpg",
    "revision": "acdcfea24eb9f007d0767b0b3d1641b2"
  },
  {
    "url": "media/images/blog/skepticism/fengshui.jpg",
    "revision": "bdf3e05b45c9290b1a457a9bedee22a7"
  },
  {
    "url": "media/images/blog/skepticism/flatearth.jpg",
    "revision": "0f0bcad9e6e376cc0f127d3878055555"
  },
  {
    "url": "media/images/blog/skepticism/flood.jpg",
    "revision": "ea5ddc2dd48e25558a8036e09f71d04c"
  },
  {
    "url": "media/images/blog/skepticism/fluoridation.jpg",
    "revision": "54b0f3b342ebd3bce74ab04d157c7a4e"
  },
  {
    "url": "media/images/blog/skepticism/freemasons.jpg",
    "revision": "69a908ae4cb7e4107cf09f0739277087"
  },
  {
    "url": "media/images/blog/skepticism/fsm.jpg",
    "revision": "1dde6fe89a31281c9cbb88a5dbee3de4"
  },
  {
    "url": "media/images/blog/skepticism/fyi.jpg",
    "revision": "99f054b83243c43de29b368f3ed12fd7"
  },
  {
    "url": "media/images/blog/skepticism/gcp.jpg",
    "revision": "d1afabe89433cad463588738d23c24d4"
  },
  {
    "url": "media/images/blog/skepticism/ghost.jpg",
    "revision": "d1a557abbd5d220cbb43aa4947c7cdfb"
  },
  {
    "url": "media/images/blog/skepticism/ghosthunting.jpg",
    "revision": "fc1396074505e469d70d5bf2c5ffab8c"
  },
  {
    "url": "media/images/blog/skepticism/glyphosate.jpg",
    "revision": "633d9bad570a1160adcb50190241ee0d"
  },
  {
    "url": "media/images/blog/skepticism/gmo.jpg",
    "revision": "92e1041b6bb35b271943bc73aa0cb7ae"
  },
  {
    "url": "media/images/blog/skepticism/green.jpg",
    "revision": "2cd58e2c68755f1ecf55377c8ea2cadd"
  },
  {
    "url": "media/images/blog/skepticism/grounding.jpg",
    "revision": "199166959f96a10894bcec51d63cb1e4"
  },
  {
    "url": "media/images/blog/skepticism/guasha.jpg",
    "revision": "35a2118c4e3fd0f897e98055368e718d"
  },
  {
    "url": "media/images/blog/skepticism/hair.jpg",
    "revision": "47aa2d6cf06915459ae0e40cfc76dc94"
  },
  {
    "url": "media/images/blog/skepticism/haka.jpg",
    "revision": "0c453327adf5e176497739c68b3836f9"
  },
  {
    "url": "media/images/blog/skepticism/handwriting.jpg",
    "revision": "5c2f68c08bf1e54573199df55929055f"
  },
  {
    "url": "media/images/blog/skepticism/healing.jpg",
    "revision": "56f71396197a96a4eef872cace9754af"
  },
  {
    "url": "media/images/blog/skepticism/healingtouch.jpg",
    "revision": "438a264bc74dcd1db9a620761e97aaee"
  },
  {
    "url": "media/images/blog/skepticism/herbal.jpg",
    "revision": "be9a78f4baffd85ebbdc27fff6fe0588"
  },
  {
    "url": "media/images/blog/skepticism/history.jpg",
    "revision": "c08bc45fe15494efc80178bc1295d7a7"
  },
  {
    "url": "media/images/blog/skepticism/hiv.jpg",
    "revision": "f8781039b73d2bd36f5a5c358c3d4829"
  },
  {
    "url": "media/images/blog/skepticism/homeopathy.jpg",
    "revision": "c2ffc81315dbcd3425ab22d1fefc8685"
  },
  {
    "url": "media/images/blog/skepticism/hotstone.jpg",
    "revision": "9fa8baba0580080e13cf688c315ecfa9"
  },
  {
    "url": "media/images/blog/skepticism/hrv.jpg",
    "revision": "e02432b8e360a5bf05ec00805212f884"
  },
  {
    "url": "media/images/blog/skepticism/humanism.jpg",
    "revision": "abde90860091bafa89975998cf7363e4"
  },
  {
    "url": "media/images/blog/skepticism/hypnosis.jpg",
    "revision": "cbb6358feaf679790c1fb98ed44d9079"
  },
  {
    "url": "media/images/blog/skepticism/hypnotism.jpg",
    "revision": "84ef801e7970d13c33f6631185054ffd"
  },
  {
    "url": "media/images/blog/skepticism/infowars.jpg",
    "revision": "948a064d6597cd5c1b85f2f5eec93ff5"
  },
  {
    "url": "media/images/blog/skepticism/intuition.jpg",
    "revision": "7c57e4bf6faa3e13ba55b97dbe925a88"
  },
  {
    "url": "media/images/blog/skepticism/islam.jpg",
    "revision": "59fd647fcc7af48ffea1ee5c2336ae06"
  },
  {
    "url": "media/images/blog/skepticism/iv.jpg",
    "revision": "d25b3ec083780e709fdd55498a8fe9e8"
  },
  {
    "url": "media/images/blog/skepticism/japanese.jpg",
    "revision": "e04dcfbf088218afd5194283965404b0"
  },
  {
    "url": "media/images/blog/skepticism/journal.jpg",
    "revision": "db911d38f865e9ff691f8d2c7ef79969"
  },
  {
    "url": "media/images/blog/skepticism/judaism.jpg",
    "revision": "e27350d559cf61c237c6caa2c778b8e7"
  },
  {
    "url": "media/images/blog/skepticism/jw.jpg",
    "revision": "d7a934c4d0a13fc53115616d9dc34983"
  },
  {
    "url": "media/images/blog/skepticism/kangen.jpg",
    "revision": "204220012f62698715701caa6ad279d8"
  },
  {
    "url": "media/images/blog/skepticism/kinesiology.jpg",
    "revision": "a2a2c18456278fb331af21d3b85bd46e"
  },
  {
    "url": "media/images/blog/skepticism/kirlian.jpg",
    "revision": "1a58ddf66aa45264ea0272c7bd058a97"
  },
  {
    "url": "media/images/blog/skepticism/laser.jpg",
    "revision": "d265147b0646c770da194fe4cd2f5319"
  },
  {
    "url": "media/images/blog/skepticism/led.jpg",
    "revision": "dec9e804a154af97bab0c59fed3bb93f"
  },
  {
    "url": "media/images/blog/skepticism/levitation.jpg",
    "revision": "e9e0e8229ce6ffc0a491497aa0417b47"
  },
  {
    "url": "media/images/blog/skepticism/leylines.jpg",
    "revision": "7ae68fd11052521d65fb99de81c3ee18"
  },
  {
    "url": "media/images/blog/skepticism/libby.jpg",
    "revision": "995f5b350fc48a6bdf375f18c9da031c"
  },
  {
    "url": "media/images/blog/skepticism/light.jpg",
    "revision": "731c7b501f8f8549556e2cfafae3b92b"
  },
  {
    "url": "media/images/blog/skepticism/lottery.jpg",
    "revision": "8baad08a1d5115d9f2217819736f8a7c"
  },
  {
    "url": "media/images/blog/skepticism/magic.jpg",
    "revision": "2451493baab4daba235ae1f3f2d6d7ea"
  },
  {
    "url": "media/images/blog/skepticism/magnet.jpg",
    "revision": "23a16a30c68f106f5384a12ebd0928af"
  },
  {
    "url": "media/images/blog/skepticism/mandala.jpg",
    "revision": "ec9154b0ee0e9733f2517c233723479b"
  },
  {
    "url": "media/images/blog/skepticism/mandela.jpg",
    "revision": "7bfe0ad8d89ea4335617687a6230929b"
  },
  {
    "url": "media/images/blog/skepticism/maori.jpg",
    "revision": "dacdd581513000bfcdd2292bb505e85a"
  },
  {
    "url": "media/images/blog/skepticism/mars.jpg",
    "revision": "57c9b355c45e3ef4ff93131776d5c27a"
  },
  {
    "url": "media/images/blog/skepticism/massage.jpg",
    "revision": "5c91262c3d3d55387e7d27d9a93127d3"
  },
  {
    "url": "media/images/blog/skepticism/medium.jpg",
    "revision": "4bdf9d52ee35e4b76e1691a920218334"
  },
  {
    "url": "media/images/blog/skepticism/mentalist.jpg",
    "revision": "179f05520fc684c62c4f7c57eda6982a"
  },
  {
    "url": "media/images/blog/skepticism/meridians.jpg",
    "revision": "6dcebd6171469afcc474049eb4b1a249"
  },
  {
    "url": "media/images/blog/skepticism/milk.jpg",
    "revision": "702299c9cbf6c3c47d464bc1db7e4e87"
  },
  {
    "url": "media/images/blog/skepticism/mind.jpg",
    "revision": "099edbac4a0365d202f76d256c599a78"
  },
  {
    "url": "media/images/blog/skepticism/mindreading.jpg",
    "revision": "17b7d95f13333eba9e57b3749f14239e"
  },
  {
    "url": "media/images/blog/skepticism/miracle.jpg",
    "revision": "1c8688a33c3ccba398503e0a8799a17e"
  },
  {
    "url": "media/images/blog/skepticism/mistletoe.jpg",
    "revision": "20591cb2f72ea8440b5a07d024d1123b"
  },
  {
    "url": "media/images/blog/skepticism/mmm.jpg",
    "revision": "9a87aa6de2140acaec37f02736b811da"
  },
  {
    "url": "media/images/blog/skepticism/mms.jpg",
    "revision": "dfad05e4e3e8f7c41eb6f1dda922a8e6"
  },
  {
    "url": "media/images/blog/skepticism/moon.jpg",
    "revision": "2aa8b279125057e8141ec16e2638e359"
  },
  {
    "url": "media/images/blog/skepticism/moxibustion.jpg",
    "revision": "13a19eb7fd91a263951625b5f05c6fd6"
  },
  {
    "url": "media/images/blog/skepticism/nasa.jpg",
    "revision": "390181e652bbb0de6cc3a19663dfad39"
  },
  {
    "url": "media/images/blog/skepticism/naturopathy.jpg",
    "revision": "69d1c0025e35647512894a10443c981e"
  },
  {
    "url": "media/images/blog/skepticism/ness.jpg",
    "revision": "cf1d682e912818e30309ed907ad4e1bc"
  },
  {
    "url": "media/images/blog/skepticism/newage.jpg",
    "revision": "d981c06bb91a55a647469c43fc56a627"
  },
  {
    "url": "media/images/blog/skepticism/nhs.jpg",
    "revision": "db1e4c4ef3bc6e3b6e4a2efd37fffb30"
  },
  {
    "url": "media/images/blog/skepticism/nlp.jpg",
    "revision": "b9dc1e4fa44df3f74454a6a4599fd9af"
  },
  {
    "url": "media/images/blog/skepticism/numbers.jpg",
    "revision": "1cc26ff23e11079c3b1b6644b8dacf97"
  },
  {
    "url": "media/images/blog/skepticism/nzskeptics.jpg",
    "revision": "206d9aab033785539c042f78896f3034"
  },
  {
    "url": "media/images/blog/skepticism/obama.jpg",
    "revision": "8aa2af06e927544463aa2a128a81a5ff"
  },
  {
    "url": "media/images/blog/skepticism/occult.jpg",
    "revision": "39df4e519e6359c72ee5a04e9e196eca"
  },
  {
    "url": "media/images/blog/skepticism/oil.jpg",
    "revision": "2e5e93a4402d77919bc398f57e058164"
  },
  {
    "url": "media/images/blog/skepticism/orgonomy.jpg",
    "revision": "e3927f6180c30116446d1e4841838a74"
  },
  {
    "url": "media/images/blog/skepticism/oscillococcinum.jpg",
    "revision": "0e6e54947daf2d7874fd871a1e532df9"
  },
  {
    "url": "media/images/blog/skepticism/osteopathy.jpg",
    "revision": "71723bddfb623f5a26b9ba264a51fd7a"
  },
  {
    "url": "media/images/blog/skepticism/oto.jpg",
    "revision": "2bd4495be136c0346481e4eee8c671c1"
  },
  {
    "url": "media/images/blog/skepticism/ouija.jpg",
    "revision": "606d1c772d89fa629186b98647171ed4"
  },
  {
    "url": "media/images/blog/skepticism/ozone.jpg",
    "revision": "739085a325b905eb754ae34219372bb3"
  },
  {
    "url": "media/images/blog/skepticism/paint.jpg",
    "revision": "34792544606bfa1c7fefae59613e815e"
  },
  {
    "url": "media/images/blog/skepticism/palmistry.jpg",
    "revision": "50be6e22d8f65e59bca9c1ea0689670c"
  },
  {
    "url": "media/images/blog/skepticism/perpetual.jpg",
    "revision": "97240ce695d5e1e5f7b47b18d305970e"
  },
  {
    "url": "media/images/blog/skepticism/pharmacy.jpg",
    "revision": "f41c0a5c9f5f7ecf7086a991f800b217"
  },
  {
    "url": "media/images/blog/skepticism/phone.jpg",
    "revision": "e8e82736ae13937737b7e11b56f3b69a"
  },
  {
    "url": "media/images/blog/skepticism/phrenology.jpg",
    "revision": "6a8bbbaf8393a0662fbc8101f9bb1dd3"
  },
  {
    "url": "media/images/blog/skepticism/physics.jpg",
    "revision": "314ce71f89613f4e9eec48d96fe79353"
  },
  {
    "url": "media/images/blog/skepticism/placenta.jpg",
    "revision": "e0e63afffec60da492508246a37db238"
  },
  {
    "url": "media/images/blog/skepticism/pokemon.jpg",
    "revision": "da44077d4d6e167498246391751aabc6"
  },
  {
    "url": "media/images/blog/skepticism/polygraph.jpg",
    "revision": "3647354396f71b30938817f720f5de34"
  },
  {
    "url": "media/images/blog/skepticism/powerbalance.jpg",
    "revision": "7bf3b18043143603faa4ffd8f6394084"
  },
  {
    "url": "media/images/blog/skepticism/prayer.jpg",
    "revision": "13aa8db4d213217db7a7d4f8d0e6cf66"
  },
  {
    "url": "media/images/blog/skepticism/preacher.jpg",
    "revision": "4134d2f5fc0becb66967c9221aa1c0dc"
  },
  {
    "url": "media/images/blog/skepticism/priest.jpg",
    "revision": "3479bcfe7f748ce3a77ca715a1826b94"
  },
  {
    "url": "media/images/blog/skepticism/pseudoscience.jpg",
    "revision": "a418d70709eaa0cd29c4084eeb1e4242"
  },
  {
    "url": "media/images/blog/skepticism/psychic.jpg",
    "revision": "135adfcaefddd85ef3aa92cfae74d9d9"
  },
  {
    "url": "media/images/blog/skepticism/psychicsurgery.jpg",
    "revision": "91fc1a92b98379ac44a7a65c44d2af18"
  },
  {
    "url": "media/images/blog/skepticism/pulse.jpg",
    "revision": "976428365ffa8db932ce72c20dc13b26"
  },
  {
    "url": "media/images/blog/skepticism/pyramid.jpg",
    "revision": "b91daca5e07b1ef394544d217be219b3"
  },
  {
    "url": "media/images/blog/skepticism/qi.jpg",
    "revision": "f0f6ceb1c858d300d81de52c3cba8e24"
  },
  {
    "url": "media/images/blog/skepticism/qigong.jpg",
    "revision": "b166f25d5dafbba9d492bd652467379d"
  },
  {
    "url": "media/images/blog/skepticism/qtb.jpg",
    "revision": "f5cac343016eb83e80344a7d68664922"
  },
  {
    "url": "media/images/blog/skepticism/quantum.jpg",
    "revision": "075035ba299ddd5576c739b6029aa540"
  },
  {
    "url": "media/images/blog/skepticism/question.jpg",
    "revision": "5bdf273f94cb57e89dc6d850b1dd61a2"
  },
  {
    "url": "media/images/blog/skepticism/radiation.jpg",
    "revision": "81f1f8f84170c35de89e20d9b6e72783"
  },
  {
    "url": "media/images/blog/skepticism/radionics.jpg",
    "revision": "4f3535af5122c6a7249100efeaeb982d"
  },
  {
    "url": "media/images/blog/skepticism/reflexology.jpg",
    "revision": "223249c9925508b7df02af31a5d82d4c"
  },
  {
    "url": "media/images/blog/skepticism/reiki.jpg",
    "revision": "f0912797cc150a2d449629db8b35d5b8"
  },
  {
    "url": "media/images/blog/skepticism/religion.jpg",
    "revision": "0a5225769ab79855c524674906a61ee3"
  },
  {
    "url": "media/images/blog/skepticism/remote.jpg",
    "revision": "d31d095ea513063724997e043e7044c1"
  },
  {
    "url": "media/images/blog/skepticism/reparative.jpg",
    "revision": "43604a466b34d51a97f8f5814f418276"
  },
  {
    "url": "media/images/blog/skepticism/reptoid.jpg",
    "revision": "ed6419e594444ed4ad5531217da80606"
  },
  {
    "url": "media/images/blog/skepticism/resurrection.jpg",
    "revision": "bbce3cee5af428268c4720140e2f0bb4"
  },
  {
    "url": "media/images/blog/skepticism/rife.jpg",
    "revision": "fafcac311dcd9ee5ad56c74bdde350e2"
  },
  {
    "url": "media/images/blog/skepticism/rolfing.jpg",
    "revision": "bc83030435401c357499dc83e569839a"
  },
  {
    "url": "media/images/blog/skepticism/rongoa.jpg",
    "revision": "9ed691e020cdb2b910fcd8b5661135a2"
  },
  {
    "url": "media/images/blog/skepticism/runes.jpg",
    "revision": "d953b1ee4bb3823e204d3e1bd5c368c6"
  },
  {
    "url": "media/images/blog/skepticism/satanism.jpg",
    "revision": "367eda64bd7ae5c71aca02cef3d94d2e"
  },
  {
    "url": "media/images/blog/skepticism/sawdust.jpg",
    "revision": "345ef4e0ed9d0f2861abeae872aa018c"
  },
  {
    "url": "media/images/blog/skepticism/scam.jpg",
    "revision": "797c58fe26b854d5664a67a9804fa524"
  },
  {
    "url": "media/images/blog/skepticism/science.jpg",
    "revision": "bee639fb20d032ebd52308744929e3f9"
  },
  {
    "url": "media/images/blog/skepticism/scientology.jpg",
    "revision": "99e290af703eeb652b63dae845e43078"
  },
  {
    "url": "media/images/blog/skepticism/sea.jpg",
    "revision": "8db5905e167683ce2853ae969fc43dd3"
  },
  {
    "url": "media/images/blog/skepticism/seance.jpg",
    "revision": "25e4028bbe4345fd6dadb2ea4712a108"
  },
  {
    "url": "media/images/blog/skepticism/sen.jpg",
    "revision": "77d6db3dad8c1dd7dac78e1b7c09d5e6"
  },
  {
    "url": "media/images/blog/skepticism/shakti.jpg",
    "revision": "7e2cc19b65608f9c6ef39a9258590c04"
  },
  {
    "url": "media/images/blog/skepticism/shark.jpg",
    "revision": "9fc0f09091ab099e0e6c805e1844a959"
  },
  {
    "url": "media/images/blog/skepticism/shc.jpg",
    "revision": "49051573c51cb68df7ded33a9ec28893"
  },
  {
    "url": "media/images/blog/skepticism/shiatsu.jpg",
    "revision": "0c959a8183fa57140ea628b8c83dde0f"
  },
  {
    "url": "media/images/blog/skepticism/shooting.jpg",
    "revision": "1f051eff494f41f48e7ecb6be8e0f8f6"
  },
  {
    "url": "media/images/blog/skepticism/silver.jpg",
    "revision": "c4f6adf44165a247f5b357bda6504eb0"
  },
  {
    "url": "media/images/blog/skepticism/sound.jpg",
    "revision": "97f171cc01ddbca35d6f4beceb0c4471"
  },
  {
    "url": "media/images/blog/skepticism/spa.jpg",
    "revision": "a176ae3fcb80f0670cb356c084906d6c"
  },
  {
    "url": "media/images/blog/skepticism/sport.jpg",
    "revision": "c797ec74fba5427da703689db001c755"
  },
  {
    "url": "media/images/blog/skepticism/stargate.jpg",
    "revision": "62c21102cc272330cbd2b6056f9593e2"
  },
  {
    "url": "media/images/blog/skepticism/sunscreen.jpg",
    "revision": "ce93e2ec1423542965f6b1b2be1a2e20"
  },
  {
    "url": "media/images/blog/skepticism/superfood.jpg",
    "revision": "97162210c45ef8dad987a30475a29b5e"
  },
  {
    "url": "media/images/blog/skepticism/taichi.jpg",
    "revision": "05976bded34161aa31e0f0e0fc34ae9b"
  },
  {
    "url": "media/images/blog/skepticism/talc.jpg",
    "revision": "584091539ddf45a0e7a6131762869130"
  },
  {
    "url": "media/images/blog/skepticism/talisman.jpg",
    "revision": "bb5406a32e98c7363654923038e13601"
  },
  {
    "url": "media/images/blog/skepticism/tarot.jpg",
    "revision": "3fdefe62d2372926fb6065a14f3f98f5"
  },
  {
    "url": "media/images/blog/skepticism/telekinesis.jpg",
    "revision": "a68e3907b300f40296d924f070f6129d"
  },
  {
    "url": "media/images/blog/skepticism/telepathy.jpg",
    "revision": "87a391f67565051851afbc807a661dc8"
  },
  {
    "url": "media/images/blog/skepticism/thoughts.jpg",
    "revision": "ecb0fd9995a5c5d0857ffb511be1c25c"
  },
  {
    "url": "media/images/blog/skepticism/thoughts.old.jpg",
    "revision": "9f8fd09660eb8ee6ae66fbf80ce7b649"
  },
  {
    "url": "media/images/blog/skepticism/timetravel.jpg",
    "revision": "7d439a26e11eb6240589a6068415f8f3"
  },
  {
    "url": "media/images/blog/skepticism/touch.jpg",
    "revision": "aab27e0e5aff559e7589bddbb61632bc"
  },
  {
    "url": "media/images/blog/skepticism/tract.jpg",
    "revision": "937b71a93ce429b0356a6d95aa339160"
  },
  {
    "url": "media/images/blog/skepticism/trepanation.jpg",
    "revision": "19258bed857c0f78d97ff4e9e7c77744"
  },
  {
    "url": "media/images/blog/skepticism/trump.jpg",
    "revision": "97f9e5660bc1ce329699b6461db20030"
  },
  {
    "url": "media/images/blog/skepticism/tuina.jpg",
    "revision": "d48b05f7a97d0e59155448c9854e00e5"
  },
  {
    "url": "media/images/blog/skepticism/tuningfork.jpg",
    "revision": "2458474a78dc4a8dc43dd46d19a81b9f"
  },
  {
    "url": "media/images/blog/skepticism/ufo.jpg",
    "revision": "f9e78d38e41f75c82e7419f2fd90aec9"
  },
  {
    "url": "media/images/blog/skepticism/urine.jpg",
    "revision": "6f9a9d31fe00fc0bff546900218d5139"
  },
  {
    "url": "media/images/blog/skepticism/v2k.jpg",
    "revision": "25fcfdec8f6a06c0073e7b801ae933eb"
  },
  {
    "url": "media/images/blog/skepticism/vaccines.jpg",
    "revision": "744233f9f617f58b9acb5b81889033d2"
  },
  {
    "url": "media/images/blog/skepticism/vet.jpg",
    "revision": "dff2eef3630ee0c9f190384f8276cb7e"
  },
  {
    "url": "media/images/blog/skepticism/vibration.jpg",
    "revision": "ac3d9966831e9b2a3cc3c84bcf2f7015"
  },
  {
    "url": "media/images/blog/skepticism/visa.jpg",
    "revision": "993ac41ca631f147fcf199bb5d47aa3f"
  },
  {
    "url": "media/images/blog/skepticism/vitalism.jpg",
    "revision": "7cb3bb8ba37d4a985af9411cdac26414"
  },
  {
    "url": "media/images/blog/skepticism/vitamins.jpg",
    "revision": "c204002a0d94482823f01fc6e69ea333"
  },
  {
    "url": "media/images/blog/skepticism/voodoo.jpg",
    "revision": "afa94c93ac3a8d3d62a60194eb79bc79"
  },
  {
    "url": "media/images/blog/skepticism/waspnest.jpg",
    "revision": "cff6306bc84e86fc009d4a060166a1c1"
  },
  {
    "url": "media/images/blog/skepticism/water.jpg",
    "revision": "28429e106fa6347a2a0e5bbb77b648be"
  },
  {
    "url": "media/images/blog/skepticism/weather.jpg",
    "revision": "2ad2fbc357aaa27059ab7e088d83f416"
  },
  {
    "url": "media/images/blog/skepticism/witchcraft.jpg",
    "revision": "f5f646c98070a06145252168b12bd63a"
  },
  {
    "url": "media/images/blog/skepticism/writing.jpg",
    "revision": "875333e4a9020e84bb9c5e92e9ff3c42"
  },
  {
    "url": "media/images/blog/skepticism/yoga.jpg",
    "revision": "e38bef4e17f3d8f83f56014487a53bbb"
  },
  {
    "url": "media/images/blog/thinking.jpg",
    "revision": "1f6d063ecc787a60eb6d1fb9a6ebf277"
  },
  {
    "url": "media/images/icons/android-chrome-192x192.png",
    "revision": "ba2b208e7a4f50905c2ec4b35258888b"
  },
  {
    "url": "media/images/icons/android-chrome-512x512.png",
    "revision": "418d2d5e7eb47d586ed303be546814db"
  },
  {
    "url": "media/images/icons/apple-touch-icon.png",
    "revision": "bf385d675ef11089250f23e4c439bef8"
  },
  {
    "url": "media/images/icons/favicon-16x16.png",
    "revision": "c44f50afaacb1f5aa2b56a58e9fc913f"
  },
  {
    "url": "media/images/icons/favicon-32x32.png",
    "revision": "edecf915c6d10de56ce7e064d0ae8ef7"
  },
  {
    "url": "media/images/icons/mstile-144x144.png",
    "revision": "8ee77907f55674c704c9a57a768761c0"
  },
  {
    "url": "media/images/icons/mstile-150x150.png",
    "revision": "b87ae2ef5c49ae3e1b5413d43c6d18c1"
  },
  {
    "url": "media/images/icons/mstile-310x150.png",
    "revision": "0e761bae4862301121b01e2ed548f738"
  },
  {
    "url": "media/images/icons/mstile-310x310.png",
    "revision": "6764feedb6c066eeeda6aa4627388dd7"
  },
  {
    "url": "media/images/icons/mstile-70x70.png",
    "revision": "8cc31ffed4df8dd34c335d95048f7706"
  },
  {
    "url": "media/images/icons/safari-pinned-tab.svg",
    "revision": "890545d513c385df7e875fd83572744d"
  },
  {
    "url": "media/images/podcast/SkepticismToday001.jpg",
    "revision": "a56e345fcc69f98dbba872d7cbabc4cc"
  },
  {
    "url": "media/images/podcast/SkepticismToday002.jpg",
    "revision": "9adc8236ff2d0675abbc6c7f3f37616a"
  },
  {
    "url": "media/images/podcast/SkepticismToday003.jpg",
    "revision": "3f4139999f6968cbb84ed283b49bb0eb"
  },
  {
    "url": "media/images/podcast/SkepticismToday004.jpg",
    "revision": "27391ea801c689fa762d3d9cb400602d"
  },
  {
    "url": "media/images/podcast/SkepticismToday005.jpg",
    "revision": "e6cd43dc005e363e0d1c3aa5503ee1ce"
  },
  {
    "url": "media/images/podcast/SkepticismToday006.jpg",
    "revision": "92f9ab2714ad903986e409e810a2ac55"
  },
  {
    "url": "media/images/podcast/SkepticismToday007.jpg",
    "revision": "4fd50c14939b356ad341f2da69e3d699"
  },
  {
    "url": "media/images/podcast/SkepticismToday008.jpg",
    "revision": "77205bd200e4d4e79490530d4561d552"
  },
  {
    "url": "media/images/podcast/SkepticismToday009.jpg",
    "revision": "9f6381b55293fe6ff3a47f4b10e825cb"
  },
  {
    "url": "media/images/podcast/SkepticismToday010.jpg",
    "revision": "a5f671b870719945ae2fedb1ec801781"
  },
  {
    "url": "media/index.html",
    "revision": "b5010dde2d70dcf3d3d891e154d290d2"
  },
  {
    "url": "media/me/index.html",
    "revision": "925a9127407abd5d0dcc123b9a0a59c6"
  },
  {
    "url": "pages/first/image1.gif",
    "revision": "ec4962bc72a598bae1f2f4eb68502c0a"
  },
  {
    "url": "pages/first/image2.gif",
    "revision": "22d2df7adec253105703627d50a03075"
  },
  {
    "url": "pages/first/image3.gif",
    "revision": "d281d7ae9d47f633a17ae66c9744f0a9"
  },
  {
    "url": "pages/first/image4.gif",
    "revision": "5ff3cef4106292944688eba4aa14c32a"
  },
  {
    "url": "pages/first/image5.gif",
    "revision": "1fefd0d1253acf3f375ec5b39e2a445d"
  },
  {
    "url": "pages/first/index.html",
    "revision": "ca9721a88074a6cba6e3f8b3a306d616"
  },
  {
    "url": "pages/first/old/index.html",
    "revision": "8511cf094d0c5a3ffee70730259aa487"
  },
  {
    "url": "status/facebook/index.html",
    "revision": "c72a98a3d15f8764215bc2b72be634a8"
  },
  {
    "url": "status/index.html",
    "revision": "ce051aa3a05dc93fffb93a9f432bef2b"
  },
  {
    "url": "status/steam/index.html",
    "revision": "c4ec38e5d208046fc3818a7b0eec3ff6"
  },
  {
    "url": "status/twitter/index.html",
    "revision": "849c0bb4abb3f55b4043f6c9e5ea5ea9"
  },
  {
    "url": "status/wikipedia/index.html",
    "revision": "36280f01b8db5434c8ab01cb37cfc733"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
