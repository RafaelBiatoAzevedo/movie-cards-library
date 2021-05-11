(this["webpackJsonp14-project-movie-card-library"]=this["webpackJsonp14-project-movie-card-library"]||[]).push([[0],{26:function(e,t,a){e.exports=a(38)},31:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(23),l=a.n(r),c=(a(31),a(6)),o=a(2),s=a(9),m=a(10),u=a(8),d=a(12),v=a(11);var p=function(){return i.a.createElement("h2",{className:"loading"},"Loading...")};var b=function(){return i.a.createElement("div",{className:"container-header"},i.a.createElement("h1",{className:"title-header"},"Movie Cards Library"))};var h=function(e){var t=e.movie,a=t.title,n=t.subtitle,r=t.storyline,l=t.rating,o=t.imagePath,s=t.bookmarked,m=t.genre,u=t.id;return i.a.createElement("div",{className:"container-cardMovie"},i.a.createElement("img",{className:"img-card",src:o,alt:"moviePicture"}),i.a.createElement("div",{className:"container-info-card"},i.a.createElement("div",{className:"container-title-card"},i.a.createElement("h2",{className:"title-card"},a),s&&i.a.createElement("span",{className:"title-card"},"\ud83c\udf1f")),i.a.createElement("h4",{className:"subtitle-card"},"".concat(n," (").concat(m,")")),i.a.createElement("p",{className:"storyline-card"},r),i.a.createElement("p",{className:"rating-card"},"Rating ".concat(l)),i.a.createElement(c.b,{className:"link-details",to:"/movies/".concat(u)},"DETAILS")))},f=a(17),g=a(1),E=a(25),y=[{id:1,title:"Kingsglaive",subtitle:"Final Fantasy XV",storyline:"King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",rating:4.5,imagePath:"images/Kingsglaive_Final_Fantasy_XV.jpg",bookmarked:!0,genre:"action"},{id:2,title:"Final Fantasy",subtitle:"Spirits Within",storyline:"A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.",rating:4.5,imagePath:"images/Final_Fantasy_Spirits_Within.jpg",bookmarked:!1,genre:"fantasy"},{id:3,title:"Ghost In The Shell",subtitle:"Ghost In The Shell",storyline:"A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).",rating:5,imagePath:"images/Ghost_In_The_Shell_2_0.jpg",bookmarked:!1,genre:"comedy"},{id:4,title:"Appleseed Alpha",subtitle:"Appleseed Alpha",storyline:"A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human's future hope, the legendary city of Olympus.",rating:3.8,imagePath:"images/Appleseed_Alpha.jpg",bookmarked:!0,genre:"action"},{id:5,title:"Resident Evil",subtitle:"Vendetta",storyline:"Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",rating:4.2,imagePath:"images/Resident_Evil_Vendetta.jpg",bookmarked:!0,genre:"fantasy"}];localStorage.setItem("movies",JSON.stringify(y));var k=function(){return JSON.parse(localStorage.getItem("movies"))},N=function(e){return localStorage.setItem("movies",JSON.stringify(e))},O=function(e){return function(t){setTimeout((function(){t(e)}),500)}},j=function(){return new Promise((function(e){var t=k();O(t)(e)}))},M=function(e){return new Promise((function(t){var a=k().find((function(t){return t.id===Number(e)}));O(a)(t)}))};function C(e,t){return e.filter((function(e){return e.title.toUpperCase().includes(t.toUpperCase())||e.subtitle.toUpperCase().includes(t.toUpperCase())||e.storyline.toUpperCase().includes(t.toUpperCase())}))}var w=function(e){var t=e.setMovies,a=Object(n.useState)({text:"",genre:"All",bookmarked:!1}),r=Object(f.a)(a,2),l=r[0],o=r[1];return Object(n.useEffect)((function(){return function(e,t){var a=e.text,n=e.genre,i=e.bookmarked;j().then((function(e){var r=e;switch(n){case"action":r=r.filter((function(e){return"action"===e.genre})),a&&(r=C(r,a)),i&&(r=r.filter((function(e){return e.bookmarked})));break;case"comedy":r=r.filter((function(e){return"comedy"===e.genre})),a&&(r=C(r,a)),i&&(r=r.filter((function(e){return e.bookmarked})));break;case"thriller":r=r.filter((function(e){return"thriller"===e.genre})),a&&(r=C(r,a)),i&&(r=r.filter((function(e){return e.bookmarked})));break;default:a&&(r=C(r,a)),i&&(r=r.filter((function(e){return e.bookmarked})))}t(r)}))}(l,t)}),[l]),i.a.createElement("div",{className:"container-search"},i.a.createElement(c.b,{className:"link-search",to:"/movies/new"},"ADD MOVIE"),i.a.createElement("form",{"data-testid":"search-bar-form",className:"input-container"},function(e,t){var a=e.text;return i.a.createElement("input",{value:a,onChange:function(a){return t(Object(g.a)(Object(g.a)({},e),{},{text:a.target.value}))},className:"input-search",placeholder:"Insert text for search",name:"searchText",type:"text",id:"input-searchText"})}(l,o),i.a.createElement("div",{className:"container-input-genre-favorite"},function(e,t){var a=e.genre;return i.a.createElement("label",{htmlFor:"select-genre","data-testid":"select-input-label"},"Genre ",i.a.createElement("select",{value:a,onChange:function(a){return t(Object(g.a)(Object(g.a)({},e),{},{genre:a.target.value}))},className:"select-search",name:"selectedGenre",id:"select-genre"},i.a.createElement("option",{value:"","data-testid":"select-option"},"All"),i.a.createElement("option",{value:"action","data-testid":"select-option"},"Action"),i.a.createElement("option",{value:"comedy","data-testid":"select-option"},"Comedy"),i.a.createElement("option",{value:"thriller","data-testid":"select-option"},"Thriller")))}(l,o),function(e,t){var a=e.bookmarked;return i.a.createElement("label",{className:"label-favorite",htmlFor:"input-checkbox","data-testid":"checkbox-input-label"},i.a.createElement("input",{value:a,onClick:function(a){return t(Object(g.a)(Object(g.a)({},e),{},{bookmarked:a.target.checked}))},type:"checkbox",id:"input-checkbox","data-testid":"checkbox-input"})," Favorites")}(l,o))))};var x=function(e){var t=e.type,a=e.movie,r=e.setMovie,l=Object(n.useState)(a),o=Object(f.a)(l,2),s=o[0],m=o[1];return i.a.createElement("div",{className:"container-add-movie"},i.a.createElement("form",{"data-testid":"add-movie-form",className:"container-form-add"},i.a.createElement("h4",{className:"subtitle-add-movie"},"Information about movie"),i.a.createElement("div",{className:"container-inputs titles-form"},function(e,t){var a=e.title;return i.a.createElement("div",null,i.a.createElement("label",{className:"label-add-movie",htmlFor:"input-title","data-testid":"title-input-label"},"Title"),i.a.createElement("input",{value:a,onChange:function(a){return t(Object(g.a)(Object(g.a)({},e),{},{title:a.target.value}))},className:"input-add",type:"text",id:"input-title","data-testid":"title-input",name:"title"}))}(s,m),function(e,t){var a=e.subtitle;return i.a.createElement("div",null,i.a.createElement("label",{className:"label-add-movie",htmlFor:"input-subtitle","data-testid":"subtitle-input-label"},"Subtitle"),i.a.createElement("input",{value:a,onChange:function(a){return t(Object(g.a)(Object(g.a)({},e),{},{subtitle:a.target.value}))},className:"input-add",type:"text",id:"input-subtitle","data-testid":"subtitle-input",name:"subtitle"}))}(s,m)),function(e,t){var a=e.imagePath;return i.a.createElement("div",null,i.a.createElement("label",{className:"label-add-movie",htmlFor:"input-image","data-testid":"image-input-label"},"Image"),i.a.createElement("input",{value:a,onChange:function(a){return t(Object(g.a)(Object(g.a)({},e),{},{imagePath:a.target.value}))},placeholder:"Url image",className:"input-add image-add",type:"text",id:"input-image","data-testid":"image-input",name:"imagePath"}))}(s,m),function(e,t){var a=e.storyline;return i.a.createElement("div",{className:"container-textArea"},i.a.createElement("label",{className:"label-add-movie",htmlFor:"textarea-sinopse","data-testid":"storyline-input-label"},"StoryLine"),i.a.createElement("textarea",{value:a,onChange:function(a){return t(Object(g.a)(Object(g.a)({},e),{},{storyline:a.target.value}))},className:"input-add input-textArea",id:"textarea-sinopse","data-testid":"storyline-input",cols:"44",rows:"5",name:"storyline",maxLength:"200"}))}(s,m),function(e,t){var a=e.bookmarked;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"radioIsFavorite",className:"label-add-movie"},i.a.createElement("input",{checked:a,onClick:function(a){return t(Object(g.a)(Object(g.a)({},e),{},{bookmarked:a.target.checked}))},className:"input-add",id:"radioIsFavorite",type:"checkbox"}),"IsFavorite"))}(s,m),i.a.createElement("div",{className:"container-inputs genre-input"},function(e,t){var a=e.genre;return i.a.createElement("div",null,i.a.createElement("label",{className:"label-add-movie",htmlFor:"input-select","data-testid":"genre-input-label"},"Genre"),i.a.createElement("select",{value:a,onChange:function(a){return t(Object(g.a)(Object(g.a)({},e),{},{genre:a.target.value}))},className:"input-add genre-add",id:"input-select","data-testid":"genre-input",name:"genre"},i.a.createElement("option",{value:"action","data-testid":"genre-option"},"Action"),i.a.createElement("option",{value:"comedy","data-testid":"genre-option"},"Comedy"),i.a.createElement("option",{value:"thriller","data-testid":"genre-option"},"Thriller")))}(s,m),function(e,t){var a=e.rating;return i.a.createElement("div",null,i.a.createElement("label",{className:"label-add-movie",htmlFor:"input-rating","data-testid":"rating-input-label"},"Rating"),i.a.createElement("input",{value:a,onChange:function(a){return t(Object(g.a)(Object(g.a)({},e),{},{rating:a.target.value}))},className:"input-add ratio-add",type:"number",id:"input-rating","data-testid":"rating-input",name:"rating",min:"0",max:"5",step:"0.1"}))}(s,m)),i.a.createElement("div",{className:"container-btn-form"},"Add"===t?function(e,t){return i.a.createElement("div",{className:"container-btn"},i.a.createElement("button",{onClick:function(){!function(e){var t=e.title,a=e.subtitle,n=e.imagePath;return!!(t&&a&&n)}(e)?alert("Invalid information"):t(e)},className:"btn-form",type:"button","data-testid":"send-button"},"Add Movie"))}(s,r):function(e,t){return i.a.createElement("div",{className:"container-btn"},i.a.createElement("button",{onClick:function(){return t(e)},className:"btn-form",type:"button","data-testid":"edit-button"},"Edit Movie"))}(s,r),i.a.createElement("div",{className:"container-btn"},i.a.createElement(c.b,{to:"/"},i.a.createElement("button",{className:"btn-form",type:"button","data-testid":"cancel-button"},"Cancel"))))))},S=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).setEditMovie=n.setEditMovie.bind(Object(u.a)(n)),n.state={editMovie:null},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;M(t).then((function(t){return e.setState({editMovie:t})}))}},{key:"setEditMovie",value:function(e){var t,a=this.props.history;t=e,new Promise((function(e){var a=k().map((function(e){return e.id===parseInt(t.id,10)?Object(g.a)(Object(g.a)({},e),t):e}));N(a),O("OK")(e)})),a.push("/")}},{key:"render",value:function(){var e=this.state.editMovie;return i.a.createElement("div",{"data-testid":"edit-movie"},i.a.createElement(b,null),null!==e&&i.a.createElement(x,{type:"Edit",movie:e,setMovie:this.setEditMovie}))}}]),a}(n.Component),F=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).fetchMovie=n.fetchMovie.bind(Object(u.a)(n)),n.state={loading:!0,movie:{}},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.fetchMovie()}},{key:"fetchMovie",value:function(){var e=this,t=this.props.match.params.id;M(t).then((function(t){return e.setState({loading:!1,movie:t})}))}},{key:"renderBtnsDetails",value:function(){var e=this.state.movie.id;return i.a.createElement("div",{className:"container-btns-details"},i.a.createElement(c.b,{className:"link-details",to:"/movies/".concat(e,"/edit")},i.a.createElement("button",{className:"btn-form btn-details",type:"button"},"EDIT")),i.a.createElement(c.b,{className:"link-details",to:"/"},i.a.createElement("button",{className:"btn-form btn-details",type:"button"},"BACK")),i.a.createElement(c.b,{className:"link-details",to:"/",onClick:function(){return t=e,new Promise((function(e){var a=k();a=a.filter((function(e){return e.id!==parseInt(t,10)})),N(a),O({status:"OK"})(e)}));var t}},i.a.createElement("button",{className:"btn-form btn-details",type:"button"},"DELET")))}},{key:"renderCardDetails",value:function(){var e=this.state.movie,t=e.title,a=e.subtitle,n=e.storyline,r=e.rating,l=e.imagePath,c=e.bookmarked,o=e.genre;return i.a.createElement("div",{className:"container-cardMovie card-details"},i.a.createElement("img",{className:"img-details",src:l.includes("http")||l.includes("data")?l:"../".concat(l),alt:"moviePicture"}),i.a.createElement("div",{className:"container-info-card info-details"},i.a.createElement("div",{className:"container-title-card"},i.a.createElement("h2",{className:"title-card"},t),c&&i.a.createElement("span",{className:"title-card"},"\ud83c\udf1f")),i.a.createElement("h4",{className:"subtitle-card"},"".concat(a," (").concat(o,")")),i.a.createElement("p",{className:"storyline-card"},n),i.a.createElement("p",{className:"rating-card"},"Rating ".concat(r)),this.renderBtnsDetails()))}},{key:"render",value:function(){var e=this.state.loading;return i.a.createElement("div",null,i.a.createElement(b,null),i.a.createElement("div",{className:"container-card-details","data-testid":"movie-details"},e?i.a.createElement(p,null):this.renderCardDetails()))}}]),a}(n.Component),A=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).setNewMovie=n.setNewMovie.bind(Object(u.a)(n)),n.state={newMovie:{title:"",subtitle:"",storyline:"",rating:0,imagePath:"",genre:"action"}},n}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(){var e,t=this.props.history,a=this.state.newMovie;e=a,new Promise((function(t){var a=k(),n=a[a.length-1].id+1,i=Object(g.a)(Object(g.a)({},e),{},{id:n});a=[].concat(Object(E.a)(a),[i]),N(a),O("OK")(t)})),t.push("/")}},{key:"setNewMovie",value:function(e){this.setState({newMovie:e})}},{key:"render",value:function(){var e=this.state.newMovie;return i.a.createElement("div",{"data-testid":"new-movie"},i.a.createElement(b,null),i.a.createElement(x,{type:"Add",movie:e,setMovie:this.setNewMovie}))}}]),a}(n.Component),P=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).fetchMovies=e.fetchMovies.bind(Object(u.a)(e)),e.setMovies=e.setMovies.bind(Object(u.a)(e)),e.state={loading:!0,movies:[]},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.fetchMovies()}},{key:"setMovies",value:function(e){this.setState({movies:e})}},{key:"fetchMovies",value:function(){var e=this;j().then((function(t){return e.setState({loading:!1,movies:t})}))}},{key:"render",value:function(){var e=this.state,t=e.movies,a=e.loading;return i.a.createElement("div",{className:"container-main"},i.a.createElement(b,null),i.a.createElement(w,{setMovies:this.setMovies}),a&&i.a.createElement(p,null),i.a.createElement("div",{"data-testid":"movie-list"},i.a.createElement("div",{className:"container-movies"},t.map((function(e){return i.a.createElement(h,{key:e.id,movie:e})})))))}}]),a}(n.Component),I=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{"data-testid":"404-error"},"Page not Found")}}]),a}(n.Component);a(37);var D=function(){return i.a.createElement(c.a,null,i.a.createElement(o.c,null,i.a.createElement(o.a,{exact:!0,path:"/movies/new",component:A}),i.a.createElement(o.a,{exact:!0,path:"/movies/:id/edit",component:S}),i.a.createElement(o.a,{exact:!0,path:"/movies/:id",render:function(e){return i.a.createElement(F,e)}}),i.a.createElement(o.a,{exact:!0,path:"/",component:P}),i.a.createElement(o.a,{path:"*",component:I})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.e0ebd601.chunk.js.map