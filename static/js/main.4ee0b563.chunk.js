(this.webpackJsonplogplanDev=this.webpackJsonplogplanDev||[]).push([[0],{207:function(e,t,r){},208:function(e,t,r){},210:function(e,t){},211:function(e,t){},212:function(e,t){},213:function(e,t){},214:function(e,t){},215:function(e,t){},613:function(e,t,r){"use strict";r.r(t);var a=r(0),l=r.n(a),n=r(24),c=r.n(n),o=(r(207),r(208),r(11)),i=r(14),s=r(62),d=r(16),b=r(5),u=r(197),j=r.n(u),g=r(92),h=r(202),x=(r(209),r(198)),p=r.n(x),m={almostBlack:"#181A1B",lightBlack:"#2F3336",almostWhite:"#E6E6E6",white:"#FFF",white10:"rgba(255, 255, 255, 0.1)",black:"#000",black10:"rgba(0, 0, 0, 0.1)",primary:"#1AB6FF",greyLight:"#F4F7FA",grey:"#E8EBED",greyMid:"#C5CCD3",greyDark:"#DAE1E9",tailwindGray900:"rgba(17, 24, 39, 0.9)"},f=Object(b.a)(Object(b.a)({},m),{},{fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen, Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif",fontFamilyMono:"'SFMono-Regular',Consolas,'Liberation Mono', Menlo, Courier,monospace",fontWeight:400,zIndex:100,link:m.primary,placeholder:"#B1BECC",textSecondary:"#4E5C6E",textLight:m.white,textHighlight:"#b3e7ff",textHighlightForeground:m.black,selected:m.primary,codeComment:"#6a737d",codePunctuation:"#5e6687",codeNumber:"#d73a49",codeProperty:"#c08b30",codeTag:"#3d8fd1",codeString:"#032f62",codeSelector:"#6679cc",codeAttr:"#c76b29",codeEntity:"#22a2c9",codeKeyword:"#d73a49",codeFunction:"#6f42c1",codeStatement:"#22a2c9",codePlaceholder:"#3d8fd1",codeInserted:"#202746",codeImportant:"#c94922",blockToolbarBackground:m.white,blockToolbarTrigger:m.greyMid,blockToolbarTriggerIcon:m.white,blockToolbarItem:m.almostBlack,blockToolbarIcon:void 0,blockToolbarIconSelected:m.black,blockToolbarText:m.almostBlack,blockToolbarTextSelected:m.black,blockToolbarSelectedBackground:m.greyMid,blockToolbarHoverBackground:m.greyLight,blockToolbarDivider:m.greyMid,noticeInfoBackground:"#F5BE31",noticeInfoText:m.almostBlack,noticeTipBackground:"#9E5CF7",noticeTipText:m.white,noticeWarningBackground:"#FF5C80",noticeWarningText:m.white}),v=Object(b.a)(Object(b.a)({},f),{},{background:m.white,text:m.almostBlack,code:m.lightBlack,cursor:m.black,divider:m.greyMid,toolbarBackground:m.lightBlack,toolbarHoverBackground:m.black,toolbarInput:m.white10,toolbarItem:m.white,tableDivider:m.greyMid,tableSelected:m.primary,tableSelectedBackground:"#E5F7FF",quote:m.greyDark,codeBackground:m.greyLight,codeBorder:m.grey,horizontalRule:m.greyMid,imageErrorBackground:m.greyLight,scrollbarBackground:m.greyLight,scrollbarThumb:m.greyMid}),O=Object(b.a)(Object(b.a)({},f),{},{background:m.tailwindGray900,text:m.almostWhite,code:m.almostWhite,cursor:m.white,divider:"#4E5C6E",placeholder:"#52657A",toolbarBackground:m.white,toolbarHoverBackground:m.greyMid,toolbarInput:m.black10,toolbarItem:m.lightBlack,tableDivider:m.lightBlack,tableSelected:m.primary,tableSelectedBackground:"#002333",quote:m.greyDark,codeBackground:m.black,codeBorder:m.lightBlack,codeString:"#3d8fd1",horizontalRule:m.lightBlack,imageErrorBackground:"rgba(0, 0, 0, 0.5)",scrollbarBackground:m.black,scrollbarThumb:m.lightBlack}),y=r(3);var w=function(e){return Object(y.jsxs)("div",{style:{display:e.display?"none":"block"},children:[Object(y.jsxs)("p",{children:[" ",e.date," "]}),Object(y.jsx)(p.a,{defaultValue:e.defaultValue,onChange:function(t){return e.handleEditorChange(e.theKey,t())},onSave:function(){return e.onSave()},onClickLink:function(t,r){return e.onClickLink(t)},placeholder:e.placeholder,theme:"dark"===e.theme?O:v})]})};var k=function(e){var t=e.dataList;console.log(Object.keys(t)),console.log(e.filter_list);var r=Object.keys(t).map((function(r){return Object(y.jsxs)("li",{className:"mb-10 ml-4 transition ease-in-out",style:{display:e.filter_mode&&!e.filter_list.includes(parseInt(r))||!t[parseInt(r)].display?"none":"block"},children:[Object(y.jsx)("div",{className:"absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"}),Object(y.jsxs)("time",{className:"flex mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",children:[t[r].date,Object(y.jsx)("svg",{onClick:function(){return e.onClickDel(r)},className:"ml-1 w-4 h-4 text-gray-200 hover:text-black dark:text-gray-600 dark:hover:text-gray-200",fill:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(y.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z",clipRule:"evenodd"})})]}),Object(y.jsx)(w,{theKey:r,display:e.filter_mode&&!e.filter_list.includes(parseInt(r))||!t[parseInt(r)].display,placeholder:"\u65b0\u7684 Block \u5199\u70b9\u4ec0\u4e48...",defaultValue:t[r].value,handleEditorChange:e.handleEditorChange,onSave:e.onSave,onClickLink:e.onClickLink,theme:e.theme})]},r)}));return Object(y.jsx)("div",{children:Object(y.jsx)("ul",{className:"relative border-l border-gray-200 dark:border-gray-700 px-5 logs",children:r})})};var N=function(e){return Object(y.jsxs)("nav",{className:"sticky z-10 flex flex-wrap justify-between w-full ",children:[Object(y.jsxs)("div",{className:"flex inline-flex rounded-md dark:shadow-sm p-5",role:"group",children:[Object(y.jsxs)("button",{type:"button",onClick:e.onClickAll,className:"blurry bg-opacity-50  z-20 inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-40 focus:ring-2 focus:ring-blue-700 focus:text-blue-700  dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white",children:[Object(y.jsx)("svg",{"aria-hidden":"true",className:"mr-2 w-4 h-4 fill-current",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:Object(y.jsx)("path",{d:"M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})}),"\u5168\u90e8"]}),Object(y.jsxs)("button",{type:"button",onClick:e.onClickUnf,className:"z-30 blurry bg-opacity-50 inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-30 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white",children:[Object(y.jsxs)("svg",{"aria-hidden":"true",className:"mr-2 w-4 h-4 fill-current",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[Object(y.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"}),"        "]}),"\u5f85\u529e"]}),Object(y.jsxs)("button",{type:"button",className:"blurry z-20 inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-30 focus:ring-2 focus:ring-blue-700 focus:text-blue-700  dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white",onClick:e.onClickAdd,children:[Object(y.jsxs)("svg",{"aria-hidden":"true",className:"mr-2 w-4 h-4 fill-current",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[Object(y.jsx)("path",{fillRule:"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",clipRule:"evenodd"}),"        "]}),"\u6dfb\u52a0"]})]}),Object(y.jsx)("div",{className:"transition-all duration-1000 ease-out  projname flex text-sm transp blurry z-20 my-5 py-1 px-10 rounded-lg   items-center text-blue-700 dark:text-white hidden md:block",children:e.file_name?e.file_name:"Untitled"}),Object(y.jsx)("div",{className:" z-20 transp flex flex-wrap justify-between rounded-md dark:shadow-sm p-5",children:Object(y.jsxs)("form",{onSubmit:e.onSubmit,children:[Object(y.jsx)("label",{htmlFor:"default-search",className:"mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300",children:"Search"}),Object(y.jsxs)("div",{className:"relative",children:[Object(y.jsx)("div",{className:"flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none",children:Object(y.jsx)("svg",{"aria-hidden":"true",className:"z-50 w-5 h-5 text-gray-500 dark:text-gray-400",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:Object(y.jsx)("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})})}),Object(y.jsx)("input",{type:"search",id:"default-search",className:"blurry transp block py-2 px-4 pl-10 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Type to filter",required:"",onChange:function(t){return e.onSearchChange(t.target.value)},value:e.searchInput})]})]})})]})};var _=function(e){return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{className:" z-10 mainbutton ",children:[Object(y.jsxs)("button",{"data-popover-target":"popover-description","data-popover-trigger":"click",type:"button",className:"ztop text-white bg-blue-700 hover:bg-blue-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:[Object(y.jsx)("svg",{className:"md:mr-2 w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:Object(y.jsx)("path",{d:"M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"})}),Object(y.jsx)("span",{className:"hidden md:block",children:"Pilow"})]}),Object(y.jsx)("aside",{"data-popover":"",id:"popover-description",role:"tooltip",className:"w-64 invisible transition-opacity duration-500 ","aria-label":"Sidebar",children:Object(y.jsxs)("div",{className:"overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800",children:[Object(y.jsxs)("ul",{className:"space-y-2",children:[Object(y.jsx)("li",{children:Object(y.jsxs)("a",{href:"#darkmode",onClick:e.onClickToggleDarkmode,className:"flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",children:[Object(y.jsx)("svg",{"aria-hidden":"true",className:"w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:Object(y.jsx)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})}),Object(y.jsx)("span",{className:"ml-3",children:"\u5207\u6362\u6697\u8272\u6a21\u5f0f"})]})}),Object(y.jsx)("li",{children:Object(y.jsxs)("a",{href:"#",className:"flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",children:[Object(y.jsxs)("svg",{"aria-hidden":"true",className:"flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[Object(y.jsx)("path",{fillRule:"evenodd",d:"M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z",clipRule:"evenodd"}),"  "]}),Object(y.jsx)("span",{className:"flex-1 ml-3 whitespace-nowrap",children:"\u91cc\u7a0b\u7891\u89c6\u56fe"}),Object(y.jsx)("span",{className:"inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200",children:"3"})]})}),Object(y.jsx)("li",{children:Object(y.jsxs)("a",{href:"#",className:"flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",children:[Object(y.jsx)("svg",{"aria-hidden":"true",className:"flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:Object(y.jsx)("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})}),Object(y.jsx)("span",{className:"flex-1 ml-3 whitespace-nowrap",children:"\u5e2e\u52a9"})]})})]}),Object(y.jsxs)("div",{id:"dropdown-cta",className:"p-4 mt-6 bg-blue-50 rounded-lg dark:bg-blue-900",role:"alert",children:[Object(y.jsxs)("div",{className:"flex items-center mb-3",children:[Object(y.jsx)("span",{className:"bg-white text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900",children:"Alpha"}),Object(y.jsxs)("button",{type:"button",className:"ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800","data-collapse-toggle":"dropdown-cta","aria-label":"Close",children:[Object(y.jsx)("span",{className:"sr-only",children:"Close"}),Object(y.jsx)("svg",{"aria-hidden":"true",className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:Object(y.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})]})]}),Object(y.jsx)("p",{className:"mb-3 text-sm text-blue-900 dark:text-blue-400",children:"Pillow \u8fd8\u662f\u4e00\u4e2a\u5b9e\u9a8c\u7248\u672c\uff0c\u4f60\u53ef\u4ee5\u63d0\u51fa\u610f\u89c1\uff0c\u4fbf\u4e8e\u5979\u6301\u7eed\u6539\u5584\u3002"}),Object(y.jsx)("a",{className:"text-sm text-blue-900 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300",href:"#",children:"Why Pilow"})]})]})}),Object(y.jsx)("div",{"data-popper-arrow":""})]})})};var C=function(e){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("div",{id:"crypto-modal",tabIndex:-1,"aria-hidden":"true",className:"".concat(e.endteredEditor?"hidden":""," modalstyle overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full h-full md:inset-0 h-modal md:h-full"),children:Object(y.jsx)("div",{className:"relative p-4 w-full mx-auto mt-20 max-w-lg h-full md:h-auto",children:Object(y.jsxs)("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-900",children:[Object(y.jsxs)("button",{type:"button",onClick:e.onUserClickNewDoc,className:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white",children:[Object(y.jsx)("svg",{"aria-hidden":"true",className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:Object(y.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})}),Object(y.jsx)("span",{className:"sr-only",children:"Close modal"})]}),Object(y.jsx)("div",{className:"py-4 px-6 rounded-t border-b dark:border-gray-600",children:Object(y.jsxs)("h1",{className:"text-base font-semibold text-gray-900 lg:text-xl dark:text-white",children:["\ud83d\udc4f   \u5f00\u59cb\u4f7f\u7528 ",Object(y.jsx)("span",{className:"logofont",children:" #Pilow"})]})}),Object(y.jsxs)("div",{className:"p-6",children:[Object(y.jsx)("p",{className:"text-sm font-normal text-gray-500 dark:text-gray-400",children:"\u9009\u62e9\u4e00\u79cd\u65b9\u5f0f\u5f00\u59cb\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u65b0\u5efa\u6216\u6253\u5f00\u4e00\u4e2a\u672c\u5730\u9879\u76ee\u6587\u6863\u3002"}),Object(y.jsxs)("ul",{className:"my-4 space-y-3",children:[Object(y.jsx)("li",{children:Object(y.jsxs)("a",{href:"#new",onClick:e.onUserClickNewDoc,className:"flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white",children:[Object(y.jsx)("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:Object(y.jsx)("path",{fillRule:"evenodd",d:"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z",clipRule:"evenodd"})}),Object(y.jsx)("span",{className:"flex-1 ml-3 whitespace-nowrap",children:"\u8fdb\u5165\u7a7a\u6587\u6863"}),Object(y.jsx)("span",{className:"inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400",children:"Popular"})]})}),Object(y.jsx)("li",{children:Object(y.jsxs)("a",{href:"#open",onClick:e.onUserClickOpenDoc,className:"flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white",children:[Object(y.jsxs)("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[Object(y.jsx)("path",{fillRule:"evenodd",d:"M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z",clipRule:"evenodd"}),Object(y.jsx)("path",{d:"M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"})]}),Object(y.jsx)("span",{className:"flex-1 ml-3 whitespace-nowrap",children:"\u6253\u5f00\u4e00\u4e2a\u672c\u5730\u6587\u6863"})]})}),""]}),Object(y.jsx)("div",{children:Object(y.jsxs)("a",{href:"#",className:"inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400",children:[Object(y.jsx)("svg",{"aria-hidden":"true",className:"mr-2 w-3 h-3",focusable:"false","data-prefix":"far","data-icon":"question-circle",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(y.jsx)("path",{fill:"currentColor",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"})}),"\u4e3a\u4f55\u6253\u5f00\u6587\u6863\u9700\u8981\u6388\u6743\u672c\u5730\u6587\u6863\uff1f"]})})]})]})})})})},B=r(40),z=r.n(B);var S=function(e){return Object(y.jsxs)("div",{className:e.shouldShow?"":"hidden",children:[Object(y.jsxs)("h1",{className:"text-center mt-10 mb-6 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-2xl lg:text-3xl dark:text-white",children:["\u8fd9\u662f\u4e00\u4e2a\u7a7a\u6587\u6863",Object(y.jsx)("p",{children:"\u8f7b\u70b9 \u201c\u6dfb\u52a0\u201d \u521b\u5efa\u7b2c\u4e00\u4e2a Block "})]}),Object(y.jsxs)("div",{role:"status",className:"ml-10 p-1 space-y-4 max-w-lg rounded border border-gray-200 divide-y divide-gray-200 shadow  dark:divide-gray-700 md:p-6 dark:border-gray-700",children:[Object(y.jsxs)("div",{className:"flex justify-between items-center",children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"}),Object(y.jsx)("div",{className:"w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"})]}),Object(y.jsx)("div",{className:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"})]}),Object(y.jsxs)("div",{className:"flex justify-between items-center pt-4",children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"}),Object(y.jsx)("div",{className:"w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"})]}),Object(y.jsx)("div",{className:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"})]}),Object(y.jsxs)("div",{className:"flex justify-between items-center pt-4",children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"}),Object(y.jsx)("div",{className:"w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"})]}),Object(y.jsx)("div",{className:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"})]}),Object(y.jsxs)("div",{className:"flex justify-between items-center pt-4",children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"}),Object(y.jsx)("div",{className:"w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"})]}),Object(y.jsx)("div",{className:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"})]}),Object(y.jsxs)("div",{className:"flex justify-between items-center pt-4",children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"}),Object(y.jsx)("div",{className:"w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"})]}),Object(y.jsx)("div",{className:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"})]}),Object(y.jsx)("span",{className:"sr-only",children:"Loading..."})]})]})},M={project_1:{fileHandle:null,properties:{file_name:null,created_at:null,user:"default",filter_mode:!1,filter_list:[],savedState:!1,endteredEditor:!1,alreadyOpenedFile:!1,search_string:"",recent_files:[]},content:{}}},L="project_1",E=function(e,t){return e.reduce((function(e,r){return Object(b.a)(Object(b.a)({},e),{},Object(d.a)({},r[t],r))}),{})},F=localStorage.getItem("theme")||"dark";var D=function(){var e=Object(a.useState)(M),t=Object(s.a)(e,2),r=t[0],n=t[1],c=l.a.useRef();function u(e,t){return localStorage.setItem(e,t),t}Object(h.a)("ctrl+s, command+s",(function(){return I()}));var x=function(e,t){var r=Object(a.useState)((function(){return localStorage.getItem(e)||u(e,t)})),l=Object(s.a)(r,2),n=l[0],c=l[1];return[n,Object(a.useCallback)((function(t){return c(t),u(e,t)}),[e,c])]}("theme",F),p=Object(s.a)(x,2),m=p[0],f=p[1],v=window.document.documentElement;"dark"===m?v.classList.add("dark"):v.classList.remove("dark");var O=function(){n((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(d.a)({},L,Object(b.a)(Object(b.a)({},e.project_1),{},{properties:Object(b.a)(Object(b.a)({},e.project_1.properties),{},{filter_mode:!1,filter_list:[],savedState:!e.project_1.properties.savedState,search_string:""})})))}))},w=function(e){n((function(t){return Object(b.a)(Object(b.a)({},t),{},Object(d.a)({},L,Object(b.a)(Object(b.a)({},t.project_1),{},{content:Object(b.a)(Object(b.a)({},t.project_1.content),{},Object(d.a)({},e,Object(b.a)(Object(b.a)({},t.project_1.content[e]),{},{isDel:!0})))})))}))},D=function(e){var t=Object.keys(r.project_1.content).map((function(t){return!r.project_1.content[t].isDel&&(r.project_1.content[t].value.toLowerCase().indexOf(e.toLowerCase())>-1||j.a.spell(r.project_1.content[t].value.toLowerCase(),"first","low").indexOf(e.toLowerCase())>-1)?parseInt(t):-100})).filter((function(e){return e>-1}));console.log(t),n((function(r){return Object(b.a)(Object(b.a)({},r),{},Object(d.a)({},L,Object(b.a)(Object(b.a)({},r.project_1),{},{properties:Object(b.a)(Object(b.a)({},r.project_1.properties),{},{filter_mode:!0,filter_list:t,search_string:e})})))}))};function T(){return(T=Object(i.a)(Object(o.a)().mark((function e(){var t,a,l,c,i,s,u;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(g.a)([{description:"Text files",mimeTypes:["text/*"],extensions:[".md",".txt"]}]);case 3:return t=e.sent,e.next=6,t.text();case 6:return a=e.sent,console.log(t.handle),e.next=10,t.name;case 10:return l=e.sent,e.next=13,t.lastModified;case 13:c=e.sent,i=a.split(".........."),s=i.map((function(e,t){return{id:t+1,ref:t+1,date:e.trim().split(/\r?\n/)[0],value:e.trim().split(/\r?\n/).slice(1).join("\n"),display:!0,isDel:!1}})),u=E(s,"id"),console.log(u),n((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(d.a)({},L,Object(b.a)(Object(b.a)({},e.project_1),{},{fileHandle:t.handle,content:Object(b.a)({},u),properties:Object(b.a)(Object(b.a)({},e.project_1.properties),{},{file_name:l,created_at:c,user:"default",filter_mode:!1,filter_list:[],savedState:!1,endteredEditor:!0,alreadyOpenedFile:!0})})))})),console.log(r),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(0),console.log(e.t0);case 25:case"end":return e.stop()}}),e,null,[[0,22]])})))).apply(this,arguments)}function I(){return R.apply(this,arguments)}function R(){return R=Object(i.a)(Object(o.a)().mark((function e(){var t,a,l,c,i,s,u,j,h=arguments;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=h.length>0&&void 0!==h[0]?h[0]:r.project_1.fileHandle,a=t,console.log("fh:",t),e.prev=3,l=E(Object.values(r.project_1.content).filter((function(e){return!e.isDel})),"id"),c=Object.keys(l).map((function(e){return l[parseInt(e)].date+"\n"+l[parseInt(e)].value})).join("\n..........\n"),i=new Blob([c],{type:"text/plain"}),e.next=9,Object(g.b)(i,{fileName:"ProjectNote.md",description:"Markdown File",extensions:[".md"]},a);case 9:return s=e.sent,e.next=12,s.name;case 12:u=e.sent,j=(new Date).valueOf(),console.log(u,j,s),n((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(d.a)({},L,Object(b.a)(Object(b.a)({},e.project_1),{},{fileHandle:s,properties:Object(b.a)(Object(b.a)({},e.project_1.properties),{},{file_name:u,created_at:j,user:"default",filter_mode:!1,filter_list:[],savedState:!1,alreadyOpenedFile:!0})})))}),z()((function(e){return Object(y.jsx)("span",{children:"\u5df2\u4fdd\u5b58\u81f3\u672c\u5730\u6587\u4ef6"})}),{icon:Object(y.jsx)("svg",{className:"ml-1 w-4 h-4 text-black",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:Object(y.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})})})),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[3,18]])}))),R.apply(this,arguments)}return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("div",{className:"z-50",children:Object(y.jsx)(B.Toaster,{})}),Object(y.jsx)(N,{onClickAll:O,onClickUnf:function(){var e=Object.keys(r.project_1.content).map((function(e){return!r.project_1.content[e].isDel&&r.project_1.content[e].value.search(/\-\s\[\s\]/g)>-1?parseInt(e):-100})).filter((function(e){return e>-1}));console.log(e),e.length>0?n((function(t){return Object(b.a)(Object(b.a)({},t),{},Object(d.a)({},L,Object(b.a)(Object(b.a)({},t.project_1),{},{properties:Object(b.a)(Object(b.a)({},t.project_1.properties),{},{filter_mode:!0,filter_list:e,search_string:""})})))})):(O(),z()(" \u6ca1\u6709\u672a\u5b8c\u6210\u7684\u5f85\u529e\u4efb\u52a1\u3002",{icon:"\ud83d\udc4f"}))},onClickAdd:function(){n((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(d.a)({},L,Object(b.a)(Object(b.a)({},e.project_1),{},{properties:Object(b.a)(Object(b.a)({},e.project_1.properties),{},{filter_mode:!1,search_string:"",filter_list:[]}),content:Object(b.a)(Object(b.a)({},e.project_1.content),{},Object(d.a)({},Object.keys(e.project_1.content).length+1,{id:Object.keys(e.project_1.content).length+1,ref:Object.keys(e.project_1.content).length+1,date:["\u5468\u65e5","\u5468\u4e00","\u5468\u4e8c","\u5468\u4e09","\u5468\u56db","\u5468\u4e94","\u5468\u516d"][(new Date).getDay()]+" \xb7 "+(new Date).toLocaleString(),display:!0,value:"",isDel:!1}))})))}),console.log(r.project_1)),c.current.scrollIntoView()},onSearchChange:function(e){n((function(t){return Object(b.a)(Object(b.a)({},t),{},Object(d.a)({},L,Object(b.a)(Object(b.a)({},t.project_1),{},{properties:Object(b.a)(Object(b.a)({},t.project_1.properties),{},{filter_mode:!1,search_string:e})})))}))},onSubmit:function(e){e.preventDefault(),console.log("e.target.value",r.project_1.properties.search_string),D(r.project_1.properties.search_string)},savedState:r.project_1.properties.savedState,file_name:r.project_1.properties.file_name,searchInput:r.project_1.properties.search_string}),Object(y.jsxs)("div",{style:{width:"600px",margin:"auto",marginTop:"100px"},children:[Object(y.jsx)(k,{dataList:E(Object.values(r.project_1.content).filter((function(e){return!e.isDel})),"id"),filter_mode:r.project_1.properties.filter_mode,filter_list:r.project_1.properties.filter_list,handleEditorChange:function(e,t){n((function(r){var a=r;return a.project_1.content[e].value=t,a}),console.log(r.project_1.content[e].value))},onClickDel:function(e){z()((function(t){return Object(y.jsxs)("span",{children:["\u786e\u8ba4\u5220\u9664\u8fd9\u4e2a Block \uff1f",Object(y.jsx)("button",{className:"text-gray-900 dark:text-gray-200 dark:bg-gray-800 border px-3 py-1 rounded ",onClick:function(){z.a.dismiss(t.id),w(e)},children:Object(y.jsx)("b",{children:"\u662f\u7684"})})]})}),{icon:Object(y.jsx)("svg",{className:"ml-1 w-4 h-4 text-black",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:Object(y.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z",clipRule:"evenodd"})})})},onSave:I,onClickLink:function(e){var t=window.location.pathname.endsWith("/")?window.location.origin+window.location.pathname+"#":window.location.origin+window.location.pathname+"/#";if(console.log(e),e.startsWith(t)){var r=decodeURIComponent(e).slice(t.length);D(r)}else window.open(e,"_blank").focus()},theme:m}),Object(y.jsx)(_,{onClickToggleDarkmode:function(){"dark"===m?(f("light"),window.document.documentElement.classList.remove("dark")):(f("dark"),window.document.documentElement.classList.add("dark"))}}),Object(y.jsx)(S,{shouldShow:!(r.project_1.properties.endteredEditor&&Object.keys(r.project_1.content).length>0)}),Object(y.jsx)(C,{endteredEditor:r.project_1.properties.endteredEditor,onUserClickNewDoc:function(){n((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(d.a)({},L,Object(b.a)(Object(b.a)({},e.project_1),{},{properties:Object(b.a)(Object(b.a)({},e.project_1.properties),{},{endteredEditor:!0})})))}))},onUserClickOpenDoc:function(){!function(){T.apply(this,arguments)}()},recentFile:r.project_1.properties.recent_files}),Object(y.jsx)("div",{style:{height:"100px"},ref:c,children:" "})]})]})},T=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,616)).then((function(t){var r=t.getCLS,a=t.getFID,l=t.getFCP,n=t.getLCP,c=t.getTTFB;r(e),a(e),l(e),n(e),c(e)}))};c.a.render(Object(y.jsx)(l.a.StrictMode,{children:Object(y.jsx)(D,{})}),document.getElementById("root")),T()},95:function(e,t){function r(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}r.keys=function(){return[]},r.resolve=r,e.exports=r,r.id=95},96:function(e,t){}},[[613,1,2]]]);
//# sourceMappingURL=main.4ee0b563.chunk.js.map