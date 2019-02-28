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
    "revision": "2ecfa14df85d2e33cbe43a99bb8d70e1"
  },
  {
    "url": "assets/css/0.styles.css",
    "revision": "3cbf748a42f71b625e10276d4d5efea6"
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
    "revision": "a0507ca03ac57ab0c21a4ed5db93b5af"
  },
  {
    "url": "assets/js/100.js",
    "revision": "45501081b34fe734babb45784ce60bdf"
  },
  {
    "url": "assets/js/101.js",
    "revision": "809dccbf763b201c2868d86a7f269a22"
  },
  {
    "url": "assets/js/102.js",
    "revision": "8742d3fab3bab37268da9f8f254ea59d"
  },
  {
    "url": "assets/js/103.js",
    "revision": "875d5a28c9d2260db0c91081d422cc25"
  },
  {
    "url": "assets/js/104.js",
    "revision": "eb6045c26866a84ef47d5a6f3ee8aba1"
  },
  {
    "url": "assets/js/105.js",
    "revision": "67dbde3ac1b453e6e296a7f586decbad"
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
    "revision": "20c85ba56202fd378cc6b0495889f3fa"
  },
  {
    "url": "assets/js/109.js",
    "revision": "0a94c053acf7e00a02a7a3e2dcd5b1a1"
  },
  {
    "url": "assets/js/11.js",
    "revision": "9c52a4818da048d65fc7bfa060fce492"
  },
  {
    "url": "assets/js/110.js",
    "revision": "e6513399280574ee48c09331f6d6c524"
  },
  {
    "url": "assets/js/111.js",
    "revision": "c1f6e2ceba6e93f68fcc087709945fad"
  },
  {
    "url": "assets/js/112.js",
    "revision": "2cfe6ef40cff0434b569e4d40e786f1f"
  },
  {
    "url": "assets/js/113.js",
    "revision": "6328aa9095c51cde954b77d8a2df0cfa"
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
    "revision": "12c3958163736cc759d9a7e25f35f788"
  },
  {
    "url": "assets/js/118.js",
    "revision": "bb25ff36528599ff270e70e73d865fff"
  },
  {
    "url": "assets/js/119.js",
    "revision": "f15ee97586dc3b751ce74ebd519348b8"
  },
  {
    "url": "assets/js/12.js",
    "revision": "aaa5edb8ae8df20d7334c2fb8ea531ce"
  },
  {
    "url": "assets/js/120.js",
    "revision": "79087fc1cebd8a8ac337d5be15c171af"
  },
  {
    "url": "assets/js/121.js",
    "revision": "a7e35b5639b40a9c81851d454efca851"
  },
  {
    "url": "assets/js/122.js",
    "revision": "c42ff3053e4df99ca3bca79bc5ce40b6"
  },
  {
    "url": "assets/js/123.js",
    "revision": "48954d0699e5ea246cb67d0d9a51041c"
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
    "revision": "fa51f942d86cf8e297b436e1e7071a01"
  },
  {
    "url": "assets/js/127.js",
    "revision": "6769eb3262b21d4a222b26abf8c5f5ed"
  },
  {
    "url": "assets/js/128.js",
    "revision": "c3827ba696810923406ab05bfc838610"
  },
  {
    "url": "assets/js/129.js",
    "revision": "79486b34b3eca983d066f905dde6fe69"
  },
  {
    "url": "assets/js/13.js",
    "revision": "6941e378bbbf5084c2324632923079d8"
  },
  {
    "url": "assets/js/130.js",
    "revision": "c0a0de38f1ff2058c07e16ba3f824109"
  },
  {
    "url": "assets/js/131.js",
    "revision": "820ac7f378be77acdf02b7045dce9617"
  },
  {
    "url": "assets/js/132.js",
    "revision": "fd587e1552b532d147faf098f0623f45"
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
    "revision": "cdce7fd56d778ccb0c2b6152fb57ef32"
  },
  {
    "url": "assets/js/137.js",
    "revision": "937ecfdfbf83b15ec971e2bae1521adc"
  },
  {
    "url": "assets/js/138.js",
    "revision": "ec3301746075cdd320361a3a13f3fad7"
  },
  {
    "url": "assets/js/139.js",
    "revision": "44227aa42e1c1f4561858fb0096e81f2"
  },
  {
    "url": "assets/js/14.js",
    "revision": "5c32c08cade00cdf03dcfbd735c2820b"
  },
  {
    "url": "assets/js/140.js",
    "revision": "9dea549712d33512c55fe998ba534c12"
  },
  {
    "url": "assets/js/141.js",
    "revision": "7d83a11335fcc7216b7b574e1843c554"
  },
  {
    "url": "assets/js/142.js",
    "revision": "4d0ad6d1a160fbd0fcc3b0758b6b8dee"
  },
  {
    "url": "assets/js/143.js",
    "revision": "08cc64a8dfde6377f95eae99016aa976"
  },
  {
    "url": "assets/js/144.js",
    "revision": "25325e985d27dfeb2310df3309706173"
  },
  {
    "url": "assets/js/145.js",
    "revision": "8c75e2c377cfe45e70128866aa3ad0fe"
  },
  {
    "url": "assets/js/146.js",
    "revision": "1dabf723f75e90c20b115e278d894309"
  },
  {
    "url": "assets/js/147.js",
    "revision": "56311e311a1d4cb39a9b501fd335fc81"
  },
  {
    "url": "assets/js/148.js",
    "revision": "127acf5e1ead606b714f0aa9cf934db3"
  },
  {
    "url": "assets/js/149.js",
    "revision": "f47fc36954deba7f311646a19df24350"
  },
  {
    "url": "assets/js/15.js",
    "revision": "dc4533c6f1bc551a469fd2f0366c5915"
  },
  {
    "url": "assets/js/150.js",
    "revision": "7666f2867c9629971033e8814729bc7b"
  },
  {
    "url": "assets/js/151.js",
    "revision": "6596ed5b948e0548158f4d9f86e9ff28"
  },
  {
    "url": "assets/js/152.js",
    "revision": "d805c6ebd7b3326f1bb5c9f51f5097fd"
  },
  {
    "url": "assets/js/153.js",
    "revision": "25829b6ae9c2fba7d2905a5cafba9467"
  },
  {
    "url": "assets/js/154.js",
    "revision": "8216f71caaa8cf938720c183de99805f"
  },
  {
    "url": "assets/js/155.js",
    "revision": "625f4c766ac576f553418c886b0c6e91"
  },
  {
    "url": "assets/js/156.js",
    "revision": "fe71acf9bc0740d4f3eea1321b39d647"
  },
  {
    "url": "assets/js/157.js",
    "revision": "8a05a60b7eb6c114c5f573fbcb09f0e8"
  },
  {
    "url": "assets/js/158.js",
    "revision": "f7c680d3f856238f3700f7436483bd3b"
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
    "revision": "7356aa18580ac0985f8652c7391138d3"
  },
  {
    "url": "assets/js/161.js",
    "revision": "e11add27fa7bb0a385a00cc14f03a23a"
  },
  {
    "url": "assets/js/162.js",
    "revision": "dfd500f21ac5200ea23cb8a74ae705d1"
  },
  {
    "url": "assets/js/163.js",
    "revision": "e96f7e19360c9c6d3913c0217ffb8d56"
  },
  {
    "url": "assets/js/164.js",
    "revision": "dda8b15c41da8f57f92cc7b2b1de61a9"
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
    "revision": "2ecafe9d69343b84d369f85a4cc2f4ee"
  },
  {
    "url": "assets/js/168.js",
    "revision": "6edc0f98f8a121306b685f34c49646b1"
  },
  {
    "url": "assets/js/169.js",
    "revision": "1424dfc48896b0046fe42cd3bae9b389"
  },
  {
    "url": "assets/js/17.js",
    "revision": "eaeca50523e635ff6d9467fb0977e51d"
  },
  {
    "url": "assets/js/170.js",
    "revision": "11814917163e6df23dd134f159c388d8"
  },
  {
    "url": "assets/js/171.js",
    "revision": "edf4577a4624e547b0185485828bccd1"
  },
  {
    "url": "assets/js/172.js",
    "revision": "8f536d44164fa13d901731a5ef302684"
  },
  {
    "url": "assets/js/173.js",
    "revision": "baf07c472db526438836e94073241343"
  },
  {
    "url": "assets/js/174.js",
    "revision": "46795697c1fc5020373581dfd0339669"
  },
  {
    "url": "assets/js/175.js",
    "revision": "d472e8f54cea6fa42933d945243d0f37"
  },
  {
    "url": "assets/js/176.js",
    "revision": "a5d54a37d51d7d6f5e72b2d3f9e868a2"
  },
  {
    "url": "assets/js/177.js",
    "revision": "960002a342b6d42f2c884e94dae92880"
  },
  {
    "url": "assets/js/178.js",
    "revision": "d4312126431d0ed7a886bb06ff154c78"
  },
  {
    "url": "assets/js/179.js",
    "revision": "e84ed03d2b3df0eb22f2443d4845dea4"
  },
  {
    "url": "assets/js/18.js",
    "revision": "b108996eeb813fe09ac01c47533ca0d9"
  },
  {
    "url": "assets/js/180.js",
    "revision": "033b16fa3aaa128b24aa113e87b0e8d9"
  },
  {
    "url": "assets/js/181.js",
    "revision": "427e54bad4376f548d6ec83d2c06953f"
  },
  {
    "url": "assets/js/182.js",
    "revision": "420d89db50fbcb6dc53034bb42289aea"
  },
  {
    "url": "assets/js/183.js",
    "revision": "bcaef13ad6e68979d294758cb4afa58b"
  },
  {
    "url": "assets/js/184.js",
    "revision": "409182df187b5afa60e14cb8ba315fda"
  },
  {
    "url": "assets/js/185.js",
    "revision": "85e83606eb62b4cd7ef90d3780265a6a"
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
    "revision": "f726a7724307cc639dfbc78d93c6fb49"
  },
  {
    "url": "assets/js/189.js",
    "revision": "0ab53f6004f49cb44c0682269b587abb"
  },
  {
    "url": "assets/js/19.js",
    "revision": "010f1d888491b36e3931b98baf9a0397"
  },
  {
    "url": "assets/js/190.js",
    "revision": "f40892b2a7ffb7c77cab3de1c1bb8e04"
  },
  {
    "url": "assets/js/191.js",
    "revision": "c60a4cace6e58429fc332fe1e00f6b9f"
  },
  {
    "url": "assets/js/192.js",
    "revision": "9c347acd4b6e33508b0687cf8e0d90eb"
  },
  {
    "url": "assets/js/193.js",
    "revision": "c6c2b075202a0bdbcc1e6c98dd235064"
  },
  {
    "url": "assets/js/194.js",
    "revision": "399e3f805cedbb7ed520b7f2ee483148"
  },
  {
    "url": "assets/js/195.js",
    "revision": "c6f892f4ca6a721942cc1cd1517ba032"
  },
  {
    "url": "assets/js/196.js",
    "revision": "811c5886e07231c8d87bfa5f73c95faa"
  },
  {
    "url": "assets/js/197.js",
    "revision": "12576680a45bb97df3f93540c599cd01"
  },
  {
    "url": "assets/js/198.js",
    "revision": "da288febcc1a9d6bd5a2221e1773a7f1"
  },
  {
    "url": "assets/js/199.js",
    "revision": "05e8614b78523e1a63df606c49307d07"
  },
  {
    "url": "assets/js/2.js",
    "revision": "1053ea682b3c208f52835e8c82dcfe49"
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
    "revision": "b5f77e254bd9578bbbcffc05edc1a5e9"
  },
  {
    "url": "assets/js/202.js",
    "revision": "5c038a1187227d472e32a3be8cb8a419"
  },
  {
    "url": "assets/js/203.js",
    "revision": "a67e13eb8e0223396e4379bdcb97f26a"
  },
  {
    "url": "assets/js/204.js",
    "revision": "7c3cb94be3e8a2e28f9f5ff64dff701e"
  },
  {
    "url": "assets/js/205.js",
    "revision": "fd5cd28b8dec9f1e1355872a082f5541"
  },
  {
    "url": "assets/js/206.js",
    "revision": "a872aed66425c94e3a4426d9a75a440e"
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
    "revision": "fe367f12e1fcf73d7ac496bafa51c6a0"
  },
  {
    "url": "assets/js/21.js",
    "revision": "4f1e738e3f9ae43768c392eec7aaf6e0"
  },
  {
    "url": "assets/js/210.js",
    "revision": "764ce91d5d656ae79684a4e2bf56584c"
  },
  {
    "url": "assets/js/211.js",
    "revision": "ee8fd8a4d747f236e88fefb19822785b"
  },
  {
    "url": "assets/js/212.js",
    "revision": "c383fba56acacf47710cb38461bd75fb"
  },
  {
    "url": "assets/js/213.js",
    "revision": "323a33ed990988ab0979da05b0a93f02"
  },
  {
    "url": "assets/js/214.js",
    "revision": "3fad910002d1c77cf756c87446ca2e20"
  },
  {
    "url": "assets/js/215.js",
    "revision": "53ebc38f3b5ff212d639fc633f7f708c"
  },
  {
    "url": "assets/js/216.js",
    "revision": "3486dfb71dc3234b3fc43d3af540ae6f"
  },
  {
    "url": "assets/js/217.js",
    "revision": "de4eef8f939b091bdbb78f93719dafa3"
  },
  {
    "url": "assets/js/218.js",
    "revision": "feffe58034af2598e876408805055c2d"
  },
  {
    "url": "assets/js/219.js",
    "revision": "5d1094b77cb61f44e48e3cd95fff984b"
  },
  {
    "url": "assets/js/22.js",
    "revision": "99636c5a23961030b0eda864fd1afd6e"
  },
  {
    "url": "assets/js/220.js",
    "revision": "600c55d6fa59a67f8902decc2fdfa29d"
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
    "revision": "290bd98fec91b1ce0e8a3dee38aee11a"
  },
  {
    "url": "assets/js/226.js",
    "revision": "f0a1c6a6314faec97cf97a2d26dfb05d"
  },
  {
    "url": "assets/js/227.js",
    "revision": "642b8b9248cd8157c3dc6e968468acbb"
  },
  {
    "url": "assets/js/228.js",
    "revision": "b038b6ecc240e303942db3e0341d159f"
  },
  {
    "url": "assets/js/229.js",
    "revision": "00775992bb20eedad5af41d19ec7801e"
  },
  {
    "url": "assets/js/23.js",
    "revision": "d742b84bcc26fa8a0b48f8e772e5df26"
  },
  {
    "url": "assets/js/230.js",
    "revision": "149cd1591b82a5fb5c28dcf6f005ee6e"
  },
  {
    "url": "assets/js/231.js",
    "revision": "29a0f75f2690903a6d123f13a8eeeb70"
  },
  {
    "url": "assets/js/232.js",
    "revision": "97780ef4da418081a12d5af9e0794fd0"
  },
  {
    "url": "assets/js/233.js",
    "revision": "ca92c211f518fef67dff379dd45cc6d5"
  },
  {
    "url": "assets/js/234.js",
    "revision": "39e74a0d481f0e0c3b998ca138b25116"
  },
  {
    "url": "assets/js/235.js",
    "revision": "0a0b5f6dbf821503d513f91de7cdb897"
  },
  {
    "url": "assets/js/236.js",
    "revision": "c0222f7cb5978a26eb08af6ac3da5e30"
  },
  {
    "url": "assets/js/237.js",
    "revision": "f91f5569116e931670495b67aa6ed174"
  },
  {
    "url": "assets/js/238.js",
    "revision": "18dbe402c5ecc43aa2d79b4dbf6af525"
  },
  {
    "url": "assets/js/239.js",
    "revision": "de3c9e149d1017fa643e5abecb22ca55"
  },
  {
    "url": "assets/js/24.js",
    "revision": "a65d1176010e76c6ee9fade0e508df46"
  },
  {
    "url": "assets/js/240.js",
    "revision": "ae275f31f53bb637c8650521e862ea3b"
  },
  {
    "url": "assets/js/241.js",
    "revision": "95a685903c723206c3c3cae0bdac22d1"
  },
  {
    "url": "assets/js/242.js",
    "revision": "9ebeb526d2b466535af0ebed3c39c3ea"
  },
  {
    "url": "assets/js/243.js",
    "revision": "2c3894dbe458240cd5d0798378c786a1"
  },
  {
    "url": "assets/js/244.js",
    "revision": "e50b4861feffbad4e1718902e0837232"
  },
  {
    "url": "assets/js/245.js",
    "revision": "bb8c364149adecac77b660a96ad8cc86"
  },
  {
    "url": "assets/js/246.js",
    "revision": "f050eed606cbeadf035ff0a092983cdb"
  },
  {
    "url": "assets/js/247.js",
    "revision": "575785c91e98252858b425b0c6c6992d"
  },
  {
    "url": "assets/js/248.js",
    "revision": "c087ae9006e36ee8ea7d01bb0a88bdf2"
  },
  {
    "url": "assets/js/249.js",
    "revision": "ded7f071348d8f3016cf184be3251693"
  },
  {
    "url": "assets/js/25.js",
    "revision": "684347cc193eb1bcfa4136704ef88244"
  },
  {
    "url": "assets/js/250.js",
    "revision": "d58305793c23386b7aa126f90c1cc526"
  },
  {
    "url": "assets/js/251.js",
    "revision": "b515d30767d5290b644443425afd57ae"
  },
  {
    "url": "assets/js/252.js",
    "revision": "e557b4aada8c7b8755b871f4e96c7294"
  },
  {
    "url": "assets/js/253.js",
    "revision": "07e148b2ea04d92123e91bac99afb21c"
  },
  {
    "url": "assets/js/254.js",
    "revision": "f873396d616a87ad26cb626dfe18886f"
  },
  {
    "url": "assets/js/255.js",
    "revision": "765f70d699b93e3acaf27450cb770296"
  },
  {
    "url": "assets/js/256.js",
    "revision": "63c1d43aa0777d3264a0ca00aeb1e910"
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
    "revision": "c6afb52ddb357d21431ffaadc8bbe6bf"
  },
  {
    "url": "assets/js/261.js",
    "revision": "3020aab4f06380b5f2a91396ea06c624"
  },
  {
    "url": "assets/js/262.js",
    "revision": "834f12e8ae15ca044ed1e9ae511e8337"
  },
  {
    "url": "assets/js/263.js",
    "revision": "535cb088352f2406a65c7884caa7a8af"
  },
  {
    "url": "assets/js/264.js",
    "revision": "1b8a39922ce94c57e27e596fafe410e4"
  },
  {
    "url": "assets/js/265.js",
    "revision": "c26d7a7b73e0059b5486a43f32a1bcd9"
  },
  {
    "url": "assets/js/266.js",
    "revision": "887ed90f5dc2e2aac5a662c1f9596982"
  },
  {
    "url": "assets/js/267.js",
    "revision": "66ceca0f53ce5aa32a1ac15f456cd3b1"
  },
  {
    "url": "assets/js/268.js",
    "revision": "1f78eba28f2fc867d6d858add3a92485"
  },
  {
    "url": "assets/js/269.js",
    "revision": "f8e0e057c0710d5e7a9de8f8f6f1b03e"
  },
  {
    "url": "assets/js/27.js",
    "revision": "418e41b341ef4745c02c9b6b21eb4661"
  },
  {
    "url": "assets/js/270.js",
    "revision": "8a574d313d57b26a98f6eac3c7e809d1"
  },
  {
    "url": "assets/js/271.js",
    "revision": "6ede06c357ebdd660aff92964b9e205b"
  },
  {
    "url": "assets/js/272.js",
    "revision": "d6cd8cb2fcda7af56264fb9c732c0ce0"
  },
  {
    "url": "assets/js/273.js",
    "revision": "b7ebafc0c591d350f21e59ef809c2c63"
  },
  {
    "url": "assets/js/274.js",
    "revision": "436b4ef7ff0885ec40bf9b80477112ab"
  },
  {
    "url": "assets/js/275.js",
    "revision": "8a006f893f8efcb2d882be32384d59e8"
  },
  {
    "url": "assets/js/276.js",
    "revision": "c9bb5da67422e22d329b35fa6b9b7f77"
  },
  {
    "url": "assets/js/277.js",
    "revision": "22ae33c01b2f5ca06211f8099a28a86c"
  },
  {
    "url": "assets/js/278.js",
    "revision": "c662a1d8aa47fed38c3f82df1dee6f60"
  },
  {
    "url": "assets/js/279.js",
    "revision": "a98fb8f66713e22eb0e9488a3d8fb7a6"
  },
  {
    "url": "assets/js/28.js",
    "revision": "db01a70f6e782d0f38b3e4dbe60f8210"
  },
  {
    "url": "assets/js/280.js",
    "revision": "daa0e590a928c91e63602e6998d42486"
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
    "revision": "40c72bd7cde07d7e43a6e8f756cc4513"
  },
  {
    "url": "assets/js/284.js",
    "revision": "a54fdb8a0435a1c2a25515b2c8a01e83"
  },
  {
    "url": "assets/js/285.js",
    "revision": "d43b02aac9d3076ed342d5445c7406f9"
  },
  {
    "url": "assets/js/286.js",
    "revision": "7100fa013eb05d37ec9934264395a8c8"
  },
  {
    "url": "assets/js/287.js",
    "revision": "785f84d2e0b28a6275e4007edd8b2016"
  },
  {
    "url": "assets/js/288.js",
    "revision": "bab739511c101809ec07b5b8b59e8a93"
  },
  {
    "url": "assets/js/289.js",
    "revision": "74947d49d0669f99af6a424e246f1c36"
  },
  {
    "url": "assets/js/29.js",
    "revision": "a044931f73d7acacb90429ac25c840d5"
  },
  {
    "url": "assets/js/290.js",
    "revision": "c594d89f964a87279a9c147df09864fd"
  },
  {
    "url": "assets/js/291.js",
    "revision": "c49038ece5afc03c69b3def2048c4d59"
  },
  {
    "url": "assets/js/292.js",
    "revision": "e69e3d4543188cdf513ad1fbef9d7d6e"
  },
  {
    "url": "assets/js/293.js",
    "revision": "871b307fe78c44de82932dcd4c6e0a85"
  },
  {
    "url": "assets/js/294.js",
    "revision": "ae7093483050dfbaaaa3d28471caa7c6"
  },
  {
    "url": "assets/js/295.js",
    "revision": "b0dfcf177007cacfa3b5413eb6a2a095"
  },
  {
    "url": "assets/js/296.js",
    "revision": "35a11050be753f1dd4f3258d27ddf5c2"
  },
  {
    "url": "assets/js/297.js",
    "revision": "362199922fd49bee3956803f4cd8c463"
  },
  {
    "url": "assets/js/298.js",
    "revision": "f0d43734b8c15c049b8cb62dfc077013"
  },
  {
    "url": "assets/js/299.js",
    "revision": "a1fd913439707ddcdbcdad25d674e261"
  },
  {
    "url": "assets/js/30.js",
    "revision": "05412b76417835ba899870231d5daf35"
  },
  {
    "url": "assets/js/300.js",
    "revision": "94d33c603d7a10f33968e31b20477040"
  },
  {
    "url": "assets/js/301.js",
    "revision": "ab6473d81d56c1f955da06531afba6cc"
  },
  {
    "url": "assets/js/302.js",
    "revision": "005510dbc98814c624f35574baed7a89"
  },
  {
    "url": "assets/js/303.js",
    "revision": "2bdb6219a571d29ca6abae77789bfa56"
  },
  {
    "url": "assets/js/304.js",
    "revision": "9031f8f6f4ecf3575f4cbd612c1cd74e"
  },
  {
    "url": "assets/js/305.js",
    "revision": "69057db15fff42d9a1f2f8f3fd996345"
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
    "revision": "86f6900d077144f12fc2684d676ace02"
  },
  {
    "url": "assets/js/309.js",
    "revision": "fec41d8438ed46546938392c170ad8ec"
  },
  {
    "url": "assets/js/31.js",
    "revision": "70902bc4c3b688e71dea3efb15f4d88c"
  },
  {
    "url": "assets/js/310.js",
    "revision": "735e9c29cb29ecc14d8909e5dc5119e6"
  },
  {
    "url": "assets/js/311.js",
    "revision": "c121de2c8d7e4d3ac1a5655de9f471d2"
  },
  {
    "url": "assets/js/312.js",
    "revision": "d2c142126ee27cf4f2a526317de1088f"
  },
  {
    "url": "assets/js/313.js",
    "revision": "9ffcdc4a3f4d40bdff820e13425d4b1d"
  },
  {
    "url": "assets/js/314.js",
    "revision": "9bc792e992577006c7baf41fb8510ac4"
  },
  {
    "url": "assets/js/315.js",
    "revision": "b44addc02a094f61b314625c1f383c7a"
  },
  {
    "url": "assets/js/316.js",
    "revision": "971a27ffb63b88734fddfc4dd648fa0e"
  },
  {
    "url": "assets/js/317.js",
    "revision": "4dd9abe904d915638eb0f3fb59044cb5"
  },
  {
    "url": "assets/js/318.js",
    "revision": "e74dd183f7e5d0ef822d438209a69d8d"
  },
  {
    "url": "assets/js/319.js",
    "revision": "889eff6230337e1f9349197d1cec0455"
  },
  {
    "url": "assets/js/32.js",
    "revision": "88be47693e3af7e31aa776aa76ab1302"
  },
  {
    "url": "assets/js/320.js",
    "revision": "d3ab7532732ef9fdfadedf6108cb0ef0"
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
    "revision": "26433bf65b980c4d9aa427328e0ca936"
  },
  {
    "url": "assets/js/325.js",
    "revision": "dcc9094b43fc44ba0822ae28ca81e646"
  },
  {
    "url": "assets/js/326.js",
    "revision": "d83b881c375421461fdf21dd6f014cd9"
  },
  {
    "url": "assets/js/327.js",
    "revision": "4c520e7ad7b675aefe69fbdfa6c9f7bc"
  },
  {
    "url": "assets/js/328.js",
    "revision": "600cc41ef8e411dd368564ca2f6110c6"
  },
  {
    "url": "assets/js/329.js",
    "revision": "c3c66bfd61a798e99c1e9ed18dc29d02"
  },
  {
    "url": "assets/js/33.js",
    "revision": "5ef1f56a08c7746a51847dc4993e63e2"
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
    "revision": "8161dc3d638eff3a7faafd1226c41554"
  },
  {
    "url": "assets/js/333.js",
    "revision": "56d737f56c5221368a29bc49f4363d6f"
  },
  {
    "url": "assets/js/334.js",
    "revision": "8b73a6a0d58c2afd2b1b46c8ab0bcbcd"
  },
  {
    "url": "assets/js/335.js",
    "revision": "2a7be5563cd1948353928fb3326b8e8b"
  },
  {
    "url": "assets/js/336.js",
    "revision": "76e822c29354fd1516830bd45ae349e6"
  },
  {
    "url": "assets/js/337.js",
    "revision": "031f017cdb7cceb251de24ebe48fb00d"
  },
  {
    "url": "assets/js/338.js",
    "revision": "4411b01c23ce741f852f31316b57de41"
  },
  {
    "url": "assets/js/339.js",
    "revision": "67e417bc03282b8605f43b1e70e443f1"
  },
  {
    "url": "assets/js/34.js",
    "revision": "0e98279a6bed436dd8935a9a77df4f4b"
  },
  {
    "url": "assets/js/340.js",
    "revision": "3b96c28e4d155b241fd0e941e2900a0c"
  },
  {
    "url": "assets/js/341.js",
    "revision": "dc0795e2a47f207458b24635248c3b0c"
  },
  {
    "url": "assets/js/342.js",
    "revision": "91921b522c80a5c805354f4703415921"
  },
  {
    "url": "assets/js/343.js",
    "revision": "b3ab66a3b41b0f72764e3572a26c3fd3"
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
    "revision": "096696a57410341f8d77e8f63d3ea613"
  },
  {
    "url": "assets/js/35.js",
    "revision": "717c8fc856c8d056c0482b15c8f1b70f"
  },
  {
    "url": "assets/js/350.js",
    "revision": "62fee63d68322cfd4c87cf47e2fcb301"
  },
  {
    "url": "assets/js/351.js",
    "revision": "26211e9fcae11ad87dce645a6cab3fa2"
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
    "revision": "27f2e7cd43fb930bff4568e88d07b54c"
  },
  {
    "url": "assets/js/357.js",
    "revision": "2335d9ff65213bcaf2c800614da3ec58"
  },
  {
    "url": "assets/js/358.js",
    "revision": "ed565406271d16e6aa74af7108e2ea10"
  },
  {
    "url": "assets/js/359.js",
    "revision": "81a370da66909242e23897c70f28235f"
  },
  {
    "url": "assets/js/36.js",
    "revision": "ca11e1484c8f3e2da46d7c6ca12b3099"
  },
  {
    "url": "assets/js/360.js",
    "revision": "be04379638d647d531ce6b6f03bfa51e"
  },
  {
    "url": "assets/js/361.js",
    "revision": "6c263f9662084838da00276f5c912416"
  },
  {
    "url": "assets/js/362.js",
    "revision": "8954cc2d06b9204b7a6b747898336184"
  },
  {
    "url": "assets/js/363.js",
    "revision": "f41bb43ce050fe188b834f68cf219361"
  },
  {
    "url": "assets/js/364.js",
    "revision": "08452cae07e85fdc1271b2d5895eeb3f"
  },
  {
    "url": "assets/js/365.js",
    "revision": "84e4ef0a38593ef6ef86968a27035557"
  },
  {
    "url": "assets/js/366.js",
    "revision": "07b2a8271ab14140d3a446357a7b9050"
  },
  {
    "url": "assets/js/367.js",
    "revision": "832e46cac80ba8cbf80d011e1b13ec61"
  },
  {
    "url": "assets/js/368.js",
    "revision": "43ff4a55eba9494ffaf9f8a6b508ba80"
  },
  {
    "url": "assets/js/369.js",
    "revision": "15e8eb852dbf78d8c9c84bfa81816c37"
  },
  {
    "url": "assets/js/37.js",
    "revision": "ec2ab7d75c021a91784d5c41140e399c"
  },
  {
    "url": "assets/js/370.js",
    "revision": "63a4d6ecdfded39e06186d32ce6e3fae"
  },
  {
    "url": "assets/js/371.js",
    "revision": "cf42c68a138eaee46ab865ba66530aa0"
  },
  {
    "url": "assets/js/372.js",
    "revision": "42aa420238eb5bba4e9be559f5fa60d1"
  },
  {
    "url": "assets/js/373.js",
    "revision": "a97d51138c2b6909275ba9ed3e4a94a6"
  },
  {
    "url": "assets/js/374.js",
    "revision": "0aef464803d36251b06d36e3fc5b3610"
  },
  {
    "url": "assets/js/375.js",
    "revision": "cd9cbe8721e91527dfd18a9c6c28dcb3"
  },
  {
    "url": "assets/js/376.js",
    "revision": "d7b4fe1d82d3993886a28007b0cdd867"
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
    "revision": "ebd05013539150b11db5af5f8c5d9bb1"
  },
  {
    "url": "assets/js/38.js",
    "revision": "d1921c76916a861ddc278e057b1aa854"
  },
  {
    "url": "assets/js/380.js",
    "revision": "aa08f420b785d2ebca0f28c95681bec5"
  },
  {
    "url": "assets/js/381.js",
    "revision": "6a83518655e9078a8ebabbe338070dfc"
  },
  {
    "url": "assets/js/382.js",
    "revision": "a33dfc78a83ea8dd020a6559c030d652"
  },
  {
    "url": "assets/js/383.js",
    "revision": "f0fb6d64145e8d866d32ebc18e740bb0"
  },
  {
    "url": "assets/js/384.js",
    "revision": "459cd0c72b31131301d6672d9d00fe47"
  },
  {
    "url": "assets/js/385.js",
    "revision": "cefae27a92f280fdede49e3d1b54dde6"
  },
  {
    "url": "assets/js/386.js",
    "revision": "61dee9efe3dd335afa540a8a0419bb09"
  },
  {
    "url": "assets/js/387.js",
    "revision": "4865106cceeee4930dd48a629e443b1c"
  },
  {
    "url": "assets/js/388.js",
    "revision": "80fc63207fc8e03fab3bb27c2408f92d"
  },
  {
    "url": "assets/js/389.js",
    "revision": "e335690d865904003e5f47c9191a52e5"
  },
  {
    "url": "assets/js/39.js",
    "revision": "b62f6b4d13fd5fe3d848ad3719209625"
  },
  {
    "url": "assets/js/390.js",
    "revision": "574dbd095d5a0b0d9a2053407269ff65"
  },
  {
    "url": "assets/js/391.js",
    "revision": "bd0b5ce00314bb867ed98139c1b81c56"
  },
  {
    "url": "assets/js/392.js",
    "revision": "6b301e9af8948a894494762facfd1060"
  },
  {
    "url": "assets/js/393.js",
    "revision": "4b923415d96f32aae96abdacc097912c"
  },
  {
    "url": "assets/js/394.js",
    "revision": "008be62b7e18ef8b82682804be992aaa"
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
    "revision": "3d6654f3d24cc99143da01ea7b472f3e"
  },
  {
    "url": "assets/js/399.js",
    "revision": "9d640ecca466a9e4ff3b4cd68cec87f9"
  },
  {
    "url": "assets/js/4.js",
    "revision": "c0a121379bab06faf9424a7b0cfe4708"
  },
  {
    "url": "assets/js/40.js",
    "revision": "4bd6f50013231d6929507177c743dec4"
  },
  {
    "url": "assets/js/400.js",
    "revision": "37b2b809cb79ca2bd0836db3b67a7bdf"
  },
  {
    "url": "assets/js/401.js",
    "revision": "30c2aedc14cebefc4a9a0f4a9664f32a"
  },
  {
    "url": "assets/js/402.js",
    "revision": "de35b22d4accc5f9c0858e4d6d0a2b84"
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
    "revision": "d0a9055e33c281e11a6804aef90887bf"
  },
  {
    "url": "assets/js/406.js",
    "revision": "390364a2a150524a56fa80ab30a4c66d"
  },
  {
    "url": "assets/js/407.js",
    "revision": "013382211dd1db93f2c39ab5fa2ac777"
  },
  {
    "url": "assets/js/408.js",
    "revision": "ec3a078ba50b93aa7b762ade97dcdb78"
  },
  {
    "url": "assets/js/409.js",
    "revision": "f3e862bde30b620097330302ffc3757f"
  },
  {
    "url": "assets/js/41.js",
    "revision": "1c8680be82984d3a02d563c04619fdc3"
  },
  {
    "url": "assets/js/410.js",
    "revision": "acca7762e7979bd3848328831d289b12"
  },
  {
    "url": "assets/js/411.js",
    "revision": "92ddad68eed5245905714cd0f714132a"
  },
  {
    "url": "assets/js/412.js",
    "revision": "9ca455b13089133838e7b00919017b9a"
  },
  {
    "url": "assets/js/413.js",
    "revision": "2009eccbaa6c39c22bcaeb2cee988f3d"
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
    "revision": "fcae5299d71cadf009fbc5ee393176d0"
  },
  {
    "url": "assets/js/417.js",
    "revision": "632fddf61fc23d55f078dae9ae520c1a"
  },
  {
    "url": "assets/js/418.js",
    "revision": "1e25c153c621c01d9909c062cc5acfc4"
  },
  {
    "url": "assets/js/419.js",
    "revision": "85b52406c811f6543a3163cf442f230c"
  },
  {
    "url": "assets/js/42.js",
    "revision": "b3dbd3def25a152d3529358a73e71c99"
  },
  {
    "url": "assets/js/420.js",
    "revision": "a7b3882709bf8d3dfae2756a84625619"
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
    "revision": "e00191399555c58336e30d38ce6785e3"
  },
  {
    "url": "assets/js/425.js",
    "revision": "f9092b76eb4d2e801ac2231ca6a5eb59"
  },
  {
    "url": "assets/js/426.js",
    "revision": "6d3338c362b9682e34620e9388f00291"
  },
  {
    "url": "assets/js/427.js",
    "revision": "5cc59a2e1cae511d1b90a60338508da4"
  },
  {
    "url": "assets/js/428.js",
    "revision": "e59e920860b084a19781b3e3dbddee5e"
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
    "revision": "86fe1f51c64bd64cf33bd230d398286a"
  },
  {
    "url": "assets/js/432.js",
    "revision": "80febdb743f9f9d38839e999dac5b0a9"
  },
  {
    "url": "assets/js/433.js",
    "revision": "9109df3244d4b9976e105ad95f85f156"
  },
  {
    "url": "assets/js/434.js",
    "revision": "245ab54473e658f3a6d57b32f0cf6a00"
  },
  {
    "url": "assets/js/435.js",
    "revision": "1558b81739d45c45f86ce364755a341a"
  },
  {
    "url": "assets/js/436.js",
    "revision": "e4b5fa6b5d37087d4b93db34ea73aa72"
  },
  {
    "url": "assets/js/437.js",
    "revision": "970eacdfa0d4da53f090fe34daf29a51"
  },
  {
    "url": "assets/js/438.js",
    "revision": "f7c8c1ec622f29dca7488b77ea64f2f6"
  },
  {
    "url": "assets/js/439.js",
    "revision": "81584f431e4893ca9bf3edd168dfb6e6"
  },
  {
    "url": "assets/js/44.js",
    "revision": "147ce8e4a44bc139403b1d8a448914f4"
  },
  {
    "url": "assets/js/440.js",
    "revision": "6b9cb045f5d70ec06f99df8c696b064b"
  },
  {
    "url": "assets/js/441.js",
    "revision": "465c4639e6f1a8273edb55f5ba4f0a0e"
  },
  {
    "url": "assets/js/442.js",
    "revision": "f61230ea14d30a88419a0db67a0ef239"
  },
  {
    "url": "assets/js/443.js",
    "revision": "1c0364290e78fd118fb5c59bd2bcac59"
  },
  {
    "url": "assets/js/444.js",
    "revision": "a864de04a203c1b552898288cdc0768b"
  },
  {
    "url": "assets/js/445.js",
    "revision": "07d0fbd608aa2d348ff6d21dec18a22b"
  },
  {
    "url": "assets/js/446.js",
    "revision": "5733cd76b619f86ccc5660459b041c97"
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
    "revision": "16ad1b0603bb61e061ab6d139697c576"
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
    "revision": "df735c0c944e5491fcbfc240181a5581"
  },
  {
    "url": "assets/js/452.js",
    "revision": "1c52f61f350d0e10ee19fd086dad1562"
  },
  {
    "url": "assets/js/453.js",
    "revision": "59416c043422620560f52a51d2a4b75a"
  },
  {
    "url": "assets/js/454.js",
    "revision": "67fe922bd79bea7db0860474f29bd355"
  },
  {
    "url": "assets/js/455.js",
    "revision": "93117950df58ae1e836cc13601970f82"
  },
  {
    "url": "assets/js/456.js",
    "revision": "c8dbb002e9615beb8b5b9154d8f02f03"
  },
  {
    "url": "assets/js/457.js",
    "revision": "27c60b98ac6db04b1f703f1271bf60ec"
  },
  {
    "url": "assets/js/458.js",
    "revision": "7486d51b85d48b37437468b01fb73655"
  },
  {
    "url": "assets/js/459.js",
    "revision": "be15e2a00df87437c618c04c1423406f"
  },
  {
    "url": "assets/js/46.js",
    "revision": "30e09e41bee05555b6e03c83c552dca4"
  },
  {
    "url": "assets/js/460.js",
    "revision": "b7ca7e2f683b2e6390d609a5aea8b358"
  },
  {
    "url": "assets/js/461.js",
    "revision": "ad3a544243a5aed2d5ece2d0ea0d4052"
  },
  {
    "url": "assets/js/462.js",
    "revision": "15b1b76f7b58c0a50c353e7f22d61fc6"
  },
  {
    "url": "assets/js/463.js",
    "revision": "96b165cb8c3b9dbdb3793c51af67bfed"
  },
  {
    "url": "assets/js/464.js",
    "revision": "eb9f2c7a7b0393c3705e17d6d968de0c"
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
    "revision": "83c9c93456341c038fcb44d443559dd7"
  },
  {
    "url": "assets/js/468.js",
    "revision": "ea3d762d9d1620d67a6c7d77b502400e"
  },
  {
    "url": "assets/js/469.js",
    "revision": "0ac3309f8f42c1c5c965c89ad8692914"
  },
  {
    "url": "assets/js/47.js",
    "revision": "f6ce466802f059623dd737a8bcb61359"
  },
  {
    "url": "assets/js/470.js",
    "revision": "0b67b7b16d708d59e526c7f290cfdeec"
  },
  {
    "url": "assets/js/471.js",
    "revision": "5c866328d2fe8707076d344853b8e465"
  },
  {
    "url": "assets/js/472.js",
    "revision": "76301c874160629f3cc026f60b50a4f6"
  },
  {
    "url": "assets/js/473.js",
    "revision": "b7ba85a70167fc0678a56664e0d98e65"
  },
  {
    "url": "assets/js/474.js",
    "revision": "bb284a66f7aeaae3c9c8c8ff832ea96b"
  },
  {
    "url": "assets/js/475.js",
    "revision": "d92740f0b62b2c9953f0ea4e6500a0c5"
  },
  {
    "url": "assets/js/476.js",
    "revision": "f8bd063234ea22170b7c3f70362e1218"
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
    "revision": "259890fd55b82db689627190bd2fe009"
  },
  {
    "url": "assets/js/48.js",
    "revision": "54acdd98297b0f26fe3ee3f7d8f8ca65"
  },
  {
    "url": "assets/js/480.js",
    "revision": "f3dd36498014ca544780d3dc5da8f976"
  },
  {
    "url": "assets/js/481.js",
    "revision": "50e0e76fb8a49feb03f9a5031f094029"
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
    "revision": "b5a333e7585baa45c29639404807bbb8"
  },
  {
    "url": "assets/js/485.js",
    "revision": "f6d1677204541ed2c1d49ad0c9aefb88"
  },
  {
    "url": "assets/js/486.js",
    "revision": "71a8eb318e9fc0e89eee5ec0eb52d935"
  },
  {
    "url": "assets/js/487.js",
    "revision": "4f223e282d6526eba2ba1d5c5acbcf3d"
  },
  {
    "url": "assets/js/488.js",
    "revision": "63186fa7dd609ab116f594081a606ede"
  },
  {
    "url": "assets/js/489.js",
    "revision": "d29ec1f917e306ddf5bf599948e0141b"
  },
  {
    "url": "assets/js/49.js",
    "revision": "d844c1fe3c9a8ed65ba91da4b5d6b66a"
  },
  {
    "url": "assets/js/490.js",
    "revision": "3d8e53634e502f3385df1e24a30341d4"
  },
  {
    "url": "assets/js/491.js",
    "revision": "45e7262720b04300390cde92b8cdb619"
  },
  {
    "url": "assets/js/492.js",
    "revision": "dbb47bb22abd156388d966ef3c82d938"
  },
  {
    "url": "assets/js/493.js",
    "revision": "9c4ba04a726bc48de748bc273c1ec04a"
  },
  {
    "url": "assets/js/494.js",
    "revision": "65935ce6f726fbe3bd855b3dd639ce8f"
  },
  {
    "url": "assets/js/495.js",
    "revision": "c91b59828a7e5f3ddb2902ca125d1cb4"
  },
  {
    "url": "assets/js/496.js",
    "revision": "b0ae205b773cc71821660d24c0f9f340"
  },
  {
    "url": "assets/js/497.js",
    "revision": "88ec2409aafd07d226146436e5df5e2b"
  },
  {
    "url": "assets/js/498.js",
    "revision": "b5624d16dcd80d49c3b7e997c6bc7f79"
  },
  {
    "url": "assets/js/499.js",
    "revision": "00a689658957ea468267bb0e49adbc41"
  },
  {
    "url": "assets/js/5.js",
    "revision": "59fd9d4529c2e916717ad8e7ae6446d4"
  },
  {
    "url": "assets/js/50.js",
    "revision": "ba30c0dc669b61db1690853a25867f33"
  },
  {
    "url": "assets/js/500.js",
    "revision": "255ae5442490328fded7ec310060172f"
  },
  {
    "url": "assets/js/501.js",
    "revision": "a1a03efe59aaed095cf4b088e6eb409b"
  },
  {
    "url": "assets/js/502.js",
    "revision": "d2d779a07de6610de590007f26266312"
  },
  {
    "url": "assets/js/503.js",
    "revision": "e43e614e8fa1825373acd39878fab49a"
  },
  {
    "url": "assets/js/504.js",
    "revision": "dfe2d152fce0b4ba8d6086bc6716ddb7"
  },
  {
    "url": "assets/js/505.js",
    "revision": "264de589bd27e4619374b993d12a529b"
  },
  {
    "url": "assets/js/506.js",
    "revision": "94ead75fe2620161a531fa150477c573"
  },
  {
    "url": "assets/js/507.js",
    "revision": "7635ba4a6fa8b22dc4a023d2c1def3e0"
  },
  {
    "url": "assets/js/508.js",
    "revision": "ae36be679a2c539c070a0a4dfcb08c6b"
  },
  {
    "url": "assets/js/509.js",
    "revision": "9e6190fd1ba2fab66212b9aa18ec23a3"
  },
  {
    "url": "assets/js/51.js",
    "revision": "01eb94e5d0ad9345366b1cdbbb7ddceb"
  },
  {
    "url": "assets/js/510.js",
    "revision": "e9ff56d19e34310a506be47878a88201"
  },
  {
    "url": "assets/js/511.js",
    "revision": "1d08aeea3c74db1ee0fabfa25e7d8cb8"
  },
  {
    "url": "assets/js/512.js",
    "revision": "ae24d0901afb2a9fed7f332cdda7b2ce"
  },
  {
    "url": "assets/js/513.js",
    "revision": "a9f4bddf74b7f65789439ab6912d5b93"
  },
  {
    "url": "assets/js/514.js",
    "revision": "674beabff0bd2566d77c06cf9001b1fe"
  },
  {
    "url": "assets/js/515.js",
    "revision": "9f59f622e4f94a4234ecaf944ff03ef8"
  },
  {
    "url": "assets/js/516.js",
    "revision": "2bbb44f58cb6d05b4509bb0711e83c21"
  },
  {
    "url": "assets/js/517.js",
    "revision": "1c70ebac8dbe1af2f32e0dfb0b74b689"
  },
  {
    "url": "assets/js/518.js",
    "revision": "abb8f0dd0cbaba3b7a5a582b89bb5407"
  },
  {
    "url": "assets/js/519.js",
    "revision": "c69332e571714f6a6fcf1a74b5b216e7"
  },
  {
    "url": "assets/js/52.js",
    "revision": "4740d26a75e4abfb7e9e9537b29a15c0"
  },
  {
    "url": "assets/js/520.js",
    "revision": "bc74152fc11de3cf442d9feed4a6cc6e"
  },
  {
    "url": "assets/js/521.js",
    "revision": "424424dae0eef27b3a557f94af30a691"
  },
  {
    "url": "assets/js/522.js",
    "revision": "84f9838368297e6d453cd10a8acf5799"
  },
  {
    "url": "assets/js/523.js",
    "revision": "01b0dfb735f40788e93e70a9b9dae9e3"
  },
  {
    "url": "assets/js/524.js",
    "revision": "cbceee3e0b57e109f3abd8bdc816633f"
  },
  {
    "url": "assets/js/525.js",
    "revision": "f0a462caec798448fead743759118b4f"
  },
  {
    "url": "assets/js/526.js",
    "revision": "d3ed5917e812c9feb056d8e4a606fcb0"
  },
  {
    "url": "assets/js/527.js",
    "revision": "b040d53e3c4ae7f6f5267b0ef01c9d0c"
  },
  {
    "url": "assets/js/528.js",
    "revision": "ab0ce32eda0f83973a167d6fa3eecb4c"
  },
  {
    "url": "assets/js/529.js",
    "revision": "8fd065995e4335f26a657ce0561f5084"
  },
  {
    "url": "assets/js/53.js",
    "revision": "a35a73fa7efd0ac9fdb1d2edff6bd60a"
  },
  {
    "url": "assets/js/530.js",
    "revision": "1a9f0747b67d879d0bdc23875af37922"
  },
  {
    "url": "assets/js/531.js",
    "revision": "b0492493c276e72799122e45271cc1e3"
  },
  {
    "url": "assets/js/532.js",
    "revision": "5d6ac10b3a88adb874e24e46f807ca8d"
  },
  {
    "url": "assets/js/533.js",
    "revision": "a7dc3d03d4c282391051e568472e199b"
  },
  {
    "url": "assets/js/534.js",
    "revision": "544b34ff02f6d6a4d1b3111b4c055948"
  },
  {
    "url": "assets/js/535.js",
    "revision": "fd8bf9791250ab34585a966d9c61e7f5"
  },
  {
    "url": "assets/js/536.js",
    "revision": "d2038cf92698226038973e670e068d47"
  },
  {
    "url": "assets/js/537.js",
    "revision": "71b75a1eb697bbfad5c92e177e745cb3"
  },
  {
    "url": "assets/js/538.js",
    "revision": "2e45f797f4332bba3e9653fed84e2090"
  },
  {
    "url": "assets/js/539.js",
    "revision": "fe75a384a4f02d95c2d821e5c46036a6"
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
    "revision": "9acbd80dd3e6132e8f44b44b9995da0a"
  },
  {
    "url": "assets/js/542.js",
    "revision": "6eab26204b1656b0b4c66beb68382c15"
  },
  {
    "url": "assets/js/543.js",
    "revision": "c71a9a24a5da378cb45c4bc8ebdc7c53"
  },
  {
    "url": "assets/js/544.js",
    "revision": "019a921b95056d0ceef2d339e85570ed"
  },
  {
    "url": "assets/js/545.js",
    "revision": "468734a25da8e1431c26dee873b85801"
  },
  {
    "url": "assets/js/546.js",
    "revision": "83b751f7ee513323f48541ee5633fa41"
  },
  {
    "url": "assets/js/547.js",
    "revision": "ed45027ff00eeb84d548d4cdbc9fcbcf"
  },
  {
    "url": "assets/js/548.js",
    "revision": "4dfff2aeb4fc89195809c56421d223e4"
  },
  {
    "url": "assets/js/549.js",
    "revision": "0cbb7cab26846a94461885754f8ac655"
  },
  {
    "url": "assets/js/55.js",
    "revision": "2f18616d1e4548a31f14e17c068209dc"
  },
  {
    "url": "assets/js/550.js",
    "revision": "973d081975eaf65aeec81d702d0ec946"
  },
  {
    "url": "assets/js/551.js",
    "revision": "701eec60cd359b2d42e04e6b96e54c7a"
  },
  {
    "url": "assets/js/552.js",
    "revision": "10adf7f8d9fb14f7d0c7ec578b990f01"
  },
  {
    "url": "assets/js/553.js",
    "revision": "1e9ac60f732619d28c3087567782ee03"
  },
  {
    "url": "assets/js/554.js",
    "revision": "b69f79698c675874a591529460f9ee2f"
  },
  {
    "url": "assets/js/555.js",
    "revision": "2a9d78375e112d106f7647ac027b19b1"
  },
  {
    "url": "assets/js/556.js",
    "revision": "3ecdf02831c8e09b9b573beb6210e9d4"
  },
  {
    "url": "assets/js/557.js",
    "revision": "8490dafe0fb636e116a492835334eba9"
  },
  {
    "url": "assets/js/558.js",
    "revision": "f47faef4ec25be8a7b09f09d01eea162"
  },
  {
    "url": "assets/js/559.js",
    "revision": "640c16096f7c809a17d8459296c8dfc7"
  },
  {
    "url": "assets/js/56.js",
    "revision": "2f545415f1a5127260e1de960bc31d68"
  },
  {
    "url": "assets/js/560.js",
    "revision": "0ee1407f50cb33f4934eae1523b19b03"
  },
  {
    "url": "assets/js/561.js",
    "revision": "27ec5dff55b2742c8a45aa40994137ae"
  },
  {
    "url": "assets/js/562.js",
    "revision": "a092faeaf657483bd7b068b3983f244d"
  },
  {
    "url": "assets/js/563.js",
    "revision": "84f4042cb6951b963009123035e78af1"
  },
  {
    "url": "assets/js/564.js",
    "revision": "fbe4bdecb224a8b7fe90b0cc29610cba"
  },
  {
    "url": "assets/js/565.js",
    "revision": "aa3097d8a4878225d5a8330e9af6bff9"
  },
  {
    "url": "assets/js/566.js",
    "revision": "9e77c8f113cfc27013c3a22e648138f4"
  },
  {
    "url": "assets/js/567.js",
    "revision": "f5198474b27c7270d1b31bb2dcf7b22b"
  },
  {
    "url": "assets/js/568.js",
    "revision": "a3bc2c097aa739ff53a327d949769abe"
  },
  {
    "url": "assets/js/569.js",
    "revision": "db626a7526f00025a500d1f731abd8f9"
  },
  {
    "url": "assets/js/57.js",
    "revision": "e17497b7613e7d6269168219cd5dbb3e"
  },
  {
    "url": "assets/js/570.js",
    "revision": "40f36deedb01c1e890ce10a02eb63000"
  },
  {
    "url": "assets/js/571.js",
    "revision": "96bc479dc76fd61764a96cf83c5cec7b"
  },
  {
    "url": "assets/js/572.js",
    "revision": "b8593b8ba5ab12421ef2b3b2f0b95969"
  },
  {
    "url": "assets/js/573.js",
    "revision": "94c154a46deb19df1d6e58967c5debde"
  },
  {
    "url": "assets/js/574.js",
    "revision": "a7ed3bda1541a79d179470eb8bc92db2"
  },
  {
    "url": "assets/js/575.js",
    "revision": "07e8b7146f55200039313d617aa0bfd0"
  },
  {
    "url": "assets/js/576.js",
    "revision": "a7b54fcd9582bc789ea7f3944dfbc3bf"
  },
  {
    "url": "assets/js/577.js",
    "revision": "a301b0002c74ac286df36fc89c96d6b7"
  },
  {
    "url": "assets/js/578.js",
    "revision": "63a76fa6253c48136a301473aa6528e4"
  },
  {
    "url": "assets/js/579.js",
    "revision": "1fddbd419d4a2af2c7b147d7ddbb5bc8"
  },
  {
    "url": "assets/js/58.js",
    "revision": "82f4f122ce1b0c2653ace007659e1981"
  },
  {
    "url": "assets/js/580.js",
    "revision": "8b0b9165c24f4893dcb8ea8ae99cab0d"
  },
  {
    "url": "assets/js/581.js",
    "revision": "a6739f362eb4c55362bbd155800a9d30"
  },
  {
    "url": "assets/js/582.js",
    "revision": "a6aaf870ecd634e78fd406414e9d2d0f"
  },
  {
    "url": "assets/js/583.js",
    "revision": "12fcdb21890c4784b02692521b0198ac"
  },
  {
    "url": "assets/js/584.js",
    "revision": "701315428e199625d87a189d182f8322"
  },
  {
    "url": "assets/js/585.js",
    "revision": "e27fc02606bd1f9ecaf3ce509869933c"
  },
  {
    "url": "assets/js/586.js",
    "revision": "0c01a3ff9107755db4d2f5ec8aecb883"
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
    "revision": "55c512a23d66c45026138de3f8d76c36"
  },
  {
    "url": "assets/js/590.js",
    "revision": "fc5a9299411f749ce66ed478b4849071"
  },
  {
    "url": "assets/js/591.js",
    "revision": "e4fa8d623839ce75413c997889044ce6"
  },
  {
    "url": "assets/js/6.js",
    "revision": "36c3de747af38b32a7d55222fab91101"
  },
  {
    "url": "assets/js/60.js",
    "revision": "7e0cb85618f7c77f5d9b39995c951f46"
  },
  {
    "url": "assets/js/61.js",
    "revision": "956d4d5b993d3d6fd1b76b77ad56c976"
  },
  {
    "url": "assets/js/62.js",
    "revision": "f32f06012f3e2c4d5d274b0ca95d6f81"
  },
  {
    "url": "assets/js/63.js",
    "revision": "d0fde131a77954fb7c817aba190c0d71"
  },
  {
    "url": "assets/js/64.js",
    "revision": "51e4d0e1c204edf5ab902938cf13985a"
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
    "revision": "2e31d2ff1a2549b2a58a4778b339a304"
  },
  {
    "url": "assets/js/7.js",
    "revision": "6ae8b11c6384e842826a7d597a789ff5"
  },
  {
    "url": "assets/js/70.js",
    "revision": "e184737bb61974d0a7800598fd96427e"
  },
  {
    "url": "assets/js/71.js",
    "revision": "ac0e1009544490e751c99375492e6deb"
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
    "revision": "8dda52a0ec97bd1ea373b19e1aac0d51"
  },
  {
    "url": "assets/js/77.js",
    "revision": "2b4c6254e3fb447ad4f400728099c102"
  },
  {
    "url": "assets/js/78.js",
    "revision": "7f6cf7d6dc6842d0ef9ecd43fd9b7d59"
  },
  {
    "url": "assets/js/79.js",
    "revision": "46d144a9e6726d5e8004f6f60d03c611"
  },
  {
    "url": "assets/js/8.js",
    "revision": "8da794037f563413e83980ce01261888"
  },
  {
    "url": "assets/js/80.js",
    "revision": "34ad40f8d975ba7d504ec96731978618"
  },
  {
    "url": "assets/js/81.js",
    "revision": "d086ed245cda86a347c3784da2752e31"
  },
  {
    "url": "assets/js/82.js",
    "revision": "940fea3472c0ce6d9e7ad015386ee8b2"
  },
  {
    "url": "assets/js/83.js",
    "revision": "c78efa806f072ea48d923d7ac99d441c"
  },
  {
    "url": "assets/js/84.js",
    "revision": "9ff9d0c34fd8aade4c4c30781cf49316"
  },
  {
    "url": "assets/js/85.js",
    "revision": "713f6e19a255658c34915c4aaf951e9b"
  },
  {
    "url": "assets/js/86.js",
    "revision": "10696de0836f8103ab0aad89ea0a5092"
  },
  {
    "url": "assets/js/87.js",
    "revision": "f7f4d55341c6dba6b8060eadb4f131bb"
  },
  {
    "url": "assets/js/88.js",
    "revision": "0b019f0eaf23c88f82f947c4d59128cc"
  },
  {
    "url": "assets/js/89.js",
    "revision": "ece439f5db46b7a041a33f6a327249de"
  },
  {
    "url": "assets/js/9.js",
    "revision": "ff1084073df9be4d8e16e1f9bfae74ab"
  },
  {
    "url": "assets/js/90.js",
    "revision": "8365517a4f7f68e749b87a69ddf3af8d"
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
    "revision": "a15b3b688b3650e117200586732ddd63"
  },
  {
    "url": "assets/js/94.js",
    "revision": "fca8b35ad47b83caf72fa335978350b1"
  },
  {
    "url": "assets/js/95.js",
    "revision": "2f3fde21f33d21f5ab6f907773c6fe17"
  },
  {
    "url": "assets/js/96.js",
    "revision": "a0827a4eea23509cf835d27dc26bb552"
  },
  {
    "url": "assets/js/97.js",
    "revision": "c8be5b595d9debebb225ab459d21e682"
  },
  {
    "url": "assets/js/98.js",
    "revision": "9851e86199ac907c4d69bcd1c5cb25e9"
  },
  {
    "url": "assets/js/99.js",
    "revision": "ffa24b24684c70f3ef9c09b7880e10c9"
  },
  {
    "url": "assets/js/app.js",
    "revision": "1b1db9510a827dafa0fe7e277d7aea79"
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
    "revision": "ea0534af68394719122144a9c0400c38"
  },
  {
    "url": "blog/code/asa.sbh.nz/index.html",
    "revision": "23cd2c910e0e0e70a512046de55cfd22"
  },
  {
    "url": "blog/code/divider/index.html",
    "revision": "7b780be218a3ac466341364f932cefb1"
  },
  {
    "url": "blog/code/first/index.html",
    "revision": "88766efe76792378d9c588fb445d1728"
  },
  {
    "url": "blog/code/fishbarrel/index.html",
    "revision": "4e299a21d5313edb476bbae1fc937307"
  },
  {
    "url": "blog/code/indent/index.html",
    "revision": "e698997842927fbb643b7ed9e9d360f4"
  },
  {
    "url": "blog/code/index.html",
    "revision": "1c0ef6b0cc2e5db576c26a9f94ffc73d"
  },
  {
    "url": "blog/code/ingoa.nz/index.html",
    "revision": "bcba4663d459cde8e313752381699b69"
  },
  {
    "url": "blog/code/nzondemand/index.html",
    "revision": "b964c9598535d3e1d7de5e403f8c331b"
  },
  {
    "url": "blog/code/picard/index.html",
    "revision": "f4da69d03584e981b5a148eaef5ac550"
  },
  {
    "url": "blog/code/qr/index.html",
    "revision": "2a2e6568b917df6541a4118cbc51cbc2"
  },
  {
    "url": "blog/code/rotx/index.html",
    "revision": "b999995391922035d9205307c4aa424e"
  },
  {
    "url": "blog/code/website/index.html",
    "revision": "e91090e5275ab08ee2c502a6e1aebbe0"
  },
  {
    "url": "blog/code/website/route/index.html",
    "revision": "411506072ffd9d2b236c1fd8bb31f22a"
  },
  {
    "url": "blog/code/website/site/index.html",
    "revision": "600dd0fd2e63141dfc779eb67782b860"
  },
  {
    "url": "blog/code/xmltv.co.nz/index.html",
    "revision": "c35dc4fec6e70c020116cc8532e9102a"
  },
  {
    "url": "blog/howto/index.html",
    "revision": "f71e07dae6d96a7755d8898827cd5c3b"
  },
  {
    "url": "blog/howto/intel865/index.html",
    "revision": "f644bfee2a0ecfe08c538a5440a9ba53"
  },
  {
    "url": "blog/howto/nexentastor/index.html",
    "revision": "3d2094b2b9fd0ff29492bfb8a5e4c3b5"
  },
  {
    "url": "blog/howto/pcloadletter/index.html",
    "revision": "140702f9f1f86ae17fc92271cfc36526"
  },
  {
    "url": "blog/howto/raid5/index.html",
    "revision": "fe9058db594a8821ebafb7f14b3bfb1e"
  },
  {
    "url": "blog/index.html",
    "revision": "a5dfd9f9468c2ed0f92845d787372b3d"
  },
  {
    "url": "blog/life/anotheryear/index.html",
    "revision": "aed61cc561bc5c0ab7b390b4364f5767"
  },
  {
    "url": "blog/life/birthday/index.html",
    "revision": "ada2e0ba4e5ee8f9cbce9baa58ebb226"
  },
  {
    "url": "blog/life/blasphemy/index.html",
    "revision": "9a21031e1d1c9d54cde86670b090b69e"
  },
  {
    "url": "blog/life/blogger/index.html",
    "revision": "bb7dc952048b84103651032d043e578a"
  },
  {
    "url": "blog/life/blurry/index.html",
    "revision": "73384e4f4537f71ccfcb97d3c47f8429"
  },
  {
    "url": "blog/life/domain/index.html",
    "revision": "499c33d06848882c4cbf54aab5c0601e"
  },
  {
    "url": "blog/life/exams/index.html",
    "revision": "832e0f1fd4911166f3bc818f38fe8b07"
  },
  {
    "url": "blog/life/food/index.html",
    "revision": "12067b17a01b796b11bce12e02356c44"
  },
  {
    "url": "blog/life/glenview/index.html",
    "revision": "5d5aa8f4593ce66ee3f922026a8a7cf5"
  },
  {
    "url": "blog/life/headlines/index.html",
    "revision": "b0fecf5b1b8f67a44fb9590db7040b40"
  },
  {
    "url": "blog/life/index.html",
    "revision": "01bb86acbe7fb3b7122ffd6daa5c6ad8"
  },
  {
    "url": "blog/life/jws/index.html",
    "revision": "9018450ed73e94c370ac2e3b93940ca7"
  },
  {
    "url": "blog/life/keyboard/index.html",
    "revision": "d3e90bf2683898f2260ea17da6bfcbdd"
  },
  {
    "url": "blog/life/lpi201/index.html",
    "revision": "8fabc456cdf2dcef710e3a20a004b229"
  },
  {
    "url": "blog/life/mashup/index.html",
    "revision": "cf951ee29d47f64eb03ac6ecd8ed7794"
  },
  {
    "url": "blog/life/motorweb/index.html",
    "revision": "41d0fb08472cf92937397ec3fed391cd"
  },
  {
    "url": "blog/life/nxe/index.html",
    "revision": "3026de892754069a4a35932f3e99fec3"
  },
  {
    "url": "blog/life/plates/index.html",
    "revision": "e69a1f1c17f7444b522b459510614529"
  },
  {
    "url": "blog/life/queenstown/index.html",
    "revision": "db4f845a18cff0e53755e64351ede3f9"
  },
  {
    "url": "blog/life/racism/index.html",
    "revision": "569f79ff9a0e6427be588890b1f4fd5e"
  },
  {
    "url": "blog/life/roads/index.html",
    "revision": "039ae815a416d3f5faec0a15197af0cc"
  },
  {
    "url": "blog/life/scare/index.html",
    "revision": "eb0dadd67b5671bbb3af501c274d5220"
  },
  {
    "url": "blog/life/scary/index.html",
    "revision": "8763a0a6c64fc311a3de200e74ad2f91"
  },
  {
    "url": "blog/life/seti/index.html",
    "revision": "54d7f040c8ce62677a49445add94090e"
  },
  {
    "url": "blog/life/skeptical/index.html",
    "revision": "7f52f72112eee5d72a57df03021d2e73"
  },
  {
    "url": "blog/life/skepticzone/index.html",
    "revision": "d47e5463d7068539874678b51625016f"
  },
  {
    "url": "blog/life/spam/index.html",
    "revision": "014198e2811aa7d8cd7672861c701eb9"
  },
  {
    "url": "blog/life/trademe/index.html",
    "revision": "0b1af41a5d74630744904533f43e7032"
  },
  {
    "url": "blog/life/unforeseen/index.html",
    "revision": "ca291cc2621f8e223df5fd7eccc3529e"
  },
  {
    "url": "blog/life/wobbly/index.html",
    "revision": "c297bf0c6479f8dff1c27067f25acd6a"
  },
  {
    "url": "blog/projects/airbag/index.html",
    "revision": "4c79dc9f619666a2f6c2a6a374c94d20"
  },
  {
    "url": "blog/projects/ambilight/index.html",
    "revision": "80875c576659dfef33db4b29853e0bb8"
  },
  {
    "url": "blog/projects/automation/index.html",
    "revision": "c9384687e7311b6dfe83f8b01cc44a4e"
  },
  {
    "url": "blog/projects/eyes/index.html",
    "revision": "71d41f7bb496ddd630cf9a2e18485069"
  },
  {
    "url": "blog/projects/glitch/index.html",
    "revision": "c67cd0fb3e3565e89e8aa42763265d8c"
  },
  {
    "url": "blog/projects/index.html",
    "revision": "c8e24ad48ec521654763a35194667f1e"
  },
  {
    "url": "blog/projects/it100/index.html",
    "revision": "d931c60b1786c9911e24faae21bc01ac"
  },
  {
    "url": "blog/projects/microscope/index.html",
    "revision": "2116a1833fa1111bfda928a7a8f42aff"
  },
  {
    "url": "blog/projects/mirror/index.html",
    "revision": "f8f3e9ef438ef43c42a927d4f5b55fa1"
  },
  {
    "url": "blog/projects/picture/index.html",
    "revision": "517cccb82956a5797293b7c78d173da2"
  },
  {
    "url": "blog/projects/pizza/index.html",
    "revision": "fe551c30c3ae6b8cecb6d5fdcae3b243"
  },
  {
    "url": "blog/projects/podcast/index.html",
    "revision": "cc6a67e3848e22de84a536482adb7bb3"
  },
  {
    "url": "blog/projects/reflow/index.html",
    "revision": "073cbdccebed7efd48d81f07786a1b73"
  },
  {
    "url": "blog/projects/sandbox/index.html",
    "revision": "84367114e977e595aaaa1a1a2cad0f68"
  },
  {
    "url": "blog/projects/screens/index.html",
    "revision": "7a239d8caee8b325fdf828c07013c2c5"
  },
  {
    "url": "blog/projects/sky/index.html",
    "revision": "1f05e10b865b56f3984cb48d2062cff5"
  },
  {
    "url": "blog/projects/starwars/index.html",
    "revision": "92fd66225ade874d1b448ed0d1392735"
  },
  {
    "url": "blog/projects/xbox/index.html",
    "revision": "c82669ea0a9dc8fcb0fe2fb904bc3c66"
  },
  {
    "url": "blog/random/addresses/index.html",
    "revision": "2c7f15bdcbcc60cd208af4eb528291e2"
  },
  {
    "url": "blog/random/alphabet/index.html",
    "revision": "fe91d8a8b6905725d1e0cecc694aef2c"
  },
  {
    "url": "blog/random/astrology/index.html",
    "revision": "f1e8d3484aeaa2f487afe7ec2ba427dd"
  },
  {
    "url": "blog/random/chicken/index.html",
    "revision": "d35ad752e6bd58abc778bf0067a8b008"
  },
  {
    "url": "blog/random/dns/index.html",
    "revision": "37b00751d74666a3ae720952a7f1f1fd"
  },
  {
    "url": "blog/random/evp/index.html",
    "revision": "e0380ea401b9ddf61e27e20c0f5f7143"
  },
  {
    "url": "blog/random/flip/index.html",
    "revision": "c3c5b84da1d281d61818fd36e8937f13"
  },
  {
    "url": "blog/random/honeychurch/index.html",
    "revision": "2b7f0dc5ce5d9cd807d4d8124d98ca6a"
  },
  {
    "url": "blog/random/index.html",
    "revision": "7a56754d12d82ad95c82820fe31e75c5"
  },
  {
    "url": "blog/random/lottery/index.html",
    "revision": "7c8c547fcebf591b8e260e973d6c613d"
  },
  {
    "url": "blog/random/music/index.html",
    "revision": "62a5f3a06f8fbd2f95a4ba2749c9b72a"
  },
  {
    "url": "blog/random/octal/index.html",
    "revision": "d9b5a4207c45db6c57f1a99886a37a5e"
  },
  {
    "url": "blog/random/os/index.html",
    "revision": "5f32c8ab4ed57d54088fd37aa0c537e5"
  },
  {
    "url": "blog/random/propellers/index.html",
    "revision": "3ec4ff61d6128e05f5e164cf79cb5d95"
  },
  {
    "url": "blog/random/robux/index.html",
    "revision": "efed54bc7d1e961240fc48ccad1e26c6"
  },
  {
    "url": "blog/random/super/index.html",
    "revision": "1196fb0e37dfdc36e32016fea4a66102"
  },
  {
    "url": "blog/random/times/index.html",
    "revision": "296414388beeb1935780e61767a0e41d"
  },
  {
    "url": "blog/random/travel/index.html",
    "revision": "0c74424049755962a4b1c1d7ec411da5"
  },
  {
    "url": "blog/random/wilhelm/index.html",
    "revision": "45188ddaa7e6ae3bbfcd5bf50d13eaaa"
  },
  {
    "url": "blog/random/year/index.html",
    "revision": "da8b6509f1580ae45e35c02381cfdc97"
  },
  {
    "url": "blog/skepticism/2015/08/16/asa/index.html",
    "revision": "a937dd26957a1fb8bec9a2241b731ff4"
  },
  {
    "url": "blog/skepticism/2015/08/16/awards/index.html",
    "revision": "df6110751dc19f32d80086ff9cd1eb71"
  },
  {
    "url": "blog/skepticism/2015/08/16/bravo/index.html",
    "revision": "5121649ac30a5502633b234482878eb2"
  },
  {
    "url": "blog/skepticism/2015/08/16/index.html",
    "revision": "85140d3ad2ec6d2bc639e40e1e9b98ba"
  },
  {
    "url": "blog/skepticism/2015/08/16/jim/index.html",
    "revision": "a548040c35ea38a634ba40ea38edf49d"
  },
  {
    "url": "blog/skepticism/2015/08/16/naholo/index.html",
    "revision": "c8e5bda1b07f8da46a8a5f1101846194"
  },
  {
    "url": "blog/skepticism/2015/08/16/resene/index.html",
    "revision": "d113ba0bdc83fcf81f1ac6ce7380ab90"
  },
  {
    "url": "blog/skepticism/2015/08/index.html",
    "revision": "309d633e8ef811efd83b78ecbf1b251b"
  },
  {
    "url": "blog/skepticism/2015/09/20/gop/index.html",
    "revision": "49983a14afe16149e82771628f1e363e"
  },
  {
    "url": "blog/skepticism/2015/09/20/ignobel/index.html",
    "revision": "6c802c78cf0ad619055d8b98afbe0b93"
  },
  {
    "url": "blog/skepticism/2015/09/20/index.html",
    "revision": "683667c72506352f6b84961e76c13b1a"
  },
  {
    "url": "blog/skepticism/2015/09/20/supplements/index.html",
    "revision": "ddac227663be02919dfb31f6730fa0da"
  },
  {
    "url": "blog/skepticism/2015/09/27/ayahuasca/index.html",
    "revision": "0d115c4a88f704da81c12ab544732e60"
  },
  {
    "url": "blog/skepticism/2015/09/27/drought/index.html",
    "revision": "8a19f9d0f6700a83ea246b80ffc2a991"
  },
  {
    "url": "blog/skepticism/2015/09/27/index.html",
    "revision": "c411d1318a43f9ab86c7967960149473"
  },
  {
    "url": "blog/skepticism/2015/09/27/lama/index.html",
    "revision": "a90be2752cb7a81c1704582945f5f720"
  },
  {
    "url": "blog/skepticism/2015/09/27/moon/index.html",
    "revision": "73cedb3180dd58ad423b063e7a2a043f"
  },
  {
    "url": "blog/skepticism/2015/09/27/scan/index.html",
    "revision": "8d4761755d76b78f4ce95487720ca85f"
  },
  {
    "url": "blog/skepticism/2015/09/index.html",
    "revision": "e795d873c334326fcf413e1497db607a"
  },
  {
    "url": "blog/skepticism/2015/10/04/ghost/index.html",
    "revision": "58382cc74a40a07e7af6894a5525819a"
  },
  {
    "url": "blog/skepticism/2015/10/04/haka/index.html",
    "revision": "b733d23d5f1d0f69893cc5d14308c048"
  },
  {
    "url": "blog/skepticism/2015/10/04/index.html",
    "revision": "32c5657c3c29c54d5e9aca5284471b97"
  },
  {
    "url": "blog/skepticism/2015/10/04/mars/index.html",
    "revision": "97e1336c5b267d9b739a1a9d4c7dd21c"
  },
  {
    "url": "blog/skepticism/2015/10/04/pharmacy/index.html",
    "revision": "1ee31554322f2e73bd4777e546463a0b"
  },
  {
    "url": "blog/skepticism/2015/10/04/prostate/index.html",
    "revision": "0089cd191750d5406b79e9ad0dc6036d"
  },
  {
    "url": "blog/skepticism/2015/10/11/armageddon/index.html",
    "revision": "67d1e26fd8e06d05a5b86fd9e9223e73"
  },
  {
    "url": "blog/skepticism/2015/10/11/climate/index.html",
    "revision": "ba3012090e7933432cc4a63e73c823c4"
  },
  {
    "url": "blog/skepticism/2015/10/11/ghost/index.html",
    "revision": "f568cc39c4c855969a8278a64f1be052"
  },
  {
    "url": "blog/skepticism/2015/10/11/index.html",
    "revision": "d8e73a2f59c8b352df40b7660f2d8613"
  },
  {
    "url": "blog/skepticism/2015/10/11/magnesleep/index.html",
    "revision": "33fcb936d2908be92273b8923a0b0acc"
  },
  {
    "url": "blog/skepticism/2015/10/11/nhs/index.html",
    "revision": "fa0eb0ba7f114e1da7a8127d4c2deab6"
  },
  {
    "url": "blog/skepticism/2015/10/11/prophet/index.html",
    "revision": "a09e8a2ddc8c0daea6e72e12a3400fbf"
  },
  {
    "url": "blog/skepticism/2015/10/index.html",
    "revision": "c6e65676da5af1e6d671b5868b136c4f"
  },
  {
    "url": "blog/skepticism/2015/11/15/end/index.html",
    "revision": "e04bfc6ab732a435f37cf82d70d69e1d"
  },
  {
    "url": "blog/skepticism/2015/11/15/index.html",
    "revision": "dde5549bcd2f76dc5bd2e4518a986fe4"
  },
  {
    "url": "blog/skepticism/2015/11/index.html",
    "revision": "98c8f674d8af4226e5f496cecda03a11"
  },
  {
    "url": "blog/skepticism/2015/12/13/astrology/index.html",
    "revision": "1b1ffffcf31b567d9d8ab0cb2afca9df"
  },
  {
    "url": "blog/skepticism/2015/12/13/cancer/index.html",
    "revision": "878213637210cf54545d9b26400518ee"
  },
  {
    "url": "blog/skepticism/2015/12/13/chickenpox/index.html",
    "revision": "56675a469a53fe60166b31c28954a9f6"
  },
  {
    "url": "blog/skepticism/2015/12/13/index.html",
    "revision": "3495193bc2a4f95abc8986a6cb67fdd5"
  },
  {
    "url": "blog/skepticism/2015/12/13/osteopath/index.html",
    "revision": "5c3b20942ebb2cd6eee62a866f8a333e"
  },
  {
    "url": "blog/skepticism/2015/12/13/priest/index.html",
    "revision": "b18dcc1da3896b4a6334eb198c396ccb"
  },
  {
    "url": "blog/skepticism/2015/12/13/psychic/index.html",
    "revision": "b972241558f9384b3eed5ec774497578"
  },
  {
    "url": "blog/skepticism/2015/12/13/vaccines/index.html",
    "revision": "afc7afec95beeccf91f1ed5982764014"
  },
  {
    "url": "blog/skepticism/2015/12/index.html",
    "revision": "bb886b1e0cba814ba002e8c21fa69f1e"
  },
  {
    "url": "blog/skepticism/2015/index.html",
    "revision": "6a2400393ec7c2ec123c5f2a1e2eef51"
  },
  {
    "url": "blog/skepticism/2016/02/07/antioxidant/index.html",
    "revision": "7a159f761a6a42df422e0a72216a564c"
  },
  {
    "url": "blog/skepticism/2016/02/07/index.html",
    "revision": "daca8bb276712906740d3f8532b32efd"
  },
  {
    "url": "blog/skepticism/2016/02/07/kfc/index.html",
    "revision": "aab668a3bd6ece227980ae2c0ca13514"
  },
  {
    "url": "blog/skepticism/2016/02/07/ph/index.html",
    "revision": "b3004bf53edcf805d7cdbd3f3df6cf82"
  },
  {
    "url": "blog/skepticism/2016/02/07/sandy/index.html",
    "revision": "fff9392127ea7ed3b47380be93e22c1d"
  },
  {
    "url": "blog/skepticism/2016/02/07/sarfati/index.html",
    "revision": "4397c17e92b8c0055717d2620df24375"
  },
  {
    "url": "blog/skepticism/2016/02/07/trump/index.html",
    "revision": "0df819ddddfd322118375b630fbdcdad"
  },
  {
    "url": "blog/skepticism/2016/02/14/coins/index.html",
    "revision": "aa162f107f03cd2cb6a38f3d741fef1a"
  },
  {
    "url": "blog/skepticism/2016/02/14/fast/index.html",
    "revision": "252748703ece2fc398251bd10ebb9de7"
  },
  {
    "url": "blog/skepticism/2016/02/14/fluoride/index.html",
    "revision": "1d0b046eb5be0cf5d45bf419a31b0d41"
  },
  {
    "url": "blog/skepticism/2016/02/14/icke/index.html",
    "revision": "4c0a1085f27eab8511e7449f207e99fc"
  },
  {
    "url": "blog/skepticism/2016/02/14/index.html",
    "revision": "35503e0116e841e2b5a84a3b517cf68c"
  },
  {
    "url": "blog/skepticism/2016/02/14/yeti/index.html",
    "revision": "87ff0ffd5aade83c46e4f5e18f75c53b"
  },
  {
    "url": "blog/skepticism/2016/02/21/homeopathy/index.html",
    "revision": "d3224cc8670444d47b8c10a5d5087796"
  },
  {
    "url": "blog/skepticism/2016/02/21/index.html",
    "revision": "eb02c6f058b5e6c2c07ecdc9ee301244"
  },
  {
    "url": "blog/skepticism/2016/02/21/monster/index.html",
    "revision": "1feb9f83dc58ddeaa627c61ec260d0ca"
  },
  {
    "url": "blog/skepticism/2016/02/21/scalia/index.html",
    "revision": "b4e22108bb880853cd76c5358dc786a8"
  },
  {
    "url": "blog/skepticism/2016/02/21/shane/index.html",
    "revision": "110d313523cee5932469ce5de441779a"
  },
  {
    "url": "blog/skepticism/2016/02/21/texas/index.html",
    "revision": "d3ae0bdb21f3c1a10d65620c9b6d0e21"
  },
  {
    "url": "blog/skepticism/2016/02/28/acupuncture/index.html",
    "revision": "b415e6e169f71db5a43f5532d88276d8"
  },
  {
    "url": "blog/skepticism/2016/02/28/fsm/index.html",
    "revision": "d6ef6e1f27ca604c4f321f46efdbe4ce"
  },
  {
    "url": "blog/skepticism/2016/02/28/index.html",
    "revision": "c2adeaad5cb6f420649b478e31c097d6"
  },
  {
    "url": "blog/skepticism/2016/02/28/iv/index.html",
    "revision": "de3a758af1962d280f43bc7a3f703892"
  },
  {
    "url": "blog/skepticism/2016/02/28/natural/index.html",
    "revision": "2dbe42aff9de211922a83d058f1a9f8d"
  },
  {
    "url": "blog/skepticism/2016/02/28/talc/index.html",
    "revision": "007ac1dc6c3219972bd9495122fb7289"
  },
  {
    "url": "blog/skepticism/2016/02/index.html",
    "revision": "ca53a5025e07a14e4f9ca52f10d4bfb6"
  },
  {
    "url": "blog/skepticism/2016/03/13/herbs/index.html",
    "revision": "6481afebc339e7a6c4d9a5c9035b0659"
  },
  {
    "url": "blog/skepticism/2016/03/13/index.html",
    "revision": "273032ffe01309d35cdf4564e6259a6d"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandala/index.html",
    "revision": "9e70b1bb001bc870a9c4eded6f1606b7"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandela/index.html",
    "revision": "72ff1c52d2f8c8085bb19030c57cf517"
  },
  {
    "url": "blog/skepticism/2016/03/13/spray/index.html",
    "revision": "e423965553fa5c7f74ebc94ba7bbae71"
  },
  {
    "url": "blog/skepticism/2016/03/index.html",
    "revision": "004774964c634f55f4c452cdc3bafaf1"
  },
  {
    "url": "blog/skepticism/2016/04/17/charity/index.html",
    "revision": "c2b3016bd97085edd98ac1ff277ed194"
  },
  {
    "url": "blog/skepticism/2016/04/17/chiro/index.html",
    "revision": "718322438ca2fdf20bde78bf558b886f"
  },
  {
    "url": "blog/skepticism/2016/04/17/fluoride/index.html",
    "revision": "87aec43bd501d7045bbfd0ada0a5ec10"
  },
  {
    "url": "blog/skepticism/2016/04/17/index.html",
    "revision": "928fa35c50cfb69094ee5d557fbd626b"
  },
  {
    "url": "blog/skepticism/2016/04/17/lotto/index.html",
    "revision": "6645dd5b9f255165aad9dc86afad6e0f"
  },
  {
    "url": "blog/skepticism/2016/04/17/mind/index.html",
    "revision": "a94a2d9af3b49200d4b4050996a7601a"
  },
  {
    "url": "blog/skepticism/2016/04/17/whooping/index.html",
    "revision": "01aaa05d1b2f174811fa92b32edae37a"
  },
  {
    "url": "blog/skepticism/2016/04/index.html",
    "revision": "f38152a3d2eecc8fc72ca36891cc0c82"
  },
  {
    "url": "blog/skepticism/2016/06/05/1080/index.html",
    "revision": "1324fbd38253ed687143e13bddd85028"
  },
  {
    "url": "blog/skepticism/2016/06/05/acupuncture/index.html",
    "revision": "d8584495da3cdc398f2d0fb908f528b9"
  },
  {
    "url": "blog/skepticism/2016/06/05/family/index.html",
    "revision": "7a522cc2fc021aca7a8521baa30f8cd8"
  },
  {
    "url": "blog/skepticism/2016/06/05/index.html",
    "revision": "c30e5d7ab5b610e9e6fad46a5f7799cf"
  },
  {
    "url": "blog/skepticism/2016/06/05/limbaugh/index.html",
    "revision": "03e6cf8c2dc8d50917423234d5f70dda"
  },
  {
    "url": "blog/skepticism/2016/06/12/bobby/index.html",
    "revision": "5345ff7c9b514053166c532755110edb"
  },
  {
    "url": "blog/skepticism/2016/06/12/climate/index.html",
    "revision": "b0dfa2f3cca82c29102c086fb233da9f"
  },
  {
    "url": "blog/skepticism/2016/06/12/index.html",
    "revision": "410f0fe25de76b604eb2b7cca4f03425"
  },
  {
    "url": "blog/skepticism/2016/06/12/pugh/index.html",
    "revision": "909a8387a73bf6cd5157a71db11ce89f"
  },
  {
    "url": "blog/skepticism/2016/06/12/savage/index.html",
    "revision": "c8f54df389f3693df4048e6311b82fb6"
  },
  {
    "url": "blog/skepticism/2016/06/12/sawdust/index.html",
    "revision": "aac981228c024206d74c264e46b5c071"
  },
  {
    "url": "blog/skepticism/2016/06/19/beauty/index.html",
    "revision": "0bea48e22ced5ad5ce7b21c0164dee01"
  },
  {
    "url": "blog/skepticism/2016/06/19/bilderberg/index.html",
    "revision": "1ce698508828a7a4eed69d4eeae07bbd"
  },
  {
    "url": "blog/skepticism/2016/06/19/cyf/index.html",
    "revision": "7c91564985a1152a5b4fce7c0474a743"
  },
  {
    "url": "blog/skepticism/2016/06/19/holt/index.html",
    "revision": "5a081ce1165dd3acbec56f1aa350694a"
  },
  {
    "url": "blog/skepticism/2016/06/19/index.html",
    "revision": "8e2e6276dd8717c3a413ca1c7c44c125"
  },
  {
    "url": "blog/skepticism/2016/06/19/silver/index.html",
    "revision": "97f6cfc30a52738d7cb91631be8153cd"
  },
  {
    "url": "blog/skepticism/2016/06/19/ufo/index.html",
    "revision": "738ab735ca155ba77a0724aa694f5a0b"
  },
  {
    "url": "blog/skepticism/2016/06/26/homeopathy/index.html",
    "revision": "23c75d32c7ad6021d10d2e4ee4ae0f9d"
  },
  {
    "url": "blog/skepticism/2016/06/26/index.html",
    "revision": "33ce8d54c0ef23e59c5422ddb77cbd07"
  },
  {
    "url": "blog/skepticism/2016/06/26/robbins/index.html",
    "revision": "5ed620d05a5053d6808de33778ccdc68"
  },
  {
    "url": "blog/skepticism/2016/06/26/selfies/index.html",
    "revision": "fd9ddb1c01577379076120cc75f501af"
  },
  {
    "url": "blog/skepticism/2016/06/26/silver/index.html",
    "revision": "928cecb19bb724c3dfcf294b7e966aac"
  },
  {
    "url": "blog/skepticism/2016/06/26/ufos/index.html",
    "revision": "ce280cf60ef93a59d0ab4e093c5998ff"
  },
  {
    "url": "blog/skepticism/2016/06/index.html",
    "revision": "9288415b9042f9d83f72144f73802bdf"
  },
  {
    "url": "blog/skepticism/2016/07/03/glyphosate/index.html",
    "revision": "cad54507da6fb5470a4ec4f3bacba3b1"
  },
  {
    "url": "blog/skepticism/2016/07/03/gmo/index.html",
    "revision": "10307510732b185acdfa4a7f4aad0b5c"
  },
  {
    "url": "blog/skepticism/2016/07/03/index.html",
    "revision": "6eca8a36457a59217dfa1dabcb303a4f"
  },
  {
    "url": "blog/skepticism/2016/07/03/jail/index.html",
    "revision": "2e3d431516bedc0fb41a9a312b168248"
  },
  {
    "url": "blog/skepticism/2016/07/03/ken/index.html",
    "revision": "141e625609d0bd4abf8faf92a61fa247"
  },
  {
    "url": "blog/skepticism/2016/07/10/ark/index.html",
    "revision": "e4afd5dfe54086df32cb6b57caf8a652"
  },
  {
    "url": "blog/skepticism/2016/07/10/bee/index.html",
    "revision": "ba00fe8d2c230b92651309e190e97ec3"
  },
  {
    "url": "blog/skepticism/2016/07/10/index.html",
    "revision": "92a359d0d63b6f4480b79c7f62c4aa9f"
  },
  {
    "url": "blog/skepticism/2016/07/10/lottery/index.html",
    "revision": "859ff0df69108e36a9ba1653608f442c"
  },
  {
    "url": "blog/skepticism/2016/07/10/murder/index.html",
    "revision": "85818df1d73f3512d0b81b247cda26aa"
  },
  {
    "url": "blog/skepticism/2016/07/17/dogs/index.html",
    "revision": "288a5018243b74e187f71e0d08bc3c9c"
  },
  {
    "url": "blog/skepticism/2016/07/17/fsm/index.html",
    "revision": "94be784e8dbcd1d55eb22ef7ce677e65"
  },
  {
    "url": "blog/skepticism/2016/07/17/fyi/index.html",
    "revision": "3ba2cf06e64c48296c31959e368de2ef"
  },
  {
    "url": "blog/skepticism/2016/07/17/index.html",
    "revision": "c902fab8a86a0d4df21cf78c567f4f20"
  },
  {
    "url": "blog/skepticism/2016/07/17/natural/index.html",
    "revision": "62e73142b6453593748456834de0ed92"
  },
  {
    "url": "blog/skepticism/2016/07/17/pokemon/index.html",
    "revision": "ca0d57d501d7c783faba4a1739e8daf0"
  },
  {
    "url": "blog/skepticism/2016/07/index.html",
    "revision": "a2fd3bdf605d317b026c95a84388a2bc"
  },
  {
    "url": "blog/skepticism/2016/08/07/icke/index.html",
    "revision": "9c314da9308e043a1c2d9e29caa6f2eb"
  },
  {
    "url": "blog/skepticism/2016/08/07/index.html",
    "revision": "96b394e886c0398ecfcbc823e4812736"
  },
  {
    "url": "blog/skepticism/2016/08/21/brian/index.html",
    "revision": "5145171f7be52777146d9c3945a892e6"
  },
  {
    "url": "blog/skepticism/2016/08/21/chlorine/index.html",
    "revision": "4afb43fa8d20506deb1f4bb1db4af44a"
  },
  {
    "url": "blog/skepticism/2016/08/21/index.html",
    "revision": "2f2cbbab95392a8ce2acecc8455dd00d"
  },
  {
    "url": "blog/skepticism/2016/08/21/murder/index.html",
    "revision": "a91b4a46e2c8b8202dd8c51b20302a9a"
  },
  {
    "url": "blog/skepticism/2016/08/21/superfoods/index.html",
    "revision": "064c16991f8cb8097cb578b13ab0feda"
  },
  {
    "url": "blog/skepticism/2016/08/21/witch/index.html",
    "revision": "f3acad7cfa33e331b1b3579b594c286d"
  },
  {
    "url": "blog/skepticism/2016/08/28/alcohol/index.html",
    "revision": "3499671286e66f227971b93fa2106075"
  },
  {
    "url": "blog/skepticism/2016/08/28/chiro/index.html",
    "revision": "b85e7ee17e7d1690e83cfcb226e006ba"
  },
  {
    "url": "blog/skepticism/2016/08/28/index.html",
    "revision": "7c7e29b1ec0cdefa9fc4deda793e6b62"
  },
  {
    "url": "blog/skepticism/2016/08/28/processed/index.html",
    "revision": "3cd21395bf7f16dc56e314201fa1ed5b"
  },
  {
    "url": "blog/skepticism/2016/08/28/sbh/index.html",
    "revision": "5399df65a17d3bf150cbae2a48481d06"
  },
  {
    "url": "blog/skepticism/2016/08/index.html",
    "revision": "8474a81645b1c3047c22af9fdf345148"
  },
  {
    "url": "blog/skepticism/2016/09/18/altruism/index.html",
    "revision": "52d5fa500922f65c686291255b7003b5"
  },
  {
    "url": "blog/skepticism/2016/09/18/better/index.html",
    "revision": "038dfd458fa4e6be2c7f759cf87ee88c"
  },
  {
    "url": "blog/skepticism/2016/09/18/homeopathy/index.html",
    "revision": "03be7b8d9bb84e2565ea93b826577ac9"
  },
  {
    "url": "blog/skepticism/2016/09/18/index.html",
    "revision": "6f38ae978922c91a3712fc809fef0209"
  },
  {
    "url": "blog/skepticism/2016/09/18/nonsense/index.html",
    "revision": "363ac20208fa935f496d7fd756951d3e"
  },
  {
    "url": "blog/skepticism/2016/09/18/trump/index.html",
    "revision": "2c710e2f0061397e3af572c39ef7b49d"
  },
  {
    "url": "blog/skepticism/2016/09/25/clinic/index.html",
    "revision": "20599fe4674783f5eccbac39fc5e7614"
  },
  {
    "url": "blog/skepticism/2016/09/25/fluoride/index.html",
    "revision": "4766fa509f8e35ddda18bbf5699a40e4"
  },
  {
    "url": "blog/skepticism/2016/09/25/homeopathy/index.html",
    "revision": "2dca1d56e036f5c23aab87b77a20af51"
  },
  {
    "url": "blog/skepticism/2016/09/25/index.html",
    "revision": "1837c4052c64dd8e19fb72d7933a2b46"
  },
  {
    "url": "blog/skepticism/2016/09/25/murder/index.html",
    "revision": "d9c8d0ea0eebd495c034d964f9239ab6"
  },
  {
    "url": "blog/skepticism/2016/09/index.html",
    "revision": "276f50d3a1d7a0ee606daa017d788f82"
  },
  {
    "url": "blog/skepticism/2016/10/21/bigfoot/index.html",
    "revision": "e34308da7d9ca0c28b8bb6b5b34320f2"
  },
  {
    "url": "blog/skepticism/2016/10/21/breasts/index.html",
    "revision": "e3a4a16bb7f04e79b0a4ab0813d93de1"
  },
  {
    "url": "blog/skepticism/2016/10/21/index.html",
    "revision": "5fda6c3018d1905a48fc9888e7ca63a2"
  },
  {
    "url": "blog/skepticism/2016/10/21/medsafe/index.html",
    "revision": "0027cae472af543213f4fc4ef392b884"
  },
  {
    "url": "blog/skepticism/2016/10/21/zenteq/index.html",
    "revision": "f7bb4de65c0797ee05cb546460a97f47"
  },
  {
    "url": "blog/skepticism/2016/10/index.html",
    "revision": "3de8517f72a6b1c2078313f54d01b93f"
  },
  {
    "url": "blog/skepticism/2016/11/13/conference/index.html",
    "revision": "dc57e881a05f53ec42b219a54cbe7b6e"
  },
  {
    "url": "blog/skepticism/2016/11/13/green/index.html",
    "revision": "16fa0729a0415ef7cae7046aaa9c7c22"
  },
  {
    "url": "blog/skepticism/2016/11/13/index.html",
    "revision": "4c549f94cdf19c7ef6ad970244629df4"
  },
  {
    "url": "blog/skepticism/2016/11/13/vice/index.html",
    "revision": "78b9768ae87353fd580cfb3154f2b8ff"
  },
  {
    "url": "blog/skepticism/2016/11/27/bioptron/index.html",
    "revision": "80b05590bcdb51290b9d924419a3cc91"
  },
  {
    "url": "blog/skepticism/2016/11/27/conference/index.html",
    "revision": "fa9bee89c634084a1446766631980db2"
  },
  {
    "url": "blog/skepticism/2016/11/27/earthquake/index.html",
    "revision": "00867b2c34896ff92c3da27ce4d77385"
  },
  {
    "url": "blog/skepticism/2016/11/27/index.html",
    "revision": "0462cfa1b050168378d8edbd7a97c0e0"
  },
  {
    "url": "blog/skepticism/2016/11/index.html",
    "revision": "625c470b769bb13260454444a081cc12"
  },
  {
    "url": "blog/skepticism/2016/12/04/conference/index.html",
    "revision": "9c95571bc92381b39001b435165cd6b2"
  },
  {
    "url": "blog/skepticism/2016/12/04/index.html",
    "revision": "efed99b82e1dc9dced8c139daadd8d0c"
  },
  {
    "url": "blog/skepticism/2016/12/18/colin/index.html",
    "revision": "1ff3543d2617643e949553fe8d08a174"
  },
  {
    "url": "blog/skepticism/2016/12/18/fiji/index.html",
    "revision": "07367ebdf620198502198f722dd9fe0b"
  },
  {
    "url": "blog/skepticism/2016/12/18/index.html",
    "revision": "c0e3f7f67ca849766a4379192db78a46"
  },
  {
    "url": "blog/skepticism/2016/12/18/kinesiology/index.html",
    "revision": "23ef2b7d761e74be0d9624af3b68586d"
  },
  {
    "url": "blog/skepticism/2016/12/18/mmm/index.html",
    "revision": "a786449cc0fed99bc3684dd7d394aa67"
  },
  {
    "url": "blog/skepticism/2016/12/18/nigel/index.html",
    "revision": "f69c3987ee03468d584eee7ee011ccae"
  },
  {
    "url": "blog/skepticism/2016/12/index.html",
    "revision": "5e6038ffed31763d562392e21e5e0761"
  },
  {
    "url": "blog/skepticism/2016/index.html",
    "revision": "8be2a71df59f07c39e28d33dfce69b96"
  },
  {
    "url": "blog/skepticism/2017/01/22/index.html",
    "revision": "6ee83a83de83a1db6fbe83acaac850ed"
  },
  {
    "url": "blog/skepticism/2017/01/22/scientology/index.html",
    "revision": "b9d43a31cdb75ada755e5ef2b8697d98"
  },
  {
    "url": "blog/skepticism/2017/01/29/creation/index.html",
    "revision": "8e99062ff8d0419cc6c233bdd61f920b"
  },
  {
    "url": "blog/skepticism/2017/01/29/index.html",
    "revision": "b568cc031469d7ac0deb2941ed698c39"
  },
  {
    "url": "blog/skepticism/2017/01/index.html",
    "revision": "33df7e800d247747643de42d319470ea"
  },
  {
    "url": "blog/skepticism/2017/02/05/fraudster/index.html",
    "revision": "ed7b0a375cf857e2c14a5e7b5f58e45f"
  },
  {
    "url": "blog/skepticism/2017/02/05/gervais/index.html",
    "revision": "0c3eada237ba87999fd6b57b59b95e0b"
  },
  {
    "url": "blog/skepticism/2017/02/05/index.html",
    "revision": "f0943783ff7d7a1397d0bfdbf5001132"
  },
  {
    "url": "blog/skepticism/2017/02/05/scientology/index.html",
    "revision": "de5e830701a7c9ae8a2b5163766c63f6"
  },
  {
    "url": "blog/skepticism/2017/02/19/homeopathy/index.html",
    "revision": "8199d758798c871e6d3196d1c4070775"
  },
  {
    "url": "blog/skepticism/2017/02/19/index.html",
    "revision": "ab651aa8ed0a70d7a490b9d67ee9667f"
  },
  {
    "url": "blog/skepticism/2017/02/19/lottery/index.html",
    "revision": "0b69e274e9655bbe44e86e7201598d4a"
  },
  {
    "url": "blog/skepticism/2017/02/19/vaxxed/index.html",
    "revision": "0d0e8d12349016fefa4e5a473f880351"
  },
  {
    "url": "blog/skepticism/2017/02/19/whales/index.html",
    "revision": "1e4361e3962961cd6e7967419a6c2fe4"
  },
  {
    "url": "blog/skepticism/2017/02/index.html",
    "revision": "97ac8405f48734f95e6248530d154f0a"
  },
  {
    "url": "blog/skepticism/2017/03/05/index.html",
    "revision": "54b21f014dd764783dc46ba4a74e34a5"
  },
  {
    "url": "blog/skepticism/2017/03/05/rea/index.html",
    "revision": "da2e61eb0ad76da5f47a97c840cd8920"
  },
  {
    "url": "blog/skepticism/2017/03/19/fake/index.html",
    "revision": "95799aa19d45780befe49b529abf21d4"
  },
  {
    "url": "blog/skepticism/2017/03/19/index.html",
    "revision": "e6bb3e428cc300e02aedd132b1a7300f"
  },
  {
    "url": "blog/skepticism/2017/03/19/murder/index.html",
    "revision": "e86b2b74e25c2ebac3e1f88e16791b12"
  },
  {
    "url": "blog/skepticism/2017/03/26/census/index.html",
    "revision": "d906ef198dea9cdb93d7f01a866c939a"
  },
  {
    "url": "blog/skepticism/2017/03/26/index.html",
    "revision": "e470a9068572c42f2f4e03f976b9fc79"
  },
  {
    "url": "blog/skepticism/2017/03/26/nzmj/index.html",
    "revision": "72878e6e09eb1949c623b4f69efdf1bc"
  },
  {
    "url": "blog/skepticism/2017/03/26/shaquille/index.html",
    "revision": "21ad2ef50d4fcc27f4bd76eb58689857"
  },
  {
    "url": "blog/skepticism/2017/03/index.html",
    "revision": "793999a4595ad17ea87f3e8724459fd4"
  },
  {
    "url": "blog/skepticism/2017/04/02/index.html",
    "revision": "fe555f04eff6e002202e7eca0872bacc"
  },
  {
    "url": "blog/skepticism/2017/04/02/nasa/index.html",
    "revision": "150b9b1ffaf4349ec32801e39b81bdd6"
  },
  {
    "url": "blog/skepticism/2017/04/02/science/index.html",
    "revision": "08b46d8060d51b2d1368f76f9913fa05"
  },
  {
    "url": "blog/skepticism/2017/04/02/vaxxed/index.html",
    "revision": "81a4b7511e9a78af79912e4b6f25f935"
  },
  {
    "url": "blog/skepticism/2017/04/09/index.html",
    "revision": "53c2b07c1a5d85de52a5aa5ac8c82b1f"
  },
  {
    "url": "blog/skepticism/2017/04/09/tekiri/index.html",
    "revision": "5f28342b411702a2f2eaed144f538f73"
  },
  {
    "url": "blog/skepticism/2017/04/09/vaxxed/index.html",
    "revision": "052a3dde4f4b47576bff32ed77d3490a"
  },
  {
    "url": "blog/skepticism/2017/04/23/arise/index.html",
    "revision": "00c3d2fe1838ca66c5e893ec5c8f44a3"
  },
  {
    "url": "blog/skepticism/2017/04/23/index.html",
    "revision": "b3f09b51e40ce5519593467634349f0a"
  },
  {
    "url": "blog/skepticism/2017/04/23/kelvin/index.html",
    "revision": "22b659f79d266cec5846552502d67bce"
  },
  {
    "url": "blog/skepticism/2017/04/index.html",
    "revision": "aaa8d81cb5c5b11ca1991aeda4fed172"
  },
  {
    "url": "blog/skepticism/2017/05/07/cancer/index.html",
    "revision": "f14b6211a9ead75d34c3a741e2fa4224"
  },
  {
    "url": "blog/skepticism/2017/05/07/index.html",
    "revision": "f01718d9ed1e31e810c599b4b85a7c40"
  },
  {
    "url": "blog/skepticism/2017/05/07/nigel/index.html",
    "revision": "1e5717eb62813ffdb55c3ad85cd8d919"
  },
  {
    "url": "blog/skepticism/2017/05/21/blasphemy/index.html",
    "revision": "d2d0d9351f8ec4a909eb36c2e3872eb6"
  },
  {
    "url": "blog/skepticism/2017/05/21/flat/index.html",
    "revision": "c1e2d967448fee66790f570c39d3becd"
  },
  {
    "url": "blog/skepticism/2017/05/21/index.html",
    "revision": "fd54d36b6c4c383a2985f0bab7fc7e3a"
  },
  {
    "url": "blog/skepticism/2017/05/21/maori/index.html",
    "revision": "ff2acc2d899f6607a2935916bdd8cd38"
  },
  {
    "url": "blog/skepticism/2017/05/index.html",
    "revision": "d0165bb7174b116b607432491180c98b"
  },
  {
    "url": "blog/skepticism/2017/06/04/bigelow/index.html",
    "revision": "213a4747b09701ff5d6fed062e661541"
  },
  {
    "url": "blog/skepticism/2017/06/04/climate/index.html",
    "revision": "eed6a75ba226d125174da344d6810e92"
  },
  {
    "url": "blog/skepticism/2017/06/04/hansford/index.html",
    "revision": "96c903a2f87c8e6b5aff34d997f8f385"
  },
  {
    "url": "blog/skepticism/2017/06/04/index.html",
    "revision": "6f8d6bb95495e5dd3cd6ec4cf05bade2"
  },
  {
    "url": "blog/skepticism/2017/06/04/wasp/index.html",
    "revision": "9b56699fa666314d1491e8690667e103"
  },
  {
    "url": "blog/skepticism/2017/06/11/colonic/index.html",
    "revision": "0b3f11b9e0a9e3d041fa6a61c86b0cd7"
  },
  {
    "url": "blog/skepticism/2017/06/11/credulous/index.html",
    "revision": "bf6f6ec340ec99417ecf713c3daa34d7"
  },
  {
    "url": "blog/skepticism/2017/06/11/index.html",
    "revision": "a302bee94a261d2245ebb7cd835617b1"
  },
  {
    "url": "blog/skepticism/2017/06/11/journals/index.html",
    "revision": "d511c53267d3e650e765069960177958"
  },
  {
    "url": "blog/skepticism/2017/06/18/breatharians/index.html",
    "revision": "0ad6988e6673e8373adf7a6bfdae374a"
  },
  {
    "url": "blog/skepticism/2017/06/18/fieldays/index.html",
    "revision": "61be7edb7a3283dbc5326d88527bdf52"
  },
  {
    "url": "blog/skepticism/2017/06/18/index.html",
    "revision": "6b7c45e06808d819fcb6e1259f1200ba"
  },
  {
    "url": "blog/skepticism/2017/06/18/jw/index.html",
    "revision": "6ffe5abbca023085e880c0b4cc76e63a"
  },
  {
    "url": "blog/skepticism/2017/06/18/oil/index.html",
    "revision": "8e80469a2141d3c6428900213ce65ddb"
  },
  {
    "url": "blog/skepticism/2017/06/index.html",
    "revision": "965fb203a905bcc485138963cffeba94"
  },
  {
    "url": "blog/skepticism/2017/07/02/baby/index.html",
    "revision": "99e174b9fb3ee31d860afc0fa91a9502"
  },
  {
    "url": "blog/skepticism/2017/07/02/index.html",
    "revision": "54f6f29935d42ccdbeef0ff1bee84e93"
  },
  {
    "url": "blog/skepticism/2017/07/02/infowars/index.html",
    "revision": "62dbb4a5f827ec64ffbe400ae9e218b6"
  },
  {
    "url": "blog/skepticism/2017/07/02/scientology/index.html",
    "revision": "74da2bd1d0de5279d999bda58daf3b4b"
  },
  {
    "url": "blog/skepticism/2017/07/16/bananas/index.html",
    "revision": "7eab391b7499cafbdeee0f8a31c27e73"
  },
  {
    "url": "blog/skepticism/2017/07/16/circles/index.html",
    "revision": "e659b47c2c0447152aa7b3913defc1a9"
  },
  {
    "url": "blog/skepticism/2017/07/16/index.html",
    "revision": "c66c0ab42886ed3ac18770c16d862ad9"
  },
  {
    "url": "blog/skepticism/2017/07/16/siggi/index.html",
    "revision": "2af7260ad53a575be4598aaf4b1ab27e"
  },
  {
    "url": "blog/skepticism/2017/07/16/vaxxed/index.html",
    "revision": "7edfa6825961ad9e37b84ab63821b2c8"
  },
  {
    "url": "blog/skepticism/2017/07/30/bleach/index.html",
    "revision": "1de89f26ceb423773f910469ada596e0"
  },
  {
    "url": "blog/skepticism/2017/07/30/bluebeam/index.html",
    "revision": "73df25b1f19e620f6be540242b21ca93"
  },
  {
    "url": "blog/skepticism/2017/07/30/index.html",
    "revision": "8df774a5718612583c473d89935bb819"
  },
  {
    "url": "blog/skepticism/2017/07/30/police/index.html",
    "revision": "e38d61d70ad5d638568679d8cfc3bcb3"
  },
  {
    "url": "blog/skepticism/2017/07/index.html",
    "revision": "916d57110a2b67a485bc677cb4fb3425"
  },
  {
    "url": "blog/skepticism/2017/08/06/conned/index.html",
    "revision": "c7fae7f867148568e856672a17945dc3"
  },
  {
    "url": "blog/skepticism/2017/08/06/doll/index.html",
    "revision": "637b90f4a2770bf73e6e253a7b197dde"
  },
  {
    "url": "blog/skepticism/2017/08/06/index.html",
    "revision": "74f1c77cec54a7644a9b96851970113c"
  },
  {
    "url": "blog/skepticism/2017/08/06/jacinda/index.html",
    "revision": "8b66277b95482c33761859333ac730ce"
  },
  {
    "url": "blog/skepticism/2017/08/06/lotto/index.html",
    "revision": "c9b9767a162613836e053483153f316a"
  },
  {
    "url": "blog/skepticism/2017/08/27/index.html",
    "revision": "b0b1ca36771687c4d0245707b66be87d"
  },
  {
    "url": "blog/skepticism/2017/08/27/naturopath/index.html",
    "revision": "d191b16a8400c22252586411dc93ff76"
  },
  {
    "url": "blog/skepticism/2017/08/27/satanic/index.html",
    "revision": "82ce15559c83a93d66a6d1f5f13f5e50"
  },
  {
    "url": "blog/skepticism/2017/08/index.html",
    "revision": "c50fe920e1ea25a27944133f7436a140"
  },
  {
    "url": "blog/skepticism/2017/09/03/apocalypse/index.html",
    "revision": "83383954c58434af6add3016e1ff3bc2"
  },
  {
    "url": "blog/skepticism/2017/09/03/cancer/index.html",
    "revision": "0045b2d52e3a2b17e864e8aecb429442"
  },
  {
    "url": "blog/skepticism/2017/09/03/index.html",
    "revision": "8b6a9dd246dc085eca1a33edad09af87"
  },
  {
    "url": "blog/skepticism/2017/09/03/rectangle/index.html",
    "revision": "1082513d41669822cea1e9f33f585d9b"
  },
  {
    "url": "blog/skepticism/2017/09/03/stargate/index.html",
    "revision": "0a0864bb088c823d7fc41aa12d7754a0"
  },
  {
    "url": "blog/skepticism/2017/09/index.html",
    "revision": "0a68617700b4d486833991d20c77bf2b"
  },
  {
    "url": "blog/skepticism/2017/10/01/apocalypse/index.html",
    "revision": "01105b6eb0f96bae78dcdec77110ed34"
  },
  {
    "url": "blog/skepticism/2017/10/01/freeman/index.html",
    "revision": "cc2ffa6d93184d54998eaab516488060"
  },
  {
    "url": "blog/skepticism/2017/10/01/index.html",
    "revision": "de0b9c77a4e2fe300ae0aa2d0e1958df"
  },
  {
    "url": "blog/skepticism/2017/10/01/pharmacy/index.html",
    "revision": "3754a61df027c49d25d2e8ff4fa96e64"
  },
  {
    "url": "blog/skepticism/2017/10/08/index.html",
    "revision": "1390ef7f06d8a9e6ce0f4a9ddeab7fac"
  },
  {
    "url": "blog/skepticism/2017/10/08/pill/index.html",
    "revision": "e1415712b022a70ac11a6fca9cbc17fd"
  },
  {
    "url": "blog/skepticism/2017/10/08/qsb/index.html",
    "revision": "98515dd50dcdc8ac6e7fc5f4bc605084"
  },
  {
    "url": "blog/skepticism/2017/10/08/vegas/index.html",
    "revision": "6ae6f63d913101af9928b178d4f7ae79"
  },
  {
    "url": "blog/skepticism/2017/10/15/doterra/index.html",
    "revision": "9799b61759993fdec9c0481bc870329a"
  },
  {
    "url": "blog/skepticism/2017/10/15/index.html",
    "revision": "bd35ce26922ad6caf4bdf74197ad5edb"
  },
  {
    "url": "blog/skepticism/2017/10/15/lie/index.html",
    "revision": "1f88e92d452de6cacaa16546345c1936"
  },
  {
    "url": "blog/skepticism/2017/10/15/soap/index.html",
    "revision": "d8a3c617f7b29f61a6148f96b05b0206"
  },
  {
    "url": "blog/skepticism/2017/10/index.html",
    "revision": "0bef3fa1a67f4573c3767b5b4a8d1b42"
  },
  {
    "url": "blog/skepticism/2017/11/05/conference/index.html",
    "revision": "0e2bb348795a3b5d714948f942efe1b3"
  },
  {
    "url": "blog/skepticism/2017/11/05/glyphosate/index.html",
    "revision": "979e0c869ed176789955096002ec7783"
  },
  {
    "url": "blog/skepticism/2017/11/05/index.html",
    "revision": "32b5abbfd392ebfdba9861e34eb2cd85"
  },
  {
    "url": "blog/skepticism/2017/11/05/stranded/index.html",
    "revision": "3473658bedd8b89b8d8968c243c96072"
  },
  {
    "url": "blog/skepticism/2017/11/05/tracts/index.html",
    "revision": "b6b785a9b19e5e45f338c6307270d0dc"
  },
  {
    "url": "blog/skepticism/2017/11/12/ghost/index.html",
    "revision": "2ee776646010d0b1fd2b49767015bab6"
  },
  {
    "url": "blog/skepticism/2017/11/12/green/index.html",
    "revision": "ed575abea6bf10010db43c77049654ce"
  },
  {
    "url": "blog/skepticism/2017/11/12/harassment/index.html",
    "revision": "a66f30d2161851e36fc6a06a75d9f167"
  },
  {
    "url": "blog/skepticism/2017/11/12/index.html",
    "revision": "03283897faab1cf9cd4ccfe451fa7623"
  },
  {
    "url": "blog/skepticism/2017/11/12/libby/index.html",
    "revision": "2d925047880145cf7a9a997e2d574ba0"
  },
  {
    "url": "blog/skepticism/2017/11/index.html",
    "revision": "5cc5d8cdf5cf4f0942791c782cd3a547"
  },
  {
    "url": "blog/skepticism/2017/12/03/acupuncture/index.html",
    "revision": "dd409f9598e316bb0a8034ffc7f7327c"
  },
  {
    "url": "blog/skepticism/2017/12/03/denialism/index.html",
    "revision": "e4a298d87ea1860c00d5ece1832b242a"
  },
  {
    "url": "blog/skepticism/2017/12/03/dowsing/index.html",
    "revision": "07c078b047aa3c96fd98f24f2c3806fe"
  },
  {
    "url": "blog/skepticism/2017/12/03/holes/index.html",
    "revision": "78e666cc860e9db8c4e43a9bd43ad25d"
  },
  {
    "url": "blog/skepticism/2017/12/03/index.html",
    "revision": "55c75e7a5426ebb4ac16a379fe3c89d8"
  },
  {
    "url": "blog/skepticism/2017/12/17/index.html",
    "revision": "2ac01a9c1b922f692edaad16471b899b"
  },
  {
    "url": "blog/skepticism/2017/12/17/nhs/index.html",
    "revision": "99e909d10c86dc3a807aed63ee134bcb"
  },
  {
    "url": "blog/skepticism/2017/12/17/oto/index.html",
    "revision": "9d2fc7b549824f7f83390087a6ef461f"
  },
  {
    "url": "blog/skepticism/2017/12/17/pastafarian/index.html",
    "revision": "73a340f99fe314546592896ee0b05b2d"
  },
  {
    "url": "blog/skepticism/2017/12/17/shc/index.html",
    "revision": "74230909d2423a15872f81ba81ae5dba"
  },
  {
    "url": "blog/skepticism/2017/12/17/wellworks/index.html",
    "revision": "4bf74b499fe3ee21c3fb935d8f91af02"
  },
  {
    "url": "blog/skepticism/2017/12/index.html",
    "revision": "c4700fbc147b0dab5a7f7751d3f5333a"
  },
  {
    "url": "blog/skepticism/2017/index.html",
    "revision": "e3f2799eafc8e30594c133d9967f1b0b"
  },
  {
    "url": "blog/skepticism/2018/01/21/grounding/index.html",
    "revision": "f8844f8a54f9b3a3de637094b85d884c"
  },
  {
    "url": "blog/skepticism/2018/01/21/index.html",
    "revision": "85fa32783bfde82bafe32897ca2472dc"
  },
  {
    "url": "blog/skepticism/2018/01/21/naturopath/index.html",
    "revision": "abd4e219dfbaa00782a04885915ae5fc"
  },
  {
    "url": "blog/skepticism/2018/01/21/respen/index.html",
    "revision": "d140e6e03d76cb2585baa58ae9a0c0f6"
  },
  {
    "url": "blog/skepticism/2018/01/28/bears/index.html",
    "revision": "5d10207e6b55c03d2dba64dedbc0ff10"
  },
  {
    "url": "blog/skepticism/2018/01/28/index.html",
    "revision": "8e60011868712d944b99447282c417f2"
  },
  {
    "url": "blog/skepticism/2018/01/28/peppering/index.html",
    "revision": "7ab77882a0e5bff69be149de06b33e89"
  },
  {
    "url": "blog/skepticism/2018/01/28/pet/index.html",
    "revision": "5af18b4ba5704ebb591eabff7ecdf7cc"
  },
  {
    "url": "blog/skepticism/2018/01/28/quake/index.html",
    "revision": "321dd678e31745664673c7dc72aac53d"
  },
  {
    "url": "blog/skepticism/2018/01/28/scientology/index.html",
    "revision": "7dbaaebabe46d6f0ba56387b024627da"
  },
  {
    "url": "blog/skepticism/2018/01/index.html",
    "revision": "662bb49602160645e4d07b0abcb789ad"
  },
  {
    "url": "blog/skepticism/2018/02/11/asa/index.html",
    "revision": "c5ba16f27e920a28c12718314727a77e"
  },
  {
    "url": "blog/skepticism/2018/02/11/cannabis/index.html",
    "revision": "83adde0084263090ddce28662e4c038f"
  },
  {
    "url": "blog/skepticism/2018/02/11/elon/index.html",
    "revision": "b47d5bd187f8de2c80713d219dd93898"
  },
  {
    "url": "blog/skepticism/2018/02/11/homeopathy/index.html",
    "revision": "7771829e00a1d925ab8824a04a82d12d"
  },
  {
    "url": "blog/skepticism/2018/02/11/index.html",
    "revision": "178efdc17d9639e1b6b9b37757f58bd7"
  },
  {
    "url": "blog/skepticism/2018/02/11/water/index.html",
    "revision": "d4cab950411c0b7d375b06055201b87a"
  },
  {
    "url": "blog/skepticism/2018/02/25/crisis/index.html",
    "revision": "e141cf6c5a1e4d074fb7a8525c21397c"
  },
  {
    "url": "blog/skepticism/2018/02/25/eggs/index.html",
    "revision": "b1f047481b0af069fe88978aafc4409f"
  },
  {
    "url": "blog/skepticism/2018/02/25/fsm/index.html",
    "revision": "ecb24e4fada2376972eb6d91c773438b"
  },
  {
    "url": "blog/skepticism/2018/02/25/index.html",
    "revision": "5bf13f84d0436feeb3ea56dd4619e0bb"
  },
  {
    "url": "blog/skepticism/2018/02/25/number/index.html",
    "revision": "4ea6ba03cebc67beecbb793931ad16f0"
  },
  {
    "url": "blog/skepticism/2018/02/25/quackery/index.html",
    "revision": "2c2a9a80d39d39da9351dbc05c85834c"
  },
  {
    "url": "blog/skepticism/2018/02/index.html",
    "revision": "ca90809eadbfe4c7294635fab783ea79"
  },
  {
    "url": "blog/skepticism/2018/03/11/ai/index.html",
    "revision": "03913c49867ed92b8f0c8630900aea8f"
  },
  {
    "url": "blog/skepticism/2018/03/11/index.html",
    "revision": "d93ee1589064cbc3f443eeb7331b7f33"
  },
  {
    "url": "blog/skepticism/2018/03/11/radiation/index.html",
    "revision": "9593b9ab0f7f21a0aaad303743e52a3c"
  },
  {
    "url": "blog/skepticism/2018/03/11/reiki/index.html",
    "revision": "95ad6b2fde50ff042595f3528b9be067"
  },
  {
    "url": "blog/skepticism/2018/03/11/ufo/index.html",
    "revision": "ad5af3a8be8b9130353254c744c1cfd0"
  },
  {
    "url": "blog/skepticism/2018/03/18/ghost/index.html",
    "revision": "99ede8b0e2fa317f85a5d43251b59333"
  },
  {
    "url": "blog/skepticism/2018/03/18/index.html",
    "revision": "5aaf973de985dbce62a414e3e633e5fa"
  },
  {
    "url": "blog/skepticism/2018/03/18/psychic/index.html",
    "revision": "34144a05556ff5a3b12dd72b1390a24f"
  },
  {
    "url": "blog/skepticism/2018/03/18/quack/index.html",
    "revision": "234988021776a68f1d320e127de6bf0e"
  },
  {
    "url": "blog/skepticism/2018/03/18/radiation/index.html",
    "revision": "3da034ec72a8cab124bf38aad0016c0b"
  },
  {
    "url": "blog/skepticism/2018/03/index.html",
    "revision": "63e4aab41f8d2af28c8a4da2125be006"
  },
  {
    "url": "blog/skepticism/2018/04/08/calocurb/index.html",
    "revision": "00c9677532ac493bcb7c0d7262a22030"
  },
  {
    "url": "blog/skepticism/2018/04/08/cam/index.html",
    "revision": "b7bb93191211925542c9575dd59db3a3"
  },
  {
    "url": "blog/skepticism/2018/04/08/index.html",
    "revision": "dc4ccb858476a06da34b4429b6968e23"
  },
  {
    "url": "blog/skepticism/2018/04/08/psychic/index.html",
    "revision": "e0a3098116ca570af794265555e6bf81"
  },
  {
    "url": "blog/skepticism/2018/04/08/vaccines/index.html",
    "revision": "af9c7e4955ccc5538dfb966b5126a2c5"
  },
  {
    "url": "blog/skepticism/2018/04/15/coffee/index.html",
    "revision": "d6e275c7c3b7b8dad9d88c194c347864"
  },
  {
    "url": "blog/skepticism/2018/04/15/ignorance/index.html",
    "revision": "ff94fff14ddf2533075b8445a0df77ca"
  },
  {
    "url": "blog/skepticism/2018/04/15/index.html",
    "revision": "c89d95b7536135d25e46c06b73ebb505"
  },
  {
    "url": "blog/skepticism/2018/04/15/nasa/index.html",
    "revision": "c41da66e7b6bf1b8370920b61c531d5c"
  },
  {
    "url": "blog/skepticism/2018/04/15/tapu/index.html",
    "revision": "efdd7cf8febea59ab847acb0d6a95f3d"
  },
  {
    "url": "blog/skepticism/2018/04/29/google/index.html",
    "revision": "10a2c278b789838918667ddcdc863306"
  },
  {
    "url": "blog/skepticism/2018/04/29/homeopathy/index.html",
    "revision": "6c5fc746abf48f3b5ba5ad2a3d647b86"
  },
  {
    "url": "blog/skepticism/2018/04/29/index.html",
    "revision": "428a9251c4e04fad0b8ee6b38df032c0"
  },
  {
    "url": "blog/skepticism/2018/04/29/ken/index.html",
    "revision": "6e4363e2c834eb65243e64e1c3294e82"
  },
  {
    "url": "blog/skepticism/2018/04/29/v2k/index.html",
    "revision": "839d2b0871a41ed8a6664b9704cd4b85"
  },
  {
    "url": "blog/skepticism/2018/04/index.html",
    "revision": "ded020ff7ed400a45874cb4ad3d6f10e"
  },
  {
    "url": "blog/skepticism/2018/05/13/astrology/index.html",
    "revision": "2e318db6acde0753323462f709895590"
  },
  {
    "url": "blog/skepticism/2018/05/13/crystals/index.html",
    "revision": "643ed550f2ff81ee2b71eebea6277557"
  },
  {
    "url": "blog/skepticism/2018/05/13/dawkins/index.html",
    "revision": "8acd29a8d497b236aaeedb0262526558"
  },
  {
    "url": "blog/skepticism/2018/05/13/index.html",
    "revision": "8979ae72376835ddf4f60073ec8ec926"
  },
  {
    "url": "blog/skepticism/2018/05/13/kangen/index.html",
    "revision": "ac17902b4795c8e9e99b8baf738a1a8d"
  },
  {
    "url": "blog/skepticism/2018/05/13/vitamins/index.html",
    "revision": "c2d846b8beecf227574b7dd5ed87d581"
  },
  {
    "url": "blog/skepticism/2018/05/27/flat/index.html",
    "revision": "5e9c724037050a4722e15804dad573e4"
  },
  {
    "url": "blog/skepticism/2018/05/27/index.html",
    "revision": "eb396e9fd260f174405396279c0edb8a"
  },
  {
    "url": "blog/skepticism/2018/05/27/kangen/index.html",
    "revision": "617dde7c98e4d9db9097f0eaee7e917c"
  },
  {
    "url": "blog/skepticism/2018/05/27/ness/index.html",
    "revision": "e87447042974273acf29f67b32e59c0d"
  },
  {
    "url": "blog/skepticism/2018/05/27/oz/index.html",
    "revision": "66bc0a8a980b88f5f740b63a56782f10"
  },
  {
    "url": "blog/skepticism/2018/05/27/psychic/index.html",
    "revision": "83520fbe0721a6d174a7deee5bc8d13c"
  },
  {
    "url": "blog/skepticism/2018/05/index.html",
    "revision": "20e6e7d1049ed90c7e29c7835126d02c"
  },
  {
    "url": "blog/skepticism/2018/06/10/astrology/index.html",
    "revision": "69c10ad8f83471f6c930ab00a899d8b0"
  },
  {
    "url": "blog/skepticism/2018/06/10/index.html",
    "revision": "afe405357a3438cb9037b15081a25bdb"
  },
  {
    "url": "blog/skepticism/2018/06/10/nhs/index.html",
    "revision": "0a5c08d8d0fbc9a3993617fbfa3db88e"
  },
  {
    "url": "blog/skepticism/2018/06/10/shakti/index.html",
    "revision": "67645744210875c3cf920fb35eb66dbd"
  },
  {
    "url": "blog/skepticism/2018/06/10/weetbix/index.html",
    "revision": "885bf310efabb6b0264e898f1ef801d1"
  },
  {
    "url": "blog/skepticism/2018/06/24/blasphemy/index.html",
    "revision": "64185099317eba2abf291a3c93ee4178"
  },
  {
    "url": "blog/skepticism/2018/06/24/cannabis/index.html",
    "revision": "3f790504d42d206f4d0cae1a417cb064"
  },
  {
    "url": "blog/skepticism/2018/06/24/hotdog/index.html",
    "revision": "1204c36435aa0bea659298bcc27d2f07"
  },
  {
    "url": "blog/skepticism/2018/06/24/index.html",
    "revision": "a52225e2ec47d7340c5ba1b3e6eb369f"
  },
  {
    "url": "blog/skepticism/2018/06/24/led/index.html",
    "revision": "3132f78b17723e1ec3adb080ea60bb82"
  },
  {
    "url": "blog/skepticism/2018/06/index.html",
    "revision": "0f3c600ec914035a99cbe5a48292c41b"
  },
  {
    "url": "blog/skepticism/2018/07/08/bullet/index.html",
    "revision": "2426f7a58c261f710f22acc520efb904"
  },
  {
    "url": "blog/skepticism/2018/07/08/chiros/index.html",
    "revision": "0435f3cb59a38e427fce86c7768cabbf"
  },
  {
    "url": "blog/skepticism/2018/07/08/hiv/index.html",
    "revision": "acade745cb12c3fbc1906b257f67e1af"
  },
  {
    "url": "blog/skepticism/2018/07/08/hrv/index.html",
    "revision": "263909dffc74aa88e590570f8e0b5d9c"
  },
  {
    "url": "blog/skepticism/2018/07/08/index.html",
    "revision": "b2be04fb591cf42c710f3e0675ea4a7d"
  },
  {
    "url": "blog/skepticism/2018/07/22/cancer/index.html",
    "revision": "0718c0cf0c022a2539ba32212af890bd"
  },
  {
    "url": "blog/skepticism/2018/07/22/index.html",
    "revision": "9b19ca5770f7ce3b2f48cdbe6e004b38"
  },
  {
    "url": "blog/skepticism/2018/07/22/resurrection/index.html",
    "revision": "5c9a394bd9a05b8b65c5cbcbbcd980f9"
  },
  {
    "url": "blog/skepticism/2018/07/22/talc/index.html",
    "revision": "be61b4b29066b2dc8521409e3e6ca81f"
  },
  {
    "url": "blog/skepticism/2018/07/22/visas/index.html",
    "revision": "618533c09c72efca7916807d917b75ea"
  },
  {
    "url": "blog/skepticism/2018/07/index.html",
    "revision": "5479c677959a18aaa0c2f1f589f93903"
  },
  {
    "url": "blog/skepticism/2018/08/05/conf/index.html",
    "revision": "10aec19e0da635e5a269c1e6c503a148"
  },
  {
    "url": "blog/skepticism/2018/08/05/index.html",
    "revision": "7af27dd3830e5f75c58238600afcc955"
  },
  {
    "url": "blog/skepticism/2018/08/05/qanon/index.html",
    "revision": "d0ab4fc58009755546cc97f99fd0e285"
  },
  {
    "url": "blog/skepticism/2018/08/19/index.html",
    "revision": "67791609b24ff7d16da8e7ec45cebc81"
  },
  {
    "url": "blog/skepticism/2018/08/19/jw/index.html",
    "revision": "971e5312a23e32343c417a0ebb504640"
  },
  {
    "url": "blog/skepticism/2018/08/index.html",
    "revision": "cb506d2780f9fcda96d262878e9239a3"
  },
  {
    "url": "blog/skepticism/2018/09/02/allergy/index.html",
    "revision": "ca78d8fc13c8e4bd152e9d2eabfa9de4"
  },
  {
    "url": "blog/skepticism/2018/09/02/catholic/index.html",
    "revision": "7512c98c33702b1ddbdf49708e72bb9b"
  },
  {
    "url": "blog/skepticism/2018/09/02/index.html",
    "revision": "f98382229ade6c44237370304d07142a"
  },
  {
    "url": "blog/skepticism/2018/09/02/jw/index.html",
    "revision": "3fea11001723b990afed7738be6bb3df"
  },
  {
    "url": "blog/skepticism/2018/09/02/sen/index.html",
    "revision": "1e76074d14a448662924a1959b72327a"
  },
  {
    "url": "blog/skepticism/2018/09/16/1080/index.html",
    "revision": "6280cf943611765eccc190fe61940b4b"
  },
  {
    "url": "blog/skepticism/2018/09/16/church/index.html",
    "revision": "65c701b0c21de19cc7e4886527137575"
  },
  {
    "url": "blog/skepticism/2018/09/16/index.html",
    "revision": "3829c4d4760ba8af5e83ddfab01241ba"
  },
  {
    "url": "blog/skepticism/2018/09/16/jones/index.html",
    "revision": "d2a154f96aff85a4e215b12cb7532da1"
  },
  {
    "url": "blog/skepticism/2018/09/16/scammers/index.html",
    "revision": "d5c28936dab14ad54652cbbfbb9e8834"
  },
  {
    "url": "blog/skepticism/2018/09/30/index.html",
    "revision": "80f76478d4727955f79c67f8dd9716ca"
  },
  {
    "url": "blog/skepticism/2018/09/30/jw/index.html",
    "revision": "215fa2c4b5177ce1b2dfeaf6a5b5934e"
  },
  {
    "url": "blog/skepticism/2018/09/30/oto/index.html",
    "revision": "68b72f3c964c9e5d0831dda48a40d912"
  },
  {
    "url": "blog/skepticism/2018/09/30/who/index.html",
    "revision": "0d48ff835777b6d97e31f43ac709aa93"
  },
  {
    "url": "blog/skepticism/2018/09/index.html",
    "revision": "8204d4653075d6bd92b367ec044b5731"
  },
  {
    "url": "blog/skepticism/2018/10/14/hacked/index.html",
    "revision": "8d822d991d6a822079fb7e866333e28a"
  },
  {
    "url": "blog/skepticism/2018/10/14/index.html",
    "revision": "6c888f26e59a914c67cf84c9b0c31bdd"
  },
  {
    "url": "blog/skepticism/2018/10/14/kangen/index.html",
    "revision": "a7194c9a6641cfe690f94f7b31ab6c85"
  },
  {
    "url": "blog/skepticism/2018/10/14/pakistan/index.html",
    "revision": "baa7fe9cac0cdf8ded6b449b9cd77c5b"
  },
  {
    "url": "blog/skepticism/2018/10/14/sarah/index.html",
    "revision": "890ef4d8c2e36b730e724615c0f92a87"
  },
  {
    "url": "blog/skepticism/2018/10/28/blasphemy/index.html",
    "revision": "e70c45975327fc23e47e63ee85986659"
  },
  {
    "url": "blog/skepticism/2018/10/28/hrv/index.html",
    "revision": "79b3e5ffd066bd725e1a90d333f00529"
  },
  {
    "url": "blog/skepticism/2018/10/28/index.html",
    "revision": "f1ef57619f7e4136ecef229a4d049cf1"
  },
  {
    "url": "blog/skepticism/2018/10/28/jesus/index.html",
    "revision": "fece08098654d9465a376e72e0faa2e1"
  },
  {
    "url": "blog/skepticism/2018/10/28/natural/index.html",
    "revision": "7a7ee27d5aaa1de70e75d31dd21aaad3"
  },
  {
    "url": "blog/skepticism/2018/10/index.html",
    "revision": "dc5eb7264ca192b7e038e5a4e57b2b99"
  },
  {
    "url": "blog/skepticism/2018/11/04/bibi/index.html",
    "revision": "609c3e9316d44ed1f0b968478519ccd8"
  },
  {
    "url": "blog/skepticism/2018/11/04/index.html",
    "revision": "5f59fb68872d65d8afe14481ac59e280"
  },
  {
    "url": "blog/skepticism/2018/11/04/jesus/index.html",
    "revision": "21d79e301f1a13fb95021915bc26d7ae"
  },
  {
    "url": "blog/skepticism/2018/11/04/obdii/index.html",
    "revision": "5f0e3a90d125f98d2b892ee49126abe6"
  },
  {
    "url": "blog/skepticism/2018/11/04/sleepdrops/index.html",
    "revision": "16ac6ab55afb16035ad24b5538a26035"
  },
  {
    "url": "blog/skepticism/2018/11/index.html",
    "revision": "96f70cd0d48ce517185a2ae9fe0b2d7e"
  },
  {
    "url": "blog/skepticism/2018/12/02/ark/index.html",
    "revision": "b665e5ed8300798677871a18ee97cc5b"
  },
  {
    "url": "blog/skepticism/2018/12/02/green/index.html",
    "revision": "cb07e91fbeba98876a2d10a7ccaf2cd2"
  },
  {
    "url": "blog/skepticism/2018/12/02/index.html",
    "revision": "7740f02e9bbde8307b02e36fb4c30e55"
  },
  {
    "url": "blog/skepticism/2018/12/02/ri/index.html",
    "revision": "13e0a37f4be660d30487bddbaa89377c"
  },
  {
    "url": "blog/skepticism/2018/12/16/blasphemy/index.html",
    "revision": "fa1fed2ff092d0d707217f792b7f4ad8"
  },
  {
    "url": "blog/skepticism/2018/12/16/index.html",
    "revision": "01009241e1136c0c29799e6c487f1140"
  },
  {
    "url": "blog/skepticism/2018/12/16/sleepdrops/index.html",
    "revision": "ce24a9f86fdf092c61390d04220ef819"
  },
  {
    "url": "blog/skepticism/2018/12/16/tekiri/index.html",
    "revision": "95c24da55f3055b4f758c408c0c3a476"
  },
  {
    "url": "blog/skepticism/2018/12/index.html",
    "revision": "4f8178d6a8e6b8740b5f5970f7bbe2db"
  },
  {
    "url": "blog/skepticism/2018/index.html",
    "revision": "dd0c315991de7620e4928f2c30418516"
  },
  {
    "url": "blog/skepticism/index.html",
    "revision": "e63449076fa9d58dae86c82c3f64f6ad"
  },
  {
    "url": "blog/tag/index.html",
    "revision": "eca363e5dafc7a84c27244fb24a98829"
  },
  {
    "url": "contact/index.html",
    "revision": "390f40ce69a7c5cc141699bb76a78e9b"
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
    "revision": "82409f64c21f64936581df06f42e0103"
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
    "revision": "343f551783998287cfb02a2179f5bc8c"
  },
  {
    "url": "media/me/index.html",
    "revision": "45fc2a8f68259db1f30b75d70277f37e"
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
    "revision": "7f99888b1c6585693d97e958193fe1c7"
  },
  {
    "url": "status/index.html",
    "revision": "5b9055d3d6afc341247da0924b0e62c8"
  },
  {
    "url": "status/steam/index.html",
    "revision": "21629bba749886c0790996803e7de96a"
  },
  {
    "url": "status/twitter/index.html",
    "revision": "70831ea988c873f69a0d1885b740fa56"
  },
  {
    "url": "status/wikipedia/index.html",
    "revision": "40092a2404ef9253558e5432cf014ee5"
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
