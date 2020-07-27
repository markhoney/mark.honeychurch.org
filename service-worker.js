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
    "revision": "991812b747f4030725661aa1f4b58e55"
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
    "revision": "e96ad2cc229fa21d415f818875fce864"
  },
  {
    "url": "assets/js/100.js",
    "revision": "7c3d6aefddf7db2c3a3f5f9a79f30083"
  },
  {
    "url": "assets/js/101.js",
    "revision": "8b84d69784d3a179ee99a15e799eeb52"
  },
  {
    "url": "assets/js/102.js",
    "revision": "0e1e52e4b1fa7f9f1050275f51d89bd3"
  },
  {
    "url": "assets/js/103.js",
    "revision": "4d45adb7cca40e3b04cbf3c42f31c218"
  },
  {
    "url": "assets/js/104.js",
    "revision": "b2ce45d20af7920025300962338a3c6f"
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
    "revision": "6883ae9d881baa7c1267394d494b98fa"
  },
  {
    "url": "assets/js/118.js",
    "revision": "aa2c9fc9f8f48aa2c1bb43a57158e80f"
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
    "revision": "ea900e1edb8e96ccf442d7e7d9ffd4e7"
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
    "revision": "787f59efdf121a1a0a18ce35c0ff1734"
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
    "revision": "c1ac75627e9ddb01d2a8be4e830c1e98"
  },
  {
    "url": "assets/js/173.js",
    "revision": "beadc075786bb491aad185b86fa1f3eb"
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
    "revision": "78845efbc44fd87a35085d6ba22293aa"
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
    "revision": "ee0a0a777df49140ebd38c481b46112e"
  },
  {
    "url": "assets/js/192.js",
    "revision": "c1e2a1adf03f1987524eb8fc70ec80dc"
  },
  {
    "url": "assets/js/193.js",
    "revision": "c0995d2909e836582f9a0f6d3380b2ba"
  },
  {
    "url": "assets/js/194.js",
    "revision": "23f191f78736eeb3817e3383e8ffc71c"
  },
  {
    "url": "assets/js/195.js",
    "revision": "df453d7c94c72d60aed48aa4664dc407"
  },
  {
    "url": "assets/js/196.js",
    "revision": "59b7380eae6e28d2317a4c8e69b0bbf6"
  },
  {
    "url": "assets/js/197.js",
    "revision": "03948873b34c66d5253000d76091f2e7"
  },
  {
    "url": "assets/js/198.js",
    "revision": "159f5a62940ef6f97b001d5bd66bad52"
  },
  {
    "url": "assets/js/199.js",
    "revision": "26ca568cd505c189dcc0216fd7b83388"
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
    "revision": "a1a1b745226fdd122103060a62183ff4"
  },
  {
    "url": "assets/js/201.js",
    "revision": "42efa945671538c139aca776ce242425"
  },
  {
    "url": "assets/js/202.js",
    "revision": "8cb3ee03bc77a418c51631af4bf3963a"
  },
  {
    "url": "assets/js/203.js",
    "revision": "b5157e85ecc363c4f4b2024df1db2a98"
  },
  {
    "url": "assets/js/204.js",
    "revision": "9662090a7d6729e0e6185c6761fd643a"
  },
  {
    "url": "assets/js/205.js",
    "revision": "f82c400351215d93654c169e32230f02"
  },
  {
    "url": "assets/js/206.js",
    "revision": "e4bbc25e7d1ed4581618c0cc90f81e6c"
  },
  {
    "url": "assets/js/207.js",
    "revision": "c7471c1e186837269193e3b1da0a2ac7"
  },
  {
    "url": "assets/js/208.js",
    "revision": "e741c5e01e1022a6f49e694b5bf2e270"
  },
  {
    "url": "assets/js/209.js",
    "revision": "dd1c95cb3b8ed284e12b466877ff597e"
  },
  {
    "url": "assets/js/21.js",
    "revision": "43bf007c3bd2de3029a6c4721ac62b76"
  },
  {
    "url": "assets/js/210.js",
    "revision": "b2f9a042b325c90a40736ede1e72024d"
  },
  {
    "url": "assets/js/211.js",
    "revision": "ddffe1de3e6436be836fadee6ef01f20"
  },
  {
    "url": "assets/js/212.js",
    "revision": "cde4c824eacc25b11858330c23fa7067"
  },
  {
    "url": "assets/js/213.js",
    "revision": "047b6ff48d4252b0961cfdbfc3e63d11"
  },
  {
    "url": "assets/js/214.js",
    "revision": "a1b918f4f168e994f35265be7b194c12"
  },
  {
    "url": "assets/js/215.js",
    "revision": "cfea4ee14a48d46a70d02cf7ae48640d"
  },
  {
    "url": "assets/js/216.js",
    "revision": "37188a40cc64717dd4b8bf686bcd9fa6"
  },
  {
    "url": "assets/js/217.js",
    "revision": "08773aec9d9b44731b2e448ec4b97d1a"
  },
  {
    "url": "assets/js/218.js",
    "revision": "28d114655b5d491780a2d1b067e14741"
  },
  {
    "url": "assets/js/219.js",
    "revision": "1d435668ff0e6f052c4fac64cc1d47dc"
  },
  {
    "url": "assets/js/22.js",
    "revision": "7999b93e27077d733c4a05eb87ac6243"
  },
  {
    "url": "assets/js/220.js",
    "revision": "0b3a61e783b58dd5f5f50a2cacc44087"
  },
  {
    "url": "assets/js/221.js",
    "revision": "4603c61ea4f8ab26adf1a4abb0d5e63e"
  },
  {
    "url": "assets/js/222.js",
    "revision": "e992a3e0a5597cd92228f309f341547c"
  },
  {
    "url": "assets/js/223.js",
    "revision": "760292d5280dd803c8bdf613378a2d0e"
  },
  {
    "url": "assets/js/224.js",
    "revision": "96402fe12d6ed06130aeb0b053a2b38e"
  },
  {
    "url": "assets/js/225.js",
    "revision": "0e87bc25470cf92a708f65bb3c604a81"
  },
  {
    "url": "assets/js/226.js",
    "revision": "03ad1a3bffbb0af5148906fe797023bb"
  },
  {
    "url": "assets/js/227.js",
    "revision": "daef1d918302e7ffbd8eec2ed599f1e2"
  },
  {
    "url": "assets/js/228.js",
    "revision": "120b35fdb310916e7980f73c492da2d0"
  },
  {
    "url": "assets/js/229.js",
    "revision": "15ffa2b00d01550511415dfd97a23af3"
  },
  {
    "url": "assets/js/23.js",
    "revision": "7e929c8dc1a336c750785c65cc92d226"
  },
  {
    "url": "assets/js/230.js",
    "revision": "51350e77c26ec52f053c712f70e19f31"
  },
  {
    "url": "assets/js/231.js",
    "revision": "92bfc9837bf4cfdde48c6a73cbd9f10b"
  },
  {
    "url": "assets/js/232.js",
    "revision": "848431a16e10a317b80033311f142ac1"
  },
  {
    "url": "assets/js/233.js",
    "revision": "d8152f3854bc83897ea081a95465a9f4"
  },
  {
    "url": "assets/js/234.js",
    "revision": "4b4a6c3232e958ca4c488aad920b0750"
  },
  {
    "url": "assets/js/235.js",
    "revision": "386ae5d65562ecc8c63ef01d4f5e103a"
  },
  {
    "url": "assets/js/236.js",
    "revision": "9e6c0ec68d6b1f75b1fcb3695e14cc6b"
  },
  {
    "url": "assets/js/237.js",
    "revision": "06abd56592566787805e7c16c9075f63"
  },
  {
    "url": "assets/js/238.js",
    "revision": "a413ada9b5d5e3e5ce444d35601241e3"
  },
  {
    "url": "assets/js/239.js",
    "revision": "1ef4a43e17fd775afdbe1079e80d1e68"
  },
  {
    "url": "assets/js/24.js",
    "revision": "1fe4c771fe3766a5c1afa905572ab232"
  },
  {
    "url": "assets/js/240.js",
    "revision": "bb3f68bd8e2e193475d3137cc04e93f7"
  },
  {
    "url": "assets/js/241.js",
    "revision": "cc00c04411e3421462cca5da7826afe8"
  },
  {
    "url": "assets/js/242.js",
    "revision": "76f6872fc7840e57fe873bb8e01eafc0"
  },
  {
    "url": "assets/js/243.js",
    "revision": "90b6f9b692945084e3764b8e4bd0096f"
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
    "revision": "26ce1872e2fad602565fcbdd3ecae3bd"
  },
  {
    "url": "assets/js/255.js",
    "revision": "eec7767573c91f74d8dbdda74c58fe46"
  },
  {
    "url": "assets/js/256.js",
    "revision": "e3eb5df444dcd64a66be971cb11a1951"
  },
  {
    "url": "assets/js/257.js",
    "revision": "31f8f4c4535877884d106b370cd59a56"
  },
  {
    "url": "assets/js/258.js",
    "revision": "f1c5c333cb639c904d3376b1f788476e"
  },
  {
    "url": "assets/js/259.js",
    "revision": "a7bdfad30bcdeefebd8131ed75a026a5"
  },
  {
    "url": "assets/js/26.js",
    "revision": "ffe596f25c197868566870e6cb5e712b"
  },
  {
    "url": "assets/js/260.js",
    "revision": "fbc21188d03e6d962ed3a005bbe99fb6"
  },
  {
    "url": "assets/js/261.js",
    "revision": "b27c748b4414ccbe88fb8d0eabda1161"
  },
  {
    "url": "assets/js/262.js",
    "revision": "13a3a385bed9a24f8632781ca89dd7b0"
  },
  {
    "url": "assets/js/263.js",
    "revision": "deec7835f0c998b482ada3d7d0bebf76"
  },
  {
    "url": "assets/js/264.js",
    "revision": "b2100c0c7fe863f45b94c10accf44a07"
  },
  {
    "url": "assets/js/265.js",
    "revision": "426512f321b8679690a7c10098acfcfa"
  },
  {
    "url": "assets/js/266.js",
    "revision": "f34b840b5c3ba2d7134cd953cb6e094a"
  },
  {
    "url": "assets/js/267.js",
    "revision": "195355820186be0c79bd834eac53fa64"
  },
  {
    "url": "assets/js/268.js",
    "revision": "ec7a30990f30aef39d22147e861afc5d"
  },
  {
    "url": "assets/js/269.js",
    "revision": "3a1f2aca3b2d7565027f04111c34b716"
  },
  {
    "url": "assets/js/27.js",
    "revision": "a94cd44d1465ca45b8de8bb9f6277a8a"
  },
  {
    "url": "assets/js/270.js",
    "revision": "d5fe3cb4c7e613f176194e10ec58c236"
  },
  {
    "url": "assets/js/271.js",
    "revision": "0e201ec0c9708a0483fcd2d6df52aef2"
  },
  {
    "url": "assets/js/272.js",
    "revision": "7f5afd91d04ef81ede9e476e650991d1"
  },
  {
    "url": "assets/js/273.js",
    "revision": "f679b19fc334f43ef5484f0f728cd54d"
  },
  {
    "url": "assets/js/274.js",
    "revision": "27c844460d674d966bfc1b77283f5fe0"
  },
  {
    "url": "assets/js/275.js",
    "revision": "bf1e66fad235b374f68bd2ccf37add14"
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
    "revision": "8675fda388d78576abbb511b0b3109e1"
  },
  {
    "url": "assets/js/29.js",
    "revision": "77d0270c62be757c89826c003abbd7a1"
  },
  {
    "url": "assets/js/290.js",
    "revision": "56df38d08ebc761c04c82b4000cdd7c8"
  },
  {
    "url": "assets/js/291.js",
    "revision": "6a5f673b74309efc57efba6bd24bbf2c"
  },
  {
    "url": "assets/js/292.js",
    "revision": "5004136ba8a9110dd9426d9b1a85ef76"
  },
  {
    "url": "assets/js/293.js",
    "revision": "e52a76be4029fccf4df33ad405e3fe74"
  },
  {
    "url": "assets/js/294.js",
    "revision": "f538999cc9f9a00a7300e0c788ea6ddc"
  },
  {
    "url": "assets/js/295.js",
    "revision": "2baffba7f79e85cc653db5081fac9875"
  },
  {
    "url": "assets/js/296.js",
    "revision": "8314ea51014a00230aef8a13f5875033"
  },
  {
    "url": "assets/js/297.js",
    "revision": "d24fdf2d27820a641d16759bfe7b9fd3"
  },
  {
    "url": "assets/js/298.js",
    "revision": "6efab8250ed6f02a5e7249bf4625a05b"
  },
  {
    "url": "assets/js/299.js",
    "revision": "295ebef2b270b5a8055d3d0db51f1b6f"
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
    "revision": "bcf38b9110cdc068c4dfcc856f28ef81"
  },
  {
    "url": "assets/js/301.js",
    "revision": "5ede75f3f236c52e5e38d120b0eafdde"
  },
  {
    "url": "assets/js/302.js",
    "revision": "74d7784eb94b24a994bba6706a940103"
  },
  {
    "url": "assets/js/303.js",
    "revision": "5f29fc395247d4ab638e334057a06202"
  },
  {
    "url": "assets/js/304.js",
    "revision": "6471848fa07d8f1d4bdfed5c7badd891"
  },
  {
    "url": "assets/js/305.js",
    "revision": "a758e66a767544ca91663a3c88a39c53"
  },
  {
    "url": "assets/js/306.js",
    "revision": "77a35c17d42a631ec6826e5e86bc6c68"
  },
  {
    "url": "assets/js/307.js",
    "revision": "9485fbea43ffd48ed5195278dcc28b13"
  },
  {
    "url": "assets/js/308.js",
    "revision": "dcea6cf7da1bf077b52ff32a3c48fdf5"
  },
  {
    "url": "assets/js/309.js",
    "revision": "9556d95ae25a5d251f63454af118d146"
  },
  {
    "url": "assets/js/31.js",
    "revision": "d1823810866061ba2ca3ea674d28410e"
  },
  {
    "url": "assets/js/310.js",
    "revision": "732a620304051563a0a276278edeaf3a"
  },
  {
    "url": "assets/js/311.js",
    "revision": "258b46d2dc7bc2e9d573a52b2ffc4577"
  },
  {
    "url": "assets/js/312.js",
    "revision": "5a32d05c8434c76b994315f066796849"
  },
  {
    "url": "assets/js/313.js",
    "revision": "486418fcd62eed7aeaf3c0f2d080355c"
  },
  {
    "url": "assets/js/314.js",
    "revision": "bd3f690c6cd0b838b087c643f2306ba2"
  },
  {
    "url": "assets/js/315.js",
    "revision": "96e64d5199fbe0f80281e52b1a87bfe7"
  },
  {
    "url": "assets/js/316.js",
    "revision": "b73c766151aa5a63167ea1f73181c625"
  },
  {
    "url": "assets/js/317.js",
    "revision": "5af6e9d7165dbb2489360503c7382c3b"
  },
  {
    "url": "assets/js/318.js",
    "revision": "c0ff2921c22c1de7044ce75ec4c6b13a"
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
    "revision": "38e0ece0a1c69b7f8c2330e58f424057"
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
    "revision": "10668d9d6bc58ad76e6629a5035cbc11"
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
    "revision": "ac265baa318c257e65c8969a5a93632a"
  },
  {
    "url": "assets/js/353.js",
    "revision": "6edf584796cf61fc5a21d2181f776ddf"
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
    "revision": "b311fc11bd8e4829158b9554c9741f79"
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
    "revision": "b6ced4678f90734ca9f8f9d42ff16a99"
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
    "revision": "cff0a8329c28be9cc7f76d92afe9ac76"
  },
  {
    "url": "assets/js/364.js",
    "revision": "6056fdca0f4e50edec2acab12e914fa9"
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
    "revision": "2be73f99a3039d3c444310560e5c188e"
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
    "revision": "784be7bb04247be58246ecb21fb86026"
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
    "revision": "57ce771caf06663643e3c44e91c12a7e"
  },
  {
    "url": "assets/js/377.js",
    "revision": "72b5ab4623913486a2942ebee7c0f30f"
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
    "revision": "6b0bfce3479ca8f872bc9c8fe37eb302"
  },
  {
    "url": "assets/js/385.js",
    "revision": "e8ab38b38651f9a4858076df34f3b729"
  },
  {
    "url": "assets/js/386.js",
    "revision": "d1ad3b209126e9edc9171f89e0ca966b"
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
    "revision": "840c85035fb029bf13261d80edb16750"
  },
  {
    "url": "assets/js/404.js",
    "revision": "d720c532351b03db8f4bc67886699cde"
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
    "revision": "eb6c0795cea97efbb74533278f560ad4"
  },
  {
    "url": "assets/js/418.js",
    "revision": "dc6c286fdd98e002b4e1f767b61a9575"
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
    "revision": "0781700cbe8aeee98976868e5d0c84bc"
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
    "revision": "2dbd4bc67b6bf52c769cd32e41b8ee9e"
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
    "revision": "58d9ecf55895ed138f702ec71814a1f8"
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
    "revision": "19167847a565ccb443af03ebefbd5637"
  },
  {
    "url": "assets/js/469.js",
    "revision": "358f8743baf7c7a0b9a58c1001e8f402"
  },
  {
    "url": "assets/js/47.js",
    "revision": "45103379877d08f0ecd9c8ead370b987"
  },
  {
    "url": "assets/js/470.js",
    "revision": "e96c0ddfbbbbc0939c3431f7442aa821"
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
    "revision": "879c46f8fe5aa56209149c68210e75ec"
  },
  {
    "url": "assets/js/479.js",
    "revision": "601d7380e1042e2397915bfd005aa70e"
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
    "revision": "723b93db8c4f16367c68c6e0fa7e7ac0"
  },
  {
    "url": "assets/js/490.js",
    "revision": "b321d73fbcfd56fee6efe47702b95427"
  },
  {
    "url": "assets/js/491.js",
    "revision": "a0ac7ab5c484db6b1b7b300cf4cb864e"
  },
  {
    "url": "assets/js/492.js",
    "revision": "a27edb62d7324a8cf4f473c9ab2cd8c5"
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
    "revision": "3e80b258492014a48a7feb354b92a78e"
  },
  {
    "url": "assets/js/503.js",
    "revision": "e1d7b1dafc2b601fd6475b52b4f92c22"
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
    "revision": "98f83278fa9673a445edfe7479d44053"
  },
  {
    "url": "assets/js/513.js",
    "revision": "ce815af338ad5b81ed097a7e8a1d1fe7"
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
    "revision": "7659f63b27cda7c2e79349764a7d4fe3"
  },
  {
    "url": "assets/js/519.js",
    "revision": "5fd74e75973263d4f0491b27312452f2"
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
    "revision": "b659a668ec5a24bc2d1b0ee1850084e9"
  },
  {
    "url": "assets/js/533.js",
    "revision": "f9400fb62d0b79414bdc940633652154"
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
    "revision": "04a5dca80e8ab8ce4c194f987cc2c852"
  },
  {
    "url": "assets/js/54.js",
    "revision": "fc5f10fe6557b8a08e71f36ad0066bbf"
  },
  {
    "url": "assets/js/540.js",
    "revision": "87d263c43e92a970484c7cdf971f30e8"
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
    "revision": "ccc853b2929faaf5b0a4abd911bee93a"
  },
  {
    "url": "assets/js/549.js",
    "revision": "a26ef4a606c0b5e77a49d431ebbb6431"
  },
  {
    "url": "assets/js/55.js",
    "revision": "3aca32ffe6e909308924f2ee54c403c9"
  },
  {
    "url": "assets/js/550.js",
    "revision": "d72ba2e07d8c2b2c2c711dc9152607b8"
  },
  {
    "url": "assets/js/551.js",
    "revision": "0f8585e6780528e54a17b6fbb2564b92"
  },
  {
    "url": "assets/js/552.js",
    "revision": "7d9383466c391d1017a7fda6d6f36ae9"
  },
  {
    "url": "assets/js/553.js",
    "revision": "e4e0c3d9877651fcf96cf676cbaeac90"
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
    "revision": "e21d04ab167c21e8f6fd1992ce594edd"
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
    "revision": "f07d508d69cee2205180dcded7a5d664"
  },
  {
    "url": "assets/js/560.js",
    "revision": "63b5d19bc5cd5514f5bde32fbf6a37b4"
  },
  {
    "url": "assets/js/561.js",
    "revision": "00eda83c9284ce2842a9294743bd01f3"
  },
  {
    "url": "assets/js/562.js",
    "revision": "b624d184ee8f2786f7ace0f66ae3ff15"
  },
  {
    "url": "assets/js/563.js",
    "revision": "1670c40c6943031a2b2f77504e55e420"
  },
  {
    "url": "assets/js/564.js",
    "revision": "2afac00015a01113562b3f1f4c8eb49e"
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
    "revision": "f1616a65c91025ae0bb6a84e8c004ac2"
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
    "revision": "a8a802518d11af69a0b5b394bf37f98c"
  },
  {
    "url": "assets/js/573.js",
    "revision": "5f8002a77bee2be3c6eae63d40366909"
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
    "revision": "819b4739dfcac60ae538d9e66072c0a1"
  },
  {
    "url": "assets/js/578.js",
    "revision": "465d0bb21fafa8532a31ed1f907b931c"
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
    "revision": "c19cf8e21d6357e524cb86992496d5e4"
  },
  {
    "url": "assets/js/582.js",
    "revision": "2209ec93c35567360627118c2690524d"
  },
  {
    "url": "assets/js/583.js",
    "revision": "5c39246d0a773c333d3f3a414d2e2606"
  },
  {
    "url": "assets/js/584.js",
    "revision": "e5f0d0407e0adc334b75ba41384d5554"
  },
  {
    "url": "assets/js/585.js",
    "revision": "603313dac012172fee03441b93bbdc8f"
  },
  {
    "url": "assets/js/586.js",
    "revision": "feb7d2504d6715ed407cd693bec7e523"
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
    "revision": "ecf727bf1227ecb7558a4ccdf396cb80"
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
    "revision": "47d9b8268c5ccd52defb8efe1f398979"
  },
  {
    "url": "assets/js/72.js",
    "revision": "919ca1b25867ac91b15cba85f9a945ce"
  },
  {
    "url": "assets/js/73.js",
    "revision": "103de2dba5e18f77eb2f835aa3ee637d"
  },
  {
    "url": "assets/js/74.js",
    "revision": "29ef1dcd44c4c3dc9ab97b963d060e7e"
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
    "revision": "e2ccbf2238a02470365e3a61849bd2bb"
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
    "revision": "3b0594f1c6a820e41ab5b057cc8d332d"
  },
  {
    "url": "assets/js/9.js",
    "revision": "59f9cdca0fae2673b85ba4216bc2a7ab"
  },
  {
    "url": "assets/js/90.js",
    "revision": "292db56fa90000aa003a06255e6d3dcd"
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
    "revision": "22f9511fccc17b1b2c1ccf45a2d45633"
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
    "revision": "af2c93677c327898ae0ffc10978ef1e6"
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
    "revision": "aa5de404d6fd0a7ac8dfe823c29fcc9b"
  },
  {
    "url": "assets/js/styles.js",
    "revision": "22f22b49cc901aa95826401f7ce0930c"
  },
  {
    "url": "blog/category/index.html",
    "revision": "4e38e133785c12acd6cd300221dafca6"
  },
  {
    "url": "blog/code/artists/index.html",
    "revision": "d408650525312f4e0e5e3a89e90e70b4"
  },
  {
    "url": "blog/code/asa.sbh.nz/index.html",
    "revision": "4affbe3dc73b9c653d496ef160165776"
  },
  {
    "url": "blog/code/decrypt/index.html",
    "revision": "1c3ad0530bdae312dae16a05b7c026fe"
  },
  {
    "url": "blog/code/divider/index.html",
    "revision": "df41c5b5b46a3005b7131bc137c7460d"
  },
  {
    "url": "blog/code/first/index.html",
    "revision": "0c25522d14836a5f86e235d680bffcec"
  },
  {
    "url": "blog/code/fishbarrel/index.html",
    "revision": "27914e056d4a53b27bd2b0ba3dc0acc6"
  },
  {
    "url": "blog/code/graphs/index.html",
    "revision": "78dab8ed0d4d2e3b63456a7618ebdd8a"
  },
  {
    "url": "blog/code/indent/index.html",
    "revision": "ff58e4254b6ebc1f8e4aaa70c12bfaa8"
  },
  {
    "url": "blog/code/index.html",
    "revision": "27deca46ff8ef45df05b5f336a87e465"
  },
  {
    "url": "blog/code/ingoa.nz/index.html",
    "revision": "8922d68e5295bd2050cc9ee3bf63dcfb"
  },
  {
    "url": "blog/code/nzondemand/index.html",
    "revision": "520740916aadd3e9bcd299d91d116c5e"
  },
  {
    "url": "blog/code/picard/index.html",
    "revision": "d6e77aece23a407bd2b2e77f40810839"
  },
  {
    "url": "blog/code/qr/index.html",
    "revision": "680faa67adef39747d7d1ac8dc73f375"
  },
  {
    "url": "blog/code/readable/index.html",
    "revision": "a4b73800f68230b1921086ba1568024a"
  },
  {
    "url": "blog/code/tone/index.html",
    "revision": "16d0d842ceab35199170bbcff17daf5c"
  },
  {
    "url": "blog/code/war/index.html",
    "revision": "f7daa3ddd800797f2a06d11e1a9ce524"
  },
  {
    "url": "blog/code/website/index.html",
    "revision": "6899de0bb4b43277abc0357ceff3687f"
  },
  {
    "url": "blog/code/website/route/index.html",
    "revision": "cb3da6dd746ee1403a85127cf4d03eb3"
  },
  {
    "url": "blog/code/website/site/index.html",
    "revision": "2a9afa60f9a3f1be28ffb8ccba043691"
  },
  {
    "url": "blog/code/xmltv.co.nz/index.html",
    "revision": "e9208cbbb90cd331223191b6522ce78e"
  },
  {
    "url": "blog/howto/index.html",
    "revision": "2d57cb47bd1b8222c3c1affafdf65975"
  },
  {
    "url": "blog/howto/intel865/index.html",
    "revision": "a3740dfd131066b1fde747fae0878d65"
  },
  {
    "url": "blog/howto/ios/index.html",
    "revision": "08de0a74498e4e473d7cbd9035ac43f2"
  },
  {
    "url": "blog/howto/nexentastor/index.html",
    "revision": "0b7a23dfcf5baba27db874c408b02240"
  },
  {
    "url": "blog/howto/pcloadletter/index.html",
    "revision": "65daf2d54b02bbf44ed21a25c87e6031"
  },
  {
    "url": "blog/howto/raid5/index.html",
    "revision": "dd8b426ab0626d94f85869e7a979a23f"
  },
  {
    "url": "blog/index.html",
    "revision": "8a2f7e4dd0bff4256c381278effe7cc0"
  },
  {
    "url": "blog/life/anotheryear/index.html",
    "revision": "f318cfd04b98dc81e4e84ad7d787ea5e"
  },
  {
    "url": "blog/life/arcade/index.html",
    "revision": "016ea1467500548250c42531a099b62c"
  },
  {
    "url": "blog/life/birthday/index.html",
    "revision": "68ba2f1b84566c8b8b18d278157ea7dd"
  },
  {
    "url": "blog/life/blasphemy/index.html",
    "revision": "dcdf42d298e2b9dae5b158ca884eab39"
  },
  {
    "url": "blog/life/blogger/index.html",
    "revision": "9526cea3b218c5a38d82a32c70a63206"
  },
  {
    "url": "blog/life/blurry/index.html",
    "revision": "dcf8de62180ea693f09c3bfd0e614b19"
  },
  {
    "url": "blog/life/busyday/index.html",
    "revision": "1fac07d0e4ec010409da457e604f2a1d"
  },
  {
    "url": "blog/life/domain/index.html",
    "revision": "6fa347727be6e54ae1ceed88199dff84"
  },
  {
    "url": "blog/life/exams/index.html",
    "revision": "29a47ed81b402346cada48f2a066a854"
  },
  {
    "url": "blog/life/food/index.html",
    "revision": "82c6dd664d20d82804cdb72afa3684e6"
  },
  {
    "url": "blog/life/glenview/index.html",
    "revision": "3e103e12baba92e5d7374450161530d2"
  },
  {
    "url": "blog/life/headlines/index.html",
    "revision": "6928846304dd7e782ad16ea3b784e1fe"
  },
  {
    "url": "blog/life/index.html",
    "revision": "b6ebfb0f90cd1bd49ae10c5b67941ba6"
  },
  {
    "url": "blog/life/jws/index.html",
    "revision": "41fa9c2348c361b0e2b7545a48fac385"
  },
  {
    "url": "blog/life/keyboard/index.html",
    "revision": "06f71fd3614d48837b53058c97f6b09e"
  },
  {
    "url": "blog/life/lpi201/index.html",
    "revision": "4ded231aa690331ba21e1cf7ab55cf60"
  },
  {
    "url": "blog/life/mashup/index.html",
    "revision": "2cb9db928597ed12b95c8ee14e239e66"
  },
  {
    "url": "blog/life/motorweb/index.html",
    "revision": "a71ecc6413d069f420af1fad7aa171e7"
  },
  {
    "url": "blog/life/nxe/index.html",
    "revision": "15b14df2f9d75ba8fd5e86b779e977ad"
  },
  {
    "url": "blog/life/plates/index.html",
    "revision": "3df23b8497acdebfc415c1733fbf9422"
  },
  {
    "url": "blog/life/queenstown/index.html",
    "revision": "509d9ede4968839ab1df712068b79b42"
  },
  {
    "url": "blog/life/racism/index.html",
    "revision": "fa7e3956d6ff4df1a84eb11b8d2edfef"
  },
  {
    "url": "blog/life/roads/index.html",
    "revision": "442a0c46bab0144d2f6bf2bc9b009de3"
  },
  {
    "url": "blog/life/roots/index.html",
    "revision": "82d522ba10b7d61ad21f69cb72c8fc18"
  },
  {
    "url": "blog/life/scare/index.html",
    "revision": "a29d4cd672eac3257071c462d263fe2c"
  },
  {
    "url": "blog/life/scary/index.html",
    "revision": "106d50f77111c9cbeb868c7e6c7a2b60"
  },
  {
    "url": "blog/life/seti/index.html",
    "revision": "e328be8a2dea996bbc14f697ab5ebd55"
  },
  {
    "url": "blog/life/skeptical/index.html",
    "revision": "52d786e9cd1c3f6d7382997b94e2e6fc"
  },
  {
    "url": "blog/life/skepticzone/index.html",
    "revision": "7ba378755c106b9051323f1ede8d18cb"
  },
  {
    "url": "blog/life/spam/index.html",
    "revision": "21a6c1c2e61e68b85e6919c35f87b041"
  },
  {
    "url": "blog/life/trademe/index.html",
    "revision": "72d5fca371f4090f21055c2ed8c7c6b7"
  },
  {
    "url": "blog/life/unforeseen/index.html",
    "revision": "0c2b1f468ba3c96535b779024861c904"
  },
  {
    "url": "blog/life/wobbly/index.html",
    "revision": "ecc70a03b964ab586f77945a26e686f3"
  },
  {
    "url": "blog/projects/ahs/index.html",
    "revision": "b0c0d76e9db006cfb7147d9aa37239d2"
  },
  {
    "url": "blog/projects/airbag/index.html",
    "revision": "2952408396fc869f4fafa5ba841cf451"
  },
  {
    "url": "blog/projects/ambilight/index.html",
    "revision": "9fc3c030d4e25f5a954c3ceb7b393acb"
  },
  {
    "url": "blog/projects/automation/index.html",
    "revision": "d337ca09de0d0d3db6ed0906333ffc10"
  },
  {
    "url": "blog/projects/eyes/index.html",
    "revision": "6d39a8bfb9001551b12c677708f75b93"
  },
  {
    "url": "blog/projects/glitch/index.html",
    "revision": "01a7858900aa037e986a4ef90ff18fe6"
  },
  {
    "url": "blog/projects/hotel/index.html",
    "revision": "487bbe67e7d583aa25e4bb3a92212721"
  },
  {
    "url": "blog/projects/index.html",
    "revision": "5c99610db26e1088a65f4710553b635f"
  },
  {
    "url": "blog/projects/it100/index.html",
    "revision": "8698fd192a5d80d92290feef7053ce73"
  },
  {
    "url": "blog/projects/microscope/index.html",
    "revision": "e5407ebeb0ae74543191284592930d82"
  },
  {
    "url": "blog/projects/mirror/index.html",
    "revision": "48b6e4ac5878718ae05eb07014e0ce07"
  },
  {
    "url": "blog/projects/picture/index.html",
    "revision": "50ccbb2381c46bf35b2c26cc4df20bf1"
  },
  {
    "url": "blog/projects/pizza/index.html",
    "revision": "6b2a105f1159dc7a7007d850991d9faf"
  },
  {
    "url": "blog/projects/podcast/index.html",
    "revision": "b2c0a06f072cafef6752c3ef01edbfa0"
  },
  {
    "url": "blog/projects/reflow/index.html",
    "revision": "b1a8272f662a3fea05a6a45875b03dd7"
  },
  {
    "url": "blog/projects/sandbox/index.html",
    "revision": "ec208f7634ea6252eeaff8aff57fde01"
  },
  {
    "url": "blog/projects/screens/index.html",
    "revision": "14e0f8cb2f93bf281285b244c86315b2"
  },
  {
    "url": "blog/projects/sky/index.html",
    "revision": "40062ac291e3fc9ae91f8eadb15bbb0a"
  },
  {
    "url": "blog/projects/starwars/index.html",
    "revision": "3165fe8c3fd9be4158e4876f65cc7287"
  },
  {
    "url": "blog/projects/xbox/index.html",
    "revision": "4710e8869b38750684ad235b49d401a6"
  },
  {
    "url": "blog/random/addresses/index.html",
    "revision": "5698c9b85591cfe4574a8f2a733b1e0c"
  },
  {
    "url": "blog/random/alphabet/index.html",
    "revision": "2275c03d58b40977610d5619b1fd5b43"
  },
  {
    "url": "blog/random/astrology/index.html",
    "revision": "4715560f57cd0886ae3ad1192e8000f1"
  },
  {
    "url": "blog/random/chicken/index.html",
    "revision": "565e52a09fb16f01a1ee699f92c3f557"
  },
  {
    "url": "blog/random/dns/index.html",
    "revision": "dd7bcd84e4038343d4059280882f4e3a"
  },
  {
    "url": "blog/random/evp/index.html",
    "revision": "f536024bdf43ae2560865217994946c1"
  },
  {
    "url": "blog/random/flip/index.html",
    "revision": "9a50a53a1b89e0d8bf5d48174ed7b725"
  },
  {
    "url": "blog/random/honeychurch/index.html",
    "revision": "7108b73e3731327eeed1f8be111c6e0f"
  },
  {
    "url": "blog/random/index.html",
    "revision": "104878ac72b5613892edc15c0c62a01b"
  },
  {
    "url": "blog/random/lottery/index.html",
    "revision": "941abf33df0e138494c2cf81b0c4df80"
  },
  {
    "url": "blog/random/music/index.html",
    "revision": "58f1b903ca63bbf4c039c9d36deb13ad"
  },
  {
    "url": "blog/random/octal/index.html",
    "revision": "57b9e44121c05aa280c395e7acf0bb58"
  },
  {
    "url": "blog/random/os/index.html",
    "revision": "f3e4c5c5faaad8e0f2feb70b32e4fc55"
  },
  {
    "url": "blog/random/propellers/index.html",
    "revision": "852b5f8495a2deef1874d97772ea3635"
  },
  {
    "url": "blog/random/robux/index.html",
    "revision": "e123599113ccb714dabd914bf1ca1520"
  },
  {
    "url": "blog/random/super/index.html",
    "revision": "44646767d2c9bd671378308291697ac0"
  },
  {
    "url": "blog/random/times/index.html",
    "revision": "ce456c1f2fedc36fc919457913c81c0f"
  },
  {
    "url": "blog/random/travel/index.html",
    "revision": "0380d0a843067c0e80a18ec5754315ad"
  },
  {
    "url": "blog/random/wilhelm/index.html",
    "revision": "49742bbfd82b5e5213450f42015eb342"
  },
  {
    "url": "blog/random/year/index.html",
    "revision": "c502d6fd93a6707a24cf19fe36ca2920"
  },
  {
    "url": "blog/skepticism/2015/08/16/asa/index.html",
    "revision": "777f3a87db46c56e7ff944d8c8ce825f"
  },
  {
    "url": "blog/skepticism/2015/08/16/awards/index.html",
    "revision": "353712a556d0d963f81fec3ab633f101"
  },
  {
    "url": "blog/skepticism/2015/08/16/bravo/index.html",
    "revision": "c1fb7242772e3f6816c3fd1e0ab25b03"
  },
  {
    "url": "blog/skepticism/2015/08/16/index.html",
    "revision": "563e199c425332bf3f833005d0a34117"
  },
  {
    "url": "blog/skepticism/2015/08/16/jim/index.html",
    "revision": "de164c29b6bc6349e50879f8aeaf0b4a"
  },
  {
    "url": "blog/skepticism/2015/08/16/naholo/index.html",
    "revision": "d261c09a2c4d454e958c304381472caf"
  },
  {
    "url": "blog/skepticism/2015/08/16/resene/index.html",
    "revision": "d61a35478e0972bf0e8ac92c13d40037"
  },
  {
    "url": "blog/skepticism/2015/08/index.html",
    "revision": "87452de8619f33b1af4e0079d013fb82"
  },
  {
    "url": "blog/skepticism/2015/09/20/gop/index.html",
    "revision": "36a0b42468ee802492f93b4b1c8f50b7"
  },
  {
    "url": "blog/skepticism/2015/09/20/ignobel/index.html",
    "revision": "5f0af2cc200be41ac4c84a1271bcbf09"
  },
  {
    "url": "blog/skepticism/2015/09/20/index.html",
    "revision": "6c76cea2357e0b0fb04b03fe7b8a7e1a"
  },
  {
    "url": "blog/skepticism/2015/09/20/supplements/index.html",
    "revision": "ab95f8b48449cb3a51c7c8702326b0a4"
  },
  {
    "url": "blog/skepticism/2015/09/27/ayahuasca/index.html",
    "revision": "6ed7db508007297c29b2b3ad731ef620"
  },
  {
    "url": "blog/skepticism/2015/09/27/drought/index.html",
    "revision": "30db78fd8668ab122cf5082d5eb7bcc9"
  },
  {
    "url": "blog/skepticism/2015/09/27/index.html",
    "revision": "bd3801fc98f7b4b005767b02de7cb3f2"
  },
  {
    "url": "blog/skepticism/2015/09/27/lama/index.html",
    "revision": "5901a9ce20033b64ced7e6f4a2f6808e"
  },
  {
    "url": "blog/skepticism/2015/09/27/moon/index.html",
    "revision": "561775bf1643d647b2467996f0b803f1"
  },
  {
    "url": "blog/skepticism/2015/09/27/scan/index.html",
    "revision": "4ffc8be06aa1829cdd820cca8f39d392"
  },
  {
    "url": "blog/skepticism/2015/09/index.html",
    "revision": "88bd0f83fb0ca246e0ce10b1f2f40fea"
  },
  {
    "url": "blog/skepticism/2015/10/04/ghost/index.html",
    "revision": "bebb75534c8548713cc72328e18d80d6"
  },
  {
    "url": "blog/skepticism/2015/10/04/haka/index.html",
    "revision": "9a9957847371d8cd800f913e2c802dca"
  },
  {
    "url": "blog/skepticism/2015/10/04/index.html",
    "revision": "8ab09c80744233487960fbb80c0e9a8f"
  },
  {
    "url": "blog/skepticism/2015/10/04/mars/index.html",
    "revision": "0ac4d50da5f74542f9145a8ae425182a"
  },
  {
    "url": "blog/skepticism/2015/10/04/pharmacy/index.html",
    "revision": "b5a6b733b6d161ba94abb61e81dc655f"
  },
  {
    "url": "blog/skepticism/2015/10/04/prostate/index.html",
    "revision": "4ccbc7983cc7054fbf1a1f6dc46cef8a"
  },
  {
    "url": "blog/skepticism/2015/10/11/armageddon/index.html",
    "revision": "4812bb62c93d6a4e4d1889de21cd053d"
  },
  {
    "url": "blog/skepticism/2015/10/11/climate/index.html",
    "revision": "828b791a8864d45b81e5d1065f97e6de"
  },
  {
    "url": "blog/skepticism/2015/10/11/ghost/index.html",
    "revision": "784de8afe627ae47729341e5f57df2de"
  },
  {
    "url": "blog/skepticism/2015/10/11/index.html",
    "revision": "306110540494399c5f95d6b09d81c5e7"
  },
  {
    "url": "blog/skepticism/2015/10/11/magnesleep/index.html",
    "revision": "e07842bb1815676e02e5f5d182978469"
  },
  {
    "url": "blog/skepticism/2015/10/11/nhs/index.html",
    "revision": "5a444c8a4a8a284960472062eaee6780"
  },
  {
    "url": "blog/skepticism/2015/10/11/prophet/index.html",
    "revision": "71749d41785507e31bd3c66416ac0414"
  },
  {
    "url": "blog/skepticism/2015/10/index.html",
    "revision": "59118b20f5c7e19799990ab9935044f4"
  },
  {
    "url": "blog/skepticism/2015/11/15/end/index.html",
    "revision": "95444dcc1a29e786933157b367673873"
  },
  {
    "url": "blog/skepticism/2015/11/15/index.html",
    "revision": "73c4c4d33c359478a160f27a3a8f9310"
  },
  {
    "url": "blog/skepticism/2015/11/index.html",
    "revision": "a0310631986c2495eb1890fb4f36f787"
  },
  {
    "url": "blog/skepticism/2015/12/13/astrology/index.html",
    "revision": "6931d4136e9e4f4c67cc662054ce7499"
  },
  {
    "url": "blog/skepticism/2015/12/13/cancer/index.html",
    "revision": "bdcf27bb70bc199e677f64f3cd7616cc"
  },
  {
    "url": "blog/skepticism/2015/12/13/chickenpox/index.html",
    "revision": "386c82cdccd03cd37e33698a0a51208b"
  },
  {
    "url": "blog/skepticism/2015/12/13/index.html",
    "revision": "3ad946b950296b3d5ed72e3f20408233"
  },
  {
    "url": "blog/skepticism/2015/12/13/osteopath/index.html",
    "revision": "79ee7768bbd682c830bd1ef10ede444f"
  },
  {
    "url": "blog/skepticism/2015/12/13/priest/index.html",
    "revision": "391310f44968c15e2412fb46f297eee6"
  },
  {
    "url": "blog/skepticism/2015/12/13/psychic/index.html",
    "revision": "44c27b251e1862362966bb6515d14194"
  },
  {
    "url": "blog/skepticism/2015/12/13/vaccines/index.html",
    "revision": "9a3f3ed8cb4e47e62a02e58b595c600c"
  },
  {
    "url": "blog/skepticism/2015/12/index.html",
    "revision": "878112f2383837b8e23ba31910cfb384"
  },
  {
    "url": "blog/skepticism/2015/index.html",
    "revision": "dbc43c28296bb83c5b7a6e306a15d2bd"
  },
  {
    "url": "blog/skepticism/2016/02/07/antioxidant/index.html",
    "revision": "877d72118765c5e75cd96b974799bc0c"
  },
  {
    "url": "blog/skepticism/2016/02/07/index.html",
    "revision": "04e43f517a2e1323d26d1832c36494bb"
  },
  {
    "url": "blog/skepticism/2016/02/07/kfc/index.html",
    "revision": "521c2d2aaf710b12fb17b5b68fdd4e86"
  },
  {
    "url": "blog/skepticism/2016/02/07/ph/index.html",
    "revision": "03d62a3e0e7c347aabee937dcac170f4"
  },
  {
    "url": "blog/skepticism/2016/02/07/sandy/index.html",
    "revision": "ade10536709a6dd29b1c2e70cbcb7ce4"
  },
  {
    "url": "blog/skepticism/2016/02/07/sarfati/index.html",
    "revision": "1135ae1e4a298c2a12b8859c642d4bd6"
  },
  {
    "url": "blog/skepticism/2016/02/07/trump/index.html",
    "revision": "79a496be3b031d88f4c104f2eb030639"
  },
  {
    "url": "blog/skepticism/2016/02/14/coins/index.html",
    "revision": "0e4eaf92569cf1b595111206fd4a11e5"
  },
  {
    "url": "blog/skepticism/2016/02/14/fast/index.html",
    "revision": "416e41d7db26f2928de65d658dc173ba"
  },
  {
    "url": "blog/skepticism/2016/02/14/fluoride/index.html",
    "revision": "d99286de00792e9873e6995aed66f6b1"
  },
  {
    "url": "blog/skepticism/2016/02/14/icke/index.html",
    "revision": "1f04712b3dbb2dd7788f943ef16a7af4"
  },
  {
    "url": "blog/skepticism/2016/02/14/index.html",
    "revision": "009131bf94ebb11b02c19a1317764705"
  },
  {
    "url": "blog/skepticism/2016/02/14/yeti/index.html",
    "revision": "770b5503ab69a34bd0718a0cf92a753c"
  },
  {
    "url": "blog/skepticism/2016/02/21/homeopathy/index.html",
    "revision": "17c5d73872aa21e6a34dd34d0927f72c"
  },
  {
    "url": "blog/skepticism/2016/02/21/index.html",
    "revision": "9fef010d367694e859235f029ded0ae9"
  },
  {
    "url": "blog/skepticism/2016/02/21/monster/index.html",
    "revision": "e83531c0b40563d21efebabe3c287dc8"
  },
  {
    "url": "blog/skepticism/2016/02/21/scalia/index.html",
    "revision": "7fc595c1c7ca27489c3ce81ff7eddb41"
  },
  {
    "url": "blog/skepticism/2016/02/21/shane/index.html",
    "revision": "65288f2adcee2377bc2cf309d5fb624f"
  },
  {
    "url": "blog/skepticism/2016/02/21/texas/index.html",
    "revision": "befd29e7a9ac91b9df12b761bdf28259"
  },
  {
    "url": "blog/skepticism/2016/02/28/acupuncture/index.html",
    "revision": "f84437096c0a0ea20ed94ee2d2da77a4"
  },
  {
    "url": "blog/skepticism/2016/02/28/fsm/index.html",
    "revision": "3822f93e59a47465226f26e7424db027"
  },
  {
    "url": "blog/skepticism/2016/02/28/index.html",
    "revision": "00e797e361e5bf40ed584c82dcb5bad7"
  },
  {
    "url": "blog/skepticism/2016/02/28/iv/index.html",
    "revision": "026b05a95afa5e92c939fcac9e419ff5"
  },
  {
    "url": "blog/skepticism/2016/02/28/natural/index.html",
    "revision": "d8d7add3bd69e7f5621a28202136bcfa"
  },
  {
    "url": "blog/skepticism/2016/02/28/talc/index.html",
    "revision": "8d3d586d5708ba345cdc934ddadc49fd"
  },
  {
    "url": "blog/skepticism/2016/02/index.html",
    "revision": "88a22bcbfde723de90435f58a37ad1f7"
  },
  {
    "url": "blog/skepticism/2016/03/13/herbs/index.html",
    "revision": "d9b2160dbdf54d80205bba9bbfd0fecd"
  },
  {
    "url": "blog/skepticism/2016/03/13/index.html",
    "revision": "3f2555afa2f2c84da51ff9a3b61a6d73"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandala/index.html",
    "revision": "6ad1a429ea0823d5ad6315af87e787fe"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandela/index.html",
    "revision": "710ac8bd366a06830c80a053f120f5a8"
  },
  {
    "url": "blog/skepticism/2016/03/13/spray/index.html",
    "revision": "75b9cd0aa4038fe4d0dc7e68fb592c8d"
  },
  {
    "url": "blog/skepticism/2016/03/index.html",
    "revision": "4504666eabf92b68e61c6bf4eeb04943"
  },
  {
    "url": "blog/skepticism/2016/04/17/charity/index.html",
    "revision": "8b221c62819d1425f8abbaeffc393b2d"
  },
  {
    "url": "blog/skepticism/2016/04/17/chiro/index.html",
    "revision": "4a4ea283d17b8a25e8258f96d76140f3"
  },
  {
    "url": "blog/skepticism/2016/04/17/fluoride/index.html",
    "revision": "3916d5bb2e45c0a96cfd801b771b786e"
  },
  {
    "url": "blog/skepticism/2016/04/17/index.html",
    "revision": "6e46eeadb61bc56de2832925454c9af3"
  },
  {
    "url": "blog/skepticism/2016/04/17/lotto/index.html",
    "revision": "4138352a39cbe4661eed79b563bf5b52"
  },
  {
    "url": "blog/skepticism/2016/04/17/mind/index.html",
    "revision": "6e987ed9c66dc76f2d70a3b7d1e9ea56"
  },
  {
    "url": "blog/skepticism/2016/04/17/whooping/index.html",
    "revision": "3758146b5ef510aec1bee69134ed38bb"
  },
  {
    "url": "blog/skepticism/2016/04/index.html",
    "revision": "efc3ddd2b73f5e5fbc59c7575ec6cc4f"
  },
  {
    "url": "blog/skepticism/2016/06/05/1080/index.html",
    "revision": "a44dba7fb44c3e704400940ac6c02e82"
  },
  {
    "url": "blog/skepticism/2016/06/05/acupuncture/index.html",
    "revision": "4d1d7a3818b901dc9166cf5a5ee6c136"
  },
  {
    "url": "blog/skepticism/2016/06/05/family/index.html",
    "revision": "ed58e92b69349f5aba51dbde828cd682"
  },
  {
    "url": "blog/skepticism/2016/06/05/index.html",
    "revision": "89620f3349a6cd2fa35cd6a2386d000c"
  },
  {
    "url": "blog/skepticism/2016/06/05/limbaugh/index.html",
    "revision": "5fee5ae235bcb89fd9e47cd5caf2f672"
  },
  {
    "url": "blog/skepticism/2016/06/12/bobby/index.html",
    "revision": "b81bc0b73636c27755e8135227c5954b"
  },
  {
    "url": "blog/skepticism/2016/06/12/climate/index.html",
    "revision": "c96f0df867ee2f63320495936b2c5a8a"
  },
  {
    "url": "blog/skepticism/2016/06/12/index.html",
    "revision": "100250a655a4c8e36995a85518997e8b"
  },
  {
    "url": "blog/skepticism/2016/06/12/pugh/index.html",
    "revision": "aacb3461f3e32f4d7734e4be1f575307"
  },
  {
    "url": "blog/skepticism/2016/06/12/savage/index.html",
    "revision": "47ec930618be67092c9d7356111c6e85"
  },
  {
    "url": "blog/skepticism/2016/06/12/sawdust/index.html",
    "revision": "480f67dd70fb475525eb160cdba04f45"
  },
  {
    "url": "blog/skepticism/2016/06/19/beauty/index.html",
    "revision": "f5b215a764e3cf5d2e320052f112cec8"
  },
  {
    "url": "blog/skepticism/2016/06/19/bilderberg/index.html",
    "revision": "01e2a2c4dff82cbf91003eb073d26e0c"
  },
  {
    "url": "blog/skepticism/2016/06/19/cyf/index.html",
    "revision": "de6078eab429d4ca2d1d14f96aa40ea4"
  },
  {
    "url": "blog/skepticism/2016/06/19/holt/index.html",
    "revision": "668d030aa3f27f62c7f2adb75dc66586"
  },
  {
    "url": "blog/skepticism/2016/06/19/index.html",
    "revision": "6b24846658f37788ede1f020af4591df"
  },
  {
    "url": "blog/skepticism/2016/06/19/silver/index.html",
    "revision": "edeeeb519a46e244fb14902e31bbf149"
  },
  {
    "url": "blog/skepticism/2016/06/19/ufo/index.html",
    "revision": "40179752d59816dce93bfdfb3ef90508"
  },
  {
    "url": "blog/skepticism/2016/06/26/homeopathy/index.html",
    "revision": "657ce041d189be2c416c9d7f0d027898"
  },
  {
    "url": "blog/skepticism/2016/06/26/index.html",
    "revision": "6f740ee6f4cb11cd6f47276acd0de056"
  },
  {
    "url": "blog/skepticism/2016/06/26/robbins/index.html",
    "revision": "a568a93d92e877581865f61075aa1e31"
  },
  {
    "url": "blog/skepticism/2016/06/26/selfies/index.html",
    "revision": "338e03bc48ce2e9b40f85a7adbb27c74"
  },
  {
    "url": "blog/skepticism/2016/06/26/silver/index.html",
    "revision": "6392238dc0a7289101d9ca7c61d14390"
  },
  {
    "url": "blog/skepticism/2016/06/26/ufos/index.html",
    "revision": "412b830da0ccd8e6bc6194fdc30d389a"
  },
  {
    "url": "blog/skepticism/2016/06/index.html",
    "revision": "4a5da5392bd756e51ffa7872782ce53e"
  },
  {
    "url": "blog/skepticism/2016/07/03/glyphosate/index.html",
    "revision": "6e023e359f6c2765879fc9e9a5c8dca6"
  },
  {
    "url": "blog/skepticism/2016/07/03/gmo/index.html",
    "revision": "8dd0d7eea043cdf004faeffd060f9613"
  },
  {
    "url": "blog/skepticism/2016/07/03/index.html",
    "revision": "56f05b3e9480f9dafd813d42b9792483"
  },
  {
    "url": "blog/skepticism/2016/07/03/jail/index.html",
    "revision": "0fc7a560efadb32d8bb821a914e6c9b6"
  },
  {
    "url": "blog/skepticism/2016/07/03/ken/index.html",
    "revision": "71b185742c14f4bb079afbbaa36daa06"
  },
  {
    "url": "blog/skepticism/2016/07/10/ark/index.html",
    "revision": "c4cfbd43b2a043f1458d588f9bb6cc99"
  },
  {
    "url": "blog/skepticism/2016/07/10/bee/index.html",
    "revision": "cce9ac66b88044ac0b0c0bbbaf9246e3"
  },
  {
    "url": "blog/skepticism/2016/07/10/index.html",
    "revision": "620ba0612e575c042f977093f513ffa4"
  },
  {
    "url": "blog/skepticism/2016/07/10/lottery/index.html",
    "revision": "6b1aafebfad91d67eded0df1879ed4c6"
  },
  {
    "url": "blog/skepticism/2016/07/10/murder/index.html",
    "revision": "71b39948212a5c6fb199e274bf927d09"
  },
  {
    "url": "blog/skepticism/2016/07/17/dogs/index.html",
    "revision": "a2775376b92ea5adcaafefb19767633e"
  },
  {
    "url": "blog/skepticism/2016/07/17/fsm/index.html",
    "revision": "d94021843efcb6fa775feb9c01f7f585"
  },
  {
    "url": "blog/skepticism/2016/07/17/fyi/index.html",
    "revision": "5b0d4356936c8faa3d648a44457faeb7"
  },
  {
    "url": "blog/skepticism/2016/07/17/index.html",
    "revision": "789092a2c9f0055c6bdb3b8d3b487327"
  },
  {
    "url": "blog/skepticism/2016/07/17/natural/index.html",
    "revision": "04f471564d39616efb363a36e9c35e62"
  },
  {
    "url": "blog/skepticism/2016/07/17/pokemon/index.html",
    "revision": "f9399cce5cb31b2ad07b7fdf0d89d19d"
  },
  {
    "url": "blog/skepticism/2016/07/index.html",
    "revision": "41c5d51b0645d5cafdb8a09fe632a22a"
  },
  {
    "url": "blog/skepticism/2016/08/07/icke/index.html",
    "revision": "6578bd09a5a96a0bad82447f82a1e4b9"
  },
  {
    "url": "blog/skepticism/2016/08/07/index.html",
    "revision": "ba1fb8010c297300158dd6b4c80496fb"
  },
  {
    "url": "blog/skepticism/2016/08/21/brian/index.html",
    "revision": "f1925b05ae712bbe5b8fbbb371d27e9e"
  },
  {
    "url": "blog/skepticism/2016/08/21/chlorine/index.html",
    "revision": "26a6461e0c7b831158b7c9fe4e870053"
  },
  {
    "url": "blog/skepticism/2016/08/21/index.html",
    "revision": "27c9ad95ebc66ad3659f1f5b8c734d75"
  },
  {
    "url": "blog/skepticism/2016/08/21/murder/index.html",
    "revision": "452e5f0c4e083f614f030caaefb70af2"
  },
  {
    "url": "blog/skepticism/2016/08/21/superfoods/index.html",
    "revision": "d7581b6876c9aa84a6d40ae971a20d10"
  },
  {
    "url": "blog/skepticism/2016/08/21/witch/index.html",
    "revision": "e3cf2a4a5de83eca4fae53c2a8959091"
  },
  {
    "url": "blog/skepticism/2016/08/28/alcohol/index.html",
    "revision": "471a9ff29aff75e4611d5e522c856a75"
  },
  {
    "url": "blog/skepticism/2016/08/28/chiro/index.html",
    "revision": "57f6314109d33d5310ae58180b529a2d"
  },
  {
    "url": "blog/skepticism/2016/08/28/index.html",
    "revision": "86f46fd19bf38a3b259d8e1173a38795"
  },
  {
    "url": "blog/skepticism/2016/08/28/processed/index.html",
    "revision": "9ff57076283279d2af7673af3c8ed393"
  },
  {
    "url": "blog/skepticism/2016/08/28/sbh/index.html",
    "revision": "6c81c32ee0ee8c5941d05dcd6daf08f8"
  },
  {
    "url": "blog/skepticism/2016/08/index.html",
    "revision": "a481715dcd4cea994002aaa5a89b7e1d"
  },
  {
    "url": "blog/skepticism/2016/09/18/altruism/index.html",
    "revision": "3df00245f5a4cab7d049cd06bf12bdb7"
  },
  {
    "url": "blog/skepticism/2016/09/18/better/index.html",
    "revision": "b7cb19a620bc56d52ae39921ddb77544"
  },
  {
    "url": "blog/skepticism/2016/09/18/homeopathy/index.html",
    "revision": "425d7bae30bc324658278292077adedb"
  },
  {
    "url": "blog/skepticism/2016/09/18/index.html",
    "revision": "9efc0582c39d0165af05fe943caa8c00"
  },
  {
    "url": "blog/skepticism/2016/09/18/nonsense/index.html",
    "revision": "513ddb356a53476339261817fcc3a0d1"
  },
  {
    "url": "blog/skepticism/2016/09/18/trump/index.html",
    "revision": "b5233d8f1183a648c1c65104a5bf6abb"
  },
  {
    "url": "blog/skepticism/2016/09/25/clinic/index.html",
    "revision": "5a8266f8cc88f2d85971ea267855d5df"
  },
  {
    "url": "blog/skepticism/2016/09/25/fluoride/index.html",
    "revision": "74dee90c7064dcac6535956cfb6855a8"
  },
  {
    "url": "blog/skepticism/2016/09/25/homeopathy/index.html",
    "revision": "ef7d3a71fe2090199d0abf0ebcc4af27"
  },
  {
    "url": "blog/skepticism/2016/09/25/index.html",
    "revision": "0d01735b73c64458351d83582a9c0617"
  },
  {
    "url": "blog/skepticism/2016/09/25/murder/index.html",
    "revision": "2f74520b3108ae821649daec5c507791"
  },
  {
    "url": "blog/skepticism/2016/09/index.html",
    "revision": "905079b756aa1cb4a860783cc9873eda"
  },
  {
    "url": "blog/skepticism/2016/10/21/bigfoot/index.html",
    "revision": "1ad2da1b4e9e47ab5a9bd587ce6e0f90"
  },
  {
    "url": "blog/skepticism/2016/10/21/breasts/index.html",
    "revision": "ec1fb15be65f999f8a8d7def24077522"
  },
  {
    "url": "blog/skepticism/2016/10/21/index.html",
    "revision": "57594e32f17e77fccccae4e8a1777e36"
  },
  {
    "url": "blog/skepticism/2016/10/21/medsafe/index.html",
    "revision": "d7454a1a5410185d218ab672f70854bf"
  },
  {
    "url": "blog/skepticism/2016/10/21/zenteq/index.html",
    "revision": "eeb9aaa3b2d8f1e6d310cf41b74b72c2"
  },
  {
    "url": "blog/skepticism/2016/10/index.html",
    "revision": "8e06985afbfa2a3971e8bcbf03ad8abd"
  },
  {
    "url": "blog/skepticism/2016/11/13/conference/index.html",
    "revision": "ff525b59aaddab4e290745152073b10e"
  },
  {
    "url": "blog/skepticism/2016/11/13/green/index.html",
    "revision": "b948034ac5adff3f25197c231510572f"
  },
  {
    "url": "blog/skepticism/2016/11/13/index.html",
    "revision": "f6fdbfc01a056f790bec5ba3d89b8b54"
  },
  {
    "url": "blog/skepticism/2016/11/13/vice/index.html",
    "revision": "b0dcfc8803d07b21bf6618286c7cb8dd"
  },
  {
    "url": "blog/skepticism/2016/11/27/bioptron/index.html",
    "revision": "080fdac0dc383f0aeefc553de1113cb9"
  },
  {
    "url": "blog/skepticism/2016/11/27/conference/index.html",
    "revision": "48039a000bc2322588953b16baea02d3"
  },
  {
    "url": "blog/skepticism/2016/11/27/earthquake/index.html",
    "revision": "aa0f178d75de19c0db3abe2de00722d0"
  },
  {
    "url": "blog/skepticism/2016/11/27/index.html",
    "revision": "a5f761e6fea70136f36d1e37ddff026e"
  },
  {
    "url": "blog/skepticism/2016/11/index.html",
    "revision": "dcb35f236f6f29abf826760d4220b635"
  },
  {
    "url": "blog/skepticism/2016/12/04/conference/index.html",
    "revision": "440c356d82f59fd1321c4cf7b45cbb80"
  },
  {
    "url": "blog/skepticism/2016/12/04/index.html",
    "revision": "9d240185f8afbe9b2550afd02724af0d"
  },
  {
    "url": "blog/skepticism/2016/12/18/colin/index.html",
    "revision": "1c182ed7d7fa185b505c4512cd759a29"
  },
  {
    "url": "blog/skepticism/2016/12/18/fiji/index.html",
    "revision": "9b7fb9f50dd533296c7f8ff6a1b0d1c1"
  },
  {
    "url": "blog/skepticism/2016/12/18/index.html",
    "revision": "9e66291826b44ecb3c798e4eedfd2232"
  },
  {
    "url": "blog/skepticism/2016/12/18/kinesiology/index.html",
    "revision": "87785387c3aae9eb062753ea54f10e48"
  },
  {
    "url": "blog/skepticism/2016/12/18/mmm/index.html",
    "revision": "fbff1c8461b7b147ce8ba05a3a07f9ab"
  },
  {
    "url": "blog/skepticism/2016/12/18/nigel/index.html",
    "revision": "cff9a1bd5568c09455c4323802342105"
  },
  {
    "url": "blog/skepticism/2016/12/index.html",
    "revision": "ef6d07117729467abdf6e2e0fe94f0c8"
  },
  {
    "url": "blog/skepticism/2016/index.html",
    "revision": "64b23cf8c03f7515f3655e42b1fa3d6a"
  },
  {
    "url": "blog/skepticism/2017/01/22/index.html",
    "revision": "74cc642f9985b645f0bc1b6bb010dbcc"
  },
  {
    "url": "blog/skepticism/2017/01/22/scientology/index.html",
    "revision": "70b69645055696b93053579876edffb2"
  },
  {
    "url": "blog/skepticism/2017/01/29/creation/index.html",
    "revision": "51cc41f29db36d41db1349b683b55237"
  },
  {
    "url": "blog/skepticism/2017/01/29/index.html",
    "revision": "298a9b71009af7e90ebffec710026fd9"
  },
  {
    "url": "blog/skepticism/2017/01/index.html",
    "revision": "5e904ebe0577e74c7dc74a68ac5b5404"
  },
  {
    "url": "blog/skepticism/2017/02/05/fraudster/index.html",
    "revision": "1d91ed7d955b7827b5e8c9795a6050ba"
  },
  {
    "url": "blog/skepticism/2017/02/05/gervais/index.html",
    "revision": "2610e131b6870685dc4efca9d9a7d9f1"
  },
  {
    "url": "blog/skepticism/2017/02/05/index.html",
    "revision": "b266f27fbbec9b14b60e4804a9ad1390"
  },
  {
    "url": "blog/skepticism/2017/02/05/scientology/index.html",
    "revision": "204e629b4ee0ca41631c4eae254e6c68"
  },
  {
    "url": "blog/skepticism/2017/02/19/homeopathy/index.html",
    "revision": "e551ae489c63ff51c2b68df2f7953f01"
  },
  {
    "url": "blog/skepticism/2017/02/19/index.html",
    "revision": "e3aaa46d2501ba70493addab977d5783"
  },
  {
    "url": "blog/skepticism/2017/02/19/lottery/index.html",
    "revision": "bff1eba992c2f23d3a4fc573c46d9d7e"
  },
  {
    "url": "blog/skepticism/2017/02/19/vaxxed/index.html",
    "revision": "b704345aee1f2ecf183535d77248537b"
  },
  {
    "url": "blog/skepticism/2017/02/19/whales/index.html",
    "revision": "b2aaa0e5505dcf3e087472fad7febca4"
  },
  {
    "url": "blog/skepticism/2017/02/index.html",
    "revision": "e4ea4d8cdd9d8b7dedbf1849e8721441"
  },
  {
    "url": "blog/skepticism/2017/03/05/index.html",
    "revision": "1e36d6ddf001642459cca87b8757698c"
  },
  {
    "url": "blog/skepticism/2017/03/05/rea/index.html",
    "revision": "525cdcadb6ccbf9c536a29e254649c4c"
  },
  {
    "url": "blog/skepticism/2017/03/19/fake/index.html",
    "revision": "1c08948eefbac89e63dda6d8ff365d8e"
  },
  {
    "url": "blog/skepticism/2017/03/19/index.html",
    "revision": "6bc572b1dea84bd0d37b77aa3c243375"
  },
  {
    "url": "blog/skepticism/2017/03/19/murder/index.html",
    "revision": "bbe3a61ccb105961bd13750894f89fcc"
  },
  {
    "url": "blog/skepticism/2017/03/26/census/index.html",
    "revision": "3bcf3e9c0b0d2d7b2252e7dc6cc8c4a3"
  },
  {
    "url": "blog/skepticism/2017/03/26/index.html",
    "revision": "602113fefcb4f378c18876ba996cf532"
  },
  {
    "url": "blog/skepticism/2017/03/26/nzmj/index.html",
    "revision": "24e0223a1495bbba5e2bdac8d8eded5b"
  },
  {
    "url": "blog/skepticism/2017/03/26/shaquille/index.html",
    "revision": "fb8e51a04b9bd9c8bd9f8d30bc87711c"
  },
  {
    "url": "blog/skepticism/2017/03/index.html",
    "revision": "3ffac1686c3fbd5debb9f54522bc241a"
  },
  {
    "url": "blog/skepticism/2017/04/02/index.html",
    "revision": "71020e0e08ece78b8388a7180b5b3b47"
  },
  {
    "url": "blog/skepticism/2017/04/02/nasa/index.html",
    "revision": "5ae9b0c3f4ec61c2e08948d75afbc76f"
  },
  {
    "url": "blog/skepticism/2017/04/02/science/index.html",
    "revision": "d1744ec82442aa8bc4d10a6f411804a5"
  },
  {
    "url": "blog/skepticism/2017/04/02/vaxxed/index.html",
    "revision": "50e1794154ac62114e4e117820d905f8"
  },
  {
    "url": "blog/skepticism/2017/04/09/index.html",
    "revision": "63907a3b3d16cbd3cfa4fc56d2594b7f"
  },
  {
    "url": "blog/skepticism/2017/04/09/tekiri/index.html",
    "revision": "91369239ddd533b3ed51c79dbd731441"
  },
  {
    "url": "blog/skepticism/2017/04/09/vaxxed/index.html",
    "revision": "a3c7b1d54c8acce22f977de631b689bd"
  },
  {
    "url": "blog/skepticism/2017/04/23/arise/index.html",
    "revision": "8e13d7f51e2f9493973a75a26504881e"
  },
  {
    "url": "blog/skepticism/2017/04/23/index.html",
    "revision": "49a5445179b5d4fab94be746c42a6887"
  },
  {
    "url": "blog/skepticism/2017/04/23/kelvin/index.html",
    "revision": "119bfea4e4a4e63fec22a0dc06613728"
  },
  {
    "url": "blog/skepticism/2017/04/index.html",
    "revision": "402ea4f5f1f64063a16a78b60e4c4c5a"
  },
  {
    "url": "blog/skepticism/2017/05/07/cancer/index.html",
    "revision": "452f044469780fe056349bbb2effa949"
  },
  {
    "url": "blog/skepticism/2017/05/07/index.html",
    "revision": "bfe78674546ab0f3622de580a66c0637"
  },
  {
    "url": "blog/skepticism/2017/05/07/nigel/index.html",
    "revision": "b49235e327020d995906a92d2018bb17"
  },
  {
    "url": "blog/skepticism/2017/05/21/blasphemy/index.html",
    "revision": "4853ff2f2e910bd16caab0a9cad15f36"
  },
  {
    "url": "blog/skepticism/2017/05/21/flat/index.html",
    "revision": "457c4c4fed90b4146856ae392fd84ad4"
  },
  {
    "url": "blog/skepticism/2017/05/21/index.html",
    "revision": "b145626b0d182ae9b346ea672f446f1f"
  },
  {
    "url": "blog/skepticism/2017/05/21/maori/index.html",
    "revision": "374c08e9830f2f7cf7b81790eca61db0"
  },
  {
    "url": "blog/skepticism/2017/05/index.html",
    "revision": "1fa0c663954132b3000f2cb231767b34"
  },
  {
    "url": "blog/skepticism/2017/06/04/bigelow/index.html",
    "revision": "aa067a91886f7b2de915f4833bfb325d"
  },
  {
    "url": "blog/skepticism/2017/06/04/climate/index.html",
    "revision": "270b0002d67c730e574ad5aa2839c5d1"
  },
  {
    "url": "blog/skepticism/2017/06/04/hansford/index.html",
    "revision": "c4510d5a75830ac5e87a592b23c9cb8b"
  },
  {
    "url": "blog/skepticism/2017/06/04/index.html",
    "revision": "bb75c4ce646d84668ce4f525798b4e42"
  },
  {
    "url": "blog/skepticism/2017/06/04/wasp/index.html",
    "revision": "9ad1d82f3eb3681ade0dc1fa40e4e7bc"
  },
  {
    "url": "blog/skepticism/2017/06/11/colonic/index.html",
    "revision": "317653f80752489339dd75b43cb3104f"
  },
  {
    "url": "blog/skepticism/2017/06/11/credulous/index.html",
    "revision": "4529859661920cd604ca2e9ebf1ee665"
  },
  {
    "url": "blog/skepticism/2017/06/11/index.html",
    "revision": "8177697b22b3b7f21d1f0106107ab5a7"
  },
  {
    "url": "blog/skepticism/2017/06/11/journals/index.html",
    "revision": "abbb90161747e06a8d26514340c9cec5"
  },
  {
    "url": "blog/skepticism/2017/06/18/breatharians/index.html",
    "revision": "dc2214d6d66c5b54c6728e1fb948f615"
  },
  {
    "url": "blog/skepticism/2017/06/18/fieldays/index.html",
    "revision": "19c102d18f95b5bf1f5cae7bbd491026"
  },
  {
    "url": "blog/skepticism/2017/06/18/index.html",
    "revision": "7e2dbce4e8ec25e0b30f06ab7b98dff5"
  },
  {
    "url": "blog/skepticism/2017/06/18/jw/index.html",
    "revision": "e8ff94abb46cddd6b37c3ef300de0fc1"
  },
  {
    "url": "blog/skepticism/2017/06/18/oil/index.html",
    "revision": "62969a7c1724ba284afe376379475d88"
  },
  {
    "url": "blog/skepticism/2017/06/index.html",
    "revision": "595616d4967ad74f94bf3cf4d00ef6d9"
  },
  {
    "url": "blog/skepticism/2017/07/02/baby/index.html",
    "revision": "08d49dff0b32ff4ad9fa833569f6b483"
  },
  {
    "url": "blog/skepticism/2017/07/02/index.html",
    "revision": "00054f4c3a65e7be7850c3295cdaf103"
  },
  {
    "url": "blog/skepticism/2017/07/02/infowars/index.html",
    "revision": "fa2fce0ef75ecd89fc95535d3447c7cb"
  },
  {
    "url": "blog/skepticism/2017/07/02/scientology/index.html",
    "revision": "9c9563c2f1d7a7cf9ced463877ed9954"
  },
  {
    "url": "blog/skepticism/2017/07/16/bananas/index.html",
    "revision": "0b4ec7481193e62a424efa59759bf51e"
  },
  {
    "url": "blog/skepticism/2017/07/16/circles/index.html",
    "revision": "fb72a6d07d85d1857701f9cb02f0ef0a"
  },
  {
    "url": "blog/skepticism/2017/07/16/index.html",
    "revision": "640bb999124076e748cc9bab5dc38bb2"
  },
  {
    "url": "blog/skepticism/2017/07/16/siggi/index.html",
    "revision": "061ce52261d8a266a1092adb55d69d95"
  },
  {
    "url": "blog/skepticism/2017/07/16/vaxxed/index.html",
    "revision": "beeebb53323ac6bf3cf6771e61ce366d"
  },
  {
    "url": "blog/skepticism/2017/07/30/bleach/index.html",
    "revision": "16e975f33a08058e0ec7c6df14dba4d2"
  },
  {
    "url": "blog/skepticism/2017/07/30/bluebeam/index.html",
    "revision": "b54b2faab1739b8c28a2d1650ad966d8"
  },
  {
    "url": "blog/skepticism/2017/07/30/index.html",
    "revision": "4141153308a8b434745550bec74a5657"
  },
  {
    "url": "blog/skepticism/2017/07/30/police/index.html",
    "revision": "b228e0ee275f148aff6e29b3d3de1295"
  },
  {
    "url": "blog/skepticism/2017/07/index.html",
    "revision": "8a048c77618d975c5ae55129d196e82f"
  },
  {
    "url": "blog/skepticism/2017/08/06/conned/index.html",
    "revision": "fbd3125992666727cca3fb6fa594cc56"
  },
  {
    "url": "blog/skepticism/2017/08/06/doll/index.html",
    "revision": "9a737cdb47ea80c14defd773d9b30395"
  },
  {
    "url": "blog/skepticism/2017/08/06/index.html",
    "revision": "94dcc4e01a94a300ea00bab9bf3a3dfb"
  },
  {
    "url": "blog/skepticism/2017/08/06/jacinda/index.html",
    "revision": "aac718423e750a0e6d2cba57cba67eff"
  },
  {
    "url": "blog/skepticism/2017/08/06/lotto/index.html",
    "revision": "9bcb688028be2cec2bcf6262b38044aa"
  },
  {
    "url": "blog/skepticism/2017/08/27/index.html",
    "revision": "35547f3ad6062881e100f996142795fd"
  },
  {
    "url": "blog/skepticism/2017/08/27/naturopath/index.html",
    "revision": "3a7d0de97acdb958c57117b07285b8bb"
  },
  {
    "url": "blog/skepticism/2017/08/27/satanic/index.html",
    "revision": "20de9725dca9f79cfeda4b3f645c58e0"
  },
  {
    "url": "blog/skepticism/2017/08/index.html",
    "revision": "65c947f8c226f08faf863672fcb9255b"
  },
  {
    "url": "blog/skepticism/2017/09/03/apocalypse/index.html",
    "revision": "0831b8e9dd0df9e800afbe75f12536c8"
  },
  {
    "url": "blog/skepticism/2017/09/03/cancer/index.html",
    "revision": "e971729a02d0ac49f40e9d6326c779a5"
  },
  {
    "url": "blog/skepticism/2017/09/03/index.html",
    "revision": "796f2a5e14026c2af19968c1d13f0457"
  },
  {
    "url": "blog/skepticism/2017/09/03/rectangle/index.html",
    "revision": "7e7ef268f723ebae6eb95c2fd3f435ee"
  },
  {
    "url": "blog/skepticism/2017/09/03/stargate/index.html",
    "revision": "b35bbc5d56bb9f994f1fb3f61a085488"
  },
  {
    "url": "blog/skepticism/2017/09/index.html",
    "revision": "50b89f3a3f44116125c729de806ff008"
  },
  {
    "url": "blog/skepticism/2017/10/01/apocalypse/index.html",
    "revision": "84e3844a9759cac07f2efca93ad3624b"
  },
  {
    "url": "blog/skepticism/2017/10/01/freeman/index.html",
    "revision": "27ef730440685b4223b2358a08fa45d8"
  },
  {
    "url": "blog/skepticism/2017/10/01/index.html",
    "revision": "cceb157f463d80dd7b159a1ed2ad731e"
  },
  {
    "url": "blog/skepticism/2017/10/01/pharmacy/index.html",
    "revision": "4e8b7b6982221c46fb1b31395d59a9c3"
  },
  {
    "url": "blog/skepticism/2017/10/08/index.html",
    "revision": "578bde5ec01813786cfc5eab971eb792"
  },
  {
    "url": "blog/skepticism/2017/10/08/pill/index.html",
    "revision": "5b6bbdc6e376dd236811d20a423f0b00"
  },
  {
    "url": "blog/skepticism/2017/10/08/qsb/index.html",
    "revision": "c645579b1bb782bbd0a6331a213faf54"
  },
  {
    "url": "blog/skepticism/2017/10/08/vegas/index.html",
    "revision": "5196a331c413e7cff9c94d77ec2f862f"
  },
  {
    "url": "blog/skepticism/2017/10/15/doterra/index.html",
    "revision": "fa79b62866af0f51aef2618ad7d5ef6a"
  },
  {
    "url": "blog/skepticism/2017/10/15/index.html",
    "revision": "3a60b8b2b9d98c5e65a7b8a8de3b31ba"
  },
  {
    "url": "blog/skepticism/2017/10/15/lie/index.html",
    "revision": "8e3c21ec31a0e90f00e09b084c552d8e"
  },
  {
    "url": "blog/skepticism/2017/10/15/soap/index.html",
    "revision": "75bfe90d8fc8e5c96a39879fdc432f6c"
  },
  {
    "url": "blog/skepticism/2017/10/index.html",
    "revision": "70b4c0d024080f3a990eeac7b29775d9"
  },
  {
    "url": "blog/skepticism/2017/11/05/conference/index.html",
    "revision": "25e98ac274eaaee3d080bc555b0d61cb"
  },
  {
    "url": "blog/skepticism/2017/11/05/glyphosate/index.html",
    "revision": "ec9b9e700fbef376ef65fd4d080cdf17"
  },
  {
    "url": "blog/skepticism/2017/11/05/index.html",
    "revision": "3279d24d6c9387c818f2c1d95097404d"
  },
  {
    "url": "blog/skepticism/2017/11/05/stranded/index.html",
    "revision": "77f139f857daf33402a7c97b86069dfc"
  },
  {
    "url": "blog/skepticism/2017/11/05/tracts/index.html",
    "revision": "e4fec0ac2637b8e7b508c1c5e5d39685"
  },
  {
    "url": "blog/skepticism/2017/11/12/ghost/index.html",
    "revision": "7969bb9cbe7bc0f5aba5d6ed046a1b78"
  },
  {
    "url": "blog/skepticism/2017/11/12/green/index.html",
    "revision": "4e460894c4cf5523994ffdfd0e1d7737"
  },
  {
    "url": "blog/skepticism/2017/11/12/harassment/index.html",
    "revision": "3c05473f64eb724ecd91e7d2a5e9e0df"
  },
  {
    "url": "blog/skepticism/2017/11/12/index.html",
    "revision": "2f3c5214aaf8ffc1b2fd23ec3a7ae192"
  },
  {
    "url": "blog/skepticism/2017/11/12/libby/index.html",
    "revision": "2f7dd895b05830a3f87dd37346859460"
  },
  {
    "url": "blog/skepticism/2017/11/index.html",
    "revision": "90cf030de32aee29c206ec8c2eb35743"
  },
  {
    "url": "blog/skepticism/2017/12/03/acupuncture/index.html",
    "revision": "30b876e636963793503c8c52ccfe85b8"
  },
  {
    "url": "blog/skepticism/2017/12/03/denialism/index.html",
    "revision": "850c5d6efc7d6dca16f6bd74af903a2a"
  },
  {
    "url": "blog/skepticism/2017/12/03/dowsing/index.html",
    "revision": "7b76f177fa323b29a231bbf8e570dd41"
  },
  {
    "url": "blog/skepticism/2017/12/03/holes/index.html",
    "revision": "2e98b015d51141fe58010062e35a1a6d"
  },
  {
    "url": "blog/skepticism/2017/12/03/index.html",
    "revision": "7500f7f4e2c409c70127251e1242053d"
  },
  {
    "url": "blog/skepticism/2017/12/17/index.html",
    "revision": "9cf6d394080241417059713349c8cd80"
  },
  {
    "url": "blog/skepticism/2017/12/17/nhs/index.html",
    "revision": "a609cf3f34ef92d656344b283e453463"
  },
  {
    "url": "blog/skepticism/2017/12/17/oto/index.html",
    "revision": "b5ed26dc04ff8a3965a6957a4211c18e"
  },
  {
    "url": "blog/skepticism/2017/12/17/pastafarian/index.html",
    "revision": "1af8006bdd001c32c9288c1c659f795e"
  },
  {
    "url": "blog/skepticism/2017/12/17/shc/index.html",
    "revision": "0b088a881544651c132381c294de1608"
  },
  {
    "url": "blog/skepticism/2017/12/17/wellworks/index.html",
    "revision": "643c9c1f6f94ea28060d2c4bce2bef12"
  },
  {
    "url": "blog/skepticism/2017/12/index.html",
    "revision": "1b97f550b96f8c365af55c49a0c3e8e9"
  },
  {
    "url": "blog/skepticism/2017/index.html",
    "revision": "3ce09d696764f0187c3478969e68a547"
  },
  {
    "url": "blog/skepticism/2018/01/21/grounding/index.html",
    "revision": "e179c5deaf200c7b6627a4de735485e7"
  },
  {
    "url": "blog/skepticism/2018/01/21/index.html",
    "revision": "fc12da604db41dd79174caa085145fae"
  },
  {
    "url": "blog/skepticism/2018/01/21/naturopath/index.html",
    "revision": "94ffdf00fe670e04167cd4505c6fc18c"
  },
  {
    "url": "blog/skepticism/2018/01/21/respen/index.html",
    "revision": "5ee64a54214877acc145b64b7a24fab3"
  },
  {
    "url": "blog/skepticism/2018/01/28/bears/index.html",
    "revision": "bdbe2769d95c4ba547ad33629e951c9c"
  },
  {
    "url": "blog/skepticism/2018/01/28/index.html",
    "revision": "70d735529936e70a864e9460040c8d90"
  },
  {
    "url": "blog/skepticism/2018/01/28/peppering/index.html",
    "revision": "36223d2ebef6db89d3010282f811a8f9"
  },
  {
    "url": "blog/skepticism/2018/01/28/pet/index.html",
    "revision": "a4e1c01440018607524008ed03391cd6"
  },
  {
    "url": "blog/skepticism/2018/01/28/quake/index.html",
    "revision": "8cc1c35175fa3a08634fd829a1d8995a"
  },
  {
    "url": "blog/skepticism/2018/01/28/scientology/index.html",
    "revision": "45721d4290c7f405bc1b9fb49ec321ac"
  },
  {
    "url": "blog/skepticism/2018/01/index.html",
    "revision": "ede0e919aa051239eb7b70ae96c0ebc9"
  },
  {
    "url": "blog/skepticism/2018/02/11/asa/index.html",
    "revision": "848b7086a4a13e8fcca4ca10ede64775"
  },
  {
    "url": "blog/skepticism/2018/02/11/cannabis/index.html",
    "revision": "12fe40493bcbebe1056e277f363fdca7"
  },
  {
    "url": "blog/skepticism/2018/02/11/elon/index.html",
    "revision": "2d2a3a906618bb87af5611b5e40ec1b5"
  },
  {
    "url": "blog/skepticism/2018/02/11/homeopathy/index.html",
    "revision": "d2a6eb225fe0b8b46b1e325dd4a23bc6"
  },
  {
    "url": "blog/skepticism/2018/02/11/index.html",
    "revision": "9843fb801198d75c6e5f3e012d7f2dfb"
  },
  {
    "url": "blog/skepticism/2018/02/11/water/index.html",
    "revision": "2b62108e4fbfdf3f2e76a7ce58a06d21"
  },
  {
    "url": "blog/skepticism/2018/02/25/crisis/index.html",
    "revision": "ca44ec58fbad90b433d19fa16385988b"
  },
  {
    "url": "blog/skepticism/2018/02/25/eggs/index.html",
    "revision": "fbf303b6a4fe161befb4e2edccfacd49"
  },
  {
    "url": "blog/skepticism/2018/02/25/fsm/index.html",
    "revision": "e404514a29db83746689a43f50831cf5"
  },
  {
    "url": "blog/skepticism/2018/02/25/index.html",
    "revision": "15ce40a9f819ea35def6f0b7da6c8ec5"
  },
  {
    "url": "blog/skepticism/2018/02/25/number/index.html",
    "revision": "c54d21ab2f1ef47b9b49d1e96aee2a15"
  },
  {
    "url": "blog/skepticism/2018/02/25/quackery/index.html",
    "revision": "477a9b50798356f8ffdccffff05ce698"
  },
  {
    "url": "blog/skepticism/2018/02/index.html",
    "revision": "a11a281d9dc0fedbce97c5350ee7b6e4"
  },
  {
    "url": "blog/skepticism/2018/03/11/ai/index.html",
    "revision": "65955aba8694624e372a648a1ddf73c1"
  },
  {
    "url": "blog/skepticism/2018/03/11/index.html",
    "revision": "e83b6daf2079a82ae5394cf272bae5d0"
  },
  {
    "url": "blog/skepticism/2018/03/11/radiation/index.html",
    "revision": "59f4775824bd9a10d589bc31ec865da9"
  },
  {
    "url": "blog/skepticism/2018/03/11/reiki/index.html",
    "revision": "f146df9bc71cecb11ca0bd6729694c07"
  },
  {
    "url": "blog/skepticism/2018/03/11/ufo/index.html",
    "revision": "b406d5811724d524dc83113781b8e2c1"
  },
  {
    "url": "blog/skepticism/2018/03/18/ghost/index.html",
    "revision": "2a4080831a01322d1b50c4156fff9235"
  },
  {
    "url": "blog/skepticism/2018/03/18/index.html",
    "revision": "b374bb2f7ccaef0280e4ca58fe1e7995"
  },
  {
    "url": "blog/skepticism/2018/03/18/psychic/index.html",
    "revision": "4d21f3fff8e13c4953d97568f94d174a"
  },
  {
    "url": "blog/skepticism/2018/03/18/quack/index.html",
    "revision": "6dcb197e521e12badcee6ff4a67ed115"
  },
  {
    "url": "blog/skepticism/2018/03/18/radiation/index.html",
    "revision": "cc1009495a7a560805c02326ae79e168"
  },
  {
    "url": "blog/skepticism/2018/03/index.html",
    "revision": "18e0f068843eb8c4993e242ae522000c"
  },
  {
    "url": "blog/skepticism/2018/04/08/calocurb/index.html",
    "revision": "9813df133b0f2fc64119dd202d13f833"
  },
  {
    "url": "blog/skepticism/2018/04/08/cam/index.html",
    "revision": "a9e5b4f7810fa86fef5b692dc35abda6"
  },
  {
    "url": "blog/skepticism/2018/04/08/index.html",
    "revision": "db6e6808f385f234923e3c76fc0b5229"
  },
  {
    "url": "blog/skepticism/2018/04/08/psychic/index.html",
    "revision": "f305a34bec101a88fb3a05510af8f10f"
  },
  {
    "url": "blog/skepticism/2018/04/08/vaccines/index.html",
    "revision": "44a41ef0c72f1e3a91cbdb5383eea5e1"
  },
  {
    "url": "blog/skepticism/2018/04/15/coffee/index.html",
    "revision": "a4720cf8151b5da68dbff93198a217a7"
  },
  {
    "url": "blog/skepticism/2018/04/15/ignorance/index.html",
    "revision": "79b53533a9c1927c051fd038489d4720"
  },
  {
    "url": "blog/skepticism/2018/04/15/index.html",
    "revision": "8e32d95138194fadab4b6d74584f8e1a"
  },
  {
    "url": "blog/skepticism/2018/04/15/nasa/index.html",
    "revision": "7d2ee6d59e28aed88d2db79324346ae5"
  },
  {
    "url": "blog/skepticism/2018/04/15/tapu/index.html",
    "revision": "cd6c72552410d1bff84d21267f678e12"
  },
  {
    "url": "blog/skepticism/2018/04/29/google/index.html",
    "revision": "6389b5e364b0b22c39eb04488905d5e1"
  },
  {
    "url": "blog/skepticism/2018/04/29/homeopathy/index.html",
    "revision": "db0a0af7dd36ed8f4a1ff4a83234b727"
  },
  {
    "url": "blog/skepticism/2018/04/29/index.html",
    "revision": "4faac2c7ce35ea4d18cb56e1db2dd31a"
  },
  {
    "url": "blog/skepticism/2018/04/29/ken/index.html",
    "revision": "e4e0022cd63a0c84250e18a885021204"
  },
  {
    "url": "blog/skepticism/2018/04/29/v2k/index.html",
    "revision": "e4fc20d89a68b8670e63cbf8c41ae8d4"
  },
  {
    "url": "blog/skepticism/2018/04/index.html",
    "revision": "5c52e79e221bde48ed9f32bdd13741b3"
  },
  {
    "url": "blog/skepticism/2018/05/13/astrology/index.html",
    "revision": "1c282442b16e53eb5ed45a32192ac86a"
  },
  {
    "url": "blog/skepticism/2018/05/13/crystals/index.html",
    "revision": "317f2e3c0a86693948eb03ba84d4d364"
  },
  {
    "url": "blog/skepticism/2018/05/13/dawkins/index.html",
    "revision": "c68802e4022359da7047fee4f9c5ad0f"
  },
  {
    "url": "blog/skepticism/2018/05/13/index.html",
    "revision": "e488be84e0310af597d852a01543c50c"
  },
  {
    "url": "blog/skepticism/2018/05/13/kangen/index.html",
    "revision": "9e329fcf2f15e0700c9527f6761dbb0b"
  },
  {
    "url": "blog/skepticism/2018/05/13/vitamins/index.html",
    "revision": "dec282ad133f6e2da3ed459a22114748"
  },
  {
    "url": "blog/skepticism/2018/05/27/flat/index.html",
    "revision": "809ba0943cee6dbc207e0997b0be7da5"
  },
  {
    "url": "blog/skepticism/2018/05/27/index.html",
    "revision": "eba526ba49199068f4b83374666e02bb"
  },
  {
    "url": "blog/skepticism/2018/05/27/kangen/index.html",
    "revision": "47bd96618a1210e45f7e74395cc99990"
  },
  {
    "url": "blog/skepticism/2018/05/27/ness/index.html",
    "revision": "2c1adbf088d32e9e9875a117ed366a5f"
  },
  {
    "url": "blog/skepticism/2018/05/27/oz/index.html",
    "revision": "a88cfdd30f689d40277789bc9a4e8dab"
  },
  {
    "url": "blog/skepticism/2018/05/27/psychic/index.html",
    "revision": "3dd47711f8a232cd3253dfc5a96d483b"
  },
  {
    "url": "blog/skepticism/2018/05/index.html",
    "revision": "6cb0c615f90002980f5772e4b669172f"
  },
  {
    "url": "blog/skepticism/2018/06/10/astrology/index.html",
    "revision": "bb3e550f6948a966a7f7cf2171e77707"
  },
  {
    "url": "blog/skepticism/2018/06/10/index.html",
    "revision": "d02e0e7fc9f2355abc0475fa9730015e"
  },
  {
    "url": "blog/skepticism/2018/06/10/nhs/index.html",
    "revision": "f2e11e3ef7903bee8ace4055913edaae"
  },
  {
    "url": "blog/skepticism/2018/06/10/shakti/index.html",
    "revision": "5213bbdc2fd109ac048284a6dfa7cfa4"
  },
  {
    "url": "blog/skepticism/2018/06/10/weetbix/index.html",
    "revision": "a738edbebe9be767a715338e888b6463"
  },
  {
    "url": "blog/skepticism/2018/06/24/blasphemy/index.html",
    "revision": "656dd3a6189f619a42b1616966ce2882"
  },
  {
    "url": "blog/skepticism/2018/06/24/cannabis/index.html",
    "revision": "4869384921573bed27a3871c5bf41d88"
  },
  {
    "url": "blog/skepticism/2018/06/24/hotdog/index.html",
    "revision": "15e70a2ad80e42318516f80a82326b33"
  },
  {
    "url": "blog/skepticism/2018/06/24/index.html",
    "revision": "75d0c02eed2e03d131ea307273da8c86"
  },
  {
    "url": "blog/skepticism/2018/06/24/led/index.html",
    "revision": "53bec096576c9afdeec6a215e467b971"
  },
  {
    "url": "blog/skepticism/2018/06/index.html",
    "revision": "d099442deafd789982f5767bf0179a5e"
  },
  {
    "url": "blog/skepticism/2018/07/08/bullet/index.html",
    "revision": "e64203cf518bf84cf994f3c30b640bec"
  },
  {
    "url": "blog/skepticism/2018/07/08/chiros/index.html",
    "revision": "e652ffa465bde5e06eaae1731d208a3e"
  },
  {
    "url": "blog/skepticism/2018/07/08/hiv/index.html",
    "revision": "ec28b81eaf1229f9f810d4b905532611"
  },
  {
    "url": "blog/skepticism/2018/07/08/hrv/index.html",
    "revision": "5f56be33f93b7c7ff376df9b25a5ca23"
  },
  {
    "url": "blog/skepticism/2018/07/08/index.html",
    "revision": "f1031d10de6f89588a0c800faf68aa6e"
  },
  {
    "url": "blog/skepticism/2018/07/22/cancer/index.html",
    "revision": "5f5ccdcbc91164d2f6ddfeccc34b3d49"
  },
  {
    "url": "blog/skepticism/2018/07/22/index.html",
    "revision": "e2b317f4daea0532ab4a6c19f64ce6eb"
  },
  {
    "url": "blog/skepticism/2018/07/22/resurrection/index.html",
    "revision": "26dfa570fa69a1a4e58aaf2a20a1cc73"
  },
  {
    "url": "blog/skepticism/2018/07/22/talc/index.html",
    "revision": "b8c07f591492f22f87c6ada66f2d5698"
  },
  {
    "url": "blog/skepticism/2018/07/22/visas/index.html",
    "revision": "4f43d9308745dbbc1ba25360f2024edf"
  },
  {
    "url": "blog/skepticism/2018/07/index.html",
    "revision": "aabd55a19ef90113230d1cba231ecc75"
  },
  {
    "url": "blog/skepticism/2018/08/05/conf/index.html",
    "revision": "2c353026618e2e56c4c280646563a367"
  },
  {
    "url": "blog/skepticism/2018/08/05/index.html",
    "revision": "e661a95caba6ac114ca19edeb1ccbcda"
  },
  {
    "url": "blog/skepticism/2018/08/05/qanon/index.html",
    "revision": "5c3769c316f668a76841425368e71103"
  },
  {
    "url": "blog/skepticism/2018/08/19/index.html",
    "revision": "43dc3cdd174c227aca031aad5e25b3e5"
  },
  {
    "url": "blog/skepticism/2018/08/19/jw/index.html",
    "revision": "334f9aba8b4cf6df5a55ed3e9620b855"
  },
  {
    "url": "blog/skepticism/2018/08/index.html",
    "revision": "8f024e35927a5168b4d3ab37d22ac1b3"
  },
  {
    "url": "blog/skepticism/2018/09/02/allergy/index.html",
    "revision": "6bdf72414c00773b49d593069d8b0662"
  },
  {
    "url": "blog/skepticism/2018/09/02/catholic/index.html",
    "revision": "105b695ce4334cbd10553cdd0faed031"
  },
  {
    "url": "blog/skepticism/2018/09/02/index.html",
    "revision": "198242ff0a2b7e2547013e1fb2e001b0"
  },
  {
    "url": "blog/skepticism/2018/09/02/jw/index.html",
    "revision": "d81dbd475da057e0653a7e5b2e274d9a"
  },
  {
    "url": "blog/skepticism/2018/09/02/sen/index.html",
    "revision": "d91b1a970e87f244632f07d6968e8491"
  },
  {
    "url": "blog/skepticism/2018/09/16/1080/index.html",
    "revision": "f86ce1886e958d2118ccacf35b23a80e"
  },
  {
    "url": "blog/skepticism/2018/09/16/church/index.html",
    "revision": "a43bc9d45f70aa1762c84c34f3d573cc"
  },
  {
    "url": "blog/skepticism/2018/09/16/index.html",
    "revision": "bd93d36e0f8d3db7e658aab1c5937a29"
  },
  {
    "url": "blog/skepticism/2018/09/16/jones/index.html",
    "revision": "fc5eb62c7e0b08d4870702a5d243a10d"
  },
  {
    "url": "blog/skepticism/2018/09/16/scammers/index.html",
    "revision": "179671bfced38e2aa71aad2808a9fcf6"
  },
  {
    "url": "blog/skepticism/2018/09/30/index.html",
    "revision": "8289d396c3b3ea11821e5540005366a1"
  },
  {
    "url": "blog/skepticism/2018/09/30/jw/index.html",
    "revision": "77bcefe4387426c96d4a2bab57a8eaa3"
  },
  {
    "url": "blog/skepticism/2018/09/30/oto/index.html",
    "revision": "16fa2aaf006b1d1e1ea0069af3b3c190"
  },
  {
    "url": "blog/skepticism/2018/09/30/who/index.html",
    "revision": "6d9f1ff4c20a5945336e1d40b64322f4"
  },
  {
    "url": "blog/skepticism/2018/09/index.html",
    "revision": "de39df3b405b7085e29f3b66a93b51f6"
  },
  {
    "url": "blog/skepticism/2018/10/14/hacked/index.html",
    "revision": "9cc8da40a9813a7424f23047730a2f0b"
  },
  {
    "url": "blog/skepticism/2018/10/14/index.html",
    "revision": "d35cf455121672946ec61653062f0d5f"
  },
  {
    "url": "blog/skepticism/2018/10/14/kangen/index.html",
    "revision": "bdf6bccb5dbbeba0c995205f19ccf487"
  },
  {
    "url": "blog/skepticism/2018/10/14/pakistan/index.html",
    "revision": "b70f05592f94db6fe3d0969e7d41bd3e"
  },
  {
    "url": "blog/skepticism/2018/10/14/sarah/index.html",
    "revision": "1ecc13cb0ec8beb1258382917ec8d429"
  },
  {
    "url": "blog/skepticism/2018/10/28/blasphemy/index.html",
    "revision": "5092cbed99d189caf994946429e315af"
  },
  {
    "url": "blog/skepticism/2018/10/28/hrv/index.html",
    "revision": "9afeb7f8a3c434b6110eb395544a9702"
  },
  {
    "url": "blog/skepticism/2018/10/28/index.html",
    "revision": "1ec54e814d390829da996944b376c57e"
  },
  {
    "url": "blog/skepticism/2018/10/28/jesus/index.html",
    "revision": "b55f1f96e813eb5527719f21b24403ba"
  },
  {
    "url": "blog/skepticism/2018/10/28/natural/index.html",
    "revision": "a5bb705eda387e2439cdb154d8688535"
  },
  {
    "url": "blog/skepticism/2018/10/index.html",
    "revision": "8048e36556af0016898caef5c38fcb67"
  },
  {
    "url": "blog/skepticism/2018/11/04/bibi/index.html",
    "revision": "241595a6c381f9a9dea8e0c0fa3706ee"
  },
  {
    "url": "blog/skepticism/2018/11/04/index.html",
    "revision": "0b40765a690cd6a8202effeb621633b5"
  },
  {
    "url": "blog/skepticism/2018/11/04/jesus/index.html",
    "revision": "b21bb3ffd0bb650750bbadaf2868ccf1"
  },
  {
    "url": "blog/skepticism/2018/11/04/obdii/index.html",
    "revision": "3b1a2f5f798e0633d4bd11e93844282a"
  },
  {
    "url": "blog/skepticism/2018/11/04/sleepdrops/index.html",
    "revision": "2eaf5b878e6312718b2e0a94990cdd5b"
  },
  {
    "url": "blog/skepticism/2018/11/index.html",
    "revision": "7aa9f2f4f402fa300cdcaf75d4cb9379"
  },
  {
    "url": "blog/skepticism/2018/12/02/ark/index.html",
    "revision": "bb96a0d616964f4ed527d649351c178c"
  },
  {
    "url": "blog/skepticism/2018/12/02/green/index.html",
    "revision": "7551403ff5239227b6b14416df23f779"
  },
  {
    "url": "blog/skepticism/2018/12/02/index.html",
    "revision": "af19989dee9bd59c70baac73422a3469"
  },
  {
    "url": "blog/skepticism/2018/12/02/ri/index.html",
    "revision": "affbefa9ad50290b35677b7609ddeb27"
  },
  {
    "url": "blog/skepticism/2018/12/16/blasphemy/index.html",
    "revision": "508a9303a2b120188ed93542cc6a9e80"
  },
  {
    "url": "blog/skepticism/2018/12/16/index.html",
    "revision": "43fc406415ca5e035fd72916b6b0f8b8"
  },
  {
    "url": "blog/skepticism/2018/12/16/sleepdrops/index.html",
    "revision": "88f07b23ff38f1b03480ee2dd9fa7899"
  },
  {
    "url": "blog/skepticism/2018/12/16/tekiri/index.html",
    "revision": "2715b5e1ce264268266cfadca00b4ce7"
  },
  {
    "url": "blog/skepticism/2018/12/index.html",
    "revision": "a803942a2440be12374c88189327bead"
  },
  {
    "url": "blog/skepticism/2018/index.html",
    "revision": "101e9b2949b0f3e048ed67b83128dfaf"
  },
  {
    "url": "blog/skepticism/index.html",
    "revision": "9af2e6c133cee41ede1d8a5bf64c991d"
  },
  {
    "url": "blog/tag/index.html",
    "revision": "5f413b2237f441b2403be788e53b0fb2"
  },
  {
    "url": "contact/index.html",
    "revision": "1b5b86fbc505eeb82b9e62bd32ac6d3b"
  },
  {
    "url": "cv/cover/index.html",
    "revision": "47574a693af7c349527b255170f42137"
  },
  {
    "url": "cv/full.html",
    "revision": "59f84c44ba2593259ad798c1150baecc"
  },
  {
    "url": "cv/full/index.html",
    "revision": "26a8d284d8108e4c3cb3514c44484ef0"
  },
  {
    "url": "cv/index.html",
    "revision": "d3390ac11bdb02a3bbfdab788ca3db4d"
  },
  {
    "url": "cv/short.html",
    "revision": "fb8fb90791005d96743fdf6be030d4fa"
  },
  {
    "url": "googlee25d0c06da891164.html",
    "revision": "0defe75660212f417b90c5affcd03380"
  },
  {
    "url": "index.html",
    "revision": "4a04827dd3d9f5271546519787c91cb5"
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
    "revision": "dcb97129817d3244a59472ff7b0604c8"
  },
  {
    "url": "media/me/index.html",
    "revision": "4b75b20b445873774df7dd8978927621"
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
    "revision": "a08ca8f2b8f3de801fdfbbf8c2c45c32"
  },
  {
    "url": "status/index.html",
    "revision": "da95afe5e7aae8034ebc3f7e6d6c8864"
  },
  {
    "url": "status/steam/index.html",
    "revision": "36454a2747f6d10542267a54a7444a63"
  },
  {
    "url": "status/twitter/index.html",
    "revision": "8c11c3ce392f4c77c7f28db34414ce2d"
  },
  {
    "url": "status/wikipedia/index.html",
    "revision": "65e4e8c7d6f08c8691d0b81d46520785"
  },
  {
    "url": "test/index.html",
    "revision": "c2ab8f718b72df689b7d49299a12c042"
  },
  {
    "url": "test/webcam/index.html",
    "revision": "33be7aa0e70fa8ff8c5a55ab4425c4cf"
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
