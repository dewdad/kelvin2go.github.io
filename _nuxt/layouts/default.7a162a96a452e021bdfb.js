webpackJsonp([4],{"4h0F":function(t,a,e){"use strict";var i=e("p5fX"),r=e("u7Aj"),n=!1;var o=function(t){n||e("T3Ex")},s=e("VU/8")(i.a,r.a,!1,o,"data-v-5c5c2f84",null);s.options.__file="components/parallax-main.vue",a.a=s.exports},"6B4C":function(t,a,e){"use strict";var i=e("4h0F"),r=e("eCWL");a.a={data:function(){return{clipped:!1,drawer:!1,fixed:!1,scroll:0,items:[{icon:"home",title:"Home",to:"/"},{icon:"library_books",title:"Blogs",to:"/posts"},{icon:"portrait",title:"Showcases",to:"/showcases"},{icon:"favorite",title:"Side Projects",to:"/sideprojects"}],itemsExt:[{faIcon:"facebook",title:"",to:"https://www.facebook.com/kelvinho84",target:"_blank"},{faIcon:"github",title:"",to:"https://github.com/kelvin2go",target:"_blank"},{faIcon:"twitter",title:"",to:"https://twitter.com/kelvin_ho84",target:"_blank"},{faIcon:"slack",title:"@kelvinho84",to:"https://codeaholics.slack.com/",target:"_blank"},{faIcon:"pinterest",title:"",to:"https://pinterest.com/kelvin2go/",target:"_blank"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"KELVIN HO"}},methods:{handleScroll:function(){this.scroll=window.scrollY}},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},components:{Parallax:i.a,ParallaxSub:r.a}}},DkjD:function(t,a,e){var i=e("OKXf");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("d6b0dfe2",i,!1,{sourceMap:!1})},H5e4:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,".parallax{font-family:Raleway,Helvetica,Arial,sans-serif;z-index:100;font-size:28px}.parallax .headline{font-size:38px}",""])},K0tf:function(t,a,e){var i=e("H5e4");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("2a5a8643",i,!1,{sourceMap:!1})},Ma2J:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("6B4C"),r=e("R7nB"),n=!1;var o=function(t){n||(e("DkjD"),e("gJcU"))},s=e("VU/8")(i.a,r.a,!1,o,"data-v-314f53c6",null);s.options.__file="layouts/default.vue",a.default=s.exports},Mt2U:function(t,a,e){"use strict";a.a={data:function(){return{mainTitle:"What I LOVE? ",subTitle:"🍿 Movie, MARVEL, 🏸 badminton, 🐟 Aquarium, IOT,  Web platform",btnText:"KNOW MORE"}}}},OKXf:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,"@media screen and (min-width:0px) and (max-width:600px){#app .menuText[data-v-314f53c6]{display:none}}#app .toolbar[data-v-314f53c6]{z-index:300;background:rgba(18,21,20,.2);font-family:Raleway,Helvetica,Arial,sans-serif}#app .toolbar.solid[data-v-314f53c6]{background:rgba(18,21,20,.3)}#app .main.parallax[data-v-314f53c6]{position:absolute;top:0}#app .main.content[data-v-314f53c6]{background:#f4f7f6}#app a[data-v-314f53c6],#app a[data-v-314f53c6]:link,#app a[data-v-314f53c6]:visited{color:#63b5f7;text-decoration:none}#app a#brand[data-v-314f53c6],#app a:link#brand[data-v-314f53c6],#app a:visited#brand[data-v-314f53c6]{color:#fff;border:1px solid #fff;padding:4px}#app a .toolbar__title[data-v-314f53c6],#app a:link .toolbar__title[data-v-314f53c6],#app a:visited .toolbar__title[data-v-314f53c6]{margin-left:0}#app a .toolbar__title .list__tile__content[data-v-314f53c6],#app a:link .toolbar__title .list__tile__content[data-v-314f53c6],#app a:visited .toolbar__title .list__tile__content[data-v-314f53c6]{text-transform:uppercase}#app .footer[data-v-314f53c6]{padding-top:30px;min-height:356px}#app .footer .footer-btn .btn[data-v-314f53c6]{min-width:38px}#app .footer .titleText[data-v-314f53c6]{text-align:center;color:#707070;border:1px solid #707070;padding:4px}#app .footer .footer-list[data-v-314f53c6]{color:#707070;font-size:14px;padding-top:15px;background:none}#app .footer .footer-list a[data-v-314f53c6],#app .footer .footer-list a[data-v-314f53c6]:link,#app .footer .footer-list a[data-v-314f53c6]:visited{color:#707070!important;text-decoration:none}#app .footer .footer-list .list__tile .list__tile__content[data-v-314f53c6]{text-transform:uppercase;-webkit-box-orient:unset;-webkit-box-direction:unset;-ms-flex-direction:unset;flex-direction:unset}",""])},R7nB:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-toolbar",{class:{solid:this.scroll>48},attrs:{dark:"",fixed:"",app:"","clipped-left":t.clipped},on:{scroll:t.handleScroll}},[e("a",{attrs:{id:"brand",href:"/"}},[e("v-toolbar-title",{staticClass:"titleText",domProps:{textContent:t._s(t.title)}})],1),e("v-spacer"),t._l(t.items,function(a,i){return e("v-list-tile",{key:i,staticClass:"menuText",attrs:{router:"",to:a.to,exact:""}},[e("v-list-tile-content",[e("v-list-tile-title",{domProps:{textContent:t._s(a.title)}})],1)],1)}),e("v-btn",{attrs:{icon:""},on:{click:function(a){a.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[e("v-icon",[t._v("menu")])],1)],2),e("v-content",{staticClass:"main"},["/"==t.$route.path?e("section",[e("Parallax",{staticClass:"main"}),e("nuxt")],1):e("v-container",[e("nuxt")],1)],1),e("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,right:t.right,fixed:"",app:"",dark:""},on:{"update:miniVariant":function(a){t.miniVariant=a}},model:{value:t.rightDrawer,callback:function(a){t.rightDrawer=a},expression:"rightDrawer"}},[e("v-list",[e("v-subheader",[t._v("KELVIN HO")]),t._l(t.items,function(a,i){return e("v-list-tile",{key:i,attrs:{router:"",to:a.to,exact:""}},[e("v-list-tile-action",[e("v-icon",{domProps:{innerHTML:t._s(a.icon)}})],1),e("v-list-tile-content",[e("v-list-tile-title",{domProps:{textContent:t._s(a.title)}})],1)],1)})],2),e("v-divider"),e("v-list",{attrs:{subheader:""}},[e("v-subheader",[t._v("Contract")]),t._l(t.itemsExt,function(a){return e("v-list-tile",{key:a.faIcon,staticClass:"ext-icon",attrs:{avatar:"",href:a.to,target:a.target}},[a.icon?e("v-icon",{domProps:{innerHTML:t._s(a.icon)}}):t._e(),a.faIcon?e("font-awesome-icon",{attrs:{icon:["fab",a.faIcon],size:"2x"}}):t._e()],1)})],2),e("v-divider"),e("v-list",{attrs:{subheader:""}},[e("v-list-tile",[e("v-btn",{attrs:{icon:""},on:{click:function(a){t.miniVariant=!t.miniVariant}}},[e("v-icon",[t._v("photo_size_select_small")])],1)],1)],1)],1),e("v-footer",{staticClass:"grey lighten-2"},[e("v-layout",{staticClass:"text-md-center",attrs:{row:"",wrap:"","align-center":""}},[e("v-flex",{attrs:{xs4:"","offset-xs4":""}},[e("a",{attrs:{href:"/"}},[e("v-toolbar-title",{staticClass:"titleText",domProps:{textContent:t._s(t.title)}})],1)]),e("v-flex",{attrs:{xs6:"","offset-xs3":""}},[e("v-list",{staticClass:"footer-list"},t._l(t.items,function(a){return e("v-list-tile",{key:a.title,attrs:{router:"",to:a.to}},[e("v-list-tile-content",[t._v("\n              "+t._s(a.title)+"\n            ")])],1)}))],1),e("v-flex",{staticClass:"footer-btn",attrs:{xs12:"","text-xs-center":""}},t._l(t.itemsExt,function(a){return e("v-btn",{key:a.faIcon,attrs:{small:"",flat:"",avatar:"",href:a.to,target:a.target}},[a.faIcon?e("font-awesome-icon",{attrs:{icon:["fab",a.faIcon],size:"2x"}}):t._e()],1)})),e("v-flex",{attrs:{xs12:""}},[e("div",{staticClass:"grey--text darken-2 ml-3"},[t._v("\n          Made with\n          "),e("v-icon",{staticClass:"green--text"},[t._v("favorite")]),t._v("\n          by "),e("a",{attrs:{href:"https://github.com/kelvin2go/"}},[t._v(" Kelvin Ho")]),t._v(" - 2018\n        ")],1)])],1)],1)],1)};i._withStripped=!0;var r={render:i,staticRenderFns:[]};a.a=r},RdIH:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-parallax",{attrs:{src:"/img/hero3.jpg",height:"380"}},[e("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[e("div",{staticClass:"headline white--text mb-3 text-xs-center"},[t._v(t._s(t.mainTitle))]),e("em",[t._v(t._s(t.subTitle))]),e("v-btn",{staticClass:"mt-5",attrs:{dark:"",large:"",outline:"",round:"",href:"/showcases"}},[t._v("\n     "+t._s(t.btnText)+"\n   ")])],1)],1)};i._withStripped=!0;var r={render:i,staticRenderFns:[]};a.a=r},T3Ex:function(t,a,e){var i=e("UqqW");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("5d0d0ccf",i,!1,{sourceMap:!1})},UqqW:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,".parallax[data-v-5c5c2f84]{font-family:Raleway,Helvetica,Arial,sans-serif;width:100%}.parallax .main-title[data-v-5c5c2f84]{letter-spacing:6px;font-size:50px;font-weight:400;line-height:46px;text-transform:uppercase}.parallax .main-title[data-v-5c5c2f84],.parallax .sub-title[data-v-5c5c2f84]{text-align:center;color:#fff;text-shadow:1px 1px 3px rgba(0,0,0,.3);padding-bottom:20px}.parallax .sub-title[data-v-5c5c2f84]{font-size:26px;font-weight:300;line-height:20px;font-style:italic}.parallax .rw-wrapper[data-v-5c5c2f84]{position:relative;margin:30px auto 0;text-shadow:1px 1px 1px hsla(0,0%,100%,.8);font-size:38px}.parallax .rw-wrapper>div[data-v-5c5c2f84]{min-height:50px}.parallax .rw-wrapper .rw-words[data-v-5c5c2f84]{position:relative}.parallax .rw-wrapper .rw-words div[data-v-5c5c2f84]{opacity:0;white-space:nowrap;position:absolute;top:0;left:0;font-size:28px}.parallax .rw-wrapper .rw-words-1 div[data-v-5c5c2f84]{opacity:0;color:#9cdede;-webkit-animation:rotateWord-data-v-5c5c2f84 35s linear infinite 0s;animation:rotateWord-data-v-5c5c2f84 35s linear infinite 0s;min-height:50px}.parallax .rw-wrapper .rw-words-1 div[data-v-5c5c2f84]:nth-child(2){-webkit-animation-delay:5s;animation-delay:5s;color:#f3b7f9}.parallax .rw-wrapper .rw-words-1 div[data-v-5c5c2f84]:nth-child(3){-webkit-animation-delay:10s;animation-delay:10s}.parallax .rw-wrapper .rw-words-1 div[data-v-5c5c2f84]:nth-child(4){-webkit-animation-delay:15s;animation-delay:15s;color:#69c5ff}.parallax .rw-wrapper .rw-words-1 div[data-v-5c5c2f84]:nth-child(5){-webkit-animation-delay:20s;animation-delay:20s}.parallax .rw-wrapper .rw-words-1 div[data-v-5c5c2f84]:nth-child(6){-webkit-animation-delay:25s;animation-delay:25s;color:#ffc76c}.parallax .rw-wrapper .rw-words-1 div[data-v-5c5c2f84]:nth-child(7){-webkit-animation-delay:30s;animation-delay:30s}@-webkit-keyframes rotateWord-data-v-5c5c2f84{0%{opacity:0}2%{opacity:0;-webkit-transform:translateY(-30px)}5%{opacity:1;-webkit-transform:translateY(0)}17%{opacity:1;-webkit-transform:translateY(0)}20%{opacity:0;-webkit-transform:translateY(30px)}80%{opacity:0}to{opacity:0}}@keyframes rotateWord-data-v-5c5c2f84{0%{opacity:0}2%{opacity:0;-webkit-transform:translateY(-30px);transform:translateY(-30px)}5%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}17%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}20%{opacity:0;-webkit-transform:translateY(30px);transform:translateY(30px)}80%{opacity:0}to{opacity:0}}@media screen and (min-width:0px) and (max-width:860px){.parallax .rw-wrapper>div[data-v-5c5c2f84]{height:90px}.parallax .rw-wrapper .rw-words div[data-v-5c5c2f84]{left:40%}}@media screen and (min-width:0px) and (max-width:400px){.parallax .rw-wrapper .rw-words div[data-v-5c5c2f84]{left:28%}}",""])},eCWL:function(t,a,e){"use strict";var i=e("Mt2U"),r=e("RdIH"),n=!1;var o=function(t){n||e("K0tf")},s=e("VU/8")(i.a,r.a,!1,o,null,null);s.options.__file="components/parallax-sub.vue",a.a=s.exports},gJcU:function(t,a,e){var i=e("oA1G");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("cabe70d6",i,!1,{sourceMap:!1})},oA1G:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,"body{font-family:'medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif'}.responsive{width:100%;height:auto}.navigation-drawer{z-index:9000!important}.navigation-drawer .list>div:hover a,.navigation-drawer .list>div:hover i{color:#ff9800!important}.navigation-drawer .ext-icon{display:inline-block}.navigation-drawer .ext-icon:hover{color:#ff9800}.navigation-drawer.navigation-drawer--mini-variant .ext-icon{padding:0 12px}",""])},p5fX:function(t,a,e){"use strict";a.a={data:function(){return{mainTitle:"Hello world",subTitle:"software engineer 👨‍💻, web developer 🌐, tech fans 📦, computer geek 💻, codealholic 🔠, father 👨‍👩‍👦‍👦 ",btnText:"FOLLOW ME"}},computed:{subHeader:function(){return this.subTitle.split(",")}}}},u7Aj:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-parallax",{attrs:{src:"/img/hero1.jpg",height:"520"}},[e("v-layout",{staticClass:"white--text rw-wrapper text-xs-center",attrs:{wrap:"",row:"","justify-center":"","align-center":"","align-content-center":""}},[e("v-flex",{attrs:{xs12:"",md12:""}},[e("h1",{staticClass:"main-title text-xs-center"},[t._v(t._s(t.mainTitle))])]),e("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",md4:"","offset-md1":""}},[t._v(" $KelvinHo = ")]),e("v-flex",{staticClass:"rw-words rw-words-1 text-xs-center ",attrs:{xs12:"",md6:""}},t._l(t.subHeader,function(a){return e("div",{key:a,attrs:{xs6:""}},[t._v(t._s(a))])})),e("v-flex",{attrs:{xs12:"",md12:""}},[e("v-btn",{staticClass:"white",attrs:{dark:"",large:"",href:"/posts",outline:"",round:""}},[t._v("\n        "+t._s(t.btnText)+"\n      ")])],1)],1)],1)};i._withStripped=!0;var r={render:i,staticRenderFns:[]};a.a=r}});