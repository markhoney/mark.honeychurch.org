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
    "revision": "409d311b72de008caa0432c667115230"
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
    "revision": "018f3ca9fdc8e3cec3468e0cfe329db1"
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
    "revision": "2803e8794876d4b6738473246b68dda3"
  },
  {
    "url": "assets/js/107.js",
    "revision": "17df9cf9d0e254a37fd114c4d94d05ce"
  },
  {
    "url": "assets/js/108.js",
    "revision": "dd2d3ac981199e5024fc16dd11313f89"
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
    "revision": "04dfdff2052606fc3091d102a4897ce7"
  },
  {
    "url": "assets/js/113.js",
    "revision": "9739b30f711d76b0da5de24a6c9626c5"
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
    "revision": "7fdd4dd68689f6f18eff83aa0a353c60"
  },
  {
    "url": "assets/js/136.js",
    "revision": "392f00eae5704b14af92965399fda137"
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
    "revision": "00af4f833f7f810399ed08e4d9365622"
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
    "revision": "2a735ea937f8ca6094bf710808032cce"
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
    "revision": "ac6ddc9ad8147fccedb7acaf251683df"
  },
  {
    "url": "assets/js/175.js",
    "revision": "6d1d09e893f9c395fb058a36d2fecba1"
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
    "revision": "3c7177dec578d955363ca2b7fd328960"
  },
  {
    "url": "assets/js/193.js",
    "revision": "8a4e2d11ae11087c9419a8c925ebc034"
  },
  {
    "url": "assets/js/194.js",
    "revision": "1b25724c35c28ae2a16a97b4ee3835e6"
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
    "revision": "66116e74d81c289b1bc66d08fd9d31b5"
  },
  {
    "url": "assets/js/198.js",
    "revision": "98d82ca820d9204860e3e6fd88827434"
  },
  {
    "url": "assets/js/199.js",
    "revision": "62b496545cfa92e2e071c7d0ebb888a1"
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
    "revision": "ea6f87316b01cf102752f39bd42e8284"
  },
  {
    "url": "assets/js/201.js",
    "revision": "5789b1f36bcab38f1496c5599fa0b48c"
  },
  {
    "url": "assets/js/202.js",
    "revision": "5a34bb11ad2193ef39bd929c7f3529d8"
  },
  {
    "url": "assets/js/203.js",
    "revision": "58b22d717b7e830aa3960b2f4c737cd0"
  },
  {
    "url": "assets/js/204.js",
    "revision": "aac46340aea2f7e7b991093f1e2e5877"
  },
  {
    "url": "assets/js/205.js",
    "revision": "0b596b9d320e7aea95510ef568edbaf1"
  },
  {
    "url": "assets/js/206.js",
    "revision": "c6114a623e39cfe819b908bcb46f933a"
  },
  {
    "url": "assets/js/207.js",
    "revision": "ea5790a9625ab76bd1427bec7a759f0c"
  },
  {
    "url": "assets/js/208.js",
    "revision": "4a3c7f8b2631b201883b971975a87065"
  },
  {
    "url": "assets/js/209.js",
    "revision": "164580455b9e02247e75b8381c23e561"
  },
  {
    "url": "assets/js/21.js",
    "revision": "450d466ac8db63a00db03af8e7286ffe"
  },
  {
    "url": "assets/js/210.js",
    "revision": "4ebb30ed92f68af7c1dcd7fa263f12b4"
  },
  {
    "url": "assets/js/211.js",
    "revision": "d4c7390ee017891a8cdc2036f1946b52"
  },
  {
    "url": "assets/js/212.js",
    "revision": "d450f385a9c1896a937456316ba5b45e"
  },
  {
    "url": "assets/js/213.js",
    "revision": "c3ed5396e91907f1f898a99d56774db6"
  },
  {
    "url": "assets/js/214.js",
    "revision": "200b24b067759ea38f92feaf56617de2"
  },
  {
    "url": "assets/js/215.js",
    "revision": "9e814bf6806312046b914cace1448181"
  },
  {
    "url": "assets/js/216.js",
    "revision": "691e6929aac93b669704d606eda7809e"
  },
  {
    "url": "assets/js/217.js",
    "revision": "f1ff285d04734fe7b67f40f546e78ec8"
  },
  {
    "url": "assets/js/218.js",
    "revision": "5222164d2af95282c81406c6b6fdd848"
  },
  {
    "url": "assets/js/219.js",
    "revision": "ead8e2236d64ac8fcc74c4763f51f5e6"
  },
  {
    "url": "assets/js/22.js",
    "revision": "0b50ad64de65d27f39e1c8e065f15833"
  },
  {
    "url": "assets/js/220.js",
    "revision": "9b6ad9f65abac37fe9dcde5f3a8b51f9"
  },
  {
    "url": "assets/js/221.js",
    "revision": "cc4d201e994b46b586cbf9a67a9f030b"
  },
  {
    "url": "assets/js/222.js",
    "revision": "b8b2b1a02b7cbffbed374ccf9f41c61e"
  },
  {
    "url": "assets/js/223.js",
    "revision": "28dc8c89c8d2ea495da20bab7901b129"
  },
  {
    "url": "assets/js/224.js",
    "revision": "bcfb861fe75b3bd84ab4491dc9289264"
  },
  {
    "url": "assets/js/225.js",
    "revision": "ca06def37bffd77990650b7439c97e49"
  },
  {
    "url": "assets/js/226.js",
    "revision": "61363c3542c273c0e4b226e5704a170a"
  },
  {
    "url": "assets/js/227.js",
    "revision": "50eafce9f9f4285ad5df7ad1ed3bbb56"
  },
  {
    "url": "assets/js/228.js",
    "revision": "c4ff96c9f26691efd7920d02f2df5e23"
  },
  {
    "url": "assets/js/229.js",
    "revision": "e53fab58015a50831a5838f07d34709d"
  },
  {
    "url": "assets/js/23.js",
    "revision": "0cdbea71b7da7934943c868dc251eef3"
  },
  {
    "url": "assets/js/230.js",
    "revision": "51cbfd7a5db8c85780098e38d9dd80b0"
  },
  {
    "url": "assets/js/231.js",
    "revision": "2f532fb7056c3dd1df6aedc1dc7a8d72"
  },
  {
    "url": "assets/js/232.js",
    "revision": "2f80763c80ab7c3a18577b1ba4b22fe6"
  },
  {
    "url": "assets/js/233.js",
    "revision": "aadb47be5b942aae3024116f0fa946d2"
  },
  {
    "url": "assets/js/234.js",
    "revision": "33041de3cd91d4fda83a775b60cdaa40"
  },
  {
    "url": "assets/js/235.js",
    "revision": "39826672e03ca9ddebe0d7ab6f6280b2"
  },
  {
    "url": "assets/js/236.js",
    "revision": "c946187450c8968c618dccd1f8b5bfcd"
  },
  {
    "url": "assets/js/237.js",
    "revision": "8c9e4f207479b2a2ad7fbfb3831d6085"
  },
  {
    "url": "assets/js/238.js",
    "revision": "fc74350f2cf138c4e3272ef3dabe62df"
  },
  {
    "url": "assets/js/239.js",
    "revision": "e23f545cfee9d2e51d1c92a5ce60915d"
  },
  {
    "url": "assets/js/24.js",
    "revision": "2ca8015fd9d4bc9723b86613f4b240f5"
  },
  {
    "url": "assets/js/240.js",
    "revision": "027e5126dc7ad522a2fb376d81718843"
  },
  {
    "url": "assets/js/241.js",
    "revision": "8861fc7385255e5d1644aefc939af050"
  },
  {
    "url": "assets/js/242.js",
    "revision": "5e8377d79bc9eaf37411cc0e7f70d34f"
  },
  {
    "url": "assets/js/243.js",
    "revision": "4069542eb7fa161f9fda0bc46eae93ae"
  },
  {
    "url": "assets/js/244.js",
    "revision": "e403f34ec7ac9ae7108c25f6906a4dc2"
  },
  {
    "url": "assets/js/245.js",
    "revision": "69bcf3dee6eaae3517808d5e21eb6c13"
  },
  {
    "url": "assets/js/246.js",
    "revision": "89c10fc72b55d7b54da0de121cf5ad4a"
  },
  {
    "url": "assets/js/247.js",
    "revision": "15a8a89cfd65d4878a024a1730e98ebc"
  },
  {
    "url": "assets/js/248.js",
    "revision": "421a5ab3522b308284d9a3e2b152b2dd"
  },
  {
    "url": "assets/js/249.js",
    "revision": "05630279602f3a01e8cead3d993295c6"
  },
  {
    "url": "assets/js/25.js",
    "revision": "11c055be0783f7dd747ca67b950eb16e"
  },
  {
    "url": "assets/js/250.js",
    "revision": "7cbe8795454f4ac722e598b401e43af4"
  },
  {
    "url": "assets/js/251.js",
    "revision": "9bfd1b781479274de7c0d225df74224c"
  },
  {
    "url": "assets/js/252.js",
    "revision": "57e1df74c446749a840d5545a8c42422"
  },
  {
    "url": "assets/js/253.js",
    "revision": "2884cfb2433569ca2101c937e401b891"
  },
  {
    "url": "assets/js/254.js",
    "revision": "d75d199ddcbfa3a8f8097d35d6b9d7d4"
  },
  {
    "url": "assets/js/255.js",
    "revision": "1283934e51b0885a57bb47051ec7e056"
  },
  {
    "url": "assets/js/256.js",
    "revision": "46ec22a66b6067ee1d3789c89918b5ce"
  },
  {
    "url": "assets/js/257.js",
    "revision": "78e4a7e372ea688212d9bfdf950e077b"
  },
  {
    "url": "assets/js/258.js",
    "revision": "1fcecb8e95aa7ebe74b192ee54f4ca60"
  },
  {
    "url": "assets/js/259.js",
    "revision": "c2b624bb85cbfa68deff367d0b595729"
  },
  {
    "url": "assets/js/26.js",
    "revision": "121410c21f4634e39a6a7995eaec2592"
  },
  {
    "url": "assets/js/260.js",
    "revision": "5d678c84921bb645fdf2bd0e78337ec8"
  },
  {
    "url": "assets/js/261.js",
    "revision": "759e97eab0c69b38bd55cdf7fdcf96c5"
  },
  {
    "url": "assets/js/262.js",
    "revision": "8e2eea4243bfbe539d4703f19906ceac"
  },
  {
    "url": "assets/js/263.js",
    "revision": "2a1a6ea5973e74db728b1fe03f66913e"
  },
  {
    "url": "assets/js/264.js",
    "revision": "e6b5b14db0e8e2232bb154b5f5fdf8ac"
  },
  {
    "url": "assets/js/265.js",
    "revision": "0f74f786219cd9de5c0af5b29fd6d7c1"
  },
  {
    "url": "assets/js/266.js",
    "revision": "f54da092339656ec87ddc047541c1302"
  },
  {
    "url": "assets/js/267.js",
    "revision": "52029a7db99bf86a6f4d27d586049003"
  },
  {
    "url": "assets/js/268.js",
    "revision": "a6ab556317a4efc758636509fc1a2348"
  },
  {
    "url": "assets/js/269.js",
    "revision": "4582fd8d2eec3c51dd1b53ac77184411"
  },
  {
    "url": "assets/js/27.js",
    "revision": "1ea6a70f8050dfb2c614aa9fdc8a594b"
  },
  {
    "url": "assets/js/270.js",
    "revision": "c185b5d7f268ff9ae7b7d49b403ba1c0"
  },
  {
    "url": "assets/js/271.js",
    "revision": "d1c74a0edae8c65219381c357fe49ee6"
  },
  {
    "url": "assets/js/272.js",
    "revision": "2b21e0d0f9da8c1b017303ac05533162"
  },
  {
    "url": "assets/js/273.js",
    "revision": "f90f09070a997e1b7d4f0e4e7b902b68"
  },
  {
    "url": "assets/js/274.js",
    "revision": "b3068e88a9cf83441b286a582b3b9b03"
  },
  {
    "url": "assets/js/275.js",
    "revision": "6940a0cc59e17f0eecb0db07c508fdb2"
  },
  {
    "url": "assets/js/276.js",
    "revision": "b9a83702f4ef86193c79c1eb3e2b1b53"
  },
  {
    "url": "assets/js/277.js",
    "revision": "be9d25ec2f9e6e9d31a45113947991fd"
  },
  {
    "url": "assets/js/278.js",
    "revision": "e95df0f103063f0b68d0674ce1404ecf"
  },
  {
    "url": "assets/js/279.js",
    "revision": "1efde71cafd966a296d74cdfe63f52c0"
  },
  {
    "url": "assets/js/28.js",
    "revision": "c7d73238b2f0b9efff64e76929981bb2"
  },
  {
    "url": "assets/js/280.js",
    "revision": "87b3a940a7458e6bcd193eef4ec3800f"
  },
  {
    "url": "assets/js/281.js",
    "revision": "bfd9698ad26d4fe5c0d596ab57026225"
  },
  {
    "url": "assets/js/282.js",
    "revision": "931b1110667a2a533e6298d032edc8e0"
  },
  {
    "url": "assets/js/283.js",
    "revision": "6df1e2897493c211df4a2b9ab43423b7"
  },
  {
    "url": "assets/js/284.js",
    "revision": "98662dd60ed9ce38cf32c8da77a3aba7"
  },
  {
    "url": "assets/js/285.js",
    "revision": "cab93c81583959d465286c79fa012fb9"
  },
  {
    "url": "assets/js/286.js",
    "revision": "d0e926ccafaafc3ab2e1155b83124065"
  },
  {
    "url": "assets/js/287.js",
    "revision": "5e9e3ed26b3fd193f30ae39e5ae7cc64"
  },
  {
    "url": "assets/js/288.js",
    "revision": "62a0ac89ee847c149db28d053c6d890a"
  },
  {
    "url": "assets/js/289.js",
    "revision": "3a08c72dd1df7278535ff17655debb0f"
  },
  {
    "url": "assets/js/29.js",
    "revision": "16dc0bf3c9436aaf7a3e915a89abba4e"
  },
  {
    "url": "assets/js/290.js",
    "revision": "fb01e34b0679c8fb1815c31133c00583"
  },
  {
    "url": "assets/js/291.js",
    "revision": "41f260cb38299b42a973bc669dfdac9f"
  },
  {
    "url": "assets/js/292.js",
    "revision": "370154a9af83897ac58445b9724cf313"
  },
  {
    "url": "assets/js/293.js",
    "revision": "5b986809ab4fedad475838502f04b7a0"
  },
  {
    "url": "assets/js/294.js",
    "revision": "04fa78f8d9ed7c5b67e760e70bf007eb"
  },
  {
    "url": "assets/js/295.js",
    "revision": "e25c40567732d4a1875a8caf36038057"
  },
  {
    "url": "assets/js/296.js",
    "revision": "599e936ff4866b3ddda07439fef35a8b"
  },
  {
    "url": "assets/js/297.js",
    "revision": "494f6d002555b13a00ba3002a7a650d1"
  },
  {
    "url": "assets/js/298.js",
    "revision": "b80e4c331e4164d782c94aa547089781"
  },
  {
    "url": "assets/js/299.js",
    "revision": "2916eee337c8494499788fddc9e37c1f"
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
    "revision": "0a7fafdea3bca7afb1e499a50c7b4a10"
  },
  {
    "url": "assets/js/301.js",
    "revision": "fccb2c4ba182edb52637016306e08b24"
  },
  {
    "url": "assets/js/302.js",
    "revision": "1f4c6ce818e5db41f91a7a047956e2bd"
  },
  {
    "url": "assets/js/303.js",
    "revision": "f5e4a5a5933d1c9d4561b156bb524386"
  },
  {
    "url": "assets/js/304.js",
    "revision": "890903f40ed503e6b5eabaa90d2e4d05"
  },
  {
    "url": "assets/js/305.js",
    "revision": "4b28ccf1f6955318d0eb24cf6fc74dc0"
  },
  {
    "url": "assets/js/306.js",
    "revision": "ca65e970080ddafc5c3bced4c2b6edf6"
  },
  {
    "url": "assets/js/307.js",
    "revision": "93d28aefdb4e46b5ad45882820e1ba31"
  },
  {
    "url": "assets/js/308.js",
    "revision": "8d64931c95d679d75fe528ea2bf77a33"
  },
  {
    "url": "assets/js/309.js",
    "revision": "0b41bd90af22679de6324cbdb8c65dce"
  },
  {
    "url": "assets/js/31.js",
    "revision": "9817560aa5e0e1666e248fdb8572cc70"
  },
  {
    "url": "assets/js/310.js",
    "revision": "3083d9b8286001c8a7fdb8c0000e88bf"
  },
  {
    "url": "assets/js/311.js",
    "revision": "833825468298d057292094a7bd66701f"
  },
  {
    "url": "assets/js/312.js",
    "revision": "fa882494e7c669e5f8ced4036fe5692a"
  },
  {
    "url": "assets/js/313.js",
    "revision": "b06bd72fe007a7f33834732ab8e4f87f"
  },
  {
    "url": "assets/js/314.js",
    "revision": "fd97dd62ddc5ef287de2d9781b402c18"
  },
  {
    "url": "assets/js/315.js",
    "revision": "691b2a8d626446e6abd5783569ba5f7e"
  },
  {
    "url": "assets/js/316.js",
    "revision": "9e522032d80fc6c88ede39787eee9869"
  },
  {
    "url": "assets/js/317.js",
    "revision": "b9e4ef37e1cf683e7a7f12d76e1b3429"
  },
  {
    "url": "assets/js/318.js",
    "revision": "c434a2973e235df466ea9e4c67ced052"
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
    "revision": "53a4c929d7d4466e4b486dac400d9ee3"
  },
  {
    "url": "assets/js/321.js",
    "revision": "a74788c1dcb71409a70591e73be4479d"
  },
  {
    "url": "assets/js/322.js",
    "revision": "c9b5fe280b81ff9d56c769755a207cde"
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
    "revision": "28df5f2f1bcc32510ec9acb672117374"
  },
  {
    "url": "assets/js/329.js",
    "revision": "5fb233f5e9d423b71943c4911e663b17"
  },
  {
    "url": "assets/js/33.js",
    "revision": "01e8e58422bd9d32d864bb391a703c46"
  },
  {
    "url": "assets/js/330.js",
    "revision": "6f026243f2a5c308d7655f1b10251bfd"
  },
  {
    "url": "assets/js/331.js",
    "revision": "f67bfc8a743e041209633b7f1c65e288"
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
    "revision": "0ae90c7d7fd1aa2496fe4d6eb84cb810"
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
    "revision": "7cb48b7e9349d85f86d1df7812f7bea3"
  },
  {
    "url": "assets/js/349.js",
    "revision": "827b41fed3107866d0c216831c93fe86"
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
    "revision": "4c850af75af0208e25d64e865c764402"
  },
  {
    "url": "assets/js/352.js",
    "revision": "d9ba5edd87a9df5e1c8ef8c7c6d0117a"
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
    "revision": "de040dd9dd1ccce2d7653569159b4580"
  },
  {
    "url": "assets/js/357.js",
    "revision": "c331499b547bfc1ac067c3bc4db95c4c"
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
    "revision": "f381363386ef6c25bb8e7b99363aea83"
  },
  {
    "url": "assets/js/38.js",
    "revision": "b382666d35a196134c5511ef067bb5f8"
  },
  {
    "url": "assets/js/380.js",
    "revision": "c717cf5ee27db1ef8d8cc0a96e026df1"
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
    "revision": "6b04ff16a3e0bf647322ce18a7316cbc"
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
    "revision": "391b6c9f36c060979cecdb9ae692d8a8"
  },
  {
    "url": "assets/js/394.js",
    "revision": "65603ffcd790559d3e90cb9327f4e473"
  },
  {
    "url": "assets/js/395.js",
    "revision": "9e00b8120a3bcb8f3d3799c52d5cb9f7"
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
    "revision": "0a51222698535f7fea94c8af750ca796"
  },
  {
    "url": "assets/js/408.js",
    "revision": "e19f0baffb8c1d7856cd60ae3f5170e3"
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
    "revision": "f2e4131edbc3302cecc06b4dd2c1a1f7"
  },
  {
    "url": "assets/js/413.js",
    "revision": "44a73a9ae507bb7bba84bc47dfee2869"
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
    "revision": "1dc68158987f1f9bb8a7eb3710184ea4"
  },
  {
    "url": "assets/js/42.js",
    "revision": "9fa7e2c3298d8c9df13a3741da888fdb"
  },
  {
    "url": "assets/js/420.js",
    "revision": "13d160ec1b137ed4dd1e227a3d6aa74d"
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
    "revision": "fad0f5b31d49528674b8a47b0417ba4c"
  },
  {
    "url": "assets/js/425.js",
    "revision": "b8039a75592935644c73c092cee6d713"
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
    "revision": "75d2c34ac3986cb24848adf7b310b5db"
  },
  {
    "url": "assets/js/436.js",
    "revision": "58e1604647b21befea5142fbbed7452f"
  },
  {
    "url": "assets/js/437.js",
    "revision": "a548b95bb1de449e8920ef4abf06d4b3"
  },
  {
    "url": "assets/js/438.js",
    "revision": "35056d9906f26f406d53cebed9194ee1"
  },
  {
    "url": "assets/js/439.js",
    "revision": "7aab3cb2a7dac9691a1d84ba0ea65f06"
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
    "revision": "945586a29b3cbd20c6149af70261ca66"
  },
  {
    "url": "assets/js/451.js",
    "revision": "fd4d1b10a8d80c6acebdae92f63818c6"
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
    "revision": "060179dafbd65d2d9aef462672c958d7"
  },
  {
    "url": "assets/js/455.js",
    "revision": "b544e3325bcb02dbc9c420e45dcadf8d"
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
    "revision": "64114a7b442dc571db0f5f5cde244aea"
  },
  {
    "url": "assets/js/484.js",
    "revision": "6d0f050b9ff36b0397e48409d1294aa4"
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
    "revision": "63d4daec11e12a6dd32913b1d6e62362"
  },
  {
    "url": "assets/js/498.js",
    "revision": "c75d4f9787055adc34cc148c392fbbaf"
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
    "revision": "b7b6e57e0cedfe40eb826e67137a430b"
  },
  {
    "url": "assets/js/504.js",
    "revision": "15cd174ada7f03870ce4ecc4281003f8"
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
    "revision": "4dd4dec7e0f2d8fd16d85b72ee31698c"
  },
  {
    "url": "assets/js/518.js",
    "revision": "7eb69c96b53302b87ebb224776ce8d3b"
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
    "revision": "ad5c7656366b228c7ff743d5891f830d"
  },
  {
    "url": "assets/js/523.js",
    "revision": "6067283863d2aca68f2c20d337d28c5d"
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
    "revision": "606c8f27a0bfb9408583d30fed28bc53"
  },
  {
    "url": "assets/js/548.js",
    "revision": "ebf7859ad4c01dbc555a1cfa12ed27e0"
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
    "revision": "194ece8a6c5a4f19c4b1aa5ef6afaca9"
  },
  {
    "url": "assets/js/557.js",
    "revision": "282740e07c1c6bca9ae07a5587c4ffe8"
  },
  {
    "url": "assets/js/558.js",
    "revision": "c677d3195ff9690862c7c205f2571d89"
  },
  {
    "url": "assets/js/559.js",
    "revision": "ece5918471e1397ae4a8cf7426f66ec6"
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
    "revision": "a6811757f77c33da0b11af9f72d53686"
  },
  {
    "url": "assets/js/563.js",
    "revision": "7f181321d55e3c204fb042e81177b23c"
  },
  {
    "url": "assets/js/564.js",
    "revision": "098dc7b7458f7be7ad8337ae1f53c96f"
  },
  {
    "url": "assets/js/565.js",
    "revision": "cacd4cf7a73937ace719ede6bf1f38bc"
  },
  {
    "url": "assets/js/566.js",
    "revision": "3875316965dd622f0ef25494684d3425"
  },
  {
    "url": "assets/js/567.js",
    "revision": "1a0e47c4adc5d12ae79923d4eccb18ef"
  },
  {
    "url": "assets/js/568.js",
    "revision": "3bc273e416697fa9a54687adfa0af94b"
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
    "revision": "1255d90ce1ddcaf0fde098e5ff08e600"
  },
  {
    "url": "assets/js/573.js",
    "revision": "fab5a61354e2808c9db1366d20783ba4"
  },
  {
    "url": "assets/js/574.js",
    "revision": "5db39fa0aae5e984b9c73ac70e3e4c85"
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
    "revision": "dfb53e669db4f5ddde908f26e4605972"
  },
  {
    "url": "assets/js/597.js",
    "revision": "48253afc7eab2a46f79ff7421751ef92"
  },
  {
    "url": "assets/js/598.js",
    "revision": "7d9ff7f664d1b8c35850d27c094a83ed"
  },
  {
    "url": "assets/js/599.js",
    "revision": "bd49d20e2fa688f587bce4ae17fca676"
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
    "revision": "41d3d701b178e22559ca1e70abdea226"
  },
  {
    "url": "assets/js/601.js",
    "revision": "194c033e17f07508054cd3d880d16e6e"
  },
  {
    "url": "assets/js/602.js",
    "revision": "c9b7d6c0e6d149029b54f8d79c5786f2"
  },
  {
    "url": "assets/js/603.js",
    "revision": "008e6c63d1749cef1a1ee03663f67a73"
  },
  {
    "url": "assets/js/604.js",
    "revision": "592f07f4a88ec020d03d031b0673bbb3"
  },
  {
    "url": "assets/js/605.js",
    "revision": "924d24ea5f87682a7f5084ffde3a4e18"
  },
  {
    "url": "assets/js/606.js",
    "revision": "dfcfb63cea391d28e11e08c552feaea1"
  },
  {
    "url": "assets/js/607.js",
    "revision": "9a77e48469c79c5707f1010351667c89"
  },
  {
    "url": "assets/js/608.js",
    "revision": "f5163c5c15574a2eed66e4d3f8920a13"
  },
  {
    "url": "assets/js/609.js",
    "revision": "c8b880f4b37afa70aed254aafdab4ff4"
  },
  {
    "url": "assets/js/61.js",
    "revision": "8d81cdf6efe836b677918ad85a2b8739"
  },
  {
    "url": "assets/js/610.js",
    "revision": "b299519f02c58350b633c96a82e018f9"
  },
  {
    "url": "assets/js/611.js",
    "revision": "41ca4fa7f98ecbdb5e2fee75495deb06"
  },
  {
    "url": "assets/js/612.js",
    "revision": "f54e9bac4d0bda132c6686c1fbdb569d"
  },
  {
    "url": "assets/js/613.js",
    "revision": "533a73663b6f4bf798bb3717ed1e896e"
  },
  {
    "url": "assets/js/614.js",
    "revision": "2a32e1005c484701cb56500e2fba0b77"
  },
  {
    "url": "assets/js/615.js",
    "revision": "573179fac92d7ceaa6f1333578de99e6"
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
    "revision": "9b87428c0c10d79386c540660a55e33d"
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
    "revision": "07b2f5ac0defa970dce5dfc245d2caea"
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
    "revision": "9a33acfbf5ff39d172b55521c591f216"
  },
  {
    "url": "assets/js/93.js",
    "revision": "f6f63739e3dc52f706a199278bd75148"
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
    "revision": "12e0d6eb767a0a9a64edcc900916d435"
  },
  {
    "url": "assets/js/styles.js",
    "revision": "22f22b49cc901aa95826401f7ce0930c"
  },
  {
    "url": "blog/category/index.html",
    "revision": "5aee21910b3631158aa3156fe78a8133"
  },
  {
    "url": "blog/code/artists/index.html",
    "revision": "2cded1829d1ff5f31f851d9db9e5c190"
  },
  {
    "url": "blog/code/asa.sbh.nz/index.html",
    "revision": "13d17af4ed36d102e12253ab5f9079fb"
  },
  {
    "url": "blog/code/decrypt/index.html",
    "revision": "0b851653b54a7f498695dc99b371ff46"
  },
  {
    "url": "blog/code/divider/index.html",
    "revision": "011591598953b9d10e4655090fec13cc"
  },
  {
    "url": "blog/code/first/index.html",
    "revision": "95629d05909b246552fc6e217dcd3e95"
  },
  {
    "url": "blog/code/fishbarrel/index.html",
    "revision": "9fca85123b0f3828e7066ec93db8b78e"
  },
  {
    "url": "blog/code/graphs/index.html",
    "revision": "af94c5fe1ca26c3f2f0dd883e3d6a75a"
  },
  {
    "url": "blog/code/indent/index.html",
    "revision": "54847761a4c348eed28c5b4af352d64d"
  },
  {
    "url": "blog/code/index.html",
    "revision": "df575237163c76a94264bcccd0f7f54b"
  },
  {
    "url": "blog/code/ingoa.nz/index.html",
    "revision": "28e4bddb102d0decc26f44ad36a09b0a"
  },
  {
    "url": "blog/code/nzondemand/index.html",
    "revision": "b46924583cdeb63558c04330ed78011d"
  },
  {
    "url": "blog/code/picard/index.html",
    "revision": "681eb2ecc1efc232f671c86c49ec0371"
  },
  {
    "url": "blog/code/qr/index.html",
    "revision": "f0a5d8c53b62d45b0e5e6829248aa993"
  },
  {
    "url": "blog/code/readable/index.html",
    "revision": "93659e7c21d17be328758132462352aa"
  },
  {
    "url": "blog/code/tone/index.html",
    "revision": "ff85dbc0f2362cf52a5e7adc0df18064"
  },
  {
    "url": "blog/code/war/index.html",
    "revision": "edecd4f54b98ba8b0572890aeea3c855"
  },
  {
    "url": "blog/code/website/index.html",
    "revision": "70ff2cf83f74dc163e1507ed302b7ce1"
  },
  {
    "url": "blog/code/website/route/index.html",
    "revision": "0bec110bfd47baf2f461889a2b96f42d"
  },
  {
    "url": "blog/code/xmltv.co.nz/index.html",
    "revision": "24adfa493d64e842d7c2f3a100924ba7"
  },
  {
    "url": "blog/howto/index.html",
    "revision": "590e2320e621c26b936895608bf82310"
  },
  {
    "url": "blog/howto/intel865/index.html",
    "revision": "8ad3d5511e5ffa33d7256d43aba95be4"
  },
  {
    "url": "blog/howto/ios/index.html",
    "revision": "1fb12fdc779706b61a9e63f49b64d444"
  },
  {
    "url": "blog/howto/nexentastor/index.html",
    "revision": "6c3498455f879aae46b7524d36c14690"
  },
  {
    "url": "blog/howto/pcloadletter/index.html",
    "revision": "bc17d473856797f61b9aed53d8328ab1"
  },
  {
    "url": "blog/howto/raid5/index.html",
    "revision": "a78dc28183fb82cac748a26a1352e9c4"
  },
  {
    "url": "blog/index.html",
    "revision": "ad20289893b77fc79c404e31a1668f95"
  },
  {
    "url": "blog/life/anotheryear/index.html",
    "revision": "9b4ef92c616485922d0b08e8cc28e94f"
  },
  {
    "url": "blog/life/arcade/index.html",
    "revision": "1669c08a13f4e741137a56b75843ade3"
  },
  {
    "url": "blog/life/birthday/index.html",
    "revision": "08c924ca31045734e8fe7c12aecb169f"
  },
  {
    "url": "blog/life/blasphemy/index.html",
    "revision": "4959959308881f7b8ce8828ed56b6f5b"
  },
  {
    "url": "blog/life/blogger/index.html",
    "revision": "8f672dc63e19a9df00fc05e5fc97a5a5"
  },
  {
    "url": "blog/life/blurry/index.html",
    "revision": "4ac0f1c9852b9fca3ad045cac471eb55"
  },
  {
    "url": "blog/life/busyday/index.html",
    "revision": "d2dbe4f639071b1ce66e6f411711ee70"
  },
  {
    "url": "blog/life/domain/index.html",
    "revision": "8e7faa8886cc1491c7e426b4286fc87f"
  },
  {
    "url": "blog/life/exams/index.html",
    "revision": "a3cc374c00f4618e3373e30a13e0a3ce"
  },
  {
    "url": "blog/life/food/index.html",
    "revision": "ff37f77396df2fbb7b4b83f499e17b42"
  },
  {
    "url": "blog/life/glenview/index.html",
    "revision": "89f9a0a4f7b79f3268873f071d2d7fe4"
  },
  {
    "url": "blog/life/headlines/index.html",
    "revision": "0ddf784a9217ab668562c594f7df0919"
  },
  {
    "url": "blog/life/index.html",
    "revision": "e8f6b7448fbddafeca2dc88c4e64137a"
  },
  {
    "url": "blog/life/jws/index.html",
    "revision": "6ee579e0a1ec752da08b06d291a40712"
  },
  {
    "url": "blog/life/keyboard/index.html",
    "revision": "dc188097ddebccf9b6c752ef2cc09232"
  },
  {
    "url": "blog/life/lpi201/index.html",
    "revision": "d2bf87059ce835e1c7f12074b8832c8d"
  },
  {
    "url": "blog/life/mashup/index.html",
    "revision": "a92871861f693395afd353d3a230a5aa"
  },
  {
    "url": "blog/life/motorweb/index.html",
    "revision": "6947cef937b5256b01ea2201b58a8931"
  },
  {
    "url": "blog/life/nxe/index.html",
    "revision": "8ac7af55fd952067de36ec9d37e36b7f"
  },
  {
    "url": "blog/life/plates/index.html",
    "revision": "96f5758b752ceaf32267bdc4d75d52f6"
  },
  {
    "url": "blog/life/queenstown/index.html",
    "revision": "8724a109efa72e6c46306a3029f434d3"
  },
  {
    "url": "blog/life/racism/index.html",
    "revision": "0a4d5bc72f2ac699bd9e9b9d8c7a60c1"
  },
  {
    "url": "blog/life/roads/index.html",
    "revision": "96120544f1b4da8959e24fa8f68a5f30"
  },
  {
    "url": "blog/life/roots/index.html",
    "revision": "437c1b2aec7cef9ce80a8ca63a13e841"
  },
  {
    "url": "blog/life/scare/index.html",
    "revision": "fc55fee09f9d97d1009c020561b0d546"
  },
  {
    "url": "blog/life/scary/index.html",
    "revision": "1fc2dd4af2b55ef2b662be115c914ef4"
  },
  {
    "url": "blog/life/seti/index.html",
    "revision": "07588932a7bb709065d5172d909b7156"
  },
  {
    "url": "blog/life/skeptical/index.html",
    "revision": "ebe4782588a262fbab7b67b1daa8582a"
  },
  {
    "url": "blog/life/skepticzone/index.html",
    "revision": "cf818061bd1c29c3bb4ff6ecc0db6b84"
  },
  {
    "url": "blog/life/spam/index.html",
    "revision": "195bb03d74845263068cd813d9614ee1"
  },
  {
    "url": "blog/life/ticking/index.html",
    "revision": "36ebd4daaa45065c70b9746b53da3603"
  },
  {
    "url": "blog/life/trademe/index.html",
    "revision": "f38930e2f9b4be0ec5b98085ebcc94d1"
  },
  {
    "url": "blog/life/unforeseen/index.html",
    "revision": "5ab1a0b6f4ce1c95033b845a4e6c12ee"
  },
  {
    "url": "blog/life/wobbly/index.html",
    "revision": "532b71939a9895aa3429f70868e0783b"
  },
  {
    "url": "blog/projects/ahs/index.html",
    "revision": "5e4a7a4e0cb8981a6637b0bca3ddf8dd"
  },
  {
    "url": "blog/projects/airbag/index.html",
    "revision": "f2b7620ddff07617ad6e44f800d124e4"
  },
  {
    "url": "blog/projects/ambilight/index.html",
    "revision": "129b8c23f69d0b1c3732b535e52cd4e9"
  },
  {
    "url": "blog/projects/automation/index.html",
    "revision": "27514127d879b8495c379e48feba2170"
  },
  {
    "url": "blog/projects/eyes/index.html",
    "revision": "ad90259116f576a08a87ad6acc803b22"
  },
  {
    "url": "blog/projects/glitch/index.html",
    "revision": "a5ff81c86a2937216a7c45d07d250fb0"
  },
  {
    "url": "blog/projects/hotel/index.html",
    "revision": "84b9d693c706c736bcf6b135aafdcd6c"
  },
  {
    "url": "blog/projects/index.html",
    "revision": "292738212ba2bb09e675405310bafab8"
  },
  {
    "url": "blog/projects/it100/index.html",
    "revision": "4b26bd2f1d028ce810ec2186b7a352c5"
  },
  {
    "url": "blog/projects/microscope/index.html",
    "revision": "00c341aab095b65d0439ab5b6aeedfd1"
  },
  {
    "url": "blog/projects/mirror/index.html",
    "revision": "65df467d3767a6f5552120e374aa52c8"
  },
  {
    "url": "blog/projects/picture/index.html",
    "revision": "ff86a42fb6240496c40e10984dbdc936"
  },
  {
    "url": "blog/projects/pizza/index.html",
    "revision": "8c849b129318d7b4a2de9c15d7730653"
  },
  {
    "url": "blog/projects/podcast/index.html",
    "revision": "857120e67070c171de27817a718d717e"
  },
  {
    "url": "blog/projects/reflow/index.html",
    "revision": "ee96f99355572109682730a4dff20ed4"
  },
  {
    "url": "blog/projects/sandbox/index.html",
    "revision": "f767c6bb0a0b0cd2009c333dd9340a19"
  },
  {
    "url": "blog/projects/screens/index.html",
    "revision": "506fba653fa37e83c4dabb3727277d63"
  },
  {
    "url": "blog/projects/sky/index.html",
    "revision": "0bee75eaaf3d31a00775656ff3e011fc"
  },
  {
    "url": "blog/projects/starwars/index.html",
    "revision": "09511a64429d7c8ed2d9eabeebdc3aac"
  },
  {
    "url": "blog/projects/xbox/index.html",
    "revision": "d3d026b1817de3eae751846031bf56bd"
  },
  {
    "url": "blog/random/addresses/index.html",
    "revision": "ef6c313f86ce2a9c98155e74e9889742"
  },
  {
    "url": "blog/random/alphabet/index.html",
    "revision": "49dbbbdf174ad7cf10edc3f5728b5184"
  },
  {
    "url": "blog/random/astrology/index.html",
    "revision": "0880035760b8b04d9d8a40716d83a723"
  },
  {
    "url": "blog/random/chicken/index.html",
    "revision": "c791a2285d10d38b0c91fd018d954a64"
  },
  {
    "url": "blog/random/dns/index.html",
    "revision": "c70a55fc216c11abef64dcf6e57139c9"
  },
  {
    "url": "blog/random/evp/index.html",
    "revision": "4e302e5e9fcb635381d5415822ae558d"
  },
  {
    "url": "blog/random/flip/index.html",
    "revision": "51076556351669d623d142eae4c8fe87"
  },
  {
    "url": "blog/random/honeychurch/index.html",
    "revision": "bf51d2456de8812a9841f78a732efab2"
  },
  {
    "url": "blog/random/index.html",
    "revision": "e142a976b47b577f974e12539a5d41f6"
  },
  {
    "url": "blog/random/lottery/index.html",
    "revision": "37e08010f4ae7f69a43d9045a703b886"
  },
  {
    "url": "blog/random/music/index.html",
    "revision": "214e21c7fd7c5820551f68701ba67e32"
  },
  {
    "url": "blog/random/octal/index.html",
    "revision": "6187fe5eb1e380b7828ac55081eaae64"
  },
  {
    "url": "blog/random/os/index.html",
    "revision": "189af4b6cd8ec103732026df4d3255e0"
  },
  {
    "url": "blog/random/propellers/index.html",
    "revision": "141ff262deb2f0775c3fe3066ea9fc34"
  },
  {
    "url": "blog/random/robux/index.html",
    "revision": "4daffb78e243f5f50028f3d838ddd186"
  },
  {
    "url": "blog/random/super/index.html",
    "revision": "15cf065690ae567a43ae944f59fe7aed"
  },
  {
    "url": "blog/random/times/index.html",
    "revision": "0c1e6c6377b2403ed3b0cfc403b0bfa9"
  },
  {
    "url": "blog/random/travel/index.html",
    "revision": "869e5211f13da1d7c2f248496b401ff1"
  },
  {
    "url": "blog/random/wilhelm/index.html",
    "revision": "fe45049d78035734458169a914926ffa"
  },
  {
    "url": "blog/random/year/index.html",
    "revision": "9d5b9c188ae899c3eaca74135844c6f2"
  },
  {
    "url": "blog/skepticism/2015/08/16/asa/index.html",
    "revision": "de655ad3224a3e9b087ffc5a72e49933"
  },
  {
    "url": "blog/skepticism/2015/08/16/awards/index.html",
    "revision": "f194cf4f7eaf357ae144283c8c4a0229"
  },
  {
    "url": "blog/skepticism/2015/08/16/bravo/index.html",
    "revision": "c74860f2d1192419602b2ca8ea6bc66f"
  },
  {
    "url": "blog/skepticism/2015/08/16/index.html",
    "revision": "88ec40cbd1b9e738fe0d699eb55df4c9"
  },
  {
    "url": "blog/skepticism/2015/08/16/jim/index.html",
    "revision": "61a9511ce532e14a894535c879853466"
  },
  {
    "url": "blog/skepticism/2015/08/16/naholo/index.html",
    "revision": "212daa29f49aa71471077216bfdf0aab"
  },
  {
    "url": "blog/skepticism/2015/08/16/resene/index.html",
    "revision": "cf093a6e9ffc175efd30ed8aa1730dde"
  },
  {
    "url": "blog/skepticism/2015/08/index.html",
    "revision": "182deb5da03456ad986dbbc2522176af"
  },
  {
    "url": "blog/skepticism/2015/09/20/gop/index.html",
    "revision": "c8dd54365242799bb8294b27cb44b15c"
  },
  {
    "url": "blog/skepticism/2015/09/20/ignobel/index.html",
    "revision": "882b18a4e387cad021b301f3daf9040f"
  },
  {
    "url": "blog/skepticism/2015/09/20/index.html",
    "revision": "b9d819bf41f69edd0433a9d0ba68518b"
  },
  {
    "url": "blog/skepticism/2015/09/20/supplements/index.html",
    "revision": "baa82dc5ffa7fb611b7e56e408eddf08"
  },
  {
    "url": "blog/skepticism/2015/09/27/ayahuasca/index.html",
    "revision": "917110a91839c225f303833707670e03"
  },
  {
    "url": "blog/skepticism/2015/09/27/drought/index.html",
    "revision": "4fb17e5a2c60a24678dd6bf36efa6dc7"
  },
  {
    "url": "blog/skepticism/2015/09/27/index.html",
    "revision": "bc3f3f9433ee3ee78ac0f5d85dc46e96"
  },
  {
    "url": "blog/skepticism/2015/09/27/lama/index.html",
    "revision": "6a52c96fe134f4cbeac61d631aabbbb4"
  },
  {
    "url": "blog/skepticism/2015/09/27/moon/index.html",
    "revision": "f7134e01cf4ea9c246f656de2901d061"
  },
  {
    "url": "blog/skepticism/2015/09/27/scan/index.html",
    "revision": "bb5e219a674afe4c190492dcb27ee68b"
  },
  {
    "url": "blog/skepticism/2015/09/index.html",
    "revision": "8b9242a1ee9fb18c4ed30816d8c8ab1b"
  },
  {
    "url": "blog/skepticism/2015/10/04/ghost/index.html",
    "revision": "db28f4201a47a9a66b7c2f5275505005"
  },
  {
    "url": "blog/skepticism/2015/10/04/haka/index.html",
    "revision": "928df7343a154e77053db5e1d281cdda"
  },
  {
    "url": "blog/skepticism/2015/10/04/index.html",
    "revision": "228f40631bbe281009a99ded9dba91a8"
  },
  {
    "url": "blog/skepticism/2015/10/04/mars/index.html",
    "revision": "7b0ff61d1ae04f7b310ed3f23043722b"
  },
  {
    "url": "blog/skepticism/2015/10/04/pharmacy/index.html",
    "revision": "17edeff8d15cdc7069c63e8ef92c0c8b"
  },
  {
    "url": "blog/skepticism/2015/10/04/prostate/index.html",
    "revision": "6edccf57238c0fa855e5d6bc875b3527"
  },
  {
    "url": "blog/skepticism/2015/10/11/armageddon/index.html",
    "revision": "99a414ec5cc7007609aba7974665b46b"
  },
  {
    "url": "blog/skepticism/2015/10/11/climate/index.html",
    "revision": "b8220aa5a2c6db0e1b9ea771f0d15db4"
  },
  {
    "url": "blog/skepticism/2015/10/11/ghost/index.html",
    "revision": "3090b2cf5db9f30ef410d4fa77aa003f"
  },
  {
    "url": "blog/skepticism/2015/10/11/index.html",
    "revision": "bca34a0f5fc7a4b9eed7e717a48ee0d8"
  },
  {
    "url": "blog/skepticism/2015/10/11/magnesleep/index.html",
    "revision": "9ee9092ccab3c69a3a39cf3b733e6d74"
  },
  {
    "url": "blog/skepticism/2015/10/11/nhs/index.html",
    "revision": "88aad1567bf6b3b3300d01fab2e753eb"
  },
  {
    "url": "blog/skepticism/2015/10/11/prophet/index.html",
    "revision": "761b7d739d2899b04e6c1a013e2c259f"
  },
  {
    "url": "blog/skepticism/2015/10/index.html",
    "revision": "412cfc78ca97f68139f6ffba68a31f65"
  },
  {
    "url": "blog/skepticism/2015/11/15/end/index.html",
    "revision": "5c5d67f8501033527ccfcff5882903db"
  },
  {
    "url": "blog/skepticism/2015/11/15/index.html",
    "revision": "23b8f41810e16aa31d2cb17bb684a70c"
  },
  {
    "url": "blog/skepticism/2015/11/index.html",
    "revision": "58600b4bff0e3b7f3dc4a787e85da4d5"
  },
  {
    "url": "blog/skepticism/2015/12/13/astrology/index.html",
    "revision": "9e1aff1179c333b393c7b2187908c0cf"
  },
  {
    "url": "blog/skepticism/2015/12/13/cancer/index.html",
    "revision": "7b93a58a2359c9317cbcbe378ab5c567"
  },
  {
    "url": "blog/skepticism/2015/12/13/chickenpox/index.html",
    "revision": "a18d1632c3403b4fb852661737ae70fa"
  },
  {
    "url": "blog/skepticism/2015/12/13/index.html",
    "revision": "db1147da4f3ac447d35972ac6c230ec8"
  },
  {
    "url": "blog/skepticism/2015/12/13/osteopath/index.html",
    "revision": "8f4082b6d36bee360d031ecdf9f17280"
  },
  {
    "url": "blog/skepticism/2015/12/13/priest/index.html",
    "revision": "2d56142a54d6865ca25d4da8f49a0a0b"
  },
  {
    "url": "blog/skepticism/2015/12/13/psychic/index.html",
    "revision": "6ba1f7f5390e26493a61237b1b5d0474"
  },
  {
    "url": "blog/skepticism/2015/12/13/vaccines/index.html",
    "revision": "1896d3f42791905fc02499ecf4d92f94"
  },
  {
    "url": "blog/skepticism/2015/12/index.html",
    "revision": "5cb760343994687cc8e68a5776af19ff"
  },
  {
    "url": "blog/skepticism/2015/index.html",
    "revision": "c7e8855c5b4b57f40c846dd12f9f0882"
  },
  {
    "url": "blog/skepticism/2016/02/07/antioxidant/index.html",
    "revision": "6af848977378fe748b451bc6155687f8"
  },
  {
    "url": "blog/skepticism/2016/02/07/index.html",
    "revision": "9e627053bac923941a7f2f8b65a727c4"
  },
  {
    "url": "blog/skepticism/2016/02/07/kfc/index.html",
    "revision": "bee1dcbb67eb6095f9c2ed4189d111dd"
  },
  {
    "url": "blog/skepticism/2016/02/07/ph/index.html",
    "revision": "d20bff6f11631f5e1cfce56934404e1e"
  },
  {
    "url": "blog/skepticism/2016/02/07/sandy/index.html",
    "revision": "4a0cec2118c94ce64648ee02d1cf9db6"
  },
  {
    "url": "blog/skepticism/2016/02/07/sarfati/index.html",
    "revision": "8879d07a69764fb686d6ec78a6e47c6c"
  },
  {
    "url": "blog/skepticism/2016/02/07/trump/index.html",
    "revision": "12c4893a2b8ea5ddb14d627569a1b569"
  },
  {
    "url": "blog/skepticism/2016/02/14/coins/index.html",
    "revision": "5d06c8c23082ad8102b88f19c34bd0fa"
  },
  {
    "url": "blog/skepticism/2016/02/14/fast/index.html",
    "revision": "eb9cc782a25015dc1c4f10ef124f08c0"
  },
  {
    "url": "blog/skepticism/2016/02/14/fluoride/index.html",
    "revision": "a9eb6b71f95c9b3da51097a237408571"
  },
  {
    "url": "blog/skepticism/2016/02/14/icke/index.html",
    "revision": "eba7e752bbb86fa7e7de5349f7e81fe3"
  },
  {
    "url": "blog/skepticism/2016/02/14/index.html",
    "revision": "f86ef02b8e2eb85e3de80e665a6f611a"
  },
  {
    "url": "blog/skepticism/2016/02/14/yeti/index.html",
    "revision": "7ae7f019cdc10ba43daf77a7c43b9ca9"
  },
  {
    "url": "blog/skepticism/2016/02/21/homeopathy/index.html",
    "revision": "0cb00aa35d0a22051d34493f48580bdd"
  },
  {
    "url": "blog/skepticism/2016/02/21/index.html",
    "revision": "8240617d9782f98ea4ad6cfaa6fbcc20"
  },
  {
    "url": "blog/skepticism/2016/02/21/monster/index.html",
    "revision": "ae97b9fc01ef3675b78c943ad6f20901"
  },
  {
    "url": "blog/skepticism/2016/02/21/scalia/index.html",
    "revision": "2d44906809efed695ddad010dd2a5a8c"
  },
  {
    "url": "blog/skepticism/2016/02/21/shane/index.html",
    "revision": "0401f2d8910273be90874f38a4d64e75"
  },
  {
    "url": "blog/skepticism/2016/02/21/texas/index.html",
    "revision": "db4b72df4e9a172de2511cf2ee7a52cb"
  },
  {
    "url": "blog/skepticism/2016/02/28/acupuncture/index.html",
    "revision": "4fa8cc70241cbc8f694bef563cefb78c"
  },
  {
    "url": "blog/skepticism/2016/02/28/fsm/index.html",
    "revision": "4e2bd69f7092da8046572ed26efcfbf3"
  },
  {
    "url": "blog/skepticism/2016/02/28/index.html",
    "revision": "58d3e75a06f3c87884ab8041216c8f8e"
  },
  {
    "url": "blog/skepticism/2016/02/28/iv/index.html",
    "revision": "9f56a8097f47c2e9d82bd0f149ae53b2"
  },
  {
    "url": "blog/skepticism/2016/02/28/natural/index.html",
    "revision": "ee3105a610ed2f46b89f89fadfa40688"
  },
  {
    "url": "blog/skepticism/2016/02/28/talc/index.html",
    "revision": "361c55bd9110b5569937c887a8df888b"
  },
  {
    "url": "blog/skepticism/2016/02/index.html",
    "revision": "4fa4d49821d3474a7e178bf4a6e1f0c1"
  },
  {
    "url": "blog/skepticism/2016/03/13/herbs/index.html",
    "revision": "dd82914568efca9b2a5dc2f0b461ddff"
  },
  {
    "url": "blog/skepticism/2016/03/13/index.html",
    "revision": "06c3c0fbaa750af31a4f5912c9645914"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandala/index.html",
    "revision": "4d38a8a8ca49534fa5139295a528aa25"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandela/index.html",
    "revision": "d922e6a4be39bc3e2acc228ea9726d21"
  },
  {
    "url": "blog/skepticism/2016/03/13/spray/index.html",
    "revision": "0349f3d6f62730b6a3443215926c6a94"
  },
  {
    "url": "blog/skepticism/2016/03/index.html",
    "revision": "48a61b9dfb3c30b4a16620d6f6ce8c77"
  },
  {
    "url": "blog/skepticism/2016/04/17/charity/index.html",
    "revision": "db44d2547b67567250329c1e04a76c84"
  },
  {
    "url": "blog/skepticism/2016/04/17/chiro/index.html",
    "revision": "1c28d85da458ee06d1b1c05e01881486"
  },
  {
    "url": "blog/skepticism/2016/04/17/fluoride/index.html",
    "revision": "5858917b28ee30bcb78f6069fa2b2758"
  },
  {
    "url": "blog/skepticism/2016/04/17/index.html",
    "revision": "24de88d4ebba07340b105b54564bee29"
  },
  {
    "url": "blog/skepticism/2016/04/17/lotto/index.html",
    "revision": "f1bead8ac869fed86cb5f39a17863b4a"
  },
  {
    "url": "blog/skepticism/2016/04/17/mind/index.html",
    "revision": "4e3b1dd6b7961a9b8f3b4e1ddd53dec8"
  },
  {
    "url": "blog/skepticism/2016/04/17/whooping/index.html",
    "revision": "900cf40819f2051fc510948b8d08e402"
  },
  {
    "url": "blog/skepticism/2016/04/index.html",
    "revision": "ab66254f0494e631a6cf29581bd79521"
  },
  {
    "url": "blog/skepticism/2016/06/05/1080/index.html",
    "revision": "e9a2a5c706930b925bd8379db63b4cd5"
  },
  {
    "url": "blog/skepticism/2016/06/05/acupuncture/index.html",
    "revision": "97be4c3b3b8806af4bfe1c66a5cd38f1"
  },
  {
    "url": "blog/skepticism/2016/06/05/family/index.html",
    "revision": "c6e7539b999a0454a529af8c1d3099b7"
  },
  {
    "url": "blog/skepticism/2016/06/05/index.html",
    "revision": "008c8ba1bd82e739c5b64c3e04db13fb"
  },
  {
    "url": "blog/skepticism/2016/06/05/limbaugh/index.html",
    "revision": "c1b5224e563f9a779d532e10dff316ea"
  },
  {
    "url": "blog/skepticism/2016/06/12/bobby/index.html",
    "revision": "e9575e2ac2a02e3949edf4fe35e125c4"
  },
  {
    "url": "blog/skepticism/2016/06/12/climate/index.html",
    "revision": "45b7233173ecc10953e09ea61d258267"
  },
  {
    "url": "blog/skepticism/2016/06/12/index.html",
    "revision": "7c810c821e9fc2bbfa5d29494e178027"
  },
  {
    "url": "blog/skepticism/2016/06/12/pugh/index.html",
    "revision": "4641d44389b31206b6a1eda5a6bfdeeb"
  },
  {
    "url": "blog/skepticism/2016/06/12/savage/index.html",
    "revision": "1e8ce8f310d8af2118498ab1cd4aa5e0"
  },
  {
    "url": "blog/skepticism/2016/06/12/sawdust/index.html",
    "revision": "4243fa47f286f22753cad7d0d3d40a88"
  },
  {
    "url": "blog/skepticism/2016/06/19/beauty/index.html",
    "revision": "a2ed4e2607b917863566624bd86fb014"
  },
  {
    "url": "blog/skepticism/2016/06/19/bilderberg/index.html",
    "revision": "5eb18e698d58eae499bec0afd0f9b1d2"
  },
  {
    "url": "blog/skepticism/2016/06/19/cyf/index.html",
    "revision": "98deba18494679220036d1270dd7ca37"
  },
  {
    "url": "blog/skepticism/2016/06/19/holt/index.html",
    "revision": "2d56f4613fd78ca0a06c9b7f75df7cca"
  },
  {
    "url": "blog/skepticism/2016/06/19/index.html",
    "revision": "b8867b4953bf988156347442f1653a30"
  },
  {
    "url": "blog/skepticism/2016/06/19/silver/index.html",
    "revision": "38f485146f627bf32a3979bcede94a6e"
  },
  {
    "url": "blog/skepticism/2016/06/19/ufo/index.html",
    "revision": "ca5987bee24d57e7bb99933fcfec37d3"
  },
  {
    "url": "blog/skepticism/2016/06/26/homeopathy/index.html",
    "revision": "26a54bb8f341c37db5ddd2b8db73188c"
  },
  {
    "url": "blog/skepticism/2016/06/26/index.html",
    "revision": "5abc3a0128cebeaa8c934b643fc6a834"
  },
  {
    "url": "blog/skepticism/2016/06/26/robbins/index.html",
    "revision": "f610bd4377ea45816277c7e5f1b0e6b4"
  },
  {
    "url": "blog/skepticism/2016/06/26/selfies/index.html",
    "revision": "ce1a1607e5cfff42d009439f8c375d88"
  },
  {
    "url": "blog/skepticism/2016/06/26/silver/index.html",
    "revision": "7585d34d36bf8c42ca995fc37f443184"
  },
  {
    "url": "blog/skepticism/2016/06/26/ufos/index.html",
    "revision": "9ba55ed47aebe1f25e0c4cf9af5a9dc6"
  },
  {
    "url": "blog/skepticism/2016/06/index.html",
    "revision": "bdcef1551750e9981b77d78e3cdf2593"
  },
  {
    "url": "blog/skepticism/2016/07/03/glyphosate/index.html",
    "revision": "ea5c1ca896a5b4cafcacd7a912e30352"
  },
  {
    "url": "blog/skepticism/2016/07/03/gmo/index.html",
    "revision": "e5fda1adfd1ed0f5c1e0c1da2db4f7e4"
  },
  {
    "url": "blog/skepticism/2016/07/03/index.html",
    "revision": "e57b33ac96954c485780c32400d9b5a1"
  },
  {
    "url": "blog/skepticism/2016/07/03/jail/index.html",
    "revision": "8f66684f361dfe888cb33aa17233c63f"
  },
  {
    "url": "blog/skepticism/2016/07/03/ken/index.html",
    "revision": "fc84586a189ad4ad9714ef79bb727986"
  },
  {
    "url": "blog/skepticism/2016/07/10/ark/index.html",
    "revision": "2367049975f8febda53782bdd6af0939"
  },
  {
    "url": "blog/skepticism/2016/07/10/bee/index.html",
    "revision": "ea7d9ec2b6fc72fad43209065ce9a663"
  },
  {
    "url": "blog/skepticism/2016/07/10/index.html",
    "revision": "f0beeb4a5b60cecdf6a7d8a2f1477f60"
  },
  {
    "url": "blog/skepticism/2016/07/10/lottery/index.html",
    "revision": "6b9110e5f051df7ed40df1663f57ea23"
  },
  {
    "url": "blog/skepticism/2016/07/10/murder/index.html",
    "revision": "eea1e0d8c3918366da9e4cde605be888"
  },
  {
    "url": "blog/skepticism/2016/07/17/dogs/index.html",
    "revision": "94177b071ab397eacc0d66fbb51fc657"
  },
  {
    "url": "blog/skepticism/2016/07/17/fsm/index.html",
    "revision": "0d6c4f0a7cbf0c2ecb3356990949274f"
  },
  {
    "url": "blog/skepticism/2016/07/17/fyi/index.html",
    "revision": "536101876a5853c6d4e97d9ffc4bfe9b"
  },
  {
    "url": "blog/skepticism/2016/07/17/index.html",
    "revision": "e7c00976830fc9fee644085b01b36bbf"
  },
  {
    "url": "blog/skepticism/2016/07/17/natural/index.html",
    "revision": "b98ea9f8cced0848ed55ababd4a27bee"
  },
  {
    "url": "blog/skepticism/2016/07/17/pokemon/index.html",
    "revision": "656cda646ce69a7a2d64ba53f301caea"
  },
  {
    "url": "blog/skepticism/2016/07/index.html",
    "revision": "66e23673ba6966f0f3db4e454c1373b3"
  },
  {
    "url": "blog/skepticism/2016/08/07/icke/index.html",
    "revision": "c72464f616d9dd4cc8bf428205307288"
  },
  {
    "url": "blog/skepticism/2016/08/07/index.html",
    "revision": "fb2f4f8d148b8fc65b923ac23784be0b"
  },
  {
    "url": "blog/skepticism/2016/08/21/brian/index.html",
    "revision": "cee5f44defaf3736c8a2266d88058c09"
  },
  {
    "url": "blog/skepticism/2016/08/21/chlorine/index.html",
    "revision": "393837f1427d52f77e8b6255de454efa"
  },
  {
    "url": "blog/skepticism/2016/08/21/index.html",
    "revision": "cb8e0e123d5d64b37541ddb19a705e0c"
  },
  {
    "url": "blog/skepticism/2016/08/21/murder/index.html",
    "revision": "af3a41acffc34f42b99ad2f760cdc8ca"
  },
  {
    "url": "blog/skepticism/2016/08/21/superfoods/index.html",
    "revision": "ec4c36541e996a2d5d638b083feaeb73"
  },
  {
    "url": "blog/skepticism/2016/08/21/witch/index.html",
    "revision": "af8bc80a1d5aa83e4049a09af0a036fd"
  },
  {
    "url": "blog/skepticism/2016/08/28/alcohol/index.html",
    "revision": "2a6473d85bdb2254931f0d1a10f8c527"
  },
  {
    "url": "blog/skepticism/2016/08/28/chiro/index.html",
    "revision": "11c8ca814d9ad9e2c5a34c3f489a6313"
  },
  {
    "url": "blog/skepticism/2016/08/28/index.html",
    "revision": "6fe52974575c3a03d7e04556d7d834b4"
  },
  {
    "url": "blog/skepticism/2016/08/28/processed/index.html",
    "revision": "0bfb9baa79eb4b582ea15e1ecbdeeead"
  },
  {
    "url": "blog/skepticism/2016/08/28/sbh/index.html",
    "revision": "b896f42b336856fe7e5dece63411d8ac"
  },
  {
    "url": "blog/skepticism/2016/08/index.html",
    "revision": "01e5d8b58fdc5eb77c54ced6b23761cb"
  },
  {
    "url": "blog/skepticism/2016/09/18/altruism/index.html",
    "revision": "f4370810e0b5bac237fa8039166ec243"
  },
  {
    "url": "blog/skepticism/2016/09/18/better/index.html",
    "revision": "97061943218d3f7d04c505fad667974e"
  },
  {
    "url": "blog/skepticism/2016/09/18/homeopathy/index.html",
    "revision": "a61c72a9d32278ef1ba34dd2d3b637c3"
  },
  {
    "url": "blog/skepticism/2016/09/18/index.html",
    "revision": "d6af2b3e72e1ef486379d06e9392a6d0"
  },
  {
    "url": "blog/skepticism/2016/09/18/nonsense/index.html",
    "revision": "ef468d002e098892eefc737424798f53"
  },
  {
    "url": "blog/skepticism/2016/09/18/trump/index.html",
    "revision": "2bdd00777131fe063bc5450973b55818"
  },
  {
    "url": "blog/skepticism/2016/09/25/clinic/index.html",
    "revision": "cff0d423990d6e7d049498a20846dba0"
  },
  {
    "url": "blog/skepticism/2016/09/25/fluoride/index.html",
    "revision": "eb3f523d841079d35eb4cba75e306d56"
  },
  {
    "url": "blog/skepticism/2016/09/25/homeopathy/index.html",
    "revision": "3e47258ac105a64734da258527ba0e3d"
  },
  {
    "url": "blog/skepticism/2016/09/25/index.html",
    "revision": "6c9ae57f8f51933c8f7dbd5c8e313a53"
  },
  {
    "url": "blog/skepticism/2016/09/25/murder/index.html",
    "revision": "8155b4cf557b13e163ae4aee3b5f4aa3"
  },
  {
    "url": "blog/skepticism/2016/09/index.html",
    "revision": "29561422e12612912563bc3aab9aed0c"
  },
  {
    "url": "blog/skepticism/2016/10/21/bigfoot/index.html",
    "revision": "8a6755d03ffb597157c8e8a4951f5ade"
  },
  {
    "url": "blog/skepticism/2016/10/21/breasts/index.html",
    "revision": "1645b699b9c73ec8aed604f8b5eba09c"
  },
  {
    "url": "blog/skepticism/2016/10/21/index.html",
    "revision": "d3d20320832a75ebe6a76aa15b695354"
  },
  {
    "url": "blog/skepticism/2016/10/21/medsafe/index.html",
    "revision": "8f4f7093063b62fa51d0b8fdf466f9ca"
  },
  {
    "url": "blog/skepticism/2016/10/21/zenteq/index.html",
    "revision": "905d4b87a91e08168faa9aa9e601393b"
  },
  {
    "url": "blog/skepticism/2016/10/index.html",
    "revision": "eeb452ec9c5d6cfa8718a620b688838e"
  },
  {
    "url": "blog/skepticism/2016/11/13/conference/index.html",
    "revision": "bf0aa79860fbda6ab2497752abda5a0c"
  },
  {
    "url": "blog/skepticism/2016/11/13/green/index.html",
    "revision": "fc3d3c86d6d5285a46ab37b74d72ba3e"
  },
  {
    "url": "blog/skepticism/2016/11/13/index.html",
    "revision": "45bef46456b700eafdd59fc766506481"
  },
  {
    "url": "blog/skepticism/2016/11/13/vice/index.html",
    "revision": "52666211bde545739e189e8b934a791e"
  },
  {
    "url": "blog/skepticism/2016/11/27/bioptron/index.html",
    "revision": "c321369f616506ada40bddfe103cc7a8"
  },
  {
    "url": "blog/skepticism/2016/11/27/conference/index.html",
    "revision": "3ddbf8d5491acc8130cf95d886d1d488"
  },
  {
    "url": "blog/skepticism/2016/11/27/earthquake/index.html",
    "revision": "8f65654d58dc7fb78dcd860dc70d9d8c"
  },
  {
    "url": "blog/skepticism/2016/11/27/index.html",
    "revision": "f23e7d1e267834569b6995b0a4a0627d"
  },
  {
    "url": "blog/skepticism/2016/11/index.html",
    "revision": "099c871b3852cbcf91efbe5619068609"
  },
  {
    "url": "blog/skepticism/2016/12/04/conference/index.html",
    "revision": "cb93cea6e950b65f28ceeb625e60c8fc"
  },
  {
    "url": "blog/skepticism/2016/12/04/index.html",
    "revision": "b82f267dbe66689310e72c8f17bbeb9c"
  },
  {
    "url": "blog/skepticism/2016/12/18/colin/index.html",
    "revision": "a9ac0e481fb9997990962fb34d2aab8d"
  },
  {
    "url": "blog/skepticism/2016/12/18/fiji/index.html",
    "revision": "fbe4bbca59eb0a507f28ea7508fc5acb"
  },
  {
    "url": "blog/skepticism/2016/12/18/index.html",
    "revision": "a84b2477a49c967a9ef98f1501efb344"
  },
  {
    "url": "blog/skepticism/2016/12/18/kinesiology/index.html",
    "revision": "ae8266f06177c91c673d099ed88fc9ad"
  },
  {
    "url": "blog/skepticism/2016/12/18/mmm/index.html",
    "revision": "f9d56a41a93ceeb446dd49978553756c"
  },
  {
    "url": "blog/skepticism/2016/12/18/nigel/index.html",
    "revision": "7c8fa09f3ed53b7848b52527c47b88ed"
  },
  {
    "url": "blog/skepticism/2016/12/index.html",
    "revision": "e16ef56ff8c3142ae868079420d36175"
  },
  {
    "url": "blog/skepticism/2016/index.html",
    "revision": "85371fb65922634ef88085d92dbbb1e1"
  },
  {
    "url": "blog/skepticism/2017/01/22/index.html",
    "revision": "7001cf23f7e2efb34ee917332b4a1f27"
  },
  {
    "url": "blog/skepticism/2017/01/22/scientology/index.html",
    "revision": "7f7a6108b492aa50b3c3c0ce004f3203"
  },
  {
    "url": "blog/skepticism/2017/01/29/creation/index.html",
    "revision": "a3673ec2c8f70db814438f2018afef80"
  },
  {
    "url": "blog/skepticism/2017/01/29/index.html",
    "revision": "76485e23cf00a814e4aa6cfe86dac938"
  },
  {
    "url": "blog/skepticism/2017/01/index.html",
    "revision": "63f31303be0dbc015ccabc16a58bf0ea"
  },
  {
    "url": "blog/skepticism/2017/02/05/fraudster/index.html",
    "revision": "695f903903ba5ca3c174405af1aef04e"
  },
  {
    "url": "blog/skepticism/2017/02/05/gervais/index.html",
    "revision": "4aa1809befa7982c1d8c806754c5b811"
  },
  {
    "url": "blog/skepticism/2017/02/05/index.html",
    "revision": "83ea96794d36c445ea8fecb06fd2d712"
  },
  {
    "url": "blog/skepticism/2017/02/05/scientology/index.html",
    "revision": "4cb069d3d909a2bdf8fef8250dc8c15b"
  },
  {
    "url": "blog/skepticism/2017/02/19/homeopathy/index.html",
    "revision": "4caea502fe59270e248ff7ceb0523856"
  },
  {
    "url": "blog/skepticism/2017/02/19/index.html",
    "revision": "22c913f60438172ca1061651c6411b68"
  },
  {
    "url": "blog/skepticism/2017/02/19/lottery/index.html",
    "revision": "28ca7cd19e216dd7f8d56398df140f99"
  },
  {
    "url": "blog/skepticism/2017/02/19/vaxxed/index.html",
    "revision": "61fc662f0ac32a628fbcafa761ffb7ec"
  },
  {
    "url": "blog/skepticism/2017/02/19/whales/index.html",
    "revision": "542849000bbad40a0282d82ea912cfc0"
  },
  {
    "url": "blog/skepticism/2017/02/index.html",
    "revision": "00dd063007d60f4802027d7873d1a032"
  },
  {
    "url": "blog/skepticism/2017/03/05/index.html",
    "revision": "56837541c5dd505c2d0cc9eb8633cc28"
  },
  {
    "url": "blog/skepticism/2017/03/05/rea/index.html",
    "revision": "2a7d47026551e6d9c9e247acdacd0b07"
  },
  {
    "url": "blog/skepticism/2017/03/19/fake/index.html",
    "revision": "c86207476fc13e3c98354c17a9b6e4af"
  },
  {
    "url": "blog/skepticism/2017/03/19/index.html",
    "revision": "c4f3b39322f4ed838f92d09c8c378685"
  },
  {
    "url": "blog/skepticism/2017/03/19/murder/index.html",
    "revision": "1aad7a0d556da9331e8196878980a2b9"
  },
  {
    "url": "blog/skepticism/2017/03/26/census/index.html",
    "revision": "31ffdc335c6a9bfdf9d6c2462f95f878"
  },
  {
    "url": "blog/skepticism/2017/03/26/index.html",
    "revision": "ebd4f96b7c75667fd8634b81ee9dc37a"
  },
  {
    "url": "blog/skepticism/2017/03/26/nzmj/index.html",
    "revision": "98c70175f090b65b54d51a2e7fd304f1"
  },
  {
    "url": "blog/skepticism/2017/03/26/shaquille/index.html",
    "revision": "11c477f252a6d3b6ca06ff570063bd8f"
  },
  {
    "url": "blog/skepticism/2017/03/index.html",
    "revision": "3daf24ecac5b3744cd5d542c400495aa"
  },
  {
    "url": "blog/skepticism/2017/04/02/index.html",
    "revision": "42ed654433be43ad950691271311f24a"
  },
  {
    "url": "blog/skepticism/2017/04/02/nasa/index.html",
    "revision": "18435d00a2a9054c2921f2c706a597ae"
  },
  {
    "url": "blog/skepticism/2017/04/02/science/index.html",
    "revision": "c86cd0ce24542e1379c44ab3f1b1c839"
  },
  {
    "url": "blog/skepticism/2017/04/02/vaxxed/index.html",
    "revision": "0cf89aec6f802fa8deba19ea0dc57e11"
  },
  {
    "url": "blog/skepticism/2017/04/09/index.html",
    "revision": "cb881fe1a36ef9d923dff5d1137a5a97"
  },
  {
    "url": "blog/skepticism/2017/04/09/tekiri/index.html",
    "revision": "2079144158dafa3c9cc1d54f26f0117b"
  },
  {
    "url": "blog/skepticism/2017/04/09/vaxxed/index.html",
    "revision": "cd43782295128e37bd84532cf844863f"
  },
  {
    "url": "blog/skepticism/2017/04/23/arise/index.html",
    "revision": "cefff1be428d99e4cd83ad2270b1f64c"
  },
  {
    "url": "blog/skepticism/2017/04/23/index.html",
    "revision": "31c81782a8136f9ebf51c0dd403dba7f"
  },
  {
    "url": "blog/skepticism/2017/04/23/kelvin/index.html",
    "revision": "3d1a90263e570db2ac9f34fb529a0611"
  },
  {
    "url": "blog/skepticism/2017/04/index.html",
    "revision": "15ac5d8866f0d242add4f28bf66f56c0"
  },
  {
    "url": "blog/skepticism/2017/05/07/cancer/index.html",
    "revision": "bae79ffba8d70bfa4a8e2d1ff509275a"
  },
  {
    "url": "blog/skepticism/2017/05/07/index.html",
    "revision": "e984892be96d9d8311c434681052f55e"
  },
  {
    "url": "blog/skepticism/2017/05/07/nigel/index.html",
    "revision": "37c893763e19d98a7f74549981f3ae38"
  },
  {
    "url": "blog/skepticism/2017/05/21/blasphemy/index.html",
    "revision": "89c9a2756cf52ed14b0cc39fcc81d661"
  },
  {
    "url": "blog/skepticism/2017/05/21/flat/index.html",
    "revision": "4154269ae9b8d17543207620b9c10b52"
  },
  {
    "url": "blog/skepticism/2017/05/21/index.html",
    "revision": "624535ceb4c4e8bf069140cef19306b4"
  },
  {
    "url": "blog/skepticism/2017/05/21/maori/index.html",
    "revision": "0f13c1e56538bcdba6bcedaec02f58fb"
  },
  {
    "url": "blog/skepticism/2017/05/index.html",
    "revision": "d0b71e60e1e3c9aab5ea1ea41ec7c7df"
  },
  {
    "url": "blog/skepticism/2017/06/04/bigelow/index.html",
    "revision": "5bf0ca31309ddf4b63de97cf5eb89002"
  },
  {
    "url": "blog/skepticism/2017/06/04/climate/index.html",
    "revision": "93570d938f7be888d8411dc490ce322e"
  },
  {
    "url": "blog/skepticism/2017/06/04/hansford/index.html",
    "revision": "60dad673e2b88eaf1cd3570f97b8a8da"
  },
  {
    "url": "blog/skepticism/2017/06/04/index.html",
    "revision": "643b86bdc158d882399a9d7b969afb33"
  },
  {
    "url": "blog/skepticism/2017/06/04/wasp/index.html",
    "revision": "7570c2fcbd2bf9a9449a6fb40ee1c861"
  },
  {
    "url": "blog/skepticism/2017/06/11/colonic/index.html",
    "revision": "57581da2403f03de262bb6f1d3673b14"
  },
  {
    "url": "blog/skepticism/2017/06/11/credulous/index.html",
    "revision": "be2d7a1a38395feca8a7c177a6d277ce"
  },
  {
    "url": "blog/skepticism/2017/06/11/index.html",
    "revision": "5905ece01745b7110558a025d4222acf"
  },
  {
    "url": "blog/skepticism/2017/06/11/journals/index.html",
    "revision": "d6083abca342f1460bbcc209038e2449"
  },
  {
    "url": "blog/skepticism/2017/06/18/breatharians/index.html",
    "revision": "3956f3b348ede7c35581d91b689d8ab1"
  },
  {
    "url": "blog/skepticism/2017/06/18/fieldays/index.html",
    "revision": "8bb4564e32df0d82b01bc3f1ddd16a1c"
  },
  {
    "url": "blog/skepticism/2017/06/18/index.html",
    "revision": "ae581be3f7bf66b9de6373486d732673"
  },
  {
    "url": "blog/skepticism/2017/06/18/jw/index.html",
    "revision": "114dce10bb1a43313881479cd567c40b"
  },
  {
    "url": "blog/skepticism/2017/06/18/oil/index.html",
    "revision": "9ac3dd11a2acb67ee0be14cc747ce9f3"
  },
  {
    "url": "blog/skepticism/2017/06/index.html",
    "revision": "05ea9e1e2e11a5354a985b6d8d4afb09"
  },
  {
    "url": "blog/skepticism/2017/07/02/baby/index.html",
    "revision": "97f351b0c26817d19f9103ad2a702e6c"
  },
  {
    "url": "blog/skepticism/2017/07/02/index.html",
    "revision": "0bc98b3207e722cfcc4d43bdb38d3c22"
  },
  {
    "url": "blog/skepticism/2017/07/02/infowars/index.html",
    "revision": "312112a661202699a94ae2c0ea9df4ba"
  },
  {
    "url": "blog/skepticism/2017/07/02/scientology/index.html",
    "revision": "f759ced659f11b5a6f33c7a8f24e602d"
  },
  {
    "url": "blog/skepticism/2017/07/16/bananas/index.html",
    "revision": "c8e16004af41b1e51c023a5a2aa8139a"
  },
  {
    "url": "blog/skepticism/2017/07/16/circles/index.html",
    "revision": "caba327e2723a22e93440ef020aa692c"
  },
  {
    "url": "blog/skepticism/2017/07/16/index.html",
    "revision": "844bf43145dfc40f1db3f6adfe7cd643"
  },
  {
    "url": "blog/skepticism/2017/07/16/siggi/index.html",
    "revision": "24af4ec3a5bcc3493c3aeb2fdaea2dd0"
  },
  {
    "url": "blog/skepticism/2017/07/16/vaxxed/index.html",
    "revision": "4a19015c906c9076dfc09e7a63a2632d"
  },
  {
    "url": "blog/skepticism/2017/07/30/bleach/index.html",
    "revision": "e23b71de04d0962a3dee329ebcd24905"
  },
  {
    "url": "blog/skepticism/2017/07/30/bluebeam/index.html",
    "revision": "c887194915e0e7e1aea7d30638ecd0a1"
  },
  {
    "url": "blog/skepticism/2017/07/30/index.html",
    "revision": "5110c3c8c6d41115af13e553b4d95246"
  },
  {
    "url": "blog/skepticism/2017/07/30/police/index.html",
    "revision": "6ff14afb7f1a65eccf7e275be8e7da16"
  },
  {
    "url": "blog/skepticism/2017/07/index.html",
    "revision": "93dd000b6cf7fcaaea4e37d23b6424a9"
  },
  {
    "url": "blog/skepticism/2017/08/06/conned/index.html",
    "revision": "b3611faa8faff5961f00263849f03fdb"
  },
  {
    "url": "blog/skepticism/2017/08/06/doll/index.html",
    "revision": "bc2866cc2a3673ec826831b203e45520"
  },
  {
    "url": "blog/skepticism/2017/08/06/index.html",
    "revision": "56bd1f2bfc3f0cf6ae9faad411bdd367"
  },
  {
    "url": "blog/skepticism/2017/08/06/jacinda/index.html",
    "revision": "1dcef257bbc468c6ef2d44cdeb7407bb"
  },
  {
    "url": "blog/skepticism/2017/08/06/lotto/index.html",
    "revision": "3c959c7ff6e127006427594a76ba1027"
  },
  {
    "url": "blog/skepticism/2017/08/27/index.html",
    "revision": "9cecd979c0c610ee956cec3fd08f72d2"
  },
  {
    "url": "blog/skepticism/2017/08/27/naturopath/index.html",
    "revision": "dbb5a7ac8b1b32ce933440c652ba710e"
  },
  {
    "url": "blog/skepticism/2017/08/27/satanic/index.html",
    "revision": "144104bd8c100c05d37ff9d816dbef7e"
  },
  {
    "url": "blog/skepticism/2017/08/index.html",
    "revision": "6e7773d7069eaee9e6ed93c61539973b"
  },
  {
    "url": "blog/skepticism/2017/09/03/apocalypse/index.html",
    "revision": "5f33cd4b7aa73be8a5ce3abf2e503246"
  },
  {
    "url": "blog/skepticism/2017/09/03/cancer/index.html",
    "revision": "6c57a1d5f2b86ea0e4bd81e23b6e8f1a"
  },
  {
    "url": "blog/skepticism/2017/09/03/index.html",
    "revision": "94dc8d9ad74f6270792899c724c865b4"
  },
  {
    "url": "blog/skepticism/2017/09/03/rectangle/index.html",
    "revision": "6ea8aeaae2100548d4bc57da682b8989"
  },
  {
    "url": "blog/skepticism/2017/09/03/stargate/index.html",
    "revision": "e1aeab1352e0511d5284e93e582a6cab"
  },
  {
    "url": "blog/skepticism/2017/09/index.html",
    "revision": "23896e36bb1fc3ff1e597d6bfd094baa"
  },
  {
    "url": "blog/skepticism/2017/10/01/apocalypse/index.html",
    "revision": "e5f13f577a72f843b1a4a8a78d0056bd"
  },
  {
    "url": "blog/skepticism/2017/10/01/freeman/index.html",
    "revision": "0cb5ab416f15f080dd42790c1876f514"
  },
  {
    "url": "blog/skepticism/2017/10/01/index.html",
    "revision": "c752948280a1e258ca9d5d85a05b601b"
  },
  {
    "url": "blog/skepticism/2017/10/01/pharmacy/index.html",
    "revision": "b0535e9340677b328c0ac1eb8b3d1679"
  },
  {
    "url": "blog/skepticism/2017/10/08/index.html",
    "revision": "874b0f89b6003a54a1a15a7d7bca150a"
  },
  {
    "url": "blog/skepticism/2017/10/08/pill/index.html",
    "revision": "18c4ec46dde50adf81b8037fa61b4d22"
  },
  {
    "url": "blog/skepticism/2017/10/08/qsb/index.html",
    "revision": "150e26bd0c2f2a28fa2250f3b5e904b3"
  },
  {
    "url": "blog/skepticism/2017/10/08/vegas/index.html",
    "revision": "e654c98d156402061648a5aa7501184a"
  },
  {
    "url": "blog/skepticism/2017/10/15/doterra/index.html",
    "revision": "410e53a6b7cc9d17318948e35ab4b362"
  },
  {
    "url": "blog/skepticism/2017/10/15/index.html",
    "revision": "73dfe1e9e6a0283d30108636ac1466a1"
  },
  {
    "url": "blog/skepticism/2017/10/15/lie/index.html",
    "revision": "f7a60a47581c26a90cad5538466eae49"
  },
  {
    "url": "blog/skepticism/2017/10/15/soap/index.html",
    "revision": "ab53b54e5c290c997ba712f83f84f0ed"
  },
  {
    "url": "blog/skepticism/2017/10/index.html",
    "revision": "8edcfcb1cbc7f52a1ce472c359c97cae"
  },
  {
    "url": "blog/skepticism/2017/11/05/conference/index.html",
    "revision": "132b7249037078fec7ed851deda9511e"
  },
  {
    "url": "blog/skepticism/2017/11/05/glyphosate/index.html",
    "revision": "56e74764324345d2366f9646ebab7e94"
  },
  {
    "url": "blog/skepticism/2017/11/05/index.html",
    "revision": "0cfdb15e1ad401a9d989230bf2b76105"
  },
  {
    "url": "blog/skepticism/2017/11/05/stranded/index.html",
    "revision": "79b7ca98ab77a6b907a96b2dd72550d1"
  },
  {
    "url": "blog/skepticism/2017/11/05/tracts/index.html",
    "revision": "804bd959052dae4b989959ae58b2177a"
  },
  {
    "url": "blog/skepticism/2017/11/12/ghost/index.html",
    "revision": "67bae5aa4e2079317b9307649be84b50"
  },
  {
    "url": "blog/skepticism/2017/11/12/green/index.html",
    "revision": "359c631015ae5bc21ac572a593966417"
  },
  {
    "url": "blog/skepticism/2017/11/12/harassment/index.html",
    "revision": "aa550159b5679122f6c72a10734a61ee"
  },
  {
    "url": "blog/skepticism/2017/11/12/index.html",
    "revision": "1b885411f1027fe1889b174082bdd086"
  },
  {
    "url": "blog/skepticism/2017/11/12/libby/index.html",
    "revision": "9dc7a369829cec1efe9f40e824632e3a"
  },
  {
    "url": "blog/skepticism/2017/11/index.html",
    "revision": "334ca0eb645842c3250fa7df795f5883"
  },
  {
    "url": "blog/skepticism/2017/12/03/acupuncture/index.html",
    "revision": "6acc44545483a91cfe50f674e685d79e"
  },
  {
    "url": "blog/skepticism/2017/12/03/denialism/index.html",
    "revision": "cbd5b21caa156cc493b9e071a48af91f"
  },
  {
    "url": "blog/skepticism/2017/12/03/dowsing/index.html",
    "revision": "fbcdeefdcfec7d38405d82e19c6b3f95"
  },
  {
    "url": "blog/skepticism/2017/12/03/holes/index.html",
    "revision": "d6d83dd68c22b294de4f0d98e2488668"
  },
  {
    "url": "blog/skepticism/2017/12/03/index.html",
    "revision": "8f3b91d362dcd75102cffc09a85ad274"
  },
  {
    "url": "blog/skepticism/2017/12/17/index.html",
    "revision": "00a7d9156a08e86e39f02d8c52a8db33"
  },
  {
    "url": "blog/skepticism/2017/12/17/nhs/index.html",
    "revision": "3cc637123229b50522913504818f5b2e"
  },
  {
    "url": "blog/skepticism/2017/12/17/oto/index.html",
    "revision": "51f6fe08cea8b05f9a861e30ec5bfd86"
  },
  {
    "url": "blog/skepticism/2017/12/17/pastafarian/index.html",
    "revision": "ddb7641b1addd606879dba36f4b4a8f5"
  },
  {
    "url": "blog/skepticism/2017/12/17/shc/index.html",
    "revision": "66a4d8ac7d900426c7b0322cc17abe77"
  },
  {
    "url": "blog/skepticism/2017/12/17/wellworks/index.html",
    "revision": "443ca21d1c7b1d8ecb353d8ead1bcd40"
  },
  {
    "url": "blog/skepticism/2017/12/index.html",
    "revision": "9f407fe854f6b7f5c900dd363ec40b8e"
  },
  {
    "url": "blog/skepticism/2017/index.html",
    "revision": "47283c8eeb1fce7acba349e2ffb96c4c"
  },
  {
    "url": "blog/skepticism/2018/01/21/grounding/index.html",
    "revision": "05f8d0841f9c3281a4e6357b3bef9b44"
  },
  {
    "url": "blog/skepticism/2018/01/21/index.html",
    "revision": "0ecf1f0e6f9bc828d981a9be43dbe0f7"
  },
  {
    "url": "blog/skepticism/2018/01/21/naturopath/index.html",
    "revision": "a16ca9f65a9ac5b9eecb06b3fb8a4b5a"
  },
  {
    "url": "blog/skepticism/2018/01/21/respen/index.html",
    "revision": "475d3e66db01e193561964eb9648d59f"
  },
  {
    "url": "blog/skepticism/2018/01/28/bears/index.html",
    "revision": "250fde47c5d385f7ae4e31d9be24440e"
  },
  {
    "url": "blog/skepticism/2018/01/28/index.html",
    "revision": "dbcdc6ff1c9c6e042bfdab26c41fe3d2"
  },
  {
    "url": "blog/skepticism/2018/01/28/peppering/index.html",
    "revision": "4374c54c1b4e7743b1330aded43c6580"
  },
  {
    "url": "blog/skepticism/2018/01/28/pet/index.html",
    "revision": "f786a7171ffb09554e059c71bab2ceb2"
  },
  {
    "url": "blog/skepticism/2018/01/28/quake/index.html",
    "revision": "1b330a8146898330a7a0c267567962fa"
  },
  {
    "url": "blog/skepticism/2018/01/28/scientology/index.html",
    "revision": "130bcb54ebe620d7372e19ad2312d4bb"
  },
  {
    "url": "blog/skepticism/2018/01/index.html",
    "revision": "818f879fc8b73534eb53e3dbcfd162cb"
  },
  {
    "url": "blog/skepticism/2018/02/11/asa/index.html",
    "revision": "7cb0082d2b38523c58c2d5de0d3aab88"
  },
  {
    "url": "blog/skepticism/2018/02/11/cannabis/index.html",
    "revision": "b497aed062432e916b3d50de5a2e816a"
  },
  {
    "url": "blog/skepticism/2018/02/11/elon/index.html",
    "revision": "97b5f730fb9ed03dc0609e6f0bd75582"
  },
  {
    "url": "blog/skepticism/2018/02/11/homeopathy/index.html",
    "revision": "5d38debc6fb6d2e29b0618dca3937eee"
  },
  {
    "url": "blog/skepticism/2018/02/11/index.html",
    "revision": "5e02702054ad53aafbe89b7a4613cd72"
  },
  {
    "url": "blog/skepticism/2018/02/11/water/index.html",
    "revision": "224a2b1b3c9953a8c44c1d2cf26de41e"
  },
  {
    "url": "blog/skepticism/2018/02/25/crisis/index.html",
    "revision": "3764ea5fb4788bdeffca59151b2bdb61"
  },
  {
    "url": "blog/skepticism/2018/02/25/eggs/index.html",
    "revision": "82c656526c3000b9165f3122c8415c97"
  },
  {
    "url": "blog/skepticism/2018/02/25/fsm/index.html",
    "revision": "ff89bbd26fe9439212e6f3a5a287b778"
  },
  {
    "url": "blog/skepticism/2018/02/25/index.html",
    "revision": "d1a3b1676e125a796b595055cde4a9aa"
  },
  {
    "url": "blog/skepticism/2018/02/25/number/index.html",
    "revision": "159b8541e747b640279f0a0eb7d9ae56"
  },
  {
    "url": "blog/skepticism/2018/02/25/quackery/index.html",
    "revision": "a2263d07fa1e6ca52c4cd2030e9517b0"
  },
  {
    "url": "blog/skepticism/2018/02/index.html",
    "revision": "87a7021e51597fdfe2e92957c2eedb3d"
  },
  {
    "url": "blog/skepticism/2018/03/11/ai/index.html",
    "revision": "21de9ad69035d940e971eac145a035df"
  },
  {
    "url": "blog/skepticism/2018/03/11/index.html",
    "revision": "59c4a759429f3e9c14ec5f235488c311"
  },
  {
    "url": "blog/skepticism/2018/03/11/radiation/index.html",
    "revision": "d6abea4ca5427dc359966e4e106b7124"
  },
  {
    "url": "blog/skepticism/2018/03/11/reiki/index.html",
    "revision": "6d954718b026436c01d7c58c9c834e6b"
  },
  {
    "url": "blog/skepticism/2018/03/11/ufo/index.html",
    "revision": "44e6ddfdbb50d4e8be145d3255686fc5"
  },
  {
    "url": "blog/skepticism/2018/03/18/ghost/index.html",
    "revision": "149c610ce53e8d65a0eee3b3771c842f"
  },
  {
    "url": "blog/skepticism/2018/03/18/index.html",
    "revision": "bb12278f94e4fc3d8b45085599da4d5d"
  },
  {
    "url": "blog/skepticism/2018/03/18/psychic/index.html",
    "revision": "b72dddccec5db78ca94d7ebc235694c5"
  },
  {
    "url": "blog/skepticism/2018/03/18/quack/index.html",
    "revision": "8dd1760ada7cb7195c2eff29bfdc7e6f"
  },
  {
    "url": "blog/skepticism/2018/03/18/radiation/index.html",
    "revision": "8b8886fa367ec26e35ee72c08721d831"
  },
  {
    "url": "blog/skepticism/2018/03/index.html",
    "revision": "f6149d9f0a3c7a68bf6f8e0b9a120ffb"
  },
  {
    "url": "blog/skepticism/2018/04/08/calocurb/index.html",
    "revision": "31e632f26a48f345b2e37115170db62d"
  },
  {
    "url": "blog/skepticism/2018/04/08/cam/index.html",
    "revision": "3657995c883d0eb86d44f9c7321b4b25"
  },
  {
    "url": "blog/skepticism/2018/04/08/index.html",
    "revision": "3aa5e87d430df67ebfc9fc00c9527cc9"
  },
  {
    "url": "blog/skepticism/2018/04/08/psychic/index.html",
    "revision": "9418ec4e3e2ea9212c769f4c6c325767"
  },
  {
    "url": "blog/skepticism/2018/04/08/vaccines/index.html",
    "revision": "d5894e6a9f2428ba93cec2d3a86c3679"
  },
  {
    "url": "blog/skepticism/2018/04/15/coffee/index.html",
    "revision": "9b4ed14f71cfbbf3b9b901aec858f472"
  },
  {
    "url": "blog/skepticism/2018/04/15/ignorance/index.html",
    "revision": "7d5b20558020f3a52448e7857e53f41a"
  },
  {
    "url": "blog/skepticism/2018/04/15/index.html",
    "revision": "878414e6bf8b41469cf6669a4d8a9c21"
  },
  {
    "url": "blog/skepticism/2018/04/15/nasa/index.html",
    "revision": "87dfe5fd3179ad9d8d83fe14509922f4"
  },
  {
    "url": "blog/skepticism/2018/04/15/tapu/index.html",
    "revision": "1254cd45e66dc41d4fff5c752cbcc966"
  },
  {
    "url": "blog/skepticism/2018/04/29/google/index.html",
    "revision": "583b39258d755c298c089e5c62bd18e8"
  },
  {
    "url": "blog/skepticism/2018/04/29/homeopathy/index.html",
    "revision": "4b74f7794a21b5555c7c94a879e21b0c"
  },
  {
    "url": "blog/skepticism/2018/04/29/index.html",
    "revision": "3280e7dc703759b2e1485795b7f84629"
  },
  {
    "url": "blog/skepticism/2018/04/29/ken/index.html",
    "revision": "250eef3a661f1555266958f7a89a4b49"
  },
  {
    "url": "blog/skepticism/2018/04/29/v2k/index.html",
    "revision": "4dc4eaba4dae1d39ca642f278f56f41c"
  },
  {
    "url": "blog/skepticism/2018/04/index.html",
    "revision": "7a7c16253f531d1c14329d6aa535a91d"
  },
  {
    "url": "blog/skepticism/2018/05/13/astrology/index.html",
    "revision": "d05eab9433bfa0545337fecc100b535b"
  },
  {
    "url": "blog/skepticism/2018/05/13/crystals/index.html",
    "revision": "908da945087a50608d9d1bd8b8a2e74e"
  },
  {
    "url": "blog/skepticism/2018/05/13/dawkins/index.html",
    "revision": "3036a2f40d5124215a20aaf2857e94b5"
  },
  {
    "url": "blog/skepticism/2018/05/13/index.html",
    "revision": "9cc177ea3e47d94cf0b13e289b35cf70"
  },
  {
    "url": "blog/skepticism/2018/05/13/kangen/index.html",
    "revision": "b7d98253957137707ea7515b550b63e5"
  },
  {
    "url": "blog/skepticism/2018/05/13/vitamins/index.html",
    "revision": "4b7074a1b878f4118252848c6da37d3b"
  },
  {
    "url": "blog/skepticism/2018/05/27/flat/index.html",
    "revision": "8e03dc313fdc24f93217ce42fc92817c"
  },
  {
    "url": "blog/skepticism/2018/05/27/index.html",
    "revision": "0a4e758556a3a87ba1eab27c5a8cd0a9"
  },
  {
    "url": "blog/skepticism/2018/05/27/kangen/index.html",
    "revision": "b79c0ca4d4fb86c130fa5f844b40d83a"
  },
  {
    "url": "blog/skepticism/2018/05/27/ness/index.html",
    "revision": "fac079b8ea47d75a0c84f15e7445c02c"
  },
  {
    "url": "blog/skepticism/2018/05/27/oz/index.html",
    "revision": "7fb6d9043ab88e1f39e75f6507504404"
  },
  {
    "url": "blog/skepticism/2018/05/27/psychic/index.html",
    "revision": "d2821a99fd0ad496925bd3de4bdb75af"
  },
  {
    "url": "blog/skepticism/2018/05/index.html",
    "revision": "42d1844b3f6683ea276f2e8d1f777380"
  },
  {
    "url": "blog/skepticism/2018/06/10/astrology/index.html",
    "revision": "3e5448462acde487d60b0108da8e1b6c"
  },
  {
    "url": "blog/skepticism/2018/06/10/index.html",
    "revision": "886d931fb7419c7a91ba6273c28560bc"
  },
  {
    "url": "blog/skepticism/2018/06/10/nhs/index.html",
    "revision": "8d17677e89087fe633117714008f1aa3"
  },
  {
    "url": "blog/skepticism/2018/06/10/shakti/index.html",
    "revision": "0f5600bffa93e8058d7616ae5d392683"
  },
  {
    "url": "blog/skepticism/2018/06/10/weetbix/index.html",
    "revision": "b78144ccd6497d25846175517e3c0002"
  },
  {
    "url": "blog/skepticism/2018/06/24/blasphemy/index.html",
    "revision": "31e41654b4a378128632290925da7cee"
  },
  {
    "url": "blog/skepticism/2018/06/24/cannabis/index.html",
    "revision": "0d40e6f37c83312dbcdd2c5936c0317f"
  },
  {
    "url": "blog/skepticism/2018/06/24/hotdog/index.html",
    "revision": "8664bfd155fe0f1e8fd185b41268a74e"
  },
  {
    "url": "blog/skepticism/2018/06/24/index.html",
    "revision": "5e0d59a23ce803951ad56561a7cba235"
  },
  {
    "url": "blog/skepticism/2018/06/24/led/index.html",
    "revision": "2ebba4545173c51f5ffc61146782efb4"
  },
  {
    "url": "blog/skepticism/2018/06/index.html",
    "revision": "5b85eeb8736f5388d6ea1c7052261cef"
  },
  {
    "url": "blog/skepticism/2018/07/08/bullet/index.html",
    "revision": "42e72513896995c2917ebe87ccd87029"
  },
  {
    "url": "blog/skepticism/2018/07/08/chiros/index.html",
    "revision": "c3b8736901b7ef29761b47a20b2dbe0a"
  },
  {
    "url": "blog/skepticism/2018/07/08/hiv/index.html",
    "revision": "2195812a74a821e65c4d128616a67f44"
  },
  {
    "url": "blog/skepticism/2018/07/08/hrv/index.html",
    "revision": "105bd2509a02ac62e8d0ca99c4690be9"
  },
  {
    "url": "blog/skepticism/2018/07/08/index.html",
    "revision": "798ef1354ec2ee9eaafc5c124b21b4f3"
  },
  {
    "url": "blog/skepticism/2018/07/22/cancer/index.html",
    "revision": "1487624133348f86db29a1be9b44f7b5"
  },
  {
    "url": "blog/skepticism/2018/07/22/index.html",
    "revision": "51a9531cda98c1998715bbea9d59ea14"
  },
  {
    "url": "blog/skepticism/2018/07/22/resurrection/index.html",
    "revision": "cee48513eaf2f07d0c5b0beb8c04eb8a"
  },
  {
    "url": "blog/skepticism/2018/07/22/talc/index.html",
    "revision": "74d0008ab64c6ec344a688ca84cb71b7"
  },
  {
    "url": "blog/skepticism/2018/07/22/visas/index.html",
    "revision": "cfedbb30d7ac7c68fbb6b0ccbafffc97"
  },
  {
    "url": "blog/skepticism/2018/07/index.html",
    "revision": "d72efcce4d659ed292af88e9a17b5343"
  },
  {
    "url": "blog/skepticism/2018/08/05/conf/index.html",
    "revision": "7ce7934d71c1011f45309bd5f24f0832"
  },
  {
    "url": "blog/skepticism/2018/08/05/index.html",
    "revision": "b335095b1acbc0d68f5e655400846b30"
  },
  {
    "url": "blog/skepticism/2018/08/05/qanon/index.html",
    "revision": "f325c6255c4f085028b49bd181fc2e31"
  },
  {
    "url": "blog/skepticism/2018/08/19/index.html",
    "revision": "7ee3cb0b8ef64731ceddd7f0f2ce66ab"
  },
  {
    "url": "blog/skepticism/2018/08/19/jw/index.html",
    "revision": "24963e0f5d5f6fac357d87a11e641734"
  },
  {
    "url": "blog/skepticism/2018/08/index.html",
    "revision": "e1f07234e79af966d06a8211982c7661"
  },
  {
    "url": "blog/skepticism/2018/09/02/allergy/index.html",
    "revision": "7c6a6f10746362e81050054f6cdecb1a"
  },
  {
    "url": "blog/skepticism/2018/09/02/catholic/index.html",
    "revision": "ee08f5a3e1ddc901f64b14774d2f8087"
  },
  {
    "url": "blog/skepticism/2018/09/02/index.html",
    "revision": "43a38af9ae8f2d623082bf9ad6d03526"
  },
  {
    "url": "blog/skepticism/2018/09/02/jw/index.html",
    "revision": "03cc0d034f2f2bd492e94eb0dbb738c9"
  },
  {
    "url": "blog/skepticism/2018/09/02/sen/index.html",
    "revision": "542014aa2ff101c75fd51279b340f71f"
  },
  {
    "url": "blog/skepticism/2018/09/16/1080/index.html",
    "revision": "e982632ba6348a3dc9107bda8c4e09d1"
  },
  {
    "url": "blog/skepticism/2018/09/16/church/index.html",
    "revision": "9b11bfccccd1e7cc01d6793886ff0c40"
  },
  {
    "url": "blog/skepticism/2018/09/16/index.html",
    "revision": "655d28e8ada278c126305cd9bd29bd4d"
  },
  {
    "url": "blog/skepticism/2018/09/16/jones/index.html",
    "revision": "199c50b757dfaf17df222c4e7a20d3e4"
  },
  {
    "url": "blog/skepticism/2018/09/16/scammers/index.html",
    "revision": "86930f9afd3a622e437dd6e0f49b73dc"
  },
  {
    "url": "blog/skepticism/2018/09/30/index.html",
    "revision": "d7bd9c316329d5ae7bfe97e7cc1e353e"
  },
  {
    "url": "blog/skepticism/2018/09/30/jw/index.html",
    "revision": "c47df8f05f65a5108f59f20e651d7783"
  },
  {
    "url": "blog/skepticism/2018/09/30/oto/index.html",
    "revision": "bd5c3c9b1703becc2b2c119fa97a0f33"
  },
  {
    "url": "blog/skepticism/2018/09/30/who/index.html",
    "revision": "f639eba6768e65699adcaf3276d62fbe"
  },
  {
    "url": "blog/skepticism/2018/09/index.html",
    "revision": "9a852e87c8f5548f322a33faede8bfb4"
  },
  {
    "url": "blog/skepticism/2018/10/14/hacked/index.html",
    "revision": "ac1950a33c38be73067707bd1fda1846"
  },
  {
    "url": "blog/skepticism/2018/10/14/index.html",
    "revision": "00bb26fd24329154ecaa0039f836ecf3"
  },
  {
    "url": "blog/skepticism/2018/10/14/kangen/index.html",
    "revision": "89274591f8d3ac8e5a30f943bc651f82"
  },
  {
    "url": "blog/skepticism/2018/10/14/pakistan/index.html",
    "revision": "9673302e1bd3d98e1e80d96c3674f836"
  },
  {
    "url": "blog/skepticism/2018/10/14/sarah/index.html",
    "revision": "f03e3299beb2341ff167d2e6c3ad27a1"
  },
  {
    "url": "blog/skepticism/2018/10/28/blasphemy/index.html",
    "revision": "db200223494f117be5d59a69c6a1fa13"
  },
  {
    "url": "blog/skepticism/2018/10/28/hrv/index.html",
    "revision": "ccbce9042aeb276cb2043f9d2c030c6e"
  },
  {
    "url": "blog/skepticism/2018/10/28/index.html",
    "revision": "42dfb864c5edbb58748e0019da9feae2"
  },
  {
    "url": "blog/skepticism/2018/10/28/jesus/index.html",
    "revision": "ca7ad6a8b57352f988c720d508caa584"
  },
  {
    "url": "blog/skepticism/2018/10/28/natural/index.html",
    "revision": "78f95c005b19b6acc11074690301185d"
  },
  {
    "url": "blog/skepticism/2018/10/index.html",
    "revision": "b1211d788ee28b3b0660a65417e8288d"
  },
  {
    "url": "blog/skepticism/2018/11/04/bibi/index.html",
    "revision": "7bf1f14e25ffa1da9885bb57a66956d6"
  },
  {
    "url": "blog/skepticism/2018/11/04/index.html",
    "revision": "dfa1109288722fba78cc3e9e6731095d"
  },
  {
    "url": "blog/skepticism/2018/11/04/jesus/index.html",
    "revision": "67d853987071db1f08e7f7933c2c275c"
  },
  {
    "url": "blog/skepticism/2018/11/04/obdii/index.html",
    "revision": "7810a78788dbfd5ac2f32c9c60c79dff"
  },
  {
    "url": "blog/skepticism/2018/11/04/sleepdrops/index.html",
    "revision": "33984ef7046b0037be0d31a64f89bc77"
  },
  {
    "url": "blog/skepticism/2018/11/index.html",
    "revision": "c67358a554113ec46efae14fbe4a3461"
  },
  {
    "url": "blog/skepticism/2018/12/02/ark/index.html",
    "revision": "aeab45671a7e8e14c05489777a11699c"
  },
  {
    "url": "blog/skepticism/2018/12/02/green/index.html",
    "revision": "e131a5392f30d7070977ff2b0d15c89e"
  },
  {
    "url": "blog/skepticism/2018/12/02/index.html",
    "revision": "12a8729eceb93844cdfc215d9de80e2d"
  },
  {
    "url": "blog/skepticism/2018/12/02/ri/index.html",
    "revision": "dc7e449548011c9f9aa21f484cb26510"
  },
  {
    "url": "blog/skepticism/2018/12/16/blasphemy/index.html",
    "revision": "4103ded627199dc3e52cba8228ea2ff5"
  },
  {
    "url": "blog/skepticism/2018/12/16/index.html",
    "revision": "6ae8ebc8af18b0d78035f7e2fb56f0ff"
  },
  {
    "url": "blog/skepticism/2018/12/16/sleepdrops/index.html",
    "revision": "b9ab14966e15193ffcb2552487532cca"
  },
  {
    "url": "blog/skepticism/2018/12/16/tekiri/index.html",
    "revision": "c8f939d8d799b592a4853460db90abab"
  },
  {
    "url": "blog/skepticism/2018/12/index.html",
    "revision": "ad51100dca70d79e789d74eb3c0e0f27"
  },
  {
    "url": "blog/skepticism/2018/index.html",
    "revision": "c87f56443fc4eccccc3c7db1be290921"
  },
  {
    "url": "blog/skepticism/2020/08/18/index.html",
    "revision": "eb4896308ff62cb3162007bbe05969b1"
  },
  {
    "url": "blog/skepticism/2020/08/18/myths/index.html",
    "revision": "e2b940dfdd1fe2dfb6081a2db6ebe4fa"
  },
  {
    "url": "blog/skepticism/2020/08/index.html",
    "revision": "c0a0504c056fb10e837cf0a4584f19e8"
  },
  {
    "url": "blog/skepticism/2020/10/20/election/index.html",
    "revision": "18178cef7f7d5ad876e46ea7fb450793"
  },
  {
    "url": "blog/skepticism/2020/11/09/haunted/index.html",
    "revision": "ac82fa4a5b36f676e62c674f6da67e0a"
  },
  {
    "url": "blog/skepticism/2020/11/09/jade/index.html",
    "revision": "8e861a49f86199b67efdc603a0cdebb1"
  },
  {
    "url": "blog/skepticism/2020/11/09/luminate/index.html",
    "revision": "2cd59d801935b6a289eaaec4baf412f3"
  },
  {
    "url": "blog/skepticism/2020/11/09/randi/index.html",
    "revision": "4a30fd1431262b8427b4f7b084f8ec75"
  },
  {
    "url": "blog/skepticism/2020/11/09/wwg1wga/index.html",
    "revision": "b8520c4fc9f0e28506af9c0d908fc956"
  },
  {
    "url": "blog/skepticism/2020/index.html",
    "revision": "bb3d90ba41a7325234f28618cccca9a7"
  },
  {
    "url": "blog/skepticism/index.html",
    "revision": "23da3780a7b214717e8598bf2babd6ce"
  },
  {
    "url": "blog/tag/index.html",
    "revision": "d675ee3e91a684b6407f3bd38b8db7ef"
  },
  {
    "url": "contact/index.html",
    "revision": "bc382e3ac1e870bb75bf669637e49f97"
  },
  {
    "url": "cv/cover/index.html",
    "revision": "eb374ae8b9bcb3956205319106b2a13a"
  },
  {
    "url": "cv/full.html",
    "revision": "35620fbf04441dff3aa0b444ef858169"
  },
  {
    "url": "cv/full/index.html",
    "revision": "914a69d0fa1d9af9208c9ba1f5003786"
  },
  {
    "url": "cv/index.html",
    "revision": "1fbd4f9d92aac84a350a173c9af71a64"
  },
  {
    "url": "cv/short.html",
    "revision": "a3c432c8744e52de8c8779b484d4870e"
  },
  {
    "url": "googlee25d0c06da891164.html",
    "revision": "0defe75660212f417b90c5affcd03380"
  },
  {
    "url": "index.html",
    "revision": "9fbec628ebf6fb38f68f3ca10fa3a5cb"
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
    "revision": "3232b8b41046bab6db633d98aba3253b"
  },
  {
    "url": "media/me/index.html",
    "revision": "fef98ba28ca1821f528affe42f529f9f"
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
    "revision": "17852cfdf41a573c43b780b452ace7ed"
  },
  {
    "url": "status/index.html",
    "revision": "45a4d890c75d3481a4a9239f8a120e6a"
  },
  {
    "url": "status/steam/index.html",
    "revision": "3417c5ccc9919fec5ad95d5ee011ac2c"
  },
  {
    "url": "status/twitter/index.html",
    "revision": "e6a7409e1ea358aaa710d5f4bbe8f198"
  },
  {
    "url": "status/wikipedia/index.html",
    "revision": "1597d82ac33a87a803ae3d8d2e248433"
  },
  {
    "url": "test/index.html",
    "revision": "21aae9ff6ccc6279bc1dbc47487f9366"
  },
  {
    "url": "test/webcam/index.html",
    "revision": "b9b7b431ecba273bda4f00c3a89dfc9d"
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
