(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{183:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(187),r=n(95),l=n(185),s=r.StyleSheet.create({main:{alignSelf:"stretch",flexDirection:"row",alignItems:"stretch",justifyContent:"center",paddingTop:"70px",minHeight:"100vh",height:"auto",width:"100%",background:l.a},container:{width:"60%",display:"grid",gridTemplateColumns:"repeat(3, minmax( 33%, 220px))",gridAutoRows:"minmax(220px, 220px)",gridGap:"4px",justifyContent:"space-evenly","@media screen and (max-width: 900px)":{width:"90%",gridTemplateColumns:"repeat(2, minmax( 50%, 220px))"},"@media screen and (max-width: 480px)":{width:"94%",gridTemplateColumns:"100%"}},contactLink:{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"2.2rem",color:l.l,transition:"none",textDecoration:"none",":hover":{backgroundColor:l.g,color:l.a,transition:".8s ease-in all"}},border:{border:"solid 2px "+l.g},emails:{flexDirection:"column",alignItems:"stretch",justifyContent:"space-between",gridColumn:"1/4",gridRow:"1","@media screen and (max-width: 900px)":{gridColumn:"1/3",gridRow:"1"},"@media screen and (max-width: 480px)":{gridColumn:"1/2"}},email:{transition:"none",display:"flex",height:"50%",justifyContent:"flex-end",textAlign:"right",padding:"0 9%",alignItems:"center",fontSize:"2rem",color:l.l,textDecoration:"none",":hover":{backgroundColor:l.g,color:l.a,transition:".8s ease-in all"},"@media screen and (max-width: 900px)":{justifyContent:"center",textAlign:"center",fontSize:"1.5rem"},"@media screen and (max-width: 480px)":{fontSize:"1.2rem"}}});t.default=function(e){var t=e.location;return a.a.createElement(i.a,{location:t},a.a.createElement("main",{className:""+Object(r.css)(s.main)},a.a.createElement("div",{className:Object(r.css)(s.container)+" normal_font"},a.a.createElement("a",{className:""+Object(r.css)(s.contactLink,s.border),target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/vladimir-radovanovich-6a0313123/"},"LinkedIn"),a.a.createElement("a",{className:""+Object(r.css)(s.contactLink,s.border),rel:"noopener noreferrer",href:"skype:live:bdbe9e31ce6eb136?chat"},"Skype"),a.a.createElement("div",{className:""+Object(r.css)(s.emails,s.border)},a.a.createElement("a",{href:"mailto:vlad.radovanovich@gmail.com",className:""+Object(r.css)(s.email)},"vlad.radovanovich@gmail.com"),a.a.createElement("a",{href:"mailto:v.radovanovich@yahoo.com",className:""+Object(r.css)(s.email)},"v.radovanovich@yahoo.com")))))}},185:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"h",function(){return a}),n.d(t,"l",function(){return i}),n.d(t,"f",function(){return r}),n.d(t,"b",function(){return l}),n.d(t,"i",function(){return s}),n.d(t,"k",function(){return c}),n.d(t,"j",function(){return d}),n.d(t,"e",function(){return m}),n.d(t,"d",function(){return f}),n.d(t,"c",function(){return u}),n.d(t,"g",function(){return p});var o="#000",a=o,i="#fff",r="#1565c0",l="#d32f2f",s="#308732",c="#ffca28",d="rgba(0,0,0,0)",m="#f57c00",f="#4b0082",u="#222",p="#e0e0e0"},186:function(e,t,n){"use strict";t.a={home:"/",blog:"/blog",about:"/about",contact:"/contact",portfolio:"/portfolio"}},187:function(e,t,n){"use strict";var o,a,i,r=n(8),l=n.n(r),s=n(37),c=n.n(s),d=n(0),m=n.n(d),f=n(95),u=n(185),p=f.StyleSheet.create({root_std:{background:u.h,color:u.l,dispaly:"flex",flexGrow:1,flexDirection:"column",height:"100vh",minWidth:"100vw",position:"relative",zIndex:0,overflowY:"auto"}}),h="@media screen and (max-width: 768px)",g=f.StyleSheet.create({container:(o={justifyContent:"center",alignItems:"stretch",height:"60px"},o[h]={display:"none"},o),bgTrns:{background:u.j},bgBlack:{background:u.a},menuStylerBg:{width:"100%",position:"fixed",top:0,left:0,zIndex:1e3},btn:{display:"flex",backgroundColor:u.j,cursor:"pointer",fontSize:"1.1rem",fontWeight:"400",justifyContent:"center",alignItems:"center",minWidth:"12.25%",border:"1px solid",textDecoration:"none",color:u.l,borderColor:u.j,transition:".8s ease-in-out all",":hover":{borderColor:u.l}},mobileNav:(a={flexDirection:"column",alignItems:"stretch",overflowY:"hidden",justifyContent:"flex-start",display:"none",transition:".8s background-color"},a[h]={display:"flex"},a),mobileNav_close:{backgroundColor:u.j},mobileNav_open:{backgroundColor:u.a},mobileMenu:(i={display:"flex",flex:.8,flexDirection:"column",overflowY:"hidden",backgroundColor:u.j,alignItems:"stretch",justifyContent:"space-around",transition:".7s"},i["@media screen and (max-width: 576px) and (orientation: landscape)"]={flexDirection:"row"},i),mobileMenu_close:{minHeight:0,opacity:0},mobileMenu_open:{minHeight:"calc(100vh - 40px)",opacity:1},mobileMenuBtn_open:{display:"flex",flexGrow:.1,flexShrink:0,overflowY:"hidden",backgroundColor:u.j,cursor:"pointer",fontSize:"1.1rem",fontWeight:"400",justifyContent:"center",alignItems:"center",textDecoration:"none",border:"1px solid",color:u.l,borderColor:u.j,"@media screen and (max-width: 475px) and (orientation: landscape)":{minWidth:"95px"}},mobileMenuBtn_close:{display:"flex",flexGrow:.1,flexShrink:0,overflowY:"hidden",backgroundColor:u.j,cursor:"pointer",fontSize:"1.1rem",fontWeight:"400",justifyContent:"center",height:0,transition:".8 height",alignItems:"center",textDecoration:"none",border:"1px solid",color:u.l,borderColor:u.j},mobileMenuOpenerContainer:{display:"flex",minHeight:"40px",alignItems:"center",justifyContent:"center"},mobileMenuOpener:{backgroundColor:u.l,alignSelf:"center",borderRadius:"50px",border:"1px solid "+u.a,minWidth:"95px",justifyContent:"center",alignItems:"center",height:"22px",width:"21%"},btn_danger:{":hover":{backgroundColor:u.b}},btn_white:{":hover":{backgroundColor:u.l,color:u.a}},btn_indigo:{":hover":{backgroundColor:u.d}},btn_success:{":hover":{backgroundColor:u.i}},btn_warning:{":hover":{backgroundColor:u.k}},btn_primary:{":hover":{backgroundColor:u.f}},btn_orange:{":hover":{backgroundColor:u.e}}}),b=n(38),k=n(186),v=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={mobileNavigatorMode:!1},n.toggleMobileMenu=n.toggleMobileMenu.bind(c()(c()(n))),n.defineMobileNavStyles=n.defineMobileNavStyles.bind(c()(c()(n))),n.defineMenuStyles=n.defineMenuStyles.bind(c()(c()(n))),n.defineNavStyles=n.defineNavStyles.bind(c()(c()(n))),n.linkNavToggle=n.linkNavToggle.bind(c()(c()(n))),n.defineMobileBtnStyles=n.defineMobileBtnStyles.bind(c()(c()(n))),n}l()(t,e);var n=t.prototype;return n.toggleMobileMenu=function(){this.setState({mobileNavigatorMode:!this.state.mobileNavigatorMode})},n.defineMobileNavStyles=function(){var e=this.state.mobileNavigatorMode,t=[g.mobileNav,g.menuStylerBg,g.mobileNav_open],n=[g.mobileNav,g.menuStylerBg,g.mobileNav_close],o=e?t:n;return f.css.apply(void 0,o)},n.defineMenuStyles=function(){var e=this.state.mobileNavigatorMode,t=[g.mobileMenu,g.mobileMenu_close],n=[g.mobileMenu,g.mobileMenu_open],o=e?n:t;return f.css.apply(void 0,o)},n.defineMobileBtnStyles=function(){var e=this.state.mobileNavigatorMode,t=[g.mobileMenuBtn_close],n=[g.mobileMenuBtn_open],o=e?n:t;return f.css.apply(void 0,o)},n.defineNavStyles=function(){var e=[g.container,g.menuStylerBg,g.bgTrns],t=[g.container,g.menuStylerBg,g.bgBlack];return"/"===this.props.location.pathname?f.css.apply(void 0,e):f.css.apply(void 0,t)},n.linkNavToggle=function(e){return this.props.location===e?this.toggleMobileMenu():null},n.render=function(){var e=this,t=[g.btn,g.btn_indigo],n=[g.btn,g.btn_primary],o=[g.btn,g.btn_success],a=[g.btn,g.btn_orange],i=[g.btn,g.btn_warning];return m.a.createElement(d.Fragment,null,m.a.createElement("nav",{className:""+this.defineNavStyles()},m.a.createElement(b.Link,{to:k.a.home,state:{terminalNoShow:!0},className:"normal_font "+f.css.apply(void 0,t)},"Home"),m.a.createElement(b.Link,{to:k.a.portfolio,className:"normal_font "+f.css.apply(void 0,n)},"Portfolio"),m.a.createElement(b.Link,{to:k.a.blog,className:"normal_font "+f.css.apply(void 0,o)},"Blog"),m.a.createElement(b.Link,{to:k.a.about,className:"normal_font "+f.css.apply(void 0,a)},"About"),m.a.createElement(b.Link,{to:k.a.contact,className:"normal_font "+f.css.apply(void 0,i)},"Contact")),m.a.createElement("nav",{className:""+this.defineMobileNavStyles()},m.a.createElement("div",{className:""+this.defineMenuStyles()},m.a.createElement(b.Link,{onClick:function(){return e.linkNavToggle(k.a.home)},to:k.a.home,state:{terminalNoShow:!0},className:"normal_font "+this.defineMobileBtnStyles()},"Home"),m.a.createElement(b.Link,{onClick:function(){return e.linkNavToggle(k.a.portfolio)},to:k.a.portfolio,className:"normal_font "+this.defineMobileBtnStyles()},"Portfolio"),m.a.createElement(b.Link,{onClick:function(){return e.linkNavToggle(k.a.blog)},to:k.a.blog,className:"normal_font "+this.defineMobileBtnStyles()},"Blog"),m.a.createElement(b.Link,{onClick:function(){return e.linkNavToggle(k.a.about)},to:k.a.about,className:"normal_font "+this.defineMobileBtnStyles()},"About"),m.a.createElement(b.Link,{onClick:function(){return e.linkNavToggle(k.a.contact)},to:k.a.contact,className:"normal_font "+this.defineMobileBtnStyles()},"Contact")),m.a.createElement("div",{className:""+Object(f.css)(g.mobileMenuOpenerContainer)},m.a.createElement("button",{onClick:function(){return e.toggleMobileMenu()},className:""+Object(f.css)(g.mobileMenuOpener)},"Open menu"))))},t}(d.Component),y="1px solid "+u.l,x=f.StyleSheet.create({container:{background:u.h,color:u.l,dispaly:"flex",flexGrow:1,border:y,flexDirection:"column",height:"37vh",minWidth:"40vw",maxWidth:"600px",maxHeight:"300px",position:"fixed",bottom:0,zIndex:5,"@media screen and (max-width: 600px)":{minWidth:"100vw",transition:"none"}},terminal_open:{right:0},terminal_close:{right:"-200vh",transition:"1.8s linear all",opacity:0,opinterEvents:"none"},terminalTaskbar:{display:"flex",justifyContent:"space-between",alignItems:"stretch",minWidth:"100%",minHeight:"25px",padding:"0 5px",borderBottom:y},terminalTaskbarBtn:{display:"inline-flex",flex:".03",lineHeight:"1.4em",alignItems:"center",cursor:"pointer"},fsIcon:{fontSize:"1.4em"},fsTitle:{fontSize:".8em",letterSpacing:"2px",whiteSpace:"pre"},terminalViewportContainer:{flex:1,flexDirection:"column",justifyContent:"flex-start",overflowY:"auto"},terminalViewport:{width:"100%",height:"auto",padding:"6px",maxHeight:"100%",overflowY:"auto",wordWrap:"break-word",whiteSpace:"pre-wrap"},terminalMsgMe:{marginBottom:"5px",":before":{content:"'<vlad_rdv>: '",color:u.k}},terminalMsgSystem:{marginBottom:"5px",":before":{content:"'[ [SYSTEM] ]: '",color:u.i}},terminalMsgDefault:{marginBottom:"5px",":before":{content:"'<guest>: '",color:u.d}}}),w=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isOnscreen:!0,messages:[{from:"system",txt:"Loading..."},{from:"me",txt:"Hi,I'm glad you made it here. Feel free to look around :)"}]},n.defineTermilalPosition=n.defineTermilalPosition.bind(c()(c()(n))),n.toggleTerminal=n.toggleTerminal.bind(c()(c()(n))),n.defineMsgStyle=n.defineMsgStyle.bind(c()(c()(n))),n.renderMessages=n.renderMessages.bind(c()(c()(n))),n}l()(t,e);var n=t.prototype;return n.toggleTerminal=function(){this.setState({isOnscreen:!this.state.isOnscreen})},n.defineTermilalPosition=function(){var e=[x.container,x.terminal_open],t=[x.container,x.terminal_close];return this.state.isOnscreen?f.css.apply(void 0,e):f.css.apply(void 0,t)},n.renderMessages=function(){var e=this;return this.state.messages.map(function(t,n){return m.a.createElement("p",{id:"msg_"+t.from+"_"+n,key:"msg_"+t.from+"_"+n,className:""+e.defineMsgStyle(t.from)},t.txt)})},n.defineMsgStyle=function(e,t){switch(e){case"me":return Object(f.css)(x.terminalMsgMe);case"system":return Object(f.css)(x.terminalMsgSystem);default:return Object(f.css)(x.terminalMsgDefault)}},n.render=function(){var e=this;return m.a.createElement("aside",{className:"terminal "+this.defineTermilalPosition()},m.a.createElement("div",{className:""+Object(f.css)(x.terminalTaskbar)},m.a.createElement("span",{onClick:function(){return e.toggleTerminal()},className:""+Object(f.css)(x.terminalTaskbarBtn,x.fsIcon)},"☒"),m.a.createElement("span",{className:"normal_font "+Object(f.css)(x.terminalTaskbarBtn,x.fsTitle)},"Terminal v0.1.2")),m.a.createElement("div",{className:""+Object(f.css)(x.terminalViewportContainer)},m.a.createElement("div",{className:""+Object(f.css)(x.terminalViewport)},this.renderMessages())))},t}(d.Component),M=f.StyleSheet.create({container:{display:"block",background:u.j,overflow:"hidden",position:"absolute",height:"100vh",width:"100vw",zIndex:-1},path:{willChange:"stroke-dashoffset",animationName:{"0%":{strokeOpacity:.8},"50%":{strokeDashoffset:0,strokeOpacity:1}},animationDuration:"20s",animationIterationCount:"infinite",animationTimingFunction:"ease-in"},delay_10:{animationDelay:"10s"},delay_12:{animationDelay:"8s"},delay_16:{animationDelay:"12s"},delay_20:{animationDelay:"14s"},delay_22:{animationDelay:"18s"},delay_26:{animationDelay:"16s"}}),S=[M.container],N=[M.path],E=function(){return m.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:""+f.css.apply(void 0,S),version:"1.1",x:"0",y:"0",viewBox:"0 0 800 600",preserveAspectRatio:"none"},m.a.createElement("defs",null,m.a.createElement("path",{id:"d1",fill:"none",strokeWidth:2,strokeOpacity:.4,stroke:"#222",d:"M0 500h100l50 100"}),m.a.createElement("path",{id:"c1",fill:"none",strokeWidth:2,className:""+f.css.apply(void 0,N.concat([M.delay_20])),fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:1,strokeDasharray:"1200 1200",strokeDashoffset:3e3,stroke:u.b,d:"M0 500h100l50 100"}),m.a.createElement("path",{id:"d2",fill:"none",strokeWidth:2,strokeOpacity:.4,stroke:"#222",d:"M800 500H700l-50 100"}),m.a.createElement("path",{id:"c2",fill:"none",strokeWidth:2,className:""+f.css.apply(void 0,N.concat([M.delay_12])),fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:1,strokeDasharray:"1200 1200",strokeDashoffset:3e3,stroke:u.f,d:"M800 500H700l-50 100"}),m.a.createElement("path",{id:"d3",fill:"none",strokeWidth:2,strokeOpacity:.4,stroke:"#222",d:"M0 100h100L150 0"}),m.a.createElement("path",{id:"c3",fill:"none",strokeWidth:2,className:""+f.css.apply(void 0,N.concat([M.delay_16])),fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:1,strokeDasharray:"1200 1200",strokeDashoffset:3e3,stroke:u.d,d:"M0 100h100L150 0"}),m.a.createElement("path",{id:"d4",fill:"none",strokeWidth:2,strokeOpacity:.4,stroke:"#222",d:"M800 100H700L650 0"}),m.a.createElement("path",{id:"c4",fill:"none",strokeWidth:2,className:""+f.css.apply(void 0,N.concat([M.delay_26])),fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:1,strokeDasharray:"1200 1200",strokeDashoffset:3e3,stroke:u.k,d:"M800 100H700L650 0"}),m.a.createElement("path",{id:"eLeft",fill:"none",strokeWidth:2,strokeOpacity:.4,stroke:"#222",d:"M0 150l30 50v200L0 450"}),m.a.createElement("path",{id:"fLeft",fill:"none",strokeWidth:2,className:""+f.css.apply(void 0,N.concat([M.delay_22])),fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:1,strokeDasharray:"1200 1200",strokeDashoffset:3e3,stroke:u.i,d:"M0 150l30 50v200L0 450"}),m.a.createElement("path",{id:"eRight",fill:"none",strokeWidth:2,strokeOpacity:.4,stroke:"#222",d:"M800 150l-30 50v200l30 50"}),m.a.createElement("path",{id:"fRight",fill:"none",strokeWidth:2,className:""+f.css.apply(void 0,N.concat([M.delay_10])),fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:1,strokeDasharray:"1200 1200",strokeDashoffset:3e3,stroke:u.i,d:"M800 150l-30 50v200l30 50"})),m.a.createElement("g",{fill:"none",fillRule:"evenodd"},m.a.createElement("use",{xlinkHref:"#c1"}),m.a.createElement("use",{xlinkHref:"#d1"}),m.a.createElement("use",{xlinkHref:"#c2"}),m.a.createElement("use",{xlinkHref:"#d2"}),m.a.createElement("use",{xlinkHref:"#c3"}),m.a.createElement("use",{xlinkHref:"#d3"}),m.a.createElement("use",{xlinkHref:"#c4"}),m.a.createElement("use",{xlinkHref:"#d4"}),m.a.createElement("use",{xlinkHref:"#eLeft"}),m.a.createElement("use",{xlinkHref:"#fLeft"}),m.a.createElement("use",{xlinkHref:"#eRight"}),m.a.createElement("use",{xlinkHref:"#fRight"})))},_=[p.root_std],C=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={},n.restrictShowup=n.restrictShowup.bind(c()(c()(n))),n.defineShowupPermission=n.defineShowupPermission.bind(c()(c()(n))),n}l()(t,e);var n=t.prototype;return n.restrictShowup=function(){this.setState({showTerminal:!1})},n.defineShowupPermission=function(){var e=this.props.location;return void 0===e||(void 0===e.state||null===e.state||!e.state.terminalNoShow)},n.render=function(){var e=this.props,t=e.children,n=e.location;return m.a.createElement("div",{id:"my_root",className:""+f.css.apply(void 0,_),style:{direction:"ltr"}},m.a.createElement(v,{location:n}),"/"===n.pathname&&m.a.createElement(E,null),t,"/"===n.pathname&&this.defineShowupPermission()&&m.a.createElement(w,{restrictShowup:this.restrictShowup,location:n}))},t}(d.Component);t.a=C}}]);
//# sourceMappingURL=component---src-pages-contact-jsx-c4fb6c78c4225fd646a6.js.map