"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4095],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),u=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,h=s["".concat(p,".").concat(m)]||s[m]||d[m]||a;return n?o.createElement(h,l(l({ref:t},c),{},{components:n})):o.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1250:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const a={title:"Documentation Preview",pagination_next:null,pagination_prev:null},l="Documentation Preview",i={unversionedId:"development/documentation-preview",id:"development/documentation-preview",title:"Documentation Preview",description:"While writing and developing the documentation, you will want to build locally so you can see changes without making updates to the main repository. However, when you are ready to test for a pull request, compile for production as this will build the files that would be used for a live site and will reveal issues that may not be present when building locally.",source:"@site/docs/development/documentation-preview.mdx",sourceDirName:"development",slug:"/development/documentation-preview",permalink:"/development/documentation-preview",draft:!1,tags:[],version:"current",frontMatter:{title:"Documentation Preview",pagination_next:null,pagination_prev:null},sidebar:"contributeSidebar"},p={},u=[{value:"Clear Local Build",id:"clear-local-build",level:2},{value:"Build Locally",id:"build-locally",level:2},{value:"Production Preview",id:"production-preview",level:2}],c={toc:u},s="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"documentation-preview"},"Documentation Preview"),(0,r.kt)("p",null,"While writing and developing the documentation, you will want to build locally so you can see changes without making updates to the main repository. However, when you are ready to test for a pull request, compile for production as this will build the files that would be used for a live site and will reveal issues that may not be present when building locally."),(0,r.kt)("h2",{id:"clear-local-build"},"Clear Local Build"),(0,r.kt)("p",null,"This process will clear generated assets, caches, build artifacts from your docs folder. It's recommended to do so anytime there are issues with the Docusaurus site when building locally or compiling for production."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open a terminal in the root of the GP2040-CE project")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following commands"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd docs/\nnpm run docusaurus clear\n")))),(0,r.kt)("h2",{id:"build-locally"},"Build Locally"),(0,r.kt)("p",null,"This will build and serve your site locally with ",(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/dev-server/"},"Webpack Dev Server"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Changes made to documents while the dev server is running will update the live site on save.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open a terminal in the root of the GP2040-CE project")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following commands"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd docs/\nnpm install \nnpm start\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the default web browser, ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:port")," should automatically open and allow you to preview the site."))),(0,r.kt)("h2",{id:"production-preview"},"Production Preview"),(0,r.kt)("p",null,"This will compile your site for production, creating a build folder that would be used as a static site."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Changes made to documents while the dev server is running will ",(0,r.kt)("strong",{parentName:"p"},"not")," update the live site on save.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open a terminal in the root of the GP2040-CE project")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following commands"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd docs/\nnpm install\nnpm run build\nnpm run serve\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the default web browser, ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:port")," should automatically open and allow you to preview the site."))))}d.isMDXComponent=!0}}]);