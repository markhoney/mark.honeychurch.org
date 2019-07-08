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
    "revision": "5f8531444914a82aa945d434f0b4fe88"
  },
  {
    "url": "assets/css/0.styles.css",
    "revision": "d63e4c4a42745cb8ab5c9ff92f41e1ea"
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
    "revision": "ba2f020afae83d2b8a78f4f55d36e118"
  },
  {
    "url": "assets/js/10.js",
    "revision": "3d73f66578adee38f4e0d417e0e815f3"
  },
  {
    "url": "assets/js/100.js",
    "revision": "967d2917dad88a3595e8c797af06738b"
  },
  {
    "url": "assets/js/101.js",
    "revision": "e2c9239f46091b69361c7b71f4d4f7bb"
  },
  {
    "url": "assets/js/102.js",
    "revision": "bac50c04c18a4fcd4de807ccad722b87"
  },
  {
    "url": "assets/js/103.js",
    "revision": "c3850245c112d2dd98f6272c86c0faf4"
  },
  {
    "url": "assets/js/104.js",
    "revision": "8098b15a82f43ed7fb6e2edaba2af4f3"
  },
  {
    "url": "assets/js/105.js",
    "revision": "59d87cfbbdc8a217ab7da6b6fa35271f"
  },
  {
    "url": "assets/js/106.js",
    "revision": "ab6759ba6e228ad32c4f8176d7b29726"
  },
  {
    "url": "assets/js/107.js",
    "revision": "f6918ca3721ae2d806156c05078ff6a4"
  },
  {
    "url": "assets/js/108.js",
    "revision": "997397c28d1ae48e1f3de4795627928e"
  },
  {
    "url": "assets/js/109.js",
    "revision": "fb37696cc32b57782aafb30444051e51"
  },
  {
    "url": "assets/js/11.js",
    "revision": "3602c97093ed8f02523a6433c9c7dc16"
  },
  {
    "url": "assets/js/110.js",
    "revision": "c2eef73e9a51f36e750790de0265661f"
  },
  {
    "url": "assets/js/111.js",
    "revision": "74dcd87e8b40718dea911d2d5b8f56ab"
  },
  {
    "url": "assets/js/112.js",
    "revision": "9fec3c0ecf66bb19edd5b49750766e02"
  },
  {
    "url": "assets/js/113.js",
    "revision": "030a0e78a363cf3b2121b6ce9dc9cf67"
  },
  {
    "url": "assets/js/114.js",
    "revision": "3fd6c6e81ba59197280cc476ab858cde"
  },
  {
    "url": "assets/js/115.js",
    "revision": "231ed50b8fa00d5b638432f266bdb35a"
  },
  {
    "url": "assets/js/116.js",
    "revision": "c849da4fa342f53ac2225336e0f05239"
  },
  {
    "url": "assets/js/117.js",
    "revision": "de901d1e6883bc99910509bc0d29fd27"
  },
  {
    "url": "assets/js/118.js",
    "revision": "455d928a733c6fcf62822abe0674ac47"
  },
  {
    "url": "assets/js/119.js",
    "revision": "d69016a881c4bda0ceb01e13919a7052"
  },
  {
    "url": "assets/js/12.js",
    "revision": "d2c9df2e8cba1943023b96a0180d50d3"
  },
  {
    "url": "assets/js/120.js",
    "revision": "95c83f5c5aef2858c2e55912162ca3a0"
  },
  {
    "url": "assets/js/121.js",
    "revision": "361abe7be164ab686de67867c15c80ce"
  },
  {
    "url": "assets/js/122.js",
    "revision": "e6e1ef233f186b7711fea34ed3ff9dff"
  },
  {
    "url": "assets/js/123.js",
    "revision": "93cff5ab220ff5ddcc2fbb9c6d966fd2"
  },
  {
    "url": "assets/js/124.js",
    "revision": "dbc5fcef0c15d409ce32b3cb96ca0d96"
  },
  {
    "url": "assets/js/125.js",
    "revision": "31c2b3f6a229ea7f8fdc9307e65a826d"
  },
  {
    "url": "assets/js/126.js",
    "revision": "f98c08d767079425a85ca3ea900cde40"
  },
  {
    "url": "assets/js/127.js",
    "revision": "891ff1ae1a53cfcc965994986f73aa49"
  },
  {
    "url": "assets/js/128.js",
    "revision": "944101916c61744e661138e356e297c6"
  },
  {
    "url": "assets/js/129.js",
    "revision": "ab13035d5d13c33d02d4eec3bdf22053"
  },
  {
    "url": "assets/js/13.js",
    "revision": "8990fd64568fa8604f715bf628dc1298"
  },
  {
    "url": "assets/js/130.js",
    "revision": "dfa7a456f08371577b84eedbf2f20a9d"
  },
  {
    "url": "assets/js/131.js",
    "revision": "b56c85b253ba9956c5372780aa3d61e0"
  },
  {
    "url": "assets/js/132.js",
    "revision": "722bf1ee59c15b367514acb3943e0498"
  },
  {
    "url": "assets/js/133.js",
    "revision": "778bac1e9c7fb8739d145bb23a46d13c"
  },
  {
    "url": "assets/js/134.js",
    "revision": "47519a8c802289b241134a597e39d47a"
  },
  {
    "url": "assets/js/135.js",
    "revision": "95f43f83ff682a66f3a1cd7c920fcc78"
  },
  {
    "url": "assets/js/136.js",
    "revision": "5b553d2d5ebc4de20a7205ff3953e52e"
  },
  {
    "url": "assets/js/137.js",
    "revision": "cefe3bb339535abaef9f3a7a262b4937"
  },
  {
    "url": "assets/js/138.js",
    "revision": "188dc3162ba292f38afdb8d569cdc995"
  },
  {
    "url": "assets/js/139.js",
    "revision": "1d7477d354be8a4099a7e8fb19a56ab0"
  },
  {
    "url": "assets/js/14.js",
    "revision": "48a35c4bd57a3f2d71828d419c3f0954"
  },
  {
    "url": "assets/js/140.js",
    "revision": "07d3f0f928ea477be3804dfb09ff1ee5"
  },
  {
    "url": "assets/js/141.js",
    "revision": "ff87a66c157cbc64624759330a9a1ea5"
  },
  {
    "url": "assets/js/142.js",
    "revision": "276b99abb3615e1c188ba4d28bdf836b"
  },
  {
    "url": "assets/js/143.js",
    "revision": "403ae332862360b4bddbb88086c06be5"
  },
  {
    "url": "assets/js/144.js",
    "revision": "1f55b7f11395bf67de19d31f7028ec77"
  },
  {
    "url": "assets/js/145.js",
    "revision": "edb50ee1c3b440c0d70668f0f52c2a96"
  },
  {
    "url": "assets/js/146.js",
    "revision": "d9698477aa7015f36e5d2f2b47abacf6"
  },
  {
    "url": "assets/js/147.js",
    "revision": "f316f210dcc350bb0359acd36be971c0"
  },
  {
    "url": "assets/js/148.js",
    "revision": "8ca7b1920547f989d13746028bede8d1"
  },
  {
    "url": "assets/js/149.js",
    "revision": "ad41a8ecc76ce6042508059419849938"
  },
  {
    "url": "assets/js/15.js",
    "revision": "2a8ca92b349ed63bef6997d9ce8e0d52"
  },
  {
    "url": "assets/js/150.js",
    "revision": "a1f33648a62dd822b900def90faa74f4"
  },
  {
    "url": "assets/js/151.js",
    "revision": "28ffdc8979f592d3026e498428ea3cc1"
  },
  {
    "url": "assets/js/152.js",
    "revision": "ae0a802e3e27bcf1bd4df40dbd57832f"
  },
  {
    "url": "assets/js/153.js",
    "revision": "57926a1412bc7f35133c988dba2828f1"
  },
  {
    "url": "assets/js/154.js",
    "revision": "f5600079b95823d8d0cf58e3740feb41"
  },
  {
    "url": "assets/js/155.js",
    "revision": "47d408a7b678204dcd5bba15c37ebaaa"
  },
  {
    "url": "assets/js/156.js",
    "revision": "b2c8a495a4000c44f090e1ea1be80fdb"
  },
  {
    "url": "assets/js/157.js",
    "revision": "bf59a636f916411a045afd631cfb4a4d"
  },
  {
    "url": "assets/js/158.js",
    "revision": "c2c1bfca01289ae899533ccadaff9843"
  },
  {
    "url": "assets/js/159.js",
    "revision": "e25c4321f9d58da2cbf3f7b47ba0bdff"
  },
  {
    "url": "assets/js/16.js",
    "revision": "a6bfd867f2d7049d9af0ed606299badc"
  },
  {
    "url": "assets/js/160.js",
    "revision": "9965c5f53f5e2db3b5ebcddc470b0526"
  },
  {
    "url": "assets/js/161.js",
    "revision": "063f2ec037022bae0bf97c3abcc945d5"
  },
  {
    "url": "assets/js/162.js",
    "revision": "9c89bfb19f4bbb5463c56160dccc6a3d"
  },
  {
    "url": "assets/js/163.js",
    "revision": "5606826db577820d7c5ce51fcfd6dc96"
  },
  {
    "url": "assets/js/164.js",
    "revision": "111566af9357321c377f3c82c6a2452b"
  },
  {
    "url": "assets/js/165.js",
    "revision": "9832a477f8653e673e4a5951743ff961"
  },
  {
    "url": "assets/js/166.js",
    "revision": "400e3b216c5da5edb0f6241731fa4ce6"
  },
  {
    "url": "assets/js/167.js",
    "revision": "a839760b889bb755ff05ed9247f653c4"
  },
  {
    "url": "assets/js/168.js",
    "revision": "62e91866c16d3a9a1557ed015b0af25c"
  },
  {
    "url": "assets/js/169.js",
    "revision": "3764b66a97247fbed31a05c58773a5d2"
  },
  {
    "url": "assets/js/17.js",
    "revision": "9caa0b88d781b3fc179c067540f98b2d"
  },
  {
    "url": "assets/js/170.js",
    "revision": "46c0faaa45a68314b07f336e007a050c"
  },
  {
    "url": "assets/js/171.js",
    "revision": "d90a1fa4d5deb865d82d629746ac9a03"
  },
  {
    "url": "assets/js/172.js",
    "revision": "6b9abdb8bce910996079c515de1854af"
  },
  {
    "url": "assets/js/173.js",
    "revision": "ceaf1b562f7ab2aaa8a0e0d60593c9be"
  },
  {
    "url": "assets/js/174.js",
    "revision": "43ef2ce0257b171028f12e0a1302e52d"
  },
  {
    "url": "assets/js/175.js",
    "revision": "2875570b2d97bd6bd330680e84567b9f"
  },
  {
    "url": "assets/js/176.js",
    "revision": "bdefab84cb03533a21f79fc189f64bb6"
  },
  {
    "url": "assets/js/177.js",
    "revision": "880cc6b430a57a7c00c435e5ed0e0033"
  },
  {
    "url": "assets/js/178.js",
    "revision": "32e5a9d6d20620e447db760031828916"
  },
  {
    "url": "assets/js/179.js",
    "revision": "080b9ed9232732eb65f8284e84a1b7a2"
  },
  {
    "url": "assets/js/18.js",
    "revision": "cf7b9618767297812dff0126f7dbc5fe"
  },
  {
    "url": "assets/js/180.js",
    "revision": "0b7f611bc2420dbc5d63f4d5a798ed01"
  },
  {
    "url": "assets/js/181.js",
    "revision": "859e1597b9a38457f8bf9f4f70ce1239"
  },
  {
    "url": "assets/js/182.js",
    "revision": "2378db30d25abd51002c12f1b159303c"
  },
  {
    "url": "assets/js/183.js",
    "revision": "0976de4f05fbecbf8d074bfc7ea92063"
  },
  {
    "url": "assets/js/184.js",
    "revision": "188e6af64e80fff5ee99f1443ee262ea"
  },
  {
    "url": "assets/js/185.js",
    "revision": "171f60750043f2dfd18223828319eb26"
  },
  {
    "url": "assets/js/186.js",
    "revision": "15c76bd2206ed18ced63acb3f238b519"
  },
  {
    "url": "assets/js/187.js",
    "revision": "48aa6877d298df86a0ddbc131e9b676a"
  },
  {
    "url": "assets/js/188.js",
    "revision": "244c55b52f0225a8a1bf24199dd84445"
  },
  {
    "url": "assets/js/189.js",
    "revision": "6c41b77e142868a09a127e442030a109"
  },
  {
    "url": "assets/js/19.js",
    "revision": "1cf492ce3e151b5380318f896a1f9b3e"
  },
  {
    "url": "assets/js/190.js",
    "revision": "ba17ebe6a49190a87676efa096509541"
  },
  {
    "url": "assets/js/191.js",
    "revision": "850f525410e9ff98eef4445d743266a4"
  },
  {
    "url": "assets/js/192.js",
    "revision": "2e51905f41f99eb4686559686a1107bb"
  },
  {
    "url": "assets/js/193.js",
    "revision": "eca13a9eadcf3ad2f3592438f4188316"
  },
  {
    "url": "assets/js/194.js",
    "revision": "de986c505fe7478b27a14cf96a32260c"
  },
  {
    "url": "assets/js/195.js",
    "revision": "7d37c9166e1382b7d130801c916aca00"
  },
  {
    "url": "assets/js/196.js",
    "revision": "8e8bc27e889b9ba6d7bbde5f7a5562cd"
  },
  {
    "url": "assets/js/197.js",
    "revision": "7053e9fc8ee13c73d956ea3140bc0f4c"
  },
  {
    "url": "assets/js/198.js",
    "revision": "909276d1287ab9b7202de7a5bcac8e7d"
  },
  {
    "url": "assets/js/199.js",
    "revision": "488f6c01cdbdedb9839c64abf4ea75e6"
  },
  {
    "url": "assets/js/2.js",
    "revision": "f8a2f5b2b7ed164acc923171183a3daa"
  },
  {
    "url": "assets/js/20.js",
    "revision": "01e39eae9dbe50d9ba3d0e622a59917f"
  },
  {
    "url": "assets/js/200.js",
    "revision": "2d1abea5be7b621fff298fdf05465d6e"
  },
  {
    "url": "assets/js/201.js",
    "revision": "c283770b79337b750da409b8d7b1f8ad"
  },
  {
    "url": "assets/js/202.js",
    "revision": "b3bc2a160e6d1de0b8f446ed2dea3a93"
  },
  {
    "url": "assets/js/203.js",
    "revision": "08009d68b15036b74f706ca2e45e37c0"
  },
  {
    "url": "assets/js/204.js",
    "revision": "565877ca2d103de5ad1ba6de933e19e5"
  },
  {
    "url": "assets/js/205.js",
    "revision": "db61ab515e2255ec05dcab1338e199de"
  },
  {
    "url": "assets/js/206.js",
    "revision": "c6e8c9c4df80006e8b3fc78847bfc898"
  },
  {
    "url": "assets/js/207.js",
    "revision": "35c8f0cb0aa727422f21aca6ba57bbb5"
  },
  {
    "url": "assets/js/208.js",
    "revision": "3235c7f2da1d8471a80e97f1d9fffd1e"
  },
  {
    "url": "assets/js/209.js",
    "revision": "52d510d816376c908aec29f8f298511c"
  },
  {
    "url": "assets/js/21.js",
    "revision": "f7fcbd0a084584d7cdf25d4f04b16ce4"
  },
  {
    "url": "assets/js/210.js",
    "revision": "71577308be2cce615c37cb71753d3b8c"
  },
  {
    "url": "assets/js/211.js",
    "revision": "6e48565b31b4fa772457cb0c84c2caba"
  },
  {
    "url": "assets/js/212.js",
    "revision": "dd945f70cbd4eb35f1af12bff2598af3"
  },
  {
    "url": "assets/js/213.js",
    "revision": "80c8e6d000af1bd34b176eadcbecd8db"
  },
  {
    "url": "assets/js/214.js",
    "revision": "d6e87f96c61472a07357cc82045154b2"
  },
  {
    "url": "assets/js/215.js",
    "revision": "89757342a9ec2df2fcfe52109ed0aa29"
  },
  {
    "url": "assets/js/216.js",
    "revision": "029f4bb91e29581d863c5b98d34b1161"
  },
  {
    "url": "assets/js/217.js",
    "revision": "3729ba65b7ed9c4b73d235e02b572c62"
  },
  {
    "url": "assets/js/218.js",
    "revision": "939a254a32bffbcba6671687f196eac2"
  },
  {
    "url": "assets/js/219.js",
    "revision": "635bcdf6713a2af6b22ebc78e7ac93cd"
  },
  {
    "url": "assets/js/22.js",
    "revision": "48cc7d2771b3591dbce8c7c482b65915"
  },
  {
    "url": "assets/js/220.js",
    "revision": "e4d71444802aa6c136610f727fe4a8ec"
  },
  {
    "url": "assets/js/221.js",
    "revision": "035167f9a806f6eb87cb47cde2737645"
  },
  {
    "url": "assets/js/222.js",
    "revision": "90e91eef803787cf00124409ee4a780c"
  },
  {
    "url": "assets/js/223.js",
    "revision": "333f394f5cf252c013f809f84a3f8d59"
  },
  {
    "url": "assets/js/224.js",
    "revision": "7e9e225efe13e887ef9994d69ff01b4f"
  },
  {
    "url": "assets/js/225.js",
    "revision": "29da4742275fa6ad786a790231b4bf24"
  },
  {
    "url": "assets/js/226.js",
    "revision": "68852fd9ff5506a32e426b4652e40304"
  },
  {
    "url": "assets/js/227.js",
    "revision": "614c3b57ac4bc83198ab2aacaca4aec5"
  },
  {
    "url": "assets/js/228.js",
    "revision": "45ef64f6cc6f018de683851e52153d06"
  },
  {
    "url": "assets/js/229.js",
    "revision": "67eca35e4c3324a7096c1b7b067a94e8"
  },
  {
    "url": "assets/js/23.js",
    "revision": "6643f4e46167365967766c37c157aad6"
  },
  {
    "url": "assets/js/230.js",
    "revision": "a2b0e0530e8ad63462e5cb8824939b44"
  },
  {
    "url": "assets/js/231.js",
    "revision": "e24bc7b4dc6cc01e206c338620319c96"
  },
  {
    "url": "assets/js/232.js",
    "revision": "a7944805cd55eab58d120ee05266f4dd"
  },
  {
    "url": "assets/js/233.js",
    "revision": "6aff4f2cd43920be67be8832087464d2"
  },
  {
    "url": "assets/js/234.js",
    "revision": "114e1066f7db3438e104b541f8b9c686"
  },
  {
    "url": "assets/js/235.js",
    "revision": "5cf495fb007593c3c560166f66920939"
  },
  {
    "url": "assets/js/236.js",
    "revision": "ab568348c5dc7a05034d7483acfa5240"
  },
  {
    "url": "assets/js/237.js",
    "revision": "2730ed28986533ee82bcebb6d2ca352f"
  },
  {
    "url": "assets/js/238.js",
    "revision": "6a8c46edd2466e4c43480407c985a85d"
  },
  {
    "url": "assets/js/239.js",
    "revision": "a1fb02a5c56f3beb054f62980e238c82"
  },
  {
    "url": "assets/js/24.js",
    "revision": "5824b41ddfb278d3dc19f67df7ee9088"
  },
  {
    "url": "assets/js/240.js",
    "revision": "f76f362a1e4fb839e1bc9144d1ccda28"
  },
  {
    "url": "assets/js/241.js",
    "revision": "91e0f45d9ac45da4462ff7d5811373b5"
  },
  {
    "url": "assets/js/242.js",
    "revision": "7db7a35097a20d107fc09ad0419be8a3"
  },
  {
    "url": "assets/js/243.js",
    "revision": "25ff9f6327d0fe7964b4bc63115becc6"
  },
  {
    "url": "assets/js/244.js",
    "revision": "d76efd4ab785850656121743124f132e"
  },
  {
    "url": "assets/js/245.js",
    "revision": "2d56800bf35ea95b6927853ea254efcc"
  },
  {
    "url": "assets/js/246.js",
    "revision": "ed379c6649edfc2dae823d950ee08986"
  },
  {
    "url": "assets/js/247.js",
    "revision": "5cddcd4d393fb64f93ca6e93800d2e36"
  },
  {
    "url": "assets/js/248.js",
    "revision": "9f9ee11ae828788e4663fcca32a79911"
  },
  {
    "url": "assets/js/249.js",
    "revision": "dc107d12b2c8e25fcec7d08be20e8a5e"
  },
  {
    "url": "assets/js/25.js",
    "revision": "8a039be27cbe645a2f0588787633854c"
  },
  {
    "url": "assets/js/250.js",
    "revision": "387795e1062fa767c096d2df2a0fab4f"
  },
  {
    "url": "assets/js/251.js",
    "revision": "39cc1e88d9a983101a30bee4da39adf6"
  },
  {
    "url": "assets/js/252.js",
    "revision": "093871028a84192404bd376ef68606eb"
  },
  {
    "url": "assets/js/253.js",
    "revision": "c45207e9690fde3538d55f7025006e88"
  },
  {
    "url": "assets/js/254.js",
    "revision": "665e9e1e72019941dc62429f971d8352"
  },
  {
    "url": "assets/js/255.js",
    "revision": "38aaa30d3f2dd52b99b7e378c646bb75"
  },
  {
    "url": "assets/js/256.js",
    "revision": "ac5bd5cb45db0342da50f8577be25254"
  },
  {
    "url": "assets/js/257.js",
    "revision": "46cb794d095ae1f2f1b39b786be727f2"
  },
  {
    "url": "assets/js/258.js",
    "revision": "d7f17fb5833652c1f815fd1e70bc9ab5"
  },
  {
    "url": "assets/js/259.js",
    "revision": "a1167cab743655bcc9ae43fecd05cbdb"
  },
  {
    "url": "assets/js/26.js",
    "revision": "f083160ff7dcde39e49f4f4e9c15ab4f"
  },
  {
    "url": "assets/js/260.js",
    "revision": "2aa0e03df749dbe551c572380ebba783"
  },
  {
    "url": "assets/js/261.js",
    "revision": "8f4e8d6516b02d344b690e331202f825"
  },
  {
    "url": "assets/js/262.js",
    "revision": "7516a1bdf9804d73a0a6279b3040c096"
  },
  {
    "url": "assets/js/263.js",
    "revision": "17bf3af6b5eea7524107287d0023c720"
  },
  {
    "url": "assets/js/264.js",
    "revision": "eb77e88790f95833d95f25c72498dbe5"
  },
  {
    "url": "assets/js/265.js",
    "revision": "2a0cd4a250fa73917b4e289ef9f6dd34"
  },
  {
    "url": "assets/js/266.js",
    "revision": "4d67b2bc0dd156b39aced5d1a1d23974"
  },
  {
    "url": "assets/js/267.js",
    "revision": "c0008dbabfbd0cdb6684218b511df69a"
  },
  {
    "url": "assets/js/268.js",
    "revision": "286a450212c822c6ce9b4fced40e7d6f"
  },
  {
    "url": "assets/js/269.js",
    "revision": "4de94b7c4a2a74f64f8671207e00958b"
  },
  {
    "url": "assets/js/27.js",
    "revision": "36e3e773dbf3c172d3727344e2af8042"
  },
  {
    "url": "assets/js/270.js",
    "revision": "e2d9480cbe3fcaadfc626edab3d1fc8b"
  },
  {
    "url": "assets/js/271.js",
    "revision": "290a89439b9d54aee3b0e748786508a2"
  },
  {
    "url": "assets/js/272.js",
    "revision": "112a6e201b968bd401f6feae03cf4bd1"
  },
  {
    "url": "assets/js/273.js",
    "revision": "a8bc9494b1abafeb93d42f0a1a490029"
  },
  {
    "url": "assets/js/274.js",
    "revision": "9962934ef267e10ac14953dc05918081"
  },
  {
    "url": "assets/js/275.js",
    "revision": "584a447a329c83ff88c24dfec14e1244"
  },
  {
    "url": "assets/js/276.js",
    "revision": "c55eccfa17135390c86931ccfbe103ba"
  },
  {
    "url": "assets/js/277.js",
    "revision": "acdf0f7a5221e848cb9675f08d28bb1d"
  },
  {
    "url": "assets/js/278.js",
    "revision": "6d9c223d900f41cd45d4abc34f4b4d83"
  },
  {
    "url": "assets/js/279.js",
    "revision": "a7ddd05d3ff295183fd3483053ad9ea7"
  },
  {
    "url": "assets/js/28.js",
    "revision": "53116f7607c4ce7237f70816c9a4cb84"
  },
  {
    "url": "assets/js/280.js",
    "revision": "0a54615abd2471fad40eb21371eb0aa9"
  },
  {
    "url": "assets/js/281.js",
    "revision": "1164fdda6d5c60307aeda732a0c9073d"
  },
  {
    "url": "assets/js/282.js",
    "revision": "318a0f2e6de1f3903d3786a333c8b20a"
  },
  {
    "url": "assets/js/283.js",
    "revision": "9832421bf1b2cfd1628ca3e8f1f33cd2"
  },
  {
    "url": "assets/js/284.js",
    "revision": "af2224ce71465a6893f359f4c2423640"
  },
  {
    "url": "assets/js/285.js",
    "revision": "4ce0cf458bb265a829a6ba002e4c043b"
  },
  {
    "url": "assets/js/286.js",
    "revision": "44f4912e9635957031068a5a3c8f9801"
  },
  {
    "url": "assets/js/287.js",
    "revision": "8bebfab12559e0c4638b161c739dbf35"
  },
  {
    "url": "assets/js/288.js",
    "revision": "6d0566de516d711125efc687ff341696"
  },
  {
    "url": "assets/js/289.js",
    "revision": "e820198d59dec0a0dc0003ea877cfd1f"
  },
  {
    "url": "assets/js/29.js",
    "revision": "d67827245f9826cf7b83c808733b27d1"
  },
  {
    "url": "assets/js/290.js",
    "revision": "9f080c4dacbc92fb39cfcd48afb610e9"
  },
  {
    "url": "assets/js/291.js",
    "revision": "ddba32375fbbafbccb198d5a3c7c24ac"
  },
  {
    "url": "assets/js/292.js",
    "revision": "d33c1c529c526c98e4c52ad592d015a3"
  },
  {
    "url": "assets/js/293.js",
    "revision": "a4c96a33267f68a5924cf727aee7238f"
  },
  {
    "url": "assets/js/294.js",
    "revision": "ca4933090f5f41779e871a55305c74d8"
  },
  {
    "url": "assets/js/295.js",
    "revision": "9e6cdac8d1170d44fb115980ac089a63"
  },
  {
    "url": "assets/js/296.js",
    "revision": "96f8ea5a7bd268f622c5f08461797025"
  },
  {
    "url": "assets/js/297.js",
    "revision": "4218f4f57ddc8fb20591c4284e427e54"
  },
  {
    "url": "assets/js/298.js",
    "revision": "8f3e5274d95971cefe04e02ac6e57a53"
  },
  {
    "url": "assets/js/299.js",
    "revision": "ca7ca839da8e05d83ecc438a19062719"
  },
  {
    "url": "assets/js/30.js",
    "revision": "b8db54dde81dba52b6a8ba49687c067c"
  },
  {
    "url": "assets/js/300.js",
    "revision": "a56b06e3b1a9e1ffd226abf90a00e49a"
  },
  {
    "url": "assets/js/301.js",
    "revision": "9c04eae657fa008367aac82b504ceadd"
  },
  {
    "url": "assets/js/302.js",
    "revision": "106b5fc2b76cc929aad5774332f12f5d"
  },
  {
    "url": "assets/js/303.js",
    "revision": "e5525a439bf77cadd9253d255b60959e"
  },
  {
    "url": "assets/js/304.js",
    "revision": "e57496be9a6674fae1233df5ca0b9e17"
  },
  {
    "url": "assets/js/305.js",
    "revision": "397e26ce515e5e46e5d7f11addd480f4"
  },
  {
    "url": "assets/js/306.js",
    "revision": "8004ebdd3f0b60d11ce88219eed5657f"
  },
  {
    "url": "assets/js/307.js",
    "revision": "20aa69b90f50cea8cf62285948f4696a"
  },
  {
    "url": "assets/js/308.js",
    "revision": "2148b66dd45a36751e06f422d741195a"
  },
  {
    "url": "assets/js/309.js",
    "revision": "2d22392758bf60f22781f5e7ea187fcf"
  },
  {
    "url": "assets/js/31.js",
    "revision": "47a1ad6b67f0a524036c8969b053e281"
  },
  {
    "url": "assets/js/310.js",
    "revision": "8906c4387dedc4c919d7cd8f29a150b6"
  },
  {
    "url": "assets/js/311.js",
    "revision": "067c8604a6dec44ca723950666c24963"
  },
  {
    "url": "assets/js/312.js",
    "revision": "dd04e6337afa02979d7ec59e94f18ca8"
  },
  {
    "url": "assets/js/313.js",
    "revision": "f2bc80b35788f23083de6bd10395471b"
  },
  {
    "url": "assets/js/314.js",
    "revision": "9d5181d803598b9c3009046d8a1d0564"
  },
  {
    "url": "assets/js/315.js",
    "revision": "49c29c2dc0f8d90c6b5cc3e57424d00a"
  },
  {
    "url": "assets/js/316.js",
    "revision": "17d1e334d445e1d311ad21b049b7b484"
  },
  {
    "url": "assets/js/317.js",
    "revision": "a6708261a8914f81e6309a308a99e6dd"
  },
  {
    "url": "assets/js/318.js",
    "revision": "475da3098512f4c8a6b514c68ac0fdfd"
  },
  {
    "url": "assets/js/319.js",
    "revision": "2d0305b45386200b8bc37f901ac83cc5"
  },
  {
    "url": "assets/js/32.js",
    "revision": "c13b56440649da64f4c95d3591f57cae"
  },
  {
    "url": "assets/js/320.js",
    "revision": "67912935cccf64c3dff048141e540139"
  },
  {
    "url": "assets/js/321.js",
    "revision": "e46761514f128e1fb1a95e2f6e34b6c1"
  },
  {
    "url": "assets/js/322.js",
    "revision": "a8ede186d3c2046d91446fd5ac97384a"
  },
  {
    "url": "assets/js/323.js",
    "revision": "b44ff05ed1e514128c287d988826dda5"
  },
  {
    "url": "assets/js/324.js",
    "revision": "7129e46a7acbfda51cb96ebdb01ded4c"
  },
  {
    "url": "assets/js/325.js",
    "revision": "ef4ec9ee9aa9509482f2f4d075593b62"
  },
  {
    "url": "assets/js/326.js",
    "revision": "4650935c4f53c902e294b8a8b089ddf1"
  },
  {
    "url": "assets/js/327.js",
    "revision": "22da1dbf61f6242a630ca27cdc66a8f0"
  },
  {
    "url": "assets/js/328.js",
    "revision": "2b8c5653eeb110a4a9dd0857d75f7143"
  },
  {
    "url": "assets/js/329.js",
    "revision": "6ae4d0bd82cc0b276183c0494a8b0db4"
  },
  {
    "url": "assets/js/33.js",
    "revision": "fdbfbadde0747b4205a6bef061cb46a5"
  },
  {
    "url": "assets/js/330.js",
    "revision": "8ee49eaf22904ce535a4329cdbebf5c2"
  },
  {
    "url": "assets/js/331.js",
    "revision": "c108dbb319ea4f0a741446032f659592"
  },
  {
    "url": "assets/js/332.js",
    "revision": "9cbcd9d3f6a389d1135fb832fb909f7a"
  },
  {
    "url": "assets/js/333.js",
    "revision": "5ee756ebb7a660df4b42d70879f4d115"
  },
  {
    "url": "assets/js/334.js",
    "revision": "3dc8ffe467cbee742cea9f9f215282f5"
  },
  {
    "url": "assets/js/335.js",
    "revision": "a2aa78c705530b8b7f36ad4456fa8958"
  },
  {
    "url": "assets/js/336.js",
    "revision": "3d009b1a6b5c91e5be990d69275d3332"
  },
  {
    "url": "assets/js/337.js",
    "revision": "e31fc443e988cde33301a96e886f4a21"
  },
  {
    "url": "assets/js/338.js",
    "revision": "cc038040e0aab338a4c59e9f35ea10d6"
  },
  {
    "url": "assets/js/339.js",
    "revision": "d321ee7eb959740a92e07dfde15d6c6f"
  },
  {
    "url": "assets/js/34.js",
    "revision": "91e0c4a77da3d475ebf000b0dd592024"
  },
  {
    "url": "assets/js/340.js",
    "revision": "7a7f8090a2e24b02025b32a2049d644a"
  },
  {
    "url": "assets/js/341.js",
    "revision": "ed86ae89d30e68aff9614b7fa7b080ab"
  },
  {
    "url": "assets/js/342.js",
    "revision": "b79e13a2109ca109c1a1d343a8d2d6df"
  },
  {
    "url": "assets/js/343.js",
    "revision": "8064d7c8dc932fd433d2fdeb7c9eb58c"
  },
  {
    "url": "assets/js/344.js",
    "revision": "38dfd4de596fac790c3aa59bb91f23f2"
  },
  {
    "url": "assets/js/345.js",
    "revision": "464d3d8030c007f498909c3656baa01f"
  },
  {
    "url": "assets/js/346.js",
    "revision": "aac16c92e9d73db4a6b7198a126c1ef6"
  },
  {
    "url": "assets/js/347.js",
    "revision": "8cbf1a8c074942226e50c533d873ad77"
  },
  {
    "url": "assets/js/348.js",
    "revision": "5c0712320db58629c4b5b2abf5a6080d"
  },
  {
    "url": "assets/js/349.js",
    "revision": "b4faf6ba46d5cdce8c1cd926f5d4974d"
  },
  {
    "url": "assets/js/35.js",
    "revision": "01e93a38c97081029b2fce55ea84f20e"
  },
  {
    "url": "assets/js/350.js",
    "revision": "6ab1e57aaf14092765e76448a3c0f9d6"
  },
  {
    "url": "assets/js/351.js",
    "revision": "07638493949c2f3f4db28100105e0ef1"
  },
  {
    "url": "assets/js/352.js",
    "revision": "afaa1431d3e9d1a5870e9a2cb89921fb"
  },
  {
    "url": "assets/js/353.js",
    "revision": "1e8103c1a6ba02309d9453bcb0c2275a"
  },
  {
    "url": "assets/js/354.js",
    "revision": "65d021205736b27f0ff4350956a26b84"
  },
  {
    "url": "assets/js/355.js",
    "revision": "b7682ec4d5761c9300d0d5d8c452b29a"
  },
  {
    "url": "assets/js/356.js",
    "revision": "43610a76dd4741bdc974614eb92592e2"
  },
  {
    "url": "assets/js/357.js",
    "revision": "a40aef458ef0cc6e479432e55adbf48a"
  },
  {
    "url": "assets/js/358.js",
    "revision": "f34408bf85fb3aa0353e3b291f096ec9"
  },
  {
    "url": "assets/js/359.js",
    "revision": "2f0a8adc4d193038fcd5223d4e2dcf88"
  },
  {
    "url": "assets/js/36.js",
    "revision": "c249f0a718d50f09e8501e202c2f2d09"
  },
  {
    "url": "assets/js/360.js",
    "revision": "858ef7e536d5d0d61aa00d94da3f69a1"
  },
  {
    "url": "assets/js/361.js",
    "revision": "d52925f528832d9feef8b373bed50ccf"
  },
  {
    "url": "assets/js/362.js",
    "revision": "64583c1ed467a38a2229c69b03ef84d5"
  },
  {
    "url": "assets/js/363.js",
    "revision": "0886580dbe338eaa0676d3ebed86aa67"
  },
  {
    "url": "assets/js/364.js",
    "revision": "2231c6b2c339b69c7558f018730afa5c"
  },
  {
    "url": "assets/js/365.js",
    "revision": "1fbeae66309257a006dc8830ca3954c0"
  },
  {
    "url": "assets/js/366.js",
    "revision": "b0e045c4de88e28900609eb57e5474ce"
  },
  {
    "url": "assets/js/367.js",
    "revision": "8ad3544bb2ab54a1a8e43c479e3bc580"
  },
  {
    "url": "assets/js/368.js",
    "revision": "340d3cd1642332363af5ccea0b1b3cf8"
  },
  {
    "url": "assets/js/369.js",
    "revision": "e625ea2c99c84722697d71581328b841"
  },
  {
    "url": "assets/js/37.js",
    "revision": "7be075508f36217df91d6872302f0427"
  },
  {
    "url": "assets/js/370.js",
    "revision": "04b89227221a05a2e8547256f4eb3b77"
  },
  {
    "url": "assets/js/371.js",
    "revision": "6d188766576ad544d91768db4c9259c7"
  },
  {
    "url": "assets/js/372.js",
    "revision": "51ab15610360a1a87437eef220560cc8"
  },
  {
    "url": "assets/js/373.js",
    "revision": "a813f18bf98f54f7ea5e10a3b09135db"
  },
  {
    "url": "assets/js/374.js",
    "revision": "d8887f81f36a9dfaae35687d722b2739"
  },
  {
    "url": "assets/js/375.js",
    "revision": "60098d5fa199214993fde647dce8324c"
  },
  {
    "url": "assets/js/376.js",
    "revision": "e046bda27732a84f8e183029e12fc552"
  },
  {
    "url": "assets/js/377.js",
    "revision": "b4edf7ddcecba00250b7e521a00ceb1e"
  },
  {
    "url": "assets/js/378.js",
    "revision": "4c5bf5046e57dbe4fb87839714d2a4a8"
  },
  {
    "url": "assets/js/379.js",
    "revision": "b5163d8c11bad0c0855e483b0acbf847"
  },
  {
    "url": "assets/js/38.js",
    "revision": "7b2af3a4f424a998fb74bbcd003414d2"
  },
  {
    "url": "assets/js/380.js",
    "revision": "e88ca27e777ca52c88ff2b06ccf427a5"
  },
  {
    "url": "assets/js/381.js",
    "revision": "0eba70116a0d1e3001d294cdef9edb4b"
  },
  {
    "url": "assets/js/382.js",
    "revision": "c83220d01e83765d0496d0ec39972eb7"
  },
  {
    "url": "assets/js/383.js",
    "revision": "fbd85d67eae681c726ece09ffe515705"
  },
  {
    "url": "assets/js/384.js",
    "revision": "b224e141ff6a76bd98810a0da368d7b1"
  },
  {
    "url": "assets/js/385.js",
    "revision": "d71a3da71849975dea10cc5187e3cc9b"
  },
  {
    "url": "assets/js/386.js",
    "revision": "875c32b1c815b47396aa1f7949aff3fa"
  },
  {
    "url": "assets/js/387.js",
    "revision": "fac94dda21f722d7a5a7c46a081190c8"
  },
  {
    "url": "assets/js/388.js",
    "revision": "f139c28b7fc69923978b6dff9a59f920"
  },
  {
    "url": "assets/js/389.js",
    "revision": "e29bb360c33a90126b7ae3d075196a42"
  },
  {
    "url": "assets/js/39.js",
    "revision": "d633a2d5d4c4b63922699d11ba813e17"
  },
  {
    "url": "assets/js/390.js",
    "revision": "677009c2af0b7e52eff8070a5d2f7485"
  },
  {
    "url": "assets/js/391.js",
    "revision": "6714e8fe25e03ef0d81ef11fbfd76529"
  },
  {
    "url": "assets/js/392.js",
    "revision": "96e18b648776d046b601174024c362c5"
  },
  {
    "url": "assets/js/393.js",
    "revision": "69175db7fe89ff91cb4a1694f89527a3"
  },
  {
    "url": "assets/js/394.js",
    "revision": "65580b9b1e9a737e96ff300f8a97f3ac"
  },
  {
    "url": "assets/js/395.js",
    "revision": "d1e96224beb601c76e191a344e32f98e"
  },
  {
    "url": "assets/js/396.js",
    "revision": "9d2f3d3a8729877c527d8e51309a7aea"
  },
  {
    "url": "assets/js/397.js",
    "revision": "1b20b3dc505e4e11324d757fb51f3a50"
  },
  {
    "url": "assets/js/398.js",
    "revision": "2e346bc7f701a65487c8420cbc86a71d"
  },
  {
    "url": "assets/js/399.js",
    "revision": "7269ea9cd9dc7c9704d36dcd57b11f68"
  },
  {
    "url": "assets/js/4.js",
    "revision": "6709e6eaf8ccd53c0e62c872d934d40c"
  },
  {
    "url": "assets/js/40.js",
    "revision": "908ff134a73630080e41a83e096beaae"
  },
  {
    "url": "assets/js/400.js",
    "revision": "5c1935d105a29e210fa0fd5f24e71fc6"
  },
  {
    "url": "assets/js/401.js",
    "revision": "24646979cd3ef962b5a8d2b3dfffc67f"
  },
  {
    "url": "assets/js/402.js",
    "revision": "548e0f6f1970009a2c953dd7fd770a1e"
  },
  {
    "url": "assets/js/403.js",
    "revision": "3dc93320c4346fee942934180d8dfa6f"
  },
  {
    "url": "assets/js/404.js",
    "revision": "1f1ccc6ac2b2e85d452c7a5a30ad054a"
  },
  {
    "url": "assets/js/405.js",
    "revision": "6348b2b2240a732f6d2b88c3de5f4e46"
  },
  {
    "url": "assets/js/406.js",
    "revision": "71b4c86703299e73b4c73438274bc3ae"
  },
  {
    "url": "assets/js/407.js",
    "revision": "a6553760b2d70f62b7b07de0ec251d25"
  },
  {
    "url": "assets/js/408.js",
    "revision": "dfe24888e0b71daddf924071253d0b4c"
  },
  {
    "url": "assets/js/409.js",
    "revision": "197ca78867d33fe6c0e17e6ae618d441"
  },
  {
    "url": "assets/js/41.js",
    "revision": "47f9b28905f398c3c9efb07c6c93edbf"
  },
  {
    "url": "assets/js/410.js",
    "revision": "c1c3820f1f9899515f945e59f88b1734"
  },
  {
    "url": "assets/js/411.js",
    "revision": "e484578a87bb3deafc63db1b661e387f"
  },
  {
    "url": "assets/js/412.js",
    "revision": "733fe284930e5b4b7d89586bd73c2af1"
  },
  {
    "url": "assets/js/413.js",
    "revision": "5f5b31d3150a30f6e0197d40f193f6ae"
  },
  {
    "url": "assets/js/414.js",
    "revision": "448ae37329af0542d36fd8c1b8e66580"
  },
  {
    "url": "assets/js/415.js",
    "revision": "0b401cee006962100d185e7f235219cb"
  },
  {
    "url": "assets/js/416.js",
    "revision": "135a2f0900b578be414246d06acabe7a"
  },
  {
    "url": "assets/js/417.js",
    "revision": "521d98b1d4182d5bf4cc190a491217fa"
  },
  {
    "url": "assets/js/418.js",
    "revision": "50f58935d573b8b7594d569eb8bed6c5"
  },
  {
    "url": "assets/js/419.js",
    "revision": "525209e9547b3354a3b3d9766d9eadd8"
  },
  {
    "url": "assets/js/42.js",
    "revision": "16139650403261f2014236eaf662e70a"
  },
  {
    "url": "assets/js/420.js",
    "revision": "72815a1a94b2ede3763d2a3302fc0383"
  },
  {
    "url": "assets/js/421.js",
    "revision": "e1797e50c1a243740ad892bff6a7fd6e"
  },
  {
    "url": "assets/js/422.js",
    "revision": "084027bb64f1b8df2bac560adb4fdf76"
  },
  {
    "url": "assets/js/423.js",
    "revision": "b85340904473465e589e4d7bc6cc4c61"
  },
  {
    "url": "assets/js/424.js",
    "revision": "a234a91ba37998d3a350c8b80d55d42a"
  },
  {
    "url": "assets/js/425.js",
    "revision": "d7f91010c696b041b691057d28443dc2"
  },
  {
    "url": "assets/js/426.js",
    "revision": "eb70354386b06660f8bfc96c93c14fe0"
  },
  {
    "url": "assets/js/427.js",
    "revision": "73bb7094a83e2cb560c2d45e750b793f"
  },
  {
    "url": "assets/js/428.js",
    "revision": "f6a630d1c023540616ae233d88a11bdc"
  },
  {
    "url": "assets/js/429.js",
    "revision": "239b62eb1e89330323126d3c790eff12"
  },
  {
    "url": "assets/js/43.js",
    "revision": "15d08f31b61924533fc4be2804821704"
  },
  {
    "url": "assets/js/430.js",
    "revision": "56f552cde22dfd2d41158feba872525f"
  },
  {
    "url": "assets/js/431.js",
    "revision": "6de20577e3d9c436ab32d7cd89d356d2"
  },
  {
    "url": "assets/js/432.js",
    "revision": "7d747864fe83e0fe3bea16fc094f2e59"
  },
  {
    "url": "assets/js/433.js",
    "revision": "db9018c1b660f02f782adfa45e204eb5"
  },
  {
    "url": "assets/js/434.js",
    "revision": "78c37b82f597148f3dc78f58bf49f4b9"
  },
  {
    "url": "assets/js/435.js",
    "revision": "53d81314bf6925d9be0b32689c06491b"
  },
  {
    "url": "assets/js/436.js",
    "revision": "3f5249ce8466df5fdaf68fe34a86a3a6"
  },
  {
    "url": "assets/js/437.js",
    "revision": "60b802e9c4bedce3979c1f80e264c22d"
  },
  {
    "url": "assets/js/438.js",
    "revision": "9d7d052cf70a5ea19aeba5bcdffb1da8"
  },
  {
    "url": "assets/js/439.js",
    "revision": "3071bbee893b1d9f8d689fafa4f62dfe"
  },
  {
    "url": "assets/js/44.js",
    "revision": "2f90f36aebc13141e107c1a27e991ed0"
  },
  {
    "url": "assets/js/440.js",
    "revision": "47e1a800cc95253a73aa4058ddd26794"
  },
  {
    "url": "assets/js/441.js",
    "revision": "8573e31195afae7184735391baecb816"
  },
  {
    "url": "assets/js/442.js",
    "revision": "f900fb17bf6dac28d35abacbc3f98f59"
  },
  {
    "url": "assets/js/443.js",
    "revision": "577062911329d8215e6c28603a2df3a1"
  },
  {
    "url": "assets/js/444.js",
    "revision": "07001cc1e6b45edc396f4d1ec6076447"
  },
  {
    "url": "assets/js/445.js",
    "revision": "b9adec49bfa41db341e0e76d0cff161d"
  },
  {
    "url": "assets/js/446.js",
    "revision": "c1617803672214b41206497e99fbb7e5"
  },
  {
    "url": "assets/js/447.js",
    "revision": "96df70ac118c19bc755335935ce768d6"
  },
  {
    "url": "assets/js/448.js",
    "revision": "f9aad6b5ed3f9f37021756878b0f6835"
  },
  {
    "url": "assets/js/449.js",
    "revision": "2ce3babb7d305f31fcb297a3342aaef4"
  },
  {
    "url": "assets/js/45.js",
    "revision": "3c93730eba780af8590d56b5c0a212cd"
  },
  {
    "url": "assets/js/450.js",
    "revision": "65e5b137ee4cdf6d710af0da20548199"
  },
  {
    "url": "assets/js/451.js",
    "revision": "b5617a8958e1245e92bb48e662f14756"
  },
  {
    "url": "assets/js/452.js",
    "revision": "b376e971552da28ed8858c7bd20f5583"
  },
  {
    "url": "assets/js/453.js",
    "revision": "e55bdadf0bf742af341294657c326789"
  },
  {
    "url": "assets/js/454.js",
    "revision": "353ea5a81b63176ed4c3d14b8d40a83d"
  },
  {
    "url": "assets/js/455.js",
    "revision": "e709c71214d5935998ace7f2ba5039ee"
  },
  {
    "url": "assets/js/456.js",
    "revision": "dbcb17d17be8cf57fa0f42f535861aad"
  },
  {
    "url": "assets/js/457.js",
    "revision": "f0dac6e7960d07c0a7ac9d256e5200f6"
  },
  {
    "url": "assets/js/458.js",
    "revision": "5a89d32f61982d7317a0a6554c28f251"
  },
  {
    "url": "assets/js/459.js",
    "revision": "917b3d4f305118d9a72d23d310386ea7"
  },
  {
    "url": "assets/js/46.js",
    "revision": "0d2f1bc79e15e7ae85d8233ff3a547db"
  },
  {
    "url": "assets/js/460.js",
    "revision": "992e8f064a36e2b3fc7df2b3bb1c6324"
  },
  {
    "url": "assets/js/461.js",
    "revision": "d8a51a7bae68ed661868d872464b3031"
  },
  {
    "url": "assets/js/462.js",
    "revision": "7241bfa6fed0cf33de4a9eb60bcec202"
  },
  {
    "url": "assets/js/463.js",
    "revision": "59c5a392de410b9f76c822b096b9463e"
  },
  {
    "url": "assets/js/464.js",
    "revision": "ebecc0da5bcd71e5ced9e329032040db"
  },
  {
    "url": "assets/js/465.js",
    "revision": "b087187390e73f908537e5c90ac8f4b1"
  },
  {
    "url": "assets/js/466.js",
    "revision": "9c39a52d59075f66120d78aad10e4ad1"
  },
  {
    "url": "assets/js/467.js",
    "revision": "0657aa280700fe14237536ba89706f2a"
  },
  {
    "url": "assets/js/468.js",
    "revision": "0339b19fe592038f78c4b146cb8fc7dc"
  },
  {
    "url": "assets/js/469.js",
    "revision": "278755055b62a78fb8ca87bc9cfc9738"
  },
  {
    "url": "assets/js/47.js",
    "revision": "01abb926ee6ae94ab28f823b8c28ab70"
  },
  {
    "url": "assets/js/470.js",
    "revision": "e2aa4918b58e993b6c3d4a9278f78b12"
  },
  {
    "url": "assets/js/471.js",
    "revision": "6851b77a1f8ed867116ad92a63611201"
  },
  {
    "url": "assets/js/472.js",
    "revision": "fce5cc1f5f96cfb00f7226f33d6472f2"
  },
  {
    "url": "assets/js/473.js",
    "revision": "471c288fb41b86263f8762eeb770ba50"
  },
  {
    "url": "assets/js/474.js",
    "revision": "de2534c5fa659ee62582642d5bce91bb"
  },
  {
    "url": "assets/js/475.js",
    "revision": "963ec86c8ff2f6dc608c86168e236873"
  },
  {
    "url": "assets/js/476.js",
    "revision": "d971f56b1dc5ee64cc8c828191f6a6c7"
  },
  {
    "url": "assets/js/477.js",
    "revision": "f45fa42143d593386bc94900f1dac57f"
  },
  {
    "url": "assets/js/478.js",
    "revision": "08c77333ec017fec961b4ae22b3cccf2"
  },
  {
    "url": "assets/js/479.js",
    "revision": "f8132fde90cd64cdfd203c64eac5edbf"
  },
  {
    "url": "assets/js/48.js",
    "revision": "c2960611a040a1755766ab5770dd9d54"
  },
  {
    "url": "assets/js/480.js",
    "revision": "ecaf5031fd3874d4de758c110c0f5f1b"
  },
  {
    "url": "assets/js/481.js",
    "revision": "e3f8200d7c7147640f8a5244289cdac9"
  },
  {
    "url": "assets/js/482.js",
    "revision": "0c247b4a57bb26ebd142af37b750cd0b"
  },
  {
    "url": "assets/js/483.js",
    "revision": "fcc069ed8437d86bdbb486c8eabaf6be"
  },
  {
    "url": "assets/js/484.js",
    "revision": "b52cd430badc0d4b3e6ba54467f0aac0"
  },
  {
    "url": "assets/js/485.js",
    "revision": "05b2f2bf9feafc2537e514daab4566f0"
  },
  {
    "url": "assets/js/486.js",
    "revision": "2068b11bb9bf4832651d8d29910e263e"
  },
  {
    "url": "assets/js/487.js",
    "revision": "c7e059ff755a6337d4131dcd334542f3"
  },
  {
    "url": "assets/js/488.js",
    "revision": "61f098b43d24fc7f0f5ae0874802eaa0"
  },
  {
    "url": "assets/js/489.js",
    "revision": "51f9530cb5fec06ff9ba8b129f2af93b"
  },
  {
    "url": "assets/js/49.js",
    "revision": "ab9cbd0ea749d0a60e83a3e9d1eb7964"
  },
  {
    "url": "assets/js/490.js",
    "revision": "3fbb049bcb48f4bd244d17abd5d2bb54"
  },
  {
    "url": "assets/js/491.js",
    "revision": "5208a525fb7745eebea00f74a22a12e7"
  },
  {
    "url": "assets/js/492.js",
    "revision": "b37001bc9e0cabd3b38269e429f1c11d"
  },
  {
    "url": "assets/js/493.js",
    "revision": "d4560ab2c9c51e7d6cc2a8e0fe7b816f"
  },
  {
    "url": "assets/js/494.js",
    "revision": "1c0fbd66c3f8fa5173416b03831473a2"
  },
  {
    "url": "assets/js/495.js",
    "revision": "6d099f25cf35163bdefad25176201a30"
  },
  {
    "url": "assets/js/496.js",
    "revision": "02d0278339b8ca15ed2d7c4fa6ba4f14"
  },
  {
    "url": "assets/js/497.js",
    "revision": "34c36589c39c3fe26b59beebc957030a"
  },
  {
    "url": "assets/js/498.js",
    "revision": "31b732b6db5bac974f30506168047a84"
  },
  {
    "url": "assets/js/499.js",
    "revision": "7093eec4b74fa3013c6fe93c030def3f"
  },
  {
    "url": "assets/js/5.js",
    "revision": "a5079186c8e65fb70ac9111165e6ef23"
  },
  {
    "url": "assets/js/50.js",
    "revision": "233ea7261b7c3bc4da848547e9b4f977"
  },
  {
    "url": "assets/js/500.js",
    "revision": "4f02e60147e54a85262b46619fc5404c"
  },
  {
    "url": "assets/js/501.js",
    "revision": "3a2e12f49583fff79562cb744bdb07a9"
  },
  {
    "url": "assets/js/502.js",
    "revision": "afbfcfbdb7884f133eec2d984b4967cd"
  },
  {
    "url": "assets/js/503.js",
    "revision": "0026bf59f21bb9af967cf5da1f0a1a9e"
  },
  {
    "url": "assets/js/504.js",
    "revision": "242537aa04d483f87509911f02675360"
  },
  {
    "url": "assets/js/505.js",
    "revision": "f95a73a83d18d83083c671ae54ed7d28"
  },
  {
    "url": "assets/js/506.js",
    "revision": "af5228b352c818c608e03f99ca3d70ec"
  },
  {
    "url": "assets/js/507.js",
    "revision": "b807728d35a264d8852c700b469871ad"
  },
  {
    "url": "assets/js/508.js",
    "revision": "abae768e81fbed92b2331e0ef58fbdc6"
  },
  {
    "url": "assets/js/509.js",
    "revision": "32206ccddf18282d0ad3cf0cf4e234cf"
  },
  {
    "url": "assets/js/51.js",
    "revision": "cb5c5c272e27ed645e12b7306f906d72"
  },
  {
    "url": "assets/js/510.js",
    "revision": "f19351afa55be8928e4532f56451dc42"
  },
  {
    "url": "assets/js/511.js",
    "revision": "9409f4051f60263d2798acdeb7efa048"
  },
  {
    "url": "assets/js/512.js",
    "revision": "b7ae36f707b34591a6ac86d7c9450102"
  },
  {
    "url": "assets/js/513.js",
    "revision": "a51eb809f4c483811227ccd4626e9935"
  },
  {
    "url": "assets/js/514.js",
    "revision": "2f32ffeb4d2e50c42856212bf3c802bf"
  },
  {
    "url": "assets/js/515.js",
    "revision": "d220fc4a75446836d1f4e5d0c1824463"
  },
  {
    "url": "assets/js/516.js",
    "revision": "835d8234275ffac4e8a320b76df5742a"
  },
  {
    "url": "assets/js/517.js",
    "revision": "2af62ac1acb6686c1e2761df25336e08"
  },
  {
    "url": "assets/js/518.js",
    "revision": "26c377951d334f41e3aa1c956eae2173"
  },
  {
    "url": "assets/js/519.js",
    "revision": "d48641d669293c0e21a58c442a1683c7"
  },
  {
    "url": "assets/js/52.js",
    "revision": "b3b3e94e3feed35d10385820ffa2da1a"
  },
  {
    "url": "assets/js/520.js",
    "revision": "b5477fa3846726cdd1dd5a72a23a2ece"
  },
  {
    "url": "assets/js/521.js",
    "revision": "df83cd9badd5a15475ed0825c3cb7f05"
  },
  {
    "url": "assets/js/522.js",
    "revision": "a88c707cb576b2fc8b351a8b7e987c6b"
  },
  {
    "url": "assets/js/523.js",
    "revision": "6f562fae095a3309189f50e94c2cf143"
  },
  {
    "url": "assets/js/524.js",
    "revision": "d9a033afe9bb9e2c499daa8cff5ebe50"
  },
  {
    "url": "assets/js/525.js",
    "revision": "68cf13c45c766c567995fe6996e6a833"
  },
  {
    "url": "assets/js/526.js",
    "revision": "176aac26fe26a9f3ac16241088817625"
  },
  {
    "url": "assets/js/527.js",
    "revision": "4efe542333fb49709c5fdbfe6ac9af95"
  },
  {
    "url": "assets/js/528.js",
    "revision": "3ca43975edb527f39d25a357ada0bc29"
  },
  {
    "url": "assets/js/529.js",
    "revision": "33b78ce57f333878aa5c9fec39f7e162"
  },
  {
    "url": "assets/js/53.js",
    "revision": "c3062f9e2f50c1a8d142c4ab301678b5"
  },
  {
    "url": "assets/js/530.js",
    "revision": "870d9503605b2ce78fd42945ce2edc05"
  },
  {
    "url": "assets/js/531.js",
    "revision": "48609398ce5f7d485bf0f90a1e91003f"
  },
  {
    "url": "assets/js/532.js",
    "revision": "5709fdde471bbe20940e50bc47eef914"
  },
  {
    "url": "assets/js/533.js",
    "revision": "02eb868e941db96b556d7b66ba7f9124"
  },
  {
    "url": "assets/js/534.js",
    "revision": "5c6b715d433439cfcdc77c0d28145fc5"
  },
  {
    "url": "assets/js/535.js",
    "revision": "7bf914cc8eb22fbc7ad16e2e6f39fc2a"
  },
  {
    "url": "assets/js/536.js",
    "revision": "ec94fe5c5dfa246e6280559d56226f7d"
  },
  {
    "url": "assets/js/537.js",
    "revision": "26955e05f2fba661c01fc02f34e952af"
  },
  {
    "url": "assets/js/538.js",
    "revision": "9933e8b0aedaa797538a1bcd7a7bd5a4"
  },
  {
    "url": "assets/js/539.js",
    "revision": "1938de0832de13cd88625c921435bd2f"
  },
  {
    "url": "assets/js/54.js",
    "revision": "70732fcb7950f5de42d21f06c3bcf56a"
  },
  {
    "url": "assets/js/540.js",
    "revision": "a83c3ccd54ed21e832264ae226c5204d"
  },
  {
    "url": "assets/js/541.js",
    "revision": "f84a46cd1ef23943034ea4b180796555"
  },
  {
    "url": "assets/js/542.js",
    "revision": "8f13d63988c06d05518f9321391cd8c8"
  },
  {
    "url": "assets/js/543.js",
    "revision": "4ce7cb205a3e0a3cbce8222091f0c592"
  },
  {
    "url": "assets/js/544.js",
    "revision": "dfcb36e21e1b8b32dee676e970f43b0d"
  },
  {
    "url": "assets/js/545.js",
    "revision": "1851ab7769d68eb514ce0efc10b93b4b"
  },
  {
    "url": "assets/js/546.js",
    "revision": "9769fdc09c58389050e9d6cee1cfdab3"
  },
  {
    "url": "assets/js/547.js",
    "revision": "78c9f51bd851129310a0d340fc0f367b"
  },
  {
    "url": "assets/js/548.js",
    "revision": "78d0a5a58515eaaf42f0d07cac46cf08"
  },
  {
    "url": "assets/js/549.js",
    "revision": "f3199b4cf9944f605e2df68e6903f61e"
  },
  {
    "url": "assets/js/55.js",
    "revision": "8e2ec6f5301282ced499ce6219a39183"
  },
  {
    "url": "assets/js/550.js",
    "revision": "ecbac1455e2a1169ea42cfd9f68ada4a"
  },
  {
    "url": "assets/js/551.js",
    "revision": "62a892c1d2e066883375651adbf2ec73"
  },
  {
    "url": "assets/js/552.js",
    "revision": "b6d7e03f994a48900b9b5070a4193232"
  },
  {
    "url": "assets/js/553.js",
    "revision": "cbd02c9b6089c2c575751c5e945298eb"
  },
  {
    "url": "assets/js/554.js",
    "revision": "64abaafb29247b92dc44e87eee6354cf"
  },
  {
    "url": "assets/js/555.js",
    "revision": "13561ce8ec690172288cbd4bc63cdeee"
  },
  {
    "url": "assets/js/556.js",
    "revision": "ccdf25b9bfbc4740beceebf510bdcc5e"
  },
  {
    "url": "assets/js/557.js",
    "revision": "bd92093e7d71c9b10374080877f18257"
  },
  {
    "url": "assets/js/558.js",
    "revision": "2d6c8f82b95a1585c2f3755793eaf791"
  },
  {
    "url": "assets/js/559.js",
    "revision": "62069bf24659cf4bdead7c788566c3aa"
  },
  {
    "url": "assets/js/56.js",
    "revision": "860ce621de55e7f5ba05fb8a86ff20dc"
  },
  {
    "url": "assets/js/560.js",
    "revision": "e598c172654a12862b05a66acb97f032"
  },
  {
    "url": "assets/js/561.js",
    "revision": "b2ad6164b00b8bb549567e16b71a9f21"
  },
  {
    "url": "assets/js/562.js",
    "revision": "baf2e878be0698dd22681c8be8b1a4d8"
  },
  {
    "url": "assets/js/563.js",
    "revision": "b91e012075525b8c736ba2530eeaa789"
  },
  {
    "url": "assets/js/564.js",
    "revision": "0e0e2d8177ee9279fbf726d6892ed2db"
  },
  {
    "url": "assets/js/565.js",
    "revision": "06dcbaa116992b94c7c5e1e470b17c74"
  },
  {
    "url": "assets/js/566.js",
    "revision": "87d2a667bc960ac49e51a184f18bb880"
  },
  {
    "url": "assets/js/567.js",
    "revision": "a076eb4efdd297f7850946ce1c712d1c"
  },
  {
    "url": "assets/js/568.js",
    "revision": "c587ead83220631862b32df33e3276ea"
  },
  {
    "url": "assets/js/569.js",
    "revision": "cae898914d3dcd87a8169d1c1eb1cd84"
  },
  {
    "url": "assets/js/57.js",
    "revision": "73ce1e7eb40297f2757c55a65bb56a04"
  },
  {
    "url": "assets/js/570.js",
    "revision": "a4483d4e15c1c93666852b7b401932d2"
  },
  {
    "url": "assets/js/571.js",
    "revision": "8d69b8be7c69cccde6cd08782cd859a6"
  },
  {
    "url": "assets/js/572.js",
    "revision": "32659f8b7878b8dd80a9269f206f4fa2"
  },
  {
    "url": "assets/js/573.js",
    "revision": "16a1370a90615fc3d40b0d28f7ab1c5d"
  },
  {
    "url": "assets/js/574.js",
    "revision": "eba4739a0e0ea19d96cacdf63a9e56d5"
  },
  {
    "url": "assets/js/575.js",
    "revision": "fe63fdd7e523e0547ec6c87319e91c53"
  },
  {
    "url": "assets/js/576.js",
    "revision": "15f8bab5ec8f1fcd29d7241ac8432a7e"
  },
  {
    "url": "assets/js/577.js",
    "revision": "6eaf048d0c3b6b30f5f36d336eb92557"
  },
  {
    "url": "assets/js/578.js",
    "revision": "07ff236dda7c0c004c93a3db9b966803"
  },
  {
    "url": "assets/js/579.js",
    "revision": "3e1efa66c79159f3b9f671045c84c6c5"
  },
  {
    "url": "assets/js/58.js",
    "revision": "c5161f4443155c932ada8e1db6030bad"
  },
  {
    "url": "assets/js/580.js",
    "revision": "7a710ce264e10881c0f9e97ec8e9a6ea"
  },
  {
    "url": "assets/js/581.js",
    "revision": "74cb10e60625df49d4c263235a18c768"
  },
  {
    "url": "assets/js/582.js",
    "revision": "e0e909d3310fd75b6c4a0b15322aa298"
  },
  {
    "url": "assets/js/583.js",
    "revision": "4e90929c6f92c9e9b66dbf4959782efd"
  },
  {
    "url": "assets/js/59.js",
    "revision": "65bab1e4954f6af676ff9a4266a7fc6a"
  },
  {
    "url": "assets/js/6.js",
    "revision": "7572bfb8da244accda4fb9739f260c1f"
  },
  {
    "url": "assets/js/60.js",
    "revision": "16bdd359fcff5874ec3f1c5d9b6a95d8"
  },
  {
    "url": "assets/js/61.js",
    "revision": "6bc6579b42f38311a34bac7993f258ed"
  },
  {
    "url": "assets/js/62.js",
    "revision": "223ad38c3dcad03820e2368a6e0a21fd"
  },
  {
    "url": "assets/js/63.js",
    "revision": "0bb18940739297b4f8e285337e7e298b"
  },
  {
    "url": "assets/js/64.js",
    "revision": "3610dd73996618c928437c720ac9ef0e"
  },
  {
    "url": "assets/js/65.js",
    "revision": "226e016b576362bfea32c538a23118a3"
  },
  {
    "url": "assets/js/66.js",
    "revision": "6dc5030d02a5fd912ce543836ab565fb"
  },
  {
    "url": "assets/js/67.js",
    "revision": "0e0d55e0d729073837e45727c9359221"
  },
  {
    "url": "assets/js/68.js",
    "revision": "1239b7a16c8d7615870db13c3522eaf7"
  },
  {
    "url": "assets/js/69.js",
    "revision": "956034769a9d7c60e5256d276ccd68a0"
  },
  {
    "url": "assets/js/7.js",
    "revision": "160ba3dd791b87a08ff8429513dc8b2f"
  },
  {
    "url": "assets/js/70.js",
    "revision": "469387963033b943ffb25c8be66dbfa3"
  },
  {
    "url": "assets/js/71.js",
    "revision": "0373dc651a9890c387a78836c7c16d58"
  },
  {
    "url": "assets/js/72.js",
    "revision": "a7ac20c2ddbad5ab7f29e7e2436afd0d"
  },
  {
    "url": "assets/js/73.js",
    "revision": "15310652830b446f1c0f34032824b2ad"
  },
  {
    "url": "assets/js/74.js",
    "revision": "7a17843ad907e94e70cc1f9ad10a61d4"
  },
  {
    "url": "assets/js/75.js",
    "revision": "2b9211c6eafb3d0568ea2e91567ba2a5"
  },
  {
    "url": "assets/js/76.js",
    "revision": "660f5b709c78bf8b6cd1a0c1b29724e9"
  },
  {
    "url": "assets/js/77.js",
    "revision": "b692ec46d7aec7664d025260c7804ec7"
  },
  {
    "url": "assets/js/78.js",
    "revision": "d098b2c53d43a53119275c7ba49628fb"
  },
  {
    "url": "assets/js/79.js",
    "revision": "85e65181a6a95489c3079c7ff3e1350a"
  },
  {
    "url": "assets/js/8.js",
    "revision": "e8637b3cd9626b3167bd8a24df6d55af"
  },
  {
    "url": "assets/js/80.js",
    "revision": "30a8b67397febf2aa9d2bd9cfa3c5dac"
  },
  {
    "url": "assets/js/81.js",
    "revision": "6ab825413aea0e50536b1c1472447e9a"
  },
  {
    "url": "assets/js/82.js",
    "revision": "190c38d63d33b81736132b328d1a5683"
  },
  {
    "url": "assets/js/83.js",
    "revision": "f40faa38358b0bff03e059e633b91a4b"
  },
  {
    "url": "assets/js/84.js",
    "revision": "0be3a055671b78b4d17884f949d139a0"
  },
  {
    "url": "assets/js/85.js",
    "revision": "a7071e16e1ccd9d95b3184adc646185e"
  },
  {
    "url": "assets/js/86.js",
    "revision": "37ee18f6ce0839170574f8818ff914e1"
  },
  {
    "url": "assets/js/87.js",
    "revision": "5640aaa693b8af8ea78f938fd5678b70"
  },
  {
    "url": "assets/js/88.js",
    "revision": "4fd1c3380e53c05375ebd804a3ed1e77"
  },
  {
    "url": "assets/js/89.js",
    "revision": "51c84fa409f665f77320470f6f17b232"
  },
  {
    "url": "assets/js/9.js",
    "revision": "c3a9e9dfd2189baea54b175398323967"
  },
  {
    "url": "assets/js/90.js",
    "revision": "2f0df4c3c53e6dc380a2c4421e9410e1"
  },
  {
    "url": "assets/js/91.js",
    "revision": "79c30e08d5fa01cea893b6c35f1ea604"
  },
  {
    "url": "assets/js/92.js",
    "revision": "c09545dc6d5a7f5568b979cc03a00148"
  },
  {
    "url": "assets/js/93.js",
    "revision": "aa335d894aa25f4010561f0b30a50d44"
  },
  {
    "url": "assets/js/94.js",
    "revision": "3a85f8cf9e8a15091e5b1a58cfffa0d7"
  },
  {
    "url": "assets/js/95.js",
    "revision": "69c53c67c1194ea810f30030e6de6678"
  },
  {
    "url": "assets/js/96.js",
    "revision": "78a675f6509714f1be29153693702236"
  },
  {
    "url": "assets/js/97.js",
    "revision": "456f5398a19d74aec069ea9365623fc2"
  },
  {
    "url": "assets/js/98.js",
    "revision": "6f91c642b6317533ec9e9089ad8e8f5e"
  },
  {
    "url": "assets/js/99.js",
    "revision": "eadbb3d2b2c7763c1d529c0e4ef121b4"
  },
  {
    "url": "assets/js/app.js",
    "revision": "937958bdd8f621047faa975ce03064b1"
  },
  {
    "url": "assets/js/styles.js",
    "revision": "22f22b49cc901aa95826401f7ce0930c"
  },
  {
    "url": "blog/category/index.html",
    "revision": "836bb8b9b80979957f5baf6146021b15"
  },
  {
    "url": "blog/code/artists/index.html",
    "revision": "a29fcc330c4c92ee718a98edb50c0128"
  },
  {
    "url": "blog/code/asa.sbh.nz/index.html",
    "revision": "c93d27deb0a6b5832aa9b5a5828654ba"
  },
  {
    "url": "blog/code/divider/index.html",
    "revision": "84d8ee46ccb5818aa073240e1a96d135"
  },
  {
    "url": "blog/code/first/index.html",
    "revision": "beb723670154fc10c149377aa84cc250"
  },
  {
    "url": "blog/code/fishbarrel/index.html",
    "revision": "119ef42c882b71a4282f56a3250a13bc"
  },
  {
    "url": "blog/code/indent/index.html",
    "revision": "2ac2259e269e894a91dc254ab4a6038f"
  },
  {
    "url": "blog/code/index.html",
    "revision": "723bac4cfa8444b9bf176981da5eb15f"
  },
  {
    "url": "blog/code/ingoa.nz/index.html",
    "revision": "df632f512a3bbfbf1dbfa89d9d1fa3a3"
  },
  {
    "url": "blog/code/nzondemand/index.html",
    "revision": "3b9a5b8fc85e1944cdc4b923cf26509b"
  },
  {
    "url": "blog/code/picard/index.html",
    "revision": "18ff97ccf3cef4abb5ff0e508639989c"
  },
  {
    "url": "blog/code/qr/index.html",
    "revision": "95e97a93e37e59e35f2d3e741a21b37e"
  },
  {
    "url": "blog/code/rotx/index.html",
    "revision": "f652a459ea28193c481ddb5db5716b15"
  },
  {
    "url": "blog/code/tone/index.html",
    "revision": "21e8b500715b959af584c55821704097"
  },
  {
    "url": "blog/code/website/index.html",
    "revision": "af037df43d7c6f9bad640557cb0f10dc"
  },
  {
    "url": "blog/code/website/route/index.html",
    "revision": "14e648cfba38e78d3bb10ac7ecf78a46"
  },
  {
    "url": "blog/code/website/site/index.html",
    "revision": "3ee6217e108a6a8895cd655319169fab"
  },
  {
    "url": "blog/code/xmltv.co.nz/index.html",
    "revision": "116c41bf94d1305f5e553732234975bc"
  },
  {
    "url": "blog/howto/index.html",
    "revision": "e5c562a935b317dba37b1f60653ffb9a"
  },
  {
    "url": "blog/howto/intel865/index.html",
    "revision": "bf715f0891c5d09f9c26cbc7b5444d8f"
  },
  {
    "url": "blog/howto/nexentastor/index.html",
    "revision": "620e3d89ec87aebb75986c7d846591df"
  },
  {
    "url": "blog/howto/pcloadletter/index.html",
    "revision": "1310dd973f9d2ef946d56e1d1e0e25bf"
  },
  {
    "url": "blog/howto/raid5/index.html",
    "revision": "13afcee10208748e9d12256543098cd1"
  },
  {
    "url": "blog/index.html",
    "revision": "9a2b0336af468db700b98356d926799b"
  },
  {
    "url": "blog/life/anotheryear/index.html",
    "revision": "ea742b145cf17e568286ee2793718e7b"
  },
  {
    "url": "blog/life/birthday/index.html",
    "revision": "6c172235fd1f7ae0799b51401fa49186"
  },
  {
    "url": "blog/life/blasphemy/index.html",
    "revision": "6f85040fd9b28ce59c04952a5c73c6ec"
  },
  {
    "url": "blog/life/blogger/index.html",
    "revision": "665103bb7f79e0e99620c6c83e12bd7a"
  },
  {
    "url": "blog/life/blurry/index.html",
    "revision": "5a10eeb9db941509151cc83d403021e4"
  },
  {
    "url": "blog/life/domain/index.html",
    "revision": "63000c4227f20d3c10d2bf6b715767a4"
  },
  {
    "url": "blog/life/exams/index.html",
    "revision": "2d4a79086bc3f3407dc0f8ceb989b67d"
  },
  {
    "url": "blog/life/food/index.html",
    "revision": "be69d216f36902bab0adf5b1f0e13ead"
  },
  {
    "url": "blog/life/glenview/index.html",
    "revision": "bdceb853c235fbed80d0056961791ecb"
  },
  {
    "url": "blog/life/headlines/index.html",
    "revision": "a588b6a8aa03b300b754eb9320a501ac"
  },
  {
    "url": "blog/life/index.html",
    "revision": "218cd936665f3a6a9db8c342f8b0379b"
  },
  {
    "url": "blog/life/jws/index.html",
    "revision": "4cc96815a07dc24bae231a568d11fb69"
  },
  {
    "url": "blog/life/keyboard/index.html",
    "revision": "a4516043c4b398dac546c3c6ff795ce7"
  },
  {
    "url": "blog/life/lpi201/index.html",
    "revision": "56feb57ebfc84deec82e589f43318615"
  },
  {
    "url": "blog/life/mashup/index.html",
    "revision": "87e5e4b09f6b69aa01c1156625a61277"
  },
  {
    "url": "blog/life/motorweb/index.html",
    "revision": "8904da2bd68b9a0d62dd9a18c909813e"
  },
  {
    "url": "blog/life/nxe/index.html",
    "revision": "a78cde37ee19d952646d7612bd862753"
  },
  {
    "url": "blog/life/plates/index.html",
    "revision": "bbb8d54dfb76d04e1d549abbdcd49fdf"
  },
  {
    "url": "blog/life/queenstown/index.html",
    "revision": "f7b0b722c3be046d9d18c4751608a26a"
  },
  {
    "url": "blog/life/racism/index.html",
    "revision": "dd3c3d68ecedfb6375a9d6e08f46e3d7"
  },
  {
    "url": "blog/life/roads/index.html",
    "revision": "c5404e11527ae6f969113a98ab229320"
  },
  {
    "url": "blog/life/roots/index.html",
    "revision": "40277e62bba9319059b8e4b3238b1b00"
  },
  {
    "url": "blog/life/scare/index.html",
    "revision": "5a500842cef09513050ec4e5b92fe064"
  },
  {
    "url": "blog/life/scary/index.html",
    "revision": "12538c3b79b24a3e8e0bcac67ba5be94"
  },
  {
    "url": "blog/life/seti/index.html",
    "revision": "0be6fe3a55190c0b34e269071e62a6ec"
  },
  {
    "url": "blog/life/skeptical/index.html",
    "revision": "b2e301e7cb213e22eb5abed14d133508"
  },
  {
    "url": "blog/life/skepticzone/index.html",
    "revision": "2db9c05263902f8a1072c17988f04c81"
  },
  {
    "url": "blog/life/spam/index.html",
    "revision": "d27d38f77956458f09fb7bb5a47e12dd"
  },
  {
    "url": "blog/life/trademe/index.html",
    "revision": "98dd9e8a6085f532eb5f68074b02f8f2"
  },
  {
    "url": "blog/life/unforeseen/index.html",
    "revision": "a31f02727b6015c2aef929299d4bd660"
  },
  {
    "url": "blog/life/wobbly/index.html",
    "revision": "4949449c52d81ff90b94fe537369704f"
  },
  {
    "url": "blog/projects/airbag/index.html",
    "revision": "cf1a7736d49a1258d8844a59b12054c1"
  },
  {
    "url": "blog/projects/ambilight/index.html",
    "revision": "cc2a6201aaef6bca811f6af898e9fd26"
  },
  {
    "url": "blog/projects/automation/index.html",
    "revision": "4d981003f57e119b72997d0515742ca6"
  },
  {
    "url": "blog/projects/eyes/index.html",
    "revision": "88fce09a18626ee3421257378e06dc4a"
  },
  {
    "url": "blog/projects/glitch/index.html",
    "revision": "9dc7f72ec0804521226cce7a92f2e3b6"
  },
  {
    "url": "blog/projects/index.html",
    "revision": "7f15eee4361d9c1d0d6424dd744cb5de"
  },
  {
    "url": "blog/projects/it100/index.html",
    "revision": "396875614fc68c87221724cf7abe877a"
  },
  {
    "url": "blog/projects/microscope/index.html",
    "revision": "315d6a538a5e3af482180a07e3a011d8"
  },
  {
    "url": "blog/projects/mirror/index.html",
    "revision": "99c3c9079550544680de035113961729"
  },
  {
    "url": "blog/projects/picture/index.html",
    "revision": "83e027dfe7d17d5e1c0896b0559bef07"
  },
  {
    "url": "blog/projects/pizza/index.html",
    "revision": "26b241dc12d303b670a9347fa15a1d4f"
  },
  {
    "url": "blog/projects/podcast/index.html",
    "revision": "006ff77dac13133083664ddca3133135"
  },
  {
    "url": "blog/projects/reflow/index.html",
    "revision": "673c6616d440fe3112c645339d04d592"
  },
  {
    "url": "blog/projects/sandbox/index.html",
    "revision": "c7ba41d1edc198379f6e70b1df1b8eb2"
  },
  {
    "url": "blog/projects/screens/index.html",
    "revision": "29c9ff2ad92fc3b05ea716ff6ce1a269"
  },
  {
    "url": "blog/projects/sky/index.html",
    "revision": "5ddf13d919f97b635b1c768861e40c26"
  },
  {
    "url": "blog/projects/starwars/index.html",
    "revision": "b772de38249663d115cc16fd9b78c9d8"
  },
  {
    "url": "blog/projects/xbox/index.html",
    "revision": "08a6e5694acfb524fab0007257ac7b05"
  },
  {
    "url": "blog/random/addresses/index.html",
    "revision": "cfda6d77e026fb95cebad1093b2b5517"
  },
  {
    "url": "blog/random/alphabet/index.html",
    "revision": "68b549ad7b7580ffcbc4ef1193bc40ce"
  },
  {
    "url": "blog/random/astrology/index.html",
    "revision": "f0baac2dac6b20e54eb0c5270b364039"
  },
  {
    "url": "blog/random/chicken/index.html",
    "revision": "3f60a044625120311e88c05c0d382c5e"
  },
  {
    "url": "blog/random/dns/index.html",
    "revision": "f16c5d4be79eafc84cb08657c733d5cd"
  },
  {
    "url": "blog/random/evp/index.html",
    "revision": "831202209cd4951c8b751fa8aea5142f"
  },
  {
    "url": "blog/random/flip/index.html",
    "revision": "2963490f884c7d07a5d167ce6de0f19d"
  },
  {
    "url": "blog/random/honeychurch/index.html",
    "revision": "4fccc4751a8dd1014c19b8a817c7cd0e"
  },
  {
    "url": "blog/random/index.html",
    "revision": "fbbaffa226761374bce3644b0a7e5f02"
  },
  {
    "url": "blog/random/lottery/index.html",
    "revision": "927ce91bfe1ea547c84a2cb9777a3b77"
  },
  {
    "url": "blog/random/music/index.html",
    "revision": "53720e02f31bc22dfeef9ce555ee8f65"
  },
  {
    "url": "blog/random/octal/index.html",
    "revision": "93aa1df821247fd9fe903d8dc33339f5"
  },
  {
    "url": "blog/random/os/index.html",
    "revision": "cddca2a2005710ff11f0a1c3300b892e"
  },
  {
    "url": "blog/random/propellers/index.html",
    "revision": "039fb13daf572da8cee078bee1e35f3e"
  },
  {
    "url": "blog/random/robux/index.html",
    "revision": "7185a57139e2679dcb6eef09a8a869a6"
  },
  {
    "url": "blog/random/super/index.html",
    "revision": "a0c85dfff2787f221764761f30073989"
  },
  {
    "url": "blog/random/times/index.html",
    "revision": "d8be42f52563d3c41cea995237c1ae85"
  },
  {
    "url": "blog/random/travel/index.html",
    "revision": "2d9e358088a935e07dc0a0b706f34e13"
  },
  {
    "url": "blog/random/wilhelm/index.html",
    "revision": "918fddcc88847b33a972f360a2360893"
  },
  {
    "url": "blog/random/year/index.html",
    "revision": "fddbb932029fd09638d0902ce0310904"
  },
  {
    "url": "blog/skepticism/2015/08/16/asa/index.html",
    "revision": "6b7141222751457a9213af32fdf05cfc"
  },
  {
    "url": "blog/skepticism/2015/08/16/awards/index.html",
    "revision": "c98492783876a7820d6ea5d5845b446d"
  },
  {
    "url": "blog/skepticism/2015/08/16/bravo/index.html",
    "revision": "d6b0e27a1b1464cedb7203d661daf02a"
  },
  {
    "url": "blog/skepticism/2015/08/16/index.html",
    "revision": "f57d2df4fa32d2f8f75a5346d5b71426"
  },
  {
    "url": "blog/skepticism/2015/08/16/jim/index.html",
    "revision": "43c3bcfe0f48cbd6980df61b94bd4fd2"
  },
  {
    "url": "blog/skepticism/2015/08/16/naholo/index.html",
    "revision": "889c71fcfc1518bd92f2e62c2ce8ef80"
  },
  {
    "url": "blog/skepticism/2015/08/16/resene/index.html",
    "revision": "f42db78cf7eb03223961bccf1bde7a25"
  },
  {
    "url": "blog/skepticism/2015/08/index.html",
    "revision": "f21d71210a9b63777dba21666de8bd40"
  },
  {
    "url": "blog/skepticism/2015/09/20/gop/index.html",
    "revision": "87b4b09da632ad62a2d43e76d17e5bb5"
  },
  {
    "url": "blog/skepticism/2015/09/20/ignobel/index.html",
    "revision": "e94b53ef91ff351a6e5be116fcb3d5e5"
  },
  {
    "url": "blog/skepticism/2015/09/20/index.html",
    "revision": "4b407629d3885ad3d540053c7df14a11"
  },
  {
    "url": "blog/skepticism/2015/09/20/supplements/index.html",
    "revision": "1b7174946d653b3aea42c418233c6f52"
  },
  {
    "url": "blog/skepticism/2015/09/27/ayahuasca/index.html",
    "revision": "023e328d115e7926c9d4889b66023359"
  },
  {
    "url": "blog/skepticism/2015/09/27/drought/index.html",
    "revision": "a1b16de2b2f8e74c15feff2002fec1a5"
  },
  {
    "url": "blog/skepticism/2015/09/27/index.html",
    "revision": "a4b8c2320a1a0fb16514a2c8a77658a8"
  },
  {
    "url": "blog/skepticism/2015/09/27/lama/index.html",
    "revision": "c7fa2b1970ed2ea399625869926db4b1"
  },
  {
    "url": "blog/skepticism/2015/09/27/moon/index.html",
    "revision": "1146f68ce3f1b72b8abc0c1955d7ef62"
  },
  {
    "url": "blog/skepticism/2015/09/27/scan/index.html",
    "revision": "1ee1222710316aef910c1581c78b40ea"
  },
  {
    "url": "blog/skepticism/2015/09/index.html",
    "revision": "6c148679520a676c481af9033ad444fd"
  },
  {
    "url": "blog/skepticism/2015/10/04/ghost/index.html",
    "revision": "322cd710c22365fa64c405d6a857a4da"
  },
  {
    "url": "blog/skepticism/2015/10/04/haka/index.html",
    "revision": "69a5ca92c326f3538f0c2a8047e6e02f"
  },
  {
    "url": "blog/skepticism/2015/10/04/index.html",
    "revision": "8d1dc6320ec1e274f447dfb4b8b05039"
  },
  {
    "url": "blog/skepticism/2015/10/04/mars/index.html",
    "revision": "44ae43f5630f29a2ddffa3634b093674"
  },
  {
    "url": "blog/skepticism/2015/10/04/pharmacy/index.html",
    "revision": "f3bd09079c29724b583925b48d35cda1"
  },
  {
    "url": "blog/skepticism/2015/10/04/prostate/index.html",
    "revision": "67fe67353cade9b1ca10c5fe2a30a6c0"
  },
  {
    "url": "blog/skepticism/2015/10/11/armageddon/index.html",
    "revision": "eb38f0d1dfdf41d517e493a79c6e739f"
  },
  {
    "url": "blog/skepticism/2015/10/11/climate/index.html",
    "revision": "cf58a0d626376868f62a361b77e3bdda"
  },
  {
    "url": "blog/skepticism/2015/10/11/ghost/index.html",
    "revision": "0b68332778e500619bd7b614af91c182"
  },
  {
    "url": "blog/skepticism/2015/10/11/index.html",
    "revision": "047fa8e7055d7d73ada601d795ffe218"
  },
  {
    "url": "blog/skepticism/2015/10/11/magnesleep/index.html",
    "revision": "a47108d452abda83c591711a09ffa6bb"
  },
  {
    "url": "blog/skepticism/2015/10/11/nhs/index.html",
    "revision": "df730394ffdc41ecb37511829965ebd4"
  },
  {
    "url": "blog/skepticism/2015/10/11/prophet/index.html",
    "revision": "799fe77a9405262939600f63af0e0ef0"
  },
  {
    "url": "blog/skepticism/2015/10/index.html",
    "revision": "d1744ece64a9b25bc2ff56c8c6e46dd7"
  },
  {
    "url": "blog/skepticism/2015/11/15/end/index.html",
    "revision": "9eacee393a3174a28feb78ead01737c0"
  },
  {
    "url": "blog/skepticism/2015/11/15/index.html",
    "revision": "fa6370718d912bc66e8c75142eb3566b"
  },
  {
    "url": "blog/skepticism/2015/11/index.html",
    "revision": "0f3dd0516378b43a21af3d99706c0315"
  },
  {
    "url": "blog/skepticism/2015/12/13/astrology/index.html",
    "revision": "cdb8c43c432662dc45330ad469434b89"
  },
  {
    "url": "blog/skepticism/2015/12/13/cancer/index.html",
    "revision": "e5a729e4dcc3d52d98bd0d2d7f697fad"
  },
  {
    "url": "blog/skepticism/2015/12/13/chickenpox/index.html",
    "revision": "a24a9bd20b23cb5bc3e0fec220c28aaa"
  },
  {
    "url": "blog/skepticism/2015/12/13/index.html",
    "revision": "67cdba8b6310c510d7478d5386eb1736"
  },
  {
    "url": "blog/skepticism/2015/12/13/osteopath/index.html",
    "revision": "9ee8050d5428a5a1768aa1bbfe52aa81"
  },
  {
    "url": "blog/skepticism/2015/12/13/priest/index.html",
    "revision": "43d9d7e8e6f2369d39ba91a3591e071d"
  },
  {
    "url": "blog/skepticism/2015/12/13/psychic/index.html",
    "revision": "bc1606e3a941412e16e8c8f88231b6bd"
  },
  {
    "url": "blog/skepticism/2015/12/13/vaccines/index.html",
    "revision": "ea0bc1896730a735ec15910e854304cf"
  },
  {
    "url": "blog/skepticism/2015/12/index.html",
    "revision": "0082582c7cd2fb4b08da6654ee8d12b9"
  },
  {
    "url": "blog/skepticism/2015/index.html",
    "revision": "3d676329b0ae972d742097fcc8a8aa5b"
  },
  {
    "url": "blog/skepticism/2016/02/07/antioxidant/index.html",
    "revision": "d678fd150c52e9a0d5140cac379c71f0"
  },
  {
    "url": "blog/skepticism/2016/02/07/index.html",
    "revision": "467721049b75202d5f581adec11f94d0"
  },
  {
    "url": "blog/skepticism/2016/02/07/kfc/index.html",
    "revision": "44c78190cc2faecf59a1fec9ee69a663"
  },
  {
    "url": "blog/skepticism/2016/02/07/ph/index.html",
    "revision": "0440ff0f81693887cff79411e1b87980"
  },
  {
    "url": "blog/skepticism/2016/02/07/sandy/index.html",
    "revision": "5394147250b8561343027ed182e608ee"
  },
  {
    "url": "blog/skepticism/2016/02/07/sarfati/index.html",
    "revision": "25ef189cb7d35073c52dee01d5565e61"
  },
  {
    "url": "blog/skepticism/2016/02/07/trump/index.html",
    "revision": "dfe21f68f029aa876a3eb42bdb41bf2c"
  },
  {
    "url": "blog/skepticism/2016/02/14/coins/index.html",
    "revision": "129d223f43a45a1617f5eca12b61947d"
  },
  {
    "url": "blog/skepticism/2016/02/14/fast/index.html",
    "revision": "7146fdc25b0c1a344da940cf8e2ebcaf"
  },
  {
    "url": "blog/skepticism/2016/02/14/fluoride/index.html",
    "revision": "e26a16d5cb44f450fffb765c5d999455"
  },
  {
    "url": "blog/skepticism/2016/02/14/icke/index.html",
    "revision": "edb9cdd5c085f561cb7f8b570aa5fd17"
  },
  {
    "url": "blog/skepticism/2016/02/14/index.html",
    "revision": "e4e508243538687056648fc432bc648a"
  },
  {
    "url": "blog/skepticism/2016/02/14/yeti/index.html",
    "revision": "018c0d2333323de9fd1aa0becdc518ac"
  },
  {
    "url": "blog/skepticism/2016/02/21/homeopathy/index.html",
    "revision": "2611f741fe475335dcae103f2051341d"
  },
  {
    "url": "blog/skepticism/2016/02/21/index.html",
    "revision": "89f9e17c4243b241396aeb3a14cf3890"
  },
  {
    "url": "blog/skepticism/2016/02/21/monster/index.html",
    "revision": "e072be82238b1269890c2acc92faf91c"
  },
  {
    "url": "blog/skepticism/2016/02/21/scalia/index.html",
    "revision": "8b7ff8cbd6637241bb21b6c1fdbb4b21"
  },
  {
    "url": "blog/skepticism/2016/02/21/shane/index.html",
    "revision": "bc30e38fe3559fa0fccb02863b57e6a1"
  },
  {
    "url": "blog/skepticism/2016/02/21/texas/index.html",
    "revision": "c02718d795e57214d6dc9cbb6efbb16b"
  },
  {
    "url": "blog/skepticism/2016/02/28/acupuncture/index.html",
    "revision": "57069f44ecb99fd86d227607f429becb"
  },
  {
    "url": "blog/skepticism/2016/02/28/fsm/index.html",
    "revision": "2f5387eb45feb72c57fb646512a80fe7"
  },
  {
    "url": "blog/skepticism/2016/02/28/index.html",
    "revision": "4215cc1c47ec4aafa73ebaa3a4dc1af7"
  },
  {
    "url": "blog/skepticism/2016/02/28/iv/index.html",
    "revision": "f3016e49651f407af7f6897f706e1732"
  },
  {
    "url": "blog/skepticism/2016/02/28/natural/index.html",
    "revision": "d067d5f253f67d4e24e684a26bceb9be"
  },
  {
    "url": "blog/skepticism/2016/02/28/talc/index.html",
    "revision": "c2accade21fa4fcaf655c4d15e666356"
  },
  {
    "url": "blog/skepticism/2016/02/index.html",
    "revision": "887b7ddadca298248e5dca35b7d0753b"
  },
  {
    "url": "blog/skepticism/2016/03/13/herbs/index.html",
    "revision": "77e59a5b24c4d433e9e78d424b58e41c"
  },
  {
    "url": "blog/skepticism/2016/03/13/index.html",
    "revision": "c068239bc88a6a7e28d3e18ff390d0f1"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandala/index.html",
    "revision": "512d560c455f05b938a7b03fde34fe69"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandela/index.html",
    "revision": "acac65d1c97f7827905d1b90f7b6336b"
  },
  {
    "url": "blog/skepticism/2016/03/13/spray/index.html",
    "revision": "dea3be7cc4304bd5cb26fe26558dbd76"
  },
  {
    "url": "blog/skepticism/2016/03/index.html",
    "revision": "a3fee490fadcc0c8b71017a3d2b3c00e"
  },
  {
    "url": "blog/skepticism/2016/04/17/charity/index.html",
    "revision": "8dfa15b6bcd6179e9621f6cedfb3e60c"
  },
  {
    "url": "blog/skepticism/2016/04/17/chiro/index.html",
    "revision": "3b4b76d90f07c916db6f10c47d6190ea"
  },
  {
    "url": "blog/skepticism/2016/04/17/fluoride/index.html",
    "revision": "74a92238f7a6e142eb54d6a2928b4a01"
  },
  {
    "url": "blog/skepticism/2016/04/17/index.html",
    "revision": "39ff1b6f98776bdabc29d606c8e50eeb"
  },
  {
    "url": "blog/skepticism/2016/04/17/lotto/index.html",
    "revision": "094305f38ce83ed3b1bead641f94c797"
  },
  {
    "url": "blog/skepticism/2016/04/17/mind/index.html",
    "revision": "1d1df4fc80105fa63901d8b7241d1466"
  },
  {
    "url": "blog/skepticism/2016/04/17/whooping/index.html",
    "revision": "86601d3b3a2410dbdd3bd8336929ce3c"
  },
  {
    "url": "blog/skepticism/2016/04/index.html",
    "revision": "e846aba2a4b141a87ef106ff98328419"
  },
  {
    "url": "blog/skepticism/2016/06/05/1080/index.html",
    "revision": "37c9fbd69d0dcf40a01efbe568586176"
  },
  {
    "url": "blog/skepticism/2016/06/05/acupuncture/index.html",
    "revision": "20f0699b266f47e9984b86d433b18a11"
  },
  {
    "url": "blog/skepticism/2016/06/05/family/index.html",
    "revision": "0e9f62e9e40d3dfbfb7cafabcd7c30f5"
  },
  {
    "url": "blog/skepticism/2016/06/05/index.html",
    "revision": "1b53129dc0a5983ccb2df47edc178e82"
  },
  {
    "url": "blog/skepticism/2016/06/05/limbaugh/index.html",
    "revision": "a560545878c1f391681349f768535143"
  },
  {
    "url": "blog/skepticism/2016/06/12/bobby/index.html",
    "revision": "2e6dc2e8bf7f8ee01479ed15d2d3f96e"
  },
  {
    "url": "blog/skepticism/2016/06/12/climate/index.html",
    "revision": "0f521c036bc0acec15aafdf5a04db8e1"
  },
  {
    "url": "blog/skepticism/2016/06/12/index.html",
    "revision": "af71a7f2aa2369246b4f25b4aebe12c8"
  },
  {
    "url": "blog/skepticism/2016/06/12/pugh/index.html",
    "revision": "b94838d4e6b90379a668ce73733c8ab2"
  },
  {
    "url": "blog/skepticism/2016/06/12/savage/index.html",
    "revision": "5bf5c889fe8bd0fa32f9af8e8edbf4bd"
  },
  {
    "url": "blog/skepticism/2016/06/12/sawdust/index.html",
    "revision": "2b6b51621d24b2d3c8600fdd9e19584c"
  },
  {
    "url": "blog/skepticism/2016/06/19/beauty/index.html",
    "revision": "39bce25580fc15eafd148db44ec4ed2f"
  },
  {
    "url": "blog/skepticism/2016/06/19/bilderberg/index.html",
    "revision": "d4520b88071f73517719182dae73e7ba"
  },
  {
    "url": "blog/skepticism/2016/06/19/cyf/index.html",
    "revision": "43f1ab406bf05af35ef53c85f011934a"
  },
  {
    "url": "blog/skepticism/2016/06/19/holt/index.html",
    "revision": "ab9d917bf70abf5a1dd24b2752d1f477"
  },
  {
    "url": "blog/skepticism/2016/06/19/index.html",
    "revision": "4b9d67e28344a34095e911a45937d4f3"
  },
  {
    "url": "blog/skepticism/2016/06/19/silver/index.html",
    "revision": "e566d09261535038b58aee14eb26320a"
  },
  {
    "url": "blog/skepticism/2016/06/19/ufo/index.html",
    "revision": "8a2a85c07cb641034e6693fd70ac5130"
  },
  {
    "url": "blog/skepticism/2016/06/26/homeopathy/index.html",
    "revision": "51933d4d723037dc0679403a7dad71ce"
  },
  {
    "url": "blog/skepticism/2016/06/26/index.html",
    "revision": "329cdefcdf39068122e975fcf7fa25a9"
  },
  {
    "url": "blog/skepticism/2016/06/26/robbins/index.html",
    "revision": "364bcb0fdf868de2e55ede7095164c28"
  },
  {
    "url": "blog/skepticism/2016/06/26/selfies/index.html",
    "revision": "4682203d40dfa987695a2a326750c895"
  },
  {
    "url": "blog/skepticism/2016/06/26/silver/index.html",
    "revision": "134e416d0e5a28a3a2e58bf18a7bf259"
  },
  {
    "url": "blog/skepticism/2016/06/26/ufos/index.html",
    "revision": "e6f2f7ca81af770e09f29e9e8a64a60d"
  },
  {
    "url": "blog/skepticism/2016/06/index.html",
    "revision": "caec35d20925daafc98bebea1276b127"
  },
  {
    "url": "blog/skepticism/2016/07/03/glyphosate/index.html",
    "revision": "fe1bbe737189d267f42caa011017e3cf"
  },
  {
    "url": "blog/skepticism/2016/07/03/gmo/index.html",
    "revision": "b47c606ed3b135c36d93817d20ec1f70"
  },
  {
    "url": "blog/skepticism/2016/07/03/index.html",
    "revision": "2fb539eecd511ee5e12c71e194a84d46"
  },
  {
    "url": "blog/skepticism/2016/07/03/jail/index.html",
    "revision": "3c310b279c2bad7114c035265f43f62e"
  },
  {
    "url": "blog/skepticism/2016/07/03/ken/index.html",
    "revision": "123984eac5bec305f899991d59239c03"
  },
  {
    "url": "blog/skepticism/2016/07/10/ark/index.html",
    "revision": "5de366c96fc58f62efed34667cce4f86"
  },
  {
    "url": "blog/skepticism/2016/07/10/bee/index.html",
    "revision": "5bc571c19ac3128ec30539ac92096bec"
  },
  {
    "url": "blog/skepticism/2016/07/10/index.html",
    "revision": "05dae151bb68b6144577acd486dd1f07"
  },
  {
    "url": "blog/skepticism/2016/07/10/lottery/index.html",
    "revision": "0d9144cbe47e530ba79101feb05f53e8"
  },
  {
    "url": "blog/skepticism/2016/07/10/murder/index.html",
    "revision": "51b02b5a64439393381d0574f0aba70c"
  },
  {
    "url": "blog/skepticism/2016/07/17/dogs/index.html",
    "revision": "f89f7f815a278f772c5a2d70327e789e"
  },
  {
    "url": "blog/skepticism/2016/07/17/fsm/index.html",
    "revision": "aea7eaaac53154096f78262ac33713d8"
  },
  {
    "url": "blog/skepticism/2016/07/17/fyi/index.html",
    "revision": "1fc3c65e3746ab6dbca8eaa191599108"
  },
  {
    "url": "blog/skepticism/2016/07/17/index.html",
    "revision": "4c999b230d2fe0d592e49ab42c3e3fe8"
  },
  {
    "url": "blog/skepticism/2016/07/17/natural/index.html",
    "revision": "cb26eecc7cf0f0fef859871a56689e70"
  },
  {
    "url": "blog/skepticism/2016/07/17/pokemon/index.html",
    "revision": "feb676829d4db4e8170745f32a67abd3"
  },
  {
    "url": "blog/skepticism/2016/07/index.html",
    "revision": "bce6db0a0dc2366f536cc44ef8fea1c5"
  },
  {
    "url": "blog/skepticism/2016/08/07/icke/index.html",
    "revision": "c89eb2a0d67891743d5fd43e1596fd4a"
  },
  {
    "url": "blog/skepticism/2016/08/07/index.html",
    "revision": "bdb5480f87d9d72d4c394831275b9bd8"
  },
  {
    "url": "blog/skepticism/2016/08/21/brian/index.html",
    "revision": "42779980a9a2bdbf307e0fcedbdfbe95"
  },
  {
    "url": "blog/skepticism/2016/08/21/chlorine/index.html",
    "revision": "9b5bffd5781adf5b291acfc5a305026b"
  },
  {
    "url": "blog/skepticism/2016/08/21/index.html",
    "revision": "685167daf8874653c4fecc738f1f234a"
  },
  {
    "url": "blog/skepticism/2016/08/21/murder/index.html",
    "revision": "802727c370f48a36fbdfdb8d36e82358"
  },
  {
    "url": "blog/skepticism/2016/08/21/superfoods/index.html",
    "revision": "4bce605fc97608d3814e1beaad79e6f5"
  },
  {
    "url": "blog/skepticism/2016/08/21/witch/index.html",
    "revision": "0dbc8971c669b8a31886b298ff69fec7"
  },
  {
    "url": "blog/skepticism/2016/08/28/alcohol/index.html",
    "revision": "bf3c07f34f68ce6d6e55d00e3e046ba7"
  },
  {
    "url": "blog/skepticism/2016/08/28/chiro/index.html",
    "revision": "96718534fa11d4efa2ac800f9a665379"
  },
  {
    "url": "blog/skepticism/2016/08/28/index.html",
    "revision": "35d5c354828012015be8f29dcc094e42"
  },
  {
    "url": "blog/skepticism/2016/08/28/processed/index.html",
    "revision": "0280f6012c44f477f00ce0e740e1611b"
  },
  {
    "url": "blog/skepticism/2016/08/28/sbh/index.html",
    "revision": "460fa17c34897009dde83938d49b6f4c"
  },
  {
    "url": "blog/skepticism/2016/08/index.html",
    "revision": "dfa28b0dab692dc4107ce5d853bd3646"
  },
  {
    "url": "blog/skepticism/2016/09/18/altruism/index.html",
    "revision": "0cc65b54058034eab7a21deab939ad7d"
  },
  {
    "url": "blog/skepticism/2016/09/18/better/index.html",
    "revision": "4f61f854c06598d6069bbd0629c13faf"
  },
  {
    "url": "blog/skepticism/2016/09/18/homeopathy/index.html",
    "revision": "41b076f6f2ae423efe84c70a86734ed2"
  },
  {
    "url": "blog/skepticism/2016/09/18/index.html",
    "revision": "1dcfaf7c4985886adfaa0f4c29b1d4e3"
  },
  {
    "url": "blog/skepticism/2016/09/18/nonsense/index.html",
    "revision": "5e6496b25b4acd0b425a80b12fa3f8a9"
  },
  {
    "url": "blog/skepticism/2016/09/18/trump/index.html",
    "revision": "30eaa94b124fb3ce2b02f3c4976a2c17"
  },
  {
    "url": "blog/skepticism/2016/09/25/clinic/index.html",
    "revision": "11759715f57551105a9d763986be34d4"
  },
  {
    "url": "blog/skepticism/2016/09/25/fluoride/index.html",
    "revision": "a6da2ef45ffdba68f8d01e45e929ba16"
  },
  {
    "url": "blog/skepticism/2016/09/25/homeopathy/index.html",
    "revision": "f25eae7a072d14091440fe14b72d878e"
  },
  {
    "url": "blog/skepticism/2016/09/25/index.html",
    "revision": "ed4d61fed4b55e76e218ae2c3ff822af"
  },
  {
    "url": "blog/skepticism/2016/09/25/murder/index.html",
    "revision": "beb9903d79d9527725b53cc43a862f19"
  },
  {
    "url": "blog/skepticism/2016/09/index.html",
    "revision": "56420cfed056e6a781407bd8ee03a047"
  },
  {
    "url": "blog/skepticism/2016/10/21/bigfoot/index.html",
    "revision": "3906e78e896af1b237a00be3fa7d6823"
  },
  {
    "url": "blog/skepticism/2016/10/21/breasts/index.html",
    "revision": "4f912258d42bf3217f3548f95689cae2"
  },
  {
    "url": "blog/skepticism/2016/10/21/index.html",
    "revision": "5f252783ca68762ae7430082861d4115"
  },
  {
    "url": "blog/skepticism/2016/10/21/medsafe/index.html",
    "revision": "7476360e8d70181e86c5944784991786"
  },
  {
    "url": "blog/skepticism/2016/10/21/zenteq/index.html",
    "revision": "1c8daf9c37313a52286bead2c506848d"
  },
  {
    "url": "blog/skepticism/2016/10/index.html",
    "revision": "71a48c908a24db7b3f06d30baabf2a25"
  },
  {
    "url": "blog/skepticism/2016/11/13/conference/index.html",
    "revision": "6715f90eed996cbfb593af8d79634132"
  },
  {
    "url": "blog/skepticism/2016/11/13/green/index.html",
    "revision": "7a5b59fea4a3cb1dfc0283a57b6f0c21"
  },
  {
    "url": "blog/skepticism/2016/11/13/index.html",
    "revision": "dee4153e348e925f3f46109a403fd721"
  },
  {
    "url": "blog/skepticism/2016/11/13/vice/index.html",
    "revision": "c83577952de4d6905fdbe11f774a988b"
  },
  {
    "url": "blog/skepticism/2016/11/27/bioptron/index.html",
    "revision": "a28d1777ceccacc0d2cc81c619a230f5"
  },
  {
    "url": "blog/skepticism/2016/11/27/conference/index.html",
    "revision": "6ccbb18ea042f3547c9c53b4089ce2a3"
  },
  {
    "url": "blog/skepticism/2016/11/27/earthquake/index.html",
    "revision": "355758407eace6cc40e52e757069ec88"
  },
  {
    "url": "blog/skepticism/2016/11/27/index.html",
    "revision": "fab7a940d63bd7ba2ea1dbbf384b8158"
  },
  {
    "url": "blog/skepticism/2016/11/index.html",
    "revision": "90ec014d0997eaaba1df9c7c9daab273"
  },
  {
    "url": "blog/skepticism/2016/12/04/conference/index.html",
    "revision": "5733c0774013a6ae08cd7c76a95ce9fe"
  },
  {
    "url": "blog/skepticism/2016/12/04/index.html",
    "revision": "066fed351d64ee0af84e7939480abd4f"
  },
  {
    "url": "blog/skepticism/2016/12/18/colin/index.html",
    "revision": "f171128d34f41a87af4e00268cdb12cd"
  },
  {
    "url": "blog/skepticism/2016/12/18/fiji/index.html",
    "revision": "12ed8780de32200fb86bf58c193542ba"
  },
  {
    "url": "blog/skepticism/2016/12/18/index.html",
    "revision": "200f3b133455f181ca3aec4b00fa97e5"
  },
  {
    "url": "blog/skepticism/2016/12/18/kinesiology/index.html",
    "revision": "256f2c6ad21c6e1e7be3f1c394c1c648"
  },
  {
    "url": "blog/skepticism/2016/12/18/mmm/index.html",
    "revision": "be2549db5bf94e1a2aa227c23fb0c99e"
  },
  {
    "url": "blog/skepticism/2016/12/18/nigel/index.html",
    "revision": "74fa6f2b37c22230b0da5ad6f1a1a3f5"
  },
  {
    "url": "blog/skepticism/2016/12/index.html",
    "revision": "140b038c19ac1b702bbcc87c90796210"
  },
  {
    "url": "blog/skepticism/2016/index.html",
    "revision": "670a8460473d9aa5581008e00d17bd01"
  },
  {
    "url": "blog/skepticism/2017/01/22/index.html",
    "revision": "7ab56bc364e6e7e35cab71544123f647"
  },
  {
    "url": "blog/skepticism/2017/01/22/scientology/index.html",
    "revision": "f52d548038fd6728e0b30cb2a796ce53"
  },
  {
    "url": "blog/skepticism/2017/01/29/creation/index.html",
    "revision": "84470588e5a7cd2b4ec4c268e1ded063"
  },
  {
    "url": "blog/skepticism/2017/01/29/index.html",
    "revision": "fa388282cb076b1f20e35ba48dee15dc"
  },
  {
    "url": "blog/skepticism/2017/01/index.html",
    "revision": "790ed8d8be34b08474b7700e4dd8b85a"
  },
  {
    "url": "blog/skepticism/2017/02/05/fraudster/index.html",
    "revision": "5fca64ed79c364423b9164f105e4be8d"
  },
  {
    "url": "blog/skepticism/2017/02/05/gervais/index.html",
    "revision": "dfe0abbd245e251e53fb8f5369d46513"
  },
  {
    "url": "blog/skepticism/2017/02/05/index.html",
    "revision": "e91698d612d0223ae7bb4e1b81a18cc4"
  },
  {
    "url": "blog/skepticism/2017/02/05/scientology/index.html",
    "revision": "1da02f1c190cedee3f349939d534f3bd"
  },
  {
    "url": "blog/skepticism/2017/02/19/homeopathy/index.html",
    "revision": "56ba15a49ef5545c4b627312575b883b"
  },
  {
    "url": "blog/skepticism/2017/02/19/index.html",
    "revision": "19f8f4c9bb7d67c75dbd19a0034d3620"
  },
  {
    "url": "blog/skepticism/2017/02/19/lottery/index.html",
    "revision": "b402d2eef29e7eb1319f15c8dced58f0"
  },
  {
    "url": "blog/skepticism/2017/02/19/vaxxed/index.html",
    "revision": "2c1a8fc1a74ff284c94afd873f52ae1d"
  },
  {
    "url": "blog/skepticism/2017/02/19/whales/index.html",
    "revision": "3f192d662376fc0212f57acecdfc9140"
  },
  {
    "url": "blog/skepticism/2017/02/index.html",
    "revision": "f43f2099e9af91126053011a430736d9"
  },
  {
    "url": "blog/skepticism/2017/03/05/index.html",
    "revision": "7f261fdf6fe707d07a89295987f5fe99"
  },
  {
    "url": "blog/skepticism/2017/03/05/rea/index.html",
    "revision": "4ec0fb2d8ca9cb5b53644cba4bb2e360"
  },
  {
    "url": "blog/skepticism/2017/03/19/fake/index.html",
    "revision": "506c89e650bea027beb5579d79838526"
  },
  {
    "url": "blog/skepticism/2017/03/19/index.html",
    "revision": "bf9a744cd84ca293258d200e10d005bd"
  },
  {
    "url": "blog/skepticism/2017/03/19/murder/index.html",
    "revision": "98f597832f9263185044cecc4a28f16b"
  },
  {
    "url": "blog/skepticism/2017/03/26/census/index.html",
    "revision": "e56d13027dc67ed8b91a361ec4a628f9"
  },
  {
    "url": "blog/skepticism/2017/03/26/index.html",
    "revision": "66eb1fec9e0b25fd4b5d0604eb8008df"
  },
  {
    "url": "blog/skepticism/2017/03/26/nzmj/index.html",
    "revision": "cb94e80993560088fe66bd82f106fa27"
  },
  {
    "url": "blog/skepticism/2017/03/26/shaquille/index.html",
    "revision": "86beaadca4644e51cbac29e9c57e25ad"
  },
  {
    "url": "blog/skepticism/2017/03/index.html",
    "revision": "c1693f59c4d9548e1097d2e2e754e025"
  },
  {
    "url": "blog/skepticism/2017/04/02/index.html",
    "revision": "c4d94c35c0ff069c7da0544c838d1165"
  },
  {
    "url": "blog/skepticism/2017/04/02/nasa/index.html",
    "revision": "2e585bcd33c3eaa2b30b8ddef4aba513"
  },
  {
    "url": "blog/skepticism/2017/04/02/science/index.html",
    "revision": "324987e799e29b0eaeb9c1446cd49bd5"
  },
  {
    "url": "blog/skepticism/2017/04/02/vaxxed/index.html",
    "revision": "8fbd62a3ed01ebec71d75e5af5888eba"
  },
  {
    "url": "blog/skepticism/2017/04/09/index.html",
    "revision": "ec64af6dbb8f10a1637b968cc8292ef2"
  },
  {
    "url": "blog/skepticism/2017/04/09/tekiri/index.html",
    "revision": "191f76ad1d552023de0a2b41fe4ed7ff"
  },
  {
    "url": "blog/skepticism/2017/04/09/vaxxed/index.html",
    "revision": "1bbfdf6500ea042d88ca667a17495d6f"
  },
  {
    "url": "blog/skepticism/2017/04/23/arise/index.html",
    "revision": "fd23ce5cad812484e3ad4113088ffb88"
  },
  {
    "url": "blog/skepticism/2017/04/23/index.html",
    "revision": "540646fb3dfa9ba4ee025ca103b6d46d"
  },
  {
    "url": "blog/skepticism/2017/04/23/kelvin/index.html",
    "revision": "1b89b3d18be59d7b5fa22952b8fc1cd5"
  },
  {
    "url": "blog/skepticism/2017/04/index.html",
    "revision": "177917da6722c8d14384a52466d0201c"
  },
  {
    "url": "blog/skepticism/2017/05/07/cancer/index.html",
    "revision": "bd294314da5a9c8e2ccc585dc9005f6d"
  },
  {
    "url": "blog/skepticism/2017/05/07/index.html",
    "revision": "f0ec72684a8441d491ecdd2ef2b1d708"
  },
  {
    "url": "blog/skepticism/2017/05/07/nigel/index.html",
    "revision": "35a17edaff67c43e777a077a5546612a"
  },
  {
    "url": "blog/skepticism/2017/05/21/blasphemy/index.html",
    "revision": "ba1c5171c4ce1971958f2e58b4b034f7"
  },
  {
    "url": "blog/skepticism/2017/05/21/flat/index.html",
    "revision": "b4224003329c9cbfb957de7e7ab9bb59"
  },
  {
    "url": "blog/skepticism/2017/05/21/index.html",
    "revision": "6f7cba692aa2631ecb61a56c98d8fedd"
  },
  {
    "url": "blog/skepticism/2017/05/21/maori/index.html",
    "revision": "61bc270f822f99586fd833640ab6e0d3"
  },
  {
    "url": "blog/skepticism/2017/05/index.html",
    "revision": "b0f8dff360b17989f6a07c0337a93e7a"
  },
  {
    "url": "blog/skepticism/2017/06/04/bigelow/index.html",
    "revision": "ebe42b28b114131663d626d695d62011"
  },
  {
    "url": "blog/skepticism/2017/06/04/climate/index.html",
    "revision": "ea06f288402d309c471c3bea3459beb4"
  },
  {
    "url": "blog/skepticism/2017/06/04/hansford/index.html",
    "revision": "6fa220cea17500c3399a549add51b256"
  },
  {
    "url": "blog/skepticism/2017/06/04/index.html",
    "revision": "1d8999af4e0deea11af2111c5b4e4d08"
  },
  {
    "url": "blog/skepticism/2017/06/04/wasp/index.html",
    "revision": "78f29308ca36aa15113f01f5e0248ac5"
  },
  {
    "url": "blog/skepticism/2017/06/11/colonic/index.html",
    "revision": "44d18836d57e01160a775470da1faf5c"
  },
  {
    "url": "blog/skepticism/2017/06/11/credulous/index.html",
    "revision": "b5d566e9f290cce61f279c10c1182200"
  },
  {
    "url": "blog/skepticism/2017/06/11/index.html",
    "revision": "ddecc64c7da6f250172674c01f1ba2ca"
  },
  {
    "url": "blog/skepticism/2017/06/11/journals/index.html",
    "revision": "3d5d246ce911df1809672eee3b134485"
  },
  {
    "url": "blog/skepticism/2017/06/18/breatharians/index.html",
    "revision": "8899fc2e83aa83a84e9b28d6d2b26c62"
  },
  {
    "url": "blog/skepticism/2017/06/18/fieldays/index.html",
    "revision": "27f22a928da5c9bbbc8a7783d43fdf71"
  },
  {
    "url": "blog/skepticism/2017/06/18/index.html",
    "revision": "c136ed9f2b023f29a7c018d8f2024aaa"
  },
  {
    "url": "blog/skepticism/2017/06/18/jw/index.html",
    "revision": "c56d57eef75c08b582d7ae734da8c4bf"
  },
  {
    "url": "blog/skepticism/2017/06/18/oil/index.html",
    "revision": "ddd3f1745a08e190f883aadc05ccfe4f"
  },
  {
    "url": "blog/skepticism/2017/06/index.html",
    "revision": "6c12592e1415384a992211915003fccd"
  },
  {
    "url": "blog/skepticism/2017/07/02/baby/index.html",
    "revision": "42233ff96709ed7bee25411d7d0b76bd"
  },
  {
    "url": "blog/skepticism/2017/07/02/index.html",
    "revision": "2c36f939fb7c8bb4e8d5d47027860953"
  },
  {
    "url": "blog/skepticism/2017/07/02/infowars/index.html",
    "revision": "7e01bc3cf952e3f15509f8cb0471dbf4"
  },
  {
    "url": "blog/skepticism/2017/07/02/scientology/index.html",
    "revision": "80f2131c867a42334153603162ae17cf"
  },
  {
    "url": "blog/skepticism/2017/07/16/bananas/index.html",
    "revision": "8829b1387304fc96750a6b7af7c2483a"
  },
  {
    "url": "blog/skepticism/2017/07/16/circles/index.html",
    "revision": "ae7b96ad485a192e4c1b98d12b981781"
  },
  {
    "url": "blog/skepticism/2017/07/16/index.html",
    "revision": "ac1e59065547075510323cc75843bdd1"
  },
  {
    "url": "blog/skepticism/2017/07/16/siggi/index.html",
    "revision": "6216ecec8fda9bd69bb5993a7451d30f"
  },
  {
    "url": "blog/skepticism/2017/07/16/vaxxed/index.html",
    "revision": "0b9f4af387570ffaf2b5ca4040b2e3b7"
  },
  {
    "url": "blog/skepticism/2017/07/30/bleach/index.html",
    "revision": "a9d6154482bebf07e78ed0795ab92504"
  },
  {
    "url": "blog/skepticism/2017/07/30/bluebeam/index.html",
    "revision": "497d62218424cb164496b37698f511ff"
  },
  {
    "url": "blog/skepticism/2017/07/30/index.html",
    "revision": "3ae39b37682443ff7bc6ab5172cf6962"
  },
  {
    "url": "blog/skepticism/2017/07/30/police/index.html",
    "revision": "db0d6cce08bab02325be37d2b9465315"
  },
  {
    "url": "blog/skepticism/2017/07/index.html",
    "revision": "c9bfe25f778b60048273370a70735787"
  },
  {
    "url": "blog/skepticism/2017/08/06/conned/index.html",
    "revision": "87abcd2c1445b6d7e37455551787ded8"
  },
  {
    "url": "blog/skepticism/2017/08/06/doll/index.html",
    "revision": "78d03d7615f0ce2989f3ae2995e8ecd5"
  },
  {
    "url": "blog/skepticism/2017/08/06/index.html",
    "revision": "16469047ed29ad60bd63ae44f3c23f7c"
  },
  {
    "url": "blog/skepticism/2017/08/06/jacinda/index.html",
    "revision": "d0a21853fb11b8536b078995ced49ee4"
  },
  {
    "url": "blog/skepticism/2017/08/06/lotto/index.html",
    "revision": "58197c68efc55e714fd3149d0a1dd1bb"
  },
  {
    "url": "blog/skepticism/2017/08/27/index.html",
    "revision": "2d38e0863186341a90c21cc5fc79d6b0"
  },
  {
    "url": "blog/skepticism/2017/08/27/naturopath/index.html",
    "revision": "ac83044ad01d0a38b945a54767cc292f"
  },
  {
    "url": "blog/skepticism/2017/08/27/satanic/index.html",
    "revision": "b2f69822a53f9d787e03ec6037a446d3"
  },
  {
    "url": "blog/skepticism/2017/08/index.html",
    "revision": "8ccde53dd2bc14718c0f1bbecfd27e84"
  },
  {
    "url": "blog/skepticism/2017/09/03/apocalypse/index.html",
    "revision": "92528e5cdebf48c874f25fea23a0e39b"
  },
  {
    "url": "blog/skepticism/2017/09/03/cancer/index.html",
    "revision": "80bab838fb75823b776106de7df11a37"
  },
  {
    "url": "blog/skepticism/2017/09/03/index.html",
    "revision": "2b89fe2b17022597c425fae5b311a953"
  },
  {
    "url": "blog/skepticism/2017/09/03/rectangle/index.html",
    "revision": "101ad4b40b46200b45ddf4437982aa04"
  },
  {
    "url": "blog/skepticism/2017/09/03/stargate/index.html",
    "revision": "a17b70515262b80ecf5a54d18297cc8e"
  },
  {
    "url": "blog/skepticism/2017/09/index.html",
    "revision": "19764df91bc00aad4adf4e32971ac7b6"
  },
  {
    "url": "blog/skepticism/2017/10/01/apocalypse/index.html",
    "revision": "d1917892653715994c55e00e6739a37c"
  },
  {
    "url": "blog/skepticism/2017/10/01/freeman/index.html",
    "revision": "78d126f4e151e52f6e31722d1c2d412a"
  },
  {
    "url": "blog/skepticism/2017/10/01/index.html",
    "revision": "f5b07db9be8a73d41b72206407ff08e1"
  },
  {
    "url": "blog/skepticism/2017/10/01/pharmacy/index.html",
    "revision": "6233e579e82769f9a0323fbd6da1fff6"
  },
  {
    "url": "blog/skepticism/2017/10/08/index.html",
    "revision": "926fa14872eb9ac1f04b54dffdf0f77a"
  },
  {
    "url": "blog/skepticism/2017/10/08/pill/index.html",
    "revision": "31e6319fe2730c46256071d5f83326fa"
  },
  {
    "url": "blog/skepticism/2017/10/08/qsb/index.html",
    "revision": "bccf7ed325da6f53cc5000c4163a948f"
  },
  {
    "url": "blog/skepticism/2017/10/08/vegas/index.html",
    "revision": "b46468e535e02dc64287119fb181ee42"
  },
  {
    "url": "blog/skepticism/2017/10/15/doterra/index.html",
    "revision": "4e11c3b7023db7b67b4302e9dc204a53"
  },
  {
    "url": "blog/skepticism/2017/10/15/index.html",
    "revision": "b6931770ec99adb550892dadcef96846"
  },
  {
    "url": "blog/skepticism/2017/10/15/lie/index.html",
    "revision": "66708e47c8471d774113ccf5e8d5d749"
  },
  {
    "url": "blog/skepticism/2017/10/15/soap/index.html",
    "revision": "acf9944a95e901e7335fd93a91190862"
  },
  {
    "url": "blog/skepticism/2017/10/index.html",
    "revision": "ab5c2565e77900dd4d62db3f529d68d4"
  },
  {
    "url": "blog/skepticism/2017/11/05/conference/index.html",
    "revision": "c3760f619367ba43dbe754e6109e425a"
  },
  {
    "url": "blog/skepticism/2017/11/05/glyphosate/index.html",
    "revision": "cf63e8eb7ee526613438f1c4f4dac285"
  },
  {
    "url": "blog/skepticism/2017/11/05/index.html",
    "revision": "8ed9fd74bd135b667fafdc3b9038ac80"
  },
  {
    "url": "blog/skepticism/2017/11/05/stranded/index.html",
    "revision": "c2510911c6e146fe20469d250cdff047"
  },
  {
    "url": "blog/skepticism/2017/11/05/tracts/index.html",
    "revision": "116c34202f14a45b274d2c3f786874ce"
  },
  {
    "url": "blog/skepticism/2017/11/12/ghost/index.html",
    "revision": "32e3f231d328f597530de9dd0ec19988"
  },
  {
    "url": "blog/skepticism/2017/11/12/green/index.html",
    "revision": "f5f0e77d595c028e534a87bea1745abc"
  },
  {
    "url": "blog/skepticism/2017/11/12/harassment/index.html",
    "revision": "1f18ada8ad7e779e2dde237be286a305"
  },
  {
    "url": "blog/skepticism/2017/11/12/index.html",
    "revision": "f5f5a01125f0d82b3236818020168587"
  },
  {
    "url": "blog/skepticism/2017/11/12/libby/index.html",
    "revision": "841ed9fc948877d1df98af05f9eae4ec"
  },
  {
    "url": "blog/skepticism/2017/11/index.html",
    "revision": "06277158a0f01a0b1035a3b9079f136a"
  },
  {
    "url": "blog/skepticism/2017/12/03/acupuncture/index.html",
    "revision": "bd5ddd367d2f052a8895c45eb7fd1453"
  },
  {
    "url": "blog/skepticism/2017/12/03/denialism/index.html",
    "revision": "09ecd9209cf58f94c2d841e2bc55a4d5"
  },
  {
    "url": "blog/skepticism/2017/12/03/dowsing/index.html",
    "revision": "1c973da97146c855a89d0cbc96e7f375"
  },
  {
    "url": "blog/skepticism/2017/12/03/holes/index.html",
    "revision": "b27bc2ba85ef54948714c0fc375c5c47"
  },
  {
    "url": "blog/skepticism/2017/12/03/index.html",
    "revision": "693631ddbe752d0f65ac66c49ae2487c"
  },
  {
    "url": "blog/skepticism/2017/12/17/index.html",
    "revision": "08bd70c6558f9c1ae7067308fd7daff3"
  },
  {
    "url": "blog/skepticism/2017/12/17/nhs/index.html",
    "revision": "b9dd1116be25ab28100a2ae58b30cf2d"
  },
  {
    "url": "blog/skepticism/2017/12/17/oto/index.html",
    "revision": "3ad7ae4ed9ce89034d086ab30bfcc70e"
  },
  {
    "url": "blog/skepticism/2017/12/17/pastafarian/index.html",
    "revision": "6b82eae60f627fd2bc38d78f22c2bb65"
  },
  {
    "url": "blog/skepticism/2017/12/17/shc/index.html",
    "revision": "83af300351ca7f03c743da45f9f794e5"
  },
  {
    "url": "blog/skepticism/2017/12/17/wellworks/index.html",
    "revision": "b74ce43ef589f478a0b4c21bc8a083bf"
  },
  {
    "url": "blog/skepticism/2017/12/index.html",
    "revision": "bfb9252e26e8915e507dcc8b8308f5b7"
  },
  {
    "url": "blog/skepticism/2017/index.html",
    "revision": "c2c026c1c4e04af960889e9a415abd5d"
  },
  {
    "url": "blog/skepticism/2018/01/21/grounding/index.html",
    "revision": "67bbd419cd171134b980c18a1137fcee"
  },
  {
    "url": "blog/skepticism/2018/01/21/index.html",
    "revision": "61e67d26f6ba30fedb53bc6ad9d9609a"
  },
  {
    "url": "blog/skepticism/2018/01/21/naturopath/index.html",
    "revision": "17d0a9f9e11421c73145620ea484c9d0"
  },
  {
    "url": "blog/skepticism/2018/01/21/respen/index.html",
    "revision": "19c5e283881140d25c7f9c9f1ea6772c"
  },
  {
    "url": "blog/skepticism/2018/01/28/bears/index.html",
    "revision": "b84f61d75b397bb9f37d39c8de3ebee4"
  },
  {
    "url": "blog/skepticism/2018/01/28/index.html",
    "revision": "1656037570a686e9499b6258d683dc1a"
  },
  {
    "url": "blog/skepticism/2018/01/28/peppering/index.html",
    "revision": "a17f613b134a9567d5f7fb0a870115dd"
  },
  {
    "url": "blog/skepticism/2018/01/28/pet/index.html",
    "revision": "11e2986636c2012f9896bb8503a05165"
  },
  {
    "url": "blog/skepticism/2018/01/28/quake/index.html",
    "revision": "f7cde9d5503aabb93f34aa18c1893660"
  },
  {
    "url": "blog/skepticism/2018/01/28/scientology/index.html",
    "revision": "bb4bd0539922728a06c2558c1415b5b5"
  },
  {
    "url": "blog/skepticism/2018/01/index.html",
    "revision": "7ded4b6128561490567dc50470da731e"
  },
  {
    "url": "blog/skepticism/2018/02/11/asa/index.html",
    "revision": "2f2ac4b897216b282808e20d444e032d"
  },
  {
    "url": "blog/skepticism/2018/02/11/cannabis/index.html",
    "revision": "494b089949e4e886205133e2cefb7a76"
  },
  {
    "url": "blog/skepticism/2018/02/11/elon/index.html",
    "revision": "4ed307faeed862f27d86e4f7885272b9"
  },
  {
    "url": "blog/skepticism/2018/02/11/homeopathy/index.html",
    "revision": "c5ad4b262df4dcaa4fa165ea8923239c"
  },
  {
    "url": "blog/skepticism/2018/02/11/index.html",
    "revision": "fab2a08fab487e8473f00e989e2ff7b1"
  },
  {
    "url": "blog/skepticism/2018/02/11/water/index.html",
    "revision": "66138bea9fe0ba84dac63b71f3bf54e7"
  },
  {
    "url": "blog/skepticism/2018/02/25/crisis/index.html",
    "revision": "b8f869b426b712dc948524a25be9f487"
  },
  {
    "url": "blog/skepticism/2018/02/25/eggs/index.html",
    "revision": "ef2022001a0f2768670156223369396c"
  },
  {
    "url": "blog/skepticism/2018/02/25/fsm/index.html",
    "revision": "c465b3870496e8204f35089d8c7d0144"
  },
  {
    "url": "blog/skepticism/2018/02/25/index.html",
    "revision": "2a0cae7eab4958cfc79f628c93542125"
  },
  {
    "url": "blog/skepticism/2018/02/25/number/index.html",
    "revision": "3aeedd20fd8491b2f2b829db5d199497"
  },
  {
    "url": "blog/skepticism/2018/02/25/quackery/index.html",
    "revision": "b11851ab8f52eef925ec24bd5f6e7b3e"
  },
  {
    "url": "blog/skepticism/2018/02/index.html",
    "revision": "305f08a5d747847f6e5b2a8dd3399000"
  },
  {
    "url": "blog/skepticism/2018/03/11/ai/index.html",
    "revision": "9cc7024cbd46aa6825c0eb52823a5d66"
  },
  {
    "url": "blog/skepticism/2018/03/11/index.html",
    "revision": "d33cac8a5767fbccfa818de7e6a5fe6a"
  },
  {
    "url": "blog/skepticism/2018/03/11/radiation/index.html",
    "revision": "7c49bae8eb6cbd7f3e5328c0c96ccc95"
  },
  {
    "url": "blog/skepticism/2018/03/11/reiki/index.html",
    "revision": "e55f20a5d958524569f1c5bff1e90632"
  },
  {
    "url": "blog/skepticism/2018/03/11/ufo/index.html",
    "revision": "e47d8ad94d54808a81049c6cfe2ece7a"
  },
  {
    "url": "blog/skepticism/2018/03/18/ghost/index.html",
    "revision": "ba7d1453240e884fcd1dc9ef2640376c"
  },
  {
    "url": "blog/skepticism/2018/03/18/index.html",
    "revision": "06d132c77f7ed3386f94e27264077dcc"
  },
  {
    "url": "blog/skepticism/2018/03/18/psychic/index.html",
    "revision": "4777f0959c2929efea4fc471a8bd1c43"
  },
  {
    "url": "blog/skepticism/2018/03/18/quack/index.html",
    "revision": "a1236afaae578a63e4cfc44c3d7996d0"
  },
  {
    "url": "blog/skepticism/2018/03/18/radiation/index.html",
    "revision": "298272f0e3fceb27ba48564f0a953f4c"
  },
  {
    "url": "blog/skepticism/2018/03/index.html",
    "revision": "c2a8874d124605d6b8e0594b09f6a790"
  },
  {
    "url": "blog/skepticism/2018/04/08/calocurb/index.html",
    "revision": "3dbf07f1db80745486571864d6ead8b6"
  },
  {
    "url": "blog/skepticism/2018/04/08/cam/index.html",
    "revision": "702de60cfe29d6c7e1316a3e38384d5f"
  },
  {
    "url": "blog/skepticism/2018/04/08/index.html",
    "revision": "077bd9bba01152f1de918e8819e58864"
  },
  {
    "url": "blog/skepticism/2018/04/08/psychic/index.html",
    "revision": "9a932c71ee0e8bbc8972fbe3312bfebd"
  },
  {
    "url": "blog/skepticism/2018/04/08/vaccines/index.html",
    "revision": "1d3b7c954d1b7478f6ce7f28da009a3b"
  },
  {
    "url": "blog/skepticism/2018/04/15/coffee/index.html",
    "revision": "b6f97acbdb37caf238303de68868dd6e"
  },
  {
    "url": "blog/skepticism/2018/04/15/ignorance/index.html",
    "revision": "b7839fdf033dde1eaf8838a1ddcdb14e"
  },
  {
    "url": "blog/skepticism/2018/04/15/index.html",
    "revision": "bf5773867aebcb9c1025c0f572dee35f"
  },
  {
    "url": "blog/skepticism/2018/04/15/nasa/index.html",
    "revision": "009f79cbdf138c583ba8ae474b923fee"
  },
  {
    "url": "blog/skepticism/2018/04/15/tapu/index.html",
    "revision": "24e466b426e0483465bb8a20054c8105"
  },
  {
    "url": "blog/skepticism/2018/04/29/google/index.html",
    "revision": "5f8c282c9099f1a07632d1ad73ec8605"
  },
  {
    "url": "blog/skepticism/2018/04/29/homeopathy/index.html",
    "revision": "3dbb7efe0edebc94440522f888160bd1"
  },
  {
    "url": "blog/skepticism/2018/04/29/index.html",
    "revision": "bb3e3bff480a76e376d4ca7ea93e4735"
  },
  {
    "url": "blog/skepticism/2018/04/29/ken/index.html",
    "revision": "a487a7bce1a219eda7c1ad7e886e928f"
  },
  {
    "url": "blog/skepticism/2018/04/29/v2k/index.html",
    "revision": "52255b2a44d44a0336781007759486d4"
  },
  {
    "url": "blog/skepticism/2018/04/index.html",
    "revision": "8929fb9e370f1b8a73e50b3af8220be6"
  },
  {
    "url": "blog/skepticism/2018/05/13/astrology/index.html",
    "revision": "2f2f4cc1464df636dfb76b52c1892818"
  },
  {
    "url": "blog/skepticism/2018/05/13/crystals/index.html",
    "revision": "b922b112732816c578f8b2549e55a05e"
  },
  {
    "url": "blog/skepticism/2018/05/13/dawkins/index.html",
    "revision": "c0be6c39d1be3384204c113201861c86"
  },
  {
    "url": "blog/skepticism/2018/05/13/index.html",
    "revision": "04a66a6f8ab53fd13e913518730c4b7f"
  },
  {
    "url": "blog/skepticism/2018/05/13/kangen/index.html",
    "revision": "47150444e9178e3ec92fb6e8e36d50e1"
  },
  {
    "url": "blog/skepticism/2018/05/13/vitamins/index.html",
    "revision": "88d191326b4a425d3e1b82850be4e0ab"
  },
  {
    "url": "blog/skepticism/2018/05/27/flat/index.html",
    "revision": "0b8d712d1ed2d24cd473949fd344aa53"
  },
  {
    "url": "blog/skepticism/2018/05/27/index.html",
    "revision": "53af9ec501e666122c3f556c848a32c7"
  },
  {
    "url": "blog/skepticism/2018/05/27/kangen/index.html",
    "revision": "a2ac7117b92261b4016b35098084afac"
  },
  {
    "url": "blog/skepticism/2018/05/27/ness/index.html",
    "revision": "1eb556df558531538290b1ed241c0701"
  },
  {
    "url": "blog/skepticism/2018/05/27/oz/index.html",
    "revision": "aa81b19a6eaeac1369de6c70bfaaf491"
  },
  {
    "url": "blog/skepticism/2018/05/27/psychic/index.html",
    "revision": "226fc165dd5bddf522a7b0d71dfc6cef"
  },
  {
    "url": "blog/skepticism/2018/05/index.html",
    "revision": "fedaded13f105f2df03e1e8b260e4276"
  },
  {
    "url": "blog/skepticism/2018/06/10/astrology/index.html",
    "revision": "1c40c5cbb36c46e8fe1974a8b3b3e9ab"
  },
  {
    "url": "blog/skepticism/2018/06/10/index.html",
    "revision": "ef15b8dc80cc3ba44baed98a2b758133"
  },
  {
    "url": "blog/skepticism/2018/06/10/nhs/index.html",
    "revision": "25dba5d102c7426f8e663997b55525ab"
  },
  {
    "url": "blog/skepticism/2018/06/10/shakti/index.html",
    "revision": "957986e18baefa174caf08634b8251c0"
  },
  {
    "url": "blog/skepticism/2018/06/10/weetbix/index.html",
    "revision": "ffbefb8ddc1c54b6e872927149eee94f"
  },
  {
    "url": "blog/skepticism/2018/06/24/blasphemy/index.html",
    "revision": "000f2426b1097b5533c023851d45c906"
  },
  {
    "url": "blog/skepticism/2018/06/24/cannabis/index.html",
    "revision": "1b7c3c30a4f0479915c47f9601b1e6bf"
  },
  {
    "url": "blog/skepticism/2018/06/24/hotdog/index.html",
    "revision": "47f3ccd41422a9e47a861947d1d91a8f"
  },
  {
    "url": "blog/skepticism/2018/06/24/index.html",
    "revision": "ad5339843f1c45ea95256431abbf6ed2"
  },
  {
    "url": "blog/skepticism/2018/06/24/led/index.html",
    "revision": "27e97199227029a7ec0c9aac63b1d49e"
  },
  {
    "url": "blog/skepticism/2018/06/index.html",
    "revision": "5f4c273f3a7421c6c3d22034f91bdfd2"
  },
  {
    "url": "blog/skepticism/2018/07/08/bullet/index.html",
    "revision": "4f375f5b9acf052b2912c16a1cfbe707"
  },
  {
    "url": "blog/skepticism/2018/07/08/chiros/index.html",
    "revision": "72017efae9d856207c149c9f7d6c6cfa"
  },
  {
    "url": "blog/skepticism/2018/07/08/hiv/index.html",
    "revision": "ece76efa8fd7f3c4b81d5471022bb7de"
  },
  {
    "url": "blog/skepticism/2018/07/08/hrv/index.html",
    "revision": "62e2758717a877df3c11972a12e455b2"
  },
  {
    "url": "blog/skepticism/2018/07/08/index.html",
    "revision": "904a4c75ef762b75cf3422b5b9b64fe0"
  },
  {
    "url": "blog/skepticism/2018/07/22/cancer/index.html",
    "revision": "86ae56c2c100df969f887c47017e2f1a"
  },
  {
    "url": "blog/skepticism/2018/07/22/index.html",
    "revision": "98ef398c8a7936e465b276269e0b07f8"
  },
  {
    "url": "blog/skepticism/2018/07/22/resurrection/index.html",
    "revision": "9df54078885995966eccbdc52d5697da"
  },
  {
    "url": "blog/skepticism/2018/07/22/talc/index.html",
    "revision": "c23137229db80295c55e1b36bf187fb9"
  },
  {
    "url": "blog/skepticism/2018/07/22/visas/index.html",
    "revision": "3f6fb387fdf7c712ecc36bdeea31e02a"
  },
  {
    "url": "blog/skepticism/2018/07/index.html",
    "revision": "e89703c6389c2aa3856507d84811fe1c"
  },
  {
    "url": "blog/skepticism/2018/08/05/conf/index.html",
    "revision": "711d9765075a777381ed6c375c3a2fa6"
  },
  {
    "url": "blog/skepticism/2018/08/05/index.html",
    "revision": "b071599fdcb55f941d7b4cfdba047a33"
  },
  {
    "url": "blog/skepticism/2018/08/05/qanon/index.html",
    "revision": "89a3e2bef4eda15631a4ad7e5884a926"
  },
  {
    "url": "blog/skepticism/2018/08/19/index.html",
    "revision": "76b504a483baa2194324c1d804c622dd"
  },
  {
    "url": "blog/skepticism/2018/08/19/jw/index.html",
    "revision": "a7b1debcc8e34f8189a3ec52b9947549"
  },
  {
    "url": "blog/skepticism/2018/08/index.html",
    "revision": "c6c28bc5668bf0d33e777c3c4cc9000c"
  },
  {
    "url": "blog/skepticism/2018/09/02/allergy/index.html",
    "revision": "6cfd1c553d52a54e345595aa3738ea83"
  },
  {
    "url": "blog/skepticism/2018/09/02/catholic/index.html",
    "revision": "cd31a44af5ce3cb8c2af1714265ca106"
  },
  {
    "url": "blog/skepticism/2018/09/02/index.html",
    "revision": "331a7bdbfe57550c7a564ee1342ec200"
  },
  {
    "url": "blog/skepticism/2018/09/02/jw/index.html",
    "revision": "a3b15f9093ee550c5b594445298e44d5"
  },
  {
    "url": "blog/skepticism/2018/09/02/sen/index.html",
    "revision": "14f87918af7ac4d44cb29ab98d9383e4"
  },
  {
    "url": "blog/skepticism/2018/09/16/1080/index.html",
    "revision": "9b79091bc693e2d476e22382dc5298d0"
  },
  {
    "url": "blog/skepticism/2018/09/16/church/index.html",
    "revision": "f8239df018ba978693d813e2a4d719df"
  },
  {
    "url": "blog/skepticism/2018/09/16/index.html",
    "revision": "b1c50356b1cff11b1e2e83b4425b9714"
  },
  {
    "url": "blog/skepticism/2018/09/16/jones/index.html",
    "revision": "f67ee57bc4f703df86c88cd642e29d8b"
  },
  {
    "url": "blog/skepticism/2018/09/16/scammers/index.html",
    "revision": "b78678c7a0d29e923928d842fd3b1510"
  },
  {
    "url": "blog/skepticism/2018/09/30/index.html",
    "revision": "f0544cff90cb9a67613c289ac21be677"
  },
  {
    "url": "blog/skepticism/2018/09/30/jw/index.html",
    "revision": "cbc33108cb21dbc69d7c430fbd38c613"
  },
  {
    "url": "blog/skepticism/2018/09/30/oto/index.html",
    "revision": "9bd1b7f6ae16c0f3de1b3a07edadd8dd"
  },
  {
    "url": "blog/skepticism/2018/09/30/who/index.html",
    "revision": "47ac6c49f187950df4b4953d0fc00344"
  },
  {
    "url": "blog/skepticism/2018/09/index.html",
    "revision": "e5ecd6d7034a5bfba834633e21ba011c"
  },
  {
    "url": "blog/skepticism/2018/10/14/hacked/index.html",
    "revision": "e2544ab0d20cc37ca97614fdb243b643"
  },
  {
    "url": "blog/skepticism/2018/10/14/index.html",
    "revision": "03129bbf56051f4d9ed3f0d8e6ebef37"
  },
  {
    "url": "blog/skepticism/2018/10/14/kangen/index.html",
    "revision": "385feb7d35985decb96098fd078b46a9"
  },
  {
    "url": "blog/skepticism/2018/10/14/pakistan/index.html",
    "revision": "fa8bbeb3806041a57cc15a8886dde316"
  },
  {
    "url": "blog/skepticism/2018/10/14/sarah/index.html",
    "revision": "46c7934b39988816627990722032a050"
  },
  {
    "url": "blog/skepticism/2018/10/28/blasphemy/index.html",
    "revision": "7787fd8521384aa1be67175d3b9b29e1"
  },
  {
    "url": "blog/skepticism/2018/10/28/hrv/index.html",
    "revision": "355fe1cfea9ce23a12272b006bb41c13"
  },
  {
    "url": "blog/skepticism/2018/10/28/index.html",
    "revision": "611bd52e1d62e923bcbad29fe64f149a"
  },
  {
    "url": "blog/skepticism/2018/10/28/jesus/index.html",
    "revision": "46ff5ca9e8a823ca2b07543268dccf5e"
  },
  {
    "url": "blog/skepticism/2018/10/28/natural/index.html",
    "revision": "b30915b0e88a0ebce8403ccd6c635a59"
  },
  {
    "url": "blog/skepticism/2018/10/index.html",
    "revision": "79fc75ade574b63c256a98dfdea504da"
  },
  {
    "url": "blog/skepticism/2018/11/04/bibi/index.html",
    "revision": "66c1cf7f68780ef7697b83b907c6d3be"
  },
  {
    "url": "blog/skepticism/2018/11/04/index.html",
    "revision": "c44cb7ac0b6c1b483178aa9b4ff28d82"
  },
  {
    "url": "blog/skepticism/2018/11/04/jesus/index.html",
    "revision": "c1bc87f9ef74daf02a7534959bda7378"
  },
  {
    "url": "blog/skepticism/2018/11/04/obdii/index.html",
    "revision": "3e88cd617e0e2e520aaca67af72c63d0"
  },
  {
    "url": "blog/skepticism/2018/11/04/sleepdrops/index.html",
    "revision": "ec1da97e3d7e1e04c89b05ac4cf674ab"
  },
  {
    "url": "blog/skepticism/2018/11/index.html",
    "revision": "58432c641db16851f31b16862f754aa1"
  },
  {
    "url": "blog/skepticism/2018/12/02/ark/index.html",
    "revision": "9d62bb6c7812061b202cf357df261e2e"
  },
  {
    "url": "blog/skepticism/2018/12/02/green/index.html",
    "revision": "de91566a83178bb615f10b14dad474f7"
  },
  {
    "url": "blog/skepticism/2018/12/02/index.html",
    "revision": "7b6acbdcae92fa551bb5ab051dfd72a3"
  },
  {
    "url": "blog/skepticism/2018/12/02/ri/index.html",
    "revision": "e6a12bbe20813ba55dc55ea47d16cbe5"
  },
  {
    "url": "blog/skepticism/2018/12/16/blasphemy/index.html",
    "revision": "4acd27bed66010ad3586d244b6edf233"
  },
  {
    "url": "blog/skepticism/2018/12/16/index.html",
    "revision": "7c88e33c481ba5ff223c2f3609abbd51"
  },
  {
    "url": "blog/skepticism/2018/12/16/sleepdrops/index.html",
    "revision": "1f9d1da293064c7812e65488c88a5cad"
  },
  {
    "url": "blog/skepticism/2018/12/16/tekiri/index.html",
    "revision": "f6ae2e3ccb68c20251750d1c242f42b9"
  },
  {
    "url": "blog/skepticism/2018/12/index.html",
    "revision": "9286458606fb1f07dd851a600ffdca45"
  },
  {
    "url": "blog/skepticism/2018/index.html",
    "revision": "969892407577521774bd2a966fbaae95"
  },
  {
    "url": "blog/skepticism/index.html",
    "revision": "a5ee8ea48230444af9f40c13d3be3e0f"
  },
  {
    "url": "blog/tag/index.html",
    "revision": "3fb34f47a15a5d03fe9510fbbd5473d0"
  },
  {
    "url": "contact/index.html",
    "revision": "dd6d9b69905e0fa91747bb8297a6965c"
  },
  {
    "url": "cv/cover/index.html",
    "revision": "d63c8485b49282a248cc34dff6f2c83c"
  },
  {
    "url": "cv/index.html",
    "revision": "09fb280bda11ca57a39f9a5a9e390982"
  },
  {
    "url": "googlee25d0c06da891164.html",
    "revision": "0defe75660212f417b90c5affcd03380"
  },
  {
    "url": "index.html",
    "revision": "a308e29da9228ad2f1280d1ad3f6adf1"
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
    "revision": "d31ad634ee5015c4c57c837d78fa5874"
  },
  {
    "url": "media/me/index.html",
    "revision": "9c486bd4081a8d08d474f9965b61fec8"
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
    "revision": "67efe22785454a24f889f1fb30d595b2"
  },
  {
    "url": "status/index.html",
    "revision": "37d322e440809fead692ca3c50c8ab56"
  },
  {
    "url": "status/steam/index.html",
    "revision": "90c252c87b638af4361513a70deb4981"
  },
  {
    "url": "status/twitter/index.html",
    "revision": "1e77a9d7881d9a1f67c7797f592d3837"
  },
  {
    "url": "status/wikipedia/index.html",
    "revision": "7a2133ac3cf4400849dd506a825467db"
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
