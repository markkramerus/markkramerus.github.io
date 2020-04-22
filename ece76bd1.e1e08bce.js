/*! For license information please see ece76bd1.e1e08bce.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[19,4],{110:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(143),c=a(111),l=a.n(c),o=a(0);function i(){var e=function(e){return o.createElement("div",{className:l.a.homeContainer},o.createElement("div",{className:l.a.homeSplashFade},o.createElement("div",{className:l.a.homeWrapper},o.createElement("div",{className:l.a.heroText},"STANDARDS FOR "),o.createElement("div",{className:l.a.heroTextYellow},"FEDERATED ANALYTICS "))))},t=function(e){return o.createElement("section",{className:l.a.searchBanner})};return o.createElement(e,null,o.createElement(t,null))}var s=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.color,a=e.title,n=e.icon;return o.createElement("div",{className:l.a.contentBlock,style:{borderColor:t}},o.createElement("div",{className:l.a.contentBlockHeader},o.createElement("span",{className:l.a.contentBlockTitle},a),o.createElement("img",{src:n,height:50})),o.createElement("div",{className:l.a.contentBlockInner},this.props.children))},t}(o.Component),d=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.title;return o.createElement("div",{className:l.a.titleBlock},o.createElement("div",{className:l.a.titleBlockHeader},o.createElement("span",{className:l.a.titleBlockTitle},e)),o.createElement("div",{className:l.a.titleBlockInner},this.props.children))},t}(o.Component);t.default=function(){return o.createElement(r.a,{permalink:"/",title:"C19HCC"},o.createElement("div",null,o.createElement(i,null),o.createElement("div",{className:l.a.mainContainer},o.createElement("div",{className:l.a.row},o.createElement(d,null,o.createElement("span",{className:l.a.titleBlockInner},o.createElement("p",null,"The clinical data needed to derive insights on COVID-19 screening and management is a moving target. Many organizations are defining data elements and codes to represent COVID-19 related data. We can unlock at-scale analytics for COVID-19 to produce valuable clinical insights by creating:"),o.createElement("br",null),o.createElement("ul",null,o.createElement("li",null,"Standard COVID-19 cohorts for relevant measures and populations of interest. Following these definitions assures consistent metrics and comparable cohorts."),o.createElement("li",null,"A base set of data requirements for clinical data providers, to guide data extraction with minimal effort and fewest assumptions."),o.createElement("li",null,"Terminologies and value sets that help extract the relevant and intended data, independent of local variations in data.")),o.createElement("p",null,"Because moving data can encounter logistical, contractual, and regulatory barriers, it is usually easier and faster to move the queries to the data owners, have them evaluate the queries, and then federate the results. With careful definition of the cohorts, the results from disparate sources can be comparable."),o.createElement("br",null),o.createElement("center",null,o.createElement("img",{alt:"Hydroxychloroquine molecule by Johan Vec (CC BY-SA 4.0)",src:"img/hcq.png",width:300})),o.createElement("center",null,o.createElement("a",{href:"docs/studies/"},"Hydroxychloroquine Study")," now underway!"),o.createElement("br",null)))),o.createElement("div",{className:l.a.row},o.createElement(s,{title:"COVID-19 Observational Studies",color:"#005B94",icon:"img/icons/home/data-release.svg"},o.createElement("span",{className:l.a.contentDescription},"Observational studies undertaken as part of the COVID-19 Healthcare Coalition. Each study is defined by a set of row-level source data, cohorts (phenotypes), and metrics."),o.createElement("a",{className:l.a.contentAction,href:"docs/studies/"},"STUDIES",o.createElement("img",{src:"img/icons/chevron-right.svg",height:8,width:8})),o.createElement("br",null)),o.createElement(s,{title:"COVID-19 Cohorts",color:"#005B94",icon:"img/icons/home/controlled-data.svg"},o.createElement("span",{className:l.a.contentDescription},"COVID-19 cohorts provide standardized definitions for relevant metrics and populations of interest. Following these definitions assures consistent metrics and comparable cohorts."),o.createElement("a",{className:l.a.contentAction,href:"docs/cohorts/"},"Cohorts",o.createElement("img",{src:"img/icons/chevron-right.svg",height:8,width:8})),o.createElement("br",null))),o.createElement("div",{className:l.a.row},o.createElement(s,{title:"Data Dictionary",color:"#005B94",icon:"img/icons/home/data-dictionary.svg"},o.createElement("span",{className:l.a.contentDescription},"The dictionary describes the guidelines that data submitters should follow when exporting clinical data files from their electronic health record (EHR) systems."),o.createElement("a",{className:l.a.contentAction,href:"dictionary/"},"Data Dictionary",o.createElement("img",{src:"img/icons/chevron-right.svg",height:8,width:8}))),o.createElement(s,{title:"COVID-19 Vocabulary",color:"#005B94",icon:"img/icons/home/faq.svg"},o.createElement("span",{className:l.a.contentDescription},"Documentation and sources for value sets and terminologies used in COVID-19 cohort definitions and data dictionary elements."),o.createElement("a",{className:l.a.contentAction,href:"docs/vocabulary/"},"Vocabulary",o.createElement("img",{src:"img/icons/chevron-right.svg",height:8,width:8})))))))}},123:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===c)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},143:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(137),l=a(124),o=a(128),i=a(1),s=a(144),d=a(145),u=a(152),m=a.n(u),h=a(123),f=a.n(h),p=a(86),v=a.n(p);const g=()=>r.a.createElement("span",{className:f()(v.a.toggle,v.a.moon)}),E=()=>r.a.createElement("span",{className:f()(v.a.toggle,v.a.sun)});var b=function(e){const{isClient:t}=Object(l.a)();return r.a.createElement(m.a,Object(i.a)({disabled:!t,icons:{checked:r.a.createElement(g,null),unchecked:r.a.createElement(E,null)}},e))};var k=()=>{const[e,t]=n.useState("undefined"!=typeof document?document.querySelector("html").getAttribute("data-theme"):"");return n.useEffect(()=>{try{t(localStorage.getItem("theme"))}catch(e){console.error(e)}},[t]),[e,n.useCallback(e=>{try{localStorage.setItem("theme",e),t(e)}catch(a){console.error(a)}},[t])]},y=a(87),N=a.n(y);function C({to:e,href:t,label:a,position:n,...c}){const l=Object(o.a)(e);return r.a.createElement(s.a,Object(i.a)({className:"navbar__item navbar__link"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{activeClassName:"navbar__link--active",to:l},c),a)}var _=function(){const e=Object(l.a)(),[t,a]=Object(n.useState)(!1),[u,m]=Object(n.useState)(!1),[h,p]=k(),{siteConfig:v={}}=e,{baseUrl:g,themeConfig:E={}}=v,{navbar:y={},disableDarkMode:_=!1}=E,{title:w,logo:O={},links:j=[]}=y,x=Object(n.useCallback)(()=>{a(!0)},[a]),T=Object(n.useCallback)(()=>{a(!1)},[a]),S=Object(n.useCallback)(e=>p(e.target.checked?"dark":""),[p]),D=Object(o.a)(O.src);return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en","data-theme":h})),r.a.createElement("nav",{className:f()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":t})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:x,onKeyDown:x},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(s.a,{className:"navbar__brand",to:g},null!=O&&r.a.createElement("img",{className:"navbar__logo",src:D,alt:O.alt}),null!=w&&r.a.createElement("strong",{className:u?N.a.hideLogoText:""},w)),j.filter(e=>"right"!==e.position).map((e,t)=>r.a.createElement(C,Object(i.a)({},e,{key:t})))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},j.filter(e=>"right"===e.position).map((e,t)=>r.a.createElement(C,Object(i.a)({},e,{key:t}))),!_&&r.a.createElement(b,{className:N.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:"dark"===h,onChange:S}),r.a.createElement(d.a,{handleSearchBarToggle:m,isSearchBarExpanded:u}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:()=>{a(!1)}}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(s.a,{className:"navbar__brand",onClick:T,to:g},null!=O&&r.a.createElement("img",{className:"navbar__logo",src:D,alt:O.alt}),null!=w&&r.a.createElement("strong",null,w)),!_&&t&&r.a.createElement(b,{"aria-label":"Dark mode toggle in sidebar",checked:"dark"===h,onChange:S})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},j.map((e,t)=>r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(C,Object(i.a)({className:"menu__link"},e,{onClick:T}))))))))))},w=a(146);a(88);t.a=function(e){const{siteConfig:t={}}=Object(l.a)(),{favicon:a,tagline:n,title:i,themeConfig:{image:s},url:d}=t,{children:u,title:m,noFooter:h,description:f,image:p,keywords:v,permalink:g,version:E}=e,b=m||`${i} \xb7 ${n}`,k=p||s,y=d+Object(o.a)(k),N=Object(o.a)(a);return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),b&&r.a.createElement("title",null,b),b&&r.a.createElement("meta",{property:"og:title",content:b}),a&&r.a.createElement("link",{rel:"shortcut icon",href:N}),f&&r.a.createElement("meta",{name:"description",content:f}),f&&r.a.createElement("meta",{property:"og:description",content:f}),E&&r.a.createElement("meta",{name:"docsearch:version",content:E}),v&&v.length&&r.a.createElement("meta",{name:"keywords",content:v.join(",")}),k&&r.a.createElement("meta",{property:"og:image",content:y}),k&&r.a.createElement("meta",{property:"twitter:image",content:y}),k&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+b}),g&&r.a.createElement("meta",{property:"og:url",content:d+g}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(_,null),r.a.createElement("div",{className:"main-wrapper"},u),!h&&r.a.createElement(w.a,null))}},145:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(123),l=a.n(c);t.a=e=>{r.a.useRef();return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),tabIndex:0}))}},146:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(124),l=(a(128),a(85)),o=a.n(l);t.a=function(){const e=Object(c.a)(),{siteConfig:t={}}=e;return r.a.createElement("footer",{className:o.a["nav-footer"],id:"footer"},r.a.createElement("div",{className:o.a.footerWrapper},r.a.createElement("div",{className:o.a.footerLogo}),r.a.createElement("div",{className:o.a.footerContent},r.a.createElement("section",{className:o.a.footerLinks}),r.a.createElement("section",{className:o.a["legal-text"]},t.themeConfig.footer.copyright),r.a.createElement("section",{className:o.a["legal-text"]},r.a.createElement("a",{href:"https://www.icgc-argo.org",target:"_blank"},"Based on the ARGO Data Platform")," ")),r.a.createElement("div",{className:o.a.footerLogo})))}},152:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),l=m(c),o=m(a(123)),i=m(a(8)),s=m(a(153)),d=m(a(154)),u=a(155);function m(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,u.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,u.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,u.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,o.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return l.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},l.default.createElement("div",{className:"react-toggle-track"},l.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),l.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),l.default.createElement("div",{className:"react-toggle-thumb"}),l.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:l.default.createElement(s.default,null),unchecked:l.default.createElement(d.default,null)}},h.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},153:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},154:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},155:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}}}]);