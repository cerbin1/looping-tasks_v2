(this["webpackJsonplooping-tasks_v2"]=this["webpackJsonplooping-tasks_v2"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=n(7),o=n.n(i),s=(n(13),n(14),n(15),n(1)),c=n(2),r=n(4),m=n(3),k=n(5),d=function(e){return l.a.createElement("div",{className:e.isClicked?"btn btn-block btn-success":"btn btn-block btn-danger",onClick:function(){return e.setElementClicked(e.index)}},e.name)},u=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(r.a)(this,Object(m.a)(t).call(this,e))).setElementClicked=function(e){var t=n.state.elements;t[e].isClicked=!t[e].isClicked,n.setState({elements:t})},n.allElementsClicked=function(){return n.state.elements.every((function(e){return e.isClicked}))},n.state=e,n}return Object(k.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-10 offset-1 text-center"},l.a.createElement("h1",{style:{color:this.allElementsClicked()?"green":"red"}},this.state.name))),null==this.state.links?null:l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-10 offset-1 text-center alert alert-primary"},l.a.createElement("a",{className:"alert-link",rel:"noopener noreferrer",target:"_blank",href:this.state.links.link},this.state.links.name))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"btn-group-vertical col-xl-10 offset-1"},this.state.elements.map((function(t,n){return l.a.createElement(d,{setElementClicked:e.setElementClicked,index:n,key:n,name:t.name,isClicked:t.isClicked})})))))}}]),t}(a.Component),C=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,l=new Array(a),i=0;i<a;i++)l[i]=arguments[i];return(n=Object(r.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={tasks:[{name:"Organizacja notatek",links:null,elements:[{name:"Docs Quick",isClicked:!1},{name:"Telefon notatki",isClicked:!1},{name:"Todoist Skrzynka odbiorcza",isClicked:!1},{name:"Todoist Skrzynka odbiorcza",isClicked:!1}]},{name:"Backup Soft",links:{name:"Google backup",link:"Google https://takeout.google.com/settings/takeout"},elements:[{name:"Google Calendar",isClicked:!1},{name:"Google Chrome (Bookmarks)",isClicked:!1},{name:"Google Drive (Notes)",isClicked:!1}]},{name:"Backup Hard",links:{name:"Google backup",link:"Google https://takeout.google.com/settings/takeout"},elements:[{name:"OneNote ca\u0142y notatnik jako doc",isClicked:!1},{name:"Folder Documents (Ubuntu)",isClicked:!1},{name:"Folder Dane (Dysk D)",isClicked:!1},{name:"Chrome Passwords Export",isClicked:!1},{name:"Google Calendar",isClicked:!1},{name:"Google Chrome (all)",isClicked:!1},{name:"Google Contacts",isClicked:!1},{name:"Google Drive",isClicked:!1},{name:"Google Mail",isClicked:!1}]}]},n}return Object(k.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},this.state.tasks.map((function(e,t){return l.a.createElement(u,{key:t,name:e.name,elements:e.elements,links:e.links})})))}}]),t}(a.Component);var h=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.6071ec80.chunk.js.map