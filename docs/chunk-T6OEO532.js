import{Aa as F,E as u,I as v,J as A,K as h,L as i,M as o,N as l,O as w,P as p,S as b,T as a,U as C,V as I,j as E,n as s,o as y,oa as T,s as g,t as k,w as x,wa as M,y as m,ya as D}from"./chunk-YO6GPV5N.js";function j(e,t){if(e&1&&(i(0,"option",4),a(1),o()),e&2){let f=t.$implicit;u("value",f),m(),C(f)}}var N=(()=>{let t=class t{constructor(){this.allStatus=["","active","inactive","unknown"],this.addEvent=new x}onAddAccount(c,n){console.log(c.value,n.value),this.addEvent.emit({name:c.value,status:n.value})}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s({type:t,selectors:[["app-add-account"]],outputs:{addEvent:"addEvent"},decls:12,vars:0,consts:[["newAccountName",""],["newAccountStatus",""],["type","text","id","nidhal",1,"form-control"],[1,"form-control"],[3,"value"],[1,"btn","btn-primary",3,"click"]],template:function(n,r){if(n&1){let d=w();i(0,"label"),a(1,"Account Name"),o(),l(2,"input",2,0),i(4,"label"),a(5,"Account Status"),o(),i(6,"select",3,1),A(8,j,2,2,"option",4,v),o(),i(10,"button",5),p("click",function(){g(d);let U=b(3),V=b(7);return k(r.onAddAccount(U,V))}),a(11,` Add Account
`),o()}n&2&&(m(8),h(r.allStatus))}});let e=t;return e})();var B=(()=>{let t=class t{changeStatus(c){this.oneAccount.status=c}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s({type:t,selectors:[["app-item-account"]],inputs:{oneAccount:"oneAccount"},decls:12,vars:5,consts:[[1,"itemborder"],[1,"btn","btn-success",3,"click","disabled"],[1,"btn","btn-danger",3,"click","disabled"],[1,"btn","btn-info",3,"click","disabled"]],template:function(n,r){n&1&&(i(0,"div",0)(1,"h4"),a(2),o(),l(3,"hr"),i(4,"p"),a(5),o(),i(6,"button",1),p("click",function(){return r.changeStatus("active")}),a(7," Set to 'active' "),o(),i(8,"button",2),p("click",function(){return r.changeStatus("inactive")}),a(9," Set to 'inactive' "),o(),i(10,"button",3),p("click",function(){return r.changeStatus("unknown")}),a(11," Set to 'unknown' "),o()()),n&2&&(m(2),C(r.oneAccount.name),m(3),I("This account is ",r.oneAccount.status,""),m(),u("disabled",r.oneAccount.statut=="active"),m(2),u("disabled",r.oneAccount.statut=="inactive"),m(2),u("disabled",r.oneAccount.statut=="unknown"))},styles:[".itemborder[_ngcontent-%COMP%]{border:1px solid black;margin:10px;padding:10px}"]});let e=t;return e})();function L(e,t){if(e&1&&l(0,"app-item-account",2),e&2){let f=t.$implicit;u("oneAccount",f)}}var O=(()=>{let t=class t{constructor(){this.allAccounts=[{name:"Edouard Account",status:"active"},{name:"Bruno Account",status:"inactive"}]}addAccount(c){this.allAccounts.push(c)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s({type:t,selectors:[["app-home-account"]],decls:4,vars:0,consts:[[1,"col-8"],[3,"addEvent"],[3,"oneAccount"]],template:function(n,r){n&1&&(i(0,"div",0)(1,"app-add-account",1),p("addEvent",function(S){return r.addAccount(S)}),o(),A(2,L,1,1,"app-item-account",2,v),o()),n&2&&(m(2),h(r.allAccounts))},dependencies:[N,B]});let e=t;return e})();var R=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s({type:t,selectors:[["app-intro"]],decls:8,vars:0,consts:[["routerLink","details"]],template:function(n,r){n&1&&(i(0,"p"),a(1,"Bienvenu chez Sub Module"),o(),i(2,"p"),a(3,"Voici l'exercice de la gestions des comptes :"),o(),i(4,"button",0),a(5,"Cliquez ici"),o(),l(6,"hr")(7,"router-outlet"))},dependencies:[M,D]});let e=t;return e})();var $=[{path:"",component:R,children:[{path:"details",component:O}]}],H=F.forChild($);var lt=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=y({type:t}),t.\u0275inj=E({imports:[T,H]});let e=t;return e})();export{lt as SubModule};