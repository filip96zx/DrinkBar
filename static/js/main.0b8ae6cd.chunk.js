(this["webpackJsonpdrink-bar"]=this["webpackJsonpdrink-bar"]||[]).push([[0],{12:function(n,t,e){n.exports=e.p+"static/media/background6kx8k.f77aba2d.jpg"},13:function(n,t,e){n.exports=e.p+"static/media/background0.7x1k.b81f6816.jpg"},17:function(n,t,e){n.exports=e.p+"static/media/search_black_24dp.2461e0fe.svg"},19:function(n,t,e){n.exports=e(29)},28:function(n,t,e){},29:function(n,t,e){"use strict";e.r(t);var a,r,i,o,s,c,l=e(0),u=e.n(l),d=e(11),f=e.n(d),h=e(1),m=e(12),p=e.n(m),g=e(13),b=e.n(g),x=e(2),k=e(3),w=k.a.div(a||(a=Object(x.a)(["\n\n\n.background-img{\n  position: fixed;\n  top:0;\n  height: 100vh;\n  width: 100vw;\n}\n.background-img-darken{\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  top:0;\n  background: rgba(0,0,0,0.8);\n  height: 100vh;\n  width: 100vw;\n}\n\n\n\n"]))),v=e(8),j={apiURL:"https://www.thecocktaildb.com/api"}.apiURL,E={getRandomDrink:function(){return fetch(j+"/json/v1/1/random.php").then((function(n){return n.json()}))},getIngredientsList:function(){return fetch(j+"/json/v1/1/list.php?i=list").then((function(n){return n.json()}))},getDrinksByIngredient:function(n){return fetch(j+"/json/v1/1/filter.php?i="+n.replace(/ /g,"+")).then((function(n){return n.json()}))},getDrinksByName:function(n){return n.length>1?fetch(j+"/json/v1/1/search.php?s="+n.replace(/ /g,"+")).then((function(n){return n.json()})):fetch(j+"/json/v1/1/search.php?f="+n).then((function(n){return n.json()}))},getDrinkById:function(n){return fetch(j+"/json/v1/1/lookup.php?i="+n).then((function(n){return n.json()}))}},y=k.a.div(r||(r=Object(x.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n"]))),O=k.a.div(i||(i=Object(x.a)(["\n  position: relative;\n  display: flex;\n  margin: 1rem auto;\n  box-shadow:2px 2px 3px 1px rgba(10,10,10,0.8);\n  border-radius: 0.3rem;\n  @media(min-width:1025px){\n    flex-basis: 30%;\n  }\n  @media(min-width:1500px){\n    flex-basis: 21%;\n  }\n  @media(max-width:1024px){\n    flex-basis: 40%;\n  }\n  @media(max-width:600px){\n    flex-basis: 90%;\n  }\n  height: 400px;\n  transition: 0.3s;\n  overflow: hidden;\n  .shadow-box {\n    position: absolute;\n    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 90%), radial-gradient(rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.95) 90%);\n    box-shadow: inset 0 0 15px 0 black;\n    width: 100%;\n    height: 100%;\n  }\n  img {\n    position: absolute;\n    width: 98%;\n    height: 98%;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n    &:hover {\n      transform: scale(1.1);\n      .info-background {\n        transform:translateY(-10%);\n        transition-delay: 1.1s;\n      } \n      .drink-info {\n        height: auto;\n        transition-delay: 1.1s;\n        transform: translateY(0%) translateX(22px);\n        .line {\n          transition-delay:2.1s;\n          transform: translateX(0%);\n          opacity: 1;\n        }\n        ul {\n          transition-delay:1.4s;\n          opacity: 1;\n        }\n        p {\n          transition-delay:2.6s;\n          opacity: 1;\n        }\n      }\n    }\n    &:active {\n      transform: scale(1.1);\n      .info-background {\n        transform:translateY(-10%);\n        transition-delay: 1.1s;\n      } \n      .drink-info {\n        height: auto;\n        transition-delay: 1.1s;\n        transform: translateY(0%) translateX(22px);\n        .line {\n          transition-delay:2.1s;\n          transform: translateX(0%);\n          opacity: 1;\n        }\n        ul {\n          transition-delay:1.4s;\n          opacity: 1;\n        }\n        p {\n          transition-delay:2.6s;\n          opacity: 1;\n        }\n      }\n    }\n  .info-background {\n    position: absolute;\n    width: 110%;\n    height: 100%;\n    background: linear-gradient(1turn, rgba(0,0,0,0.5) 90%,rgba(0,0,0,0));\n    transform: translateY(100%);\n    transition: 1s;\n    transition-delay: 1.1s;\n  }\n\n  .drink-info {\n    h2 {\n      margin: 1rem 0;\n    }\n    transition: 1s;\n    transition-delay: 1s;\n    width: 120%;\n    height: 100%;\n    transform: translateY(80%) translateX(22px);\n    overflow: auto;\n    .line {\n      display: block;\n      width:90%;\n      transform: translateX(-100%);\n      transition: .8s;\n      transition-delay: .7s;\n      opacity: 0.3;\n      margin-bottom: 6px;\n      height: 10px;\n      border-bottom: 1px solid white;\n    }\n    ul {\n      opacity: 0;\n      transition: 1s;\n      transition-delay: .8s;\n      list-style: none;\n    }\n    p {\n      opacity: 0;\n      transition: 0.7s;\n      transition-delay: .5s;\n      height: fit-content;\n      padding-right: 30px;\n    }\n  }\n"]))),S=Object(k.a)(O)(o||(o=Object(x.a)(["\n  background: rgba(0,0,0,0.65);\n\n"]))),C=O,I=function(n){for(var t=n.drink,e=t.strDrinkThumb,a=t.strInstructions,r=[],i=1;i<16&&(null!==t["strIngredient"+i]&&0!==t["strIngredient"+i].length);i++){var o=t["strIngredient"+i],s=null===t["strMeasure"+i]?"":" - "+t["strMeasure"+i];r.push(u.a.createElement("li",{key:i},o+s))}return u.a.createElement(C,null,u.a.createElement("img",{src:e,alt:"",loading:"lazy"}),u.a.createElement("div",{className:"shadow-box"}),u.a.createElement("div",{className:"info-background"}),u.a.createElement("div",{className:"drink-info"},u.a.createElement("h2",null,t.strDrink),u.a.createElement("ul",null,r),u.a.createElement("span",{className:"line"}),u.a.createElement("p",null,a)))},L=function(n){var t=n.drinksIdsList,e=Object(l.useState)([]),a=Object(h.a)(e,2),r=a[0],i=a[1],o=Object(l.useState)(10),s=Object(h.a)(o,2),c=s[0],d=s[1],f=Object(l.useState)(!1),m=Object(h.a)(f,2),p=m[0],g=m[1],b=Object(l.useState)(!0),x=Object(h.a)(b,2),k=x[0],w=x[1],j=Object(l.useState)([]),O=Object(h.a)(j,2),C=O[0],L=O[1],D=Object(l.useState)(),N=Object(h.a)(D,2),Y=N[0],B=N[1],F=Object(l.useState)(!1),z=Object(h.a)(F,2),X=z[0],P=z[1],R=Object(l.useState)([]),M=Object(h.a)(R,2),T=M[0],H=M[1];Object(l.useEffect)((function(){var n=t.length,e=[];if(L(t),B(n),i([]),g(!0),n>0){P(!0);for(var a=0;a<c&&a<n;a++)e.push(u.a.createElement(S,{key:a}))}else{P(!1);for(var r=0;r<c;r++)e.push(u.a.createElement(S,{key:r}))}window.innerWidth>1500?d(30):d(10),H(e)}),[t]),Object(l.useEffect)((function(){window.innerWidth>1500&&d(30)}),[]),Object(l.useEffect)((function(){var n=Object(v.a)(r),t=Object(v.a)(C);p&&(r.length<c&&0===C.length&&!X&&U().then((function(t){t.forEach((function(t){return n.push(u.a.createElement(I,{key:n.length,drink:t.value.drinks[0]}))})),i(n),g(!1),w(!1)})),r.length<c&&C.length>0&&r.length<Y&&X&&W().then((function(e){e.forEach((function(e){n.push(u.a.createElement(I,{key:n.length,drink:e.value.drinks[0]})),t.splice(t.indexOf(String(e.value.drinks[0].idDrink)),1)})),L(t),i(n),g(!1),w(!1),P(!0)})))}),[r,c]),Object(l.useEffect)((function(){return window.addEventListener("scroll",J),function(){window.removeEventListener("scroll",J)}}),[]),Object(l.useEffect)((function(){k&&(d(c+10),g(!0))}),[k]);var J=function(){document.body.offsetHeight-window.scrollY<3*window.innerHeight&&!p&&w(!0)},U=function(){for(var n=[],t=r.length;t<c;t++)n.push(E.getRandomDrink());return Promise.allSettled(n)},W=function(){for(var n=[],t=0,e=r.length;e<c&&e<Y;e++)n.push(E.getDrinkById(C[t])),t++;return Promise.allSettled(n)};return u.a.createElement(y,null,r.length>0&&r,0===r.length&&T)},D={mainColor:"black",borderColor:"gray",fontColor:"white"},N=e(17),Y=e.n(N),B=k.a.div(s||(s=Object(x.a)(["\n  position: fixed;\n  top:0;\n  transition:0.8s;\n  transform: translateY(-105%);\n  color: white;\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 1.2rem;\n  z-index: 2;\n  width: 100%;\n  align-items: center;\n  justify-content: space-evenly;\n  background: rgba(0,0,0,0.6);\n  box-shadow: 0 5px 3px 0 rgba(0,0,0,0.6);\n  padding-bottom: 10px;\n  &.show {\n    transform: translateY(0%);\n  }\n  h2 {\n    color:white;\n    text-align: center;\n    width: 100%;\n    @media(max-width:520px){\n        margin-bottom: 30px;\n        /* input{\n        width: 80%;\n        } */\n      }\n  }\n  form {\n    margin-bottom: 5px;\n    @media(max-width:850px){\n    width: 100%;\n    }\n    .form-group {\n      position: relative;\n      text-align: center;\n      @media(max-width:520px){\n        text-align: left;\n        /* input{\n        width: 80%;\n        } */\n      }\n      @media(max-width:850px){\n      \n        label {\n        position:absolute;\n        }\n        input{\n        margin-left: 11ch;\n        }\n      }\n    }    \n  }\n\n  input {\n    font-size: 1.2rem;\n  }\n  .hints{\n    position: absolute;\n    right: 0;\n    display: flex;\n    flex-direction:column;\n    max-height: 50vh;\n    overflow: auto;\n    width: 15rem;\n    cursor: pointer;\n    &:hover {\n      .hint:nth-of-type(1){\n      background: ",";\n      }\n    }\n  }\n  .hint {\n    font-size: 1.2rem;\n    border: none; \n    padding: 2px;\n    text-align: left;\n    &:nth-of-type(1){\n      background: darkgray;\n    }\n    background: ",";\n    color:",";\n    strong {\n      font-weight: 900;\n    }\n    &:hover{\n      background: darkgray !important;\n    }\n    &:focus{\n      background: darkgray;\n      outline: none;\n    }\n  }\n  \n"])),D.mainColor,D.mainColor,D.fontColor),F=k.a.button(c||(c=Object(x.a)(["\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  background: url(","),",";\n  background-size: 50px;\n  //outline: none;\n  transform: translateY(-200%);\n  transition: 1s;\n  border: 3px solid ",";\n  box-shadow: 2px 2px 3px 0px ",";\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  z-index:3;\n  &.show{\n    transform: translateY(0%);\n  }\n"])),Y.a,D.mainColor,D.borderColor,D.mainColor),z=B,X=!0,P=0,R=0,M=0,T=0,H=function(n){var t=n.setDrinksIdsList,e=Object(l.useState)([]),a=Object(h.a)(e,2),r=a[0],i=a[1],o=Object(l.useState)(""),s=Object(h.a)(o,2),c=s[0],d=s[1],f=Object(l.useState)(""),m=Object(h.a)(f,2),p=m[0],g=m[1],b=Object(l.useState)([]),x=Object(h.a)(b,2),k=x[0],w=x[1],v=Object(l.useState)([]),j=Object(h.a)(v,2),y=j[0],O=j[1],S=Object(l.useState)(!1),C=Object(h.a)(S,2),I=C[0],L=C[1],D=Object(l.useState)(!0),N=Object(h.a)(D,2),Y=N[0],B=N[1];Object(l.useEffect)((function(){var n=[];E.getIngredientsList().then((function(t){t.drinks.forEach((function(t){return n.push(t.strIngredient1)})),O(n)}))}),[]),Object(l.useEffect)((function(){k.length>0&&t(k)}),[k]),Object(l.useEffect)((function(){return window.addEventListener("scroll",_),function(){window.removeEventListener("scroll",_)}}),[]);var H=function(n){if(""!==n){var t=[];t=y.filter((function(t){return t.toLowerCase().includes(n.toLowerCase())}));var e=[];t.forEach((function(t){var a=t.toLowerCase().indexOf(n.toLowerCase()),r=a+n.length;e.push(u.a.createElement("div",{onClick:function(){return J(t)},type:"button",className:"hint",key:t},t.slice(0,a),u.a.createElement("strong",null,t.slice(a,r)),t.slice(r,t.length)))})),i(e)}else i([])},J=function(n){d(n),g(""),U(n),i([])},U=function(n){var t=[];E.getDrinksByIngredient(n).then((function(n){n.drinks.forEach((function(n){return t.push(n.idDrink)})),w(t)})).catch((function(n){return n}))},W=function(n){var t=[];E.getDrinksByName(n).then((function(n){n.drinks.forEach((function(n){return t.push(n.idDrink)})),w(t)})).catch((function(n){return n}))},_=function(){T=window.scrollY,++P>10&&(R=T,M=T),M<=T&&(M=T,P=0),T+100<M&&!X&&(B(!0),R=T,M=0,X=!0),R+100<T&&X&&(B(!1),X=!1)};return u.a.createElement(u.a.Fragment,null,u.a.createElement(z,{className:I?"show":null},u.a.createElement("h2",null,"Search"),u.a.createElement("form",{onSubmit:function(n){n.preventDefault(),d(""),""===p&&t([]),W(p)}},u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:"nameInput"},"Name\xa0"),u.a.createElement("input",{type:"text",id:"nameInput",value:p,onChange:function(n){g(n.target.value)}}))),u.a.createElement("form",{onSubmit:function(n){n.preventDefault();var e=y.find((function(n){return n.toLowerCase().includes(c.toLowerCase())}));if(d(e),""===c)return t([]),void d("");g(""),U(e),i([])}},u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:"ingredientInput"},"Ingredient\xa0"),u.a.createElement("input",{autoComplete:"off",type:"text",id:"ingredientInput",value:c,onChange:function(n){d(n.target.value),H(n.target.value)}}),u.a.createElement("div",{className:"hints"},r)))),u.a.createElement(F,{className:Y?"show":null,onClick:function(){L(!I)}}))};var J=function(){var n=Object(l.useState)([]),t=Object(h.a)(n,2),e=t[0],a=t[1];return u.a.createElement(u.a.Fragment,null,u.a.createElement(H,{setDrinksIdsList:a}),u.a.createElement(w,null,u.a.createElement("img",{className:"background-img",src:b.a,alt:""}),u.a.createElement("img",{className:"background-img",src:p.a,alt:""}),u.a.createElement("div",{className:"background-img-darken"}),u.a.createElement(L,{drinksIdsList:e})))},U=(e(28),function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,30)).then((function(t){var e=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;e(n),a(n),r(n),i(n),o(n)}))}),W=e(18);f.a.render(u.a.createElement(u.a.StrictMode,null,u.a.createElement(W.a,null,u.a.createElement(J,null))),document.getElementById("root")),U()}},[[19,1,2]]]);
//# sourceMappingURL=main.0b8ae6cd.chunk.js.map