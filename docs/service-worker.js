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
    "revision": "a1f5c879f7d26b56b886d96f30593941"
  },
  {
    "url": "assets/css/0.styles.css",
    "revision": "a17d24426613d903d31ed4d7328d9175"
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
    "revision": "657e896d645a8d20f9a2ea9e79d3b6ce"
  },
  {
    "url": "assets/js/10.js",
    "revision": "3c7f05ab56069529ff1533294b141ec9"
  },
  {
    "url": "assets/js/100.js",
    "revision": "402ccc845100fefd1923f26bcd83c750"
  },
  {
    "url": "assets/js/101.js",
    "revision": "5d0ae8eeb021f7e817d8cc045aaa39d3"
  },
  {
    "url": "assets/js/102.js",
    "revision": "d6df30768e9c28eee11c6be6c5a55bda"
  },
  {
    "url": "assets/js/103.js",
    "revision": "f0cc26af4fdb64cf431c03f0a11104e0"
  },
  {
    "url": "assets/js/104.js",
    "revision": "aa238acd0fd2277f62e86a810b2b708a"
  },
  {
    "url": "assets/js/105.js",
    "revision": "4491525984aa9456ca28d55d842b6040"
  },
  {
    "url": "assets/js/106.js",
    "revision": "df3f7715b8eab8761cfcf615f37c159d"
  },
  {
    "url": "assets/js/107.js",
    "revision": "c103000d5e4a77233fc17834ab0173de"
  },
  {
    "url": "assets/js/108.js",
    "revision": "3f32fa0234826e581408e245e80a1d06"
  },
  {
    "url": "assets/js/109.js",
    "revision": "6904b5b407c6cb9a6f87c12bc29afe6b"
  },
  {
    "url": "assets/js/11.js",
    "revision": "c6ce379d25366f2d9eca863f7adc38c7"
  },
  {
    "url": "assets/js/110.js",
    "revision": "de0cebbd380a10eebf7cc585c0a9c5e3"
  },
  {
    "url": "assets/js/111.js",
    "revision": "8f9604c34f300e94f872cbc4f96723b2"
  },
  {
    "url": "assets/js/112.js",
    "revision": "5e25724d7b1442d0667845be17315e4d"
  },
  {
    "url": "assets/js/113.js",
    "revision": "5829176a7e15ee9c8aec1d474ad58b9f"
  },
  {
    "url": "assets/js/114.js",
    "revision": "54a468d192780aa80229c1dd4d74510a"
  },
  {
    "url": "assets/js/115.js",
    "revision": "64271a4d7426ca6732c44b95c88657e5"
  },
  {
    "url": "assets/js/116.js",
    "revision": "b11e84be97336c60973c3d75ba298d48"
  },
  {
    "url": "assets/js/117.js",
    "revision": "c4a90537ef195509f219c75df04a1d89"
  },
  {
    "url": "assets/js/118.js",
    "revision": "6cb0a058ec3416ce25ae646807850ca5"
  },
  {
    "url": "assets/js/119.js",
    "revision": "325fd95d36428747c38c6d245f49f8be"
  },
  {
    "url": "assets/js/12.js",
    "revision": "912a18fb32978e64aa8afcb6c3c543d0"
  },
  {
    "url": "assets/js/120.js",
    "revision": "39f43714ec7c90849fd0bfdde84d0c28"
  },
  {
    "url": "assets/js/121.js",
    "revision": "49f45e36a65a3fbc6b5bc1e4f6542fbc"
  },
  {
    "url": "assets/js/122.js",
    "revision": "b0a5dac21510e2e40b6e891299e3900a"
  },
  {
    "url": "assets/js/123.js",
    "revision": "4c5c77d5d1abae04c7e891427fcd388c"
  },
  {
    "url": "assets/js/124.js",
    "revision": "5f1a690be6efb1d6d98a90df8054f316"
  },
  {
    "url": "assets/js/125.js",
    "revision": "e3138ab35bdf4c7647b5bb6edb3a5160"
  },
  {
    "url": "assets/js/126.js",
    "revision": "d8ecafc7dedca86057adab6b218d0640"
  },
  {
    "url": "assets/js/127.js",
    "revision": "0c1e22d81621c769adccf18dc0008cad"
  },
  {
    "url": "assets/js/128.js",
    "revision": "f6c8f08b4702916de2580d9a24a778b0"
  },
  {
    "url": "assets/js/129.js",
    "revision": "968273546647fd67dd813e36e0b6be13"
  },
  {
    "url": "assets/js/13.js",
    "revision": "f6c298499ffdcc077ce1d1b983c03060"
  },
  {
    "url": "assets/js/130.js",
    "revision": "79800b275e6645d0abba6515b4322e8d"
  },
  {
    "url": "assets/js/131.js",
    "revision": "40cd9bf55f5258a875f87ca1a0bbed4c"
  },
  {
    "url": "assets/js/132.js",
    "revision": "bb0d64407e24f8902500601159c9a2fd"
  },
  {
    "url": "assets/js/133.js",
    "revision": "48ac94bc3be3eed6fe48aafea59b02ff"
  },
  {
    "url": "assets/js/134.js",
    "revision": "9079d4bad34b8bdeb2b29f233212605d"
  },
  {
    "url": "assets/js/135.js",
    "revision": "6f5f962446be3bc02686f626fee67478"
  },
  {
    "url": "assets/js/136.js",
    "revision": "4bfe542fa14d57dcf6be8fdaa8bc943c"
  },
  {
    "url": "assets/js/137.js",
    "revision": "f3cb1fe8a5cd7723631816eed5ee9145"
  },
  {
    "url": "assets/js/138.js",
    "revision": "fbe7eb2b9e2c513ded8846b7c96aa811"
  },
  {
    "url": "assets/js/139.js",
    "revision": "44ca6db6a19d161d46424d3f4f17470c"
  },
  {
    "url": "assets/js/14.js",
    "revision": "0991b262ae7b20e75059506988fce1ac"
  },
  {
    "url": "assets/js/140.js",
    "revision": "22e0fbadf0d426732ac8a9539ae23828"
  },
  {
    "url": "assets/js/141.js",
    "revision": "0960abf67687ad279280cacbe99e2095"
  },
  {
    "url": "assets/js/142.js",
    "revision": "a513d0afd28482c28fb1828c5cb7ef33"
  },
  {
    "url": "assets/js/143.js",
    "revision": "756577924d63aaf6487340ebf333bb3e"
  },
  {
    "url": "assets/js/144.js",
    "revision": "d5d2536a2dfd1d720b775f42c3d94a9a"
  },
  {
    "url": "assets/js/145.js",
    "revision": "9d2d09551895206ca16df3396e0e27c8"
  },
  {
    "url": "assets/js/146.js",
    "revision": "4599a02567f90d4972306d1055211adb"
  },
  {
    "url": "assets/js/147.js",
    "revision": "e3b508196ad4bd3a292313f447f67cb5"
  },
  {
    "url": "assets/js/148.js",
    "revision": "ab19bfb38efa3101323e6248e1959e41"
  },
  {
    "url": "assets/js/149.js",
    "revision": "d83b8568e6d6b5318b4b545798dd0bd6"
  },
  {
    "url": "assets/js/15.js",
    "revision": "8cbb221806ecf51702631b773e7aa64c"
  },
  {
    "url": "assets/js/150.js",
    "revision": "b849cde0711f1405637cd3d498925f9e"
  },
  {
    "url": "assets/js/151.js",
    "revision": "28d7d069ddad7a714d16398ec2c4e43e"
  },
  {
    "url": "assets/js/152.js",
    "revision": "9f539543e35f739fee182397226ca0df"
  },
  {
    "url": "assets/js/153.js",
    "revision": "23e9b1e8652e056c2c5a49841a64718e"
  },
  {
    "url": "assets/js/154.js",
    "revision": "ba29306492ddc5a5a590ca623bbeaf35"
  },
  {
    "url": "assets/js/155.js",
    "revision": "8d745cc7aa7bfe9c7ad612d8fe48ca17"
  },
  {
    "url": "assets/js/156.js",
    "revision": "83a0ea134bc79ff623ba16edabdc7262"
  },
  {
    "url": "assets/js/157.js",
    "revision": "6c492dd86528bd4800807d1a2cb3d811"
  },
  {
    "url": "assets/js/158.js",
    "revision": "17cc29164bb4f2b3000349809615ff6a"
  },
  {
    "url": "assets/js/159.js",
    "revision": "85fd75f9b56b77f9d71dcc77fe271d63"
  },
  {
    "url": "assets/js/16.js",
    "revision": "3e6482076459c7c2ec74e1e05d46641a"
  },
  {
    "url": "assets/js/160.js",
    "revision": "d034a21d37b7c31126558616a350a2ab"
  },
  {
    "url": "assets/js/161.js",
    "revision": "6ff25750b800cee094580b0aea1becc4"
  },
  {
    "url": "assets/js/162.js",
    "revision": "5a5d0974ef83922b3c9c77ee75f52e30"
  },
  {
    "url": "assets/js/163.js",
    "revision": "e650f4133b51d4fe0abd314bf23a9087"
  },
  {
    "url": "assets/js/164.js",
    "revision": "cf9172b53cae72f45be5c83afdf6b661"
  },
  {
    "url": "assets/js/165.js",
    "revision": "ce3fb132bdb36404bc93cb4449ee2019"
  },
  {
    "url": "assets/js/166.js",
    "revision": "f65fecb9e02ab5be653fc8754c18c271"
  },
  {
    "url": "assets/js/167.js",
    "revision": "f85144b5725903302c62ce0bcf5f808d"
  },
  {
    "url": "assets/js/168.js",
    "revision": "498b256e9dc248bc6bfe631589836e03"
  },
  {
    "url": "assets/js/169.js",
    "revision": "c8898bfd455ca3dc2e2df43f90507b78"
  },
  {
    "url": "assets/js/17.js",
    "revision": "9f6b320eaa18928897a931c513ff3be5"
  },
  {
    "url": "assets/js/170.js",
    "revision": "d7c76daf07ea18a0ba6042f9d02cf441"
  },
  {
    "url": "assets/js/171.js",
    "revision": "333770bd6590867d18fbc50558414410"
  },
  {
    "url": "assets/js/172.js",
    "revision": "c32e34a07e212d8381fa0a4db0a7d808"
  },
  {
    "url": "assets/js/173.js",
    "revision": "0731797c93c1f805bbe6f02d73f46418"
  },
  {
    "url": "assets/js/174.js",
    "revision": "08d9e6716dd7e5519892f8668c8f0c56"
  },
  {
    "url": "assets/js/175.js",
    "revision": "d8042722276d4c2f80ca758c9386e92b"
  },
  {
    "url": "assets/js/176.js",
    "revision": "ba2050867e3f63d8718b86535ade541e"
  },
  {
    "url": "assets/js/177.js",
    "revision": "56f8bb9c84da974d45438df4641be927"
  },
  {
    "url": "assets/js/178.js",
    "revision": "e8cacb8fb059d52911aa9526e9a4ed94"
  },
  {
    "url": "assets/js/179.js",
    "revision": "1370117046bff3121986b3f336bae04c"
  },
  {
    "url": "assets/js/18.js",
    "revision": "66f12f7dba8af633d2dd3e7155688981"
  },
  {
    "url": "assets/js/180.js",
    "revision": "4718975ae8ad5e95e3541d82fcf84599"
  },
  {
    "url": "assets/js/181.js",
    "revision": "e8ec774d78e6c635b602f7638bc6d889"
  },
  {
    "url": "assets/js/182.js",
    "revision": "88325732e3c900fe6c825f9733924307"
  },
  {
    "url": "assets/js/183.js",
    "revision": "aedf5ed59aa6edd155e6a38ba8b49194"
  },
  {
    "url": "assets/js/184.js",
    "revision": "dda6e075d67afc04e7c349b1da5ad8bb"
  },
  {
    "url": "assets/js/185.js",
    "revision": "e17f51bdaab4f60b66443143fefbf4df"
  },
  {
    "url": "assets/js/186.js",
    "revision": "a02afd3e5482dceb9c3ac72e30121311"
  },
  {
    "url": "assets/js/187.js",
    "revision": "a6b36130875b6001c6483d31a9192b95"
  },
  {
    "url": "assets/js/188.js",
    "revision": "0d18c60db11fa77cf7a49277435633f2"
  },
  {
    "url": "assets/js/189.js",
    "revision": "18c6f66cbdf34e69336b1455e5a9be8d"
  },
  {
    "url": "assets/js/19.js",
    "revision": "d1d5a043ae709ff7a35bf4fc083f0b50"
  },
  {
    "url": "assets/js/190.js",
    "revision": "880eb2d614cf605e91d54c9e36427de2"
  },
  {
    "url": "assets/js/191.js",
    "revision": "080d12675641e3130ffc830d710e9833"
  },
  {
    "url": "assets/js/192.js",
    "revision": "e1f8dcce9d074ef8367835f2ee6fab32"
  },
  {
    "url": "assets/js/193.js",
    "revision": "27a084f65c4f6fe2e6b3d0d4035050c9"
  },
  {
    "url": "assets/js/194.js",
    "revision": "8a076f11b49f2ce050ff225afce7e437"
  },
  {
    "url": "assets/js/195.js",
    "revision": "9c518becf221b16228139be0f4c72cf5"
  },
  {
    "url": "assets/js/196.js",
    "revision": "15da8fe0de1df04fa66e25855424b955"
  },
  {
    "url": "assets/js/197.js",
    "revision": "28e0b54ebc3e1b70aef4acd05f3e5f02"
  },
  {
    "url": "assets/js/198.js",
    "revision": "dc75f3e044c61243b42d82b26f76704f"
  },
  {
    "url": "assets/js/199.js",
    "revision": "6bc8ea098ae02b8615bb386c294e256a"
  },
  {
    "url": "assets/js/2.js",
    "revision": "3d4a5657f2ef59e7b64be981f46638a9"
  },
  {
    "url": "assets/js/20.js",
    "revision": "dfde669c0dd6b56c8c3cfe52e16a8dcb"
  },
  {
    "url": "assets/js/200.js",
    "revision": "ad564e76571d30b97f5cb7c383ec7239"
  },
  {
    "url": "assets/js/201.js",
    "revision": "b5f3c8198553ce9684f1f49c722844fe"
  },
  {
    "url": "assets/js/202.js",
    "revision": "27bf84db82282056efcb8edda5402352"
  },
  {
    "url": "assets/js/203.js",
    "revision": "0bffbba6a1dd234c8a1f1f6527e6aff7"
  },
  {
    "url": "assets/js/204.js",
    "revision": "0ce7833b0d3fdd97738638ca8a14fe62"
  },
  {
    "url": "assets/js/205.js",
    "revision": "9a1d305ecd311ac33dcdb14b06307fdb"
  },
  {
    "url": "assets/js/206.js",
    "revision": "2687dbb6a902ee8022e0e3d7ef7f9629"
  },
  {
    "url": "assets/js/207.js",
    "revision": "b8b5b6e951db220f1cc061653ae126aa"
  },
  {
    "url": "assets/js/208.js",
    "revision": "993f97d7f079d594f6974552848625db"
  },
  {
    "url": "assets/js/209.js",
    "revision": "50c2adfe755dfe1796363b8f536e9480"
  },
  {
    "url": "assets/js/21.js",
    "revision": "77a7c65fa1bd3a0c52b2a98582aebf98"
  },
  {
    "url": "assets/js/210.js",
    "revision": "30284b5672dd692cd8563e4f6b3e5b38"
  },
  {
    "url": "assets/js/211.js",
    "revision": "740b316c01d0c4b350c4d4dae6a95b18"
  },
  {
    "url": "assets/js/212.js",
    "revision": "f1b653c8e824a411d049babaf8ef0d0b"
  },
  {
    "url": "assets/js/213.js",
    "revision": "72d46099b6fff6b50438abd9c23f8704"
  },
  {
    "url": "assets/js/214.js",
    "revision": "2b9c0ee47f95c0c2019bee99cff444d9"
  },
  {
    "url": "assets/js/215.js",
    "revision": "fbb66697cb39b0e07a12108d50c3184e"
  },
  {
    "url": "assets/js/216.js",
    "revision": "1dda53d1622759d391e759d3f0b45b94"
  },
  {
    "url": "assets/js/217.js",
    "revision": "9149347f9045f7a7ebac04cf84b1a9d1"
  },
  {
    "url": "assets/js/218.js",
    "revision": "dca923750d67f037c4431f0401569e16"
  },
  {
    "url": "assets/js/219.js",
    "revision": "abfea9a44cf2d62c20aa96f00dd9f0ba"
  },
  {
    "url": "assets/js/22.js",
    "revision": "6866853b197072b9731c123e67f6d10f"
  },
  {
    "url": "assets/js/220.js",
    "revision": "ff023d7043f942f52aecb726944252da"
  },
  {
    "url": "assets/js/221.js",
    "revision": "9c0a6c0d57009f502601e074373aceae"
  },
  {
    "url": "assets/js/222.js",
    "revision": "4bd6691cae3f03abf951416e7bc5a5d9"
  },
  {
    "url": "assets/js/223.js",
    "revision": "3c412afe9231ad56ca6a5d25fbfd16d3"
  },
  {
    "url": "assets/js/224.js",
    "revision": "28a83e3d60950345ef951442f6ace510"
  },
  {
    "url": "assets/js/225.js",
    "revision": "42fc647bfa0b9634c5e442c159a91ae3"
  },
  {
    "url": "assets/js/226.js",
    "revision": "254b8987e95495c28157ba755bdd7086"
  },
  {
    "url": "assets/js/227.js",
    "revision": "776554044188ff7ee09714f79f29b2fb"
  },
  {
    "url": "assets/js/228.js",
    "revision": "5c80dcac1322ddba49051f31f018d3fe"
  },
  {
    "url": "assets/js/229.js",
    "revision": "c5c18175ff17b2a62055659a4e56f3a1"
  },
  {
    "url": "assets/js/23.js",
    "revision": "380ea94a987d55b37526de9217fa8e5b"
  },
  {
    "url": "assets/js/230.js",
    "revision": "34f0e98f45515fb374c56aad51a33d42"
  },
  {
    "url": "assets/js/231.js",
    "revision": "a14c4b0d7acd84c82f15db14f4f615e8"
  },
  {
    "url": "assets/js/232.js",
    "revision": "a26626691d6f8b0a1c561eeab67de415"
  },
  {
    "url": "assets/js/233.js",
    "revision": "18aedadaf5f471562a847a12063f8fbc"
  },
  {
    "url": "assets/js/234.js",
    "revision": "70cdd17cada17d7f987e5c8935fe991a"
  },
  {
    "url": "assets/js/235.js",
    "revision": "429eb9635737f72a3da343669029f52f"
  },
  {
    "url": "assets/js/236.js",
    "revision": "5f1e95b1a2e0729f5571079f219f103e"
  },
  {
    "url": "assets/js/237.js",
    "revision": "dcc09828cd0ac6f332254ca10e02f7d5"
  },
  {
    "url": "assets/js/238.js",
    "revision": "de0d92daa270476d14b7f9013b6383cf"
  },
  {
    "url": "assets/js/239.js",
    "revision": "2e7b161e187e257628aa1977864d0106"
  },
  {
    "url": "assets/js/24.js",
    "revision": "6f950235a6f6859769f03701ec9c5a47"
  },
  {
    "url": "assets/js/240.js",
    "revision": "1649a2dfb2663bce48ab8948d1401eec"
  },
  {
    "url": "assets/js/241.js",
    "revision": "4e32f93c034f8686950486239daf7358"
  },
  {
    "url": "assets/js/242.js",
    "revision": "cffa6bb3d2d79993dd3e074a3062d382"
  },
  {
    "url": "assets/js/243.js",
    "revision": "b8399707c7996c20e39839cd5bbf698d"
  },
  {
    "url": "assets/js/244.js",
    "revision": "1bf3b53f52479d5d99c56c0eb7de01c8"
  },
  {
    "url": "assets/js/245.js",
    "revision": "979e35b1dbc1d4706e754968bd8739b1"
  },
  {
    "url": "assets/js/246.js",
    "revision": "241ac584b3178990b68764c50e2c657c"
  },
  {
    "url": "assets/js/247.js",
    "revision": "6fd1a438ba31f359d0e9bd93fdd63c0e"
  },
  {
    "url": "assets/js/248.js",
    "revision": "61927568007b721d85cae86791f65d71"
  },
  {
    "url": "assets/js/249.js",
    "revision": "48fa2864a9ea1f77a51988fb53214360"
  },
  {
    "url": "assets/js/25.js",
    "revision": "03fbc22cbc4d250e92ad4f3445e8643a"
  },
  {
    "url": "assets/js/250.js",
    "revision": "fd37cb6663788626cf07338220654da2"
  },
  {
    "url": "assets/js/251.js",
    "revision": "b99c244188b8dfb2911863fedd423896"
  },
  {
    "url": "assets/js/252.js",
    "revision": "d32f867a61fcd5deed9d462cbd94a119"
  },
  {
    "url": "assets/js/253.js",
    "revision": "eb2fa191cc279ac6661f7a52aa7d6357"
  },
  {
    "url": "assets/js/254.js",
    "revision": "69c7946a9f4ef1103c8a8d2d1045a31d"
  },
  {
    "url": "assets/js/255.js",
    "revision": "92c99ad5099c3aa02738274830f2ce08"
  },
  {
    "url": "assets/js/256.js",
    "revision": "69a6d9f4514721583c2d6edfbe767fab"
  },
  {
    "url": "assets/js/257.js",
    "revision": "92583d30425dbb8e92689a20271c4738"
  },
  {
    "url": "assets/js/258.js",
    "revision": "a85c80f67ed3b0885b57dde3e3a7d013"
  },
  {
    "url": "assets/js/259.js",
    "revision": "384aaa9a6718cb9dba2441741407628a"
  },
  {
    "url": "assets/js/26.js",
    "revision": "a02f88557916146cea4d408b19365709"
  },
  {
    "url": "assets/js/260.js",
    "revision": "717c94fba57fce3e34cad874a8881b10"
  },
  {
    "url": "assets/js/261.js",
    "revision": "fd0afb454ec50c91922e7371a12f61d9"
  },
  {
    "url": "assets/js/262.js",
    "revision": "d5962af4ddbc2ecf538a39ac9d9fcd2d"
  },
  {
    "url": "assets/js/263.js",
    "revision": "07785cd58d6b31a1f42566f3e8bf994a"
  },
  {
    "url": "assets/js/264.js",
    "revision": "b18acdc9c27b07285cc2ec96e1e11180"
  },
  {
    "url": "assets/js/265.js",
    "revision": "6e0bec5bb460784f185801633053ecf5"
  },
  {
    "url": "assets/js/266.js",
    "revision": "cbb9d276504527514ce2f35c1457ac26"
  },
  {
    "url": "assets/js/267.js",
    "revision": "3839b421595376b691febf2b6c695d9f"
  },
  {
    "url": "assets/js/268.js",
    "revision": "06913471eb98eea854ba29ac3d2aa185"
  },
  {
    "url": "assets/js/269.js",
    "revision": "d0da143da8e34a3049526030b8f1a874"
  },
  {
    "url": "assets/js/27.js",
    "revision": "3e2f99adb2308b2554e3625f86e3aafa"
  },
  {
    "url": "assets/js/270.js",
    "revision": "8e4be20ff382dd2bae62d54ded682d76"
  },
  {
    "url": "assets/js/271.js",
    "revision": "fb79ca2d3ba1139df2f3a807e766d135"
  },
  {
    "url": "assets/js/272.js",
    "revision": "950e7654e21e06e02093d784f2161c09"
  },
  {
    "url": "assets/js/273.js",
    "revision": "8fa20368407303215186770db6175f3c"
  },
  {
    "url": "assets/js/274.js",
    "revision": "2b0e87b89046a2738a445ff24956a9d2"
  },
  {
    "url": "assets/js/275.js",
    "revision": "66aea5713cfd6f1051dd714e3af9bf3b"
  },
  {
    "url": "assets/js/276.js",
    "revision": "47b85143b92c8c2263bab3aa924f4e21"
  },
  {
    "url": "assets/js/277.js",
    "revision": "37237279245abefee6ec5117b695e5fd"
  },
  {
    "url": "assets/js/278.js",
    "revision": "cf9d72525380024581e31490b589ab21"
  },
  {
    "url": "assets/js/279.js",
    "revision": "e43135d104b0e57863fe203131b8a464"
  },
  {
    "url": "assets/js/28.js",
    "revision": "06af9e8b9954ecf5d21cace58630d092"
  },
  {
    "url": "assets/js/280.js",
    "revision": "ccc1d7e2bcf176f261e4e81714ac1149"
  },
  {
    "url": "assets/js/281.js",
    "revision": "cea27af80ec38f9cc580fbd74ae30899"
  },
  {
    "url": "assets/js/282.js",
    "revision": "419718dac829e560798ff3df61b9f10b"
  },
  {
    "url": "assets/js/283.js",
    "revision": "adda2459c35dbabc031ecd2fee606b81"
  },
  {
    "url": "assets/js/284.js",
    "revision": "28c3c7be1bb825597592a947268bfa62"
  },
  {
    "url": "assets/js/285.js",
    "revision": "1732e0d3fff5aa9c7e8ecd29438a801a"
  },
  {
    "url": "assets/js/286.js",
    "revision": "a782e58ade2fe9e89bc0fb89bc0f0e37"
  },
  {
    "url": "assets/js/287.js",
    "revision": "60348ffe6e494d2d3c2783d1e5eaea18"
  },
  {
    "url": "assets/js/288.js",
    "revision": "8d6b0a29ae845398f6faca65a9867fd5"
  },
  {
    "url": "assets/js/289.js",
    "revision": "1a5b09d5a58e5f7e995a9c6f7d6ee3c5"
  },
  {
    "url": "assets/js/29.js",
    "revision": "f1d08647dea8a69689e44537254dba86"
  },
  {
    "url": "assets/js/290.js",
    "revision": "62617c4f72aeb3a14f11b81d5d1680b4"
  },
  {
    "url": "assets/js/291.js",
    "revision": "1e1be495a73ba9c73699655a84f130a9"
  },
  {
    "url": "assets/js/292.js",
    "revision": "283dc8f3e83b23f79648af8ec9602161"
  },
  {
    "url": "assets/js/293.js",
    "revision": "1560412060838c2ca16ca14ab30168b5"
  },
  {
    "url": "assets/js/294.js",
    "revision": "0b544d9f7c9a90173261bc48e4ab82ef"
  },
  {
    "url": "assets/js/295.js",
    "revision": "3e0478318fa06cd9e9c31ad9e5b256d8"
  },
  {
    "url": "assets/js/296.js",
    "revision": "d2b4ba5f62d36a18c5af42b091b4c1ea"
  },
  {
    "url": "assets/js/297.js",
    "revision": "06c1bb3b93c9c22ce985866ed21b9b39"
  },
  {
    "url": "assets/js/298.js",
    "revision": "ffa21c2cb84682c1734cf266c4dee878"
  },
  {
    "url": "assets/js/299.js",
    "revision": "6b8dce230fbe2f2822c88cb7ac83c158"
  },
  {
    "url": "assets/js/30.js",
    "revision": "703af2fde01788e14db2a2a268556f7c"
  },
  {
    "url": "assets/js/300.js",
    "revision": "641bcbbdc72d87693f61a6005690259a"
  },
  {
    "url": "assets/js/301.js",
    "revision": "ee0388adfe944af215bd0182f4344dcf"
  },
  {
    "url": "assets/js/302.js",
    "revision": "327c42e668473eaaf254ce750e8c2141"
  },
  {
    "url": "assets/js/303.js",
    "revision": "6b411ceba4b9cdcaaa98b54a121b66bf"
  },
  {
    "url": "assets/js/304.js",
    "revision": "167b30ca1069c5f71483d4facfcd7372"
  },
  {
    "url": "assets/js/305.js",
    "revision": "0e09a2a1520c182f427d9e48c854b3dc"
  },
  {
    "url": "assets/js/306.js",
    "revision": "63a6562e63edd3da054f194cd8af3550"
  },
  {
    "url": "assets/js/307.js",
    "revision": "0ead438c8ef9d0cc7c6c2c9f83c2a1af"
  },
  {
    "url": "assets/js/308.js",
    "revision": "02afcdf67c42bcb6e0105459a4f46b1a"
  },
  {
    "url": "assets/js/309.js",
    "revision": "d111df7ff361b1b75090ee9f7dcb04f2"
  },
  {
    "url": "assets/js/31.js",
    "revision": "99fcbf9f0b0c39e0ce7f7de10b51a5e0"
  },
  {
    "url": "assets/js/310.js",
    "revision": "4afddeedc3dbf0b51c7ef9d67d645f9d"
  },
  {
    "url": "assets/js/311.js",
    "revision": "9defee29da6eb0d3ea079cc7852aa3f4"
  },
  {
    "url": "assets/js/312.js",
    "revision": "ba8d23d86788022bd06e02c098c2c3cc"
  },
  {
    "url": "assets/js/313.js",
    "revision": "0121fe43b427f2fa79955456086e3d48"
  },
  {
    "url": "assets/js/314.js",
    "revision": "148fbbda9118a61cedf76b6f55e72085"
  },
  {
    "url": "assets/js/315.js",
    "revision": "e850b3f3f3850176b9027ba59d17530c"
  },
  {
    "url": "assets/js/316.js",
    "revision": "61ce2a76cc0cded4ffa88f83b21e287b"
  },
  {
    "url": "assets/js/317.js",
    "revision": "41c1ac6f8069708e77b096edde6c0bd1"
  },
  {
    "url": "assets/js/318.js",
    "revision": "616ced86327943a062232189f2b02789"
  },
  {
    "url": "assets/js/319.js",
    "revision": "29b2344873dcf03e3b319ee9f00120df"
  },
  {
    "url": "assets/js/32.js",
    "revision": "a683ed79a407695a8920ac2a0a3093ba"
  },
  {
    "url": "assets/js/320.js",
    "revision": "addd7013acdf83eca252dd48660d5aaa"
  },
  {
    "url": "assets/js/321.js",
    "revision": "2f5f20e61a6c118b2096a5487794d577"
  },
  {
    "url": "assets/js/322.js",
    "revision": "db1b7721095675e00eaf92c8b0809c49"
  },
  {
    "url": "assets/js/323.js",
    "revision": "2caa8e16c8901cd437a455ef05b5f58f"
  },
  {
    "url": "assets/js/324.js",
    "revision": "f6ed15e07f476e127c27489c43c90947"
  },
  {
    "url": "assets/js/325.js",
    "revision": "fd5e29f7957b5d2b8b60c960b3188504"
  },
  {
    "url": "assets/js/326.js",
    "revision": "e1a82a7739a4d99685040fcad2141904"
  },
  {
    "url": "assets/js/327.js",
    "revision": "52982f185155d9ee4087d24712d7af94"
  },
  {
    "url": "assets/js/328.js",
    "revision": "cec74984993af5f574767ea76060078c"
  },
  {
    "url": "assets/js/329.js",
    "revision": "9bb5ed50662a534ba7409ef2561b60da"
  },
  {
    "url": "assets/js/33.js",
    "revision": "5238a7c25d8c6123af5738adf82f2f56"
  },
  {
    "url": "assets/js/330.js",
    "revision": "c7fef99b1a8f96eafeab5a7669a48f1a"
  },
  {
    "url": "assets/js/331.js",
    "revision": "b8ecbc03654720549b4578cdc72146c1"
  },
  {
    "url": "assets/js/332.js",
    "revision": "70e8839c00479e9366ed62210da8973d"
  },
  {
    "url": "assets/js/333.js",
    "revision": "3531b6ca5fc4694838f420195fd437c9"
  },
  {
    "url": "assets/js/334.js",
    "revision": "fd39170d95328851dc211c928d61b8e0"
  },
  {
    "url": "assets/js/335.js",
    "revision": "8a6d32477889191aecaf7b75ed5a4c91"
  },
  {
    "url": "assets/js/336.js",
    "revision": "7f4772d321b1645f14282a8ed5cc2a22"
  },
  {
    "url": "assets/js/337.js",
    "revision": "eef618e04544e73fec7a5861472fc233"
  },
  {
    "url": "assets/js/338.js",
    "revision": "88e51b4cd720322e5b8267b012c528d3"
  },
  {
    "url": "assets/js/339.js",
    "revision": "2a93cafc0bcbc8fea6d2e5969e2397f6"
  },
  {
    "url": "assets/js/34.js",
    "revision": "1302bcfa61e1b15ff02b740dbb1f1c88"
  },
  {
    "url": "assets/js/340.js",
    "revision": "5b3119d793e64f5a47706aade4b1106e"
  },
  {
    "url": "assets/js/341.js",
    "revision": "743a1d841ea266925e079b61365da212"
  },
  {
    "url": "assets/js/342.js",
    "revision": "ff6d9fc9262da23f90f317cd187b0681"
  },
  {
    "url": "assets/js/343.js",
    "revision": "8d6a066a1b56fb363ede1b3afc1538bb"
  },
  {
    "url": "assets/js/344.js",
    "revision": "93e6e2b0e72000e1ae169e0fdcb72b5d"
  },
  {
    "url": "assets/js/345.js",
    "revision": "36f02011a5a8b0a4f7ce29d3a49b8287"
  },
  {
    "url": "assets/js/346.js",
    "revision": "0570d122bc7c0ccc0b14436ee5a349d5"
  },
  {
    "url": "assets/js/347.js",
    "revision": "8a72d799edea0d4886f0085c4d9757bf"
  },
  {
    "url": "assets/js/348.js",
    "revision": "d3ab9dc1c2d588d6defb7c7039fe996a"
  },
  {
    "url": "assets/js/349.js",
    "revision": "68799f1d0538aca6671fdda1fcf7db08"
  },
  {
    "url": "assets/js/35.js",
    "revision": "9177025b530551176bccd7eacbdef4e4"
  },
  {
    "url": "assets/js/350.js",
    "revision": "73ae52f9e4623c17e55948d5ddf4dc2a"
  },
  {
    "url": "assets/js/351.js",
    "revision": "3ac907d872bdd8af6f9d8f90e2e92d57"
  },
  {
    "url": "assets/js/352.js",
    "revision": "09ebd5ae38de6ec6dc6656d2e6c9cec0"
  },
  {
    "url": "assets/js/353.js",
    "revision": "0d29a112de4fc6d86da2995209c8a0cc"
  },
  {
    "url": "assets/js/354.js",
    "revision": "c8a46bd57db46cb8a66c45fb9dc2934f"
  },
  {
    "url": "assets/js/355.js",
    "revision": "3a634aa9441e28e34bc5d50a7d267854"
  },
  {
    "url": "assets/js/356.js",
    "revision": "c817c9621e08f7b0b23c18fb052108bb"
  },
  {
    "url": "assets/js/357.js",
    "revision": "ac26e45a7102784fbb926893516a8970"
  },
  {
    "url": "assets/js/358.js",
    "revision": "a5477c986e13cdb49ad2c42721bd7028"
  },
  {
    "url": "assets/js/359.js",
    "revision": "60d8e7c28c698457195571bb62efecc5"
  },
  {
    "url": "assets/js/36.js",
    "revision": "21b577ceee3150a5bd27c8f09efd984c"
  },
  {
    "url": "assets/js/360.js",
    "revision": "52b228bc66b0870b996da9a263a88ce9"
  },
  {
    "url": "assets/js/361.js",
    "revision": "6aa5b1b7485ca05acf7fc9a2e0bdd5b9"
  },
  {
    "url": "assets/js/362.js",
    "revision": "b00d33f6d5579f57a6176aef81d0245e"
  },
  {
    "url": "assets/js/363.js",
    "revision": "47c78c20d73682d45cee893729c4b2fb"
  },
  {
    "url": "assets/js/364.js",
    "revision": "86411a4e8adff4dfb6cc30238d22671f"
  },
  {
    "url": "assets/js/365.js",
    "revision": "23fa81944582410fc5fd1014a9202efb"
  },
  {
    "url": "assets/js/366.js",
    "revision": "77618a5bba7a8055c88ca080b884ab60"
  },
  {
    "url": "assets/js/367.js",
    "revision": "37efdff05d65c889f189474cb495d565"
  },
  {
    "url": "assets/js/368.js",
    "revision": "8559f34671ab34e5ec2170571ec26841"
  },
  {
    "url": "assets/js/369.js",
    "revision": "ea175d211705a16549a555e33802f15f"
  },
  {
    "url": "assets/js/37.js",
    "revision": "dbd14b45be87a6a3c81b5d685bdfea6a"
  },
  {
    "url": "assets/js/370.js",
    "revision": "b0772bc3647d0bddbcaccb920f623a6e"
  },
  {
    "url": "assets/js/371.js",
    "revision": "67e45dfea0bf85641c514df7b7dead21"
  },
  {
    "url": "assets/js/372.js",
    "revision": "15a560069060a16994cd7f948bdbf9ab"
  },
  {
    "url": "assets/js/373.js",
    "revision": "60e4fbcf19b2ed4da8bdb50b1fd4e33c"
  },
  {
    "url": "assets/js/374.js",
    "revision": "02159c33c91f9c188a030aab1f026ec3"
  },
  {
    "url": "assets/js/375.js",
    "revision": "925f97b4cb5136e245534a4a221b12e5"
  },
  {
    "url": "assets/js/376.js",
    "revision": "87c1bb058afcdd7f7109b2e624950290"
  },
  {
    "url": "assets/js/377.js",
    "revision": "187aff886028d9f217d379d18d721bf3"
  },
  {
    "url": "assets/js/378.js",
    "revision": "6fedadd68db0f33584dc0f406365b342"
  },
  {
    "url": "assets/js/379.js",
    "revision": "4ed46b0d241b639f18e906324bad1f1c"
  },
  {
    "url": "assets/js/38.js",
    "revision": "552b6811b3fb3e57992e32c3a447705c"
  },
  {
    "url": "assets/js/380.js",
    "revision": "cc3efc964069333a8b79ffc69c514aa3"
  },
  {
    "url": "assets/js/381.js",
    "revision": "93fd0b812ec0145e6e5df848309d4187"
  },
  {
    "url": "assets/js/382.js",
    "revision": "f1a9ee88396ffbe2dd435041a01baaca"
  },
  {
    "url": "assets/js/383.js",
    "revision": "bb11eb65a0d2f197897105f4b89764b4"
  },
  {
    "url": "assets/js/384.js",
    "revision": "0baf2d52201fa49dfcbbe3758e843b39"
  },
  {
    "url": "assets/js/385.js",
    "revision": "9c89fe3dc9d5c9a8032f53d54795d5cc"
  },
  {
    "url": "assets/js/386.js",
    "revision": "b2e4aa6f08e0971b23a96a0e6b85659c"
  },
  {
    "url": "assets/js/387.js",
    "revision": "8c25f2d54018343f6d48074327cc4f7c"
  },
  {
    "url": "assets/js/388.js",
    "revision": "21f43944e883d5d4fab19140cc1a9059"
  },
  {
    "url": "assets/js/389.js",
    "revision": "9016da413a9a2312573dfc309d224e4c"
  },
  {
    "url": "assets/js/39.js",
    "revision": "45704320c4459d207ae0607355d9b8a2"
  },
  {
    "url": "assets/js/390.js",
    "revision": "a83561d13997bea2332ba24069825ae4"
  },
  {
    "url": "assets/js/391.js",
    "revision": "5ca17b11ecd69dd6e2dbcac11e098fd7"
  },
  {
    "url": "assets/js/392.js",
    "revision": "db75ca29b572df0e583532970891be14"
  },
  {
    "url": "assets/js/393.js",
    "revision": "e71b53ff66512798a630fdca360b2ca4"
  },
  {
    "url": "assets/js/394.js",
    "revision": "129d597a9aff51ec319b40d879a13702"
  },
  {
    "url": "assets/js/395.js",
    "revision": "cb3551d146bb0724e7d410f7f23bebec"
  },
  {
    "url": "assets/js/396.js",
    "revision": "db6121cd93585d352a335fc79bd65568"
  },
  {
    "url": "assets/js/397.js",
    "revision": "78ca8d60e0d292646c1ab21f3d74f749"
  },
  {
    "url": "assets/js/398.js",
    "revision": "9f1f166ac8dd52458164ab49ee78d26f"
  },
  {
    "url": "assets/js/399.js",
    "revision": "8673c0f8a20e70f10490982c79cce88f"
  },
  {
    "url": "assets/js/4.js",
    "revision": "0f579b6b49a8de0ced7a2d470efd62f9"
  },
  {
    "url": "assets/js/40.js",
    "revision": "1a517b7b9d3b8f836c8ea127c183eb9c"
  },
  {
    "url": "assets/js/400.js",
    "revision": "51b2c61da09acdc809bb640ba0fd6de5"
  },
  {
    "url": "assets/js/401.js",
    "revision": "8f495453901a75ebfda52f42499af96e"
  },
  {
    "url": "assets/js/402.js",
    "revision": "dda3a67bd5c3a405320f572c0089ff4f"
  },
  {
    "url": "assets/js/403.js",
    "revision": "ba68d2f3d657d0bc0af2dd1eb25226ef"
  },
  {
    "url": "assets/js/404.js",
    "revision": "0a9d1f99d9a2d191a3ca49ed2d6e4dae"
  },
  {
    "url": "assets/js/405.js",
    "revision": "a18f3ade9898823befc0c53603991983"
  },
  {
    "url": "assets/js/406.js",
    "revision": "ecccbe0761e7f5d259e2731a45e15e37"
  },
  {
    "url": "assets/js/407.js",
    "revision": "03acffb42f5debd13eecde65c0f97ce7"
  },
  {
    "url": "assets/js/408.js",
    "revision": "3d6e86caf14629c5eac7cea4bce7467a"
  },
  {
    "url": "assets/js/409.js",
    "revision": "cbdcd6d26d9343c315e26f166fe29278"
  },
  {
    "url": "assets/js/41.js",
    "revision": "12cfc893a8d0975a4177b6a9eeed5645"
  },
  {
    "url": "assets/js/410.js",
    "revision": "cdbf1b51c5d806d397df5d186dec5975"
  },
  {
    "url": "assets/js/411.js",
    "revision": "120ef810dc1bb8214feb3e3d4a8cf244"
  },
  {
    "url": "assets/js/412.js",
    "revision": "a72c854b7383b73508b86e6ed1b87b2c"
  },
  {
    "url": "assets/js/413.js",
    "revision": "40fb6ef204b77c1b07173da67e55da0e"
  },
  {
    "url": "assets/js/414.js",
    "revision": "828750a40a3a888c797344e96153ef7b"
  },
  {
    "url": "assets/js/415.js",
    "revision": "937ff8aab2d4bca55042dda66c58969e"
  },
  {
    "url": "assets/js/416.js",
    "revision": "711d00cc8a709c3ce557e1cbc2738cba"
  },
  {
    "url": "assets/js/417.js",
    "revision": "2d75f5ff2cae7bdfceea69e54c4d6b0d"
  },
  {
    "url": "assets/js/418.js",
    "revision": "21173bbcc03c7a0ed38f7f1832c3649f"
  },
  {
    "url": "assets/js/419.js",
    "revision": "f9cc9f2f02d7c3aa108d7a867df55a09"
  },
  {
    "url": "assets/js/42.js",
    "revision": "3dafdb655ef1598046e436c66a581b75"
  },
  {
    "url": "assets/js/420.js",
    "revision": "cbed9173516b9f93fb375666e0672440"
  },
  {
    "url": "assets/js/421.js",
    "revision": "6c79bd821e0a4c2f56b6bf69b7b5191d"
  },
  {
    "url": "assets/js/422.js",
    "revision": "58c28790e046bf9dda5adc4a8d30a0f2"
  },
  {
    "url": "assets/js/423.js",
    "revision": "b981c1a3878660c027e0e84b0adc027d"
  },
  {
    "url": "assets/js/424.js",
    "revision": "d7c67f2b98d1c2e8a80eb76fc73a51d3"
  },
  {
    "url": "assets/js/425.js",
    "revision": "edfa4c72a7a160f001d063b026c450c7"
  },
  {
    "url": "assets/js/426.js",
    "revision": "7cf4eb7f7b0efa0dd67c3c937e08b4cc"
  },
  {
    "url": "assets/js/427.js",
    "revision": "459f887948372e63c9c0e1efe6122fe0"
  },
  {
    "url": "assets/js/428.js",
    "revision": "c0794941366d3026ed644e15f8be582b"
  },
  {
    "url": "assets/js/429.js",
    "revision": "7d0b673b052175141fe708d55c8dbffd"
  },
  {
    "url": "assets/js/43.js",
    "revision": "219c01c3c6af4d986c143645ed5f3d67"
  },
  {
    "url": "assets/js/430.js",
    "revision": "216dd7e6a2038ab5f656cd4922ef365d"
  },
  {
    "url": "assets/js/431.js",
    "revision": "8337a8686f0fa1040c06b31e20fbbbd9"
  },
  {
    "url": "assets/js/432.js",
    "revision": "9e4b5dd80301ba67a958c1a3d084cbb3"
  },
  {
    "url": "assets/js/433.js",
    "revision": "cfcbd0ff191495429a920d404a49c46c"
  },
  {
    "url": "assets/js/434.js",
    "revision": "dd0ad74d33629bf6a9d1c12d6bc5935b"
  },
  {
    "url": "assets/js/435.js",
    "revision": "47f290e4625b9c1a1338448d4a8651af"
  },
  {
    "url": "assets/js/436.js",
    "revision": "00b315c3923ebd912fa3ef3f2bbb73c1"
  },
  {
    "url": "assets/js/437.js",
    "revision": "cb49b7110a992ba73814b1335006bccb"
  },
  {
    "url": "assets/js/438.js",
    "revision": "97727dbe3b989c079bcdc315edc43de7"
  },
  {
    "url": "assets/js/439.js",
    "revision": "6a8f5290a43014829354d72f33ba3e18"
  },
  {
    "url": "assets/js/44.js",
    "revision": "faac1493b11a3968b72fb26f23510e81"
  },
  {
    "url": "assets/js/440.js",
    "revision": "bf1f9471ccfd75c1528d5fea2f4d3945"
  },
  {
    "url": "assets/js/441.js",
    "revision": "dc12cce3f94bd5a98282685650dc0fa3"
  },
  {
    "url": "assets/js/442.js",
    "revision": "f98e0b37dedd050b0e4f59a3d00ab3e6"
  },
  {
    "url": "assets/js/443.js",
    "revision": "1bb5be28b1e151a6f6377f115ed6700b"
  },
  {
    "url": "assets/js/444.js",
    "revision": "fc54b8886f134139e2deb58aa64c73d6"
  },
  {
    "url": "assets/js/445.js",
    "revision": "9f504b1c7d0c9b5b3a35c526cde094d3"
  },
  {
    "url": "assets/js/446.js",
    "revision": "2d51a8878dd0f885caa15bf47bea5075"
  },
  {
    "url": "assets/js/447.js",
    "revision": "313626100b5fa47ba2ec5a3f1840dec9"
  },
  {
    "url": "assets/js/448.js",
    "revision": "f58fb9de328b75d36ec2daea93703dd7"
  },
  {
    "url": "assets/js/449.js",
    "revision": "6fd3bd244de63b487baa17538ee97326"
  },
  {
    "url": "assets/js/45.js",
    "revision": "7c3267fc2ca2ad015bdf7e980ffdc110"
  },
  {
    "url": "assets/js/450.js",
    "revision": "f2209f6dd1d33b027803c5d2bffe441d"
  },
  {
    "url": "assets/js/451.js",
    "revision": "4740db0cd7e471319c9074fdd163dc2c"
  },
  {
    "url": "assets/js/452.js",
    "revision": "e7fbc1d1a6a45ec2dd6337079acacf25"
  },
  {
    "url": "assets/js/453.js",
    "revision": "054d63eff3705fb214e335160ce58990"
  },
  {
    "url": "assets/js/454.js",
    "revision": "479279250ece87aaee4e6f540e77c7a3"
  },
  {
    "url": "assets/js/455.js",
    "revision": "d5060d431adce73572444625815e935c"
  },
  {
    "url": "assets/js/456.js",
    "revision": "bb24c94fc38f0d33905552f4317191be"
  },
  {
    "url": "assets/js/457.js",
    "revision": "fd8d89a18acf51a00f2da0442c731a44"
  },
  {
    "url": "assets/js/458.js",
    "revision": "97230fa3cc9786b3caaf0a11f3a5953c"
  },
  {
    "url": "assets/js/459.js",
    "revision": "c70bf886072e45f96a032697096ada8b"
  },
  {
    "url": "assets/js/46.js",
    "revision": "f4ab87e6e9977f21389341cb1b23a772"
  },
  {
    "url": "assets/js/460.js",
    "revision": "eed9333495fb76a7088ea1ece0fa1433"
  },
  {
    "url": "assets/js/461.js",
    "revision": "bfe60870bf9b3c3d4a90f57fbce480d9"
  },
  {
    "url": "assets/js/462.js",
    "revision": "5bb35d927629a0e8dd6ca5dfc78f298c"
  },
  {
    "url": "assets/js/463.js",
    "revision": "286d33304141a61c8359798acf636e3e"
  },
  {
    "url": "assets/js/464.js",
    "revision": "fc924c8a44b357c1eff046e797fa2c6c"
  },
  {
    "url": "assets/js/465.js",
    "revision": "66556bc3566dd663e8f23699b948959f"
  },
  {
    "url": "assets/js/466.js",
    "revision": "79442ab2691aec73aa5025ece68577ac"
  },
  {
    "url": "assets/js/467.js",
    "revision": "c3447c99120a98a8fcbcef3fa6e29c2f"
  },
  {
    "url": "assets/js/468.js",
    "revision": "59c94b93ecd8c788f7f09d96c51cfba6"
  },
  {
    "url": "assets/js/469.js",
    "revision": "1ea24c335a314e991772374f6764fb26"
  },
  {
    "url": "assets/js/47.js",
    "revision": "0cf41c2923d18a738d13a149a9947ef7"
  },
  {
    "url": "assets/js/470.js",
    "revision": "5bc38bf3c880b4c95237cf0f28b084e6"
  },
  {
    "url": "assets/js/471.js",
    "revision": "505ae0cb96796b7cefe663c1863c98ba"
  },
  {
    "url": "assets/js/472.js",
    "revision": "22da3f2884cfa5ce96762332d43ccefa"
  },
  {
    "url": "assets/js/473.js",
    "revision": "0d1ccb4625b83bd175f0aba01710df72"
  },
  {
    "url": "assets/js/474.js",
    "revision": "1d9aaa06ae4d39e97938b86e481c170d"
  },
  {
    "url": "assets/js/475.js",
    "revision": "5b86808d6c11fa20ec5ab881d8f6782a"
  },
  {
    "url": "assets/js/476.js",
    "revision": "d1456db2239d599848d3c09cc78703ab"
  },
  {
    "url": "assets/js/477.js",
    "revision": "b9f14f00a408366b8342441770d1245f"
  },
  {
    "url": "assets/js/478.js",
    "revision": "e12444721e8bc80385fd1b3c3bb591aa"
  },
  {
    "url": "assets/js/479.js",
    "revision": "4c9dded928fa7aa9bc22c84c2bfc0cda"
  },
  {
    "url": "assets/js/48.js",
    "revision": "c525a748d4fdd3875a105d5b06be633b"
  },
  {
    "url": "assets/js/480.js",
    "revision": "48be97c9c670abd7460cea48ed1d4cf9"
  },
  {
    "url": "assets/js/481.js",
    "revision": "2c9bb75a5cca2b629175c08114de3d8c"
  },
  {
    "url": "assets/js/482.js",
    "revision": "c0a6f159606f064b0a1b9e460aed6f16"
  },
  {
    "url": "assets/js/483.js",
    "revision": "2c12ca29372911d1a7c1ab465fef233b"
  },
  {
    "url": "assets/js/484.js",
    "revision": "929973f8fd442edd131aa3fbf2fcf0c7"
  },
  {
    "url": "assets/js/485.js",
    "revision": "d964c085f7a0618dda1287dad2ddb321"
  },
  {
    "url": "assets/js/486.js",
    "revision": "5ed39c2545c4272714361a70969f1ecb"
  },
  {
    "url": "assets/js/487.js",
    "revision": "1577ca19c4151c30da847c2f6bdfeb25"
  },
  {
    "url": "assets/js/488.js",
    "revision": "ef0f0fc0f55e988d2b30fb2289ccc1bf"
  },
  {
    "url": "assets/js/489.js",
    "revision": "3929a0b3e4f114f6f00dd9881988f0b5"
  },
  {
    "url": "assets/js/49.js",
    "revision": "081fa608acb502910e0636d218954228"
  },
  {
    "url": "assets/js/490.js",
    "revision": "e473a0a604454c3fce7b05f7d8af5986"
  },
  {
    "url": "assets/js/491.js",
    "revision": "bebd8c4e4f87f77509d4bee1bad4404c"
  },
  {
    "url": "assets/js/492.js",
    "revision": "d48d4ab45e1454f6d213bcbd32f10263"
  },
  {
    "url": "assets/js/493.js",
    "revision": "b5e72b10081a7d1553ffefb20c973635"
  },
  {
    "url": "assets/js/494.js",
    "revision": "c71ea6dd1ef9c6e1440b61c01086e01a"
  },
  {
    "url": "assets/js/495.js",
    "revision": "9e57b83f14cb46a92967d8d487ac3e44"
  },
  {
    "url": "assets/js/496.js",
    "revision": "c3a781ac218ff3eb97334319a9f67afc"
  },
  {
    "url": "assets/js/497.js",
    "revision": "b97edebc43d6c74b23572eb38c66c204"
  },
  {
    "url": "assets/js/498.js",
    "revision": "38ec7f5d10ade7c73931b3746bb4cf2b"
  },
  {
    "url": "assets/js/499.js",
    "revision": "95f08ea600f70420a20e15bbcd454f32"
  },
  {
    "url": "assets/js/5.js",
    "revision": "d766570b8da87cebb94e49fd544f05ce"
  },
  {
    "url": "assets/js/50.js",
    "revision": "0ed902364950cceefee91ef3424485a8"
  },
  {
    "url": "assets/js/500.js",
    "revision": "301b2e541adc67d02cfd9184365ce979"
  },
  {
    "url": "assets/js/501.js",
    "revision": "cf7a778e74c8d944c66229cbc7456d1f"
  },
  {
    "url": "assets/js/502.js",
    "revision": "96271935c0778b8f1f9de6303bff0deb"
  },
  {
    "url": "assets/js/503.js",
    "revision": "f9e53df1d4c73d27b6b691fb76578222"
  },
  {
    "url": "assets/js/504.js",
    "revision": "ca5b71752d209a9b46d29d75b2750df6"
  },
  {
    "url": "assets/js/505.js",
    "revision": "78787388fcdb1636e8e8b119b53bb6f8"
  },
  {
    "url": "assets/js/506.js",
    "revision": "2d8bd975712f08ca6a7fef9e42dd66cf"
  },
  {
    "url": "assets/js/507.js",
    "revision": "0f423ee1d50de994b790c341735ce632"
  },
  {
    "url": "assets/js/508.js",
    "revision": "14333b15cc473835772ce1b5a5ae6d29"
  },
  {
    "url": "assets/js/509.js",
    "revision": "5c0fde249579559222a0c2f7eab5b42b"
  },
  {
    "url": "assets/js/51.js",
    "revision": "ef8aa09099f708c3e99cdbb0dd77a67d"
  },
  {
    "url": "assets/js/510.js",
    "revision": "657baa5520dd11b53f12c464321b8d5b"
  },
  {
    "url": "assets/js/511.js",
    "revision": "9b31b3bffc12ec766a75a4e43383f983"
  },
  {
    "url": "assets/js/512.js",
    "revision": "0d2f20b0b4d8d82216544a53d1a74e8e"
  },
  {
    "url": "assets/js/513.js",
    "revision": "1498a4b9efeae0cc39e7873918725547"
  },
  {
    "url": "assets/js/514.js",
    "revision": "0473a5c385f1ec858cc77c1f77c1d574"
  },
  {
    "url": "assets/js/515.js",
    "revision": "92085d81fe48cacb637845278ceb2be3"
  },
  {
    "url": "assets/js/516.js",
    "revision": "8433d29bdfe701b59a92813ec210f79e"
  },
  {
    "url": "assets/js/517.js",
    "revision": "3bb7fee1e312396e17b8bed2d2466150"
  },
  {
    "url": "assets/js/518.js",
    "revision": "f1edd50866baf48b19bf9b9798d7ae5f"
  },
  {
    "url": "assets/js/519.js",
    "revision": "9d354a5e1a911876adf804d15821a209"
  },
  {
    "url": "assets/js/52.js",
    "revision": "6072ad815c1eb8d375b89f6443515b2c"
  },
  {
    "url": "assets/js/520.js",
    "revision": "79097e4d07104e96795424b2d5c2a553"
  },
  {
    "url": "assets/js/521.js",
    "revision": "5a55e282c5d235289e43bc6ff8d8fb04"
  },
  {
    "url": "assets/js/522.js",
    "revision": "8682ce94a7dfba5c73c99542506943a9"
  },
  {
    "url": "assets/js/523.js",
    "revision": "3b8fc7f269bc12ca65cd9b57b57b5526"
  },
  {
    "url": "assets/js/524.js",
    "revision": "a500b797108499e1b1670bafee88bcfe"
  },
  {
    "url": "assets/js/525.js",
    "revision": "c533e3d262c1b0cd5053c10139cda7d2"
  },
  {
    "url": "assets/js/526.js",
    "revision": "d4acb8dc65fcc161268364cd789090d2"
  },
  {
    "url": "assets/js/527.js",
    "revision": "1f75d2230b769cc4e2c7557fb65d616e"
  },
  {
    "url": "assets/js/528.js",
    "revision": "929b4065a1406005df4e077ed6d83c24"
  },
  {
    "url": "assets/js/529.js",
    "revision": "4ddb427bde745fbbf9e6af1af565d3d6"
  },
  {
    "url": "assets/js/53.js",
    "revision": "b9bca321648cc7bd94cc97bebfa03140"
  },
  {
    "url": "assets/js/530.js",
    "revision": "62462e628c0aab2099981e1c80839d0f"
  },
  {
    "url": "assets/js/531.js",
    "revision": "149d7a254004aaf22d25e7089e773ad4"
  },
  {
    "url": "assets/js/532.js",
    "revision": "26d3c13b3532f9b94fceb2823b011e10"
  },
  {
    "url": "assets/js/533.js",
    "revision": "e23471c920cfecba5a7886da586f9825"
  },
  {
    "url": "assets/js/534.js",
    "revision": "8b83548a0c3f7dcb144ff8016298aabf"
  },
  {
    "url": "assets/js/535.js",
    "revision": "d58d1930ea7fa110d7eb9976e9a5d95c"
  },
  {
    "url": "assets/js/536.js",
    "revision": "c65f25f4c53991591530b446096f5a2b"
  },
  {
    "url": "assets/js/537.js",
    "revision": "a3f016171a4d2afc3146243bc95dca40"
  },
  {
    "url": "assets/js/538.js",
    "revision": "ef528c0a615655ec233d315ebf79ff44"
  },
  {
    "url": "assets/js/539.js",
    "revision": "a5f56190f90458511d1cacee85c86344"
  },
  {
    "url": "assets/js/54.js",
    "revision": "6b55e5deb457ae4a73136943dec3c388"
  },
  {
    "url": "assets/js/540.js",
    "revision": "b67464aeac2ba6c0b90a2fcce514f07c"
  },
  {
    "url": "assets/js/541.js",
    "revision": "5568495e8a6a2f8365cfdff43f3fbc0f"
  },
  {
    "url": "assets/js/542.js",
    "revision": "67516810db3cc159cda8ab098f67d5f0"
  },
  {
    "url": "assets/js/543.js",
    "revision": "d6888693ddaab58328c07607667ae9f4"
  },
  {
    "url": "assets/js/544.js",
    "revision": "477ab59656a5db93b68968b9e54a8065"
  },
  {
    "url": "assets/js/545.js",
    "revision": "38b0847c2144db90458e90a4cae7a22a"
  },
  {
    "url": "assets/js/546.js",
    "revision": "993eabd2100beb3e912e975039f0cd22"
  },
  {
    "url": "assets/js/547.js",
    "revision": "e80c075709d505ab5d77414676616fbe"
  },
  {
    "url": "assets/js/548.js",
    "revision": "8546a9597a0f7f6ce3bd0fbf6a2f4173"
  },
  {
    "url": "assets/js/549.js",
    "revision": "13113e0462a7ae880162c4e4e72a5f4c"
  },
  {
    "url": "assets/js/55.js",
    "revision": "74c3c53b3e9a669fc7d84aa311ec3f8f"
  },
  {
    "url": "assets/js/550.js",
    "revision": "79361cad982299ea2de716bab17737a0"
  },
  {
    "url": "assets/js/551.js",
    "revision": "5a0b3043c8d58808ae6180d87e8b2523"
  },
  {
    "url": "assets/js/552.js",
    "revision": "b0437b98405cb5d162a39eccdb993566"
  },
  {
    "url": "assets/js/553.js",
    "revision": "d915a58cca9bf97903843da670599731"
  },
  {
    "url": "assets/js/554.js",
    "revision": "cbf82d698fd78a56d5b7a205dd64a0d6"
  },
  {
    "url": "assets/js/555.js",
    "revision": "1ee98427b4221d460cee89e888edd5d5"
  },
  {
    "url": "assets/js/556.js",
    "revision": "30b928e709273730b1820ed50c996769"
  },
  {
    "url": "assets/js/557.js",
    "revision": "b77254c6e1dc38e3b4243028b54fe275"
  },
  {
    "url": "assets/js/558.js",
    "revision": "949b34d5e6c7fdb385163ea0411aed1c"
  },
  {
    "url": "assets/js/559.js",
    "revision": "8b1026989481e619a0bc79f00c29173d"
  },
  {
    "url": "assets/js/56.js",
    "revision": "6d543954e301fdb06b0a68e4a8307b02"
  },
  {
    "url": "assets/js/560.js",
    "revision": "fd4e09a08598aa42babff19f6c491193"
  },
  {
    "url": "assets/js/561.js",
    "revision": "4356bf79102744861ffc25f777e4419c"
  },
  {
    "url": "assets/js/562.js",
    "revision": "85f09396ec35b1772da54abfe8dc634d"
  },
  {
    "url": "assets/js/563.js",
    "revision": "6daf372ca9f619e4c91c5dcf09ec674d"
  },
  {
    "url": "assets/js/564.js",
    "revision": "3d46240f57b0dc06d43dcfc8cb080484"
  },
  {
    "url": "assets/js/565.js",
    "revision": "74e687be43660c5b3eea9e5296ce2c64"
  },
  {
    "url": "assets/js/566.js",
    "revision": "387ded33dc33279c9d520a0503814f51"
  },
  {
    "url": "assets/js/567.js",
    "revision": "c9655d0616a0d725a27fd6560561c2be"
  },
  {
    "url": "assets/js/568.js",
    "revision": "124e120d38bb4f7ac7f24c5a0518b396"
  },
  {
    "url": "assets/js/569.js",
    "revision": "22905192ff05614bfad9c49f3bf7295e"
  },
  {
    "url": "assets/js/57.js",
    "revision": "9d8d185d8e10b52cb534db2f7067fd75"
  },
  {
    "url": "assets/js/570.js",
    "revision": "3ab0b50f8dbded6a731d3e78123fc825"
  },
  {
    "url": "assets/js/571.js",
    "revision": "0ae62e5ca0248b0202610c93d75a7209"
  },
  {
    "url": "assets/js/572.js",
    "revision": "938c6d7b4dc47dce5fb491287e4f30c2"
  },
  {
    "url": "assets/js/573.js",
    "revision": "ef9df2474585ae8c2850188b63f6054e"
  },
  {
    "url": "assets/js/574.js",
    "revision": "54f6b9fa76b25f72d69cebbb8b97ae38"
  },
  {
    "url": "assets/js/575.js",
    "revision": "be6fad9b1c0893d011e4dfdb3efe9286"
  },
  {
    "url": "assets/js/576.js",
    "revision": "2b2000ad11d86b005c3ef9910f6f0b07"
  },
  {
    "url": "assets/js/577.js",
    "revision": "d717cd2003f06cf4b5085dd508f500de"
  },
  {
    "url": "assets/js/578.js",
    "revision": "6442dec2c0141d16cac33f9ccfe7fa5f"
  },
  {
    "url": "assets/js/579.js",
    "revision": "d141191a95e18d4d293f37899a7c7adc"
  },
  {
    "url": "assets/js/58.js",
    "revision": "a6ae449836b69d4ba0ad27412263a6dd"
  },
  {
    "url": "assets/js/580.js",
    "revision": "ba8795aa379bb2a6ed2294cd35132760"
  },
  {
    "url": "assets/js/581.js",
    "revision": "dc6be4ae68dedd4665e6984ea2ad7d1e"
  },
  {
    "url": "assets/js/582.js",
    "revision": "f1dc59d050f65d4b2067f7712166561e"
  },
  {
    "url": "assets/js/583.js",
    "revision": "ea1ce8b8443469e6f55938b08d8d3224"
  },
  {
    "url": "assets/js/584.js",
    "revision": "920b10bede8d68506e24138993ade32a"
  },
  {
    "url": "assets/js/585.js",
    "revision": "2bbc28d60db740069cc94dca87a4b6a5"
  },
  {
    "url": "assets/js/586.js",
    "revision": "59887a8eb2c2771c7978fb5d9e13a605"
  },
  {
    "url": "assets/js/587.js",
    "revision": "0dc1b61b9e97714650dfa6b6d52bb12b"
  },
  {
    "url": "assets/js/588.js",
    "revision": "a58516c11b3d47360fb7f3659fa216df"
  },
  {
    "url": "assets/js/589.js",
    "revision": "632df8f7eece08540bbdb3fec415a3a2"
  },
  {
    "url": "assets/js/59.js",
    "revision": "170a15551747eae53ed9fd879c6fab71"
  },
  {
    "url": "assets/js/6.js",
    "revision": "80c42598d63171a89c6bdd1eba1e83e7"
  },
  {
    "url": "assets/js/60.js",
    "revision": "e00d2dfd85e954bc5b83c413d77b6b02"
  },
  {
    "url": "assets/js/61.js",
    "revision": "6648b8edbcdb5cbe9152084c386c1a8c"
  },
  {
    "url": "assets/js/62.js",
    "revision": "ac71db6893ee9c21df0746bb25c70975"
  },
  {
    "url": "assets/js/63.js",
    "revision": "8a80ea5230d0eb5c41f2f05ae009a65a"
  },
  {
    "url": "assets/js/64.js",
    "revision": "4f540b50718ca9c10c288af6f8445d7a"
  },
  {
    "url": "assets/js/65.js",
    "revision": "f14b0abe4fa0604974ada21f6d07b6eb"
  },
  {
    "url": "assets/js/66.js",
    "revision": "d2e0f5c55b4c070afbda8d2e7859f6c0"
  },
  {
    "url": "assets/js/67.js",
    "revision": "bace02274ac39f531583ec1d54fcd44f"
  },
  {
    "url": "assets/js/68.js",
    "revision": "1c0ff4fb705b7d0ae1645f3b5fe18430"
  },
  {
    "url": "assets/js/69.js",
    "revision": "fc03b206d7a586213ac0cec075ed7b30"
  },
  {
    "url": "assets/js/7.js",
    "revision": "25cedcf18252ac8563819910c8f40754"
  },
  {
    "url": "assets/js/70.js",
    "revision": "b8933b1a7c226d7d80e8d037fb64b2b0"
  },
  {
    "url": "assets/js/71.js",
    "revision": "2e50acab05e8856cde2dcabdb45b2db6"
  },
  {
    "url": "assets/js/72.js",
    "revision": "3ae4217aa3492434440a89a8e711957a"
  },
  {
    "url": "assets/js/73.js",
    "revision": "62eab17c1ee6e437747ee6397abcf129"
  },
  {
    "url": "assets/js/74.js",
    "revision": "e7e11982159ed35c1fafc672edee4ee5"
  },
  {
    "url": "assets/js/75.js",
    "revision": "6f38b30b0c04bfbead7fe043c334180a"
  },
  {
    "url": "assets/js/76.js",
    "revision": "8a581b2728d8c5aa699e3fc5f59efe96"
  },
  {
    "url": "assets/js/77.js",
    "revision": "0189c4f0630b94dfe3e7d7b5a739d994"
  },
  {
    "url": "assets/js/78.js",
    "revision": "8bc3781de5cfe06cb828a96c90d8e6ef"
  },
  {
    "url": "assets/js/79.js",
    "revision": "d15c260b4e45cffd7397048d0847f10e"
  },
  {
    "url": "assets/js/8.js",
    "revision": "7be2d7d333f4552e7aef9c7857655192"
  },
  {
    "url": "assets/js/80.js",
    "revision": "5b10ee15c93e0fb7448febd14e1bfd50"
  },
  {
    "url": "assets/js/81.js",
    "revision": "ee770596a1e23d35e2a00ead85be522f"
  },
  {
    "url": "assets/js/82.js",
    "revision": "dce1c77e38f38df366743eb0023c44f4"
  },
  {
    "url": "assets/js/83.js",
    "revision": "b9ab8ccd8d964652fc0cb6d0704f5ee5"
  },
  {
    "url": "assets/js/84.js",
    "revision": "11672e19e11280bc48648b66e191ce58"
  },
  {
    "url": "assets/js/85.js",
    "revision": "00acec5c9fcd6b51a41f7a7d8e3774ff"
  },
  {
    "url": "assets/js/86.js",
    "revision": "7b17ce8c4cf24bf3e721815d4273c50e"
  },
  {
    "url": "assets/js/87.js",
    "revision": "bc18c1b6a0d3c801c1bbd0084d20d2e6"
  },
  {
    "url": "assets/js/88.js",
    "revision": "bb37d9ed843c7ad4f6895b9ea94cafa6"
  },
  {
    "url": "assets/js/89.js",
    "revision": "5beadcb1753c6b7ebdf6b4ecf61b5baa"
  },
  {
    "url": "assets/js/9.js",
    "revision": "1d93bcfc957447741011c27b1a84d57b"
  },
  {
    "url": "assets/js/90.js",
    "revision": "99f0e4ea276de396dec81cd61088f5fd"
  },
  {
    "url": "assets/js/91.js",
    "revision": "5346f7e6341da7aeda02c77a7deabc2b"
  },
  {
    "url": "assets/js/92.js",
    "revision": "78b2d7c106e653aa767559308bc2a299"
  },
  {
    "url": "assets/js/93.js",
    "revision": "2e2107c3e0a7395424921f68ef30d76e"
  },
  {
    "url": "assets/js/94.js",
    "revision": "62def60b763a6541a7467d93df8021fd"
  },
  {
    "url": "assets/js/95.js",
    "revision": "4e9cad06e91e4c7e2c28e8c3fd415200"
  },
  {
    "url": "assets/js/96.js",
    "revision": "53b0bd24857d494faabba302908c179a"
  },
  {
    "url": "assets/js/97.js",
    "revision": "ceea0bd1dd01b73f3af837917f05324e"
  },
  {
    "url": "assets/js/98.js",
    "revision": "f70ce826f3dfe26d25daecfa171c39cc"
  },
  {
    "url": "assets/js/99.js",
    "revision": "95ce165991281488371810099cd3653a"
  },
  {
    "url": "assets/js/app.js",
    "revision": "abea8e47d6383db466ac352f5cca4d05"
  },
  {
    "url": "assets/js/styles.js",
    "revision": "22f22b49cc901aa95826401f7ce0930c"
  },
  {
    "url": "blog/category/index.html",
    "revision": "f5220f8459dda31838209bce4e7384a5"
  },
  {
    "url": "blog/code/artists/index.html",
    "revision": "8939c0f795132a69f8302f0e21a63ad7"
  },
  {
    "url": "blog/code/asa.sbh.nz/index.html",
    "revision": "45c1f19f05eb3c067b02ccd564c4f5ec"
  },
  {
    "url": "blog/code/decrypt/index.html",
    "revision": "376da21f46bb3cde1c731d3e5cb553c6"
  },
  {
    "url": "blog/code/divider/index.html",
    "revision": "d5c0cd56153bf4a364d079464b94dcaa"
  },
  {
    "url": "blog/code/first/index.html",
    "revision": "906f32e0c02265ab2e8d79fe789ac7e5"
  },
  {
    "url": "blog/code/fishbarrel/index.html",
    "revision": "8643071f451dbfbdf338c81875152186"
  },
  {
    "url": "blog/code/indent/index.html",
    "revision": "83951048897418eaafad18119d0dad4d"
  },
  {
    "url": "blog/code/index.html",
    "revision": "dd9bed4c40b1818f23307a50c5e0c947"
  },
  {
    "url": "blog/code/ingoa.nz/index.html",
    "revision": "86fde657ea7518f275fd4e881bc390fa"
  },
  {
    "url": "blog/code/nzondemand/index.html",
    "revision": "68b53f6d4640fd8443cf15e3b99ae674"
  },
  {
    "url": "blog/code/picard/index.html",
    "revision": "e1fe538c33aec8ba6421042561ab5e3e"
  },
  {
    "url": "blog/code/qr/index.html",
    "revision": "fc53be3e88ab6f2565db211670db9eca"
  },
  {
    "url": "blog/code/tone/index.html",
    "revision": "aa1b21dc905f134c9bf860188fdf4de7"
  },
  {
    "url": "blog/code/war/index.html",
    "revision": "a9310ee2e59787f9b1268af59c283e64"
  },
  {
    "url": "blog/code/website/index.html",
    "revision": "ba8f1347f6273911a5eab4ce3a17d40c"
  },
  {
    "url": "blog/code/website/route/index.html",
    "revision": "ce2918b1225d674c49d94e4cc36b46d6"
  },
  {
    "url": "blog/code/website/site/index.html",
    "revision": "ab50a050cb8fc7cda78dee2443ef5395"
  },
  {
    "url": "blog/code/xmltv.co.nz/index.html",
    "revision": "aff1d880334bb7923f3367ae8257cc6b"
  },
  {
    "url": "blog/howto/index.html",
    "revision": "69dc8886962d5f5fc15037a2af46be9b"
  },
  {
    "url": "blog/howto/intel865/index.html",
    "revision": "46616fc5f7f2be1bcbbf4ff2b4820448"
  },
  {
    "url": "blog/howto/ios/index.html",
    "revision": "e00cef4d850e55fc1bedcb776255dbd8"
  },
  {
    "url": "blog/howto/nexentastor/index.html",
    "revision": "4aa33f32ab05431b7a9a6173035d517c"
  },
  {
    "url": "blog/howto/pcloadletter/index.html",
    "revision": "1fd80e7507810f3603b4fed55c10e709"
  },
  {
    "url": "blog/howto/raid5/index.html",
    "revision": "57502cdd15ebe4531ba72452163bab81"
  },
  {
    "url": "blog/index.html",
    "revision": "6bf30774238c742505af3594c25a1c05"
  },
  {
    "url": "blog/life/anotheryear/index.html",
    "revision": "4617a7ad2198450064ff781a879cb210"
  },
  {
    "url": "blog/life/birthday/index.html",
    "revision": "0a35b6f51ccb6933bc4a5d1d48bbf907"
  },
  {
    "url": "blog/life/blasphemy/index.html",
    "revision": "8cbc87054db463676c1b11a95a65c686"
  },
  {
    "url": "blog/life/blogger/index.html",
    "revision": "f259985ea55a50ddc0a7a76bf23bcc5c"
  },
  {
    "url": "blog/life/blurry/index.html",
    "revision": "38787fcab7f68587d8eb05206d8a9fee"
  },
  {
    "url": "blog/life/busyday/index.html",
    "revision": "2c1f7b3b0a58f034caac3a29c59142d2"
  },
  {
    "url": "blog/life/domain/index.html",
    "revision": "a6c47947a689ab7c7a114065fb3ea39a"
  },
  {
    "url": "blog/life/exams/index.html",
    "revision": "a9d86957397c3cd8d2979276ef459a75"
  },
  {
    "url": "blog/life/food/index.html",
    "revision": "fa29d60d1546ca76e775ea02218343c3"
  },
  {
    "url": "blog/life/glenview/index.html",
    "revision": "011134ee6596217c134e804305f6d0c5"
  },
  {
    "url": "blog/life/headlines/index.html",
    "revision": "e4110a4888f37615c8d9157ee9b11174"
  },
  {
    "url": "blog/life/index.html",
    "revision": "a5a7a30fc043f2b15fea6e78ca2e6124"
  },
  {
    "url": "blog/life/jws/index.html",
    "revision": "26d89d55ab619d3c6b707294beffd26b"
  },
  {
    "url": "blog/life/keyboard/index.html",
    "revision": "9ca1950a5340dc0069a1c028637372ea"
  },
  {
    "url": "blog/life/lpi201/index.html",
    "revision": "4525fa1ecc6e21fcb39087055d68eccc"
  },
  {
    "url": "blog/life/mashup/index.html",
    "revision": "e8ab0a0e2d5ff3e2505d2bd52bb409c3"
  },
  {
    "url": "blog/life/motorweb/index.html",
    "revision": "36c726d9f8add55cc5d27f41c1741b0d"
  },
  {
    "url": "blog/life/nxe/index.html",
    "revision": "1a0da11aa4ac8a9dc17dd3668be35d53"
  },
  {
    "url": "blog/life/plates/index.html",
    "revision": "99aab80045fa203b8329d81411af3b32"
  },
  {
    "url": "blog/life/queenstown/index.html",
    "revision": "187ce24ba0960ca0ee15671c617bd894"
  },
  {
    "url": "blog/life/racism/index.html",
    "revision": "ad00ababf4a6f87371c05e0707ff60e7"
  },
  {
    "url": "blog/life/roads/index.html",
    "revision": "b049c7188680eebbf72be484657f4f6a"
  },
  {
    "url": "blog/life/roots/index.html",
    "revision": "68c4ee1bb3f3cf12e04fa339002791fc"
  },
  {
    "url": "blog/life/scare/index.html",
    "revision": "5957fcaf29b6ca6939ea227ad21cf874"
  },
  {
    "url": "blog/life/scary/index.html",
    "revision": "e13f549bd148109b221eda530a03f261"
  },
  {
    "url": "blog/life/seti/index.html",
    "revision": "74e3faeb36b6e586dfde9a417a552716"
  },
  {
    "url": "blog/life/skeptical/index.html",
    "revision": "7674757bb23f7955ab9e1c9f1522d662"
  },
  {
    "url": "blog/life/skepticzone/index.html",
    "revision": "3511a65f4d7aa93440ca412aaf328404"
  },
  {
    "url": "blog/life/spam/index.html",
    "revision": "0dc9772afd375ead8b9ba370f5772c4e"
  },
  {
    "url": "blog/life/trademe/index.html",
    "revision": "f8e7b938bf7a6f6faec7bc1af1f65100"
  },
  {
    "url": "blog/life/unforeseen/index.html",
    "revision": "0b87404a5b8ef41d379fdc90b27a304d"
  },
  {
    "url": "blog/life/wobbly/index.html",
    "revision": "0ce44a55ec46e02e247e42bb0fb25c1a"
  },
  {
    "url": "blog/projects/airbag/index.html",
    "revision": "64eb96c162a53f8395cc1d5e974e2d0f"
  },
  {
    "url": "blog/projects/ambilight/index.html",
    "revision": "6c871b9bafa5aed3df14f7cf5cdaf34e"
  },
  {
    "url": "blog/projects/automation/index.html",
    "revision": "06127a7a75e9c96b185714f04bf4f3a0"
  },
  {
    "url": "blog/projects/eyes/index.html",
    "revision": "f4bdc92808b6be09e147142aaa2db978"
  },
  {
    "url": "blog/projects/glitch/index.html",
    "revision": "50c8ef423f9896214e708a28bebb979f"
  },
  {
    "url": "blog/projects/hotel/index.html",
    "revision": "048f02f61df124919845b98b83d15ffd"
  },
  {
    "url": "blog/projects/index.html",
    "revision": "4001c533a7e2cad978b85b7cdeab5219"
  },
  {
    "url": "blog/projects/it100/index.html",
    "revision": "f7f94cb4ba3766ec19da7fc4fd7bffdd"
  },
  {
    "url": "blog/projects/microscope/index.html",
    "revision": "cbde6475a50ca7dab58a147eca2bfc8a"
  },
  {
    "url": "blog/projects/mirror/index.html",
    "revision": "630655ec7f3b796697dffd25d0ee4773"
  },
  {
    "url": "blog/projects/picture/index.html",
    "revision": "746011a13740c51fa4fe6ba12f3b663a"
  },
  {
    "url": "blog/projects/pizza/index.html",
    "revision": "aec131af720af32e4b357d4927703ea6"
  },
  {
    "url": "blog/projects/podcast/index.html",
    "revision": "603dcb3f01f393d8feefb6293d46bc39"
  },
  {
    "url": "blog/projects/reflow/index.html",
    "revision": "73e69dc2075173ba3e4dafcbcdf651b6"
  },
  {
    "url": "blog/projects/sandbox/index.html",
    "revision": "0464085b8094e4b37f1b40145dd33c90"
  },
  {
    "url": "blog/projects/screens/index.html",
    "revision": "8fa365b4d4901a6a036cda9055de321c"
  },
  {
    "url": "blog/projects/sky/index.html",
    "revision": "64520d1193ad8a39d4456478d8775882"
  },
  {
    "url": "blog/projects/starwars/index.html",
    "revision": "abc2c2977b49e8bb865af1dc135c9879"
  },
  {
    "url": "blog/projects/xbox/index.html",
    "revision": "39e2cfadce5999f74afe8db5f4ea8097"
  },
  {
    "url": "blog/random/addresses/index.html",
    "revision": "ed38a9d2bb93783dfa04677db95ed3ce"
  },
  {
    "url": "blog/random/alphabet/index.html",
    "revision": "15b3824572212bf8e56bd1aa7a9e6406"
  },
  {
    "url": "blog/random/astrology/index.html",
    "revision": "1aba4de439a27ab3fb552c2139cefe46"
  },
  {
    "url": "blog/random/chicken/index.html",
    "revision": "e4a5dcc6a6fc3355f233427998ba099b"
  },
  {
    "url": "blog/random/dns/index.html",
    "revision": "2f5805e871b039bd423b412a5fbd4011"
  },
  {
    "url": "blog/random/evp/index.html",
    "revision": "e822b0b89ef8f3dc2e04b212ffa85e74"
  },
  {
    "url": "blog/random/flip/index.html",
    "revision": "479b8feb559709cbda0e266a2a9e7980"
  },
  {
    "url": "blog/random/honeychurch/index.html",
    "revision": "3ae2912a6f2fe2d1f490bc1312345006"
  },
  {
    "url": "blog/random/index.html",
    "revision": "f5e3cf7e8ed806db2c99e57f073dc6ee"
  },
  {
    "url": "blog/random/lottery/index.html",
    "revision": "63d3194d57ef3fc90e255d74877157f3"
  },
  {
    "url": "blog/random/music/index.html",
    "revision": "1797d8f10c869da6c7b7ba4b3cccb88b"
  },
  {
    "url": "blog/random/octal/index.html",
    "revision": "69315d1c7b94b46cc3eb27d075a3ae08"
  },
  {
    "url": "blog/random/os/index.html",
    "revision": "93b0073e90de3a26964e1e069552c314"
  },
  {
    "url": "blog/random/propellers/index.html",
    "revision": "3c6f5aca0d2dee2ee08bfe033cb380e8"
  },
  {
    "url": "blog/random/robux/index.html",
    "revision": "5cf6757b59480a9fb1e3ccc4ea8bedcd"
  },
  {
    "url": "blog/random/super/index.html",
    "revision": "da32fc84392d6b02b72f345867b5d4b6"
  },
  {
    "url": "blog/random/times/index.html",
    "revision": "4f99618f1b9591734d0efef2d5c25bba"
  },
  {
    "url": "blog/random/travel/index.html",
    "revision": "019fd9959ec26d9c7c1a6f4dbbb00a54"
  },
  {
    "url": "blog/random/wilhelm/index.html",
    "revision": "9771c0536b3c72f53de0c7ab80a0de55"
  },
  {
    "url": "blog/random/year/index.html",
    "revision": "253a4d8bfa79841dbbfe05db16f5b68b"
  },
  {
    "url": "blog/skepticism/2015/08/16/asa/index.html",
    "revision": "fc246986e21eab5b53ca12ab4a3a8b9e"
  },
  {
    "url": "blog/skepticism/2015/08/16/awards/index.html",
    "revision": "51ece864197277aa9c36352baadc99b4"
  },
  {
    "url": "blog/skepticism/2015/08/16/bravo/index.html",
    "revision": "1654d198298a5553b47ae40dab3d5d0b"
  },
  {
    "url": "blog/skepticism/2015/08/16/index.html",
    "revision": "0352952e0617220b4aa1c56483c21ffb"
  },
  {
    "url": "blog/skepticism/2015/08/16/jim/index.html",
    "revision": "771704350a657ad1d0f36f2131a3b855"
  },
  {
    "url": "blog/skepticism/2015/08/16/naholo/index.html",
    "revision": "20a3763281b794caa37b8853afba0dc7"
  },
  {
    "url": "blog/skepticism/2015/08/16/resene/index.html",
    "revision": "049c2ec35460c6c1303e53eb4e891c0d"
  },
  {
    "url": "blog/skepticism/2015/08/index.html",
    "revision": "fdab2cf9286b4729972f58670ae1aac0"
  },
  {
    "url": "blog/skepticism/2015/09/20/gop/index.html",
    "revision": "23e5bbf3752a249c4d9198cfe8b4cf12"
  },
  {
    "url": "blog/skepticism/2015/09/20/ignobel/index.html",
    "revision": "c191719eb5c170dfb6c65c8038dbd95d"
  },
  {
    "url": "blog/skepticism/2015/09/20/index.html",
    "revision": "caa22114b35bd5e22fa10be89226a97a"
  },
  {
    "url": "blog/skepticism/2015/09/20/supplements/index.html",
    "revision": "06f01831e8646372e408c12bdc8587b5"
  },
  {
    "url": "blog/skepticism/2015/09/27/ayahuasca/index.html",
    "revision": "bc8c7ee6196dc46e291d2a1698d22798"
  },
  {
    "url": "blog/skepticism/2015/09/27/drought/index.html",
    "revision": "a96840dce60d8ead4c4aeaa40cfbe867"
  },
  {
    "url": "blog/skepticism/2015/09/27/index.html",
    "revision": "4610d970e1122833aab7042ce80494ab"
  },
  {
    "url": "blog/skepticism/2015/09/27/lama/index.html",
    "revision": "f93fe40785f89d632c38d01f51105f35"
  },
  {
    "url": "blog/skepticism/2015/09/27/moon/index.html",
    "revision": "667c0a94623f2f2c16fdac43e7a07bb7"
  },
  {
    "url": "blog/skepticism/2015/09/27/scan/index.html",
    "revision": "3bd7f1ac6401a0339e47c3ad94f22c81"
  },
  {
    "url": "blog/skepticism/2015/09/index.html",
    "revision": "4e9cb09042a3834c82fe561d3c2031c5"
  },
  {
    "url": "blog/skepticism/2015/10/04/ghost/index.html",
    "revision": "b487940ea9240892facb81e00c24b50e"
  },
  {
    "url": "blog/skepticism/2015/10/04/haka/index.html",
    "revision": "47c525034484d8fc0534f329abe7f882"
  },
  {
    "url": "blog/skepticism/2015/10/04/index.html",
    "revision": "8e0cfbbf950a1f2f80a6dea8f4b69efe"
  },
  {
    "url": "blog/skepticism/2015/10/04/mars/index.html",
    "revision": "91d9313fde8f1ba91c222888f2c30d9f"
  },
  {
    "url": "blog/skepticism/2015/10/04/pharmacy/index.html",
    "revision": "37fafc5130655d42bf809c7c49064201"
  },
  {
    "url": "blog/skepticism/2015/10/04/prostate/index.html",
    "revision": "8caaa5134ec4a17ed26318b7f8e11187"
  },
  {
    "url": "blog/skepticism/2015/10/11/armageddon/index.html",
    "revision": "a934e56c2bab9af987a664db07692986"
  },
  {
    "url": "blog/skepticism/2015/10/11/climate/index.html",
    "revision": "606d2206ec3d83e16525235903bc6ffd"
  },
  {
    "url": "blog/skepticism/2015/10/11/ghost/index.html",
    "revision": "c08f1d95059995730d4133c35a510fac"
  },
  {
    "url": "blog/skepticism/2015/10/11/index.html",
    "revision": "81fa9eaef41dacbebfa099aabd952fba"
  },
  {
    "url": "blog/skepticism/2015/10/11/magnesleep/index.html",
    "revision": "c670c01f69069a031edd3c1fa39069e5"
  },
  {
    "url": "blog/skepticism/2015/10/11/nhs/index.html",
    "revision": "5adc8add6d78f9df3527be8f0a988696"
  },
  {
    "url": "blog/skepticism/2015/10/11/prophet/index.html",
    "revision": "1c6f62e71ee002ec91f3e4398f574607"
  },
  {
    "url": "blog/skepticism/2015/10/index.html",
    "revision": "43d6464d7cf034224fb8116c98e3d288"
  },
  {
    "url": "blog/skepticism/2015/11/15/end/index.html",
    "revision": "d65601a254f5aadb7847c80104b3dbf2"
  },
  {
    "url": "blog/skepticism/2015/11/15/index.html",
    "revision": "f8f6a2940c65bdcbe55e9b401eb3ae1e"
  },
  {
    "url": "blog/skepticism/2015/11/index.html",
    "revision": "f0451bb0a459bb3d435470b1e1b4faa7"
  },
  {
    "url": "blog/skepticism/2015/12/13/astrology/index.html",
    "revision": "fd16e2d1879ec715e266f3cb51464f82"
  },
  {
    "url": "blog/skepticism/2015/12/13/cancer/index.html",
    "revision": "2a69be3f0de0e10707317d10ebc759a5"
  },
  {
    "url": "blog/skepticism/2015/12/13/chickenpox/index.html",
    "revision": "965b1a10e82ec6685c60484df1907a82"
  },
  {
    "url": "blog/skepticism/2015/12/13/index.html",
    "revision": "72813204d97fc758d2aeee2a1b3f8094"
  },
  {
    "url": "blog/skepticism/2015/12/13/osteopath/index.html",
    "revision": "3f67fbf7056ef50114dbe1c99ddf3376"
  },
  {
    "url": "blog/skepticism/2015/12/13/priest/index.html",
    "revision": "367a62aa739e95cce0ef2eebb923be9e"
  },
  {
    "url": "blog/skepticism/2015/12/13/psychic/index.html",
    "revision": "5e733d3f41fa22bd41f10f2fd57ad652"
  },
  {
    "url": "blog/skepticism/2015/12/13/vaccines/index.html",
    "revision": "26d06c6b8948e0657e330cd6dbda7319"
  },
  {
    "url": "blog/skepticism/2015/12/index.html",
    "revision": "96dcca950bbee47527c7bbc02fd98212"
  },
  {
    "url": "blog/skepticism/2015/index.html",
    "revision": "b9eb60de28579133008ad79ac2df93ef"
  },
  {
    "url": "blog/skepticism/2016/02/07/antioxidant/index.html",
    "revision": "5b621e19234ef78ffb92d8aac4ab35c3"
  },
  {
    "url": "blog/skepticism/2016/02/07/index.html",
    "revision": "1fe14a17ac877243c6533b33ff81b827"
  },
  {
    "url": "blog/skepticism/2016/02/07/kfc/index.html",
    "revision": "f3d5d334c418bcfe545a816edf543500"
  },
  {
    "url": "blog/skepticism/2016/02/07/ph/index.html",
    "revision": "67e6e88593124028095f3f74b72799a4"
  },
  {
    "url": "blog/skepticism/2016/02/07/sandy/index.html",
    "revision": "258630e0849db8aad8981a16e9def12f"
  },
  {
    "url": "blog/skepticism/2016/02/07/sarfati/index.html",
    "revision": "c6cd4cfc3cdecc64807e50dfbb1e8011"
  },
  {
    "url": "blog/skepticism/2016/02/07/trump/index.html",
    "revision": "fedc5b64c693a8660721df0c6266bebd"
  },
  {
    "url": "blog/skepticism/2016/02/14/coins/index.html",
    "revision": "8121ed411844b1e37b9ab595b5caa73a"
  },
  {
    "url": "blog/skepticism/2016/02/14/fast/index.html",
    "revision": "eb22374b0ca8483fe64735317c83fc63"
  },
  {
    "url": "blog/skepticism/2016/02/14/fluoride/index.html",
    "revision": "361fe26f28f2302523f2ce4b31f79112"
  },
  {
    "url": "blog/skepticism/2016/02/14/icke/index.html",
    "revision": "5c882f447ebf27a6c5df664d32e9e1bc"
  },
  {
    "url": "blog/skepticism/2016/02/14/index.html",
    "revision": "24558f95b28f1611bfb76b29c4cc1da1"
  },
  {
    "url": "blog/skepticism/2016/02/14/yeti/index.html",
    "revision": "22d2283ab2f87edc05251a904960e164"
  },
  {
    "url": "blog/skepticism/2016/02/21/homeopathy/index.html",
    "revision": "c1e8074b7225f33300866605d6e31eba"
  },
  {
    "url": "blog/skepticism/2016/02/21/index.html",
    "revision": "2f6e5512513d7e4f49f36bd9ee53ffc7"
  },
  {
    "url": "blog/skepticism/2016/02/21/monster/index.html",
    "revision": "37944202530e43b2ef5d65c600d54e86"
  },
  {
    "url": "blog/skepticism/2016/02/21/scalia/index.html",
    "revision": "8aee1cd6c19e117ba42b709f6d29d711"
  },
  {
    "url": "blog/skepticism/2016/02/21/shane/index.html",
    "revision": "ed6cca5db5a7b782e7bf447eadf744ab"
  },
  {
    "url": "blog/skepticism/2016/02/21/texas/index.html",
    "revision": "492551b27293293769f7d57d6507699d"
  },
  {
    "url": "blog/skepticism/2016/02/28/acupuncture/index.html",
    "revision": "2c6c6d5b4417b0e10883080ded2c8b29"
  },
  {
    "url": "blog/skepticism/2016/02/28/fsm/index.html",
    "revision": "170d2198b2452651a1048c23aa0af284"
  },
  {
    "url": "blog/skepticism/2016/02/28/index.html",
    "revision": "772d41675ff4dc837e60c7b4ca8ed37e"
  },
  {
    "url": "blog/skepticism/2016/02/28/iv/index.html",
    "revision": "494ee0afe559d72e1595926a046e8e81"
  },
  {
    "url": "blog/skepticism/2016/02/28/natural/index.html",
    "revision": "6632051f6c5d96d93ddb92caf15af689"
  },
  {
    "url": "blog/skepticism/2016/02/28/talc/index.html",
    "revision": "1f7450019460cf30c28b7e2f4bd59523"
  },
  {
    "url": "blog/skepticism/2016/02/index.html",
    "revision": "139d8832e1bcaedf6370caba95733975"
  },
  {
    "url": "blog/skepticism/2016/03/13/herbs/index.html",
    "revision": "9927ebe7fa4948286c6252bd5dc2d82b"
  },
  {
    "url": "blog/skepticism/2016/03/13/index.html",
    "revision": "afd7a62e39bded20c511844d9e0bbb85"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandala/index.html",
    "revision": "039bb165ce01249a837e21f010a1044f"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandela/index.html",
    "revision": "c2da3c2202cb9cbe8d6e2ce2b1c12e3e"
  },
  {
    "url": "blog/skepticism/2016/03/13/spray/index.html",
    "revision": "5a3debd45d3e8f41c4cb2029465862c0"
  },
  {
    "url": "blog/skepticism/2016/03/index.html",
    "revision": "43686d9f358243dd1a2fc2ec93b872cc"
  },
  {
    "url": "blog/skepticism/2016/04/17/charity/index.html",
    "revision": "8f5702bfd0812987cc730bfa51fd962e"
  },
  {
    "url": "blog/skepticism/2016/04/17/chiro/index.html",
    "revision": "b0ba33837ac2ed72d081b9d4158c6ab6"
  },
  {
    "url": "blog/skepticism/2016/04/17/fluoride/index.html",
    "revision": "24febc246300fe1fce6bdf829ec4df8f"
  },
  {
    "url": "blog/skepticism/2016/04/17/index.html",
    "revision": "540989d75616fa6cc72014da868ebe05"
  },
  {
    "url": "blog/skepticism/2016/04/17/lotto/index.html",
    "revision": "70ea17ce65da6914b391280246104cbf"
  },
  {
    "url": "blog/skepticism/2016/04/17/mind/index.html",
    "revision": "5f39b463ec5df393f398b259d248e2fd"
  },
  {
    "url": "blog/skepticism/2016/04/17/whooping/index.html",
    "revision": "f151c6b3205863081dd6c2ac47703b6b"
  },
  {
    "url": "blog/skepticism/2016/04/index.html",
    "revision": "1327a51f2d6e7a32771377eed83e3fa6"
  },
  {
    "url": "blog/skepticism/2016/06/05/1080/index.html",
    "revision": "305f3ee8d288507d8721b35e1eca4d35"
  },
  {
    "url": "blog/skepticism/2016/06/05/acupuncture/index.html",
    "revision": "196a2bb66859a4a269aab40f42a9a71f"
  },
  {
    "url": "blog/skepticism/2016/06/05/family/index.html",
    "revision": "6cbbd7f912ba4e7aae2272f519a55f11"
  },
  {
    "url": "blog/skepticism/2016/06/05/index.html",
    "revision": "670704244a7b73773f6dfa3730fad7e9"
  },
  {
    "url": "blog/skepticism/2016/06/05/limbaugh/index.html",
    "revision": "f4e38d0dcff4bc5bc9d4e181d4915016"
  },
  {
    "url": "blog/skepticism/2016/06/12/bobby/index.html",
    "revision": "839e0898a76bf9ab3f88d49577857770"
  },
  {
    "url": "blog/skepticism/2016/06/12/climate/index.html",
    "revision": "437d15c097ebdd83c7673a64786636bf"
  },
  {
    "url": "blog/skepticism/2016/06/12/index.html",
    "revision": "597e757743af212c7ff7a3720e05372f"
  },
  {
    "url": "blog/skepticism/2016/06/12/pugh/index.html",
    "revision": "7b70ded97aec9f5f9f231d64fcd63486"
  },
  {
    "url": "blog/skepticism/2016/06/12/savage/index.html",
    "revision": "f5b469e0169690d492da1e288175b3ef"
  },
  {
    "url": "blog/skepticism/2016/06/12/sawdust/index.html",
    "revision": "4287a4b271b4ce6d4242bb60599833c6"
  },
  {
    "url": "blog/skepticism/2016/06/19/beauty/index.html",
    "revision": "c8e6c6b08aed852fba2f8f825212c44d"
  },
  {
    "url": "blog/skepticism/2016/06/19/bilderberg/index.html",
    "revision": "c606ae714c2a2d13e43584ffe81877a8"
  },
  {
    "url": "blog/skepticism/2016/06/19/cyf/index.html",
    "revision": "61c8a8c86a443128b1b3480b4ecb95d0"
  },
  {
    "url": "blog/skepticism/2016/06/19/holt/index.html",
    "revision": "29c2fab7a9a42f2559718aa418cf49b4"
  },
  {
    "url": "blog/skepticism/2016/06/19/index.html",
    "revision": "2720a2afc28d8155b1cad2ab84b64f8d"
  },
  {
    "url": "blog/skepticism/2016/06/19/silver/index.html",
    "revision": "c1d901690def9f31d2e28a5809df1b83"
  },
  {
    "url": "blog/skepticism/2016/06/19/ufo/index.html",
    "revision": "7e3deb5d9bd5cf16dd197d70aa09e213"
  },
  {
    "url": "blog/skepticism/2016/06/26/homeopathy/index.html",
    "revision": "8542a53bfb3c99d0a36d60e8dbf5a199"
  },
  {
    "url": "blog/skepticism/2016/06/26/index.html",
    "revision": "458f9fdaef8018297bf148a73797851b"
  },
  {
    "url": "blog/skepticism/2016/06/26/robbins/index.html",
    "revision": "5d91e8fd675f61c6d2540cb31323defc"
  },
  {
    "url": "blog/skepticism/2016/06/26/selfies/index.html",
    "revision": "75caf02e3e984a1c87b074ddd268d853"
  },
  {
    "url": "blog/skepticism/2016/06/26/silver/index.html",
    "revision": "c5dabdee1b0ab074f0ad263f15c603fd"
  },
  {
    "url": "blog/skepticism/2016/06/26/ufos/index.html",
    "revision": "de64c4bd47d0d99a4354c4b1773c227d"
  },
  {
    "url": "blog/skepticism/2016/06/index.html",
    "revision": "48c2e672ac13c5bfd3a9a5be70f9dee8"
  },
  {
    "url": "blog/skepticism/2016/07/03/glyphosate/index.html",
    "revision": "80f50cc87b4bb64aec99794f73c9aee4"
  },
  {
    "url": "blog/skepticism/2016/07/03/gmo/index.html",
    "revision": "cc7eae09e3d38bddb3ffc542c742ad2e"
  },
  {
    "url": "blog/skepticism/2016/07/03/index.html",
    "revision": "133f11b615318f5036aed5e1cfd1a7b7"
  },
  {
    "url": "blog/skepticism/2016/07/03/jail/index.html",
    "revision": "deb77e5429d411b2f299885a42096e5a"
  },
  {
    "url": "blog/skepticism/2016/07/03/ken/index.html",
    "revision": "e16fcaec0ee65cb859775f3e048e71b4"
  },
  {
    "url": "blog/skepticism/2016/07/10/ark/index.html",
    "revision": "88678c51383055d68622c4fcf9e6a166"
  },
  {
    "url": "blog/skepticism/2016/07/10/bee/index.html",
    "revision": "2b6aee43664ab5130adb3f2925c4338e"
  },
  {
    "url": "blog/skepticism/2016/07/10/index.html",
    "revision": "de692487e9d5912daf93d38737d0212c"
  },
  {
    "url": "blog/skepticism/2016/07/10/lottery/index.html",
    "revision": "d5fbcdd8c9234c85c7b2b05ecdf84c5a"
  },
  {
    "url": "blog/skepticism/2016/07/10/murder/index.html",
    "revision": "423f284bc449e25ec8c6d2af05b5f245"
  },
  {
    "url": "blog/skepticism/2016/07/17/dogs/index.html",
    "revision": "ac433a61460243dd753c0f850513b0d1"
  },
  {
    "url": "blog/skepticism/2016/07/17/fsm/index.html",
    "revision": "d6bb6cf13f392b016cdbc7102a7e82fe"
  },
  {
    "url": "blog/skepticism/2016/07/17/fyi/index.html",
    "revision": "560becbb518f8cb45ddf5f235aca946d"
  },
  {
    "url": "blog/skepticism/2016/07/17/index.html",
    "revision": "b70ec0e174cd63c3ed4d98ba354270e5"
  },
  {
    "url": "blog/skepticism/2016/07/17/natural/index.html",
    "revision": "794399df0885f37782ee79cb551e611e"
  },
  {
    "url": "blog/skepticism/2016/07/17/pokemon/index.html",
    "revision": "3f29ab5005dc6d0976d98faf28721629"
  },
  {
    "url": "blog/skepticism/2016/07/index.html",
    "revision": "0f18112baaf3122b9e8a42c19152b5d6"
  },
  {
    "url": "blog/skepticism/2016/08/07/icke/index.html",
    "revision": "2a7edcf18c91d915bdd779c706f8e3f3"
  },
  {
    "url": "blog/skepticism/2016/08/07/index.html",
    "revision": "722c8737ec39f448ecf36b050c6caa33"
  },
  {
    "url": "blog/skepticism/2016/08/21/brian/index.html",
    "revision": "b27fa808cddbe0efb295f2d7f61f1b43"
  },
  {
    "url": "blog/skepticism/2016/08/21/chlorine/index.html",
    "revision": "88cc9db36be984352bd8e9fa4b6df9ad"
  },
  {
    "url": "blog/skepticism/2016/08/21/index.html",
    "revision": "3ba444015b0d955112facb350b9a3a21"
  },
  {
    "url": "blog/skepticism/2016/08/21/murder/index.html",
    "revision": "a57440b0e1c8c34eb72b1c3a3711418b"
  },
  {
    "url": "blog/skepticism/2016/08/21/superfoods/index.html",
    "revision": "672495aa80b137a720a1bb021cf655fe"
  },
  {
    "url": "blog/skepticism/2016/08/21/witch/index.html",
    "revision": "802ae7f2ab1c8a5c7122a7ced1cc4e1c"
  },
  {
    "url": "blog/skepticism/2016/08/28/alcohol/index.html",
    "revision": "0a03758b1ff5680f4c97a0c5dcf28f86"
  },
  {
    "url": "blog/skepticism/2016/08/28/chiro/index.html",
    "revision": "4aed72aca636e03d369ca6b43e331fb2"
  },
  {
    "url": "blog/skepticism/2016/08/28/index.html",
    "revision": "a47c9753a7981fec8d506afb840d2c3e"
  },
  {
    "url": "blog/skepticism/2016/08/28/processed/index.html",
    "revision": "84b01327b395452f5969694d25327b4e"
  },
  {
    "url": "blog/skepticism/2016/08/28/sbh/index.html",
    "revision": "d0d1a8817dd35e69650e55a319d72a58"
  },
  {
    "url": "blog/skepticism/2016/08/index.html",
    "revision": "9552f59056eb733f3bce1fdfe8ab1eba"
  },
  {
    "url": "blog/skepticism/2016/09/18/altruism/index.html",
    "revision": "082a154a713f631ea6f0ba1d2c517e31"
  },
  {
    "url": "blog/skepticism/2016/09/18/better/index.html",
    "revision": "22484285715653dfc20a4d908d587a9b"
  },
  {
    "url": "blog/skepticism/2016/09/18/homeopathy/index.html",
    "revision": "7552a43efd66733dcbfed45d3b8e2f8b"
  },
  {
    "url": "blog/skepticism/2016/09/18/index.html",
    "revision": "70deec3878522b7ebcd8685387e549d0"
  },
  {
    "url": "blog/skepticism/2016/09/18/nonsense/index.html",
    "revision": "76e5c61444b41b482f13b6f981517224"
  },
  {
    "url": "blog/skepticism/2016/09/18/trump/index.html",
    "revision": "a6543f7c6390cc89a7233fde1f500d60"
  },
  {
    "url": "blog/skepticism/2016/09/25/clinic/index.html",
    "revision": "5832b18b7095c21e89cc4c3dc977ff8a"
  },
  {
    "url": "blog/skepticism/2016/09/25/fluoride/index.html",
    "revision": "ca55153b4ed3415b6e664eb9d204f6e4"
  },
  {
    "url": "blog/skepticism/2016/09/25/homeopathy/index.html",
    "revision": "aef8b91f31689e74d815336c91be9a20"
  },
  {
    "url": "blog/skepticism/2016/09/25/index.html",
    "revision": "42aa9d18ad5b66d1b8e7afc41355ef4d"
  },
  {
    "url": "blog/skepticism/2016/09/25/murder/index.html",
    "revision": "3e85d6576db3c1d5af7b8c8a4a33c419"
  },
  {
    "url": "blog/skepticism/2016/09/index.html",
    "revision": "ef9e0e8e49db4d70fa8fb3c496fe18e9"
  },
  {
    "url": "blog/skepticism/2016/10/21/bigfoot/index.html",
    "revision": "ff7b3e705af529e144bfaef8fd71a7ec"
  },
  {
    "url": "blog/skepticism/2016/10/21/breasts/index.html",
    "revision": "72603fa46e30d2bc321be868f0ab125b"
  },
  {
    "url": "blog/skepticism/2016/10/21/index.html",
    "revision": "7cc2c44aaada81425487fc506f74c065"
  },
  {
    "url": "blog/skepticism/2016/10/21/medsafe/index.html",
    "revision": "ebf6741c38dffb322c9031cb78fa7956"
  },
  {
    "url": "blog/skepticism/2016/10/21/zenteq/index.html",
    "revision": "6ec9e3091c53f759f3078c16d842fe5a"
  },
  {
    "url": "blog/skepticism/2016/10/index.html",
    "revision": "f402b722919eefe60ef55d6dfdf37799"
  },
  {
    "url": "blog/skepticism/2016/11/13/conference/index.html",
    "revision": "05a9d664c3bb635771103b3b2177ae79"
  },
  {
    "url": "blog/skepticism/2016/11/13/green/index.html",
    "revision": "feb6dc496c00da15569f5f5e8b72ca05"
  },
  {
    "url": "blog/skepticism/2016/11/13/index.html",
    "revision": "7203a74dfdadd7c18612b589ab4570f2"
  },
  {
    "url": "blog/skepticism/2016/11/13/vice/index.html",
    "revision": "23c51c4724282181f0c0e5d2bc6ff51e"
  },
  {
    "url": "blog/skepticism/2016/11/27/bioptron/index.html",
    "revision": "5dd987ff072ae78dc55b008ba21babe7"
  },
  {
    "url": "blog/skepticism/2016/11/27/conference/index.html",
    "revision": "bff6a9a78d340c50e9348508fd2af58f"
  },
  {
    "url": "blog/skepticism/2016/11/27/earthquake/index.html",
    "revision": "bdb473699b646b4ce8c9bddc60aa718d"
  },
  {
    "url": "blog/skepticism/2016/11/27/index.html",
    "revision": "52ee6815317da458b612b57047806778"
  },
  {
    "url": "blog/skepticism/2016/11/index.html",
    "revision": "210953f1ddd5d32a269016902c077ece"
  },
  {
    "url": "blog/skepticism/2016/12/04/conference/index.html",
    "revision": "199ee4a59bf2688c30d6459a1c494df4"
  },
  {
    "url": "blog/skepticism/2016/12/04/index.html",
    "revision": "3693c40845a4b56c17ba29e720850061"
  },
  {
    "url": "blog/skepticism/2016/12/18/colin/index.html",
    "revision": "1ecbf57eb654d19f01bfb8551f7bd0ea"
  },
  {
    "url": "blog/skepticism/2016/12/18/fiji/index.html",
    "revision": "8cac30f35554630e8cc31918362aa5c3"
  },
  {
    "url": "blog/skepticism/2016/12/18/index.html",
    "revision": "7d80f48d51b14b84519e48369f8a6e33"
  },
  {
    "url": "blog/skepticism/2016/12/18/kinesiology/index.html",
    "revision": "6b4042d2b6a1ee1e8e17cc9978571c70"
  },
  {
    "url": "blog/skepticism/2016/12/18/mmm/index.html",
    "revision": "6610519498737b7d660b67b278c48cfd"
  },
  {
    "url": "blog/skepticism/2016/12/18/nigel/index.html",
    "revision": "236c56401f576fa1e9c84c74b2a08ac4"
  },
  {
    "url": "blog/skepticism/2016/12/index.html",
    "revision": "8efa23c38d4402cb367e49078c33a65e"
  },
  {
    "url": "blog/skepticism/2016/index.html",
    "revision": "4ed982c85b72b157c7e4e4bb6ac4edba"
  },
  {
    "url": "blog/skepticism/2017/01/22/index.html",
    "revision": "3ea74389d9c20f9d1a312828132a1cfc"
  },
  {
    "url": "blog/skepticism/2017/01/22/scientology/index.html",
    "revision": "3f270068f583653c1e4a413ebfb8e88e"
  },
  {
    "url": "blog/skepticism/2017/01/29/creation/index.html",
    "revision": "a7b702a913d2110267a65f7b68651825"
  },
  {
    "url": "blog/skepticism/2017/01/29/index.html",
    "revision": "18158991b39366d7869e16bfa9db5fd7"
  },
  {
    "url": "blog/skepticism/2017/01/index.html",
    "revision": "2ecf7c29a9ec720f709e7b07295b0fe8"
  },
  {
    "url": "blog/skepticism/2017/02/05/fraudster/index.html",
    "revision": "00d92dfc9f41e174b1f0fde998077b15"
  },
  {
    "url": "blog/skepticism/2017/02/05/gervais/index.html",
    "revision": "f1858738fad3756576abad5546ece7ab"
  },
  {
    "url": "blog/skepticism/2017/02/05/index.html",
    "revision": "03938057611a6ba1583ccd19012f3935"
  },
  {
    "url": "blog/skepticism/2017/02/05/scientology/index.html",
    "revision": "65a70283c1b48b0654a57dd2753f4382"
  },
  {
    "url": "blog/skepticism/2017/02/19/homeopathy/index.html",
    "revision": "79ca4ea091dc90c756ee469c1313fc0d"
  },
  {
    "url": "blog/skepticism/2017/02/19/index.html",
    "revision": "af25ed3ab3263aefdfceb48067571e8f"
  },
  {
    "url": "blog/skepticism/2017/02/19/lottery/index.html",
    "revision": "080c7e8fbe076e2e6f412f3cc342718c"
  },
  {
    "url": "blog/skepticism/2017/02/19/vaxxed/index.html",
    "revision": "e4947105f38804bcc541220061ce6f3c"
  },
  {
    "url": "blog/skepticism/2017/02/19/whales/index.html",
    "revision": "427b05fc01110691c2045eeec4036ba5"
  },
  {
    "url": "blog/skepticism/2017/02/index.html",
    "revision": "eede34aed4a5bb5ae0d7ad215480412c"
  },
  {
    "url": "blog/skepticism/2017/03/05/index.html",
    "revision": "2075afe609df0f7be675199a98c45920"
  },
  {
    "url": "blog/skepticism/2017/03/05/rea/index.html",
    "revision": "f412acf9033cbabab77c5941c21f3d4e"
  },
  {
    "url": "blog/skepticism/2017/03/19/fake/index.html",
    "revision": "949f89b05a5c9ebf5d3290b56b301a79"
  },
  {
    "url": "blog/skepticism/2017/03/19/index.html",
    "revision": "0024da0d5c28d5a9a4559a413fa0aa49"
  },
  {
    "url": "blog/skepticism/2017/03/19/murder/index.html",
    "revision": "de7c3b344a46fc74fcde51141375b0e1"
  },
  {
    "url": "blog/skepticism/2017/03/26/census/index.html",
    "revision": "9676e7679049705b6fdc7ca6ef3e1155"
  },
  {
    "url": "blog/skepticism/2017/03/26/index.html",
    "revision": "ea7e62907dc06ee186d5e21f8a6b1c43"
  },
  {
    "url": "blog/skepticism/2017/03/26/nzmj/index.html",
    "revision": "97cd43b000e8efdfa4ef7687817ef251"
  },
  {
    "url": "blog/skepticism/2017/03/26/shaquille/index.html",
    "revision": "05f6b16ffa128397284f9141530fdbec"
  },
  {
    "url": "blog/skepticism/2017/03/index.html",
    "revision": "84d2a6c598e8164888adfea9d19df188"
  },
  {
    "url": "blog/skepticism/2017/04/02/index.html",
    "revision": "f4515862ac81712582e7cc23e1436bf1"
  },
  {
    "url": "blog/skepticism/2017/04/02/nasa/index.html",
    "revision": "fd5ca309e369faf9aad334427595c90a"
  },
  {
    "url": "blog/skepticism/2017/04/02/science/index.html",
    "revision": "ae64b66d04e7c3d9ecb023e118e9dfb1"
  },
  {
    "url": "blog/skepticism/2017/04/02/vaxxed/index.html",
    "revision": "bb78e18381bf9b9acda2d4d223a50bc9"
  },
  {
    "url": "blog/skepticism/2017/04/09/index.html",
    "revision": "3b485e9f28446132f865c8e6f2d13995"
  },
  {
    "url": "blog/skepticism/2017/04/09/tekiri/index.html",
    "revision": "6aaa1155bdea968cd99bd1d6356393e8"
  },
  {
    "url": "blog/skepticism/2017/04/09/vaxxed/index.html",
    "revision": "ab75c6cd55d68428e51407ee0bc2d3ba"
  },
  {
    "url": "blog/skepticism/2017/04/23/arise/index.html",
    "revision": "661389e4cc378241b46af5783b6ea01c"
  },
  {
    "url": "blog/skepticism/2017/04/23/index.html",
    "revision": "1da519c207a59cf6b1c83e43ad0c4b7e"
  },
  {
    "url": "blog/skepticism/2017/04/23/kelvin/index.html",
    "revision": "ad1b3d29ff4c47a20c52bae9f339d957"
  },
  {
    "url": "blog/skepticism/2017/04/index.html",
    "revision": "3e5ea25daf9722c6ddec656cdb341fab"
  },
  {
    "url": "blog/skepticism/2017/05/07/cancer/index.html",
    "revision": "6d88b94c6c60a4bb9f63190bff1d78c3"
  },
  {
    "url": "blog/skepticism/2017/05/07/index.html",
    "revision": "2dfa688420907567808d39893bffa7c8"
  },
  {
    "url": "blog/skepticism/2017/05/07/nigel/index.html",
    "revision": "1a58229efaee762079c3b5dc5462fd89"
  },
  {
    "url": "blog/skepticism/2017/05/21/blasphemy/index.html",
    "revision": "a1881245cb2fe2cea45fc169ac0b64e9"
  },
  {
    "url": "blog/skepticism/2017/05/21/flat/index.html",
    "revision": "4045a7529d5c21a87a344cff763a9544"
  },
  {
    "url": "blog/skepticism/2017/05/21/index.html",
    "revision": "d49cd59c00e14e2db9dace63856bedb7"
  },
  {
    "url": "blog/skepticism/2017/05/21/maori/index.html",
    "revision": "9c1b1d1714785027ec0f60e69ecc4403"
  },
  {
    "url": "blog/skepticism/2017/05/index.html",
    "revision": "92d74b6905a5cb415acff94f59a29336"
  },
  {
    "url": "blog/skepticism/2017/06/04/bigelow/index.html",
    "revision": "b4bf581fc392b22db10d3dd3ee3ef128"
  },
  {
    "url": "blog/skepticism/2017/06/04/climate/index.html",
    "revision": "b228a7cd16212bc50b1d08b6bdc5a9b1"
  },
  {
    "url": "blog/skepticism/2017/06/04/hansford/index.html",
    "revision": "c0990f5cc969bcdbea7b0d29d1a2b1f5"
  },
  {
    "url": "blog/skepticism/2017/06/04/index.html",
    "revision": "79e468ccd74c37b71e8b1528c8243d1f"
  },
  {
    "url": "blog/skepticism/2017/06/04/wasp/index.html",
    "revision": "c6e1d40d34e10d4a1df874e876c9c8b8"
  },
  {
    "url": "blog/skepticism/2017/06/11/colonic/index.html",
    "revision": "93e3b830f417c934d749268456f7099f"
  },
  {
    "url": "blog/skepticism/2017/06/11/credulous/index.html",
    "revision": "c958a261b553ba814599f165d0bd69ff"
  },
  {
    "url": "blog/skepticism/2017/06/11/index.html",
    "revision": "12d776490081509d78c0da0aa2815592"
  },
  {
    "url": "blog/skepticism/2017/06/11/journals/index.html",
    "revision": "ee4acb43896893989823afc5e1f8a6e7"
  },
  {
    "url": "blog/skepticism/2017/06/18/breatharians/index.html",
    "revision": "84f1baf87cfeab281f3afaf3d561fc43"
  },
  {
    "url": "blog/skepticism/2017/06/18/fieldays/index.html",
    "revision": "84fdc249e9759162e42ebbbdfbc4222d"
  },
  {
    "url": "blog/skepticism/2017/06/18/index.html",
    "revision": "565563442964924e586877e90445deaa"
  },
  {
    "url": "blog/skepticism/2017/06/18/jw/index.html",
    "revision": "3ae9cd0ccb7ebef621f0fb393bd80398"
  },
  {
    "url": "blog/skepticism/2017/06/18/oil/index.html",
    "revision": "569f7e62126ab9cd2d068eb49a296d62"
  },
  {
    "url": "blog/skepticism/2017/06/index.html",
    "revision": "a215436ca549ed7ea5fa4fc2004150dd"
  },
  {
    "url": "blog/skepticism/2017/07/02/baby/index.html",
    "revision": "a600012917ea0f98c1722cadd48286ef"
  },
  {
    "url": "blog/skepticism/2017/07/02/index.html",
    "revision": "6732d1489e6e2c9c18ddcef94a681dd6"
  },
  {
    "url": "blog/skepticism/2017/07/02/infowars/index.html",
    "revision": "5e4600ece8ee1373ad57365ac44a7bcc"
  },
  {
    "url": "blog/skepticism/2017/07/02/scientology/index.html",
    "revision": "7312792d09cea2c385a87f2df24f1374"
  },
  {
    "url": "blog/skepticism/2017/07/16/bananas/index.html",
    "revision": "a34668d6e82b7ea68976858b3a6bc435"
  },
  {
    "url": "blog/skepticism/2017/07/16/circles/index.html",
    "revision": "877c295a57c63e7736da1afe523e351a"
  },
  {
    "url": "blog/skepticism/2017/07/16/index.html",
    "revision": "e1a396533a07c79950ccdb8fd3cc482a"
  },
  {
    "url": "blog/skepticism/2017/07/16/siggi/index.html",
    "revision": "2ce4545b2b89cb51a4ebd38233d41d2c"
  },
  {
    "url": "blog/skepticism/2017/07/16/vaxxed/index.html",
    "revision": "94b1b1b06ea3d9e3b51dd1ee53d3b167"
  },
  {
    "url": "blog/skepticism/2017/07/30/bleach/index.html",
    "revision": "8bb8b065b4db802c03a2b4c37cbd59a4"
  },
  {
    "url": "blog/skepticism/2017/07/30/bluebeam/index.html",
    "revision": "a607e1d1e7279b2678cdc7308ee58266"
  },
  {
    "url": "blog/skepticism/2017/07/30/index.html",
    "revision": "c052a09660861c848b4e3bb35104fa01"
  },
  {
    "url": "blog/skepticism/2017/07/30/police/index.html",
    "revision": "909f10241ab44394fa50e7774401b052"
  },
  {
    "url": "blog/skepticism/2017/07/index.html",
    "revision": "ea84a347dd0d2126965be6bb2030f35f"
  },
  {
    "url": "blog/skepticism/2017/08/06/conned/index.html",
    "revision": "7c6bf40de4f527b17cba1d290b463af5"
  },
  {
    "url": "blog/skepticism/2017/08/06/doll/index.html",
    "revision": "3bef28e742083c4044584d38a7aee38c"
  },
  {
    "url": "blog/skepticism/2017/08/06/index.html",
    "revision": "e70790b592a3a6fb77a5a6bb6572c4c7"
  },
  {
    "url": "blog/skepticism/2017/08/06/jacinda/index.html",
    "revision": "4c7d237dcaac75af8b33c65854e55f04"
  },
  {
    "url": "blog/skepticism/2017/08/06/lotto/index.html",
    "revision": "eb54493215e6cbfe70b00448c8988dea"
  },
  {
    "url": "blog/skepticism/2017/08/27/index.html",
    "revision": "133260966bf8929c6161d83b93d5e576"
  },
  {
    "url": "blog/skepticism/2017/08/27/naturopath/index.html",
    "revision": "39e6020082fb46ec620dc3a5f3302bed"
  },
  {
    "url": "blog/skepticism/2017/08/27/satanic/index.html",
    "revision": "b12041b9d340eadc6ca7404d6bfea099"
  },
  {
    "url": "blog/skepticism/2017/08/index.html",
    "revision": "bac7e4c6fa7bd71d45bdb753ce906475"
  },
  {
    "url": "blog/skepticism/2017/09/03/apocalypse/index.html",
    "revision": "741723c53ef5d08508df409c98eb60db"
  },
  {
    "url": "blog/skepticism/2017/09/03/cancer/index.html",
    "revision": "15dda662323da044592b73778a0b2f46"
  },
  {
    "url": "blog/skepticism/2017/09/03/index.html",
    "revision": "4c1ee1ae412965885c223df775ba1d41"
  },
  {
    "url": "blog/skepticism/2017/09/03/rectangle/index.html",
    "revision": "884800b7c4b4d2d04c8e6e51b8c8cbd1"
  },
  {
    "url": "blog/skepticism/2017/09/03/stargate/index.html",
    "revision": "8b940da6a307950aa6a73c99dab7844f"
  },
  {
    "url": "blog/skepticism/2017/09/index.html",
    "revision": "ff0c786edf0d1c02491239e32f442985"
  },
  {
    "url": "blog/skepticism/2017/10/01/apocalypse/index.html",
    "revision": "3dfb9fed82212fb5eb809e20edcdbb96"
  },
  {
    "url": "blog/skepticism/2017/10/01/freeman/index.html",
    "revision": "bbdaa79df0b623cbbe7837370e5a29a1"
  },
  {
    "url": "blog/skepticism/2017/10/01/index.html",
    "revision": "1a97e3deaba75e982a2dafec111744e2"
  },
  {
    "url": "blog/skepticism/2017/10/01/pharmacy/index.html",
    "revision": "d54359c8c7850277a589dcaa4249cf64"
  },
  {
    "url": "blog/skepticism/2017/10/08/index.html",
    "revision": "5b31ceebea9cc5890d1c82be1c6871e7"
  },
  {
    "url": "blog/skepticism/2017/10/08/pill/index.html",
    "revision": "d4e4fba608ca1c75db61df452ab7a7b1"
  },
  {
    "url": "blog/skepticism/2017/10/08/qsb/index.html",
    "revision": "7d3529de53255856fc68b610f4ead0d5"
  },
  {
    "url": "blog/skepticism/2017/10/08/vegas/index.html",
    "revision": "9bd2a529a2e49552fb580e143db5d87b"
  },
  {
    "url": "blog/skepticism/2017/10/15/doterra/index.html",
    "revision": "bbb63f4e6b1f155fcdba7e17ca64ae55"
  },
  {
    "url": "blog/skepticism/2017/10/15/index.html",
    "revision": "e0251e8183e08d0f372c36d85a41a576"
  },
  {
    "url": "blog/skepticism/2017/10/15/lie/index.html",
    "revision": "c4870c16c872d6437a24fc98fc4cacce"
  },
  {
    "url": "blog/skepticism/2017/10/15/soap/index.html",
    "revision": "9d0cfcd6103885defd9d83bb59079d19"
  },
  {
    "url": "blog/skepticism/2017/10/index.html",
    "revision": "bc91e7f5d116afccf32e7805d5a9f668"
  },
  {
    "url": "blog/skepticism/2017/11/05/conference/index.html",
    "revision": "f1f2a7dc01303d9f58ea22ed372f912c"
  },
  {
    "url": "blog/skepticism/2017/11/05/glyphosate/index.html",
    "revision": "7c9847531ea1a30aa1f7fb739c43390d"
  },
  {
    "url": "blog/skepticism/2017/11/05/index.html",
    "revision": "e85d9d0401bf87d4363ef293f344d870"
  },
  {
    "url": "blog/skepticism/2017/11/05/stranded/index.html",
    "revision": "feb77cc147184d9554c8001563cf9f4f"
  },
  {
    "url": "blog/skepticism/2017/11/05/tracts/index.html",
    "revision": "efa0abb5f332908b1f7d7b41f32c597a"
  },
  {
    "url": "blog/skepticism/2017/11/12/ghost/index.html",
    "revision": "ab2d7eb422a14e7b14d09899c3325a0d"
  },
  {
    "url": "blog/skepticism/2017/11/12/green/index.html",
    "revision": "839fba8eab4cdc67451523530eef2393"
  },
  {
    "url": "blog/skepticism/2017/11/12/harassment/index.html",
    "revision": "b3c9f80eb6f47f721b181b0f1fd81541"
  },
  {
    "url": "blog/skepticism/2017/11/12/index.html",
    "revision": "781b820313cdc51f7d53feb757a3c026"
  },
  {
    "url": "blog/skepticism/2017/11/12/libby/index.html",
    "revision": "8c61c85b8bad27b9891812ba9811e8ba"
  },
  {
    "url": "blog/skepticism/2017/11/index.html",
    "revision": "e07361ec7f28dfb9a708d8acf423a55d"
  },
  {
    "url": "blog/skepticism/2017/12/03/acupuncture/index.html",
    "revision": "88953b989a654e5f62d055616478c3ff"
  },
  {
    "url": "blog/skepticism/2017/12/03/denialism/index.html",
    "revision": "05ea190f0b179fb60119a4a64d5413c7"
  },
  {
    "url": "blog/skepticism/2017/12/03/dowsing/index.html",
    "revision": "394d3b0af1ce17d2a3ad07e31cff1f18"
  },
  {
    "url": "blog/skepticism/2017/12/03/holes/index.html",
    "revision": "12e681b90adc7e1e4620f34a698d8489"
  },
  {
    "url": "blog/skepticism/2017/12/03/index.html",
    "revision": "6823c347d0884e6fa14f0c9920cfcc68"
  },
  {
    "url": "blog/skepticism/2017/12/17/index.html",
    "revision": "68e7100be05f43016a42234695276e24"
  },
  {
    "url": "blog/skepticism/2017/12/17/nhs/index.html",
    "revision": "65b477e5f753a0cc80ad0fa3dce25449"
  },
  {
    "url": "blog/skepticism/2017/12/17/oto/index.html",
    "revision": "9fddbd524b2fdb7621e0aa8aaa128497"
  },
  {
    "url": "blog/skepticism/2017/12/17/pastafarian/index.html",
    "revision": "9376215cbfd9b063cf9cc53a72d6f2a6"
  },
  {
    "url": "blog/skepticism/2017/12/17/shc/index.html",
    "revision": "5e675d5914c195e8233ab74db02c57d0"
  },
  {
    "url": "blog/skepticism/2017/12/17/wellworks/index.html",
    "revision": "777754e96735aaf650b6dfc9aff72780"
  },
  {
    "url": "blog/skepticism/2017/12/index.html",
    "revision": "c1c0220d5eea472002ff96830819b22f"
  },
  {
    "url": "blog/skepticism/2017/index.html",
    "revision": "cd638da66a593cb09a7ecf13ba44a218"
  },
  {
    "url": "blog/skepticism/2018/01/21/grounding/index.html",
    "revision": "7b1bad83cca5ec4a3606f8fffc3676a1"
  },
  {
    "url": "blog/skepticism/2018/01/21/index.html",
    "revision": "8e2d0e71e75fd887b388c7edf381826a"
  },
  {
    "url": "blog/skepticism/2018/01/21/naturopath/index.html",
    "revision": "49c44bd8a3a0f76a5088cd79076757d8"
  },
  {
    "url": "blog/skepticism/2018/01/21/respen/index.html",
    "revision": "c50e09955eb4693896b39cf09b8dec7b"
  },
  {
    "url": "blog/skepticism/2018/01/28/bears/index.html",
    "revision": "4e30c310f4e5e0573590c4069f4f283d"
  },
  {
    "url": "blog/skepticism/2018/01/28/index.html",
    "revision": "79fec950258d32450e93fabe1355d487"
  },
  {
    "url": "blog/skepticism/2018/01/28/peppering/index.html",
    "revision": "81f6f8b311ee74d6576a60cbd662f8cc"
  },
  {
    "url": "blog/skepticism/2018/01/28/pet/index.html",
    "revision": "5d77c1788faf84d8af53075edb9851b4"
  },
  {
    "url": "blog/skepticism/2018/01/28/quake/index.html",
    "revision": "4bed4cfc8306639eed92ffd68dd9729e"
  },
  {
    "url": "blog/skepticism/2018/01/28/scientology/index.html",
    "revision": "dc733b8b62f9581d749955b6f50bc68a"
  },
  {
    "url": "blog/skepticism/2018/01/index.html",
    "revision": "8b7eb76c21db79bcef9893eb6540021a"
  },
  {
    "url": "blog/skepticism/2018/02/11/asa/index.html",
    "revision": "5a1fc4c3d0382e4481776eca6f5901f9"
  },
  {
    "url": "blog/skepticism/2018/02/11/cannabis/index.html",
    "revision": "7fd59ab959c7b195c04bee483fa29d39"
  },
  {
    "url": "blog/skepticism/2018/02/11/elon/index.html",
    "revision": "1541c6765028857f7bebaaa53963a72f"
  },
  {
    "url": "blog/skepticism/2018/02/11/homeopathy/index.html",
    "revision": "9e1f6391ee8b56a07df0993b5842f84e"
  },
  {
    "url": "blog/skepticism/2018/02/11/index.html",
    "revision": "d8ffc0f787ab53fb93f7b428e84000d3"
  },
  {
    "url": "blog/skepticism/2018/02/11/water/index.html",
    "revision": "8e90f57efb8f15a3339de43bd40030af"
  },
  {
    "url": "blog/skepticism/2018/02/25/crisis/index.html",
    "revision": "12eea51b5f98db6fc2a98223d1e2b1f6"
  },
  {
    "url": "blog/skepticism/2018/02/25/eggs/index.html",
    "revision": "6ef01138e1d58c4165423cdc7c7e4f20"
  },
  {
    "url": "blog/skepticism/2018/02/25/fsm/index.html",
    "revision": "eed06b17dc00e0cf128fb8a2b3ab8b98"
  },
  {
    "url": "blog/skepticism/2018/02/25/index.html",
    "revision": "24722fda2d69df78a88bd0760d6c118b"
  },
  {
    "url": "blog/skepticism/2018/02/25/number/index.html",
    "revision": "6e769c8d91cf0f8abc3497d228cf3c08"
  },
  {
    "url": "blog/skepticism/2018/02/25/quackery/index.html",
    "revision": "fda2d1dc6d8b5d154a0448db45bca826"
  },
  {
    "url": "blog/skepticism/2018/02/index.html",
    "revision": "f61351dafd4cb8c2854cac004a6fd563"
  },
  {
    "url": "blog/skepticism/2018/03/11/ai/index.html",
    "revision": "4ccde91346da28793121bd3f001cf53e"
  },
  {
    "url": "blog/skepticism/2018/03/11/index.html",
    "revision": "f0cc6f8ec3e24fbbd291e0c465c14672"
  },
  {
    "url": "blog/skepticism/2018/03/11/radiation/index.html",
    "revision": "c125480e8401a07df766491232375d24"
  },
  {
    "url": "blog/skepticism/2018/03/11/reiki/index.html",
    "revision": "a8ec16dd274edd2798344c02cc263e47"
  },
  {
    "url": "blog/skepticism/2018/03/11/ufo/index.html",
    "revision": "fffbc34e1b1e46ee56d12e98b5fb1dcb"
  },
  {
    "url": "blog/skepticism/2018/03/18/ghost/index.html",
    "revision": "23bff2dfd9b535918394b8187b09e7f8"
  },
  {
    "url": "blog/skepticism/2018/03/18/index.html",
    "revision": "2e2000cf9a5605c80f83be3a8e62b6fb"
  },
  {
    "url": "blog/skepticism/2018/03/18/psychic/index.html",
    "revision": "436e58faf3a700db24b4f650fc9bf8ab"
  },
  {
    "url": "blog/skepticism/2018/03/18/quack/index.html",
    "revision": "a128488ae1114cf3085a8bf8818ce494"
  },
  {
    "url": "blog/skepticism/2018/03/18/radiation/index.html",
    "revision": "76c6ced4eff0c2e53045e1f10a7a637a"
  },
  {
    "url": "blog/skepticism/2018/03/index.html",
    "revision": "e436bc695b16fee028328acf34b250de"
  },
  {
    "url": "blog/skepticism/2018/04/08/calocurb/index.html",
    "revision": "dd8f672bd13cc19147fac9bdb074ae5a"
  },
  {
    "url": "blog/skepticism/2018/04/08/cam/index.html",
    "revision": "8e1d421792ff7b7231048eeda3afc2f7"
  },
  {
    "url": "blog/skepticism/2018/04/08/index.html",
    "revision": "8c2fe5b8e665da83d0d553b8a615428b"
  },
  {
    "url": "blog/skepticism/2018/04/08/psychic/index.html",
    "revision": "2eea0e214efbf5b8acccdf12ee4ee35f"
  },
  {
    "url": "blog/skepticism/2018/04/08/vaccines/index.html",
    "revision": "2d2f683609425c947c71daa010e6e25f"
  },
  {
    "url": "blog/skepticism/2018/04/15/coffee/index.html",
    "revision": "5ea2c444f4f007679c3ebcfa6100d793"
  },
  {
    "url": "blog/skepticism/2018/04/15/ignorance/index.html",
    "revision": "62a1ad56deee999eefd8eb152e108346"
  },
  {
    "url": "blog/skepticism/2018/04/15/index.html",
    "revision": "1e0c753583861cab8c613690c048a20e"
  },
  {
    "url": "blog/skepticism/2018/04/15/nasa/index.html",
    "revision": "2d5f7d4805e3b582bff9b746c06d1bdb"
  },
  {
    "url": "blog/skepticism/2018/04/15/tapu/index.html",
    "revision": "9eb00b2559fe2712877a354a2d193ec7"
  },
  {
    "url": "blog/skepticism/2018/04/29/google/index.html",
    "revision": "07f83e0649d69c86b35a133a4341fff2"
  },
  {
    "url": "blog/skepticism/2018/04/29/homeopathy/index.html",
    "revision": "a7401f0cfcb6ed50febc5cbdedcbcda1"
  },
  {
    "url": "blog/skepticism/2018/04/29/index.html",
    "revision": "a8c96e6d701c806eb97452e8b1eb3846"
  },
  {
    "url": "blog/skepticism/2018/04/29/ken/index.html",
    "revision": "f4b1a06b2f08820e5f89cce105ce59a0"
  },
  {
    "url": "blog/skepticism/2018/04/29/v2k/index.html",
    "revision": "e999fbab25b27a4b6b6e5549de821d1c"
  },
  {
    "url": "blog/skepticism/2018/04/index.html",
    "revision": "6ad28d8fc86f4f69fd98d4aa3a4da343"
  },
  {
    "url": "blog/skepticism/2018/05/13/astrology/index.html",
    "revision": "2361d2d476bd6a4e0a0801959aadf0ed"
  },
  {
    "url": "blog/skepticism/2018/05/13/crystals/index.html",
    "revision": "789c8f42a16f036f71383b1fac92a383"
  },
  {
    "url": "blog/skepticism/2018/05/13/dawkins/index.html",
    "revision": "3ec119f81591fd2b17f87de5bcc16051"
  },
  {
    "url": "blog/skepticism/2018/05/13/index.html",
    "revision": "234c1b741896e2fa2a8bbe226818c04f"
  },
  {
    "url": "blog/skepticism/2018/05/13/kangen/index.html",
    "revision": "80e4ae924e6e92125d287177d7be61cb"
  },
  {
    "url": "blog/skepticism/2018/05/13/vitamins/index.html",
    "revision": "98a48638ba58a19d63b1477c4351b17e"
  },
  {
    "url": "blog/skepticism/2018/05/27/flat/index.html",
    "revision": "057911b49259b8dabb95533967f2b36f"
  },
  {
    "url": "blog/skepticism/2018/05/27/index.html",
    "revision": "54a0076f27ff4a2641611b8c6f1fe232"
  },
  {
    "url": "blog/skepticism/2018/05/27/kangen/index.html",
    "revision": "ad145060f2a474672d742d8ed9704792"
  },
  {
    "url": "blog/skepticism/2018/05/27/ness/index.html",
    "revision": "a0ee9bc8156ca0d947e2705928955fce"
  },
  {
    "url": "blog/skepticism/2018/05/27/oz/index.html",
    "revision": "e79af34c0e921eaa453cd1624367743b"
  },
  {
    "url": "blog/skepticism/2018/05/27/psychic/index.html",
    "revision": "11a0801ecf31e9840bddf21e7512e424"
  },
  {
    "url": "blog/skepticism/2018/05/index.html",
    "revision": "934cd87bf089c172c57907dccb0413fc"
  },
  {
    "url": "blog/skepticism/2018/06/10/astrology/index.html",
    "revision": "1a539ec90d7f936bb40e22ba6266d02c"
  },
  {
    "url": "blog/skepticism/2018/06/10/index.html",
    "revision": "cf08039e0d256b50e72b381fece23009"
  },
  {
    "url": "blog/skepticism/2018/06/10/nhs/index.html",
    "revision": "ccac1a2200c3ec43075998e8fbb60b57"
  },
  {
    "url": "blog/skepticism/2018/06/10/shakti/index.html",
    "revision": "c2e4e3314e93115c56778983aa27d235"
  },
  {
    "url": "blog/skepticism/2018/06/10/weetbix/index.html",
    "revision": "59d2876f8b05d21c35622f321c7bad59"
  },
  {
    "url": "blog/skepticism/2018/06/24/blasphemy/index.html",
    "revision": "c266497688f98608436dd718debb4b5a"
  },
  {
    "url": "blog/skepticism/2018/06/24/cannabis/index.html",
    "revision": "300bfe9e108c85addef3a032e64c4f74"
  },
  {
    "url": "blog/skepticism/2018/06/24/hotdog/index.html",
    "revision": "3c7208416802c2c36626eebcca0bc02a"
  },
  {
    "url": "blog/skepticism/2018/06/24/index.html",
    "revision": "1a660ba232a5b02a6332b953d4e652f0"
  },
  {
    "url": "blog/skepticism/2018/06/24/led/index.html",
    "revision": "104640e78bec20337a09aa044ea927dd"
  },
  {
    "url": "blog/skepticism/2018/06/index.html",
    "revision": "5317f41169436c124676c96b920cf00b"
  },
  {
    "url": "blog/skepticism/2018/07/08/bullet/index.html",
    "revision": "1004e84d7352796868d0cb29dd801a1f"
  },
  {
    "url": "blog/skepticism/2018/07/08/chiros/index.html",
    "revision": "cff3af178e6e062065499554b70d7ce9"
  },
  {
    "url": "blog/skepticism/2018/07/08/hiv/index.html",
    "revision": "5185496a453f596fdbb94833d5ec3f3c"
  },
  {
    "url": "blog/skepticism/2018/07/08/hrv/index.html",
    "revision": "e47d814881a7fa7754ce769ab9c6cec9"
  },
  {
    "url": "blog/skepticism/2018/07/08/index.html",
    "revision": "8e97e23d0e5206a78f0485616d819228"
  },
  {
    "url": "blog/skepticism/2018/07/22/cancer/index.html",
    "revision": "c95b722f9d4315d18d2f3daaaf180962"
  },
  {
    "url": "blog/skepticism/2018/07/22/index.html",
    "revision": "eeaa42648aeb3f4675a63182abba4744"
  },
  {
    "url": "blog/skepticism/2018/07/22/resurrection/index.html",
    "revision": "cba6feb9a743d7ad5f12cce9644645b9"
  },
  {
    "url": "blog/skepticism/2018/07/22/talc/index.html",
    "revision": "a39457bd1c0050276906d6a6f2e1e833"
  },
  {
    "url": "blog/skepticism/2018/07/22/visas/index.html",
    "revision": "4073742c225c24645f2833bd6fe515c5"
  },
  {
    "url": "blog/skepticism/2018/07/index.html",
    "revision": "772d4c89f5681cd8ec95ddffe0e80b59"
  },
  {
    "url": "blog/skepticism/2018/08/05/conf/index.html",
    "revision": "ff82cb10b9b0276e8e20af09aba8619f"
  },
  {
    "url": "blog/skepticism/2018/08/05/index.html",
    "revision": "b3293acca7dfbaa2bcbe8d794535a184"
  },
  {
    "url": "blog/skepticism/2018/08/05/qanon/index.html",
    "revision": "4a6ff5abb3e1aec958434ca48ce55cd9"
  },
  {
    "url": "blog/skepticism/2018/08/19/index.html",
    "revision": "c36f8f1b96b967792094b2e9624803c6"
  },
  {
    "url": "blog/skepticism/2018/08/19/jw/index.html",
    "revision": "e643fe472a28cf77cd0ca1777861a026"
  },
  {
    "url": "blog/skepticism/2018/08/index.html",
    "revision": "b4c1697acaeebbd98f2524cc17bb2047"
  },
  {
    "url": "blog/skepticism/2018/09/02/allergy/index.html",
    "revision": "8b251ffa2be9544b1459baca016f9262"
  },
  {
    "url": "blog/skepticism/2018/09/02/catholic/index.html",
    "revision": "fdaba637e556be7fbb7b4c38ddc2d131"
  },
  {
    "url": "blog/skepticism/2018/09/02/index.html",
    "revision": "744b3ace722cc8c745117728ad8589f7"
  },
  {
    "url": "blog/skepticism/2018/09/02/jw/index.html",
    "revision": "de2985fe1270cf126bd6ed7095f280b2"
  },
  {
    "url": "blog/skepticism/2018/09/02/sen/index.html",
    "revision": "95af3013888c113fd50d62a181730999"
  },
  {
    "url": "blog/skepticism/2018/09/16/1080/index.html",
    "revision": "a8c9395e76774517feb383793fe2efab"
  },
  {
    "url": "blog/skepticism/2018/09/16/church/index.html",
    "revision": "4e5641c4ba34bbec1ac7849514e667f7"
  },
  {
    "url": "blog/skepticism/2018/09/16/index.html",
    "revision": "35a43ddf674f263bce260231230ab1ad"
  },
  {
    "url": "blog/skepticism/2018/09/16/jones/index.html",
    "revision": "ae211e260014ecbe6fb3fcaf1b230441"
  },
  {
    "url": "blog/skepticism/2018/09/16/scammers/index.html",
    "revision": "82765a080bdceec277a3198e5f90695c"
  },
  {
    "url": "blog/skepticism/2018/09/30/index.html",
    "revision": "ff3e4dc58b0db1e3b11c00a64ce5737a"
  },
  {
    "url": "blog/skepticism/2018/09/30/jw/index.html",
    "revision": "33e5248db29118fc4c6197d75cfa6869"
  },
  {
    "url": "blog/skepticism/2018/09/30/oto/index.html",
    "revision": "7f0b27b2260b5ef70ed1fa182aba2cc8"
  },
  {
    "url": "blog/skepticism/2018/09/30/who/index.html",
    "revision": "c800a7735cc709e67f352fd0a1a30b12"
  },
  {
    "url": "blog/skepticism/2018/09/index.html",
    "revision": "2bfd25265cb7cdcf663437f95c7c947b"
  },
  {
    "url": "blog/skepticism/2018/10/14/hacked/index.html",
    "revision": "d67bc69b9aceeba736996164e2862136"
  },
  {
    "url": "blog/skepticism/2018/10/14/index.html",
    "revision": "0b3d1d4b4937a894ce85a30413f8b026"
  },
  {
    "url": "blog/skepticism/2018/10/14/kangen/index.html",
    "revision": "1b579d1c24327360ef6b39bf043912ae"
  },
  {
    "url": "blog/skepticism/2018/10/14/pakistan/index.html",
    "revision": "b039fc54a1fa06e67a5d5cfb5cf84bb3"
  },
  {
    "url": "blog/skepticism/2018/10/14/sarah/index.html",
    "revision": "97d11174c1268a5c1290ededbcba451a"
  },
  {
    "url": "blog/skepticism/2018/10/28/blasphemy/index.html",
    "revision": "03502153521b4e9b7e296b6563abb032"
  },
  {
    "url": "blog/skepticism/2018/10/28/hrv/index.html",
    "revision": "f45c3547b48a338514526bbd6e6f9ad7"
  },
  {
    "url": "blog/skepticism/2018/10/28/index.html",
    "revision": "4a058a6727b718b4fc186758481d1d49"
  },
  {
    "url": "blog/skepticism/2018/10/28/jesus/index.html",
    "revision": "480cabeb85e59779ddc258e66d89a3c2"
  },
  {
    "url": "blog/skepticism/2018/10/28/natural/index.html",
    "revision": "976795fe6fc6cbdfdfb04b43aad865a6"
  },
  {
    "url": "blog/skepticism/2018/10/index.html",
    "revision": "af15809cb13dd67c91a58dfeb0ec6572"
  },
  {
    "url": "blog/skepticism/2018/11/04/bibi/index.html",
    "revision": "00ebc6ee3f47ec5fbd933e714600df99"
  },
  {
    "url": "blog/skepticism/2018/11/04/index.html",
    "revision": "c549efa09ce03c2dfc4e93db6dda7795"
  },
  {
    "url": "blog/skepticism/2018/11/04/jesus/index.html",
    "revision": "d2924fb2d4bfa46c00ccd8218597fd02"
  },
  {
    "url": "blog/skepticism/2018/11/04/obdii/index.html",
    "revision": "44dffd13c401b349eda6b26ea7bcfa50"
  },
  {
    "url": "blog/skepticism/2018/11/04/sleepdrops/index.html",
    "revision": "cf2ca77d2cc31a3b7c9ffe2fb2e747e9"
  },
  {
    "url": "blog/skepticism/2018/11/index.html",
    "revision": "3b99d3e9bd2f46a9c3e3ec2f0fc7012c"
  },
  {
    "url": "blog/skepticism/2018/12/02/ark/index.html",
    "revision": "5077d9c0b39cd3ce5f020e22643bd2de"
  },
  {
    "url": "blog/skepticism/2018/12/02/green/index.html",
    "revision": "03cc04f99cd53785d334b57cbaca18cc"
  },
  {
    "url": "blog/skepticism/2018/12/02/index.html",
    "revision": "32fe0b80745a6cad1be4542fd7c1b8c6"
  },
  {
    "url": "blog/skepticism/2018/12/02/ri/index.html",
    "revision": "f844edd2c7d25ad701b2f96c71ab3937"
  },
  {
    "url": "blog/skepticism/2018/12/16/blasphemy/index.html",
    "revision": "c28f9fa2528eb0138baaddb3f0ec733a"
  },
  {
    "url": "blog/skepticism/2018/12/16/index.html",
    "revision": "c5328f645d7ea8b4fede6d0cb86ff4ac"
  },
  {
    "url": "blog/skepticism/2018/12/16/sleepdrops/index.html",
    "revision": "18a2ed798f4d3e4ba11ccac9186e875a"
  },
  {
    "url": "blog/skepticism/2018/12/16/tekiri/index.html",
    "revision": "bf3ca524a0900439ef76ea4884a736f4"
  },
  {
    "url": "blog/skepticism/2018/12/index.html",
    "revision": "a32dc4300f61fd8645a39c3cc0338c97"
  },
  {
    "url": "blog/skepticism/2018/index.html",
    "revision": "0972763fc090de340e701f51d0f2fd52"
  },
  {
    "url": "blog/skepticism/index.html",
    "revision": "2934160257c32797e1a873bf0c046dc9"
  },
  {
    "url": "blog/tag/index.html",
    "revision": "78feb2b7bc7b90e1d9f511a5838de0d6"
  },
  {
    "url": "contact/index.html",
    "revision": "a5286010a9af557d17efd0619546c54c"
  },
  {
    "url": "cv/cover/index.html",
    "revision": "523695e94e0d629c6303b0e86e60dcf9"
  },
  {
    "url": "cv/full/index.html",
    "revision": "b877def5ca7931eee393facff469f884"
  },
  {
    "url": "cv/index.html",
    "revision": "201c45748bb35decf66ae1492ae03ee2"
  },
  {
    "url": "googlee25d0c06da891164.html",
    "revision": "0defe75660212f417b90c5affcd03380"
  },
  {
    "url": "index.html",
    "revision": "cfac16ad6854decd0ac8412c0a2cf98f"
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
    "revision": "3de067fbf51871fb18d1e3f211983e07"
  },
  {
    "url": "media/me/index.html",
    "revision": "3443b5ac84a1463fa21c5a4b65d86bab"
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
    "revision": "206ad6b20893e84f9bcabaddb0f3aec6"
  },
  {
    "url": "status/index.html",
    "revision": "5bef8ab25c15c7fa66673dcb9ac074bf"
  },
  {
    "url": "status/steam/index.html",
    "revision": "999a2102dcbc7dd534956406ac7e45cd"
  },
  {
    "url": "status/twitter/index.html",
    "revision": "5ef02be579d00e433a8ab1804f2f36d2"
  },
  {
    "url": "status/wikipedia/index.html",
    "revision": "56269af5043318fb6da54b43f7c1a854"
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
