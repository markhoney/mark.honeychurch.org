(window.webpackJsonp=window.webpackJsonp||[]).push([[11,20],{156:function(e,t,a){},158:function(e,t,a){"use strict";var o={computed:{section:function(){return this.$page.path.split("/")[2]}}},i=a(5),s={props:["categories"]},r={props:["tags"]},l={components:{postsection:Object(i.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("router-link",{attrs:{to:"/blog/"+this.section+"/"}},[this._v("\n\t"+this._s(this.section.charAt(0).toUpperCase())+this._s(this.section.slice(1))+"\n")])}),[],!1,null,null,null).exports,categories:Object(i.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.categories?a("span",e._l(e.categories,(function(t,o){return a("router-link",{key:o,attrs:{to:"/blog/category/?name="+t}},[e._v(e._s(t)),o+1<e.categories.length?a("span",[e._v(", ")]):e._e()])})),1):e._e()}),[],!1,null,null,null).exports,tags:Object(i.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.tags?a("span",e._l(e.tags,(function(t,o){return a("router-link",{key:o,attrs:{to:"/blog/tag/?name="+t}},[e._v(e._s(t)),o+1<e.tags.length?a("span",[e._v(", ")]):e._e()])})),1):e._e()}),[],!1,null,null,null).exports},props:{post:{type:Object},sections:{type:Boolean,default:!0},categories:{type:Boolean,default:!0},tags:{type:Boolean,default:!0}},computed:{showsection:function(){if(this.section)return!0},showcategories:function(){if(this.categories&&this.post.frontmatter.categories)return!0},showtags:function(){if(this.tags&&this.post.frontmatter.tags)return!0}}},h=Object(i.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e.showsection?[a("em",[e._v("Section:")]),e._v(" "),a("postsection"),e._v(" "),e.showcategories||e.showtags?[e._v(",")]:e._e()]:e._e(),e._v(" "),e.showcategories?[a("em",[e._v("Categories:")]),e._v(" "),a("categories",{attrs:{categories:e.post.frontmatter.categories}}),e._v(" "),e.showtags?[e._v(",")]:e._e()]:e._e(),e._v(" "),e.showtags?[a("em",[e._v("Tags:")]),e._v(" "),a("tags",{attrs:{tags:e.post.frontmatter.tags}})]:e._e()],2)}),[],!1,null,null,null);t.a=h.exports},159:function(e,t,a){"use strict";a(156)},160:function(e,t,a){"use strict";var o={components:{taxonomy:a(158).a},props:{posts:{type:Array},dates:{type:Boolean,default:!1},excerpt:{type:Boolean,default:!0},taxonomy:{type:Boolean,default:!0},sections:{type:Boolean,default:!1},categories:{type:Boolean,default:!0},tags:{type:Boolean,default:!0}},computed:{postdates(){return this.posts.map(e=>e.frontmatter.date).filter((e,t,a)=>e&&a.indexOf(e)===t)}}},i=(a(159),a(5)),s=Object(i.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("ul",[e._l(e.postdates,(function(t){return[e.dates?a("li",{staticClass:"date"},[a("h2",[a("router-link",{attrs:{to:"/blog/skepticism/"+new Date(t).toISOString().slice(0,10).split("-").join("/")+"/"}},[e._v(e._s(new Date(t).toLocaleDateString("en-NZ",{year:"numeric",month:"long",day:"numeric"})))])],1)]):e._e(),e._v(" "),e._l(e.posts,(function(o){return o.frontmatter.date==t?a("li",{key:o.path},[a("h3",[a("router-link",{attrs:{to:o.path}},[e._v(e._s(o.title))])],1),e._v(" "),e.excerpt&&o.excerpt?[a("span",{domProps:{innerHTML:e._s(o.excerpt)}}),e._v(" "),o.readingTime?a("em",[e._v(e._s(o.readingTime.text)+", "+e._s(o.readingTime.words)+" words.")]):e._e(),e._v(" "),a("router-link",{attrs:{to:o.path}},[e._v("Continue Reading...")])]:e._e(),e._v(" "),e.taxonomy?a("taxonomy",{attrs:{post:o,sections:e.sections,categories:e.categories,tags:e.tags}}):e._e()],2):e._e()}))]}))],2)])}),[],!1,null,"73f745c2",null);t.a=s.exports},170:function(e,t,a){},181:function(e,t,a){"use strict";a(170)},182:function(e){e.exports=JSON.parse('[{"date":"2018-12-16","host":"Graeme Hill","url":"https://www.radiolive.co.nz/home/on-demand/weekend-variety-wireless/2018/12/weekend-variety-wireless--in-case-you-missed-sunday-161218-final.html","audio":"https://audio.mediaworks.nz/content/radiolive/WvWsat/1612118_WVW_Skepticalthoughts.mp3"},{"date":"2018-12-02","host":"Graeme Hill","url":"https://www.radiolive.co.nz/home/on-demand/weekend-variety-wireless/2018/11/weekend-variety-wireless--in-case-you-missed-sunday-021218.html","audio":"https://audio.mediaworks.nz/content/radiolive/WVWSun/021218_WVW_SKepticalthoughts.mp3"},{"date":"2018-11-04","host":"Graeme Hill","url":"https://www.radiolive.co.nz/home/on-demand/weekend-variety-wireless/2018/11/weekend-variety-wireless-icymi-041118.html","audio":"https://audio.mediaworks.nz/content/radiolive/WVWSun/041118_WVW_SkepticalThoughts.mp3"},{"date":"2018-10-28","host":"Graeme Hill","url":"https://www.radiolive.co.nz/home/on-demand/weekend-variety-wireless/2018/10/weekend-variety-wireless--in-case-you-missed-sunday2.html","audio":"https://audio.mediaworks.nz/content/radiolive/WvWsat/281018_WVW_Skepticalthoughts.mp3"},{"date":"2018-10-14","host":"Graeme Hill","url":"https://www.radiolive.co.nz/home/on-demand/weekend-variety-wireless/2018/10/weekend-variety-wireless--in-case-you-missed-sunday0.html","audio":"https://audio.mediaworks.nz/content/radiolive/WVWSun/141018_WVW_Skepticalthoughts.mp3"},{"date":"2018-09-30","host":"Graeme Hill","url":"https://www.radiolive.co.nz/home/on-demand/weekend-variety-wireless/2018/09/weekend-variety-wireless--in-case-you-missed-sunday.html","audio":"https://audio.mediaworks.nz/content/radiolive/WVWSun/300918_WVW_Sketicalthouhgts_2.mp3"},{"date":"2018-09-16","host":"Ryan Bradley","url":"https://www.radiolive.co.nz/home/on-demand/weekend-variety-wireless/2018/09/skeptical-thoughts--indian-scammers--alex-jones-losing-his-grip.html","audio":"https://audio.mediaworks.nz/content/radiolive/WVWSun/160918_WVW_Skepticalthoughts.mp3"},{"date":"2018-09-02","host":"Graeme Hill","url":"https://www.radiolive.co.nz/home/on-demand/weekend-variety-wireless/2018/08/skeptical-thoughts--preaching-in-schools-and-allergy-expo-sed-.html","audio":"https://audio.mediaworks.nz/content/radiolive/WVWSun/020918_WVW_Skepticalthoughts.mp3"},{"date":"2018-08-19","host":"Graeme Hill","url":"https://www.radiolive.co.nz/home/on-demand/weekend-variety-wireless/2018/08/skeptical-thoughts--190818-charlatains.html","audio":"https://audio.mediaworks.nz/content/radiolive/WVWSun/1990818_WVW_Skepticalthoughts.mp3"},{"date":"2018-08-05","host":"Graeme Hill","url":"https://www.radiolive.co.nz/home/on-demand/weekend-variety-wireless/2018/08/skeptical-thoughts--what-really-happens-at-a-skeptic-s-conferenc.html","audio":"https://audio.mediaworks.nz/content/radiolive/WVWSun/050818_WVW_Skepticalthoughts.mp3"},{"date":"2018-07-22","host":"Graeme Hill","url":"https://www.radiolive.co.nz/home/on-demand/weekend-variety-wireless/2018/07/skeptical-thoughts-0.html","audio":"https://audio.mediaworks.nz/content/radiolive/WVWSun/Honeychurch.mp3"},{"date":"2018-07-08","host":"Graeme Hill","url":"https://www.radiolive.co.nz/home/on-demand/weekend-variety-wireless/2018/07/skeptical-thoughts--aids-denialism-and-bullet-repellent.html","audio":"https://audio.mediaworks.nz/content/radiolive/WVWSun/skeptical_thoughts.mp3"},{"date":"2018-06-24","host":"Graeme Hill","url":"https://www.radiolive.co.nz/home/on-demand/weekend-variety-wireless/2018/06/skeptical-thoughts--hotdog-water--cannabis-oil.html","audio":"https://audio.mediaworks.nz/content/radiolive/WVWSun/Skeptical_Thoughts_24_6.mp3"},{"date":"2018-06-10","host":"Graeme Hill","url":"https://www.radiolive.co.nz/home/articles/weekend-variety-wireless/2018/06/skeptical-thoughts--shakti-mat---dr-oz.html","audio":"https://audio.mediaworks.nz/content/radiolive/WVWSun/Skeptical_Thoughts_10_06_18.mp3"},{"date":"2018-05-27","host":"Graeme Hill","url":"https://www.radiolive.co.nz/home/articles/weekend-variety-wireless/2018/05/skeptical-thoughts--flat-earthers--lochness-monster.html","audio":"https://audio.mediaworks.nz/content/radiolive/WVWSun/Skeptical_Thoughts_27_05.mp3"},{"date":"2018-05-13","host":"Graeme Hill","url":"https://www.radiolive.co.nz/home/articles/weekend-variety-wireless/2018/05/skeptical-thoughts--healing-crystals---wondermins.html","audio":"https://audio.mediaworks.nz/content/radiolive/WVWSun/SkepticalThoughts13_05_18.mp3"},{"date":"2018-04-29","host":"Graeme Hill","url":"https://www.radiolive.co.nz/home/articles/weekend-variety-wireless/2018/04/skeptical-thoughts--homeopathy---ken-ring.html","audio":"https://audio.mediaworks.nz/content/radiolive/WVWSun/MarkHoneychurch29_04_18.mp3"},{"date":"2018-04-15","host":"Graeme Hill","url":"https://www.radiolive.co.nz/home/articles/weekend-variety-wireless/2018/04/skeptical-thoughts--ufo-s---flat-earth.html","audio":"https://audio.mediaworks.nz/content/radiolive/WVWSun/SkepticalThoughts15_04_18.mp3"},{"date":"2018-04-08","host":"Graeme Hill","url":"https://www.radiolive.co.nz/home/articles/weekend-variety-wireless/2018/04/skeptical-thoughts--diet-pills---life-expectancy.html","audio":"https://audio.mediaworks.nz/content/radiolive/WVWSun/MarkHoneychurch08_04_18.mp3"},{"date":"2018-03-18","host":"Ryan Bradley"},{"date":"2018-03-11","host":"Graeme Hill","url":"https://www.radiolive.co.nz/home/articles/weekend-variety-wireless/2018/03/skeptical-thoughts--artificial-intelligence.html","audio":"https://audio.mediaworks.nz/content/radiolive/WVWSun/Skeptical_Thoughts_11_03_18.mp3"},{"date":"2018-02-25","host":"Graeme Hill","url":"https://www.radiolive.co.nz/home/articles/weekend-variety-wireless/2018/02/skeptical-thoughts--laying-eggs--animal-quackery-and-the-spaghet.html","audio":"https://audio.mediaworks.nz/content/radiolive/WVWSun/Skeptical_Thoughts.mp3"},{"date":"2018-02-11","host":"Graeme Hill","url":"https://www.radiolive.co.nz/home/articles/weekend-variety-wireless/2018/02/skeptical-thoughts---cannabis--the-asa-and-the-roundness-of-the-.html","audio":"https://audio.mediaworks.nz/content/radiolive/SundaySocial/Weekend_Variety_Wireless_skeptics.mp3"},{"date":"2018-01-28","host":"Graeme Hill","url":"https://www.radiolive.co.nz/home/audio/2018/01/skeptical-thoughts-with-mark-honeychurch0.html","audio":"https://audio.mediaworks.nz/content/radiolive/WVWSun/SkepticalThoughts28_01_18.mp3"},{"date":"2018-01-21","host":"Ryan Bradley","url":"https://www.radiolive.co.nz/home/audio/2018/01/skeptical-thoughts-with-mark-honeychurch.html","audio":"https://audio.mediaworks.nz/content/radiolive/WVWSun/SkepticalThoughts21_01_18.mp3"},{"date":"2017-12-17","host":"Graeme Hill","url":"https://www.radiolive.co.nz/home/audio/2017/12/skeptical-thoughts-with-mark-honeychurch0.html","audio":"https://audio.mediaworks.nz/content/radiolive/WVWSun/Skepticalthoughts17_12_17.mp3"},{"date":"2017-12-03","host":"Ryan Bradley","url":"https://www.radiolive.co.nz/home/audio/2017/12/skeptical-thoughts-with-mark-honeychurch.html","audio":"https://audio.mediaworks.nz/content/radiolive/Hill/Dec17/SkepticalThoughts3_12_17.mp3"},{"date":"2017-11-12","host":"Graeme Hill","url":"https://www.radiolive.co.nz/home/audio/2017/11/clare-curran--labour-mp/skeptical-thoughts-with-mark-honeychurch.html","audio":"https://audio.mediaworks.nz/content/radiolive/Hill/Nov17/SkepticalThoughts12_11_17.mp3"},{"date":"2017-11-05","host":"Graeme Hill","url":"https://www.radiolive.co.nz/home/audio/2017/11/skeptical-thoughts-with-mark-honeychurch.html","audio":"https://audio.mediaworks.nz/content/radiolive/Hill/Nov17/SkepticalThoughts5_11_17.mp3"},{"date":"2017-10-15","host":"Graeme Hill","url":"https://www.radiolive.co.nz/home/audio/2017/10/skeptical-thoughts-with-mark-honeychurch-and-robert-bartholomew.html","audio":"https://audio.mediaworks.nz/content/radiolive/Hill/Oct 17/Speticalthoughts15_10_17.mp3"},{"date":"2017-10-08","host":"Ryan Bradley","url":"https://www.radiolive.co.nz/home/audio/2017/10/skeptical-thoughts-with-mark-honeychurch.html","audio":"https://audio.mediaworks.nz/content/radiolive/Hill/Oct 17/Mark HoneyChurch 8_10_17.mp3"},{"date":"2017-10-01","host":"Ryan Bradley","url":"https://www.radiolive.co.nz/home/audio/2017/09/skeptical-thoughts.html","audio":"https://audio.mediaworks.nz/content/radiolive/Hill/Oct 17/Mark HoneyChurch 1_10_17.mp3"},{"date":"2017-09-03","host":"Graeme Hill","url":"https://www.radiolive.co.nz/home/audio/2017/09/skeptical-thoughts-with-mark-honeychurch.html","audio":"https://audio.mediaworks.nz/content/radiolive/Weekend Variety Wireless/September/03_09_17_Skeptical.mp3"},{"date":"2017-08-27","host":"Graeme Hill","url":"https://www.radiolive.co.nz/home/audio/2017/08/skeptical-thoughts-with-mark-honeychurch0.html","audio":"https://audio.mediaworks.nz/content/radiolive/Weekend Variety Wireless/August17/27_08_17_Skeptical.mp3"},{"date":"2017-08-06","host":"Graeme Hill","url":"https://www.radiolive.co.nz/home/audio/2017/08/skeptical-thoughts-with-mark-honeychurch.html","audio":"https://audio.mediaworks.nz/content/radiolive/Weekend Variety Wireless/August17/06_08_17_Skeptical.mp3"},{"date":"2017-07-30","host":"Graeme Hill","url":"https://www.radiolive.co.nz/home/audio/2017/07/skeptical-thoughts-with-mark-honeychurch0.html","audio":"https://audio.mediaworks.nz/content/radiolive/Weekend Variety Wireless/July 17/30_07_17_Skeptical.mp3"},{"date":"2017-07-16","host":"Graeme Hill","url":"https://www.radiolive.co.nz/home/audio/2017/07/skeptical-thoughts-with-mark-honeychurch.html","audio":"https://audio.mediaworks.nz/content/radiolive/Weekend Variety Wireless/July 17/16_07_17_Skeptical.mp3"},{"date":"2017-07-02","host":"Graeme Hill","url":"https://www.radiolive.co.nz/home/audio/2017/06/skeptical-thoughts-with-mark-honeychurch1.html","audio":"https://audio.mediaworks.nz/content/radiolive/Weekend Variety Wireless/July 17/02_07_17_Skeptical.mp3"},{"date":"2017-06-18","host":"Ryan Bradley","url":"https://www.radiolive.co.nz/home/audio/2017/06/skeptical-thoughts-with-mark-honeychurch0.html","audio":"https://audio.mediaworks.nz/content/radiolive/Weekend Variety Wireless/June 17/18_06_17_Skeptical.mp3"},{"date":"2017-06-11","host":"Graeme Hill","url":"https://www.radiolive.co.nz/home/audio/2017/06/skeptical-thoughts.html","audio":"https://audio.mediaworks.nz/content/radiolive/Hill/June18/110617_WvW_Skeptical.mp3"},{"date":"2017-06-04","host":"Graeme Hill","url":"https://www.radiolive.co.nz/home/audio/2017/06/skeptical-thoughts-with-mark-honeychurch.html","audio":"https://audio.mediaworks.nz/content/radiolive/Weekend Variety Wireless/June 17/04_06_17_Skeptical.mp3"},{"date":"2017-05-21","host":"Graeme Hill","url":"https://www.radiolive.co.nz/home/audio/2017/051/skeptical-thoughts-with-mark-honeychurch.html","audio":"https://audio.mediaworks.nz/content/radiolive/Weekend Variety Wireless/May 17/21_05_17_Skeptical.mp3"},{"date":"2017-05-07","host":"Graeme Hill","url":"https://www.radiolive.co.nz/home/audio/2017/051/skeptical-thoughts.html","audio":"https://audio.mediaworks.nz/content/radiolive/Hill/May17/070517_WvW_Skeptics.mp3"},{"date":"2017-04-23","host":"Graeme Hill"},{"date":"2017-04-09","host":"Graeme Hill","url":"https://www.radiolive.co.nz/home/audio/2017/04/skeptical-thoughts-with-mark-honeychurch.html","audio":"https://audio.mediaworks.nz/content/radiolive/Weekend Variety Wireless/April 2017/09_04_17_skeptical.mp3"},{"date":"2017-04-02","host":"Graeme Hill","url":"https://www.radiolive.co.nz/home/audio/2017/04/skeptical-thoughts-with-mark-honeychurch-02-04-2017.html","audio":"https://audio.mediaworks.nz/content/radiolive/Weekend Variety Wireless/April 2017/02_04_17_Skeptical.mp3"},{"date":"2017-03-26","host":"Graeme Hill"},{"date":"2017-03-19","host":"Graeme Hill"},{"date":"2017-03-05","host":"Graeme Hill","url":"https://www.radiolive.co.nz/home/audio/2017/03/skeptical-thoughts-with-mark-honeychurch.html","audio":"https://audio.mediaworks.nz/content/radiolive/Weekend Variety Wireless/Mar 2017/05_03_17_Mark.mp3"},{"date":"2017-02-19","host":"Graeme Hill"},{"date":"2017-02-05","host":"Graeme Hill","url":"https://www.radiolive.co.nz/home/audio/2017/02/skeptical-thoughts-with-mark-honeychurch.html","audio":"https://audio.mediaworks.nz/content/radiolive/Weekend Variety Wireless/Feb 2017/05_02_17_Honeychurch.mp3"},{"date":"2017-01-29","host":"Ryan Bradley","url":"https://www.radiolive.co.nz/Skeptical-Thoughts-with-Mark-Honeychurch/tabid/506/articleID/135838/Default.aspx","audio":"http://prog.radiolive.co.nz/radiolive/Weekend Variety Wireless/Jan 2017/29_01_17_Mark.mp3"},{"date":"2017-01-22","host":"Graeme Hill"},{"date":"2016-12-18","host":"Graeme Hill"},{"date":"2016-12-04","host":"Graeme Hill"},{"date":"2016-11-27","host":"Graeme Hill"},{"date":"2016-11-13","host":"Graeme Hill","url":"https://www.radiolive.co.nz/Skeptical-Thoughts/tabid/506/articleID/132514/Default.aspx","audio":"http://prog.radiolive.co.nz/radiolive/Hill/Nov16/131116_WvW_Skeptical.mp3"},{"date":"2016-10-21","host":"Peter Elliott","url":"https://www.radiolive.co.nz/Skeptical-thoughts-with-Mark-Honeychurch/tabid/506/articleID/130488/Default.aspx","audio":"http://prog.radiolive.co.nz/radiolive/Hill/Oct16/231016_WvW_Skeptical.mp3"},{"date":"2016-09-25","host":"Graeme Hill"},{"date":"2016-09-18","host":"Graeme Hill"},{"date":"2016-08-28","host":"Graeme Hill"},{"date":"2016-08-21","host":"Graeme Hill"},{"date":"2016-08-07","host":"Graeme Hill"},{"date":"2016-07-17","host":"Graeme Hill"},{"date":"2016-07-10","host":"Graeme Hill"},{"date":"2016-07-03","host":"Graeme Hill"},{"date":"2016-06-26","host":"Graeme Hill"},{"date":"2016-06-19","host":"Graeme Hill"},{"date":"2016-06-12","host":"Graeme Hill"},{"date":"2016-06-05","host":"Graeme Hill"},{"date":"2016-04-17","host":"Graeme Hill"},{"date":"2016-03-13","host":"Graeme Hill","url":"https://www.radiolive.co.nz/Skeptical-Thoughts-with-Mark-Honeychurch/tabid/506/articleID/116614/Default.aspx","audio":"http://prog.radiolive.co.nz/radiolive/Hill/Mar16/Skeptical130316.mp3"},{"date":"2016-02-28","host":"Graeme Hill"},{"date":"2016-02-21","host":"Graeme Hill","url":"https://www.radiolive.co.nz/Skeptical-Thoughts-with-Mark-Honeychurch/tabid/506/articleID/113511/Default.aspx","audio":"http://prog.radiolive.co.nz/radiolive/Hill/Feb16/Skeptical210216.mp3"},{"date":"2016-02-14","host":"Graeme Hill","url":"https://www.radiolive.co.nz/Skeptical-Thoughts-with-Mark-Honeychurch/tabid/506/articleID/112772/Default.aspx","audio":"http://prog.radiolive.co.nz/radiolive/Hill/Feb16/Skeptical070216.mp3"},{"date":"2016-02-07","host":"Graeme Hill"},{"date":"2015-12-13","host":"Graeme Hill"},{"date":"2015-11-15","host":"Graeme Hill"},{"date":"2015-10-11","host":"Graeme Hill","url":"http://www.radiolive.co.nz/Skeptical-Thoughts-with-Mark-Honeychurch/tabid/506/articleID/102360/Default.aspx","audio":"http://prog.radiolive.co.nz/radiolive/Hill/Oct15/111015_Skeptical_Thoughts.mp3"},{"date":"2015-10-04","host":"Simon Pound","url":"http://www.radiolive.co.nz/Skeptical-Thoughts-with-Mark-Honeychurch/tabid/506/articleID/101721/Default.aspx","audio":"http://prog.radiolive.co.nz/radiolive/Hill/Oct15/Skeptical041015.mp3"},{"date":"2015-09-27","host":"Simon Pound","url":"http://www.radiolive.co.nz/Skeptical-Thoughts-with-Mark-Honeychurch/tabid/506/articleID/101151/Default.aspx","audio":"http://prog.radiolive.co.nz/radiolive/Hill/Sept15/270915_skepticalthoughts.mp3"},{"date":"2015-09-20","host":"Graeme Hill","url":"https://www.radiolive.co.nz/Skeptical-Thoughts-with-Mark-Honeychurch/tabid/506/articleID/100607/Default.aspx","audio":"http://prog.radiolive.co.nz/radiolive/Hill/Sept15/200915-Skeptical_Thoughts.mp3.mp3"},{"date":"2015-08-16","host":"Graeme Hill","url":"https://www.radiolive.co.nz/Skeptical-Thoughts-with-Mark-Honeychurch/tabid/506/articleID/94312/Default.aspx","audio":"http://prog.radiolive.co.nz/radiolive/Hill/August15/160815_skepticalthoughts.mp3"}]')},226:function(e,t,a){},232:function(e,t,a){"use strict";a.r(t);var o={components:{posts:a(160).a},props:{date:{type:Boolean,default:!1},dates:{type:Boolean,default:!1},excerpt:{type:Boolean,default:!0},taxonomy:{type:Boolean,default:!0}},data(){return{showexcerpt:this.excerpt,showtaxonomy:this.taxonomy,showdates:this.dates}},computed:{posts(){return this.$site.pages.filter(e=>e.path.startsWith(this.$page.path)&&e.frontmatter.title).sort((e,t)=>new Date(t.frontmatter.date)-new Date(e.frontmatter.date))}}},i=(a(181),a(5)),s=Object(i.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",["/blog/"==e.$page.path?a("ul",e._l(e.$site.themeConfig.nav.filter((function(e){return"Blog"==e.text}))[0].items,(function(t){return a("li",[a("h2",[a("router-link",{attrs:{to:t.link}},[e._v(e._s(t.text))])],1),e._v(" "),a("p",[e._v(e._s(t.description))]),e._v(" "),t.items?a("ul",e._l(t.items,(function(t){return a("li",[a("h2",[a("router-link",{attrs:{to:t.link}},[e._v(e._s(t.text))])],1),e._v(" "),a("p",[e._v(e._s(t.description))])])})),0):e._e()])})),0):[a("hr"),e._v(" "),a("em",[e._v("Show")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.showexcerpt,expression:"showexcerpt"}],attrs:{type:"checkbox",id:"excerpt"},domProps:{checked:Array.isArray(e.showexcerpt)?e._i(e.showexcerpt,null)>-1:e.showexcerpt},on:{change:function(t){var a=e.showexcerpt,o=t.target,i=!!o.checked;if(Array.isArray(a)){var s=e._i(a,null);o.checked?s<0&&(e.showexcerpt=a.concat([null])):s>-1&&(e.showexcerpt=a.slice(0,s).concat(a.slice(s+1)))}else e.showexcerpt=i}}}),e._v(" "),a("label",{attrs:{for:"excerpt"}},[e._v("Excerpt")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.showtaxonomy,expression:"showtaxonomy"}],attrs:{type:"checkbox",id:"taxonomy"},domProps:{checked:Array.isArray(e.showtaxonomy)?e._i(e.showtaxonomy,null)>-1:e.showtaxonomy},on:{change:function(t){var a=e.showtaxonomy,o=t.target,i=!!o.checked;if(Array.isArray(a)){var s=e._i(a,null);o.checked?s<0&&(e.showtaxonomy=a.concat([null])):s>-1&&(e.showtaxonomy=a.slice(0,s).concat(a.slice(s+1)))}else e.showtaxonomy=i}}}),e._v(" "),a("label",{attrs:{for:"taxonomy"}},[e._v("Categories")]),e._v(" "),e.date?a("input",{directives:[{name:"model",rawName:"v-model",value:e.showdates,expression:"showdates"}],attrs:{type:"checkbox",id:"dates"},domProps:{checked:Array.isArray(e.showdates)?e._i(e.showdates,null)>-1:e.showdates},on:{change:function(t){var a=e.showdates,o=t.target,i=!!o.checked;if(Array.isArray(a)){var s=e._i(a,null);o.checked?s<0&&(e.showdates=a.concat([null])):s>-1&&(e.showdates=a.slice(0,s).concat(a.slice(s+1)))}else e.showdates=i}}}):e._e(),e._v(" "),e.date?a("label",{attrs:{for:"dates"}},[e._v("Date")]):e._e(),e._v(" "),a("hr"),e._v(" "),a("posts",{attrs:{posts:e.posts,excerpt:e.showexcerpt,taxonomy:e.showtaxonomy,dates:e.showdates}})]],2)}),[],!1,null,"41848517",null);t.default=s.exports},556:function(e,t,a){"use strict";a(226)},597:function(e,t,a){"use strict";a.r(t);var o=a(182),i={components:{posts:a(232).default},data:()=>({radio:o}),computed:{segments:function(){var e=this.$page.path.split("/"),t={show:!0};return e.length>=5&&(t.period="year",t.date=e[3],t.year=e[3]),e.length>=6&&(t.period="month",t.date+="-"+e[4],t.month=e[4]),e.length>=7&&(t.period="week",t.date+="-"+e[5],t.day=("0"+e[5]).slice(-2),t.show=!1),t.audio=this.radio.filter(e=>e.date==t.date),t}},methods:{getOrdinalNum:function(e){return e+(e>0?["th","st","nd","rd"][e>3&&e<21||e%10>3?0:e%10]:"")},getMonthName:function(e){return["January","February","March","April","May","June","July","August","September","October","November","December"][e-1]}}},s=(a(556),a(5)),r=Object(s.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e.segments.day?[a("router-link",{attrs:{to:"/blog/skepticism/"+e.segments.year+"/"+e.segments.month+"/"+e.segments.day+"/"}},[e._v(e._s(e.getOrdinalNum(e.segments.day)))])]:e._e(),e._v(" "),e.segments.month?[a("router-link",{attrs:{to:"/blog/skepticism/"+e.segments.year+"/"+e.segments.month+"/"}},[e._v(e._s(e.getMonthName(e.segments.month)))])]:e._e(),e._v(" "),a("router-link",{attrs:{to:"/blog/skepticism/"+e.segments.year+"/"}},[e._v(e._s(e.segments.year))])],2),e._v(" "),a("p",[e._v("\n\t\tHere are the topics I chose to talk about on RadioLive for the "+e._s(e.segments.period)+". Some of them may not have been mentioned\n\t\t"),"week"==e.segments.period&&e.segments.audio.length>0?a("a",{attrs:{href:e.segments.audio[0].url}},[e._v("on the radio")]):[e._v("on the radio")],e._v(" due to a lack of time.\n\t")],2),e._v(" "),e._l(e.segments.audio,(function(t){return e.segments.audio.length>0?a("audio",{attrs:{controls:"",src:t.audio}}):e._e()})),e._v(" "),a("posts",{attrs:{dates:e.segments.show,date:e.segments.show}})],2)}),[],!1,null,"0919f1ce",null);t.default=r.exports}}]);