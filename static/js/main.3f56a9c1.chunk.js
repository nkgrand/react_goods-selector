(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(3),n=c.n(s),o=c(7),a=c(4),r=c(5),l=c(9),d=c(8),i=c(1),u=c.n(i),h=(c(14),c(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic","Banana"],j=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(a.a)(this,c);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={selectedGoods:["Jam"]},e.addGood=function(t){var c=e.state.selectedGoods;e.setState({selectedGoods:[].concat(Object(o.a)(c),[t])})},e.removeGood=function(t){var c=e.state.selectedGoods;e.setState({selectedGoods:c.filter((function(e){return e!==t}))})},e.showSelectedGoods=function(){var t=e.state.selectedGoods;switch(t.length){case 0:return"No goods selected";case 1:return"".concat(t[0]," is selected");case 2:return"".concat(t[0]," and ").concat(t[1]," are selected");default:return"".concat(t.slice(0,-1).join(", ")," and ").concat(t[t.length-1]," are selected")}},e.clearBusket=function(){e.setState({selectedGoods:[]})},e}return Object(r.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGoods;return console.log(t.length),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{className:"title",children:this.showSelectedGoods()}),t.length>0?Object(h.jsx)("button",{type:"button",className:"btn btn__clear",onClick:this.clearBusket,children:"Clear all"}):"",Object(h.jsx)("ul",{className:"list",children:b.map((function(c){return Object(h.jsxs)("li",{className:"list__item",children:[c,Object(h.jsx)("button",{type:"button",className:"btn",onClick:t.includes(c)?function(){return e.removeGood(c)}:function(){return e.addGood(c)},children:t.includes(c)?"Remove":"Add"},c)]},c)}))})]})}}]),c}(u.a.Component);n.a.render(Object(h.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.3f56a9c1.chunk.js.map