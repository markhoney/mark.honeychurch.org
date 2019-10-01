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
    "revision": "a2a443ee21a3ee4081b1759405a235da"
  },
  {
    "url": "assets/css/0.styles.css",
    "revision": "f192495172e10b618c3a276f74472c2c"
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
    "revision": "07fc4f63042e55e1db603b68db4e8b0d"
  },
  {
    "url": "assets/js/10.js",
    "revision": "7409bc866207afff466fcb274a2a98a2"
  },
  {
    "url": "assets/js/100.js",
    "revision": "ef274004f1d3ec6338d5871ed518dffd"
  },
  {
    "url": "assets/js/101.js",
    "revision": "e494fbccc8ddb12ed0c37965c75f73ac"
  },
  {
    "url": "assets/js/102.js",
    "revision": "022936a80f3a895c02b8f5c1ab4b947c"
  },
  {
    "url": "assets/js/103.js",
    "revision": "6e93087cab7de765f959827af2891109"
  },
  {
    "url": "assets/js/104.js",
    "revision": "8b1ea5ecb4adb2a7809ff8dd58e4da03"
  },
  {
    "url": "assets/js/105.js",
    "revision": "6a4c58268743419fac8004940406d69a"
  },
  {
    "url": "assets/js/106.js",
    "revision": "b00fd0fe17733f02235ecc3f8e9cee53"
  },
  {
    "url": "assets/js/107.js",
    "revision": "970fc5797bf2e73b0b4bd40292a9263f"
  },
  {
    "url": "assets/js/108.js",
    "revision": "396018bfc2203b8ff41254b480acda14"
  },
  {
    "url": "assets/js/109.js",
    "revision": "1c2510465844f17776f05619fb3017b9"
  },
  {
    "url": "assets/js/11.js",
    "revision": "6537c60be798d2521a9ca033df91579b"
  },
  {
    "url": "assets/js/110.js",
    "revision": "d838d27922d4d2f38d629c965d91ca0a"
  },
  {
    "url": "assets/js/111.js",
    "revision": "b529e2301dc5abec6fae98de0bff6453"
  },
  {
    "url": "assets/js/112.js",
    "revision": "3a19bf59fffe0c9c3a552430fab2a18a"
  },
  {
    "url": "assets/js/113.js",
    "revision": "26f16b006f371c5d94ef80012cfb7f8b"
  },
  {
    "url": "assets/js/114.js",
    "revision": "bd07c99f59180e4876865c2dda48d263"
  },
  {
    "url": "assets/js/115.js",
    "revision": "fdee1765a8b335435a0d128ab93361cd"
  },
  {
    "url": "assets/js/116.js",
    "revision": "603e52b42cbb512e69967b90bea92729"
  },
  {
    "url": "assets/js/117.js",
    "revision": "d95d19e15cd086afd32a7d8ff08a30d4"
  },
  {
    "url": "assets/js/118.js",
    "revision": "cc0e560a29f39b7140966a9bdb198e6e"
  },
  {
    "url": "assets/js/119.js",
    "revision": "2aea10fe541a790fa367a7e6dd81aecf"
  },
  {
    "url": "assets/js/12.js",
    "revision": "e819c8ff5ed015c365940ad3df64e1da"
  },
  {
    "url": "assets/js/120.js",
    "revision": "bfb83a6e8251ca5af197b921e46b90d8"
  },
  {
    "url": "assets/js/121.js",
    "revision": "6a1dd6131f73a9e7eedd8fbea30f6868"
  },
  {
    "url": "assets/js/122.js",
    "revision": "80ced4a704574a33acc97b7d60d1fa9b"
  },
  {
    "url": "assets/js/123.js",
    "revision": "c60adcb436d4eab2e79d816ec5d9bff4"
  },
  {
    "url": "assets/js/124.js",
    "revision": "cbee7dfbcb8880bed6e08839c1784153"
  },
  {
    "url": "assets/js/125.js",
    "revision": "a3e76016f2c96052e2728768e5dce291"
  },
  {
    "url": "assets/js/126.js",
    "revision": "dc012d02cc251205d7dfbd3acc216009"
  },
  {
    "url": "assets/js/127.js",
    "revision": "9cd7c89faab7642a43be391c2a04ef1a"
  },
  {
    "url": "assets/js/128.js",
    "revision": "487937740c293b72909bf454f54e8fca"
  },
  {
    "url": "assets/js/129.js",
    "revision": "ea6c257815c136b2b4900003fa05cdac"
  },
  {
    "url": "assets/js/13.js",
    "revision": "bc46849a5cc9d4ce856f25e075614dc2"
  },
  {
    "url": "assets/js/130.js",
    "revision": "e694cb1ad182df55147b3343c77234b7"
  },
  {
    "url": "assets/js/131.js",
    "revision": "9e9bc804e9e28f48a75504ac0ac15f08"
  },
  {
    "url": "assets/js/132.js",
    "revision": "fe69a0074ab73410cdf1a940813c8f9a"
  },
  {
    "url": "assets/js/133.js",
    "revision": "de0542f50195232e0621b62d65949825"
  },
  {
    "url": "assets/js/134.js",
    "revision": "66955358eb7c1152042097ff9c12fe4b"
  },
  {
    "url": "assets/js/135.js",
    "revision": "4a955ef47d56ccc935bcb29a601ba65d"
  },
  {
    "url": "assets/js/136.js",
    "revision": "f0ca51fce61a8f8291baa0b99e5a9c5a"
  },
  {
    "url": "assets/js/137.js",
    "revision": "c338619c4d9fb540510d3c314801f334"
  },
  {
    "url": "assets/js/138.js",
    "revision": "7f509a891360019232cc0ce55e387c4a"
  },
  {
    "url": "assets/js/139.js",
    "revision": "d948238f35acb224a2944e2c11308644"
  },
  {
    "url": "assets/js/14.js",
    "revision": "31542024bc9835f405d853c6f38c338b"
  },
  {
    "url": "assets/js/140.js",
    "revision": "a061409bba3dfd7b0f0194c8120e7b38"
  },
  {
    "url": "assets/js/141.js",
    "revision": "5f3135c383a6bc6bf1c7af8e4554957e"
  },
  {
    "url": "assets/js/142.js",
    "revision": "7baa9cad180b517b816bf35d48a0991f"
  },
  {
    "url": "assets/js/143.js",
    "revision": "562bfe45bac89c465f05080ab0f9db46"
  },
  {
    "url": "assets/js/144.js",
    "revision": "aaac3d0b42f6c95e57b6610e7cc3f181"
  },
  {
    "url": "assets/js/145.js",
    "revision": "5fa3cc14cb756ebf8151ac550b64cb79"
  },
  {
    "url": "assets/js/146.js",
    "revision": "ae80df6680113aa39bfbf4535905bf55"
  },
  {
    "url": "assets/js/147.js",
    "revision": "c53b53caef60ee5de96d50c232573043"
  },
  {
    "url": "assets/js/148.js",
    "revision": "3467d33c2d036d46fd4dc2ab9f08b94a"
  },
  {
    "url": "assets/js/149.js",
    "revision": "c4c99bd7e4debfe1439a040a7f5b358f"
  },
  {
    "url": "assets/js/15.js",
    "revision": "dec05aae36298dc73136882c1692491c"
  },
  {
    "url": "assets/js/150.js",
    "revision": "91e35e179cb3cd4aabbe4cb3bf3a82df"
  },
  {
    "url": "assets/js/151.js",
    "revision": "a7696ecba883fab8bb1b0220367988d3"
  },
  {
    "url": "assets/js/152.js",
    "revision": "5adad1c527f3c54d4690c9ac20c568dd"
  },
  {
    "url": "assets/js/153.js",
    "revision": "c9e2fc70acd0d1e161f9c7264b26cd77"
  },
  {
    "url": "assets/js/154.js",
    "revision": "8d97b0b444b979c59ff189f896a22818"
  },
  {
    "url": "assets/js/155.js",
    "revision": "d4d791fa8861a77083da47c90145a923"
  },
  {
    "url": "assets/js/156.js",
    "revision": "99f581a7fdf8e28153a7b51337067a27"
  },
  {
    "url": "assets/js/157.js",
    "revision": "71a7fbb5701eded1f5115544b3b58c60"
  },
  {
    "url": "assets/js/158.js",
    "revision": "2d611cfa6622231bbcdcd4ebd0a19d9c"
  },
  {
    "url": "assets/js/159.js",
    "revision": "ff0509b492047d10162521a5cb506f99"
  },
  {
    "url": "assets/js/16.js",
    "revision": "92dc72ca4330218cf9f484892bedcfbd"
  },
  {
    "url": "assets/js/160.js",
    "revision": "dcec000eacea88dae6164944e2c65e81"
  },
  {
    "url": "assets/js/161.js",
    "revision": "9b758d89e2232c3837a62125e7e61cc2"
  },
  {
    "url": "assets/js/162.js",
    "revision": "3933ad4a006c6dd18fa99f036a0b7cd3"
  },
  {
    "url": "assets/js/163.js",
    "revision": "7e37ccd9c7f657897a2d5fc461510a7d"
  },
  {
    "url": "assets/js/164.js",
    "revision": "fd0297ec8f36350ba48febc5ef6dfa41"
  },
  {
    "url": "assets/js/165.js",
    "revision": "d50ae52be7b68294e09ce66d3bfaa559"
  },
  {
    "url": "assets/js/166.js",
    "revision": "234e1bb03f99108827bb203953485b67"
  },
  {
    "url": "assets/js/167.js",
    "revision": "b06dd586b9fc70b829330827af4f45e0"
  },
  {
    "url": "assets/js/168.js",
    "revision": "b7c19f6798e4dd8b50a1ccc3b838b9c3"
  },
  {
    "url": "assets/js/169.js",
    "revision": "e7b67bc6c47799890862a749cf22fb11"
  },
  {
    "url": "assets/js/17.js",
    "revision": "15709802a9cfafc58318d181d3eda9cf"
  },
  {
    "url": "assets/js/170.js",
    "revision": "3d77cf0f2a5c59914fc8a4ed10f0eb07"
  },
  {
    "url": "assets/js/171.js",
    "revision": "9b20b028b7896adf6f082c3d93e95e25"
  },
  {
    "url": "assets/js/172.js",
    "revision": "50c425d441a1027509f9fb112c40ad02"
  },
  {
    "url": "assets/js/173.js",
    "revision": "6a6791b80a3ab3f90da01d868f4d6aa8"
  },
  {
    "url": "assets/js/174.js",
    "revision": "606d4b28e5e18161c9a4f7524650632a"
  },
  {
    "url": "assets/js/175.js",
    "revision": "0bde1713475949eb6b2c686902010841"
  },
  {
    "url": "assets/js/176.js",
    "revision": "5a42ebfac025b65563ff1922c34fcaca"
  },
  {
    "url": "assets/js/177.js",
    "revision": "68572ad95bf0f62f35bc51c0b413d6f3"
  },
  {
    "url": "assets/js/178.js",
    "revision": "098c22aaeccdd7b573a877323cad030c"
  },
  {
    "url": "assets/js/179.js",
    "revision": "eb42055775611406890a677fea65a1d7"
  },
  {
    "url": "assets/js/18.js",
    "revision": "51d68aef6330842e012c5d8b69950179"
  },
  {
    "url": "assets/js/180.js",
    "revision": "acbe5467f8eaa30a6819f026b647af07"
  },
  {
    "url": "assets/js/181.js",
    "revision": "9bad4f2990092559c1dd52a2edd87186"
  },
  {
    "url": "assets/js/182.js",
    "revision": "8a71d40b24940b12be08aa99001e2dd2"
  },
  {
    "url": "assets/js/183.js",
    "revision": "34a7bffb62b8bd919eb70fc9345cf149"
  },
  {
    "url": "assets/js/184.js",
    "revision": "487bfcc193e664d7e411019dd5a70e9b"
  },
  {
    "url": "assets/js/185.js",
    "revision": "a1a6c890dbdaed8638772e61a45aaf9a"
  },
  {
    "url": "assets/js/186.js",
    "revision": "deedef0a6c61eef59ace2a798b44b851"
  },
  {
    "url": "assets/js/187.js",
    "revision": "c30f2a68a982735a94c5f7bc09d3ebaf"
  },
  {
    "url": "assets/js/188.js",
    "revision": "b217ef487cc160c8d5da6c49f7e272a8"
  },
  {
    "url": "assets/js/189.js",
    "revision": "8f19c8f66a3d248f950a4998d58b78c5"
  },
  {
    "url": "assets/js/19.js",
    "revision": "6f30f291e5ed75f917b5eddfb31db0cc"
  },
  {
    "url": "assets/js/190.js",
    "revision": "600ca9fe7da9d9a89f74cc297305513a"
  },
  {
    "url": "assets/js/191.js",
    "revision": "152721cc0f75a426afad56bfcff53aac"
  },
  {
    "url": "assets/js/192.js",
    "revision": "2537640d79d8ca1fcd0172730e7bde0b"
  },
  {
    "url": "assets/js/193.js",
    "revision": "4dda526e10d7ecbd1f3804ef25002d22"
  },
  {
    "url": "assets/js/194.js",
    "revision": "148d75146f9932711850d47945b6cb57"
  },
  {
    "url": "assets/js/195.js",
    "revision": "f13a843f4981ff397946e52356d2c2f4"
  },
  {
    "url": "assets/js/196.js",
    "revision": "5f0ea338c5b778bc29ad3914ee760421"
  },
  {
    "url": "assets/js/197.js",
    "revision": "21150339e33469a750e26e6134929c42"
  },
  {
    "url": "assets/js/198.js",
    "revision": "11a55c92caa2e9af4533556f58ecce6d"
  },
  {
    "url": "assets/js/199.js",
    "revision": "d2aba944e7a31e3cf53315b3204fc1cc"
  },
  {
    "url": "assets/js/2.js",
    "revision": "ca0f2a102d2c8d50d49a8593e5c4fea7"
  },
  {
    "url": "assets/js/20.js",
    "revision": "de61e88020411fbb234f8fd91c09a83b"
  },
  {
    "url": "assets/js/200.js",
    "revision": "8ef8eb11b51fc3892f00f725dd6014f1"
  },
  {
    "url": "assets/js/201.js",
    "revision": "711da86b0933e9590d0a484bc88f80bf"
  },
  {
    "url": "assets/js/202.js",
    "revision": "a412f60a60e292e146610b718da4601f"
  },
  {
    "url": "assets/js/203.js",
    "revision": "49832d1cec22e7a76fadd2c7498946be"
  },
  {
    "url": "assets/js/204.js",
    "revision": "31762ff64c0594023c79e920f99e52c2"
  },
  {
    "url": "assets/js/205.js",
    "revision": "496eaaf9350c3e3bc52c4e7cd305062b"
  },
  {
    "url": "assets/js/206.js",
    "revision": "2687dbb6a902ee8022e0e3d7ef7f9629"
  },
  {
    "url": "assets/js/207.js",
    "revision": "cbe470b6f083b5852e76a215692c4818"
  },
  {
    "url": "assets/js/208.js",
    "revision": "f740766350c7d2d887b00d59e214db03"
  },
  {
    "url": "assets/js/209.js",
    "revision": "7de7b03de15a49af5169230670a83a7f"
  },
  {
    "url": "assets/js/21.js",
    "revision": "ab4e8f7e726c3b547bee447fa4eb2488"
  },
  {
    "url": "assets/js/210.js",
    "revision": "7861f8c2498c2934fbb76cfd3db86a06"
  },
  {
    "url": "assets/js/211.js",
    "revision": "7d21077b9c7ff58c6f49690fdc9fa22f"
  },
  {
    "url": "assets/js/212.js",
    "revision": "6c525ed42a6d48c8ee89eda0ecd7af38"
  },
  {
    "url": "assets/js/213.js",
    "revision": "714270103716cd13a4b94a13137c198a"
  },
  {
    "url": "assets/js/214.js",
    "revision": "de5ed0b75955e5d2baa96689ac2a9367"
  },
  {
    "url": "assets/js/215.js",
    "revision": "7a1e0b119dade48e03888158b882be11"
  },
  {
    "url": "assets/js/216.js",
    "revision": "760dc82ceb13d4668ae129cc4884bd15"
  },
  {
    "url": "assets/js/217.js",
    "revision": "1a0adb47fb80eae5eccca250749d44dd"
  },
  {
    "url": "assets/js/218.js",
    "revision": "e24e838f998ef25ee4c3cce92ea99c6c"
  },
  {
    "url": "assets/js/219.js",
    "revision": "a840d56514e8c7142631df22a51436af"
  },
  {
    "url": "assets/js/22.js",
    "revision": "574414781ceb1bb2761288964012a208"
  },
  {
    "url": "assets/js/220.js",
    "revision": "27caabfe286c12b7d5d25189cd60cd7e"
  },
  {
    "url": "assets/js/221.js",
    "revision": "e3eb59d69e1f65a700e3acca8a3da3d0"
  },
  {
    "url": "assets/js/222.js",
    "revision": "2a26acd919837dfd947e0d8882fac57d"
  },
  {
    "url": "assets/js/223.js",
    "revision": "c26c94ad4f77f27e20ee2a77fc0eb675"
  },
  {
    "url": "assets/js/224.js",
    "revision": "a28ca0cda92c1870e962b052f9b4f257"
  },
  {
    "url": "assets/js/225.js",
    "revision": "361639642c2ed2da9bb04acae3eca35c"
  },
  {
    "url": "assets/js/226.js",
    "revision": "f1b1e83cdd602117266b6b67acd36ef7"
  },
  {
    "url": "assets/js/227.js",
    "revision": "bb6f708bedb92d0bbb207f8d1f00cc51"
  },
  {
    "url": "assets/js/228.js",
    "revision": "f7f79dd853682d0cb30c01d67ae6aa9e"
  },
  {
    "url": "assets/js/229.js",
    "revision": "fab14c97c04e0eabf48e008c0f43e871"
  },
  {
    "url": "assets/js/23.js",
    "revision": "b3b84d4e7c5eb4c69032be3f346a8ab6"
  },
  {
    "url": "assets/js/230.js",
    "revision": "32e16fe701fc61e50aa4e99de2b6ccd7"
  },
  {
    "url": "assets/js/231.js",
    "revision": "a1347f8cdf9418eab47729926dd41a11"
  },
  {
    "url": "assets/js/232.js",
    "revision": "637018dcebf25da2365a9d59d6fd5bd8"
  },
  {
    "url": "assets/js/233.js",
    "revision": "66cc5bd43cdc0908a442bf7e311ebe57"
  },
  {
    "url": "assets/js/234.js",
    "revision": "d508085a14455973169c2064b3fce01c"
  },
  {
    "url": "assets/js/235.js",
    "revision": "d1d82b1cddff93fb185c0c8349311b48"
  },
  {
    "url": "assets/js/236.js",
    "revision": "b46c8009219a2b5affa94dc6da5de0c3"
  },
  {
    "url": "assets/js/237.js",
    "revision": "869671b779ea7bf5b61154215d49473e"
  },
  {
    "url": "assets/js/238.js",
    "revision": "9492d70d5075fced4af22bc1533e5221"
  },
  {
    "url": "assets/js/239.js",
    "revision": "f4cbeedbf3cd4eb6e2b0548a9b22b47f"
  },
  {
    "url": "assets/js/24.js",
    "revision": "94fd1917fe5546253646fbf3f9427484"
  },
  {
    "url": "assets/js/240.js",
    "revision": "694526ceace0d8171c8b71b81d97e723"
  },
  {
    "url": "assets/js/241.js",
    "revision": "bf385549617b8d26f1c161d0146912db"
  },
  {
    "url": "assets/js/242.js",
    "revision": "effde97b119190d0e22270c71326a483"
  },
  {
    "url": "assets/js/243.js",
    "revision": "acc5727b200a31cda28f7e4b2776e79f"
  },
  {
    "url": "assets/js/244.js",
    "revision": "44e00d72009b7dda9b3af64b640fe568"
  },
  {
    "url": "assets/js/245.js",
    "revision": "311b7d6e40ee862f10d80a9f10790373"
  },
  {
    "url": "assets/js/246.js",
    "revision": "562d7b4a3e1b7e014819568032b71d28"
  },
  {
    "url": "assets/js/247.js",
    "revision": "a864051548267de9c8628cf9d3ff61bf"
  },
  {
    "url": "assets/js/248.js",
    "revision": "8b2b6c03ed6dcf16a4891602bcd52f40"
  },
  {
    "url": "assets/js/249.js",
    "revision": "9a9d7a35abd6510609165d2dcadb1bea"
  },
  {
    "url": "assets/js/25.js",
    "revision": "3a6c6893dc85d4cdacc759ca7acf6459"
  },
  {
    "url": "assets/js/250.js",
    "revision": "bdbd624bf423bae4e2a5dbff1980ac34"
  },
  {
    "url": "assets/js/251.js",
    "revision": "5de678f3a97e869e62cb03561305c1bd"
  },
  {
    "url": "assets/js/252.js",
    "revision": "3d05f4ebdd71abe747aa8d3573dbb48b"
  },
  {
    "url": "assets/js/253.js",
    "revision": "5b3c6542fdfba28ad281ed604366e782"
  },
  {
    "url": "assets/js/254.js",
    "revision": "dfa6ba8ce63512eb272aa5e5d9107fc9"
  },
  {
    "url": "assets/js/255.js",
    "revision": "64378b864822b7c458ad5acba9872bf5"
  },
  {
    "url": "assets/js/256.js",
    "revision": "e977dd96da85253d9ea0378e9657de28"
  },
  {
    "url": "assets/js/257.js",
    "revision": "b1d62a070777f81761dcf1b7fded73ae"
  },
  {
    "url": "assets/js/258.js",
    "revision": "15e21d02a9949601c35c0cf6f5255f88"
  },
  {
    "url": "assets/js/259.js",
    "revision": "d11dcf08c3aae2722be79b3aabe1bb95"
  },
  {
    "url": "assets/js/26.js",
    "revision": "cef8e29719258514417adbded193a6e3"
  },
  {
    "url": "assets/js/260.js",
    "revision": "31616742d07a389c9fa2ec53dad6ad5a"
  },
  {
    "url": "assets/js/261.js",
    "revision": "d9dfb750eea7ddedac13183b647c3d41"
  },
  {
    "url": "assets/js/262.js",
    "revision": "561c6020874b5e421f91317c603994c7"
  },
  {
    "url": "assets/js/263.js",
    "revision": "44eac6867f99f9fe17435691ace40981"
  },
  {
    "url": "assets/js/264.js",
    "revision": "595915a8f95258b32c45fe73c4595cd1"
  },
  {
    "url": "assets/js/265.js",
    "revision": "1cd23c1238a5eb8522076889bcd51634"
  },
  {
    "url": "assets/js/266.js",
    "revision": "5c8fc1ba11b4c2f24bcf3e11a75b6e05"
  },
  {
    "url": "assets/js/267.js",
    "revision": "fe1c3282b7c051b2c5f476abc8809f36"
  },
  {
    "url": "assets/js/268.js",
    "revision": "ae630b63efe82b27364346d6355a15b8"
  },
  {
    "url": "assets/js/269.js",
    "revision": "f2321e10f185979ceb7d5359ada1c5cf"
  },
  {
    "url": "assets/js/27.js",
    "revision": "681931d920e78b6da18f7eaadb885ffe"
  },
  {
    "url": "assets/js/270.js",
    "revision": "1e959510491dcbce31df42776b679fc7"
  },
  {
    "url": "assets/js/271.js",
    "revision": "9a082701076243fdca2f9943ca19b8fe"
  },
  {
    "url": "assets/js/272.js",
    "revision": "9ea9135062253fa8f8f5f36908649459"
  },
  {
    "url": "assets/js/273.js",
    "revision": "47f91854edeab60478c7066789e41427"
  },
  {
    "url": "assets/js/274.js",
    "revision": "45766c89cefcffe3b2e841dea9852b1a"
  },
  {
    "url": "assets/js/275.js",
    "revision": "13f2cbe9ac781a832d22dd3eee1c38e0"
  },
  {
    "url": "assets/js/276.js",
    "revision": "bbb635cf259b1df5812dec74e695e115"
  },
  {
    "url": "assets/js/277.js",
    "revision": "e79e9403e1a122615ddca8ffee97f1db"
  },
  {
    "url": "assets/js/278.js",
    "revision": "885730adb0fd019211060244497dd6a8"
  },
  {
    "url": "assets/js/279.js",
    "revision": "130f5a4a7f011ce11f01215075477949"
  },
  {
    "url": "assets/js/28.js",
    "revision": "77d8a5fff4de354e2ea6bc69d725a5ef"
  },
  {
    "url": "assets/js/280.js",
    "revision": "d8f9b094f5da73f04808e54a82e527ff"
  },
  {
    "url": "assets/js/281.js",
    "revision": "e1fc466292de33e4fa6b2ce87cdda7d5"
  },
  {
    "url": "assets/js/282.js",
    "revision": "aa8ec7a097d4a0afa778f314849fcb24"
  },
  {
    "url": "assets/js/283.js",
    "revision": "1780cb7e7b0e7d46e18108194644ef56"
  },
  {
    "url": "assets/js/284.js",
    "revision": "e23736105c95bfbda3ce6ea69f2cda74"
  },
  {
    "url": "assets/js/285.js",
    "revision": "10729ff519a6c4916ca4c3db9e941022"
  },
  {
    "url": "assets/js/286.js",
    "revision": "ae9d1a9934feb9e4c7aacb89516de3a3"
  },
  {
    "url": "assets/js/287.js",
    "revision": "5826a6c40f0537a4d65199ad8a827f9b"
  },
  {
    "url": "assets/js/288.js",
    "revision": "f60ce9c4c54610fede543c93844688f0"
  },
  {
    "url": "assets/js/289.js",
    "revision": "4cf4ecfe6c480293b3a6539d10b00f50"
  },
  {
    "url": "assets/js/29.js",
    "revision": "810448f5b75237dabfbff64810fe8818"
  },
  {
    "url": "assets/js/290.js",
    "revision": "24a652a25bae9c2df35c67731999d7c6"
  },
  {
    "url": "assets/js/291.js",
    "revision": "3fd27f6b9ebdb0260db164592b6f292c"
  },
  {
    "url": "assets/js/292.js",
    "revision": "eb88094c9eabd0f270f5c86f3c8097b2"
  },
  {
    "url": "assets/js/293.js",
    "revision": "60f1ad58dfbb3f294ce6303584a8a153"
  },
  {
    "url": "assets/js/294.js",
    "revision": "94919918c6feaf71ec8258cf3552b76d"
  },
  {
    "url": "assets/js/295.js",
    "revision": "bb07a3526621ea4fa5fcd9c14035d65a"
  },
  {
    "url": "assets/js/296.js",
    "revision": "cc043d494dd0bdd12150bc3d474ea708"
  },
  {
    "url": "assets/js/297.js",
    "revision": "2407cb7d89250597752c593a5b273cbb"
  },
  {
    "url": "assets/js/298.js",
    "revision": "7c0ccfc101e192f1648285016556f2a7"
  },
  {
    "url": "assets/js/299.js",
    "revision": "a1a51946eb828ea1699ccc7c73b1c876"
  },
  {
    "url": "assets/js/30.js",
    "revision": "4bf311531b6f0d876fce5a2f3810be71"
  },
  {
    "url": "assets/js/300.js",
    "revision": "7fc69aeef8e81eb6185b7f3acdecd94a"
  },
  {
    "url": "assets/js/301.js",
    "revision": "f32eb1b2c3304f1303b6647502208287"
  },
  {
    "url": "assets/js/302.js",
    "revision": "852d0ca10b4092c14448871f971d16ac"
  },
  {
    "url": "assets/js/303.js",
    "revision": "b1a924300d1c7ddf124030ae1a045444"
  },
  {
    "url": "assets/js/304.js",
    "revision": "edef168b972ea7719b9919fd4c1a7608"
  },
  {
    "url": "assets/js/305.js",
    "revision": "bff11773ced925308f88497e6ad7e923"
  },
  {
    "url": "assets/js/306.js",
    "revision": "99e306f5eb7322c873e9fbe1b0131648"
  },
  {
    "url": "assets/js/307.js",
    "revision": "cab6364e4a1c708d5e454cd779239946"
  },
  {
    "url": "assets/js/308.js",
    "revision": "d09ce6bc107e01e721fe0fc8b370f483"
  },
  {
    "url": "assets/js/309.js",
    "revision": "017747a7bd825f1dc329c61feebcb351"
  },
  {
    "url": "assets/js/31.js",
    "revision": "83639300c2af07bb8391cdc482d60791"
  },
  {
    "url": "assets/js/310.js",
    "revision": "c994d8fe3c06b972296309cb4fa2ac16"
  },
  {
    "url": "assets/js/311.js",
    "revision": "15161949d79fcfd95dddb3b16c49d940"
  },
  {
    "url": "assets/js/312.js",
    "revision": "a1b0c615e5d359c516f54e296b047f81"
  },
  {
    "url": "assets/js/313.js",
    "revision": "68be564507d46ca2fe9581b3f8af1f67"
  },
  {
    "url": "assets/js/314.js",
    "revision": "cf56aab53a0e2889a985a8af52702079"
  },
  {
    "url": "assets/js/315.js",
    "revision": "63eb66e28cba6d89c9251be276439a41"
  },
  {
    "url": "assets/js/316.js",
    "revision": "6f55c6c3befcc5e8c920b0dcaa48d9c2"
  },
  {
    "url": "assets/js/317.js",
    "revision": "e7220d697d87c1ea7f22128fe691b75e"
  },
  {
    "url": "assets/js/318.js",
    "revision": "9e89ad6bd86da8667a105b1cb73e5e69"
  },
  {
    "url": "assets/js/319.js",
    "revision": "43a7adf57af0cdc98fae7697c3d6e655"
  },
  {
    "url": "assets/js/32.js",
    "revision": "c96458ef709682f25ed0cde0b5e19abc"
  },
  {
    "url": "assets/js/320.js",
    "revision": "1641195ce0d2d4fd735e1effb65758eb"
  },
  {
    "url": "assets/js/321.js",
    "revision": "749071c7706c16caaa43d17a13ee9a01"
  },
  {
    "url": "assets/js/322.js",
    "revision": "1d9bc7f6114260f270320324d3dc4954"
  },
  {
    "url": "assets/js/323.js",
    "revision": "460c0a5c0475d931b51c294b4f17bbad"
  },
  {
    "url": "assets/js/324.js",
    "revision": "80b0e41d36e31e2e4ff3f658d87c7610"
  },
  {
    "url": "assets/js/325.js",
    "revision": "d84c5e655234162e1fc821f6acc898db"
  },
  {
    "url": "assets/js/326.js",
    "revision": "c83a94a5f3c29d70636a91fc6b9dedd8"
  },
  {
    "url": "assets/js/327.js",
    "revision": "7fcb8c60fa7516efe8df987630d9bbf7"
  },
  {
    "url": "assets/js/328.js",
    "revision": "bd2459fb3710d381dc686f60b92600da"
  },
  {
    "url": "assets/js/329.js",
    "revision": "55bfa98bdcbcd1b268d5ae6609ce1d1d"
  },
  {
    "url": "assets/js/33.js",
    "revision": "3b90a94eb9efa4ef1d99300c1c393d96"
  },
  {
    "url": "assets/js/330.js",
    "revision": "39a36649fed390f798d9f74d16c40845"
  },
  {
    "url": "assets/js/331.js",
    "revision": "2d40656fdc6da52ee1ea79af87e70d62"
  },
  {
    "url": "assets/js/332.js",
    "revision": "2bf10db81f3a1d9e9b12a3d349c3e268"
  },
  {
    "url": "assets/js/333.js",
    "revision": "299d58cf381c7d9edcffb0e6b7f902b1"
  },
  {
    "url": "assets/js/334.js",
    "revision": "f1cb141cf122336faf0d9f47a08816b7"
  },
  {
    "url": "assets/js/335.js",
    "revision": "e69951fbbdcde47f65b0a0ac8656d05f"
  },
  {
    "url": "assets/js/336.js",
    "revision": "ba09b821507b44113060691879e397c5"
  },
  {
    "url": "assets/js/337.js",
    "revision": "23b71da2748e7b0531a2c236a894f323"
  },
  {
    "url": "assets/js/338.js",
    "revision": "34250af1e52cad294d59d87f58a50cc6"
  },
  {
    "url": "assets/js/339.js",
    "revision": "c6bd659c1b02307a31ca26b5c643d2af"
  },
  {
    "url": "assets/js/34.js",
    "revision": "d23406b8e6fc8bcf474ca24488d0fa8f"
  },
  {
    "url": "assets/js/340.js",
    "revision": "5f180e2e5d50b334dce9d3dadd343d96"
  },
  {
    "url": "assets/js/341.js",
    "revision": "d41e5c445b9b1d7f2eb00b2fee57d935"
  },
  {
    "url": "assets/js/342.js",
    "revision": "4b22d401068e1c924e216e4293bc17f7"
  },
  {
    "url": "assets/js/343.js",
    "revision": "22806a0d7734726f0115c9f7271cb278"
  },
  {
    "url": "assets/js/344.js",
    "revision": "81d5637bf9dee8b3a73c37e3fca6a995"
  },
  {
    "url": "assets/js/345.js",
    "revision": "dcd422c67f68e3fab2ff6e39a115054e"
  },
  {
    "url": "assets/js/346.js",
    "revision": "ee9cd18de8d9cb732d53600b52029679"
  },
  {
    "url": "assets/js/347.js",
    "revision": "1458200842d9f1de0d1124a2a2d9e2c6"
  },
  {
    "url": "assets/js/348.js",
    "revision": "f0bf2f28a05e9d4f4112ad403f054458"
  },
  {
    "url": "assets/js/349.js",
    "revision": "cbb0439f1ace899112170a3585c64873"
  },
  {
    "url": "assets/js/35.js",
    "revision": "f259aa6c5d3cb50e1bee4f1e6acbd3c8"
  },
  {
    "url": "assets/js/350.js",
    "revision": "830f6a3a27848fa6c4672f24d1306a79"
  },
  {
    "url": "assets/js/351.js",
    "revision": "9bd95691db7be128cf8a7a2789ac3f97"
  },
  {
    "url": "assets/js/352.js",
    "revision": "e84b5a065c999ddefe29bd7a7ab775ab"
  },
  {
    "url": "assets/js/353.js",
    "revision": "4aaae2fbb51d81b089c32ce55970c379"
  },
  {
    "url": "assets/js/354.js",
    "revision": "183d55b3a9a1c6c4e5d94d3c85281244"
  },
  {
    "url": "assets/js/355.js",
    "revision": "05c1a37ec8a0632d8385e2b20382a8cd"
  },
  {
    "url": "assets/js/356.js",
    "revision": "bf116424a0efdcc4ce8e50e5a0200fbb"
  },
  {
    "url": "assets/js/357.js",
    "revision": "ee1d8a403426c3161ea3605a4537313c"
  },
  {
    "url": "assets/js/358.js",
    "revision": "70cb71591a970ed3c3bd32d7be492ac0"
  },
  {
    "url": "assets/js/359.js",
    "revision": "a6ff5d225098fe0ca8be8d9ebb9c7f09"
  },
  {
    "url": "assets/js/36.js",
    "revision": "a27f168cb140590fdd1912065e3495aa"
  },
  {
    "url": "assets/js/360.js",
    "revision": "479591d1736f6e4bb587d23263a1eb94"
  },
  {
    "url": "assets/js/361.js",
    "revision": "623ca94cc9972b2f13c496c6f01fb39f"
  },
  {
    "url": "assets/js/362.js",
    "revision": "fe8dc1e0536e0e79260a1567f9ca5b38"
  },
  {
    "url": "assets/js/363.js",
    "revision": "4a2afbd4848ca1b7292403feb7995be2"
  },
  {
    "url": "assets/js/364.js",
    "revision": "1a00ebdcc434b9e0ff50245cb5abec3b"
  },
  {
    "url": "assets/js/365.js",
    "revision": "89ddcf51ebf717fbd8761cd24d322aa1"
  },
  {
    "url": "assets/js/366.js",
    "revision": "b38ea86adc29288f1ec388f9b27c5206"
  },
  {
    "url": "assets/js/367.js",
    "revision": "98fec3152e52611c86f9a2b29496911a"
  },
  {
    "url": "assets/js/368.js",
    "revision": "5bf67ff13141bb2aa584df0e9ae63dad"
  },
  {
    "url": "assets/js/369.js",
    "revision": "4eac583762540b28c61c2f9c3683f4c8"
  },
  {
    "url": "assets/js/37.js",
    "revision": "3855bee637dd937ff2d9b84adf0713fc"
  },
  {
    "url": "assets/js/370.js",
    "revision": "140cd67641e14eddaa065ae450ba9be3"
  },
  {
    "url": "assets/js/371.js",
    "revision": "94f4752c78535bb591afc78f9aef77d3"
  },
  {
    "url": "assets/js/372.js",
    "revision": "f05e17ad145903e2bfd4308873b2a633"
  },
  {
    "url": "assets/js/373.js",
    "revision": "32d2b227b941006015b878d6d34ab10e"
  },
  {
    "url": "assets/js/374.js",
    "revision": "6b90479e32bb3ba5ab68e2f58c71ed33"
  },
  {
    "url": "assets/js/375.js",
    "revision": "681c20e0c3e3ab8453211d73e5152efe"
  },
  {
    "url": "assets/js/376.js",
    "revision": "586c003bd3f81bce81cba42d53b57b06"
  },
  {
    "url": "assets/js/377.js",
    "revision": "ece0f69856b03669231c139b8cea8740"
  },
  {
    "url": "assets/js/378.js",
    "revision": "1b2fe667e5562bda14325552bd02c5ce"
  },
  {
    "url": "assets/js/379.js",
    "revision": "1d50d34bb1e5229a9f58efdf86afc490"
  },
  {
    "url": "assets/js/38.js",
    "revision": "0b6d08763c29d629adec4d175ab7c160"
  },
  {
    "url": "assets/js/380.js",
    "revision": "5ec66bc8da1f50f044e63ea6f13cf50c"
  },
  {
    "url": "assets/js/381.js",
    "revision": "7f42e73e937332f63e26854df37af891"
  },
  {
    "url": "assets/js/382.js",
    "revision": "1c74d07f65a8b24907ce47cdc9e3d29c"
  },
  {
    "url": "assets/js/383.js",
    "revision": "5e07647f247b241490eed92ff797fbc5"
  },
  {
    "url": "assets/js/384.js",
    "revision": "234925742f574d6b59bb0c813edb6097"
  },
  {
    "url": "assets/js/385.js",
    "revision": "82a45b705e7ef5cec686510e21f391bb"
  },
  {
    "url": "assets/js/386.js",
    "revision": "75fb8eb5bfde181503517023448b9771"
  },
  {
    "url": "assets/js/387.js",
    "revision": "da46282028697b6ca52aa092ed051592"
  },
  {
    "url": "assets/js/388.js",
    "revision": "bf5343c52cde587666e6b80884c27268"
  },
  {
    "url": "assets/js/389.js",
    "revision": "42076da9fdd177ed803dc9c77888b38b"
  },
  {
    "url": "assets/js/39.js",
    "revision": "043306276a80f8c06ef31aec8b98d655"
  },
  {
    "url": "assets/js/390.js",
    "revision": "57dfc020506707eb290cb225b02edd8f"
  },
  {
    "url": "assets/js/391.js",
    "revision": "bcf817c264c00ebb966158eeb54bd0a6"
  },
  {
    "url": "assets/js/392.js",
    "revision": "0e4a0caf895d448166e5710273c6ab3a"
  },
  {
    "url": "assets/js/393.js",
    "revision": "31964ab5307cf4d106b1e5fa9be2db2a"
  },
  {
    "url": "assets/js/394.js",
    "revision": "381139bf7d74e32cc3fac4030c0597dc"
  },
  {
    "url": "assets/js/395.js",
    "revision": "68fd3df388ef13b00463d93d25897011"
  },
  {
    "url": "assets/js/396.js",
    "revision": "084e73d2ba95c37c5dd26e8e91d4955f"
  },
  {
    "url": "assets/js/397.js",
    "revision": "d811f9a317662b491f935ae22961478e"
  },
  {
    "url": "assets/js/398.js",
    "revision": "fdb61781c7a0c886e015849868e76ab7"
  },
  {
    "url": "assets/js/399.js",
    "revision": "4bb78af178542a661d50aa230a1ed19a"
  },
  {
    "url": "assets/js/4.js",
    "revision": "4f12f66c866f1f621e98a3c8c3e9a7ef"
  },
  {
    "url": "assets/js/40.js",
    "revision": "744f4acb81cb01d6867180a654481723"
  },
  {
    "url": "assets/js/400.js",
    "revision": "9fed4737087ffc13bbd3dd676beadce9"
  },
  {
    "url": "assets/js/401.js",
    "revision": "e0689d703c5faac3a1577aeafd065abd"
  },
  {
    "url": "assets/js/402.js",
    "revision": "e3eaafeb818f07c38ca40410edc705ad"
  },
  {
    "url": "assets/js/403.js",
    "revision": "131273ab33c6904dc9923d2943609216"
  },
  {
    "url": "assets/js/404.js",
    "revision": "507b650e89f6028b6520b28127df4c26"
  },
  {
    "url": "assets/js/405.js",
    "revision": "8c0d87c146fe1bf6f708beec154dbe39"
  },
  {
    "url": "assets/js/406.js",
    "revision": "fd74f796d2de2cdc4ff27e15216e58f8"
  },
  {
    "url": "assets/js/407.js",
    "revision": "dae5fe133f953bc5f338a46a763d71ce"
  },
  {
    "url": "assets/js/408.js",
    "revision": "9e5b7f784fb2b19a0a7a6a54acc13b13"
  },
  {
    "url": "assets/js/409.js",
    "revision": "6cd56c84a67fbc04fbc571876f7b6a59"
  },
  {
    "url": "assets/js/41.js",
    "revision": "73992523d928952c07d0bacd389ef4cf"
  },
  {
    "url": "assets/js/410.js",
    "revision": "27017f982814ce1ba884e5155d39b80d"
  },
  {
    "url": "assets/js/411.js",
    "revision": "dd85df652c0d4e3413c62174a7df0db7"
  },
  {
    "url": "assets/js/412.js",
    "revision": "216903014936d748709e8d78d157e262"
  },
  {
    "url": "assets/js/413.js",
    "revision": "a2ea25733ffab75b08a320e362c84ca3"
  },
  {
    "url": "assets/js/414.js",
    "revision": "077c7803097e286f7e4fcfc2ff7d3833"
  },
  {
    "url": "assets/js/415.js",
    "revision": "87ce0da4adc03cb519adc07bfb0992fd"
  },
  {
    "url": "assets/js/416.js",
    "revision": "9c7d7470c0eade102bb7ea611e1fada1"
  },
  {
    "url": "assets/js/417.js",
    "revision": "79fd596f379391a3d90b2e1e53e2bbcf"
  },
  {
    "url": "assets/js/418.js",
    "revision": "b291af5b52e5044fceb51e6c4099095a"
  },
  {
    "url": "assets/js/419.js",
    "revision": "9c0ac94b410933991cce9fc447dcc523"
  },
  {
    "url": "assets/js/42.js",
    "revision": "901ffade780f4d014521b4ecfb3086f8"
  },
  {
    "url": "assets/js/420.js",
    "revision": "97b2ac54f3cd1f3460b431310dfda0c1"
  },
  {
    "url": "assets/js/421.js",
    "revision": "5185836787003e5c40b0046f075547b8"
  },
  {
    "url": "assets/js/422.js",
    "revision": "584c52cf8e648d40fdf566ca71c6c921"
  },
  {
    "url": "assets/js/423.js",
    "revision": "c397fdc53cd8524ea6b47119f1c674cb"
  },
  {
    "url": "assets/js/424.js",
    "revision": "49758b1ba680d56a2059de79bb264a9f"
  },
  {
    "url": "assets/js/425.js",
    "revision": "ed2051287e5c7f8c2e6f4c90ebcf2f41"
  },
  {
    "url": "assets/js/426.js",
    "revision": "72892c31c9d98ce0e902adafc55d177e"
  },
  {
    "url": "assets/js/427.js",
    "revision": "a3c051afb8d2ee4f766504e31a8d9614"
  },
  {
    "url": "assets/js/428.js",
    "revision": "580fb4b6c3fde958ca5383bdbb8a329b"
  },
  {
    "url": "assets/js/429.js",
    "revision": "7104d0f3866260a0c395e4ec53b5b2f7"
  },
  {
    "url": "assets/js/43.js",
    "revision": "e8413e8e7f87e1fe51cce777b8dd6f8b"
  },
  {
    "url": "assets/js/430.js",
    "revision": "db485ddd41a492d52e6557044e179fde"
  },
  {
    "url": "assets/js/431.js",
    "revision": "dc8bbd3d1baa057c3f5036db3be7d4ea"
  },
  {
    "url": "assets/js/432.js",
    "revision": "72428cd029e0c2cac3d09a51346875b9"
  },
  {
    "url": "assets/js/433.js",
    "revision": "ba950b6ee9de1414e142f4cfd0d6787a"
  },
  {
    "url": "assets/js/434.js",
    "revision": "23eed7d2b9cf3a530852f10a7ea3c60f"
  },
  {
    "url": "assets/js/435.js",
    "revision": "27c849e1981e32a97e9ce3fb69bb9466"
  },
  {
    "url": "assets/js/436.js",
    "revision": "0d7dda015bf181e82f27b8793e373082"
  },
  {
    "url": "assets/js/437.js",
    "revision": "c11dc45cf0852253fa1e9cb5a996cdd6"
  },
  {
    "url": "assets/js/438.js",
    "revision": "0b92c4cc215ac9dc5e66cb69ea50dc2c"
  },
  {
    "url": "assets/js/439.js",
    "revision": "82387a95008fb77a136119207d38adf0"
  },
  {
    "url": "assets/js/44.js",
    "revision": "ad10bbbd1135a084194c80e1ba0f76d1"
  },
  {
    "url": "assets/js/440.js",
    "revision": "d0b9c3a0e2fb7b1f12debb60bcdf09f4"
  },
  {
    "url": "assets/js/441.js",
    "revision": "7ebf2646a6b6eba35172b9f24c5e848d"
  },
  {
    "url": "assets/js/442.js",
    "revision": "be9bb96df4d0c1af92b726bc9142ec06"
  },
  {
    "url": "assets/js/443.js",
    "revision": "63ca1fce73a3890f30832b3da0af5aea"
  },
  {
    "url": "assets/js/444.js",
    "revision": "e762c6309e9557571f995094f657ada9"
  },
  {
    "url": "assets/js/445.js",
    "revision": "2309ce4d55a4420c3d13b0b52cca0b66"
  },
  {
    "url": "assets/js/446.js",
    "revision": "22635ddb563ffb96de76b687116406aa"
  },
  {
    "url": "assets/js/447.js",
    "revision": "6965ede5bca08d1ad5ec201ef9b574d4"
  },
  {
    "url": "assets/js/448.js",
    "revision": "278c7559d4eab92dd0594c78b0d561b2"
  },
  {
    "url": "assets/js/449.js",
    "revision": "ad1ab05883c16615b620ed34667b20c5"
  },
  {
    "url": "assets/js/45.js",
    "revision": "63d481c88cabb79069257928a67b9100"
  },
  {
    "url": "assets/js/450.js",
    "revision": "4d1e5555fef9c8b6faf1e2a49119dad5"
  },
  {
    "url": "assets/js/451.js",
    "revision": "3244f6c35007d10c15103271e9cb2595"
  },
  {
    "url": "assets/js/452.js",
    "revision": "6a623db2ccbc7cbb80424801d86c75af"
  },
  {
    "url": "assets/js/453.js",
    "revision": "e4436f2ff6973ea8a5f4dfa9127436cb"
  },
  {
    "url": "assets/js/454.js",
    "revision": "b7bf177dcdf3461ac4c80f6efc74de1a"
  },
  {
    "url": "assets/js/455.js",
    "revision": "4ef4bd47eed964d8dfdd247aeac6aae5"
  },
  {
    "url": "assets/js/456.js",
    "revision": "5563f69855aa00693a1645efaaca1b60"
  },
  {
    "url": "assets/js/457.js",
    "revision": "6978771a1331d608ad414501493fcc58"
  },
  {
    "url": "assets/js/458.js",
    "revision": "90454efe7beddad16ae9f6e61b0af17d"
  },
  {
    "url": "assets/js/459.js",
    "revision": "dd83393f11e2a9207a5673a1e8c46678"
  },
  {
    "url": "assets/js/46.js",
    "revision": "ed33fd7c3dfabc9a1d5352cd0e75f394"
  },
  {
    "url": "assets/js/460.js",
    "revision": "2eab48ac21cadda3869533e69c931f43"
  },
  {
    "url": "assets/js/461.js",
    "revision": "5d9d942e8862cb2cd032068e390b3255"
  },
  {
    "url": "assets/js/462.js",
    "revision": "c0f77b9606f8a7102d07ffb72cf495f0"
  },
  {
    "url": "assets/js/463.js",
    "revision": "b73b0ed4f9676c039ec6bbd9ffffaede"
  },
  {
    "url": "assets/js/464.js",
    "revision": "eb336b26ff1f1dae6eb64a0b136b5a04"
  },
  {
    "url": "assets/js/465.js",
    "revision": "fe29a24e3a51a9e5e95a0a7b00f541be"
  },
  {
    "url": "assets/js/466.js",
    "revision": "0788c6103d3c9028eede39f2af10a7b7"
  },
  {
    "url": "assets/js/467.js",
    "revision": "f2dfff8091e31500aef1874577a0667e"
  },
  {
    "url": "assets/js/468.js",
    "revision": "1b6ad88b74aaac9ba5318e177cec1393"
  },
  {
    "url": "assets/js/469.js",
    "revision": "6f374e7eb8673a1c84c7a20d3d83d7b0"
  },
  {
    "url": "assets/js/47.js",
    "revision": "805d1a638b3cac3bdd04a00eb68e8e98"
  },
  {
    "url": "assets/js/470.js",
    "revision": "45f570fc19ad38aa2a779feb5cf6611f"
  },
  {
    "url": "assets/js/471.js",
    "revision": "721f9e4d5c265a4c757c3a9eaf804784"
  },
  {
    "url": "assets/js/472.js",
    "revision": "8726f9b2159851d4c6d3d53654430e41"
  },
  {
    "url": "assets/js/473.js",
    "revision": "6da138f89c798528554ed922eed29430"
  },
  {
    "url": "assets/js/474.js",
    "revision": "282c12db98d3f54e9658360cab6749cd"
  },
  {
    "url": "assets/js/475.js",
    "revision": "2b3cc10e03b7e4101458d21113d4499a"
  },
  {
    "url": "assets/js/476.js",
    "revision": "261097d8a55856908f7c8fd666d98e6e"
  },
  {
    "url": "assets/js/477.js",
    "revision": "b9a66b85c3312cd053405c76e4eb6f4a"
  },
  {
    "url": "assets/js/478.js",
    "revision": "29d7de173c50c3de9f4d52d0795e70d2"
  },
  {
    "url": "assets/js/479.js",
    "revision": "3d0bc2318613b55a60c5c67ee9310fdd"
  },
  {
    "url": "assets/js/48.js",
    "revision": "592e1eefcb475fc83ce9c1b7ca946fc4"
  },
  {
    "url": "assets/js/480.js",
    "revision": "d483d41b31bf111503c1c10ef4e3d249"
  },
  {
    "url": "assets/js/481.js",
    "revision": "f28e665d08bdc3c12c09c8d704f9e0b3"
  },
  {
    "url": "assets/js/482.js",
    "revision": "81e2de9ee3b6e5d5b183bc523bf3d717"
  },
  {
    "url": "assets/js/483.js",
    "revision": "38aa74cc50be9c3244b6b6f579f32845"
  },
  {
    "url": "assets/js/484.js",
    "revision": "20e00e8b8356f5dc46c254915d6c8e38"
  },
  {
    "url": "assets/js/485.js",
    "revision": "e12d1b5401ee0ed8b444e97b6a977aa1"
  },
  {
    "url": "assets/js/486.js",
    "revision": "d9d6f1b848504578631033a67a896b86"
  },
  {
    "url": "assets/js/487.js",
    "revision": "9b8f5114794d46f1b5c4439d9e3b1b2c"
  },
  {
    "url": "assets/js/488.js",
    "revision": "17fd7ecd170296b9cccda99c457ce3e8"
  },
  {
    "url": "assets/js/489.js",
    "revision": "5610f74ee4ded9b3d577198996228b59"
  },
  {
    "url": "assets/js/49.js",
    "revision": "a437b8d56946e24c12d7dd7036aba239"
  },
  {
    "url": "assets/js/490.js",
    "revision": "510fa0b2de455595e336e019b54b60d5"
  },
  {
    "url": "assets/js/491.js",
    "revision": "bebd8c4e4f87f77509d4bee1bad4404c"
  },
  {
    "url": "assets/js/492.js",
    "revision": "98226a9d33ba820719cce8f8b9891e42"
  },
  {
    "url": "assets/js/493.js",
    "revision": "c0e30fb42b52bd4cd936f06157d7872d"
  },
  {
    "url": "assets/js/494.js",
    "revision": "bfad4bc678647894e68a912aa71adad8"
  },
  {
    "url": "assets/js/495.js",
    "revision": "9a146c299a693f6d9c6a5fee11e92f60"
  },
  {
    "url": "assets/js/496.js",
    "revision": "ec899d25315be276c115f60d46af2a96"
  },
  {
    "url": "assets/js/497.js",
    "revision": "7dbff33aba2cb75d65c805f63665525c"
  },
  {
    "url": "assets/js/498.js",
    "revision": "adcabd5bb11e03a8f787eedfa1038edc"
  },
  {
    "url": "assets/js/499.js",
    "revision": "6317732d268c5cf2a8ac289c01fff16f"
  },
  {
    "url": "assets/js/5.js",
    "revision": "3a69ff909765c6642a243d8e1363af33"
  },
  {
    "url": "assets/js/50.js",
    "revision": "2429eb353ce63703662c67b44aa7241c"
  },
  {
    "url": "assets/js/500.js",
    "revision": "b77fac6fd6d525e9d4d1053f0f0ee3ee"
  },
  {
    "url": "assets/js/501.js",
    "revision": "bc9976adf12dba6faaeaaa04b088004e"
  },
  {
    "url": "assets/js/502.js",
    "revision": "9ee0288aa28c3de90a208f305246fd09"
  },
  {
    "url": "assets/js/503.js",
    "revision": "2c071aab8bbccdec999e005f50ffa4a0"
  },
  {
    "url": "assets/js/504.js",
    "revision": "6e2de6d7c5dcc2eee0941658ac331b77"
  },
  {
    "url": "assets/js/505.js",
    "revision": "d0edd09a70892bf8e674ef5996e75a56"
  },
  {
    "url": "assets/js/506.js",
    "revision": "49c623586d239cf990f40cd2016e7ba6"
  },
  {
    "url": "assets/js/507.js",
    "revision": "03c6fde58a969494a4a3b73ce67d0dbc"
  },
  {
    "url": "assets/js/508.js",
    "revision": "5531983f31ff4c67ab166b9f67aacfeb"
  },
  {
    "url": "assets/js/509.js",
    "revision": "4e0ae1d112e2b8900376f28625a33f9c"
  },
  {
    "url": "assets/js/51.js",
    "revision": "ac5f345455f8b1cc94abafbba78dab5a"
  },
  {
    "url": "assets/js/510.js",
    "revision": "af90c982e16fac9cf89c10546765c8e3"
  },
  {
    "url": "assets/js/511.js",
    "revision": "4d9f9052f217d10fa017965697f11a7f"
  },
  {
    "url": "assets/js/512.js",
    "revision": "a9f6c6aa293c7d01f345763c8ec65d92"
  },
  {
    "url": "assets/js/513.js",
    "revision": "7a73163ab53d0dd9edb00e2bbb1b7afe"
  },
  {
    "url": "assets/js/514.js",
    "revision": "ca05ac247153fc48a2880b00d6f5ad0c"
  },
  {
    "url": "assets/js/515.js",
    "revision": "37fa2021d73843b0dafaa6a11fb02c9d"
  },
  {
    "url": "assets/js/516.js",
    "revision": "baeb51b7e671b47d2d72dc010a5c4354"
  },
  {
    "url": "assets/js/517.js",
    "revision": "bcae0a0cca695a38f33857d4e056263a"
  },
  {
    "url": "assets/js/518.js",
    "revision": "c23958aa53de0b7a6defa6855f62855d"
  },
  {
    "url": "assets/js/519.js",
    "revision": "3c6bd8d5a5407c5550d135ea046bc044"
  },
  {
    "url": "assets/js/52.js",
    "revision": "7f47d2532e67efb511732d9564d2e88f"
  },
  {
    "url": "assets/js/520.js",
    "revision": "9e5d81ff98dcbb02cc334031943c3ed2"
  },
  {
    "url": "assets/js/521.js",
    "revision": "f3c66d9e916335e74a54482dd2d8d649"
  },
  {
    "url": "assets/js/522.js",
    "revision": "3a7d2df2526679a5644c1423964042b2"
  },
  {
    "url": "assets/js/523.js",
    "revision": "168f3c65cd11ff81e45a148af91d5be7"
  },
  {
    "url": "assets/js/524.js",
    "revision": "085dc7e328afa598d413615101707a2e"
  },
  {
    "url": "assets/js/525.js",
    "revision": "167909468ce8371fe50711bd40211a68"
  },
  {
    "url": "assets/js/526.js",
    "revision": "d0ac56462174a62202fce36321ffb086"
  },
  {
    "url": "assets/js/527.js",
    "revision": "547c4d71dfd7636fdee059c04ced07dc"
  },
  {
    "url": "assets/js/528.js",
    "revision": "8656f344778aa4b112936bd3865253aa"
  },
  {
    "url": "assets/js/529.js",
    "revision": "d6f1f6ca1a33b589454a22c7ae5d0ba1"
  },
  {
    "url": "assets/js/53.js",
    "revision": "8c1ab0bdb4ef8ad349b0aace5bb30582"
  },
  {
    "url": "assets/js/530.js",
    "revision": "bb75ccb71d4845a2d7782ba11d3867b5"
  },
  {
    "url": "assets/js/531.js",
    "revision": "aed52a92e1837d622523c46d4e8c4fc0"
  },
  {
    "url": "assets/js/532.js",
    "revision": "27691c0d686bdbdb563d371193392034"
  },
  {
    "url": "assets/js/533.js",
    "revision": "3cc854c137f0bb8df9a21c63c58b1586"
  },
  {
    "url": "assets/js/534.js",
    "revision": "2da45604c15dbb67bf534d6297c58341"
  },
  {
    "url": "assets/js/535.js",
    "revision": "de96e097683067ba1d9656fc0955d95f"
  },
  {
    "url": "assets/js/536.js",
    "revision": "3b902570f5e797189d4ca3cab5cc4f5e"
  },
  {
    "url": "assets/js/537.js",
    "revision": "9d1797d3bd26518c7d24fb0056aebb32"
  },
  {
    "url": "assets/js/538.js",
    "revision": "f80b8622433cae57d2f12e1e6e208805"
  },
  {
    "url": "assets/js/539.js",
    "revision": "c048be704442145399a24d9e402fb5a2"
  },
  {
    "url": "assets/js/54.js",
    "revision": "61823e8ad2482ddd6097f903a64bb740"
  },
  {
    "url": "assets/js/540.js",
    "revision": "c00668b9eba3141c00e9b574390d1a17"
  },
  {
    "url": "assets/js/541.js",
    "revision": "37947acf1e2dd8002764edbc1aa2c850"
  },
  {
    "url": "assets/js/542.js",
    "revision": "8a3cde8c38b7a4bb51ec42c9ea276031"
  },
  {
    "url": "assets/js/543.js",
    "revision": "a64194323ecdd059f73e48dc012909bd"
  },
  {
    "url": "assets/js/544.js",
    "revision": "3b7ca6479c5e8566b05fb776506c0d50"
  },
  {
    "url": "assets/js/545.js",
    "revision": "9c9140f0a5bf46ee3d9665dc51abe79b"
  },
  {
    "url": "assets/js/546.js",
    "revision": "07162fed59908f3011cbf8377d0720c2"
  },
  {
    "url": "assets/js/547.js",
    "revision": "b30bfa8679a30c5ddd03ecf94617da56"
  },
  {
    "url": "assets/js/548.js",
    "revision": "e81efccc759f8cb28709c5cd94f7f4c6"
  },
  {
    "url": "assets/js/549.js",
    "revision": "249d3e7b22cf1c5d9eb6305c1909dbe9"
  },
  {
    "url": "assets/js/55.js",
    "revision": "2f73f4d2309621fce21af7caa915eaa5"
  },
  {
    "url": "assets/js/550.js",
    "revision": "a79713902fa285b795a836786e920076"
  },
  {
    "url": "assets/js/551.js",
    "revision": "6a3477cec47dd6a75f5391d0324cd81b"
  },
  {
    "url": "assets/js/552.js",
    "revision": "57b9c024b79865b63bbda153ea9cecaf"
  },
  {
    "url": "assets/js/553.js",
    "revision": "bf3bfb5a5cf0c332cfb08eaaebc78e5a"
  },
  {
    "url": "assets/js/554.js",
    "revision": "ba466827c95842b504e9e0425352002f"
  },
  {
    "url": "assets/js/555.js",
    "revision": "9da8871a603ead7f9834491f187dd879"
  },
  {
    "url": "assets/js/556.js",
    "revision": "a00825b9175ef9348eb39aa823e6e107"
  },
  {
    "url": "assets/js/557.js",
    "revision": "08f22346d6bbde6fada6bfa070ca1e1b"
  },
  {
    "url": "assets/js/558.js",
    "revision": "fd6e4cbce3ecbfab3f9d700adcf65125"
  },
  {
    "url": "assets/js/559.js",
    "revision": "414f6c3ffdb718f240d76d6557f10673"
  },
  {
    "url": "assets/js/56.js",
    "revision": "e4e1b6a789e4072af291afb80b1dbebd"
  },
  {
    "url": "assets/js/560.js",
    "revision": "25d6d6edffff73792ebdc50f759aa41f"
  },
  {
    "url": "assets/js/561.js",
    "revision": "f7e7f687a2ad374987d7330e268420be"
  },
  {
    "url": "assets/js/562.js",
    "revision": "903aa8a2d267ae7dec80acf2b4b6c726"
  },
  {
    "url": "assets/js/563.js",
    "revision": "80158e3dace341a3b3ffd41e75c71a38"
  },
  {
    "url": "assets/js/564.js",
    "revision": "47a44cf7d8b84251723f3d8e0477b6c2"
  },
  {
    "url": "assets/js/565.js",
    "revision": "b347c5bcf89c5219a69f825c774979e5"
  },
  {
    "url": "assets/js/566.js",
    "revision": "8e7edaae1877e66ea43fd06aa0eeb778"
  },
  {
    "url": "assets/js/567.js",
    "revision": "496d05d2db93fe04fa97acc4b47366df"
  },
  {
    "url": "assets/js/568.js",
    "revision": "e003b95705563a9f2917c1fa3d079abd"
  },
  {
    "url": "assets/js/569.js",
    "revision": "29954340dbbf418080587caa375c319f"
  },
  {
    "url": "assets/js/57.js",
    "revision": "868bc5b90a98e0d8bec86e376056420a"
  },
  {
    "url": "assets/js/570.js",
    "revision": "0bc53b294c6cd227504fdb2cc0e672c8"
  },
  {
    "url": "assets/js/571.js",
    "revision": "5f5b1379266d2f293c4f77697bee8778"
  },
  {
    "url": "assets/js/572.js",
    "revision": "cde7d540fa72573d39ad5606224c0e11"
  },
  {
    "url": "assets/js/573.js",
    "revision": "65b9cb3033b6c60eeeb5b40c47f30500"
  },
  {
    "url": "assets/js/574.js",
    "revision": "8cb5f25b2cb234fb08b7df2c4c122e74"
  },
  {
    "url": "assets/js/575.js",
    "revision": "12e3bbe6522016d45577c5b3a5935be3"
  },
  {
    "url": "assets/js/576.js",
    "revision": "af89479ae12147e6352e6c5c9e9c52ff"
  },
  {
    "url": "assets/js/577.js",
    "revision": "be990c7924baa27c4bac0649e35633e9"
  },
  {
    "url": "assets/js/578.js",
    "revision": "6e640ca65ac4dbed63e8f30506041b6b"
  },
  {
    "url": "assets/js/579.js",
    "revision": "989d3cb12eb604b3fe213efdfe92059d"
  },
  {
    "url": "assets/js/58.js",
    "revision": "1d6358a8e8a0d19038840d063d862998"
  },
  {
    "url": "assets/js/580.js",
    "revision": "7b048f88aea8c55467858f944beb0b95"
  },
  {
    "url": "assets/js/581.js",
    "revision": "a0394054f25289a64c3ec8835ac73844"
  },
  {
    "url": "assets/js/582.js",
    "revision": "a65087ab5c4cde898fff86a5e36c1283"
  },
  {
    "url": "assets/js/583.js",
    "revision": "303406e96c3330d5de6b3531abd37133"
  },
  {
    "url": "assets/js/584.js",
    "revision": "ab6fd71f83a73cf97e2f076813fd3c9e"
  },
  {
    "url": "assets/js/585.js",
    "revision": "39948eda9690d52a36b6147e407f6055"
  },
  {
    "url": "assets/js/586.js",
    "revision": "01f19682e7b11795167eea228dfeae3f"
  },
  {
    "url": "assets/js/59.js",
    "revision": "b20ca5ffa20236301a03cfadf1a0ab55"
  },
  {
    "url": "assets/js/6.js",
    "revision": "1ba3a56e8f250049612c51d0a29bcdbc"
  },
  {
    "url": "assets/js/60.js",
    "revision": "cbf0d8967712bc4babdef31b98ea8573"
  },
  {
    "url": "assets/js/61.js",
    "revision": "6d0fd5534d781448abe35e661f0d182e"
  },
  {
    "url": "assets/js/62.js",
    "revision": "76e17387b72c477b7b8cc640f7c1fa3b"
  },
  {
    "url": "assets/js/63.js",
    "revision": "07fe5cba3bd47d6930dfd888b1a4881c"
  },
  {
    "url": "assets/js/64.js",
    "revision": "6fa7075d9977a258498e6ab5a46e5263"
  },
  {
    "url": "assets/js/65.js",
    "revision": "2e00298bfee581c6092555e0dfb5d365"
  },
  {
    "url": "assets/js/66.js",
    "revision": "d29f7b1955e8ff7a27f609dd195d8fb8"
  },
  {
    "url": "assets/js/67.js",
    "revision": "b9bfca5e2ecfd2cef025249bb86f47fe"
  },
  {
    "url": "assets/js/68.js",
    "revision": "461612f24dd5a9418f9c6d92854601d8"
  },
  {
    "url": "assets/js/69.js",
    "revision": "a7f910d3a45c418447cf7aed128b63e4"
  },
  {
    "url": "assets/js/7.js",
    "revision": "8bf2fa07ca987aa9f98441956af69a0c"
  },
  {
    "url": "assets/js/70.js",
    "revision": "cfb4e928a3be53163e97ce66b53da579"
  },
  {
    "url": "assets/js/71.js",
    "revision": "f92fb22fa420b29d0f19ea683da3d6f9"
  },
  {
    "url": "assets/js/72.js",
    "revision": "86528a962f96bb7c4ceb74c8e0822e53"
  },
  {
    "url": "assets/js/73.js",
    "revision": "178b07a0f4109053fb308415ae10ccf0"
  },
  {
    "url": "assets/js/74.js",
    "revision": "d0a8c4a564af7f4e0a99465057bec2ee"
  },
  {
    "url": "assets/js/75.js",
    "revision": "eb7e6992e3d9537cf95a1b1593abda11"
  },
  {
    "url": "assets/js/76.js",
    "revision": "6cc2c72c0f3608c182d7a85f56b8e652"
  },
  {
    "url": "assets/js/77.js",
    "revision": "96a574481249fcb21395c6cb49a9ce80"
  },
  {
    "url": "assets/js/78.js",
    "revision": "645e248fd2e6a39f2e7fee50d7b7dcac"
  },
  {
    "url": "assets/js/79.js",
    "revision": "27fcf32e83dcffed8898a2da1f9d1cba"
  },
  {
    "url": "assets/js/8.js",
    "revision": "594fc706eebeba16a16afe5bd9e2c1b8"
  },
  {
    "url": "assets/js/80.js",
    "revision": "98f5442d833873c4137f1b93d1513bb7"
  },
  {
    "url": "assets/js/81.js",
    "revision": "d9e97549e8bf21e04bc3dc44f00f8bec"
  },
  {
    "url": "assets/js/82.js",
    "revision": "1825f07977d15165dff2ab67ee00b2fe"
  },
  {
    "url": "assets/js/83.js",
    "revision": "64fd2f4104b8abc9248fc1bf6d521ede"
  },
  {
    "url": "assets/js/84.js",
    "revision": "d52c44001e23749fa99df618b35a5f48"
  },
  {
    "url": "assets/js/85.js",
    "revision": "ac02fd161fe195ccf9fa1d7a53a68883"
  },
  {
    "url": "assets/js/86.js",
    "revision": "1c5782e2eeb60afec5ccf7e5123df31f"
  },
  {
    "url": "assets/js/87.js",
    "revision": "1b94a2658754a97b31f432cecc182ce9"
  },
  {
    "url": "assets/js/88.js",
    "revision": "989da9d5e4d8ee7ad54062312991ae04"
  },
  {
    "url": "assets/js/89.js",
    "revision": "fd60a45ecf75bf7ae1248a933f1e9efe"
  },
  {
    "url": "assets/js/9.js",
    "revision": "e146d7bbcd9b892c0c90dbc401c228cf"
  },
  {
    "url": "assets/js/90.js",
    "revision": "8b128315639b5c636ec4098c5c1f03a8"
  },
  {
    "url": "assets/js/91.js",
    "revision": "49927aab56e29de48cdbe12f768f1808"
  },
  {
    "url": "assets/js/92.js",
    "revision": "8ac3f9ad4aaf7c5c1301bbc69a144e5e"
  },
  {
    "url": "assets/js/93.js",
    "revision": "a093ed7da8db2e56630a1454fa615f9b"
  },
  {
    "url": "assets/js/94.js",
    "revision": "2becc073535e9fdc04332a44d2d10984"
  },
  {
    "url": "assets/js/95.js",
    "revision": "d639c2f94f68e175cf5905ab05e71df4"
  },
  {
    "url": "assets/js/96.js",
    "revision": "7fe6aca303aef86af8c8ffbd604a746a"
  },
  {
    "url": "assets/js/97.js",
    "revision": "9afe0e35886d18098534988de63038e7"
  },
  {
    "url": "assets/js/98.js",
    "revision": "8619052f7b0260d62bf4ba238cd556ed"
  },
  {
    "url": "assets/js/99.js",
    "revision": "bbad52e9bdfc0a8584d163050716f5ce"
  },
  {
    "url": "assets/js/app.js",
    "revision": "124edb972a850bb432c6063e17f40c4d"
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
    "revision": "428e8e79b5e1a371f30f966495fd4f88"
  },
  {
    "url": "blog/code/divider/index.html",
    "revision": "e459a1d809b0da2fb2a537326ad4992c"
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
    "revision": "e36a71e88e4004cb45399624cc09ed60"
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
    "revision": "f1589e7d29da519b7c8f4808a1bb7d5f"
  },
  {
    "url": "blog/code/website/route/index.html",
    "revision": "80a6555444d99ea586d06c63708699e6"
  },
  {
    "url": "blog/code/website/site/index.html",
    "revision": "041ee158b32759b01b099331dcab96d4"
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
    "revision": "f5780d57000640534f4cec1bbe6bfb28"
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
    "revision": "a2b87e7214bbe93fd777df80e83fc9fc"
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
    "revision": "845a9e55de3f28d195bf9dd9ba72da5a"
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
    "revision": "0573e725edaf4b7f7f34830a439a1eaa"
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
    "revision": "e0555e920973844513505e39e5970722"
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
    "revision": "db7db49029c63d73998117362d60036c"
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
    "revision": "b05cdb79de2980a704acf74291857c3e"
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
    "revision": "951c3d1c8699e12a944e950af77df618"
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
    "revision": "b6e7973374f3ab807a429c30cb0e8244"
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
    "revision": "fc28873b4004091c3da5cb9f77799051"
  },
  {
    "url": "blog/skepticism/2015/11/15/end/index.html",
    "revision": "ce80ec5bb6c838388c01f684d965fe68"
  },
  {
    "url": "blog/skepticism/2015/11/15/index.html",
    "revision": "c41760406e92b76ceb6e0a366b170151"
  },
  {
    "url": "blog/skepticism/2015/11/index.html",
    "revision": "6d21038819c84f92bd335029d5800d44"
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
    "revision": "90047c410354015d6ab3f66d4cbb4eca"
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
    "revision": "1e4733d1a4da1b50c80dfd8047cc7695"
  },
  {
    "url": "blog/skepticism/2015/index.html",
    "revision": "12fc15392590ff93b8af02e216ede0c5"
  },
  {
    "url": "blog/skepticism/2016/02/07/antioxidant/index.html",
    "revision": "bfaf9ab93ca0d3e781d6973147b3ec41"
  },
  {
    "url": "blog/skepticism/2016/02/07/index.html",
    "revision": "980b0ec8db2da8b30bc099980f8d19d7"
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
    "revision": "be5c94e11d85f738445e15e767311864"
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
    "revision": "1721fd4c44438e3723e7d8d2a9062c9b"
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
    "revision": "14609858a9b4e7bcce0446f7dac46748"
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
    "revision": "66755707ef29c6a9efb82b5f7881f627"
  },
  {
    "url": "blog/skepticism/2016/03/13/herbs/index.html",
    "revision": "ef873125f311ccb9d90a305873a835e0"
  },
  {
    "url": "blog/skepticism/2016/03/13/index.html",
    "revision": "ddcbeb20625add801ec0f7797720453c"
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
    "revision": "62525e0f31530090c6667a1162d649e9"
  },
  {
    "url": "blog/skepticism/2016/04/17/charity/index.html",
    "revision": "e30f4432aebd08d77a50fa62efffde90"
  },
  {
    "url": "blog/skepticism/2016/04/17/chiro/index.html",
    "revision": "3da9742359896831594dff9bdf01de91"
  },
  {
    "url": "blog/skepticism/2016/04/17/fluoride/index.html",
    "revision": "d4f5b356a20fb663ceadeff41d24989d"
  },
  {
    "url": "blog/skepticism/2016/04/17/index.html",
    "revision": "bbbca6e2629a6af6ab726c0174f17300"
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
    "revision": "4c944a09d2de15828b3a8226cfe583fe"
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
    "revision": "8732200baf5d56cda2f606d0a1cc2c26"
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
    "revision": "a5e4811347a05bdf1a46967948bcde8b"
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
    "revision": "26b03d5a3c35f44ded0e37e3995313b3"
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
    "revision": "5917e8b81b0c23595ecbc24a44c6c63c"
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
    "revision": "b437eefb93cf6b4b61720b6d2c4d0a3d"
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
    "revision": "30a57874d8da27960d0977dd8e84cf1e"
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
    "revision": "a81e8394c0ef42cb2245ef18a0f944e8"
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
    "revision": "a7d0cebb0c9faf4ed11a2461073ac466"
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
    "revision": "705a332cb491caef26c6f90c845b9451"
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
    "revision": "2c43c0df410e02cc6793745b23addc48"
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
    "revision": "c376854505786616c321ed1a1eff41f3"
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
    "revision": "d937944181477fa54562371bb228ea61"
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
    "revision": "6d2c36ca67805568f6ded01d3a1afc44"
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
    "revision": "0b3da4e72efe7fe4350c5fc6b9cba8fe"
  },
  {
    "url": "blog/skepticism/2016/09/25/murder/index.html",
    "revision": "28aad3e7b08071b7c8727e1878e77795"
  },
  {
    "url": "blog/skepticism/2016/09/index.html",
    "revision": "ce9958d74f32cf8cbd3426e8c2716a73"
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
    "revision": "d835489a5189a7f692f237f0ecdecf04"
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
    "revision": "20fa008eaa096f8a8133e0354c7db433"
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
    "revision": "191ce992cd72e37c6edc2d0343a4c657"
  },
  {
    "url": "blog/skepticism/2016/11/index.html",
    "revision": "3e1b18ff3cbde42949577004a0ee5868"
  },
  {
    "url": "blog/skepticism/2016/12/04/conference/index.html",
    "revision": "e924cd146ce124b4f781d70e213dde11"
  },
  {
    "url": "blog/skepticism/2016/12/04/index.html",
    "revision": "ef77710d2c2c392cee4f759b38a2a6a2"
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
    "revision": "e0f4270ab7d9f4048d6dd049cfc3e0e3"
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
    "revision": "f6a70a92deaffda228d93ab824b37164"
  },
  {
    "url": "blog/skepticism/2016/index.html",
    "revision": "a32fc9c8cff24337996439a1ed51583d"
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
    "revision": "130102692a9835205dd51ff01b900939"
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
    "revision": "93f666cbefb6e4b6689d85ce9aaeff7d"
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
    "revision": "c0ae7a9abd647d41945a9da73a29fb58"
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
    "revision": "515af6a980249f5fd1c8a2cdfbf97775"
  },
  {
    "url": "blog/skepticism/2017/03/05/index.html",
    "revision": "076ade171b9ee1f0266b9b1c0a563bd3"
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
    "revision": "5106132af9bcf893e2e8df16acc7ec44"
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
    "revision": "baf191df2b89857c30e51ca6a9d1bf6c"
  },
  {
    "url": "blog/skepticism/2017/03/26/nzmj/index.html",
    "revision": "8f862ca57fa9fb1c0e2634907aa43ace"
  },
  {
    "url": "blog/skepticism/2017/03/26/shaquille/index.html",
    "revision": "6b3594e504290420932c40a475d8201b"
  },
  {
    "url": "blog/skepticism/2017/03/index.html",
    "revision": "acf3624738d545a21c02931344c2e66b"
  },
  {
    "url": "blog/skepticism/2017/04/02/index.html",
    "revision": "7e940a3486867dec62d9463475be4670"
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
    "revision": "476680a7cc27ce88f020da348d18d80d"
  },
  {
    "url": "blog/skepticism/2017/04/23/kelvin/index.html",
    "revision": "7b42172f226d8232243c1bdf0bbcecdc"
  },
  {
    "url": "blog/skepticism/2017/04/index.html",
    "revision": "9942e20a71551f0f8fbbd3cc5216ba8f"
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
    "revision": "4d63475078906d25dacc2c1450d06f37"
  },
  {
    "url": "blog/skepticism/2017/05/21/maori/index.html",
    "revision": "20eb176def70d165f15a5fbc606496b5"
  },
  {
    "url": "blog/skepticism/2017/05/index.html",
    "revision": "8d8f9dd40b1181760740b36717cdbb19"
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
    "revision": "81cf73840cf8eeea5dcbe4cb169dfdaa"
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
    "revision": "490a6ae52a89ade9d449853e1863e586"
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
    "revision": "ae08603aaa61c446eed907399b17ef13"
  },
  {
    "url": "blog/skepticism/2017/07/02/baby/index.html",
    "revision": "6abca3e5b87b5bb77401cb5f7baf1c09"
  },
  {
    "url": "blog/skepticism/2017/07/02/index.html",
    "revision": "f3c25b8c3a9881ec79c4acea2ff97af3"
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
    "revision": "5d2619e0d6caf66279ea973edb023b72"
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
    "revision": "29f6d5caf9bcc34f215cbd98c055ec95"
  },
  {
    "url": "blog/skepticism/2017/07/30/police/index.html",
    "revision": "4822d2fcf4801c8229e27b98ccc89d9b"
  },
  {
    "url": "blog/skepticism/2017/07/index.html",
    "revision": "70fd6844a5088c64157735cb997eeb53"
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
    "revision": "ca811bf8cbfd1de990b60852def3466c"
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
    "revision": "32413dbf6c8dc06d5becdca22e1cea12"
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
    "revision": "bc655d165d9358620b7dd0de3fc578dd"
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
    "revision": "5f0270029b61761cffb4a56f9c36f2a3"
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
    "revision": "6ddb082dbfa0748cd3e69e2a818bee10"
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
    "revision": "9b66725a972a58f19bbae58f8429d6e1"
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
    "revision": "f9be954a8177394d08f265eb217af426"
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
    "revision": "64cceb2df5fe909e1d1deb44a1420fd9"
  },
  {
    "url": "blog/skepticism/2017/11/12/libby/index.html",
    "revision": "50b5d01b9661ced0d7bce9907f058fe9"
  },
  {
    "url": "blog/skepticism/2017/11/index.html",
    "revision": "37be5b16c21887500c8804d5c40c4a1c"
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
    "revision": "abd92216211c8de7e09c27aa9302f03b"
  },
  {
    "url": "blog/skepticism/2017/12/03/holes/index.html",
    "revision": "950a234c554080566b8ed3731fcc64d4"
  },
  {
    "url": "blog/skepticism/2017/12/03/index.html",
    "revision": "02c23abe24723afc1a6b982a216c0408"
  },
  {
    "url": "blog/skepticism/2017/12/17/index.html",
    "revision": "9ad6e5aab07732cf5e06ff27e5942bc6"
  },
  {
    "url": "blog/skepticism/2017/12/17/nhs/index.html",
    "revision": "9490f4ecef46ec7e4e47792c9e3be615"
  },
  {
    "url": "blog/skepticism/2017/12/17/oto/index.html",
    "revision": "b8e014661b39499dc6bb0b186e4d5750"
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
    "revision": "c435f526e94e7e77de9d268b7031dbd4"
  },
  {
    "url": "blog/skepticism/2017/index.html",
    "revision": "b5e43fae31b9eaf176ab6e24d36820c0"
  },
  {
    "url": "blog/skepticism/2018/01/21/grounding/index.html",
    "revision": "e1381cc6b41e39ad3ac5fe4d5787e024"
  },
  {
    "url": "blog/skepticism/2018/01/21/index.html",
    "revision": "fc06eee506e0da52c1fbfd5952ead545"
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
    "revision": "f4376ba569dd6e5ffed26a5635f8ad2a"
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
    "revision": "110427193a765fa458474dec8b0519a9"
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
    "revision": "7495e857d411d0baee915491a9406aa6"
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
    "revision": "3112222fc3fd00fa7656f29f0c4c261f"
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
    "revision": "1893be77c5639d612404888dc639e4bd"
  },
  {
    "url": "blog/skepticism/2018/03/11/ai/index.html",
    "revision": "3b4ae82b5500e838343e41bdcf7803f9"
  },
  {
    "url": "blog/skepticism/2018/03/11/index.html",
    "revision": "d196dff593c909506a0e4ac652ed6f63"
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
    "revision": "d00170082df7928a1723a6ce0db24967"
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
    "revision": "0254deb89ffa01a1d0370586db7dcd01"
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
    "revision": "e57ba0d8ee94425a9fe40d9b5ed1b367"
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
    "revision": "9b9acdaf909642fbf4c09984f37af58e"
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
    "revision": "9a1ab89aff3194acdc57b4c373190e19"
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
    "revision": "28fad1bb180505a6184129bf4bc29edc"
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
    "revision": "c054168bd337817cdece14d2fb3e0df5"
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
    "revision": "67b21bcd544c9e6187b4af332961803c"
  },
  {
    "url": "blog/skepticism/2018/06/10/astrology/index.html",
    "revision": "13ac4f9b08de0f83dbf777ae81e2edc6"
  },
  {
    "url": "blog/skepticism/2018/06/10/index.html",
    "revision": "1efc9ee38a92b3d9a2576bd3975a8fb8"
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
    "revision": "843701498cb70bd49a3e297e759063df"
  },
  {
    "url": "blog/skepticism/2018/06/24/led/index.html",
    "revision": "2f73fa56aa3e62dcacc05477faf3f6f8"
  },
  {
    "url": "blog/skepticism/2018/06/index.html",
    "revision": "1d7e2e6b95c6aee51c71c3af73e32568"
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
    "revision": "73347c1f5e9e18f289dc1421e6399894"
  },
  {
    "url": "blog/skepticism/2018/07/22/cancer/index.html",
    "revision": "7450b1e176a5c9225c4233ff37540f82"
  },
  {
    "url": "blog/skepticism/2018/07/22/index.html",
    "revision": "a1b86232c3d01c3be1ad1c47026ddc5d"
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
    "revision": "a15c4b8f27233dfacef1c9202926893f"
  },
  {
    "url": "blog/skepticism/2018/08/05/conf/index.html",
    "revision": "19081832db9d978b70be178b28bfe36f"
  },
  {
    "url": "blog/skepticism/2018/08/05/index.html",
    "revision": "17b46af6691f56f0e9df7bd88e6aeadb"
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
    "revision": "6cca67acaface474fa6bc96789f406f8"
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
    "revision": "92f880901bfecee34d2ed4e382dda134"
  },
  {
    "url": "blog/skepticism/2018/09/02/jw/index.html",
    "revision": "4d5ff6cc354f0f55c9310f3aa0662cb7"
  },
  {
    "url": "blog/skepticism/2018/09/02/sen/index.html",
    "revision": "2fc0cb8085b35bf426738b70a774a377"
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
    "revision": "0dc7c13724e33a298829a6b50c5f21c5"
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
    "revision": "7b2b36a154bd79b5dcdf89ab5107532b"
  },
  {
    "url": "blog/skepticism/2018/10/14/hacked/index.html",
    "revision": "3362942126d614e49817916243bc0ac3"
  },
  {
    "url": "blog/skepticism/2018/10/14/index.html",
    "revision": "a0daf09fbf231e9e8aa16f8c4f1d75b5"
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
    "revision": "a25afbdd392c23c621d3401d9d596d0d"
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
    "revision": "ec58aef165f869f40e36c73acee66b4f"
  },
  {
    "url": "blog/skepticism/2018/11/04/bibi/index.html",
    "revision": "9c662ed9c73bd39ee7e9294a9ce663d6"
  },
  {
    "url": "blog/skepticism/2018/11/04/index.html",
    "revision": "5109670136743c7272487958190c3ece"
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
    "revision": "20133fed3f8eb679806ec0a1bf78a804"
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
    "revision": "5d96020faccc3f15ca4e0ef6ce69022e"
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
    "revision": "6fbae0102e9764fba7365be6687262bb"
  },
  {
    "url": "blog/skepticism/2018/index.html",
    "revision": "4c887b1a8c0fdff846dfc354f48758a2"
  },
  {
    "url": "blog/skepticism/index.html",
    "revision": "5b36d6209c639db8aec235ea8a9b0621"
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
    "revision": "ae5a113d6ded33c94ed71dd4b5a1bb41"
  },
  {
    "url": "cv/index.html",
    "revision": "e7a3a416f2f0bd633f5563dd249e27df"
  },
  {
    "url": "googlee25d0c06da891164.html",
    "revision": "0defe75660212f417b90c5affcd03380"
  },
  {
    "url": "index.html",
    "revision": "1a12148bef8cb7bb65c991eba12eaa33"
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
    "revision": "ec653fb27316ddd6e7f63d65b41c388d"
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
