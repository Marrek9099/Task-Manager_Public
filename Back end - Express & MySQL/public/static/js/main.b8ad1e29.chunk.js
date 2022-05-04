(this.webpackJsonpclient_task_app=this.webpackJsonpclient_task_app||[]).push([[0],{266:function(e,t,a){},267:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(55),r=a.n(n),i=a(10),o=a(15),l=Object(o.a)(),d=a(9),u=a(6),j=a(12),p=a.n(j),b=a(22),m=a(111),h=a.n(m).a.create({baseURL:"https://dimitar-task-manager.onrender.com"}),O=a(38),x=function(e){return l.push("/user/tasks"),{type:"IS_SIGNED_IN",payload:e}},f=function(){return{type:"CLEAR_TASKS"}},v=function(e,t){return function(){var a=Object(b.a)(p.a.mark((function a(s,c){var n,r;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n="Bearer ".concat(c().authReduc.userData.token),a.next=3,h.put("/tasks/".concat(e),t,{headers:{Authorization:n}});case 3:r=a.sent,s({type:"EDIT_TASK",payload:r.data});case 5:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()},g=a(27),y=a(0),N=Object(d.b)((function(e){return{user:e.authReduc}}),{signOut:function(){return function(){var e=Object(b.a)(p.a.mark((function e(t,a){var s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="Bearer ".concat(a().authReduc.userData.token),localStorage.clear(),l.push("/"),e.next=5,h.post("/users/logout",{},{headers:{Authorization:s}});case 5:t({type:"SIGN_OUT"});case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}})((function(e){var t=e.signOut,a=e.user;return Object(y.jsx)("div",{children:Object(y.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-light py-3 font-weight-bold",children:[Object(y.jsx)(g.a,{to:"/",className:"navbar-brand px-3",children:Object(y.jsx)("i",{className:"fas fa-clipboard-list"})}),"/"===l.location.pathname?Object(y.jsxs)(c.a.Fragment,{children:[Object(y.jsx)("div",{className:"px-3",children:"Task Manager"}),Object(y.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(y.jsx)("span",{className:"navbar-toggler-icon"})}),Object(y.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(y.jsxs)("ul",{className:"navbar-nav ml-auto mr-5",children:[Object(y.jsx)("li",{className:"nav-item px-3",children:Object(y.jsx)(g.a,{to:"/signIn",className:"nav-link text-black",children:"Sign In"})}),Object(y.jsx)("li",{className:"nav-item px-3",children:Object(y.jsx)(g.a,{to:"/SignUp",className:"nav-link text-black",children:"Sign Up"})})]})})]}):a.hasAccess?Object(y.jsxs)(c.a.Fragment,{children:[Object(y.jsx)("div",{className:"px-3 ml-auto",children:"Task Manager"}),Object(y.jsx)("ul",{className:"navbar-nav ml-auto",children:Object(y.jsx)("li",{className:"nav-item",children:Object(y.jsx)("span",{onClick:function(){return t()},className:"signOut nav-link text-black",children:"Sign Out"})})})]}):void 0]})})})),w=function(){return Object(y.jsx)("footer",{children:Object(y.jsx)("div",{className:"text-center py-3",children:"Created By Dimitar"})})},k=Object(d.b)(void 0,{isSignedIn:x})((function(e){var t=e.isSignedIn;return Object(s.useEffect)((function(){var e=localStorage.getItem("user");e&&t(JSON.parse(e))}),[t]),Object(y.jsxs)("div",{children:[Object(y.jsx)(N,{}),Object(y.jsx)("div",{className:"container-fluid bg-light",children:Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"col-12 col-sm-6 py-5 px-5 text-center align-self-center",children:"\u201cA good plan today is better than a perfect plan tomorrow.\u201d \u2013 Proverb"}),Object(y.jsx)("div",{className:"col-12 col-sm-6 py-5 text-center",children:Object(y.jsx)("i",{className:"fas fa-clipboard-list"})})]})}),Object(y.jsx)(w,{})]})})),S=a(108),T=a(109),I=function(e){var t=e.input,a=e.type,s=e.id,c=e.placeholder,n=e.meta;return Object(y.jsxs)("div",{children:[Object(y.jsx)("input",Object(u.a)(Object(u.a)({},t),{},{type:a,className:"form-control",id:s,placeholder:c,maxLength:"40"})),function(){if(n.error&&n.touched)return Object(y.jsx)("div",{className:"error",children:n.error})}()]})},E=Object(d.b)(null,{signUp:function(e,t){return function(){var a=Object(b.a)(p.a.mark((function a(s){var c,n;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c={name:e.name,email:e.email,password:e.password},a.prev=1,a.next=4,h.post("/users",c);case 4:n=a.sent,s({type:"SIGN_UP",payload:n.data}),localStorage.setItem("user",JSON.stringify(n.data)),l.push("/user/tasks"),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),t();case 13:case"end":return a.stop()}}),a,null,[[1,10]])})));return function(e){return a.apply(this,arguments)}}()},signIn:function(e,t){return function(){var a=Object(b.a)(p.a.mark((function a(s){var c;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,h.post("/users/login",e);case 3:c=a.sent,s({type:"SIGN_IN",payload:c.data}),localStorage.setItem("user",JSON.stringify(c.data)),l.push("/user/tasks"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),t();case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}})(Object(T.a)({form:"Credentials form",validate:function(e){var t="/SignUp"===l.location.pathname,a={};return e.email||(a.email="Please enter your email"),e.password||(a.password="Please enter a password"),t&&(e.name||(a.name="Please enter your name"),e.password&&(e.password.match(/[a-z]/g)||(a.password="Password must include at least 1 lowercase character"),e.password.match(/[A-Z]/g)||(a.password="Password must include at least 1 uppercase character"),e.password.match(/[0-9]/g)||(a.password="Password must include at least 1 number"),e.password.match(/[!@#$%^&*(),.?":{}|<>]/g)||(a.password="Password must include at least 1 special character"),e.password.length<8&&(a.password="Password must be at least 8 charactesrs long"),e.password.includes(" ")&&(a.password="Password contains empty spaces")),e.password&&e.password2&&e.password!==e.password2&&(a.password2="Passwords do not match")),a}})((function(e){var t=Object(s.useRef)(null),a="/SignUp"===l.location.pathname?"Sign Up":"Sign In",n=function(){t.current.classList.add("visible")};return Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{className:"text-center my-3",children:[Object(y.jsx)("i",{className:"fas fa-clipboard-list p-2 display-4"}),a]}),Object(y.jsxs)("form",{onSubmit:e.handleSubmit((function(t){"Sign Up"===a?e.signUp(t,n):e.signIn(t,n)})),className:"auth p-5 my-2",children:[function(){if("/SignUp"===l.location.pathname)return Object(y.jsxs)("div",{className:"form-group",children:[Object(y.jsx)("label",{htmlFor:"name",children:"Name"}),Object(y.jsx)(S.a,{name:"name",component:I,type:"text",id:"name",placeholder:"Enter your name"})]})}(),Object(y.jsxs)("div",{className:"form-group",children:[Object(y.jsx)("label",{htmlFor:"inputEmail",children:"Email address"}),Object(y.jsx)(S.a,{name:"email",component:I,type:"email",id:"inputEmail",placeholder:"Enter email"})]}),Object(y.jsxs)("div",{className:"form-group",children:[Object(y.jsx)("label",{htmlFor:"password",children:"Password"}),Object(y.jsx)(S.a,{name:"password",component:I,type:"password",id:"password",placeholder:"Password"})]}),function(){if("/SignUp"===l.location.pathname)return Object(y.jsxs)(c.a.Fragment,{children:[Object(y.jsxs)("div",{className:"form-group",children:[Object(y.jsx)("label",{htmlFor:"password2",children:"Confirm password"}),Object(y.jsx)(S.a,{name:"password2",component:I,type:"password",id:"password2",placeholder:"Enter password again"})]}),Object(y.jsxs)("ul",{className:"passwordRules",children:[Object(y.jsx)("li",{children:"Password must be at least 8 characters long"}),Object(y.jsx)("li",{children:"Password must contain at least 1 capital letter"}),Object(y.jsx)("li",{children:"Passowrd must contain at least 1 lower case letter"}),Object(y.jsx)("li",{children:"Password must contain at least 1 number"}),Object(y.jsx)("li",{children:"Password must contain at least 1 special character e.g. #!%"})]})]})}(),Object(y.jsx)("div",{ref:t,className:"submissionError",children:"Sign Up"===a?"Email already in use":"Incorrect login details"}),Object(y.jsx)("button",{type:"submit",className:"btn btn-success",children:a})]})]})}))),_=function(){return Object(y.jsx)(E,{})},A=function(){return Object(y.jsx)(E,{})},P=function(e){var t=e.input,a=e.id,s=e.name,c=e.meta;return Object(y.jsxs)("div",{children:[Object(y.jsxs)("select",Object(u.a)(Object(u.a)({},t),{},{className:"form-control",id:a,name:s,children:[Object(y.jsx)("option",{value:"",children:"-Pick Option-"}),Object(y.jsx)("option",{value:"normal",children:"Normal"}),Object(y.jsx)("option",{value:"important",children:"Important"}),Object(y.jsx)("option",{value:"critical",children:"Critical"})]})),function(){if(c.error&&c.touched)return Object(y.jsx)("div",{className:"error",children:c.error})}()]})},C=Object(d.b)(null,{createTask:function(e){return function(){var t=Object(b.a)(p.a.mark((function t(a,s){var c,n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={description:e.description,completed:!1,userId:s().authReduc.userData.id,category:e.category},n="Bearer ".concat(s().authReduc.userData.token),t.next=4,h.post("/tasks",Object(u.a)({},c),{headers:{Authorization:n}});case 4:r=t.sent,a({type:"CREATE_TASK",payload:r.data}),a(Object(O.a)("Add Task Form"));case 7:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}})(Object(T.a)({form:"Add Task Form",validate:function(e){var t={};return e.description||(t.description="Please enter task description"),e.category||(t.category="Please choose a task category"),t}})((function(e){var t=e.createTask,a=e.handleSubmit;return Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"text-success",children:"Add a new task"}),Object(y.jsxs)("form",{onSubmit:a((function(e){return t(e)})),className:" addTask p-3 my-2",children:[Object(y.jsxs)("div",{className:"form-group",children:[Object(y.jsx)("label",{htmlFor:"description",children:"Task Description"}),Object(y.jsx)(S.a,{name:"description",component:I,type:"description",id:"description",placeholder:"Enter task description"})]}),Object(y.jsxs)("div",{className:"form-group",children:[Object(y.jsx)("label",{htmlFor:"category",children:"Task category"}),Object(y.jsx)(S.a,{name:"category",defaultValue:"normal",component:P,type:"category",id:"category"})]}),Object(y.jsx)("button",{type:"submit",className:"btn btn-success",children:"Add"})]})]})}))),D=Object(d.b)(null,{editTask:v})((function(e){var t=e.editTask,a=e.task,c=Object(s.useRef)(null),n=Object(s.useRef)(null);return Object(y.jsx)("div",{className:"modal fade",id:"t".concat(a.id),tabIndex:"-1",role:"dialog","aria-labelledby":"".concat(a.id,"abel"),"aria-hidden":"true",children:Object(y.jsx)("div",{className:"modal-dialog",role:"document",children:Object(y.jsxs)("div",{className:"modal-content",children:[Object(y.jsxs)("div",{className:"modal-header",children:[Object(y.jsx)("h5",{className:"modal-title",id:"".concat(a.id,"abel"),children:"Edit Task"}),Object(y.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(y.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(y.jsxs)("div",{className:"modal-body",children:[Object(y.jsx)("label",{className:"m-1",htmlFor:"description",children:"Description:"}),Object(y.jsx)("input",{className:"form-control",ref:c,defaultValue:a.description,id:"description",type:"text",maxLength:"40"}),Object(y.jsx)("label",{className:"m-1",htmlFor:"category",children:"Category:"}),Object(y.jsxs)("select",{className:"form-control m-1",ref:n,defaultValue:a.category,id:"category",children:[Object(y.jsx)("option",{value:"normal",children:"Normal"}),Object(y.jsx)("option",{value:"important",children:"Important"}),Object(y.jsx)("option",{value:"critical",children:"Critical"})]})]}),Object(y.jsxs)("div",{className:"modal-footer",children:[Object(y.jsx)("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",children:"Close"}),Object(y.jsx)("button",{"data-dismiss":"modal",onClick:function(){return t(a.id,Object(u.a)(Object(u.a)({},a),{},{description:c.current.value,category:n.current.value}))},type:"button",className:"btn btn-success",children:"Save changes"})]})]})})})})),R=Object(d.b)(null,{deleteTask:function(e){return function(){var t=Object(b.a)(p.a.mark((function t(a,s){var c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c="Bearer ".concat(s().authReduc.userData.token),t.next=3,h.delete("/tasks/".concat(e),{headers:{Authorization:c}});case 3:a({type:"DELETE_TASK",payload:e});case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},editTask:v})((function(e){var t=e.task,a=e.deleteTask,s=e.editTask,c=t.category;return t.completed?Object(y.jsxs)("div",{className:"task ".concat(c," my-2"),children:[Object(y.jsx)("div",{className:"taskIcons d-flex justify-content-end p-1",children:Object(y.jsx)("i",{onClick:function(){return s(t.id,Object(u.a)(Object(u.a)({},t),{},{completed:!1}))},className:"fas fa-redo mr-2"})}),Object(y.jsx)("div",{children:Object(y.jsx)("del",{children:t.description})})]}):Object(y.jsxs)("div",{className:"task ".concat(c," my-2"),children:[Object(y.jsxs)("div",{className:"taskIcons d-flex justify-content-end p-1",children:[Object(y.jsx)("i",{"data-toggle":"modal","data-target":"#t".concat(t.id),className:"fas fa-edit mr-4"}),Object(y.jsx)("i",{onClick:function(){return s(t.id,Object(u.a)(Object(u.a)({},t),{},{completed:!0}))},className:"fas fa-check mr-4"}),Object(y.jsx)("i",{onClick:function(){return a(t.id)},className:"fas fa-trash-alt mr-2"})]}),Object(y.jsx)("div",{children:t.description}),Object(y.jsx)(D,{task:t})]})})),U=Object(d.b)((function(e){return{tasks:Object.values(e.taskReducer)}}),{fetchTasks:function(e){return function(){var t=Object(b.a)(p.a.mark((function t(a,s){var c,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(f()),c="Bearer ".concat(s().authReduc.userData.token),t.next=4,h.get("/tasks",{headers:{Authorization:c},params:e});case 4:n=t.sent,a({type:"FETCH_TASKS",payload:n.data});case 6:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}})((function(e){var t=e.fetchTasks,a=e.tasks;Object(s.useEffect)((function(){(function(){var e=Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]);return Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"text-success",children:"Task List"}),Object(y.jsx)("div",{className:"p-3 my-2 taskList",children:a.map((function(e){return Object(y.jsx)(R,{task:e},e.id)}))})]})})),F=Object(d.b)((function(e){return{user:e.authReduc}}),{isSignedIn:x})((function(e){var t=e.user,a=e.isSignedIn;return Object(s.useEffect)((function(){var e=localStorage.getItem("user");e&&a(JSON.parse(e))}),[a]),t.hasAccess?Object(y.jsxs)("div",{children:[Object(y.jsx)(N,{}),Object(y.jsxs)("div",{className:"container-fluid bg-light",children:[Object(y.jsx)("div",{className:"text-center font-weight-bold text-success py-3",children:"Hi ".concat(t.userData.name,", welcome to your task manager")}),Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"col-12 col-sm-6 py-5 px-5 text-center align-self-top",children:Object(y.jsx)(C,{})}),Object(y.jsx)("div",{className:"col-12 col-sm-6 py-5 text-center",children:Object(y.jsx)(U,{})})]})]}),Object(y.jsx)(w,{})]}):Object(y.jsx)("div",{children:Object(y.jsxs)("div",{className:"container p-5",children:[Object(y.jsx)("div",{children:"Please sign in or sign up first"}),Object(y.jsx)(g.a,{className:"btn btn-success m-2",to:"/signIn",children:"Sign In"}),Object(y.jsx)(g.a,{className:"btn btn-success",to:"/signUp",children:"Sign Up"})]})})})),K=(a(266),function(){return Object(y.jsxs)(i.b,{history:l,children:[Object(y.jsx)(i.a,{path:"/",exact:!0,component:k}),Object(y.jsx)(i.a,{path:"/signUp",exact:!0,component:_}),Object(y.jsx)(i.a,{path:"/signIn",exact:!0,component:A}),Object(y.jsx)(i.a,{path:"/user/tasks",exact:!0,component:F})]})}),L=a(11),G=a(113),z=a(110),B={hasAccess:null,userData:null},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_SIGNED_IN":case"SIGN_IN":case"SIGN_UP":return Object(u.a)(Object(u.a)({},e),{},{hasAccess:!0,userData:t.payload});case"SIGN_OUT":return Object(u.a)(Object(u.a)({},e),{},{hasAccess:null,userData:null});default:return Object(u.a)({},e)}},V=a(43),H=a(79),M=a.n(H),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_TASKS":return Object(u.a)(Object(u.a)({},e),M.a.mapKeys(t.payload,"id"));case"CREATE_TASK":return Object(u.a)(Object(u.a)({},e),{},Object(V.a)({},t.payload.id,t.payload));case"CLEAR_TASKS":return Object(u.a)({},{});case"EDIT_TASK":return Object(u.a)(Object(u.a)({},e),{},Object(V.a)({},t.payload.id,t.payload));case"DELETE_TASK":return M.a.omit(e,t.payload);default:return e}},q=Object(L.c)({form:z.a,authReduc:J,taskReducer:X}),Z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||L.d,$=Object(L.e)(q,Z(Object(L.a)(G.a)));r.a.render(Object(y.jsx)(d.a,{store:$,children:Object(y.jsx)(K,{})}),document.querySelector("#root"))}},[[267,1,2]]]);
//# sourceMappingURL=main.b8ad1e29.chunk.js.map