(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(8),i=n.n(c),o=(n(16),n(10)),s=n(2),u=n(3),l=n(5),m=n(4),b=(n(17),n(11)),j=n(9),d=n.n(j),h=n(0),f=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.onFormSubmit=function(e){e.preventDefault(),t.props.onFormSubmit(t.state.name,t.state.number),t.setState({name:"",number:""})},t.onInputNameChange=function(e){var n=e.target.value;t.setState({name:n})},t.onInputTelChange=function(e){var n=e.target.value;t.setState({number:n})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("form",{onSubmit:this.onFormSubmit,children:[Object(h.jsx)("p",{children:"Name"}),Object(h.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",onChange:this.onInputNameChange,value:this.state.name,required:!0}),Object(h.jsx)("p",{children:" Tel"}),Object(h.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",onChange:this.onInputTelChange,value:this.state.number,required:!0}),Object(h.jsx)("button",{className:d.a.btnSubmit,type:"submit",children:"Add contact"})]})}}]),n}(a.Component);function p(t){var e=t.filter,n=t.onFilterChange;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("p",{children:"Find contacts by name"}),Object(h.jsx)("input",{type:"text",name:"find",onChange:function(t){return n(t.target.value)},value:e})]})}var O=n(6),C=n.n(O);function x(t){var e=t.contact,n=t.onDeleteContact;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("li",{className:C.a.item,children:[Object(h.jsxs)("p",{className:C.a.message,children:[e.name,": ",e.number]}),Object(h.jsx)("button",{className:C.a.btnDelete,onClick:function(t){return n(t.target.id)},id:e.id,children:"Delete"})]})})}function g(t){var e=t.contacts,n=t.onDeleteContact;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("ul",{children:e.map((function(t){return Object(h.jsx)(x,{contact:t,onDeleteContact:n},t.id)}))})})}var v=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.onFormSubmit=function(e,n){if(t.state.contacts.find((function(t){return t.name===e})))alert(e+" is already in contacts");else{var a={name:e,number:n,id:Object(b.a)()};t.setState({contacts:[a].concat(Object(o.a)(t.state.contacts))})}},t.onFilterChange=function(e){return t.setState({filter:e.toLowerCase()})},t.filter=function(){return t.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter)}))},t.onDeleteContact=function(e){var n=t.state.contacts.filter((function(t){return t.id!==e}));t.setState({contacts:n})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(f,{onFormSubmit:this.onFormSubmit})]}),Object(h.jsx)("h2",{children:"Contacts"}),Object(h.jsx)(p,{filter:this.state.filter,onFilterChange:this.onFilterChange}),Object(h.jsx)(g,{contacts:this.filter(),onDeleteContact:this.onDeleteContact})]})}}]),n}(a.Component),S=v;i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root"))},6:function(t,e,n){t.exports={btnDelete:"ContactItem_btnDelete__2F7Mh",message:"ContactItem_message__24Sy8",item:"ContactItem_item__K2LJa"}},9:function(t,e,n){t.exports={btnSubmit:"Form_btnSubmit__2tYCQ"}}},[[19,1,2]]]);
//# sourceMappingURL=main.42c7af14.chunk.js.map