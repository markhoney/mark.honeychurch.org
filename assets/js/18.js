(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{156:function(t,e,o){},158:function(t,e,o){"use strict";var s={computed:{section:function(){return this.$page.path.split("/")[2]}}},a=o(5),n={props:["categories"]},r={props:["tags"]},i={components:{PostSection:Object(a.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("router-link",{attrs:{to:"/blog/"+this.section+"/"}},[this._v("\n\t"+this._s(this.section.charAt(0).toUpperCase())+this._s(this.section.slice(1))+"\n")])}),[],!1,null,null,null).exports,Categories:Object(a.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.categories?o("span",t._l(t.categories,(function(e,s){return o("router-link",{key:s,attrs:{to:"/blog/category/?name="+e}},[t._v(t._s(e)),s+1<t.categories.length?o("span",[t._v(", ")]):t._e()])})),1):t._e()}),[],!1,null,null,null).exports,Tags:Object(a.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.tags?o("span",t._l(t.tags,(function(e,s){return o("router-link",{key:s,attrs:{to:"/blog/tag/?name="+e}},[t._v(t._s(e)),s+1<t.tags.length?o("span",[t._v(", ")]):t._e()])})),1):t._e()}),[],!1,null,null,null).exports},props:{post:{type:Object},sections:{type:Boolean,default:!0},categories:{type:Boolean,default:!0},tags:{type:Boolean,default:!0}},computed:{showsection:function(){if(this.section)return!0},showcategories:function(){if(this.categories&&this.post.frontmatter.categories)return!0},showtags:function(){if(this.tags&&this.post.frontmatter.tags)return!0}}},c=Object(a.a)(i,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[t.showsection?[o("em",[t._v("Section:")]),t._v(" "),o("post-section"),t._v(" "),t.showcategories||t.showtags?[t._v(",")]:t._e()]:t._e(),t._v(" "),t.showcategories?[o("em",[t._v("Categories:")]),t._v(" "),o("categories",{attrs:{categories:t.post.frontmatter.categories}}),t._v(" "),t.showtags?[t._v(",")]:t._e()]:t._e(),t._v(" "),t.showtags?[o("em",[t._v("Tags:")]),t._v(" "),o("tags",{attrs:{tags:t.post.frontmatter.tags}})]:t._e()],2)}),[],!1,null,null,null);e.a=c.exports},159:function(t,e,o){"use strict";o(156)},160:function(t,e,o){"use strict";var s={components:{Taxonomy:o(158).a},props:{posts:{type:Array},dates:{type:Boolean,default:!1},excerpt:{type:Boolean,default:!0},taxonomy:{type:Boolean,default:!0},sections:{type:Boolean,default:!1},categories:{type:Boolean,default:!0},tags:{type:Boolean,default:!0}},computed:{postdates(){return this.posts.map(t=>t.frontmatter.date).filter((t,e,o)=>t&&o.indexOf(t)===e)}}},a=(o(159),o(5)),n=Object(a.a)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("ul",[t._l(t.postdates,(function(e){return[t.dates?o("li",{staticClass:"date"},[o("h2",[o("router-link",{attrs:{to:"/blog/skepticism/"+new Date(e).toISOString().slice(0,10).split("-").join("/")+"/"}},[t._v(t._s(new Date(e).toLocaleDateString("en-NZ",{year:"numeric",month:"long",day:"numeric"})))])],1)]):t._e(),t._v(" "),t._l(t.posts,(function(s){return s.frontmatter.date==e?o("li",{key:s.path},[o("h3",[o("router-link",{attrs:{to:s.path}},[t._v(t._s(s.title))])],1),t._v(" "),t.taxonomy?o("taxonomy",{staticStyle:{"text-align":"left"},attrs:{post:s,sections:t.sections,categories:t.categories,tags:t.tags}}):t._e(),t._v(" "),t.excerpt&&s.excerpt?[o("p",{domProps:{innerHTML:t._s(s.excerpt)}}),t._v(" "),o("p",{staticStyle:{"text-align":"right"}},[s.readingTime?o("em",[t._v(t._s(s.readingTime.text)+", "+t._s(s.readingTime.words)+" words.")]):t._e(),t._v(" "),o("router-link",{attrs:{to:s.path}},[t._v("Continue Reading...")])],1)]:t._e()],2):t._e()}))]}))],2)])}),[],!1,null,"1fce844a",null);e.a=n.exports},167:function(t,e,o){},176:function(t,e,o){"use strict";o(167)},227:function(t,e,o){"use strict";o.r(e);var s={components:{posts:o(160).a},props:{date:{type:Boolean,default:!1},dates:{type:Boolean,default:!1},excerpt:{type:Boolean,default:!0},taxonomy:{type:Boolean,default:!0}},data(){return{showexcerpt:this.excerpt,showtaxonomy:this.taxonomy,showdates:this.dates}},computed:{posts(){return this.$site.pages.filter(t=>t.path.startsWith(this.$page.path)&&t.frontmatter.title).sort((t,e)=>new Date(e.frontmatter.date)-new Date(t.frontmatter.date))}}},a=(o(176),o(5)),n=Object(a.a)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",["/blog/"==t.$page.path?o("ul",t._l(t.$site.themeConfig.nav.filter((function(t){return"Blog"==t.text}))[0].items,(function(e){return o("li",[o("h2",[o("router-link",{attrs:{to:e.link}},[t._v(t._s(e.text))])],1),t._v(" "),o("p",[t._v(t._s(e.description))]),t._v(" "),e.items?o("ul",t._l(e.items,(function(e){return o("li",[o("h2",[o("router-link",{attrs:{to:e.link}},[t._v(t._s(e.text))])],1),t._v(" "),o("p",[t._v(t._s(e.description))])])})),0):t._e()])})),0):[o("hr"),t._v(" "),o("em",[t._v("Show")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.showexcerpt,expression:"showexcerpt"}],attrs:{type:"checkbox",id:"excerpt"},domProps:{checked:Array.isArray(t.showexcerpt)?t._i(t.showexcerpt,null)>-1:t.showexcerpt},on:{change:function(e){var o=t.showexcerpt,s=e.target,a=!!s.checked;if(Array.isArray(o)){var n=t._i(o,null);s.checked?n<0&&(t.showexcerpt=o.concat([null])):n>-1&&(t.showexcerpt=o.slice(0,n).concat(o.slice(n+1)))}else t.showexcerpt=a}}}),t._v(" "),o("label",{attrs:{for:"excerpt"}},[t._v("Excerpt")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.showtaxonomy,expression:"showtaxonomy"}],attrs:{type:"checkbox",id:"taxonomy"},domProps:{checked:Array.isArray(t.showtaxonomy)?t._i(t.showtaxonomy,null)>-1:t.showtaxonomy},on:{change:function(e){var o=t.showtaxonomy,s=e.target,a=!!s.checked;if(Array.isArray(o)){var n=t._i(o,null);s.checked?n<0&&(t.showtaxonomy=o.concat([null])):n>-1&&(t.showtaxonomy=o.slice(0,n).concat(o.slice(n+1)))}else t.showtaxonomy=a}}}),t._v(" "),o("label",{attrs:{for:"taxonomy"}},[t._v("Categories")]),t._v(" "),t.date?o("input",{directives:[{name:"model",rawName:"v-model",value:t.showdates,expression:"showdates"}],attrs:{type:"checkbox",id:"dates"},domProps:{checked:Array.isArray(t.showdates)?t._i(t.showdates,null)>-1:t.showdates},on:{change:function(e){var o=t.showdates,s=e.target,a=!!s.checked;if(Array.isArray(o)){var n=t._i(o,null);s.checked?n<0&&(t.showdates=o.concat([null])):n>-1&&(t.showdates=o.slice(0,n).concat(o.slice(n+1)))}else t.showdates=a}}}):t._e(),t._v(" "),t.date?o("label",{attrs:{for:"dates"}},[t._v("Date")]):t._e(),t._v(" "),o("hr"),t._v(" "),o("posts",{attrs:{posts:t.posts,excerpt:t.showexcerpt,taxonomy:t.showtaxonomy,dates:t.showdates}})]],2)}),[],!1,null,"3552b4af",null);e.default=n.exports}}]);