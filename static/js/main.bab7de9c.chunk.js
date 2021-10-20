(this["webpackJsonpcrypto-keychain"]=this["webpackJsonpcrypto-keychain"]||[]).push([[0],{54:function(e,t){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(14),r=a.n(s),i=(a(52),a(4)),l=a(89),o=a(90),j=a(0);function b(){var e=Object(c.useContext)(F).HomeComponent;return console.log("rendering: Home"),Object(j.jsxs)(l.a,{className:"my-5",children:[e,Object(j.jsxs)(o.a,{className:"mt-2 text-center",children:[Object(j.jsx)("h4",{children:" new features coming soon"}),Object(j.jsx)("h6",{children:Object(j.jsx)("small",{children:"~ checkout the password generator!"})})]})]})}var d=a(43),m=a(91),u=a(47),h=a(8),O=a(2),x=a(94),p={number:"0123456789",special:"!#$%&*+-/;<=>?@^_'|~\\",lowercase:"abcdefghijklmnopqrstuvwxyz",uppercase:"ABCDEFGHIJKLMNOPQRSTUVWXYZ"},f=function e(t){for(var a=t.values,c=t.length,n="",s=[],r=function(e){return Math.floor(Math.random()*e)},i=0;i<c;i++){var l=a[r(a.length)];n+=p[l][r(p[l].length)],-1===s.indexOf(l)&&s.push(l)}return s.length===a.length?n:e({values:a,length:c})},v={values:["number","special","lowercase","uppercase"],length:128},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;return e.values.length&&e.length&&f(e)},g=a(33),w="cryptoKC",N=function(e,t,a){e&&t&&localStorage.setItem("".concat(w,"-").concat(e),g.AES.encrypt(JSON.stringify(a),t).toString())};function k(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useContext)(L),r=s.keychainData,l=s.setKeychainData,b=s.updateKeychainComponent,p=Object(c.useState)({name:"",value:""}),f=Object(i.a)(p,2),v=f[0],k=f[1],C=function(e){var t=e.target,a=t.name,c=t.value;k(Object(O.a)(Object(O.a)({},v),{},Object(h.a)({},a,c)))};return Object(c.useEffect)((function(){if(!v.name||!v.value)return n(!1);a||n(!0)}),[v]),console.log("rendering addItemForm"),Object(j.jsx)(o.a,{className:"border shadow flex-column m-0 mb-3",children:Object(j.jsxs)(d.a,{className:"p-3",children:[Object(j.jsx)("h3",{className:"mb-1",children:"Add item"}),Object(j.jsxs)(x.a,{onSubmit:function e(t){if(t){t.preventDefault(),console.log(v);var a=r.name,c=prompt("keychain access password");if(null!==c){if(!c)return e();var n=function(e,t){if(!e)return console.log("no chain name selected");var a=localStorage.getItem("".concat(w,"-").concat(e));if(!a)return console.log("missing chain data, please load from backup");try{var c=g.AES.decrypt(a,t);return JSON.parse(c.toString(g.enc.Utf8))}catch(n){alert("unauthorized")}}(a,c);if(!n)return e();var s=[v].concat(Object(u.a)(n));N(r.name,c,s),l(Object(O.a)(Object(O.a)({},r),{},{items:s})),k({name:"",value:""}),b()}}},children:[Object(j.jsxs)(x.a.Group,{className:"mb-1",controlId:"keychainItemName",children:[Object(j.jsx)(x.a.Label,{className:"mb-0",children:"name"}),Object(j.jsx)(x.a.Control,{type:"text",name:"name",value:v.name,onChange:C})]}),Object(j.jsxs)(x.a.Group,{className:"mb-1",controlId:"keychainItemValue",children:[Object(j.jsx)(x.a.Label,{className:"mb-0",children:"value"}),Object(j.jsx)(x.a.Control,{className:"text-center",as:"textarea",rows:6,name:"value",size:"sm",value:v.value,style:{resize:"none"},onChange:C})]}),Object(j.jsx)(x.a.Group,{className:"d-flex justify-content-end",children:Object(j.jsx)(m.a,{className:"p-0 px-1",variant:"outline-warning text-dark",size:"sm",onClick:function(){k(Object(O.a)(Object(O.a)({},v),{},{value:y()}))},children:"suggest password?"})}),Object(j.jsx)("hr",{}),Object(j.jsx)(x.a.Group,{className:"d-flex justify-content-end pb-3",children:a?Object(j.jsx)(m.a,{type:"submit",variant:"outline-warning text-dark",children:"add item"}):Object(j.jsx)(m.a,{disabled:!0,variant:"outline-warning text-dark",children:"add item"})})]})]})})}var C=a(24);function S(e){var t=e.name,a=e.value,n=e.id,s=Object(c.useState)(!1),r=Object(i.a)(s,2),l=r[0],b=r[1],m=Object(c.useState)(!1),u=Object(i.a)(m,2),h=u[0],O=u[1],p=Object(c.useContext)(L).deleteKeychainItem,f=function(){l&&O(!1),b(!l)};return Object(j.jsxs)(o.a,{className:"border shadow-sm flex-column m-0 mb-3",children:[Object(j.jsxs)(d.a,{className:"d-flex justify-content-between align-items-center py-1",children:[Object(j.jsx)(C.d,{onClick:function(){return p(n)}}),Object(j.jsx)("p",{children:t}),l?Object(j.jsx)(C.c,{onClick:f}):Object(j.jsx)(C.b,{onClick:f})]}),Object(j.jsx)(d.a,{className:"text-center p-0",children:l&&Object(j.jsxs)(x.a,{children:[Object(j.jsx)(x.a.Group,{className:"mx-2 mb-3",controlId:"keychainItemValue",children:Object(j.jsx)(x.a.Control,{className:"text-center",as:"textarea",rows:6,name:"value",size:"sm",value:a,disabled:!0,style:{resize:"none"}})}),Object(j.jsx)(x.a.Group,{className:"d-flex justify-content-end m-0",children:Object(j.jsx)(C.a,{className:"m-2",onClick:function(){h||(!function(e){navigator.clipboard.writeText(e).then((function(){return console.log(e)}))}(a),O(!0))}})})]})})]})}function I(){var e=Object(c.useContext)(L),t=e.keychainData,a=e.KeychainComponent,n=e.updateKeychainComponent,s=e.displayForm,r=t.name,i=t.items;return console.log("rendering: DefaultLayout"),Object(j.jsx)(l.a,{children:Object(j.jsx)(o.a,{className:"justify-content-center",children:Object(j.jsxs)(d.a,{xs:11,md:6,className:"shadow border-orange p-3",children:[Object(j.jsx)(o.a,{children:Object(j.jsx)(d.a,{children:Object(j.jsxs)("h2",{children:["Keychain: ",r]})})}),Object(j.jsx)(o.a,{className:"justify-content-center my-3",children:Object(j.jsxs)(d.a,{children:[i.map((function(e,t){var a=e.name,c=e.value;return Object(j.jsx)(S,{id:t,name:a,value:c},t)})),Object(j.jsx)("hr",{}),a]})}),Object(j.jsx)(o.a,{className:"px-0",children:Object(j.jsx)(d.a,{className:"d-flex justify-content-end px-0",children:Object(j.jsx)(m.a,{className:"mb-3 mx-3",variant:"outline-warning text-dark",onClick:function(){s?n():n("addKeychainItemForm")},children:s?"cancel":"add item"})})})]})})})}var K=a(92);function P(){var e=Object(c.useState)(3),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)({min:8,max:128,value:68}),r=Object(i.a)(s,2),b=r[0],u=r[1],p=Object(c.useState)(""),f=Object(i.a)(p,2),v=f[0],g=f[1],w=Object(c.useState)([]),N=Object(i.a)(w,2),k=N[0],C=N[1],S=Object(c.useState)({number:{id:"number",type:"checkbox",label:"numbers",checked:!0},special:{id:"special",type:"checkbox",label:"special characters",checked:!0},lowercase:{id:"lowercase",type:"checkbox",label:"letters - lowercase",checked:!0},uppercase:{id:"uppercase",type:"checkbox",label:"letters - uppercase",checked:!0}}),I=Object(i.a)(S,2),P=I[0],G=I[1],D=function(){return Object(j.jsx)(m.a,{variant:"outline-info text-dark",className:"w-100 my-3",disabled:!0,children:"generate"})},H=function(){return Object(j.jsx)(m.a,{variant:"outline-info text-dark",className:"w-100 my-3",onClick:J,children:"generate"})},z=function(){return Object(j.jsxs)(m.a,{variant:"outline-info text-dark",className:"w-100 my-3",disabled:!0,children:[Object(j.jsx)(K.a,{className:"mx-1",as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),Object(j.jsx)(K.a,{className:"mx-1",as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),Object(j.jsx)(K.a,{className:"mx-1",as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"})]})},F=Object(c.useState)(D()),A=Object(i.a)(F,2),L=A[0],E=A[1],T=function(e){var t=e.target,a=t.id,c=t.checked;g(""),G(Object(O.a)(Object(O.a)({},P),{},Object(h.a)({},a,Object(O.a)(Object(O.a)({},P[a]),{},{checked:c}))))},J=function(){var e={values:k,length:b.value};E(z());var t=setInterval((function(){return g(y(e))}),100);setTimeout((function(){clearInterval(t),E(H())}),2e3)};return Object(c.useEffect)((function(){for(var e=[],t=0,a=Object.entries(P);t<a.length;t++){var c=Object(i.a)(a[t],2),n=(c[0],c[1]);n.checked&&e.push(n.id)}C(e)}),[P]),Object(c.useEffect)((function(){k.length?E(H()):E(D())}),[k]),console.log("rendering: DefaultLayout"),Object(j.jsx)(l.a,{className:"my-5",children:Object(j.jsx)(o.a,{className:"justify-content-center",children:Object(j.jsxs)(d.a,{xs:11,md:6,className:"shadow border-orange p-3",children:[Object(j.jsx)(o.a,{children:Object(j.jsxs)(d.a,{children:[Object(j.jsx)("h2",{children:"Password Generator"}),Object(j.jsxs)("ol",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("p",{children:"select characters"})}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{children:"select length"})}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{children:"click generate"})})]})]})}),Object(j.jsx)(o.a,{className:"border mx-1",children:Object(j.jsx)(d.a,{children:Object(j.jsxs)(x.a,{className:"mb-3",children:[Object(j.jsx)(x.a.Group,{className:"my-3",controlId:"exampleForm.ControlInput1",children:Array.from(Object.entries(P)).map((function(e){var t=e[1],a=t.id,c=t.type,n=t.label,s=t.checked;return Object(j.jsx)(x.a.Check,{className:"mb-1",type:c,id:a,label:n,checked:s,onChange:T},a)}))}),Object(j.jsxs)(x.a.Group,{children:[Object(j.jsxs)(x.a.Label,{children:["length: ",b.value]}),Object(j.jsx)(x.a.Range,{min:b.min,max:b.max,value:b.value,onChange:function(e){var t=e.target.value;g(""),u(Object(O.a)(Object(O.a)({},b),{},{value:t}));var a=Math.floor(t/18);n(a||1)}})]}),Object(j.jsx)(x.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:Object(j.jsx)(x.a.Control,{className:"text-center",as:"textarea",rows:a,size:"sm",value:v,style:{resize:"none"}})}),L]})})})]})})})}var G=Object(c.createContext)(),D=function(e){var t=e.children,a=Object(j.jsx)(b,{},"Home"),n=Object(c.useState)(a),s=Object(i.a)(n,2),r=s[0],l=s[1];return console.log("rendering: AppProvider"),Object(j.jsx)(G.Provider,{value:{AppComponent:r,updateAppComponent:function(e){setTimeout((function(){switch(e){case"Home":l(Object(j.jsx)(b,{},e));break;case"PasswordGenerator":l(Object(j.jsx)(P,{},e));break;case"Keychain":l(Object(j.jsx)(I,{},e));break;default:l(a)}}),100)}},children:t})};function H(){var e=Object(c.useContext)(F).updateHomeComponent;return Object(j.jsx)(o.a,{className:"justify-content-center",children:Object(j.jsxs)(d.a,{xs:11,md:6,className:"shadow border-orange p-3",children:[Object(j.jsx)(o.a,{children:Object(j.jsxs)(d.a,{children:[Object(j.jsx)("h1",{children:"Welcome!"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("p",{children:"improve your digital security"})}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{children:"create new passwords or access keys"})}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{children:"add existing passwords or keys"})}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{children:"keep them safe in an encrypted keychain"})})]})]})}),Object(j.jsx)(o.a,{children:Object(j.jsxs)(d.a,{className:"mx-2",children:[Object(j.jsx)(m.a,{variant:"outline-warning text-dark",className:"w-100 my-3",onClick:function(){return e("createChain")},children:"create new chain"}),Object(j.jsx)(m.a,{disabled:!0,variant:"outline-warning text-dark",className:"w-100 my-3",children:"access existing chain"}),Object(j.jsx)(m.a,{disabled:!0,variant:"outline-warning text-dark",className:"w-100 my-3",children:"load from backup"})]})})]})})}function z(){var e=Object(c.useContext)(G).updateAppComponent,t=Object(c.useContext)(L).setKeychainData,a=Object(c.useContext)(F).updateHomeComponent,n=Object(c.useState)({name:"",pwlength:"",pwmatch:""}),s=Object(i.a)(n,2),r=s[0],l=s[1],b=Object(c.useState)({name:"test-0",password:"password",confirmPassword:"password"}),u=Object(i.a)(b,2),p=u[0],f=u[1],v=Object(c.useState)(!1),y=Object(i.a)(v,2),g=y[0],w=y[1],k=function(e){var t=e.target,a=t.name,c=t.value;f(Object(O.a)(Object(O.a)({},p),{},Object(h.a)({},a,c)))};return Object(c.useEffect)((function(){var e=p.name,t=p.password,a=p.confirmPassword;if(t&&a){if(!e)return l({name:"please enter a name",pwlength:"",pwmatch:""}),void w(!1);if(t.length<8)return l(Object(O.a)(Object(O.a)({},r),{},{name:"",pwlength:"must be atleast 8 characters long",pwmatch:""})),void w(!1);if(t!==a)return l({name:"",pwlength:"",pwmatch:"passwords must match"}),void w(!1);l({name:"",pwlength:"",pwmatch:""}),w(!0)}}),[p]),console.log("rendering: CreateChain"),Object(j.jsx)(o.a,{className:"justify-content-center",children:Object(j.jsxs)(d.a,{xs:10,md:6,className:"border-orange shadow p-4",children:[Object(j.jsx)(o.a,{children:Object(j.jsxs)(d.a,{children:[Object(j.jsx)("h1",{children:"Create new chain"}),Object(j.jsxs)("ol",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("p",{children:"enter a name"})}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{children:"enter a password"})}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{children:"click create"})})]})]})}),Object(j.jsx)(o.a,{children:Object(j.jsx)(d.a,{className:"border px-0 mx-2",children:Object(j.jsxs)(x.a,{className:"mt-3 mx-3",children:[Object(j.jsxs)(x.a.Group,{className:"mb-3",controlId:"keychainName",children:[Object(j.jsx)(x.a.Label,{children:"keychain name: "}),Object(j.jsx)("p",{className:"error mb-0",children:r.name}),Object(j.jsx)(x.a.Control,{size:"sm",type:"input",name:"name",value:p.name,onChange:k})]}),Object(j.jsxs)(x.a.Group,{className:"mb-3",controlId:"keychainPassword",children:[Object(j.jsx)(x.a.Label,{children:"password: "}),Object(j.jsx)("p",{className:"error mb-0",children:r.pwlength}),Object(j.jsx)(x.a.Control,{size:"sm",type:"password",name:"password",value:p.password,onChange:k})]}),Object(j.jsxs)(x.a.Group,{className:"mb-3",controlId:"kychainConfirmPassword",children:[Object(j.jsx)(x.a.Label,{children:"confirm password: "}),Object(j.jsx)("p",{className:"error mb-0",children:r.pwmatch}),Object(j.jsx)(x.a.Control,{size:"sm",type:"password",name:"confirmPassword",value:p.confirmPassword,onChange:k})]}),Object(j.jsxs)(x.a.Group,{className:"d-flex justify-content-between",children:[Object(j.jsx)(m.a,{variant:"outline-dark",className:"my-3",onClick:function(){return a("DefaultLayout")},children:"back"}),g?Object(j.jsx)(m.a,{variant:"outline-warning text-dark",className:"my-3",onClick:function(){var a=p.name,c=p.password;t({name:a,items:[]}),N(a,c,[]),e("keychain")},children:"create"}):Object(j.jsx)(m.a,{disabled:!0,variant:"outline-warning text-dark",className:"my-3",children:"create"})]})]})})})]})})}var F=Object(c.createContext)(),A=function(e){var t=e.children,a=Object(c.useContext)(G).AppComponent,n=Object(c.useState)("DefaultLayout"),s=Object(i.a)(n,1)[0],r=Object(c.useState)(Object(j.jsx)(H,{},"Home-".concat(s))),l=Object(i.a)(r,2),o=l[0],b=l[1];Object(c.useEffect)((function(){"Home"===a.key&&d(s)}),[a,s]);var d=function(e){switch(e){case s:b(Object(j.jsx)(H,{},"Home-".concat(e)));break;case"createChain":b(Object(j.jsx)(z,{},e))}};return console.log("rendering: HomeProvider"),Object(j.jsx)(F.Provider,{value:{HomeComponent:o,updateHomeComponent:d},children:t})},L=Object(c.createContext)(),E=function(e){var t=e.children,a=Object(c.useState)(!1),n=Object(i.a)(a,2),s=n[0],r=n[1],l=Object(c.useState)(),o=Object(i.a)(l,2),b=o[0],d=o[1],m=Object(c.useState)({name:"",items:[]}),u=Object(i.a)(m,2),h=u[0],x=u[1];return console.log("rendering: KeychainProvider"),Object(j.jsx)(L.Provider,{value:{KeychainComponent:b,updateKeychainComponent:function(e){if("addKeychainItemForm"===e)d(Object(j.jsx)(k,{},e)),r(!0);else d(null),r(!1)},displayForm:s,setDisplayForm:r,clearKeychainData:function(){return x({name:"",items:[]})},deleteKeychainItem:function(e){var t=h.items.filter((function(t,a){return e!==a}));x(Object(O.a)(Object(O.a)({},h),{},{items:t}))},setKeychainData:x,keychainData:h},children:t})},T=a(95),J=a(93);function M(){var e=Object(c.useState)("Home"),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(),r=Object(i.a)(s,2),l=r[0],o=r[1],b=Object(c.useContext)(G).updateAppComponent,d=Object(c.useContext)(L).keychainData,m=function(e){n(e),console.log(e),b(e)};return Object(c.useEffect)((function(){var e=d.name;if(!e)return o();o(Object(j.jsx)(T.a,{eventKey:"Keychain",title:e})),m("Keychain")}),[d]),Object(j.jsxs)(J.a,{id:"controlled-tab-example",activeKey:a,onSelect:function(e){return m(e)},className:" justify-content-end",children:[Object(j.jsx)(T.a,{eventKey:"Home",title:"Home"}),Object(j.jsx)(T.a,{eventKey:"PasswordGenerator",title:"password gen"}),l]})}function B(){return Object(j.jsx)("nav",{className:"w-100 mb-5",children:Object(j.jsx)(l.a,{fluid:!0,children:Object(j.jsxs)(o.a,{className:"d-flex justify-content-between align-items-end ",children:[Object(j.jsx)(d.a,{sx:12,sm:4,children:Object(j.jsxs)("h1",{id:"title",className:"my-2 fs-6",children:["crypto ",Object(j.jsxs)("span",{className:"fs-1",children:[Object(j.jsx)("span",{className:"text-decoration-underline",children:"key"}),"chain"]})]})}),Object(j.jsx)(d.a,{sx:12,sm:8,children:Object(j.jsx)(M,{})})]})})})}function V(){return Object(j.jsxs)("h6",{id:"signature",children:["_samuel fox ",Object(j.jsx)("small",{children:"2021"})]})}a(83);var R=function(){var e=Object(c.useContext)(G).AppComponent;return console.log("rendering: App"),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(E,{children:[Object(j.jsx)(B,{}),Object(j.jsx)(A,{children:e}),Object(j.jsx)(V,{})]})})},U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,96)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};a(84),a(85);r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(D,{children:Object(j.jsx)(R,{})})}),document.getElementById("root")),U()}},[[86,1,2]]]);
//# sourceMappingURL=main.bab7de9c.chunk.js.map