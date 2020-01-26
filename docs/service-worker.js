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
    "revision": "59157b32bf35a414b61c95dd9ed8a552"
  },
  {
    "url": "assets/css/0.styles.css",
    "revision": "c01cd49d98df0d9f42a28dca6849d55a"
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
    "revision": "c50a482a89c55af90792431c66347565"
  },
  {
    "url": "assets/js/10.js",
    "revision": "53a1adadefb5fbc6091184ecac275079"
  },
  {
    "url": "assets/js/100.js",
    "revision": "08ff8700bf4a26ef560397b4bb459cbe"
  },
  {
    "url": "assets/js/101.js",
    "revision": "73177deee8f3640ad1e4dc0cd4292e9a"
  },
  {
    "url": "assets/js/102.js",
    "revision": "ee62b32851d71fc41de6da629fd0eead"
  },
  {
    "url": "assets/js/103.js",
    "revision": "9a2569cf908f8b166c4a0daa17fa0104"
  },
  {
    "url": "assets/js/104.js",
    "revision": "d10f8f9b5264f4b16492540fc36b7d03"
  },
  {
    "url": "assets/js/105.js",
    "revision": "52bbfbcd7a712d117051ad92f073a82c"
  },
  {
    "url": "assets/js/106.js",
    "revision": "0ece1ae25a6c8d1b2f2c36732f337902"
  },
  {
    "url": "assets/js/107.js",
    "revision": "9ac4c56daa7761bd221e6b86b056803b"
  },
  {
    "url": "assets/js/108.js",
    "revision": "6025c19e9744aacc861f5b089c60563a"
  },
  {
    "url": "assets/js/109.js",
    "revision": "b285c6cd61176a689f4cc08724c03d11"
  },
  {
    "url": "assets/js/11.js",
    "revision": "a0648e0fac811a32e65c72721432834c"
  },
  {
    "url": "assets/js/110.js",
    "revision": "e9444f918e16dd335a1580b542dbc6bc"
  },
  {
    "url": "assets/js/111.js",
    "revision": "e891b2327023ff2461927fb378db05e6"
  },
  {
    "url": "assets/js/112.js",
    "revision": "98bec906d948b127550b337cd10ba55e"
  },
  {
    "url": "assets/js/113.js",
    "revision": "a1cfd63e85fe14761814440b794603e0"
  },
  {
    "url": "assets/js/114.js",
    "revision": "7e207acb8029b6ddb13abab8e2eb6b8b"
  },
  {
    "url": "assets/js/115.js",
    "revision": "6bc9e8cfa88ca489201c05cfa97d952b"
  },
  {
    "url": "assets/js/116.js",
    "revision": "fb59105f6273ba783bba6d81ec8574ca"
  },
  {
    "url": "assets/js/117.js",
    "revision": "bb379c93e0e36b73442f2fa36ccc02c1"
  },
  {
    "url": "assets/js/118.js",
    "revision": "24d95484450d9bd7c2de25f35c272b83"
  },
  {
    "url": "assets/js/119.js",
    "revision": "9f92855fb5fb70b66afa15c7310947a7"
  },
  {
    "url": "assets/js/12.js",
    "revision": "c2269c7dc251871496e05c1372a77584"
  },
  {
    "url": "assets/js/120.js",
    "revision": "d41a4475c44fdf5cb66fa7666eb17780"
  },
  {
    "url": "assets/js/121.js",
    "revision": "e691a16c5aa5a4f24eb825194798db13"
  },
  {
    "url": "assets/js/122.js",
    "revision": "fd63d4b5122407fa8351280e319afeba"
  },
  {
    "url": "assets/js/123.js",
    "revision": "0f5a895ca2c92bf896a419bb1a28cb68"
  },
  {
    "url": "assets/js/124.js",
    "revision": "5b948aec0cf0ade928706307f2aeb5e1"
  },
  {
    "url": "assets/js/125.js",
    "revision": "caefb7e34ed464c882181b4d23305427"
  },
  {
    "url": "assets/js/126.js",
    "revision": "f96a780136b3922a6158186a15f2b208"
  },
  {
    "url": "assets/js/127.js",
    "revision": "ad21a20c7570808b85b1882ef827e00e"
  },
  {
    "url": "assets/js/128.js",
    "revision": "4c51c3c209232fb562b25f56b56cdad0"
  },
  {
    "url": "assets/js/129.js",
    "revision": "b689b8b71ffcc5668b84e6dd39b5a07a"
  },
  {
    "url": "assets/js/13.js",
    "revision": "4a382918747cd9d6c71ea2a747505d2b"
  },
  {
    "url": "assets/js/130.js",
    "revision": "5e96ce329401677c4a7f2c3dc614591a"
  },
  {
    "url": "assets/js/131.js",
    "revision": "1c5550921df3ffe7c5d8ca2c6797fbb0"
  },
  {
    "url": "assets/js/132.js",
    "revision": "deab6fce970664e0a6c889ec8142facf"
  },
  {
    "url": "assets/js/133.js",
    "revision": "46e799058fab8987c412c83cbca3f865"
  },
  {
    "url": "assets/js/134.js",
    "revision": "b3d0a4c2d6d99a4d11e1408b3341873f"
  },
  {
    "url": "assets/js/135.js",
    "revision": "23dacf8fcfa08e55550f7bc18c4b6fcd"
  },
  {
    "url": "assets/js/136.js",
    "revision": "316bcb99c08567fa9e80318b07f334d1"
  },
  {
    "url": "assets/js/137.js",
    "revision": "6f67d1f42e095e5d41ddec357844ebe2"
  },
  {
    "url": "assets/js/138.js",
    "revision": "8bb81539dab6d90bb50e1ed8463700c8"
  },
  {
    "url": "assets/js/139.js",
    "revision": "975b778b9d32035ed874b39a6fd9fa50"
  },
  {
    "url": "assets/js/14.js",
    "revision": "e596a006088524bd5b20b2a58d56742d"
  },
  {
    "url": "assets/js/140.js",
    "revision": "2af041c7ececc45faf5110fafea69d62"
  },
  {
    "url": "assets/js/141.js",
    "revision": "c6eddc75588b8189421b577fa645f87f"
  },
  {
    "url": "assets/js/142.js",
    "revision": "3c19ea37b17f627460896c6e8d354962"
  },
  {
    "url": "assets/js/143.js",
    "revision": "b1945d0c7ab05db72367ef4cacf51ffa"
  },
  {
    "url": "assets/js/144.js",
    "revision": "a1f4bb1af4f8166905efba28289ce13b"
  },
  {
    "url": "assets/js/145.js",
    "revision": "c84c8d2b509865ead1f69ca4065be8a1"
  },
  {
    "url": "assets/js/146.js",
    "revision": "cb01c80856c9a7229ee5d52d09fceb16"
  },
  {
    "url": "assets/js/147.js",
    "revision": "f371c09015905cdfdf82155b9419aece"
  },
  {
    "url": "assets/js/148.js",
    "revision": "0cdedfa9f8a9ce65e0ea40b8cb01bd9c"
  },
  {
    "url": "assets/js/149.js",
    "revision": "000ebb7fdb2f567dd344b6c0194bb5a0"
  },
  {
    "url": "assets/js/15.js",
    "revision": "7962e9a87427039ef4dbcd8ab884a848"
  },
  {
    "url": "assets/js/150.js",
    "revision": "0efd3ef4c6a97b53279bbb65e86902d9"
  },
  {
    "url": "assets/js/151.js",
    "revision": "7f397cb115a5e84e0a0f71c2acc65d89"
  },
  {
    "url": "assets/js/152.js",
    "revision": "d911284714f71769d34883d06ce86c86"
  },
  {
    "url": "assets/js/153.js",
    "revision": "af60fdb66535223cc653d43a1044dbda"
  },
  {
    "url": "assets/js/154.js",
    "revision": "2df092bb8d8398a037983a964bacd843"
  },
  {
    "url": "assets/js/155.js",
    "revision": "135e0c98faa343f19b7cd80ec2663e4b"
  },
  {
    "url": "assets/js/156.js",
    "revision": "12bae77ea4a22e467ea3153ecff07887"
  },
  {
    "url": "assets/js/157.js",
    "revision": "43a37815a271ae7487d0af8622ee7647"
  },
  {
    "url": "assets/js/158.js",
    "revision": "065553ef5efd86d51b332e6678c64db4"
  },
  {
    "url": "assets/js/159.js",
    "revision": "564e8dcbafa1dfa84da84d8abe26f3ec"
  },
  {
    "url": "assets/js/16.js",
    "revision": "d0c9a13a2307d62d45fad06b10e93489"
  },
  {
    "url": "assets/js/160.js",
    "revision": "fe948fe4985bdf1d5e2e3321b826148a"
  },
  {
    "url": "assets/js/161.js",
    "revision": "ef53609b9d84f8430283322f6390a03c"
  },
  {
    "url": "assets/js/162.js",
    "revision": "d8c34b16bb9e15edcb8bd2aa14ee6c3e"
  },
  {
    "url": "assets/js/163.js",
    "revision": "f18069aae79b3fd4c1a398d080d143d3"
  },
  {
    "url": "assets/js/164.js",
    "revision": "f54a5ec170e9637d0226ce5ecf43613e"
  },
  {
    "url": "assets/js/165.js",
    "revision": "d3171e39896dcbaf267a337991def341"
  },
  {
    "url": "assets/js/166.js",
    "revision": "a164fabe516086867aa755ae7756b622"
  },
  {
    "url": "assets/js/167.js",
    "revision": "6d779fe9bb674f05f379cfd3559a484b"
  },
  {
    "url": "assets/js/168.js",
    "revision": "58a5cc6bfb9996b0841894a5a99c2381"
  },
  {
    "url": "assets/js/169.js",
    "revision": "96777d89e1b838d76bfd2884b717a7b5"
  },
  {
    "url": "assets/js/17.js",
    "revision": "99492435572a410f20868a68aa24278c"
  },
  {
    "url": "assets/js/170.js",
    "revision": "00fb75041cea4bcc9bda414a758d290c"
  },
  {
    "url": "assets/js/171.js",
    "revision": "6333621e0015b07ceda4380570e42d43"
  },
  {
    "url": "assets/js/172.js",
    "revision": "af91d02c99d042a0a88f3963fffe3346"
  },
  {
    "url": "assets/js/173.js",
    "revision": "e614e3f0772171cea6a299e7c4a98354"
  },
  {
    "url": "assets/js/174.js",
    "revision": "c01a0623b2fa2fea22da67654fad2f88"
  },
  {
    "url": "assets/js/175.js",
    "revision": "dba00a3730db910e4fa5ea743896ff9a"
  },
  {
    "url": "assets/js/176.js",
    "revision": "54790d544819117ea99c545b37624ff7"
  },
  {
    "url": "assets/js/177.js",
    "revision": "76287bd78afe20fc1d3a71be71a4f972"
  },
  {
    "url": "assets/js/178.js",
    "revision": "8c23e8e646627d7736827d34c5a8f980"
  },
  {
    "url": "assets/js/179.js",
    "revision": "3d63478ad9f7f893831b547704540403"
  },
  {
    "url": "assets/js/18.js",
    "revision": "02893bb2f2188d82fc699080b4b7a144"
  },
  {
    "url": "assets/js/180.js",
    "revision": "de5871043e65c427c771467bb6525d3e"
  },
  {
    "url": "assets/js/181.js",
    "revision": "24d9b33300521235e7f1d5fb602a260b"
  },
  {
    "url": "assets/js/182.js",
    "revision": "1ffdff111b09b5caf5d1ba75a1376850"
  },
  {
    "url": "assets/js/183.js",
    "revision": "406b96ef88f7d130e02184d4e5efa2f9"
  },
  {
    "url": "assets/js/184.js",
    "revision": "8ae9b2e6b80f58c8a4bfebf6583ed8fc"
  },
  {
    "url": "assets/js/185.js",
    "revision": "842e0446ea918faa498b402ed3553246"
  },
  {
    "url": "assets/js/186.js",
    "revision": "00c1f1045f556ff4b2316fa0bf656d53"
  },
  {
    "url": "assets/js/187.js",
    "revision": "8d7ebf3edc4183f414b256bb5aa46328"
  },
  {
    "url": "assets/js/188.js",
    "revision": "f2c9ef56ce6cb66f278d5cf38ba56041"
  },
  {
    "url": "assets/js/189.js",
    "revision": "e55fba0827145931768cb6dc622551dc"
  },
  {
    "url": "assets/js/19.js",
    "revision": "6e712a844e7d10b46e0af1b6fc563893"
  },
  {
    "url": "assets/js/190.js",
    "revision": "8a652cfe8e227774cb3b4394ac5144af"
  },
  {
    "url": "assets/js/191.js",
    "revision": "3ff041195a43f87baf5394d379ac08eb"
  },
  {
    "url": "assets/js/192.js",
    "revision": "c064f8c45cc1562398d4bf807026c88a"
  },
  {
    "url": "assets/js/193.js",
    "revision": "58717414cf178f1523a340d82157956f"
  },
  {
    "url": "assets/js/194.js",
    "revision": "c1d682b61f886f432d759ea8e20d594e"
  },
  {
    "url": "assets/js/195.js",
    "revision": "f0042e061a44428ad70dd7bc9dc41b6d"
  },
  {
    "url": "assets/js/196.js",
    "revision": "3b7ef3f3ac70137786d4d7eea74507ec"
  },
  {
    "url": "assets/js/197.js",
    "revision": "ba6f47a14f20de3e858fa1a71db18e4f"
  },
  {
    "url": "assets/js/198.js",
    "revision": "1889912c72d8ff6b3ad9079c30e94bcd"
  },
  {
    "url": "assets/js/199.js",
    "revision": "9c497cd98fec4dea5a034ad2241260dc"
  },
  {
    "url": "assets/js/2.js",
    "revision": "e428ac5be6ed4185e810b5ed2f5a37e3"
  },
  {
    "url": "assets/js/20.js",
    "revision": "5ed475855eeb7023d8ca03f1810311fb"
  },
  {
    "url": "assets/js/200.js",
    "revision": "967ab60e13746b66580823d97d5e73e6"
  },
  {
    "url": "assets/js/201.js",
    "revision": "871b887821db5bf2bfc87c1ceb5d83a8"
  },
  {
    "url": "assets/js/202.js",
    "revision": "73d87a7bf260794e12eb22b3cce45eef"
  },
  {
    "url": "assets/js/203.js",
    "revision": "453aee7d67e5d288571430ad8cc0dc4f"
  },
  {
    "url": "assets/js/204.js",
    "revision": "7c75c07d5fd934c2705deeda5a300f72"
  },
  {
    "url": "assets/js/205.js",
    "revision": "ab76920ffc8a7d758096104eace9f4a9"
  },
  {
    "url": "assets/js/206.js",
    "revision": "e6d95e17ebfeca67996c42c53693b28c"
  },
  {
    "url": "assets/js/207.js",
    "revision": "3c3d58027b4e501b8ac1fc7d8f7d022d"
  },
  {
    "url": "assets/js/208.js",
    "revision": "408df1b451cd22c097a40c35b91cb538"
  },
  {
    "url": "assets/js/209.js",
    "revision": "37d164261f77bed6779a1dc3f30f7642"
  },
  {
    "url": "assets/js/21.js",
    "revision": "fc9d9539445523cdc8c1d644f3443c24"
  },
  {
    "url": "assets/js/210.js",
    "revision": "2c3f390ef4de25143c4488a109abf016"
  },
  {
    "url": "assets/js/211.js",
    "revision": "4d59ab1bfd059252649e76e0dccffc78"
  },
  {
    "url": "assets/js/212.js",
    "revision": "2bd8f4110270b3dfa51e1e9772a29b5a"
  },
  {
    "url": "assets/js/213.js",
    "revision": "8e1d49734655eb87fa3843e1a6e78915"
  },
  {
    "url": "assets/js/214.js",
    "revision": "d630998fe46705a083623f814c3841cf"
  },
  {
    "url": "assets/js/215.js",
    "revision": "b59a62e6bea1c8dbee32e497454cfd20"
  },
  {
    "url": "assets/js/216.js",
    "revision": "b79200e7134359e6734b2100f732076a"
  },
  {
    "url": "assets/js/217.js",
    "revision": "fbb06d67f9ef6a57afafe2c84c5c5101"
  },
  {
    "url": "assets/js/218.js",
    "revision": "497907886597c2314d5ecf992f6752be"
  },
  {
    "url": "assets/js/219.js",
    "revision": "cfe7ccea40302553a2f44ad26868a123"
  },
  {
    "url": "assets/js/22.js",
    "revision": "9ce0d6ce2429f7260009076e81fbce01"
  },
  {
    "url": "assets/js/220.js",
    "revision": "6aba89a34da905f7623b4835ae50ad3c"
  },
  {
    "url": "assets/js/221.js",
    "revision": "c985a9b7442f775de8a1b6cad186de24"
  },
  {
    "url": "assets/js/222.js",
    "revision": "9a93a63451439bfc2bc9918f7add4b18"
  },
  {
    "url": "assets/js/223.js",
    "revision": "49da5cae9f5dc1ac2ace6868dcac4529"
  },
  {
    "url": "assets/js/224.js",
    "revision": "f3f5985e96c16744819c22dbc14a149b"
  },
  {
    "url": "assets/js/225.js",
    "revision": "aabcdfe68b944f564ec4c88cbc941dcb"
  },
  {
    "url": "assets/js/226.js",
    "revision": "548ca7161530054686f4306802971119"
  },
  {
    "url": "assets/js/227.js",
    "revision": "04f5b79707f852eecb6c969d22bb7433"
  },
  {
    "url": "assets/js/228.js",
    "revision": "15efa525f07e0047a9cb1f5d389ae4d3"
  },
  {
    "url": "assets/js/229.js",
    "revision": "7178468c80613ba954ed6063455beb19"
  },
  {
    "url": "assets/js/23.js",
    "revision": "5b41b9ef0db988fb0551d19248797c28"
  },
  {
    "url": "assets/js/230.js",
    "revision": "ec78f63bc48b1d19e39a0a373498f90a"
  },
  {
    "url": "assets/js/231.js",
    "revision": "6b9eb8990e530af2abc18bfd23523d47"
  },
  {
    "url": "assets/js/232.js",
    "revision": "33c58f829296e3d96b9b0b7b4618359c"
  },
  {
    "url": "assets/js/233.js",
    "revision": "69d0994b39324e44a95f9353d7ceec3f"
  },
  {
    "url": "assets/js/234.js",
    "revision": "46531cc978469d5c2ce68e12335e1be3"
  },
  {
    "url": "assets/js/235.js",
    "revision": "8c1998de0e88a72c6243e3367e197b67"
  },
  {
    "url": "assets/js/236.js",
    "revision": "99a2c27050377f9c63ec533a5553d979"
  },
  {
    "url": "assets/js/237.js",
    "revision": "46d83c86af0dc7dacb471243681d827c"
  },
  {
    "url": "assets/js/238.js",
    "revision": "5f956118aa4e36fbfd2a399011fe86a6"
  },
  {
    "url": "assets/js/239.js",
    "revision": "a8a82e05d59f97cd5d9164d1266c354a"
  },
  {
    "url": "assets/js/24.js",
    "revision": "df5f2d56d705549006cd73a4ca7e77f5"
  },
  {
    "url": "assets/js/240.js",
    "revision": "eb1323c429bd010c80926153e5e661d1"
  },
  {
    "url": "assets/js/241.js",
    "revision": "a34d70e1bd45c66145e492ca0c92adc3"
  },
  {
    "url": "assets/js/242.js",
    "revision": "fba9455bcfac7b9679447769d9141d16"
  },
  {
    "url": "assets/js/243.js",
    "revision": "c41aa16e515268baef3bb024e5c89c4d"
  },
  {
    "url": "assets/js/244.js",
    "revision": "3b548ff4944d227ad2c6a17ef9b2a86d"
  },
  {
    "url": "assets/js/245.js",
    "revision": "78932eb000da274120c8708df4f69b02"
  },
  {
    "url": "assets/js/246.js",
    "revision": "3a9e18ea7d346146bb3a22bf22a4d570"
  },
  {
    "url": "assets/js/247.js",
    "revision": "1f18d10e91ea8fd733446d0455c59563"
  },
  {
    "url": "assets/js/248.js",
    "revision": "29a406d45c561363851c1adc3562e02a"
  },
  {
    "url": "assets/js/249.js",
    "revision": "e24dd2f0c3943a99a8a9bc42758f6239"
  },
  {
    "url": "assets/js/25.js",
    "revision": "c1260f8395d46f55d6a634b096020a72"
  },
  {
    "url": "assets/js/250.js",
    "revision": "c8992912a0c8cf9fe4f65878147bbf93"
  },
  {
    "url": "assets/js/251.js",
    "revision": "51111b2d6a0d44983476f206943eaaea"
  },
  {
    "url": "assets/js/252.js",
    "revision": "5d9f63d6832b2008e16a41fbf17c5686"
  },
  {
    "url": "assets/js/253.js",
    "revision": "7b662a4766cf7202ff837877daa4dc03"
  },
  {
    "url": "assets/js/254.js",
    "revision": "38137b244e88aa6a6661cd051a5faaf1"
  },
  {
    "url": "assets/js/255.js",
    "revision": "59b55d4da00b57cfa054f3f3a7fd3e43"
  },
  {
    "url": "assets/js/256.js",
    "revision": "39a278db4a8465d131d09a382b721c90"
  },
  {
    "url": "assets/js/257.js",
    "revision": "ca7f10f46f64a2e87f5506a3549589e5"
  },
  {
    "url": "assets/js/258.js",
    "revision": "1ab454e3a72e18e83823e6ca68003577"
  },
  {
    "url": "assets/js/259.js",
    "revision": "4ea2aa92eaa022cc68762a7a0f237823"
  },
  {
    "url": "assets/js/26.js",
    "revision": "4e8261fc4a124324ef1ddb61d3a10737"
  },
  {
    "url": "assets/js/260.js",
    "revision": "630783feb75be81ab6c52090018427b6"
  },
  {
    "url": "assets/js/261.js",
    "revision": "a575f204d528718d3e1e200336b20846"
  },
  {
    "url": "assets/js/262.js",
    "revision": "6fa3e5980cd17ffe219a1bc48b734d71"
  },
  {
    "url": "assets/js/263.js",
    "revision": "0570845dc6818716e12dda2e0c36cb46"
  },
  {
    "url": "assets/js/264.js",
    "revision": "1aafe027c461909edefdddce65622cf4"
  },
  {
    "url": "assets/js/265.js",
    "revision": "3a53c27d7162177c921078ee6ecec529"
  },
  {
    "url": "assets/js/266.js",
    "revision": "0e75e5d585f0bd64b00e16bd48bc947d"
  },
  {
    "url": "assets/js/267.js",
    "revision": "d25bb84699db15fc1c597a1d5ed16b1d"
  },
  {
    "url": "assets/js/268.js",
    "revision": "6ddd8eff7b832e51f3dd363b52cf4075"
  },
  {
    "url": "assets/js/269.js",
    "revision": "20c986e7b11655ce3c9b96ac781131f6"
  },
  {
    "url": "assets/js/27.js",
    "revision": "797dbfa84759996ad60be8bf8b84dc20"
  },
  {
    "url": "assets/js/270.js",
    "revision": "1376f73e224c1950ba940efb9c0a26ad"
  },
  {
    "url": "assets/js/271.js",
    "revision": "be016003a3db2894c00d2a18bce47869"
  },
  {
    "url": "assets/js/272.js",
    "revision": "2133a86e14de3796428c744116d7c9a8"
  },
  {
    "url": "assets/js/273.js",
    "revision": "7c7d921149e1dc11cd4df2879d7e77d9"
  },
  {
    "url": "assets/js/274.js",
    "revision": "8a80f00a1b556daa0c0f9b2cc8d4d1bf"
  },
  {
    "url": "assets/js/275.js",
    "revision": "822f4f503cca833414d9571e901e75bc"
  },
  {
    "url": "assets/js/276.js",
    "revision": "dec05068dd95539d36cc97f4991bfef0"
  },
  {
    "url": "assets/js/277.js",
    "revision": "7848bacc78e6bf31ec274921334e031b"
  },
  {
    "url": "assets/js/278.js",
    "revision": "319999353d5f6a76e7ed8824d3d28fda"
  },
  {
    "url": "assets/js/279.js",
    "revision": "f97ff1c6f83b767360e303e7b6f54882"
  },
  {
    "url": "assets/js/28.js",
    "revision": "f149b1a1434f287530875a56b8e2d98c"
  },
  {
    "url": "assets/js/280.js",
    "revision": "b134d810d8a0b9eafc32f704c4745250"
  },
  {
    "url": "assets/js/281.js",
    "revision": "2cd68b65ad1d73da5b6b19f8b5163178"
  },
  {
    "url": "assets/js/282.js",
    "revision": "bb5aa21bf3a17a7a149efc465a9a21be"
  },
  {
    "url": "assets/js/283.js",
    "revision": "0e39b864b574ba2b45e1027ee55c539e"
  },
  {
    "url": "assets/js/284.js",
    "revision": "713f687cca7357d62ec5a8345ed6b62a"
  },
  {
    "url": "assets/js/285.js",
    "revision": "3a3969279dfb17d368332b4ed090cdb0"
  },
  {
    "url": "assets/js/286.js",
    "revision": "c4e47ae2805a0462b71c2ca250acbb45"
  },
  {
    "url": "assets/js/287.js",
    "revision": "299bcb0644c27a8e93beb20b6b19bf7e"
  },
  {
    "url": "assets/js/288.js",
    "revision": "24eda131a26656f1b6c9e6e889baae3a"
  },
  {
    "url": "assets/js/289.js",
    "revision": "36118f9a374d5bc7fb9c6c26456bd105"
  },
  {
    "url": "assets/js/29.js",
    "revision": "203c62109b4c81fd56e5569e5d59c0c8"
  },
  {
    "url": "assets/js/290.js",
    "revision": "b0181d60d1e2bfa1abf51cac52082ab8"
  },
  {
    "url": "assets/js/291.js",
    "revision": "42d2fd2299ea063d03f96e5aa947c28b"
  },
  {
    "url": "assets/js/292.js",
    "revision": "e59b6885e3177f8b7d10caa01a0d61c9"
  },
  {
    "url": "assets/js/293.js",
    "revision": "7f3c821ddd2586315d6f146285defed3"
  },
  {
    "url": "assets/js/294.js",
    "revision": "1d5e03161abb80da4925f464d61a3bf3"
  },
  {
    "url": "assets/js/295.js",
    "revision": "310856a507bf63e6ee987eb1aad6af56"
  },
  {
    "url": "assets/js/296.js",
    "revision": "48264c5f56ef2a4c0402d1776c59ef26"
  },
  {
    "url": "assets/js/297.js",
    "revision": "c956ba1c34790c56ef7b4be084e8ab7f"
  },
  {
    "url": "assets/js/298.js",
    "revision": "b10df8e12282a3567aa95bbddcdf20cc"
  },
  {
    "url": "assets/js/299.js",
    "revision": "9dbe991b31ea11e0c5536f6f8f8c053a"
  },
  {
    "url": "assets/js/3.js",
    "revision": "5584ba156839442d6d21b283fff59f8d"
  },
  {
    "url": "assets/js/30.js",
    "revision": "9db2f6c4b1610ae58d1c5cd9438f9c56"
  },
  {
    "url": "assets/js/300.js",
    "revision": "e920b940e845144749618f00f74d7be8"
  },
  {
    "url": "assets/js/301.js",
    "revision": "a210c643b3fec78e3c3690717f103884"
  },
  {
    "url": "assets/js/302.js",
    "revision": "5c5331646cb15f7071acc0a6ad95f6b1"
  },
  {
    "url": "assets/js/303.js",
    "revision": "78da6e927f91ff2107bacc2ab66b9648"
  },
  {
    "url": "assets/js/304.js",
    "revision": "0872c8846cac7ee9a99f9f8c38727ccf"
  },
  {
    "url": "assets/js/305.js",
    "revision": "115fdc06698e926046266b69fd4fa972"
  },
  {
    "url": "assets/js/306.js",
    "revision": "390f6d4296cd1845e276b49a3119ad28"
  },
  {
    "url": "assets/js/307.js",
    "revision": "2cdf93297de86778a91de04079185954"
  },
  {
    "url": "assets/js/308.js",
    "revision": "6377d3f54ebffb3ef92303620f92a0aa"
  },
  {
    "url": "assets/js/309.js",
    "revision": "5a1a1ac4a48200b828f1c8d73244c00e"
  },
  {
    "url": "assets/js/31.js",
    "revision": "6d77241d6ed14dbac66f444fd104f0ae"
  },
  {
    "url": "assets/js/310.js",
    "revision": "1af506d1956df9e5f2ba8c7b2a0d5e08"
  },
  {
    "url": "assets/js/311.js",
    "revision": "216b25107519cd1fc8bdd9890cc997ba"
  },
  {
    "url": "assets/js/312.js",
    "revision": "117aa203970176b0519aabd15a00b689"
  },
  {
    "url": "assets/js/313.js",
    "revision": "f41c14bd1cf80f6384f9a9247eca4a1b"
  },
  {
    "url": "assets/js/314.js",
    "revision": "a801d24e8e0880b3f7fb0e78d3242189"
  },
  {
    "url": "assets/js/315.js",
    "revision": "70974e85a77b8774e3102cee816e2671"
  },
  {
    "url": "assets/js/316.js",
    "revision": "108816ae0c3692c2a2af6a455ab4d35f"
  },
  {
    "url": "assets/js/317.js",
    "revision": "c55ad178f2ae819de4743b909c78be15"
  },
  {
    "url": "assets/js/318.js",
    "revision": "84852ad27d9433f29512e7c5300153de"
  },
  {
    "url": "assets/js/319.js",
    "revision": "f66be82290f27aef2cacc0016ae582f7"
  },
  {
    "url": "assets/js/32.js",
    "revision": "614794d5ed7b2b5ffee41961a2ac37a0"
  },
  {
    "url": "assets/js/320.js",
    "revision": "bae06901e11a9d78f181c2f6297e80a5"
  },
  {
    "url": "assets/js/321.js",
    "revision": "6db54f4d0042d40074d5724acc366c0b"
  },
  {
    "url": "assets/js/322.js",
    "revision": "1b659301f445bf63703123185c2eecaa"
  },
  {
    "url": "assets/js/323.js",
    "revision": "82801c5d232dd348661be68543e812ec"
  },
  {
    "url": "assets/js/324.js",
    "revision": "f2d9d17c991b00d6051db23fb0ee0d18"
  },
  {
    "url": "assets/js/325.js",
    "revision": "4b2de68dc18dce57990073603b99a939"
  },
  {
    "url": "assets/js/326.js",
    "revision": "fc63d1d7d58b8000a4e76311b7e94ad0"
  },
  {
    "url": "assets/js/327.js",
    "revision": "ae3bf5a4931f9560ee6853e1ce05dde2"
  },
  {
    "url": "assets/js/328.js",
    "revision": "c901195dab0f6571b9ab9ca48a6b70f7"
  },
  {
    "url": "assets/js/329.js",
    "revision": "a95e5acd555f6e611b9d5104f64543ce"
  },
  {
    "url": "assets/js/33.js",
    "revision": "84e724975f326fef42bf35d7f58672b4"
  },
  {
    "url": "assets/js/330.js",
    "revision": "d243d0d2fb53ec18f82426c9a230feba"
  },
  {
    "url": "assets/js/331.js",
    "revision": "0ae1c8fb81cdb887c81deb35bdb62f9a"
  },
  {
    "url": "assets/js/332.js",
    "revision": "13da975d36e7c060d806a5935ae99dfe"
  },
  {
    "url": "assets/js/333.js",
    "revision": "eccc0d696bba7354fa909c808ab3c17b"
  },
  {
    "url": "assets/js/334.js",
    "revision": "acb4b274113ed2ea8265cfeaed23867e"
  },
  {
    "url": "assets/js/335.js",
    "revision": "a2e0493f72e8248c9d1be6f093a254c7"
  },
  {
    "url": "assets/js/336.js",
    "revision": "c246aa768a8381404f6ca4020652974a"
  },
  {
    "url": "assets/js/337.js",
    "revision": "17c3cc40968b01e8e9725926fb4146f4"
  },
  {
    "url": "assets/js/338.js",
    "revision": "8524d79ed550a202e934d5b8e580703e"
  },
  {
    "url": "assets/js/339.js",
    "revision": "8ab46d2da57335de7a6c0caf555f167c"
  },
  {
    "url": "assets/js/34.js",
    "revision": "0e945a46c945618580bc028aa475c798"
  },
  {
    "url": "assets/js/340.js",
    "revision": "51242590ba50021e13b52dd2bad5b5d2"
  },
  {
    "url": "assets/js/341.js",
    "revision": "4eacf755b9257ad275a5cdfe8428b46e"
  },
  {
    "url": "assets/js/342.js",
    "revision": "0e62a42f562983973c866e1311a51acc"
  },
  {
    "url": "assets/js/343.js",
    "revision": "e4bd28814dca4a658c7b5b9365a2672f"
  },
  {
    "url": "assets/js/344.js",
    "revision": "d10ff29d1ced89f54eb33092a176e7f0"
  },
  {
    "url": "assets/js/345.js",
    "revision": "73a3720620dbb95e2bba214c16e47014"
  },
  {
    "url": "assets/js/346.js",
    "revision": "449ac8099b4891e5bba7550208b98b4a"
  },
  {
    "url": "assets/js/347.js",
    "revision": "a843a0929a7cb3743f4c822bd7ef64fe"
  },
  {
    "url": "assets/js/348.js",
    "revision": "fd0df417a92245a1d69804c1453f2ad4"
  },
  {
    "url": "assets/js/349.js",
    "revision": "6c019298bade231f166aac6392631c45"
  },
  {
    "url": "assets/js/35.js",
    "revision": "ee949526e170922d14dd494a0c122580"
  },
  {
    "url": "assets/js/350.js",
    "revision": "2976be0ad92a7382ba92a6436a523549"
  },
  {
    "url": "assets/js/351.js",
    "revision": "5ecff1d3a619411dc6e6c6064b3cb201"
  },
  {
    "url": "assets/js/352.js",
    "revision": "7207c21802b5c6371e1aa66a4d6ecac9"
  },
  {
    "url": "assets/js/353.js",
    "revision": "e72e2f7c07477a92e2c6a32de4928bbe"
  },
  {
    "url": "assets/js/354.js",
    "revision": "519b3864dbbf864fd415a653b7e41aa4"
  },
  {
    "url": "assets/js/355.js",
    "revision": "ff87cda45061eb8eb5c74edfe6cd3cf7"
  },
  {
    "url": "assets/js/356.js",
    "revision": "f390a64f044528b4c0a1eeeb57e46ccd"
  },
  {
    "url": "assets/js/357.js",
    "revision": "4a4905b7aa1f7d33beefd17db9749ff6"
  },
  {
    "url": "assets/js/358.js",
    "revision": "320729e41c1aef756e5f565fd4985c55"
  },
  {
    "url": "assets/js/359.js",
    "revision": "c0ed226d918600eeed66a08214356104"
  },
  {
    "url": "assets/js/36.js",
    "revision": "a2ab85e92a23332a192aa732c1679d5e"
  },
  {
    "url": "assets/js/360.js",
    "revision": "b13cf90042d054db88d04a672867d1ef"
  },
  {
    "url": "assets/js/361.js",
    "revision": "e924c0b6bbd0578947721b75cabb6ff3"
  },
  {
    "url": "assets/js/362.js",
    "revision": "c3ba5a0fc5642ec3c3deafb9cf3f4b48"
  },
  {
    "url": "assets/js/363.js",
    "revision": "47c78c20d73682d45cee893729c4b2fb"
  },
  {
    "url": "assets/js/364.js",
    "revision": "17d9f2a51380452d39f4131b6354ed10"
  },
  {
    "url": "assets/js/365.js",
    "revision": "adc1ff9a916ebb1d82c1486e8733004e"
  },
  {
    "url": "assets/js/366.js",
    "revision": "f99908256266add15674221e2913b090"
  },
  {
    "url": "assets/js/367.js",
    "revision": "b8fae20e617da7edd5ee13615fec8058"
  },
  {
    "url": "assets/js/368.js",
    "revision": "0e672c014f7e3a90f5a1dd031d56c637"
  },
  {
    "url": "assets/js/369.js",
    "revision": "011fbc496f7068c0159b08f72790241c"
  },
  {
    "url": "assets/js/37.js",
    "revision": "aab4492bbd3778319b4e87cb94735deb"
  },
  {
    "url": "assets/js/370.js",
    "revision": "a58c345cc024f585f77c10cdd666dc9e"
  },
  {
    "url": "assets/js/371.js",
    "revision": "8dd16c9cf6e0d5965cb30a526c6a455d"
  },
  {
    "url": "assets/js/372.js",
    "revision": "f05e17ad145903e2bfd4308873b2a633"
  },
  {
    "url": "assets/js/373.js",
    "revision": "c9c3937ff30cfa884257573654815ac0"
  },
  {
    "url": "assets/js/374.js",
    "revision": "b840342d9869f90609a441183aa90eab"
  },
  {
    "url": "assets/js/375.js",
    "revision": "df0b2def2e23fe0c0db173a00dd6c950"
  },
  {
    "url": "assets/js/376.js",
    "revision": "81e35d7c8cac185c8d2528542b4a98ca"
  },
  {
    "url": "assets/js/377.js",
    "revision": "af42f6787d295c792fa7b04252ff90e7"
  },
  {
    "url": "assets/js/378.js",
    "revision": "b94ff66072af74b74ea79a45dd8a17c1"
  },
  {
    "url": "assets/js/379.js",
    "revision": "71a3a38304300a5fd1825cffee5b1a4a"
  },
  {
    "url": "assets/js/38.js",
    "revision": "1d6ebdaab8a8cbb4342749da787e6bbf"
  },
  {
    "url": "assets/js/380.js",
    "revision": "89340d4d2dd5288b6f93ec668c309f95"
  },
  {
    "url": "assets/js/381.js",
    "revision": "2824f94f076a35761dd03e9baa2d1bb9"
  },
  {
    "url": "assets/js/382.js",
    "revision": "f4c2ae1980349d0716248c000c6490a9"
  },
  {
    "url": "assets/js/383.js",
    "revision": "4295c91d2304f6c0a9746aa1f3e32665"
  },
  {
    "url": "assets/js/384.js",
    "revision": "35a89a085f410cec2265ef0fc8877c1f"
  },
  {
    "url": "assets/js/385.js",
    "revision": "1dfcff11948ad167e63836e78a7b4acb"
  },
  {
    "url": "assets/js/386.js",
    "revision": "ba325f8cb57d9a73080c45462e164e7e"
  },
  {
    "url": "assets/js/387.js",
    "revision": "ad6d32acdacdba4ce1930395f3b0585d"
  },
  {
    "url": "assets/js/388.js",
    "revision": "353999c4e1aeffe3f4477be721f5af57"
  },
  {
    "url": "assets/js/389.js",
    "revision": "31c1fab4a2caec42801247567ac22a68"
  },
  {
    "url": "assets/js/39.js",
    "revision": "0ce9e21dfa35b6b3b0ede82a69ab531b"
  },
  {
    "url": "assets/js/390.js",
    "revision": "2c664b85e9eb032b4bf4e4db0629461b"
  },
  {
    "url": "assets/js/391.js",
    "revision": "adc3638a22d848c7e429d22d52dc4813"
  },
  {
    "url": "assets/js/392.js",
    "revision": "636a2690e5999c4d858619a30814bae9"
  },
  {
    "url": "assets/js/393.js",
    "revision": "a08e984536d77cd9faa4d45315b6ebd6"
  },
  {
    "url": "assets/js/394.js",
    "revision": "fbf4f58ce962e82c2148dc34bec840b5"
  },
  {
    "url": "assets/js/395.js",
    "revision": "e74640aeaa7dafc99fdeabebbaade4a9"
  },
  {
    "url": "assets/js/396.js",
    "revision": "18b1349322e1a50dd84b1d2fd5bab720"
  },
  {
    "url": "assets/js/397.js",
    "revision": "5b63618fdb347d01ebf1231caee8abf0"
  },
  {
    "url": "assets/js/398.js",
    "revision": "1ad12c8151cb077e6f25da21a69ad8db"
  },
  {
    "url": "assets/js/399.js",
    "revision": "bfee2feb3087d0c2afc578c32c23e4da"
  },
  {
    "url": "assets/js/4.js",
    "revision": "6093c5a420410def6d29126646cddfc1"
  },
  {
    "url": "assets/js/40.js",
    "revision": "4f6637d5b26f2a21325c80f97e7a2004"
  },
  {
    "url": "assets/js/400.js",
    "revision": "f9f2358eab2dbfc5b1553e738310e59c"
  },
  {
    "url": "assets/js/401.js",
    "revision": "abefd8e1c213d9c7864da0e644b1660e"
  },
  {
    "url": "assets/js/402.js",
    "revision": "d7bff78eadaa77ee8f45130172812084"
  },
  {
    "url": "assets/js/403.js",
    "revision": "3e0c37fcd4d179d4c2c89cf262b235e9"
  },
  {
    "url": "assets/js/404.js",
    "revision": "eaff4feaa339de16a2db2eb11280ccc1"
  },
  {
    "url": "assets/js/405.js",
    "revision": "a7e5855e30eadc45a4ee9200c7cdc891"
  },
  {
    "url": "assets/js/406.js",
    "revision": "525b779a6b9c94384888ed76f6d9ec65"
  },
  {
    "url": "assets/js/407.js",
    "revision": "1d38b05aa264c6700d9b65ef0bf0f6c7"
  },
  {
    "url": "assets/js/408.js",
    "revision": "a49439dfc0b996c8d50bf7d82e39ad81"
  },
  {
    "url": "assets/js/409.js",
    "revision": "12a6f8e34dc82c64ed8cfcc68ad8f9e9"
  },
  {
    "url": "assets/js/41.js",
    "revision": "457d83e977f5fa6626e1b0be315b1c92"
  },
  {
    "url": "assets/js/410.js",
    "revision": "d0df652a45afec327e3009f963bf8ae3"
  },
  {
    "url": "assets/js/411.js",
    "revision": "825c0988dace5993659c903f2221f142"
  },
  {
    "url": "assets/js/412.js",
    "revision": "55e3b3616c86a089ad25037a60258467"
  },
  {
    "url": "assets/js/413.js",
    "revision": "ec005bc15168b57938ea48c7e4afa4bc"
  },
  {
    "url": "assets/js/414.js",
    "revision": "e6dcc0e540f513571193e44d955aeb98"
  },
  {
    "url": "assets/js/415.js",
    "revision": "4c901697757ba4aba10e372c7ecc8449"
  },
  {
    "url": "assets/js/416.js",
    "revision": "0596b314664c8b3728152603739be920"
  },
  {
    "url": "assets/js/417.js",
    "revision": "cd79de72dd60b3977eff28c705046fe5"
  },
  {
    "url": "assets/js/418.js",
    "revision": "1dfe9e0e02414f4add0a7ce8014ff391"
  },
  {
    "url": "assets/js/419.js",
    "revision": "46c72d4f2caec21168153aa12b58519d"
  },
  {
    "url": "assets/js/42.js",
    "revision": "a02af82f31ee116c041e4714b12c3174"
  },
  {
    "url": "assets/js/420.js",
    "revision": "4a39af1e58ffa32559034a1474602c23"
  },
  {
    "url": "assets/js/421.js",
    "revision": "835de1651bff533aa22dfeb7bc064b13"
  },
  {
    "url": "assets/js/422.js",
    "revision": "855674add80a0d58a1e53c518a5123c5"
  },
  {
    "url": "assets/js/423.js",
    "revision": "1579d203bf8fdec757837f7fbf5aa5e9"
  },
  {
    "url": "assets/js/424.js",
    "revision": "2453f9f39471d1098058e575094fda9b"
  },
  {
    "url": "assets/js/425.js",
    "revision": "175c1d937373082694080dcd3f088603"
  },
  {
    "url": "assets/js/426.js",
    "revision": "0f6655c1abdb81b87a0bc9cc495e02aa"
  },
  {
    "url": "assets/js/427.js",
    "revision": "97ae1bcbf6ca948091ecf1a5968f87c4"
  },
  {
    "url": "assets/js/428.js",
    "revision": "70926ad17cb0f9a9e94db8d050f7fe9b"
  },
  {
    "url": "assets/js/429.js",
    "revision": "48b77326056635eb3a6684f6d710ec9e"
  },
  {
    "url": "assets/js/43.js",
    "revision": "2d68242130910472a52c4189cf6e9e2d"
  },
  {
    "url": "assets/js/430.js",
    "revision": "e816e4b2602ad5e0d829a3de3c186a85"
  },
  {
    "url": "assets/js/431.js",
    "revision": "b758041a0a5381f910c4186734f17a81"
  },
  {
    "url": "assets/js/432.js",
    "revision": "9b9d7abec1a2737e8aaa7e43208da4f2"
  },
  {
    "url": "assets/js/433.js",
    "revision": "d41ab411fa909677f63bccf327285bb7"
  },
  {
    "url": "assets/js/434.js",
    "revision": "dd9de2515918d6dd3782f6cb53be6feb"
  },
  {
    "url": "assets/js/435.js",
    "revision": "d12af2f8884a4f960e07086da6f697ec"
  },
  {
    "url": "assets/js/436.js",
    "revision": "86d815ca0312afec55b2a58e268c9220"
  },
  {
    "url": "assets/js/437.js",
    "revision": "f1ee16b02469a6a7b58c1c78d806fe6b"
  },
  {
    "url": "assets/js/438.js",
    "revision": "68bc3ec5c871ff6c35e2f846f493728a"
  },
  {
    "url": "assets/js/439.js",
    "revision": "0dd3f24d35bbda083b968cb44adfdbf0"
  },
  {
    "url": "assets/js/44.js",
    "revision": "8afd09ef4c0430149863add3743e657d"
  },
  {
    "url": "assets/js/440.js",
    "revision": "fb653cdf735e5e146e98d5bda86a9c6b"
  },
  {
    "url": "assets/js/441.js",
    "revision": "95e7db2d38b4a8a420bf524924f7a788"
  },
  {
    "url": "assets/js/442.js",
    "revision": "37aca1b14f3e828fb4c7d8ced5ebda72"
  },
  {
    "url": "assets/js/443.js",
    "revision": "c1ea3c6ed3a2a91e276c253ac567936e"
  },
  {
    "url": "assets/js/444.js",
    "revision": "37a7379bbc3fc866d2d9e99c356bb328"
  },
  {
    "url": "assets/js/445.js",
    "revision": "95ae8272c2afceeab07d2ddbe945f6b9"
  },
  {
    "url": "assets/js/446.js",
    "revision": "22635ddb563ffb96de76b687116406aa"
  },
  {
    "url": "assets/js/447.js",
    "revision": "cf2a03f74a3c2df4e0d0b1be5c046b53"
  },
  {
    "url": "assets/js/448.js",
    "revision": "0d0fc09574bf200d328ab984e6894b97"
  },
  {
    "url": "assets/js/449.js",
    "revision": "dbd3e10267823f494940a5a05863f84e"
  },
  {
    "url": "assets/js/45.js",
    "revision": "ddf28fa820f8bd45e815af2b18d7e861"
  },
  {
    "url": "assets/js/450.js",
    "revision": "ef6e828f7e122a7834ab6e5ee95c6f63"
  },
  {
    "url": "assets/js/451.js",
    "revision": "01e86622a49958c02c4037f4fe7e9936"
  },
  {
    "url": "assets/js/452.js",
    "revision": "9efb33aefca6127d16284442c47c8719"
  },
  {
    "url": "assets/js/453.js",
    "revision": "f7e31af7c6654625fab94476837ba362"
  },
  {
    "url": "assets/js/454.js",
    "revision": "696922b2e3b9d6a670c2d7c638ad8865"
  },
  {
    "url": "assets/js/455.js",
    "revision": "042a2de5dc1efc5e53641803a0137b1d"
  },
  {
    "url": "assets/js/456.js",
    "revision": "dca6ab2106a1275839a6c0a939a6234e"
  },
  {
    "url": "assets/js/457.js",
    "revision": "8f649e6d3f8097997220d0aa93886e0e"
  },
  {
    "url": "assets/js/458.js",
    "revision": "5eb392201245810c950a73efcbe20b29"
  },
  {
    "url": "assets/js/459.js",
    "revision": "b40e5463f9403af8d63e1a812e1b48b5"
  },
  {
    "url": "assets/js/46.js",
    "revision": "4d3a82bf198a13b3e431afae4feb3355"
  },
  {
    "url": "assets/js/460.js",
    "revision": "829fe08b0e18559a80a12dbb011680b6"
  },
  {
    "url": "assets/js/461.js",
    "revision": "9a53eadd32d05e4c7f84524124540678"
  },
  {
    "url": "assets/js/462.js",
    "revision": "965d499306e8e080a05990451043f905"
  },
  {
    "url": "assets/js/463.js",
    "revision": "abaab4cc5f93af97adfe0124a2a88145"
  },
  {
    "url": "assets/js/464.js",
    "revision": "be5eea1cd2f701e2d6b6169f34b1f0ef"
  },
  {
    "url": "assets/js/465.js",
    "revision": "e4da71ec0a74f309952311d8569e2d4e"
  },
  {
    "url": "assets/js/466.js",
    "revision": "c44397d3aadcf90c87aa8594c4777df1"
  },
  {
    "url": "assets/js/467.js",
    "revision": "51755fb4eea685dee2775dc3d7d7562b"
  },
  {
    "url": "assets/js/468.js",
    "revision": "d638a56fb620e7b0a71108e235183ea4"
  },
  {
    "url": "assets/js/469.js",
    "revision": "054bba0ccb893d15348ae3ffa629f6d1"
  },
  {
    "url": "assets/js/47.js",
    "revision": "eb24d684f75e9e871be448425e077419"
  },
  {
    "url": "assets/js/470.js",
    "revision": "bfd3fae9a38d9a917d39d2e587ad3928"
  },
  {
    "url": "assets/js/471.js",
    "revision": "2cf0d3529def00bd82018ec91cb9b4ed"
  },
  {
    "url": "assets/js/472.js",
    "revision": "4cbf74889dbd8bc8b75e2eabc96003b3"
  },
  {
    "url": "assets/js/473.js",
    "revision": "78cac69491df0c9f024d060eb77d9a06"
  },
  {
    "url": "assets/js/474.js",
    "revision": "7ba5551b30eed4afce4cfdf1c8d6a6e8"
  },
  {
    "url": "assets/js/475.js",
    "revision": "0e62c5e37434e452850c79fa90e6c03a"
  },
  {
    "url": "assets/js/476.js",
    "revision": "384fffb94e0dd3a498a23f077c5ff5ac"
  },
  {
    "url": "assets/js/477.js",
    "revision": "70e52207bd02fb351ab30ae8d8ef6749"
  },
  {
    "url": "assets/js/478.js",
    "revision": "171c8f6c0d773246891d0fa95d620867"
  },
  {
    "url": "assets/js/479.js",
    "revision": "077b94777b42f4b68746fb604f2daec5"
  },
  {
    "url": "assets/js/48.js",
    "revision": "283f383be4fed944232c836a4fd96d50"
  },
  {
    "url": "assets/js/480.js",
    "revision": "ce7826a36c0e53565bc4406c0d2882e5"
  },
  {
    "url": "assets/js/481.js",
    "revision": "2393bb93bcc2fde0b76c5c2e6bf19298"
  },
  {
    "url": "assets/js/482.js",
    "revision": "9d495962d3b6a775659e1ab2f4a4f0a0"
  },
  {
    "url": "assets/js/483.js",
    "revision": "e3edfe202c86eae030dcd02ac872155f"
  },
  {
    "url": "assets/js/484.js",
    "revision": "d0ba6a390af9cac1b67ee7fa39a3ce15"
  },
  {
    "url": "assets/js/485.js",
    "revision": "ab78824f92289785f5a9a370752d2227"
  },
  {
    "url": "assets/js/486.js",
    "revision": "36068b29f1302b7deede208922b81ca1"
  },
  {
    "url": "assets/js/487.js",
    "revision": "d2f1dafd4aba8109fe753e1c8ca8912c"
  },
  {
    "url": "assets/js/488.js",
    "revision": "34a29eab584277158e2bd04337ca92eb"
  },
  {
    "url": "assets/js/489.js",
    "revision": "34ad1514d5fa1ef52ebc898ceca1b12f"
  },
  {
    "url": "assets/js/49.js",
    "revision": "c7a7bb9578b32d0551ae84f3c8e1cac8"
  },
  {
    "url": "assets/js/490.js",
    "revision": "3b02bb263b92a3c808b84a72ac63e4a9"
  },
  {
    "url": "assets/js/491.js",
    "revision": "74288f6e480238c5a573fd4859529ece"
  },
  {
    "url": "assets/js/492.js",
    "revision": "5ec5c5a410ab664cd00b6e69c532210d"
  },
  {
    "url": "assets/js/493.js",
    "revision": "77eb95d968980402f1c8172145095569"
  },
  {
    "url": "assets/js/494.js",
    "revision": "586f02d6cab947c71940de6a40f6cb19"
  },
  {
    "url": "assets/js/495.js",
    "revision": "655bc8cd37dcf13b7f212fe874b6dad1"
  },
  {
    "url": "assets/js/496.js",
    "revision": "9b10a500c35f7fba9a6671bcd3f48f6b"
  },
  {
    "url": "assets/js/497.js",
    "revision": "89320ebe813dac69ac04826645db6381"
  },
  {
    "url": "assets/js/498.js",
    "revision": "7ac93f7a7c93eef6fa42918bf00aca7d"
  },
  {
    "url": "assets/js/499.js",
    "revision": "ac4e9f7302e8b8b726d2b54c46ebb8ff"
  },
  {
    "url": "assets/js/50.js",
    "revision": "2886bb277dcbe6e7d72630ee81870b39"
  },
  {
    "url": "assets/js/500.js",
    "revision": "f9fef6fbe8cbc584f7922ef002311d48"
  },
  {
    "url": "assets/js/501.js",
    "revision": "fcfed83049ecea77b9d2c0d33e7a8432"
  },
  {
    "url": "assets/js/502.js",
    "revision": "85da980e93c7546c6d8de2719f8833dc"
  },
  {
    "url": "assets/js/503.js",
    "revision": "3c5805dfcaa1c4461bd10f9820d283d6"
  },
  {
    "url": "assets/js/504.js",
    "revision": "3b8a6ae7880522a9f9ffdbdd8635cace"
  },
  {
    "url": "assets/js/505.js",
    "revision": "4981d30b0b2285dfe86a877a96c37397"
  },
  {
    "url": "assets/js/506.js",
    "revision": "a4ca7bceef0cf65e9470bbcba657ef7e"
  },
  {
    "url": "assets/js/507.js",
    "revision": "d87c88bdf199a86b666e639e0dfb84ce"
  },
  {
    "url": "assets/js/508.js",
    "revision": "31449ed9c6800d053e49492901c11a94"
  },
  {
    "url": "assets/js/509.js",
    "revision": "b0f58097809cf83178a0e5ea9f8a0058"
  },
  {
    "url": "assets/js/51.js",
    "revision": "327f63e997de808106a4ce4c42a0a375"
  },
  {
    "url": "assets/js/510.js",
    "revision": "2837305ab4a3b996f7f885a5ad3178bc"
  },
  {
    "url": "assets/js/511.js",
    "revision": "2cd28c51f8a6c348801acec5ec2f2040"
  },
  {
    "url": "assets/js/512.js",
    "revision": "a84460586104164b48a5c3490dc191a6"
  },
  {
    "url": "assets/js/513.js",
    "revision": "0db9b715b6e23bcbdbb6483bdd56da59"
  },
  {
    "url": "assets/js/514.js",
    "revision": "6cee135f71801789a6f6f76d69a81411"
  },
  {
    "url": "assets/js/515.js",
    "revision": "8360a11ce9c53c1d867c30e89fb0d81f"
  },
  {
    "url": "assets/js/516.js",
    "revision": "d4789f75e12f1da98d6b529f15318cba"
  },
  {
    "url": "assets/js/517.js",
    "revision": "2ba775062d07b34c4effb5613159e906"
  },
  {
    "url": "assets/js/518.js",
    "revision": "3f8ff9387baa6b27b112027e0f74e118"
  },
  {
    "url": "assets/js/519.js",
    "revision": "07fa05a1eb9523393ed4cf85ad90601f"
  },
  {
    "url": "assets/js/52.js",
    "revision": "9f7821579226c435fc5957837b37048f"
  },
  {
    "url": "assets/js/520.js",
    "revision": "ef893fc47718c2a34348bfe1faa03865"
  },
  {
    "url": "assets/js/521.js",
    "revision": "fe70b751ef709c7af94953a8a15e99ad"
  },
  {
    "url": "assets/js/522.js",
    "revision": "341a715a83dc960e3bb4825de39bc064"
  },
  {
    "url": "assets/js/523.js",
    "revision": "aa4b80af6cd1ad5f67f8c3435aa5df60"
  },
  {
    "url": "assets/js/524.js",
    "revision": "f33c473f8233b2a6a3b85b800422783c"
  },
  {
    "url": "assets/js/525.js",
    "revision": "6088152143f65c068c395591027eae62"
  },
  {
    "url": "assets/js/526.js",
    "revision": "ff0de3b1ef86d2f22165c8a55229fa8a"
  },
  {
    "url": "assets/js/527.js",
    "revision": "a07bf3b6bab7d40ca840a3d6a393fb86"
  },
  {
    "url": "assets/js/528.js",
    "revision": "d3ccbd44fb3b4310aacd7d92a72a8e21"
  },
  {
    "url": "assets/js/529.js",
    "revision": "afe2a174870506e9fb2328aeb04238c2"
  },
  {
    "url": "assets/js/53.js",
    "revision": "8b1b8c0571548045e6a5464fa5040464"
  },
  {
    "url": "assets/js/530.js",
    "revision": "a98dd7b914fd351124ca254514206812"
  },
  {
    "url": "assets/js/531.js",
    "revision": "040be0c6ceb56131924185e8cd68469d"
  },
  {
    "url": "assets/js/532.js",
    "revision": "74345fb9aae0992eefcfc76e1f01784e"
  },
  {
    "url": "assets/js/533.js",
    "revision": "08a58f40a0addba3cbf01181a7306e77"
  },
  {
    "url": "assets/js/534.js",
    "revision": "460cb88951ebfa7da41a0ff8b94116a1"
  },
  {
    "url": "assets/js/535.js",
    "revision": "f2192ed3e430b3b443f61fc0052d8c2c"
  },
  {
    "url": "assets/js/536.js",
    "revision": "141fe14741e570607f1475d368f9c970"
  },
  {
    "url": "assets/js/537.js",
    "revision": "b63dca3538a73a7f95c09aec46be1c6c"
  },
  {
    "url": "assets/js/538.js",
    "revision": "89ee3cc56f76a007604527505590df43"
  },
  {
    "url": "assets/js/539.js",
    "revision": "93345c2964188c6d2df0b6cf6bf3e5c2"
  },
  {
    "url": "assets/js/54.js",
    "revision": "4ce2c2e3095a7219b05395cbc79acec8"
  },
  {
    "url": "assets/js/540.js",
    "revision": "f89426ce86fd00523b8d36a4ba2216b5"
  },
  {
    "url": "assets/js/541.js",
    "revision": "5849e77bbe2a685bbfd234d0f7f4ce2d"
  },
  {
    "url": "assets/js/542.js",
    "revision": "1189ec2ac1975c60e267b95476b7d196"
  },
  {
    "url": "assets/js/543.js",
    "revision": "a96246b6b878b380bc4df288cc3c8ac5"
  },
  {
    "url": "assets/js/544.js",
    "revision": "3b06788cf97ae456727493dfaf25f132"
  },
  {
    "url": "assets/js/545.js",
    "revision": "55bc5b861b75071a76cd31f7976b8b7f"
  },
  {
    "url": "assets/js/546.js",
    "revision": "352911e05075ac44a3253a7ad1aceeab"
  },
  {
    "url": "assets/js/547.js",
    "revision": "b41dbd44db7ef8861fb7b2d4f8f23335"
  },
  {
    "url": "assets/js/548.js",
    "revision": "2768e369eb4a088236bb2baa259c9b28"
  },
  {
    "url": "assets/js/549.js",
    "revision": "b79f0a4cd27a39e094bb709d927bfb0c"
  },
  {
    "url": "assets/js/55.js",
    "revision": "fe11d3c5f3a2c7574b7561fcb69ac6c8"
  },
  {
    "url": "assets/js/550.js",
    "revision": "624bd9b9fb5fe12e3c74ed97754f3254"
  },
  {
    "url": "assets/js/551.js",
    "revision": "1907347fdf9c8f54d5fde613b89213b7"
  },
  {
    "url": "assets/js/552.js",
    "revision": "008e942889623fd3aa19e40f20c994aa"
  },
  {
    "url": "assets/js/553.js",
    "revision": "8bc868215d003ad5a6da10c970beb7f3"
  },
  {
    "url": "assets/js/554.js",
    "revision": "98a4565e4e90d24621cfabfaea0f2046"
  },
  {
    "url": "assets/js/555.js",
    "revision": "931fbcc17aead52bf43d0c591e6d0873"
  },
  {
    "url": "assets/js/556.js",
    "revision": "3d24055d30b9c501e3eb8045ba1a04c5"
  },
  {
    "url": "assets/js/557.js",
    "revision": "da03187741243c710c2f7c753f515dd4"
  },
  {
    "url": "assets/js/558.js",
    "revision": "b76d26d1c84f3b5dcbfa49dfce641045"
  },
  {
    "url": "assets/js/559.js",
    "revision": "f0edac9ba8b4d638fa5ec560aa2f3f48"
  },
  {
    "url": "assets/js/56.js",
    "revision": "cb5f6c1e20e50bc434abd1cb185b4f46"
  },
  {
    "url": "assets/js/560.js",
    "revision": "73e2ec8d031e18fc1459643b25007f39"
  },
  {
    "url": "assets/js/561.js",
    "revision": "1617bc8b2952e9b39b7a7f60c9be835b"
  },
  {
    "url": "assets/js/562.js",
    "revision": "f56b43f8db619a52afcd0cac90771971"
  },
  {
    "url": "assets/js/563.js",
    "revision": "e1c71b795eee10d6d8fbc81dc2d8cc8a"
  },
  {
    "url": "assets/js/564.js",
    "revision": "96703bf33194ba3e3df9feeb352f4d3f"
  },
  {
    "url": "assets/js/565.js",
    "revision": "6d92cd33a62cee8a4a478b9b704e3523"
  },
  {
    "url": "assets/js/566.js",
    "revision": "fb5cf71f59f300b3da8431cbfd64db98"
  },
  {
    "url": "assets/js/567.js",
    "revision": "07fe96a6e30a2e8c6ebafcfa46028690"
  },
  {
    "url": "assets/js/568.js",
    "revision": "c163d39d9f8d4cb9f52e93390d7ca0da"
  },
  {
    "url": "assets/js/569.js",
    "revision": "5efcc3a4ee540259ee3ba94d9117f4d8"
  },
  {
    "url": "assets/js/57.js",
    "revision": "9a394a6513de8c01c4dc22c6d3614371"
  },
  {
    "url": "assets/js/570.js",
    "revision": "d49ffec8f3d59d77ad9a2f12fc6cb1cb"
  },
  {
    "url": "assets/js/571.js",
    "revision": "ea880f6c439d43995d2b5d544305f137"
  },
  {
    "url": "assets/js/572.js",
    "revision": "bf4d114ee9081a50658cafec51c8bd41"
  },
  {
    "url": "assets/js/573.js",
    "revision": "f08e3255f509f3c1dee52aad0c1f0de7"
  },
  {
    "url": "assets/js/574.js",
    "revision": "f704b03816118e8da30c208d4b9e5c36"
  },
  {
    "url": "assets/js/575.js",
    "revision": "b92543c40ffbd3ca96dfe4716bd02e50"
  },
  {
    "url": "assets/js/576.js",
    "revision": "854be280f630e0e55ee637be5e529e6f"
  },
  {
    "url": "assets/js/577.js",
    "revision": "7aee3c5f43309e3d04a13a2da2c1300a"
  },
  {
    "url": "assets/js/578.js",
    "revision": "2b9e47b29071deeed22e4925c73ee36d"
  },
  {
    "url": "assets/js/579.js",
    "revision": "27c00d6b2997c95c2c7cec3bb48274e6"
  },
  {
    "url": "assets/js/58.js",
    "revision": "1fb99802e94657dddab2fdc82a5ea481"
  },
  {
    "url": "assets/js/580.js",
    "revision": "e4394c4672aa310c07ee7d388681ebcb"
  },
  {
    "url": "assets/js/581.js",
    "revision": "110ec7c8caf5c13cc9743eae1c1465d0"
  },
  {
    "url": "assets/js/582.js",
    "revision": "92111aed5d6b8dd29bba921a4b81f32c"
  },
  {
    "url": "assets/js/583.js",
    "revision": "d869dd0a0480738027c4a464bd13a13e"
  },
  {
    "url": "assets/js/584.js",
    "revision": "bae69e9dd1f96bb34e08cb2e5d905c45"
  },
  {
    "url": "assets/js/585.js",
    "revision": "46714436deee59049564945cb8c57fe0"
  },
  {
    "url": "assets/js/586.js",
    "revision": "d639d8adfeaa96ac22158baf29bd5597"
  },
  {
    "url": "assets/js/587.js",
    "revision": "af91814a3875a7914308cb2598c5ee49"
  },
  {
    "url": "assets/js/588.js",
    "revision": "8bf42e6b5e4734dee7e4c292bd34feda"
  },
  {
    "url": "assets/js/589.js",
    "revision": "e4ecf8ed0b1b8de2282c85282bbadbd8"
  },
  {
    "url": "assets/js/59.js",
    "revision": "60863d3f7cbb9d633b0ee0ada7f4ff6f"
  },
  {
    "url": "assets/js/590.js",
    "revision": "485c67e5af5ae29456f208edb1712363"
  },
  {
    "url": "assets/js/591.js",
    "revision": "9ccc86b88e67724e399116d68006b42c"
  },
  {
    "url": "assets/js/592.js",
    "revision": "b8e5c38814acca5f24884af9a793dba0"
  },
  {
    "url": "assets/js/593.js",
    "revision": "2bf7b86b5840df729632c067f09b4b0f"
  },
  {
    "url": "assets/js/594.js",
    "revision": "e7349c4246f4e133e16d2df0e2c121c8"
  },
  {
    "url": "assets/js/595.js",
    "revision": "e3429f70a189bd4c0d8446e08c788269"
  },
  {
    "url": "assets/js/6.js",
    "revision": "ee68dd53f8e5b447daaeafc7cb51d50e"
  },
  {
    "url": "assets/js/60.js",
    "revision": "221a320684d9749ed6b2e22864cb9cfc"
  },
  {
    "url": "assets/js/61.js",
    "revision": "ae29966a8bbfaac28bcb06c5f57ca1cc"
  },
  {
    "url": "assets/js/62.js",
    "revision": "910eab10e6316ab7cccc13d4731ba0f4"
  },
  {
    "url": "assets/js/63.js",
    "revision": "bc329902d7747073835ea1201aeb222c"
  },
  {
    "url": "assets/js/64.js",
    "revision": "cb54ad8349b511efb12ed5beb54d787e"
  },
  {
    "url": "assets/js/65.js",
    "revision": "c20fccd5f57d1c3d475b54eb2ecfe3c2"
  },
  {
    "url": "assets/js/66.js",
    "revision": "5dc063052222e6f5bbec1da15cfc4be0"
  },
  {
    "url": "assets/js/67.js",
    "revision": "098b13a2acd7e14605a20bfc02ba5b29"
  },
  {
    "url": "assets/js/68.js",
    "revision": "edb37295479c2aa1d0acbe5123d6fb16"
  },
  {
    "url": "assets/js/69.js",
    "revision": "d4bf3e254e1e88c12d64b0d1cbae571a"
  },
  {
    "url": "assets/js/7.js",
    "revision": "b1f1260244d40df73b35dcf050895ff7"
  },
  {
    "url": "assets/js/70.js",
    "revision": "4f3942fb99c216c7d6622b707b746042"
  },
  {
    "url": "assets/js/71.js",
    "revision": "a69e5aa1db7d228e45dd256a6ba373b8"
  },
  {
    "url": "assets/js/72.js",
    "revision": "8341ea080c325d13128e6ea58471012c"
  },
  {
    "url": "assets/js/73.js",
    "revision": "3ad2bdbf3d2d1621adef46f14d5543af"
  },
  {
    "url": "assets/js/74.js",
    "revision": "2f27946ebee4936fea89a17615132643"
  },
  {
    "url": "assets/js/75.js",
    "revision": "f49b3ba79d8ea6c9ec13e732cd99033f"
  },
  {
    "url": "assets/js/76.js",
    "revision": "e3a3d7c96028749a6266c52fb280aeea"
  },
  {
    "url": "assets/js/77.js",
    "revision": "a1f00e47531150f8bd96baacf4b6e110"
  },
  {
    "url": "assets/js/78.js",
    "revision": "6024fbc1e918f2f77fd338e16f879094"
  },
  {
    "url": "assets/js/79.js",
    "revision": "527c84f5a6533ebff3669b59c9613a77"
  },
  {
    "url": "assets/js/8.js",
    "revision": "598566a56e23b43eca1f74ac1b29f0d4"
  },
  {
    "url": "assets/js/80.js",
    "revision": "090ca7555d13e4a1aa3043825145700f"
  },
  {
    "url": "assets/js/81.js",
    "revision": "631cd1b57ef4ac0ceaf2ec2714e26a33"
  },
  {
    "url": "assets/js/82.js",
    "revision": "08fed1e2c073972b0fa6b49473d4c2f2"
  },
  {
    "url": "assets/js/83.js",
    "revision": "feac490169e0adc757d9060c3c000b09"
  },
  {
    "url": "assets/js/84.js",
    "revision": "857f3430c806a7e0795896cda6312b3b"
  },
  {
    "url": "assets/js/85.js",
    "revision": "37c0210d74a97b1f85591ce45cb35a1b"
  },
  {
    "url": "assets/js/86.js",
    "revision": "711829eb194dc326d42462d2fadc0b3c"
  },
  {
    "url": "assets/js/87.js",
    "revision": "7b8f2ebd80b8c91c11a4bdacfdd6019f"
  },
  {
    "url": "assets/js/88.js",
    "revision": "9bd1ad0591c6e1e9b8b650257898f35e"
  },
  {
    "url": "assets/js/89.js",
    "revision": "ff8fc875ba505cadb65e37fe6ecfead2"
  },
  {
    "url": "assets/js/9.js",
    "revision": "c1539fd379d8746848c3aa5c6bc9f5cb"
  },
  {
    "url": "assets/js/90.js",
    "revision": "e567c571c06ded323a612cfa2f35f218"
  },
  {
    "url": "assets/js/91.js",
    "revision": "3677c8ad386253c384528e843afc8e81"
  },
  {
    "url": "assets/js/92.js",
    "revision": "93b31a202be95a173d333cbbe2f9424b"
  },
  {
    "url": "assets/js/93.js",
    "revision": "d020d66f279f66438c15ff210230af2e"
  },
  {
    "url": "assets/js/94.js",
    "revision": "d17b1f96f6e4b9fd73c2647a9b2884bd"
  },
  {
    "url": "assets/js/95.js",
    "revision": "f1e717972e0a2723e0d263c182906e3d"
  },
  {
    "url": "assets/js/96.js",
    "revision": "cc1439f6ec89489e209d969abc204e5c"
  },
  {
    "url": "assets/js/97.js",
    "revision": "6d50cf317791792369f219b5f132ecf7"
  },
  {
    "url": "assets/js/98.js",
    "revision": "fbf5f53c20b8c385aaaae290fd233114"
  },
  {
    "url": "assets/js/99.js",
    "revision": "f08f2ff0495b6f965469764972a98f71"
  },
  {
    "url": "assets/js/app.js",
    "revision": "e4fa31fc28c599adb6e31151bc282dc4"
  },
  {
    "url": "assets/js/styles.js",
    "revision": "22f22b49cc901aa95826401f7ce0930c"
  },
  {
    "url": "blog/category/index.html",
    "revision": "96d19ad30d1b803f8c80bf5ac07feb1e"
  },
  {
    "url": "blog/code/artists/index.html",
    "revision": "e919f930bb217fe4a45071acf764dcb9"
  },
  {
    "url": "blog/code/asa.sbh.nz/index.html",
    "revision": "34dc35098e4b5c56643723e64f15c32f"
  },
  {
    "url": "blog/code/decrypt/index.html",
    "revision": "26c83eea57d947590fb0002e2536f1f3"
  },
  {
    "url": "blog/code/divider/index.html",
    "revision": "18c8da72af25defc313e37ef398de2ba"
  },
  {
    "url": "blog/code/first/index.html",
    "revision": "c4a6b60acbf6a234094cdbbfc63fbeef"
  },
  {
    "url": "blog/code/fishbarrel/index.html",
    "revision": "a2808d14c7b4c4e9b0d08781586e59df"
  },
  {
    "url": "blog/code/indent/index.html",
    "revision": "d9d1549ada78b433e7d84afebd333ffa"
  },
  {
    "url": "blog/code/index.html",
    "revision": "b58bafe7574eaf615761fac318d776e5"
  },
  {
    "url": "blog/code/ingoa.nz/index.html",
    "revision": "5030254668deba0f4a0ea98d88dad71d"
  },
  {
    "url": "blog/code/nzondemand/index.html",
    "revision": "105c350bc10d4a890ec16397753a554e"
  },
  {
    "url": "blog/code/picard/index.html",
    "revision": "0f5f1ed34877b148da110ce81dc67f50"
  },
  {
    "url": "blog/code/qr/index.html",
    "revision": "81b0a452e095a410bb63cd60955ad3ba"
  },
  {
    "url": "blog/code/readable/index.html",
    "revision": "c646d9f0aa67ee6dbabfd6de871f373e"
  },
  {
    "url": "blog/code/tone/index.html",
    "revision": "f0f67e9636c263802ac6229d671431fa"
  },
  {
    "url": "blog/code/war/index.html",
    "revision": "c8b1e33381db0ec729ffe2080be3f697"
  },
  {
    "url": "blog/code/website/index.html",
    "revision": "3859e7f9402d89c57027bf588e6472df"
  },
  {
    "url": "blog/code/website/route/index.html",
    "revision": "5c8a42b97a10efd433bb13f92eb8f34d"
  },
  {
    "url": "blog/code/website/site/index.html",
    "revision": "c961dd190964114c458a2cc82ff7245e"
  },
  {
    "url": "blog/code/xmltv.co.nz/index.html",
    "revision": "e69c509e82a34ed571dac8826675da46"
  },
  {
    "url": "blog/howto/index.html",
    "revision": "303d08ba69c96c003fe534c7016c3c9b"
  },
  {
    "url": "blog/howto/intel865/index.html",
    "revision": "14d9f59a50e740646efeebcd14ca94ff"
  },
  {
    "url": "blog/howto/ios/index.html",
    "revision": "ccbba5bd3bdf9048be453933eb5d38f7"
  },
  {
    "url": "blog/howto/nexentastor/index.html",
    "revision": "640366d1dda95f588e5b9b7b98420672"
  },
  {
    "url": "blog/howto/pcloadletter/index.html",
    "revision": "9b980fc271002ed09a21419fe2bbf52b"
  },
  {
    "url": "blog/howto/raid5/index.html",
    "revision": "54d3498f1f46e423861000c0e24da98b"
  },
  {
    "url": "blog/index.html",
    "revision": "261ace309c5c7b69df250f6aa3ba9375"
  },
  {
    "url": "blog/life/anotheryear/index.html",
    "revision": "128e0e58aa9f351105acb09646d9bda6"
  },
  {
    "url": "blog/life/birthday/index.html",
    "revision": "c4f48fbe874cc2c30f48ffe813c5a2a5"
  },
  {
    "url": "blog/life/blasphemy/index.html",
    "revision": "570ba5be50ac2a03e3f8c8f5cefb07da"
  },
  {
    "url": "blog/life/blogger/index.html",
    "revision": "34bc53a63fd631bd096655c3f69e7af3"
  },
  {
    "url": "blog/life/blurry/index.html",
    "revision": "952cecb9195d47a4a7e3c62bc99574c9"
  },
  {
    "url": "blog/life/busyday/index.html",
    "revision": "be9347284f756dd679b0f1bb7fa3c73b"
  },
  {
    "url": "blog/life/domain/index.html",
    "revision": "213d4548170124533c87110467cbc01f"
  },
  {
    "url": "blog/life/exams/index.html",
    "revision": "b418a736b951f402027ad71ba5b138e4"
  },
  {
    "url": "blog/life/food/index.html",
    "revision": "4a32242605435ed0a2691c1df6ff4d31"
  },
  {
    "url": "blog/life/glenview/index.html",
    "revision": "42705b83bb4b01006ba330aa43942722"
  },
  {
    "url": "blog/life/headlines/index.html",
    "revision": "b78ac3033ae2413a5bb12274f64c2f20"
  },
  {
    "url": "blog/life/index.html",
    "revision": "a1989ab870270c9cd3a932447acc0382"
  },
  {
    "url": "blog/life/jws/index.html",
    "revision": "23259553efb3a103a61a1fc92474c737"
  },
  {
    "url": "blog/life/keyboard/index.html",
    "revision": "6007c51099de9566e34844971200236a"
  },
  {
    "url": "blog/life/lpi201/index.html",
    "revision": "3dc12c8f11c6e3707d8a646847bfc08b"
  },
  {
    "url": "blog/life/mashup/index.html",
    "revision": "0e372defd83a9663fdc473d2eb00ba23"
  },
  {
    "url": "blog/life/motorweb/index.html",
    "revision": "7455130b42af3bb3e6b6200e779ee863"
  },
  {
    "url": "blog/life/nxe/index.html",
    "revision": "ff3e199846ec8a0ac2fb3193c9f66057"
  },
  {
    "url": "blog/life/plates/index.html",
    "revision": "975b4d84f67d1d2cf7f5be6d4b6aae1c"
  },
  {
    "url": "blog/life/queenstown/index.html",
    "revision": "3525ac00c67c5fa40c2d6edcf96f933b"
  },
  {
    "url": "blog/life/racism/index.html",
    "revision": "c3715ee23aab4898de0a81c44ba1586c"
  },
  {
    "url": "blog/life/roads/index.html",
    "revision": "6693537ba5042ed460b1632667b64974"
  },
  {
    "url": "blog/life/roots/index.html",
    "revision": "7c3f3cd29f947566158e0dfad00c4f93"
  },
  {
    "url": "blog/life/scare/index.html",
    "revision": "8dcb285981fe80dcbf49bfa5534cbc1e"
  },
  {
    "url": "blog/life/scary/index.html",
    "revision": "de7829f3ea82d8dadb2e4e98c277d5dd"
  },
  {
    "url": "blog/life/seti/index.html",
    "revision": "fd2c6e9da8c6e25917752d4359168766"
  },
  {
    "url": "blog/life/skeptical/index.html",
    "revision": "37aeaadb8b15441216b332bb4ac52d88"
  },
  {
    "url": "blog/life/skepticzone/index.html",
    "revision": "481a97f315d8a4039aa31c20c5a0e30c"
  },
  {
    "url": "blog/life/spam/index.html",
    "revision": "b47d1dd10a1c4509a44fdc992b553bac"
  },
  {
    "url": "blog/life/trademe/index.html",
    "revision": "72c5f6dfc378e71563018a28e1110d8d"
  },
  {
    "url": "blog/life/unforeseen/index.html",
    "revision": "e8881d6dd32eef1f9622bb06393dc551"
  },
  {
    "url": "blog/life/wobbly/index.html",
    "revision": "806885546e9f8acb6eba604976d956fd"
  },
  {
    "url": "blog/projects/ahs/index.html",
    "revision": "cdc665c3f08a09ea311cb28648ea0301"
  },
  {
    "url": "blog/projects/airbag/index.html",
    "revision": "3852b34d8a75ae40268767a6e7ab8e5d"
  },
  {
    "url": "blog/projects/ambilight/index.html",
    "revision": "df5b315ebd565c0235dc1d3917b5779a"
  },
  {
    "url": "blog/projects/automation/index.html",
    "revision": "8b0a5160a3ea97c68c23b41cddc50697"
  },
  {
    "url": "blog/projects/eyes/index.html",
    "revision": "accbfbdbd789417fdae82b80a99163cd"
  },
  {
    "url": "blog/projects/glitch/index.html",
    "revision": "64ccddfac6c77879d1dba3b9187ddce4"
  },
  {
    "url": "blog/projects/hotel/index.html",
    "revision": "409df9db5dc2f457a855491108873ff5"
  },
  {
    "url": "blog/projects/index.html",
    "revision": "efe40367892c1a66cfadbcc743e52cb4"
  },
  {
    "url": "blog/projects/it100/index.html",
    "revision": "ba4b23e7641d9ac43103f53688b33f35"
  },
  {
    "url": "blog/projects/microscope/index.html",
    "revision": "a20fdfe080aae69d4d1c22e3d4bf4113"
  },
  {
    "url": "blog/projects/mirror/index.html",
    "revision": "898d6ef08630bf980d15d37b9e03235b"
  },
  {
    "url": "blog/projects/picture/index.html",
    "revision": "6d14c348121f9f280897e10beb698450"
  },
  {
    "url": "blog/projects/pizza/index.html",
    "revision": "ccc60f94132673385f1ced2a0805400e"
  },
  {
    "url": "blog/projects/podcast/index.html",
    "revision": "bf1d2e652912bd8e0881f5e8f09870f1"
  },
  {
    "url": "blog/projects/reflow/index.html",
    "revision": "8d51d6c4eb65f7b9531c572404f11c91"
  },
  {
    "url": "blog/projects/sandbox/index.html",
    "revision": "6e0a23c83e6f1d2c016124e86c17353f"
  },
  {
    "url": "blog/projects/screens/index.html",
    "revision": "8aa7c92b2e74bd7ff13044f47356a7a1"
  },
  {
    "url": "blog/projects/sky/index.html",
    "revision": "f0c26928c0d570779bf878406226c8d3"
  },
  {
    "url": "blog/projects/starwars/index.html",
    "revision": "55e97dcf5e56abd1b00d6ee73e812534"
  },
  {
    "url": "blog/projects/xbox/index.html",
    "revision": "23e5194fcbe158f5d475f9cb8ee8d0c9"
  },
  {
    "url": "blog/random/addresses/index.html",
    "revision": "e41c118d8b13760eb3807327ad64fef2"
  },
  {
    "url": "blog/random/alphabet/index.html",
    "revision": "fafa86f720d4d2bdcc4f67cc71a5477f"
  },
  {
    "url": "blog/random/astrology/index.html",
    "revision": "020d5705acfed5abf5b0f167d81ea2df"
  },
  {
    "url": "blog/random/chicken/index.html",
    "revision": "1aeff94ec2c7d3241ba3fa646ed7b6df"
  },
  {
    "url": "blog/random/dns/index.html",
    "revision": "722b6ff17ce209979570d3620d9f911d"
  },
  {
    "url": "blog/random/evp/index.html",
    "revision": "f651e78fbc7f64be99e8e8e94d489a40"
  },
  {
    "url": "blog/random/flip/index.html",
    "revision": "fd3ff85a81f1a6cd98733629f513af6c"
  },
  {
    "url": "blog/random/honeychurch/index.html",
    "revision": "3260010f2e9b2bcd49576ca8ed2f5821"
  },
  {
    "url": "blog/random/index.html",
    "revision": "50390e3fd54d659c349837089ec48257"
  },
  {
    "url": "blog/random/lottery/index.html",
    "revision": "5d64e3ae25672c11c2b5c230fb5afb1a"
  },
  {
    "url": "blog/random/music/index.html",
    "revision": "0ef75d5d7898797beed714c81a91c4d1"
  },
  {
    "url": "blog/random/octal/index.html",
    "revision": "718218948b0d3055ad6af41e7284423a"
  },
  {
    "url": "blog/random/os/index.html",
    "revision": "d9041cd42eb78f967b9b056de5700fe8"
  },
  {
    "url": "blog/random/propellers/index.html",
    "revision": "2403d2bd2b160dc15d9ef796548f8ddc"
  },
  {
    "url": "blog/random/robux/index.html",
    "revision": "1f10ad1404760ebee18cced5b9a83ce1"
  },
  {
    "url": "blog/random/super/index.html",
    "revision": "028c7f85f155f06546a3be8efc3b1245"
  },
  {
    "url": "blog/random/times/index.html",
    "revision": "cda0a1c73b2bde0833eff037f47d6c32"
  },
  {
    "url": "blog/random/travel/index.html",
    "revision": "74a02df42609b4bc5e23507fec588810"
  },
  {
    "url": "blog/random/wilhelm/index.html",
    "revision": "fcaaf284c616b24cdb4d67ff8dac22aa"
  },
  {
    "url": "blog/random/year/index.html",
    "revision": "0e9ac3ceb4b4c22234e56aaf1e3b294e"
  },
  {
    "url": "blog/skepticism/2015/08/16/asa/index.html",
    "revision": "2affd4801a81b8ea5842180111d0243f"
  },
  {
    "url": "blog/skepticism/2015/08/16/awards/index.html",
    "revision": "bed92facaccceff1cc02f64a362d657e"
  },
  {
    "url": "blog/skepticism/2015/08/16/bravo/index.html",
    "revision": "efa6a053b7aa8e72a2d29ec272d80bd0"
  },
  {
    "url": "blog/skepticism/2015/08/16/index.html",
    "revision": "2b229b5051d7f779cc9e20a098502055"
  },
  {
    "url": "blog/skepticism/2015/08/16/jim/index.html",
    "revision": "23681cadeb7bc17ce2ed58aac25a05fe"
  },
  {
    "url": "blog/skepticism/2015/08/16/naholo/index.html",
    "revision": "d9cd668191d1b91158465c90808cb273"
  },
  {
    "url": "blog/skepticism/2015/08/16/resene/index.html",
    "revision": "6affe398d22bb68eb9cd6a3acb53f9cb"
  },
  {
    "url": "blog/skepticism/2015/08/index.html",
    "revision": "ae07579fb560fd7f0b48e7e51ada2e10"
  },
  {
    "url": "blog/skepticism/2015/09/20/gop/index.html",
    "revision": "9365bf47f1a926bae443a134e9da7994"
  },
  {
    "url": "blog/skepticism/2015/09/20/ignobel/index.html",
    "revision": "342ec7db9c9cb51fb1d37beefb1298fa"
  },
  {
    "url": "blog/skepticism/2015/09/20/index.html",
    "revision": "c621abf791521ba607562abe3024a16d"
  },
  {
    "url": "blog/skepticism/2015/09/20/supplements/index.html",
    "revision": "17d3c2b31a7a52ea6410e508c4d94e74"
  },
  {
    "url": "blog/skepticism/2015/09/27/ayahuasca/index.html",
    "revision": "f8db83e8ef2d8949c41bc11c52963884"
  },
  {
    "url": "blog/skepticism/2015/09/27/drought/index.html",
    "revision": "42aab36003346a36ad55193429fdc242"
  },
  {
    "url": "blog/skepticism/2015/09/27/index.html",
    "revision": "b9e56f0d4013f70f27d8572bdbcdce0c"
  },
  {
    "url": "blog/skepticism/2015/09/27/lama/index.html",
    "revision": "cc321787d99d14a4166e7885f034acb4"
  },
  {
    "url": "blog/skepticism/2015/09/27/moon/index.html",
    "revision": "6ad6bb40fc91dc93364d682c389ea64e"
  },
  {
    "url": "blog/skepticism/2015/09/27/scan/index.html",
    "revision": "19d079f21c9fa6f73cd7d7cb558fa157"
  },
  {
    "url": "blog/skepticism/2015/09/index.html",
    "revision": "e7adfac5ce4e48548380a6f617f97c16"
  },
  {
    "url": "blog/skepticism/2015/10/04/ghost/index.html",
    "revision": "8a20b27a02d12f7d90e246a019a4892f"
  },
  {
    "url": "blog/skepticism/2015/10/04/haka/index.html",
    "revision": "9d0044444d0f01728a20efa667dbabab"
  },
  {
    "url": "blog/skepticism/2015/10/04/index.html",
    "revision": "472f6fc1caba54ff8d216219bca2ae93"
  },
  {
    "url": "blog/skepticism/2015/10/04/mars/index.html",
    "revision": "e0e211ec22bfef45445c62b26881f97f"
  },
  {
    "url": "blog/skepticism/2015/10/04/pharmacy/index.html",
    "revision": "cfb99ff3eb78b9dde2db7a504e5d6bd3"
  },
  {
    "url": "blog/skepticism/2015/10/04/prostate/index.html",
    "revision": "a7955951ee3262856f522124d8040b08"
  },
  {
    "url": "blog/skepticism/2015/10/11/armageddon/index.html",
    "revision": "7daa69ee5f24eeb6ecca5fffac1d067b"
  },
  {
    "url": "blog/skepticism/2015/10/11/climate/index.html",
    "revision": "6664b0b95e069e5418a55086f7110857"
  },
  {
    "url": "blog/skepticism/2015/10/11/ghost/index.html",
    "revision": "14b3bc4da028bdfa21e1952c680084c1"
  },
  {
    "url": "blog/skepticism/2015/10/11/index.html",
    "revision": "221775c2d75cf08bb43fa7c6f816d9fe"
  },
  {
    "url": "blog/skepticism/2015/10/11/magnesleep/index.html",
    "revision": "97f1a93eb0cc98205de26e9f81f22daf"
  },
  {
    "url": "blog/skepticism/2015/10/11/nhs/index.html",
    "revision": "e9a49a4583bb3576b93751b248868877"
  },
  {
    "url": "blog/skepticism/2015/10/11/prophet/index.html",
    "revision": "f4bb2cfe7a9cec7ac5b022323eeedc89"
  },
  {
    "url": "blog/skepticism/2015/10/index.html",
    "revision": "9d851c4ab902a8dbb7a05196792ade1f"
  },
  {
    "url": "blog/skepticism/2015/11/15/end/index.html",
    "revision": "a6423772ee56347bc01115da6d42320b"
  },
  {
    "url": "blog/skepticism/2015/11/15/index.html",
    "revision": "97523022088cbd5165e4100cd8c1efa7"
  },
  {
    "url": "blog/skepticism/2015/11/index.html",
    "revision": "bba1ac9af266870f0d8137a3d4d8ef5c"
  },
  {
    "url": "blog/skepticism/2015/12/13/astrology/index.html",
    "revision": "0447cb814763e43c4e9f3d6b3b6d02e3"
  },
  {
    "url": "blog/skepticism/2015/12/13/cancer/index.html",
    "revision": "448d8414f8ad7fd66aee132b092ed358"
  },
  {
    "url": "blog/skepticism/2015/12/13/chickenpox/index.html",
    "revision": "38480ac21401f3375063f0e3bfeafc42"
  },
  {
    "url": "blog/skepticism/2015/12/13/index.html",
    "revision": "1380807d2b603664b28ee00d8cc2aa28"
  },
  {
    "url": "blog/skepticism/2015/12/13/osteopath/index.html",
    "revision": "857a54ef2e3872ede7064713b1651863"
  },
  {
    "url": "blog/skepticism/2015/12/13/priest/index.html",
    "revision": "d6146943ec51bf256c1cdd2f688ec379"
  },
  {
    "url": "blog/skepticism/2015/12/13/psychic/index.html",
    "revision": "8c1606e8ac3a538d35f631eff0a05925"
  },
  {
    "url": "blog/skepticism/2015/12/13/vaccines/index.html",
    "revision": "d087d6df0ee68758c6e11e7bc787aa24"
  },
  {
    "url": "blog/skepticism/2015/12/index.html",
    "revision": "056d1e339000a1e05fc186f9e320b2b4"
  },
  {
    "url": "blog/skepticism/2015/index.html",
    "revision": "104efbadf1893f6b1c5fbd4df7c9636a"
  },
  {
    "url": "blog/skepticism/2016/02/07/antioxidant/index.html",
    "revision": "2d369c33fb53727ef1ceee9520bb35ca"
  },
  {
    "url": "blog/skepticism/2016/02/07/index.html",
    "revision": "0d22e80b5fbfe2adc0d458fe739d39bc"
  },
  {
    "url": "blog/skepticism/2016/02/07/kfc/index.html",
    "revision": "2311ab1c602b3a396f0bb3877a0f947f"
  },
  {
    "url": "blog/skepticism/2016/02/07/ph/index.html",
    "revision": "81e06f02e848390c76ad3f7df87bd5fa"
  },
  {
    "url": "blog/skepticism/2016/02/07/sandy/index.html",
    "revision": "c9239f74a1cd01121f053e5d7be810b1"
  },
  {
    "url": "blog/skepticism/2016/02/07/sarfati/index.html",
    "revision": "6484398ad0bb3e50f2f1d286eb41f0e9"
  },
  {
    "url": "blog/skepticism/2016/02/07/trump/index.html",
    "revision": "d66d69d7d7673707a738b8ab065bebc9"
  },
  {
    "url": "blog/skepticism/2016/02/14/coins/index.html",
    "revision": "81647657e8cfcc9446f90d0f70021cdb"
  },
  {
    "url": "blog/skepticism/2016/02/14/fast/index.html",
    "revision": "13801ea4b041df368a72b22e3bb09bdd"
  },
  {
    "url": "blog/skepticism/2016/02/14/fluoride/index.html",
    "revision": "e83269c7edac4b0c7eafd44372c4f203"
  },
  {
    "url": "blog/skepticism/2016/02/14/icke/index.html",
    "revision": "8c916af0a465346a7fb5632cb182fca0"
  },
  {
    "url": "blog/skepticism/2016/02/14/index.html",
    "revision": "5a19a2fdb4d7c853e9c4dad145d0c96b"
  },
  {
    "url": "blog/skepticism/2016/02/14/yeti/index.html",
    "revision": "4e07a21c14d910b48533c5319d32cbf9"
  },
  {
    "url": "blog/skepticism/2016/02/21/homeopathy/index.html",
    "revision": "23a0132d316154760160d5d0ad92076c"
  },
  {
    "url": "blog/skepticism/2016/02/21/index.html",
    "revision": "2005525f1b147e2eba2f2fd7a2cf2180"
  },
  {
    "url": "blog/skepticism/2016/02/21/monster/index.html",
    "revision": "b8859d3b7bb972b98c1f9c8240e60105"
  },
  {
    "url": "blog/skepticism/2016/02/21/scalia/index.html",
    "revision": "d3f0b9629d07e5fa7f7094d659dd324f"
  },
  {
    "url": "blog/skepticism/2016/02/21/shane/index.html",
    "revision": "3328097abd55148e5e6e6d61ad2ec7dc"
  },
  {
    "url": "blog/skepticism/2016/02/21/texas/index.html",
    "revision": "b9b422ba0a4bdb0c3491b94a7564b069"
  },
  {
    "url": "blog/skepticism/2016/02/28/acupuncture/index.html",
    "revision": "6a94e4128793769683e0f2b92db079c3"
  },
  {
    "url": "blog/skepticism/2016/02/28/fsm/index.html",
    "revision": "a7fdf2fc569e118db93fa77e98d221b2"
  },
  {
    "url": "blog/skepticism/2016/02/28/index.html",
    "revision": "a378b5bb061f0c7a352e4d7e9d965ed0"
  },
  {
    "url": "blog/skepticism/2016/02/28/iv/index.html",
    "revision": "f3e904d68745eb2abd4440d8739e6507"
  },
  {
    "url": "blog/skepticism/2016/02/28/natural/index.html",
    "revision": "1fdb7be5cafe51d28382dbe1bce21c9b"
  },
  {
    "url": "blog/skepticism/2016/02/28/talc/index.html",
    "revision": "00859f00168ea2407d3843afb251bdec"
  },
  {
    "url": "blog/skepticism/2016/02/index.html",
    "revision": "2890e2197a6630ca4b5a174cdd607c6c"
  },
  {
    "url": "blog/skepticism/2016/03/13/herbs/index.html",
    "revision": "722b2145fa65c1a757bab9dbad149792"
  },
  {
    "url": "blog/skepticism/2016/03/13/index.html",
    "revision": "f1f4698056309d5369dfe48a1b6cea2c"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandala/index.html",
    "revision": "c6cc9fd0988fb921912decfd3fbd3276"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandela/index.html",
    "revision": "6a72650535365a793680acc6d2dcc4ec"
  },
  {
    "url": "blog/skepticism/2016/03/13/spray/index.html",
    "revision": "0f791a25083961123071edb03c0a7482"
  },
  {
    "url": "blog/skepticism/2016/03/index.html",
    "revision": "b5edb7c673375eecf7171b8e6f9ddcc5"
  },
  {
    "url": "blog/skepticism/2016/04/17/charity/index.html",
    "revision": "ffb734591567103405f719cff67ff411"
  },
  {
    "url": "blog/skepticism/2016/04/17/chiro/index.html",
    "revision": "1c0871bf99f8fe73d124d1b5ec305c5b"
  },
  {
    "url": "blog/skepticism/2016/04/17/fluoride/index.html",
    "revision": "b0b898310c219079cea8632fc4d6b275"
  },
  {
    "url": "blog/skepticism/2016/04/17/index.html",
    "revision": "13acd07b5f0177211da62637dff63f15"
  },
  {
    "url": "blog/skepticism/2016/04/17/lotto/index.html",
    "revision": "f70e5b19829113e58d5f9c66a72f6460"
  },
  {
    "url": "blog/skepticism/2016/04/17/mind/index.html",
    "revision": "4a58e9bf39fbcaee8b9581f994a49465"
  },
  {
    "url": "blog/skepticism/2016/04/17/whooping/index.html",
    "revision": "50f0f949ce781737bc89d0ffd0f2ac00"
  },
  {
    "url": "blog/skepticism/2016/04/index.html",
    "revision": "489a2d2e2680aa55364a80fff265fa97"
  },
  {
    "url": "blog/skepticism/2016/06/05/1080/index.html",
    "revision": "0498f54822ec16de5e43ac94b90bc8dd"
  },
  {
    "url": "blog/skepticism/2016/06/05/acupuncture/index.html",
    "revision": "3ef2a6c9a867890a1826076a74986433"
  },
  {
    "url": "blog/skepticism/2016/06/05/family/index.html",
    "revision": "39212fa96ebb89eb5702bdfb8c6982ee"
  },
  {
    "url": "blog/skepticism/2016/06/05/index.html",
    "revision": "1520814e6e3f4563419fd728112d4034"
  },
  {
    "url": "blog/skepticism/2016/06/05/limbaugh/index.html",
    "revision": "4c92baed4fa0c0436e8dd6273e06f621"
  },
  {
    "url": "blog/skepticism/2016/06/12/bobby/index.html",
    "revision": "6e2971b0d7895c8ec7f2315f467a1f8f"
  },
  {
    "url": "blog/skepticism/2016/06/12/climate/index.html",
    "revision": "a6e561f7ffe545c15cbef37266b8d177"
  },
  {
    "url": "blog/skepticism/2016/06/12/index.html",
    "revision": "70f748387260cace6d44fb93f1eb3ed2"
  },
  {
    "url": "blog/skepticism/2016/06/12/pugh/index.html",
    "revision": "5f2d77346595fe52986195ff53cf227b"
  },
  {
    "url": "blog/skepticism/2016/06/12/savage/index.html",
    "revision": "9855da7889d927a8479e0ef7752b0e15"
  },
  {
    "url": "blog/skepticism/2016/06/12/sawdust/index.html",
    "revision": "ba05ac5ab5d80a8d9026e8e76cfe4636"
  },
  {
    "url": "blog/skepticism/2016/06/19/beauty/index.html",
    "revision": "1a62d202dbc79bfefe5cefbe6fb37dfc"
  },
  {
    "url": "blog/skepticism/2016/06/19/bilderberg/index.html",
    "revision": "ae6fcb866acc7fea782db8483fd7e47e"
  },
  {
    "url": "blog/skepticism/2016/06/19/cyf/index.html",
    "revision": "f047909140df0924bf4c54ced6134b3e"
  },
  {
    "url": "blog/skepticism/2016/06/19/holt/index.html",
    "revision": "203944511873ba5409eb70a40b7b51c5"
  },
  {
    "url": "blog/skepticism/2016/06/19/index.html",
    "revision": "41d8611be7df39b4201b4b34eb7d3a42"
  },
  {
    "url": "blog/skepticism/2016/06/19/silver/index.html",
    "revision": "c2c6279a1867db87eb3f941baece5ceb"
  },
  {
    "url": "blog/skepticism/2016/06/19/ufo/index.html",
    "revision": "8d84d89fb9a7069a5eba0502dbaeaac0"
  },
  {
    "url": "blog/skepticism/2016/06/26/homeopathy/index.html",
    "revision": "ae3169a7bac2ab174b748057f2d05304"
  },
  {
    "url": "blog/skepticism/2016/06/26/index.html",
    "revision": "84933ce7260e6501f3ab02ca77d900db"
  },
  {
    "url": "blog/skepticism/2016/06/26/robbins/index.html",
    "revision": "afeb4a387003202a5f8175be9da42abf"
  },
  {
    "url": "blog/skepticism/2016/06/26/selfies/index.html",
    "revision": "da29914f887435931de5e6af37f57a53"
  },
  {
    "url": "blog/skepticism/2016/06/26/silver/index.html",
    "revision": "ec6d42adc72019595c2f786f1a82d831"
  },
  {
    "url": "blog/skepticism/2016/06/26/ufos/index.html",
    "revision": "c6927b8ebd9b5c7974bf6b275fdec3cc"
  },
  {
    "url": "blog/skepticism/2016/06/index.html",
    "revision": "c4fd881527b6c277a7546a1167575416"
  },
  {
    "url": "blog/skepticism/2016/07/03/glyphosate/index.html",
    "revision": "d6ec8732c34bc41a6033b54a1bbe1fce"
  },
  {
    "url": "blog/skepticism/2016/07/03/gmo/index.html",
    "revision": "36881159ffc9b8299bd698e28a00048b"
  },
  {
    "url": "blog/skepticism/2016/07/03/index.html",
    "revision": "b3caa7cc5898a3007034cc2a4e0b93c1"
  },
  {
    "url": "blog/skepticism/2016/07/03/jail/index.html",
    "revision": "27b10edc3154c9d22bc548c4b7d58ced"
  },
  {
    "url": "blog/skepticism/2016/07/03/ken/index.html",
    "revision": "5de5cd5b7b1f73827c6ae046cbe3a51f"
  },
  {
    "url": "blog/skepticism/2016/07/10/ark/index.html",
    "revision": "d654966bc7ca1527549f90ce0c73ce69"
  },
  {
    "url": "blog/skepticism/2016/07/10/bee/index.html",
    "revision": "7d558dc904693b75e629e1821cf77161"
  },
  {
    "url": "blog/skepticism/2016/07/10/index.html",
    "revision": "a07f0fad5be85aa6243ee6ffc84eb317"
  },
  {
    "url": "blog/skepticism/2016/07/10/lottery/index.html",
    "revision": "48285bdc0387af45a836e4fef7b3fcb0"
  },
  {
    "url": "blog/skepticism/2016/07/10/murder/index.html",
    "revision": "c6bad9e3778e11926a90f3455097fa22"
  },
  {
    "url": "blog/skepticism/2016/07/17/dogs/index.html",
    "revision": "145c8fca1f2e3f0d13fdc3e7203bda51"
  },
  {
    "url": "blog/skepticism/2016/07/17/fsm/index.html",
    "revision": "87e6cd661794c98bd2c322cbcfcc9ad5"
  },
  {
    "url": "blog/skepticism/2016/07/17/fyi/index.html",
    "revision": "972c4dcd1b5cbe21cb6cc8efa21e31d0"
  },
  {
    "url": "blog/skepticism/2016/07/17/index.html",
    "revision": "dacdcf5bea254123d0c308fb761edba3"
  },
  {
    "url": "blog/skepticism/2016/07/17/natural/index.html",
    "revision": "4ec97bcc033bcfe589969d7ab8869c18"
  },
  {
    "url": "blog/skepticism/2016/07/17/pokemon/index.html",
    "revision": "01c4f045d08e887df379b67ad9804a72"
  },
  {
    "url": "blog/skepticism/2016/07/index.html",
    "revision": "ae197f6173dc27ebf04fb876ea6a87a2"
  },
  {
    "url": "blog/skepticism/2016/08/07/icke/index.html",
    "revision": "a9132963dfdeb20d7a4ccfe9bbac93e0"
  },
  {
    "url": "blog/skepticism/2016/08/07/index.html",
    "revision": "8849d19222da97bfc17d515a879e8a7e"
  },
  {
    "url": "blog/skepticism/2016/08/21/brian/index.html",
    "revision": "3a38cbcdf5ae0333bf6eb44462115b8f"
  },
  {
    "url": "blog/skepticism/2016/08/21/chlorine/index.html",
    "revision": "917a0a9844121cc5553de6becf9fd048"
  },
  {
    "url": "blog/skepticism/2016/08/21/index.html",
    "revision": "7464796abd20bc247df1c29fb1ac6ed4"
  },
  {
    "url": "blog/skepticism/2016/08/21/murder/index.html",
    "revision": "27ca9d0a4c4868ea032d92ed1ae6830e"
  },
  {
    "url": "blog/skepticism/2016/08/21/superfoods/index.html",
    "revision": "bfd6b47ecf0660d6d55ea9ad015a4a69"
  },
  {
    "url": "blog/skepticism/2016/08/21/witch/index.html",
    "revision": "4b394b7cbdd597f2a5bcbbf0cc6c8638"
  },
  {
    "url": "blog/skepticism/2016/08/28/alcohol/index.html",
    "revision": "bdc0de76e6fc51d1a9b15d1f7e895bbe"
  },
  {
    "url": "blog/skepticism/2016/08/28/chiro/index.html",
    "revision": "6416e0ed625b42f6247f780aa66f548d"
  },
  {
    "url": "blog/skepticism/2016/08/28/index.html",
    "revision": "a5d24c4977262fdd448dbd73e9fa3b88"
  },
  {
    "url": "blog/skepticism/2016/08/28/processed/index.html",
    "revision": "70cd125f9b661dd1e190e4f66c8979b0"
  },
  {
    "url": "blog/skepticism/2016/08/28/sbh/index.html",
    "revision": "75c1081fbc5f1dc4bfd93285035dc5bb"
  },
  {
    "url": "blog/skepticism/2016/08/index.html",
    "revision": "51d2ce4cb937b2cc20368acfa98eee40"
  },
  {
    "url": "blog/skepticism/2016/09/18/altruism/index.html",
    "revision": "3096afa180f1fc1c12bcf28ac91d28dc"
  },
  {
    "url": "blog/skepticism/2016/09/18/better/index.html",
    "revision": "724350076f722cee4ce982a7333b1e3c"
  },
  {
    "url": "blog/skepticism/2016/09/18/homeopathy/index.html",
    "revision": "38422110abdc6d6ab914f8674c5a8e83"
  },
  {
    "url": "blog/skepticism/2016/09/18/index.html",
    "revision": "99819c57ff4c0205a1cab06f696cb3c5"
  },
  {
    "url": "blog/skepticism/2016/09/18/nonsense/index.html",
    "revision": "9ba029fd8615cbe0a3049a029b53cb0f"
  },
  {
    "url": "blog/skepticism/2016/09/18/trump/index.html",
    "revision": "4dc39968b6745ff6aad639d4d7728a24"
  },
  {
    "url": "blog/skepticism/2016/09/25/clinic/index.html",
    "revision": "6fe1950816eaca067799df497c909429"
  },
  {
    "url": "blog/skepticism/2016/09/25/fluoride/index.html",
    "revision": "b3f6e45545fb4696f0aa8f096bbb11ee"
  },
  {
    "url": "blog/skepticism/2016/09/25/homeopathy/index.html",
    "revision": "a5b05e6e31068e4edc83dfe588fd27ab"
  },
  {
    "url": "blog/skepticism/2016/09/25/index.html",
    "revision": "040246173f3d700d86ac897451678798"
  },
  {
    "url": "blog/skepticism/2016/09/25/murder/index.html",
    "revision": "5ee46f283edfb7800d38eb698ef58b89"
  },
  {
    "url": "blog/skepticism/2016/09/index.html",
    "revision": "f0f5592d016e2deaa095d5ff22362648"
  },
  {
    "url": "blog/skepticism/2016/10/21/bigfoot/index.html",
    "revision": "7c640c35386091182cd34f5e0d4b9bb9"
  },
  {
    "url": "blog/skepticism/2016/10/21/breasts/index.html",
    "revision": "556b29bb762f1a20db838ea96669b108"
  },
  {
    "url": "blog/skepticism/2016/10/21/index.html",
    "revision": "93dc4c33d11040d06a6e1265793ca0ea"
  },
  {
    "url": "blog/skepticism/2016/10/21/medsafe/index.html",
    "revision": "4f4a96cd376d4df0205870a57be30789"
  },
  {
    "url": "blog/skepticism/2016/10/21/zenteq/index.html",
    "revision": "341bb28f4f753c4217406264ff6d1752"
  },
  {
    "url": "blog/skepticism/2016/10/index.html",
    "revision": "4518c317b788f4c92473a53f7a828301"
  },
  {
    "url": "blog/skepticism/2016/11/13/conference/index.html",
    "revision": "cab1c44899e527595a2129e353c6068e"
  },
  {
    "url": "blog/skepticism/2016/11/13/green/index.html",
    "revision": "468452ee779c853c913e451db3016489"
  },
  {
    "url": "blog/skepticism/2016/11/13/index.html",
    "revision": "d5928a9aabd59baf40ae7b8a096b4796"
  },
  {
    "url": "blog/skepticism/2016/11/13/vice/index.html",
    "revision": "8aa2be6f8063f8c793d75c1831959cba"
  },
  {
    "url": "blog/skepticism/2016/11/27/bioptron/index.html",
    "revision": "a6a452db803f3128d3b61020ac2f5cef"
  },
  {
    "url": "blog/skepticism/2016/11/27/conference/index.html",
    "revision": "b31183dff3448463dcdf777ce8ca55e6"
  },
  {
    "url": "blog/skepticism/2016/11/27/earthquake/index.html",
    "revision": "0153f0452707b35f4a7036406a88bfa6"
  },
  {
    "url": "blog/skepticism/2016/11/27/index.html",
    "revision": "0ccda7a88d0fa770f026aea17c7557bb"
  },
  {
    "url": "blog/skepticism/2016/11/index.html",
    "revision": "1bd25922ffe3aede89042a0ee370bbc1"
  },
  {
    "url": "blog/skepticism/2016/12/04/conference/index.html",
    "revision": "4b74f2f341889b3389407c53c46d45c8"
  },
  {
    "url": "blog/skepticism/2016/12/04/index.html",
    "revision": "adf03ec62f8bacfeab63b5b81d579bac"
  },
  {
    "url": "blog/skepticism/2016/12/18/colin/index.html",
    "revision": "32ffa779ec1b5aa0acff4fccfe66734d"
  },
  {
    "url": "blog/skepticism/2016/12/18/fiji/index.html",
    "revision": "c6adc2ec064827cb508a5568462b82d4"
  },
  {
    "url": "blog/skepticism/2016/12/18/index.html",
    "revision": "eeb566d89b25e60c2d026b1758db67bc"
  },
  {
    "url": "blog/skepticism/2016/12/18/kinesiology/index.html",
    "revision": "e5844d0cdc5d244448885170202479b8"
  },
  {
    "url": "blog/skepticism/2016/12/18/mmm/index.html",
    "revision": "eb8f131da4fa049bf7e26b43569b764d"
  },
  {
    "url": "blog/skepticism/2016/12/18/nigel/index.html",
    "revision": "f862d68d433b4f6f12357513003d1f4e"
  },
  {
    "url": "blog/skepticism/2016/12/index.html",
    "revision": "8edf5f49ef806b2dcc5bdacd9179ffed"
  },
  {
    "url": "blog/skepticism/2016/index.html",
    "revision": "f05d335ef60251f88146188fb13e3279"
  },
  {
    "url": "blog/skepticism/2017/01/22/index.html",
    "revision": "b180f214442da8ab378ddf739bb7b999"
  },
  {
    "url": "blog/skepticism/2017/01/22/scientology/index.html",
    "revision": "36705d9d2d4ab9469bbdbaf7414420c6"
  },
  {
    "url": "blog/skepticism/2017/01/29/creation/index.html",
    "revision": "404f715cd43622dad85a6647310b7e0b"
  },
  {
    "url": "blog/skepticism/2017/01/29/index.html",
    "revision": "e7fc52cd5d650cda90dc3bea3fa72f09"
  },
  {
    "url": "blog/skepticism/2017/01/index.html",
    "revision": "5d52a87b1056eb1c0ea5d84793d8b005"
  },
  {
    "url": "blog/skepticism/2017/02/05/fraudster/index.html",
    "revision": "04c6358983d402ff0360d618af0bab18"
  },
  {
    "url": "blog/skepticism/2017/02/05/gervais/index.html",
    "revision": "9ef5ca04d1db5278bcff63b65ab13c71"
  },
  {
    "url": "blog/skepticism/2017/02/05/index.html",
    "revision": "b831f218aa7a9cfe0e053907933cb809"
  },
  {
    "url": "blog/skepticism/2017/02/05/scientology/index.html",
    "revision": "25a348ce11ca729dab5ca6b8834c7709"
  },
  {
    "url": "blog/skepticism/2017/02/19/homeopathy/index.html",
    "revision": "a73557195f647e2a2c15ba5f39c131aa"
  },
  {
    "url": "blog/skepticism/2017/02/19/index.html",
    "revision": "64eca61d1974e7fd80612ce9eab45112"
  },
  {
    "url": "blog/skepticism/2017/02/19/lottery/index.html",
    "revision": "63ec6221d31e56532ac2a45d66c35ab8"
  },
  {
    "url": "blog/skepticism/2017/02/19/vaxxed/index.html",
    "revision": "87e69c8053dd3dd95a9eecb4fc3a3730"
  },
  {
    "url": "blog/skepticism/2017/02/19/whales/index.html",
    "revision": "7f3f7c31dc6cd16daffe06acbca4382d"
  },
  {
    "url": "blog/skepticism/2017/02/index.html",
    "revision": "de73844726f1f3e04d87f1a74a61e165"
  },
  {
    "url": "blog/skepticism/2017/03/05/index.html",
    "revision": "4326249cbbb79a90ccec587239f936b7"
  },
  {
    "url": "blog/skepticism/2017/03/05/rea/index.html",
    "revision": "bbf00c9cc4d100f9451ca0453006f815"
  },
  {
    "url": "blog/skepticism/2017/03/19/fake/index.html",
    "revision": "40412d7cae789dca72b5ff140d2b8df7"
  },
  {
    "url": "blog/skepticism/2017/03/19/index.html",
    "revision": "72aec3d881d1df062f6a0db023e1562c"
  },
  {
    "url": "blog/skepticism/2017/03/19/murder/index.html",
    "revision": "bcd304ef7cdc944676ae93f637b73024"
  },
  {
    "url": "blog/skepticism/2017/03/26/census/index.html",
    "revision": "b32273a47e9d3ffd97ed3eadd4dd827c"
  },
  {
    "url": "blog/skepticism/2017/03/26/index.html",
    "revision": "f156bc6ba986a1cdd45d5481714ea7f6"
  },
  {
    "url": "blog/skepticism/2017/03/26/nzmj/index.html",
    "revision": "1dc6aa0cbf4a0ecc3fbd2479b576cd70"
  },
  {
    "url": "blog/skepticism/2017/03/26/shaquille/index.html",
    "revision": "6039c14342813b5bd8e8a63fb47bb2b7"
  },
  {
    "url": "blog/skepticism/2017/03/index.html",
    "revision": "b7a694675385be7f47b4d2dd06186515"
  },
  {
    "url": "blog/skepticism/2017/04/02/index.html",
    "revision": "0cf83e575e01d45df1a55f257af2dc16"
  },
  {
    "url": "blog/skepticism/2017/04/02/nasa/index.html",
    "revision": "c5a8d6cba4abea803a2472c2b769bf3d"
  },
  {
    "url": "blog/skepticism/2017/04/02/science/index.html",
    "revision": "19ed3603dfd909bb6e05e780525becfe"
  },
  {
    "url": "blog/skepticism/2017/04/02/vaxxed/index.html",
    "revision": "f39fd7a3c15bc356b51545b43ba349ef"
  },
  {
    "url": "blog/skepticism/2017/04/09/index.html",
    "revision": "28a7461c78204785c1bc043cf248e63b"
  },
  {
    "url": "blog/skepticism/2017/04/09/tekiri/index.html",
    "revision": "78dcaca4422db5015593251b8bd0c88a"
  },
  {
    "url": "blog/skepticism/2017/04/09/vaxxed/index.html",
    "revision": "37fb3e58adf2ddde42c702beaa1e5949"
  },
  {
    "url": "blog/skepticism/2017/04/23/arise/index.html",
    "revision": "eef3a7e869b73972b86048d782420c90"
  },
  {
    "url": "blog/skepticism/2017/04/23/index.html",
    "revision": "4e8cd69752544e741728529e7db44765"
  },
  {
    "url": "blog/skepticism/2017/04/23/kelvin/index.html",
    "revision": "08e0130d7fa244e05d3b5c1f60b73372"
  },
  {
    "url": "blog/skepticism/2017/04/index.html",
    "revision": "b83b774115b7681622e346bf400dbe32"
  },
  {
    "url": "blog/skepticism/2017/05/07/cancer/index.html",
    "revision": "eb7df7496515e4b48ac6c409d97afcbc"
  },
  {
    "url": "blog/skepticism/2017/05/07/index.html",
    "revision": "c1eb433f7d192b8f6f12bed5b258c57e"
  },
  {
    "url": "blog/skepticism/2017/05/07/nigel/index.html",
    "revision": "a18af3fe4e53d7773a17aee6e54c9380"
  },
  {
    "url": "blog/skepticism/2017/05/21/blasphemy/index.html",
    "revision": "466461448b5e402f32afe8d35bc7e8ad"
  },
  {
    "url": "blog/skepticism/2017/05/21/flat/index.html",
    "revision": "ad63b33ded478c7ef2164c01125a909e"
  },
  {
    "url": "blog/skepticism/2017/05/21/index.html",
    "revision": "7c18c0e4f57442ad573b00e066de214b"
  },
  {
    "url": "blog/skepticism/2017/05/21/maori/index.html",
    "revision": "d6f6b2fc0b9446c3a724d0f2161e536c"
  },
  {
    "url": "blog/skepticism/2017/05/index.html",
    "revision": "536dc45b9e65c6f6c959a785dde27ee9"
  },
  {
    "url": "blog/skepticism/2017/06/04/bigelow/index.html",
    "revision": "a991644283a1827c58346e81c237c1f0"
  },
  {
    "url": "blog/skepticism/2017/06/04/climate/index.html",
    "revision": "2da7b858aa31c3bd43c4ba3c4bb6df43"
  },
  {
    "url": "blog/skepticism/2017/06/04/hansford/index.html",
    "revision": "27e311060b0127a3326fd8e0dcdc256c"
  },
  {
    "url": "blog/skepticism/2017/06/04/index.html",
    "revision": "fc8a5f0349e2e5ee19c4d1603c26a518"
  },
  {
    "url": "blog/skepticism/2017/06/04/wasp/index.html",
    "revision": "d952cd02f00fedf9db320b663b0f65fd"
  },
  {
    "url": "blog/skepticism/2017/06/11/colonic/index.html",
    "revision": "705b8ddedfe845b7f647db878450e778"
  },
  {
    "url": "blog/skepticism/2017/06/11/credulous/index.html",
    "revision": "7202012c9e7823bdf8780b19738774a4"
  },
  {
    "url": "blog/skepticism/2017/06/11/index.html",
    "revision": "2fdfd9af85fea6c8278bedfdb2726192"
  },
  {
    "url": "blog/skepticism/2017/06/11/journals/index.html",
    "revision": "f98b7e7dcd9e575c7433dc1ef34fdb63"
  },
  {
    "url": "blog/skepticism/2017/06/18/breatharians/index.html",
    "revision": "66fe04d17fd41ecc121545f38ef204c1"
  },
  {
    "url": "blog/skepticism/2017/06/18/fieldays/index.html",
    "revision": "f6ce9837652bcadb3bcef2a06183db4d"
  },
  {
    "url": "blog/skepticism/2017/06/18/index.html",
    "revision": "3e29dba5452a248714a5859e676bfce0"
  },
  {
    "url": "blog/skepticism/2017/06/18/jw/index.html",
    "revision": "23e6c474af2c119fe24d4ad7369a0770"
  },
  {
    "url": "blog/skepticism/2017/06/18/oil/index.html",
    "revision": "04c7e834a8e51c0ff04c14d861ec4b13"
  },
  {
    "url": "blog/skepticism/2017/06/index.html",
    "revision": "cd14a00fc9f9d7f1c77fb2c124c97d72"
  },
  {
    "url": "blog/skepticism/2017/07/02/baby/index.html",
    "revision": "ebf0e055d0de7cf2382659fc395f9927"
  },
  {
    "url": "blog/skepticism/2017/07/02/index.html",
    "revision": "1d621ad4b0a141049fde31d78a2b3a9d"
  },
  {
    "url": "blog/skepticism/2017/07/02/infowars/index.html",
    "revision": "e8e0b9ec29a60bdb58585d86d63c763c"
  },
  {
    "url": "blog/skepticism/2017/07/02/scientology/index.html",
    "revision": "ce2ad55bdde742bb011be96638cdcdf7"
  },
  {
    "url": "blog/skepticism/2017/07/16/bananas/index.html",
    "revision": "ba298f1ae68f443e93ec571d5e730797"
  },
  {
    "url": "blog/skepticism/2017/07/16/circles/index.html",
    "revision": "759df34eb95555e334a137bd35166442"
  },
  {
    "url": "blog/skepticism/2017/07/16/index.html",
    "revision": "7a142e563a77bc4a01e9f49ea79e210e"
  },
  {
    "url": "blog/skepticism/2017/07/16/siggi/index.html",
    "revision": "ea069daa0736c8e83209905803173c4a"
  },
  {
    "url": "blog/skepticism/2017/07/16/vaxxed/index.html",
    "revision": "3cea3cb031e49672ad18593698101265"
  },
  {
    "url": "blog/skepticism/2017/07/30/bleach/index.html",
    "revision": "eefb7457ba5fdf16a7c09656b89237ad"
  },
  {
    "url": "blog/skepticism/2017/07/30/bluebeam/index.html",
    "revision": "77f7f64402bee5b962aacf34bbc0733c"
  },
  {
    "url": "blog/skepticism/2017/07/30/index.html",
    "revision": "8fd0c1d76623caa4d08e0fe112ed9e2d"
  },
  {
    "url": "blog/skepticism/2017/07/30/police/index.html",
    "revision": "52e6695d7bbd0ecb42edc095f20f496c"
  },
  {
    "url": "blog/skepticism/2017/07/index.html",
    "revision": "136015030fda35e7aa388dc19eac614a"
  },
  {
    "url": "blog/skepticism/2017/08/06/conned/index.html",
    "revision": "9ac18f11a505c1dfca06bf94e362050c"
  },
  {
    "url": "blog/skepticism/2017/08/06/doll/index.html",
    "revision": "1c687b1931cd7d588333236e238e9bf1"
  },
  {
    "url": "blog/skepticism/2017/08/06/index.html",
    "revision": "c83c929fee9767299df94cfbc6cc8bd4"
  },
  {
    "url": "blog/skepticism/2017/08/06/jacinda/index.html",
    "revision": "47606194f0a95a83c6f591348f81cd05"
  },
  {
    "url": "blog/skepticism/2017/08/06/lotto/index.html",
    "revision": "e8be333b11456c28eb64fa1338aff096"
  },
  {
    "url": "blog/skepticism/2017/08/27/index.html",
    "revision": "b8950acc5acacf4c7e9f71867883f084"
  },
  {
    "url": "blog/skepticism/2017/08/27/naturopath/index.html",
    "revision": "b72bc7584cdf48215bedf8588e3797b7"
  },
  {
    "url": "blog/skepticism/2017/08/27/satanic/index.html",
    "revision": "56397a3c32281711fef92647aa3e5592"
  },
  {
    "url": "blog/skepticism/2017/08/index.html",
    "revision": "6107cd1e06a2dea0ea4e03586a9dae97"
  },
  {
    "url": "blog/skepticism/2017/09/03/apocalypse/index.html",
    "revision": "a55a95650cfbe9c1b1919921e1fa546f"
  },
  {
    "url": "blog/skepticism/2017/09/03/cancer/index.html",
    "revision": "4bab0abe8f96057c9ae928f9dfd79e87"
  },
  {
    "url": "blog/skepticism/2017/09/03/index.html",
    "revision": "fca48a9273c2ddb8588236f88be897d9"
  },
  {
    "url": "blog/skepticism/2017/09/03/rectangle/index.html",
    "revision": "1c6f2bf77e7eec1b59434d475af52791"
  },
  {
    "url": "blog/skepticism/2017/09/03/stargate/index.html",
    "revision": "0645eb30d92a7cbeeefe3e1b0549fc8d"
  },
  {
    "url": "blog/skepticism/2017/09/index.html",
    "revision": "beec4697c3e3e126b9a3ad2d12759ab2"
  },
  {
    "url": "blog/skepticism/2017/10/01/apocalypse/index.html",
    "revision": "26359749a15fa6e6723a18be9c571b5f"
  },
  {
    "url": "blog/skepticism/2017/10/01/freeman/index.html",
    "revision": "09c3acdab6169a7c5981687b85e437ad"
  },
  {
    "url": "blog/skepticism/2017/10/01/index.html",
    "revision": "1c7f0a78120c921167925475af4fb548"
  },
  {
    "url": "blog/skepticism/2017/10/01/pharmacy/index.html",
    "revision": "40cea7652d4058b0149202054d4fc9f6"
  },
  {
    "url": "blog/skepticism/2017/10/08/index.html",
    "revision": "b1014100859380071557d878a54eab95"
  },
  {
    "url": "blog/skepticism/2017/10/08/pill/index.html",
    "revision": "e24c27f3cdcd448c11486728ec112696"
  },
  {
    "url": "blog/skepticism/2017/10/08/qsb/index.html",
    "revision": "af00313de52aca978e4d0bc30d33cdc5"
  },
  {
    "url": "blog/skepticism/2017/10/08/vegas/index.html",
    "revision": "b5140db2ebb2e674678a6c036325108f"
  },
  {
    "url": "blog/skepticism/2017/10/15/doterra/index.html",
    "revision": "c3cfc95ba0bf742e77d24c63d1135cb3"
  },
  {
    "url": "blog/skepticism/2017/10/15/index.html",
    "revision": "54a095364dd1c25f79837ed2907b9868"
  },
  {
    "url": "blog/skepticism/2017/10/15/lie/index.html",
    "revision": "6bb880c16004f54d0ed10a78ab38b148"
  },
  {
    "url": "blog/skepticism/2017/10/15/soap/index.html",
    "revision": "5a5a6346cefc7d53a0011d81f8f2b8d6"
  },
  {
    "url": "blog/skepticism/2017/10/index.html",
    "revision": "2b3e70e347c2e7cab09af4aa0ba4a6cf"
  },
  {
    "url": "blog/skepticism/2017/11/05/conference/index.html",
    "revision": "23a71a66376b96794369276a98ad4aea"
  },
  {
    "url": "blog/skepticism/2017/11/05/glyphosate/index.html",
    "revision": "dd0783da5bc351213b870064d0347db2"
  },
  {
    "url": "blog/skepticism/2017/11/05/index.html",
    "revision": "e9665675ca9a6390adb9f3b86ff9e93a"
  },
  {
    "url": "blog/skepticism/2017/11/05/stranded/index.html",
    "revision": "672e1738dac26dd9fbb050682d8a7a36"
  },
  {
    "url": "blog/skepticism/2017/11/05/tracts/index.html",
    "revision": "34c4045d9a9516b4ef35bb043d60bcc4"
  },
  {
    "url": "blog/skepticism/2017/11/12/ghost/index.html",
    "revision": "588ae9c150797a553286fe981f777e78"
  },
  {
    "url": "blog/skepticism/2017/11/12/green/index.html",
    "revision": "6053f4c0415120a3c064e2fa4c937dc7"
  },
  {
    "url": "blog/skepticism/2017/11/12/harassment/index.html",
    "revision": "348160d2347da27e07cc1e6950064bd0"
  },
  {
    "url": "blog/skepticism/2017/11/12/index.html",
    "revision": "8c5b97d49a41f27e46720c5c8c3b6051"
  },
  {
    "url": "blog/skepticism/2017/11/12/libby/index.html",
    "revision": "ccd60c448c608ef15076244c954490b1"
  },
  {
    "url": "blog/skepticism/2017/11/index.html",
    "revision": "5b37c0cf755d03931db17eda95a21592"
  },
  {
    "url": "blog/skepticism/2017/12/03/acupuncture/index.html",
    "revision": "ba7d2d8ba6430f119e65779f880fd005"
  },
  {
    "url": "blog/skepticism/2017/12/03/denialism/index.html",
    "revision": "11c6ba782730299f7333c865ae3b5362"
  },
  {
    "url": "blog/skepticism/2017/12/03/dowsing/index.html",
    "revision": "023cbadc5fd31633cb7f8419a87df512"
  },
  {
    "url": "blog/skepticism/2017/12/03/holes/index.html",
    "revision": "d840006b56326fc9702fe150fa6d7229"
  },
  {
    "url": "blog/skepticism/2017/12/03/index.html",
    "revision": "903c3c63be89673b6d2e0ded8f41ec8e"
  },
  {
    "url": "blog/skepticism/2017/12/17/index.html",
    "revision": "0b08d00411a930d4d6cbef678958aa98"
  },
  {
    "url": "blog/skepticism/2017/12/17/nhs/index.html",
    "revision": "84542c47d8c728559a9e0fbba9af0524"
  },
  {
    "url": "blog/skepticism/2017/12/17/oto/index.html",
    "revision": "635e931b6ecd077cdcc7a2872a0b6f8e"
  },
  {
    "url": "blog/skepticism/2017/12/17/pastafarian/index.html",
    "revision": "1d9ff8f50ec43ed9815bd59d8d236323"
  },
  {
    "url": "blog/skepticism/2017/12/17/shc/index.html",
    "revision": "c26a3b454737a03c9640ed46eb1451f5"
  },
  {
    "url": "blog/skepticism/2017/12/17/wellworks/index.html",
    "revision": "8e995ceefce44fae40dadc056039fba9"
  },
  {
    "url": "blog/skepticism/2017/12/index.html",
    "revision": "456d5aea6f8e2dcec965427b02f34ca1"
  },
  {
    "url": "blog/skepticism/2017/index.html",
    "revision": "29b23e9910b7c9d473ec88877b3d39ed"
  },
  {
    "url": "blog/skepticism/2018/01/21/grounding/index.html",
    "revision": "b1919f9adc4fde7ea97f0a953e2bb36a"
  },
  {
    "url": "blog/skepticism/2018/01/21/index.html",
    "revision": "f70c08834c897e307507e11487f54cdc"
  },
  {
    "url": "blog/skepticism/2018/01/21/naturopath/index.html",
    "revision": "89e6c185c4d946422bb9a687668b0f4d"
  },
  {
    "url": "blog/skepticism/2018/01/21/respen/index.html",
    "revision": "b69101d92a64fab1702c20ae8d70c171"
  },
  {
    "url": "blog/skepticism/2018/01/28/bears/index.html",
    "revision": "8d555be894690e1bb016a3c95c6c35ea"
  },
  {
    "url": "blog/skepticism/2018/01/28/index.html",
    "revision": "95fcec4b66aaa9c72d24c2df4c90be75"
  },
  {
    "url": "blog/skepticism/2018/01/28/peppering/index.html",
    "revision": "d9881570032a3192af13e9b6a1caabc1"
  },
  {
    "url": "blog/skepticism/2018/01/28/pet/index.html",
    "revision": "9c8d65b7a1464e18114213f8df9945c1"
  },
  {
    "url": "blog/skepticism/2018/01/28/quake/index.html",
    "revision": "50a73aa386751d2a901f713342b9a7eb"
  },
  {
    "url": "blog/skepticism/2018/01/28/scientology/index.html",
    "revision": "2d8563826fd992d129fbca146e5c971c"
  },
  {
    "url": "blog/skepticism/2018/01/index.html",
    "revision": "c019f7ddd663c0ada121dd98828deeb0"
  },
  {
    "url": "blog/skepticism/2018/02/11/asa/index.html",
    "revision": "e77bc23ec1be6fa5d6970fb588f9f504"
  },
  {
    "url": "blog/skepticism/2018/02/11/cannabis/index.html",
    "revision": "21e776696e402ba783f5b988c77d01ff"
  },
  {
    "url": "blog/skepticism/2018/02/11/elon/index.html",
    "revision": "68be0d23b2e01c0f7fbc3540804d1ccf"
  },
  {
    "url": "blog/skepticism/2018/02/11/homeopathy/index.html",
    "revision": "b4f7bf9ecdae89258922e061b7d32992"
  },
  {
    "url": "blog/skepticism/2018/02/11/index.html",
    "revision": "c745029ed8f102ba0a0fe6e5a5394eda"
  },
  {
    "url": "blog/skepticism/2018/02/11/water/index.html",
    "revision": "e2aae419271ae8854d46eb4497e3068d"
  },
  {
    "url": "blog/skepticism/2018/02/25/crisis/index.html",
    "revision": "76234d9390ab6d80e0262c589df5ee42"
  },
  {
    "url": "blog/skepticism/2018/02/25/eggs/index.html",
    "revision": "9bf350eb1a1bf857e1b4d65ce12a0ca0"
  },
  {
    "url": "blog/skepticism/2018/02/25/fsm/index.html",
    "revision": "a0f63176eb764ce855f5029c0e99d19a"
  },
  {
    "url": "blog/skepticism/2018/02/25/index.html",
    "revision": "666ee99d9a2f88707d7a8f44119ac6e6"
  },
  {
    "url": "blog/skepticism/2018/02/25/number/index.html",
    "revision": "b12e3be6e9ea2bbd8aea9bea294a92ef"
  },
  {
    "url": "blog/skepticism/2018/02/25/quackery/index.html",
    "revision": "ae240133b21a2681423843f9f913ea56"
  },
  {
    "url": "blog/skepticism/2018/02/index.html",
    "revision": "59918f76f2a8748cabe7aeae49cbf7cd"
  },
  {
    "url": "blog/skepticism/2018/03/11/ai/index.html",
    "revision": "98237781b40fa09bc421eacf9557adcf"
  },
  {
    "url": "blog/skepticism/2018/03/11/index.html",
    "revision": "de5ae3bbd2618cc129418ab7ccecad58"
  },
  {
    "url": "blog/skepticism/2018/03/11/radiation/index.html",
    "revision": "c95f3e341b751de03c0ae7a3c515f2b8"
  },
  {
    "url": "blog/skepticism/2018/03/11/reiki/index.html",
    "revision": "1456f5b664bf4fe90b90fdf7074f5bab"
  },
  {
    "url": "blog/skepticism/2018/03/11/ufo/index.html",
    "revision": "b5fe0e7c37949335a7917776cad101a1"
  },
  {
    "url": "blog/skepticism/2018/03/18/ghost/index.html",
    "revision": "38f8feb9fc3503f841d98f234519d29b"
  },
  {
    "url": "blog/skepticism/2018/03/18/index.html",
    "revision": "a078c5507e95dc7777af741abc30767b"
  },
  {
    "url": "blog/skepticism/2018/03/18/psychic/index.html",
    "revision": "73cc467ab7fd6e0caa428e961396f7f8"
  },
  {
    "url": "blog/skepticism/2018/03/18/quack/index.html",
    "revision": "a52acaf8447758b0906bfaf8d259dd39"
  },
  {
    "url": "blog/skepticism/2018/03/18/radiation/index.html",
    "revision": "06f4408254a940b8f46c8c1bf9dfbe39"
  },
  {
    "url": "blog/skepticism/2018/03/index.html",
    "revision": "8b192dba0ce757c8e2be3661f0b053ff"
  },
  {
    "url": "blog/skepticism/2018/04/08/calocurb/index.html",
    "revision": "dfe852bf500c21a563f4b5f53c6ddf39"
  },
  {
    "url": "blog/skepticism/2018/04/08/cam/index.html",
    "revision": "5a7d173d5dd6960049917d60fc701d5f"
  },
  {
    "url": "blog/skepticism/2018/04/08/index.html",
    "revision": "42c5e54af9a0d424a411a2486a9639d8"
  },
  {
    "url": "blog/skepticism/2018/04/08/psychic/index.html",
    "revision": "160632389607e46dfbf563f54f7e71fb"
  },
  {
    "url": "blog/skepticism/2018/04/08/vaccines/index.html",
    "revision": "46c5169d81a8449d58964527243006f5"
  },
  {
    "url": "blog/skepticism/2018/04/15/coffee/index.html",
    "revision": "232049e15389924174c87ca9f90e586d"
  },
  {
    "url": "blog/skepticism/2018/04/15/ignorance/index.html",
    "revision": "86af0de16f1a84122d155058153ba7c5"
  },
  {
    "url": "blog/skepticism/2018/04/15/index.html",
    "revision": "b4136ae62afffdc46cd6f9c49caf1db3"
  },
  {
    "url": "blog/skepticism/2018/04/15/nasa/index.html",
    "revision": "4c6f27ed3adc64822a70f0435676c665"
  },
  {
    "url": "blog/skepticism/2018/04/15/tapu/index.html",
    "revision": "b88f8b5b9c7018ece6696b0c6fce60df"
  },
  {
    "url": "blog/skepticism/2018/04/29/google/index.html",
    "revision": "ad7f2074317c781d28fee2e487e5ab70"
  },
  {
    "url": "blog/skepticism/2018/04/29/homeopathy/index.html",
    "revision": "0a66fe8062554bed73c6fff793b71143"
  },
  {
    "url": "blog/skepticism/2018/04/29/index.html",
    "revision": "f0f8477f53e7f48e23d5d22acd022171"
  },
  {
    "url": "blog/skepticism/2018/04/29/ken/index.html",
    "revision": "496b62cdbb9b0ab0945e48d11bdf2250"
  },
  {
    "url": "blog/skepticism/2018/04/29/v2k/index.html",
    "revision": "eb0c14f751f3ce0489b22310d775e316"
  },
  {
    "url": "blog/skepticism/2018/04/index.html",
    "revision": "d1a0d550dd38e0a3a7d9a5d098444e27"
  },
  {
    "url": "blog/skepticism/2018/05/13/astrology/index.html",
    "revision": "f9999b82ae27ce53804e73228205cc21"
  },
  {
    "url": "blog/skepticism/2018/05/13/crystals/index.html",
    "revision": "09b1efb85a7676cecade97600c9319a1"
  },
  {
    "url": "blog/skepticism/2018/05/13/dawkins/index.html",
    "revision": "4ae3729223ae49df82490adfbd7ce51a"
  },
  {
    "url": "blog/skepticism/2018/05/13/index.html",
    "revision": "492145c64bc46fe12a7fd4a1c05eb572"
  },
  {
    "url": "blog/skepticism/2018/05/13/kangen/index.html",
    "revision": "8721a213c8997852f147b5776840edf5"
  },
  {
    "url": "blog/skepticism/2018/05/13/vitamins/index.html",
    "revision": "d3aaf57d5d748fb487aa5d7d39d3c8d4"
  },
  {
    "url": "blog/skepticism/2018/05/27/flat/index.html",
    "revision": "1edaa1af8825dcfadd2e067fc0cba6db"
  },
  {
    "url": "blog/skepticism/2018/05/27/index.html",
    "revision": "9196c7f8c58b8a8c40fe877375c0f10b"
  },
  {
    "url": "blog/skepticism/2018/05/27/kangen/index.html",
    "revision": "93b9fc0f3737fcb0f48abfdb0976116e"
  },
  {
    "url": "blog/skepticism/2018/05/27/ness/index.html",
    "revision": "2410ca23ffc6e39743d4e8959a646bf8"
  },
  {
    "url": "blog/skepticism/2018/05/27/oz/index.html",
    "revision": "702a1ebf8c849bb5ba4010ac4ce701f4"
  },
  {
    "url": "blog/skepticism/2018/05/27/psychic/index.html",
    "revision": "68ab4b81bb6e5afa64555cb4757ba697"
  },
  {
    "url": "blog/skepticism/2018/05/index.html",
    "revision": "ec27fe26698fbb03f8bf6d1a4c6d9b09"
  },
  {
    "url": "blog/skepticism/2018/06/10/astrology/index.html",
    "revision": "8ca489680351bf367c607ff816a0203e"
  },
  {
    "url": "blog/skepticism/2018/06/10/index.html",
    "revision": "0da3b58007387f7c90c1c944964828d2"
  },
  {
    "url": "blog/skepticism/2018/06/10/nhs/index.html",
    "revision": "0be257b430b0ffd433a29b56b19cdd98"
  },
  {
    "url": "blog/skepticism/2018/06/10/shakti/index.html",
    "revision": "fd811a3059543d1e3ca475c20c1da5b9"
  },
  {
    "url": "blog/skepticism/2018/06/10/weetbix/index.html",
    "revision": "097d52f8c6e10b965eacbffec813b0b6"
  },
  {
    "url": "blog/skepticism/2018/06/24/blasphemy/index.html",
    "revision": "d94ff22185ad27b99fb92f51cef59706"
  },
  {
    "url": "blog/skepticism/2018/06/24/cannabis/index.html",
    "revision": "b1e7be85e0a454724ba6abd4cbe88132"
  },
  {
    "url": "blog/skepticism/2018/06/24/hotdog/index.html",
    "revision": "268d40f30d711fb17235b850c7f4c8f1"
  },
  {
    "url": "blog/skepticism/2018/06/24/index.html",
    "revision": "1a044ae89c9602ff3109e1127ed5ccd3"
  },
  {
    "url": "blog/skepticism/2018/06/24/led/index.html",
    "revision": "9caf1f4a2652b5757cbaee3fec6c577c"
  },
  {
    "url": "blog/skepticism/2018/06/index.html",
    "revision": "d186e9eb95b30e2b19461bdab20cd344"
  },
  {
    "url": "blog/skepticism/2018/07/08/bullet/index.html",
    "revision": "320a62894df0a0a3aba1b8ba37ce6001"
  },
  {
    "url": "blog/skepticism/2018/07/08/chiros/index.html",
    "revision": "f4590cb99ef85f6e965141f7e0b9ff93"
  },
  {
    "url": "blog/skepticism/2018/07/08/hiv/index.html",
    "revision": "1d068299a7c870b99a728f06741e16c9"
  },
  {
    "url": "blog/skepticism/2018/07/08/hrv/index.html",
    "revision": "0306f2f106ea978016b189c6df81f530"
  },
  {
    "url": "blog/skepticism/2018/07/08/index.html",
    "revision": "d15d6b112868323fc9c3263143894295"
  },
  {
    "url": "blog/skepticism/2018/07/22/cancer/index.html",
    "revision": "c58ef5563969f0047e177a6dcb38c29e"
  },
  {
    "url": "blog/skepticism/2018/07/22/index.html",
    "revision": "5f8b24f65fd1c8615eb743a334862f52"
  },
  {
    "url": "blog/skepticism/2018/07/22/resurrection/index.html",
    "revision": "1f044bcc11b7f2c2baee7713408fcad6"
  },
  {
    "url": "blog/skepticism/2018/07/22/talc/index.html",
    "revision": "409fefd052392da28bb4b4aa16e900de"
  },
  {
    "url": "blog/skepticism/2018/07/22/visas/index.html",
    "revision": "46f2ab5e294d3f68e2a1bae91a55d7c1"
  },
  {
    "url": "blog/skepticism/2018/07/index.html",
    "revision": "2668059ec61a5e2f42d14ef08f964acc"
  },
  {
    "url": "blog/skepticism/2018/08/05/conf/index.html",
    "revision": "d07d0f84100d920eb29e651642a93174"
  },
  {
    "url": "blog/skepticism/2018/08/05/index.html",
    "revision": "a68af56df1d9e6774baf69986f2cf0e2"
  },
  {
    "url": "blog/skepticism/2018/08/05/qanon/index.html",
    "revision": "5a62b5a8674142044745f8736772895d"
  },
  {
    "url": "blog/skepticism/2018/08/19/index.html",
    "revision": "3384d2e4dcd23fa0eddcc80972a4b3f5"
  },
  {
    "url": "blog/skepticism/2018/08/19/jw/index.html",
    "revision": "427ea84a9e123334c3918670f173365c"
  },
  {
    "url": "blog/skepticism/2018/08/index.html",
    "revision": "43ee4fac069206adb5a433ae0229cc33"
  },
  {
    "url": "blog/skepticism/2018/09/02/allergy/index.html",
    "revision": "cf29071f772ddec4ee867a382573157c"
  },
  {
    "url": "blog/skepticism/2018/09/02/catholic/index.html",
    "revision": "5accc80342c1d58ab17cfa8ec087f58e"
  },
  {
    "url": "blog/skepticism/2018/09/02/index.html",
    "revision": "d42cd155d57cddeaf38d25b558b08483"
  },
  {
    "url": "blog/skepticism/2018/09/02/jw/index.html",
    "revision": "e418cb38b5c57cd3a689da9c678413a9"
  },
  {
    "url": "blog/skepticism/2018/09/02/sen/index.html",
    "revision": "5c0796c677a42a10988f977cea4b223f"
  },
  {
    "url": "blog/skepticism/2018/09/16/1080/index.html",
    "revision": "7041aabe25454e2c9d9991de4b51f0cc"
  },
  {
    "url": "blog/skepticism/2018/09/16/church/index.html",
    "revision": "befadbba50b8b7a8eada7dc614a9d5d3"
  },
  {
    "url": "blog/skepticism/2018/09/16/index.html",
    "revision": "f2876a0f70286d85f42a581ed28cbd78"
  },
  {
    "url": "blog/skepticism/2018/09/16/jones/index.html",
    "revision": "d003e1ebc790548c919a79aa0bdbfa53"
  },
  {
    "url": "blog/skepticism/2018/09/16/scammers/index.html",
    "revision": "7ee174f947215ee668c658255e1775d5"
  },
  {
    "url": "blog/skepticism/2018/09/30/index.html",
    "revision": "7b24f01596ddce4e39a8f50b1b922a29"
  },
  {
    "url": "blog/skepticism/2018/09/30/jw/index.html",
    "revision": "df4a37dc19bbcef5fb24341c34226f72"
  },
  {
    "url": "blog/skepticism/2018/09/30/oto/index.html",
    "revision": "162e4f43fdaf7cf3840f010294af204a"
  },
  {
    "url": "blog/skepticism/2018/09/30/who/index.html",
    "revision": "45e85a4149d6e9049fb73b420e72107b"
  },
  {
    "url": "blog/skepticism/2018/09/index.html",
    "revision": "f3b0238daa3105791df34485c1592169"
  },
  {
    "url": "blog/skepticism/2018/10/14/hacked/index.html",
    "revision": "739ee3b07e2eda1da4daeecf3d467c3e"
  },
  {
    "url": "blog/skepticism/2018/10/14/index.html",
    "revision": "b95f074bf6fa08010e39a9c474b4b104"
  },
  {
    "url": "blog/skepticism/2018/10/14/kangen/index.html",
    "revision": "08b306f4102a13cd29333eafece3708c"
  },
  {
    "url": "blog/skepticism/2018/10/14/pakistan/index.html",
    "revision": "de949564d3d364bca862a27c6960d770"
  },
  {
    "url": "blog/skepticism/2018/10/14/sarah/index.html",
    "revision": "742705d975ae945e3e64ff2756d617fc"
  },
  {
    "url": "blog/skepticism/2018/10/28/blasphemy/index.html",
    "revision": "5627b64d59f09df7df3d64cd65e17781"
  },
  {
    "url": "blog/skepticism/2018/10/28/hrv/index.html",
    "revision": "0214b43bd1690314fd8f8c1ebd7e36dc"
  },
  {
    "url": "blog/skepticism/2018/10/28/index.html",
    "revision": "5c251d75f877eada74a8b57c54716cd8"
  },
  {
    "url": "blog/skepticism/2018/10/28/jesus/index.html",
    "revision": "ea26cb3c238e97d724930daabdcf7974"
  },
  {
    "url": "blog/skepticism/2018/10/28/natural/index.html",
    "revision": "70e71fad30775bd91f777274d59f16b6"
  },
  {
    "url": "blog/skepticism/2018/10/index.html",
    "revision": "d16b65b068342f2012fbe5ae1dd0ad6a"
  },
  {
    "url": "blog/skepticism/2018/11/04/bibi/index.html",
    "revision": "bf30704ab754b1c2bbf7144e80d4fc91"
  },
  {
    "url": "blog/skepticism/2018/11/04/index.html",
    "revision": "9f211b51e1342a7d1c77ca53f2e98d3c"
  },
  {
    "url": "blog/skepticism/2018/11/04/jesus/index.html",
    "revision": "361c433aac3bb088c7dad7f88304da77"
  },
  {
    "url": "blog/skepticism/2018/11/04/obdii/index.html",
    "revision": "026d7385ffd077ac2c699d41c524c509"
  },
  {
    "url": "blog/skepticism/2018/11/04/sleepdrops/index.html",
    "revision": "c7a59bac0ebc589238730b7bb60b5b9d"
  },
  {
    "url": "blog/skepticism/2018/11/index.html",
    "revision": "978b20a6ed93889e54c7a53bf4f6c102"
  },
  {
    "url": "blog/skepticism/2018/12/02/ark/index.html",
    "revision": "dd525926e17a5efc84209e95828725ca"
  },
  {
    "url": "blog/skepticism/2018/12/02/green/index.html",
    "revision": "0d032c80b5a9afe5fb1aef98c47fcb8f"
  },
  {
    "url": "blog/skepticism/2018/12/02/index.html",
    "revision": "a17c8919e1958bd7bd13d439d3e53223"
  },
  {
    "url": "blog/skepticism/2018/12/02/ri/index.html",
    "revision": "c51e3394d24ef61ca2805504d5deab05"
  },
  {
    "url": "blog/skepticism/2018/12/16/blasphemy/index.html",
    "revision": "0b5798b5b5c99a70441e319664f38019"
  },
  {
    "url": "blog/skepticism/2018/12/16/index.html",
    "revision": "602a7ead12eb0baf18886a598315a163"
  },
  {
    "url": "blog/skepticism/2018/12/16/sleepdrops/index.html",
    "revision": "38890d28b633bb195ab3ab3b77929a41"
  },
  {
    "url": "blog/skepticism/2018/12/16/tekiri/index.html",
    "revision": "caea1ff5774092dcbd25a182a8220fbf"
  },
  {
    "url": "blog/skepticism/2018/12/index.html",
    "revision": "049b7628c08104edbf92365aa90a58ee"
  },
  {
    "url": "blog/skepticism/2018/index.html",
    "revision": "dde18ad7fb32425a739aefa82ebe9e8b"
  },
  {
    "url": "blog/skepticism/index.html",
    "revision": "44aca35b1825ab3f5a5f73aad17730af"
  },
  {
    "url": "blog/tag/index.html",
    "revision": "faeaeefdc1373cbf7a931ddc7355198a"
  },
  {
    "url": "contact/index.html",
    "revision": "820151f2e90b1ababc7c40f0bd5228e9"
  },
  {
    "url": "cv/cover/index.html",
    "revision": "ba81c87a7d2d86fc46d0131740da3724"
  },
  {
    "url": "cv/full.html",
    "revision": "a046f32bbd18cb6764995f0263704458"
  },
  {
    "url": "cv/full/index.html",
    "revision": "cb0c63656e6ba4989e8160de835ae378"
  },
  {
    "url": "cv/index.html",
    "revision": "805b8ff9856f044d8f08ee8b8a1502eb"
  },
  {
    "url": "cv/short.html",
    "revision": "69b688bf47f606f8cc0ec53e0be12551"
  },
  {
    "url": "googlee25d0c06da891164.html",
    "revision": "0defe75660212f417b90c5affcd03380"
  },
  {
    "url": "index.html",
    "revision": "8e755b798353fec4371c23b26f48503d"
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
    "revision": "4e9f71255c97d412fea3b1cca342c35b"
  },
  {
    "url": "media/me/index.html",
    "revision": "119c2c08a7435f2d8cb2a1128bae5e49"
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
    "revision": "6979ee4d1dccb5314d71395bad339e60"
  },
  {
    "url": "status/index.html",
    "revision": "0143374ee8a4ee4fe4c283ef5980b4f2"
  },
  {
    "url": "status/steam/index.html",
    "revision": "4e5bb5d03dc10ddd9078b6f6825bc16d"
  },
  {
    "url": "status/twitter/index.html",
    "revision": "99dbba99072e28dfd14fc2f66ab6fd15"
  },
  {
    "url": "status/wikipedia/index.html",
    "revision": "7e814b7be53b1de4781f13e84e046dda"
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
