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
    "revision": "ccbc81e2d0393ed52262c8f92d4d950a"
  },
  {
    "url": "assets/css/0.styles.css",
    "revision": "2b8bf385b4228a861aa46c497db7d119"
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
    "revision": "99e895eb163993189bac6cdce4d5d493"
  },
  {
    "url": "assets/js/10.js",
    "revision": "2815f593ed19d87ae528c2390cd73bde"
  },
  {
    "url": "assets/js/100.js",
    "revision": "dcf8bb878b55e460ec14c03615aa5bbc"
  },
  {
    "url": "assets/js/101.js",
    "revision": "f2ba83a261f84fcf9d3ee7c41a348380"
  },
  {
    "url": "assets/js/102.js",
    "revision": "820f00fdc2c2b0fdd5e45c8d5418c1cd"
  },
  {
    "url": "assets/js/103.js",
    "revision": "72bd903bd7650f9048948b8c81cf1494"
  },
  {
    "url": "assets/js/104.js",
    "revision": "3538c312b662acfdbb8d5c042a934fd4"
  },
  {
    "url": "assets/js/105.js",
    "revision": "63546928affb5718cd2a45c6c9ab2f23"
  },
  {
    "url": "assets/js/106.js",
    "revision": "0263302fa226cc2711bbe247be1f355d"
  },
  {
    "url": "assets/js/107.js",
    "revision": "d2e5f08dcd6498b5403bd4beb3228b76"
  },
  {
    "url": "assets/js/108.js",
    "revision": "01b2c7402eea187372dff9e58738e672"
  },
  {
    "url": "assets/js/109.js",
    "revision": "6da72041760bf6215a5fd2424190eed0"
  },
  {
    "url": "assets/js/11.js",
    "revision": "0f8cfd73feda3a7830764a337154b517"
  },
  {
    "url": "assets/js/110.js",
    "revision": "c075da22826a92104e4809d2800df94b"
  },
  {
    "url": "assets/js/111.js",
    "revision": "b05ca49504047d6275041ac589778563"
  },
  {
    "url": "assets/js/112.js",
    "revision": "290bf2cf08366f53ef6398e8d8c3f7b2"
  },
  {
    "url": "assets/js/113.js",
    "revision": "b16feb97740238ddb5cabdb9a346aaf0"
  },
  {
    "url": "assets/js/114.js",
    "revision": "93fb142e867155690e0b8ea8ddd11694"
  },
  {
    "url": "assets/js/115.js",
    "revision": "02fe544af18f68e410aff842ebd5b043"
  },
  {
    "url": "assets/js/116.js",
    "revision": "9b670c4b1f51ad8010ce7e6c9ce39353"
  },
  {
    "url": "assets/js/117.js",
    "revision": "fdec61dc11926b798328c085974b9394"
  },
  {
    "url": "assets/js/118.js",
    "revision": "7f40c4ff259be32043b7c6409152b2e3"
  },
  {
    "url": "assets/js/119.js",
    "revision": "8c2bdfe6d3c390f6bea1162f6d0668e6"
  },
  {
    "url": "assets/js/12.js",
    "revision": "39591c3e6c69cc0fd0772ec57c8df6e4"
  },
  {
    "url": "assets/js/120.js",
    "revision": "9b0a4c080fb115571dd5b12d1e9bdd03"
  },
  {
    "url": "assets/js/121.js",
    "revision": "86bf100a8be044587f8a1b2332435941"
  },
  {
    "url": "assets/js/122.js",
    "revision": "4e17e851efa94b95246fc37ef128a458"
  },
  {
    "url": "assets/js/123.js",
    "revision": "43a151265691920be349af1e6846255c"
  },
  {
    "url": "assets/js/124.js",
    "revision": "57c503f612239bdddbe4c21c74164dfc"
  },
  {
    "url": "assets/js/125.js",
    "revision": "694ae177833302658ca988ac14e438df"
  },
  {
    "url": "assets/js/126.js",
    "revision": "24eafe8f5d115f8304331f42797fd4b6"
  },
  {
    "url": "assets/js/127.js",
    "revision": "4fcb12c450b67579119d1f6689d1b317"
  },
  {
    "url": "assets/js/128.js",
    "revision": "e47774438dc1e305bddd088a1b6ecb8f"
  },
  {
    "url": "assets/js/129.js",
    "revision": "99dd34e62086bd5ff9d343752ca18bb0"
  },
  {
    "url": "assets/js/13.js",
    "revision": "f7b4956262276f5615776f0889881107"
  },
  {
    "url": "assets/js/130.js",
    "revision": "c4c376a188152f03949d70bd1fde6783"
  },
  {
    "url": "assets/js/131.js",
    "revision": "8d4b4c65a52804b6cbd885c596544561"
  },
  {
    "url": "assets/js/132.js",
    "revision": "40dab6438d96ca7c0f1cbb76f833c674"
  },
  {
    "url": "assets/js/133.js",
    "revision": "bfe1d1d1d2c77311808f158770d80db3"
  },
  {
    "url": "assets/js/134.js",
    "revision": "66271a4d8e6fa8e35f1d111949d2c4e7"
  },
  {
    "url": "assets/js/135.js",
    "revision": "8d76f7095a9934150f0fa2f18de22507"
  },
  {
    "url": "assets/js/136.js",
    "revision": "3acd23f5282a27fe0aa689d11dca05a6"
  },
  {
    "url": "assets/js/137.js",
    "revision": "fc839cd038a18e3145091dd0f9fc1b89"
  },
  {
    "url": "assets/js/138.js",
    "revision": "885768bd683bfdf8e296db8b60410e00"
  },
  {
    "url": "assets/js/139.js",
    "revision": "12534b8a2766be26cdf6ac2b4bd04cca"
  },
  {
    "url": "assets/js/14.js",
    "revision": "672dc2b0ccbf8e3cb7adea0aaa8133d6"
  },
  {
    "url": "assets/js/140.js",
    "revision": "898bba482cee38d88c4d7657fc2c2667"
  },
  {
    "url": "assets/js/141.js",
    "revision": "84c6d78d27f9e0bd25bf966e3e768e54"
  },
  {
    "url": "assets/js/142.js",
    "revision": "ca6347e5b2be2591ebb1490696e29cbf"
  },
  {
    "url": "assets/js/143.js",
    "revision": "1e29d237a03179694199c1a80caf8f26"
  },
  {
    "url": "assets/js/144.js",
    "revision": "8f8665f0a6825be3a94aff388a1f2afc"
  },
  {
    "url": "assets/js/145.js",
    "revision": "ecc30ee8d2ed75ea985a56dc86ae38ed"
  },
  {
    "url": "assets/js/146.js",
    "revision": "d79d90324bbed7d83603d6479df56ba2"
  },
  {
    "url": "assets/js/147.js",
    "revision": "d38416a079a1d557558a844f29d9d992"
  },
  {
    "url": "assets/js/148.js",
    "revision": "03a00daa48625d8e3d9967a3c09a650f"
  },
  {
    "url": "assets/js/149.js",
    "revision": "3c372d89d9f822773d80daf7ebff7cfc"
  },
  {
    "url": "assets/js/15.js",
    "revision": "58af630227887bb6d3dff6194d8bb625"
  },
  {
    "url": "assets/js/150.js",
    "revision": "aed1b379800b5ccf045181cbe7e32bd7"
  },
  {
    "url": "assets/js/151.js",
    "revision": "34cfc39640b6794f4c59b3fe163d0cf7"
  },
  {
    "url": "assets/js/152.js",
    "revision": "bbb811e44c3468817a949d5df61a7f6a"
  },
  {
    "url": "assets/js/153.js",
    "revision": "85de87411f2b15d36bfbdcf66bd8cf7e"
  },
  {
    "url": "assets/js/154.js",
    "revision": "514cb29004e5353379efa3334e29e3ba"
  },
  {
    "url": "assets/js/155.js",
    "revision": "3c6a1fa73479b3ecd109d27235f9bd6f"
  },
  {
    "url": "assets/js/156.js",
    "revision": "1f14bd95c12f192ffab051dd7c1817ae"
  },
  {
    "url": "assets/js/157.js",
    "revision": "f1b9e7bf8c70a953252f8c6bcc1d97d6"
  },
  {
    "url": "assets/js/158.js",
    "revision": "1eb390c6dc6f80cd998a345f9810191d"
  },
  {
    "url": "assets/js/159.js",
    "revision": "20c8af06315970fe05bb07379b3f93f8"
  },
  {
    "url": "assets/js/16.js",
    "revision": "801a38e208e7163a7ecf6c3231816b5d"
  },
  {
    "url": "assets/js/160.js",
    "revision": "0a89cd9992b223171ef9e7bdc909d578"
  },
  {
    "url": "assets/js/161.js",
    "revision": "af4e06287a6ca8acd7ab06cd63843704"
  },
  {
    "url": "assets/js/162.js",
    "revision": "e0eba3377a84b7a86155e45710f1fb2a"
  },
  {
    "url": "assets/js/163.js",
    "revision": "e26d4785f06455c7031c92920ebd23b8"
  },
  {
    "url": "assets/js/164.js",
    "revision": "e88b1dc02a35b75616e877c8a64d7173"
  },
  {
    "url": "assets/js/165.js",
    "revision": "c5fd51841d19a3630b1004e93f612d9e"
  },
  {
    "url": "assets/js/166.js",
    "revision": "d95a518b3d182c516d548a3186cb9d5b"
  },
  {
    "url": "assets/js/167.js",
    "revision": "63c9a1377166f1ccf5700b7ab86cd839"
  },
  {
    "url": "assets/js/168.js",
    "revision": "86073d1175a1485a631e318ee0272197"
  },
  {
    "url": "assets/js/169.js",
    "revision": "3302ffa5da889276bcee0ee394bdacbb"
  },
  {
    "url": "assets/js/17.js",
    "revision": "7e71ac65e4d52972fef018a419a53c2b"
  },
  {
    "url": "assets/js/170.js",
    "revision": "f9b1c4eef2372d116e96e3f3786c4bb4"
  },
  {
    "url": "assets/js/171.js",
    "revision": "c25b2bbfcc902b2e7a08f591bd768153"
  },
  {
    "url": "assets/js/172.js",
    "revision": "618d4a9056008a7cb81b051accd2e703"
  },
  {
    "url": "assets/js/173.js",
    "revision": "27857cfbdbfafd91170ee72968984edb"
  },
  {
    "url": "assets/js/174.js",
    "revision": "42161bc90e400afd54d7ee038b1ae905"
  },
  {
    "url": "assets/js/175.js",
    "revision": "f1c31e632c90e643a6c4c76a3fb142e3"
  },
  {
    "url": "assets/js/176.js",
    "revision": "35b6ed5a4c7f130c2839ea1826e302e1"
  },
  {
    "url": "assets/js/177.js",
    "revision": "8414b085b3ce96d85fc96777e914ce89"
  },
  {
    "url": "assets/js/178.js",
    "revision": "9ff749d71a8685a4540a48dbdb9dc636"
  },
  {
    "url": "assets/js/179.js",
    "revision": "c99d2634aa30a40cf347f156261b15a3"
  },
  {
    "url": "assets/js/18.js",
    "revision": "27889644852af6a22949434b8608ddff"
  },
  {
    "url": "assets/js/180.js",
    "revision": "dd52dba1ee59be286616238839b6c7bc"
  },
  {
    "url": "assets/js/181.js",
    "revision": "ef12283021946db19cdf03da0efdbe96"
  },
  {
    "url": "assets/js/182.js",
    "revision": "ec2e28b4cdaf4447a4b18200bf77096e"
  },
  {
    "url": "assets/js/183.js",
    "revision": "c2addb5a8662b4e85e279ea9dddb1100"
  },
  {
    "url": "assets/js/184.js",
    "revision": "bf3e26df7fb2d2e7164b22c5f2cc359a"
  },
  {
    "url": "assets/js/185.js",
    "revision": "dadb5663930932d9da5961812b519b25"
  },
  {
    "url": "assets/js/186.js",
    "revision": "9853fecd217b987fc2e2b52d25959462"
  },
  {
    "url": "assets/js/187.js",
    "revision": "b1881784460cbaf402637f35f3d7ab1e"
  },
  {
    "url": "assets/js/188.js",
    "revision": "269a5424f47f72a6908eccf312dbfd13"
  },
  {
    "url": "assets/js/189.js",
    "revision": "1cff8c50efea1efe6c103e0fe399b044"
  },
  {
    "url": "assets/js/19.js",
    "revision": "f6c2c2d0ae78a787541e521943acff34"
  },
  {
    "url": "assets/js/190.js",
    "revision": "7facb3d67f8f24a58f2bae5952a7f5ec"
  },
  {
    "url": "assets/js/191.js",
    "revision": "d6f8a9cd76c17d547fa923bc1482d614"
  },
  {
    "url": "assets/js/192.js",
    "revision": "3be68e528c6425d6cc0f48639e726267"
  },
  {
    "url": "assets/js/193.js",
    "revision": "75975b719896c1660c181cf0e8681bf2"
  },
  {
    "url": "assets/js/194.js",
    "revision": "792b871c62a482ac341d20d404c717aa"
  },
  {
    "url": "assets/js/195.js",
    "revision": "edc50dd155ccf5456bf1df4524f65279"
  },
  {
    "url": "assets/js/196.js",
    "revision": "3c798c41575a6686a22adbbd7dcd9039"
  },
  {
    "url": "assets/js/197.js",
    "revision": "5dfc6843c7bc95c6493e413a15f3bc7f"
  },
  {
    "url": "assets/js/198.js",
    "revision": "6358efc250f7b804eb79c498fd60fa72"
  },
  {
    "url": "assets/js/199.js",
    "revision": "05f0c19218c529c0f8e8ae62ea6aaa06"
  },
  {
    "url": "assets/js/2.js",
    "revision": "62f0f435cef8032698d9593766e52b98"
  },
  {
    "url": "assets/js/20.js",
    "revision": "e30fb79ec980f965464e172174c9c7d9"
  },
  {
    "url": "assets/js/200.js",
    "revision": "c68ea16501e8736fd8f034eb5cf086ce"
  },
  {
    "url": "assets/js/201.js",
    "revision": "7e5314c1103db24ccc985de0a00b01b8"
  },
  {
    "url": "assets/js/202.js",
    "revision": "7056efd38f35ab1af392c66fe2bbb24e"
  },
  {
    "url": "assets/js/203.js",
    "revision": "715da69f95a665d805743247a6249d8f"
  },
  {
    "url": "assets/js/204.js",
    "revision": "9149b433f75fc91829708489d9775320"
  },
  {
    "url": "assets/js/205.js",
    "revision": "a8f4cc102ef1524ec34fb784e3f3bebf"
  },
  {
    "url": "assets/js/206.js",
    "revision": "df7c4e9d26ee07d77e517738b143ab37"
  },
  {
    "url": "assets/js/207.js",
    "revision": "e5cff60d0f5fd9a506cdabcbf050aa63"
  },
  {
    "url": "assets/js/208.js",
    "revision": "8d43a512988b3f2fc1027a67cb54d9d0"
  },
  {
    "url": "assets/js/209.js",
    "revision": "b2633af510b06eca8e5b5fd9c737ca5d"
  },
  {
    "url": "assets/js/21.js",
    "revision": "09d881b3bada826f0d3a8791d1b77459"
  },
  {
    "url": "assets/js/210.js",
    "revision": "e263771eaa821160499b08e03287cd5a"
  },
  {
    "url": "assets/js/211.js",
    "revision": "4f76f3f2ca88755b1193b49262c43f51"
  },
  {
    "url": "assets/js/212.js",
    "revision": "b25c5c1c2cd77411062fd6c8cc44015a"
  },
  {
    "url": "assets/js/213.js",
    "revision": "97fa1c043641a7cc9c5f5bd35fdb53f9"
  },
  {
    "url": "assets/js/214.js",
    "revision": "b8cce852bd124f02a7600c95e4acc21b"
  },
  {
    "url": "assets/js/215.js",
    "revision": "b51e8265f4f6ed3e56b83f1e2882ccce"
  },
  {
    "url": "assets/js/216.js",
    "revision": "37188a40cc64717dd4b8bf686bcd9fa6"
  },
  {
    "url": "assets/js/217.js",
    "revision": "c75bd1c427ba3b7e327bdc3b07a0c5b7"
  },
  {
    "url": "assets/js/218.js",
    "revision": "837603328c50800a9ef865a8e349c990"
  },
  {
    "url": "assets/js/219.js",
    "revision": "de12b89db550ca82bd4f3a66d15f24ad"
  },
  {
    "url": "assets/js/22.js",
    "revision": "166ea192fc751e8dca11917daf9885aa"
  },
  {
    "url": "assets/js/220.js",
    "revision": "c6cb421cd120047ee1c2c07664f58782"
  },
  {
    "url": "assets/js/221.js",
    "revision": "5598d5b4efaba25d412528af4688bc51"
  },
  {
    "url": "assets/js/222.js",
    "revision": "afea05763bfcb716d60b1619ac228a2a"
  },
  {
    "url": "assets/js/223.js",
    "revision": "097521f8a5915492f7cd424077ff375e"
  },
  {
    "url": "assets/js/224.js",
    "revision": "e9f07103933e1bad1afc40116fa003c1"
  },
  {
    "url": "assets/js/225.js",
    "revision": "763dc53c5ca3309d63a41547b964fc6c"
  },
  {
    "url": "assets/js/226.js",
    "revision": "0039eaeda21d2f5ee4312abc871b2ea1"
  },
  {
    "url": "assets/js/227.js",
    "revision": "89b2d0e5a909c07fe7476551a65f1264"
  },
  {
    "url": "assets/js/228.js",
    "revision": "41ab6f99275c1b969b598496feca0e4f"
  },
  {
    "url": "assets/js/229.js",
    "revision": "15ffa2b00d01550511415dfd97a23af3"
  },
  {
    "url": "assets/js/23.js",
    "revision": "2a21e80adffc537a3b2e96d29e821a19"
  },
  {
    "url": "assets/js/230.js",
    "revision": "e0ed71c3a59471421399d9b381befb41"
  },
  {
    "url": "assets/js/231.js",
    "revision": "8ce459f22c1d797cfa05aea630d4ce07"
  },
  {
    "url": "assets/js/232.js",
    "revision": "51d3b3399fa14604c501e464c6652719"
  },
  {
    "url": "assets/js/233.js",
    "revision": "da9b297792b50cb7b51deaed794f0088"
  },
  {
    "url": "assets/js/234.js",
    "revision": "c16f60a8fd802f72c92756e0572b63cb"
  },
  {
    "url": "assets/js/235.js",
    "revision": "d902baa7bc5152dd5ff2a745b7f7fd2b"
  },
  {
    "url": "assets/js/236.js",
    "revision": "4405b06ee2aafa965dd666d7bebbd4f3"
  },
  {
    "url": "assets/js/237.js",
    "revision": "d6ea559e51eb14db3751fc1e5eae8664"
  },
  {
    "url": "assets/js/238.js",
    "revision": "574037f05367edb4464ca3a9787a7603"
  },
  {
    "url": "assets/js/239.js",
    "revision": "970ffd4a7fb3a3d9177ff9ce29ac8d88"
  },
  {
    "url": "assets/js/24.js",
    "revision": "407c40a2411eb5b01294b1219c0486a8"
  },
  {
    "url": "assets/js/240.js",
    "revision": "37a905748fd7e572994a87c3ea8e284b"
  },
  {
    "url": "assets/js/241.js",
    "revision": "da1851ace417eb54a26f210462b29b11"
  },
  {
    "url": "assets/js/242.js",
    "revision": "84b5eab53da760f28874b7c22b04a078"
  },
  {
    "url": "assets/js/243.js",
    "revision": "f609d5fa7d26cded6023cf1b51193b3d"
  },
  {
    "url": "assets/js/244.js",
    "revision": "3aecb7907dbaa77fcd1f7db6c732e4a3"
  },
  {
    "url": "assets/js/245.js",
    "revision": "264b9ba9fcfaf67a8a56be8cc1d1c0c1"
  },
  {
    "url": "assets/js/246.js",
    "revision": "7b9a42af2243fb487ee3f02f7e69df54"
  },
  {
    "url": "assets/js/247.js",
    "revision": "cbe446f0bcfdce6a219e66b575209390"
  },
  {
    "url": "assets/js/248.js",
    "revision": "56a103d6d3b3eb2ba926105234a936ee"
  },
  {
    "url": "assets/js/249.js",
    "revision": "cad14e4751cdee531db666b4004899ca"
  },
  {
    "url": "assets/js/25.js",
    "revision": "838f2edb396456cdcefb1ff5e463169a"
  },
  {
    "url": "assets/js/250.js",
    "revision": "5019e1af153f0131e70b3af360e8cb46"
  },
  {
    "url": "assets/js/251.js",
    "revision": "3787c30a48d13869b3123dfcc01f9927"
  },
  {
    "url": "assets/js/252.js",
    "revision": "d38b1974f576ed0e3b5040f3f7aa8fb8"
  },
  {
    "url": "assets/js/253.js",
    "revision": "4c646912e081335d915f2924492f4e9e"
  },
  {
    "url": "assets/js/254.js",
    "revision": "28859e60191d6f6441154c390e48c54b"
  },
  {
    "url": "assets/js/255.js",
    "revision": "790c03b64b3fb2cea0bbbd0f40201c03"
  },
  {
    "url": "assets/js/256.js",
    "revision": "f7951e22c66e27e6c71c298af3fb655b"
  },
  {
    "url": "assets/js/257.js",
    "revision": "c234e82efe9255fddbec7ef5ed37efde"
  },
  {
    "url": "assets/js/258.js",
    "revision": "003d709b70060041d97014cfd721e25d"
  },
  {
    "url": "assets/js/259.js",
    "revision": "0dcfc15650d5550ee0c136b9c3a379d0"
  },
  {
    "url": "assets/js/26.js",
    "revision": "45243b5a1d74f3103377077a778094a7"
  },
  {
    "url": "assets/js/260.js",
    "revision": "014fc692255bcc71627d7c2bbb41d52d"
  },
  {
    "url": "assets/js/261.js",
    "revision": "0476f448893b1664c12b313bf18e0331"
  },
  {
    "url": "assets/js/262.js",
    "revision": "98ed3da5367616e317f8fe2c34572dd6"
  },
  {
    "url": "assets/js/263.js",
    "revision": "913a51da9f434f571d79f3054b90cb86"
  },
  {
    "url": "assets/js/264.js",
    "revision": "cfd1169eb279174c6a2d47c97a9d3e3e"
  },
  {
    "url": "assets/js/265.js",
    "revision": "95754aef9c7fa243e4414bf03166574a"
  },
  {
    "url": "assets/js/266.js",
    "revision": "7a79c0705fca3559261f87d1c2773468"
  },
  {
    "url": "assets/js/267.js",
    "revision": "e8d5eec21d59bb7779695afc51606044"
  },
  {
    "url": "assets/js/268.js",
    "revision": "81c46943e4b04a4d22eee6b195e519d2"
  },
  {
    "url": "assets/js/269.js",
    "revision": "937448df30cbdda213df944bc775e952"
  },
  {
    "url": "assets/js/27.js",
    "revision": "c6333a206f15876f44807693674322bb"
  },
  {
    "url": "assets/js/270.js",
    "revision": "f2692be391bbc7d7361521ec136c68a0"
  },
  {
    "url": "assets/js/271.js",
    "revision": "ec552881e0275ef25dd6d6ee08907cb2"
  },
  {
    "url": "assets/js/272.js",
    "revision": "9860770e4ff93da36df3b8c8d7cc0184"
  },
  {
    "url": "assets/js/273.js",
    "revision": "f9d173df8ca0abec8d51f3d3db4e152d"
  },
  {
    "url": "assets/js/274.js",
    "revision": "50c1978104c380981c5e4d3858ff94f5"
  },
  {
    "url": "assets/js/275.js",
    "revision": "2bb6254fa22af0ef4f5e301165cd01ce"
  },
  {
    "url": "assets/js/276.js",
    "revision": "35c0028a161ff6e79521f2cc16cd3264"
  },
  {
    "url": "assets/js/277.js",
    "revision": "d04a7bfff8b34390de1752a75e56a6cd"
  },
  {
    "url": "assets/js/278.js",
    "revision": "0c0fd8e2e7d8012631c2a129869989de"
  },
  {
    "url": "assets/js/279.js",
    "revision": "44ec319e919d83bf3d89bed1914a39be"
  },
  {
    "url": "assets/js/28.js",
    "revision": "640a0eb3041575248c6554fdbcc7471b"
  },
  {
    "url": "assets/js/280.js",
    "revision": "244e0704010e09f38d838244b1fa5203"
  },
  {
    "url": "assets/js/281.js",
    "revision": "785f856122b0e0091da4e94236b6169c"
  },
  {
    "url": "assets/js/282.js",
    "revision": "935f568cd14a615cf0f9feca570fc7c0"
  },
  {
    "url": "assets/js/283.js",
    "revision": "e29d33ba49a707f8253bd0833b5844ea"
  },
  {
    "url": "assets/js/284.js",
    "revision": "0844a2fccd2b52b0ffeb64ac24f8fcbe"
  },
  {
    "url": "assets/js/285.js",
    "revision": "62dd438b49eaa6bc4765dcbab066b48c"
  },
  {
    "url": "assets/js/286.js",
    "revision": "53ded862afab32f2f264a8d45c1d9a05"
  },
  {
    "url": "assets/js/287.js",
    "revision": "993756104fb380b9d398016ad3423023"
  },
  {
    "url": "assets/js/288.js",
    "revision": "7b6fa1516a612e848856d1e0fdb06e8b"
  },
  {
    "url": "assets/js/289.js",
    "revision": "834064410c4789089a3baa1fc6a5e97c"
  },
  {
    "url": "assets/js/29.js",
    "revision": "58c0127d806a5da82b28a5977d6ca12f"
  },
  {
    "url": "assets/js/290.js",
    "revision": "af38693562fd6c13e2391660491bd29f"
  },
  {
    "url": "assets/js/291.js",
    "revision": "cf56b61c57a0f0740a2223f8061185e4"
  },
  {
    "url": "assets/js/292.js",
    "revision": "2837ad5844d25818140ff1683fefc68d"
  },
  {
    "url": "assets/js/293.js",
    "revision": "3b135aaef687e345da3a532ca46ca7b6"
  },
  {
    "url": "assets/js/294.js",
    "revision": "1247f0de440d61d2c69cd2c9d33a902f"
  },
  {
    "url": "assets/js/295.js",
    "revision": "05fedc33bbf072cc7386ca381c1deebe"
  },
  {
    "url": "assets/js/296.js",
    "revision": "62eb54e88a76e17d27f5f3fc42cdd7e5"
  },
  {
    "url": "assets/js/297.js",
    "revision": "ffc9913f90e4cf791a3f5f4653d9bf49"
  },
  {
    "url": "assets/js/298.js",
    "revision": "635df4e9ab8bad0b4e3efffdf7f974f6"
  },
  {
    "url": "assets/js/299.js",
    "revision": "ab5453a67d7c4a290fd3dd80e480816b"
  },
  {
    "url": "assets/js/3.js",
    "revision": "a48c67e21e6169f5520564d7e69de65e"
  },
  {
    "url": "assets/js/30.js",
    "revision": "e807253b05c4754c0a7c012e197d711e"
  },
  {
    "url": "assets/js/300.js",
    "revision": "a166a8a3bbc54415bd209860e24e99e2"
  },
  {
    "url": "assets/js/301.js",
    "revision": "3038e6926954bb0bbe2cd25af0f338fb"
  },
  {
    "url": "assets/js/302.js",
    "revision": "39364f7f6000eb8d5004fae3293fd086"
  },
  {
    "url": "assets/js/303.js",
    "revision": "e660863a298978838129fcbb13c12631"
  },
  {
    "url": "assets/js/304.js",
    "revision": "97a3480f6cde067f6242a3ac3738f9f0"
  },
  {
    "url": "assets/js/305.js",
    "revision": "809e75b1dcea0a9d47b9829a9d0b7662"
  },
  {
    "url": "assets/js/306.js",
    "revision": "1803869250f72c442d2b572ce8f1ae5f"
  },
  {
    "url": "assets/js/307.js",
    "revision": "abf19304e0c279d091c452442b55ea7c"
  },
  {
    "url": "assets/js/308.js",
    "revision": "c0ea997bff65fc4ea6bafcf272fad95b"
  },
  {
    "url": "assets/js/309.js",
    "revision": "2b7ed5b79ae85b0e7e65bcca2ad1acd2"
  },
  {
    "url": "assets/js/31.js",
    "revision": "8597a11011d7fd2d2e5629a3c60d759c"
  },
  {
    "url": "assets/js/310.js",
    "revision": "78fba36601854073f78b4d0d5bf1fb6b"
  },
  {
    "url": "assets/js/311.js",
    "revision": "daa5039f6433884579df62d7dd653d61"
  },
  {
    "url": "assets/js/312.js",
    "revision": "c1f90b10d29bcfe33b7ec90dc3af39e8"
  },
  {
    "url": "assets/js/313.js",
    "revision": "213546f942143d43747f002a3a437f70"
  },
  {
    "url": "assets/js/314.js",
    "revision": "7a0ec42a8da066248f86ba812d22ccfb"
  },
  {
    "url": "assets/js/315.js",
    "revision": "4020f75e87aef9d418580401cd7e09c3"
  },
  {
    "url": "assets/js/316.js",
    "revision": "e76d1d5328c72309f8e9bde39f85996b"
  },
  {
    "url": "assets/js/317.js",
    "revision": "ace98ba56aeb428ece2218bd523b70e4"
  },
  {
    "url": "assets/js/318.js",
    "revision": "91d84c034fbeef515290e337c43a54d5"
  },
  {
    "url": "assets/js/319.js",
    "revision": "d2285a18f6f3ed59a2d9dc25c9634046"
  },
  {
    "url": "assets/js/32.js",
    "revision": "a8d71332b8be04b2a757ba1a57c3ba43"
  },
  {
    "url": "assets/js/320.js",
    "revision": "dc0d345463ff92514f4b86e452682ae9"
  },
  {
    "url": "assets/js/321.js",
    "revision": "8aedd59a882290b966424bba8037677d"
  },
  {
    "url": "assets/js/322.js",
    "revision": "68c2af9c378054381f091d06602b4e17"
  },
  {
    "url": "assets/js/323.js",
    "revision": "fb56f5945212d1548ee21b059c9a87d1"
  },
  {
    "url": "assets/js/324.js",
    "revision": "f3df4cb4724f14c3af7db0ecb3b5841e"
  },
  {
    "url": "assets/js/325.js",
    "revision": "7af983427c2ca059e909d6a40e37a845"
  },
  {
    "url": "assets/js/326.js",
    "revision": "835b60a39056bafb83268cd946fc3a3d"
  },
  {
    "url": "assets/js/327.js",
    "revision": "9f353ee385fbb8cf58e522a00683a99e"
  },
  {
    "url": "assets/js/328.js",
    "revision": "cb0d016ab0d6ab9b625da8af097fd748"
  },
  {
    "url": "assets/js/329.js",
    "revision": "d360f914315bbb2ba29d46119ea3e8d2"
  },
  {
    "url": "assets/js/33.js",
    "revision": "a181e48850d60176a25d52721b2fdfff"
  },
  {
    "url": "assets/js/330.js",
    "revision": "36070675765d935b70ee767e235e3546"
  },
  {
    "url": "assets/js/331.js",
    "revision": "13eb603b63218ec29afdb41e977a817e"
  },
  {
    "url": "assets/js/332.js",
    "revision": "61eea91e1e594278ec00fa2dc8099280"
  },
  {
    "url": "assets/js/333.js",
    "revision": "6b2f6e48fce6f263f13ca0d1d58b1846"
  },
  {
    "url": "assets/js/334.js",
    "revision": "a769c8b93ba98f3bf6bc3776fd69ed88"
  },
  {
    "url": "assets/js/335.js",
    "revision": "e9b40dd6335ae3f73697b85a9e3dfa16"
  },
  {
    "url": "assets/js/336.js",
    "revision": "d83c5b092105d7aa77b557815f5c53fe"
  },
  {
    "url": "assets/js/337.js",
    "revision": "2c72a733edc74003125424cf2638b723"
  },
  {
    "url": "assets/js/338.js",
    "revision": "304ded555e4885d072a7010aa767fc74"
  },
  {
    "url": "assets/js/339.js",
    "revision": "6c756758897f1373ee1a59d24db5e6ba"
  },
  {
    "url": "assets/js/34.js",
    "revision": "37daa7c86f081a9d7434caa1554929ea"
  },
  {
    "url": "assets/js/340.js",
    "revision": "f5947f3c023e408eef44f550b4167daa"
  },
  {
    "url": "assets/js/341.js",
    "revision": "0b33631b90c5ff378513666701be5a1e"
  },
  {
    "url": "assets/js/342.js",
    "revision": "79cd8e4d8b9c8ea8c92f800015a60b27"
  },
  {
    "url": "assets/js/343.js",
    "revision": "60d082b1fb85ced2ec37658370914046"
  },
  {
    "url": "assets/js/344.js",
    "revision": "c149c7dafb1e68799d0f94f2260d732c"
  },
  {
    "url": "assets/js/345.js",
    "revision": "39a79385127303d7f68ce58cbdbd9e94"
  },
  {
    "url": "assets/js/346.js",
    "revision": "7819bbe345250f8d6ce0cc656671d8c4"
  },
  {
    "url": "assets/js/347.js",
    "revision": "305075e3b30282f7f9b5c4dda3358072"
  },
  {
    "url": "assets/js/348.js",
    "revision": "11d4c4b1bfd09474ae084bca865b83d6"
  },
  {
    "url": "assets/js/349.js",
    "revision": "5c95fcd42d49a852e9749fcafa13184f"
  },
  {
    "url": "assets/js/35.js",
    "revision": "182cf070bd0e0f688bb904f2701d6434"
  },
  {
    "url": "assets/js/350.js",
    "revision": "0dfe92b7b6e046b577e1ef0942052569"
  },
  {
    "url": "assets/js/351.js",
    "revision": "24ef33354ca5ea966a8d529dff177816"
  },
  {
    "url": "assets/js/352.js",
    "revision": "2e65a3a145fc6c20a84222cc8b671f46"
  },
  {
    "url": "assets/js/353.js",
    "revision": "90f1669dc6797865852196cddb0ecb1b"
  },
  {
    "url": "assets/js/354.js",
    "revision": "bdf1b559ac90ab265aaf92f990ab13cb"
  },
  {
    "url": "assets/js/355.js",
    "revision": "0432fa6d40c43bbaab309c4c60d95a74"
  },
  {
    "url": "assets/js/356.js",
    "revision": "39c815cb9c2a90a38325b0fa0789d6f3"
  },
  {
    "url": "assets/js/357.js",
    "revision": "4bb49075a57a73c9d60af0ed32c4e853"
  },
  {
    "url": "assets/js/358.js",
    "revision": "4ea135c8baa9d719cfe0d27150ffc929"
  },
  {
    "url": "assets/js/359.js",
    "revision": "1591be41a796d361e7c1c3a73f36079b"
  },
  {
    "url": "assets/js/36.js",
    "revision": "bddb961a56000055eedc6da5e3c063de"
  },
  {
    "url": "assets/js/360.js",
    "revision": "f930c6a58dc1082dda4e76199c18dfe3"
  },
  {
    "url": "assets/js/361.js",
    "revision": "affa5f6e767492d154fc07a99b1b4d72"
  },
  {
    "url": "assets/js/362.js",
    "revision": "dd8d42d70aa73b6a6d0eabe63143582a"
  },
  {
    "url": "assets/js/363.js",
    "revision": "43500e78bf7677d4b5cdd2fe4e5cc92c"
  },
  {
    "url": "assets/js/364.js",
    "revision": "b8b4383770ea36576a055ba2d63e4ca8"
  },
  {
    "url": "assets/js/365.js",
    "revision": "923e0a2ec285036d95d9219fe6e55af9"
  },
  {
    "url": "assets/js/366.js",
    "revision": "f88ba0b49cc5f6e66d10e458bb123ad1"
  },
  {
    "url": "assets/js/367.js",
    "revision": "02b82e713aafbc7239dae79e3b645a65"
  },
  {
    "url": "assets/js/368.js",
    "revision": "e97e640d6a9a090be483b4f98f9851f5"
  },
  {
    "url": "assets/js/369.js",
    "revision": "a213200f055ded9a2418bc2283af3997"
  },
  {
    "url": "assets/js/37.js",
    "revision": "66cf908fce353430f0aa3dda60f4ee62"
  },
  {
    "url": "assets/js/370.js",
    "revision": "180dbfc27b681ab9ec1140d79156bc25"
  },
  {
    "url": "assets/js/371.js",
    "revision": "5abf2d1f6d67dd4a7eaf0347edf5b3a0"
  },
  {
    "url": "assets/js/372.js",
    "revision": "6423a389e7eccc225fc2e2e6048a0c12"
  },
  {
    "url": "assets/js/373.js",
    "revision": "454d07f52b68c4bf3584a191f7e9a78f"
  },
  {
    "url": "assets/js/374.js",
    "revision": "27d704777c284486fcf532a7e4dfb1f5"
  },
  {
    "url": "assets/js/375.js",
    "revision": "ad983c874db2ab3c741b27746be98f52"
  },
  {
    "url": "assets/js/376.js",
    "revision": "5f4a1690f3531ad10721902a4cb71af4"
  },
  {
    "url": "assets/js/377.js",
    "revision": "01906dc8122a6a850b7dea470ab9da62"
  },
  {
    "url": "assets/js/378.js",
    "revision": "ccac9bc60d8a61c4f731777cf766fcb7"
  },
  {
    "url": "assets/js/379.js",
    "revision": "504deb9e86ea17dda58db07bcb82e0eb"
  },
  {
    "url": "assets/js/38.js",
    "revision": "ac6366cc5ca0c701c5a8a30ac5495054"
  },
  {
    "url": "assets/js/380.js",
    "revision": "fdd8c0e68aa1f423a7137af45fcb1374"
  },
  {
    "url": "assets/js/381.js",
    "revision": "87f60a26a4a3842128fa16582345c58a"
  },
  {
    "url": "assets/js/382.js",
    "revision": "57decd0bfbd045cb37b3b36ced55976b"
  },
  {
    "url": "assets/js/383.js",
    "revision": "a1bb5271c6417834ae04870febd64b7d"
  },
  {
    "url": "assets/js/384.js",
    "revision": "1c2c4661d0c597e99e1a803dc6b98726"
  },
  {
    "url": "assets/js/385.js",
    "revision": "82cf4bc090ba011adc8076f2b6c5af97"
  },
  {
    "url": "assets/js/386.js",
    "revision": "01858ed7b58dbea70d39a3c396a36dbd"
  },
  {
    "url": "assets/js/387.js",
    "revision": "eb3f6fddf134a9dab042b809807c9b10"
  },
  {
    "url": "assets/js/388.js",
    "revision": "710a61cccb8d9442c139f30282dff40f"
  },
  {
    "url": "assets/js/389.js",
    "revision": "d83d21e90c9c0a88adcc0f0fe4638414"
  },
  {
    "url": "assets/js/39.js",
    "revision": "486690c3ef292eefd4636853c86f948e"
  },
  {
    "url": "assets/js/390.js",
    "revision": "058df13b4b4c2bac46b0db35be768746"
  },
  {
    "url": "assets/js/391.js",
    "revision": "5ec89a43e9ae28203239206ced75bbc3"
  },
  {
    "url": "assets/js/392.js",
    "revision": "9e5e3a0b1097e3fdb118b5ced61bc289"
  },
  {
    "url": "assets/js/393.js",
    "revision": "6a3b07a40455e6737d5818af227148e0"
  },
  {
    "url": "assets/js/394.js",
    "revision": "38b73a1734afb9c1ef0a5c8ad68ea2df"
  },
  {
    "url": "assets/js/395.js",
    "revision": "c26aa946486f857fa4182c00237cdc48"
  },
  {
    "url": "assets/js/396.js",
    "revision": "107a67addfe68a8c1bbc8e67c0ed8402"
  },
  {
    "url": "assets/js/397.js",
    "revision": "3448f6bb54cf2690e9747dc0a2cb24a9"
  },
  {
    "url": "assets/js/398.js",
    "revision": "6d21bea15938ca84ba50347ee00bdbe2"
  },
  {
    "url": "assets/js/399.js",
    "revision": "d1a083a74ba876ad531846c769fec421"
  },
  {
    "url": "assets/js/4.js",
    "revision": "63962d1eb8b48691c09b6ece1b8aa7e5"
  },
  {
    "url": "assets/js/40.js",
    "revision": "9a6718f3431085b9316a614c27054d4c"
  },
  {
    "url": "assets/js/400.js",
    "revision": "b38b3943b241c209aa12bd1678389a4f"
  },
  {
    "url": "assets/js/401.js",
    "revision": "81f132c55480b75b8459a203946c9843"
  },
  {
    "url": "assets/js/402.js",
    "revision": "c4ff850d391934edb3164dfda2a67dc3"
  },
  {
    "url": "assets/js/403.js",
    "revision": "9f7a167eace76ad7af628101659d35ab"
  },
  {
    "url": "assets/js/404.js",
    "revision": "8f17fa3f37e7a2f6b3f921f08ace4b87"
  },
  {
    "url": "assets/js/405.js",
    "revision": "75908c6fa063515316d018a65986b0d4"
  },
  {
    "url": "assets/js/406.js",
    "revision": "bda7e198debc5ce71ab1e43dde0d8adf"
  },
  {
    "url": "assets/js/407.js",
    "revision": "423a5fbe6396f012be63c1016b989ced"
  },
  {
    "url": "assets/js/408.js",
    "revision": "86e5aad0b2d589aca09c6d4fd81ad25d"
  },
  {
    "url": "assets/js/409.js",
    "revision": "ae1f6b5e4cc60ffa1fd580020b6d8fb7"
  },
  {
    "url": "assets/js/41.js",
    "revision": "7951b828ca6cf8b5a721c68fb7aca425"
  },
  {
    "url": "assets/js/410.js",
    "revision": "d87a097766f9aed08205747aaf7663e7"
  },
  {
    "url": "assets/js/411.js",
    "revision": "7c33d253ef3d5f5da0ce6084768692bd"
  },
  {
    "url": "assets/js/412.js",
    "revision": "c37018a056068a8dc6c04cab7cbc2fe1"
  },
  {
    "url": "assets/js/413.js",
    "revision": "25d450f179ec588d4d4fcd2bb91a5d28"
  },
  {
    "url": "assets/js/414.js",
    "revision": "43f3ff31d2ea319756d86cede008738c"
  },
  {
    "url": "assets/js/415.js",
    "revision": "124a568f14aaa5749fb75698dac20f87"
  },
  {
    "url": "assets/js/416.js",
    "revision": "948850bdadecde852ed58e6a6f6152f0"
  },
  {
    "url": "assets/js/417.js",
    "revision": "0e628713ca5c0a54ec4de98c23b147eb"
  },
  {
    "url": "assets/js/418.js",
    "revision": "99cc3b28e6ea6b7a477a4c8f43f3d10f"
  },
  {
    "url": "assets/js/419.js",
    "revision": "f4bdbe469d0195431ea0563f25a05eff"
  },
  {
    "url": "assets/js/42.js",
    "revision": "d02440ffdd42f0a6f3c97b4e3f7504ca"
  },
  {
    "url": "assets/js/420.js",
    "revision": "fdf619ca9e65531b99f77acffceac105"
  },
  {
    "url": "assets/js/421.js",
    "revision": "71c8f647c76c7e395b06216e94be1d90"
  },
  {
    "url": "assets/js/422.js",
    "revision": "49274dd98b21df21d1499543993ae22d"
  },
  {
    "url": "assets/js/423.js",
    "revision": "e23039b1a6909ebeac1363362d894ca2"
  },
  {
    "url": "assets/js/424.js",
    "revision": "269c8a75b499f26f196c0f4e7d69666e"
  },
  {
    "url": "assets/js/425.js",
    "revision": "95913dfaa1b9ec83665c308dfaecb006"
  },
  {
    "url": "assets/js/426.js",
    "revision": "367b94445d9d4dac7bb05fbe46c2cd8a"
  },
  {
    "url": "assets/js/427.js",
    "revision": "719d539e0b96e43bb4d434cdd7b51c93"
  },
  {
    "url": "assets/js/428.js",
    "revision": "897a8462cdfb0622c3d91e23a8771dda"
  },
  {
    "url": "assets/js/429.js",
    "revision": "57462bc73bea98908303e5d8cd243a52"
  },
  {
    "url": "assets/js/43.js",
    "revision": "088c0b77cf58f30fc9fd45bfb424de7a"
  },
  {
    "url": "assets/js/430.js",
    "revision": "77a1678bac2a7236aa39a6e5f63ca864"
  },
  {
    "url": "assets/js/431.js",
    "revision": "5b942ae837293a68c4529da61130042e"
  },
  {
    "url": "assets/js/432.js",
    "revision": "f1ed658ad94395688202346d454453ff"
  },
  {
    "url": "assets/js/433.js",
    "revision": "3dc4874bb2a6110051c238bb769f21ef"
  },
  {
    "url": "assets/js/434.js",
    "revision": "47994bc1abcc17c4ee58425b4ca539ff"
  },
  {
    "url": "assets/js/435.js",
    "revision": "3cfb43249dddf12077926632f78d93f4"
  },
  {
    "url": "assets/js/436.js",
    "revision": "70ea9e6885dbde46f6185f9cce52ebd9"
  },
  {
    "url": "assets/js/437.js",
    "revision": "16abd69879424b1059f6e6aada4862e9"
  },
  {
    "url": "assets/js/438.js",
    "revision": "0a2d7b1868efc10556f84f21751ddcdd"
  },
  {
    "url": "assets/js/439.js",
    "revision": "b1ddd22e641ca38c7816a96001d92056"
  },
  {
    "url": "assets/js/44.js",
    "revision": "f79d92efce7697d17d4e35595ec66cbb"
  },
  {
    "url": "assets/js/440.js",
    "revision": "be7c00663f3343a14060d8016fb93be4"
  },
  {
    "url": "assets/js/441.js",
    "revision": "e9e616f27477ad558a73c5d5ce7dd394"
  },
  {
    "url": "assets/js/442.js",
    "revision": "5fc5bc814e921091e91ffc0e52272871"
  },
  {
    "url": "assets/js/443.js",
    "revision": "fe216b3b035771c429677892cec4dfaa"
  },
  {
    "url": "assets/js/444.js",
    "revision": "5b34e60d75f1f617b04ccaf6ae16359b"
  },
  {
    "url": "assets/js/445.js",
    "revision": "987eb388bf54847946d7cd4fe859b2ee"
  },
  {
    "url": "assets/js/446.js",
    "revision": "8831a21715ba3bf508cfdf052b180c2d"
  },
  {
    "url": "assets/js/447.js",
    "revision": "4655542f538236f7da61da34e28b3f2a"
  },
  {
    "url": "assets/js/448.js",
    "revision": "b78d83e7b3dbf6f92d610d6ae1ea06d6"
  },
  {
    "url": "assets/js/449.js",
    "revision": "7fb0f0a5c71f842e38e263e5fb74ddcb"
  },
  {
    "url": "assets/js/45.js",
    "revision": "d1720058f29003d4421ddfb2241aaa4d"
  },
  {
    "url": "assets/js/450.js",
    "revision": "d7a1bb2a240d3c2557008fcadb1df200"
  },
  {
    "url": "assets/js/451.js",
    "revision": "b808ffa5f9ad0a313928d3452c2334c3"
  },
  {
    "url": "assets/js/452.js",
    "revision": "4eb600c6fd29ebb92e17f87a390e2819"
  },
  {
    "url": "assets/js/453.js",
    "revision": "5d9284d9dfe55f77c09352f775cb34e7"
  },
  {
    "url": "assets/js/454.js",
    "revision": "c2e50367c56514b5f1e5237f5125d610"
  },
  {
    "url": "assets/js/455.js",
    "revision": "fe4cb3484b6e91e44584d5f15fa3b77f"
  },
  {
    "url": "assets/js/456.js",
    "revision": "1206d0ed3396dc85e18ed7b52b26ca14"
  },
  {
    "url": "assets/js/457.js",
    "revision": "351b885d9aacdd7f10a37313d3b39677"
  },
  {
    "url": "assets/js/458.js",
    "revision": "dbca2d3219bbe7ba241ffa3a11da5897"
  },
  {
    "url": "assets/js/459.js",
    "revision": "6e3fd76ab8bc98fa1d975ccde43c7625"
  },
  {
    "url": "assets/js/46.js",
    "revision": "87d9c8ae39b1a459079f6e7341da3e7a"
  },
  {
    "url": "assets/js/460.js",
    "revision": "cc3a7b819be84240a5b8ce19a1dd7cac"
  },
  {
    "url": "assets/js/461.js",
    "revision": "ae26ddc9df061fbeb4a24f3a7da45bc6"
  },
  {
    "url": "assets/js/462.js",
    "revision": "8e55dabbbb28bacba66e30db2c2eac1d"
  },
  {
    "url": "assets/js/463.js",
    "revision": "393363c330d1f8fac423b0efc56649ab"
  },
  {
    "url": "assets/js/464.js",
    "revision": "574d2c99ac42e725af445957aff4c08c"
  },
  {
    "url": "assets/js/465.js",
    "revision": "2c6919509c170cb31ee224b5dbf58f52"
  },
  {
    "url": "assets/js/466.js",
    "revision": "2e76beee099184cb26b4dcab2e304595"
  },
  {
    "url": "assets/js/467.js",
    "revision": "aad064eeb0365485df68fb9b6472e26f"
  },
  {
    "url": "assets/js/468.js",
    "revision": "fd7b4151e8068c62fb5cf31344af116c"
  },
  {
    "url": "assets/js/469.js",
    "revision": "18bcc8a09fca9817b4c3a5e55ee25560"
  },
  {
    "url": "assets/js/47.js",
    "revision": "1be6eb5acdaf28b1b38b89471e9b9f7f"
  },
  {
    "url": "assets/js/470.js",
    "revision": "9581965e24a802235d40c77ca4d7e121"
  },
  {
    "url": "assets/js/471.js",
    "revision": "726a810b7e359e74fc90384bddd72929"
  },
  {
    "url": "assets/js/472.js",
    "revision": "d653b0866c1c4ee665fe0cc58cda9cd4"
  },
  {
    "url": "assets/js/473.js",
    "revision": "2580853ca49c42d990005413cdb417ea"
  },
  {
    "url": "assets/js/474.js",
    "revision": "2a173b6e26b7684a8740fee27ef8d2a7"
  },
  {
    "url": "assets/js/475.js",
    "revision": "1d0950bdde2cd6e86bef97655dd7865b"
  },
  {
    "url": "assets/js/476.js",
    "revision": "22f423c85c2503369782d85499e6e3b5"
  },
  {
    "url": "assets/js/477.js",
    "revision": "fe43b8ef8a4c3db958e02d65b097b79f"
  },
  {
    "url": "assets/js/478.js",
    "revision": "963a59b5f0eab51f3d97628f534d18a5"
  },
  {
    "url": "assets/js/479.js",
    "revision": "efeb050107c0564bf7b2170bc9367a48"
  },
  {
    "url": "assets/js/48.js",
    "revision": "9e3f75a4f423776b14f51c3b3aa89632"
  },
  {
    "url": "assets/js/480.js",
    "revision": "8c306f8ab0a095a79bd6b41954937d2b"
  },
  {
    "url": "assets/js/481.js",
    "revision": "02862ccee52c2bbcea2ecf6fdc088078"
  },
  {
    "url": "assets/js/482.js",
    "revision": "6e8e3a30313b823834ba06b679e38a2a"
  },
  {
    "url": "assets/js/483.js",
    "revision": "df1c6f03ba45ba89b9ffbf1252bac915"
  },
  {
    "url": "assets/js/484.js",
    "revision": "3d7ad4a6f18a39ef850371650d74cb36"
  },
  {
    "url": "assets/js/485.js",
    "revision": "7af7e7a6e2c33d852d05948439155778"
  },
  {
    "url": "assets/js/486.js",
    "revision": "83c492c527b1747fbe76c29bc78774fb"
  },
  {
    "url": "assets/js/487.js",
    "revision": "71eef6d8ee9999e9b1032879e2bc57c7"
  },
  {
    "url": "assets/js/488.js",
    "revision": "7c4a806904de099d77d9d063904c5aaa"
  },
  {
    "url": "assets/js/489.js",
    "revision": "a40d143e1d8845dc4f12fddaa6de71f7"
  },
  {
    "url": "assets/js/49.js",
    "revision": "c956d4af10192b9fa1acf6592b8ed538"
  },
  {
    "url": "assets/js/490.js",
    "revision": "cf85b90190440ce6d6e6871bc26065e1"
  },
  {
    "url": "assets/js/491.js",
    "revision": "b5892fd720bfb31cb1ec9f2ebea481b7"
  },
  {
    "url": "assets/js/492.js",
    "revision": "9c1d859a35b0309871a60a8925bdc8f8"
  },
  {
    "url": "assets/js/493.js",
    "revision": "4b78ceccc536a5c5ecde13b75c835143"
  },
  {
    "url": "assets/js/494.js",
    "revision": "1cb0c0be48aa5155531a1744afb9fe35"
  },
  {
    "url": "assets/js/495.js",
    "revision": "2c4bad2feb40bda80bf6c99a4737e417"
  },
  {
    "url": "assets/js/496.js",
    "revision": "845d4e76839c98ac556ca794b282e2c6"
  },
  {
    "url": "assets/js/497.js",
    "revision": "b63d437bfcefd7fceced526063d99834"
  },
  {
    "url": "assets/js/498.js",
    "revision": "12aabc765e29096fd05c11984454c362"
  },
  {
    "url": "assets/js/499.js",
    "revision": "d741a2a7f4a3f5cd72029139b6e59a49"
  },
  {
    "url": "assets/js/50.js",
    "revision": "9c92e2620ae03ddff966c9fc2b6cbc58"
  },
  {
    "url": "assets/js/500.js",
    "revision": "9f1c5752fa265aab5a612de613eeaab5"
  },
  {
    "url": "assets/js/501.js",
    "revision": "776df7247dff953dde0a1095f059745e"
  },
  {
    "url": "assets/js/502.js",
    "revision": "d1695ad5049d4d38c35977ec21c52c96"
  },
  {
    "url": "assets/js/503.js",
    "revision": "71fa55055de033284160b243df111e23"
  },
  {
    "url": "assets/js/504.js",
    "revision": "824f717e3367237d9223d44370fe693f"
  },
  {
    "url": "assets/js/505.js",
    "revision": "e8bf6f77a93fdd9331141c4ade6049d3"
  },
  {
    "url": "assets/js/506.js",
    "revision": "f5d7aa2643f8743157da73d834f5c4f1"
  },
  {
    "url": "assets/js/507.js",
    "revision": "1f56a9a197c32acde1185319ca70ce22"
  },
  {
    "url": "assets/js/508.js",
    "revision": "8b1e6dd5bfd7f011efa1a67fb2c6a873"
  },
  {
    "url": "assets/js/509.js",
    "revision": "db8fde8e2b6eedca21c962149eb0b219"
  },
  {
    "url": "assets/js/51.js",
    "revision": "83584fb7c7f35f185144035a3e7c098a"
  },
  {
    "url": "assets/js/510.js",
    "revision": "8f05d335abffc26b7634e6e5de9780c6"
  },
  {
    "url": "assets/js/511.js",
    "revision": "6c75118ecae8e4234cb1501003275f5c"
  },
  {
    "url": "assets/js/512.js",
    "revision": "bd50e2617c5f57b007a2ad41ea3161b2"
  },
  {
    "url": "assets/js/513.js",
    "revision": "748febcf91c10db88f175fa3c66ef098"
  },
  {
    "url": "assets/js/514.js",
    "revision": "88fd9b59e4cdd872bb7acd2c4192cec6"
  },
  {
    "url": "assets/js/515.js",
    "revision": "b316053ab7ce353b02ee833f4ff08e1d"
  },
  {
    "url": "assets/js/516.js",
    "revision": "dfc918956524acbc93647f446dd503f3"
  },
  {
    "url": "assets/js/517.js",
    "revision": "01e14c772293ad2a27bb028c69b8bbae"
  },
  {
    "url": "assets/js/518.js",
    "revision": "a33e85ba2d2b405261b69a14331a7cdb"
  },
  {
    "url": "assets/js/519.js",
    "revision": "7fe1e99131474efc7953fb5c8937bae5"
  },
  {
    "url": "assets/js/52.js",
    "revision": "903565ea82d8992f61ed668470615829"
  },
  {
    "url": "assets/js/520.js",
    "revision": "c3881a335a8949cf88dbbbc4c2cb3b8b"
  },
  {
    "url": "assets/js/521.js",
    "revision": "7122e39acc5d1e6284b7a0c42a4c4147"
  },
  {
    "url": "assets/js/522.js",
    "revision": "7cb1b70691ccc68cc56f408c98d907f0"
  },
  {
    "url": "assets/js/523.js",
    "revision": "f78fed93cda74fcc5a71229e07332e1c"
  },
  {
    "url": "assets/js/524.js",
    "revision": "848d4e772a50368c86cb7c81fd6afe08"
  },
  {
    "url": "assets/js/525.js",
    "revision": "70fdec15bd54c74e296446cee19c6d5a"
  },
  {
    "url": "assets/js/526.js",
    "revision": "94197c60632c7026967cbfc764598ecf"
  },
  {
    "url": "assets/js/527.js",
    "revision": "5fa4c082c5646805802a536564839c6f"
  },
  {
    "url": "assets/js/528.js",
    "revision": "551285e0a6f7b84110cfb89c7a3c43cb"
  },
  {
    "url": "assets/js/529.js",
    "revision": "3afb80a1194251ad9544500da5073576"
  },
  {
    "url": "assets/js/53.js",
    "revision": "0b068700754539908539e8606b690f71"
  },
  {
    "url": "assets/js/530.js",
    "revision": "26bf1377fd8151b353659f15f7d0f1f4"
  },
  {
    "url": "assets/js/531.js",
    "revision": "42eed2fda21d108e1331c40f145dc24d"
  },
  {
    "url": "assets/js/532.js",
    "revision": "df48740b39055fa59a96a261e8a72002"
  },
  {
    "url": "assets/js/533.js",
    "revision": "0c8d86e725f3ca6b07ef56eaa2d9721d"
  },
  {
    "url": "assets/js/534.js",
    "revision": "13f41c37b86bdac4e80e74a8c949c26f"
  },
  {
    "url": "assets/js/535.js",
    "revision": "578d7986708a8688312cc434f7a72b71"
  },
  {
    "url": "assets/js/536.js",
    "revision": "4d538148c5ef363c8e5a7557f2f9f610"
  },
  {
    "url": "assets/js/537.js",
    "revision": "23c825143bc96cd22e4b05d2690f4206"
  },
  {
    "url": "assets/js/538.js",
    "revision": "a0d0f8dad6c86b55edf89da6a639920f"
  },
  {
    "url": "assets/js/539.js",
    "revision": "b1dd5010db7d068d0fa17c7b1897e9a5"
  },
  {
    "url": "assets/js/54.js",
    "revision": "2745f5cd2704db74a10aae9ea80de24b"
  },
  {
    "url": "assets/js/540.js",
    "revision": "3c64be229c36efd33e09f7d76556febc"
  },
  {
    "url": "assets/js/541.js",
    "revision": "e0dc6e04978c157ff802af3281bbb058"
  },
  {
    "url": "assets/js/542.js",
    "revision": "12705206263ffc23142bd017bb2b399a"
  },
  {
    "url": "assets/js/543.js",
    "revision": "b89658122f85d55ad07e0b5ab097b0d1"
  },
  {
    "url": "assets/js/544.js",
    "revision": "45d90b016d022618e263608c636ffd86"
  },
  {
    "url": "assets/js/545.js",
    "revision": "db336fc0ff201fc0d2c0ca4f06fbbc63"
  },
  {
    "url": "assets/js/546.js",
    "revision": "3335c7dbdf76ae323a168d70acd6046c"
  },
  {
    "url": "assets/js/547.js",
    "revision": "975e0088736ce8523a9d332303639d20"
  },
  {
    "url": "assets/js/548.js",
    "revision": "278274ccb1678ed9bbaa4fc7b402fd0e"
  },
  {
    "url": "assets/js/549.js",
    "revision": "78d5d9df347fa427ad814787f17945ef"
  },
  {
    "url": "assets/js/55.js",
    "revision": "ae1fc55fa519d81be23788c42e10e668"
  },
  {
    "url": "assets/js/550.js",
    "revision": "d02f711e99a472b4790a6f091cfaf967"
  },
  {
    "url": "assets/js/551.js",
    "revision": "0f8585e6780528e54a17b6fbb2564b92"
  },
  {
    "url": "assets/js/552.js",
    "revision": "2cce5e6ecc9a846235f59953f42ab32c"
  },
  {
    "url": "assets/js/553.js",
    "revision": "ac7fa786d19349b1a1b2e050f0653b3e"
  },
  {
    "url": "assets/js/554.js",
    "revision": "4f48bad651d113fc14226ab66aba9b2c"
  },
  {
    "url": "assets/js/555.js",
    "revision": "bcbc2c4c70c810b338085efa4525186d"
  },
  {
    "url": "assets/js/556.js",
    "revision": "ac9f51239987bc3466d4cb85ae3bdecb"
  },
  {
    "url": "assets/js/557.js",
    "revision": "3145306bfd59e37e88bed1770a1fa071"
  },
  {
    "url": "assets/js/558.js",
    "revision": "4d8a00e927f4192efa0652dca695e8bd"
  },
  {
    "url": "assets/js/559.js",
    "revision": "4a4aa2f11a2158ac301422db11ba6650"
  },
  {
    "url": "assets/js/56.js",
    "revision": "ddf8a71508b05ba43029a4524165b5de"
  },
  {
    "url": "assets/js/560.js",
    "revision": "59457ef3a97a422c84496249a703b218"
  },
  {
    "url": "assets/js/561.js",
    "revision": "fc4e828385c10456aa0fe399c966a080"
  },
  {
    "url": "assets/js/562.js",
    "revision": "1a559587191be766f431109151bbda9f"
  },
  {
    "url": "assets/js/563.js",
    "revision": "2b1986ae913adb33488acec6a2708279"
  },
  {
    "url": "assets/js/564.js",
    "revision": "63099770257f587c27911336441951b4"
  },
  {
    "url": "assets/js/565.js",
    "revision": "6950063c8da347f62370d2fc158a1c45"
  },
  {
    "url": "assets/js/566.js",
    "revision": "a4157631c69190a54578226279c3acfb"
  },
  {
    "url": "assets/js/567.js",
    "revision": "31304f548991fcc2be90885b5e7af237"
  },
  {
    "url": "assets/js/568.js",
    "revision": "6f04cfaf6728068bba1a07c2b682f958"
  },
  {
    "url": "assets/js/569.js",
    "revision": "820a869b41caf8050b559abe9a52e05a"
  },
  {
    "url": "assets/js/57.js",
    "revision": "001c7acb430b53357910e2f41318fdc2"
  },
  {
    "url": "assets/js/570.js",
    "revision": "1a20e59094f77e702220db1d8cd6d4dd"
  },
  {
    "url": "assets/js/571.js",
    "revision": "93c04a5228b831868f8ff2568ebf2861"
  },
  {
    "url": "assets/js/572.js",
    "revision": "08456be12b0856a775affb8788628080"
  },
  {
    "url": "assets/js/573.js",
    "revision": "192942d843946bfc381e76fb3d0b2152"
  },
  {
    "url": "assets/js/574.js",
    "revision": "4a92f63218b3d0ea80bf86daf4c4b37a"
  },
  {
    "url": "assets/js/575.js",
    "revision": "8d6eafb449de0dd9060e2a449b89372a"
  },
  {
    "url": "assets/js/576.js",
    "revision": "9db695fc1a13a36f18d50f89299c8478"
  },
  {
    "url": "assets/js/577.js",
    "revision": "2d891aceb35b10f678e208d97c8cd641"
  },
  {
    "url": "assets/js/578.js",
    "revision": "7957a9005f9a17fc635d3aedc06ce153"
  },
  {
    "url": "assets/js/579.js",
    "revision": "afe03a560bbbb48a5e7c71f30778f109"
  },
  {
    "url": "assets/js/58.js",
    "revision": "019931873941da6b30c1a9c2b6e2747c"
  },
  {
    "url": "assets/js/580.js",
    "revision": "e7c2f74512be9cf41fc2b49b29786458"
  },
  {
    "url": "assets/js/581.js",
    "revision": "7ecad22012a5d5b06265c333a52ba90a"
  },
  {
    "url": "assets/js/582.js",
    "revision": "a05c6f01d595e4668e13cd8426be2ed2"
  },
  {
    "url": "assets/js/583.js",
    "revision": "5011a9e4be1dbf75139d2da08f397662"
  },
  {
    "url": "assets/js/584.js",
    "revision": "50868a9b96002bb80605211d4c3a27cc"
  },
  {
    "url": "assets/js/585.js",
    "revision": "61f19437622a58d4c2d00d0a5f9130fd"
  },
  {
    "url": "assets/js/586.js",
    "revision": "f19941a84ec38be1ab644ffae658d105"
  },
  {
    "url": "assets/js/587.js",
    "revision": "0dd71da121cf550dd4e216866890d3d7"
  },
  {
    "url": "assets/js/588.js",
    "revision": "8515660a0dbafea199ce09ef493bc2bf"
  },
  {
    "url": "assets/js/589.js",
    "revision": "bd44ce59ad4ecbd5e25a3efba3389140"
  },
  {
    "url": "assets/js/59.js",
    "revision": "2a8c31b5a04097a05af6f6d6dce590e4"
  },
  {
    "url": "assets/js/590.js",
    "revision": "2d49c72ba068ffa57675900136f82434"
  },
  {
    "url": "assets/js/591.js",
    "revision": "a2fa1370d2758518616d432cbd730d8b"
  },
  {
    "url": "assets/js/592.js",
    "revision": "339292eb0d561cebb13138dea2c52004"
  },
  {
    "url": "assets/js/593.js",
    "revision": "8ed50307b75e3f9f4d8bb16c7c15b585"
  },
  {
    "url": "assets/js/594.js",
    "revision": "112805b727a349a94d1499b573b47fab"
  },
  {
    "url": "assets/js/595.js",
    "revision": "b9004d6a06e6f715d14a25825f5a5bfc"
  },
  {
    "url": "assets/js/596.js",
    "revision": "868de20e9050cbe7288e431a2c74e22c"
  },
  {
    "url": "assets/js/597.js",
    "revision": "aec242f40f259ef4fb15c8762aa79bdf"
  },
  {
    "url": "assets/js/598.js",
    "revision": "43691bb87bfc82e8f096c8448f929f92"
  },
  {
    "url": "assets/js/599.js",
    "revision": "885fbae98c3e356cb15301e9e0856475"
  },
  {
    "url": "assets/js/6.js",
    "revision": "8b4608bf08ad10b08dd0b6a7fa0a858f"
  },
  {
    "url": "assets/js/60.js",
    "revision": "7f00d01e58465b6a092e130eabc4c294"
  },
  {
    "url": "assets/js/600.js",
    "revision": "505b26408e0b7d703df03fff9a72619a"
  },
  {
    "url": "assets/js/61.js",
    "revision": "e8930eefef20fbef6f93b8416a31213e"
  },
  {
    "url": "assets/js/62.js",
    "revision": "1d60143ae8f4672d870cf69449f9481a"
  },
  {
    "url": "assets/js/63.js",
    "revision": "abf433515d6da856560e3736d5d9aa94"
  },
  {
    "url": "assets/js/64.js",
    "revision": "5371cc646eb83c476328332d1528c595"
  },
  {
    "url": "assets/js/65.js",
    "revision": "e3e15ea765ef4ca8e19873a67632b540"
  },
  {
    "url": "assets/js/66.js",
    "revision": "767b8c918fa545f20dea47bb59bbe152"
  },
  {
    "url": "assets/js/67.js",
    "revision": "6c8ca43af465cd49fd835242b271177a"
  },
  {
    "url": "assets/js/68.js",
    "revision": "22d66641ccd5a49cd2897e8612ad1468"
  },
  {
    "url": "assets/js/69.js",
    "revision": "0704c72ea02f3c56e7174cfd991bba38"
  },
  {
    "url": "assets/js/7.js",
    "revision": "1deda142033259ef3321591d74d44d42"
  },
  {
    "url": "assets/js/70.js",
    "revision": "d3355a8662fffa3aa359ec197c96f125"
  },
  {
    "url": "assets/js/71.js",
    "revision": "e9b8d69b3324c1fa698103512e3cc2e6"
  },
  {
    "url": "assets/js/72.js",
    "revision": "3b86ca79575031236d4e0dabf33924b4"
  },
  {
    "url": "assets/js/73.js",
    "revision": "362090cbfffda266d99a26d5bea4e6db"
  },
  {
    "url": "assets/js/74.js",
    "revision": "3ca3c0af2f269843977c1c4e614603ae"
  },
  {
    "url": "assets/js/75.js",
    "revision": "62233084f89bc6537950af40036f2232"
  },
  {
    "url": "assets/js/76.js",
    "revision": "31d25d1cab9d4be45e4ca680376ee978"
  },
  {
    "url": "assets/js/77.js",
    "revision": "3f98ce0ce8c2f678eb00f4b379fbae09"
  },
  {
    "url": "assets/js/78.js",
    "revision": "adbc0a260972ac620bc2fff56c7dd147"
  },
  {
    "url": "assets/js/79.js",
    "revision": "3f067f6556eb88bbabae314168905564"
  },
  {
    "url": "assets/js/8.js",
    "revision": "5f54e6061d7ea1565180756505f88df4"
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
    "revision": "2b4222459cdf630e8c9237a2ffe8ffaa"
  },
  {
    "url": "assets/js/83.js",
    "revision": "a97d92e4cdc1058d5eb93bacc6ca6aea"
  },
  {
    "url": "assets/js/84.js",
    "revision": "b73e4218ed2ea3e0c9a3a41917577bb3"
  },
  {
    "url": "assets/js/85.js",
    "revision": "135b73e580b817c479722c2a0d0ff25a"
  },
  {
    "url": "assets/js/86.js",
    "revision": "220c4db3804506a2b5e2ca6a3b088dfd"
  },
  {
    "url": "assets/js/87.js",
    "revision": "fbb2a0dfeff1df70ee123ea2c54b4cbc"
  },
  {
    "url": "assets/js/88.js",
    "revision": "bf081e0316b3789f0c8d281328c8c249"
  },
  {
    "url": "assets/js/89.js",
    "revision": "dc5fe1d57bd920b6459bdcb2eedbf301"
  },
  {
    "url": "assets/js/9.js",
    "revision": "211ee30612abd005999b512845c6de52"
  },
  {
    "url": "assets/js/90.js",
    "revision": "f14b592e53c4b897cafb76bebb117807"
  },
  {
    "url": "assets/js/91.js",
    "revision": "26281ba5cedb3d9305c68a447041f20a"
  },
  {
    "url": "assets/js/92.js",
    "revision": "956f3de74113178edad0cb5ec6397860"
  },
  {
    "url": "assets/js/93.js",
    "revision": "3672495a1aa478f4212e9980c21dcca8"
  },
  {
    "url": "assets/js/94.js",
    "revision": "3c8d539002628658d99013a9b7ebff18"
  },
  {
    "url": "assets/js/95.js",
    "revision": "557fea534c80d0bd0e6cf26feca3e1fd"
  },
  {
    "url": "assets/js/96.js",
    "revision": "72ad4a47d6ce050992c0b364b94ca1ba"
  },
  {
    "url": "assets/js/97.js",
    "revision": "a5fc4fad656974b8c1a7344f5590af93"
  },
  {
    "url": "assets/js/98.js",
    "revision": "ee14e1838862944212803fae820e6e75"
  },
  {
    "url": "assets/js/99.js",
    "revision": "d89b8462d02e56ea313d5659c6d1f926"
  },
  {
    "url": "assets/js/app.js",
    "revision": "246e0ca2fd668fd38b63d048f0fda5c7"
  },
  {
    "url": "assets/js/styles.js",
    "revision": "22f22b49cc901aa95826401f7ce0930c"
  },
  {
    "url": "blog/category/index.html",
    "revision": "5b0b9a323f62c68ad2fa8f9a316650e4"
  },
  {
    "url": "blog/code/artists/index.html",
    "revision": "b169ae954c2c889529d7e48cbedb7395"
  },
  {
    "url": "blog/code/asa.sbh.nz/index.html",
    "revision": "85da095c21a9269338bafc4bbfc4c879"
  },
  {
    "url": "blog/code/decrypt/index.html",
    "revision": "88fa65a2e809dac169c56f5593bcaef5"
  },
  {
    "url": "blog/code/divider/index.html",
    "revision": "7608834c733a000e38390df6cb58293d"
  },
  {
    "url": "blog/code/first/index.html",
    "revision": "54da40a9324fb52fa6dcd6ba39de0b19"
  },
  {
    "url": "blog/code/fishbarrel/index.html",
    "revision": "d5cd6d4b9e5a2b8bc0a7ae5415e08b41"
  },
  {
    "url": "blog/code/indent/index.html",
    "revision": "160f46bc446624ea98ce94ad644d2374"
  },
  {
    "url": "blog/code/index.html",
    "revision": "bc4dff43f558fad956693560b7c95a43"
  },
  {
    "url": "blog/code/ingoa.nz/index.html",
    "revision": "fe5d2c9f2b5d5e21da6287cb0b021ac1"
  },
  {
    "url": "blog/code/nzondemand/index.html",
    "revision": "f51ba8cead52e27c7114f03e3006a9e3"
  },
  {
    "url": "blog/code/picard/index.html",
    "revision": "fa584da608a16ce51ac3366f03bc7049"
  },
  {
    "url": "blog/code/qr/index.html",
    "revision": "8ee207fc92a4341fdce2cfbc8e5f419b"
  },
  {
    "url": "blog/code/readable/index.html",
    "revision": "1f568397a95a3299cddc8c47beea73ce"
  },
  {
    "url": "blog/code/tone/index.html",
    "revision": "9155887a1b71f9d2bc39a07602e82cc7"
  },
  {
    "url": "blog/code/war/index.html",
    "revision": "75d4a86bd1accebd586621ff0c82f87a"
  },
  {
    "url": "blog/code/website/index.html",
    "revision": "7eaf60dc1c4c6774f59771ce5f39016f"
  },
  {
    "url": "blog/code/website/route/index.html",
    "revision": "21c40c8c1c607436c776b984f907d47f"
  },
  {
    "url": "blog/code/website/site/index.html",
    "revision": "981a8dab8bc65cf8d35a07d429824fe2"
  },
  {
    "url": "blog/code/xmltv.co.nz/index.html",
    "revision": "c01d18d46b5bc1aececa6fb7dfbadcb0"
  },
  {
    "url": "blog/howto/index.html",
    "revision": "d7d1848e983cfdcb9ab3f1fcb86dd894"
  },
  {
    "url": "blog/howto/intel865/index.html",
    "revision": "1ee2a15f2839f8fee99b56990fbc6055"
  },
  {
    "url": "blog/howto/ios/index.html",
    "revision": "8b2b0da297bc4268079c7de8aa602860"
  },
  {
    "url": "blog/howto/nexentastor/index.html",
    "revision": "d10e1605106f7590d079dde865438636"
  },
  {
    "url": "blog/howto/pcloadletter/index.html",
    "revision": "d7d8abdfafc639fee214e514fe980790"
  },
  {
    "url": "blog/howto/raid5/index.html",
    "revision": "68cdab82eb0e5d4dc879e6e35ae940f6"
  },
  {
    "url": "blog/index.html",
    "revision": "463d8591ed011a212cd73b55bdf1a7ac"
  },
  {
    "url": "blog/life/anotheryear/index.html",
    "revision": "12ac1abd4bb99c73f7f9ca0752903695"
  },
  {
    "url": "blog/life/birthday/index.html",
    "revision": "e888e8358ff846f4ff52536bc3eefb11"
  },
  {
    "url": "blog/life/blasphemy/index.html",
    "revision": "beaad1e8defd3fb150b91878db6eb107"
  },
  {
    "url": "blog/life/blogger/index.html",
    "revision": "578cc3c898e42d72684c178e82e8c00e"
  },
  {
    "url": "blog/life/blurry/index.html",
    "revision": "03d8e701128408f53a428ee7b1e004d0"
  },
  {
    "url": "blog/life/busyday/index.html",
    "revision": "51c1b9417b0f71c61f5dd69dbb00c741"
  },
  {
    "url": "blog/life/domain/index.html",
    "revision": "ac4b2ec503a1de99c21034991a578d53"
  },
  {
    "url": "blog/life/exams/index.html",
    "revision": "6026cb0771c95a32fdbae19477289a2c"
  },
  {
    "url": "blog/life/food/index.html",
    "revision": "c9ac5f017d8bd2412d713df401b0e01d"
  },
  {
    "url": "blog/life/glenview/index.html",
    "revision": "e7382dfbee6a37f274d3a25967cade3c"
  },
  {
    "url": "blog/life/headlines/index.html",
    "revision": "eb9decc9b689337307c39d2688e958dc"
  },
  {
    "url": "blog/life/index.html",
    "revision": "bfe11a9538bfa653b317afb4f3ff56a8"
  },
  {
    "url": "blog/life/jws/index.html",
    "revision": "5fafd516520269b867ead64039bdf1fd"
  },
  {
    "url": "blog/life/keyboard/index.html",
    "revision": "edbf251a73210fe9aa0c48937c3cc57f"
  },
  {
    "url": "blog/life/lpi201/index.html",
    "revision": "337aa92c82cef0e4507debe54f94db24"
  },
  {
    "url": "blog/life/mashup/index.html",
    "revision": "d15c616c74993d77dd24005cb4f60e1d"
  },
  {
    "url": "blog/life/motorweb/index.html",
    "revision": "e2eb8cfd323e0515bee9b6af7e308679"
  },
  {
    "url": "blog/life/nxe/index.html",
    "revision": "d9d53ac36fc078580aef645f52cb23f7"
  },
  {
    "url": "blog/life/plates/index.html",
    "revision": "8698183b86f4a681d9036c0bb61195d0"
  },
  {
    "url": "blog/life/queenstown/index.html",
    "revision": "d97ac6b6b23c66de1fe8d9be19006df3"
  },
  {
    "url": "blog/life/racism/index.html",
    "revision": "4b357fba8294bad17887aa778823425e"
  },
  {
    "url": "blog/life/roads/index.html",
    "revision": "55424cc47c815d21188faeec61af3c4d"
  },
  {
    "url": "blog/life/roots/index.html",
    "revision": "b0e7a7d983abeee2edc8156d213e25a2"
  },
  {
    "url": "blog/life/scare/index.html",
    "revision": "0723524dad9da1659f153bc13c7f2fcf"
  },
  {
    "url": "blog/life/scary/index.html",
    "revision": "5f653a7cfc3b4a2b24feaa4e7c5c4c1d"
  },
  {
    "url": "blog/life/seti/index.html",
    "revision": "d5f307de3093729ac755f9e8609553e8"
  },
  {
    "url": "blog/life/skeptical/index.html",
    "revision": "913e0b252bea8a3e1337b9007fda8f3b"
  },
  {
    "url": "blog/life/skepticzone/index.html",
    "revision": "810ed4732797226a254e9424c308b660"
  },
  {
    "url": "blog/life/spam/index.html",
    "revision": "10167cc13038d6889c89d882780c0b32"
  },
  {
    "url": "blog/life/trademe/index.html",
    "revision": "f6e3750b577b147a1c1c27f3e84bbe18"
  },
  {
    "url": "blog/life/unforeseen/index.html",
    "revision": "8d266b52648f5755ade1bdc4d1eed4a4"
  },
  {
    "url": "blog/life/wobbly/index.html",
    "revision": "d62cf49f5ceeb6fb5d6ca474c8e762e8"
  },
  {
    "url": "blog/projects/ahs/index.html",
    "revision": "dfd3a8f8dbc84455eb3982a9cb21345f"
  },
  {
    "url": "blog/projects/airbag/index.html",
    "revision": "9cee079d52b7941a6d446846b88d5d8d"
  },
  {
    "url": "blog/projects/ambilight/index.html",
    "revision": "d7d3bfc254eba932d6facbd7b3145920"
  },
  {
    "url": "blog/projects/automation/index.html",
    "revision": "ad055cd13e890376757c35e65b99639a"
  },
  {
    "url": "blog/projects/eyes/index.html",
    "revision": "21aa17c80905d1546f31eb0114480acd"
  },
  {
    "url": "blog/projects/glitch/index.html",
    "revision": "7a0c08cdb35ce48a641b3c5cc929eab1"
  },
  {
    "url": "blog/projects/hotel/index.html",
    "revision": "7f1fbae56536d99492c91819682b9064"
  },
  {
    "url": "blog/projects/index.html",
    "revision": "c752bc658adac65db7469e76e23145e9"
  },
  {
    "url": "blog/projects/it100/index.html",
    "revision": "ecd2e08540a2d74d32f6abf2ca95452d"
  },
  {
    "url": "blog/projects/microscope/index.html",
    "revision": "ba2aa2865b5cc423cb9bb2fcf9eb16a1"
  },
  {
    "url": "blog/projects/mirror/index.html",
    "revision": "a69b89d3337c5bb338ec09d88b5fdcd5"
  },
  {
    "url": "blog/projects/picture/index.html",
    "revision": "919cbdb1f9600c75ba70fe682a595839"
  },
  {
    "url": "blog/projects/pizza/index.html",
    "revision": "786681766519970842ce248060bd176f"
  },
  {
    "url": "blog/projects/podcast/index.html",
    "revision": "e51a300f6ab2355060c40a3f81e9a230"
  },
  {
    "url": "blog/projects/reflow/index.html",
    "revision": "4047fd48d37006738c4c3b48b7df92fc"
  },
  {
    "url": "blog/projects/sandbox/index.html",
    "revision": "9fcd844517072a461577df167e8d26d9"
  },
  {
    "url": "blog/projects/screens/index.html",
    "revision": "2b802a43e3c8559d830375a94303ce13"
  },
  {
    "url": "blog/projects/sky/index.html",
    "revision": "b011f776d0e22575dae19914d4055aa7"
  },
  {
    "url": "blog/projects/starwars/index.html",
    "revision": "2d67dff64f1ff53451ed00cc8496d827"
  },
  {
    "url": "blog/projects/xbox/index.html",
    "revision": "ee39744b0a47fbe636cd1f57b5ac80a0"
  },
  {
    "url": "blog/random/addresses/index.html",
    "revision": "5c991fa63f0814c82d770e0d8208fdfb"
  },
  {
    "url": "blog/random/alphabet/index.html",
    "revision": "3986037c8f05817f43f4174e8ac02668"
  },
  {
    "url": "blog/random/astrology/index.html",
    "revision": "00e54ef12bba8ed97712b028faae63c4"
  },
  {
    "url": "blog/random/chicken/index.html",
    "revision": "000cdced3a473de4b8d0f8aab3301e35"
  },
  {
    "url": "blog/random/dns/index.html",
    "revision": "b394b14e79c0c555f1d11cf03be3721b"
  },
  {
    "url": "blog/random/evp/index.html",
    "revision": "775b9cea8c225ab9bbaf66e09301c3d8"
  },
  {
    "url": "blog/random/flip/index.html",
    "revision": "f078a037c1bc070566c2316bc0e2dc70"
  },
  {
    "url": "blog/random/honeychurch/index.html",
    "revision": "9e642f40838f3cbcdeb94dd30393b3d6"
  },
  {
    "url": "blog/random/index.html",
    "revision": "225e76277379d4ce3ae41150e853c592"
  },
  {
    "url": "blog/random/lottery/index.html",
    "revision": "fa33f532f9b84cf493c6d156f5b83fbe"
  },
  {
    "url": "blog/random/music/index.html",
    "revision": "f36d1681a3bab8b6b2c1966942d307a5"
  },
  {
    "url": "blog/random/octal/index.html",
    "revision": "703f041562bfa2479f8699df812a8599"
  },
  {
    "url": "blog/random/os/index.html",
    "revision": "c89f77d9bcbd71167d8651244c50ad35"
  },
  {
    "url": "blog/random/propellers/index.html",
    "revision": "a894ad041f94748e1b884eda59c12814"
  },
  {
    "url": "blog/random/robux/index.html",
    "revision": "e158917e2d5e56c8a531c9793db5f515"
  },
  {
    "url": "blog/random/super/index.html",
    "revision": "082c83e20ee0c8a975c683ad05464d5b"
  },
  {
    "url": "blog/random/times/index.html",
    "revision": "1eaf928f1d655132fa9ecc7a1299c904"
  },
  {
    "url": "blog/random/travel/index.html",
    "revision": "ccf78497ee99bc0553bd482b3fe7f890"
  },
  {
    "url": "blog/random/wilhelm/index.html",
    "revision": "e51018065c701f05dbaf94e829954feb"
  },
  {
    "url": "blog/random/year/index.html",
    "revision": "28c28000302d8eaf2d27c15e43f40b4e"
  },
  {
    "url": "blog/skepticism/2015/08/16/asa/index.html",
    "revision": "5b2d4ee34e9881f7dd35b4e62f239a6c"
  },
  {
    "url": "blog/skepticism/2015/08/16/awards/index.html",
    "revision": "bd2527e360ba3e01c5cf7582679b0914"
  },
  {
    "url": "blog/skepticism/2015/08/16/bravo/index.html",
    "revision": "0d1043fef109b5bdf0735260648c4be5"
  },
  {
    "url": "blog/skepticism/2015/08/16/index.html",
    "revision": "d0148b05f1bd4181d26b4b5fad04b198"
  },
  {
    "url": "blog/skepticism/2015/08/16/jim/index.html",
    "revision": "b6bc26411dc936d47e356a7ef3b2b96f"
  },
  {
    "url": "blog/skepticism/2015/08/16/naholo/index.html",
    "revision": "5bb5011e4bca482b859eab00ee48c2c5"
  },
  {
    "url": "blog/skepticism/2015/08/16/resene/index.html",
    "revision": "565d276cf3cf82b80f7d5b5a503888d4"
  },
  {
    "url": "blog/skepticism/2015/08/index.html",
    "revision": "260617119f5f79480568b024a385986e"
  },
  {
    "url": "blog/skepticism/2015/09/20/gop/index.html",
    "revision": "7e37c0a86e827a967f399204f4400a80"
  },
  {
    "url": "blog/skepticism/2015/09/20/ignobel/index.html",
    "revision": "ad2bd67a2583b3871fcd2a6fe4faa5b2"
  },
  {
    "url": "blog/skepticism/2015/09/20/index.html",
    "revision": "d447d21a231b39fcdd135e9ccd1b6123"
  },
  {
    "url": "blog/skepticism/2015/09/20/supplements/index.html",
    "revision": "8ae96e9bd4266615176e95b5ff08c533"
  },
  {
    "url": "blog/skepticism/2015/09/27/ayahuasca/index.html",
    "revision": "53487ba294dfe6513695687b5d2d8fd4"
  },
  {
    "url": "blog/skepticism/2015/09/27/drought/index.html",
    "revision": "41dd0d4c8f040743b70bb35594f2ae07"
  },
  {
    "url": "blog/skepticism/2015/09/27/index.html",
    "revision": "4d99930607cded8335429c774070ccdc"
  },
  {
    "url": "blog/skepticism/2015/09/27/lama/index.html",
    "revision": "32c8e111a3722a60ae96e50db67b3852"
  },
  {
    "url": "blog/skepticism/2015/09/27/moon/index.html",
    "revision": "e5bd0a87415cf8a6c499f9f71cbd35c5"
  },
  {
    "url": "blog/skepticism/2015/09/27/scan/index.html",
    "revision": "f079dfdc831dd09378681b5e371c968c"
  },
  {
    "url": "blog/skepticism/2015/09/index.html",
    "revision": "83cb17121b9049b2aea0a7d3a40bd174"
  },
  {
    "url": "blog/skepticism/2015/10/04/ghost/index.html",
    "revision": "f0a77b98253f6f98a7273d51c8c1e0d5"
  },
  {
    "url": "blog/skepticism/2015/10/04/haka/index.html",
    "revision": "4c702058524346acb176b2d19699e192"
  },
  {
    "url": "blog/skepticism/2015/10/04/index.html",
    "revision": "1347ad62043ab96a69be7e215a4845ed"
  },
  {
    "url": "blog/skepticism/2015/10/04/mars/index.html",
    "revision": "390fd4dcf079525463cfc3270c594b9e"
  },
  {
    "url": "blog/skepticism/2015/10/04/pharmacy/index.html",
    "revision": "52e4c924b28eaee95cd43798796d485f"
  },
  {
    "url": "blog/skepticism/2015/10/04/prostate/index.html",
    "revision": "005e6fdedd2e1990ccfe7e57d34b3093"
  },
  {
    "url": "blog/skepticism/2015/10/11/armageddon/index.html",
    "revision": "b06c862c14a36176dd5861eb7e1f5de6"
  },
  {
    "url": "blog/skepticism/2015/10/11/climate/index.html",
    "revision": "3978c5a67cbe1bb361e95ebbaabb3813"
  },
  {
    "url": "blog/skepticism/2015/10/11/ghost/index.html",
    "revision": "cf8523fef325d43a49a144f35b7b2d19"
  },
  {
    "url": "blog/skepticism/2015/10/11/index.html",
    "revision": "95a0ffeff63b97d709f3982f8b8047ff"
  },
  {
    "url": "blog/skepticism/2015/10/11/magnesleep/index.html",
    "revision": "a02a2f6761c512f2b948162b8fdf98d7"
  },
  {
    "url": "blog/skepticism/2015/10/11/nhs/index.html",
    "revision": "f41ed9cdfebe18627e87ffc27c62e839"
  },
  {
    "url": "blog/skepticism/2015/10/11/prophet/index.html",
    "revision": "9c9c9079f7ed6da663386978979e8977"
  },
  {
    "url": "blog/skepticism/2015/10/index.html",
    "revision": "9cfc7d497b7e932ea657ca71ecf40990"
  },
  {
    "url": "blog/skepticism/2015/11/15/end/index.html",
    "revision": "4f8734cefbf35f48cd4c450a366bd28e"
  },
  {
    "url": "blog/skepticism/2015/11/15/index.html",
    "revision": "785fb6cb19c7bebcd80ac23196e91ebf"
  },
  {
    "url": "blog/skepticism/2015/11/index.html",
    "revision": "96d857e97f15a7a5c750ee7cd20846ef"
  },
  {
    "url": "blog/skepticism/2015/12/13/astrology/index.html",
    "revision": "8452f67716d8aad68851a8a0fd0a9ed2"
  },
  {
    "url": "blog/skepticism/2015/12/13/cancer/index.html",
    "revision": "eeb77f1213a0ac8939225a0db760eeca"
  },
  {
    "url": "blog/skepticism/2015/12/13/chickenpox/index.html",
    "revision": "8d7ed432893b3ceedceee8b10d9ff2ab"
  },
  {
    "url": "blog/skepticism/2015/12/13/index.html",
    "revision": "bb96238c9fce3b423d269a34b0baf9d2"
  },
  {
    "url": "blog/skepticism/2015/12/13/osteopath/index.html",
    "revision": "b02e59cccc465acf338276419f510b77"
  },
  {
    "url": "blog/skepticism/2015/12/13/priest/index.html",
    "revision": "bea516775a009f3639d4627203260c69"
  },
  {
    "url": "blog/skepticism/2015/12/13/psychic/index.html",
    "revision": "eec7472f71f1808dbdfa7f8e3af0d8b2"
  },
  {
    "url": "blog/skepticism/2015/12/13/vaccines/index.html",
    "revision": "6d1815d572105fa78cd4694fcdcc37db"
  },
  {
    "url": "blog/skepticism/2015/12/index.html",
    "revision": "aa062cc5b471c731e2a1e17f86c4af8c"
  },
  {
    "url": "blog/skepticism/2015/index.html",
    "revision": "5ec0fe959050ad5b15710384ec60a5ee"
  },
  {
    "url": "blog/skepticism/2016/02/07/antioxidant/index.html",
    "revision": "e0b47065c9bc7dfb88c756efb4970261"
  },
  {
    "url": "blog/skepticism/2016/02/07/index.html",
    "revision": "b48d81eb48acc98a9bf3b195286a2be2"
  },
  {
    "url": "blog/skepticism/2016/02/07/kfc/index.html",
    "revision": "3a6d763b17ae35196a4f66be6285b5c5"
  },
  {
    "url": "blog/skepticism/2016/02/07/ph/index.html",
    "revision": "fc72c7e03e5b41f6e1e19ce8ef897763"
  },
  {
    "url": "blog/skepticism/2016/02/07/sandy/index.html",
    "revision": "20ccfe5784469d8309dafb073aa09307"
  },
  {
    "url": "blog/skepticism/2016/02/07/sarfati/index.html",
    "revision": "100b8a138fcd9607e7cc1920e36a05bd"
  },
  {
    "url": "blog/skepticism/2016/02/07/trump/index.html",
    "revision": "4b2c33c22088a984a165dcb7ed0c5a8d"
  },
  {
    "url": "blog/skepticism/2016/02/14/coins/index.html",
    "revision": "8c60b64ba2d72c898c953cd4f01d7c47"
  },
  {
    "url": "blog/skepticism/2016/02/14/fast/index.html",
    "revision": "2d9c4f52bcb0c756eddace54ba253482"
  },
  {
    "url": "blog/skepticism/2016/02/14/fluoride/index.html",
    "revision": "2e4d5c5491efb6eec886ab5e37816afb"
  },
  {
    "url": "blog/skepticism/2016/02/14/icke/index.html",
    "revision": "c6e68e0694106d27695c2e5d34ff4a68"
  },
  {
    "url": "blog/skepticism/2016/02/14/index.html",
    "revision": "1f51329ea2aefe83a0b228580e5b41e8"
  },
  {
    "url": "blog/skepticism/2016/02/14/yeti/index.html",
    "revision": "5337dbac9861d8ac5a3d24eb8da6c4a9"
  },
  {
    "url": "blog/skepticism/2016/02/21/homeopathy/index.html",
    "revision": "6949f0b2c4aea89fadc644a358c85e7d"
  },
  {
    "url": "blog/skepticism/2016/02/21/index.html",
    "revision": "db3c1822ebd02ee21d6626a75da45ce0"
  },
  {
    "url": "blog/skepticism/2016/02/21/monster/index.html",
    "revision": "4b491d140785094880f66d816b9a916e"
  },
  {
    "url": "blog/skepticism/2016/02/21/scalia/index.html",
    "revision": "98cdf96f70b6460626abf27a3ede240b"
  },
  {
    "url": "blog/skepticism/2016/02/21/shane/index.html",
    "revision": "7a0659154434e35eec56d97e20e07512"
  },
  {
    "url": "blog/skepticism/2016/02/21/texas/index.html",
    "revision": "1e07d0188f41bea896d92722003e09b1"
  },
  {
    "url": "blog/skepticism/2016/02/28/acupuncture/index.html",
    "revision": "aa81cf9f389390aeceb3fb6ef995b8ed"
  },
  {
    "url": "blog/skepticism/2016/02/28/fsm/index.html",
    "revision": "02841912c3e0fea9fa1617b8bf58b2ac"
  },
  {
    "url": "blog/skepticism/2016/02/28/index.html",
    "revision": "66113613d6bf3f80cca5c4af4906131d"
  },
  {
    "url": "blog/skepticism/2016/02/28/iv/index.html",
    "revision": "51df8de900b3a629faf0f5342201b6a8"
  },
  {
    "url": "blog/skepticism/2016/02/28/natural/index.html",
    "revision": "309470dcbd0ba73d557662564c6ca65c"
  },
  {
    "url": "blog/skepticism/2016/02/28/talc/index.html",
    "revision": "59398b535fa4807e15b6b1f3e628fa35"
  },
  {
    "url": "blog/skepticism/2016/02/index.html",
    "revision": "f79ecaa1e2de7bed2073e962b2c49440"
  },
  {
    "url": "blog/skepticism/2016/03/13/herbs/index.html",
    "revision": "e50e6a18bc9968061aa548b85ca8488d"
  },
  {
    "url": "blog/skepticism/2016/03/13/index.html",
    "revision": "d7baf1e3f9b4e8c8ffcbae07140e26a3"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandala/index.html",
    "revision": "9f269ee31755e207cb731f2068f4f9c4"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandela/index.html",
    "revision": "502e552a6a595299563dd9a70ae48de0"
  },
  {
    "url": "blog/skepticism/2016/03/13/spray/index.html",
    "revision": "4a8db1f295f4c32d5d121998e64fa5c0"
  },
  {
    "url": "blog/skepticism/2016/03/index.html",
    "revision": "ade6d71e0e41bd5338fc942a6c825051"
  },
  {
    "url": "blog/skepticism/2016/04/17/charity/index.html",
    "revision": "4437e0b4a9098f7a507d289574344ecf"
  },
  {
    "url": "blog/skepticism/2016/04/17/chiro/index.html",
    "revision": "e42e64ac9709c13dd1a64b90e6f9a6de"
  },
  {
    "url": "blog/skepticism/2016/04/17/fluoride/index.html",
    "revision": "f00feae2a099fa614eb39786141e37d6"
  },
  {
    "url": "blog/skepticism/2016/04/17/index.html",
    "revision": "5c8f2eb6c0e3c7e0749981125e8d1889"
  },
  {
    "url": "blog/skepticism/2016/04/17/lotto/index.html",
    "revision": "9a032a1a85ba2e6c333d5756864a4c34"
  },
  {
    "url": "blog/skepticism/2016/04/17/mind/index.html",
    "revision": "4a3428ef00f8bdebff15e3bdeadb2042"
  },
  {
    "url": "blog/skepticism/2016/04/17/whooping/index.html",
    "revision": "ec025f457d5781bb80ec52a541a4af3d"
  },
  {
    "url": "blog/skepticism/2016/04/index.html",
    "revision": "057f6347393ba436965f5918029e755a"
  },
  {
    "url": "blog/skepticism/2016/06/05/1080/index.html",
    "revision": "e8133905b5eaacca4a43bb93de1cffd0"
  },
  {
    "url": "blog/skepticism/2016/06/05/acupuncture/index.html",
    "revision": "a13eb97a23a3ef0307c15e09d7e7117b"
  },
  {
    "url": "blog/skepticism/2016/06/05/family/index.html",
    "revision": "2a634a791f9b3b498f642a2c2c417c2f"
  },
  {
    "url": "blog/skepticism/2016/06/05/index.html",
    "revision": "412b98a9cebd20955db3cc6228c67971"
  },
  {
    "url": "blog/skepticism/2016/06/05/limbaugh/index.html",
    "revision": "51585068d1db7f222aee26e8d7b67272"
  },
  {
    "url": "blog/skepticism/2016/06/12/bobby/index.html",
    "revision": "42e806d9d9b8cc7738bf2d80837ff0a6"
  },
  {
    "url": "blog/skepticism/2016/06/12/climate/index.html",
    "revision": "584bd3ce4ec9048aea4d151c5225b182"
  },
  {
    "url": "blog/skepticism/2016/06/12/index.html",
    "revision": "1bf4ad1946066b432d67e624fa8cf227"
  },
  {
    "url": "blog/skepticism/2016/06/12/pugh/index.html",
    "revision": "5ab2129e17a2b4672a89616077f9e598"
  },
  {
    "url": "blog/skepticism/2016/06/12/savage/index.html",
    "revision": "8ed2eac2f6bc8b321f007bd2fe19f085"
  },
  {
    "url": "blog/skepticism/2016/06/12/sawdust/index.html",
    "revision": "27af73c8a207f00e8e5afae8dcccaab1"
  },
  {
    "url": "blog/skepticism/2016/06/19/beauty/index.html",
    "revision": "78b2b8b6e3b4c876e777e62ffe9a37b8"
  },
  {
    "url": "blog/skepticism/2016/06/19/bilderberg/index.html",
    "revision": "2b4cda5839c528cc2ec01469b6ce8dd6"
  },
  {
    "url": "blog/skepticism/2016/06/19/cyf/index.html",
    "revision": "5b0de48a7174a52fa3f0129d9edf165c"
  },
  {
    "url": "blog/skepticism/2016/06/19/holt/index.html",
    "revision": "5e499c02f4f000446a5dae4010da6c2c"
  },
  {
    "url": "blog/skepticism/2016/06/19/index.html",
    "revision": "437804af971db95ea22c687992e03e80"
  },
  {
    "url": "blog/skepticism/2016/06/19/silver/index.html",
    "revision": "a20c82a6b3a970b159fff72c1818f0e7"
  },
  {
    "url": "blog/skepticism/2016/06/19/ufo/index.html",
    "revision": "1fd2749c899b7378f4499405f7d6cba9"
  },
  {
    "url": "blog/skepticism/2016/06/26/homeopathy/index.html",
    "revision": "dfcf9b3907b13e55c869a7b97dcfddde"
  },
  {
    "url": "blog/skepticism/2016/06/26/index.html",
    "revision": "96ad1f2d33cc1ed93f0d6d43ea5186de"
  },
  {
    "url": "blog/skepticism/2016/06/26/robbins/index.html",
    "revision": "9c577300095ea39d5c7fa7109bf05cf9"
  },
  {
    "url": "blog/skepticism/2016/06/26/selfies/index.html",
    "revision": "a4d21cfd4972f9f63dde4bda0eecf5f3"
  },
  {
    "url": "blog/skepticism/2016/06/26/silver/index.html",
    "revision": "51aa0c98ad147ef7a7512f5213b7cd0c"
  },
  {
    "url": "blog/skepticism/2016/06/26/ufos/index.html",
    "revision": "994d6110eaeb18e502213e6f983ee13c"
  },
  {
    "url": "blog/skepticism/2016/06/index.html",
    "revision": "253b1ae78df2eead065a88ca00c1cc44"
  },
  {
    "url": "blog/skepticism/2016/07/03/glyphosate/index.html",
    "revision": "8349a1538277e35dd1bd4d7763b53dab"
  },
  {
    "url": "blog/skepticism/2016/07/03/gmo/index.html",
    "revision": "267031dc44a057ed0957457457c69c6a"
  },
  {
    "url": "blog/skepticism/2016/07/03/index.html",
    "revision": "54998f3e4ef76da26bf9f8f2c2c1dc37"
  },
  {
    "url": "blog/skepticism/2016/07/03/jail/index.html",
    "revision": "61e2f03c6bdbf243b6bf03cf11eff78c"
  },
  {
    "url": "blog/skepticism/2016/07/03/ken/index.html",
    "revision": "7657f4bced1a00b21279ea2401bbaacf"
  },
  {
    "url": "blog/skepticism/2016/07/10/ark/index.html",
    "revision": "60eef50e390d9906187bbfc991f9830e"
  },
  {
    "url": "blog/skepticism/2016/07/10/bee/index.html",
    "revision": "49f820b1a8d31e16317797cefe73ae90"
  },
  {
    "url": "blog/skepticism/2016/07/10/index.html",
    "revision": "e59e9fb909f0fd1dcf8b9860691fdca1"
  },
  {
    "url": "blog/skepticism/2016/07/10/lottery/index.html",
    "revision": "b662fc456e27bbb88bcc707dc3341717"
  },
  {
    "url": "blog/skepticism/2016/07/10/murder/index.html",
    "revision": "97595764c41087716dc32868ec2e615c"
  },
  {
    "url": "blog/skepticism/2016/07/17/dogs/index.html",
    "revision": "5040038909a20267fdd5e0c5393a77e1"
  },
  {
    "url": "blog/skepticism/2016/07/17/fsm/index.html",
    "revision": "56a45e2ab2e37f01bb13df2d04be082c"
  },
  {
    "url": "blog/skepticism/2016/07/17/fyi/index.html",
    "revision": "e7458d888ba59585d961e596b44d78bc"
  },
  {
    "url": "blog/skepticism/2016/07/17/index.html",
    "revision": "1165ad27acf4a9d58aeb92931c21e3e0"
  },
  {
    "url": "blog/skepticism/2016/07/17/natural/index.html",
    "revision": "15f7006545ebafd6b07d52e94a3502d0"
  },
  {
    "url": "blog/skepticism/2016/07/17/pokemon/index.html",
    "revision": "0b945bee0b440ea9ab09a4c5acc70d67"
  },
  {
    "url": "blog/skepticism/2016/07/index.html",
    "revision": "9ab392788922a2512fba985ec118528f"
  },
  {
    "url": "blog/skepticism/2016/08/07/icke/index.html",
    "revision": "d3c4f82f9b003a711855adefc76d75a1"
  },
  {
    "url": "blog/skepticism/2016/08/07/index.html",
    "revision": "1c9d7aaf0e0ecf6a627da148a74159de"
  },
  {
    "url": "blog/skepticism/2016/08/21/brian/index.html",
    "revision": "9ea6c94aaeee978f30b5eba9ae87758d"
  },
  {
    "url": "blog/skepticism/2016/08/21/chlorine/index.html",
    "revision": "93894fc43bb071c56c578d0bfcb52331"
  },
  {
    "url": "blog/skepticism/2016/08/21/index.html",
    "revision": "425b8190e6e2bdbae42040b0373fce8f"
  },
  {
    "url": "blog/skepticism/2016/08/21/murder/index.html",
    "revision": "7cf069f7c3177fc7aa95e51ae368ba92"
  },
  {
    "url": "blog/skepticism/2016/08/21/superfoods/index.html",
    "revision": "9fd4302464fa2fed01ae752fab3e5927"
  },
  {
    "url": "blog/skepticism/2016/08/21/witch/index.html",
    "revision": "e77b8d42cd8e62f994795288098cc862"
  },
  {
    "url": "blog/skepticism/2016/08/28/alcohol/index.html",
    "revision": "d60b65a99955d76bf71ede623b95058b"
  },
  {
    "url": "blog/skepticism/2016/08/28/chiro/index.html",
    "revision": "b12948797558ef41f110236b9ac04863"
  },
  {
    "url": "blog/skepticism/2016/08/28/index.html",
    "revision": "f83ce76d813a9ac99ebe8c3ecfbe6875"
  },
  {
    "url": "blog/skepticism/2016/08/28/processed/index.html",
    "revision": "0fe4d6a1b45dfe3b01f01a32adf4615c"
  },
  {
    "url": "blog/skepticism/2016/08/28/sbh/index.html",
    "revision": "dc0c51bdeebbf4fde3515015673617e8"
  },
  {
    "url": "blog/skepticism/2016/08/index.html",
    "revision": "03197067fccf2fde59011bf12058f003"
  },
  {
    "url": "blog/skepticism/2016/09/18/altruism/index.html",
    "revision": "b9693e31ce82977566a61f1f8f7320da"
  },
  {
    "url": "blog/skepticism/2016/09/18/better/index.html",
    "revision": "fe38ae8708354377a0ad9947c99c13b6"
  },
  {
    "url": "blog/skepticism/2016/09/18/homeopathy/index.html",
    "revision": "e587e2b7d34c38e567e7490e3c927430"
  },
  {
    "url": "blog/skepticism/2016/09/18/index.html",
    "revision": "d15815021e5b986101b099e4ca989f28"
  },
  {
    "url": "blog/skepticism/2016/09/18/nonsense/index.html",
    "revision": "c1cd25dbf9584f9c062d457700cbb8e1"
  },
  {
    "url": "blog/skepticism/2016/09/18/trump/index.html",
    "revision": "8615f5853d9d740d5cc074f23eb3bc0c"
  },
  {
    "url": "blog/skepticism/2016/09/25/clinic/index.html",
    "revision": "1863fc7ec0e8678536fa730ccdc35950"
  },
  {
    "url": "blog/skepticism/2016/09/25/fluoride/index.html",
    "revision": "71ed6e730582f0edeb03a0a1b0ab5d22"
  },
  {
    "url": "blog/skepticism/2016/09/25/homeopathy/index.html",
    "revision": "d823d90e2c0ff6ab26a521bfabafbd39"
  },
  {
    "url": "blog/skepticism/2016/09/25/index.html",
    "revision": "5861d39f48ec37b5d62cd3596fd58096"
  },
  {
    "url": "blog/skepticism/2016/09/25/murder/index.html",
    "revision": "0cf5a29debe8ed4a1cae1b5c6269f0f4"
  },
  {
    "url": "blog/skepticism/2016/09/index.html",
    "revision": "f1fc8827633d1d3081b35d5ba16e92d3"
  },
  {
    "url": "blog/skepticism/2016/10/21/bigfoot/index.html",
    "revision": "09db3ecdd061bd628835f8dab9e8fd8f"
  },
  {
    "url": "blog/skepticism/2016/10/21/breasts/index.html",
    "revision": "3858b7b0c30652e8240fc378b86522b6"
  },
  {
    "url": "blog/skepticism/2016/10/21/index.html",
    "revision": "ed683ef259a36a4bebe9a953289fc17a"
  },
  {
    "url": "blog/skepticism/2016/10/21/medsafe/index.html",
    "revision": "3af78adce1345720d564fb8b86ff52eb"
  },
  {
    "url": "blog/skepticism/2016/10/21/zenteq/index.html",
    "revision": "c78bfa1a156c5b9e0240f01285a27543"
  },
  {
    "url": "blog/skepticism/2016/10/index.html",
    "revision": "a16483bc2d5afd31f28d31f65119f3be"
  },
  {
    "url": "blog/skepticism/2016/11/13/conference/index.html",
    "revision": "59cdca19a4ab8a488d5a19db20363b7e"
  },
  {
    "url": "blog/skepticism/2016/11/13/green/index.html",
    "revision": "b680be1577641197c3e43fdace7bb344"
  },
  {
    "url": "blog/skepticism/2016/11/13/index.html",
    "revision": "e031fa7f20f8b84ca0fff122364925cf"
  },
  {
    "url": "blog/skepticism/2016/11/13/vice/index.html",
    "revision": "a130b40ba0645eb4bf8ae2fd204dcb54"
  },
  {
    "url": "blog/skepticism/2016/11/27/bioptron/index.html",
    "revision": "4c6c9cc2d7a0fba7deaab68fdd9bbbc8"
  },
  {
    "url": "blog/skepticism/2016/11/27/conference/index.html",
    "revision": "ba31fda0ea9561ae232f9af64c7277d0"
  },
  {
    "url": "blog/skepticism/2016/11/27/earthquake/index.html",
    "revision": "8cb7b8e795c5f86f60aeed7858e8e694"
  },
  {
    "url": "blog/skepticism/2016/11/27/index.html",
    "revision": "4a3cacd079fd24f452c6939abb9e8e8d"
  },
  {
    "url": "blog/skepticism/2016/11/index.html",
    "revision": "3db7c1e15b9472fb4ca2bd96ca58025b"
  },
  {
    "url": "blog/skepticism/2016/12/04/conference/index.html",
    "revision": "e8a76ee27dbad8516c17ae87c277aa37"
  },
  {
    "url": "blog/skepticism/2016/12/04/index.html",
    "revision": "8a2a7ef3c78e0f73477edbc47a4954af"
  },
  {
    "url": "blog/skepticism/2016/12/18/colin/index.html",
    "revision": "8ab84be9b0d4c7e0501527960a901efc"
  },
  {
    "url": "blog/skepticism/2016/12/18/fiji/index.html",
    "revision": "2dfaa37b32039c6d7011909f5abb8813"
  },
  {
    "url": "blog/skepticism/2016/12/18/index.html",
    "revision": "883664a6aabfc30b5cc5b9e405096b43"
  },
  {
    "url": "blog/skepticism/2016/12/18/kinesiology/index.html",
    "revision": "beafcafe3769ba527611741b4253d561"
  },
  {
    "url": "blog/skepticism/2016/12/18/mmm/index.html",
    "revision": "940731787896c6712a18a534beeb6e46"
  },
  {
    "url": "blog/skepticism/2016/12/18/nigel/index.html",
    "revision": "a46b15253dd6416d66836ae8bf949b88"
  },
  {
    "url": "blog/skepticism/2016/12/index.html",
    "revision": "3fa4b98fe69c6212be10cd7f88bcb210"
  },
  {
    "url": "blog/skepticism/2016/index.html",
    "revision": "e21657c0a3b78f9c609e2a61ce18352f"
  },
  {
    "url": "blog/skepticism/2017/01/22/index.html",
    "revision": "8620d2c58316093bf210370f508d2e83"
  },
  {
    "url": "blog/skepticism/2017/01/22/scientology/index.html",
    "revision": "08bf8aeef2976fa5457642a9a3241cfb"
  },
  {
    "url": "blog/skepticism/2017/01/29/creation/index.html",
    "revision": "97864579b3cf025f27284a5a985f78dc"
  },
  {
    "url": "blog/skepticism/2017/01/29/index.html",
    "revision": "0238e8caf53ec2ccabb37b8c4626545b"
  },
  {
    "url": "blog/skepticism/2017/01/index.html",
    "revision": "c71437c93d20e83365a5eb08d272c535"
  },
  {
    "url": "blog/skepticism/2017/02/05/fraudster/index.html",
    "revision": "56cf596735b22909d4cc653aaec2ee93"
  },
  {
    "url": "blog/skepticism/2017/02/05/gervais/index.html",
    "revision": "585b015dfaddfea75ca305ffb5f88db3"
  },
  {
    "url": "blog/skepticism/2017/02/05/index.html",
    "revision": "dbc748cf419b9d61e562a43ad355c9d4"
  },
  {
    "url": "blog/skepticism/2017/02/05/scientology/index.html",
    "revision": "df37689b44d91c24a7e9b6aeb613d149"
  },
  {
    "url": "blog/skepticism/2017/02/19/homeopathy/index.html",
    "revision": "c964386f77035519f504b3317b483425"
  },
  {
    "url": "blog/skepticism/2017/02/19/index.html",
    "revision": "abf8dcf2f63bf7d9cdebbeec22fea3e1"
  },
  {
    "url": "blog/skepticism/2017/02/19/lottery/index.html",
    "revision": "931e3f93a89f45a7f1c10715d85fe7a0"
  },
  {
    "url": "blog/skepticism/2017/02/19/vaxxed/index.html",
    "revision": "867688b5437e0390e7178481b28eaf91"
  },
  {
    "url": "blog/skepticism/2017/02/19/whales/index.html",
    "revision": "f5b3ee9aff0d969f43488ae8bbf7fc2b"
  },
  {
    "url": "blog/skepticism/2017/02/index.html",
    "revision": "2b2572e7a200f9e5743cb15161dd1606"
  },
  {
    "url": "blog/skepticism/2017/03/05/index.html",
    "revision": "126f5d3b37998552cd3951f5217c957e"
  },
  {
    "url": "blog/skepticism/2017/03/05/rea/index.html",
    "revision": "e6e1accc1852658c9d5e4984962fbb67"
  },
  {
    "url": "blog/skepticism/2017/03/19/fake/index.html",
    "revision": "ee5ce5aaff6a3b4545de9183e5f7d14b"
  },
  {
    "url": "blog/skepticism/2017/03/19/index.html",
    "revision": "1b066c22df4d43de08a9ebefc52bd788"
  },
  {
    "url": "blog/skepticism/2017/03/19/murder/index.html",
    "revision": "858b27ce6d8d94cf7780652a9373da70"
  },
  {
    "url": "blog/skepticism/2017/03/26/census/index.html",
    "revision": "4588bedbd96cb3c2c25ce96a82e0d4ca"
  },
  {
    "url": "blog/skepticism/2017/03/26/index.html",
    "revision": "ab2f996c6a2fb3005f780a21dcff9a31"
  },
  {
    "url": "blog/skepticism/2017/03/26/nzmj/index.html",
    "revision": "7e878550915ba9dcdd29588fccb984e7"
  },
  {
    "url": "blog/skepticism/2017/03/26/shaquille/index.html",
    "revision": "a704ee441a1e6320bd8500403aa600d2"
  },
  {
    "url": "blog/skepticism/2017/03/index.html",
    "revision": "be2027a4f7b5203db520e4d837de2063"
  },
  {
    "url": "blog/skepticism/2017/04/02/index.html",
    "revision": "fa8e60efeb27c9ab0d16e2a996f033b8"
  },
  {
    "url": "blog/skepticism/2017/04/02/nasa/index.html",
    "revision": "c0bac7def07747f8bfc1d9c7bae3cdcf"
  },
  {
    "url": "blog/skepticism/2017/04/02/science/index.html",
    "revision": "4b2656a49ecb1d86442442329251680a"
  },
  {
    "url": "blog/skepticism/2017/04/02/vaxxed/index.html",
    "revision": "164e5f07ac03382ed96a0ac7134e7d73"
  },
  {
    "url": "blog/skepticism/2017/04/09/index.html",
    "revision": "25e549b239ee1f2a072d5c3fe91e965d"
  },
  {
    "url": "blog/skepticism/2017/04/09/tekiri/index.html",
    "revision": "ab305cbc158272c7bb206ab2e8d4aa3b"
  },
  {
    "url": "blog/skepticism/2017/04/09/vaxxed/index.html",
    "revision": "53da2bb81f484e18c10a8013e1b62778"
  },
  {
    "url": "blog/skepticism/2017/04/23/arise/index.html",
    "revision": "d0de66fecb4e554de82e7b5fe0d83130"
  },
  {
    "url": "blog/skepticism/2017/04/23/index.html",
    "revision": "28de84bcbc098087df6814c91c84ea50"
  },
  {
    "url": "blog/skepticism/2017/04/23/kelvin/index.html",
    "revision": "911e7de53ee926f9be502f61498ce64f"
  },
  {
    "url": "blog/skepticism/2017/04/index.html",
    "revision": "6b2213c3e9c31806e60e0aaf2b31037d"
  },
  {
    "url": "blog/skepticism/2017/05/07/cancer/index.html",
    "revision": "7204f65dad05ce9812d6a8dde3edc1a0"
  },
  {
    "url": "blog/skepticism/2017/05/07/index.html",
    "revision": "a9f9653567213cbfc4b88fd3ae182810"
  },
  {
    "url": "blog/skepticism/2017/05/07/nigel/index.html",
    "revision": "e6f8967ebba6bc73ea86ea647b617b0c"
  },
  {
    "url": "blog/skepticism/2017/05/21/blasphemy/index.html",
    "revision": "78475655500a585a0647f815d1535dfe"
  },
  {
    "url": "blog/skepticism/2017/05/21/flat/index.html",
    "revision": "82d88ea90add6a8af05aae58297e523a"
  },
  {
    "url": "blog/skepticism/2017/05/21/index.html",
    "revision": "53b15ccc6dc20789ae67b5846eb44c4b"
  },
  {
    "url": "blog/skepticism/2017/05/21/maori/index.html",
    "revision": "585a1dc8b22768a5a925ede1db97e12f"
  },
  {
    "url": "blog/skepticism/2017/05/index.html",
    "revision": "4760b7d55060ce2c452f386720cd7128"
  },
  {
    "url": "blog/skepticism/2017/06/04/bigelow/index.html",
    "revision": "a6a5ba99ec6872e50f21ea96e4704e5c"
  },
  {
    "url": "blog/skepticism/2017/06/04/climate/index.html",
    "revision": "e05f5160a958a18f72bef15b99a7dd06"
  },
  {
    "url": "blog/skepticism/2017/06/04/hansford/index.html",
    "revision": "1ef1592485431d3f6e41dc7505b4523f"
  },
  {
    "url": "blog/skepticism/2017/06/04/index.html",
    "revision": "c3df1c827e7cb3415d99905d207f4617"
  },
  {
    "url": "blog/skepticism/2017/06/04/wasp/index.html",
    "revision": "e302d7746702ef5f6db7fe76c5276358"
  },
  {
    "url": "blog/skepticism/2017/06/11/colonic/index.html",
    "revision": "6aab52cf78cfab28c757e9c353160975"
  },
  {
    "url": "blog/skepticism/2017/06/11/credulous/index.html",
    "revision": "52e244206f3ba81208cbf5d3f136c697"
  },
  {
    "url": "blog/skepticism/2017/06/11/index.html",
    "revision": "374ea4ff7df2957c8458afd9f46f5bf9"
  },
  {
    "url": "blog/skepticism/2017/06/11/journals/index.html",
    "revision": "6cc40e6c36c988def58b0e84d1b59e51"
  },
  {
    "url": "blog/skepticism/2017/06/18/breatharians/index.html",
    "revision": "1eb8399c45abe4e046d14865131b9064"
  },
  {
    "url": "blog/skepticism/2017/06/18/fieldays/index.html",
    "revision": "efba2ceda4d21303c473be38fa354050"
  },
  {
    "url": "blog/skepticism/2017/06/18/index.html",
    "revision": "d7548a9bb3d4d0dad027f75efa04ca8a"
  },
  {
    "url": "blog/skepticism/2017/06/18/jw/index.html",
    "revision": "e00fb9fc747e8007e5199f2b3a813604"
  },
  {
    "url": "blog/skepticism/2017/06/18/oil/index.html",
    "revision": "fe775ee5b1b66d95e824dc4605c56d37"
  },
  {
    "url": "blog/skepticism/2017/06/index.html",
    "revision": "891f915cefda72dc50452d313ca32a7b"
  },
  {
    "url": "blog/skepticism/2017/07/02/baby/index.html",
    "revision": "80421d425604b295b049e04b3e58dccd"
  },
  {
    "url": "blog/skepticism/2017/07/02/index.html",
    "revision": "cf66432198c7f10cc2bba6b933620909"
  },
  {
    "url": "blog/skepticism/2017/07/02/infowars/index.html",
    "revision": "9a834d682c7aca909e3bb3beec1cc610"
  },
  {
    "url": "blog/skepticism/2017/07/02/scientology/index.html",
    "revision": "e415c56d6f46781cf71b7685af31bdf5"
  },
  {
    "url": "blog/skepticism/2017/07/16/bananas/index.html",
    "revision": "aaaeaba0a9222d699e38be2a955c4e43"
  },
  {
    "url": "blog/skepticism/2017/07/16/circles/index.html",
    "revision": "1b9b00c80d790f606a839cc35bf9b12d"
  },
  {
    "url": "blog/skepticism/2017/07/16/index.html",
    "revision": "1cadcafb3f7f5363520a55546987c11f"
  },
  {
    "url": "blog/skepticism/2017/07/16/siggi/index.html",
    "revision": "65ff1f10c01bdb01b9e42c1af58be803"
  },
  {
    "url": "blog/skepticism/2017/07/16/vaxxed/index.html",
    "revision": "c14a75b1f6052fa9a2274adea4d46d89"
  },
  {
    "url": "blog/skepticism/2017/07/30/bleach/index.html",
    "revision": "2cf94eaeb2abbf9028c27dcf18b55273"
  },
  {
    "url": "blog/skepticism/2017/07/30/bluebeam/index.html",
    "revision": "9ed78a454b27863968e07a4b6b94b4e3"
  },
  {
    "url": "blog/skepticism/2017/07/30/index.html",
    "revision": "3c6fe26c2b7458c5d2ed913aed8da32b"
  },
  {
    "url": "blog/skepticism/2017/07/30/police/index.html",
    "revision": "8f154039c4f3618744a7f15637ecbe27"
  },
  {
    "url": "blog/skepticism/2017/07/index.html",
    "revision": "ed69b4eae04b723cb7ee7a224f5f6808"
  },
  {
    "url": "blog/skepticism/2017/08/06/conned/index.html",
    "revision": "5c6ff78b1e3dd354c3f71f76bc82578e"
  },
  {
    "url": "blog/skepticism/2017/08/06/doll/index.html",
    "revision": "982727a56b24f8291003ea7c2f066602"
  },
  {
    "url": "blog/skepticism/2017/08/06/index.html",
    "revision": "7a8738906327863772e6590bc344148e"
  },
  {
    "url": "blog/skepticism/2017/08/06/jacinda/index.html",
    "revision": "aec0d069babb012ef00b52ef6f915598"
  },
  {
    "url": "blog/skepticism/2017/08/06/lotto/index.html",
    "revision": "e1c2a1ecb694b1961ba2ad5673326401"
  },
  {
    "url": "blog/skepticism/2017/08/27/index.html",
    "revision": "9025db3149c09ddac34f533f3f224dca"
  },
  {
    "url": "blog/skepticism/2017/08/27/naturopath/index.html",
    "revision": "7b525f2fb6a813634d1f075f255b40ac"
  },
  {
    "url": "blog/skepticism/2017/08/27/satanic/index.html",
    "revision": "912b0316873cc27be6267a4543e5be46"
  },
  {
    "url": "blog/skepticism/2017/08/index.html",
    "revision": "e83942ba718e65b22ebba756adaccda3"
  },
  {
    "url": "blog/skepticism/2017/09/03/apocalypse/index.html",
    "revision": "dbd0b7bfc01b141f0e665e379786c430"
  },
  {
    "url": "blog/skepticism/2017/09/03/cancer/index.html",
    "revision": "819801fc37dbb19dc3b6a663a8d07715"
  },
  {
    "url": "blog/skepticism/2017/09/03/index.html",
    "revision": "71927d38d768b59774eaa88bc6de93fb"
  },
  {
    "url": "blog/skepticism/2017/09/03/rectangle/index.html",
    "revision": "47fa1b97420c499e00fd89c49794ed73"
  },
  {
    "url": "blog/skepticism/2017/09/03/stargate/index.html",
    "revision": "a4838a876350b3eabd527fa7e2db01f7"
  },
  {
    "url": "blog/skepticism/2017/09/index.html",
    "revision": "4442cfba6ffd04b1992ee13cf08fb167"
  },
  {
    "url": "blog/skepticism/2017/10/01/apocalypse/index.html",
    "revision": "7a4786bcc815417bf50da1b4d40a7e93"
  },
  {
    "url": "blog/skepticism/2017/10/01/freeman/index.html",
    "revision": "c62a3d934afd65fec8bff18c82542682"
  },
  {
    "url": "blog/skepticism/2017/10/01/index.html",
    "revision": "8eb7d9114d62b6616ce705d762f74b29"
  },
  {
    "url": "blog/skepticism/2017/10/01/pharmacy/index.html",
    "revision": "3c55889849dee8e904279b56f1e4c55c"
  },
  {
    "url": "blog/skepticism/2017/10/08/index.html",
    "revision": "b121602785d9d5e2f2336c95fce1452f"
  },
  {
    "url": "blog/skepticism/2017/10/08/pill/index.html",
    "revision": "d9e514c2009e989eeaebfde97a33f42a"
  },
  {
    "url": "blog/skepticism/2017/10/08/qsb/index.html",
    "revision": "51a8766c6acac04766bd6fe18ddd03b0"
  },
  {
    "url": "blog/skepticism/2017/10/08/vegas/index.html",
    "revision": "2e6d6d32e95ba3246e1313152034da70"
  },
  {
    "url": "blog/skepticism/2017/10/15/doterra/index.html",
    "revision": "1cded4cfde62801d7ded91670b7e8274"
  },
  {
    "url": "blog/skepticism/2017/10/15/index.html",
    "revision": "1fff8ff009ea2873ed8f7ea7fd322fc1"
  },
  {
    "url": "blog/skepticism/2017/10/15/lie/index.html",
    "revision": "e09c0278b9a8e4fb80642796842b23bc"
  },
  {
    "url": "blog/skepticism/2017/10/15/soap/index.html",
    "revision": "28ab53878f91357520a09b5779770d6f"
  },
  {
    "url": "blog/skepticism/2017/10/index.html",
    "revision": "6e019874cf4a23e82a72770a3e61e45f"
  },
  {
    "url": "blog/skepticism/2017/11/05/conference/index.html",
    "revision": "3d63ba050739f95c1858905f87dabb08"
  },
  {
    "url": "blog/skepticism/2017/11/05/glyphosate/index.html",
    "revision": "3bf09ecf4f3dd5892adf2e7f8b99ccff"
  },
  {
    "url": "blog/skepticism/2017/11/05/index.html",
    "revision": "b202318cb36d296affd6caff0a8be853"
  },
  {
    "url": "blog/skepticism/2017/11/05/stranded/index.html",
    "revision": "3382b33c0a3c97d87f53ab917229ed7a"
  },
  {
    "url": "blog/skepticism/2017/11/05/tracts/index.html",
    "revision": "f3f8ff8066a78001c7ca35221f046d8b"
  },
  {
    "url": "blog/skepticism/2017/11/12/ghost/index.html",
    "revision": "dd17d7c5c996246ee84798e72a997b0b"
  },
  {
    "url": "blog/skepticism/2017/11/12/green/index.html",
    "revision": "1439bea80513ff271f835ad553df1447"
  },
  {
    "url": "blog/skepticism/2017/11/12/harassment/index.html",
    "revision": "cd27869dccdb2e02962fc066210c9c9b"
  },
  {
    "url": "blog/skepticism/2017/11/12/index.html",
    "revision": "8068ad6fe3d243c24d62c9d4b913ce20"
  },
  {
    "url": "blog/skepticism/2017/11/12/libby/index.html",
    "revision": "09c9456633e84d0907acf755e9a91faa"
  },
  {
    "url": "blog/skepticism/2017/11/index.html",
    "revision": "9f73e9c03b0c9c690d44b0a431ad891e"
  },
  {
    "url": "blog/skepticism/2017/12/03/acupuncture/index.html",
    "revision": "050aee4811bd97bbbca61c3ee0642b2a"
  },
  {
    "url": "blog/skepticism/2017/12/03/denialism/index.html",
    "revision": "c7e109355d4f7837c0eecd584e20ba16"
  },
  {
    "url": "blog/skepticism/2017/12/03/dowsing/index.html",
    "revision": "29bd92012ebdc57643b77440b85cd500"
  },
  {
    "url": "blog/skepticism/2017/12/03/holes/index.html",
    "revision": "211627034dfd5df59907fea126e6874f"
  },
  {
    "url": "blog/skepticism/2017/12/03/index.html",
    "revision": "99ba8959ff13f4ffed4f928d0f5fef1d"
  },
  {
    "url": "blog/skepticism/2017/12/17/index.html",
    "revision": "d1c4575c8191d8c51e723b5b7a1d60e9"
  },
  {
    "url": "blog/skepticism/2017/12/17/nhs/index.html",
    "revision": "8a81da63f8b93d0dbf18a0b3c9fdfde8"
  },
  {
    "url": "blog/skepticism/2017/12/17/oto/index.html",
    "revision": "17957e25b9b2ea689fcc5797a2bb7921"
  },
  {
    "url": "blog/skepticism/2017/12/17/pastafarian/index.html",
    "revision": "810b671ed90491f06b26b64861867bfe"
  },
  {
    "url": "blog/skepticism/2017/12/17/shc/index.html",
    "revision": "d4797c0edbc52194163b1dd5e614323a"
  },
  {
    "url": "blog/skepticism/2017/12/17/wellworks/index.html",
    "revision": "ed602de92273c4095a485fa8e63cde63"
  },
  {
    "url": "blog/skepticism/2017/12/index.html",
    "revision": "6b7f37f59a70d9413532682202822ebf"
  },
  {
    "url": "blog/skepticism/2017/index.html",
    "revision": "96d2e8dbce5be54c9b185793add6e81e"
  },
  {
    "url": "blog/skepticism/2018/01/21/grounding/index.html",
    "revision": "3e2106d56c6f358a36938f55a35e0b49"
  },
  {
    "url": "blog/skepticism/2018/01/21/index.html",
    "revision": "d8eb4097bd1bd404544f63af1f9770e1"
  },
  {
    "url": "blog/skepticism/2018/01/21/naturopath/index.html",
    "revision": "62662dfa6a6103f43f9d8d1f7cd55fd8"
  },
  {
    "url": "blog/skepticism/2018/01/21/respen/index.html",
    "revision": "9365b7bc530c04ab399e994a422c717d"
  },
  {
    "url": "blog/skepticism/2018/01/28/bears/index.html",
    "revision": "e267ccb2c4723bb89d70de00380fcdaa"
  },
  {
    "url": "blog/skepticism/2018/01/28/index.html",
    "revision": "ba09be153f3a5cdd8ab157222f88797d"
  },
  {
    "url": "blog/skepticism/2018/01/28/peppering/index.html",
    "revision": "ccc147016c6cd5778f71d7ddc32e0942"
  },
  {
    "url": "blog/skepticism/2018/01/28/pet/index.html",
    "revision": "e82a2ee14ce76ad1e1e35400355fe612"
  },
  {
    "url": "blog/skepticism/2018/01/28/quake/index.html",
    "revision": "b886bd4e09e9e6a817ff0acdbf980c62"
  },
  {
    "url": "blog/skepticism/2018/01/28/scientology/index.html",
    "revision": "255eff1e2e973b3ee8752d27eedb817d"
  },
  {
    "url": "blog/skepticism/2018/01/index.html",
    "revision": "dd828d5167492231e7eda906ee99ba04"
  },
  {
    "url": "blog/skepticism/2018/02/11/asa/index.html",
    "revision": "175c5103b433685e952a5429c1c5ae84"
  },
  {
    "url": "blog/skepticism/2018/02/11/cannabis/index.html",
    "revision": "cb0bfe63cfd1d4b563fd9943d41b6eed"
  },
  {
    "url": "blog/skepticism/2018/02/11/elon/index.html",
    "revision": "d4efad95f6ee4cce2e3ee04ffd616fc1"
  },
  {
    "url": "blog/skepticism/2018/02/11/homeopathy/index.html",
    "revision": "9afab3633d6637304c3f36a70a2e09bc"
  },
  {
    "url": "blog/skepticism/2018/02/11/index.html",
    "revision": "ac9781008e44b011283988d51029ebc6"
  },
  {
    "url": "blog/skepticism/2018/02/11/water/index.html",
    "revision": "0f9537f78cb44613146fa372f9522f14"
  },
  {
    "url": "blog/skepticism/2018/02/25/crisis/index.html",
    "revision": "a2596d162c80c9df3c904ca323f5d1b8"
  },
  {
    "url": "blog/skepticism/2018/02/25/eggs/index.html",
    "revision": "f149daaa4b0a6068a48c5d9d03f35517"
  },
  {
    "url": "blog/skepticism/2018/02/25/fsm/index.html",
    "revision": "100619086380c95476b248d5a5e07553"
  },
  {
    "url": "blog/skepticism/2018/02/25/index.html",
    "revision": "53bdc4cf30d8b165d75b07d8666e1618"
  },
  {
    "url": "blog/skepticism/2018/02/25/number/index.html",
    "revision": "fdbade6bcc6088e72fe3de011896075a"
  },
  {
    "url": "blog/skepticism/2018/02/25/quackery/index.html",
    "revision": "64168194e50728b5162c61d6ef3a6b20"
  },
  {
    "url": "blog/skepticism/2018/02/index.html",
    "revision": "899856299e5d35103fd71135e4ab2381"
  },
  {
    "url": "blog/skepticism/2018/03/11/ai/index.html",
    "revision": "057e09203dfcf061c53f067c9ba7e1bc"
  },
  {
    "url": "blog/skepticism/2018/03/11/index.html",
    "revision": "0f44cee70b7cce110da05a238f7d2ba1"
  },
  {
    "url": "blog/skepticism/2018/03/11/radiation/index.html",
    "revision": "34cd25fd85fedde5e2ce6d0b3f552ed3"
  },
  {
    "url": "blog/skepticism/2018/03/11/reiki/index.html",
    "revision": "356a53d490ade7d8af73fbacdacaa66e"
  },
  {
    "url": "blog/skepticism/2018/03/11/ufo/index.html",
    "revision": "a6881677707df115ac8606352198c659"
  },
  {
    "url": "blog/skepticism/2018/03/18/ghost/index.html",
    "revision": "359803350bfab36680f9b6eeebae9bb4"
  },
  {
    "url": "blog/skepticism/2018/03/18/index.html",
    "revision": "be914f030aaafdfae56e0f83546f4fba"
  },
  {
    "url": "blog/skepticism/2018/03/18/psychic/index.html",
    "revision": "b10bf3a6fa9c1e2dea5f66488d4b8552"
  },
  {
    "url": "blog/skepticism/2018/03/18/quack/index.html",
    "revision": "552231941b253cedcdad2fa42cdd7157"
  },
  {
    "url": "blog/skepticism/2018/03/18/radiation/index.html",
    "revision": "3323c6b89f44fe637adb3408e0851537"
  },
  {
    "url": "blog/skepticism/2018/03/index.html",
    "revision": "965b3d71944ea8c44111271454ffab1b"
  },
  {
    "url": "blog/skepticism/2018/04/08/calocurb/index.html",
    "revision": "2bf0c56e6bec8e6ed5bb0bec77237fb3"
  },
  {
    "url": "blog/skepticism/2018/04/08/cam/index.html",
    "revision": "8bd620009e702288ad1b776d45ca6ecd"
  },
  {
    "url": "blog/skepticism/2018/04/08/index.html",
    "revision": "555db19a99c163b58330f68e6b6c15fa"
  },
  {
    "url": "blog/skepticism/2018/04/08/psychic/index.html",
    "revision": "22f8148bdc5556dd068497861f9c41a9"
  },
  {
    "url": "blog/skepticism/2018/04/08/vaccines/index.html",
    "revision": "c904e2beea0e52a5186dbfda0faf6f97"
  },
  {
    "url": "blog/skepticism/2018/04/15/coffee/index.html",
    "revision": "a2035f16bd759a5f76e602e85fbdf180"
  },
  {
    "url": "blog/skepticism/2018/04/15/ignorance/index.html",
    "revision": "6f1386156cea86e26af443b187651214"
  },
  {
    "url": "blog/skepticism/2018/04/15/index.html",
    "revision": "2b89a3088f351dd267214b7f51ffb28a"
  },
  {
    "url": "blog/skepticism/2018/04/15/nasa/index.html",
    "revision": "5caf8ad90d615e37652bda134a4f9974"
  },
  {
    "url": "blog/skepticism/2018/04/15/tapu/index.html",
    "revision": "9650e145a6edf67dd2fd131ca5953f86"
  },
  {
    "url": "blog/skepticism/2018/04/29/google/index.html",
    "revision": "ece6038d86fdfe1367796dc6da0c6dcb"
  },
  {
    "url": "blog/skepticism/2018/04/29/homeopathy/index.html",
    "revision": "3015e4419a29919d6fafbc4a22212e8b"
  },
  {
    "url": "blog/skepticism/2018/04/29/index.html",
    "revision": "72377e24ee98bbde6631562574c972ef"
  },
  {
    "url": "blog/skepticism/2018/04/29/ken/index.html",
    "revision": "7dac63a12d5036222e756feb011a9307"
  },
  {
    "url": "blog/skepticism/2018/04/29/v2k/index.html",
    "revision": "c836824834e069bf0029f7c7f8d6ffdb"
  },
  {
    "url": "blog/skepticism/2018/04/index.html",
    "revision": "4e5659fabf7e1a4eefd69ddbdaaa618b"
  },
  {
    "url": "blog/skepticism/2018/05/13/astrology/index.html",
    "revision": "0a9523cb24d1036bfa9014f4738076a2"
  },
  {
    "url": "blog/skepticism/2018/05/13/crystals/index.html",
    "revision": "0a1c267c3558cbe0a497c2f2f092f746"
  },
  {
    "url": "blog/skepticism/2018/05/13/dawkins/index.html",
    "revision": "10f058693850587650e509f168cc40e1"
  },
  {
    "url": "blog/skepticism/2018/05/13/index.html",
    "revision": "00d214f7f95643e25478d2586bcb8b40"
  },
  {
    "url": "blog/skepticism/2018/05/13/kangen/index.html",
    "revision": "920c50182d29dbb7da82cb7ed3402b2a"
  },
  {
    "url": "blog/skepticism/2018/05/13/vitamins/index.html",
    "revision": "97d68b89b62bafe696656fdc8b874cc6"
  },
  {
    "url": "blog/skepticism/2018/05/27/flat/index.html",
    "revision": "1ce6d8bb96d23ae2c3482a3c10070e20"
  },
  {
    "url": "blog/skepticism/2018/05/27/index.html",
    "revision": "687dbb435e56aaefe95d119f89765867"
  },
  {
    "url": "blog/skepticism/2018/05/27/kangen/index.html",
    "revision": "3e7fac3d1b89a83d779f4c3589ee7740"
  },
  {
    "url": "blog/skepticism/2018/05/27/ness/index.html",
    "revision": "db183e9c5cf19723522378888abad151"
  },
  {
    "url": "blog/skepticism/2018/05/27/oz/index.html",
    "revision": "bdb34a4bdfdf267f135c72f3bc7dc0b6"
  },
  {
    "url": "blog/skepticism/2018/05/27/psychic/index.html",
    "revision": "444b994beaaef8cf9c05a1ae6c8eac7b"
  },
  {
    "url": "blog/skepticism/2018/05/index.html",
    "revision": "d5bedb7f3a40c174159923e3d6789de3"
  },
  {
    "url": "blog/skepticism/2018/06/10/astrology/index.html",
    "revision": "be92b3db018bb72ede48f9caef7416c3"
  },
  {
    "url": "blog/skepticism/2018/06/10/index.html",
    "revision": "58f5554368068cd8d449d56659812822"
  },
  {
    "url": "blog/skepticism/2018/06/10/nhs/index.html",
    "revision": "e97668b47736d2c5d2f25a373259c066"
  },
  {
    "url": "blog/skepticism/2018/06/10/shakti/index.html",
    "revision": "82a77297b3d690a5d16ee7b20067bdcd"
  },
  {
    "url": "blog/skepticism/2018/06/10/weetbix/index.html",
    "revision": "158aca5190eb9d83bf546e63af7347a6"
  },
  {
    "url": "blog/skepticism/2018/06/24/blasphemy/index.html",
    "revision": "a91317af539891d9b3a77f0f26fd56a6"
  },
  {
    "url": "blog/skepticism/2018/06/24/cannabis/index.html",
    "revision": "48d5bc36a73a4c8d3918383d0e2068ae"
  },
  {
    "url": "blog/skepticism/2018/06/24/hotdog/index.html",
    "revision": "634afbc06946f94eee7fe03cd70bf5bf"
  },
  {
    "url": "blog/skepticism/2018/06/24/index.html",
    "revision": "5b73bcb2f37a0645b4e928bbc610afd9"
  },
  {
    "url": "blog/skepticism/2018/06/24/led/index.html",
    "revision": "9a6ad86a1461d75fe8f908f639a5ef6b"
  },
  {
    "url": "blog/skepticism/2018/06/index.html",
    "revision": "25710eb182d1b3f4a35b185b617329b2"
  },
  {
    "url": "blog/skepticism/2018/07/08/bullet/index.html",
    "revision": "04b4bc89fbd28629f8b040c589a5dcd4"
  },
  {
    "url": "blog/skepticism/2018/07/08/chiros/index.html",
    "revision": "7b19a685491fa1e95b01cadbda1275b7"
  },
  {
    "url": "blog/skepticism/2018/07/08/hiv/index.html",
    "revision": "beef617f140086e3ecbf3463b089b65b"
  },
  {
    "url": "blog/skepticism/2018/07/08/hrv/index.html",
    "revision": "a75cfb7ba1d685d43aa780dabaf15f49"
  },
  {
    "url": "blog/skepticism/2018/07/08/index.html",
    "revision": "f0154252a7af9a62f27afe9c4cf05277"
  },
  {
    "url": "blog/skepticism/2018/07/22/cancer/index.html",
    "revision": "33171092e0620931c1849dc0765ce048"
  },
  {
    "url": "blog/skepticism/2018/07/22/index.html",
    "revision": "8d0898c314845b8868b11dd53ea754bf"
  },
  {
    "url": "blog/skepticism/2018/07/22/resurrection/index.html",
    "revision": "64ba0aeb890f61a3c210116308861d70"
  },
  {
    "url": "blog/skepticism/2018/07/22/talc/index.html",
    "revision": "4219f8b7ad594efe6f8d96f41f21b4b7"
  },
  {
    "url": "blog/skepticism/2018/07/22/visas/index.html",
    "revision": "dc9e76c60bedc9e962fc54ae7e56957e"
  },
  {
    "url": "blog/skepticism/2018/07/index.html",
    "revision": "8043bdfa492f7ae2c1770b1a9dd54fb4"
  },
  {
    "url": "blog/skepticism/2018/08/05/conf/index.html",
    "revision": "58049b24dee5cea36d0066b1392a5e64"
  },
  {
    "url": "blog/skepticism/2018/08/05/index.html",
    "revision": "b3b2198173ef35800c9a26d40f228602"
  },
  {
    "url": "blog/skepticism/2018/08/05/qanon/index.html",
    "revision": "ccc920ece17a7369e1afa317720dd10d"
  },
  {
    "url": "blog/skepticism/2018/08/19/index.html",
    "revision": "3afea23b704eefdb01a3e323a269b5f6"
  },
  {
    "url": "blog/skepticism/2018/08/19/jw/index.html",
    "revision": "7c668a41435ae2f266d4f3f59849ccfe"
  },
  {
    "url": "blog/skepticism/2018/08/index.html",
    "revision": "623977e86653f7c67eb9b70d58d68330"
  },
  {
    "url": "blog/skepticism/2018/09/02/allergy/index.html",
    "revision": "927b3f014fa866f1f06591a6e3c7e4c7"
  },
  {
    "url": "blog/skepticism/2018/09/02/catholic/index.html",
    "revision": "35498b3a763d2183091bde7bfdf812a2"
  },
  {
    "url": "blog/skepticism/2018/09/02/index.html",
    "revision": "ac9ef6a4d55a5b0edb37bcd895ac827e"
  },
  {
    "url": "blog/skepticism/2018/09/02/jw/index.html",
    "revision": "73264446da11c2810d773deddf587dc6"
  },
  {
    "url": "blog/skepticism/2018/09/02/sen/index.html",
    "revision": "346b90b798db348c47cb6e701c655627"
  },
  {
    "url": "blog/skepticism/2018/09/16/1080/index.html",
    "revision": "fcc7b5b22a202dd395e6e509baeac160"
  },
  {
    "url": "blog/skepticism/2018/09/16/church/index.html",
    "revision": "3d352f810da9d80112c0ee632e21a549"
  },
  {
    "url": "blog/skepticism/2018/09/16/index.html",
    "revision": "11fbc04bfcecf7b560608732c95d12f0"
  },
  {
    "url": "blog/skepticism/2018/09/16/jones/index.html",
    "revision": "e300073ad41fd8002f76fa30e6353cb7"
  },
  {
    "url": "blog/skepticism/2018/09/16/scammers/index.html",
    "revision": "8e649ad0c42faa306fc48741931fb64d"
  },
  {
    "url": "blog/skepticism/2018/09/30/index.html",
    "revision": "ba534dc10e06ec30a410037b787d0ab9"
  },
  {
    "url": "blog/skepticism/2018/09/30/jw/index.html",
    "revision": "72ba53eac30626af22d85f62eb91656f"
  },
  {
    "url": "blog/skepticism/2018/09/30/oto/index.html",
    "revision": "597b489bcfee978d6a50fa31dffedfa8"
  },
  {
    "url": "blog/skepticism/2018/09/30/who/index.html",
    "revision": "9cc0e9ea41b4593e4ef158aa3e3b08b0"
  },
  {
    "url": "blog/skepticism/2018/09/index.html",
    "revision": "e9112e510c91e7d26be79287c1383fdc"
  },
  {
    "url": "blog/skepticism/2018/10/14/hacked/index.html",
    "revision": "a04b09c6bebefe2cb3a6ba1f0536efa6"
  },
  {
    "url": "blog/skepticism/2018/10/14/index.html",
    "revision": "912bf4bf362a5257f39e8f9a72fd3528"
  },
  {
    "url": "blog/skepticism/2018/10/14/kangen/index.html",
    "revision": "ef23f299f901e6bd30aff0661ae2b104"
  },
  {
    "url": "blog/skepticism/2018/10/14/pakistan/index.html",
    "revision": "2594939f180d07a3d0170976d409df6b"
  },
  {
    "url": "blog/skepticism/2018/10/14/sarah/index.html",
    "revision": "312956350c2f6babbbb90bb254a86043"
  },
  {
    "url": "blog/skepticism/2018/10/28/blasphemy/index.html",
    "revision": "fc599b77b9d7f851fcc91bbd7f198977"
  },
  {
    "url": "blog/skepticism/2018/10/28/hrv/index.html",
    "revision": "84cf71ff1f24923447b960791a4b43cb"
  },
  {
    "url": "blog/skepticism/2018/10/28/index.html",
    "revision": "0a597f2af552e905c1786c07fb3a43e9"
  },
  {
    "url": "blog/skepticism/2018/10/28/jesus/index.html",
    "revision": "9cfa165df24d4c352cbd12b24c189a3f"
  },
  {
    "url": "blog/skepticism/2018/10/28/natural/index.html",
    "revision": "67e8d16c34de3fc793ae6c596e685ea5"
  },
  {
    "url": "blog/skepticism/2018/10/index.html",
    "revision": "3b71742994a72d8013cf34a7d39b91ca"
  },
  {
    "url": "blog/skepticism/2018/11/04/bibi/index.html",
    "revision": "74cd943aebbc6f3a84e0690d6deb95ce"
  },
  {
    "url": "blog/skepticism/2018/11/04/index.html",
    "revision": "d77f9d4c4c9dd4a38ac4b3f1ccdeca87"
  },
  {
    "url": "blog/skepticism/2018/11/04/jesus/index.html",
    "revision": "796cb9183fc3053a0a36fc87c54360fb"
  },
  {
    "url": "blog/skepticism/2018/11/04/obdii/index.html",
    "revision": "b3a67f753923c746e9e63f7ea4e9c8db"
  },
  {
    "url": "blog/skepticism/2018/11/04/sleepdrops/index.html",
    "revision": "fc0e6ac5dc9bd384f8651b515de43923"
  },
  {
    "url": "blog/skepticism/2018/11/index.html",
    "revision": "6a0886d1d00474a9fd683cea0a3cad87"
  },
  {
    "url": "blog/skepticism/2018/12/02/ark/index.html",
    "revision": "26b2488e186678e89096eac58a2a3844"
  },
  {
    "url": "blog/skepticism/2018/12/02/green/index.html",
    "revision": "e807e85600ec7e313df12351976d92b6"
  },
  {
    "url": "blog/skepticism/2018/12/02/index.html",
    "revision": "801be82002eabcec36ee9decfd91718c"
  },
  {
    "url": "blog/skepticism/2018/12/02/ri/index.html",
    "revision": "f90a9a4335ded5bd77d9ad711ac0654a"
  },
  {
    "url": "blog/skepticism/2018/12/16/blasphemy/index.html",
    "revision": "badb5a4865643b60c485a66f76e16c21"
  },
  {
    "url": "blog/skepticism/2018/12/16/index.html",
    "revision": "b10f165d2e4ac19c11f061a91012dd45"
  },
  {
    "url": "blog/skepticism/2018/12/16/sleepdrops/index.html",
    "revision": "4a64e837979ad9ea66822272e6b73529"
  },
  {
    "url": "blog/skepticism/2018/12/16/tekiri/index.html",
    "revision": "fa7122233cecb5b51e63ab05217c813d"
  },
  {
    "url": "blog/skepticism/2018/12/index.html",
    "revision": "cadba27b8a4aaead2ac484697b9a011a"
  },
  {
    "url": "blog/skepticism/2018/index.html",
    "revision": "5b644d1a382d73dc553fa9dc7d0952c0"
  },
  {
    "url": "blog/skepticism/index.html",
    "revision": "30ae68bea35139941095eda2f53ebccf"
  },
  {
    "url": "blog/tag/index.html",
    "revision": "0b65e1e19357dd57b6e94f37cc712945"
  },
  {
    "url": "contact/index.html",
    "revision": "ee29f8850c34cbed6f1a22e5f17a78b9"
  },
  {
    "url": "cv/cover/index.html",
    "revision": "a116fda32a7ec798f3246b19be15c893"
  },
  {
    "url": "cv/full.html",
    "revision": "6cbed25f6f4a0ca342fd41fd6acb755b"
  },
  {
    "url": "cv/full/index.html",
    "revision": "40adb908ce4666e1df292c61a1a9492a"
  },
  {
    "url": "cv/index.html",
    "revision": "d5f67a5a719ae047e6fbef0e76939c36"
  },
  {
    "url": "cv/short.html",
    "revision": "4e574d9bb9538d3330fb93b7c229df15"
  },
  {
    "url": "googlee25d0c06da891164.html",
    "revision": "0defe75660212f417b90c5affcd03380"
  },
  {
    "url": "index.html",
    "revision": "5fdb96958221a863ae98517582cc99d4"
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
    "revision": "9fd91b102b9a11d2151dfe474485173f"
  },
  {
    "url": "media/me/index.html",
    "revision": "42c04f61a889ed7e7db237f0aaee96ab"
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
    "revision": "9c9391a29a1ca36a174d5292d2f33d7a"
  },
  {
    "url": "status/index.html",
    "revision": "e9968962d558675351a00d6042f24475"
  },
  {
    "url": "status/steam/index.html",
    "revision": "be0c3ccea284eb3a7a10adab3429c56f"
  },
  {
    "url": "status/twitter/index.html",
    "revision": "6c7ede390b9b89e9a81153a75dc88add"
  },
  {
    "url": "status/wikipedia/index.html",
    "revision": "92854f85961a1db80adc12616e2ddec7"
  },
  {
    "url": "test/index.html",
    "revision": "19a664694b35fe10b644688b62da2db9"
  },
  {
    "url": "test/webcam/index.html",
    "revision": "41e1a972ffe28387b88f9d80ce00bd1e"
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
