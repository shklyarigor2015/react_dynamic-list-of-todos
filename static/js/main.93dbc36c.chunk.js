(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(t,e,n){t.exports=n(17)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(2),s=n.n(a),c=n(3),i=n(4),l=n(7),u=n(5),m=n(8),d=n(6);n(14),n(15),n(16);var p=function(t){var e=t.user;return o.a.createElement("div",{className:"user"},o.a.createElement("h1",{className:"user__name user__text"},e.name),o.a.createElement("p",{className:"user__username user__text"},e.username),o.a.createElement("p",{className:"user__email user__text"},e.email))};var f=function(t){var e=t.todo;return o.a.createElement("div",{className:e.completed?"todo-item":"todo-item completed"},o.a.createElement("ul",{className:"todo-item-list"},o.a.createElement("li",{className:"todo-item-list__item-status item"},e.completed?"\u2714":"\u2717",e.id),o.a.createElement("li",{className:"todo-item-list__item-article item"},e.title)),o.a.createElement(p,{user:e.user}))};var y=function(t){var e=t.todos,n=t.sortByCompleted,r=t.sortByName,a=t.sortByTitle;return o.a.createElement("div",null,o.a.createElement("button",{onClick:n,type:"button"},"Completed"),o.a.createElement("button",{onClick:r,type:"button"},"Sort by name"),o.a.createElement("button",{onClick:a,type:"button"},"Sort by title"),o.a.createElement("div",{className:"todolist"},e.map(function(t){return o.a.createElement(f,{todo:t,key:t.id})})))};function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}var E=function(){return fetch("https://jsonplaceholder.typicode.com/todos").then(function(t){return t.json()})},b=function(){return fetch("https://jsonplaceholder.typicode.com/users").then(function(t){return t.json()})};function g(t,e){return t.map(function(t){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(n,!0).forEach(function(e){Object(d.a)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},t,{user:e.find(function(e){return e.id===t.userId})})})}var v=function(t){function e(){var t,n;Object(c.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={todos:[],users:[],isLoading:!1,isLoaded:!1,hasError:!1},n.sortByCompleted=function(){n.setState(function(t){return{todos:t.todos.sort(function(t,e){return t.completed<e.completed?1:-1})}})},n.sortByName=function(){n.setState(function(t){return{todos:t.todos.sort(function(t,e){return t.user>e.user?1:-1})}})},n.sortByTitle=function(){n.setState(function(t){return{todos:t.todos.sort(function(t,e){return t.title>e.title?1:-1})}})},n.getData=function(){n.setState({todos:[],isLoading:!0,hasError:!1}),E().then(function(t){n.setState({todos:t})}),b().then(function(t){n.setState({users:t})}),Promise.all([E(),b()]).then(function(){n.setState({isLoaded:!0})}).catch(function(){n.setState({hasError:!0})}).finally(function(){n.setState({isLoading:!1})})},n}return Object(m.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this.state,e=t.todos,n=t.users,r=t.isLoading,a=t.hasError,s=t.isLoaded,c=g(e,n);return o.a.createElement("div",{className:"main"},o.a.createElement("h1",null,"Static list of todos"),o.a.createElement("p",null,o.a.createElement("span",null,"Todos: "),e.length,o.a.createElement("br",null),o.a.createElement("span",null,"Users: "),n.length),!e.length&&!n.length&&!r&&!a&&o.a.createElement("button",{type:"button",onClick:this.getData},"Load todos"),r&&o.a.createElement("div",null,o.a.createElement("span",null,"Loading...")),a&&o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null,"Error loading:("),o.a.createElement("button",{type:"button",onClick:this.getData},"You need try again")),s&&o.a.createElement(y,{todos:c,sortByCompleted:this.sortByCompleted,sortByName:this.sortByName,sortByTitle:this.sortByTitle}))}}]),e}(o.a.Component);s.a.render(o.a.createElement(v,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.93dbc36c.chunk.js.map