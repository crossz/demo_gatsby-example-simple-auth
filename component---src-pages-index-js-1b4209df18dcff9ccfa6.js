"use strict";(self.webpackChunkgatsby_demo_simple_auth=self.webpackChunkgatsby_demo_simple_auth||[]).push([[678],{6159:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),r=n(9499),o=n(1597),l=n(277),i="status-module--status__text--nWF1F",s=function(){var e;if((0,l.jl)()){var t=(0,l.ts)(),n=t.name,s=t.email;e=a.createElement("p",{className:i},"Logged in as ",n," (",s,")!"," ",a.createElement("a",{href:"/",onClick:function(e){e.preventDefault(),(0,l.kS)((function(){return(0,r.navigate)("/app/login")}))}},"log out"))}else e=a.createElement("p",{className:i},"To get the full app experience, you’ll need to"," ",a.createElement(o.rU,{to:"/app/login"},"log in"),".");return a.createElement("div",{className:"status-module--status--4A7TW"},e)}},6558:function(e,t,n){n.r(t);var a=n(7294),r=n(1597),o=n(5162),l=n(7062),i=n(6159);t.default=function(){return a.createElement(o.Z,null,a.createElement(i.Z,null),a.createElement(l.Z,{title:"Simple Authentication Example"},a.createElement("p",null,"This is a simple example of creating dynamic apps with Gatsby that require user authentication. It uses concepts from the"," ",a.createElement("a",{href:"https://www.gatsbyjs.com/docs/client-only-routes-and-user-authentication/"},"client-only routes section")," ","of the “Building Apps with Gatsby” documentation."),a.createElement("p",null,"For the full experience, go to"," ",a.createElement(r.rU,{to:"/app/profile"},"your profile"),".")))}},277:function(e,t,n){n.d(t,{jc:function(){return l},jl:function(){return i},kS:function(){return u},ts:function(){return s}});var a="undefined"!=typeof window,r=function(){return window.localStorage.gatsbyUser?JSON.parse(window.localStorage.gatsbyUser):{}},o=function(e){return window.localStorage.gatsbyUser=JSON.stringify(e)},l=function(e){var t=e.username,n=e.password;return!!a&&("gatsby"===t&&"demo"===n&&(console.log("Credentials match! Setting the active user."),o({name:"Jim",legalName:"James K. User",email:"jim@example.org"})))},i=function(){return!!a&&!!r().email},s=function(){return a&&r()},u=function(e){a&&(console.log("Ensuring the `gatsbyUser` property exists."),o({}),e())}}}]);
//# sourceMappingURL=component---src-pages-index-js-1b4209df18dcff9ccfa6.js.map