(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{245:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r(0),s=r(42),c=r.n(s),i=r(18),o=r(2),u=r.n(o),j=r(5),l=r(8),d=(r(122),r(114)),p=r(13),b={email:null,id:null,token:null,isAuthenticated:!1},h=Object(n.createContext)(b),m=r(12),O=r(39),x=r(61),f=r(26),v=r(20),g=r(43),y=r.n(g);y.a.interceptors.request.use((function(e){var t=localStorage.getItem("token");return e.headers["x-access-token"]=t,e}));var k={get:y.a.get,post:y.a.post,put:y.a.put,delete:y.a.delete},w=r(109),N="http://foody-njp.herokuapp.com/api";function z(e){return S.apply(this,arguments)}function S(){return(S=Object(j.a)(u.a.mark((function e(t){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.post(N+"/auth/user",t);case 2:return r=e.sent,a=r.data,localStorage.setItem("token",a),e.next=7,q();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e){return C.apply(this,arguments)}function C(){return(C=Object(j.a)(u.a.mark((function e(t){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.post(N+"/auth/restaurant",t);case 2:return r=e.sent,a=r.data,r.status,localStorage.setItem("token",a),e.next=8,q();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return(I=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("token");case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(){return L.apply(this,arguments)}function L(){return(L=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("token")){e.next=5;break}return e.abrupt("return",b);case 5:return e.abrupt("return",Object(v.a)(Object(v.a)({},Object(w.a)(t)),{},{isAuthenticated:!0}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(){var e=Object(n.useContext)(h),t=Object(l.a)(e,2),r=t[0],s=t[1];return Object(a.jsxs)(x.a,{className:"fixed-top",bg:"dark",variant:"dark",expand:"lg",children:[Object(a.jsx)(x.a.Brand,{href:"/",children:Object(a.jsx)(f.a,{style:{height:"60px"},className:"img-responsive",src:"/img/logo.png"})}),Object(a.jsx)(x.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(a.jsxs)(O.a,{children:["user"===r.type&&Object(a.jsx)(O.a.Link,{href:"/restaurants",children:"Naruci"}),r.isAuthenticated&&Object(a.jsx)(O.a.Link,{href:"/orders",children:"Narudzbe"}),"restaurant"===r.type&&Object(a.jsx)(O.a.Link,{href:"/meals",children:"Jela"})]}),Object(a.jsx)(O.a,{className:"ml-auto",children:r.isAuthenticated?Object(a.jsxs)("span",{className:"text-center",children:[Object(a.jsx)(O.a.Link,{href:"/profile",children:r.firstName?r.firstName+" "+r.lastName:r.name}),Object(a.jsx)(m.a,{onClick:function(){!function(){I.apply(this,arguments)}(),s(b)},children:"Odjava"})]}):Object(a.jsx)(m.a,{href:"/login",children:"Login"})})]})}var E=r(21),F=r(10),R=r(11),T=r(25),B=r(28);Object(R.d)({mixed:{required:"Polje ne smije biti prazno."},string:{email:"Polje mora sadrzavati vazecu e-mail adresu.",min:"Polje mora sadrzavati minimalno ${min} znakova.",max:"Polje mora sadrzavati maksimalno ${max} znakova.",matches:"Polje mora sadrzavati minimalno 1 broj."}});var D=R.b().shape({username:R.e().required().min(4).max(30),password:R.e().required().min(8)});function K(){var e,t,r,s,c=Object(n.useContext)(h),o=Object(l.a)(c,2),d=(o[0],o[1]),b=Object(p.g)(),O=Object(n.useState)(""),x=Object(l.a)(O,2),v=x[0],g=x[1],y=Object(n.useState)(""),k=Object(l.a)(y,2),w=k[0],N=k[1],S=Object(T.b)({resolver:Object(B.yupResolver)(D)}),C=S.register,I=S.handleSubmit,q=S.errors,L=Object(T.b)({resolver:Object(B.yupResolver)(D)}),A=L.register,R=L.handleSubmit,K=L.errors,_=function(){var e=Object(j.a)(u.a.mark((function e(t){var r,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.username,a=t.password,g(""),e.prev=2,e.next=5,z({username:r,password:a});case 5:n=e.sent,d(n),b.push("/restaurants"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),g(e.t0.response.data);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(j.a)(u.a.mark((function e(t){var r,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.username,a=t.password,N(""),e.prev=2,e.next=5,P({username:r,password:a});case 5:n=e.sent,d(n),b.push("/orders"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),N(e.t0.response.data);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsx)("a",{href:"/",children:Object(a.jsx)(f.a,{style:{height:"300px"},src:"img/logo.png"})}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-4",children:[Object(a.jsx)("h3",{children:"Korisnicka prijava"}),Object(a.jsxs)(E.a,{onSubmit:I(_),children:[Object(a.jsx)(F.a,{name:"username",placeholder:"Korisnicko ime",ref:C,autoFocus:!0}),Object(a.jsx)("p",{style:{color:"red"},children:null===(e=q.username)||void 0===e?void 0:e.message}),Object(a.jsx)(F.a,{type:"password",name:"password",ref:C,placeholder:"Lozinka"}),Object(a.jsx)("p",{style:{color:"red"},children:null===(t=q.password)||void 0===t?void 0:t.message}),Object(a.jsx)("p",{style:{color:"red"},children:v}),Object(a.jsxs)("div",{className:"d-flex",children:[Object(a.jsx)(m.a,{variant:"success",type:"submit",children:"Prijava"}),Object(a.jsx)(i.b,{className:"ml-auto",to:"/register_user",children:Object(a.jsx)(m.a,{children:"Registracija"})})]})]})]}),Object(a.jsxs)("div",{className:"offset-4 col-4",children:[Object(a.jsx)("h3",{children:"Restoran prijava"}),Object(a.jsxs)(E.a,{onSubmit:R(U),children:[Object(a.jsx)(F.a,{name:"username",placeholder:"Korisnicko ime",ref:A}),Object(a.jsx)("p",{style:{color:"red"},children:null===(r=K.username)||void 0===r?void 0:r.message}),Object(a.jsx)(F.a,{type:"password",name:"password",ref:A,placeholder:"Lozinka"}),Object(a.jsx)("p",{style:{color:"red"},children:null===(s=K.password)||void 0===s?void 0:s.message}),Object(a.jsx)("p",{style:{color:"red"},children:w}),Object(a.jsxs)("div",{className:"d-flex",children:[Object(a.jsx)(m.a,{variant:"success",type:"submit",children:"Prijava"}),Object(a.jsx)(i.b,{className:"ml-auto",to:"/register_restaurant",children:Object(a.jsx)(m.a,{children:"Registracija"})})]})]})]})]})]})}var _="http://foody-njp.herokuapp.com/api";function U(e){return $.apply(this,arguments)}function $(){return($=Object(j.a)(u.a.mark((function e(t){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.post(_+"/restaurants",t);case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(){return J.apply(this,arguments)}function J(){return(J=Object(j.a)(u.a.mark((function e(){var t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.get(_+"/restaurants");case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e){return V.apply(this,arguments)}function V(){return(V=Object(j.a)(u.a.mark((function e(t){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.get(_+"/restaurants/"+t);case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(){return(G=Object(j.a)(u.a.mark((function e(t){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.put(_+"/restaurants/"+t.id,t);case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),r=t[0],s=t[1],c=Object(n.useState)(""),i=Object(l.a)(c,2),o=i[0],d=i[1],b=Object(p.g)();return Object(n.useEffect)(Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,H();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)}))),[]),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:Object(a.jsx)(F.a,{value:o,onChange:function(e){var t=e.target;return d(t.value)},placeholder:"Pretraga"})}),Object(a.jsx)("div",{className:"row",children:r.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())})).map((function(e,t){return Object(a.jsx)("div",{className:"col-4 my-2 text-center align-middle",style:{cursor:"pointer"},onClick:function(){return b.push("/restaurant/"+e.id)},children:Object(a.jsx)("div",{style:{width:"1%",height:"200px"},className:"d-table-cell border rounded align-middle",children:e.name})},t)}))})]})}var Z=r(9),Q="http://foody-njp.herokuapp.com/api";function W(e){return X.apply(this,arguments)}function X(){return(X=Object(j.a)(u.a.mark((function e(t){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.get(Q+"/meals/"+t);case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ee(e){return te.apply(this,arguments)}function te(){return(te=Object(j.a)(u.a.mark((function e(t){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.post(Q+"/meals/"+t.restaurantId,t);case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function re(){return(re=Object(j.a)(u.a.mark((function e(t){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.delete(Q+"/meals/"+t);case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ae(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),r=t[0],s=t[1],c=Object(n.useState)([]),o=Object(l.a)(c,2),d=o[0],b=o[1],h=Object(n.useState)({}),O=Object(l.a)(h,2),x=O[0],f=O[1],v=Object(n.useState)(""),g=Object(l.a)(v,2),y=g[0],k=g[1],w=Object(p.h)().state,N=Object(p.i)();Object(n.useEffect)(Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w&&0!==w.length&&b(w),e.t0=s,e.next=4,W(N.restaurantId);case 4:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=f,e.next=9,M(N.restaurantId);case 9:e.t3=e.sent,(0,e.t2)(e.t3);case 11:case"end":return e.stop()}}),e)}))),[]);return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"row",style:{height:"300px"},children:[Object(a.jsxs)("div",{className:"col border rounded",children:[Object(a.jsx)("h2",{className:"mt-3",children:x.name}),Object(a.jsx)("h4",{children:x.location}),Object(a.jsx)("h5",{children:x.phone})]}),x.location&&Object(a.jsx)("div",{className:"col embed-responsive embed-responisve-16by9",children:Object(a.jsx)("iframe",{className:"embed-responsive-item",src:"https://www.google.com/maps/embed/v1/place?key=AIzaSyAs6Spn2fVVaFd9wvza8ZxdEESemGLyy2k&q="+x.location.replaceAll(" ","+")})})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col",children:[Object(a.jsx)("hr",{}),Object(a.jsx)("h2",{children:"Ponuda"}),Object(a.jsx)(F.a,{value:y,onChange:function(e){var t=e.target;return k(t.value)},placeholder:"Pretraga"}),r.filter((function(e){return e.name.toLowerCase().includes(y.toLowerCase())})).map((function(e,t){return Object(a.jsxs)("div",{className:"border border-dark rounded p-2 my-2",children:[Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:e.name}),Object(a.jsx)("br",{}),e.price+" kn"]}),Object(a.jsx)(m.a,{onClick:function(){return b([].concat(Object(Z.a)(d),[e]))},children:"Dodaj u kosaricu"})]},t)}))]}),0!==d.length&&Object(a.jsxs)("div",{className:"col-2",children:[Object(a.jsx)("h2",{children:"Kosarica"}),d.map((function(e,t){return Object(a.jsxs)("div",{className:"border rounded my-2 p-1",children:[Object(a.jsx)(m.a,{style:{lineHeight:"0",padding:"15px 9px"},variant:"danger",onClick:function(){!function(e){var t=Object(Z.a)(d);t=t.filter((function(t,r){return r!==e})),b(t)}(t)},children:"\u2715"}),Object(a.jsx)("span",{className:"ml-2",children:" "+e.name})]},t)})),Object(a.jsxs)("h3",{children:["Ukupno:"," ",d.reduce((function(e,t){return e+parseFloat(t.price)}),0).toFixed(2)," ","kn"]}),Object(a.jsx)(i.b,{to:{pathname:"/checkout",state:d,restaurantId:N.restaurantId},children:Object(a.jsx)(m.a,{children:"Naruci"})})]})]})]})}var ne="http://foody-njp.herokuapp.com/api";function se(e){return ce.apply(this,arguments)}function ce(){return(ce=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.post(ne+"/users",t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ie(e){return oe.apply(this,arguments)}function oe(){return(oe=Object(j.a)(u.a.mark((function e(t){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.get(ne+"/user_locations/"+t);case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ue(e){return je.apply(this,arguments)}function je(){return(je=Object(j.a)(u.a.mark((function e(t){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.get(ne+"/users/"+t);case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function le(){return(le=Object(j.a)(u.a.mark((function e(t){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.put(ne+"/users/"+t.id,t);case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function de(e,t){return pe.apply(this,arguments)}function pe(){return(pe=Object(j.a)(u.a.mark((function e(t,r){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.post(ne+"/user_locations/"+t,{name:r});case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function be(){return(be=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k.delete(ne+"/user_locations/"+t);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var he=r(30),me="http://foody-njp.herokuapp.com/api";function Oe(e){return xe.apply(this,arguments)}function xe(){return(xe=Object(j.a)(u.a.mark((function e(t){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.get(me+"/orders/user/"+t);case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function fe(){return(fe=Object(j.a)(u.a.mark((function e(t,r,a,n,s){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.post(me+"/orders",{meals:t,userId:r,restaurantId:a,userLocationId:n,price:s});case 2:c=e.sent,c.data;case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ve(){return(ve=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.delete(me+"/orders/"+t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ge(e){return ye.apply(this,arguments)}function ye(){return(ye=Object(j.a)(u.a.mark((function e(t){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.get(me+"/orders/restaurant/"+t);case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ke(){var e=Object(n.useContext)(h)[0],t=Object(p.h)().state,r=Object(p.h)().restaurantId,s=Object(n.useState)([]),c=Object(l.a)(s,2),o=c[0],d=c[1],b=Object(n.useState)(!1),O=Object(l.a)(b,2),x=O[0],f=O[1],v=Object(p.g)();Object(n.useEffect)(Object(j.a)(u.a.mark((function t(){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ie(e.id);case 2:r=t.sent,d(r);case 4:case"end":return t.stop()}}),t)}))),[]);return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Narudzba:"}),t.map((function(e,t){return Object(a.jsx)("div",{children:e.name},t)})),0!==t.length&&Object(a.jsxs)("h3",{children:["Total:"," ",t.reduce((function(e,t){return e+parseFloat(t.price)}),0).toFixed(2)," ","kn"]}),Object(a.jsx)("hr",{}),Object(a.jsx)("h5",{children:"Adresa dostave:"}),Object(a.jsxs)(E.a,{onSubmit:function(a){a.preventDefault();var n,s,c=(n=o,s=a.target.elements.userLocation.value,n.find((function(e){return s===e.name})).id),i=t.reduce((function(e,t){return e+parseFloat(t.price)}),0).toFixed(2);!function(e,t,r,a,n){fe.apply(this,arguments)}(t,e.id,r,c,i),setTimeout((function(){v.push("/orders")}),3e3),f(!0)},children:[Object(a.jsx)(F.a,{name:"userLocation",as:"select",custom:!0,disabled:0===o.length,children:o.map((function(e,t){return Object(a.jsx)("option",{children:e.name},t)}))}),Object(a.jsx)("p",{style:{color:"red"},children:0===o.length&&"Potrebno je dodati barem jednu adresu na profilu. (U gornje desnom kutu)"}),Object(a.jsx)(he.a,{label:"Plati gotovinom",type:"radio",id:"cash",name:"pay-method",defaultChecked:!0}),Object(a.jsx)(he.a,{label:"Plati karticom",type:"radio",id:"card",name:"pay-method",disabled:!0}),!x&&Object(a.jsxs)("div",{children:[Object(a.jsx)(m.a,{variant:"success",type:"submit",disabled:0===o.length,children:"Naruci"}),Object(a.jsx)(i.b,{to:{pathname:"/restaurant/"+r,state:t},children:Object(a.jsx)(m.a,{children:"Povratak"})})]})]}),x&&Object(a.jsx)("p",{children:"Slanje narudzbe... Bit cete uskoro preusmjereni."})]})}function we(){var e=Object(n.useContext)(h)[0],t=Object(n.useState)([]),r=Object(l.a)(t,2),s=r[0],c=r[1];Object(n.useEffect)(Object(j.a)(u.a.mark((function t(){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=[],"user"!==e.type){t.next=7;break}return t.next=4,Oe(e.id);case 4:r=t.sent,t.next=10;break;case 7:return t.next=9,ge(e.id);case 9:r=t.sent;case 10:c(r);case 11:case"end":return t.stop()}}),t)}))),[]);var i=function(e,t){var r=Object(Z.a)(s);!function(e){ve.apply(this,arguments)}(e.id),r=r.filter((function(t){return t.id!==e.id})),c(r)},o=function(e){var t=new Date(e);return"".concat(t.getHours(),":").concat(t.getMinutes()," ").concat(t.getDate(),".").concat(t.getUTCMonth()+1,".").concat(t.getFullYear(),".")};return Object(a.jsx)("div",{children:s.map((function(t,r){return Object(a.jsxs)("div",{className:"border border-dark rounded p-2 my-2",children:["user"===e.type?Object(a.jsx)("h4",{children:t.restaurant.name}):Object(a.jsx)("h4",{children:t.user.firstName+" "+t.user.lastName}),Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"Adresa dostave:"})," ",t.userLocation.name,Object(a.jsx)("br",{}),Object(a.jsx)("strong",{children:"Vrijeme narudzbe: "})," ",o(t.createdAt),Object(a.jsx)("br",{}),Object(a.jsx)("strong",{children:"Cijena:"})," ",t.price," kn"]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"Status:"})," ",t.status]}),Object(a.jsx)("ul",{style:{listStyleType:"none"},children:t.orderMeals.map((function(e,t){return Object(a.jsx)("li",{children:e.meal.name},t)}))}),Object(a.jsx)(m.a,{variant:"danger",onClick:function(){return i(t)},children:"Dostavljeno"===t.status?"Izbrisi narudzbu":"Otkazi narudzbu"})]},r)}))})}var Ne=r(115);function ze(e){var t=e.component,r=Object(Ne.a)(e,["component"]),s=Object(n.useContext)(h)[0];Object(p.h)();return Object(a.jsx)("div",{children:function(){if(!s.isAuthenticated)return Object(a.jsx)(p.a,{to:"/login"});if(r.type&&(s.type!==r.type||"/"===window.location.pathname)){if("user"===s.type)return Object(a.jsx)(p.a,{to:"/restaurants"});if("restaurant"===s.type)return Object(a.jsx)(p.a,{to:"/orders"})}return Object(a.jsx)(p.b,Object(v.a)(Object(v.a)({},r),{},{children:Object(a.jsx)(t,{})}))}()})}var Se=r(15),Pe=r(58),Ce=r(76);function Ie(){var e=Object(n.useContext)(h),t=Object(l.a)(e,2),r=t[0],s=(t[1],Object(n.useState)(!1)),c=Object(l.a)(s,2),i=c[0],o=c[1],d=Object(n.useState)({}),p=Object(l.a)(d,2),b=p[0],O=p[1],x=Object(n.useState)([]),f=Object(l.a)(x,2),g=f[0],y=f[1],k=Object(n.useState)(""),w=Object(l.a)(k,2),N=w[0],z=w[1];Object(n.useEffect)(Object(j.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue(r.id);case 2:return t=e.sent,e.next=5,ie(r.id);case 5:a=e.sent,O({firstName:t.firstName,lastName:t.lastName,phone:t.phone}),y(a);case 8:case"end":return e.stop()}}),e)}))),[]);var S=function(e){var t=e.target;return O(Object(v.a)(Object(v.a)({},b),{},Object(Se.a)({},t.name,t.value)))},P=function(){-1===Object.keys(b).findIndex((function(e){return""===b[e]&&"phone"!==e}))&&(o(!1),function(e){le.apply(this,arguments)}(Object(v.a)(Object(v.a)({},b),{},{id:r.id})))};return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Profil"}),i?Object(a.jsx)(m.a,{onClick:function(){return P()},children:"Spremi promjene"}):Object(a.jsx)(m.a,{onClick:function(){return o(!0)},children:"Promijeni"}),Object(a.jsx)(Pe.a,{borderless:!0,children:Object(a.jsxs)("tbody",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{children:[Object(a.jsx)("strong",{children:"Ime"}),Object(a.jsx)("br",{}),i?Object(a.jsx)(F.a,{name:"firstName",onChange:S,value:b.firstName}):b.firstName]}),Object(a.jsxs)("td",{children:[Object(a.jsx)("strong",{children:"Prezime"}),Object(a.jsx)("br",{}),i?Object(a.jsx)(F.a,{name:"lastName",onChange:S,value:b.lastName}):b.lastName]}),Object(a.jsxs)("td",{children:[Object(a.jsx)("strong",{children:"Broj"}),Object(a.jsx)("br",{}),i?Object(a.jsx)(F.a,{name:"phone",onChange:S,value:b.phone}):b.phone]})]}),Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{children:[Object(a.jsx)("strong",{children:"Korisnicko ime"}),Object(a.jsx)("br",{}),r.username]}),Object(a.jsxs)("td",{children:[Object(a.jsx)("strong",{children:"E-mail"}),Object(a.jsx)("br",{}),r.email]})]})]})}),Object(a.jsx)("h2",{children:"Adrese"}),Object(a.jsx)(E.a,{onSubmit:function(){var e=Object(j.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),0!==N.length){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,de(r.id,N);case 5:a=e.sent,y([].concat(Object(Z.a)(g),[a])),z("");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:Object(a.jsxs)(Ce.a,{children:[Object(a.jsx)(F.a,{onChange:function(e){var t=e.target;return z(t.value)},value:N}),Object(a.jsx)(Ce.a.Append,{children:Object(a.jsx)(m.a,{variant:"success",type:"submit",disabled:0===N.length,children:"Dodaj"})})]})}),Object(a.jsx)("div",{style:{lineHeight:"3"},children:g.map((function(e,t){return Object(a.jsxs)("div",{className:"border rounded my-2 p-1",children:[Object(a.jsx)(m.a,{style:{lineHeight:"0",padding:"15px 9px"},variant:"danger",onClick:function(){var e=g.filter((function(e){return e.id!==g[t].id}));y(e),function(e){be.apply(this,arguments)}(g[t].id)},children:"\u2715"}),Object(a.jsx)("span",{className:"ml-2",children:" "+e.name})]},t)}))})]})}function qe(){var e=Object(n.useContext)(h),t=Object(l.a)(e,2),r=t[0],s=(t[1],Object(n.useState)(!1)),c=Object(l.a)(s,2),i=c[0],o=c[1],d=Object(n.useState)({}),p=Object(l.a)(d,2),b=p[0],O=p[1];Object(n.useEffect)(Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(r.id);case 2:t=e.sent,O({name:t.name,location:t.location,phone:t.phone});case 4:case"end":return e.stop()}}),e)}))),[]);var x=function(e){var t=e.target;return O(Object(v.a)(Object(v.a)({},b),{},Object(Se.a)({},t.name,t.value)))},f=function(){-1===Object.keys(b).findIndex((function(e){return""===b[e]}))&&(o(!1),function(e){G.apply(this,arguments)}(Object(v.a)(Object(v.a)({},b),{},{id:r.id})))};return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Profil"}),i?Object(a.jsx)(m.a,{onClick:function(){return f()},children:"Spremi promjene"}):Object(a.jsx)(m.a,{onClick:function(){return o(!0)},children:"Promijeni"}),Object(a.jsx)(Pe.a,{borderless:!0,children:Object(a.jsxs)("tbody",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{children:[Object(a.jsx)("strong",{children:"Ime"}),Object(a.jsx)("br",{}),i?Object(a.jsx)(F.a,{name:"name",onChange:x,value:b.name}):b.name]}),Object(a.jsxs)("td",{children:[Object(a.jsx)("strong",{children:"Adresa"}),Object(a.jsx)("br",{}),i?Object(a.jsx)(F.a,{name:"location",onChange:x,value:b.location}):b.location]}),Object(a.jsxs)("td",{children:[Object(a.jsx)("strong",{children:"Broj"}),Object(a.jsx)("br",{}),i?Object(a.jsx)(F.a,{name:"phone",onChange:x,value:b.phone}):b.phone]})]}),Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{children:[Object(a.jsx)("strong",{children:"Username"}),Object(a.jsx)("br",{}),r.username]}),Object(a.jsxs)("td",{children:[Object(a.jsx)("strong",{children:"E-mail"}),Object(a.jsx)("br",{}),r.email]})]})]})})]})}var Le=r(48);Object(R.d)({mixed:{required:"Polje ne smije biti prazno.",notType:"Broj mora biti vazeci."},number:{max:"Polje smije sadrzavati maksimalno 6 znakova",positive:"Broj mora biti vazeci."}});var Ae=R.b().shape({name:R.e().required(),price:R.a().required().max(999999).positive()});function Ee(){var e,t,r=Object(n.useContext)(h)[0],s=Object(n.useState)([]),c=Object(l.a)(s,2),i=c[0],o=c[1],d=Object(T.b)({resolver:Object(B.yupResolver)(Ae)}),p=d.register,b=d.handleSubmit,O=d.errors,x=d.reset;Object(n.useEffect)(Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W(r.id);case 2:t=e.sent,o(t);case 4:case"end":return e.stop()}}),e)}))),[]);var f=function(){var e=Object(j.a)(u.a.mark((function e(t){var a,n,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.name,n=t.price,e.next=3,ee({name:a,price:parseFloat(n).toFixed(2),restaurantId:r.id});case 3:s=e.sent,o([].concat(Object(Z.a)(i),[s])),x();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{children:[Object(a.jsxs)(E.a,{onSubmit:b(f),children:[Object(a.jsx)(Le.a,{children:"Ime jela"}),Object(a.jsx)(F.a,{name:"name",ref:p}),Object(a.jsx)("p",{children:null===(e=O.name)||void 0===e?void 0:e.message}),Object(a.jsx)(Le.a,{children:"Cijena jela"}),Object(a.jsx)(F.a,{name:"price",ref:p}),Object(a.jsx)("p",{children:null===(t=O.price)||void 0===t?void 0:t.message}),Object(a.jsx)(m.a,{type:"submit",variant:"success",children:"Dodaj jelo"})]}),i.map((function(e,t){return Object(a.jsx)("div",{className:"border border-dark rounded p-2 my-2",children:Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:e.name}),Object(a.jsx)("br",{}),parseFloat(e.price).toFixed(2)+" kn",Object(a.jsx)(m.a,{className:"float-right",style:{lineHeight:"0",padding:"15px 9px"},variant:"danger",onClick:function(){!function(e){re.apply(this,arguments)}(e.id);var r=Object(Z.a)(i);r=r.filter((function(e,r){return t!==r})),o(r)},children:"\u2715"})]})},t)}))]})}var Fe=r(34);Object(R.d)({mixed:{required:"Polje ne smije biti prazno."},string:{email:"Polje mora sadrzavati vazecu e-mail adresu.",min:"Polje mora sadrzavati minimalno ${min} znakova.",max:"Polje mora sadrzavati maksimalno ${max} znakova.",matches:"Polje mora sadrzavati minimalno 1 broj."}});var Re=R.b().shape({username:R.e().required().min(4).max(30),email:R.e().required().email(),password:R.e().required().min(8).matches(/[0-9]+/g),repeatPassword:R.e().oneOf([R.c("password")],"Lozinke se moraju podudarati"),firstName:R.e().required(),lastName:R.e().required()});function Te(){var e,t,r,s,c,i,o=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(null),e.prev=1,e.next=4,se(t);case 4:y({message:"Uspjesna registracija. Preusmjeravanje na prijavu...",style:"lime"}),setTimeout((function(){return k.push("/login")}),2500),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),y({message:e.t0.response.data,style:"red"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),d=Object(T.b)({resolver:Object(B.yupResolver)(Re)}),b=d.register,h=d.handleSubmit,O=d.errors,x=Object(n.useState)(null),v=Object(l.a)(x,2),g=v[0],y=v[1],k=Object(p.g)();return Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsx)("a",{href:"/",children:Object(a.jsx)(f.a,{style:{height:"300px"},src:"img/logo.png"})}),Object(a.jsxs)(E.a,{className:"offset-3 col-6",onSubmit:h(o),children:[Object(a.jsx)(F.a,{name:"username",ref:b,placeholder:"Korisnicko ime"}),Object(a.jsx)("p",{style:{color:"red"},children:null===(e=O.username)||void 0===e?void 0:e.message}),Object(a.jsx)(F.a,{name:"email",ref:b,placeholder:"E-mail"}),Object(a.jsx)("p",{style:{color:"red"},children:null===(t=O.email)||void 0===t?void 0:t.message}),Object(a.jsx)(F.a,{type:"password",name:"password",ref:b,placeholder:"Lozinka"}),Object(a.jsx)("p",{style:{color:"red"},children:null===(r=O.password)||void 0===r?void 0:r.message}),Object(a.jsx)(F.a,{type:"password",name:"repeatPassword",ref:b,placeholder:"Ponovi lozinku"}),Object(a.jsx)("p",{style:{color:"red"},children:null===(s=O.repeatPassword)||void 0===s?void 0:s.message}),Object(a.jsxs)(E.a.Row,{children:[Object(a.jsxs)(Fe.a,{children:[Object(a.jsx)(F.a,{name:"firstName",ref:b,placeholder:"Ime"}),Object(a.jsx)("p",{style:{color:"red"},children:null===(c=O.firstName)||void 0===c?void 0:c.message})]}),Object(a.jsxs)(Fe.a,{children:[Object(a.jsx)(F.a,{name:"lastName",ref:b,placeholder:"Prezime"}),Object(a.jsx)("p",{style:{color:"red"},children:null===(i=O.lastName)||void 0===i?void 0:i.message})]})]}),Object(a.jsx)(m.a,{variant:"success",type:"submit",children:"Registracija"}),g&&Object(a.jsx)("div",{style:{color:g.style},children:g.message})]})]})}Object(R.d)({mixed:{required:"Polje ne smije biti prazno."},string:{email:"Polje mora sadrzavati vazecu e-mail adresu.",min:"Polje mora sadrzavati minimalno ${min} znakova.",max:"Polje mora sadrzavati maksimalno ${max} znakova.",matches:"Polje mora sadrzavati minimalno 1 broj."}});var Be=R.b().shape({username:R.e().required().min(4).max(30),email:R.e().required().email(),password:R.e().required().min(8).matches(/[0-9]+/g),repeatPassword:R.e().oneOf([R.c("password")],"Lozinke se moraju podudarati"),name:R.e().required(),location:R.e().required(),phone:R.e().required()});function De(){var e,t,r,s,c,i,o,d=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(null),e.prev=1,e.next=4,U(t);case 4:k({message:"Uspjesna registracija. Preusmjeravanje na prijavu...",style:"lime"}),setTimeout((function(){return w.push("/login")}),2500),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),k({message:e.t0.response.data,style:"red"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),b=Object(T.b)({resolver:Object(B.yupResolver)(Be)}),h=b.register,O=b.handleSubmit,x=b.errors,v=Object(n.useState)(null),g=Object(l.a)(v,2),y=g[0],k=g[1],w=Object(p.g)();return Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsx)("a",{href:"/",children:Object(a.jsx)(f.a,{style:{height:"300px"},src:"img/logo.png"})}),Object(a.jsxs)(E.a,{className:"offset-3 col-6",onSubmit:O(d),children:[Object(a.jsx)(F.a,{name:"username",ref:h,placeholder:"Korisnicko ime"}),Object(a.jsx)("p",{style:{color:"red"},children:null===(e=x.username)||void 0===e?void 0:e.message}),Object(a.jsx)(F.a,{name:"email",ref:h,placeholder:"E-mail"}),Object(a.jsx)("p",{style:{color:"red"},children:null===(t=x.email)||void 0===t?void 0:t.message}),Object(a.jsx)(F.a,{type:"password",name:"password",ref:h,placeholder:"Lozinka"}),Object(a.jsx)("p",{style:{color:"red"},children:null===(r=x.password)||void 0===r?void 0:r.message}),Object(a.jsx)(F.a,{type:"password",name:"repeatPassword",ref:h,placeholder:"Ponovi lozinku"}),Object(a.jsx)("p",{style:{color:"red"},children:null===(s=x.repeatPassword)||void 0===s?void 0:s.message}),Object(a.jsx)(F.a,{name:"name",ref:h,placeholder:"Ime restorana"}),Object(a.jsx)("p",{style:{color:"red"},children:null===(c=x.name)||void 0===c?void 0:c.message}),Object(a.jsxs)(E.a.Row,{children:[Object(a.jsxs)(Fe.a,{children:[Object(a.jsx)(F.a,{name:"location",ref:h,placeholder:"Adresa restorana"}),Object(a.jsx)("p",{style:{color:"red"},children:null===(i=x.location)||void 0===i?void 0:i.message})]}),Object(a.jsxs)(Fe.a,{children:[Object(a.jsx)(F.a,{name:"phone",ref:h,placeholder:"Broj restorana"}),Object(a.jsx)("p",{style:{color:"red"},children:null===(o=x.phone)||void 0===o?void 0:o.message})]})]}),Object(a.jsx)(m.a,{variant:"success",type:"submit",children:"Registracija"}),y&&Object(a.jsx)("div",{style:{color:y.style},children:y.message})]})]})}function Ke(){return Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsx)("a",{href:"/",children:Object(a.jsx)(f.a,{style:{height:"300px"},src:"img/logo.png"})}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{children:"Stranica nije pronadena."})]})}function _e(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),r=t[0],s=t[1];return Object(n.useEffect)(Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q();case 2:t=e.sent,s(t);case 4:case"end":return e.stop()}}),e)}))),[]),r?Object(a.jsxs)(h.Provider,{value:[r,s],children:[r.isAuthenticated&&Object(a.jsx)(A,{}),Object(a.jsx)(d.a,{style:{marginTop:"110px"},children:Object(a.jsxs)(p.d,{children:[Object(a.jsx)(ze,{type:"redirect",path:"/",exact:!0}),Object(a.jsx)(ze,{type:"user",path:"/restaurants",component:Y,exact:!0}),Object(a.jsx)(ze,{type:"user",path:"/restaurant/:restaurantId",component:ae,exact:!0}),Object(a.jsx)(ze,{type:"user",path:"/checkout",component:ke,exact:!0}),Object(a.jsx)(ze,{type:"restaurant",path:"/meals",component:Ee,exact:!0}),Object(a.jsx)(ze,{path:"/orders",component:we,exact:!0}),Object(a.jsx)(ze,{path:"/profile",component:"user"===r.type?Ie:qe,exact:!0}),Object(a.jsx)(p.b,{path:"/login",component:K,exact:!0}),Object(a.jsx)(p.b,{path:"/register_user",component:Te,exact:!0}),Object(a.jsx)(p.b,{path:"/register_restaurant",component:De,exact:!0}),Object(a.jsx)(p.b,{path:"*",component:Ke})]})})]}):Object(a.jsx)("div",{})}c.a.render(Object(a.jsx)(i.a,{children:Object(a.jsx)(_e,{})}),document.getElementById("root"))}},[[245,1,2]]]);
//# sourceMappingURL=main.927189a1.chunk.js.map