(this["webpackJsonptodo-app-react"]=this["webpackJsonptodo-app-react"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(3),r=n.n(c),i=n(4),l=n(5),d=n(1),u=n(7),h=n(6);var m=function(e){return o.a.createElement("div",{className:"todo-item"},o.a.createElement("input",{type:"checkbox",checked:e.item.completed,onChange:function(){return e.handleChange(e.item.id)}}),o.a.createElement("p",{style:e.item.completed?{fontStyle:"italic",color:"grey",textDecoration:"line-through"}:null},e.item.text))},p=[{id:1,text:"Take out the trash",completed:!0},{id:2,text:"Grocery Shopping",completed:!1},{id:3,text:"Clean geko tank",completed:!1},{id:4,text:"Mow lawn",completed:!0},{id:5,text:"Catch up on Arrested Development",completed:!1}],s=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={todos:p},e.handleChange=e.handleChange.bind(Object(d.a)(e)),e}return Object(l.a)(n,[{key:"handleChange",value:function(e){this.setState((function(t){return{todos:t.todos.map((function(t){return t.id==e&&(t.completed=!t.completed),t}))}}))}},{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t){return o.a.createElement(m,{key:t.id,item:t,handleChange:e.handleChange})}));return o.a.createElement("div",{className:"todo-list"},t)}}]),n}(o.a.Component);n(13);r.a.render(o.a.createElement(s,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.2f8d59f0.chunk.js.map