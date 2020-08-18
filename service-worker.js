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
    "revision": "15a5ef613ead09c3366d25b268d54c9a"
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
    "revision": "3af7913ebec0a6dc974e9f4854ebe1d3"
  },
  {
    "url": "assets/js/100.js",
    "revision": "cde81da809c228e694941869ea136478"
  },
  {
    "url": "assets/js/101.js",
    "revision": "06de059e9d4527b623b6b0c725965e8e"
  },
  {
    "url": "assets/js/102.js",
    "revision": "cedd53c39ea8554ec4304a0fba6648a6"
  },
  {
    "url": "assets/js/103.js",
    "revision": "3cecaad9bf379fe62921c535c88ae167"
  },
  {
    "url": "assets/js/104.js",
    "revision": "ea64b83be988eebe1818400057dbe342"
  },
  {
    "url": "assets/js/105.js",
    "revision": "16718140c4ec373cef51b14b152970a4"
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
    "revision": "ce238adcb1ed33253bb6cafaf272283c"
  },
  {
    "url": "assets/js/11.js",
    "revision": "8c38794098e3ad8f94d16c48030641aa"
  },
  {
    "url": "assets/js/110.js",
    "revision": "8c3e01850994a8bca7e9305215086ed5"
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
    "revision": "4e190ee12f499d6ed5c959769cbe5b23"
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
    "revision": "776e3f2b66c1c744c555d191aef7debf"
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
    "revision": "90f62fb9202c03d52a865fa7c5cfc9b2"
  },
  {
    "url": "assets/js/140.js",
    "revision": "86ff71d85128e8aa2984cee3902a30d8"
  },
  {
    "url": "assets/js/141.js",
    "revision": "1075ed01015a95ee8bd6ef3557914bbe"
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
    "revision": "fd90e667101fa548342ac972d772e7e1"
  },
  {
    "url": "assets/js/163.js",
    "revision": "1248c2638cc85da333d64a92c52ac065"
  },
  {
    "url": "assets/js/164.js",
    "revision": "99e96443faf665c8b75ee9913b8e7af0"
  },
  {
    "url": "assets/js/165.js",
    "revision": "455578d158690312ef62953d00d3c7c3"
  },
  {
    "url": "assets/js/166.js",
    "revision": "571d2116da37b0dfa87c9bb534e59e02"
  },
  {
    "url": "assets/js/167.js",
    "revision": "32521a575e90f0cc6f269da1bdbb082a"
  },
  {
    "url": "assets/js/168.js",
    "revision": "1423065361ad6c656e9c4c414f4ada11"
  },
  {
    "url": "assets/js/169.js",
    "revision": "a57daf9c5122502c8ea5173f5cc689f1"
  },
  {
    "url": "assets/js/17.js",
    "revision": "37e566ab4e021778f95db7f5167adc8b"
  },
  {
    "url": "assets/js/170.js",
    "revision": "60f722b413963124110f1d43e0b429db"
  },
  {
    "url": "assets/js/171.js",
    "revision": "acda7365a39690886945a225c0a8a47e"
  },
  {
    "url": "assets/js/172.js",
    "revision": "98ce8ea50fb00e2544d0f67db8dc23cf"
  },
  {
    "url": "assets/js/173.js",
    "revision": "1c1e23748188e82e87a717c7e4c1c27c"
  },
  {
    "url": "assets/js/174.js",
    "revision": "3197c4f82ebfb054f41bac64fc5e1ab3"
  },
  {
    "url": "assets/js/175.js",
    "revision": "0ca22bab0d81f0ab1a37d7f13c997292"
  },
  {
    "url": "assets/js/176.js",
    "revision": "4d8453f751a21c6daee509943e27d6f6"
  },
  {
    "url": "assets/js/177.js",
    "revision": "33e2916df603aac2fb397550e699eb6a"
  },
  {
    "url": "assets/js/178.js",
    "revision": "c95bf181ab4693c4917212495dc6b265"
  },
  {
    "url": "assets/js/179.js",
    "revision": "85e0d91cd1fcec2584692869f1bf64e7"
  },
  {
    "url": "assets/js/18.js",
    "revision": "947b6f5a3cbc531ecef6cc3bda7e5b28"
  },
  {
    "url": "assets/js/180.js",
    "revision": "2d4ad5c3a7f77c1a53f4c0b1eb3078cd"
  },
  {
    "url": "assets/js/181.js",
    "revision": "33a480cf6e558c803c250c69bcdd6805"
  },
  {
    "url": "assets/js/182.js",
    "revision": "1296c42bb4e49634091ae1d9343eb864"
  },
  {
    "url": "assets/js/183.js",
    "revision": "b63c153cb666998dd732138d7c4175ea"
  },
  {
    "url": "assets/js/184.js",
    "revision": "41f521a49a1cea2594fcd05293f496ff"
  },
  {
    "url": "assets/js/185.js",
    "revision": "a0791371be4e96b671f36214374fe48e"
  },
  {
    "url": "assets/js/186.js",
    "revision": "9f8cda3782e84e52bca2893d08d38d42"
  },
  {
    "url": "assets/js/187.js",
    "revision": "5b02624bbc0b9e4ffe0c64fd4dc9ade6"
  },
  {
    "url": "assets/js/188.js",
    "revision": "f5647949673bc3a8af56ecc88ffa7fd3"
  },
  {
    "url": "assets/js/189.js",
    "revision": "674551042d36a1268c226506cdf54a65"
  },
  {
    "url": "assets/js/19.js",
    "revision": "dc52755a04cc0b10685fc785659ff5af"
  },
  {
    "url": "assets/js/190.js",
    "revision": "1246ae1e71bc4fcd5a440b8cdc792b66"
  },
  {
    "url": "assets/js/191.js",
    "revision": "049ab3ffe34d5c3685b3d0b7293f4008"
  },
  {
    "url": "assets/js/192.js",
    "revision": "3be68e528c6425d6cc0f48639e726267"
  },
  {
    "url": "assets/js/193.js",
    "revision": "fd1b2322d0665b5aa37f6c71b2f9ba9b"
  },
  {
    "url": "assets/js/194.js",
    "revision": "9c72c261522f8575d21995e1d35034b0"
  },
  {
    "url": "assets/js/195.js",
    "revision": "8932f1bc38145560b2c6ed1019d55fc8"
  },
  {
    "url": "assets/js/196.js",
    "revision": "9dd65a9b40afad72767aa1e21abbc451"
  },
  {
    "url": "assets/js/197.js",
    "revision": "2c10c42ec07974f6949fe3498853d6d2"
  },
  {
    "url": "assets/js/198.js",
    "revision": "4a681a3e1343f3b37a10f26ff0f0c7b0"
  },
  {
    "url": "assets/js/199.js",
    "revision": "62441907fdbbcc2411ed890e862a5c2f"
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
    "revision": "372f8adca5060a7b7e6e5fdf72ff140c"
  },
  {
    "url": "assets/js/201.js",
    "revision": "b57c617e105f706fc9764f97c7c47682"
  },
  {
    "url": "assets/js/202.js",
    "revision": "3316ed2062a9532f56dd095e23ea2420"
  },
  {
    "url": "assets/js/203.js",
    "revision": "063bafaa49027b6fe423724e9b47ba30"
  },
  {
    "url": "assets/js/204.js",
    "revision": "ae9472533a952052cbc626a8f9306b30"
  },
  {
    "url": "assets/js/205.js",
    "revision": "0e68e4175322cc7a743b3e945a305eb2"
  },
  {
    "url": "assets/js/206.js",
    "revision": "df57db36baeb12f4752c2d60b44db70c"
  },
  {
    "url": "assets/js/207.js",
    "revision": "412de4a9048a25d6364d688526527b6b"
  },
  {
    "url": "assets/js/208.js",
    "revision": "997dbf4e834a55fd79f3e8a9f4d0fcf8"
  },
  {
    "url": "assets/js/209.js",
    "revision": "029a3af80c729da920e0bad9e7f380cf"
  },
  {
    "url": "assets/js/21.js",
    "revision": "43bf007c3bd2de3029a6c4721ac62b76"
  },
  {
    "url": "assets/js/210.js",
    "revision": "8cce1dfbe972b42b650b06d059f40d46"
  },
  {
    "url": "assets/js/211.js",
    "revision": "be2e24d959f07e0adec09be21f2de782"
  },
  {
    "url": "assets/js/212.js",
    "revision": "173a43bef923d0f0ec68d00551a1697c"
  },
  {
    "url": "assets/js/213.js",
    "revision": "ee1516258f5a4205245377b3ffdc9ed2"
  },
  {
    "url": "assets/js/214.js",
    "revision": "e5e6d91a6ea04be7fd03e2560aca09db"
  },
  {
    "url": "assets/js/215.js",
    "revision": "733f9df0ac5ba68a957a5c7021cc7be8"
  },
  {
    "url": "assets/js/216.js",
    "revision": "490d65917cf96f5634d9e6af23b38abe"
  },
  {
    "url": "assets/js/217.js",
    "revision": "d4489dc2ae10eb3ac5b396fbe6cd4acf"
  },
  {
    "url": "assets/js/218.js",
    "revision": "154fa487ddd6660d596535a67335b6c6"
  },
  {
    "url": "assets/js/219.js",
    "revision": "cefe338c12339e1d99e39777adfcf7fc"
  },
  {
    "url": "assets/js/22.js",
    "revision": "f6590d82bae5bea8005d3ae70b25c103"
  },
  {
    "url": "assets/js/220.js",
    "revision": "1926bacf1500e69dc8b5432f03d9c229"
  },
  {
    "url": "assets/js/221.js",
    "revision": "46ea9b71291b577599fc97ec8d557958"
  },
  {
    "url": "assets/js/222.js",
    "revision": "c33716df790a11c5e90f942bead98435"
  },
  {
    "url": "assets/js/223.js",
    "revision": "f6bfbbd36b572e6083115f012cc3f627"
  },
  {
    "url": "assets/js/224.js",
    "revision": "38f39f87adaff9f866c2bf37330f3b35"
  },
  {
    "url": "assets/js/225.js",
    "revision": "b273f4ccc9119186911b4340dc90c132"
  },
  {
    "url": "assets/js/226.js",
    "revision": "122ed93d6bb16149f965772f7c5a60ab"
  },
  {
    "url": "assets/js/227.js",
    "revision": "c7236b886177aa4ffa73b3d9e744fe35"
  },
  {
    "url": "assets/js/228.js",
    "revision": "95b3f20109c47e0db8d8581515132392"
  },
  {
    "url": "assets/js/229.js",
    "revision": "8450d15100d8d911540a3691a8ccb55c"
  },
  {
    "url": "assets/js/23.js",
    "revision": "93af8f8226d3f439e4d2ae54ea2f6489"
  },
  {
    "url": "assets/js/230.js",
    "revision": "2ee1edbd43fe33107f3df22ac89fa825"
  },
  {
    "url": "assets/js/231.js",
    "revision": "96a8b3421a99a5ebbc1a4d5f1574c1e3"
  },
  {
    "url": "assets/js/232.js",
    "revision": "7394917861be1fe28337cb7cf6794968"
  },
  {
    "url": "assets/js/233.js",
    "revision": "b85f2e55fdd1bc33bffc415051dcf225"
  },
  {
    "url": "assets/js/234.js",
    "revision": "7e17cff5ecacbf07e270d7903cf3ff3c"
  },
  {
    "url": "assets/js/235.js",
    "revision": "81c402337de71e1d32eaf1e1c8e58934"
  },
  {
    "url": "assets/js/236.js",
    "revision": "5824ef9387cb2b83dd46cf3678edf1b6"
  },
  {
    "url": "assets/js/237.js",
    "revision": "0a07b951670dc25c6d048c4eb8fcd84b"
  },
  {
    "url": "assets/js/238.js",
    "revision": "48358e0a731a2e1b265c0ca036344901"
  },
  {
    "url": "assets/js/239.js",
    "revision": "e7c3ef5c7c7afc2ce9eaeb1b7f7bd276"
  },
  {
    "url": "assets/js/24.js",
    "revision": "3005b7e098ffbfb5c58f4d9cbeb86f1f"
  },
  {
    "url": "assets/js/240.js",
    "revision": "fe6a456ab16e082d86eb0409f533bb22"
  },
  {
    "url": "assets/js/241.js",
    "revision": "abb32d9bea23586dc39f39edd59bd1bd"
  },
  {
    "url": "assets/js/242.js",
    "revision": "5d8a6c95f112c0f63ce347dc4aa4469c"
  },
  {
    "url": "assets/js/243.js",
    "revision": "076de0d6adf9832caeb9ce32b3665d31"
  },
  {
    "url": "assets/js/244.js",
    "revision": "866a744179fcda506f45c32cb12c2913"
  },
  {
    "url": "assets/js/245.js",
    "revision": "a4dab012f0bf02e453b7e317ef37324a"
  },
  {
    "url": "assets/js/246.js",
    "revision": "4c5260e6b8a275bb9114511d4192938e"
  },
  {
    "url": "assets/js/247.js",
    "revision": "a9d3281c1c1ffd209b68a08f7a126989"
  },
  {
    "url": "assets/js/248.js",
    "revision": "f9ddcf7d8ff76308ef1315f80c6c29cc"
  },
  {
    "url": "assets/js/249.js",
    "revision": "5aad5f9e2088ea2601ee50c10b89a8dc"
  },
  {
    "url": "assets/js/25.js",
    "revision": "1159cdf730171f4c19e80772c740004a"
  },
  {
    "url": "assets/js/250.js",
    "revision": "a2355d4072a92c14ca0740987af384a1"
  },
  {
    "url": "assets/js/251.js",
    "revision": "57f28534ccac28bf4a73f1d0b6723727"
  },
  {
    "url": "assets/js/252.js",
    "revision": "4afbc29a9e841f97755498c936ca8fdc"
  },
  {
    "url": "assets/js/253.js",
    "revision": "8bb3b50a62ec924a5e92e7064f5bec88"
  },
  {
    "url": "assets/js/254.js",
    "revision": "6f3ae8757119ff01724c35016077a7c9"
  },
  {
    "url": "assets/js/255.js",
    "revision": "7bb183e2872631ba057bf2e15585c3dc"
  },
  {
    "url": "assets/js/256.js",
    "revision": "06ab9c8640381c77807cf00910e0307a"
  },
  {
    "url": "assets/js/257.js",
    "revision": "f93b4b637bbf14c14f966080e1bcee51"
  },
  {
    "url": "assets/js/258.js",
    "revision": "e86314ed0f30ca303deb4aab06eb05ff"
  },
  {
    "url": "assets/js/259.js",
    "revision": "70a992db6e4840c7bf926657260ad49d"
  },
  {
    "url": "assets/js/26.js",
    "revision": "a5f65db9f6b6bacb650184e26b7dc3f2"
  },
  {
    "url": "assets/js/260.js",
    "revision": "b4c2130fe1f33c4b53583e7fa5238fe4"
  },
  {
    "url": "assets/js/261.js",
    "revision": "47e7b153004ffcc02acfd1e4e3c07528"
  },
  {
    "url": "assets/js/262.js",
    "revision": "b3205a0c021e0d3bcdb22fb744a186ff"
  },
  {
    "url": "assets/js/263.js",
    "revision": "5da613a18eef024fe1a27b960e2c898a"
  },
  {
    "url": "assets/js/264.js",
    "revision": "c5e2dc841e5532a08279a50848d5e464"
  },
  {
    "url": "assets/js/265.js",
    "revision": "d1c07a87c8e537cf969f14f8d538e292"
  },
  {
    "url": "assets/js/266.js",
    "revision": "b9d94792894d84c3ac912d14a7121346"
  },
  {
    "url": "assets/js/267.js",
    "revision": "4e4a40d7b09710ff78b610500fabc08a"
  },
  {
    "url": "assets/js/268.js",
    "revision": "b7c9dfcd3ae5b335c0e7c615ac2b5d85"
  },
  {
    "url": "assets/js/269.js",
    "revision": "b17487a87228be0c8bafe8e780227670"
  },
  {
    "url": "assets/js/27.js",
    "revision": "a94cd44d1465ca45b8de8bb9f6277a8a"
  },
  {
    "url": "assets/js/270.js",
    "revision": "a69338578493169665d7d9594b5f7e9a"
  },
  {
    "url": "assets/js/271.js",
    "revision": "9070315340831b69e68516a283c2c779"
  },
  {
    "url": "assets/js/272.js",
    "revision": "0f925a9360420ceb23a4d8340f834392"
  },
  {
    "url": "assets/js/273.js",
    "revision": "9662b8f64755139a52bda6e1d0f69bda"
  },
  {
    "url": "assets/js/274.js",
    "revision": "1358a2ecceeff3c06eea12bd6873599d"
  },
  {
    "url": "assets/js/275.js",
    "revision": "0b885c56693d73049eaa65fcc31e03a7"
  },
  {
    "url": "assets/js/276.js",
    "revision": "6c563a846131a0d91c3e1787d84fbcb2"
  },
  {
    "url": "assets/js/277.js",
    "revision": "97619cf3cd07225842fc4c6c2259791c"
  },
  {
    "url": "assets/js/278.js",
    "revision": "30e983d02584ee96b890efcc9fab093d"
  },
  {
    "url": "assets/js/279.js",
    "revision": "6cf70f2388a08b684dbe9b00810cb76e"
  },
  {
    "url": "assets/js/28.js",
    "revision": "7365483148e4821833d6c2c39f49c59c"
  },
  {
    "url": "assets/js/280.js",
    "revision": "e26aee748651ed0390d4e28a795119b1"
  },
  {
    "url": "assets/js/281.js",
    "revision": "cdbd357ac34b647dbf6d495c080b7165"
  },
  {
    "url": "assets/js/282.js",
    "revision": "630d502a7b5789fc463febbca2ba87d1"
  },
  {
    "url": "assets/js/283.js",
    "revision": "0293063becec6316d5161c0ab195b9bb"
  },
  {
    "url": "assets/js/284.js",
    "revision": "cbcadfb374314974db9b56b63c10d9a6"
  },
  {
    "url": "assets/js/285.js",
    "revision": "b63c118fc816ff8df8127bdac41d994f"
  },
  {
    "url": "assets/js/286.js",
    "revision": "922b06cdc024d469a1e52a329b0d351e"
  },
  {
    "url": "assets/js/287.js",
    "revision": "679db34b0ee28cf7c9dd7203f14efe1a"
  },
  {
    "url": "assets/js/288.js",
    "revision": "096e01611aa23adfd051979e7bd5f029"
  },
  {
    "url": "assets/js/289.js",
    "revision": "6fe8fb6c13acc3847786fa2d172e9141"
  },
  {
    "url": "assets/js/29.js",
    "revision": "77d0270c62be757c89826c003abbd7a1"
  },
  {
    "url": "assets/js/290.js",
    "revision": "edc35bc59f7a0062f9ece0ec04dfd634"
  },
  {
    "url": "assets/js/291.js",
    "revision": "6a18630f8b84f5e394d3aaac01427bcf"
  },
  {
    "url": "assets/js/292.js",
    "revision": "dd4ed47e169fcb4f4b840277c751b80e"
  },
  {
    "url": "assets/js/293.js",
    "revision": "40766412664ea209196ff4b99f66e6ad"
  },
  {
    "url": "assets/js/294.js",
    "revision": "90a15b1e3fff02e994f75a99832428e7"
  },
  {
    "url": "assets/js/295.js",
    "revision": "d57f1c8032be265d573f635922bdf090"
  },
  {
    "url": "assets/js/296.js",
    "revision": "150ef14392fcb1d27ab45527014c38c2"
  },
  {
    "url": "assets/js/297.js",
    "revision": "ef844a5cddb1df9591f8a65dcc19af66"
  },
  {
    "url": "assets/js/298.js",
    "revision": "56faf3c66c4906cbf282dbab38990560"
  },
  {
    "url": "assets/js/299.js",
    "revision": "8695771703c231bdab52f1934e8c1840"
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
    "revision": "64190d26fc27e25c18a38a408a980415"
  },
  {
    "url": "assets/js/301.js",
    "revision": "6469adf9eac4f0b8d20909e3bd3455ca"
  },
  {
    "url": "assets/js/302.js",
    "revision": "22e9a717eb9679cd1e3011f7fa9f5376"
  },
  {
    "url": "assets/js/303.js",
    "revision": "f089ab53bb4003f73a2ec084bcd0fe8e"
  },
  {
    "url": "assets/js/304.js",
    "revision": "40120801cfd4742719a52d1b3ae06df7"
  },
  {
    "url": "assets/js/305.js",
    "revision": "7b401b62b13a239a3380171fd61622e7"
  },
  {
    "url": "assets/js/306.js",
    "revision": "52ead4ae656193d216d23e7511f2f2c8"
  },
  {
    "url": "assets/js/307.js",
    "revision": "607d6db70a0534cdcdcbb557f8fb5060"
  },
  {
    "url": "assets/js/308.js",
    "revision": "684c7fa627aab7ec3a33a07b150aef16"
  },
  {
    "url": "assets/js/309.js",
    "revision": "a8a940bfb7832f7d47e4dd396e4140cf"
  },
  {
    "url": "assets/js/31.js",
    "revision": "d1823810866061ba2ca3ea674d28410e"
  },
  {
    "url": "assets/js/310.js",
    "revision": "2e766d8084a9a7b3b436db1187366fad"
  },
  {
    "url": "assets/js/311.js",
    "revision": "f81c15cab27fada951b0caafa519db24"
  },
  {
    "url": "assets/js/312.js",
    "revision": "14d96117b500e63d4e9b68453a9e84a1"
  },
  {
    "url": "assets/js/313.js",
    "revision": "b6a84ac06e8919affa0b5d21eb88ba1c"
  },
  {
    "url": "assets/js/314.js",
    "revision": "8da377a605547839e895b4f49f861983"
  },
  {
    "url": "assets/js/315.js",
    "revision": "325eb69853619f720bc3f615a0974c2b"
  },
  {
    "url": "assets/js/316.js",
    "revision": "f92df029c9172f560a0b3d600e127f6e"
  },
  {
    "url": "assets/js/317.js",
    "revision": "7d79e45f6902e88d95804a0f41a41f7e"
  },
  {
    "url": "assets/js/318.js",
    "revision": "3da8eee8d72dafeea35905c8c2e200be"
  },
  {
    "url": "assets/js/319.js",
    "revision": "d2285a18f6f3ed59a2d9dc25c9634046"
  },
  {
    "url": "assets/js/32.js",
    "revision": "a3e5ed40655ee2b0a69d92b03c31464b"
  },
  {
    "url": "assets/js/320.js",
    "revision": "0e9669d657a63b10c39f1a4eec43490b"
  },
  {
    "url": "assets/js/321.js",
    "revision": "673ef4f51da4b57aa450fe7689b3ec93"
  },
  {
    "url": "assets/js/322.js",
    "revision": "d3a8c22c89008834d5ac50c4ea3e86b0"
  },
  {
    "url": "assets/js/323.js",
    "revision": "0fa382046b2492d12d866d764c58b602"
  },
  {
    "url": "assets/js/324.js",
    "revision": "220ae0a31a811962275bda4db743746c"
  },
  {
    "url": "assets/js/325.js",
    "revision": "6151e80dd0bbcc1cba1e4193ebaf735e"
  },
  {
    "url": "assets/js/326.js",
    "revision": "ba1b974770cd13f4c2d5139d2ca36681"
  },
  {
    "url": "assets/js/327.js",
    "revision": "461cfe809f2bec42585a531802805c1e"
  },
  {
    "url": "assets/js/328.js",
    "revision": "42c42cbbdd0dfc4e8176e92b4933c7b9"
  },
  {
    "url": "assets/js/329.js",
    "revision": "a0ef4afe49e95011bd95cde7ebbb1b6a"
  },
  {
    "url": "assets/js/33.js",
    "revision": "4400ca3aa3cf71b781eecb63119115b3"
  },
  {
    "url": "assets/js/330.js",
    "revision": "a1816c9bfbabc60af9f2d85da6672395"
  },
  {
    "url": "assets/js/331.js",
    "revision": "636c25aeb62c014685b459caedcf030c"
  },
  {
    "url": "assets/js/332.js",
    "revision": "a30bccb4e9ba9508e09a894f18a8e221"
  },
  {
    "url": "assets/js/333.js",
    "revision": "3e2c19d4b8ebf384dde0e1a059c45a22"
  },
  {
    "url": "assets/js/334.js",
    "revision": "e98b496753a18d53157cf4d9f929fe7e"
  },
  {
    "url": "assets/js/335.js",
    "revision": "4ad9ff5f47d2677188b81af981e0ba36"
  },
  {
    "url": "assets/js/336.js",
    "revision": "d83c5b092105d7aa77b557815f5c53fe"
  },
  {
    "url": "assets/js/337.js",
    "revision": "9fa3e31221a0017d790753c83681d77a"
  },
  {
    "url": "assets/js/338.js",
    "revision": "1d26c6de311573fa70b5611091cb2000"
  },
  {
    "url": "assets/js/339.js",
    "revision": "6d5c229599c36d3a42ab91f2b6d42930"
  },
  {
    "url": "assets/js/34.js",
    "revision": "4ac002f5ce97b5b82d048761769700a3"
  },
  {
    "url": "assets/js/340.js",
    "revision": "7607984d417788d2d4256d7a1994e7a9"
  },
  {
    "url": "assets/js/341.js",
    "revision": "0896328c0f1973395a333b31d5952e85"
  },
  {
    "url": "assets/js/342.js",
    "revision": "a5f4e099343ab712050cbc33f615754f"
  },
  {
    "url": "assets/js/343.js",
    "revision": "4ca52436b4fec16f9e1c37a138f1e545"
  },
  {
    "url": "assets/js/344.js",
    "revision": "4c8a5e546e46a110c11145f194996847"
  },
  {
    "url": "assets/js/345.js",
    "revision": "b43222f0c8f19723141c6d83deac0672"
  },
  {
    "url": "assets/js/346.js",
    "revision": "7819bbe345250f8d6ce0cc656671d8c4"
  },
  {
    "url": "assets/js/347.js",
    "revision": "2df9d98896d24c723bbf362165443259"
  },
  {
    "url": "assets/js/348.js",
    "revision": "3e202eae72bb956ae82f536413f07cf9"
  },
  {
    "url": "assets/js/349.js",
    "revision": "5c95fcd42d49a852e9749fcafa13184f"
  },
  {
    "url": "assets/js/35.js",
    "revision": "236adcc114b6932cad1cb1e86c1e77b0"
  },
  {
    "url": "assets/js/350.js",
    "revision": "ac9addb9a117a3d21166b082a83e94cd"
  },
  {
    "url": "assets/js/351.js",
    "revision": "1ba0787b1822274c1f2d731f94933f4c"
  },
  {
    "url": "assets/js/352.js",
    "revision": "6351240a8ca3c7c5526dc3db06acd12b"
  },
  {
    "url": "assets/js/353.js",
    "revision": "dd7f41882e67b25fd8ccacc2c83d51a8"
  },
  {
    "url": "assets/js/354.js",
    "revision": "56f1829adb743d69a1f6908814047578"
  },
  {
    "url": "assets/js/355.js",
    "revision": "fc42259a375cc1d5b37a3df535403f84"
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
    "revision": "cacc4c6c8cc6f6a4641784d59f1b575f"
  },
  {
    "url": "assets/js/359.js",
    "revision": "bf9695ba5a12fab48338de77ac6b5a17"
  },
  {
    "url": "assets/js/36.js",
    "revision": "b6ced4678f90734ca9f8f9d42ff16a99"
  },
  {
    "url": "assets/js/360.js",
    "revision": "8d2839b9d827bfa96699034f601fbcc6"
  },
  {
    "url": "assets/js/361.js",
    "revision": "409bedbc28eabb84a1bcd05c0b6e8255"
  },
  {
    "url": "assets/js/362.js",
    "revision": "ab94b2f0fed22136dc3da3cc154b26b0"
  },
  {
    "url": "assets/js/363.js",
    "revision": "67d96e9f34339fe8d6d237e575060e17"
  },
  {
    "url": "assets/js/364.js",
    "revision": "e5db8041c9d1863232b6acca74434310"
  },
  {
    "url": "assets/js/365.js",
    "revision": "600c839361c628a628ffb35d1533d6c8"
  },
  {
    "url": "assets/js/366.js",
    "revision": "2e94f0d100088607345ca1c417fa88a8"
  },
  {
    "url": "assets/js/367.js",
    "revision": "b229f31bb78d25cfbf9ddd97efaa6a63"
  },
  {
    "url": "assets/js/368.js",
    "revision": "d81cc648500b1498472535848a4a7ad1"
  },
  {
    "url": "assets/js/369.js",
    "revision": "590568bcf3d58bbffb8433edc97c32d2"
  },
  {
    "url": "assets/js/37.js",
    "revision": "0a8810f97278507f11443cbc06478c87"
  },
  {
    "url": "assets/js/370.js",
    "revision": "7e0cd60b8b13a5d7f8414f6b1a4e962d"
  },
  {
    "url": "assets/js/371.js",
    "revision": "5abf2d1f6d67dd4a7eaf0347edf5b3a0"
  },
  {
    "url": "assets/js/372.js",
    "revision": "60227118a0454be1da978d88965b99ea"
  },
  {
    "url": "assets/js/373.js",
    "revision": "844d237667792b099034d39ed2c7ed67"
  },
  {
    "url": "assets/js/374.js",
    "revision": "27d704777c284486fcf532a7e4dfb1f5"
  },
  {
    "url": "assets/js/375.js",
    "revision": "819438fb27c99e9dff2096f5651b8090"
  },
  {
    "url": "assets/js/376.js",
    "revision": "7032fd577b8be3f760796a6429b19b0e"
  },
  {
    "url": "assets/js/377.js",
    "revision": "72b5ab4623913486a2942ebee7c0f30f"
  },
  {
    "url": "assets/js/378.js",
    "revision": "88f71268f0c7b0eed64d8a2872d63af9"
  },
  {
    "url": "assets/js/379.js",
    "revision": "5f9e7595014923e92c648e5c5dc07a8b"
  },
  {
    "url": "assets/js/38.js",
    "revision": "fadc6e699a937de3be1f5636ee3ab226"
  },
  {
    "url": "assets/js/380.js",
    "revision": "f3b2d0cd26c50c49aa343f8f7534a3cf"
  },
  {
    "url": "assets/js/381.js",
    "revision": "8c625525d9cc6c4b555de50cdce03c10"
  },
  {
    "url": "assets/js/382.js",
    "revision": "f5e532e563fc0149eb0dbcf32423d323"
  },
  {
    "url": "assets/js/383.js",
    "revision": "e76446fd0a58adf6f885c5dcdfc9ed47"
  },
  {
    "url": "assets/js/384.js",
    "revision": "c3c71b41ebe38273d0296a74efff987c"
  },
  {
    "url": "assets/js/385.js",
    "revision": "a877fef168ad8b8908848931695e891a"
  },
  {
    "url": "assets/js/386.js",
    "revision": "d1ad3b209126e9edc9171f89e0ca966b"
  },
  {
    "url": "assets/js/387.js",
    "revision": "6989e67d3fbbcffa0797b8aa486cc4fe"
  },
  {
    "url": "assets/js/388.js",
    "revision": "f5fb5da4652074c94ecd368c1fa52b92"
  },
  {
    "url": "assets/js/389.js",
    "revision": "4f7850aaca7a12d4e982a4d698dec3c4"
  },
  {
    "url": "assets/js/39.js",
    "revision": "1d9ff3b7c75f3364b6097cb97ea3c579"
  },
  {
    "url": "assets/js/390.js",
    "revision": "4646fe5919bc7d3331d8e051dbeafb36"
  },
  {
    "url": "assets/js/391.js",
    "revision": "ba41f0ff02d6fe1ec5e6b10e843e4ecc"
  },
  {
    "url": "assets/js/392.js",
    "revision": "268b73f4732be5ddc220cb5e4ff1c5ec"
  },
  {
    "url": "assets/js/393.js",
    "revision": "8890acb452d20ff48dccf432605a8986"
  },
  {
    "url": "assets/js/394.js",
    "revision": "6fdf069320b414b86d2c46510ea845b7"
  },
  {
    "url": "assets/js/395.js",
    "revision": "82cfc21fd137abea7dec9dd039e002c9"
  },
  {
    "url": "assets/js/396.js",
    "revision": "03b341d1ea37ac941d744146a79ac2b8"
  },
  {
    "url": "assets/js/397.js",
    "revision": "064a83f65f267d97479ec6b73dc75bc7"
  },
  {
    "url": "assets/js/398.js",
    "revision": "1f057e042f7964fd9d632ffb2a43ef0b"
  },
  {
    "url": "assets/js/399.js",
    "revision": "e8c523f3f788e9bd2a5859159cde5e66"
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
    "revision": "1524383af2d7647f6cd192fe670e0b87"
  },
  {
    "url": "assets/js/401.js",
    "revision": "569289d519241eb873d4711f33b9c5cf"
  },
  {
    "url": "assets/js/402.js",
    "revision": "1a750e4ea9db2f1061774ea0221e4d62"
  },
  {
    "url": "assets/js/403.js",
    "revision": "9f7a167eace76ad7af628101659d35ab"
  },
  {
    "url": "assets/js/404.js",
    "revision": "bb530548a2dbd56328102cbaedfa53cc"
  },
  {
    "url": "assets/js/405.js",
    "revision": "e867574b114a9faa0f909602f435c88f"
  },
  {
    "url": "assets/js/406.js",
    "revision": "d8c34d2b37e5c092123d8676112a5e1e"
  },
  {
    "url": "assets/js/407.js",
    "revision": "d35e103fbee7c4ce8eb51dd20eba390e"
  },
  {
    "url": "assets/js/408.js",
    "revision": "3cbe135b67331bdbe03cbd660cf0735a"
  },
  {
    "url": "assets/js/409.js",
    "revision": "33444b448a32787b5834573c5369552a"
  },
  {
    "url": "assets/js/41.js",
    "revision": "7951b828ca6cf8b5a721c68fb7aca425"
  },
  {
    "url": "assets/js/410.js",
    "revision": "34672c31f0c052885a708306270d79a3"
  },
  {
    "url": "assets/js/411.js",
    "revision": "811c2344b114e93e78dce0be846abc2a"
  },
  {
    "url": "assets/js/412.js",
    "revision": "8bb82b634203651741700c8434aa63cc"
  },
  {
    "url": "assets/js/413.js",
    "revision": "943fcc697d818fb898fcb538e57c1544"
  },
  {
    "url": "assets/js/414.js",
    "revision": "1c521e8c28c22ccdbf06b704809de791"
  },
  {
    "url": "assets/js/415.js",
    "revision": "c817e942c60db1d0377a1c125e4033bf"
  },
  {
    "url": "assets/js/416.js",
    "revision": "8bf12ec6ca166fb17aa299c22086bf5c"
  },
  {
    "url": "assets/js/417.js",
    "revision": "3f1351d85ed1fc84454591cced3a81e1"
  },
  {
    "url": "assets/js/418.js",
    "revision": "8a711a91766c3eb10bc1cb28375c5920"
  },
  {
    "url": "assets/js/419.js",
    "revision": "81e4c2e794b3bea8bedb013209ff3dff"
  },
  {
    "url": "assets/js/42.js",
    "revision": "deaaee52e8eff3ceed09d1d59929c7cc"
  },
  {
    "url": "assets/js/420.js",
    "revision": "fdf619ca9e65531b99f77acffceac105"
  },
  {
    "url": "assets/js/421.js",
    "revision": "3ee7c8ffc74908bec3ab1ffa30da4a92"
  },
  {
    "url": "assets/js/422.js",
    "revision": "06fcf5d66441785003adcf9349d3e098"
  },
  {
    "url": "assets/js/423.js",
    "revision": "f92cda3a22a3501658eea91317126ea1"
  },
  {
    "url": "assets/js/424.js",
    "revision": "585176473f875798825b9942e50a1b58"
  },
  {
    "url": "assets/js/425.js",
    "revision": "90fc8dbbb28dd7c03daec31979466dd5"
  },
  {
    "url": "assets/js/426.js",
    "revision": "29a42cfe36fa7bb53cf71b4847e12d01"
  },
  {
    "url": "assets/js/427.js",
    "revision": "62916d83a156c4f720dc37f8e4d30521"
  },
  {
    "url": "assets/js/428.js",
    "revision": "d7033391c1b751925cafa8fa40cabb92"
  },
  {
    "url": "assets/js/429.js",
    "revision": "57462bc73bea98908303e5d8cd243a52"
  },
  {
    "url": "assets/js/43.js",
    "revision": "dbb88cabf28d115c3db4678a0fa767da"
  },
  {
    "url": "assets/js/430.js",
    "revision": "ec07e3e3b86ad2742701512793ed3f12"
  },
  {
    "url": "assets/js/431.js",
    "revision": "16c89f4476dd91a63eeb7a51737f8ef5"
  },
  {
    "url": "assets/js/432.js",
    "revision": "f1ed658ad94395688202346d454453ff"
  },
  {
    "url": "assets/js/433.js",
    "revision": "105bd441c8eb2cae6e9c84c4ee71ab0b"
  },
  {
    "url": "assets/js/434.js",
    "revision": "546438650fc3530bc72db27c4d70f661"
  },
  {
    "url": "assets/js/435.js",
    "revision": "3cfb43249dddf12077926632f78d93f4"
  },
  {
    "url": "assets/js/436.js",
    "revision": "5428745fbf77857fcab2f94c3e7013d8"
  },
  {
    "url": "assets/js/437.js",
    "revision": "4cd5dd2491396ae5263deaff3a7e50b0"
  },
  {
    "url": "assets/js/438.js",
    "revision": "442c7adb7515644f8bd5e0ab0fd5a8e8"
  },
  {
    "url": "assets/js/439.js",
    "revision": "eb18d37789a6d14bba2ec932d2894b60"
  },
  {
    "url": "assets/js/44.js",
    "revision": "ea012fab0ae27adf790786b64c65a630"
  },
  {
    "url": "assets/js/440.js",
    "revision": "6ae71613b9fce9c394f6f8d7816861d6"
  },
  {
    "url": "assets/js/441.js",
    "revision": "fe1e4374e7d3a67a9974f6db5d0e59c8"
  },
  {
    "url": "assets/js/442.js",
    "revision": "1b8072607f07fa39d7a481082c9f96cc"
  },
  {
    "url": "assets/js/443.js",
    "revision": "63e73f2a230ccaefefd1c7204e234b16"
  },
  {
    "url": "assets/js/444.js",
    "revision": "40dc0778a11dd23bcba260a8e1a61a79"
  },
  {
    "url": "assets/js/445.js",
    "revision": "987eb388bf54847946d7cd4fe859b2ee"
  },
  {
    "url": "assets/js/446.js",
    "revision": "7698a152a1cb3a91e0d8f24676b5f714"
  },
  {
    "url": "assets/js/447.js",
    "revision": "59993d3b49baf89590a5ef4e088042b2"
  },
  {
    "url": "assets/js/448.js",
    "revision": "5d155c5da19e9fd7d538cf28029cf154"
  },
  {
    "url": "assets/js/449.js",
    "revision": "054f05ad06a27124a4870832a4fdb0d8"
  },
  {
    "url": "assets/js/45.js",
    "revision": "169a8bf911965391c1f544429a33b76f"
  },
  {
    "url": "assets/js/450.js",
    "revision": "afb6ccf773ff44af1e3fd2b3054c2927"
  },
  {
    "url": "assets/js/451.js",
    "revision": "e4fedf1214a74c0505bce0ffed2380ef"
  },
  {
    "url": "assets/js/452.js",
    "revision": "b963ef09f0987ef5ce640ac34d84989e"
  },
  {
    "url": "assets/js/453.js",
    "revision": "e0b58a0bc6459e0b3b80b690a92092e5"
  },
  {
    "url": "assets/js/454.js",
    "revision": "a3ee50f352dfa69d39d1af2fc9fd74cf"
  },
  {
    "url": "assets/js/455.js",
    "revision": "2dbd4bc67b6bf52c769cd32e41b8ee9e"
  },
  {
    "url": "assets/js/456.js",
    "revision": "15dc7b0e6dee49ae1b3e65f0338bb47b"
  },
  {
    "url": "assets/js/457.js",
    "revision": "45b1fc3d62a93905df28acaa4786d233"
  },
  {
    "url": "assets/js/458.js",
    "revision": "daf6af6fa62ca483022ef80c97675739"
  },
  {
    "url": "assets/js/459.js",
    "revision": "aceaed8adcac26aacac91fd7b0714880"
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
    "revision": "39463b1dae0a9873973bc84ef0d9ef6a"
  },
  {
    "url": "assets/js/462.js",
    "revision": "481b87ef369901addbb5eb6bae4829b1"
  },
  {
    "url": "assets/js/463.js",
    "revision": "e75f55d7ef534dafbbe16c93535a16d0"
  },
  {
    "url": "assets/js/464.js",
    "revision": "d48a45f788c2520435229c95db1d8494"
  },
  {
    "url": "assets/js/465.js",
    "revision": "a4ce36474966882c87cd3f78b456abde"
  },
  {
    "url": "assets/js/466.js",
    "revision": "101cec0dfa9617ba54bd822031d9a4ee"
  },
  {
    "url": "assets/js/467.js",
    "revision": "4f0b76bccb6c1f741e49de959b2ff6d7"
  },
  {
    "url": "assets/js/468.js",
    "revision": "9a6299dac02d80f55cc631c266d9902f"
  },
  {
    "url": "assets/js/469.js",
    "revision": "4a96aae151184f0e55e6fb6f2265cd3f"
  },
  {
    "url": "assets/js/47.js",
    "revision": "ea45c861eacd7f7ca2053ba75cd564c6"
  },
  {
    "url": "assets/js/470.js",
    "revision": "259ca9ed71cfbf35491ed10d26df58ad"
  },
  {
    "url": "assets/js/471.js",
    "revision": "f919569584597ac7f6454371fc15d8e2"
  },
  {
    "url": "assets/js/472.js",
    "revision": "5079edccd00a12561c19ec0c33bbfc43"
  },
  {
    "url": "assets/js/473.js",
    "revision": "5632673d04475fc756f08f874aec30d6"
  },
  {
    "url": "assets/js/474.js",
    "revision": "57553aba8516dcc0e8830ece3131e63c"
  },
  {
    "url": "assets/js/475.js",
    "revision": "7c30166d353ae9469c087a7918711238"
  },
  {
    "url": "assets/js/476.js",
    "revision": "e004556a62715041e4a2cdc478211f12"
  },
  {
    "url": "assets/js/477.js",
    "revision": "5f22b2b44df93e15b5be47bad69e489c"
  },
  {
    "url": "assets/js/478.js",
    "revision": "5555932a062a036e9e6af0e8e9acfe64"
  },
  {
    "url": "assets/js/479.js",
    "revision": "7da99b3ec3464efa59a9f907fecaecc8"
  },
  {
    "url": "assets/js/48.js",
    "revision": "378c7c4c243bda63a213c05bd7ea848a"
  },
  {
    "url": "assets/js/480.js",
    "revision": "6032bdd59c3a72ae7f4128c7542c6170"
  },
  {
    "url": "assets/js/481.js",
    "revision": "6bcf467e95de2a78b69548ff329fc4a0"
  },
  {
    "url": "assets/js/482.js",
    "revision": "b0d4631442521025675c7205529a6bd8"
  },
  {
    "url": "assets/js/483.js",
    "revision": "483b457679ad30cafde41f319eb61a8a"
  },
  {
    "url": "assets/js/484.js",
    "revision": "1a99b64c4b35900d8fc09a13360062cb"
  },
  {
    "url": "assets/js/485.js",
    "revision": "9af820ae1e590d7148124b1aaa892637"
  },
  {
    "url": "assets/js/486.js",
    "revision": "f1f5ab879efd4c23f5833135fcd7b289"
  },
  {
    "url": "assets/js/487.js",
    "revision": "c6a26275464367504edca52924ed7dd7"
  },
  {
    "url": "assets/js/488.js",
    "revision": "7c4a806904de099d77d9d063904c5aaa"
  },
  {
    "url": "assets/js/489.js",
    "revision": "021972ca784538a6a6dc9e95ba13736d"
  },
  {
    "url": "assets/js/49.js",
    "revision": "ac5c2c4336f4733df1584ec4e576993a"
  },
  {
    "url": "assets/js/490.js",
    "revision": "c443e7f835eb70d472ebe039e43e9f62"
  },
  {
    "url": "assets/js/491.js",
    "revision": "fc2dec6e3c8a930e6d36837b9234c2e8"
  },
  {
    "url": "assets/js/492.js",
    "revision": "44989a33e9aa6512cb1a2c6817004a8c"
  },
  {
    "url": "assets/js/493.js",
    "revision": "3ceff14b94a57b29b5ad2fec67bfdf7e"
  },
  {
    "url": "assets/js/494.js",
    "revision": "65aa2f420ee2f70e4a16e6f02f04ff45"
  },
  {
    "url": "assets/js/495.js",
    "revision": "c3ba213fb3b9cb64842cdd24872e6b0d"
  },
  {
    "url": "assets/js/496.js",
    "revision": "42ca6a0b9355e3f6f7f908ccbae9fcd1"
  },
  {
    "url": "assets/js/497.js",
    "revision": "ac5e3f3a7ccabde4fdef8520ca0f73ee"
  },
  {
    "url": "assets/js/498.js",
    "revision": "22f89e36f23ec32c3eaccf4cdec07982"
  },
  {
    "url": "assets/js/499.js",
    "revision": "c5ee94c242e289deaa42c2fdc6cef578"
  },
  {
    "url": "assets/js/50.js",
    "revision": "629095d2894761450350a0b26dd2b643"
  },
  {
    "url": "assets/js/500.js",
    "revision": "f78155e8bafabd1a732a6b193a5c4426"
  },
  {
    "url": "assets/js/501.js",
    "revision": "c4b8d9e6e4ba01ab1096fdd7a3959f8b"
  },
  {
    "url": "assets/js/502.js",
    "revision": "d1695ad5049d4d38c35977ec21c52c96"
  },
  {
    "url": "assets/js/503.js",
    "revision": "fe9641a4a9fe2ea24882eebfd6ff6e7b"
  },
  {
    "url": "assets/js/504.js",
    "revision": "4e180f657657f5a28a4821b4ccf03982"
  },
  {
    "url": "assets/js/505.js",
    "revision": "61feaa849993282a8851b0be4c17b1a7"
  },
  {
    "url": "assets/js/506.js",
    "revision": "15e6855d2ad2fe17db81412e3c6d973b"
  },
  {
    "url": "assets/js/507.js",
    "revision": "802035b91f983acccd21da3c2a784c79"
  },
  {
    "url": "assets/js/508.js",
    "revision": "d4ea26e22807d8d0bb1003f45ef29e26"
  },
  {
    "url": "assets/js/509.js",
    "revision": "d23d52e641529c0e5399df460d1b7314"
  },
  {
    "url": "assets/js/51.js",
    "revision": "de8c745b7d0796bc069bcaebc73d8792"
  },
  {
    "url": "assets/js/510.js",
    "revision": "713e1fd62d2bb69d851f92f83f8607b4"
  },
  {
    "url": "assets/js/511.js",
    "revision": "36ba6fb1387ca77216d0e2547aed65e7"
  },
  {
    "url": "assets/js/512.js",
    "revision": "dac46513a7e53644278a62933c5bd48c"
  },
  {
    "url": "assets/js/513.js",
    "revision": "e618962d9bee79f6aafa7e75c313fe37"
  },
  {
    "url": "assets/js/514.js",
    "revision": "2d128b7b947cc6003257be81e078822e"
  },
  {
    "url": "assets/js/515.js",
    "revision": "f1e1368348f8fa91edae15bb395cc53d"
  },
  {
    "url": "assets/js/516.js",
    "revision": "820369d983d6bffa83744d6e4ea3886b"
  },
  {
    "url": "assets/js/517.js",
    "revision": "10ca90bf2ab21df4cea6873fcb97c31f"
  },
  {
    "url": "assets/js/518.js",
    "revision": "4b217f730da9ff4c176506e4d17f2dad"
  },
  {
    "url": "assets/js/519.js",
    "revision": "f84b84244f933c976844b03f6dd08318"
  },
  {
    "url": "assets/js/52.js",
    "revision": "7641cd96111f7523e5601c01afb415fc"
  },
  {
    "url": "assets/js/520.js",
    "revision": "ee8bad9fe085a92a9c9c65c44873d4f7"
  },
  {
    "url": "assets/js/521.js",
    "revision": "25ae43584301dd9ef596bbc2ac4286bf"
  },
  {
    "url": "assets/js/522.js",
    "revision": "5428307621006903aba4ceb1aee652eb"
  },
  {
    "url": "assets/js/523.js",
    "revision": "ea460729598cceba9cec4eeb88bc13ca"
  },
  {
    "url": "assets/js/524.js",
    "revision": "dec47f33d27e0cbda31830a47edd7294"
  },
  {
    "url": "assets/js/525.js",
    "revision": "e028cb912a7224e5b39bbec72c63afc7"
  },
  {
    "url": "assets/js/526.js",
    "revision": "c740822457b03b65436f22ce6b4c6e30"
  },
  {
    "url": "assets/js/527.js",
    "revision": "3413cc4d857a2925a6bb3d5163c1850b"
  },
  {
    "url": "assets/js/528.js",
    "revision": "4fc4ade86fcb2dd7be7da4382ee7a53c"
  },
  {
    "url": "assets/js/529.js",
    "revision": "acc6fa1051a5da0b319e652ce2970c13"
  },
  {
    "url": "assets/js/53.js",
    "revision": "73d51e0c34e81d37564eaecc2edda418"
  },
  {
    "url": "assets/js/530.js",
    "revision": "f32d990ca066db250b6797fb25313547"
  },
  {
    "url": "assets/js/531.js",
    "revision": "9e9da79c27228abe9ea461841413ebd8"
  },
  {
    "url": "assets/js/532.js",
    "revision": "7754925fcc065c97d9b216fd77a0cf40"
  },
  {
    "url": "assets/js/533.js",
    "revision": "ca3c5439566d6b408419588f4bbd7336"
  },
  {
    "url": "assets/js/534.js",
    "revision": "fdedc2c7bf2ee6c172d16b495eea22f3"
  },
  {
    "url": "assets/js/535.js",
    "revision": "3bf1ff757178205f677d81a807e03369"
  },
  {
    "url": "assets/js/536.js",
    "revision": "287184aaf5baa2b95adfcf0ae2702b50"
  },
  {
    "url": "assets/js/537.js",
    "revision": "fad527144e31a6299c7454ee5ac8b402"
  },
  {
    "url": "assets/js/538.js",
    "revision": "6be08bce22b31a9271041bd666433241"
  },
  {
    "url": "assets/js/539.js",
    "revision": "83a22d99cd74259a38107b1e78ee4714"
  },
  {
    "url": "assets/js/54.js",
    "revision": "c59b81e5e721fdd8e48618b09691ebfb"
  },
  {
    "url": "assets/js/540.js",
    "revision": "95fe86c3b2ddfba344e865a109a822a1"
  },
  {
    "url": "assets/js/541.js",
    "revision": "bf716bf86d58eaeb6d250b205bfe3325"
  },
  {
    "url": "assets/js/542.js",
    "revision": "557d55ccebdfe25cd0c8b458568d5f84"
  },
  {
    "url": "assets/js/543.js",
    "revision": "bacedd60208eb2f84d69b7a529539e15"
  },
  {
    "url": "assets/js/544.js",
    "revision": "2b39c48ccfa60d0a26ddbd2282e1b0eb"
  },
  {
    "url": "assets/js/545.js",
    "revision": "980fb46a96a42c2dda9385551c691408"
  },
  {
    "url": "assets/js/546.js",
    "revision": "c4c44dfd229b1f1ca04412c0a52f39e8"
  },
  {
    "url": "assets/js/547.js",
    "revision": "38f8bcfe60ea7dfd6949aa1885e084c7"
  },
  {
    "url": "assets/js/548.js",
    "revision": "e5402103a644f68da91f40467ca961b4"
  },
  {
    "url": "assets/js/549.js",
    "revision": "56ff45b943d24ccec7a5401015f60d7c"
  },
  {
    "url": "assets/js/55.js",
    "revision": "55dda7422f96ef5a4017ef53424f37ab"
  },
  {
    "url": "assets/js/550.js",
    "revision": "664c8d7cfb324d0f418fc6cbd3a44b2f"
  },
  {
    "url": "assets/js/551.js",
    "revision": "208e9e4928f758440ba0c72d86904c8a"
  },
  {
    "url": "assets/js/552.js",
    "revision": "e91e308c294b98f0a9397935611b3074"
  },
  {
    "url": "assets/js/553.js",
    "revision": "086a1786fb0adde14b3568f15e296d3b"
  },
  {
    "url": "assets/js/554.js",
    "revision": "46e4898aae373718a2be88b64345d4a8"
  },
  {
    "url": "assets/js/555.js",
    "revision": "04c19b84db1cee9a882251c5bb68000c"
  },
  {
    "url": "assets/js/556.js",
    "revision": "7550ecf7bb724655177dadb813f9c55b"
  },
  {
    "url": "assets/js/557.js",
    "revision": "230c52dc869b8bcc8746deb8ca48961e"
  },
  {
    "url": "assets/js/558.js",
    "revision": "f918208b7ac73ac1ce1cf7416c226911"
  },
  {
    "url": "assets/js/559.js",
    "revision": "bb37afb291cf405de8000f57bb1aa861"
  },
  {
    "url": "assets/js/56.js",
    "revision": "95012efe89bb177e5f97d28dfba0149e"
  },
  {
    "url": "assets/js/560.js",
    "revision": "edb0bf2388d52b8df8bea98744ff5ea3"
  },
  {
    "url": "assets/js/561.js",
    "revision": "3468179201fb63576c9b9059b8679126"
  },
  {
    "url": "assets/js/562.js",
    "revision": "b5c20dd2fa8a59dc65fd1d41fcb9cf06"
  },
  {
    "url": "assets/js/563.js",
    "revision": "560180d21a845702f7174668c0ff6c4a"
  },
  {
    "url": "assets/js/564.js",
    "revision": "5d61e5c9b564e10bab3e66fd40312071"
  },
  {
    "url": "assets/js/565.js",
    "revision": "112f43dc7b6cfacc247d49feb9a7280c"
  },
  {
    "url": "assets/js/566.js",
    "revision": "d91a5e1e9ec39a87bf4f11dffd722fe6"
  },
  {
    "url": "assets/js/567.js",
    "revision": "a9b6ac1923561c015f460e86eafe11cf"
  },
  {
    "url": "assets/js/568.js",
    "revision": "46d821a295c68fdd2f6bcaa5d7f98958"
  },
  {
    "url": "assets/js/569.js",
    "revision": "56cb821c8556660b429322ff0fd846e7"
  },
  {
    "url": "assets/js/57.js",
    "revision": "f1616a65c91025ae0bb6a84e8c004ac2"
  },
  {
    "url": "assets/js/570.js",
    "revision": "a73ff5216313d991bb1d5c6c45ce1dc1"
  },
  {
    "url": "assets/js/571.js",
    "revision": "eb01f3f29cbe93bd7453b32f6f99ad52"
  },
  {
    "url": "assets/js/572.js",
    "revision": "700e7f07da5dd6ea0655a16598240518"
  },
  {
    "url": "assets/js/573.js",
    "revision": "8134caa78367972e96f3ba56481701b2"
  },
  {
    "url": "assets/js/574.js",
    "revision": "8240c095befe900a5b6c2c2534f144bc"
  },
  {
    "url": "assets/js/575.js",
    "revision": "363cc001e2d2519ea37df0fd9ce2f798"
  },
  {
    "url": "assets/js/576.js",
    "revision": "4f10fadd540e0216a58d54fa2e1b90bc"
  },
  {
    "url": "assets/js/577.js",
    "revision": "12f15874730cda5f2dc4044822200f74"
  },
  {
    "url": "assets/js/578.js",
    "revision": "4d826b5230c5114b2a8c1d70293bb5ad"
  },
  {
    "url": "assets/js/579.js",
    "revision": "17c70508e4801bc1ce4f866c39c34cd5"
  },
  {
    "url": "assets/js/58.js",
    "revision": "275f703646a6b6d48656d0d2a79fcb31"
  },
  {
    "url": "assets/js/580.js",
    "revision": "94232d4c00f5100b62770e7d9b8ec2cd"
  },
  {
    "url": "assets/js/581.js",
    "revision": "21d6cbf127d136653aff21f3ba8519c3"
  },
  {
    "url": "assets/js/582.js",
    "revision": "c08709f7840cdefcd398e6a8e80076a0"
  },
  {
    "url": "assets/js/583.js",
    "revision": "eac963e72f01051ec16f5d090f1cf247"
  },
  {
    "url": "assets/js/584.js",
    "revision": "83779e1b0429e2a70dfd3495cfb2305c"
  },
  {
    "url": "assets/js/585.js",
    "revision": "c4c87c54f940bce3b68d2f192541fb73"
  },
  {
    "url": "assets/js/586.js",
    "revision": "ad9efad9f194053a63181178bf000639"
  },
  {
    "url": "assets/js/587.js",
    "revision": "8f47e258225edd7c867304ccd64bb68d"
  },
  {
    "url": "assets/js/588.js",
    "revision": "b1c689df798f1d3d809334d0090e4295"
  },
  {
    "url": "assets/js/589.js",
    "revision": "e12ff2eac770049c6094dd9d6032dc52"
  },
  {
    "url": "assets/js/59.js",
    "revision": "31002168bf7232adcd1311c65ba28996"
  },
  {
    "url": "assets/js/590.js",
    "revision": "346038bc3cd780e40906a95f45127d0f"
  },
  {
    "url": "assets/js/591.js",
    "revision": "7d6bca0b81f8ea0893309dcde1c9363b"
  },
  {
    "url": "assets/js/592.js",
    "revision": "6374defc701dc556896228a0dc14bc58"
  },
  {
    "url": "assets/js/593.js",
    "revision": "7cb57675b05aac121598b824473c7f71"
  },
  {
    "url": "assets/js/594.js",
    "revision": "704f6ea2617c6ca704688d267932e78f"
  },
  {
    "url": "assets/js/595.js",
    "revision": "a7896128b26c57c3960e3cd573af7031"
  },
  {
    "url": "assets/js/596.js",
    "revision": "7e8ff0f225ce394ba8d88b4e2eeda407"
  },
  {
    "url": "assets/js/597.js",
    "revision": "e9a95c28c48ae53aad6e39e345470f58"
  },
  {
    "url": "assets/js/598.js",
    "revision": "172a28f52c61f35fe632466ce59ecb7d"
  },
  {
    "url": "assets/js/599.js",
    "revision": "45213104b35dcc55eaec7cefad000e57"
  },
  {
    "url": "assets/js/6.js",
    "revision": "774f522cca9e12e5f89704375ccef5d3"
  },
  {
    "url": "assets/js/60.js",
    "revision": "04910325e04cd40a7e2c8e1849922d7e"
  },
  {
    "url": "assets/js/600.js",
    "revision": "d2af6be0b738396503323918547c4d37"
  },
  {
    "url": "assets/js/601.js",
    "revision": "3ffb6ee54f507f409bd5294a4ce3b21b"
  },
  {
    "url": "assets/js/602.js",
    "revision": "c12838edd1da47fb05656a328535928b"
  },
  {
    "url": "assets/js/603.js",
    "revision": "5156ffa1e40074cf9d670f05aec9ccfb"
  },
  {
    "url": "assets/js/604.js",
    "revision": "6d2ccd58f00798b8930b67f4fcfe164e"
  },
  {
    "url": "assets/js/605.js",
    "revision": "b498bc2c2ee786d94ae870976cb74095"
  },
  {
    "url": "assets/js/606.js",
    "revision": "fe2fc7e89c1108a5a949b23f87165a13"
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
    "revision": "4fd0e3ede109ba4f515cb1587ec16dda"
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
    "revision": "8199d713b2b26591146f222e426dce98"
  },
  {
    "url": "assets/js/7.js",
    "revision": "b1ce02b988a4a395375954375615724a"
  },
  {
    "url": "assets/js/70.js",
    "revision": "efe1afa44d645c2e3057e0bfd8dd8c36"
  },
  {
    "url": "assets/js/71.js",
    "revision": "b8eda72e498a8f31ad87387acf3c720b"
  },
  {
    "url": "assets/js/72.js",
    "revision": "a62a475fde0c612412126c04985e0acf"
  },
  {
    "url": "assets/js/73.js",
    "revision": "b7a59957ff3ec166ceac1e662b68968f"
  },
  {
    "url": "assets/js/74.js",
    "revision": "29ef1dcd44c4c3dc9ab97b963d060e7e"
  },
  {
    "url": "assets/js/75.js",
    "revision": "de74607ee62fd8c15ff41b6663b99aba"
  },
  {
    "url": "assets/js/76.js",
    "revision": "9f9ef347f9adaf51dc03c12d680b9a0a"
  },
  {
    "url": "assets/js/77.js",
    "revision": "83161de93b8376bbb97ca5e5597589e3"
  },
  {
    "url": "assets/js/78.js",
    "revision": "c680ad79cc9b754106fef218ea53fd18"
  },
  {
    "url": "assets/js/79.js",
    "revision": "370fb3cc5fffc144ff48c21f597b4e6a"
  },
  {
    "url": "assets/js/8.js",
    "revision": "8c10959188809869ba82b29bd34e8717"
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
    "revision": "1f65b40874d7ebfaa3d1f4a0c47059d9"
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
    "revision": "d54414bc9226a71a576054f5f954addf"
  },
  {
    "url": "assets/js/93.js",
    "revision": "22f9511fccc17b1b2c1ccf45a2d45633"
  },
  {
    "url": "assets/js/94.js",
    "revision": "1d5ee3e6fd4be7ee04088ee561149166"
  },
  {
    "url": "assets/js/95.js",
    "revision": "1d4111b8112114da632af519c1b08b40"
  },
  {
    "url": "assets/js/96.js",
    "revision": "af2c93677c327898ae0ffc10978ef1e6"
  },
  {
    "url": "assets/js/97.js",
    "revision": "c1cb9cfbe0cf831bebdf0d446c82b35a"
  },
  {
    "url": "assets/js/98.js",
    "revision": "5f8c8a8d7c02bc40f662181e29154ebd"
  },
  {
    "url": "assets/js/99.js",
    "revision": "454abceabb6fe497b3eca6cb5a8142ec"
  },
  {
    "url": "assets/js/app.js",
    "revision": "cafc23af9e89161ab98b3fb6740fe1ce"
  },
  {
    "url": "assets/js/styles.js",
    "revision": "22f22b49cc901aa95826401f7ce0930c"
  },
  {
    "url": "blog/category/index.html",
    "revision": "be48eada0510c29a616b5c5571c6fa29"
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
    "revision": "d924c7143d78fa1b01a0703a8181784c"
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
    "revision": "4334682068c40052f956f539167506bb"
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
    "revision": "bca9221fbde0fae5611fe1ceca8b7fec"
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
    "url": "blog/life/ticking/index.html",
    "revision": "df3398de2b3089565b41dcfb9f9a4113"
  },
  {
    "url": "blog/life/trademe/index.html",
    "revision": "832f35563a7225f51f668770878b84c8"
  },
  {
    "url": "blog/life/unforeseen/index.html",
    "revision": "0c2b1f468ba3c96535b779024861c904"
  },
  {
    "url": "blog/life/wobbly/index.html",
    "revision": "dddee45ff07cb76c5674a3301b14196e"
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
    "revision": "ef84569b1ba17e62600cc2c0b3471df3"
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
    "revision": "41fcd37be23287086d98ffa32702b957"
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
    "revision": "98ed892995ba2548233134d4b54101dc"
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
    "revision": "accdab89c3b76c88adf61b1bb680c350"
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
    "revision": "09e717cab3f61e83160be5e631d97d95"
  },
  {
    "url": "blog/random/alphabet/index.html",
    "revision": "df347172623058ea836f586ae6d312f4"
  },
  {
    "url": "blog/random/astrology/index.html",
    "revision": "e91f7cc82697959ce790d05da3bf530b"
  },
  {
    "url": "blog/random/chicken/index.html",
    "revision": "00a7577855aa916ea1a9d4080634177d"
  },
  {
    "url": "blog/random/dns/index.html",
    "revision": "dd7bcd84e4038343d4059280882f4e3a"
  },
  {
    "url": "blog/random/evp/index.html",
    "revision": "0a2eda7b04d6aab706ce93fb56a8782e"
  },
  {
    "url": "blog/random/flip/index.html",
    "revision": "7b4bc9044a3fb6fd4421faab3f84a6b8"
  },
  {
    "url": "blog/random/honeychurch/index.html",
    "revision": "7108b73e3731327eeed1f8be111c6e0f"
  },
  {
    "url": "blog/random/index.html",
    "revision": "1e12027ca2c15f001e361a6a90ee0380"
  },
  {
    "url": "blog/random/lottery/index.html",
    "revision": "6bd3597e9cbb2cb3bdd255c3f7d130e3"
  },
  {
    "url": "blog/random/music/index.html",
    "revision": "5fb210121fcef9fdf69eb211013e4a06"
  },
  {
    "url": "blog/random/octal/index.html",
    "revision": "796d74cb77236b277d1f97c6a7dd0c33"
  },
  {
    "url": "blog/random/os/index.html",
    "revision": "4a8873a7cc56881798a9d2adb251e9b1"
  },
  {
    "url": "blog/random/propellers/index.html",
    "revision": "852b5f8495a2deef1874d97772ea3635"
  },
  {
    "url": "blog/random/robux/index.html",
    "revision": "85dc71ecbefce3e46dcbfee9a61e7154"
  },
  {
    "url": "blog/random/super/index.html",
    "revision": "0b3547bdac60ac6bc195d2112c32f74f"
  },
  {
    "url": "blog/random/times/index.html",
    "revision": "24fd9bab11bfa3408bb06d90fa3b7c86"
  },
  {
    "url": "blog/random/travel/index.html",
    "revision": "0380d0a843067c0e80a18ec5754315ad"
  },
  {
    "url": "blog/random/wilhelm/index.html",
    "revision": "182037efbadd5148c1d76ba6230fbd99"
  },
  {
    "url": "blog/random/year/index.html",
    "revision": "09730f4bfc154463fcf14a98d39661ca"
  },
  {
    "url": "blog/skepticism/2015/08/16/asa/index.html",
    "revision": "2004142afe3e66775acef48e5b1f9f8e"
  },
  {
    "url": "blog/skepticism/2015/08/16/awards/index.html",
    "revision": "a02d82d745d65d0db5bdc62475e36bcd"
  },
  {
    "url": "blog/skepticism/2015/08/16/bravo/index.html",
    "revision": "54f772d47d4dd430cd65a2f6e40d59b0"
  },
  {
    "url": "blog/skepticism/2015/08/16/index.html",
    "revision": "ca4d18af5460485b9af7840e674543c2"
  },
  {
    "url": "blog/skepticism/2015/08/16/jim/index.html",
    "revision": "ebd091ddcc8286893756d0026764566f"
  },
  {
    "url": "blog/skepticism/2015/08/16/naholo/index.html",
    "revision": "efd1855ccd6c9b342490e82c6018c0aa"
  },
  {
    "url": "blog/skepticism/2015/08/16/resene/index.html",
    "revision": "4ed3fb60a7c574a3fa050236a5f681c2"
  },
  {
    "url": "blog/skepticism/2015/08/index.html",
    "revision": "05c4a249263fe0e28c6d8b7bbc9c3133"
  },
  {
    "url": "blog/skepticism/2015/09/20/gop/index.html",
    "revision": "9bdae74aebcc031252ccbe130b307e8b"
  },
  {
    "url": "blog/skepticism/2015/09/20/ignobel/index.html",
    "revision": "167658afa5c8cf22723142a5be2fd49d"
  },
  {
    "url": "blog/skepticism/2015/09/20/index.html",
    "revision": "4b20b84019de84ee8b28f1bc23b36bbe"
  },
  {
    "url": "blog/skepticism/2015/09/20/supplements/index.html",
    "revision": "bc46e1770b2cf235454f7d784b8a8fd7"
  },
  {
    "url": "blog/skepticism/2015/09/27/ayahuasca/index.html",
    "revision": "44966ffd2f35a8c1361136b28a8ed837"
  },
  {
    "url": "blog/skepticism/2015/09/27/drought/index.html",
    "revision": "c268fd5bef3e983c3849b09a7ee95ae2"
  },
  {
    "url": "blog/skepticism/2015/09/27/index.html",
    "revision": "bf0941230de21cee6a305a9efd588343"
  },
  {
    "url": "blog/skepticism/2015/09/27/lama/index.html",
    "revision": "3d52d79ed731ca5638abb5cd076474eb"
  },
  {
    "url": "blog/skepticism/2015/09/27/moon/index.html",
    "revision": "b2457de187ce8405868f039cc2d6f81e"
  },
  {
    "url": "blog/skepticism/2015/09/27/scan/index.html",
    "revision": "71760e68fd9954dfd885895e88a7fed5"
  },
  {
    "url": "blog/skepticism/2015/09/index.html",
    "revision": "3c866ee98eb7b2e85b8a352da6c93598"
  },
  {
    "url": "blog/skepticism/2015/10/04/ghost/index.html",
    "revision": "9f3fe4e5a3af2e0199476a32bddd51c9"
  },
  {
    "url": "blog/skepticism/2015/10/04/haka/index.html",
    "revision": "5f1773fae592ecf369c8652fdebd4c12"
  },
  {
    "url": "blog/skepticism/2015/10/04/index.html",
    "revision": "6a806736658b1398814a40ffcb2b1c45"
  },
  {
    "url": "blog/skepticism/2015/10/04/mars/index.html",
    "revision": "9de25fb3f8b85d8f28122ddb4b8cf015"
  },
  {
    "url": "blog/skepticism/2015/10/04/pharmacy/index.html",
    "revision": "02c4c41ec21911bfe9fa2e2e5c9c69c6"
  },
  {
    "url": "blog/skepticism/2015/10/04/prostate/index.html",
    "revision": "f1a83527906b11e3bd5ba8e173b851d0"
  },
  {
    "url": "blog/skepticism/2015/10/11/armageddon/index.html",
    "revision": "3f5641e9ddb43a2b08504475ffb7e127"
  },
  {
    "url": "blog/skepticism/2015/10/11/climate/index.html",
    "revision": "449a9f5a93e38fa1491659ea243e3af5"
  },
  {
    "url": "blog/skepticism/2015/10/11/ghost/index.html",
    "revision": "f1eb4ba45e103ab873bab0cbbc31f681"
  },
  {
    "url": "blog/skepticism/2015/10/11/index.html",
    "revision": "b53e88e518caf759a8adb3b694a9b751"
  },
  {
    "url": "blog/skepticism/2015/10/11/magnesleep/index.html",
    "revision": "ff16cd9c993be973fb62fcc89b7f802b"
  },
  {
    "url": "blog/skepticism/2015/10/11/nhs/index.html",
    "revision": "11cb9b78fa1ce2360d9ad479c7bf25a7"
  },
  {
    "url": "blog/skepticism/2015/10/11/prophet/index.html",
    "revision": "26e9325230b97433c2bc3e52300f08b0"
  },
  {
    "url": "blog/skepticism/2015/10/index.html",
    "revision": "558416fcff45dffdb5891eb17b31b9c8"
  },
  {
    "url": "blog/skepticism/2015/11/15/end/index.html",
    "revision": "c0cd7ec1a414c500ab89acb16de8c7e9"
  },
  {
    "url": "blog/skepticism/2015/11/15/index.html",
    "revision": "d60a6b44d77959bd46247c4bc017d9ad"
  },
  {
    "url": "blog/skepticism/2015/11/index.html",
    "revision": "63d951de9fafb487e041218e81da66b6"
  },
  {
    "url": "blog/skepticism/2015/12/13/astrology/index.html",
    "revision": "25bdef5a5b8ed69cd6b3d3f39d99f7b3"
  },
  {
    "url": "blog/skepticism/2015/12/13/cancer/index.html",
    "revision": "8ba30d29357c8fe01eab6c0bb36866f0"
  },
  {
    "url": "blog/skepticism/2015/12/13/chickenpox/index.html",
    "revision": "2d83127bad3e9f67628f1098d17a09b5"
  },
  {
    "url": "blog/skepticism/2015/12/13/index.html",
    "revision": "17061c958abef11aa9a5b2c870d99f0a"
  },
  {
    "url": "blog/skepticism/2015/12/13/osteopath/index.html",
    "revision": "dd3e3ab79be6392666518217ab3a861e"
  },
  {
    "url": "blog/skepticism/2015/12/13/priest/index.html",
    "revision": "cc1d82d223fd1009270b8a1d95c8d3a0"
  },
  {
    "url": "blog/skepticism/2015/12/13/psychic/index.html",
    "revision": "0442db3f4be93a835fdd83cb107c7a97"
  },
  {
    "url": "blog/skepticism/2015/12/13/vaccines/index.html",
    "revision": "84dfdd37ac1f2b7179e2650c3941ac77"
  },
  {
    "url": "blog/skepticism/2015/12/index.html",
    "revision": "06fd19c14ea656ef201c30ea59e53a50"
  },
  {
    "url": "blog/skepticism/2015/index.html",
    "revision": "388a67117e60caf8e559885c10dc3218"
  },
  {
    "url": "blog/skepticism/2016/02/07/antioxidant/index.html",
    "revision": "258868e6231871ea4961c6a3ebd79788"
  },
  {
    "url": "blog/skepticism/2016/02/07/index.html",
    "revision": "c12cf8dfd6daba5edd269bef41df4060"
  },
  {
    "url": "blog/skepticism/2016/02/07/kfc/index.html",
    "revision": "521c2d2aaf710b12fb17b5b68fdd4e86"
  },
  {
    "url": "blog/skepticism/2016/02/07/ph/index.html",
    "revision": "09f33b928dc4e19dd2b9f9f42348b206"
  },
  {
    "url": "blog/skepticism/2016/02/07/sandy/index.html",
    "revision": "30b910cb1e578cfb1fccf90f98d636dd"
  },
  {
    "url": "blog/skepticism/2016/02/07/sarfati/index.html",
    "revision": "dc8f2d5f8fc8dbb74a5b6c439523cc9d"
  },
  {
    "url": "blog/skepticism/2016/02/07/trump/index.html",
    "revision": "799d793cc8567b64ca565f000d8d72d6"
  },
  {
    "url": "blog/skepticism/2016/02/14/coins/index.html",
    "revision": "e32e7b57888e334e1b46ba2385011f56"
  },
  {
    "url": "blog/skepticism/2016/02/14/fast/index.html",
    "revision": "416e41d7db26f2928de65d658dc173ba"
  },
  {
    "url": "blog/skepticism/2016/02/14/fluoride/index.html",
    "revision": "94608f702f17e614e657be1d78dd928e"
  },
  {
    "url": "blog/skepticism/2016/02/14/icke/index.html",
    "revision": "2e960ac52e63538d86c413311c6a0bee"
  },
  {
    "url": "blog/skepticism/2016/02/14/index.html",
    "revision": "29e6d9ddce2f1a61a1ae1ae21e9a9a37"
  },
  {
    "url": "blog/skepticism/2016/02/14/yeti/index.html",
    "revision": "06b9997d34f1b8ae324e25648282a0ec"
  },
  {
    "url": "blog/skepticism/2016/02/21/homeopathy/index.html",
    "revision": "ba47731cda3fae7f8ea1a17baf6ca15b"
  },
  {
    "url": "blog/skepticism/2016/02/21/index.html",
    "revision": "aeca3a2ad1ea511692656948c4fdc407"
  },
  {
    "url": "blog/skepticism/2016/02/21/monster/index.html",
    "revision": "24c2984481643dd96d65001d22be5e8d"
  },
  {
    "url": "blog/skepticism/2016/02/21/scalia/index.html",
    "revision": "989c082b5b0cdd47df25491b49c1c1f7"
  },
  {
    "url": "blog/skepticism/2016/02/21/shane/index.html",
    "revision": "97780e74965b5ed49290f663290dc0c5"
  },
  {
    "url": "blog/skepticism/2016/02/21/texas/index.html",
    "revision": "f6aa518f60aeee9b2f799368097b01f6"
  },
  {
    "url": "blog/skepticism/2016/02/28/acupuncture/index.html",
    "revision": "5547b0ef28869da61109721971978f8c"
  },
  {
    "url": "blog/skepticism/2016/02/28/fsm/index.html",
    "revision": "a64d3d2c82d4d356a351221a3adcb2ad"
  },
  {
    "url": "blog/skepticism/2016/02/28/index.html",
    "revision": "0282d8ae9b8a952c5fb4aca24f357530"
  },
  {
    "url": "blog/skepticism/2016/02/28/iv/index.html",
    "revision": "446e2f02f0be19a0431e10af1f5487c4"
  },
  {
    "url": "blog/skepticism/2016/02/28/natural/index.html",
    "revision": "18724be7dac114994a3540710e49b2d7"
  },
  {
    "url": "blog/skepticism/2016/02/28/talc/index.html",
    "revision": "1861c7c6da037b24fd953bc9a0b78eac"
  },
  {
    "url": "blog/skepticism/2016/02/index.html",
    "revision": "e7b03c4be540f251780e1f2b9543e26b"
  },
  {
    "url": "blog/skepticism/2016/03/13/herbs/index.html",
    "revision": "dfcd9ba89912775fd47cfd5d2fd04289"
  },
  {
    "url": "blog/skepticism/2016/03/13/index.html",
    "revision": "ffb65c03fb22148dd9077a06216167d9"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandala/index.html",
    "revision": "4a09bc0694502c35f0e58e1120842283"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandela/index.html",
    "revision": "8c48a5f768036a29916c8ebc1aa371e2"
  },
  {
    "url": "blog/skepticism/2016/03/13/spray/index.html",
    "revision": "4b4e7c2674f71ac856b50d796b6df50b"
  },
  {
    "url": "blog/skepticism/2016/03/index.html",
    "revision": "098db4915a608b04e79c2e58f5985f84"
  },
  {
    "url": "blog/skepticism/2016/04/17/charity/index.html",
    "revision": "c332369218ebf27323ca64573085723d"
  },
  {
    "url": "blog/skepticism/2016/04/17/chiro/index.html",
    "revision": "19ee26afa6e05ecafe8bb1f0e059f69d"
  },
  {
    "url": "blog/skepticism/2016/04/17/fluoride/index.html",
    "revision": "f39733dfedd1172b210d8c5e70e399bf"
  },
  {
    "url": "blog/skepticism/2016/04/17/index.html",
    "revision": "b95fe7f4b8f8938f61f941d8b8b4d025"
  },
  {
    "url": "blog/skepticism/2016/04/17/lotto/index.html",
    "revision": "b22d0ab350548695be0000e575034bea"
  },
  {
    "url": "blog/skepticism/2016/04/17/mind/index.html",
    "revision": "1541d5dd13b3a438b106b97255c6cd02"
  },
  {
    "url": "blog/skepticism/2016/04/17/whooping/index.html",
    "revision": "c71465417539c4f03585781391ac6633"
  },
  {
    "url": "blog/skepticism/2016/04/index.html",
    "revision": "ceca9c9352de5040577de0892eed2a0a"
  },
  {
    "url": "blog/skepticism/2016/06/05/1080/index.html",
    "revision": "a44dba7fb44c3e704400940ac6c02e82"
  },
  {
    "url": "blog/skepticism/2016/06/05/acupuncture/index.html",
    "revision": "4288082c4179dc528f274e8b5565f432"
  },
  {
    "url": "blog/skepticism/2016/06/05/family/index.html",
    "revision": "68318e787ba0a0378ecdefcff657135f"
  },
  {
    "url": "blog/skepticism/2016/06/05/index.html",
    "revision": "6bc2bfdc170075c42b4fdf17414d70af"
  },
  {
    "url": "blog/skepticism/2016/06/05/limbaugh/index.html",
    "revision": "8ed2bc466128b73db5953c0a3a2c628b"
  },
  {
    "url": "blog/skepticism/2016/06/12/bobby/index.html",
    "revision": "d12002f4d44d7de6cab2eae291b51168"
  },
  {
    "url": "blog/skepticism/2016/06/12/climate/index.html",
    "revision": "1ab009e081b8eb294fede06bb13325da"
  },
  {
    "url": "blog/skepticism/2016/06/12/index.html",
    "revision": "bd956213e252eed26eb0336cc06dbd8e"
  },
  {
    "url": "blog/skepticism/2016/06/12/pugh/index.html",
    "revision": "abb33efc8fd8d1e996bef77aebfd6f54"
  },
  {
    "url": "blog/skepticism/2016/06/12/savage/index.html",
    "revision": "349a4f2dc5fab4a80caa7948314cf0c9"
  },
  {
    "url": "blog/skepticism/2016/06/12/sawdust/index.html",
    "revision": "a0332cbb346c7f0fd9395d874a2c75e8"
  },
  {
    "url": "blog/skepticism/2016/06/19/beauty/index.html",
    "revision": "ad3048d845f2d5179fb3f8281c0681f5"
  },
  {
    "url": "blog/skepticism/2016/06/19/bilderberg/index.html",
    "revision": "ee063277a6c4f0fb737d0ffb355aa146"
  },
  {
    "url": "blog/skepticism/2016/06/19/cyf/index.html",
    "revision": "8a1990e279d09ece6d511f732c27b337"
  },
  {
    "url": "blog/skepticism/2016/06/19/holt/index.html",
    "revision": "9bb2dc306f2d86e2859e72df81878ac3"
  },
  {
    "url": "blog/skepticism/2016/06/19/index.html",
    "revision": "446670d617c6e31c96423fd6d969635f"
  },
  {
    "url": "blog/skepticism/2016/06/19/silver/index.html",
    "revision": "3a45da122cc5be3d8405913801463aff"
  },
  {
    "url": "blog/skepticism/2016/06/19/ufo/index.html",
    "revision": "2e7154dde154247efb954408e10e289b"
  },
  {
    "url": "blog/skepticism/2016/06/26/homeopathy/index.html",
    "revision": "d3bb5778eb35faf9f904a0e5c40efe1a"
  },
  {
    "url": "blog/skepticism/2016/06/26/index.html",
    "revision": "afd10468883393d18dbf3cbbf466af70"
  },
  {
    "url": "blog/skepticism/2016/06/26/robbins/index.html",
    "revision": "39e2103f722c0a133f4d3b2a4fe4e065"
  },
  {
    "url": "blog/skepticism/2016/06/26/selfies/index.html",
    "revision": "83f185b3ba768c38c438ab6b49ea667b"
  },
  {
    "url": "blog/skepticism/2016/06/26/silver/index.html",
    "revision": "847d83084870d9fc5048f8464e4db142"
  },
  {
    "url": "blog/skepticism/2016/06/26/ufos/index.html",
    "revision": "f268779693ab0ca75e80d733ed118fbf"
  },
  {
    "url": "blog/skepticism/2016/06/index.html",
    "revision": "842993454581b03f8a6c033665d5c3a9"
  },
  {
    "url": "blog/skepticism/2016/07/03/glyphosate/index.html",
    "revision": "9d01f1465c81db50b6f45847ab17d489"
  },
  {
    "url": "blog/skepticism/2016/07/03/gmo/index.html",
    "revision": "4724b33e63823ad73df5c23651092965"
  },
  {
    "url": "blog/skepticism/2016/07/03/index.html",
    "revision": "6d83574643ee2a082c63932749781a2f"
  },
  {
    "url": "blog/skepticism/2016/07/03/jail/index.html",
    "revision": "38eafe95d5f1da7be1e81ecb9c19dfc8"
  },
  {
    "url": "blog/skepticism/2016/07/03/ken/index.html",
    "revision": "18a9f3d98cae2302b709e102133a0f54"
  },
  {
    "url": "blog/skepticism/2016/07/10/ark/index.html",
    "revision": "a202ed9ba9a0143d14fb9f9c6e41f3ea"
  },
  {
    "url": "blog/skepticism/2016/07/10/bee/index.html",
    "revision": "3af6d839fd072bf5b320684c01b57f0f"
  },
  {
    "url": "blog/skepticism/2016/07/10/index.html",
    "revision": "cd8acf523ce574c286506cf175612126"
  },
  {
    "url": "blog/skepticism/2016/07/10/lottery/index.html",
    "revision": "9831366a2efaddd99b5b175d93b7abbd"
  },
  {
    "url": "blog/skepticism/2016/07/10/murder/index.html",
    "revision": "df26bbaa8a08afa3db64e0675bad644a"
  },
  {
    "url": "blog/skepticism/2016/07/17/dogs/index.html",
    "revision": "af2aaa2a095f98d0d2de3b2a5474fff8"
  },
  {
    "url": "blog/skepticism/2016/07/17/fsm/index.html",
    "revision": "8363c391c561f6d303450fae28c9bfca"
  },
  {
    "url": "blog/skepticism/2016/07/17/fyi/index.html",
    "revision": "3bd69e1f5f4d759353bd3b4a6c3bd53a"
  },
  {
    "url": "blog/skepticism/2016/07/17/index.html",
    "revision": "d930a8f1b432564c328ad2dcdc0b4c4b"
  },
  {
    "url": "blog/skepticism/2016/07/17/natural/index.html",
    "revision": "1c69587cc854f240a941eae6c84ef96b"
  },
  {
    "url": "blog/skepticism/2016/07/17/pokemon/index.html",
    "revision": "d31de1f14c3c44c68f64c00a07323dfa"
  },
  {
    "url": "blog/skepticism/2016/07/index.html",
    "revision": "39f39bbe9a0cd168a29c16b45eff417e"
  },
  {
    "url": "blog/skepticism/2016/08/07/icke/index.html",
    "revision": "6578bd09a5a96a0bad82447f82a1e4b9"
  },
  {
    "url": "blog/skepticism/2016/08/07/index.html",
    "revision": "6e0ca6501471133beae94ed029766d7f"
  },
  {
    "url": "blog/skepticism/2016/08/21/brian/index.html",
    "revision": "660bd1bc913cff5d949b032e338b04eb"
  },
  {
    "url": "blog/skepticism/2016/08/21/chlorine/index.html",
    "revision": "676fefbcf51a143b221ed2f0674be5d3"
  },
  {
    "url": "blog/skepticism/2016/08/21/index.html",
    "revision": "e22c3cf1acee1ef18d479245c08cac83"
  },
  {
    "url": "blog/skepticism/2016/08/21/murder/index.html",
    "revision": "d142b8fe2c5b3d0fee25d4828fda1395"
  },
  {
    "url": "blog/skepticism/2016/08/21/superfoods/index.html",
    "revision": "d94458f2a46c6fb32d000b7840400fc4"
  },
  {
    "url": "blog/skepticism/2016/08/21/witch/index.html",
    "revision": "abb646f1bf0a5e5b2d21f5b54290f98f"
  },
  {
    "url": "blog/skepticism/2016/08/28/alcohol/index.html",
    "revision": "b008a19035921f4b51fb39f8003a4022"
  },
  {
    "url": "blog/skepticism/2016/08/28/chiro/index.html",
    "revision": "3e759d1aec8d22e374c8dc1412af01a3"
  },
  {
    "url": "blog/skepticism/2016/08/28/index.html",
    "revision": "77980928bae1d274caa1d3a73801a264"
  },
  {
    "url": "blog/skepticism/2016/08/28/processed/index.html",
    "revision": "d07b862902c86291484c12c327db03e2"
  },
  {
    "url": "blog/skepticism/2016/08/28/sbh/index.html",
    "revision": "16cf7621085890efdbf10d983e9ae31f"
  },
  {
    "url": "blog/skepticism/2016/08/index.html",
    "revision": "a8bb616e30cf67974e4556f184ea34f6"
  },
  {
    "url": "blog/skepticism/2016/09/18/altruism/index.html",
    "revision": "d3fef1aee2e368f6bbaeaa31c92d490f"
  },
  {
    "url": "blog/skepticism/2016/09/18/better/index.html",
    "revision": "4e28a352479c1e6a4b0fc129baf8ddea"
  },
  {
    "url": "blog/skepticism/2016/09/18/homeopathy/index.html",
    "revision": "fd01d38e3107fd3aaefb30ddf23bd8a4"
  },
  {
    "url": "blog/skepticism/2016/09/18/index.html",
    "revision": "1a6019662930ef73d86530b0c554a454"
  },
  {
    "url": "blog/skepticism/2016/09/18/nonsense/index.html",
    "revision": "5fcba0c48ba3b3ee75a3c7cbd77f7ff5"
  },
  {
    "url": "blog/skepticism/2016/09/18/trump/index.html",
    "revision": "3b2a6909232ec5f58cdcc812bc996515"
  },
  {
    "url": "blog/skepticism/2016/09/25/clinic/index.html",
    "revision": "da84a3f879bc224e00746e926a35c3c0"
  },
  {
    "url": "blog/skepticism/2016/09/25/fluoride/index.html",
    "revision": "5a0748d5ceec55f7cd0e60d088bf13b3"
  },
  {
    "url": "blog/skepticism/2016/09/25/homeopathy/index.html",
    "revision": "7eb8ac4ae6e8e4f5f79d73a2c5e00af6"
  },
  {
    "url": "blog/skepticism/2016/09/25/index.html",
    "revision": "94b0592e20973b2070834f24f3e70533"
  },
  {
    "url": "blog/skepticism/2016/09/25/murder/index.html",
    "revision": "2bf9af950b1d3ec8f7ba7e1c7a976497"
  },
  {
    "url": "blog/skepticism/2016/09/index.html",
    "revision": "06772747f84c3579ecbf9641359f7202"
  },
  {
    "url": "blog/skepticism/2016/10/21/bigfoot/index.html",
    "revision": "1ad2da1b4e9e47ab5a9bd587ce6e0f90"
  },
  {
    "url": "blog/skepticism/2016/10/21/breasts/index.html",
    "revision": "6d8e2830df0c809939e99472728384ae"
  },
  {
    "url": "blog/skepticism/2016/10/21/index.html",
    "revision": "cbcca9e5b90f328abf155b696ac9199d"
  },
  {
    "url": "blog/skepticism/2016/10/21/medsafe/index.html",
    "revision": "36944392c6b43cdef80c214f4aeab9af"
  },
  {
    "url": "blog/skepticism/2016/10/21/zenteq/index.html",
    "revision": "2df9faf4f99f8473e50d867014176d6d"
  },
  {
    "url": "blog/skepticism/2016/10/index.html",
    "revision": "f4157a7c82fe0f3b7206eaf7a5535f6d"
  },
  {
    "url": "blog/skepticism/2016/11/13/conference/index.html",
    "revision": "ca19c411fbe7df67dfb175bfeaa753a0"
  },
  {
    "url": "blog/skepticism/2016/11/13/green/index.html",
    "revision": "b948034ac5adff3f25197c231510572f"
  },
  {
    "url": "blog/skepticism/2016/11/13/index.html",
    "revision": "5f5f572c9db931b8ecece5661fcb2b9f"
  },
  {
    "url": "blog/skepticism/2016/11/13/vice/index.html",
    "revision": "2521f3ab24c66b841bc94d13d10985ca"
  },
  {
    "url": "blog/skepticism/2016/11/27/bioptron/index.html",
    "revision": "963febd8950523feb4ae8c05d3ad354c"
  },
  {
    "url": "blog/skepticism/2016/11/27/conference/index.html",
    "revision": "b39e4e1ff6baa95c3d95d2cd6f2edeac"
  },
  {
    "url": "blog/skepticism/2016/11/27/earthquake/index.html",
    "revision": "500e08478089496a2f31bf29a34b8f28"
  },
  {
    "url": "blog/skepticism/2016/11/27/index.html",
    "revision": "44248ae886117075cf281eeeb58c2c91"
  },
  {
    "url": "blog/skepticism/2016/11/index.html",
    "revision": "b1369b74472cab84a41448fa89301d17"
  },
  {
    "url": "blog/skepticism/2016/12/04/conference/index.html",
    "revision": "7e5e4eccdfb0e77345b963e0ff5578c7"
  },
  {
    "url": "blog/skepticism/2016/12/04/index.html",
    "revision": "81ea07820e630e3037b19ab206412758"
  },
  {
    "url": "blog/skepticism/2016/12/18/colin/index.html",
    "revision": "9e509e5334cbc3cf66cc07177df0113f"
  },
  {
    "url": "blog/skepticism/2016/12/18/fiji/index.html",
    "revision": "7ac217ad7da2886a4ad6e5bd58ee0efc"
  },
  {
    "url": "blog/skepticism/2016/12/18/index.html",
    "revision": "d9adf00b878e1bbcb56f68f8fdc572e5"
  },
  {
    "url": "blog/skepticism/2016/12/18/kinesiology/index.html",
    "revision": "ad5fe92c8e8892c8e545d7263d04af8c"
  },
  {
    "url": "blog/skepticism/2016/12/18/mmm/index.html",
    "revision": "72706528e5373926bc6f712eba005961"
  },
  {
    "url": "blog/skepticism/2016/12/18/nigel/index.html",
    "revision": "fe016567baccaa992de593e543e6f428"
  },
  {
    "url": "blog/skepticism/2016/12/index.html",
    "revision": "c603f6bc363abc4f053e85cba9e4024a"
  },
  {
    "url": "blog/skepticism/2016/index.html",
    "revision": "426644a927828d2aaa84c729db54120e"
  },
  {
    "url": "blog/skepticism/2017/01/22/index.html",
    "revision": "843bebe77431153498666376bc7a106d"
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
    "revision": "41b3af69918ca43b793e72968f7e530d"
  },
  {
    "url": "blog/skepticism/2017/01/index.html",
    "revision": "07b7981dbc88ef964e25938e6d5c8956"
  },
  {
    "url": "blog/skepticism/2017/02/05/fraudster/index.html",
    "revision": "29e3bad939cadfa7d132421956206c9b"
  },
  {
    "url": "blog/skepticism/2017/02/05/gervais/index.html",
    "revision": "d901750fc77d939b18de4c30d965ca44"
  },
  {
    "url": "blog/skepticism/2017/02/05/index.html",
    "revision": "1c5eb4668366924f420351d5e8cf0f4b"
  },
  {
    "url": "blog/skepticism/2017/02/05/scientology/index.html",
    "revision": "204e629b4ee0ca41631c4eae254e6c68"
  },
  {
    "url": "blog/skepticism/2017/02/19/homeopathy/index.html",
    "revision": "6e760812c862b27efe0c461409bbdc53"
  },
  {
    "url": "blog/skepticism/2017/02/19/index.html",
    "revision": "6c7f2252e69a8a9328520627afb265ac"
  },
  {
    "url": "blog/skepticism/2017/02/19/lottery/index.html",
    "revision": "01691a523fa0bdf7a4afbeef8dfb4fb9"
  },
  {
    "url": "blog/skepticism/2017/02/19/vaxxed/index.html",
    "revision": "e3883cc6543e4df9c370b1b9f23c46a8"
  },
  {
    "url": "blog/skepticism/2017/02/19/whales/index.html",
    "revision": "b2aaa0e5505dcf3e087472fad7febca4"
  },
  {
    "url": "blog/skepticism/2017/02/index.html",
    "revision": "3c2080d3b789d8d25cce256bfe6eecba"
  },
  {
    "url": "blog/skepticism/2017/03/05/index.html",
    "revision": "7e960182f3f81af8e9e35c06cf7f7f6e"
  },
  {
    "url": "blog/skepticism/2017/03/05/rea/index.html",
    "revision": "525cdcadb6ccbf9c536a29e254649c4c"
  },
  {
    "url": "blog/skepticism/2017/03/19/fake/index.html",
    "revision": "d7cf6a7deaa52938892ce56e9e6d1ec1"
  },
  {
    "url": "blog/skepticism/2017/03/19/index.html",
    "revision": "5969800f678b2e336ba091aa68ca21c6"
  },
  {
    "url": "blog/skepticism/2017/03/19/murder/index.html",
    "revision": "f1fe365feb0b6ec17743cad005a48969"
  },
  {
    "url": "blog/skepticism/2017/03/26/census/index.html",
    "revision": "02d0d94161a45eedbf3e0c02869ec4cf"
  },
  {
    "url": "blog/skepticism/2017/03/26/index.html",
    "revision": "8f1de6ffd920707136e59ed291eccf95"
  },
  {
    "url": "blog/skepticism/2017/03/26/nzmj/index.html",
    "revision": "1e83f38781bd12bc7c9babe0800bb180"
  },
  {
    "url": "blog/skepticism/2017/03/26/shaquille/index.html",
    "revision": "91465ba82bad2464d20718e25651b89d"
  },
  {
    "url": "blog/skepticism/2017/03/index.html",
    "revision": "1e1e466b94224965951a46eeecfc8ed7"
  },
  {
    "url": "blog/skepticism/2017/04/02/index.html",
    "revision": "842d6c08bb2100cdb50a00bc75c9ea0d"
  },
  {
    "url": "blog/skepticism/2017/04/02/nasa/index.html",
    "revision": "eb219c8c600bb1ad787cbeba55f86e13"
  },
  {
    "url": "blog/skepticism/2017/04/02/science/index.html",
    "revision": "c49716222ed956129fe374e1ab158ef9"
  },
  {
    "url": "blog/skepticism/2017/04/02/vaxxed/index.html",
    "revision": "7bdcc02f385932497a428af2451a991b"
  },
  {
    "url": "blog/skepticism/2017/04/09/index.html",
    "revision": "1e9048cdada9783426bcd74aca0fa7ac"
  },
  {
    "url": "blog/skepticism/2017/04/09/tekiri/index.html",
    "revision": "91369239ddd533b3ed51c79dbd731441"
  },
  {
    "url": "blog/skepticism/2017/04/09/vaxxed/index.html",
    "revision": "5e696c9a57a967aef5874c38e2270219"
  },
  {
    "url": "blog/skepticism/2017/04/23/arise/index.html",
    "revision": "8e13d7f51e2f9493973a75a26504881e"
  },
  {
    "url": "blog/skepticism/2017/04/23/index.html",
    "revision": "a262aa1d198df16e2209617fd506171a"
  },
  {
    "url": "blog/skepticism/2017/04/23/kelvin/index.html",
    "revision": "606c01062119f9036678cc135752153a"
  },
  {
    "url": "blog/skepticism/2017/04/index.html",
    "revision": "a20ab98f0a91ce11fb409c34b84c3fda"
  },
  {
    "url": "blog/skepticism/2017/05/07/cancer/index.html",
    "revision": "452f044469780fe056349bbb2effa949"
  },
  {
    "url": "blog/skepticism/2017/05/07/index.html",
    "revision": "38ab7aad3b384819b08f2f21c7a24fe2"
  },
  {
    "url": "blog/skepticism/2017/05/07/nigel/index.html",
    "revision": "b49235e327020d995906a92d2018bb17"
  },
  {
    "url": "blog/skepticism/2017/05/21/blasphemy/index.html",
    "revision": "25fb65fab5ccfc9b59a413ecccb4fa0a"
  },
  {
    "url": "blog/skepticism/2017/05/21/flat/index.html",
    "revision": "c826229805c00cf9de7fa8c37f76df6b"
  },
  {
    "url": "blog/skepticism/2017/05/21/index.html",
    "revision": "6029a9b3d2f4cf07dd2c411fd22f7805"
  },
  {
    "url": "blog/skepticism/2017/05/21/maori/index.html",
    "revision": "35f5d6116592e983352f387526b74042"
  },
  {
    "url": "blog/skepticism/2017/05/index.html",
    "revision": "de6b87be2220fa7f7cb363fe7c8bd011"
  },
  {
    "url": "blog/skepticism/2017/06/04/bigelow/index.html",
    "revision": "3e065b5a057353e11ca8395230942a58"
  },
  {
    "url": "blog/skepticism/2017/06/04/climate/index.html",
    "revision": "3421269f604b330d226854717ed4d9bd"
  },
  {
    "url": "blog/skepticism/2017/06/04/hansford/index.html",
    "revision": "28aaadfb9aa9419001fc97c1d0c53ef1"
  },
  {
    "url": "blog/skepticism/2017/06/04/index.html",
    "revision": "ecb4a7993b6037e1755990e34b036628"
  },
  {
    "url": "blog/skepticism/2017/06/04/wasp/index.html",
    "revision": "93af3fd47ef6596cfa39a975faeabcb0"
  },
  {
    "url": "blog/skepticism/2017/06/11/colonic/index.html",
    "revision": "317653f80752489339dd75b43cb3104f"
  },
  {
    "url": "blog/skepticism/2017/06/11/credulous/index.html",
    "revision": "6917041394ca6f741ce3ff4f6230f2eb"
  },
  {
    "url": "blog/skepticism/2017/06/11/index.html",
    "revision": "81dff8d2800c60692c36c7b513265a0a"
  },
  {
    "url": "blog/skepticism/2017/06/11/journals/index.html",
    "revision": "bf25a99b32b4e4cc224d3db4f95e283d"
  },
  {
    "url": "blog/skepticism/2017/06/18/breatharians/index.html",
    "revision": "3e97dfe3461552ba76999417354737a1"
  },
  {
    "url": "blog/skepticism/2017/06/18/fieldays/index.html",
    "revision": "dc4c8779fe9079adbedf2bb7f5712a85"
  },
  {
    "url": "blog/skepticism/2017/06/18/index.html",
    "revision": "5b5bec5928a3c618ef5b1de7cb852e36"
  },
  {
    "url": "blog/skepticism/2017/06/18/jw/index.html",
    "revision": "3d82f05fffed04f01ffe0ccf0bc7331b"
  },
  {
    "url": "blog/skepticism/2017/06/18/oil/index.html",
    "revision": "22f0ff887489c50b20e7ed06ba2f299f"
  },
  {
    "url": "blog/skepticism/2017/06/index.html",
    "revision": "30c956b393224e0f71a00978652e03de"
  },
  {
    "url": "blog/skepticism/2017/07/02/baby/index.html",
    "revision": "136258b6f059edf5c553b2eff651b6c6"
  },
  {
    "url": "blog/skepticism/2017/07/02/index.html",
    "revision": "00c53f3f85ace289e50c441a105fa061"
  },
  {
    "url": "blog/skepticism/2017/07/02/infowars/index.html",
    "revision": "b5890674d1936d19ae798e200acb3fd6"
  },
  {
    "url": "blog/skepticism/2017/07/02/scientology/index.html",
    "revision": "12739ed2a5aa867c42fc8dcdbde7e7e9"
  },
  {
    "url": "blog/skepticism/2017/07/16/bananas/index.html",
    "revision": "d5720756fa1a6f21fc263398c9c62e1c"
  },
  {
    "url": "blog/skepticism/2017/07/16/circles/index.html",
    "revision": "8466cef4e8bd8875d9d54e61044bbd00"
  },
  {
    "url": "blog/skepticism/2017/07/16/index.html",
    "revision": "d5831a5f2223c9346ac07159011c9d3d"
  },
  {
    "url": "blog/skepticism/2017/07/16/siggi/index.html",
    "revision": "24036b47c3c93d864ecf65d598977f02"
  },
  {
    "url": "blog/skepticism/2017/07/16/vaxxed/index.html",
    "revision": "a5334e1288b918d8c0c7287f15958d63"
  },
  {
    "url": "blog/skepticism/2017/07/30/bleach/index.html",
    "revision": "853677b3b91287177e6eb049cc8d6bba"
  },
  {
    "url": "blog/skepticism/2017/07/30/bluebeam/index.html",
    "revision": "b1bfaa60db0f00a2cd6d4c7362f24bfd"
  },
  {
    "url": "blog/skepticism/2017/07/30/index.html",
    "revision": "189459e783c9cfe6dd48b3e4d4ce7211"
  },
  {
    "url": "blog/skepticism/2017/07/30/police/index.html",
    "revision": "d191b87d45381ca7d8c6a6d758df1fc1"
  },
  {
    "url": "blog/skepticism/2017/07/index.html",
    "revision": "379c7e47d338d0f2866af6729f861898"
  },
  {
    "url": "blog/skepticism/2017/08/06/conned/index.html",
    "revision": "1ee7604b5ee63fe7fc0020ca20f842ba"
  },
  {
    "url": "blog/skepticism/2017/08/06/doll/index.html",
    "revision": "b3144cf2ccac80ff08bcd196ecfa102c"
  },
  {
    "url": "blog/skepticism/2017/08/06/index.html",
    "revision": "c5b14948548ba455b45328e719fc1c59"
  },
  {
    "url": "blog/skepticism/2017/08/06/jacinda/index.html",
    "revision": "6bd8c2a9b0447bcb7d0b839506303d4b"
  },
  {
    "url": "blog/skepticism/2017/08/06/lotto/index.html",
    "revision": "081b99519d512dfd2fc30b9148de42fa"
  },
  {
    "url": "blog/skepticism/2017/08/27/index.html",
    "revision": "0f5570a09ebb6d126fb82a4134383428"
  },
  {
    "url": "blog/skepticism/2017/08/27/naturopath/index.html",
    "revision": "68ffe537c1377e4af534fa54660cef1b"
  },
  {
    "url": "blog/skepticism/2017/08/27/satanic/index.html",
    "revision": "ed44f66787f16df74975a9f5e9d6eea9"
  },
  {
    "url": "blog/skepticism/2017/08/index.html",
    "revision": "a06ebe244a159cd0c128d4a87ef65c91"
  },
  {
    "url": "blog/skepticism/2017/09/03/apocalypse/index.html",
    "revision": "8faaebd6684e53f1f5de1a4fbe230149"
  },
  {
    "url": "blog/skepticism/2017/09/03/cancer/index.html",
    "revision": "bb3c87f61a3eb8bcdc7fbc628b030f88"
  },
  {
    "url": "blog/skepticism/2017/09/03/index.html",
    "revision": "e926fff9cbb0478c3966cf7c7ea50ce2"
  },
  {
    "url": "blog/skepticism/2017/09/03/rectangle/index.html",
    "revision": "747d04bbc37412532a65c9dc2b19bfec"
  },
  {
    "url": "blog/skepticism/2017/09/03/stargate/index.html",
    "revision": "3eb258ae6ad04bd1656a57c949b6c63b"
  },
  {
    "url": "blog/skepticism/2017/09/index.html",
    "revision": "36d9a4c1262767a01c016404a3600141"
  },
  {
    "url": "blog/skepticism/2017/10/01/apocalypse/index.html",
    "revision": "ab41de5068ee9a7582a0b5adeb106c19"
  },
  {
    "url": "blog/skepticism/2017/10/01/freeman/index.html",
    "revision": "e20353fcbb565afc76c09426c82c7ea6"
  },
  {
    "url": "blog/skepticism/2017/10/01/index.html",
    "revision": "139f68a1c84a80d612264267a32619a4"
  },
  {
    "url": "blog/skepticism/2017/10/01/pharmacy/index.html",
    "revision": "449aad8423ed46fbb2d79437faafc339"
  },
  {
    "url": "blog/skepticism/2017/10/08/index.html",
    "revision": "94987a7039469a473e9297247f296b30"
  },
  {
    "url": "blog/skepticism/2017/10/08/pill/index.html",
    "revision": "94da9cf1b3e5ca6b78996ea1fa365a21"
  },
  {
    "url": "blog/skepticism/2017/10/08/qsb/index.html",
    "revision": "97bce7bc49ff307ccbf6c30a7ee20911"
  },
  {
    "url": "blog/skepticism/2017/10/08/vegas/index.html",
    "revision": "58e308a6460971a2cecde79a0d64b2e0"
  },
  {
    "url": "blog/skepticism/2017/10/15/doterra/index.html",
    "revision": "16f135e7c1f84f9edabbd6d9fc534047"
  },
  {
    "url": "blog/skepticism/2017/10/15/index.html",
    "revision": "47682ab82cd16bfd03696a0257cce958"
  },
  {
    "url": "blog/skepticism/2017/10/15/lie/index.html",
    "revision": "15639e4fcc833faedd355ef1c442e910"
  },
  {
    "url": "blog/skepticism/2017/10/15/soap/index.html",
    "revision": "d20cdb241bba5d4a93d5dfcd99265ade"
  },
  {
    "url": "blog/skepticism/2017/10/index.html",
    "revision": "ec2d3a84a61a2a0c51d72ac318cf1856"
  },
  {
    "url": "blog/skepticism/2017/11/05/conference/index.html",
    "revision": "279e84bf862bebf1ec8e7432b8cc3df1"
  },
  {
    "url": "blog/skepticism/2017/11/05/glyphosate/index.html",
    "revision": "5cbfda59d3886de8e6a57520c50f3272"
  },
  {
    "url": "blog/skepticism/2017/11/05/index.html",
    "revision": "9f2e72ccc6580200acf5f74774eb5394"
  },
  {
    "url": "blog/skepticism/2017/11/05/stranded/index.html",
    "revision": "3cf1ce76a3071884def9e5781ce82657"
  },
  {
    "url": "blog/skepticism/2017/11/05/tracts/index.html",
    "revision": "e4fec0ac2637b8e7b508c1c5e5d39685"
  },
  {
    "url": "blog/skepticism/2017/11/12/ghost/index.html",
    "revision": "2053430f561206f5ebdd68f3cebd87ff"
  },
  {
    "url": "blog/skepticism/2017/11/12/green/index.html",
    "revision": "4e460894c4cf5523994ffdfd0e1d7737"
  },
  {
    "url": "blog/skepticism/2017/11/12/harassment/index.html",
    "revision": "369e11c521eba3961bfc0a674316ce2c"
  },
  {
    "url": "blog/skepticism/2017/11/12/index.html",
    "revision": "4f6489027cefb82011d2ce1ba335a08b"
  },
  {
    "url": "blog/skepticism/2017/11/12/libby/index.html",
    "revision": "2f7dd895b05830a3f87dd37346859460"
  },
  {
    "url": "blog/skepticism/2017/11/index.html",
    "revision": "f6df31dc8ed77737fe7a4f977a3cd418"
  },
  {
    "url": "blog/skepticism/2017/12/03/acupuncture/index.html",
    "revision": "027554c130555c6d574c38e5e8057d2d"
  },
  {
    "url": "blog/skepticism/2017/12/03/denialism/index.html",
    "revision": "a113d1a333352a4a777bee14a331dbfd"
  },
  {
    "url": "blog/skepticism/2017/12/03/dowsing/index.html",
    "revision": "7b76f177fa323b29a231bbf8e570dd41"
  },
  {
    "url": "blog/skepticism/2017/12/03/holes/index.html",
    "revision": "4db38b0eabc30c44e28675e19aecdff4"
  },
  {
    "url": "blog/skepticism/2017/12/03/index.html",
    "revision": "91d933e316d61cbbe945eaec17823556"
  },
  {
    "url": "blog/skepticism/2017/12/17/index.html",
    "revision": "b4cf83db67f869a7f9a52f79930dab86"
  },
  {
    "url": "blog/skepticism/2017/12/17/nhs/index.html",
    "revision": "4cee33ead0f48953dc3010da9c417c33"
  },
  {
    "url": "blog/skepticism/2017/12/17/oto/index.html",
    "revision": "f5a3d6637a05de2449247e2de72841d7"
  },
  {
    "url": "blog/skepticism/2017/12/17/pastafarian/index.html",
    "revision": "927f90accc05fa164961e358bcb79a3f"
  },
  {
    "url": "blog/skepticism/2017/12/17/shc/index.html",
    "revision": "1b5ef11dbf5612dd8eba56c4e21523f5"
  },
  {
    "url": "blog/skepticism/2017/12/17/wellworks/index.html",
    "revision": "45ebf1eee0692d7f34461413fdf9e2f6"
  },
  {
    "url": "blog/skepticism/2017/12/index.html",
    "revision": "9b0d75ea9d53a17f208021eaec0000d5"
  },
  {
    "url": "blog/skepticism/2017/index.html",
    "revision": "ede2321312b32372c51441ec6404b4ee"
  },
  {
    "url": "blog/skepticism/2018/01/21/grounding/index.html",
    "revision": "e179c5deaf200c7b6627a4de735485e7"
  },
  {
    "url": "blog/skepticism/2018/01/21/index.html",
    "revision": "cf4c3bf82a831b8a05889999e84b4ce7"
  },
  {
    "url": "blog/skepticism/2018/01/21/naturopath/index.html",
    "revision": "0222a52030f561d8bf370877b4f92aeb"
  },
  {
    "url": "blog/skepticism/2018/01/21/respen/index.html",
    "revision": "9064dc4d745d51ac45df79d3f392d09c"
  },
  {
    "url": "blog/skepticism/2018/01/28/bears/index.html",
    "revision": "d8c4625c545788c6b3d18fcc1027b731"
  },
  {
    "url": "blog/skepticism/2018/01/28/index.html",
    "revision": "fb9379f5f25545647b4eb77b360bccbb"
  },
  {
    "url": "blog/skepticism/2018/01/28/peppering/index.html",
    "revision": "2a5204761115178b06b7be3173cbfcde"
  },
  {
    "url": "blog/skepticism/2018/01/28/pet/index.html",
    "revision": "b92e17afe5791224ed7944b2cce20d5e"
  },
  {
    "url": "blog/skepticism/2018/01/28/quake/index.html",
    "revision": "457ac53e1f55e833fe15f4951a684b46"
  },
  {
    "url": "blog/skepticism/2018/01/28/scientology/index.html",
    "revision": "6b78bcd833eb97a6739a0450ade5e22d"
  },
  {
    "url": "blog/skepticism/2018/01/index.html",
    "revision": "8e2f96179bd13e4e6f225c095979d234"
  },
  {
    "url": "blog/skepticism/2018/02/11/asa/index.html",
    "revision": "ef467c26bd7420611695eb74eaa7148e"
  },
  {
    "url": "blog/skepticism/2018/02/11/cannabis/index.html",
    "revision": "937ac676723c749ed4161f8aa4ae5915"
  },
  {
    "url": "blog/skepticism/2018/02/11/elon/index.html",
    "revision": "5afc2cdc7e84766d8ce99b8a39315656"
  },
  {
    "url": "blog/skepticism/2018/02/11/homeopathy/index.html",
    "revision": "92f132f57fdaa900db3b16d2ddd1b0f3"
  },
  {
    "url": "blog/skepticism/2018/02/11/index.html",
    "revision": "f674bffbe91d9b78e8766e18394179b5"
  },
  {
    "url": "blog/skepticism/2018/02/11/water/index.html",
    "revision": "9886a180f73c644fc21543e228c51efa"
  },
  {
    "url": "blog/skepticism/2018/02/25/crisis/index.html",
    "revision": "d176f87fe5a855d613fe7b145b2f3fbc"
  },
  {
    "url": "blog/skepticism/2018/02/25/eggs/index.html",
    "revision": "9d32992fc4bf9673c62c825a6e672ae8"
  },
  {
    "url": "blog/skepticism/2018/02/25/fsm/index.html",
    "revision": "c9a9348e0831086dadf534a0692f76dc"
  },
  {
    "url": "blog/skepticism/2018/02/25/index.html",
    "revision": "7ca03afda492cd93325bd86c3f53f2d5"
  },
  {
    "url": "blog/skepticism/2018/02/25/number/index.html",
    "revision": "563d447365614c65c4aeb1b16424df95"
  },
  {
    "url": "blog/skepticism/2018/02/25/quackery/index.html",
    "revision": "b60029ad17d2b665daf2ae99b1497858"
  },
  {
    "url": "blog/skepticism/2018/02/index.html",
    "revision": "347a4f7cffa7e38491cadb7f8461795b"
  },
  {
    "url": "blog/skepticism/2018/03/11/ai/index.html",
    "revision": "004fb577ef6316ebb8f0bb6bf7c61154"
  },
  {
    "url": "blog/skepticism/2018/03/11/index.html",
    "revision": "d7c52b416b009f3a960ef6d01ad7c7fb"
  },
  {
    "url": "blog/skepticism/2018/03/11/radiation/index.html",
    "revision": "ff82d7b674c5a5d438c68cbbea997735"
  },
  {
    "url": "blog/skepticism/2018/03/11/reiki/index.html",
    "revision": "5818c9073e5c83bdcf1a18b9fb28a7a0"
  },
  {
    "url": "blog/skepticism/2018/03/11/ufo/index.html",
    "revision": "bd1ec9dd601f3f0d222bc6bcca0fc4a6"
  },
  {
    "url": "blog/skepticism/2018/03/18/ghost/index.html",
    "revision": "46946cb13bb3a437fd4e1bd28d7b757c"
  },
  {
    "url": "blog/skepticism/2018/03/18/index.html",
    "revision": "04a70e276386f54cbfc736a8946b852a"
  },
  {
    "url": "blog/skepticism/2018/03/18/psychic/index.html",
    "revision": "fad4f6bf0bb43aafe2e8af4ccec1bd17"
  },
  {
    "url": "blog/skepticism/2018/03/18/quack/index.html",
    "revision": "dadf9f87b1b76c58d30d9b25455b66f1"
  },
  {
    "url": "blog/skepticism/2018/03/18/radiation/index.html",
    "revision": "790bad332493cbd23530f0265d032ead"
  },
  {
    "url": "blog/skepticism/2018/03/index.html",
    "revision": "224e9e850c8e9191ec45c934bd8f2e76"
  },
  {
    "url": "blog/skepticism/2018/04/08/calocurb/index.html",
    "revision": "817b7929670d0693d1e5a0010003fdb5"
  },
  {
    "url": "blog/skepticism/2018/04/08/cam/index.html",
    "revision": "4a65bc00dd7ea9a9df967ee11be1e73f"
  },
  {
    "url": "blog/skepticism/2018/04/08/index.html",
    "revision": "1783a72a6c32268c2f26d462a3675572"
  },
  {
    "url": "blog/skepticism/2018/04/08/psychic/index.html",
    "revision": "d674531b79bd7d0033ec0d343ca66713"
  },
  {
    "url": "blog/skepticism/2018/04/08/vaccines/index.html",
    "revision": "8c24faf64e32d4e2b8aea205acd2997c"
  },
  {
    "url": "blog/skepticism/2018/04/15/coffee/index.html",
    "revision": "af75f4d7daee7b4e5a84c8bc861a95f2"
  },
  {
    "url": "blog/skepticism/2018/04/15/ignorance/index.html",
    "revision": "e38ef919a54a72277761178efb0c68f1"
  },
  {
    "url": "blog/skepticism/2018/04/15/index.html",
    "revision": "66d941d99d0824d0dd35414b45e4a198"
  },
  {
    "url": "blog/skepticism/2018/04/15/nasa/index.html",
    "revision": "29572aff72d07786b6433d60400a4a43"
  },
  {
    "url": "blog/skepticism/2018/04/15/tapu/index.html",
    "revision": "ffac379d0e84533a7aeb5762433ec0b4"
  },
  {
    "url": "blog/skepticism/2018/04/29/google/index.html",
    "revision": "427cf8fbfea467df6f3b7767bac6bcb0"
  },
  {
    "url": "blog/skepticism/2018/04/29/homeopathy/index.html",
    "revision": "49a65050a7bd507a9da16ac58c0644a5"
  },
  {
    "url": "blog/skepticism/2018/04/29/index.html",
    "revision": "875d7f81ad31ff1e0357a5b04960a718"
  },
  {
    "url": "blog/skepticism/2018/04/29/ken/index.html",
    "revision": "6216689bcaed13588a0ed5d82551bb8f"
  },
  {
    "url": "blog/skepticism/2018/04/29/v2k/index.html",
    "revision": "b577cca3b41e932834ba13042d47cee3"
  },
  {
    "url": "blog/skepticism/2018/04/index.html",
    "revision": "d9fcac6534b296c9409a7f5a602ba345"
  },
  {
    "url": "blog/skepticism/2018/05/13/astrology/index.html",
    "revision": "cb48fdb9b651babc6b3819833fbde866"
  },
  {
    "url": "blog/skepticism/2018/05/13/crystals/index.html",
    "revision": "bcbc2cde18e66b7035f34fdf44bcfff3"
  },
  {
    "url": "blog/skepticism/2018/05/13/dawkins/index.html",
    "revision": "8e92c8b9bbc67a175a46719d74a424e5"
  },
  {
    "url": "blog/skepticism/2018/05/13/index.html",
    "revision": "e4f00e9a1b650afcda8ca0c6e388abe3"
  },
  {
    "url": "blog/skepticism/2018/05/13/kangen/index.html",
    "revision": "600b1e42a2e16cc5f0663eafe6398644"
  },
  {
    "url": "blog/skepticism/2018/05/13/vitamins/index.html",
    "revision": "dec282ad133f6e2da3ed459a22114748"
  },
  {
    "url": "blog/skepticism/2018/05/27/flat/index.html",
    "revision": "0d9001e32fa8e0486a33675510de8e51"
  },
  {
    "url": "blog/skepticism/2018/05/27/index.html",
    "revision": "9858b634d9f0cd36d428cb7e2ebcf8dc"
  },
  {
    "url": "blog/skepticism/2018/05/27/kangen/index.html",
    "revision": "465596bcec1afef398367b548d5a660c"
  },
  {
    "url": "blog/skepticism/2018/05/27/ness/index.html",
    "revision": "dbb0f15ee8b9630b53340c7e1f6d757c"
  },
  {
    "url": "blog/skepticism/2018/05/27/oz/index.html",
    "revision": "2521ab34dc7aef91216d9aad8f65a523"
  },
  {
    "url": "blog/skepticism/2018/05/27/psychic/index.html",
    "revision": "36bd258e31197434b03ee9a9cb9ff06d"
  },
  {
    "url": "blog/skepticism/2018/05/index.html",
    "revision": "656a0472b291d8ca5400ebe7df2693fc"
  },
  {
    "url": "blog/skepticism/2018/06/10/astrology/index.html",
    "revision": "f2568a5ca728614b71a65e5fa1d11ecb"
  },
  {
    "url": "blog/skepticism/2018/06/10/index.html",
    "revision": "f60f46858caeb54ee8257c19361346aa"
  },
  {
    "url": "blog/skepticism/2018/06/10/nhs/index.html",
    "revision": "61dc421600a8db1c7709bbea2891456b"
  },
  {
    "url": "blog/skepticism/2018/06/10/shakti/index.html",
    "revision": "9e211b79d75b7d6fd0d079681c968e4b"
  },
  {
    "url": "blog/skepticism/2018/06/10/weetbix/index.html",
    "revision": "d121bd05f7b3bf7d858068da42f83076"
  },
  {
    "url": "blog/skepticism/2018/06/24/blasphemy/index.html",
    "revision": "af607d5105c621f39b035e2fce24cc23"
  },
  {
    "url": "blog/skepticism/2018/06/24/cannabis/index.html",
    "revision": "d3dd31a33199df786586e194136b5669"
  },
  {
    "url": "blog/skepticism/2018/06/24/hotdog/index.html",
    "revision": "d7b4d252631cca1c42ae5bf8f0c48a96"
  },
  {
    "url": "blog/skepticism/2018/06/24/index.html",
    "revision": "ac66037df0fc6e9788d8c6e34cdf1602"
  },
  {
    "url": "blog/skepticism/2018/06/24/led/index.html",
    "revision": "915f8504d25701da209d3de4513bbff5"
  },
  {
    "url": "blog/skepticism/2018/06/index.html",
    "revision": "9db9b741d71a2344e9a1c7c3fd0af83f"
  },
  {
    "url": "blog/skepticism/2018/07/08/bullet/index.html",
    "revision": "0d7ab90c7a67485a939006d2daab6171"
  },
  {
    "url": "blog/skepticism/2018/07/08/chiros/index.html",
    "revision": "5939cccec4c306f2195ffcee5a7e7177"
  },
  {
    "url": "blog/skepticism/2018/07/08/hiv/index.html",
    "revision": "f0ba999e2750d8c2274dfff0b1b570c3"
  },
  {
    "url": "blog/skepticism/2018/07/08/hrv/index.html",
    "revision": "bef717ac6038ae3a1f8d3758381ee1b1"
  },
  {
    "url": "blog/skepticism/2018/07/08/index.html",
    "revision": "df5879ab6b9e1b58febb82281f08ef95"
  },
  {
    "url": "blog/skepticism/2018/07/22/cancer/index.html",
    "revision": "b62b72bb4a2d0bb62738f9874f0e42cd"
  },
  {
    "url": "blog/skepticism/2018/07/22/index.html",
    "revision": "833118ca3d4e76a9363032c2894a7903"
  },
  {
    "url": "blog/skepticism/2018/07/22/resurrection/index.html",
    "revision": "ffc162830e5c3eb891e3c13761a6486d"
  },
  {
    "url": "blog/skepticism/2018/07/22/talc/index.html",
    "revision": "efaa34d7da92e0996827b4cbc8965a4e"
  },
  {
    "url": "blog/skepticism/2018/07/22/visas/index.html",
    "revision": "f3c86b509a1f491f544b37f8e9ef1e58"
  },
  {
    "url": "blog/skepticism/2018/07/index.html",
    "revision": "571c19a733dd2de3353838e55d90239c"
  },
  {
    "url": "blog/skepticism/2018/08/05/conf/index.html",
    "revision": "2b65effa550f0783608f3f5f11d4ce29"
  },
  {
    "url": "blog/skepticism/2018/08/05/index.html",
    "revision": "8512d6264f5c8bf60f7fae7e794f965c"
  },
  {
    "url": "blog/skepticism/2018/08/05/qanon/index.html",
    "revision": "1504cfe633a7331565dd4abb8bac8647"
  },
  {
    "url": "blog/skepticism/2018/08/19/index.html",
    "revision": "0dab4e858423d815fe6943070d661dce"
  },
  {
    "url": "blog/skepticism/2018/08/19/jw/index.html",
    "revision": "334f9aba8b4cf6df5a55ed3e9620b855"
  },
  {
    "url": "blog/skepticism/2018/08/index.html",
    "revision": "b9238060611d061ba4a2a42e7de6a373"
  },
  {
    "url": "blog/skepticism/2018/09/02/allergy/index.html",
    "revision": "a5e991f8906c19913e97908c224ec7bc"
  },
  {
    "url": "blog/skepticism/2018/09/02/catholic/index.html",
    "revision": "1864f35db29a04aa17db8029af1a3130"
  },
  {
    "url": "blog/skepticism/2018/09/02/index.html",
    "revision": "2967bc8c47dcdf37b8d7c930afee933b"
  },
  {
    "url": "blog/skepticism/2018/09/02/jw/index.html",
    "revision": "16325fcfbc68cf612faf8face43283ec"
  },
  {
    "url": "blog/skepticism/2018/09/02/sen/index.html",
    "revision": "d91b1a970e87f244632f07d6968e8491"
  },
  {
    "url": "blog/skepticism/2018/09/16/1080/index.html",
    "revision": "b4d5504e67c1901714970af283c9ea40"
  },
  {
    "url": "blog/skepticism/2018/09/16/church/index.html",
    "revision": "122198ff9c49b2734470a4c314b1eb58"
  },
  {
    "url": "blog/skepticism/2018/09/16/index.html",
    "revision": "e0646a25935381fee58b0c7654abdd07"
  },
  {
    "url": "blog/skepticism/2018/09/16/jones/index.html",
    "revision": "ad98c47fca3a74f7129b1d68740d7f68"
  },
  {
    "url": "blog/skepticism/2018/09/16/scammers/index.html",
    "revision": "cc798b64a6656e830976280f121a5797"
  },
  {
    "url": "blog/skepticism/2018/09/30/index.html",
    "revision": "a645d35509d3768f01c3352d2f06213e"
  },
  {
    "url": "blog/skepticism/2018/09/30/jw/index.html",
    "revision": "e1750db07fc8be994023e4f946561741"
  },
  {
    "url": "blog/skepticism/2018/09/30/oto/index.html",
    "revision": "e479b90a24a991836ed7c4f440ec331b"
  },
  {
    "url": "blog/skepticism/2018/09/30/who/index.html",
    "revision": "ec759ab35a98a9709751436d3260f223"
  },
  {
    "url": "blog/skepticism/2018/09/index.html",
    "revision": "caa17e299f21c22a9040ede021f27910"
  },
  {
    "url": "blog/skepticism/2018/10/14/hacked/index.html",
    "revision": "4492a3a5713b273c2c6da9b842a5b333"
  },
  {
    "url": "blog/skepticism/2018/10/14/index.html",
    "revision": "9fc70ce795c3bb389bf5fdc614e37469"
  },
  {
    "url": "blog/skepticism/2018/10/14/kangen/index.html",
    "revision": "bdf6bccb5dbbeba0c995205f19ccf487"
  },
  {
    "url": "blog/skepticism/2018/10/14/pakistan/index.html",
    "revision": "2cfad37ef5897ca3a8524c5f2730aea2"
  },
  {
    "url": "blog/skepticism/2018/10/14/sarah/index.html",
    "revision": "b9a54935ea2baa1b01c87bdfcdd358ea"
  },
  {
    "url": "blog/skepticism/2018/10/28/blasphemy/index.html",
    "revision": "5092cbed99d189caf994946429e315af"
  },
  {
    "url": "blog/skepticism/2018/10/28/hrv/index.html",
    "revision": "bf24ef3331f78472b668fbf5ab375dfc"
  },
  {
    "url": "blog/skepticism/2018/10/28/index.html",
    "revision": "ea4057184ecfc7135613019b0aecbebf"
  },
  {
    "url": "blog/skepticism/2018/10/28/jesus/index.html",
    "revision": "b55f1f96e813eb5527719f21b24403ba"
  },
  {
    "url": "blog/skepticism/2018/10/28/natural/index.html",
    "revision": "f593effae801002da524a978c3c40248"
  },
  {
    "url": "blog/skepticism/2018/10/index.html",
    "revision": "01aa33ac77556f32732ac637d168e882"
  },
  {
    "url": "blog/skepticism/2018/11/04/bibi/index.html",
    "revision": "241595a6c381f9a9dea8e0c0fa3706ee"
  },
  {
    "url": "blog/skepticism/2018/11/04/index.html",
    "revision": "462e8a659fee09b202b8df0fea9b97f5"
  },
  {
    "url": "blog/skepticism/2018/11/04/jesus/index.html",
    "revision": "5dff4ebed1367ae2a4f92427e82a595f"
  },
  {
    "url": "blog/skepticism/2018/11/04/obdii/index.html",
    "revision": "3b1a2f5f798e0633d4bd11e93844282a"
  },
  {
    "url": "blog/skepticism/2018/11/04/sleepdrops/index.html",
    "revision": "3b55b7e841b877cb6d05900b9854d383"
  },
  {
    "url": "blog/skepticism/2018/11/index.html",
    "revision": "e3053a1970f3fc2601b2142c2a8ac6ad"
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
    "revision": "1397a35465ac3b82576ea3839395445d"
  },
  {
    "url": "blog/skepticism/2018/12/02/ri/index.html",
    "revision": "6d82b84916bbca77b05fc3ac62d46475"
  },
  {
    "url": "blog/skepticism/2018/12/16/blasphemy/index.html",
    "revision": "202e47f9b9714a9da7537394ecc8552a"
  },
  {
    "url": "blog/skepticism/2018/12/16/index.html",
    "revision": "ee02ea5bccc12728c2bb0a73797ba357"
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
    "revision": "985c98533585b139956d77cf6bc146f9"
  },
  {
    "url": "blog/skepticism/2018/index.html",
    "revision": "94b12efcbe18dbc39d4e9c5d9e0255c0"
  },
  {
    "url": "blog/skepticism/2020/08/18/index.html",
    "revision": "95b0bf1886b1be6aaf90287641c1d634"
  },
  {
    "url": "blog/skepticism/2020/08/18/myths/index.html",
    "revision": "ecb723024b6efa9d4f2a20134ececdfc"
  },
  {
    "url": "blog/skepticism/2020/08/index.html",
    "revision": "ebe6c89e53b988dff8752d9047a9b539"
  },
  {
    "url": "blog/skepticism/2020/index.html",
    "revision": "d87feeac8068462f05cf83de0f9c0365"
  },
  {
    "url": "blog/skepticism/index.html",
    "revision": "a127920f75398130763bf6f97903ede0"
  },
  {
    "url": "blog/tag/index.html",
    "revision": "e634be813b1f6e43496e5df378b51161"
  },
  {
    "url": "contact/index.html",
    "revision": "4022c39c8713cb170d5ea28a70aec268"
  },
  {
    "url": "cv/cover/index.html",
    "revision": "47574a693af7c349527b255170f42137"
  },
  {
    "url": "cv/full.html",
    "revision": "a98b490905664e1ac38cd42cb1281e09"
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
    "revision": "4854538cd6201e1a9a8e597f95e33d2c"
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
    "revision": "d21a6a04468ea03277a50ad5f277d9c5"
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
    "revision": "60785c1276f4e7ab075fdab14b82c90f"
  },
  {
    "url": "status/index.html",
    "revision": "082097c5b260cbeb3b653f1cf1662d3c"
  },
  {
    "url": "status/steam/index.html",
    "revision": "2ef400b59baf4c67c98091f91bf1b4cf"
  },
  {
    "url": "status/twitter/index.html",
    "revision": "447f90dad64cb8d0410f5e3025877bf4"
  },
  {
    "url": "status/wikipedia/index.html",
    "revision": "904b71f6a4fa06b8215148d2b9487dbe"
  },
  {
    "url": "test/index.html",
    "revision": "42641d290e3c12d2ebb2ae1da154cce9"
  },
  {
    "url": "test/webcam/index.html",
    "revision": "fc53dd2248bfafca5118b53e2ef04b9c"
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
