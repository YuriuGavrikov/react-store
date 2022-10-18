(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(24)},21:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(9),c=a.n(i),s=(a(21),a(10)),o=a(1),l=a(2),m=a(4),u=a(3),d=a(5),p=a(6),h=a(11),b=a(7),f=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"item"},n.a.createElement("img",{src:"./img/"+this.props.item.img,alt:"img"}),n.a.createElement("h2",null,this.props.item.title),n.a.createElement("b",null,this.props.item.price,"$"),n.a.createElement(b.b,{className:"delete-icon",onClick:function(){return e.props.onDelete(e.props.item.id)}}))}}]),t}(r.Component),O=function(e){var t=0;return e.orders.forEach(function(e){return t+=Number.parseFloat(e.price)}),n.a.createElement("div",null,e.orders.map(function(t){return n.a.createElement(f,{onDelete:e.onDelete,key:t.id,item:t})}),n.a.createElement("p",{className:"sum"},"\u0421\u0443\u043c\u043c\u0430: ",(new Intl.NumberFormat).format(t),"$"))},E=function(){return n.a.createElement("div",{className:"empty"},n.a.createElement("h2",null,"\u0422\u043e\u0432\u0430\u0440\u043e\u0432 \u043d\u0435\u0442"))};function g(e){var t=Object(r.useState)(!1),a=Object(h.a)(t,2),i=a[0],c=a[1];return n.a.createElement("header",null,n.a.createElement("div",null,n.a.createElement("span",{className:"logo"},"House Staff"),n.a.createElement("ul",{className:"nav"},n.a.createElement("li",null,"\u041f\u0440\u043e \u043d\u0430\u0441"),n.a.createElement("li",null,"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"),n.a.createElement("li",null,"\u041a\u0430\u0431\u0438\u043d\u0435\u0442")),n.a.createElement(b.a,{onClick:function(){return c(i=!i)},className:"shop-cart-button ".concat(i&&"active")}),i&&n.a.createElement("div",{className:"shop-cart"},e.orders.length>0?O(e):E())),n.a.createElement("div",{className:"presentation"}))}function j(){return n.a.createElement("footer",null,"\u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b \xa9")}var y=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"item"},n.a.createElement("img",{src:"./img/"+this.props.item.img,onClick:function(){return e.props.onShowItem(e.props.item)},alt:"img"}),n.a.createElement("h2",null,this.props.item.title),n.a.createElement("p",null,this.props.item.desc),n.a.createElement("b",null,this.props.item.price,"$"),n.a.createElement("div",{className:"add-to-cart",onClick:function(){return e.props.onAdd(e.props.item)}},"+"))}}]),t}(r.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("main",null,this.props.items.map(function(t){return n.a.createElement(y,{onShowItem:e.props.onShowItem,key:t.id,item:t,onAdd:e.props.onAdd})}))}}]),t}(r.Component),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={categories:[{key:"all",name:"\u0412\u0441\u0451"},{key:"chairs",name:"\u0421\u0442\u0443\u043b\u044c\u044f"},{key:"tables",name:"\u0421\u0442\u043e\u043b\u044b"},{key:"sofa",name:"\u0414\u0438\u0432\u0430\u043d\u044b"},{key:"lights",name:"\u0421\u0432\u0435\u0442"}]},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"categories"},this.state.categories.map(function(t){return n.a.createElement("div",{key:t.key,onClick:function(){return e.props.chooseCategory(t.key)}},t.name)}))}}]),t}(r.Component),w=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"full-item"},n.a.createElement("div",null,n.a.createElement("img",{src:"./img/"+this.props.item.img,onClick:function(){return e.props.onShowItem(e.props.item)},alt:"img"}),n.a.createElement("h2",null,this.props.item.title),n.a.createElement("p",null,this.props.item.desc),n.a.createElement("b",null,this.props.item.price,"$"),n.a.createElement("div",{className:"add-to-cart",onClick:function(){return e.props.onAdd(e.props.item)}},"+")))}}]),t}(r.Component),I=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={orders:[],curentItems:[],showFullItem:!1,fullItem:{},items:[{id:1,title:"\u0421\u0442\u0443\u043b \u0441\u0435\u0440\u044b\u0439",img:"chair-grey.jpeg",desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",category:"chairs",price:"49.99"},{id:2,title:"\u0421\u0442\u043e\u043b",img:"table.webp",desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",category:"tables",price:"149.99"},{id:3,title:"\u0414\u0438\u0432\u0430\u043d",img:"sofa.jpeg",desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",category:"sofa",price:"549.99"},{id:4,title:"\u041b\u0430\u043c\u043f\u0430",img:"wall-light.jpeg",desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",category:"lights",price:"25.00"},{id:5,title:"\u0421\u0442\u0443\u043b \u0431\u0435\u043b\u044b\u0439",img:"chair-white.jpeg",desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",category:"chairs",price:"49.99"}]},a.state.curentItems=a.state.items,a.addToOrder=a.addToOrder.bind(Object(p.a)(Object(p.a)(a))),a.deleteOrder=a.deleteOrder.bind(Object(p.a)(Object(p.a)(a))),a.chooseCategory=a.chooseCategory.bind(Object(p.a)(Object(p.a)(a))),a.onShowItem=a.onShowItem.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"wrapper"},n.a.createElement(g,{orders:this.state.orders,onDelete:this.deleteOrder}),n.a.createElement(k,{chooseCategory:this.chooseCategory}),n.a.createElement(v,{onShowItem:this.onShowItem,items:this.state.curentItems,onAdd:this.addToOrder}),this.state.showFullItem&&n.a.createElement(w,{item:this.state.fullItem,onShowItem:this.onShowItem,onAdd:this.addToOrder}),n.a.createElement(j,null))}},{key:"onShowItem",value:function(e){this.setState({fullItem:e}),this.setState({showFullItem:!this.state.showFullItem})}},{key:"chooseCategory",value:function(e){"all"!==e?this.setState({curentItems:this.state.items.filter(function(t){return t.category===e})}):this.setState({curentItems:this.state.items})}},{key:"deleteOrder",value:function(e){this.setState({orders:this.state.orders.filter(function(t){return t.id!==e})})}},{key:"addToOrder",value:function(e){var t=!1;this.state.orders.forEach(function(a){a.id===e.id&&(t=!0)}),t||this.setState({orders:[].concat(Object(s.a)(this.state.orders),[e])})}}]),t}(n.a.Component);c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(I,null)))}},[[12,2,1]]]);
//# sourceMappingURL=main.e5bfe5c7.chunk.js.map