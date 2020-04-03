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
    "url": "assets/css/0.styles.css",
    "revision": "fdd6c6b8003f63fcf45c56afa8bbd0b9"
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
    "revision": "6dc632117b82ebbb32396a3987e9d816"
  },
  {
    "url": "assets/js/10.js",
    "revision": "52743a3a73a96857184fc3711a7a990e"
  },
  {
    "url": "assets/js/100.js",
    "revision": "04b035c071ba3ba00129b456dda15cce"
  },
  {
    "url": "assets/js/101.js",
    "revision": "cce4d955a405056fc4a8957836fbbf18"
  },
  {
    "url": "assets/js/102.js",
    "revision": "4c85599107f8ba6c04f13a217c338a95"
  },
  {
    "url": "assets/js/103.js",
    "revision": "73475b94542226859285fb90e58630be"
  },
  {
    "url": "assets/js/104.js",
    "revision": "ff105b81fb761e3db234e8bfa3b324fb"
  },
  {
    "url": "assets/js/105.js",
    "revision": "11348354682378cf4e343a1c2d1eab80"
  },
  {
    "url": "assets/js/106.js",
    "revision": "35afbc70319fd1b4d4415f75daed183a"
  },
  {
    "url": "assets/js/107.js",
    "revision": "44bd9bbb35d2b998a8d041f0058f5cb2"
  },
  {
    "url": "assets/js/108.js",
    "revision": "99f561dcd85cff1fe3b379fc84870c38"
  },
  {
    "url": "assets/js/109.js",
    "revision": "0c8529eb4c699cfb1aeb10049591ed3d"
  },
  {
    "url": "assets/js/11.js",
    "revision": "2b620043538d544f9db4c42266627deb"
  },
  {
    "url": "assets/js/110.js",
    "revision": "96a850847382df35ee31797a1fa2199f"
  },
  {
    "url": "assets/js/111.js",
    "revision": "fa2b9638970abf695e9ff784cc59ff31"
  },
  {
    "url": "assets/js/112.js",
    "revision": "6999bd1429fe454b5fff04c7bcda00f8"
  },
  {
    "url": "assets/js/113.js",
    "revision": "f975b4d0a0bf123c93ce979b992750f7"
  },
  {
    "url": "assets/js/114.js",
    "revision": "528c0d7810fbfacf42f8441d73d3175c"
  },
  {
    "url": "assets/js/115.js",
    "revision": "2f61384ac7ec3700095941e746b59068"
  },
  {
    "url": "assets/js/116.js",
    "revision": "5363691baf2b3a3e1e17f60abaaa691e"
  },
  {
    "url": "assets/js/117.js",
    "revision": "04b29697e51ff756787c211ca95aab59"
  },
  {
    "url": "assets/js/118.js",
    "revision": "f8f855419a71d1ad159be0d4cef77d99"
  },
  {
    "url": "assets/js/119.js",
    "revision": "066dd3fbbeb3ba3486576d912eef853c"
  },
  {
    "url": "assets/js/12.js",
    "revision": "028e1a6ffd665323cddc4f9d40b988c7"
  },
  {
    "url": "assets/js/120.js",
    "revision": "8bb5ee20a5d80454b4d35f00d0072e55"
  },
  {
    "url": "assets/js/121.js",
    "revision": "679fc7c086474d810fa9516f6601c732"
  },
  {
    "url": "assets/js/122.js",
    "revision": "b5db0d4dec268b3aab9a9c328d847ff4"
  },
  {
    "url": "assets/js/123.js",
    "revision": "3f63a05599f758464736b66493b7ef28"
  },
  {
    "url": "assets/js/124.js",
    "revision": "867d612cbe524a454212b54d1ab66316"
  },
  {
    "url": "assets/js/125.js",
    "revision": "fef8c524f0f430e7ddfed20395e22a35"
  },
  {
    "url": "assets/js/126.js",
    "revision": "face6b1440090bc7cdce715c3a87879a"
  },
  {
    "url": "assets/js/127.js",
    "revision": "87c1a9f319365e15ac37a481e5196e50"
  },
  {
    "url": "assets/js/128.js",
    "revision": "7b310a187646486701dcca3b6cfa6053"
  },
  {
    "url": "assets/js/129.js",
    "revision": "d309c88702f9509ba388f71cde59c86b"
  },
  {
    "url": "assets/js/13.js",
    "revision": "2930879a06251e50e7775e424f664107"
  },
  {
    "url": "assets/js/130.js",
    "revision": "0dbff08442aeda970a258580a057135c"
  },
  {
    "url": "assets/js/131.js",
    "revision": "966260cf94a762aad7084ff53f73a862"
  },
  {
    "url": "assets/js/132.js",
    "revision": "6fa852afbc9917c5d2f0deefce12c46e"
  },
  {
    "url": "assets/js/133.js",
    "revision": "36ff96eb273971407fa8629d74bbb0aa"
  },
  {
    "url": "assets/js/134.js",
    "revision": "4788a0808e1cdd79b43f82a262c1a80d"
  },
  {
    "url": "assets/js/135.js",
    "revision": "c611f16a03ada7f9c65a7f9eeb5a8410"
  },
  {
    "url": "assets/js/136.js",
    "revision": "13200b525d73a85d11bc90a9dfc87d39"
  },
  {
    "url": "assets/js/137.js",
    "revision": "6eb0f688fff718ecd1f9f989be08b1d9"
  },
  {
    "url": "assets/js/138.js",
    "revision": "7547b945381c9e0b4c513978a17a61fd"
  },
  {
    "url": "assets/js/139.js",
    "revision": "ca19bd8013963db0fcb7b51cfc0aba0c"
  },
  {
    "url": "assets/js/14.js",
    "revision": "d2e549292baebf70a939fff3c3355214"
  },
  {
    "url": "assets/js/140.js",
    "revision": "a108613bace8c75c3558bc2bf2959e63"
  },
  {
    "url": "assets/js/141.js",
    "revision": "0edf0977ab034e6c22e56029ab30ac65"
  },
  {
    "url": "assets/js/142.js",
    "revision": "e34dfc1786ccbbc83b86b8effd4ba1fe"
  },
  {
    "url": "assets/js/143.js",
    "revision": "592e049edd5b7c64bc3d974b25358c6a"
  },
  {
    "url": "assets/js/144.js",
    "revision": "7891469737308b10775cdd63f1b643e3"
  },
  {
    "url": "assets/js/145.js",
    "revision": "cb758c324ba5ae730cadce1e60935669"
  },
  {
    "url": "assets/js/146.js",
    "revision": "eda8da156ce20755b045e7bf1b295805"
  },
  {
    "url": "assets/js/147.js",
    "revision": "e4f8a27e9a54fa8820f35405e39c1c2c"
  },
  {
    "url": "assets/js/148.js",
    "revision": "8b2bc26eb5bbbeccc1e516a2f48d8d6f"
  },
  {
    "url": "assets/js/149.js",
    "revision": "94f0b156dc505892086be5f6f54293da"
  },
  {
    "url": "assets/js/15.js",
    "revision": "edaa289464220048df920b3a597b5063"
  },
  {
    "url": "assets/js/150.js",
    "revision": "811d507d17f1346ea934089d13409979"
  },
  {
    "url": "assets/js/151.js",
    "revision": "ba86366fa95ab2e30b6d1aa41b21c5b9"
  },
  {
    "url": "assets/js/152.js",
    "revision": "22706611a68fad25b8e7eb032d172cb8"
  },
  {
    "url": "assets/js/153.js",
    "revision": "b0c9256855575efb29a18d8ffe7cad83"
  },
  {
    "url": "assets/js/154.js",
    "revision": "f4923cf16beb43da2ecb1d4489c6391c"
  },
  {
    "url": "assets/js/155.js",
    "revision": "17d27df06f046743335c61b202aa2f0c"
  },
  {
    "url": "assets/js/156.js",
    "revision": "cebfd5da8fcb2e16cd29f6f8dda627bd"
  },
  {
    "url": "assets/js/157.js",
    "revision": "f9af59f81bc795b17428ba97c2d58eb8"
  },
  {
    "url": "assets/js/158.js",
    "revision": "62e3905185aecf06bb4e9e8b94dea860"
  },
  {
    "url": "assets/js/159.js",
    "revision": "5b26aca2a8564f272e164e546716227c"
  },
  {
    "url": "assets/js/16.js",
    "revision": "628c910666092119c9dfc2bf31c4e914"
  },
  {
    "url": "assets/js/160.js",
    "revision": "3e0af1b01b27d1609fe82925b02e0724"
  },
  {
    "url": "assets/js/161.js",
    "revision": "b5dfddbbc3eaa445983bacff5ab1264a"
  },
  {
    "url": "assets/js/162.js",
    "revision": "1747a5220d654daf3a7a6bfb0c6fb5a5"
  },
  {
    "url": "assets/js/163.js",
    "revision": "3ea85f9ab891fb6b8d29b9f484462905"
  },
  {
    "url": "assets/js/164.js",
    "revision": "35ee1c6dc0d31543b30646e849f8ebe7"
  },
  {
    "url": "assets/js/165.js",
    "revision": "3936eca5f6ca5df21d9dc5d80040f371"
  },
  {
    "url": "assets/js/166.js",
    "revision": "52829610f2b09700cdbf62234fc8b928"
  },
  {
    "url": "assets/js/167.js",
    "revision": "ccdc7c3035e41f5ea114be509d1f6a9b"
  },
  {
    "url": "assets/js/168.js",
    "revision": "5f864f8e26b8d2a7415fe0b9066c08f7"
  },
  {
    "url": "assets/js/169.js",
    "revision": "62098d9f0706b5cad739b05a5f9f52ad"
  },
  {
    "url": "assets/js/17.js",
    "revision": "c5cfe7b6041dc8f895f86d4013b899d6"
  },
  {
    "url": "assets/js/170.js",
    "revision": "2a2fb2ec09ee6873ff01612c580c14ef"
  },
  {
    "url": "assets/js/171.js",
    "revision": "729ca0d8fd457cdf169ea1aa9f89e621"
  },
  {
    "url": "assets/js/172.js",
    "revision": "16ec7fa00e937d8ba33f8cbcf878698b"
  },
  {
    "url": "assets/js/173.js",
    "revision": "fed99e28236f4ece6702e78d4607770d"
  },
  {
    "url": "assets/js/174.js",
    "revision": "53ea77b228139944bc4b771e3a72d72c"
  },
  {
    "url": "assets/js/175.js",
    "revision": "c81c9c96478e85e5636b8b9019659a34"
  },
  {
    "url": "assets/js/176.js",
    "revision": "37fe6f9db42524d90e0b0d780084c062"
  },
  {
    "url": "assets/js/177.js",
    "revision": "ab6943c241f5f6fed5072c82707ff056"
  },
  {
    "url": "assets/js/178.js",
    "revision": "5c12f2d2465656524fea03386ff2ab14"
  },
  {
    "url": "assets/js/179.js",
    "revision": "8949caaae8ca115aa92d5e4ea87e7b4a"
  },
  {
    "url": "assets/js/18.js",
    "revision": "bcc4aa628b8aa41e68fb0fa37c795813"
  },
  {
    "url": "assets/js/180.js",
    "revision": "82f5aecf97d1f0685b7028dbcac147bd"
  },
  {
    "url": "assets/js/181.js",
    "revision": "2e7d833a34a024d6cf6d4ed8878afe08"
  },
  {
    "url": "assets/js/182.js",
    "revision": "14fd318981c6d1731fce0484e4d68d1d"
  },
  {
    "url": "assets/js/183.js",
    "revision": "eb7028726d6566525e29782af9552a6d"
  },
  {
    "url": "assets/js/184.js",
    "revision": "8c6b1c26ca29c5469b369e28480805f9"
  },
  {
    "url": "assets/js/185.js",
    "revision": "6d2d23aaaee554f62a2292670b743e13"
  },
  {
    "url": "assets/js/186.js",
    "revision": "0e7418875f56dd8a14638ce83a69b945"
  },
  {
    "url": "assets/js/187.js",
    "revision": "500b28ab2b85e0d18197d2ec7fbe4aa2"
  },
  {
    "url": "assets/js/188.js",
    "revision": "1da8b75a2bf429ecbf6371c63394cde0"
  },
  {
    "url": "assets/js/189.js",
    "revision": "875c202c77c128010785801a79fcc707"
  },
  {
    "url": "assets/js/19.js",
    "revision": "dc08429bc8b03ad48970b8eb7213d8bc"
  },
  {
    "url": "assets/js/190.js",
    "revision": "fc492c77cd8fa35739425f1c1540f719"
  },
  {
    "url": "assets/js/191.js",
    "revision": "7759f27199431baaa5d78b8c3691d20e"
  },
  {
    "url": "assets/js/192.js",
    "revision": "9ee53694c7014931f4ca1822f96896b7"
  },
  {
    "url": "assets/js/193.js",
    "revision": "2dbadf4ba01e9b7315ab4ac586bcf92f"
  },
  {
    "url": "assets/js/194.js",
    "revision": "e196508f53da24c6259f52e7d0005b5d"
  },
  {
    "url": "assets/js/195.js",
    "revision": "9df147cc28ef1a81651eb7078305fdf0"
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
    "revision": "295e06378155d2befbaa946e7d79ea6e"
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
    "revision": "589bd2e3d29a0b67313e336ab670507e"
  },
  {
    "url": "assets/js/208.js",
    "revision": "1087f6659db89cd1b1c2c92ebfe387cb"
  },
  {
    "url": "assets/js/209.js",
    "revision": "e16c5a0b1a9f08800ff4944a115bd0cd"
  },
  {
    "url": "assets/js/21.js",
    "revision": "99d181aa240cc333cfd8c072188fd9a4"
  },
  {
    "url": "assets/js/210.js",
    "revision": "45c0decef5b430090d9890009b1b7280"
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
    "revision": "927a2d5180946f54ef31d8d2dd85f4d3"
  },
  {
    "url": "assets/js/218.js",
    "revision": "815d399e78160ec261ffbf76a9bf7a9b"
  },
  {
    "url": "assets/js/219.js",
    "revision": "2c1fe0fd3339aeab9011c1d68e73e304"
  },
  {
    "url": "assets/js/22.js",
    "revision": "5f9303c13bb0b9f3ce2224afc3b0db74"
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
    "revision": "60b4e8384dbafa3b78e9949206cb8b71"
  },
  {
    "url": "assets/js/228.js",
    "revision": "386085e11ea15a2ba08b62d08e49201b"
  },
  {
    "url": "assets/js/229.js",
    "revision": "d175c75c1b59cddd80cb87fb79761817"
  },
  {
    "url": "assets/js/23.js",
    "revision": "c7c820be2874b7ebd90c09ff04da2bd8"
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
    "revision": "0dae807c76797adf4942501c74377519"
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
    "revision": "c166606aa2ead90add93651f7765d3d0"
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
    "revision": "f20b1d11984a805c19d500988db22387"
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
    "revision": "9171ec3cd4ca2c5d1e6f2cd34fc8791f"
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
    "revision": "2550115e4e2cdc4130f47d0802c6b326"
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
    "revision": "347ad49ff3de3c12c3e945e7b15a5787"
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
    "revision": "4e83983bffa3e6b985d37b46ed59df25"
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
    "revision": "5e0c883536b0a1554bb89be77f2904f4"
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
    "revision": "fe74e9ac8f420896a4ffbbbb3642fbc2"
  },
  {
    "url": "assets/js/319.js",
    "revision": "e8cdb06b1289cfea4ecd51916f4e4013"
  },
  {
    "url": "assets/js/32.js",
    "revision": "fb55bf09219707243fedd1b5833b11d2"
  },
  {
    "url": "assets/js/320.js",
    "revision": "3c9093d778bcc2c4dda1e61e0b1953a7"
  },
  {
    "url": "assets/js/321.js",
    "revision": "c8e77f0ab287eb4d119b8cfded4ee4f1"
  },
  {
    "url": "assets/js/322.js",
    "revision": "9f668cde6ca5379628e5f759b95e48b5"
  },
  {
    "url": "assets/js/323.js",
    "revision": "e0f45cb41dbacac7e77fd3add07fcbe6"
  },
  {
    "url": "assets/js/324.js",
    "revision": "69b26f430e717c35a6923a92ab627a9b"
  },
  {
    "url": "assets/js/325.js",
    "revision": "874f1686ee9173e3b7fba544e2d7ddb4"
  },
  {
    "url": "assets/js/326.js",
    "revision": "ee0ea3d79e00d5746338ef9724313a82"
  },
  {
    "url": "assets/js/327.js",
    "revision": "6d93e627909fc5ef34a3529c0d816700"
  },
  {
    "url": "assets/js/328.js",
    "revision": "ed97c41ed318cac42897c1b26b895121"
  },
  {
    "url": "assets/js/329.js",
    "revision": "bd7588e55f2f14f7326540458f8ea88f"
  },
  {
    "url": "assets/js/33.js",
    "revision": "59cdfff3b02e6193b1cc2ec856d252cd"
  },
  {
    "url": "assets/js/330.js",
    "revision": "e79af53952fb4d837fbaf4d9fef366df"
  },
  {
    "url": "assets/js/331.js",
    "revision": "10607a8c73c1dc9316f8af44022cb8d6"
  },
  {
    "url": "assets/js/332.js",
    "revision": "2f6a7b6a72a39b7a8fe962640e71020c"
  },
  {
    "url": "assets/js/333.js",
    "revision": "8ed3c3d8e5a80fa7a5ae5332244cddb2"
  },
  {
    "url": "assets/js/334.js",
    "revision": "c85be1c10c809c26e3accee8094d92a6"
  },
  {
    "url": "assets/js/335.js",
    "revision": "7328e0c6fe0cb557a8a4438bf8d1d421"
  },
  {
    "url": "assets/js/336.js",
    "revision": "a56c2e8235e6ba2c9da0469c424528dc"
  },
  {
    "url": "assets/js/337.js",
    "revision": "3859e553a23b53096b20074de55f3a6f"
  },
  {
    "url": "assets/js/338.js",
    "revision": "772cd1ed06f0c55c8b2ba6edfaa6fd11"
  },
  {
    "url": "assets/js/339.js",
    "revision": "62d9d55dcce4edb909aab6fd5e8df5e5"
  },
  {
    "url": "assets/js/34.js",
    "revision": "b0a04bb8d96e6529a28ddbb0d3aceac1"
  },
  {
    "url": "assets/js/340.js",
    "revision": "d753a49ee95fcb78d12d08259d8eb3fa"
  },
  {
    "url": "assets/js/341.js",
    "revision": "0b27ee0fc2d5db3c93ada005858a50d0"
  },
  {
    "url": "assets/js/342.js",
    "revision": "6eb843ca5a345d4c46680d46c20e47c8"
  },
  {
    "url": "assets/js/343.js",
    "revision": "b6fc8f6abd08e452b7cf2186b73771f0"
  },
  {
    "url": "assets/js/344.js",
    "revision": "2cb403d5750238f9c0f46a31a3a17950"
  },
  {
    "url": "assets/js/345.js",
    "revision": "18998d2106a7edfc9a61b2304ba0ac3b"
  },
  {
    "url": "assets/js/346.js",
    "revision": "c868e56ae3427480fee51eb4af3e8826"
  },
  {
    "url": "assets/js/347.js",
    "revision": "4637ab48aae068a7086d88c1c7fc7793"
  },
  {
    "url": "assets/js/348.js",
    "revision": "7643076af70c75dff3ad24384debd1d6"
  },
  {
    "url": "assets/js/349.js",
    "revision": "0dcffea9d20faa6274040ac33fd73e3c"
  },
  {
    "url": "assets/js/35.js",
    "revision": "4e74a58deb7ccd2dcfbe57aeb5bdfad8"
  },
  {
    "url": "assets/js/350.js",
    "revision": "d7da62bc1076a00837bb575aea408e3d"
  },
  {
    "url": "assets/js/351.js",
    "revision": "a2f36af0eec3e379171c3f185a8171c8"
  },
  {
    "url": "assets/js/352.js",
    "revision": "74d7449c0c3a93f2f5b236d15fc5a77c"
  },
  {
    "url": "assets/js/353.js",
    "revision": "ec18343f31c6fc3f9732e169449c19e9"
  },
  {
    "url": "assets/js/354.js",
    "revision": "183d55b3a9a1c6c4e5d94d3c85281244"
  },
  {
    "url": "assets/js/355.js",
    "revision": "b1abf60ad58d40680b64ed54d4974806"
  },
  {
    "url": "assets/js/356.js",
    "revision": "0e3f7c13ec80e85a48a62deb7a813791"
  },
  {
    "url": "assets/js/357.js",
    "revision": "e5bf9dc7cc53e1c71be699cbc0124550"
  },
  {
    "url": "assets/js/358.js",
    "revision": "bc4684f92198d3264877168249051632"
  },
  {
    "url": "assets/js/359.js",
    "revision": "12b4327692b4af398e5c0330382a2094"
  },
  {
    "url": "assets/js/36.js",
    "revision": "a80f593dec26cde94641c91e852974c7"
  },
  {
    "url": "assets/js/360.js",
    "revision": "13f688aa57433be8bd0ab257ad163df9"
  },
  {
    "url": "assets/js/361.js",
    "revision": "223c07a7a61f49de90e1bcaab00399b4"
  },
  {
    "url": "assets/js/362.js",
    "revision": "d339c9d06bb9bb952e8625abdae745ca"
  },
  {
    "url": "assets/js/363.js",
    "revision": "6dc2e3d80d57d85ff285ad3ffcdd228a"
  },
  {
    "url": "assets/js/364.js",
    "revision": "47b62e86f18e3887e278b18e70fb5fc7"
  },
  {
    "url": "assets/js/365.js",
    "revision": "db418e66adca2678cf7461d35d44fd10"
  },
  {
    "url": "assets/js/366.js",
    "revision": "63c5f8a7f71ae3ec3861b3206b132c62"
  },
  {
    "url": "assets/js/367.js",
    "revision": "334c061314ce670d408fcd310159230d"
  },
  {
    "url": "assets/js/368.js",
    "revision": "3e38bb0d9ddfa9602c68544adcba8db4"
  },
  {
    "url": "assets/js/369.js",
    "revision": "e98cfbcf813fe3613c8ea2aa091b9dd1"
  },
  {
    "url": "assets/js/37.js",
    "revision": "5a33e23db9185fa4a3f8efe261c08484"
  },
  {
    "url": "assets/js/370.js",
    "revision": "f7f36f1944f6670f5c05195322009f5c"
  },
  {
    "url": "assets/js/371.js",
    "revision": "c296693bc7a40c44db4c725edae37230"
  },
  {
    "url": "assets/js/372.js",
    "revision": "ea5afe573327861ef711a9d4931d0917"
  },
  {
    "url": "assets/js/373.js",
    "revision": "c9c3937ff30cfa884257573654815ac0"
  },
  {
    "url": "assets/js/374.js",
    "revision": "3ba15456038df2ad9ecd343627c13ac6"
  },
  {
    "url": "assets/js/375.js",
    "revision": "d432cb12ff4ab209cb69fc28c81f39cc"
  },
  {
    "url": "assets/js/376.js",
    "revision": "0c899461c920826dbd818a23bf2975ce"
  },
  {
    "url": "assets/js/377.js",
    "revision": "ef2402c8541643b47fd690c82c3ccbca"
  },
  {
    "url": "assets/js/378.js",
    "revision": "1b2fe667e5562bda14325552bd02c5ce"
  },
  {
    "url": "assets/js/379.js",
    "revision": "4d4520a64c0188c00b57bdb7c4cb4e43"
  },
  {
    "url": "assets/js/38.js",
    "revision": "5e41d663ceb9396c9f62065b90327b1d"
  },
  {
    "url": "assets/js/380.js",
    "revision": "a16457fefefd4800f5f9b2396736cca8"
  },
  {
    "url": "assets/js/381.js",
    "revision": "beea02e61156c43d04cab24b7e14852f"
  },
  {
    "url": "assets/js/382.js",
    "revision": "062e2da248a48a5c5422c0a29adfe525"
  },
  {
    "url": "assets/js/383.js",
    "revision": "05dcdc96767dcc5329b419f700a98ef4"
  },
  {
    "url": "assets/js/384.js",
    "revision": "4ef71d6bd9d9eecc1ed38ffbeea6db63"
  },
  {
    "url": "assets/js/385.js",
    "revision": "01816e126a0137fad9c55db3957e627a"
  },
  {
    "url": "assets/js/386.js",
    "revision": "08645acd5e4d0f0a237eac85c94367db"
  },
  {
    "url": "assets/js/387.js",
    "revision": "b9f6f12b3cf34625d362802b45ead928"
  },
  {
    "url": "assets/js/388.js",
    "revision": "a81e8b4f800b183b742bd3764246abf4"
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
    "revision": "9a2bf8cd6938f412330a55d43224e5e6"
  },
  {
    "url": "assets/js/391.js",
    "revision": "ef205a04d03af2adf5816f46aad9343a"
  },
  {
    "url": "assets/js/392.js",
    "revision": "bb1a13bfa50343b844f2ddbeb5e0d46a"
  },
  {
    "url": "assets/js/393.js",
    "revision": "69d9073fbd47f90fcd2c8325c6ac926b"
  },
  {
    "url": "assets/js/394.js",
    "revision": "c196a3a89ea0d985b586219e92b3d692"
  },
  {
    "url": "assets/js/395.js",
    "revision": "fd34fe0c88076c0461928bb68916a67e"
  },
  {
    "url": "assets/js/396.js",
    "revision": "f993067fff73fc7c56d57f9dcefbff39"
  },
  {
    "url": "assets/js/397.js",
    "revision": "920e9dfdeff2aac3eb9f4b5e90bba287"
  },
  {
    "url": "assets/js/398.js",
    "revision": "1c7745a33fd28f52f8a102306f3f8548"
  },
  {
    "url": "assets/js/399.js",
    "revision": "7c04912c852d462d3c128973ea9e2672"
  },
  {
    "url": "assets/js/4.js",
    "revision": "f0865524f91b0e55a61dfac04f686403"
  },
  {
    "url": "assets/js/40.js",
    "revision": "abbeacc3b70dbca1f40bfaeb16697d4f"
  },
  {
    "url": "assets/js/400.js",
    "revision": "c354818d12f0da1a85fb481be069881e"
  },
  {
    "url": "assets/js/401.js",
    "revision": "5b7b6a080a4dcd492aa517e5332dda90"
  },
  {
    "url": "assets/js/402.js",
    "revision": "9c6502be37d6851a987e3c0190c7cf85"
  },
  {
    "url": "assets/js/403.js",
    "revision": "32c56781dc26907cff0c8beafb30a2df"
  },
  {
    "url": "assets/js/404.js",
    "revision": "543272a08defe6427c0cf85b78a2cbc4"
  },
  {
    "url": "assets/js/405.js",
    "revision": "ac0d32c9aff722224cb96ff830464c64"
  },
  {
    "url": "assets/js/406.js",
    "revision": "de69b52275fcd8b1f18fad74a737d496"
  },
  {
    "url": "assets/js/407.js",
    "revision": "7013df1ce6c22e465ed6d972de83897a"
  },
  {
    "url": "assets/js/408.js",
    "revision": "ac4a4a4755d84982ecddc17cefae1662"
  },
  {
    "url": "assets/js/409.js",
    "revision": "c7546fad9d0a652dceac65ef669cbc4b"
  },
  {
    "url": "assets/js/41.js",
    "revision": "3368a3e854eed712fffe585c5b90700f"
  },
  {
    "url": "assets/js/410.js",
    "revision": "e7b704321c9450604658fb3d586473d0"
  },
  {
    "url": "assets/js/411.js",
    "revision": "c4b4a11d4b49a3d0b9740aaf96551f21"
  },
  {
    "url": "assets/js/412.js",
    "revision": "2ea3f5a0326c1fe7075ee846423613fc"
  },
  {
    "url": "assets/js/413.js",
    "revision": "281fd28480a9911b9c03f3da1e86957e"
  },
  {
    "url": "assets/js/414.js",
    "revision": "ae32dbaacf183d4c27663e0fbd96a5d8"
  },
  {
    "url": "assets/js/415.js",
    "revision": "462f68e8007e734b29d9577de52ec5c7"
  },
  {
    "url": "assets/js/416.js",
    "revision": "035784d47ee3f74a5cbe10b9060d4422"
  },
  {
    "url": "assets/js/417.js",
    "revision": "cc5f8f5e8fa507d9f4e04ec19ef73f6d"
  },
  {
    "url": "assets/js/418.js",
    "revision": "e9793f3cb3923db8deea6b9dfe3dcc6f"
  },
  {
    "url": "assets/js/419.js",
    "revision": "65388b6b28147f2fcf73dc113449aa0a"
  },
  {
    "url": "assets/js/42.js",
    "revision": "8349721ee448b472791ad0b7d8a872bc"
  },
  {
    "url": "assets/js/420.js",
    "revision": "5e94dc19830ce35fa1edfb00b698c3ee"
  },
  {
    "url": "assets/js/421.js",
    "revision": "def00335386dd2347c29739398e85e6b"
  },
  {
    "url": "assets/js/422.js",
    "revision": "518e93882304c87c301a3d234240d28a"
  },
  {
    "url": "assets/js/423.js",
    "revision": "d8fa43b66b22a84a50a928ab33110585"
  },
  {
    "url": "assets/js/424.js",
    "revision": "c56a78a0e782593e2d609414f56e52ae"
  },
  {
    "url": "assets/js/425.js",
    "revision": "bdc58ebb9dbf2969d07a0707b057941b"
  },
  {
    "url": "assets/js/426.js",
    "revision": "dbe57438afb441c7c6000630df01d007"
  },
  {
    "url": "assets/js/427.js",
    "revision": "52a4b1c56307b1aa3ecca4db6319efcd"
  },
  {
    "url": "assets/js/428.js",
    "revision": "477abdc0a6e4499d0b301e45fe058997"
  },
  {
    "url": "assets/js/429.js",
    "revision": "41ef0f11a027da0fddc754c939df4ed3"
  },
  {
    "url": "assets/js/43.js",
    "revision": "4f35594b26423dbe87e02323e7248252"
  },
  {
    "url": "assets/js/430.js",
    "revision": "9530add6b7bd3fe980bd0fc25d4d7f80"
  },
  {
    "url": "assets/js/431.js",
    "revision": "469400b4e45b76514b8b1f62d5eace80"
  },
  {
    "url": "assets/js/432.js",
    "revision": "c6de0d61afd2517ae045fdf0f14d582e"
  },
  {
    "url": "assets/js/433.js",
    "revision": "c973184b24842417bdd53a569dd3d69a"
  },
  {
    "url": "assets/js/434.js",
    "revision": "6dda2a4647ecbda2a8c74292585fb37b"
  },
  {
    "url": "assets/js/435.js",
    "revision": "8674dab8336222fcd21b356bbe50c9d6"
  },
  {
    "url": "assets/js/436.js",
    "revision": "d6867b29089e7197e1b85fa8405f3ff0"
  },
  {
    "url": "assets/js/437.js",
    "revision": "b6d1d87b5652bd03e7048ca1c5af9025"
  },
  {
    "url": "assets/js/438.js",
    "revision": "b896caf64a872a3b7f5e76aa64a48b0d"
  },
  {
    "url": "assets/js/439.js",
    "revision": "0ff2a344128b71c4d0f00c189067ae48"
  },
  {
    "url": "assets/js/44.js",
    "revision": "c0ab660a1e6e2d6898846636fb097f8d"
  },
  {
    "url": "assets/js/440.js",
    "revision": "0d19c3c623dbe0555bda52df89ccfad5"
  },
  {
    "url": "assets/js/441.js",
    "revision": "44525f809243c31b0a7af4ae28ebcd78"
  },
  {
    "url": "assets/js/442.js",
    "revision": "86de48309cd636e2413f6e20bbcb9f14"
  },
  {
    "url": "assets/js/443.js",
    "revision": "0f5da51d0c1727c9306102fb997ffcbc"
  },
  {
    "url": "assets/js/444.js",
    "revision": "2b31a59d3719e053c3a145265975ebcc"
  },
  {
    "url": "assets/js/445.js",
    "revision": "379fe1ea94209ea481a684464becc068"
  },
  {
    "url": "assets/js/446.js",
    "revision": "4c985cac3ae735d79498e5726650b6dd"
  },
  {
    "url": "assets/js/447.js",
    "revision": "6f64997306120f5006900c3860db0ecf"
  },
  {
    "url": "assets/js/448.js",
    "revision": "d255f652f01958eefc2fbdbefcca70d0"
  },
  {
    "url": "assets/js/449.js",
    "revision": "eb71f954fa054e77612d194c8b84dbea"
  },
  {
    "url": "assets/js/45.js",
    "revision": "150d2153c677193874a8169f2655c6a4"
  },
  {
    "url": "assets/js/450.js",
    "revision": "a3d3e20901256a84510b955f56594426"
  },
  {
    "url": "assets/js/451.js",
    "revision": "75e45d7859f3a460d5c6853c80ff7a1e"
  },
  {
    "url": "assets/js/452.js",
    "revision": "307d48884aa505bd801634d5084567b0"
  },
  {
    "url": "assets/js/453.js",
    "revision": "7d417c0934354303163be039c00dfcd4"
  },
  {
    "url": "assets/js/454.js",
    "revision": "4b8be9ae3a8f2f49b0db296eb8ea63a1"
  },
  {
    "url": "assets/js/455.js",
    "revision": "7abf544aa3a119b8059f6dccb7a5ff71"
  },
  {
    "url": "assets/js/456.js",
    "revision": "1778a4c2cbbe93b6f36f6d00aa981202"
  },
  {
    "url": "assets/js/457.js",
    "revision": "c3a483fb521badb17b029c8a1bdf2331"
  },
  {
    "url": "assets/js/458.js",
    "revision": "cf2307984282203508b042586203a720"
  },
  {
    "url": "assets/js/459.js",
    "revision": "2e689e8d530a2fb51be9115a9412b84d"
  },
  {
    "url": "assets/js/46.js",
    "revision": "d5c15fe4d3886acc5649a80b576fd5c3"
  },
  {
    "url": "assets/js/460.js",
    "revision": "eeadb7bdf8712367d6a4d9b6512a50f6"
  },
  {
    "url": "assets/js/461.js",
    "revision": "19f12561f9ea3fac94de002e21d719c1"
  },
  {
    "url": "assets/js/462.js",
    "revision": "70ed3e45d212fd72fd5fa996b204587f"
  },
  {
    "url": "assets/js/463.js",
    "revision": "57e4cd71b88e4e93e01b22680e2eb79d"
  },
  {
    "url": "assets/js/464.js",
    "revision": "a70011f0b486b755590051623c15b8e7"
  },
  {
    "url": "assets/js/465.js",
    "revision": "72371c36b440702dd970462a96246371"
  },
  {
    "url": "assets/js/466.js",
    "revision": "1a0af47986d4bd1326f0dc86598b94f3"
  },
  {
    "url": "assets/js/467.js",
    "revision": "0e8e43366de06333d93369e3d2a8afaa"
  },
  {
    "url": "assets/js/468.js",
    "revision": "cd324b57d69afccc70ee8d4e2b43bebb"
  },
  {
    "url": "assets/js/469.js",
    "revision": "37f2f7729561b3046d24c9e1b9d05cce"
  },
  {
    "url": "assets/js/47.js",
    "revision": "66d45927047d9503c5aa615b11657837"
  },
  {
    "url": "assets/js/470.js",
    "revision": "095ab3e9e1c1c08dbe59f7fd1fbca46b"
  },
  {
    "url": "assets/js/471.js",
    "revision": "4ed99e92876e306c4fb48600289dd377"
  },
  {
    "url": "assets/js/472.js",
    "revision": "04c7284ebe14f71ead137b7e78a18cce"
  },
  {
    "url": "assets/js/473.js",
    "revision": "5657389a17f5d7148b618e509651cfa1"
  },
  {
    "url": "assets/js/474.js",
    "revision": "132d5f76f19d8bfa10d61da7f01c6d2f"
  },
  {
    "url": "assets/js/475.js",
    "revision": "8fe270c2374a937490974ef27d6d9283"
  },
  {
    "url": "assets/js/476.js",
    "revision": "07442e422ab00c64103e0c3d08e46c4b"
  },
  {
    "url": "assets/js/477.js",
    "revision": "786b0662302a220919679740f14acf95"
  },
  {
    "url": "assets/js/478.js",
    "revision": "e1d726222e7119062034623f3794872c"
  },
  {
    "url": "assets/js/479.js",
    "revision": "90aa98943f11516bdf998e6f15594bb1"
  },
  {
    "url": "assets/js/48.js",
    "revision": "1bbfb3e2ad0032e45e9777868e221c7b"
  },
  {
    "url": "assets/js/480.js",
    "revision": "b50afde1ce75c50b8a2530b3beb9ca51"
  },
  {
    "url": "assets/js/481.js",
    "revision": "ad886590a8bee7f710e6362e6dbfd32d"
  },
  {
    "url": "assets/js/482.js",
    "revision": "d5589572a0c4c775e19958410a1cd8f0"
  },
  {
    "url": "assets/js/483.js",
    "revision": "2528bff52525229d4a8c95772cc91d7e"
  },
  {
    "url": "assets/js/484.js",
    "revision": "3b8b2a5585eb968c63909a3f89d2da28"
  },
  {
    "url": "assets/js/485.js",
    "revision": "51f292dcc4e2bed1f2352bcc66dc2d70"
  },
  {
    "url": "assets/js/486.js",
    "revision": "1153576b04ee0b3f2fe91dba9f7df0cc"
  },
  {
    "url": "assets/js/487.js",
    "revision": "2768b96d1ea1d141259b792fa06091fa"
  },
  {
    "url": "assets/js/488.js",
    "revision": "170f5909597931eb0bb6aa3a01ed7184"
  },
  {
    "url": "assets/js/489.js",
    "revision": "3f89bf7e4cf386c0f6ad369b12406978"
  },
  {
    "url": "assets/js/49.js",
    "revision": "d30f16480b1ab0a3b5c087933ae8d452"
  },
  {
    "url": "assets/js/490.js",
    "revision": "890d0cf825232dbd487f61e66b8a9685"
  },
  {
    "url": "assets/js/491.js",
    "revision": "9d33090c00876c0649e9a90a751462a4"
  },
  {
    "url": "assets/js/492.js",
    "revision": "ef5c3772a1e8ff6ab90e327b2e8e3c32"
  },
  {
    "url": "assets/js/493.js",
    "revision": "84dbf2fa4a788123a2feed1bd6a1b705"
  },
  {
    "url": "assets/js/494.js",
    "revision": "0abde308d8b3a145cc2b78857d023cc9"
  },
  {
    "url": "assets/js/495.js",
    "revision": "ecc9f84c143b15c151ed8611122e4914"
  },
  {
    "url": "assets/js/496.js",
    "revision": "7fe621329de45f9bd4b5dd43a9cf32d6"
  },
  {
    "url": "assets/js/497.js",
    "revision": "2a96d92c3af600aa11df9ff2c5dce3ea"
  },
  {
    "url": "assets/js/498.js",
    "revision": "3cf85f2512558bd82675b34d31e258bc"
  },
  {
    "url": "assets/js/499.js",
    "revision": "8010d705aaa3550ce3d1da03cc9e2a68"
  },
  {
    "url": "assets/js/50.js",
    "revision": "81a8f4aeef427be53cc07eaf6e9a1fe4"
  },
  {
    "url": "assets/js/500.js",
    "revision": "48f9ec82e9a3456a8cc727026535bd7c"
  },
  {
    "url": "assets/js/501.js",
    "revision": "7cca299e32180d030246b8c6bbbd114f"
  },
  {
    "url": "assets/js/502.js",
    "revision": "58b796abb9aabdccd9e07c0dc319be79"
  },
  {
    "url": "assets/js/503.js",
    "revision": "2ccf05b523a86dd5831001414fe2afed"
  },
  {
    "url": "assets/js/504.js",
    "revision": "f83531e64d103557501008c64731a33e"
  },
  {
    "url": "assets/js/505.js",
    "revision": "8c79c5ef89ff24be0fc17508d8f7ca3b"
  },
  {
    "url": "assets/js/506.js",
    "revision": "776a9afeb4e7ebfef7ea6f7af96fdd7c"
  },
  {
    "url": "assets/js/507.js",
    "revision": "db4fa845065f2b5bf1041793e2310cae"
  },
  {
    "url": "assets/js/508.js",
    "revision": "e82124cf9c6f1aec47f1942b38cdf320"
  },
  {
    "url": "assets/js/509.js",
    "revision": "5936eb110dcd88eabfd645f7e25cd7f2"
  },
  {
    "url": "assets/js/51.js",
    "revision": "680daabf9cb8e2ea5f05cc24bddcff2c"
  },
  {
    "url": "assets/js/510.js",
    "revision": "98b11dbbeb67f7ec0f3300463cb61eca"
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
    "revision": "b6f67bc5f7ff08d144b45b0f3e2427d0"
  },
  {
    "url": "assets/js/514.js",
    "revision": "4a048a6bbd622f95db154877a3eea277"
  },
  {
    "url": "assets/js/515.js",
    "revision": "aefdb89d8dbbb6f7982414d6e71581e1"
  },
  {
    "url": "assets/js/516.js",
    "revision": "842910932d1eb53fcfd6b16fe42c88c4"
  },
  {
    "url": "assets/js/517.js",
    "revision": "a8cbadced1e18ae95df07b8108cc56c2"
  },
  {
    "url": "assets/js/518.js",
    "revision": "f14924fdfea368730fc89ffd1ac82156"
  },
  {
    "url": "assets/js/519.js",
    "revision": "de43495b4e00a4135f3f57a13d52dcac"
  },
  {
    "url": "assets/js/52.js",
    "revision": "97288bf7fdb593c79a2c7e407abedd4d"
  },
  {
    "url": "assets/js/520.js",
    "revision": "ff831033aa875f4a733d313a8cb3c7fd"
  },
  {
    "url": "assets/js/521.js",
    "revision": "199476ef2c982ec0872c569730a3a929"
  },
  {
    "url": "assets/js/522.js",
    "revision": "896e6a27b93c519cbf4d28300f5fb0e5"
  },
  {
    "url": "assets/js/523.js",
    "revision": "a7275391a2310222d9f5630dec8f8ad8"
  },
  {
    "url": "assets/js/524.js",
    "revision": "25c462ab0a54ea8991eeb81ed171c65e"
  },
  {
    "url": "assets/js/525.js",
    "revision": "2d38f75809affcd0a243cdf92bee18c2"
  },
  {
    "url": "assets/js/526.js",
    "revision": "86d481e71f273a482694c17419d74267"
  },
  {
    "url": "assets/js/527.js",
    "revision": "683330abdac36b82a13bac116fa36073"
  },
  {
    "url": "assets/js/528.js",
    "revision": "974a0ccde801b2093e58a48573ce87b6"
  },
  {
    "url": "assets/js/529.js",
    "revision": "bfe71980d7416c003a87c0ff9b6816c8"
  },
  {
    "url": "assets/js/53.js",
    "revision": "e17816e959c1b7e9515740eec12c2dae"
  },
  {
    "url": "assets/js/530.js",
    "revision": "ba27d509464149cf498c562c5c000560"
  },
  {
    "url": "assets/js/531.js",
    "revision": "b17aaa59537db9c888fb19e0ff1d4556"
  },
  {
    "url": "assets/js/532.js",
    "revision": "101c3b57b8d07136a7935f2df6d2dd50"
  },
  {
    "url": "assets/js/533.js",
    "revision": "e57d3b62b08fdb59bc77f1b55daa55f1"
  },
  {
    "url": "assets/js/534.js",
    "revision": "bf66f5fd5b4195f1dec8c18d6a4b5cb2"
  },
  {
    "url": "assets/js/535.js",
    "revision": "586c8d4aa898994c53c8b44b5f969e0d"
  },
  {
    "url": "assets/js/536.js",
    "revision": "f1d6a1d3fb4e4e2941cdab107cd8eef0"
  },
  {
    "url": "assets/js/537.js",
    "revision": "970f2c0765dd616387e7933beaedcc71"
  },
  {
    "url": "assets/js/538.js",
    "revision": "6b039338bd01329230f0229186da0601"
  },
  {
    "url": "assets/js/539.js",
    "revision": "c57feccc0a698bfe46d90b646e69815e"
  },
  {
    "url": "assets/js/54.js",
    "revision": "924fce79ddbfde03fd10e3292a442517"
  },
  {
    "url": "assets/js/540.js",
    "revision": "3193eb8763b1289cb7674a3a6d25455e"
  },
  {
    "url": "assets/js/541.js",
    "revision": "c695f7afd0122a69623a44d188732683"
  },
  {
    "url": "assets/js/542.js",
    "revision": "e37a5fe0d0821be72de918bd59fcd84f"
  },
  {
    "url": "assets/js/543.js",
    "revision": "da567812154a1e4d95e7ae2d49965a97"
  },
  {
    "url": "assets/js/544.js",
    "revision": "d0a757c77a984473646e52283f6b6a37"
  },
  {
    "url": "assets/js/545.js",
    "revision": "263fa5e550faa835a00a386c3f8b2cb4"
  },
  {
    "url": "assets/js/546.js",
    "revision": "6a80a525834c1ba441489c9132a926c8"
  },
  {
    "url": "assets/js/547.js",
    "revision": "e06ab277972993106190d63d0701b306"
  },
  {
    "url": "assets/js/548.js",
    "revision": "4bac69e48f43b64a2aae281121f7bc8b"
  },
  {
    "url": "assets/js/549.js",
    "revision": "f77a15d382687eb533b938ff979a0a67"
  },
  {
    "url": "assets/js/55.js",
    "revision": "fe11d3c5f3a2c7574b7561fcb69ac6c8"
  },
  {
    "url": "assets/js/550.js",
    "revision": "d4e84d957762762bae7d285cc176a1c2"
  },
  {
    "url": "assets/js/551.js",
    "revision": "c4ebbfa1dc2c0c752e9f042fd7fec4ca"
  },
  {
    "url": "assets/js/552.js",
    "revision": "cab9d32840c43c4e98671dc7802c9228"
  },
  {
    "url": "assets/js/553.js",
    "revision": "180f8d6dfd14df6618949201ae6f30bb"
  },
  {
    "url": "assets/js/554.js",
    "revision": "cf604ee13a3e1234ff3fdd49dd83c590"
  },
  {
    "url": "assets/js/555.js",
    "revision": "28c7dc6db820c9acd89046ad2c2c5288"
  },
  {
    "url": "assets/js/556.js",
    "revision": "94fd3a5b5d473d6712c8a6727f5bf30e"
  },
  {
    "url": "assets/js/557.js",
    "revision": "73b593f66b47d5dd34ed509b42120694"
  },
  {
    "url": "assets/js/558.js",
    "revision": "a44cb2ed1aac2bbca694fdada9dd91fa"
  },
  {
    "url": "assets/js/559.js",
    "revision": "dee6093bf592ba1977754343091618e4"
  },
  {
    "url": "assets/js/56.js",
    "revision": "ab4bb90e7b24d635409a1aac46af7217"
  },
  {
    "url": "assets/js/560.js",
    "revision": "350e5b05ee7b7d501be6a0178fa4b183"
  },
  {
    "url": "assets/js/561.js",
    "revision": "891726bf623b42b8d29ff6d7539135fe"
  },
  {
    "url": "assets/js/562.js",
    "revision": "61e02603acc15a0a1a46da48b54f5ac4"
  },
  {
    "url": "assets/js/563.js",
    "revision": "c8395e43739d8a2f5853cbd800a014a8"
  },
  {
    "url": "assets/js/564.js",
    "revision": "a5585df9176f30da0d079d1f2a3f2254"
  },
  {
    "url": "assets/js/565.js",
    "revision": "64af7d4c8f875bae1f08222e6cc9009a"
  },
  {
    "url": "assets/js/566.js",
    "revision": "b9b98d25a0b929de4ef5e9cfebe245a4"
  },
  {
    "url": "assets/js/567.js",
    "revision": "d8d3b67bfa746390e08a8090529ed8cd"
  },
  {
    "url": "assets/js/568.js",
    "revision": "b5e128a72656533a7a6d679c4939e26a"
  },
  {
    "url": "assets/js/569.js",
    "revision": "a152ead426dc03fff9c2fc046c5dad34"
  },
  {
    "url": "assets/js/57.js",
    "revision": "3a46adb5b0f0410e236a2a8173ed1447"
  },
  {
    "url": "assets/js/570.js",
    "revision": "a8d9ee6db490c42856576dc1e4088595"
  },
  {
    "url": "assets/js/571.js",
    "revision": "8fc3057bedbcd56eefd25c9b2e24dfe8"
  },
  {
    "url": "assets/js/572.js",
    "revision": "d9c06531c6fef1eb84f0d873caf71220"
  },
  {
    "url": "assets/js/573.js",
    "revision": "6073739bc795e5e3c302b83aef05ab1d"
  },
  {
    "url": "assets/js/574.js",
    "revision": "6b5977c2754fc420db7e2fdd7398f1dd"
  },
  {
    "url": "assets/js/575.js",
    "revision": "5c1dd8fce525bfcd3c0d581d8157d82c"
  },
  {
    "url": "assets/js/576.js",
    "revision": "c9f131dabb2baf25ae4286b3f3e1daa1"
  },
  {
    "url": "assets/js/577.js",
    "revision": "b9860d449139a11127e1bbc56bf1a484"
  },
  {
    "url": "assets/js/578.js",
    "revision": "6cde002eb77be4fe77321f62deb2e863"
  },
  {
    "url": "assets/js/579.js",
    "revision": "f22598d82b44a6b59877a246d505691c"
  },
  {
    "url": "assets/js/58.js",
    "revision": "6188cc4b84d515114ac3f843a4203366"
  },
  {
    "url": "assets/js/580.js",
    "revision": "f7d0d964cc7bb432272e294e1539c645"
  },
  {
    "url": "assets/js/581.js",
    "revision": "7563086c6a3fb6a1f890a2db5090b4d6"
  },
  {
    "url": "assets/js/582.js",
    "revision": "8fb36ca13e78f72af757cbf8b011dfc2"
  },
  {
    "url": "assets/js/583.js",
    "revision": "d869dd0a0480738027c4a464bd13a13e"
  },
  {
    "url": "assets/js/584.js",
    "revision": "3726eb7b8da6f60b58ae9ae2e558a873"
  },
  {
    "url": "assets/js/585.js",
    "revision": "64196f4fb49713300628d5de52e1c434"
  },
  {
    "url": "assets/js/586.js",
    "revision": "611389d9359b67a92c8a86bb1a5a81c7"
  },
  {
    "url": "assets/js/587.js",
    "revision": "f6be0b590bd98d761b60d05d59a3ef8e"
  },
  {
    "url": "assets/js/588.js",
    "revision": "9a636112f128d4608294523502379284"
  },
  {
    "url": "assets/js/589.js",
    "revision": "11a82d5e3c303a8d333b6bceb3138c1b"
  },
  {
    "url": "assets/js/59.js",
    "revision": "2f403a366bbf6c74c7f4396839d76abe"
  },
  {
    "url": "assets/js/590.js",
    "revision": "5ae6621c5690cd90e9038b7e7b63f8bd"
  },
  {
    "url": "assets/js/591.js",
    "revision": "4899f42410b1b6f7c4cc74d6751cec91"
  },
  {
    "url": "assets/js/592.js",
    "revision": "1c0126633fbfc82e94698a3ad5aafe2a"
  },
  {
    "url": "assets/js/593.js",
    "revision": "dcb878a9fd2619948a20a3c4d05ee70c"
  },
  {
    "url": "assets/js/594.js",
    "revision": "4889a7a5666079e990730e3b1ebabc0f"
  },
  {
    "url": "assets/js/595.js",
    "revision": "142728e34f049bdff37a398a90f6043d"
  },
  {
    "url": "assets/js/596.js",
    "revision": "fda3c3546a7a9224aa08d7b91a5cbf31"
  },
  {
    "url": "assets/js/597.js",
    "revision": "754a467725f453b74747924c62fb09df"
  },
  {
    "url": "assets/js/6.js",
    "revision": "fc343b265e77aaa28ae3661efeb9b791"
  },
  {
    "url": "assets/js/60.js",
    "revision": "5936ed4ceacb4c2e224416bac0c20036"
  },
  {
    "url": "assets/js/61.js",
    "revision": "d57def9b5706e2fa2c204fa21d9b337a"
  },
  {
    "url": "assets/js/62.js",
    "revision": "08ba1c916bb6040cf0c52ef1dd854305"
  },
  {
    "url": "assets/js/63.js",
    "revision": "d41f9d9216ee954463d7b5c6161b509f"
  },
  {
    "url": "assets/js/64.js",
    "revision": "6af056836d14c663c7d0c44172e95e59"
  },
  {
    "url": "assets/js/65.js",
    "revision": "d2a06a9e7964824d36a5895540d45764"
  },
  {
    "url": "assets/js/66.js",
    "revision": "171add317b3017727264ba7534fa07ba"
  },
  {
    "url": "assets/js/67.js",
    "revision": "098b13a2acd7e14605a20bfc02ba5b29"
  },
  {
    "url": "assets/js/68.js",
    "revision": "c408663ac062fa13692a35aedcde40e4"
  },
  {
    "url": "assets/js/69.js",
    "revision": "111bb1260adfa7f9e613a18766e7c187"
  },
  {
    "url": "assets/js/7.js",
    "revision": "d80458510cc95150cb1aacce1eeb6d73"
  },
  {
    "url": "assets/js/70.js",
    "revision": "99ea01264eca522db697e1065b825eb7"
  },
  {
    "url": "assets/js/71.js",
    "revision": "52ed6c8663aa9ba804ca65331b3604c8"
  },
  {
    "url": "assets/js/72.js",
    "revision": "8f74c066986157f71d414328efa0692e"
  },
  {
    "url": "assets/js/73.js",
    "revision": "7546b8adccb6213b6f6a5a7ddd090ad2"
  },
  {
    "url": "assets/js/74.js",
    "revision": "37107e58144ef69b5b6e34e769e54c06"
  },
  {
    "url": "assets/js/75.js",
    "revision": "c3bd2b0da4ba343ff06d9ec0dbcc9486"
  },
  {
    "url": "assets/js/76.js",
    "revision": "6a8a55b5981554288647fa08abf3f325"
  },
  {
    "url": "assets/js/77.js",
    "revision": "11a4c90a35c314f0517135ff4d331682"
  },
  {
    "url": "assets/js/78.js",
    "revision": "7faacf24d6a1870ca32ae28d10325048"
  },
  {
    "url": "assets/js/79.js",
    "revision": "9be0633c4da7599adf1bdfa9de9fdf67"
  },
  {
    "url": "assets/js/8.js",
    "revision": "feaa47fd28cca44d2984ba33f29177ff"
  },
  {
    "url": "assets/js/80.js",
    "revision": "bd6cdc40c7c5a9154667f73519bb0225"
  },
  {
    "url": "assets/js/81.js",
    "revision": "b05e0718f8f2f0c5daa0b7e1fe2b5eb1"
  },
  {
    "url": "assets/js/82.js",
    "revision": "bd2381b2983b7c43afae0885f329e8c8"
  },
  {
    "url": "assets/js/83.js",
    "revision": "24aac0390fa2f833223183ff11c06bf7"
  },
  {
    "url": "assets/js/84.js",
    "revision": "c07a85bc0481fa494012d3b40a02a9b6"
  },
  {
    "url": "assets/js/85.js",
    "revision": "09e947df7e5de19643f4c7aa4f29ca96"
  },
  {
    "url": "assets/js/86.js",
    "revision": "6e5f6f2a3ceb30dac7b404e995e89375"
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
    "revision": "a05e74869ed7ca3b6f49d09d3601a8ba"
  },
  {
    "url": "assets/js/9.js",
    "revision": "c6843790c4e3fd6b149a4a1eca3c9b07"
  },
  {
    "url": "assets/js/90.js",
    "revision": "7dcb62fdf34e1a08b918158862382074"
  },
  {
    "url": "assets/js/91.js",
    "revision": "960c7b36b1b5eeeb91279a82ccf5f407"
  },
  {
    "url": "assets/js/92.js",
    "revision": "44a89b5adf39b011ba55817c21462ce1"
  },
  {
    "url": "assets/js/93.js",
    "revision": "c56b58754c1d71f40a7be83802bc5819"
  },
  {
    "url": "assets/js/94.js",
    "revision": "c99e97af297b38d0a2f5f88195a291b1"
  },
  {
    "url": "assets/js/95.js",
    "revision": "41a202b43f52898765be3ac736813c5b"
  },
  {
    "url": "assets/js/96.js",
    "revision": "46f64467060fb6ac95be6f9183df7780"
  },
  {
    "url": "assets/js/97.js",
    "revision": "10d0c6301dad2d512f3c2e9aa0a4fbd4"
  },
  {
    "url": "assets/js/98.js",
    "revision": "e8eb7564bfe5939d4279c56452f30124"
  },
  {
    "url": "assets/js/99.js",
    "revision": "eb0a42b5f1a45c6a6d827e345551d85e"
  },
  {
    "url": "assets/js/app.js",
    "revision": "d4d31b77f5dcedc3a966e4365ce7f1e8"
  },
  {
    "url": "assets/js/styles.js",
    "revision": "22f22b49cc901aa95826401f7ce0930c"
  },
  {
    "url": "blog/category/index.html",
    "revision": "944f45124780576800ceb28a7930ae50"
  },
  {
    "url": "blog/code/artists/index.html",
    "revision": "7af3dfefc1fc307ad6bdd84812b5e2c4"
  },
  {
    "url": "blog/code/asa.sbh.nz/index.html",
    "revision": "e33e5c37fdd0a81fdfaf132a110a960c"
  },
  {
    "url": "blog/code/decrypt/index.html",
    "revision": "3a5458c8ef155f78e9110700036384e1"
  },
  {
    "url": "blog/code/divider/index.html",
    "revision": "6e6557e0d40e932069ec41fdd18ad052"
  },
  {
    "url": "blog/code/first/index.html",
    "revision": "246d9da0b6615e7c952569e8879c2267"
  },
  {
    "url": "blog/code/fishbarrel/index.html",
    "revision": "fba353826525cf710512cbc4640a1b1a"
  },
  {
    "url": "blog/code/indent/index.html",
    "revision": "db9e98bcc03611bb91abc9119948cb69"
  },
  {
    "url": "blog/code/index.html",
    "revision": "95c374a68660d513b33592fd51b1a3e4"
  },
  {
    "url": "blog/code/ingoa.nz/index.html",
    "revision": "a7018c343232c34eab7f172625b7f0ec"
  },
  {
    "url": "blog/code/nzondemand/index.html",
    "revision": "09b6cff0dfeda012b32ba1d361433228"
  },
  {
    "url": "blog/code/picard/index.html",
    "revision": "e4d7a6520d0b881b671de3d99c067705"
  },
  {
    "url": "blog/code/qr/index.html",
    "revision": "7164b88748e2874679b4cc9a18a71e9f"
  },
  {
    "url": "blog/code/readable/index.html",
    "revision": "396f129651fa7aa6949278e961ed122f"
  },
  {
    "url": "blog/code/tone/index.html",
    "revision": "5d4aa605c987001dae8818de83bd602a"
  },
  {
    "url": "blog/code/war/index.html",
    "revision": "d5eb4d436ae76c8c9e83516a80a5c60c"
  },
  {
    "url": "blog/code/website/index.html",
    "revision": "a78a320cc533ed4bebab4925b64ce2c0"
  },
  {
    "url": "blog/code/website/route/index.html",
    "revision": "326496616b8aa72e7b7e68b1d30e2334"
  },
  {
    "url": "blog/code/website/site/index.html",
    "revision": "68ae264a60ef2f68b14c9cbd2ac64ecd"
  },
  {
    "url": "blog/code/xmltv.co.nz/index.html",
    "revision": "a3cca98ec9ce793e27b3db3b335121ab"
  },
  {
    "url": "blog/howto/index.html",
    "revision": "1bff2c67c876bdaf48f04090a6b649df"
  },
  {
    "url": "blog/howto/intel865/index.html",
    "revision": "259fef0550849171b67b725f1051b1bb"
  },
  {
    "url": "blog/howto/ios/index.html",
    "revision": "df32ea545e6e3ba49c79854bbfad6c50"
  },
  {
    "url": "blog/howto/nexentastor/index.html",
    "revision": "268dace17b05730917847b66e7932cb1"
  },
  {
    "url": "blog/howto/pcloadletter/index.html",
    "revision": "4d3be2cf285b8a95d3448a7111caa418"
  },
  {
    "url": "blog/howto/raid5/index.html",
    "revision": "8c85058cfddb93c6d6f50237480fa462"
  },
  {
    "url": "blog/index.html",
    "revision": "974b69868d4ca53066de4aef7aad75d3"
  },
  {
    "url": "blog/life/anotheryear/index.html",
    "revision": "9ba9a9d0c551f496bee0fb636ea46bd2"
  },
  {
    "url": "blog/life/birthday/index.html",
    "revision": "194890b94711b07cd235d5a2f0bd4bb7"
  },
  {
    "url": "blog/life/blasphemy/index.html",
    "revision": "d915b84dda09fdf0d747e9e7904b3d1e"
  },
  {
    "url": "blog/life/blogger/index.html",
    "revision": "ab2176dd1f8a2aa9f3f89e923c4015a5"
  },
  {
    "url": "blog/life/blurry/index.html",
    "revision": "07406fc3bfb706890fffc04474dee18d"
  },
  {
    "url": "blog/life/busyday/index.html",
    "revision": "c43b76250e1dc616feb1309fcb09995c"
  },
  {
    "url": "blog/life/domain/index.html",
    "revision": "72c3b9c9047fae75a29f24450de096c7"
  },
  {
    "url": "blog/life/exams/index.html",
    "revision": "49629201fbd90df98154c3a039107a66"
  },
  {
    "url": "blog/life/food/index.html",
    "revision": "c60c1bcf25df40ec5d1547f3c1231da8"
  },
  {
    "url": "blog/life/glenview/index.html",
    "revision": "f30ecd1fbabeb41ef26257e2e87b9ce0"
  },
  {
    "url": "blog/life/headlines/index.html",
    "revision": "81af7f7ad7278dcf08145656707ada87"
  },
  {
    "url": "blog/life/index.html",
    "revision": "43fbdc51f8b9d66f0afd174cfc0cc798"
  },
  {
    "url": "blog/life/jws/index.html",
    "revision": "7b5c8863a3fb13d7d60d2c297c9eeabe"
  },
  {
    "url": "blog/life/keyboard/index.html",
    "revision": "128c9e146710f67527f9dd7ba80d6984"
  },
  {
    "url": "blog/life/lpi201/index.html",
    "revision": "59f0cd5c1b45e4833269a5128d31ab2a"
  },
  {
    "url": "blog/life/mashup/index.html",
    "revision": "a5f39c23ac3da775ab829010c154baca"
  },
  {
    "url": "blog/life/motorweb/index.html",
    "revision": "a9afa23abd5963b54c655a2cd581b518"
  },
  {
    "url": "blog/life/nxe/index.html",
    "revision": "d8563116d831f85faf0790d212849c8f"
  },
  {
    "url": "blog/life/plates/index.html",
    "revision": "2ebb2d313217fbeaf0bcbc6e26c2436a"
  },
  {
    "url": "blog/life/queenstown/index.html",
    "revision": "171c49ac2939b186476d378d73cb0458"
  },
  {
    "url": "blog/life/racism/index.html",
    "revision": "a76bc0da7e13b9afb0ecaaf736db31c0"
  },
  {
    "url": "blog/life/roads/index.html",
    "revision": "19121603cdb9786a2727ef02167541ad"
  },
  {
    "url": "blog/life/roots/index.html",
    "revision": "cd2da9abc656f4e50c057bbc0f7115df"
  },
  {
    "url": "blog/life/scare/index.html",
    "revision": "db2cf6640755f63dd07880024fcdce9e"
  },
  {
    "url": "blog/life/scary/index.html",
    "revision": "37c87299e68cdde9160ab82e2c0d5c1a"
  },
  {
    "url": "blog/life/seti/index.html",
    "revision": "67a07da998b3c39d3e14fe6ce11c9574"
  },
  {
    "url": "blog/life/skeptical/index.html",
    "revision": "9e0b9a0fcaf96d50ee241f38b60da168"
  },
  {
    "url": "blog/life/skepticzone/index.html",
    "revision": "47ab147f375c779d11853da1175b2dc3"
  },
  {
    "url": "blog/life/spam/index.html",
    "revision": "df61e350a3ba7e29e889835a44aea0a1"
  },
  {
    "url": "blog/life/trademe/index.html",
    "revision": "b01e88f001f83314957c1e8f3dedd580"
  },
  {
    "url": "blog/life/unforeseen/index.html",
    "revision": "450e3c51d8d0d1e5f60eb2cee955c4e0"
  },
  {
    "url": "blog/life/wobbly/index.html",
    "revision": "f1f4288a69811187a6382f240d276b8d"
  },
  {
    "url": "blog/projects/ahs/index.html",
    "revision": "68e461ad4a76c754638a22b337142516"
  },
  {
    "url": "blog/projects/airbag/index.html",
    "revision": "ace83a77be61a2f6435fbd6bbceacb58"
  },
  {
    "url": "blog/projects/ambilight/index.html",
    "revision": "542960f5b63388f7b9871389e9a04be1"
  },
  {
    "url": "blog/projects/automation/index.html",
    "revision": "d7bbe9bd52779287b5aba9926103146d"
  },
  {
    "url": "blog/projects/eyes/index.html",
    "revision": "667cf4ad7b29b25859c78178a0406f7d"
  },
  {
    "url": "blog/projects/glitch/index.html",
    "revision": "bd0e873629af7d7ead6a2d42b43f44de"
  },
  {
    "url": "blog/projects/hotel/index.html",
    "revision": "c20950a82362b9f0db9497a19b052e35"
  },
  {
    "url": "blog/projects/index.html",
    "revision": "c69fac4a9dc08351cd871eb43f85a340"
  },
  {
    "url": "blog/projects/it100/index.html",
    "revision": "30aafd2abc54fdbef7de9c0273bc7a01"
  },
  {
    "url": "blog/projects/microscope/index.html",
    "revision": "29f551f83cc999f7abba17a62e5cc4f6"
  },
  {
    "url": "blog/projects/mirror/index.html",
    "revision": "a8d04b760da3af6b0a54d4a35f950b76"
  },
  {
    "url": "blog/projects/picture/index.html",
    "revision": "0d000780f13171af1689a59d35336985"
  },
  {
    "url": "blog/projects/pizza/index.html",
    "revision": "fb81e32eb1147419194e884d23188e16"
  },
  {
    "url": "blog/projects/podcast/index.html",
    "revision": "066c539c59f34cce87651c555222fdf9"
  },
  {
    "url": "blog/projects/reflow/index.html",
    "revision": "5b16b8cadfd24477487bdc6397404482"
  },
  {
    "url": "blog/projects/sandbox/index.html",
    "revision": "8c88a1e4908b93645faec5e2d638337f"
  },
  {
    "url": "blog/projects/screens/index.html",
    "revision": "d0d1e795c31cee2d2f55b2680e496df0"
  },
  {
    "url": "blog/projects/sky/index.html",
    "revision": "7b0fd2ad224d64910b9116862ede5e3e"
  },
  {
    "url": "blog/projects/starwars/index.html",
    "revision": "3e193a832498c942c5a80aa5de045bed"
  },
  {
    "url": "blog/projects/xbox/index.html",
    "revision": "f9703c9b46f928ecc229859c7cd639e2"
  },
  {
    "url": "blog/random/addresses/index.html",
    "revision": "940ad62a4a5dab65dbf7df5aa68a3743"
  },
  {
    "url": "blog/random/alphabet/index.html",
    "revision": "6d5680d4d0c5fe30ba44cb242f8046cd"
  },
  {
    "url": "blog/random/astrology/index.html",
    "revision": "f563db5045e193ca27788d3b7e3570db"
  },
  {
    "url": "blog/random/chicken/index.html",
    "revision": "efe9bd12f3da00ef936056649455430f"
  },
  {
    "url": "blog/random/dns/index.html",
    "revision": "723cd07d137748513716747eae5d4933"
  },
  {
    "url": "blog/random/evp/index.html",
    "revision": "f42d1c4720090d3394dd140c316d5e10"
  },
  {
    "url": "blog/random/flip/index.html",
    "revision": "d6a3b7917c11e40f7c2433e2e747dd16"
  },
  {
    "url": "blog/random/honeychurch/index.html",
    "revision": "51de5ea03246a036f459b8a44ec3f7dc"
  },
  {
    "url": "blog/random/index.html",
    "revision": "1fe54dd4d904b6f08c30bc2f6c49c2cb"
  },
  {
    "url": "blog/random/lottery/index.html",
    "revision": "0f85377147604a8b535b111e0a4dff68"
  },
  {
    "url": "blog/random/music/index.html",
    "revision": "f8355d347b5328fe0a72dcf3f1e492a2"
  },
  {
    "url": "blog/random/octal/index.html",
    "revision": "550db453cdc3805cfa2072d65400eb5e"
  },
  {
    "url": "blog/random/os/index.html",
    "revision": "3001336013822f444b1b002252faef54"
  },
  {
    "url": "blog/random/propellers/index.html",
    "revision": "5a96ccacdb22e529a482288b3a48eda9"
  },
  {
    "url": "blog/random/robux/index.html",
    "revision": "61629ecb99e8117fed1fadb1571d62b5"
  },
  {
    "url": "blog/random/super/index.html",
    "revision": "56c704b7004e24524b8d812c5d9153ea"
  },
  {
    "url": "blog/random/times/index.html",
    "revision": "d8129b686158520141ac07016040d116"
  },
  {
    "url": "blog/random/travel/index.html",
    "revision": "83e32ffa58c7bba7a8fce71e35749e59"
  },
  {
    "url": "blog/random/wilhelm/index.html",
    "revision": "c9d4b65013e2478c9382fa5813ec8e00"
  },
  {
    "url": "blog/random/year/index.html",
    "revision": "b891d257bb48426403b6a53e6253ec0e"
  },
  {
    "url": "blog/skepticism/2015/08/16/asa/index.html",
    "revision": "a3be5cea729899b45c26a1709a0fb294"
  },
  {
    "url": "blog/skepticism/2015/08/16/awards/index.html",
    "revision": "90560cc5f6f7bf24b8855166954c8925"
  },
  {
    "url": "blog/skepticism/2015/08/16/bravo/index.html",
    "revision": "0687043dd91b30970b4f098024aaecaf"
  },
  {
    "url": "blog/skepticism/2015/08/16/index.html",
    "revision": "9ac235cbd456f544b5a32da455247c3c"
  },
  {
    "url": "blog/skepticism/2015/08/16/jim/index.html",
    "revision": "1b3019fd2f8fc2a69248b65e82eea771"
  },
  {
    "url": "blog/skepticism/2015/08/16/naholo/index.html",
    "revision": "33e983c87de94b10567cca4e9978864b"
  },
  {
    "url": "blog/skepticism/2015/08/16/resene/index.html",
    "revision": "18913544a5410d57f81fb2e676687183"
  },
  {
    "url": "blog/skepticism/2015/08/index.html",
    "revision": "3fcad741ed7996c828f5650b8905a27d"
  },
  {
    "url": "blog/skepticism/2015/09/20/gop/index.html",
    "revision": "3942ce1a88cf4a6230cf10039f07a7df"
  },
  {
    "url": "blog/skepticism/2015/09/20/ignobel/index.html",
    "revision": "95c55ec54c4310f07be52d5e5a659fec"
  },
  {
    "url": "blog/skepticism/2015/09/20/index.html",
    "revision": "f1b230c95ca9df684fe9beb01038776b"
  },
  {
    "url": "blog/skepticism/2015/09/20/supplements/index.html",
    "revision": "998859a1cdf06b0c0c332386dd38b054"
  },
  {
    "url": "blog/skepticism/2015/09/27/ayahuasca/index.html",
    "revision": "441d86d17801e3c0f1f20230b443c4f0"
  },
  {
    "url": "blog/skepticism/2015/09/27/drought/index.html",
    "revision": "753f9d0ca99b76a50865c7b6e990cc0a"
  },
  {
    "url": "blog/skepticism/2015/09/27/index.html",
    "revision": "157faf179fc17221dcce72a664efc395"
  },
  {
    "url": "blog/skepticism/2015/09/27/lama/index.html",
    "revision": "ab3a9e5ac595756991a45a54dd86a5b8"
  },
  {
    "url": "blog/skepticism/2015/09/27/moon/index.html",
    "revision": "240df686b027cb6f0950073a361ad134"
  },
  {
    "url": "blog/skepticism/2015/09/27/scan/index.html",
    "revision": "d5265b47976b0c4d526799d2e260759c"
  },
  {
    "url": "blog/skepticism/2015/09/index.html",
    "revision": "c1329d3da985cfd3b167fd826ec48eec"
  },
  {
    "url": "blog/skepticism/2015/10/04/ghost/index.html",
    "revision": "27b870da20ae9f4fa168fdbdadd65c6e"
  },
  {
    "url": "blog/skepticism/2015/10/04/haka/index.html",
    "revision": "e80c53fe8bd58f772685c7a3cc86c338"
  },
  {
    "url": "blog/skepticism/2015/10/04/index.html",
    "revision": "eda0f690c87e3a2e50d7c9b8dc53640e"
  },
  {
    "url": "blog/skepticism/2015/10/04/mars/index.html",
    "revision": "921e4f26768195041c6eeb721a39d6ca"
  },
  {
    "url": "blog/skepticism/2015/10/04/pharmacy/index.html",
    "revision": "9aefb7e57f9fd7ddd309d87abf032a28"
  },
  {
    "url": "blog/skepticism/2015/10/04/prostate/index.html",
    "revision": "dda64e2e6328d062833ad12a2fb77718"
  },
  {
    "url": "blog/skepticism/2015/10/11/armageddon/index.html",
    "revision": "2cd294fe8ca6ad934bc901304de16e2b"
  },
  {
    "url": "blog/skepticism/2015/10/11/climate/index.html",
    "revision": "eb4e4824eae340f56c45d78942f3ade1"
  },
  {
    "url": "blog/skepticism/2015/10/11/ghost/index.html",
    "revision": "4c8e75d5d8de679715d2a288c3432ed8"
  },
  {
    "url": "blog/skepticism/2015/10/11/index.html",
    "revision": "8e93a0f1200aa710c19558022e5b68cc"
  },
  {
    "url": "blog/skepticism/2015/10/11/magnesleep/index.html",
    "revision": "3f0629618810412368d5cd1913df9f0f"
  },
  {
    "url": "blog/skepticism/2015/10/11/nhs/index.html",
    "revision": "724ad63191dcf812eca572937812e438"
  },
  {
    "url": "blog/skepticism/2015/10/11/prophet/index.html",
    "revision": "e79f7e40c7c83c1abfb31ccf08a71f65"
  },
  {
    "url": "blog/skepticism/2015/10/index.html",
    "revision": "5dca53640f869bbc6139ead235976cef"
  },
  {
    "url": "blog/skepticism/2015/11/15/end/index.html",
    "revision": "7c58d806eec51cf9795c8dabc8aaf5c2"
  },
  {
    "url": "blog/skepticism/2015/11/15/index.html",
    "revision": "2a7de905a009dfe77a2b892276eda60c"
  },
  {
    "url": "blog/skepticism/2015/11/index.html",
    "revision": "9c7a1c57b7b8f52878beb564bcc9615e"
  },
  {
    "url": "blog/skepticism/2015/12/13/astrology/index.html",
    "revision": "339aa75098d088b5d5fda4ab53640038"
  },
  {
    "url": "blog/skepticism/2015/12/13/cancer/index.html",
    "revision": "5337eb2b0157d1676be4a42cb8eeae5a"
  },
  {
    "url": "blog/skepticism/2015/12/13/chickenpox/index.html",
    "revision": "b511a191f6444990c7a2efdc833e6fa6"
  },
  {
    "url": "blog/skepticism/2015/12/13/index.html",
    "revision": "9513740fce57a8da1a23467d685decac"
  },
  {
    "url": "blog/skepticism/2015/12/13/osteopath/index.html",
    "revision": "f16a76ab4b7208804842d5a5e1a7d9cf"
  },
  {
    "url": "blog/skepticism/2015/12/13/priest/index.html",
    "revision": "838d0e968b86c99d8a9607a8af6ca0cb"
  },
  {
    "url": "blog/skepticism/2015/12/13/psychic/index.html",
    "revision": "c89e34618f3ba5fb1b9353a0388d9fe5"
  },
  {
    "url": "blog/skepticism/2015/12/13/vaccines/index.html",
    "revision": "a792af600197f27b779d6030e0fb8443"
  },
  {
    "url": "blog/skepticism/2015/12/index.html",
    "revision": "511bce4b2925d2d2639c7c97d3f20d7e"
  },
  {
    "url": "blog/skepticism/2015/index.html",
    "revision": "55a4dc131744773d31ee821a6fe96dd7"
  },
  {
    "url": "blog/skepticism/2016/02/07/antioxidant/index.html",
    "revision": "0bf0afeb40370af8fcc181ab93ddee4f"
  },
  {
    "url": "blog/skepticism/2016/02/07/index.html",
    "revision": "6ef96560fa0d85ae200a07d3b82e6561"
  },
  {
    "url": "blog/skepticism/2016/02/07/kfc/index.html",
    "revision": "5a8e3c38e936e523c0244b2d285014d2"
  },
  {
    "url": "blog/skepticism/2016/02/07/ph/index.html",
    "revision": "8e5dd1838560566151e14371efe7cad4"
  },
  {
    "url": "blog/skepticism/2016/02/07/sandy/index.html",
    "revision": "26a8d256c5fb63d3cbb079f07645d1fc"
  },
  {
    "url": "blog/skepticism/2016/02/07/sarfati/index.html",
    "revision": "e7cfb9b7b3fd295d267e7221fcc1d2d1"
  },
  {
    "url": "blog/skepticism/2016/02/07/trump/index.html",
    "revision": "2e6682cadc851d9c3368abbf19686b32"
  },
  {
    "url": "blog/skepticism/2016/02/14/coins/index.html",
    "revision": "ff02217faa490636471141e147305fea"
  },
  {
    "url": "blog/skepticism/2016/02/14/fast/index.html",
    "revision": "604c1824ffdc2ae5a7a4959d5e951735"
  },
  {
    "url": "blog/skepticism/2016/02/14/fluoride/index.html",
    "revision": "9521c213c8531d33d2dc470806bd1695"
  },
  {
    "url": "blog/skepticism/2016/02/14/icke/index.html",
    "revision": "a03b25edc65ae5d3b082b79dbb77558b"
  },
  {
    "url": "blog/skepticism/2016/02/14/index.html",
    "revision": "fefdb4899aeb99a96443d743d5ad750a"
  },
  {
    "url": "blog/skepticism/2016/02/14/yeti/index.html",
    "revision": "376e38cba79dc920c173d2ac661930bc"
  },
  {
    "url": "blog/skepticism/2016/02/21/homeopathy/index.html",
    "revision": "ea0c053ca9ea1db1a4be073fddeab3b8"
  },
  {
    "url": "blog/skepticism/2016/02/21/index.html",
    "revision": "07d11986d942f612db2b2f6baf1d00f2"
  },
  {
    "url": "blog/skepticism/2016/02/21/monster/index.html",
    "revision": "5b7a741b207aa960fe3021e2d5b0f4ad"
  },
  {
    "url": "blog/skepticism/2016/02/21/scalia/index.html",
    "revision": "3114f87b5f1e2ffbb5d7b901c4bf4998"
  },
  {
    "url": "blog/skepticism/2016/02/21/shane/index.html",
    "revision": "bb27eeb6e2004ecc3b2a4aefa10e6738"
  },
  {
    "url": "blog/skepticism/2016/02/21/texas/index.html",
    "revision": "47b00827815d895ee2719580b738cebd"
  },
  {
    "url": "blog/skepticism/2016/02/28/acupuncture/index.html",
    "revision": "51bafe43d9aeac9ac95717c93644cfaf"
  },
  {
    "url": "blog/skepticism/2016/02/28/fsm/index.html",
    "revision": "5bc85e8628fbbcc8fc51d9720d1671f6"
  },
  {
    "url": "blog/skepticism/2016/02/28/index.html",
    "revision": "1a069cc52db2f8e3c3cba73bb3b955bb"
  },
  {
    "url": "blog/skepticism/2016/02/28/iv/index.html",
    "revision": "3af1bf32486816a2965f8650a1b60a41"
  },
  {
    "url": "blog/skepticism/2016/02/28/natural/index.html",
    "revision": "c609f0fe140ca683a2fd26c75b3b1b8f"
  },
  {
    "url": "blog/skepticism/2016/02/28/talc/index.html",
    "revision": "ddabab1c9276d6a35ed3626c0636c34c"
  },
  {
    "url": "blog/skepticism/2016/02/index.html",
    "revision": "7a955043de54785405aa6a91424547f0"
  },
  {
    "url": "blog/skepticism/2016/03/13/herbs/index.html",
    "revision": "8939aaa8652d672f699a47622339e232"
  },
  {
    "url": "blog/skepticism/2016/03/13/index.html",
    "revision": "4c55d1eabac0d007bc92591f99c1e9f0"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandala/index.html",
    "revision": "d935db03f3bf32406670fafa652207c0"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandela/index.html",
    "revision": "e62bc7ee3f26fa1d4124d688d0d63628"
  },
  {
    "url": "blog/skepticism/2016/03/13/spray/index.html",
    "revision": "73c8e216495e4233ce02a19bf13d8bfa"
  },
  {
    "url": "blog/skepticism/2016/03/index.html",
    "revision": "dc9ea60dabc896dc3aa1b0f35f984e56"
  },
  {
    "url": "blog/skepticism/2016/04/17/charity/index.html",
    "revision": "6198fc90a9043b9b684191876ea77d46"
  },
  {
    "url": "blog/skepticism/2016/04/17/chiro/index.html",
    "revision": "a6b5ab339ddd441449e4701861fc83d6"
  },
  {
    "url": "blog/skepticism/2016/04/17/fluoride/index.html",
    "revision": "945389d8b7bf7645ebaefea3f1ac76f2"
  },
  {
    "url": "blog/skepticism/2016/04/17/index.html",
    "revision": "a4c3b8f9e5e4be6ed9f89d3e857c67cf"
  },
  {
    "url": "blog/skepticism/2016/04/17/lotto/index.html",
    "revision": "551dba572223dc35a0ea88cbc7f588fc"
  },
  {
    "url": "blog/skepticism/2016/04/17/mind/index.html",
    "revision": "3b04dbacbd007257b54fb0b0f0ca6193"
  },
  {
    "url": "blog/skepticism/2016/04/17/whooping/index.html",
    "revision": "a067aa813d1b6e9c03a9dc36ec5b8c5e"
  },
  {
    "url": "blog/skepticism/2016/04/index.html",
    "revision": "95858de521579d4de0c9f09acf8f8486"
  },
  {
    "url": "blog/skepticism/2016/06/05/1080/index.html",
    "revision": "2cf3aac6a2001a6b0f64efdfac6fcfeb"
  },
  {
    "url": "blog/skepticism/2016/06/05/acupuncture/index.html",
    "revision": "df5c32cac4522dffa133b57ecd7b93bf"
  },
  {
    "url": "blog/skepticism/2016/06/05/family/index.html",
    "revision": "504389a52d9249f6134ac490632b4201"
  },
  {
    "url": "blog/skepticism/2016/06/05/index.html",
    "revision": "33e5057d8181d1e61c4cf222e65f80e2"
  },
  {
    "url": "blog/skepticism/2016/06/05/limbaugh/index.html",
    "revision": "f33fa6163db4e6250f4389748dca84ff"
  },
  {
    "url": "blog/skepticism/2016/06/12/bobby/index.html",
    "revision": "fe6ff7ac68c7161c2ccb5164f5e33f6a"
  },
  {
    "url": "blog/skepticism/2016/06/12/climate/index.html",
    "revision": "ba9fe2ec6eee4bd6d7760d6a4bd6df79"
  },
  {
    "url": "blog/skepticism/2016/06/12/index.html",
    "revision": "fe4baf7c9a99116dbb5da008ac4c4399"
  },
  {
    "url": "blog/skepticism/2016/06/12/pugh/index.html",
    "revision": "894b42c5a81add1f8eabf7b4051f7c3f"
  },
  {
    "url": "blog/skepticism/2016/06/12/savage/index.html",
    "revision": "e054f24da18ff33a5dd75da1cfab335b"
  },
  {
    "url": "blog/skepticism/2016/06/12/sawdust/index.html",
    "revision": "b6762260c37ab6ec9e6abe2b0bd05210"
  },
  {
    "url": "blog/skepticism/2016/06/19/beauty/index.html",
    "revision": "40638e8d007f84debc826f29e7701c4e"
  },
  {
    "url": "blog/skepticism/2016/06/19/bilderberg/index.html",
    "revision": "c4ebf1b32c99e735da82fced7354bc70"
  },
  {
    "url": "blog/skepticism/2016/06/19/cyf/index.html",
    "revision": "09aae188647363c23ac8012f461842a0"
  },
  {
    "url": "blog/skepticism/2016/06/19/holt/index.html",
    "revision": "b4b2fd6f0fd533ec0a52540cb40b2cd7"
  },
  {
    "url": "blog/skepticism/2016/06/19/index.html",
    "revision": "d525849423d471f8369fce3cbb2deac1"
  },
  {
    "url": "blog/skepticism/2016/06/19/silver/index.html",
    "revision": "78b8b56aad9328c28350bbdb9940c8a4"
  },
  {
    "url": "blog/skepticism/2016/06/19/ufo/index.html",
    "revision": "f016ef2eecd360793f06cc2719f6018b"
  },
  {
    "url": "blog/skepticism/2016/06/26/homeopathy/index.html",
    "revision": "02ebb5a66d8ca6743695d9f100c10131"
  },
  {
    "url": "blog/skepticism/2016/06/26/index.html",
    "revision": "09c9c5d90e756f43bca6f2d9d237a72e"
  },
  {
    "url": "blog/skepticism/2016/06/26/robbins/index.html",
    "revision": "480404d532de8d0556ad5a3b018045cf"
  },
  {
    "url": "blog/skepticism/2016/06/26/selfies/index.html",
    "revision": "43d9260a4e3f8456c57440dc8066b1de"
  },
  {
    "url": "blog/skepticism/2016/06/26/silver/index.html",
    "revision": "5cf805a63817822ed5182741ed412837"
  },
  {
    "url": "blog/skepticism/2016/06/26/ufos/index.html",
    "revision": "a1761d52dadbd013f6b05e14aae5621a"
  },
  {
    "url": "blog/skepticism/2016/06/index.html",
    "revision": "418ab805221af84f6546ce649641c7ec"
  },
  {
    "url": "blog/skepticism/2016/07/03/glyphosate/index.html",
    "revision": "76a65c1084fc44bbe23593102f47dfdb"
  },
  {
    "url": "blog/skepticism/2016/07/03/gmo/index.html",
    "revision": "7bf07d48412fe0ea03223bdb4cf5df29"
  },
  {
    "url": "blog/skepticism/2016/07/03/index.html",
    "revision": "cc2f8764d2fd473749f2007f80718134"
  },
  {
    "url": "blog/skepticism/2016/07/03/jail/index.html",
    "revision": "b753f8489147b90d45a312454da99f52"
  },
  {
    "url": "blog/skepticism/2016/07/03/ken/index.html",
    "revision": "dd34b1d7ff48d29d4344a047a720ba5f"
  },
  {
    "url": "blog/skepticism/2016/07/10/ark/index.html",
    "revision": "acf81f25f631d5d4baee664286aec673"
  },
  {
    "url": "blog/skepticism/2016/07/10/bee/index.html",
    "revision": "56be05467ac8149ace930e269650cdfc"
  },
  {
    "url": "blog/skepticism/2016/07/10/index.html",
    "revision": "0b57b336c8177f7c591e71601a71e425"
  },
  {
    "url": "blog/skepticism/2016/07/10/lottery/index.html",
    "revision": "b9253922ccf08b613f39f483ea201d4d"
  },
  {
    "url": "blog/skepticism/2016/07/10/murder/index.html",
    "revision": "b22e8ad13cf94f85d201681102727ef9"
  },
  {
    "url": "blog/skepticism/2016/07/17/dogs/index.html",
    "revision": "e4291c97593465f7cb902d7741e7c7a3"
  },
  {
    "url": "blog/skepticism/2016/07/17/fsm/index.html",
    "revision": "7641a5f588ce4dfd470193cb3fa2d263"
  },
  {
    "url": "blog/skepticism/2016/07/17/fyi/index.html",
    "revision": "7852bea3f7d282d7192f12861086cd54"
  },
  {
    "url": "blog/skepticism/2016/07/17/index.html",
    "revision": "ccdb98aceb73a1efd60b1237bbbbdcd8"
  },
  {
    "url": "blog/skepticism/2016/07/17/natural/index.html",
    "revision": "9781d8518d950b05b83348f0e038282f"
  },
  {
    "url": "blog/skepticism/2016/07/17/pokemon/index.html",
    "revision": "ea4cb84c63673eeee1ff220e3351bbd7"
  },
  {
    "url": "blog/skepticism/2016/07/index.html",
    "revision": "a4d684d6492da4cd628d15c9f76cb8d1"
  },
  {
    "url": "blog/skepticism/2016/08/07/icke/index.html",
    "revision": "ca085f52db3d40939702b37350a570cd"
  },
  {
    "url": "blog/skepticism/2016/08/07/index.html",
    "revision": "cc4d4141b9b2ec1af0de84aecd90e113"
  },
  {
    "url": "blog/skepticism/2016/08/21/brian/index.html",
    "revision": "0c5514ab28ca519268541be60a89acc8"
  },
  {
    "url": "blog/skepticism/2016/08/21/chlorine/index.html",
    "revision": "4d4d2be419aa68591635040b3ad265c4"
  },
  {
    "url": "blog/skepticism/2016/08/21/index.html",
    "revision": "a9ea842c6c8d71b483a44ad59f63da63"
  },
  {
    "url": "blog/skepticism/2016/08/21/murder/index.html",
    "revision": "b90d364f214635676f5682e6c94ef8ea"
  },
  {
    "url": "blog/skepticism/2016/08/21/superfoods/index.html",
    "revision": "d90cfdd56342bc7ad9109aca771f0bc0"
  },
  {
    "url": "blog/skepticism/2016/08/21/witch/index.html",
    "revision": "f2aca26d9286c62af3ec7c7913ca5640"
  },
  {
    "url": "blog/skepticism/2016/08/28/alcohol/index.html",
    "revision": "00c983c3af65d4c18af3c08c4e0bc472"
  },
  {
    "url": "blog/skepticism/2016/08/28/chiro/index.html",
    "revision": "d2fd070af951126f1878b30d5858744a"
  },
  {
    "url": "blog/skepticism/2016/08/28/index.html",
    "revision": "51228d28e7fcb4d6a52c60e9d4b9ff61"
  },
  {
    "url": "blog/skepticism/2016/08/28/processed/index.html",
    "revision": "bf556f978a5c3dd91e6cc5252a9d6312"
  },
  {
    "url": "blog/skepticism/2016/08/28/sbh/index.html",
    "revision": "544523a697206683475be970edf18ae2"
  },
  {
    "url": "blog/skepticism/2016/08/index.html",
    "revision": "8da13c37741bb344f6c38b5c134a97f9"
  },
  {
    "url": "blog/skepticism/2016/09/18/altruism/index.html",
    "revision": "c7dc975cc3c211d0caf692b17291f87f"
  },
  {
    "url": "blog/skepticism/2016/09/18/better/index.html",
    "revision": "1260db5227d3759402e8848d8cbc6b16"
  },
  {
    "url": "blog/skepticism/2016/09/18/homeopathy/index.html",
    "revision": "5e9192520691b1355c815c1528b4b145"
  },
  {
    "url": "blog/skepticism/2016/09/18/index.html",
    "revision": "ee46697ca23806510fcaad817cf7e4dd"
  },
  {
    "url": "blog/skepticism/2016/09/18/nonsense/index.html",
    "revision": "7764dae6cee64a3ef1bb6284e037b569"
  },
  {
    "url": "blog/skepticism/2016/09/18/trump/index.html",
    "revision": "0869007da048af5712359ad99a12edcf"
  },
  {
    "url": "blog/skepticism/2016/09/25/clinic/index.html",
    "revision": "84cb14b03561493ea0f099b6e75a990b"
  },
  {
    "url": "blog/skepticism/2016/09/25/fluoride/index.html",
    "revision": "22342f54e0d591ffe953d7e75276396a"
  },
  {
    "url": "blog/skepticism/2016/09/25/homeopathy/index.html",
    "revision": "539e8c99dfe0b9fd6362d7bdd3925021"
  },
  {
    "url": "blog/skepticism/2016/09/25/index.html",
    "revision": "27b2ba9d1422064d10bccdc9c3534a37"
  },
  {
    "url": "blog/skepticism/2016/09/25/murder/index.html",
    "revision": "454fbb68713cd6d6aac83f81a322a6e4"
  },
  {
    "url": "blog/skepticism/2016/09/index.html",
    "revision": "de22f57209c04db58b77d9fa8ccd4eae"
  },
  {
    "url": "blog/skepticism/2016/10/21/bigfoot/index.html",
    "revision": "b2d827fd7e4017230483c6a6acd66e44"
  },
  {
    "url": "blog/skepticism/2016/10/21/breasts/index.html",
    "revision": "35f957a081e3dc678f19a79f0025e3c0"
  },
  {
    "url": "blog/skepticism/2016/10/21/index.html",
    "revision": "ddbdf8253bec29a825e1fef1b4ef0440"
  },
  {
    "url": "blog/skepticism/2016/10/21/medsafe/index.html",
    "revision": "c9c2587377291e431b511b2290636225"
  },
  {
    "url": "blog/skepticism/2016/10/21/zenteq/index.html",
    "revision": "452ca99aa254c607dd763bd3fcc48e1d"
  },
  {
    "url": "blog/skepticism/2016/10/index.html",
    "revision": "5aa1b2d5a035a1e70502f1c6eb251ba5"
  },
  {
    "url": "blog/skepticism/2016/11/13/conference/index.html",
    "revision": "e86db545959502aef38449e8f3e29526"
  },
  {
    "url": "blog/skepticism/2016/11/13/green/index.html",
    "revision": "22d978c62f9c6350d8a29c74dd8053f7"
  },
  {
    "url": "blog/skepticism/2016/11/13/index.html",
    "revision": "0f50d116e2f550d731afc8611e7ca26a"
  },
  {
    "url": "blog/skepticism/2016/11/13/vice/index.html",
    "revision": "773e2179b125d17fbd96ba95d931935e"
  },
  {
    "url": "blog/skepticism/2016/11/27/bioptron/index.html",
    "revision": "8537d0e7294ff3e5fe23a7758473a605"
  },
  {
    "url": "blog/skepticism/2016/11/27/conference/index.html",
    "revision": "33b53f0883b6d65801f82150d483eaf5"
  },
  {
    "url": "blog/skepticism/2016/11/27/earthquake/index.html",
    "revision": "c160df6b1557e000293f1488b3ccc974"
  },
  {
    "url": "blog/skepticism/2016/11/27/index.html",
    "revision": "230d03813c28762f1cf6ca3464933df5"
  },
  {
    "url": "blog/skepticism/2016/11/index.html",
    "revision": "06efef66b344e90d520da1fc52fe3b3d"
  },
  {
    "url": "blog/skepticism/2016/12/04/conference/index.html",
    "revision": "a5b738ace7bf7dbf5191da06f670a02d"
  },
  {
    "url": "blog/skepticism/2016/12/04/index.html",
    "revision": "edecbc3c56a7359453501e91ebf30152"
  },
  {
    "url": "blog/skepticism/2016/12/18/colin/index.html",
    "revision": "2805fc261ccb4fd947d77a884b047eab"
  },
  {
    "url": "blog/skepticism/2016/12/18/fiji/index.html",
    "revision": "e5a45a1edff841d13d3b1fdfe863882e"
  },
  {
    "url": "blog/skepticism/2016/12/18/index.html",
    "revision": "e1d45cef4329a8acf2885f76acbef45f"
  },
  {
    "url": "blog/skepticism/2016/12/18/kinesiology/index.html",
    "revision": "79c5a626734ed0691305320ec657d3ec"
  },
  {
    "url": "blog/skepticism/2016/12/18/mmm/index.html",
    "revision": "64c4e871c0952817c372283f474702d3"
  },
  {
    "url": "blog/skepticism/2016/12/18/nigel/index.html",
    "revision": "5f20554f4e88903c508b246c4a6a1f5d"
  },
  {
    "url": "blog/skepticism/2016/12/index.html",
    "revision": "c457b555f68564d965b468232ebf019b"
  },
  {
    "url": "blog/skepticism/2016/index.html",
    "revision": "9c6cee0453b39c6b240de45e431e608f"
  },
  {
    "url": "blog/skepticism/2017/01/22/index.html",
    "revision": "fda5b9e33a5567a97ec9188e6d4bd64e"
  },
  {
    "url": "blog/skepticism/2017/01/22/scientology/index.html",
    "revision": "634b0d9d132aae5932058fdf6d4f961c"
  },
  {
    "url": "blog/skepticism/2017/01/29/creation/index.html",
    "revision": "983e9a0917c3166666bf6a155c1e9c43"
  },
  {
    "url": "blog/skepticism/2017/01/29/index.html",
    "revision": "12918121da8de1b1ca6c59ed8ad769e8"
  },
  {
    "url": "blog/skepticism/2017/01/index.html",
    "revision": "0e20d774b7266cf16ff0549ce152154a"
  },
  {
    "url": "blog/skepticism/2017/02/05/fraudster/index.html",
    "revision": "9ba4fa6f7648d0a240af3d8bc2ea7523"
  },
  {
    "url": "blog/skepticism/2017/02/05/gervais/index.html",
    "revision": "0b79b8830d113e3e25558a5e9e70d28c"
  },
  {
    "url": "blog/skepticism/2017/02/05/index.html",
    "revision": "254798fd112f582ca1a9ac26186c3a18"
  },
  {
    "url": "blog/skepticism/2017/02/05/scientology/index.html",
    "revision": "375bc3a2801726174d1daae53387d473"
  },
  {
    "url": "blog/skepticism/2017/02/19/homeopathy/index.html",
    "revision": "853cebed034b0dc2f5ccfb691d27474a"
  },
  {
    "url": "blog/skepticism/2017/02/19/index.html",
    "revision": "d52eaab793d48812c6c6772afd387895"
  },
  {
    "url": "blog/skepticism/2017/02/19/lottery/index.html",
    "revision": "65dded46f176fa842b59ee84b23db649"
  },
  {
    "url": "blog/skepticism/2017/02/19/vaxxed/index.html",
    "revision": "baaf94467fc59a7b6fcf809a4b6f7d5e"
  },
  {
    "url": "blog/skepticism/2017/02/19/whales/index.html",
    "revision": "a6de1efa4e70717dcbcb716038620a7f"
  },
  {
    "url": "blog/skepticism/2017/02/index.html",
    "revision": "247433ea5942f164c77056b590affd4a"
  },
  {
    "url": "blog/skepticism/2017/03/05/index.html",
    "revision": "5e16e51e8058ac5458df57c6ce0f34d7"
  },
  {
    "url": "blog/skepticism/2017/03/05/rea/index.html",
    "revision": "37c38e7352a45a3550444f57333091c9"
  },
  {
    "url": "blog/skepticism/2017/03/19/fake/index.html",
    "revision": "39f5fefc7d854f5efdc795a4b394107e"
  },
  {
    "url": "blog/skepticism/2017/03/19/index.html",
    "revision": "2add5b2cd46a5a192f0ef24f8206ba12"
  },
  {
    "url": "blog/skepticism/2017/03/19/murder/index.html",
    "revision": "2ef37c0257ba732da1c6e88a0c1da205"
  },
  {
    "url": "blog/skepticism/2017/03/26/census/index.html",
    "revision": "21f907391d9edd3cc6c72d9096854fe6"
  },
  {
    "url": "blog/skepticism/2017/03/26/index.html",
    "revision": "744f19775d9b66b20c181224d9fbb18a"
  },
  {
    "url": "blog/skepticism/2017/03/26/nzmj/index.html",
    "revision": "29f633c3c2d1abda063bc434360d0584"
  },
  {
    "url": "blog/skepticism/2017/03/26/shaquille/index.html",
    "revision": "5c1356d59f416f3168940fcf8e83a56b"
  },
  {
    "url": "blog/skepticism/2017/03/index.html",
    "revision": "92daf28837d16c9d6aea34194f7f56a8"
  },
  {
    "url": "blog/skepticism/2017/04/02/index.html",
    "revision": "8f74a24fddb2e4157f6c03cdb08497cc"
  },
  {
    "url": "blog/skepticism/2017/04/02/nasa/index.html",
    "revision": "bb1fa0820611abce3f06c63738e3f65a"
  },
  {
    "url": "blog/skepticism/2017/04/02/science/index.html",
    "revision": "2f185aada5855a39ca247d202fc763a9"
  },
  {
    "url": "blog/skepticism/2017/04/02/vaxxed/index.html",
    "revision": "a220ffc717d10aeee8d3b2cebdcbb4a0"
  },
  {
    "url": "blog/skepticism/2017/04/09/index.html",
    "revision": "038007d07a3c72b1e7662153163bd696"
  },
  {
    "url": "blog/skepticism/2017/04/09/tekiri/index.html",
    "revision": "34f4c7d2b8599b61acdaa7246b6b2912"
  },
  {
    "url": "blog/skepticism/2017/04/09/vaxxed/index.html",
    "revision": "9f6744c21fd12ba3e87cdccda78dda20"
  },
  {
    "url": "blog/skepticism/2017/04/23/arise/index.html",
    "revision": "ebb2389ecbdf69ce31ee426a3f5a29d1"
  },
  {
    "url": "blog/skepticism/2017/04/23/index.html",
    "revision": "5bd414c8fb8766365ebcc41b6a84b889"
  },
  {
    "url": "blog/skepticism/2017/04/23/kelvin/index.html",
    "revision": "13da490aff208152a26a83bc09dee88c"
  },
  {
    "url": "blog/skepticism/2017/04/index.html",
    "revision": "aa573e0c9d0b652d6dd66e706e0205dc"
  },
  {
    "url": "blog/skepticism/2017/05/07/cancer/index.html",
    "revision": "dc087201f0e5d922dd16532706b47ea5"
  },
  {
    "url": "blog/skepticism/2017/05/07/index.html",
    "revision": "313194954a84252c79fec18b7b599dea"
  },
  {
    "url": "blog/skepticism/2017/05/07/nigel/index.html",
    "revision": "15bf1e4ad3b0917dd3b012b773ac921c"
  },
  {
    "url": "blog/skepticism/2017/05/21/blasphemy/index.html",
    "revision": "70aa1f724b2b7a9a70f6b5e47fdfae3a"
  },
  {
    "url": "blog/skepticism/2017/05/21/flat/index.html",
    "revision": "ae3cc1b848f007fd8904ea8d61cbc3eb"
  },
  {
    "url": "blog/skepticism/2017/05/21/index.html",
    "revision": "f5feb473f9ad5d85e1ce4ab3807a9d9d"
  },
  {
    "url": "blog/skepticism/2017/05/21/maori/index.html",
    "revision": "71a1be07af9f57709774f5d335291b70"
  },
  {
    "url": "blog/skepticism/2017/05/index.html",
    "revision": "ac8c3ec007ea13c324a3f3eff02cedd8"
  },
  {
    "url": "blog/skepticism/2017/06/04/bigelow/index.html",
    "revision": "c997e5152b2b6fb848b73364f79292ca"
  },
  {
    "url": "blog/skepticism/2017/06/04/climate/index.html",
    "revision": "b4f68fe05c29c4d372794d29ceba44ed"
  },
  {
    "url": "blog/skepticism/2017/06/04/hansford/index.html",
    "revision": "f9782c2aefb1a1cf4c1b03e9ca6c0528"
  },
  {
    "url": "blog/skepticism/2017/06/04/index.html",
    "revision": "28070fd24c1c0e0ae6de3c56b57da21b"
  },
  {
    "url": "blog/skepticism/2017/06/04/wasp/index.html",
    "revision": "610d25a810f3a53eb7a238e7b453a533"
  },
  {
    "url": "blog/skepticism/2017/06/11/colonic/index.html",
    "revision": "df01b2aa4f4cc5238f8d6b43cbc6f700"
  },
  {
    "url": "blog/skepticism/2017/06/11/credulous/index.html",
    "revision": "92d840cd14e98776ce02e77c0c365496"
  },
  {
    "url": "blog/skepticism/2017/06/11/index.html",
    "revision": "c7694d6fbf78add58d4caef7caf95df7"
  },
  {
    "url": "blog/skepticism/2017/06/11/journals/index.html",
    "revision": "104a023c56fcaa2b1d58e05e307d6275"
  },
  {
    "url": "blog/skepticism/2017/06/18/breatharians/index.html",
    "revision": "43265f0ddc5b890e3ddf656716b46741"
  },
  {
    "url": "blog/skepticism/2017/06/18/fieldays/index.html",
    "revision": "c9173bf6a7a58d5c9803f62838dfc43d"
  },
  {
    "url": "blog/skepticism/2017/06/18/index.html",
    "revision": "e782555a9836808479942ac40bd49f0e"
  },
  {
    "url": "blog/skepticism/2017/06/18/jw/index.html",
    "revision": "31b572da4d0f58565872fd2961bd80a7"
  },
  {
    "url": "blog/skepticism/2017/06/18/oil/index.html",
    "revision": "2142126eb4c0d8609712f3865226ad96"
  },
  {
    "url": "blog/skepticism/2017/06/index.html",
    "revision": "57d17394d63ab32587411dd06385ced8"
  },
  {
    "url": "blog/skepticism/2017/07/02/baby/index.html",
    "revision": "5c6c47c4c98914f1f7ab52c393fac4e0"
  },
  {
    "url": "blog/skepticism/2017/07/02/index.html",
    "revision": "f4138eabc7cf1f902969304dbd0bed6e"
  },
  {
    "url": "blog/skepticism/2017/07/02/infowars/index.html",
    "revision": "5f62e51bde090dddc73fdfec0798afe9"
  },
  {
    "url": "blog/skepticism/2017/07/02/scientology/index.html",
    "revision": "3bd67cbffafe8184debe658c10250fcd"
  },
  {
    "url": "blog/skepticism/2017/07/16/bananas/index.html",
    "revision": "c5207f20b5bf9fede5e39a29d4773e81"
  },
  {
    "url": "blog/skepticism/2017/07/16/circles/index.html",
    "revision": "5f368f3db88a18a60d2d61734e429fdd"
  },
  {
    "url": "blog/skepticism/2017/07/16/index.html",
    "revision": "f4dbc264a7a6199db9d08c3aab94b9c4"
  },
  {
    "url": "blog/skepticism/2017/07/16/siggi/index.html",
    "revision": "ebb4f4be7775ca30625354b311d89756"
  },
  {
    "url": "blog/skepticism/2017/07/16/vaxxed/index.html",
    "revision": "e8a0b73fed1318fe9dd9d5ef6ea3147c"
  },
  {
    "url": "blog/skepticism/2017/07/30/bleach/index.html",
    "revision": "122485cce0cf0ae07403bde603cc137b"
  },
  {
    "url": "blog/skepticism/2017/07/30/bluebeam/index.html",
    "revision": "59afda7c0febaa72af30ae5e2f3a4af0"
  },
  {
    "url": "blog/skepticism/2017/07/30/index.html",
    "revision": "f484c3f4cb2242ae2d7a337929143bad"
  },
  {
    "url": "blog/skepticism/2017/07/30/police/index.html",
    "revision": "1413c29d4e62d43b66b81780f4d0c1bb"
  },
  {
    "url": "blog/skepticism/2017/07/index.html",
    "revision": "e2d0acc6ff26374364be7f9126dffb52"
  },
  {
    "url": "blog/skepticism/2017/08/06/conned/index.html",
    "revision": "e0d761c02e54a0a3d1087acd6445599e"
  },
  {
    "url": "blog/skepticism/2017/08/06/doll/index.html",
    "revision": "503ad473176ec8a2baa18149c60e9f9d"
  },
  {
    "url": "blog/skepticism/2017/08/06/index.html",
    "revision": "67892644728f77a2da012275d4c9230a"
  },
  {
    "url": "blog/skepticism/2017/08/06/jacinda/index.html",
    "revision": "aed484cd83c9fb46f8fcc64af6f81908"
  },
  {
    "url": "blog/skepticism/2017/08/06/lotto/index.html",
    "revision": "7277c90dfbfa85270436efa6c1d2af0c"
  },
  {
    "url": "blog/skepticism/2017/08/27/index.html",
    "revision": "22402d18cc84920bebb9d2148d7e5008"
  },
  {
    "url": "blog/skepticism/2017/08/27/naturopath/index.html",
    "revision": "b4a09240487cf9a72a194b051d164671"
  },
  {
    "url": "blog/skepticism/2017/08/27/satanic/index.html",
    "revision": "70154dd106821da30c8b3ff877dbaeb9"
  },
  {
    "url": "blog/skepticism/2017/08/index.html",
    "revision": "5e953c098ecd0324162ddfd71eeabd10"
  },
  {
    "url": "blog/skepticism/2017/09/03/apocalypse/index.html",
    "revision": "2926bf9861d679e827c8e6cb59488a49"
  },
  {
    "url": "blog/skepticism/2017/09/03/cancer/index.html",
    "revision": "5bb70e97a4ca256a76336c1c521e60ff"
  },
  {
    "url": "blog/skepticism/2017/09/03/index.html",
    "revision": "5903192a18aeaa8ce7c6b2118fb5bfc8"
  },
  {
    "url": "blog/skepticism/2017/09/03/rectangle/index.html",
    "revision": "1ca8b562c54c16e23044fa531bcdfff1"
  },
  {
    "url": "blog/skepticism/2017/09/03/stargate/index.html",
    "revision": "9ee24f75e13a783cd93dbd3f36edccd7"
  },
  {
    "url": "blog/skepticism/2017/09/index.html",
    "revision": "8738acbbbbd51fb599fbfa124531f71a"
  },
  {
    "url": "blog/skepticism/2017/10/01/apocalypse/index.html",
    "revision": "0c0456af1769a0137a435781076a3369"
  },
  {
    "url": "blog/skepticism/2017/10/01/freeman/index.html",
    "revision": "7ab6e64797800376d83c4ba9e017bb21"
  },
  {
    "url": "blog/skepticism/2017/10/01/index.html",
    "revision": "0d45aa8e38d491802b4018b43e16064c"
  },
  {
    "url": "blog/skepticism/2017/10/01/pharmacy/index.html",
    "revision": "960ec54e1acc1a3ba6fd460c16371722"
  },
  {
    "url": "blog/skepticism/2017/10/08/index.html",
    "revision": "79288df7147f0e8ff59b6b270c4bfde2"
  },
  {
    "url": "blog/skepticism/2017/10/08/pill/index.html",
    "revision": "2aaa65c6a74f862be868261d92a8691d"
  },
  {
    "url": "blog/skepticism/2017/10/08/qsb/index.html",
    "revision": "84720825521e701f27f441f36834b8e5"
  },
  {
    "url": "blog/skepticism/2017/10/08/vegas/index.html",
    "revision": "43f7ecca8b96764f5da19038cbe3af1f"
  },
  {
    "url": "blog/skepticism/2017/10/15/doterra/index.html",
    "revision": "c03e920d2661f11ba7eceda413b1477a"
  },
  {
    "url": "blog/skepticism/2017/10/15/index.html",
    "revision": "54431dfd8a4735050eeb3fc035e27f33"
  },
  {
    "url": "blog/skepticism/2017/10/15/lie/index.html",
    "revision": "20f4e62ab987aaca9934dbfbc430e8f8"
  },
  {
    "url": "blog/skepticism/2017/10/15/soap/index.html",
    "revision": "658de32027b179d07f67f5062284eea0"
  },
  {
    "url": "blog/skepticism/2017/10/index.html",
    "revision": "7e07a4cf369573b6607175de46f0b633"
  },
  {
    "url": "blog/skepticism/2017/11/05/conference/index.html",
    "revision": "bbd47d191794b4b588e0b9dd947267a1"
  },
  {
    "url": "blog/skepticism/2017/11/05/glyphosate/index.html",
    "revision": "579a541354ebaa4854afba7f96d6b5e1"
  },
  {
    "url": "blog/skepticism/2017/11/05/index.html",
    "revision": "ceb7a8dc2f3921d42a54541e04853587"
  },
  {
    "url": "blog/skepticism/2017/11/05/stranded/index.html",
    "revision": "de9c586fabfbc247d406067728fb2001"
  },
  {
    "url": "blog/skepticism/2017/11/05/tracts/index.html",
    "revision": "9f66ecc3c31d76bfebcf6f7d4fc2f53c"
  },
  {
    "url": "blog/skepticism/2017/11/12/ghost/index.html",
    "revision": "0f72ce189618abdb1aa43daec1b44483"
  },
  {
    "url": "blog/skepticism/2017/11/12/green/index.html",
    "revision": "ecbb876a8aae44402074344a3c017c39"
  },
  {
    "url": "blog/skepticism/2017/11/12/harassment/index.html",
    "revision": "ada3e81d566db841e9a910a48aa2ddfc"
  },
  {
    "url": "blog/skepticism/2017/11/12/index.html",
    "revision": "2ca37f17867906bd691e32071c8e82cd"
  },
  {
    "url": "blog/skepticism/2017/11/12/libby/index.html",
    "revision": "90039b516bbb56b41a4f047ac106483b"
  },
  {
    "url": "blog/skepticism/2017/11/index.html",
    "revision": "dfb161af7f6be7f92e8a2de202330c1c"
  },
  {
    "url": "blog/skepticism/2017/12/03/acupuncture/index.html",
    "revision": "ec8376070866c6b844f766a134055869"
  },
  {
    "url": "blog/skepticism/2017/12/03/denialism/index.html",
    "revision": "feb225ae6688c8a25c5bd0e4eee6f018"
  },
  {
    "url": "blog/skepticism/2017/12/03/dowsing/index.html",
    "revision": "ff8bd7bfcb7020dd3025b04eb9cb561f"
  },
  {
    "url": "blog/skepticism/2017/12/03/holes/index.html",
    "revision": "1b9ac9250dbe488fc8dfafd9b2fe122a"
  },
  {
    "url": "blog/skepticism/2017/12/03/index.html",
    "revision": "523abe1a06c965954d898c53a7e02234"
  },
  {
    "url": "blog/skepticism/2017/12/17/index.html",
    "revision": "61b99e6a1b66e90f1f93b16d8e1522bd"
  },
  {
    "url": "blog/skepticism/2017/12/17/nhs/index.html",
    "revision": "bef6d1276cc6cbc64e837f19bd149ed7"
  },
  {
    "url": "blog/skepticism/2017/12/17/oto/index.html",
    "revision": "bc14944f2a10e46d4759e3c29aa17975"
  },
  {
    "url": "blog/skepticism/2017/12/17/pastafarian/index.html",
    "revision": "7ea42f6edee6dee8d67d7115bb8a62a7"
  },
  {
    "url": "blog/skepticism/2017/12/17/shc/index.html",
    "revision": "3c5c63849360cc0ca7b5886f7daf9707"
  },
  {
    "url": "blog/skepticism/2017/12/17/wellworks/index.html",
    "revision": "f3f6edfe8f058fffabd3b9badab3a4e1"
  },
  {
    "url": "blog/skepticism/2017/12/index.html",
    "revision": "8fb78a5443f6a9a632e452c8f9ec1997"
  },
  {
    "url": "blog/skepticism/2017/index.html",
    "revision": "9fe2f46cffd00808b4667145c96b5f21"
  },
  {
    "url": "blog/skepticism/2018/01/21/grounding/index.html",
    "revision": "ae87238cee3fb6a71e20f4a8362411e5"
  },
  {
    "url": "blog/skepticism/2018/01/21/index.html",
    "revision": "a0ef2fec80772245e684ac75644308ce"
  },
  {
    "url": "blog/skepticism/2018/01/21/naturopath/index.html",
    "revision": "e987af6ab50f9507b849ebe2b574bd6f"
  },
  {
    "url": "blog/skepticism/2018/01/21/respen/index.html",
    "revision": "f3c491981487ef12c48810666b16ebce"
  },
  {
    "url": "blog/skepticism/2018/01/28/bears/index.html",
    "revision": "f5500a1310ee40e46f052ee96868761f"
  },
  {
    "url": "blog/skepticism/2018/01/28/index.html",
    "revision": "a92de99698b724c8a30d2e4b05063a43"
  },
  {
    "url": "blog/skepticism/2018/01/28/peppering/index.html",
    "revision": "7d106f1e07f17611f7364ef97ad22ee0"
  },
  {
    "url": "blog/skepticism/2018/01/28/pet/index.html",
    "revision": "33d86e07193a5bd36eee88d50222f888"
  },
  {
    "url": "blog/skepticism/2018/01/28/quake/index.html",
    "revision": "672fe6eec5c8e4ce11be333b4b03ee7b"
  },
  {
    "url": "blog/skepticism/2018/01/28/scientology/index.html",
    "revision": "5c43b2b98c2f2c756e8b933fda98beea"
  },
  {
    "url": "blog/skepticism/2018/01/index.html",
    "revision": "66fa2f57328c2ef74eb2f919a62940e8"
  },
  {
    "url": "blog/skepticism/2018/02/11/asa/index.html",
    "revision": "3e4ec276b68015604daf1904fc712465"
  },
  {
    "url": "blog/skepticism/2018/02/11/cannabis/index.html",
    "revision": "1304e349b75b76435d82ff7394ab32c9"
  },
  {
    "url": "blog/skepticism/2018/02/11/elon/index.html",
    "revision": "201e2913256f047a1d50167f04318e87"
  },
  {
    "url": "blog/skepticism/2018/02/11/homeopathy/index.html",
    "revision": "c92ab83988b9884edbcdef0821a5523e"
  },
  {
    "url": "blog/skepticism/2018/02/11/index.html",
    "revision": "d793d58ce9cad21c6da826c9d868c130"
  },
  {
    "url": "blog/skepticism/2018/02/11/water/index.html",
    "revision": "285fe6ff23a2ff7d972e53f2434c3fb4"
  },
  {
    "url": "blog/skepticism/2018/02/25/crisis/index.html",
    "revision": "389c450f21157efae8f5a1524c235814"
  },
  {
    "url": "blog/skepticism/2018/02/25/eggs/index.html",
    "revision": "b8e77d96f6d6e8cc6d64c87bb21350fb"
  },
  {
    "url": "blog/skepticism/2018/02/25/fsm/index.html",
    "revision": "7c0e6a31ee694d27fac7e0af463b7722"
  },
  {
    "url": "blog/skepticism/2018/02/25/index.html",
    "revision": "d8f6885b0fbc16b18b2e183b72a9f579"
  },
  {
    "url": "blog/skepticism/2018/02/25/number/index.html",
    "revision": "58c8581c18f5ffd28f566cd73855183c"
  },
  {
    "url": "blog/skepticism/2018/02/25/quackery/index.html",
    "revision": "a382db6177325406c1d5feefc03574e9"
  },
  {
    "url": "blog/skepticism/2018/02/index.html",
    "revision": "85c6754b042fcfc67ab802087cbe3abb"
  },
  {
    "url": "blog/skepticism/2018/03/11/ai/index.html",
    "revision": "04fa5b070eb6f7fcc496ca7ba364c418"
  },
  {
    "url": "blog/skepticism/2018/03/11/index.html",
    "revision": "4a6a578cef15443385fcb384d1627b3b"
  },
  {
    "url": "blog/skepticism/2018/03/11/radiation/index.html",
    "revision": "84a16c2fd245495a28eb2cbfa0404099"
  },
  {
    "url": "blog/skepticism/2018/03/11/reiki/index.html",
    "revision": "ffbcc309f2150c0394c55cd0676c6d53"
  },
  {
    "url": "blog/skepticism/2018/03/11/ufo/index.html",
    "revision": "f2201c24337eed6f0d3f66769ed64b0c"
  },
  {
    "url": "blog/skepticism/2018/03/18/ghost/index.html",
    "revision": "d4d592994c8ea4617e277a476ce3a401"
  },
  {
    "url": "blog/skepticism/2018/03/18/index.html",
    "revision": "be7e54033f18259662c42889955b21c8"
  },
  {
    "url": "blog/skepticism/2018/03/18/psychic/index.html",
    "revision": "5da1be0fe2c0e9b302cfb7ee2af9df5a"
  },
  {
    "url": "blog/skepticism/2018/03/18/quack/index.html",
    "revision": "c490f3ce1e2887201e6c1017ac09f2c6"
  },
  {
    "url": "blog/skepticism/2018/03/18/radiation/index.html",
    "revision": "a531e8d5597fef63051eab19734dea99"
  },
  {
    "url": "blog/skepticism/2018/03/index.html",
    "revision": "fad1691e9e63e3f3f00270c5c7280157"
  },
  {
    "url": "blog/skepticism/2018/04/08/calocurb/index.html",
    "revision": "161d7f411790102f17a329eb1de31f2c"
  },
  {
    "url": "blog/skepticism/2018/04/08/cam/index.html",
    "revision": "661c628c07c18c9e44fb2e259d934a8c"
  },
  {
    "url": "blog/skepticism/2018/04/08/index.html",
    "revision": "046c7474cc78bf98db0e662666a37b9b"
  },
  {
    "url": "blog/skepticism/2018/04/08/psychic/index.html",
    "revision": "2f39b413ae8fb91a76fedd3ddf669cc8"
  },
  {
    "url": "blog/skepticism/2018/04/08/vaccines/index.html",
    "revision": "cccaacca584002fb20ebce64251f7087"
  },
  {
    "url": "blog/skepticism/2018/04/15/coffee/index.html",
    "revision": "68a7fc8e930add9139a96a9e660b40fc"
  },
  {
    "url": "blog/skepticism/2018/04/15/ignorance/index.html",
    "revision": "259ae98846f6c31619449f5ad9ce0032"
  },
  {
    "url": "blog/skepticism/2018/04/15/index.html",
    "revision": "a742a62dc4950e4a3455944326bd4fbd"
  },
  {
    "url": "blog/skepticism/2018/04/15/nasa/index.html",
    "revision": "503e370b7c9d7c8f8d38eff96e8f8ca7"
  },
  {
    "url": "blog/skepticism/2018/04/15/tapu/index.html",
    "revision": "b025891dd875ad6d3c4c80f4ec84c746"
  },
  {
    "url": "blog/skepticism/2018/04/29/google/index.html",
    "revision": "9f74919da54ac5ccc05ec3cfed6b7ed3"
  },
  {
    "url": "blog/skepticism/2018/04/29/homeopathy/index.html",
    "revision": "442dd3bf7e19474e9ee05e316386f966"
  },
  {
    "url": "blog/skepticism/2018/04/29/index.html",
    "revision": "5d170fa33c5fdcdd6ef00880174a9c7e"
  },
  {
    "url": "blog/skepticism/2018/04/29/ken/index.html",
    "revision": "d65dd72d892cfa6c35cafdfa7d446b2f"
  },
  {
    "url": "blog/skepticism/2018/04/29/v2k/index.html",
    "revision": "18107d08412f7e917aa3b9520a7f9634"
  },
  {
    "url": "blog/skepticism/2018/04/index.html",
    "revision": "d39d4c7148837c22e80721e25a1a797d"
  },
  {
    "url": "blog/skepticism/2018/05/13/astrology/index.html",
    "revision": "d2a173c0ce5f58270096fc84591a17fb"
  },
  {
    "url": "blog/skepticism/2018/05/13/crystals/index.html",
    "revision": "26fe3aa89414ee37fc3be85ec2848a28"
  },
  {
    "url": "blog/skepticism/2018/05/13/dawkins/index.html",
    "revision": "239c0634635e727d8f7e05cc1b192b74"
  },
  {
    "url": "blog/skepticism/2018/05/13/index.html",
    "revision": "b0e30f85f50bcb74784eeae8c58762c5"
  },
  {
    "url": "blog/skepticism/2018/05/13/kangen/index.html",
    "revision": "0e1a5d2971b99e1a7a6056d89050539f"
  },
  {
    "url": "blog/skepticism/2018/05/13/vitamins/index.html",
    "revision": "bed001b4d92836dc47d8b3c2c4d46550"
  },
  {
    "url": "blog/skepticism/2018/05/27/flat/index.html",
    "revision": "bfc96ee284f12a63007d8fb8b7132877"
  },
  {
    "url": "blog/skepticism/2018/05/27/index.html",
    "revision": "5f1604fee9b37a6a26903ec6422a878c"
  },
  {
    "url": "blog/skepticism/2018/05/27/kangen/index.html",
    "revision": "a78ac87cbb878fbb3bcc12af0a937c9c"
  },
  {
    "url": "blog/skepticism/2018/05/27/ness/index.html",
    "revision": "8d21f7c1b9d5aae82a4437b774ef79a6"
  },
  {
    "url": "blog/skepticism/2018/05/27/oz/index.html",
    "revision": "c9da1d7d7d875229fff4ee33c7c21f2b"
  },
  {
    "url": "blog/skepticism/2018/05/27/psychic/index.html",
    "revision": "2d855c326fb44c76fad85ccce72ff19f"
  },
  {
    "url": "blog/skepticism/2018/05/index.html",
    "revision": "5f547edf3ac258885140b525e5e9df24"
  },
  {
    "url": "blog/skepticism/2018/06/10/astrology/index.html",
    "revision": "db3d97cac99f883c67593d69405dab9b"
  },
  {
    "url": "blog/skepticism/2018/06/10/index.html",
    "revision": "e7d135689406d6030293f2e7f2386d7f"
  },
  {
    "url": "blog/skepticism/2018/06/10/nhs/index.html",
    "revision": "d7b15115bd7e6fc83555aaa8f30ffa79"
  },
  {
    "url": "blog/skepticism/2018/06/10/shakti/index.html",
    "revision": "8035bcb583e1995fef2159b812375e8e"
  },
  {
    "url": "blog/skepticism/2018/06/10/weetbix/index.html",
    "revision": "a95456dfc97024fe9aae5215cf794019"
  },
  {
    "url": "blog/skepticism/2018/06/24/blasphemy/index.html",
    "revision": "80d2ca99c2bff96d9aad4b39d3340ad6"
  },
  {
    "url": "blog/skepticism/2018/06/24/cannabis/index.html",
    "revision": "f764b97623eb74300d9b399506b805cb"
  },
  {
    "url": "blog/skepticism/2018/06/24/hotdog/index.html",
    "revision": "743a8f036ea23d952206b7369ba6f1f7"
  },
  {
    "url": "blog/skepticism/2018/06/24/index.html",
    "revision": "e467bc68e1515759edced4107bd4bbe8"
  },
  {
    "url": "blog/skepticism/2018/06/24/led/index.html",
    "revision": "868a47df0e74a3261692cbb56c4a6655"
  },
  {
    "url": "blog/skepticism/2018/06/index.html",
    "revision": "d0442f2d9d3605a8f0e9e41866aca9f6"
  },
  {
    "url": "blog/skepticism/2018/07/08/bullet/index.html",
    "revision": "4a6999c9f34b994fd6e85c856e7878f9"
  },
  {
    "url": "blog/skepticism/2018/07/08/chiros/index.html",
    "revision": "395d20fa8ef1cddc5b004d050af260df"
  },
  {
    "url": "blog/skepticism/2018/07/08/hiv/index.html",
    "revision": "fa7c40088eede8deb11f6ff6c324bd73"
  },
  {
    "url": "blog/skepticism/2018/07/08/hrv/index.html",
    "revision": "b7dfc909350b5745be1dad1f76b40f90"
  },
  {
    "url": "blog/skepticism/2018/07/08/index.html",
    "revision": "1f2f5fabf52354eae9e1b4879a48dc0c"
  },
  {
    "url": "blog/skepticism/2018/07/22/cancer/index.html",
    "revision": "a14c7bf4b65d8d65a366157882f69d26"
  },
  {
    "url": "blog/skepticism/2018/07/22/index.html",
    "revision": "f0d3572c1d5a6fafdf76ee4a8d0d5f73"
  },
  {
    "url": "blog/skepticism/2018/07/22/resurrection/index.html",
    "revision": "12ce5f3845ed600121f4c889ee61a10e"
  },
  {
    "url": "blog/skepticism/2018/07/22/talc/index.html",
    "revision": "420af14c44565cf3b9a5b88dea9a5784"
  },
  {
    "url": "blog/skepticism/2018/07/22/visas/index.html",
    "revision": "addc8e60e237b423185d94c517ded600"
  },
  {
    "url": "blog/skepticism/2018/07/index.html",
    "revision": "fdd9bd19c2ce25dcfd129feb1e7569f4"
  },
  {
    "url": "blog/skepticism/2018/08/05/conf/index.html",
    "revision": "8ae26758b6923d6471fe047c60ed06ce"
  },
  {
    "url": "blog/skepticism/2018/08/05/index.html",
    "revision": "94f9642ba7f1cc4ad978d85f8a0d6d16"
  },
  {
    "url": "blog/skepticism/2018/08/05/qanon/index.html",
    "revision": "1a459062b6fe3a9f9d4143fd647c2240"
  },
  {
    "url": "blog/skepticism/2018/08/19/index.html",
    "revision": "dc0c417cfa3f575901f51f27978e23ba"
  },
  {
    "url": "blog/skepticism/2018/08/19/jw/index.html",
    "revision": "633b5853754655eda37b3aa87d886388"
  },
  {
    "url": "blog/skepticism/2018/08/index.html",
    "revision": "04c92c01ef8f9119374ed98b82cec5cd"
  },
  {
    "url": "blog/skepticism/2018/09/02/allergy/index.html",
    "revision": "e1a5fb167d334c6ba98a8c8a2ec63a45"
  },
  {
    "url": "blog/skepticism/2018/09/02/catholic/index.html",
    "revision": "5b8dd8138f3baaa0a80496e669f39f2c"
  },
  {
    "url": "blog/skepticism/2018/09/02/index.html",
    "revision": "54b5ae27385a21ac0aa13b7093dd39d5"
  },
  {
    "url": "blog/skepticism/2018/09/02/jw/index.html",
    "revision": "12bf2150ec65c5c8323be5fa9da1ef76"
  },
  {
    "url": "blog/skepticism/2018/09/02/sen/index.html",
    "revision": "c5a2b74580cba7aa5b9414beaca99799"
  },
  {
    "url": "blog/skepticism/2018/09/16/1080/index.html",
    "revision": "4bbb1d0d1aa3153872a2f0c0db4e15f1"
  },
  {
    "url": "blog/skepticism/2018/09/16/church/index.html",
    "revision": "c1b49bded78e00f115041ea86eb2d2db"
  },
  {
    "url": "blog/skepticism/2018/09/16/index.html",
    "revision": "4852a8975a282887a4f6e1f09d82914a"
  },
  {
    "url": "blog/skepticism/2018/09/16/jones/index.html",
    "revision": "40569ac3ec0789b287dce65c7cc1adc5"
  },
  {
    "url": "blog/skepticism/2018/09/16/scammers/index.html",
    "revision": "9c75bd1f5bf0702d7b1e5f9556f16b4a"
  },
  {
    "url": "blog/skepticism/2018/09/30/index.html",
    "revision": "ca7aae3bb776dbb86db3393f450c7fde"
  },
  {
    "url": "blog/skepticism/2018/09/30/jw/index.html",
    "revision": "2d21ea9e4ce434ccd01a4a8edf1a0b57"
  },
  {
    "url": "blog/skepticism/2018/09/30/oto/index.html",
    "revision": "73ce2ca4c5b0ad248d78667273d86936"
  },
  {
    "url": "blog/skepticism/2018/09/30/who/index.html",
    "revision": "cdb136a0e618eb608fc18b67ce511628"
  },
  {
    "url": "blog/skepticism/2018/09/index.html",
    "revision": "e2714e9b5e6b5671ac5953e28da8300a"
  },
  {
    "url": "blog/skepticism/2018/10/14/hacked/index.html",
    "revision": "59dee09f310339a597bac4a5113560d3"
  },
  {
    "url": "blog/skepticism/2018/10/14/index.html",
    "revision": "a252b370b45e85698bc5a4494cab75af"
  },
  {
    "url": "blog/skepticism/2018/10/14/kangen/index.html",
    "revision": "94aa5f3399e185f37c160c8476d16cf5"
  },
  {
    "url": "blog/skepticism/2018/10/14/pakistan/index.html",
    "revision": "4ce77fcd206bf7305bc9d14d58610974"
  },
  {
    "url": "blog/skepticism/2018/10/14/sarah/index.html",
    "revision": "0657fdb8808931af9eab3b0af1c09a0d"
  },
  {
    "url": "blog/skepticism/2018/10/28/blasphemy/index.html",
    "revision": "41fd1222f70168898d3d00229ae07c4d"
  },
  {
    "url": "blog/skepticism/2018/10/28/hrv/index.html",
    "revision": "e21f7644fabe4b1ee2b1be6d93bf4d43"
  },
  {
    "url": "blog/skepticism/2018/10/28/index.html",
    "revision": "2c7a82d16920c4b3fa0e28762b3b0b4a"
  },
  {
    "url": "blog/skepticism/2018/10/28/jesus/index.html",
    "revision": "c75178b73b85c33ba26071da04f49060"
  },
  {
    "url": "blog/skepticism/2018/10/28/natural/index.html",
    "revision": "046375928bcf0fea67fb81b27e370a39"
  },
  {
    "url": "blog/skepticism/2018/10/index.html",
    "revision": "b4a89a5b4e768c4967dd290dc0378cd7"
  },
  {
    "url": "blog/skepticism/2018/11/04/bibi/index.html",
    "revision": "2b65d249470a7d45b02472abb30e435f"
  },
  {
    "url": "blog/skepticism/2018/11/04/index.html",
    "revision": "3f0e7c69d935b9463d479d2f55f108fb"
  },
  {
    "url": "blog/skepticism/2018/11/04/jesus/index.html",
    "revision": "af9f3b4153205d8457d7a47f1a0a3ec3"
  },
  {
    "url": "blog/skepticism/2018/11/04/obdii/index.html",
    "revision": "17ceb9718c3160f18fe2b386a87c3593"
  },
  {
    "url": "blog/skepticism/2018/11/04/sleepdrops/index.html",
    "revision": "236de2c01d75bc89c25179a14d8f92a4"
  },
  {
    "url": "blog/skepticism/2018/11/index.html",
    "revision": "73bad98927d3c2cd8ade89f799e3364f"
  },
  {
    "url": "blog/skepticism/2018/12/02/ark/index.html",
    "revision": "79fdd270bb7b96ace815590e7fccf156"
  },
  {
    "url": "blog/skepticism/2018/12/02/green/index.html",
    "revision": "cff13a2cfee74b5ac396a87fc86891e0"
  },
  {
    "url": "blog/skepticism/2018/12/02/index.html",
    "revision": "0de52d57d66ecd479c47a78f33370756"
  },
  {
    "url": "blog/skepticism/2018/12/02/ri/index.html",
    "revision": "ca7a1daea5d00136d180611bc7249a28"
  },
  {
    "url": "blog/skepticism/2018/12/16/blasphemy/index.html",
    "revision": "e53494772261f12fc29a50a011c6d1f9"
  },
  {
    "url": "blog/skepticism/2018/12/16/index.html",
    "revision": "e6e4ae9e786a7eb747cfaa61f2d3fdec"
  },
  {
    "url": "blog/skepticism/2018/12/16/sleepdrops/index.html",
    "revision": "c1057549fa5d9a574830d70f73df4886"
  },
  {
    "url": "blog/skepticism/2018/12/16/tekiri/index.html",
    "revision": "f3f6e134436fb097cc013e86bc7b40d3"
  },
  {
    "url": "blog/skepticism/2018/12/index.html",
    "revision": "06d80a5bad4da2e7d5678b4f5144a609"
  },
  {
    "url": "blog/skepticism/2018/index.html",
    "revision": "1b199d80c37ac7d8ba6a65ab0fd6ef05"
  },
  {
    "url": "blog/skepticism/index.html",
    "revision": "8883dd647cbac7f4ba59495f3e22d534"
  },
  {
    "url": "blog/tag/index.html",
    "revision": "ee7c428b88e911e92304566db5e8e6ea"
  },
  {
    "url": "contact/index.html",
    "revision": "f70d6f05ebfd45fe09a1efc634fa0131"
  },
  {
    "url": "cv/cover/index.html",
    "revision": "5cbbf378691316738528782cb84009a2"
  },
  {
    "url": "cv/full.html",
    "revision": "c9273649046410054d9bc5c74320429f"
  },
  {
    "url": "cv/full/index.html",
    "revision": "33ecd5652f8d6c864803c850b3b4a910"
  },
  {
    "url": "cv/index.html",
    "revision": "20c8f001c629fd3ab7802f13d75c2d3d"
  },
  {
    "url": "cv/short.html",
    "revision": "e4df987819b86073f552fd8e5d082879"
  },
  {
    "url": "googlee25d0c06da891164.html",
    "revision": "0defe75660212f417b90c5affcd03380"
  },
  {
    "url": "index.html",
    "revision": "a667910174093ee1411d9816e87f696e"
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
    "revision": "acfbfed3736b154f809ca1986849739d"
  },
  {
    "url": "media/me/index.html",
    "revision": "449b54b586d420b70b3d268a2e7553e3"
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
    "revision": "6134c211bc7a66485b5e143d092891fd"
  },
  {
    "url": "status/index.html",
    "revision": "40c4fc012a3315c51d19d6ac311f9c91"
  },
  {
    "url": "status/steam/index.html",
    "revision": "0b1e3efeab3e384eb48c0b43df38a58c"
  },
  {
    "url": "status/twitter/index.html",
    "revision": "14e82077863f2e792c15c92c7c630f41"
  },
  {
    "url": "status/wikipedia/index.html",
    "revision": "2aa651437cb58e4c3e059dc2bc00130f"
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
