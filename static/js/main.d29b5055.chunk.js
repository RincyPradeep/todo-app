(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{12:function(t,e,s){},13:function(t,e,s){},14:function(t,e,s){},15:function(t,e,s){},19:function(t,e,s){"use strict";s.r(e);var c,n,a=s(1),l=s.n(a),i=s(7),o=s.n(i),r=(s(12),s(13),s(2)),u=(s(14),s(15),s(0));var d=function(t){var e=t.deleteItem,s=t.editItem,l=t.checkedItem,i=t.todoArr.length>0?t.todoArr:JSON.parse(localStorage.getItem("todos")),o=Object(a.useState)("All"),d=Object(r.a)(o,2),j=d[0],m=d[1],b=i&&i.length>0?i.map((function(t,c){return Object(u.jsxs)("div",{className:"items",children:[Object(u.jsxs)("div",{className:"item-left",children:[Object(u.jsx)("input",{value:t.status,type:"checkbox",checked:t.status,onChange:function(){return l(c)}}),Object(u.jsx)("p",{className:t.status?"line-through":null,children:t.text})]}),Object(u.jsxs)("div",{className:"item-right",children:[!t.status&&Object(u.jsx)("i",{onClick:function(){return s(c)},className:"fas fa-pencil-alt",title:"Update Item"}),Object(u.jsx)("i",{onClick:function(){return e(c)},className:"fas fa-trash-alt",title:"Delete Item"})]})]})})):null;return Object(u.jsxs)("div",{className:"items-container",children:[Object(u.jsxs)("div",{className:"list-buttons",children:[Object(u.jsx)("button",{className:"button",onClick:function(){m("Active"),n=i&&i.length>0?i.map((function(t,c){return!t.status&&Object(u.jsxs)("div",{className:"items",children:[Object(u.jsxs)("div",{className:"item-left",children:[Object(u.jsx)("input",{value:t.status,type:"checkbox",checked:t.status,onChange:function(){return l(c)}}),Object(u.jsx)("p",{className:t.status?"line-through":null,children:t.text})]}),Object(u.jsxs)("div",{className:"item-right",children:[!t.status&&Object(u.jsx)("i",{onClick:function(){return s(c)},className:"fas fa-pencil-alt",title:"Update Item"}),Object(u.jsx)("i",{onClick:function(){return e(c)},className:"fas fa-trash-alt",title:"Delete Item"})]})]})})):null},children:"Active"}),Object(u.jsx)("button",{className:"button",onClick:function(){m("All")},autoFocus:!0,children:"All"}),Object(u.jsx)("button",{className:"button",onClick:function(){m("Completed"),c=i&&i.length>0?i.map((function(t,c){return t.status&&Object(u.jsxs)("div",{className:"items",children:[Object(u.jsxs)("div",{className:"item-left",children:[Object(u.jsx)("input",{value:t.status,type:"checkbox",checked:t.status,onChange:function(){return l(c)}}),Object(u.jsx)("p",{className:t.status?"line-through":null,children:t.text})]}),Object(u.jsxs)("div",{className:"item-right",children:[!t.status&&Object(u.jsx)("i",{onClick:function(){return s(c)},className:"fas fa-pencil-alt",title:"Update Item"}),Object(u.jsx)("i",{onClick:function(){return e(c)},className:"fas fa-trash-alt",title:"Delete Item"})]})]})})):null},children:"Completed"})]}),"All"===j&&b,"Completed"===j&&c,"Active"===j&&n]})},j=s(3),m=s.n(j),b=function(){return localStorage.hasOwnProperty("todos")?JSON.parse(localStorage.getItem("todos")):[]};var h=function(){var t=Object(a.useState)(b()),e=Object(r.a)(t,2),s=e[0],c=e[1],n=Object(a.useState)({text:"",status:!1}),l=Object(r.a)(n,2),i=l[0],o=l[1],j=Object(a.useState)(!0),h=Object(r.a)(j,2),f=h[0],O=h[1],x=Object(a.useState)(null),p=Object(r.a)(x,2),g=p[0],N=p[1],v=function(t){console.log("call add item"),"Enter"!==t.key&&"addTodo"!==t.target.id&&"editTodo"!==t.target.id||(""!==i.text?f?(console.log("Inside if case"),s.unshift(i),localStorage.setItem("todos",JSON.stringify(s)),c(s),o({text:"",status:!1})):(c(s.map((function(t,e){return e===g?(s[g].text=i.text,s[g]):t}))),localStorage.setItem("todos",JSON.stringify(s)),o({text:"",status:!1}),N(null),O(!0)):m()("Oops","Please write todo first","error"))};return Object(u.jsxs)("div",{className:"content-wraper",children:[Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"Todo App"})}),Object(u.jsx)("div",{className:"input-wraper",children:Object(u.jsxs)("div",{className:"input",children:[Object(u.jsx)("input",{value:i.text,onKeyPress:v,onChange:function(t){return function(t){console.log("call input handle");var e={text:t.target.value,status:!1};o(e)}(t)},type:"text",placeholder:"Add items..."}),f?Object(u.jsx)("i",{onClick:v,id:"addTodo",className:"fas fa-plus",title:"Add item"}):Object(u.jsx)("i",{onClick:v,id:"editTodo",className:"fas fa-pencil-alt",title:"Update Item"})]})}),Object(u.jsx)("div",{className:"app-content",children:Object(u.jsx)(d,{todoArr:s,checkedItem:function(t){!0!==s[t].status?(s[t].status=!0,localStorage.setItem("todos",JSON.stringify(s)),c(b()),m()("Good job","Todo completed","success")):(s[t].status=!1,localStorage.setItem("todos",JSON.stringify(s)),c(b()))},deleteItem:function(t){m()({title:"Are you sure?",text:"Once deleted, you will not be able to recover this file! ",icon:"warning",buttons:!0,dangerMode:!0}).then((function(e){e&&(s.splice(t,1),localStorage.setItem("todos",JSON.stringify(s)),c(b()))}))},editItem:function(t){var e=s.find((function(e,s){return t===s}));O(!1),o(e),N(t)}})})]})};var f=function(){return Object(u.jsx)("div",{className:"app",children:Object(u.jsx)(h,{})})};o.a.render(Object(u.jsx)(l.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.d29b5055.chunk.js.map