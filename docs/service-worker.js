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
    "revision": "53a41efcbfb1966d05d45659f886510b"
  },
  {
    "url": "assets/css/0.styles.css",
    "revision": "8ae4d376c782110fbd4f703a487aa236"
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
    "revision": "946919769c5c92733f7b7fa615014fd9"
  },
  {
    "url": "assets/js/10.js",
    "revision": "0833bdc35df18d1bc06bdf5935843d9e"
  },
  {
    "url": "assets/js/100.js",
    "revision": "04eb6840110d2d7cb681cd8830cb1dd2"
  },
  {
    "url": "assets/js/101.js",
    "revision": "0f30bf59e8f388157920192b3e462da1"
  },
  {
    "url": "assets/js/102.js",
    "revision": "deda1cd4f68035bac69ab582e390014a"
  },
  {
    "url": "assets/js/103.js",
    "revision": "bbf86e6d1b4f81722dc4ccc8b27ecb8f"
  },
  {
    "url": "assets/js/104.js",
    "revision": "e80bf6f88824453bc132725d4cbe7fca"
  },
  {
    "url": "assets/js/105.js",
    "revision": "fe31772b2c81e454947b1ee1f8b9358c"
  },
  {
    "url": "assets/js/106.js",
    "revision": "1ba360dcec82ee26504e5a87638f6055"
  },
  {
    "url": "assets/js/107.js",
    "revision": "b11d6bee8b23a2196a7d4d44d29a68fd"
  },
  {
    "url": "assets/js/108.js",
    "revision": "612dfd99842a0d7c5c1b4525cdd9c49d"
  },
  {
    "url": "assets/js/109.js",
    "revision": "e9672914ebca9395cc3713028e543fba"
  },
  {
    "url": "assets/js/11.js",
    "revision": "30db852c8c3b2826c34e8f7f3be0a57d"
  },
  {
    "url": "assets/js/110.js",
    "revision": "71f7e743c4e8da681cc7e9fe9983c6ed"
  },
  {
    "url": "assets/js/111.js",
    "revision": "0c18527d10bfbda5185955aef9f25d4f"
  },
  {
    "url": "assets/js/112.js",
    "revision": "fc234a83a55b53be15ce966111a55c03"
  },
  {
    "url": "assets/js/113.js",
    "revision": "3bebed4398fb784a05207a456e2b8f93"
  },
  {
    "url": "assets/js/114.js",
    "revision": "69f0ca47108c06a8776874e0525e35ae"
  },
  {
    "url": "assets/js/115.js",
    "revision": "49069511e0de762ddf884f78ad2e35fc"
  },
  {
    "url": "assets/js/116.js",
    "revision": "76013bcf7a5291a981dc9538f5668666"
  },
  {
    "url": "assets/js/117.js",
    "revision": "eb4c7da9e1ee2e660043eaa3af33edb1"
  },
  {
    "url": "assets/js/118.js",
    "revision": "5f1b4ffcef3fd99d021d1982bd6a1fe7"
  },
  {
    "url": "assets/js/119.js",
    "revision": "3f44644d046b0e524e20fd5869e2b353"
  },
  {
    "url": "assets/js/12.js",
    "revision": "b1fbaebe299ef94eb72f15ec0ae8e4db"
  },
  {
    "url": "assets/js/120.js",
    "revision": "43148c2b1d5659dbe594a1ad26271630"
  },
  {
    "url": "assets/js/121.js",
    "revision": "7b2262ab14192a6f6be1e88f33419748"
  },
  {
    "url": "assets/js/122.js",
    "revision": "8d614dd372be93f39be6307b258e7c70"
  },
  {
    "url": "assets/js/123.js",
    "revision": "f69ecb68863027bf6f00ad641fcfac28"
  },
  {
    "url": "assets/js/124.js",
    "revision": "dab04875262a76b9e39cfc5652361885"
  },
  {
    "url": "assets/js/125.js",
    "revision": "0ac4711a295d268ee4df8469efeb6f2c"
  },
  {
    "url": "assets/js/126.js",
    "revision": "a69fb0a3036952dc45954647d0395491"
  },
  {
    "url": "assets/js/127.js",
    "revision": "736a2da447dc3ad871e46f376de5fef7"
  },
  {
    "url": "assets/js/128.js",
    "revision": "9db6e1fe4d4b7c457427d1f2ee505548"
  },
  {
    "url": "assets/js/129.js",
    "revision": "945184dacb04082bea722e5d2e3b65fa"
  },
  {
    "url": "assets/js/13.js",
    "revision": "1cfe8dda1d6a962f427d78e965bffd6d"
  },
  {
    "url": "assets/js/130.js",
    "revision": "112e85231466c704199f5507dce467f9"
  },
  {
    "url": "assets/js/131.js",
    "revision": "f684bf4c8b3ba81b497357728060feb2"
  },
  {
    "url": "assets/js/132.js",
    "revision": "b9bbaf0ac12845b043d5ba518ea8e598"
  },
  {
    "url": "assets/js/133.js",
    "revision": "6d640743a56d74c6270841aefe109669"
  },
  {
    "url": "assets/js/134.js",
    "revision": "d4d5c1b9f64188c834b4d8a71d3b0aa2"
  },
  {
    "url": "assets/js/135.js",
    "revision": "0f2ae14bc6d8fe3be1c64d93e71c12e7"
  },
  {
    "url": "assets/js/136.js",
    "revision": "5c03b045bae9a0c8a1642e886aae5d4a"
  },
  {
    "url": "assets/js/137.js",
    "revision": "7b9c2f393c5dca91441eb68bad495490"
  },
  {
    "url": "assets/js/138.js",
    "revision": "3696da19f3e8be159b37d09e4f0eb220"
  },
  {
    "url": "assets/js/139.js",
    "revision": "ee8efc1bb8dbc174251d617259bd508b"
  },
  {
    "url": "assets/js/14.js",
    "revision": "3f3630cea4af63e6542f1cb0b6a1f9e2"
  },
  {
    "url": "assets/js/140.js",
    "revision": "d890e99701122e287fd4e2b6de03c8ba"
  },
  {
    "url": "assets/js/141.js",
    "revision": "f327f551aee310b348fe0070a7419f16"
  },
  {
    "url": "assets/js/142.js",
    "revision": "42bb272df3236536966ed15d10c87b3a"
  },
  {
    "url": "assets/js/143.js",
    "revision": "904f01def9fa90982efac1a8e6031f60"
  },
  {
    "url": "assets/js/144.js",
    "revision": "3ba194156336d7adc4de7c0caa77f92a"
  },
  {
    "url": "assets/js/145.js",
    "revision": "d15013faf37cdbab13458b2867f0fecc"
  },
  {
    "url": "assets/js/146.js",
    "revision": "a70d8ea910828fcc66f253a3af80528d"
  },
  {
    "url": "assets/js/147.js",
    "revision": "d4583531d6af9846db09f8e6971a5bfb"
  },
  {
    "url": "assets/js/148.js",
    "revision": "36004c05c8e0d4de36b84fee7228715d"
  },
  {
    "url": "assets/js/149.js",
    "revision": "0afdead01d5bcc888cb5ff2c02b20b51"
  },
  {
    "url": "assets/js/15.js",
    "revision": "c72fa8cd9485f08e04e6af18ad97166e"
  },
  {
    "url": "assets/js/150.js",
    "revision": "d87ee7fed569e230d398825f0db46fed"
  },
  {
    "url": "assets/js/151.js",
    "revision": "0146543126ed03878e8e805dca1bae40"
  },
  {
    "url": "assets/js/152.js",
    "revision": "4b9c1b3dc491a823696ba43b07f85bf7"
  },
  {
    "url": "assets/js/153.js",
    "revision": "fe773585ab155c3621c6c5cbb6a45ee0"
  },
  {
    "url": "assets/js/154.js",
    "revision": "68b80a892b69042e09d516f4e25b6068"
  },
  {
    "url": "assets/js/155.js",
    "revision": "b8f477a18d766ca6dea5c475b5de9dda"
  },
  {
    "url": "assets/js/156.js",
    "revision": "8087c9fb357d6d42fdd169977863e230"
  },
  {
    "url": "assets/js/157.js",
    "revision": "28ad09810160a83cac3d70771659cde4"
  },
  {
    "url": "assets/js/158.js",
    "revision": "3b123fe29fc2063f211b7b03a681bd3a"
  },
  {
    "url": "assets/js/159.js",
    "revision": "ed0a0ca12fc8a1a4af172f41109ca69e"
  },
  {
    "url": "assets/js/16.js",
    "revision": "a5431c1a83272639812ef5bc718443c0"
  },
  {
    "url": "assets/js/160.js",
    "revision": "d4222077d1cc17e8309e13800c37f621"
  },
  {
    "url": "assets/js/161.js",
    "revision": "e8404e5d750c876ea93be2c6627a6c1a"
  },
  {
    "url": "assets/js/162.js",
    "revision": "5ff40b594b3c46ebab6969e2529853a2"
  },
  {
    "url": "assets/js/163.js",
    "revision": "65c09d836ad791cf6953d1c4a98ca621"
  },
  {
    "url": "assets/js/164.js",
    "revision": "bf682cec36b7eac487f8b2dc224985d8"
  },
  {
    "url": "assets/js/165.js",
    "revision": "4955117040ac0d112e96894a2b256b05"
  },
  {
    "url": "assets/js/166.js",
    "revision": "39cb499a2ef1ed3de4c247b476107c76"
  },
  {
    "url": "assets/js/167.js",
    "revision": "5181694fa439ecb6c7883d5f63b6501b"
  },
  {
    "url": "assets/js/168.js",
    "revision": "aea4ececbbdd276753eb836e3504f9d5"
  },
  {
    "url": "assets/js/169.js",
    "revision": "3cb396089316fbdae495a86e740faaef"
  },
  {
    "url": "assets/js/17.js",
    "revision": "3addf3a4cf6c0f692300be2838592fa2"
  },
  {
    "url": "assets/js/170.js",
    "revision": "5638799701b0b77ff2a2185504e24219"
  },
  {
    "url": "assets/js/171.js",
    "revision": "e51fbf12400abef6bec162a8e21f47b6"
  },
  {
    "url": "assets/js/172.js",
    "revision": "d4e4d3e8ad53890d4f0690a70e308218"
  },
  {
    "url": "assets/js/173.js",
    "revision": "383baf434c598eb652b1fe81de91c04b"
  },
  {
    "url": "assets/js/174.js",
    "revision": "029dfc6975af46cd72f9c59e0a0d3c8b"
  },
  {
    "url": "assets/js/175.js",
    "revision": "7539bd9f7b4982553c12a69514a3dd88"
  },
  {
    "url": "assets/js/176.js",
    "revision": "9ace9e5394421f7a40feda09d7ac486b"
  },
  {
    "url": "assets/js/177.js",
    "revision": "76f6776086818d5c397ca6413260fdf4"
  },
  {
    "url": "assets/js/178.js",
    "revision": "39c10ab50d82e547100833013b2563ac"
  },
  {
    "url": "assets/js/179.js",
    "revision": "d79234e7e971e741ce028ae308c1fde7"
  },
  {
    "url": "assets/js/18.js",
    "revision": "22c6d4a900344f89a4290329ed70c9e7"
  },
  {
    "url": "assets/js/180.js",
    "revision": "7277629cc5060d9fb58d492c85a44c21"
  },
  {
    "url": "assets/js/181.js",
    "revision": "d0ce93057899a64cf107c8daf333208a"
  },
  {
    "url": "assets/js/182.js",
    "revision": "6d2b308b6f428bd93092ac436e55132c"
  },
  {
    "url": "assets/js/183.js",
    "revision": "09c0229df0b54bc06e2467a401ac7e58"
  },
  {
    "url": "assets/js/184.js",
    "revision": "d8d9b2ae609395f2182a94eecae25fea"
  },
  {
    "url": "assets/js/185.js",
    "revision": "75a912395d86dd93f701ba6fe431b909"
  },
  {
    "url": "assets/js/186.js",
    "revision": "d48a29a93b45d9242f4f279d4fb02e16"
  },
  {
    "url": "assets/js/187.js",
    "revision": "0db842a48bd2b4e7b215172016de728f"
  },
  {
    "url": "assets/js/188.js",
    "revision": "1b931e5f4ebc2ae83f5c4368b2a48858"
  },
  {
    "url": "assets/js/189.js",
    "revision": "8e02e08de45e61c01ad97fc1bf361107"
  },
  {
    "url": "assets/js/19.js",
    "revision": "5dd3be6afbfdfd467c9a2802cc4e9794"
  },
  {
    "url": "assets/js/190.js",
    "revision": "5cfc6ba7a191d7b98c2b7c548a80b4f4"
  },
  {
    "url": "assets/js/191.js",
    "revision": "d0bfa89df43cc8bc09fa40a7e9778b1d"
  },
  {
    "url": "assets/js/192.js",
    "revision": "7871753e1324490ff40fec98d1933fab"
  },
  {
    "url": "assets/js/193.js",
    "revision": "6fbe080a2f6bd6c1c1d114578290c99c"
  },
  {
    "url": "assets/js/194.js",
    "revision": "13346735f1439b710bf4ac3dabe046f0"
  },
  {
    "url": "assets/js/195.js",
    "revision": "da901140328f5da99906d3d8ab6d0037"
  },
  {
    "url": "assets/js/196.js",
    "revision": "08ed1a08171ac5ed3681eecb1eb024a6"
  },
  {
    "url": "assets/js/197.js",
    "revision": "acd5dc0f8f0196d60ff6ad6384f34bc4"
  },
  {
    "url": "assets/js/198.js",
    "revision": "59a9ce0fb572fbb28466d40a3f4390de"
  },
  {
    "url": "assets/js/199.js",
    "revision": "286c42fe4099349e0ff14207d8686040"
  },
  {
    "url": "assets/js/2.js",
    "revision": "fc4c27a26343b3317160fcfa94ef184e"
  },
  {
    "url": "assets/js/20.js",
    "revision": "c5dc9da9b1f8e019004e6b5a1bff0016"
  },
  {
    "url": "assets/js/200.js",
    "revision": "ff3554be84c78941191acd183610f528"
  },
  {
    "url": "assets/js/201.js",
    "revision": "cd19bd46a10b4a2a7aa79ee44da156b4"
  },
  {
    "url": "assets/js/202.js",
    "revision": "79d9b9ade6790b27f50001ef70a22fcc"
  },
  {
    "url": "assets/js/203.js",
    "revision": "5f2ee6f9161dbad6e5688944b74647e4"
  },
  {
    "url": "assets/js/204.js",
    "revision": "22a3eaf7db73dddd56a64b1fceb3b399"
  },
  {
    "url": "assets/js/205.js",
    "revision": "5bac39c67c5c48a6de3646e24815d117"
  },
  {
    "url": "assets/js/206.js",
    "revision": "855440ddc57fcd3bc13256d630a37456"
  },
  {
    "url": "assets/js/207.js",
    "revision": "02467c17f5e772f571c34a75d1b5cb99"
  },
  {
    "url": "assets/js/208.js",
    "revision": "d96914336b905a6b5662df11ce28c122"
  },
  {
    "url": "assets/js/209.js",
    "revision": "0fb9fa3459ced0edc4ffa2089d3e3ece"
  },
  {
    "url": "assets/js/21.js",
    "revision": "bb04dba3ce146ef531730a5c09acd36f"
  },
  {
    "url": "assets/js/210.js",
    "revision": "6f8cfd68f1d494fa0432c529445824fc"
  },
  {
    "url": "assets/js/211.js",
    "revision": "b18cb82d92ff98147436bcf0e5e1c887"
  },
  {
    "url": "assets/js/212.js",
    "revision": "b3a806248606827622fb736e2063caaa"
  },
  {
    "url": "assets/js/213.js",
    "revision": "c7fb6b403776e03262c0d79ab86e62e0"
  },
  {
    "url": "assets/js/214.js",
    "revision": "afdab2a4f8185177e0767e33cfcde94e"
  },
  {
    "url": "assets/js/215.js",
    "revision": "c244ab59263c2b61753479a5f0d618c7"
  },
  {
    "url": "assets/js/216.js",
    "revision": "852a96ac64aef8aef215a3b0224719b5"
  },
  {
    "url": "assets/js/217.js",
    "revision": "1bc89f2ae2388cff5f2242f82bb74df4"
  },
  {
    "url": "assets/js/218.js",
    "revision": "e0cb016cf09839be6f65bcb57932b68e"
  },
  {
    "url": "assets/js/219.js",
    "revision": "ace63733c09091df896c0e23b5dadb36"
  },
  {
    "url": "assets/js/22.js",
    "revision": "91a83d7136fcafbdda3535d63a345df6"
  },
  {
    "url": "assets/js/220.js",
    "revision": "aaa46cd43a5fea624ad9c56fa271c733"
  },
  {
    "url": "assets/js/221.js",
    "revision": "dffba2c12432101aed6dbdad28c2085d"
  },
  {
    "url": "assets/js/222.js",
    "revision": "7bce80d27517d02bf196e559825dafa3"
  },
  {
    "url": "assets/js/223.js",
    "revision": "d4950bb0d34d99190c84e7121bc2a4ba"
  },
  {
    "url": "assets/js/224.js",
    "revision": "0378f142a869356c1fb2e0e249e42ce5"
  },
  {
    "url": "assets/js/225.js",
    "revision": "e9c3e587e9b29883b0c2b29c23e175bd"
  },
  {
    "url": "assets/js/226.js",
    "revision": "33feae2d3becd57433575e4ba9fc0fc0"
  },
  {
    "url": "assets/js/227.js",
    "revision": "6c5a966c2debe2ee055447e1b91c5eca"
  },
  {
    "url": "assets/js/228.js",
    "revision": "fc12bb2a8442b75f27bfe42e50819e4d"
  },
  {
    "url": "assets/js/229.js",
    "revision": "7d84a3ac55c4f1e2121f2af6a9b461d6"
  },
  {
    "url": "assets/js/23.js",
    "revision": "77753da62be587094d208dd40ba46468"
  },
  {
    "url": "assets/js/230.js",
    "revision": "273939ec33aa3293620d98d5bef38527"
  },
  {
    "url": "assets/js/231.js",
    "revision": "4dec6ec6381fa1fc28bad8bc04acc99c"
  },
  {
    "url": "assets/js/232.js",
    "revision": "dc03de2617c1b1bb38880997e10da78b"
  },
  {
    "url": "assets/js/233.js",
    "revision": "16676b5cf27d033a173f5bf59690fa97"
  },
  {
    "url": "assets/js/234.js",
    "revision": "14a85182d458865e54d91af1fadc9fc8"
  },
  {
    "url": "assets/js/235.js",
    "revision": "3ab4c45ab06f6f0d0a22a5546d153ea0"
  },
  {
    "url": "assets/js/236.js",
    "revision": "7ffc73593fe0a88ed8cbf52d24a3f7b0"
  },
  {
    "url": "assets/js/237.js",
    "revision": "d018a5422361c263d988807cbd928e71"
  },
  {
    "url": "assets/js/238.js",
    "revision": "3166fc01b540d4692b0bb74bd2cd3d4d"
  },
  {
    "url": "assets/js/239.js",
    "revision": "22e4d57dc2a4c226aae3f386ef266d33"
  },
  {
    "url": "assets/js/24.js",
    "revision": "2e874fe5cfe6be138a293622afdaa8a4"
  },
  {
    "url": "assets/js/240.js",
    "revision": "da2631783f8140fd223a932fe207588a"
  },
  {
    "url": "assets/js/241.js",
    "revision": "919f197cabe456d38f26b5f112c54201"
  },
  {
    "url": "assets/js/242.js",
    "revision": "b3d1be74a5e7b8d346b2972d21d86b33"
  },
  {
    "url": "assets/js/243.js",
    "revision": "5e53e9541de3924fb1777cc52445d18f"
  },
  {
    "url": "assets/js/244.js",
    "revision": "0f7254aa9520c15d54a9852e1f453415"
  },
  {
    "url": "assets/js/245.js",
    "revision": "07d24d2f7495b2d788436bb9846c1b1f"
  },
  {
    "url": "assets/js/246.js",
    "revision": "f96791bc7281fedd480cc80d9831aa87"
  },
  {
    "url": "assets/js/247.js",
    "revision": "5a43d1ea9cdda9672d101d611fae0d7c"
  },
  {
    "url": "assets/js/248.js",
    "revision": "6957c547a2975e26ef91d73ceeff359c"
  },
  {
    "url": "assets/js/249.js",
    "revision": "20629fad113a830947223e7948b1988a"
  },
  {
    "url": "assets/js/25.js",
    "revision": "07312ea8639615cea0e76641077928ba"
  },
  {
    "url": "assets/js/250.js",
    "revision": "1793ab09cf2ebc478d189ba7bf3f7670"
  },
  {
    "url": "assets/js/251.js",
    "revision": "c2b0ee60a4cf9474c68b8546b072661f"
  },
  {
    "url": "assets/js/252.js",
    "revision": "ca380f82d34fddd4b0fce61d482d0e58"
  },
  {
    "url": "assets/js/253.js",
    "revision": "fd81ddad3f3fb926462844a1eea4e432"
  },
  {
    "url": "assets/js/254.js",
    "revision": "cd31dc0271edddc3acd664d530310bcf"
  },
  {
    "url": "assets/js/255.js",
    "revision": "c77a7c859ffc3436e5decc348c46ff39"
  },
  {
    "url": "assets/js/256.js",
    "revision": "f9158ac3e8cf4561bac09550bdade0ef"
  },
  {
    "url": "assets/js/257.js",
    "revision": "35425fd14f4dfb22df462123ea331608"
  },
  {
    "url": "assets/js/258.js",
    "revision": "8d8e6abac5e52d3be09fc9ae4904f3b8"
  },
  {
    "url": "assets/js/259.js",
    "revision": "210ce62953d200b9ec4efc16a31b7b84"
  },
  {
    "url": "assets/js/26.js",
    "revision": "64d1d01a008bdcff4b115a8fc27f0bea"
  },
  {
    "url": "assets/js/260.js",
    "revision": "931d381ac00a1490a19f2ad4ffe3491d"
  },
  {
    "url": "assets/js/261.js",
    "revision": "728f924f20e1768df1514e52d2b855f5"
  },
  {
    "url": "assets/js/262.js",
    "revision": "834da25fffaf6058f2c12b645ce64db2"
  },
  {
    "url": "assets/js/263.js",
    "revision": "cfd6826ec039eacad061a4b0779e1e2d"
  },
  {
    "url": "assets/js/264.js",
    "revision": "13700736e33f54b40cb5d7be83c96623"
  },
  {
    "url": "assets/js/265.js",
    "revision": "ce3d6d2c855aaa4753171496e0d55174"
  },
  {
    "url": "assets/js/266.js",
    "revision": "c8d8fec708e303a2986988dd93f50270"
  },
  {
    "url": "assets/js/267.js",
    "revision": "195e825ae0bcaad1cc8964edd690c1ad"
  },
  {
    "url": "assets/js/268.js",
    "revision": "d7ad16703bb5195390c489d6027ac732"
  },
  {
    "url": "assets/js/269.js",
    "revision": "11c4a4ef58a06f26fe1b31d08a1945e0"
  },
  {
    "url": "assets/js/27.js",
    "revision": "c7c6c07dd5351594b4a88ba7e085ab4d"
  },
  {
    "url": "assets/js/270.js",
    "revision": "32670c6323c41c92bb1172c5e6dc77e1"
  },
  {
    "url": "assets/js/271.js",
    "revision": "c11a12490133f842ae1d6525da6399ad"
  },
  {
    "url": "assets/js/272.js",
    "revision": "96650d4e9f55823b0d4b8b2332dc6a55"
  },
  {
    "url": "assets/js/273.js",
    "revision": "799ec48349c882fabc08dd8144ce0b35"
  },
  {
    "url": "assets/js/274.js",
    "revision": "e8c43a5e7d8a9c68a67d78af3260023f"
  },
  {
    "url": "assets/js/275.js",
    "revision": "960f2b565d71330adb22b4063b80bb2d"
  },
  {
    "url": "assets/js/276.js",
    "revision": "6fa5c8789eb0f9fe02dceaba252de589"
  },
  {
    "url": "assets/js/277.js",
    "revision": "471eb5317381cbc76fd691397a41087d"
  },
  {
    "url": "assets/js/278.js",
    "revision": "2826ec52f42e97946e2f2dc51454a007"
  },
  {
    "url": "assets/js/279.js",
    "revision": "dce36f34d692194b3cdcaea7f8af4573"
  },
  {
    "url": "assets/js/28.js",
    "revision": "3b56eb9964733ab8013d181397ec5701"
  },
  {
    "url": "assets/js/280.js",
    "revision": "2d313bf6e3ebbde08747dbe6f6335f60"
  },
  {
    "url": "assets/js/281.js",
    "revision": "1260e2fd8f1dadc34b3010f5440defaf"
  },
  {
    "url": "assets/js/282.js",
    "revision": "c853de87e347840cd7bcb3d93b17ba7b"
  },
  {
    "url": "assets/js/283.js",
    "revision": "aad158e63e8cd1f91aa02c45f643d72c"
  },
  {
    "url": "assets/js/284.js",
    "revision": "5e5fec078b3685418a37dabefe1840cb"
  },
  {
    "url": "assets/js/285.js",
    "revision": "19907f074ed92f415586e9843df156a4"
  },
  {
    "url": "assets/js/286.js",
    "revision": "d687bac1c3f4d11dcf2aface7c3a9271"
  },
  {
    "url": "assets/js/287.js",
    "revision": "5f630917fcf87d0289bade7a5e918872"
  },
  {
    "url": "assets/js/288.js",
    "revision": "a84182cbd6ec3ff5ff4a4209f37a82c8"
  },
  {
    "url": "assets/js/289.js",
    "revision": "748ca9a1b4a1aee36454e6d79c04bd67"
  },
  {
    "url": "assets/js/29.js",
    "revision": "7491631154e51ed9385ca2717255663e"
  },
  {
    "url": "assets/js/290.js",
    "revision": "bae9b6733dd1ebad0093d8a4f1f52106"
  },
  {
    "url": "assets/js/291.js",
    "revision": "713022ebd83f5c56578e5c502da49c4d"
  },
  {
    "url": "assets/js/292.js",
    "revision": "555fdd2b3bd2968d8cb951b7998197d6"
  },
  {
    "url": "assets/js/293.js",
    "revision": "82737ae9c839fdc0871abde8f8a1d535"
  },
  {
    "url": "assets/js/294.js",
    "revision": "1e585074c5561f2fe0d56e91c83bcfcb"
  },
  {
    "url": "assets/js/295.js",
    "revision": "1af4345e2d642197e122c59d5c0e65a9"
  },
  {
    "url": "assets/js/296.js",
    "revision": "bf1f116933b635362cedd89b1030aa44"
  },
  {
    "url": "assets/js/297.js",
    "revision": "70f0d790cfcba19b7670d2cece9c428e"
  },
  {
    "url": "assets/js/298.js",
    "revision": "e11215b7c04a6ca59072573ca13e67b2"
  },
  {
    "url": "assets/js/299.js",
    "revision": "961a5ba966e949ec304831b015757284"
  },
  {
    "url": "assets/js/3.js",
    "revision": "caa376473ebc94140dd3e72806f4713f"
  },
  {
    "url": "assets/js/30.js",
    "revision": "1b7a26d338d8b997cc43f9da4d451f9f"
  },
  {
    "url": "assets/js/300.js",
    "revision": "510c18a8e6857d9ceece382f9bc420c4"
  },
  {
    "url": "assets/js/301.js",
    "revision": "46cc58258c60ea879cab6451fa0d87ec"
  },
  {
    "url": "assets/js/302.js",
    "revision": "d74452a19c7ea949ef6dff030bffd29f"
  },
  {
    "url": "assets/js/303.js",
    "revision": "2dd8d74ba673afa9dac8bba903c14ea5"
  },
  {
    "url": "assets/js/304.js",
    "revision": "73dcd243362a6c91791a0d9382acc198"
  },
  {
    "url": "assets/js/305.js",
    "revision": "d07be782dfc17e0c9824add0ac67d384"
  },
  {
    "url": "assets/js/306.js",
    "revision": "aeb51211f14860ea22461d5e16fba461"
  },
  {
    "url": "assets/js/307.js",
    "revision": "17b00dead12aafe3c55c0c972874563c"
  },
  {
    "url": "assets/js/308.js",
    "revision": "cacbe42624d42c270faafe8d3b5ed668"
  },
  {
    "url": "assets/js/309.js",
    "revision": "d9d2fdfe06ab36c6384b1a19bdc535dc"
  },
  {
    "url": "assets/js/31.js",
    "revision": "6a7490d8508072ce9412e2c3677669ee"
  },
  {
    "url": "assets/js/310.js",
    "revision": "8de4ab35d803a300dcb18e9cbfd11c98"
  },
  {
    "url": "assets/js/311.js",
    "revision": "99e550137e83701dd5d7daa4e24f4ff9"
  },
  {
    "url": "assets/js/312.js",
    "revision": "e2c97f02f272066dae61abf02963eca5"
  },
  {
    "url": "assets/js/313.js",
    "revision": "afb8a82df55bbddaeb28c57389cb7457"
  },
  {
    "url": "assets/js/314.js",
    "revision": "458bc6a255fb4617e716171e32807421"
  },
  {
    "url": "assets/js/315.js",
    "revision": "74c87e2b607fa2865ca8bebcb480c58d"
  },
  {
    "url": "assets/js/316.js",
    "revision": "0a2a26aa6aa96012dbbd3b11043c7ef0"
  },
  {
    "url": "assets/js/317.js",
    "revision": "611f9b2256fe10d5c7040cac1543b8e2"
  },
  {
    "url": "assets/js/318.js",
    "revision": "3794c1fff2ecaac1512524df8b6fc091"
  },
  {
    "url": "assets/js/319.js",
    "revision": "ea4416642cfe58b5b8524aba53e68724"
  },
  {
    "url": "assets/js/32.js",
    "revision": "a23dea7620368b5ae2a75461e62ce289"
  },
  {
    "url": "assets/js/320.js",
    "revision": "ebe6b26c9f0fde189e90e298a7741e22"
  },
  {
    "url": "assets/js/321.js",
    "revision": "1e6db9e51d7e318865a458d637abd62d"
  },
  {
    "url": "assets/js/322.js",
    "revision": "c8e4ab57709ca12980bf6410b8533af2"
  },
  {
    "url": "assets/js/323.js",
    "revision": "cfaa837d1e881fd4cdd99b0f0bb84c51"
  },
  {
    "url": "assets/js/324.js",
    "revision": "a8185366b4fc0e30c0cd9842f669a45f"
  },
  {
    "url": "assets/js/325.js",
    "revision": "17d691fb48661dfc8aadd12b15d20c1d"
  },
  {
    "url": "assets/js/326.js",
    "revision": "97ee7c7cd948c307c49042d5a0341ccf"
  },
  {
    "url": "assets/js/327.js",
    "revision": "035fbb4c8b9c3610c89e83268b9717d1"
  },
  {
    "url": "assets/js/328.js",
    "revision": "7d927b1089c069e6a1410a359c5816c6"
  },
  {
    "url": "assets/js/329.js",
    "revision": "e154e88112234bf8df1b6566145923b2"
  },
  {
    "url": "assets/js/33.js",
    "revision": "70457734ce238d9d723e4617bedcc32d"
  },
  {
    "url": "assets/js/330.js",
    "revision": "dfbb1d9079e35015a6c69d55c3b15557"
  },
  {
    "url": "assets/js/331.js",
    "revision": "b728834de8ac50dacc8be3b3bcd54954"
  },
  {
    "url": "assets/js/332.js",
    "revision": "61c83427735c9454b1f4d0c512561328"
  },
  {
    "url": "assets/js/333.js",
    "revision": "5dc80ec12fe2ab9101f891708f8ef1f7"
  },
  {
    "url": "assets/js/334.js",
    "revision": "0ce0ca968f032cd72f97e50e0591ad26"
  },
  {
    "url": "assets/js/335.js",
    "revision": "f2afefeccec661f490253abb93dfc6fb"
  },
  {
    "url": "assets/js/336.js",
    "revision": "2cb0e7c91be7de4d8378fd5439d6dd91"
  },
  {
    "url": "assets/js/337.js",
    "revision": "6dd74c894a2d67ef241adaa9860c0630"
  },
  {
    "url": "assets/js/338.js",
    "revision": "30c4945be3dd443e0f5bc98a7d2082f0"
  },
  {
    "url": "assets/js/339.js",
    "revision": "510c717b544b72ea01ba45e0036aacf6"
  },
  {
    "url": "assets/js/34.js",
    "revision": "7087f90333562bf434f078dfb0b09c1e"
  },
  {
    "url": "assets/js/340.js",
    "revision": "a1cb71dfad564ed95a6cc0269ae84e66"
  },
  {
    "url": "assets/js/341.js",
    "revision": "539e1899c630c7e6e936e017b1806f2e"
  },
  {
    "url": "assets/js/342.js",
    "revision": "ea5eb47b5b90d13def2a2887cb17e2de"
  },
  {
    "url": "assets/js/343.js",
    "revision": "89ca35bb59f788c92c64e3bda9166215"
  },
  {
    "url": "assets/js/344.js",
    "revision": "27bc696fc10a6e00f43852bfdb138960"
  },
  {
    "url": "assets/js/345.js",
    "revision": "620623ca8704e0e3b6b1b0854cef3038"
  },
  {
    "url": "assets/js/346.js",
    "revision": "88c7314921b3be9ab76d7ae8c8494969"
  },
  {
    "url": "assets/js/347.js",
    "revision": "2856fbf1080cffb48616474e9eb1db90"
  },
  {
    "url": "assets/js/348.js",
    "revision": "ea818f47ff0796a785f88f379bc1ef58"
  },
  {
    "url": "assets/js/349.js",
    "revision": "e7cc39429c18e8528327ec7ea2fb0ab3"
  },
  {
    "url": "assets/js/35.js",
    "revision": "1321f5294aeca59a6a68b095d92a0995"
  },
  {
    "url": "assets/js/350.js",
    "revision": "4dbf2571f90fa8ec3d89abc6826e1c9a"
  },
  {
    "url": "assets/js/351.js",
    "revision": "191123d50677781024bba84cc2ae587b"
  },
  {
    "url": "assets/js/352.js",
    "revision": "63fa06b2a5d5b883bd85f6838dd6bd79"
  },
  {
    "url": "assets/js/353.js",
    "revision": "ea1fb9e3aaef20f980063d76acc3c9b1"
  },
  {
    "url": "assets/js/354.js",
    "revision": "3de479588236b50b9a15a2a1e674c050"
  },
  {
    "url": "assets/js/355.js",
    "revision": "eaca923afe7766f1e4c39a273d4465d9"
  },
  {
    "url": "assets/js/356.js",
    "revision": "dd1b7794034946e1c8178cc95930da4e"
  },
  {
    "url": "assets/js/357.js",
    "revision": "f3dd637818d0598cfe846da7cfa5a2c4"
  },
  {
    "url": "assets/js/358.js",
    "revision": "cad8534cc6e0aead5fcfafa0eb9ad1d2"
  },
  {
    "url": "assets/js/359.js",
    "revision": "8f48d4bf1ef7ab67f44a8b168dbb4508"
  },
  {
    "url": "assets/js/36.js",
    "revision": "04173d1282dc5d776be7e094854f21ab"
  },
  {
    "url": "assets/js/360.js",
    "revision": "158b7e691f61be605fc5dffe553db8ad"
  },
  {
    "url": "assets/js/361.js",
    "revision": "26b800fb12593e29c5ca4c3ad007a56f"
  },
  {
    "url": "assets/js/362.js",
    "revision": "0478049b1a00045af2cf7c1980594bd2"
  },
  {
    "url": "assets/js/363.js",
    "revision": "6eeb4dbe4551005561510b2d97a1d889"
  },
  {
    "url": "assets/js/364.js",
    "revision": "34cf719d77b201a6846ca564953cf22b"
  },
  {
    "url": "assets/js/365.js",
    "revision": "9f90d3db02bf533fb0bf38a64353b1eb"
  },
  {
    "url": "assets/js/366.js",
    "revision": "a30bebd3d58e32d6e1ae35147b6b079f"
  },
  {
    "url": "assets/js/367.js",
    "revision": "7bb8166397a4e28ef4b864d9f9f06e65"
  },
  {
    "url": "assets/js/368.js",
    "revision": "e3e94dbfcbf94870519309a15a40fda8"
  },
  {
    "url": "assets/js/369.js",
    "revision": "5d7c006b878509e4d8a32185530448cf"
  },
  {
    "url": "assets/js/37.js",
    "revision": "7e1ac54ac6837ac78660a821382e3be6"
  },
  {
    "url": "assets/js/370.js",
    "revision": "e1d22dc237a7acd5acd3b851289ef035"
  },
  {
    "url": "assets/js/371.js",
    "revision": "0040e596d733bb594626abece91f3a20"
  },
  {
    "url": "assets/js/372.js",
    "revision": "7d9e78cc701583ab256a558d9b349778"
  },
  {
    "url": "assets/js/373.js",
    "revision": "c550c606c5930de8f417b12c7dbf2f78"
  },
  {
    "url": "assets/js/374.js",
    "revision": "cf061d9e489a649ff8b5c39b9c0e05fe"
  },
  {
    "url": "assets/js/375.js",
    "revision": "d3bd016440c9a5fdf920186d702d03d5"
  },
  {
    "url": "assets/js/376.js",
    "revision": "4694ba9b2f01a6d803f12532812e151e"
  },
  {
    "url": "assets/js/377.js",
    "revision": "0ac67c9c3bfaed69f0d4ff9bc225f130"
  },
  {
    "url": "assets/js/378.js",
    "revision": "047669e4afac321c2cb88fdb076e01f6"
  },
  {
    "url": "assets/js/379.js",
    "revision": "83ae679beb74c43feadd407ee301a30b"
  },
  {
    "url": "assets/js/38.js",
    "revision": "684953db1cafbf4dd327a1cc6592269b"
  },
  {
    "url": "assets/js/380.js",
    "revision": "ca51e2963f6bd5b42e723e4a18c9c8f7"
  },
  {
    "url": "assets/js/381.js",
    "revision": "887a82f6d16316f509299d5ee4eb61fd"
  },
  {
    "url": "assets/js/382.js",
    "revision": "8f855f2cac11a84e5c5709844f34ea7c"
  },
  {
    "url": "assets/js/383.js",
    "revision": "a7972ed08067fffc0bf4e13842ee6689"
  },
  {
    "url": "assets/js/384.js",
    "revision": "32c37f066584407986dd3da7d467a8ae"
  },
  {
    "url": "assets/js/385.js",
    "revision": "daf9d0bb0ebbe9c1c72de4638f96420e"
  },
  {
    "url": "assets/js/386.js",
    "revision": "c9842ce9e480819b1f663afe85f8abd0"
  },
  {
    "url": "assets/js/387.js",
    "revision": "960331bda7ab2a01dabbe2db014d61ed"
  },
  {
    "url": "assets/js/388.js",
    "revision": "a05d3e6e31e4f9c2dfef86c7a4a73eb6"
  },
  {
    "url": "assets/js/389.js",
    "revision": "98909ebd54579a9e99d530e991fb97fe"
  },
  {
    "url": "assets/js/39.js",
    "revision": "5752d46006fbc5d40db9b7f815a632ce"
  },
  {
    "url": "assets/js/390.js",
    "revision": "38ab724689755a656533ecf8e3b67ac3"
  },
  {
    "url": "assets/js/391.js",
    "revision": "83d9c28c24afadad62db10610f9addd6"
  },
  {
    "url": "assets/js/392.js",
    "revision": "c17d7d58743797f1691347b554793215"
  },
  {
    "url": "assets/js/393.js",
    "revision": "5afa99a8615e3686bdc7a4ad2b2d7652"
  },
  {
    "url": "assets/js/394.js",
    "revision": "53ef3114e7a56cb238e3d479d24867ff"
  },
  {
    "url": "assets/js/395.js",
    "revision": "b3c42f78f73dd0f5940cdc4d196d1b03"
  },
  {
    "url": "assets/js/396.js",
    "revision": "8696446525a74a9238c99e6dc0999748"
  },
  {
    "url": "assets/js/397.js",
    "revision": "6ae776f5f760a0bdd68ca1b310b62404"
  },
  {
    "url": "assets/js/398.js",
    "revision": "325ffd7aabb2b904390fcb9ae35f4bdc"
  },
  {
    "url": "assets/js/399.js",
    "revision": "fb02bf0ab8d71e3692a7758cd68a96ec"
  },
  {
    "url": "assets/js/40.js",
    "revision": "28fed88baa99e03136fbf59bea6903e3"
  },
  {
    "url": "assets/js/400.js",
    "revision": "3bdefc72521bb55b8a98d023cd3c95f5"
  },
  {
    "url": "assets/js/401.js",
    "revision": "82d39a20af405fa7511726735823cdf8"
  },
  {
    "url": "assets/js/402.js",
    "revision": "eeac09f70e6bea7e394404a87d3af8b2"
  },
  {
    "url": "assets/js/403.js",
    "revision": "b46741ec911103ebe4f2b2238fe0502c"
  },
  {
    "url": "assets/js/404.js",
    "revision": "ae263a172e43bae805011633aba25688"
  },
  {
    "url": "assets/js/405.js",
    "revision": "54b8b855cf8bd66210a71790af69cc50"
  },
  {
    "url": "assets/js/406.js",
    "revision": "9de5d2d2dc0676ec237ca09f7b146093"
  },
  {
    "url": "assets/js/407.js",
    "revision": "742aaed68d2ddfdbdf17d3a10a44b634"
  },
  {
    "url": "assets/js/408.js",
    "revision": "d0722abe77e3652fa1a8c2d893889168"
  },
  {
    "url": "assets/js/409.js",
    "revision": "38737177b761115e1f1cd5bf30aefcb9"
  },
  {
    "url": "assets/js/41.js",
    "revision": "f9b3e13e59874eef9fd24e9f8846504e"
  },
  {
    "url": "assets/js/410.js",
    "revision": "d2d938d6ae1a2d323a350c9e5b3359c6"
  },
  {
    "url": "assets/js/411.js",
    "revision": "82fc2eb63bc025f75c243c62ff7229d4"
  },
  {
    "url": "assets/js/412.js",
    "revision": "7d2a6648c43edda0ddc43bcaa3463310"
  },
  {
    "url": "assets/js/413.js",
    "revision": "9ed949dacb1fb870cc40ac38c5507f7e"
  },
  {
    "url": "assets/js/414.js",
    "revision": "ec02294f30bbbe4dfe09f090f7655bb0"
  },
  {
    "url": "assets/js/415.js",
    "revision": "856775f92ef21301720e3326b3003d88"
  },
  {
    "url": "assets/js/416.js",
    "revision": "982498203b47a0a357b2dcceee0bb12d"
  },
  {
    "url": "assets/js/417.js",
    "revision": "19d82c9f9f0b4580325e659cbf809604"
  },
  {
    "url": "assets/js/418.js",
    "revision": "7df159208d944c41a8332c97b8e50814"
  },
  {
    "url": "assets/js/419.js",
    "revision": "db4f9d4c546abdb2a70fc710f84191aa"
  },
  {
    "url": "assets/js/42.js",
    "revision": "138c241e5fbe94bd4e4f25b287cd5dee"
  },
  {
    "url": "assets/js/420.js",
    "revision": "dd879c1cbf092fe9c6d0ab6694f6f861"
  },
  {
    "url": "assets/js/421.js",
    "revision": "188711ba790de23f1ac2edb79d7d5293"
  },
  {
    "url": "assets/js/422.js",
    "revision": "325cd34644ea7cdf727789d5fe55a8a4"
  },
  {
    "url": "assets/js/423.js",
    "revision": "5ec504b02c00f4ee79f36c55a76293d4"
  },
  {
    "url": "assets/js/424.js",
    "revision": "647691262632ca8cc675ce7a2610c888"
  },
  {
    "url": "assets/js/425.js",
    "revision": "09ab4175ed28c8f1f3607e21e92521d8"
  },
  {
    "url": "assets/js/426.js",
    "revision": "f50feca23485f2f372cf3d100566f8a3"
  },
  {
    "url": "assets/js/427.js",
    "revision": "cf60b1cf968dc7de5ef49eb88ee60bed"
  },
  {
    "url": "assets/js/428.js",
    "revision": "0116487c416ebf6f1c9c071eb6c552f0"
  },
  {
    "url": "assets/js/429.js",
    "revision": "2bd1e429485c9060b47a733ec4999e51"
  },
  {
    "url": "assets/js/43.js",
    "revision": "23902df13a03932463b8cebfab6193f9"
  },
  {
    "url": "assets/js/430.js",
    "revision": "90dc637c7ce34700fd37eed0bf6ba0e2"
  },
  {
    "url": "assets/js/431.js",
    "revision": "ec0788084926ee69dcb1b4284d44cdaa"
  },
  {
    "url": "assets/js/432.js",
    "revision": "af4b069fd883bbb2765ec7fd68cba680"
  },
  {
    "url": "assets/js/433.js",
    "revision": "53c644044275fa63be1513a60d2d8369"
  },
  {
    "url": "assets/js/434.js",
    "revision": "3071c355ac08a6955a634dd6bf559341"
  },
  {
    "url": "assets/js/435.js",
    "revision": "ca57077ff59e04a3cd4b9e8c6b47563a"
  },
  {
    "url": "assets/js/436.js",
    "revision": "f7bafd368549217a01c47568eb265762"
  },
  {
    "url": "assets/js/437.js",
    "revision": "391912711f042af215ffa7eaf8883159"
  },
  {
    "url": "assets/js/438.js",
    "revision": "d2ad1447cf229bdbe92e9aa815ed5cf1"
  },
  {
    "url": "assets/js/439.js",
    "revision": "be2ee2b3d505e2cebf7eb7a2190f8b7d"
  },
  {
    "url": "assets/js/44.js",
    "revision": "5f43b745901a709146b88659ea633f86"
  },
  {
    "url": "assets/js/440.js",
    "revision": "5cf149e22a580d1505746be9eae233e3"
  },
  {
    "url": "assets/js/441.js",
    "revision": "4ff9221853e5ff2c33bb285cd2d78f90"
  },
  {
    "url": "assets/js/442.js",
    "revision": "bf0cdadf78af6ef18e8f22b6e8b60d79"
  },
  {
    "url": "assets/js/443.js",
    "revision": "3a025b317e3134e3861a88b369b1e37e"
  },
  {
    "url": "assets/js/444.js",
    "revision": "6568166beecc333f92fe1388b6d504e6"
  },
  {
    "url": "assets/js/445.js",
    "revision": "e610297e2d074c28c81ae2b3a6cbf0d8"
  },
  {
    "url": "assets/js/446.js",
    "revision": "082b16f22d4c6ee1e7d825f02f8bf478"
  },
  {
    "url": "assets/js/447.js",
    "revision": "5d37d8490749768ffca6a7b83c79229b"
  },
  {
    "url": "assets/js/448.js",
    "revision": "fc2945b6be96375126babd6dd1a635e9"
  },
  {
    "url": "assets/js/449.js",
    "revision": "7d2032f24f7b080ef33a82bc44575997"
  },
  {
    "url": "assets/js/45.js",
    "revision": "848cd5ebda6dc02f9a54bd7d7cd8363d"
  },
  {
    "url": "assets/js/450.js",
    "revision": "78a17118087f632888deda684e3a8948"
  },
  {
    "url": "assets/js/451.js",
    "revision": "1edec2bb5aa915812ea51c7106dbdd40"
  },
  {
    "url": "assets/js/452.js",
    "revision": "3474f8d8f5dbde53aba96e32a28591c5"
  },
  {
    "url": "assets/js/453.js",
    "revision": "3f0201e0ff742a281ce9f5a4f926287c"
  },
  {
    "url": "assets/js/454.js",
    "revision": "d1d158fbf7edea48e453ed386002689d"
  },
  {
    "url": "assets/js/455.js",
    "revision": "8afb0665fe654701c938cd99cb730c1b"
  },
  {
    "url": "assets/js/456.js",
    "revision": "d577e6bc20858c8b58998eb9ce648282"
  },
  {
    "url": "assets/js/457.js",
    "revision": "7ea88cf7f864ce58a2de99ba16e1ed15"
  },
  {
    "url": "assets/js/458.js",
    "revision": "ac90ccc5a0742ee27271607c6c10dc82"
  },
  {
    "url": "assets/js/459.js",
    "revision": "a1fa7c55f6a15c8330d305cfe4e6f80d"
  },
  {
    "url": "assets/js/46.js",
    "revision": "2fba4bbc607043b7ccd876ca9d90b41b"
  },
  {
    "url": "assets/js/460.js",
    "revision": "5d265d22c6980ab9a5af99a04f4b0f92"
  },
  {
    "url": "assets/js/461.js",
    "revision": "b6f58f542f263aa4fdf1821af39d725e"
  },
  {
    "url": "assets/js/462.js",
    "revision": "aeb9dc7b70a01d295ea32cff9d6e78c7"
  },
  {
    "url": "assets/js/463.js",
    "revision": "aa6ca7070f32a5ec539dc2a3d645cacc"
  },
  {
    "url": "assets/js/464.js",
    "revision": "1084e81103e2636b3a6ec51ef8c84f9d"
  },
  {
    "url": "assets/js/465.js",
    "revision": "2d84f47f252dfc99d88659e3bdcaa88d"
  },
  {
    "url": "assets/js/466.js",
    "revision": "1f5a5e94a499c272d6c5c4cc519ecf96"
  },
  {
    "url": "assets/js/467.js",
    "revision": "a99baabde6036aeeba940dcf9501c78f"
  },
  {
    "url": "assets/js/468.js",
    "revision": "89d8e753d7f2b5ff19b89d26c25d4ecd"
  },
  {
    "url": "assets/js/469.js",
    "revision": "45c65b8d9933db647e08d3ce6b2aa37e"
  },
  {
    "url": "assets/js/47.js",
    "revision": "2eab203710b8ec0fe2798a54ea08edf9"
  },
  {
    "url": "assets/js/470.js",
    "revision": "6851eed057410c86fa142d1c1353317e"
  },
  {
    "url": "assets/js/471.js",
    "revision": "6c19b3960d7f7d5337b8e64274cb1201"
  },
  {
    "url": "assets/js/472.js",
    "revision": "1f9da7330a3ab2e222c3d0b699c6814a"
  },
  {
    "url": "assets/js/473.js",
    "revision": "be28ed825f42cee7ae84c8b9a9c73e01"
  },
  {
    "url": "assets/js/474.js",
    "revision": "c364608834943d06f67b231304fc279c"
  },
  {
    "url": "assets/js/475.js",
    "revision": "8c5f5b19c0ea98a3e7bb13cc7a53bf62"
  },
  {
    "url": "assets/js/476.js",
    "revision": "d14dd4651e7671e2ed5baad98c68e953"
  },
  {
    "url": "assets/js/477.js",
    "revision": "12006cf0b0ede2c9176a3e7b35314c3d"
  },
  {
    "url": "assets/js/478.js",
    "revision": "2bb1a1023bf4d99425e9a5e83cf4432f"
  },
  {
    "url": "assets/js/479.js",
    "revision": "a1d347017dc730881c6130f2f876fc29"
  },
  {
    "url": "assets/js/48.js",
    "revision": "8da94a30c65efafa09596f70b801da6f"
  },
  {
    "url": "assets/js/480.js",
    "revision": "e11382eac3ded14a55205ea09aa62937"
  },
  {
    "url": "assets/js/481.js",
    "revision": "1fe933777e90c8b7a21dc83efae52602"
  },
  {
    "url": "assets/js/482.js",
    "revision": "5925b34662bf055234835844d9e576a7"
  },
  {
    "url": "assets/js/483.js",
    "revision": "6b77b821382d5ac256b41091adc50b2c"
  },
  {
    "url": "assets/js/484.js",
    "revision": "b5bb9fb932e1e183b209c24b237d2a99"
  },
  {
    "url": "assets/js/485.js",
    "revision": "f37af64e23fb9f573fa439e2b058d952"
  },
  {
    "url": "assets/js/486.js",
    "revision": "1ab7ec6c5c735dc0477a6fb2f9211536"
  },
  {
    "url": "assets/js/487.js",
    "revision": "29bfe3d657e53c9078abf735357a37a5"
  },
  {
    "url": "assets/js/488.js",
    "revision": "109b79659eedd0ae2c726a2819c681a6"
  },
  {
    "url": "assets/js/489.js",
    "revision": "73488aa45bcefb551cc2f081d633f65c"
  },
  {
    "url": "assets/js/49.js",
    "revision": "c7ebcd187c762201c72887d239eae38d"
  },
  {
    "url": "assets/js/490.js",
    "revision": "94dd5fca03e5f629b060895fa4d338a6"
  },
  {
    "url": "assets/js/491.js",
    "revision": "40cadd5a80a091a41241dd009ea451f0"
  },
  {
    "url": "assets/js/492.js",
    "revision": "4848f6a6ea2118ea5e45022e5cb77777"
  },
  {
    "url": "assets/js/493.js",
    "revision": "9620259d81960e414d0a6beeccdfd764"
  },
  {
    "url": "assets/js/494.js",
    "revision": "16606394eb0fb5c5717d52ce024c6b71"
  },
  {
    "url": "assets/js/495.js",
    "revision": "b90d4cd9275da4eed6e30dc90c72d49f"
  },
  {
    "url": "assets/js/496.js",
    "revision": "d930a59286a6f45027d4d37c5eb0361c"
  },
  {
    "url": "assets/js/497.js",
    "revision": "a38f0b29d4da3366454440cc85aa25bd"
  },
  {
    "url": "assets/js/498.js",
    "revision": "9df8cb9f120c84bb9f13f631e5b0b234"
  },
  {
    "url": "assets/js/499.js",
    "revision": "eee6b01f08d713b54604d5dbaee7e414"
  },
  {
    "url": "assets/js/5.js",
    "revision": "8dbbbf82149a1244248381a8017c6222"
  },
  {
    "url": "assets/js/50.js",
    "revision": "7c0b3eab0a7a0d55d98fb8ce0f87503f"
  },
  {
    "url": "assets/js/500.js",
    "revision": "c267bdd9b031b8996dfd9762e2ca998f"
  },
  {
    "url": "assets/js/501.js",
    "revision": "282d973dc2eb2422c4511dc0ed92db1a"
  },
  {
    "url": "assets/js/502.js",
    "revision": "c0dc4b18cd920e0e68c10fc9e1c46fb4"
  },
  {
    "url": "assets/js/503.js",
    "revision": "b520ca98f87838aba31210a23f8a3670"
  },
  {
    "url": "assets/js/504.js",
    "revision": "69a13f1cd7f37efaaf805758a507c9a0"
  },
  {
    "url": "assets/js/505.js",
    "revision": "7d26db3815625816462dfba54b1e88b7"
  },
  {
    "url": "assets/js/506.js",
    "revision": "a1bf8ed2a6ba0e77e269dcb829af279c"
  },
  {
    "url": "assets/js/507.js",
    "revision": "3b79ad37c02a35c713798ed4b7d8fe32"
  },
  {
    "url": "assets/js/508.js",
    "revision": "4a14279773965379ba886c943ed0f4c5"
  },
  {
    "url": "assets/js/509.js",
    "revision": "53c4359657e34ce910a17bdcd1d8e641"
  },
  {
    "url": "assets/js/51.js",
    "revision": "9babb2aac4ce5a0e500d7f2e86846c49"
  },
  {
    "url": "assets/js/510.js",
    "revision": "dc7c8165436985aea6b5650087392893"
  },
  {
    "url": "assets/js/511.js",
    "revision": "5b1b92baef78afb3c8a58d2ca259795b"
  },
  {
    "url": "assets/js/512.js",
    "revision": "787d7c7a900b41c97dfc7fa8a6c1bca2"
  },
  {
    "url": "assets/js/513.js",
    "revision": "6266926144dbec204fe6cba70de876c7"
  },
  {
    "url": "assets/js/514.js",
    "revision": "2d00bd53dd77f9817861712821f55520"
  },
  {
    "url": "assets/js/515.js",
    "revision": "61874717751a223fbfed32e4bf2e5249"
  },
  {
    "url": "assets/js/516.js",
    "revision": "06cc551a34e9125ff068460f2f348053"
  },
  {
    "url": "assets/js/517.js",
    "revision": "8c415499c96f720878dfc75201d573ab"
  },
  {
    "url": "assets/js/518.js",
    "revision": "9a249016397a53cede48c313609196cb"
  },
  {
    "url": "assets/js/519.js",
    "revision": "2c651696e1fc07a01215dee65fef89ee"
  },
  {
    "url": "assets/js/52.js",
    "revision": "1f7b997cbab9941a6db4701c40ab7cf3"
  },
  {
    "url": "assets/js/520.js",
    "revision": "80026824d6ff7aae3e1753ff31951fb6"
  },
  {
    "url": "assets/js/521.js",
    "revision": "d9c8b0ff4f0ac073e7a97524f0ff9971"
  },
  {
    "url": "assets/js/522.js",
    "revision": "37fc71f9b08a5edfe32cf64b87b7023e"
  },
  {
    "url": "assets/js/523.js",
    "revision": "c755b258b1cc012ffc5b62ef7cf8b4b1"
  },
  {
    "url": "assets/js/524.js",
    "revision": "57c8ff235744a62a0cbc793584a1dbcb"
  },
  {
    "url": "assets/js/525.js",
    "revision": "35e28f7c1a2bb1df504b73333bc76598"
  },
  {
    "url": "assets/js/526.js",
    "revision": "68b60a724a804619db195f46fc71e4eb"
  },
  {
    "url": "assets/js/527.js",
    "revision": "9d991475c0e31a174bc1b5c67f48c776"
  },
  {
    "url": "assets/js/528.js",
    "revision": "f77e1c886ee4240798aeb4ab4a90d3ca"
  },
  {
    "url": "assets/js/529.js",
    "revision": "5055f06d89006fcf70c065fea020e3f5"
  },
  {
    "url": "assets/js/53.js",
    "revision": "dfc328399de15d54d1ea7a32afa29a71"
  },
  {
    "url": "assets/js/530.js",
    "revision": "7c292620cf5e3f72ffce28e890da9da8"
  },
  {
    "url": "assets/js/531.js",
    "revision": "563c86596d145e0a1f9dd1ce72f56780"
  },
  {
    "url": "assets/js/532.js",
    "revision": "f8f621b097a6ca62ec9d57568be0280e"
  },
  {
    "url": "assets/js/533.js",
    "revision": "96efba451fa9b5287cf1a71e7718836e"
  },
  {
    "url": "assets/js/534.js",
    "revision": "20d31cc4cc571148b5f66e5100bb74fc"
  },
  {
    "url": "assets/js/535.js",
    "revision": "a78355e6343efc0036f3c5d198c12e5d"
  },
  {
    "url": "assets/js/536.js",
    "revision": "0a4141802a9bc05d5027927a6d8f2dcb"
  },
  {
    "url": "assets/js/537.js",
    "revision": "4338542b45b102a67adea5eeba996d54"
  },
  {
    "url": "assets/js/538.js",
    "revision": "5ceca2dd93c183679baa38d110d7ffaf"
  },
  {
    "url": "assets/js/539.js",
    "revision": "ce5887523e0ccc3a3c375e4c9f81a7dd"
  },
  {
    "url": "assets/js/54.js",
    "revision": "89f0d1b81ec2d8dfb0cfed2bb721f19e"
  },
  {
    "url": "assets/js/540.js",
    "revision": "2124ac88426044fc53b911d42646231b"
  },
  {
    "url": "assets/js/541.js",
    "revision": "66e3beea2f3c9492ec179ddf90bd47c7"
  },
  {
    "url": "assets/js/542.js",
    "revision": "8b24b5842549788b110210b40166ba3c"
  },
  {
    "url": "assets/js/543.js",
    "revision": "98d725276922b7242ff181c94bbf7c0e"
  },
  {
    "url": "assets/js/544.js",
    "revision": "1034ed6d1675bd4ec1488c93829a0a18"
  },
  {
    "url": "assets/js/545.js",
    "revision": "506a634a57242520e2f004c0f2ef971a"
  },
  {
    "url": "assets/js/546.js",
    "revision": "1de46754a773b3e338b625b37511b884"
  },
  {
    "url": "assets/js/547.js",
    "revision": "1230da74087ae7c577beba36efcc49c0"
  },
  {
    "url": "assets/js/548.js",
    "revision": "271692badb4af7dcaa3e313705613871"
  },
  {
    "url": "assets/js/549.js",
    "revision": "802e483c2a34a174ec023e254bcc759f"
  },
  {
    "url": "assets/js/55.js",
    "revision": "50b5fdd2cf0522172f2378257dd280bd"
  },
  {
    "url": "assets/js/550.js",
    "revision": "f989bcb836a4fc530c4e4e19b51a98b5"
  },
  {
    "url": "assets/js/551.js",
    "revision": "977ba3c852390ba0860464fb77eed5dc"
  },
  {
    "url": "assets/js/552.js",
    "revision": "fc48108d21be84249f736a5500791e15"
  },
  {
    "url": "assets/js/553.js",
    "revision": "e7bf9dd72cad233d4fef8b58367f815e"
  },
  {
    "url": "assets/js/554.js",
    "revision": "bd576c69eb148cead8f9e4a3aff7ad71"
  },
  {
    "url": "assets/js/555.js",
    "revision": "d3859c5ef0c6d3afbce9e1c7c12ec9a9"
  },
  {
    "url": "assets/js/556.js",
    "revision": "309654581a47b74710e589c68d0775c7"
  },
  {
    "url": "assets/js/557.js",
    "revision": "529cbfc71ac0c5f8dd0cb759aa95111c"
  },
  {
    "url": "assets/js/558.js",
    "revision": "fd56c5b8e7ac3dfbf7f1ad4b7cd9ae92"
  },
  {
    "url": "assets/js/559.js",
    "revision": "ac6636fc52d54d9a16d6a4dfea7b8243"
  },
  {
    "url": "assets/js/56.js",
    "revision": "aa12aae97f6dac503c785b27914e9c86"
  },
  {
    "url": "assets/js/560.js",
    "revision": "dbd07c8826e0dfb5ec74321fef2d8d8c"
  },
  {
    "url": "assets/js/561.js",
    "revision": "c922824ba392b768e4a9be702ca6af95"
  },
  {
    "url": "assets/js/562.js",
    "revision": "1ad516749bcd7d2dedef3bfc5af721b0"
  },
  {
    "url": "assets/js/563.js",
    "revision": "2e58fb97bb1f6b550cc3afac0d7f8773"
  },
  {
    "url": "assets/js/564.js",
    "revision": "8938b12f982e69aae00e511f7ac2306f"
  },
  {
    "url": "assets/js/565.js",
    "revision": "2d175341e44dbb53aeddae928898a35a"
  },
  {
    "url": "assets/js/566.js",
    "revision": "97c94ef71b00a355ce93c826d6471703"
  },
  {
    "url": "assets/js/567.js",
    "revision": "843e251bcb70d7a92926d0ba96a6b28d"
  },
  {
    "url": "assets/js/568.js",
    "revision": "cbddf88700b0efb4c29a1f2ced0f6e7c"
  },
  {
    "url": "assets/js/569.js",
    "revision": "e8cac3cc4c6ee616235f31f1be040539"
  },
  {
    "url": "assets/js/57.js",
    "revision": "69a326e8bc4483b490ea16078f4fc4c9"
  },
  {
    "url": "assets/js/570.js",
    "revision": "c8ac163f6ed97e4fde7bc47f76149761"
  },
  {
    "url": "assets/js/571.js",
    "revision": "d0f72b29cdd671bcb601f130c1c61e8e"
  },
  {
    "url": "assets/js/572.js",
    "revision": "a11a981b7a34e7e527de60d5e2951023"
  },
  {
    "url": "assets/js/573.js",
    "revision": "570862ee9f7598648f5d12e851bf9bdb"
  },
  {
    "url": "assets/js/574.js",
    "revision": "515f4c12003ae9b0190e853a1c0654a4"
  },
  {
    "url": "assets/js/575.js",
    "revision": "a7c43b12541d6e06c4498f27d5689341"
  },
  {
    "url": "assets/js/576.js",
    "revision": "715022ff314cc09004d6fa04380b22a6"
  },
  {
    "url": "assets/js/577.js",
    "revision": "9a293c04a5410f53f3aa2ea15cb49ec8"
  },
  {
    "url": "assets/js/578.js",
    "revision": "f2469c29a8d0db7bc52498dee1e4502f"
  },
  {
    "url": "assets/js/579.js",
    "revision": "a8e40be439bdaef670c26e7349abbc4b"
  },
  {
    "url": "assets/js/58.js",
    "revision": "1430cbdab65cf48015a17d0030822b33"
  },
  {
    "url": "assets/js/580.js",
    "revision": "9cd82a9d15303cd9dfa9e6cc6d13c2d2"
  },
  {
    "url": "assets/js/581.js",
    "revision": "b61432208835b3a9fc1c0bda447fa47c"
  },
  {
    "url": "assets/js/582.js",
    "revision": "356147f5e73a6ddd3799f5a6a2a7e931"
  },
  {
    "url": "assets/js/583.js",
    "revision": "e1216a47828ebb17c6e38f72f75a1706"
  },
  {
    "url": "assets/js/584.js",
    "revision": "6f668e3eda3c06c892c96a8ceb4ba033"
  },
  {
    "url": "assets/js/585.js",
    "revision": "72bbd2318bc3856b8476d32c614414bd"
  },
  {
    "url": "assets/js/586.js",
    "revision": "b47a8b409f94180a6cda7fba3a8672ea"
  },
  {
    "url": "assets/js/587.js",
    "revision": "21cabaad3a2c4e3742b2c27917819c6c"
  },
  {
    "url": "assets/js/588.js",
    "revision": "d811ecfae3092495bb35ada2ade8a92a"
  },
  {
    "url": "assets/js/589.js",
    "revision": "be3bb3beebeca4374573e5c58afb7ee5"
  },
  {
    "url": "assets/js/59.js",
    "revision": "4a0de16036457786386fec6359389438"
  },
  {
    "url": "assets/js/590.js",
    "revision": "60db517ac3894447191641ee6c21d857"
  },
  {
    "url": "assets/js/591.js",
    "revision": "c87062752441f13d3521205484c83500"
  },
  {
    "url": "assets/js/592.js",
    "revision": "2581985b0601c293a1a354ed938d234f"
  },
  {
    "url": "assets/js/6.js",
    "revision": "e1ccaf54f3173e4108c0ede8a695e682"
  },
  {
    "url": "assets/js/60.js",
    "revision": "c85578142e552bc571a896d3f7ed3a5b"
  },
  {
    "url": "assets/js/61.js",
    "revision": "2314cc4cd4e34e5176963693a334682c"
  },
  {
    "url": "assets/js/62.js",
    "revision": "bd9dd794fd75ee78821f42b23d504e0c"
  },
  {
    "url": "assets/js/63.js",
    "revision": "df8e88d6d2af9beabbfc7a304551f5c4"
  },
  {
    "url": "assets/js/64.js",
    "revision": "8342d74bab84762bc6daa47c10b28c10"
  },
  {
    "url": "assets/js/65.js",
    "revision": "03168c13caa6ec1fb6dba6e18e8420f0"
  },
  {
    "url": "assets/js/66.js",
    "revision": "f15fd4f02ca8826f26791dc0a6b384b8"
  },
  {
    "url": "assets/js/67.js",
    "revision": "fb76498aa328cfc9e1156a19bb543809"
  },
  {
    "url": "assets/js/68.js",
    "revision": "ec1bd9d8c80d9018c166163142471a0c"
  },
  {
    "url": "assets/js/69.js",
    "revision": "6d1aec0034b55195d62dc4a2e962ba14"
  },
  {
    "url": "assets/js/7.js",
    "revision": "e83c517a8ec6880a0dbace39c5bc9eda"
  },
  {
    "url": "assets/js/70.js",
    "revision": "d7d50f29f0c0eef0592edbb68c0ca6c4"
  },
  {
    "url": "assets/js/71.js",
    "revision": "d48563b638589a5bcbfee0d61a8e3ada"
  },
  {
    "url": "assets/js/72.js",
    "revision": "8214d6517050a4821fa544f159462352"
  },
  {
    "url": "assets/js/73.js",
    "revision": "c1458fcde7c677e4eb86d5381f801517"
  },
  {
    "url": "assets/js/74.js",
    "revision": "9addad5d6526e81a103c8dcc85e90c1e"
  },
  {
    "url": "assets/js/75.js",
    "revision": "aeed8c1fb4e99483d28d00b38b8913a0"
  },
  {
    "url": "assets/js/76.js",
    "revision": "98b81bb863a2886165377316aa669989"
  },
  {
    "url": "assets/js/77.js",
    "revision": "7eb7cc7bdf9ec5b613666e314049e5ed"
  },
  {
    "url": "assets/js/78.js",
    "revision": "7b91296483028d15634c49f93381bc65"
  },
  {
    "url": "assets/js/79.js",
    "revision": "f239272cd7b12ef02a3ae11f2d00ee11"
  },
  {
    "url": "assets/js/8.js",
    "revision": "008d35ead68cb80b0b1c2b1a739e938e"
  },
  {
    "url": "assets/js/80.js",
    "revision": "11c4b5d0a2f19df61dc0ee8ee0ae46a4"
  },
  {
    "url": "assets/js/81.js",
    "revision": "7ec7f322376e376fdc9ea994e2d46366"
  },
  {
    "url": "assets/js/82.js",
    "revision": "836fdff53d8d78799214623b47256693"
  },
  {
    "url": "assets/js/83.js",
    "revision": "aa10f3f5c597a7a14a8638d42f799254"
  },
  {
    "url": "assets/js/84.js",
    "revision": "5805e5635d92cb6071df19c90b63ee07"
  },
  {
    "url": "assets/js/85.js",
    "revision": "e6a5641d3f23d3b4082106ccb090f2d9"
  },
  {
    "url": "assets/js/86.js",
    "revision": "68fc85567a52663c7ef6ef47d80ba17c"
  },
  {
    "url": "assets/js/87.js",
    "revision": "11a95a81ec10379ac44090c02a16c688"
  },
  {
    "url": "assets/js/88.js",
    "revision": "c94c857d26d48c04188b019eee15bcd0"
  },
  {
    "url": "assets/js/89.js",
    "revision": "714eb98c58f1eea0d128419a49778c37"
  },
  {
    "url": "assets/js/9.js",
    "revision": "ee685463894a1ef378dcea1b8fef1c27"
  },
  {
    "url": "assets/js/90.js",
    "revision": "8447773a8436e6c3c96e1a109999f24b"
  },
  {
    "url": "assets/js/91.js",
    "revision": "12490d5770111df51d0c88756933f5c1"
  },
  {
    "url": "assets/js/92.js",
    "revision": "b0f3c17e30aab4ef794c85636b46e971"
  },
  {
    "url": "assets/js/93.js",
    "revision": "e4c4a28fc607b4f693b6e1ce661e23e4"
  },
  {
    "url": "assets/js/94.js",
    "revision": "02b7ed68f6993e27cc803ac9d5923ec2"
  },
  {
    "url": "assets/js/95.js",
    "revision": "4cf956fb4fdb97e11423c33a7be75eaf"
  },
  {
    "url": "assets/js/96.js",
    "revision": "fb6c955ac43b894266cf3851825d924b"
  },
  {
    "url": "assets/js/97.js",
    "revision": "006ec22ce5fc6fd430e3eb407c093c18"
  },
  {
    "url": "assets/js/98.js",
    "revision": "737f0f7ea021aa6672cde7601ca9e784"
  },
  {
    "url": "assets/js/99.js",
    "revision": "fecc5048bc8d63b2a509d0b2f2d99686"
  },
  {
    "url": "assets/js/app.js",
    "revision": "8409142d81eb7b1fc33f5e50691c073d"
  },
  {
    "url": "assets/js/styles.js",
    "revision": "22f22b49cc901aa95826401f7ce0930c"
  },
  {
    "url": "blog/category/index.html",
    "revision": "b7685753be118299f3242d9e68f4cb65"
  },
  {
    "url": "blog/code/artists/index.html",
    "revision": "fc67b197f9dba417140b8051319404b1"
  },
  {
    "url": "blog/code/asa.sbh.nz/index.html",
    "revision": "2498d2985d7b579a47e942277ea8f178"
  },
  {
    "url": "blog/code/divider/index.html",
    "revision": "b2e41f00915e81b448b52f6cde5c0c27"
  },
  {
    "url": "blog/code/first/index.html",
    "revision": "bd23803d11adc341f0cbdf87661cda5c"
  },
  {
    "url": "blog/code/fishbarrel/index.html",
    "revision": "d1dc0576947c867731ce639fcea9249b"
  },
  {
    "url": "blog/code/indent/index.html",
    "revision": "ddf81d7388e8042ed489d6a6311dcf3e"
  },
  {
    "url": "blog/code/index.html",
    "revision": "becc447bc093e95c3027dd2f91c0041d"
  },
  {
    "url": "blog/code/ingoa.nz/index.html",
    "revision": "f1336e23db62e25cd1d60596818c8ff4"
  },
  {
    "url": "blog/code/nzondemand/index.html",
    "revision": "115ca8c00c4fd7621340c75bff6ed8b7"
  },
  {
    "url": "blog/code/picard/index.html",
    "revision": "3a9e0055a916f1d3aa2ee42e584ac29f"
  },
  {
    "url": "blog/code/qr/index.html",
    "revision": "34fa852c57b32461434aeacdcd23ffcc"
  },
  {
    "url": "blog/code/rotx/index.html",
    "revision": "a862ca8c01d6487d8f32b5085827dd4f"
  },
  {
    "url": "blog/code/website/index.html",
    "revision": "6a2f8b43c2300e4300c343d921516030"
  },
  {
    "url": "blog/code/website/route/index.html",
    "revision": "9c762c99925ab77d18f3f1bfad95aeab"
  },
  {
    "url": "blog/code/website/site/index.html",
    "revision": "b3f27c9e50020eca82f3e23c5bcc992f"
  },
  {
    "url": "blog/code/xmltv.co.nz/index.html",
    "revision": "827c7e05fd5790675a0ed116d06a0233"
  },
  {
    "url": "blog/howto/index.html",
    "revision": "16a313f9a582873ab3cecba66b9ddeb8"
  },
  {
    "url": "blog/howto/intel865/index.html",
    "revision": "24204dafc0400edb36b53634c2a38c86"
  },
  {
    "url": "blog/howto/nexentastor/index.html",
    "revision": "ae1a36d44257fde81fde127ec612b595"
  },
  {
    "url": "blog/howto/pcloadletter/index.html",
    "revision": "1e9bc1d6f43c791f4978385a84d6f1db"
  },
  {
    "url": "blog/howto/raid5/index.html",
    "revision": "72b35199e6b2cbd142a7910bd572f55b"
  },
  {
    "url": "blog/index.html",
    "revision": "04e24531c9afded60fe5e07aaa69952c"
  },
  {
    "url": "blog/life/anotheryear/index.html",
    "revision": "30b0baf1496016f2694e3f405abe0611"
  },
  {
    "url": "blog/life/birthday/index.html",
    "revision": "dd9e51690e079923a32325922ba35455"
  },
  {
    "url": "blog/life/blasphemy/index.html",
    "revision": "ae71fb9f463c581456be7bb21f144c45"
  },
  {
    "url": "blog/life/blogger/index.html",
    "revision": "4856362a7867e9760911af59ab7790ae"
  },
  {
    "url": "blog/life/blurry/index.html",
    "revision": "c71233875eea1a9ac8e025d29054762e"
  },
  {
    "url": "blog/life/domain/index.html",
    "revision": "81f5c91e2699767cc742d4b0a043011a"
  },
  {
    "url": "blog/life/exams/index.html",
    "revision": "308dece0d5b7081148e5130f008b3cb6"
  },
  {
    "url": "blog/life/food/index.html",
    "revision": "dfe5f84dd8cb4c6fac273d884e7e09af"
  },
  {
    "url": "blog/life/glenview/index.html",
    "revision": "9d8d23d53f9d9d7f5ede83f999b5b78e"
  },
  {
    "url": "blog/life/headlines/index.html",
    "revision": "28a90e92efaf6f6b2f58751a74d7cfbc"
  },
  {
    "url": "blog/life/index.html",
    "revision": "9ff5c4cdcc4c238dd7465c341ce94b4c"
  },
  {
    "url": "blog/life/jws/index.html",
    "revision": "c086a62868c31eb5c3b0d1d025cf56db"
  },
  {
    "url": "blog/life/keyboard/index.html",
    "revision": "aefab6ad67e1d4258f28b0d1ad5a91c6"
  },
  {
    "url": "blog/life/lpi201/index.html",
    "revision": "6c490e667db89797ba4087a9d158d52f"
  },
  {
    "url": "blog/life/mashup/index.html",
    "revision": "2e1591975fbe0a49b06861aa174fcb47"
  },
  {
    "url": "blog/life/motorweb/index.html",
    "revision": "3c5931dad07461aa2a45df00007e5618"
  },
  {
    "url": "blog/life/nxe/index.html",
    "revision": "31d2d1b93771690e39923c6b0803f991"
  },
  {
    "url": "blog/life/plates/index.html",
    "revision": "4bdd57d32f287d82b324c395498365f8"
  },
  {
    "url": "blog/life/queenstown/index.html",
    "revision": "cd6aa5c27a6f593dd92fed72e86b4635"
  },
  {
    "url": "blog/life/racism/index.html",
    "revision": "e6e6ef6166d1816209f5b80e7a0add83"
  },
  {
    "url": "blog/life/roads/index.html",
    "revision": "df291137a0301b9b06c8f0b9a16b0083"
  },
  {
    "url": "blog/life/scare/index.html",
    "revision": "81f16292afa01a9838310134bf28abff"
  },
  {
    "url": "blog/life/scary/index.html",
    "revision": "d73175b3c20e6c50bc170062e83fc9c0"
  },
  {
    "url": "blog/life/seti/index.html",
    "revision": "73df4be111e6f5d16809bfb6e801a433"
  },
  {
    "url": "blog/life/skeptical/index.html",
    "revision": "7fdd02b7e9312beb06e840981b82d571"
  },
  {
    "url": "blog/life/skepticzone/index.html",
    "revision": "04cf50568096fec09c86ce650af12d0e"
  },
  {
    "url": "blog/life/spam/index.html",
    "revision": "76d287ddaa81c254ed6c138fdcc19c93"
  },
  {
    "url": "blog/life/trademe/index.html",
    "revision": "019600f58eee8d06c0154e7af90463fd"
  },
  {
    "url": "blog/life/unforeseen/index.html",
    "revision": "d9a0273c334e7050cb18db38dbafaafe"
  },
  {
    "url": "blog/life/wobbly/index.html",
    "revision": "189966a4df885d17d3370a154def4e72"
  },
  {
    "url": "blog/projects/airbag/index.html",
    "revision": "fa2dc9339f0f387bd057f6b6c062e8c5"
  },
  {
    "url": "blog/projects/ambilight/index.html",
    "revision": "7912a02569445e838691c1990f5f79d5"
  },
  {
    "url": "blog/projects/automation/index.html",
    "revision": "196bd3f319ae79b13c5e0fce9df59533"
  },
  {
    "url": "blog/projects/eyes/index.html",
    "revision": "f632c8b9e869352bcadee89470b9531c"
  },
  {
    "url": "blog/projects/glitch/index.html",
    "revision": "1e1851616e95033ab3ab110edf4d8622"
  },
  {
    "url": "blog/projects/index.html",
    "revision": "bb8f52f5d499a0b2c9ea15edd02eb4df"
  },
  {
    "url": "blog/projects/it100/index.html",
    "revision": "b4704204ca16f3072385cd31793d125d"
  },
  {
    "url": "blog/projects/microscope/index.html",
    "revision": "f59eb5699c5d752ae6bc2d3d43209567"
  },
  {
    "url": "blog/projects/mirror/index.html",
    "revision": "7eff22c431f5fb1253839a07b80fe1ea"
  },
  {
    "url": "blog/projects/picture/index.html",
    "revision": "4225a75aee520d5135703d2eac24448c"
  },
  {
    "url": "blog/projects/pizza/index.html",
    "revision": "9881b6524dc66d4bacb97d0205e2187f"
  },
  {
    "url": "blog/projects/podcast/index.html",
    "revision": "27af04e94910cf57f558fdd3babffe8f"
  },
  {
    "url": "blog/projects/reflow/index.html",
    "revision": "a9c0a306d60c52a967ea0857fc10010a"
  },
  {
    "url": "blog/projects/sandbox/index.html",
    "revision": "59db5ad449d9b146a956424bffb23c3c"
  },
  {
    "url": "blog/projects/screens/index.html",
    "revision": "23000a15e0f402cd3e495322f6e0c0d0"
  },
  {
    "url": "blog/projects/sky/index.html",
    "revision": "33d79dd58019f924a0a102a039a9e417"
  },
  {
    "url": "blog/projects/starwars/index.html",
    "revision": "2d4e6ec6cbf6bf3a4610651bdea02dbc"
  },
  {
    "url": "blog/projects/xbox/index.html",
    "revision": "a16449bd6a43d2388fe4c9e0c35916a0"
  },
  {
    "url": "blog/random/addresses/index.html",
    "revision": "151cf1d8c4b116f62675f4cc6974e8a2"
  },
  {
    "url": "blog/random/alphabet/index.html",
    "revision": "3d11f1b8f5467c884daa9e2ba9b25d2c"
  },
  {
    "url": "blog/random/astrology/index.html",
    "revision": "8633b83907d90c47dd9a4700d9d05191"
  },
  {
    "url": "blog/random/chicken/index.html",
    "revision": "188f44d9782a819873004bc81db99df7"
  },
  {
    "url": "blog/random/dns/index.html",
    "revision": "91b5525b5b00c70ad0f547e63ccd6b8f"
  },
  {
    "url": "blog/random/evp/index.html",
    "revision": "ae304458df06612048f18aa1e7d2360c"
  },
  {
    "url": "blog/random/flip/index.html",
    "revision": "0bb3e44ecef036ecbea34083f5294f7d"
  },
  {
    "url": "blog/random/honeychurch/index.html",
    "revision": "487573ace0b03c60e6bbdf0dff31a792"
  },
  {
    "url": "blog/random/index.html",
    "revision": "69486df9bf1e4087acc058a439ef3307"
  },
  {
    "url": "blog/random/lottery/index.html",
    "revision": "88ba45250aafe58f85e66497678e42c1"
  },
  {
    "url": "blog/random/music/index.html",
    "revision": "7b485c5d7a3b6d3e84afa644c3accd9c"
  },
  {
    "url": "blog/random/octal/index.html",
    "revision": "ae7074d2518109eb61d6dbb4a122c86d"
  },
  {
    "url": "blog/random/os/index.html",
    "revision": "3fa6b45b37fdcdd0b12b204f8716be7a"
  },
  {
    "url": "blog/random/propellers/index.html",
    "revision": "fe872d58f4e9addc3c5cf22d81a57098"
  },
  {
    "url": "blog/random/robux/index.html",
    "revision": "5ffb741f286c9e19368f4f3e8324a828"
  },
  {
    "url": "blog/random/super/index.html",
    "revision": "e9caee481172040cb2a9833b1fa1da51"
  },
  {
    "url": "blog/random/times/index.html",
    "revision": "99891b82985eb1110bb280f5c52de175"
  },
  {
    "url": "blog/random/travel/index.html",
    "revision": "1e43951596b27560882996c4ab03791d"
  },
  {
    "url": "blog/random/wilhelm/index.html",
    "revision": "8ca07e43a84b7d80c0bd50af7d4ea56f"
  },
  {
    "url": "blog/random/year/index.html",
    "revision": "0e2cb213f27a5fe611c206799d3fb62d"
  },
  {
    "url": "blog/skepticism/2015/08/16/asa/index.html",
    "revision": "dd85d29e5b0086b7cf6c245020259d97"
  },
  {
    "url": "blog/skepticism/2015/08/16/awards/index.html",
    "revision": "bce4c603bbaa8f8b20b90b488c55caf7"
  },
  {
    "url": "blog/skepticism/2015/08/16/bravo/index.html",
    "revision": "7796c9bff4260f8fc9d054ecfd10bee7"
  },
  {
    "url": "blog/skepticism/2015/08/16/index.html",
    "revision": "aa0bf08911465218ee53fd8a30b9d2e5"
  },
  {
    "url": "blog/skepticism/2015/08/16/jim/index.html",
    "revision": "759412a81537fab9ee993eae43af3b98"
  },
  {
    "url": "blog/skepticism/2015/08/16/naholo/index.html",
    "revision": "9f17c7c488f5e361792ae73dc3477710"
  },
  {
    "url": "blog/skepticism/2015/08/16/resene/index.html",
    "revision": "728f7ed91be360993f05d84f9a351230"
  },
  {
    "url": "blog/skepticism/2015/08/index.html",
    "revision": "890af2bc2eb4564513f3cd65ec3c2522"
  },
  {
    "url": "blog/skepticism/2015/09/20/gop/index.html",
    "revision": "75fd77a23aabe759ff72b1ff79a8ba87"
  },
  {
    "url": "blog/skepticism/2015/09/20/ignobel/index.html",
    "revision": "07b7c540785276f448d04cab8adb7696"
  },
  {
    "url": "blog/skepticism/2015/09/20/index.html",
    "revision": "bfbc9b1516d1ebc3d20826f852ea50f8"
  },
  {
    "url": "blog/skepticism/2015/09/20/supplements/index.html",
    "revision": "5864719e56a58656bfdd90118f8f2ebe"
  },
  {
    "url": "blog/skepticism/2015/09/27/ayahuasca/index.html",
    "revision": "f685d27f61e43ea166af4c7338176d26"
  },
  {
    "url": "blog/skepticism/2015/09/27/drought/index.html",
    "revision": "c63578870a769fb43780082ba6f54dda"
  },
  {
    "url": "blog/skepticism/2015/09/27/index.html",
    "revision": "7f3f7e5807bac4b244d7b868b5228055"
  },
  {
    "url": "blog/skepticism/2015/09/27/lama/index.html",
    "revision": "7b3ebed8296a40bd4c6a7b8365bc93b7"
  },
  {
    "url": "blog/skepticism/2015/09/27/moon/index.html",
    "revision": "ecc9a6ad37c42b13f3fd53c5d4d2049b"
  },
  {
    "url": "blog/skepticism/2015/09/27/scan/index.html",
    "revision": "34c32b1e4bbdc59ce248117328f87df7"
  },
  {
    "url": "blog/skepticism/2015/09/index.html",
    "revision": "cf561b4b4b0803bef0ef641d406b0ae9"
  },
  {
    "url": "blog/skepticism/2015/10/04/ghost/index.html",
    "revision": "e62b71b9a4ed0fe18fcbf10360255c5f"
  },
  {
    "url": "blog/skepticism/2015/10/04/haka/index.html",
    "revision": "7eb08f40bdd8aaa1aa59ba3b12792f16"
  },
  {
    "url": "blog/skepticism/2015/10/04/index.html",
    "revision": "a23108facff3f07f60ebb88c2618da35"
  },
  {
    "url": "blog/skepticism/2015/10/04/mars/index.html",
    "revision": "a90458ad1f49f7e2a51966a2a2e107eb"
  },
  {
    "url": "blog/skepticism/2015/10/04/pharmacy/index.html",
    "revision": "e420c4a1b6a9040ec80c73c6d167389c"
  },
  {
    "url": "blog/skepticism/2015/10/04/prostate/index.html",
    "revision": "5866a3bb61ee85760e28dfa6a0db87de"
  },
  {
    "url": "blog/skepticism/2015/10/11/armageddon/index.html",
    "revision": "bb963081b20518004056801e85d432b0"
  },
  {
    "url": "blog/skepticism/2015/10/11/climate/index.html",
    "revision": "56f7872d550fc5062f7629b630faa7c0"
  },
  {
    "url": "blog/skepticism/2015/10/11/ghost/index.html",
    "revision": "fa712db9aa9a891dd36b5b9653bf6ef2"
  },
  {
    "url": "blog/skepticism/2015/10/11/index.html",
    "revision": "e4d1bfe9cc2eb4dea877ac591a2d3df2"
  },
  {
    "url": "blog/skepticism/2015/10/11/magnesleep/index.html",
    "revision": "41b0568eba3e6e1a341a9497ba549791"
  },
  {
    "url": "blog/skepticism/2015/10/11/nhs/index.html",
    "revision": "99fb80e589361cd9c2615cdb226b0995"
  },
  {
    "url": "blog/skepticism/2015/10/11/prophet/index.html",
    "revision": "1d9a410db9dd39e02a1d319c23a3e0c4"
  },
  {
    "url": "blog/skepticism/2015/10/index.html",
    "revision": "e5b43c28525be129a5fecbb65da27519"
  },
  {
    "url": "blog/skepticism/2015/11/15/end/index.html",
    "revision": "4c769cd79eb2aca254a67072fb001f67"
  },
  {
    "url": "blog/skepticism/2015/11/15/index.html",
    "revision": "8cb8eaa89f9be7c99e87f1b4f6cf61e7"
  },
  {
    "url": "blog/skepticism/2015/11/index.html",
    "revision": "e6a837fc2ccebe06ad9bf010c7f7e27f"
  },
  {
    "url": "blog/skepticism/2015/12/13/astrology/index.html",
    "revision": "20dba23a82642c5cf0662725532e45ad"
  },
  {
    "url": "blog/skepticism/2015/12/13/cancer/index.html",
    "revision": "d44d78e59cd7e5a4020194d8c473c7b5"
  },
  {
    "url": "blog/skepticism/2015/12/13/chickenpox/index.html",
    "revision": "1a97909880f233bc28b16cda53f6cc6f"
  },
  {
    "url": "blog/skepticism/2015/12/13/index.html",
    "revision": "2f6b40d40e552e6f7801f838df442e33"
  },
  {
    "url": "blog/skepticism/2015/12/13/osteopath/index.html",
    "revision": "485838c23064b6465f52dc3d641f1fad"
  },
  {
    "url": "blog/skepticism/2015/12/13/priest/index.html",
    "revision": "fdedfa4206c7dacb3e05e020cd1bbcb9"
  },
  {
    "url": "blog/skepticism/2015/12/13/psychic/index.html",
    "revision": "d526526e3f0e96cb5112402a78e4f63e"
  },
  {
    "url": "blog/skepticism/2015/12/13/vaccines/index.html",
    "revision": "f096f90e9e190c611d3ff6a3fdc7a48d"
  },
  {
    "url": "blog/skepticism/2015/12/index.html",
    "revision": "2061a405ccd0437075ff101af122e2b5"
  },
  {
    "url": "blog/skepticism/2015/index.html",
    "revision": "b59b209b78b04ccdc3c9c73b40f626fb"
  },
  {
    "url": "blog/skepticism/2016/02/07/antioxidant/index.html",
    "revision": "41c5d9e810319a594adb3cebc916c3c5"
  },
  {
    "url": "blog/skepticism/2016/02/07/index.html",
    "revision": "2f31089fcc588644fe7d7b4d1517f027"
  },
  {
    "url": "blog/skepticism/2016/02/07/kfc/index.html",
    "revision": "8e97b32917cd37f2766824581c959c1e"
  },
  {
    "url": "blog/skepticism/2016/02/07/ph/index.html",
    "revision": "fae9bdbe544a1245473f4786dac1e6bb"
  },
  {
    "url": "blog/skepticism/2016/02/07/sandy/index.html",
    "revision": "5d38f0f21267cac6cc26615eb001c42a"
  },
  {
    "url": "blog/skepticism/2016/02/07/sarfati/index.html",
    "revision": "fcd5d1f6507bd6e722b9e0e2f3f6201d"
  },
  {
    "url": "blog/skepticism/2016/02/07/trump/index.html",
    "revision": "dc299ebc908dad2508b1b776fb764e0b"
  },
  {
    "url": "blog/skepticism/2016/02/14/coins/index.html",
    "revision": "f7334df17c3cbdbb08a59108b47081d2"
  },
  {
    "url": "blog/skepticism/2016/02/14/fast/index.html",
    "revision": "0a0b8744de106be1d902946b979f7583"
  },
  {
    "url": "blog/skepticism/2016/02/14/fluoride/index.html",
    "revision": "6c7fd2e488f82281af2eeb53233f56ce"
  },
  {
    "url": "blog/skepticism/2016/02/14/icke/index.html",
    "revision": "8cd19eed65fdc90d2b94706f293c3310"
  },
  {
    "url": "blog/skepticism/2016/02/14/index.html",
    "revision": "e5c8e976b0b841ad3cb4bfd861b766e0"
  },
  {
    "url": "blog/skepticism/2016/02/14/yeti/index.html",
    "revision": "193632518c57da1095c81a7704a9b210"
  },
  {
    "url": "blog/skepticism/2016/02/21/homeopathy/index.html",
    "revision": "27740bdbe77a5a16f94e0cee236aca34"
  },
  {
    "url": "blog/skepticism/2016/02/21/index.html",
    "revision": "0ec86974871df563adad3a58454b9b31"
  },
  {
    "url": "blog/skepticism/2016/02/21/monster/index.html",
    "revision": "9fbd9bbdd864307b97ca28e947b324cd"
  },
  {
    "url": "blog/skepticism/2016/02/21/scalia/index.html",
    "revision": "909d1e2da4f752e861dec9652a6c126a"
  },
  {
    "url": "blog/skepticism/2016/02/21/shane/index.html",
    "revision": "eea1323026f5f20e6cf75c4159676780"
  },
  {
    "url": "blog/skepticism/2016/02/21/texas/index.html",
    "revision": "46f4013e200c6c0b6b575c07b8732983"
  },
  {
    "url": "blog/skepticism/2016/02/28/acupuncture/index.html",
    "revision": "3048eecc498b27a121126b1599f7ce7e"
  },
  {
    "url": "blog/skepticism/2016/02/28/fsm/index.html",
    "revision": "b20e0565c1d2b686b3c125f254d23db5"
  },
  {
    "url": "blog/skepticism/2016/02/28/index.html",
    "revision": "da7d367a6be93971e5ef87ad51967e27"
  },
  {
    "url": "blog/skepticism/2016/02/28/iv/index.html",
    "revision": "91ae4d72fbd63d3ec0732b0e07690020"
  },
  {
    "url": "blog/skepticism/2016/02/28/natural/index.html",
    "revision": "a7c04a553501d5ab8178c10355534614"
  },
  {
    "url": "blog/skepticism/2016/02/28/talc/index.html",
    "revision": "1477dbf9d9f74d2e4dd53198d04ebd79"
  },
  {
    "url": "blog/skepticism/2016/02/index.html",
    "revision": "8ab9d319397f975b9ba976300b93c21b"
  },
  {
    "url": "blog/skepticism/2016/03/13/herbs/index.html",
    "revision": "3539f69e1a4e6facc85664dc5ed8b0fc"
  },
  {
    "url": "blog/skepticism/2016/03/13/index.html",
    "revision": "c952594cf24d579d624d700b377d4cb5"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandala/index.html",
    "revision": "6d42ef0ad7f2b0bf0cc397d3b4af8f35"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandela/index.html",
    "revision": "92735b0e2d260d0c07cc3ee08a08d30c"
  },
  {
    "url": "blog/skepticism/2016/03/13/spray/index.html",
    "revision": "fde3946c75af8e8e98627c32366b47ce"
  },
  {
    "url": "blog/skepticism/2016/03/index.html",
    "revision": "2cf9b2694dbe91bff9352d544aa72b51"
  },
  {
    "url": "blog/skepticism/2016/04/17/charity/index.html",
    "revision": "a002823c99eb0aef0488f7fe7f0aba86"
  },
  {
    "url": "blog/skepticism/2016/04/17/chiro/index.html",
    "revision": "705ad64878de73f836e2fd3843d2b453"
  },
  {
    "url": "blog/skepticism/2016/04/17/fluoride/index.html",
    "revision": "849ad964056034f2b834e0ebea4e1c43"
  },
  {
    "url": "blog/skepticism/2016/04/17/index.html",
    "revision": "79cb782d48a325a99c4b5c49a3b1be98"
  },
  {
    "url": "blog/skepticism/2016/04/17/lotto/index.html",
    "revision": "ca3f919fc8ae2f29840796c7e2d20f65"
  },
  {
    "url": "blog/skepticism/2016/04/17/mind/index.html",
    "revision": "a3afe7142c26ee1f843f25499f53ffcc"
  },
  {
    "url": "blog/skepticism/2016/04/17/whooping/index.html",
    "revision": "9cca01dba237650e5228899c37a3663b"
  },
  {
    "url": "blog/skepticism/2016/04/index.html",
    "revision": "909fac2389284511bfa67e7beb458723"
  },
  {
    "url": "blog/skepticism/2016/06/05/1080/index.html",
    "revision": "101bf2cf0575578bb1552fa3bfde57c2"
  },
  {
    "url": "blog/skepticism/2016/06/05/acupuncture/index.html",
    "revision": "7c207d21a8f0f39f5cb9e43c02d0ad89"
  },
  {
    "url": "blog/skepticism/2016/06/05/family/index.html",
    "revision": "562f2e8eac0d6949f51f7558a52ecbdc"
  },
  {
    "url": "blog/skepticism/2016/06/05/index.html",
    "revision": "0fef95d71d2a1a9936053d34ce75341d"
  },
  {
    "url": "blog/skepticism/2016/06/05/limbaugh/index.html",
    "revision": "fe385488c972c14459cd63407f759703"
  },
  {
    "url": "blog/skepticism/2016/06/12/bobby/index.html",
    "revision": "28f60e0c05aafe6121a4c4d46bbf94c2"
  },
  {
    "url": "blog/skepticism/2016/06/12/climate/index.html",
    "revision": "fafb749f0a94bd013131511fdc522535"
  },
  {
    "url": "blog/skepticism/2016/06/12/index.html",
    "revision": "dc38171cc49990721ff5a8c6a0a7b021"
  },
  {
    "url": "blog/skepticism/2016/06/12/pugh/index.html",
    "revision": "3c7708821e49d021a2f3542390b6db59"
  },
  {
    "url": "blog/skepticism/2016/06/12/savage/index.html",
    "revision": "8f8c3799eb0affdb7457b154158e8339"
  },
  {
    "url": "blog/skepticism/2016/06/12/sawdust/index.html",
    "revision": "ca0d4fa67c119712e1ab2f72d1949428"
  },
  {
    "url": "blog/skepticism/2016/06/19/beauty/index.html",
    "revision": "c53ee044b424fe95c4d906ca098beb1f"
  },
  {
    "url": "blog/skepticism/2016/06/19/bilderberg/index.html",
    "revision": "cdf3c120e9f74d6b199ffa3746fdf385"
  },
  {
    "url": "blog/skepticism/2016/06/19/cyf/index.html",
    "revision": "1d00965a04142d6c21a0ce29158f039b"
  },
  {
    "url": "blog/skepticism/2016/06/19/holt/index.html",
    "revision": "6466dda69ebeaa3838ee0bb906df517a"
  },
  {
    "url": "blog/skepticism/2016/06/19/index.html",
    "revision": "8479d603625c41d6f0be0a9a4efb8b20"
  },
  {
    "url": "blog/skepticism/2016/06/19/silver/index.html",
    "revision": "5c1f5bd467638f090ac2525679d87394"
  },
  {
    "url": "blog/skepticism/2016/06/19/ufo/index.html",
    "revision": "9ca9da144d9155cd8ce7279b65fe65da"
  },
  {
    "url": "blog/skepticism/2016/06/26/homeopathy/index.html",
    "revision": "ca8b8daff7d5e51398c2996d6197f429"
  },
  {
    "url": "blog/skepticism/2016/06/26/index.html",
    "revision": "c97293e04daffeeca86d413d6e1ab25c"
  },
  {
    "url": "blog/skepticism/2016/06/26/robbins/index.html",
    "revision": "f4c22062f9a9468460239b299bd62f1e"
  },
  {
    "url": "blog/skepticism/2016/06/26/selfies/index.html",
    "revision": "8e6c2295a92aa9528529e9586bf17069"
  },
  {
    "url": "blog/skepticism/2016/06/26/silver/index.html",
    "revision": "47d38b7e11d52f02071be7e340723b67"
  },
  {
    "url": "blog/skepticism/2016/06/26/ufos/index.html",
    "revision": "87628afcc6d61ac1f983ca81c286707e"
  },
  {
    "url": "blog/skepticism/2016/06/index.html",
    "revision": "f8a76cfc0edb55a794045f32c49860bd"
  },
  {
    "url": "blog/skepticism/2016/07/03/glyphosate/index.html",
    "revision": "708f54d6ee583f1ce044ad5800547286"
  },
  {
    "url": "blog/skepticism/2016/07/03/gmo/index.html",
    "revision": "ddd53bd43e0726cf45ab22614689ce41"
  },
  {
    "url": "blog/skepticism/2016/07/03/index.html",
    "revision": "9d8227ea0d01a120c1cbd803a1ce1098"
  },
  {
    "url": "blog/skepticism/2016/07/03/jail/index.html",
    "revision": "04338f11f9c57302e8ea849bfd74e4a6"
  },
  {
    "url": "blog/skepticism/2016/07/03/ken/index.html",
    "revision": "d394f13c017b67e1a0acb2c2396d6378"
  },
  {
    "url": "blog/skepticism/2016/07/10/ark/index.html",
    "revision": "fb900b2eac8370b2cfa618d77b251814"
  },
  {
    "url": "blog/skepticism/2016/07/10/bee/index.html",
    "revision": "49a7e41c94902cd637512bb9812945a5"
  },
  {
    "url": "blog/skepticism/2016/07/10/index.html",
    "revision": "4b155526ec3fc0ac9514cfd1b9c6f08e"
  },
  {
    "url": "blog/skepticism/2016/07/10/lottery/index.html",
    "revision": "0d64197f9f465331c0c43e79ec4e5a70"
  },
  {
    "url": "blog/skepticism/2016/07/10/murder/index.html",
    "revision": "62e5d4c45f49c1d4f0f53f0b29dd366b"
  },
  {
    "url": "blog/skepticism/2016/07/17/dogs/index.html",
    "revision": "610d4919d17be8fd8adc7ebd445d0d83"
  },
  {
    "url": "blog/skepticism/2016/07/17/fsm/index.html",
    "revision": "fb666f42edb9bf21b85504417b29a956"
  },
  {
    "url": "blog/skepticism/2016/07/17/fyi/index.html",
    "revision": "fcc390f92b9dbee7d90931b1cdbc496a"
  },
  {
    "url": "blog/skepticism/2016/07/17/index.html",
    "revision": "ed42e44a7b87e5083fdbce259d1292fb"
  },
  {
    "url": "blog/skepticism/2016/07/17/natural/index.html",
    "revision": "f53fece6ab7c367ae11d7d4aadd9567d"
  },
  {
    "url": "blog/skepticism/2016/07/17/pokemon/index.html",
    "revision": "e4b44c922217fc57c4d051ad6b29d149"
  },
  {
    "url": "blog/skepticism/2016/07/index.html",
    "revision": "bbd9d72ddb8608c2309662e4fdd80fed"
  },
  {
    "url": "blog/skepticism/2016/08/07/icke/index.html",
    "revision": "d3bfbbf1adddb072246657bf5bf13535"
  },
  {
    "url": "blog/skepticism/2016/08/07/index.html",
    "revision": "81e8b0bb46b375ceecaacdd5e1dd8aba"
  },
  {
    "url": "blog/skepticism/2016/08/21/brian/index.html",
    "revision": "851f107b9b1a4f3413a139fd479d6f58"
  },
  {
    "url": "blog/skepticism/2016/08/21/chlorine/index.html",
    "revision": "e3925a39bf20dbef9578d1ffeb1ace7c"
  },
  {
    "url": "blog/skepticism/2016/08/21/index.html",
    "revision": "1defbd46f809b2f2a074afbe2fe8ba00"
  },
  {
    "url": "blog/skepticism/2016/08/21/murder/index.html",
    "revision": "559f10c23ebca105193915f3b5bed5ee"
  },
  {
    "url": "blog/skepticism/2016/08/21/superfoods/index.html",
    "revision": "35a37a76f232958c1dbfca82f7f0229c"
  },
  {
    "url": "blog/skepticism/2016/08/21/witch/index.html",
    "revision": "9073fd4a787183ae4a71f26d7ce1c467"
  },
  {
    "url": "blog/skepticism/2016/08/28/alcohol/index.html",
    "revision": "f9f4d3835839cf058d20cde6e5281c8a"
  },
  {
    "url": "blog/skepticism/2016/08/28/chiro/index.html",
    "revision": "c5bb04799dcd183da642f1dba3f46fce"
  },
  {
    "url": "blog/skepticism/2016/08/28/index.html",
    "revision": "1ad1ca0c30cd337becb6fe0239bbf6b6"
  },
  {
    "url": "blog/skepticism/2016/08/28/processed/index.html",
    "revision": "b7314b1744643e209aca19c42bdc2b98"
  },
  {
    "url": "blog/skepticism/2016/08/28/sbh/index.html",
    "revision": "50d9eaa473cbe32fd1d7a2a90f09a6cd"
  },
  {
    "url": "blog/skepticism/2016/08/index.html",
    "revision": "ee94a48087337c6b229fc9aacdac6116"
  },
  {
    "url": "blog/skepticism/2016/09/18/altruism/index.html",
    "revision": "355e5fdaff6a1fa43511a96b28e87973"
  },
  {
    "url": "blog/skepticism/2016/09/18/better/index.html",
    "revision": "8c2cbf7a1cdd8fda76b4f905a671ebac"
  },
  {
    "url": "blog/skepticism/2016/09/18/homeopathy/index.html",
    "revision": "a75d71a1d1144030f70354c272cae972"
  },
  {
    "url": "blog/skepticism/2016/09/18/index.html",
    "revision": "cc6aac61289ce49dac37075f71d8f718"
  },
  {
    "url": "blog/skepticism/2016/09/18/nonsense/index.html",
    "revision": "bb42a5a2645880d05759d2de428fa014"
  },
  {
    "url": "blog/skepticism/2016/09/18/trump/index.html",
    "revision": "23c53935c6211233f6e91c44773a1698"
  },
  {
    "url": "blog/skepticism/2016/09/25/clinic/index.html",
    "revision": "2d35e21ce721642581761026e4cbbe7b"
  },
  {
    "url": "blog/skepticism/2016/09/25/fluoride/index.html",
    "revision": "0c6b823eb48d492f3715a90bff062e37"
  },
  {
    "url": "blog/skepticism/2016/09/25/homeopathy/index.html",
    "revision": "2eb43e5898a0c4d7f57d102f49619caa"
  },
  {
    "url": "blog/skepticism/2016/09/25/index.html",
    "revision": "2a002b05f24592a75838752558402bb8"
  },
  {
    "url": "blog/skepticism/2016/09/25/murder/index.html",
    "revision": "8ebd35b4cdcec646ece723746ad985b5"
  },
  {
    "url": "blog/skepticism/2016/09/index.html",
    "revision": "fed85e743095260396376e552515f2da"
  },
  {
    "url": "blog/skepticism/2016/10/21/bigfoot/index.html",
    "revision": "3cc7418c189242a1a2799f37d2432124"
  },
  {
    "url": "blog/skepticism/2016/10/21/breasts/index.html",
    "revision": "496039f3d48e541df1707b4a8874600c"
  },
  {
    "url": "blog/skepticism/2016/10/21/index.html",
    "revision": "f1af06b3e5385ea7563d7adfe7792c7f"
  },
  {
    "url": "blog/skepticism/2016/10/21/medsafe/index.html",
    "revision": "af3551eff8c3c8d264482dfee661e936"
  },
  {
    "url": "blog/skepticism/2016/10/21/zenteq/index.html",
    "revision": "701de465865be78f62a2b86623488a2a"
  },
  {
    "url": "blog/skepticism/2016/10/index.html",
    "revision": "142896d7827442b84385f2b04d05f447"
  },
  {
    "url": "blog/skepticism/2016/11/13/conference/index.html",
    "revision": "2a0c53cddacd387bc39df42657da9f5c"
  },
  {
    "url": "blog/skepticism/2016/11/13/green/index.html",
    "revision": "d09ad8be788443839a216cabd0e76671"
  },
  {
    "url": "blog/skepticism/2016/11/13/index.html",
    "revision": "48a09f4208aa69f0c206cd524873a8ed"
  },
  {
    "url": "blog/skepticism/2016/11/13/vice/index.html",
    "revision": "ba33cd860070cf83b184c73998c3697b"
  },
  {
    "url": "blog/skepticism/2016/11/27/bioptron/index.html",
    "revision": "1d72d8cc294a630f8cbba442d49ae1db"
  },
  {
    "url": "blog/skepticism/2016/11/27/conference/index.html",
    "revision": "81fcd3777d52f273d06f94de08e42ba6"
  },
  {
    "url": "blog/skepticism/2016/11/27/earthquake/index.html",
    "revision": "b0e727aae2247f6e530f5070687baa2e"
  },
  {
    "url": "blog/skepticism/2016/11/27/index.html",
    "revision": "dbb0aadcab395512278f255b454def2d"
  },
  {
    "url": "blog/skepticism/2016/11/index.html",
    "revision": "031c7a599edb53574f8575a922d83d44"
  },
  {
    "url": "blog/skepticism/2016/12/04/conference/index.html",
    "revision": "6cdafba791801fb48fa95ecabcc3fec9"
  },
  {
    "url": "blog/skepticism/2016/12/04/index.html",
    "revision": "a317d26d0a4dfa5591cb6be5ff18c119"
  },
  {
    "url": "blog/skepticism/2016/12/18/colin/index.html",
    "revision": "0c0d13757fef00776c5be5f3a6d2e093"
  },
  {
    "url": "blog/skepticism/2016/12/18/fiji/index.html",
    "revision": "7c0346f5a75988e1e5c2e233aba1a775"
  },
  {
    "url": "blog/skepticism/2016/12/18/index.html",
    "revision": "0fe9ddb4c164921220d31d567feb8330"
  },
  {
    "url": "blog/skepticism/2016/12/18/kinesiology/index.html",
    "revision": "07ce9b563d1fb075f997342cf21fe8a6"
  },
  {
    "url": "blog/skepticism/2016/12/18/mmm/index.html",
    "revision": "a039a8558ea9d0cf2092f9cc589d7ba1"
  },
  {
    "url": "blog/skepticism/2016/12/18/nigel/index.html",
    "revision": "e40ab5fb1f2882d1953ef812be5f9753"
  },
  {
    "url": "blog/skepticism/2016/12/index.html",
    "revision": "8552e3475b6beebb51516231c68f0431"
  },
  {
    "url": "blog/skepticism/2016/index.html",
    "revision": "25d6ad85b7ac0cbd118feee28e58320b"
  },
  {
    "url": "blog/skepticism/2017/01/22/index.html",
    "revision": "3d482650c40a697d842a7744d4eacc69"
  },
  {
    "url": "blog/skepticism/2017/01/22/scientology/index.html",
    "revision": "05a558ca8f98f27435143bc7e283ecb9"
  },
  {
    "url": "blog/skepticism/2017/01/29/creation/index.html",
    "revision": "0b21a9e15163e105ae1bdb03b090ffb9"
  },
  {
    "url": "blog/skepticism/2017/01/29/index.html",
    "revision": "83f1d9bed6643f56a41b7078c16980e1"
  },
  {
    "url": "blog/skepticism/2017/01/index.html",
    "revision": "17dd728974391f1b2def42d546d44478"
  },
  {
    "url": "blog/skepticism/2017/02/05/fraudster/index.html",
    "revision": "6c1ad757410a4ba48925c9ab7f0e4e9c"
  },
  {
    "url": "blog/skepticism/2017/02/05/gervais/index.html",
    "revision": "a9409811312ee9cf3d29c6ff06f69890"
  },
  {
    "url": "blog/skepticism/2017/02/05/index.html",
    "revision": "d80a8d6a6a6f80359f4af3bf4e79df4a"
  },
  {
    "url": "blog/skepticism/2017/02/05/scientology/index.html",
    "revision": "1b3dd11ce318c1a2b15f2af1d0718325"
  },
  {
    "url": "blog/skepticism/2017/02/19/homeopathy/index.html",
    "revision": "da5ec53f73199afab67f5049911c7f43"
  },
  {
    "url": "blog/skepticism/2017/02/19/index.html",
    "revision": "792053b7bdeff7c61e2ade8940e1127c"
  },
  {
    "url": "blog/skepticism/2017/02/19/lottery/index.html",
    "revision": "d7c1d0928485a029d9c4d0b126230842"
  },
  {
    "url": "blog/skepticism/2017/02/19/vaxxed/index.html",
    "revision": "353d725cee7fb252fcef635c8a0fe3d7"
  },
  {
    "url": "blog/skepticism/2017/02/19/whales/index.html",
    "revision": "50cfda834cb693d3097dc7fdce2918ef"
  },
  {
    "url": "blog/skepticism/2017/02/index.html",
    "revision": "b52c0ee22191acc6f6b40a3000939b42"
  },
  {
    "url": "blog/skepticism/2017/03/05/index.html",
    "revision": "83c20f90b1bfb723c2d673822078cfcd"
  },
  {
    "url": "blog/skepticism/2017/03/05/rea/index.html",
    "revision": "a9b6ca7df5ab0873d684ecf0e9fb5d20"
  },
  {
    "url": "blog/skepticism/2017/03/19/fake/index.html",
    "revision": "5aea59c6184f1f29156b30ee2dc5d60d"
  },
  {
    "url": "blog/skepticism/2017/03/19/index.html",
    "revision": "976f94d092c770d45e1027ad5a4233f3"
  },
  {
    "url": "blog/skepticism/2017/03/19/murder/index.html",
    "revision": "ecda3d77c430c119433ebd3fd2f76e1c"
  },
  {
    "url": "blog/skepticism/2017/03/26/census/index.html",
    "revision": "7c09131c0d5bea29a19d50ccdd24ebb2"
  },
  {
    "url": "blog/skepticism/2017/03/26/index.html",
    "revision": "10217d3ed719822ce290ff231aee7138"
  },
  {
    "url": "blog/skepticism/2017/03/26/nzmj/index.html",
    "revision": "6ae8ff5362156720faf0cfa77e196860"
  },
  {
    "url": "blog/skepticism/2017/03/26/shaquille/index.html",
    "revision": "f398e9803123abc19b9748550d85c427"
  },
  {
    "url": "blog/skepticism/2017/03/index.html",
    "revision": "b81173606a0603cbde3c1ad506827172"
  },
  {
    "url": "blog/skepticism/2017/04/02/index.html",
    "revision": "9380e53cb83bf18206594df9d95b96e8"
  },
  {
    "url": "blog/skepticism/2017/04/02/nasa/index.html",
    "revision": "82ea393fb86642106d14a4d095a717ae"
  },
  {
    "url": "blog/skepticism/2017/04/02/science/index.html",
    "revision": "0666ae2fedef959b036b32a6820ba6fb"
  },
  {
    "url": "blog/skepticism/2017/04/02/vaxxed/index.html",
    "revision": "589ac316902dd7cc6744f688e9a937fd"
  },
  {
    "url": "blog/skepticism/2017/04/09/index.html",
    "revision": "39809888df0b53597889f0733e10e8ee"
  },
  {
    "url": "blog/skepticism/2017/04/09/tekiri/index.html",
    "revision": "bf396145f724a59fcac9b1b8f719beba"
  },
  {
    "url": "blog/skepticism/2017/04/09/vaxxed/index.html",
    "revision": "364afef2251ed36d3896b89e9a6b455f"
  },
  {
    "url": "blog/skepticism/2017/04/23/arise/index.html",
    "revision": "afcab8594d6b67a0a66378b3cac4aecc"
  },
  {
    "url": "blog/skepticism/2017/04/23/index.html",
    "revision": "aad70f26472563f921d2804acfbde9f8"
  },
  {
    "url": "blog/skepticism/2017/04/23/kelvin/index.html",
    "revision": "8a36af971dfb558f3ceca03eac879142"
  },
  {
    "url": "blog/skepticism/2017/04/index.html",
    "revision": "27060c9c72cd1f94edbd3c55c6a01052"
  },
  {
    "url": "blog/skepticism/2017/05/07/cancer/index.html",
    "revision": "5b7fe9ba96543e352882ed68568afac7"
  },
  {
    "url": "blog/skepticism/2017/05/07/index.html",
    "revision": "c5127cb0d2c003673e4e49d56f55771d"
  },
  {
    "url": "blog/skepticism/2017/05/07/nigel/index.html",
    "revision": "962dcc4c6ae52de28a6c9fe67cebea18"
  },
  {
    "url": "blog/skepticism/2017/05/21/blasphemy/index.html",
    "revision": "7cf68fc5f4fdcddf938471c8b27879c5"
  },
  {
    "url": "blog/skepticism/2017/05/21/flat/index.html",
    "revision": "0dbdc079a6af47435716abf9d6fdeb0a"
  },
  {
    "url": "blog/skepticism/2017/05/21/index.html",
    "revision": "c465de329e354f131e0a25a0343a81fe"
  },
  {
    "url": "blog/skepticism/2017/05/21/maori/index.html",
    "revision": "4eb8d921cc9886868e5cbc0582f2bbe3"
  },
  {
    "url": "blog/skepticism/2017/05/index.html",
    "revision": "160082cb60aba527948664d503270ae6"
  },
  {
    "url": "blog/skepticism/2017/06/04/bigelow/index.html",
    "revision": "bcde3ab4ca7bc02ce7a0e0ee70023ae1"
  },
  {
    "url": "blog/skepticism/2017/06/04/climate/index.html",
    "revision": "ddb0794d9ba716e267901915a2dfcba4"
  },
  {
    "url": "blog/skepticism/2017/06/04/hansford/index.html",
    "revision": "b14f43880bdc61de33f3362d9715d858"
  },
  {
    "url": "blog/skepticism/2017/06/04/index.html",
    "revision": "cea2dfe583d420394588e5bfff8e4845"
  },
  {
    "url": "blog/skepticism/2017/06/04/wasp/index.html",
    "revision": "404062c9df56f2328ea0a70cc73da392"
  },
  {
    "url": "blog/skepticism/2017/06/11/colonic/index.html",
    "revision": "f195c8a995bbb3a1111a2d6ce1e9f2aa"
  },
  {
    "url": "blog/skepticism/2017/06/11/credulous/index.html",
    "revision": "8e1831556b6a42fb554d006b7d495743"
  },
  {
    "url": "blog/skepticism/2017/06/11/index.html",
    "revision": "e3df3a01dfa44d278c3e382bac8a8fa4"
  },
  {
    "url": "blog/skepticism/2017/06/11/journals/index.html",
    "revision": "7524e891a14ce8d47c72590bede230c6"
  },
  {
    "url": "blog/skepticism/2017/06/18/breatharians/index.html",
    "revision": "bcfd692aa28b7117f1aad72cf2989391"
  },
  {
    "url": "blog/skepticism/2017/06/18/fieldays/index.html",
    "revision": "b7fd942492a6ac1bb042439037dab84a"
  },
  {
    "url": "blog/skepticism/2017/06/18/index.html",
    "revision": "d5469d636bbe05c97031989e5151bac3"
  },
  {
    "url": "blog/skepticism/2017/06/18/jw/index.html",
    "revision": "46181436823f624aff7cb8dd1f228c25"
  },
  {
    "url": "blog/skepticism/2017/06/18/oil/index.html",
    "revision": "a87e8a482addeb50a1c0eadffaaedb46"
  },
  {
    "url": "blog/skepticism/2017/06/index.html",
    "revision": "f52ce9750e467f67e9d1c1c8f0db06b6"
  },
  {
    "url": "blog/skepticism/2017/07/02/baby/index.html",
    "revision": "177d40d4fef47b2adad0ab49f5743c42"
  },
  {
    "url": "blog/skepticism/2017/07/02/index.html",
    "revision": "8986835affbcc5e416859933b7363a91"
  },
  {
    "url": "blog/skepticism/2017/07/02/infowars/index.html",
    "revision": "b2d15f83c9b4b86c23ec60b72bd8bc1b"
  },
  {
    "url": "blog/skepticism/2017/07/02/scientology/index.html",
    "revision": "1a32071ee1ddabd3c7cf0e9fc81fed85"
  },
  {
    "url": "blog/skepticism/2017/07/16/bananas/index.html",
    "revision": "73be8ac6d59ddf46ad7d7ee366a9db32"
  },
  {
    "url": "blog/skepticism/2017/07/16/circles/index.html",
    "revision": "090175da915c4eff1dfde2ad45888eaf"
  },
  {
    "url": "blog/skepticism/2017/07/16/index.html",
    "revision": "15a1a050ba6de64aaeed279ae1363d77"
  },
  {
    "url": "blog/skepticism/2017/07/16/siggi/index.html",
    "revision": "c313c8518ff7825f03041c28b6b871fd"
  },
  {
    "url": "blog/skepticism/2017/07/16/vaxxed/index.html",
    "revision": "7bf5ffdb316311535b79ae4ecc645f5b"
  },
  {
    "url": "blog/skepticism/2017/07/30/bleach/index.html",
    "revision": "03a23c85c03a4734b905b135ac35e161"
  },
  {
    "url": "blog/skepticism/2017/07/30/bluebeam/index.html",
    "revision": "996c13d47c7fafcf39ef06b92f88fa3f"
  },
  {
    "url": "blog/skepticism/2017/07/30/index.html",
    "revision": "ff2a1467ead327e851921b9e0e496101"
  },
  {
    "url": "blog/skepticism/2017/07/30/police/index.html",
    "revision": "147ab193f2041b3a2d10d3421bb7ba18"
  },
  {
    "url": "blog/skepticism/2017/07/index.html",
    "revision": "65609d8eb1b2622abcae42eb7c8eca2a"
  },
  {
    "url": "blog/skepticism/2017/08/06/conned/index.html",
    "revision": "387ceb52c62f9a5ba4bc5e88bce196d8"
  },
  {
    "url": "blog/skepticism/2017/08/06/doll/index.html",
    "revision": "5b7e270d77338401e07938312b6b2ec8"
  },
  {
    "url": "blog/skepticism/2017/08/06/index.html",
    "revision": "08551d6b6550154bf4b89282aeb76196"
  },
  {
    "url": "blog/skepticism/2017/08/06/jacinda/index.html",
    "revision": "243ac4999116442a98b09187ff1810a0"
  },
  {
    "url": "blog/skepticism/2017/08/06/lotto/index.html",
    "revision": "bef4631848198fa2491fda414c229956"
  },
  {
    "url": "blog/skepticism/2017/08/27/index.html",
    "revision": "e8f87fc0586f705ac6bd533bcbfa120a"
  },
  {
    "url": "blog/skepticism/2017/08/27/naturopath/index.html",
    "revision": "7672b09f66cd0219b79b47a8ec97c142"
  },
  {
    "url": "blog/skepticism/2017/08/27/satanic/index.html",
    "revision": "ee960e24fa4284bba0e9f0dee53c69fd"
  },
  {
    "url": "blog/skepticism/2017/08/index.html",
    "revision": "c7701303abd0cc759f6e8daf239e47f7"
  },
  {
    "url": "blog/skepticism/2017/09/03/apocalypse/index.html",
    "revision": "7646a0c52cfc5aea0f49081d464edd60"
  },
  {
    "url": "blog/skepticism/2017/09/03/cancer/index.html",
    "revision": "4d6db16f04a0a447df773ca350e1e3ca"
  },
  {
    "url": "blog/skepticism/2017/09/03/index.html",
    "revision": "d7d938b86b71164197423530bfc03653"
  },
  {
    "url": "blog/skepticism/2017/09/03/rectangle/index.html",
    "revision": "74b3ca19d6740e7db1c2ebfb5e7ff013"
  },
  {
    "url": "blog/skepticism/2017/09/03/stargate/index.html",
    "revision": "8b2a8c6cfc73535c6df4bbbb224a2ff8"
  },
  {
    "url": "blog/skepticism/2017/09/index.html",
    "revision": "8f8911ff68a644ec63b8a46de0ba1f0b"
  },
  {
    "url": "blog/skepticism/2017/10/01/apocalypse/index.html",
    "revision": "2044a0baf5851a5dbd506583b357cc03"
  },
  {
    "url": "blog/skepticism/2017/10/01/freeman/index.html",
    "revision": "c965926656c815e002a5cd42e761a522"
  },
  {
    "url": "blog/skepticism/2017/10/01/index.html",
    "revision": "253a9febb75440152b84a1453ba968aa"
  },
  {
    "url": "blog/skepticism/2017/10/01/pharmacy/index.html",
    "revision": "aa905d894b7ad43f1e8c15f556bde776"
  },
  {
    "url": "blog/skepticism/2017/10/08/index.html",
    "revision": "5f8a226a5b58e24a6b9475ff4a23ded4"
  },
  {
    "url": "blog/skepticism/2017/10/08/pill/index.html",
    "revision": "baecf81d105e586d07d82712f23edb2d"
  },
  {
    "url": "blog/skepticism/2017/10/08/qsb/index.html",
    "revision": "1977fe454dd364cfb6d10e0ac054815d"
  },
  {
    "url": "blog/skepticism/2017/10/08/vegas/index.html",
    "revision": "2cc930730c09a19413a91ca808f6509e"
  },
  {
    "url": "blog/skepticism/2017/10/15/doterra/index.html",
    "revision": "e5201360ca1207df2d3e6e09e19b9f4f"
  },
  {
    "url": "blog/skepticism/2017/10/15/index.html",
    "revision": "ac8c4e9b93303fb263ddbcbd36489ccd"
  },
  {
    "url": "blog/skepticism/2017/10/15/lie/index.html",
    "revision": "8617324309ae987e26fbd89af71e5c8b"
  },
  {
    "url": "blog/skepticism/2017/10/15/soap/index.html",
    "revision": "375a0f0435ed9b07cedb91c8773d026f"
  },
  {
    "url": "blog/skepticism/2017/10/index.html",
    "revision": "b2749d9a0ea53cbc737b583a0fa5e623"
  },
  {
    "url": "blog/skepticism/2017/11/05/conference/index.html",
    "revision": "8e4a2864b485f1cb433fd34626f80cfe"
  },
  {
    "url": "blog/skepticism/2017/11/05/glyphosate/index.html",
    "revision": "02c9c474801033a0c883fc3b207fb958"
  },
  {
    "url": "blog/skepticism/2017/11/05/index.html",
    "revision": "1e48c6dcb600ff5587c982b9c1aa83fd"
  },
  {
    "url": "blog/skepticism/2017/11/05/stranded/index.html",
    "revision": "7613babf5c57c2e838a076cec893e4a9"
  },
  {
    "url": "blog/skepticism/2017/11/05/tracts/index.html",
    "revision": "3b1be028372b94332491457ff6aabd5a"
  },
  {
    "url": "blog/skepticism/2017/11/12/ghost/index.html",
    "revision": "17ae5583fa2451462fb1b4863d71600c"
  },
  {
    "url": "blog/skepticism/2017/11/12/green/index.html",
    "revision": "ac1e75fee2bdf3a106c58aa24620126e"
  },
  {
    "url": "blog/skepticism/2017/11/12/harassment/index.html",
    "revision": "bba1d8553d2d83ec0b31d35ddf20ae87"
  },
  {
    "url": "blog/skepticism/2017/11/12/index.html",
    "revision": "95f477bded89ad92853b5a1886edc529"
  },
  {
    "url": "blog/skepticism/2017/11/12/libby/index.html",
    "revision": "b5027873fde62e7aabdaf8e197f86fa7"
  },
  {
    "url": "blog/skepticism/2017/11/index.html",
    "revision": "cdd48b9d313f90fc5dba07f0a5c59283"
  },
  {
    "url": "blog/skepticism/2017/12/03/acupuncture/index.html",
    "revision": "32004b3625d1fe99ead7bf0c6e6f1f02"
  },
  {
    "url": "blog/skepticism/2017/12/03/denialism/index.html",
    "revision": "6706391f2cadd98c740132d54a85bd18"
  },
  {
    "url": "blog/skepticism/2017/12/03/dowsing/index.html",
    "revision": "7859c967df5455616896a97e8d7ce091"
  },
  {
    "url": "blog/skepticism/2017/12/03/holes/index.html",
    "revision": "b2b25a4d79966924b23a42dd1e6d9b36"
  },
  {
    "url": "blog/skepticism/2017/12/03/index.html",
    "revision": "75d3cd5159f78f224474a60d473f3286"
  },
  {
    "url": "blog/skepticism/2017/12/17/index.html",
    "revision": "1e31efeb4e4868d383be89d8b5cfeab2"
  },
  {
    "url": "blog/skepticism/2017/12/17/nhs/index.html",
    "revision": "47ad3e3d09a2c2402e8f286840afa2c5"
  },
  {
    "url": "blog/skepticism/2017/12/17/oto/index.html",
    "revision": "6f5af90e230133907dac0807863699ab"
  },
  {
    "url": "blog/skepticism/2017/12/17/pastafarian/index.html",
    "revision": "91f93c2fae97aab545880c11f3066510"
  },
  {
    "url": "blog/skepticism/2017/12/17/shc/index.html",
    "revision": "cbaefd778837caee5a6942b0a352bbab"
  },
  {
    "url": "blog/skepticism/2017/12/17/wellworks/index.html",
    "revision": "6d7a6640bb8d5deb61c03eb1efee99e8"
  },
  {
    "url": "blog/skepticism/2017/12/index.html",
    "revision": "36c3f53086462c0a8f9b7bf01dad1255"
  },
  {
    "url": "blog/skepticism/2017/index.html",
    "revision": "c29c376e9dbda44cc438fa9b17f0dbd1"
  },
  {
    "url": "blog/skepticism/2018/01/21/grounding/index.html",
    "revision": "5ac38acabf3c26be5e35de0b07ddac48"
  },
  {
    "url": "blog/skepticism/2018/01/21/index.html",
    "revision": "ef3df2b72ace4d1c794563f8c009a9d0"
  },
  {
    "url": "blog/skepticism/2018/01/21/naturopath/index.html",
    "revision": "f4385481f8c351b53707c3cfbb89566f"
  },
  {
    "url": "blog/skepticism/2018/01/21/respen/index.html",
    "revision": "dd1123af0a2e736837294aeb46612a36"
  },
  {
    "url": "blog/skepticism/2018/01/28/bears/index.html",
    "revision": "4b51c34257d6badd1756c39e41e63ba0"
  },
  {
    "url": "blog/skepticism/2018/01/28/index.html",
    "revision": "5b98db143afdadc38c9c045fd78ad931"
  },
  {
    "url": "blog/skepticism/2018/01/28/peppering/index.html",
    "revision": "4ef7912969cd5f848779895290ec3329"
  },
  {
    "url": "blog/skepticism/2018/01/28/pet/index.html",
    "revision": "c9f225f898f75e091561f4c790f13c9c"
  },
  {
    "url": "blog/skepticism/2018/01/28/quake/index.html",
    "revision": "3bcfedcee88eee571378618d8a92380b"
  },
  {
    "url": "blog/skepticism/2018/01/28/scientology/index.html",
    "revision": "55576e58d5b1b52dfa0cca211fc61afb"
  },
  {
    "url": "blog/skepticism/2018/01/index.html",
    "revision": "620cd8727db7e706af0ce227114e11c0"
  },
  {
    "url": "blog/skepticism/2018/02/11/asa/index.html",
    "revision": "8e6efa88faf60d78474d498674ddbcfb"
  },
  {
    "url": "blog/skepticism/2018/02/11/cannabis/index.html",
    "revision": "4da4c27032b7c0da151dae4b4417a3b0"
  },
  {
    "url": "blog/skepticism/2018/02/11/elon/index.html",
    "revision": "22eee3e75c010732931b3392fb562638"
  },
  {
    "url": "blog/skepticism/2018/02/11/homeopathy/index.html",
    "revision": "fc1f7f19afdbf2d47df1e82614b490fe"
  },
  {
    "url": "blog/skepticism/2018/02/11/index.html",
    "revision": "a3c42a9bc6237bb66d58a7961e655d01"
  },
  {
    "url": "blog/skepticism/2018/02/11/water/index.html",
    "revision": "35e090a4ca600359a09d65f70ac9f727"
  },
  {
    "url": "blog/skepticism/2018/02/25/crisis/index.html",
    "revision": "a6d746d22a1593a8070b8e1c9fec42f7"
  },
  {
    "url": "blog/skepticism/2018/02/25/eggs/index.html",
    "revision": "7ca7212949a4c563c6f2d9e20cb8af31"
  },
  {
    "url": "blog/skepticism/2018/02/25/fsm/index.html",
    "revision": "a93d2a7ade689d8026696162cfb0ff1b"
  },
  {
    "url": "blog/skepticism/2018/02/25/index.html",
    "revision": "e413632156563684c2da6231e739aaa2"
  },
  {
    "url": "blog/skepticism/2018/02/25/number/index.html",
    "revision": "26a1ed5f19f78d4d49d4b51e75c1f364"
  },
  {
    "url": "blog/skepticism/2018/02/25/quackery/index.html",
    "revision": "c54362997990d4b92ff90d012a5e1cbc"
  },
  {
    "url": "blog/skepticism/2018/02/index.html",
    "revision": "387419e87bf4dd26761100aab249dff6"
  },
  {
    "url": "blog/skepticism/2018/03/11/ai/index.html",
    "revision": "94723bd52451e46e3c0885d7655cb17f"
  },
  {
    "url": "blog/skepticism/2018/03/11/index.html",
    "revision": "cc765690b82bbd4ec7e50932bf3b8ec9"
  },
  {
    "url": "blog/skepticism/2018/03/11/radiation/index.html",
    "revision": "7acfa36e88a2fa109498d8915573f008"
  },
  {
    "url": "blog/skepticism/2018/03/11/reiki/index.html",
    "revision": "b17c5fad6d1784accaad6c8234233dbd"
  },
  {
    "url": "blog/skepticism/2018/03/11/ufo/index.html",
    "revision": "bc40452f464ead989d69d6d528a736ec"
  },
  {
    "url": "blog/skepticism/2018/03/18/ghost/index.html",
    "revision": "d61ae604ee4195e34f067563783e7398"
  },
  {
    "url": "blog/skepticism/2018/03/18/index.html",
    "revision": "86d3c6b1e283219ca4433f6b2b714b66"
  },
  {
    "url": "blog/skepticism/2018/03/18/psychic/index.html",
    "revision": "0deafc8035442b9c3f83e09feafc2d0a"
  },
  {
    "url": "blog/skepticism/2018/03/18/quack/index.html",
    "revision": "754229084a5d22a1e90bda4c562369d4"
  },
  {
    "url": "blog/skepticism/2018/03/18/radiation/index.html",
    "revision": "f381529afca2da29c681f19bda85993c"
  },
  {
    "url": "blog/skepticism/2018/03/index.html",
    "revision": "c12b7c629a486815792e123c1df03dea"
  },
  {
    "url": "blog/skepticism/2018/04/08/calocurb/index.html",
    "revision": "b7888fa718b9437a9aa17d1be6658895"
  },
  {
    "url": "blog/skepticism/2018/04/08/cam/index.html",
    "revision": "08473b66b2b6c492b8d915f2fbef15a9"
  },
  {
    "url": "blog/skepticism/2018/04/08/index.html",
    "revision": "e35fef05ed01565cf04e8fed2c7ef103"
  },
  {
    "url": "blog/skepticism/2018/04/08/psychic/index.html",
    "revision": "1a944b7c06a47c234ef7cbef92a8c3fb"
  },
  {
    "url": "blog/skepticism/2018/04/08/vaccines/index.html",
    "revision": "52f23f5213a4243f76f9f696f06e9fc0"
  },
  {
    "url": "blog/skepticism/2018/04/15/coffee/index.html",
    "revision": "d704e6eae341d524cff385b6f4a03879"
  },
  {
    "url": "blog/skepticism/2018/04/15/ignorance/index.html",
    "revision": "c539b5015e1d5d4ec53a0cc27e22173d"
  },
  {
    "url": "blog/skepticism/2018/04/15/index.html",
    "revision": "8c70cd2e6c8e8c575e74204feafc36c5"
  },
  {
    "url": "blog/skepticism/2018/04/15/nasa/index.html",
    "revision": "9c27f941d64611d1ac1b8726c3680cc4"
  },
  {
    "url": "blog/skepticism/2018/04/15/tapu/index.html",
    "revision": "2fe02e5e5e005f87dfdbc4ab504dd83c"
  },
  {
    "url": "blog/skepticism/2018/04/29/google/index.html",
    "revision": "df33d8f01a081b7cbb4186a65d790952"
  },
  {
    "url": "blog/skepticism/2018/04/29/homeopathy/index.html",
    "revision": "686a2cec0e5794a79decb2b7d4874f8d"
  },
  {
    "url": "blog/skepticism/2018/04/29/index.html",
    "revision": "e96246974f805f4e67a0980039051c9b"
  },
  {
    "url": "blog/skepticism/2018/04/29/ken/index.html",
    "revision": "03ec63e4be4fe20c0491a8fb08cf76f6"
  },
  {
    "url": "blog/skepticism/2018/04/29/v2k/index.html",
    "revision": "4e5cc6ed1d4a16233d63374e9243e812"
  },
  {
    "url": "blog/skepticism/2018/04/index.html",
    "revision": "87b6934971a1558888428834e3ad8eea"
  },
  {
    "url": "blog/skepticism/2018/05/13/astrology/index.html",
    "revision": "d7aa33e81f07ebc0963bbfe8446021c6"
  },
  {
    "url": "blog/skepticism/2018/05/13/crystals/index.html",
    "revision": "77ad194799982d0c11de06b0fce9f03e"
  },
  {
    "url": "blog/skepticism/2018/05/13/dawkins/index.html",
    "revision": "a62452a82f9f6e7bb9f016ce4bc29002"
  },
  {
    "url": "blog/skepticism/2018/05/13/index.html",
    "revision": "ca5662e41553cdac65fcd52dec8a5cd1"
  },
  {
    "url": "blog/skepticism/2018/05/13/kangen/index.html",
    "revision": "2b98960e84b20ae2cbd24002da6f726c"
  },
  {
    "url": "blog/skepticism/2018/05/13/vitamins/index.html",
    "revision": "ad6d5fac81acc4e654f824898b6d4b3a"
  },
  {
    "url": "blog/skepticism/2018/05/27/flat/index.html",
    "revision": "a5bb5e19125b7b9266c0ace97c0397a3"
  },
  {
    "url": "blog/skepticism/2018/05/27/index.html",
    "revision": "fce5e4b08a0921a9db960d7d5c5a6ba5"
  },
  {
    "url": "blog/skepticism/2018/05/27/kangen/index.html",
    "revision": "00dc38164b987ce58160af4f5ad2363e"
  },
  {
    "url": "blog/skepticism/2018/05/27/ness/index.html",
    "revision": "04d2398ef0ada26450d4e7fcc89684fd"
  },
  {
    "url": "blog/skepticism/2018/05/27/oz/index.html",
    "revision": "5090f160f8f91ecae90fff3fd0bb5347"
  },
  {
    "url": "blog/skepticism/2018/05/27/psychic/index.html",
    "revision": "f4abf5df8621e2110ceebe1d689ed666"
  },
  {
    "url": "blog/skepticism/2018/05/index.html",
    "revision": "14c0242ec70f6c6a44b08ee1c93b3d9c"
  },
  {
    "url": "blog/skepticism/2018/06/10/astrology/index.html",
    "revision": "ae963a782fa0d9bb2e2424b64534ca7c"
  },
  {
    "url": "blog/skepticism/2018/06/10/index.html",
    "revision": "cf47d156421c197b439de2a172c5b53f"
  },
  {
    "url": "blog/skepticism/2018/06/10/nhs/index.html",
    "revision": "8f7594c12ffc3ea0551fa4b0f7eda57b"
  },
  {
    "url": "blog/skepticism/2018/06/10/shakti/index.html",
    "revision": "ea4958a2d80c05dc6309fbc0920814fb"
  },
  {
    "url": "blog/skepticism/2018/06/10/weetbix/index.html",
    "revision": "ce2a4dc5fa3a30fe6fac9f7e9bf7e002"
  },
  {
    "url": "blog/skepticism/2018/06/24/blasphemy/index.html",
    "revision": "d924897d64ce2616fcc85674e2b19970"
  },
  {
    "url": "blog/skepticism/2018/06/24/cannabis/index.html",
    "revision": "fbac5154c23450c3ce8282f5c19c4061"
  },
  {
    "url": "blog/skepticism/2018/06/24/hotdog/index.html",
    "revision": "11d505d322721a5cb08002e720e03f5f"
  },
  {
    "url": "blog/skepticism/2018/06/24/index.html",
    "revision": "bf701d6683acdec5bb12a65599407d4b"
  },
  {
    "url": "blog/skepticism/2018/06/24/led/index.html",
    "revision": "1b9804805b004f7df11cf7fbe4dfc306"
  },
  {
    "url": "blog/skepticism/2018/06/index.html",
    "revision": "8c2e62e1a344145ce2e3bb5f7d1fd7b9"
  },
  {
    "url": "blog/skepticism/2018/07/08/bullet/index.html",
    "revision": "4ba6a1044c1f06f1ae47eba934951251"
  },
  {
    "url": "blog/skepticism/2018/07/08/chiros/index.html",
    "revision": "c596bcc15ded40eaa485e27dd7d30363"
  },
  {
    "url": "blog/skepticism/2018/07/08/hiv/index.html",
    "revision": "c5692eee192d99ae86480b603e9c5202"
  },
  {
    "url": "blog/skepticism/2018/07/08/hrv/index.html",
    "revision": "9b45d5922cc714b62c3f7b8e8354926e"
  },
  {
    "url": "blog/skepticism/2018/07/08/index.html",
    "revision": "e218c85a5526cdaa6fbb8115d595d124"
  },
  {
    "url": "blog/skepticism/2018/07/22/cancer/index.html",
    "revision": "c154abe6516d030dbbe541c36497acc3"
  },
  {
    "url": "blog/skepticism/2018/07/22/index.html",
    "revision": "573edce0fc372afa967dc59db0262e3f"
  },
  {
    "url": "blog/skepticism/2018/07/22/resurrection/index.html",
    "revision": "206c379487459c7397b825b452a0f1d0"
  },
  {
    "url": "blog/skepticism/2018/07/22/talc/index.html",
    "revision": "b17543a809f59e487bd3376344be02b7"
  },
  {
    "url": "blog/skepticism/2018/07/22/visas/index.html",
    "revision": "3d9f8a830d11d67df8903e1f2ff6d8d2"
  },
  {
    "url": "blog/skepticism/2018/07/index.html",
    "revision": "8b5a05f74f457ae7c224b7a0b7d8944f"
  },
  {
    "url": "blog/skepticism/2018/08/05/conf/index.html",
    "revision": "9de32b3c5a7426b9c5c82ac357faf74c"
  },
  {
    "url": "blog/skepticism/2018/08/05/index.html",
    "revision": "976233615b4f755ecc9189e906d31431"
  },
  {
    "url": "blog/skepticism/2018/08/05/qanon/index.html",
    "revision": "ab50fc7b62251163c69fa8f266e8f1be"
  },
  {
    "url": "blog/skepticism/2018/08/19/index.html",
    "revision": "6e81435baf0feb81798380beaf359b37"
  },
  {
    "url": "blog/skepticism/2018/08/19/jw/index.html",
    "revision": "65cbbc76cfe5199c41bd84109064ccfa"
  },
  {
    "url": "blog/skepticism/2018/08/index.html",
    "revision": "eef4e2e2b0adf30676880257ec57024c"
  },
  {
    "url": "blog/skepticism/2018/09/02/allergy/index.html",
    "revision": "d5ffc6fe527d399656e49fe8e33320bf"
  },
  {
    "url": "blog/skepticism/2018/09/02/catholic/index.html",
    "revision": "1527385acc1dec6fdd44c7fc9c100e4b"
  },
  {
    "url": "blog/skepticism/2018/09/02/index.html",
    "revision": "5241f23b33c05c369651b2e1076cacf3"
  },
  {
    "url": "blog/skepticism/2018/09/02/jw/index.html",
    "revision": "006b2dedf2a279a24e6e29ffd080c156"
  },
  {
    "url": "blog/skepticism/2018/09/02/sen/index.html",
    "revision": "5f80de00b6b58ad1c31001490c71a2b8"
  },
  {
    "url": "blog/skepticism/2018/09/16/1080/index.html",
    "revision": "afceab85b6ad9aec6944c6be76356e20"
  },
  {
    "url": "blog/skepticism/2018/09/16/church/index.html",
    "revision": "a61ab874ff0ac6fdd508dc37765e2b36"
  },
  {
    "url": "blog/skepticism/2018/09/16/index.html",
    "revision": "7c9850a048e6f061c17fede8c19a8558"
  },
  {
    "url": "blog/skepticism/2018/09/16/jones/index.html",
    "revision": "a4c195e2f7b1d8fdac0da8c35f11cf6f"
  },
  {
    "url": "blog/skepticism/2018/09/16/scammers/index.html",
    "revision": "b336019341668496b760f72b69455499"
  },
  {
    "url": "blog/skepticism/2018/09/30/index.html",
    "revision": "7edc966c0788b98950feac1e634c1595"
  },
  {
    "url": "blog/skepticism/2018/09/30/jw/index.html",
    "revision": "36c6a5fffb97afe5cc15219e2105316b"
  },
  {
    "url": "blog/skepticism/2018/09/30/oto/index.html",
    "revision": "8e91ed046bc2689cadc908ff7534d454"
  },
  {
    "url": "blog/skepticism/2018/09/30/who/index.html",
    "revision": "e8b7b48152c9bf20747febeb005ca61d"
  },
  {
    "url": "blog/skepticism/2018/09/index.html",
    "revision": "67351993f1d55f2cdb7288221157955d"
  },
  {
    "url": "blog/skepticism/2018/10/14/hacked/index.html",
    "revision": "6d590f5f7c84922fbfb7156f3f7d2ff3"
  },
  {
    "url": "blog/skepticism/2018/10/14/index.html",
    "revision": "798094cbd93e0b8a82a50962b2613eb6"
  },
  {
    "url": "blog/skepticism/2018/10/14/kangen/index.html",
    "revision": "cfeb91d48d91839fc718c383ab4de8f8"
  },
  {
    "url": "blog/skepticism/2018/10/14/pakistan/index.html",
    "revision": "44469f55a9aaa999c912c592106e5d73"
  },
  {
    "url": "blog/skepticism/2018/10/14/sarah/index.html",
    "revision": "07a1c53072b04b8559095a8df20fd8f9"
  },
  {
    "url": "blog/skepticism/2018/10/28/blasphemy/index.html",
    "revision": "a072e45257a62faa998a33e326deedd4"
  },
  {
    "url": "blog/skepticism/2018/10/28/hrv/index.html",
    "revision": "695b9a50e1d92146d911b3f4700ff1a0"
  },
  {
    "url": "blog/skepticism/2018/10/28/index.html",
    "revision": "d15ed0d7c557e6a52fe5781d2571a63c"
  },
  {
    "url": "blog/skepticism/2018/10/28/jesus/index.html",
    "revision": "c43a9585403f4413f3b21160aee954da"
  },
  {
    "url": "blog/skepticism/2018/10/28/natural/index.html",
    "revision": "4108cfe6042a6bd0ab387232cd315b8f"
  },
  {
    "url": "blog/skepticism/2018/10/index.html",
    "revision": "b2b0e2fe0f2d3b37a0f701c46ab720c7"
  },
  {
    "url": "blog/skepticism/2018/11/04/bibi/index.html",
    "revision": "9baaf1cb3d07d40beefee38694f5ef4f"
  },
  {
    "url": "blog/skepticism/2018/11/04/index.html",
    "revision": "09140f8bcc7efb555accb50af5557cc7"
  },
  {
    "url": "blog/skepticism/2018/11/04/jesus/index.html",
    "revision": "e204760c1b1bb413fa58d6a9d42bb247"
  },
  {
    "url": "blog/skepticism/2018/11/04/obdii/index.html",
    "revision": "5e2d20445dfe562bd181c776588f0866"
  },
  {
    "url": "blog/skepticism/2018/11/04/sleepdrops/index.html",
    "revision": "418f6b3044cee421668d5eee9e69ac2b"
  },
  {
    "url": "blog/skepticism/2018/11/index.html",
    "revision": "31bdfe27fd83c370b4b96ddf6a62811e"
  },
  {
    "url": "blog/skepticism/2018/12/02/ark/index.html",
    "revision": "0e6a9d205bc8e0b6eb6aa9c802a66f15"
  },
  {
    "url": "blog/skepticism/2018/12/02/green/index.html",
    "revision": "e7351631d45fc14f906709306c29c455"
  },
  {
    "url": "blog/skepticism/2018/12/02/index.html",
    "revision": "b0708d43fc12a87df7781bbcfbfac2ae"
  },
  {
    "url": "blog/skepticism/2018/12/02/ri/index.html",
    "revision": "4614fd8976da106ba9c7c26bf2a45c07"
  },
  {
    "url": "blog/skepticism/2018/12/16/blasphemy/index.html",
    "revision": "448c2f3b91689b4fdc4ff8817563175a"
  },
  {
    "url": "blog/skepticism/2018/12/16/index.html",
    "revision": "0cbfbbd4828b694798cd94d2249a2d99"
  },
  {
    "url": "blog/skepticism/2018/12/16/sleepdrops/index.html",
    "revision": "9cde39671967ed9490e5200d2def0b62"
  },
  {
    "url": "blog/skepticism/2018/12/16/tekiri/index.html",
    "revision": "85506a3950dec2b8ba6e5d2d35a75fe3"
  },
  {
    "url": "blog/skepticism/2018/12/index.html",
    "revision": "042ba64c873e90ba430f0dd15e6f4da1"
  },
  {
    "url": "blog/skepticism/2018/index.html",
    "revision": "60069777a6bfec175041c783e360156f"
  },
  {
    "url": "blog/skepticism/index.html",
    "revision": "47f0fadd34cd3e4b07964f4f224a0be5"
  },
  {
    "url": "blog/tag/index.html",
    "revision": "4d5ca3386a875dde4d65cb5d518a2ab4"
  },
  {
    "url": "contact/index.html",
    "revision": "da04bac25e1b1a03bebf97b122e8bd27"
  },
  {
    "url": "cv/cover/index.html",
    "revision": "9a5a335b2a0343bc5ddf82a2f7992a96"
  },
  {
    "url": "cv/index.html",
    "revision": "50d32c88753a5a6958ecbb2b2def624c"
  },
  {
    "url": "googlee25d0c06da891164.html",
    "revision": "0defe75660212f417b90c5affcd03380"
  },
  {
    "url": "index.html",
    "revision": "4c4165d30387567c0253d29ca49f5274"
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
    "revision": "776a9e257b62d7de54e30aeb70839018"
  },
  {
    "url": "media/me/index.html",
    "revision": "2d3087bf022111017e17bed0d8c03d5b"
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
    "revision": "0b9da452f3de1dbaeb2c66ed7a5f9ff8"
  },
  {
    "url": "status/index.html",
    "revision": "72e7f738dc03c1ea6beca1dd68612b64"
  },
  {
    "url": "status/steam/index.html",
    "revision": "b0434dc5a372c0e77a8f98ea36be8b82"
  },
  {
    "url": "status/twitter/index.html",
    "revision": "08cc77c8d28a6b3fac4e56bc8728c4eb"
  },
  {
    "url": "status/wikipedia/index.html",
    "revision": "6d55dea721f8f1a766ac78793aa7d5bd"
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
