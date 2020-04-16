/*! For license information please see ece76bd1.2acd8620.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[19,4],{110:function(e,t,a){"use strict";a.r(t);var n=a(158),r=a(111),c=a.n(r);const l=a(0);function o(){const e=e=>l.createElement("div",{className:c.a.homeContainer},l.createElement("div",{className:c.a.homeSplashFade},l.createElement("div",{className:c.a.homeWrapper},e.children))),t=e=>l.createElement("section",{className:c.a.searchBanner});return l.createElement(e,null,l.createElement(t,null))}class s extends l.Component{render(){const{color:e,title:t,icon:a}=this.props;return l.createElement("div",{className:c.a.contentBlock,style:{borderColor:e}},l.createElement("div",{className:c.a.contentBlockHeader},l.createElement("span",{className:c.a.contentBlockTitle},t),l.createElement("img",{src:a,height:50})),l.createElement("div",{className:c.a.contentBlockInner},this.props.children))}}class i extends l.Component{render(){const{title:e}=this.props;return l.createElement("div",{className:c.a.titleBlock},l.createElement("div",{className:c.a.titleBlockHeader},l.createElement("span",{className:c.a.titleBlockTitle},e)),l.createElement("div",{className:c.a.titleBlockInner},this.props.children))}}t.default=function(){return l.createElement(n.a,{permalink:"/",title:"C19HCC"},l.createElement("div",null,l.createElement(o,null),l.createElement("div",{className:c.a.mainContainer},l.createElement("div",{className:c.a.row},l.createElement(i,{title:"Distributed Analytics for COVID-19"},l.createElement("span",{className:c.a.contentDescription},l.createElement("p",null,"The clinical data needed to derive insights on COVID-19 screening and management is a moving target. Many organizations are defining data elements and codes to represent COVID-19 related data. We can unlock at-scale analytics for COVID-19 to produce valuable clinical insights by creating:"),l.createElement("br",null),l.createElement("ul",null,l.createElement("li",null,"Standard COVID-19 cohorts for relevant measures and populations of interest. Following these definitions assures consistent metrics and comparable cohorts."),l.createElement("li",null,"A base set of data requirements for clinical data providers, to guide data extraction with minimal effort and fewest assumptions."),l.createElement("li",null,"Terminologies and value sets that help extract the relevant and intended data, independent of local variations in data.")),l.createElement("p",null,"Because moving data can encounter logistical, contractual, and regulatory barriers, it is usually easier and faster to move the queries to the data owners, have them evaluate the queries, and then federate the results. By carefully defining the queries themselves, we assure the results are comparable."),l.createElement("br",null)))),l.createElement("div",{className:c.a.row},l.createElement(s,{title:"COVID-19 Observational Studies",color:"#0774d3",icon:"img/icons/home/data-release.svg"},l.createElement("span",{className:c.a.contentDescription},"A list of observational studies undertaken as part of the COVID-19 Healthcare Coalition. Each study is defined by a set of row-level source data, cohorts (phenotypes), and metrics."),l.createElement("a",{className:c.a.contentAction,href:"docs/studies/"},"STUDIES",l.createElement("img",{src:"img/icons/chevron-right.svg",height:8,width:8})),l.createElement("br",null)),l.createElement(s,{title:"COVID-19 Cohorts",color:"#7f55cc",icon:"img/icons/home/controlled-data.svg"},l.createElement("span",{className:c.a.contentDescription},"COVID-19 cohorts provide standardized definitions for relevant metrics and populations of interest. Following these definitions assures consistent metrics and comparable cohorts."),l.createElement("a",{className:c.a.contentAction,href:"docs/cohorts/"},"Cohorts",l.createElement("img",{src:"img/icons/chevron-right.svg",height:8,width:8})),l.createElement("br",null))),l.createElement("div",{className:c.a.row},l.createElement(s,{title:"Data Dictionary",color:"#4bcee5",icon:"img/icons/home/data-dictionary.svg"},l.createElement("span",{className:c.a.contentDescription},"The dictionary describes the guidelines that data submitters should follow when exporting clinical data files from their electronic health record (EHR) systems."),l.createElement("a",{className:c.a.contentAction,href:"dictionary/"},"Data Dictionary Viewer",l.createElement("img",{src:"img/icons/chevron-right.svg",height:8,width:8}))),l.createElement(s,{title:"COVID-19 Vocabulary",color:"#fea430",icon:"img/icons/home/faq.svg"},l.createElement("span",{className:c.a.contentDescription},"Documentation and sources for value sets and terminologies used in COVID-19 cohort definitions and data dictionary elements."),l.createElement("a",{className:c.a.contentAction,href:"docs/vocabulary/"},"Vocabulary",l.createElement("img",{src:"img/icons/chevron-right.svg",height:8,width:8})))))))}},124:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===c)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},158:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(150),l=a(126),o=a(136),s=a(1),i=a(159),d=a(160),u=a(168),m=a.n(u),h=a(124),f=a.n(h),p=a(86),v=a.n(p);const g=()=>r.a.createElement("span",{className:f()(v.a.toggle,v.a.moon)}),E=()=>r.a.createElement("span",{className:f()(v.a.toggle,v.a.sun)});var b=function(e){const{isClient:t}=Object(l.a)();return r.a.createElement(m.a,Object(s.a)({disabled:!t,icons:{checked:r.a.createElement(g,null),unchecked:r.a.createElement(E,null)}},e))};var k=()=>{const[e,t]=n.useState("undefined"!=typeof document?document.querySelector("html").getAttribute("data-theme"):"");return n.useEffect(()=>{try{t(localStorage.getItem("theme"))}catch(e){console.error(e)}},[t]),[e,n.useCallback(e=>{try{localStorage.setItem("theme",e),t(e)}catch(a){console.error(a)}},[t])]},y=a(87),N=a.n(y);function C({to:e,href:t,label:a,position:n,...c}){const l=Object(o.a)(e);return r.a.createElement(i.a,Object(s.a)({className:"navbar__item navbar__link"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{activeClassName:"navbar__link--active",to:l},c),a)}var _=function(){const e=Object(l.a)(),[t,a]=Object(n.useState)(!1),[u,m]=Object(n.useState)(!1),[h,p]=k(),{siteConfig:v={}}=e,{baseUrl:g,themeConfig:E={}}=v,{navbar:y={},disableDarkMode:_=!1}=E,{title:w,logo:O={},links:j=[]}=y,x=Object(n.useCallback)(()=>{a(!0)},[a]),D=Object(n.useCallback)(()=>{a(!1)},[a]),T=Object(n.useCallback)(e=>p(e.target.checked?"dark":""),[p]),S=Object(o.a)(O.src);return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en","data-theme":h})),r.a.createElement("nav",{className:f()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":t})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:x,onKeyDown:x},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(i.a,{className:"navbar__brand",to:g},null!=O&&r.a.createElement("img",{className:"navbar__logo",src:S,alt:O.alt}),null!=w&&r.a.createElement("strong",{className:u?N.a.hideLogoText:""},w)),j.filter(e=>"right"!==e.position).map((e,t)=>r.a.createElement(C,Object(s.a)({},e,{key:t})))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},j.filter(e=>"right"===e.position).map((e,t)=>r.a.createElement(C,Object(s.a)({},e,{key:t}))),!_&&r.a.createElement(b,{className:N.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:"dark"===h,onChange:T}),r.a.createElement(d.a,{handleSearchBarToggle:m,isSearchBarExpanded:u}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:()=>{a(!1)}}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(i.a,{className:"navbar__brand",onClick:D,to:g},null!=O&&r.a.createElement("img",{className:"navbar__logo",src:S,alt:O.alt}),null!=w&&r.a.createElement("strong",null,w)),!_&&t&&r.a.createElement(b,{"aria-label":"Dark mode toggle in sidebar",checked:"dark"===h,onChange:T})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},j.map((e,t)=>r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(C,Object(s.a)({className:"menu__link"},e,{onClick:D}))))))))))},w=a(161);a(88);t.a=function(e){const{siteConfig:t={}}=Object(l.a)(),{favicon:a,tagline:n,title:s,themeConfig:{image:i},url:d}=t,{children:u,title:m,noFooter:h,description:f,image:p,keywords:v,permalink:g,version:E}=e,b=m||`${s} \xb7 ${n}`,k=p||i,y=d+Object(o.a)(k),N=Object(o.a)(a);return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),b&&r.a.createElement("title",null,b),b&&r.a.createElement("meta",{property:"og:title",content:b}),a&&r.a.createElement("link",{rel:"shortcut icon",href:N}),f&&r.a.createElement("meta",{name:"description",content:f}),f&&r.a.createElement("meta",{property:"og:description",content:f}),E&&r.a.createElement("meta",{name:"docsearch:version",content:E}),v&&v.length&&r.a.createElement("meta",{name:"keywords",content:v.join(",")}),k&&r.a.createElement("meta",{property:"og:image",content:y}),k&&r.a.createElement("meta",{property:"twitter:image",content:y}),k&&r.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${b}`}),g&&r.a.createElement("meta",{property:"og:url",content:d+g}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(_,null),r.a.createElement("div",{className:"main-wrapper"},u),!h&&r.a.createElement(w.a,null))}},160:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(124),l=a.n(c);t.a=e=>{r.a.useRef();return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),tabIndex:0}))}},161:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(126),l=a(136),o=a(85),s=a.n(o);t.a=function(){const e=Object(c.a)(),{siteConfig:t={}}=e;return r.a.createElement("footer",{className:s.a["nav-footer"],id:"footer"},r.a.createElement("div",{className:s.a.footerWrapper},r.a.createElement("div",{className:s.a.footerLogo},r.a.createElement("a",{href:"https://c19hcc.org/"},r.a.createElement("img",{src:Object(l.a)("img/logos/c19hcc.png"),alt:"COVID-19 Healthcare Coalition",width:"240px"}))),r.a.createElement("div",{className:s.a.footerContent},r.a.createElement("section",{className:s.a.footerLinks}),r.a.createElement("section",{className:s.a["legal-text"]},t.themeConfig.footer.copyright),r.a.createElement("section",{className:s.a["legal-text"]},r.a.createElement("a",{href:"https://www.icgc-argo.org",target:"_blank"},"Based on the ARGO Data Platform")," ")),r.a.createElement("div",{className:s.a.footerLogo},r.a.createElement("a",{href:"https://mitre.org/"},r.a.createElement("img",{src:Object(l.a)("img/logos/mitre_logo.svg"),alt:"MITRE Corporation",height:"40px"})))))}},168:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),l=m(c),o=m(a(124)),s=m(a(8)),i=m(a(169)),d=m(a(170)),u=a(171);function m(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,u.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,u.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,u.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,o.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return l.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},l.default.createElement("div",{className:"react-toggle-track"},l.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),l.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),l.default.createElement("div",{className:"react-toggle-thumb"}),l.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:l.default.createElement(i.default,null),unchecked:l.default.createElement(d.default,null)}},h.propTypes={checked:s.default.bool,disabled:s.default.bool,defaultChecked:s.default.bool,onChange:s.default.func,onFocus:s.default.func,onBlur:s.default.func,className:s.default.string,name:s.default.string,value:s.default.string,id:s.default.string,"aria-labelledby":s.default.string,"aria-label":s.default.string,icons:s.default.oneOfType([s.default.bool,s.default.shape({checked:s.default.node,unchecked:s.default.node})])}},169:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},170:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},171:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}}}]);