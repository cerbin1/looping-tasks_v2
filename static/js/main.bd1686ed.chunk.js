(this["webpackJsonplooping-tasks_v2"]=this["webpackJsonplooping-tasks_v2"]||[]).push([[0],{22:function(e,a,t){e.exports=t(35)},27:function(e,a,t){},29:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(19),s=t.n(o),l=(t(27),t(28),t(29),t(7)),c=t(9),r=t(11),m=t(10),k=t(12),d=function(e){return i.a.createElement("div",{className:e.isClicked?"btn btn-block btn-success":"btn btn-block btn-danger",onClick:function(){return e.setElementClicked(e.index)}},e.name)},u=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(r.a)(this,Object(m.a)(a).call(this,e))).setElementClicked=function(e){var a=t.state.elements;a[e].isClicked=!a[e].isClicked;var n=t.state.index;t.setState({elements:a,index:++n})},t.allElementsClicked=function(){return t.state.elements.every((function(e){return e.isClicked}))},t.autoClickNextElement=function(){if(!t.allElementsClicked()){var e=t.state.elements,a=t.state.index;e[a].isClicked=!0,t.setState({elements:e,index:++a})}},t.handleSpaceBarClick=function(e){32===e.keyCode&&t.autoClickNextElement()},t.state={name:e.name,elements:e.elements,links:e.links,index:0},t}return Object(k.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleSpaceBarClick,!1)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("hr",null),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col text-center mb-1"},i.a.createElement("button",{className:"btn btn-success btn-lg",onClick:this.autoClickNextElement},"Done"))),null==this.state.links?null:i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-xl-10 offset-1 text-center alert alert-primary"},this.state.links.map((function(a,t){return i.a.createElement("a",{className:"alert-link",target:"_blank",rel:"noopener noreferrer",key:t,href:a.link},a.name," ",t<e.state.links.length-1?"||":""," ")})))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"btn-group-vertical col-xl-10 offset-1"},this.state.elements.map((function(a,t){return i.a.createElement(d,{setElementClicked:e.setElementClicked,index:t,key:t,name:a.name,isClicked:a.isClicked})})))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-xl-10 offset-1 text-center"},i.a.createElement("h2",{style:{color:this.allElementsClicked()?"green":"red"}},this.state.name))))}}]),a}(n.Component),z=t(13),p=t(5),y=function e(){Object(l.a)(this,e)};y.taskData=[{name:"Porz\u0105dki",links:[{name:"Quick Notes",link:"https://docs.google.com/document/d/1lKqrQYRtmsOP9UGHxnAQOOw01lfaMSjDvesVK4l-8wo/edit#heading=h.enryj93vpczc"},{name:"Google Drive",link:"https://drive.google.com/drive/my-drive"}],elements:["Organizacja maila g\u0142\xf3wnego","Organizacja maila prywatnego","Utworzy\u0107 taski z Make Notes","Quick Notes","Notatki w telefonie","Google Drive"]},{name:"Backup Soft",links:[{name:"Google backup",link:"https://takeout.google.com/settings/takeout"}],elements:["[Google] Calendar","[Google] Chrome (Bookmarks)","[Google] Drive (Notes)","Uruchomi\u0107 automatyzacj\u0119 (alias a3)","Wypakowa\u0107 backup googla do folderu","Wyci\u0105\u0107 ca\u0142y folder na zewn\u0119trzny dysk"]},{name:"Backup Hard",links:[{name:"Google backup",link:"https://takeout.google.com/settings/takeout"}],elements:["OneNote ca\u0142y notatnik jako doc","Folder Documents (Ubuntu)","Folder Dane (Dysk D)","[Google] Calendar","[Google] Chrome (all)","[Google] Contacts","[Google] Drive","[Google] Mail"]},{name:"Nowy miesi\u0105c: Biznes",links:[{name:"Pr\u0105d",link:"https://logowanie.tauron.pl/"},{name:"PKO",link:"https://www.ipko.pl//"},{name:"mBank",link:"https://online.mbank.pl/pl/Login"},{name:"Alior",link:"https://system.aliorbank.pl/sign-in"},{name:"Sheet",link:"https://docs.google.com/spreadsheets/d/1RS4WCPEqILRgId3JlfXZuRd_f6kWZtYg1hzfhM8Y4n8/edit#gid=963549029"}],elements:["Zapisa\u0107 wszystkie dochody","Aktualizacja arkusza z cyklicznymi p\u0142atno\u015bciami","Zap\u0142aci\u0107 czynsz na nast\u0119pny miesi\u0105c i wpisa\u0107 do arkusza kwot\u0119","Op\u0142aci\u0107 wydatki sta\u0142e (media, abonamenty, kredyty). Pobra\u0107 faktury i potwierdzenia i zapisa\u0107 kwoty","Przekaza\u0107 X na pomoc albo przekaza\u0107 na co\u015b dla R","Uzupe\u0142ni\u0107 wydatki zmienne z apki","Zaktualizowa\u0107 kwoty w arkuszu Oszcz\u0119dno\u015bci po op\u0142aceniu wszystkiego","Zapisa\u0107 zsumowan\u0105 kwot\u0119 na start kolejnego miesi\u0105ca","Przeanalizowa\u0107 ostatni miesi\u0105c"]},{name:"Nowy miesi\u0105c: TODO",links:[{name:"Sheets",link:"https://docs.google.com/spreadsheets/d/1RS4WCPEqILRgId3JlfXZuRd_f6kWZtYg1hzfhM8Y4n8/edit#gid=82903271/"}],elements:["Skopiowa\u0107 dwie pierwsze kolumny","Zmieni\u0107 nazw\u0119 miesi\u0105ca","Zmieni\u0107 kolor drugiej kolumny na czarny","Insert daty i ustawienie na 1 dzie\u0144","Pierwszy dzie\u0144 zaznaczy\u0107 oraz: pogrubi\u0107 | zastosowa\u0107 skr\xf3t do daty | Format -> Rotation -> Rotate up","Przeci\u0105gn\u0105\u0107 dni do ko\u0144ca miesi\u0105ca","Przeci\u0105gn\u0105\u0107 wz\xf3r do ko\u0144ca miesi\u0105ca","Skopiowa\u0107 nie zaznaczony checkbox z kt\xf3rego\u015b pola","Zaznaczy\u0107 z ctrl wszystkie puste pola","Wklei\u0107 wcze\u015bniej zaznaczonego checkboxa","Uruchomi\u0107 automatyzacj\u0119 do pythona (alias a1)","Wstawi\u0107 formatowanie dat i checkbox\xf3w (kolory: green, cornflower blue, red, 2x green, red)","Ukry\u0107 wiersze z czynno\u015bci za poprzedni miesi\u0105c","Ustawi\u0107 kolor kolumny ze wzorem na bia\u0142y","Instrukcje z ko\u0144ca co do formatowania przekopiowa\u0107 ni\u017cej \u017ceby nie przeszkadza\u0142y"]},{name:"Nowy miesi\u0105c: Trening",links:[{name:"Sheets",link:"https://docs.google.com/spreadsheets/d/1RS4WCPEqILRgId3JlfXZuRd_f6kWZtYg1hzfhM8Y4n8/edit#gid=568847193/"}],elements:["Wpisa\u0107 nowy miesi\u0105c i pogrubi\u0107","Insert daty i ustawienie na 1 dzie\u0144 miesi\u0105ca","Sformatowa\u0107 dat\u0119 u\u017cywaj\u0105c p\u0119dzla i daty poprzedniej","Wstawi\u0107 obok pusty checkbox","Przeci\u0105gn\u0105\u0107 dat\u0119 i checkbox do ko\u0144ca miesi\u0105ca","Uruchomi\u0107 automatyzacj\u0119 do pythona (alias a2)","Wstawi\u0107 formu\u0142\u0119 do dni i przeci\u0105gn\u0105\u0107 do ko\u0144ca miesi\u0105ca","Wstawi\u0107 formu\u0142y zliczaj\u0105ce","Zapisa\u0107 z kartki czasy orbitreka","Szybka analiza miesi\u0105ca","Ukry\u0107 rekordy z poprzedniego miesi\u0105ca"]},{name:"Comiesi\u0119czne czynno\u015bci",links:[{name:"Sheets Szekle",link:"https://docs.google.com/spreadsheets/d/1u4sHO-mkux9d0xELt6XRo3IVpdoQrDb0cvN-U4ZQZ-E/edit#gid=931574800"},{name:"Zapasy",link:"https://keep.google.com/u/0/#LIST/1znx8gChS7FADNMPx1f41echWRGtwrI9Z_w4qoZHy-QYVOdWp-3cldAn2gGERcw"},{name:"Docs",link:"https://docs.google.com/document/d/1lKqrQYRtmsOP9UGHxnAQOOw01lfaMSjDvesVK4l-8wo/edit#heading=h.b36bz1pk3gth"}],elements:["Przebada\u0107 si\u0119 (p i j)","Przetestowa\u0107 czujki","[w sezonie] Sprawdzi\u0107 luzy i stan \u015brub w hulajnodze, dopompowa\u0107 d\u0119tki","Zrobi\u0107 wszystkie punkty z konserwacji orbitreka z instrukcji","Zaaplikowa\u0107 s\xf3l do zmywarki (1 kg/do pe\u0142na)","Przemy\u0107 szafki z kurzu","[w sezonie] Odkurzy\u0107 laser w od\u015bwie\u017caczu i wymieni\u0107 bawe\u0142nian\u0105 owijk\u0119","Kupi\u0107 potrzebne rzeczy z docsa (link 1)","Kupi\u0107 suplementy/kosmetyki/inne rzeczy, kt\xf3re si\u0119 sko\u0144czy\u0142y (link 2)","Organizacja Temp Docs (link 3)","Zaktualizowa\u0107 list\u0119 (todoist i onenote)","Pami\u0119tnik uzupe\u0142ni\u0107"]}];var g=y,h=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=Object(r.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).state={homePage:"Strona g\u0142\xf3wna",homePageText:"Wybierz zadanie do zrobienia",tasks:t.getTasksData()},t}return Object(k.a)(a,e),Object(c.a)(a,[{key:"convertToTaskElements",value:function(e){return e.map((function(e){return{name:e,isClicked:!1}}))}},{key:"getTasksData",value:function(){var e=this,a=[];return g.taskData.forEach((function(t,n){a.push({id:n,name:t.name,links:t.links,elements:e.convertToTaskElements(t.elements)})})),a}},{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement(z.a,null,i.a.createElement("div",null,i.a.createElement("nav",null,i.a.createElement("h1",null,i.a.createElement(z.b,{to:"/"},this.state.homePage)),i.a.createElement("hr",null),this.state.tasks.map((function(e){return i.a.createElement("h2",{key:e.id},i.a.createElement(z.b,{to:"/"+e.id},e.name))}))),i.a.createElement(p.c,null,i.a.createElement(p.a,{exact:!0,path:"/"},i.a.createElement("p",null,this.state.homePageText)),this.state.tasks.map((function(e){return i.a.createElement(p.a,{key:e.id,exact:!0,path:"/"+e.id,component:function(){return i.a.createElement(u,{name:e.name,elements:e.elements,links:e.links})}})}))))))}}]),a}(n.Component);var w=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.bd1686ed.chunk.js.map