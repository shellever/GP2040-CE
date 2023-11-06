"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6588],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,f=s["".concat(d,".").concat(u)]||s[u]||m[u]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4012:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Update Downloads Page",pagination_next:null,pagination_prev:null},l="Update Downloads Page",i={unversionedId:"development/documentation-update-downloads",id:"development/documentation-update-downloads",title:"Update Downloads Page",description:"Adding a microcontroller board or device to the Downloads page requires an update to the docs/src/config/boards.tsx file. The information required will depend on whether you are adding a microcontroller board or a controller.",source:"@site/docs/development/documentation-update-downloads.mdx",sourceDirName:"development",slug:"/development/documentation-update-downloads",permalink:"/development/documentation-update-downloads",draft:!1,tags:[],version:"current",frontMatter:{title:"Update Downloads Page",pagination_next:null,pagination_prev:null},sidebar:"contributeSidebar"},d={},p=[{value:"Microcontroller Board",id:"microcontroller-board",level:2},{value:"Controllers",id:"controllers",level:2}],c={toc:p},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"update-downloads-page"},"Update Downloads Page"),(0,a.kt)("p",null,"Adding a microcontroller board or device to the ",(0,a.kt)("a",{parentName:"p",href:"/downloads/download-page"},"Downloads")," page requires an update to the ",(0,a.kt)("inlineCode",{parentName:"p"},"docs/src/config/boards.tsx")," file. The information required will depend on whether you are adding a microcontroller board or a controller."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Key"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"name")),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the device what will be listed on the Downloads page")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"configName")),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the device that will be used to generate the .uf2 file and used to generate link to release firmware")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"pinout")),(0,a.kt)("td",{parentName:"tr",align:null},"Link to the devices pinout diagram")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"website")),(0,a.kt)("td",{parentName:"tr",align:null},"Link to the website containing device information")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"image")),(0,a.kt)("td",{parentName:"tr",align:null},"Absolute link to the asset used for device, change only ",(0,a.kt)("inlineCode",{parentName:"td"},"BoardName")," to match file name in ",(0,a.kt)("inlineCode",{parentName:"td"},"docs/docs/assets/"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"supported")),(0,a.kt)("td",{parentName:"tr",align:null},"(Microcontroller Board Only) Whether the device is currently supported by the project")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"category")),(0,a.kt)("td",{parentName:"tr",align:null},"(Controller Only) The category classification following convention listed below")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"desc")),(0,a.kt)("td",{parentName:"tr",align:null},"Short description of the device and manufacturer to be displayed on Downloads page")))),(0,a.kt)("h2",{id:"microcontroller-board"},"Microcontroller Board"),(0,a.kt)("p",null,"The template for microcontroller boards can be found in ",(0,a.kt)("a",{parentName:"p",href:"/development/templates#microcontroller-boards"},"Templates - Microcontroller Boards"),"."),(0,a.kt)("p",null,"To add a microcontroller board to the download list, fill out the template with all of the infomation and add it to the array ",(0,a.kt)("inlineCode",{parentName:"p"},"boards['Microcontroller Boards']"),". The order that the boards are listed determine the order that they appear on the page so note the following order of boards."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Raspberry Pi Pico"),(0,a.kt)("li",{parentName:"ul"},"Raspberry Pi Pico W"),(0,a.kt)("li",{parentName:"ul"},"The rest of the microcontroller boards in alphabetical order")),(0,a.kt)("h2",{id:"controllers"},"Controllers"),(0,a.kt)("p",null,"The template for controllers can be found in ",(0,a.kt)("a",{parentName:"p",href:"/development/templates#controllers"},"Templates - Controllers"),"."),(0,a.kt)("p",null,"To add a controller to the download list, fill out the template with all of the infomation and add it to the array ",(0,a.kt)("inlineCode",{parentName:"p"},"boards['Controllers']"),". The order of the controllers in this array should be alphabetical."),(0,a.kt)("p",null,"For categories, the convention is as follows."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"official")," - Official boards of the project"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"open")," - Open source devices"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"closed")," - Closed source devices"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"legacy")," - Devices that are not or are no longer supported by the project")))}m.isMDXComponent=!0}}]);