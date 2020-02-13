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
    "revision": "7724c527f8e1b7c7cd17c7855b023eed"
  },
  {
    "url": "assets/css/0.styles.css",
    "revision": "a208887ca827c5dce64468e17d5474ca"
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
    "url": "assets/img/1920px-Aura-Interactor-force-feedback-vest.jpg",
    "revision": "6230b858965ed2024ab2c8bb47b5887d"
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
    "url": "assets/img/binvis.io.gif",
    "revision": "8aa6569ac33ee44a25ffef9a6d4a1c34"
  },
  {
    "url": "assets/img/BinVis.jpg",
    "revision": "e08724909effbc18f73acbb87bbc1c76"
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
    "url": "assets/img/Ghidra.jpg",
    "revision": "af9f296296502dba400aad88fa310a98"
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
    "url": "assets/img/IDA.jpg",
    "revision": "29799ee477cfa847a6885e3c41875e97"
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
    "url": "assets/img/VelesHex.jpg",
    "revision": "1be39a1c4be6a30a54960756cb25b3f8"
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
    "revision": "8bb4a268794525d60f6fa55cf45f42ac"
  },
  {
    "url": "assets/js/10.js",
    "revision": "19c11530a4dc5ff75968c25d692642f4"
  },
  {
    "url": "assets/js/100.js",
    "revision": "748c367340b5967687a6284b615051ce"
  },
  {
    "url": "assets/js/101.js",
    "revision": "e746fa0e1d1d834014688a5e984e2f1e"
  },
  {
    "url": "assets/js/102.js",
    "revision": "3a43c8af576cf1944f9bebc26c4cb770"
  },
  {
    "url": "assets/js/103.js",
    "revision": "787593be947b1610a63682a3eb657268"
  },
  {
    "url": "assets/js/104.js",
    "revision": "a7386547887524a5f5868b30cb436960"
  },
  {
    "url": "assets/js/105.js",
    "revision": "a33f18731fc8892085dea1cb957f8c2c"
  },
  {
    "url": "assets/js/106.js",
    "revision": "aec03dd7a52f826714e81b0b905b8365"
  },
  {
    "url": "assets/js/107.js",
    "revision": "94308d347a59816338686dea053634c6"
  },
  {
    "url": "assets/js/108.js",
    "revision": "96305a11ba9cfeabaff1c5d63be925e7"
  },
  {
    "url": "assets/js/109.js",
    "revision": "8f3d6d0bda22de53e76838caca75cfdf"
  },
  {
    "url": "assets/js/11.js",
    "revision": "79433ccb754694e3ed6fe8a4b7cda720"
  },
  {
    "url": "assets/js/110.js",
    "revision": "ab3202735d9bf3a009d73f7323384011"
  },
  {
    "url": "assets/js/111.js",
    "revision": "9e02319128d61ca3ea0049e035f7200a"
  },
  {
    "url": "assets/js/112.js",
    "revision": "842235df71587bb9a5e57276fbfeb820"
  },
  {
    "url": "assets/js/113.js",
    "revision": "f975b4d0a0bf123c93ce979b992750f7"
  },
  {
    "url": "assets/js/114.js",
    "revision": "9a48736014272f75ae254b0344b7bb75"
  },
  {
    "url": "assets/js/115.js",
    "revision": "2c71d03f692fb0f4e7a6135adb8d2350"
  },
  {
    "url": "assets/js/116.js",
    "revision": "c71c0ecf5cde2828ad8de23bfe1a1d2b"
  },
  {
    "url": "assets/js/117.js",
    "revision": "04b29697e51ff756787c211ca95aab59"
  },
  {
    "url": "assets/js/118.js",
    "revision": "040a47e8d82828814aebe3de0deb9482"
  },
  {
    "url": "assets/js/119.js",
    "revision": "245d8d60228f394df25144977e1815dc"
  },
  {
    "url": "assets/js/12.js",
    "revision": "87c51b67039cf6782903fdda12e41e5a"
  },
  {
    "url": "assets/js/120.js",
    "revision": "36bdecd46a8e37e517e839fa745f11cb"
  },
  {
    "url": "assets/js/121.js",
    "revision": "1c870b3b5f8c860ab73eba8bda3a497d"
  },
  {
    "url": "assets/js/122.js",
    "revision": "fd63d4b5122407fa8351280e319afeba"
  },
  {
    "url": "assets/js/123.js",
    "revision": "5ff4619fbd172f82d90ef8764fd5396b"
  },
  {
    "url": "assets/js/124.js",
    "revision": "fbc6381b7596975e8e8986cae628da30"
  },
  {
    "url": "assets/js/125.js",
    "revision": "d2e760a25ed7131e18246bb0ee8995d4"
  },
  {
    "url": "assets/js/126.js",
    "revision": "1fc12f802f00662c3a84f3b1cd79ff5c"
  },
  {
    "url": "assets/js/127.js",
    "revision": "b46d701f3463e94678d575119b7df0a0"
  },
  {
    "url": "assets/js/128.js",
    "revision": "277ad632fea8aeebedffbd339d4cea15"
  },
  {
    "url": "assets/js/129.js",
    "revision": "60fc0db473bc900abfe9d6cb6a8efb36"
  },
  {
    "url": "assets/js/13.js",
    "revision": "5ff08ebfb062291af6b7a276ac60b787"
  },
  {
    "url": "assets/js/130.js",
    "revision": "d25b02c5995e83af0176851986f7b9b1"
  },
  {
    "url": "assets/js/131.js",
    "revision": "4cb289b837d6fd0da43a5e1badd9b7f7"
  },
  {
    "url": "assets/js/132.js",
    "revision": "eb51ebf942a2eedafbea0984ab1de20a"
  },
  {
    "url": "assets/js/133.js",
    "revision": "0796cd1723dd6ca3b20575e1cf292fb8"
  },
  {
    "url": "assets/js/134.js",
    "revision": "ec133be6576477073204c8995dcecdfe"
  },
  {
    "url": "assets/js/135.js",
    "revision": "37fa08e24066922aa07a9e956a10c1a3"
  },
  {
    "url": "assets/js/136.js",
    "revision": "1dcadb11373cbbec409031b3604c3d8f"
  },
  {
    "url": "assets/js/137.js",
    "revision": "ebc36930fb51d5e8e88404e724999dbe"
  },
  {
    "url": "assets/js/138.js",
    "revision": "43b99c74c21bdec285149e7107d9b0e9"
  },
  {
    "url": "assets/js/139.js",
    "revision": "afab4a4a42242471aad5d9e93424767d"
  },
  {
    "url": "assets/js/14.js",
    "revision": "e25f5aeece5fbe7e74127914154ba1b8"
  },
  {
    "url": "assets/js/140.js",
    "revision": "6dbd843c9347a93e74f4e3c8a1ebdd70"
  },
  {
    "url": "assets/js/141.js",
    "revision": "1fe7a18bd863ff95121c943a644383ad"
  },
  {
    "url": "assets/js/142.js",
    "revision": "50ab90e420d9adb8cb62ff35f7931d75"
  },
  {
    "url": "assets/js/143.js",
    "revision": "004ff680c69b5f895145fe39435e70a3"
  },
  {
    "url": "assets/js/144.js",
    "revision": "18a8c583bbe2c4690e6dcc6508a7f6c9"
  },
  {
    "url": "assets/js/145.js",
    "revision": "0419a7b6b736252404cd5b3e4ad64c7b"
  },
  {
    "url": "assets/js/146.js",
    "revision": "091bc5d2e1c41ce5d9826599914e3355"
  },
  {
    "url": "assets/js/147.js",
    "revision": "8f4397d5ae5bad7af6f4783ec9ca81f9"
  },
  {
    "url": "assets/js/148.js",
    "revision": "9de095a9bb18e2961ca06ef374eb2cf4"
  },
  {
    "url": "assets/js/149.js",
    "revision": "2e3cc27889e5f73c9d73d6c1c3d28b4d"
  },
  {
    "url": "assets/js/15.js",
    "revision": "f259125f4094925b63b7b76a92a5900d"
  },
  {
    "url": "assets/js/150.js",
    "revision": "3c605a25c062aaf52dfd9b13103bcf69"
  },
  {
    "url": "assets/js/151.js",
    "revision": "bb4562fdc32905d4bf8f60fe4fad06dd"
  },
  {
    "url": "assets/js/152.js",
    "revision": "a52332233c365d206aea29883ff984cf"
  },
  {
    "url": "assets/js/153.js",
    "revision": "9e5d583e17b61757ded47b753d8fceab"
  },
  {
    "url": "assets/js/154.js",
    "revision": "9ff091d4fd90b8d2728748786dba37e6"
  },
  {
    "url": "assets/js/155.js",
    "revision": "a024dce285f9675c2103692c6c83e0b9"
  },
  {
    "url": "assets/js/156.js",
    "revision": "ec5fd6575eaaecd3b6ef9ae9cf7bf827"
  },
  {
    "url": "assets/js/157.js",
    "revision": "36be95bb66a03dc624d57294461d2b88"
  },
  {
    "url": "assets/js/158.js",
    "revision": "166c2d9c1f88f226adc71615f144831c"
  },
  {
    "url": "assets/js/159.js",
    "revision": "8b3efc3f6694962443128a3f8b914e6c"
  },
  {
    "url": "assets/js/16.js",
    "revision": "628c910666092119c9dfc2bf31c4e914"
  },
  {
    "url": "assets/js/160.js",
    "revision": "45560ea344a0fb81ecff370d788a58b7"
  },
  {
    "url": "assets/js/161.js",
    "revision": "88fd9cc467e378f95e6c31a5fdce1787"
  },
  {
    "url": "assets/js/162.js",
    "revision": "0065e38fddfd19f772fc4abaf802bf34"
  },
  {
    "url": "assets/js/163.js",
    "revision": "a143a1ffd16ad9c74c6a673aaf09aa95"
  },
  {
    "url": "assets/js/164.js",
    "revision": "6b4406572883b8c10367ea0d688bbd76"
  },
  {
    "url": "assets/js/165.js",
    "revision": "0e4e63ccc72f428f46c316976c702674"
  },
  {
    "url": "assets/js/166.js",
    "revision": "e6cd066ccc8f8b61009b2826ab9e6a91"
  },
  {
    "url": "assets/js/167.js",
    "revision": "cefabf0cbdb9d688abfec0c0036fbe0f"
  },
  {
    "url": "assets/js/168.js",
    "revision": "80bbd2c8a63b47e22da68507edff1199"
  },
  {
    "url": "assets/js/169.js",
    "revision": "d04b56f36fe478b7ea16aa1ab0218f3b"
  },
  {
    "url": "assets/js/17.js",
    "revision": "d6a152f611e182b9f38d45b5e2c7d4d1"
  },
  {
    "url": "assets/js/170.js",
    "revision": "de79560afc39fe6bf403319e72a5c65e"
  },
  {
    "url": "assets/js/171.js",
    "revision": "500b05634bd68ffd3fe8a93533dc1e0a"
  },
  {
    "url": "assets/js/172.js",
    "revision": "a7f800947ef3f87fd211d67f1a96ad88"
  },
  {
    "url": "assets/js/173.js",
    "revision": "8532463695b57935c130fb54044724eb"
  },
  {
    "url": "assets/js/174.js",
    "revision": "18bb3b366f14619d446f1da228fed2f0"
  },
  {
    "url": "assets/js/175.js",
    "revision": "632c520b747fbb8ea0241c286f986830"
  },
  {
    "url": "assets/js/176.js",
    "revision": "404731174af1cbf06fbde6e4d76b2794"
  },
  {
    "url": "assets/js/177.js",
    "revision": "7ae7d95fbfcf2edbab8aca3938c9399e"
  },
  {
    "url": "assets/js/178.js",
    "revision": "2ddb7ade6a571cd6fa96de784d8dae6c"
  },
  {
    "url": "assets/js/179.js",
    "revision": "4dbed3e564d1e00a96481291aa608656"
  },
  {
    "url": "assets/js/18.js",
    "revision": "a61eae69006a8b34175b49d6098c490e"
  },
  {
    "url": "assets/js/180.js",
    "revision": "fbbfcf4727b0866366a0c9d98c43c186"
  },
  {
    "url": "assets/js/181.js",
    "revision": "f5ef14e607c397cf256af34f50c40db2"
  },
  {
    "url": "assets/js/182.js",
    "revision": "e27ac18b8716b31838801314914e8c0c"
  },
  {
    "url": "assets/js/183.js",
    "revision": "39baba862588e349c0210789c8c7f944"
  },
  {
    "url": "assets/js/184.js",
    "revision": "d07a9e27b36b89469558b64dbb37daaf"
  },
  {
    "url": "assets/js/185.js",
    "revision": "29ac3e0058d370c137a56face61b38b8"
  },
  {
    "url": "assets/js/186.js",
    "revision": "189ed9d62bbdfbefd659876eb40d0a14"
  },
  {
    "url": "assets/js/187.js",
    "revision": "272dbf6c62c02163e050a46e2f725bd3"
  },
  {
    "url": "assets/js/188.js",
    "revision": "8979cf75e04e898a17d30436fc8c793f"
  },
  {
    "url": "assets/js/189.js",
    "revision": "674e8c20eac641854ebad4dca223fd2d"
  },
  {
    "url": "assets/js/19.js",
    "revision": "26200a543d167bc4f120cc6cd8132660"
  },
  {
    "url": "assets/js/190.js",
    "revision": "31372f11353c5183d9b9f51c32058be3"
  },
  {
    "url": "assets/js/191.js",
    "revision": "82301bfcac66df847e359d5404b9cf0e"
  },
  {
    "url": "assets/js/192.js",
    "revision": "9116cbc6dede8f4adf03efd8126914fb"
  },
  {
    "url": "assets/js/193.js",
    "revision": "2dbadf4ba01e9b7315ab4ac586bcf92f"
  },
  {
    "url": "assets/js/194.js",
    "revision": "4a8e8cc0db09546bb9c6c932785b1f3a"
  },
  {
    "url": "assets/js/195.js",
    "revision": "8fce83224d83f1c4adcf9dd4cd477026"
  },
  {
    "url": "assets/js/196.js",
    "revision": "3660cc228546d631cbacb2fae70ea85b"
  },
  {
    "url": "assets/js/197.js",
    "revision": "e164c6bb90390b7ed2afd88c7413eb64"
  },
  {
    "url": "assets/js/198.js",
    "revision": "388d0e0d96a22fa5d12c9e34864c69df"
  },
  {
    "url": "assets/js/199.js",
    "revision": "a50512cabfc978de1fb385522ac61eb0"
  },
  {
    "url": "assets/js/2.js",
    "revision": "a4154b43cbd282c135ae4d6999507fc1"
  },
  {
    "url": "assets/js/20.js",
    "revision": "6aa157330ba2e224271d7708bc4520f4"
  },
  {
    "url": "assets/js/200.js",
    "revision": "20a01a94c2250b1f7d2756f18dd27040"
  },
  {
    "url": "assets/js/201.js",
    "revision": "ec69d7b1cfaffbd5675c96d410687a16"
  },
  {
    "url": "assets/js/202.js",
    "revision": "56ad2617a7dc4ed6df4b3ddd73e71707"
  },
  {
    "url": "assets/js/203.js",
    "revision": "eae0328d1baea24b5456b3d90133040d"
  },
  {
    "url": "assets/js/204.js",
    "revision": "8eddc1b3d7920b958a2106740eb38e25"
  },
  {
    "url": "assets/js/205.js",
    "revision": "4fddbe4c4e3cd4fdc8c8847747e7252d"
  },
  {
    "url": "assets/js/206.js",
    "revision": "a239184ac3b513e1bec0203664fc525d"
  },
  {
    "url": "assets/js/207.js",
    "revision": "2e416fb0cfe8e04157ae69d7205e7bab"
  },
  {
    "url": "assets/js/208.js",
    "revision": "b618a4ddb286e9f8f12401feb2a18311"
  },
  {
    "url": "assets/js/209.js",
    "revision": "9188e79c9ae65269a5735b1cee0ee9a7"
  },
  {
    "url": "assets/js/21.js",
    "revision": "7989d3a287ca5e1ee641d6c6d0679bc1"
  },
  {
    "url": "assets/js/210.js",
    "revision": "0019d3d1ef293a4f8d098197f83271e4"
  },
  {
    "url": "assets/js/211.js",
    "revision": "2d0344183da7a83199c63101673e7168"
  },
  {
    "url": "assets/js/212.js",
    "revision": "419ac3bec5eb25c93b5d6c31b879ecdb"
  },
  {
    "url": "assets/js/213.js",
    "revision": "3350d9ef922a3b2d63bd9ee6aa044b34"
  },
  {
    "url": "assets/js/214.js",
    "revision": "c6bd754a51c45d62812c632bc6247577"
  },
  {
    "url": "assets/js/215.js",
    "revision": "8bb407c600cce945b44cb5d8e0bdfb2f"
  },
  {
    "url": "assets/js/216.js",
    "revision": "760dc82ceb13d4668ae129cc4884bd15"
  },
  {
    "url": "assets/js/217.js",
    "revision": "075e9485e4e75a30e63b9aeb38993f93"
  },
  {
    "url": "assets/js/218.js",
    "revision": "0df98fe50198f447e5454f0d6ded5ead"
  },
  {
    "url": "assets/js/219.js",
    "revision": "2c1fe0fd3339aeab9011c1d68e73e304"
  },
  {
    "url": "assets/js/22.js",
    "revision": "bf543087acc089981051b5bf0645620a"
  },
  {
    "url": "assets/js/220.js",
    "revision": "3539e915c3b13452fa732e63b3c8d507"
  },
  {
    "url": "assets/js/221.js",
    "revision": "a423bdc19b2e6238b9125eee427af63c"
  },
  {
    "url": "assets/js/222.js",
    "revision": "abc5302bb267473bb7bafcda86b6d621"
  },
  {
    "url": "assets/js/223.js",
    "revision": "92f6182e1e01720081c89d605cf2e38c"
  },
  {
    "url": "assets/js/224.js",
    "revision": "55f990c52fa157cc5a5fc66b40eedc85"
  },
  {
    "url": "assets/js/225.js",
    "revision": "007199ae22d0ab5791525eae854af811"
  },
  {
    "url": "assets/js/226.js",
    "revision": "2d4c1189943efabfa6863999948965f9"
  },
  {
    "url": "assets/js/227.js",
    "revision": "413c6b7d619c45745f4a5fc8ef07208d"
  },
  {
    "url": "assets/js/228.js",
    "revision": "9fe61f2720cb6e759102b134e96bc580"
  },
  {
    "url": "assets/js/229.js",
    "revision": "d175c75c1b59cddd80cb87fb79761817"
  },
  {
    "url": "assets/js/23.js",
    "revision": "6af3b22be4e8f10d3241c854195e2a01"
  },
  {
    "url": "assets/js/230.js",
    "revision": "7e3bd23c7bb3552da540e073e93acc83"
  },
  {
    "url": "assets/js/231.js",
    "revision": "80d3525793bbe280d283f5175db831d6"
  },
  {
    "url": "assets/js/232.js",
    "revision": "2025ea6547d8a077d047c00647b7dfc1"
  },
  {
    "url": "assets/js/233.js",
    "revision": "c46a5a88f821b5aedfe50878a57a4fe8"
  },
  {
    "url": "assets/js/234.js",
    "revision": "b49080435c5ed88f1486c480f14ae643"
  },
  {
    "url": "assets/js/235.js",
    "revision": "6275ab016d56ce8cc6d3671b45aac970"
  },
  {
    "url": "assets/js/236.js",
    "revision": "02353a02e6f1d0c3a56fea9ccf2a2df0"
  },
  {
    "url": "assets/js/237.js",
    "revision": "546a1d49f87f6c7d7868853c500a0464"
  },
  {
    "url": "assets/js/238.js",
    "revision": "d627d0a4ed230bf773581253b9b1b890"
  },
  {
    "url": "assets/js/239.js",
    "revision": "0ec1960cb7ea4312b0529022870af574"
  },
  {
    "url": "assets/js/24.js",
    "revision": "08ac02b6cd378c2988eb2485f40e680d"
  },
  {
    "url": "assets/js/240.js",
    "revision": "5ac877df91ac7ae381b658658d4d718b"
  },
  {
    "url": "assets/js/241.js",
    "revision": "e380881b93547daa13ea17d26a02ea8b"
  },
  {
    "url": "assets/js/242.js",
    "revision": "a69befcd1ab2bf00a2db7a4e473b0f5b"
  },
  {
    "url": "assets/js/243.js",
    "revision": "e714f01b42469e0b11692c05f2b1b81a"
  },
  {
    "url": "assets/js/244.js",
    "revision": "755daedde356864320c148e9c8893d4d"
  },
  {
    "url": "assets/js/245.js",
    "revision": "b4934929fae4615d4f0f05ea00144e48"
  },
  {
    "url": "assets/js/246.js",
    "revision": "ca3f4b8de12f970658aa13c353148b52"
  },
  {
    "url": "assets/js/247.js",
    "revision": "245c0efdfa752a009b2541789082fdea"
  },
  {
    "url": "assets/js/248.js",
    "revision": "c8cf2a7b76f5306cbca9d54160784390"
  },
  {
    "url": "assets/js/249.js",
    "revision": "8bca16f2098a2111813864ebc6d33c48"
  },
  {
    "url": "assets/js/25.js",
    "revision": "0eadc54f9eae2cfc6c917d987a0c1999"
  },
  {
    "url": "assets/js/250.js",
    "revision": "0b11bb8af1ff7e27608b21f8680f9daa"
  },
  {
    "url": "assets/js/251.js",
    "revision": "c8a67807aff9b097cbc34999fcf5580f"
  },
  {
    "url": "assets/js/252.js",
    "revision": "2e237ece6232fbdca535750eed0fde37"
  },
  {
    "url": "assets/js/253.js",
    "revision": "2d9974caf7d15fcf18963ff29992fe02"
  },
  {
    "url": "assets/js/254.js",
    "revision": "7b493ed88e5384fe26d3eccd064d825b"
  },
  {
    "url": "assets/js/255.js",
    "revision": "5d717750a7511ee3def09e03d44463ab"
  },
  {
    "url": "assets/js/256.js",
    "revision": "b09031004a206ddbde02c45ea92f78bf"
  },
  {
    "url": "assets/js/257.js",
    "revision": "606ce46483586a44b75db47a57ec421d"
  },
  {
    "url": "assets/js/258.js",
    "revision": "939e8d4427da31f5849bc4853344c62b"
  },
  {
    "url": "assets/js/259.js",
    "revision": "d7d3c84e6f145084ac7c43700c02f925"
  },
  {
    "url": "assets/js/26.js",
    "revision": "5e4d3355530b2c22ee8d80d90055e79b"
  },
  {
    "url": "assets/js/260.js",
    "revision": "b02d68ca4236decc984974e842cabab9"
  },
  {
    "url": "assets/js/261.js",
    "revision": "e8fb6646c62025f1f9fa5d7fda3f2a21"
  },
  {
    "url": "assets/js/262.js",
    "revision": "1ccfa68d1f9a3436164f099b6a662670"
  },
  {
    "url": "assets/js/263.js",
    "revision": "9fb9e7ee532da1740acfe6abdf2a293b"
  },
  {
    "url": "assets/js/264.js",
    "revision": "ba715ee02f7cf79cd0167366f7a1889b"
  },
  {
    "url": "assets/js/265.js",
    "revision": "2acc4d96f887e6f5b749f85ce521e887"
  },
  {
    "url": "assets/js/266.js",
    "revision": "9c730ed6e4b30a90afb6ceffdf5e0ae5"
  },
  {
    "url": "assets/js/267.js",
    "revision": "3ab93a2f74e4d6e272bcbce325c56d8a"
  },
  {
    "url": "assets/js/268.js",
    "revision": "77fbddd267957501f2ad4bd856ae478c"
  },
  {
    "url": "assets/js/269.js",
    "revision": "fde7717d9c02d628966b1b939fd3bcf0"
  },
  {
    "url": "assets/js/27.js",
    "revision": "4d6a21983752d5cdde400c2bba150f0e"
  },
  {
    "url": "assets/js/270.js",
    "revision": "896e36458fb018cd098e94199e5ef0b8"
  },
  {
    "url": "assets/js/271.js",
    "revision": "bfe05791ea837699bf478e83422c76b1"
  },
  {
    "url": "assets/js/272.js",
    "revision": "1d67eaa6649fe57186dc19706d3188c5"
  },
  {
    "url": "assets/js/273.js",
    "revision": "462026b97063e09727c37f4b6a2f3a5f"
  },
  {
    "url": "assets/js/274.js",
    "revision": "b22f329a5854a251664ea3961236825e"
  },
  {
    "url": "assets/js/275.js",
    "revision": "d8ad337d699bfd7bf3858c9ab261d8e7"
  },
  {
    "url": "assets/js/276.js",
    "revision": "61b5424cb0fded00b6227a60b75274ff"
  },
  {
    "url": "assets/js/277.js",
    "revision": "30249162b102dbe4a77dd7a1159e85e0"
  },
  {
    "url": "assets/js/278.js",
    "revision": "047bb136543b69c25b059320e456224c"
  },
  {
    "url": "assets/js/279.js",
    "revision": "cd97a3659b53f28776ae41a0e8877c2b"
  },
  {
    "url": "assets/js/28.js",
    "revision": "e50051a23df9ca9e2fa3f04b1f7ee59f"
  },
  {
    "url": "assets/js/280.js",
    "revision": "c4b9e5b9ead104e5fb79474702fce95a"
  },
  {
    "url": "assets/js/281.js",
    "revision": "af57e6b1af3f531fa056027f79c5746b"
  },
  {
    "url": "assets/js/282.js",
    "revision": "2d0f8f4a1c5e8c24f485aa6033420916"
  },
  {
    "url": "assets/js/283.js",
    "revision": "ea9ee53ed1d5dfecd488edaa8c8967d6"
  },
  {
    "url": "assets/js/284.js",
    "revision": "8e7643a4aadd5789c76f9db34692b56f"
  },
  {
    "url": "assets/js/285.js",
    "revision": "91826263de83a120e439ffa5571f989b"
  },
  {
    "url": "assets/js/286.js",
    "revision": "9b9a27ac0bdda9eceeeea1a10e559fb8"
  },
  {
    "url": "assets/js/287.js",
    "revision": "0187ba9b434fdaf19d5032fc731d7a38"
  },
  {
    "url": "assets/js/288.js",
    "revision": "3bb534a83f229a3f71e83e32e96aa40c"
  },
  {
    "url": "assets/js/289.js",
    "revision": "1d9dbd66da6f0fd69b692dc74d103123"
  },
  {
    "url": "assets/js/29.js",
    "revision": "40b8c830607e01c867d4aee8f3dc54b5"
  },
  {
    "url": "assets/js/290.js",
    "revision": "f4efe941885a6786266a8fffbc7c2e21"
  },
  {
    "url": "assets/js/291.js",
    "revision": "af004f42daba413fb1543dae081281e4"
  },
  {
    "url": "assets/js/292.js",
    "revision": "47ffccf1858f3535d6e6a04a7cb8a8e2"
  },
  {
    "url": "assets/js/293.js",
    "revision": "fce3776dd1bc06ceadbcc58a7c2be6fa"
  },
  {
    "url": "assets/js/294.js",
    "revision": "8c5dbd9c9c3544487048706598b37eca"
  },
  {
    "url": "assets/js/295.js",
    "revision": "9c476298e5f0fa567635e633241a33c9"
  },
  {
    "url": "assets/js/296.js",
    "revision": "292329d44c8f9fbc391f4c5308df2883"
  },
  {
    "url": "assets/js/297.js",
    "revision": "a966cff7e4d0c652cd512c7b1c35b768"
  },
  {
    "url": "assets/js/298.js",
    "revision": "09fa906dfa50a9104f16c50fe6bcea19"
  },
  {
    "url": "assets/js/299.js",
    "revision": "42f0b48c77947aa0071c608e08479aad"
  },
  {
    "url": "assets/js/3.js",
    "revision": "5584ba156839442d6d21b283fff59f8d"
  },
  {
    "url": "assets/js/30.js",
    "revision": "116fb86e1cfb7cd47bc210c341d2974d"
  },
  {
    "url": "assets/js/300.js",
    "revision": "70ea6ad25d15042045b4b789174e6c08"
  },
  {
    "url": "assets/js/301.js",
    "revision": "7590abc873f61527ea5941b742119f23"
  },
  {
    "url": "assets/js/302.js",
    "revision": "d936b0361ff0e975bdddfd0716d0de9f"
  },
  {
    "url": "assets/js/303.js",
    "revision": "fe22464a4ba3f1737a3474879697f291"
  },
  {
    "url": "assets/js/304.js",
    "revision": "5c1738bfd1b25637f5533707a404b6e5"
  },
  {
    "url": "assets/js/305.js",
    "revision": "115fdc06698e926046266b69fd4fa972"
  },
  {
    "url": "assets/js/306.js",
    "revision": "289d5c02f7b1625221c82a3760cb86bb"
  },
  {
    "url": "assets/js/307.js",
    "revision": "e07adbe30703d49bc163ce546868e86c"
  },
  {
    "url": "assets/js/308.js",
    "revision": "f68dedda801e48f0f552444e6b45df92"
  },
  {
    "url": "assets/js/309.js",
    "revision": "1c16a3786a73e710c3312cf6efa8de47"
  },
  {
    "url": "assets/js/31.js",
    "revision": "1c22ff896568bc3e376e436bfc84a7cc"
  },
  {
    "url": "assets/js/310.js",
    "revision": "60af1bcbcba91e1c19ec4c26b1320904"
  },
  {
    "url": "assets/js/311.js",
    "revision": "e8aecc20ab27656ee29e509646e5e7ce"
  },
  {
    "url": "assets/js/312.js",
    "revision": "ed32d4fa3569ed5999d03d233eda5cfd"
  },
  {
    "url": "assets/js/313.js",
    "revision": "5cbc67f7f05997c38835451a45de39c4"
  },
  {
    "url": "assets/js/314.js",
    "revision": "3a1987925330cdababafa9ac1967299f"
  },
  {
    "url": "assets/js/315.js",
    "revision": "899bac557de374522b82acee7f0dd7ec"
  },
  {
    "url": "assets/js/316.js",
    "revision": "1ea563ea552a7677ce8963d5d2bed170"
  },
  {
    "url": "assets/js/317.js",
    "revision": "7fdc1270fedee87c5028ab7e7614052f"
  },
  {
    "url": "assets/js/318.js",
    "revision": "8f8b209a34ae8af23f45569f0661bf3d"
  },
  {
    "url": "assets/js/319.js",
    "revision": "30e2f243f4b69573707d1f3ca23c2ff2"
  },
  {
    "url": "assets/js/32.js",
    "revision": "12ca9de100a772bc3796f6bd5dc79b19"
  },
  {
    "url": "assets/js/320.js",
    "revision": "69dcb56ef0db9baac7b1dfc27aa75274"
  },
  {
    "url": "assets/js/321.js",
    "revision": "2836148005a862b48944fa7deb53e2ab"
  },
  {
    "url": "assets/js/322.js",
    "revision": "afe4eeaba45a92e71f5f84650ac1bcbd"
  },
  {
    "url": "assets/js/323.js",
    "revision": "03dbf9d2577fc0b1b33ccdfb03bef7d6"
  },
  {
    "url": "assets/js/324.js",
    "revision": "7b4d874b2b23cc4774632842bd35deff"
  },
  {
    "url": "assets/js/325.js",
    "revision": "c71215a0ff3829f92fdf14fe2c6e8217"
  },
  {
    "url": "assets/js/326.js",
    "revision": "695df8f67dfc0eab2be64d546fed67c0"
  },
  {
    "url": "assets/js/327.js",
    "revision": "7e39c27d66ee66475db1da5a884b9689"
  },
  {
    "url": "assets/js/328.js",
    "revision": "c85fd8e6864a7b0dad73e24cca5ba06d"
  },
  {
    "url": "assets/js/329.js",
    "revision": "181e63719f8847043cc37baf57aa9f35"
  },
  {
    "url": "assets/js/33.js",
    "revision": "7a3ed0db6369bf8279ad78383888b204"
  },
  {
    "url": "assets/js/330.js",
    "revision": "c7fef99b1a8f96eafeab5a7669a48f1a"
  },
  {
    "url": "assets/js/331.js",
    "revision": "f0fb6c91cd2f36858925be179aab4358"
  },
  {
    "url": "assets/js/332.js",
    "revision": "2961d08434ebebb383daf2ed2f1977a3"
  },
  {
    "url": "assets/js/333.js",
    "revision": "46793f75305d3e3ff865d5beae76271a"
  },
  {
    "url": "assets/js/334.js",
    "revision": "339724474a1e8262a82798ac88912690"
  },
  {
    "url": "assets/js/335.js",
    "revision": "7328e0c6fe0cb557a8a4438bf8d1d421"
  },
  {
    "url": "assets/js/336.js",
    "revision": "0acf128b600acefbf24a8e73cb935853"
  },
  {
    "url": "assets/js/337.js",
    "revision": "b72674374959668b80a4d692d557ed03"
  },
  {
    "url": "assets/js/338.js",
    "revision": "cf3be0d52d6212d75100ef681713999a"
  },
  {
    "url": "assets/js/339.js",
    "revision": "fe9066a0119a194d8cee71814d9857ec"
  },
  {
    "url": "assets/js/34.js",
    "revision": "5b9c2a8c9adf8cda22582367e4afe8cf"
  },
  {
    "url": "assets/js/340.js",
    "revision": "3e632776295547af08165b7547b1651a"
  },
  {
    "url": "assets/js/341.js",
    "revision": "67e5bfed71284ed971da04616109f182"
  },
  {
    "url": "assets/js/342.js",
    "revision": "803749d364ea403989b365eb162f1f13"
  },
  {
    "url": "assets/js/343.js",
    "revision": "e09c84a1b22c57f017c2b7fb9d2d21dd"
  },
  {
    "url": "assets/js/344.js",
    "revision": "77ebd80c6ca6ca9b1d0b69cb6f9a2e7c"
  },
  {
    "url": "assets/js/345.js",
    "revision": "328bcbd94eaf0ec15f16e5e31406ac6c"
  },
  {
    "url": "assets/js/346.js",
    "revision": "b18c7e01739a514ca0d3b9fa5be71159"
  },
  {
    "url": "assets/js/347.js",
    "revision": "64767a1143a99c6da427183f8e4d9c50"
  },
  {
    "url": "assets/js/348.js",
    "revision": "22a044efdf5ff06aa47f518c87f8bcbc"
  },
  {
    "url": "assets/js/349.js",
    "revision": "27b7898447aa8aca46a1d60308b0f5d4"
  },
  {
    "url": "assets/js/35.js",
    "revision": "ee949526e170922d14dd494a0c122580"
  },
  {
    "url": "assets/js/350.js",
    "revision": "faf90d53201a33425a231ddbaeb165f6"
  },
  {
    "url": "assets/js/351.js",
    "revision": "5ae9eb1300ecefabc2357579f2ee8c3c"
  },
  {
    "url": "assets/js/352.js",
    "revision": "7750926d9eb0d04a85236502f91cf858"
  },
  {
    "url": "assets/js/353.js",
    "revision": "cd0cefa5255f9c3a3d8e45fef667bf87"
  },
  {
    "url": "assets/js/354.js",
    "revision": "62f9d903fe356c4c2f9bab72335fc262"
  },
  {
    "url": "assets/js/355.js",
    "revision": "ff87cda45061eb8eb5c74edfe6cd3cf7"
  },
  {
    "url": "assets/js/356.js",
    "revision": "739a85d2c009933b638dc1d4765d9704"
  },
  {
    "url": "assets/js/357.js",
    "revision": "c6165cb2589460a83ab5f8db2db56568"
  },
  {
    "url": "assets/js/358.js",
    "revision": "ce7c9ef93e16d1ce3cd82dae05f7bda2"
  },
  {
    "url": "assets/js/359.js",
    "revision": "0b8c8811092a33866231c2ee6209ae51"
  },
  {
    "url": "assets/js/36.js",
    "revision": "42cb160cc131736e6d5a6a29174fe8af"
  },
  {
    "url": "assets/js/360.js",
    "revision": "eeb146f91c2a91ad72a2797401fe3857"
  },
  {
    "url": "assets/js/361.js",
    "revision": "cf6cec8793c86ea9e3005fa0454e1b8e"
  },
  {
    "url": "assets/js/362.js",
    "revision": "8d7be5a4913151a9e1fe7b7459665119"
  },
  {
    "url": "assets/js/363.js",
    "revision": "c345cd82b35c94bda53c0ede9e7fd7e0"
  },
  {
    "url": "assets/js/364.js",
    "revision": "17d9f2a51380452d39f4131b6354ed10"
  },
  {
    "url": "assets/js/365.js",
    "revision": "aa27b9d8455f783f42c64bf8f1ac73e9"
  },
  {
    "url": "assets/js/366.js",
    "revision": "415148d406ef2c4c348fbdce8c7bdc38"
  },
  {
    "url": "assets/js/367.js",
    "revision": "56fa8a933fbab85b788f1e641c2b430e"
  },
  {
    "url": "assets/js/368.js",
    "revision": "a323c5923380d24e7f1e4521dc2df1d2"
  },
  {
    "url": "assets/js/369.js",
    "revision": "0c2c6fddc14c8833e1869b8a0a6ddd19"
  },
  {
    "url": "assets/js/37.js",
    "revision": "fb09f8f24596bc4baf60889608f711ee"
  },
  {
    "url": "assets/js/370.js",
    "revision": "2683626df8e3320c8eaa85e5408ac781"
  },
  {
    "url": "assets/js/371.js",
    "revision": "a37e2f8813c6b6924831d26f17e8f040"
  },
  {
    "url": "assets/js/372.js",
    "revision": "c383bb45919bd9c14d5b8573e591cc64"
  },
  {
    "url": "assets/js/373.js",
    "revision": "32d2b227b941006015b878d6d34ab10e"
  },
  {
    "url": "assets/js/374.js",
    "revision": "bfdc2e887e1d3b5b7baba03462f72d68"
  },
  {
    "url": "assets/js/375.js",
    "revision": "6094ffe4bd5693b7820e0cd045b0cb9f"
  },
  {
    "url": "assets/js/376.js",
    "revision": "65e3619c1f45c87fb201f9aa497f6751"
  },
  {
    "url": "assets/js/377.js",
    "revision": "c9e8e662fe3dda022c5ca92d2dafd025"
  },
  {
    "url": "assets/js/378.js",
    "revision": "10f7fc9c5f994b9020e852ba82fff019"
  },
  {
    "url": "assets/js/379.js",
    "revision": "309b3cd25a4561c2106774f4885a2f73"
  },
  {
    "url": "assets/js/38.js",
    "revision": "5e41d663ceb9396c9f62065b90327b1d"
  },
  {
    "url": "assets/js/380.js",
    "revision": "a8b1fa18da51f017c3d8fd104ea57565"
  },
  {
    "url": "assets/js/381.js",
    "revision": "8246873e012aaefd3765a1515d58dce1"
  },
  {
    "url": "assets/js/382.js",
    "revision": "441526d48dd88edc57fe9da877949b31"
  },
  {
    "url": "assets/js/383.js",
    "revision": "bf86fb597ae3b27fec661aea2d25a747"
  },
  {
    "url": "assets/js/384.js",
    "revision": "c94a662f9f84372138f8794ec090a88d"
  },
  {
    "url": "assets/js/385.js",
    "revision": "1e639e9ff24aec4fd94a8086ba4a006c"
  },
  {
    "url": "assets/js/386.js",
    "revision": "08645acd5e4d0f0a237eac85c94367db"
  },
  {
    "url": "assets/js/387.js",
    "revision": "f677239ed836c466de951b5179be35ad"
  },
  {
    "url": "assets/js/388.js",
    "revision": "1d2721d43913186a919e5b642ac2e9ba"
  },
  {
    "url": "assets/js/389.js",
    "revision": "e18a11645ef75750545dd9b542f31d6f"
  },
  {
    "url": "assets/js/39.js",
    "revision": "8f97ffb9c55f7ca2e94311bd6d5454ad"
  },
  {
    "url": "assets/js/390.js",
    "revision": "89f65a98cfdbcc35344a8845d21b01b3"
  },
  {
    "url": "assets/js/391.js",
    "revision": "13e291bb75eb96c901cf87d5238c6b7c"
  },
  {
    "url": "assets/js/392.js",
    "revision": "bb1a13bfa50343b844f2ddbeb5e0d46a"
  },
  {
    "url": "assets/js/393.js",
    "revision": "fcc773a83bac96b44294e2e5c45dcee1"
  },
  {
    "url": "assets/js/394.js",
    "revision": "24283279760946b1fc21adb9fb06c46f"
  },
  {
    "url": "assets/js/395.js",
    "revision": "fd34fe0c88076c0461928bb68916a67e"
  },
  {
    "url": "assets/js/396.js",
    "revision": "cfa8ddb92627fef787e7b73c1dfd379a"
  },
  {
    "url": "assets/js/397.js",
    "revision": "38d0fbc765843cd8b374943e9208353a"
  },
  {
    "url": "assets/js/398.js",
    "revision": "254d8fc7a3265d658a6e78767022d032"
  },
  {
    "url": "assets/js/399.js",
    "revision": "a2794b4593f9d98839a25e3a4ba04101"
  },
  {
    "url": "assets/js/4.js",
    "revision": "6093c5a420410def6d29126646cddfc1"
  },
  {
    "url": "assets/js/40.js",
    "revision": "6a6d4976a48f963abd03e92a88aba332"
  },
  {
    "url": "assets/js/400.js",
    "revision": "14d9056e8321c2da49cda45e688b040e"
  },
  {
    "url": "assets/js/401.js",
    "revision": "360e8663e2798385b4b286a77a9e3903"
  },
  {
    "url": "assets/js/402.js",
    "revision": "b4d789ab0b0cb9f5ee1090241fac0947"
  },
  {
    "url": "assets/js/403.js",
    "revision": "fdbc140a439788cb568b1747ea9f575b"
  },
  {
    "url": "assets/js/404.js",
    "revision": "72224cfb0329bf6d0ea7172600002f15"
  },
  {
    "url": "assets/js/405.js",
    "revision": "fe18b9ee5994d1dd676ab786890530f7"
  },
  {
    "url": "assets/js/406.js",
    "revision": "f346a22af848911c62846a13f74ee080"
  },
  {
    "url": "assets/js/407.js",
    "revision": "bbb0b4c3279b1c191ba2aba61533b464"
  },
  {
    "url": "assets/js/408.js",
    "revision": "a7e22e17d4fda30767cb69872df2b285"
  },
  {
    "url": "assets/js/409.js",
    "revision": "0b9359a11b6c7f5f3c64fa4d21dd6b25"
  },
  {
    "url": "assets/js/41.js",
    "revision": "e4300cdb1b34115bd062f29034ffb566"
  },
  {
    "url": "assets/js/410.js",
    "revision": "e7b704321c9450604658fb3d586473d0"
  },
  {
    "url": "assets/js/411.js",
    "revision": "8bea96285608ea9fb0b4c09a3ca31704"
  },
  {
    "url": "assets/js/412.js",
    "revision": "9573a4fc93d67b681b3f07d30ed80f13"
  },
  {
    "url": "assets/js/413.js",
    "revision": "5acb164db26962951090b3b0ec6b2f43"
  },
  {
    "url": "assets/js/414.js",
    "revision": "ae32dbaacf183d4c27663e0fbd96a5d8"
  },
  {
    "url": "assets/js/415.js",
    "revision": "a31be0e813d49bcec4bbf0d5c11f2714"
  },
  {
    "url": "assets/js/416.js",
    "revision": "d5f6e39580822c87476b513b70986224"
  },
  {
    "url": "assets/js/417.js",
    "revision": "0c8d81d79349b9c0206f61bb164f0e25"
  },
  {
    "url": "assets/js/418.js",
    "revision": "e9793f3cb3923db8deea6b9dfe3dcc6f"
  },
  {
    "url": "assets/js/419.js",
    "revision": "f7e8c78d64a0a0a697f6b3bd5d28dfb3"
  },
  {
    "url": "assets/js/42.js",
    "revision": "a5f7368b7501db70e93a0c02998ec853"
  },
  {
    "url": "assets/js/420.js",
    "revision": "9837716a7a14c73e76c18cb8548a9ac1"
  },
  {
    "url": "assets/js/421.js",
    "revision": "cde10044af1e9f69d94fa8db204ed603"
  },
  {
    "url": "assets/js/422.js",
    "revision": "3ab1dc59d0356f397d7971b02e068087"
  },
  {
    "url": "assets/js/423.js",
    "revision": "881b702c3858b5a41737356e8f54f30a"
  },
  {
    "url": "assets/js/424.js",
    "revision": "26e6c9961d7d235e3d8d6daf4672e3af"
  },
  {
    "url": "assets/js/425.js",
    "revision": "e95deeb9b6316a52a91b9cd1a93302ff"
  },
  {
    "url": "assets/js/426.js",
    "revision": "727fad3a5bc59409c2e22c910a0b7428"
  },
  {
    "url": "assets/js/427.js",
    "revision": "0beabacfcd633d81dd56b38720ed2ba5"
  },
  {
    "url": "assets/js/428.js",
    "revision": "e593c5f61f30e321f218cadac96f6c42"
  },
  {
    "url": "assets/js/429.js",
    "revision": "4f4d046ce8cdc132f0c3bbaa3f3d78f1"
  },
  {
    "url": "assets/js/43.js",
    "revision": "39374392d2856aa2eb9addeaba28f1df"
  },
  {
    "url": "assets/js/430.js",
    "revision": "acfa5c3fb839827e698f6b28470a898e"
  },
  {
    "url": "assets/js/431.js",
    "revision": "0a7c72eec44d826925353048dfbf4e85"
  },
  {
    "url": "assets/js/432.js",
    "revision": "f289443b3c04126f9b74b407bc7a6108"
  },
  {
    "url": "assets/js/433.js",
    "revision": "6b28b103e86c892be1422bb024ec5a9d"
  },
  {
    "url": "assets/js/434.js",
    "revision": "299bfc533be68c9029c52f2c94062877"
  },
  {
    "url": "assets/js/435.js",
    "revision": "b4e694061421a19559d21251b8115593"
  },
  {
    "url": "assets/js/436.js",
    "revision": "f3b0c277a41891e0746660f9babc3954"
  },
  {
    "url": "assets/js/437.js",
    "revision": "e83c25a7210f6321d1de660ed91f4049"
  },
  {
    "url": "assets/js/438.js",
    "revision": "2d8ac3c9bba16a97c6ab1ea5efc3bcfe"
  },
  {
    "url": "assets/js/439.js",
    "revision": "8abda070dbc650163e19abe99e2476a8"
  },
  {
    "url": "assets/js/44.js",
    "revision": "f56f2db7d3e57afc6d4158c47f1066e8"
  },
  {
    "url": "assets/js/440.js",
    "revision": "3d2591eb38c9a6c3e6f6bf07b900805b"
  },
  {
    "url": "assets/js/441.js",
    "revision": "ef0c8d89422a66e6424fefa164908273"
  },
  {
    "url": "assets/js/442.js",
    "revision": "b489708c182e97fbfb929e99a7a550ae"
  },
  {
    "url": "assets/js/443.js",
    "revision": "dd4bb5523d8f0e2624b6e1726ae70672"
  },
  {
    "url": "assets/js/444.js",
    "revision": "61d96000fbd6ed43bb33b526ef1ed4b0"
  },
  {
    "url": "assets/js/445.js",
    "revision": "9347cf4b1c114ba538f78bfe98749852"
  },
  {
    "url": "assets/js/446.js",
    "revision": "2cd0f48c68576f770e5b38832de2030b"
  },
  {
    "url": "assets/js/447.js",
    "revision": "6965ede5bca08d1ad5ec201ef9b574d4"
  },
  {
    "url": "assets/js/448.js",
    "revision": "65bf66d528e4e9d88c59cac88849a46e"
  },
  {
    "url": "assets/js/449.js",
    "revision": "7d913a839a6edaaa9d670d22cec8fb10"
  },
  {
    "url": "assets/js/45.js",
    "revision": "21aa45928ff4778d0a475535d361e31b"
  },
  {
    "url": "assets/js/450.js",
    "revision": "55ffddb2e06175d2790524a70553ad51"
  },
  {
    "url": "assets/js/451.js",
    "revision": "01e86622a49958c02c4037f4fe7e9936"
  },
  {
    "url": "assets/js/452.js",
    "revision": "91207dd2dcff2bba88e8b3d180252d6c"
  },
  {
    "url": "assets/js/453.js",
    "revision": "7d417c0934354303163be039c00dfcd4"
  },
  {
    "url": "assets/js/454.js",
    "revision": "8cc201b444eb1bad3297c2cc4619d97d"
  },
  {
    "url": "assets/js/455.js",
    "revision": "663965fbcfd23a3e5a188c1a8d31eb7c"
  },
  {
    "url": "assets/js/456.js",
    "revision": "2207ad33e65f8e1443d78a24c746e35a"
  },
  {
    "url": "assets/js/457.js",
    "revision": "c3a483fb521badb17b029c8a1bdf2331"
  },
  {
    "url": "assets/js/458.js",
    "revision": "4adde46bff4fbe0136cccb5c8999931d"
  },
  {
    "url": "assets/js/459.js",
    "revision": "7b00a97ac9774a6d46f394bda4fc7996"
  },
  {
    "url": "assets/js/46.js",
    "revision": "ac9504d4ff7c4c4c7f7795f01d0e72b3"
  },
  {
    "url": "assets/js/460.js",
    "revision": "50efd890d5ae6ddc5cf2e30a2326cb3b"
  },
  {
    "url": "assets/js/461.js",
    "revision": "583ece597d4a6b11e536e0ea910b38b3"
  },
  {
    "url": "assets/js/462.js",
    "revision": "256508461b40dd64faba558770eb3e31"
  },
  {
    "url": "assets/js/463.js",
    "revision": "abaab4cc5f93af97adfe0124a2a88145"
  },
  {
    "url": "assets/js/464.js",
    "revision": "7c65a50422fc6dedec16eaab115479db"
  },
  {
    "url": "assets/js/465.js",
    "revision": "6fea4ea23695225d165a0d82ffe39c4b"
  },
  {
    "url": "assets/js/466.js",
    "revision": "a4ade2722251b6633e3fca0b688e083d"
  },
  {
    "url": "assets/js/467.js",
    "revision": "6ed21519bc326eb5bdce9b2321c1d057"
  },
  {
    "url": "assets/js/468.js",
    "revision": "e3303e544cf8e1477b88c983d9e5eb4e"
  },
  {
    "url": "assets/js/469.js",
    "revision": "dcec5d375f1bc2ad2bea135f634d8b62"
  },
  {
    "url": "assets/js/47.js",
    "revision": "29220c747b4551de1f3e33ae7882f55b"
  },
  {
    "url": "assets/js/470.js",
    "revision": "67aed3802e9715c7ebacfc8294889bf1"
  },
  {
    "url": "assets/js/471.js",
    "revision": "1ccd6106d485fed3f7cc4c17572f98bb"
  },
  {
    "url": "assets/js/472.js",
    "revision": "3da46e49ed894153cca54c52c65eeb46"
  },
  {
    "url": "assets/js/473.js",
    "revision": "889ac702cd3de142699844f121ba69d5"
  },
  {
    "url": "assets/js/474.js",
    "revision": "0fa37a454a365f61c1247c5a5eb5c987"
  },
  {
    "url": "assets/js/475.js",
    "revision": "08e78f81468d02c8a0012f5cb51080a9"
  },
  {
    "url": "assets/js/476.js",
    "revision": "b58f821d586785b040d4e2ff08b5b148"
  },
  {
    "url": "assets/js/477.js",
    "revision": "4968dcb126a31bf0bff1bf14bad51e30"
  },
  {
    "url": "assets/js/478.js",
    "revision": "1c7f5062a8209b94d13e2c355ebd22eb"
  },
  {
    "url": "assets/js/479.js",
    "revision": "28b0934026c6a905663883b123641b06"
  },
  {
    "url": "assets/js/48.js",
    "revision": "c482d5961904584500f75a1eca756dc9"
  },
  {
    "url": "assets/js/480.js",
    "revision": "43488d69cc782db2300a9e4b4a2e6ca7"
  },
  {
    "url": "assets/js/481.js",
    "revision": "e09313e5e6b1fe7572266dc27acd884d"
  },
  {
    "url": "assets/js/482.js",
    "revision": "1b002bc6c07f812912f4981927cb82d5"
  },
  {
    "url": "assets/js/483.js",
    "revision": "5222d8c71300b087ebe2e740d2acf72a"
  },
  {
    "url": "assets/js/484.js",
    "revision": "08341cd5dd6550cbb7ad36fff90ef7e7"
  },
  {
    "url": "assets/js/485.js",
    "revision": "dd809dc25d3ede67a0a51fda82b223d9"
  },
  {
    "url": "assets/js/486.js",
    "revision": "cbb81a41a112a05fda71a5fccf564d77"
  },
  {
    "url": "assets/js/487.js",
    "revision": "c13ad3de1e326ecb01681c89957a05e5"
  },
  {
    "url": "assets/js/488.js",
    "revision": "6fe3c05be45d4de8efc85efd4673846d"
  },
  {
    "url": "assets/js/489.js",
    "revision": "2e5b89bff2c6bb7010f9e29ab5d6a67c"
  },
  {
    "url": "assets/js/49.js",
    "revision": "930365e9e3574013e5d9be3b42fbf8e3"
  },
  {
    "url": "assets/js/490.js",
    "revision": "890d0cf825232dbd487f61e66b8a9685"
  },
  {
    "url": "assets/js/491.js",
    "revision": "4fa1b888b4a4001c340564bd8d625abf"
  },
  {
    "url": "assets/js/492.js",
    "revision": "97a9f630c21e74266a2c8ffb59ef1e37"
  },
  {
    "url": "assets/js/493.js",
    "revision": "15ad2e1d72e76d22c1efc291d854ccec"
  },
  {
    "url": "assets/js/494.js",
    "revision": "b928cb2725e8d57316197ce4dead6412"
  },
  {
    "url": "assets/js/495.js",
    "revision": "9b65a51802a56a18cf979dd6f65fceaf"
  },
  {
    "url": "assets/js/496.js",
    "revision": "6a693348620771d346060bae7065c7dc"
  },
  {
    "url": "assets/js/497.js",
    "revision": "518f04eefe730ced0e3b48625e05c22c"
  },
  {
    "url": "assets/js/498.js",
    "revision": "8d01ee9b8dfec6cd7e99143d4da796ba"
  },
  {
    "url": "assets/js/499.js",
    "revision": "10554ebcb6e72cf79762c78a19fd77b6"
  },
  {
    "url": "assets/js/50.js",
    "revision": "7a26c26f77b6fc9885ddc690954a2bc8"
  },
  {
    "url": "assets/js/500.js",
    "revision": "4443712c8a86fd779c383ca0804fa05c"
  },
  {
    "url": "assets/js/501.js",
    "revision": "171e9570992d083f6dc693521bf229e5"
  },
  {
    "url": "assets/js/502.js",
    "revision": "99b12d8dbf87eac988bc311e3d2e2bb4"
  },
  {
    "url": "assets/js/503.js",
    "revision": "efa0023920584314a9a072deb3f40168"
  },
  {
    "url": "assets/js/504.js",
    "revision": "2f3ac80e9c4904d06cb58b973c46c590"
  },
  {
    "url": "assets/js/505.js",
    "revision": "480264a2a43293c63cafdce34b25f257"
  },
  {
    "url": "assets/js/506.js",
    "revision": "fd388b40059ea02cf15bb2dd3ebd147b"
  },
  {
    "url": "assets/js/507.js",
    "revision": "f3f8bf910dbe456739c8a74ade91d115"
  },
  {
    "url": "assets/js/508.js",
    "revision": "7360f74d68aee1bec253bc41c22b3298"
  },
  {
    "url": "assets/js/509.js",
    "revision": "63b0bbac5293e91ebc2b8a4bfafd1d6d"
  },
  {
    "url": "assets/js/51.js",
    "revision": "216609cdbcdf6c9a849863613c5abad6"
  },
  {
    "url": "assets/js/510.js",
    "revision": "0ad2b710b239dbb75b71b64b3059cc2a"
  },
  {
    "url": "assets/js/511.js",
    "revision": "481730c0db6b2d3c1da06811e98ef621"
  },
  {
    "url": "assets/js/512.js",
    "revision": "c735c7a04f93309db23921e9b275890c"
  },
  {
    "url": "assets/js/513.js",
    "revision": "6c18ea9a47260b569f6adc0b88d087fa"
  },
  {
    "url": "assets/js/514.js",
    "revision": "4a048a6bbd622f95db154877a3eea277"
  },
  {
    "url": "assets/js/515.js",
    "revision": "a9d2bbad91a70bcfbcbc6e40dc5e69a7"
  },
  {
    "url": "assets/js/516.js",
    "revision": "5cfbcd56f7d902ce80d11368fbbe7b30"
  },
  {
    "url": "assets/js/517.js",
    "revision": "ed70d7fb39a4ec4f69ae993baa6c70cb"
  },
  {
    "url": "assets/js/518.js",
    "revision": "75a245fac7e2c8d334bd70d0a33c6fd0"
  },
  {
    "url": "assets/js/519.js",
    "revision": "4f6ae41476ab3ee42c333de98628f00b"
  },
  {
    "url": "assets/js/52.js",
    "revision": "d900ebfd3f78140ab8518d47b6409fb0"
  },
  {
    "url": "assets/js/520.js",
    "revision": "e37138f4133c59e350987388e0315c20"
  },
  {
    "url": "assets/js/521.js",
    "revision": "2d75cb018de8f5a76cbbb29a8fb4b560"
  },
  {
    "url": "assets/js/522.js",
    "revision": "f1e55feda122298bdc442942de64991a"
  },
  {
    "url": "assets/js/523.js",
    "revision": "c0edb528e76ecb17b00b4a7bacdc32db"
  },
  {
    "url": "assets/js/524.js",
    "revision": "37e7410f6534411e8900d0765314ed7d"
  },
  {
    "url": "assets/js/525.js",
    "revision": "5a0486229db4085fdf059851d326bde7"
  },
  {
    "url": "assets/js/526.js",
    "revision": "0dc2613bd38db239737f17c2abee62e2"
  },
  {
    "url": "assets/js/527.js",
    "revision": "312da41e6203db01e1d3d8f9bc52e292"
  },
  {
    "url": "assets/js/528.js",
    "revision": "3c5dce9f61469a6cbfbbdb5fb6d5de7e"
  },
  {
    "url": "assets/js/529.js",
    "revision": "2eb9256f69767da4293d90c810b61621"
  },
  {
    "url": "assets/js/53.js",
    "revision": "e17816e959c1b7e9515740eec12c2dae"
  },
  {
    "url": "assets/js/530.js",
    "revision": "30ec35d306b44a6594b4c932f97e720b"
  },
  {
    "url": "assets/js/531.js",
    "revision": "c3fe5cc14cfaec4f73e06bf825621c4e"
  },
  {
    "url": "assets/js/532.js",
    "revision": "f29e21e31a55d9a1ada9db3fb061e0b4"
  },
  {
    "url": "assets/js/533.js",
    "revision": "07ca37d3a2e576802dfa3beb1051147a"
  },
  {
    "url": "assets/js/534.js",
    "revision": "b73da902188617862b4057dc0e9268f7"
  },
  {
    "url": "assets/js/535.js",
    "revision": "4d88d685e04232c29cd5dcb55b7693d6"
  },
  {
    "url": "assets/js/536.js",
    "revision": "590e60f24bc87c6cf62921a3e5932398"
  },
  {
    "url": "assets/js/537.js",
    "revision": "9c781f82453a5a308cbdf2db28cb4c1a"
  },
  {
    "url": "assets/js/538.js",
    "revision": "58cc0c9f6b3ebe3ef0771c98c3b9ed60"
  },
  {
    "url": "assets/js/539.js",
    "revision": "40f254f678adc46b63e3929c9219acc3"
  },
  {
    "url": "assets/js/54.js",
    "revision": "7ad1f61d5c266510080cacf5abc31758"
  },
  {
    "url": "assets/js/540.js",
    "revision": "afa6c971f915bb4635b7f49fe2df141b"
  },
  {
    "url": "assets/js/541.js",
    "revision": "0d310b594e7da0dbbdfebfb26be8d356"
  },
  {
    "url": "assets/js/542.js",
    "revision": "fc4a06155f9014f2e50adc43515975e9"
  },
  {
    "url": "assets/js/543.js",
    "revision": "0ccae080839faca8c1024b0cbe0dca09"
  },
  {
    "url": "assets/js/544.js",
    "revision": "f5d668a2e5e062d2753c0d02fb0f2f8a"
  },
  {
    "url": "assets/js/545.js",
    "revision": "aa427dd221ffbdd8ba1b72f17d2ffb70"
  },
  {
    "url": "assets/js/546.js",
    "revision": "6a80a525834c1ba441489c9132a926c8"
  },
  {
    "url": "assets/js/547.js",
    "revision": "c06fdf7edda2901f765605ace10ffc25"
  },
  {
    "url": "assets/js/548.js",
    "revision": "56c7a4a3c1274b6ce38014714af5c25d"
  },
  {
    "url": "assets/js/549.js",
    "revision": "8a8d1d6b75724f689efc4dc5b128de6b"
  },
  {
    "url": "assets/js/55.js",
    "revision": "af01a763bec75e2ca77160873aa47092"
  },
  {
    "url": "assets/js/550.js",
    "revision": "1a7251358a5c4518c4cfc931714fddf3"
  },
  {
    "url": "assets/js/551.js",
    "revision": "8a0c3268c5be77c090291db0a400f807"
  },
  {
    "url": "assets/js/552.js",
    "revision": "d3b28ff72b2135d56fc2d6cbd49f28ce"
  },
  {
    "url": "assets/js/553.js",
    "revision": "c7f30ac82c6850321245286bb9febe3f"
  },
  {
    "url": "assets/js/554.js",
    "revision": "3e508a2034ca899f8f7f7147f8877bd5"
  },
  {
    "url": "assets/js/555.js",
    "revision": "2b7669e8cab9726522c5a606d14dae48"
  },
  {
    "url": "assets/js/556.js",
    "revision": "ef39c5cb1821073e3509e0635279142c"
  },
  {
    "url": "assets/js/557.js",
    "revision": "73b593f66b47d5dd34ed509b42120694"
  },
  {
    "url": "assets/js/558.js",
    "revision": "19b76c75b98376bf6bdab0ccdc5b635f"
  },
  {
    "url": "assets/js/559.js",
    "revision": "52677ef6adc268ff523b47c7fc7e9b98"
  },
  {
    "url": "assets/js/56.js",
    "revision": "2b2676e2a5236092857237be4adbb2d5"
  },
  {
    "url": "assets/js/560.js",
    "revision": "617d63295db99ebdc28ba9c40e42b9dd"
  },
  {
    "url": "assets/js/561.js",
    "revision": "7120830a346ff8ce8b48bedb96821565"
  },
  {
    "url": "assets/js/562.js",
    "revision": "e9563898d6bbba32f9375a3f84ed4221"
  },
  {
    "url": "assets/js/563.js",
    "revision": "cafb2cd5d39f24428f2eff192264f580"
  },
  {
    "url": "assets/js/564.js",
    "revision": "3bcefc724081f8a42f91b6e4a423b4f4"
  },
  {
    "url": "assets/js/565.js",
    "revision": "1b6b379fcd22dd768bf81337d4099a5c"
  },
  {
    "url": "assets/js/566.js",
    "revision": "c88d90a46a37bdcf5547d721373d05aa"
  },
  {
    "url": "assets/js/567.js",
    "revision": "c2042e7029cea88b56686634a9b3bfe3"
  },
  {
    "url": "assets/js/568.js",
    "revision": "0b6e3c44d16ee78021cf221fccbc3642"
  },
  {
    "url": "assets/js/569.js",
    "revision": "30abbf9f85583e6178d13ab1d78497fc"
  },
  {
    "url": "assets/js/57.js",
    "revision": "2ba17d13e05cf4d7b50bfaa9202b6672"
  },
  {
    "url": "assets/js/570.js",
    "revision": "6a39d54ae03af109a87aeda0c7aa865d"
  },
  {
    "url": "assets/js/571.js",
    "revision": "1ee0f78c72e0ff1aaaf25a3a2ca197aa"
  },
  {
    "url": "assets/js/572.js",
    "revision": "eec9d4c4b600104a906b8d3d5d994920"
  },
  {
    "url": "assets/js/573.js",
    "revision": "c44d847f7a1714ac03142680930aeff0"
  },
  {
    "url": "assets/js/574.js",
    "revision": "d54bf106c7b0c3f6a71de331771c7a74"
  },
  {
    "url": "assets/js/575.js",
    "revision": "4c66fc489f5d1407029e6816d8e1c3b7"
  },
  {
    "url": "assets/js/576.js",
    "revision": "0f114c99715fcb1beaea68e794546039"
  },
  {
    "url": "assets/js/577.js",
    "revision": "44aaeb7c4f37625cd75502c85d4318ff"
  },
  {
    "url": "assets/js/578.js",
    "revision": "40aa10f58b7db81ca93dc7ce2928bac8"
  },
  {
    "url": "assets/js/579.js",
    "revision": "69d5e786cf8c283cd5fb1febfeadde2d"
  },
  {
    "url": "assets/js/58.js",
    "revision": "549a49fe369a9c41947940b697b1e181"
  },
  {
    "url": "assets/js/580.js",
    "revision": "f9e7c4083e9da904e7bfc125b7f5f953"
  },
  {
    "url": "assets/js/581.js",
    "revision": "36653b8cee801aed6ec6218b446f80e0"
  },
  {
    "url": "assets/js/582.js",
    "revision": "dec60feb002e9cb63ece05db780f7ed2"
  },
  {
    "url": "assets/js/583.js",
    "revision": "9d69c6de5273548e258c00448ceea4d4"
  },
  {
    "url": "assets/js/584.js",
    "revision": "e7b80a12628585ff254e04934a1d6704"
  },
  {
    "url": "assets/js/585.js",
    "revision": "d806809b9792d2905512af30341f0f1e"
  },
  {
    "url": "assets/js/586.js",
    "revision": "a30811919bf9c6e15732ebc095b458df"
  },
  {
    "url": "assets/js/587.js",
    "revision": "f6be0b590bd98d761b60d05d59a3ef8e"
  },
  {
    "url": "assets/js/588.js",
    "revision": "298120563aef936dc26106d36540cf68"
  },
  {
    "url": "assets/js/589.js",
    "revision": "11a82d5e3c303a8d333b6bceb3138c1b"
  },
  {
    "url": "assets/js/59.js",
    "revision": "69bfcf003ac9f61bd0c3c268b55eff9e"
  },
  {
    "url": "assets/js/590.js",
    "revision": "9f649fae31aa73102786f4dcb5b5fab9"
  },
  {
    "url": "assets/js/591.js",
    "revision": "4899f42410b1b6f7c4cc74d6751cec91"
  },
  {
    "url": "assets/js/592.js",
    "revision": "b6816493ba18be12463f64acf66874fe"
  },
  {
    "url": "assets/js/593.js",
    "revision": "047eb568aee95850b2d6e1ef4da35be9"
  },
  {
    "url": "assets/js/594.js",
    "revision": "c70ed2999fef406911a137150a146afa"
  },
  {
    "url": "assets/js/595.js",
    "revision": "9bbaf5c01f4ed62e16738c3f5e4c436a"
  },
  {
    "url": "assets/js/596.js",
    "revision": "fda3c3546a7a9224aa08d7b91a5cbf31"
  },
  {
    "url": "assets/js/6.js",
    "revision": "941e1282243cb125e5fefa64015f84ab"
  },
  {
    "url": "assets/js/60.js",
    "revision": "c64f116332ce65326d00a42267b8497e"
  },
  {
    "url": "assets/js/61.js",
    "revision": "1532f9a693b5ba481e55d6072c223914"
  },
  {
    "url": "assets/js/62.js",
    "revision": "dd2af9451cfeb173b69ee4cdaec5c311"
  },
  {
    "url": "assets/js/63.js",
    "revision": "f7381262d8e8d0c18d02d77df956efa2"
  },
  {
    "url": "assets/js/64.js",
    "revision": "099b20567aa32dd4287e834e124528d9"
  },
  {
    "url": "assets/js/65.js",
    "revision": "26f1db403a93dc2efe19986fe55fdd16"
  },
  {
    "url": "assets/js/66.js",
    "revision": "9d9ad460d452798b6c97d3dfaba15c55"
  },
  {
    "url": "assets/js/67.js",
    "revision": "0106649355433bd5721641df8a915a41"
  },
  {
    "url": "assets/js/68.js",
    "revision": "3bc22e33b124682e4e6cbd1a1b7042af"
  },
  {
    "url": "assets/js/69.js",
    "revision": "9aa33b42029a703e720dddeebc61896d"
  },
  {
    "url": "assets/js/7.js",
    "revision": "5feeb4f8354e9657f634cf69c13e551a"
  },
  {
    "url": "assets/js/70.js",
    "revision": "2185340815cc54b1cf3d893fd3d92510"
  },
  {
    "url": "assets/js/71.js",
    "revision": "06ba3360185dea1c8ace54d72ac14cd5"
  },
  {
    "url": "assets/js/72.js",
    "revision": "8f74c066986157f71d414328efa0692e"
  },
  {
    "url": "assets/js/73.js",
    "revision": "c40d78811e92fda4ad0f69a48b01d1ee"
  },
  {
    "url": "assets/js/74.js",
    "revision": "37107e58144ef69b5b6e34e769e54c06"
  },
  {
    "url": "assets/js/75.js",
    "revision": "2d1bf1c752efbd45906d720da8fde577"
  },
  {
    "url": "assets/js/76.js",
    "revision": "f0c93eb187dad0ed625679b38c028231"
  },
  {
    "url": "assets/js/77.js",
    "revision": "158e4fce709bed81a1abd1d17935fc77"
  },
  {
    "url": "assets/js/78.js",
    "revision": "7faacf24d6a1870ca32ae28d10325048"
  },
  {
    "url": "assets/js/79.js",
    "revision": "4585c76a3d9fb29ba9d13b51aaefb35e"
  },
  {
    "url": "assets/js/8.js",
    "revision": "8076a201659069b5d507cfabdacc9d42"
  },
  {
    "url": "assets/js/80.js",
    "revision": "a1688414cfb920626813c505850441af"
  },
  {
    "url": "assets/js/81.js",
    "revision": "c984346f477080e72bfa470205eaac2d"
  },
  {
    "url": "assets/js/82.js",
    "revision": "a81a508f0d3e4994c909cdfdf33e302b"
  },
  {
    "url": "assets/js/83.js",
    "revision": "c35ee19f4de3ebf612c254981f729c27"
  },
  {
    "url": "assets/js/84.js",
    "revision": "110493874bb76f0ac27476270272fd3c"
  },
  {
    "url": "assets/js/85.js",
    "revision": "a7f926e215af176d46507d9dd04dc074"
  },
  {
    "url": "assets/js/86.js",
    "revision": "42d105e6928ee02ddda1bc6f1060f502"
  },
  {
    "url": "assets/js/87.js",
    "revision": "ef22d9e31038a7ee531a1fc097ff88df"
  },
  {
    "url": "assets/js/88.js",
    "revision": "0ecb514b58161ce35594ce93abfdd798"
  },
  {
    "url": "assets/js/89.js",
    "revision": "b0ad1fbae0cdf4d38b8062bea8acebbb"
  },
  {
    "url": "assets/js/9.js",
    "revision": "afea8176727f4b14248e7e25501090b9"
  },
  {
    "url": "assets/js/90.js",
    "revision": "b7475a298952f32f343833af0d99e147"
  },
  {
    "url": "assets/js/91.js",
    "revision": "e66fdc32e19567d04f4f721a6c45ba83"
  },
  {
    "url": "assets/js/92.js",
    "revision": "2d1ef821f21ebf3cf9be2cc45626bbfe"
  },
  {
    "url": "assets/js/93.js",
    "revision": "f6439742eb0fc2e86ae39837ce0b646e"
  },
  {
    "url": "assets/js/94.js",
    "revision": "661023bcafba8e5c79f8cbb9d5311a80"
  },
  {
    "url": "assets/js/95.js",
    "revision": "c6c5c54849577ef5c68cedb332fa3cb4"
  },
  {
    "url": "assets/js/96.js",
    "revision": "dee7d2ba9491456110f653b1967fd28e"
  },
  {
    "url": "assets/js/97.js",
    "revision": "25cfae4c728e59d3b289c785fdf9070b"
  },
  {
    "url": "assets/js/98.js",
    "revision": "70e0fb1bd49f96e486f16ecf3dba0f9c"
  },
  {
    "url": "assets/js/99.js",
    "revision": "bcaaa8068f635b520d20650f8b9a7a4d"
  },
  {
    "url": "assets/js/app.js",
    "revision": "9dbecff1ae61f97d1befdb3fb462cc98"
  },
  {
    "url": "assets/js/styles.js",
    "revision": "22f22b49cc901aa95826401f7ce0930c"
  },
  {
    "url": "blog/category/index.html",
    "revision": "16579781e304f85afdcc4c32db57263e"
  },
  {
    "url": "blog/code/artists/index.html",
    "revision": "3308f70131a10a8daae1569eac9ab7b3"
  },
  {
    "url": "blog/code/asa.sbh.nz/index.html",
    "revision": "cd8062001a0d9a557b09476e91dcfb5f"
  },
  {
    "url": "blog/code/decrypt/index.html",
    "revision": "37d4bee171b18bf97b05ef41622a75f7"
  },
  {
    "url": "blog/code/divider/index.html",
    "revision": "22b7fbf23885a24ccd49f8a45936e879"
  },
  {
    "url": "blog/code/first/index.html",
    "revision": "4ae0ad8e10b6b70b3c71f5bdd494a7ce"
  },
  {
    "url": "blog/code/fishbarrel/index.html",
    "revision": "7840efb7c7b78064b54d41f7fa6903be"
  },
  {
    "url": "blog/code/indent/index.html",
    "revision": "ab59d9f6e8294502783f644ae4ee4fde"
  },
  {
    "url": "blog/code/index.html",
    "revision": "316c3b1c39f239cbed89d1cfa2ab3fca"
  },
  {
    "url": "blog/code/ingoa.nz/index.html",
    "revision": "1710debf0a58feb9fd7716be47d74d33"
  },
  {
    "url": "blog/code/nzondemand/index.html",
    "revision": "43b986e35504347f83e284101e39d0c7"
  },
  {
    "url": "blog/code/picard/index.html",
    "revision": "9f88b8fd6ea0c09a917831790cb8fbd8"
  },
  {
    "url": "blog/code/qr/index.html",
    "revision": "f33231329d49fa4a4b1549f781edc746"
  },
  {
    "url": "blog/code/readable/index.html",
    "revision": "53453c75034a7afd46153e162dff8a78"
  },
  {
    "url": "blog/code/tone/index.html",
    "revision": "2341577197926fd32d900eb127ad4ff0"
  },
  {
    "url": "blog/code/war/index.html",
    "revision": "a0aa2df0b41791bf6528b09c65c07025"
  },
  {
    "url": "blog/code/website/index.html",
    "revision": "45a860a4dbc15cfb32950dd849032c15"
  },
  {
    "url": "blog/code/website/route/index.html",
    "revision": "1af3dce03e3ae31165e36fcb745cda43"
  },
  {
    "url": "blog/code/website/site/index.html",
    "revision": "4615dcb8100b884e3e0598eaa521fce0"
  },
  {
    "url": "blog/code/xmltv.co.nz/index.html",
    "revision": "578956e833d5ab01ab987d845ebf85bb"
  },
  {
    "url": "blog/howto/index.html",
    "revision": "7d56ec51fda84d31193355bc05dbdf93"
  },
  {
    "url": "blog/howto/intel865/index.html",
    "revision": "777a5dad63fcd88a09f48efe557bbff3"
  },
  {
    "url": "blog/howto/ios/index.html",
    "revision": "6b23059b458ddddb1b467e58b526f2c3"
  },
  {
    "url": "blog/howto/nexentastor/index.html",
    "revision": "e97e3012a1699458fdd5d4df177d8c12"
  },
  {
    "url": "blog/howto/pcloadletter/index.html",
    "revision": "91ef8e567c179e53f17a8af2de6890aa"
  },
  {
    "url": "blog/howto/raid5/index.html",
    "revision": "5bbc86f8ee5695b79487df6fcd139091"
  },
  {
    "url": "blog/index.html",
    "revision": "41a572e2c195f329e7d6225ba4eac6f0"
  },
  {
    "url": "blog/life/anotheryear/index.html",
    "revision": "70919e2977ec2f5f7dd7f543c4b1c880"
  },
  {
    "url": "blog/life/birthday/index.html",
    "revision": "216711cfc59b2e2a1c104f002006ddd4"
  },
  {
    "url": "blog/life/blasphemy/index.html",
    "revision": "e5e7410488bb6bd92494a403c1c5e349"
  },
  {
    "url": "blog/life/blogger/index.html",
    "revision": "39bf36f5cde18e85995cc309c4e3bcdf"
  },
  {
    "url": "blog/life/blurry/index.html",
    "revision": "62eeb4d35f0b64d6091e4b0572340ca5"
  },
  {
    "url": "blog/life/busyday/index.html",
    "revision": "25a39a90a579109fe3036d873c8de17e"
  },
  {
    "url": "blog/life/domain/index.html",
    "revision": "f02eb32ad9f7ca525e57f3c3d3b7eb68"
  },
  {
    "url": "blog/life/exams/index.html",
    "revision": "60227830affe24558b1543eb40b43cfb"
  },
  {
    "url": "blog/life/food/index.html",
    "revision": "2c1bafaaad6c9ab622e4e2da73b0b039"
  },
  {
    "url": "blog/life/glenview/index.html",
    "revision": "c779642342823d07d19515d9732cc23b"
  },
  {
    "url": "blog/life/headlines/index.html",
    "revision": "2688bb3f2a3dfb68ac491164a4080e02"
  },
  {
    "url": "blog/life/index.html",
    "revision": "008d048b846daa26e3477ba91b7bb4de"
  },
  {
    "url": "blog/life/jws/index.html",
    "revision": "7f9cf9daf7556a66ef29b45aa8a49b85"
  },
  {
    "url": "blog/life/keyboard/index.html",
    "revision": "43bdea23baa9848a36afa4eebb238842"
  },
  {
    "url": "blog/life/lpi201/index.html",
    "revision": "fd15b34dc072cc47b7627a69b74e8946"
  },
  {
    "url": "blog/life/mashup/index.html",
    "revision": "76a811057f09e2d01da91ec925ab7cbc"
  },
  {
    "url": "blog/life/motorweb/index.html",
    "revision": "e263ccebeed083b78e0eb3f9616a06a1"
  },
  {
    "url": "blog/life/nxe/index.html",
    "revision": "a2b222f47768e3d54359727279e48885"
  },
  {
    "url": "blog/life/plates/index.html",
    "revision": "f04bb98d75ca3700f6b2860a4a0ffe95"
  },
  {
    "url": "blog/life/queenstown/index.html",
    "revision": "c9844774473642a68a1f4d303af00ac7"
  },
  {
    "url": "blog/life/racism/index.html",
    "revision": "c4afd51a541633db33e42a3eb686eafb"
  },
  {
    "url": "blog/life/roads/index.html",
    "revision": "f33fe5ca6b8d927d18ec5bef296e8061"
  },
  {
    "url": "blog/life/roots/index.html",
    "revision": "723eab19f2b870bee58f30dc51460768"
  },
  {
    "url": "blog/life/scare/index.html",
    "revision": "b8dc6dc9dcad041f25ebaf71f246d77d"
  },
  {
    "url": "blog/life/scary/index.html",
    "revision": "0849eee7ea9fc7b73cba7e7c32179a69"
  },
  {
    "url": "blog/life/seti/index.html",
    "revision": "342c488574778b38bb5795e9f95cd85d"
  },
  {
    "url": "blog/life/skeptical/index.html",
    "revision": "31e6cc9e1bb78dfc03cd39d39bccba40"
  },
  {
    "url": "blog/life/skepticzone/index.html",
    "revision": "d862ece72f0aaecd6449b61800d13e8c"
  },
  {
    "url": "blog/life/spam/index.html",
    "revision": "4d9b1f21c6696b8b07385bd5e4839ed4"
  },
  {
    "url": "blog/life/trademe/index.html",
    "revision": "2b6da50415f22798aceede39ccdd3eec"
  },
  {
    "url": "blog/life/unforeseen/index.html",
    "revision": "237e5b8a6e23a459bb5625975f9bc59f"
  },
  {
    "url": "blog/life/wobbly/index.html",
    "revision": "ce69f5f6ee3310a62caa9741dd09b311"
  },
  {
    "url": "blog/projects/ahs/index.html",
    "revision": "9a9f694745ae3ae887a329d5a196d40f"
  },
  {
    "url": "blog/projects/airbag/index.html",
    "revision": "0451e4607dbd4c4b67c3df2060d7e500"
  },
  {
    "url": "blog/projects/ambilight/index.html",
    "revision": "7fb9342ad2fa0f90aceb595f22ec31ec"
  },
  {
    "url": "blog/projects/automation/index.html",
    "revision": "d0254af03b1f191e9d4d9ab9fb051564"
  },
  {
    "url": "blog/projects/eyes/index.html",
    "revision": "23aaa66180fa249a9c1563e53bd123af"
  },
  {
    "url": "blog/projects/glitch/index.html",
    "revision": "51a9a1036295f346821d807cef7a3be3"
  },
  {
    "url": "blog/projects/hotel/index.html",
    "revision": "51672ac9b46a2ea25c5d3896a5701fb4"
  },
  {
    "url": "blog/projects/index.html",
    "revision": "df4b02c4eb6c78e08bcb886d74530480"
  },
  {
    "url": "blog/projects/it100/index.html",
    "revision": "b63bc618b053fbc7dac31898e93cf2d5"
  },
  {
    "url": "blog/projects/microscope/index.html",
    "revision": "6f6d130fd2c5c17527c61e3fee3baeb2"
  },
  {
    "url": "blog/projects/mirror/index.html",
    "revision": "a18ca4bc156698f991bfbc53a7fba75a"
  },
  {
    "url": "blog/projects/picture/index.html",
    "revision": "6f5635e11b454bf75acc963cfd7b1cac"
  },
  {
    "url": "blog/projects/pizza/index.html",
    "revision": "d958dabbf1ff1d3030f605abbc5e5d03"
  },
  {
    "url": "blog/projects/podcast/index.html",
    "revision": "fe8bd1fbba3ffcd14970dda876855a5c"
  },
  {
    "url": "blog/projects/reflow/index.html",
    "revision": "bb83aab41296076edb1c081dc2e69191"
  },
  {
    "url": "blog/projects/sandbox/index.html",
    "revision": "4435782d4aec7df32b07955a1a9ad446"
  },
  {
    "url": "blog/projects/screens/index.html",
    "revision": "9a28508ae05c44b3e30d9da64d125700"
  },
  {
    "url": "blog/projects/sky/index.html",
    "revision": "741cc4b69f1443f09981fc422e046559"
  },
  {
    "url": "blog/projects/starwars/index.html",
    "revision": "6411fe4fd2bca9957869d179bfaa5f83"
  },
  {
    "url": "blog/projects/xbox/index.html",
    "revision": "53f669313cc3baa10ea0e4d278359e90"
  },
  {
    "url": "blog/random/addresses/index.html",
    "revision": "1837cc9bd720944b50d76ab79ded4d0f"
  },
  {
    "url": "blog/random/alphabet/index.html",
    "revision": "a7421dfc3a9f93144392284d01a780d7"
  },
  {
    "url": "blog/random/astrology/index.html",
    "revision": "e14179daabb4191069b041a7b0a5c091"
  },
  {
    "url": "blog/random/chicken/index.html",
    "revision": "cf748e31ba94064df47ad6029d9d41b4"
  },
  {
    "url": "blog/random/dns/index.html",
    "revision": "4f048614d60e2826abc4f03932745004"
  },
  {
    "url": "blog/random/evp/index.html",
    "revision": "02e88262fe8e715d15ec45e2e0946217"
  },
  {
    "url": "blog/random/flip/index.html",
    "revision": "62b7eba792fec661ade11a7db61eadaa"
  },
  {
    "url": "blog/random/honeychurch/index.html",
    "revision": "3602b356388a01197736b88335cf8aa4"
  },
  {
    "url": "blog/random/index.html",
    "revision": "de9d6a421651259e43d009efc509d77f"
  },
  {
    "url": "blog/random/lottery/index.html",
    "revision": "989d761f1f31caf214bdfdfa4630bfba"
  },
  {
    "url": "blog/random/music/index.html",
    "revision": "04d7b0fbf05d070bf52b386069cceaa5"
  },
  {
    "url": "blog/random/octal/index.html",
    "revision": "b50260c9321757a535f583b3e81eb1bb"
  },
  {
    "url": "blog/random/os/index.html",
    "revision": "691a456eaddfd91bf41064dc478759d9"
  },
  {
    "url": "blog/random/propellers/index.html",
    "revision": "126852e89339474fbcaec0e7b47e9faf"
  },
  {
    "url": "blog/random/robux/index.html",
    "revision": "1a9c720345b000beaf71ef1d5bdf1da8"
  },
  {
    "url": "blog/random/super/index.html",
    "revision": "a7b610e9c61ff154e03c9f7a65ad1e15"
  },
  {
    "url": "blog/random/times/index.html",
    "revision": "0e5dd7a6381f378f2ace9fc3a7649bd3"
  },
  {
    "url": "blog/random/travel/index.html",
    "revision": "74ad70a576374775408c54894a488cba"
  },
  {
    "url": "blog/random/wilhelm/index.html",
    "revision": "22e13f54a95b2ed3d51938cf315b2d5d"
  },
  {
    "url": "blog/random/year/index.html",
    "revision": "6749364ef9d5a70d958ea0b2fbab8e69"
  },
  {
    "url": "blog/skepticism/2015/08/16/asa/index.html",
    "revision": "9ff7567f08f8ee0c5d62098bda4419a0"
  },
  {
    "url": "blog/skepticism/2015/08/16/awards/index.html",
    "revision": "c51e0b851bd664da566436c94543612c"
  },
  {
    "url": "blog/skepticism/2015/08/16/bravo/index.html",
    "revision": "42590e74407d5ca5c5020d8e9bb77384"
  },
  {
    "url": "blog/skepticism/2015/08/16/index.html",
    "revision": "6fec35c7c2f29c3346407347e7cab76b"
  },
  {
    "url": "blog/skepticism/2015/08/16/jim/index.html",
    "revision": "8a41aaf6b1425649981bbce1d13d5e7f"
  },
  {
    "url": "blog/skepticism/2015/08/16/naholo/index.html",
    "revision": "dbea05ced4a83d82b1330c27d4750ff6"
  },
  {
    "url": "blog/skepticism/2015/08/16/resene/index.html",
    "revision": "3182320f258b9b0a93e0f31cc99d658b"
  },
  {
    "url": "blog/skepticism/2015/08/index.html",
    "revision": "ea3f9f8b724a9ade54a0f08b119e26a4"
  },
  {
    "url": "blog/skepticism/2015/09/20/gop/index.html",
    "revision": "c04e921784aa5b85274fcddb71bcd9e0"
  },
  {
    "url": "blog/skepticism/2015/09/20/ignobel/index.html",
    "revision": "f931d729ccc2a86d8d84ff32ddcc2f9a"
  },
  {
    "url": "blog/skepticism/2015/09/20/index.html",
    "revision": "ae469b8c598ad8b27adf1aee7f0a7fa2"
  },
  {
    "url": "blog/skepticism/2015/09/20/supplements/index.html",
    "revision": "7898a5733cc83b5432aa06c544d66089"
  },
  {
    "url": "blog/skepticism/2015/09/27/ayahuasca/index.html",
    "revision": "f953b825a3e1f3b387c306637a3d2968"
  },
  {
    "url": "blog/skepticism/2015/09/27/drought/index.html",
    "revision": "459b05cf43d63744ce676d3f63eee86a"
  },
  {
    "url": "blog/skepticism/2015/09/27/index.html",
    "revision": "1ff7b4eb9126291de44a46b1371b0dc9"
  },
  {
    "url": "blog/skepticism/2015/09/27/lama/index.html",
    "revision": "75b8e3cf4c3a7cc35971965fca5e9193"
  },
  {
    "url": "blog/skepticism/2015/09/27/moon/index.html",
    "revision": "df225c654db2bf2b6be9c788374fbb3a"
  },
  {
    "url": "blog/skepticism/2015/09/27/scan/index.html",
    "revision": "914180c7393f6fcccf90d8a4ea4746d7"
  },
  {
    "url": "blog/skepticism/2015/09/index.html",
    "revision": "dfcd697bf804825afc7affd9eb673d76"
  },
  {
    "url": "blog/skepticism/2015/10/04/ghost/index.html",
    "revision": "c2de5e0fa2698776cb144ca29d4a380b"
  },
  {
    "url": "blog/skepticism/2015/10/04/haka/index.html",
    "revision": "49c8d641ab81f3af734777bb914efd6c"
  },
  {
    "url": "blog/skepticism/2015/10/04/index.html",
    "revision": "6f64f604854f8b965beb2542521c9d84"
  },
  {
    "url": "blog/skepticism/2015/10/04/mars/index.html",
    "revision": "4ac2b4ab94473aa49b947d6de6e414bd"
  },
  {
    "url": "blog/skepticism/2015/10/04/pharmacy/index.html",
    "revision": "a994156e3f30707c16996465af03aa5f"
  },
  {
    "url": "blog/skepticism/2015/10/04/prostate/index.html",
    "revision": "9f4021b36bf3748ba11971d88c9c66ea"
  },
  {
    "url": "blog/skepticism/2015/10/11/armageddon/index.html",
    "revision": "223ceb6a643e9d5981f2effb42fb2661"
  },
  {
    "url": "blog/skepticism/2015/10/11/climate/index.html",
    "revision": "3b22876ac8685d99baa985fda2c2c469"
  },
  {
    "url": "blog/skepticism/2015/10/11/ghost/index.html",
    "revision": "1b34368781bdad46fa455b3aaafbf908"
  },
  {
    "url": "blog/skepticism/2015/10/11/index.html",
    "revision": "8366864c320a5b749c598172aa4e5fa1"
  },
  {
    "url": "blog/skepticism/2015/10/11/magnesleep/index.html",
    "revision": "f1a42bda9061f6ea5c71cc9b63017b5b"
  },
  {
    "url": "blog/skepticism/2015/10/11/nhs/index.html",
    "revision": "58d2ffc95c123d5250c2eeb8c37a68bf"
  },
  {
    "url": "blog/skepticism/2015/10/11/prophet/index.html",
    "revision": "cf274de305c679236a03896697f82803"
  },
  {
    "url": "blog/skepticism/2015/10/index.html",
    "revision": "2dd0a7f1ac33eab9309ab256ab315dfd"
  },
  {
    "url": "blog/skepticism/2015/11/15/end/index.html",
    "revision": "c18d52b6c8ce4ff419a45b6c6735e391"
  },
  {
    "url": "blog/skepticism/2015/11/15/index.html",
    "revision": "4e36646aca21c220decfc9397361459f"
  },
  {
    "url": "blog/skepticism/2015/11/index.html",
    "revision": "a9dfa901dc40a6d9ba7d84fb5bfcb5ec"
  },
  {
    "url": "blog/skepticism/2015/12/13/astrology/index.html",
    "revision": "074255eb7f00999b9fab620b86cb0cdc"
  },
  {
    "url": "blog/skepticism/2015/12/13/cancer/index.html",
    "revision": "f87c977e1e34f4f4ae666faf1eb62fcd"
  },
  {
    "url": "blog/skepticism/2015/12/13/chickenpox/index.html",
    "revision": "e1279bd11bd4e4bfe1ff4c0c65995879"
  },
  {
    "url": "blog/skepticism/2015/12/13/index.html",
    "revision": "ad0bd5873608f928dbdee462027a6489"
  },
  {
    "url": "blog/skepticism/2015/12/13/osteopath/index.html",
    "revision": "fbb57317be5bd10db9ed559dd5b13904"
  },
  {
    "url": "blog/skepticism/2015/12/13/priest/index.html",
    "revision": "44a0ed58ac77eb4491bda9e376c4d92e"
  },
  {
    "url": "blog/skepticism/2015/12/13/psychic/index.html",
    "revision": "22870b672ea0d9ac6baab254ac52e711"
  },
  {
    "url": "blog/skepticism/2015/12/13/vaccines/index.html",
    "revision": "5b8399ace4fc5b9f9a2fe97cc931e059"
  },
  {
    "url": "blog/skepticism/2015/12/index.html",
    "revision": "8f2d8ce0b9a44136f28de3ae306f3966"
  },
  {
    "url": "blog/skepticism/2015/index.html",
    "revision": "ca953172baa8d338a58a788ea929e97a"
  },
  {
    "url": "blog/skepticism/2016/02/07/antioxidant/index.html",
    "revision": "d543c447dafc0d9d2f9ff01df150d39a"
  },
  {
    "url": "blog/skepticism/2016/02/07/index.html",
    "revision": "382f0f524ab73807895ff432db349c41"
  },
  {
    "url": "blog/skepticism/2016/02/07/kfc/index.html",
    "revision": "78e4e6839df91e881b4fa3e708c09a4e"
  },
  {
    "url": "blog/skepticism/2016/02/07/ph/index.html",
    "revision": "99ae4c3f8b2abc6b93aa046f77fe5f7a"
  },
  {
    "url": "blog/skepticism/2016/02/07/sandy/index.html",
    "revision": "8c61a25e0bf51a959d0e90d5bd351a04"
  },
  {
    "url": "blog/skepticism/2016/02/07/sarfati/index.html",
    "revision": "7d389e9e748f6e1f3f31b19c20bdea57"
  },
  {
    "url": "blog/skepticism/2016/02/07/trump/index.html",
    "revision": "b80bced3062b40b584c16fd43db2523a"
  },
  {
    "url": "blog/skepticism/2016/02/14/coins/index.html",
    "revision": "bb6f9a4b1d3226366884e561774f54ca"
  },
  {
    "url": "blog/skepticism/2016/02/14/fast/index.html",
    "revision": "6a8097a3cd41f0d9353b6462f057adad"
  },
  {
    "url": "blog/skepticism/2016/02/14/fluoride/index.html",
    "revision": "50b167df8a5613f10efd22fc04f5d361"
  },
  {
    "url": "blog/skepticism/2016/02/14/icke/index.html",
    "revision": "747c9ef56dd7bbf661b5f0a4b2333cd8"
  },
  {
    "url": "blog/skepticism/2016/02/14/index.html",
    "revision": "30716aff763f40883198c448e7895f56"
  },
  {
    "url": "blog/skepticism/2016/02/14/yeti/index.html",
    "revision": "2c8df25599b7bdc889a460603851bcaa"
  },
  {
    "url": "blog/skepticism/2016/02/21/homeopathy/index.html",
    "revision": "4f038ef4a8c0ecc75757d3a73bed779d"
  },
  {
    "url": "blog/skepticism/2016/02/21/index.html",
    "revision": "b8aa54c1e7b147f99ca6852ac68c30c2"
  },
  {
    "url": "blog/skepticism/2016/02/21/monster/index.html",
    "revision": "1f315ca90b14f2c169cf50ba8b827b5f"
  },
  {
    "url": "blog/skepticism/2016/02/21/scalia/index.html",
    "revision": "39852712903a4bb0914c21945fdc3ed3"
  },
  {
    "url": "blog/skepticism/2016/02/21/shane/index.html",
    "revision": "37ffdf6e1fb58cf6bb9ea10c91b15c0a"
  },
  {
    "url": "blog/skepticism/2016/02/21/texas/index.html",
    "revision": "a84f65d9b3e09e2c16b89ada0ab82c5f"
  },
  {
    "url": "blog/skepticism/2016/02/28/acupuncture/index.html",
    "revision": "63f1643b9d985c178ad928cedea15dc9"
  },
  {
    "url": "blog/skepticism/2016/02/28/fsm/index.html",
    "revision": "c917748802a61f79d3b0685dc61ffc5b"
  },
  {
    "url": "blog/skepticism/2016/02/28/index.html",
    "revision": "a06a928f5ac0b569dcaf77b6bed6aa19"
  },
  {
    "url": "blog/skepticism/2016/02/28/iv/index.html",
    "revision": "9037bfde6287651cf3250dada4eb12ef"
  },
  {
    "url": "blog/skepticism/2016/02/28/natural/index.html",
    "revision": "63a8c6d2a470249929073e40d1676230"
  },
  {
    "url": "blog/skepticism/2016/02/28/talc/index.html",
    "revision": "ed3dfd3f599d7461ed81230a81529e91"
  },
  {
    "url": "blog/skepticism/2016/02/index.html",
    "revision": "d34d2c515587e8f0a2a7a67e5d45af73"
  },
  {
    "url": "blog/skepticism/2016/03/13/herbs/index.html",
    "revision": "fbbc1c670b46022e3c0c26884ef4248d"
  },
  {
    "url": "blog/skepticism/2016/03/13/index.html",
    "revision": "5500aa9727664485539457fdee260a95"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandala/index.html",
    "revision": "c9c38315ab91a50121c54eb3bef56f46"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandela/index.html",
    "revision": "79e980538bc9b2f7e5e9ad86072e8a3c"
  },
  {
    "url": "blog/skepticism/2016/03/13/spray/index.html",
    "revision": "66c4e85e4f664b929bf242f8b5ea78d7"
  },
  {
    "url": "blog/skepticism/2016/03/index.html",
    "revision": "2ce7f790152ab6c2aabe17d5dc916557"
  },
  {
    "url": "blog/skepticism/2016/04/17/charity/index.html",
    "revision": "3246ec061f09c5e8412eb5b99e3e1705"
  },
  {
    "url": "blog/skepticism/2016/04/17/chiro/index.html",
    "revision": "2fe95e202ffe90f74dde447d7ac91532"
  },
  {
    "url": "blog/skepticism/2016/04/17/fluoride/index.html",
    "revision": "0e6f7c365a979f5a3b51e865acc4438c"
  },
  {
    "url": "blog/skepticism/2016/04/17/index.html",
    "revision": "fec9de5e5a80b8677f177442dea44cb9"
  },
  {
    "url": "blog/skepticism/2016/04/17/lotto/index.html",
    "revision": "6035c04eaca5a6ffaef5ac9b7168e18d"
  },
  {
    "url": "blog/skepticism/2016/04/17/mind/index.html",
    "revision": "625748937ea7a2dde5fb2355f07bd242"
  },
  {
    "url": "blog/skepticism/2016/04/17/whooping/index.html",
    "revision": "7435bdd97fb43a1bb769a540ea3d46f9"
  },
  {
    "url": "blog/skepticism/2016/04/index.html",
    "revision": "84f7f7d61b6260e0aa43114aa9e03a03"
  },
  {
    "url": "blog/skepticism/2016/06/05/1080/index.html",
    "revision": "2baada122fddee20089768921d04acfd"
  },
  {
    "url": "blog/skepticism/2016/06/05/acupuncture/index.html",
    "revision": "5c4a74369d5b83fcb4cf51730bf4061f"
  },
  {
    "url": "blog/skepticism/2016/06/05/family/index.html",
    "revision": "9c8e4f314bb22e43fff721fa55730f28"
  },
  {
    "url": "blog/skepticism/2016/06/05/index.html",
    "revision": "52a5df5d9ccaf3981e8624e6f455908a"
  },
  {
    "url": "blog/skepticism/2016/06/05/limbaugh/index.html",
    "revision": "b716db805248564877166e1a51acf915"
  },
  {
    "url": "blog/skepticism/2016/06/12/bobby/index.html",
    "revision": "d8c094c77c79d0b589c74d755052e7f4"
  },
  {
    "url": "blog/skepticism/2016/06/12/climate/index.html",
    "revision": "e983e88fff7f8de0c0fe01c6282dc618"
  },
  {
    "url": "blog/skepticism/2016/06/12/index.html",
    "revision": "891a04821820144b86c3389d72dbe0b5"
  },
  {
    "url": "blog/skepticism/2016/06/12/pugh/index.html",
    "revision": "291bcefb3b4d1bd1ad3a887fe33b61d3"
  },
  {
    "url": "blog/skepticism/2016/06/12/savage/index.html",
    "revision": "69b372abaf142c93a948e775b144501a"
  },
  {
    "url": "blog/skepticism/2016/06/12/sawdust/index.html",
    "revision": "2ea7eace04f5c6ba8c6f0274ff1f4034"
  },
  {
    "url": "blog/skepticism/2016/06/19/beauty/index.html",
    "revision": "f17983fc39194f0ddfd7c1af37806be5"
  },
  {
    "url": "blog/skepticism/2016/06/19/bilderberg/index.html",
    "revision": "7f7d2f57c623e548baf3a83481ed2568"
  },
  {
    "url": "blog/skepticism/2016/06/19/cyf/index.html",
    "revision": "f3c9121e46002031b6e78d04d6081143"
  },
  {
    "url": "blog/skepticism/2016/06/19/holt/index.html",
    "revision": "c86ea58f0e7cef7748a8125e86334feb"
  },
  {
    "url": "blog/skepticism/2016/06/19/index.html",
    "revision": "d7de8667ff605b8c2db5919bd19bcc43"
  },
  {
    "url": "blog/skepticism/2016/06/19/silver/index.html",
    "revision": "e2a9a9a8da746abffa1074310bc13845"
  },
  {
    "url": "blog/skepticism/2016/06/19/ufo/index.html",
    "revision": "50010239d16283031ceca32abe2d5c8d"
  },
  {
    "url": "blog/skepticism/2016/06/26/homeopathy/index.html",
    "revision": "49162fda98d949481e5149db17cc6272"
  },
  {
    "url": "blog/skepticism/2016/06/26/index.html",
    "revision": "e5a83048e6ee1b2f30dd74e505456c79"
  },
  {
    "url": "blog/skepticism/2016/06/26/robbins/index.html",
    "revision": "d4bfbd93bcfc37aa13dbc5b395ea98e7"
  },
  {
    "url": "blog/skepticism/2016/06/26/selfies/index.html",
    "revision": "5cb6e3dd6e9a0eb064dc05f182b4f703"
  },
  {
    "url": "blog/skepticism/2016/06/26/silver/index.html",
    "revision": "3d6acdc1b5ffd36a99cabead3267e988"
  },
  {
    "url": "blog/skepticism/2016/06/26/ufos/index.html",
    "revision": "8b6bf1ecd27ffbb2806d5ba11217181c"
  },
  {
    "url": "blog/skepticism/2016/06/index.html",
    "revision": "2dea34f5208ca5196fe8d6a5a5b19b0f"
  },
  {
    "url": "blog/skepticism/2016/07/03/glyphosate/index.html",
    "revision": "34da558e8421808b9a67076765b06ecb"
  },
  {
    "url": "blog/skepticism/2016/07/03/gmo/index.html",
    "revision": "0acd188fbe51f6c96cd22d7bd08e6340"
  },
  {
    "url": "blog/skepticism/2016/07/03/index.html",
    "revision": "dde08ebb68c932133b7b5aa93645230e"
  },
  {
    "url": "blog/skepticism/2016/07/03/jail/index.html",
    "revision": "067f7717965497cf9e95e7cd0f9bbe5a"
  },
  {
    "url": "blog/skepticism/2016/07/03/ken/index.html",
    "revision": "1041c068b2619e640cf81f74dba55647"
  },
  {
    "url": "blog/skepticism/2016/07/10/ark/index.html",
    "revision": "448b42bccac317302183c540c446a5df"
  },
  {
    "url": "blog/skepticism/2016/07/10/bee/index.html",
    "revision": "a7f4f60b6123329c3fe5fd6c69065415"
  },
  {
    "url": "blog/skepticism/2016/07/10/index.html",
    "revision": "2e7ae420fb964a85e0d719a6e7e088c5"
  },
  {
    "url": "blog/skepticism/2016/07/10/lottery/index.html",
    "revision": "61ad6dc75dfc42281176c6dc12f9a1b6"
  },
  {
    "url": "blog/skepticism/2016/07/10/murder/index.html",
    "revision": "64de66067f3706ed35d72a0bdcb6f7d7"
  },
  {
    "url": "blog/skepticism/2016/07/17/dogs/index.html",
    "revision": "71b8c27ebda202403d14c589cd31aba7"
  },
  {
    "url": "blog/skepticism/2016/07/17/fsm/index.html",
    "revision": "d074b3097431fcb0f12bb5f5241d6375"
  },
  {
    "url": "blog/skepticism/2016/07/17/fyi/index.html",
    "revision": "56dbae077f5f0906661c78be9acc9695"
  },
  {
    "url": "blog/skepticism/2016/07/17/index.html",
    "revision": "1f77e88025a8b27b4a82c5692e9e1005"
  },
  {
    "url": "blog/skepticism/2016/07/17/natural/index.html",
    "revision": "b8a54bb8c212172265aa4277115e8ad5"
  },
  {
    "url": "blog/skepticism/2016/07/17/pokemon/index.html",
    "revision": "a0d635789940a042d5f306cfc8a3520f"
  },
  {
    "url": "blog/skepticism/2016/07/index.html",
    "revision": "191e0adb25198f8fa846c98196270883"
  },
  {
    "url": "blog/skepticism/2016/08/07/icke/index.html",
    "revision": "fa0ab3da0d595c84d916f1d0cb4e711f"
  },
  {
    "url": "blog/skepticism/2016/08/07/index.html",
    "revision": "30e84b05d9233d4f4523c46ac1b0f981"
  },
  {
    "url": "blog/skepticism/2016/08/21/brian/index.html",
    "revision": "f7bc1ac4ede66496ded7ba445ad3a846"
  },
  {
    "url": "blog/skepticism/2016/08/21/chlorine/index.html",
    "revision": "7faa3d8464de343d7be5a85709b93d3d"
  },
  {
    "url": "blog/skepticism/2016/08/21/index.html",
    "revision": "5b274741a17cf88389e06492e4f4bf7b"
  },
  {
    "url": "blog/skepticism/2016/08/21/murder/index.html",
    "revision": "2697f1a289d31dea5babd4d105440ee7"
  },
  {
    "url": "blog/skepticism/2016/08/21/superfoods/index.html",
    "revision": "d8142cdff38d69290556b2d4e051a385"
  },
  {
    "url": "blog/skepticism/2016/08/21/witch/index.html",
    "revision": "8865e1d4254e5ae7bd27dc366f99caf4"
  },
  {
    "url": "blog/skepticism/2016/08/28/alcohol/index.html",
    "revision": "fe873449244507ff802aed379c9a02ca"
  },
  {
    "url": "blog/skepticism/2016/08/28/chiro/index.html",
    "revision": "20c184c6b91f84e24f47787163cb6703"
  },
  {
    "url": "blog/skepticism/2016/08/28/index.html",
    "revision": "921737588019315a52b72f2fbd7ff982"
  },
  {
    "url": "blog/skepticism/2016/08/28/processed/index.html",
    "revision": "26327ab67f4a2cf5e053385457b71713"
  },
  {
    "url": "blog/skepticism/2016/08/28/sbh/index.html",
    "revision": "b9cf0f2d860d4cb110acf6ef4a300e54"
  },
  {
    "url": "blog/skepticism/2016/08/index.html",
    "revision": "833f504e51b6ebefbd9152c1d8bc4119"
  },
  {
    "url": "blog/skepticism/2016/09/18/altruism/index.html",
    "revision": "32fdb093323bbd912a3cf4def2b7af4d"
  },
  {
    "url": "blog/skepticism/2016/09/18/better/index.html",
    "revision": "0f04a0d2e90ee02d291b323217ec6f90"
  },
  {
    "url": "blog/skepticism/2016/09/18/homeopathy/index.html",
    "revision": "9e9b8b3559d37e95a73fa33109170693"
  },
  {
    "url": "blog/skepticism/2016/09/18/index.html",
    "revision": "07257ba74c1df1b0af96459e492c33c1"
  },
  {
    "url": "blog/skepticism/2016/09/18/nonsense/index.html",
    "revision": "d2afd62c52c44c8d9e391a3f59cb1f01"
  },
  {
    "url": "blog/skepticism/2016/09/18/trump/index.html",
    "revision": "7ee49bb06497c3f37b21de64e3cc6f4c"
  },
  {
    "url": "blog/skepticism/2016/09/25/clinic/index.html",
    "revision": "4801a013ad2e57cb5eba50952c7f4559"
  },
  {
    "url": "blog/skepticism/2016/09/25/fluoride/index.html",
    "revision": "59769ad96dc1caaa784c38ba5cfdad6c"
  },
  {
    "url": "blog/skepticism/2016/09/25/homeopathy/index.html",
    "revision": "362428e0dcb96185a84ca143948c5a88"
  },
  {
    "url": "blog/skepticism/2016/09/25/index.html",
    "revision": "6d45cb1fa9e86a5704a512d844ebadb4"
  },
  {
    "url": "blog/skepticism/2016/09/25/murder/index.html",
    "revision": "c54f20f4274c331aabd6589c33bb7615"
  },
  {
    "url": "blog/skepticism/2016/09/index.html",
    "revision": "3ea6e640ca828971a9b9b74bab6d383e"
  },
  {
    "url": "blog/skepticism/2016/10/21/bigfoot/index.html",
    "revision": "a1b7c2b46a80d20ae0e18ad6024e93ac"
  },
  {
    "url": "blog/skepticism/2016/10/21/breasts/index.html",
    "revision": "d060f388d06d323436885607e731bc03"
  },
  {
    "url": "blog/skepticism/2016/10/21/index.html",
    "revision": "ff95672752af70764ab5d9a534e03ae0"
  },
  {
    "url": "blog/skepticism/2016/10/21/medsafe/index.html",
    "revision": "7c96051c1b9c14742307a9a0536d0b33"
  },
  {
    "url": "blog/skepticism/2016/10/21/zenteq/index.html",
    "revision": "aadc820c065d7d69dca904b26891600d"
  },
  {
    "url": "blog/skepticism/2016/10/index.html",
    "revision": "0fa166fe7ee2faad6fd3501f395f0724"
  },
  {
    "url": "blog/skepticism/2016/11/13/conference/index.html",
    "revision": "a047bf83c90647980cbd44a399c6c63c"
  },
  {
    "url": "blog/skepticism/2016/11/13/green/index.html",
    "revision": "687dd46423b996a4cd0c428e6a28291b"
  },
  {
    "url": "blog/skepticism/2016/11/13/index.html",
    "revision": "6cb50d7a836ee583312ee60e169e9df1"
  },
  {
    "url": "blog/skepticism/2016/11/13/vice/index.html",
    "revision": "4eaea5d4b73fc455d90e359a673a2b8b"
  },
  {
    "url": "blog/skepticism/2016/11/27/bioptron/index.html",
    "revision": "2c860f61dd72865dd71b78f2c6de129b"
  },
  {
    "url": "blog/skepticism/2016/11/27/conference/index.html",
    "revision": "115ee90695a64eea041e363c10f15c22"
  },
  {
    "url": "blog/skepticism/2016/11/27/earthquake/index.html",
    "revision": "b365e4738a85d2b6b332e7512d64e388"
  },
  {
    "url": "blog/skepticism/2016/11/27/index.html",
    "revision": "d56d00228b5d70d2e47f9af108a112c1"
  },
  {
    "url": "blog/skepticism/2016/11/index.html",
    "revision": "f96174281ec554d12c3622515b2f34d0"
  },
  {
    "url": "blog/skepticism/2016/12/04/conference/index.html",
    "revision": "3020aad06ab145a980ecde97ec84a5d4"
  },
  {
    "url": "blog/skepticism/2016/12/04/index.html",
    "revision": "6ba6e7afab92be2d2ab9a374f7c2e603"
  },
  {
    "url": "blog/skepticism/2016/12/18/colin/index.html",
    "revision": "25749fb788e1b0bbc4bb3201897afe48"
  },
  {
    "url": "blog/skepticism/2016/12/18/fiji/index.html",
    "revision": "cbf63a24a6aa65182f4dc20cdc418b7b"
  },
  {
    "url": "blog/skepticism/2016/12/18/index.html",
    "revision": "22984dc21d15de374ed3082cd2fbba03"
  },
  {
    "url": "blog/skepticism/2016/12/18/kinesiology/index.html",
    "revision": "8612bf0eb517eee4967293c2d1aef01f"
  },
  {
    "url": "blog/skepticism/2016/12/18/mmm/index.html",
    "revision": "4b9453096fb6d5fc991bc0820286b184"
  },
  {
    "url": "blog/skepticism/2016/12/18/nigel/index.html",
    "revision": "c793e95eb8cf242dadc899be3fc26d64"
  },
  {
    "url": "blog/skepticism/2016/12/index.html",
    "revision": "125d264df9ecbfad94810b82d83989bb"
  },
  {
    "url": "blog/skepticism/2016/index.html",
    "revision": "1f86c336cef58235b679e63a59fd8e7d"
  },
  {
    "url": "blog/skepticism/2017/01/22/index.html",
    "revision": "80a3a397d105e8b146087a5cd8ffd08c"
  },
  {
    "url": "blog/skepticism/2017/01/22/scientology/index.html",
    "revision": "997f2a0a466e1c19562cf7c4341dd9eb"
  },
  {
    "url": "blog/skepticism/2017/01/29/creation/index.html",
    "revision": "89457afd07e2ad44b8c0f0a9f8dfd91a"
  },
  {
    "url": "blog/skepticism/2017/01/29/index.html",
    "revision": "746e665cf20bdfaec20093795520beb6"
  },
  {
    "url": "blog/skepticism/2017/01/index.html",
    "revision": "51500d2ee4129aef18237714d0baf0ff"
  },
  {
    "url": "blog/skepticism/2017/02/05/fraudster/index.html",
    "revision": "dc52d07cf30eb7e04247f14a578b9f80"
  },
  {
    "url": "blog/skepticism/2017/02/05/gervais/index.html",
    "revision": "7e8dd4dcdb56afa9b9af145c55f73f91"
  },
  {
    "url": "blog/skepticism/2017/02/05/index.html",
    "revision": "279eaf8dbb11185a31201de65b1d4f11"
  },
  {
    "url": "blog/skepticism/2017/02/05/scientology/index.html",
    "revision": "74fbb5c369c070b9f6ce2b9c5ea0d997"
  },
  {
    "url": "blog/skepticism/2017/02/19/homeopathy/index.html",
    "revision": "52cfa383a210541c62832ee23a15fcdc"
  },
  {
    "url": "blog/skepticism/2017/02/19/index.html",
    "revision": "a235eeb80f8429b4ea14b790552b4675"
  },
  {
    "url": "blog/skepticism/2017/02/19/lottery/index.html",
    "revision": "5b5faee50d38f4f541114a84ebdb8f04"
  },
  {
    "url": "blog/skepticism/2017/02/19/vaxxed/index.html",
    "revision": "1a4351a5b33b79bcae192231ccfcedad"
  },
  {
    "url": "blog/skepticism/2017/02/19/whales/index.html",
    "revision": "bbb2351c08d81e019f23370615d81675"
  },
  {
    "url": "blog/skepticism/2017/02/index.html",
    "revision": "0c9b3253be5cc8b5fc2ebaf9fdda3960"
  },
  {
    "url": "blog/skepticism/2017/03/05/index.html",
    "revision": "6e3019e04bca466d091fece058345372"
  },
  {
    "url": "blog/skepticism/2017/03/05/rea/index.html",
    "revision": "2517766c50b142f71cdc64604b96a6ed"
  },
  {
    "url": "blog/skepticism/2017/03/19/fake/index.html",
    "revision": "d1674d12878f986e76fcd33237fefe5a"
  },
  {
    "url": "blog/skepticism/2017/03/19/index.html",
    "revision": "436578d8d0ab3dc6acf9b47aaf943246"
  },
  {
    "url": "blog/skepticism/2017/03/19/murder/index.html",
    "revision": "14c24345b0d76d7bc275d96feed4a782"
  },
  {
    "url": "blog/skepticism/2017/03/26/census/index.html",
    "revision": "4aaa806610ac32632e88f06485072bbc"
  },
  {
    "url": "blog/skepticism/2017/03/26/index.html",
    "revision": "dec589dadae9d0b4f56aefa754898956"
  },
  {
    "url": "blog/skepticism/2017/03/26/nzmj/index.html",
    "revision": "c3bc8c2d2afdc4c34416be131574e1ba"
  },
  {
    "url": "blog/skepticism/2017/03/26/shaquille/index.html",
    "revision": "faec2a135b4c032c536d37ad0c17dc55"
  },
  {
    "url": "blog/skepticism/2017/03/index.html",
    "revision": "a173858c0e8a71b42c74611cbe614550"
  },
  {
    "url": "blog/skepticism/2017/04/02/index.html",
    "revision": "c75747126211810b14fbcff681e985cb"
  },
  {
    "url": "blog/skepticism/2017/04/02/nasa/index.html",
    "revision": "a9f98b8865a85ec02b9a910f9efe19a2"
  },
  {
    "url": "blog/skepticism/2017/04/02/science/index.html",
    "revision": "0271cddbb79e54bbe84cabaaa3398924"
  },
  {
    "url": "blog/skepticism/2017/04/02/vaxxed/index.html",
    "revision": "ef251324013ae9120729f1011f117152"
  },
  {
    "url": "blog/skepticism/2017/04/09/index.html",
    "revision": "689fbc4cc632712eb5a896dbdd50f928"
  },
  {
    "url": "blog/skepticism/2017/04/09/tekiri/index.html",
    "revision": "8b30f4c38bd3ae5708bdeff8368df0ad"
  },
  {
    "url": "blog/skepticism/2017/04/09/vaxxed/index.html",
    "revision": "41467d6f7f7577b5fc780a6be1f80717"
  },
  {
    "url": "blog/skepticism/2017/04/23/arise/index.html",
    "revision": "f118cbe227b9968ebd71d5152579e2a5"
  },
  {
    "url": "blog/skepticism/2017/04/23/index.html",
    "revision": "693b4fa2f17cd00b19abe25c3b8cb398"
  },
  {
    "url": "blog/skepticism/2017/04/23/kelvin/index.html",
    "revision": "08b21a258e379594fb32fcf1d97a10fb"
  },
  {
    "url": "blog/skepticism/2017/04/index.html",
    "revision": "a43e000384fbcce35657f109f1a7d4e8"
  },
  {
    "url": "blog/skepticism/2017/05/07/cancer/index.html",
    "revision": "40874b2fd6adda95c393eb41269ba2f5"
  },
  {
    "url": "blog/skepticism/2017/05/07/index.html",
    "revision": "0c4d7b09ca9608a7322f25640704b239"
  },
  {
    "url": "blog/skepticism/2017/05/07/nigel/index.html",
    "revision": "d690027fc01b7f30dc5c1c3b459c37ca"
  },
  {
    "url": "blog/skepticism/2017/05/21/blasphemy/index.html",
    "revision": "62b9ec0dc254fe60bc0bacac40048e19"
  },
  {
    "url": "blog/skepticism/2017/05/21/flat/index.html",
    "revision": "b77bd7783ef5503a54f737632eeb4664"
  },
  {
    "url": "blog/skepticism/2017/05/21/index.html",
    "revision": "99825f0c709fd049e48b2433bd2145ed"
  },
  {
    "url": "blog/skepticism/2017/05/21/maori/index.html",
    "revision": "cfc471d8c147d19db8009eda002659a1"
  },
  {
    "url": "blog/skepticism/2017/05/index.html",
    "revision": "e49e8bbf34fa358b12cd1c8cd2dc4943"
  },
  {
    "url": "blog/skepticism/2017/06/04/bigelow/index.html",
    "revision": "d459ad5dc42adcb3b6621cf561a5f395"
  },
  {
    "url": "blog/skepticism/2017/06/04/climate/index.html",
    "revision": "9d854be1058741ddb993486edb700612"
  },
  {
    "url": "blog/skepticism/2017/06/04/hansford/index.html",
    "revision": "db14672c4e5d1fdc0bc3a197e8589946"
  },
  {
    "url": "blog/skepticism/2017/06/04/index.html",
    "revision": "7d81f7459fe8f0e7ccb3b67c7f6dac85"
  },
  {
    "url": "blog/skepticism/2017/06/04/wasp/index.html",
    "revision": "753f87a81d4c3d664229597206f8d380"
  },
  {
    "url": "blog/skepticism/2017/06/11/colonic/index.html",
    "revision": "6bfae7b665bc9d66fb008d396243c601"
  },
  {
    "url": "blog/skepticism/2017/06/11/credulous/index.html",
    "revision": "100d4ea4e3dad499e88b5d9f569aeffd"
  },
  {
    "url": "blog/skepticism/2017/06/11/index.html",
    "revision": "e85d24361fe664de80f1b2f38e5a7819"
  },
  {
    "url": "blog/skepticism/2017/06/11/journals/index.html",
    "revision": "036b1dfb7faed38da6e09300e3696332"
  },
  {
    "url": "blog/skepticism/2017/06/18/breatharians/index.html",
    "revision": "539c41fa8c452944de732e5accb3b738"
  },
  {
    "url": "blog/skepticism/2017/06/18/fieldays/index.html",
    "revision": "f13a8b959cf6f8682bf71d36d5c262d4"
  },
  {
    "url": "blog/skepticism/2017/06/18/index.html",
    "revision": "aa9918a3a03852205f89a6c9af14162c"
  },
  {
    "url": "blog/skepticism/2017/06/18/jw/index.html",
    "revision": "2d151787a08b71b6ef1882a6c414e0b7"
  },
  {
    "url": "blog/skepticism/2017/06/18/oil/index.html",
    "revision": "58adce5d97d3bdd8010b2920d2bfe9a4"
  },
  {
    "url": "blog/skepticism/2017/06/index.html",
    "revision": "069cb438947792fc03ff876b341fb9a6"
  },
  {
    "url": "blog/skepticism/2017/07/02/baby/index.html",
    "revision": "a9fabc37ad3360e8ab3deec66e10148f"
  },
  {
    "url": "blog/skepticism/2017/07/02/index.html",
    "revision": "019035fd60d6d6a08cf972c69eb15e88"
  },
  {
    "url": "blog/skepticism/2017/07/02/infowars/index.html",
    "revision": "11c0e1a0dd5ee9a05dc583a2ba69db60"
  },
  {
    "url": "blog/skepticism/2017/07/02/scientology/index.html",
    "revision": "a49b6b54bc2c4e4ba668d2a89999d789"
  },
  {
    "url": "blog/skepticism/2017/07/16/bananas/index.html",
    "revision": "efb02722d02c2d607be541bad53e0138"
  },
  {
    "url": "blog/skepticism/2017/07/16/circles/index.html",
    "revision": "51f7679a65982eb276e5e1c91c5897f1"
  },
  {
    "url": "blog/skepticism/2017/07/16/index.html",
    "revision": "7ec146130071290309ba7898b52a4768"
  },
  {
    "url": "blog/skepticism/2017/07/16/siggi/index.html",
    "revision": "7d6961cbc57be9e4f9c5c40107cf80dc"
  },
  {
    "url": "blog/skepticism/2017/07/16/vaxxed/index.html",
    "revision": "7e11da85032cd1c6cb10b3393573ce0e"
  },
  {
    "url": "blog/skepticism/2017/07/30/bleach/index.html",
    "revision": "e25e0edd212647e321220fae6cd87042"
  },
  {
    "url": "blog/skepticism/2017/07/30/bluebeam/index.html",
    "revision": "c4995553b4aab1ef359a4c069c534a49"
  },
  {
    "url": "blog/skepticism/2017/07/30/index.html",
    "revision": "da4c5f334f79bf10fe265ab6face751f"
  },
  {
    "url": "blog/skepticism/2017/07/30/police/index.html",
    "revision": "9c34b9616472728d134059b5d6f35372"
  },
  {
    "url": "blog/skepticism/2017/07/index.html",
    "revision": "5d470c3fd2464c65bfd8e09bcc0b155a"
  },
  {
    "url": "blog/skepticism/2017/08/06/conned/index.html",
    "revision": "8e73107c4a2375434ab6d50ac8eb7b01"
  },
  {
    "url": "blog/skepticism/2017/08/06/doll/index.html",
    "revision": "4c445cefb7f5f463e03d84b312c0eb5a"
  },
  {
    "url": "blog/skepticism/2017/08/06/index.html",
    "revision": "62b83073650b7b83cc9baee279b6e0b5"
  },
  {
    "url": "blog/skepticism/2017/08/06/jacinda/index.html",
    "revision": "9548011ddd3bf7fda27803dcd1695d5e"
  },
  {
    "url": "blog/skepticism/2017/08/06/lotto/index.html",
    "revision": "63fc2d66a963599868a7f11a706ef8ac"
  },
  {
    "url": "blog/skepticism/2017/08/27/index.html",
    "revision": "d0257c8083460d2a439826971c5ae9ed"
  },
  {
    "url": "blog/skepticism/2017/08/27/naturopath/index.html",
    "revision": "05603b2658687c87b0999683c67c9e00"
  },
  {
    "url": "blog/skepticism/2017/08/27/satanic/index.html",
    "revision": "aab87d762ea8d1986c9c2c364a5036c5"
  },
  {
    "url": "blog/skepticism/2017/08/index.html",
    "revision": "ba2b07d1702910a12e6660f3999836b0"
  },
  {
    "url": "blog/skepticism/2017/09/03/apocalypse/index.html",
    "revision": "a3d1b8f91f2eba9db54dcbbdb3526961"
  },
  {
    "url": "blog/skepticism/2017/09/03/cancer/index.html",
    "revision": "e9bf6a244e1254b81f61e47a94f7dc50"
  },
  {
    "url": "blog/skepticism/2017/09/03/index.html",
    "revision": "bebeaba395ab6c129731bc0b7e8e2e10"
  },
  {
    "url": "blog/skepticism/2017/09/03/rectangle/index.html",
    "revision": "e281c7ecb7a72af06123eabef2d3d04e"
  },
  {
    "url": "blog/skepticism/2017/09/03/stargate/index.html",
    "revision": "4fcab039652601764453d2c908cc4462"
  },
  {
    "url": "blog/skepticism/2017/09/index.html",
    "revision": "d9e2c734c54cd74ab9e40ac63bd10c84"
  },
  {
    "url": "blog/skepticism/2017/10/01/apocalypse/index.html",
    "revision": "744253fea7c64194bdbc8739cd23df12"
  },
  {
    "url": "blog/skepticism/2017/10/01/freeman/index.html",
    "revision": "7792926cdfbc8e8e9a8a8c3ab943fb8d"
  },
  {
    "url": "blog/skepticism/2017/10/01/index.html",
    "revision": "b01e39223b7ad93e8d4cbbb47fce6977"
  },
  {
    "url": "blog/skepticism/2017/10/01/pharmacy/index.html",
    "revision": "dfdf0c3a637dd8964fcecdc8771b3259"
  },
  {
    "url": "blog/skepticism/2017/10/08/index.html",
    "revision": "83625603bb0c4ebbc878772dab543522"
  },
  {
    "url": "blog/skepticism/2017/10/08/pill/index.html",
    "revision": "a2c05b92ad6e8427d1e5b0d2d4af1e47"
  },
  {
    "url": "blog/skepticism/2017/10/08/qsb/index.html",
    "revision": "8166e286a00a2dedfdc61f96300e73a7"
  },
  {
    "url": "blog/skepticism/2017/10/08/vegas/index.html",
    "revision": "3b2517b6bcff4b7de61046113ddbbc72"
  },
  {
    "url": "blog/skepticism/2017/10/15/doterra/index.html",
    "revision": "0827910d80a820742985d5bfcf43f413"
  },
  {
    "url": "blog/skepticism/2017/10/15/index.html",
    "revision": "2888c557a1fc49640727498cbbe5eeb0"
  },
  {
    "url": "blog/skepticism/2017/10/15/lie/index.html",
    "revision": "1da9278b1efe0611b1ce36900d9cfcc7"
  },
  {
    "url": "blog/skepticism/2017/10/15/soap/index.html",
    "revision": "219dfcd9f5eb6027f282782480ddf13b"
  },
  {
    "url": "blog/skepticism/2017/10/index.html",
    "revision": "166d084279ca541bba770e8f8755ce0c"
  },
  {
    "url": "blog/skepticism/2017/11/05/conference/index.html",
    "revision": "fa9ed8b83cf616b8f2db9f2f1c1ca9e3"
  },
  {
    "url": "blog/skepticism/2017/11/05/glyphosate/index.html",
    "revision": "77af81d7fb4b98f8dde3b01b0df6b8e8"
  },
  {
    "url": "blog/skepticism/2017/11/05/index.html",
    "revision": "aaa0c83d54e1dff43333809409239fca"
  },
  {
    "url": "blog/skepticism/2017/11/05/stranded/index.html",
    "revision": "a37e770c2b0bfa44ef61daa5177fe4e3"
  },
  {
    "url": "blog/skepticism/2017/11/05/tracts/index.html",
    "revision": "6959d5baae026e64745aeb9af5b14be3"
  },
  {
    "url": "blog/skepticism/2017/11/12/ghost/index.html",
    "revision": "00f8044a3fb911ce820fa9f0617a9661"
  },
  {
    "url": "blog/skepticism/2017/11/12/green/index.html",
    "revision": "702a0d26d7635c58bee12d66b5db4fed"
  },
  {
    "url": "blog/skepticism/2017/11/12/harassment/index.html",
    "revision": "1ebcb665bda184fb3869149c7d223f3a"
  },
  {
    "url": "blog/skepticism/2017/11/12/index.html",
    "revision": "8c804f654546c67e7b5a0ebe9a10145c"
  },
  {
    "url": "blog/skepticism/2017/11/12/libby/index.html",
    "revision": "ed1330fc696ccb00a9a9d7f140e64c55"
  },
  {
    "url": "blog/skepticism/2017/11/index.html",
    "revision": "402c490752066c79945e38166f390e3f"
  },
  {
    "url": "blog/skepticism/2017/12/03/acupuncture/index.html",
    "revision": "86bfc699ca9cb878e4cda90a05763fee"
  },
  {
    "url": "blog/skepticism/2017/12/03/denialism/index.html",
    "revision": "0d866df3bbfc0dca1364db4da0ada2a9"
  },
  {
    "url": "blog/skepticism/2017/12/03/dowsing/index.html",
    "revision": "8006b82103b9b773a385836f5b7fe396"
  },
  {
    "url": "blog/skepticism/2017/12/03/holes/index.html",
    "revision": "e4e38f54fb40fa59b14aac28731171fa"
  },
  {
    "url": "blog/skepticism/2017/12/03/index.html",
    "revision": "0503444a6f22a493c7294fb19cc9f644"
  },
  {
    "url": "blog/skepticism/2017/12/17/index.html",
    "revision": "454dfb39c56457a108436f6fd610ca59"
  },
  {
    "url": "blog/skepticism/2017/12/17/nhs/index.html",
    "revision": "5eb22a64be5a2b2f7dcae7ea62f74d6f"
  },
  {
    "url": "blog/skepticism/2017/12/17/oto/index.html",
    "revision": "04a72b3cade06be0330bb8e8cf84e65f"
  },
  {
    "url": "blog/skepticism/2017/12/17/pastafarian/index.html",
    "revision": "3eeb0281ab0c55e503b8969a522d5ca4"
  },
  {
    "url": "blog/skepticism/2017/12/17/shc/index.html",
    "revision": "b53e1744fdcbb90e895a862addfa4f33"
  },
  {
    "url": "blog/skepticism/2017/12/17/wellworks/index.html",
    "revision": "9f1e38f851c1acba1291f3aab0e232c5"
  },
  {
    "url": "blog/skepticism/2017/12/index.html",
    "revision": "d2c4b65fe9cb0c27f9736e3800b7b4c1"
  },
  {
    "url": "blog/skepticism/2017/index.html",
    "revision": "0d2a52a8d3f9ceaf88da897c920f6b6b"
  },
  {
    "url": "blog/skepticism/2018/01/21/grounding/index.html",
    "revision": "df9a4406f8ae068749a798dc64d7938b"
  },
  {
    "url": "blog/skepticism/2018/01/21/index.html",
    "revision": "45b45213f2f39ed1ed6443f0b2c6913b"
  },
  {
    "url": "blog/skepticism/2018/01/21/naturopath/index.html",
    "revision": "15e1d332bc44f809ff7ce98d9cbeb1a2"
  },
  {
    "url": "blog/skepticism/2018/01/21/respen/index.html",
    "revision": "65ec534e5ef72864c3a7006e065a2ce9"
  },
  {
    "url": "blog/skepticism/2018/01/28/bears/index.html",
    "revision": "71285d6d0e45602e23f69ac67926e29b"
  },
  {
    "url": "blog/skepticism/2018/01/28/index.html",
    "revision": "370a4df2b13647fedebdf54d7b6c40dd"
  },
  {
    "url": "blog/skepticism/2018/01/28/peppering/index.html",
    "revision": "d864c75492620ddfc2cc4608eb60e2db"
  },
  {
    "url": "blog/skepticism/2018/01/28/pet/index.html",
    "revision": "91598392b3810ec56b1c56b041b88b41"
  },
  {
    "url": "blog/skepticism/2018/01/28/quake/index.html",
    "revision": "5fff2614788a6fd4f5add467eda84231"
  },
  {
    "url": "blog/skepticism/2018/01/28/scientology/index.html",
    "revision": "0979f3814a6596f308e6c1d843414834"
  },
  {
    "url": "blog/skepticism/2018/01/index.html",
    "revision": "37876f121a557ca6738e8d93c61ab4db"
  },
  {
    "url": "blog/skepticism/2018/02/11/asa/index.html",
    "revision": "93cd74fcaa0970b5fa12e6d3f33fd7ed"
  },
  {
    "url": "blog/skepticism/2018/02/11/cannabis/index.html",
    "revision": "d6a3c9d163b79553e366b0651a4a7299"
  },
  {
    "url": "blog/skepticism/2018/02/11/elon/index.html",
    "revision": "998e0676dbee08ae3573a9b9b9ce2669"
  },
  {
    "url": "blog/skepticism/2018/02/11/homeopathy/index.html",
    "revision": "aed4cbda5eb57c93755268d997876ca9"
  },
  {
    "url": "blog/skepticism/2018/02/11/index.html",
    "revision": "a12bd933cdd95971073033182da55c56"
  },
  {
    "url": "blog/skepticism/2018/02/11/water/index.html",
    "revision": "e6debb68f9aaeb6c45d051b70e649b43"
  },
  {
    "url": "blog/skepticism/2018/02/25/crisis/index.html",
    "revision": "0bae9734f7bcd039ea7c7e8e17d3b269"
  },
  {
    "url": "blog/skepticism/2018/02/25/eggs/index.html",
    "revision": "78ebd56cc6e169b31d751123928450f8"
  },
  {
    "url": "blog/skepticism/2018/02/25/fsm/index.html",
    "revision": "df99b583a301e5586428192dc4728ee6"
  },
  {
    "url": "blog/skepticism/2018/02/25/index.html",
    "revision": "7461c2047114a38ee718c19a03e8c9ce"
  },
  {
    "url": "blog/skepticism/2018/02/25/number/index.html",
    "revision": "1230b57fa1e3ba5bdfe6efd33dd4ae25"
  },
  {
    "url": "blog/skepticism/2018/02/25/quackery/index.html",
    "revision": "a9c7cb58eab96e9927e7e03f1e5852bc"
  },
  {
    "url": "blog/skepticism/2018/02/index.html",
    "revision": "a8c5304c116f5ab559850d3a1e1766b0"
  },
  {
    "url": "blog/skepticism/2018/03/11/ai/index.html",
    "revision": "c89430e0e5bc734338c5e9f0b7231949"
  },
  {
    "url": "blog/skepticism/2018/03/11/index.html",
    "revision": "1f1695d92daf89f70aca1df6fee3dd7c"
  },
  {
    "url": "blog/skepticism/2018/03/11/radiation/index.html",
    "revision": "78cb90da8dce59a158f9f374dcd05eb9"
  },
  {
    "url": "blog/skepticism/2018/03/11/reiki/index.html",
    "revision": "19fda3e5a09570ff6359465775814833"
  },
  {
    "url": "blog/skepticism/2018/03/11/ufo/index.html",
    "revision": "a051ca5450676305c691ebd9f5cdbf1d"
  },
  {
    "url": "blog/skepticism/2018/03/18/ghost/index.html",
    "revision": "438fef427fac20fe25886947e58353a2"
  },
  {
    "url": "blog/skepticism/2018/03/18/index.html",
    "revision": "b687256317f25a3a48d86269d0c57686"
  },
  {
    "url": "blog/skepticism/2018/03/18/psychic/index.html",
    "revision": "613a9af2a86da3990c3b22bb4c263db1"
  },
  {
    "url": "blog/skepticism/2018/03/18/quack/index.html",
    "revision": "2db2672b6c80a3d13d5cf4fd8c42826a"
  },
  {
    "url": "blog/skepticism/2018/03/18/radiation/index.html",
    "revision": "24d67467454e4ee5a63af83230fa901f"
  },
  {
    "url": "blog/skepticism/2018/03/index.html",
    "revision": "9e6c707f6b70893aebd28c5fbbd6a43a"
  },
  {
    "url": "blog/skepticism/2018/04/08/calocurb/index.html",
    "revision": "be174b02b4af91f8a57964f9f5629a2e"
  },
  {
    "url": "blog/skepticism/2018/04/08/cam/index.html",
    "revision": "fe5a6d4ad2117d2fd3acb0e79fa238df"
  },
  {
    "url": "blog/skepticism/2018/04/08/index.html",
    "revision": "8992033f4b0c26a5c5b42ed9a74ea1c4"
  },
  {
    "url": "blog/skepticism/2018/04/08/psychic/index.html",
    "revision": "63a6ffc5f944f37e6f2bdbbdb92bc653"
  },
  {
    "url": "blog/skepticism/2018/04/08/vaccines/index.html",
    "revision": "3cee1ce27749ac20bb7d32b5cbea97bf"
  },
  {
    "url": "blog/skepticism/2018/04/15/coffee/index.html",
    "revision": "40b9288c305d83244a680230ce066522"
  },
  {
    "url": "blog/skepticism/2018/04/15/ignorance/index.html",
    "revision": "4eb476fa147169bd2d8403d261af30f5"
  },
  {
    "url": "blog/skepticism/2018/04/15/index.html",
    "revision": "a89177344f85c99f0a3f3e22565105ad"
  },
  {
    "url": "blog/skepticism/2018/04/15/nasa/index.html",
    "revision": "a18ee1fef2dadbc11f4203f0a7673f53"
  },
  {
    "url": "blog/skepticism/2018/04/15/tapu/index.html",
    "revision": "4cb8e860f1f0c988d98e9ca88db249aa"
  },
  {
    "url": "blog/skepticism/2018/04/29/google/index.html",
    "revision": "e894707838da89da24a21eec84492090"
  },
  {
    "url": "blog/skepticism/2018/04/29/homeopathy/index.html",
    "revision": "6f759c7ae469d020e933f0ccc8ee8915"
  },
  {
    "url": "blog/skepticism/2018/04/29/index.html",
    "revision": "91bdf9cbb7c2d79a7e12984e0004fb98"
  },
  {
    "url": "blog/skepticism/2018/04/29/ken/index.html",
    "revision": "34ef9c7c7e0b47e53c92cf8993ebfebe"
  },
  {
    "url": "blog/skepticism/2018/04/29/v2k/index.html",
    "revision": "39e7eea4c88ff512280d83e55209615a"
  },
  {
    "url": "blog/skepticism/2018/04/index.html",
    "revision": "db1d15748dc93e0070c2d173bd53fb92"
  },
  {
    "url": "blog/skepticism/2018/05/13/astrology/index.html",
    "revision": "bfff74315da8169b97ecbd817be4b32e"
  },
  {
    "url": "blog/skepticism/2018/05/13/crystals/index.html",
    "revision": "e2b15726200e8fc173c63bedbe149db2"
  },
  {
    "url": "blog/skepticism/2018/05/13/dawkins/index.html",
    "revision": "06eddec3360e17fecc67e4b828ac4f70"
  },
  {
    "url": "blog/skepticism/2018/05/13/index.html",
    "revision": "765828c539bcbc0942b707560457a0f6"
  },
  {
    "url": "blog/skepticism/2018/05/13/kangen/index.html",
    "revision": "9d4e73b56c8925fe229ca2c318070c15"
  },
  {
    "url": "blog/skepticism/2018/05/13/vitamins/index.html",
    "revision": "172fcd3cf68f642ac551f2d2822e7bbc"
  },
  {
    "url": "blog/skepticism/2018/05/27/flat/index.html",
    "revision": "277addd69986ebc5ba4a8f890c6d5985"
  },
  {
    "url": "blog/skepticism/2018/05/27/index.html",
    "revision": "010fe6dcd8064fbabbe1f308fdc161f9"
  },
  {
    "url": "blog/skepticism/2018/05/27/kangen/index.html",
    "revision": "68bd278fd82e041fc8aa7b034d1f9a69"
  },
  {
    "url": "blog/skepticism/2018/05/27/ness/index.html",
    "revision": "79450dbbb45973e8f4c9b4b1e728a9d3"
  },
  {
    "url": "blog/skepticism/2018/05/27/oz/index.html",
    "revision": "61e428f4fea01ef74f2b6d069ac0344b"
  },
  {
    "url": "blog/skepticism/2018/05/27/psychic/index.html",
    "revision": "bcd66bec0884d4796fb424d66926551a"
  },
  {
    "url": "blog/skepticism/2018/05/index.html",
    "revision": "cbd2f8266843995288bee6d623f8aee7"
  },
  {
    "url": "blog/skepticism/2018/06/10/astrology/index.html",
    "revision": "95271fcc08058e17e922cae4777af5bd"
  },
  {
    "url": "blog/skepticism/2018/06/10/index.html",
    "revision": "00d45dbf9dc74a3ffe65a57b74fb959d"
  },
  {
    "url": "blog/skepticism/2018/06/10/nhs/index.html",
    "revision": "42534c624a09117688a844d4ed43f23d"
  },
  {
    "url": "blog/skepticism/2018/06/10/shakti/index.html",
    "revision": "8ef2c0046337cde02612fd0d77f9516c"
  },
  {
    "url": "blog/skepticism/2018/06/10/weetbix/index.html",
    "revision": "39a9b3895c855a088fa989544a9a81d3"
  },
  {
    "url": "blog/skepticism/2018/06/24/blasphemy/index.html",
    "revision": "af5448b5077515418866d2595366a6f6"
  },
  {
    "url": "blog/skepticism/2018/06/24/cannabis/index.html",
    "revision": "844b3113d738d53df9b7550690cae7f4"
  },
  {
    "url": "blog/skepticism/2018/06/24/hotdog/index.html",
    "revision": "7fd825c91350366f3d968ea550038947"
  },
  {
    "url": "blog/skepticism/2018/06/24/index.html",
    "revision": "0571de6665be434aa1bcf9a8a7c9ffe8"
  },
  {
    "url": "blog/skepticism/2018/06/24/led/index.html",
    "revision": "8d5e4e35c2cbb38132b64a1e3c1159e1"
  },
  {
    "url": "blog/skepticism/2018/06/index.html",
    "revision": "644214beb91362cf246632aeeb4ba031"
  },
  {
    "url": "blog/skepticism/2018/07/08/bullet/index.html",
    "revision": "1530c52f0fcb6f8779964605d91b0f73"
  },
  {
    "url": "blog/skepticism/2018/07/08/chiros/index.html",
    "revision": "e79b16c1c396c01fe2c5ba2906d17931"
  },
  {
    "url": "blog/skepticism/2018/07/08/hiv/index.html",
    "revision": "ce1fa3199501c1aaef5e74582e9b0a5a"
  },
  {
    "url": "blog/skepticism/2018/07/08/hrv/index.html",
    "revision": "05c9790a5bdae0a676a82fbae2c9a5ee"
  },
  {
    "url": "blog/skepticism/2018/07/08/index.html",
    "revision": "056894ca730d4ea0bd47f9d2e84d1009"
  },
  {
    "url": "blog/skepticism/2018/07/22/cancer/index.html",
    "revision": "94cf19c2595d5196d179ffaebd71418d"
  },
  {
    "url": "blog/skepticism/2018/07/22/index.html",
    "revision": "18644fffda27ae44756617a296d684dd"
  },
  {
    "url": "blog/skepticism/2018/07/22/resurrection/index.html",
    "revision": "e9142177b7bac7d98260727c1b15dd86"
  },
  {
    "url": "blog/skepticism/2018/07/22/talc/index.html",
    "revision": "42450041d8de8a430e1767c5e5101c2f"
  },
  {
    "url": "blog/skepticism/2018/07/22/visas/index.html",
    "revision": "7bc5c335825e396a5301fda723b51b0d"
  },
  {
    "url": "blog/skepticism/2018/07/index.html",
    "revision": "082a909e9d682c2ed29d8f0911b20968"
  },
  {
    "url": "blog/skepticism/2018/08/05/conf/index.html",
    "revision": "98b915543504c9a259ac083b4195a850"
  },
  {
    "url": "blog/skepticism/2018/08/05/index.html",
    "revision": "6c9ba61647658430598f164a5ce3f586"
  },
  {
    "url": "blog/skepticism/2018/08/05/qanon/index.html",
    "revision": "0a26adf35c7a8ef725ccd01b04574ff3"
  },
  {
    "url": "blog/skepticism/2018/08/19/index.html",
    "revision": "e9ac4cf56d4bc7b3d82f741d884963f0"
  },
  {
    "url": "blog/skepticism/2018/08/19/jw/index.html",
    "revision": "6bfd7d3c1849522d905bd68ed9dd3eba"
  },
  {
    "url": "blog/skepticism/2018/08/index.html",
    "revision": "da0e860a9b682fa1ea11018880a751c5"
  },
  {
    "url": "blog/skepticism/2018/09/02/allergy/index.html",
    "revision": "2385bd28e9a29e3f01a07cd4fc0015f3"
  },
  {
    "url": "blog/skepticism/2018/09/02/catholic/index.html",
    "revision": "566c5a95161e438f0bb8cd18b1b9c379"
  },
  {
    "url": "blog/skepticism/2018/09/02/index.html",
    "revision": "169d482b5b3efa39c15e90dccad4e39c"
  },
  {
    "url": "blog/skepticism/2018/09/02/jw/index.html",
    "revision": "4815a292a8e2d8238f82c74c6893581f"
  },
  {
    "url": "blog/skepticism/2018/09/02/sen/index.html",
    "revision": "1927046651c680917a58788c32120df6"
  },
  {
    "url": "blog/skepticism/2018/09/16/1080/index.html",
    "revision": "d68a09f5266ba387e1f5f482b642dd99"
  },
  {
    "url": "blog/skepticism/2018/09/16/church/index.html",
    "revision": "b0a8e101e867f11d0186fece3c8fe6d9"
  },
  {
    "url": "blog/skepticism/2018/09/16/index.html",
    "revision": "5e58ff570643a5dcdc6e353efd71d98d"
  },
  {
    "url": "blog/skepticism/2018/09/16/jones/index.html",
    "revision": "dcd0ccb3f18a013ec4c417324a01e8a9"
  },
  {
    "url": "blog/skepticism/2018/09/16/scammers/index.html",
    "revision": "cfd634ad13d5526763e21349d78abb12"
  },
  {
    "url": "blog/skepticism/2018/09/30/index.html",
    "revision": "f88a5c4958645d2cbfb98d176a53e2bc"
  },
  {
    "url": "blog/skepticism/2018/09/30/jw/index.html",
    "revision": "d41075b0a735f252ed5477d462c76ab8"
  },
  {
    "url": "blog/skepticism/2018/09/30/oto/index.html",
    "revision": "e4824b80dd84efcfcd4242a954fe07e3"
  },
  {
    "url": "blog/skepticism/2018/09/30/who/index.html",
    "revision": "e7a6368111cac315b0c168aaddac85a6"
  },
  {
    "url": "blog/skepticism/2018/09/index.html",
    "revision": "1a5cb5f2287031e583ce79c7977d4c56"
  },
  {
    "url": "blog/skepticism/2018/10/14/hacked/index.html",
    "revision": "ccbe1b1e0a488508f9a1ac23e075fb53"
  },
  {
    "url": "blog/skepticism/2018/10/14/index.html",
    "revision": "d9e64de7eec561e97358076067759714"
  },
  {
    "url": "blog/skepticism/2018/10/14/kangen/index.html",
    "revision": "2e756b01b38b8d89c15bc17d03e7fcf7"
  },
  {
    "url": "blog/skepticism/2018/10/14/pakistan/index.html",
    "revision": "2e888ae1a3337e8d66652892948c3577"
  },
  {
    "url": "blog/skepticism/2018/10/14/sarah/index.html",
    "revision": "c6657accafa5da86da608b25cafd70a1"
  },
  {
    "url": "blog/skepticism/2018/10/28/blasphemy/index.html",
    "revision": "55683ebabdb0bdcfa64cdd0315a94d9c"
  },
  {
    "url": "blog/skepticism/2018/10/28/hrv/index.html",
    "revision": "80bab09e045bf96a1ad69b94424036ec"
  },
  {
    "url": "blog/skepticism/2018/10/28/index.html",
    "revision": "f3e3d13bb69b531fa7e0ff496f7776f0"
  },
  {
    "url": "blog/skepticism/2018/10/28/jesus/index.html",
    "revision": "9dc8527051c12199f689812d99f2a2b1"
  },
  {
    "url": "blog/skepticism/2018/10/28/natural/index.html",
    "revision": "750cf64db1497e53a7573140440fea89"
  },
  {
    "url": "blog/skepticism/2018/10/index.html",
    "revision": "f2fe1b28b52963f430e183141ce51091"
  },
  {
    "url": "blog/skepticism/2018/11/04/bibi/index.html",
    "revision": "3d99763d4418e423f19ded0d2c321921"
  },
  {
    "url": "blog/skepticism/2018/11/04/index.html",
    "revision": "3df9100886396b52e8e04f910dfed4ae"
  },
  {
    "url": "blog/skepticism/2018/11/04/jesus/index.html",
    "revision": "e5aa5084d30bcf3ce8531446aae461e1"
  },
  {
    "url": "blog/skepticism/2018/11/04/obdii/index.html",
    "revision": "19a97f78d35b48bd95eeb85082c6a87d"
  },
  {
    "url": "blog/skepticism/2018/11/04/sleepdrops/index.html",
    "revision": "2f0647aea3276b5007399872db869c5e"
  },
  {
    "url": "blog/skepticism/2018/11/index.html",
    "revision": "d078e3725d9dbfcb1b7367f9fe13a392"
  },
  {
    "url": "blog/skepticism/2018/12/02/ark/index.html",
    "revision": "cf14fd43f31d9802a862f74a56b3cafa"
  },
  {
    "url": "blog/skepticism/2018/12/02/green/index.html",
    "revision": "835029e3d1a89147c2af3c42bac5be94"
  },
  {
    "url": "blog/skepticism/2018/12/02/index.html",
    "revision": "0d64d9fbaf400f5071424f5ef02de194"
  },
  {
    "url": "blog/skepticism/2018/12/02/ri/index.html",
    "revision": "4e122e619884da7a553742ee7b9ca5af"
  },
  {
    "url": "blog/skepticism/2018/12/16/blasphemy/index.html",
    "revision": "4ef8da450422db8dd1acc3813c47f0f8"
  },
  {
    "url": "blog/skepticism/2018/12/16/index.html",
    "revision": "f4f795aa164b117b3dc1a93da6a32cf6"
  },
  {
    "url": "blog/skepticism/2018/12/16/sleepdrops/index.html",
    "revision": "83234bd83159f229c1186a3905530e37"
  },
  {
    "url": "blog/skepticism/2018/12/16/tekiri/index.html",
    "revision": "bd2a9ccc50f0e5363ba35d868ae79a01"
  },
  {
    "url": "blog/skepticism/2018/12/index.html",
    "revision": "2d0048260131d0069e3b1ab46b859975"
  },
  {
    "url": "blog/skepticism/2018/index.html",
    "revision": "91da9e2c222fb32f8ebe2fa1295b72e8"
  },
  {
    "url": "blog/skepticism/index.html",
    "revision": "564d69693a4dd2c7dc778a8ab4f3add6"
  },
  {
    "url": "blog/tag/index.html",
    "revision": "886a56b0dafbe1da6746ed844e7d7349"
  },
  {
    "url": "contact/index.html",
    "revision": "7ff6e78b45f2e70e2c06c6d0c0e4230a"
  },
  {
    "url": "cv/cover/index.html",
    "revision": "ff9607d3a50f2a7955d8b9c1571ab68b"
  },
  {
    "url": "cv/full.html",
    "revision": "299e4e7b1750e464be1984f175654ca0"
  },
  {
    "url": "cv/full/index.html",
    "revision": "bd1b57c600533b32d3a1e279e1e06585"
  },
  {
    "url": "cv/index.html",
    "revision": "7a5a0e9273d102dde6ea8baef2c9fa28"
  },
  {
    "url": "cv/short.html",
    "revision": "dff822c0d9b854784ebab93a71cf0079"
  },
  {
    "url": "googlee25d0c06da891164.html",
    "revision": "0defe75660212f417b90c5affcd03380"
  },
  {
    "url": "index.html",
    "revision": "4a606d48498938749a65dea298318fb3"
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
    "url": "media/images/blog/code/readable.jpg",
    "revision": "320916455d09cec3ab9d7352a4cdc601"
  },
  {
    "url": "media/images/blog/code/rotx.jpg",
    "revision": "c16d3368ed0cf281401c5d49d38d26a5"
  },
  {
    "url": "media/images/blog/code/tone.jpg",
    "revision": "031cb17125d5ab948a136e98a54fdd1c"
  },
  {
    "url": "media/images/blog/code/war.jpg",
    "revision": "cc562510768d9780ae6992e61371fbea"
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
    "url": "media/images/blog/howto/ios.jpg",
    "revision": "3bdaf67dca6fbddcf41d851c5c13bcea"
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
    "url": "media/images/blog/life/busyday.jpg",
    "revision": "5148b22e296c52e3286a489a8178221f"
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
    "url": "media/images/blog/life/food.jpg",
    "revision": "b3132e7aa0d342c599c29c9f2acfc98b"
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
    "url": "media/images/blog/life/roots.jpg",
    "revision": "41e1ce26fd0e56c8b232499074dbb012"
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
    "url": "media/images/blog/projects/ahs.jpg",
    "revision": "191b0a8c6d6536c4d6cd0c221a156a93"
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
    "url": "media/images/blog/projects/hotel.jpg",
    "revision": "555f9da4002a57897d72b43af48d1e3c"
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
    "revision": "8a8e6caf6bb514a76f5513465f5c62f9"
  },
  {
    "url": "media/me/index.html",
    "revision": "5e80b15427fabba1dbd986765f8e27dc"
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
    "revision": "f1dc46508f31c6eb01fc918bad556e74"
  },
  {
    "url": "status/index.html",
    "revision": "30d23a0df65f17d42c9609499b16f7fc"
  },
  {
    "url": "status/steam/index.html",
    "revision": "fe37a3a4064d927761ac774bc24c5f1e"
  },
  {
    "url": "status/twitter/index.html",
    "revision": "fec7cb915f287eb48afddc3fe8ea2c21"
  },
  {
    "url": "status/wikipedia/index.html",
    "revision": "7bb015ea55f2910804e558bb9ab0b4fd"
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
