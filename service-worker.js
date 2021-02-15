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
    "revision": "81b3853e545656823187667d3850a950"
  },
  {
    "url": "assets/css/0.styles.css",
    "revision": "cd8fd63930d76ddd2500721e778ee6db"
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
    "revision": "4c3f92ffe97d12b2f9368e273fef7b1e"
  },
  {
    "url": "assets/js/100.js",
    "revision": "4e52bf156ba8a02520135870e72fe44b"
  },
  {
    "url": "assets/js/101.js",
    "revision": "c0a8372d31801f6f758529a1deea266f"
  },
  {
    "url": "assets/js/102.js",
    "revision": "beaa005cfde5eb81b117b4ad86a80ef7"
  },
  {
    "url": "assets/js/103.js",
    "revision": "e8514be726bfd614669a247ee211aac1"
  },
  {
    "url": "assets/js/104.js",
    "revision": "655382f69af5cfe0e6b73caba19344f1"
  },
  {
    "url": "assets/js/105.js",
    "revision": "0582eccdc2476410a1878ca9a0f25358"
  },
  {
    "url": "assets/js/106.js",
    "revision": "82d2e32f71fb3e559ecac2adc29fe8fa"
  },
  {
    "url": "assets/js/107.js",
    "revision": "7a229f68c6681ee5df4a24ff62cc9664"
  },
  {
    "url": "assets/js/108.js",
    "revision": "c810dd123f5b34c35876aafd66f32e76"
  },
  {
    "url": "assets/js/109.js",
    "revision": "63643450f51bcdd01ebb0c7cd2514fa9"
  },
  {
    "url": "assets/js/11.js",
    "revision": "8978181fb09ed2660acf2d107164150a"
  },
  {
    "url": "assets/js/110.js",
    "revision": "c7b17d9c3fb4bdebd3201b91899c1605"
  },
  {
    "url": "assets/js/111.js",
    "revision": "6ef788e63ab7ad19ef52993799d3ee2c"
  },
  {
    "url": "assets/js/112.js",
    "revision": "0eaaaa618fc85ba8372d029b71bcf472"
  },
  {
    "url": "assets/js/113.js",
    "revision": "438487f03a66575deac4720bc84f26d1"
  },
  {
    "url": "assets/js/114.js",
    "revision": "7cc7f4c9c73a2d6f0107ee448ca70606"
  },
  {
    "url": "assets/js/115.js",
    "revision": "666018e781ddd9aac0033135de2da88d"
  },
  {
    "url": "assets/js/116.js",
    "revision": "356fa57ce1c7c8c9e67610cec9ebc2a7"
  },
  {
    "url": "assets/js/117.js",
    "revision": "78a5e39f9a4dff8e5e8fa70bc887ffce"
  },
  {
    "url": "assets/js/118.js",
    "revision": "fafece02dbd4c90a0539addc93f695b2"
  },
  {
    "url": "assets/js/119.js",
    "revision": "8cd839232fba49b82d8b1e431d71afb0"
  },
  {
    "url": "assets/js/12.js",
    "revision": "682945830471d3d89a63b8096a19e134"
  },
  {
    "url": "assets/js/120.js",
    "revision": "a71089fbe97603ac10e26a9ae7ef6fd7"
  },
  {
    "url": "assets/js/121.js",
    "revision": "67ab174a00c605a471ae2ea1e5c33794"
  },
  {
    "url": "assets/js/122.js",
    "revision": "fd458a04800b3bc3372d4a850dc1300d"
  },
  {
    "url": "assets/js/123.js",
    "revision": "2add57b0d84d3bc457b7aca30086d072"
  },
  {
    "url": "assets/js/124.js",
    "revision": "f2fd59b827a23d33630aadf22df36bac"
  },
  {
    "url": "assets/js/125.js",
    "revision": "5da48662580303f0416479a6dc8dbacd"
  },
  {
    "url": "assets/js/126.js",
    "revision": "a7c4520857752e7a244612a108659079"
  },
  {
    "url": "assets/js/127.js",
    "revision": "108d7807587e2ae77cd08b0e0e390aec"
  },
  {
    "url": "assets/js/128.js",
    "revision": "30d5921b188767f16762f7025fb9e33c"
  },
  {
    "url": "assets/js/129.js",
    "revision": "1763b171fa12b552e842aacf5e66d514"
  },
  {
    "url": "assets/js/13.js",
    "revision": "2f1cc1920e2b231cd9e15dac28a1d165"
  },
  {
    "url": "assets/js/130.js",
    "revision": "b601d806d4d23c86bb49bb7c15a62414"
  },
  {
    "url": "assets/js/131.js",
    "revision": "ceab74fcfbbec6990b6110c1b20a6436"
  },
  {
    "url": "assets/js/132.js",
    "revision": "9fc15200ecf68abc3778cf56422fd117"
  },
  {
    "url": "assets/js/133.js",
    "revision": "0e119b08a5a24c0aaf0f85bd5c47f327"
  },
  {
    "url": "assets/js/134.js",
    "revision": "e2cafafbf34acb80b3596f99051253e1"
  },
  {
    "url": "assets/js/135.js",
    "revision": "7fdd4dd68689f6f18eff83aa0a353c60"
  },
  {
    "url": "assets/js/136.js",
    "revision": "a0b93c96f147305c43b6376cd62f8534"
  },
  {
    "url": "assets/js/137.js",
    "revision": "2a1a7856b4858755e6b7a548d3c2adba"
  },
  {
    "url": "assets/js/138.js",
    "revision": "96ca4a4fd95f3712b51e6b07d91dcc5a"
  },
  {
    "url": "assets/js/139.js",
    "revision": "4adccfd3f9f607dd399a62b37ee59a34"
  },
  {
    "url": "assets/js/14.js",
    "revision": "2d08f5780b2044d0d26a0616a2262d6b"
  },
  {
    "url": "assets/js/140.js",
    "revision": "162b15c24baba8325aaf706c4f32840a"
  },
  {
    "url": "assets/js/141.js",
    "revision": "82196abc64b0818207243ead1a4b3e80"
  },
  {
    "url": "assets/js/142.js",
    "revision": "b7a0338ac9828b30b6e0ef5e1e4f8ca3"
  },
  {
    "url": "assets/js/143.js",
    "revision": "aa7382ab6fba8ad1b763207adae9f023"
  },
  {
    "url": "assets/js/144.js",
    "revision": "8a4b71aef7066bbb47dffbfe5d4f9622"
  },
  {
    "url": "assets/js/145.js",
    "revision": "de984c5141a6ed179c9c9703c2243d7f"
  },
  {
    "url": "assets/js/146.js",
    "revision": "af4b3e00d5fd4b79718eae76dc21fe4b"
  },
  {
    "url": "assets/js/147.js",
    "revision": "9f33d91fec7b1745576268672d347b73"
  },
  {
    "url": "assets/js/148.js",
    "revision": "a2d9e2325e74a75a30a6011f4ea72f5c"
  },
  {
    "url": "assets/js/149.js",
    "revision": "7e66ee15827f0dd4cd035d71c0882511"
  },
  {
    "url": "assets/js/15.js",
    "revision": "c8484e67c37a9517c4740c0bcf951b9a"
  },
  {
    "url": "assets/js/150.js",
    "revision": "a4e2e39084619e55c51b7859853d4877"
  },
  {
    "url": "assets/js/151.js",
    "revision": "b272ef36ccf63a7512d6db89bcc72289"
  },
  {
    "url": "assets/js/152.js",
    "revision": "0cc4dc2cd01af76d7b02f999b3f86050"
  },
  {
    "url": "assets/js/153.js",
    "revision": "17991b55c44585697cd9708628ad1e07"
  },
  {
    "url": "assets/js/154.js",
    "revision": "1ce90318b62a3c0cc74dcc22b289dcec"
  },
  {
    "url": "assets/js/155.js",
    "revision": "28a3366c94252b683141fefe30b6ed58"
  },
  {
    "url": "assets/js/156.js",
    "revision": "ca9af56db3f58f3a1e176317985dc5f0"
  },
  {
    "url": "assets/js/157.js",
    "revision": "eeeabfe593c8f49842f7b3d77c90f0e9"
  },
  {
    "url": "assets/js/158.js",
    "revision": "575720170049a1e8a5ab34a1e5f2260a"
  },
  {
    "url": "assets/js/159.js",
    "revision": "8bb679d70ec4513395a19d06504a52d9"
  },
  {
    "url": "assets/js/16.js",
    "revision": "186c180173d4ad0112309305ceb0f3f4"
  },
  {
    "url": "assets/js/160.js",
    "revision": "93ef3a4ad102f86a88d35174160a1509"
  },
  {
    "url": "assets/js/161.js",
    "revision": "cccd8e415675ef5b06e915e14e8da617"
  },
  {
    "url": "assets/js/162.js",
    "revision": "4d608e6a6d971ead72eba8f5fc28b2af"
  },
  {
    "url": "assets/js/163.js",
    "revision": "5016763a8310d521a46aae4bc65c33b3"
  },
  {
    "url": "assets/js/164.js",
    "revision": "84cff5ff75947c6f21bb4b2fba5c748d"
  },
  {
    "url": "assets/js/165.js",
    "revision": "e591835429acc6aa470415a2e99c2d3f"
  },
  {
    "url": "assets/js/166.js",
    "revision": "d2dd840f07282c6161baa70ac8f5ad9f"
  },
  {
    "url": "assets/js/167.js",
    "revision": "ff955db8a97a4c2ca7bbcf11535f5253"
  },
  {
    "url": "assets/js/168.js",
    "revision": "9cb8f179311d8f97102b28f237ff90fd"
  },
  {
    "url": "assets/js/169.js",
    "revision": "d3d8a692c0d93df23b716793d8765ac3"
  },
  {
    "url": "assets/js/17.js",
    "revision": "20da8ef949b31d6f4f21b71b62cfee2f"
  },
  {
    "url": "assets/js/170.js",
    "revision": "7d817d0faf9f60c87544070287ec3843"
  },
  {
    "url": "assets/js/171.js",
    "revision": "b6223bad5cf29eaa367506b2298c8b73"
  },
  {
    "url": "assets/js/172.js",
    "revision": "2cc2abaefa7d3b3ca202cb518f7a558f"
  },
  {
    "url": "assets/js/173.js",
    "revision": "70f05c4b803b9aa3311e2256bccd115f"
  },
  {
    "url": "assets/js/174.js",
    "revision": "ea2b1fb94a0cde9a255ba0cfc586cdae"
  },
  {
    "url": "assets/js/175.js",
    "revision": "018097ec0603d19b7957c327a50c4540"
  },
  {
    "url": "assets/js/176.js",
    "revision": "45df1b774f9230889dbf218cb4a4be9f"
  },
  {
    "url": "assets/js/177.js",
    "revision": "d85228b0059089719744911d573fcf2c"
  },
  {
    "url": "assets/js/178.js",
    "revision": "0fd90a715a53e7e173a97524d5d702bf"
  },
  {
    "url": "assets/js/179.js",
    "revision": "efb1e953d07b6d30ba0cd64e28d93a31"
  },
  {
    "url": "assets/js/18.js",
    "revision": "26168252e38959987468cccf75f6a7d6"
  },
  {
    "url": "assets/js/180.js",
    "revision": "1cbb9d955e78acb7b79ccaed879fa1eb"
  },
  {
    "url": "assets/js/181.js",
    "revision": "5c7bc8609d88e4a4bade3d0f5fdcdee4"
  },
  {
    "url": "assets/js/182.js",
    "revision": "351b9959e4b9a26d2ff3573bb75670cf"
  },
  {
    "url": "assets/js/183.js",
    "revision": "df8a9333019e31b1a0f2d4ff5d2c6bcd"
  },
  {
    "url": "assets/js/184.js",
    "revision": "c6b3e6ada169a31ad4819390d7441ac8"
  },
  {
    "url": "assets/js/185.js",
    "revision": "4071102905a3bfbc07cfca2c9061ab42"
  },
  {
    "url": "assets/js/186.js",
    "revision": "3f93b96da4d4a47bb1c6488775d642a3"
  },
  {
    "url": "assets/js/187.js",
    "revision": "d61ab939b5367ded2c4d3730051117b5"
  },
  {
    "url": "assets/js/188.js",
    "revision": "23ef03de283b635c236bc6f9aa61703c"
  },
  {
    "url": "assets/js/189.js",
    "revision": "b95e9b3a474ef579db969abffa81f273"
  },
  {
    "url": "assets/js/19.js",
    "revision": "dcabccb7b595b00b4719aaba6967a42f"
  },
  {
    "url": "assets/js/190.js",
    "revision": "6f8115b20d0bd6f34ad9288320a0f47a"
  },
  {
    "url": "assets/js/191.js",
    "revision": "b7295efa03c6c286602ef5806fec0b8b"
  },
  {
    "url": "assets/js/192.js",
    "revision": "412325307da8f23c1936b00fc0b139a3"
  },
  {
    "url": "assets/js/193.js",
    "revision": "6347e9bee32aa4110d617caf7f59fb9a"
  },
  {
    "url": "assets/js/194.js",
    "revision": "358d3ec796d3ec7c2ddda5eb66258de8"
  },
  {
    "url": "assets/js/195.js",
    "revision": "3a6bcf87482236d539e9521f457cf2cd"
  },
  {
    "url": "assets/js/196.js",
    "revision": "59e19cbabb0acf506ca18ea24a4b1361"
  },
  {
    "url": "assets/js/197.js",
    "revision": "0a4a4b68372a0cf1bcfbce3835ad3ea6"
  },
  {
    "url": "assets/js/198.js",
    "revision": "ea046370429cce566b5e1f19737f9876"
  },
  {
    "url": "assets/js/199.js",
    "revision": "d75982e19f5d3fcab437ae69ec71d130"
  },
  {
    "url": "assets/js/2.js",
    "revision": "8acb40342abc2b46bd0b8174d0dccdaa"
  },
  {
    "url": "assets/js/20.js",
    "revision": "8e2005a5ac46a8c6d39669e8df339139"
  },
  {
    "url": "assets/js/200.js",
    "revision": "e24abfa6706a2e0cf104166ed65ee0b6"
  },
  {
    "url": "assets/js/201.js",
    "revision": "71a357068d65ce728f1e3c52ad24aa51"
  },
  {
    "url": "assets/js/202.js",
    "revision": "5b87f38b577bb06c9b4eb28b013c02b7"
  },
  {
    "url": "assets/js/203.js",
    "revision": "8c40e1d1849e0559466e71a64e93e2ba"
  },
  {
    "url": "assets/js/204.js",
    "revision": "dcf0d8015c4bd048501aaa517b397c03"
  },
  {
    "url": "assets/js/205.js",
    "revision": "d1423a71c1927aa2119b99169db9eb1c"
  },
  {
    "url": "assets/js/206.js",
    "revision": "21751f4afacd5c5f9550c7dfe667e16e"
  },
  {
    "url": "assets/js/207.js",
    "revision": "5a0f91d5ff15cf9c12fd077da529b528"
  },
  {
    "url": "assets/js/208.js",
    "revision": "4427992bd323465f275b297e5e34bf51"
  },
  {
    "url": "assets/js/209.js",
    "revision": "98b1ecc7a67d89714fae056f6a007d1b"
  },
  {
    "url": "assets/js/21.js",
    "revision": "9244f40a455d93f5cbeb662cbbdcbce3"
  },
  {
    "url": "assets/js/210.js",
    "revision": "caea272d5028307138c158155782d03c"
  },
  {
    "url": "assets/js/211.js",
    "revision": "697c4628b960b2ef09023dcfabf65bd9"
  },
  {
    "url": "assets/js/212.js",
    "revision": "eb6f15a444268920ef7f366d7d014cd2"
  },
  {
    "url": "assets/js/213.js",
    "revision": "acf45196ef53a6d721649f513b650ca3"
  },
  {
    "url": "assets/js/214.js",
    "revision": "e937a397468883236d175cd0131a1957"
  },
  {
    "url": "assets/js/215.js",
    "revision": "e33a4e48f4b260e459fb8b1464643253"
  },
  {
    "url": "assets/js/216.js",
    "revision": "c598dc9e8df151abd45052147654d556"
  },
  {
    "url": "assets/js/217.js",
    "revision": "b5f9e7e0f62655cbff13a61f013eaf86"
  },
  {
    "url": "assets/js/218.js",
    "revision": "545fe713de65ef87a7155c970680fcd4"
  },
  {
    "url": "assets/js/219.js",
    "revision": "5ec7f0e3db8ff4bb84a5ccaccada067d"
  },
  {
    "url": "assets/js/22.js",
    "revision": "dbc63f6091dff99dc54bdb449d6516ad"
  },
  {
    "url": "assets/js/220.js",
    "revision": "5cd8e16943b41ec58128b42963a74bab"
  },
  {
    "url": "assets/js/221.js",
    "revision": "dacedc43d49a06d7e78e5a68c801fe89"
  },
  {
    "url": "assets/js/222.js",
    "revision": "8ce06f187a48f595920bf1a428280fac"
  },
  {
    "url": "assets/js/223.js",
    "revision": "761c07c44865509706e967aa82a89c12"
  },
  {
    "url": "assets/js/224.js",
    "revision": "96eb89fb5b4d415a79f83653e9c9a432"
  },
  {
    "url": "assets/js/225.js",
    "revision": "af05aa2e6bbf67151da5befa4e0c3150"
  },
  {
    "url": "assets/js/226.js",
    "revision": "eebbdebbb90e167a6a972c7823c686f7"
  },
  {
    "url": "assets/js/227.js",
    "revision": "7f4f1519c01f0c282fb3b8f57f5cd87c"
  },
  {
    "url": "assets/js/228.js",
    "revision": "9076d79a8323427628976500732d6645"
  },
  {
    "url": "assets/js/229.js",
    "revision": "371e8b1d3a5cefbbac6ac8d1d2684848"
  },
  {
    "url": "assets/js/23.js",
    "revision": "668631dfe7b974332370f78fd7622984"
  },
  {
    "url": "assets/js/230.js",
    "revision": "d2c933bc9e1af2d2b8293721fbac17dc"
  },
  {
    "url": "assets/js/231.js",
    "revision": "23ed1a4e90762ab1f675e8f86a02de06"
  },
  {
    "url": "assets/js/232.js",
    "revision": "c733ffd847ec17452d28248f70ceb973"
  },
  {
    "url": "assets/js/233.js",
    "revision": "f161054080ea0d93b80d3b93af06aa82"
  },
  {
    "url": "assets/js/234.js",
    "revision": "696cd860110815515fbf358c1136fbf4"
  },
  {
    "url": "assets/js/235.js",
    "revision": "9e904a50924bb0da1b5e2a351eca30f7"
  },
  {
    "url": "assets/js/236.js",
    "revision": "7fa741ccbfe9a6e9d4d522602cd273ac"
  },
  {
    "url": "assets/js/237.js",
    "revision": "e311835e11fd3757295635d0fbb2e16e"
  },
  {
    "url": "assets/js/238.js",
    "revision": "b14eb322bd3078e688a7ae58dccae686"
  },
  {
    "url": "assets/js/239.js",
    "revision": "1736d7732b9705b5886f1fc0c27dfd84"
  },
  {
    "url": "assets/js/24.js",
    "revision": "3baaee961e639f2811971bd0423daf4f"
  },
  {
    "url": "assets/js/240.js",
    "revision": "95d9a77959bef4d34c2c05184063735a"
  },
  {
    "url": "assets/js/241.js",
    "revision": "ae95bb9f852f90194f4333be79df2eb0"
  },
  {
    "url": "assets/js/242.js",
    "revision": "98e0ba1f44abe814dd844cf00a3b4dda"
  },
  {
    "url": "assets/js/243.js",
    "revision": "b9ad7ccd09508692fc27c94dad36378f"
  },
  {
    "url": "assets/js/244.js",
    "revision": "9916bfd1ada722e669cac46296939224"
  },
  {
    "url": "assets/js/245.js",
    "revision": "2871ce22b9e6b076888c071ffb773ab2"
  },
  {
    "url": "assets/js/246.js",
    "revision": "07ce44fd995a158166763117fb070b7d"
  },
  {
    "url": "assets/js/247.js",
    "revision": "a501ff57ed8c7212d78ed22aab5e4683"
  },
  {
    "url": "assets/js/248.js",
    "revision": "d15a3788a9352489653b5fa8f9f2ed11"
  },
  {
    "url": "assets/js/249.js",
    "revision": "f9db84173c375dcb9d8ef9d5d9aa691f"
  },
  {
    "url": "assets/js/25.js",
    "revision": "362f2b8909247f45ec76b0bde1d82392"
  },
  {
    "url": "assets/js/250.js",
    "revision": "2761d4379c14742f3f3bda41fecfd903"
  },
  {
    "url": "assets/js/251.js",
    "revision": "8c3f294a4f6738ef0e6f51f32c7ff09f"
  },
  {
    "url": "assets/js/252.js",
    "revision": "f066863378e41f0710048827b9c711f5"
  },
  {
    "url": "assets/js/253.js",
    "revision": "2f52fe7b9f7bde27a37be8fa4370c1b0"
  },
  {
    "url": "assets/js/254.js",
    "revision": "b96b6a8c0a85e65e99ed4f0ecaa19dc0"
  },
  {
    "url": "assets/js/255.js",
    "revision": "603fc155b6808b28c2980c074726085b"
  },
  {
    "url": "assets/js/256.js",
    "revision": "3d2418fb950388c8a554e11475a96fb4"
  },
  {
    "url": "assets/js/257.js",
    "revision": "a2ec2a59abdb838b188311a9f21b19f9"
  },
  {
    "url": "assets/js/258.js",
    "revision": "dc8a50d465c60fa100c6187cd27b2a85"
  },
  {
    "url": "assets/js/259.js",
    "revision": "019423f4c4f32edc2c37ab59a363d5aa"
  },
  {
    "url": "assets/js/26.js",
    "revision": "66526c53dc95d2d5cd2389ad9e7f687f"
  },
  {
    "url": "assets/js/260.js",
    "revision": "7e2a95350501ece7c3b20d954584137b"
  },
  {
    "url": "assets/js/261.js",
    "revision": "ae1627269729e9c268d48f7f1b197548"
  },
  {
    "url": "assets/js/262.js",
    "revision": "50f6d118265a5eecb1d77bf1b48e0299"
  },
  {
    "url": "assets/js/263.js",
    "revision": "4c133c59e8d0cbb5be3a859eec1b9323"
  },
  {
    "url": "assets/js/264.js",
    "revision": "04dc04014ca07742e2f81453e36b8be5"
  },
  {
    "url": "assets/js/265.js",
    "revision": "f8e65f7e77c45476bf56afc640e02312"
  },
  {
    "url": "assets/js/266.js",
    "revision": "d047ee480e1cc8ae8cc5a7ac0fcd081a"
  },
  {
    "url": "assets/js/267.js",
    "revision": "2ba707310d120398b900de4d602dd400"
  },
  {
    "url": "assets/js/268.js",
    "revision": "f4b7411f7ea458bc2531cce502ccee49"
  },
  {
    "url": "assets/js/269.js",
    "revision": "00534288e70f00f5bbd21015142d3702"
  },
  {
    "url": "assets/js/27.js",
    "revision": "269ddf7b93047958b64fa11532a3e610"
  },
  {
    "url": "assets/js/270.js",
    "revision": "bde0b812ed14e9c974a4bbb572e98cb0"
  },
  {
    "url": "assets/js/271.js",
    "revision": "7bee1183eb2fb81bf5df2afb96900c3c"
  },
  {
    "url": "assets/js/272.js",
    "revision": "4ae6f122f7675a978d5450c1ab9f030e"
  },
  {
    "url": "assets/js/273.js",
    "revision": "a052c20894f7d2bf68c2128e88f0b2b6"
  },
  {
    "url": "assets/js/274.js",
    "revision": "b568c91548cea6cfa95203e1aa1e1c46"
  },
  {
    "url": "assets/js/275.js",
    "revision": "12ad6de4d105228ebc00e3d11bd50a67"
  },
  {
    "url": "assets/js/276.js",
    "revision": "36b8494774773cca43f4fd66190612ba"
  },
  {
    "url": "assets/js/277.js",
    "revision": "8ec3b68582f1fc24cc01e7c277f28f18"
  },
  {
    "url": "assets/js/278.js",
    "revision": "1e7f79909142db333b5dab52cdb82d50"
  },
  {
    "url": "assets/js/279.js",
    "revision": "d8f858bee84a7cfc4aa88bf7da8c005b"
  },
  {
    "url": "assets/js/28.js",
    "revision": "a9a68fe33630c0488ef393301ca559a4"
  },
  {
    "url": "assets/js/280.js",
    "revision": "7f3df17bcd93fd7bd4031b5dd6bf8c25"
  },
  {
    "url": "assets/js/281.js",
    "revision": "aec078aabe3b53599b931cfa77a34b78"
  },
  {
    "url": "assets/js/282.js",
    "revision": "92817e7bc14abc5446aafc8dea2bfe61"
  },
  {
    "url": "assets/js/283.js",
    "revision": "562fdbb8bbf8268d159b3d785ec87193"
  },
  {
    "url": "assets/js/284.js",
    "revision": "44812d97abf16d1950390acef7f9a634"
  },
  {
    "url": "assets/js/285.js",
    "revision": "2e014126949bfa96d62356a8dd286a6e"
  },
  {
    "url": "assets/js/286.js",
    "revision": "44627bb3dbbbca84741802db29a35029"
  },
  {
    "url": "assets/js/287.js",
    "revision": "20a257e220b18a7764490a41cb30b180"
  },
  {
    "url": "assets/js/288.js",
    "revision": "f88cdd00f1abfa4bef8cf19caf34701c"
  },
  {
    "url": "assets/js/289.js",
    "revision": "821ab8c5153cc43bfbe1e3e0d5352595"
  },
  {
    "url": "assets/js/29.js",
    "revision": "6a5341f82f5a6dabca86b09adeb3cb51"
  },
  {
    "url": "assets/js/290.js",
    "revision": "eb3bb7b0c2e7cbc3bf85db79557f5311"
  },
  {
    "url": "assets/js/291.js",
    "revision": "941ab25aff691b95bc15f5a26f86989f"
  },
  {
    "url": "assets/js/292.js",
    "revision": "b52012b86c7ec398920b33453fde9154"
  },
  {
    "url": "assets/js/293.js",
    "revision": "09b54c989da6a1f322c7e151d39d5e61"
  },
  {
    "url": "assets/js/294.js",
    "revision": "71a066f45e34883e44b73e0363a1ef89"
  },
  {
    "url": "assets/js/295.js",
    "revision": "9a0bc9844e07638fcea86c5a84cd7d6a"
  },
  {
    "url": "assets/js/296.js",
    "revision": "af3e0833ddc86bd7011d034186793160"
  },
  {
    "url": "assets/js/297.js",
    "revision": "58744017e84aba0ccd20191c6c0f8403"
  },
  {
    "url": "assets/js/298.js",
    "revision": "e400c3c6429f32b13af9dd8437160acb"
  },
  {
    "url": "assets/js/299.js",
    "revision": "9593037a4042d549bbce671ffad3dfbe"
  },
  {
    "url": "assets/js/3.js",
    "revision": "7047c98a97e89e93677efa80aac30fee"
  },
  {
    "url": "assets/js/30.js",
    "revision": "6bd93d9afd3a046efa5a185bb79abf95"
  },
  {
    "url": "assets/js/300.js",
    "revision": "cdeeb505ecc725dc62e11511f624f122"
  },
  {
    "url": "assets/js/301.js",
    "revision": "43295f6b8a33c6e593bcd298a825b52a"
  },
  {
    "url": "assets/js/302.js",
    "revision": "b26879aec4671223ec8719503b9e5525"
  },
  {
    "url": "assets/js/303.js",
    "revision": "4d69a2863b4f36b38fa8549805d5ec1e"
  },
  {
    "url": "assets/js/304.js",
    "revision": "2949aa05566537aa7f68cdc120de9850"
  },
  {
    "url": "assets/js/305.js",
    "revision": "956c0b5bea8ed4b65a5c058823672c0a"
  },
  {
    "url": "assets/js/306.js",
    "revision": "087c195f86a9329275ef59b3459891b7"
  },
  {
    "url": "assets/js/307.js",
    "revision": "61120fc91c511647ae8c99f3a9c77b7d"
  },
  {
    "url": "assets/js/308.js",
    "revision": "95f78a301ce1f0f06c8b85289b05befa"
  },
  {
    "url": "assets/js/309.js",
    "revision": "6661cc0abad64fc4f68a8e5d09577d13"
  },
  {
    "url": "assets/js/31.js",
    "revision": "20c8ca9e7747f89ed251934ffb5fc902"
  },
  {
    "url": "assets/js/310.js",
    "revision": "f2cd5602f9635310e952f0540d4ee3fa"
  },
  {
    "url": "assets/js/311.js",
    "revision": "b8c83c31d4384d45c03cfed7b710208b"
  },
  {
    "url": "assets/js/312.js",
    "revision": "a2a24730cf480d6e3364799ecf75f6b9"
  },
  {
    "url": "assets/js/313.js",
    "revision": "13918f2dd44c790b75f72921776e68ac"
  },
  {
    "url": "assets/js/314.js",
    "revision": "5576ab0ae7d76e44344f3e41c8971534"
  },
  {
    "url": "assets/js/315.js",
    "revision": "9fd13e14782ebfeeef7e2c335915a4b3"
  },
  {
    "url": "assets/js/316.js",
    "revision": "b011d0ebfb15a9a3d7230c526eb7cea8"
  },
  {
    "url": "assets/js/317.js",
    "revision": "1fd67a06c704717d0edb3ca31f437cc5"
  },
  {
    "url": "assets/js/318.js",
    "revision": "8417ad84ba4cd7b1610573f03986a374"
  },
  {
    "url": "assets/js/319.js",
    "revision": "ed0a66844cd74ea14810832b97ed9bdb"
  },
  {
    "url": "assets/js/32.js",
    "revision": "f18be453de9a8906eb9a63c1c0e94fa6"
  },
  {
    "url": "assets/js/320.js",
    "revision": "5b2f128f9d1a7917f507a0fc4b7858de"
  },
  {
    "url": "assets/js/321.js",
    "revision": "e33e189e0138529a93bb5ee6a2178be1"
  },
  {
    "url": "assets/js/322.js",
    "revision": "f84ddcd81ebe15d61eeb566f86f48331"
  },
  {
    "url": "assets/js/323.js",
    "revision": "bb9448e2073de2739227bd3423e77d30"
  },
  {
    "url": "assets/js/324.js",
    "revision": "01f954e88c0e482caebb92e1b632399e"
  },
  {
    "url": "assets/js/325.js",
    "revision": "58a6ca36d2ba447b66977abc912abb27"
  },
  {
    "url": "assets/js/326.js",
    "revision": "0253c9c5f09f16d62186179d38151f48"
  },
  {
    "url": "assets/js/327.js",
    "revision": "619d3b553d59f5e738081bae2b35f14f"
  },
  {
    "url": "assets/js/328.js",
    "revision": "132a5e16e72ac7bae868fa7a73fd31c7"
  },
  {
    "url": "assets/js/329.js",
    "revision": "937e291bc34e64c5d63b618ac815a2d5"
  },
  {
    "url": "assets/js/33.js",
    "revision": "af1d9768d425a83cb8b71c6c55d89fe1"
  },
  {
    "url": "assets/js/330.js",
    "revision": "33c132d4b591df73b23e2adc84844876"
  },
  {
    "url": "assets/js/331.js",
    "revision": "ef045a2d1cd69fd1d394c07e913939e7"
  },
  {
    "url": "assets/js/332.js",
    "revision": "8be675b4f6206c8122d8d18ccc2c79c4"
  },
  {
    "url": "assets/js/333.js",
    "revision": "ad874e4b000d2b52aaff1029ab36e805"
  },
  {
    "url": "assets/js/334.js",
    "revision": "13e5c2836d71f271531a53f005cdbbd9"
  },
  {
    "url": "assets/js/335.js",
    "revision": "64868621b6e071a86dc16b96ea334e9c"
  },
  {
    "url": "assets/js/336.js",
    "revision": "b7be8633790c5873a8dc6db7de96cfcc"
  },
  {
    "url": "assets/js/337.js",
    "revision": "5bf3600a565f69b0ce7dfabdebf8b666"
  },
  {
    "url": "assets/js/338.js",
    "revision": "ce061094840dd275db6fd5c6a171ef4c"
  },
  {
    "url": "assets/js/339.js",
    "revision": "2acb833864aef3a5313c9cfe07c61530"
  },
  {
    "url": "assets/js/34.js",
    "revision": "f34984f575700db90de746b93a7da240"
  },
  {
    "url": "assets/js/340.js",
    "revision": "93408f3af6a48cef6255dde6e3e29d89"
  },
  {
    "url": "assets/js/341.js",
    "revision": "9961ae8ecc7ade17362835a1b8b28024"
  },
  {
    "url": "assets/js/342.js",
    "revision": "c95a8376aa0e38a12f0adb39f3678673"
  },
  {
    "url": "assets/js/343.js",
    "revision": "a45bc55d68f14a22f60abd8642bf3da9"
  },
  {
    "url": "assets/js/344.js",
    "revision": "7fb40ceba4f9ff4c912b0d314cd1941d"
  },
  {
    "url": "assets/js/345.js",
    "revision": "8aa7de2e53efbe85f7d685af48ddca20"
  },
  {
    "url": "assets/js/346.js",
    "revision": "9ef9a05803fba6b16f1458de82dd78a6"
  },
  {
    "url": "assets/js/347.js",
    "revision": "30db1fce7c3d23ba1cd15332150bcd9c"
  },
  {
    "url": "assets/js/348.js",
    "revision": "4d12e9c7d113a7710b6e2935daf2c261"
  },
  {
    "url": "assets/js/349.js",
    "revision": "a5ab0a45cdec456e2826047b17f1ddb7"
  },
  {
    "url": "assets/js/35.js",
    "revision": "08309fb18218eac637c196b1a0c39786"
  },
  {
    "url": "assets/js/350.js",
    "revision": "eba03178e3bf14f949d74ec2d566a80d"
  },
  {
    "url": "assets/js/351.js",
    "revision": "71f3ed98a60d3a7c36a7e728b2c6985c"
  },
  {
    "url": "assets/js/352.js",
    "revision": "5d3e857a67131af2ed63bfe5e8d0d155"
  },
  {
    "url": "assets/js/353.js",
    "revision": "662ccb77e22f58da98fad5d359a70556"
  },
  {
    "url": "assets/js/354.js",
    "revision": "800c593c24d46f8bc1aa88f20154d60a"
  },
  {
    "url": "assets/js/355.js",
    "revision": "1d2bd8030ec13adc0dfbffc56ab2f18f"
  },
  {
    "url": "assets/js/356.js",
    "revision": "1280985135b5914dc4c386bd43524c9e"
  },
  {
    "url": "assets/js/357.js",
    "revision": "96f9adcd7088bd90903cae2553018959"
  },
  {
    "url": "assets/js/358.js",
    "revision": "c93f292968e4206ebb97d5516eb61e0d"
  },
  {
    "url": "assets/js/359.js",
    "revision": "88106616ae5bdc8a8897b4b44c3178db"
  },
  {
    "url": "assets/js/36.js",
    "revision": "d463525707f94eb132d0e42dc5e1b772"
  },
  {
    "url": "assets/js/360.js",
    "revision": "7b5001caf0a7247fe31f3c8ad9bb9aa9"
  },
  {
    "url": "assets/js/361.js",
    "revision": "124bcb19c1e0c0ba52589d54fee9744d"
  },
  {
    "url": "assets/js/362.js",
    "revision": "b526df909e8280bf24811c52f88a2c30"
  },
  {
    "url": "assets/js/363.js",
    "revision": "6f5d4cddb541e1c4a37c0ec592230678"
  },
  {
    "url": "assets/js/364.js",
    "revision": "60c8971a370705d097f363bea64cf585"
  },
  {
    "url": "assets/js/365.js",
    "revision": "e071ee57440b1c708695634a1bd769b1"
  },
  {
    "url": "assets/js/366.js",
    "revision": "b61e94fb34cc4c6a6319816e1608d8eb"
  },
  {
    "url": "assets/js/367.js",
    "revision": "906cc467a3822e87724407a4d0177c98"
  },
  {
    "url": "assets/js/368.js",
    "revision": "8bf40101206976365ec9aa9eb304625c"
  },
  {
    "url": "assets/js/369.js",
    "revision": "31a03f2a7f3df3d0fd22d8a936487135"
  },
  {
    "url": "assets/js/37.js",
    "revision": "f5b5312b2b31ae01cddd31be7e60bcef"
  },
  {
    "url": "assets/js/370.js",
    "revision": "801039a6d4544556347e523996b90170"
  },
  {
    "url": "assets/js/371.js",
    "revision": "089183b597506185c007a05533bffc19"
  },
  {
    "url": "assets/js/372.js",
    "revision": "f75ba01f53bc67147ec99b916ac77fa7"
  },
  {
    "url": "assets/js/373.js",
    "revision": "8054cb597bd366f874a1f30c3a9864a6"
  },
  {
    "url": "assets/js/374.js",
    "revision": "e906b7d5574c1ec40c80b9124fd53151"
  },
  {
    "url": "assets/js/375.js",
    "revision": "a08ee3013c3f94fa62fce4c14ac5522b"
  },
  {
    "url": "assets/js/376.js",
    "revision": "9f83cf1164f5c4396404808ce23dbc6d"
  },
  {
    "url": "assets/js/377.js",
    "revision": "3745fe5f65c0ff68a212ba90f80841e8"
  },
  {
    "url": "assets/js/378.js",
    "revision": "d49bf53bf5e09f5b4ccb4bc042b1d645"
  },
  {
    "url": "assets/js/379.js",
    "revision": "260fe097f0d154de91437416ae332d3c"
  },
  {
    "url": "assets/js/38.js",
    "revision": "9b8943ffb527bb48591fa85ade316ca9"
  },
  {
    "url": "assets/js/380.js",
    "revision": "6a9ec35cc4db72db21bfcf85e4915a17"
  },
  {
    "url": "assets/js/381.js",
    "revision": "c8169c6317890495ecd0a70f7076d8ca"
  },
  {
    "url": "assets/js/382.js",
    "revision": "f5b0cbbf3afbd6f1ad8fb6baea01ff8f"
  },
  {
    "url": "assets/js/383.js",
    "revision": "34807fef185d9e3f7801dd94812721ee"
  },
  {
    "url": "assets/js/384.js",
    "revision": "7bcf6de5b5b6e658c39f06c1086db8bb"
  },
  {
    "url": "assets/js/385.js",
    "revision": "c5a77ee7217af111fb86ed145bf77efb"
  },
  {
    "url": "assets/js/386.js",
    "revision": "4eefc52dabd50aabcb7109c71dd7b8fb"
  },
  {
    "url": "assets/js/387.js",
    "revision": "6ea37f3a45dfc18dcdec793b17d5cce1"
  },
  {
    "url": "assets/js/388.js",
    "revision": "5f31b8f1c5b3d466e1ed96299e4f4c6e"
  },
  {
    "url": "assets/js/389.js",
    "revision": "f4e9e83d9229c5cf63d88a6791e93614"
  },
  {
    "url": "assets/js/39.js",
    "revision": "b72fb1368018b50dae037b88adf26461"
  },
  {
    "url": "assets/js/390.js",
    "revision": "6d5a8600b18623c16d39cf330a01f816"
  },
  {
    "url": "assets/js/391.js",
    "revision": "09996c1b07b4dce122136caa8e39c7dc"
  },
  {
    "url": "assets/js/392.js",
    "revision": "093e7877edc539458483ead7fc619070"
  },
  {
    "url": "assets/js/393.js",
    "revision": "d29832e3a0ce804d8235b116f2442d77"
  },
  {
    "url": "assets/js/394.js",
    "revision": "a3119e4265cd7930c1defa04d49a0574"
  },
  {
    "url": "assets/js/395.js",
    "revision": "6fdf3a2c17997cc9dfc48d27e363be5d"
  },
  {
    "url": "assets/js/396.js",
    "revision": "a240f17e62143579de8a7a0d8e31abd7"
  },
  {
    "url": "assets/js/397.js",
    "revision": "6912c2d37270be730c3ee1ed55160969"
  },
  {
    "url": "assets/js/398.js",
    "revision": "10371a2eeab22c39df2f2aa0c0a65aed"
  },
  {
    "url": "assets/js/399.js",
    "revision": "b544dfcb3f871f3bb4f79eabfb1c02dc"
  },
  {
    "url": "assets/js/4.js",
    "revision": "3f4e7e04cee49a90148ee8345e461fbe"
  },
  {
    "url": "assets/js/40.js",
    "revision": "dff84a30bc6c33d520b582e7abd80f46"
  },
  {
    "url": "assets/js/400.js",
    "revision": "c06ca1df86e13bb82ad44fedc84e627a"
  },
  {
    "url": "assets/js/401.js",
    "revision": "c7a01f5ac1b17494b914fed96b5137bc"
  },
  {
    "url": "assets/js/402.js",
    "revision": "8be82c1e7f11f3f20f0296eb0dabd433"
  },
  {
    "url": "assets/js/403.js",
    "revision": "e87b9c40423c0b78fe37b71001a8b2ef"
  },
  {
    "url": "assets/js/404.js",
    "revision": "5aeb975c8c0bcae87e8ba1cecaa22b67"
  },
  {
    "url": "assets/js/405.js",
    "revision": "cb9f5bff6e02206ae75aec5ce961d9e1"
  },
  {
    "url": "assets/js/406.js",
    "revision": "6729a4e2fe4fc3bf6d97b2d9916cf2d4"
  },
  {
    "url": "assets/js/407.js",
    "revision": "f501793030fb057335860762e5bfc9f3"
  },
  {
    "url": "assets/js/408.js",
    "revision": "3a2116735ba5c72e6b81bbd3245a7401"
  },
  {
    "url": "assets/js/409.js",
    "revision": "15ca2de0ae9c171fff2a1ce7eaabbbf0"
  },
  {
    "url": "assets/js/41.js",
    "revision": "7e422cabf912a3bfac2c1925b88b250a"
  },
  {
    "url": "assets/js/410.js",
    "revision": "dfc49f118f73e0a09eaf4211c0dbe217"
  },
  {
    "url": "assets/js/411.js",
    "revision": "a587c2fefb7ee3f8ee6cb782cc511645"
  },
  {
    "url": "assets/js/412.js",
    "revision": "68ce0af0de967a54859d8174f264a900"
  },
  {
    "url": "assets/js/413.js",
    "revision": "bd7768135b0fcab5a68acdbda69d2fff"
  },
  {
    "url": "assets/js/414.js",
    "revision": "f537e73776091a819dc23a9f9cb69bf7"
  },
  {
    "url": "assets/js/415.js",
    "revision": "25793e68ceb3900816afc3611d4326db"
  },
  {
    "url": "assets/js/416.js",
    "revision": "5c170643861edf8d5b8779ead2c016fe"
  },
  {
    "url": "assets/js/417.js",
    "revision": "2d1d034572cfa2b3ce5239ff71a5ce8b"
  },
  {
    "url": "assets/js/418.js",
    "revision": "6fb8fe6307322c39e102c8e4d9ae864c"
  },
  {
    "url": "assets/js/419.js",
    "revision": "456d9e895acb90dcb653c0bdc01847ae"
  },
  {
    "url": "assets/js/42.js",
    "revision": "c1e23d84326fdd487cb6ff082514dfb6"
  },
  {
    "url": "assets/js/420.js",
    "revision": "cd5dcca85e2a0b056128b4bd7f058e84"
  },
  {
    "url": "assets/js/421.js",
    "revision": "d7f4b4bb393ebac5df9d56cac6186e9c"
  },
  {
    "url": "assets/js/422.js",
    "revision": "74555478000e15cf9047881e50b44001"
  },
  {
    "url": "assets/js/423.js",
    "revision": "087221435d181bfe39d5aec0bb0cb66c"
  },
  {
    "url": "assets/js/424.js",
    "revision": "8082cecff088e4c4cabbc9d7de4e32c5"
  },
  {
    "url": "assets/js/425.js",
    "revision": "461e1f2a2bc55623b84729525c94712b"
  },
  {
    "url": "assets/js/426.js",
    "revision": "215ab6da43b6b34995c0a590662c52dd"
  },
  {
    "url": "assets/js/427.js",
    "revision": "3833f7d1decc0147946000bf696cb0ce"
  },
  {
    "url": "assets/js/428.js",
    "revision": "50763c1fdb073bdfadb68dd8bee4c219"
  },
  {
    "url": "assets/js/429.js",
    "revision": "841c800f4d0166877b9817593a2cdde3"
  },
  {
    "url": "assets/js/43.js",
    "revision": "8c2f7e4ffa97424caf4a197552caf3cb"
  },
  {
    "url": "assets/js/430.js",
    "revision": "d3c4877bd3f6c8d7a2ead32caadf03b2"
  },
  {
    "url": "assets/js/431.js",
    "revision": "88070aef8fdf41bb3e6c993dc865ada8"
  },
  {
    "url": "assets/js/432.js",
    "revision": "ae81e227c931402c793581961563b1a6"
  },
  {
    "url": "assets/js/433.js",
    "revision": "629ed0e5be473c532513f5b841d28a4e"
  },
  {
    "url": "assets/js/434.js",
    "revision": "28d90700c916f1f93b56de4e6e95778e"
  },
  {
    "url": "assets/js/435.js",
    "revision": "d69426a42224b02aa04d3c1956c1d340"
  },
  {
    "url": "assets/js/436.js",
    "revision": "586127b52f9710adbd6615cb8e14cab7"
  },
  {
    "url": "assets/js/437.js",
    "revision": "c34dae3ad4c53b94dd330e94b544e990"
  },
  {
    "url": "assets/js/438.js",
    "revision": "58385765ec25cf291a2c83cb2290f8c5"
  },
  {
    "url": "assets/js/439.js",
    "revision": "ea549d473096d465ff22e47e1a6f9805"
  },
  {
    "url": "assets/js/44.js",
    "revision": "c33e82a1b3d346d74fcb8cf70c3f1667"
  },
  {
    "url": "assets/js/440.js",
    "revision": "464acd311e39448671036b229d456501"
  },
  {
    "url": "assets/js/441.js",
    "revision": "d792619cbf933a9411617578fe9e2d9c"
  },
  {
    "url": "assets/js/442.js",
    "revision": "20afef0abf0d67167f83d1f14b942022"
  },
  {
    "url": "assets/js/443.js",
    "revision": "9dfcdf3491725880799848fbdbedba03"
  },
  {
    "url": "assets/js/444.js",
    "revision": "d59b4d4542e1f67bf056ae399e861f14"
  },
  {
    "url": "assets/js/445.js",
    "revision": "73e3e164270f9f88be204d09533685c9"
  },
  {
    "url": "assets/js/446.js",
    "revision": "1ca4c4ce5da5c9def60da588f396b0ed"
  },
  {
    "url": "assets/js/447.js",
    "revision": "e87e6433d2c1260ccf26268d36479bbc"
  },
  {
    "url": "assets/js/448.js",
    "revision": "d9e83a8eb233eb9eb19ed5e526f8d2fc"
  },
  {
    "url": "assets/js/449.js",
    "revision": "4d1b91ad72aa694b6329b7000f3f8328"
  },
  {
    "url": "assets/js/45.js",
    "revision": "373acbcea59a8cf1d6a076a41a256a45"
  },
  {
    "url": "assets/js/450.js",
    "revision": "68843a9f728e2ede09983a8a5ec8660f"
  },
  {
    "url": "assets/js/451.js",
    "revision": "c8e00b12ad9e933fc5b3494ef1f93e6f"
  },
  {
    "url": "assets/js/452.js",
    "revision": "9b9371435742601a23728e1df5fc9838"
  },
  {
    "url": "assets/js/453.js",
    "revision": "ed2b586eff8280eaf45334bc13acb5c3"
  },
  {
    "url": "assets/js/454.js",
    "revision": "8823f0a317dbdfdf0b1bfd9b577524cd"
  },
  {
    "url": "assets/js/455.js",
    "revision": "210fac1409ebe5b587ee9e2a377603e6"
  },
  {
    "url": "assets/js/456.js",
    "revision": "67ba92147add01d92fe0900f2cb94c60"
  },
  {
    "url": "assets/js/457.js",
    "revision": "1e73d45e992c1ae9c9cb3ae6e70ec539"
  },
  {
    "url": "assets/js/458.js",
    "revision": "bec8d5d20dfc5ac8b5a81d2dde43148a"
  },
  {
    "url": "assets/js/459.js",
    "revision": "fd8e0274ae8317c52a31a97eece9fab3"
  },
  {
    "url": "assets/js/46.js",
    "revision": "acd8799789659633b4608c8827b91ae5"
  },
  {
    "url": "assets/js/460.js",
    "revision": "5172df7cbf0c6a972705bd8c3a4992ce"
  },
  {
    "url": "assets/js/461.js",
    "revision": "f45b3485cc203a0b46f0f1db787fdfcb"
  },
  {
    "url": "assets/js/462.js",
    "revision": "016213d07d5b673f71ed99dcc134091d"
  },
  {
    "url": "assets/js/463.js",
    "revision": "d1564e2b4046aa109c445066616158ad"
  },
  {
    "url": "assets/js/464.js",
    "revision": "a5cc6611144225a767b1f1ec31daf99b"
  },
  {
    "url": "assets/js/465.js",
    "revision": "ffd7ecee9a56682392ebfceae360a244"
  },
  {
    "url": "assets/js/466.js",
    "revision": "2c5cf1406f8cd8ad9eab337025055e26"
  },
  {
    "url": "assets/js/467.js",
    "revision": "6e8892f4bba92469e66992b7a0b1cceb"
  },
  {
    "url": "assets/js/468.js",
    "revision": "6d264766f8d3a5895a39e7e689739203"
  },
  {
    "url": "assets/js/469.js",
    "revision": "cb117114411b6bf2cf2812271de333f0"
  },
  {
    "url": "assets/js/47.js",
    "revision": "3f556e117eba195750718483aaf00f45"
  },
  {
    "url": "assets/js/470.js",
    "revision": "dddf041a24197fe62b99443e9433a94c"
  },
  {
    "url": "assets/js/471.js",
    "revision": "489ac4f9ae008ed21de382bfd53da307"
  },
  {
    "url": "assets/js/472.js",
    "revision": "fa1e9e49dacef1bec778d6547eeef695"
  },
  {
    "url": "assets/js/473.js",
    "revision": "3cc820a8b9c71d10219a573ce12adbb0"
  },
  {
    "url": "assets/js/474.js",
    "revision": "3c3cbcd4a104ee2ac5b206826e78b610"
  },
  {
    "url": "assets/js/475.js",
    "revision": "80226e18e7a087f0599b5da1ea68b177"
  },
  {
    "url": "assets/js/476.js",
    "revision": "0ce0534ee45deb155d22e4ff351c680d"
  },
  {
    "url": "assets/js/477.js",
    "revision": "a2883066997286da2836ca2c02f70c71"
  },
  {
    "url": "assets/js/478.js",
    "revision": "d0f78e019f20f39e8c853a67481c5589"
  },
  {
    "url": "assets/js/479.js",
    "revision": "d5c7d41b2ae6fb7e1b552b02212748fd"
  },
  {
    "url": "assets/js/48.js",
    "revision": "23660974f6e9339ec2385a9c01969d3c"
  },
  {
    "url": "assets/js/480.js",
    "revision": "5ad258c0a83bc53e064fea91d66b5d53"
  },
  {
    "url": "assets/js/481.js",
    "revision": "ba238b3c4deabe3165b30955e1e79cda"
  },
  {
    "url": "assets/js/482.js",
    "revision": "7e980eedd8873d604093be0423c3ef10"
  },
  {
    "url": "assets/js/483.js",
    "revision": "0de7b229fd4bdf0b37338154e5f7e158"
  },
  {
    "url": "assets/js/484.js",
    "revision": "8700bf65b3b7ea4e6af54cf2d7a5a8d1"
  },
  {
    "url": "assets/js/485.js",
    "revision": "a49e8253cc577f757fd444410be89709"
  },
  {
    "url": "assets/js/486.js",
    "revision": "fa92405d3ed260e140131dbeec3bdc79"
  },
  {
    "url": "assets/js/487.js",
    "revision": "2436e4af9563fb20fece063907b75703"
  },
  {
    "url": "assets/js/488.js",
    "revision": "bcf5a7acb983601f34f89d1fbf30fe3e"
  },
  {
    "url": "assets/js/489.js",
    "revision": "289a31fc60fa61d83116fae6eab71259"
  },
  {
    "url": "assets/js/49.js",
    "revision": "95b927ce1886bf44318a1185436f8422"
  },
  {
    "url": "assets/js/490.js",
    "revision": "97169ec465666194611c27640a43c319"
  },
  {
    "url": "assets/js/491.js",
    "revision": "1efc6a673b32e381c2388d284fedb966"
  },
  {
    "url": "assets/js/492.js",
    "revision": "ed1aefd9630b1b6e3e0c95e2d6681681"
  },
  {
    "url": "assets/js/493.js",
    "revision": "ef82771ec84c24aacbddf218eed8f5af"
  },
  {
    "url": "assets/js/494.js",
    "revision": "52a2de27969279592ce1643919f71c16"
  },
  {
    "url": "assets/js/495.js",
    "revision": "0f036fa5576a4b92f6775b700b9ee86e"
  },
  {
    "url": "assets/js/496.js",
    "revision": "8e4d5044005f4b372cb38f4738049e58"
  },
  {
    "url": "assets/js/497.js",
    "revision": "bcfafe91397c57c99239906febcb440b"
  },
  {
    "url": "assets/js/498.js",
    "revision": "3f0249220e0e2db2306c0fa855301c3b"
  },
  {
    "url": "assets/js/499.js",
    "revision": "25925a6e537224a2107c0d48b79003f3"
  },
  {
    "url": "assets/js/50.js",
    "revision": "d76be803189e545f131e8db91be7b03f"
  },
  {
    "url": "assets/js/500.js",
    "revision": "518cfe030302df77d030e203e9d45e29"
  },
  {
    "url": "assets/js/501.js",
    "revision": "ec2c1de0669a259cb10dcac188665d2f"
  },
  {
    "url": "assets/js/502.js",
    "revision": "30066696610015929cd03585f4d79d26"
  },
  {
    "url": "assets/js/503.js",
    "revision": "bc301549a3028baabb0c019b3771a71d"
  },
  {
    "url": "assets/js/504.js",
    "revision": "27d72605d2d907ac23b745210c4589b9"
  },
  {
    "url": "assets/js/505.js",
    "revision": "4efa480ca9f815a7bbe4622b8f8b34bb"
  },
  {
    "url": "assets/js/506.js",
    "revision": "2ecfe8deb9f6c1a7fd33f8c952efc451"
  },
  {
    "url": "assets/js/507.js",
    "revision": "359d6b013082304d22b287a17d0dfa03"
  },
  {
    "url": "assets/js/508.js",
    "revision": "34a80d925f4f86e7dd14dbee6de395f7"
  },
  {
    "url": "assets/js/509.js",
    "revision": "d56c70946f4ae3bbbeab500962bf41a2"
  },
  {
    "url": "assets/js/51.js",
    "revision": "7a7052779ea9f36a517fd6a77028617d"
  },
  {
    "url": "assets/js/510.js",
    "revision": "9ea8458eaed75a8b035851af72ec5139"
  },
  {
    "url": "assets/js/511.js",
    "revision": "acade65ad055eb59320d9f0e971bbeca"
  },
  {
    "url": "assets/js/512.js",
    "revision": "81181ff1c4b870b6f80af3643229e455"
  },
  {
    "url": "assets/js/513.js",
    "revision": "08e38e4d9270d28d9fe696e900ca8f6d"
  },
  {
    "url": "assets/js/514.js",
    "revision": "067e1040068fb8b725125e29c07b9e80"
  },
  {
    "url": "assets/js/515.js",
    "revision": "85a5ebf259341d0687ed5a697f4b4744"
  },
  {
    "url": "assets/js/516.js",
    "revision": "8662a5e5f15d9ca53358772f095e1683"
  },
  {
    "url": "assets/js/517.js",
    "revision": "6702d91062049b2f4f266fd844dafdb5"
  },
  {
    "url": "assets/js/518.js",
    "revision": "af8e06f7e2c5bc1eaaec86169cbd052f"
  },
  {
    "url": "assets/js/519.js",
    "revision": "aa5db89d9138eea57751ba95d18493a1"
  },
  {
    "url": "assets/js/52.js",
    "revision": "489975ae5f9f6052f7bf9e26c4023ac5"
  },
  {
    "url": "assets/js/520.js",
    "revision": "b87614f234471ef854e095c30554e17d"
  },
  {
    "url": "assets/js/521.js",
    "revision": "b7cffd4d4f9d86645b01ba6073a16c3f"
  },
  {
    "url": "assets/js/522.js",
    "revision": "5581cadc95128ac258814bed15e6edcd"
  },
  {
    "url": "assets/js/523.js",
    "revision": "485fa267b86e64d8518afdf04e03f766"
  },
  {
    "url": "assets/js/524.js",
    "revision": "db57f5afb8e108a9044a48ebde7b8931"
  },
  {
    "url": "assets/js/525.js",
    "revision": "06b28ca6e74b326fddc410f135172be4"
  },
  {
    "url": "assets/js/526.js",
    "revision": "195472a3c524475fc2acd7d12073df9b"
  },
  {
    "url": "assets/js/527.js",
    "revision": "dbf4da85d4dadf56e3abe82bb871a57c"
  },
  {
    "url": "assets/js/528.js",
    "revision": "f9ed03654a74e7fdd8ae86804b9928e3"
  },
  {
    "url": "assets/js/529.js",
    "revision": "329e8c916728f6a43d942cd17fe6e5b6"
  },
  {
    "url": "assets/js/53.js",
    "revision": "d82e31f9c4a506c3635e80f5c12a65b6"
  },
  {
    "url": "assets/js/530.js",
    "revision": "8b7c406159d113ace0d801deda215064"
  },
  {
    "url": "assets/js/531.js",
    "revision": "d2aaa68b12e2e603f28131d76adbe8da"
  },
  {
    "url": "assets/js/532.js",
    "revision": "d82f1ed8d85f5a18fddf641a1472f774"
  },
  {
    "url": "assets/js/533.js",
    "revision": "6eff86f7d8feba29439612961387a020"
  },
  {
    "url": "assets/js/534.js",
    "revision": "86880b429e71ee77cd71b8f9322d1856"
  },
  {
    "url": "assets/js/535.js",
    "revision": "654a6ef5d0245bee9364c0bc43d0a6bb"
  },
  {
    "url": "assets/js/536.js",
    "revision": "4cf10a940bd37ca6a9ca04fc9eb3cf17"
  },
  {
    "url": "assets/js/537.js",
    "revision": "8edb07684b109a419babe3799e3a8d4c"
  },
  {
    "url": "assets/js/538.js",
    "revision": "32186da1654212ef7bea2e6de782afb6"
  },
  {
    "url": "assets/js/539.js",
    "revision": "19c62c733ae4e5e9ad6a2483f8a055f0"
  },
  {
    "url": "assets/js/54.js",
    "revision": "5a7d55a207ee27aaa6f3854acee66f7c"
  },
  {
    "url": "assets/js/540.js",
    "revision": "6729d96b61c83f5ef6789ec4a3bd02ee"
  },
  {
    "url": "assets/js/541.js",
    "revision": "d954c6c28bd2a5f0b385917dc7b9c6ce"
  },
  {
    "url": "assets/js/542.js",
    "revision": "9c3e38ca12639c0e93cf09d330e1bad9"
  },
  {
    "url": "assets/js/543.js",
    "revision": "6cf628885cd4b72837e16b2ee9cad9eb"
  },
  {
    "url": "assets/js/544.js",
    "revision": "610a58d99decf2d6c779a12100ba8154"
  },
  {
    "url": "assets/js/545.js",
    "revision": "6b9cce570eb64c63254f0f63c1214472"
  },
  {
    "url": "assets/js/546.js",
    "revision": "371cbdd4f51d8e7c2232c0fb3377c8c2"
  },
  {
    "url": "assets/js/547.js",
    "revision": "e2306ca74e5ec283d22ff299ff82fd41"
  },
  {
    "url": "assets/js/548.js",
    "revision": "27a33143756bc6b04271f3c0d43f1e66"
  },
  {
    "url": "assets/js/549.js",
    "revision": "2f7d2d1cb81db31a34fece0ae8b1a57b"
  },
  {
    "url": "assets/js/55.js",
    "revision": "c79273506f13d018254b9ee2dbea7cfc"
  },
  {
    "url": "assets/js/550.js",
    "revision": "84f73559d00ca7d3722d29229892547e"
  },
  {
    "url": "assets/js/551.js",
    "revision": "a3123b0060cb3f9100ee97dfd5481165"
  },
  {
    "url": "assets/js/552.js",
    "revision": "266b07421b61a5027afac217677a4490"
  },
  {
    "url": "assets/js/553.js",
    "revision": "4452ce0193e58227ab40e24179dfaf15"
  },
  {
    "url": "assets/js/554.js",
    "revision": "03e340e75faaea10d965529c0d36206a"
  },
  {
    "url": "assets/js/555.js",
    "revision": "cf4a7f86c294c38ff3d1bbc7b7087245"
  },
  {
    "url": "assets/js/556.js",
    "revision": "0db4bbf1c48c406be47ed6581bc7bbed"
  },
  {
    "url": "assets/js/557.js",
    "revision": "30cd855ba8769f7f6174e424a61f06e1"
  },
  {
    "url": "assets/js/558.js",
    "revision": "e3eec6363fea00ba919380a388f13dbc"
  },
  {
    "url": "assets/js/559.js",
    "revision": "da9d331c677c2ed6965534bf7d4dc381"
  },
  {
    "url": "assets/js/56.js",
    "revision": "9aba00d3d2edd40dda55af9ecae5f4ae"
  },
  {
    "url": "assets/js/560.js",
    "revision": "55c97107f20a38bf06dd5f7d4d48daa0"
  },
  {
    "url": "assets/js/561.js",
    "revision": "dad6ab53eb79a8b93a1bc36db1f53e43"
  },
  {
    "url": "assets/js/562.js",
    "revision": "f7ad1d6d8059a8865bacec927e8894e3"
  },
  {
    "url": "assets/js/563.js",
    "revision": "c153e75477dac06c925f062077350ffb"
  },
  {
    "url": "assets/js/564.js",
    "revision": "15c485d71faf1d7dd55e32a01ff58125"
  },
  {
    "url": "assets/js/565.js",
    "revision": "961efeec4e116bc1337bc2b327bfe280"
  },
  {
    "url": "assets/js/566.js",
    "revision": "ae67f4104e6531d936af4e7d726a72a4"
  },
  {
    "url": "assets/js/567.js",
    "revision": "099eb34bb4b977c4b9b299f4fbf5213c"
  },
  {
    "url": "assets/js/568.js",
    "revision": "f705f812bc1b01e621e164e79fa5f172"
  },
  {
    "url": "assets/js/569.js",
    "revision": "d48194662a8b0d5e4ef0bf122408a2d4"
  },
  {
    "url": "assets/js/57.js",
    "revision": "2547a52b4c829605b7cbc00cbef12685"
  },
  {
    "url": "assets/js/570.js",
    "revision": "47e0b6f2aef715a7bd4701ee5987c837"
  },
  {
    "url": "assets/js/571.js",
    "revision": "ad31870196943529261471f1a0c73101"
  },
  {
    "url": "assets/js/572.js",
    "revision": "6905be71177f501d72173f05a7e8290c"
  },
  {
    "url": "assets/js/573.js",
    "revision": "3b62540d9f632be354070264babd3309"
  },
  {
    "url": "assets/js/574.js",
    "revision": "ddc90a33f741ecf78baf5af63a5ea05e"
  },
  {
    "url": "assets/js/575.js",
    "revision": "58e1aba0564d33e909ee35875855d7f2"
  },
  {
    "url": "assets/js/576.js",
    "revision": "6555f86cc8f301ed75b924afa2c2d509"
  },
  {
    "url": "assets/js/577.js",
    "revision": "8a461875df22068077c7a98e117a8902"
  },
  {
    "url": "assets/js/578.js",
    "revision": "653ac8949ff846b0abf899765b318049"
  },
  {
    "url": "assets/js/579.js",
    "revision": "adf9cfbe262662d8a0fc2c459993b0e5"
  },
  {
    "url": "assets/js/58.js",
    "revision": "522745134e490ebd6bb1fc18717121ba"
  },
  {
    "url": "assets/js/580.js",
    "revision": "55bb30dd1a732fb201d04889fc59c2d8"
  },
  {
    "url": "assets/js/581.js",
    "revision": "71fffc7dec170c0087ac3a6db6a91d75"
  },
  {
    "url": "assets/js/582.js",
    "revision": "81e6bfbec0ca4737d2b8d9894ec896ca"
  },
  {
    "url": "assets/js/583.js",
    "revision": "f98110741ab5373bf7a098f16f888663"
  },
  {
    "url": "assets/js/584.js",
    "revision": "931548d18eb78f4478334fd9ce7d4194"
  },
  {
    "url": "assets/js/585.js",
    "revision": "75ef17c2722723f69018664f69cb3206"
  },
  {
    "url": "assets/js/586.js",
    "revision": "62e568941b310770d54819c1abd83cfe"
  },
  {
    "url": "assets/js/587.js",
    "revision": "da5d9451df588aa2b1ead68db2855687"
  },
  {
    "url": "assets/js/588.js",
    "revision": "8fa897bf955b5ea235293d3d9fd593aa"
  },
  {
    "url": "assets/js/589.js",
    "revision": "05ce16714a6c18053f9467ec5d4a1510"
  },
  {
    "url": "assets/js/59.js",
    "revision": "df06d830f897ca86ae7a21c3c7b2f2bf"
  },
  {
    "url": "assets/js/590.js",
    "revision": "dbd58e9840a4377acaa2ad38138348bc"
  },
  {
    "url": "assets/js/591.js",
    "revision": "ee8d4006da65fed63535de59b66f3459"
  },
  {
    "url": "assets/js/592.js",
    "revision": "b8133273ba642d1861847bdf3b706c98"
  },
  {
    "url": "assets/js/593.js",
    "revision": "0e03837812f1b0b2955665ca51e71c09"
  },
  {
    "url": "assets/js/594.js",
    "revision": "f42084276965bfafb11a9e1c79950b3b"
  },
  {
    "url": "assets/js/595.js",
    "revision": "4e8fd3f6a06d67bbd12b7182e2635254"
  },
  {
    "url": "assets/js/596.js",
    "revision": "46662c85057a57cd04ff5dfead05943c"
  },
  {
    "url": "assets/js/597.js",
    "revision": "93f4d9dff3f46dd1f3331d1934ad0e3a"
  },
  {
    "url": "assets/js/598.js",
    "revision": "c56844d7cd3c2a00c3a7166ac0195151"
  },
  {
    "url": "assets/js/599.js",
    "revision": "cd29784a93841fb8382b7e19bcda0787"
  },
  {
    "url": "assets/js/6.js",
    "revision": "92b5ff5022bb1046a37c15808c5f7c5f"
  },
  {
    "url": "assets/js/60.js",
    "revision": "be38884117b001e6da8264afac7e1ff9"
  },
  {
    "url": "assets/js/600.js",
    "revision": "a816ef403d218fba0ac8ab30dd5c19c4"
  },
  {
    "url": "assets/js/601.js",
    "revision": "8192c0f6cea1030c045cc00033ed9374"
  },
  {
    "url": "assets/js/602.js",
    "revision": "d320f2aa9cbc6404dee0b3d2b135da5e"
  },
  {
    "url": "assets/js/603.js",
    "revision": "ef192050151731e5323d83ce048ea570"
  },
  {
    "url": "assets/js/604.js",
    "revision": "9278f80d5c39f05b7edf3e1926564e85"
  },
  {
    "url": "assets/js/605.js",
    "revision": "21f6c66eeb8ee8054e38f048fb280821"
  },
  {
    "url": "assets/js/606.js",
    "revision": "d06bbef7f910abb098ef8f18c7eda913"
  },
  {
    "url": "assets/js/607.js",
    "revision": "2aebdd6e2ee2208c9f29d334cf6a81c7"
  },
  {
    "url": "assets/js/608.js",
    "revision": "6e55c658f3977fa6a7108e04daae4f3b"
  },
  {
    "url": "assets/js/609.js",
    "revision": "1ca032193eb2f9ab5a9533dd1e71c7ff"
  },
  {
    "url": "assets/js/61.js",
    "revision": "cd8219ca5f6f1cdeeada86a77e048892"
  },
  {
    "url": "assets/js/610.js",
    "revision": "3aab09b57fc2af1e9213523b0802c2c2"
  },
  {
    "url": "assets/js/611.js",
    "revision": "4cc81a7c84b6cbfda0f937c4ce176700"
  },
  {
    "url": "assets/js/612.js",
    "revision": "18e53e663144eaa88142b8044ea335e9"
  },
  {
    "url": "assets/js/613.js",
    "revision": "5ff8c49f710dc356874ae1f801012efb"
  },
  {
    "url": "assets/js/614.js",
    "revision": "563d73608772324177e1a51bb8d74c68"
  },
  {
    "url": "assets/js/615.js",
    "revision": "baf82ca4ec1ac1f0cb1edad65ab5646a"
  },
  {
    "url": "assets/js/616.js",
    "revision": "2f73f6c32b94cea83eefbd44c4d8743d"
  },
  {
    "url": "assets/js/62.js",
    "revision": "e2b8ee58a977521fba4faf928ec965ed"
  },
  {
    "url": "assets/js/63.js",
    "revision": "f03b400205a42ee7a303c8350a3789dd"
  },
  {
    "url": "assets/js/64.js",
    "revision": "3bf748f16ba02e9622a7958d27b96324"
  },
  {
    "url": "assets/js/65.js",
    "revision": "c047e32ea9d3452be4001021deb3a5bd"
  },
  {
    "url": "assets/js/66.js",
    "revision": "1fa1325ebd1fd3da31e95c1d47b03e4c"
  },
  {
    "url": "assets/js/67.js",
    "revision": "7cf3fc3e9447749dcd1425487f78549c"
  },
  {
    "url": "assets/js/68.js",
    "revision": "728a74352120003119be71fce11b99d6"
  },
  {
    "url": "assets/js/69.js",
    "revision": "471be13ccf66433379b4b426e81e7cbe"
  },
  {
    "url": "assets/js/7.js",
    "revision": "a20b23961736e8273ebc1a986645e812"
  },
  {
    "url": "assets/js/70.js",
    "revision": "f8a8fa6fe68a34dcaa1c6aae7fc409c3"
  },
  {
    "url": "assets/js/71.js",
    "revision": "727a59723ef740d8726d3e8082a7b4c6"
  },
  {
    "url": "assets/js/72.js",
    "revision": "08de28be7382e99d796aece2cb62f18b"
  },
  {
    "url": "assets/js/73.js",
    "revision": "0c6ed49cb94b012944b93f337b70fdaa"
  },
  {
    "url": "assets/js/74.js",
    "revision": "1175f76655019a80e2f3aea003459776"
  },
  {
    "url": "assets/js/75.js",
    "revision": "9e850daa2c4c3a3dd17f03e215f4adce"
  },
  {
    "url": "assets/js/76.js",
    "revision": "8f459127dd772c423cbfc0c0d20e52b3"
  },
  {
    "url": "assets/js/77.js",
    "revision": "fca1fdef0cc00c99f7e8ce2ac1943f07"
  },
  {
    "url": "assets/js/78.js",
    "revision": "f1bd952848ab5a8ee74b1dd328c16b01"
  },
  {
    "url": "assets/js/79.js",
    "revision": "44945073b3ea86f40c92e7708a4691d1"
  },
  {
    "url": "assets/js/8.js",
    "revision": "a99f1a07b510ef29d6a0629854c20518"
  },
  {
    "url": "assets/js/80.js",
    "revision": "990e6229e109789bc48539ee9eca4e64"
  },
  {
    "url": "assets/js/81.js",
    "revision": "77c7d3b1c1d1782313dd8e9d3557796b"
  },
  {
    "url": "assets/js/82.js",
    "revision": "8f89b6ba74c7df49ba97cde20af8278f"
  },
  {
    "url": "assets/js/83.js",
    "revision": "d5815a3383a60090e7cd69835889a5f0"
  },
  {
    "url": "assets/js/84.js",
    "revision": "b6a84bc30604878b1c5c5c6585818462"
  },
  {
    "url": "assets/js/85.js",
    "revision": "36f00904f1a5b84e00a9d73634dcd8fb"
  },
  {
    "url": "assets/js/86.js",
    "revision": "76d831478d5d3aa157d98067eba3feb6"
  },
  {
    "url": "assets/js/87.js",
    "revision": "e37de09e8245b42fcbde750c5307d2f8"
  },
  {
    "url": "assets/js/88.js",
    "revision": "e5f32768c17b07eeaab156905192ead8"
  },
  {
    "url": "assets/js/89.js",
    "revision": "e1baa204438fde6ce31408538bf11f39"
  },
  {
    "url": "assets/js/9.js",
    "revision": "cd535bff3666b45f726b124026f05278"
  },
  {
    "url": "assets/js/90.js",
    "revision": "16b06bece27a5895923c3eb4c41ba91a"
  },
  {
    "url": "assets/js/91.js",
    "revision": "50d750901a7d14037db404fca35579ce"
  },
  {
    "url": "assets/js/92.js",
    "revision": "1967b2a793a8b887826364279a684a58"
  },
  {
    "url": "assets/js/93.js",
    "revision": "476c32b8fb940d63162487519dcada7f"
  },
  {
    "url": "assets/js/94.js",
    "revision": "a04a1f4a5505854e185e9402d6ee7a95"
  },
  {
    "url": "assets/js/95.js",
    "revision": "fd3d0d693688851653a02e430d17a690"
  },
  {
    "url": "assets/js/96.js",
    "revision": "c544cba9f145393e15ffe0f66124b24d"
  },
  {
    "url": "assets/js/97.js",
    "revision": "fd9c61f6320654928b460cc726392022"
  },
  {
    "url": "assets/js/98.js",
    "revision": "9726dfb41fbb2a3523091478ad37eff0"
  },
  {
    "url": "assets/js/99.js",
    "revision": "b4a35768c3e2ebe0514498e913bb8002"
  },
  {
    "url": "assets/js/app.js",
    "revision": "867b529256550b5becd19c6f24450a01"
  },
  {
    "url": "assets/js/styles.js",
    "revision": "22f22b49cc901aa95826401f7ce0930c"
  },
  {
    "url": "blog/category/index.html",
    "revision": "a4cc66bb52b4d90f6d7453fb15fb7d6f"
  },
  {
    "url": "blog/code/artists/index.html",
    "revision": "b47b4226128199baa28f57246034bc6d"
  },
  {
    "url": "blog/code/asa.sbh.nz/index.html",
    "revision": "3f30c4b59f44c959a1f92908d1aa1767"
  },
  {
    "url": "blog/code/decrypt/index.html",
    "revision": "2b1aaa1a9ba5e7731abc3a19db05ff10"
  },
  {
    "url": "blog/code/divider/index.html",
    "revision": "4d967d14d119fff37ca261019dea62cd"
  },
  {
    "url": "blog/code/first/index.html",
    "revision": "9730dbd3d7b1a0ba85360e1c9ab5b61a"
  },
  {
    "url": "blog/code/fishbarrel/index.html",
    "revision": "d27f91fcfe9036b31884a806e8a61ea7"
  },
  {
    "url": "blog/code/graphs/index.html",
    "revision": "1f687470e154cbf1399888988e1aa631"
  },
  {
    "url": "blog/code/indent/index.html",
    "revision": "badb45f4c7b073c9a24e14fc20c50499"
  },
  {
    "url": "blog/code/index.html",
    "revision": "4598e66fad1c541c17ed6cf40e55deea"
  },
  {
    "url": "blog/code/ingoa.nz/index.html",
    "revision": "9c5459d81bb378aafdb8f64585006568"
  },
  {
    "url": "blog/code/nzondemand/index.html",
    "revision": "7d470d0295661a3872582b506f4fd548"
  },
  {
    "url": "blog/code/picard/index.html",
    "revision": "b84ff231b4b6f5298a024f019b7d7672"
  },
  {
    "url": "blog/code/qr/index.html",
    "revision": "aaaed9322e105e033d1c6286379e6206"
  },
  {
    "url": "blog/code/readable/index.html",
    "revision": "e6462e6321978bf2bffd3e4cf51f90ec"
  },
  {
    "url": "blog/code/tone/index.html",
    "revision": "cf163f3824f89413db9e592bb4f2f956"
  },
  {
    "url": "blog/code/war/index.html",
    "revision": "340abff8050adf1be1422e3405cbc01d"
  },
  {
    "url": "blog/code/website/index.html",
    "revision": "9b4444e1cfa9b845ac1d34da7c8abe24"
  },
  {
    "url": "blog/code/website/route/index.html",
    "revision": "eb11a5c2781d25c1a894c2f612f7bf49"
  },
  {
    "url": "blog/code/xmltv.co.nz/index.html",
    "revision": "f11ef8340ee957b84d5636dba6d11408"
  },
  {
    "url": "blog/howto/index.html",
    "revision": "ab31a1b81333c5015088b42f5427de45"
  },
  {
    "url": "blog/howto/intel865/index.html",
    "revision": "f677711f8d7a130d3ef1c99e2fb36e3c"
  },
  {
    "url": "blog/howto/ios/index.html",
    "revision": "bb71063cffc2f9fef1d87f84e90b51d7"
  },
  {
    "url": "blog/howto/nexentastor/index.html",
    "revision": "0033df93c12845547badbffb88b48a98"
  },
  {
    "url": "blog/howto/pcloadletter/index.html",
    "revision": "a948d39161927b3b0ccd59e12321a8e3"
  },
  {
    "url": "blog/howto/raid5/index.html",
    "revision": "6fb09d2942ab4b1f88c7ece3bca7d1e6"
  },
  {
    "url": "blog/index.html",
    "revision": "12080170ac83e296106a2e9c731b0870"
  },
  {
    "url": "blog/life/anotheryear/index.html",
    "revision": "aadc7b89e768d1aec6fc416207463096"
  },
  {
    "url": "blog/life/arcade/index.html",
    "revision": "c1e6a60b6ff4d382dea2e2c479468fce"
  },
  {
    "url": "blog/life/birthday/index.html",
    "revision": "e2a8a9d1806c1e4d22d5ebdf636a697e"
  },
  {
    "url": "blog/life/blasphemy/index.html",
    "revision": "e6afea67dca4856c5ad30bcc7a5d945a"
  },
  {
    "url": "blog/life/blogger/index.html",
    "revision": "6c12a0daad9ad43ae81d6260bb457582"
  },
  {
    "url": "blog/life/blurry/index.html",
    "revision": "cda95dc2b8204f2ba577acdf4385be6a"
  },
  {
    "url": "blog/life/busyday/index.html",
    "revision": "2299eba6b8864d2eb0c0f8d1c8f77596"
  },
  {
    "url": "blog/life/domain/index.html",
    "revision": "4e54f0418ccaff7fdb8672f70c64c23f"
  },
  {
    "url": "blog/life/exams/index.html",
    "revision": "d2940676e3f60ac57892cf3b3f071208"
  },
  {
    "url": "blog/life/food/index.html",
    "revision": "1ba1b6d6325ca053cfd31e9ac8d5fcf6"
  },
  {
    "url": "blog/life/games/index.html",
    "revision": "5fe818a6316c4d216ff3bdde810ae225"
  },
  {
    "url": "blog/life/glenview/index.html",
    "revision": "de25558e6ae81942c0e58a68d50da1d5"
  },
  {
    "url": "blog/life/headlines/index.html",
    "revision": "8847d8614366a08948e4e0d7f3fc294e"
  },
  {
    "url": "blog/life/index.html",
    "revision": "e555259feeb1df03e0288f28e55ab782"
  },
  {
    "url": "blog/life/jws/index.html",
    "revision": "f5b57ecebb8bda03921eb3717a91bab3"
  },
  {
    "url": "blog/life/keyboard/index.html",
    "revision": "975e576f7f710a757c0fdea4422c92fd"
  },
  {
    "url": "blog/life/lpi201/index.html",
    "revision": "a7b35be5cf61fc5cd8b4d7e52e4d3ace"
  },
  {
    "url": "blog/life/mashup/index.html",
    "revision": "02e0b7c093626131fc785e9019dec369"
  },
  {
    "url": "blog/life/motorweb/index.html",
    "revision": "39888df0976e0cb16892e2e4cfcfb060"
  },
  {
    "url": "blog/life/nxe/index.html",
    "revision": "12eb3d062903f1148cf22b0cdb5de332"
  },
  {
    "url": "blog/life/plates/index.html",
    "revision": "4c348077b072189c5594abd3f4e3ba4e"
  },
  {
    "url": "blog/life/queenstown/index.html",
    "revision": "550a1500ca7522f737c345f07858e87f"
  },
  {
    "url": "blog/life/racism/index.html",
    "revision": "05beef80a8932931a43544c31fdb5c0f"
  },
  {
    "url": "blog/life/roads/index.html",
    "revision": "a96826aa3ba4ca39cd31277b9c25cf25"
  },
  {
    "url": "blog/life/roots/index.html",
    "revision": "0dd5e8efe2b7b003590eeb860529c7d6"
  },
  {
    "url": "blog/life/scare/index.html",
    "revision": "3d767e64b9e0ad91398d629579b39cb1"
  },
  {
    "url": "blog/life/scary/index.html",
    "revision": "85a6b60db20da9bd43066b57c025fa6c"
  },
  {
    "url": "blog/life/seti/index.html",
    "revision": "7d139e5db16e55fc5d7c4a9d09f4ddac"
  },
  {
    "url": "blog/life/skeptical/index.html",
    "revision": "26b032376f89a59224d310c835345326"
  },
  {
    "url": "blog/life/skepticzone/index.html",
    "revision": "6fa584021025843960afd2632e6cb031"
  },
  {
    "url": "blog/life/spam/index.html",
    "revision": "890c32a7f0000e2f452f4f0b5753ee95"
  },
  {
    "url": "blog/life/ticking/index.html",
    "revision": "ed58d43318e1d3f2553654f4a8a7b4ea"
  },
  {
    "url": "blog/life/trademe/index.html",
    "revision": "1849b7cf19c005ae550f3bb6e0a4ee3e"
  },
  {
    "url": "blog/life/unforeseen/index.html",
    "revision": "ca6576cd0d5d727e324029b2a7e6dd91"
  },
  {
    "url": "blog/life/wobbly/index.html",
    "revision": "efc85678203ff10a4541df8c53dabadb"
  },
  {
    "url": "blog/projects/ahs/index.html",
    "revision": "bfded675656d64b832ebb63c6c1989f1"
  },
  {
    "url": "blog/projects/airbag/index.html",
    "revision": "fd1713a9e672bd6d357c4590896808b9"
  },
  {
    "url": "blog/projects/ambilight/index.html",
    "revision": "48601eb07c7b7528a4a6621c5e6cb732"
  },
  {
    "url": "blog/projects/automation/index.html",
    "revision": "c526cdde85cb12b470732462678bf84d"
  },
  {
    "url": "blog/projects/eyes/index.html",
    "revision": "276907f303505ba9874eb7015182eb09"
  },
  {
    "url": "blog/projects/glitch/index.html",
    "revision": "1b076ddc8fdf1eeaa37af0970e2e7e11"
  },
  {
    "url": "blog/projects/hotel/index.html",
    "revision": "a8dafeafb2364e8cd4a537372e1704d3"
  },
  {
    "url": "blog/projects/index.html",
    "revision": "27870bbd4bbe2c8321811821fa04f72a"
  },
  {
    "url": "blog/projects/it100/index.html",
    "revision": "371033296fec28d983c68224f248cb6b"
  },
  {
    "url": "blog/projects/microscope/index.html",
    "revision": "3651a3cef392a9e212b6bd5bba8e3059"
  },
  {
    "url": "blog/projects/mirror/index.html",
    "revision": "8b22f7a70a81567e633af5e35e1b9968"
  },
  {
    "url": "blog/projects/picture/index.html",
    "revision": "9acaaa75e86d71c1923801da023df249"
  },
  {
    "url": "blog/projects/pizza/index.html",
    "revision": "7792eced5a65dc58557b418d49827df2"
  },
  {
    "url": "blog/projects/podcast/index.html",
    "revision": "2db2267eef72d12e19b42249821e0ef8"
  },
  {
    "url": "blog/projects/reflow/index.html",
    "revision": "8b966d6730e36497c5c4975b71fd0da0"
  },
  {
    "url": "blog/projects/sandbox/index.html",
    "revision": "1ac5be7fea67ca349563e33907b869a2"
  },
  {
    "url": "blog/projects/screens/index.html",
    "revision": "76d1a7b9bb99ea0ce854078e197d87e9"
  },
  {
    "url": "blog/projects/sky/index.html",
    "revision": "05e7e71a85235213d294ad32cfe3b537"
  },
  {
    "url": "blog/projects/starwars/index.html",
    "revision": "70b35cf069f5c4e9a62125d43f8db6e3"
  },
  {
    "url": "blog/projects/xbox/index.html",
    "revision": "8eed9ec3cf25d27ce923327b8d5feb19"
  },
  {
    "url": "blog/random/addresses/index.html",
    "revision": "dce1e6ff0de5cd9bd75db9d5ec20ec69"
  },
  {
    "url": "blog/random/alphabet/index.html",
    "revision": "1f84b3cbd08b6338a6cbdb142b872e44"
  },
  {
    "url": "blog/random/alphabetise/index.html",
    "revision": "eeaa482cb85b385c864f9d1086f770b1"
  },
  {
    "url": "blog/random/astrology/index.html",
    "revision": "082ce2132faaa1e55552d0a827596371"
  },
  {
    "url": "blog/random/chicken/index.html",
    "revision": "6a17dc5a3ba5a3b359d1e113893035b2"
  },
  {
    "url": "blog/random/dns/index.html",
    "revision": "272b063f665df913c6714f62d1d6ae2a"
  },
  {
    "url": "blog/random/evp/index.html",
    "revision": "1cee1fb43767457dd8b212068695c058"
  },
  {
    "url": "blog/random/flip/index.html",
    "revision": "32d7a9020766e4984f578a890edf4d64"
  },
  {
    "url": "blog/random/honeychurch/index.html",
    "revision": "de52e9ac7cd188d1cebc357223fe2571"
  },
  {
    "url": "blog/random/index.html",
    "revision": "923698c0c4b30bbccd365448ac6a6c47"
  },
  {
    "url": "blog/random/lottery/index.html",
    "revision": "cdc5affa53f2c7280c7a22d5876a6ac6"
  },
  {
    "url": "blog/random/music/index.html",
    "revision": "05dd8d6e1813b0f1eb6cc9a4a334abbf"
  },
  {
    "url": "blog/random/octal/index.html",
    "revision": "b757699e97ba13557fdf3dc6ab553837"
  },
  {
    "url": "blog/random/os/index.html",
    "revision": "83fd25104652bc26fa06252dbb689b19"
  },
  {
    "url": "blog/random/propellers/index.html",
    "revision": "b5eac32912987563baf56da379ae8d79"
  },
  {
    "url": "blog/random/robux/index.html",
    "revision": "3486930962c5080a15521ba6a3462d05"
  },
  {
    "url": "blog/random/super/index.html",
    "revision": "baf627232d4c552eefb23038295c94d4"
  },
  {
    "url": "blog/random/times/index.html",
    "revision": "ebabf745a29bfaaddb07accb1d417d3c"
  },
  {
    "url": "blog/random/travel/index.html",
    "revision": "54f5d674650a1e8bb1285d4fbecf4497"
  },
  {
    "url": "blog/random/wilhelm/index.html",
    "revision": "664da646077e4bf92e3336c3b81d5b6e"
  },
  {
    "url": "blog/random/year/index.html",
    "revision": "26e6718069cac19989f1be4852be6543"
  },
  {
    "url": "blog/skepticism/2015/08/16/asa/index.html",
    "revision": "1c21259a4d751046a3651ed77d90ba7b"
  },
  {
    "url": "blog/skepticism/2015/08/16/awards/index.html",
    "revision": "8467e2a9d146e336c84b33192a5e8791"
  },
  {
    "url": "blog/skepticism/2015/08/16/bravo/index.html",
    "revision": "3d9d880c01239d53e876afbfe8ff4515"
  },
  {
    "url": "blog/skepticism/2015/08/16/index.html",
    "revision": "52e07499f85e73cdb607e31df54f1a1f"
  },
  {
    "url": "blog/skepticism/2015/08/16/jim/index.html",
    "revision": "5b1444439c9add11695784ae46992331"
  },
  {
    "url": "blog/skepticism/2015/08/16/naholo/index.html",
    "revision": "626ccae633326e0c4393fded7a919808"
  },
  {
    "url": "blog/skepticism/2015/08/16/resene/index.html",
    "revision": "e043a93fdc41f1aa8c793d1321c0a222"
  },
  {
    "url": "blog/skepticism/2015/08/index.html",
    "revision": "5a189f61817b68b4e6453e96f6f4579c"
  },
  {
    "url": "blog/skepticism/2015/09/20/gop/index.html",
    "revision": "1799d335b115bb8838f9039ed241bdb5"
  },
  {
    "url": "blog/skepticism/2015/09/20/ignobel/index.html",
    "revision": "e9303b6ec14abfe9087bc9a4f248b545"
  },
  {
    "url": "blog/skepticism/2015/09/20/index.html",
    "revision": "12056f3d155f45d9c0672c235e9ef2d1"
  },
  {
    "url": "blog/skepticism/2015/09/20/supplements/index.html",
    "revision": "3f7749fcf7b74ccc70c7c04a265391a2"
  },
  {
    "url": "blog/skepticism/2015/09/27/ayahuasca/index.html",
    "revision": "d914be312c7d5c51877a03e51d3fd349"
  },
  {
    "url": "blog/skepticism/2015/09/27/drought/index.html",
    "revision": "cf3c64c53c43a742854f420746c022ee"
  },
  {
    "url": "blog/skepticism/2015/09/27/index.html",
    "revision": "91ec8be8c0b4df55b7548ad15a541296"
  },
  {
    "url": "blog/skepticism/2015/09/27/lama/index.html",
    "revision": "c85bb68a33698726212fa2fe83d3a2b0"
  },
  {
    "url": "blog/skepticism/2015/09/27/moon/index.html",
    "revision": "5fb679b5ea02405222e29216cdf74ee7"
  },
  {
    "url": "blog/skepticism/2015/09/27/scan/index.html",
    "revision": "50ebe220606ad7644c4419028353dc53"
  },
  {
    "url": "blog/skepticism/2015/09/index.html",
    "revision": "1b1da17525dc426a49d14991e9b27d8e"
  },
  {
    "url": "blog/skepticism/2015/10/04/ghost/index.html",
    "revision": "d5dc43c9a559c402856d1ed11d86ad5a"
  },
  {
    "url": "blog/skepticism/2015/10/04/haka/index.html",
    "revision": "7f61578e266d99822dad77c79773d8d4"
  },
  {
    "url": "blog/skepticism/2015/10/04/index.html",
    "revision": "5a893167d05170f4bd15496e85ab5cc8"
  },
  {
    "url": "blog/skepticism/2015/10/04/mars/index.html",
    "revision": "8d68e4887e72ef0751c3997c7c1d8a96"
  },
  {
    "url": "blog/skepticism/2015/10/04/pharmacy/index.html",
    "revision": "a2e17cd88624de27e4d7e848204d50ad"
  },
  {
    "url": "blog/skepticism/2015/10/04/prostate/index.html",
    "revision": "4097c8950120c0f98747a850c2ec43bc"
  },
  {
    "url": "blog/skepticism/2015/10/11/armageddon/index.html",
    "revision": "fec8ec0398183f0b25e4f87b8db45460"
  },
  {
    "url": "blog/skepticism/2015/10/11/climate/index.html",
    "revision": "faa7020202f5ef7aad3abc7cf460c8dd"
  },
  {
    "url": "blog/skepticism/2015/10/11/ghost/index.html",
    "revision": "06f35ff56588abeb69e280f2d418a4e0"
  },
  {
    "url": "blog/skepticism/2015/10/11/index.html",
    "revision": "a99e443ad6b0efc77613e979dc841986"
  },
  {
    "url": "blog/skepticism/2015/10/11/magnesleep/index.html",
    "revision": "4ea29d02d68f7ba4644ec8fcc456bcb6"
  },
  {
    "url": "blog/skepticism/2015/10/11/nhs/index.html",
    "revision": "6aed4416aad684994e1aa3f6b838497b"
  },
  {
    "url": "blog/skepticism/2015/10/11/prophet/index.html",
    "revision": "aa718881244fa68c9f18bed03012cb33"
  },
  {
    "url": "blog/skepticism/2015/10/index.html",
    "revision": "64b958f550878b5df8b5e681f1533666"
  },
  {
    "url": "blog/skepticism/2015/11/15/end/index.html",
    "revision": "604e12bbef2df0d396fa02165262f97b"
  },
  {
    "url": "blog/skepticism/2015/11/15/index.html",
    "revision": "1f49e02b424021acc42d08e0cc2abda8"
  },
  {
    "url": "blog/skepticism/2015/11/index.html",
    "revision": "d6a7236519acd138f63fb4ad82d5f62a"
  },
  {
    "url": "blog/skepticism/2015/12/13/astrology/index.html",
    "revision": "b1b12aa6a625ed57d7afcc418c64406c"
  },
  {
    "url": "blog/skepticism/2015/12/13/cancer/index.html",
    "revision": "fcccd6058608abe7e98e8c734828e0d0"
  },
  {
    "url": "blog/skepticism/2015/12/13/chickenpox/index.html",
    "revision": "c4e07924c113e07c0d172fd5b2d6cd23"
  },
  {
    "url": "blog/skepticism/2015/12/13/index.html",
    "revision": "8dd3c73c8bccc7ddd970b4cd5e25b508"
  },
  {
    "url": "blog/skepticism/2015/12/13/osteopath/index.html",
    "revision": "af8ddb07974fe2c24a678a92992f9134"
  },
  {
    "url": "blog/skepticism/2015/12/13/priest/index.html",
    "revision": "ea5e87f1c79ffa3bc4a8857172549919"
  },
  {
    "url": "blog/skepticism/2015/12/13/psychic/index.html",
    "revision": "a0160c59f251768de0efdeca09b9aeea"
  },
  {
    "url": "blog/skepticism/2015/12/13/vaccines/index.html",
    "revision": "68fca6ea911b3a928625ccf51a27fe28"
  },
  {
    "url": "blog/skepticism/2015/12/index.html",
    "revision": "697e08f475809f7f9a9905d98f6293c0"
  },
  {
    "url": "blog/skepticism/2015/index.html",
    "revision": "c55eab8dbc644585c1f04822d2e96f94"
  },
  {
    "url": "blog/skepticism/2016/02/07/antioxidant/index.html",
    "revision": "9a5e7daa6148b98fc5a2d86f402359e0"
  },
  {
    "url": "blog/skepticism/2016/02/07/index.html",
    "revision": "6e97e7256dd832425ceeb23cf1a9bc8a"
  },
  {
    "url": "blog/skepticism/2016/02/07/kfc/index.html",
    "revision": "edd7bedcc6981bd0b50f29147dd6a50c"
  },
  {
    "url": "blog/skepticism/2016/02/07/ph/index.html",
    "revision": "82f41a55b196a61b0619ab40bce25b37"
  },
  {
    "url": "blog/skepticism/2016/02/07/sandy/index.html",
    "revision": "6dc0032c1187483076a36e1b77b466b4"
  },
  {
    "url": "blog/skepticism/2016/02/07/sarfati/index.html",
    "revision": "f6266d2fb78d5399993872f03a154397"
  },
  {
    "url": "blog/skepticism/2016/02/07/trump/index.html",
    "revision": "1b563bf309bbdc69772ed001b2ce1383"
  },
  {
    "url": "blog/skepticism/2016/02/14/coins/index.html",
    "revision": "a718f365f3b1daa9aa71582dd5736db2"
  },
  {
    "url": "blog/skepticism/2016/02/14/fast/index.html",
    "revision": "d27ad571f2292c84de80e1162992923e"
  },
  {
    "url": "blog/skepticism/2016/02/14/fluoride/index.html",
    "revision": "a6721dbc25e03d8a2fa0b0d8bd2c5f37"
  },
  {
    "url": "blog/skepticism/2016/02/14/icke/index.html",
    "revision": "40e05ff3205989da877348a82d5837e8"
  },
  {
    "url": "blog/skepticism/2016/02/14/index.html",
    "revision": "986a87fe0083f9e696f4adb3af340eb2"
  },
  {
    "url": "blog/skepticism/2016/02/14/yeti/index.html",
    "revision": "7a80307b90b560c8c5c03aee157c4064"
  },
  {
    "url": "blog/skepticism/2016/02/21/homeopathy/index.html",
    "revision": "915068cbfb933fb43efe6143325ae026"
  },
  {
    "url": "blog/skepticism/2016/02/21/index.html",
    "revision": "40660e54f5fca0b3382023216336d04d"
  },
  {
    "url": "blog/skepticism/2016/02/21/monster/index.html",
    "revision": "02a633cfa8f6a78a6aeb54f999dc6391"
  },
  {
    "url": "blog/skepticism/2016/02/21/scalia/index.html",
    "revision": "f755695f4b68384ce359772cb5bf56ca"
  },
  {
    "url": "blog/skepticism/2016/02/21/shane/index.html",
    "revision": "cc6e6a9a8713fecb71c0d95f52df6d14"
  },
  {
    "url": "blog/skepticism/2016/02/21/texas/index.html",
    "revision": "74c9a2885994a2d61726cdeec5f5c7bb"
  },
  {
    "url": "blog/skepticism/2016/02/28/acupuncture/index.html",
    "revision": "327d6e7f3bd68d7ff3499b3ea2bbf9ea"
  },
  {
    "url": "blog/skepticism/2016/02/28/fsm/index.html",
    "revision": "11e5c92378b7497f47bd65325b43b129"
  },
  {
    "url": "blog/skepticism/2016/02/28/index.html",
    "revision": "27de03cef9e1bd682f08cdf69bdc60f3"
  },
  {
    "url": "blog/skepticism/2016/02/28/iv/index.html",
    "revision": "bd9f881fcee1f03d45b1f32519e2260e"
  },
  {
    "url": "blog/skepticism/2016/02/28/natural/index.html",
    "revision": "f1f51bde7c5fee179cf25763b30d99c2"
  },
  {
    "url": "blog/skepticism/2016/02/28/talc/index.html",
    "revision": "10d032a403683f1a2d6bf8009c350bfb"
  },
  {
    "url": "blog/skepticism/2016/02/index.html",
    "revision": "51ce52680bf7fa044441b9bc1e987ea3"
  },
  {
    "url": "blog/skepticism/2016/03/13/herbs/index.html",
    "revision": "5b95bcf67848e0dbf0a348809b72c6bc"
  },
  {
    "url": "blog/skepticism/2016/03/13/index.html",
    "revision": "4353083ea1c642a8bcee54541bf3ea71"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandala/index.html",
    "revision": "f574ae13926060ccdb839805cbab023a"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandela/index.html",
    "revision": "832160a0b042d6f58c1a2add429008d2"
  },
  {
    "url": "blog/skepticism/2016/03/13/spray/index.html",
    "revision": "427ae8d9eac9af8b3bbcd4bdb94adebb"
  },
  {
    "url": "blog/skepticism/2016/03/index.html",
    "revision": "c9a1cc80298ce173df7f7f252ed346b8"
  },
  {
    "url": "blog/skepticism/2016/04/17/charity/index.html",
    "revision": "0782f1e941cc78ed1f15a8e03d7989c0"
  },
  {
    "url": "blog/skepticism/2016/04/17/chiro/index.html",
    "revision": "da9a7e0ea07f02fefab2e0315f797184"
  },
  {
    "url": "blog/skepticism/2016/04/17/fluoride/index.html",
    "revision": "e6824aece56cf5d8102487577bc659ac"
  },
  {
    "url": "blog/skepticism/2016/04/17/index.html",
    "revision": "f51c74f4cd38af4fd065c7d7aae6643c"
  },
  {
    "url": "blog/skepticism/2016/04/17/lotto/index.html",
    "revision": "5ac133257bc2b809aad708a17817b0e2"
  },
  {
    "url": "blog/skepticism/2016/04/17/mind/index.html",
    "revision": "cc37de698e5110fcb2f20a2cb6aa867a"
  },
  {
    "url": "blog/skepticism/2016/04/17/whooping/index.html",
    "revision": "65eb1d1a0ebdbf57ca911edbeacd7940"
  },
  {
    "url": "blog/skepticism/2016/04/index.html",
    "revision": "3f95c1fbe2da142bc891fed8bf6af363"
  },
  {
    "url": "blog/skepticism/2016/06/05/1080/index.html",
    "revision": "e186e39b839679313743bdd743779283"
  },
  {
    "url": "blog/skepticism/2016/06/05/acupuncture/index.html",
    "revision": "136912b2fdd044ede532ab519449789e"
  },
  {
    "url": "blog/skepticism/2016/06/05/family/index.html",
    "revision": "b2e814923971465d851df7d13e29f512"
  },
  {
    "url": "blog/skepticism/2016/06/05/index.html",
    "revision": "c2e10701ea0eeaa21cf95e813adfa16a"
  },
  {
    "url": "blog/skepticism/2016/06/05/limbaugh/index.html",
    "revision": "89f3391c06c26accfe6c731671a172ca"
  },
  {
    "url": "blog/skepticism/2016/06/12/bobby/index.html",
    "revision": "fb3874d1c21e47795e0eef8e41c1bc9c"
  },
  {
    "url": "blog/skepticism/2016/06/12/climate/index.html",
    "revision": "9845af95f0747df379dd760f423060e1"
  },
  {
    "url": "blog/skepticism/2016/06/12/index.html",
    "revision": "55a43f3d711f28edf046811b0609adf8"
  },
  {
    "url": "blog/skepticism/2016/06/12/pugh/index.html",
    "revision": "b55c1cf775d713ecd67266c0a5424a23"
  },
  {
    "url": "blog/skepticism/2016/06/12/savage/index.html",
    "revision": "8d91b7e9699a4446034b53d637b09edb"
  },
  {
    "url": "blog/skepticism/2016/06/12/sawdust/index.html",
    "revision": "fdd3c29b725b85300ea122cc73e96747"
  },
  {
    "url": "blog/skepticism/2016/06/19/beauty/index.html",
    "revision": "c8ca06af7ecfa4ea657801b061263bfc"
  },
  {
    "url": "blog/skepticism/2016/06/19/bilderberg/index.html",
    "revision": "d5eb3bcdc73711afe95ad39408db0576"
  },
  {
    "url": "blog/skepticism/2016/06/19/cyf/index.html",
    "revision": "8bd3dd23d70fd36cc06ef48e1c8dd074"
  },
  {
    "url": "blog/skepticism/2016/06/19/holt/index.html",
    "revision": "1d2353a032257e95ef7969fdad85a80b"
  },
  {
    "url": "blog/skepticism/2016/06/19/index.html",
    "revision": "733bc5c5d8c98155163bd3d31b233e0e"
  },
  {
    "url": "blog/skepticism/2016/06/19/silver/index.html",
    "revision": "67beba50adc5dc90601387f65ccb4092"
  },
  {
    "url": "blog/skepticism/2016/06/19/ufo/index.html",
    "revision": "75a33019c13cc353a74db2c2cc610e33"
  },
  {
    "url": "blog/skepticism/2016/06/26/homeopathy/index.html",
    "revision": "b1eb61d68ab449c8ca0197f777446e97"
  },
  {
    "url": "blog/skepticism/2016/06/26/index.html",
    "revision": "0f5f6ec7d087b4407160bb94893d0ff4"
  },
  {
    "url": "blog/skepticism/2016/06/26/robbins/index.html",
    "revision": "bcde808a780e59b639dcfb48da2fb785"
  },
  {
    "url": "blog/skepticism/2016/06/26/selfies/index.html",
    "revision": "300a8f774b0b090d70a6ad2d9c85c746"
  },
  {
    "url": "blog/skepticism/2016/06/26/silver/index.html",
    "revision": "bf1b993d353e2beb50259cf62dbc3dcd"
  },
  {
    "url": "blog/skepticism/2016/06/26/ufos/index.html",
    "revision": "ba1b9479aae4e8c715359206bf8701b5"
  },
  {
    "url": "blog/skepticism/2016/06/index.html",
    "revision": "213c8c1432d3a6417ac36800cceaddb8"
  },
  {
    "url": "blog/skepticism/2016/07/03/glyphosate/index.html",
    "revision": "2621a6c4035afae1a911b20de3de3955"
  },
  {
    "url": "blog/skepticism/2016/07/03/gmo/index.html",
    "revision": "421eb81867dfd7ad3023a8e16d8e55bb"
  },
  {
    "url": "blog/skepticism/2016/07/03/index.html",
    "revision": "ab12f7e59be674828b11537a945fc61d"
  },
  {
    "url": "blog/skepticism/2016/07/03/jail/index.html",
    "revision": "6513416b805a728d944cd395260e0b4b"
  },
  {
    "url": "blog/skepticism/2016/07/03/ken/index.html",
    "revision": "ea70fc3cd6761167511d4d2f15194ecc"
  },
  {
    "url": "blog/skepticism/2016/07/10/ark/index.html",
    "revision": "2d50fc85a37e637ade9b09d6c98986a3"
  },
  {
    "url": "blog/skepticism/2016/07/10/bee/index.html",
    "revision": "adca6f93abb1cca141eb08517d8b6298"
  },
  {
    "url": "blog/skepticism/2016/07/10/index.html",
    "revision": "29cfa594756deac850676228fe37c5e0"
  },
  {
    "url": "blog/skepticism/2016/07/10/lottery/index.html",
    "revision": "d059f04c03871aae10b8d076d8549c77"
  },
  {
    "url": "blog/skepticism/2016/07/10/murder/index.html",
    "revision": "bd4cf53c310b649b7db7bcc2595517a2"
  },
  {
    "url": "blog/skepticism/2016/07/17/dogs/index.html",
    "revision": "75e2b6c0da21ed27a39f1eaac5c75aef"
  },
  {
    "url": "blog/skepticism/2016/07/17/fsm/index.html",
    "revision": "8343a8ddcea42909cf3ecd6849ff2ff1"
  },
  {
    "url": "blog/skepticism/2016/07/17/fyi/index.html",
    "revision": "aa3d7b9935a7bfc41f48405194a553d3"
  },
  {
    "url": "blog/skepticism/2016/07/17/index.html",
    "revision": "26c2e242718f260eb43b8de5256bed92"
  },
  {
    "url": "blog/skepticism/2016/07/17/natural/index.html",
    "revision": "31097558a0810999b8d79188f455f7c6"
  },
  {
    "url": "blog/skepticism/2016/07/17/pokemon/index.html",
    "revision": "1d17711209986f032d7803709e5ac957"
  },
  {
    "url": "blog/skepticism/2016/07/index.html",
    "revision": "5b26efcb152e79105927f9b908b0b7ff"
  },
  {
    "url": "blog/skepticism/2016/08/07/icke/index.html",
    "revision": "d3a2c455213dd6db22b1eb6077b01dc1"
  },
  {
    "url": "blog/skepticism/2016/08/07/index.html",
    "revision": "c4c6ce1132ae70c7424c8c80fef3729f"
  },
  {
    "url": "blog/skepticism/2016/08/21/brian/index.html",
    "revision": "7ff7d602697fe3c6d1e83ee42936f2d2"
  },
  {
    "url": "blog/skepticism/2016/08/21/chlorine/index.html",
    "revision": "758883131860be20c49501785619c961"
  },
  {
    "url": "blog/skepticism/2016/08/21/index.html",
    "revision": "a4201fff3600b10c76bf7d3f03326b5b"
  },
  {
    "url": "blog/skepticism/2016/08/21/murder/index.html",
    "revision": "dbce54eaa38940bf2049a5769d2652d1"
  },
  {
    "url": "blog/skepticism/2016/08/21/superfoods/index.html",
    "revision": "a1a7bddde49f2dbb837709cb30818b04"
  },
  {
    "url": "blog/skepticism/2016/08/21/witch/index.html",
    "revision": "b549c76bc4dfb98810ac6ec8a36a0a9a"
  },
  {
    "url": "blog/skepticism/2016/08/28/alcohol/index.html",
    "revision": "1526ee5de22c4aca5bdfc8b4508f2b1a"
  },
  {
    "url": "blog/skepticism/2016/08/28/chiro/index.html",
    "revision": "94b4114ebd7e5cbd55cb1d5f33742392"
  },
  {
    "url": "blog/skepticism/2016/08/28/index.html",
    "revision": "f0ca5a2446bd53f896bf7934a5a4bf16"
  },
  {
    "url": "blog/skepticism/2016/08/28/processed/index.html",
    "revision": "85f7b0939c05f1339d28906b7dc06abb"
  },
  {
    "url": "blog/skepticism/2016/08/28/sbh/index.html",
    "revision": "14b1582502e1abd44d262cf2401711e9"
  },
  {
    "url": "blog/skepticism/2016/08/index.html",
    "revision": "d568f57b39def375497f9cd4acc40259"
  },
  {
    "url": "blog/skepticism/2016/09/18/altruism/index.html",
    "revision": "d15cce42d8f61e2ad40d1210a0f6ce8c"
  },
  {
    "url": "blog/skepticism/2016/09/18/better/index.html",
    "revision": "7d5248c40ecf4e3d0cdbeaeb98a25cfc"
  },
  {
    "url": "blog/skepticism/2016/09/18/homeopathy/index.html",
    "revision": "d80234f8761ee04e053567b0a0468db9"
  },
  {
    "url": "blog/skepticism/2016/09/18/index.html",
    "revision": "ef8371ab814e86bb09806d169a8c534f"
  },
  {
    "url": "blog/skepticism/2016/09/18/nonsense/index.html",
    "revision": "68baffafd149b5c55a0af8820ceec162"
  },
  {
    "url": "blog/skepticism/2016/09/18/trump/index.html",
    "revision": "a3ed6218b5540006f6474d9057e3911a"
  },
  {
    "url": "blog/skepticism/2016/09/25/clinic/index.html",
    "revision": "1a783765a4386cead1332f07f68832e0"
  },
  {
    "url": "blog/skepticism/2016/09/25/fluoride/index.html",
    "revision": "1658105351807eddd07c528fcdbcd3f3"
  },
  {
    "url": "blog/skepticism/2016/09/25/homeopathy/index.html",
    "revision": "41a47461470bd64da523f67d3f17604d"
  },
  {
    "url": "blog/skepticism/2016/09/25/index.html",
    "revision": "35c170a52bd6bf5afd83b1b0bf453387"
  },
  {
    "url": "blog/skepticism/2016/09/25/murder/index.html",
    "revision": "a6ae8904bdc1c40b13423a4a50a5f0d1"
  },
  {
    "url": "blog/skepticism/2016/09/index.html",
    "revision": "08727a18aa0d6f4856b6d8763b8ad0c6"
  },
  {
    "url": "blog/skepticism/2016/10/21/bigfoot/index.html",
    "revision": "2455ab3f4d3cb8c64004ce8683f62193"
  },
  {
    "url": "blog/skepticism/2016/10/21/breasts/index.html",
    "revision": "a0eefdc3a680d988f2750300baa03773"
  },
  {
    "url": "blog/skepticism/2016/10/21/index.html",
    "revision": "bee65d9bd7ac2c43262040224e8df168"
  },
  {
    "url": "blog/skepticism/2016/10/21/medsafe/index.html",
    "revision": "89359cfba700d200afac4039f617523a"
  },
  {
    "url": "blog/skepticism/2016/10/21/zenteq/index.html",
    "revision": "c4e8f78f1968a18542c8a2f292c50ff0"
  },
  {
    "url": "blog/skepticism/2016/10/index.html",
    "revision": "565d5cda4b31034a66f0585305bc1075"
  },
  {
    "url": "blog/skepticism/2016/11/13/conference/index.html",
    "revision": "5bdc1f2d491fb06e0380702f56f22652"
  },
  {
    "url": "blog/skepticism/2016/11/13/green/index.html",
    "revision": "b3ff4716952d302b8ead241026dda82e"
  },
  {
    "url": "blog/skepticism/2016/11/13/index.html",
    "revision": "375d1882eeacbece308133c4acb1bf37"
  },
  {
    "url": "blog/skepticism/2016/11/13/vice/index.html",
    "revision": "8da229ae72977404725eaff8652884ff"
  },
  {
    "url": "blog/skepticism/2016/11/27/bioptron/index.html",
    "revision": "2b123e705c48e43a6725cd6a01f2898e"
  },
  {
    "url": "blog/skepticism/2016/11/27/conference/index.html",
    "revision": "37fecf7af6a388107b963c47459d1a19"
  },
  {
    "url": "blog/skepticism/2016/11/27/earthquake/index.html",
    "revision": "b1f83bf79f89691aad8ca16ba64e8012"
  },
  {
    "url": "blog/skepticism/2016/11/27/index.html",
    "revision": "1f0314491548bf591a5d6ff55197e734"
  },
  {
    "url": "blog/skepticism/2016/11/index.html",
    "revision": "84d1d1622d8eef65a7fdee4414e8ab14"
  },
  {
    "url": "blog/skepticism/2016/12/04/conference/index.html",
    "revision": "facc28e2ac5c81aa9fff6d63a23ac793"
  },
  {
    "url": "blog/skepticism/2016/12/04/index.html",
    "revision": "b29fb967ef28aa40fe0e33a72eb739d4"
  },
  {
    "url": "blog/skepticism/2016/12/18/colin/index.html",
    "revision": "f822fb4afbfd578e4e69fcb45d1389a4"
  },
  {
    "url": "blog/skepticism/2016/12/18/fiji/index.html",
    "revision": "6f2df2110a58b8993868362b2bbee28a"
  },
  {
    "url": "blog/skepticism/2016/12/18/index.html",
    "revision": "95b5d34887590e19157e56cd76f43644"
  },
  {
    "url": "blog/skepticism/2016/12/18/kinesiology/index.html",
    "revision": "9f96b833b2b5a5bb315a3670c6e60656"
  },
  {
    "url": "blog/skepticism/2016/12/18/mmm/index.html",
    "revision": "0832c25e592401cd300d70025c2b0dc0"
  },
  {
    "url": "blog/skepticism/2016/12/18/nigel/index.html",
    "revision": "d3178908e0cf5eee0320ff4709da1c08"
  },
  {
    "url": "blog/skepticism/2016/12/index.html",
    "revision": "05fd27679b02a3ea88497c4cb0a8ff9a"
  },
  {
    "url": "blog/skepticism/2016/index.html",
    "revision": "5dcc5374dcea8ea7985c4e6e744a1150"
  },
  {
    "url": "blog/skepticism/2017/01/22/index.html",
    "revision": "b6951d6b3f30dc6967c780748688adac"
  },
  {
    "url": "blog/skepticism/2017/01/22/scientology/index.html",
    "revision": "570aecfb3d300e3ba1c7c9b00cc4c7b8"
  },
  {
    "url": "blog/skepticism/2017/01/29/creation/index.html",
    "revision": "fb6318a94c7c5d116c2333f0005ff451"
  },
  {
    "url": "blog/skepticism/2017/01/29/index.html",
    "revision": "9b6e065a30fa6b844d8b93dee977af53"
  },
  {
    "url": "blog/skepticism/2017/01/index.html",
    "revision": "f291378ff17807268c603c47b1bdc477"
  },
  {
    "url": "blog/skepticism/2017/02/05/fraudster/index.html",
    "revision": "58df305ec3dbd48c7c57abbc847f903d"
  },
  {
    "url": "blog/skepticism/2017/02/05/gervais/index.html",
    "revision": "abc7b8be7b71bb3a4f44d5c73ce1b3d3"
  },
  {
    "url": "blog/skepticism/2017/02/05/index.html",
    "revision": "4556b12ffed3ac2232379e22137c10e6"
  },
  {
    "url": "blog/skepticism/2017/02/05/scientology/index.html",
    "revision": "9e511c72dac3bb439dc960b7109c8a06"
  },
  {
    "url": "blog/skepticism/2017/02/19/homeopathy/index.html",
    "revision": "caccf5e9eb30ca5a7dd098d3d93b4c07"
  },
  {
    "url": "blog/skepticism/2017/02/19/index.html",
    "revision": "a55f4fe845fdc988fdac9028db0871d2"
  },
  {
    "url": "blog/skepticism/2017/02/19/lottery/index.html",
    "revision": "988326c9e5e6db9c2af02af916c844ad"
  },
  {
    "url": "blog/skepticism/2017/02/19/vaxxed/index.html",
    "revision": "e529b14bc3b23626a9fdc643a7d8c247"
  },
  {
    "url": "blog/skepticism/2017/02/19/whales/index.html",
    "revision": "79f845ff01f741b80e8e7ce3f0a9195f"
  },
  {
    "url": "blog/skepticism/2017/02/index.html",
    "revision": "823ed451f894417aa7d14cf06dec534c"
  },
  {
    "url": "blog/skepticism/2017/03/05/index.html",
    "revision": "1af2375f3ee6def5d221577747c19456"
  },
  {
    "url": "blog/skepticism/2017/03/05/rea/index.html",
    "revision": "0396340688132dce6938880b923fc07c"
  },
  {
    "url": "blog/skepticism/2017/03/19/fake/index.html",
    "revision": "513fbb401bd4ea5698d1044045a5df94"
  },
  {
    "url": "blog/skepticism/2017/03/19/index.html",
    "revision": "5dcefb2a341b3310b85ce591cbee6e0f"
  },
  {
    "url": "blog/skepticism/2017/03/19/murder/index.html",
    "revision": "1c499aa4f229b0719b728299de9e59b8"
  },
  {
    "url": "blog/skepticism/2017/03/26/census/index.html",
    "revision": "2a85ba0c2bc7c74c2321ae90da8cd69c"
  },
  {
    "url": "blog/skepticism/2017/03/26/index.html",
    "revision": "13028c5c65750a36afb6908178cb5422"
  },
  {
    "url": "blog/skepticism/2017/03/26/nzmj/index.html",
    "revision": "0d5b44b113d1ee136437fbfe61983451"
  },
  {
    "url": "blog/skepticism/2017/03/26/shaquille/index.html",
    "revision": "a40d16141de723382357c5b6b44dec35"
  },
  {
    "url": "blog/skepticism/2017/03/index.html",
    "revision": "95a4fb9754ba64e1e4b80b4bddc6a4e7"
  },
  {
    "url": "blog/skepticism/2017/04/02/index.html",
    "revision": "3750f86982d5049f4f5ee9d5bc22bab8"
  },
  {
    "url": "blog/skepticism/2017/04/02/nasa/index.html",
    "revision": "46bf4134a8b7298e95e8395d1ed0a411"
  },
  {
    "url": "blog/skepticism/2017/04/02/science/index.html",
    "revision": "8a15c26e9e40e1ae55123eec7e1780a8"
  },
  {
    "url": "blog/skepticism/2017/04/02/vaxxed/index.html",
    "revision": "4f18512ff544525020c5b999461c8bb6"
  },
  {
    "url": "blog/skepticism/2017/04/09/index.html",
    "revision": "fe4d03ca6bf9ed8ca75a90792f72291a"
  },
  {
    "url": "blog/skepticism/2017/04/09/tekiri/index.html",
    "revision": "ba8069b4d4ef2aaa2826f8bd73af74b7"
  },
  {
    "url": "blog/skepticism/2017/04/09/vaxxed/index.html",
    "revision": "437371406da9ec7e7a3013df5b7ce6ec"
  },
  {
    "url": "blog/skepticism/2017/04/23/arise/index.html",
    "revision": "3158aea94eb49529515753841eab4963"
  },
  {
    "url": "blog/skepticism/2017/04/23/index.html",
    "revision": "5eb81aad8927863dcf0c3ed68597b42d"
  },
  {
    "url": "blog/skepticism/2017/04/23/kelvin/index.html",
    "revision": "05407b7e23c993a4d2d06ee2ecd2efda"
  },
  {
    "url": "blog/skepticism/2017/04/index.html",
    "revision": "bcb5fb1414a7e771990ff5e6e40cc5a8"
  },
  {
    "url": "blog/skepticism/2017/05/07/cancer/index.html",
    "revision": "69aa6571d0d7c810401ddcaef6aa3548"
  },
  {
    "url": "blog/skepticism/2017/05/07/index.html",
    "revision": "47920b546f303cf1d4a5215137c294fc"
  },
  {
    "url": "blog/skepticism/2017/05/07/nigel/index.html",
    "revision": "5b3084edaf592b5294a8b205633f1341"
  },
  {
    "url": "blog/skepticism/2017/05/21/blasphemy/index.html",
    "revision": "f0ad3f790cd7717f477a265dc393a76f"
  },
  {
    "url": "blog/skepticism/2017/05/21/flat/index.html",
    "revision": "e07b602de46fa0ca1be2e39a2bedf10b"
  },
  {
    "url": "blog/skepticism/2017/05/21/index.html",
    "revision": "4a097ee7e00d6a5e1de5dcc0c37a63f2"
  },
  {
    "url": "blog/skepticism/2017/05/21/maori/index.html",
    "revision": "958f8c2ebb578d7f9b1960a6dae56b13"
  },
  {
    "url": "blog/skepticism/2017/05/index.html",
    "revision": "4e5e69eecfcf6c59e3f2989043156056"
  },
  {
    "url": "blog/skepticism/2017/06/04/bigelow/index.html",
    "revision": "9343b6ecc7a4bf9b4fe978d7fcb39788"
  },
  {
    "url": "blog/skepticism/2017/06/04/climate/index.html",
    "revision": "650de24863b4ad566a6642e357dbd645"
  },
  {
    "url": "blog/skepticism/2017/06/04/hansford/index.html",
    "revision": "88e9489cf6c98e5b8d4eed282683dac5"
  },
  {
    "url": "blog/skepticism/2017/06/04/index.html",
    "revision": "5ef21997380e70c9dda6d5c1158f5f13"
  },
  {
    "url": "blog/skepticism/2017/06/04/wasp/index.html",
    "revision": "d3f1673a505eab2ea6c81b591065d5be"
  },
  {
    "url": "blog/skepticism/2017/06/11/colonic/index.html",
    "revision": "aa3e53b0b07c63320e2662bf2dcefaf7"
  },
  {
    "url": "blog/skepticism/2017/06/11/credulous/index.html",
    "revision": "d095c0c1333ee2cda137c482944e97f1"
  },
  {
    "url": "blog/skepticism/2017/06/11/index.html",
    "revision": "34ca773b3636c20620f1143005315fd8"
  },
  {
    "url": "blog/skepticism/2017/06/11/journals/index.html",
    "revision": "b7349b5662e541b091e0582112a49aea"
  },
  {
    "url": "blog/skepticism/2017/06/18/breatharians/index.html",
    "revision": "8c3f7f80cdcd07cf49e5924254bc1835"
  },
  {
    "url": "blog/skepticism/2017/06/18/fieldays/index.html",
    "revision": "fb17400ed0621443f3d11fb4dfcd6ff2"
  },
  {
    "url": "blog/skepticism/2017/06/18/index.html",
    "revision": "5844bc68b88f4578f8836a84053c8dc3"
  },
  {
    "url": "blog/skepticism/2017/06/18/jw/index.html",
    "revision": "475192c8552f9f14ca05353d91fccb83"
  },
  {
    "url": "blog/skepticism/2017/06/18/oil/index.html",
    "revision": "8d15991982cfab8f028c864f2cb08693"
  },
  {
    "url": "blog/skepticism/2017/06/index.html",
    "revision": "0731ef6a56cc3fefe86b52b9c5e3681b"
  },
  {
    "url": "blog/skepticism/2017/07/02/baby/index.html",
    "revision": "5e53d062b0836556bb9fadd339e5e3b9"
  },
  {
    "url": "blog/skepticism/2017/07/02/index.html",
    "revision": "a519983c2b5d898664d6602ba2eddeb6"
  },
  {
    "url": "blog/skepticism/2017/07/02/infowars/index.html",
    "revision": "09ecae51323b67b49f6b4f36fb3b14bb"
  },
  {
    "url": "blog/skepticism/2017/07/02/scientology/index.html",
    "revision": "b33131a8290af28bf092d89dab250ef3"
  },
  {
    "url": "blog/skepticism/2017/07/16/bananas/index.html",
    "revision": "db95ed1379453bae5ffc8a0d2e2b9f22"
  },
  {
    "url": "blog/skepticism/2017/07/16/circles/index.html",
    "revision": "7673d5ff75d972d66237bdc0e12332df"
  },
  {
    "url": "blog/skepticism/2017/07/16/index.html",
    "revision": "8f083d748af84f7c444c239797c459a3"
  },
  {
    "url": "blog/skepticism/2017/07/16/siggi/index.html",
    "revision": "c0fc062e1ef672db45f5deab9aba74cc"
  },
  {
    "url": "blog/skepticism/2017/07/16/vaxxed/index.html",
    "revision": "49a6b5d317bf932eeda4f5f62ece026b"
  },
  {
    "url": "blog/skepticism/2017/07/30/bleach/index.html",
    "revision": "3a9b32c317ce5e4dba00adb68df02cb1"
  },
  {
    "url": "blog/skepticism/2017/07/30/bluebeam/index.html",
    "revision": "8ce6274783b4b8547dade0f7b1e0a85f"
  },
  {
    "url": "blog/skepticism/2017/07/30/index.html",
    "revision": "83fd0e534993b40ffaa9b8f473bc6f26"
  },
  {
    "url": "blog/skepticism/2017/07/30/police/index.html",
    "revision": "cb0d416f436b15cabab5e1b98eb56203"
  },
  {
    "url": "blog/skepticism/2017/07/index.html",
    "revision": "ab51fc096e88a0daf586f8d74ba12b45"
  },
  {
    "url": "blog/skepticism/2017/08/06/conned/index.html",
    "revision": "33b8b7fd1b850cd0d32745a7e937a882"
  },
  {
    "url": "blog/skepticism/2017/08/06/doll/index.html",
    "revision": "64e36264123f26d2a5fe58c79e1f40fd"
  },
  {
    "url": "blog/skepticism/2017/08/06/index.html",
    "revision": "8d5ab16f5aeef78a674347fc2bedd7c8"
  },
  {
    "url": "blog/skepticism/2017/08/06/jacinda/index.html",
    "revision": "ec393bc2a7942b3734fe37c229dc0434"
  },
  {
    "url": "blog/skepticism/2017/08/06/lotto/index.html",
    "revision": "802785394e61357d8feb19bb3bb98213"
  },
  {
    "url": "blog/skepticism/2017/08/27/index.html",
    "revision": "87a9c53cf1f5754c32049d9388d4abc2"
  },
  {
    "url": "blog/skepticism/2017/08/27/naturopath/index.html",
    "revision": "0b8c2355f66dc5c355048738c2f5a9e0"
  },
  {
    "url": "blog/skepticism/2017/08/27/satanic/index.html",
    "revision": "5fc14b6c0a3f5060c39e9b0af53b21be"
  },
  {
    "url": "blog/skepticism/2017/08/index.html",
    "revision": "8856a5d94ae39300db5e457283390577"
  },
  {
    "url": "blog/skepticism/2017/09/03/apocalypse/index.html",
    "revision": "fe44403268fbb39df6d2e33e548a472a"
  },
  {
    "url": "blog/skepticism/2017/09/03/cancer/index.html",
    "revision": "64e45a724e44eed7fd0461912dc4d21c"
  },
  {
    "url": "blog/skepticism/2017/09/03/index.html",
    "revision": "838ebe0655cadd7cfd7f7e1492524ea0"
  },
  {
    "url": "blog/skepticism/2017/09/03/rectangle/index.html",
    "revision": "c3fdc2591ee4321dab2870dc3cb947b1"
  },
  {
    "url": "blog/skepticism/2017/09/03/stargate/index.html",
    "revision": "2f6cf63b0e4883da6b407aecff5ce012"
  },
  {
    "url": "blog/skepticism/2017/09/index.html",
    "revision": "644bd86dea9221dfdb47924b7f1f1ded"
  },
  {
    "url": "blog/skepticism/2017/10/01/apocalypse/index.html",
    "revision": "599da1fbad677873f67746cd117f0130"
  },
  {
    "url": "blog/skepticism/2017/10/01/freeman/index.html",
    "revision": "e8df13079442efbbcc334877e8544817"
  },
  {
    "url": "blog/skepticism/2017/10/01/index.html",
    "revision": "057541148c687304079c974d8b3cb800"
  },
  {
    "url": "blog/skepticism/2017/10/01/pharmacy/index.html",
    "revision": "d99d0c4898c907f687f99cabba129d0a"
  },
  {
    "url": "blog/skepticism/2017/10/08/index.html",
    "revision": "48cace2c7ee06c2bce0dd22ca9841c7d"
  },
  {
    "url": "blog/skepticism/2017/10/08/pill/index.html",
    "revision": "5f7d28d8474ac588ac408c700bac605c"
  },
  {
    "url": "blog/skepticism/2017/10/08/qsb/index.html",
    "revision": "760991fd1d1281e6c90fb16fe6ad6a20"
  },
  {
    "url": "blog/skepticism/2017/10/08/vegas/index.html",
    "revision": "01956475563eed24de58374a9e5b3370"
  },
  {
    "url": "blog/skepticism/2017/10/15/doterra/index.html",
    "revision": "067ee81a23773bc6039451469e4e5bd5"
  },
  {
    "url": "blog/skepticism/2017/10/15/index.html",
    "revision": "97deb35c6d4c1b53bf056d9c02ebd833"
  },
  {
    "url": "blog/skepticism/2017/10/15/lie/index.html",
    "revision": "dc6bc8d7a5a47add2f1d7d6e9cf0ee2a"
  },
  {
    "url": "blog/skepticism/2017/10/15/soap/index.html",
    "revision": "479b358851c880ceb6c4af1a788f327e"
  },
  {
    "url": "blog/skepticism/2017/10/index.html",
    "revision": "3fc2199faeeea6df99976d8d260f8852"
  },
  {
    "url": "blog/skepticism/2017/11/05/conference/index.html",
    "revision": "cd470937cb9e388e2128a99576f91760"
  },
  {
    "url": "blog/skepticism/2017/11/05/glyphosate/index.html",
    "revision": "0f3c018043d2bf7779d135abc90d2d29"
  },
  {
    "url": "blog/skepticism/2017/11/05/index.html",
    "revision": "24724ea2901518560298ab078766bc45"
  },
  {
    "url": "blog/skepticism/2017/11/05/stranded/index.html",
    "revision": "3ae999b6c4d449a5ca1572fa5e9d0fe2"
  },
  {
    "url": "blog/skepticism/2017/11/05/tracts/index.html",
    "revision": "29810d7303506f4ec86144b54eea571d"
  },
  {
    "url": "blog/skepticism/2017/11/12/ghost/index.html",
    "revision": "cd2cfd377a01f4a3ba7a6d701b437dbf"
  },
  {
    "url": "blog/skepticism/2017/11/12/green/index.html",
    "revision": "e308f485025f058cb79665dd1bd0ea1d"
  },
  {
    "url": "blog/skepticism/2017/11/12/harassment/index.html",
    "revision": "78844c6c7641d719ca11fdfc565a4611"
  },
  {
    "url": "blog/skepticism/2017/11/12/index.html",
    "revision": "f9b2dc66743a1f37e5006ad3c16b04b3"
  },
  {
    "url": "blog/skepticism/2017/11/12/libby/index.html",
    "revision": "63cb0455eb8c4d7c39ad855322009564"
  },
  {
    "url": "blog/skepticism/2017/11/index.html",
    "revision": "fbb5fac2a12040bbaa1b09075124f803"
  },
  {
    "url": "blog/skepticism/2017/12/03/acupuncture/index.html",
    "revision": "03785198601e33ee3811560baaa089fb"
  },
  {
    "url": "blog/skepticism/2017/12/03/denialism/index.html",
    "revision": "0035ae8f0741ec1bc36bcf3900b3a5f1"
  },
  {
    "url": "blog/skepticism/2017/12/03/dowsing/index.html",
    "revision": "d822fdc33550b9c50cf8a6cf102d270e"
  },
  {
    "url": "blog/skepticism/2017/12/03/holes/index.html",
    "revision": "e119717385040ba71b922d05b0d1eeca"
  },
  {
    "url": "blog/skepticism/2017/12/03/index.html",
    "revision": "3517148d456d6da65485bbba2ff80422"
  },
  {
    "url": "blog/skepticism/2017/12/17/index.html",
    "revision": "337646ddc47aca4f8b7929786a611c1c"
  },
  {
    "url": "blog/skepticism/2017/12/17/nhs/index.html",
    "revision": "2e145a6c36ab16c1bec60fb445fdcd6e"
  },
  {
    "url": "blog/skepticism/2017/12/17/oto/index.html",
    "revision": "ab560b28501a28b1e4e1ac142b18d60b"
  },
  {
    "url": "blog/skepticism/2017/12/17/pastafarian/index.html",
    "revision": "b311e7e91ab1bdbb138f2e5507cbe830"
  },
  {
    "url": "blog/skepticism/2017/12/17/shc/index.html",
    "revision": "515df7ddf64e94934fb75d1a04ee4971"
  },
  {
    "url": "blog/skepticism/2017/12/17/wellworks/index.html",
    "revision": "abcc82f34cc41981629e4bde0fd33fb4"
  },
  {
    "url": "blog/skepticism/2017/12/index.html",
    "revision": "b5754b26cd2028b3c28396a28bc8d658"
  },
  {
    "url": "blog/skepticism/2017/index.html",
    "revision": "b757885847429bd5bf840bd87a0d7844"
  },
  {
    "url": "blog/skepticism/2018/01/21/grounding/index.html",
    "revision": "b173dcc5c3fe54c1060773430230fa69"
  },
  {
    "url": "blog/skepticism/2018/01/21/index.html",
    "revision": "5ec383aa03d979bbb4dfeb416912533c"
  },
  {
    "url": "blog/skepticism/2018/01/21/naturopath/index.html",
    "revision": "26b30c83416c73572fe3ac706d65c9e1"
  },
  {
    "url": "blog/skepticism/2018/01/21/respen/index.html",
    "revision": "9e78854b04a5d64d491c83191be2d310"
  },
  {
    "url": "blog/skepticism/2018/01/28/bears/index.html",
    "revision": "16f1ab170ceed4f39f66f610325e891a"
  },
  {
    "url": "blog/skepticism/2018/01/28/index.html",
    "revision": "e54007ee852b61ac7a2c85b76382a74a"
  },
  {
    "url": "blog/skepticism/2018/01/28/peppering/index.html",
    "revision": "b827568a3119b8160ad6ebbc1892c367"
  },
  {
    "url": "blog/skepticism/2018/01/28/pet/index.html",
    "revision": "5ee0921370637b96b19767bb0c9ddd41"
  },
  {
    "url": "blog/skepticism/2018/01/28/quake/index.html",
    "revision": "fadf36074fe78c39ed6686d5de734338"
  },
  {
    "url": "blog/skepticism/2018/01/28/scientology/index.html",
    "revision": "34cece648c161067e67ed820fe7bc6a8"
  },
  {
    "url": "blog/skepticism/2018/01/index.html",
    "revision": "207d7e050aa8f405429b71cac52ec85d"
  },
  {
    "url": "blog/skepticism/2018/02/11/asa/index.html",
    "revision": "5baf0dce7ffce19d485a55650939dddf"
  },
  {
    "url": "blog/skepticism/2018/02/11/cannabis/index.html",
    "revision": "2c07ba88db8e656800c61da862e3b0b8"
  },
  {
    "url": "blog/skepticism/2018/02/11/elon/index.html",
    "revision": "71b5e77bb23eb1bba645f64674a1f60a"
  },
  {
    "url": "blog/skepticism/2018/02/11/homeopathy/index.html",
    "revision": "72ec82d8ea456a8801cf4688dce9f9cb"
  },
  {
    "url": "blog/skepticism/2018/02/11/index.html",
    "revision": "710db7afafb39f9e788094fc528b5819"
  },
  {
    "url": "blog/skepticism/2018/02/11/water/index.html",
    "revision": "c82070ea08d79ae7c3e282741cd7ad81"
  },
  {
    "url": "blog/skepticism/2018/02/25/crisis/index.html",
    "revision": "42628523236fe9e45ec985a427d0663b"
  },
  {
    "url": "blog/skepticism/2018/02/25/eggs/index.html",
    "revision": "b6789e57afadb0e411e3cecb508f8206"
  },
  {
    "url": "blog/skepticism/2018/02/25/fsm/index.html",
    "revision": "fc69bbf650eefc966a16589b62507db4"
  },
  {
    "url": "blog/skepticism/2018/02/25/index.html",
    "revision": "cd47c140d66cadfb3ef23bfc7c1b52dc"
  },
  {
    "url": "blog/skepticism/2018/02/25/number/index.html",
    "revision": "92962c7e865928a8643ba75aec34e5ea"
  },
  {
    "url": "blog/skepticism/2018/02/25/quackery/index.html",
    "revision": "ea7d27fd893980ec728bb5a293605913"
  },
  {
    "url": "blog/skepticism/2018/02/index.html",
    "revision": "c41a3b34de6d6afab54578eaa9b00c68"
  },
  {
    "url": "blog/skepticism/2018/03/11/ai/index.html",
    "revision": "61798d79081debe81804d1d2e22c7d60"
  },
  {
    "url": "blog/skepticism/2018/03/11/index.html",
    "revision": "9c43980ced975cc064964172dd5ad115"
  },
  {
    "url": "blog/skepticism/2018/03/11/radiation/index.html",
    "revision": "efd7929be3c80b689c76afad9006a0f6"
  },
  {
    "url": "blog/skepticism/2018/03/11/reiki/index.html",
    "revision": "ba1e9e1c42253a2481c1015d19014278"
  },
  {
    "url": "blog/skepticism/2018/03/11/ufo/index.html",
    "revision": "56631f5315db89c2db666492c95dda44"
  },
  {
    "url": "blog/skepticism/2018/03/18/ghost/index.html",
    "revision": "cc22d538f7b90c035c810a9831cbde2a"
  },
  {
    "url": "blog/skepticism/2018/03/18/index.html",
    "revision": "13f69ff999ad07c94bb3252a5607bdc7"
  },
  {
    "url": "blog/skepticism/2018/03/18/psychic/index.html",
    "revision": "ad09bcdba953b00870e8c77b3349d0c4"
  },
  {
    "url": "blog/skepticism/2018/03/18/quack/index.html",
    "revision": "0864d412fd1c59704863e1081a375510"
  },
  {
    "url": "blog/skepticism/2018/03/18/radiation/index.html",
    "revision": "80474da89fb1fef13788bd61650b5a8f"
  },
  {
    "url": "blog/skepticism/2018/03/index.html",
    "revision": "7a3edb4fc6b182ab29a608b4c27a26d7"
  },
  {
    "url": "blog/skepticism/2018/04/08/calocurb/index.html",
    "revision": "361bcdc802a803d47faf4f6e0187f4ab"
  },
  {
    "url": "blog/skepticism/2018/04/08/cam/index.html",
    "revision": "3d3727bd65771d61fc9968a64766f284"
  },
  {
    "url": "blog/skepticism/2018/04/08/index.html",
    "revision": "eef357d68db8344407a51e0b33dcc39b"
  },
  {
    "url": "blog/skepticism/2018/04/08/psychic/index.html",
    "revision": "7e0e4317aec0784dc8bd175f5a9a364e"
  },
  {
    "url": "blog/skepticism/2018/04/08/vaccines/index.html",
    "revision": "e4224b524652872704162bcb612490b9"
  },
  {
    "url": "blog/skepticism/2018/04/15/coffee/index.html",
    "revision": "f184a3cd6922c4e3d9b1d552a63dbe9a"
  },
  {
    "url": "blog/skepticism/2018/04/15/ignorance/index.html",
    "revision": "01cfec9b0c865141ea51dcb995b481c6"
  },
  {
    "url": "blog/skepticism/2018/04/15/index.html",
    "revision": "f13134afb9b7464d2bb25ef0321da05f"
  },
  {
    "url": "blog/skepticism/2018/04/15/nasa/index.html",
    "revision": "2ca98790c38f8622aacaae105fd88136"
  },
  {
    "url": "blog/skepticism/2018/04/15/tapu/index.html",
    "revision": "0b83cacb72993f1791f4bf9c0d0508c9"
  },
  {
    "url": "blog/skepticism/2018/04/29/google/index.html",
    "revision": "32795f2047da038d99e1d726b8d7a62b"
  },
  {
    "url": "blog/skepticism/2018/04/29/homeopathy/index.html",
    "revision": "6144181d59cb3cf6b80fb8fc3caad762"
  },
  {
    "url": "blog/skepticism/2018/04/29/index.html",
    "revision": "053de9436556f2d3ea2b616fe16d8c4b"
  },
  {
    "url": "blog/skepticism/2018/04/29/ken/index.html",
    "revision": "d6cc6191befd7decb98a88d4f0c33503"
  },
  {
    "url": "blog/skepticism/2018/04/29/v2k/index.html",
    "revision": "3e33e00e1097d8f8abcb7d6b6177b523"
  },
  {
    "url": "blog/skepticism/2018/04/index.html",
    "revision": "ea33e9dd85aa64402cb9e2b3623ed830"
  },
  {
    "url": "blog/skepticism/2018/05/13/astrology/index.html",
    "revision": "fcb8beb68aa8744f553364953dbdfcb5"
  },
  {
    "url": "blog/skepticism/2018/05/13/crystals/index.html",
    "revision": "6d9691ddb1af427a463208b2cd35671c"
  },
  {
    "url": "blog/skepticism/2018/05/13/dawkins/index.html",
    "revision": "7beefb5650808f18db03739fd097ae9c"
  },
  {
    "url": "blog/skepticism/2018/05/13/index.html",
    "revision": "f82a99ca18aa2c2e496539c786ccee31"
  },
  {
    "url": "blog/skepticism/2018/05/13/kangen/index.html",
    "revision": "c0f3b7937cd2fc33a60c35a16f4ad262"
  },
  {
    "url": "blog/skepticism/2018/05/13/vitamins/index.html",
    "revision": "d82c2d7c2f97c46dc5ee0e8ac47edf2b"
  },
  {
    "url": "blog/skepticism/2018/05/27/flat/index.html",
    "revision": "a0fce051e98da1bbb7991a9023a5092d"
  },
  {
    "url": "blog/skepticism/2018/05/27/index.html",
    "revision": "dae855315d66caab7286f0bd060d6bd8"
  },
  {
    "url": "blog/skepticism/2018/05/27/kangen/index.html",
    "revision": "e4962893aa5c20e71f6688673823db1b"
  },
  {
    "url": "blog/skepticism/2018/05/27/ness/index.html",
    "revision": "1b7ad4665254103246e5152c6940c3c6"
  },
  {
    "url": "blog/skepticism/2018/05/27/oz/index.html",
    "revision": "8c089b89e1c043bff91bdc939cad7a4a"
  },
  {
    "url": "blog/skepticism/2018/05/27/psychic/index.html",
    "revision": "2c572e3d2ba78cae814bdbeb25ad56e8"
  },
  {
    "url": "blog/skepticism/2018/05/index.html",
    "revision": "6c82f7710c441c631f8dd84a4402f6ac"
  },
  {
    "url": "blog/skepticism/2018/06/10/astrology/index.html",
    "revision": "1d483a98f0f836859fd4b0bd33218c25"
  },
  {
    "url": "blog/skepticism/2018/06/10/index.html",
    "revision": "965c60ac499a023c7dba3ee8ffbb7ed9"
  },
  {
    "url": "blog/skepticism/2018/06/10/nhs/index.html",
    "revision": "9fb3f3dbc9f5823b0a158313572d0894"
  },
  {
    "url": "blog/skepticism/2018/06/10/shakti/index.html",
    "revision": "1397044ceb78f36f98131d2355b6427f"
  },
  {
    "url": "blog/skepticism/2018/06/10/weetbix/index.html",
    "revision": "d014bc5de02690ca3663461672988ccf"
  },
  {
    "url": "blog/skepticism/2018/06/24/blasphemy/index.html",
    "revision": "a30efdaeb276059be30f8d12098b37e8"
  },
  {
    "url": "blog/skepticism/2018/06/24/cannabis/index.html",
    "revision": "20a26ecdc003d829ca83ae081f689669"
  },
  {
    "url": "blog/skepticism/2018/06/24/hotdog/index.html",
    "revision": "40a3c315d3ceb2d110e11dd1fc19a411"
  },
  {
    "url": "blog/skepticism/2018/06/24/index.html",
    "revision": "cef51bacc5836db94bf37c3d4f9de68d"
  },
  {
    "url": "blog/skepticism/2018/06/24/led/index.html",
    "revision": "afb0f9d8a899f325337c8867d421a1dd"
  },
  {
    "url": "blog/skepticism/2018/06/index.html",
    "revision": "f09e0b3003d0cff00577e41aa9aaca83"
  },
  {
    "url": "blog/skepticism/2018/07/08/bullet/index.html",
    "revision": "3b65664fb9e09190699e01c8ff9ffccf"
  },
  {
    "url": "blog/skepticism/2018/07/08/chiros/index.html",
    "revision": "72298a5b9297e3b7a763ad93872dcd9e"
  },
  {
    "url": "blog/skepticism/2018/07/08/hiv/index.html",
    "revision": "86dae74e0d68d8f76245cff0e2984972"
  },
  {
    "url": "blog/skepticism/2018/07/08/hrv/index.html",
    "revision": "43afe30820fa8e0715e43ab154cfc728"
  },
  {
    "url": "blog/skepticism/2018/07/08/index.html",
    "revision": "f5407e0c98de1d3e71003fbc2c93da6a"
  },
  {
    "url": "blog/skepticism/2018/07/22/cancer/index.html",
    "revision": "4befee6eddf9822295723d6e92c39f1b"
  },
  {
    "url": "blog/skepticism/2018/07/22/index.html",
    "revision": "2e344dfea110f21aeae4b255572e955c"
  },
  {
    "url": "blog/skepticism/2018/07/22/resurrection/index.html",
    "revision": "3632bb2b564c2d8830bf07eb40a10303"
  },
  {
    "url": "blog/skepticism/2018/07/22/talc/index.html",
    "revision": "a26cdcaf0d116324423bda03a305dd92"
  },
  {
    "url": "blog/skepticism/2018/07/22/visas/index.html",
    "revision": "3f86bc0fa410abb3476935b0b8abbe06"
  },
  {
    "url": "blog/skepticism/2018/07/index.html",
    "revision": "b309fd2a33b1e76562e9d51bede0fc9e"
  },
  {
    "url": "blog/skepticism/2018/08/05/conf/index.html",
    "revision": "ea30795d65e836701684f5959bd5487d"
  },
  {
    "url": "blog/skepticism/2018/08/05/index.html",
    "revision": "459b4d8caadb5aa5b32ce8b4ae5dc0fa"
  },
  {
    "url": "blog/skepticism/2018/08/05/qanon/index.html",
    "revision": "3c69a7ba5412b82ac889c6f7d9ce8c74"
  },
  {
    "url": "blog/skepticism/2018/08/19/index.html",
    "revision": "4a1e2923534a902b078119f1f898b44d"
  },
  {
    "url": "blog/skepticism/2018/08/19/jw/index.html",
    "revision": "c7569d97ac1f3740a6ba35cd9fa71288"
  },
  {
    "url": "blog/skepticism/2018/08/index.html",
    "revision": "ac47c0baa6ee19873a82ab1eeaf5177f"
  },
  {
    "url": "blog/skepticism/2018/09/02/allergy/index.html",
    "revision": "e8687627f8b30902c95dd7e8b210790e"
  },
  {
    "url": "blog/skepticism/2018/09/02/catholic/index.html",
    "revision": "67ff5a0482d2c61cc3eb415a080db494"
  },
  {
    "url": "blog/skepticism/2018/09/02/index.html",
    "revision": "10566a443629ca09bfa747ce68f254b8"
  },
  {
    "url": "blog/skepticism/2018/09/02/jw/index.html",
    "revision": "7df21bd732c89240a2c0f441b3316fca"
  },
  {
    "url": "blog/skepticism/2018/09/02/sen/index.html",
    "revision": "dd590afe8b259239c85cecfd7fb178bc"
  },
  {
    "url": "blog/skepticism/2018/09/16/1080/index.html",
    "revision": "4cb8083e260578b9499f902fbc2c041d"
  },
  {
    "url": "blog/skepticism/2018/09/16/church/index.html",
    "revision": "6181247405970900ed2b733a53985431"
  },
  {
    "url": "blog/skepticism/2018/09/16/index.html",
    "revision": "5f3f36de6792f5c28e2956b9ee22e127"
  },
  {
    "url": "blog/skepticism/2018/09/16/jones/index.html",
    "revision": "f066c0cdc0c87b2fa7fbfe1f68eb53e6"
  },
  {
    "url": "blog/skepticism/2018/09/16/scammers/index.html",
    "revision": "ad17bbce9e39798ec27cd3bd47a1d7a4"
  },
  {
    "url": "blog/skepticism/2018/09/30/index.html",
    "revision": "3fa7d3097676122933cf88a55dbed38c"
  },
  {
    "url": "blog/skepticism/2018/09/30/jw/index.html",
    "revision": "e65e23751409b9117f89550469493741"
  },
  {
    "url": "blog/skepticism/2018/09/30/oto/index.html",
    "revision": "8e7f25d4a7b8cabd92b41f1685896d21"
  },
  {
    "url": "blog/skepticism/2018/09/30/who/index.html",
    "revision": "cc8509726a2115a59f74a562b78759ca"
  },
  {
    "url": "blog/skepticism/2018/09/index.html",
    "revision": "0218039686b8ad3d2514616eb4b12377"
  },
  {
    "url": "blog/skepticism/2018/10/14/hacked/index.html",
    "revision": "4a197978d92721b4a9f3b8087980e810"
  },
  {
    "url": "blog/skepticism/2018/10/14/index.html",
    "revision": "6f0bb2c987a69df370c68c476683c4fa"
  },
  {
    "url": "blog/skepticism/2018/10/14/kangen/index.html",
    "revision": "fef5dd5964d1e31816fc80b6a81d7766"
  },
  {
    "url": "blog/skepticism/2018/10/14/pakistan/index.html",
    "revision": "1392dbefff6c9588cc0e625077eab715"
  },
  {
    "url": "blog/skepticism/2018/10/14/sarah/index.html",
    "revision": "1fc50434add3745dc505b6e85c689ec3"
  },
  {
    "url": "blog/skepticism/2018/10/28/blasphemy/index.html",
    "revision": "57a41a253deb9a7bc79e8b343560b7e1"
  },
  {
    "url": "blog/skepticism/2018/10/28/hrv/index.html",
    "revision": "86c34f65dcdd941673cad595eacc0e3a"
  },
  {
    "url": "blog/skepticism/2018/10/28/index.html",
    "revision": "be93199fedf1a7d46860f8f2c126206c"
  },
  {
    "url": "blog/skepticism/2018/10/28/jesus/index.html",
    "revision": "9c7aabcdce0d68ba5020e0e75e9920e6"
  },
  {
    "url": "blog/skepticism/2018/10/28/natural/index.html",
    "revision": "4275d517b53a7e82527250da9f626a50"
  },
  {
    "url": "blog/skepticism/2018/10/index.html",
    "revision": "8daff832163ff1a847e4df711f53910f"
  },
  {
    "url": "blog/skepticism/2018/11/04/bibi/index.html",
    "revision": "fbf050d95ef3bafa4915cbb442a898c2"
  },
  {
    "url": "blog/skepticism/2018/11/04/index.html",
    "revision": "f36be7cae3b24f4e062e82028cf8668c"
  },
  {
    "url": "blog/skepticism/2018/11/04/jesus/index.html",
    "revision": "3e8bc5d6fdaaa634cb66f42d5ae4f388"
  },
  {
    "url": "blog/skepticism/2018/11/04/obdii/index.html",
    "revision": "5c9bf39b31975e7c466fa108b4ecd6ea"
  },
  {
    "url": "blog/skepticism/2018/11/04/sleepdrops/index.html",
    "revision": "82c1286665d626ac80f682da8ed6c78f"
  },
  {
    "url": "blog/skepticism/2018/11/index.html",
    "revision": "642c05142765d38169a8805a43574325"
  },
  {
    "url": "blog/skepticism/2018/12/02/ark/index.html",
    "revision": "0427130d8541a9bba982102b83674c09"
  },
  {
    "url": "blog/skepticism/2018/12/02/green/index.html",
    "revision": "2737eac93a75ba6104fb0117ff68799f"
  },
  {
    "url": "blog/skepticism/2018/12/02/index.html",
    "revision": "93202693ac1ebfed376094e8a666a3df"
  },
  {
    "url": "blog/skepticism/2018/12/02/ri/index.html",
    "revision": "447322826fb61f774f61c81357481b48"
  },
  {
    "url": "blog/skepticism/2018/12/16/blasphemy/index.html",
    "revision": "9d6a76d5901850be861762753f2be01a"
  },
  {
    "url": "blog/skepticism/2018/12/16/index.html",
    "revision": "161249fbf6dbbc9ea980ba473555dbc7"
  },
  {
    "url": "blog/skepticism/2018/12/16/sleepdrops/index.html",
    "revision": "61d27b5ed2ed2273fd99f32ddaf0a212"
  },
  {
    "url": "blog/skepticism/2018/12/16/tekiri/index.html",
    "revision": "f7cbc6b9b94092e7dfb8ba1b9faf06b2"
  },
  {
    "url": "blog/skepticism/2018/12/index.html",
    "revision": "2ce63a3df823e5122f1bc5183b4c2d16"
  },
  {
    "url": "blog/skepticism/2018/index.html",
    "revision": "34d308e76469dac1a3ff39e6b41ecdfc"
  },
  {
    "url": "blog/skepticism/2020/08/18/index.html",
    "revision": "ad8838f7e49a995cc38868476dbf9ab6"
  },
  {
    "url": "blog/skepticism/2020/08/18/myths/index.html",
    "revision": "ae3dcd324787528667ae886711f05fdc"
  },
  {
    "url": "blog/skepticism/2020/08/index.html",
    "revision": "9f63d410f0d963a7d70f5ff2da59da0d"
  },
  {
    "url": "blog/skepticism/2020/10/20/election/index.html",
    "revision": "8b5afba5bd8cfed4d4068d79d8b35a21"
  },
  {
    "url": "blog/skepticism/2020/11/09/jade/index.html",
    "revision": "7670bd7da2b95dd63564e6b04782f817"
  },
  {
    "url": "blog/skepticism/2020/11/09/luminate/index.html",
    "revision": "01c040cfab2505dc04c15f7830f44c49"
  },
  {
    "url": "blog/skepticism/2020/11/09/randi/index.html",
    "revision": "ba7126d114aed68a05a8f302fbbb2445"
  },
  {
    "url": "blog/skepticism/2020/11/09/wwg1wga/index.html",
    "revision": "eab4b8cf23661e7b3f2641aebb7b1161"
  },
  {
    "url": "blog/skepticism/2020/index.html",
    "revision": "2a5d1aa6cee4624a8c707051c6055d77"
  },
  {
    "url": "blog/skepticism/index.html",
    "revision": "43216089114fe35c8af019a93acd42c6"
  },
  {
    "url": "blog/tag/index.html",
    "revision": "7073ea6c7ff88728c59da638b32dfb3e"
  },
  {
    "url": "contact/index.html",
    "revision": "ec65a300e6af72f04dfe735bb617a137"
  },
  {
    "url": "cv/cover/index.html",
    "revision": "485f36f2a2ffa355b1c27bd0cce5f70f"
  },
  {
    "url": "cv/full.html",
    "revision": "e954a3051a1190a07f47c61411baf12e"
  },
  {
    "url": "cv/full/index.html",
    "revision": "1714674a869b534f5d0913600b23d788"
  },
  {
    "url": "cv/index.html",
    "revision": "e6c270b0af82d615beacd6ab2e4ce2a9"
  },
  {
    "url": "cv/short.html",
    "revision": "a5b9de4da453ee7564f56cb1666d10fc"
  },
  {
    "url": "googlee25d0c06da891164.html",
    "revision": "0defe75660212f417b90c5affcd03380"
  },
  {
    "url": "index.html",
    "revision": "e397b987423c25b1f31154ec1dc7ba70"
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
    "revision": "4d8492f3ff3e2db87f0b2bc4c70408c3"
  },
  {
    "url": "media/me/index.html",
    "revision": "6ca628f1a7b6ba1ec349e325ac9d822e"
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
    "revision": "6ebeb0b06ea6d8aae4de14e2f8e76fed"
  },
  {
    "url": "status/index.html",
    "revision": "7b9dac8d7eaf90dacd5fe12f867708ac"
  },
  {
    "url": "status/steam/index.html",
    "revision": "c1d74b77f30270d03a79990e5139b11a"
  },
  {
    "url": "status/twitter/index.html",
    "revision": "61acb5137fbbb392bfc74f9c87eebb6d"
  },
  {
    "url": "status/wikipedia/index.html",
    "revision": "70f71a10b8dfc56bdd3b32d52956a06c"
  },
  {
    "url": "test/index.html",
    "revision": "88888492d223c221354357cfe74b9220"
  },
  {
    "url": "test/webcam/index.html",
    "revision": "2d0bad3b2849b6bb2e9c60ff73ca3cbc"
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
