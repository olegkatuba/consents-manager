(this["webpackJsonpconsents-manager"]=this["webpackJsonpconsents-manager"]||[]).push([[0],{147:function(e,t,n){},148:function(e,t,n){},180:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(15),r=n.n(s),o=(n(147),n(92)),i=n(17),d=(n(148),n(7)),l=n(234),h=n(231),j=n(229),u=n(230),b=n(120),p=n(66),x=n(95),O=n.n(x),m=n(121),v=n.n(m),f=n(122),g=n(58),y=n(11),w=[{field:"status",headerName:"Status",width:150,valueFormatter:function(e){return e.value?"Accepted":"Denied"}},{field:"timestamp",headerName:"Updated at",width:200,valueFormatter:function(e){return new Date(1e3*+e.value).toLocaleString()}},{field:"updatedBy",headerName:"Updated by",width:150},{field:"settingsVersion",headerName:"Settings version",width:200}],I=Object(b.a)({container:{display:"flex",flexDirection:"column",alignItems:"center",margin:"50px"},headerTitle:{display:"flex",justifyContent:"space-between"},headerRoot:{width:"100%"},consentRoot:{display:"block",maxWidth:"900px"},consentsList:{maxHeight:"500px",maxWidth:"900px",overflow:"auto"},templateBorder:{borderLeft:"8px solid"}});var D=function(){var e=I(),t=Object(i.f)(),n=t.provider,c=t.userId,s=Object(a.useState)([]),r=Object(d.a)(s,2),o=r[0],b=r[1];return Object(a.useEffect)((function(){v.a.get("".concat("https://cmp-login.herokuapp.com/api","/consents/").concat(n,"/").concat(c)).then((function(e){return e.data})).then((function(e){b(e)})).catch((function(e){console.log(e)}))}),[n,c]),Object(y.jsx)("div",{className:e.container,children:o.map((function(t){return Object(y.jsxs)(l.a,{TransitionProps:{timeout:300},children:[Object(y.jsx)(j.a,{expandIcon:Object(y.jsx)(O.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(y.jsx)(u.a,{classes:{title:e.headerTitle,root:e.headerRoot},title:Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(p.a,{variant:"h5",children:Object(y.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://".concat(t.hostname),children:t.hostname})}),Object(y.jsxs)("span",{children:["Settings Id: ",t.settingsId]})]}),subheader:"Controller Id: ".concat(t.controllerId)})}),Object(y.jsxs)(h.a,{classes:{root:e.consentRoot},children:[Object(y.jsx)(p.a,{style:{margin:"0 16px 16px"},variant:"h5",children:"Services"}),Object(y.jsx)("div",{className:e.consentsList,children:t.templates.map((function(t){var n,a;return Object(y.jsxs)(l.a,{classes:{root:e.templateBorder},style:{borderLeftColor:(null===(n=t.consents[0])||void 0===n?void 0:n.status)?"#17855E":"#DD2E44"},children:[Object(y.jsx)(j.a,{expandIcon:Object(y.jsx)(O.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(y.jsx)(u.a,{classes:{title:e.headerTitle,root:e.headerRoot},title:Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("span",{children:null===t||void 0===t?void 0:t.dataProcessor}),(null===(a=t.consents[0])||void 0===a?void 0:a.status)?Object(y.jsx)(g.a,{style:{color:"#17855E",borderColor:"#17855E"},variant:"outlined",children:"Accepted"}):Object(y.jsx)(g.a,{style:{color:"#DD2E44",borderColor:"#DD2E44"},variant:"outlined",children:"Denied"})]}),subheader:null===t||void 0===t?void 0:t.defaultCategoryLabel})}),Object(y.jsx)(h.a,{children:Object(y.jsxs)("div",{style:{width:"100%"},children:[Object(y.jsx)(p.a,{variant:"body2",children:null===t||void 0===t?void 0:t.descriptionOfService}),Object(y.jsx)(p.a,{style:{margin:"16px 0"},variant:"h5",children:"History"}),Object(y.jsx)("div",{style:{height:370,width:"100%"},children:Object(y.jsx)(f.a,{getRowId:function(e){return e.consentId+e.timestamp},rows:t.consents,columns:w,pageSize:5,rowsPerPageOptions:[5],disableSelectionOnClick:!0})})]})})]},t.templateId)}))})]})]},t.hostname+t.settingsId)}))})};var S=function(){return Object(y.jsx)(o.a,{children:Object(y.jsx)(i.c,{children:Object(y.jsx)(i.a,{path:"/consents/:provider/:userId",children:Object(y.jsx)(D,{})})})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,236)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(S,{})}),document.getElementById("root")),C()}},[[180,1,2]]]);
//# sourceMappingURL=main.40ed2b7d.chunk.js.map