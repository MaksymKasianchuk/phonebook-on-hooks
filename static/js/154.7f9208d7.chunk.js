"use strict";(self.webpackChunkreact_3_phonebook=self.webpackChunkreact_3_phonebook||[]).push([[154],{5873:function(n,e,r){r.d(e,{OL:function(){return h},cw:function(){return x},eK:function(){return f},pl:function(){return g},rL:function(){return b},sX:function(){return m},zj:function(){return Z}});var t,i,o,a,d,c,l,s=r(168),u=r(9202),p=r(5705),m=(0,u.Z)(p.l0)(t||(t=(0,s.Z)(["\n    border-radius:  ","px;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-start;\n    border: 1px solid  ",";\n"])),(function(n){return n.theme.radii.cardBorderRadius}),(function(n){return n.theme.colors.border})),x=u.Z.div(i||(i=(0,s.Z)(["\n    margin-bottom: 10px;\n    width: 100%;\n    &>label{\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        align-items: flex-start;\n        &>input{\n            display: inline-block;\n\n            margin-top: 5px;\n        }\n    }\n"]))),f=(0,u.Z)(p.Bc)(o||(o=(0,s.Z)(["\n    width: 100%;\n    color: ","; \n    background-color: ",";\n    border-radius:  ","px;\n    margin-top: 5px;\n    text-align: center;\n    padding: 10px;\n    border: 1px solid  ",";\n"])),(function(n){return n.theme.colors.dangerColor}),(function(n){return n.theme.colors.dangerBg}),(function(n){return n.theme.radii.cardBorderRadius}),(function(n){return n.theme.colors.border})),h=u.Z.button(a||(a=(0,s.Z)(["\n    display: inline-block;\n    border-radius:  ","px;\n    outline: none;\n    border: 1px solid ",";\n    background: cardBgColorDarker;\n    padding: 10px 20px;\n    margin-top: 20px;\n    cursor: pointer;\n    transition: opacity 250ms linear;\n    &:hover{\n        opacity: 0.5;\n    }\n"])),(function(n){return n.theme.radii.button}),(function(n){return n.theme.colors.border})),g=u.Z.div(d||(d=(0,s.Z)(["\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    &>li{\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        &:not(:last-child){\n            margin-bottom: 10px;\n        }\n        &>p{\n            margin: 0 20px 0 0;\n            &>span{\n                font-weight: 700;\n            }\n        }\n    }\n"]))),b=u.Z.p(c||(c=(0,s.Z)(["\n    text-align: center;\n    color: ","; \n"])),(function(n){return n.theme.colors.dangerColor})),Z=u.Z.button(l||(l=(0,s.Z)(["\n    display: inline-block;\n    border-radius: ","px;\n    outline: none;\n    border: 1px solid ",";\n    background: cardBgColorDarker;\n    padding: 5px 10px;\n    cursor: pointer;\n    transition: all 250ms linear;\n    &:hover{\n        opacity: 0.5;\n        background: ",";\n    }\n"])),(function(n){return n.theme.radii.button}),(function(n){return n.theme.colors.border}),(function(n){return n.theme.colors.dangerBg}))},1214:function(n,e,r){r.d(e,{Z:function(){return s}});var t,i,o=r(168),a=r(9202),d=a.Z.section(t||(t=(0,o.Z)(["\n    padding: 40px 0;\n    margin: 40px auto;\n    background:  ",";\n    border-radius: ","px;\n    overflow: hidden;\n    padding: 30px;\n"])),(function(n){return n.theme.colors.cardBgColor}),(function(n){return n.theme.radii.cardBorderRadius})),c=a.Z.h2(i||(i=(0,o.Z)(["\n    text-align: center;\n    margin-top: 0;\n"]))),l=r(184),s=function(n){var e=n.title,r=n.children;return(0,l.jsxs)(d,{children:[e&&(0,l.jsx)(c,{children:e}),r]})}},8154:function(n,e,r){r.r(e),r.d(e,{default:function(){return b}});var t,i=r(4165),o=r(5861),a=r(2797),d=r(5984),c=r(5705),l=r(5048),s=r(9273),u=r(5873),p=r(168),m=(0,r(9202).Z)(c.l0)(t||(t=(0,p.Z)(["\n    border-radius:  ","px;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-start;\n    border: 1px solid  ",";\n"])),(function(n){return n.theme.radii.cardBorderRadius}),(function(n){return n.theme.colors.border})),x=r(184),f=function(){var n=(0,d.x0)(),e=(0,d.x0)(),r=(0,d.x0)(),t=(0,l.I0)(),p=function(){var n=(0,o.Z)((0,i.Z)().mark((function n(e,r){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t((0,s.z2)(e));case 2:r.resetForm();case 3:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),f=a.Ry().shape({name:a.Z_().required("Required"),email:a.Z_().required("Required"),password:a.Z_().required("Required")});return(0,x.jsx)(c.J9,{initialValues:{name:"",email:"",password:""},onSubmit:p,validationSchema:f,children:(0,x.jsxs)(m,{children:[(0,x.jsxs)(u.cw,{children:[(0,x.jsxs)("label",{htmlFor:n,children:["Name",(0,x.jsx)(c.gN,{type:"text",id:n,name:"name",placeholder:"Enter Name"})]}),(0,x.jsx)(u.eK,{name:"name",component:"div"})]}),(0,x.jsxs)(u.cw,{children:[(0,x.jsxs)("label",{htmlFor:e,children:["Email",(0,x.jsx)(c.gN,{type:"email",id:e,name:"email",placeholder:"mail@mail.com"})]}),(0,x.jsx)(u.eK,{name:"email",component:"div"})]}),(0,x.jsxs)(u.cw,{children:[(0,x.jsxs)("label",{htmlFor:r,children:["Password",(0,x.jsx)(c.gN,{type:"text",id:r,name:"password",placeholder:"Enter Password"})]}),(0,x.jsx)(u.eK,{name:"password",component:"div"})]}),(0,x.jsx)(u.OL,{type:"submit",children:"Register"})]})})},h=r(4169),g=r(1214),b=function(){return(0,x.jsx)(h.W,{children:(0,x.jsx)(g.Z,{title:"Registeration page",children:(0,x.jsx)(f,{})})})}}}]);
//# sourceMappingURL=154.7f9208d7.chunk.js.map