(this.webpackJsonpevolvfit=this.webpackJsonpevolvfit||[]).push([[0],{32:function(e,t,c){},33:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),n=c(12),i=c.n(n),r=(c(32),c(33),c(10)),l=c(3),j=c(11),d=c(4),b=c(19),o=c(14),h=c(45),x=c(9),O=(c(17),c(1)),m=function(e){var t=Object(s.useState)({id:Object(h.a)(),dishName:"",carbs:"",proteins:"",fats:""}),c=Object(j.a)(t,2),a=c[0],n=c[1],i=Object(s.useState)(!1),r=Object(j.a)(i,2),l=r[0],m=r[1];Object(s.useEffect)((function(){if(void 0!==e.dish){var t=e.dish,c=t.id,s=t.dishName,a=t.carbs,i=t.proteins,r=t.fats;n({id:c,dishName:s,carbs:a,proteins:i,fats:r}),m(void 0!==c)}}),[e]);var u=function(e){return function(t){console.log([e]+"---"+t.target.value),n(Object(o.a)(Object(o.a)({},a),{},Object(b.a)({},e,t.target.value)))}},p=Object(d.b)();return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"container mb-4 mt-4 card p-4",children:Object(O.jsxs)("form",{children:[Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{htmlFor:"dishname",className:"form-label",children:"Dish Name : "}),Object(O.jsx)("input",{type:"text",value:a.dishName,className:"form-control",id:"dishname",name:"dishName",onChange:u("dishName"),required:!0})]}),Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{htmlFor:"proteins",className:"form-label",children:"Amount of proteins present : "}),Object(O.jsx)("input",{type:"number",value:a.proteins,className:"form-control",id:"proteins",onChange:u("proteins"),required:!0})]}),Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{htmlFor:"fats",className:"form-label",children:"Amount of fats present : "}),Object(O.jsx)("input",{type:"number",value:a.fats,className:"form-control",id:"fats",onChange:u("fats"),required:!0})]}),Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{htmlFor:"carbs",className:"form-label",children:"Amount of carbohydrates present : "}),Object(O.jsx)("input",{type:"number",value:a.carbs,className:"form-control",id:"carbs",onChange:u("carbs"),required:!0})]}),Object(O.jsx)("div",{className:"mb-3",children:Object(O.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){e.preventDefault(),l?(p({type:"EDIT_DISH",payload:a}),Object(x.b)("Dish edited")):(p({type:"ADD_DISH",payload:a}),Object(x.b)("Dish Added"))},children:l?"Save Changes":"Add"})})]})})})},u=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],n=Object(d.c)((function(e){return e.filter})).keyword,i=Object(d.b)();return Object(O.jsxs)("nav",{className:"navbar navbar-light",style:{backgroundColor:"antiquewhite"},children:[Object(O.jsxs)("div",{style:{display:"flex"},children:[Object(O.jsx)("div",{className:"container",children:Object(O.jsx)(r.b,{to:"/",className:"navbar-brand mb-0 mx-0 h1",children:"User "})}),Object(O.jsx)("div",{className:"container",children:Object(O.jsx)(r.b,{to:"/admin",className:"navbar-brand mb-0 mx-0 h1",children:"Admin "})})]}),Object(O.jsxs)("div",{className:"d-flex",children:[null!==n?Object(O.jsxs)("button",{type:"button",className:"badge rounded-pill bg-info text-light no-border",onClick:function(){return i({type:"REMOVE_FILTER"})},children:[n," \xa0",Object(O.jsx)("span",{className:"badge bg-secondary ml-2",children:"X"})]}):"",Object(O.jsxs)("form",{className:"d-flex mx-4",children:[Object(O.jsx)("input",{className:"form-control me-2",value:c,type:"text",id:"item",name:"item",placeholder:"Search","aria-label":"Search",onChange:function(e){e.preventDefault(),a(e.target.value),console.log(c)}}),Object(O.jsx)("button",{className:"btn btn-dark",type:"submit",onClick:function(e){e.preventDefault(),i({type:"SEARCH_DISH",payload:{keyword:c}}),a("")},children:"Search"})]})]})]})},p=function(e){var t=e.Dish,c=t.dishName,s=t.proteins,a=t.carbs,n=t.fats,i=Object(d.b)();return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"text-center text-capitalize",children:c}),Object(O.jsx)("td",{className:"text-center text-capitalize",children:s}),Object(O.jsx)("td",{className:"text-center text-capitalize",children:a}),Object(O.jsx)("td",{className:"text-center text-capitalize",children:n}),Object(O.jsx)("td",{className:"table-info text-center text-capitalize",children:4*s+4*a+9*n}),Object(O.jsx)("td",{className:"text-center text-capitalize",children:Object(O.jsx)("button",{type:"button",className:"btn btn-warning",onClick:function(){e.location.history.push({pathname:"/edit",state:e.Dish})},children:"Edit"})}),Object(O.jsx)("td",{className:"text-center text-capitalize",children:Object(O.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){return i({type:"DELETE_DISH",payload:e.Dish}),void Object(x.b)("Dish deleted")},children:"Delete Dish"})})]})})},f=function(e){var t=Object(s.useState)(!1),c=Object(j.a)(t,2),a=c[0],n=c[1],i=Object(d.c)((function(e){return e.allDish.dish})),r=Object(d.c)((function(e){return e.filter})).keyword;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(u,{}),Object(O.jsxs)("div",{className:"container col mt-4",children:[Object(O.jsx)("div",{className:"table-responsive",children:Object(O.jsxs)("table",{className:"table table-striped",children:[Object(O.jsx)("thead",{className:"table-dark",children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{scope:"col",className:"text-center text-capitalize",children:"Dish"}),Object(O.jsx)("th",{scope:"col",className:"text-center text-capitalize",children:"Proteins"}),Object(O.jsx)("th",{scope:"col",className:"text-center text-capitalize",children:"Carbs"}),Object(O.jsx)("th",{scope:"col",className:"text-center text-capitalize",children:"Fats"}),Object(O.jsx)("th",{scope:"col",className:"text-center text-capitalize",children:"Calories"}),Object(O.jsx)("th",{scope:"col",className:"text-center text-capitalize"}),Object(O.jsx)("th",{scope:"col",className:"text-center text-capitalize"})]})}),Object(O.jsx)("tbody",{children:i.filter((function(e){if(null==r)return e;var t=new RegExp(r,"i");return null!=e.dishName.match(t)})).map((function(t,c){return Object(O.jsx)(p,{Dish:t,location:e},c)}))})]})}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("button",{type:"button",className:" mx-auto btn btn-info",onClick:function(){return n(!a)},children:"Add Dish"})," \xa0"]})]}),a&&Object(O.jsx)(m,{}),Object(O.jsx)(x.a,{})]})},N=function(e){var t=e.Dish,c=t.dishName,s=t.proteins,a=t.carbs,n=t.fats;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"card col-md-4 mx-auto mb-4",children:[Object(O.jsx)("h5",{className:"card-title text-center mt-3",children:c}),Object(O.jsx)("div",{children:Object(O.jsxs)("table",{className:"table ",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{}),Object(O.jsx)("th",{})]})}),Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"PROTEINS"}),Object(O.jsx)("td",{children:s})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"FATS"}),Object(O.jsx)("td",{children:n})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"CARBOHYDRATES"}),Object(O.jsx)("td",{children:a})]}),Object(O.jsxs)("tr",{className:"table-info",children:[Object(O.jsx)("td",{children:"CALORIES"}),Object(O.jsx)("td",{children:4*s+4*a+9*n})]})]})]})})]})})},v=function(){var e=Object(d.c)((function(e){return e.allDish.dish})),t=Object(d.c)((function(e){return e.filter})).keyword;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(u,{}),Object(O.jsx)("div",{className:"container-fluid",style:{minHeight:"100vh"},children:Object(O.jsx)("div",{className:"row",style:{height:"100vh"},children:Object(O.jsxs)("div",{className:"col p-3 border",children:[Object(O.jsx)("h1",{className:"text-center",children:"Available Dishes"})," ",Object(O.jsx)("br",{}),Object(O.jsx)("div",{className:"col-md-12 row",children:e.filter((function(e){if(null==t)return e;var c=new RegExp(t,"i");return null!=e.dishName.match(c)})).map((function(e,t){return Object(O.jsx)(N,{Dish:e},t)}))})]})})})]})},y=function(e){return Object(O.jsxs)("div",{className:"container mt-4",children:[Object(O.jsx)("button",{className:"btn btn-dark",children:Object(O.jsx)(r.b,{to:"/admin",style:{color:"white",textDecoration:"none"},children:"Back"})}),Object(O.jsx)(m,{dish:e.location.state}),Object(O.jsx)(x.a,{})]})};var D=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(r.a,{children:Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{path:"/",exact:!0,component:v}),Object(O.jsx)(l.a,{path:"/admin",exact:!0,component:f}),Object(O.jsx)(l.a,{path:"/edit",exact:!0,component:y}),Object(O.jsx)(l.a,{children:"404 Not Found!"})]})})})},g=c(20),E=c(21),S="ADD_DISH",w="DELETE_DISH",_="EDIT_DISH",k="SEARCH_DISH",C="REMOVE_FILTER",I={dish:[{id:Object(h.a)(),dishName:"Salad",proteins:100,carbs:100,fats:100},{id:Object(h.a)(),dishName:"Rice Bowl",proteins:100,carbs:100,fats:100}]},A={keyword:null},F=Object(g.a)({allDish:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0,c=t.type,s=t.payload;switch(c){case S:return{dish:[].concat(Object(E.a)(e.dish),[s])};case _:return{dish:Object(E.a)(e.dish.map((function(e){if(e.id===s.id){var t=Object.assign({},s);return console.log("newitem--"+t),t}return e})))};case w:return{dish:Object(E.a)(e.dish.filter((function(e){return e.id!==s.id})))};default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0,c=t.type,s=t.payload;switch(c){case k:return{keyword:s.keyword};case C:return{keyword:null};default:return e}}}),R=Object(g.b)(F,{},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(d.a,{store:R,children:Object(O.jsx)(D,{})})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.641d9c1e.chunk.js.map