webpackJsonp([1],{"05iV":function(e,s){},"9/Qh":function(e,s){},M6fi:function(e,s){},NHnr:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=t("7+uW"),i=t("2vhu"),a={render:function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[this._v(this._s(this.msg))])])},staticRenderFns:[]};var r=t("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},a,!1,function(e){t("vRwK")},"data-v-6c96dfec",null).exports,o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"cl-checklist"},[t("div",{staticClass:"topbar"},[t("div",{staticClass:"cancel"},[e._v("取消")]),e._v(" "),t("div",{staticClass:"title"},[e._v("选择考场")]),e._v(" "),t("div",{staticClass:"confirm"},[e._v("确定")])]),e._v(" "),t("div",{staticClass:"desc"},[e._v("您已选中0个，最多可选3个")]),e._v(" "),t("div",{staticClass:"list"},[t("label",{staticClass:"line border-1px",attrs:{for:"2"}},[t("div",{staticClass:"l"},[t("div",{staticClass:"title"},[e._v("科目二第07考点马路")]),e._v(" "),t("div",{staticClass:"address"},[e._v("上海市宝山区保安公路2009号")])]),e._v(" "),t("div",{staticClass:"r"})]),e._v(" "),t("div",{staticClass:"line selected"},[t("div",{staticClass:"l"},[t("div",{staticClass:"title"},[e._v("科目二第07考点马路")]),e._v(" "),t("div",{staticClass:"address"},[e._v("上海市宝山区保安公路2009号")])]),e._v(" "),t("div",{staticClass:"r"})]),e._v(" "),t("div",{staticClass:"line selected"},[t("div",{staticClass:"l"},[t("div",{staticClass:"title"},[e._v("科目二第07考点马路")]),e._v(" "),t("div",{staticClass:"address"},[e._v("上海市宝山区保安公路2009号")])]),e._v(" "),t("div",{staticClass:"r"})])])])}]};var l=t("VU/8")({},o,!1,function(e){t("M6fi")},"data-v-2e128ee1",null).exports,c={name:"App",data:function(){return{list:[{name:"jiang1",num:1},{name:"jiang2",num:2},{name:"jiang3",num:3},{name:"jiang4",num:4}],nameRouter:{name:"home",params:{id:22}},val:1}},methods:{gotorouter:function(){this.$router.replace({path:"/home/3"}),console.log("ok")}},components:{HelloWorld:r,checklist:l}},u={render:function(){var e=this.$createElement,s=this._self._c||e;return s("div",[s("router-view")],1)},staticRenderFns:[]};var p=t("VU/8")(c,u,!1,function(e){t("XJt/")},null,null).exports,d=t("/ocq"),v={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("h1",[e._v("here is home page.")]),e._v(" "),t("h2",[e._v(e._s(e.$route.params.id))]),e._v(" "),t("router-link",{attrs:{to:""}}),e._v(" "),t("router-view"),e._v(" "),t("router-view",{staticClass:"view one",attrs:{name:"b"}}),e._v(" "),t("router-view",{staticClass:"view two",attrs:{name:"a"}})],1)},staticRenderFns:[]};var m=t("VU/8")({},v,!1,function(e){t("eaGa")},"data-v-ef8ee9fe",null).exports,j={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"content"},[t("h1",[e._v("hello beijing")]),e._v(" "),t("h2",[e._v("路由传过来的id:"+e._s(e.$route.params.id))]),e._v(" "),t("h2",[e._v("路由传过来的name："+e._s(e.$route.params.usename))])])},staticRenderFns:[]};var h=t("VU/8")({},j,!1,function(e){t("xcLH")},"data-v-59377ffd",null).exports,b={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"content"},[s("a",{attrs:{href:"#"}},[this._v(" 首先url 分为两部分，前部匹配父组件的 path；父组件显示，并且父组件要有router-view容器，准备装子组件。\n  后部分匹配子组件的 path ，子组件不要加/,子组件显示在父组件的容器里面。")])])}]};var f=t("VU/8")({},b,!1,function(e){t("rapF")},"data-v-755133d8",null).exports,g={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"content"},[this._v("\n  this is  homeson2.\n")])},staticRenderFns:[]};var _=t("VU/8")({},g,!1,function(e){t("oblx")},"data-v-193f4c4c",null).exports,y={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"content"},[this._v("\n  this is  name view2.\n")])},staticRenderFns:[]};var k=t("VU/8")({},y,!1,function(e){t("m2G3")},"data-v-7ec8e292",null).exports,w={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"content"},[this._v("\n  this is  name=a view.\n")])},staticRenderFns:[]};var x=t("VU/8")({},w,!1,function(e){t("05iV")},"data-v-6a169dd6",null).exports,z={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticStyle:{width:"256px"}},[t("a-button",{staticStyle:{"margin-bottom":"16px"},attrs:{type:"primary"},on:{click:e.toggleCollapsed}},[t("a-icon",{attrs:{type:e.collapsed?"menu-unfold":"menu-fold"}})],1),e._v(" "),t("a-menu",{attrs:{defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],mode:"inline",theme:"dark",inlineCollapsed:e.collapsed}},[t("a-menu-item",{key:"1"},[t("a-icon",{attrs:{type:"pie-chart"}}),e._v(" "),t("span",[e._v("Option 1")])],1),e._v(" "),t("a-menu-item",{key:"2"},[t("a-icon",{attrs:{type:"desktop"}}),e._v(" "),t("span",[e._v("Option 2")])],1),e._v(" "),t("a-menu-item",{key:"3"},[t("a-icon",{attrs:{type:"inbox"}}),e._v(" "),t("span",[e._v("Option 3")])],1),e._v(" "),t("a-sub-menu",{key:"sub1"},[t("span",{attrs:{slot:"title"},slot:"title"},[t("a-icon",{attrs:{type:"mail"}}),t("span",[e._v("Navigation One")])],1),e._v(" "),t("a-menu-item",{key:"5"},[e._v("Option 5")]),e._v(" "),t("a-menu-item",{key:"6"},[e._v("Option 6")]),e._v(" "),t("a-menu-item",{key:"7"},[e._v("Option 7")]),e._v(" "),t("a-menu-item",{key:"8"},[e._v("Option 8")])],1),e._v(" "),t("a-sub-menu",{key:"sub2"},[t("span",{attrs:{slot:"title"},slot:"title"},[t("a-icon",{attrs:{type:"appstore"}}),t("span",[e._v("Navigation Two")])],1),e._v(" "),t("a-menu-item",{key:"9"},[e._v("Option 9")]),e._v(" "),t("a-menu-item",{key:"10"},[e._v("Option 10")]),e._v(" "),t("a-sub-menu",{key:"sub3",attrs:{title:"Submenu"}},[t("a-menu-item",{key:"11"},[e._v("Option 11")]),e._v(" "),t("a-menu-item",{key:"12"},[e._v("Option 12")])],1)],1)],1)],1)},staticRenderFns:[]};var C=t("VU/8")({data:function(){return{collapsed:!1}},methods:{toggleCollapsed:function(){this.collapsed=!this.collapsed}}},z,!1,function(e){t("9/Qh")},"data-v-37fdaa70",null).exports;n.a.use(d.a);var E=new d.a({routes:[{path:"/",redirect:"/basic"},{path:"/basic",component:C},{path:"/home/:id",name:"home",component:m,children:[{path:"son1",component:f},{path:"son2",component:_}]},{path:"/city/:usename/post/:id",component:h},{path:"/demo",component:l},{path:"/view",components:{default:m,a:x,b:k}}]});t("hZ/y");n.a.config.productionTip=!1,n.a.use(i.a);new n.a({el:"#app",router:E,components:{App:p},template:"<App/>"})},"XJt/":function(e,s){},XN5v:function(e,s){e.exports={_from:"ant-design-vue",_id:"ant-design-vue@1.3.7",_inBundle:!1,_integrity:"sha512-PAbQrIrpmnonQohismGPxhSvwDmi2HKTfWjBpAItWsTEnXYqFzGHA7aytlutGTBRJjpyhlD6jpoiAnk/ocn4cw==",_location:"/ant-design-vue",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"ant-design-vue",name:"ant-design-vue",escapedName:"ant-design-vue",rawSpec:"",saveSpec:null,fetchSpec:"latest"},_requiredBy:["#USER","/"],_resolved:"https://registry.npmjs.org/ant-design-vue/-/ant-design-vue-1.3.7.tgz",_shasum:"5e26c875ac636df1c20f076baa142aca62f97f14",_spec:"ant-design-vue",_where:"f:\\webProject\\vue\\vueModule\\selfRouter",bugs:{url:"https://github.com/vueComponent/ant-design-vue/issues"},bundleDependencies:!1,dependencies:{"@ant-design/icons":"^1.1.15","@ant-design/icons-vue":"^1.0.1","add-dom-event-listener":"^1.0.2","array-tree-filter":"^2.1.0","async-validator":"^1.8.2","babel-helper-vue-jsx-merge-props":"^2.0.3","babel-runtime":"6.x",classnames:"^2.2.5","component-classes":"^1.2.6","dom-align":"^1.7.0","dom-closest":"^0.2.0","dom-scroll-into-view":"^1.2.1","enquire.js":"^2.1.6",intersperse:"^1.0.0","is-negative-zero":"^2.0.0",ismobilejs:"^0.5.1",json2mq:"^0.2.0",lodash:"^4.17.5",moment:"^2.21.0","mutationobserver-shim":"^0.3.2","omit.js":"^1.0.0",raf:"^3.4.0","resize-observer-polyfill":"^1.5.1","shallow-equal":"^1.0.0",shallowequal:"^1.0.2","vue-ref":"^1.0.4",warning:"^3.0.0"},deprecated:!1,description:"An enterprise-class UI design language and Vue-based implementation",devDependencies:{"@commitlint/cli":"^6.2.0","@commitlint/config-conventional":"^6.1.3","@octokit/rest":"^15.4.1","@vue/cli-plugin-eslint":"^3.0.5","@vue/server-test-utils":"1.0.0-beta.16","@vue/test-utils":"1.0.0-beta.16",acorn:"^6.0.5",autoprefixer:"^8.1.0",axios:"^0.18.0","babel-cli":"^6.26.0","babel-core":"^6.26.0","babel-eslint":"^10.0.1","babel-helper-vue-jsx-merge-props":"^2.0.3","babel-jest":"^23.6.0","babel-loader":"^7.1.2","babel-plugin-add-module-exports":"^1.0.0","babel-plugin-import":"^1.1.1","babel-plugin-inline-import-data-uri":"^1.0.1","babel-plugin-istanbul":"^4.1.1","babel-plugin-syntax-dynamic-import":"^6.18.0","babel-plugin-syntax-jsx":"^6.18.0","babel-plugin-transform-class-properties":"^6.24.1","babel-plugin-transform-decorators":"^6.24.1","babel-plugin-transform-decorators-legacy":"^1.3.4","babel-plugin-transform-es3-member-expression-literals":"^6.22.0","babel-plugin-transform-es3-property-literals":"^6.22.0","babel-plugin-transform-object-assign":"^6.22.0","babel-plugin-transform-object-rest-spread":"^6.26.0","babel-plugin-transform-runtime":"~6.23.0","babel-plugin-transform-vue-jsx":"^3.7.0","babel-polyfill":"^6.26.0","babel-preset-env":"^1.6.1","case-sensitive-paths-webpack-plugin":"^2.1.2",chalk:"^2.3.2",cheerio:"^1.0.0-rc.2",codecov:"^3.0.0",colorful:"^2.1.0",commander:"^2.15.0","compare-versions":"^3.3.0","cross-env":"^5.1.4","css-loader":"^0.28.7","deep-assign":"^2.0.0","enquire-js":"^0.2.1",eslint:"^5.8.0","eslint-config-prettier":"^3.0.1","eslint-plugin-html":"^3.2.2","eslint-plugin-vue":"^5.1.0","fetch-jsonp":"^1.1.3","fs-extra":"^7.0.0",glob:"^7.1.2",gulp:"^3.9.1","gulp-babel":"^7.0.0","gulp-strip-code":"^0.1.4","highlight.js":"^9.12.0","html-webpack-plugin":"^3.2.0",husky:"^0.14.3","istanbul-instrumenter-loader":"^3.0.0",jest:"^24.0.0","jest-serializer-vue":"^1.0.0","js-base64":"^2.4.8",jsonp:"^0.2.1",less:"^3.9.0","less-loader":"^4.1.0","less-plugin-npm-import":"^2.1.0","lint-staged":"^7.2.2","markdown-it":"^8.4.0","markdown-it-anchor":"^4.0.0",marked:"^0.3.7",merge2:"^1.2.1","mini-css-extract-plugin":"^0.5.0",minimist:"^1.2.0",mkdirp:"^0.5.1",mockdate:"^2.0.2",nprogress:"^0.2.0","optimize-css-assets-webpack-plugin":"^5.0.1",postcss:"^7.0.6","postcss-loader":"^3.0.0","pre-commit":"^1.2.2",prettier:"^1.15.3",querystring:"^0.2.0","raw-loader":"^1.0.0-beta.0",reqwest:"^2.0.5",rimraf:"^2.6.2","rucksack-css":"^1.0.2","selenium-server":"^3.0.1",semver:"^5.3.0","style-loader":"^0.18.2",stylelint:"^9.10.1","stylelint-config-prettier":"^4.0.0","stylelint-config-standard":"^18.2.0",through2:"^2.0.3","uglifyjs-webpack-plugin":"^2.1.1","url-loader":"^1.1.2",vue:"^2.6.9","vue-antd-md-loader":"^1.1.0","vue-clipboard2":"0.0.8","vue-eslint-parser":"^5.0.0","vue-i18n":"^8.3.2","vue-infinite-scroll":"^2.0.2","vue-jest":"^2.5.0","vue-loader":"^15.5.1","vue-router":"^3.0.1","vue-server-renderer":"^2.5.16","vue-template-compiler":"^2.6.9","vue-virtual-scroller":"^0.12.0",vuex:"^3.1.0",webpack:"^4.28.4","webpack-cli":"^3.2.1","webpack-dev-server":"^3.1.14","webpack-merge":"^4.1.1",webpackbar:"^3.1.5"},files:["dist","lib","es","types"],homepage:"https://vue.ant.design/",keywords:["ant","design","antd","vue","vueComponent","component","components","ui","framework","frontend"],license:"MIT",main:"lib/index.js",module:"es/index.js",name:"ant-design-vue",peerDependencies:{vue:">=2.5.0","vue-template-compiler":">=2.5.0"},"pre-commit":["lint","prettier"],repository:{type:"git",url:"git+https://github.com/vueComponent/ant-design-vue.git"},scripts:{codecov:"codecov",commitmsg:"commitlint -x @commitlint/config-conventional -e $GIT_PARAMS",compile:"node antd-tools/cli/run.js compile",copy:"node scripts/run.js copy-html",dev:"cross-env NODE_ENV=development ENTRY_INDEX=dev ./node_modules/.bin/webpack-dev-server --open --hot --port 3001",dist:"node antd-tools/cli/run.js dist",lint:"eslint -c ./.eslintrc --fix --ext .jsx,.js,.vue ./components","lint:style":'stylelint "{site,components}/**/*.less" --syntax less',"pre-publish":"node ./scripts/prepub",prepublish:"node antd-tools/cli/run.js guard",prettier:"node ./scripts/prettier.js",pub:"node antd-tools/cli/run.js pub","pub-with-ci":"node antd-tools/cli/run.js pub-with-ci",site:"node scripts/run.js _site",start:"cross-env NODE_ENV=development ./node_modules/.bin/webpack-dev-server --open --hot",test:"cross-env NODE_ENV=test jest --config .jest.js"},sideEffects:["site/*","components/style.js","components/**/style/*","*.vue","*.md","dist/*","es/**/style/*","lib/**/style/*","*.less"],title:"Ant Design Vue",typings:"types/index.d.ts",version:"1.3.7"}},eaGa:function(e,s){},"hZ/y":function(e,s){},m2G3:function(e,s){},oblx:function(e,s){},rapF:function(e,s){},uslO:function(e,s,t){var n={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-SG":"oYA3","./en-SG.js":"oYA3","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function i(e){return t(a(e))}function a(e){var s=n[e];if(!(s+1))throw new Error("Cannot find module '"+e+"'.");return s}i.keys=function(){return Object.keys(n)},i.resolve=a,e.exports=i,i.id="uslO"},vRwK:function(e,s){},xcLH:function(e,s){}},["NHnr"]);
//# sourceMappingURL=app.cb5b89bef52492e10435.js.map