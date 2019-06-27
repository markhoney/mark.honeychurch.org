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
    "revision": "b51e7089163bf6693348f2cedb3404fe"
  },
  {
    "url": "assets/css/0.styles.277285c3.css",
    "revision": "84884da56c470e139d475a75160def62"
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
    "url": "assets/img/13323257_1129249003764917_3406132001753365037_o.jpg",
    "revision": "1846194c731dfd61cf6d21a8249fc033"
  },
  {
    "url": "assets/img/20181007T1150-0353-CNS-ASIA-BIBI-FAMILY.jpg",
    "revision": "68f2da9184dfb48cc63896959b933c5a"
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
    "url": "assets/img/46995988_287108111914527_8172235991533223936_n.jpg",
    "revision": "c9452d3e6fa78f7a5e162a6236de47b7"
  },
  {
    "url": "assets/img/4F731F88-CC30-4DDB-B5B8-BAF285F0403F.jpg",
    "revision": "3b9613bb3c41d60eced2b664387e2e64"
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
    "url": "assets/img/bristol.jpg",
    "revision": "12527f4d65883268549347ba3172a296"
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
    "revision": "2d87b7cdfa905b3728b2d8e279a158fc"
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
    "url": "assets/img/geni.jpg",
    "revision": "97827d221d61d2377968b38190dd6820"
  },
  {
    "url": "assets/img/georgia.jpg",
    "revision": "84dfc9cd7c1ff21e68e06d8364ead3bb"
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
    "url": "assets/img/interactive.jpg",
    "revision": "329530629de3e7c47f44b2d96e1b737f"
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
    "url": "assets/img/logistics.jpg",
    "revision": "1d396553b561a0de6d777816e183ea1c"
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
    "url": "assets/img/mungo.jpg",
    "revision": "fba19e89a8e1dab13902751a9d1e2810"
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
    "url": "assets/img/rsa.jpg",
    "revision": "9e8f8e545acbeedaf030f909ae00055c"
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
    "url": "assets/img/spiral.jpg",
    "revision": "a92c028c03a0e596cfb541fe76df1d1a"
  },
  {
    "url": "assets/img/stgeorge.jpg",
    "revision": "b5606b9d4efe6f04b94fc82c9fb0b8ef"
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
    "url": "assets/img/ubs.jpg",
    "revision": "0ba844eb82344f08ccb6e3a70e05a985"
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
    "url": "assets/img/welbeck.jpg",
    "revision": "453caca77856c00c3ad1b060c36d268a"
  },
  {
    "url": "assets/js/1.js",
    "revision": "cef1a5aac3bbad18fa945c825b19c720"
  },
  {
    "url": "assets/js/10.js",
    "revision": "d7132e2baa60ed328a10b4d047e596fd"
  },
  {
    "url": "assets/js/100.js",
    "revision": "967d2917dad88a3595e8c797af06738b"
  },
  {
    "url": "assets/js/101.js",
    "revision": "e2c9239f46091b69361c7b71f4d4f7bb"
  },
  {
    "url": "assets/js/102.js",
    "revision": "bac50c04c18a4fcd4de807ccad722b87"
  },
  {
    "url": "assets/js/103.js",
    "revision": "c3850245c112d2dd98f6272c86c0faf4"
  },
  {
    "url": "assets/js/104.js",
    "revision": "8098b15a82f43ed7fb6e2edaba2af4f3"
  },
  {
    "url": "assets/js/105.js",
    "revision": "59d87cfbbdc8a217ab7da6b6fa35271f"
  },
  {
    "url": "assets/js/106.js",
    "revision": "cf6195a1b208cf4129e62c9596521648"
  },
  {
    "url": "assets/js/107.js",
    "revision": "32817bda9077b8a06dce60ca6c6086a4"
  },
  {
    "url": "assets/js/108.js",
    "revision": "f4fa0f78f50e595fe00245b99bce3a4f"
  },
  {
    "url": "assets/js/109.js",
    "revision": "2b5e0c35f2db1457f4126e00a66109c2"
  },
  {
    "url": "assets/js/11.js",
    "revision": "2e543c106503e8b3bccec431825374df"
  },
  {
    "url": "assets/js/110.js",
    "revision": "c2eef73e9a51f36e750790de0265661f"
  },
  {
    "url": "assets/js/111.js",
    "revision": "8cb083c0adadf0884c3945b1e9c6f1af"
  },
  {
    "url": "assets/js/112.js",
    "revision": "39e46875a8b690c6da570f074bcf4813"
  },
  {
    "url": "assets/js/113.js",
    "revision": "030a0e78a363cf3b2121b6ce9dc9cf67"
  },
  {
    "url": "assets/js/114.js",
    "revision": "8e784cff2b21e8a0f1e8b6adc6003674"
  },
  {
    "url": "assets/js/115.js",
    "revision": "868aa88a35dfcc3303bbf5084fadf863"
  },
  {
    "url": "assets/js/116.js",
    "revision": "ed842bb95319a71f427c82717c050ed4"
  },
  {
    "url": "assets/js/117.js",
    "revision": "2b6bbc55e01508ac9f0326f61bc104d8"
  },
  {
    "url": "assets/js/118.js",
    "revision": "dcfc1b2b3074a43bb6f37a1041537866"
  },
  {
    "url": "assets/js/119.js",
    "revision": "bf2a02a8be7d43717a0ca0a607bc9204"
  },
  {
    "url": "assets/js/12.js",
    "revision": "c8ba7fa6b66111c1b5e23fe1cd450db7"
  },
  {
    "url": "assets/js/120.js",
    "revision": "c0e2bd100c56f97400f4359bfd2bf16b"
  },
  {
    "url": "assets/js/121.js",
    "revision": "6e771b37c366b3a4433144a265477a8f"
  },
  {
    "url": "assets/js/122.js",
    "revision": "529683b856974687d8d0e358de1e710a"
  },
  {
    "url": "assets/js/123.js",
    "revision": "0b64bf7fbae8a05adce39f30be82582a"
  },
  {
    "url": "assets/js/124.js",
    "revision": "dbc5fcef0c15d409ce32b3cb96ca0d96"
  },
  {
    "url": "assets/js/125.js",
    "revision": "9915ba66b19d57d6a17553181319b83c"
  },
  {
    "url": "assets/js/126.js",
    "revision": "c2e112c5a3a981055af7c822eead76b9"
  },
  {
    "url": "assets/js/127.js",
    "revision": "830bb6ee628bf0bf85630ec81e931eaf"
  },
  {
    "url": "assets/js/128.js",
    "revision": "08052b72dbf95e748bd2b096a1d8074f"
  },
  {
    "url": "assets/js/129.js",
    "revision": "4bad63ec49d8fa47eff27b291065010f"
  },
  {
    "url": "assets/js/13.js",
    "revision": "72e733b596b0b7f7c11fc9ba65d47c5d"
  },
  {
    "url": "assets/js/130.js",
    "revision": "fd562c6a65b6e2f44aea95e84555fa64"
  },
  {
    "url": "assets/js/131.js",
    "revision": "d529487196035d6aa3ead3ba0024ffcd"
  },
  {
    "url": "assets/js/132.js",
    "revision": "a4e746c4ac34daba5264d9db4fc4bdb8"
  },
  {
    "url": "assets/js/133.js",
    "revision": "13fc6b7faaec2193651720104895e16d"
  },
  {
    "url": "assets/js/134.js",
    "revision": "172727f04ccbe4ddfcecbdc15d633fb1"
  },
  {
    "url": "assets/js/135.js",
    "revision": "076bc644955d36485b6dbc720dcaecb8"
  },
  {
    "url": "assets/js/136.js",
    "revision": "f36bd75d7788032af1f8af25dbcad5e9"
  },
  {
    "url": "assets/js/137.js",
    "revision": "30dd1145b36b1ed53833d0aac378dd6a"
  },
  {
    "url": "assets/js/138.js",
    "revision": "442ccc55172645e52c4ff4fb5aa8ea49"
  },
  {
    "url": "assets/js/139.js",
    "revision": "4b1e8dcc7da5189a91e3926a8619e8f5"
  },
  {
    "url": "assets/js/14.js",
    "revision": "48a35c4bd57a3f2d71828d419c3f0954"
  },
  {
    "url": "assets/js/140.js",
    "revision": "515955e77039cf1ad3262432d13d9171"
  },
  {
    "url": "assets/js/141.js",
    "revision": "769da313159edd932f6d762687343818"
  },
  {
    "url": "assets/js/142.js",
    "revision": "bcf00c1ef1f10c6a7e7d25b35eb7e505"
  },
  {
    "url": "assets/js/143.js",
    "revision": "403ae332862360b4bddbb88086c06be5"
  },
  {
    "url": "assets/js/144.js",
    "revision": "971759bbe040daec3a58d7660fd2df8e"
  },
  {
    "url": "assets/js/145.js",
    "revision": "3b4a4945012d6f642d2d4431575ded68"
  },
  {
    "url": "assets/js/146.js",
    "revision": "a268e12222664ead75bbbe0ea3eaf5d6"
  },
  {
    "url": "assets/js/147.js",
    "revision": "5b97955a14b5df85fa8aa5b1da72f85e"
  },
  {
    "url": "assets/js/148.js",
    "revision": "265ee72e79db55c9699287be22874d13"
  },
  {
    "url": "assets/js/149.js",
    "revision": "8ee298445939325639b1b541094f0142"
  },
  {
    "url": "assets/js/15.js",
    "revision": "814cd4c9eec3980c6a85c9a4a59aa618"
  },
  {
    "url": "assets/js/150.js",
    "revision": "31d8101e17b0637002d03fc6b2fed1d0"
  },
  {
    "url": "assets/js/151.js",
    "revision": "c87e90e8531f71cf069f86a8dd3cd519"
  },
  {
    "url": "assets/js/152.js",
    "revision": "ae0a802e3e27bcf1bd4df40dbd57832f"
  },
  {
    "url": "assets/js/153.js",
    "revision": "cc2af4e0d9e8db2c540d7a1294c20dd0"
  },
  {
    "url": "assets/js/154.js",
    "revision": "522d2cb1d1e648e68b6c64d1c8bcdb1c"
  },
  {
    "url": "assets/js/155.js",
    "revision": "bb1545c24c03993dcd4a778dd4a6127e"
  },
  {
    "url": "assets/js/156.js",
    "revision": "9e7d9f986844e0bf0a910e2ded75f572"
  },
  {
    "url": "assets/js/157.js",
    "revision": "99a840488b9a336c77aeccc172947c30"
  },
  {
    "url": "assets/js/158.js",
    "revision": "fc7d8b8583448d1a2fa6bd53b0be0212"
  },
  {
    "url": "assets/js/159.js",
    "revision": "e00bd99ec0484ab57fcac5d7461a1cbd"
  },
  {
    "url": "assets/js/16.js",
    "revision": "8aed199cb1c7648910016c4b4a46c668"
  },
  {
    "url": "assets/js/160.js",
    "revision": "f1e07ab6aeb5ddce6c6b25c4bdb92b42"
  },
  {
    "url": "assets/js/161.js",
    "revision": "063f2ec037022bae0bf97c3abcc945d5"
  },
  {
    "url": "assets/js/162.js",
    "revision": "9c89bfb19f4bbb5463c56160dccc6a3d"
  },
  {
    "url": "assets/js/163.js",
    "revision": "db9975b9c811024afe6eceaab6eeb7d6"
  },
  {
    "url": "assets/js/164.js",
    "revision": "111566af9357321c377f3c82c6a2452b"
  },
  {
    "url": "assets/js/165.js",
    "revision": "925875efc4421ed69cfddf6e5ae4235b"
  },
  {
    "url": "assets/js/166.js",
    "revision": "169cec833c4aa0edbfa8a650972d7c58"
  },
  {
    "url": "assets/js/167.js",
    "revision": "769473e40f970068c637109c1d2fc172"
  },
  {
    "url": "assets/js/168.js",
    "revision": "9ad9173e93034e062630fc00322576c5"
  },
  {
    "url": "assets/js/169.js",
    "revision": "0d302ddbebbe8d1c9c89ac7800c1c25e"
  },
  {
    "url": "assets/js/17.js",
    "revision": "9caa0b88d781b3fc179c067540f98b2d"
  },
  {
    "url": "assets/js/170.js",
    "revision": "b63eb74c2fb1772c09fabe929d25468b"
  },
  {
    "url": "assets/js/171.js",
    "revision": "55d4b4d439f9d5f2ef25cfc94d55b845"
  },
  {
    "url": "assets/js/172.js",
    "revision": "041fc85eb1cb8ddd6841bac7f4683adb"
  },
  {
    "url": "assets/js/173.js",
    "revision": "ceaf1b562f7ab2aaa8a0e0d60593c9be"
  },
  {
    "url": "assets/js/174.js",
    "revision": "43ef2ce0257b171028f12e0a1302e52d"
  },
  {
    "url": "assets/js/175.js",
    "revision": "7ddb9a364817f56b229090fb9218f1a3"
  },
  {
    "url": "assets/js/176.js",
    "revision": "9030f3ee52b22800cb83f21f3edba98f"
  },
  {
    "url": "assets/js/177.js",
    "revision": "32d9c36ea7f1180e317871566dd3c655"
  },
  {
    "url": "assets/js/178.js",
    "revision": "7bdd096f12ba6cace0829bbb468d8caa"
  },
  {
    "url": "assets/js/179.js",
    "revision": "080b9ed9232732eb65f8284e84a1b7a2"
  },
  {
    "url": "assets/js/18.js",
    "revision": "982a061fdfa425bbc2583bfb3fd971f6"
  },
  {
    "url": "assets/js/180.js",
    "revision": "4bca6fb5c50aa27ee8c3b5129a80968a"
  },
  {
    "url": "assets/js/181.js",
    "revision": "e0ffa261604ab025047e0bd02496c3f0"
  },
  {
    "url": "assets/js/182.js",
    "revision": "e3030f46a5baa266f5ca80ae26de7bce"
  },
  {
    "url": "assets/js/183.js",
    "revision": "0976de4f05fbecbf8d074bfc7ea92063"
  },
  {
    "url": "assets/js/184.js",
    "revision": "1eef00d8e9e377027735f093e1aac1ff"
  },
  {
    "url": "assets/js/185.js",
    "revision": "a99d06e8c3f36f3fdeafe6a7d57601a4"
  },
  {
    "url": "assets/js/186.js",
    "revision": "9fe0faf093fd991d6388037fe4adda3f"
  },
  {
    "url": "assets/js/187.js",
    "revision": "6367cbc1f8613cbe28cbc3390281ebfc"
  },
  {
    "url": "assets/js/188.js",
    "revision": "70b52efb3ecb6fc6c65d82e722aa90de"
  },
  {
    "url": "assets/js/189.js",
    "revision": "4a71f0b54fa791602f9bf7d21bdd8a66"
  },
  {
    "url": "assets/js/19.js",
    "revision": "9254368ac99b18457418e65fca517beb"
  },
  {
    "url": "assets/js/190.js",
    "revision": "4f799a974639e8bc7aa3ef4be8b96806"
  },
  {
    "url": "assets/js/191.js",
    "revision": "24f5a96243b9c4455130ef1613ce555b"
  },
  {
    "url": "assets/js/192.js",
    "revision": "e7fadd85336f4b80df4137534ed3e767"
  },
  {
    "url": "assets/js/193.js",
    "revision": "2c9463a4f4689b652899c4ae5ded723b"
  },
  {
    "url": "assets/js/194.js",
    "revision": "0381f2cce3d0b440f13fccfc8e175af8"
  },
  {
    "url": "assets/js/195.js",
    "revision": "b7bfed833facca8d9bd90e28e25f8a81"
  },
  {
    "url": "assets/js/196.js",
    "revision": "b5fcb5f50dc70458c9d24fbe7f396907"
  },
  {
    "url": "assets/js/197.js",
    "revision": "7e64ca0222afd83762e093b2e7088838"
  },
  {
    "url": "assets/js/198.js",
    "revision": "e70a9cde81eb2ff9f995509cca4069f7"
  },
  {
    "url": "assets/js/199.js",
    "revision": "ca58b82731a592bfb7389f07fc272eaf"
  },
  {
    "url": "assets/js/2.js",
    "revision": "f8a2f5b2b7ed164acc923171183a3daa"
  },
  {
    "url": "assets/js/20.js",
    "revision": "e0256f68f2bb47c43fb5042aef95f994"
  },
  {
    "url": "assets/js/200.js",
    "revision": "300c498274dde2e7b941e7671fa94abe"
  },
  {
    "url": "assets/js/201.js",
    "revision": "9a0648b07b9726da62ecf2acbe28b94d"
  },
  {
    "url": "assets/js/202.js",
    "revision": "b3bc2a160e6d1de0b8f446ed2dea3a93"
  },
  {
    "url": "assets/js/203.js",
    "revision": "69f2be735a2ff2ad565f95b2e857e5c3"
  },
  {
    "url": "assets/js/204.js",
    "revision": "bb4ba4628d387433af9f5de7b994b526"
  },
  {
    "url": "assets/js/205.js",
    "revision": "18f72716ee8219e7a29f446762414a82"
  },
  {
    "url": "assets/js/206.js",
    "revision": "c6e8c9c4df80006e8b3fc78847bfc898"
  },
  {
    "url": "assets/js/207.js",
    "revision": "a28a593a1d4ce5c6501559a484985a47"
  },
  {
    "url": "assets/js/208.js",
    "revision": "63269d98d8d3d5e1b4e77abcadf33c81"
  },
  {
    "url": "assets/js/209.js",
    "revision": "746a3c90c54bddb614973a927629c51f"
  },
  {
    "url": "assets/js/21.js",
    "revision": "f7fcbd0a084584d7cdf25d4f04b16ce4"
  },
  {
    "url": "assets/js/210.js",
    "revision": "71577308be2cce615c37cb71753d3b8c"
  },
  {
    "url": "assets/js/211.js",
    "revision": "6e48565b31b4fa772457cb0c84c2caba"
  },
  {
    "url": "assets/js/212.js",
    "revision": "93554e46ec453047c38b70fc744bce41"
  },
  {
    "url": "assets/js/213.js",
    "revision": "f71f4b757f483101bcca8c8f7c37c97f"
  },
  {
    "url": "assets/js/214.js",
    "revision": "3276b910fc21e0ce0241fd2f4477e78e"
  },
  {
    "url": "assets/js/215.js",
    "revision": "4d0cf27307558026b2403c20444a54ac"
  },
  {
    "url": "assets/js/216.js",
    "revision": "029f4bb91e29581d863c5b98d34b1161"
  },
  {
    "url": "assets/js/217.js",
    "revision": "3729ba65b7ed9c4b73d235e02b572c62"
  },
  {
    "url": "assets/js/218.js",
    "revision": "08398a2e411d4e077653cdcd3683305b"
  },
  {
    "url": "assets/js/219.js",
    "revision": "046fffff0784cb6d8508c02424401fbf"
  },
  {
    "url": "assets/js/22.js",
    "revision": "908c802f014c5faa30806e7761632aed"
  },
  {
    "url": "assets/js/220.js",
    "revision": "fd28d85ccf37f69f3433cc9209394b01"
  },
  {
    "url": "assets/js/221.js",
    "revision": "d508f897a835978bfb8e039d6c6a6347"
  },
  {
    "url": "assets/js/222.js",
    "revision": "90e91eef803787cf00124409ee4a780c"
  },
  {
    "url": "assets/js/223.js",
    "revision": "e4f0761ab4f75290a930d90eee9ab648"
  },
  {
    "url": "assets/js/224.js",
    "revision": "5d9397b18805c21f89bc2923adb36ab6"
  },
  {
    "url": "assets/js/225.js",
    "revision": "29da4742275fa6ad786a790231b4bf24"
  },
  {
    "url": "assets/js/226.js",
    "revision": "dd024e73d4a497d0b2c25cd905d494ff"
  },
  {
    "url": "assets/js/227.js",
    "revision": "4bdd073949f6366eb211e440b6a240d2"
  },
  {
    "url": "assets/js/228.js",
    "revision": "7a45d9f187f7f4031c0bc1f429434016"
  },
  {
    "url": "assets/js/229.js",
    "revision": "67eca35e4c3324a7096c1b7b067a94e8"
  },
  {
    "url": "assets/js/23.js",
    "revision": "d507726bf64ed48b7a33b62b6e163ef0"
  },
  {
    "url": "assets/js/230.js",
    "revision": "65b2ef7bf441c570733e9402c74312bb"
  },
  {
    "url": "assets/js/231.js",
    "revision": "a08040d4578b608833fcc1c5c60b3b26"
  },
  {
    "url": "assets/js/232.js",
    "revision": "a5a1d8b5daa7ba75edfc7e2b09ffdf98"
  },
  {
    "url": "assets/js/233.js",
    "revision": "9da484a019dcda04d10fa3ddd81c9859"
  },
  {
    "url": "assets/js/234.js",
    "revision": "f0757a4f1a3222f0d7a6003d195e2f70"
  },
  {
    "url": "assets/js/235.js",
    "revision": "b4a92481f6858fcfeeafa4a20eec0b06"
  },
  {
    "url": "assets/js/236.js",
    "revision": "f0b18f4f85b38b9fcdf83e0fffd8484a"
  },
  {
    "url": "assets/js/237.js",
    "revision": "3080d3bb389aaae31dac67c147dd8cfc"
  },
  {
    "url": "assets/js/238.js",
    "revision": "6a8c46edd2466e4c43480407c985a85d"
  },
  {
    "url": "assets/js/239.js",
    "revision": "875209d8f4a943b9f85c6b627e6a0aa5"
  },
  {
    "url": "assets/js/24.js",
    "revision": "9422b8088259131c9b37d8e5890a5504"
  },
  {
    "url": "assets/js/240.js",
    "revision": "de7b498bf5bdc2780889f267050d5e3a"
  },
  {
    "url": "assets/js/241.js",
    "revision": "8c8b240837aef0f6e321e08e9c2e0ba8"
  },
  {
    "url": "assets/js/242.js",
    "revision": "e4fc1671f2a36cc0f0030b2e9199803b"
  },
  {
    "url": "assets/js/243.js",
    "revision": "25ff9f6327d0fe7964b4bc63115becc6"
  },
  {
    "url": "assets/js/244.js",
    "revision": "5e94bf5dbe929134515014c4850a7a07"
  },
  {
    "url": "assets/js/245.js",
    "revision": "c4d53454eecdb4256cd663abd1453433"
  },
  {
    "url": "assets/js/246.js",
    "revision": "87544bd678e27ec2a1ebbb7e35d63a23"
  },
  {
    "url": "assets/js/247.js",
    "revision": "01d6e25f1c26db707044fbce719b045f"
  },
  {
    "url": "assets/js/248.js",
    "revision": "df21fd9f5818c8679fcc50c901251e63"
  },
  {
    "url": "assets/js/249.js",
    "revision": "4c8748e373802b3dc02e398f297a0dbf"
  },
  {
    "url": "assets/js/25.js",
    "revision": "7545e9f6e641ac153160f57b0faa1fdc"
  },
  {
    "url": "assets/js/250.js",
    "revision": "34bfc3b17b093f634005e4b8b6aacd40"
  },
  {
    "url": "assets/js/251.js",
    "revision": "03c122905888da4ce58afa41b5c3f13e"
  },
  {
    "url": "assets/js/252.js",
    "revision": "58e70c79a29f13b2b437f580ab7098d3"
  },
  {
    "url": "assets/js/253.js",
    "revision": "d638e0158d77fe445ab3e06c900ba865"
  },
  {
    "url": "assets/js/254.js",
    "revision": "13124815283dac047ebb483ce9e07597"
  },
  {
    "url": "assets/js/255.js",
    "revision": "dc0a99d88a5e36a7cec982c37b0040a9"
  },
  {
    "url": "assets/js/256.js",
    "revision": "a3968f9742c32def420c69c50d29a279"
  },
  {
    "url": "assets/js/257.js",
    "revision": "ccf7d0f7d29d3b38063125ae6c22d602"
  },
  {
    "url": "assets/js/258.js",
    "revision": "a47f829d850ea39a426adf9ed5d2be26"
  },
  {
    "url": "assets/js/259.js",
    "revision": "3262c23fba67ccfe43f38a3d5b5700ab"
  },
  {
    "url": "assets/js/26.js",
    "revision": "556b88a8cc97fb3b8d603eb0b4d15a18"
  },
  {
    "url": "assets/js/260.js",
    "revision": "8b5f693e057ddc08502b26a6b1834c64"
  },
  {
    "url": "assets/js/261.js",
    "revision": "49517e39a010b2b53ce41d38e68830e9"
  },
  {
    "url": "assets/js/262.js",
    "revision": "7516a1bdf9804d73a0a6279b3040c096"
  },
  {
    "url": "assets/js/263.js",
    "revision": "d44255c1b01c97e5558526fa6fbeb804"
  },
  {
    "url": "assets/js/264.js",
    "revision": "c93fa1507965c1e326b5d405c7b06a37"
  },
  {
    "url": "assets/js/265.js",
    "revision": "2a0cd4a250fa73917b4e289ef9f6dd34"
  },
  {
    "url": "assets/js/266.js",
    "revision": "dab4a1c1d3cb55ad2513fc2c558d92ee"
  },
  {
    "url": "assets/js/267.js",
    "revision": "c0008dbabfbd0cdb6684218b511df69a"
  },
  {
    "url": "assets/js/268.js",
    "revision": "4c4848231483829b54514b4359f098fd"
  },
  {
    "url": "assets/js/269.js",
    "revision": "5fc5e22af6d33e08cf35e2a40d928b44"
  },
  {
    "url": "assets/js/27.js",
    "revision": "36e3e773dbf3c172d3727344e2af8042"
  },
  {
    "url": "assets/js/270.js",
    "revision": "24f6e77eb2a1cd05ed394d51998be9dd"
  },
  {
    "url": "assets/js/271.js",
    "revision": "c92bbc2fd4c5f04d3e6b491ad8adc023"
  },
  {
    "url": "assets/js/272.js",
    "revision": "4f8327559870c3c307152360f8bfb34c"
  },
  {
    "url": "assets/js/273.js",
    "revision": "6cd1e74a81a47167537003faf2ea37e7"
  },
  {
    "url": "assets/js/274.js",
    "revision": "09120c2662ce23a3d0bc2f9b84264867"
  },
  {
    "url": "assets/js/275.js",
    "revision": "86a975616685f2eb04696fd3392b29f2"
  },
  {
    "url": "assets/js/276.js",
    "revision": "c55eccfa17135390c86931ccfbe103ba"
  },
  {
    "url": "assets/js/277.js",
    "revision": "f8e2a16907980e4803134c7847c18648"
  },
  {
    "url": "assets/js/278.js",
    "revision": "eca6ba306044e25a731217b1d5da1a20"
  },
  {
    "url": "assets/js/279.js",
    "revision": "85e11d1a8032424311dbc5579bed2063"
  },
  {
    "url": "assets/js/28.js",
    "revision": "3fedcf556c6eb1b05ed6a5c692eee710"
  },
  {
    "url": "assets/js/280.js",
    "revision": "03f11693442a6b6470281f6a9e3df7a6"
  },
  {
    "url": "assets/js/281.js",
    "revision": "1164fdda6d5c60307aeda732a0c9073d"
  },
  {
    "url": "assets/js/282.js",
    "revision": "3e0ae551ee609b1ac357000f77406fb2"
  },
  {
    "url": "assets/js/283.js",
    "revision": "b56b5c6aa3cc9694d58f63869c125bfa"
  },
  {
    "url": "assets/js/284.js",
    "revision": "15b1e66f042d69a478958ecacc0c6c69"
  },
  {
    "url": "assets/js/285.js",
    "revision": "8385fbb9a4100f54491bca8c672fdfc9"
  },
  {
    "url": "assets/js/286.js",
    "revision": "9a50fca199c84995afa465022c1df99f"
  },
  {
    "url": "assets/js/287.js",
    "revision": "8bebfab12559e0c4638b161c739dbf35"
  },
  {
    "url": "assets/js/288.js",
    "revision": "8c058e2ec634d108dd4b2b413e0d4f82"
  },
  {
    "url": "assets/js/289.js",
    "revision": "04ad239c951bc05c6a43b83689676ed5"
  },
  {
    "url": "assets/js/29.js",
    "revision": "519752bfb3f13eaff6c6d3e5d23e61f6"
  },
  {
    "url": "assets/js/290.js",
    "revision": "f27e3d139f53d9293fa1dec786cc4fac"
  },
  {
    "url": "assets/js/291.js",
    "revision": "fa39f7419f51ec531873e74325f2a54e"
  },
  {
    "url": "assets/js/292.js",
    "revision": "9b48fd2c15f5e3ce51801bbb08276c05"
  },
  {
    "url": "assets/js/293.js",
    "revision": "066259ff69c8ad62c2385752c9fa3d93"
  },
  {
    "url": "assets/js/294.js",
    "revision": "0fe66348e82038344076f91c412bacae"
  },
  {
    "url": "assets/js/295.js",
    "revision": "00844fdb023a505f5625a1daf26a2061"
  },
  {
    "url": "assets/js/296.js",
    "revision": "552d4d748d1af444a69d849dbc2988ac"
  },
  {
    "url": "assets/js/297.js",
    "revision": "fd46319e88e50a8c0115dd41f8024861"
  },
  {
    "url": "assets/js/298.js",
    "revision": "ec737a545e22a08b876423c02a7e7b1d"
  },
  {
    "url": "assets/js/299.js",
    "revision": "04dddd34c4c4d0a7313db5a07ec33842"
  },
  {
    "url": "assets/js/30.js",
    "revision": "00755f5d122a5dce7c5317cbe2fa5f94"
  },
  {
    "url": "assets/js/300.js",
    "revision": "a56b06e3b1a9e1ffd226abf90a00e49a"
  },
  {
    "url": "assets/js/301.js",
    "revision": "9c04eae657fa008367aac82b504ceadd"
  },
  {
    "url": "assets/js/302.js",
    "revision": "68c6874e5945a6c2ed93cd4cf2d3a6db"
  },
  {
    "url": "assets/js/303.js",
    "revision": "8f6d55e738727a14d2b618d1f59375a1"
  },
  {
    "url": "assets/js/304.js",
    "revision": "4a970ecf24c98610fa3b017ad5191130"
  },
  {
    "url": "assets/js/305.js",
    "revision": "3810e6ea99338f4836f70bdb495ce6cd"
  },
  {
    "url": "assets/js/306.js",
    "revision": "4d323cf80c382a7b9a3c51182118ba9e"
  },
  {
    "url": "assets/js/307.js",
    "revision": "1bd3de448de4c7b5677189497b94ac5d"
  },
  {
    "url": "assets/js/308.js",
    "revision": "468bf37df98e47b2a7e6944de63286bd"
  },
  {
    "url": "assets/js/309.js",
    "revision": "898ff32a3f78d5f394111039d0c84ab9"
  },
  {
    "url": "assets/js/31.js",
    "revision": "8cfb09db61c84537a00004147d33eee1"
  },
  {
    "url": "assets/js/310.js",
    "revision": "8235751336dc24f6f3bd7db33f0b30d6"
  },
  {
    "url": "assets/js/311.js",
    "revision": "13333110e614fe69488eed027f475d7c"
  },
  {
    "url": "assets/js/312.js",
    "revision": "b520e2c33fe2462e70a36cc5279d0a98"
  },
  {
    "url": "assets/js/313.js",
    "revision": "814e1a281e2ed36e0ca382b94b3cd340"
  },
  {
    "url": "assets/js/314.js",
    "revision": "23bf389308db669952d802e42677e241"
  },
  {
    "url": "assets/js/315.js",
    "revision": "6b518a02ae8b968d69b13ea53f506042"
  },
  {
    "url": "assets/js/316.js",
    "revision": "f1bc040253a6de223f0ad34ec9a36e13"
  },
  {
    "url": "assets/js/317.js",
    "revision": "94ac43ecdc30d28e615eecf24a8b0410"
  },
  {
    "url": "assets/js/318.js",
    "revision": "475da3098512f4c8a6b514c68ac0fdfd"
  },
  {
    "url": "assets/js/319.js",
    "revision": "0f3097e1b245431a9d124edd61d214eb"
  },
  {
    "url": "assets/js/32.js",
    "revision": "7e57e62ecb0196e63940bf254e8abaae"
  },
  {
    "url": "assets/js/320.js",
    "revision": "274945e501e296862daf15d48306ad4a"
  },
  {
    "url": "assets/js/321.js",
    "revision": "e49dc385dfec99556064311c264f418f"
  },
  {
    "url": "assets/js/322.js",
    "revision": "a8ede186d3c2046d91446fd5ac97384a"
  },
  {
    "url": "assets/js/323.js",
    "revision": "142fcc38f4329e8babe0732898175e4f"
  },
  {
    "url": "assets/js/324.js",
    "revision": "12554611d9f0ed0a3c5cb156dbb482c4"
  },
  {
    "url": "assets/js/325.js",
    "revision": "ce2a08b4e13818fd60a9b6a634c701c9"
  },
  {
    "url": "assets/js/326.js",
    "revision": "32ba371faa189a043829eed076b2dd26"
  },
  {
    "url": "assets/js/327.js",
    "revision": "ae5da0c7bc66f9125c7e76cdf8f34049"
  },
  {
    "url": "assets/js/328.js",
    "revision": "8094a7a993a82713c50b6a3408dc8a16"
  },
  {
    "url": "assets/js/329.js",
    "revision": "ce761a8146a65413e330688a6aaea217"
  },
  {
    "url": "assets/js/33.js",
    "revision": "ad1c75dc944b1a90f330266a52d3f776"
  },
  {
    "url": "assets/js/330.js",
    "revision": "3ba3992ad87791b2c2a769b2bc67ab8b"
  },
  {
    "url": "assets/js/331.js",
    "revision": "44dbdca0f6b1428a079c583a15691cd3"
  },
  {
    "url": "assets/js/332.js",
    "revision": "9cbcd9d3f6a389d1135fb832fb909f7a"
  },
  {
    "url": "assets/js/333.js",
    "revision": "8b7fb8aeae2cab9133e808d723d13743"
  },
  {
    "url": "assets/js/334.js",
    "revision": "3dc8ffe467cbee742cea9f9f215282f5"
  },
  {
    "url": "assets/js/335.js",
    "revision": "c51937964b82b9856c716ab9f211757d"
  },
  {
    "url": "assets/js/336.js",
    "revision": "3d009b1a6b5c91e5be990d69275d3332"
  },
  {
    "url": "assets/js/337.js",
    "revision": "624e620e554d48c37167601a30feaf03"
  },
  {
    "url": "assets/js/338.js",
    "revision": "cc038040e0aab338a4c59e9f35ea10d6"
  },
  {
    "url": "assets/js/339.js",
    "revision": "5725a9cd7b929277594218c0bf1a60ac"
  },
  {
    "url": "assets/js/34.js",
    "revision": "bcdb5c3e5c4290d1fabbcc075ff45d18"
  },
  {
    "url": "assets/js/340.js",
    "revision": "7a7f8090a2e24b02025b32a2049d644a"
  },
  {
    "url": "assets/js/341.js",
    "revision": "618d325646787d441531ab3512dbbca9"
  },
  {
    "url": "assets/js/342.js",
    "revision": "c9ebc7fbd82827d372ef12ecf2bea2a5"
  },
  {
    "url": "assets/js/343.js",
    "revision": "be86a23d69ca9c2202b25ca7b1bbdeeb"
  },
  {
    "url": "assets/js/344.js",
    "revision": "5a79881119e0a6ede8d2d82f2e188536"
  },
  {
    "url": "assets/js/345.js",
    "revision": "0f6208905953cd10c3c4df88f337fd3b"
  },
  {
    "url": "assets/js/346.js",
    "revision": "1c50ecbe896d2eccda0f85039d9b76cc"
  },
  {
    "url": "assets/js/347.js",
    "revision": "6033fc22e5e5926f704245bcc2595ac4"
  },
  {
    "url": "assets/js/348.js",
    "revision": "75a381d252cbecad7fa8e05f6359ac71"
  },
  {
    "url": "assets/js/349.js",
    "revision": "43904b9b63b5ba8851b7bf2fef666b39"
  },
  {
    "url": "assets/js/35.js",
    "revision": "f4644eeab162c4cee996a247a4402f12"
  },
  {
    "url": "assets/js/350.js",
    "revision": "9be6531e2e247fe50da09f2f78b6feb8"
  },
  {
    "url": "assets/js/351.js",
    "revision": "1b8e7279e4587c2c5ce7cb3ec9a79828"
  },
  {
    "url": "assets/js/352.js",
    "revision": "674340359f55d32e1a1a02c71703919f"
  },
  {
    "url": "assets/js/353.js",
    "revision": "3b7b96e3af35b6b5f0b5b642b4a8eeed"
  },
  {
    "url": "assets/js/354.js",
    "revision": "a4caae55cd042502ac8559bbb519d274"
  },
  {
    "url": "assets/js/355.js",
    "revision": "54625b92020523d41eadb7dfd23ae0cd"
  },
  {
    "url": "assets/js/356.js",
    "revision": "bb94fd724fe84a13c34b704c5a8550b3"
  },
  {
    "url": "assets/js/357.js",
    "revision": "579f819185309d58c2244219318e07af"
  },
  {
    "url": "assets/js/358.js",
    "revision": "5806876a2a72123241699774da58912e"
  },
  {
    "url": "assets/js/359.js",
    "revision": "b179b002d5cae60b5b52bbd9c010ad92"
  },
  {
    "url": "assets/js/36.js",
    "revision": "75158d38722c6129de7f17ae9e30e00e"
  },
  {
    "url": "assets/js/360.js",
    "revision": "483f41b96979ba01ba83b928e8456adb"
  },
  {
    "url": "assets/js/361.js",
    "revision": "f7c0d7bfed53348b7ddcf034fddfb083"
  },
  {
    "url": "assets/js/362.js",
    "revision": "6bd45e993bba7d283376b6b40baf2758"
  },
  {
    "url": "assets/js/363.js",
    "revision": "0886580dbe338eaa0676d3ebed86aa67"
  },
  {
    "url": "assets/js/364.js",
    "revision": "1617523d56fe8e130f9a4264857e8ef6"
  },
  {
    "url": "assets/js/365.js",
    "revision": "f1ca52e73d3bde1aac5177b0695c8100"
  },
  {
    "url": "assets/js/366.js",
    "revision": "92abee8a67d66f054612c253c6e13611"
  },
  {
    "url": "assets/js/367.js",
    "revision": "8ad3544bb2ab54a1a8e43c479e3bc580"
  },
  {
    "url": "assets/js/368.js",
    "revision": "340d3cd1642332363af5ccea0b1b3cf8"
  },
  {
    "url": "assets/js/369.js",
    "revision": "92d6092f5dfba0ab49a6f2e4ba8f0055"
  },
  {
    "url": "assets/js/37.js",
    "revision": "7be075508f36217df91d6872302f0427"
  },
  {
    "url": "assets/js/370.js",
    "revision": "6de15304faa3a191e3e2dc5cd9efe8a0"
  },
  {
    "url": "assets/js/371.js",
    "revision": "8fca5b85892c96915cfcf9b8209c5e19"
  },
  {
    "url": "assets/js/372.js",
    "revision": "478ef3214947874b9243d097ea087549"
  },
  {
    "url": "assets/js/373.js",
    "revision": "100542a0f23a6bd536a0076ccc46f9f8"
  },
  {
    "url": "assets/js/374.js",
    "revision": "db5a46d79c71cf84db6a2a580fe1c2e0"
  },
  {
    "url": "assets/js/375.js",
    "revision": "58ada4d15bd66301787450ee812ad10b"
  },
  {
    "url": "assets/js/376.js",
    "revision": "6977859cd2518164249d4bc67b5344ad"
  },
  {
    "url": "assets/js/377.js",
    "revision": "e1df7c4e8b25de42c056a382d56da3fe"
  },
  {
    "url": "assets/js/378.js",
    "revision": "a9ce1cf81e7b5a805186fbf18b7f3a33"
  },
  {
    "url": "assets/js/379.js",
    "revision": "923af36422328bc76e8a6fb1d9c21f7a"
  },
  {
    "url": "assets/js/38.js",
    "revision": "7b2af3a4f424a998fb74bbcd003414d2"
  },
  {
    "url": "assets/js/380.js",
    "revision": "e88ca27e777ca52c88ff2b06ccf427a5"
  },
  {
    "url": "assets/js/381.js",
    "revision": "0aa369a3788daf8ab76b7fc0766af1d6"
  },
  {
    "url": "assets/js/382.js",
    "revision": "841cc84430b57f3fb2b1db9243106101"
  },
  {
    "url": "assets/js/383.js",
    "revision": "907ffe3a24590aaa0af1398eba20d7b9"
  },
  {
    "url": "assets/js/384.js",
    "revision": "cb12ca060b383d0ddc4063d6d3441499"
  },
  {
    "url": "assets/js/385.js",
    "revision": "d71a3da71849975dea10cc5187e3cc9b"
  },
  {
    "url": "assets/js/386.js",
    "revision": "f800d417fb9038dab977bc009bfb8ad2"
  },
  {
    "url": "assets/js/387.js",
    "revision": "fac94dda21f722d7a5a7c46a081190c8"
  },
  {
    "url": "assets/js/388.js",
    "revision": "9a51bc0d26bd813555ddeff21be566c0"
  },
  {
    "url": "assets/js/389.js",
    "revision": "03a023b9e79d8cddbd0024d955c0d52b"
  },
  {
    "url": "assets/js/39.js",
    "revision": "046076c8095f5a2873e8fb87d2c76418"
  },
  {
    "url": "assets/js/390.js",
    "revision": "677009c2af0b7e52eff8070a5d2f7485"
  },
  {
    "url": "assets/js/391.js",
    "revision": "6714e8fe25e03ef0d81ef11fbfd76529"
  },
  {
    "url": "assets/js/392.js",
    "revision": "96e18b648776d046b601174024c362c5"
  },
  {
    "url": "assets/js/393.js",
    "revision": "75bb6c29d197a794639598d211ab098c"
  },
  {
    "url": "assets/js/394.js",
    "revision": "65580b9b1e9a737e96ff300f8a97f3ac"
  },
  {
    "url": "assets/js/395.js",
    "revision": "a30c45d865a52aac31e2f89e2e66f3d5"
  },
  {
    "url": "assets/js/396.js",
    "revision": "2025608ac870ef88f0414f607906e4fd"
  },
  {
    "url": "assets/js/397.js",
    "revision": "faef66a30962a9338ea6cf5dbc49834d"
  },
  {
    "url": "assets/js/398.js",
    "revision": "9947a2d413529803ed0abe5abd2e1fd4"
  },
  {
    "url": "assets/js/399.js",
    "revision": "7269ea9cd9dc7c9704d36dcd57b11f68"
  },
  {
    "url": "assets/js/4.js",
    "revision": "6709e6eaf8ccd53c0e62c872d934d40c"
  },
  {
    "url": "assets/js/40.js",
    "revision": "92af4312f72b200057259e4ab3e28bcf"
  },
  {
    "url": "assets/js/400.js",
    "revision": "5c1935d105a29e210fa0fd5f24e71fc6"
  },
  {
    "url": "assets/js/401.js",
    "revision": "c353cebeb770ef9f5eeef2aba1d09f53"
  },
  {
    "url": "assets/js/402.js",
    "revision": "8ddd97671977aa21540b5457f1e73c9d"
  },
  {
    "url": "assets/js/403.js",
    "revision": "408dc39e6abac4a72a4f69d5a69c7f35"
  },
  {
    "url": "assets/js/404.js",
    "revision": "2e85f327168b299cc11c4325d1eb588c"
  },
  {
    "url": "assets/js/405.js",
    "revision": "6348b2b2240a732f6d2b88c3de5f4e46"
  },
  {
    "url": "assets/js/406.js",
    "revision": "71b4c86703299e73b4c73438274bc3ae"
  },
  {
    "url": "assets/js/407.js",
    "revision": "e2a613d778f21d62e9a68e3755f9fa77"
  },
  {
    "url": "assets/js/408.js",
    "revision": "b1d68650e201d838ce8ef6c42ee11c42"
  },
  {
    "url": "assets/js/409.js",
    "revision": "c8d4199b5c4fffdd63a68be22e268623"
  },
  {
    "url": "assets/js/41.js",
    "revision": "47f9b28905f398c3c9efb07c6c93edbf"
  },
  {
    "url": "assets/js/410.js",
    "revision": "af10e1a5ea2f9d8eeae3a50ce7440600"
  },
  {
    "url": "assets/js/411.js",
    "revision": "ca8f2093a668f2ba73f8060aadd66edc"
  },
  {
    "url": "assets/js/412.js",
    "revision": "c609f83f2bfc692d11cae3a38695cfc4"
  },
  {
    "url": "assets/js/413.js",
    "revision": "ccb275efb56d3aff382e611ccc4e7d69"
  },
  {
    "url": "assets/js/414.js",
    "revision": "1e63d137615881a88f56cca3362091ba"
  },
  {
    "url": "assets/js/415.js",
    "revision": "2c5db4ddd82c36f2b26b50c3570bff07"
  },
  {
    "url": "assets/js/416.js",
    "revision": "135a2f0900b578be414246d06acabe7a"
  },
  {
    "url": "assets/js/417.js",
    "revision": "4a44611723db40f9b1fa8d766bb3cef6"
  },
  {
    "url": "assets/js/418.js",
    "revision": "b640f37bba297df5fa71fe507183ad04"
  },
  {
    "url": "assets/js/419.js",
    "revision": "4780165358884415db4aa124a2d18c1a"
  },
  {
    "url": "assets/js/42.js",
    "revision": "e898c8c234aafec82df2fbf58db64805"
  },
  {
    "url": "assets/js/420.js",
    "revision": "2c5f0a6da7dcc545a5e9f7c694be8fc2"
  },
  {
    "url": "assets/js/421.js",
    "revision": "c0808487b37ac0e0fe4ad62cea51a9fc"
  },
  {
    "url": "assets/js/422.js",
    "revision": "98e8d4b45c9f3bea637ffc07f43de2af"
  },
  {
    "url": "assets/js/423.js",
    "revision": "31da1bd7fdc1ea02fb5df77dd1a0758b"
  },
  {
    "url": "assets/js/424.js",
    "revision": "a234a91ba37998d3a350c8b80d55d42a"
  },
  {
    "url": "assets/js/425.js",
    "revision": "490b1fb1ef31cf9828978db77790cf98"
  },
  {
    "url": "assets/js/426.js",
    "revision": "7ed9fc447f020121d28a048b79d26b5d"
  },
  {
    "url": "assets/js/427.js",
    "revision": "73bb7094a83e2cb560c2d45e750b793f"
  },
  {
    "url": "assets/js/428.js",
    "revision": "1032eab70f5feec33db98fdafee4bfcf"
  },
  {
    "url": "assets/js/429.js",
    "revision": "239b62eb1e89330323126d3c790eff12"
  },
  {
    "url": "assets/js/43.js",
    "revision": "83ccb74a35de762ef5922e30a3279581"
  },
  {
    "url": "assets/js/430.js",
    "revision": "9a8602f510660f6a8d053dc828872ea0"
  },
  {
    "url": "assets/js/431.js",
    "revision": "6de20577e3d9c436ab32d7cd89d356d2"
  },
  {
    "url": "assets/js/432.js",
    "revision": "d8c08bd89def840ecd01c113688f9a56"
  },
  {
    "url": "assets/js/433.js",
    "revision": "858b98fc15e8e7823f0b5093d88e1ac2"
  },
  {
    "url": "assets/js/434.js",
    "revision": "f80dbe39dfdd50a46e04900920515300"
  },
  {
    "url": "assets/js/435.js",
    "revision": "85de6a921865f8e4de819b5fbfb3bd13"
  },
  {
    "url": "assets/js/436.js",
    "revision": "3f5249ce8466df5fdaf68fe34a86a3a6"
  },
  {
    "url": "assets/js/437.js",
    "revision": "9eb0a7d7920bc835ba3f2449a37ac8cf"
  },
  {
    "url": "assets/js/438.js",
    "revision": "6a34e98313186f813028e2d2311f00c9"
  },
  {
    "url": "assets/js/439.js",
    "revision": "dbf7786983895273c40cedc80bb108cc"
  },
  {
    "url": "assets/js/44.js",
    "revision": "b2ab2a61a459eff4ef33b1ae0d9f41de"
  },
  {
    "url": "assets/js/440.js",
    "revision": "47e1a800cc95253a73aa4058ddd26794"
  },
  {
    "url": "assets/js/441.js",
    "revision": "c2431cbd67c2536ef34d8a270607f3d9"
  },
  {
    "url": "assets/js/442.js",
    "revision": "f63cd7385a546e357962dce8a0bdc042"
  },
  {
    "url": "assets/js/443.js",
    "revision": "577062911329d8215e6c28603a2df3a1"
  },
  {
    "url": "assets/js/444.js",
    "revision": "b76428f003a2d44da574e2d59333f811"
  },
  {
    "url": "assets/js/445.js",
    "revision": "a430d0f605527ff9e5a9577f730a5279"
  },
  {
    "url": "assets/js/446.js",
    "revision": "c1617803672214b41206497e99fbb7e5"
  },
  {
    "url": "assets/js/447.js",
    "revision": "779c409c42a41946d2c78c9bbeba0075"
  },
  {
    "url": "assets/js/448.js",
    "revision": "fd8e45afd525db45c2573c393b4c9a86"
  },
  {
    "url": "assets/js/449.js",
    "revision": "f6c95258815be6f490671d98334181e1"
  },
  {
    "url": "assets/js/45.js",
    "revision": "7711ceeb342bb8185d8b01d80595c9ea"
  },
  {
    "url": "assets/js/450.js",
    "revision": "4e66f0a40613a05085c7a29b1b1aec51"
  },
  {
    "url": "assets/js/451.js",
    "revision": "d1789b4926d5f99f0c6835ea1b951cee"
  },
  {
    "url": "assets/js/452.js",
    "revision": "edead50539332d3bef579209aa56d53f"
  },
  {
    "url": "assets/js/453.js",
    "revision": "ada963c5d4e7e6425175cd267b5517cd"
  },
  {
    "url": "assets/js/454.js",
    "revision": "c057e09d8850f5d75a32a7ae5583c6bf"
  },
  {
    "url": "assets/js/455.js",
    "revision": "9c3c321338f9c0af2ba752548c5a7b4d"
  },
  {
    "url": "assets/js/456.js",
    "revision": "c1668a93f03dc4f7ad6067e9844b2127"
  },
  {
    "url": "assets/js/457.js",
    "revision": "f0dac6e7960d07c0a7ac9d256e5200f6"
  },
  {
    "url": "assets/js/458.js",
    "revision": "6ffce2ff5df21835271c3decae8367c7"
  },
  {
    "url": "assets/js/459.js",
    "revision": "fd8714dc89654840c606a9c2f4c8531f"
  },
  {
    "url": "assets/js/46.js",
    "revision": "b35bd6047c791531891905f64a3f1f93"
  },
  {
    "url": "assets/js/460.js",
    "revision": "992e8f064a36e2b3fc7df2b3bb1c6324"
  },
  {
    "url": "assets/js/461.js",
    "revision": "bed03d868adbb4e31b785feea3eed14b"
  },
  {
    "url": "assets/js/462.js",
    "revision": "aea508f64ef1f794a2124978407e563a"
  },
  {
    "url": "assets/js/463.js",
    "revision": "70c3d2e2508bb3634fd23be0bcdb40c1"
  },
  {
    "url": "assets/js/464.js",
    "revision": "ebecc0da5bcd71e5ced9e329032040db"
  },
  {
    "url": "assets/js/465.js",
    "revision": "b087187390e73f908537e5c90ac8f4b1"
  },
  {
    "url": "assets/js/466.js",
    "revision": "ea071ebf6cfe7e47b0c6fd6bf7ca77e3"
  },
  {
    "url": "assets/js/467.js",
    "revision": "195fe0e47844f62b64d0f67006895b94"
  },
  {
    "url": "assets/js/468.js",
    "revision": "9ae96b79acc85a6871e8e79ab0d22273"
  },
  {
    "url": "assets/js/469.js",
    "revision": "278755055b62a78fb8ca87bc9cfc9738"
  },
  {
    "url": "assets/js/47.js",
    "revision": "01abb926ee6ae94ab28f823b8c28ab70"
  },
  {
    "url": "assets/js/470.js",
    "revision": "0f7847b4ffacbf614d54d3e958aebefb"
  },
  {
    "url": "assets/js/471.js",
    "revision": "6851b77a1f8ed867116ad92a63611201"
  },
  {
    "url": "assets/js/472.js",
    "revision": "b4f3a27a357287deebf2f205ccdd2a23"
  },
  {
    "url": "assets/js/473.js",
    "revision": "a114aec0fd2020f27c86e03309c6ee16"
  },
  {
    "url": "assets/js/474.js",
    "revision": "d2c7d042e256e426e4e54613ca32318b"
  },
  {
    "url": "assets/js/475.js",
    "revision": "c6435d1ce271858b67b545e4ea7fb395"
  },
  {
    "url": "assets/js/476.js",
    "revision": "5599ae4891b4b76d5a8834e86b6da5ad"
  },
  {
    "url": "assets/js/477.js",
    "revision": "a8bfea7da4eeab8e29f0dffcf7211059"
  },
  {
    "url": "assets/js/478.js",
    "revision": "145850e8661b9657494db788fc9d766c"
  },
  {
    "url": "assets/js/479.js",
    "revision": "be83a0313c6d630158f16e923a133605"
  },
  {
    "url": "assets/js/48.js",
    "revision": "6170271e8884fbbf6d44bd0cccd96e53"
  },
  {
    "url": "assets/js/480.js",
    "revision": "ecaf5031fd3874d4de758c110c0f5f1b"
  },
  {
    "url": "assets/js/481.js",
    "revision": "bec147c4475e1742c55e375601e19a87"
  },
  {
    "url": "assets/js/482.js",
    "revision": "e50d8e974b5e60ed22e19921be072904"
  },
  {
    "url": "assets/js/483.js",
    "revision": "0b7502aff62e942ae28527cc05cf5518"
  },
  {
    "url": "assets/js/484.js",
    "revision": "9db6caf9601416ab1d3d56e00b53195f"
  },
  {
    "url": "assets/js/485.js",
    "revision": "05b2f2bf9feafc2537e514daab4566f0"
  },
  {
    "url": "assets/js/486.js",
    "revision": "76fc87acb8f7a745e65449a86465c161"
  },
  {
    "url": "assets/js/487.js",
    "revision": "a43240250fe27af1c784ecbd3dcf75c3"
  },
  {
    "url": "assets/js/488.js",
    "revision": "61f098b43d24fc7f0f5ae0874802eaa0"
  },
  {
    "url": "assets/js/489.js",
    "revision": "02e01748426f44e63331c4d92a8fdf89"
  },
  {
    "url": "assets/js/49.js",
    "revision": "5efc6b101c5000cdbc966fb7f39c65c5"
  },
  {
    "url": "assets/js/490.js",
    "revision": "15e2eafc2e034bf474601740652766b9"
  },
  {
    "url": "assets/js/491.js",
    "revision": "d88c54ec59c2c442785e5ac8ca67ae6b"
  },
  {
    "url": "assets/js/492.js",
    "revision": "74a38c9152db16691300167cce0b535a"
  },
  {
    "url": "assets/js/493.js",
    "revision": "72a22f3162f7e970271dd7e3fc3f66da"
  },
  {
    "url": "assets/js/494.js",
    "revision": "53c3c6aef1762838045ad354892a23e5"
  },
  {
    "url": "assets/js/495.js",
    "revision": "795ab00090204ff98c88d8efeab052a6"
  },
  {
    "url": "assets/js/496.js",
    "revision": "2688f78b1caea93c258f4e8034ee960c"
  },
  {
    "url": "assets/js/497.js",
    "revision": "0c68b1a44d16c3c8584548a22511c940"
  },
  {
    "url": "assets/js/498.js",
    "revision": "22e668f56b3576f59d544e3d77bfad7f"
  },
  {
    "url": "assets/js/499.js",
    "revision": "5c24e43259d14f5a2ea893385773e7a3"
  },
  {
    "url": "assets/js/5.js",
    "revision": "318025947e2f45702364c6e97af51562"
  },
  {
    "url": "assets/js/50.js",
    "revision": "516312b5d941ea57e4ef35ecb57b4f90"
  },
  {
    "url": "assets/js/500.js",
    "revision": "4f02e60147e54a85262b46619fc5404c"
  },
  {
    "url": "assets/js/501.js",
    "revision": "b5aa5f08f38df1ae883456c77a34c6f9"
  },
  {
    "url": "assets/js/502.js",
    "revision": "b9550cccef0e4ba41a6a3b3dfdd6c6a3"
  },
  {
    "url": "assets/js/503.js",
    "revision": "fd3314d4fb61ce88526710029968ee24"
  },
  {
    "url": "assets/js/504.js",
    "revision": "fd66ff994068695dfcc9e7f2d3bcc182"
  },
  {
    "url": "assets/js/505.js",
    "revision": "f9ce816503862faea210a5b8e9f37b65"
  },
  {
    "url": "assets/js/506.js",
    "revision": "66e0ac3101a834fd93894e6f6f59a460"
  },
  {
    "url": "assets/js/507.js",
    "revision": "aa122c93155f76712f1df3e2c4784bcd"
  },
  {
    "url": "assets/js/508.js",
    "revision": "5e9d53ab1fa56a7b43f5224e1d281150"
  },
  {
    "url": "assets/js/509.js",
    "revision": "b4878d564892cd6aa54d01ab31d13204"
  },
  {
    "url": "assets/js/51.js",
    "revision": "cb5c5c272e27ed645e12b7306f906d72"
  },
  {
    "url": "assets/js/510.js",
    "revision": "64f9180c6560a980e5c506fa80c8a950"
  },
  {
    "url": "assets/js/511.js",
    "revision": "9c3a576cf5f91b959016fd54c8b6cded"
  },
  {
    "url": "assets/js/512.js",
    "revision": "b7ae36f707b34591a6ac86d7c9450102"
  },
  {
    "url": "assets/js/513.js",
    "revision": "df0815b8463587a94c1fe466e4dafb21"
  },
  {
    "url": "assets/js/514.js",
    "revision": "5b5babd2924a046d33c6b4146ff15113"
  },
  {
    "url": "assets/js/515.js",
    "revision": "68a0cb49b16405cb3b8bb08981b655fb"
  },
  {
    "url": "assets/js/516.js",
    "revision": "74347f5962ad3903fd76cbb613abfce1"
  },
  {
    "url": "assets/js/517.js",
    "revision": "4da4e8e329e383d2285b40c9fce34acb"
  },
  {
    "url": "assets/js/518.js",
    "revision": "89a74aec8fd0a448cb0899c434f0e96d"
  },
  {
    "url": "assets/js/519.js",
    "revision": "1a9db34163bf174ec23b4dab4920379f"
  },
  {
    "url": "assets/js/52.js",
    "revision": "b3b3e94e3feed35d10385820ffa2da1a"
  },
  {
    "url": "assets/js/520.js",
    "revision": "39c1a56da0d8aed5ce5e78dd34a20e71"
  },
  {
    "url": "assets/js/521.js",
    "revision": "a5259dbd426354fe4174fd27e981b2a1"
  },
  {
    "url": "assets/js/522.js",
    "revision": "b4f641a1ca732df7483d8f44098e06f5"
  },
  {
    "url": "assets/js/523.js",
    "revision": "94bc844628778d96a522249577f69ac1"
  },
  {
    "url": "assets/js/524.js",
    "revision": "435ff9060e51484bacfda58b48d7b00c"
  },
  {
    "url": "assets/js/525.js",
    "revision": "0cdba5ddb86cd69f8769bc8c211b44f1"
  },
  {
    "url": "assets/js/526.js",
    "revision": "33fa2e3230b4f262147905a653744740"
  },
  {
    "url": "assets/js/527.js",
    "revision": "9be97ef5534f91fe53e3a9eaf251b409"
  },
  {
    "url": "assets/js/528.js",
    "revision": "a7e6a3da3871b751120ebda5dc05ad4a"
  },
  {
    "url": "assets/js/529.js",
    "revision": "684ea3702009b15e936427ad5b6feff3"
  },
  {
    "url": "assets/js/53.js",
    "revision": "6c2a5a568a111f6b677f7a262b162c47"
  },
  {
    "url": "assets/js/530.js",
    "revision": "e48c6f32c8494f819f0ed71f5c9dc46b"
  },
  {
    "url": "assets/js/531.js",
    "revision": "f8644e912869d777db3d212611dd324c"
  },
  {
    "url": "assets/js/532.js",
    "revision": "eca0ab51644982a39bb0855844df681f"
  },
  {
    "url": "assets/js/533.js",
    "revision": "ca62e877406c8c0f6a90402cc99f696e"
  },
  {
    "url": "assets/js/534.js",
    "revision": "c8eae4acd1863f25d1d9f862baa8765c"
  },
  {
    "url": "assets/js/535.js",
    "revision": "92ca1796fd64f364cd07d8546bae511f"
  },
  {
    "url": "assets/js/536.js",
    "revision": "c4f3bb5002677ca8e7ce95989574ef1a"
  },
  {
    "url": "assets/js/537.js",
    "revision": "1e1748073942a12c4dbb4c105eddeed1"
  },
  {
    "url": "assets/js/538.js",
    "revision": "d6369c27b78135b21143792286d73da1"
  },
  {
    "url": "assets/js/539.js",
    "revision": "fc71f753f040eb2b279887d0e9c9c890"
  },
  {
    "url": "assets/js/54.js",
    "revision": "e1560192c3c85a618046eaab4de101f2"
  },
  {
    "url": "assets/js/540.js",
    "revision": "2ba73d2347cdc0c99b78cbcf78dedf75"
  },
  {
    "url": "assets/js/541.js",
    "revision": "f84a46cd1ef23943034ea4b180796555"
  },
  {
    "url": "assets/js/542.js",
    "revision": "8f13d63988c06d05518f9321391cd8c8"
  },
  {
    "url": "assets/js/543.js",
    "revision": "3253bf2efbbb152295cc003f5ec77ebc"
  },
  {
    "url": "assets/js/544.js",
    "revision": "dfcb36e21e1b8b32dee676e970f43b0d"
  },
  {
    "url": "assets/js/545.js",
    "revision": "e46ee43ceeeecfad644c3a9226c6afdd"
  },
  {
    "url": "assets/js/546.js",
    "revision": "9ce6fa6c983f375ca64e62919c3392ea"
  },
  {
    "url": "assets/js/547.js",
    "revision": "cb60eaf0f37c8b550d3589ef5195635e"
  },
  {
    "url": "assets/js/548.js",
    "revision": "78d0a5a58515eaaf42f0d07cac46cf08"
  },
  {
    "url": "assets/js/549.js",
    "revision": "a0d6e684ccaef1ea8fce1c858e285711"
  },
  {
    "url": "assets/js/55.js",
    "revision": "b84154c6e9bd597490803e4698f14fd3"
  },
  {
    "url": "assets/js/550.js",
    "revision": "52a2a6695e9a296471b2f4f1e2a88bfc"
  },
  {
    "url": "assets/js/551.js",
    "revision": "3adc5a4c237fa2dbc4b967782d126b0c"
  },
  {
    "url": "assets/js/552.js",
    "revision": "22c7b1f7931234b17fff13e8e0c0b464"
  },
  {
    "url": "assets/js/553.js",
    "revision": "c054d9c5ee92cc31aed85442101300a8"
  },
  {
    "url": "assets/js/554.js",
    "revision": "64abaafb29247b92dc44e87eee6354cf"
  },
  {
    "url": "assets/js/555.js",
    "revision": "13561ce8ec690172288cbd4bc63cdeee"
  },
  {
    "url": "assets/js/556.js",
    "revision": "ffce317b751f7f1e3a360c7b7a210000"
  },
  {
    "url": "assets/js/557.js",
    "revision": "8fd9582e84151cea6c70196ab3969064"
  },
  {
    "url": "assets/js/558.js",
    "revision": "b654cf44886765cb7be0c81ec9c18238"
  },
  {
    "url": "assets/js/559.js",
    "revision": "3571c5b091f4bc49819b17eaaca72f73"
  },
  {
    "url": "assets/js/56.js",
    "revision": "c74bffff5205b3eaa35943fa5e31fca4"
  },
  {
    "url": "assets/js/560.js",
    "revision": "a2e1af29366a2493f7b3a54df7edb3c4"
  },
  {
    "url": "assets/js/561.js",
    "revision": "1314f8bfb7d4aeca2be5ac16244a6e9e"
  },
  {
    "url": "assets/js/562.js",
    "revision": "8073053882f6d72bb9c22930a5c4237a"
  },
  {
    "url": "assets/js/563.js",
    "revision": "d573d31b6c285620073c29234d1d5037"
  },
  {
    "url": "assets/js/564.js",
    "revision": "5e974c3597c192a61783d4e934aab2ca"
  },
  {
    "url": "assets/js/565.js",
    "revision": "4e6df69c38441a5f872777a690920752"
  },
  {
    "url": "assets/js/566.js",
    "revision": "520dd08a9f37a5ec23fe43a008d6b892"
  },
  {
    "url": "assets/js/567.js",
    "revision": "a076eb4efdd297f7850946ce1c712d1c"
  },
  {
    "url": "assets/js/568.js",
    "revision": "c587ead83220631862b32df33e3276ea"
  },
  {
    "url": "assets/js/569.js",
    "revision": "cb63f0cf564ee4a36e3db1ae30a9cbe5"
  },
  {
    "url": "assets/js/57.js",
    "revision": "0fc8e6f5d8629e76d99cb5e99d4cc470"
  },
  {
    "url": "assets/js/570.js",
    "revision": "7ff18599d45f05eefd6313364b06de23"
  },
  {
    "url": "assets/js/571.js",
    "revision": "c64e78fec7d92129241773a330df62b8"
  },
  {
    "url": "assets/js/572.js",
    "revision": "107fa3a20aeca2b87f7a018dad0525da"
  },
  {
    "url": "assets/js/573.js",
    "revision": "5ef52c6e87b4c0a6dd137e6ed1b86a8a"
  },
  {
    "url": "assets/js/574.js",
    "revision": "f178105b526b3213447d27b9465b13d3"
  },
  {
    "url": "assets/js/575.js",
    "revision": "c70e3dac33d46b02d4e91c17335ead16"
  },
  {
    "url": "assets/js/576.js",
    "revision": "c58b123f6c8d409fd95b02c0113bacd9"
  },
  {
    "url": "assets/js/577.js",
    "revision": "08a8e499fa8503d68b21fb19aba05bd6"
  },
  {
    "url": "assets/js/578.js",
    "revision": "63bd4e1c58b00b50d5fd6d9bcaa78a50"
  },
  {
    "url": "assets/js/579.js",
    "revision": "bfa6bfbe7d81a95fe81025f2d8930f22"
  },
  {
    "url": "assets/js/58.js",
    "revision": "c5161f4443155c932ada8e1db6030bad"
  },
  {
    "url": "assets/js/580.js",
    "revision": "7a710ce264e10881c0f9e97ec8e9a6ea"
  },
  {
    "url": "assets/js/581.js",
    "revision": "74cb10e60625df49d4c263235a18c768"
  },
  {
    "url": "assets/js/582.js",
    "revision": "e0e909d3310fd75b6c4a0b15322aa298"
  },
  {
    "url": "assets/js/583.js",
    "revision": "29efd8f813f309858b50b395bfa29b06"
  },
  {
    "url": "assets/js/59.js",
    "revision": "65bab1e4954f6af676ff9a4266a7fc6a"
  },
  {
    "url": "assets/js/6.js",
    "revision": "b158fc201f96521392d5d128adbfff3f"
  },
  {
    "url": "assets/js/60.js",
    "revision": "b830be06b8a9d7b24d54c1e5b472c51d"
  },
  {
    "url": "assets/js/61.js",
    "revision": "3be2d2ea4e0b5a8bc49e7b5201962fed"
  },
  {
    "url": "assets/js/62.js",
    "revision": "223ad38c3dcad03820e2368a6e0a21fd"
  },
  {
    "url": "assets/js/63.js",
    "revision": "0c8cfde3c9c3c0d051dcbc9c6b0146f8"
  },
  {
    "url": "assets/js/64.js",
    "revision": "ba747c7139f9deff5da31f3b80c9d944"
  },
  {
    "url": "assets/js/65.js",
    "revision": "226e016b576362bfea32c538a23118a3"
  },
  {
    "url": "assets/js/66.js",
    "revision": "c1a803a3b2992b01e06ba494989d7b3a"
  },
  {
    "url": "assets/js/67.js",
    "revision": "53f0efd3ef9c71a1d93a7d0d08b248ae"
  },
  {
    "url": "assets/js/68.js",
    "revision": "2b4729e9f46428f62deabd198b585e53"
  },
  {
    "url": "assets/js/69.js",
    "revision": "956034769a9d7c60e5256d276ccd68a0"
  },
  {
    "url": "assets/js/7.js",
    "revision": "f339930e8326a6246688e907ee029daa"
  },
  {
    "url": "assets/js/70.js",
    "revision": "82fa68449d8ed80db268d2aa8f2e513f"
  },
  {
    "url": "assets/js/71.js",
    "revision": "68ad020bb633c1cb5773b66969e4b408"
  },
  {
    "url": "assets/js/72.js",
    "revision": "a7ac20c2ddbad5ab7f29e7e2436afd0d"
  },
  {
    "url": "assets/js/73.js",
    "revision": "af5af0191154e87dfe048c4abed9d519"
  },
  {
    "url": "assets/js/74.js",
    "revision": "3374a381f91eb75b0cf24b7489566f3b"
  },
  {
    "url": "assets/js/75.js",
    "revision": "2b9211c6eafb3d0568ea2e91567ba2a5"
  },
  {
    "url": "assets/js/76.js",
    "revision": "84230607c8a8b4aaad25d7f1a57c7710"
  },
  {
    "url": "assets/js/77.js",
    "revision": "2f9e090aafa07ba5d2c3424d0ca44a15"
  },
  {
    "url": "assets/js/78.js",
    "revision": "cec0f31eb570ae556c7c0f68a92d3082"
  },
  {
    "url": "assets/js/79.js",
    "revision": "3139c02c51164241198940273151a219"
  },
  {
    "url": "assets/js/8.js",
    "revision": "12bf9d8c87e3bfceeaccd04d7c16f35e"
  },
  {
    "url": "assets/js/80.js",
    "revision": "099e39c9f39af10bbe8216b6da298a23"
  },
  {
    "url": "assets/js/81.js",
    "revision": "528bee4e598e0dd3b63a157c3f4773bb"
  },
  {
    "url": "assets/js/82.js",
    "revision": "7c4dc98deff9d2c15c58e9f81956138a"
  },
  {
    "url": "assets/js/83.js",
    "revision": "574d861bda4b577a289449a0d3cd14d6"
  },
  {
    "url": "assets/js/84.js",
    "revision": "5d6e93a93b1f1d23433c6378309a6680"
  },
  {
    "url": "assets/js/85.js",
    "revision": "a7071e16e1ccd9d95b3184adc646185e"
  },
  {
    "url": "assets/js/86.js",
    "revision": "696e5a8c6ec1c6b3b20bd8ee1e5e8947"
  },
  {
    "url": "assets/js/87.js",
    "revision": "0600f39310cc0ce062611c09ca7135a8"
  },
  {
    "url": "assets/js/88.js",
    "revision": "fd1412d01225f65bfbb2e962a4a96f16"
  },
  {
    "url": "assets/js/89.js",
    "revision": "7a8627d0fd80b5d09ab67bcb493d8c24"
  },
  {
    "url": "assets/js/9.js",
    "revision": "3c165b0ef2cd5a672a1945a107001307"
  },
  {
    "url": "assets/js/90.js",
    "revision": "f28d5d3a0dff248570eb147a17000768"
  },
  {
    "url": "assets/js/91.js",
    "revision": "1b418ed139a4df2edaf2d203322b0f3e"
  },
  {
    "url": "assets/js/92.js",
    "revision": "c09545dc6d5a7f5568b979cc03a00148"
  },
  {
    "url": "assets/js/93.js",
    "revision": "9a618e75dff0277f1b21958ef098df37"
  },
  {
    "url": "assets/js/94.js",
    "revision": "3a85f8cf9e8a15091e5b1a58cfffa0d7"
  },
  {
    "url": "assets/js/95.js",
    "revision": "69c53c67c1194ea810f30030e6de6678"
  },
  {
    "url": "assets/js/96.js",
    "revision": "78a675f6509714f1be29153693702236"
  },
  {
    "url": "assets/js/97.js",
    "revision": "456f5398a19d74aec069ea9365623fc2"
  },
  {
    "url": "assets/js/98.js",
    "revision": "6f91c642b6317533ec9e9089ad8e8f5e"
  },
  {
    "url": "assets/js/99.js",
    "revision": "eadbb3d2b2c7763c1d529c0e4ef121b4"
  },
  {
    "url": "assets/js/app.js",
    "revision": "3b6a208d159dbd596c965e7b0f7c0c95"
  },
  {
    "url": "assets/js/styles.js",
    "revision": "22f22b49cc901aa95826401f7ce0930c"
  },
  {
    "url": "blog/category/index.html",
    "revision": "8b36262a0f94985b9e14176b99f352ef"
  },
  {
    "url": "blog/code/artists/index.html",
    "revision": "26064b2a8cb325ba2a47db8a88327862"
  },
  {
    "url": "blog/code/asa.sbh.nz/index.html",
    "revision": "0af9a1770220415c4d6239a0d97ab257"
  },
  {
    "url": "blog/code/divider/index.html",
    "revision": "46f00bc008a62500efdc417b451edc2e"
  },
  {
    "url": "blog/code/first/index.html",
    "revision": "6bd8b76fb787c648c707ee7e36e9f220"
  },
  {
    "url": "blog/code/fishbarrel/index.html",
    "revision": "65c5ccb4e71ac97388cd9a521b5dc9c5"
  },
  {
    "url": "blog/code/indent/index.html",
    "revision": "cf63a1ca3695ed493f3bfe37825007ef"
  },
  {
    "url": "blog/code/index.html",
    "revision": "85453d8decd00ce46f58577c8032c2da"
  },
  {
    "url": "blog/code/ingoa.nz/index.html",
    "revision": "1ae4ca78cfdefdd8890a8d0d26ca4b28"
  },
  {
    "url": "blog/code/nzondemand/index.html",
    "revision": "48554de63f25d7c85773c51b00288c60"
  },
  {
    "url": "blog/code/picard/index.html",
    "revision": "584417eba479ff2269b7eed434ce54e9"
  },
  {
    "url": "blog/code/qr/index.html",
    "revision": "3a9ddb30411490c16738e91d159153cc"
  },
  {
    "url": "blog/code/rotx/index.html",
    "revision": "c3d15ef2e1ce467d3445c985b4546760"
  },
  {
    "url": "blog/code/tone/index.html",
    "revision": "d8a140b51e9d016c339153c0f486ca35"
  },
  {
    "url": "blog/code/website/index.html",
    "revision": "5e88d3cc8d25dbe02492213d6af6a18b"
  },
  {
    "url": "blog/code/website/route/index.html",
    "revision": "376cd0ea9194a80c39891b8b332464dc"
  },
  {
    "url": "blog/code/website/site/index.html",
    "revision": "dfba4d5cde457a59276f3ad84fb38392"
  },
  {
    "url": "blog/code/xmltv.co.nz/index.html",
    "revision": "d274d36b0ee89947c47ceed39b1473ce"
  },
  {
    "url": "blog/howto/index.html",
    "revision": "94ab2768a56c7d6148470f7f078cac2d"
  },
  {
    "url": "blog/howto/intel865/index.html",
    "revision": "2b81efb1470e37b152ee8eace2374827"
  },
  {
    "url": "blog/howto/nexentastor/index.html",
    "revision": "13c9e1fd3bcdf129a72a4dd4378991ad"
  },
  {
    "url": "blog/howto/pcloadletter/index.html",
    "revision": "b6a8ad2d1442e51f09de88132a0a432d"
  },
  {
    "url": "blog/howto/raid5/index.html",
    "revision": "832bf2301c8391fc37423b14f2cb772b"
  },
  {
    "url": "blog/index.html",
    "revision": "46eb197bad347050b1af777e2f2abece"
  },
  {
    "url": "blog/life/anotheryear/index.html",
    "revision": "2f95e79814604428a454ae2d2e7fc2ea"
  },
  {
    "url": "blog/life/birthday/index.html",
    "revision": "ed270a2b6d680e763ed3726c90ce1d3c"
  },
  {
    "url": "blog/life/blasphemy/index.html",
    "revision": "51a4460c16a1cb6c41e6a3b221d77210"
  },
  {
    "url": "blog/life/blogger/index.html",
    "revision": "230898bd8b135b26bed1cf197d988b0e"
  },
  {
    "url": "blog/life/blurry/index.html",
    "revision": "ac9ed25913d724b2863372a82ceeee8e"
  },
  {
    "url": "blog/life/domain/index.html",
    "revision": "66819c882e23a0ab1aeb41ae20c13ee5"
  },
  {
    "url": "blog/life/exams/index.html",
    "revision": "414805abec807f71bf4426f74754744e"
  },
  {
    "url": "blog/life/food/index.html",
    "revision": "5f6a6670dc5e6ae333c200274f47d09a"
  },
  {
    "url": "blog/life/glenview/index.html",
    "revision": "a5238dda10ee9d71a6b59989871da259"
  },
  {
    "url": "blog/life/headlines/index.html",
    "revision": "cbc3b0ffaad71b16f6a4253ef0758db5"
  },
  {
    "url": "blog/life/index.html",
    "revision": "ba4d95164c57b978babf9590e540051a"
  },
  {
    "url": "blog/life/jws/index.html",
    "revision": "3064c2976172e6703eb6bf0d211eafa0"
  },
  {
    "url": "blog/life/keyboard/index.html",
    "revision": "66caa892c4d96d211627571fde922e32"
  },
  {
    "url": "blog/life/lpi201/index.html",
    "revision": "b882c0b1c484a9a0b52616abd93179c9"
  },
  {
    "url": "blog/life/mashup/index.html",
    "revision": "608b0666ae3110079b017624a452a2e1"
  },
  {
    "url": "blog/life/motorweb/index.html",
    "revision": "9a9bf10047069dea85f3e21fe22f3112"
  },
  {
    "url": "blog/life/nxe/index.html",
    "revision": "81f9305dd349b120b6898c072ffc4aaf"
  },
  {
    "url": "blog/life/plates/index.html",
    "revision": "5061f0b2b244ae8e169ee1648152470d"
  },
  {
    "url": "blog/life/queenstown/index.html",
    "revision": "9b36df9dc12ca0ed30c404e7a997e80f"
  },
  {
    "url": "blog/life/racism/index.html",
    "revision": "ed299ea7e3ef66205e9cca5f394905f4"
  },
  {
    "url": "blog/life/roads/index.html",
    "revision": "cf5cccfd3e1fee4c1210a8fcd002da13"
  },
  {
    "url": "blog/life/roots/index.html",
    "revision": "6b1ff9d0edf5d701e5c9ed4054cc0ed2"
  },
  {
    "url": "blog/life/scare/index.html",
    "revision": "6ed96e37f0a9633358ef78002e0a0dbe"
  },
  {
    "url": "blog/life/scary/index.html",
    "revision": "494db5a550310aca614d8dcd7e487ffa"
  },
  {
    "url": "blog/life/seti/index.html",
    "revision": "e0198489acbaa80d0b1f54c69bb72774"
  },
  {
    "url": "blog/life/skeptical/index.html",
    "revision": "d07552aa6ac9cec7ff8908b8c46e54bb"
  },
  {
    "url": "blog/life/skepticzone/index.html",
    "revision": "6bfa7b393c77eb0275cfffb8e0c2db2e"
  },
  {
    "url": "blog/life/spam/index.html",
    "revision": "2f557f5512babdf03b0de3f0f7806b1e"
  },
  {
    "url": "blog/life/trademe/index.html",
    "revision": "114b9254f894d8a1f80bcba6e2559285"
  },
  {
    "url": "blog/life/unforeseen/index.html",
    "revision": "bd64b56b95fe2fe67e695fc9e662eaa2"
  },
  {
    "url": "blog/life/wobbly/index.html",
    "revision": "ca31946859a56d261df8ea90271cbfc1"
  },
  {
    "url": "blog/projects/airbag/index.html",
    "revision": "b2d85b47645a602e2ad19a0108f48dd5"
  },
  {
    "url": "blog/projects/ambilight/index.html",
    "revision": "38f0e16becb92b2e23bc982231b9b377"
  },
  {
    "url": "blog/projects/automation/index.html",
    "revision": "0a1d1c5468f8580dc074dad13e55ba04"
  },
  {
    "url": "blog/projects/eyes/index.html",
    "revision": "b9cf13dc96610c2e252da0c0a651a9f9"
  },
  {
    "url": "blog/projects/glitch/index.html",
    "revision": "d0641b0625d649c69820c3e221741e07"
  },
  {
    "url": "blog/projects/index.html",
    "revision": "87db1c0c701ac7254a356cf053833602"
  },
  {
    "url": "blog/projects/it100/index.html",
    "revision": "c7b86bd21d749bad28d9f7d3159edc3e"
  },
  {
    "url": "blog/projects/microscope/index.html",
    "revision": "bb509cfb6747bcff8e22e40ab64d67b1"
  },
  {
    "url": "blog/projects/mirror/index.html",
    "revision": "8e6e79d3843175301fa3015d6ba763f1"
  },
  {
    "url": "blog/projects/picture/index.html",
    "revision": "27b0d0ad31aba932dd4c9370c400d183"
  },
  {
    "url": "blog/projects/pizza/index.html",
    "revision": "4b9ce2f726a0765b6af312d9bb2638a1"
  },
  {
    "url": "blog/projects/podcast/index.html",
    "revision": "c82263b8bceb288650671f6cec2aa27e"
  },
  {
    "url": "blog/projects/reflow/index.html",
    "revision": "58606d3d4b9251dffd8be5def70a4b95"
  },
  {
    "url": "blog/projects/sandbox/index.html",
    "revision": "b56d86a1d196ce460366d354fd638c9c"
  },
  {
    "url": "blog/projects/screens/index.html",
    "revision": "15dd90b83b3bd8398aa48ae3bcea24a1"
  },
  {
    "url": "blog/projects/sky/index.html",
    "revision": "b3736b6961c2423e471c077c65546ead"
  },
  {
    "url": "blog/projects/starwars/index.html",
    "revision": "3363aa9205d112997735afe1a39b83e4"
  },
  {
    "url": "blog/projects/xbox/index.html",
    "revision": "92f2518b962c379f7553e8533f75bdaf"
  },
  {
    "url": "blog/random/addresses/index.html",
    "revision": "6a24c2a3083f4f382f3408868c273131"
  },
  {
    "url": "blog/random/alphabet/index.html",
    "revision": "41b76357e89ae832e9ac96861e314559"
  },
  {
    "url": "blog/random/astrology/index.html",
    "revision": "3530f639760f5345562ee2c3e6f44f70"
  },
  {
    "url": "blog/random/chicken/index.html",
    "revision": "6bc7dc326a1eb8142f16bff90d960d05"
  },
  {
    "url": "blog/random/dns/index.html",
    "revision": "66b5eef4fe0f15222359dd35b2ea4ce2"
  },
  {
    "url": "blog/random/evp/index.html",
    "revision": "66b4f62494bd967dedcc5737204d2dac"
  },
  {
    "url": "blog/random/flip/index.html",
    "revision": "268279eeff245bea7be5dcb50f67d445"
  },
  {
    "url": "blog/random/honeychurch/index.html",
    "revision": "d5d50c4ddb26c62912f364fd40025f72"
  },
  {
    "url": "blog/random/index.html",
    "revision": "88c9d5ebee43e30d0e6fb416bbcecbd0"
  },
  {
    "url": "blog/random/lottery/index.html",
    "revision": "031c24c181ac457360a2873cbac65ca8"
  },
  {
    "url": "blog/random/music/index.html",
    "revision": "f6dc446e21f7605ea397e1c943d74368"
  },
  {
    "url": "blog/random/octal/index.html",
    "revision": "b9a656f49e69d98e31375fe15067e6af"
  },
  {
    "url": "blog/random/os/index.html",
    "revision": "84f997cad15507689ff86bf3c01d7ad8"
  },
  {
    "url": "blog/random/propellers/index.html",
    "revision": "1eb4b0df0668588a511fa0026048eea5"
  },
  {
    "url": "blog/random/robux/index.html",
    "revision": "a3c7bc46c0540e5c00bb5a60a21352a4"
  },
  {
    "url": "blog/random/super/index.html",
    "revision": "97b9a651bd808750cab5e499dc86f5c7"
  },
  {
    "url": "blog/random/times/index.html",
    "revision": "67d29d52d62cd18f8a4dfd8e78122ca7"
  },
  {
    "url": "blog/random/travel/index.html",
    "revision": "8c947b7ca0fe855146df248e7b72308a"
  },
  {
    "url": "blog/random/wilhelm/index.html",
    "revision": "2333f60db567565075cf1a43218b2981"
  },
  {
    "url": "blog/random/year/index.html",
    "revision": "effec652166d7c339939c591a64dcd17"
  },
  {
    "url": "blog/skepticism/2015/08/16/asa/index.html",
    "revision": "914ea3cb838be7fc255912f14b1a746d"
  },
  {
    "url": "blog/skepticism/2015/08/16/awards/index.html",
    "revision": "ac54aced4f6ac50a9d717e54b2e44b5d"
  },
  {
    "url": "blog/skepticism/2015/08/16/bravo/index.html",
    "revision": "e988154de81836f236aa5ff1b3190834"
  },
  {
    "url": "blog/skepticism/2015/08/16/index.html",
    "revision": "e9966ed39f4ab68e9f0c66849f9de2b8"
  },
  {
    "url": "blog/skepticism/2015/08/16/jim/index.html",
    "revision": "b27f2b963579e503e1dbf16560128ea8"
  },
  {
    "url": "blog/skepticism/2015/08/16/naholo/index.html",
    "revision": "1c42ddb381e9b7446a0ae57489741cbc"
  },
  {
    "url": "blog/skepticism/2015/08/16/resene/index.html",
    "revision": "bf1e51abf75e52464875e2e19d2dad98"
  },
  {
    "url": "blog/skepticism/2015/08/index.html",
    "revision": "1246c42e362e8ad3e99d61668fabae2d"
  },
  {
    "url": "blog/skepticism/2015/09/20/gop/index.html",
    "revision": "bcecf7bbbe75e1b051465cca7607010e"
  },
  {
    "url": "blog/skepticism/2015/09/20/ignobel/index.html",
    "revision": "43367bc7cad3d6b68cba477948d49d5c"
  },
  {
    "url": "blog/skepticism/2015/09/20/index.html",
    "revision": "a34ed3e2f7bd04be781642a1cc1f0ad0"
  },
  {
    "url": "blog/skepticism/2015/09/20/supplements/index.html",
    "revision": "df204a35cf49867d88d64049d06af3e7"
  },
  {
    "url": "blog/skepticism/2015/09/27/ayahuasca/index.html",
    "revision": "722fa6f3d2719952a916971a7122836b"
  },
  {
    "url": "blog/skepticism/2015/09/27/drought/index.html",
    "revision": "799b8458849af40ccc14d9f52eeb8dfd"
  },
  {
    "url": "blog/skepticism/2015/09/27/index.html",
    "revision": "067fb0d2885ac86659d08c441bab97c8"
  },
  {
    "url": "blog/skepticism/2015/09/27/lama/index.html",
    "revision": "814b1e8e45fa9f39215a2dcf2d7f0daf"
  },
  {
    "url": "blog/skepticism/2015/09/27/moon/index.html",
    "revision": "90764b3ff8bf7b8370c2b61d080c6275"
  },
  {
    "url": "blog/skepticism/2015/09/27/scan/index.html",
    "revision": "7ae181ec09e91b72bb1cf71682db120c"
  },
  {
    "url": "blog/skepticism/2015/09/index.html",
    "revision": "6f7dc6a225061e94c9ab915d4002cad9"
  },
  {
    "url": "blog/skepticism/2015/10/04/ghost/index.html",
    "revision": "d64fb3a91ef53d67984ec81b97a3a04e"
  },
  {
    "url": "blog/skepticism/2015/10/04/haka/index.html",
    "revision": "0e1012cc9411b2a4f88b92d188a51dbc"
  },
  {
    "url": "blog/skepticism/2015/10/04/index.html",
    "revision": "dbd8dc4cd7ef236d2c4ae18ade8654ac"
  },
  {
    "url": "blog/skepticism/2015/10/04/mars/index.html",
    "revision": "539695f2772ddfbb2b407d6ffbc08491"
  },
  {
    "url": "blog/skepticism/2015/10/04/pharmacy/index.html",
    "revision": "53fc8fd77915b588a7026f8db3fbd5c9"
  },
  {
    "url": "blog/skepticism/2015/10/04/prostate/index.html",
    "revision": "889fb8ae299627d0e72ae089f93c0c93"
  },
  {
    "url": "blog/skepticism/2015/10/11/armageddon/index.html",
    "revision": "04b626d78d2f355e6c7693bfc33f3da7"
  },
  {
    "url": "blog/skepticism/2015/10/11/climate/index.html",
    "revision": "d5afd4a3ea0cfc653568c8257ead94fd"
  },
  {
    "url": "blog/skepticism/2015/10/11/ghost/index.html",
    "revision": "d90a7d4a3f5612eb51d684ab4d102e55"
  },
  {
    "url": "blog/skepticism/2015/10/11/index.html",
    "revision": "80dc0d1d1be90667a7613b0071ae6e6a"
  },
  {
    "url": "blog/skepticism/2015/10/11/magnesleep/index.html",
    "revision": "0a7216697152d5b7c23029aa390f5c4f"
  },
  {
    "url": "blog/skepticism/2015/10/11/nhs/index.html",
    "revision": "4059a306871571534a48d08271af59b2"
  },
  {
    "url": "blog/skepticism/2015/10/11/prophet/index.html",
    "revision": "88c423d6fd730afe3d9f041adadbd7e3"
  },
  {
    "url": "blog/skepticism/2015/10/index.html",
    "revision": "505e1c0f4b06c01299e077d9ec4df201"
  },
  {
    "url": "blog/skepticism/2015/11/15/end/index.html",
    "revision": "a6188ff95fe21c0ab635f679ab88705a"
  },
  {
    "url": "blog/skepticism/2015/11/15/index.html",
    "revision": "ddc390a6a61a300a421b08f5c6434c97"
  },
  {
    "url": "blog/skepticism/2015/11/index.html",
    "revision": "ce14eb6919b318c55c8cced760870a90"
  },
  {
    "url": "blog/skepticism/2015/12/13/astrology/index.html",
    "revision": "132b6172faea430387ea57994b03a362"
  },
  {
    "url": "blog/skepticism/2015/12/13/cancer/index.html",
    "revision": "bf3034c88b5e6194aec07c869cd58884"
  },
  {
    "url": "blog/skepticism/2015/12/13/chickenpox/index.html",
    "revision": "548b68942e595a6c9a6bd46ffdd03102"
  },
  {
    "url": "blog/skepticism/2015/12/13/index.html",
    "revision": "e3218139c220e3f1ff9ceea7b6242acc"
  },
  {
    "url": "blog/skepticism/2015/12/13/osteopath/index.html",
    "revision": "d8a63d2979567d54499a20380d36d8b6"
  },
  {
    "url": "blog/skepticism/2015/12/13/priest/index.html",
    "revision": "dc7c7b73f8667789802ae5ca8a4779fb"
  },
  {
    "url": "blog/skepticism/2015/12/13/psychic/index.html",
    "revision": "9bb5c57d60ac53e96df5d245f1f6f6c2"
  },
  {
    "url": "blog/skepticism/2015/12/13/vaccines/index.html",
    "revision": "80174f7aa047d675861d62a46fa2cd18"
  },
  {
    "url": "blog/skepticism/2015/12/index.html",
    "revision": "6a15b411cb1f15b9c59d06fa291e9008"
  },
  {
    "url": "blog/skepticism/2015/index.html",
    "revision": "910db76c6d1f0667260d922d4ee4a88e"
  },
  {
    "url": "blog/skepticism/2016/02/07/antioxidant/index.html",
    "revision": "3710629670784d08f45a20b2c6945a0a"
  },
  {
    "url": "blog/skepticism/2016/02/07/index.html",
    "revision": "097a558855667b78a88b9227a5dd7f46"
  },
  {
    "url": "blog/skepticism/2016/02/07/kfc/index.html",
    "revision": "7c5fe335b1c5434f3abc02809907d3f8"
  },
  {
    "url": "blog/skepticism/2016/02/07/ph/index.html",
    "revision": "bfbc64b220dc90e3c0d9b1c9732d12a0"
  },
  {
    "url": "blog/skepticism/2016/02/07/sandy/index.html",
    "revision": "e04e8939b8670d52b54d487dd6e4658f"
  },
  {
    "url": "blog/skepticism/2016/02/07/sarfati/index.html",
    "revision": "2f64e77119e85760d52ec93a58bffa4b"
  },
  {
    "url": "blog/skepticism/2016/02/07/trump/index.html",
    "revision": "fd140e04af9d8793877ae8dfb97583c2"
  },
  {
    "url": "blog/skepticism/2016/02/14/coins/index.html",
    "revision": "385d6b623ed4f667dcd592a31f679b11"
  },
  {
    "url": "blog/skepticism/2016/02/14/fast/index.html",
    "revision": "5516ba78f003303025b8a85519bc090c"
  },
  {
    "url": "blog/skepticism/2016/02/14/fluoride/index.html",
    "revision": "7d45675e52a6c38b1a924c46ce41d12b"
  },
  {
    "url": "blog/skepticism/2016/02/14/icke/index.html",
    "revision": "60d3a20bf30941ca8da01c1d1530cc69"
  },
  {
    "url": "blog/skepticism/2016/02/14/index.html",
    "revision": "018b081d3a479426008339f216f66265"
  },
  {
    "url": "blog/skepticism/2016/02/14/yeti/index.html",
    "revision": "2df293762b4c21088005e70b28f47182"
  },
  {
    "url": "blog/skepticism/2016/02/21/homeopathy/index.html",
    "revision": "1a6fbaf288adfbc306c59528b9c746f2"
  },
  {
    "url": "blog/skepticism/2016/02/21/index.html",
    "revision": "16322a300b90cd822ff9ca93573be8a0"
  },
  {
    "url": "blog/skepticism/2016/02/21/monster/index.html",
    "revision": "62c7b55c3719b8efb292f34ffdc8dc72"
  },
  {
    "url": "blog/skepticism/2016/02/21/scalia/index.html",
    "revision": "4cb75a719cd736bbfb97461cfd6e77b6"
  },
  {
    "url": "blog/skepticism/2016/02/21/shane/index.html",
    "revision": "d516f245b30389eba4e62e24016bc09c"
  },
  {
    "url": "blog/skepticism/2016/02/21/texas/index.html",
    "revision": "b1738dfb694edffc1d0e2644d4d611bb"
  },
  {
    "url": "blog/skepticism/2016/02/28/acupuncture/index.html",
    "revision": "27e928ebed31d31b2d92ca3f7941ea4d"
  },
  {
    "url": "blog/skepticism/2016/02/28/fsm/index.html",
    "revision": "957611ca7df42424b9d941d88560f179"
  },
  {
    "url": "blog/skepticism/2016/02/28/index.html",
    "revision": "cdb744d800b71826998543711f347e29"
  },
  {
    "url": "blog/skepticism/2016/02/28/iv/index.html",
    "revision": "c9d7f047703864a0056201bf856aa910"
  },
  {
    "url": "blog/skepticism/2016/02/28/natural/index.html",
    "revision": "ccd12ef227b301716055c4e9192b42f0"
  },
  {
    "url": "blog/skepticism/2016/02/28/talc/index.html",
    "revision": "c17c1e3ca3d81136190c4c33f1e399e2"
  },
  {
    "url": "blog/skepticism/2016/02/index.html",
    "revision": "9a0942633eacf64fdda0cf1cb72c871f"
  },
  {
    "url": "blog/skepticism/2016/03/13/herbs/index.html",
    "revision": "0b64c9a17bf13c6c44821c02b50b6377"
  },
  {
    "url": "blog/skepticism/2016/03/13/index.html",
    "revision": "922604fe5ec6fae18482508987074116"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandala/index.html",
    "revision": "f39f8e72f90fd433ba856915628d6536"
  },
  {
    "url": "blog/skepticism/2016/03/13/mandela/index.html",
    "revision": "410485f28a0b755e0f087f2565fcd207"
  },
  {
    "url": "blog/skepticism/2016/03/13/spray/index.html",
    "revision": "ed566dd438d9543adb56f41588ce31a5"
  },
  {
    "url": "blog/skepticism/2016/03/index.html",
    "revision": "7d991faa827c9494bc7ada6ce84d63a0"
  },
  {
    "url": "blog/skepticism/2016/04/17/charity/index.html",
    "revision": "75621a986ea4c94b3fc7db4e261aa907"
  },
  {
    "url": "blog/skepticism/2016/04/17/chiro/index.html",
    "revision": "f07fe8994f596aeb1726b4c652d8513b"
  },
  {
    "url": "blog/skepticism/2016/04/17/fluoride/index.html",
    "revision": "c271386f9332e0d111fdf77344ddd85c"
  },
  {
    "url": "blog/skepticism/2016/04/17/index.html",
    "revision": "0aeb958b59e57264c1983f41223f6e51"
  },
  {
    "url": "blog/skepticism/2016/04/17/lotto/index.html",
    "revision": "f4d09063f3d013c467f0ff4ff2d39c16"
  },
  {
    "url": "blog/skepticism/2016/04/17/mind/index.html",
    "revision": "3ba371e40cae55ed355cafbdaaf05127"
  },
  {
    "url": "blog/skepticism/2016/04/17/whooping/index.html",
    "revision": "4a0eea0dcaf79fbfca13c3f63ae23154"
  },
  {
    "url": "blog/skepticism/2016/04/index.html",
    "revision": "12de0c842b75f643820a09411470b046"
  },
  {
    "url": "blog/skepticism/2016/06/05/1080/index.html",
    "revision": "aeeedf52aa5e6a175b90084cb71cebd9"
  },
  {
    "url": "blog/skepticism/2016/06/05/acupuncture/index.html",
    "revision": "2c08ed6b5c5cf2175ed8dabfabd9a5d6"
  },
  {
    "url": "blog/skepticism/2016/06/05/family/index.html",
    "revision": "b0ec811fdcb31365910e8fd109ad039e"
  },
  {
    "url": "blog/skepticism/2016/06/05/index.html",
    "revision": "40f2d496bd81c231dc693ba58549e596"
  },
  {
    "url": "blog/skepticism/2016/06/05/limbaugh/index.html",
    "revision": "4a80bea2d6d8f31df2a1a145653be6e1"
  },
  {
    "url": "blog/skepticism/2016/06/12/bobby/index.html",
    "revision": "d947c602a2fc4a8e5462f0bb5e68ad5e"
  },
  {
    "url": "blog/skepticism/2016/06/12/climate/index.html",
    "revision": "519085fdac6fd5e2d60271d0e0103797"
  },
  {
    "url": "blog/skepticism/2016/06/12/index.html",
    "revision": "721ad8d6a186e642b2f755c7a84a6c0e"
  },
  {
    "url": "blog/skepticism/2016/06/12/pugh/index.html",
    "revision": "2671f03ee022967d68d3393ffbf51640"
  },
  {
    "url": "blog/skepticism/2016/06/12/savage/index.html",
    "revision": "cc721369704eb59551e3b8c494686598"
  },
  {
    "url": "blog/skepticism/2016/06/12/sawdust/index.html",
    "revision": "ade01ea56372253dc5a632b36919a3d6"
  },
  {
    "url": "blog/skepticism/2016/06/19/beauty/index.html",
    "revision": "89f63200551828cfbfccef6018b540ac"
  },
  {
    "url": "blog/skepticism/2016/06/19/bilderberg/index.html",
    "revision": "43964c6aa222ff7e73daa0994856a471"
  },
  {
    "url": "blog/skepticism/2016/06/19/cyf/index.html",
    "revision": "84ac2388a58a90ce75c6cb910d16dfda"
  },
  {
    "url": "blog/skepticism/2016/06/19/holt/index.html",
    "revision": "8237ad337589ef2aca44aad0c0e754d9"
  },
  {
    "url": "blog/skepticism/2016/06/19/index.html",
    "revision": "3ae131035099dfb61e75a03d9dada23b"
  },
  {
    "url": "blog/skepticism/2016/06/19/silver/index.html",
    "revision": "ff03a99264ae83d70ae703549f29ca90"
  },
  {
    "url": "blog/skepticism/2016/06/19/ufo/index.html",
    "revision": "2ab6576f8ccb4f65ec2e94bd1a4ab581"
  },
  {
    "url": "blog/skepticism/2016/06/26/homeopathy/index.html",
    "revision": "c47e6b9db9207562552b2787698637dc"
  },
  {
    "url": "blog/skepticism/2016/06/26/index.html",
    "revision": "6ca8532d1c0d47b326593e00469d1163"
  },
  {
    "url": "blog/skepticism/2016/06/26/robbins/index.html",
    "revision": "c0435e2d1849b0631ca51bfa87ceda5d"
  },
  {
    "url": "blog/skepticism/2016/06/26/selfies/index.html",
    "revision": "24780a4929ae65ed8a467b3270833f24"
  },
  {
    "url": "blog/skepticism/2016/06/26/silver/index.html",
    "revision": "1f964f1531ef1e15abe8dfac6e109e03"
  },
  {
    "url": "blog/skepticism/2016/06/26/ufos/index.html",
    "revision": "c429080c75f0a005d5fc31a6f322a7df"
  },
  {
    "url": "blog/skepticism/2016/06/index.html",
    "revision": "b2e91e9d80e5dfe23974f42e053d7f21"
  },
  {
    "url": "blog/skepticism/2016/07/03/glyphosate/index.html",
    "revision": "5b42f7e6159a48d288b27ff8f3036eff"
  },
  {
    "url": "blog/skepticism/2016/07/03/gmo/index.html",
    "revision": "665d35b799882f9adb4ddab113fd1899"
  },
  {
    "url": "blog/skepticism/2016/07/03/index.html",
    "revision": "7ce105c651d15448417e18716dab3b16"
  },
  {
    "url": "blog/skepticism/2016/07/03/jail/index.html",
    "revision": "ff7848af0d150c15db1287b2fa962b41"
  },
  {
    "url": "blog/skepticism/2016/07/03/ken/index.html",
    "revision": "5e6815158831eda0d744d9755280b2bd"
  },
  {
    "url": "blog/skepticism/2016/07/10/ark/index.html",
    "revision": "9936773d5d884f8451c9d02f7f296b09"
  },
  {
    "url": "blog/skepticism/2016/07/10/bee/index.html",
    "revision": "84d71bdbd530d4fb06ae1beafcc61adf"
  },
  {
    "url": "blog/skepticism/2016/07/10/index.html",
    "revision": "720d2d5fc8e6a10fa2973c81d6fd0297"
  },
  {
    "url": "blog/skepticism/2016/07/10/lottery/index.html",
    "revision": "546d817427cb2a12798819cbcf9e6ebb"
  },
  {
    "url": "blog/skepticism/2016/07/10/murder/index.html",
    "revision": "6de000ac97c11ffb5de1f4c03ac53777"
  },
  {
    "url": "blog/skepticism/2016/07/17/dogs/index.html",
    "revision": "87a956416f666d2d4deb48031ac5ca98"
  },
  {
    "url": "blog/skepticism/2016/07/17/fsm/index.html",
    "revision": "1a3612eac33f837c1c1b7baabb91844b"
  },
  {
    "url": "blog/skepticism/2016/07/17/fyi/index.html",
    "revision": "b5b435823e51799ca44b2def7372e587"
  },
  {
    "url": "blog/skepticism/2016/07/17/index.html",
    "revision": "a7b8e646120fa046efd308e9f814f522"
  },
  {
    "url": "blog/skepticism/2016/07/17/natural/index.html",
    "revision": "e7755f050d3177ae7c77cd075412e0a9"
  },
  {
    "url": "blog/skepticism/2016/07/17/pokemon/index.html",
    "revision": "a8a8dfd27ca87e37b0bb85cef4d33380"
  },
  {
    "url": "blog/skepticism/2016/07/index.html",
    "revision": "1938494b25d8920ee22c3162404ea5cb"
  },
  {
    "url": "blog/skepticism/2016/08/07/icke/index.html",
    "revision": "b90b8595e4dae2cdecb313bbbcc2128f"
  },
  {
    "url": "blog/skepticism/2016/08/07/index.html",
    "revision": "21b9f0643dce857b1a558c8cff7ccc32"
  },
  {
    "url": "blog/skepticism/2016/08/21/brian/index.html",
    "revision": "a5c22aa9afded179d1526bfecc3552dd"
  },
  {
    "url": "blog/skepticism/2016/08/21/chlorine/index.html",
    "revision": "312c83e62423dbfb2dd5af4bae7a556d"
  },
  {
    "url": "blog/skepticism/2016/08/21/index.html",
    "revision": "5831dd3975cb5692375262975b5f7de9"
  },
  {
    "url": "blog/skepticism/2016/08/21/murder/index.html",
    "revision": "52c04269a8b7e9ea74139c51f16c51cb"
  },
  {
    "url": "blog/skepticism/2016/08/21/superfoods/index.html",
    "revision": "0e4b8f3b1e271f353a806e6e19e454d6"
  },
  {
    "url": "blog/skepticism/2016/08/21/witch/index.html",
    "revision": "9d64baf2ffec698e373ac288cf6b1b78"
  },
  {
    "url": "blog/skepticism/2016/08/28/alcohol/index.html",
    "revision": "2c6052d5ca0a1a42404699cfef126b6b"
  },
  {
    "url": "blog/skepticism/2016/08/28/chiro/index.html",
    "revision": "e76a1c90ebc9e50919a780fad343f835"
  },
  {
    "url": "blog/skepticism/2016/08/28/index.html",
    "revision": "2a262e8706f06b55b8a4f1b122befff7"
  },
  {
    "url": "blog/skepticism/2016/08/28/processed/index.html",
    "revision": "2999ea45d722a73c2883c9cb0aa1f091"
  },
  {
    "url": "blog/skepticism/2016/08/28/sbh/index.html",
    "revision": "35928c6f8f4c9437a0f8517ab1f64ad1"
  },
  {
    "url": "blog/skepticism/2016/08/index.html",
    "revision": "2b75a66ead5f2d3ae960ffc206beddeb"
  },
  {
    "url": "blog/skepticism/2016/09/18/altruism/index.html",
    "revision": "c1380c3e13f6ab2384c44377171bdf42"
  },
  {
    "url": "blog/skepticism/2016/09/18/better/index.html",
    "revision": "35544b245f6aa24b522cb8176744c67e"
  },
  {
    "url": "blog/skepticism/2016/09/18/homeopathy/index.html",
    "revision": "d149f52659755970c9d8d6b6e6d7d5b0"
  },
  {
    "url": "blog/skepticism/2016/09/18/index.html",
    "revision": "749eff94c33738fdf4e89b7d815a86e9"
  },
  {
    "url": "blog/skepticism/2016/09/18/nonsense/index.html",
    "revision": "6d21929b996bb011ba6c0b81b440042d"
  },
  {
    "url": "blog/skepticism/2016/09/18/trump/index.html",
    "revision": "1a9aefe85bd536514b84edd3adca7296"
  },
  {
    "url": "blog/skepticism/2016/09/25/clinic/index.html",
    "revision": "342a13bb44ab4e09fcb13d27eb9e575e"
  },
  {
    "url": "blog/skepticism/2016/09/25/fluoride/index.html",
    "revision": "0df7ceb4f62a952a04dca0632388cebe"
  },
  {
    "url": "blog/skepticism/2016/09/25/homeopathy/index.html",
    "revision": "adfc38c2a1825890000c1f2f7b30e43f"
  },
  {
    "url": "blog/skepticism/2016/09/25/index.html",
    "revision": "8bfd2acefeb14c9b8aa25c50f6d522d9"
  },
  {
    "url": "blog/skepticism/2016/09/25/murder/index.html",
    "revision": "eb8260aa182957c01ea2870c5f2aae67"
  },
  {
    "url": "blog/skepticism/2016/09/index.html",
    "revision": "7e28ccc028a082e336d1e43d92cfd9cc"
  },
  {
    "url": "blog/skepticism/2016/10/21/bigfoot/index.html",
    "revision": "fcfe3e584266ebdbf8e2095253893f13"
  },
  {
    "url": "blog/skepticism/2016/10/21/breasts/index.html",
    "revision": "78e4deadab419aa959494dd7f967e140"
  },
  {
    "url": "blog/skepticism/2016/10/21/index.html",
    "revision": "a6fa7357aeb161190c297a0a76ad35b4"
  },
  {
    "url": "blog/skepticism/2016/10/21/medsafe/index.html",
    "revision": "746a28369701e5267caf22a9efc16cca"
  },
  {
    "url": "blog/skepticism/2016/10/21/zenteq/index.html",
    "revision": "30a3695976240c6078f0dff624055b7e"
  },
  {
    "url": "blog/skepticism/2016/10/index.html",
    "revision": "5bdf1fc4a3db476a89ccd2800e1873e4"
  },
  {
    "url": "blog/skepticism/2016/11/13/conference/index.html",
    "revision": "d2845b96c62d896cda81f30e58bf0609"
  },
  {
    "url": "blog/skepticism/2016/11/13/green/index.html",
    "revision": "17cec64a05ebf9676cadaed69833e51b"
  },
  {
    "url": "blog/skepticism/2016/11/13/index.html",
    "revision": "da50b04fb54899c91c476eafdd092856"
  },
  {
    "url": "blog/skepticism/2016/11/13/vice/index.html",
    "revision": "5ec397a5fe1b8f22ca2641afa4c7e661"
  },
  {
    "url": "blog/skepticism/2016/11/27/bioptron/index.html",
    "revision": "b883a416fd14920081c7f8e37fea8870"
  },
  {
    "url": "blog/skepticism/2016/11/27/conference/index.html",
    "revision": "91eceadb5276930766fcd45f4e9de649"
  },
  {
    "url": "blog/skepticism/2016/11/27/earthquake/index.html",
    "revision": "cd0ee8ec224c0d331114759dbcb13305"
  },
  {
    "url": "blog/skepticism/2016/11/27/index.html",
    "revision": "971caaf2862c996f2280b260a382a8e0"
  },
  {
    "url": "blog/skepticism/2016/11/index.html",
    "revision": "7a796fea3304b5ab0afb51cc250449da"
  },
  {
    "url": "blog/skepticism/2016/12/04/conference/index.html",
    "revision": "3ee1902bf9f753fc1a5fc68a6235cdce"
  },
  {
    "url": "blog/skepticism/2016/12/04/index.html",
    "revision": "9eec8646835b0c6f44af20340156a96d"
  },
  {
    "url": "blog/skepticism/2016/12/18/colin/index.html",
    "revision": "f3b63ea4029fdf5dfc552f83d9361659"
  },
  {
    "url": "blog/skepticism/2016/12/18/fiji/index.html",
    "revision": "217b93f51ae55cea4a404402b2918f5d"
  },
  {
    "url": "blog/skepticism/2016/12/18/index.html",
    "revision": "565857ef3a279adb0c169c030656faca"
  },
  {
    "url": "blog/skepticism/2016/12/18/kinesiology/index.html",
    "revision": "2db9d083ee7c612f5dea51a47f2b38d9"
  },
  {
    "url": "blog/skepticism/2016/12/18/mmm/index.html",
    "revision": "8750af2eb2a827affaa6d460d9c02c3c"
  },
  {
    "url": "blog/skepticism/2016/12/18/nigel/index.html",
    "revision": "f92f7937f0ff02087592e5f6c6433a8f"
  },
  {
    "url": "blog/skepticism/2016/12/index.html",
    "revision": "666982932b5d7c5d97fa86f2eb7db4b6"
  },
  {
    "url": "blog/skepticism/2016/index.html",
    "revision": "bcf0c6b858f16ba22b1764ef142f400f"
  },
  {
    "url": "blog/skepticism/2017/01/22/index.html",
    "revision": "50e7d473f7d16efe1b63110e79f0f110"
  },
  {
    "url": "blog/skepticism/2017/01/22/scientology/index.html",
    "revision": "45eba5e5d1d30290b248d1b2ff52decd"
  },
  {
    "url": "blog/skepticism/2017/01/29/creation/index.html",
    "revision": "ef791cd622c70ce3c8e781c71a120408"
  },
  {
    "url": "blog/skepticism/2017/01/29/index.html",
    "revision": "45ced4d494b7f322be8d6370d51f584c"
  },
  {
    "url": "blog/skepticism/2017/01/index.html",
    "revision": "c3fd4767d18f38b2f61d686edb4834c1"
  },
  {
    "url": "blog/skepticism/2017/02/05/fraudster/index.html",
    "revision": "7b70b7b5e4d6395bc6f7015a7636a86b"
  },
  {
    "url": "blog/skepticism/2017/02/05/gervais/index.html",
    "revision": "d2bd173af3d3668e39bfeab411285b20"
  },
  {
    "url": "blog/skepticism/2017/02/05/index.html",
    "revision": "5b80c27a999a3f46440836aafbcc2df1"
  },
  {
    "url": "blog/skepticism/2017/02/05/scientology/index.html",
    "revision": "d79e6ffab21d5b4f7f990f3c74d2d755"
  },
  {
    "url": "blog/skepticism/2017/02/19/homeopathy/index.html",
    "revision": "50953cd9b3576d49d2d41f5437ebb2b8"
  },
  {
    "url": "blog/skepticism/2017/02/19/index.html",
    "revision": "727f180e6bad1a57c70bc88daeac29da"
  },
  {
    "url": "blog/skepticism/2017/02/19/lottery/index.html",
    "revision": "b51cfdb31240b963d2e73e4abb8d5eb3"
  },
  {
    "url": "blog/skepticism/2017/02/19/vaxxed/index.html",
    "revision": "eeb24e94dd2e7f7e0cb6dea5c67cd734"
  },
  {
    "url": "blog/skepticism/2017/02/19/whales/index.html",
    "revision": "003044120f34d409c32e5647f26410e0"
  },
  {
    "url": "blog/skepticism/2017/02/index.html",
    "revision": "590b6ba4b27604f78894c3d59cefda82"
  },
  {
    "url": "blog/skepticism/2017/03/05/index.html",
    "revision": "a8b42d53950ec8b0f74220126557341d"
  },
  {
    "url": "blog/skepticism/2017/03/05/rea/index.html",
    "revision": "01ccb0e834e60a20b6b7ecbc3fc107f3"
  },
  {
    "url": "blog/skepticism/2017/03/19/fake/index.html",
    "revision": "331c5d360ba68f443b514745661b5ee5"
  },
  {
    "url": "blog/skepticism/2017/03/19/index.html",
    "revision": "1995483d511afe568b92501b703cb040"
  },
  {
    "url": "blog/skepticism/2017/03/19/murder/index.html",
    "revision": "36444b8cf74b8d090080c9729f62027d"
  },
  {
    "url": "blog/skepticism/2017/03/26/census/index.html",
    "revision": "8f59dbcf88db39142f6824b6c3a966a9"
  },
  {
    "url": "blog/skepticism/2017/03/26/index.html",
    "revision": "363aa85d8e47204e617fed1a2c093a0c"
  },
  {
    "url": "blog/skepticism/2017/03/26/nzmj/index.html",
    "revision": "f27eb75bb884942e98fe9ede99183663"
  },
  {
    "url": "blog/skepticism/2017/03/26/shaquille/index.html",
    "revision": "b0d00543f33cbae3b34f1441b8a2031e"
  },
  {
    "url": "blog/skepticism/2017/03/index.html",
    "revision": "f3e24eafae0f10b40d012cc420838e6a"
  },
  {
    "url": "blog/skepticism/2017/04/02/index.html",
    "revision": "732930d19cd92a1b0283a7fbe7219481"
  },
  {
    "url": "blog/skepticism/2017/04/02/nasa/index.html",
    "revision": "a93af42d3cca2c43f85ac18fee7f27af"
  },
  {
    "url": "blog/skepticism/2017/04/02/science/index.html",
    "revision": "b6e8cbafedc8f20d9306bf7f97373888"
  },
  {
    "url": "blog/skepticism/2017/04/02/vaxxed/index.html",
    "revision": "1a98b0f82628a1b20345430c069f3999"
  },
  {
    "url": "blog/skepticism/2017/04/09/index.html",
    "revision": "0ba770edd59e08fa762328a0e9b1848e"
  },
  {
    "url": "blog/skepticism/2017/04/09/tekiri/index.html",
    "revision": "b2b61de485f61628fcadf80ab83a2c68"
  },
  {
    "url": "blog/skepticism/2017/04/09/vaxxed/index.html",
    "revision": "53150bd7d5fcc6ca7a91cb04293a5f26"
  },
  {
    "url": "blog/skepticism/2017/04/23/arise/index.html",
    "revision": "e3f1fd5ab3fb3e6c55f177db02d6273d"
  },
  {
    "url": "blog/skepticism/2017/04/23/index.html",
    "revision": "800a80644057a8c9219e933605b643cf"
  },
  {
    "url": "blog/skepticism/2017/04/23/kelvin/index.html",
    "revision": "1d8dd68963255a40e55f137b7a22c4ac"
  },
  {
    "url": "blog/skepticism/2017/04/index.html",
    "revision": "861c958e5f3931dcceb1eac8fa71851f"
  },
  {
    "url": "blog/skepticism/2017/05/07/cancer/index.html",
    "revision": "086eb0c7e8ba6e1b0aee6a18bed609eb"
  },
  {
    "url": "blog/skepticism/2017/05/07/index.html",
    "revision": "0b66b0c11ce59256969e25c650aef402"
  },
  {
    "url": "blog/skepticism/2017/05/07/nigel/index.html",
    "revision": "12512356c7e8fabeffb78b916f23d224"
  },
  {
    "url": "blog/skepticism/2017/05/21/blasphemy/index.html",
    "revision": "8bad896834c8dd3eaa8ae1a0c1eb4ac1"
  },
  {
    "url": "blog/skepticism/2017/05/21/flat/index.html",
    "revision": "d865d1cd1932c00ab8a63c15dbaee802"
  },
  {
    "url": "blog/skepticism/2017/05/21/index.html",
    "revision": "ca4f362eeab78f9403ee959d5cd7e8f8"
  },
  {
    "url": "blog/skepticism/2017/05/21/maori/index.html",
    "revision": "4f2bdbf8870e7ee84036e706611dfe87"
  },
  {
    "url": "blog/skepticism/2017/05/index.html",
    "revision": "37fa8c65c467748043447dad4b741cf3"
  },
  {
    "url": "blog/skepticism/2017/06/04/bigelow/index.html",
    "revision": "891dc9b207187c15685f64468b91bc51"
  },
  {
    "url": "blog/skepticism/2017/06/04/climate/index.html",
    "revision": "b2d30c21fbe5f629975aa4aec00a09c9"
  },
  {
    "url": "blog/skepticism/2017/06/04/hansford/index.html",
    "revision": "197adb3d5ac21f5747736ae7818ce542"
  },
  {
    "url": "blog/skepticism/2017/06/04/index.html",
    "revision": "7bed13d55cc54fcc2527c31e81049c7a"
  },
  {
    "url": "blog/skepticism/2017/06/04/wasp/index.html",
    "revision": "7354a7ced842b4ec42005cf920aa23a4"
  },
  {
    "url": "blog/skepticism/2017/06/11/colonic/index.html",
    "revision": "05f31fe1128b704e122b8278e7a1c499"
  },
  {
    "url": "blog/skepticism/2017/06/11/credulous/index.html",
    "revision": "33430b12c8bc6df29da083b50295bba9"
  },
  {
    "url": "blog/skepticism/2017/06/11/index.html",
    "revision": "9d6379ef3c8a3ac0b62b6fc536d83ed8"
  },
  {
    "url": "blog/skepticism/2017/06/11/journals/index.html",
    "revision": "562843a2398a744de1ac3b052e91c487"
  },
  {
    "url": "blog/skepticism/2017/06/18/breatharians/index.html",
    "revision": "09e24ab5c08c68e1c0614cc6c4eabae6"
  },
  {
    "url": "blog/skepticism/2017/06/18/fieldays/index.html",
    "revision": "5f126305e4e1761cfe6a0ff1abd1bbe1"
  },
  {
    "url": "blog/skepticism/2017/06/18/index.html",
    "revision": "b790e12fe04f8af88f5c268ea709386a"
  },
  {
    "url": "blog/skepticism/2017/06/18/jw/index.html",
    "revision": "a49cb17067fc35f641e9d3c50a1139de"
  },
  {
    "url": "blog/skepticism/2017/06/18/oil/index.html",
    "revision": "4a361935d9b0016cbe40182eb0a3a8ff"
  },
  {
    "url": "blog/skepticism/2017/06/index.html",
    "revision": "1b998b0a35e8f396bd653a9d5e0adb18"
  },
  {
    "url": "blog/skepticism/2017/07/02/baby/index.html",
    "revision": "ca64867d062e6e6c7c4cb80dc6a77c12"
  },
  {
    "url": "blog/skepticism/2017/07/02/index.html",
    "revision": "2620d014faa3c9e2d717bf1b7fe89306"
  },
  {
    "url": "blog/skepticism/2017/07/02/infowars/index.html",
    "revision": "c634f265989f425d43ce19ef4fae17da"
  },
  {
    "url": "blog/skepticism/2017/07/02/scientology/index.html",
    "revision": "9ef2af00b43573d3b0acc48a91497722"
  },
  {
    "url": "blog/skepticism/2017/07/16/bananas/index.html",
    "revision": "a8da5d16039037ef14e49b0f064ee5e0"
  },
  {
    "url": "blog/skepticism/2017/07/16/circles/index.html",
    "revision": "7034558e0c60fcd77b7b32069bb3a930"
  },
  {
    "url": "blog/skepticism/2017/07/16/index.html",
    "revision": "7dc49bbaeedee6eb084c0ff9104540ce"
  },
  {
    "url": "blog/skepticism/2017/07/16/siggi/index.html",
    "revision": "6edd4f6d32d3f5ef5b682da08c4f2964"
  },
  {
    "url": "blog/skepticism/2017/07/16/vaxxed/index.html",
    "revision": "2fc21f93056f034d160d423c26db8a9b"
  },
  {
    "url": "blog/skepticism/2017/07/30/bleach/index.html",
    "revision": "554d973aeac27348047a829e76facc3a"
  },
  {
    "url": "blog/skepticism/2017/07/30/bluebeam/index.html",
    "revision": "54e05756a20f4e20dd2f0c063a782a07"
  },
  {
    "url": "blog/skepticism/2017/07/30/index.html",
    "revision": "92f69336c89071824377850c1d59bfc2"
  },
  {
    "url": "blog/skepticism/2017/07/30/police/index.html",
    "revision": "b3430552c4554458b659de3674665ad7"
  },
  {
    "url": "blog/skepticism/2017/07/index.html",
    "revision": "fa0f33fb5ebf21e8d034bd63223ae19c"
  },
  {
    "url": "blog/skepticism/2017/08/06/conned/index.html",
    "revision": "42215257f56e6d3f9da27fb9c723746d"
  },
  {
    "url": "blog/skepticism/2017/08/06/doll/index.html",
    "revision": "43b3c8631b144863f4ac369ed25bd0d4"
  },
  {
    "url": "blog/skepticism/2017/08/06/index.html",
    "revision": "ae300d5e42518737249c8bc00e516c07"
  },
  {
    "url": "blog/skepticism/2017/08/06/jacinda/index.html",
    "revision": "d41f0fa5e3eec9bcd6b0541f144e2fdc"
  },
  {
    "url": "blog/skepticism/2017/08/06/lotto/index.html",
    "revision": "3123fd1c6639d4347621ec2e455d2ce2"
  },
  {
    "url": "blog/skepticism/2017/08/27/index.html",
    "revision": "e67df27dee674b690169aa2278a2750a"
  },
  {
    "url": "blog/skepticism/2017/08/27/naturopath/index.html",
    "revision": "14f6a36c1d316e50d0f60c7aff8571ac"
  },
  {
    "url": "blog/skepticism/2017/08/27/satanic/index.html",
    "revision": "f4dc5118325b7209623baad65601256b"
  },
  {
    "url": "blog/skepticism/2017/08/index.html",
    "revision": "d7792daabfd3af3f65f905fffc0aa427"
  },
  {
    "url": "blog/skepticism/2017/09/03/apocalypse/index.html",
    "revision": "68da5f9af8fbadad7ddd68963f6dd576"
  },
  {
    "url": "blog/skepticism/2017/09/03/cancer/index.html",
    "revision": "382acbc1ba7efc949ac768aad3ed6656"
  },
  {
    "url": "blog/skepticism/2017/09/03/index.html",
    "revision": "c0b789a3e26cddd6b4d47e27e9468027"
  },
  {
    "url": "blog/skepticism/2017/09/03/rectangle/index.html",
    "revision": "9a8ca15d7a3f8f0029af0067051499e0"
  },
  {
    "url": "blog/skepticism/2017/09/03/stargate/index.html",
    "revision": "b44b87ef53e1ddb3b967d03b6f629941"
  },
  {
    "url": "blog/skepticism/2017/09/index.html",
    "revision": "da7b95666e6b73468e7fb0d88d443afd"
  },
  {
    "url": "blog/skepticism/2017/10/01/apocalypse/index.html",
    "revision": "ba732e903cd463420a8caf70a9e72a9b"
  },
  {
    "url": "blog/skepticism/2017/10/01/freeman/index.html",
    "revision": "dd5a22473a2338d7070a02d7b9f22d51"
  },
  {
    "url": "blog/skepticism/2017/10/01/index.html",
    "revision": "50489d1b88253fc91ed5c944179cbd6c"
  },
  {
    "url": "blog/skepticism/2017/10/01/pharmacy/index.html",
    "revision": "645145410277a29a2d48269f990d3da6"
  },
  {
    "url": "blog/skepticism/2017/10/08/index.html",
    "revision": "719640084626a909d6044a1dbc9ce42f"
  },
  {
    "url": "blog/skepticism/2017/10/08/pill/index.html",
    "revision": "7d0cfcd1891f1f1f0fad2b36c5422697"
  },
  {
    "url": "blog/skepticism/2017/10/08/qsb/index.html",
    "revision": "c85cdc1bfbe8275677eebd43d217e8cf"
  },
  {
    "url": "blog/skepticism/2017/10/08/vegas/index.html",
    "revision": "b12fd72071720e71b57f5df41ed381fe"
  },
  {
    "url": "blog/skepticism/2017/10/15/doterra/index.html",
    "revision": "60afa22f832af638cfa1623ee4009ace"
  },
  {
    "url": "blog/skepticism/2017/10/15/index.html",
    "revision": "8ba8b76d5f59476cea6bf443cc1c3ccb"
  },
  {
    "url": "blog/skepticism/2017/10/15/lie/index.html",
    "revision": "dc8fe998b0700bac49b66f65d4d11387"
  },
  {
    "url": "blog/skepticism/2017/10/15/soap/index.html",
    "revision": "d6738a63a08d2f2d1a361a4cd9e4b5e8"
  },
  {
    "url": "blog/skepticism/2017/10/index.html",
    "revision": "38de54834b3fa81ffc6932cd9a5b8d21"
  },
  {
    "url": "blog/skepticism/2017/11/05/conference/index.html",
    "revision": "923bdcc2d898a84d8f3a9f8dff35e821"
  },
  {
    "url": "blog/skepticism/2017/11/05/glyphosate/index.html",
    "revision": "426e06994556549222e4d700e97b8e6c"
  },
  {
    "url": "blog/skepticism/2017/11/05/index.html",
    "revision": "90f671db5a6fd30377f03791c9006058"
  },
  {
    "url": "blog/skepticism/2017/11/05/stranded/index.html",
    "revision": "d733d4bafd220e61b448eef6dd30d9e9"
  },
  {
    "url": "blog/skepticism/2017/11/05/tracts/index.html",
    "revision": "e5509b57ff22231c8846709de089b3af"
  },
  {
    "url": "blog/skepticism/2017/11/12/ghost/index.html",
    "revision": "e77c68f58414e07980c12f481e6a6dda"
  },
  {
    "url": "blog/skepticism/2017/11/12/green/index.html",
    "revision": "c70d429330bcbe2b09803a707a69b5d6"
  },
  {
    "url": "blog/skepticism/2017/11/12/harassment/index.html",
    "revision": "7e919b8fbd23c8a978ba7697d98cd039"
  },
  {
    "url": "blog/skepticism/2017/11/12/index.html",
    "revision": "8033e550e5479b47cf53755479a89e98"
  },
  {
    "url": "blog/skepticism/2017/11/12/libby/index.html",
    "revision": "a98e388047caeacd578efbfd1124a41f"
  },
  {
    "url": "blog/skepticism/2017/11/index.html",
    "revision": "1f3d0312c72c989afa8d7bd05fe64b7b"
  },
  {
    "url": "blog/skepticism/2017/12/03/acupuncture/index.html",
    "revision": "c00069179263a8d3643004725697c9d0"
  },
  {
    "url": "blog/skepticism/2017/12/03/denialism/index.html",
    "revision": "3d582fcacff8810913aee2cef7b58c9b"
  },
  {
    "url": "blog/skepticism/2017/12/03/dowsing/index.html",
    "revision": "8f3ddea5e885cdbf34f2cfb5b0fb7552"
  },
  {
    "url": "blog/skepticism/2017/12/03/holes/index.html",
    "revision": "f0704d02c757014cefea4f03ac2ffb55"
  },
  {
    "url": "blog/skepticism/2017/12/03/index.html",
    "revision": "e2f2a96a1a65bb11fb72f3d614593ef7"
  },
  {
    "url": "blog/skepticism/2017/12/17/index.html",
    "revision": "b678214cf4c537c58605a58167c7ee15"
  },
  {
    "url": "blog/skepticism/2017/12/17/nhs/index.html",
    "revision": "e12ee3ec556044a0fe28179542090050"
  },
  {
    "url": "blog/skepticism/2017/12/17/oto/index.html",
    "revision": "7f7cbd3cf5d4060bedadaf25dfe4400e"
  },
  {
    "url": "blog/skepticism/2017/12/17/pastafarian/index.html",
    "revision": "1b5f88d86d670c46c00ad037a79d953a"
  },
  {
    "url": "blog/skepticism/2017/12/17/shc/index.html",
    "revision": "157e5b283332dd4ff7a5e28011c1eefd"
  },
  {
    "url": "blog/skepticism/2017/12/17/wellworks/index.html",
    "revision": "be92b62b3fd88c36b55d2f4f33fcdab8"
  },
  {
    "url": "blog/skepticism/2017/12/index.html",
    "revision": "ce0d5dde81fd8d4a67233077884c04a5"
  },
  {
    "url": "blog/skepticism/2017/index.html",
    "revision": "9f725bf57ecd7a4374815f96910394c9"
  },
  {
    "url": "blog/skepticism/2018/01/21/grounding/index.html",
    "revision": "7a771611dcb009ae2f8d04cfbd170d99"
  },
  {
    "url": "blog/skepticism/2018/01/21/index.html",
    "revision": "f8ada75bec462010092d5b9913faf8e3"
  },
  {
    "url": "blog/skepticism/2018/01/21/naturopath/index.html",
    "revision": "68e12008a1ff5c656041137b013bd145"
  },
  {
    "url": "blog/skepticism/2018/01/21/respen/index.html",
    "revision": "70be6c4b0f8ef3929ebe5d212b09d6ed"
  },
  {
    "url": "blog/skepticism/2018/01/28/bears/index.html",
    "revision": "42d47338d3f71914deef70a0ee33aa1a"
  },
  {
    "url": "blog/skepticism/2018/01/28/index.html",
    "revision": "b15dd2f05fbde229f8261ae2d7fc240d"
  },
  {
    "url": "blog/skepticism/2018/01/28/peppering/index.html",
    "revision": "fc8039de0b0e1a79fc575e4b48fe8239"
  },
  {
    "url": "blog/skepticism/2018/01/28/pet/index.html",
    "revision": "19606b7f30dbc09ade613915a6c486fd"
  },
  {
    "url": "blog/skepticism/2018/01/28/quake/index.html",
    "revision": "744fe79a0ce278aadc2455b288da58ed"
  },
  {
    "url": "blog/skepticism/2018/01/28/scientology/index.html",
    "revision": "d18ec68c0e4384c8b334b3c48694e545"
  },
  {
    "url": "blog/skepticism/2018/01/index.html",
    "revision": "61ebdb07b25e59f9d73cd8628726082e"
  },
  {
    "url": "blog/skepticism/2018/02/11/asa/index.html",
    "revision": "fa8253c1a8cbf6b5c0ec2de82fc6e83c"
  },
  {
    "url": "blog/skepticism/2018/02/11/cannabis/index.html",
    "revision": "e919c50f819b6bc04e4c1228b52f1b7b"
  },
  {
    "url": "blog/skepticism/2018/02/11/elon/index.html",
    "revision": "34217d1fb508f50bf84ec60929af1a63"
  },
  {
    "url": "blog/skepticism/2018/02/11/homeopathy/index.html",
    "revision": "88e0429ce5034228cbc70baeaee62896"
  },
  {
    "url": "blog/skepticism/2018/02/11/index.html",
    "revision": "641caccfd06447f802c11a345aa020cf"
  },
  {
    "url": "blog/skepticism/2018/02/11/water/index.html",
    "revision": "6764a7fce98252b1ed42d4e96c6c0a42"
  },
  {
    "url": "blog/skepticism/2018/02/25/crisis/index.html",
    "revision": "8f0cfa8c3eafcf7555ca96aa82d64a1a"
  },
  {
    "url": "blog/skepticism/2018/02/25/eggs/index.html",
    "revision": "5c914be7601d23b0dbe1cc6eddcd5a67"
  },
  {
    "url": "blog/skepticism/2018/02/25/fsm/index.html",
    "revision": "4037b76418538ce28e2bd9bcb6850733"
  },
  {
    "url": "blog/skepticism/2018/02/25/index.html",
    "revision": "0abf183ca1cfd62fc599dae65016055c"
  },
  {
    "url": "blog/skepticism/2018/02/25/number/index.html",
    "revision": "56d316c38be0073f5d8d5951578f7a90"
  },
  {
    "url": "blog/skepticism/2018/02/25/quackery/index.html",
    "revision": "1445c6fdeffe6d83e697057d91c4d74d"
  },
  {
    "url": "blog/skepticism/2018/02/index.html",
    "revision": "1108da19e60a4fdb0fa180b3fb79628e"
  },
  {
    "url": "blog/skepticism/2018/03/11/ai/index.html",
    "revision": "e916f2220d51d3ed0eaa0669c51edf81"
  },
  {
    "url": "blog/skepticism/2018/03/11/index.html",
    "revision": "82c24abdb9a377c0f03410ce2e631eed"
  },
  {
    "url": "blog/skepticism/2018/03/11/radiation/index.html",
    "revision": "4576cfcc9f77eb3835b95cc4c6c520b9"
  },
  {
    "url": "blog/skepticism/2018/03/11/reiki/index.html",
    "revision": "06e0ccb27b4a4569410c946252dd26e5"
  },
  {
    "url": "blog/skepticism/2018/03/11/ufo/index.html",
    "revision": "584ae4fbdcc295e61543f66346b89402"
  },
  {
    "url": "blog/skepticism/2018/03/18/ghost/index.html",
    "revision": "9552fb5e24a7574e56124a5cda0a4236"
  },
  {
    "url": "blog/skepticism/2018/03/18/index.html",
    "revision": "95c5fbde06e35c6049d38158f5c45e50"
  },
  {
    "url": "blog/skepticism/2018/03/18/psychic/index.html",
    "revision": "57fa08030cb46e6e25bbf7bcde5744ef"
  },
  {
    "url": "blog/skepticism/2018/03/18/quack/index.html",
    "revision": "b7e0938efa83b712cfefd7a8fdb2dc97"
  },
  {
    "url": "blog/skepticism/2018/03/18/radiation/index.html",
    "revision": "3233f77763fe3b0106722112309ee4e5"
  },
  {
    "url": "blog/skepticism/2018/03/index.html",
    "revision": "f9f4485fa953b6727a93dd4927f08943"
  },
  {
    "url": "blog/skepticism/2018/04/08/calocurb/index.html",
    "revision": "9ba9217d3bec15f0476c15cdcbbe5890"
  },
  {
    "url": "blog/skepticism/2018/04/08/cam/index.html",
    "revision": "d97ac0e1dc4b17d91d2df23083e975f9"
  },
  {
    "url": "blog/skepticism/2018/04/08/index.html",
    "revision": "17eb91329ddb539427c1f073ad644168"
  },
  {
    "url": "blog/skepticism/2018/04/08/psychic/index.html",
    "revision": "f0696f74550d000ce50408a50fd6a605"
  },
  {
    "url": "blog/skepticism/2018/04/08/vaccines/index.html",
    "revision": "851d8d61a7f0fab67177255bd8258da0"
  },
  {
    "url": "blog/skepticism/2018/04/15/coffee/index.html",
    "revision": "688528c2c1bdf853320409d375465d30"
  },
  {
    "url": "blog/skepticism/2018/04/15/ignorance/index.html",
    "revision": "d9e74344a5fb65c8d7e44e0347336769"
  },
  {
    "url": "blog/skepticism/2018/04/15/index.html",
    "revision": "f2d28ae76063a452124a9da1519d07da"
  },
  {
    "url": "blog/skepticism/2018/04/15/nasa/index.html",
    "revision": "bd0d233cf6588a6875d96fb0cb71183e"
  },
  {
    "url": "blog/skepticism/2018/04/15/tapu/index.html",
    "revision": "9cc6a05ff2cf595b0e2906ba1bc75a56"
  },
  {
    "url": "blog/skepticism/2018/04/29/google/index.html",
    "revision": "329614eca2863a8fa1ddcbf83dce44c2"
  },
  {
    "url": "blog/skepticism/2018/04/29/homeopathy/index.html",
    "revision": "3083e9a4ef70bf5cb43ba4306c0adb3c"
  },
  {
    "url": "blog/skepticism/2018/04/29/index.html",
    "revision": "22695782c31518c2904b781fa0087bde"
  },
  {
    "url": "blog/skepticism/2018/04/29/ken/index.html",
    "revision": "afe1e07880f9ac50739f27614d50fea5"
  },
  {
    "url": "blog/skepticism/2018/04/29/v2k/index.html",
    "revision": "cebe6defb0d3b9c9818380de5adc0590"
  },
  {
    "url": "blog/skepticism/2018/04/index.html",
    "revision": "96f97b103674e2a3274a443725b47443"
  },
  {
    "url": "blog/skepticism/2018/05/13/astrology/index.html",
    "revision": "77dc115cc4a7c8eb73cbb361777752c3"
  },
  {
    "url": "blog/skepticism/2018/05/13/crystals/index.html",
    "revision": "db656dbe5e79fd7bf8f84c8be85da99a"
  },
  {
    "url": "blog/skepticism/2018/05/13/dawkins/index.html",
    "revision": "0af8e88a76af79245d268940c90fdeec"
  },
  {
    "url": "blog/skepticism/2018/05/13/index.html",
    "revision": "559a83a15789906ef1e33c4b50a2bfc7"
  },
  {
    "url": "blog/skepticism/2018/05/13/kangen/index.html",
    "revision": "5507fb574448b903bc37d383463c699f"
  },
  {
    "url": "blog/skepticism/2018/05/13/vitamins/index.html",
    "revision": "4e623029c0150f5a31ee5fbebcfbc2b0"
  },
  {
    "url": "blog/skepticism/2018/05/27/flat/index.html",
    "revision": "a18fbacb5436094568be22ba23273fbe"
  },
  {
    "url": "blog/skepticism/2018/05/27/index.html",
    "revision": "3e2cfab7000891c05dc36bec9585453a"
  },
  {
    "url": "blog/skepticism/2018/05/27/kangen/index.html",
    "revision": "d250b1648a777fee38181e1296d1bbaf"
  },
  {
    "url": "blog/skepticism/2018/05/27/ness/index.html",
    "revision": "cfe68b5c36f468f16fc4715d07ecc3e2"
  },
  {
    "url": "blog/skepticism/2018/05/27/oz/index.html",
    "revision": "5ec70cbbe58cb82e8510fc975ebf4d92"
  },
  {
    "url": "blog/skepticism/2018/05/27/psychic/index.html",
    "revision": "5b3f4146a3f5cdb9dd8b3f9c133e4b29"
  },
  {
    "url": "blog/skepticism/2018/05/index.html",
    "revision": "0125e6b86f1ab7e6d0c1f2f17594233d"
  },
  {
    "url": "blog/skepticism/2018/06/10/astrology/index.html",
    "revision": "1a083f1e5a587f59f885e6a9e6de3ae5"
  },
  {
    "url": "blog/skepticism/2018/06/10/index.html",
    "revision": "9c786e1aa083ed07dd1823e2c28b3307"
  },
  {
    "url": "blog/skepticism/2018/06/10/nhs/index.html",
    "revision": "dda217b534fad69c780fed87adc402fc"
  },
  {
    "url": "blog/skepticism/2018/06/10/shakti/index.html",
    "revision": "12593bee291ff984dabcc796d92564e1"
  },
  {
    "url": "blog/skepticism/2018/06/10/weetbix/index.html",
    "revision": "90b6d27b48c81489f3e10c2f5882261f"
  },
  {
    "url": "blog/skepticism/2018/06/24/blasphemy/index.html",
    "revision": "06dd36eee0baa23533bd5d6b682f3df8"
  },
  {
    "url": "blog/skepticism/2018/06/24/cannabis/index.html",
    "revision": "62dd240552da30af132c62c39700500b"
  },
  {
    "url": "blog/skepticism/2018/06/24/hotdog/index.html",
    "revision": "301ea5fe595f86e5f32c1b7661d12568"
  },
  {
    "url": "blog/skepticism/2018/06/24/index.html",
    "revision": "85d3d47feec0ecd19370a3dfa1a1603f"
  },
  {
    "url": "blog/skepticism/2018/06/24/led/index.html",
    "revision": "52dd514bd1c5363ab9124d31c003f88a"
  },
  {
    "url": "blog/skepticism/2018/06/index.html",
    "revision": "e32c61d12ea38fdcbd8ee98fc6f39889"
  },
  {
    "url": "blog/skepticism/2018/07/08/bullet/index.html",
    "revision": "4b374792cb88a0ba81b014204b895d04"
  },
  {
    "url": "blog/skepticism/2018/07/08/chiros/index.html",
    "revision": "33611c991e5716ce16d1a4ae07cfa84e"
  },
  {
    "url": "blog/skepticism/2018/07/08/hiv/index.html",
    "revision": "08dbb6a3b53aa9f3935d223d811137dc"
  },
  {
    "url": "blog/skepticism/2018/07/08/hrv/index.html",
    "revision": "64cff361fd7c4b90ac1ec5406ad1a110"
  },
  {
    "url": "blog/skepticism/2018/07/08/index.html",
    "revision": "744be0de7c1c2d0fa0ba45dfa7e488c4"
  },
  {
    "url": "blog/skepticism/2018/07/22/cancer/index.html",
    "revision": "574dd612e092138fdd7a589a61b9e32d"
  },
  {
    "url": "blog/skepticism/2018/07/22/index.html",
    "revision": "914d5eadf2ab69aec56d8d36d47a3af0"
  },
  {
    "url": "blog/skepticism/2018/07/22/resurrection/index.html",
    "revision": "be653960c826eb5fa07b448ca373557a"
  },
  {
    "url": "blog/skepticism/2018/07/22/talc/index.html",
    "revision": "a0bc5d0d33610c3aa0c1c1402059decd"
  },
  {
    "url": "blog/skepticism/2018/07/22/visas/index.html",
    "revision": "95bcc97ff5955f9d1bdcdf3d21d77904"
  },
  {
    "url": "blog/skepticism/2018/07/index.html",
    "revision": "787b7d9ad7ddc683ccfcec587353db7f"
  },
  {
    "url": "blog/skepticism/2018/08/05/conf/index.html",
    "revision": "68f537d89b1e3f559db4cb0d2a5367c5"
  },
  {
    "url": "blog/skepticism/2018/08/05/index.html",
    "revision": "1b6b161957e857fd3995a5ce504198ba"
  },
  {
    "url": "blog/skepticism/2018/08/05/qanon/index.html",
    "revision": "c42e856ec19f1a7240cab2e70efe475f"
  },
  {
    "url": "blog/skepticism/2018/08/19/index.html",
    "revision": "82b292f78a11b6c93dc5f51bcc796201"
  },
  {
    "url": "blog/skepticism/2018/08/19/jw/index.html",
    "revision": "b947e2bea9cec2155970bef39be535cb"
  },
  {
    "url": "blog/skepticism/2018/08/index.html",
    "revision": "053cd980f2e075400c4e3c80203cda6d"
  },
  {
    "url": "blog/skepticism/2018/09/02/allergy/index.html",
    "revision": "96ff3ad728b27a4983d0403ea20c9df2"
  },
  {
    "url": "blog/skepticism/2018/09/02/catholic/index.html",
    "revision": "a855a1c7a8d0d04ae92bc912ef4fa7af"
  },
  {
    "url": "blog/skepticism/2018/09/02/index.html",
    "revision": "35f0701b793a4c4b1aeb866c597d3466"
  },
  {
    "url": "blog/skepticism/2018/09/02/jw/index.html",
    "revision": "7f540d9d8a4181697792584eac4fcfaa"
  },
  {
    "url": "blog/skepticism/2018/09/02/sen/index.html",
    "revision": "b3ad28ec1ed12bffd8cbccb3fb33f841"
  },
  {
    "url": "blog/skepticism/2018/09/16/1080/index.html",
    "revision": "63bf51a7c16fb8478a849f7a07295d2f"
  },
  {
    "url": "blog/skepticism/2018/09/16/church/index.html",
    "revision": "91085b7d285dcd6ddd408c2197673808"
  },
  {
    "url": "blog/skepticism/2018/09/16/index.html",
    "revision": "d41e61d4c0b97417ac8f982f595c91e1"
  },
  {
    "url": "blog/skepticism/2018/09/16/jones/index.html",
    "revision": "7e4e97f8dd34488f9c239cd796509122"
  },
  {
    "url": "blog/skepticism/2018/09/16/scammers/index.html",
    "revision": "66da72eb0fa79e601f2b6e827050f9f5"
  },
  {
    "url": "blog/skepticism/2018/09/30/index.html",
    "revision": "0492ea00303109bb3fda0ad4e3721e69"
  },
  {
    "url": "blog/skepticism/2018/09/30/jw/index.html",
    "revision": "6dfc63a59bbfc20bb403ca3dc7d3b0d7"
  },
  {
    "url": "blog/skepticism/2018/09/30/oto/index.html",
    "revision": "67326473ca6295df957724d4176c9fdd"
  },
  {
    "url": "blog/skepticism/2018/09/30/who/index.html",
    "revision": "e21af0d6e26dbfc4ff78af562ad149e6"
  },
  {
    "url": "blog/skepticism/2018/09/index.html",
    "revision": "5ea3c10b4a5c9793c15cb80f5e97850f"
  },
  {
    "url": "blog/skepticism/2018/10/14/hacked/index.html",
    "revision": "548a02460aeefbb0453bdb15807121dd"
  },
  {
    "url": "blog/skepticism/2018/10/14/index.html",
    "revision": "848f7bfecee3cd76bfdc496cd9d97272"
  },
  {
    "url": "blog/skepticism/2018/10/14/kangen/index.html",
    "revision": "0effbd3b9ba4cc3ac89ab29f3b0f07b4"
  },
  {
    "url": "blog/skepticism/2018/10/14/pakistan/index.html",
    "revision": "bd4a129de0d921579e40c8cf3ed45bd4"
  },
  {
    "url": "blog/skepticism/2018/10/14/sarah/index.html",
    "revision": "ce86647cbc2333f07660f239dc479635"
  },
  {
    "url": "blog/skepticism/2018/10/28/blasphemy/index.html",
    "revision": "705bdfc32472d43321615f47c91c16f3"
  },
  {
    "url": "blog/skepticism/2018/10/28/hrv/index.html",
    "revision": "ef2fa8ea190a02ba6e0db07b6927ff28"
  },
  {
    "url": "blog/skepticism/2018/10/28/index.html",
    "revision": "bfe4504e7b9530ce5c8b1e233954f913"
  },
  {
    "url": "blog/skepticism/2018/10/28/jesus/index.html",
    "revision": "b5d8943dc87dd470fa23c48024811f38"
  },
  {
    "url": "blog/skepticism/2018/10/28/natural/index.html",
    "revision": "e99b64db789bb159ae09b19fd28963dd"
  },
  {
    "url": "blog/skepticism/2018/10/index.html",
    "revision": "6902b034a5e64964b0b5141a36691ed3"
  },
  {
    "url": "blog/skepticism/2018/11/04/bibi/index.html",
    "revision": "1d151ac6e1ec53fe204339676001ea65"
  },
  {
    "url": "blog/skepticism/2018/11/04/index.html",
    "revision": "806014bb92845e7b371a90306e73b203"
  },
  {
    "url": "blog/skepticism/2018/11/04/jesus/index.html",
    "revision": "b61462383fcb6fe1713b33e4783ddf31"
  },
  {
    "url": "blog/skepticism/2018/11/04/obdii/index.html",
    "revision": "27a6cadb53cbcfd19cbcf7e91021a888"
  },
  {
    "url": "blog/skepticism/2018/11/04/sleepdrops/index.html",
    "revision": "4efa145544c1c48591050074d41bf0cc"
  },
  {
    "url": "blog/skepticism/2018/11/index.html",
    "revision": "fb6fa2b95e229e59f7d78c4b573a5085"
  },
  {
    "url": "blog/skepticism/2018/12/02/ark/index.html",
    "revision": "08fc9ead27ea5fb0c492f2b8140262e1"
  },
  {
    "url": "blog/skepticism/2018/12/02/green/index.html",
    "revision": "0c56f1c5f66cb9886e85a85f428e5b55"
  },
  {
    "url": "blog/skepticism/2018/12/02/index.html",
    "revision": "a3a5f6cd879dd8e45048e9a5a18387ae"
  },
  {
    "url": "blog/skepticism/2018/12/02/ri/index.html",
    "revision": "e04e1c49f02bc85af69c211fb08c29f3"
  },
  {
    "url": "blog/skepticism/2018/12/16/blasphemy/index.html",
    "revision": "b307b11e6623ab3fd1f2d9d1c5f8e2ed"
  },
  {
    "url": "blog/skepticism/2018/12/16/index.html",
    "revision": "b0ec611aebcd0e584a46745b5071d661"
  },
  {
    "url": "blog/skepticism/2018/12/16/sleepdrops/index.html",
    "revision": "b91fbc30b5026dc42d2a3333dedc286d"
  },
  {
    "url": "blog/skepticism/2018/12/16/tekiri/index.html",
    "revision": "3ccee39298ee2ebce1a373d003d9308f"
  },
  {
    "url": "blog/skepticism/2018/12/index.html",
    "revision": "daa32e490d7589f18fadeb82f60c60f2"
  },
  {
    "url": "blog/skepticism/2018/index.html",
    "revision": "5433958bb41bf0ffc5b6268cf23916d5"
  },
  {
    "url": "blog/skepticism/index.html",
    "revision": "12053a3fad119e0b819673299a1be364"
  },
  {
    "url": "blog/tag/index.html",
    "revision": "a16c76e78f0f25e711fc7da4588f34ab"
  },
  {
    "url": "contact/index.html",
    "revision": "fa33988597fa5cb3d93f4c365f3f25be"
  },
  {
    "url": "cv/cover/index.html",
    "revision": "ee84d961615d0daac6cff2832661c608"
  },
  {
    "url": "cv/index.html",
    "revision": "175aa0061d136dc23a3682595cdd0ad0"
  },
  {
    "url": "googlee25d0c06da891164.html",
    "revision": "0defe75660212f417b90c5affcd03380"
  },
  {
    "url": "index.html",
    "revision": "e228b416b3ef810addb9a21bbf37536c"
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
    "revision": "69936ad4506d7e6496d8cd73e1cf996f"
  },
  {
    "url": "media/me/index.html",
    "revision": "e780e3637bd51b3df841e894029045ba"
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
    "revision": "52cfc4b168f5add2ca1332dd5e36718b"
  },
  {
    "url": "status/index.html",
    "revision": "4b17f049aea8ced527c8f29d1f12b6a2"
  },
  {
    "url": "status/steam/index.html",
    "revision": "d62d9233ada61790e9a6b54f4ebabaaf"
  },
  {
    "url": "status/twitter/index.html",
    "revision": "f4b3964d76f3f233630267bd341dddef"
  },
  {
    "url": "status/wikipedia/index.html",
    "revision": "51c5afd2396e2644a0f8f91b28665fea"
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
