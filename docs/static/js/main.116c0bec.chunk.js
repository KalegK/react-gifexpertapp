(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),c=n(7),i=n.n(c),s=n(2),u=n(9),o=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(s.a)(n,2),i=c[0],o=c[1];return Object(r.jsx)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(u.a)(e))})),o(""))},children:Object(r.jsx)("input",{type:"text",value:i,placeholder:"Agregue su anime",onChange:function(e){o(e.target.value)}})})},j=n(10),d=n(6),l=n.n(d),p=n(8),b=function(){var e=Object(p.a)(l.a.mark((function e(t){var n,r,a,c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=KEZh9NDvVRHY7GAOMdvKtWPvLDmF9RAd"),e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:return a=e.sent,c=a.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=e.id,n=e.title,a=e.url;return console.log({id:t,title:n,url:a}),Object(r.jsxs)("div",{className:"card animate__animated animate__fadeInUp animate__faster",children:[Object(r.jsx)("img",{src:a,alt:n}),Object(r.jsx)("p",{children:n})]})},O=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){b(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),c=n.data,i=n.loading;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{children:t}),i&&Object(r.jsx)("p",{children:"Loading.."}),Object(r.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(r.jsx)(f,Object(j.a)({},e),e.id)}))})]})},h=function(){var e=Object(a.useState)(["Evangelion"]),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"GifExpertApp"}),Object(r.jsx)(o,{setCategories:c}),Object(r.jsx)("hr",{}),Object(r.jsx)("ol",{children:n.map((function(e){return Object(r.jsx)(O,{category:e},e)}))})]})};n(17);i.a.render(Object(r.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.116c0bec.chunk.js.map