"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6847],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7131:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=n(1147),i=n(5777);const l={title:"PS Passthrough",tags:["PS4","PS5"],pagination_next:null,pagination_prev:null},s="PS Passthrough",p={unversionedId:"add-ons/ps-passthrough",id:"add-ons/ps-passthrough",title:"PS Passthrough",description:"Purpose: Enabling this add-on will allow you to use a licensed 3rd party device to authenticate off of.",source:"@site/docs/add-ons/ps-passthrough.mdx",sourceDirName:"add-ons",slug:"/add-ons/ps-passthrough",permalink:"/add-ons/ps-passthrough",draft:!1,tags:[{label:"PS4",permalink:"/tags/ps-4"},{label:"PS5",permalink:"/tags/ps-5"}],version:"current",frontMatter:{title:"PS Passthrough",tags:["PS4","PS5"],pagination_next:null,pagination_prev:null},sidebar:"webConfigSidebar"},u={},d=[{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Example Wiring Diagram",id:"example-wiring-diagram",level:3},{value:"Note",id:"note",level:2}],c={toc:d},m="wrapper";function h(e){let{components:t,...l}=e;return(0,r.kt)(m,(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ps-passthrough"},"PS Passthrough"),(0,r.kt)("p",null,"Purpose: Enabling this add-on will allow you to use a licensed 3rd party device to authenticate off of."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"GP2040-CE Configurator - PS Passthrough",src:n(2738).Z,width:"876",height:"246"})),(0,r.kt)(o.ZP,{mdxType:"PinOption"}),(0,r.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,r.kt)("p",null," This add-on requires that you have something like the ",(0,r.kt)("img",{parentName:"p",src:"https://github.com/OpenStickCommunity/Hardware/tree/main/USB%20Passthrough%20Board",alt:"USB Passthrough Board"})," or a board with a USB passthrough port on it already.  "),(0,r.kt)("h3",{id:"example-wiring-diagram"},"Example Wiring Diagram"),(0,r.kt)(i.ZP,{mdxType:"ExampleWiringDiagram"}),(0,r.kt)("h2",{id:"note"},"Note"),(0,r.kt)("p",null," If you have passthrough enabled you can turn off the above ",(0,r.kt)("inlineCode",{parentName:"p"},"PS4 Mode")," add-on as the two will not work together.  Please also ensure that under the ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings")," section you have chosen PS4 mode and picked if you want the GP2040-CE unit to function as a controller or as a fightstick."))}h.isMDXComponent=!0},5777:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={toc:[]},i="wrapper";function l(e){let{components:t,...l}=e;return(0,r.kt)(i,(0,a.Z)({},o,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"USB Host Wiring Diagram",src:n(8235).Z,width:"854",height:"540"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"VCC")," - Connects to 5V power (Example: VBUS on the Raspberry Pi Pico)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"D+")," - Connects to the ",(0,r.kt)("inlineCode",{parentName:"li"},"D+")," GPIO Pin above, set in the Web Configurator. (Example: GPIO0 on the Raspberry Pi Pico)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"D-")," - Connects to the ",(0,r.kt)("inlineCode",{parentName:"li"},"D-")," GPIO Pin above, automatically set based on D+. (Example: GPIO1 on the Raspberry Pi Pico)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GND")," - Connects to a ground pin, any ",(0,r.kt)("inlineCode",{parentName:"li"},"GND")," pin will work. (Example: GND on the Raspberry Pi Pico)")))}l.isMDXComponent=!0},1147:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={toc:[]},i="wrapper";function l(e){let{components:t,...n}=e;return(0,r.kt)(i,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"D+")," - The GPIO Pin used to carry Data Plus between the USB Host Port and RP2040"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"D-")," - The GPIO Pin used to carry Data Minus between the USB Host Port and RP2040. This cannot be set and will be automatically determined from ",(0,r.kt)("inlineCode",{parentName:"li"},"D+"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"5V Power (optional)")," - The GPIO Pin used to enable 5V power to the host port on the board. This is only applicable to a small number of boards (e.g. Adafruit RP2040 Feather USB Host) and most boards do not require this to be set.")))}l.isMDXComponent=!0},8235:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gpc-add-ons-keyboard-host-configuration-wiring-diagram-d6c0cbd3372cb8da21be5486e505fdbd.png"},2738:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gpc-add-ons-ps-passthrough-31afc039be6583212d2dfbb78d2d587f.png"}}]);