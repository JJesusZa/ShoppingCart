(this.webpackJsonpshoppingcart=this.webpackJsonpshoppingcart||[]).push([[0],{10:function(e){e.exports=JSON.parse('{"products":[{"_id":"dress1","image":"/images/dress1.jpg","title":"Vestido de sol Midi en color gris cemento","description":"Esto es para todas las \xfaltimas tendencias, sin importar qui\xe9n seas, de d\xf3nde eres y qu\xe9 est\xe1s haciendo. Exclusiva de ASOS, nuestra marca universal est\xe1 aqu\xed para usted, y viene en todas nuestras gamas de ajuste: ASOS Curve, Tall, Petite y Maternity. Creado por nosotros, dise\xf1ado por usted.","availableSizes":["X","L","XL","XXL"],"price":300},{"_id":"dress2","image":"/images/dress2.jpg","title":"Vestido de sol Midi con frente ruched","description":"Esto es para todas las \xfaltimas tendencias, sin importar qui\xe9n seas, de d\xf3nde eres y qu\xe9 est\xe1s haciendo. Exclusiva de ASOS, nuestra marca universal est\xe1 aqu\xed para usted, y viene en todas nuestras gamas de ajuste: ASOS Curve, Tall, Petite y Maternity. Creado por nosotros, dise\xf1ado por usted.","availableSizes":["X","M","L"],"price":350},{"_id":"dress3","image":"/images/dress3.jpg","title":"Vestido midi en rosa ditsy floral","description":"Esto es para todas las \xfaltimas tendencias, sin importar qui\xe9n seas, de d\xf3nde eres y qu\xe9 est\xe1s haciendo. Exclusiva de ASOS, nuestra marca universal est\xe1 aqu\xed para usted, y viene en todas nuestras gamas de ajuste: ASOS Curve, Tall, Petite y Maternity. Creado por nosotros, dise\xf1ado por usted.","availableSizes":["X","M","L"],"price":410},{"_id":"dress4","image":"/images/dress4.jpg","title":"Vestido completo dise\xf1o lunar","description":"Esto es para todas las \xfaltimas tendencias, sin importar qui\xe9n seas, de d\xf3nde eres y qu\xe9 est\xe1s haciendo. Exclusiva de ASOS, nuestra marca universal est\xe1 aqu\xed para usted, y viene en todas nuestras gamas de ajuste: ASOS Curve, Tall, Petite y Maternity. Creado por nosotros, dise\xf1ado por usted.","availableSizes":["XL","S"],"price":299},{"_id":"dress5","image":"/images/dress5.jpg","title":"Mini vestido frill en lunares amarillos","description":"Esto es para todas las \xfaltimas tendencias, sin importar qui\xe9n seas, de d\xf3nde eres y qu\xe9 est\xe1s haciendo. Exclusiva de ASOS, nuestra marca universal est\xe1 aqu\xed para usted, y viene en todas nuestras gamas de ajuste: ASOS Curve, Tall, Petite y Maternity. Creado por nosotros, dise\xf1ado por usted.","availableSizes":["X","L","XL"],"price":350},{"_id":"dress6","image":"/images/dress6.jpg","title":"Vestido de t\xe9 Midi en mancha azul y roja","description":"Esto es para todas las \xfaltimas tendencias, sin importar qui\xe9n seas, de d\xf3nde eres y qu\xe9 est\xe1s haciendo. Exclusiva de ASOS, nuestra marca universal est\xe1 aqu\xed para usted, y viene en todas nuestras gamas de ajuste: ASOS Curve, Tall, Petite y Maternity. Creado por nosotros, dise\xf1ado por usted.","availableSizes":["XL","XXL"],"price":499.9}]}')},25:function(e,t,s){},39:function(e,t,s){"use strict";s.r(t);var a=s(1),r=s.n(a),i=s(14),c=s.n(i),n=(s(25),s(8)),o=s(2),d=s(3),l=s(5),u=s(4),j=s(10);function p(e){return"$"+Number(e.toFixed(1)).toLocaleString()+" "}var h=s(7),b=s.n(h),m=s(19),O=s.n(m),v=s(20),x=s.n(v),g=s(0),f=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).openModal=function(e){a.setState({product:e})},a.closeModal=function(){a.setState({product:null})},a.state={product:null},a}return Object(d.a)(s,[{key:"render",value:function(){var e=this,t=this.state.product;return Object(g.jsxs)("div",{children:[Object(g.jsx)(b.a,{bottom:!0,cascade:!0,children:Object(g.jsx)("ul",{className:"products",children:this.props.products.map((function(t){return Object(g.jsx)("li",{children:Object(g.jsxs)("div",{className:"product",children:[Object(g.jsxs)("a",{href:"#"+t._id,onClick:function(){return e.openModal(t)},children:[Object(g.jsx)("img",{src:t.image,alt:t.title}),Object(g.jsx)("p",{children:t.title})]}),Object(g.jsxs)("div",{className:"product-price",children:[Object(g.jsx)("div",{children:p(t.price)}),Object(g.jsx)("button",{onClick:function(){return e.props.addToCart(t)},className:"button primary",children:"Add To Cart"})]})]})},t._id)}))})}),t&&Object(g.jsx)(O.a,{isOpen:!0,onRequestClose:this.closeModal,children:Object(g.jsxs)(x.a,{children:[Object(g.jsx)("button",{className:"close-modal",onClick:this.closeModal,children:"x"}),Object(g.jsxs)("div",{className:"product-details",children:[Object(g.jsx)("img",{src:t.image,alt:t.title}),Object(g.jsxs)("div",{className:"product-details-description",children:[Object(g.jsx)("p",{children:Object(g.jsx)("strong",{children:t.title})}),Object(g.jsx)("p",{children:t.description}),Object(g.jsxs)("p",{children:["Avaiable Sizes:"," ",t.availableSizes.map((function(e){return Object(g.jsxs)("span",{children:[" ",Object(g.jsx)("button",{className:"button",children:e})]})}))]}),Object(g.jsxs)("div",{className:"product-price",children:[Object(g.jsx)("div",{children:p(t.price)}),Object(g.jsx)("button",{className:"button primary",onClick:function(){e.props.addToCart(t),e.closeModal()},children:"Add To Cart"})]})]})]})]})})]})}}]),s}(a.Component),S=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"filter",children:[Object(g.jsxs)("div",{className:"filter-sort",children:["Ordernar"," ",Object(g.jsxs)("select",{value:this.props.sort,onChange:this.props.sortProducts,children:[Object(g.jsx)("option",{children:"Novedad"}),Object(g.jsx)("option",{value:"lowest",children:"Menor precio"}),Object(g.jsx)("option",{value:"highest",children:"Mayor precio"})]})]}),Object(g.jsxs)("div",{className:"filter-size",children:["Filtrar"," ",Object(g.jsxs)("select",{value:this.props.size,onChange:this.props.filterProducts,children:[Object(g.jsx)("option",{value:"",children:"Todo"}),Object(g.jsx)("option",{value:"XS",children:"XS"}),Object(g.jsx)("option",{value:"S",children:"S"}),Object(g.jsx)("option",{value:"M",children:"M"}),Object(g.jsx)("option",{value:"L",children:"L"}),Object(g.jsx)("option",{value:"XL",children:"XL"}),Object(g.jsx)("option",{value:"XXL",children:"XXL"})]})]})]})})}}]),s}(a.Component),C=s(9),y=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).handleInput=function(e){a.setState(Object(C.a)({},e.target.name,e.target.value))},a.createOrder=function(e){e.preventDefault();var t={name:a.state.name,email:a.state.email,address:a.state.address,cartItems:a.props.cartItems};a.props.createOrder(t)},a.state={name:"",email:"",address:"",showCheckout:!1},a}return Object(d.a)(s,[{key:"render",value:function(){var e=this,t=this.props.cartItems;return Object(g.jsxs)("div",{children:[0===t.length?Object(g.jsx)("div",{className:"cart cart-header",children:"El carrito est\xe1 vacio"}):Object(g.jsxs)("div",{className:"cart cart-header",children:["Tienes ",t.length," producto en el carrito"," "]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:"cart",children:Object(g.jsx)(b.a,{left:!0,cascade:!0,children:Object(g.jsx)("ul",{className:"cart-items",children:t.map((function(t){return Object(g.jsxs)("li",{children:[Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:t.image,alt:t.title})}),Object(g.jsx)("div",{children:Object(g.jsx)("div",{children:t.title})}),Object(g.jsxs)("div",{className:"right",children:[p(t.price)," x ",t.count," ",Object(g.jsx)("button",{className:"button",onClick:function(){return e.props.removeFromCart(t)},children:"Eliminar"})]})]},t._id)}))})})}),0!==t.length&&Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:"cart",children:Object(g.jsxs)("div",{className:"total",children:[Object(g.jsxs)("div",{children:["Total:"," ",p(t.reduce((function(e,t){return e+t.price*t.count}),0))]}),Object(g.jsx)("button",{onClick:function(){e.setState({showCheckout:!0})},className:"button primary",children:"Comprar"})]})}),this.state.showCheckout&&Object(g.jsx)(b.a,{right:!0,cascade:!0,children:Object(g.jsx)("div",{className:"cart",children:Object(g.jsx)("form",{onSubmit:this.createOrder,children:Object(g.jsxs)("ul",{className:"form-container",children:[Object(g.jsxs)("li",{children:[Object(g.jsx)("label",{children:"Email"}),Object(g.jsx)("input",{name:"email",type:"email",required:!0,onChange:this.handleInput})]}),Object(g.jsxs)("li",{children:[Object(g.jsx)("label",{children:"Nombre"}),Object(g.jsx)("input",{name:"name",type:"text",required:!0,onChange:this.handleInput})]}),Object(g.jsxs)("li",{children:[Object(g.jsx)("label",{children:"Direcci\xf3n"}),Object(g.jsx)("input",{name:"address",type:"text",required:!0,onChange:this.handleInput})]}),Object(g.jsx)("li",{children:Object(g.jsx)("button",{className:"button btn1 primary",type:"submit",children:"Pagar"})})]})})})})]})]})]})}}]),s}(a.Component),N=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).createOrder=function(e){alert("Orden creada para "+e.name)},e.removeFromCart=function(t){var s=e.state.cartItems.slice(),a=!1;s.forEach((function(e){e._id===t._id&&(e.count--,a=!0)})),a||s.push(Object(n.a)(Object(n.a)({},t),{},{count:1})),e.setState({cartItems:s}),s.forEach((function(a){a.count<1&&e.setState({cartItems:s.filter((function(e){return e._id!==t._id}))})})),localStorage.setItem("cartItems",JSON.stringify(s.filter((function(e){return e._id&&e.count!==t._id&&e.count}))))},e.addToCart=function(t){var s=e.state.cartItems.slice(),a=!1;s.forEach((function(e){e._id===t._id&&(e.count++,a=!0)})),a||s.push(Object(n.a)(Object(n.a)({},t),{},{count:1})),e.setState({cartItems:s}),localStorage.setItem("cartItems",JSON.stringify(s))},e.sortProducts=function(t){var s=t.target.value;console.log(t.target.value),e.setState((function(t){return{sort:s,products:e.state.products.slice().sort((function(e,t){return"lowest"===s?e.price>t.price?1:-1:"highest"===s?e.price<t.price?1:-1:e._id<t._id?1:-1}))}}))},e.filterProducts=function(t){console.log(t.target.value),""===t.target.value?e.setState({size:t.target.value,products:j.products}):e.setState({size:t.target.value,products:j.products.filter((function(e){return e.availableSizes.indexOf(t.target.value)>=0}))})},e.state={products:j.products,cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],size:"",sort:""},e}return Object(d.a)(s,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"grid-container",children:[Object(g.jsx)("header",{children:Object(g.jsx)("a",{href:"/",children:"React Shopping Cart"})}),Object(g.jsx)("main",{children:Object(g.jsxs)("div",{className:"content",children:[Object(g.jsxs)("div",{className:"main",children:[Object(g.jsx)(S,{count:this.state.products.length,size:this.state.size,sort:this.state.sort,filterProducts:this.filterProducts,sortProducts:this.sortProducts}),Object(g.jsx)(f,{products:this.state.products,addToCart:this.addToCart})]}),Object(g.jsx)("div",{className:"sidebar",children:Object(g.jsx)(y,{cartItems:this.state.cartItems,removeFromCart:this.removeFromCart,createOrder:this.createOrder})})]})}),Object(g.jsx)("footer",{children:"All right is reserved."})]})}}]),s}(r.a.Component),I=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,40)).then((function(t){var s=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),a(e),r(e),i(e),c(e)}))};c.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(N,{})}),document.getElementById("root")),I()}},[[39,1,2]]]);
//# sourceMappingURL=main.16d1a995.chunk.js.map