(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{1120:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),r=a(58),s=a.n(r),i=(a(555),a(556),a(14)),l=a.n(i),o=a(28),j=a(34),d=a.n(j),b="GET_PROFILE",u="GET_VERSION",h=function(e){return{type:b,payload:{profile:e}}},p=a(44),m=a(3),O=function(e){var t=Object(p.b)(),a=Object(p.c)((function(e){return e.authReducer.version}));return n.a.useEffect((function(){t(function(){var e=Object(o.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://api.codingthailand.com/api/version");case 2:a=e.sent,t({type:u,payload:{version:a.data.data.version}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("footer",{className:"container",children:Object(m.jsxs)("p",{children:["\xa9 Patty Racy Company ",(new Date).getFullYear()," version : ",a]})})})},x=a(1142),v=a(1147),f=a(1140),g=a(509),y=a(42),w=a(40),C=function(){var e=Object(y.g)(),t=Object(p.c)((function(e){return e.authReducer.profile})),a=Object(p.b)(),c=Object(p.c)((function(e){return e.cartReducer.total}));n.a.useEffect((function(){!function(){var e=JSON.parse(localStorage.getItem("profile"));e&&a(h(e))}()}),[]);return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(x.a,{bg:"warning",expand:"lg",children:[Object(m.jsx)(x.a,{children:Object(m.jsxs)(w.c,{className:"navbar-brand",to:"/",exact:!0,children:[Object(m.jsx)("img",{alt:"WebTestLogo",src:"/logo192.png",width:"30",height:"30",className:"d-inline-block align-top"})," ","Web Test"]})}),Object(m.jsx)(x.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(m.jsxs)(x.a.Collapse,{id:"basic-navbar-nav",children:[Object(m.jsxs)(v.a,{className:"mr-auto",children:[Object(m.jsx)(w.c,{className:"nav-link",to:"/",activeClassName:"active",exact:!0,children:"Home"}),Object(m.jsx)(w.c,{className:"nav-link",to:"/product",activeClassName:"active",children:"Products"}),Object(m.jsx)(w.c,{className:"nav-link",to:"/about",activeClassName:"active",children:"About"}),Object(m.jsxs)(w.c,{className:"nav-link",to:"/cart",activeClassName:"active",children:["Shopping Cart ",c&&c," items"]}),Object(m.jsxs)(f.a,{title:"Workshop (Pagination + CRUD)",id:"basic-nav-dropdown",children:[Object(m.jsx)(f.a.Item,{onClick:function(){e.replace("/hospital")},children:"Hospital Detail (Pagination)"}),Object(m.jsx)(f.a.Divider,{}),Object(m.jsx)(f.a.Item,{onClick:function(){e.replace("/category")},children:"News Category (CRUD)"})]}),Object(m.jsx)(w.c,{className:"nav-link",to:"/upload",activeClassName:"active",children:"Upload"}),Object(m.jsx)(w.c,{className:"nav-link",to:"/member",activeClassName:"active",children:"Member"}),Object(m.jsx)(w.c,{className:"nav-link",to:"/chart",activeClassName:"active",children:"Chart Report"})]}),t?Object(m.jsxs)("span",{className:"navbar-text",children:["Welcome : ",t.name,Object(m.jsx)(g.a,{className:"ml-2",variant:"outline-danger",onClick:function(){localStorage.removeItem("token"),localStorage.removeItem("profile"),e.replace("/"),a(h(null))},children:"Log Out"})]}):Object(m.jsxs)(v.a,{children:[Object(m.jsx)(w.c,{className:"nav-link",to:"/register",activeClassName:"active",children:"Register"}),Object(m.jsx)(w.c,{className:"nav-link",to:"/login",activeClassName:"active",children:"Log In"})]})]})]})})},N=a(186),k=a(1148),S=a(1128),T=function(){var e=Object(k.a)("getData",(function(){var e=new AbortController,t=e.signal,a=fetch("https://api.codingthailand.com/api/news?page=1&per_page=3",{method:"get",signal:t}).then((function(e){return e.json()}));return a.cancel=function(){return e.abort()},a})),t=e.isLoading,a=e.error,c=e.data,n=e.isFetching;return!0===t?Object(m.jsx)("div",{className:"text-center mt-5",children:Object(m.jsx)(S.a,{animation:"border"})}):a?Object(m.jsxs)("div",{className:"text-center mt-5",children:[Object(m.jsx)("p",{children:"Have a problem from server,please try again."}),Object(m.jsx)("p",{children:JSON.stringify(a)})]}):Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("main",{role:"main",children:[Object(m.jsx)("div",{className:"jumbotron",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{className:"display-3",children:"Welcome"}),Object(m.jsxs)("p",{children:["This website develop by React language. ",Object(m.jsx)(N.b,{color:"brown",size:"2em"})]}),Object(m.jsx)("p",{children:Object(m.jsx)(w.b,{to:"/product",className:"btn btn-primary btn-lg",role:"button",children:"All Products \xbb"})})]})}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"mx-auto",children:n?"Updating...":null})}),Object(m.jsx)("div",{className:"row",children:c.data.map((function(e,t){return Object(m.jsxs)("div",{className:"col-md-4",children:[Object(m.jsx)("h2",{children:e.topic}),Object(m.jsx)("p",{children:e.detail}),Object(m.jsxs)("p",{children:["Cagetagory : ",e.name]})]},e.id)}))}),Object(m.jsx)("hr",{})]})," "]})})},I=a(19),P=function(){var e=n.a.useState(""),t=Object(I.a)(e,2),a=t[0],c=t[1],r=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://api.codingthailand.com/api/version");case 2:t=e.sent,c(t.data.data.version);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n.a.useEffect((function(){r()}),[]),Object(m.jsx)("div",{className:"jumbotron",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"col-md-12",children:[Object(m.jsx)("h2",{children:"About Us"}),Object(m.jsx)("p",{children:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."}),a&&Object(m.jsxs)("p",{children:["Backend API Version : ",a]})]})})})})},R=a(1129),F=a(1130),L=a(1131),D=a(1141),E=a(1146),A=a(511),q=a(21),_="ADD_TO_CART",B="CLEAR_ALL_CART",H=function(){var e=n.a.useState([]),t=Object(I.a)(e,2),a=t[0],c=t[1],r=n.a.useState(!1),s=Object(I.a)(r,2),i=s[0],j=s[1],b=n.a.useState(null),u=Object(I.a)(b,2),h=u[0],O=u[1],x=n.a.useRef(null),v=Object(p.b)(),f=Object(p.c)((function(e){return e.cartReducer.cartlist})),g=Object(p.c)((function(e){return e.cartReducer.total})),y=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,d.a.get("https://api.codingthailand.com/api/course",{cancelToken:x.current.token});case 4:t=e.sent,c(t.data.data),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),O(e.t0);case 12:return e.prev=12,j(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})));return function(){return e.apply(this,arguments)}}();if(n.a.useEffect((function(){return x.current=d.a.CancelToken.source(),y(),function(){x.current.cancel()}}),[]),!0===i)return Object(m.jsx)("div",{className:"text-center mt-5",children:Object(m.jsx)(S.a,{animation:"border"})});if(h)return Object(m.jsxs)("div",{className:"text-center mt-5",children:[Object(m.jsx)("p",{children:"Have a problem from server,please try again."}),Object(m.jsx)("p",{children:h.response.data.message})]});var C=function(e){var t={id:e.id,name:e.title,price:e.view,qty:1};v(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=!1;if(t.length>0){var c,n=Object(q.a)(t);try{for(n.s();!(c=n.n()).done;){var r=c.value;r.id===e.id&&(r.qty++,a=!0)}}catch(i){n.e(i)}finally{n.f()}}a||t.push(e);var s=t.reduce((function(e,t){return e+t.qty}),0);return{type:_,payload:{cartlist:t,total:s}}}(t,f))};return Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row mt-5",children:Object(m.jsxs)("div",{className:"col-md-12",children:[Object(m.jsx)("h2",{children:"Products"}),g>0&&Object(m.jsxs)("h4",{children:["You chose a products for ",g]}),Object(m.jsxs)(R.a,{striped:!0,bordered:!0,hover:!0,children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"ID"}),Object(m.jsx)("th",{children:"Course name"}),Object(m.jsx)("th",{children:"Course detail"}),Object(m.jsx)("th",{children:"Date create"}),Object(m.jsx)("th",{children:"Views"}),Object(m.jsx)("th",{children:"Picture"}),Object(m.jsx)("th",{children:"Action"})]})}),Object(m.jsx)("tbody",{children:a.map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.id}),Object(m.jsx)("td",{children:e.title}),Object(m.jsx)("td",{children:e.detail}),Object(m.jsx)("td",{children:Object(D.a)(new Date(e.date),"dd/MMM/yyyy",{locale:E.a})}),Object(m.jsx)("td",{children:Object(m.jsx)(F.a,{variant:"secondary",children:e.view})}),Object(m.jsx)("td",{children:Object(m.jsx)(L.a,{src:e.picture,rounded:!0,alt:e.title,width:100})}),Object(m.jsxs)("td",{children:[Object(m.jsx)(w.b,{to:"/detail/".concat(e.id,"/title/").concat(e.title),children:Object(m.jsx)(A.a,{})}),Object(m.jsx)("button",{className:"btn btn-outline-success ml-2",onClick:function(){return C(e)},children:"Pick product"})]})]},e.id)}))})]})]})})})},G=a(1132),z=a(1149),J=function(){var e=Object(y.h)(),t=e.id,a=e.title,c=Object(y.g)(),r=n.a.useState([]),s=Object(I.a)(r,2),i=s[0],j=s[1],b=n.a.useState(!1),u=Object(I.a)(b,2),h=u[0],p=u[1],O=n.a.useState(null),x=Object(I.a)(O,2),v=x[0],f=x[1],w=n.a.useRef(null),C=function(){var e=Object(o.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(!0),e.next=4,d.a.get("https://api.codingthailand.com/api/course/"+t,{cancelToken:w.current.token});case 4:a=e.sent,j(a.data.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),f(e.t0);case 11:return e.prev=11,p(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(t){return e.apply(this,arguments)}}();return n.a.useEffect((function(){return w.current=d.a.CancelToken.source(),C(t),function(){w.current.cancel()}}),[t]),!0===h?Object(m.jsx)("div",{className:"text-center mt-5",children:Object(m.jsx)(S.a,{animation:"border"})}):v?Object(m.jsxs)("div",{className:"text-center mt-5",children:[Object(m.jsx)("p",{children:"Have a problem from server,please try again."}),Object(m.jsx)("p",{children:v.response.data.message})]}):Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row mt-5",children:Object(m.jsxs)("div",{className:"col-md-12",children:[Object(m.jsx)(g.a,{variant:"secondary",onClick:function(){c.goBack()},children:"Back"}),Object(m.jsxs)("h2",{children:[a," - ",t]}),Object(m.jsx)("div",{className:"row mt-4",children:i.length>0?Object(m.jsx)(G.a,{children:i.map((function(e,t){return Object(m.jsx)("div",{className:"col-md-4",children:Object(m.jsx)(z.a,{className:"mb-4 shadow-sm",children:Object(m.jsxs)(z.a.Body,{children:[Object(m.jsx)(z.a.Title,{children:e.ch_title}),Object(m.jsx)(z.a.Text,{children:e.ch_dateadd})]})})},e.ch_id)}))}):Object(m.jsx)("div",{className:"mx-auto",children:"Not found data ..."})}),Object(m.jsx)("hr",{})]})})})},U=a(512),W=a.n(U),V=function(){var e=n.a.useState([]),t=Object(I.a)(e,2),a=t[0],c=t[1],r=n.a.useState(!1),s=Object(I.a)(r,2),i=s[0],j=s[1],b=n.a.useState(null),u=Object(I.a)(b,2),h=u[0],p=u[1],O=n.a.useRef(null),x=n.a.useState(1),v=Object(I.a)(x,2),f=v[0],g=v[1],y=n.a.useState(0),w=Object(I.a)(y,2),C=w[0],N=w[1],k=function(){var e=Object(o.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,d.a.get("https://api.codingthailand.com/api/hospital2?page=".concat(t,"&page_size=").concat(10),{cancelToken:O.current.token});case 4:a=e.sent,c(a.data.data),N(a.data.meta.pagination.total),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),p(e.t0);case 12:return e.prev=12,j(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(t){return e.apply(this,arguments)}}();if(n.a.useEffect((function(){return O.current=d.a.CancelToken.source(),k(f),function(){O.current.cancel()}}),[f]),!0===i)return Object(m.jsx)("div",{className:"text-center mt-5",children:Object(m.jsx)(S.a,{animation:"border"})});if(h)return Object(m.jsxs)("div",{className:"text-center mt-5",children:[Object(m.jsx)("p",{children:"Have a problem from server,please try again."}),Object(m.jsx)("p",{children:h.response.data.message})]});return Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row mt-5",children:Object(m.jsxs)("div",{className:"col-md-12",children:[Object(m.jsx)("h2",{children:"Hospital Lists"}),Object(m.jsxs)(R.a,{striped:!0,bordered:!0,hover:!0,size:"sm",className:"mt-4",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"ID"}),Object(m.jsx)("th",{children:"Code"}),Object(m.jsx)("th",{children:"Hospital Name"})]})}),Object(m.jsx)("tbody",{children:a.map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.id}),Object(m.jsx)("td",{children:e.code}),Object(m.jsx)("td",{children:e.h_name})]},e.id)}))})]}),Object(m.jsx)("br",{}),Object(m.jsx)(W.a,{activePage:f,itemsCountPerPage:10,totalItemsCount:C,pageRangeDisplayed:10,onChange:function(e){g(e)},itemClass:"page-item",linkClass:"page-link",prevPageText:"previous",nextPageText:"next"})]})})})},M=function(){var e=Object(p.c)((function(e){return e.cartReducer.cartlist})),t=Object(p.c)((function(e){return e.cartReducer.total})),a=Object(p.b)(),c=Object(y.g)();return Object(m.jsx)("div",{className:"container mt-4",children:Object(m.jsx)("div",{className:"row mt-5",children:Object(m.jsxs)("div",{className:"col-md-12",children:[Object(m.jsxs)("h2",{children:["Shopping Cart",t>0&&Object(m.jsx)("span",{children:Object(m.jsxs)("h4",{children:[" ( You chose a products for ",t," )"]})})]}),Object(m.jsxs)("div",{className:"row col-md-12",children:[Object(m.jsx)("button",{className:"btn btn-danger btn-sm mb-3 mr-auto",onClick:function(){a({type:B,payload:{cartlist:[],total:0}})},children:"Cencel all"}),Object(m.jsx)("button",{className:"btn btn-info btn-sm mb-3",onClick:function(){c.push("/pdf")},children:"Export PDF"})]}),Object(m.jsxs)(R.a,{striped:!0,bordered:!0,hover:!0,children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"No."}),Object(m.jsx)("th",{children:"Code"}),Object(m.jsx)("th",{children:"Course name"}),Object(m.jsx)("th",{children:"Total"}),Object(m.jsx)("th",{children:"Course price"}),Object(m.jsx)("th",{children:"Amount"})]})}),Object(m.jsx)("tbody",{children:e.map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:t+1}),Object(m.jsx)("td",{children:e.id}),Object(m.jsx)("td",{children:e.name}),Object(m.jsx)("td",{children:e.qty}),Object(m.jsx)("td",{children:e.price}),Object(m.jsx)("td",{children:e.price*e.qty})]},e.id)}))})]})]})})})},K=function(){var e=n.a.useState([]),t=Object(I.a)(e,2),a=t[0],c=t[1],r=n.a.useState(!1),s=Object(I.a)(r,2),i=s[0],j=s[1],b=n.a.useState(null),u=Object(I.a)(b,2),h=u[0],p=u[1],O=n.a.useRef(null),x=Object(y.g)(),v=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,d.a.get("https://api.codingthailand.com/api/category",{cancelToken:O.current.token});case 4:t=e.sent,c(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),p(e.t0);case 11:return e.prev=11,j(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();return n.a.useEffect((function(){return O.current=d.a.CancelToken.source(),v(),function(){O.current.cancel()}}),[]),!0===i?Object(m.jsx)("div",{className:"text-center mt-5",children:Object(m.jsx)(S.a,{animation:"border"})}):h?Object(m.jsxs)("div",{className:"text-center mt-5",children:[Object(m.jsx)("p",{children:"Have a problem from server,please try again."}),Object(m.jsx)("p",{children:h.response.data.message})]}):Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row mt-5",children:Object(m.jsxs)("div",{className:"col-md-12",children:[Object(m.jsx)(g.a,{className:"mt-3 mb-3",variant:"success",onClick:function(){return x.push("/category/create")},children:"Add Category"}),Object(m.jsx)("h2",{children:"Category Lists"}),Object(m.jsxs)(R.a,{striped:!0,bordered:!0,hover:!0,className:"mt-4",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"ID"}),Object(m.jsx)("th",{children:"Category Name"}),Object(m.jsx)("th",{children:"Actions"})]})}),Object(m.jsx)("tbody",{children:a.map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.id}),Object(m.jsx)("td",{children:e.name}),Object(m.jsxs)("td",{children:[Object(m.jsx)(g.a,{className:"ml-2",variant:"outline-info",size:"sm",onClick:function(){return x.push("/category/edit/"+e.id)},children:Object(m.jsx)(N.a,{})}),Object(m.jsx)(g.a,{className:"ml-2",variant:"outline-danger",size:"sm",onClick:Object(o.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!0!==window.confirm("Are you sure to delete "+e.name+" ?")){t.next=7;break}return t.next=4,d.a.delete("https://api.codingthailand.com/api/category/"+e.id);case 4:a=t.sent,alert(a.data.message),x.go(0);case 7:case"end":return t.stop()}}),t)}))),children:Object(m.jsx)(N.c,{})})]})]},e.id)}))})]}),Object(m.jsx)("br",{})]})})})},Y=a(29),Q=a(1133),X=a(1134),Z=a(516),$=a(1143),ee=a(59),te=a(105),ae=a(61),ce=ae.a().shape({newsCatename:ae.b().required("Name news category is required!")}),ne=function(){var e=Object(y.g)(),t=Object(ee.d)({resolver:Object(te.a)(ce)}),a=t.register,c=t.handleSubmit,n=t.formState.errors,r=function(){var t=Object(o.a)(l.a.mark((function t(a){var c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.codingthailand.com/api/category",t.next=3,d.a.post("https://api.codingthailand.com/api/category",{name:a.newsCatename});case 3:c=t.sent,alert(c.data.message),e.replace("/category");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(m.jsxs)(Q.a,{className:"mt-4",children:[Object(m.jsx)(X.a,{children:Object(m.jsx)(Z.a,{xs:12,md:6,children:Object(m.jsxs)($.a,{onSubmit:c(r),children:[Object(m.jsxs)($.a.Group,{controlId:"newsCatename",children:[Object(m.jsx)($.a.Label,{children:"News Category"}),Object(m.jsx)($.a.Control,Object(Y.a)(Object(Y.a)({type:"text"},a("newsCatename")),{},{placeholder:"Enter news category name.",isInvalid:n.newsCatename})),n.newsCatename&&Object(m.jsx)($.a.Control.Feedback,{type:"invalid",children:n.newsCatename.message})]}),Object(m.jsx)(g.a,{variant:"primary",type:"submit",children:"Submit"})]})})}),Object(m.jsx)("hr",{})]})},re=ae.a().shape({newsCatename:ae.b().required("Name news category is required!")}),se=function(){var e=Object(y.h)().id,t=Object(y.g)(),a=Object(ee.d)({resolver:Object(te.a)(re)}),c=a.register,r=a.handleSubmit,s=a.formState.errors,i=a.setValue,j=n.a.useCallback(Object(o.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.get("https://api.codingthailand.com/api/category/"+e);case 3:a=t.sent,i("newsCatename",a.data.name),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),[e,i]);n.a.useEffect((function(){j()}),[j]);var b=function(){var a=Object(o.a)(l.a.mark((function a(c){var n;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return"https://api.codingthailand.com/api/category",a.next=3,d.a.put("https://api.codingthailand.com/api/category",{id:e,name:c.newsCatename});case 3:n=a.sent,alert(n.data.message),t.replace("/category");case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(m.jsxs)(Q.a,{className:"mt-4",children:[Object(m.jsx)(X.a,{children:Object(m.jsx)(Z.a,{xs:12,md:6,children:Object(m.jsxs)($.a,{onSubmit:r(b),children:[Object(m.jsxs)($.a.Group,{controlId:"newsCatename",children:[Object(m.jsx)($.a.Label,{children:"News Category"}),Object(m.jsx)($.a.Control,Object(Y.a)(Object(Y.a)({type:"text"},c("newsCatename")),{},{placeholder:"Enter news category name.",isInvalid:s.newsCatename})),s.newsCatename&&Object(m.jsx)($.a.Control.Feedback,{type:"invalid",children:s.newsCatename.message})]}),Object(m.jsx)(g.a,{variant:"primary",type:"submit",children:"Submit"})]})})}),Object(m.jsx)("hr",{})]})},ie=a(103),le=["image/jpeg","image/jpg"],oe=function(){var e=Object(y.g)(),t=Object(ie.useToasts)().addToast,a=Object(ee.d)(),c=a.handleSubmit,n=a.formState.errors,r=a.register;return Object(m.jsxs)(Q.a,{className:"mt-4",children:[Object(m.jsx)(X.a,{children:Object(m.jsxs)(Z.a,{md:6,children:[Object(m.jsx)("h1",{children:"Upload Image"}),Object(m.jsxs)($.a,{onSubmit:c((function(a){try{var c=a.picture[0],n=new FileReader;n.readAsDataURL(c),n.onload=function(){var a=Object(o.a)(l.a.mark((function a(c){var n,r;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=c.target.result,"https://api.codingthailand.com/api/upload",a.next=4,d.a.post("https://api.codingthailand.com/api/upload",{picture:n});case 4:r=a.sent,t(r.data.data.message,{appearance:"success"}),e.replace("/");case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}catch(r){t(JSON.stringify(r),{appearance:"error"})}})),children:[Object(m.jsx)("div",{className:"mb-3 mt-4",children:Object(m.jsxs)($.a.File,{children:[Object(m.jsx)($.a.File.Label,{children:"Choose file picture."}),Object(m.jsx)($.a.File.Input,Object(Y.a)(Object(Y.a)({type:"file"},r("picture",{required:"** Please input file picture.",validate:{checkFileType:function(e){return e&&le.includes(e[0].type)}}})),{},{isInvalid:n.picture})),n.picture&&"required"===n.picture.type&&Object(m.jsx)($.a.Control.Feedback,{type:"invalid",children:n.picture.message}),n.picture&&"checkFileType"===n.picture.type&&Object(m.jsx)($.a.Control.Feedback,{type:"invalid",children:"Picture was supported only file type .jpg or jpeg."})]})}),Object(m.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Upload..."})]})]})}),Object(m.jsx)("hr",{})]})},je=a(1145),de=a(510),be=ae.a().shape({name:ae.b().required("Name is required!"),email:ae.b().required("Email is required!").email("Email format was wrong!"),password:ae.b().required("Password is required!").min(3,"Password character is a minimum of 3")}),ue=function(){var e=Object(y.g)(),t=Object(ie.useToasts)().addToast,a=Object(ee.d)({resolver:Object(te.a)(be)}),c=a.register,n=a.handleSubmit,r=a.formState.errors,s=function(){var a=Object(o.a)(l.a.mark((function a(c){var n;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,"https://api.codingthailand.com/api/register",a.next=4,d.a.post("https://api.codingthailand.com/api/register",{name:c.name,email:c.email,password:c.password});case 4:n=a.sent,t(n.data.message,{appearance:"success"}),e.replace("/login"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),t(a.t0.response.data.errors.email[0],{appearance:"error"});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}();return Object(m.jsxs)(Q.a,{className:"mt-4",children:[Object(m.jsx)(X.a,{children:Object(m.jsx)(Z.a,{xs:12,md:6,children:Object(m.jsxs)($.a,{onSubmit:n(s),children:[Object(m.jsx)("h1",{children:"Register"}),Object(m.jsxs)($.a.Group,{controlId:"name",children:[Object(m.jsx)($.a.Label,{children:"Name"}),Object(m.jsx)($.a.Control,Object(Y.a)(Object(Y.a)({type:"text"},c("name")),{},{isInvalid:r.name})),r.name&&Object(m.jsx)($.a.Control.Feedback,{type:"invalid",children:r.name.message})]}),Object(m.jsxs)($.a.Group,{controlId:"email",children:[Object(m.jsx)($.a.Label,{children:"Email"}),Object(m.jsx)($.a.Control,Object(Y.a)(Object(Y.a)({type:"email"},c("email")),{},{isInvalid:r.email})),r.email&&Object(m.jsx)($.a.Control.Feedback,{type:"invalid",children:r.email.message})]}),Object(m.jsxs)($.a.Group,{controlId:"password",children:[Object(m.jsx)($.a.Label,{children:"Password"}),Object(m.jsx)($.a.Control,Object(Y.a)(Object(Y.a)({type:"password"},c("password")),{},{isInvalid:r.password})),r.password&&Object(m.jsx)($.a.Control.Feedback,{type:"invalid",children:r.password.message})]}),Object(m.jsx)(g.a,{variant:"primary",type:"submit",children:"Register"})]})})}),Object(m.jsx)("hr",{})]})},he=ae.a().shape({email:ae.b().required("Email is required!").email("Email format was wrong!"),password:ae.b().required("Password is required!").min(3,"Password character is a minimum of 3")}),pe=function(){var e=Object(y.g)(),t=Object(ie.useToasts)().addToast,a=Object(p.b)(),c=Object(ee.d)({resolver:Object(te.a)(he)}),n=c.register,r=c.handleSubmit,s=c.formState.errors,i=function(){var c=Object(o.a)(l.a.mark((function c(n){var r,s,i;return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,"https://api.codingthailand.com/api/login",c.next=4,d.a.post("https://api.codingthailand.com/api/login",{email:n.email,password:n.password});case 4:return r=c.sent,localStorage.setItem("token",JSON.stringify(r.data)),"https://api.codingthailand.com/api/profile",c.next=9,d.a.get("https://api.codingthailand.com/api/profile",{headers:{Authorization:"Bearer "+r.data.access_token}});case 9:s=c.sent,localStorage.setItem("profile",JSON.stringify(s.data.data.user)),t("Log In success!!!",{appearance:"success"}),i=JSON.parse(localStorage.getItem("profile")),a(h(i)),e.replace("/"),c.next=20;break;case 17:c.prev=17,c.t0=c.catch(0),t(c.t0.response.data.message,{appearance:"error"});case 20:case"end":return c.stop()}}),c,null,[[0,17]])})));return function(e){return c.apply(this,arguments)}}();return Object(m.jsxs)(Q.a,{className:"mt-4",children:[Object(m.jsx)(X.a,{children:Object(m.jsx)(Z.a,{xs:12,md:6,children:Object(m.jsxs)($.a,{onSubmit:r(i),children:[Object(m.jsx)("h1",{children:"Log In"}),Object(m.jsxs)($.a.Group,{controlId:"email",children:[Object(m.jsx)($.a.Label,{children:"Email"}),Object(m.jsx)($.a.Control,Object(Y.a)(Object(Y.a)({type:"email"},n("email")),{},{isInvalid:s.email})),s.email&&Object(m.jsx)($.a.Control.Feedback,{type:"invalid",children:s.email.message})]}),Object(m.jsxs)($.a.Group,{controlId:"password",children:[Object(m.jsx)($.a.Label,{children:"Password"}),Object(m.jsx)($.a.Control,Object(Y.a)(Object(Y.a)({type:"password"},n("password")),{},{isInvalid:s.password})),s.password&&Object(m.jsx)($.a.Control.Feedback,{type:"invalid",children:s.password.message})]}),Object(m.jsx)(g.a,{variant:"primary",type:"submit",children:"Submit"})]})})}),Object(m.jsx)("hr",{})]})},me=function(){var e=Object(p.c)((function(e){return e.authReducer.profile}));return Object(m.jsx)("div",{className:"jumbotron",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"col-md-12",children:[Object(m.jsx)("h2",{children:"Member Club"}),e&&Object(m.jsxs)("div",{children:[Object(m.jsxs)("p",{children:["Welcome : ",e.name]}),Object(m.jsxs)("p",{children:["Email : ",e.email]})]}),Object(m.jsx)("p",{})]})})})})},Oe=a(544),xe=["children"];function ve(e){var t=e.children,a=Object(Oe.a)(e,xe),c=!1;return JSON.parse(localStorage.getItem("token"))&&(c=!0),Object(m.jsx)(y.b,Object(Y.a)(Object(Y.a)({},a),{},{render:function(e){var a=e.location;return c?t:Object(m.jsx)(y.a,{to:{pathname:"/login",state:{from:a}}})}}))}var fe=n.a.createContext(),ge=function(e){var t=e.children,a=n.a.useState(null),c=Object(I.a)(a,2),r=c[0],s=c[1],i={profile:r,updateProfile:function(e){return s(e)}};return Object(m.jsx)(fe.Provider,{value:i,children:t})},ye=a(85),we=a(318),Ce=a(517),Ne=a.n(Ce),ke=a(518),Se=a(519),Te={profile:null,version:null},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(Y.a)(Object(Y.a)({},e),{},{profile:t.payload.profile});case u:return Object(Y.a)(Object(Y.a)({},e),{},{version:t.payload.version});default:return e}},Pe={cartlist:[],total:0},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:case B:return Object(Y.a)(Object(Y.a)({},e),{},{cartlist:t.payload.cartlist,total:t.payload.total});default:return e}},Fe=Object(ye.combineReducers)({authReducer:Ie,cartReducer:Re}),Le={key:"root",storage:Ne.a,whitelist:["cartReducer"]},De=Object(we.a)(Le,Fe),Ee=function(){var e=Object(ye.createStore)(De,Object(Se.composeWithDevTools)(Object(ye.applyMiddleware)(ke.a)));return{store:e,persistor:Object(we.b)(e)}},Ae=a(66),qe=a(64),_e=Ae.StyleSheet.create({page:{backgroundColor:"#E4E4E4",fontFamily:"Sarabun",paddingTop:35,paddingBottom:65,paddingHorizontal:35},title:{fontSize:20,textAlign:"center",marginBottom:20},container:{alignSelf:"center",marginBottom:5}});Ae.Font.register({family:"Sarabun",fonts:[{src:"./fonts/Sarabun-Regular.ttf"}]});var Be=function(){var e=Object(p.c)((function(e){return e.cartReducer.cartlist}));return Object(m.jsx)(Ae.PDFViewer,{className:"container-fluid",height:600,children:Object(m.jsx)(Ae.Document,{children:Object(m.jsxs)(Ae.Page,{size:"A4",style:_e.page,children:[Object(m.jsx)(Ae.View,{style:_e.container,children:Object(m.jsx)(Ae.Image,{src:"/logo192.png",style:{width:50,height:50}})}),Object(m.jsx)(Ae.View,{children:Object(m.jsx)(Ae.Text,{style:_e.title,children:"Shopping cart lists"})}),Object(m.jsxs)(qe.Table,{data:e,children:[Object(m.jsxs)(qe.TableHeader,{textAlign:"center",children:[Object(m.jsx)(qe.TableCell,{weighting:.5,children:"Code"}),Object(m.jsx)(qe.TableCell,{children:"Course name"}),Object(m.jsx)(qe.TableCell,{children:"Total"}),Object(m.jsx)(qe.TableCell,{children:"Course price"}),Object(m.jsx)(qe.TableCell,{children:"Amount"})]}),Object(m.jsxs)(qe.TableBody,{children:[Object(m.jsx)(qe.DataTableCell,{weighting:.5,style:{textAlign:"center"},getContent:function(e){return e.id}}),Object(m.jsx)(qe.DataTableCell,{getContent:function(e){return e.name}}),Object(m.jsx)(qe.DataTableCell,{style:{textAlign:"center"},getContent:function(e){return e.qty}}),Object(m.jsx)(qe.DataTableCell,{style:{textAlign:"center"},getContent:function(e){return e.price}}),Object(m.jsx)(qe.DataTableCell,{style:{textAlign:"center"},getContent:function(e){return e.qty*e.price}})]})]})]})})})},He=a(1135),Ge=a(543),ze=a(1139),Je=a(540),Ue=a(541),We=a(196),Ve=a(193),Me=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}],Ke=function(){return Object(m.jsx)("div",{className:"jumbotron",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"col-md-12",children:[Object(m.jsx)("h2",{children:"Tiny Line Chart Example"}),Object(m.jsx)(He.a,{width:500,height:300,data:Me,children:Object(m.jsx)(Ge.a,{type:"monotone",dataKey:"pv",stroke:"#8884d8",strokeWidth:2})}),Object(m.jsx)("h2",{children:"Simple Line Chart Example"}),Object(m.jsxs)(He.a,{width:500,height:300,data:Me,margin:{top:5,right:30,left:20,bottom:5},children:[Object(m.jsx)(ze.a,{strokeDasharray:"3 3"}),Object(m.jsx)(Je.a,{dataKey:"name"}),Object(m.jsx)(Ue.a,{}),Object(m.jsx)(We.a,{}),Object(m.jsx)(Ve.a,{}),Object(m.jsx)(Ge.a,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),Object(m.jsx)(Ge.a,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"})]})]})})})})},Ye=Ee().store,Qe=new je.a;var Xe=function(){return Object(m.jsx)(p.a,{store:Ye,children:Object(m.jsx)(ge,{children:Object(m.jsx)(ie.ToastProvider,{autoDismiss:!0,autoDismissTimeout:4e3,children:Object(m.jsx)(de.a,{client:Qe,children:Object(m.jsx)(w.a,{children:Object(m.jsxs)("div",{children:[Object(m.jsx)(C,{}),Object(m.jsxs)(y.d,{children:[Object(m.jsx)(y.b,{exact:!0,path:"/",children:Object(m.jsx)(T,{})}),Object(m.jsx)(y.b,{path:"/about",children:Object(m.jsx)(P,{})}),Object(m.jsx)(y.b,{path:"/product",children:Object(m.jsx)(H,{})}),Object(m.jsx)(y.b,{path:"/detail/:id/title/:title",children:Object(m.jsx)(J,{})}),Object(m.jsx)(y.b,{path:"/hospital",children:Object(m.jsx)(V,{})}),Object(m.jsx)(y.b,{path:"/upload",children:Object(m.jsx)(oe,{})}),Object(m.jsx)(y.b,{path:"/cart",children:Object(m.jsx)(M,{})}),Object(m.jsx)(y.b,{path:"/pdf",children:Object(m.jsx)(Be,{})}),Object(m.jsx)(y.b,{path:"/chart",children:Object(m.jsx)(Ke,{})}),Object(m.jsx)(ve,{path:"/member",children:Object(m.jsx)(me,{})}),Object(m.jsx)(y.b,{path:"/register",children:Object(m.jsx)(ue,{})}),Object(m.jsx)(y.b,{path:"/login",children:Object(m.jsx)(pe,{})}),Object(m.jsx)(y.b,{path:"/category",render:function(e){var t=e.match.url;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(y.b,{path:"".concat(t,"/"),exact:!0,children:Object(m.jsx)(K,{})}),Object(m.jsx)(y.b,{path:"".concat(t,"/create"),children:Object(m.jsx)(ne,{})}),Object(m.jsx)(y.b,{path:"".concat(t,"/edit/:id"),children:Object(m.jsx)(se,{})})]})}})]}),Object(m.jsx)(O,{})]})})})})})})},Ze=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,1150)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(m.jsx)(Xe,{}),document.getElementById("root")),Ze()},556:function(e,t,a){},678:function(e,t){},680:function(e,t){},708:function(e,t){},709:function(e,t){},821:function(e,t){},823:function(e,t){},851:function(e,t){},853:function(e,t){},854:function(e,t){},859:function(e,t){},861:function(e,t){},880:function(e,t){},892:function(e,t){},895:function(e,t){}},[[1120,1,2]]]);
//# sourceMappingURL=main.6cedec73.chunk.js.map