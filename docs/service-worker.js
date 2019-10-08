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
    "revision": "21ecab71f8d56ba44b3937daff53ec69"
  },
  {
    "url": "assets/css/0.styles.css",
    "revision": "2679dc803f521bdf0f3ae73c347043c8"
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
    "revision": "1f04befae2eab1982721af157766ac31"
  },
  {
    "url": "assets/js/100.js",
    "revision": "ef274004f1d3ec6338d5871ed518dffd"
  },
  {
    "url": "assets/js/101.js",
    "revision": "e65c65296ba1b768e7f812ea11fbf4fc"
  },
  {
    "url": "assets/js/102.js",
    "revision": "7773e75f85e81b83af399120b51a6e0a"
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
    "revision": "029473016334df86759ec90fe81bb921"
  },
  {
    "url": "assets/js/109.js",
    "revision": "d5ade14c5ce40253944a6c7f00804ff0"
  },
  {
    "url": "assets/js/11.js",
    "revision": "1786e413a0381c143795879f30a5b4ae"
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
    "revision": "27e05fa9956db3b515487b0ee9c4e93d"
  },
  {
    "url": "assets/js/113.js",
    "revision": "e1812797b431c56fa3d1f98942b778b8"
  },
  {
    "url": "assets/js/114.js",
    "revision": "3f2c9988b46173ffcbe7c68c536ca390"
  },
  {
    "url": "assets/js/115.js",
    "revision": "0c1e338686d6a58be1e0987d817769b3"
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
    "revision": "79f22b690ca73c48e5e5c91161ddef0a"
  },
  {
    "url": "assets/js/119.js",
    "revision": "d361766490a07fd6efbea3865ff49fe6"
  },
  {
    "url": "assets/js/12.js",
    "revision": "3deb5b5f47f478b05b82972f2a0f7335"
  },
  {
    "url": "assets/js/120.js",
    "revision": "dbdd8b03b33e810588db3ec08d89c0ed"
  },
  {
    "url": "assets/js/121.js",
    "revision": "0545b848ef1b668abdc95a2e906832f8"
  },
  {
    "url": "assets/js/122.js",
    "revision": "72dc9a58e1db9cc4dd55c499849d4eea"
  },
  {
    "url": "assets/js/123.js",
    "revision": "aa24a578915f4497655556b740131f34"
  },
  {
    "url": "assets/js/124.js",
    "revision": "1409007cc730d901399211811b5336ed"
  },
  {
    "url": "assets/js/125.js",
    "revision": "47223c60865951a8d4e0eba28c92ad31"
  },
  {
    "url": "assets/js/126.js",
    "revision": "5df0cbcdb51bceedf0d9ab8f01d80c8d"
  },
  {
    "url": "assets/js/127.js",
    "revision": "e9a7e0db257b8486d766cbe8dc666015"
  },
  {
    "url": "assets/js/128.js",
    "revision": "16505c32f6026e9e29757b3bad91cfb4"
  },
  {
    "url": "assets/js/129.js",
    "revision": "d2b6a10c3481049ce20d2469b95f8a86"
  },
  {
    "url": "assets/js/13.js",
    "revision": "9ac9f2d68c74eeb9b436f103db09bbcf"
  },
  {
    "url": "assets/js/130.js",
    "revision": "091ab4ef61484d635872f048f909c13b"
  },
  {
    "url": "assets/js/131.js",
    "revision": "1e582e1449b8d32392ec9da6efdb0dd9"
  },
  {
    "url": "assets/js/132.js",
    "revision": "8ec1fe77605763647cacfd40291d137c"
  },
  {
    "url": "assets/js/133.js",
    "revision": "54ef7a9b45facae9a6b323982d76d462"
  },
  {
    "url": "assets/js/134.js",
    "revision": "01823406661b5b88220e8e6be729e4bd"
  },
  {
    "url": "assets/js/135.js",
    "revision": "8a1e35c6af2d6005f1571c1a020ddc91"
  },
  {
    "url": "assets/js/136.js",
    "revision": "f70969a34ec3d3c7b7a9bb5d1f7c2ea9"
  },
  {
    "url": "assets/js/137.js",
    "revision": "10c66fb21f2d0104f25bd26f37c02260"
  },
  {
    "url": "assets/js/138.js",
    "revision": "99a4a51a03e6d0df722e675d70021e53"
  },
  {
    "url": "assets/js/139.js",
    "revision": "93359a8d2e9d5599f1d481d510ae7842"
  },
  {
    "url": "assets/js/14.js",
    "revision": "f93b3d818ce94c3a99123f24b81eb4c6"
  },
  {
    "url": "assets/js/140.js",
    "revision": "085eabf335e453971d027797fc8f1046"
  },
  {
    "url": "assets/js/141.js",
    "revision": "70abd81604ff98dec35ad13c83977962"
  },
  {
    "url": "assets/js/142.js",
    "revision": "e2c640ba11b8555daa9fa512f6a81eb0"
  },
  {
    "url": "assets/js/143.js",
    "revision": "bf3a7bdd61fb8b0953da050e052e9e02"
  },
  {
    "url": "assets/js/144.js",
    "revision": "987426cc62ef6b617e7b73b802228203"
  },
  {
    "url": "assets/js/145.js",
    "revision": "3a0fa48bcbc71c2dec6cf9863a4911b0"
  },
  {
    "url": "assets/js/146.js",
    "revision": "3082ed1352d6367aa5310e685dbc71e1"
  },
  {
    "url": "assets/js/147.js",
    "revision": "36728679ff70b0bfc70a0ae48769b454"
  },
  {
    "url": "assets/js/148.js",
    "revision": "1820888991f32b8c0f19213affd80d8e"
  },
  {
    "url": "assets/js/149.js",
    "revision": "1932b2ab15c7c74fe693905e095e0873"
  },
  {
    "url": "assets/js/15.js",
    "revision": "9e7cb7299a99d21eddf38e141d4eef24"
  },
  {
    "url": "assets/js/150.js",
    "revision": "dabf95daeb2bf06b12e6f84c229b98e3"
  },
  {
    "url": "assets/js/151.js",
    "revision": "19d3b3564c68bb6678ae4992e364e1c2"
  },
  {
    "url": "assets/js/152.js",
    "revision": "cd347eeb0b9b1c3b74b04c720ee8d39c"
  },
  {
    "url": "assets/js/153.js",
    "revision": "70b78ac2eac95f996aa60c4908f1dc1d"
  },
  {
    "url": "assets/js/154.js",
    "revision": "38e1ce3f9f8b07ea30d90af811a4021c"
  },
  {
    "url": "assets/js/155.js",
    "revision": "e89f16f5e958f1af1c19fb52540d47f9"
  },
  {
    "url": "assets/js/156.js",
    "revision": "74c8685b85ad34cd495c3e2a7e58a127"
  },
  {
    "url": "assets/js/157.js",
    "revision": "0e79daf550798336199c493b9dcd3b29"
  },
  {
    "url": "assets/js/158.js",
    "revision": "da0d7ab857ed9781659ef6165f8b3d90"
  },
  {
    "url": "assets/js/159.js",
    "revision": "d8a82bbfd836fa7ebfcc31ec5fa52487"
  },
  {
    "url": "assets/js/16.js",
    "revision": "09c149b761588be4000ecb3f0a1ce46e"
  },
  {
    "url": "assets/js/160.js",
    "revision": "cef0567e49c44f117c9814a44b17051e"
  },
  {
    "url": "assets/js/161.js",
    "revision": "a79aec64e6c23bf6e0a0dfe80b7b80e1"
  },
  {
    "url": "assets/js/162.js",
    "revision": "101825edb20897e9e46caffd8c5003b8"
  },
  {
    "url": "assets/js/163.js",
    "revision": "f8f87a1356b2fa29d384038ad9637437"
  },
  {
    "url": "assets/js/164.js",
    "revision": "afd5085b87a1b38515560c6fc760256d"
  },
  {
    "url": "assets/js/165.js",
    "revision": "64f2114fdacc67275d986128ea21cdc8"
  },
  {
    "url": "assets/js/166.js",
    "revision": "0e8de50d8381fc3668974b22dd0ecd17"
  },
  {
    "url": "assets/js/167.js",
    "revision": "11777da050805f7d806d59fdb54c2ebd"
  },
  {
    "url": "assets/js/168.js",
    "revision": "89f8c290fa9165aacecdc5995d1e5317"
  },
  {
    "url": "assets/js/169.js",
    "revision": "dca91431eae3d4a73937ec36277e0d27"
  },
  {
    "url": "assets/js/17.js",
    "revision": "027ee06e3da1bfa3d876281a4266de19"
  },
  {
    "url": "assets/js/170.js",
    "revision": "597db17c0a90712fa58168c4bf210c46"
  },
  {
    "url": "assets/js/171.js",
    "revision": "4bd2be3eb1b0c2219152f92f304bbc6f"
  },
  {
    "url": "assets/js/172.js",
    "revision": "9be8bc6add0ed7f11aaee1424c60d5af"
  },
  {
    "url": "assets/js/173.js",
    "revision": "b38bd26d86e8b5be73d4943535dd4aaa"
  },
  {
    "url": "assets/js/174.js",
    "revision": "7a87dda006d3ae6a2d16845432e6b57e"
  },
  {
    "url": "assets/js/175.js",
    "revision": "ac3bd3b2cac3bc1594a5d0950a17ac76"
  },
  {
    "url": "assets/js/176.js",
    "revision": "e4de253eb5bdf3c7745ffa9dd54e8727"
  },
  {
    "url": "assets/js/177.js",
    "revision": "47161898c34b16aaf11c67ff8acdfacd"
  },
  {
    "url": "assets/js/178.js",
    "revision": "ed39e9d0ab83b66325a99af7228d3cf2"
  },
  {
    "url": "assets/js/179.js",
    "revision": "d563d5ead9d44dc8e916c5dd1208fe8c"
  },
  {
    "url": "assets/js/18.js",
    "revision": "51d68aef6330842e012c5d8b69950179"
  },
  {
    "url": "assets/js/180.js",
    "revision": "d36037bdc63c85432cf911ecc6fef86d"
  },
  {
    "url": "assets/js/181.js",
    "revision": "b8e530ab858a7c6513a59d81d59dee4e"
  },
  {
    "url": "assets/js/182.js",
    "revision": "1623575511605bff089a81afafb624d2"
  },
  {
    "url": "assets/js/183.js",
    "revision": "3db8ff9968632a867bab122d95c6011d"
  },
  {
    "url": "assets/js/184.js",
    "revision": "4b7fdc222865bf1c93bab2e0b1e40582"
  },
  {
    "url": "assets/js/185.js",
    "revision": "2588abb36a85db213d02428f5601d27e"
  },
  {
    "url": "assets/js/186.js",
    "revision": "473d70157a4ab06d4bc2b0e159eb0857"
  },
  {
    "url": "assets/js/187.js",
    "revision": "4c17da84ebb470302e53d0128b2c404e"
  },
  {
    "url": "assets/js/188.js",
    "revision": "9e35c196524f9b5e1963d585323c06c7"
  },
  {
    "url": "assets/js/189.js",
    "revision": "0ca832e7f4b5d2a4052fe4f8eb5e11ec"
  },
  {
    "url": "assets/js/19.js",
    "revision": "4e5559c80c146abcb02aa2af6509f249"
  },
  {
    "url": "assets/js/190.js",
    "revision": "d3d6e8ff8fe02a265963e05eeb51cb3a"
  },
  {
    "url": "assets/js/191.js",
    "revision": "4c64fd4e48beb8477f2a21223c8f6175"
  },
  {
    "url": "assets/js/192.js",
    "revision": "366ddeac62d889ff4b9f6793d03e6d39"
  },
  {
    "url": "assets/js/193.js",
    "revision": "539064dfdbb0ddab62eedb1ff5d5869f"
  },
  {
    "url": "assets/js/194.js",
    "revision": "3e7d77d76eac706a5fe895421ca03e0c"
  },
  {
    "url": "assets/js/195.js",
    "revision": "7eeb4762b9a1d5a6b98450f48f8773b1"
  },
  {
    "url": "assets/js/196.js",
    "revision": "4c65cbb685ada056612d0be8dbe59304"
  },
  {
    "url": "assets/js/197.js",
    "revision": "f437056e0e41206ef813fd44dfa9ef29"
  },
  {
    "url": "assets/js/198.js",
    "revision": "a89f3ca04abd9adc96e8835c49e991d5"
  },
  {
    "url": "assets/js/199.js",
    "revision": "fb3b81b8ac79800ee504daac60fcedf5"
  },
  {
    "url": "assets/js/2.js",
    "revision": "ca0f2a102d2c8d50d49a8593e5c4fea7"
  },
  {
    "url": "assets/js/20.js",
    "revision": "dcbbbf249706cdf26a7ea3dd899b914e"
  },
  {
    "url": "assets/js/200.js",
    "revision": "ba93b0c369037fd813b35b83461cc698"
  },
  {
    "url": "assets/js/201.js",
    "revision": "81aad67a04f7a32d196897cf28eb8f35"
  },
  {
    "url": "assets/js/202.js",
    "revision": "5ec8e53a83e3ada97e94ca3165c91037"
  },
  {
    "url": "assets/js/203.js",
    "revision": "48baaef80cc0cf3a578275bd429b101e"
  },
  {
    "url": "assets/js/204.js",
    "revision": "09f0a905078941cfa37670f1e3247205"
  },
  {
    "url": "assets/js/205.js",
    "revision": "94dbc32632bff2fd91cc913a7076193e"
  },
  {
    "url": "assets/js/206.js",
    "revision": "2687dbb6a902ee8022e0e3d7ef7f9629"
  },
  {
    "url": "assets/js/207.js",
    "revision": "fed114bb3d9e944414c6f8929cbef55f"
  },
  {
    "url": "assets/js/208.js",
    "revision": "6b323b565ef6ab0a40f419378bdb28b2"
  },
  {
    "url": "assets/js/209.js",
    "revision": "cf03de8180c38d25f2e3bedfc108715f"
  },
  {
    "url": "assets/js/21.js",
    "revision": "29402424e4bfb47b5cdfeded1b6d575a"
  },
  {
    "url": "assets/js/210.js",
    "revision": "c1267a336bce1b57e2229eef86024a96"
  },
  {
    "url": "assets/js/211.js",
    "revision": "a9f1c742c3752f7da9b534aeb46d830f"
  },
  {
    "url": "assets/js/212.js",
    "revision": "3ce394fc41505c8336233043906c3af6"
  },
  {
    "url": "assets/js/213.js",
    "revision": "74aab7cc6de5d481750897a8945bd473"
  },
  {
    "url": "assets/js/214.js",
    "revision": "98d745afeb7b2d15fb104343426d955e"
  },
  {
    "url": "assets/js/215.js",
    "revision": "fac8cc369f3a85e379222cad704cab1b"
  },
  {
    "url": "assets/js/216.js",
    "revision": "51ee3c3b1a7757d6c434de5c7d555ac1"
  },
  {
    "url": "assets/js/217.js",
    "revision": "be88fddee5e2c46b415daf5e825de507"
  },
  {
    "url": "assets/js/218.js",
    "revision": "a9d9a565374073625a2c8bb2cc01cb76"
  },
  {
    "url": "assets/js/219.js",
    "revision": "9d16c7b8159920372935328c3f4a740a"
  },
  {
    "url": "assets/js/22.js",
    "revision": "40a9b8359d236aab9ae762c432a9bb54"
  },
  {
    "url": "assets/js/220.js",
    "revision": "4fbb21dd4be0c7ea8d77da758aa66444"
  },
  {
    "url": "assets/js/221.js",
    "revision": "40afe1725f3253d32f8cc82a8ace120f"
  },
  {
    "url": "assets/js/222.js",
    "revision": "ae9d23ab1fba6ec6b6ffca72c0711c7c"
  },
  {
    "url": "assets/js/223.js",
    "revision": "78360dd70b0b0b70ec4af1783c3309e4"
  },
  {
    "url": "assets/js/224.js",
    "revision": "8a3255a01ab53e076641291cb55b2b38"
  },
  {
    "url": "assets/js/225.js",
    "revision": "f1f4364e7a777fd95dd5fb18e33f181e"
  },
  {
    "url": "assets/js/226.js",
    "revision": "5a766114b26fa2dfcfcb43382103048d"
  },
  {
    "url": "assets/js/227.js",
    "revision": "7c92202e44dbcdc53837c08b11bf35c8"
  },
  {
    "url": "assets/js/228.js",
    "revision": "4ebbb641e697b8126901f8d1ef5c71e4"
  },
  {
    "url": "assets/js/229.js",
    "revision": "26685a12559e5420779f7b63a5303f43"
  },
  {
    "url": "assets/js/23.js",
    "revision": "5a9b4bbf8c688d24a361af9c90e95532"
  },
  {
    "url": "assets/js/230.js",
    "revision": "f56d4ccd769500c41cee0ff8516fbd94"
  },
  {
    "url": "assets/js/231.js",
    "revision": "cc7977858488989f46e10a4418c8ae84"
  },
  {
    "url": "assets/js/232.js",
    "revision": "b0c22360011f637ca348edcf5638c5b8"
  },
  {
    "url": "assets/js/233.js",
    "revision": "ca0fcb76812b0bad953a2c80efb86283"
  },
  {
    "url": "assets/js/234.js",
    "revision": "320d3b659154a712e48f584c8ecb9229"
  },
  {
    "url": "assets/js/235.js",
    "revision": "58f55e811d52676c87f1f40e13ba17ca"
  },
  {
    "url": "assets/js/236.js",
    "revision": "23513a6b8ea527e2bfbd2fa9718d7b4a"
  },
  {
    "url": "assets/js/237.js",
    "revision": "2d5fb31a04c131c87a6987ccd2d3e3af"
  },
  {
    "url": "assets/js/238.js",
    "revision": "fefd450c2491a9ab7b1a1d7664abc444"
  },
  {
    "url": "assets/js/239.js",
    "revision": "72eeae863fb1d4085f12887618b706bc"
  },
  {
    "url": "assets/js/24.js",
    "revision": "94fd1917fe5546253646fbf3f9427484"
  },
  {
    "url": "assets/js/240.js",
    "revision": "7aeccd7322dadd32711a0561b72fd19a"
  },
  {
    "url": "assets/js/241.js",
    "revision": "dd1c0779d365d0495602db8af85ab1ec"
  },
  {
    "url": "assets/js/242.js",
    "revision": "817f4550ecb8fb2d5f499e5aa2071f62"
  },
  {
    "url": "assets/js/243.js",
    "revision": "ea4fd936e54c399b615a6b3941032d71"
  },
  {
    "url": "assets/js/244.js",
    "revision": "cb096be0abbcfc6dc96cf85d2f817826"
  },
  {
    "url": "assets/js/245.js",
    "revision": "b39112565cf5ce57adaba1fbbec9e653"
  },
  {
    "url": "assets/js/246.js",
    "revision": "8eec26109964bc9e1d70c2c6654b03eb"
  },
  {
    "url": "assets/js/247.js",
    "revision": "68583bb577fb12b808dc0239bce6e567"
  },
  {
    "url": "assets/js/248.js",
    "revision": "edf9ef340fa0c332430877cd7a9d5a15"
  },
  {
    "url": "assets/js/249.js",
    "revision": "3b9ebcbffb29dbbde351c64d2415f025"
  },
  {
    "url": "assets/js/25.js",
    "revision": "3a6c6893dc85d4cdacc759ca7acf6459"
  },
  {
    "url": "assets/js/250.js",
    "revision": "a28925c95a4599fbe953c54f0fab0f51"
  },
  {
    "url": "assets/js/251.js",
    "revision": "83538a8a538f3e78e309c9679a64d741"
  },
  {
    "url": "assets/js/252.js",
    "revision": "bd900cddb889516ba441c674644be7e4"
  },
  {
    "url": "assets/js/253.js",
    "revision": "89caa40203f20b8c06b2362c26565015"
  },
  {
    "url": "assets/js/254.js",
    "revision": "b26aacdc45e2acc88383fda90f13db22"
  },
  {
    "url": "assets/js/255.js",
    "revision": "0356050ebae54f901764216571afa111"
  },
  {
    "url": "assets/js/256.js",
    "revision": "e1dca0a23264eb08fda6c5ad313c7d02"
  },
  {
    "url": "assets/js/257.js",
    "revision": "f1b8198bec0ca0caf8e75af026337043"
  },
  {
    "url": "assets/js/258.js",
    "revision": "d3be4a142d47a16bae52a8cdf3654d8d"
  },
  {
    "url": "assets/js/259.js",
    "revision": "dba8d79d3c8271af6716a914b01bfae7"
  },
  {
    "url": "assets/js/26.js",
    "revision": "02eea6e8f8d56dcd462370462ca1d26f"
  },
  {
    "url": "assets/js/260.js",
    "revision": "deecebf171fce1a8d3bd0887c0bcea83"
  },
  {
    "url": "assets/js/261.js",
    "revision": "858b8144d6598489f7167fa0d3e2996f"
  },
  {
    "url": "assets/js/262.js",
    "revision": "27bba3f76f21905eff2a33b01ec5874b"
  },
  {
    "url": "assets/js/263.js",
    "revision": "ce384db802a1d201ee2ce49af96d95db"
  },
  {
    "url": "assets/js/264.js",
    "revision": "8c2441882dcdcc442837bac54dd87f9c"
  },
  {
    "url": "assets/js/265.js",
    "revision": "525d40efdacfb91c04670f2d657345e9"
  },
  {
    "url": "assets/js/266.js",
    "revision": "25cc6557ab929b360588b628dd35e74a"
  },
  {
    "url": "assets/js/267.js",
    "revision": "31a0aa17bb35233a3eebfbb622a92ce2"
  },
  {
    "url": "assets/js/268.js",
    "revision": "d238281d905571a53abca6f0c4b04184"
  },
  {
    "url": "assets/js/269.js",
    "revision": "6a09e01c03202def9b993b91245fdd83"
  },
  {
    "url": "assets/js/27.js",
    "revision": "46e95407751e11908d9d6c6cb5e783e7"
  },
  {
    "url": "assets/js/270.js",
    "revision": "886db850707e5e9cc44f7ba498a452f5"
  },
  {
    "url": "assets/js/271.js",
    "revision": "627431d61ef286c4a1b7e01c48bdfe1c"
  },
  {
    "url": "assets/js/272.js",
    "revision": "0f0cbe910e668a7d8417dc1df2f12bad"
  },
  {
    "url": "assets/js/273.js",
    "revision": "7ce01f59c42f1769aced4f605a43b100"
  },
  {
    "url": "assets/js/274.js",
    "revision": "a7ab1bc3695e648f0b18a43f481eb001"
  },
  {
    "url": "assets/js/275.js",
    "revision": "0f1382b3c489901c27d9519b0b7fda13"
  },
  {
    "url": "assets/js/276.js",
    "revision": "342e0119f769117721dd194a137a8877"
  },
  {
    "url": "assets/js/277.js",
    "revision": "45ef56c43c771c89aa40a29c4b5cc2a2"
  },
  {
    "url": "assets/js/278.js",
    "revision": "5b8dac017dc702068e2dd43a5fbd1a8d"
  },
  {
    "url": "assets/js/279.js",
    "revision": "82587eb734f2b814dbc2866519eeb746"
  },
  {
    "url": "assets/js/28.js",
    "revision": "d9e309a30dfa9adc1ef6dc27c7b29c73"
  },
  {
    "url": "assets/js/280.js",
    "revision": "4a74bedbf44f23db2b8f827bfd3a2bde"
  },
  {
    "url": "assets/js/281.js",
    "revision": "d729a0bee77c1a8e974a312b0ac67462"
  },
  {
    "url": "assets/js/282.js",
    "revision": "c1cde4a26483c6cc64828dd34efc757e"
  },
  {
    "url": "assets/js/283.js",
    "revision": "247f9278775eb9f379f1e1cdb8724b67"
  },
  {
    "url": "assets/js/284.js",
    "revision": "50ca9f9bd476fdb7ae5aaf7db14ebf6b"
  },
  {
    "url": "assets/js/285.js",
    "revision": "ef3a32ea89e9ac12ab349ac1bf06684c"
  },
  {
    "url": "assets/js/286.js",
    "revision": "5cb03883591288887309c43325d678e1"
  },
  {
    "url": "assets/js/287.js",
    "revision": "aa659d72f05218577f3d5719297cdb63"
  },
  {
    "url": "assets/js/288.js",
    "revision": "f9988cda0268699bd95f9f0d8fc353f7"
  },
  {
    "url": "assets/js/289.js",
    "revision": "5f2b15b146f8dda08aa8ac7cdc76fead"
  },
  {
    "url": "assets/js/29.js",
    "revision": "ff4edc97fceb6b3521d430502c6efed2"
  },
  {
    "url": "assets/js/290.js",
    "revision": "f895b33f288cc6045161ecc9409ecba5"
  },
  {
    "url": "assets/js/291.js",
    "revision": "2dc0325482469adb2b457b706d6eaa29"
  },
  {
    "url": "assets/js/292.js",
    "revision": "38b9e83c45b868c406f6464c2dddba06"
  },
  {
    "url": "assets/js/293.js",
    "revision": "3187a6c723aa65a3e85c0781703943a0"
  },
  {
    "url": "assets/js/294.js",
    "revision": "eae4c5317c960db38af39f9f0de821d3"
  },
  {
    "url": "assets/js/295.js",
    "revision": "cee2d34c03d9f6235364cc4c753ad706"
  },
  {
    "url": "assets/js/296.js",
    "revision": "1cae8f0aa4a8909461e20c3b26690d9a"
  },
  {
    "url": "assets/js/297.js",
    "revision": "381e008fd656c21bb36bf997e0ef1965"
  },
  {
    "url": "assets/js/298.js",
    "revision": "022da0708eb0b44a5273b658aa1d6b85"
  },
  {
    "url": "assets/js/299.js",
    "revision": "cce074ff55ebeaff3fa5b4e4bfe311db"
  },
  {
    "url": "assets/js/30.js",
    "revision": "93e6586f877ec68b792081241b3597cc"
  },
  {
    "url": "assets/js/300.js",
    "revision": "8757c8a6d6a47e1eacb1186465dfeea4"
  },
  {
    "url": "assets/js/301.js",
    "revision": "297cdaa88d8b27f1c0c170d3aa62a47f"
  },
  {
    "url": "assets/js/302.js",
    "revision": "4acec176a84bb3c518843799e97642ba"
  },
  {
    "url": "assets/js/303.js",
    "revision": "e98eb604d0598a8df480e21694157882"
  },
  {
    "url": "assets/js/304.js",
    "revision": "8e9d833a0a02fbda4595ea92bcbfc30a"
  },
  {
    "url": "assets/js/305.js",
    "revision": "9fbbb4226d3a3c9c345173e83e1e9c3f"
  },
  {
    "url": "assets/js/306.js",
    "revision": "afbebce58d9d6e46bebfb6d5ea10d8eb"
  },
  {
    "url": "assets/js/307.js",
    "revision": "8f277fb262637605b6fdf45c50f6d52c"
  },
  {
    "url": "assets/js/308.js",
    "revision": "790b371ee9f2df224adc99a2fc64b2ab"
  },
  {
    "url": "assets/js/309.js",
    "revision": "d804fa879f990804810678052eb23592"
  },
  {
    "url": "assets/js/31.js",
    "revision": "38874b9122ab649f34d0226aefd30ef9"
  },
  {
    "url": "assets/js/310.js",
    "revision": "c15c482dc4dd95519af88e6129ed87ae"
  },
  {
    "url": "assets/js/311.js",
    "revision": "c135383481d717f6fbd5280361d06b80"
  },
  {
    "url": "assets/js/312.js",
    "revision": "ee98595f7f2675566b7d859fdc1bfc05"
  },
  {
    "url": "assets/js/313.js",
    "revision": "2d7dad4d9f93c45eefe3d24844f2d4b2"
  },
  {
    "url": "assets/js/314.js",
    "revision": "4daecab5c0093d15d9b8d348b2f0c91f"
  },
  {
    "url": "assets/js/315.js",
    "revision": "50634dd2616db062991cf3386200f385"
  },
  {
    "url": "assets/js/316.js",
    "revision": "0490848308e633b6a71064b6438de8ed"
  },
  {
    "url": "assets/js/317.js",
    "revision": "869d905b9499dca2d69b3abae19b80f8"
  },
  {
    "url": "assets/js/318.js",
    "revision": "b17e6cf99fe2aab8281754de0097aa9d"
  },
  {
    "url": "assets/js/319.js",
    "revision": "ba9053ac011117309bbd0f1e61410581"
  },
  {
    "url": "assets/js/32.js",
    "revision": "2456d779f33ed0f1762308a33e661f7b"
  },
  {
    "url": "assets/js/320.js",
    "revision": "2d4239fe4b67c36da47d497ecbc3b2d9"
  },
  {
    "url": "assets/js/321.js",
    "revision": "ba928cfdd775db6391319daeec14231e"
  },
  {
    "url": "assets/js/322.js",
    "revision": "7135d07f4bc513d1cad1a9909ac7cf40"
  },
  {
    "url": "assets/js/323.js",
    "revision": "878e51d994a3a215e91670b675d6d044"
  },
  {
    "url": "assets/js/324.js",
    "revision": "b64ac1f06b095b07aac92787aa7d8aab"
  },
  {
    "url": "assets/js/325.js",
    "revision": "20531637ece494aea4cc1e8642381557"
  },
  {
    "url": "assets/js/326.js",
    "revision": "98a8a4a325da1ecc7e5b575e5fe051b2"
  },
  {
    "url": "assets/js/327.js",
    "revision": "bda09c17c8ccf10135878f1cfab4bc34"
  },
  {
    "url": "assets/js/328.js",
    "revision": "741f954f9f63361139083dae503e04ef"
  },
  {
    "url": "assets/js/329.js",
    "revision": "7c54db758fca58584f38956ea2b87e91"
  },
  {
    "url": "assets/js/33.js",
    "revision": "124b21bb9453444f33eb1e1a07a333a8"
  },
  {
    "url": "assets/js/330.js",
    "revision": "c98eea4ec8967ce38489298693d223ca"
  },
  {
    "url": "assets/js/331.js",
    "revision": "5ba6c3bed303c2dab3c6b05fae1af10c"
  },
  {
    "url": "assets/js/332.js",
    "revision": "7dffda8f50ffe99a3df3f39c8c53ef72"
  },
  {
    "url": "assets/js/333.js",
    "revision": "299d58cf381c7d9edcffb0e6b7f902b1"
  },
  {
    "url": "assets/js/334.js",
    "revision": "ee32279ee6f697b5e742899a6876ca47"
  },
  {
    "url": "assets/js/335.js",
    "revision": "ffb5842f9b7f21fe69a8e57084d82282"
  },
  {
    "url": "assets/js/336.js",
    "revision": "8661798b3c447d0ca9326ba42099cdeb"
  },
  {
    "url": "assets/js/337.js",
    "revision": "1cdb85d9f26a129c31f3a4d663d8f1c5"
  },
  {
    "url": "assets/js/338.js",
    "revision": "1fbeb8bbe4266b5a48a4129dc2c74ca5"
  },
  {
    "url": "assets/js/339.js",
    "revision": "38daba853601eef67be980597fd997e5"
  },
  {
    "url": "assets/js/34.js",
    "revision": "a110260b43128ab8b74875811cffe153"
  },
  {
    "url": "assets/js/340.js",
    "revision": "39642ea04945412ea0b4fc6de9eaafc8"
  },
  {
    "url": "assets/js/341.js",
    "revision": "fc71e679d9248c4acabb4843b4ef8cdc"
  },
  {
    "url": "assets/js/342.js",
    "revision": "aecef7b1e7e343eb4279e3db7887c4b7"
  },
  {
    "url": "assets/js/343.js",
    "revision": "8e052303437543a3e1c7a03692236146"
  },
  {
    "url": "assets/js/344.js",
    "revision": "913103b7091c7a0da4f2d1646f75034d"
  },
  {
    "url": "assets/js/345.js",
    "revision": "37a933255df87f6b10246c14e6242497"
  },
  {
    "url": "assets/js/346.js",
    "revision": "9d851fd962dd7d2d63da5d6406369524"
  },
  {
    "url": "assets/js/347.js",
    "revision": "f25fb9b93e5bd28d4c10286a3e2d69a6"
  },
  {
    "url": "assets/js/348.js",
    "revision": "52c68b5d23e34a4985d2dffb56538c6b"
  },
  {
    "url": "assets/js/349.js",
    "revision": "a5b44b434cebe13a861d3c9b6d1b9f47"
  },
  {
    "url": "assets/js/35.js",
    "revision": "bd49866e124e4a9370055fb473dfd1e9"
  },
  {
    "url": "assets/js/350.js",
    "revision": "ca889630f97e57df4910d06625c26eb1"
  },
  {
    "url": "assets/js/351.js",
    "revision": "152ec1c9371d50b336c9fbc992f32012"
  },
  {
    "url": "assets/js/352.js",
    "revision": "7750926d9eb0d04a85236502f91cf858"
  },
  {
    "url": "assets/js/353.js",
    "revision": "ccf56fe91c078430ec8cf158f45b056c"
  },
  {
    "url": "assets/js/354.js",
    "revision": "babea0d726d8650b4e75224b24d888e0"
  },
  {
    "url": "assets/js/355.js",
    "revision": "05c1a37ec8a0632d8385e2b20382a8cd"
  },
  {
    "url": "assets/js/356.js",
    "revision": "739a85d2c009933b638dc1d4765d9704"
  },
  {
    "url": "assets/js/357.js",
    "revision": "3d9778050c552be4362b28fe6a8da42c"
  },
  {
    "url": "assets/js/358.js",
    "revision": "320729e41c1aef756e5f565fd4985c55"
  },
  {
    "url": "assets/js/359.js",
    "revision": "1df60358611e374ec204d9d968618713"
  },
  {
    "url": "assets/js/36.js",
    "revision": "b34464758b9904e29e509404d6053be5"
  },
  {
    "url": "assets/js/360.js",
    "revision": "eb6c633bbd521242f2f1a09f0992c0a7"
  },
  {
    "url": "assets/js/361.js",
    "revision": "cf6cec8793c86ea9e3005fa0454e1b8e"
  },
  {
    "url": "assets/js/362.js",
    "revision": "e5d14e09b5910a3e3435a5d2f02984b0"
  },
  {
    "url": "assets/js/363.js",
    "revision": "91f39f31a761c0e299c2243409d4a20a"
  },
  {
    "url": "assets/js/364.js",
    "revision": "1a00ebdcc434b9e0ff50245cb5abec3b"
  },
  {
    "url": "assets/js/365.js",
    "revision": "7725ec29de2cc0b6987d1e539c76b8c8"
  },
  {
    "url": "assets/js/366.js",
    "revision": "8374674d78fb072391eaa6a67169cf49"
  },
  {
    "url": "assets/js/367.js",
    "revision": "f66d962ee0131fa0a6c5734dfb563af5"
  },
  {
    "url": "assets/js/368.js",
    "revision": "f13e4e6e5e87a08920b7257136415699"
  },
  {
    "url": "assets/js/369.js",
    "revision": "ffc62b7dab8a1f3a7936147bf7e777dc"
  },
  {
    "url": "assets/js/37.js",
    "revision": "3855bee637dd937ff2d9b84adf0713fc"
  },
  {
    "url": "assets/js/370.js",
    "revision": "fc7c79748bfac7e26234b3b18002f003"
  },
  {
    "url": "assets/js/371.js",
    "revision": "9d1ea4ba3780bd52551ed6f72d11dbbb"
  },
  {
    "url": "assets/js/372.js",
    "revision": "0f9e170caf75e03df7c3ce4329dd4c66"
  },
  {
    "url": "assets/js/373.js",
    "revision": "858358be291f17a9dcc8636fb3af7d63"
  },
  {
    "url": "assets/js/374.js",
    "revision": "8aa60404358e74511a27b3fd57fb32e7"
  },
  {
    "url": "assets/js/375.js",
    "revision": "c287ffdc47fb53a1ee25ca840ee78331"
  },
  {
    "url": "assets/js/376.js",
    "revision": "c41903e1a60fd75c52603a33f94d843f"
  },
  {
    "url": "assets/js/377.js",
    "revision": "ee13702b581a1a4bc5785651c79af491"
  },
  {
    "url": "assets/js/378.js",
    "revision": "b24888e5d64697fe97b81112cb37fcf7"
  },
  {
    "url": "assets/js/379.js",
    "revision": "71a3a38304300a5fd1825cffee5b1a4a"
  },
  {
    "url": "assets/js/38.js",
    "revision": "0b6d08763c29d629adec4d175ab7c160"
  },
  {
    "url": "assets/js/380.js",
    "revision": "227d5c1c89ab709210470be6d43705df"
  },
  {
    "url": "assets/js/381.js",
    "revision": "e0ffad7c5ffeacac33b154168ba14548"
  },
  {
    "url": "assets/js/382.js",
    "revision": "ebf3e95ff51679042ad4e5db3cef4521"
  },
  {
    "url": "assets/js/383.js",
    "revision": "bf86fb597ae3b27fec661aea2d25a747"
  },
  {
    "url": "assets/js/384.js",
    "revision": "749088d55861043219bb08222f9b7989"
  },
  {
    "url": "assets/js/385.js",
    "revision": "c9974b65569d0a7795a774ac4df4f07b"
  },
  {
    "url": "assets/js/386.js",
    "revision": "2cbc7b81d9a56f37968216cd481a6e47"
  },
  {
    "url": "assets/js/387.js",
    "revision": "8f7303a107cf7674c32745897e2750ab"
  },
  {
    "url": "assets/js/388.js",
    "revision": "df783fdf4540375b054bce17415ee69d"
  },
  {
    "url": "assets/js/389.js",
    "revision": "73440cc80913bdf1ebb35c4288df4adf"
  },
  {
    "url": "assets/js/39.js",
    "revision": "0c6f0961925de3dcba7b395c7152344b"
  },
  {
    "url": "assets/js/390.js",
    "revision": "48baf3d2e1767f6aacffae186b4f8657"
  },
  {
    "url": "assets/js/391.js",
    "revision": "ebc52a76133e03b086c22db002889f30"
  },
  {
    "url": "assets/js/392.js",
    "revision": "2cc4057e1ac898fe370b9f1fd05dd4ce"
  },
  {
    "url": "assets/js/393.js",
    "revision": "ee84ff02a6c0b75e0e4a50bcae483a9a"
  },
  {
    "url": "assets/js/394.js",
    "revision": "ae4b6b0e12236f2728006de0f95f9cbe"
  },
  {
    "url": "assets/js/395.js",
    "revision": "d854fa76ef9c6afa7e450d60d11a91fc"
  },
  {
    "url": "assets/js/396.js",
    "revision": "e261bb47a51ba06bf4597cfede728156"
  },
  {
    "url": "assets/js/397.js",
    "revision": "b598863cccade5aff8b8df1053e9731f"
  },
  {
    "url": "assets/js/398.js",
    "revision": "4cd0572f627c9f7a17b8915e19e57b46"
  },
  {
    "url": "assets/js/399.js",
    "revision": "6d8ad0d9840472e52e6b81bc5a41095e"
  },
  {
    "url": "assets/js/4.js",
    "revision": "d73248e934ac089f7e86ccef2645e336"
  },
  {
    "url": "assets/js/40.js",
    "revision": "95db674ee52ff9a05fbe9e9bda5114d4"
  },
  {
    "url": "assets/js/400.js",
    "revision": "e1b6ac200f2a32b8b0c3b5ecff509559"
  },
  {
    "url": "assets/js/401.js",
    "revision": "91b2f78f74d88a986460a135e8b5becf"
  },
  {
    "url": "assets/js/402.js",
    "revision": "8f1f630431ac2e3d5d7ba67b465d7724"
  },
  {
    "url": "assets/js/403.js",
    "revision": "6477784015557657ddbf891e369528ac"
  },
  {
    "url": "assets/js/404.js",
    "revision": "5aa055d28283c6d7f83321292898568a"
  },
  {
    "url": "assets/js/405.js",
    "revision": "bf86f49d1ba951940450073c76b5c052"
  },
  {
    "url": "assets/js/406.js",
    "revision": "27529e5dee330f36b19a54d7cc3a6351"
  },
  {
    "url": "assets/js/407.js",
    "revision": "81f353a92915f39be822daa14acd0060"
  },
  {
    "url": "assets/js/408.js",
    "revision": "e1c25e51c067a61e7f4ad2ac7ac005fc"
  },
  {
    "url": "assets/js/409.js",
    "revision": "4adc49c54c6c96331dedf80e929c1db4"
  },
  {
    "url": "assets/js/41.js",
    "revision": "39336255952484cbb3ed0c16fbfda88d"
  },
  {
    "url": "assets/js/410.js",
    "revision": "33c628cabe8b60a159c042c76fcbf650"
  },
  {
    "url": "assets/js/411.js",
    "revision": "a4fa0b92ad5aba65363d841434bc4123"
  },
  {
    "url": "assets/js/412.js",
    "revision": "7f137a5914185c3e8aad62bd366d8061"
  },
  {
    "url": "assets/js/413.js",
    "revision": "8f720059f6ec8b11325faa65a588489e"
  },
  {
    "url": "assets/js/414.js",
    "revision": "53a658f3f69682e1364d74d80eaf3321"
  },
  {
    "url": "assets/js/415.js",
    "revision": "4dabf080a138d492e831e48812b75a5c"
  },
  {
    "url": "assets/js/416.js",
    "revision": "fd4f3031a7cae962b8c86f2a2b129da8"
  },
  {
    "url": "assets/js/417.js",
    "revision": "dbd8752d2139f2c32a263835634c55e6"
  },
  {
    "url": "assets/js/418.js",
    "revision": "0d7809f4ba431537d668ad3e901bb9e0"
  },
  {
    "url": "assets/js/419.js",
    "revision": "f4e86c1452857731ab041e0934cb146b"
  },
  {
    "url": "assets/js/42.js",
    "revision": "bd6dbe78595e4ed2f4f7a2420d424aab"
  },
  {
    "url": "assets/js/420.js",
    "revision": "fb2d97604afedbaae34bd1bc768334ce"
  },
  {
    "url": "assets/js/421.js",
    "revision": "997b0cb6438cf7d889321546394430bb"
  },
  {
    "url": "assets/js/422.js",
    "revision": "592e28dcbb94b17f8b5259311b93c0d7"
  },
  {
    "url": "assets/js/423.js",
    "revision": "304607c4ba4d7a50768a9755199b7d34"
  },
  {
    "url": "assets/js/424.js",
    "revision": "005931cc25b2b24c60d7c11acda2c039"
  },
  {
    "url": "assets/js/425.js",
    "revision": "09e99da91dd45171f13fef5c9ab94a90"
  },
  {
    "url": "assets/js/426.js",
    "revision": "a02065f6c4475cbe65c2809d1f176a54"
  },
  {
    "url": "assets/js/427.js",
    "revision": "8aebeb9fae524171573ddfa37b6e274f"
  },
  {
    "url": "assets/js/428.js",
    "revision": "e876f76de1d6647abedfeb6f221a1d9b"
  },
  {
    "url": "assets/js/429.js",
    "revision": "64be6e7a07eb376e278a8d0727141563"
  },
  {
    "url": "assets/js/43.js",
    "revision": "68aab358ca9aa1d6e17d54df888aada3"
  },
  {
    "url": "assets/js/430.js",
    "revision": "8fccb091b63fa0820c82a0ecba0b0d66"
  },
  {
    "url": "assets/js/431.js",
    "revision": "f23c0a1ffad3d93d4d1cac2f18e4864d"
  },
  {
    "url": "assets/js/432.js",
    "revision": "60b1d4a2fcf27c81fc7cc347e37f8a15"
  },
  {
    "url": "assets/js/433.js",
    "revision": "c7faff4b33637b31a3652f4a512fced4"
  },
  {
    "url": "assets/js/434.js",
    "revision": "b7698ead89265725ad0bfa6e17ea3c63"
  },
  {
    "url": "assets/js/435.js",
    "revision": "3fdca6556b7fb6734d539c7ca5189bc9"
  },
  {
    "url": "assets/js/436.js",
    "revision": "1a5c592875b796a2a07334e8c0202fe5"
  },
  {
    "url": "assets/js/437.js",
    "revision": "50f225dc36cf32dacbee1f403922a373"
  },
  {
    "url": "assets/js/438.js",
    "revision": "7d6f909e8e06ce6c8898d68a7c34de20"
  },
  {
    "url": "assets/js/439.js",
    "revision": "bb42ff8c85adadbbec5c908feb40bc49"
  },
  {
    "url": "assets/js/44.js",
    "revision": "f1725ae3562d4a89e36f0ac23943dda6"
  },
  {
    "url": "assets/js/440.js",
    "revision": "3cbe3c4bfe386cdfd8b3de4de450645d"
  },
  {
    "url": "assets/js/441.js",
    "revision": "d5202cbfe43b04517791153f6e9ba5c7"
  },
  {
    "url": "assets/js/442.js",
    "revision": "325103694b972a01abdacec2129f06d2"
  },
  {
    "url": "assets/js/443.js",
    "revision": "73ce5d350074191761c58057e265e729"
  },
  {
    "url": "assets/js/444.js",
    "revision": "c4c32099202a5b5cf85d60a472f9dab5"
  },
  {
    "url": "assets/js/445.js",
    "revision": "badef630a3b13653416b9a26fb231f41"
  },
  {
    "url": "assets/js/446.js",
    "revision": "1e7492872311142f453d149b2f06039c"
  },
  {
    "url": "assets/js/447.js",
    "revision": "6f64997306120f5006900c3860db0ecf"
  },
  {
    "url": "assets/js/448.js",
    "revision": "102e0ef382c5a1a3ca911feb07a33673"
  },
  {
    "url": "assets/js/449.js",
    "revision": "b177b8c4d4f02e5bafeeb293aed4a8c1"
  },
  {
    "url": "assets/js/45.js",
    "revision": "03422b0163bfc12413c3ed57d131b095"
  },
  {
    "url": "assets/js/450.js",
    "revision": "21d7706a9f83704564b7c0eb46d2c1b8"
  },
  {
    "url": "assets/js/451.js",
    "revision": "45701752a612dd2c38b1cc6a21f0ce63"
  },
  {
    "url": "assets/js/452.js",
    "revision": "8672a289378a2e0b32d7fb47f6d725a5"
  },
  {
    "url": "assets/js/453.js",
    "revision": "368472f0560fe3b750d349cd9ac21fb4"
  },
  {
    "url": "assets/js/454.js",
    "revision": "b7bf177dcdf3461ac4c80f6efc74de1a"
  },
  {
    "url": "assets/js/455.js",
    "revision": "843df92aa9c4ae5261c293fb136e6cd8"
  },
  {
    "url": "assets/js/456.js",
    "revision": "dca6ab2106a1275839a6c0a939a6234e"
  },
  {
    "url": "assets/js/457.js",
    "revision": "e5e42455846bcb2d140b9384e252ed6b"
  },
  {
    "url": "assets/js/458.js",
    "revision": "cb65e9c8399d3d59d79da10d91c4b981"
  },
  {
    "url": "assets/js/459.js",
    "revision": "89f43390a48fc0bded920baf0795418d"
  },
  {
    "url": "assets/js/46.js",
    "revision": "6f7d25d672ceca83761f283723d24d6b"
  },
  {
    "url": "assets/js/460.js",
    "revision": "ad77da44b6d4bbd152d57778e1b8c559"
  },
  {
    "url": "assets/js/461.js",
    "revision": "50a73759e475c1fd918308627d63c9fa"
  },
  {
    "url": "assets/js/462.js",
    "revision": "b66f016ad06022f6a929f69ad201a721"
  },
  {
    "url": "assets/js/463.js",
    "revision": "5148c9cef54997a064dc30d11ed142aa"
  },
  {
    "url": "assets/js/464.js",
    "revision": "b75f9eef36e71cfd520ca48d2573f946"
  },
  {
    "url": "assets/js/465.js",
    "revision": "596bb0e71a017c61de7d02eea6c1852d"
  },
  {
    "url": "assets/js/466.js",
    "revision": "272b9a0f53219787a6694478ddeb427c"
  },
  {
    "url": "assets/js/467.js",
    "revision": "9a2222c95c271bc60757bcd87b1d80a3"
  },
  {
    "url": "assets/js/468.js",
    "revision": "e960d7dcc0f6cf5035e22a1c2cfd2556"
  },
  {
    "url": "assets/js/469.js",
    "revision": "3ed5f10244fc9c0ba9ae2753a7907b62"
  },
  {
    "url": "assets/js/47.js",
    "revision": "21e97c445fd20eb357d8783bcdf6dd41"
  },
  {
    "url": "assets/js/470.js",
    "revision": "0aa34ed81e66c8cd622849a3f77e60de"
  },
  {
    "url": "assets/js/471.js",
    "revision": "c38275aefe3b5cc65b1594fe9965d878"
  },
  {
    "url": "assets/js/472.js",
    "revision": "557c16a8ed15afab68f95bdf163fa0e3"
  },
  {
    "url": "assets/js/473.js",
    "revision": "158aa46c8ea52622e8b98ba49dfba1ab"
  },
  {
    "url": "assets/js/474.js",
    "revision": "684567ee41a3f9e49e4d8bfee533ab34"
  },
  {
    "url": "assets/js/475.js",
    "revision": "d66fd61af78ac5ab63b012fad60ddc2b"
  },
  {
    "url": "assets/js/476.js",
    "revision": "c4b7b09c007f114ea9498acccdf491d7"
  },
  {
    "url": "assets/js/477.js",
    "revision": "a907eb49bc5d65e3037270dca3e449c1"
  },
  {
    "url": "assets/js/478.js",
    "revision": "54080ba877f546e8252037bdd0f812e9"
  },
  {
    "url": "assets/js/479.js",
    "revision": "bf4b10ce30963f9617faa6fcf05f6ed2"
  },
  {
    "url": "assets/js/48.js",
    "revision": "7086be35cfdcab54f6da8aaf7fc38d7c"
  },
  {
    "url": "assets/js/480.js",
    "revision": "f1b462dc1f613241b28af6d28e5b69c1"
  },
  {
    "url": "assets/js/481.js",
    "revision": "83a4402f6e9c7e4eb42cbeff6c7f9ddb"
  },
  {
    "url": "assets/js/482.js",
    "revision": "1ab3a5e2471c2ba2ae1db13844ec19d5"
  },
  {
    "url": "assets/js/483.js",
    "revision": "62f53d2f67f8bc688171765f82a50295"
  },
  {
    "url": "assets/js/484.js",
    "revision": "3313de63a12c9d352c74415c48a8d0b2"
  },
  {
    "url": "assets/js/485.js",
    "revision": "cf404b126179f3640732a413eb50362d"
  },
  {
    "url": "assets/js/486.js",
    "revision": "b661542638bbd1f5cb83375cdb2dd2a2"
  },
  {
    "url": "assets/js/487.js",
    "revision": "a56a34b0bb0974b25019a2f9eefaac26"
  },
  {
    "url": "assets/js/488.js",
    "revision": "05ecb1e48e60015fccd873c2f00ad526"
  },
  {
    "url": "assets/js/489.js",
    "revision": "06749ed4789c4d0e3b751643eb27c2f1"
  },
  {
    "url": "assets/js/49.js",
    "revision": "a437b8d56946e24c12d7dd7036aba239"
  },
  {
    "url": "assets/js/490.js",
    "revision": "54ac1463a1628a7df4977afab08abfd0"
  },
  {
    "url": "assets/js/491.js",
    "revision": "810047e326463d6101bf2ebc3f832f89"
  },
  {
    "url": "assets/js/492.js",
    "revision": "eff129cd9d8c90c7b21136c3f05390a0"
  },
  {
    "url": "assets/js/493.js",
    "revision": "5c1d3df89e9000ec1caa7db9214b2f7a"
  },
  {
    "url": "assets/js/494.js",
    "revision": "7c5b0588973248bda02c72a1a0abaf6b"
  },
  {
    "url": "assets/js/495.js",
    "revision": "dad0da395018183b399d947b51a06a28"
  },
  {
    "url": "assets/js/496.js",
    "revision": "4836dfc46de51ee430333d5c707b4985"
  },
  {
    "url": "assets/js/497.js",
    "revision": "4aa922cb2ea1ee5cee75245bfd3f5fa3"
  },
  {
    "url": "assets/js/498.js",
    "revision": "abc7c1e61122b400b53c7239b889bcc9"
  },
  {
    "url": "assets/js/499.js",
    "revision": "81ad722e72bfa01b4f936f1f321fb830"
  },
  {
    "url": "assets/js/5.js",
    "revision": "d0756cd8f4deb1c4daae1d546455ddf8"
  },
  {
    "url": "assets/js/50.js",
    "revision": "fcc23496a384eeda018123fe747a55d8"
  },
  {
    "url": "assets/js/500.js",
    "revision": "b5ca8be69ffd8fca80f4b2509ecda09f"
  },
  {
    "url": "assets/js/501.js",
    "revision": "e61f8dca64d072e69274f62780f9a244"
  },
  {
    "url": "assets/js/502.js",
    "revision": "65d74e3a5ec5cc273016277e9c756f23"
  },
  {
    "url": "assets/js/503.js",
    "revision": "5d362fe85ab779e1578f5a1a30d89a49"
  },
  {
    "url": "assets/js/504.js",
    "revision": "4f97afea4c839caabae06c3a74572d6f"
  },
  {
    "url": "assets/js/505.js",
    "revision": "05c50ca87d2aa53a0aac1cb802ddc694"
  },
  {
    "url": "assets/js/506.js",
    "revision": "973722626e0fadd84243ebdfbe0da3dc"
  },
  {
    "url": "assets/js/507.js",
    "revision": "47ffd9e0007edc8eac6e5f66730a2b63"
  },
  {
    "url": "assets/js/508.js",
    "revision": "8be354714044fff1fbf3b55435a40704"
  },
  {
    "url": "assets/js/509.js",
    "revision": "b67135d8bc11df548f04db21332a9726"
  },
  {
    "url": "assets/js/51.js",
    "revision": "513324cb8d546ef6c81bd4143a7af7ee"
  },
  {
    "url": "assets/js/510.js",
    "revision": "5d4b13980de30a1f2294273173f1697c"
  },
  {
    "url": "assets/js/511.js",
    "revision": "4336891302cb4f0d97533ca1a9f44a76"
  },
  {
    "url": "assets/js/512.js",
    "revision": "ff26021e4a88959006030dcf51d9e580"
  },
  {
    "url": "assets/js/513.js",
    "revision": "5dab4eb9ba25730360627eee86c094b4"
  },
  {
    "url": "assets/js/514.js",
    "revision": "1bfb06692175190c95e7e8f080db2f8d"
  },
  {
    "url": "assets/js/515.js",
    "revision": "0fb4b2a97550e0d23817eb2838821b85"
  },
  {
    "url": "assets/js/516.js",
    "revision": "536d09c089a8efa25c278b47bf36d8de"
  },
  {
    "url": "assets/js/517.js",
    "revision": "72bbd7ae76f952969f6e55381cca5564"
  },
  {
    "url": "assets/js/518.js",
    "revision": "b0f3b7c421cda544f810b03399c6565a"
  },
  {
    "url": "assets/js/519.js",
    "revision": "341b04c04549a78e8252aae27c367166"
  },
  {
    "url": "assets/js/52.js",
    "revision": "7f47d2532e67efb511732d9564d2e88f"
  },
  {
    "url": "assets/js/520.js",
    "revision": "893f17cb55457fb5ab0fd9ba5be6717a"
  },
  {
    "url": "assets/js/521.js",
    "revision": "69ecee1dbc3eaa8bbed315f88059df42"
  },
  {
    "url": "assets/js/522.js",
    "revision": "3872e67b87400c69e4a272a3b98c4230"
  },
  {
    "url": "assets/js/523.js",
    "revision": "14c7d0c099387b8266d085cec10a2ccd"
  },
  {
    "url": "assets/js/524.js",
    "revision": "d4537d4d2601dd269bdb43e6b0e2c6f0"
  },
  {
    "url": "assets/js/525.js",
    "revision": "ea6cba7ce84daf30fdfb3003f0823c90"
  },
  {
    "url": "assets/js/526.js",
    "revision": "c5b504519d558b78437d82ab7f43a0a7"
  },
  {
    "url": "assets/js/527.js",
    "revision": "4d4021572915a5a35603f1385fd28718"
  },
  {
    "url": "assets/js/528.js",
    "revision": "c5cefbdaf245dbf7877dff6baf72a48f"
  },
  {
    "url": "assets/js/529.js",
    "revision": "7975f795db671efe0b9fd9de6b3b0559"
  },
  {
    "url": "assets/js/53.js",
    "revision": "476790a3a42c87a2939cfdbea3c26db5"
  },
  {
    "url": "assets/js/530.js",
    "revision": "bf3c4bef0eacf2612917127a631e8efb"
  },
  {
    "url": "assets/js/531.js",
    "revision": "90095c0a5a32fe9ae10f36ddb67fa833"
  },
  {
    "url": "assets/js/532.js",
    "revision": "756f0b4416fbc44ceac1d909e572b164"
  },
  {
    "url": "assets/js/533.js",
    "revision": "c910bdb67ea61d423da1b6b064d90e07"
  },
  {
    "url": "assets/js/534.js",
    "revision": "6346a9ff396845cd984cde683bbf7017"
  },
  {
    "url": "assets/js/535.js",
    "revision": "f985dacac1d495b72b0027c441e99e95"
  },
  {
    "url": "assets/js/536.js",
    "revision": "b02cd1439c6138af9f7553e861a14008"
  },
  {
    "url": "assets/js/537.js",
    "revision": "5faea96d1fd4af8ff1c09ea3830150f5"
  },
  {
    "url": "assets/js/538.js",
    "revision": "18d87f19f60a5dcc9d826e7e74d51920"
  },
  {
    "url": "assets/js/539.js",
    "revision": "d43aa3b5e8549d4c55f74609dbcc0743"
  },
  {
    "url": "assets/js/54.js",
    "revision": "b5e457fffe9b01ff2dc4e447e6b10b83"
  },
  {
    "url": "assets/js/540.js",
    "revision": "68373520ecf090a5a05296ce748de35b"
  },
  {
    "url": "assets/js/541.js",
    "revision": "0e2233b9d29d0192f2620b31a0328e70"
  },
  {
    "url": "assets/js/542.js",
    "revision": "264e8c9ac9e58a5176196ac4367eca41"
  },
  {
    "url": "assets/js/543.js",
    "revision": "4e50e29ce7b396551b437a2aa34b931c"
  },
  {
    "url": "assets/js/544.js",
    "revision": "615ffb6287a3d1910961f5c9cc24276f"
  },
  {
    "url": "assets/js/545.js",
    "revision": "ffbfd84488fc460a0186e2ffa44e8a29"
  },
  {
    "url": "assets/js/546.js",
    "revision": "d529e1c8729a970de9bf02a11be492f2"
  },
  {
    "url": "assets/js/547.js",
    "revision": "a236cd9848c001aec5c0412f18efd70d"
  },
  {
    "url": "assets/js/548.js",
    "revision": "3b17dbbb3898b7605061a0f4f167dd96"
  },
  {
    "url": "assets/js/549.js",
    "revision": "f85e17050c1b906d8f1fe58a8a22a567"
  },
  {
    "url": "assets/js/55.js",
    "revision": "6be376dae5eb982eaf2f0f20c63634ff"
  },
  {
    "url": "assets/js/550.js",
    "revision": "2565cad4e97fd910c4616c1e6e496794"
  },
  {
    "url": "assets/js/551.js",
    "revision": "9c33f224e80b3e1e23d17fbafb20017c"
  },
  {
    "url": "assets/js/552.js",
    "revision": "161876fe785cd2a8f28ab938ffc9377e"
  },
  {
    "url": "assets/js/553.js",
    "revision": "e53c5d70632697aaae36fd73f6a936c1"
  },
  {
    "url": "assets/js/554.js",
    "revision": "9dff2a7a24d7c4d6cdacd02c67625dd4"
  },
  {
    "url": "assets/js/555.js",
    "revision": "dd5e621f040d50fb1ae302de5cbc08fb"
  },
  {
    "url": "assets/js/556.js",
    "revision": "5677a3df7ce6e75b5a4eaabba94ad2df"
  },
  {
    "url": "assets/js/557.js",
    "revision": "268707c7805aab694531349233694a44"
  },
  {
    "url": "assets/js/558.js",
    "revision": "a333a25ddb3685a35cb6ec7d3718656c"
  },
  {
    "url": "assets/js/559.js",
    "revision": "f0c8ab49dba4410a2f1893eb5b4b6d6a"
  },
  {
    "url": "assets/js/56.js",
    "revision": "91fe9c9230edfae46ff641d728e572b3"
  },
  {
    "url": "assets/js/560.js",
    "revision": "22ae880f589f24321ea23c911788e666"
  },
  {
    "url": "assets/js/561.js",
    "revision": "9654b6b26b9ad2497e399607a9aeba72"
  },
  {
    "url": "assets/js/562.js",
    "revision": "a64b80ac2bd2cbbd3fea5d34924f9cb1"
  },
  {
    "url": "assets/js/563.js",
    "revision": "b90720ea8c532d5509562231d09392cb"
  },
  {
    "url": "assets/js/564.js",
    "revision": "9677e8040052dcfacb5487dc19fb1da3"
  },
  {
    "url": "assets/js/565.js",
    "revision": "714863697c83895b55022047294bfc4b"
  },
  {
    "url": "assets/js/566.js",
    "revision": "0bada4ef95e0b30e4a80a74ade6b8095"
  },
  {
    "url": "assets/js/567.js",
    "revision": "d8d3b67bfa746390e08a8090529ed8cd"
  },
  {
    "url": "assets/js/568.js",
    "revision": "341c5cb5cd359875defb3d1ff3943b4d"
  },
  {
    "url": "assets/js/569.js",
    "revision": "e0313026789fedfa4984357705864659"
  },
  {
    "url": "assets/js/57.js",
    "revision": "01c436781ad162d265fb718b625b81dd"
  },
  {
    "url": "assets/js/570.js",
    "revision": "65e3b58dc0756f7663b78a09d18257fa"
  },
  {
    "url": "assets/js/571.js",
    "revision": "314b895068b174322c0ab347cc0e4729"
  },
  {
    "url": "assets/js/572.js",
    "revision": "1f07ea475424e98e816443cb4ee629e8"
  },
  {
    "url": "assets/js/573.js",
    "revision": "6de3c5db03a81b79fd262dc8aa979fdf"
  },
  {
    "url": "assets/js/574.js",
    "revision": "957fee37c15272ec215f0799f9cb161e"
  },
  {
    "url": "assets/js/575.js",
    "revision": "12e3bbe6522016d45577c5b3a5935be3"
  },
  {
    "url": "assets/js/576.js",
    "revision": "c5320f63d7324304a3dffae7f6619067"
  },
  {
    "url": "assets/js/577.js",
    "revision": "88906ccc681f3a50bf06422df09ccea4"
  },
  {
    "url": "assets/js/578.js",
    "revision": "57bc76ad847fda7ad11d50ccb8ad4537"
  },
  {
    "url": "assets/js/579.js",
    "revision": "88b77b70516f7dc8d74f6d6dd9b91f3d"
  },
  {
    "url": "assets/js/58.js",
    "revision": "1d6358a8e8a0d19038840d063d862998"
  },
  {
    "url": "assets/js/580.js",
    "revision": "6131e6cb548cc353e51cc3f6e36c4c9a"
  },
  {
    "url": "assets/js/581.js",
    "revision": "44b0cfcbc230864208a58547fa693aed"
  },
  {
    "url": "assets/js/582.js",
    "revision": "e0c0db5cb93ff06dccb66c908d96f256"
  },
  {
    "url": "assets/js/583.js",
    "revision": "fd55493d7c9ab9cb1062f42606af4c88"
  },
  {
    "url": "assets/js/584.js",
    "revision": "0c34b726b5de225cd2114a43dabf121f"
  },
  {
    "url": "assets/js/585.js",
    "revision": "97ee58b311350204f40064fdff8c3002"
  },
  {
    "url": "assets/js/586.js",
    "revision": "d7d21131dff4f86c737670ee27215e0a"
  },
  {
    "url": "assets/js/587.js",
    "revision": "2e03a5acfcf8a623a26a64a14e487ba2"
  },
  {
    "url": "assets/js/59.js",
    "revision": "b20ca5ffa20236301a03cfadf1a0ab55"
  },
  {
    "url": "assets/js/6.js",
    "revision": "474b59da2be70e7cae94315d4de2fc5b"
  },
  {
    "url": "assets/js/60.js",
    "revision": "30eedc7ee44fb11d4d0c0b3b25c09fcf"
  },
  {
    "url": "assets/js/61.js",
    "revision": "e43c51624abd941407232bf885f9d0b5"
  },
  {
    "url": "assets/js/62.js",
    "revision": "fdfa95a2b5b6478d9d4d869d7215aec6"
  },
  {
    "url": "assets/js/63.js",
    "revision": "54eaa0f8fb5f0e13f3f1015d717e1b09"
  },
  {
    "url": "assets/js/64.js",
    "revision": "79f866f230fa902eceda84b9e3a409e7"
  },
  {
    "url": "assets/js/65.js",
    "revision": "0e5567bd4e6ba2fa507390ce5b5c2a16"
  },
  {
    "url": "assets/js/66.js",
    "revision": "98eb9b57e546adae71f052baba71593f"
  },
  {
    "url": "assets/js/67.js",
    "revision": "571c764dcf110f3f626e285576aabaf9"
  },
  {
    "url": "assets/js/68.js",
    "revision": "1d3adf958642518036f5a36e01da0b8a"
  },
  {
    "url": "assets/js/69.js",
    "revision": "a7f910d3a45c418447cf7aed128b63e4"
  },
  {
    "url": "assets/js/7.js",
    "revision": "f12225cb7a801ea21301f31a151b3fa4"
  },
  {
    "url": "assets/js/70.js",
    "revision": "bf8fa21b479bc5b09d305dfdcb441f4a"
  },
  {
    "url": "assets/js/71.js",
    "revision": "8a3cd798eedf483a7359132d9e882919"
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
    "revision": "42b701268a5ad9fc99dc9bbdd1d166f1"
  },
  {
    "url": "assets/js/78.js",
    "revision": "e1a05f630c3dada17b8d66aab11fb03b"
  },
  {
    "url": "assets/js/79.js",
    "revision": "7092d8c682f68a58848203f6850497eb"
  },
  {
    "url": "assets/js/8.js",
    "revision": "c5b005260c61f0680eaa50d71d78f8c2"
  },
  {
    "url": "assets/js/80.js",
    "revision": "98f5442d833873c4137f1b93d1513bb7"
  },
  {
    "url": "assets/js/81.js",
    "revision": "5cc143ea706dc7cc2613be5a4e845de4"
  },
  {
    "url": "assets/js/82.js",
    "revision": "6525e23367aa2ac96766df6dde47fce7"
  },
  {
    "url": "assets/js/83.js",
    "revision": "a23a50d70075b23ecb9f3d311648c39f"
  },
  {
    "url": "assets/js/84.js",
    "revision": "d52c44001e23749fa99df618b35a5f48"
  },
  {
    "url": "assets/js/85.js",
    "revision": "e98c548c806276832ba0124c58dcf8e4"
  },
  {
    "url": "assets/js/86.js",
    "revision": "1c5782e2eeb60afec5ccf7e5123df31f"
  },
  {
    "url": "assets/js/87.js",
    "revision": "8c07cdd2aa790b8b05ac1403e43f5fb8"
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
    "revision": "06eb7292ea29cd1b2e117d3afa417e0c"
  },
  {
    "url": "assets/js/90.js",
    "revision": "259dae0790f660ae7841286bbf85ffeb"
  },
  {
    "url": "assets/js/91.js",
    "revision": "8c19b4e18ffa60ee7158b78c97a8f465"
  },
  {
    "url": "assets/js/92.js",
    "revision": "21c25277b7c7435b1f9b66c4cfa1af52"
  },
  {
    "url": "assets/js/93.js",
    "revision": "2174390b2091713d6f05130753eb3ee7"
  },
  {
    "url": "assets/js/94.js",
    "revision": "b0642e223df479fbaa73ef8de12e79d3"
  },
  {
    "url": "assets/js/95.js",
    "revision": "cb35d3d430ac3e23ebb93f41f4789ffa"
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
    "revision": "2d2235e47c566907b1dc2300f005e8b0"
  },
  {
    "url": "assets/js/99.js",
    "revision": "031681f6fbd0219c8939f7f489bc4c26"
  },
  {
    "url": "assets/js/app.js",
    "revision": "f68cf69e0dac1b0614040c5f190fdec9"
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
    "revision": "9c62db56dd3466f4294126cb0cd0ab12"
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
    "url": "blog/code/war/index.html",
    "revision": "e5fead0cd9312a78921c7c1ad85acd58"
  },
  {
    "url": "blog/code/website/index.html",
    "revision": "f1589e7d29da519b7c8f4808a1bb7d5f"
  },
  {
    "url": "blog/code/website/route/index.html",
    "revision": "90e02b7485766397ebe81388fb71e091"
  },
  {
    "url": "blog/code/website/site/index.html",
    "revision": "98de24742f242b0c2074a47c5d456d39"
  },
  {
    "url": "blog/code/xmltv.co.nz/index.html",
    "revision": "bfe4ffdab36f53b42499fd0e9b52d73b"
  },
  {
    "url": "blog/howto/index.html",
    "revision": "87a1cfd23d935de0570b24a3c86e91f5"
  },
  {
    "url": "blog/howto/intel865/index.html",
    "revision": "a70f709e5c63f77df5118cdbd3b02f5d"
  },
  {
    "url": "blog/howto/nexentastor/index.html",
    "revision": "c4929d24fb9b9efede285eb9f586a4fa"
  },
  {
    "url": "blog/howto/pcloadletter/index.html",
    "revision": "7b3adf1001ea1718b4e81eac97a9cb6d"
  },
  {
    "url": "blog/howto/raid5/index.html",
    "revision": "cb6e3b2cb322ea4cee48dfdeca55fa0d"
  },
  {
    "url": "blog/index.html",
    "revision": "ea6314f331709fe49fa62349fd89cb7a"
  },
  {
    "url": "blog/life/anotheryear/index.html",
    "revision": "95a3bfe7c8c4da78f2dbce17f5cc23f2"
  },
  {
    "url": "blog/life/birthday/index.html",
    "revision": "6191668cc16a1e09df9674ab12957fb7"
  },
  {
    "url": "blog/life/blasphemy/index.html",
    "revision": "c5261917d7c6feaf86118031d726f018"
  },
  {
    "url": "blog/life/blogger/index.html",
    "revision": "9357e792ea465f75088ef2f53f5581da"
  },
  {
    "url": "blog/life/blurry/index.html",
    "revision": "ddca91b50c818c45f8a50951df100a56"
  },
  {
    "url": "blog/life/busyday/index.html",
    "revision": "1a1582a6a377b2a71402e71501f013d7"
  },
  {
    "url": "blog/life/domain/index.html",
    "revision": "a301eb3b08963360f8e82d659db77115"
  },
  {
    "url": "blog/life/exams/index.html",
    "revision": "30449e46ef7899dde15168d61f7ad287"
  },
  {
    "url": "blog/life/food/index.html",
    "revision": "f9af0dc29ea8a65590ac2f5b1505e3c4"
  },
  {
    "url": "blog/life/glenview/index.html",
    "revision": "9a676a930bf7bbc4a49b914c5440ae62"
  },
  {
    "url": "blog/life/headlines/index.html",
    "revision": "f075ad9f3174a56d81f7fdb971bef1b4"
  },
  {
    "url": "blog/life/index.html",
    "revision": "0cd627860448c3ad6e755ba50b2ebccd"
  },
  {
    "url": "blog/life/jws/index.html",
    "revision": "ef01d74924096794b6acde08aae54131"
  },
  {
    "url": "blog/life/keyboard/index.html",
    "revision": "fdc1f8a8c5218fe77b712f7dea8b587e"
  },
  {
    "url": "blog/life/lpi201/index.html",
    "revision": "7d036900901b6d7a816555da51582662"
  },
  {
    "url": "blog/life/mashup/index.html",
    "revision": "538d9ecfc8a9eff66adb47852fd6a4a7"
  },
  {
    "url": "blog/life/motorweb/index.html",
    "revision": "5fa1f8885e4fd2321466df9f4b6cd694"
  },
  {
    "url": "blog/life/nxe/index.html",
    "revision": "b952b18a052aee5bd83fbfae3be0bdb4"
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
    "revision": "7bfa435d9e99539a96824e8905a99756"
  },
  {
    "url": "blog/life/roads/index.html",
    "revision": "9fc1c0024361d0a19ddc0bc10819a1bd"
  },
  {
    "url": "blog/life/roots/index.html",
    "revision": "7154a8b34e7eaec7bbcc73c62ae4a4ff"
  },
  {
    "url": "blog/life/scare/index.html",
    "revision": "5dc451cae67c4d4ff5d9000ca9b04d54"
  },
  {
    "url": "blog/life/scary/index.html",
    "revision": "b443e741feb28783cd4360caa7006636"
  },
  {
    "url": "blog/life/seti/index.html",
    "revision": "b1063ba7fc9965b1c4860db6a5003e65"
  },
  {
    "url": "blog/life/skeptical/index.html",
    "revision": "3cc7c0bb988be6b96e705458f8953310"
  },
  {
    "url": "blog/life/skepticzone/index.html",
    "revision": "bcab1b0a4bf0dc3f5ae815ab446dfb00"
  },
  {
    "url": "blog/life/spam/index.html",
    "revision": "73a835dd2e498c5da1fbd25ce4d9cf6f"
  },
  {
    "url": "blog/life/trademe/index.html",
    "revision": "c5f964aadaf3fb94f2bc2fbccfc6e4a9"
  },
  {
    "url": "blog/life/unforeseen/index.html",
    "revision": "10ba3fbe3ff26dd5cca52bb345864e85"
  },
  {
    "url": "blog/life/wobbly/index.html",
    "revision": "b60398fa14f3a17d2439595a7272d599"
  },
  {
    "url": "blog/projects/airbag/index.html",
    "revision": "76a2706dc9481d5cc2d99a81184d0c70"
  },
  {
    "url": "blog/projects/ambilight/index.html",
    "revision": "aa3af1e4b30a769d423181797ec0a696"
  },
  {
    "url": "blog/projects/automation/index.html",
    "revision": "99501d2fd55671bb45f66fe31e35c3c3"
  },
  {
    "url": "blog/projects/eyes/index.html",
    "revision": "e62b04b591164560e73c1bfc1bb44aa3"
  },
  {
    "url": "blog/projects/glitch/index.html",
    "revision": "864d251aedd415d3d252e5bdfdc84ab9"
  },
  {
    "url": "blog/projects/hotel/index.html",
    "revision": "3ed12933587b7db5df532400e58e6c06"
  },
  {
    "url": "blog/projects/index.html",
    "revision": "2a3d24796afcd03154ffa34ec775009e"
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
    "revision": "29570e69323c86323eec87107bfd38a5"
  },
  {
    "url": "blog/projects/picture/index.html",
    "revision": "5b5b59a60b71892300f4ce3de1101c53"
  },
  {
    "url": "blog/projects/pizza/index.html",
    "revision": "cc91e1e2d5534447b09394acb0d49dce"
  },
  {
    "url": "blog/projects/podcast/index.html",
    "revision": "b2e7b860b3322ee3b60f1a076905d39a"
  },
  {
    "url": "blog/projects/reflow/index.html",
    "revision": "34ee3d400db1da024ec5b3e3776f783a"
  },
  {
    "url": "blog/projects/sandbox/index.html",
    "revision": "995e7c15fe172f6d01480ae70941eaf2"
  },
  {
    "url": "blog/projects/screens/index.html",
    "revision": "8e7f3b6205d47509daa1c8228ab0f782"
  },
  {
    "url": "blog/projects/sky/index.html",
    "revision": "571724a4ea677d457e5613c0e61f2e9d"
  },
  {
    "url": "blog/projects/starwars/index.html",
    "revision": "f783754eccc98d254259871cb7def031"
  },
  {
    "url": "blog/projects/xbox/index.html",
    "revision": "e07f274781d7f47ea1e6f3954e650933"
  },
  {
    "url": "blog/random/addresses/index.html",
    "revision": "28ebbf6f8a1844b541fafd35276b92ee"
  },
  {
    "url": "blog/random/alphabet/index.html",
    "revision": "ad47c0a361145abe12dce9f49495d1d0"
  },
  {
    "url": "blog/random/astrology/index.html",
    "revision": "f3a03dd9cb84ef31efac06e4ef3cb63b"
  },
  {
    "url": "blog/random/chicken/index.html",
    "revision": "a58b4319e25e095535256aa52d295f37"
  },
  {
    "url": "blog/random/dns/index.html",
    "revision": "ccc33f16d85c1ce79a2b2e46a910e389"
  },
  {
    "url": "blog/random/evp/index.html",
    "revision": "94ed5401868cafced45725fcc87388e2"
  },
  {
    "url": "blog/random/flip/index.html",
    "revision": "179d8edec97c6deffb6fdc77683084e5"
  },
  {
    "url": "blog/random/honeychurch/index.html",
    "revision": "d370455c3b72ff23c620879c612cf1d1"
  },
  {
    "url": "blog/random/index.html",
    "revision": "8de58f398da39444f1ff6d9bea1350ef"
  },
  {
    "url": "blog/random/lottery/index.html",
    "revision": "51d0f06744d58e19ed8dc31020e2d021"
  },
  {
    "url": "blog/random/music/index.html",
    "revision": "0ce34c6ed24f7c1ce38eb57708625d0d"
  },
  {
    "url": "blog/random/octal/index.html",
    "revision": "2801adcdf822c714ab7cdef10d3525c0"
  },
  {
    "url": "blog/random/os/index.html",
    "revision": "645560cfe92a13143df37e62b42283bd"
  },
  {
    "url": "blog/random/propellers/index.html",
    "revision": "3729c5c13349c16bd5b8ef2486d4a0a0"
  },
  {
    "url": "blog/random/robux/index.html",
    "revision": "53d11700eee60541b2ca22e6341b0b5d"
  },
  {
    "url": "blog/random/super/index.html",
    "revision": "42d6d92c9529e599e081d2f523496cbf"
  },
  {
    "url": "blog/random/times/index.html",
    "revision": "a8c44e3fd30c2165a7f8ac7c717782ab"
  },
  {
    "url": "blog/random/travel/index.html",
    "revision": "90bed56969d757be3ad5785897b689f6"
  },
  {
    "url": "blog/random/wilhelm/index.html",
    "revision": "de69c4b2e8fd8e63653029537ec9cac8"
  },
  {
    "url": "blog/random/year/index.html",
    "revision": "65bf32b342c82e37dee28b5a8afd061e"
  },
  {
    "url": "blog/skepticism/2015/08/16/asa/index.html",
    "revision": "71ca6417e1b072aa03379786be4a678e"
  },
  {
    "url": "blog/skepticism/2015/08/16/awards/index.html",
    "revision": "832590d449a584c4347a40497874dfed"
  },
  {
    "url": "blog/skepticism/2015/08/16/bravo/index.html",
    "revision": "48fbf286a7b136d54dd1b76016b510a0"
  },
  {
    "url": "blog/skepticism/2015/08/16/index.html",
    "revision": "9b96f2c055e9171e0961a972e95df3fd"
  },
  {
    "url": "blog/skepticism/2015/08/16/jim/index.html",
    "revision": "545490060cc6d12fe50e8a33fa2239fe"
  },
  {
    "url": "blog/skepticism/2015/08/16/naholo/index.html",
    "revision": "10c82d6dca0a2eec8ad0407ad3c7c555"
  },
  {
    "url": "blog/skepticism/2015/08/16/resene/index.html",
    "revision": "1cbf6fada2f917c7770e5fb2af2ff896"
  },
  {
    "url": "blog/skepticism/2015/08/index.html",
    "revision": "7508210774d402cf2c46406f94071173"
  },
  {
    "url": "blog/skepticism/2015/09/20/gop/index.html",
    "revision": "e6ba6600b540db01f4a41aacec8681ab"
  },
  {
    "url": "blog/skepticism/2015/09/20/ignobel/index.html",
    "revision": "3a4280c9be8fbd5cc8cd0e75dda8f3e2"
  },
  {
    "url": "blog/skepticism/2015/09/20/index.html",
    "revision": "11cf43f797f4899bfc7025c0660670ea"
  },
  {
    "url": "blog/skepticism/2015/09/20/supplements/index.html",
    "revision": "aca712e930ca11794e23046b3c560536"
  },
  {
    "url": "blog/skepticism/2015/09/27/ayahuasca/index.html",
    "revision": "e251ddedef00da30edd9c1a33936e637"
  },
  {
    "url": "blog/skepticism/2015/09/27/drought/index.html",
    "revision": "45bc5d5e8dedb5cf797ab96de453aafe"
  },
  {
    "url": "blog/skepticism/2015/09/27/index.html",
    "revision": "043b64f5d511400498bc24fdb643cce0"
  },
  {
    "url": "blog/skepticism/2015/09/27/lama/index.html",
    "revision": "9f6bbdeb9b3e497423703b2389a0e4b6"
  },
  {
    "url": "blog/skepticism/2015/09/27/moon/index.html",
    "revision": "47e96a6653cdade5c7e9182d3bd02780"
  },
  {
    "url": "blog/skepticism/2015/09/27/scan/index.html",
    "revision": "5f8b78838d8d7c23399c775f59abe158"
  },
  {
    "url": "blog/skepticism/2015/09/index.html",
    "revision": "5a24833b545a5b5483c21ccf3fde4949"
  },
  {
    "url": "blog/skepticism/2015/10/04/ghost/index.html",
    "revision": "2bb06e038078e5702f36f43d3f419805"
  },
  {
    "url": "blog/skepticism/2015/10/04/haka/index.html",
    "revision": "b3fe2aca85eeaf8d7d3e4fdd43b52745"
  },
  {
    "url": "blog/skepticism/2015/10/04/index.html",
    "revision": "bf4edc59e43e017b9c992166b6f11f27"
  },
  {
    "url": "blog/skepticism/2015/10/04/mars/index.html",
    "revision": "d03cb4111f63c96cabad40c2b555845f"
  },
  {
    "url": "blog/skepticism/2015/10/04/pharmacy/index.html",
    "revision": "7cb7be565dcf0ddf0c6c03517b874aad"
  },
  {
    "url": "blog/skepticism/2015/10/04/prostate/index.html",
    "revision": "af4dd1c7b17fb5a547d3ad506ba83c0e"
  },
  {
    "url": "blog/skepticism/2015/10/11/armageddon/index.html",
    "revision": "7706af99aa80384b204cfc3a0971da47"
  },
  {
    "url": "blog/skepticism/2015/10/11/climate/index.html",
    "revision": "768bd081ff853b4f0068d9769d54218a"
  },
  {
    "url": "blog/skepticism/2015/10/11/ghost/index.html",
    "revision": "743f550f651f18169aea0096004241b6"
  },
  {
    "url": "blog/skepticism/2015/10/11/index.html",
    "revision": "abcce5791d6a1f2fc28acb464a3fa075"
  },
  {
    "url": "blog/skepticism/2015/10/11/magnesleep/index.html",
    "revision": "2d909e4a0466e815d263f17bda6da813"
  },
  {
    "url": "blog/skepticism/2015/10/11/nhs/index.html",
    "revision": "67ae312e6047895602609feee070ec4d"
  },
  {
    "url": "blog/skepticism/2015/10/11/prophet/index.html",
    "revision": "c7167b5331eaac68e33f202f061c906c"
  },
  {
    "url": "blog/skepticism/2015/10/index.html",
    "revision": "110c3dfd643bebede2e905f67c630b07"
  },
  {
    "url": "blog/skepticism/2015/11/15/end/index.html",
    "revision": "a74c7dd1a22644d5620884c6869a05db"
  },
  {
    "url": "blog/skepticism/2015/11/15/index.html",
    "revision": "b547813c6b4235beaa4dffd4c66afb38"
  },
  {
    "url": "blog/skepticism/2015/11/index.html",
    "revision": "ba0eeab7a1fd390b4b4744c66dc5e8d5"
  },
  {
    "url": "blog/skepticism/2015/12/13/astrology/index.html",
    "revision": "2990d959b382848a32d10b927733da26"
  },
  {
    "url": "blog/skepticism/2015/12/13/cancer/index.html",
    "revision": "9153d9bce06eca0796fc932bc72e5a13"
  },
  {
    "url": "blog/skepticism/2015/12/13/chickenpox/index.html",
    "revision": "dce83b735bb8a80694af190f5f0d3496"
  },
  {
    "url": "blog/skepticism/2015/12/13/index.html",
    "revision": "ff5043ab8a51a72651a5c0c1a3c5bbfc"
  },
  {
    "url": "blog/skepticism/2015/12/13/osteopath/index.html",
    "revision": "e9987f0e6da5286f8b69a1897ae1d8ee"
  },
  {
    "url": "blog/skepticism/2015/12/13/priest/index.html",
    "revision": "189c54835077927d6f0f72f58446f546"
  },
  {
    "url": "blog/skepticism/2015/12/13/psychic/index.html",
    "revision": "6d21a9630adec1f06b0ce6807b477564"
  },
  {
    "url": "blog/skepticism/2015/12/13/vaccines/index.html",
    "revision": "cb319a0649937496a9cd5fe19f360f58"
  },
  {
    "url": "blog/skepticism/2015/12/index.html",
    "revision": "472c42b05cbe53e0df30c8d69ccb8222"
  },
  {
    "url": "blog/skepticism/2015/index.html",
    "revision": "8a5b5a22a736225bcea156bb0f408dfa"
  },
  {
    "url": "blog/skepticism/2016/02/07/antioxidant/index.html",
    "revision": "12ea909b2652555720477cce81706dc4"
  },
  {
    "url": "blog/skepticism/2016/02/07/index.html",
    "revision": "de0cf878f58cfe7915a0a1b427daaeb9"
  },
  {
    "url": "blog/skepticism/2016/02/07/kfc/index.html",
    "revision": "16a02aa817046c7260207fe6ecfb31b2"
  },
  {
    "url": "blog/skepticism/2016/02/07/ph/index.html",
    "revision": "d80f2071288497463ae355ac87537e94"
  },
  {
    "url": "blog/skepticism/2016/02/07/sandy/index.html",
    "revision": "2eb76055ae0c62858f7d3d0fc0aa2f89"
  },
  {
    "url": "blog/skepticism/2016/02/07/sarfati/index.html",
    "revision": "f28dfd11d1779280e0635a9b5f6f3161"
  },
  {
    "url": "blog/skepticism/2016/02/07/trump/index.html",
    "revision": "e8de9ec64ad25e038b8d2d4cbbf305f5"
  },
  {
    "url": "blog/skepticism/2016/02/14/coins/index.html",
    "revision": "0693dfdcc8f04fa77461e4f900e191d9"
  },
  {
    "url": "blog/skepticism/2016/02/14/fast/index.html",
    "revision": "2bc4fa7eadccd3abbdf0dcfb96689cbf"
  },
  {
    "url": "blog/skepticism/2016/02/14/fluoride/index.html",
    "revision": "f7260a841a8fd44d7ff3ca7b902a6318"
  },
  {
    "url": "blog/skepticism/2016/02/14/icke/index.html",
    "revision": "7c1e7505fe0032841baca55fc1579c36"
  },
  {
    "url": "blog/skepticism/2016/02/14/index.html",
    "revision": "05e66123878b2d20f6af7c04905e295a"
  },
  {
    "url": "blog/skepticism/2016/02/14/yeti/index.html",
    "revision": "1999165b667a7fd4227372c0e5aa49de"
  },
  {
    "url": "blog/skepticism/2016/02/21/homeopathy/index.html",
    "revision": "862ebdbec4d86b8315df7a7dc1ce80bc"
  },
  {
    "url": "blog/skepticism/2016/02/21/index.html",
    "revision": "058f7550aa619d922590bd563a1b84cd"
  },
  {
    "url": "blog/skepticism/2016/02/21/monster/index.html",
    "revision": "d0ce536d2d68588110f21e1ec2957916"
  },
  {
    "url": "blog/skepticism/2016/02/21/scalia/index.html",
    "revision": "e21ec1b8996c8eb8b73fd5b03865d943"
  },
  {
    "url": "blog/skepticism/2016/02/21/shane/index.html",
    "revision": "9bfd8f6bfc8c0c9ed73a395a5fea8c75"
  },
  {
    "url": "blog/skepticism/2016/02/21/texas/index.html",
    "revision": "5a08d101f08d42ee15183fd7acaff8f8"
  },
  {
    "url": "blog/skepticism/2016/02/28/acupuncture/index.html",
    "revision": "64358ce080c2a138a4e27e828437fcc4"
  },
  {
    "url": "blog/skepticism/2016/02/28/fsm/index.html",
    "revision": "964acf37d462e76779cc017311886b3a"
  },
  {
    "url": "blog/skepticism/2016/02/28/index.html",
    "revision": "4d677d3505053fc2ff312256cc928d6b"
  },
  {
    "url": "blog/skepticism/2016/02/28/iv/index.html",
    "revision": "c38d305f829beeaa233fc9bca64be8f6"
  },
  {
    "url": "blog/skepticism/2016/02/28/natural/index.html",
    "revision": "da5c1492fdb990d5a6db8941b7f9cd44"
  },
  {
    "url": "blog/skepticism/2016/02/28/talc/index.html",
    "revision": "6798efd74ad6ed66203a1fe08b9164f5"
  },
  {
    "url": "blog/skepticism/2016/02/index.html",
    "revision": "8b1e076419c99c7485015886397eebe5"
  },
  {
    "url": "blog/skepticism/2016/03/13/herbs/index.html",
    "revision": "4d37701186e74e3911f61065e410fdf6"
  },
  {
    "url": "blog/skepticism/2016/03/13/index.html",
    "revision": "7cf55f7aebb4ea0d926b4e9e91467564"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandala/index.html",
    "revision": "43600ddf3041beadc320d7573146c2d3"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandela/index.html",
    "revision": "78828405d72c69c3b48815e87d804ad2"
  },
  {
    "url": "blog/skepticism/2016/03/13/spray/index.html",
    "revision": "0e9c14c51f7bc8df1a0fc61665d173bc"
  },
  {
    "url": "blog/skepticism/2016/03/index.html",
    "revision": "a24f000109b0f1b63cbea2cc9c462229"
  },
  {
    "url": "blog/skepticism/2016/04/17/charity/index.html",
    "revision": "91d3f28772c7304445fd282f2eef8045"
  },
  {
    "url": "blog/skepticism/2016/04/17/chiro/index.html",
    "revision": "dbfd2c933b380ef18fa6e201caf31906"
  },
  {
    "url": "blog/skepticism/2016/04/17/fluoride/index.html",
    "revision": "4a9f32776b7b0094042a5a49c2d9d522"
  },
  {
    "url": "blog/skepticism/2016/04/17/index.html",
    "revision": "90b7c843f2be4fa1d4f13a5ffe986a34"
  },
  {
    "url": "blog/skepticism/2016/04/17/lotto/index.html",
    "revision": "967a80a12b8347b43d2b66b4ec2633d3"
  },
  {
    "url": "blog/skepticism/2016/04/17/mind/index.html",
    "revision": "1044d68fb6ed65613da9757b6102c6fb"
  },
  {
    "url": "blog/skepticism/2016/04/17/whooping/index.html",
    "revision": "be5168ad95403a3e79da73b3ed5cfe11"
  },
  {
    "url": "blog/skepticism/2016/04/index.html",
    "revision": "374788fd693736bc8756f1379e2e2188"
  },
  {
    "url": "blog/skepticism/2016/06/05/1080/index.html",
    "revision": "8816dc40719917121e1e25aad9352292"
  },
  {
    "url": "blog/skepticism/2016/06/05/acupuncture/index.html",
    "revision": "83d3f7d3e337c12805b706c202da6e9d"
  },
  {
    "url": "blog/skepticism/2016/06/05/family/index.html",
    "revision": "4ca427ef9c6774a5b5188f8223120970"
  },
  {
    "url": "blog/skepticism/2016/06/05/index.html",
    "revision": "6c722bb70ab3f0251b81ee4187d8384e"
  },
  {
    "url": "blog/skepticism/2016/06/05/limbaugh/index.html",
    "revision": "3e4c6f81d8ed6d498a59b1ee4f4f9bce"
  },
  {
    "url": "blog/skepticism/2016/06/12/bobby/index.html",
    "revision": "1c00ed5f524478a610d780744688792a"
  },
  {
    "url": "blog/skepticism/2016/06/12/climate/index.html",
    "revision": "039fe7da829da37752c8e4da86ebbba7"
  },
  {
    "url": "blog/skepticism/2016/06/12/index.html",
    "revision": "e20d258b696a8777da39459b7629a6fa"
  },
  {
    "url": "blog/skepticism/2016/06/12/pugh/index.html",
    "revision": "c02f1dfe3d98264785e58f0eadb0dfa0"
  },
  {
    "url": "blog/skepticism/2016/06/12/savage/index.html",
    "revision": "fdb126184919273050e914075f6326ae"
  },
  {
    "url": "blog/skepticism/2016/06/12/sawdust/index.html",
    "revision": "b8f9ec5333b22c9eb8eb43a0bdd41b03"
  },
  {
    "url": "blog/skepticism/2016/06/19/beauty/index.html",
    "revision": "28502fc3c276ff9dd6f7151170b08bb2"
  },
  {
    "url": "blog/skepticism/2016/06/19/bilderberg/index.html",
    "revision": "1241ce05917a085e9235e79608e85f58"
  },
  {
    "url": "blog/skepticism/2016/06/19/cyf/index.html",
    "revision": "269e34a2d34a15faf2ffd9fe5bbee945"
  },
  {
    "url": "blog/skepticism/2016/06/19/holt/index.html",
    "revision": "d4983719b1ae22e1f1c71f04324a21f8"
  },
  {
    "url": "blog/skepticism/2016/06/19/index.html",
    "revision": "375ba2868f2dd5b2e522704065cd00ef"
  },
  {
    "url": "blog/skepticism/2016/06/19/silver/index.html",
    "revision": "7a3b0e6eef9b949aaeacac08f6fd6bb4"
  },
  {
    "url": "blog/skepticism/2016/06/19/ufo/index.html",
    "revision": "065a2d08e531e7ca665945a7136defef"
  },
  {
    "url": "blog/skepticism/2016/06/26/homeopathy/index.html",
    "revision": "8047b3a6a6f399afab0baac17733a406"
  },
  {
    "url": "blog/skepticism/2016/06/26/index.html",
    "revision": "ea3449fa71a44e6415ca78f71bd54b4e"
  },
  {
    "url": "blog/skepticism/2016/06/26/robbins/index.html",
    "revision": "27b30353fa6cfb3cc0e3181cf2c84a7d"
  },
  {
    "url": "blog/skepticism/2016/06/26/selfies/index.html",
    "revision": "f2e30d586ec44e00f9d8c9e55c87dac8"
  },
  {
    "url": "blog/skepticism/2016/06/26/silver/index.html",
    "revision": "63a387de48f809cc9c7adfe33eca84a6"
  },
  {
    "url": "blog/skepticism/2016/06/26/ufos/index.html",
    "revision": "3ea0eb2c0cb4b52303a498aad5462022"
  },
  {
    "url": "blog/skepticism/2016/06/index.html",
    "revision": "6641879f52b76ac849788a5e492dccd7"
  },
  {
    "url": "blog/skepticism/2016/07/03/glyphosate/index.html",
    "revision": "12f87e23832034b4caa5fc56b299f732"
  },
  {
    "url": "blog/skepticism/2016/07/03/gmo/index.html",
    "revision": "7d83c43fb33c342153a48c1c08542167"
  },
  {
    "url": "blog/skepticism/2016/07/03/index.html",
    "revision": "b3679f12ba344d65c7425f8fe472dc4f"
  },
  {
    "url": "blog/skepticism/2016/07/03/jail/index.html",
    "revision": "83426ed78e29d3bcfbb9285f99ee5f6f"
  },
  {
    "url": "blog/skepticism/2016/07/03/ken/index.html",
    "revision": "9efcc718b378028641e52ff65a0ac36c"
  },
  {
    "url": "blog/skepticism/2016/07/10/ark/index.html",
    "revision": "adf7fdeccc6be31226a7d1c45c193a79"
  },
  {
    "url": "blog/skepticism/2016/07/10/bee/index.html",
    "revision": "df884c2ae56c6427c1ee05c47cf9fe7b"
  },
  {
    "url": "blog/skepticism/2016/07/10/index.html",
    "revision": "3708da7434b5718d56a775ce06d6a6c8"
  },
  {
    "url": "blog/skepticism/2016/07/10/lottery/index.html",
    "revision": "b9dc1c95c3a27501ed3083ac506dc9de"
  },
  {
    "url": "blog/skepticism/2016/07/10/murder/index.html",
    "revision": "f5068cf957db6c90c920917ff662fd57"
  },
  {
    "url": "blog/skepticism/2016/07/17/dogs/index.html",
    "revision": "4d8de2c6e1ab1d99bb35012be3a5349b"
  },
  {
    "url": "blog/skepticism/2016/07/17/fsm/index.html",
    "revision": "147434a428aa5c45de00951c6fa7520b"
  },
  {
    "url": "blog/skepticism/2016/07/17/fyi/index.html",
    "revision": "f5f9aadc58a9735c06b89c14d34db01b"
  },
  {
    "url": "blog/skepticism/2016/07/17/index.html",
    "revision": "6644db8c8e742b4738e680254d4dd2d0"
  },
  {
    "url": "blog/skepticism/2016/07/17/natural/index.html",
    "revision": "5f4204a3b4b38e49c9ee7e440b76f926"
  },
  {
    "url": "blog/skepticism/2016/07/17/pokemon/index.html",
    "revision": "22c209298ad66e579bf18eb7918a7872"
  },
  {
    "url": "blog/skepticism/2016/07/index.html",
    "revision": "230078bb4e645b0364cbce33300be687"
  },
  {
    "url": "blog/skepticism/2016/08/07/icke/index.html",
    "revision": "d09fc13cbe4e844541a8e8937add6cc8"
  },
  {
    "url": "blog/skepticism/2016/08/07/index.html",
    "revision": "c72f3cab4b8715cac3f8f0b581fe7e0d"
  },
  {
    "url": "blog/skepticism/2016/08/21/brian/index.html",
    "revision": "6fcb29ed1655d1118c89c3301ae0fb42"
  },
  {
    "url": "blog/skepticism/2016/08/21/chlorine/index.html",
    "revision": "93cc21207f03e6e7f83dd44cc18e44c5"
  },
  {
    "url": "blog/skepticism/2016/08/21/index.html",
    "revision": "ae5094bb8d882e8454cc74a635e68778"
  },
  {
    "url": "blog/skepticism/2016/08/21/murder/index.html",
    "revision": "d09d462e0b9087be8858f9bb13598fe7"
  },
  {
    "url": "blog/skepticism/2016/08/21/superfoods/index.html",
    "revision": "302dd0fcbe0a3899fdacff18d64f7fcb"
  },
  {
    "url": "blog/skepticism/2016/08/21/witch/index.html",
    "revision": "73bfcc7d801ecc0c582b7d4f45e0e0c9"
  },
  {
    "url": "blog/skepticism/2016/08/28/alcohol/index.html",
    "revision": "b80cd132043b8c493c48e903449ba658"
  },
  {
    "url": "blog/skepticism/2016/08/28/chiro/index.html",
    "revision": "048355fb18af0cce8110ae60679a4456"
  },
  {
    "url": "blog/skepticism/2016/08/28/index.html",
    "revision": "823a6f0fb0ead0d4e95aad49f4a8c4dd"
  },
  {
    "url": "blog/skepticism/2016/08/28/processed/index.html",
    "revision": "4249fedbdba3053b1443f1fdbf8cff56"
  },
  {
    "url": "blog/skepticism/2016/08/28/sbh/index.html",
    "revision": "49ae211a8267704a61ac3035402ab94e"
  },
  {
    "url": "blog/skepticism/2016/08/index.html",
    "revision": "3fcb5c55aa2cd5b232e766e12c4630a0"
  },
  {
    "url": "blog/skepticism/2016/09/18/altruism/index.html",
    "revision": "5eba7689c9145c7c36df664091b999dd"
  },
  {
    "url": "blog/skepticism/2016/09/18/better/index.html",
    "revision": "462c4c8aa23850afa96488bfa065a7c9"
  },
  {
    "url": "blog/skepticism/2016/09/18/homeopathy/index.html",
    "revision": "e7d513c70c0ff2db81a0eba3bc3176cb"
  },
  {
    "url": "blog/skepticism/2016/09/18/index.html",
    "revision": "9943c487f290fdd7189b76ac016d71e1"
  },
  {
    "url": "blog/skepticism/2016/09/18/nonsense/index.html",
    "revision": "9e25353b7767526d2d3a9845151419b1"
  },
  {
    "url": "blog/skepticism/2016/09/18/trump/index.html",
    "revision": "42af8bfcd1ae0de8867d0d1856171113"
  },
  {
    "url": "blog/skepticism/2016/09/25/clinic/index.html",
    "revision": "df8c443bed1196940b9ea599de2c58a2"
  },
  {
    "url": "blog/skepticism/2016/09/25/fluoride/index.html",
    "revision": "1f14101a2bcd03832489aa59916bfb8a"
  },
  {
    "url": "blog/skepticism/2016/09/25/homeopathy/index.html",
    "revision": "dc8ed4fb104782077187cf23edd4dfee"
  },
  {
    "url": "blog/skepticism/2016/09/25/index.html",
    "revision": "fb58fef1a97bd72a5e289ade4980a17c"
  },
  {
    "url": "blog/skepticism/2016/09/25/murder/index.html",
    "revision": "f8c71baeb34561e7d04795c441b069f4"
  },
  {
    "url": "blog/skepticism/2016/09/index.html",
    "revision": "9a808d7d241e9a54bee1816902cdb4d4"
  },
  {
    "url": "blog/skepticism/2016/10/21/bigfoot/index.html",
    "revision": "8429f25543c3ed6fbad1e1bec87f096e"
  },
  {
    "url": "blog/skepticism/2016/10/21/breasts/index.html",
    "revision": "ed6ed9908926e0c723b530fef3f92310"
  },
  {
    "url": "blog/skepticism/2016/10/21/index.html",
    "revision": "2698b3376aa6a166b9cccea21725455d"
  },
  {
    "url": "blog/skepticism/2016/10/21/medsafe/index.html",
    "revision": "285468d1d703812f3ffdb26da727cd97"
  },
  {
    "url": "blog/skepticism/2016/10/21/zenteq/index.html",
    "revision": "80da0bc5b6b76a4e6ec03e81fc5a90b7"
  },
  {
    "url": "blog/skepticism/2016/10/index.html",
    "revision": "6845b6c30782b0d964dffed2b3796556"
  },
  {
    "url": "blog/skepticism/2016/11/13/conference/index.html",
    "revision": "fd6c219c1c3e577229546e1fc4a2e83a"
  },
  {
    "url": "blog/skepticism/2016/11/13/green/index.html",
    "revision": "ae6f2922d9937a889618607a989d0134"
  },
  {
    "url": "blog/skepticism/2016/11/13/index.html",
    "revision": "9e19ee708999a8c62827eec385c7d8d8"
  },
  {
    "url": "blog/skepticism/2016/11/13/vice/index.html",
    "revision": "3c49276a28e27f47ed078cea54ce0127"
  },
  {
    "url": "blog/skepticism/2016/11/27/bioptron/index.html",
    "revision": "8f5ce96d7f9c8ea718ae704b1d49b06d"
  },
  {
    "url": "blog/skepticism/2016/11/27/conference/index.html",
    "revision": "3ef6dd0daaa6a8b2e3f8a5bbb1a3e75c"
  },
  {
    "url": "blog/skepticism/2016/11/27/earthquake/index.html",
    "revision": "f193f988676736b6a70008acdbd8e582"
  },
  {
    "url": "blog/skepticism/2016/11/27/index.html",
    "revision": "57c08914e7b6e92da97cde37bbcc3908"
  },
  {
    "url": "blog/skepticism/2016/11/index.html",
    "revision": "40c53ab0c3b2eb100c70d311ba9f93bd"
  },
  {
    "url": "blog/skepticism/2016/12/04/conference/index.html",
    "revision": "ec92b47b1a3ba63cae3c78a16723ab68"
  },
  {
    "url": "blog/skepticism/2016/12/04/index.html",
    "revision": "a0db9014c3beae6e68230c7c14de3861"
  },
  {
    "url": "blog/skepticism/2016/12/18/colin/index.html",
    "revision": "e181ea691654d02cccf2061a2031d3e2"
  },
  {
    "url": "blog/skepticism/2016/12/18/fiji/index.html",
    "revision": "d9cba80324e0d6e3947c4719b6323962"
  },
  {
    "url": "blog/skepticism/2016/12/18/index.html",
    "revision": "100328a7ec9238e4ecd6ad35ef1875fe"
  },
  {
    "url": "blog/skepticism/2016/12/18/kinesiology/index.html",
    "revision": "1862af17f99eb072d2272857d2155c80"
  },
  {
    "url": "blog/skepticism/2016/12/18/mmm/index.html",
    "revision": "35473e75a33757a7826c2867c29e0e3c"
  },
  {
    "url": "blog/skepticism/2016/12/18/nigel/index.html",
    "revision": "581654d16b9086ea5bab3a232a22f783"
  },
  {
    "url": "blog/skepticism/2016/12/index.html",
    "revision": "9a56e5489b727d56f3647977fbcad910"
  },
  {
    "url": "blog/skepticism/2016/index.html",
    "revision": "147b67b34f0c1078b06dfc303fc9fa0d"
  },
  {
    "url": "blog/skepticism/2017/01/22/index.html",
    "revision": "d07dd9f6b44ed2792ca9234064919b53"
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
    "revision": "0abecf4082df48c265bc196c30a7fb14"
  },
  {
    "url": "blog/skepticism/2017/01/index.html",
    "revision": "cad78f83b96ed19c39ea86e351af1773"
  },
  {
    "url": "blog/skepticism/2017/02/05/fraudster/index.html",
    "revision": "9c70fa6559457cb85139e0d509c4e7a6"
  },
  {
    "url": "blog/skepticism/2017/02/05/gervais/index.html",
    "revision": "38762cdaab619b99679a8b361dc09650"
  },
  {
    "url": "blog/skepticism/2017/02/05/index.html",
    "revision": "7a0ae5b328c661ec15700c388c1b1106"
  },
  {
    "url": "blog/skepticism/2017/02/05/scientology/index.html",
    "revision": "a997a5bb38b6690895a92e7e924bde3e"
  },
  {
    "url": "blog/skepticism/2017/02/19/homeopathy/index.html",
    "revision": "4771ece423cfcb763904b584f0ef0819"
  },
  {
    "url": "blog/skepticism/2017/02/19/index.html",
    "revision": "870b54220b51039fe2da600f2ece2b5f"
  },
  {
    "url": "blog/skepticism/2017/02/19/lottery/index.html",
    "revision": "0d452d33c97913fc786d4e5df77b4a9c"
  },
  {
    "url": "blog/skepticism/2017/02/19/vaxxed/index.html",
    "revision": "399fda3a341853c42efb770f234f723e"
  },
  {
    "url": "blog/skepticism/2017/02/19/whales/index.html",
    "revision": "f9886218c3b0d269a8111bb1c57522fc"
  },
  {
    "url": "blog/skepticism/2017/02/index.html",
    "revision": "ea9886f8c9121b844504483a9d341bc2"
  },
  {
    "url": "blog/skepticism/2017/03/05/index.html",
    "revision": "c1fbdd10fb36f599378ebd90e6b76187"
  },
  {
    "url": "blog/skepticism/2017/03/05/rea/index.html",
    "revision": "11bca1d6fa1394292baf4a34b1f32cba"
  },
  {
    "url": "blog/skepticism/2017/03/19/fake/index.html",
    "revision": "15576eed9c9e757b75a036e0c9f96e13"
  },
  {
    "url": "blog/skepticism/2017/03/19/index.html",
    "revision": "b7e25e66f456da734630660d53759647"
  },
  {
    "url": "blog/skepticism/2017/03/19/murder/index.html",
    "revision": "b3b443f585f50904d349f25f6352823e"
  },
  {
    "url": "blog/skepticism/2017/03/26/census/index.html",
    "revision": "13faebdc3e96ac23235cc698ba425433"
  },
  {
    "url": "blog/skepticism/2017/03/26/index.html",
    "revision": "726a001bc438fe3695e843e2cfea2690"
  },
  {
    "url": "blog/skepticism/2017/03/26/nzmj/index.html",
    "revision": "63af55de2f9ae918224512e86e4862a8"
  },
  {
    "url": "blog/skepticism/2017/03/26/shaquille/index.html",
    "revision": "62e06e7b4fe4cf187e35b9d415d92776"
  },
  {
    "url": "blog/skepticism/2017/03/index.html",
    "revision": "8887ce52b554cde2b447f5a2b205bb29"
  },
  {
    "url": "blog/skepticism/2017/04/02/index.html",
    "revision": "e93de3336e268400e25aa9d644df6731"
  },
  {
    "url": "blog/skepticism/2017/04/02/nasa/index.html",
    "revision": "b80f5cebc31b7c13787afe4462561422"
  },
  {
    "url": "blog/skepticism/2017/04/02/science/index.html",
    "revision": "ac15a49f0f81e836acd0481151f33658"
  },
  {
    "url": "blog/skepticism/2017/04/02/vaxxed/index.html",
    "revision": "818a140be78b98bad7d72703430d3c02"
  },
  {
    "url": "blog/skepticism/2017/04/09/index.html",
    "revision": "80b9acca7a45970fc625dfec9bc984ba"
  },
  {
    "url": "blog/skepticism/2017/04/09/tekiri/index.html",
    "revision": "8f4ab3ddf7845bf2ac87fb490977bb62"
  },
  {
    "url": "blog/skepticism/2017/04/09/vaxxed/index.html",
    "revision": "bfa57111a2d52dce6ed9e1cf01d37793"
  },
  {
    "url": "blog/skepticism/2017/04/23/arise/index.html",
    "revision": "262f0c0bb59c453acd42314e0ed80cfe"
  },
  {
    "url": "blog/skepticism/2017/04/23/index.html",
    "revision": "b587fdf306c6794ce1440bf76358501b"
  },
  {
    "url": "blog/skepticism/2017/04/23/kelvin/index.html",
    "revision": "6f8a1824e4021ba3d654764918609000"
  },
  {
    "url": "blog/skepticism/2017/04/index.html",
    "revision": "a2f89836df6c8dd5fa6e6b04fc3fea57"
  },
  {
    "url": "blog/skepticism/2017/05/07/cancer/index.html",
    "revision": "6d64caae1aca217d746ce8b568dfad3a"
  },
  {
    "url": "blog/skepticism/2017/05/07/index.html",
    "revision": "8d901154194d74072e96b30156f9f8db"
  },
  {
    "url": "blog/skepticism/2017/05/07/nigel/index.html",
    "revision": "a0f637a11ef7d5c30eedba7e6ef31645"
  },
  {
    "url": "blog/skepticism/2017/05/21/blasphemy/index.html",
    "revision": "27d7719a7b1039b0e6d8b1387996efc4"
  },
  {
    "url": "blog/skepticism/2017/05/21/flat/index.html",
    "revision": "5d1a1e0186cf715483e7944c107b1954"
  },
  {
    "url": "blog/skepticism/2017/05/21/index.html",
    "revision": "087fab5485d20eed814c2b549435c6eb"
  },
  {
    "url": "blog/skepticism/2017/05/21/maori/index.html",
    "revision": "85e44d7432a54b0b34b7e9b3f5e2f625"
  },
  {
    "url": "blog/skepticism/2017/05/index.html",
    "revision": "850423f75b9712c15022fb60f74c8967"
  },
  {
    "url": "blog/skepticism/2017/06/04/bigelow/index.html",
    "revision": "8cf9f2a0501c4aef698fc728f91c9f3d"
  },
  {
    "url": "blog/skepticism/2017/06/04/climate/index.html",
    "revision": "a120130c6d63691c1f2a166b0dbee06f"
  },
  {
    "url": "blog/skepticism/2017/06/04/hansford/index.html",
    "revision": "f145ae2281e62827c6d1b847f2e69e59"
  },
  {
    "url": "blog/skepticism/2017/06/04/index.html",
    "revision": "e86dd171c8dea0eb9bc0f14b399a12a5"
  },
  {
    "url": "blog/skepticism/2017/06/04/wasp/index.html",
    "revision": "c3f23862524fc8639af37d75dd8846ec"
  },
  {
    "url": "blog/skepticism/2017/06/11/colonic/index.html",
    "revision": "db9a45a5b02c3e4319aedd76ab72c864"
  },
  {
    "url": "blog/skepticism/2017/06/11/credulous/index.html",
    "revision": "c238fb0b73b577b7f2ea2bd4bb51f5f0"
  },
  {
    "url": "blog/skepticism/2017/06/11/index.html",
    "revision": "fa6c183062a7c1bb56c4518b84e578c9"
  },
  {
    "url": "blog/skepticism/2017/06/11/journals/index.html",
    "revision": "f17b32212c90ceb33eefda0200115b2a"
  },
  {
    "url": "blog/skepticism/2017/06/18/breatharians/index.html",
    "revision": "2a33960599529e1f1b81a28c93968dfc"
  },
  {
    "url": "blog/skepticism/2017/06/18/fieldays/index.html",
    "revision": "fb80da95a83eb1d1d8519d8155db8cd4"
  },
  {
    "url": "blog/skepticism/2017/06/18/index.html",
    "revision": "bdf0900a7563313ed9b0373771c73feb"
  },
  {
    "url": "blog/skepticism/2017/06/18/jw/index.html",
    "revision": "4de4fadb803235fd4460513256e577ae"
  },
  {
    "url": "blog/skepticism/2017/06/18/oil/index.html",
    "revision": "108edf89fa4b07edeb7fe4702ba9f02c"
  },
  {
    "url": "blog/skepticism/2017/06/index.html",
    "revision": "4d75e63764e84499302587b0d7433ff1"
  },
  {
    "url": "blog/skepticism/2017/07/02/baby/index.html",
    "revision": "f3001ffe53935d987c6586c83cc3da69"
  },
  {
    "url": "blog/skepticism/2017/07/02/index.html",
    "revision": "dd2b1216f445272637a7051bcc6bd3fe"
  },
  {
    "url": "blog/skepticism/2017/07/02/infowars/index.html",
    "revision": "baec5f94b97b310403d49b416acb6379"
  },
  {
    "url": "blog/skepticism/2017/07/02/scientology/index.html",
    "revision": "d094bb6cfd5f12dc0d4b87bafd845c12"
  },
  {
    "url": "blog/skepticism/2017/07/16/bananas/index.html",
    "revision": "00c8e3186a3c3b1cf87fcb595409d26a"
  },
  {
    "url": "blog/skepticism/2017/07/16/circles/index.html",
    "revision": "3fbcd058cfecc27432262b2130542c2a"
  },
  {
    "url": "blog/skepticism/2017/07/16/index.html",
    "revision": "6fb6637998d9d5881ec8bb188886396f"
  },
  {
    "url": "blog/skepticism/2017/07/16/siggi/index.html",
    "revision": "d3bac1d71dd350c282e33e69549c1354"
  },
  {
    "url": "blog/skepticism/2017/07/16/vaxxed/index.html",
    "revision": "1e5e56bf620a85e16ecb6ac7839546d4"
  },
  {
    "url": "blog/skepticism/2017/07/30/bleach/index.html",
    "revision": "7bd987aee12028406f12f5ec19effe7d"
  },
  {
    "url": "blog/skepticism/2017/07/30/bluebeam/index.html",
    "revision": "c0463c9556aea13c9c96ce2cf4bb1630"
  },
  {
    "url": "blog/skepticism/2017/07/30/index.html",
    "revision": "e0423be7f43e44846b37e7cc7b200888"
  },
  {
    "url": "blog/skepticism/2017/07/30/police/index.html",
    "revision": "0508eb57c64af89cf3a0b5b47733a29c"
  },
  {
    "url": "blog/skepticism/2017/07/index.html",
    "revision": "582a92037db0094954b429ca74848649"
  },
  {
    "url": "blog/skepticism/2017/08/06/conned/index.html",
    "revision": "e7b691dc68712bee7c0c18eafc7f1e24"
  },
  {
    "url": "blog/skepticism/2017/08/06/doll/index.html",
    "revision": "de5d493a7c16af34babdc92b6bc59cea"
  },
  {
    "url": "blog/skepticism/2017/08/06/index.html",
    "revision": "e715a6e35807b729ed1b660003c26515"
  },
  {
    "url": "blog/skepticism/2017/08/06/jacinda/index.html",
    "revision": "77db28cb2d8ec3563238e1087a303103"
  },
  {
    "url": "blog/skepticism/2017/08/06/lotto/index.html",
    "revision": "1a75458b54428442da3ff4ada62e4b8a"
  },
  {
    "url": "blog/skepticism/2017/08/27/index.html",
    "revision": "35863c026764f81e1bc1979ac828e89b"
  },
  {
    "url": "blog/skepticism/2017/08/27/naturopath/index.html",
    "revision": "49535851b47e356fbd420561b1a7e7bb"
  },
  {
    "url": "blog/skepticism/2017/08/27/satanic/index.html",
    "revision": "4861a9cb2e92e05f3b6292b00eb78631"
  },
  {
    "url": "blog/skepticism/2017/08/index.html",
    "revision": "9c101e71bca96394af1e81814b0ff828"
  },
  {
    "url": "blog/skepticism/2017/09/03/apocalypse/index.html",
    "revision": "a65150d2c5b4353ba3fdea7945932a12"
  },
  {
    "url": "blog/skepticism/2017/09/03/cancer/index.html",
    "revision": "ab9c9fa13d51ffbe9b389cacdf55b7f9"
  },
  {
    "url": "blog/skepticism/2017/09/03/index.html",
    "revision": "725b830fc28f370c155d885cfc9656aa"
  },
  {
    "url": "blog/skepticism/2017/09/03/rectangle/index.html",
    "revision": "98267913367868211b088734b8828934"
  },
  {
    "url": "blog/skepticism/2017/09/03/stargate/index.html",
    "revision": "8ea91deb13dffaf123702ed3670fe55a"
  },
  {
    "url": "blog/skepticism/2017/09/index.html",
    "revision": "db554983a97f6f8306156fcb3a01bf27"
  },
  {
    "url": "blog/skepticism/2017/10/01/apocalypse/index.html",
    "revision": "d4e409d48bfac36c76bc0a53341892dd"
  },
  {
    "url": "blog/skepticism/2017/10/01/freeman/index.html",
    "revision": "e1aff8cedf52f5ee3da28665e278a370"
  },
  {
    "url": "blog/skepticism/2017/10/01/index.html",
    "revision": "3440b19c2d997a96c394bb4bfce8f668"
  },
  {
    "url": "blog/skepticism/2017/10/01/pharmacy/index.html",
    "revision": "609c563a9e3f1ad65ea7072162b0fb13"
  },
  {
    "url": "blog/skepticism/2017/10/08/index.html",
    "revision": "2e7bfe120c5a719a5e7665224c82158b"
  },
  {
    "url": "blog/skepticism/2017/10/08/pill/index.html",
    "revision": "6286b1e010768d0458492056af41fba9"
  },
  {
    "url": "blog/skepticism/2017/10/08/qsb/index.html",
    "revision": "1fb9fbd8b394945bab2ca51d859927da"
  },
  {
    "url": "blog/skepticism/2017/10/08/vegas/index.html",
    "revision": "c3cec4c5d3d9bb97bf484191c3c95453"
  },
  {
    "url": "blog/skepticism/2017/10/15/doterra/index.html",
    "revision": "0924767a0ad59fe1671e8ddad29e2b06"
  },
  {
    "url": "blog/skepticism/2017/10/15/index.html",
    "revision": "0d9d09910ad04d266a20d3b326f80ae6"
  },
  {
    "url": "blog/skepticism/2017/10/15/lie/index.html",
    "revision": "3ac146a54eec9049d436e934ce57fc0c"
  },
  {
    "url": "blog/skepticism/2017/10/15/soap/index.html",
    "revision": "e034c5ab61f22203c34f2b73455ae078"
  },
  {
    "url": "blog/skepticism/2017/10/index.html",
    "revision": "1a113c3823a60fa789a7b8099b68ea90"
  },
  {
    "url": "blog/skepticism/2017/11/05/conference/index.html",
    "revision": "c81628f7504d7dbd49bcfcb09beec877"
  },
  {
    "url": "blog/skepticism/2017/11/05/glyphosate/index.html",
    "revision": "acb08e5c4fe8c6177a7308311a46a15c"
  },
  {
    "url": "blog/skepticism/2017/11/05/index.html",
    "revision": "6efc60cfce20569cfe0ad4f39bba4f63"
  },
  {
    "url": "blog/skepticism/2017/11/05/stranded/index.html",
    "revision": "b7da8e499c2a02eb8701cbda9f2fef3d"
  },
  {
    "url": "blog/skepticism/2017/11/05/tracts/index.html",
    "revision": "9e36024bc45ddd8615d3d303dd967416"
  },
  {
    "url": "blog/skepticism/2017/11/12/ghost/index.html",
    "revision": "6e4c492cdf4668ebfcf944d8b41477a3"
  },
  {
    "url": "blog/skepticism/2017/11/12/green/index.html",
    "revision": "0934a8754c031a61242dc300dad08dcc"
  },
  {
    "url": "blog/skepticism/2017/11/12/harassment/index.html",
    "revision": "162c14e8ed773d1c105a4b8c4b58e607"
  },
  {
    "url": "blog/skepticism/2017/11/12/index.html",
    "revision": "fc033779cacdd70bd6801aaa5db6cea9"
  },
  {
    "url": "blog/skepticism/2017/11/12/libby/index.html",
    "revision": "50b5d01b9661ced0d7bce9907f058fe9"
  },
  {
    "url": "blog/skepticism/2017/11/index.html",
    "revision": "9f15613b3be888dce27dce3e779990fb"
  },
  {
    "url": "blog/skepticism/2017/12/03/acupuncture/index.html",
    "revision": "250a9cd3d9db6c65bd705f8c7165512a"
  },
  {
    "url": "blog/skepticism/2017/12/03/denialism/index.html",
    "revision": "e0a811b2db810dc0667b4681decadd23"
  },
  {
    "url": "blog/skepticism/2017/12/03/dowsing/index.html",
    "revision": "abd92216211c8de7e09c27aa9302f03b"
  },
  {
    "url": "blog/skepticism/2017/12/03/holes/index.html",
    "revision": "eaeec1a5ef8f486d4b0e5798ecfe2a33"
  },
  {
    "url": "blog/skepticism/2017/12/03/index.html",
    "revision": "5fde91ee55ad1c9a89d14b4b72afd1c2"
  },
  {
    "url": "blog/skepticism/2017/12/17/index.html",
    "revision": "3daa612e590121d304283f3a5c2d67cd"
  },
  {
    "url": "blog/skepticism/2017/12/17/nhs/index.html",
    "revision": "a21143357a63e64a6cf95b72920b3ba5"
  },
  {
    "url": "blog/skepticism/2017/12/17/oto/index.html",
    "revision": "12fd4f50a08ccb49c00f10eef3fedb47"
  },
  {
    "url": "blog/skepticism/2017/12/17/pastafarian/index.html",
    "revision": "0c2d7308b84c3ea3757b6ba606abbea2"
  },
  {
    "url": "blog/skepticism/2017/12/17/shc/index.html",
    "revision": "a44bacee1490547ae58cd6d60009193a"
  },
  {
    "url": "blog/skepticism/2017/12/17/wellworks/index.html",
    "revision": "022d03357b80f72d2c70ef33b9ca8dc4"
  },
  {
    "url": "blog/skepticism/2017/12/index.html",
    "revision": "905fb55cf2890ae2d4e8d772518eb629"
  },
  {
    "url": "blog/skepticism/2017/index.html",
    "revision": "64af36a7bfa96f8af7a7cad789ca2d6a"
  },
  {
    "url": "blog/skepticism/2018/01/21/grounding/index.html",
    "revision": "e1381cc6b41e39ad3ac5fe4d5787e024"
  },
  {
    "url": "blog/skepticism/2018/01/21/index.html",
    "revision": "f1fbbc51a9e8455c1b36a4096812b0d7"
  },
  {
    "url": "blog/skepticism/2018/01/21/naturopath/index.html",
    "revision": "4fadbd840e793aa3f0f083d5bb426c85"
  },
  {
    "url": "blog/skepticism/2018/01/21/respen/index.html",
    "revision": "58e0cce47df8c7c42921573b2c32ef5a"
  },
  {
    "url": "blog/skepticism/2018/01/28/bears/index.html",
    "revision": "fca2fab4efae0f9e1280dd8084512b1e"
  },
  {
    "url": "blog/skepticism/2018/01/28/index.html",
    "revision": "b47ce4edf9413d657f730cbfa7c79aa0"
  },
  {
    "url": "blog/skepticism/2018/01/28/peppering/index.html",
    "revision": "3b98e200d58d6b3e8f1c301fa0b308ca"
  },
  {
    "url": "blog/skepticism/2018/01/28/pet/index.html",
    "revision": "fc1414bf4fecd11e6d632a7722528221"
  },
  {
    "url": "blog/skepticism/2018/01/28/quake/index.html",
    "revision": "5869d974758e0ad3bb9108683d92ec59"
  },
  {
    "url": "blog/skepticism/2018/01/28/scientology/index.html",
    "revision": "0447baf5e6158350857b6fa2a87dc637"
  },
  {
    "url": "blog/skepticism/2018/01/index.html",
    "revision": "b40f08992e43b21f99ee7d63cb920a44"
  },
  {
    "url": "blog/skepticism/2018/02/11/asa/index.html",
    "revision": "8c0a3e6c785836e3821225e898ccd62e"
  },
  {
    "url": "blog/skepticism/2018/02/11/cannabis/index.html",
    "revision": "757b0eea012c53f1b1a1a9ccea2a6443"
  },
  {
    "url": "blog/skepticism/2018/02/11/elon/index.html",
    "revision": "e900b27be35a2b9f2e1d39846dc31511"
  },
  {
    "url": "blog/skepticism/2018/02/11/homeopathy/index.html",
    "revision": "b42044f6b1b10788224c060239a3fc45"
  },
  {
    "url": "blog/skepticism/2018/02/11/index.html",
    "revision": "cd20a82256fd10d0e70b57643aa514fe"
  },
  {
    "url": "blog/skepticism/2018/02/11/water/index.html",
    "revision": "fc00b4660c204da93b9f77b749d7703e"
  },
  {
    "url": "blog/skepticism/2018/02/25/crisis/index.html",
    "revision": "1a82315f527458820b53912e73c526f8"
  },
  {
    "url": "blog/skepticism/2018/02/25/eggs/index.html",
    "revision": "3f1b50415e8b3611360ac169d5f680db"
  },
  {
    "url": "blog/skepticism/2018/02/25/fsm/index.html",
    "revision": "03d30cca9e6e0ce47b84ef59187bcfb8"
  },
  {
    "url": "blog/skepticism/2018/02/25/index.html",
    "revision": "942b1c0d04d2e67cc1779c2ef4391ccf"
  },
  {
    "url": "blog/skepticism/2018/02/25/number/index.html",
    "revision": "40f3eb3e46b61f63851b0f7622e41ed5"
  },
  {
    "url": "blog/skepticism/2018/02/25/quackery/index.html",
    "revision": "0293b0bff79f1def3a59d8b66c3d7d44"
  },
  {
    "url": "blog/skepticism/2018/02/index.html",
    "revision": "9bbf39447b93663bd2cc5f2ac8c23fbe"
  },
  {
    "url": "blog/skepticism/2018/03/11/ai/index.html",
    "revision": "70e6d39c38069b811fd1e851150db4f3"
  },
  {
    "url": "blog/skepticism/2018/03/11/index.html",
    "revision": "19ef56baa79168c96b572d4e6a89d463"
  },
  {
    "url": "blog/skepticism/2018/03/11/radiation/index.html",
    "revision": "1b35e2ee7ccc58a3a89d9b4fb0d00388"
  },
  {
    "url": "blog/skepticism/2018/03/11/reiki/index.html",
    "revision": "6c7aa935350dbc4927b554773ad5acef"
  },
  {
    "url": "blog/skepticism/2018/03/11/ufo/index.html",
    "revision": "58aafaea6c5b8b849b02b1f563606573"
  },
  {
    "url": "blog/skepticism/2018/03/18/ghost/index.html",
    "revision": "99299a35a4831b12fd3789b00fbcc6ed"
  },
  {
    "url": "blog/skepticism/2018/03/18/index.html",
    "revision": "3b7dc8040ab06c919a0c30187c8e4b68"
  },
  {
    "url": "blog/skepticism/2018/03/18/psychic/index.html",
    "revision": "c92a5e780cae82450a432ca2e4882dd0"
  },
  {
    "url": "blog/skepticism/2018/03/18/quack/index.html",
    "revision": "eb0802d1b1a0851d6dc2808ba5c94990"
  },
  {
    "url": "blog/skepticism/2018/03/18/radiation/index.html",
    "revision": "1e0d610152ec90e226b44bf79fa885e3"
  },
  {
    "url": "blog/skepticism/2018/03/index.html",
    "revision": "de5b76fe97e431b514a4083bb91fb3d0"
  },
  {
    "url": "blog/skepticism/2018/04/08/calocurb/index.html",
    "revision": "3c646b9567fb2dc183ec1d753651922b"
  },
  {
    "url": "blog/skepticism/2018/04/08/cam/index.html",
    "revision": "05101f96fc6a1dc71b1612be0a92f9ab"
  },
  {
    "url": "blog/skepticism/2018/04/08/index.html",
    "revision": "d1209a1a30cb983ed3e1ab08941384e3"
  },
  {
    "url": "blog/skepticism/2018/04/08/psychic/index.html",
    "revision": "3b1c5ffac21c2f1c48f379785061cff4"
  },
  {
    "url": "blog/skepticism/2018/04/08/vaccines/index.html",
    "revision": "d966ef1c49e04348e0b1b661fc84810e"
  },
  {
    "url": "blog/skepticism/2018/04/15/coffee/index.html",
    "revision": "c6579999e147bb827294a206ede76ee1"
  },
  {
    "url": "blog/skepticism/2018/04/15/ignorance/index.html",
    "revision": "9733a11e40e8d6a7ba6835b94773217b"
  },
  {
    "url": "blog/skepticism/2018/04/15/index.html",
    "revision": "e3f8a437a411d3d8bd0a0df4f628ace1"
  },
  {
    "url": "blog/skepticism/2018/04/15/nasa/index.html",
    "revision": "5cdcdecdae4e911814efd1aaff28874d"
  },
  {
    "url": "blog/skepticism/2018/04/15/tapu/index.html",
    "revision": "82ab2716c430847da91f19b439f5b570"
  },
  {
    "url": "blog/skepticism/2018/04/29/google/index.html",
    "revision": "6b84d5d16fbc0457832cd37a8d30bd33"
  },
  {
    "url": "blog/skepticism/2018/04/29/homeopathy/index.html",
    "revision": "907aab62a5b4a6d642aaf2578230b2a9"
  },
  {
    "url": "blog/skepticism/2018/04/29/index.html",
    "revision": "6e59755865058f12380a960a2b917677"
  },
  {
    "url": "blog/skepticism/2018/04/29/ken/index.html",
    "revision": "ddc3ab4d7d62a79d232ea19ea13c7baf"
  },
  {
    "url": "blog/skepticism/2018/04/29/v2k/index.html",
    "revision": "f8dd80e79c6fbe4830b7ad83a28f3418"
  },
  {
    "url": "blog/skepticism/2018/04/index.html",
    "revision": "972292a38678d86c8881ae9907422e9c"
  },
  {
    "url": "blog/skepticism/2018/05/13/astrology/index.html",
    "revision": "cc09b9aff58104e384a5114b1f75b91c"
  },
  {
    "url": "blog/skepticism/2018/05/13/crystals/index.html",
    "revision": "9c2355fb9ab668113f25ab06c05358ad"
  },
  {
    "url": "blog/skepticism/2018/05/13/dawkins/index.html",
    "revision": "935adf970d003f79c840f6b1c5c6d221"
  },
  {
    "url": "blog/skepticism/2018/05/13/index.html",
    "revision": "2da22bcde0328ccc95ae49705fe30925"
  },
  {
    "url": "blog/skepticism/2018/05/13/kangen/index.html",
    "revision": "72f6737aa6dbfe72696174080233451c"
  },
  {
    "url": "blog/skepticism/2018/05/13/vitamins/index.html",
    "revision": "c7fbeeea241db6a3a737d4385f0de916"
  },
  {
    "url": "blog/skepticism/2018/05/27/flat/index.html",
    "revision": "14bbb2553b7cc319bd227af3103aabe7"
  },
  {
    "url": "blog/skepticism/2018/05/27/index.html",
    "revision": "cf938625dc49a4461650ee25e971e675"
  },
  {
    "url": "blog/skepticism/2018/05/27/kangen/index.html",
    "revision": "ca03a2f5b99c5112e0013929273e361f"
  },
  {
    "url": "blog/skepticism/2018/05/27/ness/index.html",
    "revision": "6d56fef342df1f4a711a30b30f4764c3"
  },
  {
    "url": "blog/skepticism/2018/05/27/oz/index.html",
    "revision": "606cfdc7a62d5fdc2e1f4b7d5e764080"
  },
  {
    "url": "blog/skepticism/2018/05/27/psychic/index.html",
    "revision": "99fabcde75445c90469f8f8bd8b707f4"
  },
  {
    "url": "blog/skepticism/2018/05/index.html",
    "revision": "a5b2858fbd33e09cd53d9d9b086d277d"
  },
  {
    "url": "blog/skepticism/2018/06/10/astrology/index.html",
    "revision": "496db7f9da0eff69aa22afcbe4a8f33b"
  },
  {
    "url": "blog/skepticism/2018/06/10/index.html",
    "revision": "6414dea1423ab786eaba008a1561617a"
  },
  {
    "url": "blog/skepticism/2018/06/10/nhs/index.html",
    "revision": "96ac1f4ddc517e1371b09691c81130e0"
  },
  {
    "url": "blog/skepticism/2018/06/10/shakti/index.html",
    "revision": "f370feaa980e57731996710f4b606bbf"
  },
  {
    "url": "blog/skepticism/2018/06/10/weetbix/index.html",
    "revision": "af595770b1b343abfeb143d1c867fd07"
  },
  {
    "url": "blog/skepticism/2018/06/24/blasphemy/index.html",
    "revision": "554543e2ece997c2ea7b676a2c61f83e"
  },
  {
    "url": "blog/skepticism/2018/06/24/cannabis/index.html",
    "revision": "43bf56bed58f68cdf110af449bb85dd5"
  },
  {
    "url": "blog/skepticism/2018/06/24/hotdog/index.html",
    "revision": "a167ff673301539aaa5de3994bac4a3c"
  },
  {
    "url": "blog/skepticism/2018/06/24/index.html",
    "revision": "759c796a1f28f575d76dd2aed70e2636"
  },
  {
    "url": "blog/skepticism/2018/06/24/led/index.html",
    "revision": "0cec66f9a67dd92dfd324129ad494b71"
  },
  {
    "url": "blog/skepticism/2018/06/index.html",
    "revision": "fd0adc47c8d00b71020fe034cd55e0b6"
  },
  {
    "url": "blog/skepticism/2018/07/08/bullet/index.html",
    "revision": "d83dd91ab83a451f355c9d2e61c20ac1"
  },
  {
    "url": "blog/skepticism/2018/07/08/chiros/index.html",
    "revision": "4e417fd1feb9f9e39ea02877c6cd8003"
  },
  {
    "url": "blog/skepticism/2018/07/08/hiv/index.html",
    "revision": "cac0bf4f0c36112283b922a0fbdb6f3b"
  },
  {
    "url": "blog/skepticism/2018/07/08/hrv/index.html",
    "revision": "d7ebea1b87111c5c0eb6676321623f3d"
  },
  {
    "url": "blog/skepticism/2018/07/08/index.html",
    "revision": "0112598664796f2ec72a783025448e16"
  },
  {
    "url": "blog/skepticism/2018/07/22/cancer/index.html",
    "revision": "dedba61a2a15b4e73152f905c65d2230"
  },
  {
    "url": "blog/skepticism/2018/07/22/index.html",
    "revision": "833cc4fd163af6bda7625e73558cc2a8"
  },
  {
    "url": "blog/skepticism/2018/07/22/resurrection/index.html",
    "revision": "5ce3329e7469ba560469a3bee33ea4f7"
  },
  {
    "url": "blog/skepticism/2018/07/22/talc/index.html",
    "revision": "c11f8ae343d0afad20c5027ddc4174ff"
  },
  {
    "url": "blog/skepticism/2018/07/22/visas/index.html",
    "revision": "890decc17b243088c0f5c77896c5b861"
  },
  {
    "url": "blog/skepticism/2018/07/index.html",
    "revision": "c2a528d0aa1fdd68627239d87891e6df"
  },
  {
    "url": "blog/skepticism/2018/08/05/conf/index.html",
    "revision": "76b1b4fd9e4ee2c0587e049c878c35c4"
  },
  {
    "url": "blog/skepticism/2018/08/05/index.html",
    "revision": "7ea9bf7cadf42c58180afc2ef1197cc6"
  },
  {
    "url": "blog/skepticism/2018/08/05/qanon/index.html",
    "revision": "2049492cf2c014105f7528bde43a7096"
  },
  {
    "url": "blog/skepticism/2018/08/19/index.html",
    "revision": "db716ce6520dd6aaad84b6e1b34b30eb"
  },
  {
    "url": "blog/skepticism/2018/08/19/jw/index.html",
    "revision": "5f038b354490df1aeebdd37e5d29adda"
  },
  {
    "url": "blog/skepticism/2018/08/index.html",
    "revision": "84aecb3b28689ec577ae526f9cee5058"
  },
  {
    "url": "blog/skepticism/2018/09/02/allergy/index.html",
    "revision": "f4cc88c9cf4487b0395c8c1324d7cf20"
  },
  {
    "url": "blog/skepticism/2018/09/02/catholic/index.html",
    "revision": "2d041bfc64240af23e8b78c3a7e95c27"
  },
  {
    "url": "blog/skepticism/2018/09/02/index.html",
    "revision": "fd4df582cce25a1c33179b00862aab17"
  },
  {
    "url": "blog/skepticism/2018/09/02/jw/index.html",
    "revision": "b2260a78a87b7df564acf7aabbf82b10"
  },
  {
    "url": "blog/skepticism/2018/09/02/sen/index.html",
    "revision": "2fc0cb8085b35bf426738b70a774a377"
  },
  {
    "url": "blog/skepticism/2018/09/16/1080/index.html",
    "revision": "cd4e124b808605077197b0367a1bb21b"
  },
  {
    "url": "blog/skepticism/2018/09/16/church/index.html",
    "revision": "4ee363293fe6d0de37aa1d5b1259cb7c"
  },
  {
    "url": "blog/skepticism/2018/09/16/index.html",
    "revision": "8f6315fe4850e1fa2bca43c4e269f156"
  },
  {
    "url": "blog/skepticism/2018/09/16/jones/index.html",
    "revision": "e4dbf026c0b4feb7818162b15fdfdb67"
  },
  {
    "url": "blog/skepticism/2018/09/16/scammers/index.html",
    "revision": "564028fafd26004a551aa2f508f63e81"
  },
  {
    "url": "blog/skepticism/2018/09/30/index.html",
    "revision": "ddd0954fd0ab1761f8ae8819a80ae1db"
  },
  {
    "url": "blog/skepticism/2018/09/30/jw/index.html",
    "revision": "9c25abc7139f6dfb8afed39aac43b2c1"
  },
  {
    "url": "blog/skepticism/2018/09/30/oto/index.html",
    "revision": "afa568f1090b2ddf5e73843174e8fcc5"
  },
  {
    "url": "blog/skepticism/2018/09/30/who/index.html",
    "revision": "ea99ac1b7988297f6e6803d248c756f0"
  },
  {
    "url": "blog/skepticism/2018/09/index.html",
    "revision": "118f4cc1f6795d9df20d06afb43f32f8"
  },
  {
    "url": "blog/skepticism/2018/10/14/hacked/index.html",
    "revision": "c3ef055f69ddbd4453d701b6d742f531"
  },
  {
    "url": "blog/skepticism/2018/10/14/index.html",
    "revision": "3c20fb6791c581c5d31a157b8b6a2176"
  },
  {
    "url": "blog/skepticism/2018/10/14/kangen/index.html",
    "revision": "bb810c97c17946484a17a13dcbb08197"
  },
  {
    "url": "blog/skepticism/2018/10/14/pakistan/index.html",
    "revision": "367d35bcb3781be46bb6085d91394685"
  },
  {
    "url": "blog/skepticism/2018/10/14/sarah/index.html",
    "revision": "7eff1ce6ad12ecc9813cc70451c56a4b"
  },
  {
    "url": "blog/skepticism/2018/10/28/blasphemy/index.html",
    "revision": "e4b4f9b6d0398384a117006a30f4e5ef"
  },
  {
    "url": "blog/skepticism/2018/10/28/hrv/index.html",
    "revision": "2eff1a1f76bf57a9555656ea81126b8f"
  },
  {
    "url": "blog/skepticism/2018/10/28/index.html",
    "revision": "8bc56da09269b2ac904b0ed30fe4ee61"
  },
  {
    "url": "blog/skepticism/2018/10/28/jesus/index.html",
    "revision": "3958ff9a9755e03c93bb14664900d167"
  },
  {
    "url": "blog/skepticism/2018/10/28/natural/index.html",
    "revision": "29dfe102c21baaa55ff26247904261c6"
  },
  {
    "url": "blog/skepticism/2018/10/index.html",
    "revision": "2b3841086194eadeb5743a6e23fe3bfb"
  },
  {
    "url": "blog/skepticism/2018/11/04/bibi/index.html",
    "revision": "9c662ed9c73bd39ee7e9294a9ce663d6"
  },
  {
    "url": "blog/skepticism/2018/11/04/index.html",
    "revision": "c345e7cd97613378fbb34ac370b24792"
  },
  {
    "url": "blog/skepticism/2018/11/04/jesus/index.html",
    "revision": "743777709af09cd6c1eefd5ae98fc87e"
  },
  {
    "url": "blog/skepticism/2018/11/04/obdii/index.html",
    "revision": "f30b5af5b7e154b92a4e3ee6de222f77"
  },
  {
    "url": "blog/skepticism/2018/11/04/sleepdrops/index.html",
    "revision": "567936f826f8ec67b9db8ad75e0ab0c7"
  },
  {
    "url": "blog/skepticism/2018/11/index.html",
    "revision": "d6af8b144b75d0cbf07d5e74b786de4d"
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
    "revision": "c2221414d98243b4a8d4c942efbb1691"
  },
  {
    "url": "blog/skepticism/2018/12/02/ri/index.html",
    "revision": "fd500c7bf49643d11ed18d308abd9ced"
  },
  {
    "url": "blog/skepticism/2018/12/16/blasphemy/index.html",
    "revision": "df3c71ae3c96860d2360ab0d99537700"
  },
  {
    "url": "blog/skepticism/2018/12/16/index.html",
    "revision": "45576c7e58df776d398a6b08eb417862"
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
    "revision": "541e26f5204a06680e255d6448fe837d"
  },
  {
    "url": "blog/skepticism/2018/index.html",
    "revision": "1650eb74691613404ea2320f85c6efa8"
  },
  {
    "url": "blog/skepticism/index.html",
    "revision": "65fde9f0f4ae06bc4c63ae4026f99da0"
  },
  {
    "url": "blog/tag/index.html",
    "revision": "9205fb2bdb5a2e020dd5c34ba5b6f966"
  },
  {
    "url": "contact/index.html",
    "revision": "58cceec36bfd65bec0958cbb233d1611"
  },
  {
    "url": "cv/cover/index.html",
    "revision": "ae5a113d6ded33c94ed71dd4b5a1bb41"
  },
  {
    "url": "cv/index.html",
    "revision": "d3da680812465ba27ac3e7149c4251a9"
  },
  {
    "url": "googlee25d0c06da891164.html",
    "revision": "0defe75660212f417b90c5affcd03380"
  },
  {
    "url": "index.html",
    "revision": "ef3f647c8910592e5bce4e2a41e17e72"
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
    "revision": "471e5e8df77d09936fb548efe07b3f2c"
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
    "revision": "aca4ce272b1444b8e09f4a4499840884"
  },
  {
    "url": "status/index.html",
    "revision": "0b5b6c8323d6c48a2259a131cb7ec846"
  },
  {
    "url": "status/steam/index.html",
    "revision": "4970553240330c7f07503d9644bcd7c2"
  },
  {
    "url": "status/twitter/index.html",
    "revision": "9fffe3ebd9108494da495201b00bbfce"
  },
  {
    "url": "status/wikipedia/index.html",
    "revision": "952473816560ff7ac58fc26d73b064f1"
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
