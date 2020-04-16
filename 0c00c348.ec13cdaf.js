(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{129:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},d=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),d=s(n),p=i,m=d["".concat(o,".").concat(p)]||d[p]||u[p]||r;return n?a.a.createElement(m,l({ref:t},b,{components:n})):a.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var b=2;b<r;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var i=n(1),a=n(6),r=(n(0),n(129)),o={id:"studies",title:"Studies"},l=[{value:"Study 1",id:"study-1",children:[{value:"Background",id:"background",children:[]},{value:"Study Design",id:"study-design",children:[]},{value:"Cohorts",id:"cohorts",children:[]},{value:"Data Dictionary-Based Criteria",id:"data-dictionary-based-criteria",children:[]},{value:"Value Sets",id:"value-sets",children:[]}]}],c={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"study-1"},"Study 1"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"RESEARCH QUESTION: For patients with new COVID-19 infection, how does the addition of hydroxychloroquine (HCQ) affect outcomes (mechanical ventilation, inpatient death)?")),Object(r.b)("h3",{id:"background"},"Background"),Object(r.b)("p",null,"Hydroxychloroquine and a related drug, chloroquine, are currently under study as possible treatments for COVID-19. Before randomized clinical trials read out, an observational trial can provide insight into the efficacy of this drug."),Object(r.b)("h3",{id:"study-design"},"Study Design"),Object(r.b)("p",null,"The study involves inpatient use of HCQ and its effect on disease severity. The study involves two study groups (those receiving or not receiving HCQ), as depicted below:"),Object(r.b)("p",null,Object(r.b)("img",Object(i.a)({parentName:"p"},{src:"hydroxy_cohorts.png",alt:"Hydroxycholoroquine cohort pathways"}))),Object(r.b)("p",null,"Three outcomes are considered:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Discharge without being placed on mechanical ventilation during stay"),Object(r.b)("li",{parentName:"ol"},"Discharge after invasive mechanical ventilation (IVM) during stay"),Object(r.b)("li",{parentName:"ol"},"Inpatient death")),Object(r.b)("p",null,"These outcomes correspond to three levels disease severity. They are retrospective over the entire patient visit and captures the worst severity of illness during the visit. The study uses mechanical ventilation as a proxy for severe but not fatal disease. If the patient succumbs to the disease, they would be classified as outcome 3, regardless of whether they were ventilated during the stay."),Object(r.b)("p",null,Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7118652/"}),"Siddiqi and Mehra")," have proposed a staging system for COVID-19 aligned to the stages of the disease, from early infection (Stage 1) to pulmonary involvement (Stage 2) to systemic hyperinflammation (Stage 3). That staging system focuses of the progression, rather than the severity of the disease, although clearly the two are related."),Object(r.b)("h3",{id:"cohorts"},"Cohorts"),Object(r.b)("h4",{id:"definitions"},"Definitions"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"COVID-19-positive"),": Clinical Dx of confirmed COVID-19 OR COVID-19 confirmatory lab test ","[1]"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"COVID-19-positive-date"),": Earliest of (first confirmatory specimen collection date or first physician Dx)",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Laboratory order date can be used in place of specimen collection date if the latter is unknown"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"COVID-19-related-hospitalization"),":",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"COVID-19-positive-date")," during any hospitalization OR"),Object(r.b)("li",{parentName:"ul"},"(Hospitalization within 14 days after ",Object(r.b)("inlineCode",{parentName:"li"},"COVID-19-positive-date"),") AND (any respiratory diagnosis at admission or during hospitalization) ","[2]"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Prior-HCQ-use"),":",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"HCQ on admission medication list or outpatient medication list"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Inpatient-HCQ-use"),":",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"HCQ medication administration during ",Object(r.b)("inlineCode",{parentName:"li"},"COVID-19-related-hospitalization"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Includes any dose, form, duration of HCQ"),Object(r.b)("li",{parentName:"ul"},"Includes any level of disease severity while on HCQ"),Object(r.b)("li",{parentName:"ul"},"Includes patients on other medications")))))),Object(r.b)("h4",{id:"study-groups"},"Study Groups"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"All cohorts:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Age at ",Object(r.b)("inlineCode",{parentName:"li"},"COVID-19-positive-date")," \u2265 18 years"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"COVID-19-positive-date")," after Jan 1, 2020"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Treatment Group"),":",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Inpatient-HCQ-use")," AND NOT ",Object(r.b)("inlineCode",{parentName:"li"},"Prior-HCQ-use")," ","[3]"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Control Group"),":",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"NOT ",Object(r.b)("inlineCode",{parentName:"li"},"Inpatient-HCQ-use")," AND NOT ",Object(r.b)("inlineCode",{parentName:"li"},"Prior-HCQ-use")," ","[3]")))),Object(r.b)("h4",{id:"outcomes"},"Outcomes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Invasive Mechanical Ventilation (IMV)"),":",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Any intubation procedure performed OR any mechanical ventilation-associated\xa0procedure performed during ",Object(r.b)("inlineCode",{parentName:"li"},"COVID-19-related-hospitalization"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Excludes supplemental oxygen (high or low flow), CPAP, and BiPAP"))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"COVID-19 Inpatient Death"),":",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"COVID-19 related hospitalization")," AND patient death prior to discharge")))),Object(r.b)("h3",{id:"data-dictionary-based-criteria"},"Data Dictionary-Based Criteria"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Clinical Dx of COVID-19"),": Confirmed COVID-19 diagnosis code in ",Object(r.b)("inlineCode",{parentName:"li"},"encounter.admitting_diagnosis"),", ",Object(r.b)("inlineCode",{parentName:"li"},"condition.code"),", or ",Object(r.b)("inlineCode",{parentName:"li"},"encounter.discharge_diagnosis")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Inpatient encounter"),":  ",Object(r.b)("inlineCode",{parentName:"li"},"encounter")," with ",Object(r.b)("inlineCode",{parentName:"li"},"encounter_class")," = ",Object(r.b)("inlineCode",{parentName:"li"},"IMP (inpatient encounter)")," or ",Object(r.b)("inlineCode",{parentName:"li"},"ACUTE (inpatient acute)")," or ",Object(r.b)("inlineCode",{parentName:"li"},"NONAC (inpatient non-acute)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Patient death prior to discharge"),": ",Object(r.b)("inlineCode",{parentName:"li"},"date_of_death")," during ",Object(r.b)("inlineCode",{parentName:"li"},"COVID-19-related-hospitalization"))),Object(r.b)("h3",{id:"value-sets"},"Value Sets"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.117/definition"}),"Confirmed COVID-19 diagnosis code")),Object(r.b)("li",{parentName:"ul"},"Confirmatory lab test"),Object(r.b)("li",{parentName:"ul"},"Respiratory diagnosis (clinical or billing code) -- ICD 10 J00-J99"),Object(r.b)("li",{parentName:"ul"},"HCQ drug codes (for outpatient/admission medication list and inpatient medication administration)"),Object(r.b)("li",{parentName:"ul"},"Any intubation procedure or mechanical ventilation-associated\xa0procedure performed")),Object(r.b)("h4",{id:"notes"},"Notes:"),Object(r.b)("p",null,"[1]"," Study includes confirmed cases only",Object(r.b)("br",null),"\n","[2]"," Serves a confirmation that hospital admission is related to COVID-19 infection (as opposed to broken arm, etc.)",Object(r.b)("br",null),"\n","[3]"," Patients with prior use of HCQ (e.g., as treatment for autoimmune disease) are excluded from study"))}b.isMDXComponent=!0}}]);