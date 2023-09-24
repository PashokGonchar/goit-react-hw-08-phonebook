"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[995],{1995:function(n,e,r){r.r(e),r.d(e,{default:function(){return L}});var t,i,o=r(9434),a=r(1634),u=r(5095),c=r.n(u),s=r(5215),l=r(3329),d=function(){var n=(0,o.I0)(),e=c()((function(e){var r=e.target.value;n((0,a.T)(r))}),500);return(0,l.jsx)(s.Z,{id:"search",name:"search",label:"Find contacts by name",variant:"standard",onChange:e})},f=r(1413),m=r(1686),x=r.n(m),b=r(2791),v=r(1134),p=r(3634),h=r(6916),j=function(n){return n.contacts.items},g=function(n){return n.contacts.isLoading},Z=function(n){return n.contacts.error},w=(0,h.P1)([j,function(n){return n.filter}],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),y=function(){var n=(0,v.cI)({defaultValues:{name:"",number:""}}),e=n.control,r=n.handleSubmit,t=n.reset,i=n.formState,a=i.errors,u=i.isSubmitSuccessful,c=(0,o.I0)(),d=(0,o.v9)(j);return b.useEffect((function(){u&&t()}),[u,t]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("form",{onSubmit:r((function(n){var e=n.name,r=n.number,t={name:e,number:r};d.some((function(n){return n.name===e}))?x().Notify.info("".concat(e," \u0432\u0436\u0435 \u0456\u0441\u043d\u0443\u0454!")):d.some((function(n){return n.number===r}))?x().Notify.info("".concat(r," \u0432\u0436\u0435 \u0454 \u0443 \u0446\u044c\u043e\u043c\u0443 \u0441\u043f\u0438\u0441\u043a\u0443 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0456\u0432!")):c((0,p.uK)(t))}),(function(n){x().Notify.warning(n)})),children:[(0,l.jsx)(v.Qr,{name:"name",control:e,render:function(n){var e,r=n.field;return(0,l.jsx)(s.Z,(0,f.Z)((0,f.Z)({},r),{},{label:"Name",variant:"outlined",size:"small",error:a.name&&!0,helperText:null===(e=a.name)||void 0===e?void 0:e.message}))}}),(0,l.jsx)(v.Qr,{name:"number",control:e,render:function(n){var e,r=n.field;return(0,l.jsx)(s.Z,(0,f.Z)((0,f.Z)({},r),{},{label:"Phone",variant:"outlined",size:"small",error:a.number&&!0,helperText:null===(e=a.number)||void 0===e?void 0:e.message}))}}),(0,l.jsx)("button",{type:"submit",variant:"outlined",children:"Add Contacts"})]})})},k=r(168),C=r(225),I=C.Z.li(t||(t=(0,k.Z)(["\n  display: flex;\n  padding: 5px;\n  margin-bottom: 5px;\n  list-style: circle;\n"]))),S=C.Z.button(i||(i=(0,k.Z)(["\n  color: #111827;\n  width: 100px;\n  margin-left: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-radius: 10px;\n  border: 1px solid #d1d5db;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  cursor: pointer;\n"]))),N=function(){var n=(0,o.I0)(),e=(0,o.v9)(w);return(0,l.jsx)("div",{children:(0,l.jsx)("ul",{children:e.map((function(e){var r=e.id,t=e.name,i=e.number;return(0,l.jsxs)(I,{children:[t,":",i,(0,l.jsx)(S,{variant:"outlined",type:"button",onClick:function(){return function(e){var r=e.id;n((0,p.GK)(r))}({id:r})},children:"Delete contact"})]},r)}))})})},_=r(4746);function F(){var n=(0,o.I0)(),e=(0,o.v9)(g),r=(0,o.v9)(Z),t=(0,o.v9)(_.Qb);return(0,b.useEffect)((function(){t&&n((0,p.yF)())}),[n,t]),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{children:"Phonebook"}),(0,l.jsx)(y,{}),(0,l.jsx)("div",{children:"Contacts"}),(0,l.jsx)(d,{}),e&&!r&&(0,l.jsx)("b",{children:"Request in progress ..."}),(0,l.jsx)(N,{})]})}function L(){return(0,l.jsx)(F,{})}}}]);
//# sourceMappingURL=995.6d19d5ad.chunk.js.map