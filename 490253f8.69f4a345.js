(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var i=n(1),r=n(6),a=(n(0),n(129)),o={id:"c-19-new-hydroxy",title:"New user of hydroxychloroquine"},c=[{value:"EHR Data Domains and Data Elements",id:"ehr-data-domains-and-data-elements",children:[]},{value:"Cohort Definition",id:"cohort-definition",children:[{value:"Initial Event Cohort",id:"initial-event-cohort",children:[]},{value:"Exclusion Criteria",id:"exclusion-criteria",children:[]}]}],l={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Notice:\nThis content is preliminary and is expected to change quickly as we work with C19HCC partners to align and refine definitions.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Cohort name"),": New user of hydroxychloroquine"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Cohort identifier"),": c-19-new-hydroxy"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Cohort version"),": 0.1"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Cohort description"),": People having drug exposure to hydroxychloroquine for the first time, and not having an indication that might suggest prior hydroxychloroquine use."),Object(a.b)("h2",{id:"ehr-data-domains-and-data-elements"},"EHR Data Domains and Data Elements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Condition: ",Object(a.b)("inlineCode",{parentName:"li"},"condition_code"),", ",Object(a.b)("inlineCode",{parentName:"li"},"condition_type")),Object(a.b)("li",{parentName:"ul"},"Medication exposure: ",Object(a.b)("inlineCode",{parentName:"li"},"code"),", ",Object(a.b)("inlineCode",{parentName:"li"},"start_date"))),Object(a.b)("h2",{id:"cohort-definition"},"Cohort Definition"),Object(a.b)("h3",{id:"initial-event-cohort"},"Initial Event Cohort"),Object(a.b)("p",null,"Patients meeting meeting ",Object(a.b)("em",{parentName:"p"},"all")," of the following:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Drug exposure to hydroxychloroquine"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"At least 1 occurrence of a ",Object(a.b)("inlineCode",{parentName:"li"},"med_exposure")," meeting all of the following:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"code")," in in ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:""}),"CH19HCC Hydroxychloroquine")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"start_date")," is on or after index date")))))),Object(a.b)("h3",{id:"exclusion-criteria"},"Exclusion Criteria"),Object(a.b)("p",null,"Patients meeting meeting ",Object(a.b)("em",{parentName:"p"},"any")," of the following:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"No previous exposure to hydroxychloroquine")),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Exactly 0 occurrences of a ",Object(a.b)("inlineCode",{parentName:"li"},"med_exposure")," meeting all of the following:\n",Object(a.b)("em",{parentName:"li"}," ",Object(a.b)("inlineCode",{parentName:"em"},"code")," in in ",Object(a.b)("a",Object(i.a)({parentName:"em"},{href:""}),"CH19HCC Hydroxychloroquine"))," ",Object(a.b)("inlineCode",{parentName:"li"},"start_date")," is before index date\n*\n",Object(a.b)("em",{parentName:"li"},"Note"),": ",Object(a.b)("inlineCode",{parentName:"li"},"med_exposure")," includes medications in the admission medication list at admission or on outpatient medication list prior to admission"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Condition suggesting prior hydroxychloroquine use"),":"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Diagnosis of systemic lupus erythematosus (",Object(a.b)("inlineCode",{parentName:"strong"},"Lupus_confirmed"),")"),":",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"At least 1 occurrence of a ",Object(a.b)("inlineCode",{parentName:"li"},"condition")," meeting ",Object(a.b)("em",{parentName:"li"},"all")," of the following:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"condition_code")," in ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:""}),"CH19HCC Lupus condition")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"condition_type")," is (",Object(a.b)("strong",{parentName:"li"},"chief complaint")," or ",Object(a.b)("strong",{parentName:"li"},"admitting diagnosis")," or ",Object(a.b)("strong",{parentName:"li"},"problem list entry")," or ",Object(a.b)("strong",{parentName:"li"},"encounter diagnosis")," or ",Object(a.b)("strong",{parentName:"li"},"final diagnosis")," or ",Object(a.b)("strong",{parentName:"li"},"discharge diagnosis"),")"))))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Diagnosis of a chronic rheumatic condition (",Object(a.b)("inlineCode",{parentName:"strong"},"Rheumatic_condition_confirmed"),")"),":",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"At least 1 occurrence of a ",Object(a.b)("inlineCode",{parentName:"li"},"condition")," meeting ",Object(a.b)("em",{parentName:"li"},"all")," of the following:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"condition_code")," in ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:""}),"CH19HCC Chronic Rheumatic condition")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"condition_type")," is (",Object(a.b)("strong",{parentName:"li"},"chief complaint")," or ",Object(a.b)("strong",{parentName:"li"},"admitting diagnosis")," or ",Object(a.b)("strong",{parentName:"li"},"problem list entry")," or ",Object(a.b)("strong",{parentName:"li"},"encounter diagnosis")," or ",Object(a.b)("strong",{parentName:"li"},"final diagnosis")," or ",Object(a.b)("strong",{parentName:"li"},"discharge diagnosis"),")")))))))))}b.isMDXComponent=!0},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},m=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),m=p(n),s=i,d=m["".concat(o,".").concat(s)]||m[s]||u[s]||a;return n?r.a.createElement(d,c({ref:t},b,{components:n})):r.a.createElement(d,c({ref:t},b))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var b=2;b<a;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);