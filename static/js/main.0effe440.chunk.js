(this["webpackJsonpdrink-bar"]=this["webpackJsonpdrink-bar"]||[]).push([[0],{16:function(n,t,e){n.exports=e.p+"static/media/search_black_24dp.2461e0fe.svg"},17:function(n,t,e){n.exports=e.p+"static/media/background6kx8k.f77aba2d.jpg"},18:function(n,t,e){n.exports=e.p+"static/media/background3kx4k.034fd658.jpg"},19:function(n,t,e){n.exports=e.p+"static/media/background0.7x1k.b81f6816.jpg"},20:function(n,t,e){n.exports=e(30)},29:function(n,t,e){},30:function(n,t,e){"use strict";e.r(t);var a,r,i,o,s,l,c,u,d,f,m,h=e(0),g=e.n(h),p=e(12),b=e.n(p),v=e(1),x=e(2),k=e(3),w=k.a.div(a||(a=Object(x.a)(["\n\n\n"]))),j=e(9),O={apiURL:"https://www.thecocktaildb.com/api/json/v1/".concat("1")}.apiURL,y={getRandomDrink:function(){return fetch(O+"/random.php").then((function(n){return n.json()}))},getIngredientsList:function(){return fetch(O+"/list.php?i=list").then((function(n){return n.json()}))},getDrinksByIngredient:function(n){return fetch(O+"/filter.php?i="+n.replace(/ /g,"+")).then((function(n){return n.json()}))},getDrinksByName:function(n){return n.length>1?fetch(O+"/search.php?s="+n.replace(/ /g,"+")).then((function(n){return n.json()})):fetch(O+"/search.php?f="+n).then((function(n){return n.json()}))},getDrinkById:function(n){return fetch(O+"/lookup.php?i="+n).then((function(n){return n.json()}))}},E=k.a.div(r||(r=Object(x.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  padding-top: 5rem;\n  height:100vh;\n  overflow-y: scroll;\n  scroll-snap-type: y mandatory;\n"]))),S=k.a.div(i||(i=Object(x.a)(["\n  scroll-snap-align: start;\n  @media(min-width:1025px){\n    height: 5rem;\n    width: 100%;\n  }\n"]))),D=E,I=Object(k.b)(o||(o=Object(x.a)(["\n  from {\n    fill:darkred;\n    transform: rotateY(90deg);\n  }\n  to {\n    fill:darkred;\n    transform: rotateY(0deg);\n  }\n"]))),N=Object(k.b)(s||(s=Object(x.a)(["\n  from {\n    transform: rotateY(90deg);\n  }\n  to {\n    fill:gray;\n    transform: rotateY(0deg);\n  }\n"]))),C=k.a.div(l||(l=Object(x.a)(["\n  margin: 1rem 0 1rem;\n  position: relative;\n  display: flex;\n  box-shadow:2px 2px 3px 1px rgba(10,10,10,0.8);\n  border-radius: 0.3rem;\n  width: 100%;\n  /* @media(min-width:1025px){\n    flex-basis: 30%;\n  }\n  @media(min-width:1500px){\n    flex-basis: 21%;\n  }\n  @media(max-width:1024px){\n    flex-basis: 40%;\n  }\n  @media(max-width:600px){\n    flex-basis: 90%;\n  } */\n  height: 400px;\n  transition: 0.3s;\n  overflow: hidden;\n  .shadow-box {\n    position: absolute;\n    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 90%), radial-gradient(rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.95) 90%);\n    box-shadow: inset 0 0 15px 0 black;\n    width: 100%;\n    height: 100%;\n  }\n  img {\n    position: absolute;\n    width: 98%;\n    height: 98%;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n    &:hover {\n      transform: scale(1.1);\n      .info-background {\n        transform:translateY(-10%);\n        transition-delay: 1.1s;\n      } \n      .drink-info {\n        height: auto;\n        transition-delay: 1.1s;\n        transform: translateY(0%) translateX(22px);\n        .line {\n          transition-delay:2.1s;\n          transform: translateX(0%);\n          opacity: 1;\n        }\n        ul {\n          transition-delay:1.4s;\n          opacity: 1;\n        }\n        p {\n          transition-delay:2.6s;\n          opacity: 1;\n        }\n      }\n    }\n    &:active {\n      transform: scale(1.1);\n      .info-background {\n        transform:translateY(-10%);\n        transition-delay: 1.1s;\n      } \n      .drink-info {\n        height: auto;\n        transition-delay: 1.1s;\n        transform: translateY(0%) translateX(22px);\n        .line {\n          transition-delay:2.1s;\n          transform: translateX(0%);\n          opacity: 1;\n        }\n        ul {\n          transition-delay:1.4s;\n          opacity: 1;\n        }\n        p {\n          transition-delay:2.6s;\n          opacity: 1;\n        }\n      }\n    }\n\n  .info-background {\n    position: absolute;\n    width: 110%;\n    height: 100%;\n    background: linear-gradient(1turn, rgba(0,0,0,0.5) 90%,rgba(0,0,0,0));\n    transform: translateY(100%);\n    transition: 1s;\n    transition-delay: 1.1s;\n  }\n  .drink-info {\n    scroll-behavior: smooth;\n    h2 {\n      margin: 1rem 0;\n      width: 80%;\n    }\n    transition: 1s;\n    transition-delay: 1s;\n    width: 120%;\n    transform: translateY(80%) translateX(22px);\n    overflow: auto;\n    .line {\n      display: block;\n      width:90%;\n      transform: translateX(-100%);\n      transition: .8s;\n      transition-delay: .7s;\n      opacity: 0.3;\n      margin-bottom: 6px;\n      height: 10px;\n      border-bottom: 1px solid white;\n    }\n    ul {\n      opacity: 0;\n      transition: 1s;\n      transition-delay: .8s;\n      list-style: none;\n    }\n    p {\n      opacity: 0;\n      transition: 0.7s;\n      transition-delay: .5s;\n      text-align: justify;\n      padding-right: 2.5rem;\n      margin-bottom: 3.7rem;\n      width:(100%- 22px);\n    }\n  }\n  button{\n    position:absolute;\n    top:calc(80% + 7px);\n    right:5px;\n    border:none;\n    outline: none;\n    padding: 15px;\n    background-color: rgba(0,0,0,0);\n    cursor: pointer;\n    transition: .2s;\n    &:hover{\n      transform: scale(1.1);\n    }\n    &:active{\n      transition: 0.1s;\n      transform: scale(0.95);\n    }\n    svg {\n      fill:gray; \n      width:1.5rem;\n      height:1.5rem;\n      animation: "," .8s forwards;\n      &.like{\n        animation: "," .8s forwards;\n      }\n    }\n  }\n"])),N,I),L=k.a.div(c||(c=Object(x.a)(["\n  z-index: 1;\n  @media(min-width:1025px){\n    flex-basis: 30%;\n  }\n  @media(min-width:1500px){\n    flex-basis: 21%;\n  }\n  @media(max-width:1024px){\n    scroll-snap-align: start;\n    flex-basis: 40%;\n    height: 50vh;\n    min-height: 400px;\n  }\n  @media(max-width:600px){\n    scroll-snap-align: start;\n    flex-basis: 90%;\n    height: 100vh;\n  }\n  display:flex;\n  justify-content:center;\n  align-items:center;\n"]))),Y=Object(k.a)(L)(u||(u=Object(x.a)(["\n  div{\n    height: 400px;\n    background: rgba(0,0,0,0.65);\n    box-shadow:2px 2px 3px 1px rgba(10,10,10,0.8);\n    border-radius: 0.3rem;\n    width: 100%;\n    margin: 1rem 0 1rem;\n    transition: 0.3s;\n  }\n"]))),F=C,J={addToFavourites:function(n){if(localStorage.favouriteDrinks&&!JSON.parse(localStorage.getItem("favouriteDrinks")).list.includes(n)){var t=JSON.parse(localStorage.getItem("favouriteDrinks"));t.list.push(n),localStorage.setItem("favouriteDrinks",JSON.stringify(t))}else if(!localStorage.favouriteDrinks){var e={list:[]};e.list.push(n),console.log(e),localStorage.setItem("favouriteDrinks",JSON.stringify(e))}},favouriteDrinksList:function(){if(localStorage.favouriteDrinks)return JSON.parse(localStorage.getItem("favouriteDrinks")).list},isFavourite:function(n){return!!localStorage.favouriteDrinks&&JSON.parse(localStorage.getItem("favouriteDrinks")).list.includes(n)},removeFromFavourites:function(n){if(localStorage.favouriteDrinks&&JSON.parse(localStorage.getItem("favouriteDrinks")).list.includes(n)){var t=JSON.parse(localStorage.getItem("favouriteDrinks"));t.list.splice(t.list.indexOf(n),1),localStorage.setItem("favouriteDrinks",JSON.stringify(t))}}},z=function(n){return g.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:n,width:"24",height:"24",viewBox:"0 0 24 24"},g.a.createElement("path",{d:"M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"}))},B=function(n){var t=n.drink,e=t.idDrink,a=t.strDrinkThumb,r=t.strInstructions,i=Object(h.useState)(!1),o=Object(v.a)(i,2),s=o[0],l=o[1],c=Object(h.useRef)(null),u=[];Object(h.useEffect)((function(){l(J.isFavourite(e))}),[]);for(var d=1;d<16&&(null!==t["strIngredient"+d]&&0!==t["strIngredient"+d].length);d++){var f=t["strIngredient"+d],m=null===t["strMeasure"+d]?"":" - "+t["strMeasure"+d];u.push(g.a.createElement("li",{key:d},f+m))}var p=function(n){c.current.querySelector(".drink-info").scrollTop=0};return g.a.createElement(L,null,g.a.createElement(F,{onMouseLeave:p,onBlur:p,ref:c},g.a.createElement("img",{src:a,loading:"lazy"}),g.a.createElement("div",{className:"shadow-box"}),g.a.createElement("div",{className:"info-background"}),g.a.createElement("div",{className:"drink-info"},g.a.createElement("h2",null,t.strDrink),g.a.createElement("ul",null,u),g.a.createElement("span",{className:"line"}),g.a.createElement("p",null,r)),g.a.createElement("button",{onClick:function(){s?(J.removeFromFavourites(e),l(!1)):(J.addToFavourites(e),l(!0))}},z(s?"like":""))))},H=function(n){var t=n.drinksIdsList,e=Object(h.useState)([]),a=Object(v.a)(e,2),r=a[0],i=a[1],o=Object(h.useState)(12),s=Object(v.a)(o,2),l=s[0],c=s[1],u=Object(h.useState)(!1),d=Object(v.a)(u,2),f=d[0],m=d[1],p=Object(h.useState)(!0),b=Object(v.a)(p,2),x=b[0],k=b[1],w=Object(h.useState)([]),O=Object(v.a)(w,2),E=O[0],I=O[1],N=Object(h.useState)(),C=Object(v.a)(N,2),L=C[0],F=C[1],J=Object(h.useState)(!1),z=Object(v.a)(J,2),H=z[0],R=z[1],T=Object(h.useState)([]),X=Object(v.a)(T,2),M=X[0],P=X[1],U=Object(h.useRef)(null);Object(h.useEffect)((function(){window.innerWidth>1500&&c(30)}),[]),Object(h.useEffect)((function(){var n=t.length,e=[];if(I(t),F(n),i([]),m(!0),n>0){R(!0);for(var a=0;a<l&&a<n;a++)e.push(g.a.createElement(Y,{key:a},g.a.createElement("div",null)))}else{R(!1);for(var r=0;r<l;r++)e.push(g.a.createElement(Y,{key:r},g.a.createElement("div",null)))}window.innerWidth>1500?c(30):c(12),P(e)}),[t]),Object(h.useEffect)((function(){var n=Object(j.a)(r),t=Object(j.a)(E);f&&(r.length<l&&0===E.length&&!H&&_().then((function(t){t.forEach((function(t){return n.push(g.a.createElement(B,{key:n.length,drink:t.value.drinks[0]}))})),i(n),m(!1),k(!1)})),r.length<l&&E.length>0&&r.length<L&&H&&q().then((function(e){e.forEach((function(e){n.push(g.a.createElement(B,{key:n.length,drink:e.value.drinks[0]})),t.splice(t.indexOf(String(e.value.drinks[0].idDrink)),1)})),I(t),i(n),m(!1),k(!1),R(!0)})))}),[r,l]),Object(h.useEffect)((function(){return U.current.addEventListener("scroll",W),function(){U.current.removeEventListener("scroll",W)}}),[U]),Object(h.useEffect)((function(){x&&(c(l+10),m(!0))}),[x]);var W=function(){console.log(U.current.scrollHeight-U.current.scrollTop<3*window.innerHeight),U.current.scrollHeight-U.current.scrollTop<3*window.innerHeight&&!f&&k(!0),document.body.offsetHeight,window.scrollY,window.innerHeight},_=function(){for(var n=[],t=r.length;t<l;t++)n.push(y.getRandomDrink());return Promise.allSettled(n)},q=function(){for(var n=[],t=0,e=r.length;e<l&&e<L;e++)n.push(y.getDrinkById(E[t])),t++;return Promise.allSettled(n)};return g.a.createElement(D,{ref:U},g.a.createElement(S,null),r.length>0&&r,0===r.length&&M)},R={mainColor:"black",secondaryColor:"rgb(100,100,100)",fontColor:"white"},T=e(16),X=e.n(T),M=k.a.div(d||(d=Object(x.a)(["\n  position: fixed;\n  top:0;\n  transition:0.8s;\n  transform: translateY(-105%);\n  color: white;\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 1.2rem;\n  z-index: 2;\n  width: 100%;\n  align-items: center;\n  justify-content: space-evenly;\n  background: rgba(0,0,0,0.6);\n  box-shadow: 0 5px 3px 0 rgba(0,0,0,0.6);\n  padding-bottom: 10px;\n  &.show {\n    transform: translateY(0%);\n  }\n  h2 {\n    color:white;\n    text-align: center;\n    width: 100%;\n    @media(max-width:520px){\n        margin-bottom: 30px;\n      }\n  }\n  form {\n    margin-bottom: 5px;\n    @media(max-width:850px){\n    width: 100%;\n    }\n    .form-group {\n      position: relative;\n      text-align: center;\n      @media(max-width:520px){\n        text-align: left;\n      }\n      @media(max-width:850px){\n      \n        label {\n        position:absolute;\n        }\n        input{\n        margin-left: 11ch;\n        }\n      }\n    }    \n  }\n\n  input {\n    font-size: 1.2rem;\n  }\n  .hints{\n    position: absolute;\n    right: 0;\n    display: flex;\n    flex-direction:column;\n    max-height: 50vh;\n    overflow: auto;\n    width: 15rem;\n    cursor: pointer;\n    &:hover {\n      .hint:nth-of-type(1){\n      background: ",";\n      }\n    }\n  }\n  .hint {\n    font-size: 1.2rem;\n    border: none; \n    padding: 2px;\n    text-align: left;\n    &:nth-of-type(1){\n      background: ",";\n    }\n    background: ",";\n    color:",";\n    strong {\n      font-weight: 900;\n    }\n    &:hover{\n      background: "," !important;\n    }\n  }\n  \n"])),R.mainColor,R.secondaryColor,R.mainColor,R.fontColor,R.secondaryColor),P=k.a.button(f||(f=Object(x.a)(["\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  background: url(","),",";\n  background-size: 50px;\n  //outline: none;\n  transform: translateY(-200%);\n  transition: 1s;\n  border: 3px solid ",";\n  box-shadow: 2px 2px 3px 0px ",";\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  z-index:3;\n  &.show{\n    transform: translateY(0%);\n  }\n"])),X.a,R.mainColor,R.secondaryColor,R.mainColor),U=M,W=!0,_=0,q=0,A=0,G=0,K=function(n){var t=n.setDrinksIdsList,e=Object(h.useState)([]),a=Object(v.a)(e,2),r=a[0],i=a[1],o=Object(h.useState)(""),s=Object(v.a)(o,2),l=s[0],c=s[1],u=Object(h.useState)(""),d=Object(v.a)(u,2),f=d[0],m=d[1],p=Object(h.useState)([]),b=Object(v.a)(p,2),x=b[0],k=b[1],w=Object(h.useState)([]),j=Object(v.a)(w,2),O=j[0],E=j[1],S=Object(h.useState)(!1),D=Object(v.a)(S,2),I=D[0],N=D[1],C=Object(h.useState)(!0),L=Object(v.a)(C,2),Y=L[0],F=L[1],z=Object(h.useState)(!1),B=Object(v.a)(z,2),H=B[0],R=B[1];Object(h.useEffect)((function(){var n=[];y.getIngredientsList().then((function(t){t.drinks.forEach((function(t){return n.push(t.strIngredient1)})),E(n)}))}),[]),Object(h.useEffect)((function(){x.length>0&&(t(x),R(!1))}),[x]),Object(h.useEffect)((function(){H&&t(J.favouriteDrinksList())}),[H]),Object(h.useEffect)((function(){return window.addEventListener("scroll",Q),function(){window.removeEventListener("scroll",Q)}}),[]);var T=function(n){if(""!==n){var t=[];t=O.filter((function(t){return t.toLowerCase().includes(n.toLowerCase())}));var e=[];t.forEach((function(t){var a=t.toLowerCase().indexOf(n.toLowerCase()),r=a+n.length;e.push(g.a.createElement("div",{onClick:function(){return X(t)},type:"button",className:"hint",key:t},t.slice(0,a),g.a.createElement("strong",null,t.slice(a,r)),t.slice(r,t.length)))})),i(e)}else i([])},X=function(n){c(n),m(""),M(n),i([])},M=function(n){var t=[];y.getDrinksByIngredient(n).then((function(n){n.drinks.forEach((function(n){return t.push(n.idDrink)})),k(t)})).catch((function(n){return n}))},K=function(n){var t=[];y.getDrinksByName(n).then((function(n){n.drinks.forEach((function(n){return t.push(n.idDrink)})),k(t)})).catch((function(n){return n}))},Q=function(){G=window.scrollY,++_>10&&(q=G,A=G),A<=G&&(A=G,_=0),G+100<A&&!W&&(F(!0),q=G,A=0,W=!0),q+100<G&&W&&(F(!1),N(!1),W=!1)};return g.a.createElement(g.a.Fragment,null,g.a.createElement(U,{className:I?"show":null},g.a.createElement("h2",null,"Search"),g.a.createElement("form",{onSubmit:function(n){n.preventDefault(),c(""),""===f&&(t([]),R(!1)),K(f)}},g.a.createElement("div",{className:"form-group"},g.a.createElement("label",{htmlFor:"nameInput"},"Name\xa0"),g.a.createElement("input",{type:"text",id:"nameInput",value:f,onChange:function(n){m(n.target.value)}}))),g.a.createElement("form",{onSubmit:function(n){n.preventDefault();var e=O.find((function(n){return n.toLowerCase().includes(l.toLowerCase())}));if(e||(e=""),c(e),""===l)return t([]),R(!1),void c("");m(""),M(e),i([])}},g.a.createElement("div",{className:"form-group"},g.a.createElement("label",{htmlFor:"ingredientInput"},"Ingredient\xa0"),g.a.createElement("input",{autoComplete:"off",type:"text",id:"ingredientInput",value:l,onChange:function(n){c(n.target.value),T(n.target.value)}}),g.a.createElement("div",{className:"hints"},r))),g.a.createElement("button",{onClick:function(){R(!0)}},"favourites "),g.a.createElement("button",{onClick:function(){R(!1),t([])}},"all ")),g.a.createElement(P,{className:Y?"show":null,onClick:function(){N(!I)}}))},Q=k.a.div(m||(m=Object(x.a)(["\n  .background-img {\n    position: fixed;\n    top: 0;\n    height: 100vh;\n    width: 100vw;\n  }\n  .background-img-darken {\n    position: fixed;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    background: rgba(0, 0, 0, 0.8);\n    height: 100vh;\n    width: 100vw;\n  }\n"]))),V=e(17),Z=e.n(V),$=e(18),nn=e.n($),tn=e(8),en=e.n(tn),an=e(19),rn=e.n(an),on=function(){return g.a.createElement(Q,null,g.a.createElement("img",{className:"background-img",src:rn.a,alt:""}),g.a.createElement("img",{className:"background-img",srcSet:"\n          ".concat(Z.a," 6144w,\n          ").concat(nn.a," 3072w,\n          ").concat(en.a," 1536w"),src:en.a,alt:""}),g.a.createElement("div",{className:"background-img-darken"}))};var sn=function(){var n=Object(h.useState)([]),t=Object(v.a)(n,2),e=t[0],a=t[1];return g.a.createElement(g.a.Fragment,null,g.a.createElement(K,{setDrinksIdsList:a}),g.a.createElement(w,null,g.a.createElement(on,null),g.a.createElement(H,{drinksIdsList:e})))};e(29);b.a.render(g.a.createElement(g.a.StrictMode,null,g.a.createElement(sn,null)),document.getElementById("root"))},8:function(n,t,e){n.exports=e.p+"static/media/background1,5kx2k.e2e9a899.jpg"}},[[20,1,2]]]);
//# sourceMappingURL=main.0effe440.chunk.js.map