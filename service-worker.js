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
    "revision": "72b7adec8e915bc8662e2c27beba18c1"
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
    "revision": "4f74b05d6238c7a2df8b86175cc87aaa"
  },
  {
    "url": "assets/js/101.js",
    "revision": "a2aa993b6d727710f3c3a61d3c9cc5b0"
  },
  {
    "url": "assets/js/102.js",
    "revision": "2cd24cd040edcd50d9e0ee92cc9d4cf8"
  },
  {
    "url": "assets/js/103.js",
    "revision": "0a2b031c9a1ce4ef65332fa5ecc1b80c"
  },
  {
    "url": "assets/js/104.js",
    "revision": "5a12cb399856d0edc37ec16432cd9de9"
  },
  {
    "url": "assets/js/105.js",
    "revision": "af8404bc450ffb23cbc34bee34004074"
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
    "revision": "2aaf7658c07799c75c3bf0c27a2e3a79"
  },
  {
    "url": "assets/js/11.js",
    "revision": "8c38794098e3ad8f94d16c48030641aa"
  },
  {
    "url": "assets/js/110.js",
    "revision": "af8e220d1f8e2419dee2f4d8ac99e611"
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
    "revision": "d9c7d670c3a28cdfa4b65d7363edf0bc"
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
    "revision": "f7b4956262276f5615776f0889881107"
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
    "revision": "c1495e03bf7033b76f0bc602fe6d564e"
  },
  {
    "url": "assets/js/140.js",
    "revision": "86ff71d85128e8aa2984cee3902a30d8"
  },
  {
    "url": "assets/js/141.js",
    "revision": "30979d494da2492965bae364ca39f913"
  },
  {
    "url": "assets/js/142.js",
    "revision": "e5e3c43c173b1b6996ce52321c86bf36"
  },
  {
    "url": "assets/js/143.js",
    "revision": "8f40d0bd0c31e70849b23faedfb3a5eb"
  },
  {
    "url": "assets/js/144.js",
    "revision": "497910458af792edbc408c5bad301ab5"
  },
  {
    "url": "assets/js/145.js",
    "revision": "b98a143b3b18183aefda77b6c5ae27a9"
  },
  {
    "url": "assets/js/146.js",
    "revision": "5e7d94b89eeae095e235c37346279c04"
  },
  {
    "url": "assets/js/147.js",
    "revision": "d80dc41fd2815866be7cba3025f47121"
  },
  {
    "url": "assets/js/148.js",
    "revision": "6dee04239a42946a70ed474985b39593"
  },
  {
    "url": "assets/js/149.js",
    "revision": "e4835fe5f48908c7134f3a665291ccf2"
  },
  {
    "url": "assets/js/15.js",
    "revision": "58af630227887bb6d3dff6194d8bb625"
  },
  {
    "url": "assets/js/150.js",
    "revision": "0c5ba886f42eb9444d56b08e9ca6498b"
  },
  {
    "url": "assets/js/151.js",
    "revision": "037209eba2493bd5191bb329ca855e60"
  },
  {
    "url": "assets/js/152.js",
    "revision": "921dc25a8653331d1cfa805f3adc08ed"
  },
  {
    "url": "assets/js/153.js",
    "revision": "4bfa394840f402649e39f2234e7bd6ff"
  },
  {
    "url": "assets/js/154.js",
    "revision": "b36f6bf28b452b3bc3f9c4fbefc8a9fb"
  },
  {
    "url": "assets/js/155.js",
    "revision": "b18b0b338b4eb48ce9887f16824a18d8"
  },
  {
    "url": "assets/js/156.js",
    "revision": "eaf81aaaf5cee8daa6f2df98199a2386"
  },
  {
    "url": "assets/js/157.js",
    "revision": "90c9834c9f4a8c34ac72a148fed5455d"
  },
  {
    "url": "assets/js/158.js",
    "revision": "8bdc5dcc7fd4313be34921c631d092a5"
  },
  {
    "url": "assets/js/159.js",
    "revision": "f41697df410b7fdaa99b7cb7309b7a97"
  },
  {
    "url": "assets/js/16.js",
    "revision": "801a38e208e7163a7ecf6c3231816b5d"
  },
  {
    "url": "assets/js/160.js",
    "revision": "c4d27bc007137a795bf159b664df27b5"
  },
  {
    "url": "assets/js/161.js",
    "revision": "f39ecb79e9de88e4e636999697c77892"
  },
  {
    "url": "assets/js/162.js",
    "revision": "c0bc93ece5a6bfe9dc274b4b64c70623"
  },
  {
    "url": "assets/js/163.js",
    "revision": "8b18040b22693393e59814a4ffaa3619"
  },
  {
    "url": "assets/js/164.js",
    "revision": "6db701dd84b102df89256d537150eb2c"
  },
  {
    "url": "assets/js/165.js",
    "revision": "2eb2cd8841c0e77c70531786853a6ec6"
  },
  {
    "url": "assets/js/166.js",
    "revision": "960e79ae015b7b14519bcfd683df9d41"
  },
  {
    "url": "assets/js/167.js",
    "revision": "017d1be4b3dd12126ff043a8da68c3bb"
  },
  {
    "url": "assets/js/168.js",
    "revision": "72b6664b25da315ea5d3e7f75ab3f6ab"
  },
  {
    "url": "assets/js/169.js",
    "revision": "05fcb7ce8f01ad31a666bd95756841a4"
  },
  {
    "url": "assets/js/17.js",
    "revision": "37e566ab4e021778f95db7f5167adc8b"
  },
  {
    "url": "assets/js/170.js",
    "revision": "0d219c1eb8da978e0be634511db94b3b"
  },
  {
    "url": "assets/js/171.js",
    "revision": "2b1ac87b47c0b1dd211651381981a44f"
  },
  {
    "url": "assets/js/172.js",
    "revision": "ee4ec493f61f732ca3d6d02c1bd36d4d"
  },
  {
    "url": "assets/js/173.js",
    "revision": "01e22006de363826266415f1e66d9fe1"
  },
  {
    "url": "assets/js/174.js",
    "revision": "f125d14871697e87722029a9f8838d7f"
  },
  {
    "url": "assets/js/175.js",
    "revision": "6b7bc46bb636d385d0d8f11995701988"
  },
  {
    "url": "assets/js/176.js",
    "revision": "02a5c70bb64a2d25b48d24bab73f2522"
  },
  {
    "url": "assets/js/177.js",
    "revision": "cd90e7a1dbb0d3e31a80fc90a22c0a30"
  },
  {
    "url": "assets/js/178.js",
    "revision": "fce3257b7464a7fa272f4eef510fa11b"
  },
  {
    "url": "assets/js/179.js",
    "revision": "06798de17e1f963a899e7b2a56e0e890"
  },
  {
    "url": "assets/js/18.js",
    "revision": "947b6f5a3cbc531ecef6cc3bda7e5b28"
  },
  {
    "url": "assets/js/180.js",
    "revision": "be781bbba70355698fa6200872744ff1"
  },
  {
    "url": "assets/js/181.js",
    "revision": "f3d75935d169f7c9898ceebf7cacc348"
  },
  {
    "url": "assets/js/182.js",
    "revision": "acbaa5d7605e4b5473982b4f05cf8df3"
  },
  {
    "url": "assets/js/183.js",
    "revision": "51312943b51fc6e14ea574d75e767223"
  },
  {
    "url": "assets/js/184.js",
    "revision": "c62dd64fedb93a16758e550b9e04d2bd"
  },
  {
    "url": "assets/js/185.js",
    "revision": "f909ef2dc8d41516f2a43c8f1ea0d284"
  },
  {
    "url": "assets/js/186.js",
    "revision": "103bc6a203703d4920657ed4eeddb535"
  },
  {
    "url": "assets/js/187.js",
    "revision": "c4675dd7345aa236bb3713b745bf3a10"
  },
  {
    "url": "assets/js/188.js",
    "revision": "e090cff5124f6b38837eda084105141c"
  },
  {
    "url": "assets/js/189.js",
    "revision": "a892d40165e322ed6408ec714f1e93a7"
  },
  {
    "url": "assets/js/19.js",
    "revision": "d9ca18db8b9d8d7d98a05d1aed300dfb"
  },
  {
    "url": "assets/js/190.js",
    "revision": "05ea1ebb5bb4cbeb1423ae37199c7899"
  },
  {
    "url": "assets/js/191.js",
    "revision": "62318205394400726172eb3508b998af"
  },
  {
    "url": "assets/js/192.js",
    "revision": "881538dbb83142f621a0f44b0dd3283b"
  },
  {
    "url": "assets/js/193.js",
    "revision": "7508729e22e29e8f046c3a4d32c8e3a6"
  },
  {
    "url": "assets/js/194.js",
    "revision": "cace269df4eaeeb3e5d19c4ce3b79635"
  },
  {
    "url": "assets/js/195.js",
    "revision": "c3c1a10acedc1974a5143de04d0c62d6"
  },
  {
    "url": "assets/js/196.js",
    "revision": "41dba27def1ee91d75967512f384f452"
  },
  {
    "url": "assets/js/197.js",
    "revision": "1429e9c64e70f7cd55253b1a8ccfa4e4"
  },
  {
    "url": "assets/js/198.js",
    "revision": "893516beee1e0a53f54bd2ac5617e8fc"
  },
  {
    "url": "assets/js/199.js",
    "revision": "e217673cfaf6463c01bc02b05490391b"
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
    "revision": "c76ed7c07098073560b023788f16660f"
  },
  {
    "url": "assets/js/201.js",
    "revision": "77d22089bb4a7a2f6a116d27e38ae3a1"
  },
  {
    "url": "assets/js/202.js",
    "revision": "ca7567b724d0fbd5aa7d941ea01f32ef"
  },
  {
    "url": "assets/js/203.js",
    "revision": "e719573976a5e9f3239e2118b1e62f67"
  },
  {
    "url": "assets/js/204.js",
    "revision": "901e8af9d569d18c5bf65d86e4214260"
  },
  {
    "url": "assets/js/205.js",
    "revision": "353ceba9c7670966debd32be941f17ac"
  },
  {
    "url": "assets/js/206.js",
    "revision": "e39f5c4e2da5bc1db29d03fae0fbea87"
  },
  {
    "url": "assets/js/207.js",
    "revision": "83e02a959f1a81bf6265a6bf4b3697ed"
  },
  {
    "url": "assets/js/208.js",
    "revision": "8dc886d7a6fbd60dbb67865780b2942b"
  },
  {
    "url": "assets/js/209.js",
    "revision": "6b8ddd7d6a9d10d21fee00013a1b4b69"
  },
  {
    "url": "assets/js/21.js",
    "revision": "9cf0fe0bf7d24d090bb50935d4f978d1"
  },
  {
    "url": "assets/js/210.js",
    "revision": "4e6fa5b655f358c8179c636d3889d4f0"
  },
  {
    "url": "assets/js/211.js",
    "revision": "0fb70ee5ef4bf150415a1953ab518e94"
  },
  {
    "url": "assets/js/212.js",
    "revision": "8038b0852c8646816352da0fbe38f42a"
  },
  {
    "url": "assets/js/213.js",
    "revision": "120c60cf6301904cacf1dea2923c2ccd"
  },
  {
    "url": "assets/js/214.js",
    "revision": "5c97bbe8ac5a545272890f92a6487cd2"
  },
  {
    "url": "assets/js/215.js",
    "revision": "39a811349d7666ece4c63f22c6406474"
  },
  {
    "url": "assets/js/216.js",
    "revision": "a461f5d32171184a8dc4f483cbcf9c31"
  },
  {
    "url": "assets/js/217.js",
    "revision": "d4489dc2ae10eb3ac5b396fbe6cd4acf"
  },
  {
    "url": "assets/js/218.js",
    "revision": "26fbf8410efaec9d613b487cb51c4b98"
  },
  {
    "url": "assets/js/219.js",
    "revision": "7ef1b141b91958228ed33a588fd7e9d4"
  },
  {
    "url": "assets/js/22.js",
    "revision": "26736b8b64e11dc1e64a1957bee645d1"
  },
  {
    "url": "assets/js/220.js",
    "revision": "3055ae8fb3935f704e9ce0e88a51229d"
  },
  {
    "url": "assets/js/221.js",
    "revision": "9fed5f9c15f0f40198c80c32810029ad"
  },
  {
    "url": "assets/js/222.js",
    "revision": "5dea4d2ebe17762c20a2d0ecde8a3dc7"
  },
  {
    "url": "assets/js/223.js",
    "revision": "d2c6d4011d9b56671929a1523abcc242"
  },
  {
    "url": "assets/js/224.js",
    "revision": "55fa8a0a97afe6b16d195f2cbc8ad3e3"
  },
  {
    "url": "assets/js/225.js",
    "revision": "93e95edbcdcd1af4f5292b45f8c3531d"
  },
  {
    "url": "assets/js/226.js",
    "revision": "6d2b2950dd1e2f043859a6caec077c83"
  },
  {
    "url": "assets/js/227.js",
    "revision": "3808eb8c0eff29afb948e83912573ae4"
  },
  {
    "url": "assets/js/228.js",
    "revision": "7c07469e4f988d059a9224d8a0b8775c"
  },
  {
    "url": "assets/js/229.js",
    "revision": "2df7d860804851bc4fb4b87da57a9d53"
  },
  {
    "url": "assets/js/23.js",
    "revision": "fb39bbf011cfbaffb0762b1571d1d360"
  },
  {
    "url": "assets/js/230.js",
    "revision": "2ee1edbd43fe33107f3df22ac89fa825"
  },
  {
    "url": "assets/js/231.js",
    "revision": "1ccc25e7888657df10dc2a5062d69142"
  },
  {
    "url": "assets/js/232.js",
    "revision": "75d1a5179eef14e0e97473cb027f67fd"
  },
  {
    "url": "assets/js/233.js",
    "revision": "88604b7eb40480cab7a4c2f31bee77c7"
  },
  {
    "url": "assets/js/234.js",
    "revision": "7e03020573528a7eacd3f05801e6338a"
  },
  {
    "url": "assets/js/235.js",
    "revision": "b4b5987ed1f887329265c763a02c0810"
  },
  {
    "url": "assets/js/236.js",
    "revision": "1933a23346b96d246ad9ea3bd87e6bb9"
  },
  {
    "url": "assets/js/237.js",
    "revision": "fa2e9e25d404076bf3abf1b1b8a5cc22"
  },
  {
    "url": "assets/js/238.js",
    "revision": "a42f0dcce59b138a7888d3f4f3188fba"
  },
  {
    "url": "assets/js/239.js",
    "revision": "b1331a4c5ed436d2a9d419420912a4b6"
  },
  {
    "url": "assets/js/24.js",
    "revision": "407c40a2411eb5b01294b1219c0486a8"
  },
  {
    "url": "assets/js/240.js",
    "revision": "cdfd615494b3c133ef0cad918efd49d8"
  },
  {
    "url": "assets/js/241.js",
    "revision": "54cefb62aad292c3a36ec0789601ab90"
  },
  {
    "url": "assets/js/242.js",
    "revision": "0a271793c378041e2abec04d675647fe"
  },
  {
    "url": "assets/js/243.js",
    "revision": "627138a4542a953a45dd36ef701153c9"
  },
  {
    "url": "assets/js/244.js",
    "revision": "c66bd4fc55f8f284e1d5a107a792b5fd"
  },
  {
    "url": "assets/js/245.js",
    "revision": "a1e4fb80b1b44333514c50accc1ab0f0"
  },
  {
    "url": "assets/js/246.js",
    "revision": "a250bd8fc4bc05eea1c3ee3855d4cf96"
  },
  {
    "url": "assets/js/247.js",
    "revision": "6ba4d642f7c9958ac27e2f41f244f085"
  },
  {
    "url": "assets/js/248.js",
    "revision": "e849dbfe43cd7546447da08dff4aa95d"
  },
  {
    "url": "assets/js/249.js",
    "revision": "a412b8e13e8ac61b65900010a004102c"
  },
  {
    "url": "assets/js/25.js",
    "revision": "1159cdf730171f4c19e80772c740004a"
  },
  {
    "url": "assets/js/250.js",
    "revision": "72f92c9c043ba0afe5a64e50fc1fddf0"
  },
  {
    "url": "assets/js/251.js",
    "revision": "15461e049a33e91ad7e54ea5a5cc8c83"
  },
  {
    "url": "assets/js/252.js",
    "revision": "992c73092f4011afe1a0acfacc7eca57"
  },
  {
    "url": "assets/js/253.js",
    "revision": "53f5dad975338a62ea8c87b2de97f3cb"
  },
  {
    "url": "assets/js/254.js",
    "revision": "6f3ae8757119ff01724c35016077a7c9"
  },
  {
    "url": "assets/js/255.js",
    "revision": "680868456d7a3bf49c18a5750bda9b2d"
  },
  {
    "url": "assets/js/256.js",
    "revision": "f00f08b10d4af798d216e40e811f471a"
  },
  {
    "url": "assets/js/257.js",
    "revision": "598f4f944cd7aa407dc24be87172f05c"
  },
  {
    "url": "assets/js/258.js",
    "revision": "af62e4e0dfb3933091673a58be3c149c"
  },
  {
    "url": "assets/js/259.js",
    "revision": "fbbbe87cc5c74441461da31f7663c901"
  },
  {
    "url": "assets/js/26.js",
    "revision": "971dbe549de74b6a8e89a16bacfcf175"
  },
  {
    "url": "assets/js/260.js",
    "revision": "006a9b1c3778dc61da7b711ed9b0a4d2"
  },
  {
    "url": "assets/js/261.js",
    "revision": "1b7eb3b39503f95abc824c1d28fe9fc1"
  },
  {
    "url": "assets/js/262.js",
    "revision": "0b3845ace14864497b77074f78923664"
  },
  {
    "url": "assets/js/263.js",
    "revision": "cc82e4b84f9767444477a6eecff09e1e"
  },
  {
    "url": "assets/js/264.js",
    "revision": "1e12f2ebeb2bf5ac7c52aaf1788bc249"
  },
  {
    "url": "assets/js/265.js",
    "revision": "1edb6d82673cd3649f9498ec79e926aa"
  },
  {
    "url": "assets/js/266.js",
    "revision": "a53240c6f09d8212a628911a1a0c15b2"
  },
  {
    "url": "assets/js/267.js",
    "revision": "be36e81cd1c9cc3cf9771e4310b4f726"
  },
  {
    "url": "assets/js/268.js",
    "revision": "cc4615392ff7984990de34c30a8cd63a"
  },
  {
    "url": "assets/js/269.js",
    "revision": "dcf04b400ed4383453f875f18ba4e79b"
  },
  {
    "url": "assets/js/27.js",
    "revision": "a94cd44d1465ca45b8de8bb9f6277a8a"
  },
  {
    "url": "assets/js/270.js",
    "revision": "4480c88cbf1343fdca476ab0d04829e8"
  },
  {
    "url": "assets/js/271.js",
    "revision": "805e3ed42d1c09a3d41d3f0fccaaff79"
  },
  {
    "url": "assets/js/272.js",
    "revision": "b4cf465a99b257cbb78f407a9c123ec8"
  },
  {
    "url": "assets/js/273.js",
    "revision": "8beb4c773eab9cec10dfc2c75d8a7de7"
  },
  {
    "url": "assets/js/274.js",
    "revision": "92dd5eae0f6410d28bc96942e99398e4"
  },
  {
    "url": "assets/js/275.js",
    "revision": "1e13ee9787d3dc5e2e7b8ce1ced46451"
  },
  {
    "url": "assets/js/276.js",
    "revision": "1cb4f4b662ada828a6730cc45b1fed07"
  },
  {
    "url": "assets/js/277.js",
    "revision": "699a440b981238935e960e53444cae9c"
  },
  {
    "url": "assets/js/278.js",
    "revision": "6a00e6390f4eb504b34b004faa8dd294"
  },
  {
    "url": "assets/js/279.js",
    "revision": "9a672643e8aa9b08e9b1f42d53e87319"
  },
  {
    "url": "assets/js/28.js",
    "revision": "7365483148e4821833d6c2c39f49c59c"
  },
  {
    "url": "assets/js/280.js",
    "revision": "85743456a15f0956e2ba08f9c4a12714"
  },
  {
    "url": "assets/js/281.js",
    "revision": "886957882bde3f224f64bd86cfb8fadc"
  },
  {
    "url": "assets/js/282.js",
    "revision": "8023d887945fb5d6c0e6480bcb026178"
  },
  {
    "url": "assets/js/283.js",
    "revision": "b95a95d51bb462cabbcddabc687caa96"
  },
  {
    "url": "assets/js/284.js",
    "revision": "17d1dda0a2c57b45f3fe5396502b603c"
  },
  {
    "url": "assets/js/285.js",
    "revision": "33094a31b5469bf4a63e5c5a2b18a469"
  },
  {
    "url": "assets/js/286.js",
    "revision": "dea77f9b1b95061fc58158f315301448"
  },
  {
    "url": "assets/js/287.js",
    "revision": "e46a5fcaed2b263b9ad09f52ac9767a8"
  },
  {
    "url": "assets/js/288.js",
    "revision": "aacbe1bd61850469a2c9f58f6595c4f3"
  },
  {
    "url": "assets/js/289.js",
    "revision": "13f0762f497227d7341995ef991f5b6f"
  },
  {
    "url": "assets/js/29.js",
    "revision": "77d0270c62be757c89826c003abbd7a1"
  },
  {
    "url": "assets/js/290.js",
    "revision": "c72144c8149ba82d91cf8923a5b08204"
  },
  {
    "url": "assets/js/291.js",
    "revision": "35ebb6535a195e72df7c18479cf71ee2"
  },
  {
    "url": "assets/js/292.js",
    "revision": "cc7a7a18b80c9b7b286e57e8a9cbdb04"
  },
  {
    "url": "assets/js/293.js",
    "revision": "b7bf24370ad1fdccfb06b1d91aae3f38"
  },
  {
    "url": "assets/js/294.js",
    "revision": "8d073cc76b2aabb51b24893f45dafd96"
  },
  {
    "url": "assets/js/295.js",
    "revision": "3e41991684524ce77022869c06cc5534"
  },
  {
    "url": "assets/js/296.js",
    "revision": "2fe5c5010a111034ec16e0a5659dac3d"
  },
  {
    "url": "assets/js/297.js",
    "revision": "b837101e7a59a4d32565a01a2e7c6ee7"
  },
  {
    "url": "assets/js/298.js",
    "revision": "b3aad37fde89c9f6dba726bfda19939d"
  },
  {
    "url": "assets/js/299.js",
    "revision": "2a47a0ee3c5404402b88065e01dd012b"
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
    "revision": "62d81435239f52ddf3e9217e6645b529"
  },
  {
    "url": "assets/js/301.js",
    "revision": "bc90e43544b54bb89c06a6bfef881334"
  },
  {
    "url": "assets/js/302.js",
    "revision": "83f5902859ad6a7899f3b916946e5102"
  },
  {
    "url": "assets/js/303.js",
    "revision": "c628a3e526cdb0cbc41689b9147acbeb"
  },
  {
    "url": "assets/js/304.js",
    "revision": "b42161de24c102ef840df096eaead083"
  },
  {
    "url": "assets/js/305.js",
    "revision": "29749f362c498ebe294ad1353420d704"
  },
  {
    "url": "assets/js/306.js",
    "revision": "2b5b4b589f5258dd946f125aa17e955e"
  },
  {
    "url": "assets/js/307.js",
    "revision": "fb1d58946c8dfb974fc601edfb9e1cfd"
  },
  {
    "url": "assets/js/308.js",
    "revision": "dcea6cf7da1bf077b52ff32a3c48fdf5"
  },
  {
    "url": "assets/js/309.js",
    "revision": "6e18c5e1cbc445838dd0a27bfc27f4e0"
  },
  {
    "url": "assets/js/31.js",
    "revision": "d1823810866061ba2ca3ea674d28410e"
  },
  {
    "url": "assets/js/310.js",
    "revision": "d164ddaec0a1b5ba2bcc2efe42fbab54"
  },
  {
    "url": "assets/js/311.js",
    "revision": "7d2ceed3d1b83a481871141ce19c744b"
  },
  {
    "url": "assets/js/312.js",
    "revision": "021157277c82c26bb557c1e0a57f3685"
  },
  {
    "url": "assets/js/313.js",
    "revision": "fed60ce5d7d21a642b0e2707fddb85df"
  },
  {
    "url": "assets/js/314.js",
    "revision": "55c40f85761d048f01c473e0d094b0dc"
  },
  {
    "url": "assets/js/315.js",
    "revision": "26cda71db4f276ffdeb1ea5e54c02bb1"
  },
  {
    "url": "assets/js/316.js",
    "revision": "92178da561efacca00b41ff34da3d4be"
  },
  {
    "url": "assets/js/317.js",
    "revision": "85eae0f7abdd0ea88b84f75d4046485c"
  },
  {
    "url": "assets/js/318.js",
    "revision": "e221641599b01ad157bd3aa1614a4bb4"
  },
  {
    "url": "assets/js/319.js",
    "revision": "7e1aa87c215666b98c001a6ebc149ab0"
  },
  {
    "url": "assets/js/32.js",
    "revision": "d093e3d86170515685552d845db7e323"
  },
  {
    "url": "assets/js/320.js",
    "revision": "74fa0d1e2012de24d068157243c2b26d"
  },
  {
    "url": "assets/js/321.js",
    "revision": "3dd8c4ce5b51e6cdab6581c5030d17dc"
  },
  {
    "url": "assets/js/322.js",
    "revision": "753ff2a08227faefdbe0db4ed21d92f9"
  },
  {
    "url": "assets/js/323.js",
    "revision": "c9e77a79a7f85083985d86ffa53243bc"
  },
  {
    "url": "assets/js/324.js",
    "revision": "5e5a6639514003897ad5a1359726f36f"
  },
  {
    "url": "assets/js/325.js",
    "revision": "e7bd8b451a743d87d8b6e851d4677aa8"
  },
  {
    "url": "assets/js/326.js",
    "revision": "75a296de788c9f0422c17091e1b26b9a"
  },
  {
    "url": "assets/js/327.js",
    "revision": "e873beaad1bd06555c9cbe2b3ff84bde"
  },
  {
    "url": "assets/js/328.js",
    "revision": "ae9582174d08046d360e9551eebe3214"
  },
  {
    "url": "assets/js/329.js",
    "revision": "a5e5d645b3d5355e3516b2a3bbd02464"
  },
  {
    "url": "assets/js/33.js",
    "revision": "19111526136f1c2a98890e98ec4ca923"
  },
  {
    "url": "assets/js/330.js",
    "revision": "46637b186eff6ea51f23d7324e4903db"
  },
  {
    "url": "assets/js/331.js",
    "revision": "2ed2784e48913a6a93e5b3da134c443e"
  },
  {
    "url": "assets/js/332.js",
    "revision": "a30bccb4e9ba9508e09a894f18a8e221"
  },
  {
    "url": "assets/js/333.js",
    "revision": "c61df7e486052a67ed0e143b0c6f1edc"
  },
  {
    "url": "assets/js/334.js",
    "revision": "e98b496753a18d53157cf4d9f929fe7e"
  },
  {
    "url": "assets/js/335.js",
    "revision": "c4a9ce8a1cf96df9e08fafa022956b51"
  },
  {
    "url": "assets/js/336.js",
    "revision": "ba1712b38500aeb0a83c1fef5155f638"
  },
  {
    "url": "assets/js/337.js",
    "revision": "6c1574977d7245cb017ca073bf435de0"
  },
  {
    "url": "assets/js/338.js",
    "revision": "2b121bfc0428b8c622388d12222d83b3"
  },
  {
    "url": "assets/js/339.js",
    "revision": "6d5c229599c36d3a42ab91f2b6d42930"
  },
  {
    "url": "assets/js/34.js",
    "revision": "efb5ce1be83956d7a90cfe629c5045af"
  },
  {
    "url": "assets/js/340.js",
    "revision": "ef1a448272eb2af8a36e5346cdba438e"
  },
  {
    "url": "assets/js/341.js",
    "revision": "cce6a5acf26fcf1c06cf4eee19f34794"
  },
  {
    "url": "assets/js/342.js",
    "revision": "e3fbaaecfb8667d39555a080f8c22492"
  },
  {
    "url": "assets/js/343.js",
    "revision": "4fea1b0202624c906faa1a912e42d2f8"
  },
  {
    "url": "assets/js/344.js",
    "revision": "c149c7dafb1e68799d0f94f2260d732c"
  },
  {
    "url": "assets/js/345.js",
    "revision": "53402b73b49afea31f7ab60e377cc942"
  },
  {
    "url": "assets/js/346.js",
    "revision": "c4e9e92cb3294ac95298907085279d16"
  },
  {
    "url": "assets/js/347.js",
    "revision": "2df9d98896d24c723bbf362165443259"
  },
  {
    "url": "assets/js/348.js",
    "revision": "56602f1349c39b1decd8cb36bffd93a4"
  },
  {
    "url": "assets/js/349.js",
    "revision": "e173461e3f69cbce49630231ed76f287"
  },
  {
    "url": "assets/js/35.js",
    "revision": "0ad105763721c3972b1e07ba1534e595"
  },
  {
    "url": "assets/js/350.js",
    "revision": "4b5d0c4e882ab367d6de04488412f04a"
  },
  {
    "url": "assets/js/351.js",
    "revision": "15c830afa737e688c885cc236b610da6"
  },
  {
    "url": "assets/js/352.js",
    "revision": "5f64126e95ed18875ecefa759039451b"
  },
  {
    "url": "assets/js/353.js",
    "revision": "a3b4d6d05a61d37e7285bd436b6fb91c"
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
    "revision": "f221951432ef9d4f335a93580680577a"
  },
  {
    "url": "assets/js/357.js",
    "revision": "4bb49075a57a73c9d60af0ed32c4e853"
  },
  {
    "url": "assets/js/358.js",
    "revision": "f03844013a8a5a4b3cd49c7176a3c71f"
  },
  {
    "url": "assets/js/359.js",
    "revision": "7b885063619ec44f7011cc51f5f6e69c"
  },
  {
    "url": "assets/js/36.js",
    "revision": "6b525fe42505dcc00b3d03f38cfdb199"
  },
  {
    "url": "assets/js/360.js",
    "revision": "3311e59a244a01f14889411ce3b5501c"
  },
  {
    "url": "assets/js/361.js",
    "revision": "d0113d97fb2a528d64c5c4ee63c07eaa"
  },
  {
    "url": "assets/js/362.js",
    "revision": "7c790b6431b65d59788e49cca5dfd945"
  },
  {
    "url": "assets/js/363.js",
    "revision": "0fc0a98ac3d00c481c77ac111590cbca"
  },
  {
    "url": "assets/js/364.js",
    "revision": "be260f52448d8b3a31075cfc39aa2353"
  },
  {
    "url": "assets/js/365.js",
    "revision": "aeb36029ce755cbc73fe04c2f346d35b"
  },
  {
    "url": "assets/js/366.js",
    "revision": "f88ba0b49cc5f6e66d10e458bb123ad1"
  },
  {
    "url": "assets/js/367.js",
    "revision": "372ef40936b76024367f22fac1b4271c"
  },
  {
    "url": "assets/js/368.js",
    "revision": "512038afd688b73a4c34cba60940f722"
  },
  {
    "url": "assets/js/369.js",
    "revision": "490817a7b78ec18902132bef6c183a8c"
  },
  {
    "url": "assets/js/37.js",
    "revision": "66cf908fce353430f0aa3dda60f4ee62"
  },
  {
    "url": "assets/js/370.js",
    "revision": "e1d84b36fe4c3ee2cc575314e1339983"
  },
  {
    "url": "assets/js/371.js",
    "revision": "b465e029f0ce6624be08318c9c887adc"
  },
  {
    "url": "assets/js/372.js",
    "revision": "277f01aa54d57f8b30594388c0605775"
  },
  {
    "url": "assets/js/373.js",
    "revision": "39ed62f10797ce0c1fb559a60aed9c64"
  },
  {
    "url": "assets/js/374.js",
    "revision": "23ef1cf943e21cdef7db819fe4497ca7"
  },
  {
    "url": "assets/js/375.js",
    "revision": "bdf65ea46f0d0f6e5cf019ae90df064e"
  },
  {
    "url": "assets/js/376.js",
    "revision": "925b0d61dbedf460ce29551bf69af126"
  },
  {
    "url": "assets/js/377.js",
    "revision": "778d37f277e0ba2c649e95c4958d80fa"
  },
  {
    "url": "assets/js/378.js",
    "revision": "90088af75145066b97c8c296408b6e0e"
  },
  {
    "url": "assets/js/379.js",
    "revision": "65aa70fca411dbc27abd771c1e1d9f60"
  },
  {
    "url": "assets/js/38.js",
    "revision": "64627fd2097ddf2fe4585e551e67a260"
  },
  {
    "url": "assets/js/380.js",
    "revision": "229f33b25667641c031816aa3365585b"
  },
  {
    "url": "assets/js/381.js",
    "revision": "67b51f1a2453ae985a241c4c11f278bc"
  },
  {
    "url": "assets/js/382.js",
    "revision": "c43184ab1a89baffd05a014ab5f41b81"
  },
  {
    "url": "assets/js/383.js",
    "revision": "c79fbd18c1fb0e7cc9a1570acdaa7ffb"
  },
  {
    "url": "assets/js/384.js",
    "revision": "c3c71b41ebe38273d0296a74efff987c"
  },
  {
    "url": "assets/js/385.js",
    "revision": "630cf006d8ca502b0be42994507139ec"
  },
  {
    "url": "assets/js/386.js",
    "revision": "4d6efdd0623ed966ad7d9871c242a6f7"
  },
  {
    "url": "assets/js/387.js",
    "revision": "5d0f7eeb98330afb8da666e0a3564607"
  },
  {
    "url": "assets/js/388.js",
    "revision": "eadc8f1c0ba8f097be49e35ad40e58ea"
  },
  {
    "url": "assets/js/389.js",
    "revision": "68eee9167288ab3c59cd96a7c8ec85b8"
  },
  {
    "url": "assets/js/39.js",
    "revision": "c4463fcbdd9c7ce3a99bbf4543e11e97"
  },
  {
    "url": "assets/js/390.js",
    "revision": "4646fe5919bc7d3331d8e051dbeafb36"
  },
  {
    "url": "assets/js/391.js",
    "revision": "7a07c221f0d246904804803ec5186eb9"
  },
  {
    "url": "assets/js/392.js",
    "revision": "5aa615f451b5f0e2d7c479246f4e4ff1"
  },
  {
    "url": "assets/js/393.js",
    "revision": "026322db9437b5480873bece07c4ea9f"
  },
  {
    "url": "assets/js/394.js",
    "revision": "86ae718d03d30f76095926059623535e"
  },
  {
    "url": "assets/js/395.js",
    "revision": "9e89843169798ea68cbe823153674694"
  },
  {
    "url": "assets/js/396.js",
    "revision": "72749ab3773c209e6676eef162a3ed69"
  },
  {
    "url": "assets/js/397.js",
    "revision": "43f9767d5423a68a9af00b081a7964a2"
  },
  {
    "url": "assets/js/398.js",
    "revision": "34e98df4e9b733501884ed53025934c6"
  },
  {
    "url": "assets/js/399.js",
    "revision": "eaa8c4f9b34366953ad608d07bdb5974"
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
    "revision": "d968d74bf3fa808f432b540d31b03b7c"
  },
  {
    "url": "assets/js/401.js",
    "revision": "19e3ecbd6e5809b7a81d9ef7fec0eade"
  },
  {
    "url": "assets/js/402.js",
    "revision": "f2bdab5efc34707b746ab010c2b840de"
  },
  {
    "url": "assets/js/403.js",
    "revision": "5975a4fc85b9161fe6c8d50d503f3230"
  },
  {
    "url": "assets/js/404.js",
    "revision": "55ccb0b1485055ac2ce0098ed12810bd"
  },
  {
    "url": "assets/js/405.js",
    "revision": "1eef20d2fdae4d30970e46e56fe9e939"
  },
  {
    "url": "assets/js/406.js",
    "revision": "d8c34d2b37e5c092123d8676112a5e1e"
  },
  {
    "url": "assets/js/407.js",
    "revision": "093b7016ccef4ab31cc8584cac287a2d"
  },
  {
    "url": "assets/js/408.js",
    "revision": "40d9891d4c666242cd00410712be65ec"
  },
  {
    "url": "assets/js/409.js",
    "revision": "69f333d007f2b8ab1e211d7eb6867af6"
  },
  {
    "url": "assets/js/41.js",
    "revision": "7951b828ca6cf8b5a721c68fb7aca425"
  },
  {
    "url": "assets/js/410.js",
    "revision": "9cc961c95f471d346caeeb74f8dc1c92"
  },
  {
    "url": "assets/js/411.js",
    "revision": "c7d25c9657aaf31a54fbd9ff8c91167f"
  },
  {
    "url": "assets/js/412.js",
    "revision": "26d5230be20a687d9d52a2731a4e2093"
  },
  {
    "url": "assets/js/413.js",
    "revision": "007be0af3ddc379c5c4983ce44d63159"
  },
  {
    "url": "assets/js/414.js",
    "revision": "3c518da748df4082f203d97983bbc630"
  },
  {
    "url": "assets/js/415.js",
    "revision": "204e8eabb1b3d44a73b6bde18757a604"
  },
  {
    "url": "assets/js/416.js",
    "revision": "fb55afa32e5b878ad9a3db9bd8306f66"
  },
  {
    "url": "assets/js/417.js",
    "revision": "f3312f3908e7dee0e3ad6e4e158c93db"
  },
  {
    "url": "assets/js/418.js",
    "revision": "8a711a91766c3eb10bc1cb28375c5920"
  },
  {
    "url": "assets/js/419.js",
    "revision": "2b8135373133115562c73b56819662d0"
  },
  {
    "url": "assets/js/42.js",
    "revision": "deaaee52e8eff3ceed09d1d59929c7cc"
  },
  {
    "url": "assets/js/420.js",
    "revision": "bc020c10af00c4bd4138463df3c5da40"
  },
  {
    "url": "assets/js/421.js",
    "revision": "b7e7a65ee36122d9235d84e30168454a"
  },
  {
    "url": "assets/js/422.js",
    "revision": "99d897aa3ce5fe5902e1fefd6dfade87"
  },
  {
    "url": "assets/js/423.js",
    "revision": "c940f656bd7ed3f6bcbcee7f171d9ddf"
  },
  {
    "url": "assets/js/424.js",
    "revision": "b52cb5dbaa2cf0a5a95c92228b45f90b"
  },
  {
    "url": "assets/js/425.js",
    "revision": "f884b7bdc2b96077337e1b43d3ba0184"
  },
  {
    "url": "assets/js/426.js",
    "revision": "93d0c13d9eee7789b6e19f447b816288"
  },
  {
    "url": "assets/js/427.js",
    "revision": "25ca8b24a43a22409e0bf39cea6ab006"
  },
  {
    "url": "assets/js/428.js",
    "revision": "81552764abf06b0d94a8fcbaa7e15e3e"
  },
  {
    "url": "assets/js/429.js",
    "revision": "ff4741e1b98eb887a7503becb896c5ce"
  },
  {
    "url": "assets/js/43.js",
    "revision": "dbb88cabf28d115c3db4678a0fa767da"
  },
  {
    "url": "assets/js/430.js",
    "revision": "fdb08c3b3a99ffaa439c86ab2056d58c"
  },
  {
    "url": "assets/js/431.js",
    "revision": "bfdb98fa99764618a61263a30bcef677"
  },
  {
    "url": "assets/js/432.js",
    "revision": "e2a9763208f32c3172582a765c7b3811"
  },
  {
    "url": "assets/js/433.js",
    "revision": "c9cbb618bf4bfa92d8d67397c6c33175"
  },
  {
    "url": "assets/js/434.js",
    "revision": "1ea774297307f600180f92c43614b94c"
  },
  {
    "url": "assets/js/435.js",
    "revision": "e35970d6d533dc4344cd23e28b60a101"
  },
  {
    "url": "assets/js/436.js",
    "revision": "b7d2face8df2f713794e0df569c89820"
  },
  {
    "url": "assets/js/437.js",
    "revision": "74e82fc66c6b67fe42ab283308636ae1"
  },
  {
    "url": "assets/js/438.js",
    "revision": "442c7adb7515644f8bd5e0ab0fd5a8e8"
  },
  {
    "url": "assets/js/439.js",
    "revision": "59e9b289056b7c94b62b1b41054e71bb"
  },
  {
    "url": "assets/js/44.js",
    "revision": "ea012fab0ae27adf790786b64c65a630"
  },
  {
    "url": "assets/js/440.js",
    "revision": "1c323c9817694e6f7fb642e096e28cec"
  },
  {
    "url": "assets/js/441.js",
    "revision": "683ed4f9529a000a7ff1cd0847ea6048"
  },
  {
    "url": "assets/js/442.js",
    "revision": "2490d608f9618c08085ca799214aebec"
  },
  {
    "url": "assets/js/443.js",
    "revision": "a62549aa776cebe9dee3d48bc563b505"
  },
  {
    "url": "assets/js/444.js",
    "revision": "4148534316d538eb7aeffbbca416e6bc"
  },
  {
    "url": "assets/js/445.js",
    "revision": "96fc0e6accfa813e5c511aea6dcf97d1"
  },
  {
    "url": "assets/js/446.js",
    "revision": "6ec4372debbec815773934d4a072fefe"
  },
  {
    "url": "assets/js/447.js",
    "revision": "c331291a592dcabeed0d0fe9d6cb5988"
  },
  {
    "url": "assets/js/448.js",
    "revision": "f87a6047094cc312ac140595d4eab06e"
  },
  {
    "url": "assets/js/449.js",
    "revision": "8c9375f84a8987656f21c61abf771912"
  },
  {
    "url": "assets/js/45.js",
    "revision": "169a8bf911965391c1f544429a33b76f"
  },
  {
    "url": "assets/js/450.js",
    "revision": "3ca016764abf031540ad74df68dafa63"
  },
  {
    "url": "assets/js/451.js",
    "revision": "6f06b774496362f2885f0987a61e0c05"
  },
  {
    "url": "assets/js/452.js",
    "revision": "f11485de2db524f40585385b13f3796c"
  },
  {
    "url": "assets/js/453.js",
    "revision": "4b1dfd72fe4fc0401c8b84d18c450cdd"
  },
  {
    "url": "assets/js/454.js",
    "revision": "991d2d7b514feb53b9ab468c616d118b"
  },
  {
    "url": "assets/js/455.js",
    "revision": "7588877b8045045ab653abd45de4b0fa"
  },
  {
    "url": "assets/js/456.js",
    "revision": "b94c19881bb9a0770f8fb065d73f6f43"
  },
  {
    "url": "assets/js/457.js",
    "revision": "8f0083d61be7e1dda2182751c67a1108"
  },
  {
    "url": "assets/js/458.js",
    "revision": "dbca2d3219bbe7ba241ffa3a11da5897"
  },
  {
    "url": "assets/js/459.js",
    "revision": "3453e99bdf5be3335e985db855b47850"
  },
  {
    "url": "assets/js/46.js",
    "revision": "619d4bcbf09b8521c1bd92ed79460ace"
  },
  {
    "url": "assets/js/460.js",
    "revision": "d1a710157d41ed7bdcd9efbe28a09662"
  },
  {
    "url": "assets/js/461.js",
    "revision": "444b61d1aff5a27faf1120a8ebc3eecf"
  },
  {
    "url": "assets/js/462.js",
    "revision": "14c60b040af292a29d0cab6aacdd27fa"
  },
  {
    "url": "assets/js/463.js",
    "revision": "74f6f264f1a5b555e10ed579e4b6146f"
  },
  {
    "url": "assets/js/464.js",
    "revision": "4e2da27153092f5d6d25c99b7be8bfc0"
  },
  {
    "url": "assets/js/465.js",
    "revision": "2c6919509c170cb31ee224b5dbf58f52"
  },
  {
    "url": "assets/js/466.js",
    "revision": "3edeb879e5b19da8a6d6522ded878206"
  },
  {
    "url": "assets/js/467.js",
    "revision": "d2a740caafce6067e54e5e3ab631061a"
  },
  {
    "url": "assets/js/468.js",
    "revision": "6cd1bbceb38851470347d6ad7d3b1e8a"
  },
  {
    "url": "assets/js/469.js",
    "revision": "284c35c8c9514a22717da8393a0f1cab"
  },
  {
    "url": "assets/js/47.js",
    "revision": "1b9b2202f63e01d5e0f16c95b27ebf4d"
  },
  {
    "url": "assets/js/470.js",
    "revision": "6b5964703d5befdcf3934bd1df6f2cc4"
  },
  {
    "url": "assets/js/471.js",
    "revision": "4ec88c7fe898de4ed98516ffe6d65dac"
  },
  {
    "url": "assets/js/472.js",
    "revision": "9e840ed0d6c40a673fdefb15260e7be9"
  },
  {
    "url": "assets/js/473.js",
    "revision": "912937a605fbd55e7cc1d57d7d95a24c"
  },
  {
    "url": "assets/js/474.js",
    "revision": "5c43d1d6fb73aab517929d3e0a6ed16e"
  },
  {
    "url": "assets/js/475.js",
    "revision": "d9efa2ed72c9bd7f277152598dd3b85b"
  },
  {
    "url": "assets/js/476.js",
    "revision": "0f36d94b6650cd5a546dfcd8d4dbf88f"
  },
  {
    "url": "assets/js/477.js",
    "revision": "2a303739b1b6e29ef85fb9091ac9214e"
  },
  {
    "url": "assets/js/478.js",
    "revision": "d36c3add9e0d7e348376ba683ac5d485"
  },
  {
    "url": "assets/js/479.js",
    "revision": "a8c9ce13ff92701ce5b767d77b128bfe"
  },
  {
    "url": "assets/js/48.js",
    "revision": "6a47625961b7b2b6b450e67e08e67537"
  },
  {
    "url": "assets/js/480.js",
    "revision": "720bff035ba316741ce5f4151835a977"
  },
  {
    "url": "assets/js/481.js",
    "revision": "51ae11f2c7bf0850b252bc79c2ba5cab"
  },
  {
    "url": "assets/js/482.js",
    "revision": "26518017fef327e1af6f280be7c28c48"
  },
  {
    "url": "assets/js/483.js",
    "revision": "c5da14f5b1b0797adaa64dae9ea509a4"
  },
  {
    "url": "assets/js/484.js",
    "revision": "569121cbee0a1f52e45be54e99fc990b"
  },
  {
    "url": "assets/js/485.js",
    "revision": "f5427cc68d451a0dfa787ef816832ce2"
  },
  {
    "url": "assets/js/486.js",
    "revision": "08df9a3666de48b41763f7f4a2d4f4ee"
  },
  {
    "url": "assets/js/487.js",
    "revision": "c05851cf50a7c05364357f20da57227f"
  },
  {
    "url": "assets/js/488.js",
    "revision": "53905aa1646577b55be2de546e733555"
  },
  {
    "url": "assets/js/489.js",
    "revision": "a113bb307781b5bd049f905438528dd4"
  },
  {
    "url": "assets/js/49.js",
    "revision": "de8cde0ce4e4c6e8dbe886c267e02351"
  },
  {
    "url": "assets/js/490.js",
    "revision": "b83ddff26228ae72b0c12d506e660589"
  },
  {
    "url": "assets/js/491.js",
    "revision": "fc2dec6e3c8a930e6d36837b9234c2e8"
  },
  {
    "url": "assets/js/492.js",
    "revision": "8a98978a4d5da44898ea58faced5ee21"
  },
  {
    "url": "assets/js/493.js",
    "revision": "e43a2e0b85555bf4e1085f2462e0fe40"
  },
  {
    "url": "assets/js/494.js",
    "revision": "531b88ff2baf4b22d30c6c4bec0edff3"
  },
  {
    "url": "assets/js/495.js",
    "revision": "39766e310ed714436bada02f6ca95fee"
  },
  {
    "url": "assets/js/496.js",
    "revision": "0ac04a35bdb2d8cf50ec4cb49c3e2b76"
  },
  {
    "url": "assets/js/497.js",
    "revision": "9b46592e51be443e7b56ed5e1c7696e3"
  },
  {
    "url": "assets/js/498.js",
    "revision": "ea191193159579dc49b22f244e36521c"
  },
  {
    "url": "assets/js/499.js",
    "revision": "8b3084c5b1562577b316d23ad12b13ab"
  },
  {
    "url": "assets/js/50.js",
    "revision": "48ebffd7171e67ab077ebe6b984ac3a4"
  },
  {
    "url": "assets/js/500.js",
    "revision": "e3cf302533cea3d1311e672acc220cc9"
  },
  {
    "url": "assets/js/501.js",
    "revision": "b25de72aabc7aea2fb1672ef74069020"
  },
  {
    "url": "assets/js/502.js",
    "revision": "542dbd7a3959311ec05f42ef5f244e18"
  },
  {
    "url": "assets/js/503.js",
    "revision": "b77554382d3a30eb70652aba4637f620"
  },
  {
    "url": "assets/js/504.js",
    "revision": "a9bf9fd8c61e8367d0236de141699b01"
  },
  {
    "url": "assets/js/505.js",
    "revision": "b1cfa7808579744d0ec694ae5783ea94"
  },
  {
    "url": "assets/js/506.js",
    "revision": "1c4f082e3546104d49e79d8c0904440e"
  },
  {
    "url": "assets/js/507.js",
    "revision": "579a1634bd36af62cd54a83c97a1ec5e"
  },
  {
    "url": "assets/js/508.js",
    "revision": "c658e6bd129c9a814a12b245e7cef57c"
  },
  {
    "url": "assets/js/509.js",
    "revision": "ecbf1aa3de39de4cc19d828c381fc40a"
  },
  {
    "url": "assets/js/51.js",
    "revision": "fbd6562552763fdf03b7607d89ccab63"
  },
  {
    "url": "assets/js/510.js",
    "revision": "e4b984e81a02b5fc07f9573c1d3ec00b"
  },
  {
    "url": "assets/js/511.js",
    "revision": "e053c637c733fc28aa7c46928fefbd3d"
  },
  {
    "url": "assets/js/512.js",
    "revision": "ee840988effd92ba0d1a4836d52fceea"
  },
  {
    "url": "assets/js/513.js",
    "revision": "07c06b73e47dd2a3d6e63613b4adb745"
  },
  {
    "url": "assets/js/514.js",
    "revision": "c50daeea9af4f866f3556dd7eb4997c0"
  },
  {
    "url": "assets/js/515.js",
    "revision": "d8bcaa94c8f464851548553157730322"
  },
  {
    "url": "assets/js/516.js",
    "revision": "a5042c3ee634deade691ffd3123ad328"
  },
  {
    "url": "assets/js/517.js",
    "revision": "ecb0e47089eba9f5ffbd410891f78c42"
  },
  {
    "url": "assets/js/518.js",
    "revision": "25b66bb206789655537a3c8bb72532e5"
  },
  {
    "url": "assets/js/519.js",
    "revision": "6a04eb7cbeacdaf939b357abb121b05f"
  },
  {
    "url": "assets/js/52.js",
    "revision": "80c5f23e4b59eeaf71be95d7bc4fa653"
  },
  {
    "url": "assets/js/520.js",
    "revision": "9fd61501d64ecebc8d7a38fb9c317423"
  },
  {
    "url": "assets/js/521.js",
    "revision": "5467b88e2e3f02fa5de580c1c8116c95"
  },
  {
    "url": "assets/js/522.js",
    "revision": "2ac7ffc9194528aa79c7a065d797f1c8"
  },
  {
    "url": "assets/js/523.js",
    "revision": "ce170ea8fe220781bc7983890780fecd"
  },
  {
    "url": "assets/js/524.js",
    "revision": "4aa8279b8076b1b1120ad4ceaaab8526"
  },
  {
    "url": "assets/js/525.js",
    "revision": "51fc5fb74287bf3014e4b121afcff150"
  },
  {
    "url": "assets/js/526.js",
    "revision": "77b2640b10975e365bcdc916298c12c8"
  },
  {
    "url": "assets/js/527.js",
    "revision": "2c0556fbfa5a3927f77da234c76c468f"
  },
  {
    "url": "assets/js/528.js",
    "revision": "8b0086e4e540e5a87391cde4911969ae"
  },
  {
    "url": "assets/js/529.js",
    "revision": "7692981623acb0e2c6bac8cef232a27f"
  },
  {
    "url": "assets/js/53.js",
    "revision": "a386ce30ca393e9a1b441739ca2f6e52"
  },
  {
    "url": "assets/js/530.js",
    "revision": "f32d990ca066db250b6797fb25313547"
  },
  {
    "url": "assets/js/531.js",
    "revision": "d6876562e14aea29cefa7c72eb859981"
  },
  {
    "url": "assets/js/532.js",
    "revision": "164cc44484176c41264c7beb37e8f1b3"
  },
  {
    "url": "assets/js/533.js",
    "revision": "1cd23478ad2ab305ec979241ce7d9e36"
  },
  {
    "url": "assets/js/534.js",
    "revision": "6ee70c2bc287173ecb551d29d8db953e"
  },
  {
    "url": "assets/js/535.js",
    "revision": "7fe3de5664c1ab7c5ab7f1d1a55e3d3e"
  },
  {
    "url": "assets/js/536.js",
    "revision": "346e42f1305ebd8bfbffbb1335853383"
  },
  {
    "url": "assets/js/537.js",
    "revision": "e0c866f46a1883edcee39fa6b9d2a1f1"
  },
  {
    "url": "assets/js/538.js",
    "revision": "7d76ced57d90bcd552bbd6df2d5f776e"
  },
  {
    "url": "assets/js/539.js",
    "revision": "83a22d99cd74259a38107b1e78ee4714"
  },
  {
    "url": "assets/js/54.js",
    "revision": "22343eea9195530e2f310b97398afaf3"
  },
  {
    "url": "assets/js/540.js",
    "revision": "464ef38bc2a30e577070d438ac682f1a"
  },
  {
    "url": "assets/js/541.js",
    "revision": "ddc0d2cdc9881069b3d0dd06ad600f6d"
  },
  {
    "url": "assets/js/542.js",
    "revision": "14ee214f61f333cdf34713bb26ac0469"
  },
  {
    "url": "assets/js/543.js",
    "revision": "d50a06340d5cd73d2445004af453a411"
  },
  {
    "url": "assets/js/544.js",
    "revision": "50b4f6386dcc5f06d9bba606db0e1689"
  },
  {
    "url": "assets/js/545.js",
    "revision": "f0fcc8d927b3921cecf06b1692e98ea4"
  },
  {
    "url": "assets/js/546.js",
    "revision": "c4c44dfd229b1f1ca04412c0a52f39e8"
  },
  {
    "url": "assets/js/547.js",
    "revision": "007f2012b1b776daa9d5a9870f923cad"
  },
  {
    "url": "assets/js/548.js",
    "revision": "9a1b37bf2393d3d3daab9c5f9e61a00e"
  },
  {
    "url": "assets/js/549.js",
    "revision": "20a46d350043e3cb8150fd2cecd713f2"
  },
  {
    "url": "assets/js/55.js",
    "revision": "54a99866c258c1b004df4e3d0a130b63"
  },
  {
    "url": "assets/js/550.js",
    "revision": "0139f9a8362767812952d24906f7e7f7"
  },
  {
    "url": "assets/js/551.js",
    "revision": "3cc6c6674ae6f57bccb8c782095ceb16"
  },
  {
    "url": "assets/js/552.js",
    "revision": "e91e308c294b98f0a9397935611b3074"
  },
  {
    "url": "assets/js/553.js",
    "revision": "630054194609a9d7549c6bcbb8582660"
  },
  {
    "url": "assets/js/554.js",
    "revision": "46e4898aae373718a2be88b64345d4a8"
  },
  {
    "url": "assets/js/555.js",
    "revision": "b43ba4adcb387e3504b46d9d88a8908b"
  },
  {
    "url": "assets/js/556.js",
    "revision": "cb301a8dfa6fc162cdcf56210bd12d08"
  },
  {
    "url": "assets/js/557.js",
    "revision": "980e9bc3da90219c0accde9b916e4736"
  },
  {
    "url": "assets/js/558.js",
    "revision": "84ab5113eaa648a0bcdd49d362c61bd9"
  },
  {
    "url": "assets/js/559.js",
    "revision": "8c04acce91eb6e7ba3f17b12954056de"
  },
  {
    "url": "assets/js/56.js",
    "revision": "ddf8a71508b05ba43029a4524165b5de"
  },
  {
    "url": "assets/js/560.js",
    "revision": "413d9334136f6756cd2548b1460b8783"
  },
  {
    "url": "assets/js/561.js",
    "revision": "8cd7a9468ed5994c166a6a5ebf437a18"
  },
  {
    "url": "assets/js/562.js",
    "revision": "d87750f243e3ddc25c64f26600eb6212"
  },
  {
    "url": "assets/js/563.js",
    "revision": "2c4a90c9a58c4a7fe91f08c4c8055a73"
  },
  {
    "url": "assets/js/564.js",
    "revision": "b724c810f10bf18a2c4b12c9de517f83"
  },
  {
    "url": "assets/js/565.js",
    "revision": "42c683a853fe2477304d5bc4e3de49da"
  },
  {
    "url": "assets/js/566.js",
    "revision": "1d81a81bb2e6e432efd8e4a18b22dd62"
  },
  {
    "url": "assets/js/567.js",
    "revision": "f055885a20f019a6cc31d6fda19d9860"
  },
  {
    "url": "assets/js/568.js",
    "revision": "5c1a078211b1bde06367e185ef0d0401"
  },
  {
    "url": "assets/js/569.js",
    "revision": "d112096ebf266b276c733375369562ac"
  },
  {
    "url": "assets/js/57.js",
    "revision": "001c7acb430b53357910e2f41318fdc2"
  },
  {
    "url": "assets/js/570.js",
    "revision": "9f6e88d17847cf859a98c1c3093ce845"
  },
  {
    "url": "assets/js/571.js",
    "revision": "1ecdcb2baedb34f8f411334b2399fc81"
  },
  {
    "url": "assets/js/572.js",
    "revision": "ad59606694d5bca0924d4fde89d3fdb6"
  },
  {
    "url": "assets/js/573.js",
    "revision": "0e1df62df4f7940436d3766a0c141b56"
  },
  {
    "url": "assets/js/574.js",
    "revision": "6ddd48c314bce0c132de551f40848274"
  },
  {
    "url": "assets/js/575.js",
    "revision": "916a0ba7d1389614cb44b2242363de2e"
  },
  {
    "url": "assets/js/576.js",
    "revision": "47dd016285c8ace137b3484023f86cf4"
  },
  {
    "url": "assets/js/577.js",
    "revision": "12f15874730cda5f2dc4044822200f74"
  },
  {
    "url": "assets/js/578.js",
    "revision": "2ac81e2e72e4dd913765995b90db3538"
  },
  {
    "url": "assets/js/579.js",
    "revision": "b0e98dc3f46778ebad7d71248409d79f"
  },
  {
    "url": "assets/js/58.js",
    "revision": "275f703646a6b6d48656d0d2a79fcb31"
  },
  {
    "url": "assets/js/580.js",
    "revision": "5232e6a271858e38c9ae2750aebe145d"
  },
  {
    "url": "assets/js/581.js",
    "revision": "fa4657f73ce33f71f440bedb66e30287"
  },
  {
    "url": "assets/js/582.js",
    "revision": "e591c34ca22014e8f508e77f3cc5e19e"
  },
  {
    "url": "assets/js/583.js",
    "revision": "581b4d939655ba075bef0c9817a802a0"
  },
  {
    "url": "assets/js/584.js",
    "revision": "fd7566d00159a77b26d0fc5778a1614b"
  },
  {
    "url": "assets/js/585.js",
    "revision": "b54162abd0f6ec54ae19a9dfd5c0c38b"
  },
  {
    "url": "assets/js/586.js",
    "revision": "9953031f7697f4e757780acf58582d11"
  },
  {
    "url": "assets/js/587.js",
    "revision": "f1a88ca1252141a6c6c3d03238cdb504"
  },
  {
    "url": "assets/js/588.js",
    "revision": "40f34f38ff253a427a3926450d7442fc"
  },
  {
    "url": "assets/js/589.js",
    "revision": "a9d3829585816e6bcef1074ab719d3f0"
  },
  {
    "url": "assets/js/59.js",
    "revision": "31002168bf7232adcd1311c65ba28996"
  },
  {
    "url": "assets/js/590.js",
    "revision": "3528e9a961bbafb313837bee66573bdd"
  },
  {
    "url": "assets/js/591.js",
    "revision": "4648beae5b889d4fb86cdae8cf545a43"
  },
  {
    "url": "assets/js/592.js",
    "revision": "d0fa81f75fcb26533146573d75c3a46b"
  },
  {
    "url": "assets/js/593.js",
    "revision": "b0d8c97ac0c449e626e36142218eb63f"
  },
  {
    "url": "assets/js/594.js",
    "revision": "b3dd38b868b48c9f260e4ddf771d3b4d"
  },
  {
    "url": "assets/js/595.js",
    "revision": "0386c82fb3299c4bdfab90f909146f50"
  },
  {
    "url": "assets/js/596.js",
    "revision": "6f6b202c58657cbd61b75007b9f40eb0"
  },
  {
    "url": "assets/js/597.js",
    "revision": "06fa26d32797e038617b38bc717f1a78"
  },
  {
    "url": "assets/js/598.js",
    "revision": "a53487cd3d7301b4d27299134bbafb5a"
  },
  {
    "url": "assets/js/599.js",
    "revision": "ba8fdd85f223f5317c5c0640291f6c2c"
  },
  {
    "url": "assets/js/6.js",
    "revision": "989504c5ba6f78a316ce9bcbaf1a6c59"
  },
  {
    "url": "assets/js/60.js",
    "revision": "04910325e04cd40a7e2c8e1849922d7e"
  },
  {
    "url": "assets/js/600.js",
    "revision": "505b26408e0b7d703df03fff9a72619a"
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
    "revision": "312b7527ec1b5dcd69b9bf6283b60dff"
  },
  {
    "url": "assets/js/66.js",
    "revision": "7d3e490ac3f29e2370fdb8cc7cc9a765"
  },
  {
    "url": "assets/js/67.js",
    "revision": "62e3480fc83f345d7bfbd31209c249b7"
  },
  {
    "url": "assets/js/68.js",
    "revision": "0e5ec88ea863658fa79cde2597ddfbbc"
  },
  {
    "url": "assets/js/69.js",
    "revision": "3bb41ac09ac7cb910a8e6451db3581bd"
  },
  {
    "url": "assets/js/7.js",
    "revision": "d8997289f23729d5f055c203842ea749"
  },
  {
    "url": "assets/js/70.js",
    "revision": "e893856c0521a9b0d0239f3e3849294c"
  },
  {
    "url": "assets/js/71.js",
    "revision": "8018a37e33a4a038259db7a9a4f85ae9"
  },
  {
    "url": "assets/js/72.js",
    "revision": "dee444b93f38359dd27cb3c3909efaf1"
  },
  {
    "url": "assets/js/73.js",
    "revision": "362090cbfffda266d99a26d5bea4e6db"
  },
  {
    "url": "assets/js/74.js",
    "revision": "4404416e562e09a6cb6560d3d340153c"
  },
  {
    "url": "assets/js/75.js",
    "revision": "72ed8fdf9eba05d3f6dc1d73f7824822"
  },
  {
    "url": "assets/js/76.js",
    "revision": "31d25d1cab9d4be45e4ca680376ee978"
  },
  {
    "url": "assets/js/77.js",
    "revision": "2bd4d17c88a15d1236062b462158f70c"
  },
  {
    "url": "assets/js/78.js",
    "revision": "adbc0a260972ac620bc2fff56c7dd147"
  },
  {
    "url": "assets/js/79.js",
    "revision": "370fb3cc5fffc144ff48c21f597b4e6a"
  },
  {
    "url": "assets/js/8.js",
    "revision": "fe95343690b7066e1cbba1e60bcc65d4"
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
    "revision": "e2481effd0a2752245f55e6c05724c3a"
  },
  {
    "url": "assets/js/88.js",
    "revision": "85bc07cd327f3309da259238bdaf2d87"
  },
  {
    "url": "assets/js/89.js",
    "revision": "926f23c8bb7f9576b8e634eb7315886d"
  },
  {
    "url": "assets/js/9.js",
    "revision": "59f9cdca0fae2673b85ba4216bc2a7ab"
  },
  {
    "url": "assets/js/90.js",
    "revision": "cf653c77d0886f2ac369e91cc2213401"
  },
  {
    "url": "assets/js/91.js",
    "revision": "1f1b9322984c4d3aaa3dbbe45dbf8ca7"
  },
  {
    "url": "assets/js/92.js",
    "revision": "a6d4553eb0411971dc5688bebb6a2d0b"
  },
  {
    "url": "assets/js/93.js",
    "revision": "dd23d88b88e1e19c49925d5c097776c2"
  },
  {
    "url": "assets/js/94.js",
    "revision": "ad25766dfe7cbb84908d428c452a5df2"
  },
  {
    "url": "assets/js/95.js",
    "revision": "3a1f1aeb58a911b154c264ab9908c4e6"
  },
  {
    "url": "assets/js/96.js",
    "revision": "b7d9460a2d93e256da0aefa03d6f4e0a"
  },
  {
    "url": "assets/js/97.js",
    "revision": "d3da22dfa09ed9a17da2541da71fbcf9"
  },
  {
    "url": "assets/js/98.js",
    "revision": "905dc15120f637055fbe13a47bdc6120"
  },
  {
    "url": "assets/js/99.js",
    "revision": "89f85c221e8232a6d6aba2e6e71ef363"
  },
  {
    "url": "assets/js/app.js",
    "revision": "a60d5da20eacf88b3315281d12ac80bd"
  },
  {
    "url": "assets/js/styles.js",
    "revision": "22f22b49cc901aa95826401f7ce0930c"
  },
  {
    "url": "blog/category/index.html",
    "revision": "5fd2357b105c204501faf0e41c6b691a"
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
    "revision": "a21d0cf82c5cede8e00d1485e61a7e2d"
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
    "url": "blog/life/birthday/index.html",
    "revision": "ceb635b73d4b68d8c0408e6df4130bc1"
  },
  {
    "url": "blog/life/blasphemy/index.html",
    "revision": "34ef94e27608f046f9b53fe35851dc6c"
  },
  {
    "url": "blog/life/blogger/index.html",
    "revision": "5d67cd61b07eb78ea4ad028032fbe2b2"
  },
  {
    "url": "blog/life/blurry/index.html",
    "revision": "d8714fc79bbef95c7289a3745bed5bbe"
  },
  {
    "url": "blog/life/busyday/index.html",
    "revision": "66de7ed014a297f55e616f935053c381"
  },
  {
    "url": "blog/life/domain/index.html",
    "revision": "6fa347727be6e54ae1ceed88199dff84"
  },
  {
    "url": "blog/life/exams/index.html",
    "revision": "c445ffae86fc3646fec2714e3fecea8a"
  },
  {
    "url": "blog/life/food/index.html",
    "revision": "82c6dd664d20d82804cdb72afa3684e6"
  },
  {
    "url": "blog/life/glenview/index.html",
    "revision": "0872170e21e43d7c7e961c815cc8095b"
  },
  {
    "url": "blog/life/headlines/index.html",
    "revision": "6928846304dd7e782ad16ea3b784e1fe"
  },
  {
    "url": "blog/life/index.html",
    "revision": "4556857d5f0f4fdf3c8eaa1ffb29d2b5"
  },
  {
    "url": "blog/life/jws/index.html",
    "revision": "19ae3a1b43255a6583d41888a6afa000"
  },
  {
    "url": "blog/life/keyboard/index.html",
    "revision": "69f5be9bd16f83c59051d92c29b2f6d5"
  },
  {
    "url": "blog/life/lpi201/index.html",
    "revision": "82525436d0fdc70a1b2ad55fd7513001"
  },
  {
    "url": "blog/life/mashup/index.html",
    "revision": "28d400cf769a0aacf02d1fd2cfd82893"
  },
  {
    "url": "blog/life/motorweb/index.html",
    "revision": "a71ecc6413d069f420af1fad7aa171e7"
  },
  {
    "url": "blog/life/nxe/index.html",
    "revision": "634d6596b15a2bc3191d7744525e9479"
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
    "revision": "bd2c5774b5c73ccd543fd9296c00ea5e"
  },
  {
    "url": "blog/life/roads/index.html",
    "revision": "d3d66bb2954a740e083100c62ca9d819"
  },
  {
    "url": "blog/life/roots/index.html",
    "revision": "0440666ba948161d2daab0ba40595a58"
  },
  {
    "url": "blog/life/scare/index.html",
    "revision": "a29d4cd672eac3257071c462d263fe2c"
  },
  {
    "url": "blog/life/scary/index.html",
    "revision": "26e2478d60de5538bae88ce0a477db8e"
  },
  {
    "url": "blog/life/seti/index.html",
    "revision": "cd5f3fd4e75345c7f849158f0da526cf"
  },
  {
    "url": "blog/life/skeptical/index.html",
    "revision": "52d786e9cd1c3f6d7382997b94e2e6fc"
  },
  {
    "url": "blog/life/skepticzone/index.html",
    "revision": "d1204dff40910ef029db2ed80fa903b4"
  },
  {
    "url": "blog/life/spam/index.html",
    "revision": "bace394eda158ba68ddc5895c449f383"
  },
  {
    "url": "blog/life/trademe/index.html",
    "revision": "2cb8d99bb09068d20358152bfb21c89d"
  },
  {
    "url": "blog/life/unforeseen/index.html",
    "revision": "0c2b1f468ba3c96535b779024861c904"
  },
  {
    "url": "blog/life/wobbly/index.html",
    "revision": "896f74050d5f5056cae3347686482d42"
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
    "revision": "f019790fc7e341b4a0a72321557635aa"
  },
  {
    "url": "blog/projects/eyes/index.html",
    "revision": "6d39a8bfb9001551b12c677708f75b93"
  },
  {
    "url": "blog/projects/glitch/index.html",
    "revision": "2bb3119fa3a78443ca7dffe52a809853"
  },
  {
    "url": "blog/projects/hotel/index.html",
    "revision": "487bbe67e7d583aa25e4bb3a92212721"
  },
  {
    "url": "blog/projects/index.html",
    "revision": "b867f1bbae738d40bf3a8c6d9efc8d46"
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
    "revision": "c27ed204cb65803fd7c572cc1e307956"
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
    "revision": "323ba4061569a6bd31d8d3cdd0dac4f8"
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
    "revision": "d048bb4613038b9d2f79b3d20f7da4ff"
  },
  {
    "url": "blog/random/alphabet/index.html",
    "revision": "b484814972660128e03dd2cdc62075bf"
  },
  {
    "url": "blog/random/astrology/index.html",
    "revision": "268113e5bb806bfeacf6c0ce278c1ee7"
  },
  {
    "url": "blog/random/chicken/index.html",
    "revision": "af3f3cbec0fb1600ee963c10e22691fa"
  },
  {
    "url": "blog/random/dns/index.html",
    "revision": "dd7bcd84e4038343d4059280882f4e3a"
  },
  {
    "url": "blog/random/evp/index.html",
    "revision": "e4b184951ca81a699d60d8b840d022b4"
  },
  {
    "url": "blog/random/flip/index.html",
    "revision": "5e7534e0e8833b7234e2bcb6f42ca263"
  },
  {
    "url": "blog/random/honeychurch/index.html",
    "revision": "7108b73e3731327eeed1f8be111c6e0f"
  },
  {
    "url": "blog/random/index.html",
    "revision": "803925a5d62e236add0dcb6b7bd833f0"
  },
  {
    "url": "blog/random/lottery/index.html",
    "revision": "d7e338a32e92a41e13c9c52c5a0b97c3"
  },
  {
    "url": "blog/random/music/index.html",
    "revision": "5555a082e39221a432b89601346fd475"
  },
  {
    "url": "blog/random/octal/index.html",
    "revision": "a1103a37fb5dc37ed740da0f153f5fec"
  },
  {
    "url": "blog/random/os/index.html",
    "revision": "88f025aebd28fe345dea17b6591848c8"
  },
  {
    "url": "blog/random/propellers/index.html",
    "revision": "852b5f8495a2deef1874d97772ea3635"
  },
  {
    "url": "blog/random/robux/index.html",
    "revision": "d5730af4e9486a13cb91ecae55237b5e"
  },
  {
    "url": "blog/random/super/index.html",
    "revision": "9339c3a3df7e360a1ad5a4f3ac71537f"
  },
  {
    "url": "blog/random/times/index.html",
    "revision": "b8a63885249d25a77248585dee081fec"
  },
  {
    "url": "blog/random/travel/index.html",
    "revision": "0380d0a843067c0e80a18ec5754315ad"
  },
  {
    "url": "blog/random/wilhelm/index.html",
    "revision": "839d65ed2caf503ef99cb2e786d183f0"
  },
  {
    "url": "blog/random/year/index.html",
    "revision": "6d822dd156bbb6528edc4c1edf9a4d53"
  },
  {
    "url": "blog/skepticism/2015/08/16/asa/index.html",
    "revision": "049d9c26c62a1e66e8993783de5087d8"
  },
  {
    "url": "blog/skepticism/2015/08/16/awards/index.html",
    "revision": "9db0d57ce3d7c7877c6bbb6f3ed5a3a1"
  },
  {
    "url": "blog/skepticism/2015/08/16/bravo/index.html",
    "revision": "bf40b0c050e43649f2451121f2e2b4e0"
  },
  {
    "url": "blog/skepticism/2015/08/16/index.html",
    "revision": "5b741f06ac75aeace416e81ef7fba10b"
  },
  {
    "url": "blog/skepticism/2015/08/16/jim/index.html",
    "revision": "c0f4b9c8fcd4547ae1397444a1061f69"
  },
  {
    "url": "blog/skepticism/2015/08/16/naholo/index.html",
    "revision": "d7c64d07878701c86a0e085baae0111d"
  },
  {
    "url": "blog/skepticism/2015/08/16/resene/index.html",
    "revision": "e58f4cceb84042132fbe35475b0b1263"
  },
  {
    "url": "blog/skepticism/2015/08/index.html",
    "revision": "f631fea2a9e6ae4c9349e802cc8298aa"
  },
  {
    "url": "blog/skepticism/2015/09/20/gop/index.html",
    "revision": "bc14606f06e34f04c335f81349a8d6c8"
  },
  {
    "url": "blog/skepticism/2015/09/20/ignobel/index.html",
    "revision": "bdae46165dbb31a3e21aa300e27f6d6c"
  },
  {
    "url": "blog/skepticism/2015/09/20/index.html",
    "revision": "ca0119d588ff080ab9b95823e9a8194f"
  },
  {
    "url": "blog/skepticism/2015/09/20/supplements/index.html",
    "revision": "83c54cbbcecbb6b882f6dfb235302647"
  },
  {
    "url": "blog/skepticism/2015/09/27/ayahuasca/index.html",
    "revision": "bd558f890e6e7c85ad2f4a501c963e0a"
  },
  {
    "url": "blog/skepticism/2015/09/27/drought/index.html",
    "revision": "9957df9b4a3da786aaa500826260ab7f"
  },
  {
    "url": "blog/skepticism/2015/09/27/index.html",
    "revision": "61a0297384614248f8f92e12a84cad72"
  },
  {
    "url": "blog/skepticism/2015/09/27/lama/index.html",
    "revision": "07413322d396c63244ab13a5bc5ce112"
  },
  {
    "url": "blog/skepticism/2015/09/27/moon/index.html",
    "revision": "832b6a058839f744a8daee24445a90e0"
  },
  {
    "url": "blog/skepticism/2015/09/27/scan/index.html",
    "revision": "8b387c88c7de1b8832194c9900eda495"
  },
  {
    "url": "blog/skepticism/2015/09/index.html",
    "revision": "10fe440383f5895a65a14d17c147355b"
  },
  {
    "url": "blog/skepticism/2015/10/04/ghost/index.html",
    "revision": "55935156e8ee19e5590564496e17cd79"
  },
  {
    "url": "blog/skepticism/2015/10/04/haka/index.html",
    "revision": "503ac4ca134cc432843877822d74291c"
  },
  {
    "url": "blog/skepticism/2015/10/04/index.html",
    "revision": "8fd08e75f8aa0064e857dbf62f72bdc9"
  },
  {
    "url": "blog/skepticism/2015/10/04/mars/index.html",
    "revision": "52d0f7ee575131fd6e682ed9e0bd82fa"
  },
  {
    "url": "blog/skepticism/2015/10/04/pharmacy/index.html",
    "revision": "6ac7fc0a4008b1e2d7fa039827e30fcc"
  },
  {
    "url": "blog/skepticism/2015/10/04/prostate/index.html",
    "revision": "940886122ce5e5f1071b64d67fa6a36a"
  },
  {
    "url": "blog/skepticism/2015/10/11/armageddon/index.html",
    "revision": "705c758f6d720983783358365c828cab"
  },
  {
    "url": "blog/skepticism/2015/10/11/climate/index.html",
    "revision": "d5d38f40894cff4b9944e8da06aaa343"
  },
  {
    "url": "blog/skepticism/2015/10/11/ghost/index.html",
    "revision": "bb412f92eb1fe13850345d11fa097354"
  },
  {
    "url": "blog/skepticism/2015/10/11/index.html",
    "revision": "71408cdc5c72ca05bfbe712a79266008"
  },
  {
    "url": "blog/skepticism/2015/10/11/magnesleep/index.html",
    "revision": "0ba719813872f5ff01f9cfb0b8097c38"
  },
  {
    "url": "blog/skepticism/2015/10/11/nhs/index.html",
    "revision": "4505157ad0682f655919f5fa083ec5a2"
  },
  {
    "url": "blog/skepticism/2015/10/11/prophet/index.html",
    "revision": "d8729f3045eb958d39352a0e5918a4ca"
  },
  {
    "url": "blog/skepticism/2015/10/index.html",
    "revision": "4c283a7d426efb884baa1d4ae1efe72f"
  },
  {
    "url": "blog/skepticism/2015/11/15/end/index.html",
    "revision": "ea42cb021c21c86f3f9236c3d38f077e"
  },
  {
    "url": "blog/skepticism/2015/11/15/index.html",
    "revision": "75c7bb9f6098509d416230b7e6f61e52"
  },
  {
    "url": "blog/skepticism/2015/11/index.html",
    "revision": "d4d85b9138337700af60bbae074103e4"
  },
  {
    "url": "blog/skepticism/2015/12/13/astrology/index.html",
    "revision": "2ae6c9e83239cf847b22fd2cdb0f99fb"
  },
  {
    "url": "blog/skepticism/2015/12/13/cancer/index.html",
    "revision": "6adab67ac22856cf910e43307f57e213"
  },
  {
    "url": "blog/skepticism/2015/12/13/chickenpox/index.html",
    "revision": "ac98e457c686187d82867831881e0d4e"
  },
  {
    "url": "blog/skepticism/2015/12/13/index.html",
    "revision": "bcfb73e4bb4bc60b7ea111ccb2b48bd7"
  },
  {
    "url": "blog/skepticism/2015/12/13/osteopath/index.html",
    "revision": "1e41b2ca263140b51a0e38b3338cf3a7"
  },
  {
    "url": "blog/skepticism/2015/12/13/priest/index.html",
    "revision": "c98a3c598e1eb924914d2910011a0209"
  },
  {
    "url": "blog/skepticism/2015/12/13/psychic/index.html",
    "revision": "65b2f100fb07e122756ed08b8d453dd0"
  },
  {
    "url": "blog/skepticism/2015/12/13/vaccines/index.html",
    "revision": "6909852436e0816c30f6c7c3f7c64e2b"
  },
  {
    "url": "blog/skepticism/2015/12/index.html",
    "revision": "fb4eea580c3287c8ecd53af02eb7c27d"
  },
  {
    "url": "blog/skepticism/2015/index.html",
    "revision": "989c1f8be22c76650865c731847a2d9f"
  },
  {
    "url": "blog/skepticism/2016/02/07/antioxidant/index.html",
    "revision": "3323fa86ebe1d3cdcc4f6b9166fb75bc"
  },
  {
    "url": "blog/skepticism/2016/02/07/index.html",
    "revision": "2feab74d860e7725013ef76b21758e5d"
  },
  {
    "url": "blog/skepticism/2016/02/07/kfc/index.html",
    "revision": "521c2d2aaf710b12fb17b5b68fdd4e86"
  },
  {
    "url": "blog/skepticism/2016/02/07/ph/index.html",
    "revision": "376b5353137369ccfefc6ac75ddd94f8"
  },
  {
    "url": "blog/skepticism/2016/02/07/sandy/index.html",
    "revision": "19a42ba71f867551cbb5db87f1566f76"
  },
  {
    "url": "blog/skepticism/2016/02/07/sarfati/index.html",
    "revision": "642fe4f4fc79ced6e5aa6e11e2f1efe8"
  },
  {
    "url": "blog/skepticism/2016/02/07/trump/index.html",
    "revision": "8d8ea15e9d6bf143323a0c5de6f1d8ef"
  },
  {
    "url": "blog/skepticism/2016/02/14/coins/index.html",
    "revision": "9f812c5bcd7dec3f8e0ee16258d837b2"
  },
  {
    "url": "blog/skepticism/2016/02/14/fast/index.html",
    "revision": "416e41d7db26f2928de65d658dc173ba"
  },
  {
    "url": "blog/skepticism/2016/02/14/fluoride/index.html",
    "revision": "5215771067504e3fe1b100e61828ccb0"
  },
  {
    "url": "blog/skepticism/2016/02/14/icke/index.html",
    "revision": "3fd3e89141bf47a237653dcb427e17e4"
  },
  {
    "url": "blog/skepticism/2016/02/14/index.html",
    "revision": "c43e37016464563d9905a92cca363979"
  },
  {
    "url": "blog/skepticism/2016/02/14/yeti/index.html",
    "revision": "afe6f36222d9c8f8db5a38fd56869069"
  },
  {
    "url": "blog/skepticism/2016/02/21/homeopathy/index.html",
    "revision": "b24f84a17670828c70d2845d1572607f"
  },
  {
    "url": "blog/skepticism/2016/02/21/index.html",
    "revision": "42641328e50d8e14f0cb982201e779b4"
  },
  {
    "url": "blog/skepticism/2016/02/21/monster/index.html",
    "revision": "0d839466264dd953631d2112d267fa98"
  },
  {
    "url": "blog/skepticism/2016/02/21/scalia/index.html",
    "revision": "b81c88601162472bfb02557d03400f46"
  },
  {
    "url": "blog/skepticism/2016/02/21/shane/index.html",
    "revision": "dfb45e50a3df7ec403218376a0a21e7d"
  },
  {
    "url": "blog/skepticism/2016/02/21/texas/index.html",
    "revision": "f5c2bccab0ac4363b25d7931b591c5be"
  },
  {
    "url": "blog/skepticism/2016/02/28/acupuncture/index.html",
    "revision": "4e3e96eefe0e64b8324ed10ec463bc66"
  },
  {
    "url": "blog/skepticism/2016/02/28/fsm/index.html",
    "revision": "57cdce67346dbe2b5f617c2f60ac81d5"
  },
  {
    "url": "blog/skepticism/2016/02/28/index.html",
    "revision": "369d19b8c067ef26d8c6aa662142e078"
  },
  {
    "url": "blog/skepticism/2016/02/28/iv/index.html",
    "revision": "1c955984723d7c2236a90545ea8852ee"
  },
  {
    "url": "blog/skepticism/2016/02/28/natural/index.html",
    "revision": "d3613fc8f5731906b893d30b2ec6855a"
  },
  {
    "url": "blog/skepticism/2016/02/28/talc/index.html",
    "revision": "75328e4851ba74d41f2166a0f61b1556"
  },
  {
    "url": "blog/skepticism/2016/02/index.html",
    "revision": "7dfeb20a9bc34a43483b9e06f275e6d6"
  },
  {
    "url": "blog/skepticism/2016/03/13/herbs/index.html",
    "revision": "00dc234a793314e5fbaf7364cd9ce167"
  },
  {
    "url": "blog/skepticism/2016/03/13/index.html",
    "revision": "0e239248569ac5b6caca99a13f29dc35"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandala/index.html",
    "revision": "cad76b4e687fac73d81b0f0dee6ccc7c"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandela/index.html",
    "revision": "18e5c597201787e7d2e520a90ce7e528"
  },
  {
    "url": "blog/skepticism/2016/03/13/spray/index.html",
    "revision": "c96ce1f777aba1b202849107ec7a624d"
  },
  {
    "url": "blog/skepticism/2016/03/index.html",
    "revision": "cae8b76cbb5986855f26a78223d6ef53"
  },
  {
    "url": "blog/skepticism/2016/04/17/charity/index.html",
    "revision": "38052bc6dbb70e28ce8212c1cdaea71a"
  },
  {
    "url": "blog/skepticism/2016/04/17/chiro/index.html",
    "revision": "11e728ac12fd791c0fd35e9903d7383d"
  },
  {
    "url": "blog/skepticism/2016/04/17/fluoride/index.html",
    "revision": "500ae13d7e2a4c810bfad4542b9a56e0"
  },
  {
    "url": "blog/skepticism/2016/04/17/index.html",
    "revision": "96cc856100b3cbf699ee9bbbf285a2a3"
  },
  {
    "url": "blog/skepticism/2016/04/17/lotto/index.html",
    "revision": "838db78b0996d69f75c7c603fe6f79d4"
  },
  {
    "url": "blog/skepticism/2016/04/17/mind/index.html",
    "revision": "86481e661b9450c1be02efa9edacd541"
  },
  {
    "url": "blog/skepticism/2016/04/17/whooping/index.html",
    "revision": "01803ee931547220ef21278cfe691c97"
  },
  {
    "url": "blog/skepticism/2016/04/index.html",
    "revision": "742816f83b9e8df65a8cbe7388b68b3d"
  },
  {
    "url": "blog/skepticism/2016/06/05/1080/index.html",
    "revision": "a44dba7fb44c3e704400940ac6c02e82"
  },
  {
    "url": "blog/skepticism/2016/06/05/acupuncture/index.html",
    "revision": "60a77b1da3e558101b0cdc4009a3e118"
  },
  {
    "url": "blog/skepticism/2016/06/05/family/index.html",
    "revision": "8157259cfe76aa4d8fa3aa8ff96092de"
  },
  {
    "url": "blog/skepticism/2016/06/05/index.html",
    "revision": "38336be60ce28f15b41ee6ad5f9d2b3e"
  },
  {
    "url": "blog/skepticism/2016/06/05/limbaugh/index.html",
    "revision": "4ac11d49717e803fce41dc2cc0b30b23"
  },
  {
    "url": "blog/skepticism/2016/06/12/bobby/index.html",
    "revision": "51693986bfe6ecad13e2c80d254c50d1"
  },
  {
    "url": "blog/skepticism/2016/06/12/climate/index.html",
    "revision": "a3b04932aaac0dd68b711e4a8aa72d9d"
  },
  {
    "url": "blog/skepticism/2016/06/12/index.html",
    "revision": "83f7644b8e30811f903d82ca26438815"
  },
  {
    "url": "blog/skepticism/2016/06/12/pugh/index.html",
    "revision": "dd587c26daf2f03a5784154f1c004242"
  },
  {
    "url": "blog/skepticism/2016/06/12/savage/index.html",
    "revision": "700c93739b682b842e94c556bb8ba236"
  },
  {
    "url": "blog/skepticism/2016/06/12/sawdust/index.html",
    "revision": "ffd7571d4db300e5fd75ad2d17a6c6cd"
  },
  {
    "url": "blog/skepticism/2016/06/19/beauty/index.html",
    "revision": "b34386080093435554970bfecf138994"
  },
  {
    "url": "blog/skepticism/2016/06/19/bilderberg/index.html",
    "revision": "1136b54a55ffe144460fde866a9c2ad2"
  },
  {
    "url": "blog/skepticism/2016/06/19/cyf/index.html",
    "revision": "a9280bfaa579fadb25304e096bcf0940"
  },
  {
    "url": "blog/skepticism/2016/06/19/holt/index.html",
    "revision": "756dba834ba4bbc035d18a9939fac093"
  },
  {
    "url": "blog/skepticism/2016/06/19/index.html",
    "revision": "a8b473c2bc750f5be1c42ca09aae541f"
  },
  {
    "url": "blog/skepticism/2016/06/19/silver/index.html",
    "revision": "f3ef53d1f32be0554160721a491e2444"
  },
  {
    "url": "blog/skepticism/2016/06/19/ufo/index.html",
    "revision": "8b1aa3b065878d42b42156d5bf1e4f04"
  },
  {
    "url": "blog/skepticism/2016/06/26/homeopathy/index.html",
    "revision": "96da855643eaea582690d8a2d466846e"
  },
  {
    "url": "blog/skepticism/2016/06/26/index.html",
    "revision": "f4d1e71aba1c5ffaff6740c99b0d8d0a"
  },
  {
    "url": "blog/skepticism/2016/06/26/robbins/index.html",
    "revision": "ed25f21c0df80d81384d8ec2ff3cf167"
  },
  {
    "url": "blog/skepticism/2016/06/26/selfies/index.html",
    "revision": "060d0f641ecd368e62e5bea4bc06ebe1"
  },
  {
    "url": "blog/skepticism/2016/06/26/silver/index.html",
    "revision": "0a635f971f1cb1b28015e2dc96e38dbe"
  },
  {
    "url": "blog/skepticism/2016/06/26/ufos/index.html",
    "revision": "3e1c31043ba0dedf9959c59c11ed8bba"
  },
  {
    "url": "blog/skepticism/2016/06/index.html",
    "revision": "ebd6bc5ba43ed698f53d89df893d7d98"
  },
  {
    "url": "blog/skepticism/2016/07/03/glyphosate/index.html",
    "revision": "a991d12b13f2387d2620f96f63b2587c"
  },
  {
    "url": "blog/skepticism/2016/07/03/gmo/index.html",
    "revision": "e4d14d86667001973096f90538b99209"
  },
  {
    "url": "blog/skepticism/2016/07/03/index.html",
    "revision": "1169486b6868b9fa9594b9d9de474d3e"
  },
  {
    "url": "blog/skepticism/2016/07/03/jail/index.html",
    "revision": "4bcda810e55960f522c796e699b07f11"
  },
  {
    "url": "blog/skepticism/2016/07/03/ken/index.html",
    "revision": "ea79b35ca5941670eec45fb69a58f3e8"
  },
  {
    "url": "blog/skepticism/2016/07/10/ark/index.html",
    "revision": "b8b1b87d776c69063e9260de397fc3d6"
  },
  {
    "url": "blog/skepticism/2016/07/10/bee/index.html",
    "revision": "92efe3cdab6224a1b1263700c7c3f205"
  },
  {
    "url": "blog/skepticism/2016/07/10/index.html",
    "revision": "2770a00833b3ad20426a3b0e3f8d4cb4"
  },
  {
    "url": "blog/skepticism/2016/07/10/lottery/index.html",
    "revision": "b0c86e33d9429ac40980c6eee566164b"
  },
  {
    "url": "blog/skepticism/2016/07/10/murder/index.html",
    "revision": "3bcb93a9d719f017f7643440459f5b57"
  },
  {
    "url": "blog/skepticism/2016/07/17/dogs/index.html",
    "revision": "05f8c0130fd9a4676d69b66f49489adb"
  },
  {
    "url": "blog/skepticism/2016/07/17/fsm/index.html",
    "revision": "b20c505c803a1773096d0c961fa88aaa"
  },
  {
    "url": "blog/skepticism/2016/07/17/fyi/index.html",
    "revision": "03395a375b4c28d2833fee9a60d94f54"
  },
  {
    "url": "blog/skepticism/2016/07/17/index.html",
    "revision": "9b313566bf938277cbfcdb1d53f401fd"
  },
  {
    "url": "blog/skepticism/2016/07/17/natural/index.html",
    "revision": "f3d91951976568e69db0356478bbbedd"
  },
  {
    "url": "blog/skepticism/2016/07/17/pokemon/index.html",
    "revision": "4f16d168ed68175d0116799a5fbe00e3"
  },
  {
    "url": "blog/skepticism/2016/07/index.html",
    "revision": "dc4c44083c308c5256189819a1dcc35a"
  },
  {
    "url": "blog/skepticism/2016/08/07/icke/index.html",
    "revision": "6578bd09a5a96a0bad82447f82a1e4b9"
  },
  {
    "url": "blog/skepticism/2016/08/07/index.html",
    "revision": "8542125da3a26f6a84607081b86d9bd7"
  },
  {
    "url": "blog/skepticism/2016/08/21/brian/index.html",
    "revision": "44efbe78d89c083ac0c6e266af8f12df"
  },
  {
    "url": "blog/skepticism/2016/08/21/chlorine/index.html",
    "revision": "77ceb247a3c60f5f27d3469f23768e1b"
  },
  {
    "url": "blog/skepticism/2016/08/21/index.html",
    "revision": "39b8642d78fc91a80e1a5d595e477bfe"
  },
  {
    "url": "blog/skepticism/2016/08/21/murder/index.html",
    "revision": "b8bba4e1b2110a2ae37a60959e369ebf"
  },
  {
    "url": "blog/skepticism/2016/08/21/superfoods/index.html",
    "revision": "bc933fcd486692a8af70052f630cc277"
  },
  {
    "url": "blog/skepticism/2016/08/21/witch/index.html",
    "revision": "308d9206d8366db172abd471638d09fb"
  },
  {
    "url": "blog/skepticism/2016/08/28/alcohol/index.html",
    "revision": "c12866342f3d7fc0ead1572b36c5dbf0"
  },
  {
    "url": "blog/skepticism/2016/08/28/chiro/index.html",
    "revision": "6c02a9eff014f6691162803927281bb9"
  },
  {
    "url": "blog/skepticism/2016/08/28/index.html",
    "revision": "da83531a94a24c9b0066b7e67cf916a2"
  },
  {
    "url": "blog/skepticism/2016/08/28/processed/index.html",
    "revision": "87707bd6058df27066e4894349da3055"
  },
  {
    "url": "blog/skepticism/2016/08/28/sbh/index.html",
    "revision": "f2cdc5a0d2840b37b9514c38577fbc56"
  },
  {
    "url": "blog/skepticism/2016/08/index.html",
    "revision": "d59bb761b199a379e0f6f836fc625d02"
  },
  {
    "url": "blog/skepticism/2016/09/18/altruism/index.html",
    "revision": "86b5068fd58ebfda12651bb23b547cc1"
  },
  {
    "url": "blog/skepticism/2016/09/18/better/index.html",
    "revision": "e4dcd0a0b748c4fea186935f34546c79"
  },
  {
    "url": "blog/skepticism/2016/09/18/homeopathy/index.html",
    "revision": "4c59e16c132aea6a2a7cec5ed36ecb28"
  },
  {
    "url": "blog/skepticism/2016/09/18/index.html",
    "revision": "ff1f0c8314f95a7e143599dc6f34526b"
  },
  {
    "url": "blog/skepticism/2016/09/18/nonsense/index.html",
    "revision": "9972f3a89cdfd75bd4d43544b544173e"
  },
  {
    "url": "blog/skepticism/2016/09/18/trump/index.html",
    "revision": "f23ad69ce3ee8e9e85e851ed1713a8e3"
  },
  {
    "url": "blog/skepticism/2016/09/25/clinic/index.html",
    "revision": "59305435c062782d20fe472237771c09"
  },
  {
    "url": "blog/skepticism/2016/09/25/fluoride/index.html",
    "revision": "ff6a11822d5068e411060d0df9e594ac"
  },
  {
    "url": "blog/skepticism/2016/09/25/homeopathy/index.html",
    "revision": "96f5fdb2f46f3dbf982e93e616493062"
  },
  {
    "url": "blog/skepticism/2016/09/25/index.html",
    "revision": "36488f1b1601443354200d6163cf3633"
  },
  {
    "url": "blog/skepticism/2016/09/25/murder/index.html",
    "revision": "bcf497b28b09b30212fb51a072e8f8d6"
  },
  {
    "url": "blog/skepticism/2016/09/index.html",
    "revision": "1f52e07bf4ba3495a239bdc54e456a14"
  },
  {
    "url": "blog/skepticism/2016/10/21/bigfoot/index.html",
    "revision": "1ad2da1b4e9e47ab5a9bd587ce6e0f90"
  },
  {
    "url": "blog/skepticism/2016/10/21/breasts/index.html",
    "revision": "c3de4f50b2341e3f606ba5210b88eb66"
  },
  {
    "url": "blog/skepticism/2016/10/21/index.html",
    "revision": "859af89c74b8cf3eab9569b4501d7e41"
  },
  {
    "url": "blog/skepticism/2016/10/21/medsafe/index.html",
    "revision": "d77a45236f0c0aec9c14be011e89fd67"
  },
  {
    "url": "blog/skepticism/2016/10/21/zenteq/index.html",
    "revision": "13aabc0666e4a77cb7fc2f55c6e20faa"
  },
  {
    "url": "blog/skepticism/2016/10/index.html",
    "revision": "0babb350459c5262100352e9541efaed"
  },
  {
    "url": "blog/skepticism/2016/11/13/conference/index.html",
    "revision": "2283f060799970455a639f708e5cd5fa"
  },
  {
    "url": "blog/skepticism/2016/11/13/green/index.html",
    "revision": "b948034ac5adff3f25197c231510572f"
  },
  {
    "url": "blog/skepticism/2016/11/13/index.html",
    "revision": "799975a4729e04c4f6ffa17de62f42cb"
  },
  {
    "url": "blog/skepticism/2016/11/13/vice/index.html",
    "revision": "033231ff1d1e1c6f0a5314e2ae928dee"
  },
  {
    "url": "blog/skepticism/2016/11/27/bioptron/index.html",
    "revision": "cf2b2a9b88027813f6fa27aaf7a736aa"
  },
  {
    "url": "blog/skepticism/2016/11/27/conference/index.html",
    "revision": "44967c35d0190deb05b35f08e5f9e3d1"
  },
  {
    "url": "blog/skepticism/2016/11/27/earthquake/index.html",
    "revision": "975fc70fed46bac1ce3b5fee414483dd"
  },
  {
    "url": "blog/skepticism/2016/11/27/index.html",
    "revision": "adfd49c5b08697a18cce21858e72e859"
  },
  {
    "url": "blog/skepticism/2016/11/index.html",
    "revision": "136ffacc959dfbfb9d45a34f93d5aec4"
  },
  {
    "url": "blog/skepticism/2016/12/04/conference/index.html",
    "revision": "487ce109f33ac6f154a8a215beed5def"
  },
  {
    "url": "blog/skepticism/2016/12/04/index.html",
    "revision": "3ad6992339334e68c69ced418b9ddd68"
  },
  {
    "url": "blog/skepticism/2016/12/18/colin/index.html",
    "revision": "1f1253ed23acc352c4dce1bd87c92c23"
  },
  {
    "url": "blog/skepticism/2016/12/18/fiji/index.html",
    "revision": "f5a3beb75a4c9b1c294365f49ce9a329"
  },
  {
    "url": "blog/skepticism/2016/12/18/index.html",
    "revision": "56c2fc24e46b5d7d78c7259c3c6d05ca"
  },
  {
    "url": "blog/skepticism/2016/12/18/kinesiology/index.html",
    "revision": "b2846a6d4294b759da2c40176153ac04"
  },
  {
    "url": "blog/skepticism/2016/12/18/mmm/index.html",
    "revision": "92839c9b74908951b94aea9e529cc32e"
  },
  {
    "url": "blog/skepticism/2016/12/18/nigel/index.html",
    "revision": "2f1b4462eac5fd87528c5cf6232ae5c6"
  },
  {
    "url": "blog/skepticism/2016/12/index.html",
    "revision": "adc9ec2e503bb52e9bfebc9b969b3ac8"
  },
  {
    "url": "blog/skepticism/2016/index.html",
    "revision": "53c337d0a74690e584171c763915e22e"
  },
  {
    "url": "blog/skepticism/2017/01/22/index.html",
    "revision": "b9e7ab11686235071d9bbb9310433860"
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
    "revision": "6236bf4381918041ef8a0ff642497020"
  },
  {
    "url": "blog/skepticism/2017/01/index.html",
    "revision": "09cbea3a9893e8e19da8dedfa89c933a"
  },
  {
    "url": "blog/skepticism/2017/02/05/fraudster/index.html",
    "revision": "d6f8d7c9d788e073501a89700ace1d99"
  },
  {
    "url": "blog/skepticism/2017/02/05/gervais/index.html",
    "revision": "b9e253448d9a45813fff2116e335aca1"
  },
  {
    "url": "blog/skepticism/2017/02/05/index.html",
    "revision": "1c16d69b5ab172dd16efb50cd757d3ac"
  },
  {
    "url": "blog/skepticism/2017/02/05/scientology/index.html",
    "revision": "204e629b4ee0ca41631c4eae254e6c68"
  },
  {
    "url": "blog/skepticism/2017/02/19/homeopathy/index.html",
    "revision": "d85743e3434cc18771a4baacf36bec65"
  },
  {
    "url": "blog/skepticism/2017/02/19/index.html",
    "revision": "0d874bf25adc1d9e48e542f869c41f0e"
  },
  {
    "url": "blog/skepticism/2017/02/19/lottery/index.html",
    "revision": "41ccd997363ac8c7764faf169b7c18a1"
  },
  {
    "url": "blog/skepticism/2017/02/19/vaxxed/index.html",
    "revision": "eb01bc7b458ceaed10ec86fa91cc7b10"
  },
  {
    "url": "blog/skepticism/2017/02/19/whales/index.html",
    "revision": "b2aaa0e5505dcf3e087472fad7febca4"
  },
  {
    "url": "blog/skepticism/2017/02/index.html",
    "revision": "4d8fe7f7e9d50dbd9c4334022e126a27"
  },
  {
    "url": "blog/skepticism/2017/03/05/index.html",
    "revision": "a3102bb0453a0a27d42cfe0c1ac31567"
  },
  {
    "url": "blog/skepticism/2017/03/05/rea/index.html",
    "revision": "525cdcadb6ccbf9c536a29e254649c4c"
  },
  {
    "url": "blog/skepticism/2017/03/19/fake/index.html",
    "revision": "ca15ef8d590dcdfd6bc6120d057445b5"
  },
  {
    "url": "blog/skepticism/2017/03/19/index.html",
    "revision": "22955e0885d02cd518004bf9952e859f"
  },
  {
    "url": "blog/skepticism/2017/03/19/murder/index.html",
    "revision": "ebcd3a19a56aafefadfb51bc022591c1"
  },
  {
    "url": "blog/skepticism/2017/03/26/census/index.html",
    "revision": "99959410d0d74fe150c735d616f49f2d"
  },
  {
    "url": "blog/skepticism/2017/03/26/index.html",
    "revision": "9d7cfa59d854143e59d4ef7f93ba5003"
  },
  {
    "url": "blog/skepticism/2017/03/26/nzmj/index.html",
    "revision": "d054f4f1c3d738d5e28d87907152efc7"
  },
  {
    "url": "blog/skepticism/2017/03/26/shaquille/index.html",
    "revision": "4ec089626b418cbc8141ca72a4d0a6d8"
  },
  {
    "url": "blog/skepticism/2017/03/index.html",
    "revision": "1bbc0fa54a5095781ef066a1ffaaed1d"
  },
  {
    "url": "blog/skepticism/2017/04/02/index.html",
    "revision": "eaf45ffbeb436c5efe121e834c7c307a"
  },
  {
    "url": "blog/skepticism/2017/04/02/nasa/index.html",
    "revision": "c2369620557f972177287f24da091ed6"
  },
  {
    "url": "blog/skepticism/2017/04/02/science/index.html",
    "revision": "721665f57cacfec65a592da63a249738"
  },
  {
    "url": "blog/skepticism/2017/04/02/vaxxed/index.html",
    "revision": "55fbe8aaaf486c62bdb2f38c7fa900ba"
  },
  {
    "url": "blog/skepticism/2017/04/09/index.html",
    "revision": "caef1c8195a3844c34ca728065a41c78"
  },
  {
    "url": "blog/skepticism/2017/04/09/tekiri/index.html",
    "revision": "91369239ddd533b3ed51c79dbd731441"
  },
  {
    "url": "blog/skepticism/2017/04/09/vaxxed/index.html",
    "revision": "d8f224e0ad93249b5fa96fdc046701e4"
  },
  {
    "url": "blog/skepticism/2017/04/23/arise/index.html",
    "revision": "8e13d7f51e2f9493973a75a26504881e"
  },
  {
    "url": "blog/skepticism/2017/04/23/index.html",
    "revision": "0c1aef02473c4cfa0fdda5364b846465"
  },
  {
    "url": "blog/skepticism/2017/04/23/kelvin/index.html",
    "revision": "b5aed597b4b10a0db960a5ab326db298"
  },
  {
    "url": "blog/skepticism/2017/04/index.html",
    "revision": "bf6e3f5a611131be5e9cc19c757ce75b"
  },
  {
    "url": "blog/skepticism/2017/05/07/cancer/index.html",
    "revision": "452f044469780fe056349bbb2effa949"
  },
  {
    "url": "blog/skepticism/2017/05/07/index.html",
    "revision": "63587a6c220a0e2ee4e432884dec6617"
  },
  {
    "url": "blog/skepticism/2017/05/07/nigel/index.html",
    "revision": "b49235e327020d995906a92d2018bb17"
  },
  {
    "url": "blog/skepticism/2017/05/21/blasphemy/index.html",
    "revision": "7a85484f6fca5cdfcdd1425f4fc000e7"
  },
  {
    "url": "blog/skepticism/2017/05/21/flat/index.html",
    "revision": "8157c8c81a24edd85549595aaaeee469"
  },
  {
    "url": "blog/skepticism/2017/05/21/index.html",
    "revision": "3cfe30c6bd8a9339198d3d8beb0d0428"
  },
  {
    "url": "blog/skepticism/2017/05/21/maori/index.html",
    "revision": "eac3407d9c87deb7678bbf618917f606"
  },
  {
    "url": "blog/skepticism/2017/05/index.html",
    "revision": "1cfe3a9b98442e91a4ff85a9272a62b0"
  },
  {
    "url": "blog/skepticism/2017/06/04/bigelow/index.html",
    "revision": "778be16a3c4366f0db9bdbb0ae127b70"
  },
  {
    "url": "blog/skepticism/2017/06/04/climate/index.html",
    "revision": "792648827fc25fc5e9ce2d8c0fd6b2e3"
  },
  {
    "url": "blog/skepticism/2017/06/04/hansford/index.html",
    "revision": "041a9f163abba2fb7ee5c8889a48670a"
  },
  {
    "url": "blog/skepticism/2017/06/04/index.html",
    "revision": "8f76ec1ea6c96b05692954fe09fd6df2"
  },
  {
    "url": "blog/skepticism/2017/06/04/wasp/index.html",
    "revision": "44c6017a1a3ba29c7d1f14ba15145ba9"
  },
  {
    "url": "blog/skepticism/2017/06/11/colonic/index.html",
    "revision": "317653f80752489339dd75b43cb3104f"
  },
  {
    "url": "blog/skepticism/2017/06/11/credulous/index.html",
    "revision": "2a681935613bf8cbf2643dc1e7f709b8"
  },
  {
    "url": "blog/skepticism/2017/06/11/index.html",
    "revision": "f7724a604ce0ccc2fd30e4d79f74530e"
  },
  {
    "url": "blog/skepticism/2017/06/11/journals/index.html",
    "revision": "836c8a01c3475307a455e6e9468c2fc9"
  },
  {
    "url": "blog/skepticism/2017/06/18/breatharians/index.html",
    "revision": "c5480d144da02d46083eade8a09898b1"
  },
  {
    "url": "blog/skepticism/2017/06/18/fieldays/index.html",
    "revision": "341167238e776336bb77515660713cac"
  },
  {
    "url": "blog/skepticism/2017/06/18/index.html",
    "revision": "d46bbde753954ab8eb933a48a7ef7299"
  },
  {
    "url": "blog/skepticism/2017/06/18/jw/index.html",
    "revision": "84c3433a7b90488dcbd8a962c4519182"
  },
  {
    "url": "blog/skepticism/2017/06/18/oil/index.html",
    "revision": "64cbe8bae56324548300462fe2cb2a42"
  },
  {
    "url": "blog/skepticism/2017/06/index.html",
    "revision": "b7d65e7efbe6bcb22f8fa67403731b5c"
  },
  {
    "url": "blog/skepticism/2017/07/02/baby/index.html",
    "revision": "72647a7f1dde267fb02532c97c1d4529"
  },
  {
    "url": "blog/skepticism/2017/07/02/index.html",
    "revision": "45245534dc1afaf55aa2dba9c1377f29"
  },
  {
    "url": "blog/skepticism/2017/07/02/infowars/index.html",
    "revision": "90ca1daee67104d14ad88d82b119b8d3"
  },
  {
    "url": "blog/skepticism/2017/07/02/scientology/index.html",
    "revision": "1172cfa9538ffeb5e64f1d27d1ffbc37"
  },
  {
    "url": "blog/skepticism/2017/07/16/bananas/index.html",
    "revision": "0d374c1bb71d1e9fb6ac7d71b0c34dab"
  },
  {
    "url": "blog/skepticism/2017/07/16/circles/index.html",
    "revision": "e200645b397a9a1a3b9a0b36838a6c4c"
  },
  {
    "url": "blog/skepticism/2017/07/16/index.html",
    "revision": "b946ff566a9510134d81592118549a79"
  },
  {
    "url": "blog/skepticism/2017/07/16/siggi/index.html",
    "revision": "4fa353556564a7e0f296ef166400866a"
  },
  {
    "url": "blog/skepticism/2017/07/16/vaxxed/index.html",
    "revision": "0ca1cb0868b4188aa6f2aa3546147014"
  },
  {
    "url": "blog/skepticism/2017/07/30/bleach/index.html",
    "revision": "3778796b7410da0028304bed626044fc"
  },
  {
    "url": "blog/skepticism/2017/07/30/bluebeam/index.html",
    "revision": "5832ecbc32cdb0749535df723a3c083f"
  },
  {
    "url": "blog/skepticism/2017/07/30/index.html",
    "revision": "2b85b18ac379bacd1b8632f5d3e59cea"
  },
  {
    "url": "blog/skepticism/2017/07/30/police/index.html",
    "revision": "afd43e64bb354794ae0fb696a3c0f8af"
  },
  {
    "url": "blog/skepticism/2017/07/index.html",
    "revision": "887fd6794fbf17785eed9d3d71af1a87"
  },
  {
    "url": "blog/skepticism/2017/08/06/conned/index.html",
    "revision": "37947faceffc23310bcbc49e03d16ed4"
  },
  {
    "url": "blog/skepticism/2017/08/06/doll/index.html",
    "revision": "dfe80c86d7add5f590744e902174da99"
  },
  {
    "url": "blog/skepticism/2017/08/06/index.html",
    "revision": "a64f1a59f2ce92b96719bedb3e70b420"
  },
  {
    "url": "blog/skepticism/2017/08/06/jacinda/index.html",
    "revision": "59af18e5b5014346a8848b6d162df4ae"
  },
  {
    "url": "blog/skepticism/2017/08/06/lotto/index.html",
    "revision": "d88c4491905ab6bf17838190220ce19e"
  },
  {
    "url": "blog/skepticism/2017/08/27/index.html",
    "revision": "c3780232654672339661720d6cad3683"
  },
  {
    "url": "blog/skepticism/2017/08/27/naturopath/index.html",
    "revision": "0ac4f397c26fae5557823dffd564e5f2"
  },
  {
    "url": "blog/skepticism/2017/08/27/satanic/index.html",
    "revision": "897360753dcd3d5ccc29791a322a799b"
  },
  {
    "url": "blog/skepticism/2017/08/index.html",
    "revision": "a764852fd28d1e8574dce65c1fcfc5cb"
  },
  {
    "url": "blog/skepticism/2017/09/03/apocalypse/index.html",
    "revision": "75c73613807c01c92be300bd1ef86c5f"
  },
  {
    "url": "blog/skepticism/2017/09/03/cancer/index.html",
    "revision": "2edd3e96bd56032518e98da83f779bb3"
  },
  {
    "url": "blog/skepticism/2017/09/03/index.html",
    "revision": "122b44c170bb64aac549da72faa304d0"
  },
  {
    "url": "blog/skepticism/2017/09/03/rectangle/index.html",
    "revision": "ae78cb3a28471db07fd8ed6c839ad386"
  },
  {
    "url": "blog/skepticism/2017/09/03/stargate/index.html",
    "revision": "7b7ce4adba4f98459595f2d178865ceb"
  },
  {
    "url": "blog/skepticism/2017/09/index.html",
    "revision": "bd4ab548b15cf0b37378018c70d27022"
  },
  {
    "url": "blog/skepticism/2017/10/01/apocalypse/index.html",
    "revision": "c33b8aae9ed89f44954238a6b14b97f5"
  },
  {
    "url": "blog/skepticism/2017/10/01/freeman/index.html",
    "revision": "f2a957be64af23cbebeb2ab1ac455fad"
  },
  {
    "url": "blog/skepticism/2017/10/01/index.html",
    "revision": "49915610c6b9b2ce345a1f50b95bdc50"
  },
  {
    "url": "blog/skepticism/2017/10/01/pharmacy/index.html",
    "revision": "948a909ecacdc20f2f815b41e79fe98f"
  },
  {
    "url": "blog/skepticism/2017/10/08/index.html",
    "revision": "b49d79981af099b019da1da8408ce213"
  },
  {
    "url": "blog/skepticism/2017/10/08/pill/index.html",
    "revision": "7641c2bd4d63375d5a03eeae981ab7a1"
  },
  {
    "url": "blog/skepticism/2017/10/08/qsb/index.html",
    "revision": "3999d2d02c9e301bb5086280d6fe4717"
  },
  {
    "url": "blog/skepticism/2017/10/08/vegas/index.html",
    "revision": "1a2a8993a92b8554ed42753db5409f3e"
  },
  {
    "url": "blog/skepticism/2017/10/15/doterra/index.html",
    "revision": "8c5710b77a64eaec2a8726e99f9a2a38"
  },
  {
    "url": "blog/skepticism/2017/10/15/index.html",
    "revision": "4542e8154e0d251955abc513ad6c77ca"
  },
  {
    "url": "blog/skepticism/2017/10/15/lie/index.html",
    "revision": "ee2ffe2815f8a4dc588208da2c8d0bf7"
  },
  {
    "url": "blog/skepticism/2017/10/15/soap/index.html",
    "revision": "e351f9b388352a4254f707b30059d58e"
  },
  {
    "url": "blog/skepticism/2017/10/index.html",
    "revision": "02c9ae455cdf397c2d4e4002cde860ca"
  },
  {
    "url": "blog/skepticism/2017/11/05/conference/index.html",
    "revision": "95eada91d6037907504c774828e6e8ea"
  },
  {
    "url": "blog/skepticism/2017/11/05/glyphosate/index.html",
    "revision": "1eb8feb3eab85ccd32bcf69e8892535b"
  },
  {
    "url": "blog/skepticism/2017/11/05/index.html",
    "revision": "5b0a102ac9e1f7d46abc054c32e1f39a"
  },
  {
    "url": "blog/skepticism/2017/11/05/stranded/index.html",
    "revision": "a895ad636443146395b9fd48e0d7ded7"
  },
  {
    "url": "blog/skepticism/2017/11/05/tracts/index.html",
    "revision": "e4fec0ac2637b8e7b508c1c5e5d39685"
  },
  {
    "url": "blog/skepticism/2017/11/12/ghost/index.html",
    "revision": "e4bc3a47e00c71964cefc824b9d37224"
  },
  {
    "url": "blog/skepticism/2017/11/12/green/index.html",
    "revision": "4e460894c4cf5523994ffdfd0e1d7737"
  },
  {
    "url": "blog/skepticism/2017/11/12/harassment/index.html",
    "revision": "c7b7fcedcde1dadfb898f0bc0f29e06b"
  },
  {
    "url": "blog/skepticism/2017/11/12/index.html",
    "revision": "cc9c6557ac0a757968f0686df93d57b6"
  },
  {
    "url": "blog/skepticism/2017/11/12/libby/index.html",
    "revision": "2f7dd895b05830a3f87dd37346859460"
  },
  {
    "url": "blog/skepticism/2017/11/index.html",
    "revision": "5ecfe90fc5a5cae247dd53dff920939b"
  },
  {
    "url": "blog/skepticism/2017/12/03/acupuncture/index.html",
    "revision": "2dd68415402830ac4695983dfe977c64"
  },
  {
    "url": "blog/skepticism/2017/12/03/denialism/index.html",
    "revision": "62825cc08371c3af277a737ab809ca6b"
  },
  {
    "url": "blog/skepticism/2017/12/03/dowsing/index.html",
    "revision": "7b76f177fa323b29a231bbf8e570dd41"
  },
  {
    "url": "blog/skepticism/2017/12/03/holes/index.html",
    "revision": "0bdace8d0f933eaaf09c6915a24edba7"
  },
  {
    "url": "blog/skepticism/2017/12/03/index.html",
    "revision": "7c343403b458a2a4e832f90cf0dc97ab"
  },
  {
    "url": "blog/skepticism/2017/12/17/index.html",
    "revision": "6583e2b04fc44e77e16e04bca96432d0"
  },
  {
    "url": "blog/skepticism/2017/12/17/nhs/index.html",
    "revision": "7b3f05c90fac6f9fc21a723545260cd8"
  },
  {
    "url": "blog/skepticism/2017/12/17/oto/index.html",
    "revision": "875dccb69c4529d215d1c2ff58f2a217"
  },
  {
    "url": "blog/skepticism/2017/12/17/pastafarian/index.html",
    "revision": "a7fe69eb1cb08f507a89987baacd9990"
  },
  {
    "url": "blog/skepticism/2017/12/17/shc/index.html",
    "revision": "5145ebec8bcdc06a8058e8e1abdfbf28"
  },
  {
    "url": "blog/skepticism/2017/12/17/wellworks/index.html",
    "revision": "64c9adf2500974397460844320f864f0"
  },
  {
    "url": "blog/skepticism/2017/12/index.html",
    "revision": "4ecac3cb1ebc7b035e15b7e3535756e9"
  },
  {
    "url": "blog/skepticism/2017/index.html",
    "revision": "c2a96eed22b5e29ec5c8c2b6f6ede43e"
  },
  {
    "url": "blog/skepticism/2018/01/21/grounding/index.html",
    "revision": "e179c5deaf200c7b6627a4de735485e7"
  },
  {
    "url": "blog/skepticism/2018/01/21/index.html",
    "revision": "ff70548b3a839fd475f518f21d0ac5e4"
  },
  {
    "url": "blog/skepticism/2018/01/21/naturopath/index.html",
    "revision": "ac68cc7322997b85d778bbd1c8063a4c"
  },
  {
    "url": "blog/skepticism/2018/01/21/respen/index.html",
    "revision": "063829451c5bb9e1fde1998c3b192a96"
  },
  {
    "url": "blog/skepticism/2018/01/28/bears/index.html",
    "revision": "0865c8e0c1187af06ffabe5d28534f86"
  },
  {
    "url": "blog/skepticism/2018/01/28/index.html",
    "revision": "e4ab500ba606711611c97bd28d8f4569"
  },
  {
    "url": "blog/skepticism/2018/01/28/peppering/index.html",
    "revision": "71975f1f39900aed3bd6acc10f09b26a"
  },
  {
    "url": "blog/skepticism/2018/01/28/pet/index.html",
    "revision": "4b747fb02677e83fd0dad7c8658b40c0"
  },
  {
    "url": "blog/skepticism/2018/01/28/quake/index.html",
    "revision": "28261db578181ec9a0e3b074137f9a23"
  },
  {
    "url": "blog/skepticism/2018/01/28/scientology/index.html",
    "revision": "0cbcc981f7844befa7783c830543be54"
  },
  {
    "url": "blog/skepticism/2018/01/index.html",
    "revision": "6b612de0d58d8d5e85720d91a5c24f21"
  },
  {
    "url": "blog/skepticism/2018/02/11/asa/index.html",
    "revision": "da56bc0be7413b516344307310c71feb"
  },
  {
    "url": "blog/skepticism/2018/02/11/cannabis/index.html",
    "revision": "63cb12ea1759937cfdf611416b48f634"
  },
  {
    "url": "blog/skepticism/2018/02/11/elon/index.html",
    "revision": "037f6365273d3d05137b1ca56279e958"
  },
  {
    "url": "blog/skepticism/2018/02/11/homeopathy/index.html",
    "revision": "101a5e0035fc37d80a089429d2419e01"
  },
  {
    "url": "blog/skepticism/2018/02/11/index.html",
    "revision": "5e424e162c12c914e3b9338fde5d674f"
  },
  {
    "url": "blog/skepticism/2018/02/11/water/index.html",
    "revision": "3c25af97f4512a609d6d2fe455366098"
  },
  {
    "url": "blog/skepticism/2018/02/25/crisis/index.html",
    "revision": "89847fc1159d65374891cfce947feb8e"
  },
  {
    "url": "blog/skepticism/2018/02/25/eggs/index.html",
    "revision": "112313686826f5f53a373db2729e82f6"
  },
  {
    "url": "blog/skepticism/2018/02/25/fsm/index.html",
    "revision": "74d535b49b0ac3e1113e918c3bfb83e5"
  },
  {
    "url": "blog/skepticism/2018/02/25/index.html",
    "revision": "60e75b8d0432f1af3bfc9b067d10d5c6"
  },
  {
    "url": "blog/skepticism/2018/02/25/number/index.html",
    "revision": "6beed77084c53c495cc2bea2231d1520"
  },
  {
    "url": "blog/skepticism/2018/02/25/quackery/index.html",
    "revision": "28e76ff1acd17a3f081aaac4a78379a8"
  },
  {
    "url": "blog/skepticism/2018/02/index.html",
    "revision": "d1d1d0d007445bad743210e18fd54df5"
  },
  {
    "url": "blog/skepticism/2018/03/11/ai/index.html",
    "revision": "301616d377baca01d2594b4555a18a90"
  },
  {
    "url": "blog/skepticism/2018/03/11/index.html",
    "revision": "ce3970e0b5332bc017b6fd347cfaa342"
  },
  {
    "url": "blog/skepticism/2018/03/11/radiation/index.html",
    "revision": "e71c5fe0a77a579dcb11ce7ee294e8f5"
  },
  {
    "url": "blog/skepticism/2018/03/11/reiki/index.html",
    "revision": "a7cc251c6e2e53b548033e128f304d12"
  },
  {
    "url": "blog/skepticism/2018/03/11/ufo/index.html",
    "revision": "402b9db4fe4c99e288ab037d2c3ef3f6"
  },
  {
    "url": "blog/skepticism/2018/03/18/ghost/index.html",
    "revision": "f483ccb4df00b69a95150579a7a663cc"
  },
  {
    "url": "blog/skepticism/2018/03/18/index.html",
    "revision": "b9f0d0db16f25402d38c470993843f92"
  },
  {
    "url": "blog/skepticism/2018/03/18/psychic/index.html",
    "revision": "6019412f1ecdf0a2a5c312f508f4da36"
  },
  {
    "url": "blog/skepticism/2018/03/18/quack/index.html",
    "revision": "a48b78a417fb8b0ce0c920cab7fbbd95"
  },
  {
    "url": "blog/skepticism/2018/03/18/radiation/index.html",
    "revision": "0c9f26af33ba3aaa65aaa060561a7e74"
  },
  {
    "url": "blog/skepticism/2018/03/index.html",
    "revision": "775a29db8ee7e3ad4563e12f83e6814b"
  },
  {
    "url": "blog/skepticism/2018/04/08/calocurb/index.html",
    "revision": "80c8c3313b37506d801fbaadd3c199d2"
  },
  {
    "url": "blog/skepticism/2018/04/08/cam/index.html",
    "revision": "adaef2c7860bfe09a31e41df21071c86"
  },
  {
    "url": "blog/skepticism/2018/04/08/index.html",
    "revision": "9394dc0f6211e92ca18682184e172301"
  },
  {
    "url": "blog/skepticism/2018/04/08/psychic/index.html",
    "revision": "4048cf437973524c344220c3c2572b06"
  },
  {
    "url": "blog/skepticism/2018/04/08/vaccines/index.html",
    "revision": "fa830dbf274942851f3cf64c845d2a47"
  },
  {
    "url": "blog/skepticism/2018/04/15/coffee/index.html",
    "revision": "542d42cfea08860cc00e14ed4d7c0c6a"
  },
  {
    "url": "blog/skepticism/2018/04/15/ignorance/index.html",
    "revision": "722b7782be1a4bf4a1ece8b40ee86f1b"
  },
  {
    "url": "blog/skepticism/2018/04/15/index.html",
    "revision": "37589b0e39af1ff44d50f4ce3b9daf6b"
  },
  {
    "url": "blog/skepticism/2018/04/15/nasa/index.html",
    "revision": "ba877de02f400ca024a97dad4883909f"
  },
  {
    "url": "blog/skepticism/2018/04/15/tapu/index.html",
    "revision": "7d10521245d5024861162a654a684279"
  },
  {
    "url": "blog/skepticism/2018/04/29/google/index.html",
    "revision": "a551149fd916713129923b89c087d2ef"
  },
  {
    "url": "blog/skepticism/2018/04/29/homeopathy/index.html",
    "revision": "8fd0f68fb5e424b36a1e7fe0982ea27f"
  },
  {
    "url": "blog/skepticism/2018/04/29/index.html",
    "revision": "cd27546a7561d7202684beb0682f42da"
  },
  {
    "url": "blog/skepticism/2018/04/29/ken/index.html",
    "revision": "65a823a7641d9405f4284e79387de212"
  },
  {
    "url": "blog/skepticism/2018/04/29/v2k/index.html",
    "revision": "2f1247eaa526c09543b743a509dd16dd"
  },
  {
    "url": "blog/skepticism/2018/04/index.html",
    "revision": "36ed4103488ab671b1ddeb424f69fbc0"
  },
  {
    "url": "blog/skepticism/2018/05/13/astrology/index.html",
    "revision": "14fa4b9654586448a0c02073af2c8615"
  },
  {
    "url": "blog/skepticism/2018/05/13/crystals/index.html",
    "revision": "34ed48174218ab9f08d2f691d9ee1fe6"
  },
  {
    "url": "blog/skepticism/2018/05/13/dawkins/index.html",
    "revision": "f0ce6a4206a9a541a8d529d6757d9f8e"
  },
  {
    "url": "blog/skepticism/2018/05/13/index.html",
    "revision": "27ec1129805eda5b381176fc38f7c0ea"
  },
  {
    "url": "blog/skepticism/2018/05/13/kangen/index.html",
    "revision": "21598840f9dbb90af32245ab92cc61af"
  },
  {
    "url": "blog/skepticism/2018/05/13/vitamins/index.html",
    "revision": "dec282ad133f6e2da3ed459a22114748"
  },
  {
    "url": "blog/skepticism/2018/05/27/flat/index.html",
    "revision": "7f4265dcabab87c1d257a8f2c1a9eeeb"
  },
  {
    "url": "blog/skepticism/2018/05/27/index.html",
    "revision": "0b5eaff60cd781c0715401d9f4ee453d"
  },
  {
    "url": "blog/skepticism/2018/05/27/kangen/index.html",
    "revision": "2ac5c91485cc9590b95cd44845393a20"
  },
  {
    "url": "blog/skepticism/2018/05/27/ness/index.html",
    "revision": "2201c2496172b1647504a22eeb82a229"
  },
  {
    "url": "blog/skepticism/2018/05/27/oz/index.html",
    "revision": "874e1186a8d9d3e6b6962e790eff941b"
  },
  {
    "url": "blog/skepticism/2018/05/27/psychic/index.html",
    "revision": "62648fd569565554fd21599440549e3e"
  },
  {
    "url": "blog/skepticism/2018/05/index.html",
    "revision": "d9da58dd1464adc0d6b65c692cae685b"
  },
  {
    "url": "blog/skepticism/2018/06/10/astrology/index.html",
    "revision": "69f53ff4f983276e2a3accde5f60e50e"
  },
  {
    "url": "blog/skepticism/2018/06/10/index.html",
    "revision": "000e3923eae0f5a267ab3954b9bdc9d4"
  },
  {
    "url": "blog/skepticism/2018/06/10/nhs/index.html",
    "revision": "8b5d1f870a268c9578530f329ef1301b"
  },
  {
    "url": "blog/skepticism/2018/06/10/shakti/index.html",
    "revision": "327bc59f98456903f63d7b7000abb412"
  },
  {
    "url": "blog/skepticism/2018/06/10/weetbix/index.html",
    "revision": "114ccfe718f60cc79e6499f96c5fb0a7"
  },
  {
    "url": "blog/skepticism/2018/06/24/blasphemy/index.html",
    "revision": "3b3c5d23025da8250b434b2f487f23c6"
  },
  {
    "url": "blog/skepticism/2018/06/24/cannabis/index.html",
    "revision": "326b36b2d1c2daffa6b5327d168843d0"
  },
  {
    "url": "blog/skepticism/2018/06/24/hotdog/index.html",
    "revision": "dea6a9cad85fa2a37cb8172a9cf0ee98"
  },
  {
    "url": "blog/skepticism/2018/06/24/index.html",
    "revision": "7e447c4c55d1f82b8739d597864db0d2"
  },
  {
    "url": "blog/skepticism/2018/06/24/led/index.html",
    "revision": "1253d6c00172a1750ae2c3a69cbe74e7"
  },
  {
    "url": "blog/skepticism/2018/06/index.html",
    "revision": "65d9f5ef0120b9f7d8cff659252863b4"
  },
  {
    "url": "blog/skepticism/2018/07/08/bullet/index.html",
    "revision": "0a0318dac4aa7d8e9236e80c537f66d7"
  },
  {
    "url": "blog/skepticism/2018/07/08/chiros/index.html",
    "revision": "4df93b2dfb6cab3eb67ad8695c2c752c"
  },
  {
    "url": "blog/skepticism/2018/07/08/hiv/index.html",
    "revision": "fb741675b4e52cd9f185371ca251dc74"
  },
  {
    "url": "blog/skepticism/2018/07/08/hrv/index.html",
    "revision": "15785f9b2556107205df4c7547611635"
  },
  {
    "url": "blog/skepticism/2018/07/08/index.html",
    "revision": "b873d084b51378e1646217427875e556"
  },
  {
    "url": "blog/skepticism/2018/07/22/cancer/index.html",
    "revision": "a487c6e0fc178441f14ca0dd020aeb10"
  },
  {
    "url": "blog/skepticism/2018/07/22/index.html",
    "revision": "7fde5cdd72185dd3b3d599c9fc425639"
  },
  {
    "url": "blog/skepticism/2018/07/22/resurrection/index.html",
    "revision": "1aca73a02fed21c4c467ddd7bd98eb89"
  },
  {
    "url": "blog/skepticism/2018/07/22/talc/index.html",
    "revision": "a3eab4749162ad79a63da7662fb20d5d"
  },
  {
    "url": "blog/skepticism/2018/07/22/visas/index.html",
    "revision": "39ae09f905af8cfffb59450c914c0d2d"
  },
  {
    "url": "blog/skepticism/2018/07/index.html",
    "revision": "af74777413a8faf989be92afac94cd00"
  },
  {
    "url": "blog/skepticism/2018/08/05/conf/index.html",
    "revision": "70cc139175d5695e0cb51276b0aa984c"
  },
  {
    "url": "blog/skepticism/2018/08/05/index.html",
    "revision": "9d4f67b97124933c76842d6da0c8f687"
  },
  {
    "url": "blog/skepticism/2018/08/05/qanon/index.html",
    "revision": "c5008ef48f3182e959bfc8735d2bd3cc"
  },
  {
    "url": "blog/skepticism/2018/08/19/index.html",
    "revision": "f02bdf6cfbe391ad76f0bc8cac71da82"
  },
  {
    "url": "blog/skepticism/2018/08/19/jw/index.html",
    "revision": "334f9aba8b4cf6df5a55ed3e9620b855"
  },
  {
    "url": "blog/skepticism/2018/08/index.html",
    "revision": "d5e73a94a695c919f6f58788ac60b1d5"
  },
  {
    "url": "blog/skepticism/2018/09/02/allergy/index.html",
    "revision": "9e77bb4b9e4c109db4d7ff80930ce594"
  },
  {
    "url": "blog/skepticism/2018/09/02/catholic/index.html",
    "revision": "fd70554d7c10c733e7ce93ab67df4a9b"
  },
  {
    "url": "blog/skepticism/2018/09/02/index.html",
    "revision": "58efafde20e12238df7938439f89d19e"
  },
  {
    "url": "blog/skepticism/2018/09/02/jw/index.html",
    "revision": "201d8472f9407750bb380ebad1243c89"
  },
  {
    "url": "blog/skepticism/2018/09/02/sen/index.html",
    "revision": "d91b1a970e87f244632f07d6968e8491"
  },
  {
    "url": "blog/skepticism/2018/09/16/1080/index.html",
    "revision": "7e92b643441a9bb6516ff0b3a40faadb"
  },
  {
    "url": "blog/skepticism/2018/09/16/church/index.html",
    "revision": "0afb6e78d03f16d6684255d3ca69fde9"
  },
  {
    "url": "blog/skepticism/2018/09/16/index.html",
    "revision": "0af4c304f5440699978e7ec34d493c63"
  },
  {
    "url": "blog/skepticism/2018/09/16/jones/index.html",
    "revision": "651c3188a44445c49d7ae5ccaf19d021"
  },
  {
    "url": "blog/skepticism/2018/09/16/scammers/index.html",
    "revision": "f9caf13b9e6989602ca61327edc72d4e"
  },
  {
    "url": "blog/skepticism/2018/09/30/index.html",
    "revision": "7c3a7a71bd23080562f764deba66784e"
  },
  {
    "url": "blog/skepticism/2018/09/30/jw/index.html",
    "revision": "3819db64742d0e4711174d414128a607"
  },
  {
    "url": "blog/skepticism/2018/09/30/oto/index.html",
    "revision": "3d134b6da32ea172916038e1a982a9e3"
  },
  {
    "url": "blog/skepticism/2018/09/30/who/index.html",
    "revision": "b961aca3f0cfb9afe642d0c8e0849c77"
  },
  {
    "url": "blog/skepticism/2018/09/index.html",
    "revision": "02ddaee818746bc5482b0289029ff1be"
  },
  {
    "url": "blog/skepticism/2018/10/14/hacked/index.html",
    "revision": "7eeb5592928e76416b97e3262a12536a"
  },
  {
    "url": "blog/skepticism/2018/10/14/index.html",
    "revision": "9d50546b09351064a23237f69efce8fd"
  },
  {
    "url": "blog/skepticism/2018/10/14/kangen/index.html",
    "revision": "bdf6bccb5dbbeba0c995205f19ccf487"
  },
  {
    "url": "blog/skepticism/2018/10/14/pakistan/index.html",
    "revision": "39657a5af2a7a1100a5bea0aab599589"
  },
  {
    "url": "blog/skepticism/2018/10/14/sarah/index.html",
    "revision": "a8273f2ce66e5d0be395dc4d767ac9a8"
  },
  {
    "url": "blog/skepticism/2018/10/28/blasphemy/index.html",
    "revision": "5092cbed99d189caf994946429e315af"
  },
  {
    "url": "blog/skepticism/2018/10/28/hrv/index.html",
    "revision": "bc8f6e864d324120ce18ecc0dd64f349"
  },
  {
    "url": "blog/skepticism/2018/10/28/index.html",
    "revision": "acb3d3469122f499e3f1bc8c0262695a"
  },
  {
    "url": "blog/skepticism/2018/10/28/jesus/index.html",
    "revision": "b55f1f96e813eb5527719f21b24403ba"
  },
  {
    "url": "blog/skepticism/2018/10/28/natural/index.html",
    "revision": "cf1c2bdc6c2992a9a7bd3b9e2a109be5"
  },
  {
    "url": "blog/skepticism/2018/10/index.html",
    "revision": "865bff04b301b2d3f806bbe1e135caa5"
  },
  {
    "url": "blog/skepticism/2018/11/04/bibi/index.html",
    "revision": "241595a6c381f9a9dea8e0c0fa3706ee"
  },
  {
    "url": "blog/skepticism/2018/11/04/index.html",
    "revision": "97ebf137a9920bde7035c05a7b9ed574"
  },
  {
    "url": "blog/skepticism/2018/11/04/jesus/index.html",
    "revision": "601de220c45dcc5641bbcdccb1392423"
  },
  {
    "url": "blog/skepticism/2018/11/04/obdii/index.html",
    "revision": "3b1a2f5f798e0633d4bd11e93844282a"
  },
  {
    "url": "blog/skepticism/2018/11/04/sleepdrops/index.html",
    "revision": "c20cb60ad21c6a09f506a2ff3d099715"
  },
  {
    "url": "blog/skepticism/2018/11/index.html",
    "revision": "52d4e46b679f9fdd2f9c4c190d32e903"
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
    "revision": "7c8af2c312c9ec7cb5d2d8119eee3c2b"
  },
  {
    "url": "blog/skepticism/2018/12/02/ri/index.html",
    "revision": "0ee27a63218ece95e16c511b1ad44948"
  },
  {
    "url": "blog/skepticism/2018/12/16/blasphemy/index.html",
    "revision": "58c9606a5ad48514a0822ac90076182e"
  },
  {
    "url": "blog/skepticism/2018/12/16/index.html",
    "revision": "ef9307010e0b7cf6995402feae530e29"
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
    "revision": "dcd950097699bf2ad0eb0df56e519031"
  },
  {
    "url": "blog/skepticism/2018/index.html",
    "revision": "552e88b25147de86a2b1325146d0d6f1"
  },
  {
    "url": "blog/skepticism/index.html",
    "revision": "4a2bced896b3bdbb824e0523efa3c342"
  },
  {
    "url": "blog/tag/index.html",
    "revision": "32ce99192e4dcb0ed469330f9cd84d93"
  },
  {
    "url": "contact/index.html",
    "revision": "900ff2f506af83f3ca5ab2036f223307"
  },
  {
    "url": "cv/cover/index.html",
    "revision": "47574a693af7c349527b255170f42137"
  },
  {
    "url": "cv/full.html",
    "revision": "aacfc90c5b9f5a7400651757051a9f20"
  },
  {
    "url": "cv/full/index.html",
    "revision": "26a8d284d8108e4c3cb3514c44484ef0"
  },
  {
    "url": "cv/index.html",
    "revision": "ddacdf2454b4f6c900cc65290ab409a6"
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
    "revision": "e2aa4b8f63d07757ba663fc18a64a8b2"
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
    "revision": "da8995354b9146a5c7eb1fd1a8ff8ba6"
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
    "revision": "9187b9201887fbb559336fad28f4826f"
  },
  {
    "url": "status/index.html",
    "revision": "f95e05cbc6fdc3f964c3e4e21a6dc563"
  },
  {
    "url": "status/steam/index.html",
    "revision": "60218c40598e4730bcb78023742dbec0"
  },
  {
    "url": "status/twitter/index.html",
    "revision": "f662e6a341875e5e0c7a9f03d0796e44"
  },
  {
    "url": "status/wikipedia/index.html",
    "revision": "a1dfd6aff255a61acd40530c49f2f825"
  },
  {
    "url": "test/index.html",
    "revision": "dcbfab58168de9d935cd0b7f65769310"
  },
  {
    "url": "test/webcam/index.html",
    "revision": "222092d553f853e09e3971284a8e6bcd"
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
