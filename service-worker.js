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
    "revision": "b12b53a8476da4c550e18cd4167b2b8f"
  },
  {
    "url": "assets/css/0.styles.css",
    "revision": "0e25740d643e5fcf381d6144bfa2e6ca"
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
    "revision": "cf1260ba30533922af6b362c789ab806"
  },
  {
    "url": "assets/js/100.js",
    "revision": "b4e2e954c1b249b58c98e0657b879914"
  },
  {
    "url": "assets/js/101.js",
    "revision": "e2e385a215bcaa4e11e8dd9f71ddbe29"
  },
  {
    "url": "assets/js/102.js",
    "revision": "a3f05d264c8bd682d517d1e69ceaad65"
  },
  {
    "url": "assets/js/103.js",
    "revision": "c339d8ab960e10ed9ef99b3ca762b1da"
  },
  {
    "url": "assets/js/104.js",
    "revision": "a3ea30ef4e11448bdee9a28393290482"
  },
  {
    "url": "assets/js/105.js",
    "revision": "253b044b02084053033972aa1bfad3b5"
  },
  {
    "url": "assets/js/106.js",
    "revision": "4dbee614f21b12b73b1cf58e8a44dd0d"
  },
  {
    "url": "assets/js/107.js",
    "revision": "4eab923699c576c8aefe04d951177652"
  },
  {
    "url": "assets/js/108.js",
    "revision": "e52dd3515cfcc2fde49ec413b07430ec"
  },
  {
    "url": "assets/js/109.js",
    "revision": "6487bc59b8d2376be5ba7492ea267397"
  },
  {
    "url": "assets/js/11.js",
    "revision": "c353dea82f9191f38b8f87628344a6d8"
  },
  {
    "url": "assets/js/110.js",
    "revision": "036c3b233d27449a72773ca753c75db5"
  },
  {
    "url": "assets/js/111.js",
    "revision": "83e6993480570d2bb1a0af2ecbe22b6f"
  },
  {
    "url": "assets/js/112.js",
    "revision": "18f0c5d0292cd34ef52d57229df9ccce"
  },
  {
    "url": "assets/js/113.js",
    "revision": "76e8a6cd4bf6a5674757014b7ed69346"
  },
  {
    "url": "assets/js/114.js",
    "revision": "7e2386fd2be48b6bb5a97a4c73b46117"
  },
  {
    "url": "assets/js/115.js",
    "revision": "03d6aa2f598da301a20d4d9612290802"
  },
  {
    "url": "assets/js/116.js",
    "revision": "46fc856074c08d110145d7e6647096e8"
  },
  {
    "url": "assets/js/117.js",
    "revision": "34daf63fc9d3ce6c72823e4b028a37fc"
  },
  {
    "url": "assets/js/118.js",
    "revision": "8db74a671a6ef8fd8f09664b9f79050e"
  },
  {
    "url": "assets/js/119.js",
    "revision": "51666a7ec7644c490a4fceeb2e47f912"
  },
  {
    "url": "assets/js/12.js",
    "revision": "b6c52c3d89939562d66f74cc45f2e8b3"
  },
  {
    "url": "assets/js/120.js",
    "revision": "4d1a3b63253d8f4e8f09544ee5968248"
  },
  {
    "url": "assets/js/121.js",
    "revision": "67ab174a00c605a471ae2ea1e5c33794"
  },
  {
    "url": "assets/js/122.js",
    "revision": "90485258bd7a363b634ac52f78104c18"
  },
  {
    "url": "assets/js/123.js",
    "revision": "9557a823efec4b3133b640f5e127cd7f"
  },
  {
    "url": "assets/js/124.js",
    "revision": "2c9fcbb29816576185d73a7d2dc22926"
  },
  {
    "url": "assets/js/125.js",
    "revision": "b3c4ef01033cc8fc5eac4bba4b10a502"
  },
  {
    "url": "assets/js/126.js",
    "revision": "09b5f2fe7fff0ff2a680403b6701d3d6"
  },
  {
    "url": "assets/js/127.js",
    "revision": "58a7f06e68d525121d707686fee90dc9"
  },
  {
    "url": "assets/js/128.js",
    "revision": "fed7b92e0d4283f960e39364facee07c"
  },
  {
    "url": "assets/js/129.js",
    "revision": "9657e390cef2cec18d1d9f15be483310"
  },
  {
    "url": "assets/js/13.js",
    "revision": "825039d6aba35c897b9c41cb0bfa10d3"
  },
  {
    "url": "assets/js/130.js",
    "revision": "d8b7265fcd331a5d377a69d2405eec3f"
  },
  {
    "url": "assets/js/131.js",
    "revision": "2fe168412e42acff031b5a3774334e47"
  },
  {
    "url": "assets/js/132.js",
    "revision": "c922b63fcf3ef6b427f707f604d6d0f5"
  },
  {
    "url": "assets/js/133.js",
    "revision": "b1a2f4de47a00b71b90520dba447300e"
  },
  {
    "url": "assets/js/134.js",
    "revision": "23dad0571fc37266c0397ffa7e403aed"
  },
  {
    "url": "assets/js/135.js",
    "revision": "c2c6ed9da3463fd5ddf3a12c439bccfa"
  },
  {
    "url": "assets/js/136.js",
    "revision": "9873299213a492e7f2f9118d04d14955"
  },
  {
    "url": "assets/js/137.js",
    "revision": "7b8194487f8a50dde77ac812ac8a6f1e"
  },
  {
    "url": "assets/js/138.js",
    "revision": "927d3d93056aa11aaec4dc1ed2652194"
  },
  {
    "url": "assets/js/139.js",
    "revision": "74e565446cdb1f5e7d2288db9cb02e5c"
  },
  {
    "url": "assets/js/14.js",
    "revision": "ae6d5f5bdaec7be270e33ef73e050f78"
  },
  {
    "url": "assets/js/140.js",
    "revision": "1d00ee5aab739bd50187d5ec09fea57b"
  },
  {
    "url": "assets/js/141.js",
    "revision": "d41860f7c8a374a93808ff15ac65f39f"
  },
  {
    "url": "assets/js/142.js",
    "revision": "8dd25a3736581efc1a7ec19eea0ab098"
  },
  {
    "url": "assets/js/143.js",
    "revision": "897f54388d4b302578eb67ed17ca08b7"
  },
  {
    "url": "assets/js/144.js",
    "revision": "bf62cd0cecba5d6d6116bd752d53da4a"
  },
  {
    "url": "assets/js/145.js",
    "revision": "1d19ef7411234c4d6c6aede65fd98a65"
  },
  {
    "url": "assets/js/146.js",
    "revision": "339a65e797f18c30a3cf1d9b4cb066db"
  },
  {
    "url": "assets/js/147.js",
    "revision": "496515fedb496d46838495e624212a95"
  },
  {
    "url": "assets/js/148.js",
    "revision": "a2d9e2325e74a75a30a6011f4ea72f5c"
  },
  {
    "url": "assets/js/149.js",
    "revision": "2f8aa7d234289d5f1cb07aa8a3bb3b1a"
  },
  {
    "url": "assets/js/15.js",
    "revision": "45e2ef99b944e479b766ed6d6051fba4"
  },
  {
    "url": "assets/js/150.js",
    "revision": "4b57fa27d5348c0658a47da676d7d2b1"
  },
  {
    "url": "assets/js/151.js",
    "revision": "6da8a8c684aaf2910aa3a437de74e3cb"
  },
  {
    "url": "assets/js/152.js",
    "revision": "f0eb0386668cd3720fbd80a6ef874905"
  },
  {
    "url": "assets/js/153.js",
    "revision": "dba5269035293c7f99c565de3998defe"
  },
  {
    "url": "assets/js/154.js",
    "revision": "40d9286366e2031d232e524417835c9e"
  },
  {
    "url": "assets/js/155.js",
    "revision": "bc935408c209a89dd670b72c12643607"
  },
  {
    "url": "assets/js/156.js",
    "revision": "792741c0b94ee6af0dda03131944f1af"
  },
  {
    "url": "assets/js/157.js",
    "revision": "e0fcc14df0b90300e0e5caa2584ed9dd"
  },
  {
    "url": "assets/js/158.js",
    "revision": "acda38109dcb1d46ab88f4b738c88200"
  },
  {
    "url": "assets/js/159.js",
    "revision": "2afa0fb1f297b94d2c1100298d06b41c"
  },
  {
    "url": "assets/js/16.js",
    "revision": "3d1db241a3a49730c514e23841291130"
  },
  {
    "url": "assets/js/160.js",
    "revision": "c05af6d325a587229716666470a8c142"
  },
  {
    "url": "assets/js/161.js",
    "revision": "a058b4ceaa78e12f1b639cc37c24fae8"
  },
  {
    "url": "assets/js/162.js",
    "revision": "9b0673ba53f6fdb244a9d80fe75d8b6c"
  },
  {
    "url": "assets/js/163.js",
    "revision": "674565ba17b5744e2b3a7140d66a8b38"
  },
  {
    "url": "assets/js/164.js",
    "revision": "257a531efdde5c0f8054b9e07dcc5175"
  },
  {
    "url": "assets/js/165.js",
    "revision": "a85fdde3668bc924971a1fd626f31cda"
  },
  {
    "url": "assets/js/166.js",
    "revision": "1a385ccdb3a6fc27275f30be5b1edb32"
  },
  {
    "url": "assets/js/167.js",
    "revision": "513bce064d5a13af4628c9a3f301e78e"
  },
  {
    "url": "assets/js/168.js",
    "revision": "5ca7499c48c3810a1e87261925bfbf7c"
  },
  {
    "url": "assets/js/169.js",
    "revision": "55560a76cfac0af652e22bc169e57828"
  },
  {
    "url": "assets/js/17.js",
    "revision": "75ac2dcf19229a209ac9395292ef49ba"
  },
  {
    "url": "assets/js/170.js",
    "revision": "5f2d715cb8b62ae638b2769975484209"
  },
  {
    "url": "assets/js/171.js",
    "revision": "1358c7592eb305afea610e04b0267856"
  },
  {
    "url": "assets/js/172.js",
    "revision": "ab8284f10849383155a13e12f2a6c103"
  },
  {
    "url": "assets/js/173.js",
    "revision": "409f357d6634018fa3d2f168b4244420"
  },
  {
    "url": "assets/js/174.js",
    "revision": "daa60fa1a0deccdf773b70634d3e96d8"
  },
  {
    "url": "assets/js/175.js",
    "revision": "d15f615cf6c73cd833cd926327457dd3"
  },
  {
    "url": "assets/js/176.js",
    "revision": "a422ece66e80de1b2994768dbf6f41f3"
  },
  {
    "url": "assets/js/177.js",
    "revision": "f8cfec29ece757c79d2975c153028840"
  },
  {
    "url": "assets/js/178.js",
    "revision": "60ce30019f0f8db039914cb5a5d64829"
  },
  {
    "url": "assets/js/179.js",
    "revision": "f4e8a626968bb4e916cfe68132d431f8"
  },
  {
    "url": "assets/js/18.js",
    "revision": "44e726bb95cd31fd6f45324e0fad3a7a"
  },
  {
    "url": "assets/js/180.js",
    "revision": "7749bad765a1e8d0c471c1773a9509b6"
  },
  {
    "url": "assets/js/181.js",
    "revision": "5cdb3f643f07053c621f09be2ba82c43"
  },
  {
    "url": "assets/js/182.js",
    "revision": "135e157ddbbfcdd7ff5cc3dad557dc7b"
  },
  {
    "url": "assets/js/183.js",
    "revision": "df841ea936ec24f7cc4531189fea610e"
  },
  {
    "url": "assets/js/184.js",
    "revision": "54cae9f17502b3717550a35ba1a2a71a"
  },
  {
    "url": "assets/js/185.js",
    "revision": "aed92a08a6ade37e2cf21d62badb279d"
  },
  {
    "url": "assets/js/186.js",
    "revision": "d762ab144c37f2998e49c6875b267bb2"
  },
  {
    "url": "assets/js/187.js",
    "revision": "9c0e49ddc3acd5d1d82cc4b085ffac25"
  },
  {
    "url": "assets/js/188.js",
    "revision": "5b9817528792fcb356782da8a645b497"
  },
  {
    "url": "assets/js/189.js",
    "revision": "37674f79b77b30f66a5404972404bcc7"
  },
  {
    "url": "assets/js/19.js",
    "revision": "43caa2f35d75b3ec54f5ac656b65fadb"
  },
  {
    "url": "assets/js/190.js",
    "revision": "f4749610fa6f0ffc1e1b6bf5b759d56e"
  },
  {
    "url": "assets/js/191.js",
    "revision": "6a74fccdb91cd029c078629986a7373c"
  },
  {
    "url": "assets/js/192.js",
    "revision": "edb9298a040e9756e17084921933cfc1"
  },
  {
    "url": "assets/js/193.js",
    "revision": "4b757d949b16e0a9408e28241d45a7b3"
  },
  {
    "url": "assets/js/194.js",
    "revision": "8d5d5960c0c388683489e69ead612b8c"
  },
  {
    "url": "assets/js/195.js",
    "revision": "2f82b6121249c3594a972ffa6537e495"
  },
  {
    "url": "assets/js/196.js",
    "revision": "c26acf286886b180ecea6006c9244c58"
  },
  {
    "url": "assets/js/197.js",
    "revision": "ff860ab763f1d0634a817667574e5382"
  },
  {
    "url": "assets/js/198.js",
    "revision": "9f9769eb9f543ded4eaec1ab0454a389"
  },
  {
    "url": "assets/js/199.js",
    "revision": "e0ea53595964a3fefe3002cacec0d2e0"
  },
  {
    "url": "assets/js/2.js",
    "revision": "5419b909bbb31d33485484f7a5c864c0"
  },
  {
    "url": "assets/js/20.js",
    "revision": "8e2005a5ac46a8c6d39669e8df339139"
  },
  {
    "url": "assets/js/200.js",
    "revision": "698197b3e0c25925f095f36773fbd4e2"
  },
  {
    "url": "assets/js/201.js",
    "revision": "5789b1f36bcab38f1496c5599fa0b48c"
  },
  {
    "url": "assets/js/202.js",
    "revision": "747549c639e9eba30dce5d948a8851d7"
  },
  {
    "url": "assets/js/203.js",
    "revision": "fbdcc8bb02ea2803d6d480d4ddfd6410"
  },
  {
    "url": "assets/js/204.js",
    "revision": "33f4fdb61314f8b6fe59d50ac0f0a3ce"
  },
  {
    "url": "assets/js/205.js",
    "revision": "fc53b1a9ba9785096939fc50bef33161"
  },
  {
    "url": "assets/js/206.js",
    "revision": "d390c399eaf811382349ab5e0a3507ad"
  },
  {
    "url": "assets/js/207.js",
    "revision": "7f52dcc87addb83f080cb1bfe325c140"
  },
  {
    "url": "assets/js/208.js",
    "revision": "91543091c5ea30c860bd4f6f318de488"
  },
  {
    "url": "assets/js/209.js",
    "revision": "0700e68a791692bd1585f33a29739479"
  },
  {
    "url": "assets/js/21.js",
    "revision": "450d466ac8db63a00db03af8e7286ffe"
  },
  {
    "url": "assets/js/210.js",
    "revision": "86fcd74601f6ed6b616c54074b5eab59"
  },
  {
    "url": "assets/js/211.js",
    "revision": "6c50e32ac09eaeaa1c5728d37900b922"
  },
  {
    "url": "assets/js/212.js",
    "revision": "ed48f74e11e703f20012580d4fb7dc44"
  },
  {
    "url": "assets/js/213.js",
    "revision": "361c32f255498c972daf0a7e6513d132"
  },
  {
    "url": "assets/js/214.js",
    "revision": "6cebfa7bb9fc5d2d5a3592e5dd3eb43f"
  },
  {
    "url": "assets/js/215.js",
    "revision": "6a140fbf4518a3ec38e2ef8df3e9ee1c"
  },
  {
    "url": "assets/js/216.js",
    "revision": "ca9a947cc159a1a94260db8c1eab45d6"
  },
  {
    "url": "assets/js/217.js",
    "revision": "355d8257abc9efa165f082e5ffab6c7e"
  },
  {
    "url": "assets/js/218.js",
    "revision": "3d627eac58b307e3914a1e214c21ae84"
  },
  {
    "url": "assets/js/219.js",
    "revision": "b35fa2eb23dd3ac964fcf4c9a1764102"
  },
  {
    "url": "assets/js/22.js",
    "revision": "0b50ad64de65d27f39e1c8e065f15833"
  },
  {
    "url": "assets/js/220.js",
    "revision": "d8d7ab755a6e0cb4558472bace516846"
  },
  {
    "url": "assets/js/221.js",
    "revision": "bdc7a3b893c1078aeaa0b1797e5e36e1"
  },
  {
    "url": "assets/js/222.js",
    "revision": "0ad704835275ee8aa5464b20fe7e08b9"
  },
  {
    "url": "assets/js/223.js",
    "revision": "d9eb184f776ee8afd52feda94a581d69"
  },
  {
    "url": "assets/js/224.js",
    "revision": "60c7b0adea5674614563359f1300138c"
  },
  {
    "url": "assets/js/225.js",
    "revision": "f3019a6e681f61797b5286f10685e707"
  },
  {
    "url": "assets/js/226.js",
    "revision": "24c091858df50fcf81bc585e87190c1d"
  },
  {
    "url": "assets/js/227.js",
    "revision": "880bf3d3d4a3fb4e9d290f02509d5153"
  },
  {
    "url": "assets/js/228.js",
    "revision": "933de1d35caf034637bf17018c44bd18"
  },
  {
    "url": "assets/js/229.js",
    "revision": "2d54fd269653ad39be6978460fdadd53"
  },
  {
    "url": "assets/js/23.js",
    "revision": "0cdbea71b7da7934943c868dc251eef3"
  },
  {
    "url": "assets/js/230.js",
    "revision": "5215c6a09dbc89d073be71d7da36bbf2"
  },
  {
    "url": "assets/js/231.js",
    "revision": "0ad77758fc78aaad582da0d4b5ae4f48"
  },
  {
    "url": "assets/js/232.js",
    "revision": "6b250a1c7ed43d8fb27bb5622a4c048d"
  },
  {
    "url": "assets/js/233.js",
    "revision": "3bc22fb50942bddaaee92117e980679f"
  },
  {
    "url": "assets/js/234.js",
    "revision": "ec0fd36bdac25510dc2d598992b0636e"
  },
  {
    "url": "assets/js/235.js",
    "revision": "c83d6df797404830955e64a4e0fc623e"
  },
  {
    "url": "assets/js/236.js",
    "revision": "7886d23ec569e420b79da65575de7755"
  },
  {
    "url": "assets/js/237.js",
    "revision": "7a950ba77fbfbb47d2118fe7d521183f"
  },
  {
    "url": "assets/js/238.js",
    "revision": "537d50c9a8b0b50ec63eaee9eadf8f37"
  },
  {
    "url": "assets/js/239.js",
    "revision": "f6f55de28e03d38eee0698a132dd36b7"
  },
  {
    "url": "assets/js/24.js",
    "revision": "43def503e22c8158640fc5b612cae9d9"
  },
  {
    "url": "assets/js/240.js",
    "revision": "027e5126dc7ad522a2fb376d81718843"
  },
  {
    "url": "assets/js/241.js",
    "revision": "3b1f077251c536974d1690a97535df45"
  },
  {
    "url": "assets/js/242.js",
    "revision": "22ffb1982c30470c37a35c7e02154419"
  },
  {
    "url": "assets/js/243.js",
    "revision": "46e04ea6990df364cc433fd07130607f"
  },
  {
    "url": "assets/js/244.js",
    "revision": "7ae2a0a88433121fc775c33945df50e7"
  },
  {
    "url": "assets/js/245.js",
    "revision": "052b44bd421a86d3619f92d13a192970"
  },
  {
    "url": "assets/js/246.js",
    "revision": "7154845f56787c11a68668a4a79717d1"
  },
  {
    "url": "assets/js/247.js",
    "revision": "dad2068e181a33b05167ea057bc93299"
  },
  {
    "url": "assets/js/248.js",
    "revision": "7bd100799bcc8725531c0d3140a3734e"
  },
  {
    "url": "assets/js/249.js",
    "revision": "5634aaa616482680199d0797913219dd"
  },
  {
    "url": "assets/js/25.js",
    "revision": "11c055be0783f7dd747ca67b950eb16e"
  },
  {
    "url": "assets/js/250.js",
    "revision": "b9dc47a95a223486364e394975845bcc"
  },
  {
    "url": "assets/js/251.js",
    "revision": "4d2d1b26cedf1a416221defbe9d3e260"
  },
  {
    "url": "assets/js/252.js",
    "revision": "df551eca5c0c5dcd772866091b3e92fa"
  },
  {
    "url": "assets/js/253.js",
    "revision": "2884cfb2433569ca2101c937e401b891"
  },
  {
    "url": "assets/js/254.js",
    "revision": "762ada7d0d9738d1b9dfb1eb242c51e7"
  },
  {
    "url": "assets/js/255.js",
    "revision": "b2b76a9130e393ea9a077557c2436500"
  },
  {
    "url": "assets/js/256.js",
    "revision": "b20da159da6eb1e339964bd7529c8a4b"
  },
  {
    "url": "assets/js/257.js",
    "revision": "985f59e1d160861754cd819f69007d48"
  },
  {
    "url": "assets/js/258.js",
    "revision": "8543706ae8f1977be3642fea02cab727"
  },
  {
    "url": "assets/js/259.js",
    "revision": "dc817561bc37f894c631908797bb4bee"
  },
  {
    "url": "assets/js/26.js",
    "revision": "121410c21f4634e39a6a7995eaec2592"
  },
  {
    "url": "assets/js/260.js",
    "revision": "82e855bd3fd5d82674c577fccb10a90b"
  },
  {
    "url": "assets/js/261.js",
    "revision": "8533eee358ff3fdf3046e00269fe20f9"
  },
  {
    "url": "assets/js/262.js",
    "revision": "027c18231d7bb03e33acd358259d3b6f"
  },
  {
    "url": "assets/js/263.js",
    "revision": "d74c855d886216c8f248eaf3219d5bea"
  },
  {
    "url": "assets/js/264.js",
    "revision": "e72bce86e617949e442ef4582d458f9a"
  },
  {
    "url": "assets/js/265.js",
    "revision": "ba31ddb639f2c54f9b78c8e44f551d2a"
  },
  {
    "url": "assets/js/266.js",
    "revision": "62e7cb335ddac2e461c618e74afe6412"
  },
  {
    "url": "assets/js/267.js",
    "revision": "a6d5f5d7682f4949c366450e010bb83b"
  },
  {
    "url": "assets/js/268.js",
    "revision": "d2ee1644340f45b96181c7fac71c2b5c"
  },
  {
    "url": "assets/js/269.js",
    "revision": "e4846562148ccf5cf4dbc9b968a27244"
  },
  {
    "url": "assets/js/27.js",
    "revision": "1ea6a70f8050dfb2c614aa9fdc8a594b"
  },
  {
    "url": "assets/js/270.js",
    "revision": "fbfe74f0c6ed15da19dbbe545d4c2bcf"
  },
  {
    "url": "assets/js/271.js",
    "revision": "76aa33ac72a6356474de8f27c44e6958"
  },
  {
    "url": "assets/js/272.js",
    "revision": "521b5a764abc5b823104371bd0af7969"
  },
  {
    "url": "assets/js/273.js",
    "revision": "c6f6bda7bebe20ca9c543a17aab2538a"
  },
  {
    "url": "assets/js/274.js",
    "revision": "aecebdd96aba0c3e426a25533c7035d3"
  },
  {
    "url": "assets/js/275.js",
    "revision": "953ce1a82fc206ce7b0c547a8eaf0cee"
  },
  {
    "url": "assets/js/276.js",
    "revision": "f363832d66231efb3f929a5217d3195b"
  },
  {
    "url": "assets/js/277.js",
    "revision": "1f79c7a15e2713baa0e7380d2357f346"
  },
  {
    "url": "assets/js/278.js",
    "revision": "2b800e3a29d74324dc570c913ea7a26b"
  },
  {
    "url": "assets/js/279.js",
    "revision": "cdfae3117b00fda0d3fa3153614608e7"
  },
  {
    "url": "assets/js/28.js",
    "revision": "c7d73238b2f0b9efff64e76929981bb2"
  },
  {
    "url": "assets/js/280.js",
    "revision": "a3b17966747f7ea14466501f422c0410"
  },
  {
    "url": "assets/js/281.js",
    "revision": "dcf7faaff1a980b9b34f050448f90b13"
  },
  {
    "url": "assets/js/282.js",
    "revision": "3a0a5d68365f142edf1aa5cdec2a932a"
  },
  {
    "url": "assets/js/283.js",
    "revision": "5f9e85f7bf33e2c07343a34c2dcb570a"
  },
  {
    "url": "assets/js/284.js",
    "revision": "521094122366bfb4f30627170939fa55"
  },
  {
    "url": "assets/js/285.js",
    "revision": "8cbeb44ca4cb8f92be3fb54a7a60898b"
  },
  {
    "url": "assets/js/286.js",
    "revision": "8047791308ed184fbf9287a97ba42254"
  },
  {
    "url": "assets/js/287.js",
    "revision": "5088a09bf32f43624befceadd036c4a4"
  },
  {
    "url": "assets/js/288.js",
    "revision": "f04e81fdcdef480c361af7613ef66fc5"
  },
  {
    "url": "assets/js/289.js",
    "revision": "c574596b1d2650d0c88eca2a62e75beb"
  },
  {
    "url": "assets/js/29.js",
    "revision": "16dc0bf3c9436aaf7a3e915a89abba4e"
  },
  {
    "url": "assets/js/290.js",
    "revision": "721d085e79eb4ff2851a4d4e866f78d1"
  },
  {
    "url": "assets/js/291.js",
    "revision": "35fd5db45cf4d13a7337868e029d100e"
  },
  {
    "url": "assets/js/292.js",
    "revision": "e010c7d57410c65ea7b6dde6b4c090c2"
  },
  {
    "url": "assets/js/293.js",
    "revision": "27fd7ced4418e25b5bede109239491ee"
  },
  {
    "url": "assets/js/294.js",
    "revision": "881a45d5514182d3642a91e8b18214f9"
  },
  {
    "url": "assets/js/295.js",
    "revision": "05393c704f52c3e6bd4c3aa2723941f7"
  },
  {
    "url": "assets/js/296.js",
    "revision": "60c6f21c2a2bc07dd022352201b9a7b6"
  },
  {
    "url": "assets/js/297.js",
    "revision": "d77b6fafb0948fc721d8be7a50b8764f"
  },
  {
    "url": "assets/js/298.js",
    "revision": "54bd56ffcf354af61ed86e1efeae747b"
  },
  {
    "url": "assets/js/299.js",
    "revision": "34cf419b54160c3901038c0336b7e6e1"
  },
  {
    "url": "assets/js/3.js",
    "revision": "7047c98a97e89e93677efa80aac30fee"
  },
  {
    "url": "assets/js/30.js",
    "revision": "072bc1522430736d0eb0d92cf7cf1172"
  },
  {
    "url": "assets/js/300.js",
    "revision": "f7dfc285bac994329e2cd147ecdb4d08"
  },
  {
    "url": "assets/js/301.js",
    "revision": "75127f922849949f2d923282a050daed"
  },
  {
    "url": "assets/js/302.js",
    "revision": "f25763281c6f3eab55dbcf044f8791d6"
  },
  {
    "url": "assets/js/303.js",
    "revision": "4c0dabc9354457478b98937c1e9cbfd6"
  },
  {
    "url": "assets/js/304.js",
    "revision": "30ec34561f75139e024d3507d8959996"
  },
  {
    "url": "assets/js/305.js",
    "revision": "4b28ccf1f6955318d0eb24cf6fc74dc0"
  },
  {
    "url": "assets/js/306.js",
    "revision": "fef135aaa4018cc830ef3cf7927d4808"
  },
  {
    "url": "assets/js/307.js",
    "revision": "df219360bcedf5cb9c820b8b8604398e"
  },
  {
    "url": "assets/js/308.js",
    "revision": "3d9cd9dfc96551b967b5860c47dc412f"
  },
  {
    "url": "assets/js/309.js",
    "revision": "166d994c5fcf06e2238da30a997b4382"
  },
  {
    "url": "assets/js/31.js",
    "revision": "9817560aa5e0e1666e248fdb8572cc70"
  },
  {
    "url": "assets/js/310.js",
    "revision": "6d9218faea40fe56cb280345e5da037f"
  },
  {
    "url": "assets/js/311.js",
    "revision": "5af0bdd4e22f99e5a7a4227ee6f282c4"
  },
  {
    "url": "assets/js/312.js",
    "revision": "6c720d58a580851762f849d57a7d80b2"
  },
  {
    "url": "assets/js/313.js",
    "revision": "2c2e367853aa2d89b05cc4c990a5d5d2"
  },
  {
    "url": "assets/js/314.js",
    "revision": "d917259b819f9dbd99127a94e67120a5"
  },
  {
    "url": "assets/js/315.js",
    "revision": "cf9771dc16931cd7c7afd9e7c0b4b01e"
  },
  {
    "url": "assets/js/316.js",
    "revision": "674ffed2b36e7f82aaae5acf84cf3184"
  },
  {
    "url": "assets/js/317.js",
    "revision": "92de076385707eccf01e35fd8c2ebe66"
  },
  {
    "url": "assets/js/318.js",
    "revision": "cc71141dc8ef8f4b94d101b91967fcc5"
  },
  {
    "url": "assets/js/319.js",
    "revision": "2de2b037939477bccffbd0058d4ee025"
  },
  {
    "url": "assets/js/32.js",
    "revision": "61a12821232cb7666d8261069e0e4347"
  },
  {
    "url": "assets/js/320.js",
    "revision": "4ecf3f45145afe736ad546d3c13c5e50"
  },
  {
    "url": "assets/js/321.js",
    "revision": "c6d47d143e0eb396a1229ec0e25981b8"
  },
  {
    "url": "assets/js/322.js",
    "revision": "f074aeb90a6d77dc0f2570e80fa63977"
  },
  {
    "url": "assets/js/323.js",
    "revision": "8618887aa4b81200a35e1a15a55b5d2c"
  },
  {
    "url": "assets/js/324.js",
    "revision": "1242f2b5b7e80976228de0d69fe54e29"
  },
  {
    "url": "assets/js/325.js",
    "revision": "68d1796527cda51fd656c888baf122a1"
  },
  {
    "url": "assets/js/326.js",
    "revision": "8d3372ba8207530996b169cce5a31a6f"
  },
  {
    "url": "assets/js/327.js",
    "revision": "18ef170182b9fe573452b35e264ad4da"
  },
  {
    "url": "assets/js/328.js",
    "revision": "0af8e5f8679e58ffae539ea3f85e44d4"
  },
  {
    "url": "assets/js/329.js",
    "revision": "a3f071b83ba32f88e669a1c1cdafd707"
  },
  {
    "url": "assets/js/33.js",
    "revision": "01e8e58422bd9d32d864bb391a703c46"
  },
  {
    "url": "assets/js/330.js",
    "revision": "5cae22ddee668514b3c9a9972fecca62"
  },
  {
    "url": "assets/js/331.js",
    "revision": "59e0bf143b60d4e20e31f6feac857035"
  },
  {
    "url": "assets/js/332.js",
    "revision": "79aedaf16105cbe1fc3a27c89270a96b"
  },
  {
    "url": "assets/js/333.js",
    "revision": "02fbf806d7805526283fc4fb109f6ee8"
  },
  {
    "url": "assets/js/334.js",
    "revision": "3f05a9fb998bb4d443e4f0354c6f8e42"
  },
  {
    "url": "assets/js/335.js",
    "revision": "e37ad3b7c79b62afbf1c9dd7cce562c5"
  },
  {
    "url": "assets/js/336.js",
    "revision": "deb25a222bc6d53372fd334ff25a8a3f"
  },
  {
    "url": "assets/js/337.js",
    "revision": "e43c4b28966b116319540fb575d50d10"
  },
  {
    "url": "assets/js/338.js",
    "revision": "8206fc61e87bde15aa72f4f40f331f87"
  },
  {
    "url": "assets/js/339.js",
    "revision": "2acb833864aef3a5313c9cfe07c61530"
  },
  {
    "url": "assets/js/34.js",
    "revision": "f2412fed8abe78dce6363428157181c9"
  },
  {
    "url": "assets/js/340.js",
    "revision": "f7dcbf64b507bd3c1ccc464440d17b2c"
  },
  {
    "url": "assets/js/341.js",
    "revision": "1d8de2a016fa31a4b89c6d2aa1b9c8b8"
  },
  {
    "url": "assets/js/342.js",
    "revision": "7eecbaf5f3f995a9e82a6f4316f1764d"
  },
  {
    "url": "assets/js/343.js",
    "revision": "5893d8c81dbf8f4462802295ce9ada8d"
  },
  {
    "url": "assets/js/344.js",
    "revision": "7fb40ceba4f9ff4c912b0d314cd1941d"
  },
  {
    "url": "assets/js/345.js",
    "revision": "1a31d8a996fbb2e3a95e8d62827ab1e7"
  },
  {
    "url": "assets/js/346.js",
    "revision": "f2e874b0d6b7c41f884074cfc6fb92ab"
  },
  {
    "url": "assets/js/347.js",
    "revision": "875dfcf5cb1daf9adbe37d861dfce6be"
  },
  {
    "url": "assets/js/348.js",
    "revision": "f85539eeb2e1d399605583339d08b932"
  },
  {
    "url": "assets/js/349.js",
    "revision": "eea1672287e179b7ee12f97cac365df7"
  },
  {
    "url": "assets/js/35.js",
    "revision": "f800ba5a5e04e911473d35abaf10f5df"
  },
  {
    "url": "assets/js/350.js",
    "revision": "7b98fe04ffd7def0e1b0d3abc170cfa3"
  },
  {
    "url": "assets/js/351.js",
    "revision": "8f8e80b69748f81aa9f3df61aad72a28"
  },
  {
    "url": "assets/js/352.js",
    "revision": "894e658700f4a8358682a9a501ec228a"
  },
  {
    "url": "assets/js/353.js",
    "revision": "391da36947902a0d2c9221bc48fa5ff0"
  },
  {
    "url": "assets/js/354.js",
    "revision": "33b28e616260344082ef6b04dd3d838f"
  },
  {
    "url": "assets/js/355.js",
    "revision": "3074c153fd9c2dba72234ebb7e2532b4"
  },
  {
    "url": "assets/js/356.js",
    "revision": "ae2381befba089f1468a9d8b5bcfcfd3"
  },
  {
    "url": "assets/js/357.js",
    "revision": "d203d41c1fefe46733c23b4f7a481729"
  },
  {
    "url": "assets/js/358.js",
    "revision": "14870bcbaf4c9cb270caa98db72a0c2a"
  },
  {
    "url": "assets/js/359.js",
    "revision": "15c26660af2fbc80372c56a1d8596c75"
  },
  {
    "url": "assets/js/36.js",
    "revision": "efb2a42cb788e4df27f784eb8416a70c"
  },
  {
    "url": "assets/js/360.js",
    "revision": "d4452a2ee254dbe09e7b3be811e826bc"
  },
  {
    "url": "assets/js/361.js",
    "revision": "0ce896d7781c856c3619eeb0ca321e95"
  },
  {
    "url": "assets/js/362.js",
    "revision": "f14b81615526b237407cfb50226521ae"
  },
  {
    "url": "assets/js/363.js",
    "revision": "13492df9cfe4b57f8cada7b3189c0d0b"
  },
  {
    "url": "assets/js/364.js",
    "revision": "83cb7f0fe602f9f1a8a0c02c5ab96781"
  },
  {
    "url": "assets/js/365.js",
    "revision": "11548386da796b2d1cad5d96a8e71e04"
  },
  {
    "url": "assets/js/366.js",
    "revision": "cb07b88886bfcea1b2fda07f213dc5d1"
  },
  {
    "url": "assets/js/367.js",
    "revision": "54bae0464649a871579f2b6ad20405b2"
  },
  {
    "url": "assets/js/368.js",
    "revision": "8bf40101206976365ec9aa9eb304625c"
  },
  {
    "url": "assets/js/369.js",
    "revision": "fd44b6f439fca8600774368859f0c71d"
  },
  {
    "url": "assets/js/37.js",
    "revision": "48baccf73e9cce571edd4da4fab140c4"
  },
  {
    "url": "assets/js/370.js",
    "revision": "ad836cdf74056521a64a730ed6fe1130"
  },
  {
    "url": "assets/js/371.js",
    "revision": "8070f507b3eccf003c32fb6b95731439"
  },
  {
    "url": "assets/js/372.js",
    "revision": "8cec8db8e18c338e1bdef20162752a36"
  },
  {
    "url": "assets/js/373.js",
    "revision": "65a1997cc626ee170b1090304bb12891"
  },
  {
    "url": "assets/js/374.js",
    "revision": "e906b7d5574c1ec40c80b9124fd53151"
  },
  {
    "url": "assets/js/375.js",
    "revision": "8444eda46a71535120231eff80c3662d"
  },
  {
    "url": "assets/js/376.js",
    "revision": "7930dfaf9387e428a6b8d44ac8da4c76"
  },
  {
    "url": "assets/js/377.js",
    "revision": "1252ac4739d93cc11d7410a3244c1dac"
  },
  {
    "url": "assets/js/378.js",
    "revision": "abe8e62a0fcab94b692d0945887e6295"
  },
  {
    "url": "assets/js/379.js",
    "revision": "f63067e91203d7048e35d37ff543d01b"
  },
  {
    "url": "assets/js/38.js",
    "revision": "7a605394cd04b861b27570f27e999ead"
  },
  {
    "url": "assets/js/380.js",
    "revision": "8ef2679dfae61b098871bec055ee53ee"
  },
  {
    "url": "assets/js/381.js",
    "revision": "ff2b7839e335bba4d70d81361da87c98"
  },
  {
    "url": "assets/js/382.js",
    "revision": "d42fea7ceeff9ee8c84b71a2728c9cdb"
  },
  {
    "url": "assets/js/383.js",
    "revision": "43bbab5c442b557d17f23b8ef39f46a3"
  },
  {
    "url": "assets/js/384.js",
    "revision": "abe17e306aa77f860072236321889b65"
  },
  {
    "url": "assets/js/385.js",
    "revision": "f326a166838d58767ddb51aa83a7d4b4"
  },
  {
    "url": "assets/js/386.js",
    "revision": "f704868140a2385994dc59dbfad6b669"
  },
  {
    "url": "assets/js/387.js",
    "revision": "68ffed475778b2ddee8f5467689a41e5"
  },
  {
    "url": "assets/js/388.js",
    "revision": "5bce021240b4d71f80f6edef334c3929"
  },
  {
    "url": "assets/js/389.js",
    "revision": "302b6101ce23cbda375d2c98c97e77eb"
  },
  {
    "url": "assets/js/39.js",
    "revision": "430f610ddd3db2545362babdfe0b2216"
  },
  {
    "url": "assets/js/390.js",
    "revision": "b070bfa3444a3513bf811066e6bc1228"
  },
  {
    "url": "assets/js/391.js",
    "revision": "0ec9cba3941587e96c21ebb8a4c4722a"
  },
  {
    "url": "assets/js/392.js",
    "revision": "8a121770f70fca3aff74d346c8720db0"
  },
  {
    "url": "assets/js/393.js",
    "revision": "cc1fcab364ad1e51fb4b96a943315c7c"
  },
  {
    "url": "assets/js/394.js",
    "revision": "834cdb397d1775890e94b93c1f45fac1"
  },
  {
    "url": "assets/js/395.js",
    "revision": "98a275aa3e104fb78abf30120940cb20"
  },
  {
    "url": "assets/js/396.js",
    "revision": "4ab4dbd2bfc8c1f9cc5afb7ab811e071"
  },
  {
    "url": "assets/js/397.js",
    "revision": "172c7a594e397fba7912330691fc02f0"
  },
  {
    "url": "assets/js/398.js",
    "revision": "a77feac0403a62dca9a9ae7a5225382c"
  },
  {
    "url": "assets/js/399.js",
    "revision": "451e341e0ebc92a2685f0b5e86d9fd44"
  },
  {
    "url": "assets/js/4.js",
    "revision": "3f4e7e04cee49a90148ee8345e461fbe"
  },
  {
    "url": "assets/js/40.js",
    "revision": "5b696c58879bb31ebafbd3f8d0f9bde5"
  },
  {
    "url": "assets/js/400.js",
    "revision": "44410d7e72ffe60784e1286aea324e85"
  },
  {
    "url": "assets/js/401.js",
    "revision": "4e4e7109a813b49b3e28b84d8b2fb595"
  },
  {
    "url": "assets/js/402.js",
    "revision": "143eb2ae60e74423e918a1756e19c9b6"
  },
  {
    "url": "assets/js/403.js",
    "revision": "03e1fc41973aff9d9a5f53708b41e9bb"
  },
  {
    "url": "assets/js/404.js",
    "revision": "7f4c7bd9ec940d5668ecd7987d721e7c"
  },
  {
    "url": "assets/js/405.js",
    "revision": "2aa083158f89b4c6c53f36de4f282683"
  },
  {
    "url": "assets/js/406.js",
    "revision": "f432a88effa43c9d1b88dc2bc0632e93"
  },
  {
    "url": "assets/js/407.js",
    "revision": "f5250061b370fe533e3234c7da3b90f2"
  },
  {
    "url": "assets/js/408.js",
    "revision": "cb87d7026f72ac89b3f88410525a9f24"
  },
  {
    "url": "assets/js/409.js",
    "revision": "20a5a677bbae67f3043287d3d7ada45c"
  },
  {
    "url": "assets/js/41.js",
    "revision": "ac21e4f52bbb8da4f611bcc2cad8ffe0"
  },
  {
    "url": "assets/js/410.js",
    "revision": "7104f9481eb984aae7c7d974abefc83f"
  },
  {
    "url": "assets/js/411.js",
    "revision": "55adcf0cc46a1c5542537a303753f0ec"
  },
  {
    "url": "assets/js/412.js",
    "revision": "337418bbb8129439a76d7f5168b557f0"
  },
  {
    "url": "assets/js/413.js",
    "revision": "36885e74878ea136dc94e46fa1d5e0cd"
  },
  {
    "url": "assets/js/414.js",
    "revision": "db6d749f47250549d39f155b25dae95c"
  },
  {
    "url": "assets/js/415.js",
    "revision": "eefbda1cbadeb24298ad9bcffcef9957"
  },
  {
    "url": "assets/js/416.js",
    "revision": "7fd855334bf682d94bbfba2be042114f"
  },
  {
    "url": "assets/js/417.js",
    "revision": "1152eac83091affb3301afb7fef022ae"
  },
  {
    "url": "assets/js/418.js",
    "revision": "f91ee938fc19e1774ab23df9e07c331c"
  },
  {
    "url": "assets/js/419.js",
    "revision": "347eb7bf88ebadaf179c2508e5fafa73"
  },
  {
    "url": "assets/js/42.js",
    "revision": "9fa7e2c3298d8c9df13a3741da888fdb"
  },
  {
    "url": "assets/js/420.js",
    "revision": "2b6879bac04464312136bd0e697a24ad"
  },
  {
    "url": "assets/js/421.js",
    "revision": "eae3fc08517b314a79ae486f92439a2f"
  },
  {
    "url": "assets/js/422.js",
    "revision": "4b1bb3a5936c817203ee4f44037fba8d"
  },
  {
    "url": "assets/js/423.js",
    "revision": "2452efb5407845e82b80647e682ce296"
  },
  {
    "url": "assets/js/424.js",
    "revision": "cba531074c9ab8443313f18b9c75c50e"
  },
  {
    "url": "assets/js/425.js",
    "revision": "5bb60e10aa5be4201b7ee38854667e8e"
  },
  {
    "url": "assets/js/426.js",
    "revision": "f4ab42a51cc8127d0a5fa415649af3ef"
  },
  {
    "url": "assets/js/427.js",
    "revision": "3cb23fd552b656be56b99df9a497ec18"
  },
  {
    "url": "assets/js/428.js",
    "revision": "e10a1e64056591884c8d8406c170f9ad"
  },
  {
    "url": "assets/js/429.js",
    "revision": "7efdb91fc64090305080a7d47a6b7eff"
  },
  {
    "url": "assets/js/43.js",
    "revision": "dcf34ced5a9e5f4c90483b1b6a4573ce"
  },
  {
    "url": "assets/js/430.js",
    "revision": "0bce9c8111428846067adda9dc8e7e2d"
  },
  {
    "url": "assets/js/431.js",
    "revision": "94dcf256952bd6e068f903aab734dd8e"
  },
  {
    "url": "assets/js/432.js",
    "revision": "d13bf2260ecb42bffd4b6be062690d5a"
  },
  {
    "url": "assets/js/433.js",
    "revision": "5616cf26e40bd4fb6c8a256d9f9b0554"
  },
  {
    "url": "assets/js/434.js",
    "revision": "be94657bf43e4f7bb3264327d06a77fe"
  },
  {
    "url": "assets/js/435.js",
    "revision": "061adced9356e1de5997e95916d78419"
  },
  {
    "url": "assets/js/436.js",
    "revision": "a78cc305b1234e88edb95712adc1e93d"
  },
  {
    "url": "assets/js/437.js",
    "revision": "a548b95bb1de449e8920ef4abf06d4b3"
  },
  {
    "url": "assets/js/438.js",
    "revision": "43bf393dd8a578fae2678052f8c3c9f5"
  },
  {
    "url": "assets/js/439.js",
    "revision": "e08b40ccf9eb12cdb09453479c1125ff"
  },
  {
    "url": "assets/js/44.js",
    "revision": "5eb656e30869f66c683ec0968b2828df"
  },
  {
    "url": "assets/js/440.js",
    "revision": "c9ddc1debb1ff4c28db319ff9a600eae"
  },
  {
    "url": "assets/js/441.js",
    "revision": "dc4287c775f270c1d13c3e8491924ac9"
  },
  {
    "url": "assets/js/442.js",
    "revision": "af03c8b80bd26f8b27380e27261bd635"
  },
  {
    "url": "assets/js/443.js",
    "revision": "18e7e586118ff5fcea4806ab0b592744"
  },
  {
    "url": "assets/js/444.js",
    "revision": "f2d7649955c65a84a34f830050121760"
  },
  {
    "url": "assets/js/445.js",
    "revision": "b8ef94abd25a136fb63ba76c017f6c9a"
  },
  {
    "url": "assets/js/446.js",
    "revision": "bf2fd9a7f011639a90848a8d999431ac"
  },
  {
    "url": "assets/js/447.js",
    "revision": "7330d77ee3b223b381b3a001d610818b"
  },
  {
    "url": "assets/js/448.js",
    "revision": "1669282d53c6de6af062624fdea313a5"
  },
  {
    "url": "assets/js/449.js",
    "revision": "c413c34ba0694794b9bd35e91b99df5d"
  },
  {
    "url": "assets/js/45.js",
    "revision": "53805914a82c4a2c65ed153094d3ba89"
  },
  {
    "url": "assets/js/450.js",
    "revision": "41d6a062159008a0503fc872ed39f246"
  },
  {
    "url": "assets/js/451.js",
    "revision": "2d87765dbe7300d57d32b23ef94ce619"
  },
  {
    "url": "assets/js/452.js",
    "revision": "19620ced173174ef530e56e1af57116d"
  },
  {
    "url": "assets/js/453.js",
    "revision": "1c4d82b03284df41cb64ace120877531"
  },
  {
    "url": "assets/js/454.js",
    "revision": "c6964d733ad59b36a11fa351e39b1b03"
  },
  {
    "url": "assets/js/455.js",
    "revision": "859bebe841c36d39595a465a518780c4"
  },
  {
    "url": "assets/js/456.js",
    "revision": "1618ad46f617591ba2cd81c31d4b7669"
  },
  {
    "url": "assets/js/457.js",
    "revision": "5af844366c7539abaed199a912d385f7"
  },
  {
    "url": "assets/js/458.js",
    "revision": "4420e003ffefbd9da826771ebe1569ed"
  },
  {
    "url": "assets/js/459.js",
    "revision": "d7632216ef9be38f4719d3ba06b39d29"
  },
  {
    "url": "assets/js/46.js",
    "revision": "6621a07bff9e929f07bbd357b489ddd5"
  },
  {
    "url": "assets/js/460.js",
    "revision": "b6576860959cc56ac59fe658a3b94c93"
  },
  {
    "url": "assets/js/461.js",
    "revision": "a6d74846df82a36d1af7c77b69d82472"
  },
  {
    "url": "assets/js/462.js",
    "revision": "b6bc39b2401b5c5cb4ea08900c53f88b"
  },
  {
    "url": "assets/js/463.js",
    "revision": "8eb59709f1b8ad90c518d7f7de445631"
  },
  {
    "url": "assets/js/464.js",
    "revision": "46698bf5349ea8ffb939b963f5df5728"
  },
  {
    "url": "assets/js/465.js",
    "revision": "20906d5718fa87e657b31855514ec932"
  },
  {
    "url": "assets/js/466.js",
    "revision": "e0c48b5e72a8a458588f4efe3ffc3a22"
  },
  {
    "url": "assets/js/467.js",
    "revision": "769b7e3a9f2a078abe0c03d8bf21e850"
  },
  {
    "url": "assets/js/468.js",
    "revision": "a6432a715e47d899dd2a7b4730f60fb6"
  },
  {
    "url": "assets/js/469.js",
    "revision": "a7f0d27bb67cc9c3c23d0ee0c228a2ae"
  },
  {
    "url": "assets/js/47.js",
    "revision": "c6b8c62c79c086dc05afc4f4e914bbf9"
  },
  {
    "url": "assets/js/470.js",
    "revision": "5f69dac91ae549d9b92f39911c74cabc"
  },
  {
    "url": "assets/js/471.js",
    "revision": "16bc6f5eeda07561ccdf6e398939b589"
  },
  {
    "url": "assets/js/472.js",
    "revision": "fa1e9e49dacef1bec778d6547eeef695"
  },
  {
    "url": "assets/js/473.js",
    "revision": "675d70b145e45e1bec8e265c910eb1ae"
  },
  {
    "url": "assets/js/474.js",
    "revision": "9e712752f3888e730f660a98e926bae8"
  },
  {
    "url": "assets/js/475.js",
    "revision": "a377a45dd4e1cc6d9bb20a34f415d50d"
  },
  {
    "url": "assets/js/476.js",
    "revision": "b7a6e29f28806d3e577bd2f197be8b31"
  },
  {
    "url": "assets/js/477.js",
    "revision": "bca7d5963933d89be35f5d411d0c11fe"
  },
  {
    "url": "assets/js/478.js",
    "revision": "e3a23deabad0a528488df99943bf9b9e"
  },
  {
    "url": "assets/js/479.js",
    "revision": "7e3e2e737347b62b3512d1a16a1a80d4"
  },
  {
    "url": "assets/js/48.js",
    "revision": "e25d4f5412e73b2e7f81b0983785fdc9"
  },
  {
    "url": "assets/js/480.js",
    "revision": "f35199428244a5556c6963a4133acb22"
  },
  {
    "url": "assets/js/481.js",
    "revision": "544d627d2f04bb19d5cf591aeb9a9d3f"
  },
  {
    "url": "assets/js/482.js",
    "revision": "014aa95ac09b65e594be6052742772cd"
  },
  {
    "url": "assets/js/483.js",
    "revision": "ef59eae41a9f093021357cb3ec0f7bbd"
  },
  {
    "url": "assets/js/484.js",
    "revision": "4cbefcc1459449267409f19e357938d9"
  },
  {
    "url": "assets/js/485.js",
    "revision": "76d5103fd95c1e17eac15fc0fccb912a"
  },
  {
    "url": "assets/js/486.js",
    "revision": "762e5c2b5e4a0ff0a6dfc88eb9721137"
  },
  {
    "url": "assets/js/487.js",
    "revision": "1f73e52ed9a459fdb51759be25623c52"
  },
  {
    "url": "assets/js/488.js",
    "revision": "d6931354da675d4c530ffdb329d913a3"
  },
  {
    "url": "assets/js/489.js",
    "revision": "35d2403034c2175cddce87fc98388d7d"
  },
  {
    "url": "assets/js/49.js",
    "revision": "79211c01025f6af21e2b03392fda6148"
  },
  {
    "url": "assets/js/490.js",
    "revision": "d65b49c379cec0f9e0667223dfba46e4"
  },
  {
    "url": "assets/js/491.js",
    "revision": "bec12b7f1daf518de3b887eed3287cac"
  },
  {
    "url": "assets/js/492.js",
    "revision": "361373835a09518ed4e81f6f5f868ed0"
  },
  {
    "url": "assets/js/493.js",
    "revision": "187b3e6d57081dafda76abc5a9abb8d3"
  },
  {
    "url": "assets/js/494.js",
    "revision": "8d929ddea8c278436b6337be8956f28c"
  },
  {
    "url": "assets/js/495.js",
    "revision": "fc6b8480e4bce7012f20f25bf8f93e12"
  },
  {
    "url": "assets/js/496.js",
    "revision": "dc7b95c9cd51c05dc18752eae4615fce"
  },
  {
    "url": "assets/js/497.js",
    "revision": "b0e4a7cb6379424d9dd1de9793b1a8ad"
  },
  {
    "url": "assets/js/498.js",
    "revision": "196ddb6df223b6ca70310815979fae21"
  },
  {
    "url": "assets/js/499.js",
    "revision": "c922b2c30da6f90bb9a3655a5fbe8e27"
  },
  {
    "url": "assets/js/50.js",
    "revision": "8a168eb1f488e97f408b6d7eb120e3a6"
  },
  {
    "url": "assets/js/500.js",
    "revision": "2b757087f3bd30e6d36beddfc7cfd811"
  },
  {
    "url": "assets/js/501.js",
    "revision": "d5b7ead890a17daa8240262e4bf972d3"
  },
  {
    "url": "assets/js/502.js",
    "revision": "fef6aa60bed68d9ab30fdadca0af8348"
  },
  {
    "url": "assets/js/503.js",
    "revision": "af292c65fd32da4462989983598c66f5"
  },
  {
    "url": "assets/js/504.js",
    "revision": "8140495fccd62e6646e4fceef5ff9a38"
  },
  {
    "url": "assets/js/505.js",
    "revision": "c648eadd64ae12b6c277e7d6d5bfc616"
  },
  {
    "url": "assets/js/506.js",
    "revision": "c506483465b9719454ce64ed1080dc4b"
  },
  {
    "url": "assets/js/507.js",
    "revision": "6b0465f2eef88ad613bf2f5e37428bd7"
  },
  {
    "url": "assets/js/508.js",
    "revision": "0c26e276f45b7300e4ee5087d2c299a3"
  },
  {
    "url": "assets/js/509.js",
    "revision": "abd5f064bb094d4cf3b6e4b5eb7ec960"
  },
  {
    "url": "assets/js/51.js",
    "revision": "ccf6bad9e64fbc79654613418e5d74b8"
  },
  {
    "url": "assets/js/510.js",
    "revision": "fd293b6a5958b923603ae3c500bcae21"
  },
  {
    "url": "assets/js/511.js",
    "revision": "f6f59891cca22504385252bcfe76a18c"
  },
  {
    "url": "assets/js/512.js",
    "revision": "000752e5b0f696481fc01ba356cc6aae"
  },
  {
    "url": "assets/js/513.js",
    "revision": "bf8cccd931276132319fc518c39b308f"
  },
  {
    "url": "assets/js/514.js",
    "revision": "d978013e18fccf5c363cb5db9d9ccc90"
  },
  {
    "url": "assets/js/515.js",
    "revision": "ce0e27b50e90848918f9b31b499c4cec"
  },
  {
    "url": "assets/js/516.js",
    "revision": "5367c662ed1ee743b6a15be3f096f960"
  },
  {
    "url": "assets/js/517.js",
    "revision": "cac8d091000cc0d6fca30194747c21a4"
  },
  {
    "url": "assets/js/518.js",
    "revision": "bce7673be0e2ab68b65f2cc1b705cb0a"
  },
  {
    "url": "assets/js/519.js",
    "revision": "c626638b52f0a629e5f67499c11079f2"
  },
  {
    "url": "assets/js/52.js",
    "revision": "f749e60ea7a46715aab1d8b4bf3dfbbf"
  },
  {
    "url": "assets/js/520.js",
    "revision": "09b2876a2f90adc1316d2d2f96074561"
  },
  {
    "url": "assets/js/521.js",
    "revision": "a6c8f04b2dcfe5acf0ff603bfb4b340f"
  },
  {
    "url": "assets/js/522.js",
    "revision": "bc4965d1de9ee71bf0cd43014ea683e5"
  },
  {
    "url": "assets/js/523.js",
    "revision": "82de3e20e61502fa82532149b57707b7"
  },
  {
    "url": "assets/js/524.js",
    "revision": "2c0830e4d57ceb72a6283d986608fb75"
  },
  {
    "url": "assets/js/525.js",
    "revision": "7d84ac0fc54a0299207be219afccbd22"
  },
  {
    "url": "assets/js/526.js",
    "revision": "1508f74d27ad4ed667b0a313bc158ed4"
  },
  {
    "url": "assets/js/527.js",
    "revision": "2e43e61c0393be34838613209ed6e826"
  },
  {
    "url": "assets/js/528.js",
    "revision": "b775c7c7eaab7462c6fb81de5c3fc10c"
  },
  {
    "url": "assets/js/529.js",
    "revision": "d6c6939a731261524b135a30fd63c7a1"
  },
  {
    "url": "assets/js/53.js",
    "revision": "bc3a5983fb63e200ff2ae9d94a130301"
  },
  {
    "url": "assets/js/530.js",
    "revision": "efc37dad67753e5c0c10db57ddcb8ee0"
  },
  {
    "url": "assets/js/531.js",
    "revision": "1a97af3199f460a51362621d19130e64"
  },
  {
    "url": "assets/js/532.js",
    "revision": "96fede680c8ac705560f5c4151dc3b41"
  },
  {
    "url": "assets/js/533.js",
    "revision": "d5b28c6a9597c63850c98145ddb07fac"
  },
  {
    "url": "assets/js/534.js",
    "revision": "74b671c946e4c31478e0ce3690f87cde"
  },
  {
    "url": "assets/js/535.js",
    "revision": "9f4ed86db43f1fb2e45e1074219cc734"
  },
  {
    "url": "assets/js/536.js",
    "revision": "dfa630413a8d74b1bc9d88907f39e781"
  },
  {
    "url": "assets/js/537.js",
    "revision": "959d87c22895dbe1f1715377d2c3e76f"
  },
  {
    "url": "assets/js/538.js",
    "revision": "2b157eef5afe35e0852d08375071c7d4"
  },
  {
    "url": "assets/js/539.js",
    "revision": "491231fdd8d6b5165a75cb9d79d5cdc1"
  },
  {
    "url": "assets/js/54.js",
    "revision": "3380381f9db2db9362b0b836644fbad0"
  },
  {
    "url": "assets/js/540.js",
    "revision": "208d1473c9e76cdbe71ef1ee55ca5034"
  },
  {
    "url": "assets/js/541.js",
    "revision": "63ac690fdefed70a5da173a04ff06673"
  },
  {
    "url": "assets/js/542.js",
    "revision": "e2423ab41f6e9aab6617c1e84209caa6"
  },
  {
    "url": "assets/js/543.js",
    "revision": "6bc3f74c00651c94949d380d46c834d1"
  },
  {
    "url": "assets/js/544.js",
    "revision": "33fc8dfe5b05d077613f32babc9d3508"
  },
  {
    "url": "assets/js/545.js",
    "revision": "f7d9517330f895cff54fae512bb36b7e"
  },
  {
    "url": "assets/js/546.js",
    "revision": "6f4c9360fb17c590ea170464960eecd9"
  },
  {
    "url": "assets/js/547.js",
    "revision": "c2c6fb749038557e09c5216ad6011718"
  },
  {
    "url": "assets/js/548.js",
    "revision": "0742534b3f53eb19225ebb888f40af6b"
  },
  {
    "url": "assets/js/549.js",
    "revision": "fe92481a9f9bf071b13dd84e7e0c4977"
  },
  {
    "url": "assets/js/55.js",
    "revision": "16104f1c85924a6b66cfb8cefa2ab569"
  },
  {
    "url": "assets/js/550.js",
    "revision": "4f97ac07818fa24580ef6e7a8efc0b3a"
  },
  {
    "url": "assets/js/551.js",
    "revision": "f8b1b6075124061e0440155db1d2cee0"
  },
  {
    "url": "assets/js/552.js",
    "revision": "ceb5b9d63fa117a8c82325238a650946"
  },
  {
    "url": "assets/js/553.js",
    "revision": "418946b3ccaa2bf1302f566eb0fdea8d"
  },
  {
    "url": "assets/js/554.js",
    "revision": "eead6f9f54634ebb0e9a12506ba2cdd3"
  },
  {
    "url": "assets/js/555.js",
    "revision": "8d0ca1d27d04d11f51447f6625b8e436"
  },
  {
    "url": "assets/js/556.js",
    "revision": "972a3455b37d2a96bb2cf41ae4e605e5"
  },
  {
    "url": "assets/js/557.js",
    "revision": "1b51d3c092c9c44433c65781cdda804e"
  },
  {
    "url": "assets/js/558.js",
    "revision": "f930f07743158d6df3530f80ced16a0e"
  },
  {
    "url": "assets/js/559.js",
    "revision": "c0a3cb353ab943e329322335a55c0054"
  },
  {
    "url": "assets/js/56.js",
    "revision": "751e839d26ca29d59f82f975d3239ccb"
  },
  {
    "url": "assets/js/560.js",
    "revision": "f4f78787160fc7bb04b9deb411fe59d1"
  },
  {
    "url": "assets/js/561.js",
    "revision": "44cb95ec809559663d7c8c034ff1722c"
  },
  {
    "url": "assets/js/562.js",
    "revision": "1614fd42d53bdb6568d33a0f86169856"
  },
  {
    "url": "assets/js/563.js",
    "revision": "f92c484335e5477646ef856bfb789ffe"
  },
  {
    "url": "assets/js/564.js",
    "revision": "098dc7b7458f7be7ad8337ae1f53c96f"
  },
  {
    "url": "assets/js/565.js",
    "revision": "2452146de1b4f1f1e9db3c1807d06ec9"
  },
  {
    "url": "assets/js/566.js",
    "revision": "7170ab3de0ac6c4e5f247571e840ff9b"
  },
  {
    "url": "assets/js/567.js",
    "revision": "b28d38da43583557409f0715d3c535c9"
  },
  {
    "url": "assets/js/568.js",
    "revision": "fae09b68de538c6df0d18fc6b4d77055"
  },
  {
    "url": "assets/js/569.js",
    "revision": "ca28aad542c3046256b5a8d9d02333e1"
  },
  {
    "url": "assets/js/57.js",
    "revision": "988e7e3a2e4206b5b621d387f8bc453c"
  },
  {
    "url": "assets/js/570.js",
    "revision": "e5bb84f5a29bcbcded2156e05f1d5577"
  },
  {
    "url": "assets/js/571.js",
    "revision": "9cd3c033e10237f1aecdcae8797ff961"
  },
  {
    "url": "assets/js/572.js",
    "revision": "c8a1237e4febbc8c9fbe5593f0be39fa"
  },
  {
    "url": "assets/js/573.js",
    "revision": "4867704a7e2aeadd20263a81129a9f8e"
  },
  {
    "url": "assets/js/574.js",
    "revision": "27b2186610d6d4b55109fd304123d787"
  },
  {
    "url": "assets/js/575.js",
    "revision": "ae179a67bac69a0f4a73b4d2eeb90c8e"
  },
  {
    "url": "assets/js/576.js",
    "revision": "79f48e744168f915abe58cb40c097771"
  },
  {
    "url": "assets/js/577.js",
    "revision": "af6c25a592204f397c6532e290df0edb"
  },
  {
    "url": "assets/js/578.js",
    "revision": "9e681d54c9744c1c6adf6b60533e779d"
  },
  {
    "url": "assets/js/579.js",
    "revision": "f8a4a61392841f4b42054263004e02e1"
  },
  {
    "url": "assets/js/58.js",
    "revision": "12fbd88cb2e02ad3ced10e745c0580be"
  },
  {
    "url": "assets/js/580.js",
    "revision": "bbaa2623f91065b2dc5679cdbba0bd99"
  },
  {
    "url": "assets/js/581.js",
    "revision": "25343ec939f48d223f7c5ff28202f005"
  },
  {
    "url": "assets/js/582.js",
    "revision": "81e6bfbec0ca4737d2b8d9894ec896ca"
  },
  {
    "url": "assets/js/583.js",
    "revision": "efa183a907b9f7e4de86c7d444941ad6"
  },
  {
    "url": "assets/js/584.js",
    "revision": "308e19661da6d1bc260602c11c73e634"
  },
  {
    "url": "assets/js/585.js",
    "revision": "974393937f76cbad808069e9f1548183"
  },
  {
    "url": "assets/js/586.js",
    "revision": "9f9599b88a83a449ea6c0fde45746954"
  },
  {
    "url": "assets/js/587.js",
    "revision": "a7445a3493f0200960026ca13a81f31b"
  },
  {
    "url": "assets/js/588.js",
    "revision": "4dc18f68418c25520ae03ff167efa2c9"
  },
  {
    "url": "assets/js/589.js",
    "revision": "4c7ecfdd27ffb6d2f0fbf286afced079"
  },
  {
    "url": "assets/js/59.js",
    "revision": "6aa65ea0745cd87223c8a9f8ce48f644"
  },
  {
    "url": "assets/js/590.js",
    "revision": "538adc5c4b3906c5f99336b62055cf32"
  },
  {
    "url": "assets/js/591.js",
    "revision": "4b8f7865d7cd578cfcf6540e52d39a32"
  },
  {
    "url": "assets/js/592.js",
    "revision": "16e7ed74b786ffdbdb4d2d1bc6b2ee19"
  },
  {
    "url": "assets/js/593.js",
    "revision": "bd6f300400e0db109914a57a4fc2de5a"
  },
  {
    "url": "assets/js/594.js",
    "revision": "b0eab363fa622ae5e8e595c008c349d1"
  },
  {
    "url": "assets/js/595.js",
    "revision": "10cb3c866d3a67ddaab1aaeed6ab6dc7"
  },
  {
    "url": "assets/js/596.js",
    "revision": "cc1214ea2fe58b6dce95686471895e60"
  },
  {
    "url": "assets/js/597.js",
    "revision": "e45fb8a1121a9230f73aca0fdbed50c8"
  },
  {
    "url": "assets/js/598.js",
    "revision": "c85c32ad37d60d4987d30f51392966e4"
  },
  {
    "url": "assets/js/599.js",
    "revision": "d704235b85777df9690a87a88f6bf0a2"
  },
  {
    "url": "assets/js/6.js",
    "revision": "11a470f0b4565d096cd8ab05ed7ba8f6"
  },
  {
    "url": "assets/js/60.js",
    "revision": "8dc17ebfb75bb7da1a6afbbae44cf835"
  },
  {
    "url": "assets/js/600.js",
    "revision": "49719150c2417cc2920f4a9000abe4fe"
  },
  {
    "url": "assets/js/601.js",
    "revision": "7ff8cda7e276771c0ff273f1f3cbf124"
  },
  {
    "url": "assets/js/602.js",
    "revision": "c9c671a77bb13b9c931aa778a936c576"
  },
  {
    "url": "assets/js/603.js",
    "revision": "aa3f4f8a0d2b8144ffaeb54ca701e0ab"
  },
  {
    "url": "assets/js/604.js",
    "revision": "1c7b8130bed82a15201e4dd7a0af5dad"
  },
  {
    "url": "assets/js/605.js",
    "revision": "57cb0f6f71302012e2d2a069b76e87d3"
  },
  {
    "url": "assets/js/606.js",
    "revision": "1837eaab762f0fc31a9a38ce216e5809"
  },
  {
    "url": "assets/js/607.js",
    "revision": "e078564ae852a4000a952136f9b117d7"
  },
  {
    "url": "assets/js/608.js",
    "revision": "b1a49a339a9eb54fa7ccd4bdf4a0dd07"
  },
  {
    "url": "assets/js/609.js",
    "revision": "4f63099ced08dc007e4714adb6bcaaa8"
  },
  {
    "url": "assets/js/61.js",
    "revision": "8d81cdf6efe836b677918ad85a2b8739"
  },
  {
    "url": "assets/js/610.js",
    "revision": "d05f669ac4069211b0d9eaa6c272b260"
  },
  {
    "url": "assets/js/611.js",
    "revision": "1fc00fc1370adad8be4339e7a5593482"
  },
  {
    "url": "assets/js/612.js",
    "revision": "eae9d759b90fdd37c6fe163567a0f45f"
  },
  {
    "url": "assets/js/613.js",
    "revision": "788694bcb6323c5a6dccb73153a8c41c"
  },
  {
    "url": "assets/js/614.js",
    "revision": "fa791f595a3703ceefcfdb8847f964c3"
  },
  {
    "url": "assets/js/62.js",
    "revision": "3fd909afe23372a85c6f058802f59b24"
  },
  {
    "url": "assets/js/63.js",
    "revision": "f830586dd8d8949ee3174d50512d0975"
  },
  {
    "url": "assets/js/64.js",
    "revision": "2a7a4b939ffb013556d742f80c2080e6"
  },
  {
    "url": "assets/js/65.js",
    "revision": "a0e7d0d9c2986906219030d060f23be6"
  },
  {
    "url": "assets/js/66.js",
    "revision": "427e0221a5045ceef986951e2ff91530"
  },
  {
    "url": "assets/js/67.js",
    "revision": "ac79d2ed1f8a8d8968e165c9875bfbcd"
  },
  {
    "url": "assets/js/68.js",
    "revision": "8ab7ec68022d8cf121f870a0101a918e"
  },
  {
    "url": "assets/js/69.js",
    "revision": "fd1e19e8b5b9dcd604deba99620262f3"
  },
  {
    "url": "assets/js/7.js",
    "revision": "d9beb648ab1f3ad2af1ec449ba5fca0b"
  },
  {
    "url": "assets/js/70.js",
    "revision": "aeb8d104b26be7d91dc6ce86bc2e376f"
  },
  {
    "url": "assets/js/71.js",
    "revision": "88c73cf153400a33fae9d2b6cc2004c1"
  },
  {
    "url": "assets/js/72.js",
    "revision": "98576a5da8d76a158f5e6b796d237148"
  },
  {
    "url": "assets/js/73.js",
    "revision": "d5da49991a045340140780e3467090a2"
  },
  {
    "url": "assets/js/74.js",
    "revision": "8dc8b3fcb2718dfb46f9f419b10bf051"
  },
  {
    "url": "assets/js/75.js",
    "revision": "48279106d8ec6bfb43a1fc0c48ec6d8d"
  },
  {
    "url": "assets/js/76.js",
    "revision": "8552d8e6ddb13815cb56e483db56cc9f"
  },
  {
    "url": "assets/js/77.js",
    "revision": "a61f977c0e57105ca8987c1b1d9b3924"
  },
  {
    "url": "assets/js/78.js",
    "revision": "1a493dd278d4b386f1e5c8371aaeb68c"
  },
  {
    "url": "assets/js/79.js",
    "revision": "bbe4a94c5a6b7b359f4d11f69eca2b02"
  },
  {
    "url": "assets/js/8.js",
    "revision": "77654f1b785c5d30dcb01845b0839e51"
  },
  {
    "url": "assets/js/80.js",
    "revision": "bb4426c4986d9a1e59b0e56fa539b898"
  },
  {
    "url": "assets/js/81.js",
    "revision": "90c3cd19d2ca1311f84caa24579a657b"
  },
  {
    "url": "assets/js/82.js",
    "revision": "69aa4d93e553e524a22667cfa4e89672"
  },
  {
    "url": "assets/js/83.js",
    "revision": "017d912ccc22557debdce77e7d4ca933"
  },
  {
    "url": "assets/js/84.js",
    "revision": "ff77e420855728f2e37cb75e594c0815"
  },
  {
    "url": "assets/js/85.js",
    "revision": "6feb140259d82d40ecc686670d35d4f2"
  },
  {
    "url": "assets/js/86.js",
    "revision": "b5d0fb4fbdc283b90d7258fdd26f7f5e"
  },
  {
    "url": "assets/js/87.js",
    "revision": "92400f06c81c7af5893d6e2930b212b0"
  },
  {
    "url": "assets/js/88.js",
    "revision": "6f1bbe6a81d3a0b385d181c88d3beb2c"
  },
  {
    "url": "assets/js/89.js",
    "revision": "f6ffd9536c6693a4a15a541c60f6bac4"
  },
  {
    "url": "assets/js/9.js",
    "revision": "9647b0eda7ef9e3567f6572006562dc1"
  },
  {
    "url": "assets/js/90.js",
    "revision": "a894a540953c305aaf9762c5592de6b8"
  },
  {
    "url": "assets/js/91.js",
    "revision": "779e4b19c435da771967d2bfd825f659"
  },
  {
    "url": "assets/js/92.js",
    "revision": "434a963b4a450f39a0f0bc980a1b3111"
  },
  {
    "url": "assets/js/93.js",
    "revision": "2f68e1891d3f6bffa7e32359c906ff6e"
  },
  {
    "url": "assets/js/94.js",
    "revision": "6c2c609a23b7c2e4aaf102cc859b125c"
  },
  {
    "url": "assets/js/95.js",
    "revision": "a06269a8c24607f105c5cbcd413dc565"
  },
  {
    "url": "assets/js/96.js",
    "revision": "ca5b19beb8729c1b24ed939f75f323ba"
  },
  {
    "url": "assets/js/97.js",
    "revision": "3c591f738d613154ec3b36e2fc296bb9"
  },
  {
    "url": "assets/js/98.js",
    "revision": "69c7efb46d44827f2da8ab2ac24381a6"
  },
  {
    "url": "assets/js/99.js",
    "revision": "1b16a4ca1675e6d26a8478e4774c29c1"
  },
  {
    "url": "assets/js/app.js",
    "revision": "26f99352a8ad25f46f96e2903b1cd4e7"
  },
  {
    "url": "assets/js/styles.js",
    "revision": "22f22b49cc901aa95826401f7ce0930c"
  },
  {
    "url": "blog/category/index.html",
    "revision": "2f7f72e75f1e434ae638144e55079e81"
  },
  {
    "url": "blog/code/artists/index.html",
    "revision": "1042562c5d415d0fa34c7d727012c6b9"
  },
  {
    "url": "blog/code/asa.sbh.nz/index.html",
    "revision": "71cc5fd9dab1a91dc0dbcf447d2805cb"
  },
  {
    "url": "blog/code/decrypt/index.html",
    "revision": "3925879dcb0b311105b669ffd98163b2"
  },
  {
    "url": "blog/code/divider/index.html",
    "revision": "834c9da3770e7feb9ea393ecde9a8465"
  },
  {
    "url": "blog/code/first/index.html",
    "revision": "ddaadea6175237db8441e97798c7c82c"
  },
  {
    "url": "blog/code/fishbarrel/index.html",
    "revision": "dc97c96d5f7bb0877df902a829bc26f8"
  },
  {
    "url": "blog/code/graphs/index.html",
    "revision": "8b25c4b1ce817ca1453af04d7359b08b"
  },
  {
    "url": "blog/code/indent/index.html",
    "revision": "74a498c58e32d92c55a3726bf16b03a9"
  },
  {
    "url": "blog/code/index.html",
    "revision": "aec344c8a11a56624086c7a7fd469d49"
  },
  {
    "url": "blog/code/ingoa.nz/index.html",
    "revision": "67e3e88cb5616804b6a4908bf8fe1c9d"
  },
  {
    "url": "blog/code/nzondemand/index.html",
    "revision": "75dcd800e14b78d3713cb104e481857d"
  },
  {
    "url": "blog/code/picard/index.html",
    "revision": "24bbf76de9ae77a7ee3c0807343f903b"
  },
  {
    "url": "blog/code/qr/index.html",
    "revision": "ec45c04c7447e8e4815a6fc42e3c7e28"
  },
  {
    "url": "blog/code/readable/index.html",
    "revision": "8cbbe0e74f5d55141608323dbfc1cbec"
  },
  {
    "url": "blog/code/tone/index.html",
    "revision": "6241c82c2f40fac4ec29c64238895b87"
  },
  {
    "url": "blog/code/war/index.html",
    "revision": "91e4efe32ccdfbf69d450f14536129ab"
  },
  {
    "url": "blog/code/website/index.html",
    "revision": "1e73ed6fd7ad192286d7f542d460b493"
  },
  {
    "url": "blog/code/website/route/index.html",
    "revision": "f09573095e2a1e2b5a2b8596c4596371"
  },
  {
    "url": "blog/code/xmltv.co.nz/index.html",
    "revision": "519a35c7bdb73d3054204de315c316d3"
  },
  {
    "url": "blog/howto/index.html",
    "revision": "26716c02e9756776322804066dd7c624"
  },
  {
    "url": "blog/howto/intel865/index.html",
    "revision": "6bbdc906cf561246760bba0a6da4152d"
  },
  {
    "url": "blog/howto/ios/index.html",
    "revision": "f3163146801eae308fffe151bb5f704d"
  },
  {
    "url": "blog/howto/nexentastor/index.html",
    "revision": "9636807d9b9e1afa2c8e30952662ff40"
  },
  {
    "url": "blog/howto/pcloadletter/index.html",
    "revision": "351dfd9aed8e3775a072447ec9ccd7bc"
  },
  {
    "url": "blog/howto/raid5/index.html",
    "revision": "3dc4d2a81b567c4749594db55e58a988"
  },
  {
    "url": "blog/index.html",
    "revision": "65388ea9f93f79535345f55901fb4c3f"
  },
  {
    "url": "blog/life/anotheryear/index.html",
    "revision": "8ec5f9db6c7f76f520952c6299cd5891"
  },
  {
    "url": "blog/life/arcade/index.html",
    "revision": "eb55d2e80eab01e455a538e4a23fa417"
  },
  {
    "url": "blog/life/birthday/index.html",
    "revision": "54c8c6ccf908b47667d49a7877f2280c"
  },
  {
    "url": "blog/life/blasphemy/index.html",
    "revision": "5748a9d9b23d73ddd4b0ec562e364382"
  },
  {
    "url": "blog/life/blogger/index.html",
    "revision": "8e5de686230f1f002fa79bd33b0fd3e1"
  },
  {
    "url": "blog/life/blurry/index.html",
    "revision": "43507b76b313ad4671350fe888e7cd56"
  },
  {
    "url": "blog/life/busyday/index.html",
    "revision": "477144a6a70de02e024d503a4fa4aa0e"
  },
  {
    "url": "blog/life/domain/index.html",
    "revision": "71ea00955fbd47906ab01de917f6687c"
  },
  {
    "url": "blog/life/exams/index.html",
    "revision": "3ec5443795e287dcb1c3bc28d37ada22"
  },
  {
    "url": "blog/life/food/index.html",
    "revision": "ee7083e19feb14e8818d30555604c0e1"
  },
  {
    "url": "blog/life/glenview/index.html",
    "revision": "fbc41f19732742ca4adf04b1a306f128"
  },
  {
    "url": "blog/life/headlines/index.html",
    "revision": "d0b9694418ac55fb7611c7b832e96878"
  },
  {
    "url": "blog/life/index.html",
    "revision": "225209638e581dda30cf42eecf36403d"
  },
  {
    "url": "blog/life/jws/index.html",
    "revision": "6c5278e381bf98c4ad9162c50d121166"
  },
  {
    "url": "blog/life/keyboard/index.html",
    "revision": "1a8c42fa5d5de6ffe36ea8df6186cd3d"
  },
  {
    "url": "blog/life/lpi201/index.html",
    "revision": "c10324a8df3546410f3f487b82655677"
  },
  {
    "url": "blog/life/mashup/index.html",
    "revision": "23bcf119b328c15ff307212c885af5d1"
  },
  {
    "url": "blog/life/motorweb/index.html",
    "revision": "8c167d20a08dd387356ffd8234d81ea6"
  },
  {
    "url": "blog/life/nxe/index.html",
    "revision": "75ced3157066313b7a7636b0fa1a15af"
  },
  {
    "url": "blog/life/plates/index.html",
    "revision": "cba08226fe59a47a2ed1b9e0a6279907"
  },
  {
    "url": "blog/life/queenstown/index.html",
    "revision": "f79780f969913f748482b14fead0acff"
  },
  {
    "url": "blog/life/racism/index.html",
    "revision": "908748840be2ab391d309c7d2d9bdc92"
  },
  {
    "url": "blog/life/roads/index.html",
    "revision": "0f3f2f11b5af8febb1adafcea29880b9"
  },
  {
    "url": "blog/life/roots/index.html",
    "revision": "191e1d77ace9300452632ad5b8e8e3a8"
  },
  {
    "url": "blog/life/scare/index.html",
    "revision": "3a81d19739684fe32ac520e4e5272d2c"
  },
  {
    "url": "blog/life/scary/index.html",
    "revision": "921b9457723b88a9d763e516edd11cf0"
  },
  {
    "url": "blog/life/seti/index.html",
    "revision": "acdaf5f95afe6bfd40e96836e9edc10b"
  },
  {
    "url": "blog/life/skeptical/index.html",
    "revision": "d159548819a781cb1d4d0b3d2eb89450"
  },
  {
    "url": "blog/life/skepticzone/index.html",
    "revision": "f865678bf29b2c822f1fbc7fdfd48fb7"
  },
  {
    "url": "blog/life/spam/index.html",
    "revision": "4b26fc25e01eff2e064fb2b570747016"
  },
  {
    "url": "blog/life/ticking/index.html",
    "revision": "e62374d1aab9055316bfc0113ab6c18b"
  },
  {
    "url": "blog/life/trademe/index.html",
    "revision": "629f99e359fa280de0eecdc6ec539ac8"
  },
  {
    "url": "blog/life/unforeseen/index.html",
    "revision": "7a201ac95b3e4a34fc5c29fb9238958a"
  },
  {
    "url": "blog/life/wobbly/index.html",
    "revision": "cda6a06bfaa409ca330aa427f31d20ea"
  },
  {
    "url": "blog/projects/ahs/index.html",
    "revision": "8a0a34ad7df485e198657230003fb24b"
  },
  {
    "url": "blog/projects/airbag/index.html",
    "revision": "5898785c4596e51ec5ee8be9ad892fe8"
  },
  {
    "url": "blog/projects/ambilight/index.html",
    "revision": "5c143fe2f783eda966b06ffd72b3de00"
  },
  {
    "url": "blog/projects/automation/index.html",
    "revision": "cd47a7f5cda4768c405cef4f443e9720"
  },
  {
    "url": "blog/projects/eyes/index.html",
    "revision": "f17af1bce9317cc509b5d8395cc982d2"
  },
  {
    "url": "blog/projects/glitch/index.html",
    "revision": "bbe1fdf2366fa551be040f606a5d1caa"
  },
  {
    "url": "blog/projects/hotel/index.html",
    "revision": "ec05fc2847e5bdf3d7913976d22129f8"
  },
  {
    "url": "blog/projects/index.html",
    "revision": "5ef86ef79b525a9d4aecd18b9bf016c1"
  },
  {
    "url": "blog/projects/it100/index.html",
    "revision": "13e29bf2e77bb23ed59e51ad9f72ed60"
  },
  {
    "url": "blog/projects/microscope/index.html",
    "revision": "b208ef36d5a670aecef002788400cced"
  },
  {
    "url": "blog/projects/mirror/index.html",
    "revision": "8a4125fda7150af8c2ed7617437e83f3"
  },
  {
    "url": "blog/projects/picture/index.html",
    "revision": "bd01398dcb16464adc5ac8d36d69a5fb"
  },
  {
    "url": "blog/projects/pizza/index.html",
    "revision": "caa2ee1e7e8d5552276c63dceceb749a"
  },
  {
    "url": "blog/projects/podcast/index.html",
    "revision": "57fa7bc9471f07cb9c877ad7a3c6b26a"
  },
  {
    "url": "blog/projects/reflow/index.html",
    "revision": "dc52b65f481f25ad9e86c31ca58b6b6a"
  },
  {
    "url": "blog/projects/sandbox/index.html",
    "revision": "59e8b7d66e113809ef1a6ba721f9b0a4"
  },
  {
    "url": "blog/projects/screens/index.html",
    "revision": "732685af37a2d1fb29a40ec8eb01dd08"
  },
  {
    "url": "blog/projects/sky/index.html",
    "revision": "e54ff1a94720daeec9e88020b468fe11"
  },
  {
    "url": "blog/projects/starwars/index.html",
    "revision": "8c1e6a2a9b85f81763797a8c14aadd2d"
  },
  {
    "url": "blog/projects/xbox/index.html",
    "revision": "22e63f00449190d66f90bccfddb56197"
  },
  {
    "url": "blog/random/addresses/index.html",
    "revision": "e8bc76a69e3d80140c49a67465212b0e"
  },
  {
    "url": "blog/random/alphabet/index.html",
    "revision": "d67a3c4af980a94421cae07d88058d19"
  },
  {
    "url": "blog/random/astrology/index.html",
    "revision": "bca44fd373f3b9f3f0e89d3c6796fc4f"
  },
  {
    "url": "blog/random/chicken/index.html",
    "revision": "6e701032147ca7aa439900be8b28d7f5"
  },
  {
    "url": "blog/random/dns/index.html",
    "revision": "1eb5ab30effa9873cb3bf4ba3e218679"
  },
  {
    "url": "blog/random/evp/index.html",
    "revision": "7ee5225fd47cb72d006776d983a616a4"
  },
  {
    "url": "blog/random/flip/index.html",
    "revision": "688b236320934cbd0532bb912d66e91f"
  },
  {
    "url": "blog/random/honeychurch/index.html",
    "revision": "88bfb9cc07ec6d742e42aee4b618bee2"
  },
  {
    "url": "blog/random/index.html",
    "revision": "f370b04f3e0bb925ae48db39287a9e6f"
  },
  {
    "url": "blog/random/lottery/index.html",
    "revision": "5f9452dda243ad5c76f50bf89707f88f"
  },
  {
    "url": "blog/random/music/index.html",
    "revision": "54223a81565a74bbcabf7314bc3f05ac"
  },
  {
    "url": "blog/random/octal/index.html",
    "revision": "501a5bc7e19b5446cd19cd8dc67467f4"
  },
  {
    "url": "blog/random/os/index.html",
    "revision": "c6039718ea0491e65ece2c65eabadc90"
  },
  {
    "url": "blog/random/propellers/index.html",
    "revision": "13a3b22c174c376520d4810a20a1f686"
  },
  {
    "url": "blog/random/robux/index.html",
    "revision": "5507d3b4063ec1f9d6c768a03f388127"
  },
  {
    "url": "blog/random/super/index.html",
    "revision": "2657a676af96136f73198240e5b36a44"
  },
  {
    "url": "blog/random/times/index.html",
    "revision": "b2b103d4296a7dd2e326c0592acd5f67"
  },
  {
    "url": "blog/random/travel/index.html",
    "revision": "dc2660f15f389ac033b1c8ce9079ef1e"
  },
  {
    "url": "blog/random/wilhelm/index.html",
    "revision": "08a6b25c86a7472221676a48d0e1ae17"
  },
  {
    "url": "blog/random/year/index.html",
    "revision": "fa950c3e890dbdbce39721d5fc7e390d"
  },
  {
    "url": "blog/skepticism/2015/08/16/asa/index.html",
    "revision": "c60eff86677e7d414454d00263b6bacf"
  },
  {
    "url": "blog/skepticism/2015/08/16/awards/index.html",
    "revision": "4fdc19ac28a1b5225cb4261f1c7a2e03"
  },
  {
    "url": "blog/skepticism/2015/08/16/bravo/index.html",
    "revision": "94f1309a746f387c9bd1032f5da37e98"
  },
  {
    "url": "blog/skepticism/2015/08/16/index.html",
    "revision": "bd46c312205bcd25bdea55ba8790161f"
  },
  {
    "url": "blog/skepticism/2015/08/16/jim/index.html",
    "revision": "29ffdc070c4baaa7ee4abbf844de4589"
  },
  {
    "url": "blog/skepticism/2015/08/16/naholo/index.html",
    "revision": "ed49f1b0cbdff1019921190e7ee7590e"
  },
  {
    "url": "blog/skepticism/2015/08/16/resene/index.html",
    "revision": "7fdf57ff6a6c22e4f154e7b1ad879916"
  },
  {
    "url": "blog/skepticism/2015/08/index.html",
    "revision": "4613bbc909c034dac7ccc8dbdd4fdb48"
  },
  {
    "url": "blog/skepticism/2015/09/20/gop/index.html",
    "revision": "709ac50dc45b79a6098eaaddda7bd1ba"
  },
  {
    "url": "blog/skepticism/2015/09/20/ignobel/index.html",
    "revision": "78f4300050c9f1bcfff50b579cff8b0e"
  },
  {
    "url": "blog/skepticism/2015/09/20/index.html",
    "revision": "370e0338897d487e43fa83b1348d16f9"
  },
  {
    "url": "blog/skepticism/2015/09/20/supplements/index.html",
    "revision": "6cffd8d2edaf221b2de767d511bbc980"
  },
  {
    "url": "blog/skepticism/2015/09/27/ayahuasca/index.html",
    "revision": "5ae5a75971a0e22e442fdcdab9a509ca"
  },
  {
    "url": "blog/skepticism/2015/09/27/drought/index.html",
    "revision": "d10a271ea5ac74b2c6a85e89ad30ee61"
  },
  {
    "url": "blog/skepticism/2015/09/27/index.html",
    "revision": "a09321488f1a417d9b91cc6e4b290274"
  },
  {
    "url": "blog/skepticism/2015/09/27/lama/index.html",
    "revision": "1fe2a6df97a2ab6595918965154d028f"
  },
  {
    "url": "blog/skepticism/2015/09/27/moon/index.html",
    "revision": "4900aaae2a0d94767d1d9d4b95a40f9e"
  },
  {
    "url": "blog/skepticism/2015/09/27/scan/index.html",
    "revision": "25c3116e3837a6bf2db4e8fffe4bbb00"
  },
  {
    "url": "blog/skepticism/2015/09/index.html",
    "revision": "9bb7c92f1a010989773859b313f19acc"
  },
  {
    "url": "blog/skepticism/2015/10/04/ghost/index.html",
    "revision": "8e0f33887df4d854722bc126429cf96b"
  },
  {
    "url": "blog/skepticism/2015/10/04/haka/index.html",
    "revision": "da122b2c68312cb15ac677fbfa1c3e52"
  },
  {
    "url": "blog/skepticism/2015/10/04/index.html",
    "revision": "8c56cdc62384573e6be154b52270803d"
  },
  {
    "url": "blog/skepticism/2015/10/04/mars/index.html",
    "revision": "eb044b06c84dd6bad8ab874fc9e2276a"
  },
  {
    "url": "blog/skepticism/2015/10/04/pharmacy/index.html",
    "revision": "f73a2d52f7b987fe7bd9ea431a3e39de"
  },
  {
    "url": "blog/skepticism/2015/10/04/prostate/index.html",
    "revision": "a6290d209889cbe12aacb3707f10aeba"
  },
  {
    "url": "blog/skepticism/2015/10/11/armageddon/index.html",
    "revision": "b0221e2a7684c63ccc965d8a0ab38341"
  },
  {
    "url": "blog/skepticism/2015/10/11/climate/index.html",
    "revision": "eb1b83b6eadb0bb72f387565a1356f1c"
  },
  {
    "url": "blog/skepticism/2015/10/11/ghost/index.html",
    "revision": "236a0279e75b4ca43f07e419b2b3e197"
  },
  {
    "url": "blog/skepticism/2015/10/11/index.html",
    "revision": "d6314af6ec2d713e75501b19021abad6"
  },
  {
    "url": "blog/skepticism/2015/10/11/magnesleep/index.html",
    "revision": "f9742ef985273845be9654e5f9339b13"
  },
  {
    "url": "blog/skepticism/2015/10/11/nhs/index.html",
    "revision": "e620fb9e93f7aa647f72648b0106db34"
  },
  {
    "url": "blog/skepticism/2015/10/11/prophet/index.html",
    "revision": "5bb05b48e0190ec416035850a011c85c"
  },
  {
    "url": "blog/skepticism/2015/10/index.html",
    "revision": "af065be72cedbb5d4b98a03d2081e873"
  },
  {
    "url": "blog/skepticism/2015/11/15/end/index.html",
    "revision": "a99d8c2ad01490c999226c5c33c54a0a"
  },
  {
    "url": "blog/skepticism/2015/11/15/index.html",
    "revision": "0e8c859480d62e667d3005e32a3140b9"
  },
  {
    "url": "blog/skepticism/2015/11/index.html",
    "revision": "871a893431ed94981c338712acd47378"
  },
  {
    "url": "blog/skepticism/2015/12/13/astrology/index.html",
    "revision": "b6eda95c72984f5f05cfc63ecacbed50"
  },
  {
    "url": "blog/skepticism/2015/12/13/cancer/index.html",
    "revision": "464d7707635e216f05febea58b96d55e"
  },
  {
    "url": "blog/skepticism/2015/12/13/chickenpox/index.html",
    "revision": "0c5d4debffb65649f44a525eb3d5a478"
  },
  {
    "url": "blog/skepticism/2015/12/13/index.html",
    "revision": "c65f4afa97c5778f75629da05186d6ac"
  },
  {
    "url": "blog/skepticism/2015/12/13/osteopath/index.html",
    "revision": "06847d7eb1f496b11c8e689130208d70"
  },
  {
    "url": "blog/skepticism/2015/12/13/priest/index.html",
    "revision": "e81d804b7c444146f41d5f9af1d45551"
  },
  {
    "url": "blog/skepticism/2015/12/13/psychic/index.html",
    "revision": "3ffabc29c7ef42fcc2c832582b5f0173"
  },
  {
    "url": "blog/skepticism/2015/12/13/vaccines/index.html",
    "revision": "80a5012fa56033b7dbee7493a209144e"
  },
  {
    "url": "blog/skepticism/2015/12/index.html",
    "revision": "5671e747c54774950206e4585f9488df"
  },
  {
    "url": "blog/skepticism/2015/index.html",
    "revision": "00a01c8694ccc92048a5ee6c09e82fd3"
  },
  {
    "url": "blog/skepticism/2016/02/07/antioxidant/index.html",
    "revision": "048c45c485228c2f2e539eeb969f8356"
  },
  {
    "url": "blog/skepticism/2016/02/07/index.html",
    "revision": "942037e559cd92b0c73ce5592d75a1a8"
  },
  {
    "url": "blog/skepticism/2016/02/07/kfc/index.html",
    "revision": "872a6957842624f422ad0cc0f835f7bd"
  },
  {
    "url": "blog/skepticism/2016/02/07/ph/index.html",
    "revision": "728c339553b5f55b6e07b3b84dd5472d"
  },
  {
    "url": "blog/skepticism/2016/02/07/sandy/index.html",
    "revision": "361316c2cb1bb51094b2f7ace97856a8"
  },
  {
    "url": "blog/skepticism/2016/02/07/sarfati/index.html",
    "revision": "a3c2ba759e3a6f4c2f6f164506af3524"
  },
  {
    "url": "blog/skepticism/2016/02/07/trump/index.html",
    "revision": "752e06bba7a83c5bc0137b2301c72a35"
  },
  {
    "url": "blog/skepticism/2016/02/14/coins/index.html",
    "revision": "a09ac39dbecb2a0a33c24e76237af049"
  },
  {
    "url": "blog/skepticism/2016/02/14/fast/index.html",
    "revision": "2e98fd95f4a216390a88ba2b89e15006"
  },
  {
    "url": "blog/skepticism/2016/02/14/fluoride/index.html",
    "revision": "6696535c3de71d07466ce486581b662b"
  },
  {
    "url": "blog/skepticism/2016/02/14/icke/index.html",
    "revision": "f14b756568be03500b4cd2501c116a85"
  },
  {
    "url": "blog/skepticism/2016/02/14/index.html",
    "revision": "69cf28cfd32010aa3384f71875b79aba"
  },
  {
    "url": "blog/skepticism/2016/02/14/yeti/index.html",
    "revision": "a8b354773c08b48ed0c8469bededeebc"
  },
  {
    "url": "blog/skepticism/2016/02/21/homeopathy/index.html",
    "revision": "0c7b2498917b3e6572fc9600eb5c59ec"
  },
  {
    "url": "blog/skepticism/2016/02/21/index.html",
    "revision": "7f70a4a5375100f3785300d75de68ab9"
  },
  {
    "url": "blog/skepticism/2016/02/21/monster/index.html",
    "revision": "5c0e80b8e6d4f7df25c7e1d85b73bfc6"
  },
  {
    "url": "blog/skepticism/2016/02/21/scalia/index.html",
    "revision": "1695a5e4310fb6010b147cb0ea028978"
  },
  {
    "url": "blog/skepticism/2016/02/21/shane/index.html",
    "revision": "7fc0e761acbcb897572cc82e7c23a22e"
  },
  {
    "url": "blog/skepticism/2016/02/21/texas/index.html",
    "revision": "02b2ce44b5d6d05eef976792b1836012"
  },
  {
    "url": "blog/skepticism/2016/02/28/acupuncture/index.html",
    "revision": "ca1ce4c08dc86873ba258e62fec505e8"
  },
  {
    "url": "blog/skepticism/2016/02/28/fsm/index.html",
    "revision": "798a4a94f7c689a8138be5e2618ee349"
  },
  {
    "url": "blog/skepticism/2016/02/28/index.html",
    "revision": "1e714062ac6b7dadba0357f660af8690"
  },
  {
    "url": "blog/skepticism/2016/02/28/iv/index.html",
    "revision": "b344f167bc39a4b3b1e05c20f268414d"
  },
  {
    "url": "blog/skepticism/2016/02/28/natural/index.html",
    "revision": "b1dc0f3d89c699737572533ae73fa494"
  },
  {
    "url": "blog/skepticism/2016/02/28/talc/index.html",
    "revision": "3ecbdda11a560bd449e43b00f8189dc0"
  },
  {
    "url": "blog/skepticism/2016/02/index.html",
    "revision": "d30179364577fe4a076c55f101290c0f"
  },
  {
    "url": "blog/skepticism/2016/03/13/herbs/index.html",
    "revision": "1f85faa007f01dec4775732025c90bd4"
  },
  {
    "url": "blog/skepticism/2016/03/13/index.html",
    "revision": "bbf0cfcae8929791298d3c59081a1a88"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandala/index.html",
    "revision": "b74677f4d2d61558a0d303f534b42ff4"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandela/index.html",
    "revision": "ae973547d5c90bea9bfaedac53873e9a"
  },
  {
    "url": "blog/skepticism/2016/03/13/spray/index.html",
    "revision": "22b4b051a7107e8adbf0badb1f151013"
  },
  {
    "url": "blog/skepticism/2016/03/index.html",
    "revision": "fc5731a4b901790a60407602a121d202"
  },
  {
    "url": "blog/skepticism/2016/04/17/charity/index.html",
    "revision": "8280a4537e3321798362f8033c6c6b9a"
  },
  {
    "url": "blog/skepticism/2016/04/17/chiro/index.html",
    "revision": "15f2f9eace8e4ab93922e8fec3254897"
  },
  {
    "url": "blog/skepticism/2016/04/17/fluoride/index.html",
    "revision": "8af2b9e8240c40d92466673366b61228"
  },
  {
    "url": "blog/skepticism/2016/04/17/index.html",
    "revision": "162a825be6b816c6f6f48a55f8ac389b"
  },
  {
    "url": "blog/skepticism/2016/04/17/lotto/index.html",
    "revision": "ae9903deba23d3b783ed23815fec685a"
  },
  {
    "url": "blog/skepticism/2016/04/17/mind/index.html",
    "revision": "71d7cc5cb2a2a36841f93676404fdefd"
  },
  {
    "url": "blog/skepticism/2016/04/17/whooping/index.html",
    "revision": "595b766611548440096d545ceab62afe"
  },
  {
    "url": "blog/skepticism/2016/04/index.html",
    "revision": "e449435729c11c4820daa13f0330e0f9"
  },
  {
    "url": "blog/skepticism/2016/06/05/1080/index.html",
    "revision": "56aa60ff434fd45d26547be8e458b821"
  },
  {
    "url": "blog/skepticism/2016/06/05/acupuncture/index.html",
    "revision": "a69b6925b604c35846127549deda3ec9"
  },
  {
    "url": "blog/skepticism/2016/06/05/family/index.html",
    "revision": "139574579a4fcecca87fe382da330326"
  },
  {
    "url": "blog/skepticism/2016/06/05/index.html",
    "revision": "29037f3f88715b9f1cfd3a43dc8a1270"
  },
  {
    "url": "blog/skepticism/2016/06/05/limbaugh/index.html",
    "revision": "8925f1db7dd882b0c6ba8c8de7d72333"
  },
  {
    "url": "blog/skepticism/2016/06/12/bobby/index.html",
    "revision": "8bfba372271b9d229ee9aa33cf44d3c7"
  },
  {
    "url": "blog/skepticism/2016/06/12/climate/index.html",
    "revision": "ab77e59db1267752f0f9845f5a146cd7"
  },
  {
    "url": "blog/skepticism/2016/06/12/index.html",
    "revision": "a2f89d51cf0ab7ca684eb2bff1d142c5"
  },
  {
    "url": "blog/skepticism/2016/06/12/pugh/index.html",
    "revision": "29517f725630398f67ddaa49b2322b59"
  },
  {
    "url": "blog/skepticism/2016/06/12/savage/index.html",
    "revision": "6e2a08c151eed0b359d408c865930389"
  },
  {
    "url": "blog/skepticism/2016/06/12/sawdust/index.html",
    "revision": "38f763f11f3b47e6c958c2e4c6e14790"
  },
  {
    "url": "blog/skepticism/2016/06/19/beauty/index.html",
    "revision": "403cda36bcd96042e5ad6e61d65e6fdb"
  },
  {
    "url": "blog/skepticism/2016/06/19/bilderberg/index.html",
    "revision": "eb04dba20eb27e9f0d7dd287f6701b64"
  },
  {
    "url": "blog/skepticism/2016/06/19/cyf/index.html",
    "revision": "dd5a722adb9b49a539c00343a5c2b87e"
  },
  {
    "url": "blog/skepticism/2016/06/19/holt/index.html",
    "revision": "cff7edc08242f0000dc323ee47ca6fb4"
  },
  {
    "url": "blog/skepticism/2016/06/19/index.html",
    "revision": "7ff5454fb893fea31e5449fee3f36773"
  },
  {
    "url": "blog/skepticism/2016/06/19/silver/index.html",
    "revision": "eb484c36a7b8337c24094d76ee3e7097"
  },
  {
    "url": "blog/skepticism/2016/06/19/ufo/index.html",
    "revision": "43f5b82e76bd5cec10985596887aea4c"
  },
  {
    "url": "blog/skepticism/2016/06/26/homeopathy/index.html",
    "revision": "cd0706282ee5e66121a2957e68cd15ed"
  },
  {
    "url": "blog/skepticism/2016/06/26/index.html",
    "revision": "8f6a74390a9e93fc62d135519e9331c3"
  },
  {
    "url": "blog/skepticism/2016/06/26/robbins/index.html",
    "revision": "04173fba92ff8dc5d916960664947a7e"
  },
  {
    "url": "blog/skepticism/2016/06/26/selfies/index.html",
    "revision": "086d0f38ea5ae82bc310dd418e92b519"
  },
  {
    "url": "blog/skepticism/2016/06/26/silver/index.html",
    "revision": "f2b6661ee8bb72b0580c0b2b7e04d092"
  },
  {
    "url": "blog/skepticism/2016/06/26/ufos/index.html",
    "revision": "683e468244c522453b8ef353fb027e13"
  },
  {
    "url": "blog/skepticism/2016/06/index.html",
    "revision": "c9eca3f1ab933ddd28e61dc3d250a702"
  },
  {
    "url": "blog/skepticism/2016/07/03/glyphosate/index.html",
    "revision": "f44a365fa49c42b5936c070d6a485ad7"
  },
  {
    "url": "blog/skepticism/2016/07/03/gmo/index.html",
    "revision": "02cbb10e0acf670198ad0ddaa517894b"
  },
  {
    "url": "blog/skepticism/2016/07/03/index.html",
    "revision": "51cf140fe96a5264afdaa14ac9a8866f"
  },
  {
    "url": "blog/skepticism/2016/07/03/jail/index.html",
    "revision": "c90a286fe9a30d7b7296f0026bad150d"
  },
  {
    "url": "blog/skepticism/2016/07/03/ken/index.html",
    "revision": "100d58a30c8dc97691eb989a83cfeff0"
  },
  {
    "url": "blog/skepticism/2016/07/10/ark/index.html",
    "revision": "9efdf0c577f9e39ae623f86344bf63f5"
  },
  {
    "url": "blog/skepticism/2016/07/10/bee/index.html",
    "revision": "5415d672632ad2c2a51026172bcb0323"
  },
  {
    "url": "blog/skepticism/2016/07/10/index.html",
    "revision": "1bf7010d162146523febab09e5ffa761"
  },
  {
    "url": "blog/skepticism/2016/07/10/lottery/index.html",
    "revision": "bb65066cf079fd5e611572ca434da50f"
  },
  {
    "url": "blog/skepticism/2016/07/10/murder/index.html",
    "revision": "96533cef3f06a36dd18829ccf97d7bc9"
  },
  {
    "url": "blog/skepticism/2016/07/17/dogs/index.html",
    "revision": "d0c556b5b129478b4480fb4932c86b48"
  },
  {
    "url": "blog/skepticism/2016/07/17/fsm/index.html",
    "revision": "43719c2c0b98517c608b8d0251789c6b"
  },
  {
    "url": "blog/skepticism/2016/07/17/fyi/index.html",
    "revision": "458a45387b1a99ce9ae75dd9e71eef0c"
  },
  {
    "url": "blog/skepticism/2016/07/17/index.html",
    "revision": "c249456e21e08f40f20e744df9dffef5"
  },
  {
    "url": "blog/skepticism/2016/07/17/natural/index.html",
    "revision": "6aa96106a949fa92ba4c6a835595c77f"
  },
  {
    "url": "blog/skepticism/2016/07/17/pokemon/index.html",
    "revision": "fb8de50ebceca28b827392b84cdf0696"
  },
  {
    "url": "blog/skepticism/2016/07/index.html",
    "revision": "45f4b32b12eedd37908c5d21dc7b8763"
  },
  {
    "url": "blog/skepticism/2016/08/07/icke/index.html",
    "revision": "15b4307746bbcc1dff3bcd28ba11ff2b"
  },
  {
    "url": "blog/skepticism/2016/08/07/index.html",
    "revision": "b515295dbe79666dfc5f56888939fe24"
  },
  {
    "url": "blog/skepticism/2016/08/21/brian/index.html",
    "revision": "5a7001f933a0a434632eb457101958c7"
  },
  {
    "url": "blog/skepticism/2016/08/21/chlorine/index.html",
    "revision": "e2f387dabff88b849b0e49c3a00b2082"
  },
  {
    "url": "blog/skepticism/2016/08/21/index.html",
    "revision": "121d8abd214ef5bb5cd4659c82ad30fa"
  },
  {
    "url": "blog/skepticism/2016/08/21/murder/index.html",
    "revision": "db4d9d9645d920a598d02a0df3af2e39"
  },
  {
    "url": "blog/skepticism/2016/08/21/superfoods/index.html",
    "revision": "872fdfbdb011c4fde2267fb250af6124"
  },
  {
    "url": "blog/skepticism/2016/08/21/witch/index.html",
    "revision": "52181a50b02c05607a136daf5dc8a2e0"
  },
  {
    "url": "blog/skepticism/2016/08/28/alcohol/index.html",
    "revision": "28b5b48a99e5a2e7ae093035927f0bc8"
  },
  {
    "url": "blog/skepticism/2016/08/28/chiro/index.html",
    "revision": "582564951320c9c494b487a7ef399352"
  },
  {
    "url": "blog/skepticism/2016/08/28/index.html",
    "revision": "ee21b2b757c4894de1fc1377013d5fef"
  },
  {
    "url": "blog/skepticism/2016/08/28/processed/index.html",
    "revision": "6fc7ec6ef5e0734bd599f585af4fd70d"
  },
  {
    "url": "blog/skepticism/2016/08/28/sbh/index.html",
    "revision": "90738880f03bcd4f70af15845ce8c69a"
  },
  {
    "url": "blog/skepticism/2016/08/index.html",
    "revision": "caec7848ff6807144abd062ca373ed31"
  },
  {
    "url": "blog/skepticism/2016/09/18/altruism/index.html",
    "revision": "58e442556a1e823a74321c54a751f39a"
  },
  {
    "url": "blog/skepticism/2016/09/18/better/index.html",
    "revision": "2c819a0b92f4031a4991def4f378c6f0"
  },
  {
    "url": "blog/skepticism/2016/09/18/homeopathy/index.html",
    "revision": "94bf5184135290eac060f0e29b86e57f"
  },
  {
    "url": "blog/skepticism/2016/09/18/index.html",
    "revision": "99c3773e109487f0248546d810afb925"
  },
  {
    "url": "blog/skepticism/2016/09/18/nonsense/index.html",
    "revision": "e5f6fa054ef000256a2f24ef5980a9dc"
  },
  {
    "url": "blog/skepticism/2016/09/18/trump/index.html",
    "revision": "c62b62c5059330c6d1e6ed69093241b6"
  },
  {
    "url": "blog/skepticism/2016/09/25/clinic/index.html",
    "revision": "3e08d2703b345aaf9ce563df9dca5c51"
  },
  {
    "url": "blog/skepticism/2016/09/25/fluoride/index.html",
    "revision": "2025d6deef64a6e6637f8bb44bb137b9"
  },
  {
    "url": "blog/skepticism/2016/09/25/homeopathy/index.html",
    "revision": "0b735f0159dd9b6c39165ad0b0c0e5ab"
  },
  {
    "url": "blog/skepticism/2016/09/25/index.html",
    "revision": "02c091cad50ffb1f4eeaae42c2000b02"
  },
  {
    "url": "blog/skepticism/2016/09/25/murder/index.html",
    "revision": "ec95280da21fbadcd65aa1d396564ed5"
  },
  {
    "url": "blog/skepticism/2016/09/index.html",
    "revision": "3ecb7edb8806f4cde6fe1e5ac54588ce"
  },
  {
    "url": "blog/skepticism/2016/10/21/bigfoot/index.html",
    "revision": "af865699323d3bf2a3fbf525ed2df099"
  },
  {
    "url": "blog/skepticism/2016/10/21/breasts/index.html",
    "revision": "a40f35cef418d42a22e00f1fedde4e12"
  },
  {
    "url": "blog/skepticism/2016/10/21/index.html",
    "revision": "3ca1fa2a640be688eb459db144498fd9"
  },
  {
    "url": "blog/skepticism/2016/10/21/medsafe/index.html",
    "revision": "3a59da0b4362c769a9a34b3ed9460a17"
  },
  {
    "url": "blog/skepticism/2016/10/21/zenteq/index.html",
    "revision": "465856192c8692fbddc4b97b23977a6a"
  },
  {
    "url": "blog/skepticism/2016/10/index.html",
    "revision": "94047dc82f763d78af0d5d71ef041a3d"
  },
  {
    "url": "blog/skepticism/2016/11/13/conference/index.html",
    "revision": "a31eae303abc382680f348f0e4763465"
  },
  {
    "url": "blog/skepticism/2016/11/13/green/index.html",
    "revision": "666ee987a858aaad33a3b1b54e22c269"
  },
  {
    "url": "blog/skepticism/2016/11/13/index.html",
    "revision": "a623b530a44c1a825e43b0415c4f0591"
  },
  {
    "url": "blog/skepticism/2016/11/13/vice/index.html",
    "revision": "5381d0561f460ab33400daf82cac24a9"
  },
  {
    "url": "blog/skepticism/2016/11/27/bioptron/index.html",
    "revision": "1965857cf95546b4c059301df9dad698"
  },
  {
    "url": "blog/skepticism/2016/11/27/conference/index.html",
    "revision": "ed3aa5db0d87f84ec5142a5b2b8ae3ad"
  },
  {
    "url": "blog/skepticism/2016/11/27/earthquake/index.html",
    "revision": "c256dd9a37b01ad1a6cf5bac5f8f1639"
  },
  {
    "url": "blog/skepticism/2016/11/27/index.html",
    "revision": "828c25db1907a87dc178dffb137725b6"
  },
  {
    "url": "blog/skepticism/2016/11/index.html",
    "revision": "80c4e3ffa0cec40fa938af120794bb7e"
  },
  {
    "url": "blog/skepticism/2016/12/04/conference/index.html",
    "revision": "bf639abd8dd22bedf7a8c9ff6a04bacf"
  },
  {
    "url": "blog/skepticism/2016/12/04/index.html",
    "revision": "633855a7add7159d65a9e2c6413e5e7e"
  },
  {
    "url": "blog/skepticism/2016/12/18/colin/index.html",
    "revision": "9624f2f72f8e826248ea3629af7abd2b"
  },
  {
    "url": "blog/skepticism/2016/12/18/fiji/index.html",
    "revision": "03eadbd02168e626a7cc163411b36bb2"
  },
  {
    "url": "blog/skepticism/2016/12/18/index.html",
    "revision": "925bab4fa815138d8e351ec3306cc9a7"
  },
  {
    "url": "blog/skepticism/2016/12/18/kinesiology/index.html",
    "revision": "834b976589ecd1d284a08d22f01f439f"
  },
  {
    "url": "blog/skepticism/2016/12/18/mmm/index.html",
    "revision": "4eb985de029c32c36a21d3dbb38c8e4b"
  },
  {
    "url": "blog/skepticism/2016/12/18/nigel/index.html",
    "revision": "f0fa06cd2cd71cde93840715b817a3f2"
  },
  {
    "url": "blog/skepticism/2016/12/index.html",
    "revision": "191ed1873b57966ace353c44b71bd7c9"
  },
  {
    "url": "blog/skepticism/2016/index.html",
    "revision": "c0a1ed229ada7aae485273559c2bb77f"
  },
  {
    "url": "blog/skepticism/2017/01/22/index.html",
    "revision": "74c0aaaca5d8a4d75d458367efca231b"
  },
  {
    "url": "blog/skepticism/2017/01/22/scientology/index.html",
    "revision": "da065860e660d5197eb23720fa6659a3"
  },
  {
    "url": "blog/skepticism/2017/01/29/creation/index.html",
    "revision": "c68a7b04c626383ddc2007a3b6f2dfb0"
  },
  {
    "url": "blog/skepticism/2017/01/29/index.html",
    "revision": "19fdfa980cfa71864e27b198d1e9025c"
  },
  {
    "url": "blog/skepticism/2017/01/index.html",
    "revision": "54728ac64a285542374be3c4ceba972a"
  },
  {
    "url": "blog/skepticism/2017/02/05/fraudster/index.html",
    "revision": "d75971b585d3c88258c8786ca7147709"
  },
  {
    "url": "blog/skepticism/2017/02/05/gervais/index.html",
    "revision": "4895f16b074288b96a473d8cf5c6fcd8"
  },
  {
    "url": "blog/skepticism/2017/02/05/index.html",
    "revision": "5cb9124230fc3c8f86e89d6cf619c80f"
  },
  {
    "url": "blog/skepticism/2017/02/05/scientology/index.html",
    "revision": "d0f84537a28dfe84811247dce51ea16d"
  },
  {
    "url": "blog/skepticism/2017/02/19/homeopathy/index.html",
    "revision": "c025e4ceb00a03e22a96a9e4559c226c"
  },
  {
    "url": "blog/skepticism/2017/02/19/index.html",
    "revision": "9ec646fb147ed1aa7a635a36e07712fb"
  },
  {
    "url": "blog/skepticism/2017/02/19/lottery/index.html",
    "revision": "16213e9c9cf2504d7016d452b97539f0"
  },
  {
    "url": "blog/skepticism/2017/02/19/vaxxed/index.html",
    "revision": "4f996037efb00c9cc206d4e183f5279e"
  },
  {
    "url": "blog/skepticism/2017/02/19/whales/index.html",
    "revision": "b48f2fc37b55d0e47b1c0afe7fd32b4e"
  },
  {
    "url": "blog/skepticism/2017/02/index.html",
    "revision": "76b7c0897176e3b04422d4bd936ac720"
  },
  {
    "url": "blog/skepticism/2017/03/05/index.html",
    "revision": "51eb28863c2caa50ac3fad486cfad629"
  },
  {
    "url": "blog/skepticism/2017/03/05/rea/index.html",
    "revision": "bffc72825afff22b43bb549bbd9a368a"
  },
  {
    "url": "blog/skepticism/2017/03/19/fake/index.html",
    "revision": "94d7e9e7426b60c112ffaf79d6c350f8"
  },
  {
    "url": "blog/skepticism/2017/03/19/index.html",
    "revision": "3ca5ceea9377fae71a3cd40ed0e76a1d"
  },
  {
    "url": "blog/skepticism/2017/03/19/murder/index.html",
    "revision": "839d8687fbad824bbbfd455f4e2d1918"
  },
  {
    "url": "blog/skepticism/2017/03/26/census/index.html",
    "revision": "cac335630212e3fbea4d15c7ca7674b6"
  },
  {
    "url": "blog/skepticism/2017/03/26/index.html",
    "revision": "b0e308ede1f69c30966c354c575ffdc2"
  },
  {
    "url": "blog/skepticism/2017/03/26/nzmj/index.html",
    "revision": "49d699d35e53b568e57bfc0f9400fdd7"
  },
  {
    "url": "blog/skepticism/2017/03/26/shaquille/index.html",
    "revision": "3b04d0f84451b1fc2b270ec8c86f1138"
  },
  {
    "url": "blog/skepticism/2017/03/index.html",
    "revision": "244e3103b0eb05dddac56ba1dabfc3da"
  },
  {
    "url": "blog/skepticism/2017/04/02/index.html",
    "revision": "f862c0e837eda134bb06f05a87c386ea"
  },
  {
    "url": "blog/skepticism/2017/04/02/nasa/index.html",
    "revision": "cbc9b69fc7930ea128de44a3b3520175"
  },
  {
    "url": "blog/skepticism/2017/04/02/science/index.html",
    "revision": "0d8fe55a27d7a457d7f784ec6519ba96"
  },
  {
    "url": "blog/skepticism/2017/04/02/vaxxed/index.html",
    "revision": "ad04eba47e47034d084d4017d83bb489"
  },
  {
    "url": "blog/skepticism/2017/04/09/index.html",
    "revision": "f980913721b7f09b0b548d8d3668708c"
  },
  {
    "url": "blog/skepticism/2017/04/09/tekiri/index.html",
    "revision": "ffcc1b905847e55b68c268ec56685882"
  },
  {
    "url": "blog/skepticism/2017/04/09/vaxxed/index.html",
    "revision": "bc5226fee1ca36c25fa405d0abe2f012"
  },
  {
    "url": "blog/skepticism/2017/04/23/arise/index.html",
    "revision": "ba470aca9cd112d95d02786752d53ca6"
  },
  {
    "url": "blog/skepticism/2017/04/23/index.html",
    "revision": "da366a6009199301842c3b2937d6bd88"
  },
  {
    "url": "blog/skepticism/2017/04/23/kelvin/index.html",
    "revision": "0ce9af4826f2ed207ab1803c47f44f29"
  },
  {
    "url": "blog/skepticism/2017/04/index.html",
    "revision": "6eb6f497821f5f959f86d69a9157f8fa"
  },
  {
    "url": "blog/skepticism/2017/05/07/cancer/index.html",
    "revision": "889d5ee01e7d6a2ce964d1ded91525c7"
  },
  {
    "url": "blog/skepticism/2017/05/07/index.html",
    "revision": "03c00110e7b2de87ac2c2e1abee0cafc"
  },
  {
    "url": "blog/skepticism/2017/05/07/nigel/index.html",
    "revision": "2be03cd422f543b9e8c16b56e336181d"
  },
  {
    "url": "blog/skepticism/2017/05/21/blasphemy/index.html",
    "revision": "e6c56c4a3e7446ef657f92bba29f01c0"
  },
  {
    "url": "blog/skepticism/2017/05/21/flat/index.html",
    "revision": "a46e45b2ad2ec2cef4c29af7dde76ff6"
  },
  {
    "url": "blog/skepticism/2017/05/21/index.html",
    "revision": "bcc9cdf476cba3394d13d97f8de9410b"
  },
  {
    "url": "blog/skepticism/2017/05/21/maori/index.html",
    "revision": "f84b7c119b1e63d1a84b6dd64c3ed59c"
  },
  {
    "url": "blog/skepticism/2017/05/index.html",
    "revision": "1e648c9229b1b40fe12377dd5633ae7f"
  },
  {
    "url": "blog/skepticism/2017/06/04/bigelow/index.html",
    "revision": "2c4227961a3db6e9492349de45170d85"
  },
  {
    "url": "blog/skepticism/2017/06/04/climate/index.html",
    "revision": "b4e420cbfc1fd5f008fa6f02fae6e74a"
  },
  {
    "url": "blog/skepticism/2017/06/04/hansford/index.html",
    "revision": "f91bfd67eefdbb78fa53e9d0e006d873"
  },
  {
    "url": "blog/skepticism/2017/06/04/index.html",
    "revision": "2feb096bb6cdfe96513714bab9295400"
  },
  {
    "url": "blog/skepticism/2017/06/04/wasp/index.html",
    "revision": "3286c381afb3362ebf2a44a1cf902394"
  },
  {
    "url": "blog/skepticism/2017/06/11/colonic/index.html",
    "revision": "f97c3c70556389611d73614513557127"
  },
  {
    "url": "blog/skepticism/2017/06/11/credulous/index.html",
    "revision": "593f510458dec66c5d12dc7b4270e28c"
  },
  {
    "url": "blog/skepticism/2017/06/11/index.html",
    "revision": "2be7fd7141cdc8ce5b75f849449183a4"
  },
  {
    "url": "blog/skepticism/2017/06/11/journals/index.html",
    "revision": "4c59a7f541efe0b079a307ed33974c03"
  },
  {
    "url": "blog/skepticism/2017/06/18/breatharians/index.html",
    "revision": "b2359bfb983f4a7db565767ff3f3a61d"
  },
  {
    "url": "blog/skepticism/2017/06/18/fieldays/index.html",
    "revision": "84a67bcf9c21d7cb6d57d2a99fac47e4"
  },
  {
    "url": "blog/skepticism/2017/06/18/index.html",
    "revision": "52682791e9a2666331425954e98dede9"
  },
  {
    "url": "blog/skepticism/2017/06/18/jw/index.html",
    "revision": "61fc5f0a2d440b9461a926d6ec8e17f6"
  },
  {
    "url": "blog/skepticism/2017/06/18/oil/index.html",
    "revision": "da9cfddc721fb3b802e7403c4e42e075"
  },
  {
    "url": "blog/skepticism/2017/06/index.html",
    "revision": "ce4ff33ef1c67eedd73c501efc01cd34"
  },
  {
    "url": "blog/skepticism/2017/07/02/baby/index.html",
    "revision": "a8d2ed565890d2c377f59270b1388cd0"
  },
  {
    "url": "blog/skepticism/2017/07/02/index.html",
    "revision": "53301cc323acc42590d110c266d2cc62"
  },
  {
    "url": "blog/skepticism/2017/07/02/infowars/index.html",
    "revision": "6b42664575b308c52ef414ee2cc10a3d"
  },
  {
    "url": "blog/skepticism/2017/07/02/scientology/index.html",
    "revision": "3b641ed99c3b153a84b8e4b15a56b723"
  },
  {
    "url": "blog/skepticism/2017/07/16/bananas/index.html",
    "revision": "612f8e380e01ae71201dbb4f612afde1"
  },
  {
    "url": "blog/skepticism/2017/07/16/circles/index.html",
    "revision": "0e82475d0cac91f3be8622bdcbf02c8b"
  },
  {
    "url": "blog/skepticism/2017/07/16/index.html",
    "revision": "e6df7fefd69f8f261c6336afe1fc0daf"
  },
  {
    "url": "blog/skepticism/2017/07/16/siggi/index.html",
    "revision": "b1f2e88fd34da385dda6e968c0e5d83b"
  },
  {
    "url": "blog/skepticism/2017/07/16/vaxxed/index.html",
    "revision": "b0b4468071c28dd887e472396d59ec6f"
  },
  {
    "url": "blog/skepticism/2017/07/30/bleach/index.html",
    "revision": "c3d5cd82a15fc4e464c2ab084bf2e79d"
  },
  {
    "url": "blog/skepticism/2017/07/30/bluebeam/index.html",
    "revision": "4e924269d3282f7d636e5607a5ae20df"
  },
  {
    "url": "blog/skepticism/2017/07/30/index.html",
    "revision": "823ca9fb4ee6f90aadb8108f411040dd"
  },
  {
    "url": "blog/skepticism/2017/07/30/police/index.html",
    "revision": "6e9a5c1114c8b95f4feff1013ada3fc0"
  },
  {
    "url": "blog/skepticism/2017/07/index.html",
    "revision": "55206cd3db4f533bd3c42f590ef2e474"
  },
  {
    "url": "blog/skepticism/2017/08/06/conned/index.html",
    "revision": "3a9cddfeb4c7af30f5193af42729419b"
  },
  {
    "url": "blog/skepticism/2017/08/06/doll/index.html",
    "revision": "d0c8f9da7df74dd93f4f64e32e63abfc"
  },
  {
    "url": "blog/skepticism/2017/08/06/index.html",
    "revision": "9d9908c6d3b54dde42dd891ca2f69013"
  },
  {
    "url": "blog/skepticism/2017/08/06/jacinda/index.html",
    "revision": "ee72c3f249a7b2587efc5b2d4f7002ee"
  },
  {
    "url": "blog/skepticism/2017/08/06/lotto/index.html",
    "revision": "055988fbf64cd019202117dca9b63e4e"
  },
  {
    "url": "blog/skepticism/2017/08/27/index.html",
    "revision": "95a88e5282d8cda9ec17ebf8ca051f05"
  },
  {
    "url": "blog/skepticism/2017/08/27/naturopath/index.html",
    "revision": "ff434d7ddfa42e340bd1162f26681784"
  },
  {
    "url": "blog/skepticism/2017/08/27/satanic/index.html",
    "revision": "b036e8069e384a0126008c940a5fcdfd"
  },
  {
    "url": "blog/skepticism/2017/08/index.html",
    "revision": "7f5302a356e266646998a18cda8e6628"
  },
  {
    "url": "blog/skepticism/2017/09/03/apocalypse/index.html",
    "revision": "5c1319c920724122d959b9e4f8e4038e"
  },
  {
    "url": "blog/skepticism/2017/09/03/cancer/index.html",
    "revision": "36ca132de02a7b4ef609fb0c5a24c8e7"
  },
  {
    "url": "blog/skepticism/2017/09/03/index.html",
    "revision": "5cf25f7e7dc8095719aefb6d5129ab31"
  },
  {
    "url": "blog/skepticism/2017/09/03/rectangle/index.html",
    "revision": "12dd0347d2e477b4440ade23e1ccbc2e"
  },
  {
    "url": "blog/skepticism/2017/09/03/stargate/index.html",
    "revision": "da11b704aeba85c0876c2ef8da651d9b"
  },
  {
    "url": "blog/skepticism/2017/09/index.html",
    "revision": "276a5bc8b0811c6bf4b10c7c995a342b"
  },
  {
    "url": "blog/skepticism/2017/10/01/apocalypse/index.html",
    "revision": "19cd30199e290c742eb4b66b4ee1b203"
  },
  {
    "url": "blog/skepticism/2017/10/01/freeman/index.html",
    "revision": "50f708514f7aaa5e70203b8a76438dcc"
  },
  {
    "url": "blog/skepticism/2017/10/01/index.html",
    "revision": "cd10b1de6fe8c4d90deab1719d2d3650"
  },
  {
    "url": "blog/skepticism/2017/10/01/pharmacy/index.html",
    "revision": "6eb6b4218bd956e5ea6110dafe13cd5b"
  },
  {
    "url": "blog/skepticism/2017/10/08/index.html",
    "revision": "4808e5b65330c4df637c1dd001d7a59b"
  },
  {
    "url": "blog/skepticism/2017/10/08/pill/index.html",
    "revision": "aee6b7c9135949eda5622e68af6faba9"
  },
  {
    "url": "blog/skepticism/2017/10/08/qsb/index.html",
    "revision": "c482dc59f43202c74dad8772d146ef45"
  },
  {
    "url": "blog/skepticism/2017/10/08/vegas/index.html",
    "revision": "a71a3baff6e6712af2063de0debdd75b"
  },
  {
    "url": "blog/skepticism/2017/10/15/doterra/index.html",
    "revision": "e873c43661bcf841d08aa4e072b99a43"
  },
  {
    "url": "blog/skepticism/2017/10/15/index.html",
    "revision": "2d12fe1e6d68e0313da9b035e561b9d3"
  },
  {
    "url": "blog/skepticism/2017/10/15/lie/index.html",
    "revision": "016b33114212a066ab80b52de98a2cd2"
  },
  {
    "url": "blog/skepticism/2017/10/15/soap/index.html",
    "revision": "8eeca86b22441d8251b2348b1416497d"
  },
  {
    "url": "blog/skepticism/2017/10/index.html",
    "revision": "c33679d5cfbd4e6684fa2ce5957144d0"
  },
  {
    "url": "blog/skepticism/2017/11/05/conference/index.html",
    "revision": "134578281dacc339261a56b6bcbab97c"
  },
  {
    "url": "blog/skepticism/2017/11/05/glyphosate/index.html",
    "revision": "575a2f7da4df0843ca56d97d7ae5adaf"
  },
  {
    "url": "blog/skepticism/2017/11/05/index.html",
    "revision": "6009110b9d4f840ebfd8a036cac5de2f"
  },
  {
    "url": "blog/skepticism/2017/11/05/stranded/index.html",
    "revision": "8d20b5c3ed3872d1cfd9089a5f7c1580"
  },
  {
    "url": "blog/skepticism/2017/11/05/tracts/index.html",
    "revision": "9080bb5cb9ba00362a35f2292cc8acdb"
  },
  {
    "url": "blog/skepticism/2017/11/12/ghost/index.html",
    "revision": "83de8c08ada94db9af70fb92d937872e"
  },
  {
    "url": "blog/skepticism/2017/11/12/green/index.html",
    "revision": "ab631b88d64b87740d79b9dc743fbdc6"
  },
  {
    "url": "blog/skepticism/2017/11/12/harassment/index.html",
    "revision": "1882869297a5f2a5fc22ad96c675d1c4"
  },
  {
    "url": "blog/skepticism/2017/11/12/index.html",
    "revision": "aa515718bacc334887f072fec92c7c08"
  },
  {
    "url": "blog/skepticism/2017/11/12/libby/index.html",
    "revision": "86303d78572093113b6c1b6c85071d9b"
  },
  {
    "url": "blog/skepticism/2017/11/index.html",
    "revision": "bfe6b4a91e99bc473fc328439a6f9705"
  },
  {
    "url": "blog/skepticism/2017/12/03/acupuncture/index.html",
    "revision": "7fb193d0f6ad0d573702e607137c40fc"
  },
  {
    "url": "blog/skepticism/2017/12/03/denialism/index.html",
    "revision": "81179a452719afacecc4b17de81f90ab"
  },
  {
    "url": "blog/skepticism/2017/12/03/dowsing/index.html",
    "revision": "84678b1b90091e5df13d8695cc92f787"
  },
  {
    "url": "blog/skepticism/2017/12/03/holes/index.html",
    "revision": "663c8210c7398d9a9ad2299136bf5ce1"
  },
  {
    "url": "blog/skepticism/2017/12/03/index.html",
    "revision": "a66fd783b2193ca5d603adf9a17409b2"
  },
  {
    "url": "blog/skepticism/2017/12/17/index.html",
    "revision": "342c9ee27d3de1e68eeca3c02ef0fb3a"
  },
  {
    "url": "blog/skepticism/2017/12/17/nhs/index.html",
    "revision": "46a7c122632db3432281f6ac2ab9c594"
  },
  {
    "url": "blog/skepticism/2017/12/17/oto/index.html",
    "revision": "0b244d1d52f649f338b5f5c0c163078b"
  },
  {
    "url": "blog/skepticism/2017/12/17/pastafarian/index.html",
    "revision": "7220f5870b737908e2c53cb6dd1dcddb"
  },
  {
    "url": "blog/skepticism/2017/12/17/shc/index.html",
    "revision": "56e043d59611025f1876b461520fd8f2"
  },
  {
    "url": "blog/skepticism/2017/12/17/wellworks/index.html",
    "revision": "96262dd826020b5b11a3a6bc99bf2113"
  },
  {
    "url": "blog/skepticism/2017/12/index.html",
    "revision": "6c400b65e1ddb171fdc8ced724b7af68"
  },
  {
    "url": "blog/skepticism/2017/index.html",
    "revision": "eddccde1cff6ed70ee91cd6a1216fc1e"
  },
  {
    "url": "blog/skepticism/2018/01/21/grounding/index.html",
    "revision": "48bcddef63105dca0d7753c383817759"
  },
  {
    "url": "blog/skepticism/2018/01/21/index.html",
    "revision": "1681af786bdd33098f595d955e936198"
  },
  {
    "url": "blog/skepticism/2018/01/21/naturopath/index.html",
    "revision": "ab7eea8d324b7f38b2bd216949db0091"
  },
  {
    "url": "blog/skepticism/2018/01/21/respen/index.html",
    "revision": "b28a081861dfaeb49a6e527a450a793f"
  },
  {
    "url": "blog/skepticism/2018/01/28/bears/index.html",
    "revision": "49b409f63a650b1d3793f12302262ff8"
  },
  {
    "url": "blog/skepticism/2018/01/28/index.html",
    "revision": "a44409c4a836355244ec6b48e39ece1c"
  },
  {
    "url": "blog/skepticism/2018/01/28/peppering/index.html",
    "revision": "ad993851c1af0520156945f87b39e68f"
  },
  {
    "url": "blog/skepticism/2018/01/28/pet/index.html",
    "revision": "f069ba26baf3c7bd833dc391f69bbb37"
  },
  {
    "url": "blog/skepticism/2018/01/28/quake/index.html",
    "revision": "3cc1d6cdcbcc8ca017891f79eeb1b79f"
  },
  {
    "url": "blog/skepticism/2018/01/28/scientology/index.html",
    "revision": "c3dd6cac14ffd2fa354804ffe34ca632"
  },
  {
    "url": "blog/skepticism/2018/01/index.html",
    "revision": "6456e49e751c861b034f601da1be7224"
  },
  {
    "url": "blog/skepticism/2018/02/11/asa/index.html",
    "revision": "6a45163526ec2dcaa53c55a0249d20e9"
  },
  {
    "url": "blog/skepticism/2018/02/11/cannabis/index.html",
    "revision": "aa9ea4adf47af3b0fdb97fe9183c00dd"
  },
  {
    "url": "blog/skepticism/2018/02/11/elon/index.html",
    "revision": "6a38ce071a9161edd9a9b49c98372608"
  },
  {
    "url": "blog/skepticism/2018/02/11/homeopathy/index.html",
    "revision": "512e2848b055a731716ae2faa34b43be"
  },
  {
    "url": "blog/skepticism/2018/02/11/index.html",
    "revision": "9ee04f76cca82a39feb0c051ccefb577"
  },
  {
    "url": "blog/skepticism/2018/02/11/water/index.html",
    "revision": "5d96b3137f5745bc67792327213478cf"
  },
  {
    "url": "blog/skepticism/2018/02/25/crisis/index.html",
    "revision": "92cceb5af9ebdc3f001876eec282c7f4"
  },
  {
    "url": "blog/skepticism/2018/02/25/eggs/index.html",
    "revision": "827c9f3f9cfe231001f4cf2de92800ea"
  },
  {
    "url": "blog/skepticism/2018/02/25/fsm/index.html",
    "revision": "3df2bc976789f3a835248934582d0326"
  },
  {
    "url": "blog/skepticism/2018/02/25/index.html",
    "revision": "20916cca5b9bd14283ac7488fc6e7461"
  },
  {
    "url": "blog/skepticism/2018/02/25/number/index.html",
    "revision": "dad13405aeb5d08fbbab53d70c705e0c"
  },
  {
    "url": "blog/skepticism/2018/02/25/quackery/index.html",
    "revision": "a616212d7c4b98f4e55b85adc320afbe"
  },
  {
    "url": "blog/skepticism/2018/02/index.html",
    "revision": "47ac1aa7d79bbe027364bda7ed39d01a"
  },
  {
    "url": "blog/skepticism/2018/03/11/ai/index.html",
    "revision": "d60712db4da89e6a291ed926aff737bc"
  },
  {
    "url": "blog/skepticism/2018/03/11/index.html",
    "revision": "823a4ba486cfbb2e43da6033d114b823"
  },
  {
    "url": "blog/skepticism/2018/03/11/radiation/index.html",
    "revision": "edbdfeed3a50f44057072789ca02998a"
  },
  {
    "url": "blog/skepticism/2018/03/11/reiki/index.html",
    "revision": "4e13154345ec46ba0fd7aa863455e016"
  },
  {
    "url": "blog/skepticism/2018/03/11/ufo/index.html",
    "revision": "73c31fae18735e535383d81e3f65f179"
  },
  {
    "url": "blog/skepticism/2018/03/18/ghost/index.html",
    "revision": "862a9528552d1765099691cc8d43b667"
  },
  {
    "url": "blog/skepticism/2018/03/18/index.html",
    "revision": "628031e48960a3e7a6883db07898a6f6"
  },
  {
    "url": "blog/skepticism/2018/03/18/psychic/index.html",
    "revision": "23cfdc7e8995630a526bd3e8989b4ace"
  },
  {
    "url": "blog/skepticism/2018/03/18/quack/index.html",
    "revision": "80fd8d8d49777f10eb1b1f06671b7c86"
  },
  {
    "url": "blog/skepticism/2018/03/18/radiation/index.html",
    "revision": "4a796cbfe983952d71f99ce7c6cf7547"
  },
  {
    "url": "blog/skepticism/2018/03/index.html",
    "revision": "b52f8f55a533baf44e1732ea48b0de89"
  },
  {
    "url": "blog/skepticism/2018/04/08/calocurb/index.html",
    "revision": "6efbbed0d71f7c534508008dc6f12fd4"
  },
  {
    "url": "blog/skepticism/2018/04/08/cam/index.html",
    "revision": "0331eb6ce52840580faec6aebbe54977"
  },
  {
    "url": "blog/skepticism/2018/04/08/index.html",
    "revision": "1ddd9d3544030229a703960781095615"
  },
  {
    "url": "blog/skepticism/2018/04/08/psychic/index.html",
    "revision": "101223747804609baa94f99e876dbe63"
  },
  {
    "url": "blog/skepticism/2018/04/08/vaccines/index.html",
    "revision": "3e5abc10fcb86fc962edd3ea89f6b5f7"
  },
  {
    "url": "blog/skepticism/2018/04/15/coffee/index.html",
    "revision": "d2fe88fba672aa209edb8d7b8378589f"
  },
  {
    "url": "blog/skepticism/2018/04/15/ignorance/index.html",
    "revision": "9205704e3cc5d77302171a488e535821"
  },
  {
    "url": "blog/skepticism/2018/04/15/index.html",
    "revision": "a296e318ca38239310d3791a72c4273c"
  },
  {
    "url": "blog/skepticism/2018/04/15/nasa/index.html",
    "revision": "c402bf5f2adfe4e5aa6fdd2e4d45e4e2"
  },
  {
    "url": "blog/skepticism/2018/04/15/tapu/index.html",
    "revision": "4a7e2356577dac6777ff4e6ab27871da"
  },
  {
    "url": "blog/skepticism/2018/04/29/google/index.html",
    "revision": "beb5eabd941dc4bda8c7c8bd09015c42"
  },
  {
    "url": "blog/skepticism/2018/04/29/homeopathy/index.html",
    "revision": "e4c0e515f3316fc0623a6372533cbe1f"
  },
  {
    "url": "blog/skepticism/2018/04/29/index.html",
    "revision": "9ce87454d3a52f36d6836f3bdc8684d2"
  },
  {
    "url": "blog/skepticism/2018/04/29/ken/index.html",
    "revision": "3ddb31d8d03fcdf6db22fb4484898349"
  },
  {
    "url": "blog/skepticism/2018/04/29/v2k/index.html",
    "revision": "b3fb94657bde3ddbdb4db0fcdefd94f8"
  },
  {
    "url": "blog/skepticism/2018/04/index.html",
    "revision": "9471a215541484117fdaaf799f7d75d6"
  },
  {
    "url": "blog/skepticism/2018/05/13/astrology/index.html",
    "revision": "6a785687bc4fbf64d2598ec49442a19d"
  },
  {
    "url": "blog/skepticism/2018/05/13/crystals/index.html",
    "revision": "ce3dbee629fb19a76e47d4f931636c52"
  },
  {
    "url": "blog/skepticism/2018/05/13/dawkins/index.html",
    "revision": "3e8b489662f36cea988068f66a3b6d49"
  },
  {
    "url": "blog/skepticism/2018/05/13/index.html",
    "revision": "38787a0c4e024f33a8731916262a6716"
  },
  {
    "url": "blog/skepticism/2018/05/13/kangen/index.html",
    "revision": "9147f79609ebb05dbf63d2000778dc80"
  },
  {
    "url": "blog/skepticism/2018/05/13/vitamins/index.html",
    "revision": "2e2030416a604071d82187a322b79822"
  },
  {
    "url": "blog/skepticism/2018/05/27/flat/index.html",
    "revision": "3842f9818f5363a469798fc031bc2da5"
  },
  {
    "url": "blog/skepticism/2018/05/27/index.html",
    "revision": "771b51e8db633e15d5d0de4f318245ac"
  },
  {
    "url": "blog/skepticism/2018/05/27/kangen/index.html",
    "revision": "a39c6ecd600eb550e5cd45e9595dc166"
  },
  {
    "url": "blog/skepticism/2018/05/27/ness/index.html",
    "revision": "833c1c438d8092709b9fc1c6428f32a5"
  },
  {
    "url": "blog/skepticism/2018/05/27/oz/index.html",
    "revision": "c65a5613818f51abc74de00e4e34717a"
  },
  {
    "url": "blog/skepticism/2018/05/27/psychic/index.html",
    "revision": "68e8fa6c7b679e6084121b175948a4d6"
  },
  {
    "url": "blog/skepticism/2018/05/index.html",
    "revision": "1164683511537b9fafcf60ccd9bf18d7"
  },
  {
    "url": "blog/skepticism/2018/06/10/astrology/index.html",
    "revision": "82d6a5a97306bd384e7842f55e6cc220"
  },
  {
    "url": "blog/skepticism/2018/06/10/index.html",
    "revision": "bfe4921effffc1efe2de99d4645e31f6"
  },
  {
    "url": "blog/skepticism/2018/06/10/nhs/index.html",
    "revision": "ceee98aca5db9215e5c1c53a26031c92"
  },
  {
    "url": "blog/skepticism/2018/06/10/shakti/index.html",
    "revision": "9ceebe9215df5d1051740c826d7d2a0d"
  },
  {
    "url": "blog/skepticism/2018/06/10/weetbix/index.html",
    "revision": "f56143c9fba5a5ad708a6bb97f368788"
  },
  {
    "url": "blog/skepticism/2018/06/24/blasphemy/index.html",
    "revision": "e6fe2e5399e534694ce9499c091afb76"
  },
  {
    "url": "blog/skepticism/2018/06/24/cannabis/index.html",
    "revision": "d5d8ca7a12f9f4af1ce74c462a0c321a"
  },
  {
    "url": "blog/skepticism/2018/06/24/hotdog/index.html",
    "revision": "a00d696262526adaefe46ccbdb710785"
  },
  {
    "url": "blog/skepticism/2018/06/24/index.html",
    "revision": "923d23955382d2eedb6f1d9f569a769f"
  },
  {
    "url": "blog/skepticism/2018/06/24/led/index.html",
    "revision": "b8a332a420141e470a1be4268e07979e"
  },
  {
    "url": "blog/skepticism/2018/06/index.html",
    "revision": "fc42fc4d911445949a9626e861506b66"
  },
  {
    "url": "blog/skepticism/2018/07/08/bullet/index.html",
    "revision": "bd0ff44263ff473d78965217bc97ba35"
  },
  {
    "url": "blog/skepticism/2018/07/08/chiros/index.html",
    "revision": "0aff7b627046b022d62138cb789567ae"
  },
  {
    "url": "blog/skepticism/2018/07/08/hiv/index.html",
    "revision": "42a8a1089b8483326b71ba2320acf8a0"
  },
  {
    "url": "blog/skepticism/2018/07/08/hrv/index.html",
    "revision": "8b8e6c7bef3c2ce3c17a732fe20d6c36"
  },
  {
    "url": "blog/skepticism/2018/07/08/index.html",
    "revision": "759f670d6ecd24021517ec61717f6e62"
  },
  {
    "url": "blog/skepticism/2018/07/22/cancer/index.html",
    "revision": "d3aec3ec4ffd38201101c9a21c474a31"
  },
  {
    "url": "blog/skepticism/2018/07/22/index.html",
    "revision": "43554237b15cfe1cccfb6a98cf52491e"
  },
  {
    "url": "blog/skepticism/2018/07/22/resurrection/index.html",
    "revision": "661831266f9169e642cc76c3a03b432c"
  },
  {
    "url": "blog/skepticism/2018/07/22/talc/index.html",
    "revision": "7ff8cf621228bd3d7c21b04dd96c50d9"
  },
  {
    "url": "blog/skepticism/2018/07/22/visas/index.html",
    "revision": "543c48138a02540da10a7fd5b8181223"
  },
  {
    "url": "blog/skepticism/2018/07/index.html",
    "revision": "b14dc51293b7d2d8f16028bf8024ce6a"
  },
  {
    "url": "blog/skepticism/2018/08/05/conf/index.html",
    "revision": "8f591a2031301f7c7871c4263b295cb0"
  },
  {
    "url": "blog/skepticism/2018/08/05/index.html",
    "revision": "c9e56e6a8b41f972c40363c72c1af261"
  },
  {
    "url": "blog/skepticism/2018/08/05/qanon/index.html",
    "revision": "4f7021d8689e8062439242285066a9b6"
  },
  {
    "url": "blog/skepticism/2018/08/19/index.html",
    "revision": "3289aa1a6cc2c57ad951dce26cd6ea73"
  },
  {
    "url": "blog/skepticism/2018/08/19/jw/index.html",
    "revision": "625493f05a39ae25bab0362fae7a89d7"
  },
  {
    "url": "blog/skepticism/2018/08/index.html",
    "revision": "407b41fd7ea5424fde854028a8b5841e"
  },
  {
    "url": "blog/skepticism/2018/09/02/allergy/index.html",
    "revision": "baeffb035f1c8344658e15e220150cc1"
  },
  {
    "url": "blog/skepticism/2018/09/02/catholic/index.html",
    "revision": "f4f2209cd23bd8dd313a46cf7d6d92cf"
  },
  {
    "url": "blog/skepticism/2018/09/02/index.html",
    "revision": "58a333c820141017c05fe181a9055ba5"
  },
  {
    "url": "blog/skepticism/2018/09/02/jw/index.html",
    "revision": "545e0c82f93ddc45af4a07744485a204"
  },
  {
    "url": "blog/skepticism/2018/09/02/sen/index.html",
    "revision": "fa0df981edc546b5fb7f7ced2f93b448"
  },
  {
    "url": "blog/skepticism/2018/09/16/1080/index.html",
    "revision": "fb9bf20d734865fa079e67dfc8a22cc8"
  },
  {
    "url": "blog/skepticism/2018/09/16/church/index.html",
    "revision": "403cf2794eacdf642f5d06ccaae9e820"
  },
  {
    "url": "blog/skepticism/2018/09/16/index.html",
    "revision": "b96cd5d1ad81930f4ad71a2b0f2536aa"
  },
  {
    "url": "blog/skepticism/2018/09/16/jones/index.html",
    "revision": "0ad980341d9bc75644b3939622f3bb42"
  },
  {
    "url": "blog/skepticism/2018/09/16/scammers/index.html",
    "revision": "cf9347e0461de12495444e6297d1f618"
  },
  {
    "url": "blog/skepticism/2018/09/30/index.html",
    "revision": "11b4d06f73e697583907ae2a98d16e80"
  },
  {
    "url": "blog/skepticism/2018/09/30/jw/index.html",
    "revision": "04d4b8aa7d26c835917027a2cdd5c04f"
  },
  {
    "url": "blog/skepticism/2018/09/30/oto/index.html",
    "revision": "abc7df9b008c0fe28cdb165530c7f35e"
  },
  {
    "url": "blog/skepticism/2018/09/30/who/index.html",
    "revision": "ca8547fe2c5e613e546b3b851c987bf3"
  },
  {
    "url": "blog/skepticism/2018/09/index.html",
    "revision": "02603f3459759e1b487dae5cb42b91a4"
  },
  {
    "url": "blog/skepticism/2018/10/14/hacked/index.html",
    "revision": "fed0c2c575a55e44295cecdc1d841820"
  },
  {
    "url": "blog/skepticism/2018/10/14/index.html",
    "revision": "906b743821b4733c3de4903255751754"
  },
  {
    "url": "blog/skepticism/2018/10/14/kangen/index.html",
    "revision": "e272fb86367fba17fc69ba07d7cb603d"
  },
  {
    "url": "blog/skepticism/2018/10/14/pakistan/index.html",
    "revision": "b3efd8db10e0e56b7a14ba8d661e60cc"
  },
  {
    "url": "blog/skepticism/2018/10/14/sarah/index.html",
    "revision": "193082fb9aa5eece4cc9ce148594e100"
  },
  {
    "url": "blog/skepticism/2018/10/28/blasphemy/index.html",
    "revision": "73fad3b2b4c3a43d0e7e31000f0fbf54"
  },
  {
    "url": "blog/skepticism/2018/10/28/hrv/index.html",
    "revision": "5dbe0a51448342a7653dc57f3bed698e"
  },
  {
    "url": "blog/skepticism/2018/10/28/index.html",
    "revision": "ac0ec67c68fedf6c0cf71ab5f432dab2"
  },
  {
    "url": "blog/skepticism/2018/10/28/jesus/index.html",
    "revision": "10b4353b7d6b439680101b1b89aacacd"
  },
  {
    "url": "blog/skepticism/2018/10/28/natural/index.html",
    "revision": "f5983d937b728beb89235507c1720da6"
  },
  {
    "url": "blog/skepticism/2018/10/index.html",
    "revision": "e0b1a3fc7784912f373605233ae00921"
  },
  {
    "url": "blog/skepticism/2018/11/04/bibi/index.html",
    "revision": "9de7574e0591a123cc8b016c2a7e9807"
  },
  {
    "url": "blog/skepticism/2018/11/04/index.html",
    "revision": "ff3a93c7eed271af37d59d2d05e351df"
  },
  {
    "url": "blog/skepticism/2018/11/04/jesus/index.html",
    "revision": "464bb0b234384a7b0841b2a205166eb9"
  },
  {
    "url": "blog/skepticism/2018/11/04/obdii/index.html",
    "revision": "10e3dbb163f085e6d80ec0a5c6776152"
  },
  {
    "url": "blog/skepticism/2018/11/04/sleepdrops/index.html",
    "revision": "ad0d027cffcf98d69201e89d4a29e486"
  },
  {
    "url": "blog/skepticism/2018/11/index.html",
    "revision": "052d5bdd92f7d4a273792b8b2f834e0f"
  },
  {
    "url": "blog/skepticism/2018/12/02/ark/index.html",
    "revision": "e4160da2eaa8cfcc9030f5b060948b00"
  },
  {
    "url": "blog/skepticism/2018/12/02/green/index.html",
    "revision": "3387037ab66a25ca7e0c7afef6e98057"
  },
  {
    "url": "blog/skepticism/2018/12/02/index.html",
    "revision": "d674056bd7112899453e60eecd6cb581"
  },
  {
    "url": "blog/skepticism/2018/12/02/ri/index.html",
    "revision": "581990b8fcfa6d7c933443412774abbf"
  },
  {
    "url": "blog/skepticism/2018/12/16/blasphemy/index.html",
    "revision": "b6f5a5223663a9f46cee3558ecaf1219"
  },
  {
    "url": "blog/skepticism/2018/12/16/index.html",
    "revision": "302d5ae55a660cd58534083e71a9aa16"
  },
  {
    "url": "blog/skepticism/2018/12/16/sleepdrops/index.html",
    "revision": "4ab080cc575a9ddafd95961231a61635"
  },
  {
    "url": "blog/skepticism/2018/12/16/tekiri/index.html",
    "revision": "c8137f5df9f3667f426704b3eedc2bce"
  },
  {
    "url": "blog/skepticism/2018/12/index.html",
    "revision": "7158bfdbfef00f1bc5bab5dfef94d114"
  },
  {
    "url": "blog/skepticism/2018/index.html",
    "revision": "8100b1440bd12fc928e91bc98981a478"
  },
  {
    "url": "blog/skepticism/2020/08/18/index.html",
    "revision": "960664298d90a3bc58c48ac728d3d0fb"
  },
  {
    "url": "blog/skepticism/2020/08/18/myths/index.html",
    "revision": "bc7220d4defb444a07825443ecfcbd8e"
  },
  {
    "url": "blog/skepticism/2020/08/index.html",
    "revision": "90feb041db5db2579674ffe54502556a"
  },
  {
    "url": "blog/skepticism/2020/10/20/election/index.html",
    "revision": "ca4e7f9b3e6664a3fafd75486780a8eb"
  },
  {
    "url": "blog/skepticism/2020/11/09/jade/index.html",
    "revision": "709a653e8abb3401f0f7bb3c581db98a"
  },
  {
    "url": "blog/skepticism/2020/11/09/luminate/index.html",
    "revision": "f683492c62bae737f53da5a0eb642c4d"
  },
  {
    "url": "blog/skepticism/2020/11/09/randi/index.html",
    "revision": "6259023599eaa180ac7da8425324a546"
  },
  {
    "url": "blog/skepticism/2020/11/09/wwg1wga/index.html",
    "revision": "764d51dd8dd16eba0602bcef4ade3c91"
  },
  {
    "url": "blog/skepticism/2020/index.html",
    "revision": "14a14a1474d38887c49aa400aea58fb9"
  },
  {
    "url": "blog/skepticism/index.html",
    "revision": "3c35978d6793e9295ff3a0a5890959db"
  },
  {
    "url": "blog/tag/index.html",
    "revision": "683c86933f67fb28605f958648b129c9"
  },
  {
    "url": "contact/index.html",
    "revision": "99bbf9e6e7dc857e043a54cd6f3da454"
  },
  {
    "url": "cv/cover/index.html",
    "revision": "8489e948bb02621b5a93eaf52919da9e"
  },
  {
    "url": "cv/full.html",
    "revision": "b125cc87e59cda4180a256c3e4b23404"
  },
  {
    "url": "cv/full/index.html",
    "revision": "064f37ac0d21a68acb5c7d63893be411"
  },
  {
    "url": "cv/index.html",
    "revision": "9dfc074bc632887386e0c43f86dd61e8"
  },
  {
    "url": "cv/short.html",
    "revision": "31a576acec13c07c42d5ecc70de96d12"
  },
  {
    "url": "googlee25d0c06da891164.html",
    "revision": "0defe75660212f417b90c5affcd03380"
  },
  {
    "url": "index.html",
    "revision": "960ee61d86ff6a179dfe37b5d9e4656c"
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
    "revision": "498a252f5e144e1f9ff2d0415c840336"
  },
  {
    "url": "media/me/index.html",
    "revision": "da2d1289d036976b8e985f4baac1446d"
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
    "revision": "06c12bbb552a5798c65647e37fbaf478"
  },
  {
    "url": "status/index.html",
    "revision": "d2523b14a00e6f8235f54952b62a8168"
  },
  {
    "url": "status/steam/index.html",
    "revision": "692cbaf8237f0e8e1e755ca40f102ede"
  },
  {
    "url": "status/twitter/index.html",
    "revision": "9bfd563ba0ffefa68a4999480a869af5"
  },
  {
    "url": "status/wikipedia/index.html",
    "revision": "8766f8df48e4ce6f1fa5d85e74d8034e"
  },
  {
    "url": "test/index.html",
    "revision": "2793ca6989c32aac3d70bc6d9768e219"
  },
  {
    "url": "test/webcam/index.html",
    "revision": "7a1c0113935ed8a812e561fb6102ce9d"
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
