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
    "revision": "7884aa12461cca0e53d472ba9403323d"
  },
  {
    "url": "assets/css/0.styles.css",
    "revision": "f0c13dd43afed44d9ccb8209dd8e86ca"
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
    "revision": "7173763637612a7678fcebdf62cfbfc3"
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
    "revision": "44602196a3ec5f1b1481092a1df84ede"
  },
  {
    "url": "assets/js/121.js",
    "revision": "003c5852af43bfdd1f408b128d137888"
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
    "revision": "887240f2bd6059962eb087c493171179"
  },
  {
    "url": "assets/js/128.js",
    "revision": "5a52b8c93762823083be9bfe5c19b44c"
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
    "revision": "4115eb6fd30fd67d317890fc667707cd"
  },
  {
    "url": "assets/js/133.js",
    "revision": "7035029511103ff28500c102e4faa1f0"
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
    "revision": "bf6969e2ec2ef22c91c0f0513239ed71"
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
    "revision": "7b2c3d8c1e481dd94cb61e007f1b6be4"
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
    "revision": "d73995c81f33aa40b5fb6e0f728368d8"
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
    "revision": "c11ccd32dbff5184b96b3311674b5a00"
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
    "revision": "6647809a0ef24cc3a5d2d92b8efa229d"
  },
  {
    "url": "assets/js/174.js",
    "revision": "5cacd82a7dc4aafded1368a8a36aa0f3"
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
    "revision": "ed550c30296e3fe85766aa5d4dcb0183"
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
    "revision": "32388b647dffb7f2a3242f2d890a90a2"
  },
  {
    "url": "assets/js/19.js",
    "revision": "dc52755a04cc0b10685fc785659ff5af"
  },
  {
    "url": "assets/js/190.js",
    "revision": "5b1f78ca0b0cceb2c121df0273c53fad"
  },
  {
    "url": "assets/js/191.js",
    "revision": "e1f08a058d3a053f4b97fc2c0431ba57"
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
    "revision": "8efadd0626ceb2b8df3b4c19cfe99e2f"
  },
  {
    "url": "assets/js/203.js",
    "revision": "715da69f95a665d805743247a6249d8f"
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
    "revision": "cd8fd068649337e553d418ab503cf46c"
  },
  {
    "url": "assets/js/214.js",
    "revision": "389d3880b4a1c9612662cdc28bd18fe3"
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
    "revision": "fb758468b482e98b475c636f986f318f"
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
    "revision": "60c5edbff0b6c6d2c06beefafe4c7caf"
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
    "revision": "914a35787279cfb6b82c0db8ca59651d"
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
    "revision": "636e813d7df5951c3f402adea3a820a4"
  },
  {
    "url": "assets/js/317.js",
    "revision": "224862952842c7467378bed807162183"
  },
  {
    "url": "assets/js/318.js",
    "revision": "8523b32d48c43bf6f8447b1fd55814b8"
  },
  {
    "url": "assets/js/319.js",
    "revision": "305d9b84df7671bad23dfac735712a60"
  },
  {
    "url": "assets/js/32.js",
    "revision": "a3e5ed40655ee2b0a69d92b03c31464b"
  },
  {
    "url": "assets/js/320.js",
    "revision": "bfd6f321fb2bd77d4658ec8f078ec637"
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
    "revision": "bcb2d0fff44794b739702a20ddbfd9aa"
  },
  {
    "url": "assets/js/328.js",
    "revision": "2d6343c81cc16fd8c0d9ca09f665064c"
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
    "revision": "a843f3369699ffc21d5435dd828031c7"
  },
  {
    "url": "assets/js/334.js",
    "revision": "3021353612a1a70e91e90a76dbc19960"
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
    "revision": "76dc3168b03220535e852b39e062a35f"
  },
  {
    "url": "assets/js/349.js",
    "revision": "78df9cd609649422bd554eb910e32052"
  },
  {
    "url": "assets/js/35.js",
    "revision": "77a8b704a36af5bcca5d4cfd87600296"
  },
  {
    "url": "assets/js/350.js",
    "revision": "63ec44f6bfc60b074b6e9322378d4b10"
  },
  {
    "url": "assets/js/351.js",
    "revision": "6c5b3fda98fa7be98273015e70671b1a"
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
    "revision": "8c15998f5df752cb8a402baf13bce263"
  },
  {
    "url": "assets/js/394.js",
    "revision": "d6ec0f4a6502a3b89f50b23daf530e37"
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
    "revision": "8966526fed2d03f63b6aed3374496646"
  },
  {
    "url": "assets/js/399.js",
    "revision": "c04842ca01ce621e742154a4df966e6d"
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
    "revision": "05063e7c97a58a1cfebe69d5f1a30bed"
  },
  {
    "url": "assets/js/405.js",
    "revision": "451540e37826db6ad5a560ebfa2fccf4"
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
    "revision": "535ef10d3e23409671c266a11e049543"
  },
  {
    "url": "assets/js/420.js",
    "revision": "fdf619ca9e65531b99f77acffceac105"
  },
  {
    "url": "assets/js/421.js",
    "revision": "63266e4409ddbcc12d94ee8feed1a00e"
  },
  {
    "url": "assets/js/422.js",
    "revision": "0411c8c36c20b82b64653205b4323934"
  },
  {
    "url": "assets/js/423.js",
    "revision": "e23039b1a6909ebeac1363362d894ca2"
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
    "revision": "b65ae3f37d5d8b3255018e545cf1f072"
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
    "revision": "b872907a68f66efef503dfa218c4cb6e"
  },
  {
    "url": "assets/js/442.js",
    "revision": "2a115b0bcdd410e38a4f03786d060494"
  },
  {
    "url": "assets/js/443.js",
    "revision": "107637fdb839ba302b58b64d38b19696"
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
    "revision": "db76e54e4971008a03a5b4826a6c3cd6"
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
    "revision": "215ff44229cb6464cfdf8121850c0e77"
  },
  {
    "url": "assets/js/458.js",
    "revision": "e162445e07fe9fb71edd07ff76b51a75"
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
    "revision": "0a21a1aceaf8040ed441f4fb65e41144"
  },
  {
    "url": "assets/js/475.js",
    "revision": "df61271a1bbde35fb89becf650ed2bce"
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
    "revision": "0869b8a30b4b63c72ccdb6f47ac475c9"
  },
  {
    "url": "assets/js/49.js",
    "revision": "ac5c2c4336f4733df1584ec4e576993a"
  },
  {
    "url": "assets/js/490.js",
    "revision": "7bad3757ac52e76abfb49916cc450446"
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
    "revision": "9d000f74986588b6449868978b6e83b0"
  },
  {
    "url": "assets/js/50.js",
    "revision": "629095d2894761450350a0b26dd2b643"
  },
  {
    "url": "assets/js/500.js",
    "revision": "b710f775c9cd77d3aba40f53113d2d60"
  },
  {
    "url": "assets/js/501.js",
    "revision": "5dbd7d1e7c06b85b90254b62474db37e"
  },
  {
    "url": "assets/js/502.js",
    "revision": "96d9bf9a856c9ffd42ff6f85fdb6a48c"
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
    "revision": "b366e39278b68c341aed5d3e2178b4b3"
  },
  {
    "url": "assets/js/527.js",
    "revision": "c6058f9a7b53be2cb1a235f223652657"
  },
  {
    "url": "assets/js/528.js",
    "revision": "add738db62f1aef849c22869dd4c4fd9"
  },
  {
    "url": "assets/js/529.js",
    "revision": "b608b3eb3be7f583bc467ed266cc2d96"
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
    "revision": "2c8c9336ce894626cba7b7481ecc07f2"
  },
  {
    "url": "assets/js/554.js",
    "revision": "be4ecc985cb18b1f8c26480bc9c96c43"
  },
  {
    "url": "assets/js/555.js",
    "revision": "7b11ce26ea4a1755a319f4d75c43b70e"
  },
  {
    "url": "assets/js/556.js",
    "revision": "c200cc9063244d2fbcb830f3b835420d"
  },
  {
    "url": "assets/js/557.js",
    "revision": "230c52dc869b8bcc8746deb8ca48961e"
  },
  {
    "url": "assets/js/558.js",
    "revision": "efbc339d176d65ccdae2acf7d8c6a3c5"
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
    "revision": "9d95545da66a359b85e3e36a1a51c3f3"
  },
  {
    "url": "assets/js/561.js",
    "revision": "9f99b410bc1ffcbb3e6b2fecc16c8575"
  },
  {
    "url": "assets/js/562.js",
    "revision": "d58964cfd2ab3926c1af0570f5a02fb0"
  },
  {
    "url": "assets/js/563.js",
    "revision": "42309ff1f05cc9c112d6be54a43f8c55"
  },
  {
    "url": "assets/js/564.js",
    "revision": "63099770257f587c27911336441951b4"
  },
  {
    "url": "assets/js/565.js",
    "revision": "907a3202a7445b877cb5abf4bad8366f"
  },
  {
    "url": "assets/js/566.js",
    "revision": "7634801975d3bd41aede5aa495874199"
  },
  {
    "url": "assets/js/567.js",
    "revision": "a9b6ac1923561c015f460e86eafe11cf"
  },
  {
    "url": "assets/js/568.js",
    "revision": "3f6f062080f0b111d20b0293e9fe0ab7"
  },
  {
    "url": "assets/js/569.js",
    "revision": "38f399d6c1b650d95b9771bde7575919"
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
    "revision": "83e11dca7daa72028989f244ac523df4"
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
    "revision": "4d42636f78545882c2f13f3cf31f327b"
  },
  {
    "url": "assets/js/587.js",
    "revision": "fafc1524372d3dbbcbe38d8dc1784fb3"
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
    "revision": "ecce80881d654f698a650b392138d7cd"
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
    "revision": "f0bfce15eb466870aa7782a4014b2759"
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
    "revision": "043a9d4c5d4542cec28a7f6e464e7d83"
  },
  {
    "url": "assets/js/84.js",
    "revision": "6bd3605282122963f24b9de47ff120b8"
  },
  {
    "url": "assets/js/85.js",
    "revision": "b57103cfecf4abfcf37040e06da65e7f"
  },
  {
    "url": "assets/js/86.js",
    "revision": "d05645ad45f5626c497382e2a858bf38"
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
    "revision": "53097d7e6f3d36908e5b6dad1ff7a692"
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
    "revision": "3e220fbae22d984ec3b5edba15e79c2a"
  },
  {
    "url": "assets/js/app.js",
    "revision": "65f4f4fb2fd3aea6c15eadb92eb61019"
  },
  {
    "url": "assets/js/styles.js",
    "revision": "22f22b49cc901aa95826401f7ce0930c"
  },
  {
    "url": "blog/category/index.html",
    "revision": "7eae9a3178b6cd29ab01612f3846ed31"
  },
  {
    "url": "blog/code/artists/index.html",
    "revision": "2818a54f948de5e6ea31ff643d646fd8"
  },
  {
    "url": "blog/code/asa.sbh.nz/index.html",
    "revision": "ab34ec2486f08a0beb68bf6c10650f3f"
  },
  {
    "url": "blog/code/decrypt/index.html",
    "revision": "c4ed12a6f368fdd3900b933b74669efa"
  },
  {
    "url": "blog/code/divider/index.html",
    "revision": "eed2e1253d6ec26d7ae8f11432520768"
  },
  {
    "url": "blog/code/first/index.html",
    "revision": "c800d0ffb69d634e9101d3367cf41db5"
  },
  {
    "url": "blog/code/fishbarrel/index.html",
    "revision": "628c2015a4a6705d6f476af2a728763b"
  },
  {
    "url": "blog/code/graphs/index.html",
    "revision": "3898cf47334a4d00727c19022b2cda5f"
  },
  {
    "url": "blog/code/indent/index.html",
    "revision": "396587c249fc1b588eefb03b5460db96"
  },
  {
    "url": "blog/code/index.html",
    "revision": "4d296220e7ba7250a7baec360c09ec76"
  },
  {
    "url": "blog/code/ingoa.nz/index.html",
    "revision": "aacbfa205a52f206dfce27057ab2dcdb"
  },
  {
    "url": "blog/code/nzondemand/index.html",
    "revision": "0680b54d4782ff7a9b5e30d7bfe269a3"
  },
  {
    "url": "blog/code/picard/index.html",
    "revision": "3853975ddfdd658f019fa3fc013d3464"
  },
  {
    "url": "blog/code/qr/index.html",
    "revision": "9a16fd183a5244bd4cf9173c551c09fb"
  },
  {
    "url": "blog/code/readable/index.html",
    "revision": "fdec46096ada92afc7c03cf37552209d"
  },
  {
    "url": "blog/code/tone/index.html",
    "revision": "a6d7ccdfd2e5a5101a37bce456c77642"
  },
  {
    "url": "blog/code/war/index.html",
    "revision": "b25bf089164f834a33415e27f40f1835"
  },
  {
    "url": "blog/code/website/index.html",
    "revision": "5aa3cf623997f31bd9f8d1b648f95ebb"
  },
  {
    "url": "blog/code/website/route/index.html",
    "revision": "370892291544ef424422c780ec41f38e"
  },
  {
    "url": "blog/code/website/site/index.html",
    "revision": "46f2d8200ae013b47824a800ae12352b"
  },
  {
    "url": "blog/code/xmltv.co.nz/index.html",
    "revision": "f7b31ecf63d7deb587f4d4d699a22cfe"
  },
  {
    "url": "blog/howto/index.html",
    "revision": "bf63f351f845edf5881e7acbe4ffdba3"
  },
  {
    "url": "blog/howto/intel865/index.html",
    "revision": "d08152a7b34956bf7f523673dbbfae33"
  },
  {
    "url": "blog/howto/ios/index.html",
    "revision": "5f97bc75458277317887c5d74640b3f6"
  },
  {
    "url": "blog/howto/nexentastor/index.html",
    "revision": "ececd29e9bcfa60f0eb2e7019428ed49"
  },
  {
    "url": "blog/howto/pcloadletter/index.html",
    "revision": "e4aa79f9e276dde49c1a26af0d0ad827"
  },
  {
    "url": "blog/howto/raid5/index.html",
    "revision": "8a0d08ffa6cd6be5ee90f89365410d71"
  },
  {
    "url": "blog/index.html",
    "revision": "0dc096a3d48ae80232d2b76cbe14608a"
  },
  {
    "url": "blog/life/anotheryear/index.html",
    "revision": "471a45c3a169cad5cfd48bfed5eaa02f"
  },
  {
    "url": "blog/life/arcade/index.html",
    "revision": "1b9bc180cd8730e7b51a3def69b0e896"
  },
  {
    "url": "blog/life/birthday/index.html",
    "revision": "80ca363830019cd48859f4e9063364d8"
  },
  {
    "url": "blog/life/blasphemy/index.html",
    "revision": "b95e7c7da030a00f879e583d81580415"
  },
  {
    "url": "blog/life/blogger/index.html",
    "revision": "a390c0fff08908b56a722e28b5a60224"
  },
  {
    "url": "blog/life/blurry/index.html",
    "revision": "8a643d849d69d32b4eb2417432f0600b"
  },
  {
    "url": "blog/life/busyday/index.html",
    "revision": "d4b34cd005df8ba6bccd94a9b894ee5b"
  },
  {
    "url": "blog/life/domain/index.html",
    "revision": "389150f4911f7d9de43d09f7f8aeb04e"
  },
  {
    "url": "blog/life/exams/index.html",
    "revision": "8441e4e59f2c8b5ad2613df4cd32bc73"
  },
  {
    "url": "blog/life/food/index.html",
    "revision": "f665fd0549b4ec1911d188fe67cc31e5"
  },
  {
    "url": "blog/life/glenview/index.html",
    "revision": "19754222388c41e503114f1a42301b2f"
  },
  {
    "url": "blog/life/headlines/index.html",
    "revision": "ef8049905ecfb899b8527116689e27db"
  },
  {
    "url": "blog/life/index.html",
    "revision": "58ab5e4b91a904a632b315c1ba5eec1c"
  },
  {
    "url": "blog/life/jws/index.html",
    "revision": "6947df3af1d495b78ba96bc0561492ae"
  },
  {
    "url": "blog/life/keyboard/index.html",
    "revision": "f625e38a5b80c8c06a6aec0e88d59dd2"
  },
  {
    "url": "blog/life/lpi201/index.html",
    "revision": "bbf56196c1abfc51ac757aae79550289"
  },
  {
    "url": "blog/life/mashup/index.html",
    "revision": "38ea8e7cdb46ce281c8fbff2b0ccb9e5"
  },
  {
    "url": "blog/life/motorweb/index.html",
    "revision": "ffc9ffebec689cc76b3f65753ccf0304"
  },
  {
    "url": "blog/life/nxe/index.html",
    "revision": "88898ba1cfab2198d1d1e7170bcae86f"
  },
  {
    "url": "blog/life/plates/index.html",
    "revision": "bb0be0110578d6fb666397065b94a464"
  },
  {
    "url": "blog/life/queenstown/index.html",
    "revision": "f1c70f59491af2a4851360a11e661810"
  },
  {
    "url": "blog/life/racism/index.html",
    "revision": "8e23a27b9e2350355e0127c5553eeff2"
  },
  {
    "url": "blog/life/roads/index.html",
    "revision": "44b9c64090fe84958564e1dcd9a5664d"
  },
  {
    "url": "blog/life/roots/index.html",
    "revision": "47b51a68549df213566922d2ed1a8921"
  },
  {
    "url": "blog/life/scare/index.html",
    "revision": "4e973500fca4059a18d4965de8d02a93"
  },
  {
    "url": "blog/life/scary/index.html",
    "revision": "ff81f302bcf7e8e7e2533760698ba3c6"
  },
  {
    "url": "blog/life/seti/index.html",
    "revision": "0ffd0404a9a1d8dad406228f674040fd"
  },
  {
    "url": "blog/life/skeptical/index.html",
    "revision": "c2fd54a99966790d6540f50f02d95b52"
  },
  {
    "url": "blog/life/skepticzone/index.html",
    "revision": "a02b93b2286eae12723e202bde62a95f"
  },
  {
    "url": "blog/life/spam/index.html",
    "revision": "425a889cc3b45c3143c7f24af97c46d4"
  },
  {
    "url": "blog/life/ticking/index.html",
    "revision": "a62359cde99fbf61088bcda4c7c5c952"
  },
  {
    "url": "blog/life/trademe/index.html",
    "revision": "8fdad3ae40991a5080a15aea53b69f29"
  },
  {
    "url": "blog/life/unforeseen/index.html",
    "revision": "089a76457223c284e9c895a2baead1b7"
  },
  {
    "url": "blog/life/wobbly/index.html",
    "revision": "eaceae5e4665afaf4eb3c9f1a974bebe"
  },
  {
    "url": "blog/projects/ahs/index.html",
    "revision": "72a1a70c78ab7da3264b353735bcb4fc"
  },
  {
    "url": "blog/projects/airbag/index.html",
    "revision": "f1b1bda0cb43520796aa7a6e4fab7871"
  },
  {
    "url": "blog/projects/ambilight/index.html",
    "revision": "a2fd87c036b65a2f598e027a61a19975"
  },
  {
    "url": "blog/projects/automation/index.html",
    "revision": "321da4b613d2ce39f1866323fe2b3d9a"
  },
  {
    "url": "blog/projects/eyes/index.html",
    "revision": "b0a4bdf4cac089e1b750c2dd6bb7a3a3"
  },
  {
    "url": "blog/projects/glitch/index.html",
    "revision": "825a3162a85855058db3b532f6d3e200"
  },
  {
    "url": "blog/projects/hotel/index.html",
    "revision": "703e242dec4228848ffd85fe0b7efb12"
  },
  {
    "url": "blog/projects/index.html",
    "revision": "0d431acb2d01019f3057089694316792"
  },
  {
    "url": "blog/projects/it100/index.html",
    "revision": "1d437c0139c7842359e1637a7fc95dc5"
  },
  {
    "url": "blog/projects/microscope/index.html",
    "revision": "567d457e718921483faec75c88961073"
  },
  {
    "url": "blog/projects/mirror/index.html",
    "revision": "e804c9f88e03b84ac8c476dcc1d3654c"
  },
  {
    "url": "blog/projects/picture/index.html",
    "revision": "53840d781474776b4b353c6ad873f106"
  },
  {
    "url": "blog/projects/pizza/index.html",
    "revision": "e0de0f034e689192c90f3faa329efac7"
  },
  {
    "url": "blog/projects/podcast/index.html",
    "revision": "1727869d65534fb79a7d7f7900800f69"
  },
  {
    "url": "blog/projects/reflow/index.html",
    "revision": "12aafdb1b5692623a217fed720d20887"
  },
  {
    "url": "blog/projects/sandbox/index.html",
    "revision": "f869aef0104f03fa6d9360bd6ac09d31"
  },
  {
    "url": "blog/projects/screens/index.html",
    "revision": "7844c2337d84b52df577a76791db42dc"
  },
  {
    "url": "blog/projects/sky/index.html",
    "revision": "334378eca8fb6659163d5b3e7c35de33"
  },
  {
    "url": "blog/projects/starwars/index.html",
    "revision": "0bd785b43e582db80451e2f5937fcd5d"
  },
  {
    "url": "blog/projects/xbox/index.html",
    "revision": "2d4d859fd749b4af0e5db383315310be"
  },
  {
    "url": "blog/random/addresses/index.html",
    "revision": "c09321260c3872051623093b91f4d54b"
  },
  {
    "url": "blog/random/alphabet/index.html",
    "revision": "c56c434c27e3b41b5c2f2237d3e80745"
  },
  {
    "url": "blog/random/astrology/index.html",
    "revision": "130544d0666efa2b72063965bac8df3d"
  },
  {
    "url": "blog/random/chicken/index.html",
    "revision": "86d066431c4685f4065efff757ce6e8d"
  },
  {
    "url": "blog/random/dns/index.html",
    "revision": "d772f70ed975b4666e9861b74f77051b"
  },
  {
    "url": "blog/random/evp/index.html",
    "revision": "4faf924a332ae17f7efd5c9271e134c4"
  },
  {
    "url": "blog/random/flip/index.html",
    "revision": "7cff9852ca6fdbdb69acb442e8ebd6b0"
  },
  {
    "url": "blog/random/honeychurch/index.html",
    "revision": "34ff0b9ed6e7a27200048737994349dd"
  },
  {
    "url": "blog/random/index.html",
    "revision": "311eb8c2991f71a5c2f9db980f350040"
  },
  {
    "url": "blog/random/lottery/index.html",
    "revision": "d39e6c979f4e501d2864f41190d4354c"
  },
  {
    "url": "blog/random/music/index.html",
    "revision": "b49fb8e8d32643dd83aeb698b6dc8a75"
  },
  {
    "url": "blog/random/octal/index.html",
    "revision": "676ce52dd1515d90898c85add425ecfd"
  },
  {
    "url": "blog/random/os/index.html",
    "revision": "ed7847c425b9e53db5e57a70b591ba91"
  },
  {
    "url": "blog/random/propellers/index.html",
    "revision": "1a2f68c3435b3274cb48b5873ccdbd5e"
  },
  {
    "url": "blog/random/robux/index.html",
    "revision": "c571b711c56e80f9b39f2328807415ea"
  },
  {
    "url": "blog/random/super/index.html",
    "revision": "531d9b3200057865fe6b7f32aadc1108"
  },
  {
    "url": "blog/random/times/index.html",
    "revision": "41ab9e51ea34ac5e6972a3f4205e740b"
  },
  {
    "url": "blog/random/travel/index.html",
    "revision": "747646c3b3f6fd60085e99614217d7aa"
  },
  {
    "url": "blog/random/wilhelm/index.html",
    "revision": "07f7f8c5db683822b8d85aa33d0225bf"
  },
  {
    "url": "blog/random/year/index.html",
    "revision": "c3e09267cab0a8978f44ee2905971a4e"
  },
  {
    "url": "blog/skepticism/2015/08/16/asa/index.html",
    "revision": "e97954a85a71f005749592739628a894"
  },
  {
    "url": "blog/skepticism/2015/08/16/awards/index.html",
    "revision": "a073aeb19c4d74fb19de486547b54fa8"
  },
  {
    "url": "blog/skepticism/2015/08/16/bravo/index.html",
    "revision": "4c7533194c426830263952edd7bf2bcd"
  },
  {
    "url": "blog/skepticism/2015/08/16/index.html",
    "revision": "160bb15c22a21ed8fdb0951877a25e8e"
  },
  {
    "url": "blog/skepticism/2015/08/16/jim/index.html",
    "revision": "b1cdec5800eeeca5bf58c8fe666b450d"
  },
  {
    "url": "blog/skepticism/2015/08/16/naholo/index.html",
    "revision": "ad695d5a22fbb1d11f4b31ac0c5fafd2"
  },
  {
    "url": "blog/skepticism/2015/08/16/resene/index.html",
    "revision": "510c8017aade1796e0c83385f8ea48c2"
  },
  {
    "url": "blog/skepticism/2015/08/index.html",
    "revision": "907f1d1368ea5cc6a525316ea178d042"
  },
  {
    "url": "blog/skepticism/2015/09/20/gop/index.html",
    "revision": "0c2ddc2de606dffafc545006dae0fcdf"
  },
  {
    "url": "blog/skepticism/2015/09/20/ignobel/index.html",
    "revision": "492fbf75d59bd43cc4047895894795b2"
  },
  {
    "url": "blog/skepticism/2015/09/20/index.html",
    "revision": "0f2fa8041c812d426cc5ef39ada566e6"
  },
  {
    "url": "blog/skepticism/2015/09/20/supplements/index.html",
    "revision": "518eb140f578fbde1ae2aeb2cfd39e0b"
  },
  {
    "url": "blog/skepticism/2015/09/27/ayahuasca/index.html",
    "revision": "21dfb5ec3120a5ea97f3f0c3d2eb222c"
  },
  {
    "url": "blog/skepticism/2015/09/27/drought/index.html",
    "revision": "f510963029495494dbb7100934640b5b"
  },
  {
    "url": "blog/skepticism/2015/09/27/index.html",
    "revision": "b85a66c9422864733b40dee2df4a5ef5"
  },
  {
    "url": "blog/skepticism/2015/09/27/lama/index.html",
    "revision": "2d662e49dec82d6767364716bf4d0f4f"
  },
  {
    "url": "blog/skepticism/2015/09/27/moon/index.html",
    "revision": "939b6b697c84b92665d585408380521d"
  },
  {
    "url": "blog/skepticism/2015/09/27/scan/index.html",
    "revision": "87f4db66d8051fac8826b4fd4e0127fa"
  },
  {
    "url": "blog/skepticism/2015/09/index.html",
    "revision": "76316809e9c336f41ce42c117387dc40"
  },
  {
    "url": "blog/skepticism/2015/10/04/ghost/index.html",
    "revision": "725cc1a87e82e0574773db9df91aa511"
  },
  {
    "url": "blog/skepticism/2015/10/04/haka/index.html",
    "revision": "cf340853d9239556b4696f2348a5daf8"
  },
  {
    "url": "blog/skepticism/2015/10/04/index.html",
    "revision": "9461a113c48ebdd008d12bab86a18fc7"
  },
  {
    "url": "blog/skepticism/2015/10/04/mars/index.html",
    "revision": "9074349a663ca9f663c9d298d61b8cae"
  },
  {
    "url": "blog/skepticism/2015/10/04/pharmacy/index.html",
    "revision": "8cb229b9c7709a0c525129ad25505a4d"
  },
  {
    "url": "blog/skepticism/2015/10/04/prostate/index.html",
    "revision": "d518dd80636346ea64edd64347ccb442"
  },
  {
    "url": "blog/skepticism/2015/10/11/armageddon/index.html",
    "revision": "90f4c96cf21165ec63cee194f9b07c45"
  },
  {
    "url": "blog/skepticism/2015/10/11/climate/index.html",
    "revision": "62ccb57ac3963e01826aba6402f7ad48"
  },
  {
    "url": "blog/skepticism/2015/10/11/ghost/index.html",
    "revision": "f0574e1d30786a3276749884602e84b5"
  },
  {
    "url": "blog/skepticism/2015/10/11/index.html",
    "revision": "44d70e38cb928de71e8b13fadf8bd97c"
  },
  {
    "url": "blog/skepticism/2015/10/11/magnesleep/index.html",
    "revision": "1baeb5efb4b91c1507d1cc57a515bb8c"
  },
  {
    "url": "blog/skepticism/2015/10/11/nhs/index.html",
    "revision": "51f4e3f80ef8305276e52892c5ecaee7"
  },
  {
    "url": "blog/skepticism/2015/10/11/prophet/index.html",
    "revision": "b759ea3ff98898729923b9ff58770f55"
  },
  {
    "url": "blog/skepticism/2015/10/index.html",
    "revision": "52e57c2930c13cb21d7b113595d240a2"
  },
  {
    "url": "blog/skepticism/2015/11/15/end/index.html",
    "revision": "6d02ef29e7b95d915708940a7e69b60d"
  },
  {
    "url": "blog/skepticism/2015/11/15/index.html",
    "revision": "4699cefceecc08dc36bf59a1f32bc9c0"
  },
  {
    "url": "blog/skepticism/2015/11/index.html",
    "revision": "d0b4cd2041dfc2c097b261c210a9ad98"
  },
  {
    "url": "blog/skepticism/2015/12/13/astrology/index.html",
    "revision": "5fcb946a622a02791f08fc9b31a6087e"
  },
  {
    "url": "blog/skepticism/2015/12/13/cancer/index.html",
    "revision": "8435dcc2ade451c1bd8aa70525c1065d"
  },
  {
    "url": "blog/skepticism/2015/12/13/chickenpox/index.html",
    "revision": "2b590c8cc4b98980139c03feadf97c63"
  },
  {
    "url": "blog/skepticism/2015/12/13/index.html",
    "revision": "6b1b42c688ebcc48b768d75a425344e8"
  },
  {
    "url": "blog/skepticism/2015/12/13/osteopath/index.html",
    "revision": "2bb45f35966fd62ba18141767d35d70d"
  },
  {
    "url": "blog/skepticism/2015/12/13/priest/index.html",
    "revision": "91536991f82407799deff8a31ebaa9c6"
  },
  {
    "url": "blog/skepticism/2015/12/13/psychic/index.html",
    "revision": "5f0c507c5b57111780f7b1e430a42c4f"
  },
  {
    "url": "blog/skepticism/2015/12/13/vaccines/index.html",
    "revision": "abc67a43f911331bcb6ac812dee3f738"
  },
  {
    "url": "blog/skepticism/2015/12/index.html",
    "revision": "5ccda98b760a5fd5ec583832c39e8592"
  },
  {
    "url": "blog/skepticism/2015/index.html",
    "revision": "93f27fbfd55244abd02e9b9a19ec1d2b"
  },
  {
    "url": "blog/skepticism/2016/02/07/antioxidant/index.html",
    "revision": "99cc3b8251c98b971bc121a7f88680b6"
  },
  {
    "url": "blog/skepticism/2016/02/07/index.html",
    "revision": "0903048d69b1bf37928203d41f34ccc1"
  },
  {
    "url": "blog/skepticism/2016/02/07/kfc/index.html",
    "revision": "39699548ea5536a8da89213312dc4fbb"
  },
  {
    "url": "blog/skepticism/2016/02/07/ph/index.html",
    "revision": "db3240505a6b3790b4b71da8bf1de9c0"
  },
  {
    "url": "blog/skepticism/2016/02/07/sandy/index.html",
    "revision": "6f20c74d6f51caaf5e7b71d997124bda"
  },
  {
    "url": "blog/skepticism/2016/02/07/sarfati/index.html",
    "revision": "7ac47a750e66ac29d3eb36b6c8bfe598"
  },
  {
    "url": "blog/skepticism/2016/02/07/trump/index.html",
    "revision": "840f2803ad6d07b89ad21c936e2458ff"
  },
  {
    "url": "blog/skepticism/2016/02/14/coins/index.html",
    "revision": "dd4a2a09a7bd141613c1cca1a177fea1"
  },
  {
    "url": "blog/skepticism/2016/02/14/fast/index.html",
    "revision": "468d6eba8c5b0ca940e0c9be2a1b6ad5"
  },
  {
    "url": "blog/skepticism/2016/02/14/fluoride/index.html",
    "revision": "c140857ccbf944c136bb39556d4381ec"
  },
  {
    "url": "blog/skepticism/2016/02/14/icke/index.html",
    "revision": "fd7be835357bfeb1933dc565be697be6"
  },
  {
    "url": "blog/skepticism/2016/02/14/index.html",
    "revision": "0b293fa1757861cd4b9ed0c2ff6ffbfd"
  },
  {
    "url": "blog/skepticism/2016/02/14/yeti/index.html",
    "revision": "fad3c3ff2344b6725876a556a814367c"
  },
  {
    "url": "blog/skepticism/2016/02/21/homeopathy/index.html",
    "revision": "f861e5c4f6c03d70905c41bc294ed4b1"
  },
  {
    "url": "blog/skepticism/2016/02/21/index.html",
    "revision": "4098c71a1ee49e8d5b07b5c69ebf475e"
  },
  {
    "url": "blog/skepticism/2016/02/21/monster/index.html",
    "revision": "005e90b8077fc95649c785ee5b5a3ce1"
  },
  {
    "url": "blog/skepticism/2016/02/21/scalia/index.html",
    "revision": "d33f3129b1825155bc5c81302e76e20e"
  },
  {
    "url": "blog/skepticism/2016/02/21/shane/index.html",
    "revision": "f542aa7ac3ab40931e460a4d5caf5cac"
  },
  {
    "url": "blog/skepticism/2016/02/21/texas/index.html",
    "revision": "b5a1700cfab0b26a1ed6170f092881db"
  },
  {
    "url": "blog/skepticism/2016/02/28/acupuncture/index.html",
    "revision": "cee32eee23b16a7886d6fa9991742381"
  },
  {
    "url": "blog/skepticism/2016/02/28/fsm/index.html",
    "revision": "4bc49f8096937ea2cdad8eaf055e70f6"
  },
  {
    "url": "blog/skepticism/2016/02/28/index.html",
    "revision": "c0e80e854996e0ff29c58e362c6a39bf"
  },
  {
    "url": "blog/skepticism/2016/02/28/iv/index.html",
    "revision": "329e3cabdcbde259a5229b3f10fb6b15"
  },
  {
    "url": "blog/skepticism/2016/02/28/natural/index.html",
    "revision": "4939a78a5a765c97d0ac3f0437bc53a6"
  },
  {
    "url": "blog/skepticism/2016/02/28/talc/index.html",
    "revision": "82b570a5aefe520de6402626e076ae03"
  },
  {
    "url": "blog/skepticism/2016/02/index.html",
    "revision": "71c897c409f0fdd57171d833a09d1b78"
  },
  {
    "url": "blog/skepticism/2016/03/13/herbs/index.html",
    "revision": "728f0e0759ccba66489e3988a2444241"
  },
  {
    "url": "blog/skepticism/2016/03/13/index.html",
    "revision": "98d108936405d8e5201a1743d83d755f"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandala/index.html",
    "revision": "d04dbff6b9ff4640b7597444304a2cc8"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandela/index.html",
    "revision": "62cadab7eb28cb2876440fb42b228c1d"
  },
  {
    "url": "blog/skepticism/2016/03/13/spray/index.html",
    "revision": "8a83d349c98dadde0a22dda122a06078"
  },
  {
    "url": "blog/skepticism/2016/03/index.html",
    "revision": "a7a41e4df36bc16cec82a2ed30fa2b25"
  },
  {
    "url": "blog/skepticism/2016/04/17/charity/index.html",
    "revision": "c10502624a38d43e60481f8d41e38730"
  },
  {
    "url": "blog/skepticism/2016/04/17/chiro/index.html",
    "revision": "6597ab70ce939ce8a2e0d7320f9664be"
  },
  {
    "url": "blog/skepticism/2016/04/17/fluoride/index.html",
    "revision": "7aca2754e0b5a9804410096a96f50b1a"
  },
  {
    "url": "blog/skepticism/2016/04/17/index.html",
    "revision": "c27559a21bd65ced8566dd08ec91d86d"
  },
  {
    "url": "blog/skepticism/2016/04/17/lotto/index.html",
    "revision": "cb5f17b943463801dc03a47adb91f0a1"
  },
  {
    "url": "blog/skepticism/2016/04/17/mind/index.html",
    "revision": "5d0f5e901500eb5cee6639a5fe1e2eca"
  },
  {
    "url": "blog/skepticism/2016/04/17/whooping/index.html",
    "revision": "0561410e776e61edd3554226e8010ab8"
  },
  {
    "url": "blog/skepticism/2016/04/index.html",
    "revision": "305fb1f02abfefdc892d4edc8e1deb54"
  },
  {
    "url": "blog/skepticism/2016/06/05/1080/index.html",
    "revision": "5eceb771a5092fb1cc03f820a6697cd8"
  },
  {
    "url": "blog/skepticism/2016/06/05/acupuncture/index.html",
    "revision": "7eceeb196873544bbac04b7c52494a93"
  },
  {
    "url": "blog/skepticism/2016/06/05/family/index.html",
    "revision": "1aadf43ccf426e7dc54e7930d041e7ad"
  },
  {
    "url": "blog/skepticism/2016/06/05/index.html",
    "revision": "d4da6ef3967869e57a8a18c403157d4f"
  },
  {
    "url": "blog/skepticism/2016/06/05/limbaugh/index.html",
    "revision": "91b9a3bcd9f4d1e74e7aa2b4de901ec5"
  },
  {
    "url": "blog/skepticism/2016/06/12/bobby/index.html",
    "revision": "aa20a2afd1da9f4ff08db0cdeaaa0a95"
  },
  {
    "url": "blog/skepticism/2016/06/12/climate/index.html",
    "revision": "bebe2131d5fba7110d8ab425f0af476b"
  },
  {
    "url": "blog/skepticism/2016/06/12/index.html",
    "revision": "cd62ff23073ff466492f0a1016277933"
  },
  {
    "url": "blog/skepticism/2016/06/12/pugh/index.html",
    "revision": "dbae487aaa3d62fe7462f879491a574f"
  },
  {
    "url": "blog/skepticism/2016/06/12/savage/index.html",
    "revision": "7b0bb6dafc78c0b307a87bcf93547571"
  },
  {
    "url": "blog/skepticism/2016/06/12/sawdust/index.html",
    "revision": "349a8bdbb40e77dfbe189ae3dd51b736"
  },
  {
    "url": "blog/skepticism/2016/06/19/beauty/index.html",
    "revision": "337d68b52a8ce35caaa0bdc29a33775b"
  },
  {
    "url": "blog/skepticism/2016/06/19/bilderberg/index.html",
    "revision": "fb64ae4f0459e72e4d97e49137bb228f"
  },
  {
    "url": "blog/skepticism/2016/06/19/cyf/index.html",
    "revision": "7c5e1f5ddc74b1652c0bf543c42bdc37"
  },
  {
    "url": "blog/skepticism/2016/06/19/holt/index.html",
    "revision": "cef8213e9647bab00e53661accd4117a"
  },
  {
    "url": "blog/skepticism/2016/06/19/index.html",
    "revision": "1cffa86f15cbed6e6f15f8794a4880c2"
  },
  {
    "url": "blog/skepticism/2016/06/19/silver/index.html",
    "revision": "ad055e5692cb95f8088344deb8d8c784"
  },
  {
    "url": "blog/skepticism/2016/06/19/ufo/index.html",
    "revision": "bcdc5fcb9e1f171b322284e61a462991"
  },
  {
    "url": "blog/skepticism/2016/06/26/homeopathy/index.html",
    "revision": "5716c72303100d27190dd35ab1dc1c7f"
  },
  {
    "url": "blog/skepticism/2016/06/26/index.html",
    "revision": "0e480daa7881ba5c494dde3213c0db73"
  },
  {
    "url": "blog/skepticism/2016/06/26/robbins/index.html",
    "revision": "0087bb2e15e0ff44bf98149290a74657"
  },
  {
    "url": "blog/skepticism/2016/06/26/selfies/index.html",
    "revision": "ecfdabab70203eb4b0a886585ebbbe72"
  },
  {
    "url": "blog/skepticism/2016/06/26/silver/index.html",
    "revision": "2935fe0ed52eca2a128b549f3090fa54"
  },
  {
    "url": "blog/skepticism/2016/06/26/ufos/index.html",
    "revision": "3e6d19e39ea6756086ff90c57bfa8ce1"
  },
  {
    "url": "blog/skepticism/2016/06/index.html",
    "revision": "21e42fd0c9900489e92a7e2618b13637"
  },
  {
    "url": "blog/skepticism/2016/07/03/glyphosate/index.html",
    "revision": "d9aa4d23c9c65c3a9a6d279514f708af"
  },
  {
    "url": "blog/skepticism/2016/07/03/gmo/index.html",
    "revision": "a49b3a65c63f3e2459a1c44ee844181f"
  },
  {
    "url": "blog/skepticism/2016/07/03/index.html",
    "revision": "467b0d064ea384ab73fd0698421416af"
  },
  {
    "url": "blog/skepticism/2016/07/03/jail/index.html",
    "revision": "97993b8228d8d12e29aed4ee4520b6ff"
  },
  {
    "url": "blog/skepticism/2016/07/03/ken/index.html",
    "revision": "0b653a41d553b80bd6350eb8f0de32f7"
  },
  {
    "url": "blog/skepticism/2016/07/10/ark/index.html",
    "revision": "abe440c7d1a16eba09df87e966d174cb"
  },
  {
    "url": "blog/skepticism/2016/07/10/bee/index.html",
    "revision": "1aeb00b3097a0ce89b5b36cdd1e9cdb3"
  },
  {
    "url": "blog/skepticism/2016/07/10/index.html",
    "revision": "f535cb9afea7e09b32c17e9a91fd9b65"
  },
  {
    "url": "blog/skepticism/2016/07/10/lottery/index.html",
    "revision": "64ad79ae7567d2a471d63afff6b3327c"
  },
  {
    "url": "blog/skepticism/2016/07/10/murder/index.html",
    "revision": "8b8b898ba761bde8bde7d4089909a05d"
  },
  {
    "url": "blog/skepticism/2016/07/17/dogs/index.html",
    "revision": "81ddd70cd69dc2eb2593af8856d48078"
  },
  {
    "url": "blog/skepticism/2016/07/17/fsm/index.html",
    "revision": "2516b863108d26e4ee60cba2bc2fa229"
  },
  {
    "url": "blog/skepticism/2016/07/17/fyi/index.html",
    "revision": "7f35b9c82801020bcdb21d3c18fd4ba5"
  },
  {
    "url": "blog/skepticism/2016/07/17/index.html",
    "revision": "c4612445f2c56a18a84f3b73ae7a15d4"
  },
  {
    "url": "blog/skepticism/2016/07/17/natural/index.html",
    "revision": "0a5f7744397a9c4df733a00753491c87"
  },
  {
    "url": "blog/skepticism/2016/07/17/pokemon/index.html",
    "revision": "b12c121844fb8897cbe58bd79119acb4"
  },
  {
    "url": "blog/skepticism/2016/07/index.html",
    "revision": "b7576b5250cffc0cd427027630e1531b"
  },
  {
    "url": "blog/skepticism/2016/08/07/icke/index.html",
    "revision": "056a698e217f11522ecf52c886947993"
  },
  {
    "url": "blog/skepticism/2016/08/07/index.html",
    "revision": "45adeda745acaec43b67103446f4b1cd"
  },
  {
    "url": "blog/skepticism/2016/08/21/brian/index.html",
    "revision": "97f25db4d0b8042aded045df511f9eeb"
  },
  {
    "url": "blog/skepticism/2016/08/21/chlorine/index.html",
    "revision": "424f0c4266f15caeb05045e31c5c8ba8"
  },
  {
    "url": "blog/skepticism/2016/08/21/index.html",
    "revision": "19b996626370bcbdbc5f8ded6a089a1d"
  },
  {
    "url": "blog/skepticism/2016/08/21/murder/index.html",
    "revision": "7e946ddc1095b685f57637d9cd98e0da"
  },
  {
    "url": "blog/skepticism/2016/08/21/superfoods/index.html",
    "revision": "f6122aa5a82b5aa76e8728d772546440"
  },
  {
    "url": "blog/skepticism/2016/08/21/witch/index.html",
    "revision": "133481faa9bacafede2a2abbe0323e13"
  },
  {
    "url": "blog/skepticism/2016/08/28/alcohol/index.html",
    "revision": "22485d7eab2fd7be88f699c82745cc1b"
  },
  {
    "url": "blog/skepticism/2016/08/28/chiro/index.html",
    "revision": "79418802187d18a89d531ad5efc9c74d"
  },
  {
    "url": "blog/skepticism/2016/08/28/index.html",
    "revision": "682f311b164f4794992a54d2ea20a39d"
  },
  {
    "url": "blog/skepticism/2016/08/28/processed/index.html",
    "revision": "5c012d34c3fd323f32fba97a54089385"
  },
  {
    "url": "blog/skepticism/2016/08/28/sbh/index.html",
    "revision": "e6b51b6876f27b93c37aa860bdf9353e"
  },
  {
    "url": "blog/skepticism/2016/08/index.html",
    "revision": "90f1587e4e1a91af82ae103aa2dfe01d"
  },
  {
    "url": "blog/skepticism/2016/09/18/altruism/index.html",
    "revision": "64cd28c17f3be103d04d3272293e095d"
  },
  {
    "url": "blog/skepticism/2016/09/18/better/index.html",
    "revision": "ab0b24c4a6de5547ededc324db47875e"
  },
  {
    "url": "blog/skepticism/2016/09/18/homeopathy/index.html",
    "revision": "e2bc29c98cde1e6eca1dca90e47aa312"
  },
  {
    "url": "blog/skepticism/2016/09/18/index.html",
    "revision": "7dd9e56df9a9b9a9eb00903429fb7747"
  },
  {
    "url": "blog/skepticism/2016/09/18/nonsense/index.html",
    "revision": "7b3bd5a888b22b518e093a4b0312171e"
  },
  {
    "url": "blog/skepticism/2016/09/18/trump/index.html",
    "revision": "475571dc895d39ca012aa64a4679bd4d"
  },
  {
    "url": "blog/skepticism/2016/09/25/clinic/index.html",
    "revision": "3142666642cab8fd6774bb43f59be0b8"
  },
  {
    "url": "blog/skepticism/2016/09/25/fluoride/index.html",
    "revision": "01cd60f516d2b439b85bfe26d63a2ee8"
  },
  {
    "url": "blog/skepticism/2016/09/25/homeopathy/index.html",
    "revision": "b125c6762aa18a9f1fcd7bea6de1d553"
  },
  {
    "url": "blog/skepticism/2016/09/25/index.html",
    "revision": "e55efd3159cd4384ba6207207f5f60f9"
  },
  {
    "url": "blog/skepticism/2016/09/25/murder/index.html",
    "revision": "892eb372921d3e4fa1f10b3f0319b576"
  },
  {
    "url": "blog/skepticism/2016/09/index.html",
    "revision": "bf5b0bb909f4b8e0ad4753f892467aa5"
  },
  {
    "url": "blog/skepticism/2016/10/21/bigfoot/index.html",
    "revision": "94a176670e375f4845f3786363856411"
  },
  {
    "url": "blog/skepticism/2016/10/21/breasts/index.html",
    "revision": "fa1fc9ccbd58828e7ee488d972db9ba7"
  },
  {
    "url": "blog/skepticism/2016/10/21/index.html",
    "revision": "9d228712f4efa26b126a16b888c9c0f0"
  },
  {
    "url": "blog/skepticism/2016/10/21/medsafe/index.html",
    "revision": "c1e5823118f4857f634c153b157bf1c6"
  },
  {
    "url": "blog/skepticism/2016/10/21/zenteq/index.html",
    "revision": "b7f017eeaeb3d06ef4d70ea0aea84d77"
  },
  {
    "url": "blog/skepticism/2016/10/index.html",
    "revision": "e03c578de26f1d717b524f594caf3a58"
  },
  {
    "url": "blog/skepticism/2016/11/13/conference/index.html",
    "revision": "3e868c05144a8053c363e8915cefb3c2"
  },
  {
    "url": "blog/skepticism/2016/11/13/green/index.html",
    "revision": "a85ce12e4b190cf3aa574e61d4fd031d"
  },
  {
    "url": "blog/skepticism/2016/11/13/index.html",
    "revision": "63719eba9d4746b9d425addda7fa3ed7"
  },
  {
    "url": "blog/skepticism/2016/11/13/vice/index.html",
    "revision": "bca992e828a5f469789a2fddd5528a82"
  },
  {
    "url": "blog/skepticism/2016/11/27/bioptron/index.html",
    "revision": "799f75b2b70459392bee75e0ec6f0554"
  },
  {
    "url": "blog/skepticism/2016/11/27/conference/index.html",
    "revision": "ae7c7b6cf5585e93189880627f35ee3f"
  },
  {
    "url": "blog/skepticism/2016/11/27/earthquake/index.html",
    "revision": "125232279096d9c44bd9618f7663e070"
  },
  {
    "url": "blog/skepticism/2016/11/27/index.html",
    "revision": "85bf1d956b605b53bec52a85de155139"
  },
  {
    "url": "blog/skepticism/2016/11/index.html",
    "revision": "e86422cf79c4b88374eb8d534679b2f0"
  },
  {
    "url": "blog/skepticism/2016/12/04/conference/index.html",
    "revision": "bcee4e0df5cb2037d28181d46e1aea6a"
  },
  {
    "url": "blog/skepticism/2016/12/04/index.html",
    "revision": "09142963faa706cd73e8223fbda19aff"
  },
  {
    "url": "blog/skepticism/2016/12/18/colin/index.html",
    "revision": "ed5b73bc2e9cd4d09256524cbf8c4623"
  },
  {
    "url": "blog/skepticism/2016/12/18/fiji/index.html",
    "revision": "bf206487957da5da40c308162deda022"
  },
  {
    "url": "blog/skepticism/2016/12/18/index.html",
    "revision": "7516d42b84368f3cd79e52a7ae847d0a"
  },
  {
    "url": "blog/skepticism/2016/12/18/kinesiology/index.html",
    "revision": "c6064dca367fea36666e6cfd9627211e"
  },
  {
    "url": "blog/skepticism/2016/12/18/mmm/index.html",
    "revision": "d36913fc47ad4f7259e3dcf949c4198c"
  },
  {
    "url": "blog/skepticism/2016/12/18/nigel/index.html",
    "revision": "8893e1bddd207a6bf083f4a1ef9355dd"
  },
  {
    "url": "blog/skepticism/2016/12/index.html",
    "revision": "f2e5be8c6e32fa4896713ba7a4167f95"
  },
  {
    "url": "blog/skepticism/2016/index.html",
    "revision": "9a4a4a07edb09377c6c8d4a510e9ca9b"
  },
  {
    "url": "blog/skepticism/2017/01/22/index.html",
    "revision": "bd95eb24d7bbb7478dbda8b786dd4ab1"
  },
  {
    "url": "blog/skepticism/2017/01/22/scientology/index.html",
    "revision": "27cf63a9ffbdbc3d2e2370736ee8f93c"
  },
  {
    "url": "blog/skepticism/2017/01/29/creation/index.html",
    "revision": "b8ee855a716dcf18fe0870a3b83b4ca8"
  },
  {
    "url": "blog/skepticism/2017/01/29/index.html",
    "revision": "23dfaa0f2c8a9e94854764ec92cde9b1"
  },
  {
    "url": "blog/skepticism/2017/01/index.html",
    "revision": "9eef6f0b38cf8594ac79f04a80c56be6"
  },
  {
    "url": "blog/skepticism/2017/02/05/fraudster/index.html",
    "revision": "c0bac6244974e386d79af6fbf89232c0"
  },
  {
    "url": "blog/skepticism/2017/02/05/gervais/index.html",
    "revision": "985fc47591f621e79bc06610efbcbe35"
  },
  {
    "url": "blog/skepticism/2017/02/05/index.html",
    "revision": "ac8449674863edd0a378f14c18a3030b"
  },
  {
    "url": "blog/skepticism/2017/02/05/scientology/index.html",
    "revision": "5e4cd51272a67120e17a7008afe1bd9f"
  },
  {
    "url": "blog/skepticism/2017/02/19/homeopathy/index.html",
    "revision": "4b76ea338bfb796867618380da2fc3d7"
  },
  {
    "url": "blog/skepticism/2017/02/19/index.html",
    "revision": "56ebe8311acb28f2d3b02079d6aa64ca"
  },
  {
    "url": "blog/skepticism/2017/02/19/lottery/index.html",
    "revision": "b397cd852e3b4394ab53ee87dd566e90"
  },
  {
    "url": "blog/skepticism/2017/02/19/vaxxed/index.html",
    "revision": "0a8f4cd0f5aaa6332589bf526cbbc310"
  },
  {
    "url": "blog/skepticism/2017/02/19/whales/index.html",
    "revision": "d40c9afd29aa841feb9f525398e66bd9"
  },
  {
    "url": "blog/skepticism/2017/02/index.html",
    "revision": "2ae51a73a6f81edf2821d226f94cc7a4"
  },
  {
    "url": "blog/skepticism/2017/03/05/index.html",
    "revision": "1c46f23681871893839aed82925c45ae"
  },
  {
    "url": "blog/skepticism/2017/03/05/rea/index.html",
    "revision": "05dba7fa379a3a128a086500fd88d2e9"
  },
  {
    "url": "blog/skepticism/2017/03/19/fake/index.html",
    "revision": "9ac835a90b8340fba943e0bc49a3e23f"
  },
  {
    "url": "blog/skepticism/2017/03/19/index.html",
    "revision": "1495a8d936f0024145aa2a56316b8210"
  },
  {
    "url": "blog/skepticism/2017/03/19/murder/index.html",
    "revision": "64de8780252f1f6645571c6fbbe2a77a"
  },
  {
    "url": "blog/skepticism/2017/03/26/census/index.html",
    "revision": "33e4e25476d74894839349f9aa613f75"
  },
  {
    "url": "blog/skepticism/2017/03/26/index.html",
    "revision": "64318af55e86e9f8da39cd17d74562ef"
  },
  {
    "url": "blog/skepticism/2017/03/26/nzmj/index.html",
    "revision": "cb607f9d740533b29573afd16aabb272"
  },
  {
    "url": "blog/skepticism/2017/03/26/shaquille/index.html",
    "revision": "c6b46e4d4fef4bbdd97896cd72f789f0"
  },
  {
    "url": "blog/skepticism/2017/03/index.html",
    "revision": "0cfee863339b11411804caf6b1c62f8c"
  },
  {
    "url": "blog/skepticism/2017/04/02/index.html",
    "revision": "1732f6270d73e88456878a6ae49cd1e2"
  },
  {
    "url": "blog/skepticism/2017/04/02/nasa/index.html",
    "revision": "7c6248c0cd5b9911aee1e105028ce14a"
  },
  {
    "url": "blog/skepticism/2017/04/02/science/index.html",
    "revision": "486898031ef816a7a3a1ae9a3b749e5d"
  },
  {
    "url": "blog/skepticism/2017/04/02/vaxxed/index.html",
    "revision": "556a5265c19724c255ec10e29eece538"
  },
  {
    "url": "blog/skepticism/2017/04/09/index.html",
    "revision": "1ef299caff7f42e18d994178d26e9a14"
  },
  {
    "url": "blog/skepticism/2017/04/09/tekiri/index.html",
    "revision": "aa5f890521d3eefc274986bad6ed8457"
  },
  {
    "url": "blog/skepticism/2017/04/09/vaxxed/index.html",
    "revision": "50ce1a3d1191158b388a82730f08a02a"
  },
  {
    "url": "blog/skepticism/2017/04/23/arise/index.html",
    "revision": "9d0db5905d17ac141ca633d25883e830"
  },
  {
    "url": "blog/skepticism/2017/04/23/index.html",
    "revision": "1c9fdeb25e5eca38b957ba01a0584294"
  },
  {
    "url": "blog/skepticism/2017/04/23/kelvin/index.html",
    "revision": "6f2d7fa13d7ea47c27b485a95dc56243"
  },
  {
    "url": "blog/skepticism/2017/04/index.html",
    "revision": "b8d6fd6e2961436d0158cc33cc2cf035"
  },
  {
    "url": "blog/skepticism/2017/05/07/cancer/index.html",
    "revision": "fdb33c44d34d3d4af80c8ff8e99f4c70"
  },
  {
    "url": "blog/skepticism/2017/05/07/index.html",
    "revision": "5cec5efc9aac6e26cf405fedee28dad2"
  },
  {
    "url": "blog/skepticism/2017/05/07/nigel/index.html",
    "revision": "cbdc03c956f1d3b41cace863701d0394"
  },
  {
    "url": "blog/skepticism/2017/05/21/blasphemy/index.html",
    "revision": "94f079e6fbd036a645220f0e86b7d01d"
  },
  {
    "url": "blog/skepticism/2017/05/21/flat/index.html",
    "revision": "cb9cc551dd83d5f34794e40b0e3dae3b"
  },
  {
    "url": "blog/skepticism/2017/05/21/index.html",
    "revision": "10a8827129a2a5f6f0e16fe0e5ba639b"
  },
  {
    "url": "blog/skepticism/2017/05/21/maori/index.html",
    "revision": "b9bf4e24f6dc117809941d981bb13fff"
  },
  {
    "url": "blog/skepticism/2017/05/index.html",
    "revision": "9b8ef683f25a15283d2431328502dcb8"
  },
  {
    "url": "blog/skepticism/2017/06/04/bigelow/index.html",
    "revision": "070101b9590ab483295028450f5cf751"
  },
  {
    "url": "blog/skepticism/2017/06/04/climate/index.html",
    "revision": "987488d575b0d7c001193306a80a4131"
  },
  {
    "url": "blog/skepticism/2017/06/04/hansford/index.html",
    "revision": "f4968e669ef2eb775f79407b150ad6b9"
  },
  {
    "url": "blog/skepticism/2017/06/04/index.html",
    "revision": "117a1313815506c65141166ccc0b464a"
  },
  {
    "url": "blog/skepticism/2017/06/04/wasp/index.html",
    "revision": "c5f64b170ce41f5f7b4276d39d2e816c"
  },
  {
    "url": "blog/skepticism/2017/06/11/colonic/index.html",
    "revision": "2d3415f8e4bfe684a6b9f90c742b7814"
  },
  {
    "url": "blog/skepticism/2017/06/11/credulous/index.html",
    "revision": "1c1be49e9ba7787ea44aa4cefc1e098c"
  },
  {
    "url": "blog/skepticism/2017/06/11/index.html",
    "revision": "8a539acf50ddd8c62ac135f37bd03b2e"
  },
  {
    "url": "blog/skepticism/2017/06/11/journals/index.html",
    "revision": "e955a6fa912099b83bef1982bf82b1a7"
  },
  {
    "url": "blog/skepticism/2017/06/18/breatharians/index.html",
    "revision": "29fbd11ecefc100749af9aeba9b86967"
  },
  {
    "url": "blog/skepticism/2017/06/18/fieldays/index.html",
    "revision": "f6cf785e3d9b63055113695a07527f20"
  },
  {
    "url": "blog/skepticism/2017/06/18/index.html",
    "revision": "45b4318680266ec5ff2e0e2ef32f6deb"
  },
  {
    "url": "blog/skepticism/2017/06/18/jw/index.html",
    "revision": "f2e3c41a4097d58439a1963e8fb22b60"
  },
  {
    "url": "blog/skepticism/2017/06/18/oil/index.html",
    "revision": "6596d4c584df7dea5fdb79785ef2feaf"
  },
  {
    "url": "blog/skepticism/2017/06/index.html",
    "revision": "832ab0e12cb9c75e44043948d7fbc1f9"
  },
  {
    "url": "blog/skepticism/2017/07/02/baby/index.html",
    "revision": "3a153af7dde6c5ed4e967b32f377956b"
  },
  {
    "url": "blog/skepticism/2017/07/02/index.html",
    "revision": "14cd4d01bac6371c356b541342c2861d"
  },
  {
    "url": "blog/skepticism/2017/07/02/infowars/index.html",
    "revision": "dbca4098045b8c889f20ac0c17dccc60"
  },
  {
    "url": "blog/skepticism/2017/07/02/scientology/index.html",
    "revision": "43b9506f4baf9838dc860e9d39efbc7b"
  },
  {
    "url": "blog/skepticism/2017/07/16/bananas/index.html",
    "revision": "2f2ce83058e85894544741d7dc6a6f53"
  },
  {
    "url": "blog/skepticism/2017/07/16/circles/index.html",
    "revision": "99d96ff484e87c5d9f229aa200dfd0b0"
  },
  {
    "url": "blog/skepticism/2017/07/16/index.html",
    "revision": "20579d841ff298b1758524c7e7dd2588"
  },
  {
    "url": "blog/skepticism/2017/07/16/siggi/index.html",
    "revision": "cb5fc314c84ac8fab58c2cec8efa9895"
  },
  {
    "url": "blog/skepticism/2017/07/16/vaxxed/index.html",
    "revision": "3b77d2e184f973b52e4779e6e710b7b9"
  },
  {
    "url": "blog/skepticism/2017/07/30/bleach/index.html",
    "revision": "b43b947640d2ae2a523d3758546c047f"
  },
  {
    "url": "blog/skepticism/2017/07/30/bluebeam/index.html",
    "revision": "d45c246067e0dd4540355c2fd7d63233"
  },
  {
    "url": "blog/skepticism/2017/07/30/index.html",
    "revision": "57c246f7b38bb5d3a1c907e539eff940"
  },
  {
    "url": "blog/skepticism/2017/07/30/police/index.html",
    "revision": "3d00d240dff8829798f73355bdbd987c"
  },
  {
    "url": "blog/skepticism/2017/07/index.html",
    "revision": "73af7711d5daaccbc47a42ecd8fb00b0"
  },
  {
    "url": "blog/skepticism/2017/08/06/conned/index.html",
    "revision": "8288194d34d07c48da6d0b9ed8329579"
  },
  {
    "url": "blog/skepticism/2017/08/06/doll/index.html",
    "revision": "f782f758aae539b7dc219785fdf49bc1"
  },
  {
    "url": "blog/skepticism/2017/08/06/index.html",
    "revision": "dc555ab2c687296d5a490ac7dcd9994b"
  },
  {
    "url": "blog/skepticism/2017/08/06/jacinda/index.html",
    "revision": "bdd003e281338495b59297ee25ce0245"
  },
  {
    "url": "blog/skepticism/2017/08/06/lotto/index.html",
    "revision": "fbb1e3a11c035bfbec2655454d7c4d2d"
  },
  {
    "url": "blog/skepticism/2017/08/27/index.html",
    "revision": "a008e073ef6204e1990692df7b4f6a09"
  },
  {
    "url": "blog/skepticism/2017/08/27/naturopath/index.html",
    "revision": "eb62d418077b24d1b6a981c22be5e27f"
  },
  {
    "url": "blog/skepticism/2017/08/27/satanic/index.html",
    "revision": "dc695b701b43313513f0627bc76d0bfa"
  },
  {
    "url": "blog/skepticism/2017/08/index.html",
    "revision": "ab4d6bd5868d60cfbe51504bf5f4f7fc"
  },
  {
    "url": "blog/skepticism/2017/09/03/apocalypse/index.html",
    "revision": "9e9bcd6ad326a9cc337b4a53c9516ef5"
  },
  {
    "url": "blog/skepticism/2017/09/03/cancer/index.html",
    "revision": "42e3074ab2ac08051e3372d5de0bf392"
  },
  {
    "url": "blog/skepticism/2017/09/03/index.html",
    "revision": "016b8ed48c6b49e35495bc6f6cd9704d"
  },
  {
    "url": "blog/skepticism/2017/09/03/rectangle/index.html",
    "revision": "3883de07a001a78f75e138c6850b1657"
  },
  {
    "url": "blog/skepticism/2017/09/03/stargate/index.html",
    "revision": "9dbb9d86593b4dcf8c3ee9b2f9921ce5"
  },
  {
    "url": "blog/skepticism/2017/09/index.html",
    "revision": "44902c40adb37ae5f347004e83bbf66e"
  },
  {
    "url": "blog/skepticism/2017/10/01/apocalypse/index.html",
    "revision": "e74d8bb12a049873d796008126251058"
  },
  {
    "url": "blog/skepticism/2017/10/01/freeman/index.html",
    "revision": "f62b7e0a7ad54762b36184917df4aaf5"
  },
  {
    "url": "blog/skepticism/2017/10/01/index.html",
    "revision": "030339a0abb91d11c3dd172da978e998"
  },
  {
    "url": "blog/skepticism/2017/10/01/pharmacy/index.html",
    "revision": "8d732c0957ab88532e53cb69b0694618"
  },
  {
    "url": "blog/skepticism/2017/10/08/index.html",
    "revision": "660fd4c7433b4a1b20285064f2f3ceef"
  },
  {
    "url": "blog/skepticism/2017/10/08/pill/index.html",
    "revision": "286cdd7790ed4b5b0cdb2126d6d5777a"
  },
  {
    "url": "blog/skepticism/2017/10/08/qsb/index.html",
    "revision": "3f9f9c5b05b541f3f02dbe7d9cd89764"
  },
  {
    "url": "blog/skepticism/2017/10/08/vegas/index.html",
    "revision": "e452a0ef7ee3aee160efe375c3de616c"
  },
  {
    "url": "blog/skepticism/2017/10/15/doterra/index.html",
    "revision": "88f2577b500a619bc66118794417afc1"
  },
  {
    "url": "blog/skepticism/2017/10/15/index.html",
    "revision": "292c6f2aeecf05fc4cc405005434c521"
  },
  {
    "url": "blog/skepticism/2017/10/15/lie/index.html",
    "revision": "75a5abac917848ee4631b182b49e10bf"
  },
  {
    "url": "blog/skepticism/2017/10/15/soap/index.html",
    "revision": "5a30e0b1a943f4e68ec5ba9b0cfa59e1"
  },
  {
    "url": "blog/skepticism/2017/10/index.html",
    "revision": "caaf7df7b2caef145269ff1897b69f31"
  },
  {
    "url": "blog/skepticism/2017/11/05/conference/index.html",
    "revision": "e3c670d0facda74ef0f2a9927c2c34f1"
  },
  {
    "url": "blog/skepticism/2017/11/05/glyphosate/index.html",
    "revision": "bf71c42b40e94356600e3cedd692a99a"
  },
  {
    "url": "blog/skepticism/2017/11/05/index.html",
    "revision": "025b2fd58091083b3497c57c5b3a2706"
  },
  {
    "url": "blog/skepticism/2017/11/05/stranded/index.html",
    "revision": "d96ea47ab60ef4fd84cf97186ade6e93"
  },
  {
    "url": "blog/skepticism/2017/11/05/tracts/index.html",
    "revision": "35169c75e6b17f0af5dcf7dbeab9dda8"
  },
  {
    "url": "blog/skepticism/2017/11/12/ghost/index.html",
    "revision": "17cf5f1511892e778859f8311fc19e2d"
  },
  {
    "url": "blog/skepticism/2017/11/12/green/index.html",
    "revision": "e94985c3bfc5ab0fda41fc9639b8bc0a"
  },
  {
    "url": "blog/skepticism/2017/11/12/harassment/index.html",
    "revision": "a42d28faa6683a7bce2d98c2edccc418"
  },
  {
    "url": "blog/skepticism/2017/11/12/index.html",
    "revision": "c99f2186d7d03a1a2a84c9e85ab35bf1"
  },
  {
    "url": "blog/skepticism/2017/11/12/libby/index.html",
    "revision": "8c83d90c8e53599323845ab8ec8f75fb"
  },
  {
    "url": "blog/skepticism/2017/11/index.html",
    "revision": "0c1490bbccc825335856d0e7a8222092"
  },
  {
    "url": "blog/skepticism/2017/12/03/acupuncture/index.html",
    "revision": "671b029caddf2cfbdfafd0856910df9d"
  },
  {
    "url": "blog/skepticism/2017/12/03/denialism/index.html",
    "revision": "89ec3562c92008198487228e29fe73e7"
  },
  {
    "url": "blog/skepticism/2017/12/03/dowsing/index.html",
    "revision": "da93db9c4e4493af8d3d671ac2533291"
  },
  {
    "url": "blog/skepticism/2017/12/03/holes/index.html",
    "revision": "525376a41a63f056332a46a60abe6400"
  },
  {
    "url": "blog/skepticism/2017/12/03/index.html",
    "revision": "87a40589e54c0abd44bf030c2a645e0e"
  },
  {
    "url": "blog/skepticism/2017/12/17/index.html",
    "revision": "e1bb5fe2db23d6f738925235aa69b2a8"
  },
  {
    "url": "blog/skepticism/2017/12/17/nhs/index.html",
    "revision": "ba7422ee72eacffda66152ee0d14798f"
  },
  {
    "url": "blog/skepticism/2017/12/17/oto/index.html",
    "revision": "fc84b705715799189ad0aa9f635a2fd5"
  },
  {
    "url": "blog/skepticism/2017/12/17/pastafarian/index.html",
    "revision": "cd9d07be6cd98c2e0990a306fb6065d8"
  },
  {
    "url": "blog/skepticism/2017/12/17/shc/index.html",
    "revision": "374391fcb741042524aebb1a22fc2b9f"
  },
  {
    "url": "blog/skepticism/2017/12/17/wellworks/index.html",
    "revision": "4cec44e340880424783d4e6e6754fabf"
  },
  {
    "url": "blog/skepticism/2017/12/index.html",
    "revision": "af931f10a8e269a6ea20e2ef516bbff3"
  },
  {
    "url": "blog/skepticism/2017/index.html",
    "revision": "3c39bd183cb3a021db5f4ec7ded888dd"
  },
  {
    "url": "blog/skepticism/2018/01/21/grounding/index.html",
    "revision": "21f3419b6063d866b75ee33ef152cf8f"
  },
  {
    "url": "blog/skepticism/2018/01/21/index.html",
    "revision": "d43a5901d338830cc1325febf7830298"
  },
  {
    "url": "blog/skepticism/2018/01/21/naturopath/index.html",
    "revision": "ae5d1e100d3bae31c3f01f61b68c4a89"
  },
  {
    "url": "blog/skepticism/2018/01/21/respen/index.html",
    "revision": "a79cff8a32d20a6ffea1e4a001df467d"
  },
  {
    "url": "blog/skepticism/2018/01/28/bears/index.html",
    "revision": "cde72a013d9a77576bd873c8fd0e1639"
  },
  {
    "url": "blog/skepticism/2018/01/28/index.html",
    "revision": "19f8dfbd0054d7bddf52ba8268492880"
  },
  {
    "url": "blog/skepticism/2018/01/28/peppering/index.html",
    "revision": "cd5a4eb959d9cd45f7fc9d448b6608cd"
  },
  {
    "url": "blog/skepticism/2018/01/28/pet/index.html",
    "revision": "bde32c1b9bdc819c9787fcda466981d0"
  },
  {
    "url": "blog/skepticism/2018/01/28/quake/index.html",
    "revision": "9bbd128e27e97f78f815521378513c9d"
  },
  {
    "url": "blog/skepticism/2018/01/28/scientology/index.html",
    "revision": "8138007046c9569d7e30bb96c68088b0"
  },
  {
    "url": "blog/skepticism/2018/01/index.html",
    "revision": "a112009002fed058fe111ec08c525266"
  },
  {
    "url": "blog/skepticism/2018/02/11/asa/index.html",
    "revision": "c26eb7ceb500716065573c4b2b885f84"
  },
  {
    "url": "blog/skepticism/2018/02/11/cannabis/index.html",
    "revision": "b520bdd71c1fb489f85dd518553b7601"
  },
  {
    "url": "blog/skepticism/2018/02/11/elon/index.html",
    "revision": "2e9df6e2a9a010abffe6d79bf03ac659"
  },
  {
    "url": "blog/skepticism/2018/02/11/homeopathy/index.html",
    "revision": "87f733accc970c09c7a4d301c63f90c2"
  },
  {
    "url": "blog/skepticism/2018/02/11/index.html",
    "revision": "e1d32424eaa4d19f2bbcf2387dba4b5d"
  },
  {
    "url": "blog/skepticism/2018/02/11/water/index.html",
    "revision": "761cbc2ff18fd978d98695da0a1d9b44"
  },
  {
    "url": "blog/skepticism/2018/02/25/crisis/index.html",
    "revision": "03030c7da6919791e3061cc71a64d5ac"
  },
  {
    "url": "blog/skepticism/2018/02/25/eggs/index.html",
    "revision": "ef9d4ef81c07dd137349275da4ed276c"
  },
  {
    "url": "blog/skepticism/2018/02/25/fsm/index.html",
    "revision": "ea1f1578566d1ba2d43af8c0ee5383b2"
  },
  {
    "url": "blog/skepticism/2018/02/25/index.html",
    "revision": "bac32c685214fc13cfb2d9431c461b5c"
  },
  {
    "url": "blog/skepticism/2018/02/25/number/index.html",
    "revision": "af1fd65ad5f2f944b1a1968c880c7d33"
  },
  {
    "url": "blog/skepticism/2018/02/25/quackery/index.html",
    "revision": "aebbb636c61dfb3e3725786cc6576157"
  },
  {
    "url": "blog/skepticism/2018/02/index.html",
    "revision": "1f98caade6428e6001b1be36dece65dd"
  },
  {
    "url": "blog/skepticism/2018/03/11/ai/index.html",
    "revision": "5ced81c435e019fec53b48add5494afb"
  },
  {
    "url": "blog/skepticism/2018/03/11/index.html",
    "revision": "6ed31641efb43b274fa741ca9a052621"
  },
  {
    "url": "blog/skepticism/2018/03/11/radiation/index.html",
    "revision": "726dcbc3e1efad73ca44b7ff1aa8148b"
  },
  {
    "url": "blog/skepticism/2018/03/11/reiki/index.html",
    "revision": "177c436a00bfb0b426b30c0c0102fdbb"
  },
  {
    "url": "blog/skepticism/2018/03/11/ufo/index.html",
    "revision": "500adece970a1aa082ee18fc73b9aab5"
  },
  {
    "url": "blog/skepticism/2018/03/18/ghost/index.html",
    "revision": "bcb960b84972f93de7ecdef38c865f4e"
  },
  {
    "url": "blog/skepticism/2018/03/18/index.html",
    "revision": "5f2f080bdadcd72b7fb0fbea4c6739ce"
  },
  {
    "url": "blog/skepticism/2018/03/18/psychic/index.html",
    "revision": "a1523aa548fd15571e9b852c3823d54e"
  },
  {
    "url": "blog/skepticism/2018/03/18/quack/index.html",
    "revision": "6ce6e3ca82e6c6f68924b2ac172bc307"
  },
  {
    "url": "blog/skepticism/2018/03/18/radiation/index.html",
    "revision": "27f3030734a69ef97e272b51cfc60fd9"
  },
  {
    "url": "blog/skepticism/2018/03/index.html",
    "revision": "44fb76be974604a3f9c73bcad8f7ab9f"
  },
  {
    "url": "blog/skepticism/2018/04/08/calocurb/index.html",
    "revision": "2411287fdcb1e1ea0004e89c613879d4"
  },
  {
    "url": "blog/skepticism/2018/04/08/cam/index.html",
    "revision": "2e9b611a558ce86c0d2b809707ab2575"
  },
  {
    "url": "blog/skepticism/2018/04/08/index.html",
    "revision": "04b1790e6ac58477295733e0a8935a50"
  },
  {
    "url": "blog/skepticism/2018/04/08/psychic/index.html",
    "revision": "0043094538707dec534b65899ad3a4dc"
  },
  {
    "url": "blog/skepticism/2018/04/08/vaccines/index.html",
    "revision": "7fba4d3d44d473e8f84e46e470852099"
  },
  {
    "url": "blog/skepticism/2018/04/15/coffee/index.html",
    "revision": "6ce746586e146f8b5cca157ddc6583c3"
  },
  {
    "url": "blog/skepticism/2018/04/15/ignorance/index.html",
    "revision": "b6b6d9a251872c5429173355d06011c3"
  },
  {
    "url": "blog/skepticism/2018/04/15/index.html",
    "revision": "611179e89fc95a75ec4add858112448d"
  },
  {
    "url": "blog/skepticism/2018/04/15/nasa/index.html",
    "revision": "813df7e4e985328bd236d65b2b660ab7"
  },
  {
    "url": "blog/skepticism/2018/04/15/tapu/index.html",
    "revision": "14ecdf424571727736267a7da426fae7"
  },
  {
    "url": "blog/skepticism/2018/04/29/google/index.html",
    "revision": "ab19bbf7e1f1b625451d4ed45641d7a7"
  },
  {
    "url": "blog/skepticism/2018/04/29/homeopathy/index.html",
    "revision": "9aa02765e9df989be4ddb51f5829f832"
  },
  {
    "url": "blog/skepticism/2018/04/29/index.html",
    "revision": "36aa85f17b7916a16dea496dd5d7d12c"
  },
  {
    "url": "blog/skepticism/2018/04/29/ken/index.html",
    "revision": "687eb7be5d2300192b0076791eb09c1e"
  },
  {
    "url": "blog/skepticism/2018/04/29/v2k/index.html",
    "revision": "1c25c907a993ee377f7aa41b438d60e2"
  },
  {
    "url": "blog/skepticism/2018/04/index.html",
    "revision": "07e4b2dfef73bd74a3c57769ef6d437d"
  },
  {
    "url": "blog/skepticism/2018/05/13/astrology/index.html",
    "revision": "83478d5a3c4a6d50c8c9b3fab6db9ee5"
  },
  {
    "url": "blog/skepticism/2018/05/13/crystals/index.html",
    "revision": "968bb6e938f383214d7b07cbc9bc459a"
  },
  {
    "url": "blog/skepticism/2018/05/13/dawkins/index.html",
    "revision": "3e1df0399584f204608ac6625516e0ab"
  },
  {
    "url": "blog/skepticism/2018/05/13/index.html",
    "revision": "b0e0c934a2c3772168599dac8432e469"
  },
  {
    "url": "blog/skepticism/2018/05/13/kangen/index.html",
    "revision": "da5945a4101f5e63b04f3602cfb41f7c"
  },
  {
    "url": "blog/skepticism/2018/05/13/vitamins/index.html",
    "revision": "cedfb21b7ba272a38185a1518308fa7f"
  },
  {
    "url": "blog/skepticism/2018/05/27/flat/index.html",
    "revision": "0c86cc753a83fda9570e92b40e64192d"
  },
  {
    "url": "blog/skepticism/2018/05/27/index.html",
    "revision": "57858411440d29f92b4218fcd5f6e17b"
  },
  {
    "url": "blog/skepticism/2018/05/27/kangen/index.html",
    "revision": "e1c3005a6f894d42d2dfb56389dd3007"
  },
  {
    "url": "blog/skepticism/2018/05/27/ness/index.html",
    "revision": "1a9b94c4063781d630cb654c43346c05"
  },
  {
    "url": "blog/skepticism/2018/05/27/oz/index.html",
    "revision": "ee714a146d34dc2788b73c8e5c08d56a"
  },
  {
    "url": "blog/skepticism/2018/05/27/psychic/index.html",
    "revision": "3eeab3e9eeab2f70883df76288deb0ab"
  },
  {
    "url": "blog/skepticism/2018/05/index.html",
    "revision": "2b566f49341fefb5a1eb6498d66a7249"
  },
  {
    "url": "blog/skepticism/2018/06/10/astrology/index.html",
    "revision": "2b1706027ba0a078694858499913ce67"
  },
  {
    "url": "blog/skepticism/2018/06/10/index.html",
    "revision": "e5e97ed407bf0d2ea94b5a4c320f87c0"
  },
  {
    "url": "blog/skepticism/2018/06/10/nhs/index.html",
    "revision": "58f6d401be3f05a8f6e733719f0948e6"
  },
  {
    "url": "blog/skepticism/2018/06/10/shakti/index.html",
    "revision": "833b9511986ea99405973c77d00c176c"
  },
  {
    "url": "blog/skepticism/2018/06/10/weetbix/index.html",
    "revision": "c8d10327985f835eff1c44792e3b8996"
  },
  {
    "url": "blog/skepticism/2018/06/24/blasphemy/index.html",
    "revision": "c532b0cc0869f77ad437b79531942d56"
  },
  {
    "url": "blog/skepticism/2018/06/24/cannabis/index.html",
    "revision": "efbe6b69128a4f7f432deb9ec8bf5bb7"
  },
  {
    "url": "blog/skepticism/2018/06/24/hotdog/index.html",
    "revision": "4b1f336af8ee1bcf28c7d8be2c5e35ed"
  },
  {
    "url": "blog/skepticism/2018/06/24/index.html",
    "revision": "96a263a476e0e9752e1d9a8662ee2341"
  },
  {
    "url": "blog/skepticism/2018/06/24/led/index.html",
    "revision": "764c8edd8185cedbe7e0ab6394903747"
  },
  {
    "url": "blog/skepticism/2018/06/index.html",
    "revision": "be23a1395694c761bc6016817efe7122"
  },
  {
    "url": "blog/skepticism/2018/07/08/bullet/index.html",
    "revision": "98da91a1bb94c91970718bf8839f0f43"
  },
  {
    "url": "blog/skepticism/2018/07/08/chiros/index.html",
    "revision": "4f52b3c041644f4170c7ccd8c81606db"
  },
  {
    "url": "blog/skepticism/2018/07/08/hiv/index.html",
    "revision": "358138e1f7fb8e6744f2f2dec216af30"
  },
  {
    "url": "blog/skepticism/2018/07/08/hrv/index.html",
    "revision": "ce6dc459a6aa6ac56c861f3a6d9524a7"
  },
  {
    "url": "blog/skepticism/2018/07/08/index.html",
    "revision": "c89ac98677ce5613a8de50acc3d31120"
  },
  {
    "url": "blog/skepticism/2018/07/22/cancer/index.html",
    "revision": "9e3341c379038ab649c7709e42f2ed74"
  },
  {
    "url": "blog/skepticism/2018/07/22/index.html",
    "revision": "5ed2461482755c11f5a7a6a413954ceb"
  },
  {
    "url": "blog/skepticism/2018/07/22/resurrection/index.html",
    "revision": "dd6516289aeb13e5a65bc5db2ca67143"
  },
  {
    "url": "blog/skepticism/2018/07/22/talc/index.html",
    "revision": "aefb4ddccad5e1c112e42bef26cf31a9"
  },
  {
    "url": "blog/skepticism/2018/07/22/visas/index.html",
    "revision": "4efa4150f08aced4e9829b85b62c87e4"
  },
  {
    "url": "blog/skepticism/2018/07/index.html",
    "revision": "45f4cae58595a69c61da69234749b7e1"
  },
  {
    "url": "blog/skepticism/2018/08/05/conf/index.html",
    "revision": "32da3a5c6eeb88fa2e21a874d22208e8"
  },
  {
    "url": "blog/skepticism/2018/08/05/index.html",
    "revision": "a4543896708e42e7fdf5ba79e77096e1"
  },
  {
    "url": "blog/skepticism/2018/08/05/qanon/index.html",
    "revision": "d98753a7254ea8ef83ba460f944641be"
  },
  {
    "url": "blog/skepticism/2018/08/19/index.html",
    "revision": "e21da0eefcfbb07367b04c5673d3c35a"
  },
  {
    "url": "blog/skepticism/2018/08/19/jw/index.html",
    "revision": "ceffe1f1fbc74a7f85a8690c5d94aee1"
  },
  {
    "url": "blog/skepticism/2018/08/index.html",
    "revision": "b09efc7ec189db95c9f031fb60e9f419"
  },
  {
    "url": "blog/skepticism/2018/09/02/allergy/index.html",
    "revision": "cd4731fefbc72db62943447c8beba09e"
  },
  {
    "url": "blog/skepticism/2018/09/02/catholic/index.html",
    "revision": "a1859ccd0862cd8ef767d1a16993fdca"
  },
  {
    "url": "blog/skepticism/2018/09/02/index.html",
    "revision": "a8ddd66209b79551e5fbb1f839d3171c"
  },
  {
    "url": "blog/skepticism/2018/09/02/jw/index.html",
    "revision": "e5ebcddd63df13f001deec8d28f250f5"
  },
  {
    "url": "blog/skepticism/2018/09/02/sen/index.html",
    "revision": "1c7ed549ecef21e0467a98121fa2825b"
  },
  {
    "url": "blog/skepticism/2018/09/16/1080/index.html",
    "revision": "99e4cd22051f08d5c3da4eb7c879b29e"
  },
  {
    "url": "blog/skepticism/2018/09/16/church/index.html",
    "revision": "14db3f78d5ff2fe723499d596d9ed292"
  },
  {
    "url": "blog/skepticism/2018/09/16/index.html",
    "revision": "6296842761845d47d591ad8192eb6789"
  },
  {
    "url": "blog/skepticism/2018/09/16/jones/index.html",
    "revision": "26f5014727f71abc35f45e77f9f522ac"
  },
  {
    "url": "blog/skepticism/2018/09/16/scammers/index.html",
    "revision": "767a463c8c3ee2198ba6696369375148"
  },
  {
    "url": "blog/skepticism/2018/09/30/index.html",
    "revision": "8c51027eeb58553cce42cc4142f83487"
  },
  {
    "url": "blog/skepticism/2018/09/30/jw/index.html",
    "revision": "930e200935009e640595c8f874197e5e"
  },
  {
    "url": "blog/skepticism/2018/09/30/oto/index.html",
    "revision": "b4a9e5dcd9c7235c64c9b82d44c79416"
  },
  {
    "url": "blog/skepticism/2018/09/30/who/index.html",
    "revision": "41654e54711a80164364e77586d4755f"
  },
  {
    "url": "blog/skepticism/2018/09/index.html",
    "revision": "9d58f27be58dfe1c3ebf7617224d4d93"
  },
  {
    "url": "blog/skepticism/2018/10/14/hacked/index.html",
    "revision": "efd173dd94fac13edd0b196725fd676f"
  },
  {
    "url": "blog/skepticism/2018/10/14/index.html",
    "revision": "6e9a2fc3ffe3b4f35f28f980b144973f"
  },
  {
    "url": "blog/skepticism/2018/10/14/kangen/index.html",
    "revision": "e19150f05f69769721098cbb124db5f9"
  },
  {
    "url": "blog/skepticism/2018/10/14/pakistan/index.html",
    "revision": "f5be6a47e4bfd9cb26a64963c0f86f62"
  },
  {
    "url": "blog/skepticism/2018/10/14/sarah/index.html",
    "revision": "d3186cc9e1cfc849e215c606e903c2da"
  },
  {
    "url": "blog/skepticism/2018/10/28/blasphemy/index.html",
    "revision": "ad10562ee809aa4431b1bffadb2ada8a"
  },
  {
    "url": "blog/skepticism/2018/10/28/hrv/index.html",
    "revision": "cddcb3b81a306d3fc3a445b9cdc813de"
  },
  {
    "url": "blog/skepticism/2018/10/28/index.html",
    "revision": "1600c14f4e723d3fece4ca0bc8f4a95f"
  },
  {
    "url": "blog/skepticism/2018/10/28/jesus/index.html",
    "revision": "cbe3c8329f638fcc38d01e601afe08c2"
  },
  {
    "url": "blog/skepticism/2018/10/28/natural/index.html",
    "revision": "6f11b1b34ec8667fa49b7dcbcfe86830"
  },
  {
    "url": "blog/skepticism/2018/10/index.html",
    "revision": "775d18ac8099cd4f68d7df211a2d87cf"
  },
  {
    "url": "blog/skepticism/2018/11/04/bibi/index.html",
    "revision": "a5c03e5d929aa9bf0f9d7222daaf0bb2"
  },
  {
    "url": "blog/skepticism/2018/11/04/index.html",
    "revision": "b598a1563917938ebbe4ec896ae6706b"
  },
  {
    "url": "blog/skepticism/2018/11/04/jesus/index.html",
    "revision": "a1d58309957ea3fe4e043c521be4822a"
  },
  {
    "url": "blog/skepticism/2018/11/04/obdii/index.html",
    "revision": "a5558edcccc4e44e52d0043e5edc74f1"
  },
  {
    "url": "blog/skepticism/2018/11/04/sleepdrops/index.html",
    "revision": "28b11671cf9340c3d0572f9b0e9a657e"
  },
  {
    "url": "blog/skepticism/2018/11/index.html",
    "revision": "7c1c107a818a44532b0faf053eb052e3"
  },
  {
    "url": "blog/skepticism/2018/12/02/ark/index.html",
    "revision": "2f97b4354585b091790b674e10b2df01"
  },
  {
    "url": "blog/skepticism/2018/12/02/green/index.html",
    "revision": "6bc1cf3196e9a5be2a2fe870baa475d3"
  },
  {
    "url": "blog/skepticism/2018/12/02/index.html",
    "revision": "b3dea891988cbece0be9a7f05988e901"
  },
  {
    "url": "blog/skepticism/2018/12/02/ri/index.html",
    "revision": "5d7fa85944e1c3dcb1561ae4e7b1cf9d"
  },
  {
    "url": "blog/skepticism/2018/12/16/blasphemy/index.html",
    "revision": "9a2d2953f9b26044680b97a3ded6da70"
  },
  {
    "url": "blog/skepticism/2018/12/16/index.html",
    "revision": "bc22e288829c0a3a8e8605a074bb81f7"
  },
  {
    "url": "blog/skepticism/2018/12/16/sleepdrops/index.html",
    "revision": "f1d3a56d6b12b45c3224587a5838e59d"
  },
  {
    "url": "blog/skepticism/2018/12/16/tekiri/index.html",
    "revision": "a7613635f599704811fde9e2d4135931"
  },
  {
    "url": "blog/skepticism/2018/12/index.html",
    "revision": "48aedcad6bc9866e0992f13a95bf67f8"
  },
  {
    "url": "blog/skepticism/2018/index.html",
    "revision": "af214b6c670a79cb5bf16b9290ef2a1a"
  },
  {
    "url": "blog/skepticism/2020/08/18/index.html",
    "revision": "df72d7bf02f2b85a690b154aaff0e052"
  },
  {
    "url": "blog/skepticism/2020/08/18/myths/index.html",
    "revision": "14f7daaad38b8ee1a6412b964f810084"
  },
  {
    "url": "blog/skepticism/2020/08/index.html",
    "revision": "9a63b77d717eb01a16075f514ea6e10e"
  },
  {
    "url": "blog/skepticism/2020/index.html",
    "revision": "f9028381dd881cbd5ac38012b830eb14"
  },
  {
    "url": "blog/skepticism/index.html",
    "revision": "7a374dd4666b918b412549d0963c6eb0"
  },
  {
    "url": "blog/tag/index.html",
    "revision": "6cbf24e28fc72d85afde68ab78860450"
  },
  {
    "url": "contact/index.html",
    "revision": "faa195456c0f93f45580d1235f95bcfb"
  },
  {
    "url": "cv/cover/index.html",
    "revision": "17383ba3633e2bacaab08da5d7844fca"
  },
  {
    "url": "cv/full.html",
    "revision": "15a573cea80fdcc7581a32b294cb1bb3"
  },
  {
    "url": "cv/full/index.html",
    "revision": "fe54c20c58a73feeb92288bdc43626f5"
  },
  {
    "url": "cv/index.html",
    "revision": "62990e3cbc6c304bd6bf9c3b73cf3b43"
  },
  {
    "url": "cv/short.html",
    "revision": "5b04585e1f331eaa2c4a11f877d07c94"
  },
  {
    "url": "googlee25d0c06da891164.html",
    "revision": "0defe75660212f417b90c5affcd03380"
  },
  {
    "url": "index.html",
    "revision": "9acb2c8fc5fb8ebfe47675cd6af3b941"
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
    "revision": "a309a852b378bb1f50583a59a84facec"
  },
  {
    "url": "media/me/index.html",
    "revision": "e7245eb21afb2490745ed60e864384ea"
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
    "revision": "555bd578010877888f9941d10d384392"
  },
  {
    "url": "status/index.html",
    "revision": "37cbf9d5249ce80660121de291a2abd6"
  },
  {
    "url": "status/steam/index.html",
    "revision": "0d431172ba57bc6e925f7d91d90a8fc4"
  },
  {
    "url": "status/twitter/index.html",
    "revision": "0d78ca0a6a59aef062841cb9052185f2"
  },
  {
    "url": "status/wikipedia/index.html",
    "revision": "1295c53ed8c21d34a2ffdcb3130c2647"
  },
  {
    "url": "test/index.html",
    "revision": "a15fabe637dbf1841bb0e729e59d5e13"
  },
  {
    "url": "test/webcam/index.html",
    "revision": "8b5769aa95c4ef406f3383234dd6f9aa"
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
