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
    "revision": "1015d3914b13cd8f855d1ec8933416c7"
  },
  {
    "url": "assets/css/0.styles.css",
    "revision": "1d4d5d4fa03d1a3bf343333725b39cfc"
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
    "url": "assets/img/1001.jpg",
    "revision": "2002996be57f9cbb27ed56bfaef1741c"
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
    "url": "assets/img/3128.jpg",
    "revision": "e2fa82c7976106fe21be4779f4a03994"
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
    "url": "assets/img/444.jpg",
    "revision": "4384a6a254e91d1356a1c709fdcd60f0"
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
    "url": "assets/img/80.jpg",
    "revision": "c2bcbaed79fae9d3cda21814465a9780"
  },
  {
    "url": "assets/img/8080.jpg",
    "revision": "735d800903ebbd527e12d768491dba48"
  },
  {
    "url": "assets/img/81.jpg",
    "revision": "ad7f9f3d5a82676dc309e3f3905ea965"
  },
  {
    "url": "assets/img/81admin.jpg",
    "revision": "454060380778d1e3404b0038c7b27853"
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
    "url": "assets/img/angry.jpg",
    "revision": "b90a163462bd8afa7bb68165139f0287"
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
    "url": "assets/img/google.jpg",
    "revision": "eef599f03314917e50604b9afd92248e"
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
    "revision": "37b9e1bcbdfba499e8f731d3d6c030a2"
  },
  {
    "url": "assets/js/10.js",
    "revision": "4dd78d0c263cfa70883b3267ae80a8a8"
  },
  {
    "url": "assets/js/100.js",
    "revision": "26c47907366179290b955a9712d27a85"
  },
  {
    "url": "assets/js/101.js",
    "revision": "30b3dffed73351e575772e606f9ff556"
  },
  {
    "url": "assets/js/102.js",
    "revision": "bb2ad0c55d1749a738e2d8bb9698bca6"
  },
  {
    "url": "assets/js/103.js",
    "revision": "4cbe5ccb9cb6674faf0904e1c2af6bf7"
  },
  {
    "url": "assets/js/104.js",
    "revision": "82874b32cc584e8208571e361c185261"
  },
  {
    "url": "assets/js/105.js",
    "revision": "eb8929b54b5ebc671e41a4770d69a255"
  },
  {
    "url": "assets/js/106.js",
    "revision": "e58e697c77d548265e07c4140a5d696d"
  },
  {
    "url": "assets/js/107.js",
    "revision": "d654bab331a1f64a1b93c8d6064a657b"
  },
  {
    "url": "assets/js/108.js",
    "revision": "d2f030f3976eab83e732d0cbfb1f9f31"
  },
  {
    "url": "assets/js/109.js",
    "revision": "3c49f993e32119fc13c1f99e6eccf305"
  },
  {
    "url": "assets/js/11.js",
    "revision": "63ea49ff31e87ec1fee8c621c0170605"
  },
  {
    "url": "assets/js/110.js",
    "revision": "15f03707255abeb7ae1ec0176eda2344"
  },
  {
    "url": "assets/js/111.js",
    "revision": "59282004e02e745e40d6002ee6794044"
  },
  {
    "url": "assets/js/112.js",
    "revision": "ae4a8cbf9a972defb416165c9994279b"
  },
  {
    "url": "assets/js/113.js",
    "revision": "93318d09129455010439fed93b6aa810"
  },
  {
    "url": "assets/js/114.js",
    "revision": "3daf74cc073d30605c885b9fae8749ce"
  },
  {
    "url": "assets/js/115.js",
    "revision": "2e71166b2fe0ca01854ff086fb9e0843"
  },
  {
    "url": "assets/js/116.js",
    "revision": "e754205536ce0fe006a13192f9368a22"
  },
  {
    "url": "assets/js/117.js",
    "revision": "94f396303bd2e5c3a6eb4311420e29c0"
  },
  {
    "url": "assets/js/118.js",
    "revision": "9bc0c5c8187843f2060e99f9676dad5c"
  },
  {
    "url": "assets/js/119.js",
    "revision": "19edba8d39741730eed1715e5116e809"
  },
  {
    "url": "assets/js/12.js",
    "revision": "e42f11e087ecbbbf0b5da5edb670fb62"
  },
  {
    "url": "assets/js/120.js",
    "revision": "05711a34be08ba014ac709becab2de63"
  },
  {
    "url": "assets/js/121.js",
    "revision": "f4ba5a247857dca1c0ea41612ad1b50f"
  },
  {
    "url": "assets/js/122.js",
    "revision": "33c995cca691b4971c872af2476fb7d9"
  },
  {
    "url": "assets/js/123.js",
    "revision": "7682cbf9ce969dac5aeb6da2a6574f95"
  },
  {
    "url": "assets/js/124.js",
    "revision": "1f403d4d69a699a37390f03bb149144a"
  },
  {
    "url": "assets/js/125.js",
    "revision": "7fe1b88c8cb3671b3127e342f39465cf"
  },
  {
    "url": "assets/js/126.js",
    "revision": "163fa06d87e95af10dd57e8f27835412"
  },
  {
    "url": "assets/js/127.js",
    "revision": "174128b8c60362339ec1594c1f5dd9df"
  },
  {
    "url": "assets/js/128.js",
    "revision": "9f00ed3464b70d72fb86e2744c763728"
  },
  {
    "url": "assets/js/129.js",
    "revision": "c97a2aab4337332c54ee5d0fadd58ceb"
  },
  {
    "url": "assets/js/13.js",
    "revision": "aaeb10a64f0656142a5cf11e68bf20e6"
  },
  {
    "url": "assets/js/130.js",
    "revision": "a065efd639768a46e44b309584168670"
  },
  {
    "url": "assets/js/131.js",
    "revision": "4bf962b6f75c47be12273d1d14fa3259"
  },
  {
    "url": "assets/js/132.js",
    "revision": "45e72cab77666b00e9561f236eb9511b"
  },
  {
    "url": "assets/js/133.js",
    "revision": "7e1f99ad5425d98316c7b221c6003837"
  },
  {
    "url": "assets/js/134.js",
    "revision": "4482674001be272ade5aec7731b3885d"
  },
  {
    "url": "assets/js/135.js",
    "revision": "86c3bf4dabb2ccc4dd4d400b24bdb18f"
  },
  {
    "url": "assets/js/136.js",
    "revision": "61da89aeed2778f72a3960a27c37d09a"
  },
  {
    "url": "assets/js/137.js",
    "revision": "ce282a25e9ea4bde49da3729add8c70e"
  },
  {
    "url": "assets/js/138.js",
    "revision": "8ae6c4705971d9d04e0fda6ec3a4ad37"
  },
  {
    "url": "assets/js/139.js",
    "revision": "28ab00bef00f2097fe9e7819234fc655"
  },
  {
    "url": "assets/js/14.js",
    "revision": "3cd90972f09097493c88432b5754d9a1"
  },
  {
    "url": "assets/js/140.js",
    "revision": "35556482929ec27e4ad6a5bff52de053"
  },
  {
    "url": "assets/js/141.js",
    "revision": "9f9a47a0c0184504ae95a1174d7d011d"
  },
  {
    "url": "assets/js/142.js",
    "revision": "1bf218570b884fa8b9fc21f63e4d7d62"
  },
  {
    "url": "assets/js/143.js",
    "revision": "4a8c875befdb9677465fa98770f34515"
  },
  {
    "url": "assets/js/144.js",
    "revision": "fd5bfb7aaff3a3df00a0f8fb8857850d"
  },
  {
    "url": "assets/js/145.js",
    "revision": "be2e795d6a58337b630090b977a88a1b"
  },
  {
    "url": "assets/js/146.js",
    "revision": "10c95af5d01a6aea725b0b91d90f01c0"
  },
  {
    "url": "assets/js/147.js",
    "revision": "20e09b4db532c7e07358e7df3d3189ad"
  },
  {
    "url": "assets/js/148.js",
    "revision": "8c26400b18334d55de5b90e5d1db8b73"
  },
  {
    "url": "assets/js/149.js",
    "revision": "2dfcd12f97b8b3513188fb01c2670ea2"
  },
  {
    "url": "assets/js/15.js",
    "revision": "61c112324c0248c11cf051cd5513791f"
  },
  {
    "url": "assets/js/150.js",
    "revision": "0fbab2975334e3938ff2aa79578378b9"
  },
  {
    "url": "assets/js/151.js",
    "revision": "1e450f0fdf99a87f7ed8bcd51b4b421d"
  },
  {
    "url": "assets/js/152.js",
    "revision": "7bf5f2375cf649de0e1962ffe8e10e65"
  },
  {
    "url": "assets/js/153.js",
    "revision": "043c4425f890951c0d7ca7157b33db0d"
  },
  {
    "url": "assets/js/154.js",
    "revision": "738951118ad771a19555a3625e30f24a"
  },
  {
    "url": "assets/js/155.js",
    "revision": "b1b7d47019f8fbe7d6522b41286d7fa4"
  },
  {
    "url": "assets/js/156.js",
    "revision": "3d55b49c095ff398e2565dcc5a81b606"
  },
  {
    "url": "assets/js/157.js",
    "revision": "f458276c9a2671d1d41a420a6db89bdc"
  },
  {
    "url": "assets/js/158.js",
    "revision": "3276b06e0fdf5ad8946069b02a9000fa"
  },
  {
    "url": "assets/js/159.js",
    "revision": "17d46e0aeebae8a2bcd48e26a1a6bf5e"
  },
  {
    "url": "assets/js/16.js",
    "revision": "7e327d4759e8aa0bf11ff581b24e6d54"
  },
  {
    "url": "assets/js/160.js",
    "revision": "d097a04a7bc05848b1429f5bd6dd3002"
  },
  {
    "url": "assets/js/161.js",
    "revision": "aed1565a8c64ba0845037ad0da70aea1"
  },
  {
    "url": "assets/js/162.js",
    "revision": "354a5f92a97382bcc4adc744aee62bcd"
  },
  {
    "url": "assets/js/163.js",
    "revision": "534ac2bf0d6620201a9dd4a1a5faa89f"
  },
  {
    "url": "assets/js/164.js",
    "revision": "ae918034f13f0f0fd6aa5930830c0423"
  },
  {
    "url": "assets/js/165.js",
    "revision": "270b1b0f1a2ee0d9ebf6db5c679f9430"
  },
  {
    "url": "assets/js/166.js",
    "revision": "c397b9bf6be47aeb17ab1d040a9f9da0"
  },
  {
    "url": "assets/js/167.js",
    "revision": "63303415cc6f4847b73b55f53d27e869"
  },
  {
    "url": "assets/js/168.js",
    "revision": "bc2d0492feaf3e2a9a841907058079d5"
  },
  {
    "url": "assets/js/169.js",
    "revision": "6cc9e592970df1127d5bec6851672ba5"
  },
  {
    "url": "assets/js/17.js",
    "revision": "044b746f58f67b68cef47f0e874c1844"
  },
  {
    "url": "assets/js/170.js",
    "revision": "08325b3cfbe9aac10698727d8fa0a46b"
  },
  {
    "url": "assets/js/171.js",
    "revision": "7d192be16e6f6c11ce40792c1c8763a3"
  },
  {
    "url": "assets/js/172.js",
    "revision": "af87a60a3efa473e3790c847fd5b7f69"
  },
  {
    "url": "assets/js/173.js",
    "revision": "26ce9aeedf3d11bbb8af2e7ca3621fc2"
  },
  {
    "url": "assets/js/174.js",
    "revision": "c1c545468d93304b77b063a320b95153"
  },
  {
    "url": "assets/js/175.js",
    "revision": "b2cdbc679be13b850416dbcc91cbc642"
  },
  {
    "url": "assets/js/176.js",
    "revision": "d0a7b5c18823dd87bbb3273c6674a86b"
  },
  {
    "url": "assets/js/177.js",
    "revision": "7e2aec12012e7b43be10a292ecb836bb"
  },
  {
    "url": "assets/js/178.js",
    "revision": "490b83f036ca46d4b9844ad30d39818d"
  },
  {
    "url": "assets/js/179.js",
    "revision": "0d2d35bbf081c26447d0eea683f46b17"
  },
  {
    "url": "assets/js/18.js",
    "revision": "1d5400ba88c0195c8292dfef54a99224"
  },
  {
    "url": "assets/js/180.js",
    "revision": "ac635400a282f68411b3dc49903a1238"
  },
  {
    "url": "assets/js/181.js",
    "revision": "2f96479c31d38e060f2eedc492caaa6e"
  },
  {
    "url": "assets/js/182.js",
    "revision": "a878f0ff1bab346df55e299ae22654f2"
  },
  {
    "url": "assets/js/183.js",
    "revision": "e65312ca403300f361d88d3a5d9d49ee"
  },
  {
    "url": "assets/js/184.js",
    "revision": "b0dae1e65c84712442299d62835ee021"
  },
  {
    "url": "assets/js/185.js",
    "revision": "0fc62fe7097b782b49b9d7d029ba9035"
  },
  {
    "url": "assets/js/186.js",
    "revision": "931bce0106f4d2a0f0f115bec755dca2"
  },
  {
    "url": "assets/js/187.js",
    "revision": "2f5b664993ff861266c3b1ef02f41764"
  },
  {
    "url": "assets/js/188.js",
    "revision": "4b6f5a5b8cc270096b618449e979614f"
  },
  {
    "url": "assets/js/189.js",
    "revision": "00f46192311f54f1b59aadf4a4f15140"
  },
  {
    "url": "assets/js/19.js",
    "revision": "949019e8fe266f00c96ab6cd576bf707"
  },
  {
    "url": "assets/js/190.js",
    "revision": "d2511f5167400bc84aa8028980b95d6b"
  },
  {
    "url": "assets/js/191.js",
    "revision": "9b79b89067344503f0ba19b0bbe5bff8"
  },
  {
    "url": "assets/js/192.js",
    "revision": "a0a5e59cd6d3f6580b7eefd230e4b033"
  },
  {
    "url": "assets/js/193.js",
    "revision": "49b91e1d3e9bb67753bcf16e3218235b"
  },
  {
    "url": "assets/js/194.js",
    "revision": "f80586c775b11af3992b7c165814f846"
  },
  {
    "url": "assets/js/195.js",
    "revision": "f91e5fd25f282fe18f7ee60520101e8b"
  },
  {
    "url": "assets/js/196.js",
    "revision": "c42d4bb428bc43f0e120ce12b9cc8663"
  },
  {
    "url": "assets/js/197.js",
    "revision": "9638d36e9794322d3bc97611cf59d925"
  },
  {
    "url": "assets/js/198.js",
    "revision": "9d0dc0435e60ba2def1f9750324d15c6"
  },
  {
    "url": "assets/js/199.js",
    "revision": "ade782cca69676c89d0ea6720a96dceb"
  },
  {
    "url": "assets/js/2.js",
    "revision": "311c8afeb5cb001302c07bcd15990435"
  },
  {
    "url": "assets/js/20.js",
    "revision": "7310ba3b45e031d67e34bbd7e42e6257"
  },
  {
    "url": "assets/js/200.js",
    "revision": "f9a11a45778ec027198d6810e49e2737"
  },
  {
    "url": "assets/js/201.js",
    "revision": "000e070f6f0814139bf267662c172907"
  },
  {
    "url": "assets/js/202.js",
    "revision": "52108e320727a2f6bf635117045d863d"
  },
  {
    "url": "assets/js/203.js",
    "revision": "3424eddeeae81f22195830c3ac65d972"
  },
  {
    "url": "assets/js/204.js",
    "revision": "8018ac443ec11c6d5a3247cbc3e9a90b"
  },
  {
    "url": "assets/js/205.js",
    "revision": "1bd62e22252851613520f66e2f360fab"
  },
  {
    "url": "assets/js/206.js",
    "revision": "9e0aedff876c202b531929d5399114a6"
  },
  {
    "url": "assets/js/207.js",
    "revision": "3df319e9bcfd3e8d15b22afa276ae7fa"
  },
  {
    "url": "assets/js/208.js",
    "revision": "5d7eeb5baf6f5736393699ad74a4567f"
  },
  {
    "url": "assets/js/209.js",
    "revision": "40ee60895aa7ebc53e4707ed51e4482c"
  },
  {
    "url": "assets/js/21.js",
    "revision": "216891b4284c606f6c7bbf44666f46bc"
  },
  {
    "url": "assets/js/210.js",
    "revision": "cf377044be88280d462859d027ae47fc"
  },
  {
    "url": "assets/js/211.js",
    "revision": "7880a42b67606cc998319a4bb4c0ef83"
  },
  {
    "url": "assets/js/212.js",
    "revision": "20701bbbb4a34fd3ea2cc61150e18e07"
  },
  {
    "url": "assets/js/213.js",
    "revision": "11d83018e9d76deb566377c45ac0f5cf"
  },
  {
    "url": "assets/js/214.js",
    "revision": "7fac1086f28f9e7e45971549eecad8cd"
  },
  {
    "url": "assets/js/215.js",
    "revision": "6b172ccd8f8bfffcf069961fcf87493d"
  },
  {
    "url": "assets/js/216.js",
    "revision": "d154bdc662e13526ec1b597e9122e525"
  },
  {
    "url": "assets/js/217.js",
    "revision": "e935e9eb3d94ea830685af6220365fa2"
  },
  {
    "url": "assets/js/218.js",
    "revision": "169076576c7750f80aced2c46167b160"
  },
  {
    "url": "assets/js/219.js",
    "revision": "0dd0c07b3c231e0b101288bc92138e0e"
  },
  {
    "url": "assets/js/22.js",
    "revision": "80b1fb688fb16402e3d6a6308f8affbc"
  },
  {
    "url": "assets/js/220.js",
    "revision": "54c27a2dc259aac62106580cf1e95cf2"
  },
  {
    "url": "assets/js/221.js",
    "revision": "dc00e5ad1b47ff91251ea4db6aae93c0"
  },
  {
    "url": "assets/js/222.js",
    "revision": "6eef3bb54cf090539c647bf8083a6f99"
  },
  {
    "url": "assets/js/223.js",
    "revision": "8c5bbbed55390d81c8046590ab3ee5c6"
  },
  {
    "url": "assets/js/224.js",
    "revision": "264839fd02a98b10ada0cf9408f2a540"
  },
  {
    "url": "assets/js/225.js",
    "revision": "c571148de60f258ad563b41d6068bd66"
  },
  {
    "url": "assets/js/226.js",
    "revision": "7b9fa9741e5abce26aaaf96c005ba9fa"
  },
  {
    "url": "assets/js/227.js",
    "revision": "34d7e937454a72610824fe96b8a84f98"
  },
  {
    "url": "assets/js/228.js",
    "revision": "cc4aa01e33d2e0cc4256a732946dbc4a"
  },
  {
    "url": "assets/js/229.js",
    "revision": "404a0c2060b46490a2ca9cf869483ad2"
  },
  {
    "url": "assets/js/23.js",
    "revision": "812476e223861bb603cd47be8ba9cded"
  },
  {
    "url": "assets/js/230.js",
    "revision": "1e0f307d028944ba40c69250a3d6f0f5"
  },
  {
    "url": "assets/js/231.js",
    "revision": "6ad4d6169f3bf0ceb036932521bfcfd6"
  },
  {
    "url": "assets/js/232.js",
    "revision": "74d484ba65c6c474dafd79d94bedb371"
  },
  {
    "url": "assets/js/233.js",
    "revision": "7d4b5eeecd31a0f2afd90054851d83b4"
  },
  {
    "url": "assets/js/234.js",
    "revision": "7bd35abeaca5dbbdb48fe6d0b3a5831b"
  },
  {
    "url": "assets/js/235.js",
    "revision": "e6bed0275f2bd4c9aad58503df166e29"
  },
  {
    "url": "assets/js/236.js",
    "revision": "0541d3f56b3ca3eb257f37bb52a1fd31"
  },
  {
    "url": "assets/js/237.js",
    "revision": "a9ae3d0146bf0416cb5007af62aacf6e"
  },
  {
    "url": "assets/js/238.js",
    "revision": "6e48d79f2b9d430b743150658821c912"
  },
  {
    "url": "assets/js/239.js",
    "revision": "9c2d7dbfc1c12b7bbe1ed89eca57a7c3"
  },
  {
    "url": "assets/js/24.js",
    "revision": "71f51667cae1dfcf793391942e986e32"
  },
  {
    "url": "assets/js/240.js",
    "revision": "7bd7c917435662e7fffb585298911fbb"
  },
  {
    "url": "assets/js/241.js",
    "revision": "b6ac380039f62fcf2a5e2df3b39aa630"
  },
  {
    "url": "assets/js/242.js",
    "revision": "7afc5d36d3e92c8f8a21c7c8776065c2"
  },
  {
    "url": "assets/js/243.js",
    "revision": "cad451ff0b4e40a09d46be757eb1d7b1"
  },
  {
    "url": "assets/js/244.js",
    "revision": "ad5b24c88f88ccf0fb2d0fe1ddedbde8"
  },
  {
    "url": "assets/js/245.js",
    "revision": "d517f8c66f5cb8ef357d912ba71bbb9b"
  },
  {
    "url": "assets/js/246.js",
    "revision": "09e11519d2b40287c0d1537651d856ca"
  },
  {
    "url": "assets/js/247.js",
    "revision": "619731524efe2238c1cc5c5e95103a7d"
  },
  {
    "url": "assets/js/248.js",
    "revision": "c93fc630871d9a26c3731741811cdd8f"
  },
  {
    "url": "assets/js/249.js",
    "revision": "c13787ee560fba0e8e73f3de5b24b353"
  },
  {
    "url": "assets/js/25.js",
    "revision": "6c538f938b0639b6e21372170f0b9f17"
  },
  {
    "url": "assets/js/250.js",
    "revision": "f69cb7cf513335157c07cb8086a47bd1"
  },
  {
    "url": "assets/js/251.js",
    "revision": "b47a683b12a7ea802ebd1840b68f64ff"
  },
  {
    "url": "assets/js/252.js",
    "revision": "79173b7096de42fb342a0caa68b25bbe"
  },
  {
    "url": "assets/js/253.js",
    "revision": "31274a5e016b92e9f87253285b8e9043"
  },
  {
    "url": "assets/js/254.js",
    "revision": "2b59542da3cf8da8b77333d3fd78d0d1"
  },
  {
    "url": "assets/js/255.js",
    "revision": "1019e8f05e5d7fa39c7a4b7e59ec161d"
  },
  {
    "url": "assets/js/256.js",
    "revision": "7e7bbf6749cdb515089932449f78714e"
  },
  {
    "url": "assets/js/257.js",
    "revision": "9d9ab6c33536f453a6dc8c92370b3a0d"
  },
  {
    "url": "assets/js/258.js",
    "revision": "7c1426a56c0f38d544bbfb72ef95c47b"
  },
  {
    "url": "assets/js/259.js",
    "revision": "f6c298199004d25db429e503ba38a5f6"
  },
  {
    "url": "assets/js/26.js",
    "revision": "47ac04a6936cae8e8e2a6ccf1f4d8bc4"
  },
  {
    "url": "assets/js/260.js",
    "revision": "2a7b573d338baf2f093bb1b93d7b93b0"
  },
  {
    "url": "assets/js/261.js",
    "revision": "d782527ee7f6100a938b28e6426f68be"
  },
  {
    "url": "assets/js/262.js",
    "revision": "a95ad6d6638e83d4383c44292eb653eb"
  },
  {
    "url": "assets/js/263.js",
    "revision": "83b1644d7146c09fbc282c3f47da2a49"
  },
  {
    "url": "assets/js/264.js",
    "revision": "7f1fac6d1a3e97f26434011ce9121548"
  },
  {
    "url": "assets/js/265.js",
    "revision": "33fe2637769dc11f6808fc4e8958fc50"
  },
  {
    "url": "assets/js/266.js",
    "revision": "e8a480f48246e291e45cb26773328076"
  },
  {
    "url": "assets/js/267.js",
    "revision": "2d16fa09eb7118273c21649dab59bc63"
  },
  {
    "url": "assets/js/268.js",
    "revision": "6e5b61b0bfc848cecd247ff8012d6015"
  },
  {
    "url": "assets/js/269.js",
    "revision": "8da17f37b0931a550bf2e593aa2af564"
  },
  {
    "url": "assets/js/27.js",
    "revision": "e91d98e7d9d7e032941fbe7ff6c444db"
  },
  {
    "url": "assets/js/270.js",
    "revision": "4273e7442bd05ee1c3241fa0422ad6da"
  },
  {
    "url": "assets/js/271.js",
    "revision": "5fa9c6a147f3c2f16b5b00b18294c752"
  },
  {
    "url": "assets/js/272.js",
    "revision": "e5e97f38b157ea97a7e92af07e18f6e7"
  },
  {
    "url": "assets/js/273.js",
    "revision": "4507ef1f77bf13d760c761a5c0625a3a"
  },
  {
    "url": "assets/js/274.js",
    "revision": "d5e4128059e03359e2d7e87b326e352d"
  },
  {
    "url": "assets/js/275.js",
    "revision": "b5c9ce860eecf96d4aac6cbe0641a1f4"
  },
  {
    "url": "assets/js/276.js",
    "revision": "771ee279a10542e42d7b22df6ffe92b1"
  },
  {
    "url": "assets/js/277.js",
    "revision": "230b3cbf6990a4ef82e2c5aba976ca3f"
  },
  {
    "url": "assets/js/278.js",
    "revision": "087aaa74a6aef92b1a0074e2c4241b53"
  },
  {
    "url": "assets/js/279.js",
    "revision": "aae24091e41f68efd0cd15a8b4067d36"
  },
  {
    "url": "assets/js/28.js",
    "revision": "28c9c3a8c548292b221b958e210cf172"
  },
  {
    "url": "assets/js/280.js",
    "revision": "ca9be0b231ad2605ea711697db199cc8"
  },
  {
    "url": "assets/js/281.js",
    "revision": "d1c9359590dd596d2e85523ed722131c"
  },
  {
    "url": "assets/js/282.js",
    "revision": "ad989fc2b96704a89b9253948e71b9f8"
  },
  {
    "url": "assets/js/283.js",
    "revision": "7e5c2e422d195d3fa52bddcc4a59a8c7"
  },
  {
    "url": "assets/js/284.js",
    "revision": "8e400f1a1e46d2b4b200fac4656d7334"
  },
  {
    "url": "assets/js/285.js",
    "revision": "73552ba71a0fd89e33216166d9926e6b"
  },
  {
    "url": "assets/js/286.js",
    "revision": "707a9ea16b98f589d24a66d978cc4c42"
  },
  {
    "url": "assets/js/287.js",
    "revision": "8924202a2fd6c1ed15edb4868a68721a"
  },
  {
    "url": "assets/js/288.js",
    "revision": "69bf5b35e6307fedbf841c671779527a"
  },
  {
    "url": "assets/js/289.js",
    "revision": "1c06d7f0521fbf73fa78ef15dcc70bf8"
  },
  {
    "url": "assets/js/29.js",
    "revision": "9c4887259ad280acee49474280c31562"
  },
  {
    "url": "assets/js/290.js",
    "revision": "2873d80ca692361dfdaaacfac5b5ee97"
  },
  {
    "url": "assets/js/291.js",
    "revision": "028a4142556aa19682dd1296d7d1367f"
  },
  {
    "url": "assets/js/292.js",
    "revision": "3d712b21e61e2bbe0583518e93d96d5f"
  },
  {
    "url": "assets/js/293.js",
    "revision": "eb16c5836af1b398bbe4169017e170b6"
  },
  {
    "url": "assets/js/294.js",
    "revision": "46a93d71d8a965d0121f4e200d531d4c"
  },
  {
    "url": "assets/js/295.js",
    "revision": "ce696e2cecd7fd7c25a3823fae55aaa8"
  },
  {
    "url": "assets/js/296.js",
    "revision": "20de973e62fc138b23e7fa7c2e63a5bb"
  },
  {
    "url": "assets/js/297.js",
    "revision": "668f3ad51407b86610bf16e0a8e21f94"
  },
  {
    "url": "assets/js/298.js",
    "revision": "16c7655a88859abe69836a48d5fb252f"
  },
  {
    "url": "assets/js/299.js",
    "revision": "4cf41a0ef172a3e2a6921029b4569f1d"
  },
  {
    "url": "assets/js/30.js",
    "revision": "797145ad50b134913b1511d252554458"
  },
  {
    "url": "assets/js/300.js",
    "revision": "9657fbbe31e55139ca8865ae8c13727d"
  },
  {
    "url": "assets/js/301.js",
    "revision": "aec39320e545c67f3f4f77f8ba0cf1ae"
  },
  {
    "url": "assets/js/302.js",
    "revision": "25b42b5dc85784e7f487a1400a68a5f7"
  },
  {
    "url": "assets/js/303.js",
    "revision": "fea6c1c654446d35d1eedd9018ee5afa"
  },
  {
    "url": "assets/js/304.js",
    "revision": "d5f793e2d75127e122109ec96142a29b"
  },
  {
    "url": "assets/js/305.js",
    "revision": "d5067d831dfddd91e120e79c1fb74957"
  },
  {
    "url": "assets/js/306.js",
    "revision": "847bf5b7db79be7cd866917e25637962"
  },
  {
    "url": "assets/js/307.js",
    "revision": "31d4e1b2e24123484c3c0c6510e33cfd"
  },
  {
    "url": "assets/js/308.js",
    "revision": "5d2f812da83ce51c007ae598a605ad26"
  },
  {
    "url": "assets/js/309.js",
    "revision": "c8cbcc1d4aded95534cea4ec77359e22"
  },
  {
    "url": "assets/js/31.js",
    "revision": "55ac48e31024dbf36ee63e2eea997b82"
  },
  {
    "url": "assets/js/310.js",
    "revision": "11b42b07b092c4d95c5709fe43cda824"
  },
  {
    "url": "assets/js/311.js",
    "revision": "79230f0599fd0e9c01917faff56f7bf7"
  },
  {
    "url": "assets/js/312.js",
    "revision": "f2453f17d52cbb161c2870d88584f932"
  },
  {
    "url": "assets/js/313.js",
    "revision": "f9df840c52a6e440593fc2da986e2345"
  },
  {
    "url": "assets/js/314.js",
    "revision": "4f3619cf83dc191ec5b33de1c83ea134"
  },
  {
    "url": "assets/js/315.js",
    "revision": "6f0d490073aee35ff444c5da649a6c91"
  },
  {
    "url": "assets/js/316.js",
    "revision": "7cc02c564ef373c556760e377c142a69"
  },
  {
    "url": "assets/js/317.js",
    "revision": "4eca636daa7d5ddba15d4fabd547a5fd"
  },
  {
    "url": "assets/js/318.js",
    "revision": "cdf9e6fe3691e50a71620ec6b92b52ea"
  },
  {
    "url": "assets/js/319.js",
    "revision": "aa358d49883a7b2900a9db12c5ee95c9"
  },
  {
    "url": "assets/js/32.js",
    "revision": "1e58ffafe8c16db876023e7e45511a2c"
  },
  {
    "url": "assets/js/320.js",
    "revision": "199deb4f2bfe7ff6561c79ac1def8177"
  },
  {
    "url": "assets/js/321.js",
    "revision": "ecb74a33ec041c5eaac2717aef2117cb"
  },
  {
    "url": "assets/js/322.js",
    "revision": "ab941fdadbdf1d17b82992fa383c35ee"
  },
  {
    "url": "assets/js/323.js",
    "revision": "33a707b148b9ec760d0aa09bb887e48c"
  },
  {
    "url": "assets/js/324.js",
    "revision": "897ffeca9a363e3077cd13a47b717fc3"
  },
  {
    "url": "assets/js/325.js",
    "revision": "bd51e1fccde38948f91685d9cafcd878"
  },
  {
    "url": "assets/js/326.js",
    "revision": "612641f168223be6ecb70332acf38b7b"
  },
  {
    "url": "assets/js/327.js",
    "revision": "d72e922339431999b1d468117475da2e"
  },
  {
    "url": "assets/js/328.js",
    "revision": "4057ea3740e619e6db2d5210a1e3af22"
  },
  {
    "url": "assets/js/329.js",
    "revision": "fb3b3f5bcad952d5a8755df281a4ee92"
  },
  {
    "url": "assets/js/33.js",
    "revision": "b100c6a22f8e1d74ed6ad40d82b483dc"
  },
  {
    "url": "assets/js/330.js",
    "revision": "7d3e6deab7e8f96e2afeb30cd67ec521"
  },
  {
    "url": "assets/js/331.js",
    "revision": "ce084ce0f20213549a88ab1658d44ef2"
  },
  {
    "url": "assets/js/332.js",
    "revision": "dd96ed4efeda60fa279fe9f9e2761eef"
  },
  {
    "url": "assets/js/333.js",
    "revision": "719a22f48832212a79b97bfbab6c8e14"
  },
  {
    "url": "assets/js/334.js",
    "revision": "b37bad92d7019bafcb5ea1beaa9eb775"
  },
  {
    "url": "assets/js/335.js",
    "revision": "f320ec58f12b18b99e74ef8836419860"
  },
  {
    "url": "assets/js/336.js",
    "revision": "7820bf5bf3d62ad0ee7c02d8815c3339"
  },
  {
    "url": "assets/js/337.js",
    "revision": "d0db800bef00d1413b1e9365cc6249fc"
  },
  {
    "url": "assets/js/338.js",
    "revision": "f70f37c9c4eae80ff32fea35c014cd18"
  },
  {
    "url": "assets/js/339.js",
    "revision": "f4278d4bea5db833f1cd03dcd7c72177"
  },
  {
    "url": "assets/js/34.js",
    "revision": "1195d39b21f3eca1a468ec9ef74190c0"
  },
  {
    "url": "assets/js/340.js",
    "revision": "3de0473508c80033ee468599ee81a467"
  },
  {
    "url": "assets/js/341.js",
    "revision": "920d02cc99057df03503346679a2b9c2"
  },
  {
    "url": "assets/js/342.js",
    "revision": "fbd5523e3c75d5af8d1b23830b887e0e"
  },
  {
    "url": "assets/js/343.js",
    "revision": "8b961e82446dab5f6c4264eb429b3fd2"
  },
  {
    "url": "assets/js/344.js",
    "revision": "acac4a2009f3d2244c1f627a552a862a"
  },
  {
    "url": "assets/js/345.js",
    "revision": "659102d9ca96e5e5260cd32c8b608467"
  },
  {
    "url": "assets/js/346.js",
    "revision": "d9666e08e82cba3a8a9f0d43b86e81d8"
  },
  {
    "url": "assets/js/347.js",
    "revision": "f6d8dc873a04c5470de911052115492e"
  },
  {
    "url": "assets/js/348.js",
    "revision": "f5edff11143b387268a5316e2812ad85"
  },
  {
    "url": "assets/js/349.js",
    "revision": "8ec0504bcf386177e8d1d49caad74abf"
  },
  {
    "url": "assets/js/35.js",
    "revision": "09fd2d85bc6922497f0ff18a07d6ffbe"
  },
  {
    "url": "assets/js/350.js",
    "revision": "5da83ecda5cfd898cd140d26e0c9152b"
  },
  {
    "url": "assets/js/351.js",
    "revision": "f0f7c87bd076e1dbc3d7766e7b7bf114"
  },
  {
    "url": "assets/js/352.js",
    "revision": "86bd4b01b751de9942691eb60fb403eb"
  },
  {
    "url": "assets/js/353.js",
    "revision": "0bc15bf253ee0376f55c7196e1ae9d0f"
  },
  {
    "url": "assets/js/354.js",
    "revision": "95a362a7b5c3ada0ae8000919022fd5e"
  },
  {
    "url": "assets/js/355.js",
    "revision": "3fd6aec975f02e4a152495667187de9c"
  },
  {
    "url": "assets/js/356.js",
    "revision": "6cebe308e6fd311867ee5aa950e60896"
  },
  {
    "url": "assets/js/357.js",
    "revision": "93a5d799641007ce8866c484cb2b7e01"
  },
  {
    "url": "assets/js/358.js",
    "revision": "8acb482a5edb22d297a58351fe1a4e73"
  },
  {
    "url": "assets/js/359.js",
    "revision": "263cfd897bcb6c784fdcee1870fd96f1"
  },
  {
    "url": "assets/js/36.js",
    "revision": "d916af946c66ba7d079c3662f51a171b"
  },
  {
    "url": "assets/js/360.js",
    "revision": "e67317cb22d2e520bb13c3702745c217"
  },
  {
    "url": "assets/js/361.js",
    "revision": "4b94308f8cdd89b9527ece996627d4a7"
  },
  {
    "url": "assets/js/362.js",
    "revision": "6f33fcc36f1ab28862062d7a2aaf300c"
  },
  {
    "url": "assets/js/363.js",
    "revision": "745e6112a7682e5a721a0edb1232076e"
  },
  {
    "url": "assets/js/364.js",
    "revision": "8c0b5f8d4ece70294c844bbb3e11bfc3"
  },
  {
    "url": "assets/js/365.js",
    "revision": "8acc5e4f3af0053a1b45475c5011a3e1"
  },
  {
    "url": "assets/js/366.js",
    "revision": "cc774ccd333a14f87c25c914fee4a054"
  },
  {
    "url": "assets/js/367.js",
    "revision": "d8aa7690a1ddd9b7a812e598b740e829"
  },
  {
    "url": "assets/js/368.js",
    "revision": "5ae58873b3d4a19387f141094c2b1fda"
  },
  {
    "url": "assets/js/369.js",
    "revision": "d05c5859eee8c0a97edae036e3c3e577"
  },
  {
    "url": "assets/js/37.js",
    "revision": "808731a7160882282bb92514278a5a72"
  },
  {
    "url": "assets/js/370.js",
    "revision": "3c83487adaaa1ab15ab1bcc126806c50"
  },
  {
    "url": "assets/js/371.js",
    "revision": "90df62edffde34b6dd07395daa574a71"
  },
  {
    "url": "assets/js/372.js",
    "revision": "f0a2cc0a75af97e8173e6148c8312439"
  },
  {
    "url": "assets/js/373.js",
    "revision": "8734a73948573bf6093e519a4f962ce8"
  },
  {
    "url": "assets/js/374.js",
    "revision": "8b8c48db772b749fd72b67f23031ef72"
  },
  {
    "url": "assets/js/375.js",
    "revision": "49e73c39f4a1bbd225ae54332aa64afa"
  },
  {
    "url": "assets/js/376.js",
    "revision": "90165e55e0fc8c74a34804b194d72780"
  },
  {
    "url": "assets/js/377.js",
    "revision": "6130d83e0bee1db619b27f4caaad16b0"
  },
  {
    "url": "assets/js/378.js",
    "revision": "8d7dcce8dfb7b1298104cb90d61d0ee5"
  },
  {
    "url": "assets/js/379.js",
    "revision": "10abbca83835f1997a1112d46bc44988"
  },
  {
    "url": "assets/js/38.js",
    "revision": "5e06d0bab689dca6ee9d71acee8169b7"
  },
  {
    "url": "assets/js/380.js",
    "revision": "0452e88ef81daa640cf63395ed7a731b"
  },
  {
    "url": "assets/js/381.js",
    "revision": "6903a203f14c85920496bc57e6bea968"
  },
  {
    "url": "assets/js/382.js",
    "revision": "7bb43cce296752635c0968a29e4192f1"
  },
  {
    "url": "assets/js/383.js",
    "revision": "4feab44a30210dcbea94f175f61830d3"
  },
  {
    "url": "assets/js/384.js",
    "revision": "2c32604c4ceadccf93ff4d87c1c93019"
  },
  {
    "url": "assets/js/385.js",
    "revision": "e9a38014f2992fa55b46c89e49c91bb4"
  },
  {
    "url": "assets/js/386.js",
    "revision": "49a118bd554a207a8cccf575db242ca2"
  },
  {
    "url": "assets/js/387.js",
    "revision": "3978baf0cd94cbe3d8f04a79ae3ffa68"
  },
  {
    "url": "assets/js/388.js",
    "revision": "c692b39ff7bb6882b7d42a485330eb2b"
  },
  {
    "url": "assets/js/389.js",
    "revision": "7c01332eb2f651684c725686f6395d40"
  },
  {
    "url": "assets/js/39.js",
    "revision": "b18f676af87bc0e1c4876832dbfbcf50"
  },
  {
    "url": "assets/js/390.js",
    "revision": "3afe20926b3532a85921ea50d47eb01f"
  },
  {
    "url": "assets/js/391.js",
    "revision": "422e22ad661d21ecabdf2dc4bc96c1ae"
  },
  {
    "url": "assets/js/392.js",
    "revision": "ca33863194956db951b9b837f71908c0"
  },
  {
    "url": "assets/js/393.js",
    "revision": "4631ce99667970eadc7e3b677ff94cde"
  },
  {
    "url": "assets/js/394.js",
    "revision": "7b01309e26d16f66e52e36b36b7d8550"
  },
  {
    "url": "assets/js/395.js",
    "revision": "98ae731c109a360b1d28abd0f7cab7e5"
  },
  {
    "url": "assets/js/396.js",
    "revision": "2ba4e76d87634dbaa19d8b96e39127f0"
  },
  {
    "url": "assets/js/397.js",
    "revision": "c14e0863b47782f83883ca520858f82f"
  },
  {
    "url": "assets/js/398.js",
    "revision": "b410e2b156d6ddac93429bd6fb7e6691"
  },
  {
    "url": "assets/js/399.js",
    "revision": "711df5300698e8af5d1aa2eb108a20eb"
  },
  {
    "url": "assets/js/4.js",
    "revision": "47884528d11349fa536c1a9f505444b1"
  },
  {
    "url": "assets/js/40.js",
    "revision": "080cfb1c9415b60a09c3b2bffb2f8422"
  },
  {
    "url": "assets/js/400.js",
    "revision": "3e2584663e4bae7bef7e6227e5bc0d9a"
  },
  {
    "url": "assets/js/401.js",
    "revision": "2b1e33c4f3897f5138e154af45e68d30"
  },
  {
    "url": "assets/js/402.js",
    "revision": "4f30425abb69476101a626951d2db220"
  },
  {
    "url": "assets/js/403.js",
    "revision": "418021a70d5e598795e38933aa570fb7"
  },
  {
    "url": "assets/js/404.js",
    "revision": "4fb61d12776972036103ee86b794e889"
  },
  {
    "url": "assets/js/405.js",
    "revision": "82e753f56dadc6c9eb91b90815d1b1c8"
  },
  {
    "url": "assets/js/406.js",
    "revision": "fa4aa8b6e72929c0d9e7c739d5f76e34"
  },
  {
    "url": "assets/js/407.js",
    "revision": "d6e02778265183e717cc26b7e43bcc77"
  },
  {
    "url": "assets/js/408.js",
    "revision": "d092874eab9ea33cb2e5a324871c99d7"
  },
  {
    "url": "assets/js/409.js",
    "revision": "4e8fe372a202e1e44916f4d0b1cca41d"
  },
  {
    "url": "assets/js/41.js",
    "revision": "e4bd4fcc6072bf23015859146b2d0a1a"
  },
  {
    "url": "assets/js/410.js",
    "revision": "349eb26ae685e5ecb190d6f82947e8c7"
  },
  {
    "url": "assets/js/411.js",
    "revision": "8f05f457fcc1df8d03f0a43e04e9e8b1"
  },
  {
    "url": "assets/js/412.js",
    "revision": "dfb890a2c5d51d712cf7889fc6697234"
  },
  {
    "url": "assets/js/413.js",
    "revision": "97c483ad3bfeee355a2e62f97060de27"
  },
  {
    "url": "assets/js/414.js",
    "revision": "9a0a5a88602a366ad72ff2e9542377e1"
  },
  {
    "url": "assets/js/415.js",
    "revision": "3a8368d4a4dfb695d0f31671659640d5"
  },
  {
    "url": "assets/js/416.js",
    "revision": "5061cca219928dd089bb46e1eaaa6875"
  },
  {
    "url": "assets/js/417.js",
    "revision": "e82d1204f23b83c5f2a01da976f46417"
  },
  {
    "url": "assets/js/418.js",
    "revision": "06d1b8b46e798b052952151985ac08d7"
  },
  {
    "url": "assets/js/419.js",
    "revision": "ced641ca7f87e0d123cac22d358d6697"
  },
  {
    "url": "assets/js/42.js",
    "revision": "356c9c94630df90aec0ba28fffe6800e"
  },
  {
    "url": "assets/js/420.js",
    "revision": "c084eeef335f539366d5fbc277841da7"
  },
  {
    "url": "assets/js/421.js",
    "revision": "37e29192cb6ac774e73b7ca45715c2f6"
  },
  {
    "url": "assets/js/422.js",
    "revision": "8737df9fd7bda11e70b6bcd58e323897"
  },
  {
    "url": "assets/js/423.js",
    "revision": "9b3487c75678c7ce6d87b60ce6b3e3ec"
  },
  {
    "url": "assets/js/424.js",
    "revision": "21cec6c348f7e4aa18178d169198fde9"
  },
  {
    "url": "assets/js/425.js",
    "revision": "52e9facbe5a1f0e425b39e3613191663"
  },
  {
    "url": "assets/js/426.js",
    "revision": "0959534bef82b4293fa689cd533127e3"
  },
  {
    "url": "assets/js/427.js",
    "revision": "a42161e7bdce092dbf11e03ed97cb269"
  },
  {
    "url": "assets/js/428.js",
    "revision": "0cfc9ef3e7fa84be1e4a71797727f88e"
  },
  {
    "url": "assets/js/429.js",
    "revision": "350964c9be5ecb1e06246a7e24930c7f"
  },
  {
    "url": "assets/js/43.js",
    "revision": "1b93006593934acccc45edfaea8db053"
  },
  {
    "url": "assets/js/430.js",
    "revision": "a4d6c3048aadeedc9744314f024edcd5"
  },
  {
    "url": "assets/js/431.js",
    "revision": "1ca233d4e0b01c5a13f1bb00afb0ce6f"
  },
  {
    "url": "assets/js/432.js",
    "revision": "6a2147e887aca4532d7c49d5b39fd77e"
  },
  {
    "url": "assets/js/433.js",
    "revision": "56702851e9795188d04127e48bc2b71f"
  },
  {
    "url": "assets/js/434.js",
    "revision": "1befe4081725bb53bf3c1f0aa97e73e3"
  },
  {
    "url": "assets/js/435.js",
    "revision": "87309a7f3d7d15c625834461b175a49f"
  },
  {
    "url": "assets/js/436.js",
    "revision": "81cf424ba55ad99a5b29c859acda36e6"
  },
  {
    "url": "assets/js/437.js",
    "revision": "7659627f8476a5c15b37228e755eaf79"
  },
  {
    "url": "assets/js/438.js",
    "revision": "4295e7ca9f11a96fe95afac51f28bc8e"
  },
  {
    "url": "assets/js/439.js",
    "revision": "4991c60d845588df496202b9ce8d632e"
  },
  {
    "url": "assets/js/44.js",
    "revision": "1b92bdc58f7aa8130b1e7cb455039eb8"
  },
  {
    "url": "assets/js/440.js",
    "revision": "55e88e92dbb862ad2cbb6a584b7d5edc"
  },
  {
    "url": "assets/js/441.js",
    "revision": "43a0cc9b9c7fc7cf576b06762f41acc0"
  },
  {
    "url": "assets/js/442.js",
    "revision": "48f867155276b41602aad3f28bc04aa5"
  },
  {
    "url": "assets/js/443.js",
    "revision": "a36457f3d29c84ab9dfbc5c1f037a0d7"
  },
  {
    "url": "assets/js/444.js",
    "revision": "474d45d287353bd3b8219f3efe36bea1"
  },
  {
    "url": "assets/js/445.js",
    "revision": "95ea83b10d52d79403400bb0eb63a3cc"
  },
  {
    "url": "assets/js/446.js",
    "revision": "9bb53b435a6c74475cdc500623e41f9e"
  },
  {
    "url": "assets/js/447.js",
    "revision": "8c5d86417b177694d0b71a2d3cc8c347"
  },
  {
    "url": "assets/js/448.js",
    "revision": "e1406e0360a29400a0657236463fc87d"
  },
  {
    "url": "assets/js/449.js",
    "revision": "e49f883c3661e83ababc23c235e9dcfe"
  },
  {
    "url": "assets/js/45.js",
    "revision": "ba7a20936946f840058799fa3894b72a"
  },
  {
    "url": "assets/js/450.js",
    "revision": "524e51abd0c95c0a596fb4f7440a6f4a"
  },
  {
    "url": "assets/js/451.js",
    "revision": "7b14631e5c35d06a467e24982478870a"
  },
  {
    "url": "assets/js/452.js",
    "revision": "5c95a012b2a88fbc4f24cedd5a816b9a"
  },
  {
    "url": "assets/js/453.js",
    "revision": "0f6f11876391cfff15aaf638454ccef3"
  },
  {
    "url": "assets/js/454.js",
    "revision": "b2ec3af6433ac746428173138135a6aa"
  },
  {
    "url": "assets/js/455.js",
    "revision": "f8a9e51e7bd25bdd0aec6b26f2e3030c"
  },
  {
    "url": "assets/js/456.js",
    "revision": "b5deffd37b46896ab3cfe47d80983c26"
  },
  {
    "url": "assets/js/457.js",
    "revision": "59af7b6386658191559fd3d3b6e2f5b4"
  },
  {
    "url": "assets/js/458.js",
    "revision": "5d3a74a1a6a90986df7e4c167e8593cc"
  },
  {
    "url": "assets/js/459.js",
    "revision": "974302cb019d918f6f0a3b8df5710a07"
  },
  {
    "url": "assets/js/46.js",
    "revision": "a4c28788887e8c6c90c4b2b3f751cb69"
  },
  {
    "url": "assets/js/460.js",
    "revision": "211a3c53e783230ed55930912c442fb3"
  },
  {
    "url": "assets/js/461.js",
    "revision": "9ae6eb39a720feeaa1c3ade8d4a6a601"
  },
  {
    "url": "assets/js/462.js",
    "revision": "ba00e2a799950f0c1d6c14b84bde07c3"
  },
  {
    "url": "assets/js/463.js",
    "revision": "2e98d257effb07296b867152822fa3e4"
  },
  {
    "url": "assets/js/464.js",
    "revision": "6f6dad137b3c6a97a57203cef423d32d"
  },
  {
    "url": "assets/js/465.js",
    "revision": "fbf4e6852dddfcfe25ff6c317a376ae6"
  },
  {
    "url": "assets/js/466.js",
    "revision": "ae3be38e5d2f177d77f8949f4da2a30d"
  },
  {
    "url": "assets/js/467.js",
    "revision": "0de1f8f9294adcfc34a240e248b0c54f"
  },
  {
    "url": "assets/js/468.js",
    "revision": "908dda5f5a9a82bd0a4b474ca716d3fd"
  },
  {
    "url": "assets/js/469.js",
    "revision": "d6e715e5aa19e36c50f44f131540106e"
  },
  {
    "url": "assets/js/47.js",
    "revision": "4c32bf1e362a9b9b9b6555633267efb8"
  },
  {
    "url": "assets/js/470.js",
    "revision": "38e095138a6c10ab1900d6dbd461ea6a"
  },
  {
    "url": "assets/js/471.js",
    "revision": "f3a5e4a71b1d5f28d4a5981683f50ed5"
  },
  {
    "url": "assets/js/472.js",
    "revision": "4cf8b0d099b9168470051b6fd07297b1"
  },
  {
    "url": "assets/js/473.js",
    "revision": "ec07e0dcd5216a3965a429423bec6231"
  },
  {
    "url": "assets/js/474.js",
    "revision": "5cc7f538439c2f59516bcaa3bd0f7038"
  },
  {
    "url": "assets/js/475.js",
    "revision": "a25556ab1f5447ab9402200e3cba24d3"
  },
  {
    "url": "assets/js/476.js",
    "revision": "644e76714252d5fc876b3b3f26af5c25"
  },
  {
    "url": "assets/js/477.js",
    "revision": "56910c1ca59963ac3c47eaa8bf2fcdac"
  },
  {
    "url": "assets/js/478.js",
    "revision": "620911852621480adf8a8e2e68cf7040"
  },
  {
    "url": "assets/js/479.js",
    "revision": "2354810a6f8cb26c0f1cda78c39ffbf6"
  },
  {
    "url": "assets/js/48.js",
    "revision": "c818ebc56efc1ab83d674dfb452c6f7d"
  },
  {
    "url": "assets/js/480.js",
    "revision": "01192f81f79d7d205e69c8a97994676d"
  },
  {
    "url": "assets/js/481.js",
    "revision": "7245e7a1661c51b5c89c93c622e8d9fc"
  },
  {
    "url": "assets/js/482.js",
    "revision": "c53f62b0fcb3cbb501f3a6d8389bf4e9"
  },
  {
    "url": "assets/js/483.js",
    "revision": "eac41adcc569f7704f9e16a524fb4df7"
  },
  {
    "url": "assets/js/484.js",
    "revision": "7fd52eb725bf3a5831a8221eb296e081"
  },
  {
    "url": "assets/js/485.js",
    "revision": "815b8864fbcb81cd164d51463f1b594f"
  },
  {
    "url": "assets/js/486.js",
    "revision": "1b95f1223987d70a980fcd64621baa6a"
  },
  {
    "url": "assets/js/487.js",
    "revision": "5a7f2587ec215fa998ac52dd9ce7e08a"
  },
  {
    "url": "assets/js/488.js",
    "revision": "af5e09d05fde2d96e40a7fd40e4e1406"
  },
  {
    "url": "assets/js/489.js",
    "revision": "1781f22d25fd8f86ace8064ce8b38819"
  },
  {
    "url": "assets/js/49.js",
    "revision": "cb5d370478e8e1410536aa74211689ff"
  },
  {
    "url": "assets/js/490.js",
    "revision": "d3631507841acd4dd39e21ea399990cb"
  },
  {
    "url": "assets/js/491.js",
    "revision": "8145d675590d60826b416622150db895"
  },
  {
    "url": "assets/js/492.js",
    "revision": "4166edbc111d37fce42ccaafb30c9487"
  },
  {
    "url": "assets/js/493.js",
    "revision": "1704a5ddee705a985f9277b3d23d213e"
  },
  {
    "url": "assets/js/494.js",
    "revision": "c17ccf80177ffacb8fd72e566b561afe"
  },
  {
    "url": "assets/js/495.js",
    "revision": "34d845245f47e9afe8934c55edfec127"
  },
  {
    "url": "assets/js/496.js",
    "revision": "74cae57afca51a527cc7c06ecbe68e3b"
  },
  {
    "url": "assets/js/497.js",
    "revision": "5a4c1141c79dec4c2305cd583dfb42bc"
  },
  {
    "url": "assets/js/498.js",
    "revision": "1d82a364211124ce7a861482bc8e6064"
  },
  {
    "url": "assets/js/499.js",
    "revision": "94b564b789c103097dc9d6afcea6d067"
  },
  {
    "url": "assets/js/5.js",
    "revision": "663ca7790318fbc1c7437609f58c05b8"
  },
  {
    "url": "assets/js/50.js",
    "revision": "27a5ffd3372c6d899996a1193985afac"
  },
  {
    "url": "assets/js/500.js",
    "revision": "d7c558a1a9a265df0d4fa7df22e2888f"
  },
  {
    "url": "assets/js/501.js",
    "revision": "5c2ae99e660df9ed1ab324c7633fd7ed"
  },
  {
    "url": "assets/js/502.js",
    "revision": "ff26ab99407d3991566bc8b3a01b470c"
  },
  {
    "url": "assets/js/503.js",
    "revision": "ce5091f680ec02afdd01e8a7c0d35331"
  },
  {
    "url": "assets/js/504.js",
    "revision": "050e43d5c9065865fd52d508fa9cdda8"
  },
  {
    "url": "assets/js/505.js",
    "revision": "f4469b419a0334fe2ad360ae3ab13911"
  },
  {
    "url": "assets/js/506.js",
    "revision": "4237deda553b4894d70d16fc0f0b83e0"
  },
  {
    "url": "assets/js/507.js",
    "revision": "dd87ff43fb5ee9a22a9bf76118680a2e"
  },
  {
    "url": "assets/js/508.js",
    "revision": "1050db8f447dbb1482e68affcc3635e6"
  },
  {
    "url": "assets/js/509.js",
    "revision": "7bba26e0095d9ee3e2a38c07865250eb"
  },
  {
    "url": "assets/js/51.js",
    "revision": "121f971a959b109eb66c3905f3a40391"
  },
  {
    "url": "assets/js/510.js",
    "revision": "b526887bd1ff6a2859613c3366a5fa0f"
  },
  {
    "url": "assets/js/511.js",
    "revision": "75b6d5de0df9f22176f60d8d352b6ac6"
  },
  {
    "url": "assets/js/512.js",
    "revision": "46be8a089dfe56aa5242bb3882da27f9"
  },
  {
    "url": "assets/js/513.js",
    "revision": "4e3b64432f6bf9cdb54ab53073ce285d"
  },
  {
    "url": "assets/js/514.js",
    "revision": "0889688a8da59d41d0a827e6cf90bf54"
  },
  {
    "url": "assets/js/515.js",
    "revision": "75b2cbd5a7caf27919523a5a5c5b4e8c"
  },
  {
    "url": "assets/js/516.js",
    "revision": "1e2d68e8505899687ec66bb1070b53ba"
  },
  {
    "url": "assets/js/517.js",
    "revision": "6a651280df1b7a6fb474d24253267fc1"
  },
  {
    "url": "assets/js/518.js",
    "revision": "0b72f2d66e6073b6a851b11443e4cb22"
  },
  {
    "url": "assets/js/519.js",
    "revision": "09b6b4cbdb7ce57accc51ea3effb85e0"
  },
  {
    "url": "assets/js/52.js",
    "revision": "2cd1a33b5a3e671f1bfc54f9d5fa6415"
  },
  {
    "url": "assets/js/520.js",
    "revision": "8fa779be38030acc497d07ac14ac23e4"
  },
  {
    "url": "assets/js/521.js",
    "revision": "aa2429fa3f349e43bcaef4e8cf199e40"
  },
  {
    "url": "assets/js/522.js",
    "revision": "2fe351c928f11090af3dc9ecdf4d4260"
  },
  {
    "url": "assets/js/523.js",
    "revision": "98d4bc7d389a9b1e0263f42d23c78418"
  },
  {
    "url": "assets/js/524.js",
    "revision": "03e7b9f47b39f3f8be7a8d14e94c6ad2"
  },
  {
    "url": "assets/js/525.js",
    "revision": "a4f018ca46a1132ea2bb8f6e81be9e29"
  },
  {
    "url": "assets/js/526.js",
    "revision": "c19335b7460d536431651f50b6ed4e02"
  },
  {
    "url": "assets/js/527.js",
    "revision": "6d0de16e14932020141c3a5b6d791976"
  },
  {
    "url": "assets/js/528.js",
    "revision": "5f6e2851b9a798212a9d6404b2fb0486"
  },
  {
    "url": "assets/js/529.js",
    "revision": "3edea53c1692252220c18d093cbc426d"
  },
  {
    "url": "assets/js/53.js",
    "revision": "2bd97282e9f3b7f530791b89e1bee141"
  },
  {
    "url": "assets/js/530.js",
    "revision": "cf004924e8737b21c972e5a530a741c8"
  },
  {
    "url": "assets/js/531.js",
    "revision": "1873a3a56d729c5635d3658e4815d045"
  },
  {
    "url": "assets/js/532.js",
    "revision": "aba17c4b88c8c183d3119d96d2724e84"
  },
  {
    "url": "assets/js/533.js",
    "revision": "55a65c0ba351defbd2d1b5c12c1d9bab"
  },
  {
    "url": "assets/js/534.js",
    "revision": "94e01c9994e880704ce12681301849a3"
  },
  {
    "url": "assets/js/535.js",
    "revision": "0cead874a445ca3951ef832151a8e1ad"
  },
  {
    "url": "assets/js/536.js",
    "revision": "7d966d80757df8199f6c5641770915d2"
  },
  {
    "url": "assets/js/537.js",
    "revision": "4a78ac62c4def42277213aafd7543000"
  },
  {
    "url": "assets/js/538.js",
    "revision": "edb8cb861e5ace7e3a026fd01f25a05d"
  },
  {
    "url": "assets/js/539.js",
    "revision": "18d871a73f011f70634aaddfcbe194a0"
  },
  {
    "url": "assets/js/54.js",
    "revision": "ae85e1dc59e758384ecd23043d843453"
  },
  {
    "url": "assets/js/540.js",
    "revision": "97ead59c3f38ff1984c18f98b7c74c21"
  },
  {
    "url": "assets/js/541.js",
    "revision": "1d00b89d11a3a4f289a9f534a8ff89e5"
  },
  {
    "url": "assets/js/542.js",
    "revision": "1e733b4aa8ceca0e267a82eb4babd394"
  },
  {
    "url": "assets/js/543.js",
    "revision": "4f2511ba472342e0ffd0739107baa02d"
  },
  {
    "url": "assets/js/544.js",
    "revision": "6ad75b0091bd9cca5b35412d9a796310"
  },
  {
    "url": "assets/js/545.js",
    "revision": "69762063a1cff1a59a4aac8d1f2cdafa"
  },
  {
    "url": "assets/js/546.js",
    "revision": "9b9ca50ecc88409b3ffd848deef887e6"
  },
  {
    "url": "assets/js/547.js",
    "revision": "b37a24956dd1b4bb3d6eeaa78cdfff72"
  },
  {
    "url": "assets/js/548.js",
    "revision": "c062de323aa894b3f95dd49050f2e360"
  },
  {
    "url": "assets/js/549.js",
    "revision": "498047555ffb016dbe2a9987742eb45d"
  },
  {
    "url": "assets/js/55.js",
    "revision": "0a956b92648f4b54160a6dc8e4eb7145"
  },
  {
    "url": "assets/js/550.js",
    "revision": "fdb6922669f1a5905aa4f8c919ffd015"
  },
  {
    "url": "assets/js/551.js",
    "revision": "e6e5415591fc94cb6bfbabfc44dc8229"
  },
  {
    "url": "assets/js/552.js",
    "revision": "83a3559179d745e1c547ced6fc28b792"
  },
  {
    "url": "assets/js/553.js",
    "revision": "ce329946561c111ba9a9963908306ea2"
  },
  {
    "url": "assets/js/554.js",
    "revision": "6efc8320ae99320c9449102df16a8a42"
  },
  {
    "url": "assets/js/555.js",
    "revision": "5fadb7e667b38dbcae2a364636ac250c"
  },
  {
    "url": "assets/js/556.js",
    "revision": "32b56a6b7af249827173adabf8b28c92"
  },
  {
    "url": "assets/js/557.js",
    "revision": "ad7dc75bcd4368b231f4c6ca22875ebb"
  },
  {
    "url": "assets/js/558.js",
    "revision": "188e349f0e25488ec8df39d2787ff4a5"
  },
  {
    "url": "assets/js/559.js",
    "revision": "e2f147becccd8c7ceed896138ddb5da7"
  },
  {
    "url": "assets/js/56.js",
    "revision": "0fc2ae492bc054275d68d1008db45378"
  },
  {
    "url": "assets/js/560.js",
    "revision": "178367ad21f8fd6d0104703393eff7fa"
  },
  {
    "url": "assets/js/561.js",
    "revision": "ee3eb7aace488ed8131483d424c6e679"
  },
  {
    "url": "assets/js/562.js",
    "revision": "213bb4f0a5044070a3ef566d5a6860b7"
  },
  {
    "url": "assets/js/563.js",
    "revision": "bacd000f931868f953191cf43fa58957"
  },
  {
    "url": "assets/js/564.js",
    "revision": "77e2fd2cfb8223d3dee04c2d4c6f4a6d"
  },
  {
    "url": "assets/js/565.js",
    "revision": "041210106a8cea3f723158d9c145382a"
  },
  {
    "url": "assets/js/566.js",
    "revision": "7a1f1f950eb454acfa8f4a0ce580e471"
  },
  {
    "url": "assets/js/567.js",
    "revision": "62395956770624173ae7882530255ea2"
  },
  {
    "url": "assets/js/568.js",
    "revision": "8cb9d912f3a86683ab0c0eadac393672"
  },
  {
    "url": "assets/js/569.js",
    "revision": "2802824500ccaf5c5b4e4a3d77e8d25f"
  },
  {
    "url": "assets/js/57.js",
    "revision": "463af3a506bb0debd854887efe1c7fae"
  },
  {
    "url": "assets/js/570.js",
    "revision": "27c4a514cd08315d77f181beb04cd1c4"
  },
  {
    "url": "assets/js/571.js",
    "revision": "bc5bc12669c68865042fd3b0cb632248"
  },
  {
    "url": "assets/js/572.js",
    "revision": "dc95067ede9d55c2d8a20ca268784b22"
  },
  {
    "url": "assets/js/573.js",
    "revision": "40abc2013bb95cf635c92f017c810175"
  },
  {
    "url": "assets/js/574.js",
    "revision": "ad89a8f74bd2103e075ef7211e825d4a"
  },
  {
    "url": "assets/js/575.js",
    "revision": "620830dc701fe6219f2b7452e51cb962"
  },
  {
    "url": "assets/js/576.js",
    "revision": "5d45c923f8e9704c46b36b02cf31b77e"
  },
  {
    "url": "assets/js/577.js",
    "revision": "9af7d2f6af4fd889a2f91635bc64f8bb"
  },
  {
    "url": "assets/js/578.js",
    "revision": "39c0a43bac256b1e8c1035e0abb9c2ae"
  },
  {
    "url": "assets/js/579.js",
    "revision": "ff0d26276501c799d779b960fbb237aa"
  },
  {
    "url": "assets/js/58.js",
    "revision": "f906077c5ec4ee332d55a338117becce"
  },
  {
    "url": "assets/js/580.js",
    "revision": "2b557fd63c2463cdfff52d65c4cbf588"
  },
  {
    "url": "assets/js/581.js",
    "revision": "d86aa24579d3b252536283ab48160e5e"
  },
  {
    "url": "assets/js/582.js",
    "revision": "04e46660ba5efd452ea32ee9594c8bd4"
  },
  {
    "url": "assets/js/583.js",
    "revision": "327a7bc38129edc0f836667afd144a4d"
  },
  {
    "url": "assets/js/584.js",
    "revision": "547dcd0e64a988b727b3f37a2c1e85cd"
  },
  {
    "url": "assets/js/585.js",
    "revision": "39948eda9690d52a36b6147e407f6055"
  },
  {
    "url": "assets/js/586.js",
    "revision": "b269c985b0c4c3b19499f34d81a6535f"
  },
  {
    "url": "assets/js/59.js",
    "revision": "c6f160c0aaa241493daea63eb92d9320"
  },
  {
    "url": "assets/js/6.js",
    "revision": "cd6fab2a979b64378a2e340bd8c27381"
  },
  {
    "url": "assets/js/60.js",
    "revision": "7a5cd59efc61d173fcf007690f1038a1"
  },
  {
    "url": "assets/js/61.js",
    "revision": "4efe7773d7724d9a815bd9be5a838392"
  },
  {
    "url": "assets/js/62.js",
    "revision": "6df01f7b63f30422236da05119fe7f4c"
  },
  {
    "url": "assets/js/63.js",
    "revision": "5535808a0b5c64bfd78c49796203b488"
  },
  {
    "url": "assets/js/64.js",
    "revision": "3e69fb2af47c5f0a4e5bae130ec13bb5"
  },
  {
    "url": "assets/js/65.js",
    "revision": "8cdc36709c9502f00cd528f07cb1ae93"
  },
  {
    "url": "assets/js/66.js",
    "revision": "e61546e00141eda80c2dc4566f8334ec"
  },
  {
    "url": "assets/js/67.js",
    "revision": "789670ac9be03becf058df3cb0e707c9"
  },
  {
    "url": "assets/js/68.js",
    "revision": "77ef9dfd64735ee6c88bafe5cebed528"
  },
  {
    "url": "assets/js/69.js",
    "revision": "2784e77fdefe70d1120ccaea9f77c151"
  },
  {
    "url": "assets/js/7.js",
    "revision": "3dc346047f5445b76213ce59ef668ede"
  },
  {
    "url": "assets/js/70.js",
    "revision": "c33bdbca19fee44f7ae4422bcc40f797"
  },
  {
    "url": "assets/js/71.js",
    "revision": "c105b5cfa96610c726feaa5b01151142"
  },
  {
    "url": "assets/js/72.js",
    "revision": "84b4b653681c86462c21ed6365412764"
  },
  {
    "url": "assets/js/73.js",
    "revision": "84b94625902cf79cfcd1991c47ffbe60"
  },
  {
    "url": "assets/js/74.js",
    "revision": "0392d024da150a02eb365c3bc3ab7c50"
  },
  {
    "url": "assets/js/75.js",
    "revision": "448490e8f42ee4048bb260e0074df1ac"
  },
  {
    "url": "assets/js/76.js",
    "revision": "28d894decad408c10aa4a6d9de4b9e87"
  },
  {
    "url": "assets/js/77.js",
    "revision": "252caa5d863c20a0619659efa5573ede"
  },
  {
    "url": "assets/js/78.js",
    "revision": "ddc699e86d63dd5a3dd924e0e65453cc"
  },
  {
    "url": "assets/js/79.js",
    "revision": "f7965dedc44e4c3916c2cbcd2bbcc243"
  },
  {
    "url": "assets/js/8.js",
    "revision": "649c695805f100d631165abf773a11bd"
  },
  {
    "url": "assets/js/80.js",
    "revision": "7a5ccaf3323cb3174dedbb13bd10caf7"
  },
  {
    "url": "assets/js/81.js",
    "revision": "94f8e28f0f983bf31bc2b9172086a710"
  },
  {
    "url": "assets/js/82.js",
    "revision": "74f536bc044d18f3a61cfbb0d9d72121"
  },
  {
    "url": "assets/js/83.js",
    "revision": "0b6ce44e41efd9a65e38f0335fde20d4"
  },
  {
    "url": "assets/js/84.js",
    "revision": "5ada90c40c086e2a577f3e80140d716d"
  },
  {
    "url": "assets/js/85.js",
    "revision": "3a3f15961db56f33f8fd0bad9124401f"
  },
  {
    "url": "assets/js/86.js",
    "revision": "fb0f201c3cdc5c99666dc9623c2ffef7"
  },
  {
    "url": "assets/js/87.js",
    "revision": "c0131923450e3bffc2b8c62590f2da88"
  },
  {
    "url": "assets/js/88.js",
    "revision": "f7265c02ce8d27bb0c36bc3012ae7323"
  },
  {
    "url": "assets/js/89.js",
    "revision": "549d250eb435a7ca50baf90e24bc3c7e"
  },
  {
    "url": "assets/js/9.js",
    "revision": "c589a6179cd1bfe5ebe3168e9a0e4856"
  },
  {
    "url": "assets/js/90.js",
    "revision": "739627b70b62352089a83fa824655c08"
  },
  {
    "url": "assets/js/91.js",
    "revision": "4a14adc00cc9f40a0f878673076022b8"
  },
  {
    "url": "assets/js/92.js",
    "revision": "e1d77aeb3620e17fa551df600e135b5a"
  },
  {
    "url": "assets/js/93.js",
    "revision": "cd1a1e27bcbbddcbcb9fe38b5734eef1"
  },
  {
    "url": "assets/js/94.js",
    "revision": "fcd1f848e6e4cf1739233957eeb5eb65"
  },
  {
    "url": "assets/js/95.js",
    "revision": "8a18fb0c54c1665b1d391ac55893cadd"
  },
  {
    "url": "assets/js/96.js",
    "revision": "3118b04b266ff73995d86e9d2acce54e"
  },
  {
    "url": "assets/js/97.js",
    "revision": "6ac591f37ed553f19d106b4261a2072f"
  },
  {
    "url": "assets/js/98.js",
    "revision": "4e6e628ddd1572c6cf0e1d644dee231a"
  },
  {
    "url": "assets/js/99.js",
    "revision": "a3eca54b789fac72f07a6ee4a056221c"
  },
  {
    "url": "assets/js/app.js",
    "revision": "cae2a1effbae05378c70ca3c7de52764"
  },
  {
    "url": "assets/js/styles.js",
    "revision": "22f22b49cc901aa95826401f7ce0930c"
  },
  {
    "url": "blog/category/index.html",
    "revision": "63addda654ee50b4928a312ec9dd8334"
  },
  {
    "url": "blog/code/artists/index.html",
    "revision": "4996d9e153ad2d4e7bae9d2d131b71d4"
  },
  {
    "url": "blog/code/asa.sbh.nz/index.html",
    "revision": "b13de00aa69d6474febc231d68c2e30b"
  },
  {
    "url": "blog/code/decrypt/index.html",
    "revision": "22f448391a18cb99ee22c1d4e5ee9475"
  },
  {
    "url": "blog/code/divider/index.html",
    "revision": "a652244ee4b4e16f3d7edbd4410636b1"
  },
  {
    "url": "blog/code/first/index.html",
    "revision": "cc0428a74ed3adda94fb547841c48f58"
  },
  {
    "url": "blog/code/fishbarrel/index.html",
    "revision": "a47518ca234ad3e42ec007e8eba25900"
  },
  {
    "url": "blog/code/indent/index.html",
    "revision": "eb1e5e759ff480a1e94b234fb99f92da"
  },
  {
    "url": "blog/code/index.html",
    "revision": "b331285b4ac2194e3c4fc0350982f9b3"
  },
  {
    "url": "blog/code/ingoa.nz/index.html",
    "revision": "5ee3dfa3b8dfab6052163dc4d99c1799"
  },
  {
    "url": "blog/code/nzondemand/index.html",
    "revision": "9acfa545bf7610d5b42c2a6b6403ca8f"
  },
  {
    "url": "blog/code/picard/index.html",
    "revision": "5d6435fb27e93a62328e221bca5ed942"
  },
  {
    "url": "blog/code/qr/index.html",
    "revision": "9732d8aebb183f157a96cced6341c450"
  },
  {
    "url": "blog/code/tone/index.html",
    "revision": "e7c894473e06657cff999cfbedaace39"
  },
  {
    "url": "blog/code/website/index.html",
    "revision": "4bafbfa6982e88b192583365885cb9fc"
  },
  {
    "url": "blog/code/website/route/index.html",
    "revision": "80a6555444d99ea586d06c63708699e6"
  },
  {
    "url": "blog/code/website/site/index.html",
    "revision": "7e6dd650a37a173574f0c5a21cdf870e"
  },
  {
    "url": "blog/code/xmltv.co.nz/index.html",
    "revision": "006a9052664cc6c2309815c9cc5eb43d"
  },
  {
    "url": "blog/howto/index.html",
    "revision": "29d0bfa95cc116b51fce385d889770b0"
  },
  {
    "url": "blog/howto/intel865/index.html",
    "revision": "8ff9b5aef6ddffc67d737efbb839134e"
  },
  {
    "url": "blog/howto/nexentastor/index.html",
    "revision": "2db3dc1d1e87bcbc220b9263c515de9e"
  },
  {
    "url": "blog/howto/pcloadletter/index.html",
    "revision": "87a23b20bed678d16e01fb4b7118c900"
  },
  {
    "url": "blog/howto/raid5/index.html",
    "revision": "0940b85598c02fd4ab8a9455b644fbc8"
  },
  {
    "url": "blog/index.html",
    "revision": "30109b45b831d166e47b477641168b44"
  },
  {
    "url": "blog/life/anotheryear/index.html",
    "revision": "9910ebc7caba1aa0698a62d9e17c1609"
  },
  {
    "url": "blog/life/birthday/index.html",
    "revision": "658fe57db92062c0856825f1113a41d9"
  },
  {
    "url": "blog/life/blasphemy/index.html",
    "revision": "3dec5de761f71886b87212262c5df8e1"
  },
  {
    "url": "blog/life/blogger/index.html",
    "revision": "7fffdcda66a93212ed459c27710164a8"
  },
  {
    "url": "blog/life/blurry/index.html",
    "revision": "931ec69459b2fe9ed50f5ad00d2ab5b9"
  },
  {
    "url": "blog/life/busyday/index.html",
    "revision": "867d3edc82947e9f9913e78ad8d3b4b5"
  },
  {
    "url": "blog/life/domain/index.html",
    "revision": "a301eb3b08963360f8e82d659db77115"
  },
  {
    "url": "blog/life/exams/index.html",
    "revision": "6458fe543f9f1c5887acda2ac8b5610c"
  },
  {
    "url": "blog/life/food/index.html",
    "revision": "f9af0dc29ea8a65590ac2f5b1505e3c4"
  },
  {
    "url": "blog/life/glenview/index.html",
    "revision": "c69d70eb4b7265182fd50264036d6470"
  },
  {
    "url": "blog/life/headlines/index.html",
    "revision": "f075ad9f3174a56d81f7fdb971bef1b4"
  },
  {
    "url": "blog/life/index.html",
    "revision": "4b8a80037d7fe8f75c5bf4e880ef9702"
  },
  {
    "url": "blog/life/jws/index.html",
    "revision": "720e87af2e9cee0fd68a117ee1290503"
  },
  {
    "url": "blog/life/keyboard/index.html",
    "revision": "da26bf563e6e68745a7502a95ff46709"
  },
  {
    "url": "blog/life/lpi201/index.html",
    "revision": "0c9938776358478c675c0d3a81bf3d39"
  },
  {
    "url": "blog/life/mashup/index.html",
    "revision": "18c5aad1f73a118cab3e7c9698538713"
  },
  {
    "url": "blog/life/motorweb/index.html",
    "revision": "5fa1f8885e4fd2321466df9f4b6cd694"
  },
  {
    "url": "blog/life/nxe/index.html",
    "revision": "3576fe897d47c011b6bd97df582b55ac"
  },
  {
    "url": "blog/life/plates/index.html",
    "revision": "45ee493e226cdff02fa5e5be36c3e5a3"
  },
  {
    "url": "blog/life/queenstown/index.html",
    "revision": "822d6b516dd77a39449afd8f4d2fb29b"
  },
  {
    "url": "blog/life/racism/index.html",
    "revision": "798a3aad3114d6384b5b0053be4c6d3f"
  },
  {
    "url": "blog/life/roads/index.html",
    "revision": "83cb2a019a039dde121eefb6f4ff6ec3"
  },
  {
    "url": "blog/life/roots/index.html",
    "revision": "1d71c1714c9fbbbffa5f5e1345ba3c49"
  },
  {
    "url": "blog/life/scare/index.html",
    "revision": "5dc451cae67c4d4ff5d9000ca9b04d54"
  },
  {
    "url": "blog/life/scary/index.html",
    "revision": "2564df2602858c29aae560a5b89b8a44"
  },
  {
    "url": "blog/life/seti/index.html",
    "revision": "24853ebdf31b16d9e5c37fe145ee2b50"
  },
  {
    "url": "blog/life/skeptical/index.html",
    "revision": "3cc7c0bb988be6b96e705458f8953310"
  },
  {
    "url": "blog/life/skepticzone/index.html",
    "revision": "dd85930c125cb1c60d22254ccd1ed1f1"
  },
  {
    "url": "blog/life/spam/index.html",
    "revision": "43df74e3ffb2d5f6261a0a050a7a414f"
  },
  {
    "url": "blog/life/trademe/index.html",
    "revision": "adc712461b6766ee47fef3936ca32973"
  },
  {
    "url": "blog/life/unforeseen/index.html",
    "revision": "10ba3fbe3ff26dd5cca52bb345864e85"
  },
  {
    "url": "blog/life/wobbly/index.html",
    "revision": "36da961a70761c70c06f8f7835cdfe15"
  },
  {
    "url": "blog/projects/airbag/index.html",
    "revision": "3bd4612d755a6babb481b3189d7655bb"
  },
  {
    "url": "blog/projects/ambilight/index.html",
    "revision": "5741b7852f9ef0b04854870676b5f568"
  },
  {
    "url": "blog/projects/automation/index.html",
    "revision": "5083b5e4d7f10657a4c064fa195e1826"
  },
  {
    "url": "blog/projects/eyes/index.html",
    "revision": "795b1ad3a5b2c14c8341f719c69c7cd2"
  },
  {
    "url": "blog/projects/glitch/index.html",
    "revision": "d04717e4d0940b7c28d4b6cfc8d049a6"
  },
  {
    "url": "blog/projects/hotel/index.html",
    "revision": "3ed12933587b7db5df532400e58e6c06"
  },
  {
    "url": "blog/projects/index.html",
    "revision": "7e7ad19d572641e45a87f9d1d74d6ddb"
  },
  {
    "url": "blog/projects/it100/index.html",
    "revision": "2847b4193eddf7c479750d237044b3e5"
  },
  {
    "url": "blog/projects/microscope/index.html",
    "revision": "79e619d5fd0071ac54dfd8fe30920735"
  },
  {
    "url": "blog/projects/mirror/index.html",
    "revision": "5b01d4e3d2d3009322c5792db2b828ff"
  },
  {
    "url": "blog/projects/picture/index.html",
    "revision": "3b91291e6b1f57ea66e210aa6d5dbf8c"
  },
  {
    "url": "blog/projects/pizza/index.html",
    "revision": "e984d2ecb383b9341c2f983dbe1749a6"
  },
  {
    "url": "blog/projects/podcast/index.html",
    "revision": "9e95d785a88987085dd42d0b90ea7361"
  },
  {
    "url": "blog/projects/reflow/index.html",
    "revision": "5950e546186f4d8bfd4b1f5224032438"
  },
  {
    "url": "blog/projects/sandbox/index.html",
    "revision": "f181dd3550af01152e8c82a550bce4a5"
  },
  {
    "url": "blog/projects/screens/index.html",
    "revision": "15b492d09ef19381e763bdae1856607c"
  },
  {
    "url": "blog/projects/sky/index.html",
    "revision": "41ad7015f9e42ace2e3eb71fe7f8ff1c"
  },
  {
    "url": "blog/projects/starwars/index.html",
    "revision": "e5300e6006a3b37648c17c81f143fae4"
  },
  {
    "url": "blog/projects/xbox/index.html",
    "revision": "60ae3fbc1005817ca18ab0f79916fe7a"
  },
  {
    "url": "blog/random/addresses/index.html",
    "revision": "15859d2b54e46ea9811bac0fdb49ac16"
  },
  {
    "url": "blog/random/alphabet/index.html",
    "revision": "07954c6336a01903f130e0f8d8664d75"
  },
  {
    "url": "blog/random/astrology/index.html",
    "revision": "81262b2e9ba8a42072d41ffcba15679e"
  },
  {
    "url": "blog/random/chicken/index.html",
    "revision": "da13fd391bc1d48beb8e54608d74db69"
  },
  {
    "url": "blog/random/dns/index.html",
    "revision": "ccc33f16d85c1ce79a2b2e46a910e389"
  },
  {
    "url": "blog/random/evp/index.html",
    "revision": "2456049b481831d35d91c8fdab19a222"
  },
  {
    "url": "blog/random/flip/index.html",
    "revision": "da1f58eabe6b0c7e05a0a8d7afc2c4a9"
  },
  {
    "url": "blog/random/honeychurch/index.html",
    "revision": "d370455c3b72ff23c620879c612cf1d1"
  },
  {
    "url": "blog/random/index.html",
    "revision": "ee7e530c740f4179c0c2c76cfd823e10"
  },
  {
    "url": "blog/random/lottery/index.html",
    "revision": "0462f78dadf3da22286b100081697051"
  },
  {
    "url": "blog/random/music/index.html",
    "revision": "848cc6b00a5d10a3fb11d12e994438df"
  },
  {
    "url": "blog/random/octal/index.html",
    "revision": "d642e103af48cbb93628b86f48c9d1a5"
  },
  {
    "url": "blog/random/os/index.html",
    "revision": "392541f46d2921f6de62af4c3d547309"
  },
  {
    "url": "blog/random/propellers/index.html",
    "revision": "3729c5c13349c16bd5b8ef2486d4a0a0"
  },
  {
    "url": "blog/random/robux/index.html",
    "revision": "01dfd1237c1ec6c2015788390068bce5"
  },
  {
    "url": "blog/random/super/index.html",
    "revision": "4268be08571c6e71e75c13d5ce524a22"
  },
  {
    "url": "blog/random/times/index.html",
    "revision": "ff91bcc256496906c87fbfa8d3f7fc0c"
  },
  {
    "url": "blog/random/travel/index.html",
    "revision": "90bed56969d757be3ad5785897b689f6"
  },
  {
    "url": "blog/random/wilhelm/index.html",
    "revision": "b617b561ea1c66cd6f92006554cfbd0a"
  },
  {
    "url": "blog/random/year/index.html",
    "revision": "dc9547c00071c29c39f7ca29f186af00"
  },
  {
    "url": "blog/skepticism/2015/08/16/asa/index.html",
    "revision": "343a3fda72903b7f0a9f7d9d5754a7ec"
  },
  {
    "url": "blog/skepticism/2015/08/16/awards/index.html",
    "revision": "0c4fe665b129f37c50d2ecaca5e16a97"
  },
  {
    "url": "blog/skepticism/2015/08/16/bravo/index.html",
    "revision": "afc65ae88d3dba443a974b86303866ac"
  },
  {
    "url": "blog/skepticism/2015/08/16/index.html",
    "revision": "9de9fae65890cdd4c8b50dccc749cc52"
  },
  {
    "url": "blog/skepticism/2015/08/16/jim/index.html",
    "revision": "b589f44f6e9dc5acde6501f25381f07b"
  },
  {
    "url": "blog/skepticism/2015/08/16/naholo/index.html",
    "revision": "db329b7dcd04f4ff94e63d835d77d689"
  },
  {
    "url": "blog/skepticism/2015/08/16/resene/index.html",
    "revision": "d96f5913c2b42cb3e803b9840b35c27a"
  },
  {
    "url": "blog/skepticism/2015/08/index.html",
    "revision": "f2a10bbff89f866dca0671cff1381d2b"
  },
  {
    "url": "blog/skepticism/2015/09/20/gop/index.html",
    "revision": "d90e68d29c4d14ed75e073a280315793"
  },
  {
    "url": "blog/skepticism/2015/09/20/ignobel/index.html",
    "revision": "507b31ebaa69654efb247a5fac6df70a"
  },
  {
    "url": "blog/skepticism/2015/09/20/index.html",
    "revision": "bf6b2de1c0c27e1eb05275f3d6c04b34"
  },
  {
    "url": "blog/skepticism/2015/09/20/supplements/index.html",
    "revision": "798ea544aad77a2f94699aa7092f931e"
  },
  {
    "url": "blog/skepticism/2015/09/27/ayahuasca/index.html",
    "revision": "9ceb054be0755a2ce089fc1a6b41c957"
  },
  {
    "url": "blog/skepticism/2015/09/27/drought/index.html",
    "revision": "f296a9956039b99f598c264a715355d3"
  },
  {
    "url": "blog/skepticism/2015/09/27/index.html",
    "revision": "bff3befe19d494b4aab81562dd266fd6"
  },
  {
    "url": "blog/skepticism/2015/09/27/lama/index.html",
    "revision": "ca2214edefcb14e3bc5cc4469cef9c54"
  },
  {
    "url": "blog/skepticism/2015/09/27/moon/index.html",
    "revision": "2fc52d27291be772e117b2aeff9e4dfe"
  },
  {
    "url": "blog/skepticism/2015/09/27/scan/index.html",
    "revision": "bd1eccabfdaaf69b8346b9d04b21e698"
  },
  {
    "url": "blog/skepticism/2015/09/index.html",
    "revision": "88a0d5d92eb906dc1dd3c60fece0f55d"
  },
  {
    "url": "blog/skepticism/2015/10/04/ghost/index.html",
    "revision": "88a982227f1e7016f0bc265ab74d0073"
  },
  {
    "url": "blog/skepticism/2015/10/04/haka/index.html",
    "revision": "cbb7c15c8f182ea2bfa4e6f6294e3ce2"
  },
  {
    "url": "blog/skepticism/2015/10/04/index.html",
    "revision": "0cd70818fff1a704aac12f1a3a3ef915"
  },
  {
    "url": "blog/skepticism/2015/10/04/mars/index.html",
    "revision": "6f6aef5c79d64ea436a94d1e149816d2"
  },
  {
    "url": "blog/skepticism/2015/10/04/pharmacy/index.html",
    "revision": "f811b76b479cbf96d877e9b1f1d1020e"
  },
  {
    "url": "blog/skepticism/2015/10/04/prostate/index.html",
    "revision": "06f9ec38b6ef22767e8ac00aeda04f93"
  },
  {
    "url": "blog/skepticism/2015/10/11/armageddon/index.html",
    "revision": "1bc98b0e821e5889ec70dc9c76594265"
  },
  {
    "url": "blog/skepticism/2015/10/11/climate/index.html",
    "revision": "69f42349691d0c87843c6c88a558c46d"
  },
  {
    "url": "blog/skepticism/2015/10/11/ghost/index.html",
    "revision": "012d3423095dfef11c9ed48f213c10c9"
  },
  {
    "url": "blog/skepticism/2015/10/11/index.html",
    "revision": "b163f1680fa718eaa2d7159bbc6f2b4e"
  },
  {
    "url": "blog/skepticism/2015/10/11/magnesleep/index.html",
    "revision": "55cc05e7612b5977f1fc463fe4d43da1"
  },
  {
    "url": "blog/skepticism/2015/10/11/nhs/index.html",
    "revision": "21d18ff1ba6f59ca3d691f6dbb88096d"
  },
  {
    "url": "blog/skepticism/2015/10/11/prophet/index.html",
    "revision": "d8d8067fcfda038a7be2d30309181c20"
  },
  {
    "url": "blog/skepticism/2015/10/index.html",
    "revision": "efa68497275747d69da28258263713d2"
  },
  {
    "url": "blog/skepticism/2015/11/15/end/index.html",
    "revision": "ce80ec5bb6c838388c01f684d965fe68"
  },
  {
    "url": "blog/skepticism/2015/11/15/index.html",
    "revision": "1d298a034a9f33a5a9263407705b2897"
  },
  {
    "url": "blog/skepticism/2015/11/index.html",
    "revision": "5d7223adde0f2bd1e44ee0df51447a97"
  },
  {
    "url": "blog/skepticism/2015/12/13/astrology/index.html",
    "revision": "a03f898273dbf65e8eaa35d823beafaf"
  },
  {
    "url": "blog/skepticism/2015/12/13/cancer/index.html",
    "revision": "fc8aa6a7deb7126422c6af4c1d021f35"
  },
  {
    "url": "blog/skepticism/2015/12/13/chickenpox/index.html",
    "revision": "cdd0eb998264492be0385f7fdca3af21"
  },
  {
    "url": "blog/skepticism/2015/12/13/index.html",
    "revision": "54d15bd27b022c134c42ae592a8fe22a"
  },
  {
    "url": "blog/skepticism/2015/12/13/osteopath/index.html",
    "revision": "e19049ff66921a4b25ab23d77d1c9c0e"
  },
  {
    "url": "blog/skepticism/2015/12/13/priest/index.html",
    "revision": "3cc41f526897c99f2fcbf131a7b90e43"
  },
  {
    "url": "blog/skepticism/2015/12/13/psychic/index.html",
    "revision": "d6b4da3a531666445f377476db091d71"
  },
  {
    "url": "blog/skepticism/2015/12/13/vaccines/index.html",
    "revision": "367f8cb8953dd1ee9aac16d9f6eecda7"
  },
  {
    "url": "blog/skepticism/2015/12/index.html",
    "revision": "9e84c439c7217ddc111dadaa93bf46b4"
  },
  {
    "url": "blog/skepticism/2015/index.html",
    "revision": "96705b3fdbc588cfd01e59598717906f"
  },
  {
    "url": "blog/skepticism/2016/02/07/antioxidant/index.html",
    "revision": "bfaf9ab93ca0d3e781d6973147b3ec41"
  },
  {
    "url": "blog/skepticism/2016/02/07/index.html",
    "revision": "51c6114ea744bb4b6d304156611abb20"
  },
  {
    "url": "blog/skepticism/2016/02/07/kfc/index.html",
    "revision": "16a02aa817046c7260207fe6ecfb31b2"
  },
  {
    "url": "blog/skepticism/2016/02/07/ph/index.html",
    "revision": "aafdac764d5c46e090c797b5c38fc5db"
  },
  {
    "url": "blog/skepticism/2016/02/07/sandy/index.html",
    "revision": "f70a0938740c25dbacd28c8a9b52ca05"
  },
  {
    "url": "blog/skepticism/2016/02/07/sarfati/index.html",
    "revision": "10da9306c3f97fde805d589b61528418"
  },
  {
    "url": "blog/skepticism/2016/02/07/trump/index.html",
    "revision": "37cc9ea9a13dc165f084056bd54f91d6"
  },
  {
    "url": "blog/skepticism/2016/02/14/coins/index.html",
    "revision": "971ce86866b3bd3242b04102d4a40543"
  },
  {
    "url": "blog/skepticism/2016/02/14/fast/index.html",
    "revision": "2bc4fa7eadccd3abbdf0dcfb96689cbf"
  },
  {
    "url": "blog/skepticism/2016/02/14/fluoride/index.html",
    "revision": "b8ae1b9d096072b6603fd690a8690a78"
  },
  {
    "url": "blog/skepticism/2016/02/14/icke/index.html",
    "revision": "e4e6b083b35b67c79024cedbe53760b4"
  },
  {
    "url": "blog/skepticism/2016/02/14/index.html",
    "revision": "59e00ecfd8619846ef8eb53aa3365274"
  },
  {
    "url": "blog/skepticism/2016/02/14/yeti/index.html",
    "revision": "9a7fecf87638fb8f7762d0742b849f3f"
  },
  {
    "url": "blog/skepticism/2016/02/21/homeopathy/index.html",
    "revision": "8955adef4fe8ab293621f7345fd2db47"
  },
  {
    "url": "blog/skepticism/2016/02/21/index.html",
    "revision": "b4f45885156f86e23f42d482ba1e0755"
  },
  {
    "url": "blog/skepticism/2016/02/21/monster/index.html",
    "revision": "e37d2c5f854588a91a09465d96f666dc"
  },
  {
    "url": "blog/skepticism/2016/02/21/scalia/index.html",
    "revision": "2e145e5959f8ecc772ddc3668b407cbd"
  },
  {
    "url": "blog/skepticism/2016/02/21/shane/index.html",
    "revision": "c92afbd5b5e5880f74ea4539be8a6291"
  },
  {
    "url": "blog/skepticism/2016/02/21/texas/index.html",
    "revision": "cb1568210da2566dab5babe365c4391b"
  },
  {
    "url": "blog/skepticism/2016/02/28/acupuncture/index.html",
    "revision": "6643296120e432b5001ecc4a88a567fd"
  },
  {
    "url": "blog/skepticism/2016/02/28/fsm/index.html",
    "revision": "8a86fe0dba05b84aa69b51ee00515867"
  },
  {
    "url": "blog/skepticism/2016/02/28/index.html",
    "revision": "fa87c8c6b1a6564b934808e80049fcdd"
  },
  {
    "url": "blog/skepticism/2016/02/28/iv/index.html",
    "revision": "ef6064b97a5ecbbda18563a8e3d2f13b"
  },
  {
    "url": "blog/skepticism/2016/02/28/natural/index.html",
    "revision": "4fb8cca7714307942ebfb7b4fb1908f5"
  },
  {
    "url": "blog/skepticism/2016/02/28/talc/index.html",
    "revision": "df58c22302c220c23aa55b2329aefc0b"
  },
  {
    "url": "blog/skepticism/2016/02/index.html",
    "revision": "17023850a67b0dbed3c3a3345f572f34"
  },
  {
    "url": "blog/skepticism/2016/03/13/herbs/index.html",
    "revision": "ef873125f311ccb9d90a305873a835e0"
  },
  {
    "url": "blog/skepticism/2016/03/13/index.html",
    "revision": "8d147d682cb3f815a52d51163da6ac8c"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandala/index.html",
    "revision": "1dda353f176090420e0250453addc06d"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandela/index.html",
    "revision": "9a2420937f52af509584ed57b411687c"
  },
  {
    "url": "blog/skepticism/2016/03/13/spray/index.html",
    "revision": "f29fb8021e903b8d688036362747d158"
  },
  {
    "url": "blog/skepticism/2016/03/index.html",
    "revision": "26083e3f72a13e491b8827547a0981b0"
  },
  {
    "url": "blog/skepticism/2016/04/17/charity/index.html",
    "revision": "e30f4432aebd08d77a50fa62efffde90"
  },
  {
    "url": "blog/skepticism/2016/04/17/chiro/index.html",
    "revision": "6f1555b5cc5dcbb4b55cc88792bd1fc0"
  },
  {
    "url": "blog/skepticism/2016/04/17/fluoride/index.html",
    "revision": "d4f5b356a20fb663ceadeff41d24989d"
  },
  {
    "url": "blog/skepticism/2016/04/17/index.html",
    "revision": "07fde829ee69ca3171374a996dca92dd"
  },
  {
    "url": "blog/skepticism/2016/04/17/lotto/index.html",
    "revision": "a8a8381b36314de091ca92bd24914525"
  },
  {
    "url": "blog/skepticism/2016/04/17/mind/index.html",
    "revision": "73838fc09cd47a32642cab57936acf73"
  },
  {
    "url": "blog/skepticism/2016/04/17/whooping/index.html",
    "revision": "9dd66d25b36b22a53c9ee5436aae9cc3"
  },
  {
    "url": "blog/skepticism/2016/04/index.html",
    "revision": "04ad34714a7014c15b58777422d2b844"
  },
  {
    "url": "blog/skepticism/2016/06/05/1080/index.html",
    "revision": "8816dc40719917121e1e25aad9352292"
  },
  {
    "url": "blog/skepticism/2016/06/05/acupuncture/index.html",
    "revision": "e6553a3217343acf08c169610262aaee"
  },
  {
    "url": "blog/skepticism/2016/06/05/family/index.html",
    "revision": "4cfe068e6cb917d3d60c40a70a66b5b5"
  },
  {
    "url": "blog/skepticism/2016/06/05/index.html",
    "revision": "78a00f8b2fcf7be94af891c25ff81180"
  },
  {
    "url": "blog/skepticism/2016/06/05/limbaugh/index.html",
    "revision": "948db3abbf6996a329ea0b7b97c76518"
  },
  {
    "url": "blog/skepticism/2016/06/12/bobby/index.html",
    "revision": "57d90310790c753fe634d453e2ab9d2d"
  },
  {
    "url": "blog/skepticism/2016/06/12/climate/index.html",
    "revision": "0b6a54d723d9e98a3c03939836f45495"
  },
  {
    "url": "blog/skepticism/2016/06/12/index.html",
    "revision": "1a9630d145008b186c766438be427156"
  },
  {
    "url": "blog/skepticism/2016/06/12/pugh/index.html",
    "revision": "6a4b15d1b9759606958d44fcbbcb65e1"
  },
  {
    "url": "blog/skepticism/2016/06/12/savage/index.html",
    "revision": "e085ffb7e6e96d9f908d216cb49abc20"
  },
  {
    "url": "blog/skepticism/2016/06/12/sawdust/index.html",
    "revision": "5ebb2c62104583397c45390cf0e66a76"
  },
  {
    "url": "blog/skepticism/2016/06/19/beauty/index.html",
    "revision": "9cb40866ddb9fc4c289c6ee079873c77"
  },
  {
    "url": "blog/skepticism/2016/06/19/bilderberg/index.html",
    "revision": "2731b75c36f1951fddb1b435313b14fb"
  },
  {
    "url": "blog/skepticism/2016/06/19/cyf/index.html",
    "revision": "20c8079ee0aea437a8dd02de7aa64bd4"
  },
  {
    "url": "blog/skepticism/2016/06/19/holt/index.html",
    "revision": "30023e529eca50ba692649af29537f94"
  },
  {
    "url": "blog/skepticism/2016/06/19/index.html",
    "revision": "b05ca6d312c1747b8ec135b3d96706a4"
  },
  {
    "url": "blog/skepticism/2016/06/19/silver/index.html",
    "revision": "5de8985667a2957f0fd5a3d1a6de56b0"
  },
  {
    "url": "blog/skepticism/2016/06/19/ufo/index.html",
    "revision": "be8ae8bbfc4a7007855da6e4f7d5f480"
  },
  {
    "url": "blog/skepticism/2016/06/26/homeopathy/index.html",
    "revision": "5afd27f1275282bc7f3c49a0a0de71c1"
  },
  {
    "url": "blog/skepticism/2016/06/26/index.html",
    "revision": "9e290b765fa7d345fb807ef8f6914141"
  },
  {
    "url": "blog/skepticism/2016/06/26/robbins/index.html",
    "revision": "4297e0aa5bb607f816f0cab3b14d6e80"
  },
  {
    "url": "blog/skepticism/2016/06/26/selfies/index.html",
    "revision": "1a63a3fe6c4165988e1c4f11e1bb4875"
  },
  {
    "url": "blog/skepticism/2016/06/26/silver/index.html",
    "revision": "65efd4ecbd5ba16241610993c4908532"
  },
  {
    "url": "blog/skepticism/2016/06/26/ufos/index.html",
    "revision": "f10e48cc74696cfa0ce2dab1d680714a"
  },
  {
    "url": "blog/skepticism/2016/06/index.html",
    "revision": "46b5a19ca43acb74ad2f793398682615"
  },
  {
    "url": "blog/skepticism/2016/07/03/glyphosate/index.html",
    "revision": "ccd88c305641c445fc650d564119e19d"
  },
  {
    "url": "blog/skepticism/2016/07/03/gmo/index.html",
    "revision": "080862e2f31225b74413eea0477cbd6c"
  },
  {
    "url": "blog/skepticism/2016/07/03/index.html",
    "revision": "b95ff9d198793995dcdc80fc259db399"
  },
  {
    "url": "blog/skepticism/2016/07/03/jail/index.html",
    "revision": "51d56d31e878860691699430dc0c387d"
  },
  {
    "url": "blog/skepticism/2016/07/03/ken/index.html",
    "revision": "b57cf373ad0808fb458ab87bdaa737b7"
  },
  {
    "url": "blog/skepticism/2016/07/10/ark/index.html",
    "revision": "be611f7d09fa0797866c2b6dff241191"
  },
  {
    "url": "blog/skepticism/2016/07/10/bee/index.html",
    "revision": "f3dc415781fcf63ad5a5dc822d2073d7"
  },
  {
    "url": "blog/skepticism/2016/07/10/index.html",
    "revision": "0d9bcc1f868b00f223237bd73c8cb575"
  },
  {
    "url": "blog/skepticism/2016/07/10/lottery/index.html",
    "revision": "7842eb69e4aae0b8f3851a299e8e2463"
  },
  {
    "url": "blog/skepticism/2016/07/10/murder/index.html",
    "revision": "a1d1911a8ec24816ae634a5a9c6a6f49"
  },
  {
    "url": "blog/skepticism/2016/07/17/dogs/index.html",
    "revision": "b6863520ce2c7b8a5b414a345905da60"
  },
  {
    "url": "blog/skepticism/2016/07/17/fsm/index.html",
    "revision": "1d79d52ec4d28959ef3cf55f5c31a168"
  },
  {
    "url": "blog/skepticism/2016/07/17/fyi/index.html",
    "revision": "694fb38fabbd2afd78e11075ffe47951"
  },
  {
    "url": "blog/skepticism/2016/07/17/index.html",
    "revision": "214c88b399634c102c6cf20be4232d91"
  },
  {
    "url": "blog/skepticism/2016/07/17/natural/index.html",
    "revision": "d923f770eb25ef4b10a850615aee2eb9"
  },
  {
    "url": "blog/skepticism/2016/07/17/pokemon/index.html",
    "revision": "3f0f84aa224eb970b3fb58889797469e"
  },
  {
    "url": "blog/skepticism/2016/07/index.html",
    "revision": "e31e540c8a463b522f6a02a9a7f2a671"
  },
  {
    "url": "blog/skepticism/2016/08/07/icke/index.html",
    "revision": "d09fc13cbe4e844541a8e8937add6cc8"
  },
  {
    "url": "blog/skepticism/2016/08/07/index.html",
    "revision": "2b4b3576531b00115d6f1e89782ff25c"
  },
  {
    "url": "blog/skepticism/2016/08/21/brian/index.html",
    "revision": "baa294e3468c7f19964a5071c5b2264a"
  },
  {
    "url": "blog/skepticism/2016/08/21/chlorine/index.html",
    "revision": "f9fd94a3db538b275c80167f35130f11"
  },
  {
    "url": "blog/skepticism/2016/08/21/index.html",
    "revision": "7655dc7fc004f677a1e52dcfb13eaf1e"
  },
  {
    "url": "blog/skepticism/2016/08/21/murder/index.html",
    "revision": "40efed012787475c63eaab5956a9c19d"
  },
  {
    "url": "blog/skepticism/2016/08/21/superfoods/index.html",
    "revision": "aae0c9750ca4268a8f687956a0cb2319"
  },
  {
    "url": "blog/skepticism/2016/08/21/witch/index.html",
    "revision": "056200350d91be2bd9e73d5b7d734bde"
  },
  {
    "url": "blog/skepticism/2016/08/28/alcohol/index.html",
    "revision": "11a705f01e2d94873e02294039b46150"
  },
  {
    "url": "blog/skepticism/2016/08/28/chiro/index.html",
    "revision": "80f75e71ffdb65e9b7e69b380654d2f8"
  },
  {
    "url": "blog/skepticism/2016/08/28/index.html",
    "revision": "cfaad7f890c9f73b1f26e048aedb0e50"
  },
  {
    "url": "blog/skepticism/2016/08/28/processed/index.html",
    "revision": "c0ff0ce0ea63481a570cd84ef3caba3a"
  },
  {
    "url": "blog/skepticism/2016/08/28/sbh/index.html",
    "revision": "f1d406587c4be4f4262e1848d58e0f34"
  },
  {
    "url": "blog/skepticism/2016/08/index.html",
    "revision": "1a245c0e39717e2d0828a828cf1cec72"
  },
  {
    "url": "blog/skepticism/2016/09/18/altruism/index.html",
    "revision": "2ba5cf1fe17f9b33df8529b440cff1bc"
  },
  {
    "url": "blog/skepticism/2016/09/18/better/index.html",
    "revision": "849aeed864b96b4e9081e5822fbf29e0"
  },
  {
    "url": "blog/skepticism/2016/09/18/homeopathy/index.html",
    "revision": "df12e65fc6d2cc808ffa43ae996a0f7d"
  },
  {
    "url": "blog/skepticism/2016/09/18/index.html",
    "revision": "2e379126fd564e4c16272ba5a9722e13"
  },
  {
    "url": "blog/skepticism/2016/09/18/nonsense/index.html",
    "revision": "f49b6fcba46bc0a9306640751b724e26"
  },
  {
    "url": "blog/skepticism/2016/09/18/trump/index.html",
    "revision": "9c7a32549ff1c4d43d59dc186d9daeb2"
  },
  {
    "url": "blog/skepticism/2016/09/25/clinic/index.html",
    "revision": "52bebafba90f70bab68fd296d8af8061"
  },
  {
    "url": "blog/skepticism/2016/09/25/fluoride/index.html",
    "revision": "07a82f3b169f11eea6ddf6172e5df27d"
  },
  {
    "url": "blog/skepticism/2016/09/25/homeopathy/index.html",
    "revision": "b7e0b425acaa3548b278fd44b3414608"
  },
  {
    "url": "blog/skepticism/2016/09/25/index.html",
    "revision": "641eeaddce46e00c7f49bd5ca6356b2c"
  },
  {
    "url": "blog/skepticism/2016/09/25/murder/index.html",
    "revision": "28aad3e7b08071b7c8727e1878e77795"
  },
  {
    "url": "blog/skepticism/2016/09/index.html",
    "revision": "d09e9951c6e3ace0205e6c4a29ea43af"
  },
  {
    "url": "blog/skepticism/2016/10/21/bigfoot/index.html",
    "revision": "8429f25543c3ed6fbad1e1bec87f096e"
  },
  {
    "url": "blog/skepticism/2016/10/21/breasts/index.html",
    "revision": "efcece981d8f72c4fe9d57b92524c342"
  },
  {
    "url": "blog/skepticism/2016/10/21/index.html",
    "revision": "76a703cedff1c85ab5184fab2d928e7f"
  },
  {
    "url": "blog/skepticism/2016/10/21/medsafe/index.html",
    "revision": "bae66b3f41df2210eabec83ef35f94f9"
  },
  {
    "url": "blog/skepticism/2016/10/21/zenteq/index.html",
    "revision": "8c61a0e8084aeb474f409c6bd9ea6396"
  },
  {
    "url": "blog/skepticism/2016/10/index.html",
    "revision": "464e0d326b738e7492f62f87561e4da5"
  },
  {
    "url": "blog/skepticism/2016/11/13/conference/index.html",
    "revision": "e672c94990b9158c16c328e95a1c02e1"
  },
  {
    "url": "blog/skepticism/2016/11/13/green/index.html",
    "revision": "ae6f2922d9937a889618607a989d0134"
  },
  {
    "url": "blog/skepticism/2016/11/13/index.html",
    "revision": "98f1220877439afbc5ce1ee74de0ce8c"
  },
  {
    "url": "blog/skepticism/2016/11/13/vice/index.html",
    "revision": "77262d16e789a7567d5d400442879b6e"
  },
  {
    "url": "blog/skepticism/2016/11/27/bioptron/index.html",
    "revision": "0585105b2a50d59514eb641a8227c077"
  },
  {
    "url": "blog/skepticism/2016/11/27/conference/index.html",
    "revision": "59d5cd4ad03bceb7bf28b1ee25d8e7ac"
  },
  {
    "url": "blog/skepticism/2016/11/27/earthquake/index.html",
    "revision": "abc36633e5e66adb0d674211cd69ba78"
  },
  {
    "url": "blog/skepticism/2016/11/27/index.html",
    "revision": "b67fb8e8e83920fa00a5f0c323889eb8"
  },
  {
    "url": "blog/skepticism/2016/11/index.html",
    "revision": "fe96d5a05814946edae8de5e6703a325"
  },
  {
    "url": "blog/skepticism/2016/12/04/conference/index.html",
    "revision": "e924cd146ce124b4f781d70e213dde11"
  },
  {
    "url": "blog/skepticism/2016/12/04/index.html",
    "revision": "894842107427f701440f1efdb8327fda"
  },
  {
    "url": "blog/skepticism/2016/12/18/colin/index.html",
    "revision": "bcc08ce3723007a57adb03909a313dd8"
  },
  {
    "url": "blog/skepticism/2016/12/18/fiji/index.html",
    "revision": "635835d2c5dde8a27c5de26a0f31cd1e"
  },
  {
    "url": "blog/skepticism/2016/12/18/index.html",
    "revision": "6220ca4b2e28ca8fcb8ea1e642e010e2"
  },
  {
    "url": "blog/skepticism/2016/12/18/kinesiology/index.html",
    "revision": "a11d2d0e0d5c0144573589a75c412524"
  },
  {
    "url": "blog/skepticism/2016/12/18/mmm/index.html",
    "revision": "d428ea45cc7e801426712a6a74768f3f"
  },
  {
    "url": "blog/skepticism/2016/12/18/nigel/index.html",
    "revision": "75a9f248ea3663153af11974c490b30a"
  },
  {
    "url": "blog/skepticism/2016/12/index.html",
    "revision": "f8f8af6725402f6fb12567df8b956c6e"
  },
  {
    "url": "blog/skepticism/2016/index.html",
    "revision": "8719ee8ad762b33a09b66278bbeeee37"
  },
  {
    "url": "blog/skepticism/2017/01/22/index.html",
    "revision": "77e0f5b19865571cd8b56c5ac5e07e88"
  },
  {
    "url": "blog/skepticism/2017/01/22/scientology/index.html",
    "revision": "0a5667701a35306ed326c028785b2741"
  },
  {
    "url": "blog/skepticism/2017/01/29/creation/index.html",
    "revision": "e5facf719fa28939745da9880b06662d"
  },
  {
    "url": "blog/skepticism/2017/01/29/index.html",
    "revision": "d56a508f5398b37a69aa9e7671c51565"
  },
  {
    "url": "blog/skepticism/2017/01/index.html",
    "revision": "9f831b40f6f33d3b31a1e5523767ec21"
  },
  {
    "url": "blog/skepticism/2017/02/05/fraudster/index.html",
    "revision": "2723185cb8e0ea0f0b127057234ff5f3"
  },
  {
    "url": "blog/skepticism/2017/02/05/gervais/index.html",
    "revision": "e210abc6997da1d7962883d4ce67502f"
  },
  {
    "url": "blog/skepticism/2017/02/05/index.html",
    "revision": "0026c666d8ad61949434716f42bb7440"
  },
  {
    "url": "blog/skepticism/2017/02/05/scientology/index.html",
    "revision": "a997a5bb38b6690895a92e7e924bde3e"
  },
  {
    "url": "blog/skepticism/2017/02/19/homeopathy/index.html",
    "revision": "86325e20c31256046e94eec20cd3f40b"
  },
  {
    "url": "blog/skepticism/2017/02/19/index.html",
    "revision": "b1361fdaa870ec5a9862aae2da342226"
  },
  {
    "url": "blog/skepticism/2017/02/19/lottery/index.html",
    "revision": "d15e91fffad5b1badba43c386a7bd975"
  },
  {
    "url": "blog/skepticism/2017/02/19/vaxxed/index.html",
    "revision": "6a82ce01032b98e962b11626ec4548a0"
  },
  {
    "url": "blog/skepticism/2017/02/19/whales/index.html",
    "revision": "f9886218c3b0d269a8111bb1c57522fc"
  },
  {
    "url": "blog/skepticism/2017/02/index.html",
    "revision": "c5b2fa36897e596e876a142dfaf45b8b"
  },
  {
    "url": "blog/skepticism/2017/03/05/index.html",
    "revision": "09c7d4c51f1175c3b2f20239fb0d7698"
  },
  {
    "url": "blog/skepticism/2017/03/05/rea/index.html",
    "revision": "11bca1d6fa1394292baf4a34b1f32cba"
  },
  {
    "url": "blog/skepticism/2017/03/19/fake/index.html",
    "revision": "daf51d348760d2fbf90486d62c815c7b"
  },
  {
    "url": "blog/skepticism/2017/03/19/index.html",
    "revision": "62a7f0188d76051c6cc7a13f03e9ac94"
  },
  {
    "url": "blog/skepticism/2017/03/19/murder/index.html",
    "revision": "0b4ca8653d6d4e7960e3c082bbdf2aa5"
  },
  {
    "url": "blog/skepticism/2017/03/26/census/index.html",
    "revision": "a222b8c288441e694e51b245b325870d"
  },
  {
    "url": "blog/skepticism/2017/03/26/index.html",
    "revision": "c827f9d225946a2532bc60b2c38eb4da"
  },
  {
    "url": "blog/skepticism/2017/03/26/nzmj/index.html",
    "revision": "45366ce9ff2e2420c3fe5984a2c1a3c4"
  },
  {
    "url": "blog/skepticism/2017/03/26/shaquille/index.html",
    "revision": "6b3594e504290420932c40a475d8201b"
  },
  {
    "url": "blog/skepticism/2017/03/index.html",
    "revision": "836020ac5a604adf5fbfdb1d743a30c4"
  },
  {
    "url": "blog/skepticism/2017/04/02/index.html",
    "revision": "cbad437b66a518b2f7da63b8ac64e5e1"
  },
  {
    "url": "blog/skepticism/2017/04/02/nasa/index.html",
    "revision": "af4f17ab94e0055b91e9445e2b40d029"
  },
  {
    "url": "blog/skepticism/2017/04/02/science/index.html",
    "revision": "091002ee6f1f1f817c9dfd7f6ece1a2b"
  },
  {
    "url": "blog/skepticism/2017/04/02/vaxxed/index.html",
    "revision": "58a9ab2c92a8b3b408e938dfd2f93653"
  },
  {
    "url": "blog/skepticism/2017/04/09/index.html",
    "revision": "9e129608710405996232f61eefecb2fc"
  },
  {
    "url": "blog/skepticism/2017/04/09/tekiri/index.html",
    "revision": "8f4ab3ddf7845bf2ac87fb490977bb62"
  },
  {
    "url": "blog/skepticism/2017/04/09/vaxxed/index.html",
    "revision": "74cd8bdb4294f0a62de598e1ef9e330f"
  },
  {
    "url": "blog/skepticism/2017/04/23/arise/index.html",
    "revision": "262f0c0bb59c453acd42314e0ed80cfe"
  },
  {
    "url": "blog/skepticism/2017/04/23/index.html",
    "revision": "ad2a98bf941ce757854a2671e42cfea8"
  },
  {
    "url": "blog/skepticism/2017/04/23/kelvin/index.html",
    "revision": "7b42172f226d8232243c1bdf0bbcecdc"
  },
  {
    "url": "blog/skepticism/2017/04/index.html",
    "revision": "da67b792c817195eb2e1aab987cb4d3c"
  },
  {
    "url": "blog/skepticism/2017/05/07/cancer/index.html",
    "revision": "6d64caae1aca217d746ce8b568dfad3a"
  },
  {
    "url": "blog/skepticism/2017/05/07/index.html",
    "revision": "1401c4f378384d8582a44a174a75e5bc"
  },
  {
    "url": "blog/skepticism/2017/05/07/nigel/index.html",
    "revision": "a0f637a11ef7d5c30eedba7e6ef31645"
  },
  {
    "url": "blog/skepticism/2017/05/21/blasphemy/index.html",
    "revision": "5013b49ea4e041a573ed76cbafe12d33"
  },
  {
    "url": "blog/skepticism/2017/05/21/flat/index.html",
    "revision": "5541b6cf8db2f0f4be28bbd2936e5e9b"
  },
  {
    "url": "blog/skepticism/2017/05/21/index.html",
    "revision": "560847cfdb02da06f7921172a1953d95"
  },
  {
    "url": "blog/skepticism/2017/05/21/maori/index.html",
    "revision": "20eb176def70d165f15a5fbc606496b5"
  },
  {
    "url": "blog/skepticism/2017/05/index.html",
    "revision": "cad3b35219d39294d734f05462f6fd1c"
  },
  {
    "url": "blog/skepticism/2017/06/04/bigelow/index.html",
    "revision": "591334a65295816e19b23e8d3a44b6f4"
  },
  {
    "url": "blog/skepticism/2017/06/04/climate/index.html",
    "revision": "53643f4193d903b0f75177ab116b526d"
  },
  {
    "url": "blog/skepticism/2017/06/04/hansford/index.html",
    "revision": "ef58904d22ecbe7ce1c9ff859f343c45"
  },
  {
    "url": "blog/skepticism/2017/06/04/index.html",
    "revision": "ee28b41b2ddd16bbeee6abb445f35b96"
  },
  {
    "url": "blog/skepticism/2017/06/04/wasp/index.html",
    "revision": "2a34cfa864e3bb89ee7b665d5e8833bc"
  },
  {
    "url": "blog/skepticism/2017/06/11/colonic/index.html",
    "revision": "db9a45a5b02c3e4319aedd76ab72c864"
  },
  {
    "url": "blog/skepticism/2017/06/11/credulous/index.html",
    "revision": "e8c24738d4ca8999360507e441dd52bd"
  },
  {
    "url": "blog/skepticism/2017/06/11/index.html",
    "revision": "889e30d88661d196976d65edb87b5851"
  },
  {
    "url": "blog/skepticism/2017/06/11/journals/index.html",
    "revision": "88dd90153a0bd6b4dac820be2474a797"
  },
  {
    "url": "blog/skepticism/2017/06/18/breatharians/index.html",
    "revision": "2002c2c62dbf198957e6f183003deaf3"
  },
  {
    "url": "blog/skepticism/2017/06/18/fieldays/index.html",
    "revision": "3cae2412c070a095d310febd4f0ce612"
  },
  {
    "url": "blog/skepticism/2017/06/18/index.html",
    "revision": "47750f7838dcd8808aab15a19b5a3e73"
  },
  {
    "url": "blog/skepticism/2017/06/18/jw/index.html",
    "revision": "30696aed737c7708f018d977ec8726a3"
  },
  {
    "url": "blog/skepticism/2017/06/18/oil/index.html",
    "revision": "453dd25fca02ef79753984bdc920de4a"
  },
  {
    "url": "blog/skepticism/2017/06/index.html",
    "revision": "27343919c5c719965d65896d3c90f60b"
  },
  {
    "url": "blog/skepticism/2017/07/02/baby/index.html",
    "revision": "6abca3e5b87b5bb77401cb5f7baf1c09"
  },
  {
    "url": "blog/skepticism/2017/07/02/index.html",
    "revision": "086dc5204f973e9d77cefa4d17f9ca4f"
  },
  {
    "url": "blog/skepticism/2017/07/02/infowars/index.html",
    "revision": "0ca130687744430b6c954d3b661189b5"
  },
  {
    "url": "blog/skepticism/2017/07/02/scientology/index.html",
    "revision": "c35a644a3ca0605dd8d739039b35755b"
  },
  {
    "url": "blog/skepticism/2017/07/16/bananas/index.html",
    "revision": "ea3c855274330e834cf32147fa772c2c"
  },
  {
    "url": "blog/skepticism/2017/07/16/circles/index.html",
    "revision": "2f32eb451aedcfe9dff8ae9422787ad7"
  },
  {
    "url": "blog/skepticism/2017/07/16/index.html",
    "revision": "946d44adcbc1acfecefac8a2e6f0662f"
  },
  {
    "url": "blog/skepticism/2017/07/16/siggi/index.html",
    "revision": "46e6e723f97afd2bded09e36cd11de0c"
  },
  {
    "url": "blog/skepticism/2017/07/16/vaxxed/index.html",
    "revision": "9aa325881607a62c5f4f287aee2b5e27"
  },
  {
    "url": "blog/skepticism/2017/07/30/bleach/index.html",
    "revision": "258625f479a117cd8b63a015d7206ab9"
  },
  {
    "url": "blog/skepticism/2017/07/30/bluebeam/index.html",
    "revision": "0f3180ddcf4fc1fe9eb8a0c5ce5cb38b"
  },
  {
    "url": "blog/skepticism/2017/07/30/index.html",
    "revision": "e4c66bc20858a3e2a65addbf82f871ed"
  },
  {
    "url": "blog/skepticism/2017/07/30/police/index.html",
    "revision": "4822d2fcf4801c8229e27b98ccc89d9b"
  },
  {
    "url": "blog/skepticism/2017/07/index.html",
    "revision": "c4c362342011f9ab9995d4b978169ad1"
  },
  {
    "url": "blog/skepticism/2017/08/06/conned/index.html",
    "revision": "d3cb73bc0cfb9f3f2798c0151d464236"
  },
  {
    "url": "blog/skepticism/2017/08/06/doll/index.html",
    "revision": "fe3663d064b0a6d4e4d6e97399e45900"
  },
  {
    "url": "blog/skepticism/2017/08/06/index.html",
    "revision": "37c838022970356121140f00f0381596"
  },
  {
    "url": "blog/skepticism/2017/08/06/jacinda/index.html",
    "revision": "3a33f7f85ad4706ac4e8e9f6396fad4e"
  },
  {
    "url": "blog/skepticism/2017/08/06/lotto/index.html",
    "revision": "a9e7bfb4ad6fd4e0332c0cfa129b96f5"
  },
  {
    "url": "blog/skepticism/2017/08/27/index.html",
    "revision": "c6a9e13c78fae2970f2ae783eed4098d"
  },
  {
    "url": "blog/skepticism/2017/08/27/naturopath/index.html",
    "revision": "1cf4eeb2bae1eebbc2058b63a73a10f3"
  },
  {
    "url": "blog/skepticism/2017/08/27/satanic/index.html",
    "revision": "dfd925bab40940d47f4bb3376e3dc80a"
  },
  {
    "url": "blog/skepticism/2017/08/index.html",
    "revision": "64835df117afcff43287a7b7667f57d7"
  },
  {
    "url": "blog/skepticism/2017/09/03/apocalypse/index.html",
    "revision": "0bf96be10f5c1830064078ab89dea8c2"
  },
  {
    "url": "blog/skepticism/2017/09/03/cancer/index.html",
    "revision": "28399d93ba04ff4d21149c061dda116d"
  },
  {
    "url": "blog/skepticism/2017/09/03/index.html",
    "revision": "96b7c4aa892a41721d4d2ec504dd1fb6"
  },
  {
    "url": "blog/skepticism/2017/09/03/rectangle/index.html",
    "revision": "2a251047718822776a3bba03929c1d89"
  },
  {
    "url": "blog/skepticism/2017/09/03/stargate/index.html",
    "revision": "af9d43b2be8124fee6a22788b662534e"
  },
  {
    "url": "blog/skepticism/2017/09/index.html",
    "revision": "febf4ff282fdb1654f030ba3fc4a6bc6"
  },
  {
    "url": "blog/skepticism/2017/10/01/apocalypse/index.html",
    "revision": "df3a04f3aa61704de1271c04b8280ee6"
  },
  {
    "url": "blog/skepticism/2017/10/01/freeman/index.html",
    "revision": "31a3ae4eacc83fd692318044f6e50680"
  },
  {
    "url": "blog/skepticism/2017/10/01/index.html",
    "revision": "7458995e0b94b70fc35d0d8a019b70ab"
  },
  {
    "url": "blog/skepticism/2017/10/01/pharmacy/index.html",
    "revision": "c298e4309c16b02d544cdef8477f2e3e"
  },
  {
    "url": "blog/skepticism/2017/10/08/index.html",
    "revision": "8a6a6a89d144e0735fd2f956082eb79d"
  },
  {
    "url": "blog/skepticism/2017/10/08/pill/index.html",
    "revision": "12cca25e12c032bc450ddad33f8fdc26"
  },
  {
    "url": "blog/skepticism/2017/10/08/qsb/index.html",
    "revision": "6fdc30537bd84629e75f11f7d678ed2f"
  },
  {
    "url": "blog/skepticism/2017/10/08/vegas/index.html",
    "revision": "4b89b05fc35813f91bb2a25318b34c93"
  },
  {
    "url": "blog/skepticism/2017/10/15/doterra/index.html",
    "revision": "688095e9d6c59306110ccee8ba32e384"
  },
  {
    "url": "blog/skepticism/2017/10/15/index.html",
    "revision": "b8feb626615cf08842574e7cea943fc5"
  },
  {
    "url": "blog/skepticism/2017/10/15/lie/index.html",
    "revision": "fe28a99d40886109c9078377171315a4"
  },
  {
    "url": "blog/skepticism/2017/10/15/soap/index.html",
    "revision": "2edecff94c50d484c07c98bae805d791"
  },
  {
    "url": "blog/skepticism/2017/10/index.html",
    "revision": "93e017d57d6333230feab6c90e827385"
  },
  {
    "url": "blog/skepticism/2017/11/05/conference/index.html",
    "revision": "aa733cffc5f8598aa1b6ce1ecf20ccaa"
  },
  {
    "url": "blog/skepticism/2017/11/05/glyphosate/index.html",
    "revision": "a6f04d4d38df22289afe3a403b0dccc5"
  },
  {
    "url": "blog/skepticism/2017/11/05/index.html",
    "revision": "856442c31ea27d3d7175062081500356"
  },
  {
    "url": "blog/skepticism/2017/11/05/stranded/index.html",
    "revision": "8c8aa08a9363fd0a04d9f8fc2a65e074"
  },
  {
    "url": "blog/skepticism/2017/11/05/tracts/index.html",
    "revision": "9e36024bc45ddd8615d3d303dd967416"
  },
  {
    "url": "blog/skepticism/2017/11/12/ghost/index.html",
    "revision": "d39618718cb906e97951a21ebda96049"
  },
  {
    "url": "blog/skepticism/2017/11/12/green/index.html",
    "revision": "0934a8754c031a61242dc300dad08dcc"
  },
  {
    "url": "blog/skepticism/2017/11/12/harassment/index.html",
    "revision": "735e0c98a0cecc05cd3b784216e2606f"
  },
  {
    "url": "blog/skepticism/2017/11/12/index.html",
    "revision": "29106f7c17ae585ed77be0496fb5f25c"
  },
  {
    "url": "blog/skepticism/2017/11/12/libby/index.html",
    "revision": "50b5d01b9661ced0d7bce9907f058fe9"
  },
  {
    "url": "blog/skepticism/2017/11/index.html",
    "revision": "d8350fa1e5837036b89a543e6b68a954"
  },
  {
    "url": "blog/skepticism/2017/12/03/acupuncture/index.html",
    "revision": "930c294a5354716fb3b9c65813a8004b"
  },
  {
    "url": "blog/skepticism/2017/12/03/denialism/index.html",
    "revision": "45c1d25e4559b723d55293d9472c56be"
  },
  {
    "url": "blog/skepticism/2017/12/03/dowsing/index.html",
    "revision": "fe172a7bf8510c82dafa3c1849a2e50e"
  },
  {
    "url": "blog/skepticism/2017/12/03/holes/index.html",
    "revision": "950a234c554080566b8ed3731fcc64d4"
  },
  {
    "url": "blog/skepticism/2017/12/03/index.html",
    "revision": "87b0c3e0c6eb7480a8c4f9ba75781f25"
  },
  {
    "url": "blog/skepticism/2017/12/17/index.html",
    "revision": "34ebac6a2f9df6045cb4e45a635f4a02"
  },
  {
    "url": "blog/skepticism/2017/12/17/nhs/index.html",
    "revision": "9490f4ecef46ec7e4e47792c9e3be615"
  },
  {
    "url": "blog/skepticism/2017/12/17/oto/index.html",
    "revision": "dc6a966db644fba43ad419f0e88f508b"
  },
  {
    "url": "blog/skepticism/2017/12/17/pastafarian/index.html",
    "revision": "84d62b066587c260e3a3fa492d196495"
  },
  {
    "url": "blog/skepticism/2017/12/17/shc/index.html",
    "revision": "1a699505e18f66215d1fa264ea20308b"
  },
  {
    "url": "blog/skepticism/2017/12/17/wellworks/index.html",
    "revision": "89780f21414e958af1d70a4be223f220"
  },
  {
    "url": "blog/skepticism/2017/12/index.html",
    "revision": "6f4a61d664d6a5d7d7d4408cfb69e0f6"
  },
  {
    "url": "blog/skepticism/2017/index.html",
    "revision": "175d3b07f1e1734ef8dc4b5e9e2102e1"
  },
  {
    "url": "blog/skepticism/2018/01/21/grounding/index.html",
    "revision": "e1381cc6b41e39ad3ac5fe4d5787e024"
  },
  {
    "url": "blog/skepticism/2018/01/21/index.html",
    "revision": "e79d7a4b11938d304af627b687f80ac5"
  },
  {
    "url": "blog/skepticism/2018/01/21/naturopath/index.html",
    "revision": "954a83c334f6a7599869ac40d1627ae6"
  },
  {
    "url": "blog/skepticism/2018/01/21/respen/index.html",
    "revision": "1e571ca073463cc9055c6028cf07c73e"
  },
  {
    "url": "blog/skepticism/2018/01/28/bears/index.html",
    "revision": "2eac9a99eef93b3e6fd30fc36c5b88dc"
  },
  {
    "url": "blog/skepticism/2018/01/28/index.html",
    "revision": "2880a8ef7140977f9803396962314e46"
  },
  {
    "url": "blog/skepticism/2018/01/28/peppering/index.html",
    "revision": "9827401fb1451678d70015c69b696ecb"
  },
  {
    "url": "blog/skepticism/2018/01/28/pet/index.html",
    "revision": "90cfedeb8c6eaa6c735f5c599e9eac7a"
  },
  {
    "url": "blog/skepticism/2018/01/28/quake/index.html",
    "revision": "c5a3b98fa8e303be07a4d391d267595c"
  },
  {
    "url": "blog/skepticism/2018/01/28/scientology/index.html",
    "revision": "d509ff614886cf97509c1922ceb389db"
  },
  {
    "url": "blog/skepticism/2018/01/index.html",
    "revision": "64f5b2315f09c41adaf1c453ae291a7b"
  },
  {
    "url": "blog/skepticism/2018/02/11/asa/index.html",
    "revision": "85807744d043c8f5f88b2a244623c542"
  },
  {
    "url": "blog/skepticism/2018/02/11/cannabis/index.html",
    "revision": "00ec28eab4d549c86e8b806952cfb378"
  },
  {
    "url": "blog/skepticism/2018/02/11/elon/index.html",
    "revision": "5eea0f7661dfea688ef889e1b4e900ca"
  },
  {
    "url": "blog/skepticism/2018/02/11/homeopathy/index.html",
    "revision": "ea92bdd79d2db0bab52f63ad1a524134"
  },
  {
    "url": "blog/skepticism/2018/02/11/index.html",
    "revision": "c9a78cf3c19896606d60faf99c6860f7"
  },
  {
    "url": "blog/skepticism/2018/02/11/water/index.html",
    "revision": "dfae87f37c7d886b87be43e563253924"
  },
  {
    "url": "blog/skepticism/2018/02/25/crisis/index.html",
    "revision": "fa3d1c15240748203e936ca01e291974"
  },
  {
    "url": "blog/skepticism/2018/02/25/eggs/index.html",
    "revision": "26c605fceef1aeaed1ea6dc5e21525ef"
  },
  {
    "url": "blog/skepticism/2018/02/25/fsm/index.html",
    "revision": "ec9dd80030fe848a7f8b904cd743b36a"
  },
  {
    "url": "blog/skepticism/2018/02/25/index.html",
    "revision": "7e775463836df0382d85df54d390631b"
  },
  {
    "url": "blog/skepticism/2018/02/25/number/index.html",
    "revision": "8668939cc1e6c0f7661e74eade8a2c1f"
  },
  {
    "url": "blog/skepticism/2018/02/25/quackery/index.html",
    "revision": "5c146c83fac8e94862ef51a98d9c83d9"
  },
  {
    "url": "blog/skepticism/2018/02/index.html",
    "revision": "3ac5e0c77d8f6b269f2f3eb2ed32a538"
  },
  {
    "url": "blog/skepticism/2018/03/11/ai/index.html",
    "revision": "3b4ae82b5500e838343e41bdcf7803f9"
  },
  {
    "url": "blog/skepticism/2018/03/11/index.html",
    "revision": "fd277da035fed91fbcc4efb2cce48dcc"
  },
  {
    "url": "blog/skepticism/2018/03/11/radiation/index.html",
    "revision": "6946a0d78c7cec33eb3fbb23ab1d83d2"
  },
  {
    "url": "blog/skepticism/2018/03/11/reiki/index.html",
    "revision": "5fe8d2b61418be0578ecade6ca595472"
  },
  {
    "url": "blog/skepticism/2018/03/11/ufo/index.html",
    "revision": "3cd2eb8448a03cdaa6f60dd6e98112ed"
  },
  {
    "url": "blog/skepticism/2018/03/18/ghost/index.html",
    "revision": "e865f5ad8652fa12300591297a114211"
  },
  {
    "url": "blog/skepticism/2018/03/18/index.html",
    "revision": "10eef5cfbe1073191eb2204a0c67ca58"
  },
  {
    "url": "blog/skepticism/2018/03/18/psychic/index.html",
    "revision": "a62b4912d3003b1d374774d2ad7317c9"
  },
  {
    "url": "blog/skepticism/2018/03/18/quack/index.html",
    "revision": "1046ee04825109945a9397dce48d14d7"
  },
  {
    "url": "blog/skepticism/2018/03/18/radiation/index.html",
    "revision": "bb51acd0cbdf1be8c253d08b803ea864"
  },
  {
    "url": "blog/skepticism/2018/03/index.html",
    "revision": "50af0ff4ab2c8051bdf9e46da57cd97c"
  },
  {
    "url": "blog/skepticism/2018/04/08/calocurb/index.html",
    "revision": "8cfc058c07b29ac2505376506a253801"
  },
  {
    "url": "blog/skepticism/2018/04/08/cam/index.html",
    "revision": "4641c305b73f9b1dceae2d72468b5bef"
  },
  {
    "url": "blog/skepticism/2018/04/08/index.html",
    "revision": "3d2e2d48610b53fa769b5f3615f71c94"
  },
  {
    "url": "blog/skepticism/2018/04/08/psychic/index.html",
    "revision": "2f7f3113f142ef5eee2a5a17de1219a9"
  },
  {
    "url": "blog/skepticism/2018/04/08/vaccines/index.html",
    "revision": "857e539bd07e553937f83ce0f7ad1f2c"
  },
  {
    "url": "blog/skepticism/2018/04/15/coffee/index.html",
    "revision": "b8950a6c9d105e15631cd6e541f0e49c"
  },
  {
    "url": "blog/skepticism/2018/04/15/ignorance/index.html",
    "revision": "4953e4ddef5b6a5e9458da5b3e1f7bcd"
  },
  {
    "url": "blog/skepticism/2018/04/15/index.html",
    "revision": "ccb057ac3045c83ed0f0e2a2e016c916"
  },
  {
    "url": "blog/skepticism/2018/04/15/nasa/index.html",
    "revision": "9dfbb35fb853c8d80091b0548b687e68"
  },
  {
    "url": "blog/skepticism/2018/04/15/tapu/index.html",
    "revision": "1c33fd638d072b9b9e0009d87a3fddf1"
  },
  {
    "url": "blog/skepticism/2018/04/29/google/index.html",
    "revision": "7b0966082c86ed7a22272b3ab42f3928"
  },
  {
    "url": "blog/skepticism/2018/04/29/homeopathy/index.html",
    "revision": "245975bbcf18f7b1d05470a2f7092563"
  },
  {
    "url": "blog/skepticism/2018/04/29/index.html",
    "revision": "6eef961e62ea17cd4eb0995b5a1e6b44"
  },
  {
    "url": "blog/skepticism/2018/04/29/ken/index.html",
    "revision": "b61e5abefcf4215386b20fba76721a29"
  },
  {
    "url": "blog/skepticism/2018/04/29/v2k/index.html",
    "revision": "10d2e05d5c50ac5f63d8c4254a02dcb0"
  },
  {
    "url": "blog/skepticism/2018/04/index.html",
    "revision": "5842eb724a5890e42bc18b6a0737dd47"
  },
  {
    "url": "blog/skepticism/2018/05/13/astrology/index.html",
    "revision": "b8b10d3eb3b5a6624422f5c53486c9ea"
  },
  {
    "url": "blog/skepticism/2018/05/13/crystals/index.html",
    "revision": "8b50eecfd4f1230cefcfd19e9f4d41e6"
  },
  {
    "url": "blog/skepticism/2018/05/13/dawkins/index.html",
    "revision": "ccf82a6decfedefbd718a887f392cd9b"
  },
  {
    "url": "blog/skepticism/2018/05/13/index.html",
    "revision": "a2b84109ff02d83637a25d19a42bba63"
  },
  {
    "url": "blog/skepticism/2018/05/13/kangen/index.html",
    "revision": "bfab0de4869f79c846b3b88a4d56bdfe"
  },
  {
    "url": "blog/skepticism/2018/05/13/vitamins/index.html",
    "revision": "c7fbeeea241db6a3a737d4385f0de916"
  },
  {
    "url": "blog/skepticism/2018/05/27/flat/index.html",
    "revision": "41835b754c750d45331eeb842ddb471d"
  },
  {
    "url": "blog/skepticism/2018/05/27/index.html",
    "revision": "aafd32cd82f3d21ccaf48ca7f3426d34"
  },
  {
    "url": "blog/skepticism/2018/05/27/kangen/index.html",
    "revision": "ff77cf5edf1da974f205921ad1d5f764"
  },
  {
    "url": "blog/skepticism/2018/05/27/ness/index.html",
    "revision": "efd58d43181f5604c1c1de0b026aa562"
  },
  {
    "url": "blog/skepticism/2018/05/27/oz/index.html",
    "revision": "a6701b2cdacbc37e425563b228b62b8d"
  },
  {
    "url": "blog/skepticism/2018/05/27/psychic/index.html",
    "revision": "a681bfc1dd0aa41522dcb895d9182842"
  },
  {
    "url": "blog/skepticism/2018/05/index.html",
    "revision": "c6c313b8aaa16e41cca364708cd56632"
  },
  {
    "url": "blog/skepticism/2018/06/10/astrology/index.html",
    "revision": "13ac4f9b08de0f83dbf777ae81e2edc6"
  },
  {
    "url": "blog/skepticism/2018/06/10/index.html",
    "revision": "7c7981c1e242d20ef8134f700f5b767e"
  },
  {
    "url": "blog/skepticism/2018/06/10/nhs/index.html",
    "revision": "457756f8d3ea0ad6eb2672e23bfb254c"
  },
  {
    "url": "blog/skepticism/2018/06/10/shakti/index.html",
    "revision": "a8e831296cefec1d68783030e3c096d1"
  },
  {
    "url": "blog/skepticism/2018/06/10/weetbix/index.html",
    "revision": "0afa50fa50066ff2e5f031a6dc4dd652"
  },
  {
    "url": "blog/skepticism/2018/06/24/blasphemy/index.html",
    "revision": "d05b0d3dec0ebf15cc7c5ff68f8cd780"
  },
  {
    "url": "blog/skepticism/2018/06/24/cannabis/index.html",
    "revision": "e2b8d3d027df56704039f397170aabc2"
  },
  {
    "url": "blog/skepticism/2018/06/24/hotdog/index.html",
    "revision": "872fbb30b559546503909e67b477aa6e"
  },
  {
    "url": "blog/skepticism/2018/06/24/index.html",
    "revision": "51f3e83789897a595fd2764f84236327"
  },
  {
    "url": "blog/skepticism/2018/06/24/led/index.html",
    "revision": "2f73fa56aa3e62dcacc05477faf3f6f8"
  },
  {
    "url": "blog/skepticism/2018/06/index.html",
    "revision": "b7b49b8c971412ddc832ea7adbbf2660"
  },
  {
    "url": "blog/skepticism/2018/07/08/bullet/index.html",
    "revision": "8a86a38bd650fb2d4beebec4383b0bfe"
  },
  {
    "url": "blog/skepticism/2018/07/08/chiros/index.html",
    "revision": "823d2501096efbf7924fc828cc423e5f"
  },
  {
    "url": "blog/skepticism/2018/07/08/hiv/index.html",
    "revision": "ff890072f83a76b24680816d60e5380c"
  },
  {
    "url": "blog/skepticism/2018/07/08/hrv/index.html",
    "revision": "1965f6d1d5b3785afa881132a3565a98"
  },
  {
    "url": "blog/skepticism/2018/07/08/index.html",
    "revision": "8e4ac4641ee1dfe9a2ba4b28627e30e8"
  },
  {
    "url": "blog/skepticism/2018/07/22/cancer/index.html",
    "revision": "7450b1e176a5c9225c4233ff37540f82"
  },
  {
    "url": "blog/skepticism/2018/07/22/index.html",
    "revision": "88f7f24925ddd26a99fc0ef7a4e01676"
  },
  {
    "url": "blog/skepticism/2018/07/22/resurrection/index.html",
    "revision": "02dac05b062799f96415796aa8f46a40"
  },
  {
    "url": "blog/skepticism/2018/07/22/talc/index.html",
    "revision": "da434b5a45c49aac4b42b0f74dd02118"
  },
  {
    "url": "blog/skepticism/2018/07/22/visas/index.html",
    "revision": "65d3d33422fc8f1e770af6aaed2491e4"
  },
  {
    "url": "blog/skepticism/2018/07/index.html",
    "revision": "34c20fa70f10cbf95e9b71ca8a769cca"
  },
  {
    "url": "blog/skepticism/2018/08/05/conf/index.html",
    "revision": "19081832db9d978b70be178b28bfe36f"
  },
  {
    "url": "blog/skepticism/2018/08/05/index.html",
    "revision": "b490f93260becb37c7b31b4cada54722"
  },
  {
    "url": "blog/skepticism/2018/08/05/qanon/index.html",
    "revision": "2887460121fb9220284f65838c5fd772"
  },
  {
    "url": "blog/skepticism/2018/08/19/index.html",
    "revision": "19547fdb317e2f180a12d5e1565c1509"
  },
  {
    "url": "blog/skepticism/2018/08/19/jw/index.html",
    "revision": "5f038b354490df1aeebdd37e5d29adda"
  },
  {
    "url": "blog/skepticism/2018/08/index.html",
    "revision": "d17a52da037bb15fbf2328368273c753"
  },
  {
    "url": "blog/skepticism/2018/09/02/allergy/index.html",
    "revision": "a2bc077763b97502790f1b0f5a2869b7"
  },
  {
    "url": "blog/skepticism/2018/09/02/catholic/index.html",
    "revision": "b7db7a923292790c27180c0f16994c31"
  },
  {
    "url": "blog/skepticism/2018/09/02/index.html",
    "revision": "94517d694b3f30f72bc1aedf390c4c03"
  },
  {
    "url": "blog/skepticism/2018/09/02/jw/index.html",
    "revision": "4d5ff6cc354f0f55c9310f3aa0662cb7"
  },
  {
    "url": "blog/skepticism/2018/09/02/sen/index.html",
    "revision": "79dd1e0970201f4450012cfa80b42267"
  },
  {
    "url": "blog/skepticism/2018/09/16/1080/index.html",
    "revision": "8470bd6213e1de7d93fb89428c7a5362"
  },
  {
    "url": "blog/skepticism/2018/09/16/church/index.html",
    "revision": "49ed4881d1b8b03a795b70c9d392c535"
  },
  {
    "url": "blog/skepticism/2018/09/16/index.html",
    "revision": "778a8b5495eb4087f13c395614b344a4"
  },
  {
    "url": "blog/skepticism/2018/09/16/jones/index.html",
    "revision": "23109191a32c0cc9ba3e0f2e72e22368"
  },
  {
    "url": "blog/skepticism/2018/09/16/scammers/index.html",
    "revision": "49e1791af1075cfd4e2f531a850a17fb"
  },
  {
    "url": "blog/skepticism/2018/09/30/index.html",
    "revision": "48b410e4f98f447c88001fa090a2150c"
  },
  {
    "url": "blog/skepticism/2018/09/30/jw/index.html",
    "revision": "27dd7fee297e044efc7f18add01f0f7b"
  },
  {
    "url": "blog/skepticism/2018/09/30/oto/index.html",
    "revision": "56d5839654fd57288051635176f377cd"
  },
  {
    "url": "blog/skepticism/2018/09/30/who/index.html",
    "revision": "6770b442d56b8d387a41156bf15be8db"
  },
  {
    "url": "blog/skepticism/2018/09/index.html",
    "revision": "f94a0ad3a77ca4581f2eddca88c517ca"
  },
  {
    "url": "blog/skepticism/2018/10/14/hacked/index.html",
    "revision": "3362942126d614e49817916243bc0ac3"
  },
  {
    "url": "blog/skepticism/2018/10/14/index.html",
    "revision": "1f52a81d20889e23711188d9be18605b"
  },
  {
    "url": "blog/skepticism/2018/10/14/kangen/index.html",
    "revision": "bb810c97c17946484a17a13dcbb08197"
  },
  {
    "url": "blog/skepticism/2018/10/14/pakistan/index.html",
    "revision": "df4608be50a2e4cb5971c6bdd956b7d4"
  },
  {
    "url": "blog/skepticism/2018/10/14/sarah/index.html",
    "revision": "2c10e6b03417cb373a6a6ca6dcaeda45"
  },
  {
    "url": "blog/skepticism/2018/10/28/blasphemy/index.html",
    "revision": "e4b4f9b6d0398384a117006a30f4e5ef"
  },
  {
    "url": "blog/skepticism/2018/10/28/hrv/index.html",
    "revision": "2ea090c3c6691af35e172a09bd9ebd7c"
  },
  {
    "url": "blog/skepticism/2018/10/28/index.html",
    "revision": "be566b59d3eb9c8d67e811b1c9be1906"
  },
  {
    "url": "blog/skepticism/2018/10/28/jesus/index.html",
    "revision": "3958ff9a9755e03c93bb14664900d167"
  },
  {
    "url": "blog/skepticism/2018/10/28/natural/index.html",
    "revision": "afcdb581448fbebb8d52fedf538a645a"
  },
  {
    "url": "blog/skepticism/2018/10/index.html",
    "revision": "edf7fe0ef8855dbe9cfc4b64d74d5017"
  },
  {
    "url": "blog/skepticism/2018/11/04/bibi/index.html",
    "revision": "9c662ed9c73bd39ee7e9294a9ce663d6"
  },
  {
    "url": "blog/skepticism/2018/11/04/index.html",
    "revision": "1c38757fd73257a21f895562c9a4c606"
  },
  {
    "url": "blog/skepticism/2018/11/04/jesus/index.html",
    "revision": "32563f3515912b71e07b2f54f7cd37f0"
  },
  {
    "url": "blog/skepticism/2018/11/04/obdii/index.html",
    "revision": "f30b5af5b7e154b92a4e3ee6de222f77"
  },
  {
    "url": "blog/skepticism/2018/11/04/sleepdrops/index.html",
    "revision": "3f4ce29e8b0c6e59c55d670ed31056eb"
  },
  {
    "url": "blog/skepticism/2018/11/index.html",
    "revision": "3c0c5396514d09c91bdf9e23e5238f7b"
  },
  {
    "url": "blog/skepticism/2018/12/02/ark/index.html",
    "revision": "e259c3db0e03d7e49fd51e0555b5a8b5"
  },
  {
    "url": "blog/skepticism/2018/12/02/green/index.html",
    "revision": "e6e5693c5126b465aa646077134285db"
  },
  {
    "url": "blog/skepticism/2018/12/02/index.html",
    "revision": "41581420871dc27576ea24e42f97acff"
  },
  {
    "url": "blog/skepticism/2018/12/02/ri/index.html",
    "revision": "02b2629b46ec7b8d53ec4ec1c48b9537"
  },
  {
    "url": "blog/skepticism/2018/12/16/blasphemy/index.html",
    "revision": "108fa203be795b2e54e718122ee728ba"
  },
  {
    "url": "blog/skepticism/2018/12/16/index.html",
    "revision": "bb4e1e9735c9dc249a832b44cc8d6488"
  },
  {
    "url": "blog/skepticism/2018/12/16/sleepdrops/index.html",
    "revision": "0d09004d6e2c1ffaac72de1a4a91a8ad"
  },
  {
    "url": "blog/skepticism/2018/12/16/tekiri/index.html",
    "revision": "a00eb016cf836cb6d4da17f6668855f4"
  },
  {
    "url": "blog/skepticism/2018/12/index.html",
    "revision": "b5620c2179ee03d0c05899d2074db0eb"
  },
  {
    "url": "blog/skepticism/2018/index.html",
    "revision": "980c947554f758cd46c3ea5f102b5f19"
  },
  {
    "url": "blog/skepticism/index.html",
    "revision": "4bf49dd51e57e5cd643664865be32138"
  },
  {
    "url": "blog/tag/index.html",
    "revision": "53e29ea70b26d2a582bd490e5e0aa9af"
  },
  {
    "url": "contact/index.html",
    "revision": "5e7d9ebd0fafa1d368d12acd680178e2"
  },
  {
    "url": "cv/cover/index.html",
    "revision": "7896766c4a64428687c2b1cf49b9dadc"
  },
  {
    "url": "cv/index.html",
    "revision": "b924f7ef8f78cd38824c39f5d490e1b2"
  },
  {
    "url": "googlee25d0c06da891164.html",
    "revision": "0defe75660212f417b90c5affcd03380"
  },
  {
    "url": "index.html",
    "revision": "73228916b95b77edf7d3222bf6c802ec"
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
    "revision": "236866e2e984ae4541269f8837dc338b"
  },
  {
    "url": "media/me/index.html",
    "revision": "e5bff2ad7380bb98565614adedc7808e"
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
    "revision": "f0fc190ea5df86209e519258e6f737db"
  },
  {
    "url": "status/index.html",
    "revision": "446274d6bd3c96d4d03bf52ad9ffca0c"
  },
  {
    "url": "status/steam/index.html",
    "revision": "c36402870bebdc9a8ca141b414102a59"
  },
  {
    "url": "status/twitter/index.html",
    "revision": "8a71cc1cbc092a19029e8cefa185fbbb"
  },
  {
    "url": "status/wikipedia/index.html",
    "revision": "3f1b0ba57b36f6e2585caa7f03ba4367"
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
