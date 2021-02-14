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
    "revision": "a6b3d5d768fb6633098bef7b39bdb7b4"
  },
  {
    "url": "assets/css/0.styles.css",
    "revision": "cd8fd63930d76ddd2500721e778ee6db"
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
    "url": "assets/img/Img_0036-1.jpg",
    "revision": "432912a5d42011852581686f7d3eea21"
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
    "url": "assets/img/microsoft-graph.png",
    "revision": "a57b15c4e4ead1e02b11140a0b5372f7"
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
    "revision": "a4f8da6c83a3537438555678830c5257"
  },
  {
    "url": "assets/js/10.js",
    "revision": "e3ddb810ed481efff6cfd373c2cd1724"
  },
  {
    "url": "assets/js/100.js",
    "revision": "47faea89ef4afaa4dddfe1a81f375139"
  },
  {
    "url": "assets/js/101.js",
    "revision": "dcc3e61a4119ecce774bccdc1c1ecc3f"
  },
  {
    "url": "assets/js/102.js",
    "revision": "7ef4e032b3b1ba885a8ddb50d4f9aceb"
  },
  {
    "url": "assets/js/103.js",
    "revision": "639873d8ec17c12b792e290978822b3f"
  },
  {
    "url": "assets/js/104.js",
    "revision": "bf2a4c6e237e27b3e87221e2c2dc23d4"
  },
  {
    "url": "assets/js/105.js",
    "revision": "75624e66c461487a63512c8d9e9535a2"
  },
  {
    "url": "assets/js/106.js",
    "revision": "940e4b85b364de3ec035c98fbd39d78b"
  },
  {
    "url": "assets/js/107.js",
    "revision": "216ded11626c45aa6fb6696be54379ba"
  },
  {
    "url": "assets/js/108.js",
    "revision": "7e587fbd96a678fe2145f14c505c42ff"
  },
  {
    "url": "assets/js/109.js",
    "revision": "63643450f51bcdd01ebb0c7cd2514fa9"
  },
  {
    "url": "assets/js/11.js",
    "revision": "8978181fb09ed2660acf2d107164150a"
  },
  {
    "url": "assets/js/110.js",
    "revision": "c7b17d9c3fb4bdebd3201b91899c1605"
  },
  {
    "url": "assets/js/111.js",
    "revision": "6ef788e63ab7ad19ef52993799d3ee2c"
  },
  {
    "url": "assets/js/112.js",
    "revision": "69da7099bd06eaa9c72f8f4953465b05"
  },
  {
    "url": "assets/js/113.js",
    "revision": "5d571b71a74dd6f9cf8c1f24225247a8"
  },
  {
    "url": "assets/js/114.js",
    "revision": "7cc7f4c9c73a2d6f0107ee448ca70606"
  },
  {
    "url": "assets/js/115.js",
    "revision": "666018e781ddd9aac0033135de2da88d"
  },
  {
    "url": "assets/js/116.js",
    "revision": "356fa57ce1c7c8c9e67610cec9ebc2a7"
  },
  {
    "url": "assets/js/117.js",
    "revision": "78a5e39f9a4dff8e5e8fa70bc887ffce"
  },
  {
    "url": "assets/js/118.js",
    "revision": "fafece02dbd4c90a0539addc93f695b2"
  },
  {
    "url": "assets/js/119.js",
    "revision": "8cd839232fba49b82d8b1e431d71afb0"
  },
  {
    "url": "assets/js/12.js",
    "revision": "682945830471d3d89a63b8096a19e134"
  },
  {
    "url": "assets/js/120.js",
    "revision": "a71089fbe97603ac10e26a9ae7ef6fd7"
  },
  {
    "url": "assets/js/121.js",
    "revision": "895dd4cb43a6e62d7549fdcd2624a359"
  },
  {
    "url": "assets/js/122.js",
    "revision": "cb2aef9db4c4799525660ec3f6d6b397"
  },
  {
    "url": "assets/js/123.js",
    "revision": "2add57b0d84d3bc457b7aca30086d072"
  },
  {
    "url": "assets/js/124.js",
    "revision": "f2fd59b827a23d33630aadf22df36bac"
  },
  {
    "url": "assets/js/125.js",
    "revision": "5da48662580303f0416479a6dc8dbacd"
  },
  {
    "url": "assets/js/126.js",
    "revision": "a7c4520857752e7a244612a108659079"
  },
  {
    "url": "assets/js/127.js",
    "revision": "108d7807587e2ae77cd08b0e0e390aec"
  },
  {
    "url": "assets/js/128.js",
    "revision": "30d5921b188767f16762f7025fb9e33c"
  },
  {
    "url": "assets/js/129.js",
    "revision": "1763b171fa12b552e842aacf5e66d514"
  },
  {
    "url": "assets/js/13.js",
    "revision": "918a19d9001018ef9f1c4be5746160d6"
  },
  {
    "url": "assets/js/130.js",
    "revision": "b601d806d4d23c86bb49bb7c15a62414"
  },
  {
    "url": "assets/js/131.js",
    "revision": "ceab74fcfbbec6990b6110c1b20a6436"
  },
  {
    "url": "assets/js/132.js",
    "revision": "9fc15200ecf68abc3778cf56422fd117"
  },
  {
    "url": "assets/js/133.js",
    "revision": "0e119b08a5a24c0aaf0f85bd5c47f327"
  },
  {
    "url": "assets/js/134.js",
    "revision": "e2cafafbf34acb80b3596f99051253e1"
  },
  {
    "url": "assets/js/135.js",
    "revision": "7fdd4dd68689f6f18eff83aa0a353c60"
  },
  {
    "url": "assets/js/136.js",
    "revision": "a0b93c96f147305c43b6376cd62f8534"
  },
  {
    "url": "assets/js/137.js",
    "revision": "2a1a7856b4858755e6b7a548d3c2adba"
  },
  {
    "url": "assets/js/138.js",
    "revision": "96ca4a4fd95f3712b51e6b07d91dcc5a"
  },
  {
    "url": "assets/js/139.js",
    "revision": "4adccfd3f9f607dd399a62b37ee59a34"
  },
  {
    "url": "assets/js/14.js",
    "revision": "2d08f5780b2044d0d26a0616a2262d6b"
  },
  {
    "url": "assets/js/140.js",
    "revision": "162b15c24baba8325aaf706c4f32840a"
  },
  {
    "url": "assets/js/141.js",
    "revision": "82196abc64b0818207243ead1a4b3e80"
  },
  {
    "url": "assets/js/142.js",
    "revision": "b7a0338ac9828b30b6e0ef5e1e4f8ca3"
  },
  {
    "url": "assets/js/143.js",
    "revision": "aa7382ab6fba8ad1b763207adae9f023"
  },
  {
    "url": "assets/js/144.js",
    "revision": "8a4b71aef7066bbb47dffbfe5d4f9622"
  },
  {
    "url": "assets/js/145.js",
    "revision": "de984c5141a6ed179c9c9703c2243d7f"
  },
  {
    "url": "assets/js/146.js",
    "revision": "af4b3e00d5fd4b79718eae76dc21fe4b"
  },
  {
    "url": "assets/js/147.js",
    "revision": "2dd9c7e6bf9fca6996ff82d9451486a4"
  },
  {
    "url": "assets/js/148.js",
    "revision": "66212dabc4c5e6452a877f8503faae96"
  },
  {
    "url": "assets/js/149.js",
    "revision": "7e66ee15827f0dd4cd035d71c0882511"
  },
  {
    "url": "assets/js/15.js",
    "revision": "00af4f833f7f810399ed08e4d9365622"
  },
  {
    "url": "assets/js/150.js",
    "revision": "4b57fa27d5348c0658a47da676d7d2b1"
  },
  {
    "url": "assets/js/151.js",
    "revision": "f115e5d1d54841fef3bf5a3068ad8e83"
  },
  {
    "url": "assets/js/152.js",
    "revision": "0cc4dc2cd01af76d7b02f999b3f86050"
  },
  {
    "url": "assets/js/153.js",
    "revision": "17991b55c44585697cd9708628ad1e07"
  },
  {
    "url": "assets/js/154.js",
    "revision": "1ce90318b62a3c0cc74dcc22b289dcec"
  },
  {
    "url": "assets/js/155.js",
    "revision": "28a3366c94252b683141fefe30b6ed58"
  },
  {
    "url": "assets/js/156.js",
    "revision": "ca9af56db3f58f3a1e176317985dc5f0"
  },
  {
    "url": "assets/js/157.js",
    "revision": "eeeabfe593c8f49842f7b3d77c90f0e9"
  },
  {
    "url": "assets/js/158.js",
    "revision": "575720170049a1e8a5ab34a1e5f2260a"
  },
  {
    "url": "assets/js/159.js",
    "revision": "8bb679d70ec4513395a19d06504a52d9"
  },
  {
    "url": "assets/js/16.js",
    "revision": "90285765b7e734cd1f38491c25fc9c08"
  },
  {
    "url": "assets/js/160.js",
    "revision": "93ef3a4ad102f86a88d35174160a1509"
  },
  {
    "url": "assets/js/161.js",
    "revision": "cccd8e415675ef5b06e915e14e8da617"
  },
  {
    "url": "assets/js/162.js",
    "revision": "4d608e6a6d971ead72eba8f5fc28b2af"
  },
  {
    "url": "assets/js/163.js",
    "revision": "5016763a8310d521a46aae4bc65c33b3"
  },
  {
    "url": "assets/js/164.js",
    "revision": "84cff5ff75947c6f21bb4b2fba5c748d"
  },
  {
    "url": "assets/js/165.js",
    "revision": "e591835429acc6aa470415a2e99c2d3f"
  },
  {
    "url": "assets/js/166.js",
    "revision": "d2dd840f07282c6161baa70ac8f5ad9f"
  },
  {
    "url": "assets/js/167.js",
    "revision": "ff955db8a97a4c2ca7bbcf11535f5253"
  },
  {
    "url": "assets/js/168.js",
    "revision": "9cb8f179311d8f97102b28f237ff90fd"
  },
  {
    "url": "assets/js/169.js",
    "revision": "d3d8a692c0d93df23b716793d8765ac3"
  },
  {
    "url": "assets/js/17.js",
    "revision": "20da8ef949b31d6f4f21b71b62cfee2f"
  },
  {
    "url": "assets/js/170.js",
    "revision": "7d817d0faf9f60c87544070287ec3843"
  },
  {
    "url": "assets/js/171.js",
    "revision": "b6223bad5cf29eaa367506b2298c8b73"
  },
  {
    "url": "assets/js/172.js",
    "revision": "2cc2abaefa7d3b3ca202cb518f7a558f"
  },
  {
    "url": "assets/js/173.js",
    "revision": "70f05c4b803b9aa3311e2256bccd115f"
  },
  {
    "url": "assets/js/174.js",
    "revision": "26e6649a0cfec14f931c3230f94ecc50"
  },
  {
    "url": "assets/js/175.js",
    "revision": "b8705d88b357273fb09cce6969f3f9ca"
  },
  {
    "url": "assets/js/176.js",
    "revision": "dfb164e70da2788630ac0922ebde4fca"
  },
  {
    "url": "assets/js/177.js",
    "revision": "b72d6b9adbc4a4ec1682352bae1cb31b"
  },
  {
    "url": "assets/js/178.js",
    "revision": "d2a2f662437ceae322280ba85c134bc0"
  },
  {
    "url": "assets/js/179.js",
    "revision": "f3924aed0c7b04a593069362308bf7e9"
  },
  {
    "url": "assets/js/18.js",
    "revision": "26168252e38959987468cccf75f6a7d6"
  },
  {
    "url": "assets/js/180.js",
    "revision": "39a508c05ab6a3752687867a20b970c6"
  },
  {
    "url": "assets/js/181.js",
    "revision": "4e39fd21fe7aede8b25e39fb8b2c6a9f"
  },
  {
    "url": "assets/js/182.js",
    "revision": "8bca9083d13ad4ec5e165d2bc14f49d8"
  },
  {
    "url": "assets/js/183.js",
    "revision": "c28261173371903aa3a72fa488e5202e"
  },
  {
    "url": "assets/js/184.js",
    "revision": "c75e108b5b6430230e83a90370e945d6"
  },
  {
    "url": "assets/js/185.js",
    "revision": "08a5d49da316d5e486979cfc1131935d"
  },
  {
    "url": "assets/js/186.js",
    "revision": "c407ab4bdfb527e21d1d9a3568bb1ed1"
  },
  {
    "url": "assets/js/187.js",
    "revision": "58d154c061bcdf74186c6623a271885c"
  },
  {
    "url": "assets/js/188.js",
    "revision": "87a45f28f16012efaca83b31854dbef8"
  },
  {
    "url": "assets/js/189.js",
    "revision": "f7f4cec325140bf52d1e55e8eaab3f9c"
  },
  {
    "url": "assets/js/19.js",
    "revision": "dcabccb7b595b00b4719aaba6967a42f"
  },
  {
    "url": "assets/js/190.js",
    "revision": "5e2309d11aad9a8c0bb04fdac3784e58"
  },
  {
    "url": "assets/js/191.js",
    "revision": "392afd3b6bf7a90b83c89965546e77f1"
  },
  {
    "url": "assets/js/192.js",
    "revision": "e6a17b32485c914e1a1ceff867d8f3a4"
  },
  {
    "url": "assets/js/193.js",
    "revision": "504ac6c3d4f5b897eebf9e1aa08dbef8"
  },
  {
    "url": "assets/js/194.js",
    "revision": "bf60493a2f3302786235bbaf64f58991"
  },
  {
    "url": "assets/js/195.js",
    "revision": "91501e95d5160c484dc265a76f0059dc"
  },
  {
    "url": "assets/js/196.js",
    "revision": "dc938117d7e20662994af82838013ed4"
  },
  {
    "url": "assets/js/197.js",
    "revision": "d648ba6aa4b588c94bb8a59ec0bd285c"
  },
  {
    "url": "assets/js/198.js",
    "revision": "27dc4fcd2dc858bf43124fac8738af2e"
  },
  {
    "url": "assets/js/199.js",
    "revision": "f93b756f2de6368be04b5b228074a7f2"
  },
  {
    "url": "assets/js/2.js",
    "revision": "8acb40342abc2b46bd0b8174d0dccdaa"
  },
  {
    "url": "assets/js/20.js",
    "revision": "8e2005a5ac46a8c6d39669e8df339139"
  },
  {
    "url": "assets/js/200.js",
    "revision": "40b995661d973257f06bd1e01b5e1f69"
  },
  {
    "url": "assets/js/201.js",
    "revision": "112c7f85945b22e130a29d9cd5247460"
  },
  {
    "url": "assets/js/202.js",
    "revision": "ceed7aa36860df3866290a1111199026"
  },
  {
    "url": "assets/js/203.js",
    "revision": "554376c058b8137f72791b2167cc9734"
  },
  {
    "url": "assets/js/204.js",
    "revision": "d643129f494ddc65c0997f97262f232f"
  },
  {
    "url": "assets/js/205.js",
    "revision": "19b25557ed2c9402ab870801ed1bec66"
  },
  {
    "url": "assets/js/206.js",
    "revision": "83632b9425fa8005fdd25c5ccfe95faa"
  },
  {
    "url": "assets/js/207.js",
    "revision": "b9388125c77d3d5364bb72ce21ee3710"
  },
  {
    "url": "assets/js/208.js",
    "revision": "d10894c13e3597d9ffa91f6cbb0b1e1b"
  },
  {
    "url": "assets/js/209.js",
    "revision": "d5343d46958da9a2855ddb9a8b01a832"
  },
  {
    "url": "assets/js/21.js",
    "revision": "9244f40a455d93f5cbeb662cbbdcbce3"
  },
  {
    "url": "assets/js/210.js",
    "revision": "4d2819159cc622ccba8114dc67d3b06c"
  },
  {
    "url": "assets/js/211.js",
    "revision": "60bb7feddfe034c900af77d2ee168dee"
  },
  {
    "url": "assets/js/212.js",
    "revision": "108c8d660b215133881931f053eb810d"
  },
  {
    "url": "assets/js/213.js",
    "revision": "a9444b8288bb9c3b5e9b4219695d3c00"
  },
  {
    "url": "assets/js/214.js",
    "revision": "f46940de2fbacd9ef764338660a8e0bd"
  },
  {
    "url": "assets/js/215.js",
    "revision": "3da6c7b69482794a4c52cbe7f43a569b"
  },
  {
    "url": "assets/js/216.js",
    "revision": "76c08df258d13909186b04085e0fed2c"
  },
  {
    "url": "assets/js/217.js",
    "revision": "40e1d614706859d493219dcbfa875069"
  },
  {
    "url": "assets/js/218.js",
    "revision": "909aab11a5e009d4904a8d924ae56741"
  },
  {
    "url": "assets/js/219.js",
    "revision": "3b970c6553a534d212b675f84bf44d79"
  },
  {
    "url": "assets/js/22.js",
    "revision": "dbc63f6091dff99dc54bdb449d6516ad"
  },
  {
    "url": "assets/js/220.js",
    "revision": "9326d3cb3388f593dc3e1a52f86afda2"
  },
  {
    "url": "assets/js/221.js",
    "revision": "8dfe80e0192ddfdc6bab32766705f20e"
  },
  {
    "url": "assets/js/222.js",
    "revision": "370b106bd67b39456642286960a93ba0"
  },
  {
    "url": "assets/js/223.js",
    "revision": "470d8b352d27ac3fd7ae655d97935db0"
  },
  {
    "url": "assets/js/224.js",
    "revision": "1ad4a606421748e83b2e229b0118b44d"
  },
  {
    "url": "assets/js/225.js",
    "revision": "13766a4b9f32a5d81a93784098b666a7"
  },
  {
    "url": "assets/js/226.js",
    "revision": "ab2a75fe16e196c8f551e7a430c95463"
  },
  {
    "url": "assets/js/227.js",
    "revision": "7f2f97cc825db4ac2356f1082ab10b15"
  },
  {
    "url": "assets/js/228.js",
    "revision": "bee09d2c42f1d2f919c7fd4cc4d7dd7b"
  },
  {
    "url": "assets/js/229.js",
    "revision": "30182a497d2316717c816f2472f5f98b"
  },
  {
    "url": "assets/js/23.js",
    "revision": "668631dfe7b974332370f78fd7622984"
  },
  {
    "url": "assets/js/230.js",
    "revision": "202c53b9b1cec580bc0a368e3ac43bda"
  },
  {
    "url": "assets/js/231.js",
    "revision": "e47081126e9856c503a41f56072db1ff"
  },
  {
    "url": "assets/js/232.js",
    "revision": "f7fcb848a2267615e880afcb8e8ea978"
  },
  {
    "url": "assets/js/233.js",
    "revision": "4c9e262d5367a9ff0a90e6c8e988a4c5"
  },
  {
    "url": "assets/js/234.js",
    "revision": "696cd860110815515fbf358c1136fbf4"
  },
  {
    "url": "assets/js/235.js",
    "revision": "75068c323b698d5d417add4bb8a424d0"
  },
  {
    "url": "assets/js/236.js",
    "revision": "ad3acdffb46c115c542861e401d86af9"
  },
  {
    "url": "assets/js/237.js",
    "revision": "b8ade09769f073aa7e318b2b79d347cc"
  },
  {
    "url": "assets/js/238.js",
    "revision": "8cb911e1c89b23ce0a5b9015b33f10bf"
  },
  {
    "url": "assets/js/239.js",
    "revision": "c517025a2c2811f3dc7fe7cd2a415154"
  },
  {
    "url": "assets/js/24.js",
    "revision": "d18add175dd098bb32b3a1d21cf5fe90"
  },
  {
    "url": "assets/js/240.js",
    "revision": "6b56799987dbc5be91a1b879bbafa1c9"
  },
  {
    "url": "assets/js/241.js",
    "revision": "252b64af106063b303f3fb377f37c28f"
  },
  {
    "url": "assets/js/242.js",
    "revision": "f4a07d65bd215ab02ffc176d63059423"
  },
  {
    "url": "assets/js/243.js",
    "revision": "0844d61aa42f3fcd406570113e05d5ba"
  },
  {
    "url": "assets/js/244.js",
    "revision": "9a6a6a264c554833a2ac2f6ce415bd56"
  },
  {
    "url": "assets/js/245.js",
    "revision": "9e3de57ee7f5fd3b332e6e2223858607"
  },
  {
    "url": "assets/js/246.js",
    "revision": "665fc0b620dbbda7bb3d429672b97f60"
  },
  {
    "url": "assets/js/247.js",
    "revision": "4ea481aa752c9b25a2dce681565441b1"
  },
  {
    "url": "assets/js/248.js",
    "revision": "624341ce3eee30bfebd4ff9d83290ca9"
  },
  {
    "url": "assets/js/249.js",
    "revision": "5418deb6e1cd843256b8bab59158fd87"
  },
  {
    "url": "assets/js/25.js",
    "revision": "362f2b8909247f45ec76b0bde1d82392"
  },
  {
    "url": "assets/js/250.js",
    "revision": "6aad731376694be61cb37893083e4588"
  },
  {
    "url": "assets/js/251.js",
    "revision": "e0171b32ff00602420c39bdb3cf6196e"
  },
  {
    "url": "assets/js/252.js",
    "revision": "d154bebb83b12228a16416928dd644d2"
  },
  {
    "url": "assets/js/253.js",
    "revision": "8cf0665e3031d20c057483defc84c842"
  },
  {
    "url": "assets/js/254.js",
    "revision": "add325b6c132a19d478aebdda9f7913d"
  },
  {
    "url": "assets/js/255.js",
    "revision": "e91c22296fee00cda38f8842d1a16c14"
  },
  {
    "url": "assets/js/256.js",
    "revision": "4751bc2a4ec06786012b54215d641896"
  },
  {
    "url": "assets/js/257.js",
    "revision": "809afcc85056e1ddf2892671138a2b4c"
  },
  {
    "url": "assets/js/258.js",
    "revision": "4ef8bf56f248cb223d00daf3f31d6104"
  },
  {
    "url": "assets/js/259.js",
    "revision": "98b5d39769a96199b96fe61f388fd882"
  },
  {
    "url": "assets/js/26.js",
    "revision": "66526c53dc95d2d5cd2389ad9e7f687f"
  },
  {
    "url": "assets/js/260.js",
    "revision": "7e78a4389484fa740478f85773130b1c"
  },
  {
    "url": "assets/js/261.js",
    "revision": "ae57bb09cd18c8c9eff1988842c7d7b1"
  },
  {
    "url": "assets/js/262.js",
    "revision": "c33168f91bc9fee1353a52eff9de7c7a"
  },
  {
    "url": "assets/js/263.js",
    "revision": "30fdf23d8b9f98dc86b5fd14ff796c7d"
  },
  {
    "url": "assets/js/264.js",
    "revision": "d14cc1262173d8b2a98e22352eaf1096"
  },
  {
    "url": "assets/js/265.js",
    "revision": "14b74a8f1224dee89ad7e7cdb3939fe2"
  },
  {
    "url": "assets/js/266.js",
    "revision": "3b10f59ea3c0eb4594ac733acec64c16"
  },
  {
    "url": "assets/js/267.js",
    "revision": "204a488669090d9d995bbcad44a613cb"
  },
  {
    "url": "assets/js/268.js",
    "revision": "270c687aa9a162b54ce030c932a6ceed"
  },
  {
    "url": "assets/js/269.js",
    "revision": "1bf67e55b916a8acd2995d459fa5a4ad"
  },
  {
    "url": "assets/js/27.js",
    "revision": "269ddf7b93047958b64fa11532a3e610"
  },
  {
    "url": "assets/js/270.js",
    "revision": "a7118535973d63c0c0420153d31fa81a"
  },
  {
    "url": "assets/js/271.js",
    "revision": "b8fea6a271ace3e687b63a8bb6888901"
  },
  {
    "url": "assets/js/272.js",
    "revision": "52a2ebe1cca003476d6e19412879a2d5"
  },
  {
    "url": "assets/js/273.js",
    "revision": "f356e2ab52f75fcfab9f86649b3baac1"
  },
  {
    "url": "assets/js/274.js",
    "revision": "877e15a9bade89fab799d8dd2668b9e5"
  },
  {
    "url": "assets/js/275.js",
    "revision": "4074b43210bff175be56412fb143aab9"
  },
  {
    "url": "assets/js/276.js",
    "revision": "1a72cd96d5b4a440e217a0ca1d7628a9"
  },
  {
    "url": "assets/js/277.js",
    "revision": "0e854b20685c86e11f2a6fb981980065"
  },
  {
    "url": "assets/js/278.js",
    "revision": "264d9866bb6e9267de8d0d10321de744"
  },
  {
    "url": "assets/js/279.js",
    "revision": "6fc837b67ec6cd8b5d453509e34b4d27"
  },
  {
    "url": "assets/js/28.js",
    "revision": "a9a68fe33630c0488ef393301ca559a4"
  },
  {
    "url": "assets/js/280.js",
    "revision": "22efdd4cbd40ec09a0f49def352859b8"
  },
  {
    "url": "assets/js/281.js",
    "revision": "ba544dbd652fa5b59b5254e1b25fafa0"
  },
  {
    "url": "assets/js/282.js",
    "revision": "0469011bd1e9e29c70239704462e1076"
  },
  {
    "url": "assets/js/283.js",
    "revision": "7b467a8c1adc173f5f192736a2ca47ee"
  },
  {
    "url": "assets/js/284.js",
    "revision": "ae75d037f698da184086011496c2f9a0"
  },
  {
    "url": "assets/js/285.js",
    "revision": "173dccc31b59adac5a19db0c544e41d2"
  },
  {
    "url": "assets/js/286.js",
    "revision": "714cd3c9a2a12203760996621bbe81a0"
  },
  {
    "url": "assets/js/287.js",
    "revision": "92b1fa2cf34d35da08953346f002dab2"
  },
  {
    "url": "assets/js/288.js",
    "revision": "456c3d41c5a0e679404d3eec6766a544"
  },
  {
    "url": "assets/js/289.js",
    "revision": "674818bfaecf8a92be5a7e08738e9599"
  },
  {
    "url": "assets/js/29.js",
    "revision": "6a5341f82f5a6dabca86b09adeb3cb51"
  },
  {
    "url": "assets/js/290.js",
    "revision": "6a4028c36a823e2126fd1c00996ece8f"
  },
  {
    "url": "assets/js/291.js",
    "revision": "c95ca338e68ce0a26b47622019a12ad2"
  },
  {
    "url": "assets/js/292.js",
    "revision": "596e3725c8bb7f4bfae2ce8215dbc508"
  },
  {
    "url": "assets/js/293.js",
    "revision": "20ae54872452b897c1f407e26594a707"
  },
  {
    "url": "assets/js/294.js",
    "revision": "00ed053ea8e07bb50cbb54d884076184"
  },
  {
    "url": "assets/js/295.js",
    "revision": "fc7fd0d7adca5e2a0ba8a8d8fe7fcff5"
  },
  {
    "url": "assets/js/296.js",
    "revision": "e831a766e9a2472af10407547b38e67b"
  },
  {
    "url": "assets/js/297.js",
    "revision": "01c0ae683b5fd4b78c8d441b451d4881"
  },
  {
    "url": "assets/js/298.js",
    "revision": "8366b11ff1f37c2d703b2cce535cf18f"
  },
  {
    "url": "assets/js/299.js",
    "revision": "fec553d13b88e8834110e557d96e4c44"
  },
  {
    "url": "assets/js/3.js",
    "revision": "7047c98a97e89e93677efa80aac30fee"
  },
  {
    "url": "assets/js/30.js",
    "revision": "6bd93d9afd3a046efa5a185bb79abf95"
  },
  {
    "url": "assets/js/300.js",
    "revision": "0a5afecc2d596e29330f9cfd6f394c1f"
  },
  {
    "url": "assets/js/301.js",
    "revision": "ad3d293d7ab1336aa692cd865d350931"
  },
  {
    "url": "assets/js/302.js",
    "revision": "b7efc74ecead6b5424988d9cad230976"
  },
  {
    "url": "assets/js/303.js",
    "revision": "d9d3d4e963d22a3258969a2611ca38cf"
  },
  {
    "url": "assets/js/304.js",
    "revision": "c043e2e6b1cf821fa8c8938b4d2e3f51"
  },
  {
    "url": "assets/js/305.js",
    "revision": "3d193d7cf022a5e23e42502b525fd304"
  },
  {
    "url": "assets/js/306.js",
    "revision": "a125c62c9bad787b87df5d2f27e5f2ad"
  },
  {
    "url": "assets/js/307.js",
    "revision": "548af26c6a9fa70622b257924a027a94"
  },
  {
    "url": "assets/js/308.js",
    "revision": "3b975b787ca862d9bfea2d954aab910b"
  },
  {
    "url": "assets/js/309.js",
    "revision": "95c6cace313b80bc3c2002eb0bd6cefe"
  },
  {
    "url": "assets/js/31.js",
    "revision": "20c8ca9e7747f89ed251934ffb5fc902"
  },
  {
    "url": "assets/js/310.js",
    "revision": "66da0ce4c39e663b8ae0b1e7e5df1536"
  },
  {
    "url": "assets/js/311.js",
    "revision": "04ab6c0786fadb748ce95b7a1b7e35f8"
  },
  {
    "url": "assets/js/312.js",
    "revision": "ebb4f0f93ff23546ba0f6cd8f7b52a27"
  },
  {
    "url": "assets/js/313.js",
    "revision": "b06bd72fe007a7f33834732ab8e4f87f"
  },
  {
    "url": "assets/js/314.js",
    "revision": "2a985cfb4131b5734716952d26a4d044"
  },
  {
    "url": "assets/js/315.js",
    "revision": "a050cb5bcf97987f6ff61243a598fd2b"
  },
  {
    "url": "assets/js/316.js",
    "revision": "cee128eb960622f83cff11e00a39e9db"
  },
  {
    "url": "assets/js/317.js",
    "revision": "b4c2d818cf90cfcbba95a212472c27c6"
  },
  {
    "url": "assets/js/318.js",
    "revision": "9564b2443a59ed7272053d8e9daa9781"
  },
  {
    "url": "assets/js/319.js",
    "revision": "934f15e97b9e4aa8f929770da8c76716"
  },
  {
    "url": "assets/js/32.js",
    "revision": "f18be453de9a8906eb9a63c1c0e94fa6"
  },
  {
    "url": "assets/js/320.js",
    "revision": "cf17e501505a1500443b61f6930175dc"
  },
  {
    "url": "assets/js/321.js",
    "revision": "4d73844828aa13a6eaad57ce517d47ca"
  },
  {
    "url": "assets/js/322.js",
    "revision": "319573433b33c20bf92bf3a248e38bc8"
  },
  {
    "url": "assets/js/323.js",
    "revision": "b83eec6ba61580ccf1eb830ff93bd6ac"
  },
  {
    "url": "assets/js/324.js",
    "revision": "eedcfadb557f127ecdbbd7021ab04097"
  },
  {
    "url": "assets/js/325.js",
    "revision": "5247b06078f8a585c1daaf9112831ac9"
  },
  {
    "url": "assets/js/326.js",
    "revision": "3331ce388639212fc89dd37560b7ca79"
  },
  {
    "url": "assets/js/327.js",
    "revision": "6e19cb45c14a8a615496e1722544eca4"
  },
  {
    "url": "assets/js/328.js",
    "revision": "9debc1d019270d744a3f6af2c8f871ce"
  },
  {
    "url": "assets/js/329.js",
    "revision": "537da90b416f7b92ba79e82efa77ae52"
  },
  {
    "url": "assets/js/33.js",
    "revision": "af1d9768d425a83cb8b71c6c55d89fe1"
  },
  {
    "url": "assets/js/330.js",
    "revision": "9768f59a48c3936d5930c6c4e5de2cd3"
  },
  {
    "url": "assets/js/331.js",
    "revision": "c00eff0d018003dd5f27eed6000bd434"
  },
  {
    "url": "assets/js/332.js",
    "revision": "671ed8601b553a4594103f87fb99974a"
  },
  {
    "url": "assets/js/333.js",
    "revision": "7235ea05edc9d79e032815db59a7ccb6"
  },
  {
    "url": "assets/js/334.js",
    "revision": "b7619bcdb9703ce19d158bfe20039849"
  },
  {
    "url": "assets/js/335.js",
    "revision": "566503a3bd001bf3d0392d55d767fb01"
  },
  {
    "url": "assets/js/336.js",
    "revision": "30691540756b2b963399a24549b24f5b"
  },
  {
    "url": "assets/js/337.js",
    "revision": "729ae7b9999b011a7ca30a13ac13c6a8"
  },
  {
    "url": "assets/js/338.js",
    "revision": "1e7960b9c1cf4cb787112a656c371814"
  },
  {
    "url": "assets/js/339.js",
    "revision": "75d8170b749b561229fb5dcc61e21773"
  },
  {
    "url": "assets/js/34.js",
    "revision": "f34984f575700db90de746b93a7da240"
  },
  {
    "url": "assets/js/340.js",
    "revision": "15d5dcff50c99f0c1da01a46712c50b6"
  },
  {
    "url": "assets/js/341.js",
    "revision": "401e702c7f72246e2e3e702b80ab2180"
  },
  {
    "url": "assets/js/342.js",
    "revision": "fba17e80bc2d8c98ccbf6216e946cd9b"
  },
  {
    "url": "assets/js/343.js",
    "revision": "a75330c368a1b3361c1509a1995bb010"
  },
  {
    "url": "assets/js/344.js",
    "revision": "b3b45abdb6b2b46be787ecd9c4bfaca9"
  },
  {
    "url": "assets/js/345.js",
    "revision": "2470f3164a56975dfd78b180f73da572"
  },
  {
    "url": "assets/js/346.js",
    "revision": "df626738ef9a6625644bbace98e50c7d"
  },
  {
    "url": "assets/js/347.js",
    "revision": "65111e7956e1d70345507bda81c70f24"
  },
  {
    "url": "assets/js/348.js",
    "revision": "68cc827701625c45907a43dba4b85b66"
  },
  {
    "url": "assets/js/349.js",
    "revision": "f65b1fa486f5e625d117de04a52baa8e"
  },
  {
    "url": "assets/js/35.js",
    "revision": "08309fb18218eac637c196b1a0c39786"
  },
  {
    "url": "assets/js/350.js",
    "revision": "011ba48718f12750dad90ae663e2d091"
  },
  {
    "url": "assets/js/351.js",
    "revision": "71f3ed98a60d3a7c36a7e728b2c6985c"
  },
  {
    "url": "assets/js/352.js",
    "revision": "1e6710a6fc81ec70be7365d5f2c844bb"
  },
  {
    "url": "assets/js/353.js",
    "revision": "8e0cfbc2234b361c442583743bd26c66"
  },
  {
    "url": "assets/js/354.js",
    "revision": "60250097f427d7ea2a6068e22388c7b3"
  },
  {
    "url": "assets/js/355.js",
    "revision": "d122ef25f002360aba88c024bdc8debe"
  },
  {
    "url": "assets/js/356.js",
    "revision": "a1e06496ff1947fb1b73d6045404c57b"
  },
  {
    "url": "assets/js/357.js",
    "revision": "708f831e81b347bc8b1bcb9b1867a0b7"
  },
  {
    "url": "assets/js/358.js",
    "revision": "928611de55a8cb3de3cddcc75a68223f"
  },
  {
    "url": "assets/js/359.js",
    "revision": "c449f064315b56c07e9b366bc330dd66"
  },
  {
    "url": "assets/js/36.js",
    "revision": "9e2aed20a8f7213983e773d8a411f801"
  },
  {
    "url": "assets/js/360.js",
    "revision": "924d1585431d7d84330a456f94a8beba"
  },
  {
    "url": "assets/js/361.js",
    "revision": "124bcb19c1e0c0ba52589d54fee9744d"
  },
  {
    "url": "assets/js/362.js",
    "revision": "b526df909e8280bf24811c52f88a2c30"
  },
  {
    "url": "assets/js/363.js",
    "revision": "e3e83d08d846d4fcbcb2fca40c7b3312"
  },
  {
    "url": "assets/js/364.js",
    "revision": "60c8971a370705d097f363bea64cf585"
  },
  {
    "url": "assets/js/365.js",
    "revision": "87bf846cdbe79237c52789b98db3c343"
  },
  {
    "url": "assets/js/366.js",
    "revision": "8be752763738676076eec2e668ca52a3"
  },
  {
    "url": "assets/js/367.js",
    "revision": "e218672d41e2fa790cafacb9498d820a"
  },
  {
    "url": "assets/js/368.js",
    "revision": "9989ceccf84a75fa0d850486d70c4093"
  },
  {
    "url": "assets/js/369.js",
    "revision": "c510d4cc87a9461ea4ee904c0d73f664"
  },
  {
    "url": "assets/js/37.js",
    "revision": "2af31c6640ddd3934806e9bc98ff1c45"
  },
  {
    "url": "assets/js/370.js",
    "revision": "137f1d703cd472d833677d3354f52290"
  },
  {
    "url": "assets/js/371.js",
    "revision": "f626f79730716534f48b2184a0a46a4f"
  },
  {
    "url": "assets/js/372.js",
    "revision": "90e9a06169aa23c07964ab308b4339a1"
  },
  {
    "url": "assets/js/373.js",
    "revision": "045da102e1308730c02cb1e2a8e91b20"
  },
  {
    "url": "assets/js/374.js",
    "revision": "be96d32f93725a6ffebd637190927ccc"
  },
  {
    "url": "assets/js/375.js",
    "revision": "a9ae2d19c332174b6e4342487322ab27"
  },
  {
    "url": "assets/js/376.js",
    "revision": "5119dcf04d501195383c7b3e33280afb"
  },
  {
    "url": "assets/js/377.js",
    "revision": "4b6bc8ad57df8a6a93e304c5d2af184f"
  },
  {
    "url": "assets/js/378.js",
    "revision": "0e6211916bda3b6ad151673fd3719d2e"
  },
  {
    "url": "assets/js/379.js",
    "revision": "581a6396bb67a1134257ae373b213757"
  },
  {
    "url": "assets/js/38.js",
    "revision": "5e3aa2e6639f3c3c57c253c92dbd1b0e"
  },
  {
    "url": "assets/js/380.js",
    "revision": "ce77b79451a2d6d14ed5f61244cb8820"
  },
  {
    "url": "assets/js/381.js",
    "revision": "46391956935e77067dc09105bca24f5e"
  },
  {
    "url": "assets/js/382.js",
    "revision": "f5b0cbbf3afbd6f1ad8fb6baea01ff8f"
  },
  {
    "url": "assets/js/383.js",
    "revision": "0b9a986ea3283ca596fbd5d11460e190"
  },
  {
    "url": "assets/js/384.js",
    "revision": "af27fae1bd704c50af91cb9a79be832e"
  },
  {
    "url": "assets/js/385.js",
    "revision": "babefe42b13336f6d526ff9a9cf2b589"
  },
  {
    "url": "assets/js/386.js",
    "revision": "b1508f1728c82890cbcc1b450f0267f1"
  },
  {
    "url": "assets/js/387.js",
    "revision": "d82b622adc241ae70a4ef6032bee1f54"
  },
  {
    "url": "assets/js/388.js",
    "revision": "79e0aaaa7582f929ea66b581c9d70e54"
  },
  {
    "url": "assets/js/389.js",
    "revision": "4bfa33bc76104df92f45f41a231e341f"
  },
  {
    "url": "assets/js/39.js",
    "revision": "047428581359926c06234dff0bc237cf"
  },
  {
    "url": "assets/js/390.js",
    "revision": "b070bfa3444a3513bf811066e6bc1228"
  },
  {
    "url": "assets/js/391.js",
    "revision": "c48677d8169691ef6448dd812ede15b1"
  },
  {
    "url": "assets/js/392.js",
    "revision": "c86ddc4cb86d471280e14a7d9c06dd18"
  },
  {
    "url": "assets/js/393.js",
    "revision": "dda47c26f5d9af1f3787a5c3a1db986c"
  },
  {
    "url": "assets/js/394.js",
    "revision": "7472627378f93172c4e9ebad33b53a89"
  },
  {
    "url": "assets/js/395.js",
    "revision": "71e6e5fa5b6a05719cd601ddf7d3bf7b"
  },
  {
    "url": "assets/js/396.js",
    "revision": "688601004a774e8feff711ccd7c0d766"
  },
  {
    "url": "assets/js/397.js",
    "revision": "d2c03f4b64d364ed12fa790b51daf805"
  },
  {
    "url": "assets/js/398.js",
    "revision": "60aba56bbc002bc8428551ddfa9484a9"
  },
  {
    "url": "assets/js/399.js",
    "revision": "90f2680da32053ac1486c99f0a6ed707"
  },
  {
    "url": "assets/js/4.js",
    "revision": "3f4e7e04cee49a90148ee8345e461fbe"
  },
  {
    "url": "assets/js/40.js",
    "revision": "dff84a30bc6c33d520b582e7abd80f46"
  },
  {
    "url": "assets/js/400.js",
    "revision": "9efdd71de2f2c95215cfbe7719443223"
  },
  {
    "url": "assets/js/401.js",
    "revision": "b193df1261b60adccc0811ed4cadb85f"
  },
  {
    "url": "assets/js/402.js",
    "revision": "71e744e31e83ad2349ba3bebc0b088b6"
  },
  {
    "url": "assets/js/403.js",
    "revision": "f4ae623d3c9c6434556305471356d353"
  },
  {
    "url": "assets/js/404.js",
    "revision": "8512de7c815875a277d2c9b619ec3b5e"
  },
  {
    "url": "assets/js/405.js",
    "revision": "495b346742c2330765d12c2e6a926002"
  },
  {
    "url": "assets/js/406.js",
    "revision": "671561232534a52cc4f6b5e36e8e36bc"
  },
  {
    "url": "assets/js/407.js",
    "revision": "716f842c3533aa22b589889ff30b294a"
  },
  {
    "url": "assets/js/408.js",
    "revision": "5241dee8a4d8436f6fd8955d5dffe8f9"
  },
  {
    "url": "assets/js/409.js",
    "revision": "065100205a8109e1b4f79e248d35ca69"
  },
  {
    "url": "assets/js/41.js",
    "revision": "7e422cabf912a3bfac2c1925b88b250a"
  },
  {
    "url": "assets/js/410.js",
    "revision": "05ca0bcf7a5e51c9ce6ec75dbda58886"
  },
  {
    "url": "assets/js/411.js",
    "revision": "7cdb3f2357140f2a94244bc4e986001a"
  },
  {
    "url": "assets/js/412.js",
    "revision": "b390ea44d22aa6f354d6b44cd0a526c1"
  },
  {
    "url": "assets/js/413.js",
    "revision": "0af6f227fb8f499c061f86a23cf8f0a8"
  },
  {
    "url": "assets/js/414.js",
    "revision": "c013a5006ebb9b5a5d3feab3499a343d"
  },
  {
    "url": "assets/js/415.js",
    "revision": "7f9e31675b01771daadcd7b11afe0533"
  },
  {
    "url": "assets/js/416.js",
    "revision": "33488a9e381fcf1b8e805ce4b4acc16a"
  },
  {
    "url": "assets/js/417.js",
    "revision": "47b4e7dc15131bb73b921e07c4456157"
  },
  {
    "url": "assets/js/418.js",
    "revision": "fdbe97eb0cda97300aa6f864c22ebfbd"
  },
  {
    "url": "assets/js/419.js",
    "revision": "7655c96236b5c1d1e2ec2ac4f493873a"
  },
  {
    "url": "assets/js/42.js",
    "revision": "c1e23d84326fdd487cb6ff082514dfb6"
  },
  {
    "url": "assets/js/420.js",
    "revision": "c58b2e3cbb713f528e645d21fe1817d1"
  },
  {
    "url": "assets/js/421.js",
    "revision": "24616f1eb3ab69fe946a36e958123be2"
  },
  {
    "url": "assets/js/422.js",
    "revision": "748778bdaa7f5dfcaeef024a5b3e26df"
  },
  {
    "url": "assets/js/423.js",
    "revision": "82c80cb2a406e6ed7dd16f9269761461"
  },
  {
    "url": "assets/js/424.js",
    "revision": "f104b97c929a1a13ad3063bfa0976f11"
  },
  {
    "url": "assets/js/425.js",
    "revision": "5aad7d0b8025574c487af3592a97aa13"
  },
  {
    "url": "assets/js/426.js",
    "revision": "c252b0a9917dc5d9afa1b174d2e5ce47"
  },
  {
    "url": "assets/js/427.js",
    "revision": "1c81c44c8a7a2628dde8528247b42c3b"
  },
  {
    "url": "assets/js/428.js",
    "revision": "70ec18dc731d2889ab92a9dd330cb3ac"
  },
  {
    "url": "assets/js/429.js",
    "revision": "5e00833ba2d74c5a399091553e86ce09"
  },
  {
    "url": "assets/js/43.js",
    "revision": "8c2f7e4ffa97424caf4a197552caf3cb"
  },
  {
    "url": "assets/js/430.js",
    "revision": "a0f820ec5700a88e9af3c2925f223f6c"
  },
  {
    "url": "assets/js/431.js",
    "revision": "3546e39bdcec772e15b2b45a8a2fb79f"
  },
  {
    "url": "assets/js/432.js",
    "revision": "5f1f4df19ea952010d38671342b70a7e"
  },
  {
    "url": "assets/js/433.js",
    "revision": "6015cb6e208d4f9361cebce7fb4b150b"
  },
  {
    "url": "assets/js/434.js",
    "revision": "e1c3e58ad6d574935a086887afccd6c6"
  },
  {
    "url": "assets/js/435.js",
    "revision": "6fb40b542685154e6f6a98b874cb87cb"
  },
  {
    "url": "assets/js/436.js",
    "revision": "0a02f93f015d58c97a60ee9b72d02a76"
  },
  {
    "url": "assets/js/437.js",
    "revision": "6d176bfcee5cf95347fc225dfcc30f1d"
  },
  {
    "url": "assets/js/438.js",
    "revision": "fbd2251f29c3bee15095f1f041c7c299"
  },
  {
    "url": "assets/js/439.js",
    "revision": "237f03244b8d7c03b5808f9021c2b11b"
  },
  {
    "url": "assets/js/44.js",
    "revision": "c33e82a1b3d346d74fcb8cf70c3f1667"
  },
  {
    "url": "assets/js/440.js",
    "revision": "868210e859df2f5df057a6132e78b5dc"
  },
  {
    "url": "assets/js/441.js",
    "revision": "3e44a776fdf53303980efc436093fb8a"
  },
  {
    "url": "assets/js/442.js",
    "revision": "42e8cc13fddc883eed37a5820fbccfa1"
  },
  {
    "url": "assets/js/443.js",
    "revision": "2d0f34f00b41b1535a84efb5fd8d874c"
  },
  {
    "url": "assets/js/444.js",
    "revision": "74a722bdf169f6aa974cf44beb49b5f0"
  },
  {
    "url": "assets/js/445.js",
    "revision": "10bee9e65a0f94c593c6d0e122764363"
  },
  {
    "url": "assets/js/446.js",
    "revision": "902347bd61807915e81932a45c2fc178"
  },
  {
    "url": "assets/js/447.js",
    "revision": "4685d5c4c5f46800f86b0a7a2fec0a03"
  },
  {
    "url": "assets/js/448.js",
    "revision": "d905b508868517d4949c7d0ec265e5ee"
  },
  {
    "url": "assets/js/449.js",
    "revision": "9dbf1a0765f39d493720f8a5d997d7b4"
  },
  {
    "url": "assets/js/45.js",
    "revision": "373acbcea59a8cf1d6a076a41a256a45"
  },
  {
    "url": "assets/js/450.js",
    "revision": "da3796247c100ad4236384aa991403ea"
  },
  {
    "url": "assets/js/451.js",
    "revision": "6f98d0b1c8cb13b425096179a9195948"
  },
  {
    "url": "assets/js/452.js",
    "revision": "6c53fd544d4aa0c810cadf5847e6a6d2"
  },
  {
    "url": "assets/js/453.js",
    "revision": "78b5d613a1cc73e8b772650c49903d65"
  },
  {
    "url": "assets/js/454.js",
    "revision": "50328f8c92593a4950839002468f10b8"
  },
  {
    "url": "assets/js/455.js",
    "revision": "0519ad13e12c85378cad3c892b5ba5ea"
  },
  {
    "url": "assets/js/456.js",
    "revision": "426ae7f8b1f4d341a054d1d180c07ec5"
  },
  {
    "url": "assets/js/457.js",
    "revision": "250e26660a18fefa1b3454b7317199f7"
  },
  {
    "url": "assets/js/458.js",
    "revision": "7a81575a5c2bc2ba0883de871582e185"
  },
  {
    "url": "assets/js/459.js",
    "revision": "d7632216ef9be38f4719d3ba06b39d29"
  },
  {
    "url": "assets/js/46.js",
    "revision": "4ea1d3aca5f7c3b358cc93d1d1fb9486"
  },
  {
    "url": "assets/js/460.js",
    "revision": "e5dfef38a6f2f6c3994473bcf08598ef"
  },
  {
    "url": "assets/js/461.js",
    "revision": "2bd378b776cc1a6f0d7b8aa99c5f41ff"
  },
  {
    "url": "assets/js/462.js",
    "revision": "2feccdfe73cd1ccc3e3c5d6c772f96e7"
  },
  {
    "url": "assets/js/463.js",
    "revision": "1e82eb4795dfaea38815a87401e22406"
  },
  {
    "url": "assets/js/464.js",
    "revision": "6b3cb8265e82887144e0c348d65ba042"
  },
  {
    "url": "assets/js/465.js",
    "revision": "57ab98de1cd47ef4178f30141232d50f"
  },
  {
    "url": "assets/js/466.js",
    "revision": "4b4330becb4fb5c797e1f3471d7d0270"
  },
  {
    "url": "assets/js/467.js",
    "revision": "eebd9ae23948edc46fc4edc7f0ceaf5a"
  },
  {
    "url": "assets/js/468.js",
    "revision": "d4b92263938011539166ccc8edeb2ddd"
  },
  {
    "url": "assets/js/469.js",
    "revision": "4b5053aa5834eafe4da5405417627c4e"
  },
  {
    "url": "assets/js/47.js",
    "revision": "95bf4e28432a5040766d59fc2d951376"
  },
  {
    "url": "assets/js/470.js",
    "revision": "f3d643fa72232f7b54b018fd85c97bdf"
  },
  {
    "url": "assets/js/471.js",
    "revision": "fcfb49b08039c1ce8923f6795d678dee"
  },
  {
    "url": "assets/js/472.js",
    "revision": "fa1e9e49dacef1bec778d6547eeef695"
  },
  {
    "url": "assets/js/473.js",
    "revision": "6eb772513ea66b83fc05a52ec7568e04"
  },
  {
    "url": "assets/js/474.js",
    "revision": "279b3474234dcd43b4a21e42402bc62b"
  },
  {
    "url": "assets/js/475.js",
    "revision": "12d082018b76f37b827dd75f45b954e9"
  },
  {
    "url": "assets/js/476.js",
    "revision": "75f6046dab096b5ec60da33e35ae9aba"
  },
  {
    "url": "assets/js/477.js",
    "revision": "01dc1d4e1466e8b7d18f9bd54c4474f8"
  },
  {
    "url": "assets/js/478.js",
    "revision": "fd977b58b75ee11684d6981ffc532f89"
  },
  {
    "url": "assets/js/479.js",
    "revision": "7269e468426b99860a239c08ef52d4cd"
  },
  {
    "url": "assets/js/48.js",
    "revision": "23660974f6e9339ec2385a9c01969d3c"
  },
  {
    "url": "assets/js/480.js",
    "revision": "5dadfcb989d4e5d68ae63218825e71aa"
  },
  {
    "url": "assets/js/481.js",
    "revision": "6603d2440f1d46d888d9fedb01766d0f"
  },
  {
    "url": "assets/js/482.js",
    "revision": "a3aa1373ca53401ba8f0fea961b03d0a"
  },
  {
    "url": "assets/js/483.js",
    "revision": "3ccccf3a4aadc42a9ee3309dda19bee2"
  },
  {
    "url": "assets/js/484.js",
    "revision": "fe7fb06efc64d3172e0c16a5a2d54adc"
  },
  {
    "url": "assets/js/485.js",
    "revision": "c0a7adb59f9d4ed36ce68978f2e64eb9"
  },
  {
    "url": "assets/js/486.js",
    "revision": "e7483d47bf9b5fedc506993e03b25515"
  },
  {
    "url": "assets/js/487.js",
    "revision": "41c92b45ba9091250adcac161ecfd203"
  },
  {
    "url": "assets/js/488.js",
    "revision": "066840de8d40002f0a3582d4cb5d6f3e"
  },
  {
    "url": "assets/js/489.js",
    "revision": "7c453f2b45d8dd819a146a5ab4cded45"
  },
  {
    "url": "assets/js/49.js",
    "revision": "95b927ce1886bf44318a1185436f8422"
  },
  {
    "url": "assets/js/490.js",
    "revision": "b878b32627b567140c1eb7ab2a819492"
  },
  {
    "url": "assets/js/491.js",
    "revision": "9bf06fcef73bc7931f4f6e7d435bf175"
  },
  {
    "url": "assets/js/492.js",
    "revision": "88e664d1835afd07955801be9d8acbbc"
  },
  {
    "url": "assets/js/493.js",
    "revision": "299e352a2dd880401418d3a6b6fb0c3e"
  },
  {
    "url": "assets/js/494.js",
    "revision": "b5c2f6021f722c9c15f07d618172dd26"
  },
  {
    "url": "assets/js/495.js",
    "revision": "e565fdc1eac299f05ef4948633099db2"
  },
  {
    "url": "assets/js/496.js",
    "revision": "83f6181922d4f63e685a76d81a3beb7f"
  },
  {
    "url": "assets/js/497.js",
    "revision": "cf90e2cd2a90329345c9f9b856cf0ccf"
  },
  {
    "url": "assets/js/498.js",
    "revision": "83499d29b2bf71f7a7cfc725b14ad0d1"
  },
  {
    "url": "assets/js/499.js",
    "revision": "633c8525e5400649d54d230dda9cfc66"
  },
  {
    "url": "assets/js/50.js",
    "revision": "6d235afbff185586e7d5ba89ff82b47a"
  },
  {
    "url": "assets/js/500.js",
    "revision": "9af6c0d6af26fafc89e549d9b174a9ed"
  },
  {
    "url": "assets/js/501.js",
    "revision": "ddd6807067383f5a051f21f63f511f41"
  },
  {
    "url": "assets/js/502.js",
    "revision": "bef3a0a9444960bf40062d10a384cc2d"
  },
  {
    "url": "assets/js/503.js",
    "revision": "526742254c9a9da4a3436bf8541d18fa"
  },
  {
    "url": "assets/js/504.js",
    "revision": "56ebb203da42420b6ebe53f4142666b6"
  },
  {
    "url": "assets/js/505.js",
    "revision": "4dd85c9bbb008ff584148711177a52ef"
  },
  {
    "url": "assets/js/506.js",
    "revision": "3b17e49ab49223acb22f24ab905eca70"
  },
  {
    "url": "assets/js/507.js",
    "revision": "c83ac8567e625ad99b12c606e7a4c65e"
  },
  {
    "url": "assets/js/508.js",
    "revision": "98b7eef97c9dc2e07b979983cb416011"
  },
  {
    "url": "assets/js/509.js",
    "revision": "fff1a9bc171f5bd1e73470126e5882ce"
  },
  {
    "url": "assets/js/51.js",
    "revision": "7a7052779ea9f36a517fd6a77028617d"
  },
  {
    "url": "assets/js/510.js",
    "revision": "6170706d5d19a8670c27b867c2735180"
  },
  {
    "url": "assets/js/511.js",
    "revision": "e03acc4cf5face51011db39b9614c587"
  },
  {
    "url": "assets/js/512.js",
    "revision": "156d8dc462226727655f8e4dee8714a8"
  },
  {
    "url": "assets/js/513.js",
    "revision": "f65c3e0408b7a96609c4049086e5341e"
  },
  {
    "url": "assets/js/514.js",
    "revision": "8e53d0ce1a22f8f914c74bddfb4040a2"
  },
  {
    "url": "assets/js/515.js",
    "revision": "9651706f6cb7520cbad1a64c4b881724"
  },
  {
    "url": "assets/js/516.js",
    "revision": "f3cab4108b2338c2e8264d3da1524ca4"
  },
  {
    "url": "assets/js/517.js",
    "revision": "5af7ad3835c89f98634cd58705b8fa06"
  },
  {
    "url": "assets/js/518.js",
    "revision": "2124bd92fb5260500dacb854f891186e"
  },
  {
    "url": "assets/js/519.js",
    "revision": "f20f5ecf9b9633a4a6fae83f0f3079ff"
  },
  {
    "url": "assets/js/52.js",
    "revision": "bb2197ed379aa1804abb124fc41633d3"
  },
  {
    "url": "assets/js/520.js",
    "revision": "9909e5881dae70a6b316b841b5a2048a"
  },
  {
    "url": "assets/js/521.js",
    "revision": "8aea3aaebc289062b1c620f274c1e8a1"
  },
  {
    "url": "assets/js/522.js",
    "revision": "630383c8cb33dbc160eb9ffeb63b142b"
  },
  {
    "url": "assets/js/523.js",
    "revision": "5076bae7973c5a4a87a30f668b9cc59f"
  },
  {
    "url": "assets/js/524.js",
    "revision": "ad180f62ec52618d40bab7cd217c8cfd"
  },
  {
    "url": "assets/js/525.js",
    "revision": "5661fe68b89729d43597e39bf6fa6d96"
  },
  {
    "url": "assets/js/526.js",
    "revision": "10e100f1a81275d2a560f78fcf474e5c"
  },
  {
    "url": "assets/js/527.js",
    "revision": "e568451ba14464045291f367ada83f96"
  },
  {
    "url": "assets/js/528.js",
    "revision": "2d97491717019491060dc17c620a358a"
  },
  {
    "url": "assets/js/529.js",
    "revision": "86df58b1908424fdc8a1806b3ace5bcd"
  },
  {
    "url": "assets/js/53.js",
    "revision": "246a77ebe010fed48a236aba52cc21f0"
  },
  {
    "url": "assets/js/530.js",
    "revision": "7145835097a6611889b218e2d39e02cf"
  },
  {
    "url": "assets/js/531.js",
    "revision": "9de190ccbfa073fb49c17f262dc953ce"
  },
  {
    "url": "assets/js/532.js",
    "revision": "cd821233773627d8734c7bf4e7e89953"
  },
  {
    "url": "assets/js/533.js",
    "revision": "68a29a7931c0f9e4f9cd2ecb75ccbb21"
  },
  {
    "url": "assets/js/534.js",
    "revision": "da426b18b5ee0c40922ad38ff72417b4"
  },
  {
    "url": "assets/js/535.js",
    "revision": "0b99b7d9762c6f75e8365a716154d1fc"
  },
  {
    "url": "assets/js/536.js",
    "revision": "726830aad0bdacf598e90f538df2d8e0"
  },
  {
    "url": "assets/js/537.js",
    "revision": "3fd1173c630b1fb913a66de2794eac8a"
  },
  {
    "url": "assets/js/538.js",
    "revision": "a0343771d18de8228540cf84ed025bd5"
  },
  {
    "url": "assets/js/539.js",
    "revision": "c0e5ae286fe1cace59c08f153190f815"
  },
  {
    "url": "assets/js/54.js",
    "revision": "ea5644cc44ffa35e0d0f21c977a48d0b"
  },
  {
    "url": "assets/js/540.js",
    "revision": "828bf1d9fddd70644547baa59c9b3fe3"
  },
  {
    "url": "assets/js/541.js",
    "revision": "49531b18e526f46cbbefc3e72aff693e"
  },
  {
    "url": "assets/js/542.js",
    "revision": "f029714dd0828b70efd74e2728571710"
  },
  {
    "url": "assets/js/543.js",
    "revision": "5f47def8ec4a29f97d2ad33877923dc1"
  },
  {
    "url": "assets/js/544.js",
    "revision": "0da79d12a6695e49293964e7079a6d46"
  },
  {
    "url": "assets/js/545.js",
    "revision": "8c58cbfb410e38298a9d5b72ec7d7387"
  },
  {
    "url": "assets/js/546.js",
    "revision": "0c339323191c5a0f1f41573f5322b074"
  },
  {
    "url": "assets/js/547.js",
    "revision": "31ab9fc3107c10bd7aaeb676a153fc36"
  },
  {
    "url": "assets/js/548.js",
    "revision": "c78f54fa40cc508289a9b5ccab31ad4f"
  },
  {
    "url": "assets/js/549.js",
    "revision": "0c6c7918841f6126afd44dd79ad82e2e"
  },
  {
    "url": "assets/js/55.js",
    "revision": "ead84d88ade803c476a91ea99ddaffe3"
  },
  {
    "url": "assets/js/550.js",
    "revision": "cf8642e43f1bd124d706f72b7e12e556"
  },
  {
    "url": "assets/js/551.js",
    "revision": "e4debdbe9ae4174898f5830e902f350d"
  },
  {
    "url": "assets/js/552.js",
    "revision": "19afca5720c11faa418a2556246fd8c9"
  },
  {
    "url": "assets/js/553.js",
    "revision": "f93fc59bba5878de809716911521f9f2"
  },
  {
    "url": "assets/js/554.js",
    "revision": "8e95230cf5caeab8a21e87f59d6fec24"
  },
  {
    "url": "assets/js/555.js",
    "revision": "1ee8551993c0cffdd03816d59d51463f"
  },
  {
    "url": "assets/js/556.js",
    "revision": "ee1081f173ddb65e65d07d2f0d254e8a"
  },
  {
    "url": "assets/js/557.js",
    "revision": "dfbbb2adf31a944b2d02e9ea6481fb7b"
  },
  {
    "url": "assets/js/558.js",
    "revision": "ad1839b446744a9ef6921ee9c629f058"
  },
  {
    "url": "assets/js/559.js",
    "revision": "5e368704b1b8c6efc640c34d0ddccd5e"
  },
  {
    "url": "assets/js/56.js",
    "revision": "72af810bd2f4a6fe17d6623cc212f1f6"
  },
  {
    "url": "assets/js/560.js",
    "revision": "f4f78787160fc7bb04b9deb411fe59d1"
  },
  {
    "url": "assets/js/561.js",
    "revision": "dad6ab53eb79a8b93a1bc36db1f53e43"
  },
  {
    "url": "assets/js/562.js",
    "revision": "2c4cb71e5f7dfb14b7d054bceb9d1894"
  },
  {
    "url": "assets/js/563.js",
    "revision": "0cb650858b8b9d25863ef3c730be4a8d"
  },
  {
    "url": "assets/js/564.js",
    "revision": "c88775035dd5eadfc726cc22b2055cc3"
  },
  {
    "url": "assets/js/565.js",
    "revision": "5a1ca6631d7c066dd4d25fce57146971"
  },
  {
    "url": "assets/js/566.js",
    "revision": "55e7b84b56812384661ffec5764b2d39"
  },
  {
    "url": "assets/js/567.js",
    "revision": "92bd263283a1ffb014a1e973fa19ae91"
  },
  {
    "url": "assets/js/568.js",
    "revision": "173be389524fbceaf58a42402758a2ba"
  },
  {
    "url": "assets/js/569.js",
    "revision": "bb29acead8b0eb97f9af49dc9127d27e"
  },
  {
    "url": "assets/js/57.js",
    "revision": "4e757682114f8180ce8c783b3098238c"
  },
  {
    "url": "assets/js/570.js",
    "revision": "80369b216adec5a2082815844d367cfe"
  },
  {
    "url": "assets/js/571.js",
    "revision": "d0e5ff449a96786dc4bf0acacd792704"
  },
  {
    "url": "assets/js/572.js",
    "revision": "37ff12686c2efc36092db496bb5cd622"
  },
  {
    "url": "assets/js/573.js",
    "revision": "ecf432efdc8570a993810550c625ac49"
  },
  {
    "url": "assets/js/574.js",
    "revision": "113cf7b14b718447f5eb47cbf00b350d"
  },
  {
    "url": "assets/js/575.js",
    "revision": "1307a46f82d8194c32acfd57911d9ab8"
  },
  {
    "url": "assets/js/576.js",
    "revision": "d2e8c25dfff7377851ef73c583b6eaeb"
  },
  {
    "url": "assets/js/577.js",
    "revision": "8a5635c7f2bc2405fbe86d1fdf52a5e8"
  },
  {
    "url": "assets/js/578.js",
    "revision": "88a2b5261401179a2cf956bdfd3059ab"
  },
  {
    "url": "assets/js/579.js",
    "revision": "5b26c94beb5c22e3bbc4f04203ee1c47"
  },
  {
    "url": "assets/js/58.js",
    "revision": "958b7cce91ec6bebfa40cf1619534977"
  },
  {
    "url": "assets/js/580.js",
    "revision": "97f0daca0d2f40fe031c73ebef854c30"
  },
  {
    "url": "assets/js/581.js",
    "revision": "6cfcd2693122c867455f795adb4dae55"
  },
  {
    "url": "assets/js/582.js",
    "revision": "b0f870a64e6a4dc696d8bf9a9d2ab92f"
  },
  {
    "url": "assets/js/583.js",
    "revision": "b15dec79c657a28e6e8623a8efd15759"
  },
  {
    "url": "assets/js/584.js",
    "revision": "e2431225c10a7bef8eb15044a6d67bcf"
  },
  {
    "url": "assets/js/585.js",
    "revision": "b6a33ad5d6f9cb0e7b491973b15505bf"
  },
  {
    "url": "assets/js/586.js",
    "revision": "36c162e7b548586b1a8ae72c25b5f969"
  },
  {
    "url": "assets/js/587.js",
    "revision": "1e1de7b098187597d767c56c8555fa98"
  },
  {
    "url": "assets/js/588.js",
    "revision": "498c15dfcf7b185328a4717b8eaa921e"
  },
  {
    "url": "assets/js/589.js",
    "revision": "c03a69ea5555907a413418ecf687d6f4"
  },
  {
    "url": "assets/js/59.js",
    "revision": "df06d830f897ca86ae7a21c3c7b2f2bf"
  },
  {
    "url": "assets/js/590.js",
    "revision": "48a4d6e887a7111006c8f7032974cd8b"
  },
  {
    "url": "assets/js/591.js",
    "revision": "1001ae3ceef2aed9d1c29496a7dfffb2"
  },
  {
    "url": "assets/js/592.js",
    "revision": "fb4eb0eb72431a967f87a54dc425b1cd"
  },
  {
    "url": "assets/js/593.js",
    "revision": "0e03837812f1b0b2955665ca51e71c09"
  },
  {
    "url": "assets/js/594.js",
    "revision": "f42084276965bfafb11a9e1c79950b3b"
  },
  {
    "url": "assets/js/595.js",
    "revision": "0840e59a6ea8d0ae039d540aba995028"
  },
  {
    "url": "assets/js/596.js",
    "revision": "7d61d1214091ad18393a60f300c2b1b4"
  },
  {
    "url": "assets/js/597.js",
    "revision": "99e8780a964810c5e4a5531d1c991216"
  },
  {
    "url": "assets/js/598.js",
    "revision": "4424d3afd514b0f90a9c9bd0fc149401"
  },
  {
    "url": "assets/js/599.js",
    "revision": "892af5201e38e31614d2244ec9c7445c"
  },
  {
    "url": "assets/js/6.js",
    "revision": "07e559feb754db308224ac8ed636477a"
  },
  {
    "url": "assets/js/60.js",
    "revision": "be38884117b001e6da8264afac7e1ff9"
  },
  {
    "url": "assets/js/600.js",
    "revision": "9d67f75b50a571e6e113611fc23779a5"
  },
  {
    "url": "assets/js/601.js",
    "revision": "49dbd689a32cea250d26437594ae6ec0"
  },
  {
    "url": "assets/js/602.js",
    "revision": "ddb8d18f56e799b3bf5d05293441190f"
  },
  {
    "url": "assets/js/603.js",
    "revision": "454fb7d8667f7477eb32a9debe813d2a"
  },
  {
    "url": "assets/js/604.js",
    "revision": "4e8029faf302d58c809d83415a5f45a7"
  },
  {
    "url": "assets/js/605.js",
    "revision": "5caba762064b0c6cee32b2cec348a8f3"
  },
  {
    "url": "assets/js/606.js",
    "revision": "f4b5f6faca32584b7bb1bd926429fc4f"
  },
  {
    "url": "assets/js/607.js",
    "revision": "8ec334947175a659b3a489d73ac657cc"
  },
  {
    "url": "assets/js/608.js",
    "revision": "04ba1c92efaf29ca4e1171dd37fd2143"
  },
  {
    "url": "assets/js/609.js",
    "revision": "c8545475a1ae59b492c9f846ca9e2e74"
  },
  {
    "url": "assets/js/61.js",
    "revision": "cd8219ca5f6f1cdeeada86a77e048892"
  },
  {
    "url": "assets/js/610.js",
    "revision": "0e75b887c3fc0944dcc04fbb6cf61f84"
  },
  {
    "url": "assets/js/611.js",
    "revision": "3a22ce29ec364100bb01cb82bd85b297"
  },
  {
    "url": "assets/js/612.js",
    "revision": "9386e187e33d485c950769aaab52d25e"
  },
  {
    "url": "assets/js/613.js",
    "revision": "91efea0875ec1c296f74e6ca24359267"
  },
  {
    "url": "assets/js/614.js",
    "revision": "eb4b2ef48d960771dabffa05d3a23d92"
  },
  {
    "url": "assets/js/615.js",
    "revision": "14ea7f4930e542aacde227dde8564deb"
  },
  {
    "url": "assets/js/62.js",
    "revision": "e2b8ee58a977521fba4faf928ec965ed"
  },
  {
    "url": "assets/js/63.js",
    "revision": "f03b400205a42ee7a303c8350a3789dd"
  },
  {
    "url": "assets/js/64.js",
    "revision": "3bf748f16ba02e9622a7958d27b96324"
  },
  {
    "url": "assets/js/65.js",
    "revision": "c047e32ea9d3452be4001021deb3a5bd"
  },
  {
    "url": "assets/js/66.js",
    "revision": "53a1178a857af6199b55c35c8f41e360"
  },
  {
    "url": "assets/js/67.js",
    "revision": "7cf3fc3e9447749dcd1425487f78549c"
  },
  {
    "url": "assets/js/68.js",
    "revision": "728a74352120003119be71fce11b99d6"
  },
  {
    "url": "assets/js/69.js",
    "revision": "471be13ccf66433379b4b426e81e7cbe"
  },
  {
    "url": "assets/js/7.js",
    "revision": "a20b23961736e8273ebc1a986645e812"
  },
  {
    "url": "assets/js/70.js",
    "revision": "f8a8fa6fe68a34dcaa1c6aae7fc409c3"
  },
  {
    "url": "assets/js/71.js",
    "revision": "727a59723ef740d8726d3e8082a7b4c6"
  },
  {
    "url": "assets/js/72.js",
    "revision": "08de28be7382e99d796aece2cb62f18b"
  },
  {
    "url": "assets/js/73.js",
    "revision": "0c6ed49cb94b012944b93f337b70fdaa"
  },
  {
    "url": "assets/js/74.js",
    "revision": "e1b2f10fe3aab1111a70f4a859c0497a"
  },
  {
    "url": "assets/js/75.js",
    "revision": "a40eadd7e6f50505611321e73379f3a3"
  },
  {
    "url": "assets/js/76.js",
    "revision": "513b311fd5b58c24fcbb28f4b13560e4"
  },
  {
    "url": "assets/js/77.js",
    "revision": "eb71e47a4045570d22c2b5fd92b9f2d6"
  },
  {
    "url": "assets/js/78.js",
    "revision": "8c24d058df3e4686bda38a922e6a5040"
  },
  {
    "url": "assets/js/79.js",
    "revision": "779645bbaced08f7ae40ea829d37bb68"
  },
  {
    "url": "assets/js/8.js",
    "revision": "17b646290fe58ddd55e1b68e2982d292"
  },
  {
    "url": "assets/js/80.js",
    "revision": "fd130db6770cee4b8b59dfbb397ecf8f"
  },
  {
    "url": "assets/js/81.js",
    "revision": "2a1284f9d7c26355858fc62573247617"
  },
  {
    "url": "assets/js/82.js",
    "revision": "8f89b6ba74c7df49ba97cde20af8278f"
  },
  {
    "url": "assets/js/83.js",
    "revision": "d5815a3383a60090e7cd69835889a5f0"
  },
  {
    "url": "assets/js/84.js",
    "revision": "b6a84bc30604878b1c5c5c6585818462"
  },
  {
    "url": "assets/js/85.js",
    "revision": "36f00904f1a5b84e00a9d73634dcd8fb"
  },
  {
    "url": "assets/js/86.js",
    "revision": "76d831478d5d3aa157d98067eba3feb6"
  },
  {
    "url": "assets/js/87.js",
    "revision": "6192290ae9f2786ccfd38dbadeb09c38"
  },
  {
    "url": "assets/js/88.js",
    "revision": "e5f32768c17b07eeaab156905192ead8"
  },
  {
    "url": "assets/js/89.js",
    "revision": "e1baa204438fde6ce31408538bf11f39"
  },
  {
    "url": "assets/js/9.js",
    "revision": "ea4bfb6d2ddb424c9b301667d59b08ab"
  },
  {
    "url": "assets/js/90.js",
    "revision": "16b06bece27a5895923c3eb4c41ba91a"
  },
  {
    "url": "assets/js/91.js",
    "revision": "50d750901a7d14037db404fca35579ce"
  },
  {
    "url": "assets/js/92.js",
    "revision": "93cf2e8492fa0fe59ba3495755ce7eef"
  },
  {
    "url": "assets/js/93.js",
    "revision": "551cf25caca16f0b6899664f2d87114d"
  },
  {
    "url": "assets/js/94.js",
    "revision": "3d9a703d2933d50b072b6a5981f33027"
  },
  {
    "url": "assets/js/95.js",
    "revision": "847daaa0e25df696e836f033bf013382"
  },
  {
    "url": "assets/js/96.js",
    "revision": "4bd8e396652f193a42e1194a728eb911"
  },
  {
    "url": "assets/js/97.js",
    "revision": "c43711ef49bfe4e2ea8d25c4235f1850"
  },
  {
    "url": "assets/js/98.js",
    "revision": "9726dfb41fbb2a3523091478ad37eff0"
  },
  {
    "url": "assets/js/99.js",
    "revision": "aafc79620b1284b34ab90df7a65883e3"
  },
  {
    "url": "assets/js/app.js",
    "revision": "e936cae84409b45b88300508b0a1f211"
  },
  {
    "url": "assets/js/styles.js",
    "revision": "22f22b49cc901aa95826401f7ce0930c"
  },
  {
    "url": "blog/category/index.html",
    "revision": "a4cc66bb52b4d90f6d7453fb15fb7d6f"
  },
  {
    "url": "blog/code/artists/index.html",
    "revision": "b47b4226128199baa28f57246034bc6d"
  },
  {
    "url": "blog/code/asa.sbh.nz/index.html",
    "revision": "3f30c4b59f44c959a1f92908d1aa1767"
  },
  {
    "url": "blog/code/decrypt/index.html",
    "revision": "2b1aaa1a9ba5e7731abc3a19db05ff10"
  },
  {
    "url": "blog/code/divider/index.html",
    "revision": "4d967d14d119fff37ca261019dea62cd"
  },
  {
    "url": "blog/code/first/index.html",
    "revision": "9730dbd3d7b1a0ba85360e1c9ab5b61a"
  },
  {
    "url": "blog/code/fishbarrel/index.html",
    "revision": "d27f91fcfe9036b31884a806e8a61ea7"
  },
  {
    "url": "blog/code/graphs/index.html",
    "revision": "1f687470e154cbf1399888988e1aa631"
  },
  {
    "url": "blog/code/indent/index.html",
    "revision": "badb45f4c7b073c9a24e14fc20c50499"
  },
  {
    "url": "blog/code/index.html",
    "revision": "4598e66fad1c541c17ed6cf40e55deea"
  },
  {
    "url": "blog/code/ingoa.nz/index.html",
    "revision": "9c5459d81bb378aafdb8f64585006568"
  },
  {
    "url": "blog/code/nzondemand/index.html",
    "revision": "7d470d0295661a3872582b506f4fd548"
  },
  {
    "url": "blog/code/picard/index.html",
    "revision": "b84ff231b4b6f5298a024f019b7d7672"
  },
  {
    "url": "blog/code/qr/index.html",
    "revision": "aaaed9322e105e033d1c6286379e6206"
  },
  {
    "url": "blog/code/readable/index.html",
    "revision": "e6462e6321978bf2bffd3e4cf51f90ec"
  },
  {
    "url": "blog/code/tone/index.html",
    "revision": "cf163f3824f89413db9e592bb4f2f956"
  },
  {
    "url": "blog/code/war/index.html",
    "revision": "340abff8050adf1be1422e3405cbc01d"
  },
  {
    "url": "blog/code/website/index.html",
    "revision": "9b4444e1cfa9b845ac1d34da7c8abe24"
  },
  {
    "url": "blog/code/website/route/index.html",
    "revision": "eb11a5c2781d25c1a894c2f612f7bf49"
  },
  {
    "url": "blog/code/xmltv.co.nz/index.html",
    "revision": "f11ef8340ee957b84d5636dba6d11408"
  },
  {
    "url": "blog/howto/index.html",
    "revision": "ab31a1b81333c5015088b42f5427de45"
  },
  {
    "url": "blog/howto/intel865/index.html",
    "revision": "f677711f8d7a130d3ef1c99e2fb36e3c"
  },
  {
    "url": "blog/howto/ios/index.html",
    "revision": "bb71063cffc2f9fef1d87f84e90b51d7"
  },
  {
    "url": "blog/howto/nexentastor/index.html",
    "revision": "0033df93c12845547badbffb88b48a98"
  },
  {
    "url": "blog/howto/pcloadletter/index.html",
    "revision": "a948d39161927b3b0ccd59e12321a8e3"
  },
  {
    "url": "blog/howto/raid5/index.html",
    "revision": "6fb09d2942ab4b1f88c7ece3bca7d1e6"
  },
  {
    "url": "blog/index.html",
    "revision": "12080170ac83e296106a2e9c731b0870"
  },
  {
    "url": "blog/life/anotheryear/index.html",
    "revision": "aadc7b89e768d1aec6fc416207463096"
  },
  {
    "url": "blog/life/arcade/index.html",
    "revision": "c1e6a60b6ff4d382dea2e2c479468fce"
  },
  {
    "url": "blog/life/birthday/index.html",
    "revision": "e2a8a9d1806c1e4d22d5ebdf636a697e"
  },
  {
    "url": "blog/life/blasphemy/index.html",
    "revision": "e6afea67dca4856c5ad30bcc7a5d945a"
  },
  {
    "url": "blog/life/blogger/index.html",
    "revision": "6c12a0daad9ad43ae81d6260bb457582"
  },
  {
    "url": "blog/life/blurry/index.html",
    "revision": "cda95dc2b8204f2ba577acdf4385be6a"
  },
  {
    "url": "blog/life/busyday/index.html",
    "revision": "2299eba6b8864d2eb0c0f8d1c8f77596"
  },
  {
    "url": "blog/life/domain/index.html",
    "revision": "4e54f0418ccaff7fdb8672f70c64c23f"
  },
  {
    "url": "blog/life/exams/index.html",
    "revision": "d2940676e3f60ac57892cf3b3f071208"
  },
  {
    "url": "blog/life/food/index.html",
    "revision": "1ba1b6d6325ca053cfd31e9ac8d5fcf6"
  },
  {
    "url": "blog/life/games/index.html",
    "revision": "fe0da1f66eb1570717510f8e4d28ad5a"
  },
  {
    "url": "blog/life/glenview/index.html",
    "revision": "de25558e6ae81942c0e58a68d50da1d5"
  },
  {
    "url": "blog/life/headlines/index.html",
    "revision": "8847d8614366a08948e4e0d7f3fc294e"
  },
  {
    "url": "blog/life/index.html",
    "revision": "85f02ebef3d572ca72a4107f3045a0ed"
  },
  {
    "url": "blog/life/jws/index.html",
    "revision": "f5b57ecebb8bda03921eb3717a91bab3"
  },
  {
    "url": "blog/life/keyboard/index.html",
    "revision": "975e576f7f710a757c0fdea4422c92fd"
  },
  {
    "url": "blog/life/lpi201/index.html",
    "revision": "a7b35be5cf61fc5cd8b4d7e52e4d3ace"
  },
  {
    "url": "blog/life/mashup/index.html",
    "revision": "02e0b7c093626131fc785e9019dec369"
  },
  {
    "url": "blog/life/motorweb/index.html",
    "revision": "39888df0976e0cb16892e2e4cfcfb060"
  },
  {
    "url": "blog/life/nxe/index.html",
    "revision": "12eb3d062903f1148cf22b0cdb5de332"
  },
  {
    "url": "blog/life/plates/index.html",
    "revision": "4c348077b072189c5594abd3f4e3ba4e"
  },
  {
    "url": "blog/life/queenstown/index.html",
    "revision": "550a1500ca7522f737c345f07858e87f"
  },
  {
    "url": "blog/life/racism/index.html",
    "revision": "05beef80a8932931a43544c31fdb5c0f"
  },
  {
    "url": "blog/life/roads/index.html",
    "revision": "a96826aa3ba4ca39cd31277b9c25cf25"
  },
  {
    "url": "blog/life/roots/index.html",
    "revision": "0dd5e8efe2b7b003590eeb860529c7d6"
  },
  {
    "url": "blog/life/scare/index.html",
    "revision": "3d767e64b9e0ad91398d629579b39cb1"
  },
  {
    "url": "blog/life/scary/index.html",
    "revision": "85a6b60db20da9bd43066b57c025fa6c"
  },
  {
    "url": "blog/life/seti/index.html",
    "revision": "7d139e5db16e55fc5d7c4a9d09f4ddac"
  },
  {
    "url": "blog/life/skeptical/index.html",
    "revision": "26b032376f89a59224d310c835345326"
  },
  {
    "url": "blog/life/skepticzone/index.html",
    "revision": "6fa584021025843960afd2632e6cb031"
  },
  {
    "url": "blog/life/spam/index.html",
    "revision": "890c32a7f0000e2f452f4f0b5753ee95"
  },
  {
    "url": "blog/life/ticking/index.html",
    "revision": "ed58d43318e1d3f2553654f4a8a7b4ea"
  },
  {
    "url": "blog/life/trademe/index.html",
    "revision": "1849b7cf19c005ae550f3bb6e0a4ee3e"
  },
  {
    "url": "blog/life/unforeseen/index.html",
    "revision": "ca6576cd0d5d727e324029b2a7e6dd91"
  },
  {
    "url": "blog/life/wobbly/index.html",
    "revision": "efc85678203ff10a4541df8c53dabadb"
  },
  {
    "url": "blog/projects/ahs/index.html",
    "revision": "bfded675656d64b832ebb63c6c1989f1"
  },
  {
    "url": "blog/projects/airbag/index.html",
    "revision": "fd1713a9e672bd6d357c4590896808b9"
  },
  {
    "url": "blog/projects/ambilight/index.html",
    "revision": "48601eb07c7b7528a4a6621c5e6cb732"
  },
  {
    "url": "blog/projects/automation/index.html",
    "revision": "c526cdde85cb12b470732462678bf84d"
  },
  {
    "url": "blog/projects/eyes/index.html",
    "revision": "276907f303505ba9874eb7015182eb09"
  },
  {
    "url": "blog/projects/glitch/index.html",
    "revision": "1b076ddc8fdf1eeaa37af0970e2e7e11"
  },
  {
    "url": "blog/projects/hotel/index.html",
    "revision": "a8dafeafb2364e8cd4a537372e1704d3"
  },
  {
    "url": "blog/projects/index.html",
    "revision": "0231fb2ee18fc2361b2f17f980c86dc7"
  },
  {
    "url": "blog/projects/it100/index.html",
    "revision": "371033296fec28d983c68224f248cb6b"
  },
  {
    "url": "blog/projects/microscope/index.html",
    "revision": "3651a3cef392a9e212b6bd5bba8e3059"
  },
  {
    "url": "blog/projects/mirror/index.html",
    "revision": "8b22f7a70a81567e633af5e35e1b9968"
  },
  {
    "url": "blog/projects/picture/index.html",
    "revision": "9acaaa75e86d71c1923801da023df249"
  },
  {
    "url": "blog/projects/pizza/index.html",
    "revision": "7792eced5a65dc58557b418d49827df2"
  },
  {
    "url": "blog/projects/podcast/index.html",
    "revision": "2db2267eef72d12e19b42249821e0ef8"
  },
  {
    "url": "blog/projects/reflow/index.html",
    "revision": "8b966d6730e36497c5c4975b71fd0da0"
  },
  {
    "url": "blog/projects/sandbox/index.html",
    "revision": "1ac5be7fea67ca349563e33907b869a2"
  },
  {
    "url": "blog/projects/screens/index.html",
    "revision": "76d1a7b9bb99ea0ce854078e197d87e9"
  },
  {
    "url": "blog/projects/sky/index.html",
    "revision": "05e7e71a85235213d294ad32cfe3b537"
  },
  {
    "url": "blog/projects/starwars/index.html",
    "revision": "70b35cf069f5c4e9a62125d43f8db6e3"
  },
  {
    "url": "blog/projects/xbox/index.html",
    "revision": "8eed9ec3cf25d27ce923327b8d5feb19"
  },
  {
    "url": "blog/random/addresses/index.html",
    "revision": "dce1e6ff0de5cd9bd75db9d5ec20ec69"
  },
  {
    "url": "blog/random/alphabet/index.html",
    "revision": "1f84b3cbd08b6338a6cbdb142b872e44"
  },
  {
    "url": "blog/random/astrology/index.html",
    "revision": "b1c005d5040968c5b40a3b5a158ecc9e"
  },
  {
    "url": "blog/random/chicken/index.html",
    "revision": "7852a33feef239ccfc18280672a96de6"
  },
  {
    "url": "blog/random/dns/index.html",
    "revision": "272b063f665df913c6714f62d1d6ae2a"
  },
  {
    "url": "blog/random/evp/index.html",
    "revision": "c3c3fd8fc13b5f8900d77227b197995d"
  },
  {
    "url": "blog/random/flip/index.html",
    "revision": "81ff5b0737ae7fd242f4f53777d94e10"
  },
  {
    "url": "blog/random/honeychurch/index.html",
    "revision": "de52e9ac7cd188d1cebc357223fe2571"
  },
  {
    "url": "blog/random/index.html",
    "revision": "7125d278729b0c25dacc921c4c5fb986"
  },
  {
    "url": "blog/random/lottery/index.html",
    "revision": "905b35f6116bc0cb37770b4ff563889d"
  },
  {
    "url": "blog/random/music/index.html",
    "revision": "992cd715ccf4039ed75b6e17ab27b9c8"
  },
  {
    "url": "blog/random/octal/index.html",
    "revision": "ffb3a8b845756ffd5eee80d761b67688"
  },
  {
    "url": "blog/random/os/index.html",
    "revision": "e8ef066ca39c3d568ce9bee7a155d955"
  },
  {
    "url": "blog/random/propellers/index.html",
    "revision": "b5eac32912987563baf56da379ae8d79"
  },
  {
    "url": "blog/random/robux/index.html",
    "revision": "d9fae7324510d6337dd8b72901dbdc9d"
  },
  {
    "url": "blog/random/super/index.html",
    "revision": "29a8b321a46cccdff40c0ead2e04297a"
  },
  {
    "url": "blog/random/times/index.html",
    "revision": "79661a621875cc720c9960ff010e3ed4"
  },
  {
    "url": "blog/random/travel/index.html",
    "revision": "54f5d674650a1e8bb1285d4fbecf4497"
  },
  {
    "url": "blog/random/wilhelm/index.html",
    "revision": "919c8a0c08a2bf95ef346379dcaf3e27"
  },
  {
    "url": "blog/random/year/index.html",
    "revision": "126ae7b508643b5267de8ccaf9c387b2"
  },
  {
    "url": "blog/skepticism/2015/08/16/asa/index.html",
    "revision": "dec55f3a2f4aae22ed7cfd60c27ea502"
  },
  {
    "url": "blog/skepticism/2015/08/16/awards/index.html",
    "revision": "af30339d2488e370c553abfa4f45b6f7"
  },
  {
    "url": "blog/skepticism/2015/08/16/bravo/index.html",
    "revision": "dc88a9842dbc84b2a6229208fe3739e8"
  },
  {
    "url": "blog/skepticism/2015/08/16/index.html",
    "revision": "60808e3d64ab48a38cd4f1c0b0bd2077"
  },
  {
    "url": "blog/skepticism/2015/08/16/jim/index.html",
    "revision": "1172c6125b7b1dac45be550658e6117e"
  },
  {
    "url": "blog/skepticism/2015/08/16/naholo/index.html",
    "revision": "8bde33be4baad4e1d1f7efd047bbe43d"
  },
  {
    "url": "blog/skepticism/2015/08/16/resene/index.html",
    "revision": "c774f760b6172d3e27b854c948f8288b"
  },
  {
    "url": "blog/skepticism/2015/08/index.html",
    "revision": "de74b527752e168dd5de1136822505b5"
  },
  {
    "url": "blog/skepticism/2015/09/20/gop/index.html",
    "revision": "3ca8ff43dd575b63c90de2196d516655"
  },
  {
    "url": "blog/skepticism/2015/09/20/ignobel/index.html",
    "revision": "8738e0e171a058e0604a39366c4e0de2"
  },
  {
    "url": "blog/skepticism/2015/09/20/index.html",
    "revision": "0a2149f7813c9ab6e3347ce78170901e"
  },
  {
    "url": "blog/skepticism/2015/09/20/supplements/index.html",
    "revision": "0d67b42f7ae31be287d61bb9c30682f4"
  },
  {
    "url": "blog/skepticism/2015/09/27/ayahuasca/index.html",
    "revision": "3bc98ec2e2fcc61d96391b39cd1cc404"
  },
  {
    "url": "blog/skepticism/2015/09/27/drought/index.html",
    "revision": "4af75e20338ff669a6cb00c8e2865375"
  },
  {
    "url": "blog/skepticism/2015/09/27/index.html",
    "revision": "ab7ed83923f28a5f08d411ea3cb2bd1b"
  },
  {
    "url": "blog/skepticism/2015/09/27/lama/index.html",
    "revision": "3781d45631a076e5bedff5abf9cbd8d3"
  },
  {
    "url": "blog/skepticism/2015/09/27/moon/index.html",
    "revision": "89155972e74124525df9914f912cad83"
  },
  {
    "url": "blog/skepticism/2015/09/27/scan/index.html",
    "revision": "c1d0b4c5f74a564448832c0339acb7dd"
  },
  {
    "url": "blog/skepticism/2015/09/index.html",
    "revision": "d17f79bb5bf8073a9c535c3f5706b628"
  },
  {
    "url": "blog/skepticism/2015/10/04/ghost/index.html",
    "revision": "78f2856391735e0c5e31c132fe0f291c"
  },
  {
    "url": "blog/skepticism/2015/10/04/haka/index.html",
    "revision": "b3ba609f94b0821a1ef205a975b01136"
  },
  {
    "url": "blog/skepticism/2015/10/04/index.html",
    "revision": "9c2a008fe65eafa66dce219ebf6f1fa2"
  },
  {
    "url": "blog/skepticism/2015/10/04/mars/index.html",
    "revision": "e5b0065a8d13871e2967d0bdb6430833"
  },
  {
    "url": "blog/skepticism/2015/10/04/pharmacy/index.html",
    "revision": "b05e15d6e2c00a48b8723e560a160ecd"
  },
  {
    "url": "blog/skepticism/2015/10/04/prostate/index.html",
    "revision": "c120ee2d809a8773948fc2d0b4d427e6"
  },
  {
    "url": "blog/skepticism/2015/10/11/armageddon/index.html",
    "revision": "159bc38ac68f212f47926f1fd9fdd6b9"
  },
  {
    "url": "blog/skepticism/2015/10/11/climate/index.html",
    "revision": "12a73d68ff21e3e4d6473454d62c2c4c"
  },
  {
    "url": "blog/skepticism/2015/10/11/ghost/index.html",
    "revision": "9654e3cb5da9fdfc501fca3564d6848e"
  },
  {
    "url": "blog/skepticism/2015/10/11/index.html",
    "revision": "4e97762f3d5b7c7388874d2db6b767d4"
  },
  {
    "url": "blog/skepticism/2015/10/11/magnesleep/index.html",
    "revision": "892867eb08970c2e4950277eeda8b702"
  },
  {
    "url": "blog/skepticism/2015/10/11/nhs/index.html",
    "revision": "214487a83ea6932daf5ce7205b9a42e5"
  },
  {
    "url": "blog/skepticism/2015/10/11/prophet/index.html",
    "revision": "8b6417e7d638882003ffe962cb529aa4"
  },
  {
    "url": "blog/skepticism/2015/10/index.html",
    "revision": "3b8dc464877672c4d8aef27dc0a7390d"
  },
  {
    "url": "blog/skepticism/2015/11/15/end/index.html",
    "revision": "b4b1c8b9e4838099f6ab6f95d2889f7f"
  },
  {
    "url": "blog/skepticism/2015/11/15/index.html",
    "revision": "0bb7265df07d5f5a764dfcffbd552330"
  },
  {
    "url": "blog/skepticism/2015/11/index.html",
    "revision": "fbde49b4e42b05e5d7cccb605312a13f"
  },
  {
    "url": "blog/skepticism/2015/12/13/astrology/index.html",
    "revision": "791d1f97696bf2b79b3eea5b9821c187"
  },
  {
    "url": "blog/skepticism/2015/12/13/cancer/index.html",
    "revision": "7df3fd1fff3e26e26be449db9170855c"
  },
  {
    "url": "blog/skepticism/2015/12/13/chickenpox/index.html",
    "revision": "3fb9b89e5260bea5c8928717bcde7f5f"
  },
  {
    "url": "blog/skepticism/2015/12/13/index.html",
    "revision": "6dbca8df6b64bbe328dd7db74dec475b"
  },
  {
    "url": "blog/skepticism/2015/12/13/osteopath/index.html",
    "revision": "cf3e62ef68a2c0ca9a645b3c9aab58be"
  },
  {
    "url": "blog/skepticism/2015/12/13/priest/index.html",
    "revision": "b7695ef95cf548ca466387b293bcd1b3"
  },
  {
    "url": "blog/skepticism/2015/12/13/psychic/index.html",
    "revision": "5240104502a26c24f60de16ec3b1cd90"
  },
  {
    "url": "blog/skepticism/2015/12/13/vaccines/index.html",
    "revision": "a7ecc92ad24b99a752641ad0c751bb5d"
  },
  {
    "url": "blog/skepticism/2015/12/index.html",
    "revision": "e3153a1d75ca2ef6a0d21f21c806a6dc"
  },
  {
    "url": "blog/skepticism/2015/index.html",
    "revision": "bd2146a2602a1cc772252db736da456c"
  },
  {
    "url": "blog/skepticism/2016/02/07/antioxidant/index.html",
    "revision": "cda382c707fecc906050123cbc77a5ad"
  },
  {
    "url": "blog/skepticism/2016/02/07/index.html",
    "revision": "dea8509f05e7972f6c07c215cd8fd1b6"
  },
  {
    "url": "blog/skepticism/2016/02/07/kfc/index.html",
    "revision": "edd7bedcc6981bd0b50f29147dd6a50c"
  },
  {
    "url": "blog/skepticism/2016/02/07/ph/index.html",
    "revision": "7343dbbc0999660b03e6c85efb8509b1"
  },
  {
    "url": "blog/skepticism/2016/02/07/sandy/index.html",
    "revision": "ee01d38ef5fabb5210294ef517469001"
  },
  {
    "url": "blog/skepticism/2016/02/07/sarfati/index.html",
    "revision": "552b7df850535c690a79b31b87e47310"
  },
  {
    "url": "blog/skepticism/2016/02/07/trump/index.html",
    "revision": "f5007e4ba335ef149c41934dd35dc588"
  },
  {
    "url": "blog/skepticism/2016/02/14/coins/index.html",
    "revision": "864e0fde32920555b7143cd0d6dff0d1"
  },
  {
    "url": "blog/skepticism/2016/02/14/fast/index.html",
    "revision": "d27ad571f2292c84de80e1162992923e"
  },
  {
    "url": "blog/skepticism/2016/02/14/fluoride/index.html",
    "revision": "ee1084d3ca67e0372f9674aae3cac860"
  },
  {
    "url": "blog/skepticism/2016/02/14/icke/index.html",
    "revision": "af5737478a786526dc524392ef5037ab"
  },
  {
    "url": "blog/skepticism/2016/02/14/index.html",
    "revision": "b311d19c42d8eb78da4f3392eefefa6a"
  },
  {
    "url": "blog/skepticism/2016/02/14/yeti/index.html",
    "revision": "7e5775a5712bf286bcd4c2c48e007be6"
  },
  {
    "url": "blog/skepticism/2016/02/21/homeopathy/index.html",
    "revision": "ef83c3390d156400c52e3b18c1b3e071"
  },
  {
    "url": "blog/skepticism/2016/02/21/index.html",
    "revision": "0641622249eb2345b98b1411ef38a9d0"
  },
  {
    "url": "blog/skepticism/2016/02/21/monster/index.html",
    "revision": "c5466a1eeec4873c69b2c71e61972527"
  },
  {
    "url": "blog/skepticism/2016/02/21/scalia/index.html",
    "revision": "62255a743f74f14750878a75097a28e4"
  },
  {
    "url": "blog/skepticism/2016/02/21/shane/index.html",
    "revision": "f933d7db4d58d8b423d1161fa165f6c7"
  },
  {
    "url": "blog/skepticism/2016/02/21/texas/index.html",
    "revision": "34008a046b2865961efd4f403f02cdf6"
  },
  {
    "url": "blog/skepticism/2016/02/28/acupuncture/index.html",
    "revision": "f2bc49f17d3e400e7ad4eefb38265620"
  },
  {
    "url": "blog/skepticism/2016/02/28/fsm/index.html",
    "revision": "a869804b8f663071877471ee85eb1951"
  },
  {
    "url": "blog/skepticism/2016/02/28/index.html",
    "revision": "3ddd1f559fc19f071c79410c9ad86b66"
  },
  {
    "url": "blog/skepticism/2016/02/28/iv/index.html",
    "revision": "f92188bd6a074c4df67e933070b8eba0"
  },
  {
    "url": "blog/skepticism/2016/02/28/natural/index.html",
    "revision": "629d913edd0142a5b75d333092585b49"
  },
  {
    "url": "blog/skepticism/2016/02/28/talc/index.html",
    "revision": "96a13c6e5f4c52995eb9c19ed25c8575"
  },
  {
    "url": "blog/skepticism/2016/02/index.html",
    "revision": "7baa858a425681ff9dfa502b81333bfd"
  },
  {
    "url": "blog/skepticism/2016/03/13/herbs/index.html",
    "revision": "fd71aa4272c429585ac9c93642ebc8cb"
  },
  {
    "url": "blog/skepticism/2016/03/13/index.html",
    "revision": "c084bed4ac2f51893336c9958738aa6c"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandala/index.html",
    "revision": "c2ca46a6bf2c91c762bd7c45811c0891"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandela/index.html",
    "revision": "4e30e8d9038bfa6e0e0d21d915a3e9da"
  },
  {
    "url": "blog/skepticism/2016/03/13/spray/index.html",
    "revision": "554a13224f75564457005af5c4d9a8fd"
  },
  {
    "url": "blog/skepticism/2016/03/index.html",
    "revision": "768193179bc38946a96c3e1196423690"
  },
  {
    "url": "blog/skepticism/2016/04/17/charity/index.html",
    "revision": "b243564c82cfc1af802cec7ebe45484e"
  },
  {
    "url": "blog/skepticism/2016/04/17/chiro/index.html",
    "revision": "1c0db9db676cf1f95f3feccf5682b9ae"
  },
  {
    "url": "blog/skepticism/2016/04/17/fluoride/index.html",
    "revision": "8cedaf598f3019ebc2cc128bbaa9320f"
  },
  {
    "url": "blog/skepticism/2016/04/17/index.html",
    "revision": "27593a3cde67e2f32f429f1533986529"
  },
  {
    "url": "blog/skepticism/2016/04/17/lotto/index.html",
    "revision": "f304013b910c8a9a52318a20de9d2f8d"
  },
  {
    "url": "blog/skepticism/2016/04/17/mind/index.html",
    "revision": "6cc30d65c96b16eeee76677067f67da2"
  },
  {
    "url": "blog/skepticism/2016/04/17/whooping/index.html",
    "revision": "15584c4564732ca1232cede1a60e217e"
  },
  {
    "url": "blog/skepticism/2016/04/index.html",
    "revision": "ba2867ca377e28fa3bfec79d27264bbc"
  },
  {
    "url": "blog/skepticism/2016/06/05/1080/index.html",
    "revision": "e186e39b839679313743bdd743779283"
  },
  {
    "url": "blog/skepticism/2016/06/05/acupuncture/index.html",
    "revision": "448e9c7bac54aa3a81d8a07f01b71ce7"
  },
  {
    "url": "blog/skepticism/2016/06/05/family/index.html",
    "revision": "45aaf9a5609b27a6251e98f3f1b03dff"
  },
  {
    "url": "blog/skepticism/2016/06/05/index.html",
    "revision": "b2e15b3e806cea1024164f93daa76672"
  },
  {
    "url": "blog/skepticism/2016/06/05/limbaugh/index.html",
    "revision": "2b8381a17e421e2f6c60d1b139474751"
  },
  {
    "url": "blog/skepticism/2016/06/12/bobby/index.html",
    "revision": "e5cd16ba7143448fd70de6b61049b6c3"
  },
  {
    "url": "blog/skepticism/2016/06/12/climate/index.html",
    "revision": "29c9ff51d56b7c5e8167c58a1f2828d2"
  },
  {
    "url": "blog/skepticism/2016/06/12/index.html",
    "revision": "71de0c1990a112866fed41950ec4f03d"
  },
  {
    "url": "blog/skepticism/2016/06/12/pugh/index.html",
    "revision": "563ae8781656823238f2ba4ac1f94fbd"
  },
  {
    "url": "blog/skepticism/2016/06/12/savage/index.html",
    "revision": "ba01d77c5201d5e36395b95ee718a978"
  },
  {
    "url": "blog/skepticism/2016/06/12/sawdust/index.html",
    "revision": "9aad7ebf469c7b580232971939b2595f"
  },
  {
    "url": "blog/skepticism/2016/06/19/beauty/index.html",
    "revision": "ac128b63f7254346641b3f6c211c3530"
  },
  {
    "url": "blog/skepticism/2016/06/19/bilderberg/index.html",
    "revision": "8b828e89ace2e104ccbcd86504d002d0"
  },
  {
    "url": "blog/skepticism/2016/06/19/cyf/index.html",
    "revision": "9e02b353c4f35670ed93b5a7b67db10e"
  },
  {
    "url": "blog/skepticism/2016/06/19/holt/index.html",
    "revision": "75c4aa8e2e3a542a45f6e5e242943b58"
  },
  {
    "url": "blog/skepticism/2016/06/19/index.html",
    "revision": "3f5c4fbef65b44e40201a7c95eb9de73"
  },
  {
    "url": "blog/skepticism/2016/06/19/silver/index.html",
    "revision": "0d2f5a53968fa1b78c3af6cb00f2561c"
  },
  {
    "url": "blog/skepticism/2016/06/19/ufo/index.html",
    "revision": "bd6c44b92751b1db6d1c1382b1dc555a"
  },
  {
    "url": "blog/skepticism/2016/06/26/homeopathy/index.html",
    "revision": "03bd70fd6848e12cb12f04c990daf895"
  },
  {
    "url": "blog/skepticism/2016/06/26/index.html",
    "revision": "8da55a5ea1223bf3f6a8332fdae9fc20"
  },
  {
    "url": "blog/skepticism/2016/06/26/robbins/index.html",
    "revision": "30e7f0c0e4cc83b1ad9b74ec613c1579"
  },
  {
    "url": "blog/skepticism/2016/06/26/selfies/index.html",
    "revision": "f9342ca62015afab80ae6de8572aed79"
  },
  {
    "url": "blog/skepticism/2016/06/26/silver/index.html",
    "revision": "45b4a660206f40bb7ea680f6e4276ff5"
  },
  {
    "url": "blog/skepticism/2016/06/26/ufos/index.html",
    "revision": "bc3670d53b24ff11233b3d8891440c86"
  },
  {
    "url": "blog/skepticism/2016/06/index.html",
    "revision": "69bf79bfbed3c236e27c2a5449e70d5e"
  },
  {
    "url": "blog/skepticism/2016/07/03/glyphosate/index.html",
    "revision": "f3eba9fbacd754d68e6bdc84cef855cb"
  },
  {
    "url": "blog/skepticism/2016/07/03/gmo/index.html",
    "revision": "34114825229bce9c9d4b918f2e560c3a"
  },
  {
    "url": "blog/skepticism/2016/07/03/index.html",
    "revision": "306457c37a99ff631f65179b5be2629e"
  },
  {
    "url": "blog/skepticism/2016/07/03/jail/index.html",
    "revision": "5c9bd7d1dde58c636b24a44589c9d26a"
  },
  {
    "url": "blog/skepticism/2016/07/03/ken/index.html",
    "revision": "62271dca974ed685e7dca9624b562ab8"
  },
  {
    "url": "blog/skepticism/2016/07/10/ark/index.html",
    "revision": "7f297f439fa147503204213758d0a3f9"
  },
  {
    "url": "blog/skepticism/2016/07/10/bee/index.html",
    "revision": "438b38e4d6b5fb640c4b87fe885e582b"
  },
  {
    "url": "blog/skepticism/2016/07/10/index.html",
    "revision": "d3d997b97acbd177ee66cbbd9b518037"
  },
  {
    "url": "blog/skepticism/2016/07/10/lottery/index.html",
    "revision": "f464ab46b7d117ffad592c190e4139a6"
  },
  {
    "url": "blog/skepticism/2016/07/10/murder/index.html",
    "revision": "7d357cd61a4287c07a2b1d00b9dd8da4"
  },
  {
    "url": "blog/skepticism/2016/07/17/dogs/index.html",
    "revision": "b80619ba70a08de4d34a8a739dd84098"
  },
  {
    "url": "blog/skepticism/2016/07/17/fsm/index.html",
    "revision": "91fed78630fcf4bafbecc657e8dec915"
  },
  {
    "url": "blog/skepticism/2016/07/17/fyi/index.html",
    "revision": "24286ac2fef2ec9c9def10466df204b3"
  },
  {
    "url": "blog/skepticism/2016/07/17/index.html",
    "revision": "c0bab3c6d21138f36105492072b495bb"
  },
  {
    "url": "blog/skepticism/2016/07/17/natural/index.html",
    "revision": "cf82c138fd7ecf987fe5ed4723867c92"
  },
  {
    "url": "blog/skepticism/2016/07/17/pokemon/index.html",
    "revision": "94359c6b399f3d930eaab39ed21f3dbf"
  },
  {
    "url": "blog/skepticism/2016/07/index.html",
    "revision": "ba730c3ce850676bc3e31fea7a7921c2"
  },
  {
    "url": "blog/skepticism/2016/08/07/icke/index.html",
    "revision": "d3a2c455213dd6db22b1eb6077b01dc1"
  },
  {
    "url": "blog/skepticism/2016/08/07/index.html",
    "revision": "9da59ace30eff21ac18f23644ce55a91"
  },
  {
    "url": "blog/skepticism/2016/08/21/brian/index.html",
    "revision": "f504bf10723facd86116ae927892ba88"
  },
  {
    "url": "blog/skepticism/2016/08/21/chlorine/index.html",
    "revision": "f23e51e322a38300ac2289781728671e"
  },
  {
    "url": "blog/skepticism/2016/08/21/index.html",
    "revision": "beb1201063319e95c8080fb357426d5c"
  },
  {
    "url": "blog/skepticism/2016/08/21/murder/index.html",
    "revision": "159ba3fe94fe9be401414c998c6d8225"
  },
  {
    "url": "blog/skepticism/2016/08/21/superfoods/index.html",
    "revision": "8ca75c2fee9b4537b00a36378de10745"
  },
  {
    "url": "blog/skepticism/2016/08/21/witch/index.html",
    "revision": "993bea56fa23556fc2103caa9ae1c201"
  },
  {
    "url": "blog/skepticism/2016/08/28/alcohol/index.html",
    "revision": "f6f89a19ebff47f3a58b17f49f467289"
  },
  {
    "url": "blog/skepticism/2016/08/28/chiro/index.html",
    "revision": "46f64f54bd38d5997479d2dd50e76dc6"
  },
  {
    "url": "blog/skepticism/2016/08/28/index.html",
    "revision": "4397285fef60ca9a246b988ca2d15abb"
  },
  {
    "url": "blog/skepticism/2016/08/28/processed/index.html",
    "revision": "585a86298246ae72507301ce6bc6cc56"
  },
  {
    "url": "blog/skepticism/2016/08/28/sbh/index.html",
    "revision": "1f29a28c26cb7998c5d8a713e1e6b699"
  },
  {
    "url": "blog/skepticism/2016/08/index.html",
    "revision": "919dcf9d4f6e962eaa996b15e318b335"
  },
  {
    "url": "blog/skepticism/2016/09/18/altruism/index.html",
    "revision": "21394d3d08156766c003555f2225334e"
  },
  {
    "url": "blog/skepticism/2016/09/18/better/index.html",
    "revision": "71fbc82954c954bf40c26f8fb4e6e10f"
  },
  {
    "url": "blog/skepticism/2016/09/18/homeopathy/index.html",
    "revision": "a03366bf33f58e9ebfd660912557309d"
  },
  {
    "url": "blog/skepticism/2016/09/18/index.html",
    "revision": "a1c9d9085756822a6b48dceed2d8d9b5"
  },
  {
    "url": "blog/skepticism/2016/09/18/nonsense/index.html",
    "revision": "d339cd6169f3cea97d01fc8a6f0b0761"
  },
  {
    "url": "blog/skepticism/2016/09/18/trump/index.html",
    "revision": "891f0ae46879e429a1f4f8b1300e69ea"
  },
  {
    "url": "blog/skepticism/2016/09/25/clinic/index.html",
    "revision": "4ecd09ee5bf6cf47ce2e121db7791063"
  },
  {
    "url": "blog/skepticism/2016/09/25/fluoride/index.html",
    "revision": "d3d39e6b0cf56c85644660bf9a8cebb5"
  },
  {
    "url": "blog/skepticism/2016/09/25/homeopathy/index.html",
    "revision": "5177798d8f65aaa4e55be0368cd6c34b"
  },
  {
    "url": "blog/skepticism/2016/09/25/index.html",
    "revision": "9f4d1d8a4d8183ba42a09f9ba7fe650d"
  },
  {
    "url": "blog/skepticism/2016/09/25/murder/index.html",
    "revision": "0d49d082f7ea2d0160a3605ebc2ba486"
  },
  {
    "url": "blog/skepticism/2016/09/index.html",
    "revision": "fb4356d90c1649e9f8ea613da864ec02"
  },
  {
    "url": "blog/skepticism/2016/10/21/bigfoot/index.html",
    "revision": "2455ab3f4d3cb8c64004ce8683f62193"
  },
  {
    "url": "blog/skepticism/2016/10/21/breasts/index.html",
    "revision": "0c66dbd2220457b6229274bdb9625f36"
  },
  {
    "url": "blog/skepticism/2016/10/21/index.html",
    "revision": "cddb082365197e1e3c7eeb9d22836136"
  },
  {
    "url": "blog/skepticism/2016/10/21/medsafe/index.html",
    "revision": "cee08d3d60621667d1e12b0cd1b3b980"
  },
  {
    "url": "blog/skepticism/2016/10/21/zenteq/index.html",
    "revision": "08ce49dc2f70cbe659ee1416c948eda8"
  },
  {
    "url": "blog/skepticism/2016/10/index.html",
    "revision": "cfb7241430a3c966d6d0e3663305e2db"
  },
  {
    "url": "blog/skepticism/2016/11/13/conference/index.html",
    "revision": "5be0f08c146247cd7070956eaf671641"
  },
  {
    "url": "blog/skepticism/2016/11/13/green/index.html",
    "revision": "b3ff4716952d302b8ead241026dda82e"
  },
  {
    "url": "blog/skepticism/2016/11/13/index.html",
    "revision": "7660fa6a28e8d3398d4abebec58d3385"
  },
  {
    "url": "blog/skepticism/2016/11/13/vice/index.html",
    "revision": "59d8e97522253c19672c2bdfd91f79b9"
  },
  {
    "url": "blog/skepticism/2016/11/27/bioptron/index.html",
    "revision": "89ed71c33f47f79fe1b543f034ee2252"
  },
  {
    "url": "blog/skepticism/2016/11/27/conference/index.html",
    "revision": "21b991102c181acdb26d46e224225d8d"
  },
  {
    "url": "blog/skepticism/2016/11/27/earthquake/index.html",
    "revision": "39d27535c95b85cc82906eaf9c716361"
  },
  {
    "url": "blog/skepticism/2016/11/27/index.html",
    "revision": "92ea2c901ccd2e5ece94c94037b5ff35"
  },
  {
    "url": "blog/skepticism/2016/11/index.html",
    "revision": "ee56cbe0cb82fa60d12fb0b374ce4c67"
  },
  {
    "url": "blog/skepticism/2016/12/04/conference/index.html",
    "revision": "46c94a1b94670551ae07c131bdf4bc27"
  },
  {
    "url": "blog/skepticism/2016/12/04/index.html",
    "revision": "5b2998ebc76f118d5ad7f386d87bc3a6"
  },
  {
    "url": "blog/skepticism/2016/12/18/colin/index.html",
    "revision": "c173578e5d8bec4b2efe576f2e4823b8"
  },
  {
    "url": "blog/skepticism/2016/12/18/fiji/index.html",
    "revision": "d0ff743f844ab667d7ce77105e3a7445"
  },
  {
    "url": "blog/skepticism/2016/12/18/index.html",
    "revision": "e45858ecd6ccd647c53acf81084b2450"
  },
  {
    "url": "blog/skepticism/2016/12/18/kinesiology/index.html",
    "revision": "c2ce0885e8240f8d174eb8547ed83b4d"
  },
  {
    "url": "blog/skepticism/2016/12/18/mmm/index.html",
    "revision": "63b084444ecef05e0c0e037f10026561"
  },
  {
    "url": "blog/skepticism/2016/12/18/nigel/index.html",
    "revision": "e56dce0cfe34fff2f88aa21007cf376c"
  },
  {
    "url": "blog/skepticism/2016/12/index.html",
    "revision": "e4675ab922f76519bfaa6efba14d041f"
  },
  {
    "url": "blog/skepticism/2016/index.html",
    "revision": "e6ac8514b8ca9e598fb505ea11ba370b"
  },
  {
    "url": "blog/skepticism/2017/01/22/index.html",
    "revision": "4957af3cfc3924a814e4d268389e263c"
  },
  {
    "url": "blog/skepticism/2017/01/22/scientology/index.html",
    "revision": "570aecfb3d300e3ba1c7c9b00cc4c7b8"
  },
  {
    "url": "blog/skepticism/2017/01/29/creation/index.html",
    "revision": "fb6318a94c7c5d116c2333f0005ff451"
  },
  {
    "url": "blog/skepticism/2017/01/29/index.html",
    "revision": "b43d1f8e61fd9f6309748b54c2095c3e"
  },
  {
    "url": "blog/skepticism/2017/01/index.html",
    "revision": "4dcf578f0cac466cfb392a63fd93a9cb"
  },
  {
    "url": "blog/skepticism/2017/02/05/fraudster/index.html",
    "revision": "0317847604f41900088243c6239d03d7"
  },
  {
    "url": "blog/skepticism/2017/02/05/gervais/index.html",
    "revision": "8bce3ee0732a3ba00d33d55ab84e76f9"
  },
  {
    "url": "blog/skepticism/2017/02/05/index.html",
    "revision": "c3fb2f7fddac9f0e67b3d7b6d2beca5e"
  },
  {
    "url": "blog/skepticism/2017/02/05/scientology/index.html",
    "revision": "9e511c72dac3bb439dc960b7109c8a06"
  },
  {
    "url": "blog/skepticism/2017/02/19/homeopathy/index.html",
    "revision": "ed556e1afc0a198638b70f85070a8524"
  },
  {
    "url": "blog/skepticism/2017/02/19/index.html",
    "revision": "5720589ea21826dfd7c06de1fae510f9"
  },
  {
    "url": "blog/skepticism/2017/02/19/lottery/index.html",
    "revision": "51122561fcd50d28e09bf34297b0f654"
  },
  {
    "url": "blog/skepticism/2017/02/19/vaxxed/index.html",
    "revision": "b2a9c1205d28f1ee09273c4f5bfbf7a3"
  },
  {
    "url": "blog/skepticism/2017/02/19/whales/index.html",
    "revision": "79f845ff01f741b80e8e7ce3f0a9195f"
  },
  {
    "url": "blog/skepticism/2017/02/index.html",
    "revision": "4649e36d771efe29260d6e1ffb8ff020"
  },
  {
    "url": "blog/skepticism/2017/03/05/index.html",
    "revision": "2879c2769352d519c59a00798b5dbfe1"
  },
  {
    "url": "blog/skepticism/2017/03/05/rea/index.html",
    "revision": "0396340688132dce6938880b923fc07c"
  },
  {
    "url": "blog/skepticism/2017/03/19/fake/index.html",
    "revision": "77df2c74e9dd4a9845f94068d54d1c10"
  },
  {
    "url": "blog/skepticism/2017/03/19/index.html",
    "revision": "16c2bd783483e2bb9be3a6bf895e2424"
  },
  {
    "url": "blog/skepticism/2017/03/19/murder/index.html",
    "revision": "eb7c537e03dd52bd034ed19ad1f6ffd4"
  },
  {
    "url": "blog/skepticism/2017/03/26/census/index.html",
    "revision": "e626296dac149ca8c9f1e614477f54dd"
  },
  {
    "url": "blog/skepticism/2017/03/26/index.html",
    "revision": "88e7db3d242de0634b789fa9f9b3e3f0"
  },
  {
    "url": "blog/skepticism/2017/03/26/nzmj/index.html",
    "revision": "1e4f256b70c9eb0e975993521d02c107"
  },
  {
    "url": "blog/skepticism/2017/03/26/shaquille/index.html",
    "revision": "34200c4d4eceb1e2a566c3563afe4f89"
  },
  {
    "url": "blog/skepticism/2017/03/index.html",
    "revision": "4428aaf96014c869b9c1f7d5cb422637"
  },
  {
    "url": "blog/skepticism/2017/04/02/index.html",
    "revision": "efded11f452c44c3ee7c14fed494269d"
  },
  {
    "url": "blog/skepticism/2017/04/02/nasa/index.html",
    "revision": "a37969bbd759648679332e4f5ad04f78"
  },
  {
    "url": "blog/skepticism/2017/04/02/science/index.html",
    "revision": "fba40f50c66ead4f123c1440c57e0b13"
  },
  {
    "url": "blog/skepticism/2017/04/02/vaxxed/index.html",
    "revision": "9b9dcc34ce6a4f733c4ea6f3248c7e11"
  },
  {
    "url": "blog/skepticism/2017/04/09/index.html",
    "revision": "dfe378717006934b3f96cc44825b26cb"
  },
  {
    "url": "blog/skepticism/2017/04/09/tekiri/index.html",
    "revision": "ba8069b4d4ef2aaa2826f8bd73af74b7"
  },
  {
    "url": "blog/skepticism/2017/04/09/vaxxed/index.html",
    "revision": "4beb9247d208a6a440f5fe1ba38fb9be"
  },
  {
    "url": "blog/skepticism/2017/04/23/arise/index.html",
    "revision": "3158aea94eb49529515753841eab4963"
  },
  {
    "url": "blog/skepticism/2017/04/23/index.html",
    "revision": "c45e43e5ae13b4cc87062e8a310dd83f"
  },
  {
    "url": "blog/skepticism/2017/04/23/kelvin/index.html",
    "revision": "f732e26fe32384448321cf115764815e"
  },
  {
    "url": "blog/skepticism/2017/04/index.html",
    "revision": "7cdb960d9462469085ca7b6c13cc4911"
  },
  {
    "url": "blog/skepticism/2017/05/07/cancer/index.html",
    "revision": "69aa6571d0d7c810401ddcaef6aa3548"
  },
  {
    "url": "blog/skepticism/2017/05/07/index.html",
    "revision": "70d6eb9efcfbac4c9920fc6309e60005"
  },
  {
    "url": "blog/skepticism/2017/05/07/nigel/index.html",
    "revision": "5b3084edaf592b5294a8b205633f1341"
  },
  {
    "url": "blog/skepticism/2017/05/21/blasphemy/index.html",
    "revision": "4fe8266f2d225da302680c60e87e3e3a"
  },
  {
    "url": "blog/skepticism/2017/05/21/flat/index.html",
    "revision": "721bab247b82ae42c3dda82398ebcd41"
  },
  {
    "url": "blog/skepticism/2017/05/21/index.html",
    "revision": "fbabd3318c2b95f8dddc54d8a5d6c485"
  },
  {
    "url": "blog/skepticism/2017/05/21/maori/index.html",
    "revision": "afd9e0f3bd8966933cc11efa53d71a46"
  },
  {
    "url": "blog/skepticism/2017/05/index.html",
    "revision": "71ba967d55ca4e642c056651b9499e26"
  },
  {
    "url": "blog/skepticism/2017/06/04/bigelow/index.html",
    "revision": "02bac9e7bbaba6f33e0add98ad9edc8b"
  },
  {
    "url": "blog/skepticism/2017/06/04/climate/index.html",
    "revision": "a8df828e063781bf13d229a1aab7ce43"
  },
  {
    "url": "blog/skepticism/2017/06/04/hansford/index.html",
    "revision": "f21d291d776e843bf63520b62db1ca1b"
  },
  {
    "url": "blog/skepticism/2017/06/04/index.html",
    "revision": "24c009a999e6003e2b9ee6c2effd4069"
  },
  {
    "url": "blog/skepticism/2017/06/04/wasp/index.html",
    "revision": "5f0fb8477043154e8c5108f41e2810f9"
  },
  {
    "url": "blog/skepticism/2017/06/11/colonic/index.html",
    "revision": "aa3e53b0b07c63320e2662bf2dcefaf7"
  },
  {
    "url": "blog/skepticism/2017/06/11/credulous/index.html",
    "revision": "132535c427aa04cb29063d01257eeb63"
  },
  {
    "url": "blog/skepticism/2017/06/11/index.html",
    "revision": "f7ac21b28c343e92dd854a15c5313f0d"
  },
  {
    "url": "blog/skepticism/2017/06/11/journals/index.html",
    "revision": "f5ce33e67038192282b0a21494745711"
  },
  {
    "url": "blog/skepticism/2017/06/18/breatharians/index.html",
    "revision": "c7b5831cc701b64161ae00041a7e7239"
  },
  {
    "url": "blog/skepticism/2017/06/18/fieldays/index.html",
    "revision": "d5d5aa6fb73a8be2d508c2d4e28e0887"
  },
  {
    "url": "blog/skepticism/2017/06/18/index.html",
    "revision": "3c965d65690a4724dc0682a98bda14c4"
  },
  {
    "url": "blog/skepticism/2017/06/18/jw/index.html",
    "revision": "3ad27e78defdc58058b411e95e5a846e"
  },
  {
    "url": "blog/skepticism/2017/06/18/oil/index.html",
    "revision": "4171985b1d894db7cf946994f8667eb7"
  },
  {
    "url": "blog/skepticism/2017/06/index.html",
    "revision": "65be02f5dc5c7c3231199700f128d715"
  },
  {
    "url": "blog/skepticism/2017/07/02/baby/index.html",
    "revision": "441277d2016585b5aa32a630f694312f"
  },
  {
    "url": "blog/skepticism/2017/07/02/index.html",
    "revision": "af35455755144cdbcec1045ffdc0ed55"
  },
  {
    "url": "blog/skepticism/2017/07/02/infowars/index.html",
    "revision": "a5c1ae9b8bd6893b5b01b0901a947763"
  },
  {
    "url": "blog/skepticism/2017/07/02/scientology/index.html",
    "revision": "e434d954f3b36f3c1333940aea7dd68c"
  },
  {
    "url": "blog/skepticism/2017/07/16/bananas/index.html",
    "revision": "ceaaa6b693582d33924054b18cf03eb6"
  },
  {
    "url": "blog/skepticism/2017/07/16/circles/index.html",
    "revision": "3d8a178c97acbea0bc697ca5ba73e059"
  },
  {
    "url": "blog/skepticism/2017/07/16/index.html",
    "revision": "0dcae89d1bdf84be285961b86a675593"
  },
  {
    "url": "blog/skepticism/2017/07/16/siggi/index.html",
    "revision": "38b152bd1064773d0c61f0aced56e54e"
  },
  {
    "url": "blog/skepticism/2017/07/16/vaxxed/index.html",
    "revision": "0048f9b95f77b793b9dfc9b8ddbfd9bd"
  },
  {
    "url": "blog/skepticism/2017/07/30/bleach/index.html",
    "revision": "5081b507e99f5bf2941a41cd53ee86c8"
  },
  {
    "url": "blog/skepticism/2017/07/30/bluebeam/index.html",
    "revision": "25af4fb0529078902d0f583150d96eb0"
  },
  {
    "url": "blog/skepticism/2017/07/30/index.html",
    "revision": "90c75d6187845a08e556621be43b16bb"
  },
  {
    "url": "blog/skepticism/2017/07/30/police/index.html",
    "revision": "52e3791a2ebc50beb0576464629091a3"
  },
  {
    "url": "blog/skepticism/2017/07/index.html",
    "revision": "7e9363bbb2946872be3e60c2cbed536e"
  },
  {
    "url": "blog/skepticism/2017/08/06/conned/index.html",
    "revision": "7d4ac4467beb6c62380cdc148d71f81b"
  },
  {
    "url": "blog/skepticism/2017/08/06/doll/index.html",
    "revision": "ae16ad71cea19ea19ef8194632a739d1"
  },
  {
    "url": "blog/skepticism/2017/08/06/index.html",
    "revision": "a504303e8e75cfeef90efd8a3a6ff68f"
  },
  {
    "url": "blog/skepticism/2017/08/06/jacinda/index.html",
    "revision": "922d9586ce2304e9e1fa34a85c29a7c6"
  },
  {
    "url": "blog/skepticism/2017/08/06/lotto/index.html",
    "revision": "aa6688127123221078a7cec5cfe6f56f"
  },
  {
    "url": "blog/skepticism/2017/08/27/index.html",
    "revision": "e30d11cb86a0f176ce6500229080b50f"
  },
  {
    "url": "blog/skepticism/2017/08/27/naturopath/index.html",
    "revision": "8dd127343c1fd2ba817cef8d4fbd8a91"
  },
  {
    "url": "blog/skepticism/2017/08/27/satanic/index.html",
    "revision": "8d6f1727f6f07706cd8dfab8fa13be59"
  },
  {
    "url": "blog/skepticism/2017/08/index.html",
    "revision": "dafbe1557e955101d7311d0debb07770"
  },
  {
    "url": "blog/skepticism/2017/09/03/apocalypse/index.html",
    "revision": "69742db31ca560e56f55289677547689"
  },
  {
    "url": "blog/skepticism/2017/09/03/cancer/index.html",
    "revision": "f57352b72aa4f21da8e9be180abbd673"
  },
  {
    "url": "blog/skepticism/2017/09/03/index.html",
    "revision": "6b0c16b5341adcc8ea0fd689872f65aa"
  },
  {
    "url": "blog/skepticism/2017/09/03/rectangle/index.html",
    "revision": "acd6ee45e5bd61a33d240a5d65529460"
  },
  {
    "url": "blog/skepticism/2017/09/03/stargate/index.html",
    "revision": "8003f36904cf8c9d35583117cfa70919"
  },
  {
    "url": "blog/skepticism/2017/09/index.html",
    "revision": "65db10eea96fc56d0ec4a9862ff346c3"
  },
  {
    "url": "blog/skepticism/2017/10/01/apocalypse/index.html",
    "revision": "37d6d9c92e741a1f356a4e21aa62435e"
  },
  {
    "url": "blog/skepticism/2017/10/01/freeman/index.html",
    "revision": "3f553e50df20e63848fe8777d940cda9"
  },
  {
    "url": "blog/skepticism/2017/10/01/index.html",
    "revision": "023a60e9e131892457ceb0e90423d42d"
  },
  {
    "url": "blog/skepticism/2017/10/01/pharmacy/index.html",
    "revision": "648dd4a173cae23c56cffe736e0f886d"
  },
  {
    "url": "blog/skepticism/2017/10/08/index.html",
    "revision": "8a36ab159652507601f647a23d27a736"
  },
  {
    "url": "blog/skepticism/2017/10/08/pill/index.html",
    "revision": "a6dc07e7f77b24567ee26e15b6241779"
  },
  {
    "url": "blog/skepticism/2017/10/08/qsb/index.html",
    "revision": "e4f02e2b4c090b5530b198034bde007c"
  },
  {
    "url": "blog/skepticism/2017/10/08/vegas/index.html",
    "revision": "4b3c1538cdde0d24c39f390fa4988e8d"
  },
  {
    "url": "blog/skepticism/2017/10/15/doterra/index.html",
    "revision": "82410e56e0f10febe80b49f41401d647"
  },
  {
    "url": "blog/skepticism/2017/10/15/index.html",
    "revision": "bd51423383ee15a6cf05df06e9ede922"
  },
  {
    "url": "blog/skepticism/2017/10/15/lie/index.html",
    "revision": "7e2f39bd10e1a8d88e23480bf2478877"
  },
  {
    "url": "blog/skepticism/2017/10/15/soap/index.html",
    "revision": "20c8a17fe1020f4b90e4320aacc04dc0"
  },
  {
    "url": "blog/skepticism/2017/10/index.html",
    "revision": "062fd84c3b25b520350ca514d23693aa"
  },
  {
    "url": "blog/skepticism/2017/11/05/conference/index.html",
    "revision": "98ddb29b363fbf99f107bc7a797a0be6"
  },
  {
    "url": "blog/skepticism/2017/11/05/glyphosate/index.html",
    "revision": "edc26115e834e31eb26abe147cba9dcb"
  },
  {
    "url": "blog/skepticism/2017/11/05/index.html",
    "revision": "93614c8317e7d453c2b83f650c6f6cfb"
  },
  {
    "url": "blog/skepticism/2017/11/05/stranded/index.html",
    "revision": "83e425f51242c2de5a9b640bff8c80a0"
  },
  {
    "url": "blog/skepticism/2017/11/05/tracts/index.html",
    "revision": "29810d7303506f4ec86144b54eea571d"
  },
  {
    "url": "blog/skepticism/2017/11/12/ghost/index.html",
    "revision": "9770c03c02b838fdf871d7b0b93f078e"
  },
  {
    "url": "blog/skepticism/2017/11/12/green/index.html",
    "revision": "e308f485025f058cb79665dd1bd0ea1d"
  },
  {
    "url": "blog/skepticism/2017/11/12/harassment/index.html",
    "revision": "f8ecb87f3cc12802de5b9e2ad88dcf57"
  },
  {
    "url": "blog/skepticism/2017/11/12/index.html",
    "revision": "2446f35a37261d0caaa4289536235150"
  },
  {
    "url": "blog/skepticism/2017/11/12/libby/index.html",
    "revision": "63cb0455eb8c4d7c39ad855322009564"
  },
  {
    "url": "blog/skepticism/2017/11/index.html",
    "revision": "de17299d52d63ca37ab8a442073cdb29"
  },
  {
    "url": "blog/skepticism/2017/12/03/acupuncture/index.html",
    "revision": "f72a7c15dfcb27913970d1b8b0f7b161"
  },
  {
    "url": "blog/skepticism/2017/12/03/denialism/index.html",
    "revision": "0347fdef70f8d1b2ea31dede96a7cce7"
  },
  {
    "url": "blog/skepticism/2017/12/03/dowsing/index.html",
    "revision": "d822fdc33550b9c50cf8a6cf102d270e"
  },
  {
    "url": "blog/skepticism/2017/12/03/holes/index.html",
    "revision": "dcca848df790c9c0d1adeef6c5209feb"
  },
  {
    "url": "blog/skepticism/2017/12/03/index.html",
    "revision": "1805171a81bb604bc45b4eaecb21afc1"
  },
  {
    "url": "blog/skepticism/2017/12/17/index.html",
    "revision": "aae355e866a4fed37e6c4c4bb5690a60"
  },
  {
    "url": "blog/skepticism/2017/12/17/nhs/index.html",
    "revision": "dd45e8a9481bea1fbd3eb4cbb8f78cf4"
  },
  {
    "url": "blog/skepticism/2017/12/17/oto/index.html",
    "revision": "21a5105344787b6501b47e7efa27f62d"
  },
  {
    "url": "blog/skepticism/2017/12/17/pastafarian/index.html",
    "revision": "d3c66fccb16d445889e9ee3ece19dfc0"
  },
  {
    "url": "blog/skepticism/2017/12/17/shc/index.html",
    "revision": "9352cfc79f2a5dfcce3e595061b65d80"
  },
  {
    "url": "blog/skepticism/2017/12/17/wellworks/index.html",
    "revision": "a56c0aad775b0935903f870cb25dd9ec"
  },
  {
    "url": "blog/skepticism/2017/12/index.html",
    "revision": "19a3909fe0b43e2afd2d233c389530a1"
  },
  {
    "url": "blog/skepticism/2017/index.html",
    "revision": "05f663c4899b602bbf7c85091a477e93"
  },
  {
    "url": "blog/skepticism/2018/01/21/grounding/index.html",
    "revision": "b173dcc5c3fe54c1060773430230fa69"
  },
  {
    "url": "blog/skepticism/2018/01/21/index.html",
    "revision": "145e83392a9098f3b44516feddeff5e4"
  },
  {
    "url": "blog/skepticism/2018/01/21/naturopath/index.html",
    "revision": "87efc7d6976b47212111e1fec2b26f77"
  },
  {
    "url": "blog/skepticism/2018/01/21/respen/index.html",
    "revision": "9445ab2eeba0b142e846128a2e391955"
  },
  {
    "url": "blog/skepticism/2018/01/28/bears/index.html",
    "revision": "e69d04c47a09582cb30a6f0f462975e6"
  },
  {
    "url": "blog/skepticism/2018/01/28/index.html",
    "revision": "0230b3b73935569368cc2d629221efdf"
  },
  {
    "url": "blog/skepticism/2018/01/28/peppering/index.html",
    "revision": "309d2f93a4cf010828589adfcfbfc55b"
  },
  {
    "url": "blog/skepticism/2018/01/28/pet/index.html",
    "revision": "5fe079ccb29edb9a72b61e2cabbec808"
  },
  {
    "url": "blog/skepticism/2018/01/28/quake/index.html",
    "revision": "473d7e5e5be01f27d6f3b449d1dbe25c"
  },
  {
    "url": "blog/skepticism/2018/01/28/scientology/index.html",
    "revision": "68525abf38ad805632f1f5f230751d38"
  },
  {
    "url": "blog/skepticism/2018/01/index.html",
    "revision": "cb75510dfc4aef9c093f41be5cc4791e"
  },
  {
    "url": "blog/skepticism/2018/02/11/asa/index.html",
    "revision": "5bbb9c4ad568a83217e6e9c29d17747e"
  },
  {
    "url": "blog/skepticism/2018/02/11/cannabis/index.html",
    "revision": "0cef4a34d68480144f68b4ec4c13a93e"
  },
  {
    "url": "blog/skepticism/2018/02/11/elon/index.html",
    "revision": "c37ce1b4fe5ab29d90d545f51911e9bc"
  },
  {
    "url": "blog/skepticism/2018/02/11/homeopathy/index.html",
    "revision": "8fd27c8a76ed4acb52cad4257305d159"
  },
  {
    "url": "blog/skepticism/2018/02/11/index.html",
    "revision": "61e0ee5d3f0632a932ae07d3c1a1baf1"
  },
  {
    "url": "blog/skepticism/2018/02/11/water/index.html",
    "revision": "1eb383f312b421c9506e6e135d38518c"
  },
  {
    "url": "blog/skepticism/2018/02/25/crisis/index.html",
    "revision": "7168e72d861bc1bd585f7560e81a4f17"
  },
  {
    "url": "blog/skepticism/2018/02/25/eggs/index.html",
    "revision": "2c13e35d256080369881e66d101ac8d9"
  },
  {
    "url": "blog/skepticism/2018/02/25/fsm/index.html",
    "revision": "0d5058ac5d773ad7a856a3fd7eaf7a29"
  },
  {
    "url": "blog/skepticism/2018/02/25/index.html",
    "revision": "7e07f4b1d919c44091de13d1a656948c"
  },
  {
    "url": "blog/skepticism/2018/02/25/number/index.html",
    "revision": "65a4cbd4415440709f096a27c1e5701c"
  },
  {
    "url": "blog/skepticism/2018/02/25/quackery/index.html",
    "revision": "61e4874d2e2dbbe78e84f9f2b0f90e73"
  },
  {
    "url": "blog/skepticism/2018/02/index.html",
    "revision": "c63556544eb3353daf35d9c8c4bcc317"
  },
  {
    "url": "blog/skepticism/2018/03/11/ai/index.html",
    "revision": "55e039f6db9524f2d4eb20de638b6675"
  },
  {
    "url": "blog/skepticism/2018/03/11/index.html",
    "revision": "6a28f0a2e597ce1758966cb4b5e6b892"
  },
  {
    "url": "blog/skepticism/2018/03/11/radiation/index.html",
    "revision": "c88049edb41c3862336d4962954e5263"
  },
  {
    "url": "blog/skepticism/2018/03/11/reiki/index.html",
    "revision": "58ed41854ffdb1b4d451647a14b6f798"
  },
  {
    "url": "blog/skepticism/2018/03/11/ufo/index.html",
    "revision": "c3c64211bf826e328a148e69c62ff956"
  },
  {
    "url": "blog/skepticism/2018/03/18/ghost/index.html",
    "revision": "a520d055893b29f56de54ef5a95a5684"
  },
  {
    "url": "blog/skepticism/2018/03/18/index.html",
    "revision": "91e7a77d0b6dabbfd6bbe34c5be20eaf"
  },
  {
    "url": "blog/skepticism/2018/03/18/psychic/index.html",
    "revision": "eceaaa871b36c56b78986e4a3f2917d3"
  },
  {
    "url": "blog/skepticism/2018/03/18/quack/index.html",
    "revision": "689dfac453ccfdb11f0b6da65a77f1f1"
  },
  {
    "url": "blog/skepticism/2018/03/18/radiation/index.html",
    "revision": "6717543124c7f4c1b299597cbb5607c4"
  },
  {
    "url": "blog/skepticism/2018/03/index.html",
    "revision": "45970c271e01fc7a987422a705e2ec72"
  },
  {
    "url": "blog/skepticism/2018/04/08/calocurb/index.html",
    "revision": "a3087582012a435af57614f1417daf57"
  },
  {
    "url": "blog/skepticism/2018/04/08/cam/index.html",
    "revision": "b2c2be6461fd2cda053ef789307fdb63"
  },
  {
    "url": "blog/skepticism/2018/04/08/index.html",
    "revision": "780b33288e719a98f4ab10f550a336b3"
  },
  {
    "url": "blog/skepticism/2018/04/08/psychic/index.html",
    "revision": "132818ef9c75e87bb85632e19baf4de8"
  },
  {
    "url": "blog/skepticism/2018/04/08/vaccines/index.html",
    "revision": "6f05b494bf2c94c9875ec3b765d540be"
  },
  {
    "url": "blog/skepticism/2018/04/15/coffee/index.html",
    "revision": "06933c2032b49172a7799ff006c67f9b"
  },
  {
    "url": "blog/skepticism/2018/04/15/ignorance/index.html",
    "revision": "438bb24bae4782d4068d8f68b93a33d8"
  },
  {
    "url": "blog/skepticism/2018/04/15/index.html",
    "revision": "e1ea01bcdc7a8afd91536a4b6f020fa5"
  },
  {
    "url": "blog/skepticism/2018/04/15/nasa/index.html",
    "revision": "45197f0c494d32454c5db67d60d49ae5"
  },
  {
    "url": "blog/skepticism/2018/04/15/tapu/index.html",
    "revision": "a0c3e470019507f7c4f81b9c10548132"
  },
  {
    "url": "blog/skepticism/2018/04/29/google/index.html",
    "revision": "cd2f51b1fe67a7cdb85c9344bf057f4a"
  },
  {
    "url": "blog/skepticism/2018/04/29/homeopathy/index.html",
    "revision": "775fbb68c5fa398f747cf964ca795f50"
  },
  {
    "url": "blog/skepticism/2018/04/29/index.html",
    "revision": "03fd0b8c720288b7d19024a8775e806c"
  },
  {
    "url": "blog/skepticism/2018/04/29/ken/index.html",
    "revision": "a21fbf1ef6760ee93e1c35a946731147"
  },
  {
    "url": "blog/skepticism/2018/04/29/v2k/index.html",
    "revision": "650c5b3212f8367459c08cd84067ad20"
  },
  {
    "url": "blog/skepticism/2018/04/index.html",
    "revision": "e3da3c01413937973ba5e0645ce7c7f8"
  },
  {
    "url": "blog/skepticism/2018/05/13/astrology/index.html",
    "revision": "bde7dcd0eb6e5b5ceca41009a0068a6a"
  },
  {
    "url": "blog/skepticism/2018/05/13/crystals/index.html",
    "revision": "75322337c2c5ceb3b951927f2cbba77b"
  },
  {
    "url": "blog/skepticism/2018/05/13/dawkins/index.html",
    "revision": "ba830d91358e505192e2edd43b5865b7"
  },
  {
    "url": "blog/skepticism/2018/05/13/index.html",
    "revision": "c2a1a5002e0efb3ec004c61ace290c14"
  },
  {
    "url": "blog/skepticism/2018/05/13/kangen/index.html",
    "revision": "2829b1be19c4905731e928b03a000b0c"
  },
  {
    "url": "blog/skepticism/2018/05/13/vitamins/index.html",
    "revision": "d82c2d7c2f97c46dc5ee0e8ac47edf2b"
  },
  {
    "url": "blog/skepticism/2018/05/27/flat/index.html",
    "revision": "e02f615c248e5dfad5002f7f9a5a104c"
  },
  {
    "url": "blog/skepticism/2018/05/27/index.html",
    "revision": "4fa8d51e3394dc1282e1ec8793f6ca49"
  },
  {
    "url": "blog/skepticism/2018/05/27/kangen/index.html",
    "revision": "d3f4f677567860822d1237e096a83b04"
  },
  {
    "url": "blog/skepticism/2018/05/27/ness/index.html",
    "revision": "f3d6c9ce82f8c2acec28fb0a78f269b5"
  },
  {
    "url": "blog/skepticism/2018/05/27/oz/index.html",
    "revision": "441c6790fc62d3fb33992f50f211b76a"
  },
  {
    "url": "blog/skepticism/2018/05/27/psychic/index.html",
    "revision": "c0076d8860225440ea8c89a28513e5f8"
  },
  {
    "url": "blog/skepticism/2018/05/index.html",
    "revision": "28012b50899112e292edbc7dee800055"
  },
  {
    "url": "blog/skepticism/2018/06/10/astrology/index.html",
    "revision": "cb86ec3d9ead7b9d3d55b17b568a71d7"
  },
  {
    "url": "blog/skepticism/2018/06/10/index.html",
    "revision": "99971ed828bed2eec33625aaea41f22f"
  },
  {
    "url": "blog/skepticism/2018/06/10/nhs/index.html",
    "revision": "3c7bfe37572f928d7ae91a2ee5e7447e"
  },
  {
    "url": "blog/skepticism/2018/06/10/shakti/index.html",
    "revision": "366d3a7b65f30fb4a832f8a84ba16977"
  },
  {
    "url": "blog/skepticism/2018/06/10/weetbix/index.html",
    "revision": "29a094abc9d648cf49dadf986863685b"
  },
  {
    "url": "blog/skepticism/2018/06/24/blasphemy/index.html",
    "revision": "903348f1a3e4d38f6b33c22ef2a49d79"
  },
  {
    "url": "blog/skepticism/2018/06/24/cannabis/index.html",
    "revision": "78c31477e0a33816ac05bdd6ecc3e8da"
  },
  {
    "url": "blog/skepticism/2018/06/24/hotdog/index.html",
    "revision": "d8318d13b4b48be6edb095ef060d8325"
  },
  {
    "url": "blog/skepticism/2018/06/24/index.html",
    "revision": "99620f2087854c2418e12bd3af75c34b"
  },
  {
    "url": "blog/skepticism/2018/06/24/led/index.html",
    "revision": "57bf3ea8ebabdd92485a069b98124bf0"
  },
  {
    "url": "blog/skepticism/2018/06/index.html",
    "revision": "7b51de249d94025455ab1ae400a5fe5b"
  },
  {
    "url": "blog/skepticism/2018/07/08/bullet/index.html",
    "revision": "109a3b25e90ad194f8d5b2ee3411f9c2"
  },
  {
    "url": "blog/skepticism/2018/07/08/chiros/index.html",
    "revision": "93cdbc45553d3da62c42fc1d84081c04"
  },
  {
    "url": "blog/skepticism/2018/07/08/hiv/index.html",
    "revision": "7394b78fe6bf6e3e065f02dcb4f298fd"
  },
  {
    "url": "blog/skepticism/2018/07/08/hrv/index.html",
    "revision": "5ede241b5312ccd4143517fe83c25fc7"
  },
  {
    "url": "blog/skepticism/2018/07/08/index.html",
    "revision": "c2e13f61409a1b50367737f9825d6129"
  },
  {
    "url": "blog/skepticism/2018/07/22/cancer/index.html",
    "revision": "038183d3af371271a65a51be751c63ad"
  },
  {
    "url": "blog/skepticism/2018/07/22/index.html",
    "revision": "5a2936e54743a16751bbec92c3271b88"
  },
  {
    "url": "blog/skepticism/2018/07/22/resurrection/index.html",
    "revision": "2af6feee727d922ec9fe581d3b6ea1e5"
  },
  {
    "url": "blog/skepticism/2018/07/22/talc/index.html",
    "revision": "d7500a15bb6f44d7b99d3e02237dd953"
  },
  {
    "url": "blog/skepticism/2018/07/22/visas/index.html",
    "revision": "97210b68aa1f7fa14970fbcd926e1900"
  },
  {
    "url": "blog/skepticism/2018/07/index.html",
    "revision": "08e8cb62248202f7581df6cbb56afa49"
  },
  {
    "url": "blog/skepticism/2018/08/05/conf/index.html",
    "revision": "07a3ca602e11f874d0f9ae67de30aa78"
  },
  {
    "url": "blog/skepticism/2018/08/05/index.html",
    "revision": "44435e36e1441ae45b412423a8f96e1d"
  },
  {
    "url": "blog/skepticism/2018/08/05/qanon/index.html",
    "revision": "3d895bba5bb9c9ee20f8d79bb8fb98ac"
  },
  {
    "url": "blog/skepticism/2018/08/19/index.html",
    "revision": "1e8224841d31424ae123ef57cea32668"
  },
  {
    "url": "blog/skepticism/2018/08/19/jw/index.html",
    "revision": "c7569d97ac1f3740a6ba35cd9fa71288"
  },
  {
    "url": "blog/skepticism/2018/08/index.html",
    "revision": "742a8a502f02e7162abeecf16d67837f"
  },
  {
    "url": "blog/skepticism/2018/09/02/allergy/index.html",
    "revision": "11ac2447655ab433fd6196ebeb1df767"
  },
  {
    "url": "blog/skepticism/2018/09/02/catholic/index.html",
    "revision": "c925e631643c5c9d1ef27ad1ae2ab74c"
  },
  {
    "url": "blog/skepticism/2018/09/02/index.html",
    "revision": "d22b2c12e91511e5b92af12b85023be9"
  },
  {
    "url": "blog/skepticism/2018/09/02/jw/index.html",
    "revision": "c85a507e68d64109acc78326a54a57c1"
  },
  {
    "url": "blog/skepticism/2018/09/02/sen/index.html",
    "revision": "dd590afe8b259239c85cecfd7fb178bc"
  },
  {
    "url": "blog/skepticism/2018/09/16/1080/index.html",
    "revision": "5bccd41d5f54d0bf55de189ea17c64ce"
  },
  {
    "url": "blog/skepticism/2018/09/16/church/index.html",
    "revision": "105108a4d567afff7afed0a78ba6af32"
  },
  {
    "url": "blog/skepticism/2018/09/16/index.html",
    "revision": "35d05daa15c9ae2e0762aa06aca770ee"
  },
  {
    "url": "blog/skepticism/2018/09/16/jones/index.html",
    "revision": "344a40bc2c65d33831710fa7fcddfa98"
  },
  {
    "url": "blog/skepticism/2018/09/16/scammers/index.html",
    "revision": "dc68167dff8b2e49054ee45d19c76ca0"
  },
  {
    "url": "blog/skepticism/2018/09/30/index.html",
    "revision": "90339eed13d5fd036b79f88a9561f751"
  },
  {
    "url": "blog/skepticism/2018/09/30/jw/index.html",
    "revision": "009f568e3dff2975954b0a8bb019b204"
  },
  {
    "url": "blog/skepticism/2018/09/30/oto/index.html",
    "revision": "98d9966435bdf48c6e855f5f19e141bf"
  },
  {
    "url": "blog/skepticism/2018/09/30/who/index.html",
    "revision": "26c14516e04a246fa4db8af6a5e23d12"
  },
  {
    "url": "blog/skepticism/2018/09/index.html",
    "revision": "41999adae59d17a0ca6556e960676c62"
  },
  {
    "url": "blog/skepticism/2018/10/14/hacked/index.html",
    "revision": "927ed73bb73c52a9ddfafe99e355f9bd"
  },
  {
    "url": "blog/skepticism/2018/10/14/index.html",
    "revision": "4f322d6b929f0161501c52702dbafc6c"
  },
  {
    "url": "blog/skepticism/2018/10/14/kangen/index.html",
    "revision": "fef5dd5964d1e31816fc80b6a81d7766"
  },
  {
    "url": "blog/skepticism/2018/10/14/pakistan/index.html",
    "revision": "3d8a4a2aae6c139a28396f66b2624535"
  },
  {
    "url": "blog/skepticism/2018/10/14/sarah/index.html",
    "revision": "e2fc67a85f10615dbfa9ae1d43490547"
  },
  {
    "url": "blog/skepticism/2018/10/28/blasphemy/index.html",
    "revision": "57a41a253deb9a7bc79e8b343560b7e1"
  },
  {
    "url": "blog/skepticism/2018/10/28/hrv/index.html",
    "revision": "6ee3ba49f21d99a0b86383945125942a"
  },
  {
    "url": "blog/skepticism/2018/10/28/index.html",
    "revision": "0e31ec255c4fe4b2b6e4a862e1448869"
  },
  {
    "url": "blog/skepticism/2018/10/28/jesus/index.html",
    "revision": "9c7aabcdce0d68ba5020e0e75e9920e6"
  },
  {
    "url": "blog/skepticism/2018/10/28/natural/index.html",
    "revision": "0b52f7e627a790fd3a07e2297c6cbbe6"
  },
  {
    "url": "blog/skepticism/2018/10/index.html",
    "revision": "024d416be08d66867c8d414a67568ddb"
  },
  {
    "url": "blog/skepticism/2018/11/04/bibi/index.html",
    "revision": "fbf050d95ef3bafa4915cbb442a898c2"
  },
  {
    "url": "blog/skepticism/2018/11/04/index.html",
    "revision": "3fc2bf6cc30dae51fcbee04be1617890"
  },
  {
    "url": "blog/skepticism/2018/11/04/jesus/index.html",
    "revision": "ddc129fcef6aaf4b127e0f9f87b2ac29"
  },
  {
    "url": "blog/skepticism/2018/11/04/obdii/index.html",
    "revision": "5c9bf39b31975e7c466fa108b4ecd6ea"
  },
  {
    "url": "blog/skepticism/2018/11/04/sleepdrops/index.html",
    "revision": "02c5a821b0923e4965c964365b122710"
  },
  {
    "url": "blog/skepticism/2018/11/index.html",
    "revision": "67920553e7131c83b9de8ec820f45a1f"
  },
  {
    "url": "blog/skepticism/2018/12/02/ark/index.html",
    "revision": "0427130d8541a9bba982102b83674c09"
  },
  {
    "url": "blog/skepticism/2018/12/02/green/index.html",
    "revision": "2737eac93a75ba6104fb0117ff68799f"
  },
  {
    "url": "blog/skepticism/2018/12/02/index.html",
    "revision": "4a6ab5fc7c3846a6927d5512c0505284"
  },
  {
    "url": "blog/skepticism/2018/12/02/ri/index.html",
    "revision": "986bf2e7de3ed5ea74c7280ed6bce5f3"
  },
  {
    "url": "blog/skepticism/2018/12/16/blasphemy/index.html",
    "revision": "b3f1962c0be67940a49aa89390a4c601"
  },
  {
    "url": "blog/skepticism/2018/12/16/index.html",
    "revision": "1237ba1ae177dadd2cbe3915c8ebcc7b"
  },
  {
    "url": "blog/skepticism/2018/12/16/sleepdrops/index.html",
    "revision": "61d27b5ed2ed2273fd99f32ddaf0a212"
  },
  {
    "url": "blog/skepticism/2018/12/16/tekiri/index.html",
    "revision": "f7cbc6b9b94092e7dfb8ba1b9faf06b2"
  },
  {
    "url": "blog/skepticism/2018/12/index.html",
    "revision": "333019b732bca46d0e7256fd812269cc"
  },
  {
    "url": "blog/skepticism/2018/index.html",
    "revision": "70a21c83b2e4d1587b2b6a67cdf20724"
  },
  {
    "url": "blog/skepticism/2020/08/18/index.html",
    "revision": "4717ef54021c2483f3768757e40d817f"
  },
  {
    "url": "blog/skepticism/2020/08/18/myths/index.html",
    "revision": "ba198db00d5da13e111d1c134a5abb46"
  },
  {
    "url": "blog/skepticism/2020/08/index.html",
    "revision": "d1ecdac76c9c91b2db8d0fbe582dab98"
  },
  {
    "url": "blog/skepticism/2020/10/20/election/index.html",
    "revision": "61c43969b064b13eff4b6ab916aad9c8"
  },
  {
    "url": "blog/skepticism/2020/11/09/jade/index.html",
    "revision": "d88409a82972eb09f1b76cc52190e5e9"
  },
  {
    "url": "blog/skepticism/2020/11/09/luminate/index.html",
    "revision": "cf1f0467945839124ecd6b999380dc9f"
  },
  {
    "url": "blog/skepticism/2020/11/09/randi/index.html",
    "revision": "578a87a4c0bb15dbbdc19d6c27754780"
  },
  {
    "url": "blog/skepticism/2020/11/09/wwg1wga/index.html",
    "revision": "8e9b03986526b0dbac3c9b4d9dd7bddd"
  },
  {
    "url": "blog/skepticism/2020/index.html",
    "revision": "5ac04fbd61218b7f56c247325518876f"
  },
  {
    "url": "blog/skepticism/index.html",
    "revision": "898391b453c88997086cf1e212d7a9e0"
  },
  {
    "url": "blog/tag/index.html",
    "revision": "ef268de8f648b8b1eabf340f052af949"
  },
  {
    "url": "contact/index.html",
    "revision": "e3486566ad24eff570b16e68c9079fae"
  },
  {
    "url": "cv/cover/index.html",
    "revision": "485f36f2a2ffa355b1c27bd0cce5f70f"
  },
  {
    "url": "cv/full.html",
    "revision": "c219bb6bb5a3ec3f0b9b8f0e77c530ee"
  },
  {
    "url": "cv/full/index.html",
    "revision": "1714674a869b534f5d0913600b23d788"
  },
  {
    "url": "cv/index.html",
    "revision": "e6c270b0af82d615beacd6ab2e4ce2a9"
  },
  {
    "url": "cv/short.html",
    "revision": "a5b9de4da453ee7564f56cb1666d10fc"
  },
  {
    "url": "googlee25d0c06da891164.html",
    "revision": "0defe75660212f417b90c5affcd03380"
  },
  {
    "url": "index.html",
    "revision": "fedfeafa9e32fbebac89b6adbf6f9ab8"
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
    "url": "media/images/blog/code/graphs.jpg",
    "revision": "d426b4e4181b8fede206a1b524381efd"
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
    "url": "media/images/blog/life/arcade.jpg",
    "revision": "3a821cfee60cff6b0161df71ef344ea4"
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
    "revision": "001aa55fbda1296ce8ee8cc027e3ff04"
  },
  {
    "url": "media/me/index.html",
    "revision": "6ca628f1a7b6ba1ec349e325ac9d822e"
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
    "revision": "0ec33abafce0af8fe3db53fb5df2cfd2"
  },
  {
    "url": "status/index.html",
    "revision": "1e2ba2c1b5f783891ea0454b793cac36"
  },
  {
    "url": "status/steam/index.html",
    "revision": "42c37827fac62a44e50a28374e95da35"
  },
  {
    "url": "status/twitter/index.html",
    "revision": "76b01a2fbb4266bc7acfe9db06f2d762"
  },
  {
    "url": "status/wikipedia/index.html",
    "revision": "0e024a6111853778f34101410248999c"
  },
  {
    "url": "test/index.html",
    "revision": "c43650da8f9625c4c04534a1e345af5e"
  },
  {
    "url": "test/webcam/index.html",
    "revision": "5563a44651c9486c6d7c091c6930ac20"
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
