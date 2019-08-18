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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "79f1fc8da869b3cc230def21bbdfe2df"
  },
  {
    "url": "assets/css/0.styles.css",
    "revision": "9cfe749877d21fbb596644d1f57387b9"
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
    "revision": "f34db48e44e0ec5966a10069a41021fa"
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
    "revision": "d6ba5d13675ee97b0178e1c350bdd736"
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
    "revision": "e4fbd4c5bd9506537acccb67856b9b38"
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
    "url": "assets/img/vietnam.jpg",
    "revision": "3bc5c3e2accf004c42645a8a4e328d8b"
  },
  {
    "url": "assets/img/vOWAAUK.png",
    "revision": "76c6ebf42c8d36967458233e58386854"
  },
  {
    "url": "assets/js/1.js",
    "revision": "adf262c2e3f34ec8007b70aac4f5e8e3"
  },
  {
    "url": "assets/js/10.js",
    "revision": "f344f3c9e59eb48c91ca5ce1f5bc3390"
  },
  {
    "url": "assets/js/100.js",
    "revision": "a6e76a960842ad63e71c759ea12bae8c"
  },
  {
    "url": "assets/js/101.js",
    "revision": "4c1abd0c35fed59a5b1ec202e72a959c"
  },
  {
    "url": "assets/js/102.js",
    "revision": "18fb8f4206f769e9cec8eefe135bd88e"
  },
  {
    "url": "assets/js/103.js",
    "revision": "9f020116810cf359f1480439be8aed36"
  },
  {
    "url": "assets/js/104.js",
    "revision": "f6c46d5511aae54a21177549d06a95d7"
  },
  {
    "url": "assets/js/105.js",
    "revision": "86675f251d9edac07f55efed9e7dbaa8"
  },
  {
    "url": "assets/js/106.js",
    "revision": "460b6d4c0d40d7775b1b1d3e92457169"
  },
  {
    "url": "assets/js/107.js",
    "revision": "1e0a89e45bb114354ed393dda68fdaf9"
  },
  {
    "url": "assets/js/108.js",
    "revision": "2de9a3affacee787c813df6652c225a6"
  },
  {
    "url": "assets/js/109.js",
    "revision": "89b006a9e9016c6a8d2506998b17a1ac"
  },
  {
    "url": "assets/js/11.js",
    "revision": "d40b7f4c6e3a7c5d7a266423277b7a02"
  },
  {
    "url": "assets/js/110.js",
    "revision": "9cb5c2773b9251b8e3a5bf2ac459e052"
  },
  {
    "url": "assets/js/111.js",
    "revision": "ef2700f0406a7a5bcb00c4ca0aa4f37d"
  },
  {
    "url": "assets/js/112.js",
    "revision": "2c2b38a13d449b3f5e3ef5926c0d8a36"
  },
  {
    "url": "assets/js/113.js",
    "revision": "a8466968d1788ed7cc93f0a416c06e35"
  },
  {
    "url": "assets/js/114.js",
    "revision": "1fb599b19cce5c242fb5085359262184"
  },
  {
    "url": "assets/js/115.js",
    "revision": "26246d82a66bed18b1e70ba2d5539441"
  },
  {
    "url": "assets/js/116.js",
    "revision": "bef9c731a49c59306829f13a0e1200b9"
  },
  {
    "url": "assets/js/117.js",
    "revision": "ddd1b89863d211df33f5b6247ee021ac"
  },
  {
    "url": "assets/js/118.js",
    "revision": "cc91acd857edd8bc47bb6642fe0e35fb"
  },
  {
    "url": "assets/js/119.js",
    "revision": "da10c3bf190ab76602ea9442a56ec216"
  },
  {
    "url": "assets/js/12.js",
    "revision": "1a833919316bc5fe5826aca0215809ea"
  },
  {
    "url": "assets/js/120.js",
    "revision": "053cef573773714aa8ebd9d230d9d520"
  },
  {
    "url": "assets/js/121.js",
    "revision": "e9303f1f2c336d912b4ef0af5a651027"
  },
  {
    "url": "assets/js/122.js",
    "revision": "b18e8a11fd637a926b1d632751ec6dd9"
  },
  {
    "url": "assets/js/123.js",
    "revision": "b5f50c45b92cc9cd3fc1b4dc7d6da0a9"
  },
  {
    "url": "assets/js/124.js",
    "revision": "681274f4852b25c4b883e80e68266fef"
  },
  {
    "url": "assets/js/125.js",
    "revision": "7fdb63248a29b073018a86bf65d56b99"
  },
  {
    "url": "assets/js/126.js",
    "revision": "745fa2c17cc5008c65930083471d9684"
  },
  {
    "url": "assets/js/127.js",
    "revision": "6c904939ba1873b40edf1283ace14b72"
  },
  {
    "url": "assets/js/128.js",
    "revision": "67d9dc6b2401fa4fdf156a6cbbb5500c"
  },
  {
    "url": "assets/js/129.js",
    "revision": "800fc648ace0582209f670b14ab891ea"
  },
  {
    "url": "assets/js/13.js",
    "revision": "3ab6777d54e597cdef0e6901600b623a"
  },
  {
    "url": "assets/js/130.js",
    "revision": "756bcfdd21a102959a9584eb0e82cc82"
  },
  {
    "url": "assets/js/131.js",
    "revision": "95f3b927275382efba2810acd91e31f2"
  },
  {
    "url": "assets/js/132.js",
    "revision": "a2f4b6b8d53e5595b506b247fe5a64eb"
  },
  {
    "url": "assets/js/133.js",
    "revision": "97562d13928e83f019771965e53d744c"
  },
  {
    "url": "assets/js/134.js",
    "revision": "610ceca5d4db60b697f76cdb3e7c2eee"
  },
  {
    "url": "assets/js/135.js",
    "revision": "5d305f8e3601dcd770012314b22b9e21"
  },
  {
    "url": "assets/js/136.js",
    "revision": "693d2a1b06c0e1612816f98b47325cd3"
  },
  {
    "url": "assets/js/137.js",
    "revision": "949246df6bb587c593802cd5c2619328"
  },
  {
    "url": "assets/js/138.js",
    "revision": "de3ca1fc15dc24f1f7b2ae4dde7bd649"
  },
  {
    "url": "assets/js/139.js",
    "revision": "e5eb2c262845229c096a1f1f48122f19"
  },
  {
    "url": "assets/js/14.js",
    "revision": "5e86dafd69edd2124599c98c1091815b"
  },
  {
    "url": "assets/js/140.js",
    "revision": "13f8166152302044d1ac8e96d028395b"
  },
  {
    "url": "assets/js/141.js",
    "revision": "6d21332e00a2a1a25d940886f6cfab63"
  },
  {
    "url": "assets/js/142.js",
    "revision": "6ecb41148803f069b3bb375e0bc2181f"
  },
  {
    "url": "assets/js/143.js",
    "revision": "afce40c066f28fe9f29941b551ceaa48"
  },
  {
    "url": "assets/js/144.js",
    "revision": "723c9596bd8bdf3ab69889b31e6a0d6a"
  },
  {
    "url": "assets/js/145.js",
    "revision": "b678d9e5d0c2914fbab54a040d34f7d1"
  },
  {
    "url": "assets/js/146.js",
    "revision": "9c30527c34c836668c6f874608db3c43"
  },
  {
    "url": "assets/js/147.js",
    "revision": "326be8b73f74e4462740425772ddc6de"
  },
  {
    "url": "assets/js/148.js",
    "revision": "ef86890d95d279edc82a842302a4eb74"
  },
  {
    "url": "assets/js/149.js",
    "revision": "d36cac7aaf092dabc82598c468901689"
  },
  {
    "url": "assets/js/15.js",
    "revision": "ee1154bb792849bd37b023a9c0596cab"
  },
  {
    "url": "assets/js/150.js",
    "revision": "1cff3efef6f0161610ed81024bee3e8c"
  },
  {
    "url": "assets/js/151.js",
    "revision": "40dd24431c0c72e3a41a953ec85b819a"
  },
  {
    "url": "assets/js/152.js",
    "revision": "3f84749d7e7610ad2af1c2346c35e5ec"
  },
  {
    "url": "assets/js/153.js",
    "revision": "705a5cf8e8a7558eb648acca7c2b5f6f"
  },
  {
    "url": "assets/js/154.js",
    "revision": "e6f152c45cfb19d84250dc09fd53fb6b"
  },
  {
    "url": "assets/js/155.js",
    "revision": "3bb5ce622a1be8d5634dec65a4c68b1b"
  },
  {
    "url": "assets/js/156.js",
    "revision": "adab46d34bfca807c7438d13d8d3996d"
  },
  {
    "url": "assets/js/157.js",
    "revision": "773e4f301bbc8d9e590c011d7a902d60"
  },
  {
    "url": "assets/js/158.js",
    "revision": "b2455d2caa6c14885c35618ab30273d3"
  },
  {
    "url": "assets/js/159.js",
    "revision": "b4d26e17dc82800b194fdd6fe85c6600"
  },
  {
    "url": "assets/js/16.js",
    "revision": "bee3a271abf980f8c635bf97c3fd7185"
  },
  {
    "url": "assets/js/160.js",
    "revision": "d5b647a4b76462a767748ec5397f9b1c"
  },
  {
    "url": "assets/js/161.js",
    "revision": "2f8e8811bb544614d135676f62737209"
  },
  {
    "url": "assets/js/162.js",
    "revision": "8ed12816e3c201cd9d54b9c3b0ac5ce0"
  },
  {
    "url": "assets/js/163.js",
    "revision": "b2795688ea056272e565a6e92291a260"
  },
  {
    "url": "assets/js/164.js",
    "revision": "f8473e480e5c51e65e000c659ddceb28"
  },
  {
    "url": "assets/js/165.js",
    "revision": "7928e11216567330bf06ed31cd253f4a"
  },
  {
    "url": "assets/js/166.js",
    "revision": "a3dd8d1e97a5ebd4205ee053dd653c96"
  },
  {
    "url": "assets/js/167.js",
    "revision": "4f5ce2c33c90fe38ec622513b15ac0c6"
  },
  {
    "url": "assets/js/168.js",
    "revision": "19dcca06418a32215209a8850275d465"
  },
  {
    "url": "assets/js/169.js",
    "revision": "00950dd4e849068b815aa4b44c6a2c07"
  },
  {
    "url": "assets/js/17.js",
    "revision": "5c05544bb33596bfc88036091342aa7e"
  },
  {
    "url": "assets/js/170.js",
    "revision": "8adc1db6dcca7dc91d106f42dbcaecaf"
  },
  {
    "url": "assets/js/171.js",
    "revision": "5106218069da3cefc0f85438c3fe20be"
  },
  {
    "url": "assets/js/172.js",
    "revision": "91a9bff73fe9a6f31809350691e8c9de"
  },
  {
    "url": "assets/js/173.js",
    "revision": "95799244a6302a103a158df0b5b8538b"
  },
  {
    "url": "assets/js/174.js",
    "revision": "10821b99592963dd6980506bd92aa118"
  },
  {
    "url": "assets/js/175.js",
    "revision": "78d2f4b30a443e6283b50a0d83dd9261"
  },
  {
    "url": "assets/js/176.js",
    "revision": "3dbcef9545dbb0a12db80340c02a77fb"
  },
  {
    "url": "assets/js/177.js",
    "revision": "271dc58aef195bf2f6215a65e4c4088a"
  },
  {
    "url": "assets/js/178.js",
    "revision": "045fde4ccd00102de15d9c91e2a5396e"
  },
  {
    "url": "assets/js/179.js",
    "revision": "891514fad263deb901e2c53139d39828"
  },
  {
    "url": "assets/js/18.js",
    "revision": "c64810a8a72fbfaf150f13aa689f63a0"
  },
  {
    "url": "assets/js/180.js",
    "revision": "fc1071fe548bbb29e7263eee153cffff"
  },
  {
    "url": "assets/js/181.js",
    "revision": "d6952b12cf9951f3238ad7ebfcea4bf6"
  },
  {
    "url": "assets/js/182.js",
    "revision": "aec9ea7a1a27e3c6b6401b2113a85999"
  },
  {
    "url": "assets/js/183.js",
    "revision": "e3845da13142a143d8dbddc5189836a6"
  },
  {
    "url": "assets/js/184.js",
    "revision": "8ba966f48ab2b573e916a16734dd596d"
  },
  {
    "url": "assets/js/185.js",
    "revision": "5761248df7dccaa15f13e6f46d9a4cda"
  },
  {
    "url": "assets/js/186.js",
    "revision": "5c1720329841bbb24c4121ce7506d9e8"
  },
  {
    "url": "assets/js/187.js",
    "revision": "420462274012a35b0356afdc2779fb0c"
  },
  {
    "url": "assets/js/188.js",
    "revision": "f0dbecbaf9af1539f0609f87c37634cb"
  },
  {
    "url": "assets/js/189.js",
    "revision": "2335298e332a61b8dbeb36fd942bc959"
  },
  {
    "url": "assets/js/19.js",
    "revision": "78e7814a0405b285371034717f8721b3"
  },
  {
    "url": "assets/js/190.js",
    "revision": "4b52ff3d13e480fd667ad92df6f839e8"
  },
  {
    "url": "assets/js/191.js",
    "revision": "d8271e19be9018b7aa0763d5ce4e1480"
  },
  {
    "url": "assets/js/192.js",
    "revision": "d5fc1b693dc49f1d0cbc7f8a5ecd8237"
  },
  {
    "url": "assets/js/193.js",
    "revision": "392b4e5b2bb27f67c01b6b82c79ec1dc"
  },
  {
    "url": "assets/js/194.js",
    "revision": "5fd8e6b3f394053855abb0a034a56667"
  },
  {
    "url": "assets/js/195.js",
    "revision": "624734187637cce7f3bc6330f2023fe1"
  },
  {
    "url": "assets/js/196.js",
    "revision": "b0ebc40fee43456191074c3d2fa1d06c"
  },
  {
    "url": "assets/js/197.js",
    "revision": "36cd510a625b65096f3fa10be1b9778d"
  },
  {
    "url": "assets/js/198.js",
    "revision": "6e32e86d896e56586aedf23181d5883f"
  },
  {
    "url": "assets/js/199.js",
    "revision": "0b36bab850005e52742db6cf68a95473"
  },
  {
    "url": "assets/js/2.js",
    "revision": "311c8afeb5cb001302c07bcd15990435"
  },
  {
    "url": "assets/js/20.js",
    "revision": "bff29f8e1c70e2449dd64c8c45507563"
  },
  {
    "url": "assets/js/200.js",
    "revision": "312c2d6f8e94e5281397a036d6237ffa"
  },
  {
    "url": "assets/js/201.js",
    "revision": "83debb721e0c74bf78eed28b781075c2"
  },
  {
    "url": "assets/js/202.js",
    "revision": "2ad4a73ed276e586110e7f439600a0ee"
  },
  {
    "url": "assets/js/203.js",
    "revision": "716f447166e55d007ba2b315f86b6abe"
  },
  {
    "url": "assets/js/204.js",
    "revision": "a851beaa5c435eb3fb4628c25192f1cf"
  },
  {
    "url": "assets/js/205.js",
    "revision": "b626ab7abefc84d8b8abc169d5057314"
  },
  {
    "url": "assets/js/206.js",
    "revision": "88d4d4addf8f69413d1ca6fc8a9f0125"
  },
  {
    "url": "assets/js/207.js",
    "revision": "0491e97139d37e554c33ea3611e17691"
  },
  {
    "url": "assets/js/208.js",
    "revision": "0d1a0665c41b20730b88c4f42fdbd572"
  },
  {
    "url": "assets/js/209.js",
    "revision": "285fb2a271d14f2ff919c75cd660b3c3"
  },
  {
    "url": "assets/js/21.js",
    "revision": "95d5320a6e6a09a9534c3a1fe40fee48"
  },
  {
    "url": "assets/js/210.js",
    "revision": "f73a7080ff2c67f396bf904c237ddeb6"
  },
  {
    "url": "assets/js/211.js",
    "revision": "d66cb5c10de711858c4d612292fcb96f"
  },
  {
    "url": "assets/js/212.js",
    "revision": "e9be3e032bdc02cb03281ab972857d47"
  },
  {
    "url": "assets/js/213.js",
    "revision": "3caf8c61b7539648cf0f0685ebf63d27"
  },
  {
    "url": "assets/js/214.js",
    "revision": "2807f0d5269a8407264104962c277561"
  },
  {
    "url": "assets/js/215.js",
    "revision": "26f9685154a4915bb12721ae89ce48c8"
  },
  {
    "url": "assets/js/216.js",
    "revision": "cfbe32507d12b42091f0a0220ebfc1d6"
  },
  {
    "url": "assets/js/217.js",
    "revision": "7d117ef15f272e29597dc78787c13ecf"
  },
  {
    "url": "assets/js/218.js",
    "revision": "fe61cdea027aa156d802a30a595814d4"
  },
  {
    "url": "assets/js/219.js",
    "revision": "a50be6c528f45adf51983e49ea1e28eb"
  },
  {
    "url": "assets/js/22.js",
    "revision": "876343494145ff2133f8fe6868036a1c"
  },
  {
    "url": "assets/js/220.js",
    "revision": "9099281c3817658c487cbe9517e31de8"
  },
  {
    "url": "assets/js/221.js",
    "revision": "84cab32bed4f68788bb6eac0b1e37d2e"
  },
  {
    "url": "assets/js/222.js",
    "revision": "6dbeb74cb2bbbe72bc2e4859900b945f"
  },
  {
    "url": "assets/js/223.js",
    "revision": "14460818caa15ec9cd84c64616e28d0d"
  },
  {
    "url": "assets/js/224.js",
    "revision": "5608b0cdb0f8ceb923a1fdd84b2c5c53"
  },
  {
    "url": "assets/js/225.js",
    "revision": "a031e50fca0fadd2261438da7bb8dd96"
  },
  {
    "url": "assets/js/226.js",
    "revision": "0cef0d93f427bf8f1016a0a488fcfd8c"
  },
  {
    "url": "assets/js/227.js",
    "revision": "f98a39f0059dba5d66cfd72b883914f1"
  },
  {
    "url": "assets/js/228.js",
    "revision": "5e7eb1d4c5d33da0cdb8f42f5d3ed72a"
  },
  {
    "url": "assets/js/229.js",
    "revision": "d8532fe82115f928def90279e4a7bf39"
  },
  {
    "url": "assets/js/23.js",
    "revision": "17a0c80543283b5b76e539dc56658cfb"
  },
  {
    "url": "assets/js/230.js",
    "revision": "ef2fd80782602d33a9c4f261f75f26e7"
  },
  {
    "url": "assets/js/231.js",
    "revision": "e79e2d79241ce5383215e01f5a344eda"
  },
  {
    "url": "assets/js/232.js",
    "revision": "0e242576e3827aada0291b305a8e0a3e"
  },
  {
    "url": "assets/js/233.js",
    "revision": "1f28e5f84d5fe6afe1dddb6d06466840"
  },
  {
    "url": "assets/js/234.js",
    "revision": "971f9d918110c7996c39c8331247d0d0"
  },
  {
    "url": "assets/js/235.js",
    "revision": "d2c1767bae0f47c59444c9e60e350c14"
  },
  {
    "url": "assets/js/236.js",
    "revision": "b73e286b88cab897f65d88c7d1001c71"
  },
  {
    "url": "assets/js/237.js",
    "revision": "e4b1f49054280934bd5b0070467aa959"
  },
  {
    "url": "assets/js/238.js",
    "revision": "ea5ac0aec26c35ca70dfc24a35f67c2f"
  },
  {
    "url": "assets/js/239.js",
    "revision": "4dbeb5eeda77eb0199e38706366b2467"
  },
  {
    "url": "assets/js/24.js",
    "revision": "1d57d116595f9666731b46698ea71bb2"
  },
  {
    "url": "assets/js/240.js",
    "revision": "6809a3c23c49c61ac4d1ab84fef9c519"
  },
  {
    "url": "assets/js/241.js",
    "revision": "0ceb39ba976cbaf45fdee1f8836dd62e"
  },
  {
    "url": "assets/js/242.js",
    "revision": "5f51401e50edb56a3482b820603f9355"
  },
  {
    "url": "assets/js/243.js",
    "revision": "84d627d6a068f9c8076d682a87b4abce"
  },
  {
    "url": "assets/js/244.js",
    "revision": "62853cad04ce616f8e0efcb9ca6f47da"
  },
  {
    "url": "assets/js/245.js",
    "revision": "4b655038f82c4d00c3ccf7ebb5fd8a10"
  },
  {
    "url": "assets/js/246.js",
    "revision": "76f78ea9561bfe3a276d34a39ac2b9d7"
  },
  {
    "url": "assets/js/247.js",
    "revision": "1264056bd905324705b930c60bc336b7"
  },
  {
    "url": "assets/js/248.js",
    "revision": "68bc9991bfa7d1060198c80a1b6a7796"
  },
  {
    "url": "assets/js/249.js",
    "revision": "5498c9b9313a077570e6b4ecb933f47e"
  },
  {
    "url": "assets/js/25.js",
    "revision": "ad198785a0ee54203debbba0a09732e6"
  },
  {
    "url": "assets/js/250.js",
    "revision": "be3ebd5a2fc9042eff6e2344f0d33dfd"
  },
  {
    "url": "assets/js/251.js",
    "revision": "f898aac5760b07a8a612cf95f6d71cb5"
  },
  {
    "url": "assets/js/252.js",
    "revision": "1e6926153ca20bec2213847256677037"
  },
  {
    "url": "assets/js/253.js",
    "revision": "9cf615d0bc23d71b468e8efed3d5f69c"
  },
  {
    "url": "assets/js/254.js",
    "revision": "fd0989efdd9226030cacd7a51265d0ec"
  },
  {
    "url": "assets/js/255.js",
    "revision": "6b43e9b6969f5938a6bf3a26218b3141"
  },
  {
    "url": "assets/js/256.js",
    "revision": "d29a6bd74722952ebf3ee909244fa999"
  },
  {
    "url": "assets/js/257.js",
    "revision": "92f897bec986c418681a1c4c1b2444a4"
  },
  {
    "url": "assets/js/258.js",
    "revision": "0bcda2c8332171dca37834498c098548"
  },
  {
    "url": "assets/js/259.js",
    "revision": "4e6329cd179209acb4c6b1e736be55ad"
  },
  {
    "url": "assets/js/26.js",
    "revision": "c9d7763ff470e67f52b24a4b1fb38218"
  },
  {
    "url": "assets/js/260.js",
    "revision": "e97f968bf66385367e93fed115d8ac44"
  },
  {
    "url": "assets/js/261.js",
    "revision": "15a2c135525573c3a321ca366b7eee62"
  },
  {
    "url": "assets/js/262.js",
    "revision": "85f5e863234cf6a4319bab10769d1949"
  },
  {
    "url": "assets/js/263.js",
    "revision": "2868f4a983ce2a8ad9c82e91bc9198a9"
  },
  {
    "url": "assets/js/264.js",
    "revision": "ee60fda655130fac1c7c9e64eb595eec"
  },
  {
    "url": "assets/js/265.js",
    "revision": "8337424b13d86abee2e1d650832611a1"
  },
  {
    "url": "assets/js/266.js",
    "revision": "f82963860630151202af6042c9d681a9"
  },
  {
    "url": "assets/js/267.js",
    "revision": "67f4894b787eef08d423cd7081372335"
  },
  {
    "url": "assets/js/268.js",
    "revision": "f920a8650bcb6d689630dc1ed39d4876"
  },
  {
    "url": "assets/js/269.js",
    "revision": "0cd1d33ff3f003a6de9eab5c91a190a6"
  },
  {
    "url": "assets/js/27.js",
    "revision": "6d13735cf575b8c011fc09f9ba2a0683"
  },
  {
    "url": "assets/js/270.js",
    "revision": "e2aef135556e8175a617746585296245"
  },
  {
    "url": "assets/js/271.js",
    "revision": "58a5ff84615bb03810f1adaf26e9344f"
  },
  {
    "url": "assets/js/272.js",
    "revision": "1b57411c070941579a5307520763fe04"
  },
  {
    "url": "assets/js/273.js",
    "revision": "6cd9b691e1558a321f80a1cb075ccf2b"
  },
  {
    "url": "assets/js/274.js",
    "revision": "d8abbb0f87028a0e4baffd507b860fb7"
  },
  {
    "url": "assets/js/275.js",
    "revision": "fdee21d77744ff813a81a8b3654c5b46"
  },
  {
    "url": "assets/js/276.js",
    "revision": "eafe4096497eea21f5db0f6908a560d3"
  },
  {
    "url": "assets/js/277.js",
    "revision": "947e7cd44815e13478f2c220afbb646c"
  },
  {
    "url": "assets/js/278.js",
    "revision": "a91d1bdc0ddf2bb743e5904ae5e2045b"
  },
  {
    "url": "assets/js/279.js",
    "revision": "4429976cf57c57f4280c0e2589f963fd"
  },
  {
    "url": "assets/js/28.js",
    "revision": "d506ea3bfe79f903dc32bc5e015a6bea"
  },
  {
    "url": "assets/js/280.js",
    "revision": "3434d76b3b9a89524b7c7f2a10b2b82a"
  },
  {
    "url": "assets/js/281.js",
    "revision": "bf3c52667f1e29ad8ba5f96fcc131ea8"
  },
  {
    "url": "assets/js/282.js",
    "revision": "984918cbe19416a15ee499851fd88a6d"
  },
  {
    "url": "assets/js/283.js",
    "revision": "6405d7d009fa6ccef9c232721403c798"
  },
  {
    "url": "assets/js/284.js",
    "revision": "3c8d914c022a94e7ea1d9149fbc5049d"
  },
  {
    "url": "assets/js/285.js",
    "revision": "af3d424f6c66419adfe5989d9288f1e5"
  },
  {
    "url": "assets/js/286.js",
    "revision": "ede3812e7411b5aa03f6aeb6374967d7"
  },
  {
    "url": "assets/js/287.js",
    "revision": "075292e5be0faa7c021a68f1af10b119"
  },
  {
    "url": "assets/js/288.js",
    "revision": "2c7b04c2f346b94f021eae9e33e60006"
  },
  {
    "url": "assets/js/289.js",
    "revision": "d1cf76a7750903429b0cdaaf6078fc27"
  },
  {
    "url": "assets/js/29.js",
    "revision": "4f0e4044c2170183f6df4c5fa00461a5"
  },
  {
    "url": "assets/js/290.js",
    "revision": "8cb8318fc388e3afdbd43dc47e36662d"
  },
  {
    "url": "assets/js/291.js",
    "revision": "6d3c756b5b0d1f4c5e369612330d538c"
  },
  {
    "url": "assets/js/292.js",
    "revision": "ff9e75996579d1979d2f0290cb7519d1"
  },
  {
    "url": "assets/js/293.js",
    "revision": "ca205e7b0de475a83731db4f5e99ca9f"
  },
  {
    "url": "assets/js/294.js",
    "revision": "2c2f38dfa61ece317d8660e96895b866"
  },
  {
    "url": "assets/js/295.js",
    "revision": "0e22ce8a18f0ecad57ed27ea7624289f"
  },
  {
    "url": "assets/js/296.js",
    "revision": "ed2d58951e0225312ed1e7f10744a4f2"
  },
  {
    "url": "assets/js/297.js",
    "revision": "ec23830725f89ded44606a1b107e2729"
  },
  {
    "url": "assets/js/298.js",
    "revision": "eb4e4795694f4b506ee770f190bd4efd"
  },
  {
    "url": "assets/js/299.js",
    "revision": "137699b1c042f03b902d448b2a2a9864"
  },
  {
    "url": "assets/js/30.js",
    "revision": "f76cef3f2a0655c4b256c90146cbcace"
  },
  {
    "url": "assets/js/300.js",
    "revision": "c8a0777ec48c920fbc59346cfdf4351b"
  },
  {
    "url": "assets/js/301.js",
    "revision": "eba5d02023ed78f0349af1bbacea16cd"
  },
  {
    "url": "assets/js/302.js",
    "revision": "aa25ee9ed8976eb2e45fd28259846eff"
  },
  {
    "url": "assets/js/303.js",
    "revision": "9288ef9d9656cdb60e6514f61bbdf8f2"
  },
  {
    "url": "assets/js/304.js",
    "revision": "5efbeac14092ef8eaf42ed1c367f6e50"
  },
  {
    "url": "assets/js/305.js",
    "revision": "2c783b8fe0419ad24ac2752c9fd52bcf"
  },
  {
    "url": "assets/js/306.js",
    "revision": "c8dcff9e0b8cf1f25263e5fe06227cd4"
  },
  {
    "url": "assets/js/307.js",
    "revision": "aaffd14c5c26ee6e9f9c288b4b33fd17"
  },
  {
    "url": "assets/js/308.js",
    "revision": "d5d9df97943562ff2de94ab10107b113"
  },
  {
    "url": "assets/js/309.js",
    "revision": "4c0d02621d3a41e16f53a45296e324fa"
  },
  {
    "url": "assets/js/31.js",
    "revision": "11598cbdf1ac472547c5dcf46783b9e9"
  },
  {
    "url": "assets/js/310.js",
    "revision": "4c01cf1ee40858564aee4f4899952577"
  },
  {
    "url": "assets/js/311.js",
    "revision": "8dc04c0e2ecc8f147499748fc22d927c"
  },
  {
    "url": "assets/js/312.js",
    "revision": "ee6206f845b68badceee62c41aaceada"
  },
  {
    "url": "assets/js/313.js",
    "revision": "eab6639570771b05e2a84fcd078659d8"
  },
  {
    "url": "assets/js/314.js",
    "revision": "ef7f104d9b83a16aefc0a389c57c5fcd"
  },
  {
    "url": "assets/js/315.js",
    "revision": "d804cc699da3ed401104acfefaa6ee15"
  },
  {
    "url": "assets/js/316.js",
    "revision": "6098e88d6429945e312b51210828d1af"
  },
  {
    "url": "assets/js/317.js",
    "revision": "144d06e62132c0a6ff30293a4bb7634c"
  },
  {
    "url": "assets/js/318.js",
    "revision": "ef858134265f826ee1b7375d33276e65"
  },
  {
    "url": "assets/js/319.js",
    "revision": "a64795dac3efc12a6852633ff4330792"
  },
  {
    "url": "assets/js/32.js",
    "revision": "c58b42beab35ac88c1b666cd9d44ed77"
  },
  {
    "url": "assets/js/320.js",
    "revision": "63e9b3b508e9ca4b69f1a18e887fc457"
  },
  {
    "url": "assets/js/321.js",
    "revision": "80542e4bd9328ed4dc8518003412f145"
  },
  {
    "url": "assets/js/322.js",
    "revision": "ec712ef9a76eda690de537d37a834bdb"
  },
  {
    "url": "assets/js/323.js",
    "revision": "3cfcf435b0d36db5949675d35b90992e"
  },
  {
    "url": "assets/js/324.js",
    "revision": "92563b69791bd41eb14b82cbeeadd5d0"
  },
  {
    "url": "assets/js/325.js",
    "revision": "bc9d5e84facbb4a759fac7132f2aaa3f"
  },
  {
    "url": "assets/js/326.js",
    "revision": "06262bf06c4c8123382e87796785484a"
  },
  {
    "url": "assets/js/327.js",
    "revision": "52a97bcc87b305855d31c5568ee455e0"
  },
  {
    "url": "assets/js/328.js",
    "revision": "ffbfdc28eea80802229c1ba914cc6a13"
  },
  {
    "url": "assets/js/329.js",
    "revision": "06f09a9d7810004bb173c310e7e0c4b7"
  },
  {
    "url": "assets/js/33.js",
    "revision": "1b5a309f391a9d1cde2753c6e7253c76"
  },
  {
    "url": "assets/js/330.js",
    "revision": "52e9b8b21b3eec85256194dd20e5a8a6"
  },
  {
    "url": "assets/js/331.js",
    "revision": "cdd237b5cd8c3b8b504f1583fdb7ce94"
  },
  {
    "url": "assets/js/332.js",
    "revision": "ee4cbe759727a310dbb72e7ab1ce71ff"
  },
  {
    "url": "assets/js/333.js",
    "revision": "2695915cc5d8ce95834791070c071be4"
  },
  {
    "url": "assets/js/334.js",
    "revision": "d12a811ca697f74837b276e64a9a4e03"
  },
  {
    "url": "assets/js/335.js",
    "revision": "f5366b0ae249289844ad6b60f05bc688"
  },
  {
    "url": "assets/js/336.js",
    "revision": "94089dbbfcad113a5eedc69a78fb7507"
  },
  {
    "url": "assets/js/337.js",
    "revision": "bcdd0e4af731ea7159db9e4f36c3d201"
  },
  {
    "url": "assets/js/338.js",
    "revision": "eec00bb440ced74ae7b2f00c268e76c5"
  },
  {
    "url": "assets/js/339.js",
    "revision": "137b23b5444beecaf4bb1c304eb5a395"
  },
  {
    "url": "assets/js/34.js",
    "revision": "3ab52c848a5065621b7b55e6251e9a34"
  },
  {
    "url": "assets/js/340.js",
    "revision": "84d02523ef81d14ae5453089fa787a37"
  },
  {
    "url": "assets/js/341.js",
    "revision": "442a88a63758eb380c2d5251af963df8"
  },
  {
    "url": "assets/js/342.js",
    "revision": "0a8c9bfaaf724816c5f592130ca7699e"
  },
  {
    "url": "assets/js/343.js",
    "revision": "2f5bee85424b3b5eb07c9a66653a555a"
  },
  {
    "url": "assets/js/344.js",
    "revision": "7d64358d1aa6fabe1537eef2df65b76d"
  },
  {
    "url": "assets/js/345.js",
    "revision": "1d9effa7037eb8be65d4c04db0567220"
  },
  {
    "url": "assets/js/346.js",
    "revision": "5d4e218bc124ad389d43d522b2216743"
  },
  {
    "url": "assets/js/347.js",
    "revision": "425a54a39347259a7e8b3cbeeefd35ec"
  },
  {
    "url": "assets/js/348.js",
    "revision": "7f88d4bbf66bb7f6036af40091013d83"
  },
  {
    "url": "assets/js/349.js",
    "revision": "f210d992a347694dee85a7edb6977e28"
  },
  {
    "url": "assets/js/35.js",
    "revision": "34e80c433d072c2d0fb21d1b49b982df"
  },
  {
    "url": "assets/js/350.js",
    "revision": "6a55d8e7966a674651de373b9ed57181"
  },
  {
    "url": "assets/js/351.js",
    "revision": "c7ee82db9eb08f203141f06cd74a6044"
  },
  {
    "url": "assets/js/352.js",
    "revision": "0cce4e0e82687a1bd20ff6de1a0dec2a"
  },
  {
    "url": "assets/js/353.js",
    "revision": "9d1bcbc18d7c855df82b14aaba352689"
  },
  {
    "url": "assets/js/354.js",
    "revision": "1b25a7de98dc9c43bbf83e7b62681faf"
  },
  {
    "url": "assets/js/355.js",
    "revision": "a32838e90a0c39ae0784d60fb58493a3"
  },
  {
    "url": "assets/js/356.js",
    "revision": "44b18e77be099bdcc76c075cbd2429a8"
  },
  {
    "url": "assets/js/357.js",
    "revision": "713bed8fd71492944ce40b904e10b5d3"
  },
  {
    "url": "assets/js/358.js",
    "revision": "4352d86e9d2226395f42b87bedecfc3a"
  },
  {
    "url": "assets/js/359.js",
    "revision": "0f0766923c04ddf05503cac3d0116a50"
  },
  {
    "url": "assets/js/36.js",
    "revision": "8233d5949abfddfd98b2495c2894753c"
  },
  {
    "url": "assets/js/360.js",
    "revision": "fc628907b05cb626b151ca9339b24b76"
  },
  {
    "url": "assets/js/361.js",
    "revision": "b44feb9ff4a47f6f53601d30a5b99084"
  },
  {
    "url": "assets/js/362.js",
    "revision": "bf0ced03ad20a08f9bc33592b414b819"
  },
  {
    "url": "assets/js/363.js",
    "revision": "1e24dcdb2c2c6f3861a4241730ca29ec"
  },
  {
    "url": "assets/js/364.js",
    "revision": "25764ebc2625cf74aa5ef4024168cf47"
  },
  {
    "url": "assets/js/365.js",
    "revision": "b658777f3d87533f69961d3f79ab6b6b"
  },
  {
    "url": "assets/js/366.js",
    "revision": "b553ab5eba24f45af572d99931f66bd9"
  },
  {
    "url": "assets/js/367.js",
    "revision": "1eafd2d6315770242b46804c443e6ae2"
  },
  {
    "url": "assets/js/368.js",
    "revision": "f442b4d59cf37a6293ed52eacaa01c24"
  },
  {
    "url": "assets/js/369.js",
    "revision": "1a4159fa8abd6c8facf4f6a3b888a1ac"
  },
  {
    "url": "assets/js/37.js",
    "revision": "06ed6c2a9e128453dc34aec4e8921b42"
  },
  {
    "url": "assets/js/370.js",
    "revision": "7558df541eda8faf34d1d4475839974d"
  },
  {
    "url": "assets/js/371.js",
    "revision": "74897ac1e674fdd772c9b753bfaec669"
  },
  {
    "url": "assets/js/372.js",
    "revision": "1e0efab47c1379875f9271fdee297fd6"
  },
  {
    "url": "assets/js/373.js",
    "revision": "b0e429ee80740ccd187bb5fa0e3f85de"
  },
  {
    "url": "assets/js/374.js",
    "revision": "fbe74fd9a694a39c5d96999a75bc6f59"
  },
  {
    "url": "assets/js/375.js",
    "revision": "dc60c23f8ab5640f0ce8b18655c88821"
  },
  {
    "url": "assets/js/376.js",
    "revision": "c72ce1e34075e64160881f7dbdc6d612"
  },
  {
    "url": "assets/js/377.js",
    "revision": "db937dc4aa480fd6f4734f260c01c6dd"
  },
  {
    "url": "assets/js/378.js",
    "revision": "b05094f1f0ad2264ac5891a29e2c89a1"
  },
  {
    "url": "assets/js/379.js",
    "revision": "a9d8fe9523f80f82da545ca1e8f16d03"
  },
  {
    "url": "assets/js/38.js",
    "revision": "4f515aa2bb101e5d04ea58cea1887d24"
  },
  {
    "url": "assets/js/380.js",
    "revision": "b164feee997315dd8daf76aa8930798f"
  },
  {
    "url": "assets/js/381.js",
    "revision": "eccb3137434b206188359d224b4e3de4"
  },
  {
    "url": "assets/js/382.js",
    "revision": "bba2f35108f821e64105fb109326a073"
  },
  {
    "url": "assets/js/383.js",
    "revision": "908c89287cadec9bbf801ac778a67a6f"
  },
  {
    "url": "assets/js/384.js",
    "revision": "226340403c052019209e730cf79d4a42"
  },
  {
    "url": "assets/js/385.js",
    "revision": "61159c970a2771f83c24b9e284b009dc"
  },
  {
    "url": "assets/js/386.js",
    "revision": "b6659db88a00f2e3e9551849f51b3fcb"
  },
  {
    "url": "assets/js/387.js",
    "revision": "3eefe3b9503653599c1d3d0ca9b5a91f"
  },
  {
    "url": "assets/js/388.js",
    "revision": "468ee8d1d149b814d90ca441db3016b9"
  },
  {
    "url": "assets/js/389.js",
    "revision": "9e56b44eba1e80c5b7d8950faf95daab"
  },
  {
    "url": "assets/js/39.js",
    "revision": "be9d90757f590d2758a97fdbd519ebfe"
  },
  {
    "url": "assets/js/390.js",
    "revision": "0f74c6e9b64bdca0bf19280e3c581ad1"
  },
  {
    "url": "assets/js/391.js",
    "revision": "aa683feac2b8701ff6070cad5b4e5078"
  },
  {
    "url": "assets/js/392.js",
    "revision": "6f2bd037df0baf0442be77c0652779d6"
  },
  {
    "url": "assets/js/393.js",
    "revision": "f63630c84f793da5a73134c2064a1e94"
  },
  {
    "url": "assets/js/394.js",
    "revision": "a20144d1f7aaf106e4915cd5820ade81"
  },
  {
    "url": "assets/js/395.js",
    "revision": "7cd3f795ff70609becbffd265c2c563f"
  },
  {
    "url": "assets/js/396.js",
    "revision": "400a98586438452fe3b57ee556f6631b"
  },
  {
    "url": "assets/js/397.js",
    "revision": "bf6c6f08ce596d5fc34b322d1d408428"
  },
  {
    "url": "assets/js/398.js",
    "revision": "7c429682a86a97372ed34546ac56f333"
  },
  {
    "url": "assets/js/399.js",
    "revision": "f2a58704acabe94e42f88d0975dcba31"
  },
  {
    "url": "assets/js/4.js",
    "revision": "823693e6548342ff18933b17ad0f8595"
  },
  {
    "url": "assets/js/40.js",
    "revision": "c495600c809cd3f247cb8a6a243e102c"
  },
  {
    "url": "assets/js/400.js",
    "revision": "b537eac58529db9c81a19a7db32c76c3"
  },
  {
    "url": "assets/js/401.js",
    "revision": "21972a829a201cc68df3d1cde7dc5088"
  },
  {
    "url": "assets/js/402.js",
    "revision": "c787c310fc329818aa6de48f322c3131"
  },
  {
    "url": "assets/js/403.js",
    "revision": "e5e48c4c91d438c1eb22403921a2748e"
  },
  {
    "url": "assets/js/404.js",
    "revision": "81a6e08edc6bd6f0935b95156b1dcdc1"
  },
  {
    "url": "assets/js/405.js",
    "revision": "9a25ef6a4dde858b7ca7f75cc565d587"
  },
  {
    "url": "assets/js/406.js",
    "revision": "91b50a007f80f512059c6890135a796f"
  },
  {
    "url": "assets/js/407.js",
    "revision": "1fddb6a4d2c147d144fff75c8720d704"
  },
  {
    "url": "assets/js/408.js",
    "revision": "9a4a355a2d836de1fac09f0bd60e7c64"
  },
  {
    "url": "assets/js/409.js",
    "revision": "9ed14cf85e46ec1b68a13d5690a42380"
  },
  {
    "url": "assets/js/41.js",
    "revision": "43db1eb37d30da4ca8de929256fd7d21"
  },
  {
    "url": "assets/js/410.js",
    "revision": "b841a79ff72602a698ff4d2ba0d229f0"
  },
  {
    "url": "assets/js/411.js",
    "revision": "2634bac7e2b389781f4d641c622f7f82"
  },
  {
    "url": "assets/js/412.js",
    "revision": "3b65e68d08208bbf50f82812b828485a"
  },
  {
    "url": "assets/js/413.js",
    "revision": "6d992bd2c87f965bd528e8b59c301acd"
  },
  {
    "url": "assets/js/414.js",
    "revision": "ba86b3b3df87e9ed0fcea1ee2ffa1572"
  },
  {
    "url": "assets/js/415.js",
    "revision": "8e68a07b5407a1930f2675b4ec562030"
  },
  {
    "url": "assets/js/416.js",
    "revision": "985885eb7974be6c3647180cb4e05f5f"
  },
  {
    "url": "assets/js/417.js",
    "revision": "a0974f19cda21adf0dc7420b10b2f6b3"
  },
  {
    "url": "assets/js/418.js",
    "revision": "0ee1e20444f7651f1ce1ecad620e742a"
  },
  {
    "url": "assets/js/419.js",
    "revision": "5d94384655fb6ce89b054aac362470b5"
  },
  {
    "url": "assets/js/42.js",
    "revision": "a21101174c9cf3e7f033b4668f567b50"
  },
  {
    "url": "assets/js/420.js",
    "revision": "a7760c8ddc49897533cf9bec07a53d79"
  },
  {
    "url": "assets/js/421.js",
    "revision": "ef0cf217f4659b6da4c3f7505152bcf2"
  },
  {
    "url": "assets/js/422.js",
    "revision": "04a009308498e6d339d429ac2d193629"
  },
  {
    "url": "assets/js/423.js",
    "revision": "38eacbeeff381619df6d3a6eb8e00547"
  },
  {
    "url": "assets/js/424.js",
    "revision": "fd24687ff6408ab2dc433d61533e9c49"
  },
  {
    "url": "assets/js/425.js",
    "revision": "1609ce4e2db7f2709b5cfcd491dee2d5"
  },
  {
    "url": "assets/js/426.js",
    "revision": "c2bac706866f122c984c94c08be4939a"
  },
  {
    "url": "assets/js/427.js",
    "revision": "6515cabc709c73699499d9d8d47e61b4"
  },
  {
    "url": "assets/js/428.js",
    "revision": "51040751139cef9905bd9090bd187d33"
  },
  {
    "url": "assets/js/429.js",
    "revision": "6d3b54344475e3810f6fcfd7f1bc51c0"
  },
  {
    "url": "assets/js/43.js",
    "revision": "543eb94c59e37012e490a660f8fdaef6"
  },
  {
    "url": "assets/js/430.js",
    "revision": "a279c42baf77ec8f4773035b13821a30"
  },
  {
    "url": "assets/js/431.js",
    "revision": "7eedcc11141beb4a607354ea7679968e"
  },
  {
    "url": "assets/js/432.js",
    "revision": "90ecb4cda126e0d43a9e0ae8f3f1ee29"
  },
  {
    "url": "assets/js/433.js",
    "revision": "2b7c8f418d3e41337ffa14fa27bc82bb"
  },
  {
    "url": "assets/js/434.js",
    "revision": "1703c989faa279cc3d3f0686a222b9a0"
  },
  {
    "url": "assets/js/435.js",
    "revision": "35b6eda8c35e23ff5eb99bf8c75f4c97"
  },
  {
    "url": "assets/js/436.js",
    "revision": "56b0d3d74c0ed91a0566a5173b5bb9e5"
  },
  {
    "url": "assets/js/437.js",
    "revision": "daa6bba9b0bb08c2eba60b6a30078d02"
  },
  {
    "url": "assets/js/438.js",
    "revision": "dc61159b9590bd58b53345a5c7794d39"
  },
  {
    "url": "assets/js/439.js",
    "revision": "4f5d171ec54dd1f3d5387842e72652fe"
  },
  {
    "url": "assets/js/44.js",
    "revision": "30bc120a6edca7e7296070d3c3701434"
  },
  {
    "url": "assets/js/440.js",
    "revision": "6d3d68b6d986dd3cbc7fc5c15c64a764"
  },
  {
    "url": "assets/js/441.js",
    "revision": "b513a04b2f3cbd533f8a70cd108fcc63"
  },
  {
    "url": "assets/js/442.js",
    "revision": "dfe09441c6fe0f9a9b85f23041a92a67"
  },
  {
    "url": "assets/js/443.js",
    "revision": "01145d92c17e0eac0ab22d4fb999f22d"
  },
  {
    "url": "assets/js/444.js",
    "revision": "13e4306405484658a0c953f9b3190b50"
  },
  {
    "url": "assets/js/445.js",
    "revision": "43dfac8ebadbfea0c31e35bdd380a151"
  },
  {
    "url": "assets/js/446.js",
    "revision": "cec708d722092b248e7fc66877b2db55"
  },
  {
    "url": "assets/js/447.js",
    "revision": "e46e4883f9e204e20f67bb4e9234b530"
  },
  {
    "url": "assets/js/448.js",
    "revision": "f17599948c0063b17f3e5eb8e15f8e78"
  },
  {
    "url": "assets/js/449.js",
    "revision": "03f14eb50940a0c0fec785abc3c77cab"
  },
  {
    "url": "assets/js/45.js",
    "revision": "465099f31bbf8270a77cf7183879693d"
  },
  {
    "url": "assets/js/450.js",
    "revision": "fc66d91d96f8718126853ba8fe627eb4"
  },
  {
    "url": "assets/js/451.js",
    "revision": "5e5f18aad12d6a795d8fe4b117bb418d"
  },
  {
    "url": "assets/js/452.js",
    "revision": "ac8fcc5a6ef11d61162aebaab297c67f"
  },
  {
    "url": "assets/js/453.js",
    "revision": "5c2736685f1f7fc85a5e5112fd6c16cc"
  },
  {
    "url": "assets/js/454.js",
    "revision": "314caa0f2ff6bf1ce1e19eaf6bedf2f4"
  },
  {
    "url": "assets/js/455.js",
    "revision": "faf5ff1733fdb563480d1e9389023acc"
  },
  {
    "url": "assets/js/456.js",
    "revision": "9d3019d0a1fd1c3f5e1d01fc6ba85eac"
  },
  {
    "url": "assets/js/457.js",
    "revision": "008eda854dddf17d7f262d99e467a671"
  },
  {
    "url": "assets/js/458.js",
    "revision": "d322d5e16a4dd62ca66223aff90b7f9a"
  },
  {
    "url": "assets/js/459.js",
    "revision": "6c9cbc4ddf515a144019ea044c659511"
  },
  {
    "url": "assets/js/46.js",
    "revision": "44ed03ddc284af7cc34b141b9dde1ef1"
  },
  {
    "url": "assets/js/460.js",
    "revision": "c58b881c53832442c36f34f59a0cd323"
  },
  {
    "url": "assets/js/461.js",
    "revision": "d304cd9d6e08060ca4f163c0114fe688"
  },
  {
    "url": "assets/js/462.js",
    "revision": "ddc2d9bef3acf226c5d7e38872d06efc"
  },
  {
    "url": "assets/js/463.js",
    "revision": "225864ea00d2ae05e1f4a0db35011b22"
  },
  {
    "url": "assets/js/464.js",
    "revision": "f178a7ff87e65af0f21de8b0af937477"
  },
  {
    "url": "assets/js/465.js",
    "revision": "4f53b398f540e2924f889122340435c3"
  },
  {
    "url": "assets/js/466.js",
    "revision": "c4fc2bb28e905f7ae1b4beaf52f369b5"
  },
  {
    "url": "assets/js/467.js",
    "revision": "939e78f9fe2b5ec1aa7ae2bd8ce20b7c"
  },
  {
    "url": "assets/js/468.js",
    "revision": "71c12e7c5cefa2c24131648fb8a58a14"
  },
  {
    "url": "assets/js/469.js",
    "revision": "9149c0f6fdddd175f3005e807e30b169"
  },
  {
    "url": "assets/js/47.js",
    "revision": "ff756354612be582785e30f8be8706ee"
  },
  {
    "url": "assets/js/470.js",
    "revision": "fba0ed3f0985ba763b8ae29769842992"
  },
  {
    "url": "assets/js/471.js",
    "revision": "d5f18e33834d19895f26adce8868e194"
  },
  {
    "url": "assets/js/472.js",
    "revision": "4a85b436c30caade603663c1656c4fb7"
  },
  {
    "url": "assets/js/473.js",
    "revision": "88807f5317b9b871264e659544be4f9a"
  },
  {
    "url": "assets/js/474.js",
    "revision": "c404ebee6c79a71c704e300ed0057590"
  },
  {
    "url": "assets/js/475.js",
    "revision": "13e632f547bf9ed22ea3811b49f19fdf"
  },
  {
    "url": "assets/js/476.js",
    "revision": "5ea1857a84f6de5a588a94be863f2e89"
  },
  {
    "url": "assets/js/477.js",
    "revision": "7ca608d50931560cb80e41b0a82ca84f"
  },
  {
    "url": "assets/js/478.js",
    "revision": "a61eef50d384e899c64d0b75ad6dd8bd"
  },
  {
    "url": "assets/js/479.js",
    "revision": "6a26df45c7231a40b2d2313147011096"
  },
  {
    "url": "assets/js/48.js",
    "revision": "af59112fde6414aa7cc54dbedb3381fa"
  },
  {
    "url": "assets/js/480.js",
    "revision": "17f79bf085da9ae10f70729fad966d6f"
  },
  {
    "url": "assets/js/481.js",
    "revision": "e4ac6c382e13452acbd071a24ce04946"
  },
  {
    "url": "assets/js/482.js",
    "revision": "431e28e836ddb9f2d8d3a84487f0b771"
  },
  {
    "url": "assets/js/483.js",
    "revision": "0eb67033847adbc0bb86df1f603c6a6b"
  },
  {
    "url": "assets/js/484.js",
    "revision": "c1e786c5188c2ecb9ab0c422a9538893"
  },
  {
    "url": "assets/js/485.js",
    "revision": "a36b9698e95a9f86a9becc6b50380938"
  },
  {
    "url": "assets/js/486.js",
    "revision": "22952f0163dc9bf668082391046d1cdf"
  },
  {
    "url": "assets/js/487.js",
    "revision": "f33833b0b39f67ab0f1aa1db7e7de602"
  },
  {
    "url": "assets/js/488.js",
    "revision": "65e5d56ace3acd05b119b2e2d7149bb6"
  },
  {
    "url": "assets/js/489.js",
    "revision": "73e34f4d605a7b707a560b1a33b93502"
  },
  {
    "url": "assets/js/49.js",
    "revision": "95e567db87d0b3a7e7d989ca0c1fffc5"
  },
  {
    "url": "assets/js/490.js",
    "revision": "925726cad59df03f9f42eca04128a730"
  },
  {
    "url": "assets/js/491.js",
    "revision": "c90c880f405677e9a7e7c21cca1a13bb"
  },
  {
    "url": "assets/js/492.js",
    "revision": "352d273c4fb0cc07c6255af12bdbff9a"
  },
  {
    "url": "assets/js/493.js",
    "revision": "d85171da8985e42f81712120b1bd1890"
  },
  {
    "url": "assets/js/494.js",
    "revision": "139af18d3a8dea6961c88f0db5e8f682"
  },
  {
    "url": "assets/js/495.js",
    "revision": "1a7d6e27fcf51ccd8614227464d942a8"
  },
  {
    "url": "assets/js/496.js",
    "revision": "505d84885aae9e913ba91f699b023fb7"
  },
  {
    "url": "assets/js/497.js",
    "revision": "fcbdedca481cdcaeb2c2ce5e3e236649"
  },
  {
    "url": "assets/js/498.js",
    "revision": "0e4bf17960f7e5c811e18a480e6d1ff6"
  },
  {
    "url": "assets/js/499.js",
    "revision": "d3dd7462bc80998196cd9fad75cb05d9"
  },
  {
    "url": "assets/js/5.js",
    "revision": "2681808857e34eead1a6fe1cc3fda2b6"
  },
  {
    "url": "assets/js/50.js",
    "revision": "bfd76ef0bb09473d6a62965d8ae9d710"
  },
  {
    "url": "assets/js/500.js",
    "revision": "336ffc9745ef6a0d905859ffe2184f71"
  },
  {
    "url": "assets/js/501.js",
    "revision": "d2afd92076e8bf4353e9de0aa4d217ea"
  },
  {
    "url": "assets/js/502.js",
    "revision": "78edf481eac5f2670e89cbed3c88ea2c"
  },
  {
    "url": "assets/js/503.js",
    "revision": "11c5c47783cf3c6946cd235275dd10b2"
  },
  {
    "url": "assets/js/504.js",
    "revision": "af112505268d56cd4d055b809979711a"
  },
  {
    "url": "assets/js/505.js",
    "revision": "e51a94b93e8e31b31ef865f45f5eeead"
  },
  {
    "url": "assets/js/506.js",
    "revision": "cd05003d3caf3c712b80f5d52ea90ead"
  },
  {
    "url": "assets/js/507.js",
    "revision": "c973b336a56fdfd69f568c138ad338ed"
  },
  {
    "url": "assets/js/508.js",
    "revision": "1d28950e3f2153b4a09b07c7ca72d294"
  },
  {
    "url": "assets/js/509.js",
    "revision": "681aa768f6817627c75e6fcb135f1b65"
  },
  {
    "url": "assets/js/51.js",
    "revision": "010589a547065d51f191ed46a77c5c1a"
  },
  {
    "url": "assets/js/510.js",
    "revision": "ae29214e16397888b6047bd0890aa4f3"
  },
  {
    "url": "assets/js/511.js",
    "revision": "233bdf78eeb23991f7e8c58eb6cc29e0"
  },
  {
    "url": "assets/js/512.js",
    "revision": "2e84b4bff9b20c898172f9dc72362e01"
  },
  {
    "url": "assets/js/513.js",
    "revision": "cb0294a5565d828d6612991e69534223"
  },
  {
    "url": "assets/js/514.js",
    "revision": "3b2265f09ef76f918fc0ee326676a4cb"
  },
  {
    "url": "assets/js/515.js",
    "revision": "f43f5f1dca6df264e5604a9b2fc80988"
  },
  {
    "url": "assets/js/516.js",
    "revision": "15f1dae08d50a0aabb06d18c1992d213"
  },
  {
    "url": "assets/js/517.js",
    "revision": "9b371974ddac9022a13fdac7b764e7c4"
  },
  {
    "url": "assets/js/518.js",
    "revision": "0ed3d0d87de9a4eb992d327aa316b293"
  },
  {
    "url": "assets/js/519.js",
    "revision": "34ff64b867ba09605df2e90dc81d560d"
  },
  {
    "url": "assets/js/52.js",
    "revision": "19268426e938dd2802d7f529c7f35026"
  },
  {
    "url": "assets/js/520.js",
    "revision": "d1322f751c3f1ca3359cd6991433812c"
  },
  {
    "url": "assets/js/521.js",
    "revision": "c06591835df189ccc7a3739d862692fa"
  },
  {
    "url": "assets/js/522.js",
    "revision": "fa1a93c72a69b6387d66217790ce15ac"
  },
  {
    "url": "assets/js/523.js",
    "revision": "1bde2a75ba302e152cf4dc5b2a2a28d4"
  },
  {
    "url": "assets/js/524.js",
    "revision": "8bd03c44fa4dc7ef0f44963cae22ef05"
  },
  {
    "url": "assets/js/525.js",
    "revision": "2cc44a7a28b96edfaef56802ed321eff"
  },
  {
    "url": "assets/js/526.js",
    "revision": "a1df53184f235fde6969360b0dc6a58a"
  },
  {
    "url": "assets/js/527.js",
    "revision": "3fcd3f1f6f381cbcd9ca15960bb7ec2f"
  },
  {
    "url": "assets/js/528.js",
    "revision": "cbf62a56de98b7e3173c64feee27ef89"
  },
  {
    "url": "assets/js/529.js",
    "revision": "21af3f728c75b78a13036fd33ba9bc66"
  },
  {
    "url": "assets/js/53.js",
    "revision": "206becc74e9aaa8b4cd1e9c74614f289"
  },
  {
    "url": "assets/js/530.js",
    "revision": "00f949b11eeee5f3c63e7bc2493f8b1e"
  },
  {
    "url": "assets/js/531.js",
    "revision": "d7bd0cc59be03e68749a817685ba7899"
  },
  {
    "url": "assets/js/532.js",
    "revision": "0f3348510f5ca69af993d54485981dbd"
  },
  {
    "url": "assets/js/533.js",
    "revision": "a666e0b3d9bdb08aa63d4c5d9579afb0"
  },
  {
    "url": "assets/js/534.js",
    "revision": "c4a4f1c9c1087ae91725556a15c0beb1"
  },
  {
    "url": "assets/js/535.js",
    "revision": "6298fcfb1cfee65fa4db1b243ec10e9a"
  },
  {
    "url": "assets/js/536.js",
    "revision": "95486ea9b58fa992bde000752a875b45"
  },
  {
    "url": "assets/js/537.js",
    "revision": "24668a2d42a39bac00ea749037fe4d85"
  },
  {
    "url": "assets/js/538.js",
    "revision": "3e046c5f376ca1d419428a70e8f57da3"
  },
  {
    "url": "assets/js/539.js",
    "revision": "2953347e2b9efbae56195fa03e46d499"
  },
  {
    "url": "assets/js/54.js",
    "revision": "b8f835d6de14999d846566e9c159ef99"
  },
  {
    "url": "assets/js/540.js",
    "revision": "5c1521ce2f71362aa5e66be718b65a97"
  },
  {
    "url": "assets/js/541.js",
    "revision": "809685828cddfa09312e005552dd6eae"
  },
  {
    "url": "assets/js/542.js",
    "revision": "edfd6a1c2b0cb38ccbae09a39686e730"
  },
  {
    "url": "assets/js/543.js",
    "revision": "303ae803e59b41f20b911b0dc8738a30"
  },
  {
    "url": "assets/js/544.js",
    "revision": "d4df52d28b1ca49118600418593ffca3"
  },
  {
    "url": "assets/js/545.js",
    "revision": "350702cadb302d98be09771150aa86e5"
  },
  {
    "url": "assets/js/546.js",
    "revision": "711921df55ca1f39fa946725303c9466"
  },
  {
    "url": "assets/js/547.js",
    "revision": "5dd48c6ba6caf367f9b8c699d80ada39"
  },
  {
    "url": "assets/js/548.js",
    "revision": "cbefb7bf60e681f450c3b45944d29d54"
  },
  {
    "url": "assets/js/549.js",
    "revision": "02c89920c034062f4a26fb325ca18da4"
  },
  {
    "url": "assets/js/55.js",
    "revision": "544b7fca47efffe993e53780c8087e56"
  },
  {
    "url": "assets/js/550.js",
    "revision": "c813f0d665a08d7ed8bae1254dec4816"
  },
  {
    "url": "assets/js/551.js",
    "revision": "1e9f953bfca9c145710ae87b8241507a"
  },
  {
    "url": "assets/js/552.js",
    "revision": "4d1335816854b68282b1d44d5cd0be02"
  },
  {
    "url": "assets/js/553.js",
    "revision": "7760d3fc693ebb423dd61f8d30ef77ad"
  },
  {
    "url": "assets/js/554.js",
    "revision": "58178b30fc206be487dd5588e0593fc5"
  },
  {
    "url": "assets/js/555.js",
    "revision": "03299d01208bf850d400cc37e50d306b"
  },
  {
    "url": "assets/js/556.js",
    "revision": "f63b04225ae95705922ecb36ff138aad"
  },
  {
    "url": "assets/js/557.js",
    "revision": "020adf0b3fd2ee2c00fa5e6588eb9016"
  },
  {
    "url": "assets/js/558.js",
    "revision": "a81dd81bbbb318bb443965ca40165e19"
  },
  {
    "url": "assets/js/559.js",
    "revision": "c9d4f7ea930e74fd0aaf41fb147390f4"
  },
  {
    "url": "assets/js/56.js",
    "revision": "b7f98728ad4b99ae16eca58da936f4c4"
  },
  {
    "url": "assets/js/560.js",
    "revision": "d97016ff97e6dacd77201d64ff4e7b02"
  },
  {
    "url": "assets/js/561.js",
    "revision": "96463714725ff1ef6e58bda9ff6de0a4"
  },
  {
    "url": "assets/js/562.js",
    "revision": "0f1c6f419541e6fa5115da340a5c4bdc"
  },
  {
    "url": "assets/js/563.js",
    "revision": "17668988390fd93e39bab08168e9c07e"
  },
  {
    "url": "assets/js/564.js",
    "revision": "c872375ace42d559fc4f91fce2e926af"
  },
  {
    "url": "assets/js/565.js",
    "revision": "7d675e708a770cae65f1997a12ecace2"
  },
  {
    "url": "assets/js/566.js",
    "revision": "fa4a971c53a61e08a0d216190f52fe1b"
  },
  {
    "url": "assets/js/567.js",
    "revision": "f95b62cb68c3f690d9a4518ab8e3e8ac"
  },
  {
    "url": "assets/js/568.js",
    "revision": "7a62074973f04c59f19e4171d92079a2"
  },
  {
    "url": "assets/js/569.js",
    "revision": "2b728d04c57030ee7428d377bf04236a"
  },
  {
    "url": "assets/js/57.js",
    "revision": "6b42b77a86cd5716bdf6ad62cd5c7f43"
  },
  {
    "url": "assets/js/570.js",
    "revision": "9c25c29ba031a2e53423490baff8b94b"
  },
  {
    "url": "assets/js/571.js",
    "revision": "82d4d5e26610150696055d574d167d58"
  },
  {
    "url": "assets/js/572.js",
    "revision": "5077a9ee891854663e35a56d3cb97d4b"
  },
  {
    "url": "assets/js/573.js",
    "revision": "4db783ba50471491471bffe3bd4ba476"
  },
  {
    "url": "assets/js/574.js",
    "revision": "a1c6b032317ed66e80a450f891dd29f9"
  },
  {
    "url": "assets/js/575.js",
    "revision": "4155336195b1adf2b6bbc47bd86f483a"
  },
  {
    "url": "assets/js/576.js",
    "revision": "dd49d4ad3aa8e4ff576627d4c99d489f"
  },
  {
    "url": "assets/js/577.js",
    "revision": "4d9e9a88882f7ff3bcac1ccea562116c"
  },
  {
    "url": "assets/js/578.js",
    "revision": "4d887702cbea023ad9aa58e98eb9ec40"
  },
  {
    "url": "assets/js/579.js",
    "revision": "c8ef4ae47669cec6053f7d3ca8fdab6f"
  },
  {
    "url": "assets/js/58.js",
    "revision": "49f7311d051d55ff45d64d6d8561c63a"
  },
  {
    "url": "assets/js/580.js",
    "revision": "78cea12fc89445eb1f4e85de62c6fa2a"
  },
  {
    "url": "assets/js/581.js",
    "revision": "6295786e1a62fd5b2d433832eb9fd3ef"
  },
  {
    "url": "assets/js/582.js",
    "revision": "87fdbfebcb522ca8869e7ecee40ae0a6"
  },
  {
    "url": "assets/js/583.js",
    "revision": "e12c68d452202bbc56d7fd7e4ae8cd68"
  },
  {
    "url": "assets/js/584.js",
    "revision": "3783d43becf12b75a84eafb7bb4e7d20"
  },
  {
    "url": "assets/js/585.js",
    "revision": "b4a9043166abaacb08bb12dc910ac63b"
  },
  {
    "url": "assets/js/59.js",
    "revision": "29fab0b77f3f1838476b1fd5e961e5ad"
  },
  {
    "url": "assets/js/6.js",
    "revision": "7a9aa5fd69183c802563295cc70f5fd3"
  },
  {
    "url": "assets/js/60.js",
    "revision": "6484eda9e9d2f34473e878feb1e242d9"
  },
  {
    "url": "assets/js/61.js",
    "revision": "1aa2690e9121f86a3749dd4196f8859d"
  },
  {
    "url": "assets/js/62.js",
    "revision": "033106fbba0da492f3c15af6e8d8abb4"
  },
  {
    "url": "assets/js/63.js",
    "revision": "71e1475d0c98de74e2dc33f3dc6abcc4"
  },
  {
    "url": "assets/js/64.js",
    "revision": "a9d4a880928d8c8b34d00fc9fa76b104"
  },
  {
    "url": "assets/js/65.js",
    "revision": "f2782b55668d4739e9a691302e3fe113"
  },
  {
    "url": "assets/js/66.js",
    "revision": "33a1fca169a2cda1f9b1206ac863407f"
  },
  {
    "url": "assets/js/67.js",
    "revision": "7f66691615150a0163dfdbb593904f48"
  },
  {
    "url": "assets/js/68.js",
    "revision": "2499d0928487319189bd6528a4db06cd"
  },
  {
    "url": "assets/js/69.js",
    "revision": "53ab425861634adb4e827f4980675b08"
  },
  {
    "url": "assets/js/7.js",
    "revision": "5663f921d4cc8600a1ce2bd4610a40b3"
  },
  {
    "url": "assets/js/70.js",
    "revision": "3c195b69e9f7823e3e5075bbdb674989"
  },
  {
    "url": "assets/js/71.js",
    "revision": "2ad52d507a0e471f958694e0ffd0fac6"
  },
  {
    "url": "assets/js/72.js",
    "revision": "17ee4ab738d847409ae014be4289e029"
  },
  {
    "url": "assets/js/73.js",
    "revision": "b31259cbad1562e2c802e94415ffb2a0"
  },
  {
    "url": "assets/js/74.js",
    "revision": "d14692772ef81986de5e81783c927a3e"
  },
  {
    "url": "assets/js/75.js",
    "revision": "2347c2b2fb36c1483a8cdc58654205a2"
  },
  {
    "url": "assets/js/76.js",
    "revision": "67bb5aebefc2acafd2a9e97010b86886"
  },
  {
    "url": "assets/js/77.js",
    "revision": "3b2fb3dda398a1f12d576821e2392a3d"
  },
  {
    "url": "assets/js/78.js",
    "revision": "03ebbc9ef11c64dea39e296f111d7b4f"
  },
  {
    "url": "assets/js/79.js",
    "revision": "773b1b853f435621bbd4c38ea4905af4"
  },
  {
    "url": "assets/js/8.js",
    "revision": "07dce7dbea7447983b7f466650e58ead"
  },
  {
    "url": "assets/js/80.js",
    "revision": "a3102e10be68011dcad97c0d364ec964"
  },
  {
    "url": "assets/js/81.js",
    "revision": "e4228806580392f9f6429e9c2b04da1d"
  },
  {
    "url": "assets/js/82.js",
    "revision": "35d107728fff8f5230987deaa38ae577"
  },
  {
    "url": "assets/js/83.js",
    "revision": "5877d9dda077f5ba6911c9933a50bc57"
  },
  {
    "url": "assets/js/84.js",
    "revision": "2019684bd97b9a76741f24aba23e6dca"
  },
  {
    "url": "assets/js/85.js",
    "revision": "d5ab60da0244b7c98e823cf0772ab66e"
  },
  {
    "url": "assets/js/86.js",
    "revision": "bf95be5c53815010999da405168ea7bb"
  },
  {
    "url": "assets/js/87.js",
    "revision": "58df7ad8d523c62253af3a4dbdb6add9"
  },
  {
    "url": "assets/js/88.js",
    "revision": "1f22486498b83983cc776919b2ba74e2"
  },
  {
    "url": "assets/js/89.js",
    "revision": "57e8b29116c0b76fa40a62b6814db45b"
  },
  {
    "url": "assets/js/9.js",
    "revision": "94a6114c8d8a86188bee6e7bf08acf71"
  },
  {
    "url": "assets/js/90.js",
    "revision": "e3f778b4081b107f5dbceeb0dfa6ba91"
  },
  {
    "url": "assets/js/91.js",
    "revision": "fcbca437157e2e09c7b8756a25639381"
  },
  {
    "url": "assets/js/92.js",
    "revision": "2a1353ea7501531361e03f84fba9fb2e"
  },
  {
    "url": "assets/js/93.js",
    "revision": "6349fceafc3909b2775372cde588945d"
  },
  {
    "url": "assets/js/94.js",
    "revision": "2880228f945c694920135544cd90e758"
  },
  {
    "url": "assets/js/95.js",
    "revision": "1622f7fbcc163bee77d9c24d254a53e8"
  },
  {
    "url": "assets/js/96.js",
    "revision": "50dc05bd1d9bfce87d77566402755c9d"
  },
  {
    "url": "assets/js/97.js",
    "revision": "002b5455c27d4112a48adf1e413536d5"
  },
  {
    "url": "assets/js/98.js",
    "revision": "aa4897af357fa54a329ab88a0e48dc98"
  },
  {
    "url": "assets/js/99.js",
    "revision": "3db7029a98a7ef33fd069987520aa8f9"
  },
  {
    "url": "assets/js/app.js",
    "revision": "86a9348a27b39915aca655ea11d543b6"
  },
  {
    "url": "assets/js/styles.js",
    "revision": "22f22b49cc901aa95826401f7ce0930c"
  },
  {
    "url": "blog/category/index.html",
    "revision": "63f81012c5b1cc63111d508378b684ad"
  },
  {
    "url": "blog/code/artists/index.html",
    "revision": "f04fa6ffde8fa0d47350cb0daa07bff9"
  },
  {
    "url": "blog/code/asa.sbh.nz/index.html",
    "revision": "0abba8b4293ab75cdb24feca529de0b4"
  },
  {
    "url": "blog/code/decrypt/index.html",
    "revision": "65a76198520e3d47369046ebcf32c969"
  },
  {
    "url": "blog/code/divider/index.html",
    "revision": "f86fa0d6d26a6a74d00652c10b00a9b0"
  },
  {
    "url": "blog/code/first/index.html",
    "revision": "9831d16fd38d8aca7a15fad248f6392c"
  },
  {
    "url": "blog/code/fishbarrel/index.html",
    "revision": "4927d5bf4987eed15f2006bdefb09bff"
  },
  {
    "url": "blog/code/indent/index.html",
    "revision": "7812eab3d69335a59822c29ea50addbe"
  },
  {
    "url": "blog/code/index.html",
    "revision": "0b34b9a1d2ed87efa285acfad6a44f08"
  },
  {
    "url": "blog/code/ingoa.nz/index.html",
    "revision": "47965bac38b0ebebfb99d5875d85997b"
  },
  {
    "url": "blog/code/nzondemand/index.html",
    "revision": "3d375ce3f44f3a40baf26b26ab323e43"
  },
  {
    "url": "blog/code/picard/index.html",
    "revision": "673d3254b6478c931682788f75733a43"
  },
  {
    "url": "blog/code/qr/index.html",
    "revision": "98eeb6192bfa4e7a7512e032f3cf4d8d"
  },
  {
    "url": "blog/code/tone/index.html",
    "revision": "53f6d025e5825f9f45998077150e1bff"
  },
  {
    "url": "blog/code/website/index.html",
    "revision": "aa9887b06ed89de3ea8f8fb363937782"
  },
  {
    "url": "blog/code/website/route/index.html",
    "revision": "2c7a672cc806416df672d58d6879896b"
  },
  {
    "url": "blog/code/website/site/index.html",
    "revision": "d0cf0f22fdcb08b245f37c85a2f15d93"
  },
  {
    "url": "blog/code/xmltv.co.nz/index.html",
    "revision": "1380fe55883b9b9abb315cd7a42a7e93"
  },
  {
    "url": "blog/howto/index.html",
    "revision": "af1e372d31091c6661554a852ed20075"
  },
  {
    "url": "blog/howto/intel865/index.html",
    "revision": "19d04c2c3925500d28a20f8595c06d89"
  },
  {
    "url": "blog/howto/nexentastor/index.html",
    "revision": "0f3053679730ca9a5e85041f3adc0cb0"
  },
  {
    "url": "blog/howto/pcloadletter/index.html",
    "revision": "2cc9c4d9bf9c1082cecbc6e7e194a68f"
  },
  {
    "url": "blog/howto/raid5/index.html",
    "revision": "ce308edb0d9a5eaf1927bfc43d953e80"
  },
  {
    "url": "blog/index.html",
    "revision": "ea4bb53120131a005a7c0f67e6d5e358"
  },
  {
    "url": "blog/life/anotheryear/index.html",
    "revision": "a73031ab364dac657184c4dce014d21f"
  },
  {
    "url": "blog/life/birthday/index.html",
    "revision": "0d95d8ac8a3b72a1cf82ceaabe4875b8"
  },
  {
    "url": "blog/life/blasphemy/index.html",
    "revision": "b76378530307b7f2c477c0bb1e5d9022"
  },
  {
    "url": "blog/life/blogger/index.html",
    "revision": "79219ac0bd7816cb84d0a1065aba130a"
  },
  {
    "url": "blog/life/blurry/index.html",
    "revision": "71a28956952ed575d5162512a76c59e3"
  },
  {
    "url": "blog/life/busyday/index.html",
    "revision": "54fc438efb26faaa74c4d0ff32f2eee9"
  },
  {
    "url": "blog/life/domain/index.html",
    "revision": "24704972d4ba0ab0de0f84ac8b2a5f77"
  },
  {
    "url": "blog/life/exams/index.html",
    "revision": "8eb72f4409582d5f809f0aed2df60e0f"
  },
  {
    "url": "blog/life/food/index.html",
    "revision": "6b4b1c2bde5d5840ae4aa6645c2a0808"
  },
  {
    "url": "blog/life/glenview/index.html",
    "revision": "fe9b9f0636cddb0f8eadf0eba1403990"
  },
  {
    "url": "blog/life/headlines/index.html",
    "revision": "ca542c8ad28cf43b01fea34a2d4a6b2c"
  },
  {
    "url": "blog/life/index.html",
    "revision": "c40414f2d50177c0a863bcf1cc04950d"
  },
  {
    "url": "blog/life/jws/index.html",
    "revision": "e71c12315a0ea36a7939fe4f92f764d3"
  },
  {
    "url": "blog/life/keyboard/index.html",
    "revision": "f74b80cf24226da2cea5bcbbc387988e"
  },
  {
    "url": "blog/life/lpi201/index.html",
    "revision": "7982e3066d8d78e12450a6e754a34876"
  },
  {
    "url": "blog/life/mashup/index.html",
    "revision": "1382039e9e2dfe2522450181c92f1028"
  },
  {
    "url": "blog/life/motorweb/index.html",
    "revision": "a5ae33c7e13815fab5766ab1e55a3dfb"
  },
  {
    "url": "blog/life/nxe/index.html",
    "revision": "d36a7bac420ba15000c2affa81afb325"
  },
  {
    "url": "blog/life/plates/index.html",
    "revision": "660cec23a6f5fea0fead912bea531a0b"
  },
  {
    "url": "blog/life/queenstown/index.html",
    "revision": "ed9efe1646603e078a8a8f509ee47bb3"
  },
  {
    "url": "blog/life/racism/index.html",
    "revision": "5786ca2268c78a9dc1e7fd0f34f56b91"
  },
  {
    "url": "blog/life/roads/index.html",
    "revision": "e54df2fb6185967e20f6d28a91273456"
  },
  {
    "url": "blog/life/roots/index.html",
    "revision": "4ca8e18485e9a7f0a4caeafad154bb85"
  },
  {
    "url": "blog/life/scare/index.html",
    "revision": "bb002a57b4754b813786d154f44e45ca"
  },
  {
    "url": "blog/life/scary/index.html",
    "revision": "9a3964026d17f9a9fffee243066f6889"
  },
  {
    "url": "blog/life/seti/index.html",
    "revision": "c4ea9911f64296971567cff4e4928a35"
  },
  {
    "url": "blog/life/skeptical/index.html",
    "revision": "409e75d9ff88876ec5cf33ad468cde4f"
  },
  {
    "url": "blog/life/skepticzone/index.html",
    "revision": "9e0a24cde6223853abfd9e1c1dfcba65"
  },
  {
    "url": "blog/life/spam/index.html",
    "revision": "5c6b6a20a177d21ce036fb7250a26304"
  },
  {
    "url": "blog/life/trademe/index.html",
    "revision": "87e139fe8c662d4508816b7cc3f94fa2"
  },
  {
    "url": "blog/life/unforeseen/index.html",
    "revision": "a3fd2caae175aebdeb0b8273b889e034"
  },
  {
    "url": "blog/life/wobbly/index.html",
    "revision": "1e63ed69805ab63b3b6e0090251dc7bf"
  },
  {
    "url": "blog/projects/airbag/index.html",
    "revision": "ed4e1fed994337b222caa7f14308d2d5"
  },
  {
    "url": "blog/projects/ambilight/index.html",
    "revision": "67ff473501cb906c7f437143ed6e4c6a"
  },
  {
    "url": "blog/projects/automation/index.html",
    "revision": "818171448c8882bf8cd5938ad6a0f17a"
  },
  {
    "url": "blog/projects/eyes/index.html",
    "revision": "905ac1eb463dc1e6c53bc737aff6c85d"
  },
  {
    "url": "blog/projects/glitch/index.html",
    "revision": "c7cf8afe875505327703cecc3bc19d93"
  },
  {
    "url": "blog/projects/index.html",
    "revision": "7ffdab99912ef5188088e95346798ae8"
  },
  {
    "url": "blog/projects/it100/index.html",
    "revision": "24ad19556a7281f12f0d0a0f649cd995"
  },
  {
    "url": "blog/projects/microscope/index.html",
    "revision": "6ae5f2018c0c518dd52ebaa18b13e6e7"
  },
  {
    "url": "blog/projects/mirror/index.html",
    "revision": "959e017fa864075e4d0bcab5939da5cb"
  },
  {
    "url": "blog/projects/picture/index.html",
    "revision": "a35ed423af32b9331159e3803b362779"
  },
  {
    "url": "blog/projects/pizza/index.html",
    "revision": "73582db1f49e813604d65dff8eefb481"
  },
  {
    "url": "blog/projects/podcast/index.html",
    "revision": "3f7eee08b808b612e1345acd3e546b57"
  },
  {
    "url": "blog/projects/reflow/index.html",
    "revision": "ee7e6c5d7d1fb6df0b6773fe570159a0"
  },
  {
    "url": "blog/projects/sandbox/index.html",
    "revision": "198c214221d4ed18306a7bd28538099c"
  },
  {
    "url": "blog/projects/screens/index.html",
    "revision": "ffaf00917689ec67e88442f503e8b599"
  },
  {
    "url": "blog/projects/sky/index.html",
    "revision": "a6ab3b9825112d806159b6d5f70e71a3"
  },
  {
    "url": "blog/projects/starwars/index.html",
    "revision": "aee4e9ee62c0d46112eb4566639f5e38"
  },
  {
    "url": "blog/projects/xbox/index.html",
    "revision": "01931cc1542c2e538d4433551d88a08b"
  },
  {
    "url": "blog/random/addresses/index.html",
    "revision": "c016f67476f3843c2730fdbef0c26718"
  },
  {
    "url": "blog/random/alphabet/index.html",
    "revision": "92f59d8ec57cb98826d64e5d232f9df2"
  },
  {
    "url": "blog/random/astrology/index.html",
    "revision": "7f261165c401bbe97d6c124dd315750f"
  },
  {
    "url": "blog/random/chicken/index.html",
    "revision": "c7c5b22599b690d3addbbf228881f012"
  },
  {
    "url": "blog/random/dns/index.html",
    "revision": "b02a9eb649e46530157f9b018c42c553"
  },
  {
    "url": "blog/random/evp/index.html",
    "revision": "b61daba8bcc071dd5e8d0f15907138c9"
  },
  {
    "url": "blog/random/flip/index.html",
    "revision": "8b12c6c434623ae355c9ddf297b8b669"
  },
  {
    "url": "blog/random/honeychurch/index.html",
    "revision": "cf4e52b7153ad21a6e59497f858226a5"
  },
  {
    "url": "blog/random/index.html",
    "revision": "3d64c0212d9aa20c6fd4797d47c36eed"
  },
  {
    "url": "blog/random/lottery/index.html",
    "revision": "adef9039f8f00f161b8adddba38d86ae"
  },
  {
    "url": "blog/random/music/index.html",
    "revision": "da2ed653abe00061bad4317fbf0c9a53"
  },
  {
    "url": "blog/random/octal/index.html",
    "revision": "28f0de7074f97bdca81d9ac4a7195f56"
  },
  {
    "url": "blog/random/os/index.html",
    "revision": "49ebc5e12bc0816e86ba5339a5230829"
  },
  {
    "url": "blog/random/propellers/index.html",
    "revision": "690ef80ad45ba8e5adcd63bf36cf8fd0"
  },
  {
    "url": "blog/random/robux/index.html",
    "revision": "a7ddff1e22f7d4d359d257614ca435d5"
  },
  {
    "url": "blog/random/super/index.html",
    "revision": "c1031e325db26264e6aaf1586ee7a465"
  },
  {
    "url": "blog/random/times/index.html",
    "revision": "d9d1fa9020b7539874481014de156315"
  },
  {
    "url": "blog/random/travel/index.html",
    "revision": "3436aa8f60ff4ca27660c8508d0c2e6a"
  },
  {
    "url": "blog/random/wilhelm/index.html",
    "revision": "ba671aa92bc4f6f62ad8be15472d539f"
  },
  {
    "url": "blog/random/year/index.html",
    "revision": "350f0f6e646cdb2072a17412aaab2778"
  },
  {
    "url": "blog/skepticism/2015/08/16/asa/index.html",
    "revision": "89db0627d54960b0d387b6283d71ce5a"
  },
  {
    "url": "blog/skepticism/2015/08/16/awards/index.html",
    "revision": "7e4e63ad7a29b289fdf429ef379148f5"
  },
  {
    "url": "blog/skepticism/2015/08/16/bravo/index.html",
    "revision": "1d451c565f52ff54ec5920ab58dd95c4"
  },
  {
    "url": "blog/skepticism/2015/08/16/index.html",
    "revision": "2832ab534a2b4129e44b01e3535a8054"
  },
  {
    "url": "blog/skepticism/2015/08/16/jim/index.html",
    "revision": "1056e23a187b49b8d7f71b38fefe81e2"
  },
  {
    "url": "blog/skepticism/2015/08/16/naholo/index.html",
    "revision": "1db83a8135e77707d199196aa0eb1c1c"
  },
  {
    "url": "blog/skepticism/2015/08/16/resene/index.html",
    "revision": "999dfae290fe80785e12c5d69555ef41"
  },
  {
    "url": "blog/skepticism/2015/08/index.html",
    "revision": "b6a38b74484feade401c85db802f61c1"
  },
  {
    "url": "blog/skepticism/2015/09/20/gop/index.html",
    "revision": "a05f2219f9dfe727111278b5d47e9854"
  },
  {
    "url": "blog/skepticism/2015/09/20/ignobel/index.html",
    "revision": "809a28ca7b5f47cf8a7dc2a88db1e96d"
  },
  {
    "url": "blog/skepticism/2015/09/20/index.html",
    "revision": "011ca75d045982d19096438aa810757e"
  },
  {
    "url": "blog/skepticism/2015/09/20/supplements/index.html",
    "revision": "b0fbd2d999f10d25f7069d53550552d1"
  },
  {
    "url": "blog/skepticism/2015/09/27/ayahuasca/index.html",
    "revision": "c21a179b6fe7958f7cf1d0e09fbe7ef7"
  },
  {
    "url": "blog/skepticism/2015/09/27/drought/index.html",
    "revision": "cbe245f2de0ca4a1c7511dd400617bad"
  },
  {
    "url": "blog/skepticism/2015/09/27/index.html",
    "revision": "561e01c93502b81fc244ac3a6845aae0"
  },
  {
    "url": "blog/skepticism/2015/09/27/lama/index.html",
    "revision": "2da092ef32842033b0b8514550ec8952"
  },
  {
    "url": "blog/skepticism/2015/09/27/moon/index.html",
    "revision": "79c16e1272059125b25f75b54247db21"
  },
  {
    "url": "blog/skepticism/2015/09/27/scan/index.html",
    "revision": "f377c753bae7fb0991202fa9435b9b39"
  },
  {
    "url": "blog/skepticism/2015/09/index.html",
    "revision": "b1af16f6a51d3b24a0884b2de322b713"
  },
  {
    "url": "blog/skepticism/2015/10/04/ghost/index.html",
    "revision": "4b467ae57f7f7b52693e77c8f1fc3f6e"
  },
  {
    "url": "blog/skepticism/2015/10/04/haka/index.html",
    "revision": "c4e1b41f8c496c6a143dc91b164c628e"
  },
  {
    "url": "blog/skepticism/2015/10/04/index.html",
    "revision": "5d8a64ef78ed1bcb4993e77e2a225def"
  },
  {
    "url": "blog/skepticism/2015/10/04/mars/index.html",
    "revision": "5a28d41d3f2327c785b5241ec177dc9a"
  },
  {
    "url": "blog/skepticism/2015/10/04/pharmacy/index.html",
    "revision": "3c18c2240010a1a2b1f607a7438e04f7"
  },
  {
    "url": "blog/skepticism/2015/10/04/prostate/index.html",
    "revision": "bfea9c564b9bfffdfa79fd417dd9687d"
  },
  {
    "url": "blog/skepticism/2015/10/11/armageddon/index.html",
    "revision": "defa3a8b0633d8299a7d2c965a7823d2"
  },
  {
    "url": "blog/skepticism/2015/10/11/climate/index.html",
    "revision": "e88a4bf85212432d06c51e176fdc3fd8"
  },
  {
    "url": "blog/skepticism/2015/10/11/ghost/index.html",
    "revision": "2c42ee7b925f825b561526590748184b"
  },
  {
    "url": "blog/skepticism/2015/10/11/index.html",
    "revision": "fb54177fd42e195ec6d1db64498d6845"
  },
  {
    "url": "blog/skepticism/2015/10/11/magnesleep/index.html",
    "revision": "7a6736d8bf9b11dfa6f0ba2c70798292"
  },
  {
    "url": "blog/skepticism/2015/10/11/nhs/index.html",
    "revision": "d86350a8f8877b20466cb84d71b79999"
  },
  {
    "url": "blog/skepticism/2015/10/11/prophet/index.html",
    "revision": "6ddbb5ba361ea744933d5dd28f9a9b21"
  },
  {
    "url": "blog/skepticism/2015/10/index.html",
    "revision": "6543947c91dbd770e5462b93ffff0a74"
  },
  {
    "url": "blog/skepticism/2015/11/15/end/index.html",
    "revision": "fbf29f636e474e69cdb55cb3b380132c"
  },
  {
    "url": "blog/skepticism/2015/11/15/index.html",
    "revision": "83e7d12b09f0d18ac74203aece913636"
  },
  {
    "url": "blog/skepticism/2015/11/index.html",
    "revision": "21170d338787679108127e98200d957b"
  },
  {
    "url": "blog/skepticism/2015/12/13/astrology/index.html",
    "revision": "1a052050234d16e2ed705b5c429af5e6"
  },
  {
    "url": "blog/skepticism/2015/12/13/cancer/index.html",
    "revision": "4f5dd79abda28ede64f90bd3395c1a73"
  },
  {
    "url": "blog/skepticism/2015/12/13/chickenpox/index.html",
    "revision": "fe6d77bd9d6282cf57a9246716f493c5"
  },
  {
    "url": "blog/skepticism/2015/12/13/index.html",
    "revision": "d5670546d3c1ab4a21d5526f7da58755"
  },
  {
    "url": "blog/skepticism/2015/12/13/osteopath/index.html",
    "revision": "f11eda882f7f72cac95a996156fe7a0b"
  },
  {
    "url": "blog/skepticism/2015/12/13/priest/index.html",
    "revision": "fcde68a020134cbab8121d68208beb2f"
  },
  {
    "url": "blog/skepticism/2015/12/13/psychic/index.html",
    "revision": "b0b87cbf489f6ed0645a172321457c40"
  },
  {
    "url": "blog/skepticism/2015/12/13/vaccines/index.html",
    "revision": "93e5bc924385c14c12a8d6aa4ebc00a6"
  },
  {
    "url": "blog/skepticism/2015/12/index.html",
    "revision": "a99cbffa303e7f0635c8da1713b0f0fd"
  },
  {
    "url": "blog/skepticism/2015/index.html",
    "revision": "51a82673725beec209c2b76f25c54394"
  },
  {
    "url": "blog/skepticism/2016/02/07/antioxidant/index.html",
    "revision": "69455079c046cd2c12a70daa46202b9b"
  },
  {
    "url": "blog/skepticism/2016/02/07/index.html",
    "revision": "bb48354af029f6b50a9a0921967e8336"
  },
  {
    "url": "blog/skepticism/2016/02/07/kfc/index.html",
    "revision": "0db7ad2baa66f524770129aa00693593"
  },
  {
    "url": "blog/skepticism/2016/02/07/ph/index.html",
    "revision": "78e0b3fa6d2553e6e54f7d38fb099f87"
  },
  {
    "url": "blog/skepticism/2016/02/07/sandy/index.html",
    "revision": "e526f8285968ebb31af30e673039acc8"
  },
  {
    "url": "blog/skepticism/2016/02/07/sarfati/index.html",
    "revision": "c6f001e9193e0b490fdbba249d3bddbd"
  },
  {
    "url": "blog/skepticism/2016/02/07/trump/index.html",
    "revision": "87dafed2ee19a26f505e37dda335907d"
  },
  {
    "url": "blog/skepticism/2016/02/14/coins/index.html",
    "revision": "c7c51a4c5085b91a54ba292c5d12a1ea"
  },
  {
    "url": "blog/skepticism/2016/02/14/fast/index.html",
    "revision": "98a7fd80d1468d26534fd33806cd0c9c"
  },
  {
    "url": "blog/skepticism/2016/02/14/fluoride/index.html",
    "revision": "12a34f1feeb7f466f3fbc4ab832f539a"
  },
  {
    "url": "blog/skepticism/2016/02/14/icke/index.html",
    "revision": "1c288d3b1a0adab3406c494515e5c7d1"
  },
  {
    "url": "blog/skepticism/2016/02/14/index.html",
    "revision": "c4e23f7197d364f58b2360606cd8f3bf"
  },
  {
    "url": "blog/skepticism/2016/02/14/yeti/index.html",
    "revision": "256723dcac8b47c355900b3c01d33deb"
  },
  {
    "url": "blog/skepticism/2016/02/21/homeopathy/index.html",
    "revision": "e9093dc4e80dfe36bb54093b20f71c79"
  },
  {
    "url": "blog/skepticism/2016/02/21/index.html",
    "revision": "e440ddc30a90f3e526c70e09d0d74264"
  },
  {
    "url": "blog/skepticism/2016/02/21/monster/index.html",
    "revision": "053a6818957268aaba33bc1295e2a9b1"
  },
  {
    "url": "blog/skepticism/2016/02/21/scalia/index.html",
    "revision": "3fa72565dd77041e6e15a6772bbe0dca"
  },
  {
    "url": "blog/skepticism/2016/02/21/shane/index.html",
    "revision": "67a6f61dbcda6b5cdc8ae84b39662800"
  },
  {
    "url": "blog/skepticism/2016/02/21/texas/index.html",
    "revision": "03c54630f58eb739adcefdce23ef3785"
  },
  {
    "url": "blog/skepticism/2016/02/28/acupuncture/index.html",
    "revision": "32e65931e9b813570220d2df58219cd9"
  },
  {
    "url": "blog/skepticism/2016/02/28/fsm/index.html",
    "revision": "53fd6d370579b4c2ca59bf0701459392"
  },
  {
    "url": "blog/skepticism/2016/02/28/index.html",
    "revision": "fd86c00efe329068880b02ded9e7bdf5"
  },
  {
    "url": "blog/skepticism/2016/02/28/iv/index.html",
    "revision": "7a6a291b86fd9202623ac11d69507fd1"
  },
  {
    "url": "blog/skepticism/2016/02/28/natural/index.html",
    "revision": "8403bf1f36d1cb925696a6c199de91a5"
  },
  {
    "url": "blog/skepticism/2016/02/28/talc/index.html",
    "revision": "edc21391769083584e04d81825f8dd00"
  },
  {
    "url": "blog/skepticism/2016/02/index.html",
    "revision": "620ce96a2e0f7c7f97223a0e5e1b067f"
  },
  {
    "url": "blog/skepticism/2016/03/13/herbs/index.html",
    "revision": "0bdde0e6c7844e4836455d6b6c0f4bd2"
  },
  {
    "url": "blog/skepticism/2016/03/13/index.html",
    "revision": "81477be56d7c301d24382313d71ebdc1"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandala/index.html",
    "revision": "671adb3ae555a29430f2b07170603907"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandela/index.html",
    "revision": "826539ae957852373e0d7ed6be168c75"
  },
  {
    "url": "blog/skepticism/2016/03/13/spray/index.html",
    "revision": "021f0a3fd87a694ee73f9003716443c3"
  },
  {
    "url": "blog/skepticism/2016/03/index.html",
    "revision": "63243ebe518d313cc016d17393f0aab6"
  },
  {
    "url": "blog/skepticism/2016/04/17/charity/index.html",
    "revision": "95983850d226607dc4200f8cbdb0b2c4"
  },
  {
    "url": "blog/skepticism/2016/04/17/chiro/index.html",
    "revision": "5e5eb82e13d3c1193b2270f0ab724e70"
  },
  {
    "url": "blog/skepticism/2016/04/17/fluoride/index.html",
    "revision": "e7974cf1c5766c6d0dc9acb3b9adc843"
  },
  {
    "url": "blog/skepticism/2016/04/17/index.html",
    "revision": "6738336aee34e7f2b894ed80dcc68c8f"
  },
  {
    "url": "blog/skepticism/2016/04/17/lotto/index.html",
    "revision": "9ea8b96cdbd4cf9e78ee756fe9642350"
  },
  {
    "url": "blog/skepticism/2016/04/17/mind/index.html",
    "revision": "31b1e58eb10c4f93818a0071c53f5971"
  },
  {
    "url": "blog/skepticism/2016/04/17/whooping/index.html",
    "revision": "46eb7bcad02f63d6bd8a1042f5b9dd44"
  },
  {
    "url": "blog/skepticism/2016/04/index.html",
    "revision": "57804133680f5c3916e9e88e86d976eb"
  },
  {
    "url": "blog/skepticism/2016/06/05/1080/index.html",
    "revision": "39a4f75f7030aeb9265175948cee6f64"
  },
  {
    "url": "blog/skepticism/2016/06/05/acupuncture/index.html",
    "revision": "1196b5143e981a6e5b4d1e10a6b0f3c1"
  },
  {
    "url": "blog/skepticism/2016/06/05/family/index.html",
    "revision": "0377d0baedccd74498d71f0645eb0f29"
  },
  {
    "url": "blog/skepticism/2016/06/05/index.html",
    "revision": "b8f81b4708e93bf7dece2f4c868ab7b7"
  },
  {
    "url": "blog/skepticism/2016/06/05/limbaugh/index.html",
    "revision": "2cedd54ec7679bbf0f309194480e33c5"
  },
  {
    "url": "blog/skepticism/2016/06/12/bobby/index.html",
    "revision": "713e1db3e037a27675e8be618f810f55"
  },
  {
    "url": "blog/skepticism/2016/06/12/climate/index.html",
    "revision": "ca54d2a961d06d01b4cb05486d41394c"
  },
  {
    "url": "blog/skepticism/2016/06/12/index.html",
    "revision": "4c4964d523ac7195f9c8d7a17dd9604c"
  },
  {
    "url": "blog/skepticism/2016/06/12/pugh/index.html",
    "revision": "14b6f59338239fbf72056f7a2554e146"
  },
  {
    "url": "blog/skepticism/2016/06/12/savage/index.html",
    "revision": "4a2b09d74cbad1bbe4a895fea07bab29"
  },
  {
    "url": "blog/skepticism/2016/06/12/sawdust/index.html",
    "revision": "c2c8b958a6205964eb1e1aed7628cf4f"
  },
  {
    "url": "blog/skepticism/2016/06/19/beauty/index.html",
    "revision": "d6c7bf775cfca42502056fb833a1c71d"
  },
  {
    "url": "blog/skepticism/2016/06/19/bilderberg/index.html",
    "revision": "aeea7c1707c5aa71478445828281b972"
  },
  {
    "url": "blog/skepticism/2016/06/19/cyf/index.html",
    "revision": "85903f93f6d3bd96a96be84a9e3f0a68"
  },
  {
    "url": "blog/skepticism/2016/06/19/holt/index.html",
    "revision": "293835d05db8b401f8978f35aa2a13cb"
  },
  {
    "url": "blog/skepticism/2016/06/19/index.html",
    "revision": "848255ffe683ad4db1d70107d2aa0533"
  },
  {
    "url": "blog/skepticism/2016/06/19/silver/index.html",
    "revision": "86f0bcaddf5ed7d27824a414f59d0379"
  },
  {
    "url": "blog/skepticism/2016/06/19/ufo/index.html",
    "revision": "a0328036c6a61fa8b8838b25bdeae5fb"
  },
  {
    "url": "blog/skepticism/2016/06/26/homeopathy/index.html",
    "revision": "41dc618fb73cf92000d0302dc2bc5a2e"
  },
  {
    "url": "blog/skepticism/2016/06/26/index.html",
    "revision": "1f6fc63cb79dd135727080c950b724a6"
  },
  {
    "url": "blog/skepticism/2016/06/26/robbins/index.html",
    "revision": "58a10f87ff675d3bce8407c59b69e618"
  },
  {
    "url": "blog/skepticism/2016/06/26/selfies/index.html",
    "revision": "37cf4703c73a2bcc6234a973dbfec62c"
  },
  {
    "url": "blog/skepticism/2016/06/26/silver/index.html",
    "revision": "a86d204e0162e632bb0408585db9074b"
  },
  {
    "url": "blog/skepticism/2016/06/26/ufos/index.html",
    "revision": "bcadce2772f22f1ddb677102d344ce26"
  },
  {
    "url": "blog/skepticism/2016/06/index.html",
    "revision": "0b2cab5a769a5a273b54b36dbbdb1570"
  },
  {
    "url": "blog/skepticism/2016/07/03/glyphosate/index.html",
    "revision": "6a87e7049e03c9af1a932d2f4191d6bf"
  },
  {
    "url": "blog/skepticism/2016/07/03/gmo/index.html",
    "revision": "202fe34225f2d39e05a30d1ddb15ca2f"
  },
  {
    "url": "blog/skepticism/2016/07/03/index.html",
    "revision": "26d3cd2afd3f6d60f40f305c99cd0332"
  },
  {
    "url": "blog/skepticism/2016/07/03/jail/index.html",
    "revision": "9d63f75dd9f661865da8a3b480af9576"
  },
  {
    "url": "blog/skepticism/2016/07/03/ken/index.html",
    "revision": "9d04dc050f15aae3db9f0dabd66a9335"
  },
  {
    "url": "blog/skepticism/2016/07/10/ark/index.html",
    "revision": "2bec20e1291b918b22db10345fcd0875"
  },
  {
    "url": "blog/skepticism/2016/07/10/bee/index.html",
    "revision": "6fa4690a565dd67642f38c68c567954c"
  },
  {
    "url": "blog/skepticism/2016/07/10/index.html",
    "revision": "10d70bf6274023ff98ff6a2f84cc69d5"
  },
  {
    "url": "blog/skepticism/2016/07/10/lottery/index.html",
    "revision": "d6c1ea04d084197d31e085ed45cb5e50"
  },
  {
    "url": "blog/skepticism/2016/07/10/murder/index.html",
    "revision": "6399625dd80504f1dfdade01d1a63e50"
  },
  {
    "url": "blog/skepticism/2016/07/17/dogs/index.html",
    "revision": "839816cad82760abc0fb5165784d6b7f"
  },
  {
    "url": "blog/skepticism/2016/07/17/fsm/index.html",
    "revision": "f167954ce31f1165e0cc2df3e50dc27c"
  },
  {
    "url": "blog/skepticism/2016/07/17/fyi/index.html",
    "revision": "7af65f853b2ece8e362bfaf7b96b6cda"
  },
  {
    "url": "blog/skepticism/2016/07/17/index.html",
    "revision": "3618e308e02fd76313670527476adf89"
  },
  {
    "url": "blog/skepticism/2016/07/17/natural/index.html",
    "revision": "497b9ada03a944bef43407cc85aa2b90"
  },
  {
    "url": "blog/skepticism/2016/07/17/pokemon/index.html",
    "revision": "d32ac4874eadfca918d898c9d2fffd70"
  },
  {
    "url": "blog/skepticism/2016/07/index.html",
    "revision": "fd98ff895ba5b6dd82ed10e2437ad4f1"
  },
  {
    "url": "blog/skepticism/2016/08/07/icke/index.html",
    "revision": "04b675f10c8070faa26da7468d959682"
  },
  {
    "url": "blog/skepticism/2016/08/07/index.html",
    "revision": "4b739227cd9da9947cea5de5458d3a6a"
  },
  {
    "url": "blog/skepticism/2016/08/21/brian/index.html",
    "revision": "7e7972f1b7a6e338a5b8c0283d16ba92"
  },
  {
    "url": "blog/skepticism/2016/08/21/chlorine/index.html",
    "revision": "da0433ce3276d7e4006d9a6648658daa"
  },
  {
    "url": "blog/skepticism/2016/08/21/index.html",
    "revision": "35046e335d17a6d8c4852cfebd04193a"
  },
  {
    "url": "blog/skepticism/2016/08/21/murder/index.html",
    "revision": "557d993cf887e5f4077f230ae17c07c8"
  },
  {
    "url": "blog/skepticism/2016/08/21/superfoods/index.html",
    "revision": "4897a5e15b992f79c547b0f90653779a"
  },
  {
    "url": "blog/skepticism/2016/08/21/witch/index.html",
    "revision": "8df7ecf11a8c44d47220fa8271721767"
  },
  {
    "url": "blog/skepticism/2016/08/28/alcohol/index.html",
    "revision": "fbb778f33b2702adb63e87f94fd93485"
  },
  {
    "url": "blog/skepticism/2016/08/28/chiro/index.html",
    "revision": "d9149331929ef18f26f16fc20f46704d"
  },
  {
    "url": "blog/skepticism/2016/08/28/index.html",
    "revision": "95f86ebc1d85ea6ea8dc05f67bff522b"
  },
  {
    "url": "blog/skepticism/2016/08/28/processed/index.html",
    "revision": "d8c7ef1677087064ffef9403c6bc0262"
  },
  {
    "url": "blog/skepticism/2016/08/28/sbh/index.html",
    "revision": "d8ec24c4f236ad5b2f1a22b0be5ee9ca"
  },
  {
    "url": "blog/skepticism/2016/08/index.html",
    "revision": "2824f2fefa7f3b8226b341a1e6ffb8af"
  },
  {
    "url": "blog/skepticism/2016/09/18/altruism/index.html",
    "revision": "2fb3a2de6778e9ae921fc184e9d161b5"
  },
  {
    "url": "blog/skepticism/2016/09/18/better/index.html",
    "revision": "1d2a5f74b7e29a8e92637c6febab22b9"
  },
  {
    "url": "blog/skepticism/2016/09/18/homeopathy/index.html",
    "revision": "6589aedf9956e1913ff6d2f26bc99945"
  },
  {
    "url": "blog/skepticism/2016/09/18/index.html",
    "revision": "691208ef53c61fba18911b3c36439439"
  },
  {
    "url": "blog/skepticism/2016/09/18/nonsense/index.html",
    "revision": "4e14907cb8188a75f0098d285af12bd1"
  },
  {
    "url": "blog/skepticism/2016/09/18/trump/index.html",
    "revision": "cde78317ad524dc6d05ace48e5e3a624"
  },
  {
    "url": "blog/skepticism/2016/09/25/clinic/index.html",
    "revision": "122785a931b5b1a59857e646576394f6"
  },
  {
    "url": "blog/skepticism/2016/09/25/fluoride/index.html",
    "revision": "4c927ec7abaf6728852b0598f9ce1ccc"
  },
  {
    "url": "blog/skepticism/2016/09/25/homeopathy/index.html",
    "revision": "eed897b0a95da247e90a17f0d09ad6a5"
  },
  {
    "url": "blog/skepticism/2016/09/25/index.html",
    "revision": "debd522ebc9b3a13d8fef2e51496608c"
  },
  {
    "url": "blog/skepticism/2016/09/25/murder/index.html",
    "revision": "cd23161e405666061ce3032cf9cc7f3c"
  },
  {
    "url": "blog/skepticism/2016/09/index.html",
    "revision": "a87cb15aea5fc8c1e3e1077b57425497"
  },
  {
    "url": "blog/skepticism/2016/10/21/bigfoot/index.html",
    "revision": "13a5a4e3d00d6614efd9a7fc81b3d8da"
  },
  {
    "url": "blog/skepticism/2016/10/21/breasts/index.html",
    "revision": "43c8c6f01db272fc5579997d33e61902"
  },
  {
    "url": "blog/skepticism/2016/10/21/index.html",
    "revision": "ffd3922d0bef09efc92366e5a99f6efe"
  },
  {
    "url": "blog/skepticism/2016/10/21/medsafe/index.html",
    "revision": "d02af0de96f4049b9684ddc9557b0ae2"
  },
  {
    "url": "blog/skepticism/2016/10/21/zenteq/index.html",
    "revision": "ed55e5439c99a1fc69a1a1d20b1340e7"
  },
  {
    "url": "blog/skepticism/2016/10/index.html",
    "revision": "a941c756c60e2ea684920e7a1f7fc388"
  },
  {
    "url": "blog/skepticism/2016/11/13/conference/index.html",
    "revision": "a145d4782a300177740cba2abd3fe5e7"
  },
  {
    "url": "blog/skepticism/2016/11/13/green/index.html",
    "revision": "bef68b314c345d9447144f1882c32e2c"
  },
  {
    "url": "blog/skepticism/2016/11/13/index.html",
    "revision": "1110901f5faefcbd1e649bf6b8defb70"
  },
  {
    "url": "blog/skepticism/2016/11/13/vice/index.html",
    "revision": "8be0a62910f071f777cf0608bfd8eeff"
  },
  {
    "url": "blog/skepticism/2016/11/27/bioptron/index.html",
    "revision": "397bb9b9d474dfec0d6e4935aee65576"
  },
  {
    "url": "blog/skepticism/2016/11/27/conference/index.html",
    "revision": "240f5bd9cf11cfed5e1bcb62227dbdeb"
  },
  {
    "url": "blog/skepticism/2016/11/27/earthquake/index.html",
    "revision": "91b6981905c34b6c075e363e968a1e55"
  },
  {
    "url": "blog/skepticism/2016/11/27/index.html",
    "revision": "4a1d10f09deb8c904a885fa7d320b6ae"
  },
  {
    "url": "blog/skepticism/2016/11/index.html",
    "revision": "714194f2ff50f77323b4a5d031d563a7"
  },
  {
    "url": "blog/skepticism/2016/12/04/conference/index.html",
    "revision": "55b182a34d92415cc35e69dcbb15d931"
  },
  {
    "url": "blog/skepticism/2016/12/04/index.html",
    "revision": "3bc43c19ab9858361cfa34535f0872fa"
  },
  {
    "url": "blog/skepticism/2016/12/18/colin/index.html",
    "revision": "36b3f1f55c2ea72b422f5efaa386c3b1"
  },
  {
    "url": "blog/skepticism/2016/12/18/fiji/index.html",
    "revision": "4e97203a8244874ed423a5f2d7907e5f"
  },
  {
    "url": "blog/skepticism/2016/12/18/index.html",
    "revision": "94cad1dcc30970adb7d9873e12b0d246"
  },
  {
    "url": "blog/skepticism/2016/12/18/kinesiology/index.html",
    "revision": "b483aac66b32f53e20fcf7918be4371e"
  },
  {
    "url": "blog/skepticism/2016/12/18/mmm/index.html",
    "revision": "590580a2a3582c84f692b845caef42ed"
  },
  {
    "url": "blog/skepticism/2016/12/18/nigel/index.html",
    "revision": "3397bfcf61ff3c0db0382628fa192b9d"
  },
  {
    "url": "blog/skepticism/2016/12/index.html",
    "revision": "568b9156ba2d87a7304e5ebe6875de3f"
  },
  {
    "url": "blog/skepticism/2016/index.html",
    "revision": "16e49a3cdb474133d75c68d9bc5c0981"
  },
  {
    "url": "blog/skepticism/2017/01/22/index.html",
    "revision": "9627c8eba11a58c92725c5a2c3de2497"
  },
  {
    "url": "blog/skepticism/2017/01/22/scientology/index.html",
    "revision": "9b6a4c64f53fe0ebd88d35335d3c813b"
  },
  {
    "url": "blog/skepticism/2017/01/29/creation/index.html",
    "revision": "13b04cf693f3ad51adc096db7a7aabe8"
  },
  {
    "url": "blog/skepticism/2017/01/29/index.html",
    "revision": "473de8377c86c0a8c975764e83ee454a"
  },
  {
    "url": "blog/skepticism/2017/01/index.html",
    "revision": "63ce013819cd152036a15df6361c34cb"
  },
  {
    "url": "blog/skepticism/2017/02/05/fraudster/index.html",
    "revision": "b722f8957560ccc378238903dd0b5279"
  },
  {
    "url": "blog/skepticism/2017/02/05/gervais/index.html",
    "revision": "9e20d6e8ea87a8c656b3df77e643f1a3"
  },
  {
    "url": "blog/skepticism/2017/02/05/index.html",
    "revision": "97dab134c957295ce9e3319fafc47ab2"
  },
  {
    "url": "blog/skepticism/2017/02/05/scientology/index.html",
    "revision": "cd4a13e1bcaac7203d49887d2af3c8a6"
  },
  {
    "url": "blog/skepticism/2017/02/19/homeopathy/index.html",
    "revision": "a8823378bfbdd918c25b28bbf1b655bc"
  },
  {
    "url": "blog/skepticism/2017/02/19/index.html",
    "revision": "af1d24143ed5824cbbe78811c8bc12c9"
  },
  {
    "url": "blog/skepticism/2017/02/19/lottery/index.html",
    "revision": "68e867c81a424bcb10010a14f1c3175b"
  },
  {
    "url": "blog/skepticism/2017/02/19/vaxxed/index.html",
    "revision": "d2b820f06db34a8564c5f07e891acb0e"
  },
  {
    "url": "blog/skepticism/2017/02/19/whales/index.html",
    "revision": "b5e4ac8ccedbd07caf5c1870e7b0c6b8"
  },
  {
    "url": "blog/skepticism/2017/02/index.html",
    "revision": "2a400392ce2e1628d60fcc690630cd4c"
  },
  {
    "url": "blog/skepticism/2017/03/05/index.html",
    "revision": "e7ee77017345562ebe4d674f67b2d74d"
  },
  {
    "url": "blog/skepticism/2017/03/05/rea/index.html",
    "revision": "070388fd9a66773842c3a98737ad5dac"
  },
  {
    "url": "blog/skepticism/2017/03/19/fake/index.html",
    "revision": "6b5b686688ad4c1f0095740609c9d48d"
  },
  {
    "url": "blog/skepticism/2017/03/19/index.html",
    "revision": "29073572c61463951a21bef5ca0fd7e5"
  },
  {
    "url": "blog/skepticism/2017/03/19/murder/index.html",
    "revision": "c708e969706b02246f68cd0faf2af963"
  },
  {
    "url": "blog/skepticism/2017/03/26/census/index.html",
    "revision": "65adfa15c78ee8b16edb4aea1b4182b7"
  },
  {
    "url": "blog/skepticism/2017/03/26/index.html",
    "revision": "056dc4671e694a850564c9d879461a01"
  },
  {
    "url": "blog/skepticism/2017/03/26/nzmj/index.html",
    "revision": "a159c57f2f87416523856df4c111836c"
  },
  {
    "url": "blog/skepticism/2017/03/26/shaquille/index.html",
    "revision": "57cbce1779779ae68e5be6d0c663dd3f"
  },
  {
    "url": "blog/skepticism/2017/03/index.html",
    "revision": "dbbcccc809ff10d0739e6744c1ed8c73"
  },
  {
    "url": "blog/skepticism/2017/04/02/index.html",
    "revision": "582fd3681d9258a85c8a8353a745cf40"
  },
  {
    "url": "blog/skepticism/2017/04/02/nasa/index.html",
    "revision": "881bf9400bbf49b1708254b30b4de1ee"
  },
  {
    "url": "blog/skepticism/2017/04/02/science/index.html",
    "revision": "81b890754b277da1df91f500980411f0"
  },
  {
    "url": "blog/skepticism/2017/04/02/vaxxed/index.html",
    "revision": "53eadb4ed8e4b495ee593e5a1b3f4a72"
  },
  {
    "url": "blog/skepticism/2017/04/09/index.html",
    "revision": "a8156966ed12fe2fadce07c32e85f680"
  },
  {
    "url": "blog/skepticism/2017/04/09/tekiri/index.html",
    "revision": "8fd79b00ff17812e9884abfeb9eca16c"
  },
  {
    "url": "blog/skepticism/2017/04/09/vaxxed/index.html",
    "revision": "9fec165de42e1888084bf6417fe36f54"
  },
  {
    "url": "blog/skepticism/2017/04/23/arise/index.html",
    "revision": "c3c0ed0ce964fea57f1dedfffa5afbe4"
  },
  {
    "url": "blog/skepticism/2017/04/23/index.html",
    "revision": "a2fe3412ac7511ee5550bb42557ba37c"
  },
  {
    "url": "blog/skepticism/2017/04/23/kelvin/index.html",
    "revision": "e2ae2f1ac4f206d94f57df3b24998078"
  },
  {
    "url": "blog/skepticism/2017/04/index.html",
    "revision": "5b4e8248eac80e9e86fad6f252f64797"
  },
  {
    "url": "blog/skepticism/2017/05/07/cancer/index.html",
    "revision": "5f10af2a27755c4523cc3650940f50af"
  },
  {
    "url": "blog/skepticism/2017/05/07/index.html",
    "revision": "ff159999ec6c91ac313abe50caf27a60"
  },
  {
    "url": "blog/skepticism/2017/05/07/nigel/index.html",
    "revision": "4f206c4144eb07a7eea30714bed971f6"
  },
  {
    "url": "blog/skepticism/2017/05/21/blasphemy/index.html",
    "revision": "748f3147c5645bd9c7d411c61af60631"
  },
  {
    "url": "blog/skepticism/2017/05/21/flat/index.html",
    "revision": "bad3d4dd6092c8f95bb8b7c1cc351f90"
  },
  {
    "url": "blog/skepticism/2017/05/21/index.html",
    "revision": "029e6905f5520712eb0d6c47805065be"
  },
  {
    "url": "blog/skepticism/2017/05/21/maori/index.html",
    "revision": "6e1a12f232db0f9557da32febe2022bb"
  },
  {
    "url": "blog/skepticism/2017/05/index.html",
    "revision": "1ed7862c61d17458b6f62eb3c8f77bcb"
  },
  {
    "url": "blog/skepticism/2017/06/04/bigelow/index.html",
    "revision": "1cbcaa84f59e58c15a1ff8502107f2bf"
  },
  {
    "url": "blog/skepticism/2017/06/04/climate/index.html",
    "revision": "9b5cc2b5660f28d082c257811a601988"
  },
  {
    "url": "blog/skepticism/2017/06/04/hansford/index.html",
    "revision": "deedeb7bf4041708e86abff959edcc22"
  },
  {
    "url": "blog/skepticism/2017/06/04/index.html",
    "revision": "7cd389b8c8f994b58af8ca964ea22341"
  },
  {
    "url": "blog/skepticism/2017/06/04/wasp/index.html",
    "revision": "739b875df6f8edc6152b902a649104ed"
  },
  {
    "url": "blog/skepticism/2017/06/11/colonic/index.html",
    "revision": "6d5f3c688863500207c4e0aba0d11ee5"
  },
  {
    "url": "blog/skepticism/2017/06/11/credulous/index.html",
    "revision": "eeb42e55bc193ffb4149306441af976e"
  },
  {
    "url": "blog/skepticism/2017/06/11/index.html",
    "revision": "d5b1db489aa90705cfcefb681f01a76b"
  },
  {
    "url": "blog/skepticism/2017/06/11/journals/index.html",
    "revision": "36300b6c04dc5211d120baf583be0cfc"
  },
  {
    "url": "blog/skepticism/2017/06/18/breatharians/index.html",
    "revision": "6a721db97a690629f497e314a3fe3545"
  },
  {
    "url": "blog/skepticism/2017/06/18/fieldays/index.html",
    "revision": "f1fafa3b0ea8d47b6af339537b9dc8ad"
  },
  {
    "url": "blog/skepticism/2017/06/18/index.html",
    "revision": "b83bfe2b777c15aecba18abb86512485"
  },
  {
    "url": "blog/skepticism/2017/06/18/jw/index.html",
    "revision": "004268274e192cab98a16c8f8985cb80"
  },
  {
    "url": "blog/skepticism/2017/06/18/oil/index.html",
    "revision": "7c775f7429e58984195a6d330c89a2cf"
  },
  {
    "url": "blog/skepticism/2017/06/index.html",
    "revision": "564b82f8fa699bc558343ca0559a1181"
  },
  {
    "url": "blog/skepticism/2017/07/02/baby/index.html",
    "revision": "a939d57c81ebdde490b29f9a68cf2cd8"
  },
  {
    "url": "blog/skepticism/2017/07/02/index.html",
    "revision": "8fec2d45cd880577aaf2d33f711b2bd1"
  },
  {
    "url": "blog/skepticism/2017/07/02/infowars/index.html",
    "revision": "dd128925e97019d8d9d93eb1f7ceb8cd"
  },
  {
    "url": "blog/skepticism/2017/07/02/scientology/index.html",
    "revision": "e8d5d2581229e8fd20eb252c30f54df1"
  },
  {
    "url": "blog/skepticism/2017/07/16/bananas/index.html",
    "revision": "ed5f319e4dd6f0d69671e6bf5fb97cfe"
  },
  {
    "url": "blog/skepticism/2017/07/16/circles/index.html",
    "revision": "f7e4bee4ff3dd68496ffa500ad82425a"
  },
  {
    "url": "blog/skepticism/2017/07/16/index.html",
    "revision": "4f4b7e5f2f2521947a02827d07c65b11"
  },
  {
    "url": "blog/skepticism/2017/07/16/siggi/index.html",
    "revision": "90df639372457b074980cff949462ead"
  },
  {
    "url": "blog/skepticism/2017/07/16/vaxxed/index.html",
    "revision": "501c05e0e93f266bca51ae0742f56079"
  },
  {
    "url": "blog/skepticism/2017/07/30/bleach/index.html",
    "revision": "a15e95e82322a02d5f538d8d52d23ccd"
  },
  {
    "url": "blog/skepticism/2017/07/30/bluebeam/index.html",
    "revision": "6c3286b28acfee7b932bea37c6d33dd7"
  },
  {
    "url": "blog/skepticism/2017/07/30/index.html",
    "revision": "dae130d534854973ab8555da311803bd"
  },
  {
    "url": "blog/skepticism/2017/07/30/police/index.html",
    "revision": "5720c202408b693c26b2b45bda0da9e9"
  },
  {
    "url": "blog/skepticism/2017/07/index.html",
    "revision": "99ad0ce963fa2dcdd491b517829fd8da"
  },
  {
    "url": "blog/skepticism/2017/08/06/conned/index.html",
    "revision": "5e0e9039b4d43eceec44fba15b576c2c"
  },
  {
    "url": "blog/skepticism/2017/08/06/doll/index.html",
    "revision": "ec1b8fcd05fbb8e6af3666b7ab9c089c"
  },
  {
    "url": "blog/skepticism/2017/08/06/index.html",
    "revision": "022a8e622fa5a1c2478d78e843f95bc2"
  },
  {
    "url": "blog/skepticism/2017/08/06/jacinda/index.html",
    "revision": "0e5c3cceb2e34e4d1a1ae376a0b984e7"
  },
  {
    "url": "blog/skepticism/2017/08/06/lotto/index.html",
    "revision": "dff2d8e7da537522b5c3227e479aa6d1"
  },
  {
    "url": "blog/skepticism/2017/08/27/index.html",
    "revision": "f1275ed14a391ccf7d6d832812b95d66"
  },
  {
    "url": "blog/skepticism/2017/08/27/naturopath/index.html",
    "revision": "788a523a605105e6c9cec5e8be6f7ad6"
  },
  {
    "url": "blog/skepticism/2017/08/27/satanic/index.html",
    "revision": "b02b0503d40aea77a0c08b8b34a6b05b"
  },
  {
    "url": "blog/skepticism/2017/08/index.html",
    "revision": "cc2f0931a5cd3290fdf03a7271321a2a"
  },
  {
    "url": "blog/skepticism/2017/09/03/apocalypse/index.html",
    "revision": "07f6a17cd8f6d776dd54cdd46b460679"
  },
  {
    "url": "blog/skepticism/2017/09/03/cancer/index.html",
    "revision": "e948c53aae9b1ac37aacc1b1be0d1eda"
  },
  {
    "url": "blog/skepticism/2017/09/03/index.html",
    "revision": "3c3a6a46a436991d8c48b41fe4a24a55"
  },
  {
    "url": "blog/skepticism/2017/09/03/rectangle/index.html",
    "revision": "3be5c52a072ff77421feaaf60fc39dcd"
  },
  {
    "url": "blog/skepticism/2017/09/03/stargate/index.html",
    "revision": "56dc9fc5032d597f180ad331ef7951b3"
  },
  {
    "url": "blog/skepticism/2017/09/index.html",
    "revision": "cdf8a2743ae6e97b364e2eb69a126951"
  },
  {
    "url": "blog/skepticism/2017/10/01/apocalypse/index.html",
    "revision": "168a4ccf0b7c4fdcd8934558bd140ada"
  },
  {
    "url": "blog/skepticism/2017/10/01/freeman/index.html",
    "revision": "a457c5a589c3f2e5b880b2845fd9df06"
  },
  {
    "url": "blog/skepticism/2017/10/01/index.html",
    "revision": "3ddef8ef8906ff08230cc99ab5a73bef"
  },
  {
    "url": "blog/skepticism/2017/10/01/pharmacy/index.html",
    "revision": "0a08e12274dcc27479475fdbf852a89b"
  },
  {
    "url": "blog/skepticism/2017/10/08/index.html",
    "revision": "bab4b97216658860ffd133e4133c70c9"
  },
  {
    "url": "blog/skepticism/2017/10/08/pill/index.html",
    "revision": "d2b854401b7a46ca8fab704e7ab5e9f0"
  },
  {
    "url": "blog/skepticism/2017/10/08/qsb/index.html",
    "revision": "bbc9d8e781f91d7514d13b2e0e4350eb"
  },
  {
    "url": "blog/skepticism/2017/10/08/vegas/index.html",
    "revision": "077fc9d651b09ff7adb84c63181dd37d"
  },
  {
    "url": "blog/skepticism/2017/10/15/doterra/index.html",
    "revision": "5252a29d9833dd2c929ad2cf7898ff84"
  },
  {
    "url": "blog/skepticism/2017/10/15/index.html",
    "revision": "a3899b9d7331451d444093dd91acdb51"
  },
  {
    "url": "blog/skepticism/2017/10/15/lie/index.html",
    "revision": "201946091064c974b054a04df61c6aa7"
  },
  {
    "url": "blog/skepticism/2017/10/15/soap/index.html",
    "revision": "b227c8a56eb35f4e6e9ca700bf72ff94"
  },
  {
    "url": "blog/skepticism/2017/10/index.html",
    "revision": "d332d6f7588e54b06a37dc857d7b9d3e"
  },
  {
    "url": "blog/skepticism/2017/11/05/conference/index.html",
    "revision": "d7f641d1c30b557be156c2d671bffd19"
  },
  {
    "url": "blog/skepticism/2017/11/05/glyphosate/index.html",
    "revision": "a2459564183e30e06e40f9088db85f90"
  },
  {
    "url": "blog/skepticism/2017/11/05/index.html",
    "revision": "7a6a58f8800e9079997f83df45c59266"
  },
  {
    "url": "blog/skepticism/2017/11/05/stranded/index.html",
    "revision": "d5e0414a1b2dc5ba666ac51d5e7e3aae"
  },
  {
    "url": "blog/skepticism/2017/11/05/tracts/index.html",
    "revision": "5575ec52a3275af1c198b58dc4f2d436"
  },
  {
    "url": "blog/skepticism/2017/11/12/ghost/index.html",
    "revision": "8e51ab38db0469d230a3d6b3621537c1"
  },
  {
    "url": "blog/skepticism/2017/11/12/green/index.html",
    "revision": "fee827861d5ec6b41287ad3fb8318a91"
  },
  {
    "url": "blog/skepticism/2017/11/12/harassment/index.html",
    "revision": "9dd2b130fe8c7d5a39c3895fcba2765f"
  },
  {
    "url": "blog/skepticism/2017/11/12/index.html",
    "revision": "727fe7b6ed8ef750a5aaf1b2df1c99b0"
  },
  {
    "url": "blog/skepticism/2017/11/12/libby/index.html",
    "revision": "8551a9f0bc42d6d7ef149da5e276a3dc"
  },
  {
    "url": "blog/skepticism/2017/11/index.html",
    "revision": "4a8d39242c57cb304a57e3c60ae08719"
  },
  {
    "url": "blog/skepticism/2017/12/03/acupuncture/index.html",
    "revision": "4b8800a46f433f017856b529519fef0d"
  },
  {
    "url": "blog/skepticism/2017/12/03/denialism/index.html",
    "revision": "5a288ca066eb6a8e32405bf69ac22883"
  },
  {
    "url": "blog/skepticism/2017/12/03/dowsing/index.html",
    "revision": "16cb9fae82641fe48a0e66ee39b50ad7"
  },
  {
    "url": "blog/skepticism/2017/12/03/holes/index.html",
    "revision": "1ca0d307442e0f7ffbe0a5f34814a5b8"
  },
  {
    "url": "blog/skepticism/2017/12/03/index.html",
    "revision": "d02434b54f854a6ef9f27ce8ae567584"
  },
  {
    "url": "blog/skepticism/2017/12/17/index.html",
    "revision": "299aa8f85e956be7133022f1785d872a"
  },
  {
    "url": "blog/skepticism/2017/12/17/nhs/index.html",
    "revision": "a8345f092dd413295f18366828a7d9c3"
  },
  {
    "url": "blog/skepticism/2017/12/17/oto/index.html",
    "revision": "ebb72a551ddb21055db061e679cf6dda"
  },
  {
    "url": "blog/skepticism/2017/12/17/pastafarian/index.html",
    "revision": "bc80db0d3ec5756df84a32a48b6c0bb2"
  },
  {
    "url": "blog/skepticism/2017/12/17/shc/index.html",
    "revision": "d42b968397eb582b9bdee7c3fea7ae71"
  },
  {
    "url": "blog/skepticism/2017/12/17/wellworks/index.html",
    "revision": "75efc3a54b69f4404f186d4c0216e30b"
  },
  {
    "url": "blog/skepticism/2017/12/index.html",
    "revision": "e02a146eec3044019681a1e1988434ce"
  },
  {
    "url": "blog/skepticism/2017/index.html",
    "revision": "163fdd3d13e0c1f13bc39b63a1745a22"
  },
  {
    "url": "blog/skepticism/2018/01/21/grounding/index.html",
    "revision": "e5ad02ce5d7abff971e884da532b0af4"
  },
  {
    "url": "blog/skepticism/2018/01/21/index.html",
    "revision": "49fd6dac4b05009ec37fb7cf600b2153"
  },
  {
    "url": "blog/skepticism/2018/01/21/naturopath/index.html",
    "revision": "5196736f691b596c97592682193fabc4"
  },
  {
    "url": "blog/skepticism/2018/01/21/respen/index.html",
    "revision": "cc2640002465e63fbdf385a1d470cd34"
  },
  {
    "url": "blog/skepticism/2018/01/28/bears/index.html",
    "revision": "be59210f848cf9b7cc46b847ce839042"
  },
  {
    "url": "blog/skepticism/2018/01/28/index.html",
    "revision": "f37e09dbb40da0361454336e9c6d5b82"
  },
  {
    "url": "blog/skepticism/2018/01/28/peppering/index.html",
    "revision": "5df1a2df9c835f138723e10428b25850"
  },
  {
    "url": "blog/skepticism/2018/01/28/pet/index.html",
    "revision": "2aac27b0742d5c40e0b196e9f8e045a7"
  },
  {
    "url": "blog/skepticism/2018/01/28/quake/index.html",
    "revision": "18aaeac64bd66bc76488dcf913e87ae6"
  },
  {
    "url": "blog/skepticism/2018/01/28/scientology/index.html",
    "revision": "70e77c9a8f6fd474993a2cfbab680e43"
  },
  {
    "url": "blog/skepticism/2018/01/index.html",
    "revision": "e36889a6bab8ed2caca3d924c5e4338e"
  },
  {
    "url": "blog/skepticism/2018/02/11/asa/index.html",
    "revision": "2e848b249db61ae2954f9bba5ec7dd2b"
  },
  {
    "url": "blog/skepticism/2018/02/11/cannabis/index.html",
    "revision": "793950217fed137b562cadee50b40784"
  },
  {
    "url": "blog/skepticism/2018/02/11/elon/index.html",
    "revision": "a1c51f443ddcbce52e937dccf401b634"
  },
  {
    "url": "blog/skepticism/2018/02/11/homeopathy/index.html",
    "revision": "bc76b93050aed865dcf0d4a8b07ee4c5"
  },
  {
    "url": "blog/skepticism/2018/02/11/index.html",
    "revision": "45359010fe8b069ffa808fea0de01bdb"
  },
  {
    "url": "blog/skepticism/2018/02/11/water/index.html",
    "revision": "bec8a0471ff2c95324a2d9dcc8bd4871"
  },
  {
    "url": "blog/skepticism/2018/02/25/crisis/index.html",
    "revision": "526e39793d81f01f62b79ef039332c39"
  },
  {
    "url": "blog/skepticism/2018/02/25/eggs/index.html",
    "revision": "543a7b73a8545f9743742e249970ae71"
  },
  {
    "url": "blog/skepticism/2018/02/25/fsm/index.html",
    "revision": "2f0b3ddb7779ecfa1b55f853e6db5a87"
  },
  {
    "url": "blog/skepticism/2018/02/25/index.html",
    "revision": "450d4843a7e4be4ee39ca59b11595b76"
  },
  {
    "url": "blog/skepticism/2018/02/25/number/index.html",
    "revision": "8736431d248033f48b8f0443bd914ade"
  },
  {
    "url": "blog/skepticism/2018/02/25/quackery/index.html",
    "revision": "3677fe4ee734b4e9b2622ba575d3a71d"
  },
  {
    "url": "blog/skepticism/2018/02/index.html",
    "revision": "19f5ec2d1cafc504e81b44d6ea19d139"
  },
  {
    "url": "blog/skepticism/2018/03/11/ai/index.html",
    "revision": "6f20151bc974cb9bb586aa1d39ebff41"
  },
  {
    "url": "blog/skepticism/2018/03/11/index.html",
    "revision": "42903a5e032c44de26fbe1d4649072c7"
  },
  {
    "url": "blog/skepticism/2018/03/11/radiation/index.html",
    "revision": "ba8d099b3f17239dc800aea86c00e7bd"
  },
  {
    "url": "blog/skepticism/2018/03/11/reiki/index.html",
    "revision": "d02a39c53cc9db0cc72253ad84f023fb"
  },
  {
    "url": "blog/skepticism/2018/03/11/ufo/index.html",
    "revision": "72c3f179eb05099a8894904e5a17d04e"
  },
  {
    "url": "blog/skepticism/2018/03/18/ghost/index.html",
    "revision": "2c9a3e9075415590e07f162eaf3956a2"
  },
  {
    "url": "blog/skepticism/2018/03/18/index.html",
    "revision": "992a784b26853c482538b37bd20f3b6b"
  },
  {
    "url": "blog/skepticism/2018/03/18/psychic/index.html",
    "revision": "77df289d5c41d8849d96bfab2722bf13"
  },
  {
    "url": "blog/skepticism/2018/03/18/quack/index.html",
    "revision": "9aa7664db1563f571597d3a58ad79d91"
  },
  {
    "url": "blog/skepticism/2018/03/18/radiation/index.html",
    "revision": "ff6eef9636999b3c128cef25bbf942bc"
  },
  {
    "url": "blog/skepticism/2018/03/index.html",
    "revision": "d8f89ec949c810eb880b24cb7023f432"
  },
  {
    "url": "blog/skepticism/2018/04/08/calocurb/index.html",
    "revision": "f241c73c8dbce07c96c8e374b3cb4133"
  },
  {
    "url": "blog/skepticism/2018/04/08/cam/index.html",
    "revision": "cb5909fe935d1c864f082642c05a15a7"
  },
  {
    "url": "blog/skepticism/2018/04/08/index.html",
    "revision": "1883427780d9686cda10b03866b69244"
  },
  {
    "url": "blog/skepticism/2018/04/08/psychic/index.html",
    "revision": "cf35703b17663b5d7d7427eec3e01743"
  },
  {
    "url": "blog/skepticism/2018/04/08/vaccines/index.html",
    "revision": "eebc4cfd020cd5e76bf0df5947276ca3"
  },
  {
    "url": "blog/skepticism/2018/04/15/coffee/index.html",
    "revision": "eaf5bc5487f57cf2c90caf4e4536d500"
  },
  {
    "url": "blog/skepticism/2018/04/15/ignorance/index.html",
    "revision": "15682731d00ca08ed3183c6b7f1f25f8"
  },
  {
    "url": "blog/skepticism/2018/04/15/index.html",
    "revision": "1f8a8f8cb30374fbacdcee6026fb2ed0"
  },
  {
    "url": "blog/skepticism/2018/04/15/nasa/index.html",
    "revision": "e483c9ee4cf39116724fb4b06492a675"
  },
  {
    "url": "blog/skepticism/2018/04/15/tapu/index.html",
    "revision": "57beb26f0254f62586fe16d193458ec6"
  },
  {
    "url": "blog/skepticism/2018/04/29/google/index.html",
    "revision": "15cdd9403a85ac203fca323a895de5aa"
  },
  {
    "url": "blog/skepticism/2018/04/29/homeopathy/index.html",
    "revision": "430e5c9b193353852dc4a56618ec9b71"
  },
  {
    "url": "blog/skepticism/2018/04/29/index.html",
    "revision": "715810b28018ef8b3c725d271deebee8"
  },
  {
    "url": "blog/skepticism/2018/04/29/ken/index.html",
    "revision": "d58c153b1f88845e34657460a097167c"
  },
  {
    "url": "blog/skepticism/2018/04/29/v2k/index.html",
    "revision": "4b191388d6e6da1da5578aa301f036e9"
  },
  {
    "url": "blog/skepticism/2018/04/index.html",
    "revision": "2c13cc425605fd8610348d70e3913b00"
  },
  {
    "url": "blog/skepticism/2018/05/13/astrology/index.html",
    "revision": "38614e9c02a98a81cc6a1891a17e0378"
  },
  {
    "url": "blog/skepticism/2018/05/13/crystals/index.html",
    "revision": "cac36cf61fbcc280998382b66529a5f1"
  },
  {
    "url": "blog/skepticism/2018/05/13/dawkins/index.html",
    "revision": "b43368dd153965948ba1d7b6f316501d"
  },
  {
    "url": "blog/skepticism/2018/05/13/index.html",
    "revision": "788726d69830b38f8e334c8b64f5752a"
  },
  {
    "url": "blog/skepticism/2018/05/13/kangen/index.html",
    "revision": "d7fde3abac329a9db158fa93e0d5220c"
  },
  {
    "url": "blog/skepticism/2018/05/13/vitamins/index.html",
    "revision": "3253f6a7c6c48e34c28b2b245fb6abd6"
  },
  {
    "url": "blog/skepticism/2018/05/27/flat/index.html",
    "revision": "8d0f261a0416041982db20c55de007b2"
  },
  {
    "url": "blog/skepticism/2018/05/27/index.html",
    "revision": "72862d9dbb25261cf96b4bf95f7994f4"
  },
  {
    "url": "blog/skepticism/2018/05/27/kangen/index.html",
    "revision": "5add2040bae6e62f3269c30c3af855b2"
  },
  {
    "url": "blog/skepticism/2018/05/27/ness/index.html",
    "revision": "c3150a3f5b16802c013d167636dbb5bc"
  },
  {
    "url": "blog/skepticism/2018/05/27/oz/index.html",
    "revision": "b1c8c6d9aa8a16ce6d679d8e91605224"
  },
  {
    "url": "blog/skepticism/2018/05/27/psychic/index.html",
    "revision": "9b99c690df76c14487724abc9fefd770"
  },
  {
    "url": "blog/skepticism/2018/05/index.html",
    "revision": "377a471b2a2a5ae845438087cc51a419"
  },
  {
    "url": "blog/skepticism/2018/06/10/astrology/index.html",
    "revision": "8259e98c736791f964c2d2a8a8f42e46"
  },
  {
    "url": "blog/skepticism/2018/06/10/index.html",
    "revision": "ce3193dd314c735073422a37d707943a"
  },
  {
    "url": "blog/skepticism/2018/06/10/nhs/index.html",
    "revision": "63a45fd5c7dafc85c2ae053cb9f8b0c7"
  },
  {
    "url": "blog/skepticism/2018/06/10/shakti/index.html",
    "revision": "2eab8532210d13f19ada1ec2c184082e"
  },
  {
    "url": "blog/skepticism/2018/06/10/weetbix/index.html",
    "revision": "ea71d0efeea6113ef147e983516e9a5d"
  },
  {
    "url": "blog/skepticism/2018/06/24/blasphemy/index.html",
    "revision": "0a6eb009565ab88e4f9a1512af266464"
  },
  {
    "url": "blog/skepticism/2018/06/24/cannabis/index.html",
    "revision": "ff10adcbb38bd3a6c084b4b5f6ea4b6e"
  },
  {
    "url": "blog/skepticism/2018/06/24/hotdog/index.html",
    "revision": "6a44139241fff9184de6552799efbc65"
  },
  {
    "url": "blog/skepticism/2018/06/24/index.html",
    "revision": "683e81d9130fe19e9298db0ce460630d"
  },
  {
    "url": "blog/skepticism/2018/06/24/led/index.html",
    "revision": "11081e9286cf4ef185b76fb5ff490f70"
  },
  {
    "url": "blog/skepticism/2018/06/index.html",
    "revision": "69a066c171b46b9a976ba9d20f26c272"
  },
  {
    "url": "blog/skepticism/2018/07/08/bullet/index.html",
    "revision": "7120d1f8f5784d7f8694ed259c4f5ae7"
  },
  {
    "url": "blog/skepticism/2018/07/08/chiros/index.html",
    "revision": "eeb6779fdb8cd15faf136dfb91c4fe09"
  },
  {
    "url": "blog/skepticism/2018/07/08/hiv/index.html",
    "revision": "216980eebdba9d56f7403d2bdf87443c"
  },
  {
    "url": "blog/skepticism/2018/07/08/hrv/index.html",
    "revision": "e63e1edcca67c229bd8e58d2f6d6a474"
  },
  {
    "url": "blog/skepticism/2018/07/08/index.html",
    "revision": "cd6dfc34634386ad07a19d7290127fba"
  },
  {
    "url": "blog/skepticism/2018/07/22/cancer/index.html",
    "revision": "ff89f0fa8053273ac3af62fd03e787bf"
  },
  {
    "url": "blog/skepticism/2018/07/22/index.html",
    "revision": "492913c232fa3115d4f3568918758a09"
  },
  {
    "url": "blog/skepticism/2018/07/22/resurrection/index.html",
    "revision": "e5b3f3d2d94a7f5dd685c037f47c005c"
  },
  {
    "url": "blog/skepticism/2018/07/22/talc/index.html",
    "revision": "4fd6ee53359862424c45c1ef3b7f5286"
  },
  {
    "url": "blog/skepticism/2018/07/22/visas/index.html",
    "revision": "c9a2060fef6aa51f8b53d1ec66b4927d"
  },
  {
    "url": "blog/skepticism/2018/07/index.html",
    "revision": "bf2e91d24949643edd261f25579080f8"
  },
  {
    "url": "blog/skepticism/2018/08/05/conf/index.html",
    "revision": "4d0356fe67c9355474f5a0d68d4dc0dd"
  },
  {
    "url": "blog/skepticism/2018/08/05/index.html",
    "revision": "805d8ad7dcbc7dd824c9433f73de870f"
  },
  {
    "url": "blog/skepticism/2018/08/05/qanon/index.html",
    "revision": "5f86bcca9a745674ceaf0df701ff92a1"
  },
  {
    "url": "blog/skepticism/2018/08/19/index.html",
    "revision": "9eba4ce55c4930b5456010a05038ca77"
  },
  {
    "url": "blog/skepticism/2018/08/19/jw/index.html",
    "revision": "50e19e726a3858df85eac45554df0c07"
  },
  {
    "url": "blog/skepticism/2018/08/index.html",
    "revision": "b74485d89ee865d782bd3062c6c9fc68"
  },
  {
    "url": "blog/skepticism/2018/09/02/allergy/index.html",
    "revision": "9fb25c440f24ed3dac4c1c4a48f35986"
  },
  {
    "url": "blog/skepticism/2018/09/02/catholic/index.html",
    "revision": "684a02c0704b74cabbc57c14cc5e466e"
  },
  {
    "url": "blog/skepticism/2018/09/02/index.html",
    "revision": "b666408c5edb04072729a27d8dc7d056"
  },
  {
    "url": "blog/skepticism/2018/09/02/jw/index.html",
    "revision": "2c9cd95a79eb58ca773761934624e190"
  },
  {
    "url": "blog/skepticism/2018/09/02/sen/index.html",
    "revision": "3039d51eee20110e8e29c950d93bcd4f"
  },
  {
    "url": "blog/skepticism/2018/09/16/1080/index.html",
    "revision": "5270d7505f8ead8913b289849ede6e82"
  },
  {
    "url": "blog/skepticism/2018/09/16/church/index.html",
    "revision": "63889b4669a70cbd40f69df40edbc612"
  },
  {
    "url": "blog/skepticism/2018/09/16/index.html",
    "revision": "cf92c63661a519398de0c49b9ab747eb"
  },
  {
    "url": "blog/skepticism/2018/09/16/jones/index.html",
    "revision": "17395137b81aa1425cad050a2c55f756"
  },
  {
    "url": "blog/skepticism/2018/09/16/scammers/index.html",
    "revision": "ea6249a292a1ed0ce4c3702894161f0d"
  },
  {
    "url": "blog/skepticism/2018/09/30/index.html",
    "revision": "d8ef7966c6b13f26a07fdc2f5e5590e9"
  },
  {
    "url": "blog/skepticism/2018/09/30/jw/index.html",
    "revision": "00553b1adca9ef0d98bc5616972ed839"
  },
  {
    "url": "blog/skepticism/2018/09/30/oto/index.html",
    "revision": "8dd8fb4634c10dee851ed1026ea77701"
  },
  {
    "url": "blog/skepticism/2018/09/30/who/index.html",
    "revision": "efb86502a5e9fa99779aa9c8775bc878"
  },
  {
    "url": "blog/skepticism/2018/09/index.html",
    "revision": "dd765d5af5fb1e9e13dd7e52d889b72c"
  },
  {
    "url": "blog/skepticism/2018/10/14/hacked/index.html",
    "revision": "524def7d5d4718a03e765652741bcdd0"
  },
  {
    "url": "blog/skepticism/2018/10/14/index.html",
    "revision": "3a6e056b248982d9e76923e96d72c370"
  },
  {
    "url": "blog/skepticism/2018/10/14/kangen/index.html",
    "revision": "84e61d6e6cf56c602b8bf285dd46dddf"
  },
  {
    "url": "blog/skepticism/2018/10/14/pakistan/index.html",
    "revision": "f22c21249c00a7ecd501e05c8ef2f1ef"
  },
  {
    "url": "blog/skepticism/2018/10/14/sarah/index.html",
    "revision": "2271441f77ef0a0b113988746e577fbc"
  },
  {
    "url": "blog/skepticism/2018/10/28/blasphemy/index.html",
    "revision": "bccd74cd63f0db8f0fc5c639679636f1"
  },
  {
    "url": "blog/skepticism/2018/10/28/hrv/index.html",
    "revision": "e7b05fa90260727ea53f4cca3dd0f5a2"
  },
  {
    "url": "blog/skepticism/2018/10/28/index.html",
    "revision": "0717fd74673c76ddab31518e8a2e688a"
  },
  {
    "url": "blog/skepticism/2018/10/28/jesus/index.html",
    "revision": "f23cf68dbdabbba88d1c49ed6d467c52"
  },
  {
    "url": "blog/skepticism/2018/10/28/natural/index.html",
    "revision": "672b47ec7ec1cce44264a67189821f0d"
  },
  {
    "url": "blog/skepticism/2018/10/index.html",
    "revision": "3ee07ad615de675edf6bec220ede3cc6"
  },
  {
    "url": "blog/skepticism/2018/11/04/bibi/index.html",
    "revision": "2b7930c7ed232094689ee2749a969399"
  },
  {
    "url": "blog/skepticism/2018/11/04/index.html",
    "revision": "6bd935ce0b2ee4a6a498524081bf6fa7"
  },
  {
    "url": "blog/skepticism/2018/11/04/jesus/index.html",
    "revision": "6ef8f7e1edea3e4680068391f85e9620"
  },
  {
    "url": "blog/skepticism/2018/11/04/obdii/index.html",
    "revision": "83d58f901fe75c724b48388b68830980"
  },
  {
    "url": "blog/skepticism/2018/11/04/sleepdrops/index.html",
    "revision": "87f0e7215de5d04e2217c862c6387da8"
  },
  {
    "url": "blog/skepticism/2018/11/index.html",
    "revision": "9a8b55d8bb0977b59282397b78a49252"
  },
  {
    "url": "blog/skepticism/2018/12/02/ark/index.html",
    "revision": "a6303cd825a2e823ae4197791b90b7fa"
  },
  {
    "url": "blog/skepticism/2018/12/02/green/index.html",
    "revision": "9dc20075a897c6fb8c6bf3040005ccf0"
  },
  {
    "url": "blog/skepticism/2018/12/02/index.html",
    "revision": "e9c7d02bf837d5a087fe99e00626f27a"
  },
  {
    "url": "blog/skepticism/2018/12/02/ri/index.html",
    "revision": "25b78fb576eeb62f838d54c97cbcd38f"
  },
  {
    "url": "blog/skepticism/2018/12/16/blasphemy/index.html",
    "revision": "48bc42720061c7c77c0a518ee38c70fa"
  },
  {
    "url": "blog/skepticism/2018/12/16/index.html",
    "revision": "b24bad594feb731c9aefac93ce8c3db2"
  },
  {
    "url": "blog/skepticism/2018/12/16/sleepdrops/index.html",
    "revision": "5d512e2b3d28d48c20f27a2792320da8"
  },
  {
    "url": "blog/skepticism/2018/12/16/tekiri/index.html",
    "revision": "9ffc0df6d55769287809fccc91c88fde"
  },
  {
    "url": "blog/skepticism/2018/12/index.html",
    "revision": "6585ba6dfb0843d18233d3b2bd4fc041"
  },
  {
    "url": "blog/skepticism/2018/index.html",
    "revision": "281f5b7da20deff2c53637b5219dbaa3"
  },
  {
    "url": "blog/skepticism/index.html",
    "revision": "923222438015f5d9668198ed445e9905"
  },
  {
    "url": "blog/tag/index.html",
    "revision": "d5b942e5e75ad4b80bd35cf752149db0"
  },
  {
    "url": "contact/index.html",
    "revision": "55be84b920369f214463a38b64304351"
  },
  {
    "url": "cv/cover/index.html",
    "revision": "c188f92ab316d3d195c474e1f79ee1d0"
  },
  {
    "url": "cv/index.html",
    "revision": "89076e05d2f706926d95cb2ae13123c0"
  },
  {
    "url": "googlee25d0c06da891164.html",
    "revision": "0defe75660212f417b90c5affcd03380"
  },
  {
    "url": "index.html",
    "revision": "9fb677c654849ad4f946db5df25d6437"
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
    "revision": "ad517b5b44e7b6a6df260de7baeab7da"
  },
  {
    "url": "media/me/index.html",
    "revision": "543b081aecea6e015083b9e954df40e8"
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
    "revision": "6f83e0120954cf57499809a20cb1ec04"
  },
  {
    "url": "status/index.html",
    "revision": "b386f62a0a881221a93ae69ac4ea1350"
  },
  {
    "url": "status/steam/index.html",
    "revision": "4c00217ea27be89d1bd85372cdc51bdb"
  },
  {
    "url": "status/twitter/index.html",
    "revision": "6769aa8f7f461345998fc6c49fcbe3be"
  },
  {
    "url": "status/wikipedia/index.html",
    "revision": "7cced671cc023c33d45fc39915646231"
  }
].concat(self.__precacheManifest || []);
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
