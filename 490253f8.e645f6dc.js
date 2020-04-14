(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return c}));var i=n(1),a=n(7),o=(n(0),n(151)),r={id:"c-19-new-hydroxy",title:"New user of hydroxychloroquine"},l=[{value:"EHR Data Domains and Data Elements",id:"ehr-data-domains-and-data-elements",children:[]},{value:"Cohort Definition",id:"cohort-definition",children:[{value:"Initial Event Cohort",id:"initial-event-cohort",children:[]},{value:"Exclusion Criteria",id:"exclusion-criteria",children:[]}]}],b={rightToc:l};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Notice:\nThis content is preliminary and is expected to change quickly as we work with C19HCC partners to align and refine definitions.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Cohort name"),": New user of hydroxychloroquine"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Cohort identifier"),": c-19-new-hydroxy"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Cohort version"),": 0.1"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Cohort description"),": People having drug exposure to hydroxychloroquine for the first time, and not having an indication that might suggest prior hydroxychloroquine use."),Object(o.b)("h2",{id:"ehr-data-domains-and-data-elements"},"EHR Data Domains and Data Elements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Condition: ",Object(o.b)("inlineCode",{parentName:"li"},"condition_code"),", ",Object(o.b)("inlineCode",{parentName:"li"},"condition_type")),Object(o.b)("li",{parentName:"ul"},"Medication exposure: ",Object(o.b)("inlineCode",{parentName:"li"},"code"),", ",Object(o.b)("inlineCode",{parentName:"li"},"start_date"))),Object(o.b)("h2",{id:"cohort-definition"},"Cohort Definition"),Object(o.b)("h3",{id:"initial-event-cohort"},"Initial Event Cohort"),Object(o.b)("p",null,"Patients meeting meeting ",Object(o.b)("em",{parentName:"p"},"all")," of the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Drug exposure to hydroxychloroquine"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"At least 1 occurrence of a ",Object(o.b)("inlineCode",{parentName:"li"},"med_exposure")," meeting all of the following:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"code")," in in ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:""}),"CH19HCC Hydroxychloroquine")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"start_date")," is on or after index date")))))),Object(o.b)("h3",{id:"exclusion-criteria"},"Exclusion Criteria"),Object(o.b)("p",null,"Patients meeting meeting ",Object(o.b)("em",{parentName:"p"},"any")," of the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"No previous exposure to hydroxychloroquine")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Exactly 0 occurrences of a ",Object(o.b)("inlineCode",{parentName:"li"},"med_exposure")," meeting all of the following:\n",Object(o.b)("em",{parentName:"li"}," ",Object(o.b)("inlineCode",{parentName:"em"},"code")," in in ",Object(o.b)("a",Object(i.a)({parentName:"em"},{href:""}),"CH19HCC Hydroxychloroquine"))," ",Object(o.b)("inlineCode",{parentName:"li"},"start_date")," is before index date\n*\n",Object(o.b)("em",{parentName:"li"},"Note"),": ",Object(o.b)("inlineCode",{parentName:"li"},"med_exposure")," includes medications in the admission medication list at admission or on outpatient medication list prior to admission"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Condition suggesting prior hydroxychloroquine use"),":"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Diagnosis of systemic lupus erythematosus (",Object(o.b)("inlineCode",{parentName:"strong"},"Lupus_confirmed"),")"),":",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"At least 1 occurrence of a ",Object(o.b)("inlineCode",{parentName:"li"},"condition")," meeting ",Object(o.b)("em",{parentName:"li"},"all")," of the following:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"condition_code")," in ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:""}),"CH19HCC Lupus condition")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"condition_type")," is (",Object(o.b)("strong",{parentName:"li"},"chief complaint")," or ",Object(o.b)("strong",{parentName:"li"},"admitting diagnosis")," or ",Object(o.b)("strong",{parentName:"li"},"problem list entry")," or ",Object(o.b)("strong",{parentName:"li"},"encounter diagnosis")," or ",Object(o.b)("strong",{parentName:"li"},"final diagnosis")," or ",Object(o.b)("strong",{parentName:"li"},"discharge diagnosis"),")"))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Diagnosis of a chronic rheumatic condition (",Object(o.b)("inlineCode",{parentName:"strong"},"Rheumatic_condition_confirmed"),")"),":",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"At least 1 occurrence of a ",Object(o.b)("inlineCode",{parentName:"li"},"condition")," meeting ",Object(o.b)("em",{parentName:"li"},"all")," of the following:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"condition_code")," in ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:""}),"CH19HCC Chronic Rheumatic condition")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"condition_type")," is (",Object(o.b)("strong",{parentName:"li"},"chief complaint")," or ",Object(o.b)("strong",{parentName:"li"},"admitting diagnosis")," or ",Object(o.b)("strong",{parentName:"li"},"problem list entry")," or ",Object(o.b)("strong",{parentName:"li"},"encounter diagnosis")," or ",Object(o.b)("strong",{parentName:"li"},"final diagnosis")," or ",Object(o.b)("strong",{parentName:"li"},"discharge diagnosis"),")")))))))))}c.isMDXComponent=!0}}]);