(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{12:function(t,e,s){},13:function(t,e,s){},14:function(t,e,s){},15:function(t,e,s){},19:function(t,e,s){"use strict";s.r(e);var n=s(1),c=s.n(n),a=s(7),o=s.n(a),i=(s(12),s(13),s(2)),r=(s(14),s(15),s(0));var l=function(t){var e=t.deleteItem,s=t.editItem,n=t.checkedItem,c=t.todoArr.length>0?t.todoArr:JSON.parse(localStorage.getItem("todos"));return Object(r.jsx)("div",{className:"items-container",children:c&&c.length>0?c.map((function(t,c){return Object(r.jsxs)("div",{className:"items",children:[Object(r.jsxs)("div",{className:"item-left",children:[Object(r.jsx)("input",{value:t.status,type:"checkbox",checked:t.status,onChange:function(){return n(c)}}),Object(r.jsx)("p",{className:t.status?"line-through":null,children:t.text})]}),Object(r.jsxs)("div",{className:"item-right",children:[!t.status&&Object(r.jsx)("i",{onClick:function(){return s(c)},className:"fas fa-pencil-alt",title:"Update Item"}),Object(r.jsx)("i",{onClick:function(){return e(c)},className:"fas fa-trash-alt",title:"Delete Item"})]})]})})):null})},d=s(3),u=s.n(d),j=function(){return localStorage.hasOwnProperty("todos")?JSON.parse(localStorage.getItem("todos")):[]};var f=function(){var t=Object(n.useState)(j()),e=Object(i.a)(t,2),s=e[0],c=e[1],a=Object(n.useState)({text:"",status:!1}),o=Object(i.a)(a,2),d=o[0],f=o[1],m=Object(n.useState)(!0),O=Object(i.a)(m,2),p=O[0],b=O[1],h=Object(n.useState)(null),x=Object(i.a)(h,2),g=x[0],v=x[1],N=function(t){"Enter"!==t.key&&"addTodo"!==t.target.id&&"editTodo"!==t.target.id||(""!==d.text?p?(s.unshift(d),localStorage.setItem("todos",JSON.stringify(s)),c(s),f({text:"",status:!1})):(c(s.map((function(t,e){return e===g?d:t}))),b(!0),f({text:"",status:!1}),v(null)):u()("Oops","Please write todo first","error"))};return Object(r.jsxs)("div",{className:"app-content",children:[Object(r.jsx)("div",{children:Object(r.jsx)("h1",{children:"Todo App"})}),Object(r.jsx)("div",{className:"input-wraper",children:Object(r.jsxs)("div",{className:"input",children:[Object(r.jsx)("input",{value:d.text,onKeyPress:N,onChange:function(t){return function(t){var e={text:t.target.value,status:!1};f(e)}(t)},type:"text",placeholder:"Add items..."}),p?Object(r.jsx)("i",{onClick:N,id:"addTodo",className:"fas fa-plus",title:"Add item"}):Object(r.jsx)("i",{onClick:N,id:"editTodo",className:"fas fa-pencil-alt",title:"Update Item"})]})}),Object(r.jsx)(l,{todoArr:s,checkedItem:function(t){!0!==s[t].status?(s[t].status=!0,localStorage.setItem("todos",JSON.stringify(s)),c(j()),u()("Good job","Todo completed","success")):(s[t].status=!1,localStorage.setItem("todos",JSON.stringify(s)),c(j()))},deleteItem:function(t){u()({title:"Are you sure?",text:"Once deleted, you will not be able to recover this file! ",icon:"warning",buttons:!0,dangerMode:!0}).then((function(e){e&&(s.splice(t,1),localStorage.setItem("todos",JSON.stringify(s)),c(j()))}))},editItem:function(t){var e=s.find((function(e,s){return t===s}));b(!1),f(e),v(t)}})]})};var m=function(){return Object(r.jsx)("div",{className:"app",children:Object(r.jsx)(f,{})})};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(m,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.926fbd31.chunk.js.map