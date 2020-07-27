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
    "revision": "9aba01ffbddaaa3026ce5cba7960c2e3"
  },
  {
    "url": "assets/css/0.styles.css",
    "revision": "0879c7273edf10a468e833a7d51c58ac"
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
    "revision": "e4a785d38b436a2918a5872b5e426254"
  },
  {
    "url": "assets/js/10.js",
    "revision": "9e73e9ef4da9216b404a636c86d5cc5e"
  },
  {
    "url": "assets/js/100.js",
    "revision": "1997604c6c565ea91acb4f283e80f8a0"
  },
  {
    "url": "assets/js/101.js",
    "revision": "5063d71ba46dfd93f5fc6016fc85372c"
  },
  {
    "url": "assets/js/102.js",
    "revision": "de2665dcff4ac872546cd92a96430794"
  },
  {
    "url": "assets/js/103.js",
    "revision": "4d45adb7cca40e3b04cbf3c42f31c218"
  },
  {
    "url": "assets/js/104.js",
    "revision": "ca5314ecea426b425bcea6cb72e1a2c5"
  },
  {
    "url": "assets/js/105.js",
    "revision": "75f8e7024626a2f55896e8ceafc1a9d2"
  },
  {
    "url": "assets/js/106.js",
    "revision": "bde345260b52787aaba653501099267a"
  },
  {
    "url": "assets/js/107.js",
    "revision": "169aff060f257c0152d6c50ab5d789cf"
  },
  {
    "url": "assets/js/108.js",
    "revision": "200744c208abc78e4a3de35b20502e11"
  },
  {
    "url": "assets/js/109.js",
    "revision": "802946c8aec9e5bd6318894ca1aa2bba"
  },
  {
    "url": "assets/js/11.js",
    "revision": "8c38794098e3ad8f94d16c48030641aa"
  },
  {
    "url": "assets/js/110.js",
    "revision": "c7d3c7b2cf90cbff8494966c26b8d65a"
  },
  {
    "url": "assets/js/111.js",
    "revision": "7987d643c90490fcfac7700380d5bdee"
  },
  {
    "url": "assets/js/112.js",
    "revision": "05a50d61b476a7fd24b573930cea813e"
  },
  {
    "url": "assets/js/113.js",
    "revision": "1660837bf47a6121f1f36c45e761f8c0"
  },
  {
    "url": "assets/js/114.js",
    "revision": "a7fbaa3e465e01578c5fa0a4272b71e4"
  },
  {
    "url": "assets/js/115.js",
    "revision": "4300c63e5fa85e4af6822e4c0f6db84e"
  },
  {
    "url": "assets/js/116.js",
    "revision": "93ec0c359b8defb6d1ab2a3a40f984a4"
  },
  {
    "url": "assets/js/117.js",
    "revision": "15198ce7aee4c9f97f43fa5115b3172d"
  },
  {
    "url": "assets/js/118.js",
    "revision": "f4961dfcb58c1ed6ef6289395af1dcf1"
  },
  {
    "url": "assets/js/119.js",
    "revision": "d54a0756dd04d90250f489a5be571b33"
  },
  {
    "url": "assets/js/12.js",
    "revision": "6a9ff1bb919d45295e27e4ab3a7b6eb0"
  },
  {
    "url": "assets/js/120.js",
    "revision": "2b0ee016c8e389d11429a2b96b48beea"
  },
  {
    "url": "assets/js/121.js",
    "revision": "9506c19fd074a1f6f98875ecd2c69225"
  },
  {
    "url": "assets/js/122.js",
    "revision": "4c7c0163dd66881f9e77128ae1bfec57"
  },
  {
    "url": "assets/js/123.js",
    "revision": "6210327da563274a76ebabeb71949244"
  },
  {
    "url": "assets/js/124.js",
    "revision": "57c503f612239bdddbe4c21c74164dfc"
  },
  {
    "url": "assets/js/125.js",
    "revision": "c1b5af5fdaf7d987399fbd60b79d169a"
  },
  {
    "url": "assets/js/126.js",
    "revision": "11f5b5e283b4c01d3c2df0590e4f4ef6"
  },
  {
    "url": "assets/js/127.js",
    "revision": "4497e67e67f61aca76228f3ee9313868"
  },
  {
    "url": "assets/js/128.js",
    "revision": "3ea6fd4b7d0e61d946db9acd2367ac2f"
  },
  {
    "url": "assets/js/129.js",
    "revision": "14a91581c31f0371ab6eeb05bda9689c"
  },
  {
    "url": "assets/js/13.js",
    "revision": "0bebe79f3b84de04fc12ad40fbf6fa42"
  },
  {
    "url": "assets/js/130.js",
    "revision": "c2d3d138e3a1e8a67c2d10ae01a910ad"
  },
  {
    "url": "assets/js/131.js",
    "revision": "f21d0ac3a066b619499034f3e699106c"
  },
  {
    "url": "assets/js/132.js",
    "revision": "ac5279be660dab04242514230d0cab5b"
  },
  {
    "url": "assets/js/133.js",
    "revision": "d6f18c6d1e76935a547b74d8672a7d78"
  },
  {
    "url": "assets/js/134.js",
    "revision": "c6cdeb41eb66e7b463354186e82aac2d"
  },
  {
    "url": "assets/js/135.js",
    "revision": "0f612fdb569023d655cc7687dc5691cb"
  },
  {
    "url": "assets/js/136.js",
    "revision": "c6f6469ebe0ceafcc566adffba2af27d"
  },
  {
    "url": "assets/js/137.js",
    "revision": "f64f52eb9fb794703cbe3b86d57732b0"
  },
  {
    "url": "assets/js/138.js",
    "revision": "32dfcc3ee4015b47879d221cdfa50628"
  },
  {
    "url": "assets/js/139.js",
    "revision": "e49b74f3e4e91f43d7d3e9c20dd2daf0"
  },
  {
    "url": "assets/js/14.js",
    "revision": "8a1e68b43f5c4e8bf8c0a3dcf0665316"
  },
  {
    "url": "assets/js/140.js",
    "revision": "86ff71d85128e8aa2984cee3902a30d8"
  },
  {
    "url": "assets/js/141.js",
    "revision": "cf5daf56330d22aa8c7654ad661ab3e8"
  },
  {
    "url": "assets/js/142.js",
    "revision": "33b3d4b2f1140874f1304c97b3e4c906"
  },
  {
    "url": "assets/js/143.js",
    "revision": "5c8d52bd3b756327d35c1a892b7c9b18"
  },
  {
    "url": "assets/js/144.js",
    "revision": "c6a6e6dbc74ab66877b87bac3a7a8dfe"
  },
  {
    "url": "assets/js/145.js",
    "revision": "b5115f4c9b75b4c16382c4f0caafbf72"
  },
  {
    "url": "assets/js/146.js",
    "revision": "791e110683c1f52e78edd2bc84a96302"
  },
  {
    "url": "assets/js/147.js",
    "revision": "c2691768e6f80d37800dcc0842827224"
  },
  {
    "url": "assets/js/148.js",
    "revision": "8d04d421655f45229830ff8789498529"
  },
  {
    "url": "assets/js/149.js",
    "revision": "be5c2b30e8d1966087a81b9ab0063840"
  },
  {
    "url": "assets/js/15.js",
    "revision": "5f37e752fde9219f7fd99ac821d03296"
  },
  {
    "url": "assets/js/150.js",
    "revision": "0a502747ad432101bb660c2710975809"
  },
  {
    "url": "assets/js/151.js",
    "revision": "155d432c4f6193d217220644cf4884f0"
  },
  {
    "url": "assets/js/152.js",
    "revision": "34e748ac6e36adde9005c89e5e3159ef"
  },
  {
    "url": "assets/js/153.js",
    "revision": "32a830619448bff37d2ea53628d2f627"
  },
  {
    "url": "assets/js/154.js",
    "revision": "0a2d5b44b6952df1b683827419751d73"
  },
  {
    "url": "assets/js/155.js",
    "revision": "1dc0d514b49c729a94c63db01e154050"
  },
  {
    "url": "assets/js/156.js",
    "revision": "e155570266ed9fff5e8fc66979629a3c"
  },
  {
    "url": "assets/js/157.js",
    "revision": "1198d41e1f86dba39f8fa1acfd295de7"
  },
  {
    "url": "assets/js/158.js",
    "revision": "7a8cbdcd85ebbf4e9b158772986ec669"
  },
  {
    "url": "assets/js/159.js",
    "revision": "49f50df376121f5a725f4f6eba37d20e"
  },
  {
    "url": "assets/js/16.js",
    "revision": "5d005d49c2c33004be407408b9c62b7f"
  },
  {
    "url": "assets/js/160.js",
    "revision": "517af8a711a284074ac0e6104cf6f1d1"
  },
  {
    "url": "assets/js/161.js",
    "revision": "4e58876c3da80a59173c28155e30a760"
  },
  {
    "url": "assets/js/162.js",
    "revision": "31fbcc6a133906d82e3ee21a4976ee0b"
  },
  {
    "url": "assets/js/163.js",
    "revision": "af80c8887281fa3c7af5a8be900a189c"
  },
  {
    "url": "assets/js/164.js",
    "revision": "bbbaef530cc6edc28732b8c08d436869"
  },
  {
    "url": "assets/js/165.js",
    "revision": "26fd3a67b25bdf4ac11d783611c13b44"
  },
  {
    "url": "assets/js/166.js",
    "revision": "3d80559518a875a3cc8f111d697efeca"
  },
  {
    "url": "assets/js/167.js",
    "revision": "9e1b40347d453f7b7d394b2bd33ab01b"
  },
  {
    "url": "assets/js/168.js",
    "revision": "ade48436c33d1ea64e61c47248b15e86"
  },
  {
    "url": "assets/js/169.js",
    "revision": "2ed76a610ac70b3d2c77e5afdc3e1636"
  },
  {
    "url": "assets/js/17.js",
    "revision": "37e566ab4e021778f95db7f5167adc8b"
  },
  {
    "url": "assets/js/170.js",
    "revision": "2e08102f5ac8a548bc2faf5233ba4cdb"
  },
  {
    "url": "assets/js/171.js",
    "revision": "880a5445e1d51b4f852d9e695dcecb07"
  },
  {
    "url": "assets/js/172.js",
    "revision": "4a18faf479d5100e91a0fae71dbb83a9"
  },
  {
    "url": "assets/js/173.js",
    "revision": "a5d74f07bc2687401bb56ac045ac290d"
  },
  {
    "url": "assets/js/174.js",
    "revision": "842899eed9f70e8370f9be9def711a81"
  },
  {
    "url": "assets/js/175.js",
    "revision": "246fc7fe166b10f687d4ddc98fba49fd"
  },
  {
    "url": "assets/js/176.js",
    "revision": "3623098fdbd0bd64b242dfb8a63faebe"
  },
  {
    "url": "assets/js/177.js",
    "revision": "9a52f835e698b7109cc958805fb71994"
  },
  {
    "url": "assets/js/178.js",
    "revision": "f5aa60f9b688e2e51b17d3be9214fdcc"
  },
  {
    "url": "assets/js/179.js",
    "revision": "056688ce2ee76c2c300770b48a5ff0cd"
  },
  {
    "url": "assets/js/18.js",
    "revision": "947b6f5a3cbc531ecef6cc3bda7e5b28"
  },
  {
    "url": "assets/js/180.js",
    "revision": "0ca83ecc4c21a5ee9212a60fcff2edef"
  },
  {
    "url": "assets/js/181.js",
    "revision": "5ee33554e58ddbc4ad8bac5c51397cc0"
  },
  {
    "url": "assets/js/182.js",
    "revision": "c03ffe3927338be32a2d3b632dc5d3a7"
  },
  {
    "url": "assets/js/183.js",
    "revision": "79f8320537bca3b4fd51a1ac28e06e28"
  },
  {
    "url": "assets/js/184.js",
    "revision": "0430f1de3f1b8bd14ec4f21a2090fc21"
  },
  {
    "url": "assets/js/185.js",
    "revision": "0407757318f242a6366c2d47636328a3"
  },
  {
    "url": "assets/js/186.js",
    "revision": "fa4126de96e1e4a2f2527f8e6f8523a5"
  },
  {
    "url": "assets/js/187.js",
    "revision": "7f38018fd9038c6e8b3be56e290ee19c"
  },
  {
    "url": "assets/js/188.js",
    "revision": "74b1aee926b43a3aa55be9ebf96c4f67"
  },
  {
    "url": "assets/js/189.js",
    "revision": "84dd172863c85e9d9c84daecb2a59797"
  },
  {
    "url": "assets/js/19.js",
    "revision": "9381e27fa6894a0bc40a394513939e23"
  },
  {
    "url": "assets/js/190.js",
    "revision": "8040aa38f0ce0a4a42f74bead7bfc1b9"
  },
  {
    "url": "assets/js/191.js",
    "revision": "d78a75365d3e973aaa65c9eb0e63046c"
  },
  {
    "url": "assets/js/192.js",
    "revision": "f0ba7595a9c4329ee5e75f4429e5a937"
  },
  {
    "url": "assets/js/193.js",
    "revision": "370d45e0466d9380541dfe9ff66c66ea"
  },
  {
    "url": "assets/js/194.js",
    "revision": "d99d71e09f8fe7c194618e8928062f01"
  },
  {
    "url": "assets/js/195.js",
    "revision": "dffe10a40e00dcfe59211b54185528ce"
  },
  {
    "url": "assets/js/196.js",
    "revision": "71adc0261a464579572cd12a820998e8"
  },
  {
    "url": "assets/js/197.js",
    "revision": "51f7214e55cad21870fdc607277e3505"
  },
  {
    "url": "assets/js/198.js",
    "revision": "752c046ce87df3f5957464eee6f47fdd"
  },
  {
    "url": "assets/js/199.js",
    "revision": "1bb3789645b8270e012bf5b61cef5ffc"
  },
  {
    "url": "assets/js/2.js",
    "revision": "aef16bdf361e5a9962be75d2535ed183"
  },
  {
    "url": "assets/js/20.js",
    "revision": "144950ab4c5e1f8d689b2dcc6b1a8ebf"
  },
  {
    "url": "assets/js/200.js",
    "revision": "16b444a10723d835e5a44a6537f632cc"
  },
  {
    "url": "assets/js/201.js",
    "revision": "10a209f7c08d6ed116895eea90d79c99"
  },
  {
    "url": "assets/js/202.js",
    "revision": "7cb514f6f22777b42304d6fb28b5660c"
  },
  {
    "url": "assets/js/203.js",
    "revision": "9c5291a2d45c4fa82470bb5c041aa906"
  },
  {
    "url": "assets/js/204.js",
    "revision": "4aad569f644833b07bfecedca3866b04"
  },
  {
    "url": "assets/js/205.js",
    "revision": "276734a7b2a60473cb90255126c27124"
  },
  {
    "url": "assets/js/206.js",
    "revision": "fb52a586fcc025f05f677eec22a57d24"
  },
  {
    "url": "assets/js/207.js",
    "revision": "ed0696c6b4e8aed9ffdc25298cd8018d"
  },
  {
    "url": "assets/js/208.js",
    "revision": "e741c5e01e1022a6f49e694b5bf2e270"
  },
  {
    "url": "assets/js/209.js",
    "revision": "989729d9fa542376d5b01f9c697674f4"
  },
  {
    "url": "assets/js/21.js",
    "revision": "43bf007c3bd2de3029a6c4721ac62b76"
  },
  {
    "url": "assets/js/210.js",
    "revision": "b403d92b2709b51fdf23d4caa4f8299b"
  },
  {
    "url": "assets/js/211.js",
    "revision": "9f9597399a51f7ee21e288d3871084d9"
  },
  {
    "url": "assets/js/212.js",
    "revision": "009b1077bd62bfd3fd62d689689096f8"
  },
  {
    "url": "assets/js/213.js",
    "revision": "78478a6a044ea42c689570a6d32c3b0b"
  },
  {
    "url": "assets/js/214.js",
    "revision": "5337510859a23bff187902789849021c"
  },
  {
    "url": "assets/js/215.js",
    "revision": "cfea4ee14a48d46a70d02cf7ae48640d"
  },
  {
    "url": "assets/js/216.js",
    "revision": "d44d8e43d4f52289f77c518ed872cfee"
  },
  {
    "url": "assets/js/217.js",
    "revision": "0caa0029e663d6eb4af9a9a31b56f093"
  },
  {
    "url": "assets/js/218.js",
    "revision": "26fbf8410efaec9d613b487cb51c4b98"
  },
  {
    "url": "assets/js/219.js",
    "revision": "cefe338c12339e1d99e39777adfcf7fc"
  },
  {
    "url": "assets/js/22.js",
    "revision": "7999b93e27077d733c4a05eb87ac6243"
  },
  {
    "url": "assets/js/220.js",
    "revision": "a57915ae7121f1f21105ea3577ae9e88"
  },
  {
    "url": "assets/js/221.js",
    "revision": "433127e702baac8dbe61292031e85218"
  },
  {
    "url": "assets/js/222.js",
    "revision": "9693119f7c180f44ae5d7e0a15cb2670"
  },
  {
    "url": "assets/js/223.js",
    "revision": "377811b825103bbea2ea9977e6678f39"
  },
  {
    "url": "assets/js/224.js",
    "revision": "1c7a042553cbd81851a129c067a49091"
  },
  {
    "url": "assets/js/225.js",
    "revision": "32ace68c51f1a23fd70a786faef2e1ed"
  },
  {
    "url": "assets/js/226.js",
    "revision": "e1d25b8351353dc37b2f2488a429cfc4"
  },
  {
    "url": "assets/js/227.js",
    "revision": "c6e395f37b1ff7cb75406b7ed3d5878c"
  },
  {
    "url": "assets/js/228.js",
    "revision": "7c07469e4f988d059a9224d8a0b8775c"
  },
  {
    "url": "assets/js/229.js",
    "revision": "8450d15100d8d911540a3691a8ccb55c"
  },
  {
    "url": "assets/js/23.js",
    "revision": "7e929c8dc1a336c750785c65cc92d226"
  },
  {
    "url": "assets/js/230.js",
    "revision": "687025701845e609b81a3c369d016a88"
  },
  {
    "url": "assets/js/231.js",
    "revision": "96a9b36dd07b1852e68e8a7fbefc7906"
  },
  {
    "url": "assets/js/232.js",
    "revision": "bd7893bdb7d0cabcdb1e97f387e4fba8"
  },
  {
    "url": "assets/js/233.js",
    "revision": "e30b7f6d653c7e140d4f30dc83ee2615"
  },
  {
    "url": "assets/js/234.js",
    "revision": "4b4a6c3232e958ca4c488aad920b0750"
  },
  {
    "url": "assets/js/235.js",
    "revision": "c55dcfe06176955399f681a8231c2a0d"
  },
  {
    "url": "assets/js/236.js",
    "revision": "c7273bfb5dcc72276eabf00e78f5c52c"
  },
  {
    "url": "assets/js/237.js",
    "revision": "2180902ac26385a6a37d5d41cffff2d7"
  },
  {
    "url": "assets/js/238.js",
    "revision": "a413ada9b5d5e3e5ce444d35601241e3"
  },
  {
    "url": "assets/js/239.js",
    "revision": "b243157b848692ce36ee0e45ec85518b"
  },
  {
    "url": "assets/js/24.js",
    "revision": "1fe4c771fe3766a5c1afa905572ab232"
  },
  {
    "url": "assets/js/240.js",
    "revision": "b84f7cf4f44d8e0f7edb3bb786221bdc"
  },
  {
    "url": "assets/js/241.js",
    "revision": "6742199d275f1f1a5a3f326320e36712"
  },
  {
    "url": "assets/js/242.js",
    "revision": "76f6872fc7840e57fe873bb8e01eafc0"
  },
  {
    "url": "assets/js/243.js",
    "revision": "c0d7e64284d99548edc25c6917199662"
  },
  {
    "url": "assets/js/244.js",
    "revision": "8e689ef8d697ee627bb73cb41293d13a"
  },
  {
    "url": "assets/js/245.js",
    "revision": "4333278fe9114af35d315b0b8f79c9ac"
  },
  {
    "url": "assets/js/246.js",
    "revision": "d166bba756ffb3ef60f0bfe47bc0e15b"
  },
  {
    "url": "assets/js/247.js",
    "revision": "08a378aa62761ae33650d86c76f37a7e"
  },
  {
    "url": "assets/js/248.js",
    "revision": "23c02f9be7a264146d806ed0b69f2f2b"
  },
  {
    "url": "assets/js/249.js",
    "revision": "ace5e3f1f8d7a55cbc208a2ccc7ed021"
  },
  {
    "url": "assets/js/25.js",
    "revision": "1159cdf730171f4c19e80772c740004a"
  },
  {
    "url": "assets/js/250.js",
    "revision": "c9baa892813d82b25f5c44321ddd1938"
  },
  {
    "url": "assets/js/251.js",
    "revision": "9c336b203f60e16959776e6709dbe527"
  },
  {
    "url": "assets/js/252.js",
    "revision": "1af93ea77024d18614aa2138583d4a1e"
  },
  {
    "url": "assets/js/253.js",
    "revision": "e9d55e893fecbe3cfbb8a22ed742d9dd"
  },
  {
    "url": "assets/js/254.js",
    "revision": "e25d7a808855911650a642975ea2fc4d"
  },
  {
    "url": "assets/js/255.js",
    "revision": "83aed658b09672b64bc6db4204df738f"
  },
  {
    "url": "assets/js/256.js",
    "revision": "15b76edcfc79b07ff2243a1adf2af7d8"
  },
  {
    "url": "assets/js/257.js",
    "revision": "4ed7ba6efcb175edff11c2aef0657668"
  },
  {
    "url": "assets/js/258.js",
    "revision": "6a3a3f1b7c294d0d4537af3ec6df7917"
  },
  {
    "url": "assets/js/259.js",
    "revision": "c996ccf5170a2c58a9fcbbea5d7d34d0"
  },
  {
    "url": "assets/js/26.js",
    "revision": "2c027bbc47312bff7a6c141af6694b9f"
  },
  {
    "url": "assets/js/260.js",
    "revision": "010e16f0bde0fa5793a7aab51413c2b7"
  },
  {
    "url": "assets/js/261.js",
    "revision": "9f5c93ca4edaa7954a3e030345a4e404"
  },
  {
    "url": "assets/js/262.js",
    "revision": "c8ff6058ffdf36aeb9d8ff2f597e66bd"
  },
  {
    "url": "assets/js/263.js",
    "revision": "a23711ea44bd108681cc63637fb1f0ab"
  },
  {
    "url": "assets/js/264.js",
    "revision": "8a7fe54399602bb9ae50486770e9400a"
  },
  {
    "url": "assets/js/265.js",
    "revision": "382a1f2274192bc037b4184dff9411b2"
  },
  {
    "url": "assets/js/266.js",
    "revision": "339983a04a53a6e5ca772a80e085b0b6"
  },
  {
    "url": "assets/js/267.js",
    "revision": "195355820186be0c79bd834eac53fa64"
  },
  {
    "url": "assets/js/268.js",
    "revision": "c9023693251f3bf150d8cc077cebfa21"
  },
  {
    "url": "assets/js/269.js",
    "revision": "c4885518da08ddfb9bb1d23ea736b4ba"
  },
  {
    "url": "assets/js/27.js",
    "revision": "a94cd44d1465ca45b8de8bb9f6277a8a"
  },
  {
    "url": "assets/js/270.js",
    "revision": "9cd95f9a66b16f7614a9aca6bc22b823"
  },
  {
    "url": "assets/js/271.js",
    "revision": "71200bc649707abf67ee6db4a120e482"
  },
  {
    "url": "assets/js/272.js",
    "revision": "7682902b6ca829478fc09c4d76226b38"
  },
  {
    "url": "assets/js/273.js",
    "revision": "fea21be4f07b93b9b1b2c363ad73e8ae"
  },
  {
    "url": "assets/js/274.js",
    "revision": "b4f5900c71743fb1f9f6ad0359d5542d"
  },
  {
    "url": "assets/js/275.js",
    "revision": "34109319e99e9dfad41bfe2e99fa268f"
  },
  {
    "url": "assets/js/276.js",
    "revision": "fe9437705956e9d9f6b60ac20dc4bb47"
  },
  {
    "url": "assets/js/277.js",
    "revision": "633268df23a5f71cc52f43894d9dd9c8"
  },
  {
    "url": "assets/js/278.js",
    "revision": "6d85f9088ea1f8a739a325e55529b6a4"
  },
  {
    "url": "assets/js/279.js",
    "revision": "02f2b5047aa897cd1f4acc185f7fdf5b"
  },
  {
    "url": "assets/js/28.js",
    "revision": "7365483148e4821833d6c2c39f49c59c"
  },
  {
    "url": "assets/js/280.js",
    "revision": "32f82dff6d946115fe8fc36df51529ed"
  },
  {
    "url": "assets/js/281.js",
    "revision": "aebd4456568e61fb093214f895f234cd"
  },
  {
    "url": "assets/js/282.js",
    "revision": "02c9ef2910b0f537a33d9e6e8121484c"
  },
  {
    "url": "assets/js/283.js",
    "revision": "fda037c010e76c946b5b28e0bc91cfb2"
  },
  {
    "url": "assets/js/284.js",
    "revision": "9fed9fa4ee6a89de40824dc33496b3a5"
  },
  {
    "url": "assets/js/285.js",
    "revision": "ee58e198ec42ae97a51fa811734b8652"
  },
  {
    "url": "assets/js/286.js",
    "revision": "2c496203a2cfa87b0e1956014b46966d"
  },
  {
    "url": "assets/js/287.js",
    "revision": "659443f1865e897208b0ae1bad3ce99a"
  },
  {
    "url": "assets/js/288.js",
    "revision": "15d5095e7826b121a253dcf0e843ac4a"
  },
  {
    "url": "assets/js/289.js",
    "revision": "aa3ce8ee0a352efce115bca503eb914d"
  },
  {
    "url": "assets/js/29.js",
    "revision": "77d0270c62be757c89826c003abbd7a1"
  },
  {
    "url": "assets/js/290.js",
    "revision": "a449f68f844b25da8cfc3cc07b5bfa6a"
  },
  {
    "url": "assets/js/291.js",
    "revision": "c5e11808c033195a3d596da64231d65f"
  },
  {
    "url": "assets/js/292.js",
    "revision": "72228fb83f284493f6a46071fc03a76a"
  },
  {
    "url": "assets/js/293.js",
    "revision": "20bc04371e650e7d5504a50ee28035af"
  },
  {
    "url": "assets/js/294.js",
    "revision": "68ed296592e4dc3d7d302058022c47d6"
  },
  {
    "url": "assets/js/295.js",
    "revision": "743f9a99315bc4d08676e7b42947057e"
  },
  {
    "url": "assets/js/296.js",
    "revision": "6773157593d0ff7742c50787046bd14e"
  },
  {
    "url": "assets/js/297.js",
    "revision": "f7d2793332d057a9c9618ac670b139e0"
  },
  {
    "url": "assets/js/298.js",
    "revision": "c26fac65e2d8ece41f8c7d577999b644"
  },
  {
    "url": "assets/js/299.js",
    "revision": "2c64660c82f2d46588ceaebb54915a87"
  },
  {
    "url": "assets/js/3.js",
    "revision": "8a750d742918f941c239577708309de1"
  },
  {
    "url": "assets/js/30.js",
    "revision": "36ada01937f65b14667539ab864321d6"
  },
  {
    "url": "assets/js/300.js",
    "revision": "005ca0cf47acb38581768866d093583b"
  },
  {
    "url": "assets/js/301.js",
    "revision": "51c27badeceffd2fdde39795ad94b5de"
  },
  {
    "url": "assets/js/302.js",
    "revision": "05469bc6e0ecc9dbd4568c7ab91d7c26"
  },
  {
    "url": "assets/js/303.js",
    "revision": "a8d70a3dd34cc1971f6233afc0401f68"
  },
  {
    "url": "assets/js/304.js",
    "revision": "6471848fa07d8f1d4bdfed5c7badd891"
  },
  {
    "url": "assets/js/305.js",
    "revision": "eac438338b8646657b5716b06fe3e693"
  },
  {
    "url": "assets/js/306.js",
    "revision": "e3821b6620fd60073924768f463211d1"
  },
  {
    "url": "assets/js/307.js",
    "revision": "66e6945978b527a9369d45fece34d76a"
  },
  {
    "url": "assets/js/308.js",
    "revision": "50a2c95a727c6a7883a480a87d85dc86"
  },
  {
    "url": "assets/js/309.js",
    "revision": "602d52c01f93752fbfb52cae634c5be2"
  },
  {
    "url": "assets/js/31.js",
    "revision": "d1823810866061ba2ca3ea674d28410e"
  },
  {
    "url": "assets/js/310.js",
    "revision": "e7701c10e9a347efcb7d9ec626bb0555"
  },
  {
    "url": "assets/js/311.js",
    "revision": "85299336d2afe0d3b409ef34fa11b1a5"
  },
  {
    "url": "assets/js/312.js",
    "revision": "f548649d5ff2551db639d7b6800c73cf"
  },
  {
    "url": "assets/js/313.js",
    "revision": "486418fcd62eed7aeaf3c0f2d080355c"
  },
  {
    "url": "assets/js/314.js",
    "revision": "86d17cc1fc60844094ba98f9832f7ac3"
  },
  {
    "url": "assets/js/315.js",
    "revision": "431d964ed678db4f2aa97841edce882f"
  },
  {
    "url": "assets/js/316.js",
    "revision": "b73c766151aa5a63167ea1f73181c625"
  },
  {
    "url": "assets/js/317.js",
    "revision": "10dc5d957e959b7ce5f7111599e054ac"
  },
  {
    "url": "assets/js/318.js",
    "revision": "f58fb0a4836a67c7bc06e7962aa53e74"
  },
  {
    "url": "assets/js/319.js",
    "revision": "c566affa4ca45ff27b3ea6160156cd4e"
  },
  {
    "url": "assets/js/32.js",
    "revision": "b431afc2820df99d59083c158942c885"
  },
  {
    "url": "assets/js/320.js",
    "revision": "e33d1a2aa8d13a7d34207fdcd7a456af"
  },
  {
    "url": "assets/js/321.js",
    "revision": "3e017201bf545a1c959000eba9241aae"
  },
  {
    "url": "assets/js/322.js",
    "revision": "d1da7b5372d61a3d9eba7700fe7c082c"
  },
  {
    "url": "assets/js/323.js",
    "revision": "33dece483e9ac0222a197ae9dfd34e51"
  },
  {
    "url": "assets/js/324.js",
    "revision": "9b0bc5536110ccc916e0f6556f27df48"
  },
  {
    "url": "assets/js/325.js",
    "revision": "ec280d9eb157194e55d859ab625e69f7"
  },
  {
    "url": "assets/js/326.js",
    "revision": "06983aaf2f8a80d97a008ff99cda03de"
  },
  {
    "url": "assets/js/327.js",
    "revision": "d8b85bbe24b266136a3ce5859f85549e"
  },
  {
    "url": "assets/js/328.js",
    "revision": "cc5e033542910734454f88f0d97dea38"
  },
  {
    "url": "assets/js/329.js",
    "revision": "701be66911368606b286423605c322c5"
  },
  {
    "url": "assets/js/33.js",
    "revision": "8f2e86a1f9314917a267db091c137bcb"
  },
  {
    "url": "assets/js/330.js",
    "revision": "5cd5dfa83688553ffe62e11af444ab08"
  },
  {
    "url": "assets/js/331.js",
    "revision": "13eb603b63218ec29afdb41e977a817e"
  },
  {
    "url": "assets/js/332.js",
    "revision": "472a7af16009fd6a70dfcade2d95f5ff"
  },
  {
    "url": "assets/js/333.js",
    "revision": "6b2f6e48fce6f263f13ca0d1d58b1846"
  },
  {
    "url": "assets/js/334.js",
    "revision": "178c153ffc1a789b1c02b91dbffe6007"
  },
  {
    "url": "assets/js/335.js",
    "revision": "a01e4df51a4c8a7b95ccc29adf344d5b"
  },
  {
    "url": "assets/js/336.js",
    "revision": "9969bf666f79eeaf47ad8acb8023e08f"
  },
  {
    "url": "assets/js/337.js",
    "revision": "78907fbf8f32fb896de34f84d8d0fee2"
  },
  {
    "url": "assets/js/338.js",
    "revision": "3931b7be24e4a65c91d8823de6b616a4"
  },
  {
    "url": "assets/js/339.js",
    "revision": "4141498f0c1b220902206a16a6f64bb0"
  },
  {
    "url": "assets/js/34.js",
    "revision": "074d06065fcf07c536d834af06585a53"
  },
  {
    "url": "assets/js/340.js",
    "revision": "5da5580029b6b0c5d5e5c5c3cd62d2f9"
  },
  {
    "url": "assets/js/341.js",
    "revision": "f355ae46c715a518911ed09da5b9dfb7"
  },
  {
    "url": "assets/js/342.js",
    "revision": "3758907ba2588a169b351781c9c17fdd"
  },
  {
    "url": "assets/js/343.js",
    "revision": "0f8128c5dc31ea21804a983203062c1c"
  },
  {
    "url": "assets/js/344.js",
    "revision": "4c99af5e73e68420746803c307875f33"
  },
  {
    "url": "assets/js/345.js",
    "revision": "53402b73b49afea31f7ab60e377cc942"
  },
  {
    "url": "assets/js/346.js",
    "revision": "7819bbe345250f8d6ce0cc656671d8c4"
  },
  {
    "url": "assets/js/347.js",
    "revision": "62a8d498b39db2220e66db3eae0a66b2"
  },
  {
    "url": "assets/js/348.js",
    "revision": "fa2836e80997d7c21d7a319a61759a19"
  },
  {
    "url": "assets/js/349.js",
    "revision": "de4b12ffaf0889bdb05ad0288b960164"
  },
  {
    "url": "assets/js/35.js",
    "revision": "dcd12f87951e334aa8141efb1d3d17c9"
  },
  {
    "url": "assets/js/350.js",
    "revision": "309477202b0680b36e5c3b433eb5dbf5"
  },
  {
    "url": "assets/js/351.js",
    "revision": "a901c60484aaf4eb32074ab4adb62687"
  },
  {
    "url": "assets/js/352.js",
    "revision": "2c8752bf6b51f5304bc9013d2097bbf6"
  },
  {
    "url": "assets/js/353.js",
    "revision": "53dfb46f3ee5d6056d8ea4e931a6e891"
  },
  {
    "url": "assets/js/354.js",
    "revision": "063432812694444064632c9647becba3"
  },
  {
    "url": "assets/js/355.js",
    "revision": "0432fa6d40c43bbaab309c4c60d95a74"
  },
  {
    "url": "assets/js/356.js",
    "revision": "f221951432ef9d4f335a93580680577a"
  },
  {
    "url": "assets/js/357.js",
    "revision": "75eebde1eeecc4b959a10b95fe7cee28"
  },
  {
    "url": "assets/js/358.js",
    "revision": "f03844013a8a5a4b3cd49c7176a3c71f"
  },
  {
    "url": "assets/js/359.js",
    "revision": "67aee22016b411e7bfd33de08e6ed8c7"
  },
  {
    "url": "assets/js/36.js",
    "revision": "c84ec350929dcda43c57f8166433910b"
  },
  {
    "url": "assets/js/360.js",
    "revision": "641ce4fcf615db34e160ab78e4d5c536"
  },
  {
    "url": "assets/js/361.js",
    "revision": "2e554884378421dbaf5976d36ae818d1"
  },
  {
    "url": "assets/js/362.js",
    "revision": "fe3b1a584f9b90ed96b2314949ae72a6"
  },
  {
    "url": "assets/js/363.js",
    "revision": "2adbadd31565cf5e52f5bf0ffdb0513e"
  },
  {
    "url": "assets/js/364.js",
    "revision": "4c8be739a63c1f0efc52f6b169c8a47d"
  },
  {
    "url": "assets/js/365.js",
    "revision": "b84d3fb6b81b80cc4bc2336e0dbad8af"
  },
  {
    "url": "assets/js/366.js",
    "revision": "5b83aa4292f4c2adf7c2e0cd0f8d122a"
  },
  {
    "url": "assets/js/367.js",
    "revision": "372ef40936b76024367f22fac1b4271c"
  },
  {
    "url": "assets/js/368.js",
    "revision": "d81cc648500b1498472535848a4a7ad1"
  },
  {
    "url": "assets/js/369.js",
    "revision": "cb872b06c9645535eeb7af5854a780c3"
  },
  {
    "url": "assets/js/37.js",
    "revision": "21b7ba5d37feb252e37f95ca893197c9"
  },
  {
    "url": "assets/js/370.js",
    "revision": "ea309baefc301c1400d553deb36ef4ed"
  },
  {
    "url": "assets/js/371.js",
    "revision": "6a5f0e2ef3e4d989cb14cde78879fb47"
  },
  {
    "url": "assets/js/372.js",
    "revision": "f872f91be1efa157e0f3da58f649e3f5"
  },
  {
    "url": "assets/js/373.js",
    "revision": "243b990a2ad72a6d2f0d5f0bece6fb0d"
  },
  {
    "url": "assets/js/374.js",
    "revision": "0f411afea66d422ba9ff56b83d04f405"
  },
  {
    "url": "assets/js/375.js",
    "revision": "1a1256ed5103e301a2e66f4ad44807b6"
  },
  {
    "url": "assets/js/376.js",
    "revision": "cdca94a3bacef5d11b49acbf8ff3e7ff"
  },
  {
    "url": "assets/js/377.js",
    "revision": "f828c9a34b354cfcb858a36373cf7432"
  },
  {
    "url": "assets/js/378.js",
    "revision": "0ae9186543cd1e0d337283f2785c2750"
  },
  {
    "url": "assets/js/379.js",
    "revision": "421936c3ad7fce19e00b7dcaaf3ab291"
  },
  {
    "url": "assets/js/38.js",
    "revision": "e38bddffbef9627302a6205e92fea800"
  },
  {
    "url": "assets/js/380.js",
    "revision": "f53c28c701913751a5ffb23ea3b35026"
  },
  {
    "url": "assets/js/381.js",
    "revision": "ff310bd90c650c267db26c1a83e96fa6"
  },
  {
    "url": "assets/js/382.js",
    "revision": "23e4c5fd89eaa6eb4adec1f82d96e3ac"
  },
  {
    "url": "assets/js/383.js",
    "revision": "a1bb5271c6417834ae04870febd64b7d"
  },
  {
    "url": "assets/js/384.js",
    "revision": "96fe3acb4ab0c2c68fefa55512b4e4c4"
  },
  {
    "url": "assets/js/385.js",
    "revision": "fe9b26abee45f63229fc4db518b427e8"
  },
  {
    "url": "assets/js/386.js",
    "revision": "e8e19984a06e0c3ca2ab65986f3f63ac"
  },
  {
    "url": "assets/js/387.js",
    "revision": "5ac38c3e26966fb82d59029a6dca4ee1"
  },
  {
    "url": "assets/js/388.js",
    "revision": "cdf743d85579bdc790f3b5e81753f158"
  },
  {
    "url": "assets/js/389.js",
    "revision": "d83d21e90c9c0a88adcc0f0fe4638414"
  },
  {
    "url": "assets/js/39.js",
    "revision": "226e582851c964aef6f29522d784aadf"
  },
  {
    "url": "assets/js/390.js",
    "revision": "263647bbf45bb7aa9d3510e7de083e59"
  },
  {
    "url": "assets/js/391.js",
    "revision": "776e5f36f4c1f718eccc306982b22c21"
  },
  {
    "url": "assets/js/392.js",
    "revision": "574374f6fc6e1e8402275fc28c081ac0"
  },
  {
    "url": "assets/js/393.js",
    "revision": "642b32dd932f860bdca763c12abb984e"
  },
  {
    "url": "assets/js/394.js",
    "revision": "e1c136c51abc4f46b348b8b5056caf97"
  },
  {
    "url": "assets/js/395.js",
    "revision": "eed701eb050b80890eb6e8db9ee0e2b1"
  },
  {
    "url": "assets/js/396.js",
    "revision": "ede2ce867734e9c42fe532917adb4ad4"
  },
  {
    "url": "assets/js/397.js",
    "revision": "01019fe99f7b7781af63fe7d9fd57b26"
  },
  {
    "url": "assets/js/398.js",
    "revision": "7410bb8afa7224eb6242dad270c18fb3"
  },
  {
    "url": "assets/js/399.js",
    "revision": "a0fcf927050812344b9b5076eab21ecd"
  },
  {
    "url": "assets/js/4.js",
    "revision": "62444246c0daa12157cc522212070965"
  },
  {
    "url": "assets/js/40.js",
    "revision": "fa6cb71732fa4287294666b7c7f90c1f"
  },
  {
    "url": "assets/js/400.js",
    "revision": "a0ea853c7de9f86b67b493e5fb660949"
  },
  {
    "url": "assets/js/401.js",
    "revision": "01b2e290ffe7cdfa2fcd6397a9da315e"
  },
  {
    "url": "assets/js/402.js",
    "revision": "b3340e0d358f6bf7f8880eebcbe19742"
  },
  {
    "url": "assets/js/403.js",
    "revision": "fc850472ef41136d7686d46945b44411"
  },
  {
    "url": "assets/js/404.js",
    "revision": "42540e9aaeaa36526105876e5f1aff69"
  },
  {
    "url": "assets/js/405.js",
    "revision": "75908c6fa063515316d018a65986b0d4"
  },
  {
    "url": "assets/js/406.js",
    "revision": "2575463501442f0b6e64d9eb434c1947"
  },
  {
    "url": "assets/js/407.js",
    "revision": "91bc25ee4c494bcc5d4509b75c6e3aeb"
  },
  {
    "url": "assets/js/408.js",
    "revision": "9edcd32a400c77449c3764deac103a12"
  },
  {
    "url": "assets/js/409.js",
    "revision": "1043835ce8288a7332cde7fc4845b88a"
  },
  {
    "url": "assets/js/41.js",
    "revision": "7951b828ca6cf8b5a721c68fb7aca425"
  },
  {
    "url": "assets/js/410.js",
    "revision": "a5ab286d68634366e771afb8797c1f73"
  },
  {
    "url": "assets/js/411.js",
    "revision": "0a5bf6a2c4e9284ee51cfaf92142e848"
  },
  {
    "url": "assets/js/412.js",
    "revision": "82305a0d30f55403cdf2e916b45bf5fb"
  },
  {
    "url": "assets/js/413.js",
    "revision": "e296708e1b4fe6505c3a13cabbad145c"
  },
  {
    "url": "assets/js/414.js",
    "revision": "0ad7ac25539eadc03dc5f3bac36a6fdc"
  },
  {
    "url": "assets/js/415.js",
    "revision": "5f72b4ac340767237f62baa3a64105a0"
  },
  {
    "url": "assets/js/416.js",
    "revision": "9c346851f939947efc144dfdf8728ebd"
  },
  {
    "url": "assets/js/417.js",
    "revision": "0e628713ca5c0a54ec4de98c23b147eb"
  },
  {
    "url": "assets/js/418.js",
    "revision": "61474267252e46e348cb032dc34e5e95"
  },
  {
    "url": "assets/js/419.js",
    "revision": "303430389804865ea774ac889670a050"
  },
  {
    "url": "assets/js/42.js",
    "revision": "deaaee52e8eff3ceed09d1d59929c7cc"
  },
  {
    "url": "assets/js/420.js",
    "revision": "7e50ef41b40cc9b14b2a16d74f3b8311"
  },
  {
    "url": "assets/js/421.js",
    "revision": "ca4e4cfc964d67d73865e49f6f85415c"
  },
  {
    "url": "assets/js/422.js",
    "revision": "05231c3899421baabde5f4332ad43d0c"
  },
  {
    "url": "assets/js/423.js",
    "revision": "51a3ef4a52e427f83ff4b5c7ca843b12"
  },
  {
    "url": "assets/js/424.js",
    "revision": "36095bc55e16f434bb10363bb21d0378"
  },
  {
    "url": "assets/js/425.js",
    "revision": "96fca0fe2a239d0caf9ea622205ed38d"
  },
  {
    "url": "assets/js/426.js",
    "revision": "9545ebd53dd7dd2e9fc9aec80fe7a729"
  },
  {
    "url": "assets/js/427.js",
    "revision": "823cb181a6f3f1abd08d50e3ae108f84"
  },
  {
    "url": "assets/js/428.js",
    "revision": "73c5bbe3b75353130bf9997f2a54b81a"
  },
  {
    "url": "assets/js/429.js",
    "revision": "b1031e7c2bf62f68488a63d8394d17fd"
  },
  {
    "url": "assets/js/43.js",
    "revision": "dbb88cabf28d115c3db4678a0fa767da"
  },
  {
    "url": "assets/js/430.js",
    "revision": "5b75ae14a957547094e1fdf17596c910"
  },
  {
    "url": "assets/js/431.js",
    "revision": "229f52578fd22ca12161da21679afc2c"
  },
  {
    "url": "assets/js/432.js",
    "revision": "3985ca17bdba1c164f7f4c256148c91a"
  },
  {
    "url": "assets/js/433.js",
    "revision": "185d1c4cede7c92de38bad3d86fb33de"
  },
  {
    "url": "assets/js/434.js",
    "revision": "b71881c3b8f0841bb15a747eef93c406"
  },
  {
    "url": "assets/js/435.js",
    "revision": "c5dbf4b346f2bd8fad453f57314bcc43"
  },
  {
    "url": "assets/js/436.js",
    "revision": "1ec1f51f0003b75a1a98b6d70e82db4c"
  },
  {
    "url": "assets/js/437.js",
    "revision": "16abd69879424b1059f6e6aada4862e9"
  },
  {
    "url": "assets/js/438.js",
    "revision": "4640d8f99aab4f2df1a8276ce2a4da9a"
  },
  {
    "url": "assets/js/439.js",
    "revision": "163332be8f50fbf4c066bf63a64db9f9"
  },
  {
    "url": "assets/js/44.js",
    "revision": "ea012fab0ae27adf790786b64c65a630"
  },
  {
    "url": "assets/js/440.js",
    "revision": "8d63775fb9d3d5e5799bbca36bd41e2f"
  },
  {
    "url": "assets/js/441.js",
    "revision": "b90fcc71c7751446fd25bb9712dd834d"
  },
  {
    "url": "assets/js/442.js",
    "revision": "2abeb14a89659b8f764be94f7d0a6584"
  },
  {
    "url": "assets/js/443.js",
    "revision": "05630d601eb6bafc0c291256dcadc91a"
  },
  {
    "url": "assets/js/444.js",
    "revision": "2b13e3286c5a804a1d096443f30eaa49"
  },
  {
    "url": "assets/js/445.js",
    "revision": "df9cb28e35d35c368f3f1c724bc2c549"
  },
  {
    "url": "assets/js/446.js",
    "revision": "757a521eab16e80316e3441c237e23c4"
  },
  {
    "url": "assets/js/447.js",
    "revision": "8734c93b30f597f6980f09e6b8634e40"
  },
  {
    "url": "assets/js/448.js",
    "revision": "0e61eaa3e36191a06314f7d7e0c723bb"
  },
  {
    "url": "assets/js/449.js",
    "revision": "114435bbbcebeb782667cb197d79b9dd"
  },
  {
    "url": "assets/js/45.js",
    "revision": "169a8bf911965391c1f544429a33b76f"
  },
  {
    "url": "assets/js/450.js",
    "revision": "f0b3132fd5743b399c4a635aeb136466"
  },
  {
    "url": "assets/js/451.js",
    "revision": "61a0b10e631f32bc2848691298af32be"
  },
  {
    "url": "assets/js/452.js",
    "revision": "83e5391fd0ffe7bdf193379b1048790e"
  },
  {
    "url": "assets/js/453.js",
    "revision": "57251439495252c25ddf1e7b1fd7cf10"
  },
  {
    "url": "assets/js/454.js",
    "revision": "8f90705b6369342f5916a7b2b3e3aca8"
  },
  {
    "url": "assets/js/455.js",
    "revision": "b0724fdc58062bc4f129ef6c55b9c75f"
  },
  {
    "url": "assets/js/456.js",
    "revision": "04cacb540af9b16e523479240075a49b"
  },
  {
    "url": "assets/js/457.js",
    "revision": "1bcca0d574454645a9fd27594b3abade"
  },
  {
    "url": "assets/js/458.js",
    "revision": "9283a512bc35e29cffc8be50a06d708d"
  },
  {
    "url": "assets/js/459.js",
    "revision": "3453e99bdf5be3335e985db855b47850"
  },
  {
    "url": "assets/js/46.js",
    "revision": "f4ef25a53d70104c7507d7de44f541b1"
  },
  {
    "url": "assets/js/460.js",
    "revision": "457f985754c6ad734976c504159aeb3b"
  },
  {
    "url": "assets/js/461.js",
    "revision": "9d4b746df7e1fb430cc30db95f4df7de"
  },
  {
    "url": "assets/js/462.js",
    "revision": "ed6a9379cdebed82ced6ebfc4dc21da6"
  },
  {
    "url": "assets/js/463.js",
    "revision": "8183c80faff47cdedd8c25ca01cffce2"
  },
  {
    "url": "assets/js/464.js",
    "revision": "eef76d631902498ac530033171d013cc"
  },
  {
    "url": "assets/js/465.js",
    "revision": "7ad2c44cdb665a4bff1d473f50ebcede"
  },
  {
    "url": "assets/js/466.js",
    "revision": "3edeb879e5b19da8a6d6522ded878206"
  },
  {
    "url": "assets/js/467.js",
    "revision": "4f0b76bccb6c1f741e49de959b2ff6d7"
  },
  {
    "url": "assets/js/468.js",
    "revision": "8e5ca46e56940369ee51a0d94d499495"
  },
  {
    "url": "assets/js/469.js",
    "revision": "c529b5db40d0175b3728e14f5f4571c4"
  },
  {
    "url": "assets/js/47.js",
    "revision": "45103379877d08f0ecd9c8ead370b987"
  },
  {
    "url": "assets/js/470.js",
    "revision": "8e106d9d5fee537f47648b65f3e512a2"
  },
  {
    "url": "assets/js/471.js",
    "revision": "183ee3d75643406f7b515d66c8ba0e7a"
  },
  {
    "url": "assets/js/472.js",
    "revision": "248e99f7a492c16befe291b8c5046cf9"
  },
  {
    "url": "assets/js/473.js",
    "revision": "22ab8d79edbd360d61919c06d7d355eb"
  },
  {
    "url": "assets/js/474.js",
    "revision": "271eefae4fa3bff1d3f125b21135f0dd"
  },
  {
    "url": "assets/js/475.js",
    "revision": "594683c7715f5ffece79214ef7848115"
  },
  {
    "url": "assets/js/476.js",
    "revision": "a1a9994f264c6eef54be619a2f052093"
  },
  {
    "url": "assets/js/477.js",
    "revision": "8e9b515feee9e56162842329715ca2ee"
  },
  {
    "url": "assets/js/478.js",
    "revision": "6dd2a79a6327404cbed3f239400028f3"
  },
  {
    "url": "assets/js/479.js",
    "revision": "204b8f3be185fe9c8c670a972be8e490"
  },
  {
    "url": "assets/js/48.js",
    "revision": "2e896e071ee527d1825db728958f25a6"
  },
  {
    "url": "assets/js/480.js",
    "revision": "158c0af1f93d43eb7a998281f5d9feef"
  },
  {
    "url": "assets/js/481.js",
    "revision": "99f03cf536a33945d79f74eec30fa85b"
  },
  {
    "url": "assets/js/482.js",
    "revision": "9245318d624302eb6059bc5850c10e9e"
  },
  {
    "url": "assets/js/483.js",
    "revision": "d1ba52b5273b119dfc4ef0a670704167"
  },
  {
    "url": "assets/js/484.js",
    "revision": "ab9457d33d03fab5f9da7423f97443ef"
  },
  {
    "url": "assets/js/485.js",
    "revision": "e792c95762c65ae329865a6bae4b558c"
  },
  {
    "url": "assets/js/486.js",
    "revision": "f03190f5b630a089055fb248d2bed845"
  },
  {
    "url": "assets/js/487.js",
    "revision": "8ff33d484e364d4d2b0f024b94916c98"
  },
  {
    "url": "assets/js/488.js",
    "revision": "cf7ea46594a29a787cf1a8a98d4e1256"
  },
  {
    "url": "assets/js/489.js",
    "revision": "892aa3e456234bcc1eb0dcb2bfad76ee"
  },
  {
    "url": "assets/js/49.js",
    "revision": "0f91c9ac3e00550cb7f7f6b38aa91766"
  },
  {
    "url": "assets/js/490.js",
    "revision": "b321d73fbcfd56fee6efe47702b95427"
  },
  {
    "url": "assets/js/491.js",
    "revision": "67d47e9ed46a8a0ec2cd3f064566403f"
  },
  {
    "url": "assets/js/492.js",
    "revision": "b1998b0f4ee9d9bbe2a5efa7eb2eb1e9"
  },
  {
    "url": "assets/js/493.js",
    "revision": "91d09b53f47a802cca88c2a942d5c77d"
  },
  {
    "url": "assets/js/494.js",
    "revision": "12f3ad58717da2a0c0b8e77eeda1c923"
  },
  {
    "url": "assets/js/495.js",
    "revision": "d40c60ff9c73e9b9d2b0a228139436ab"
  },
  {
    "url": "assets/js/496.js",
    "revision": "58063ec37216f3eacf810c41060fc654"
  },
  {
    "url": "assets/js/497.js",
    "revision": "81ebdb1e8801a4d7cb41692b37abd752"
  },
  {
    "url": "assets/js/498.js",
    "revision": "52cbb1f2e9a6722714248e7b5dabb72c"
  },
  {
    "url": "assets/js/499.js",
    "revision": "9371c93f63f7576658d93fea21fe1345"
  },
  {
    "url": "assets/js/50.js",
    "revision": "bd0a207744ff7b719b2a243c7c1965f1"
  },
  {
    "url": "assets/js/500.js",
    "revision": "1dc4eccb5b685710fb6822e5ee8171d0"
  },
  {
    "url": "assets/js/501.js",
    "revision": "b5e7ed36f08a4061ae7f03bcfcf6c295"
  },
  {
    "url": "assets/js/502.js",
    "revision": "56a68e77c4212fb746772a137e381e6a"
  },
  {
    "url": "assets/js/503.js",
    "revision": "78894fdd73755a718e762c02ac69c1f7"
  },
  {
    "url": "assets/js/504.js",
    "revision": "08f69f4d2d652407567d1fb2ac970ae8"
  },
  {
    "url": "assets/js/505.js",
    "revision": "9f15acff26dc318059f2cdeff51d8ea9"
  },
  {
    "url": "assets/js/506.js",
    "revision": "5c6882ab115e23ddeb2116318c0b8b9a"
  },
  {
    "url": "assets/js/507.js",
    "revision": "2f6e9e7d0b16df341cd4fa4a0eae1110"
  },
  {
    "url": "assets/js/508.js",
    "revision": "0deff2c7102cacf637234f9300a0cb8c"
  },
  {
    "url": "assets/js/509.js",
    "revision": "2d9a946641f89641764dd3eb48d51f3c"
  },
  {
    "url": "assets/js/51.js",
    "revision": "7534b7a80543abc94450b8d7c13cfef0"
  },
  {
    "url": "assets/js/510.js",
    "revision": "68ae5e25d6ef4097f69e45c017759e62"
  },
  {
    "url": "assets/js/511.js",
    "revision": "55e17d546cb1c16430f0a08b7c5d1236"
  },
  {
    "url": "assets/js/512.js",
    "revision": "86c392d269f3131701216b3d7c10564d"
  },
  {
    "url": "assets/js/513.js",
    "revision": "f994cc2ef39b642747192f6e25a48bb9"
  },
  {
    "url": "assets/js/514.js",
    "revision": "d248cb1c87630e255974eb4292559687"
  },
  {
    "url": "assets/js/515.js",
    "revision": "5464612430602e6822a3f344096d32a8"
  },
  {
    "url": "assets/js/516.js",
    "revision": "50a7a89a5024426614fb1d4d3ceca885"
  },
  {
    "url": "assets/js/517.js",
    "revision": "dd08a2c81826cc6859199b2b3d2ef265"
  },
  {
    "url": "assets/js/518.js",
    "revision": "ba7790c75e9ad2563ed56a91726ec92c"
  },
  {
    "url": "assets/js/519.js",
    "revision": "2d706c23530347df8ce8aa8d699c14e7"
  },
  {
    "url": "assets/js/52.js",
    "revision": "fdc1382ed3146478a461d1b7d7c437df"
  },
  {
    "url": "assets/js/520.js",
    "revision": "cdbb8924126c61f125e2a1cb140f5996"
  },
  {
    "url": "assets/js/521.js",
    "revision": "3845388246e3e5f3cb801ab5a9ec5e75"
  },
  {
    "url": "assets/js/522.js",
    "revision": "bfc8e26848865864ff0daccc203768a1"
  },
  {
    "url": "assets/js/523.js",
    "revision": "1d4027cce17655924fc8f3c9acebd445"
  },
  {
    "url": "assets/js/524.js",
    "revision": "c9937bcc35d1af862ae998daef5b63c1"
  },
  {
    "url": "assets/js/525.js",
    "revision": "b53e5575f35eccee48fcb624cd965f8d"
  },
  {
    "url": "assets/js/526.js",
    "revision": "17a3f3e4dced3eeb42fcd1f5cf5bc4d7"
  },
  {
    "url": "assets/js/527.js",
    "revision": "6f9737b79f47bd0e629c275839f43da0"
  },
  {
    "url": "assets/js/528.js",
    "revision": "8fa4f6e5372d3bd31d9cf62b052dcdc4"
  },
  {
    "url": "assets/js/529.js",
    "revision": "59f1521b67ccea11cf373db932ec909e"
  },
  {
    "url": "assets/js/53.js",
    "revision": "422da383989d02397ab95d40e8c30a48"
  },
  {
    "url": "assets/js/530.js",
    "revision": "3bfeeacbbc94b8080d5efe019bbb6c12"
  },
  {
    "url": "assets/js/531.js",
    "revision": "790c955dd2960bf9bf69983984cfb554"
  },
  {
    "url": "assets/js/532.js",
    "revision": "3887a297aaaa53c589fcafc3c6ca6a0a"
  },
  {
    "url": "assets/js/533.js",
    "revision": "203093fd5104c95e8ffd174c765c4a6a"
  },
  {
    "url": "assets/js/534.js",
    "revision": "8428622209a9de5683a0141dadbd63cb"
  },
  {
    "url": "assets/js/535.js",
    "revision": "f6fb49789b11078cbc1f554de2c133bc"
  },
  {
    "url": "assets/js/536.js",
    "revision": "01e164c18ac3ae5d3b0fa990a9edb35f"
  },
  {
    "url": "assets/js/537.js",
    "revision": "026eb944feadb759f235027c43fdbb54"
  },
  {
    "url": "assets/js/538.js",
    "revision": "e8e3b7f5b25a263e5d4c517a15943787"
  },
  {
    "url": "assets/js/539.js",
    "revision": "0f081e59878e23ca479b87c04793abaf"
  },
  {
    "url": "assets/js/54.js",
    "revision": "fc5f10fe6557b8a08e71f36ad0066bbf"
  },
  {
    "url": "assets/js/540.js",
    "revision": "da8b6aaf12746a603c212c2c54db54a8"
  },
  {
    "url": "assets/js/541.js",
    "revision": "86c132b260e9237052ebda9e3b68d04f"
  },
  {
    "url": "assets/js/542.js",
    "revision": "3fb7c64c69583683026707817b0ad346"
  },
  {
    "url": "assets/js/543.js",
    "revision": "d7e9c9f9a72e90752aada0e666be8290"
  },
  {
    "url": "assets/js/544.js",
    "revision": "9cafa0b8d596bade5b69ebd1e611a2cc"
  },
  {
    "url": "assets/js/545.js",
    "revision": "db336fc0ff201fc0d2c0ca4f06fbbc63"
  },
  {
    "url": "assets/js/546.js",
    "revision": "2d9a14d5636cf17206288b73cb4a5a8b"
  },
  {
    "url": "assets/js/547.js",
    "revision": "a8d3e05a16cb2a8eb53534f17794b7c7"
  },
  {
    "url": "assets/js/548.js",
    "revision": "7a1dbbfc67c4acdf4a7f0b83ac13faab"
  },
  {
    "url": "assets/js/549.js",
    "revision": "bb2cd5ca175bf31b18fd4af3853d1dd8"
  },
  {
    "url": "assets/js/55.js",
    "revision": "3aca32ffe6e909308924f2ee54c403c9"
  },
  {
    "url": "assets/js/550.js",
    "revision": "ee12ee0d296a35aa2c9a74f5149623df"
  },
  {
    "url": "assets/js/551.js",
    "revision": "acc744789d1eb1d2f44c6c10cd8d7061"
  },
  {
    "url": "assets/js/552.js",
    "revision": "86194295f3cf796b873d4974fcc58c2a"
  },
  {
    "url": "assets/js/553.js",
    "revision": "127009feb0fc8f5d774d0bd1755914a3"
  },
  {
    "url": "assets/js/554.js",
    "revision": "663f81d3da2844fc805f13477e3699e4"
  },
  {
    "url": "assets/js/555.js",
    "revision": "b43ba4adcb387e3504b46d9d88a8908b"
  },
  {
    "url": "assets/js/556.js",
    "revision": "7cea7dbb6f1e0af8cbbac807e6eb30c0"
  },
  {
    "url": "assets/js/557.js",
    "revision": "749f2ea7f2f9158db5a9566d983d6ada"
  },
  {
    "url": "assets/js/558.js",
    "revision": "899fd73405b74a4f91e52941bc7585e4"
  },
  {
    "url": "assets/js/559.js",
    "revision": "2615c33e9d6b6ebc5905de31bdb1238a"
  },
  {
    "url": "assets/js/56.js",
    "revision": "95012efe89bb177e5f97d28dfba0149e"
  },
  {
    "url": "assets/js/560.js",
    "revision": "63b5d19bc5cd5514f5bde32fbf6a37b4"
  },
  {
    "url": "assets/js/561.js",
    "revision": "3b94f9355fd6c03b1c19b819e21a5fa2"
  },
  {
    "url": "assets/js/562.js",
    "revision": "c0277b634cfdb00b37c7027c7d8246c9"
  },
  {
    "url": "assets/js/563.js",
    "revision": "d15fca2d03293c2a67198cbb2640bc2f"
  },
  {
    "url": "assets/js/564.js",
    "revision": "47e142bc8aa0a2dea3a539940783f0c1"
  },
  {
    "url": "assets/js/565.js",
    "revision": "0ea7770288c2b3e0af4ab64c91cdb8cf"
  },
  {
    "url": "assets/js/566.js",
    "revision": "1f29cad1ebe5392502472357fba1a0eb"
  },
  {
    "url": "assets/js/567.js",
    "revision": "549ca0f12c76eb2ea7b7a2743278842c"
  },
  {
    "url": "assets/js/568.js",
    "revision": "d9db16a2192c6be1dcd8df30b11da2e1"
  },
  {
    "url": "assets/js/569.js",
    "revision": "42fdcc026e64eef052ec49bfd89315fa"
  },
  {
    "url": "assets/js/57.js",
    "revision": "3b8a8423f62b35aa2286c0e42051bf54"
  },
  {
    "url": "assets/js/570.js",
    "revision": "1a20e59094f77e702220db1d8cd6d4dd"
  },
  {
    "url": "assets/js/571.js",
    "revision": "9c9f992f664ed2715a298603e614773c"
  },
  {
    "url": "assets/js/572.js",
    "revision": "746621cc261312ab1ce6a3d9e4be1297"
  },
  {
    "url": "assets/js/573.js",
    "revision": "3ef6e88c18a345db52bab92895cc6fda"
  },
  {
    "url": "assets/js/574.js",
    "revision": "817bd5779bc62abf161305761375cd52"
  },
  {
    "url": "assets/js/575.js",
    "revision": "77a078dcc87b5c686b89fa2dc9f26070"
  },
  {
    "url": "assets/js/576.js",
    "revision": "7e56e845ad6437f1fee55972230874aa"
  },
  {
    "url": "assets/js/577.js",
    "revision": "be7715141dbb2c42fa5e54064728e8e4"
  },
  {
    "url": "assets/js/578.js",
    "revision": "2ac81e2e72e4dd913765995b90db3538"
  },
  {
    "url": "assets/js/579.js",
    "revision": "22085a7d745e53eae891b05b8f6e547f"
  },
  {
    "url": "assets/js/58.js",
    "revision": "275f703646a6b6d48656d0d2a79fcb31"
  },
  {
    "url": "assets/js/580.js",
    "revision": "f2470545d973b20f85a806a48c7731fc"
  },
  {
    "url": "assets/js/581.js",
    "revision": "11bf3927de2aecced5d888309a405df9"
  },
  {
    "url": "assets/js/582.js",
    "revision": "f8cd8542c59be728b451bdd7ab7a7321"
  },
  {
    "url": "assets/js/583.js",
    "revision": "a86f219958db47051ce491ce38a64ba4"
  },
  {
    "url": "assets/js/584.js",
    "revision": "36f2b5dabe2f84897be632213cfc4654"
  },
  {
    "url": "assets/js/585.js",
    "revision": "98b15aa0c65b480184f32948802245b4"
  },
  {
    "url": "assets/js/586.js",
    "revision": "bc23c7ece024dc991e8d92d1a51b32ae"
  },
  {
    "url": "assets/js/587.js",
    "revision": "1c8960356a53279d8b23165ae35277a0"
  },
  {
    "url": "assets/js/588.js",
    "revision": "b1c689df798f1d3d809334d0090e4295"
  },
  {
    "url": "assets/js/589.js",
    "revision": "e3567546737e542de764a98213a9c497"
  },
  {
    "url": "assets/js/59.js",
    "revision": "31002168bf7232adcd1311c65ba28996"
  },
  {
    "url": "assets/js/590.js",
    "revision": "c0be68ed1e56a2b4fdbdd90c442b0c1c"
  },
  {
    "url": "assets/js/591.js",
    "revision": "afa9e2c58e1001f8567444f909780bf3"
  },
  {
    "url": "assets/js/592.js",
    "revision": "ae7bb09ff8727fc8a193bb2154827a1a"
  },
  {
    "url": "assets/js/593.js",
    "revision": "d0d162294954a50144f8a4e1f4441ab6"
  },
  {
    "url": "assets/js/594.js",
    "revision": "795a3a03b70f1637c9c48ece83ffd19c"
  },
  {
    "url": "assets/js/595.js",
    "revision": "0eaa671d8062b7bc781c6049fa5009dd"
  },
  {
    "url": "assets/js/596.js",
    "revision": "443f371c2e81bdb382ed168b9bf04d20"
  },
  {
    "url": "assets/js/597.js",
    "revision": "b657d8b1b390abad1645578c45275e9f"
  },
  {
    "url": "assets/js/598.js",
    "revision": "0de43d68b4465382281c554345260925"
  },
  {
    "url": "assets/js/599.js",
    "revision": "ca300498256964ba8a9d13e3cee0e67e"
  },
  {
    "url": "assets/js/6.js",
    "revision": "95116fa6905ca994374b73272ce71dad"
  },
  {
    "url": "assets/js/60.js",
    "revision": "04910325e04cd40a7e2c8e1849922d7e"
  },
  {
    "url": "assets/js/600.js",
    "revision": "9330d026fe3e3749a1273a13872d3713"
  },
  {
    "url": "assets/js/601.js",
    "revision": "9c9bc817b1d6c7fc25c33e0e0c4411a2"
  },
  {
    "url": "assets/js/61.js",
    "revision": "5921fba5349442757b6a6cf76ee1776d"
  },
  {
    "url": "assets/js/62.js",
    "revision": "fa89a771113d4f90db38e6f33017a633"
  },
  {
    "url": "assets/js/63.js",
    "revision": "8a443d1289a319c12de23bc52f39e369"
  },
  {
    "url": "assets/js/64.js",
    "revision": "acbb9ab67383c6e4ffadddf99d8c2eeb"
  },
  {
    "url": "assets/js/65.js",
    "revision": "b62b74653758fc91d97b6534966bb119"
  },
  {
    "url": "assets/js/66.js",
    "revision": "4304a3e3ed9bc7011593c58f07001654"
  },
  {
    "url": "assets/js/67.js",
    "revision": "cfbb0d5dc308c7e9bb2187d909488d22"
  },
  {
    "url": "assets/js/68.js",
    "revision": "daff51e2b110ef0a7c64687970b1c06f"
  },
  {
    "url": "assets/js/69.js",
    "revision": "b9886fd13385350bc4ee22f1f4daeb61"
  },
  {
    "url": "assets/js/7.js",
    "revision": "b1ce02b988a4a395375954375615724a"
  },
  {
    "url": "assets/js/70.js",
    "revision": "464277bc08a8e52ac4dd314642b6b575"
  },
  {
    "url": "assets/js/71.js",
    "revision": "140175965e0d7e7897f76b451fb476f2"
  },
  {
    "url": "assets/js/72.js",
    "revision": "00738b07d8d1b66af2c83526fbc3788d"
  },
  {
    "url": "assets/js/73.js",
    "revision": "b7a59957ff3ec166ceac1e662b68968f"
  },
  {
    "url": "assets/js/74.js",
    "revision": "cf5aba2be051280574d6a28afea1dacc"
  },
  {
    "url": "assets/js/75.js",
    "revision": "ad79307743ac8afe871d0c78b98af42a"
  },
  {
    "url": "assets/js/76.js",
    "revision": "8319b792d09f672e5f41acc7ee5fcdf7"
  },
  {
    "url": "assets/js/77.js",
    "revision": "c5a7b809b036624f2955b1473fd96195"
  },
  {
    "url": "assets/js/78.js",
    "revision": "868e854aaf2146f75e8c3503cdd6064d"
  },
  {
    "url": "assets/js/79.js",
    "revision": "370fb3cc5fffc144ff48c21f597b4e6a"
  },
  {
    "url": "assets/js/8.js",
    "revision": "dfdbbc622de6c0f9a23b66b124c7175e"
  },
  {
    "url": "assets/js/80.js",
    "revision": "5220f22f750bd2ca04a48b960c41214c"
  },
  {
    "url": "assets/js/81.js",
    "revision": "fd2c80e72e6102b924d4c01aa5e8cf18"
  },
  {
    "url": "assets/js/82.js",
    "revision": "97f46914eaf5493a27e35ecca8f66c70"
  },
  {
    "url": "assets/js/83.js",
    "revision": "30f27d70924c3e6ed6a5051323ea62e6"
  },
  {
    "url": "assets/js/84.js",
    "revision": "6bd3605282122963f24b9de47ff120b8"
  },
  {
    "url": "assets/js/85.js",
    "revision": "c68776c0bedda5ea5e9ac1530e0dd8ef"
  },
  {
    "url": "assets/js/86.js",
    "revision": "db2317df9b69fce113129fe272a85694"
  },
  {
    "url": "assets/js/87.js",
    "revision": "2c4f938ab2fc700d44663716667f5fdd"
  },
  {
    "url": "assets/js/88.js",
    "revision": "7be394d9b71784940d42025db2ff1883"
  },
  {
    "url": "assets/js/89.js",
    "revision": "a8bfb655a08c278cadfc80d03fb2d09e"
  },
  {
    "url": "assets/js/9.js",
    "revision": "049589da8ad8dfe4e2274ca1e4043daa"
  },
  {
    "url": "assets/js/90.js",
    "revision": "e1b7c9f8449085f321edbb0488076251"
  },
  {
    "url": "assets/js/91.js",
    "revision": "bd838ecdc9952b0be1213585700d7418"
  },
  {
    "url": "assets/js/92.js",
    "revision": "78f08ab421f1c07ef8a161a3da7f7918"
  },
  {
    "url": "assets/js/93.js",
    "revision": "1fb31af57d178ddc95420fc61eb572ee"
  },
  {
    "url": "assets/js/94.js",
    "revision": "1c92510e5dfb3033e0b8eecbd336bb49"
  },
  {
    "url": "assets/js/95.js",
    "revision": "df43823a8a009d86b98d42c231c5d7cc"
  },
  {
    "url": "assets/js/96.js",
    "revision": "5f8017424041f6d0e501c7d04100e9e4"
  },
  {
    "url": "assets/js/97.js",
    "revision": "4414d8fc4d6f13122814eb8bfae4ff86"
  },
  {
    "url": "assets/js/98.js",
    "revision": "f44606073355c736e075645434ab46c6"
  },
  {
    "url": "assets/js/99.js",
    "revision": "4d529b8f5f55e5d850c321dd7e2454d9"
  },
  {
    "url": "assets/js/app.js",
    "revision": "ad507ac79d344bdc43144d4b977dfcea"
  },
  {
    "url": "assets/js/styles.js",
    "revision": "22f22b49cc901aa95826401f7ce0930c"
  },
  {
    "url": "blog/category/index.html",
    "revision": "e8f0bcd5e9aa641b4ae5a65bbe078693"
  },
  {
    "url": "blog/code/artists/index.html",
    "revision": "88a2ffa3c5e288b74f6a3554e77b7fe6"
  },
  {
    "url": "blog/code/asa.sbh.nz/index.html",
    "revision": "0d6d8949e41d3982e4a482430f668d61"
  },
  {
    "url": "blog/code/decrypt/index.html",
    "revision": "460ca71c0788d42b9f177024d7638ab5"
  },
  {
    "url": "blog/code/divider/index.html",
    "revision": "a630b7543a0715e02a81fa01584ba7d5"
  },
  {
    "url": "blog/code/first/index.html",
    "revision": "359634c6fd2854260d4d84367c110cf7"
  },
  {
    "url": "blog/code/fishbarrel/index.html",
    "revision": "4976e9a495556ad08bdc2ec819055be6"
  },
  {
    "url": "blog/code/graphs/index.html",
    "revision": "c4e2576717c84f41dd4ab685b0873d3e"
  },
  {
    "url": "blog/code/indent/index.html",
    "revision": "012e79be76d6ce8b0002611acb3d93de"
  },
  {
    "url": "blog/code/index.html",
    "revision": "2afef34432177378da82143c6256181e"
  },
  {
    "url": "blog/code/ingoa.nz/index.html",
    "revision": "ada7f8e066efe22b257cd5c8ba255f92"
  },
  {
    "url": "blog/code/nzondemand/index.html",
    "revision": "55d8494edecc0203d2d05b79291e1cb4"
  },
  {
    "url": "blog/code/picard/index.html",
    "revision": "33eabf155b6326e8a9cf4de618d8ba7a"
  },
  {
    "url": "blog/code/qr/index.html",
    "revision": "07cf52ab7fd3c2d22b54c1aa7ca90763"
  },
  {
    "url": "blog/code/readable/index.html",
    "revision": "77c4133ddb012230112d682779fa4793"
  },
  {
    "url": "blog/code/tone/index.html",
    "revision": "ddd6aef8653f7d7eec80bbb210a6648d"
  },
  {
    "url": "blog/code/war/index.html",
    "revision": "d7fd26ca70cb82a84aa220d6e3f789e0"
  },
  {
    "url": "blog/code/website/index.html",
    "revision": "b57ba49edb8c7ef956e0da840bdb9885"
  },
  {
    "url": "blog/code/website/route/index.html",
    "revision": "20c49a1fcb8cbe0516d7127e97f3cc4a"
  },
  {
    "url": "blog/code/website/site/index.html",
    "revision": "c3b6df2e24697af07b0840faa5035812"
  },
  {
    "url": "blog/code/xmltv.co.nz/index.html",
    "revision": "1d4825102a7f00a79ba64f5f00d77f10"
  },
  {
    "url": "blog/howto/index.html",
    "revision": "7aeeceb931cf982a7470ecdc9ebada28"
  },
  {
    "url": "blog/howto/intel865/index.html",
    "revision": "31c3d3d6d1cdc7705fa22e9f94173bc0"
  },
  {
    "url": "blog/howto/ios/index.html",
    "revision": "ec2b96c74a37f21bca26b0086ddb6439"
  },
  {
    "url": "blog/howto/nexentastor/index.html",
    "revision": "91a5970fb2e5da9869d2adfef9682d97"
  },
  {
    "url": "blog/howto/pcloadletter/index.html",
    "revision": "36ce47f1868a41c1521dd0b726280359"
  },
  {
    "url": "blog/howto/raid5/index.html",
    "revision": "89374e38e49f901e8b80d81184728289"
  },
  {
    "url": "blog/index.html",
    "revision": "2a1cf7c7b1f38038d50077ce324fed57"
  },
  {
    "url": "blog/life/anotheryear/index.html",
    "revision": "9795848a9aeeed27b53cac51f3e39c89"
  },
  {
    "url": "blog/life/arcade/index.html",
    "revision": "e1b9b5f810324539f28cc024ffff60fc"
  },
  {
    "url": "blog/life/birthday/index.html",
    "revision": "c6463b68ada236b37de787425bc1466e"
  },
  {
    "url": "blog/life/blasphemy/index.html",
    "revision": "670c1e7cfa5075c84bd04606a3984752"
  },
  {
    "url": "blog/life/blogger/index.html",
    "revision": "ddb7c1a7f27d82b14afc6c74a2901099"
  },
  {
    "url": "blog/life/blurry/index.html",
    "revision": "7261b28822f0b21840743a7356299f56"
  },
  {
    "url": "blog/life/busyday/index.html",
    "revision": "63901d16f7ebf41cd15f4328b695cc69"
  },
  {
    "url": "blog/life/domain/index.html",
    "revision": "c710e77a5ffa8dde7b3c3ef4a643286e"
  },
  {
    "url": "blog/life/exams/index.html",
    "revision": "6a94e56a63123c6990b435d307b49861"
  },
  {
    "url": "blog/life/food/index.html",
    "revision": "24cbd9b1845d3301084e9c3fadc13b9a"
  },
  {
    "url": "blog/life/glenview/index.html",
    "revision": "0d220ab9630cbcb35dc31459f5ae999c"
  },
  {
    "url": "blog/life/headlines/index.html",
    "revision": "d17d4be2b668b0be986dfaf67a1427e3"
  },
  {
    "url": "blog/life/index.html",
    "revision": "073ea83d47bb9e87b2aed2ea28aff79f"
  },
  {
    "url": "blog/life/jws/index.html",
    "revision": "7ce347d0bac0a29be510b875382de5ad"
  },
  {
    "url": "blog/life/keyboard/index.html",
    "revision": "5840067d3ca6d69efc3732138cd5c84c"
  },
  {
    "url": "blog/life/lpi201/index.html",
    "revision": "65539934cb3e6a8588e2fa50b7d5ff29"
  },
  {
    "url": "blog/life/mashup/index.html",
    "revision": "44fe1b0d9a4b33af08316e951ecd72d5"
  },
  {
    "url": "blog/life/motorweb/index.html",
    "revision": "bac51e18f38b742d49cacf798760ef5d"
  },
  {
    "url": "blog/life/nxe/index.html",
    "revision": "4e50023102c7159b51d4fa180711e1f8"
  },
  {
    "url": "blog/life/plates/index.html",
    "revision": "ff6e7d169a74e1492dee91eddf634241"
  },
  {
    "url": "blog/life/queenstown/index.html",
    "revision": "3bd5249595a1ca43665e0296a1842b26"
  },
  {
    "url": "blog/life/racism/index.html",
    "revision": "0d3af958230ed9902b823b02315f4a82"
  },
  {
    "url": "blog/life/roads/index.html",
    "revision": "c48061b6f44988be83bf0ef07f77ad5b"
  },
  {
    "url": "blog/life/roots/index.html",
    "revision": "b77c8aee4191a5e250129032307c470a"
  },
  {
    "url": "blog/life/scare/index.html",
    "revision": "a03fdecf1720b658e101baab2272bc25"
  },
  {
    "url": "blog/life/scary/index.html",
    "revision": "caa1defd6f556929504c108b1d00686f"
  },
  {
    "url": "blog/life/seti/index.html",
    "revision": "0563ced7c840a1b795f554bbb877d433"
  },
  {
    "url": "blog/life/skeptical/index.html",
    "revision": "c5a887defd321528681eebe498bc1870"
  },
  {
    "url": "blog/life/skepticzone/index.html",
    "revision": "3e7dc99e09ca6cf7dc3457ce9ee51533"
  },
  {
    "url": "blog/life/spam/index.html",
    "revision": "fddbe0dfb590f04b4dd33bc66376c477"
  },
  {
    "url": "blog/life/trademe/index.html",
    "revision": "24d4e76310b6b003040a89d179b116f2"
  },
  {
    "url": "blog/life/unforeseen/index.html",
    "revision": "1701bf5f5d642c1ea880fdb47f184c04"
  },
  {
    "url": "blog/life/wobbly/index.html",
    "revision": "70959aef6a1ccba1a5d7cd9e8a6cd461"
  },
  {
    "url": "blog/projects/ahs/index.html",
    "revision": "afdc5c757820f57cfff83d8f00399ab7"
  },
  {
    "url": "blog/projects/airbag/index.html",
    "revision": "b4ad9011783c146cec2a1e1fce9f618c"
  },
  {
    "url": "blog/projects/ambilight/index.html",
    "revision": "75afb51a25bd14c7f415a124a657ccec"
  },
  {
    "url": "blog/projects/automation/index.html",
    "revision": "14b3f52328f95a9e0ca73b6b44e4225c"
  },
  {
    "url": "blog/projects/eyes/index.html",
    "revision": "5cd096a94329da88633c6dbb9196e391"
  },
  {
    "url": "blog/projects/glitch/index.html",
    "revision": "36bbbad10bc557069d6245bf955fd4ed"
  },
  {
    "url": "blog/projects/hotel/index.html",
    "revision": "f4ec229c2dfba4e6dc52f8935dbf9e1c"
  },
  {
    "url": "blog/projects/index.html",
    "revision": "840aba14d6589586753c3504020b9941"
  },
  {
    "url": "blog/projects/it100/index.html",
    "revision": "e8e7650642481bc5b8fdce52752c77e2"
  },
  {
    "url": "blog/projects/microscope/index.html",
    "revision": "6b9c6cc22b0572ee8f191ea3b15ab203"
  },
  {
    "url": "blog/projects/mirror/index.html",
    "revision": "e950afd4d7779fd4cd6b498b14397799"
  },
  {
    "url": "blog/projects/picture/index.html",
    "revision": "d32ca09f55b31bed068e39d2b4fffe93"
  },
  {
    "url": "blog/projects/pizza/index.html",
    "revision": "0453a86811ed9657623778b7f5e5e2f1"
  },
  {
    "url": "blog/projects/podcast/index.html",
    "revision": "96af8bcdce96f12a6962f3dd5b3b0e76"
  },
  {
    "url": "blog/projects/reflow/index.html",
    "revision": "2e4927f7fcf2a276ecba7ba8bb566732"
  },
  {
    "url": "blog/projects/sandbox/index.html",
    "revision": "ff45a03047f4c988bceca30641736238"
  },
  {
    "url": "blog/projects/screens/index.html",
    "revision": "00a2294999dc2212ff0aea953332dea1"
  },
  {
    "url": "blog/projects/sky/index.html",
    "revision": "cdc3b7e54164da919cc557e0b06ef2e4"
  },
  {
    "url": "blog/projects/starwars/index.html",
    "revision": "474920ef3d1027958c22e6833171e759"
  },
  {
    "url": "blog/projects/xbox/index.html",
    "revision": "dbb929a3f2a036d9c8c2d7457af09b82"
  },
  {
    "url": "blog/random/addresses/index.html",
    "revision": "d9fb7f57afa7042c0436c2802991a7e7"
  },
  {
    "url": "blog/random/alphabet/index.html",
    "revision": "44933be4af6d07798f073d6fbbff6c28"
  },
  {
    "url": "blog/random/astrology/index.html",
    "revision": "2e11cd48589f340522dfa8fd70f27fdc"
  },
  {
    "url": "blog/random/chicken/index.html",
    "revision": "ad468daa50ced5c7ac7edb3fda103f8a"
  },
  {
    "url": "blog/random/dns/index.html",
    "revision": "a74c86d1753029247fb57956e514bd44"
  },
  {
    "url": "blog/random/evp/index.html",
    "revision": "c8278849b8a4f27b4dee2c00b49ff298"
  },
  {
    "url": "blog/random/flip/index.html",
    "revision": "044eb1efa28cc5776e748919b69984cf"
  },
  {
    "url": "blog/random/honeychurch/index.html",
    "revision": "6924938cce5af8443f0b846be3ce4fa8"
  },
  {
    "url": "blog/random/index.html",
    "revision": "eef02084a4bf8a74212b283c8ce60a42"
  },
  {
    "url": "blog/random/lottery/index.html",
    "revision": "1e13adf71c8b21b25b8ae7755675eb69"
  },
  {
    "url": "blog/random/music/index.html",
    "revision": "cbe4bf58d57f69a933762e2495bde0f3"
  },
  {
    "url": "blog/random/octal/index.html",
    "revision": "96a03af1bbabde45f9dfc4770c3000bf"
  },
  {
    "url": "blog/random/os/index.html",
    "revision": "a521d7652b29915d3d372c6315238ea0"
  },
  {
    "url": "blog/random/propellers/index.html",
    "revision": "f00e6c66af12ae13dc75c0c3a93406c7"
  },
  {
    "url": "blog/random/robux/index.html",
    "revision": "1a93fe440634500144e75e9e79e0d68a"
  },
  {
    "url": "blog/random/super/index.html",
    "revision": "d3de29a38cc5cc8000bf5b4c8b9669d6"
  },
  {
    "url": "blog/random/times/index.html",
    "revision": "599bebd9a11cf71881b86a111aeb8a34"
  },
  {
    "url": "blog/random/travel/index.html",
    "revision": "b0951061b9004bcf6903d5b155832432"
  },
  {
    "url": "blog/random/wilhelm/index.html",
    "revision": "5f32d69f07518992e7552bac6d5170ba"
  },
  {
    "url": "blog/random/year/index.html",
    "revision": "ef9ee2fa70e17dce073fb91ee6b5aad4"
  },
  {
    "url": "blog/skepticism/2015/08/16/asa/index.html",
    "revision": "9a2c811ada3850ae0efd8a1c6bec86b8"
  },
  {
    "url": "blog/skepticism/2015/08/16/awards/index.html",
    "revision": "6772c0656ec4a8750ff1bb6131f90ee8"
  },
  {
    "url": "blog/skepticism/2015/08/16/bravo/index.html",
    "revision": "71b5a4cb68881deb544c7127ce86ddc0"
  },
  {
    "url": "blog/skepticism/2015/08/16/index.html",
    "revision": "b1b5a0074ea42ede0aeed4e9db7dc772"
  },
  {
    "url": "blog/skepticism/2015/08/16/jim/index.html",
    "revision": "dd8926e5fb1154cad03a26a56a62542b"
  },
  {
    "url": "blog/skepticism/2015/08/16/naholo/index.html",
    "revision": "af743baf612c0cb776a7662a1864e662"
  },
  {
    "url": "blog/skepticism/2015/08/16/resene/index.html",
    "revision": "f6af196d807ec4ad67d6d89ec56d5cc5"
  },
  {
    "url": "blog/skepticism/2015/08/index.html",
    "revision": "3d8a4be5a66ff369d6ecbc5e20b8f5a7"
  },
  {
    "url": "blog/skepticism/2015/09/20/gop/index.html",
    "revision": "e92a854a4f6b9f0842ba26d19cb7de26"
  },
  {
    "url": "blog/skepticism/2015/09/20/ignobel/index.html",
    "revision": "0247bca1f190d5cb2813e78357f3ae21"
  },
  {
    "url": "blog/skepticism/2015/09/20/index.html",
    "revision": "7185163290a4f4095ad640dd122364ec"
  },
  {
    "url": "blog/skepticism/2015/09/20/supplements/index.html",
    "revision": "c6ed8e739f5ac72883f56f8136a64a08"
  },
  {
    "url": "blog/skepticism/2015/09/27/ayahuasca/index.html",
    "revision": "c341f31a1807fdb72bae9f536fbea098"
  },
  {
    "url": "blog/skepticism/2015/09/27/drought/index.html",
    "revision": "2e46e21597a338d0df592eec55915e8b"
  },
  {
    "url": "blog/skepticism/2015/09/27/index.html",
    "revision": "0580a9292cef627db78ab7c948802c12"
  },
  {
    "url": "blog/skepticism/2015/09/27/lama/index.html",
    "revision": "0a77dbd721f4e394016062f2cca23be1"
  },
  {
    "url": "blog/skepticism/2015/09/27/moon/index.html",
    "revision": "315a9a7a927582b45b7b70abc45bb939"
  },
  {
    "url": "blog/skepticism/2015/09/27/scan/index.html",
    "revision": "aced5d75eaf0de87dfe7f4ce1cc6a24e"
  },
  {
    "url": "blog/skepticism/2015/09/index.html",
    "revision": "b9ab248e84161bab1cf9d73890ed83e3"
  },
  {
    "url": "blog/skepticism/2015/10/04/ghost/index.html",
    "revision": "59afaf1c21b16fed0c3b1d0788349320"
  },
  {
    "url": "blog/skepticism/2015/10/04/haka/index.html",
    "revision": "0de0ee12b1b650fcbe44e89c2e862d82"
  },
  {
    "url": "blog/skepticism/2015/10/04/index.html",
    "revision": "007d8570c0ff875ca2ffcf10fff9866c"
  },
  {
    "url": "blog/skepticism/2015/10/04/mars/index.html",
    "revision": "cf92abb9bd233bd2294d3fd74e4b5d79"
  },
  {
    "url": "blog/skepticism/2015/10/04/pharmacy/index.html",
    "revision": "8fd48ba443fafbed11baf3213b502e83"
  },
  {
    "url": "blog/skepticism/2015/10/04/prostate/index.html",
    "revision": "81b237976f227b57a66a83fff7f7e78f"
  },
  {
    "url": "blog/skepticism/2015/10/11/armageddon/index.html",
    "revision": "3219946d7e5fee9b41b2bffdab18093b"
  },
  {
    "url": "blog/skepticism/2015/10/11/climate/index.html",
    "revision": "2e7e78e35ee81bff9528a5a4f204d36c"
  },
  {
    "url": "blog/skepticism/2015/10/11/ghost/index.html",
    "revision": "d5565bca3ddc70ae6d0d1f657b806ed0"
  },
  {
    "url": "blog/skepticism/2015/10/11/index.html",
    "revision": "b97d1cc7582cce1037f4ebd362cdcada"
  },
  {
    "url": "blog/skepticism/2015/10/11/magnesleep/index.html",
    "revision": "eb0f29a84c8dc7990f63a44dc08516b6"
  },
  {
    "url": "blog/skepticism/2015/10/11/nhs/index.html",
    "revision": "c1dbcb6acf3389d000ce15846996450f"
  },
  {
    "url": "blog/skepticism/2015/10/11/prophet/index.html",
    "revision": "db77059195d6cc6057bc2dd325145737"
  },
  {
    "url": "blog/skepticism/2015/10/index.html",
    "revision": "a461eaf2ca6f1cbfb267265a84131bf4"
  },
  {
    "url": "blog/skepticism/2015/11/15/end/index.html",
    "revision": "f9bcd9e3cda39955ca243d1ae7293e51"
  },
  {
    "url": "blog/skepticism/2015/11/15/index.html",
    "revision": "0c5cd8f6a2c8edc05d743bb6511ae5d8"
  },
  {
    "url": "blog/skepticism/2015/11/index.html",
    "revision": "fd39a9bfea50d8e97a732510078d4264"
  },
  {
    "url": "blog/skepticism/2015/12/13/astrology/index.html",
    "revision": "fd0386256c4209d3b727fdf3ca305b36"
  },
  {
    "url": "blog/skepticism/2015/12/13/cancer/index.html",
    "revision": "3121d61d364fc70921b35fec9757ec40"
  },
  {
    "url": "blog/skepticism/2015/12/13/chickenpox/index.html",
    "revision": "1608a9b01826f64ea252c25a8e126bef"
  },
  {
    "url": "blog/skepticism/2015/12/13/index.html",
    "revision": "0a6ff98ccf712738ac9cd72d16b95c63"
  },
  {
    "url": "blog/skepticism/2015/12/13/osteopath/index.html",
    "revision": "4f4b4cdcf6dcbe2695acf8453bae8a80"
  },
  {
    "url": "blog/skepticism/2015/12/13/priest/index.html",
    "revision": "5ea173c557ce79303ce763e1b42cf16a"
  },
  {
    "url": "blog/skepticism/2015/12/13/psychic/index.html",
    "revision": "604b851a3f0f9ab2758c9410d0bc41a0"
  },
  {
    "url": "blog/skepticism/2015/12/13/vaccines/index.html",
    "revision": "d281d0af4eaf4d3b6ebd70753be464a8"
  },
  {
    "url": "blog/skepticism/2015/12/index.html",
    "revision": "5aaca46cf882a126100f6f1ee236679b"
  },
  {
    "url": "blog/skepticism/2015/index.html",
    "revision": "5be2da529446a8614bf6f2471067b358"
  },
  {
    "url": "blog/skepticism/2016/02/07/antioxidant/index.html",
    "revision": "3244403e1146f34f2710264c9535b882"
  },
  {
    "url": "blog/skepticism/2016/02/07/index.html",
    "revision": "68e3bbdf5ef30a8cdc3c1b27c9f3c499"
  },
  {
    "url": "blog/skepticism/2016/02/07/kfc/index.html",
    "revision": "56cd711e79903570a3c10432777fd943"
  },
  {
    "url": "blog/skepticism/2016/02/07/ph/index.html",
    "revision": "18405df7622a1bb8901f815165819327"
  },
  {
    "url": "blog/skepticism/2016/02/07/sandy/index.html",
    "revision": "1d64958af730beba74549ac1ca0e3583"
  },
  {
    "url": "blog/skepticism/2016/02/07/sarfati/index.html",
    "revision": "de93e46eec203f6cf4f9d3dbd8db43c5"
  },
  {
    "url": "blog/skepticism/2016/02/07/trump/index.html",
    "revision": "3bc672016e36c1598807daff33aed5b6"
  },
  {
    "url": "blog/skepticism/2016/02/14/coins/index.html",
    "revision": "2cb2fc5ae86679b6c042408d62ccf5d7"
  },
  {
    "url": "blog/skepticism/2016/02/14/fast/index.html",
    "revision": "6b3ca26aaf90b0672a525c5b82d616a6"
  },
  {
    "url": "blog/skepticism/2016/02/14/fluoride/index.html",
    "revision": "79bdee188fce2eb05f3892bc8fd9354e"
  },
  {
    "url": "blog/skepticism/2016/02/14/icke/index.html",
    "revision": "c297ca63a9ff15936a94a8b31caed385"
  },
  {
    "url": "blog/skepticism/2016/02/14/index.html",
    "revision": "eb7d31901d3ccc7687a741fc2038fdfa"
  },
  {
    "url": "blog/skepticism/2016/02/14/yeti/index.html",
    "revision": "05f825da05dfc6422c911209b3b832f9"
  },
  {
    "url": "blog/skepticism/2016/02/21/homeopathy/index.html",
    "revision": "fb57d164a82d849bed506cf155f06dd7"
  },
  {
    "url": "blog/skepticism/2016/02/21/index.html",
    "revision": "a202022670be693b82176246533b6ad0"
  },
  {
    "url": "blog/skepticism/2016/02/21/monster/index.html",
    "revision": "34e28bb57a028c54eddd79ca43133372"
  },
  {
    "url": "blog/skepticism/2016/02/21/scalia/index.html",
    "revision": "a1792a9e4b138b036f0efb2545e2c713"
  },
  {
    "url": "blog/skepticism/2016/02/21/shane/index.html",
    "revision": "f83a3524298434d3ee08039e575e803b"
  },
  {
    "url": "blog/skepticism/2016/02/21/texas/index.html",
    "revision": "bb1d1613fcbea30e0ac9fdaa9ca65927"
  },
  {
    "url": "blog/skepticism/2016/02/28/acupuncture/index.html",
    "revision": "735715c14dbf78d7664327f6bd7a0c18"
  },
  {
    "url": "blog/skepticism/2016/02/28/fsm/index.html",
    "revision": "87dd88949428e18d1b9d59f854b18327"
  },
  {
    "url": "blog/skepticism/2016/02/28/index.html",
    "revision": "638c077d6f4c09fc28303deac2498906"
  },
  {
    "url": "blog/skepticism/2016/02/28/iv/index.html",
    "revision": "e2f1420f07c222a0b0f774c4ae0c1c29"
  },
  {
    "url": "blog/skepticism/2016/02/28/natural/index.html",
    "revision": "7b68e6ee0be0a16a3df33b6d82800854"
  },
  {
    "url": "blog/skepticism/2016/02/28/talc/index.html",
    "revision": "ea62763899c38ac44148bc06bfa459f3"
  },
  {
    "url": "blog/skepticism/2016/02/index.html",
    "revision": "fccf9cc285f25d6fd06e8b169b9acec6"
  },
  {
    "url": "blog/skepticism/2016/03/13/herbs/index.html",
    "revision": "3c5970c7ae00682b8cc2209b4c6cb2f5"
  },
  {
    "url": "blog/skepticism/2016/03/13/index.html",
    "revision": "9aaf7e541bdb916359692ed729582082"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandala/index.html",
    "revision": "9beb38551b0bec3854664348797d751b"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandela/index.html",
    "revision": "679d159bf8a359023510748e793417d5"
  },
  {
    "url": "blog/skepticism/2016/03/13/spray/index.html",
    "revision": "565efa0da4e8a5247cf32b64a33c2592"
  },
  {
    "url": "blog/skepticism/2016/03/index.html",
    "revision": "bed2b5aa575a3d9edb2683305f1d6409"
  },
  {
    "url": "blog/skepticism/2016/04/17/charity/index.html",
    "revision": "ba1bfbb564b1d5e6453f842207dc1d9b"
  },
  {
    "url": "blog/skepticism/2016/04/17/chiro/index.html",
    "revision": "f02ae8b21a267bb8da638ac3683efa9e"
  },
  {
    "url": "blog/skepticism/2016/04/17/fluoride/index.html",
    "revision": "b923322ffc51569c6a890bdee1638a26"
  },
  {
    "url": "blog/skepticism/2016/04/17/index.html",
    "revision": "817ec8b0bee0f26f08b179397c1b5064"
  },
  {
    "url": "blog/skepticism/2016/04/17/lotto/index.html",
    "revision": "077b5354a071c4bc1d48826c5f6bc302"
  },
  {
    "url": "blog/skepticism/2016/04/17/mind/index.html",
    "revision": "80f6779730faba92177530a2d41df43b"
  },
  {
    "url": "blog/skepticism/2016/04/17/whooping/index.html",
    "revision": "97a85bef95877f991607e5c8da748bac"
  },
  {
    "url": "blog/skepticism/2016/04/index.html",
    "revision": "f745fb9e1d5043f65c69d7921058e028"
  },
  {
    "url": "blog/skepticism/2016/06/05/1080/index.html",
    "revision": "92da72ca780d7e4b677e6827287ef72f"
  },
  {
    "url": "blog/skepticism/2016/06/05/acupuncture/index.html",
    "revision": "695bddf2c4dfcf8f889de17a9590d260"
  },
  {
    "url": "blog/skepticism/2016/06/05/family/index.html",
    "revision": "f1b96ce020daecbcd7e60e96ea37d25d"
  },
  {
    "url": "blog/skepticism/2016/06/05/index.html",
    "revision": "713cfe64d201bcc4fce0875a68dc32f0"
  },
  {
    "url": "blog/skepticism/2016/06/05/limbaugh/index.html",
    "revision": "49c1d5b39e8161e738ca55cdfd745a73"
  },
  {
    "url": "blog/skepticism/2016/06/12/bobby/index.html",
    "revision": "276cfa57dfce07d0e01af5ac92ef31be"
  },
  {
    "url": "blog/skepticism/2016/06/12/climate/index.html",
    "revision": "e6425db546c57f958c53114861e967d3"
  },
  {
    "url": "blog/skepticism/2016/06/12/index.html",
    "revision": "89e9083283396a900c759905b6806804"
  },
  {
    "url": "blog/skepticism/2016/06/12/pugh/index.html",
    "revision": "eaf401a59cc95b33b8e6194005329371"
  },
  {
    "url": "blog/skepticism/2016/06/12/savage/index.html",
    "revision": "40d8525a9d1de6323ae4c197e3a2c0f7"
  },
  {
    "url": "blog/skepticism/2016/06/12/sawdust/index.html",
    "revision": "3c657cc91e705f2d9534d2e3879fa678"
  },
  {
    "url": "blog/skepticism/2016/06/19/beauty/index.html",
    "revision": "327a10ca857fd43658f368316ebed7c8"
  },
  {
    "url": "blog/skepticism/2016/06/19/bilderberg/index.html",
    "revision": "fbbd6ed2f758c7e94c5a1d99381cd1f3"
  },
  {
    "url": "blog/skepticism/2016/06/19/cyf/index.html",
    "revision": "f6fed3c89f9fab7459ba027a1bcd4944"
  },
  {
    "url": "blog/skepticism/2016/06/19/holt/index.html",
    "revision": "a2c50bf30a3565edc4e1d8913d169d14"
  },
  {
    "url": "blog/skepticism/2016/06/19/index.html",
    "revision": "2b2a9d7e06a3b0011980f484d7e897c5"
  },
  {
    "url": "blog/skepticism/2016/06/19/silver/index.html",
    "revision": "4a060d2e9704502d3ccb7cfed0fc4183"
  },
  {
    "url": "blog/skepticism/2016/06/19/ufo/index.html",
    "revision": "06d1f81785fbda3c17ca503dc801dce2"
  },
  {
    "url": "blog/skepticism/2016/06/26/homeopathy/index.html",
    "revision": "979649e86bc9a7112bee08ddf1214d31"
  },
  {
    "url": "blog/skepticism/2016/06/26/index.html",
    "revision": "89fc02e52f2facc8b55e3a2e77a5efdf"
  },
  {
    "url": "blog/skepticism/2016/06/26/robbins/index.html",
    "revision": "9ae07936e9e242d2b25ce14a79c4f16c"
  },
  {
    "url": "blog/skepticism/2016/06/26/selfies/index.html",
    "revision": "0e82d2223132864f24f0b2604363d153"
  },
  {
    "url": "blog/skepticism/2016/06/26/silver/index.html",
    "revision": "120fb4ef0a861844e397c7bbc3a1c94d"
  },
  {
    "url": "blog/skepticism/2016/06/26/ufos/index.html",
    "revision": "49b7d05e02f8619fab901ed1e925552e"
  },
  {
    "url": "blog/skepticism/2016/06/index.html",
    "revision": "c207b456fa12590c4e14912ae0ddf465"
  },
  {
    "url": "blog/skepticism/2016/07/03/glyphosate/index.html",
    "revision": "64868788c150046395d7f5275aa96e94"
  },
  {
    "url": "blog/skepticism/2016/07/03/gmo/index.html",
    "revision": "d82de69357220e797c7590b364d28ba7"
  },
  {
    "url": "blog/skepticism/2016/07/03/index.html",
    "revision": "4a2a697dbb7a11f1a6b02dd33c43e717"
  },
  {
    "url": "blog/skepticism/2016/07/03/jail/index.html",
    "revision": "2e7b4293dec94e055369d04f14ba7353"
  },
  {
    "url": "blog/skepticism/2016/07/03/ken/index.html",
    "revision": "de37fb06974269741fd657e9247b8e33"
  },
  {
    "url": "blog/skepticism/2016/07/10/ark/index.html",
    "revision": "2c3f148f35a7280cf8f93f04b2173814"
  },
  {
    "url": "blog/skepticism/2016/07/10/bee/index.html",
    "revision": "77855c14a88d12b6e73f4319341bea07"
  },
  {
    "url": "blog/skepticism/2016/07/10/index.html",
    "revision": "08a4bc6a44ccec9d171f277972d50df8"
  },
  {
    "url": "blog/skepticism/2016/07/10/lottery/index.html",
    "revision": "855b242358dc5ca8b3fabdb8eebc35d6"
  },
  {
    "url": "blog/skepticism/2016/07/10/murder/index.html",
    "revision": "9402fc24636df4adcfd7deff03b78876"
  },
  {
    "url": "blog/skepticism/2016/07/17/dogs/index.html",
    "revision": "2ef9c311a2cbcc4aaf14dcdc30a6cfda"
  },
  {
    "url": "blog/skepticism/2016/07/17/fsm/index.html",
    "revision": "17cc64caf7e430bae34ba6a017235157"
  },
  {
    "url": "blog/skepticism/2016/07/17/fyi/index.html",
    "revision": "dd5e24e73c1719b59b3f39f1d9597887"
  },
  {
    "url": "blog/skepticism/2016/07/17/index.html",
    "revision": "27f82037a2f17655927e31131adf940c"
  },
  {
    "url": "blog/skepticism/2016/07/17/natural/index.html",
    "revision": "31ab03b387fe480bb3123c39be7ec8d9"
  },
  {
    "url": "blog/skepticism/2016/07/17/pokemon/index.html",
    "revision": "d3a148a0fbac2d668caba6d77d7d6178"
  },
  {
    "url": "blog/skepticism/2016/07/index.html",
    "revision": "22eef139b347e9429a4a2c303acec98a"
  },
  {
    "url": "blog/skepticism/2016/08/07/icke/index.html",
    "revision": "5239c10ae10f43c3257d09811a43c288"
  },
  {
    "url": "blog/skepticism/2016/08/07/index.html",
    "revision": "8eece7f7414d80666798a7f08860a8fd"
  },
  {
    "url": "blog/skepticism/2016/08/21/brian/index.html",
    "revision": "1618009dd782827e2d62a11c8f60b2cf"
  },
  {
    "url": "blog/skepticism/2016/08/21/chlorine/index.html",
    "revision": "d2b1ed750e0cb86b35dfc8e026ad9cf5"
  },
  {
    "url": "blog/skepticism/2016/08/21/index.html",
    "revision": "6d948883d8fda3907c5f93f1286e0ddb"
  },
  {
    "url": "blog/skepticism/2016/08/21/murder/index.html",
    "revision": "a88a2c287b9d43fae45bdd6725637881"
  },
  {
    "url": "blog/skepticism/2016/08/21/superfoods/index.html",
    "revision": "454409544d28e9704b9a4ff79426b30b"
  },
  {
    "url": "blog/skepticism/2016/08/21/witch/index.html",
    "revision": "b34984572f862bbd7e827b7a3f829440"
  },
  {
    "url": "blog/skepticism/2016/08/28/alcohol/index.html",
    "revision": "49bba4e5bf2fa95f75e0ea9c3b784e43"
  },
  {
    "url": "blog/skepticism/2016/08/28/chiro/index.html",
    "revision": "dba8d56fedaa853f4c1ece89637bbc48"
  },
  {
    "url": "blog/skepticism/2016/08/28/index.html",
    "revision": "3f3e5f481fcac5b6a8178f42961a4459"
  },
  {
    "url": "blog/skepticism/2016/08/28/processed/index.html",
    "revision": "e68b60b73667d7549e1d3f4bce214715"
  },
  {
    "url": "blog/skepticism/2016/08/28/sbh/index.html",
    "revision": "1c8249f359b1e98969b062408a1cbe5b"
  },
  {
    "url": "blog/skepticism/2016/08/index.html",
    "revision": "969b36739f43c327a749e0e120d978ca"
  },
  {
    "url": "blog/skepticism/2016/09/18/altruism/index.html",
    "revision": "4b0abd10676f21e7b064335663cf6f50"
  },
  {
    "url": "blog/skepticism/2016/09/18/better/index.html",
    "revision": "b545b13d9584e349518426a29712a295"
  },
  {
    "url": "blog/skepticism/2016/09/18/homeopathy/index.html",
    "revision": "921f903d9d813a3893885c591d550c54"
  },
  {
    "url": "blog/skepticism/2016/09/18/index.html",
    "revision": "a59055d6eedc0aa8f3da570c187da663"
  },
  {
    "url": "blog/skepticism/2016/09/18/nonsense/index.html",
    "revision": "c4c700e768491c3751a4b0aa09d4f592"
  },
  {
    "url": "blog/skepticism/2016/09/18/trump/index.html",
    "revision": "26405ca6ad4c775b652320ab6d2bb922"
  },
  {
    "url": "blog/skepticism/2016/09/25/clinic/index.html",
    "revision": "dd9f92086dafeb8ff183b88f4cd54d20"
  },
  {
    "url": "blog/skepticism/2016/09/25/fluoride/index.html",
    "revision": "2df5c0a65d844503eb58bf3a14c59fe6"
  },
  {
    "url": "blog/skepticism/2016/09/25/homeopathy/index.html",
    "revision": "7e979a394d30652ec0eed5152e797ffd"
  },
  {
    "url": "blog/skepticism/2016/09/25/index.html",
    "revision": "666d8d387cff5de206080eab6335a041"
  },
  {
    "url": "blog/skepticism/2016/09/25/murder/index.html",
    "revision": "d606968ba93218e773076b0d7667571e"
  },
  {
    "url": "blog/skepticism/2016/09/index.html",
    "revision": "8ab81361abac326ba1ee5a202e9be475"
  },
  {
    "url": "blog/skepticism/2016/10/21/bigfoot/index.html",
    "revision": "a64711027b076e9229ec5713340468d0"
  },
  {
    "url": "blog/skepticism/2016/10/21/breasts/index.html",
    "revision": "7f4a84ba2aa08399515e6bcc186ff19a"
  },
  {
    "url": "blog/skepticism/2016/10/21/index.html",
    "revision": "428d266cf193571af57fc90b35c9fefa"
  },
  {
    "url": "blog/skepticism/2016/10/21/medsafe/index.html",
    "revision": "42cc331bad634c279a6a3a181c064cee"
  },
  {
    "url": "blog/skepticism/2016/10/21/zenteq/index.html",
    "revision": "a41a3c920bcc3ddcf1b78ac9b1b78002"
  },
  {
    "url": "blog/skepticism/2016/10/index.html",
    "revision": "95ead3ffbb3c67a60f79711ee280fdea"
  },
  {
    "url": "blog/skepticism/2016/11/13/conference/index.html",
    "revision": "133ed0adc258e740ee3a185a9c6d90b4"
  },
  {
    "url": "blog/skepticism/2016/11/13/green/index.html",
    "revision": "d7c3a20c7e90fe713c03b71094280f85"
  },
  {
    "url": "blog/skepticism/2016/11/13/index.html",
    "revision": "f47977f3d9c009005c58c54626ae28d7"
  },
  {
    "url": "blog/skepticism/2016/11/13/vice/index.html",
    "revision": "0e29bd7f630c98579433683e74e317ee"
  },
  {
    "url": "blog/skepticism/2016/11/27/bioptron/index.html",
    "revision": "07831fd7a591089cc49e1f0c303cd96e"
  },
  {
    "url": "blog/skepticism/2016/11/27/conference/index.html",
    "revision": "1de50838126c4a0eb3a420b1e7038607"
  },
  {
    "url": "blog/skepticism/2016/11/27/earthquake/index.html",
    "revision": "4aa2ce0b0a88d3c8c81fe7e96b9da08f"
  },
  {
    "url": "blog/skepticism/2016/11/27/index.html",
    "revision": "6175e28f7ab73df9a7d9d738ea8c4291"
  },
  {
    "url": "blog/skepticism/2016/11/index.html",
    "revision": "0a8abbb8ec4547309c252a15e532b85a"
  },
  {
    "url": "blog/skepticism/2016/12/04/conference/index.html",
    "revision": "5ad562ef0713682bb6f7f1c16953d602"
  },
  {
    "url": "blog/skepticism/2016/12/04/index.html",
    "revision": "1d81094cef06a785d11e269110d83e4d"
  },
  {
    "url": "blog/skepticism/2016/12/18/colin/index.html",
    "revision": "467d326e76cb8faeee7576845c933c9d"
  },
  {
    "url": "blog/skepticism/2016/12/18/fiji/index.html",
    "revision": "4b8fd79c1e3c39b77f6e1d5e93fd2c78"
  },
  {
    "url": "blog/skepticism/2016/12/18/index.html",
    "revision": "825fab93f2619586d499235c7805c21e"
  },
  {
    "url": "blog/skepticism/2016/12/18/kinesiology/index.html",
    "revision": "7a5df8b8748c53cb5f157e62aa157b97"
  },
  {
    "url": "blog/skepticism/2016/12/18/mmm/index.html",
    "revision": "faa4a3ebc7f9c97ae0aa9ac0228a3cdd"
  },
  {
    "url": "blog/skepticism/2016/12/18/nigel/index.html",
    "revision": "a0bd9d272c835bc4941eaea9265060bd"
  },
  {
    "url": "blog/skepticism/2016/12/index.html",
    "revision": "31e76de6b4e2562189095a99bdf119cd"
  },
  {
    "url": "blog/skepticism/2016/index.html",
    "revision": "359cf5d2ede9b717b4141505339c0faf"
  },
  {
    "url": "blog/skepticism/2017/01/22/index.html",
    "revision": "92a875a225090bac2287b23083a7a9aa"
  },
  {
    "url": "blog/skepticism/2017/01/22/scientology/index.html",
    "revision": "97ab172522a03623f27f3d40335a9a2e"
  },
  {
    "url": "blog/skepticism/2017/01/29/creation/index.html",
    "revision": "40ef456344b40e7457a8376c3e26d6b6"
  },
  {
    "url": "blog/skepticism/2017/01/29/index.html",
    "revision": "4bc53cfa3b0e1023fbfbaff2dba48565"
  },
  {
    "url": "blog/skepticism/2017/01/index.html",
    "revision": "ab222efe9ad8ba0873969f4953bb6d11"
  },
  {
    "url": "blog/skepticism/2017/02/05/fraudster/index.html",
    "revision": "962d386b3a1278477741c20d57b01c20"
  },
  {
    "url": "blog/skepticism/2017/02/05/gervais/index.html",
    "revision": "2b3970963551a71724fe0b9ecb8b2d32"
  },
  {
    "url": "blog/skepticism/2017/02/05/index.html",
    "revision": "331528eba6fe7ab2011d6a70f97ce02c"
  },
  {
    "url": "blog/skepticism/2017/02/05/scientology/index.html",
    "revision": "49d03a342b463146f8734b2e5d9ca75b"
  },
  {
    "url": "blog/skepticism/2017/02/19/homeopathy/index.html",
    "revision": "db3de575e88d6b7e583c0e114cfa10ab"
  },
  {
    "url": "blog/skepticism/2017/02/19/index.html",
    "revision": "fb8bd4d901f31623cc4882a6f14270ec"
  },
  {
    "url": "blog/skepticism/2017/02/19/lottery/index.html",
    "revision": "b24ce067934cad1cc9322e01f185902b"
  },
  {
    "url": "blog/skepticism/2017/02/19/vaxxed/index.html",
    "revision": "f43783ebb098ce346fafa65b44f194ed"
  },
  {
    "url": "blog/skepticism/2017/02/19/whales/index.html",
    "revision": "49dd0998050b9ca6b0373a5d2c1f1c4b"
  },
  {
    "url": "blog/skepticism/2017/02/index.html",
    "revision": "d2108781383a40e346af69b4909e321f"
  },
  {
    "url": "blog/skepticism/2017/03/05/index.html",
    "revision": "9a52a0e81df16ff0c92197ab10934354"
  },
  {
    "url": "blog/skepticism/2017/03/05/rea/index.html",
    "revision": "5714c726eead442aa610ab256a19ef30"
  },
  {
    "url": "blog/skepticism/2017/03/19/fake/index.html",
    "revision": "ed698d79d693964d0329a037c0577602"
  },
  {
    "url": "blog/skepticism/2017/03/19/index.html",
    "revision": "45b25bb2466e51df7a106953b0c7bc1a"
  },
  {
    "url": "blog/skepticism/2017/03/19/murder/index.html",
    "revision": "3eb04ba8e539d849c2c79865ec8f1689"
  },
  {
    "url": "blog/skepticism/2017/03/26/census/index.html",
    "revision": "e9187a4cc7eeeb0a5e1d6f4c834b4f7a"
  },
  {
    "url": "blog/skepticism/2017/03/26/index.html",
    "revision": "705cb29d77e8e545a289c9cf196559d1"
  },
  {
    "url": "blog/skepticism/2017/03/26/nzmj/index.html",
    "revision": "2e588c91d70990c6aee8afd9f9a6df9e"
  },
  {
    "url": "blog/skepticism/2017/03/26/shaquille/index.html",
    "revision": "67c287fb4dba278a53fad150a53b12ac"
  },
  {
    "url": "blog/skepticism/2017/03/index.html",
    "revision": "0e162490318e30b9ac3892f998ecfa3e"
  },
  {
    "url": "blog/skepticism/2017/04/02/index.html",
    "revision": "e356d1b754f9897b53d4e7935cd237a0"
  },
  {
    "url": "blog/skepticism/2017/04/02/nasa/index.html",
    "revision": "31c38f09501e77644fb645fdd6df161e"
  },
  {
    "url": "blog/skepticism/2017/04/02/science/index.html",
    "revision": "98c36bf4eef77278a0a63651eb487cea"
  },
  {
    "url": "blog/skepticism/2017/04/02/vaxxed/index.html",
    "revision": "c64a86496d7e6385824ceb0961dc6b41"
  },
  {
    "url": "blog/skepticism/2017/04/09/index.html",
    "revision": "3ad65aeced4ff54daa63ca6d5c7c7573"
  },
  {
    "url": "blog/skepticism/2017/04/09/tekiri/index.html",
    "revision": "8d551b9eb8cd6b0dbc641a3ce06572eb"
  },
  {
    "url": "blog/skepticism/2017/04/09/vaxxed/index.html",
    "revision": "28e9db36e53c8f2cac9102379aaee70d"
  },
  {
    "url": "blog/skepticism/2017/04/23/arise/index.html",
    "revision": "4a4642f77e9e07e7c64da230e8ab37ac"
  },
  {
    "url": "blog/skepticism/2017/04/23/index.html",
    "revision": "9493b8736881e951ab81dc8ea8425750"
  },
  {
    "url": "blog/skepticism/2017/04/23/kelvin/index.html",
    "revision": "83bfec9aa277efde016e12764a1e1516"
  },
  {
    "url": "blog/skepticism/2017/04/index.html",
    "revision": "34149fd6cd549293cc3f9f45fb627655"
  },
  {
    "url": "blog/skepticism/2017/05/07/cancer/index.html",
    "revision": "aaf6479f3684f314cd0d75a7fb43e070"
  },
  {
    "url": "blog/skepticism/2017/05/07/index.html",
    "revision": "de41876a6f8af29c4a3a301066abc402"
  },
  {
    "url": "blog/skepticism/2017/05/07/nigel/index.html",
    "revision": "346390c76614db66d0fab08b76abd82f"
  },
  {
    "url": "blog/skepticism/2017/05/21/blasphemy/index.html",
    "revision": "04948bf045588090bece5d696ac04801"
  },
  {
    "url": "blog/skepticism/2017/05/21/flat/index.html",
    "revision": "4c6336bb69070a5f93606c9ad5a3d4cc"
  },
  {
    "url": "blog/skepticism/2017/05/21/index.html",
    "revision": "cb3f7b00d75e2813785d17def3c60feb"
  },
  {
    "url": "blog/skepticism/2017/05/21/maori/index.html",
    "revision": "65807eeea55ab34d99152a7f24ad18b4"
  },
  {
    "url": "blog/skepticism/2017/05/index.html",
    "revision": "11d821d9ab770a63aadc0f4d7c5613b3"
  },
  {
    "url": "blog/skepticism/2017/06/04/bigelow/index.html",
    "revision": "6de919375f0af1c646fe62f52ba88b80"
  },
  {
    "url": "blog/skepticism/2017/06/04/climate/index.html",
    "revision": "c57367f2b8e69e94fea07b3360ffb52d"
  },
  {
    "url": "blog/skepticism/2017/06/04/hansford/index.html",
    "revision": "596f214058c66f926c4cff9be90bdd4c"
  },
  {
    "url": "blog/skepticism/2017/06/04/index.html",
    "revision": "db7463e209e8fc49c0b1a4ba9da728e8"
  },
  {
    "url": "blog/skepticism/2017/06/04/wasp/index.html",
    "revision": "b5ec0c8e96ddca5ac04565bf20f68ed5"
  },
  {
    "url": "blog/skepticism/2017/06/11/colonic/index.html",
    "revision": "162f6d0ec00ffbf19c308056c3bb38b8"
  },
  {
    "url": "blog/skepticism/2017/06/11/credulous/index.html",
    "revision": "e17a5e08b2b74cbc1293011e8cbdeb09"
  },
  {
    "url": "blog/skepticism/2017/06/11/index.html",
    "revision": "5174350c8db0a1d5cc1aa24fa096d123"
  },
  {
    "url": "blog/skepticism/2017/06/11/journals/index.html",
    "revision": "5a960682cd476f9caa13b2cbb7c458a4"
  },
  {
    "url": "blog/skepticism/2017/06/18/breatharians/index.html",
    "revision": "c977eb03f2e7e2c11e45dc0dbfa057cd"
  },
  {
    "url": "blog/skepticism/2017/06/18/fieldays/index.html",
    "revision": "9133034022b658afb843cee28832a70c"
  },
  {
    "url": "blog/skepticism/2017/06/18/index.html",
    "revision": "4423827171ff04c1088b403ac2672f4a"
  },
  {
    "url": "blog/skepticism/2017/06/18/jw/index.html",
    "revision": "9706bb9cfc2e4a3c3aa41ce63087a530"
  },
  {
    "url": "blog/skepticism/2017/06/18/oil/index.html",
    "revision": "9199d8756f481ff0d0d363c7a8cb2c38"
  },
  {
    "url": "blog/skepticism/2017/06/index.html",
    "revision": "c40d59b54fdb12b8fce4fa772e095133"
  },
  {
    "url": "blog/skepticism/2017/07/02/baby/index.html",
    "revision": "33920928234e54aae1d4fda439005837"
  },
  {
    "url": "blog/skepticism/2017/07/02/index.html",
    "revision": "323a36c954ec20a5eb52fcc4dca07d9f"
  },
  {
    "url": "blog/skepticism/2017/07/02/infowars/index.html",
    "revision": "c009bbe63d0a702086cb246db6215506"
  },
  {
    "url": "blog/skepticism/2017/07/02/scientology/index.html",
    "revision": "3b24fc1b61a8b0069b072e72bbafb393"
  },
  {
    "url": "blog/skepticism/2017/07/16/bananas/index.html",
    "revision": "085e7eb94c2e4bdaed0d8f5a3e45a003"
  },
  {
    "url": "blog/skepticism/2017/07/16/circles/index.html",
    "revision": "689ac41e483cf1a135906fc9cf007b86"
  },
  {
    "url": "blog/skepticism/2017/07/16/index.html",
    "revision": "541d09faa27ab40d56704df545755c4c"
  },
  {
    "url": "blog/skepticism/2017/07/16/siggi/index.html",
    "revision": "73e7f434c11cb2d59f76bca217a97120"
  },
  {
    "url": "blog/skepticism/2017/07/16/vaxxed/index.html",
    "revision": "81cfd6bd77808e90d2e9a8f3348e104b"
  },
  {
    "url": "blog/skepticism/2017/07/30/bleach/index.html",
    "revision": "2e8f062c94e13d0340b7299ed0eb4c1c"
  },
  {
    "url": "blog/skepticism/2017/07/30/bluebeam/index.html",
    "revision": "06fa6602315ffc5fa7990624c6dcfbac"
  },
  {
    "url": "blog/skepticism/2017/07/30/index.html",
    "revision": "fb65586b1820f4dacf6cecff274ee8b8"
  },
  {
    "url": "blog/skepticism/2017/07/30/police/index.html",
    "revision": "d5a905ff908cc7dde63314976752de74"
  },
  {
    "url": "blog/skepticism/2017/07/index.html",
    "revision": "cccf1e56beb349e7a828bd8bbec4edaf"
  },
  {
    "url": "blog/skepticism/2017/08/06/conned/index.html",
    "revision": "6d968e2054925edc3ae55a40715b6056"
  },
  {
    "url": "blog/skepticism/2017/08/06/doll/index.html",
    "revision": "d6664d940f69e7b736265c4fbaf936b8"
  },
  {
    "url": "blog/skepticism/2017/08/06/index.html",
    "revision": "d711be5ede0c0c69638b651fdd727d6b"
  },
  {
    "url": "blog/skepticism/2017/08/06/jacinda/index.html",
    "revision": "ace2b39673aeb1a352403d18499b7f8d"
  },
  {
    "url": "blog/skepticism/2017/08/06/lotto/index.html",
    "revision": "0a343e11c77ceb46fca625cff45a1fa1"
  },
  {
    "url": "blog/skepticism/2017/08/27/index.html",
    "revision": "3838e6f29ac8a46510645b9a4b37a170"
  },
  {
    "url": "blog/skepticism/2017/08/27/naturopath/index.html",
    "revision": "541ab0d15ee3d1b23c3add99e3d56327"
  },
  {
    "url": "blog/skepticism/2017/08/27/satanic/index.html",
    "revision": "9dac18cf582c13c61dea1c3be36571f9"
  },
  {
    "url": "blog/skepticism/2017/08/index.html",
    "revision": "797a2350ca4073bf3b1164028c6a9fa4"
  },
  {
    "url": "blog/skepticism/2017/09/03/apocalypse/index.html",
    "revision": "1f56f306f437aa61fbfd0d9bd27cfee0"
  },
  {
    "url": "blog/skepticism/2017/09/03/cancer/index.html",
    "revision": "aea47c336e5216a68fc6c01fe81165fe"
  },
  {
    "url": "blog/skepticism/2017/09/03/index.html",
    "revision": "e931ba83d8220b1604f0e52e28b32b17"
  },
  {
    "url": "blog/skepticism/2017/09/03/rectangle/index.html",
    "revision": "4f1a4701816be21bba1a1344c291b22a"
  },
  {
    "url": "blog/skepticism/2017/09/03/stargate/index.html",
    "revision": "e2e915f9a76ee2bdfac329d8aeec628f"
  },
  {
    "url": "blog/skepticism/2017/09/index.html",
    "revision": "6d3cf3d598703e0d969ccdc29b0d26d7"
  },
  {
    "url": "blog/skepticism/2017/10/01/apocalypse/index.html",
    "revision": "dd666698c022bffeca543610f28de744"
  },
  {
    "url": "blog/skepticism/2017/10/01/freeman/index.html",
    "revision": "7df253e1a4dab00da90ae33d395c4661"
  },
  {
    "url": "blog/skepticism/2017/10/01/index.html",
    "revision": "e91b57a31acd0b0b991327eb6fa58818"
  },
  {
    "url": "blog/skepticism/2017/10/01/pharmacy/index.html",
    "revision": "d36004958a23fc41a9b7279ed6335cb4"
  },
  {
    "url": "blog/skepticism/2017/10/08/index.html",
    "revision": "00165a8106d38a05a3b620a57378ad4d"
  },
  {
    "url": "blog/skepticism/2017/10/08/pill/index.html",
    "revision": "2f0bbbc8e92a85300cdaff784346998e"
  },
  {
    "url": "blog/skepticism/2017/10/08/qsb/index.html",
    "revision": "daf7a13c8f60d7d19adc2dda0523a45d"
  },
  {
    "url": "blog/skepticism/2017/10/08/vegas/index.html",
    "revision": "693323bd30e4020ebea4782d32c74b93"
  },
  {
    "url": "blog/skepticism/2017/10/15/doterra/index.html",
    "revision": "fefeab80d2c9204add06b6c53ae8a33b"
  },
  {
    "url": "blog/skepticism/2017/10/15/index.html",
    "revision": "21a5993c3fa853cf0fd2c04262af1343"
  },
  {
    "url": "blog/skepticism/2017/10/15/lie/index.html",
    "revision": "be5ef60886d18327d9f6feba8ca9a115"
  },
  {
    "url": "blog/skepticism/2017/10/15/soap/index.html",
    "revision": "5ce121cc5e592ff51a2477ad66f5a10a"
  },
  {
    "url": "blog/skepticism/2017/10/index.html",
    "revision": "ac5d168828878ed5186603a5075b0849"
  },
  {
    "url": "blog/skepticism/2017/11/05/conference/index.html",
    "revision": "489440b3cea8255796e37adeb455c2e8"
  },
  {
    "url": "blog/skepticism/2017/11/05/glyphosate/index.html",
    "revision": "06bc7346fc4936d66db3387afd953724"
  },
  {
    "url": "blog/skepticism/2017/11/05/index.html",
    "revision": "7a0013fda3e78be99d46a1202cd451c4"
  },
  {
    "url": "blog/skepticism/2017/11/05/stranded/index.html",
    "revision": "32fc296bce7f0d63eaf7789d2f5211f2"
  },
  {
    "url": "blog/skepticism/2017/11/05/tracts/index.html",
    "revision": "5f8d81fdb916470d0ee40dd62ebbbb53"
  },
  {
    "url": "blog/skepticism/2017/11/12/ghost/index.html",
    "revision": "16210781a043110dc8aa7127f9f0a819"
  },
  {
    "url": "blog/skepticism/2017/11/12/green/index.html",
    "revision": "aa5a2d5a14569b403e3b1492a10f105c"
  },
  {
    "url": "blog/skepticism/2017/11/12/harassment/index.html",
    "revision": "d6a9b9eb0047eb0fffa21867378c9db5"
  },
  {
    "url": "blog/skepticism/2017/11/12/index.html",
    "revision": "e98752a06b8ce29c9d24a2f239c68983"
  },
  {
    "url": "blog/skepticism/2017/11/12/libby/index.html",
    "revision": "7349a2fc86d4060d5ca90963a48d33a5"
  },
  {
    "url": "blog/skepticism/2017/11/index.html",
    "revision": "b4bd5a12b3eca7cfcf3d67411e11306d"
  },
  {
    "url": "blog/skepticism/2017/12/03/acupuncture/index.html",
    "revision": "db216418100bba1d4e03391e5d454a38"
  },
  {
    "url": "blog/skepticism/2017/12/03/denialism/index.html",
    "revision": "3ad1fc0a4ed326e490bbd68120350c63"
  },
  {
    "url": "blog/skepticism/2017/12/03/dowsing/index.html",
    "revision": "5272ae852c08b012d109732dd82e263f"
  },
  {
    "url": "blog/skepticism/2017/12/03/holes/index.html",
    "revision": "f019995710dffbbdfcc4ce3e09f19be5"
  },
  {
    "url": "blog/skepticism/2017/12/03/index.html",
    "revision": "6a3594b045d722a8e910f4cae81a952f"
  },
  {
    "url": "blog/skepticism/2017/12/17/index.html",
    "revision": "dbc03c73992db19c0ffdfc9ee098458e"
  },
  {
    "url": "blog/skepticism/2017/12/17/nhs/index.html",
    "revision": "1d70a002ab5b620302b85095620b9020"
  },
  {
    "url": "blog/skepticism/2017/12/17/oto/index.html",
    "revision": "2f32b43edb3567f77cb38f916eb0a30b"
  },
  {
    "url": "blog/skepticism/2017/12/17/pastafarian/index.html",
    "revision": "685ba004f51a78b615a2cadd4d59aec9"
  },
  {
    "url": "blog/skepticism/2017/12/17/shc/index.html",
    "revision": "45a1c65668d96257f8ac5750265e31d9"
  },
  {
    "url": "blog/skepticism/2017/12/17/wellworks/index.html",
    "revision": "96d2515323e6ea72c4d3f88df924a111"
  },
  {
    "url": "blog/skepticism/2017/12/index.html",
    "revision": "22c9f7821ec3a2bacdbe7689dba9a8a5"
  },
  {
    "url": "blog/skepticism/2017/index.html",
    "revision": "846129b29f41d1b4f19f0132183f13b4"
  },
  {
    "url": "blog/skepticism/2018/01/21/grounding/index.html",
    "revision": "40dd568d2ab5adbcdd9d154f4ce30191"
  },
  {
    "url": "blog/skepticism/2018/01/21/index.html",
    "revision": "f3bdb7605d30445391214ae93d477ac1"
  },
  {
    "url": "blog/skepticism/2018/01/21/naturopath/index.html",
    "revision": "debf629e22a645ae69d52d20eda46ea9"
  },
  {
    "url": "blog/skepticism/2018/01/21/respen/index.html",
    "revision": "0cff8aa96b6af12139dc5ce534a737a5"
  },
  {
    "url": "blog/skepticism/2018/01/28/bears/index.html",
    "revision": "29fc5a26b4c51d8a2dedec21509dbbe8"
  },
  {
    "url": "blog/skepticism/2018/01/28/index.html",
    "revision": "b70c0f6431aea072629acdb58567c84b"
  },
  {
    "url": "blog/skepticism/2018/01/28/peppering/index.html",
    "revision": "ef447af244a7a28a438f9b053d64773a"
  },
  {
    "url": "blog/skepticism/2018/01/28/pet/index.html",
    "revision": "8e74c8b5705aca109d5a9bb603b5376c"
  },
  {
    "url": "blog/skepticism/2018/01/28/quake/index.html",
    "revision": "67f79aaa0996793c02ba63af0e38b43f"
  },
  {
    "url": "blog/skepticism/2018/01/28/scientology/index.html",
    "revision": "8f100e0fcde2137f1c9608e0ca7308f7"
  },
  {
    "url": "blog/skepticism/2018/01/index.html",
    "revision": "65f414a2b034a0d1e997461afd920b73"
  },
  {
    "url": "blog/skepticism/2018/02/11/asa/index.html",
    "revision": "0ffdd3511133c9ade2091d2a7218530f"
  },
  {
    "url": "blog/skepticism/2018/02/11/cannabis/index.html",
    "revision": "073d3a05ddf556b0bd9cd029d948ffd1"
  },
  {
    "url": "blog/skepticism/2018/02/11/elon/index.html",
    "revision": "1819d70c139182a3d76493b76537fef1"
  },
  {
    "url": "blog/skepticism/2018/02/11/homeopathy/index.html",
    "revision": "6a41b6ea207c3f4d70e64e14c3c90325"
  },
  {
    "url": "blog/skepticism/2018/02/11/index.html",
    "revision": "2c1d9e3ee93bae360a6109117e75b4b9"
  },
  {
    "url": "blog/skepticism/2018/02/11/water/index.html",
    "revision": "288c3cf684670800367c78260b67c27d"
  },
  {
    "url": "blog/skepticism/2018/02/25/crisis/index.html",
    "revision": "8945aad8a1b8e72ba49076fb26e45c2e"
  },
  {
    "url": "blog/skepticism/2018/02/25/eggs/index.html",
    "revision": "14521e29e3bf081436c0df61c7b02c81"
  },
  {
    "url": "blog/skepticism/2018/02/25/fsm/index.html",
    "revision": "c501debb34ef7c5d4450e1df895a5453"
  },
  {
    "url": "blog/skepticism/2018/02/25/index.html",
    "revision": "b26ae3d77eb079247bd9e14dbf2e5c1a"
  },
  {
    "url": "blog/skepticism/2018/02/25/number/index.html",
    "revision": "eddc39fd3f9b841d96746326d87c6d7f"
  },
  {
    "url": "blog/skepticism/2018/02/25/quackery/index.html",
    "revision": "3fe4124402a3eeb35630e14de51f2a65"
  },
  {
    "url": "blog/skepticism/2018/02/index.html",
    "revision": "a61ba90dc4b8cca32daf8b07b53df8be"
  },
  {
    "url": "blog/skepticism/2018/03/11/ai/index.html",
    "revision": "7a715ddbdf61399ec85aa41be34aec74"
  },
  {
    "url": "blog/skepticism/2018/03/11/index.html",
    "revision": "b4c111bbb334ce09be74adfc27496ef5"
  },
  {
    "url": "blog/skepticism/2018/03/11/radiation/index.html",
    "revision": "9aa87e5b12fcc09690f986212fdfccd5"
  },
  {
    "url": "blog/skepticism/2018/03/11/reiki/index.html",
    "revision": "a3d76f714b08dea61c020cdf6d51fd00"
  },
  {
    "url": "blog/skepticism/2018/03/11/ufo/index.html",
    "revision": "2fe566d94770642ded609837472026dd"
  },
  {
    "url": "blog/skepticism/2018/03/18/ghost/index.html",
    "revision": "3f0249857c6c7701ae2a2536d6e02acf"
  },
  {
    "url": "blog/skepticism/2018/03/18/index.html",
    "revision": "8693c5e46deff7186ad0c50d8d5d4a78"
  },
  {
    "url": "blog/skepticism/2018/03/18/psychic/index.html",
    "revision": "e6a523e6c0d7fffcbb2cc741d61f5f71"
  },
  {
    "url": "blog/skepticism/2018/03/18/quack/index.html",
    "revision": "a36cc52920e21ddf2fbbaebc523edf8f"
  },
  {
    "url": "blog/skepticism/2018/03/18/radiation/index.html",
    "revision": "bbfa8c724875bcb74e085cd92a573e33"
  },
  {
    "url": "blog/skepticism/2018/03/index.html",
    "revision": "f86048b6963daf9426be95ceb56c04a2"
  },
  {
    "url": "blog/skepticism/2018/04/08/calocurb/index.html",
    "revision": "53351e0324d8cb1457a8885123be2529"
  },
  {
    "url": "blog/skepticism/2018/04/08/cam/index.html",
    "revision": "4f750f701375f6805c806e9c5a1f714d"
  },
  {
    "url": "blog/skepticism/2018/04/08/index.html",
    "revision": "921a44320ed6df31fa497ea376fe6a76"
  },
  {
    "url": "blog/skepticism/2018/04/08/psychic/index.html",
    "revision": "9054028f5dd94498d70f26c207b599db"
  },
  {
    "url": "blog/skepticism/2018/04/08/vaccines/index.html",
    "revision": "23894786b8e15aaaa5494984655a8bc3"
  },
  {
    "url": "blog/skepticism/2018/04/15/coffee/index.html",
    "revision": "f0034ed546d833b1e548b0631e52cea5"
  },
  {
    "url": "blog/skepticism/2018/04/15/ignorance/index.html",
    "revision": "fc13288e160baf5f292e1ca456d7cfab"
  },
  {
    "url": "blog/skepticism/2018/04/15/index.html",
    "revision": "a704d7f4941470bdcf412ad0a9c206c6"
  },
  {
    "url": "blog/skepticism/2018/04/15/nasa/index.html",
    "revision": "a9eac77048410495691727770bd79df9"
  },
  {
    "url": "blog/skepticism/2018/04/15/tapu/index.html",
    "revision": "f98e58084b42506a084e7e923c1762ab"
  },
  {
    "url": "blog/skepticism/2018/04/29/google/index.html",
    "revision": "0c1bb8c1cd4e4f0d3e11c8e4c0c5f63d"
  },
  {
    "url": "blog/skepticism/2018/04/29/homeopathy/index.html",
    "revision": "644d065ebb343cb284e6bf04db15b059"
  },
  {
    "url": "blog/skepticism/2018/04/29/index.html",
    "revision": "500ebe9a3b68d2a3e04da0c4298a00fe"
  },
  {
    "url": "blog/skepticism/2018/04/29/ken/index.html",
    "revision": "9ffd57fd4d067c48fd5a13d53d909528"
  },
  {
    "url": "blog/skepticism/2018/04/29/v2k/index.html",
    "revision": "76eaf13cd8d33280da1852f072324b7b"
  },
  {
    "url": "blog/skepticism/2018/04/index.html",
    "revision": "13e3ecfdd4b1c29e656d1f9a75be1470"
  },
  {
    "url": "blog/skepticism/2018/05/13/astrology/index.html",
    "revision": "757c04dd1b86790ff2131b49bf769285"
  },
  {
    "url": "blog/skepticism/2018/05/13/crystals/index.html",
    "revision": "d5bebc436713dc03348b1bba27c080d3"
  },
  {
    "url": "blog/skepticism/2018/05/13/dawkins/index.html",
    "revision": "05cc6f33401f6a7e893eb439c9590880"
  },
  {
    "url": "blog/skepticism/2018/05/13/index.html",
    "revision": "29bb80aedb3f9a32d76160f067ece152"
  },
  {
    "url": "blog/skepticism/2018/05/13/kangen/index.html",
    "revision": "49918eecf6a06742bb2dd614c2db0047"
  },
  {
    "url": "blog/skepticism/2018/05/13/vitamins/index.html",
    "revision": "da11eecc1f0fa55a4b37f4d2222a2e00"
  },
  {
    "url": "blog/skepticism/2018/05/27/flat/index.html",
    "revision": "78a7b45f36b2ae2e0052db42c4515c20"
  },
  {
    "url": "blog/skepticism/2018/05/27/index.html",
    "revision": "3a0ed432b484305946e174d72962a9e1"
  },
  {
    "url": "blog/skepticism/2018/05/27/kangen/index.html",
    "revision": "233453cd3d8521d3ec4c95c446ee30eb"
  },
  {
    "url": "blog/skepticism/2018/05/27/ness/index.html",
    "revision": "d5e09764f6977fe93779004f598dfb4a"
  },
  {
    "url": "blog/skepticism/2018/05/27/oz/index.html",
    "revision": "4454efd43db2f3c9b045adc8fb328492"
  },
  {
    "url": "blog/skepticism/2018/05/27/psychic/index.html",
    "revision": "f327646835c3dd9fe1dee7be9426d237"
  },
  {
    "url": "blog/skepticism/2018/05/index.html",
    "revision": "c95b81b089f86c15643df03e3ac76b00"
  },
  {
    "url": "blog/skepticism/2018/06/10/astrology/index.html",
    "revision": "894c3ec4db1989312a1d0dee50f0d4e3"
  },
  {
    "url": "blog/skepticism/2018/06/10/index.html",
    "revision": "31c7616405e3ce811842e89f8800a476"
  },
  {
    "url": "blog/skepticism/2018/06/10/nhs/index.html",
    "revision": "fb8579522fbbb47090606f55c95641d8"
  },
  {
    "url": "blog/skepticism/2018/06/10/shakti/index.html",
    "revision": "0521ba3fa4e1be3f64dc8139c38817c6"
  },
  {
    "url": "blog/skepticism/2018/06/10/weetbix/index.html",
    "revision": "5bada59f06f8d8e68d46c9a6c7fb2ee7"
  },
  {
    "url": "blog/skepticism/2018/06/24/blasphemy/index.html",
    "revision": "babd05410421fc28c2b787d9dd788252"
  },
  {
    "url": "blog/skepticism/2018/06/24/cannabis/index.html",
    "revision": "244c14bd2cbc06980418205037dfc437"
  },
  {
    "url": "blog/skepticism/2018/06/24/hotdog/index.html",
    "revision": "ed44887689e1779a9e5cbabd75b58c44"
  },
  {
    "url": "blog/skepticism/2018/06/24/index.html",
    "revision": "263397580bf9c1ab7b93c345ee5d2c75"
  },
  {
    "url": "blog/skepticism/2018/06/24/led/index.html",
    "revision": "50e7e8b813b7b9e4fdde3ce69a155917"
  },
  {
    "url": "blog/skepticism/2018/06/index.html",
    "revision": "49e91a2409fa2793752de3decefd258d"
  },
  {
    "url": "blog/skepticism/2018/07/08/bullet/index.html",
    "revision": "996e45b7f48855ee4fd8c6f35535be93"
  },
  {
    "url": "blog/skepticism/2018/07/08/chiros/index.html",
    "revision": "3824f56a33744b64146f00b76a19d77e"
  },
  {
    "url": "blog/skepticism/2018/07/08/hiv/index.html",
    "revision": "bd7428c74a2e40b6c765147cc0deb613"
  },
  {
    "url": "blog/skepticism/2018/07/08/hrv/index.html",
    "revision": "2b0fa12314b926088fccdad21853916d"
  },
  {
    "url": "blog/skepticism/2018/07/08/index.html",
    "revision": "cff7f6cba61e6487a83553163677368d"
  },
  {
    "url": "blog/skepticism/2018/07/22/cancer/index.html",
    "revision": "0f17c78704f8def19cacede6aa6e1a05"
  },
  {
    "url": "blog/skepticism/2018/07/22/index.html",
    "revision": "ef4aa9f4caa9801338b11131a39ea734"
  },
  {
    "url": "blog/skepticism/2018/07/22/resurrection/index.html",
    "revision": "0a2f497f11b36be4eb2bf6eb9da8014f"
  },
  {
    "url": "blog/skepticism/2018/07/22/talc/index.html",
    "revision": "85b0badb08c18a6e2b530e57ad5aa0dc"
  },
  {
    "url": "blog/skepticism/2018/07/22/visas/index.html",
    "revision": "1a738b0481cbaed7753f9e4de0095354"
  },
  {
    "url": "blog/skepticism/2018/07/index.html",
    "revision": "f628e0ddf4389001e9d717a4d7e563e5"
  },
  {
    "url": "blog/skepticism/2018/08/05/conf/index.html",
    "revision": "d7b981532bba58b1330364e67183861f"
  },
  {
    "url": "blog/skepticism/2018/08/05/index.html",
    "revision": "d216a976b984727d82ec537e17d8af7f"
  },
  {
    "url": "blog/skepticism/2018/08/05/qanon/index.html",
    "revision": "06cbac59b446f229d461c835e32e7c41"
  },
  {
    "url": "blog/skepticism/2018/08/19/index.html",
    "revision": "62f3ed7641081dc9d744bdb0207cd968"
  },
  {
    "url": "blog/skepticism/2018/08/19/jw/index.html",
    "revision": "78b5805ac632b7cea7537aa5c704758a"
  },
  {
    "url": "blog/skepticism/2018/08/index.html",
    "revision": "e1b45dc078c7b68b810f2f92302f67b0"
  },
  {
    "url": "blog/skepticism/2018/09/02/allergy/index.html",
    "revision": "1dd0c86594f5585ba5393933690307d8"
  },
  {
    "url": "blog/skepticism/2018/09/02/catholic/index.html",
    "revision": "92b1b0b5bcbd629bc5b2b3648f9c61d7"
  },
  {
    "url": "blog/skepticism/2018/09/02/index.html",
    "revision": "2d217996231e76f33b93152aa771dd3e"
  },
  {
    "url": "blog/skepticism/2018/09/02/jw/index.html",
    "revision": "ea6e79cc314523ed2ac397239cb11160"
  },
  {
    "url": "blog/skepticism/2018/09/02/sen/index.html",
    "revision": "85be253da158979daf7abf2b7c79a2fd"
  },
  {
    "url": "blog/skepticism/2018/09/16/1080/index.html",
    "revision": "fe71712dc98082b3fedf040f145625d4"
  },
  {
    "url": "blog/skepticism/2018/09/16/church/index.html",
    "revision": "1138841f8cfbdae9bec3e423c0d38428"
  },
  {
    "url": "blog/skepticism/2018/09/16/index.html",
    "revision": "fc0126f653e038ca871340c9896be011"
  },
  {
    "url": "blog/skepticism/2018/09/16/jones/index.html",
    "revision": "7fdffac1df9fc9b41e2d40fd70f9f041"
  },
  {
    "url": "blog/skepticism/2018/09/16/scammers/index.html",
    "revision": "eff38c6e3f653e1d9d74080d8241edf7"
  },
  {
    "url": "blog/skepticism/2018/09/30/index.html",
    "revision": "df2d81fa8b846d06c63e9d86bbb18b1a"
  },
  {
    "url": "blog/skepticism/2018/09/30/jw/index.html",
    "revision": "4081d8f0a702d97b34d964b48dda5b4e"
  },
  {
    "url": "blog/skepticism/2018/09/30/oto/index.html",
    "revision": "0c3af3c0a3a683ce085cc6abacfbf63d"
  },
  {
    "url": "blog/skepticism/2018/09/30/who/index.html",
    "revision": "105b403d13fb52dde325c1f3a09cae7d"
  },
  {
    "url": "blog/skepticism/2018/09/index.html",
    "revision": "3e3b72af926911cea0713650eae215ee"
  },
  {
    "url": "blog/skepticism/2018/10/14/hacked/index.html",
    "revision": "3658f4fa92c9c0c58a9dabc724a3256e"
  },
  {
    "url": "blog/skepticism/2018/10/14/index.html",
    "revision": "2b0fb364bc5af1da663025b6b65d7f8b"
  },
  {
    "url": "blog/skepticism/2018/10/14/kangen/index.html",
    "revision": "dc1fc6b220c275db1940ae7b81b91618"
  },
  {
    "url": "blog/skepticism/2018/10/14/pakistan/index.html",
    "revision": "05a08db9eac1a14d69818e16c0da671f"
  },
  {
    "url": "blog/skepticism/2018/10/14/sarah/index.html",
    "revision": "a9c8fdb93dcb8e6263a2ced157ad02d6"
  },
  {
    "url": "blog/skepticism/2018/10/28/blasphemy/index.html",
    "revision": "54427a4613ecbfcc1ac3422ee57bfa6c"
  },
  {
    "url": "blog/skepticism/2018/10/28/hrv/index.html",
    "revision": "601917508e5cfc6b91b4e9444bdbf325"
  },
  {
    "url": "blog/skepticism/2018/10/28/index.html",
    "revision": "34164db968ea546a19eb1cdc48f44a82"
  },
  {
    "url": "blog/skepticism/2018/10/28/jesus/index.html",
    "revision": "981cb0da652e02b7e694a18f12d9a90d"
  },
  {
    "url": "blog/skepticism/2018/10/28/natural/index.html",
    "revision": "378801965f4ddb38854cc8b3da6535e2"
  },
  {
    "url": "blog/skepticism/2018/10/index.html",
    "revision": "aea0fdf00531ce5e24dad35aa4fb03b7"
  },
  {
    "url": "blog/skepticism/2018/11/04/bibi/index.html",
    "revision": "1d254ec9dd62d274de38422d8e134bb3"
  },
  {
    "url": "blog/skepticism/2018/11/04/index.html",
    "revision": "9f8a91a5f6b953b4f1a557d230bbe419"
  },
  {
    "url": "blog/skepticism/2018/11/04/jesus/index.html",
    "revision": "f3062e4bcc56531191d80eefe2c12644"
  },
  {
    "url": "blog/skepticism/2018/11/04/obdii/index.html",
    "revision": "0cc9f6eebe52e86c30cc0c2dc69eabad"
  },
  {
    "url": "blog/skepticism/2018/11/04/sleepdrops/index.html",
    "revision": "7b18ac548ac489efb602fe912460dc8d"
  },
  {
    "url": "blog/skepticism/2018/11/index.html",
    "revision": "5ad2ca1a1f9b05829f8be376a2fb34e4"
  },
  {
    "url": "blog/skepticism/2018/12/02/ark/index.html",
    "revision": "d92ab2d9163dbf3f529ef2441f9cc4b0"
  },
  {
    "url": "blog/skepticism/2018/12/02/green/index.html",
    "revision": "c631d9c0b755ae9acb15344c5a16ec01"
  },
  {
    "url": "blog/skepticism/2018/12/02/index.html",
    "revision": "f7f015813d6057b1dfb9fd60f7d8f5a3"
  },
  {
    "url": "blog/skepticism/2018/12/02/ri/index.html",
    "revision": "0d752164ff0597a54f4968c4495f28ce"
  },
  {
    "url": "blog/skepticism/2018/12/16/blasphemy/index.html",
    "revision": "3c8d73ef0dff32e6ec1e88507fc0a808"
  },
  {
    "url": "blog/skepticism/2018/12/16/index.html",
    "revision": "9d4e43c13ac07398732c82078fd54886"
  },
  {
    "url": "blog/skepticism/2018/12/16/sleepdrops/index.html",
    "revision": "486f2e31b1f245de59e90f4bdfe129c3"
  },
  {
    "url": "blog/skepticism/2018/12/16/tekiri/index.html",
    "revision": "b0e6c2873845e5547b888c6d7d046ae8"
  },
  {
    "url": "blog/skepticism/2018/12/index.html",
    "revision": "c4267770e970f3183a24fbe28a2d002f"
  },
  {
    "url": "blog/skepticism/2018/index.html",
    "revision": "66cb7d9dab8d7fca101733043876ef93"
  },
  {
    "url": "blog/skepticism/index.html",
    "revision": "05487280d71315a3c9ecaeefc23dd05d"
  },
  {
    "url": "blog/tag/index.html",
    "revision": "0e67993823535f3b848fe3de0b2e3bf0"
  },
  {
    "url": "contact/index.html",
    "revision": "6a100a9da52c0a110245c3101de6f663"
  },
  {
    "url": "cv/cover/index.html",
    "revision": "f667e3318e9f236173a023901a1a94a3"
  },
  {
    "url": "cv/full.html",
    "revision": "750283492dbe0cc585d5dd53a07ebbad"
  },
  {
    "url": "cv/full/index.html",
    "revision": "be5794e80fc7239a25d4851f13941f22"
  },
  {
    "url": "cv/index.html",
    "revision": "0cdd3580e5786a811bec5df5c6108786"
  },
  {
    "url": "cv/short.html",
    "revision": "12b97a89be827a2cb95d3a396df84344"
  },
  {
    "url": "googlee25d0c06da891164.html",
    "revision": "0defe75660212f417b90c5affcd03380"
  },
  {
    "url": "index.html",
    "revision": "7a6568f090776527e41e003584023c19"
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
    "revision": "9cb27afad33c38c0c5e611457131441d"
  },
  {
    "url": "media/me/index.html",
    "revision": "fb12388b6ccd14bce76db21408782f47"
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
    "revision": "bca1f7820d05eac2694addabe02d0cf2"
  },
  {
    "url": "status/index.html",
    "revision": "e7c0595effe01e6d717b368a19c18994"
  },
  {
    "url": "status/steam/index.html",
    "revision": "4a3a364d92290af3fb853cb50d6456a0"
  },
  {
    "url": "status/twitter/index.html",
    "revision": "96b02d566ed3a7434033490639d97b9c"
  },
  {
    "url": "status/wikipedia/index.html",
    "revision": "fefbcb4f58f598d09f9e52362a1c74b8"
  },
  {
    "url": "test/index.html",
    "revision": "d852106c45c6e7690324d5abe76e0db8"
  },
  {
    "url": "test/webcam/index.html",
    "revision": "7ff2ff356fd17bb8a6cf29bcd8de7ddb"
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
