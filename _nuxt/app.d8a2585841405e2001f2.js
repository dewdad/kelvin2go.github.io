webpackJsonp([7],{"0F0d":function(t,e,n){"use strict";e.a={name:"no-ssr",props:["placeholder"],data:function(){return{canRender:!1}},mounted:function(){this.canRender=!0},render:function(t){return this.canRender?this.$slots.default&&this.$slots.default[0]:t("div",{class:["no-ssr-placeholder"]},this.$slots.placeholder||this.placeholder)}}},"0Jvd":function(t,e){},"4Atj":function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="4Atj"},"8j17":function(t,e,n){"use strict";var r=n("/5sW"),a=n("U0v6"),o=n.n(a),i=n("QxPg"),s=n("h17U"),u=n("fhbW");i.default.library.add(s.a),i.default.library.add(u.a),i.default.library.add(u.b),r.default.component(o.a.name,o.a)},F88d:function(t,e,n){"use strict";var r=n("gRv3"),a=n("P+aQ"),o=!1;var i=function(t){o||n("rdcm")},s=n("VU/8")(r.a,a.a,!1,i,null,null);s.options.__file=".nuxt/components/nuxt-loading.vue",e.a=s.exports},"HBB+":function(t,e,n){"use strict";e.a={name:"nuxt-child",functional:!0,props:["keepAlive"],render:function(t,e){var n=e.parent,o=e.data,i=e.props;o.nuxtChild=!0;for(var s=n,u=n.$nuxt.nuxt.transitions,c=n.$nuxt.nuxt.defaultTransition,f=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&f++,n=n.$parent;o.nuxtChildDepth=f;var d=u[f]||c,p={};r.forEach(function(t){void 0!==d[t]&&(p[t]=d[t])});var l={};a.forEach(function(t){"function"==typeof d[t]&&(l[t]=d[t].bind(s))});var h=l.beforeEnter;l.beforeEnter=function(t){if(window.$nuxt.$emit("triggerScroll"),h)return h.call(s,t)};var v=[t("router-view",o)];return void 0!==i.keepAlive&&(v=[t("keep-alive",v)]),t("transition",{props:p,on:l},v)}};var r=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],a=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"]},"Hot+":function(t,e,n){"use strict";var r=n("/5sW"),a=n("HBB+"),o=n("ct3O"),i=n("YLfZ");e.a={name:"nuxt",props:["nuxtChildKey","keepAlive"],render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){r.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(i.b)(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:a.a,NuxtError:o.a}}},"P+aQ":function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"nuxt-progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})};r._withStripped=!0;var a={render:r,staticRenderFns:[]};e.a=a},QT0D:function(t,e,n){"use strict";e.a={name:"nuxt-error",props:["error"],head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}}},QhKw:function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"__nuxt-error-page"},[e("div",{staticClass:"error"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[e("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),e("div",{staticClass:"title"},[this._v(this._s(this.message))]),404===this.statusCode?e("p",{staticClass:"description"},[e("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[this._v("Back to the home page")])],1):this._e(),this._m(0)])])};r._withStripped=!0;var a={render:r,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}]};e.a=a},T23V:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,a,o,i=n("pFYg"),s=n.n(i),u=n("//Fk"),c=n.n(u),f=n("Xxa5"),d=n.n(f),p=n("mvHQ"),l=n.n(p),h=n("exGp"),v=n.n(h),x=n("fZjL"),m=n.n(x),y=n("woOf"),b=n.n(y),_=n("/5sW"),g=n("unZF"),w=n("qcny"),C=n("YLfZ"),k=(r=v()(d.a.mark(function t(e,n,r){var a,o,i=this;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!j.nuxt.err||n.path!==e.path,this._queryChanged=l()(e.query)!==l()(n.query),this._diffQuery=this._queryChanged?Object(C.g)(e.query,n.query):[],this._pathChanged&&this.$loading.start&&this.$loading.start(),t.prev=4,t.next=7,Object(C.k)(e);case 7:a=t.sent,!this._pathChanged&&this._queryChanged&&a.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&this.$loading.start(),r(),t.next=19;break;case 12:t.prev=12,t.t0=t.catch(4),t.t0=t.t0||{},o=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:o,message:t.t0.message}),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 19:case"end":return t.stop()}},t,this,[[4,12]])})),function(t,e,n){return r.apply(this,arguments)}),E=(a=v()(d.a.mark(function t(e,n,r){var a,o,i,s,u,f,p,l,h=this;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return a=!1,o=function(t){if(n.path===t.path&&h.$loading.finish&&h.$loading.finish(),n.path!==t.path&&h.$loading.pause&&h.$loading.pause(),!a){a=!0;var e=[];T=Object(C.e)(n,e).map(function(t,r){return Object(C.b)(n.matched[e[r]].path)(n.params)}),r(t)}},t.next=6,Object(C.m)(j,{route:e,from:n,next:o.bind(this)});case 6:if(this._dateLastError=j.nuxt.dateErr,this._hadError=!!j.nuxt.err,i=[],(s=Object(C.e)(e,i)).length){t.next=24;break}return t.next=13,q.call(this,s,j.context);case 13:if(!a){t.next=15;break}return t.abrupt("return");case 15:return t.next=17,this.loadLayout("function"==typeof w.a.layout?w.a.layout(j.context):w.a.layout);case 17:return u=t.sent,t.next=20,q.call(this,s,j.context,u);case 20:if(!a){t.next=22;break}return t.abrupt("return");case 22:return j.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 24:return s.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(A(s,e,n)),t.prev=26,t.next=29,q.call(this,s,j.context);case 29:if(!a){t.next=31;break}return t.abrupt("return");case 31:if(!j.context._errored){t.next=33;break}return t.abrupt("return",r());case 33:return"function"==typeof(f=s[0].options.layout)&&(f=f(j.context)),t.next=37,this.loadLayout(f);case 37:return f=t.sent,t.next=40,q.call(this,s,j.context,f);case 40:if(!a){t.next=42;break}return t.abrupt("return");case 42:if(!j.context._errored){t.next=44;break}return t.abrupt("return",r());case 44:if(p=!0,s.forEach(function(t){p&&"function"==typeof t.options.validate&&(p=t.options.validate({params:e.params||{},query:e.query||{}}))}),p){t.next=49;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 49:return t.next=51,c.a.all(s.map(function(t,n){if(t._path=Object(C.b)(e.matched[i[n]].path)(e.params),t._dataRefresh=!1,h._pathChanged&&t._path!==T[n])t._dataRefresh=!0;else if(!h._pathChanged&&h._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return h._diffQuery[t]}))}if(!h._hadError&&h._isMounted&&!t._dataRefresh)return c.a.resolve();var a=[],o=t.options.asyncData&&"function"==typeof t.options.asyncData,s=!!t.options.fetch,u=o&&s?30:45;if(o){var f=Object(C.j)(t.options.asyncData,j.context).then(function(e){Object(C.a)(t,e),h.$loading.increase&&h.$loading.increase(u)});a.push(f)}if(s){var d=t.options.fetch(j.context);d&&(d instanceof c.a||"function"==typeof d.then)||(d=c.a.resolve(d)),d.then(function(t){h.$loading.increase&&h.$loading.increase(u)}),a.push(d)}return c.a.all(a)}));case 51:a||(this.$loading.finish&&this.$loading.finish(),T=s.map(function(t,n){return Object(C.b)(e.matched[i[n]].path)(e.params)}),r()),t.next=66;break;case 54:return t.prev=54,t.t0=t.catch(26),t.t0||(t.t0={}),T=[],t.t0.statusCode=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,"function"==typeof(l=w.a.layout)&&(l=l(j.context)),t.next=63,this.loadLayout(l);case 63:this.error(t.t0),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 66:case"end":return t.stop()}},t,this,[[26,54]])})),function(t,e,n){return a.apply(this,arguments)}),$=(o=v()(d.a.mark(function t(e){var n,r,a,o;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return j=e.app,R=e.router,t.next=4,c.a.all(F(R));case 4:return n=t.sent,r=new _.default(j),a=O.layout||"default",t.next=9,r.loadLayout(a);case 9:if(r.setLayout(a),o=function(){r.$mount("#__nuxt"),_.default.nextTick(function(){P(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(A(n,R.currentRoute)),T=R.currentRoute.matched.map(function(t){return Object(C.b)(t.path)(R.currentRoute.params)})),r.$loading={},O.error&&r.error(O.error),R.beforeEach(k.bind(r)),R.beforeEach(E.bind(r)),R.afterEach(D),R.afterEach(N.bind(r)),!O.serverRendered){t.next=22;break}return o(),t.abrupt("return");case 22:E.call(r,R.currentRoute,R.currentRoute,function(t){if(!t)return D(R.currentRoute,R.currentRoute),L.call(r,R.currentRoute),void o();R.push(t,function(){return o()},function(t){if(!t)return o();console.error(t)})});case 23:case"end":return t.stop()}},t,this)})),function(t){return o.apply(this,arguments)}),T=[],j=void 0,R=void 0,O=window.__NUXT__||{};function A(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,a=Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];return n.apply(void 0,a)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=b()({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var a=r(n.matched[0].components.default);m()(a).filter(function(t){return a[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){e[t]=a[t]})}return e})}function S(t,e){return O.serverRendered&&e&&Object(C.a)(t,e),t._Ctor=t,t}function F(t){var e,n=this,r=Object(C.d)(t.options.base,t.options.mode);return Object(C.c)(t.match(r),(e=v()(d.a.mark(function t(e,r,a,o,i){var s;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return s=S(Object(C.l)(e),O.data?O.data[i]:null),a.components[o]=s,t.abrupt("return",s);case 7:case"end":return t.stop()}},t,n)})),function(t,n,r,a,o){return e.apply(this,arguments)}))}function q(t,e,n){var r=this,a=[],o=!1;if(void 0!==n&&(a=[],n.middleware&&(a=a.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(a=a.concat(t.options.middleware))})),a=a.map(function(t){return"function"==typeof t?t:("function"!=typeof g.a[t]&&(o=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),g.a[t])}),!o)return Object(C.i)(a,e)}function D(t,e){Object(C.c)(t,function(t,e,n,r){return"object"!==(void 0===t?"undefined":s()(t))||t.options||((t=_.default.extend(t))._Ctor=t,n.components[r]=t),t})}function L(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?w.a.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(j.context)),this.setLayout(e)}function N(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||_.default.nextTick(function(){Object(C.f)(t,[]).forEach(function(t,e){if(t&&t.constructor._dataRefresh&&T[e]===t.constructor._path&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)_.default.set(t.$data,r,n[r])}}),L.call(n,t)})}function P(t){window._nuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),R.afterEach(function(e,n){_.default.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}Object(w.b)().then($).catch(function(t){"ERR_REDIRECT"!==t.message&&console.error("[nuxt] Error while initializing app",t)})},WRRc:function(t,e,n){"use strict";e.a={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}}},YLfZ:function(t,e,n){"use strict";e.a=function(t,e){var n=t.options.data||y;if(!e&&t.options.hasAsyncData)return;t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),x()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)},e.l=b,e.e=_,e.f=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return h()(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))},e.c=g,e.k=w,n.d(e,"h",function(){return E}),n.d(e,"m",function(){return $}),e.i=function t(e,n){if(!e.length||n._redirected||n._errored)return p.a.resolve();return T(e[0],n).then(function(){return t(e.slice(1),n)})},e.j=T,e.d=function(t,e){var n=window.location.pathname;if("hash"===e)return window.location.hash.replace(/^#\//,"");t&&0===n.indexOf(t)&&(n=n.slice(t.length));return(n||"/")+window.location.search+window.location.hash},e.b=function(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===i()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",i=n||{},s=r||{},u=s.pretty?R:encodeURIComponent,c=0;c<t.length;c++){var f=t[c];if("string"!=typeof f){var d,p=i[f.name];if(null==p){if(f.optional){f.partial&&(o+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(Array.isArray(p)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+a()(p)+"`");if(0===p.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var l=0;l<p.length;l++){if(d=u(p[l]),!e[c].test(d))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+a()(d)+"`");o+=(0===l?f.prefix:f.delimiter)+d}}else{if(d=f.asterisk?encodeURI(p).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):u(p),!e[c].test(d))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+d+'"');o+=f.prefix+d}}else o+=f}return o}}(function(t,e){var n,r=[],a=0,o=0,i="",s=e&&e.delimiter||"/";for(;null!=(n=j.exec(t));){var u=n[0],c=n[1],f=n.index;if(i+=t.slice(o,f),o=f+u.length,c)i+=c[1];else{var d=t[o],p=n[2],l=n[3],h=n[4],v=n[5],x=n[6],m=n[7];i&&(r.push(i),i="");var y=null!=p&&null!=d&&d!==p,b="+"===x||"*"===x,_="?"===x||"*"===x,g=n[2]||s,w=h||v;r.push({name:l||a++,prefix:p||"",delimiter:g,optional:_,repeat:b,partial:y,asterisk:!!m,pattern:w?A(w):m?".*":"[^"+O(g)+"]+?"})}}o<t.length&&(i+=t.substr(o));i&&r.push(i);return r}(t,e))},e.g=function(t,e){var n={},r=x()({},t,e);for(var a in r)String(t[a])!==String(e[a])&&(n[a]=!0);return n};var r=n("mvHQ"),a=n.n(r),o=n("pFYg"),i=n.n(o),s=n("Xxa5"),u=n.n(s),c=n("exGp"),f=n.n(c),d=n("//Fk"),p=n.n(d),l=n("fZjL"),h=n.n(l),v=n("Dd8w"),x=n.n(v),m=n("/5sW"),y=function(){return{}};function b(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=m.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function _(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function g(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r,n)})}))}function w(t){var e,n=this;return p.a.all(g(t,(e=f()(u.a.mark(function t(e,r,a,o){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return t.abrupt("return",a.components[o]=b(e));case 5:case"end":return t.stop()}},t,n)})),function(t,n,r,a){return e.apply(this,arguments)})))}window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var C,k,E=(C=f()(u.a.mark(function t(e){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(e);case 2:return t.abrupt("return",x()({},e,{meta:_(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)})),function(t){return C.apply(this,arguments)}),$=(k=f()(u.a.mark(function t(e,n){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.to?n.to:n.route,e.context){t.next=13;break}t.t0=!0,t.t1=e,t.t2=n.payload,t.t3=n.error,t.t4={CTF_SPACE_ID:"yw2q66eyg5lz",CTF_CDA_ACCESS_TOKEN:"c8eb5c0ec778578139485885286b6de85becd125b0c03b9274c64f847eecce27",CTF_CMA_ACCESS_TOKEN:"CFPAT-858f875543dd4b86719ea0dc327d1c53bf96954e8df4a16afc9498c758dd3bc9",CTF_PERSON_ID:"3eaaGcQAE0ZmuLKU8uqfGW",CTF_BLOG_POST_TYPE_ID:"blogPost",CTF_PERSON_TYPE_ID:"person",CTF_PROTFOLIO_TYPE_ID:"portfolio"},e.context={get isServer(){return console.warn("context.isServer has been deprecated, please use process.server instead."),!1},get isClient(){return console.warn("context.isClient has been deprecated, please use process.client instead."),!0},isStatic:t.t0,isDev:!1,isHMR:!1,app:t.t1,payload:t.t2,error:t.t3,base:"/",env:t.t4},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var a=void 0===n?"undefined":i()(n);if("number"==typeof t||"undefined"!==a&&"object"!==a||(r=n||{},a=void 0===(n=t)?"undefined":i()(n),t=302),"object"===a&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=S(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__;case 13:if(e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=21;break}return t.next=20,E(n.route);case 20:e.context.route=t.sent;case 21:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=27;break}return t.next=26,E(n.from);case 26:e.context.from=t.sent;case 27:case"end":return t.stop()}},t,this)})),function(t,e){return k.apply(this,arguments)});function T(t,e){var n=void 0;return(n=2===t.length?new p.a(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof p.a||"function"==typeof n.then)||(n=p.a.resolve(n)),n}var j=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function R(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function O(t){return t.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1")}function A(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function S(t,e){var n=void 0,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):0===t.indexOf("//")&&(t=t.substring(2));var o=t.split("/"),i=(n?n+"://":"//")+o.shift(),s=o.filter(Boolean).join("/"),u=void 0;return 2===(o=s.split("#")).length&&(s=o[0],u=o[1]),i+=s?"/"+s:"",e&&"{}"!==a()(e)&&(i+=(2===t.split("?").length?"&":"?")+function(t){return h()(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),i+=u?"#"+u:""}},ct3O:function(t,e,n){"use strict";var r=n("QT0D"),a=n("QhKw"),o=!1;var i=function(t){o||n("0Jvd")},s=n("VU/8")(r.a,a.a,!1,i,null,null);s.options.__file=".nuxt/components/nuxt-error.vue",e.a=s.exports},fQ5t:function(t,e,n){var r=n("c/SZ"),a={CTF_SPACE_ID:"yw2q66eyg5lz",CTF_CDA_ACCESS_TOKEN:"c8eb5c0ec778578139485885286b6de85becd125b0c03b9274c64f847eecce27"};t.exports={createClient:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;return r.createClient({space:t.CTF_SPACE_ID,accessToken:t.CTF_CDA_ACCESS_TOKEN})}}},gRv3:function(t,e,n){"use strict";var r=n("/5sW");e.a={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,duration:5e3,height:"2px",color:"#3B8070",failedColor:"red"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,r.default.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},mtxM:function(t,e,n){"use strict";e.a=function(){return new i.default({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:p,routes:[{path:"/sideprojects",component:s,name:"sideprojects"},{path:"/posts",component:u,name:"posts"},{path:"/showcases",component:c,name:"showcases"},{path:"/posts/:id",component:f,name:"posts-id"},{path:"/",component:d,name:"index"}],fallback:!1})};var r=n("//Fk"),a=n.n(r),o=n("/5sW"),i=n("/ocq");o.default.use(i.default);var s=function(){return n.e(0).then(n.bind(null,"LIgO")).then(function(t){return t.default||t})},u=function(){return n.e(5).then(n.bind(null,"4j/J")).then(function(t){return t.default||t})},c=function(){return n.e(1).then(n.bind(null,"YvYg")).then(function(t){return t.default||t})},f=function(){return n.e(2).then(n.bind(null,"jmS0")).then(function(t){return t.default||t})},d=function(){return n.e(3).then(n.bind(null,"/TYz")).then(function(t){return t.default||t})};window.history.scrollRestoration="manual";var p=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new a.a(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})}},qcny:function(t,e,n){"use strict";n.d(e,"b",function(){return S});var r=n("Xxa5"),a=n.n(r),o=n("//Fk"),i=(n.n(o),n("C4MV")),s=n.n(i),u=n("woOf"),c=n.n(u),f=n("Dd8w"),d=n.n(f),p=n("exGp"),l=n.n(p),h=n("MU8w"),v=(n.n(h),n("/5sW")),x=n("p3jY"),m=n.n(x),y=n("mtxM"),b=n("0F0d"),_=n("HBB+"),g=n("WRRc"),w=n("ct3O"),C=n("Hot+"),k=n("yTq1"),E=n("YLfZ"),$=n("fQ5t"),T=n.n($),j=n("87CO"),R=n("8j17"),O=n("vfPB");n.d(e,"a",function(){return w.a});var A,S=(A=l()(a.a.mark(function t(e){var n,r,o,i,u,f;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(y.a)(e),r=d()({router:n,nuxt:{defaultTransition:F,transitions:[F],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?c()({},F,{name:t}):c()({},F,t):F}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,r.context._errored=!!t,"string"==typeof t&&(t={statusCode:500,message:t});var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},k.a),o=e?e.next:function(t){return r.router.push(t)},i=void 0,e?i=n.resolve(e.url).route:(u=Object(E.d)(n.options.base),i=n.resolve(u).route),t.next=7,Object(E.m)(r,{route:i,next:o,error:r.nuxt.error.bind(r),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 7:if(f=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");r[t="$"+t]=e;var n="__nuxt_"+t+"_installed__";v.default[n]||(v.default[n]=!0,v.default.use(function(){v.default.prototype.hasOwnProperty(t)||s()(v.default.prototype,t,{get:function(){return this.$root.$options[t]}})}))},"function"!=typeof T.a){t.next=11;break}return t.next=11,T()(r.context,f);case 11:if("function"!=typeof j.default){t.next=14;break}return t.next=14,Object(j.default)(r.context,f);case 14:if("function"!=typeof R.default){t.next=17;break}return t.next=17,Object(R.default)(r.context,f);case 17:if("function"!=typeof O.default){t.next=21;break}return t.next=21,Object(O.default)(r.context,f);case 21:t.next=24;break;case 24:return t.abrupt("return",{app:r,router:n});case 25:case"end":return t.stop()}},t,this)})),function(t){return A.apply(this,arguments)});v.default.component(b.a.name,b.a),v.default.component(_.a.name,_.a),v.default.component(g.a.name,g.a),v.default.component(C.a.name,C.a),v.default.use(m.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var F={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"}},rdcm:function(t,e){},unZF:function(t,e,n){"use strict";var r=n("BO1k"),a=n.n(r),o=n("4Atj"),i=o.keys();function s(t){var e=o(t);return e.default?e.default:e}var u={},c=!0,f=!1,d=void 0;try{for(var p,l=a()(i);!(c=(p=l.next()).done);c=!0){var h=p.value;u[h.replace(/^\.\//,"").replace(/\.(js)$/,"")]=s(h)}}catch(t){f=!0,d=t}finally{try{!c&&l.return&&l.return()}finally{if(f)throw d}}e.a=u},v2ns:function(t,e){},vfPB:function(t,e,n){"use strict";var r=n("/5sW"),a=n("Z5iE"),o=n.n(a);r.default.use(o.a)},xzNv:function(t,e){},yTq1:function(t,e,n){"use strict";var r=n("//Fk"),a=n.n(r),o=n("/5sW"),i=n("F88d"),s=n("xzNv"),u=(n.n(s),n("v2ns")),c=(n.n(u),{_default:function(){return n.e(4).then(n.bind(null,"Ma2J")).then(function(t){return t.default||t})}}),f={};e.a={head:{title:"kelvin2go",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"kelvinho.js.org personal website "}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"}],style:[],script:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt");return t("div",{domProps:{id:"__nuxt"}},[n,t("transition",{props:{name:"layout",mode:"out-in"}},[t("div",{domProps:{id:"__layout"},key:this.layoutName},[r])])])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){o.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){o.default.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){t&&f["_"+t]||(t="default"),this.layoutName=t;var e="_"+t;return this.layout=f[e],this.layout},loadLayout:function(t){var e=this;t&&(c["_"+t]||f["_"+t])||(t="default");var n="_"+t;return f[n]?a.a.resolve(f[n]):c[n]().then(function(t){return f[n]=t,delete c[n],f[n]}).catch(function(t){if(e.$nuxt)return e.$nuxt.error({statusCode:500,message:t.message})})}},components:{NuxtLoading:i.a}}}},["T23V"]);