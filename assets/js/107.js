(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{402:function(t,e,a){t.exports=a.p+"assets/img/IMG_0473.jpg"},798:function(t,e,a){"use strict";a.r(e);var s=a(5),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("While I was in the pub recently, at a "),s("a",{attrs:{href:"http://www.puzzledpint.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Puzzled Pint"),s("OutboundLink")],1),t._v(" event, I looked across the table at a New Zealand QR code image (used for scanning your location into the COVID tracking app) and wondered what data was encoded in the image. Thankfully, with the wonders of modern technology, it was pretty simple to disassemble the data there and then on my phone.")]),t._v(" "),s("p",[t._v("I first took a picture of the QR code:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(402),alt:"Hotel Waterloo QR Code"}})]),t._v(" "),s("p",[t._v("Then I searched online for a QR code reader, and "),s("a",{attrs:{href:"https://zxing.org/w/decode.jspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("found one"),s("OutboundLink")],1),t._v(" pretty quickly. The website had no problems reading my picture of the QR code, and gave me this parsed output:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("NZCOVIDTRACER:eyJnbG4iOiI5NDI5MzAwMzU5ODIyIiwib3BuIjoiSG90ZWwgV2F0ZXJsb28gYW5kIEJhY2twYWNrZXJzIiwiYWRyIjoiMSBCdW5ueSBTdHJlZXRcblBpcGl0ZWFcbldlbGxpbmd0b24iLCJ2ZXIiOiJjMTk6MSIsInR5cCI6ImVudHJ5In0=\n")])])]),s("p",[t._v("I then searched for a Base64 decoder, as I was pretty sure that the text after "),s("code",[t._v("NZCOVIDTRACER:")]),t._v(" was "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Base64",target:"_blank",rel:"noopener noreferrer"}},[t._v("Base64"),s("OutboundLink")],1),t._v(" encoded (using the upper and lower case alphabet A-Z and a-z, digits 0-9 and two extra characters). The site I found had a domain name that really did state plainly what it does: "),s("a",{attrs:{href:"https://www.base64decode.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("base64decode.org"),s("OutboundLink")],1),t._v(". Plugging the text into that site gave me the following JSON data:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"gln"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"9429300359822"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"opn"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hotel Waterloo and Backpackers"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"adr"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1 Bunny Street\\nPipitea\\nWellington"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ver"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"c19:1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"typ"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"entry"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("This data structure appears to be fairly self-explanatory. Here's a formatted version of the data, with the field names replaced with what it appears each field is used for:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"gln"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Unique QR code identifier>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"opn"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Location name>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"adr"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Location address - (\\n) means a newline>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ver"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Version of this QR code - in this case COVID 19 version 1>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"typ"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Yype of code - maybe indicating location, e.g. entry, bar, bathrooms>"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("We can see from this that there's nothing nefarious going on with the QR code. It simply uses a custom URI scheme that the app registers with the phone - "),s("code",[t._v("NZCOVIDTRACER:")]),t._v(" - which is like "),s("code",[t._v("HTTP:")]),t._v(", "),s("code",[t._v("HTTPS:")]),t._v(", "),s("code",[t._v("FTP:")]),t._v(" and other protocols that we're more used to seeing. Then, once the URI has launched the COVID tracer app, it feeds the app the Base64 encoded text. The app will decode the text into JSON, and then it's easy for it to read the fields inside. This data allows the phone app to display the location and address even if the phone's not connected to the internet, although presumably when relaying this information to a server it would only need to send the unique ID ("),s("code",[t._v("gln")]),t._v("), along with some other data (the date/time the QR code was scanned, and possibly GPS coordinates just in case the QR code is in the wrong place - although I half expect the app wouldn't send that particular piece of data, as people are sometimes wary about sharing GPS location data).")]),t._v(" "),s("p",[t._v("I like that they've future proofed this to an extent with the version - this scheme could easily be re-used for future unknown events that might cause us to have to scan in, such as "),s("code",[t._v("inv:5")]),t._v(" for the fifth wave of an alien invasion.")])])}),[],!1,null,null,null);e.default=n.exports}}]);