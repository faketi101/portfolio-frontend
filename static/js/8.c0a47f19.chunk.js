(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[8],{76:function(e,t,a){"use strict";a.r(t);var s=a(44),n=a.n(s),r=a(46),c=a(68),i=a(47),l=a.n(i),o=a(0),u=a(69),d=(a(67),a(1)),m=function(e){return Object(d.jsx)("div",{"aos-data":"fade-up",id:"notify",children:e.text})};t.default=function(){var e=Object(o.useState)(!1),t=Object(c.a)(e,2),a=t[0],s=t[1],i=Object(o.useState)(""),p=Object(c.a)(i,2),j=p[0],b=p[1],h=function(){var e=Object(r.a)(n.a.mark((function e(t){var a,r,c,i,o,d,m,p,j;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=t.target.name.value,r=t.target.email.value,c=t.target.subject.value,i=t.target.message.value,o={name:a,from:r,subject:c,message:i},"https://coderti-server.herokuapp.com/sendmail",d=function(){return a?r?c?!!i||(b("message"),u.b.error("Message input must be filled"),!1):(b("subject"),u.b.error("Subject input must be filled"),!1):(b("email"),u.b.error("Email input must be filled"),!1):(u.b.error("Name input must be filled"),b("name"),!1)},e.prev=8,!d()){e.next=17;break}return s(!0),e.next=13,l.a.post("https://coderti-server.herokuapp.com/sendmail",o,{"Permissions-Policy":"interest-cohort=()"});case 13:m=e.sent,s(!1),t.target.reset(),200===m.status&&u.b.success("Mail has sent to Coder TI");case 17:e.next=23;break;case 19:e.prev=19,e.t0=e.catch(8),s(!1),u.b.error((null===e.t0||void 0===e.t0||null===(p=e.t0.response)||void 0===p||null===(j=p.data)||void 0===j?void 0:j.error)||"Something Went Wrong !");case 23:case"end":return e.stop()}}),e,null,[[8,19]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u.a,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1}),a?Object(d.jsx)(m,{text:"Sending mail..."}):null,Object(d.jsx)("section",{id:"contact",className:"contact",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("h1",{"data-aos":"slide-right",className:"section_heading",children:[Object(d.jsx)("span",{children:"Contact "}),"ME"]}),Object(d.jsx)("p",{"data-aos":"slide-right",children:"Email or Send a Message for me"}),Object(d.jsx)("div",{className:"card_wrapper",children:Object(d.jsxs)("div",{"data-aos":"slide-right","data-aos-delay":400,className:"card",children:[Object(d.jsx)("i",{className:"fas fa-envelope"}),Object(d.jsx)("h1",{children:"Email ME At"}),Object(d.jsx)("h6",{children:"coding.beast.404@gmail.com"})]})}),Object(d.jsxs)("form",{"data-aos":"slide-right",onSubmit:h,children:[Object(d.jsxs)("div",{className:"input_wrap",children:[Object(d.jsx)("input",{className:"name"===j?"invInput":null,type:"text",autoComplete:"none",name:"name",placeholder:"Your Name"}),Object(d.jsx)("input",{className:"email"===j?"invInput":null,type:"email",autoComplete:"none",name:"email",placeholder:"Your Email"})]}),Object(d.jsxs)("div",{className:"input_wrap_two",children:[Object(d.jsx)("input",{className:"subject"===j?"invInput":null,type:"text",autoComplete:"none",name:"subject",placeholder:"Your Subject"}),Object(d.jsx)("textarea",{className:"message"===j?"invInput":null,name:"message",cols:30,rows:10,placeholder:"Your Message",defaultValue:""})]}),Object(d.jsx)("div",{className:"btn_wrapper",children:Object(d.jsx)("button",{type:"submit",className:"btn btn_primary",children:"Send Message"})})]})]})})]})}}}]);
//# sourceMappingURL=8.c0a47f19.chunk.js.map