(this.webpackJsonpactitime=this.webpackJsonpactitime||[]).push([[0],[,,,,,,function(e,a,t){},,,function(e,a,t){e.exports=t.p+"static/media/icn_logo.efd69f38.svg"},function(e,a,t){e.exports=t.p+"static/media/icn_burger.d86695ad.svg"},function(e,a,t){e.exports=t.p+"static/media/icn_close.e76f12b2.svg"},function(e,a,t){e.exports=t.p+"static/media/icn_logo_white.1a746d07.svg"},,function(e,a,t){e.exports=t.p+"static/media/icn_arrow_link.c3cfed1b.svg"},function(e,a,t){e.exports=t.p+"static/media/icn_arrow_right.d361c9b9.svg"},function(e,a,t){e.exports=t.p+"static/media/icn_arrow_down.fba9ba16.svg"},function(e,a,t){e.exports=t(53)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,,,,,,,,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(3),l=t.n(c),i=(t(6),t(4)),s=(t(22),t(9)),o=t.n(s),m=t(10),u=t.n(m),d=t(11),v=t.n(d),_=function(e){var a=e.nav,t=Object(n.useState)(!1),c=Object(i.a)(t,2),l=c[0],s=c[1];return r.a.createElement("div",null,r.a.createElement(N,null,r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__column"},r.a.createElement("img",{src:o.a,alt:""}),r.a.createElement("div",{className:"header__nav"},r.a.createElement(C,{nav:a}))),r.a.createElement("div",{className:"header__column"},r.a.createElement(y,null,"Sign Up"),r.a.createElement("img",{onClick:function(){return s(!l)},src:l?v.a:u.a,alt:"",className:"header__burger"})))),l&&r.a.createElement("div",{className:"header__sub"},r.a.createElement(O,{nav:a})))},f=(t(23),function(e){var a=e.slider_cards;return r.a.createElement("div",{className:"hero"},r.a.createElement(N,null,r.a.createElement("div",{className:"hero__row"},r.a.createElement(S,{title:"Features",excerpt:"Some of the features and advantages that we provide for those of you who store data in this Data Warehouse."})),r.a.createElement("div",{className:"hero__row hero__row--slider"},r.a.createElement(k,{cards:a}))))}),h=(t(24),t(12)),E=t.n(h),p=function(e){var a=e.nav;return r.a.createElement("footer",null,r.a.createElement(N,null,r.a.createElement("div",{className:"grid"},r.a.createElement("div",{className:"grid__column"},r.a.createElement("img",{src:E.a,alt:""})),r.a.createElement("div",{className:"grid__column grid__column--nav"},r.a.createElement(W,{nav:a})),r.a.createElement("div",{className:"grid__column grid__column--big"},r.a.createElement(B,null),r.a.createElement("div",{className:"footer__button"},r.a.createElement(y,{className:"button__footer"},"Sign Up Now"))))))},N=(t(25),function(e){var a=e.children;return r.a.createElement("div",{className:"container"},a)}),b=t(13),g=t.n(b),w=(t(41),function(e){var a=e.card,t=e.latest;return r.a.createElement("div",{className:"slider-card"},r.a.createElement("div",{className:"slider-card__card"},r.a.createElement("div",{className:"slider-card__content"},r.a.createElement("div",{className:"slider-card__row"},t&&r.a.createElement("span",{className:"slider-card__new"},"new"),r.a.createElement("span",{className:"slider-card__id"},a.id),r.a.createElement("h3",{className:"slider-card__title"},a.name),r.a.createElement("p",{className:"slider-card__info"},a.content)),r.a.createElement("div",{className:"slider-card__row"},r.a.createElement("div",{className:"slider-card__link"},r.a.createElement(A,null,"Learn more"))))))}),k=(t(42),t(43),function(e){var a=e.cards;function t(){return r.a.createElement("div",{style:{display:"none"}})}var n={dots:!0,infinite:!1,speed:500,slidesToShow:2,slidesToScroll:2,nextArrow:r.a.createElement(t,null),prevArrow:r.a.createElement(t,null),responsive:[{breakpoint:1200,settings:{slidesToShow:1,slidesToScroll:1,infinite:!1,dots:!0}}]};return r.a.createElement("div",{className:"slider"},r.a.createElement("div",{className:"slider__content"},r.a.createElement(g.a,n,a.map((function(e){return r.a.createElement("div",{key:e.id,className:"slider__card",id:e.id},r.a.createElement(w,{id:e.id,card:e,latest:e.id===a.length}))})))))}),y=(t(44),t(45),function(e){var a=e.className,t=void 0===a?"":a,n=e.children;return r.a.createElement("button",{type:"button",className:"ui-button ".concat(t)},n)}),x=(t(46),function(e){var a=e.title,t=e.icon,c=e.activeIcon,l=void 0===c?t:c,s=e.children,o=e.hover,m=Object(n.useState)(!1),u=Object(i.a)(m,2),d=u[0],v=u[1],_=function(e){return function(){v(e)}};return r.a.createElement("div",{role:"menuitem",tabIndex:0,className:"ui-dropdown",onClick:!o&&_(!d),onKeyDown:_(!d),onMouseEnter:o&&_(!d),onMouseLeave:o&&_(!d)},a&&r.a.createElement("p",{className:"".concat(d?"ui-dropdown__title active":"ui-dropdown__title")},a),r.a.createElement("img",{className:"ui-dropdown__icon",src:d?l:t,alt:""}),r.a.createElement("div",{className:"".concat(d?"ui-dropdown__content active":"ui-dropdown__content")},s))}),S=(t(47),function(e){var a=e.title,t=e.excerpt;return r.a.createElement("div",{className:"ui-title"},r.a.createElement("h2",{className:"ui-title__title"},a),t&&r.a.createElement("p",{className:"ui-title__excerpt"},t))}),F=(t(48),t(14)),T=t.n(F),A=function(e){var a=e.url,t=e.children;return r.a.createElement("a",{href:a,className:"ui-link"},t,r.a.createElement("img",{src:T.a,alt:"",className:"ui-link__icon"}))},C=(t(49),function(e){var a=e.nav;return r.a.createElement("nav",{className:"nav-header"},r.a.createElement("ul",{className:"nav-header__list"},a.map((function(e){return r.a.createElement("li",{key:e.id,className:"nav-header__item"},!e.subnav&&r.a.createElement("a",{href:e.url,className:"nav-header__link"},e.name),e.subnav&&r.a.createElement("div",{className:"subnav"},r.a.createElement("span",{className:"subnav__title"},e.name),r.a.createElement("i",{className:"fas fa-angle-down subnav__icon"}),r.a.createElement("ul",{className:"subnav__list"},e.subnav.map((function(e){return r.a.createElement("li",{key:e.id,className:"subnav__item"},r.a.createElement("a",{href:e.url,className:"subnav__link"},e.name))})))))}))))}),U=(t(50),t(15)),j=t.n(U),I=t(16),L=t.n(I),O=function(e){var a=e.nav;return r.a.createElement("nav",{className:"nav-mobile"},r.a.createElement("ul",{className:"nav-mobile__list"},a.map((function(e){return r.a.createElement("li",{key:e.id,className:"nav-mobile__item"},e.subnav&&r.a.createElement(x,{title:e.name,icon:j.a,activeIcon:L.a},r.a.createElement("ul",{className:"subnav-mobile__list"},e.subnav.map((function(e){return r.a.createElement("li",{key:e.id,className:"subnav-mobile__item"},r.a.createElement("a",{href:e.url,className:"subnav-mobile__link"},e.name))})))),!e.subnav&&r.a.createElement("a",{href:e.url,className:"nav-mobile__link"},e.name))}))),r.a.createElement("div",{className:"nav-mobile__button"},r.a.createElement(y,null,"Sign Up")))},W=(t(51),function(e){var a=e.nav;return r.a.createElement("nav",{className:"nav-footer"},r.a.createElement("ul",{className:"nav-footer__list"},a.map((function(e){return r.a.createElement("li",{key:e.id,className:"nav-footer__item"},r.a.createElement("a",{href:e.url,className:"nav-footer__link"},e.name))}))))}),B=(t(52),function(){return r.a.createElement("input",{className:"field-email",type:"text",placeholder:"Enter your email"})});var D=function(){return r.a.createElement("div",null,r.a.createElement(_,{nav:[{id:1,name:"About",url:"/about"},{id:2,name:"Help",url:"/help",subnav:[{id:4,name:"User Guide",url:"/help/guide"},{id:5,name:"Contact Support",url:"/help/support"}]},{id:3,name:"Features",url:"/features"}]}),r.a.createElement("main",null,r.a.createElement(f,{slider_cards:[{id:1,name:"First Feature",content:"Little Red Cap opened her eyes and when she saw the sunbeams dancing to and fro through the trees and how the ground was covered with beautiful flowers."},{id:2,name:"Second Feature",content:"Each time she picked one she thought that she could see an even more beautiful one a little way off, and she ran after it, going further and further into the woods."},{id:3,name:"Third Feature",content:"The wolf pressed the latch, and the door opened. He stepped inside, went straight to the grandmother's bed, and ate her up."},{id:4,name:"Fourth Feature",content:"Little Red Cap had run after the flowers. After she had gathered so many that she could not carry any more, she remembered her grandmother."}]})),r.a.createElement(p,{nav:[{id:1,name:"About Us",url:"/about"},{id:2,name:"Privacy Policy",url:"/privacy"}]}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.371ad6f9.chunk.js.map