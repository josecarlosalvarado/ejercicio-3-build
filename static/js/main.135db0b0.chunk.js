(this.webpackJsonpejercicio3=this.webpackJsonpejercicio3||[]).push([[0],{14:function(e,t,o){},15:function(e,t,o){},18:function(e,t,o){"use strict";o.r(t);var c=o(1),a=o.n(c),l=o(8),n=o.n(l),i=(o(14),o(5)),r=(o(15),o(0));function s(e){var t=e.contacto,o=e.eliminar,c=function(e){return function(c){o(t.filter((function(t){return t.telefono!==e})))}};return Object(r.jsx)("div",{className:"row",children:t.map((function(e,t){return Object(r.jsxs)("ul",{className:"list-group mb-3 col-6",children:[Object(r.jsxs)("li",{className:"list-group-item active",children:["contacto ",t]}),Object(r.jsx)("li",{className:"list-group-item",children:e.nombre}),Object(r.jsx)("li",{className:"list-group-item",children:e.apellidos}),Object(r.jsx)("li",{className:"list-group-item",children:e.telefono}),Object(r.jsxs)("li",{className:"list-group-item",children:[e.direccion,", ",e.codigoPostal,", ",e.ciudad]}),Object(r.jsx)("li",{className:"list-group-item",children:Object(r.jsx)("button",{className:" btn btn-warning",onClick:c(e.telefono),children:"Eliminar"})})]},e.telefono)}))})}var d=o(9),u=o(4),m=o(7);function j(e){var t=e.setContactos,o=Object(c.useState)({nombre:"",apellidos:"",direccion:"",codigoPostal:"",telefono:"",ciudad:""}),a=Object(i.a)(o,2),l=a[0],n=a[1];function s(e){var t=e.target.id,o=e.target.value;n(Object(m.a)(Object(m.a)({},l),Object(u.a)({},t,o)))}return Object(r.jsxs)("form",{className:"form-group",onSubmit:function(e){e.preventDefault(),t((function(e){return[].concat(Object(d.a)(e),[l])})),e.target.reset()},children:[Object(r.jsx)("input",{className:"form-control mb-3",type:"text",value:l.nombre,id:"nombre",onChange:s,placeholder:"introduce el nombre"}),Object(r.jsx)("input",{className:"form-control mb-3",type:"text",value:l.apellidos,id:"apellidos",onChange:s,placeholder:"introduce los apellidos"}),Object(r.jsx)("input",{className:"form-control mb-3",type:"text",value:l.telefono,id:"telefono",onChange:s,placeholder:"introduce el telefono"}),Object(r.jsx)("input",{className:"form-control mb-3",type:"text",value:l.direccion,id:"direccion",onChange:s,placeholder:"introduce la direccion"}),Object(r.jsx)("input",{className:"form-control mb-3",type:"text",value:l.codigoPostal,id:"codigoPostal",onChange:s,placeholder:"introduce el codigo postal"}),Object(r.jsx)("input",{className:"form-control mb-3",type:"text",value:l.ciudad,id:"ciudad",onChange:s,placeholder:"introduce la ciudad"}),Object(r.jsx)("input",{type:"submit",className:"btn btn-warning",value:"Registrar"})]})}var b=function(){var e=Object(c.useState)([{nombre:"carlos",apellidos:"alvarado",direccion:"calle alvarez",ciudad:"Malaga",codigoPostal:"20465",telefono:"666666666"},{nombre:"Jose",apellidos:"gamez",direccion:"calle molina",ciudad:"madrid",codigoPostal:"45678",telefono:"777777777"},{nombre:"carlota",apellidos:"martinez",direccion:"calle larios",ciudad:"Malaga",codigoPostal:"87695",telefono:"888888888"}]),t=Object(i.a)(e,2),o=t[0],a=t[1];return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h2",{className:"my-4",children:"Agenda"}),Object(r.jsx)(s,{contacto:o,eliminar:a}),Object(r.jsx)("h2",{className:"my-4",children:"Formulario"}),Object(r.jsx)(j,{setContactos:a})]})};o(17);n.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.135db0b0.chunk.js.map