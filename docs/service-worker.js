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
    "revision": "66060af79044fb3d7621a32a862987ec"
  },
  {
    "url": "assets/css/0.styles.css",
    "revision": "e1380a4040acbc54c2c6a7603d3f5bd9"
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
    "revision": "8bb4a268794525d60f6fa55cf45f42ac"
  },
  {
    "url": "assets/js/10.js",
    "revision": "f3f3c97b769d09976d3f807b086f7d9a"
  },
  {
    "url": "assets/js/100.js",
    "revision": "648bf089c968e2499190c5fe00a8a776"
  },
  {
    "url": "assets/js/101.js",
    "revision": "315455b7135c04117a15b459a3ac48dc"
  },
  {
    "url": "assets/js/102.js",
    "revision": "a150722d9653761be2c572a9861d0c47"
  },
  {
    "url": "assets/js/103.js",
    "revision": "07211ed9dc866d862c925925a1fc238e"
  },
  {
    "url": "assets/js/104.js",
    "revision": "8559f4d18a1cad13e5ceeab29df51b48"
  },
  {
    "url": "assets/js/105.js",
    "revision": "8ae86c6013889b5c1f8352e4d3036ea6"
  },
  {
    "url": "assets/js/106.js",
    "revision": "0f08c3ff31ce20a9395d1d57669b831d"
  },
  {
    "url": "assets/js/107.js",
    "revision": "9ac4c56daa7761bd221e6b86b056803b"
  },
  {
    "url": "assets/js/108.js",
    "revision": "a0ec02811f116605f73495c60a591b27"
  },
  {
    "url": "assets/js/109.js",
    "revision": "4375264fe2c159a4fa8b03e483e8b6db"
  },
  {
    "url": "assets/js/11.js",
    "revision": "3937546f5266c97148890085253bfbb3"
  },
  {
    "url": "assets/js/110.js",
    "revision": "b2b7d9fb279803fd567495454c878511"
  },
  {
    "url": "assets/js/111.js",
    "revision": "5e6bf6f94fd8c287da104f21cdb915b1"
  },
  {
    "url": "assets/js/112.js",
    "revision": "7461d2b8a169148a6830464e1089416a"
  },
  {
    "url": "assets/js/113.js",
    "revision": "bb0ae81f3768cb74d6ac060eb9868a50"
  },
  {
    "url": "assets/js/114.js",
    "revision": "bfd1dfb1abea81a0b1f020a5e9f3ba38"
  },
  {
    "url": "assets/js/115.js",
    "revision": "2c71d03f692fb0f4e7a6135adb8d2350"
  },
  {
    "url": "assets/js/116.js",
    "revision": "661e49d346c2228c8f1d3b5d1bc83c12"
  },
  {
    "url": "assets/js/117.js",
    "revision": "ab572791b528be3f270dec5d30e90edf"
  },
  {
    "url": "assets/js/118.js",
    "revision": "41838312bd56c95d919d2374b5655268"
  },
  {
    "url": "assets/js/119.js",
    "revision": "18f222c7c4acc7669f0aafbd914eb2a9"
  },
  {
    "url": "assets/js/12.js",
    "revision": "4cb14a1a1352a98a4b6a1fb186937a66"
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
    "revision": "f1fd00a2a5bebe47c64eb5b3b36a469a"
  },
  {
    "url": "assets/js/123.js",
    "revision": "42d87f49b3ea8dca40c58f499549cd00"
  },
  {
    "url": "assets/js/124.js",
    "revision": "867d612cbe524a454212b54d1ab66316"
  },
  {
    "url": "assets/js/125.js",
    "revision": "1d9c2896bd86ac8ff546ce2f222764d5"
  },
  {
    "url": "assets/js/126.js",
    "revision": "a9f82b173c8a07a3ce689246bc0a5117"
  },
  {
    "url": "assets/js/127.js",
    "revision": "096d412bafb4055cb654c52361d39aa5"
  },
  {
    "url": "assets/js/128.js",
    "revision": "9043c35f1c28caaf8e2d864650123f1d"
  },
  {
    "url": "assets/js/129.js",
    "revision": "fb9fe3200b236b7b85cb95760cfb36bb"
  },
  {
    "url": "assets/js/13.js",
    "revision": "2535488772200544dd613fe90fb03655"
  },
  {
    "url": "assets/js/130.js",
    "revision": "cd5a2518e2dda9aff5c9a0566ec01b6c"
  },
  {
    "url": "assets/js/131.js",
    "revision": "e83b0b90bf564c30072aa7bbe01bb24e"
  },
  {
    "url": "assets/js/132.js",
    "revision": "eb51ebf942a2eedafbea0984ab1de20a"
  },
  {
    "url": "assets/js/133.js",
    "revision": "0796cd1723dd6ca3b20575e1cf292fb8"
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
    "revision": "f1f1bdfe93f49de101064d9230e77f95"
  },
  {
    "url": "assets/js/137.js",
    "revision": "8c299ce43f3f11c3d31f5220e6e524ad"
  },
  {
    "url": "assets/js/138.js",
    "revision": "43b99c74c21bdec285149e7107d9b0e9"
  },
  {
    "url": "assets/js/139.js",
    "revision": "f0fe078a4e4182a892896c7f458e0116"
  },
  {
    "url": "assets/js/14.js",
    "revision": "df0582a333ccd37507dd148c5d6e1526"
  },
  {
    "url": "assets/js/140.js",
    "revision": "a108613bace8c75c3558bc2bf2959e63"
  },
  {
    "url": "assets/js/141.js",
    "revision": "25e6c2dac0d839b152ca57afb0243a8a"
  },
  {
    "url": "assets/js/142.js",
    "revision": "50ab90e420d9adb8cb62ff35f7931d75"
  },
  {
    "url": "assets/js/143.js",
    "revision": "004ff680c69b5f895145fe39435e70a3"
  },
  {
    "url": "assets/js/144.js",
    "revision": "18a8c583bbe2c4690e6dcc6508a7f6c9"
  },
  {
    "url": "assets/js/145.js",
    "revision": "b4cedf75c8e89775b133bb2397adf9b9"
  },
  {
    "url": "assets/js/146.js",
    "revision": "49232bd666111007c96830952b1a6cec"
  },
  {
    "url": "assets/js/147.js",
    "revision": "7e97c89198564e526f46c3ec48d5106b"
  },
  {
    "url": "assets/js/148.js",
    "revision": "9de095a9bb18e2961ca06ef374eb2cf4"
  },
  {
    "url": "assets/js/149.js",
    "revision": "94f0b156dc505892086be5f6f54293da"
  },
  {
    "url": "assets/js/15.js",
    "revision": "cc94f64471e212140cfd6ad853bb030f"
  },
  {
    "url": "assets/js/150.js",
    "revision": "33b9090e2557f14d7c29dcfcbf1ba818"
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
    "revision": "37c009b252cbc7afd99abfd66a291eb3"
  },
  {
    "url": "assets/js/154.js",
    "revision": "2ea0b0930309336bffbd7a2bd02d40a5"
  },
  {
    "url": "assets/js/155.js",
    "revision": "17d27df06f046743335c61b202aa2f0c"
  },
  {
    "url": "assets/js/156.js",
    "revision": "2b42c3bd212b1f1e3e38ed250b84cefb"
  },
  {
    "url": "assets/js/157.js",
    "revision": "f9af59f81bc795b17428ba97c2d58eb8"
  },
  {
    "url": "assets/js/158.js",
    "revision": "c5aac7a117b29b736f7d9444041f5f42"
  },
  {
    "url": "assets/js/159.js",
    "revision": "8b3efc3f6694962443128a3f8b914e6c"
  },
  {
    "url": "assets/js/16.js",
    "revision": "6728c64be037406307bd2d7fd9e2af36"
  },
  {
    "url": "assets/js/160.js",
    "revision": "3e0af1b01b27d1609fe82925b02e0724"
  },
  {
    "url": "assets/js/161.js",
    "revision": "1cf56d18510909ed34404b24b2d2df0e"
  },
  {
    "url": "assets/js/162.js",
    "revision": "9ae0fcc98528128e44df83156f3b8dd8"
  },
  {
    "url": "assets/js/163.js",
    "revision": "3800a75e997e19c5f861f382b077cf17"
  },
  {
    "url": "assets/js/164.js",
    "revision": "bc9936b276ff5efc8d6abc098938ff54"
  },
  {
    "url": "assets/js/165.js",
    "revision": "0e4e63ccc72f428f46c316976c702674"
  },
  {
    "url": "assets/js/166.js",
    "revision": "52829610f2b09700cdbf62234fc8b928"
  },
  {
    "url": "assets/js/167.js",
    "revision": "871dcdcc40abf9c2f92b4e7215de0497"
  },
  {
    "url": "assets/js/168.js",
    "revision": "80bbd2c8a63b47e22da68507edff1199"
  },
  {
    "url": "assets/js/169.js",
    "revision": "d04b56f36fe478b7ea16aa1ab0218f3b"
  },
  {
    "url": "assets/js/17.js",
    "revision": "778c79e54fcff9bc000dc0f435f43d8f"
  },
  {
    "url": "assets/js/170.js",
    "revision": "2a2fb2ec09ee6873ff01612c580c14ef"
  },
  {
    "url": "assets/js/171.js",
    "revision": "44cc9d40d3d34e0ac933140f3e3cc9b5"
  },
  {
    "url": "assets/js/172.js",
    "revision": "16ec7fa00e937d8ba33f8cbcf878698b"
  },
  {
    "url": "assets/js/173.js",
    "revision": "326d5fe30426a210f84d38afed4202fd"
  },
  {
    "url": "assets/js/174.js",
    "revision": "18bb3b366f14619d446f1da228fed2f0"
  },
  {
    "url": "assets/js/175.js",
    "revision": "11db1ffb7919306e38d40efa4da2bb00"
  },
  {
    "url": "assets/js/176.js",
    "revision": "f863689a4dd20067834262832c286b94"
  },
  {
    "url": "assets/js/177.js",
    "revision": "e4e06057b6130dc276aa1cf9e056b316"
  },
  {
    "url": "assets/js/178.js",
    "revision": "2afd57bb735a52cf34376fdeeaf6da0b"
  },
  {
    "url": "assets/js/179.js",
    "revision": "017ef71d9f717a57db89edfe241f272b"
  },
  {
    "url": "assets/js/18.js",
    "revision": "ac67bb1fb0cc612cd3922377aacfd339"
  },
  {
    "url": "assets/js/180.js",
    "revision": "04fd65ca036fdade96ef00501e222e85"
  },
  {
    "url": "assets/js/181.js",
    "revision": "1fcae331a1bc237ed040e9b735e484c8"
  },
  {
    "url": "assets/js/182.js",
    "revision": "16d6f176709eaf2f78446c2dd9ecc556"
  },
  {
    "url": "assets/js/183.js",
    "revision": "9a565f1c1bbab2db17d229365c35930d"
  },
  {
    "url": "assets/js/184.js",
    "revision": "7cfb13a9cafc6460888d82f4663bfceb"
  },
  {
    "url": "assets/js/185.js",
    "revision": "89efe363f00fa3dfae890a18f7406dfa"
  },
  {
    "url": "assets/js/186.js",
    "revision": "7eaa76d58fdfcb1995a76ffea2afb258"
  },
  {
    "url": "assets/js/187.js",
    "revision": "ee3156036d5b33c57185ce81b2685a15"
  },
  {
    "url": "assets/js/188.js",
    "revision": "c3c5b7dba9dbcbee0f0aa762923af2ce"
  },
  {
    "url": "assets/js/189.js",
    "revision": "2a151d99d18d965b3bd2ba2881666f0c"
  },
  {
    "url": "assets/js/19.js",
    "revision": "d0234d033d4e773d55f43168bd29a099"
  },
  {
    "url": "assets/js/190.js",
    "revision": "7eded0dfab2d9a89d2f466b1c3f7100e"
  },
  {
    "url": "assets/js/191.js",
    "revision": "3b6cee11043d52f3c9cd9ccb0d747180"
  },
  {
    "url": "assets/js/192.js",
    "revision": "9ee53694c7014931f4ca1822f96896b7"
  },
  {
    "url": "assets/js/193.js",
    "revision": "34fddb42589dba2c3c5fd5049f2422cc"
  },
  {
    "url": "assets/js/194.js",
    "revision": "c025337f8fc84a2ade63a467d10a8677"
  },
  {
    "url": "assets/js/195.js",
    "revision": "760541ea52815ef18c46565f557aa2f4"
  },
  {
    "url": "assets/js/196.js",
    "revision": "3660cc228546d631cbacb2fae70ea85b"
  },
  {
    "url": "assets/js/197.js",
    "revision": "3321f97fa429a1b92d8bd04c684f47f0"
  },
  {
    "url": "assets/js/198.js",
    "revision": "aa84e80f3a18c9ca568c05f5f3b097e2"
  },
  {
    "url": "assets/js/199.js",
    "revision": "26be1b3b06d93d07f10337fada445274"
  },
  {
    "url": "assets/js/2.js",
    "revision": "a4154b43cbd282c135ae4d6999507fc1"
  },
  {
    "url": "assets/js/20.js",
    "revision": "5ed475855eeb7023d8ca03f1810311fb"
  },
  {
    "url": "assets/js/200.js",
    "revision": "d351e9f1cc52fe93fb7c94d9ac02d12c"
  },
  {
    "url": "assets/js/201.js",
    "revision": "7de91d5294ec6e1a898474209051a601"
  },
  {
    "url": "assets/js/202.js",
    "revision": "80a9b857e562c806bacab8fb9f2844f7"
  },
  {
    "url": "assets/js/203.js",
    "revision": "eae0328d1baea24b5456b3d90133040d"
  },
  {
    "url": "assets/js/204.js",
    "revision": "4fbedaf3c2d55aa8c0d03f0d4cd2ca31"
  },
  {
    "url": "assets/js/205.js",
    "revision": "e40fbf622fee6ab935d2b892b20162e7"
  },
  {
    "url": "assets/js/206.js",
    "revision": "8ad8f78ed4356b840439ac268821609d"
  },
  {
    "url": "assets/js/207.js",
    "revision": "589bd2e3d29a0b67313e336ab670507e"
  },
  {
    "url": "assets/js/208.js",
    "revision": "356f80b160c3a04b83dd3c71cfbf89cc"
  },
  {
    "url": "assets/js/209.js",
    "revision": "e16c5a0b1a9f08800ff4944a115bd0cd"
  },
  {
    "url": "assets/js/21.js",
    "revision": "8dd029c0648b7b52c0f7bc8f0ed5be49"
  },
  {
    "url": "assets/js/210.js",
    "revision": "d73bdfe64212219927df27e4700c63c2"
  },
  {
    "url": "assets/js/211.js",
    "revision": "fa61440d37e4df1b139775b934441ca9"
  },
  {
    "url": "assets/js/212.js",
    "revision": "189d23fa9d1c42fffbc05d4230a7b014"
  },
  {
    "url": "assets/js/213.js",
    "revision": "3a552dae33b4fc1cec67e1619c7f53cc"
  },
  {
    "url": "assets/js/214.js",
    "revision": "20f3c5047895cf41fa20fc148f7fc2a6"
  },
  {
    "url": "assets/js/215.js",
    "revision": "f8272cf6d6bd17a06315e1570fb2f9ee"
  },
  {
    "url": "assets/js/216.js",
    "revision": "4c8f0969a7eb91f0141f1f8832ac0753"
  },
  {
    "url": "assets/js/217.js",
    "revision": "927a2d5180946f54ef31d8d2dd85f4d3"
  },
  {
    "url": "assets/js/218.js",
    "revision": "7285513dd3265326e296788c34dc16d5"
  },
  {
    "url": "assets/js/219.js",
    "revision": "2e5627e0e335cb186ce42bddd2750a5b"
  },
  {
    "url": "assets/js/22.js",
    "revision": "de897858c5fcd456a12d784e4d104426"
  },
  {
    "url": "assets/js/220.js",
    "revision": "cd52823a7bddefa8a18c3b0d87f1db26"
  },
  {
    "url": "assets/js/221.js",
    "revision": "56f9367459537e5b9e1f836c5d1572f0"
  },
  {
    "url": "assets/js/222.js",
    "revision": "11d21ab51c0566913abb8f8936613bf6"
  },
  {
    "url": "assets/js/223.js",
    "revision": "bae8f71f58a6b98f58cdb94bb6c651bd"
  },
  {
    "url": "assets/js/224.js",
    "revision": "11df1cdc8fc837c4f9d036dcd82d7206"
  },
  {
    "url": "assets/js/225.js",
    "revision": "5b5c7490fd15c680c262121e1bc944ec"
  },
  {
    "url": "assets/js/226.js",
    "revision": "2b2bd34e02aac53a9e80760bf2ba6faa"
  },
  {
    "url": "assets/js/227.js",
    "revision": "fd5ebe1c8d1694440822ac9578ced438"
  },
  {
    "url": "assets/js/228.js",
    "revision": "386085e11ea15a2ba08b62d08e49201b"
  },
  {
    "url": "assets/js/229.js",
    "revision": "b8bd4579e640e1ef456adf7acf35a194"
  },
  {
    "url": "assets/js/23.js",
    "revision": "9689b10f3f5f34ecba46b203749fbe5c"
  },
  {
    "url": "assets/js/230.js",
    "revision": "81cf790a65ce82f75e55ea6cfcf87e42"
  },
  {
    "url": "assets/js/231.js",
    "revision": "b93d7eb61d57c85067900d65e5cbbfd6"
  },
  {
    "url": "assets/js/232.js",
    "revision": "5305984a4022d3bf20c48f131cb26844"
  },
  {
    "url": "assets/js/233.js",
    "revision": "ae9a6ba74d21088e4e57cf51fb32436a"
  },
  {
    "url": "assets/js/234.js",
    "revision": "76ef90f3ea4483af10a62e044e107bde"
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
    "revision": "144d08e93af83b2cf909b72cd0bdabf1"
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
    "revision": "a26bb7f2793fe54a384bb1a52c0b78a8"
  },
  {
    "url": "assets/js/240.js",
    "revision": "19b56349756ad683f806903f25547ca5"
  },
  {
    "url": "assets/js/241.js",
    "revision": "d1a98cf1ad852c32c8be222d86c52a66"
  },
  {
    "url": "assets/js/242.js",
    "revision": "7fa2e1e3d7892c9a8af1e6d762dae0a3"
  },
  {
    "url": "assets/js/243.js",
    "revision": "66bd35fb1e5b200449948c1463a5ef40"
  },
  {
    "url": "assets/js/244.js",
    "revision": "900fa4cbfef58dd1f07a68cf34c0490b"
  },
  {
    "url": "assets/js/245.js",
    "revision": "dc271b1b13889deec0573b4e021d46d2"
  },
  {
    "url": "assets/js/246.js",
    "revision": "7134f37367fe48406d5eea3cf45d229d"
  },
  {
    "url": "assets/js/247.js",
    "revision": "f48727043276ca0f4389a78de1291dfc"
  },
  {
    "url": "assets/js/248.js",
    "revision": "569957f016cb174dde2a8847ecee9c26"
  },
  {
    "url": "assets/js/249.js",
    "revision": "ce016c91b6bf21bf4c874b3391c20878"
  },
  {
    "url": "assets/js/25.js",
    "revision": "6bad3e796f1304a0eeebab9cb98922e4"
  },
  {
    "url": "assets/js/250.js",
    "revision": "0b11bb8af1ff7e27608b21f8680f9daa"
  },
  {
    "url": "assets/js/251.js",
    "revision": "4d745825e582dad77dabe9c77ba35531"
  },
  {
    "url": "assets/js/252.js",
    "revision": "46f6fe740880c58e380677f3f5330b2c"
  },
  {
    "url": "assets/js/253.js",
    "revision": "2c9b1ae563dea59debf656a1ca4b60dd"
  },
  {
    "url": "assets/js/254.js",
    "revision": "d60186d0fcbb9ec7fb173adddec0fa50"
  },
  {
    "url": "assets/js/255.js",
    "revision": "375c34683c4be54ea95b4c4e5ed0e340"
  },
  {
    "url": "assets/js/256.js",
    "revision": "2f859f7cc58881477748f2dce199991e"
  },
  {
    "url": "assets/js/257.js",
    "revision": "606ce46483586a44b75db47a57ec421d"
  },
  {
    "url": "assets/js/258.js",
    "revision": "780a07b14f5fb25c9a00155a6800d266"
  },
  {
    "url": "assets/js/259.js",
    "revision": "9341595a9d5553e46720ddbd34687c9e"
  },
  {
    "url": "assets/js/26.js",
    "revision": "ed77c797354f52ad6c7c0a38f1a32ff1"
  },
  {
    "url": "assets/js/260.js",
    "revision": "5f5119e705c9f5f645b339686d4ca63c"
  },
  {
    "url": "assets/js/261.js",
    "revision": "268a6f90dbf11ce0550c644af2c8c8c8"
  },
  {
    "url": "assets/js/262.js",
    "revision": "469f6282be7972c12b479cc955ebf3e4"
  },
  {
    "url": "assets/js/263.js",
    "revision": "ca3890e0c518dc5d16190e26a8eefcbf"
  },
  {
    "url": "assets/js/264.js",
    "revision": "72aa9697927a066d3f57425f7c217f52"
  },
  {
    "url": "assets/js/265.js",
    "revision": "940222f64e4d43d609ef45fad93807c8"
  },
  {
    "url": "assets/js/266.js",
    "revision": "fee143abb6b06181d5f5c080297010dc"
  },
  {
    "url": "assets/js/267.js",
    "revision": "1b546c2eec64846be970d2c0cc193310"
  },
  {
    "url": "assets/js/268.js",
    "revision": "59579aa452967f698420acbdac47c8b3"
  },
  {
    "url": "assets/js/269.js",
    "revision": "ab34fc3dd049fed5947edb5252377a50"
  },
  {
    "url": "assets/js/27.js",
    "revision": "b0000c6b34ded0685e3aeca758cc1bc4"
  },
  {
    "url": "assets/js/270.js",
    "revision": "5d529e8bf4e4c25bc7c5b7e6e21f8243"
  },
  {
    "url": "assets/js/271.js",
    "revision": "bfe05791ea837699bf478e83422c76b1"
  },
  {
    "url": "assets/js/272.js",
    "revision": "210459634d62b9863bb832e66d32ce65"
  },
  {
    "url": "assets/js/273.js",
    "revision": "876e1bb74ca7b046e840c09502548cf4"
  },
  {
    "url": "assets/js/274.js",
    "revision": "b22f329a5854a251664ea3961236825e"
  },
  {
    "url": "assets/js/275.js",
    "revision": "91127cb0e625a9219c08d06351c7e16c"
  },
  {
    "url": "assets/js/276.js",
    "revision": "4854c6273fccdeca1c8594fb21a7acd9"
  },
  {
    "url": "assets/js/277.js",
    "revision": "737d8695dd052149521b186e7bd79b41"
  },
  {
    "url": "assets/js/278.js",
    "revision": "10dcb71ae046413c4feab218d2e8182c"
  },
  {
    "url": "assets/js/279.js",
    "revision": "619113e7b7c0c9fbcd460406de8d74c8"
  },
  {
    "url": "assets/js/28.js",
    "revision": "1a063afefb27f06bc63ec12905bc1e2e"
  },
  {
    "url": "assets/js/280.js",
    "revision": "4c3661a528f41ebee0431fd641c6b613"
  },
  {
    "url": "assets/js/281.js",
    "revision": "41c9a83fffc3199a7884e7f684a518b7"
  },
  {
    "url": "assets/js/282.js",
    "revision": "ab622cc55fb4e2f280c9f2c3641e17ec"
  },
  {
    "url": "assets/js/283.js",
    "revision": "a79bbcbefc9fc5df42dfe0e126e6a7dd"
  },
  {
    "url": "assets/js/284.js",
    "revision": "482343217af270826815e39392cc527e"
  },
  {
    "url": "assets/js/285.js",
    "revision": "b79985f96f379f4e062c48196e0d1eea"
  },
  {
    "url": "assets/js/286.js",
    "revision": "be1ded8f0f62459dfbf1cc7e73760959"
  },
  {
    "url": "assets/js/287.js",
    "revision": "4d37954893de010b9ef88d6ef3764c99"
  },
  {
    "url": "assets/js/288.js",
    "revision": "264fd56ecde83d47a9f446bedb2f47c8"
  },
  {
    "url": "assets/js/289.js",
    "revision": "24ac5de321f5845002df0dc83f66f3d9"
  },
  {
    "url": "assets/js/29.js",
    "revision": "77316cd3f53f0fdf1a770148b767ae10"
  },
  {
    "url": "assets/js/290.js",
    "revision": "594eeb1b2c410ff74584ad9bfcd51628"
  },
  {
    "url": "assets/js/291.js",
    "revision": "af004f42daba413fb1543dae081281e4"
  },
  {
    "url": "assets/js/292.js",
    "revision": "ac67d37d7e42ae12034a9aa83c72e380"
  },
  {
    "url": "assets/js/293.js",
    "revision": "0a7856e719961eb96372d2e0937c1733"
  },
  {
    "url": "assets/js/294.js",
    "revision": "c6f422d525aeb7f4fbe2926e1e017905"
  },
  {
    "url": "assets/js/295.js",
    "revision": "b760e12ceee2c13f6bddd13e60ca63b1"
  },
  {
    "url": "assets/js/296.js",
    "revision": "55401286434797cda1d7324c22a5efe4"
  },
  {
    "url": "assets/js/297.js",
    "revision": "87be1c88ab1fe47217098ed461efc434"
  },
  {
    "url": "assets/js/298.js",
    "revision": "d75c65eea9f2a44fb240064b07efe3a2"
  },
  {
    "url": "assets/js/299.js",
    "revision": "c2fe199e8f79724820f26c1d6a57b618"
  },
  {
    "url": "assets/js/3.js",
    "revision": "5584ba156839442d6d21b283fff59f8d"
  },
  {
    "url": "assets/js/30.js",
    "revision": "63c2553808adade4facefbaba12bcd20"
  },
  {
    "url": "assets/js/300.js",
    "revision": "a17d43f36efd39394c72249ff37e63f8"
  },
  {
    "url": "assets/js/301.js",
    "revision": "7590abc873f61527ea5941b742119f23"
  },
  {
    "url": "assets/js/302.js",
    "revision": "33de18c870dfff10543a6c921f3f4ee0"
  },
  {
    "url": "assets/js/303.js",
    "revision": "444ba41671c2efd4d59edcb349946d37"
  },
  {
    "url": "assets/js/304.js",
    "revision": "0740a84be3b7df1f6f00dd27167a7d46"
  },
  {
    "url": "assets/js/305.js",
    "revision": "3481e31d6732a42993fd0b611fbf1945"
  },
  {
    "url": "assets/js/306.js",
    "revision": "289d5c02f7b1625221c82a3760cb86bb"
  },
  {
    "url": "assets/js/307.js",
    "revision": "94a1cbd4522e7723d8f539397dc5eb07"
  },
  {
    "url": "assets/js/308.js",
    "revision": "f8e36da0df5f1586660dd05553107ae3"
  },
  {
    "url": "assets/js/309.js",
    "revision": "72881d8083521bcd56b9064287efd2fa"
  },
  {
    "url": "assets/js/31.js",
    "revision": "40d7edd3282ab2c2b2334253efb1be90"
  },
  {
    "url": "assets/js/310.js",
    "revision": "5574526b129c1081200662e40d26f5fa"
  },
  {
    "url": "assets/js/311.js",
    "revision": "6bbace4d6e1966f5d09f08e762a2bd30"
  },
  {
    "url": "assets/js/312.js",
    "revision": "8c6da406aaa8a4a275be4a880c63b9e1"
  },
  {
    "url": "assets/js/313.js",
    "revision": "359c3489144aaffe5d491bf9b7f1db6c"
  },
  {
    "url": "assets/js/314.js",
    "revision": "f69d983064846b4085cf69a4e0964fe8"
  },
  {
    "url": "assets/js/315.js",
    "revision": "899bac557de374522b82acee7f0dd7ec"
  },
  {
    "url": "assets/js/316.js",
    "revision": "6646a7562ff54781ad3fb8029b7bb256"
  },
  {
    "url": "assets/js/317.js",
    "revision": "f4e08498e056bc69e8d1af9019d20d17"
  },
  {
    "url": "assets/js/318.js",
    "revision": "c99260dfd89e5ec07d74a89f16dc79f6"
  },
  {
    "url": "assets/js/319.js",
    "revision": "b738a8608b1b704df6fb6159de0eefc6"
  },
  {
    "url": "assets/js/32.js",
    "revision": "861e89dad36e8b1135fd1b8879f13619"
  },
  {
    "url": "assets/js/320.js",
    "revision": "0a6b4a8464da1d87a436678ec71c252c"
  },
  {
    "url": "assets/js/321.js",
    "revision": "089aa1b7c9db44c44b1e0c79e9f345f7"
  },
  {
    "url": "assets/js/322.js",
    "revision": "06d47b4e545fb0936c952e6ba018309c"
  },
  {
    "url": "assets/js/323.js",
    "revision": "687063d832db8e6ce9ef9eed92b4a8f4"
  },
  {
    "url": "assets/js/324.js",
    "revision": "626085b5e046ac8864cd0267c7e8ee0d"
  },
  {
    "url": "assets/js/325.js",
    "revision": "ed9656dbd3fc8009952c46c8607888b2"
  },
  {
    "url": "assets/js/326.js",
    "revision": "fdca33bb2f1288e05eca2f33a5986341"
  },
  {
    "url": "assets/js/327.js",
    "revision": "4b85faae045b3ac41c0dc34919b0c5a3"
  },
  {
    "url": "assets/js/328.js",
    "revision": "741f954f9f63361139083dae503e04ef"
  },
  {
    "url": "assets/js/329.js",
    "revision": "0b8e11e206bb6359ad7e41fa4fdb3a98"
  },
  {
    "url": "assets/js/33.js",
    "revision": "16f627c755f1dffac848afb101fb5e8e"
  },
  {
    "url": "assets/js/330.js",
    "revision": "fda9ea2bc8e40929d3aa7441f4cc2a22"
  },
  {
    "url": "assets/js/331.js",
    "revision": "d67f048535fc86fabab962b96b1bb736"
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
    "revision": "363a443e35b667746ec02412d89602d0"
  },
  {
    "url": "assets/js/337.js",
    "revision": "b72674374959668b80a4d692d557ed03"
  },
  {
    "url": "assets/js/338.js",
    "revision": "885c4a750ad2cd42cf34578f92252f96"
  },
  {
    "url": "assets/js/339.js",
    "revision": "62d9d55dcce4edb909aab6fd5e8df5e5"
  },
  {
    "url": "assets/js/34.js",
    "revision": "ae9ce635452bced0a292cdf8d457b7b8"
  },
  {
    "url": "assets/js/340.js",
    "revision": "679a844d6f221b4d7d19dae0b49049e0"
  },
  {
    "url": "assets/js/341.js",
    "revision": "92d46ea709bddac1c61328226f6655bf"
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
    "revision": "7fcfea65b23ff5e14bfa90670d1a2c28"
  },
  {
    "url": "assets/js/345.js",
    "revision": "18998d2106a7edfc9a61b2304ba0ac3b"
  },
  {
    "url": "assets/js/346.js",
    "revision": "b2c2b25c1b0f222ba7540e756ebf043e"
  },
  {
    "url": "assets/js/347.js",
    "revision": "97567066e7904a4f0577eec438d273ba"
  },
  {
    "url": "assets/js/348.js",
    "revision": "fae1ae6f3e1a8ec3e60b7009b360b8a0"
  },
  {
    "url": "assets/js/349.js",
    "revision": "2f1b26be490c61e07c5c70d1741fb5f3"
  },
  {
    "url": "assets/js/35.js",
    "revision": "4047b81cf11a13153d8907bdbefa1fc5"
  },
  {
    "url": "assets/js/350.js",
    "revision": "8ff962faa5c8378ef57f09cbf2276ec1"
  },
  {
    "url": "assets/js/351.js",
    "revision": "66151f2d1cb61060b9f7cd5af8a9e190"
  },
  {
    "url": "assets/js/352.js",
    "revision": "7750926d9eb0d04a85236502f91cf858"
  },
  {
    "url": "assets/js/353.js",
    "revision": "ec18343f31c6fc3f9732e169449c19e9"
  },
  {
    "url": "assets/js/354.js",
    "revision": "dc1c4df92319f1a695b1e9458fd5f417"
  },
  {
    "url": "assets/js/355.js",
    "revision": "b0f201f7f54eca953f055430865c31f5"
  },
  {
    "url": "assets/js/356.js",
    "revision": "cae56f823cb6014b62ae7bc099adf7de"
  },
  {
    "url": "assets/js/357.js",
    "revision": "89aeb16f210233391dc737a5daef9351"
  },
  {
    "url": "assets/js/358.js",
    "revision": "97905cbdc624609a9f9e58264a6fd8ce"
  },
  {
    "url": "assets/js/359.js",
    "revision": "91c7d3984d3f14847adcd951838abddf"
  },
  {
    "url": "assets/js/36.js",
    "revision": "1bab6507c6b1626e55d093892473c287"
  },
  {
    "url": "assets/js/360.js",
    "revision": "93d86a2c68db4b181cfcc3b1dcf80fc9"
  },
  {
    "url": "assets/js/361.js",
    "revision": "24061c4229e7a56162fa205904f88a22"
  },
  {
    "url": "assets/js/362.js",
    "revision": "191b80f28add37becfdba6f163a286ee"
  },
  {
    "url": "assets/js/363.js",
    "revision": "091cb1e9ac7f7dd7793a7a64abcf40b1"
  },
  {
    "url": "assets/js/364.js",
    "revision": "17d9f2a51380452d39f4131b6354ed10"
  },
  {
    "url": "assets/js/365.js",
    "revision": "7725ec29de2cc0b6987d1e539c76b8c8"
  },
  {
    "url": "assets/js/366.js",
    "revision": "9c61848a19da3a36a5c5f4cb63d19a35"
  },
  {
    "url": "assets/js/367.js",
    "revision": "3697f78f217cec86e24a374f7f0d9941"
  },
  {
    "url": "assets/js/368.js",
    "revision": "9bce2372988b8b557c63dd0a33ce3e38"
  },
  {
    "url": "assets/js/369.js",
    "revision": "a696c79272e4904887cb4365df82e2ea"
  },
  {
    "url": "assets/js/37.js",
    "revision": "8a1ade48e9c9e2a753dcc2567decdab0"
  },
  {
    "url": "assets/js/370.js",
    "revision": "82ad4d5938eb80c81517e23adefbb942"
  },
  {
    "url": "assets/js/371.js",
    "revision": "a37e2f8813c6b6924831d26f17e8f040"
  },
  {
    "url": "assets/js/372.js",
    "revision": "61da427432ef6ab763b5946283744749"
  },
  {
    "url": "assets/js/373.js",
    "revision": "32d2b227b941006015b878d6d34ab10e"
  },
  {
    "url": "assets/js/374.js",
    "revision": "3ba15456038df2ad9ecd343627c13ac6"
  },
  {
    "url": "assets/js/375.js",
    "revision": "3237b834179be797ded496350ba9b4c2"
  },
  {
    "url": "assets/js/376.js",
    "revision": "b87f2bf41192c2f4aabe1f08a00eb585"
  },
  {
    "url": "assets/js/377.js",
    "revision": "bd623b0560f3fa387cb367b42f614a3d"
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
    "revision": "ed12e6af9abc323040ce9cd298163639"
  },
  {
    "url": "assets/js/380.js",
    "revision": "f4c488c638974d663392e2b7c106bd1a"
  },
  {
    "url": "assets/js/381.js",
    "revision": "6bcb5321ec733b83832228a4244e94e1"
  },
  {
    "url": "assets/js/382.js",
    "revision": "441526d48dd88edc57fe9da877949b31"
  },
  {
    "url": "assets/js/383.js",
    "revision": "1046b32aca82db87b6c1540727f6f308"
  },
  {
    "url": "assets/js/384.js",
    "revision": "3c8101834a94efa5ec79ea413e6ebdca"
  },
  {
    "url": "assets/js/385.js",
    "revision": "3eee0ca3550efd861c75948ef4383493"
  },
  {
    "url": "assets/js/386.js",
    "revision": "241ba18f1b9bd374924734f4b5357d45"
  },
  {
    "url": "assets/js/387.js",
    "revision": "603cb8636488da94da6c5238dcf424c7"
  },
  {
    "url": "assets/js/388.js",
    "revision": "64dc55333c30210f11d55429765f2225"
  },
  {
    "url": "assets/js/389.js",
    "revision": "d20cb964291f1f293c7f4d49132e4ef4"
  },
  {
    "url": "assets/js/39.js",
    "revision": "d61241ae5f8bf6f26714930c150b3f17"
  },
  {
    "url": "assets/js/390.js",
    "revision": "27f9bd5b047f3d89aecc9b1c6c215c24"
  },
  {
    "url": "assets/js/391.js",
    "revision": "72736dbbe6b3b3a1ab3e34dfd1f1db01"
  },
  {
    "url": "assets/js/392.js",
    "revision": "1bc99dc3cfd1ff2cd46ec32e47272663"
  },
  {
    "url": "assets/js/393.js",
    "revision": "d21b29d5218ccc96e8016f6f38730c1a"
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
    "revision": "7fd41a050bd79dab21aa135d5323ad51"
  },
  {
    "url": "assets/js/397.js",
    "revision": "a2586e60f41d44929574fcc4a8d176fb"
  },
  {
    "url": "assets/js/398.js",
    "revision": "89575b8ff54a48f6de1b851715b70aa8"
  },
  {
    "url": "assets/js/399.js",
    "revision": "7c04912c852d462d3c128973ea9e2672"
  },
  {
    "url": "assets/js/4.js",
    "revision": "6093c5a420410def6d29126646cddfc1"
  },
  {
    "url": "assets/js/40.js",
    "revision": "43df3a524ecaf724f33fba7f0b64b5d9"
  },
  {
    "url": "assets/js/400.js",
    "revision": "2dee28c13695df07885c5e5aebc4ac52"
  },
  {
    "url": "assets/js/401.js",
    "revision": "36e6f3458f25a968024dd3ac33177535"
  },
  {
    "url": "assets/js/402.js",
    "revision": "b4d789ab0b0cb9f5ee1090241fac0947"
  },
  {
    "url": "assets/js/403.js",
    "revision": "799af5c59a257605f7b6e921d45bab13"
  },
  {
    "url": "assets/js/404.js",
    "revision": "3b7aa316545156b086043a9cb9389859"
  },
  {
    "url": "assets/js/405.js",
    "revision": "b96f8c9d180afec243e27a32b80cbcc9"
  },
  {
    "url": "assets/js/406.js",
    "revision": "de69b52275fcd8b1f18fad74a737d496"
  },
  {
    "url": "assets/js/407.js",
    "revision": "bc67bef9ec21722fbbcc33593a6ac3fe"
  },
  {
    "url": "assets/js/408.js",
    "revision": "5c71d803623c10fd1673f8df097253aa"
  },
  {
    "url": "assets/js/409.js",
    "revision": "e7cfe909e8feacf7f536d54b153f715b"
  },
  {
    "url": "assets/js/41.js",
    "revision": "2ba021fc0a750172db7d379b4998bcf5"
  },
  {
    "url": "assets/js/410.js",
    "revision": "e7b704321c9450604658fb3d586473d0"
  },
  {
    "url": "assets/js/411.js",
    "revision": "090ff792161b2539e19b1fb7baf51ea6"
  },
  {
    "url": "assets/js/412.js",
    "revision": "2ea3f5a0326c1fe7075ee846423613fc"
  },
  {
    "url": "assets/js/413.js",
    "revision": "f2f19ae3fcc28dd7701f490ca8e21a5e"
  },
  {
    "url": "assets/js/414.js",
    "revision": "ba2ee6018f6a17212b8d6b078c81f20f"
  },
  {
    "url": "assets/js/415.js",
    "revision": "b765f76eb6b99acc470a6e518b0a6bda"
  },
  {
    "url": "assets/js/416.js",
    "revision": "035784d47ee3f74a5cbe10b9060d4422"
  },
  {
    "url": "assets/js/417.js",
    "revision": "9469ee419c950ebadca42fd55263076e"
  },
  {
    "url": "assets/js/418.js",
    "revision": "0b941e15cb66789fdb6c248863c9a5ab"
  },
  {
    "url": "assets/js/419.js",
    "revision": "d77d399ab80f530cf96e2d47093c5566"
  },
  {
    "url": "assets/js/42.js",
    "revision": "1d3899bdff6728e772e7eded14332554"
  },
  {
    "url": "assets/js/420.js",
    "revision": "8eb8006f57c44cc409866ecac1e1174e"
  },
  {
    "url": "assets/js/421.js",
    "revision": "798931c65cc41734e8ec2769450230b3"
  },
  {
    "url": "assets/js/422.js",
    "revision": "1189623b468b58dbb99e5bc080171ad5"
  },
  {
    "url": "assets/js/423.js",
    "revision": "86369b8a0fe25a859dc27615bd9e54f8"
  },
  {
    "url": "assets/js/424.js",
    "revision": "c56a78a0e782593e2d609414f56e52ae"
  },
  {
    "url": "assets/js/425.js",
    "revision": "dad62c7cf2c881201132569a625452d3"
  },
  {
    "url": "assets/js/426.js",
    "revision": "291427889a7162d370ddde4179b044e6"
  },
  {
    "url": "assets/js/427.js",
    "revision": "64071f157ad60b0a9986d62728973c3d"
  },
  {
    "url": "assets/js/428.js",
    "revision": "e593c5f61f30e321f218cadac96f6c42"
  },
  {
    "url": "assets/js/429.js",
    "revision": "41ef0f11a027da0fddc754c939df4ed3"
  },
  {
    "url": "assets/js/43.js",
    "revision": "f116b6a65dc05894ca2aeed82cac97cf"
  },
  {
    "url": "assets/js/430.js",
    "revision": "e0cc0125a98ea9a02b739bec8b6c44cd"
  },
  {
    "url": "assets/js/431.js",
    "revision": "0a7c72eec44d826925353048dfbf4e85"
  },
  {
    "url": "assets/js/432.js",
    "revision": "f8d09af77f0f0a596ea6c4c7b86b5508"
  },
  {
    "url": "assets/js/433.js",
    "revision": "a576e8f31485717b28ac71216788c794"
  },
  {
    "url": "assets/js/434.js",
    "revision": "fd17ab97f1ea1a2466d181948daa8d7a"
  },
  {
    "url": "assets/js/435.js",
    "revision": "87cf1f595a6a567e858cb4326e0d457d"
  },
  {
    "url": "assets/js/436.js",
    "revision": "e26c6e2a850330650f5013be738883ad"
  },
  {
    "url": "assets/js/437.js",
    "revision": "894a4f517ea0d2fa64235647ab051361"
  },
  {
    "url": "assets/js/438.js",
    "revision": "1e53a7aa879c88630c4e011b74428e49"
  },
  {
    "url": "assets/js/439.js",
    "revision": "9cd594f90586d3d1d9f743d944c06796"
  },
  {
    "url": "assets/js/44.js",
    "revision": "7507870184f7f60ab02b8f94bf48e711"
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
    "revision": "8a7f83a372fcebd7296fbbcfc013696f"
  },
  {
    "url": "assets/js/444.js",
    "revision": "586e44022536ee9c59d111bb3b6b4687"
  },
  {
    "url": "assets/js/445.js",
    "revision": "22963ebdabdc8fb292cce8faae481cba"
  },
  {
    "url": "assets/js/446.js",
    "revision": "4c985cac3ae735d79498e5726650b6dd"
  },
  {
    "url": "assets/js/447.js",
    "revision": "a300ed9921724c54ae2b87a37d189324"
  },
  {
    "url": "assets/js/448.js",
    "revision": "258d785b776a8f8efb229b21be919840"
  },
  {
    "url": "assets/js/449.js",
    "revision": "eb71f954fa054e77612d194c8b84dbea"
  },
  {
    "url": "assets/js/45.js",
    "revision": "92a511ca79429258fb50b68a2aaa8756"
  },
  {
    "url": "assets/js/450.js",
    "revision": "19d9e363165fde53cd25447395bcdd59"
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
    "revision": "b8baed342cbc9a2fa54f5856c2a637dd"
  },
  {
    "url": "assets/js/454.js",
    "revision": "43cf6d639b996a2d0e5a1ded0d102d18"
  },
  {
    "url": "assets/js/455.js",
    "revision": "ba2a3b8f390c64783e390d9a051e5bb6"
  },
  {
    "url": "assets/js/456.js",
    "revision": "1778a4c2cbbe93b6f36f6d00aa981202"
  },
  {
    "url": "assets/js/457.js",
    "revision": "0de5ef680e6b469a38d0fd6da5dfee6c"
  },
  {
    "url": "assets/js/458.js",
    "revision": "45fca866c375956b4f0ae19cfde1581b"
  },
  {
    "url": "assets/js/459.js",
    "revision": "7ca7d4a341bafb03e5f47a5e3374d348"
  },
  {
    "url": "assets/js/46.js",
    "revision": "69af6be58ecea121737b1670340d0026"
  },
  {
    "url": "assets/js/460.js",
    "revision": "2e68607ca6d3d1142ccf53985fafbdf4"
  },
  {
    "url": "assets/js/461.js",
    "revision": "20b60950e6a142cec2a94dc6944fc1f4"
  },
  {
    "url": "assets/js/462.js",
    "revision": "6ee06ed4852b6ffa61f10a50d1be3742"
  },
  {
    "url": "assets/js/463.js",
    "revision": "5442cf9c6e4b73a18c1e3559ea2b6550"
  },
  {
    "url": "assets/js/464.js",
    "revision": "7c65a50422fc6dedec16eaab115479db"
  },
  {
    "url": "assets/js/465.js",
    "revision": "6fea4ea23695225d165a0d82ffe39c4b"
  },
  {
    "url": "assets/js/466.js",
    "revision": "36ad738e1f4bb03ca59ed5df228f5c12"
  },
  {
    "url": "assets/js/467.js",
    "revision": "c60b373ed15a9af70f44d6510865802a"
  },
  {
    "url": "assets/js/468.js",
    "revision": "629f58556e0aa1b3f14124483a484767"
  },
  {
    "url": "assets/js/469.js",
    "revision": "dcec5d375f1bc2ad2bea135f634d8b62"
  },
  {
    "url": "assets/js/47.js",
    "revision": "ea038995a984aed96876839977adedcc"
  },
  {
    "url": "assets/js/470.js",
    "revision": "d337de1f40d0d92bc574891a36d2b098"
  },
  {
    "url": "assets/js/471.js",
    "revision": "9c39c1c315279d6e1f9cf970dbf20b29"
  },
  {
    "url": "assets/js/472.js",
    "revision": "72c4d4ffc33a044570584fd45db12e52"
  },
  {
    "url": "assets/js/473.js",
    "revision": "28d2c29c3a3417b29485dc6902cabede"
  },
  {
    "url": "assets/js/474.js",
    "revision": "24270306cabcbf1fa95babb8959f060e"
  },
  {
    "url": "assets/js/475.js",
    "revision": "386f93657e78d312630796c20d2a2cbe"
  },
  {
    "url": "assets/js/476.js",
    "revision": "17a854dba889a934509425a1dc254f3c"
  },
  {
    "url": "assets/js/477.js",
    "revision": "709e2412416ccd30d5f4e685a1b4527e"
  },
  {
    "url": "assets/js/478.js",
    "revision": "7ca47b97a9646d4bcf552c74b38f2236"
  },
  {
    "url": "assets/js/479.js",
    "revision": "90aa98943f11516bdf998e6f15594bb1"
  },
  {
    "url": "assets/js/48.js",
    "revision": "6e38ebf980fa2c657c485c3b0c284a18"
  },
  {
    "url": "assets/js/480.js",
    "revision": "bd171d3e593a3ef923980385dee2c017"
  },
  {
    "url": "assets/js/481.js",
    "revision": "bbc8464486c996881d1ca6ebc8ddce17"
  },
  {
    "url": "assets/js/482.js",
    "revision": "1b002bc6c07f812912f4981927cb82d5"
  },
  {
    "url": "assets/js/483.js",
    "revision": "81f4351dc05f8f07cbe9a6fc35956787"
  },
  {
    "url": "assets/js/484.js",
    "revision": "3a16f268b8cdd8fbbf29cd5f64bb1321"
  },
  {
    "url": "assets/js/485.js",
    "revision": "52d50191015edcb8f565597e719ccd59"
  },
  {
    "url": "assets/js/486.js",
    "revision": "4d400fe5e2e5b54738667e0468202ebb"
  },
  {
    "url": "assets/js/487.js",
    "revision": "c13ad3de1e326ecb01681c89957a05e5"
  },
  {
    "url": "assets/js/488.js",
    "revision": "170f5909597931eb0bb6aa3a01ed7184"
  },
  {
    "url": "assets/js/489.js",
    "revision": "10d43f28ed9ab5c15c1b5a6b3ecd2453"
  },
  {
    "url": "assets/js/49.js",
    "revision": "930365e9e3574013e5d9be3b42fbf8e3"
  },
  {
    "url": "assets/js/490.js",
    "revision": "890d0cf825232dbd487f61e66b8a9685"
  },
  {
    "url": "assets/js/491.js",
    "revision": "7121f2b0e38163dff3a31c00817bcc97"
  },
  {
    "url": "assets/js/492.js",
    "revision": "ca0bdbff4c452b6147fe1ee2d7bcfd82"
  },
  {
    "url": "assets/js/493.js",
    "revision": "fbb451a479096ef9423309221c06f62a"
  },
  {
    "url": "assets/js/494.js",
    "revision": "b928cb2725e8d57316197ce4dead6412"
  },
  {
    "url": "assets/js/495.js",
    "revision": "cefc17c60f071865bdd2135b5b0adf16"
  },
  {
    "url": "assets/js/496.js",
    "revision": "d281fb99a5c2a9b2605518ef7580b086"
  },
  {
    "url": "assets/js/497.js",
    "revision": "04ac56ed50a2006f1a398b83bee30884"
  },
  {
    "url": "assets/js/498.js",
    "revision": "3cf85f2512558bd82675b34d31e258bc"
  },
  {
    "url": "assets/js/499.js",
    "revision": "a46350e34ed10b50692bf29c0e12de85"
  },
  {
    "url": "assets/js/50.js",
    "revision": "81a8f4aeef427be53cc07eaf6e9a1fe4"
  },
  {
    "url": "assets/js/500.js",
    "revision": "57d12f4dedb86f0ae7d2a98d88ed101a"
  },
  {
    "url": "assets/js/501.js",
    "revision": "36936f405a43685f16b1dd22d91f5f18"
  },
  {
    "url": "assets/js/502.js",
    "revision": "6ed3a05cc04ed633c24ac042ab49eb79"
  },
  {
    "url": "assets/js/503.js",
    "revision": "a52fbc8dd299ed3343251c2e327dbe57"
  },
  {
    "url": "assets/js/504.js",
    "revision": "e2d68d98d4494fdd152c1aa5c80595df"
  },
  {
    "url": "assets/js/505.js",
    "revision": "358167e91061d13ac3dec58c72309a95"
  },
  {
    "url": "assets/js/506.js",
    "revision": "58fe4dc66e6b90973e232eebce7d9fdf"
  },
  {
    "url": "assets/js/507.js",
    "revision": "bf28027aded0d73ea25c1e7870bbccf6"
  },
  {
    "url": "assets/js/508.js",
    "revision": "e82124cf9c6f1aec47f1942b38cdf320"
  },
  {
    "url": "assets/js/509.js",
    "revision": "03c010a1637c394d0fd16ce52842359b"
  },
  {
    "url": "assets/js/51.js",
    "revision": "216609cdbcdf6c9a849863613c5abad6"
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
    "revision": "f92308edd4fcadce5fb34a15d6b90cd8"
  },
  {
    "url": "assets/js/513.js",
    "revision": "1955ed7854f8bee379599ffa2ab6440e"
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
    "revision": "add139d6644ebe08549c3bf6fef004dc"
  },
  {
    "url": "assets/js/517.js",
    "revision": "ce520f30c2774a594474310cc354c4b2"
  },
  {
    "url": "assets/js/518.js",
    "revision": "aabfe36231078b2e24d20aeff78e5556"
  },
  {
    "url": "assets/js/519.js",
    "revision": "d6a419040e0b193f05d7a5d00e47ab36"
  },
  {
    "url": "assets/js/52.js",
    "revision": "a3764e322ba0327638ed243a6ae7ab8f"
  },
  {
    "url": "assets/js/520.js",
    "revision": "fa78815ec18747e15ed06eae7e474bb1"
  },
  {
    "url": "assets/js/521.js",
    "revision": "c09c7606b39cccc8777a0b1e4ce9a072"
  },
  {
    "url": "assets/js/522.js",
    "revision": "782a934fb9705e2298431cd4ea73016a"
  },
  {
    "url": "assets/js/523.js",
    "revision": "a7275391a2310222d9f5630dec8f8ad8"
  },
  {
    "url": "assets/js/524.js",
    "revision": "83ffeb7f34aa51a0ec3a4c17c2113fc2"
  },
  {
    "url": "assets/js/525.js",
    "revision": "e35bf534d315a810c44b2ffa6b29138c"
  },
  {
    "url": "assets/js/526.js",
    "revision": "0dc2613bd38db239737f17c2abee62e2"
  },
  {
    "url": "assets/js/527.js",
    "revision": "366fd7853fe51f1e532dd519216bf11b"
  },
  {
    "url": "assets/js/528.js",
    "revision": "8670cfc02978395a5b0350d84e40b8e0"
  },
  {
    "url": "assets/js/529.js",
    "revision": "bfe71980d7416c003a87c0ff9b6816c8"
  },
  {
    "url": "assets/js/53.js",
    "revision": "8a6b182427cbba19f337b79c30067a1b"
  },
  {
    "url": "assets/js/530.js",
    "revision": "ba27d509464149cf498c562c5c000560"
  },
  {
    "url": "assets/js/531.js",
    "revision": "df1af9c3d44a26823a789302ee6a969a"
  },
  {
    "url": "assets/js/532.js",
    "revision": "d22772b09c723f25920ab4b01515731b"
  },
  {
    "url": "assets/js/533.js",
    "revision": "41c41ba4323bb570fb35b1d69e0bd5bf"
  },
  {
    "url": "assets/js/534.js",
    "revision": "68030f3c65891ac8cc3c4b56eec4c8d8"
  },
  {
    "url": "assets/js/535.js",
    "revision": "d58d1930ea7fa110d7eb9976e9a5d95c"
  },
  {
    "url": "assets/js/536.js",
    "revision": "8ad8d87dd3e93e9fc4b90750b6c08c0c"
  },
  {
    "url": "assets/js/537.js",
    "revision": "970f2c0765dd616387e7933beaedcc71"
  },
  {
    "url": "assets/js/538.js",
    "revision": "63e303aca4e4ae9a27e2eb7754d7b87c"
  },
  {
    "url": "assets/js/539.js",
    "revision": "c57feccc0a698bfe46d90b646e69815e"
  },
  {
    "url": "assets/js/54.js",
    "revision": "8cb1059655e9ab7aba4bccadb9a812ff"
  },
  {
    "url": "assets/js/540.js",
    "revision": "aa0bb19c5f5645d1506dbeb03376d8ea"
  },
  {
    "url": "assets/js/541.js",
    "revision": "aa6b3c7e867fe2b97a63372130ce478a"
  },
  {
    "url": "assets/js/542.js",
    "revision": "e0358a476bd349b24be278efc88ded04"
  },
  {
    "url": "assets/js/543.js",
    "revision": "1263891c7e86186687cef7dd22b7d8c6"
  },
  {
    "url": "assets/js/544.js",
    "revision": "615ffb6287a3d1910961f5c9cc24276f"
  },
  {
    "url": "assets/js/545.js",
    "revision": "7212f29746d204f32c223b0af9ba3215"
  },
  {
    "url": "assets/js/546.js",
    "revision": "4d4bb148071fcca3990e702011c1daed"
  },
  {
    "url": "assets/js/547.js",
    "revision": "b49658ce795d2ffc8887d2d418426d8b"
  },
  {
    "url": "assets/js/548.js",
    "revision": "56c7a4a3c1274b6ce38014714af5c25d"
  },
  {
    "url": "assets/js/549.js",
    "revision": "de50d5930fe0b3f4049947c03e6cac20"
  },
  {
    "url": "assets/js/55.js",
    "revision": "4f89c7614ec820ca7fb2ef1e019f8b2a"
  },
  {
    "url": "assets/js/550.js",
    "revision": "1a7251358a5c4518c4cfc931714fddf3"
  },
  {
    "url": "assets/js/551.js",
    "revision": "bb51a55ba3a5d007ddda181afb1d33c7"
  },
  {
    "url": "assets/js/552.js",
    "revision": "d3b28ff72b2135d56fc2d6cbd49f28ce"
  },
  {
    "url": "assets/js/553.js",
    "revision": "180f8d6dfd14df6618949201ae6f30bb"
  },
  {
    "url": "assets/js/554.js",
    "revision": "d8d606d8e5409da46e375bd02df4ecf7"
  },
  {
    "url": "assets/js/555.js",
    "revision": "012c1800e693ff76d50f346984aac8b3"
  },
  {
    "url": "assets/js/556.js",
    "revision": "9255126027bf750494a0bb66f3a6ec90"
  },
  {
    "url": "assets/js/557.js",
    "revision": "80f017298cb3d075449265dbcf846e96"
  },
  {
    "url": "assets/js/558.js",
    "revision": "a50b99d84f8ee3503b072ab3b83c3821"
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
    "revision": "6be3db55cd48082c5683e3ae5fb79979"
  },
  {
    "url": "assets/js/561.js",
    "revision": "5a59f04cbc8ae72ac7ea496bf55ceea5"
  },
  {
    "url": "assets/js/562.js",
    "revision": "61e02603acc15a0a1a46da48b54f5ac4"
  },
  {
    "url": "assets/js/563.js",
    "revision": "01e630b84648ebd7be343bc168274e12"
  },
  {
    "url": "assets/js/564.js",
    "revision": "4b307b31e55cf0d0aa76827eba9eeea8"
  },
  {
    "url": "assets/js/565.js",
    "revision": "d4a66941bcf3346f5fed1e6c426c7ab4"
  },
  {
    "url": "assets/js/566.js",
    "revision": "7e8314ca41d7994f972cac7dd0b34b7d"
  },
  {
    "url": "assets/js/567.js",
    "revision": "c2042e7029cea88b56686634a9b3bfe3"
  },
  {
    "url": "assets/js/568.js",
    "revision": "46ad042c7e61a8c163cf6119865f11c4"
  },
  {
    "url": "assets/js/569.js",
    "revision": "c5ea7a2757c884d449de581513b1dbb3"
  },
  {
    "url": "assets/js/57.js",
    "revision": "006b9ed6287a829e813654088d67ef47"
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
    "revision": "f4fd35943eec067f06743ef2233a644c"
  },
  {
    "url": "assets/js/573.js",
    "revision": "6073739bc795e5e3c302b83aef05ab1d"
  },
  {
    "url": "assets/js/574.js",
    "revision": "ef1ea53eeb335740ccd42aee2c2829b2"
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
    "revision": "e294b98e3959be38f0b1b67bb1240e5b"
  },
  {
    "url": "assets/js/578.js",
    "revision": "7c168bb7c6e46e901f13ca00b22045e9"
  },
  {
    "url": "assets/js/579.js",
    "revision": "69d5e786cf8c283cd5fb1febfeadde2d"
  },
  {
    "url": "assets/js/58.js",
    "revision": "44dd45041fdd64b9f2bf7307ee6fee8f"
  },
  {
    "url": "assets/js/580.js",
    "revision": "f7d0d964cc7bb432272e294e1539c645"
  },
  {
    "url": "assets/js/581.js",
    "revision": "7ca740c9c315b8146e04a6eb415ca9ce"
  },
  {
    "url": "assets/js/582.js",
    "revision": "3be5a4c8f7ab2ffd17a6c2d05abe89ec"
  },
  {
    "url": "assets/js/583.js",
    "revision": "1c190c25fb3846e3316aca59f0a9d201"
  },
  {
    "url": "assets/js/584.js",
    "revision": "e7b80a12628585ff254e04934a1d6704"
  },
  {
    "url": "assets/js/585.js",
    "revision": "d806809b9792d2905512af30341f0f1e"
  },
  {
    "url": "assets/js/586.js",
    "revision": "a30811919bf9c6e15732ebc095b458df"
  },
  {
    "url": "assets/js/587.js",
    "revision": "f6be0b590bd98d761b60d05d59a3ef8e"
  },
  {
    "url": "assets/js/588.js",
    "revision": "6943135bef45a2ed0774f3d6f912e4d6"
  },
  {
    "url": "assets/js/589.js",
    "revision": "2f40b6634388c1a42c037c0b66a4b0d0"
  },
  {
    "url": "assets/js/59.js",
    "revision": "1653e5456a835e74fff04ecd270f9dc7"
  },
  {
    "url": "assets/js/590.js",
    "revision": "f13f1c848f189274039b596794b0de62"
  },
  {
    "url": "assets/js/591.js",
    "revision": "f287f2a495551006b1c909c55d6685a0"
  },
  {
    "url": "assets/js/592.js",
    "revision": "1c0126633fbfc82e94698a3ad5aafe2a"
  },
  {
    "url": "assets/js/593.js",
    "revision": "5bb5804eba4559e6a3bda1d0f9991db0"
  },
  {
    "url": "assets/js/594.js",
    "revision": "4889a7a5666079e990730e3b1ebabc0f"
  },
  {
    "url": "assets/js/595.js",
    "revision": "472adc515252fa32b9f8f32b8a026533"
  },
  {
    "url": "assets/js/596.js",
    "revision": "fda3c3546a7a9224aa08d7b91a5cbf31"
  },
  {
    "url": "assets/js/6.js",
    "revision": "337dd66dc66ae507417bcbb543b75641"
  },
  {
    "url": "assets/js/60.js",
    "revision": "221a320684d9749ed6b2e22864cb9cfc"
  },
  {
    "url": "assets/js/61.js",
    "revision": "b91080ea6dd64d1347717b377e4fd1c6"
  },
  {
    "url": "assets/js/62.js",
    "revision": "c2d2d435a2f632cb318b8457af8b1e8b"
  },
  {
    "url": "assets/js/63.js",
    "revision": "d35b497c51576e12c4591609da363f19"
  },
  {
    "url": "assets/js/64.js",
    "revision": "51a4d341fe883bb548bcd851f9003e23"
  },
  {
    "url": "assets/js/65.js",
    "revision": "abb3785fed0942f1ab89995929931bc3"
  },
  {
    "url": "assets/js/66.js",
    "revision": "687509dfe8a93696f44458379bb37497"
  },
  {
    "url": "assets/js/67.js",
    "revision": "635f19d7ab1fe121634b26c08620c7d7"
  },
  {
    "url": "assets/js/68.js",
    "revision": "3bc22e33b124682e4e6cbd1a1b7042af"
  },
  {
    "url": "assets/js/69.js",
    "revision": "d34c05798ae53e68989a478abd6e9799"
  },
  {
    "url": "assets/js/7.js",
    "revision": "6678445163a54a8ea6561d5e00075d56"
  },
  {
    "url": "assets/js/70.js",
    "revision": "602ee7d73948e4a55637e916e7f07fde"
  },
  {
    "url": "assets/js/71.js",
    "revision": "06ba3360185dea1c8ace54d72ac14cd5"
  },
  {
    "url": "assets/js/72.js",
    "revision": "df5647014e5bce3b4af918329028223c"
  },
  {
    "url": "assets/js/73.js",
    "revision": "00149ef09217a85cde2906295b0c9f7c"
  },
  {
    "url": "assets/js/74.js",
    "revision": "0618b79717f59d25985ced1dd0d95d70"
  },
  {
    "url": "assets/js/75.js",
    "revision": "a2b8134e789623c952ab19dc964c3b58"
  },
  {
    "url": "assets/js/76.js",
    "revision": "e21571d445e2854d3986030f44293a91"
  },
  {
    "url": "assets/js/77.js",
    "revision": "cb4c69d8e89ba3de2a839c226caf07b4"
  },
  {
    "url": "assets/js/78.js",
    "revision": "af61c05e73a94a50d46d0dd42e6963a4"
  },
  {
    "url": "assets/js/79.js",
    "revision": "2db15317dfdeed87797dc83c00d9d54e"
  },
  {
    "url": "assets/js/8.js",
    "revision": "1c809f0621197704def2d18757a19c62"
  },
  {
    "url": "assets/js/80.js",
    "revision": "a5073201a8a150a79c32a35d4d142627"
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
    "revision": "851c82474d98df6bdf6a4c457bdbc136"
  },
  {
    "url": "assets/js/84.js",
    "revision": "77e4cd71a36c63a7bc527e1d68cc1bc3"
  },
  {
    "url": "assets/js/85.js",
    "revision": "489ac9cec77ebc038fb1359b53220f3c"
  },
  {
    "url": "assets/js/86.js",
    "revision": "e8ae92ab7de8003a8b96df2bd2ff8de8"
  },
  {
    "url": "assets/js/87.js",
    "revision": "8503a44601bdbdbc62f83200a1e72a17"
  },
  {
    "url": "assets/js/88.js",
    "revision": "fd37ce0117fec7b4b60538fb3bf01f02"
  },
  {
    "url": "assets/js/89.js",
    "revision": "4ae70434aa67611e2b67d963a2b70205"
  },
  {
    "url": "assets/js/9.js",
    "revision": "8a56a30c74778822a682e3d4622fac41"
  },
  {
    "url": "assets/js/90.js",
    "revision": "b95a5397a5a677543db79493873b930e"
  },
  {
    "url": "assets/js/91.js",
    "revision": "17be5c322f0749309ab81c7834b6cae8"
  },
  {
    "url": "assets/js/92.js",
    "revision": "a78b387c1a5c6c27460178a78a83cdf2"
  },
  {
    "url": "assets/js/93.js",
    "revision": "1d23a8628a44490477c8b8624a4a7995"
  },
  {
    "url": "assets/js/94.js",
    "revision": "a292ea898e4a949cae5ebd2c071d0b9e"
  },
  {
    "url": "assets/js/95.js",
    "revision": "72470a023048773d1b1e601bcc7bf01d"
  },
  {
    "url": "assets/js/96.js",
    "revision": "2dfba3dcd2c10c7a9af01280fa22d31c"
  },
  {
    "url": "assets/js/97.js",
    "revision": "5765dbc6769589468affe446fe934bc0"
  },
  {
    "url": "assets/js/98.js",
    "revision": "1f7377bdb40b24facf7535e58755b74b"
  },
  {
    "url": "assets/js/99.js",
    "revision": "75ec8626f1a911a8fd9077e2292739ef"
  },
  {
    "url": "assets/js/app.js",
    "revision": "ef317628e7a1c9c24b9d6776a06f1b79"
  },
  {
    "url": "assets/js/styles.js",
    "revision": "22f22b49cc901aa95826401f7ce0930c"
  },
  {
    "url": "blog/category/index.html",
    "revision": "16579781e304f85afdcc4c32db57263e"
  },
  {
    "url": "blog/code/artists/index.html",
    "revision": "a32a94aea791337744fc780c7f2629cb"
  },
  {
    "url": "blog/code/asa.sbh.nz/index.html",
    "revision": "a38fb4d38a462cb819c2b5a091b1edaf"
  },
  {
    "url": "blog/code/decrypt/index.html",
    "revision": "1e1334dd56ac3655420da8a74bce5e7b"
  },
  {
    "url": "blog/code/divider/index.html",
    "revision": "d267b534b0a701cf5e659296ca0afa78"
  },
  {
    "url": "blog/code/first/index.html",
    "revision": "12015fcefa43f06ae99904b0fb364ba8"
  },
  {
    "url": "blog/code/fishbarrel/index.html",
    "revision": "cd8be1e4b1328d9ba129d87188a01d26"
  },
  {
    "url": "blog/code/indent/index.html",
    "revision": "47852938c9a5e3c222c312f77ea0bfe7"
  },
  {
    "url": "blog/code/index.html",
    "revision": "30a5630339bf02ab207203d35742060d"
  },
  {
    "url": "blog/code/ingoa.nz/index.html",
    "revision": "07d17d3d844e7e70d0e4dc5e140b65b7"
  },
  {
    "url": "blog/code/nzondemand/index.html",
    "revision": "13d994c19a8649d81dabe1be80856bf7"
  },
  {
    "url": "blog/code/picard/index.html",
    "revision": "edcdf231031a1572cbcd14f7829b1419"
  },
  {
    "url": "blog/code/qr/index.html",
    "revision": "760ee2b0a4aa7f4ac8168dd2cdc78f0a"
  },
  {
    "url": "blog/code/readable/index.html",
    "revision": "6cfcd4d9f08f352b3f5d4b1277d215df"
  },
  {
    "url": "blog/code/tone/index.html",
    "revision": "dd870fd00dcd501547911497207b8482"
  },
  {
    "url": "blog/code/war/index.html",
    "revision": "cec97131457850863fd08f5082c11410"
  },
  {
    "url": "blog/code/website/index.html",
    "revision": "23f9c0f1743bcd7e432830d4065b1c31"
  },
  {
    "url": "blog/code/website/route/index.html",
    "revision": "1af3dce03e3ae31165e36fcb745cda43"
  },
  {
    "url": "blog/code/website/site/index.html",
    "revision": "a04c1b351df52b13fdfa9b6c193fefa8"
  },
  {
    "url": "blog/code/xmltv.co.nz/index.html",
    "revision": "c193883a7b0e32e49dbd09bcc294f368"
  },
  {
    "url": "blog/howto/index.html",
    "revision": "45d0755553d1321cd6cd775db5cafd54"
  },
  {
    "url": "blog/howto/intel865/index.html",
    "revision": "7f1ffbdd0c4b7f337fd46de7fc8a68a3"
  },
  {
    "url": "blog/howto/ios/index.html",
    "revision": "95576dc0bafc1526ea1ae0276046da8c"
  },
  {
    "url": "blog/howto/nexentastor/index.html",
    "revision": "08dd56372ee3e862191c48c4e5b30286"
  },
  {
    "url": "blog/howto/pcloadletter/index.html",
    "revision": "908f0e4a964564a1755e50e687f99b65"
  },
  {
    "url": "blog/howto/raid5/index.html",
    "revision": "d88035186b9b347d0a77b05b1afb0739"
  },
  {
    "url": "blog/index.html",
    "revision": "0684fdbded3c504c0aea947f88080a99"
  },
  {
    "url": "blog/life/anotheryear/index.html",
    "revision": "2001da6b9cba5e936571d9643ba73a99"
  },
  {
    "url": "blog/life/birthday/index.html",
    "revision": "8f45d6f38f85023f68edd1c674825807"
  },
  {
    "url": "blog/life/blasphemy/index.html",
    "revision": "9a0d51ca0131be459fef42f3deeb4f9b"
  },
  {
    "url": "blog/life/blogger/index.html",
    "revision": "5749a9c947e22ddf5ea7ee50b3a078e3"
  },
  {
    "url": "blog/life/blurry/index.html",
    "revision": "09cedad5023b78d30c55be9bcb2a9e5e"
  },
  {
    "url": "blog/life/busyday/index.html",
    "revision": "5e5af3a8129eceee191966f9a898a1c1"
  },
  {
    "url": "blog/life/domain/index.html",
    "revision": "12bc0c862ae641468dac80cd53a02c72"
  },
  {
    "url": "blog/life/exams/index.html",
    "revision": "78527c482a6dbed6bba9bd4491349557"
  },
  {
    "url": "blog/life/food/index.html",
    "revision": "d5af71ee0f3d883f4b50f0f1b347dbad"
  },
  {
    "url": "blog/life/glenview/index.html",
    "revision": "39590a2fca352284d0a9d3c52a699ec3"
  },
  {
    "url": "blog/life/headlines/index.html",
    "revision": "65cf50291d68b055c28ffd4cb3f0dace"
  },
  {
    "url": "blog/life/index.html",
    "revision": "f4e554fded1b7d7622d40c13e5cf119a"
  },
  {
    "url": "blog/life/jws/index.html",
    "revision": "16cd7fa84fd8321e84f091cc7f3901a1"
  },
  {
    "url": "blog/life/keyboard/index.html",
    "revision": "af0d3429f66a2abadf262058fe76a49f"
  },
  {
    "url": "blog/life/lpi201/index.html",
    "revision": "14f797ef76914aab67947a56881c87c5"
  },
  {
    "url": "blog/life/mashup/index.html",
    "revision": "4ab2a790c8a7ad57f12982b1c993cdbd"
  },
  {
    "url": "blog/life/motorweb/index.html",
    "revision": "ce1a97099904673ff1764498f36746ba"
  },
  {
    "url": "blog/life/nxe/index.html",
    "revision": "0550f18dc2bd31addaf6de285af4257a"
  },
  {
    "url": "blog/life/plates/index.html",
    "revision": "69137426d82a47a8aa077d8a2a8b4700"
  },
  {
    "url": "blog/life/queenstown/index.html",
    "revision": "ba06c4bee50c7011a328cfda3599f36d"
  },
  {
    "url": "blog/life/racism/index.html",
    "revision": "b7ac1bb4346052890ac4ab4f756ba258"
  },
  {
    "url": "blog/life/roads/index.html",
    "revision": "4c8a842c311473f1165cdfe39019e8b8"
  },
  {
    "url": "blog/life/roots/index.html",
    "revision": "5952091410ca6259f8ecf6ada15e6ea4"
  },
  {
    "url": "blog/life/scare/index.html",
    "revision": "858179f1356ed61db294df33df72c262"
  },
  {
    "url": "blog/life/scary/index.html",
    "revision": "4d6ab51d8b56699bb59f1063f54a43f7"
  },
  {
    "url": "blog/life/seti/index.html",
    "revision": "d90109079c0db4452895c74743f0a1e2"
  },
  {
    "url": "blog/life/skeptical/index.html",
    "revision": "ac7b2df2b60b2663a31014acfe0d5aa2"
  },
  {
    "url": "blog/life/skepticzone/index.html",
    "revision": "f15ac02fcfe55f8a6301e9ab9e278146"
  },
  {
    "url": "blog/life/spam/index.html",
    "revision": "437e9efd16ae7dcc814e8a3bf97ec058"
  },
  {
    "url": "blog/life/trademe/index.html",
    "revision": "a084a15b82597d60c6497b87c6b727bc"
  },
  {
    "url": "blog/life/unforeseen/index.html",
    "revision": "c5db7e37b8102285273d3fa48b717477"
  },
  {
    "url": "blog/life/wobbly/index.html",
    "revision": "d8dbebb318653baadb1b48e0dbd03134"
  },
  {
    "url": "blog/projects/ahs/index.html",
    "revision": "bed73fdc0f91e1395fe42ae0ce781792"
  },
  {
    "url": "blog/projects/airbag/index.html",
    "revision": "dd699fd0f2d8b90dd0115839f6f38512"
  },
  {
    "url": "blog/projects/ambilight/index.html",
    "revision": "2b9f2d0fa64ac1b01fc2736c79265351"
  },
  {
    "url": "blog/projects/automation/index.html",
    "revision": "bb19a5dafcd6398e0cfbbe246b0a5c6d"
  },
  {
    "url": "blog/projects/eyes/index.html",
    "revision": "7d84894719caa5567da8c910af0a311d"
  },
  {
    "url": "blog/projects/glitch/index.html",
    "revision": "5280e6102b164997bc6e0444106f0a7a"
  },
  {
    "url": "blog/projects/hotel/index.html",
    "revision": "3e852e35562d40d9b37f2fb24a698fd0"
  },
  {
    "url": "blog/projects/index.html",
    "revision": "ee0bee6563489e90008a5a4637a63ed4"
  },
  {
    "url": "blog/projects/it100/index.html",
    "revision": "6e912836e73131b1c1264648db35fc63"
  },
  {
    "url": "blog/projects/microscope/index.html",
    "revision": "c35de655cd44d4653eb275acb590854d"
  },
  {
    "url": "blog/projects/mirror/index.html",
    "revision": "af924fa4a2037b2d102b02267cdcce70"
  },
  {
    "url": "blog/projects/picture/index.html",
    "revision": "97d044d2a2a1ebe10b404a2a73a642dd"
  },
  {
    "url": "blog/projects/pizza/index.html",
    "revision": "2fe942caf905a6f7d53665f5f90e6ade"
  },
  {
    "url": "blog/projects/podcast/index.html",
    "revision": "9c507881a1884d206b6f2987c80b33aa"
  },
  {
    "url": "blog/projects/reflow/index.html",
    "revision": "d823ccb1e43a7f8dd9b5a9496873e967"
  },
  {
    "url": "blog/projects/sandbox/index.html",
    "revision": "61469a0a13bc3d56629827b507a7711a"
  },
  {
    "url": "blog/projects/screens/index.html",
    "revision": "1920f490d800d6c4bc96948239d2690a"
  },
  {
    "url": "blog/projects/sky/index.html",
    "revision": "c19a38deede73b667e256d04f41a32d1"
  },
  {
    "url": "blog/projects/starwars/index.html",
    "revision": "42b418f071adaea23caa070223fd9a49"
  },
  {
    "url": "blog/projects/xbox/index.html",
    "revision": "ed9ca458610b8afe0caddbc053735d2d"
  },
  {
    "url": "blog/random/addresses/index.html",
    "revision": "4ee543b8f5d9fd9bb7560935a5ead16a"
  },
  {
    "url": "blog/random/alphabet/index.html",
    "revision": "8aa80b81eb6e285e4b010762ac8246b9"
  },
  {
    "url": "blog/random/astrology/index.html",
    "revision": "7afa521791e7440e2d4695771011bab0"
  },
  {
    "url": "blog/random/chicken/index.html",
    "revision": "568f5e429ab1a14b18c3faa861697e2f"
  },
  {
    "url": "blog/random/dns/index.html",
    "revision": "ed9a3df8a517eae74189ae949e6fde5f"
  },
  {
    "url": "blog/random/evp/index.html",
    "revision": "8009e86305db35a218e63b40c9662fc9"
  },
  {
    "url": "blog/random/flip/index.html",
    "revision": "ee3385187908b05436d48192d53fede2"
  },
  {
    "url": "blog/random/honeychurch/index.html",
    "revision": "51b40e45dda3498a4ff34e80dc4c5239"
  },
  {
    "url": "blog/random/index.html",
    "revision": "974916939eef5d2b5c0ffbed37ade2e2"
  },
  {
    "url": "blog/random/lottery/index.html",
    "revision": "0eff771292223488a69e28a03c235371"
  },
  {
    "url": "blog/random/music/index.html",
    "revision": "a8a7d087da9e0ba7f25039c1c3252ba9"
  },
  {
    "url": "blog/random/octal/index.html",
    "revision": "68c34ef2dd358e347987d112034797ca"
  },
  {
    "url": "blog/random/os/index.html",
    "revision": "1eb61a4fa7e6fcb6bae7224fe22c0c3e"
  },
  {
    "url": "blog/random/propellers/index.html",
    "revision": "398731b9d093531316d52d16aa5d516f"
  },
  {
    "url": "blog/random/robux/index.html",
    "revision": "5fdeeac779f3f2c094d8d65b4573f3bb"
  },
  {
    "url": "blog/random/super/index.html",
    "revision": "4f4a98f687e666276ace31a1ff54bb03"
  },
  {
    "url": "blog/random/times/index.html",
    "revision": "a04ff3d096ef8043f04a76ec07df34af"
  },
  {
    "url": "blog/random/travel/index.html",
    "revision": "3555f5b47f0ca027acddc210d094fd19"
  },
  {
    "url": "blog/random/wilhelm/index.html",
    "revision": "a3a1ea34cb30190330f6659c7ea07016"
  },
  {
    "url": "blog/random/year/index.html",
    "revision": "b5a4e0159d5407a2c5e80f4863d272b9"
  },
  {
    "url": "blog/skepticism/2015/08/16/asa/index.html",
    "revision": "a89e04fe276607f2f1115c5d598bb47e"
  },
  {
    "url": "blog/skepticism/2015/08/16/awards/index.html",
    "revision": "9724a444d51528578af76810966418a6"
  },
  {
    "url": "blog/skepticism/2015/08/16/bravo/index.html",
    "revision": "d782e4248f7a3bfa65e66d8ffe9d1436"
  },
  {
    "url": "blog/skepticism/2015/08/16/index.html",
    "revision": "3aa0714d06226617b95d87a1fa88073b"
  },
  {
    "url": "blog/skepticism/2015/08/16/jim/index.html",
    "revision": "0e0da69e8350faf935c1574edc8d6802"
  },
  {
    "url": "blog/skepticism/2015/08/16/naholo/index.html",
    "revision": "bba632f96177020fea25663e7725acc8"
  },
  {
    "url": "blog/skepticism/2015/08/16/resene/index.html",
    "revision": "f89176fc224e120b3c3300b508dfc364"
  },
  {
    "url": "blog/skepticism/2015/08/index.html",
    "revision": "b09c52feae73b7e97f82316b35c20cf1"
  },
  {
    "url": "blog/skepticism/2015/09/20/gop/index.html",
    "revision": "d78239c2f8225386b8f0767e6cbb1581"
  },
  {
    "url": "blog/skepticism/2015/09/20/ignobel/index.html",
    "revision": "5b5e47eadc334e83ced61a81514cfe53"
  },
  {
    "url": "blog/skepticism/2015/09/20/index.html",
    "revision": "ba1ea3a6a579793467083a9586aa943c"
  },
  {
    "url": "blog/skepticism/2015/09/20/supplements/index.html",
    "revision": "34a36a116632ddb3c69fb2c1f868621b"
  },
  {
    "url": "blog/skepticism/2015/09/27/ayahuasca/index.html",
    "revision": "8a541f12077382cd8f3c25069b9a6d70"
  },
  {
    "url": "blog/skepticism/2015/09/27/drought/index.html",
    "revision": "247a18be7ef8acfd14f3413258c56332"
  },
  {
    "url": "blog/skepticism/2015/09/27/index.html",
    "revision": "7d6b004d2f02e1464ea15cef7da8783d"
  },
  {
    "url": "blog/skepticism/2015/09/27/lama/index.html",
    "revision": "f155ccae660021f978158e43769f9155"
  },
  {
    "url": "blog/skepticism/2015/09/27/moon/index.html",
    "revision": "44ce95f8b0c1ecd52c413d11d6a0f782"
  },
  {
    "url": "blog/skepticism/2015/09/27/scan/index.html",
    "revision": "64f77e2a5ef1546c46efae93a4e75bee"
  },
  {
    "url": "blog/skepticism/2015/09/index.html",
    "revision": "222b5b07f799637dee0748da759b1cb7"
  },
  {
    "url": "blog/skepticism/2015/10/04/ghost/index.html",
    "revision": "e9c5bf99f397590777633d71bc5ee3f6"
  },
  {
    "url": "blog/skepticism/2015/10/04/haka/index.html",
    "revision": "ed17fbdaf33732e2489680caeec0aa6c"
  },
  {
    "url": "blog/skepticism/2015/10/04/index.html",
    "revision": "9d12835d9513133bf05481faffce99c7"
  },
  {
    "url": "blog/skepticism/2015/10/04/mars/index.html",
    "revision": "90848868a9504c69732aa84cc0111fc1"
  },
  {
    "url": "blog/skepticism/2015/10/04/pharmacy/index.html",
    "revision": "8eae8879f76f817f4f8c9f7a6d9ab4e3"
  },
  {
    "url": "blog/skepticism/2015/10/04/prostate/index.html",
    "revision": "b2578bcba7b1da10f5e3d582799cbdd1"
  },
  {
    "url": "blog/skepticism/2015/10/11/armageddon/index.html",
    "revision": "fde68364188bd26626cfc1e46a3c4879"
  },
  {
    "url": "blog/skepticism/2015/10/11/climate/index.html",
    "revision": "a4cce0c92258460f7d6f137fc2fb9efc"
  },
  {
    "url": "blog/skepticism/2015/10/11/ghost/index.html",
    "revision": "0bc97763d2fcabb8706350a3fcf8a344"
  },
  {
    "url": "blog/skepticism/2015/10/11/index.html",
    "revision": "e8acfb4903088e11180a44a4ada31899"
  },
  {
    "url": "blog/skepticism/2015/10/11/magnesleep/index.html",
    "revision": "b08cf295bc2f8c55def808aeb8cf5a3c"
  },
  {
    "url": "blog/skepticism/2015/10/11/nhs/index.html",
    "revision": "4c87bf5f8811b067834ace96ecc99ff2"
  },
  {
    "url": "blog/skepticism/2015/10/11/prophet/index.html",
    "revision": "d1e6bfe2277347074f8a72b43aa28b29"
  },
  {
    "url": "blog/skepticism/2015/10/index.html",
    "revision": "30f1ee425fe6bb07ed15f0694d02b7ee"
  },
  {
    "url": "blog/skepticism/2015/11/15/end/index.html",
    "revision": "056410d2435a2c252092d59de6d95b94"
  },
  {
    "url": "blog/skepticism/2015/11/15/index.html",
    "revision": "42948e7bbd44c73d786839e49a0d8489"
  },
  {
    "url": "blog/skepticism/2015/11/index.html",
    "revision": "05f686ee72e34f00696e58c5543f3510"
  },
  {
    "url": "blog/skepticism/2015/12/13/astrology/index.html",
    "revision": "abb8a8f420f899587e92e674d34fddc8"
  },
  {
    "url": "blog/skepticism/2015/12/13/cancer/index.html",
    "revision": "ac8692978242d58af94da88a52e7089a"
  },
  {
    "url": "blog/skepticism/2015/12/13/chickenpox/index.html",
    "revision": "befe5d03ec49b02da8c68a9ef38f81ce"
  },
  {
    "url": "blog/skepticism/2015/12/13/index.html",
    "revision": "9e3ce96baecbd8facd32a79af3186dbf"
  },
  {
    "url": "blog/skepticism/2015/12/13/osteopath/index.html",
    "revision": "840b20592286a25a86cba0959bfe3629"
  },
  {
    "url": "blog/skepticism/2015/12/13/priest/index.html",
    "revision": "8a7906400f2238caef1d8ffe4a24c906"
  },
  {
    "url": "blog/skepticism/2015/12/13/psychic/index.html",
    "revision": "74647d2af090fec7e9dc42698faac20d"
  },
  {
    "url": "blog/skepticism/2015/12/13/vaccines/index.html",
    "revision": "80c4267cec89711c7d0fcfee47bfbedc"
  },
  {
    "url": "blog/skepticism/2015/12/index.html",
    "revision": "040877ad617846e66f6f5cc6153488c1"
  },
  {
    "url": "blog/skepticism/2015/index.html",
    "revision": "1ef58788940aa180f0caf5ee4615905d"
  },
  {
    "url": "blog/skepticism/2016/02/07/antioxidant/index.html",
    "revision": "816ed7f69c12da984497ef2a0c2122f4"
  },
  {
    "url": "blog/skepticism/2016/02/07/index.html",
    "revision": "3218895c11d65b7f44018743f833d821"
  },
  {
    "url": "blog/skepticism/2016/02/07/kfc/index.html",
    "revision": "2471e18818bb90c611d31dc91b5cd1d2"
  },
  {
    "url": "blog/skepticism/2016/02/07/ph/index.html",
    "revision": "f8ff7ee085b741144a5777e01e5ec650"
  },
  {
    "url": "blog/skepticism/2016/02/07/sandy/index.html",
    "revision": "81c303ab072f6417f6ced2531735b713"
  },
  {
    "url": "blog/skepticism/2016/02/07/sarfati/index.html",
    "revision": "12f9eb675df38e6465a297e4fcaee669"
  },
  {
    "url": "blog/skepticism/2016/02/07/trump/index.html",
    "revision": "a04a8adff45dabcff21e3b6b97151fa7"
  },
  {
    "url": "blog/skepticism/2016/02/14/coins/index.html",
    "revision": "825b140c2e241bb05ec7727481589cc6"
  },
  {
    "url": "blog/skepticism/2016/02/14/fast/index.html",
    "revision": "5d1820a945fc1021470935a73a7a24a3"
  },
  {
    "url": "blog/skepticism/2016/02/14/fluoride/index.html",
    "revision": "0824fcb37fce37cb9c8a10e9ad38ee16"
  },
  {
    "url": "blog/skepticism/2016/02/14/icke/index.html",
    "revision": "b84a9e36a164ee6c3f13d8450027df7e"
  },
  {
    "url": "blog/skepticism/2016/02/14/index.html",
    "revision": "74389d2dd40ea9af27dddad310e3ac7e"
  },
  {
    "url": "blog/skepticism/2016/02/14/yeti/index.html",
    "revision": "61c4fc426823480559e86e226e18a559"
  },
  {
    "url": "blog/skepticism/2016/02/21/homeopathy/index.html",
    "revision": "cfcb416a38698c59cd51852722984a7e"
  },
  {
    "url": "blog/skepticism/2016/02/21/index.html",
    "revision": "c66ae694fcf5e2024b2028c1b559f30e"
  },
  {
    "url": "blog/skepticism/2016/02/21/monster/index.html",
    "revision": "13ab2d1dbbee79eab0c04906a863d2a0"
  },
  {
    "url": "blog/skepticism/2016/02/21/scalia/index.html",
    "revision": "96f86dc45efb9791272e462d9d44bdeb"
  },
  {
    "url": "blog/skepticism/2016/02/21/shane/index.html",
    "revision": "bfa3eba18a76132a1bf518740d9c95fc"
  },
  {
    "url": "blog/skepticism/2016/02/21/texas/index.html",
    "revision": "e6111012fbda8fa7ce53e1313f0e6f1d"
  },
  {
    "url": "blog/skepticism/2016/02/28/acupuncture/index.html",
    "revision": "0939386ef71ae36620510763fbd182ef"
  },
  {
    "url": "blog/skepticism/2016/02/28/fsm/index.html",
    "revision": "75b5cdc617b0f0f2051733eba418597e"
  },
  {
    "url": "blog/skepticism/2016/02/28/index.html",
    "revision": "8c08ff1da2656aedce62dceab2e29ce1"
  },
  {
    "url": "blog/skepticism/2016/02/28/iv/index.html",
    "revision": "bbf2cb740b8786d4c91eb5ec535d24cc"
  },
  {
    "url": "blog/skepticism/2016/02/28/natural/index.html",
    "revision": "6aaa55cec268204f9c5a7af646458f03"
  },
  {
    "url": "blog/skepticism/2016/02/28/talc/index.html",
    "revision": "15b66861569b58e2ec9224d563fcd713"
  },
  {
    "url": "blog/skepticism/2016/02/index.html",
    "revision": "e836c4626ec964894a45eeb736dab344"
  },
  {
    "url": "blog/skepticism/2016/03/13/herbs/index.html",
    "revision": "55241d18127b22499495bc16fb0e9521"
  },
  {
    "url": "blog/skepticism/2016/03/13/index.html",
    "revision": "a37af788d569dd7b38e246d86106cca9"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandala/index.html",
    "revision": "02325d3a80be572d590ee6a4580d8bb6"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandela/index.html",
    "revision": "1d489544a8a17515024a96ca0d01bd39"
  },
  {
    "url": "blog/skepticism/2016/03/13/spray/index.html",
    "revision": "e67fb364878d8c483b00aa5426755c8d"
  },
  {
    "url": "blog/skepticism/2016/03/index.html",
    "revision": "92b596d9d3610146a78b81f5d3220ead"
  },
  {
    "url": "blog/skepticism/2016/04/17/charity/index.html",
    "revision": "b1247d2f76b90cb2b248c9e1654ef25a"
  },
  {
    "url": "blog/skepticism/2016/04/17/chiro/index.html",
    "revision": "7d85ac59f2fdbb0257a6444f5540349b"
  },
  {
    "url": "blog/skepticism/2016/04/17/fluoride/index.html",
    "revision": "ebf66185a6e2af6d2083798c03060de7"
  },
  {
    "url": "blog/skepticism/2016/04/17/index.html",
    "revision": "fa0420f3e94c9269495e3a87b1b6a8dd"
  },
  {
    "url": "blog/skepticism/2016/04/17/lotto/index.html",
    "revision": "35e497a0510e444a9c5662836146b0ee"
  },
  {
    "url": "blog/skepticism/2016/04/17/mind/index.html",
    "revision": "ffc0eeb79206ba26074021b526dc7330"
  },
  {
    "url": "blog/skepticism/2016/04/17/whooping/index.html",
    "revision": "5585774e82fac3700240ad317df329dd"
  },
  {
    "url": "blog/skepticism/2016/04/index.html",
    "revision": "584da048222ed87ff094f9b2d9f683aa"
  },
  {
    "url": "blog/skepticism/2016/06/05/1080/index.html",
    "revision": "35c7ddc60151e466e50b040d353de1df"
  },
  {
    "url": "blog/skepticism/2016/06/05/acupuncture/index.html",
    "revision": "9223cb7e04eeec25f967350ccd14920d"
  },
  {
    "url": "blog/skepticism/2016/06/05/family/index.html",
    "revision": "0f6875fe9decaa1909fde196ea409030"
  },
  {
    "url": "blog/skepticism/2016/06/05/index.html",
    "revision": "1cfcbddd899305f2abeefbc971242a20"
  },
  {
    "url": "blog/skepticism/2016/06/05/limbaugh/index.html",
    "revision": "b7075979179d2997309b2db2c8542e52"
  },
  {
    "url": "blog/skepticism/2016/06/12/bobby/index.html",
    "revision": "43ccb4970874dd7ae14ff22bd192daa9"
  },
  {
    "url": "blog/skepticism/2016/06/12/climate/index.html",
    "revision": "51d6e062da2dbb7df3a0a8b44fc462d7"
  },
  {
    "url": "blog/skepticism/2016/06/12/index.html",
    "revision": "3a75d5a81b6557208457da18850b8b5b"
  },
  {
    "url": "blog/skepticism/2016/06/12/pugh/index.html",
    "revision": "67a451f8c50262a5d597397bbe2a4e8c"
  },
  {
    "url": "blog/skepticism/2016/06/12/savage/index.html",
    "revision": "08f3d3461bcda231f719c585e875beb5"
  },
  {
    "url": "blog/skepticism/2016/06/12/sawdust/index.html",
    "revision": "16654cfa3578f505bdd41bacd78354b8"
  },
  {
    "url": "blog/skepticism/2016/06/19/beauty/index.html",
    "revision": "45ae504c7b614d85a1e272cd7c566c3d"
  },
  {
    "url": "blog/skepticism/2016/06/19/bilderberg/index.html",
    "revision": "4c15e3d002c6b8f74091d462131cd099"
  },
  {
    "url": "blog/skepticism/2016/06/19/cyf/index.html",
    "revision": "524eaec053391bf8f4aa3f386458070e"
  },
  {
    "url": "blog/skepticism/2016/06/19/holt/index.html",
    "revision": "430ffbfac9b5d0f4b9075341af7fafb6"
  },
  {
    "url": "blog/skepticism/2016/06/19/index.html",
    "revision": "ed0562f307fe7fd95e5c29d4530cd5a0"
  },
  {
    "url": "blog/skepticism/2016/06/19/silver/index.html",
    "revision": "30220b6a4f2ad6a6394156ff1fa83a72"
  },
  {
    "url": "blog/skepticism/2016/06/19/ufo/index.html",
    "revision": "f544b313058d82b0344f8a159ffa6c30"
  },
  {
    "url": "blog/skepticism/2016/06/26/homeopathy/index.html",
    "revision": "7bc5f0916a6c11f2df3f427649e54ac4"
  },
  {
    "url": "blog/skepticism/2016/06/26/index.html",
    "revision": "6251c7264625949797f61c810d09329d"
  },
  {
    "url": "blog/skepticism/2016/06/26/robbins/index.html",
    "revision": "c4f4f74eff529f7d7fb04550e9f103a2"
  },
  {
    "url": "blog/skepticism/2016/06/26/selfies/index.html",
    "revision": "a1e7edc568816978ed604fd145c8d72d"
  },
  {
    "url": "blog/skepticism/2016/06/26/silver/index.html",
    "revision": "cf9b55a6e3b94e0046ce12546422ee60"
  },
  {
    "url": "blog/skepticism/2016/06/26/ufos/index.html",
    "revision": "17b506988f55b9e44e49c8a17b2801c2"
  },
  {
    "url": "blog/skepticism/2016/06/index.html",
    "revision": "f553b4617894fa3781e56b81f58da168"
  },
  {
    "url": "blog/skepticism/2016/07/03/glyphosate/index.html",
    "revision": "2e828b3e00da1a0eeef5a1f8580d7a4d"
  },
  {
    "url": "blog/skepticism/2016/07/03/gmo/index.html",
    "revision": "c5b78f97f2f4284cd0f7956c181df566"
  },
  {
    "url": "blog/skepticism/2016/07/03/index.html",
    "revision": "0f7d9cabb9587ec5a15fd8468c5e437a"
  },
  {
    "url": "blog/skepticism/2016/07/03/jail/index.html",
    "revision": "76eb99d71d77c7534269f0cd6080eba0"
  },
  {
    "url": "blog/skepticism/2016/07/03/ken/index.html",
    "revision": "42ec3c5673f02b5687f6c9462a7a946f"
  },
  {
    "url": "blog/skepticism/2016/07/10/ark/index.html",
    "revision": "9edb5f24c2118d5490e8e4b2d3f03c76"
  },
  {
    "url": "blog/skepticism/2016/07/10/bee/index.html",
    "revision": "c80fa73b73a7ee7a4882366bba4ae63e"
  },
  {
    "url": "blog/skepticism/2016/07/10/index.html",
    "revision": "2dcaa58b7a8ef4dd6f62467caea54b86"
  },
  {
    "url": "blog/skepticism/2016/07/10/lottery/index.html",
    "revision": "1d42232accedf0c05286a6ed1c017bf1"
  },
  {
    "url": "blog/skepticism/2016/07/10/murder/index.html",
    "revision": "b5e2dbfb65cabf7f277a2c79819537cd"
  },
  {
    "url": "blog/skepticism/2016/07/17/dogs/index.html",
    "revision": "2b0779c45e72e8f6bfe488ca8227444b"
  },
  {
    "url": "blog/skepticism/2016/07/17/fsm/index.html",
    "revision": "08874d5eae05da992a25c49199128ed8"
  },
  {
    "url": "blog/skepticism/2016/07/17/fyi/index.html",
    "revision": "7a75815f4ec586428553de7e493f45e8"
  },
  {
    "url": "blog/skepticism/2016/07/17/index.html",
    "revision": "9ae84fe842816fbf28b29ed0afcfe297"
  },
  {
    "url": "blog/skepticism/2016/07/17/natural/index.html",
    "revision": "bf1b8676f51b7507cb971d1d6978b36c"
  },
  {
    "url": "blog/skepticism/2016/07/17/pokemon/index.html",
    "revision": "2a88370d5bc5d45fa70229cf4ba26cdf"
  },
  {
    "url": "blog/skepticism/2016/07/index.html",
    "revision": "b862869db6114ef20a24a0f509f56b5a"
  },
  {
    "url": "blog/skepticism/2016/08/07/icke/index.html",
    "revision": "c4149178ab853a5281fd67365bb1ea39"
  },
  {
    "url": "blog/skepticism/2016/08/07/index.html",
    "revision": "37ec73184c8d5da61f20c6eca0604b3e"
  },
  {
    "url": "blog/skepticism/2016/08/21/brian/index.html",
    "revision": "e1ad2c9279aea908fe681c23daa4ebc6"
  },
  {
    "url": "blog/skepticism/2016/08/21/chlorine/index.html",
    "revision": "388e33a671da6da099a61b18a58e1d86"
  },
  {
    "url": "blog/skepticism/2016/08/21/index.html",
    "revision": "d9a459976088ff236a9a6082344ad475"
  },
  {
    "url": "blog/skepticism/2016/08/21/murder/index.html",
    "revision": "d39ceca7b5edddd69f7d289c6387997f"
  },
  {
    "url": "blog/skepticism/2016/08/21/superfoods/index.html",
    "revision": "4d4b95274a4cf9c824f4423a0dd8af73"
  },
  {
    "url": "blog/skepticism/2016/08/21/witch/index.html",
    "revision": "986d6422dbacf479ddf767945f61db4f"
  },
  {
    "url": "blog/skepticism/2016/08/28/alcohol/index.html",
    "revision": "1c6399051e6861864d585bda24a9406c"
  },
  {
    "url": "blog/skepticism/2016/08/28/chiro/index.html",
    "revision": "99190a94b6095a93d52db5021d4892d9"
  },
  {
    "url": "blog/skepticism/2016/08/28/index.html",
    "revision": "cd279351d56638875ecb66836cc3417c"
  },
  {
    "url": "blog/skepticism/2016/08/28/processed/index.html",
    "revision": "2c16a74f88b0c8cc8129f9a1485973e9"
  },
  {
    "url": "blog/skepticism/2016/08/28/sbh/index.html",
    "revision": "74296d86620bfc879d67c3225a08f74f"
  },
  {
    "url": "blog/skepticism/2016/08/index.html",
    "revision": "089c65cb043125c8ac8829bd8d8faa06"
  },
  {
    "url": "blog/skepticism/2016/09/18/altruism/index.html",
    "revision": "a8c21d2d9c281643c16765d1386c5921"
  },
  {
    "url": "blog/skepticism/2016/09/18/better/index.html",
    "revision": "d33c5decf280619ef390ee238314e95b"
  },
  {
    "url": "blog/skepticism/2016/09/18/homeopathy/index.html",
    "revision": "d953f4ba84cdf0e220d3fccb4714b100"
  },
  {
    "url": "blog/skepticism/2016/09/18/index.html",
    "revision": "453985b12084b0267a35dad393834336"
  },
  {
    "url": "blog/skepticism/2016/09/18/nonsense/index.html",
    "revision": "22eb612148edb9beb723d843e7d18fe0"
  },
  {
    "url": "blog/skepticism/2016/09/18/trump/index.html",
    "revision": "f45c2f308f1a67e33d85d10614dfe63d"
  },
  {
    "url": "blog/skepticism/2016/09/25/clinic/index.html",
    "revision": "fe0a845792cfdd298491410c4ceda1d2"
  },
  {
    "url": "blog/skepticism/2016/09/25/fluoride/index.html",
    "revision": "d110059eed7db47005f54cc7518dd65f"
  },
  {
    "url": "blog/skepticism/2016/09/25/homeopathy/index.html",
    "revision": "0eb1dd90c25026bca2d7476a13f9d465"
  },
  {
    "url": "blog/skepticism/2016/09/25/index.html",
    "revision": "4ed72046a0705c71546cbe7596161127"
  },
  {
    "url": "blog/skepticism/2016/09/25/murder/index.html",
    "revision": "9f5f4e340ca0bbd9dafe216c01356ac7"
  },
  {
    "url": "blog/skepticism/2016/09/index.html",
    "revision": "ade9e6d7cb928704eec5cff58251d7d7"
  },
  {
    "url": "blog/skepticism/2016/10/21/bigfoot/index.html",
    "revision": "88a6669d9196c69b1cb8d5233b06afe9"
  },
  {
    "url": "blog/skepticism/2016/10/21/breasts/index.html",
    "revision": "1efaf085f6374eb69a3a9b71b2874711"
  },
  {
    "url": "blog/skepticism/2016/10/21/index.html",
    "revision": "ff3e94f0b5e9deacccefa929d8452040"
  },
  {
    "url": "blog/skepticism/2016/10/21/medsafe/index.html",
    "revision": "8ea304d18945d5e801fc7a28486708b7"
  },
  {
    "url": "blog/skepticism/2016/10/21/zenteq/index.html",
    "revision": "23a5666de3bb99a578e2cb7686d1fcd8"
  },
  {
    "url": "blog/skepticism/2016/10/index.html",
    "revision": "67bd8b98dd2e1988ae4f3ba75ffa255a"
  },
  {
    "url": "blog/skepticism/2016/11/13/conference/index.html",
    "revision": "5ea67f8a4209909674c71829fd50cf08"
  },
  {
    "url": "blog/skepticism/2016/11/13/green/index.html",
    "revision": "f8018a4b98f4cd557fa8d95ea26c4239"
  },
  {
    "url": "blog/skepticism/2016/11/13/index.html",
    "revision": "b1ef38354c63a17ff71f58d533357ea9"
  },
  {
    "url": "blog/skepticism/2016/11/13/vice/index.html",
    "revision": "5d2784e731cef36e1e5e2d6df6676154"
  },
  {
    "url": "blog/skepticism/2016/11/27/bioptron/index.html",
    "revision": "c79fa2abe9c9225e78a1931463a2ef24"
  },
  {
    "url": "blog/skepticism/2016/11/27/conference/index.html",
    "revision": "e2dadb25722d073b8d3d3bf51cd58844"
  },
  {
    "url": "blog/skepticism/2016/11/27/earthquake/index.html",
    "revision": "5ac9698989dec178a553c90600291903"
  },
  {
    "url": "blog/skepticism/2016/11/27/index.html",
    "revision": "d5db00812a662868f5ac4b3b9bcb64cb"
  },
  {
    "url": "blog/skepticism/2016/11/index.html",
    "revision": "1211ed884f0224ed324eef565f856be0"
  },
  {
    "url": "blog/skepticism/2016/12/04/conference/index.html",
    "revision": "59ec9d38a1bb5dfff60e6d46213f7830"
  },
  {
    "url": "blog/skepticism/2016/12/04/index.html",
    "revision": "def1c911aa1515ceccb7d50659a20862"
  },
  {
    "url": "blog/skepticism/2016/12/18/colin/index.html",
    "revision": "005b70ced50fd7c7e23d57a9895fb453"
  },
  {
    "url": "blog/skepticism/2016/12/18/fiji/index.html",
    "revision": "abe0658eb50fe4a62eaf93efde95f081"
  },
  {
    "url": "blog/skepticism/2016/12/18/index.html",
    "revision": "4a9f733f44ab702d17c8f00e9f4592cd"
  },
  {
    "url": "blog/skepticism/2016/12/18/kinesiology/index.html",
    "revision": "61880c393fd9d7a033650781573b699e"
  },
  {
    "url": "blog/skepticism/2016/12/18/mmm/index.html",
    "revision": "7d00ec296b171d9656d32afa22e50415"
  },
  {
    "url": "blog/skepticism/2016/12/18/nigel/index.html",
    "revision": "651f3ccad8b2da719719e332eb3cad45"
  },
  {
    "url": "blog/skepticism/2016/12/index.html",
    "revision": "f8434a462f5c97e26d440276e9bcc5b7"
  },
  {
    "url": "blog/skepticism/2016/index.html",
    "revision": "d988b99d7a2deffab2cd0f649dbbd10e"
  },
  {
    "url": "blog/skepticism/2017/01/22/index.html",
    "revision": "d57fe4d0c4cbf32081e06b1906de7e58"
  },
  {
    "url": "blog/skepticism/2017/01/22/scientology/index.html",
    "revision": "98df456292f35824b107769a8b8c1d7a"
  },
  {
    "url": "blog/skepticism/2017/01/29/creation/index.html",
    "revision": "97d23f10ccac943a3d9de46e7659f692"
  },
  {
    "url": "blog/skepticism/2017/01/29/index.html",
    "revision": "b1c7bfbb7ceb58e412c466ed4751916d"
  },
  {
    "url": "blog/skepticism/2017/01/index.html",
    "revision": "addee21acdd52e67b1c70af3c450d998"
  },
  {
    "url": "blog/skepticism/2017/02/05/fraudster/index.html",
    "revision": "9197d4f3ac1883327ecf38c433c0bac7"
  },
  {
    "url": "blog/skepticism/2017/02/05/gervais/index.html",
    "revision": "223988b0fd15e37367061c9a4f966544"
  },
  {
    "url": "blog/skepticism/2017/02/05/index.html",
    "revision": "17bb131b2168fc181cdb3640a8fa0004"
  },
  {
    "url": "blog/skepticism/2017/02/05/scientology/index.html",
    "revision": "0a1e32ef6c99932c1bc8506bdfedfc87"
  },
  {
    "url": "blog/skepticism/2017/02/19/homeopathy/index.html",
    "revision": "8ffbd61b2b7b6cb59fa521c6b6ad9029"
  },
  {
    "url": "blog/skepticism/2017/02/19/index.html",
    "revision": "7fe2f3c2b93a4929dd6f37174ef90866"
  },
  {
    "url": "blog/skepticism/2017/02/19/lottery/index.html",
    "revision": "51918fbfc483cc472dd180d728acc93f"
  },
  {
    "url": "blog/skepticism/2017/02/19/vaxxed/index.html",
    "revision": "932173c4ca30fa5166ce1b09d41a6e7e"
  },
  {
    "url": "blog/skepticism/2017/02/19/whales/index.html",
    "revision": "7153d1798d4b6621e3e311a91e5fcb26"
  },
  {
    "url": "blog/skepticism/2017/02/index.html",
    "revision": "95ba52a9a306cd1c5cf0909621528d1b"
  },
  {
    "url": "blog/skepticism/2017/03/05/index.html",
    "revision": "fab6d2d00a12d160402a7ac6ad62e9e2"
  },
  {
    "url": "blog/skepticism/2017/03/05/rea/index.html",
    "revision": "071b07ba9a6ae649f48b841a677aeaf1"
  },
  {
    "url": "blog/skepticism/2017/03/19/fake/index.html",
    "revision": "e933dc93bad742f9bf313fb6a84cac8a"
  },
  {
    "url": "blog/skepticism/2017/03/19/index.html",
    "revision": "e66fb58406f9a28e6724b99883a2ff92"
  },
  {
    "url": "blog/skepticism/2017/03/19/murder/index.html",
    "revision": "6b904e5511db8d542b31ef4788a98527"
  },
  {
    "url": "blog/skepticism/2017/03/26/census/index.html",
    "revision": "235b0107cf8512502686c8f76b36df7a"
  },
  {
    "url": "blog/skepticism/2017/03/26/index.html",
    "revision": "de77a51378a15a6c3a9ca95bf0efe311"
  },
  {
    "url": "blog/skepticism/2017/03/26/nzmj/index.html",
    "revision": "57ef7319dbff725983fef040bbe03279"
  },
  {
    "url": "blog/skepticism/2017/03/26/shaquille/index.html",
    "revision": "c6bb5144ab65ab9806b9a4646161ef71"
  },
  {
    "url": "blog/skepticism/2017/03/index.html",
    "revision": "e471e75a0a408d9a74987c03a64aa4ca"
  },
  {
    "url": "blog/skepticism/2017/04/02/index.html",
    "revision": "2f4d8c71e84b8badfd097b4f6f0c9354"
  },
  {
    "url": "blog/skepticism/2017/04/02/nasa/index.html",
    "revision": "54db358423b16c74358584679f12a3f5"
  },
  {
    "url": "blog/skepticism/2017/04/02/science/index.html",
    "revision": "9a2624303aee1af7bc32ad4a5dd02d4a"
  },
  {
    "url": "blog/skepticism/2017/04/02/vaxxed/index.html",
    "revision": "f595f5e8c96d72599e03c57be8d5bb21"
  },
  {
    "url": "blog/skepticism/2017/04/09/index.html",
    "revision": "b0340cdce82a5212ae471e9f2273e199"
  },
  {
    "url": "blog/skepticism/2017/04/09/tekiri/index.html",
    "revision": "cdaab638452871bd1c0023e54c563e7c"
  },
  {
    "url": "blog/skepticism/2017/04/09/vaxxed/index.html",
    "revision": "7c4f669837fd0f1e5fe37f0c5e88bc37"
  },
  {
    "url": "blog/skepticism/2017/04/23/arise/index.html",
    "revision": "52327ef505e438513507eba70e93dfe0"
  },
  {
    "url": "blog/skepticism/2017/04/23/index.html",
    "revision": "1d42a53467e0fd382fafea0672aad172"
  },
  {
    "url": "blog/skepticism/2017/04/23/kelvin/index.html",
    "revision": "03d6656ddb395cdc4018a39039f28259"
  },
  {
    "url": "blog/skepticism/2017/04/index.html",
    "revision": "655dead79ccb3ff2bc2a4c09f4faee7c"
  },
  {
    "url": "blog/skepticism/2017/05/07/cancer/index.html",
    "revision": "2481b825a797992f69c251649dc8c060"
  },
  {
    "url": "blog/skepticism/2017/05/07/index.html",
    "revision": "be783fd557bb5c8233389171d9d40ba3"
  },
  {
    "url": "blog/skepticism/2017/05/07/nigel/index.html",
    "revision": "3d8972769d8eda97ac1007bc136d4f42"
  },
  {
    "url": "blog/skepticism/2017/05/21/blasphemy/index.html",
    "revision": "d5508d8b0cbda32e346caf04713a071e"
  },
  {
    "url": "blog/skepticism/2017/05/21/flat/index.html",
    "revision": "c9746152e5d2713a113b09b974393730"
  },
  {
    "url": "blog/skepticism/2017/05/21/index.html",
    "revision": "f02a9e4982e3a9f575c921fd6d6005ee"
  },
  {
    "url": "blog/skepticism/2017/05/21/maori/index.html",
    "revision": "9c0e227bd24c91b3f19a6fc487143b7a"
  },
  {
    "url": "blog/skepticism/2017/05/index.html",
    "revision": "d1f1ce0f6dbb0b92ca3c86fd70f1fc20"
  },
  {
    "url": "blog/skepticism/2017/06/04/bigelow/index.html",
    "revision": "ec69da147e62ece43bf075f12dcadf71"
  },
  {
    "url": "blog/skepticism/2017/06/04/climate/index.html",
    "revision": "c29ed96eb3d13ec6ebb3487ea3af48e4"
  },
  {
    "url": "blog/skepticism/2017/06/04/hansford/index.html",
    "revision": "6bbea3a64cc406e4a2f860956f6a4d7c"
  },
  {
    "url": "blog/skepticism/2017/06/04/index.html",
    "revision": "25f97a0c39abbbc218f12bab2f0a68b4"
  },
  {
    "url": "blog/skepticism/2017/06/04/wasp/index.html",
    "revision": "c3b7b0e96343c9b9187f193e6b39aed4"
  },
  {
    "url": "blog/skepticism/2017/06/11/colonic/index.html",
    "revision": "2e22157126118487928ed0b28443277e"
  },
  {
    "url": "blog/skepticism/2017/06/11/credulous/index.html",
    "revision": "21bf11a0d6ffa254b1ef0bd360f5b928"
  },
  {
    "url": "blog/skepticism/2017/06/11/index.html",
    "revision": "7be9908531d5acf0fb0012aa9baad97a"
  },
  {
    "url": "blog/skepticism/2017/06/11/journals/index.html",
    "revision": "e7252892ed176fa5db699bce2db7ff39"
  },
  {
    "url": "blog/skepticism/2017/06/18/breatharians/index.html",
    "revision": "75a73193ea09df66fe4378e8912366a9"
  },
  {
    "url": "blog/skepticism/2017/06/18/fieldays/index.html",
    "revision": "9901e1b6b1b2abda66c9b322ca3fbf19"
  },
  {
    "url": "blog/skepticism/2017/06/18/index.html",
    "revision": "5acc61c2c5d5a2800c74347ffc69c4e7"
  },
  {
    "url": "blog/skepticism/2017/06/18/jw/index.html",
    "revision": "f9866d325c842ce15f45bb0a5a553b6b"
  },
  {
    "url": "blog/skepticism/2017/06/18/oil/index.html",
    "revision": "1b597067c8c44056f6706c4fa4f2fb3d"
  },
  {
    "url": "blog/skepticism/2017/06/index.html",
    "revision": "a1e218d9ac6302197ef58224e306e19f"
  },
  {
    "url": "blog/skepticism/2017/07/02/baby/index.html",
    "revision": "eca579bbe2203cb2e2e333d389f7c56b"
  },
  {
    "url": "blog/skepticism/2017/07/02/index.html",
    "revision": "b04936b17c65d1fed7310240e04c42f1"
  },
  {
    "url": "blog/skepticism/2017/07/02/infowars/index.html",
    "revision": "9ae48a429b6a133f0370838f9442e639"
  },
  {
    "url": "blog/skepticism/2017/07/02/scientology/index.html",
    "revision": "4af4678695459c720428d4aeb9b9d31f"
  },
  {
    "url": "blog/skepticism/2017/07/16/bananas/index.html",
    "revision": "4f0ef2db7f2abd26e30132a19f2ddacc"
  },
  {
    "url": "blog/skepticism/2017/07/16/circles/index.html",
    "revision": "2ecdfa36542794f41acd2c39a417cb6e"
  },
  {
    "url": "blog/skepticism/2017/07/16/index.html",
    "revision": "12a4a4e8d23d99fca14c9accd01634be"
  },
  {
    "url": "blog/skepticism/2017/07/16/siggi/index.html",
    "revision": "46c5189dab4114997438dc8f66dfea42"
  },
  {
    "url": "blog/skepticism/2017/07/16/vaxxed/index.html",
    "revision": "68edc03d19241e109b7a9e0dcaec7a29"
  },
  {
    "url": "blog/skepticism/2017/07/30/bleach/index.html",
    "revision": "cb3383e1d3a0ffe7ee96bb2d9f240480"
  },
  {
    "url": "blog/skepticism/2017/07/30/bluebeam/index.html",
    "revision": "ca74262e87c586b807173d9da01c47f4"
  },
  {
    "url": "blog/skepticism/2017/07/30/index.html",
    "revision": "f75044d7dbfcff32a9358e63b67b50bb"
  },
  {
    "url": "blog/skepticism/2017/07/30/police/index.html",
    "revision": "571dbd4a9951a1fdd2a10efcf292b948"
  },
  {
    "url": "blog/skepticism/2017/07/index.html",
    "revision": "10fdc55bffb1fe75d2f2c2372b538b01"
  },
  {
    "url": "blog/skepticism/2017/08/06/conned/index.html",
    "revision": "0060771ec08d6a733417ec43b061cdae"
  },
  {
    "url": "blog/skepticism/2017/08/06/doll/index.html",
    "revision": "8c039c0252a1e6d94913336e616d67ec"
  },
  {
    "url": "blog/skepticism/2017/08/06/index.html",
    "revision": "383c9aac5de42d511242b5972e402dd4"
  },
  {
    "url": "blog/skepticism/2017/08/06/jacinda/index.html",
    "revision": "e58326c6bede9197ef22b5c5cb82ae35"
  },
  {
    "url": "blog/skepticism/2017/08/06/lotto/index.html",
    "revision": "df297e9b2e774a178d3e3b5a194d9659"
  },
  {
    "url": "blog/skepticism/2017/08/27/index.html",
    "revision": "d4ab952fd87ea919ec08adc727cd2409"
  },
  {
    "url": "blog/skepticism/2017/08/27/naturopath/index.html",
    "revision": "1e5fd393e555c5be9349319bd8e778fd"
  },
  {
    "url": "blog/skepticism/2017/08/27/satanic/index.html",
    "revision": "b17dc2c3dcf5e2d5ef85577737c39b78"
  },
  {
    "url": "blog/skepticism/2017/08/index.html",
    "revision": "00f9edee1ce276bcbfdf50a86408bf0b"
  },
  {
    "url": "blog/skepticism/2017/09/03/apocalypse/index.html",
    "revision": "d3f867421e361b8fcf3635ff1f8ab967"
  },
  {
    "url": "blog/skepticism/2017/09/03/cancer/index.html",
    "revision": "629d35fb43c43b19f0792746c1b40d18"
  },
  {
    "url": "blog/skepticism/2017/09/03/index.html",
    "revision": "39a0d0246facded4ea7af21eb87a1644"
  },
  {
    "url": "blog/skepticism/2017/09/03/rectangle/index.html",
    "revision": "9dbec9dbd6ade11180acb35742cb9aa7"
  },
  {
    "url": "blog/skepticism/2017/09/03/stargate/index.html",
    "revision": "bd712cb74fd7b34104608a3774c2afb6"
  },
  {
    "url": "blog/skepticism/2017/09/index.html",
    "revision": "284126e6650b0c744efd0b4d78478fa5"
  },
  {
    "url": "blog/skepticism/2017/10/01/apocalypse/index.html",
    "revision": "50edcbd74a69f468c3fb793c4ca585fc"
  },
  {
    "url": "blog/skepticism/2017/10/01/freeman/index.html",
    "revision": "5d910410034cf9006a4a39c43f2104a4"
  },
  {
    "url": "blog/skepticism/2017/10/01/index.html",
    "revision": "5e74de195e11a29039813b4764f4f1a9"
  },
  {
    "url": "blog/skepticism/2017/10/01/pharmacy/index.html",
    "revision": "a70ec677ca3a7846d80f74bbfae2055e"
  },
  {
    "url": "blog/skepticism/2017/10/08/index.html",
    "revision": "00a45b06993344222c215d450dfecc48"
  },
  {
    "url": "blog/skepticism/2017/10/08/pill/index.html",
    "revision": "0a1fdbdbd4223f9e32223108b8b699bc"
  },
  {
    "url": "blog/skepticism/2017/10/08/qsb/index.html",
    "revision": "daba958574ef04fb0d0599e880c7fc96"
  },
  {
    "url": "blog/skepticism/2017/10/08/vegas/index.html",
    "revision": "0c29cb787b08cd2394ad658ca2e17f62"
  },
  {
    "url": "blog/skepticism/2017/10/15/doterra/index.html",
    "revision": "bb76e8fbed8a4170315c464cb9bcb4d6"
  },
  {
    "url": "blog/skepticism/2017/10/15/index.html",
    "revision": "3f9ae35eac345d175cf55462447c96da"
  },
  {
    "url": "blog/skepticism/2017/10/15/lie/index.html",
    "revision": "d27cb458c333e476db7626f80a529d12"
  },
  {
    "url": "blog/skepticism/2017/10/15/soap/index.html",
    "revision": "7b9b28fe01480a43f677ace8c78c206b"
  },
  {
    "url": "blog/skepticism/2017/10/index.html",
    "revision": "0d75e5152753329a10e0f026ad66ec7b"
  },
  {
    "url": "blog/skepticism/2017/11/05/conference/index.html",
    "revision": "73b4dbeb480098cc2420f604008fc4a8"
  },
  {
    "url": "blog/skepticism/2017/11/05/glyphosate/index.html",
    "revision": "273f835f3118211f90dd6122e01b9f26"
  },
  {
    "url": "blog/skepticism/2017/11/05/index.html",
    "revision": "1a9b6497d0ed447817dac5963e856bee"
  },
  {
    "url": "blog/skepticism/2017/11/05/stranded/index.html",
    "revision": "8819d52c6ef24c536efde19db9b82b79"
  },
  {
    "url": "blog/skepticism/2017/11/05/tracts/index.html",
    "revision": "ad8e379d3787a09ca592eacd458ef7d8"
  },
  {
    "url": "blog/skepticism/2017/11/12/ghost/index.html",
    "revision": "271af4602a84da39add35b3555ee78bb"
  },
  {
    "url": "blog/skepticism/2017/11/12/green/index.html",
    "revision": "cbb5a37bae37bcb5b16c84e30b7f85e0"
  },
  {
    "url": "blog/skepticism/2017/11/12/harassment/index.html",
    "revision": "e8b0183418b69333abc0c1d5d5c9339c"
  },
  {
    "url": "blog/skepticism/2017/11/12/index.html",
    "revision": "0d05e5fbfda17e9f3a6f85dd8f0166ac"
  },
  {
    "url": "blog/skepticism/2017/11/12/libby/index.html",
    "revision": "98f58dbca003f6bf5b0807963bf615b0"
  },
  {
    "url": "blog/skepticism/2017/11/index.html",
    "revision": "a2d0f09247139bc467c80fbf2390cb06"
  },
  {
    "url": "blog/skepticism/2017/12/03/acupuncture/index.html",
    "revision": "9180065133448699ec53a8c07ac7eef2"
  },
  {
    "url": "blog/skepticism/2017/12/03/denialism/index.html",
    "revision": "e21fc8cc622d4dd2fa2551e7c60b58e5"
  },
  {
    "url": "blog/skepticism/2017/12/03/dowsing/index.html",
    "revision": "0a8c09ad90ad6ed68bda69aaf7b1fece"
  },
  {
    "url": "blog/skepticism/2017/12/03/holes/index.html",
    "revision": "52b8ea7f20ed75a6be7f698cce8d4cb8"
  },
  {
    "url": "blog/skepticism/2017/12/03/index.html",
    "revision": "77ba45660d48066864974a2457866c44"
  },
  {
    "url": "blog/skepticism/2017/12/17/index.html",
    "revision": "e355c16b3ae1c7bb54246c0a5ab7ba28"
  },
  {
    "url": "blog/skepticism/2017/12/17/nhs/index.html",
    "revision": "2c58e99762a320f66b134f551f774459"
  },
  {
    "url": "blog/skepticism/2017/12/17/oto/index.html",
    "revision": "bdb23ab8ee0227f73abedb8bef23cf95"
  },
  {
    "url": "blog/skepticism/2017/12/17/pastafarian/index.html",
    "revision": "32e05429308b681cd332598b63c670a7"
  },
  {
    "url": "blog/skepticism/2017/12/17/shc/index.html",
    "revision": "398be555c654ba9650b0360b7cd2fa44"
  },
  {
    "url": "blog/skepticism/2017/12/17/wellworks/index.html",
    "revision": "0e835569bf5b4de34c66c850f6d2faf0"
  },
  {
    "url": "blog/skepticism/2017/12/index.html",
    "revision": "eeca6d4f20302c03cdc28a8c14bca072"
  },
  {
    "url": "blog/skepticism/2017/index.html",
    "revision": "284018e467d0d96e251ed2ec9f8f1860"
  },
  {
    "url": "blog/skepticism/2018/01/21/grounding/index.html",
    "revision": "94041c445376230fa6ca675b1482f852"
  },
  {
    "url": "blog/skepticism/2018/01/21/index.html",
    "revision": "a23edc58d6c27c0d9780413cfcd5c4cc"
  },
  {
    "url": "blog/skepticism/2018/01/21/naturopath/index.html",
    "revision": "9e0e485cacf58b0d6f74d832922b9930"
  },
  {
    "url": "blog/skepticism/2018/01/21/respen/index.html",
    "revision": "6a9cbe66a1e73cbdf19a98af569c02f4"
  },
  {
    "url": "blog/skepticism/2018/01/28/bears/index.html",
    "revision": "44dd06cd70944f765e099da0c1f1d3de"
  },
  {
    "url": "blog/skepticism/2018/01/28/index.html",
    "revision": "20a79072a496994e4c25839a16d06de1"
  },
  {
    "url": "blog/skepticism/2018/01/28/peppering/index.html",
    "revision": "f80a821fa5b5e1f27ae273c9803db47b"
  },
  {
    "url": "blog/skepticism/2018/01/28/pet/index.html",
    "revision": "5a85b0808eded435ff46480a69607d2c"
  },
  {
    "url": "blog/skepticism/2018/01/28/quake/index.html",
    "revision": "3a614c1d263d4fcbc842553d1d52c55c"
  },
  {
    "url": "blog/skepticism/2018/01/28/scientology/index.html",
    "revision": "2495da11fc11b8f57189f8cd2d8008ed"
  },
  {
    "url": "blog/skepticism/2018/01/index.html",
    "revision": "5963c19c9ca2bd0f193f2ce983eae6aa"
  },
  {
    "url": "blog/skepticism/2018/02/11/asa/index.html",
    "revision": "bb3e674efdf0f375dfa00177c9d945c1"
  },
  {
    "url": "blog/skepticism/2018/02/11/cannabis/index.html",
    "revision": "a44e6c55436559a6ff6a4a8e2adb02a8"
  },
  {
    "url": "blog/skepticism/2018/02/11/elon/index.html",
    "revision": "5fd48f2e75fc6038036e24ae5a5f5df9"
  },
  {
    "url": "blog/skepticism/2018/02/11/homeopathy/index.html",
    "revision": "8f504da0b2e0eedd7f90a9a07d4dabd2"
  },
  {
    "url": "blog/skepticism/2018/02/11/index.html",
    "revision": "8a8f546b5ec87b415f7254e5f6b7ec65"
  },
  {
    "url": "blog/skepticism/2018/02/11/water/index.html",
    "revision": "2775dbbd433ec1b759a135a49a6adab5"
  },
  {
    "url": "blog/skepticism/2018/02/25/crisis/index.html",
    "revision": "0d453a2ce96bf5915b93b5e0e07d4f53"
  },
  {
    "url": "blog/skepticism/2018/02/25/eggs/index.html",
    "revision": "00ec1049f36a214dd73dda75f00a8fc1"
  },
  {
    "url": "blog/skepticism/2018/02/25/fsm/index.html",
    "revision": "123a747b45a00edf2049003ee83e2430"
  },
  {
    "url": "blog/skepticism/2018/02/25/index.html",
    "revision": "53859524b73a6384f80754227bdc7ccb"
  },
  {
    "url": "blog/skepticism/2018/02/25/number/index.html",
    "revision": "86c3d046d2975030b5957b1cd7f504bc"
  },
  {
    "url": "blog/skepticism/2018/02/25/quackery/index.html",
    "revision": "2a9859e413f80c78cbb72b6ff21db20c"
  },
  {
    "url": "blog/skepticism/2018/02/index.html",
    "revision": "f36ace011979ce71e1f84a719a2ab29c"
  },
  {
    "url": "blog/skepticism/2018/03/11/ai/index.html",
    "revision": "e0537274d6e156d3bf903cc4cf85c4c5"
  },
  {
    "url": "blog/skepticism/2018/03/11/index.html",
    "revision": "c0db944a9af33937d23c2888b27288f8"
  },
  {
    "url": "blog/skepticism/2018/03/11/radiation/index.html",
    "revision": "17d0d187063502555a553befaea89a68"
  },
  {
    "url": "blog/skepticism/2018/03/11/reiki/index.html",
    "revision": "38acb14690706ba352ce110524876f1c"
  },
  {
    "url": "blog/skepticism/2018/03/11/ufo/index.html",
    "revision": "50613406d5c91841f422c4b4c4dda88f"
  },
  {
    "url": "blog/skepticism/2018/03/18/ghost/index.html",
    "revision": "5bf492b67c4bb96be8b2dce91ae7c912"
  },
  {
    "url": "blog/skepticism/2018/03/18/index.html",
    "revision": "2e6fd6a9f73c4aa25ba415477fd569ad"
  },
  {
    "url": "blog/skepticism/2018/03/18/psychic/index.html",
    "revision": "cd1e9225d552b271f3ddf7c4851f8b3d"
  },
  {
    "url": "blog/skepticism/2018/03/18/quack/index.html",
    "revision": "6578d2fcf81524916ba5748e4a137cc2"
  },
  {
    "url": "blog/skepticism/2018/03/18/radiation/index.html",
    "revision": "5437baa36ca920fd15073c0ec2730718"
  },
  {
    "url": "blog/skepticism/2018/03/index.html",
    "revision": "a66f802e928b805ffcd11c9c7b8175d1"
  },
  {
    "url": "blog/skepticism/2018/04/08/calocurb/index.html",
    "revision": "f7782d6a1b4277760c17a446e588fead"
  },
  {
    "url": "blog/skepticism/2018/04/08/cam/index.html",
    "revision": "925c47a1f08ba7da237f8b109285ea0e"
  },
  {
    "url": "blog/skepticism/2018/04/08/index.html",
    "revision": "48d6c780824bdedb3291ae549f460efe"
  },
  {
    "url": "blog/skepticism/2018/04/08/psychic/index.html",
    "revision": "813ed1fe9419b3cecfb50413931076ae"
  },
  {
    "url": "blog/skepticism/2018/04/08/vaccines/index.html",
    "revision": "52af678b1e40e8966547d6dbe92ed46e"
  },
  {
    "url": "blog/skepticism/2018/04/15/coffee/index.html",
    "revision": "1623a348380556cde62d7208b440160f"
  },
  {
    "url": "blog/skepticism/2018/04/15/ignorance/index.html",
    "revision": "13e747b64bc08951daabb11cfd6cda82"
  },
  {
    "url": "blog/skepticism/2018/04/15/index.html",
    "revision": "ec91a60ff0a5abefa592112eefd8bf09"
  },
  {
    "url": "blog/skepticism/2018/04/15/nasa/index.html",
    "revision": "4996c0c6e7921524df2015f9c3a55201"
  },
  {
    "url": "blog/skepticism/2018/04/15/tapu/index.html",
    "revision": "eb55efa8506d809e38120f248f8cd2d0"
  },
  {
    "url": "blog/skepticism/2018/04/29/google/index.html",
    "revision": "3897ad172dd274cca673b31e26b0db6d"
  },
  {
    "url": "blog/skepticism/2018/04/29/homeopathy/index.html",
    "revision": "230bc44c5bc2fdcf45385dac56a830ab"
  },
  {
    "url": "blog/skepticism/2018/04/29/index.html",
    "revision": "c5891e1f466fd315909e45570e0d9831"
  },
  {
    "url": "blog/skepticism/2018/04/29/ken/index.html",
    "revision": "9e67a087e0316bf9634f9431ec91c575"
  },
  {
    "url": "blog/skepticism/2018/04/29/v2k/index.html",
    "revision": "ff241111042bf9bf430b0101bae55732"
  },
  {
    "url": "blog/skepticism/2018/04/index.html",
    "revision": "92c45bde0d0c88cb50408eb509a8370a"
  },
  {
    "url": "blog/skepticism/2018/05/13/astrology/index.html",
    "revision": "6a1b9bc315e9b6b9f5cfd7ded19ffb3e"
  },
  {
    "url": "blog/skepticism/2018/05/13/crystals/index.html",
    "revision": "228f457c0ceb11f673469996723c6d49"
  },
  {
    "url": "blog/skepticism/2018/05/13/dawkins/index.html",
    "revision": "e0c12167e0b184ffcb5b00e8308a363a"
  },
  {
    "url": "blog/skepticism/2018/05/13/index.html",
    "revision": "81c37921627c03fddba6643c715f0fa0"
  },
  {
    "url": "blog/skepticism/2018/05/13/kangen/index.html",
    "revision": "dd85ffbc9d89a64fc7e4321260377e12"
  },
  {
    "url": "blog/skepticism/2018/05/13/vitamins/index.html",
    "revision": "b2f04150720d14228c4a33b1140c913e"
  },
  {
    "url": "blog/skepticism/2018/05/27/flat/index.html",
    "revision": "654ef57f9aeacdc304d206bc640a5a7a"
  },
  {
    "url": "blog/skepticism/2018/05/27/index.html",
    "revision": "c07f6722eb71d5de9abb478b3e9d5f08"
  },
  {
    "url": "blog/skepticism/2018/05/27/kangen/index.html",
    "revision": "9e1c01a9c8ac2e6cc5eeada438d5ce7b"
  },
  {
    "url": "blog/skepticism/2018/05/27/ness/index.html",
    "revision": "17026d03842bb2608740debe247682e6"
  },
  {
    "url": "blog/skepticism/2018/05/27/oz/index.html",
    "revision": "d112ac80f8d631ee4ac4dc765ffbd3c9"
  },
  {
    "url": "blog/skepticism/2018/05/27/psychic/index.html",
    "revision": "11203413113223f92c03876836696684"
  },
  {
    "url": "blog/skepticism/2018/05/index.html",
    "revision": "64ae4c8302bed4b83cf3c25d09da2861"
  },
  {
    "url": "blog/skepticism/2018/06/10/astrology/index.html",
    "revision": "c8fe2b03e4f4dde4566844d4f9ca7f56"
  },
  {
    "url": "blog/skepticism/2018/06/10/index.html",
    "revision": "c16099565b92893bdb384723a60926fc"
  },
  {
    "url": "blog/skepticism/2018/06/10/nhs/index.html",
    "revision": "9e6791410eeefbad898042bab349830a"
  },
  {
    "url": "blog/skepticism/2018/06/10/shakti/index.html",
    "revision": "bf733b3ffdeb7dc87fff66c86dfe7b50"
  },
  {
    "url": "blog/skepticism/2018/06/10/weetbix/index.html",
    "revision": "ce80dc4316a28cb2b5255303663da837"
  },
  {
    "url": "blog/skepticism/2018/06/24/blasphemy/index.html",
    "revision": "9c8e85631e725b46834272ee7bbdeb4b"
  },
  {
    "url": "blog/skepticism/2018/06/24/cannabis/index.html",
    "revision": "cb3e171892e8ba91b4cf189fa305018b"
  },
  {
    "url": "blog/skepticism/2018/06/24/hotdog/index.html",
    "revision": "3bb04252ff59eb841723768a346032aa"
  },
  {
    "url": "blog/skepticism/2018/06/24/index.html",
    "revision": "469df658eca43fb798001c1a733f586e"
  },
  {
    "url": "blog/skepticism/2018/06/24/led/index.html",
    "revision": "181280fb2c8b27fa038da77657de03e0"
  },
  {
    "url": "blog/skepticism/2018/06/index.html",
    "revision": "59ab3865a50de5e52747c21c7ea0f6bb"
  },
  {
    "url": "blog/skepticism/2018/07/08/bullet/index.html",
    "revision": "99fb7f0c32e348c95a5487b7d2181575"
  },
  {
    "url": "blog/skepticism/2018/07/08/chiros/index.html",
    "revision": "1d0d767dfc445615815d62366a52be75"
  },
  {
    "url": "blog/skepticism/2018/07/08/hiv/index.html",
    "revision": "9805ff3aefa43deafc1a7b736f237474"
  },
  {
    "url": "blog/skepticism/2018/07/08/hrv/index.html",
    "revision": "beb20be8f6da46e87c0cfa01aae41195"
  },
  {
    "url": "blog/skepticism/2018/07/08/index.html",
    "revision": "4db6efd0bd78eb7b5405b830f596e9a3"
  },
  {
    "url": "blog/skepticism/2018/07/22/cancer/index.html",
    "revision": "14938a012a3d622819f7a606508d03d6"
  },
  {
    "url": "blog/skepticism/2018/07/22/index.html",
    "revision": "5915649ee6090ab218f7cc8160d1a9ab"
  },
  {
    "url": "blog/skepticism/2018/07/22/resurrection/index.html",
    "revision": "1c9f66c01b8a8d98bcaee065b7bad72f"
  },
  {
    "url": "blog/skepticism/2018/07/22/talc/index.html",
    "revision": "903a6ffe6c60800e43e13ee6bb16f22f"
  },
  {
    "url": "blog/skepticism/2018/07/22/visas/index.html",
    "revision": "42714410e055fdb77cfe171f77bfb379"
  },
  {
    "url": "blog/skepticism/2018/07/index.html",
    "revision": "36179e070f94af49f3d717d40b6fd2d1"
  },
  {
    "url": "blog/skepticism/2018/08/05/conf/index.html",
    "revision": "ac9a94197975c988b8d03c1f43c020c3"
  },
  {
    "url": "blog/skepticism/2018/08/05/index.html",
    "revision": "f50e381133164798c26a3087707be722"
  },
  {
    "url": "blog/skepticism/2018/08/05/qanon/index.html",
    "revision": "3468f4bbb4067fe417f4f93131a8360b"
  },
  {
    "url": "blog/skepticism/2018/08/19/index.html",
    "revision": "6940937376aad638af519893aaf0a577"
  },
  {
    "url": "blog/skepticism/2018/08/19/jw/index.html",
    "revision": "68bebb20e2d760981836b2e9bd876e0f"
  },
  {
    "url": "blog/skepticism/2018/08/index.html",
    "revision": "c07be6eacb73471b3186eed4625e706f"
  },
  {
    "url": "blog/skepticism/2018/09/02/allergy/index.html",
    "revision": "127cb19be9e28443eb9a2492e1a3f8c2"
  },
  {
    "url": "blog/skepticism/2018/09/02/catholic/index.html",
    "revision": "ec3d7dcf9ed046684a89c10af3b64ad3"
  },
  {
    "url": "blog/skepticism/2018/09/02/index.html",
    "revision": "8d3ecd7019724dbb4df0256a4d11e3a6"
  },
  {
    "url": "blog/skepticism/2018/09/02/jw/index.html",
    "revision": "dc5beb1bcc5d455f8bcfa50ba24cd69e"
  },
  {
    "url": "blog/skepticism/2018/09/02/sen/index.html",
    "revision": "0fdf192f82287663d6d8665947718166"
  },
  {
    "url": "blog/skepticism/2018/09/16/1080/index.html",
    "revision": "a814e7cdc5e1235391dbf35f3fc58c70"
  },
  {
    "url": "blog/skepticism/2018/09/16/church/index.html",
    "revision": "1d52408f5f5ca6a88a9bfaa329b80a37"
  },
  {
    "url": "blog/skepticism/2018/09/16/index.html",
    "revision": "0f597c30c7b98acb28d63ba281c11ef1"
  },
  {
    "url": "blog/skepticism/2018/09/16/jones/index.html",
    "revision": "62118b8d3cc77a00a53e0d3db4929001"
  },
  {
    "url": "blog/skepticism/2018/09/16/scammers/index.html",
    "revision": "618b90bc5edd53cdd3cce6e725821733"
  },
  {
    "url": "blog/skepticism/2018/09/30/index.html",
    "revision": "702944503b279f8ecd6fe430bf96d337"
  },
  {
    "url": "blog/skepticism/2018/09/30/jw/index.html",
    "revision": "f292d81336a7900f40ade5ac3ffd6bb3"
  },
  {
    "url": "blog/skepticism/2018/09/30/oto/index.html",
    "revision": "9d8062a6ab07f95e341c3a86164b91fa"
  },
  {
    "url": "blog/skepticism/2018/09/30/who/index.html",
    "revision": "270fc12f557f146e9665908dc98c725e"
  },
  {
    "url": "blog/skepticism/2018/09/index.html",
    "revision": "00a61a88428a9ee27abf8b8f82a23da5"
  },
  {
    "url": "blog/skepticism/2018/10/14/hacked/index.html",
    "revision": "9332206541597412d40768d1b3cf984a"
  },
  {
    "url": "blog/skepticism/2018/10/14/index.html",
    "revision": "bb8bcad2df3ba91a97d3176237961817"
  },
  {
    "url": "blog/skepticism/2018/10/14/kangen/index.html",
    "revision": "021e4a5d2ce1c61f2ab7e0b638695993"
  },
  {
    "url": "blog/skepticism/2018/10/14/pakistan/index.html",
    "revision": "e67da3c9aa075e40c50d0b8d91b45015"
  },
  {
    "url": "blog/skepticism/2018/10/14/sarah/index.html",
    "revision": "3f27253642e7118f80f82ab9dfb93822"
  },
  {
    "url": "blog/skepticism/2018/10/28/blasphemy/index.html",
    "revision": "68ca2f6aa1d29228c3ea6a47683368d7"
  },
  {
    "url": "blog/skepticism/2018/10/28/hrv/index.html",
    "revision": "71e391ea936e0d3726858b269aa98598"
  },
  {
    "url": "blog/skepticism/2018/10/28/index.html",
    "revision": "275d5982284f03adda9415f6bdee93b3"
  },
  {
    "url": "blog/skepticism/2018/10/28/jesus/index.html",
    "revision": "19c94d9493150959500c345c03a4488c"
  },
  {
    "url": "blog/skepticism/2018/10/28/natural/index.html",
    "revision": "e15ec4aecc7ea294a689562c3d2db892"
  },
  {
    "url": "blog/skepticism/2018/10/index.html",
    "revision": "57e231f18b294ef44883c458b6173bc1"
  },
  {
    "url": "blog/skepticism/2018/11/04/bibi/index.html",
    "revision": "69579443d7a6b53ebae44c10ee555601"
  },
  {
    "url": "blog/skepticism/2018/11/04/index.html",
    "revision": "c2100aca8b66b4af8a9d6168cd64955f"
  },
  {
    "url": "blog/skepticism/2018/11/04/jesus/index.html",
    "revision": "7bf957253eff2b4784f44c5ce0366b9c"
  },
  {
    "url": "blog/skepticism/2018/11/04/obdii/index.html",
    "revision": "044528b3c63c49d0532da318c114f0a5"
  },
  {
    "url": "blog/skepticism/2018/11/04/sleepdrops/index.html",
    "revision": "1e907c9c45f02c6db1548c889e60336f"
  },
  {
    "url": "blog/skepticism/2018/11/index.html",
    "revision": "5d03390b9adf42eae0660a0a75c73b01"
  },
  {
    "url": "blog/skepticism/2018/12/02/ark/index.html",
    "revision": "eabfe6e0335599e63136ef7debb6a4ce"
  },
  {
    "url": "blog/skepticism/2018/12/02/green/index.html",
    "revision": "30bbc925dec43d551eaeb9e633f7460f"
  },
  {
    "url": "blog/skepticism/2018/12/02/index.html",
    "revision": "09d7da903b9eac1e07c380c2e7e68a0b"
  },
  {
    "url": "blog/skepticism/2018/12/02/ri/index.html",
    "revision": "be5be499091fad761370bae904b67322"
  },
  {
    "url": "blog/skepticism/2018/12/16/blasphemy/index.html",
    "revision": "4d4d37972148cf5ad4023d255ef97a09"
  },
  {
    "url": "blog/skepticism/2018/12/16/index.html",
    "revision": "77d22219c71baedc233751fbda371657"
  },
  {
    "url": "blog/skepticism/2018/12/16/sleepdrops/index.html",
    "revision": "e56b5a925b2333697b36f6981edf6a82"
  },
  {
    "url": "blog/skepticism/2018/12/16/tekiri/index.html",
    "revision": "fb06145fa1f60302969426b5afdb0ef2"
  },
  {
    "url": "blog/skepticism/2018/12/index.html",
    "revision": "245ef3eb10d1ab73bc34a12ca50c2e60"
  },
  {
    "url": "blog/skepticism/2018/index.html",
    "revision": "e913444f5c20678cb3269e47f0ef0643"
  },
  {
    "url": "blog/skepticism/index.html",
    "revision": "923c9cfc4fe655319e4e6e961f703812"
  },
  {
    "url": "blog/tag/index.html",
    "revision": "886a56b0dafbe1da6746ed844e7d7349"
  },
  {
    "url": "contact/index.html",
    "revision": "fd9c8fcd887f7ead3145ee11e48cd508"
  },
  {
    "url": "cv/cover/index.html",
    "revision": "e72e73eb9b434c4340e4d258cfe785a8"
  },
  {
    "url": "cv/full.html",
    "revision": "299e4e7b1750e464be1984f175654ca0"
  },
  {
    "url": "cv/full/index.html",
    "revision": "3fc4d1e93e10e09c81e7fa8c6dc173df"
  },
  {
    "url": "cv/index.html",
    "revision": "7a5a0e9273d102dde6ea8baef2c9fa28"
  },
  {
    "url": "cv/short.html",
    "revision": "dff822c0d9b854784ebab93a71cf0079"
  },
  {
    "url": "googlee25d0c06da891164.html",
    "revision": "0defe75660212f417b90c5affcd03380"
  },
  {
    "url": "index.html",
    "revision": "17b1720a368301a158ed3d904d384053"
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
    "revision": "5e9540cfdf95c220030a5dd052f55e26"
  },
  {
    "url": "media/me/index.html",
    "revision": "cbda663d603bee783b5f711723e0e11e"
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
    "revision": "9d2d21d808cc3c7db79e1580cedc16dc"
  },
  {
    "url": "status/index.html",
    "revision": "896ca6ec673827be48532485983a0502"
  },
  {
    "url": "status/steam/index.html",
    "revision": "fe75faf3b0d5b88997ecce2277b2107a"
  },
  {
    "url": "status/twitter/index.html",
    "revision": "5dd4783d6196cc3cc1fbc43c42dd5256"
  },
  {
    "url": "status/wikipedia/index.html",
    "revision": "5dfb07a51cef17194791f2c709a1de8f"
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
