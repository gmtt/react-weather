(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5410:function(e,t,n){e.exports=n(5524)},5524:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(36),c=n.n(i),o=n(16),l=n(17),s=n(22),u=n(18),m=n(23),p=n(20),d=n(5),h=n(21),y=n.n(h),f={"Los Angeles":5368361,Shanghai:1796231},v=n(25);function w(e){for(var t in f)if(f[t]===e)return t;return"None"}var b=Object(v.b)(function(e){return{curLocation:w(e.weather.curCity)}},null)(Object(p.withStyles)(function(e){return{typography:{fontSize:"2rem",margin:"auto"}}},{withTheme:!0})(function(e){var t=e.classes;return a.a.createElement(d.q,{gutterBottom:!0,align:"center",className:t.typography,color:e.theme.lightGreen},e.curLocation)})),g=n(107),E=n.n(g);function j(e,t){var n={id:t,data:[]},r=!0,a=!1,i=void 0;try{for(var c,o=e.list[Symbol.iterator]();!(r=(c=o.next()).done);r=!0){var l=c.value;n.data.push({time:l.dt_txt,temp:l.main.temp,temp_max:l.main.temp_max,temp_min:l.main.temp_min,pressure:l.main.pressure,humidity:l.main.humidity,wind_speed:l.wind.speed,wind_deg:l.wind.deg,weather_id:l.weather[0].id,weather_main:l.weather[0].main,weather_description:l.weather[0].description,weather_icon:l.weather[0].icon})}}catch(s){a=!0,i=s}finally{try{r||null==o.return||o.return()}finally{if(a)throw i}}return n}var O=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).props.fetchWeather(Object.values(f)[0]),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=[];for(var n in f)t.push(a.a.createElement(d.h,{control:a.a.createElement(d.o,null),label:n,value:f[n].toString(),key:n}));return a.a.createElement(d.g,null,a.a.createElement(d.p,{row:!0,value:this.props.curCity.toString(),onChange:function(t){e.props.fetchWeather(Number(t.target.value))}},t))}}]),t}(a.a.Component),x=Object(v.b)(function(e){return{curCity:e.weather.curCity}},function(e){return{fetchWeather:function(t){return function(e){return function(t){return t({type:"FETCH",id:e}),E()("http://api.openweathermap.org/data/2.5/forecast?id=".concat(e,"&APPID=862f6ea3d5a071f3e2ae81ba1ed2fb18&units=metric")).then(function(e){return e.json()}).then(function(n){t({type:"SUCCESS",city:j(n,e),id:e})})}}(t)(e)}}})(O);var C=Object(p.withStyles)(function(e){return{root:{backgroundColor:"#ede7f6",padding:"4px"}}})(function(e){var t=e.classes;return a.a.createElement(y.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",className:t.root},a.a.createElement(y.a,{item:!0,xs:8},a.a.createElement(b,null)),a.a.createElement(y.a,{item:!0,xs:4},a.a.createElement(x,null)))}),_=n(42),S=n.n(_),k=n(61),W={"01":"static/sunny.svg","02":"static/partly.svg","03":"static/cloudy.svg","04":"static/cloudy.svg","09":"static/rainy.svg",10:"static/pourin.svg",11:"static/lightn.svg",13:"static/snowy.svg",50:"static/fog.svg"},I=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleExpandClick=function(){n.setState(function(e){return{expanded:!e.expanded}})},n.state={expanded:!1},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.createElement(S.a,{elevation:6},r.createElement(d.e,{title:this.props.description,subheader:this.props.time}),r.createElement(d.d,null,r.createElement(y.a,{container:!0,alignItems:"center",justify:"flex-start"},r.createElement(y.a,{item:!0,xs:4},r.createElement(d.a,{alt:"weatherIcon",src:W[this.props.iconId.slice(0,2)]})),r.createElement(y.a,{item:!0,xs:8},r.createElement(d.q,{variant:"subtitle1",gutterBottom:!0},this.props.temp_min,"\xb0C ~ ",this.props.temp_max,"\xb0C")))),r.createElement(d.c,null,r.createElement(d.b,{onClick:this.handleExpandClick,fullWidth:!0},r.createElement(y.a,{container:!0,alignItems:"center",justify:"center"},this.state.expanded?r.createElement(k.b,null):r.createElement(k.a,null),this.state.expanded?"Hide":"Show Details"))),r.createElement(d.f,{in:this.state.expanded,timeout:"auto"},r.createElement(d.k,null,r.createElement(d.l,null,r.createElement(d.m,{primary:"Pressure",secondary:this.props.pressure+"hPa"})),r.createElement(d.l,null,r.createElement(d.m,{primary:"humidity",secondary:this.props.humidity+"%"})),r.createElement(d.l,null,r.createElement(d.m,{primary:"Wind Speed",secondary:this.props.wind_speed+"m/s"})),r.createElement(d.l,null,r.createElement(d.m,{primary:"Wind Deg",secondary:this.props.wind_deg+"\xb0"})))))}}]),t}(r.Component),L=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=[],n=!0,a=!1,i=void 0;try{for(var c,o=this.props.cities[Symbol.iterator]();!(n=(c=o.next()).done);n=!0){var l=c.value;if(l.id===this.props.curCity){var s=0,u=!0,m=!1,p=void 0;try{for(var h,y=l.data[Symbol.iterator]();!(u=(h=y.next()).done);u=!0){var f=h.value;t.push(r.createElement(d.j,{key:s++,className:e.gridListTile},r.createElement(I,{description:f.weather_description,iconId:f.weather_icon,temp_min:f.temp_min,temp_max:f.temp_max,time:f.time,pressure:f.pressure,humidity:f.humidity,wind_speed:f.wind_speed,wind_deg:f.wind_deg})))}}catch(v){m=!0,p=v}finally{try{u||null==y.return||y.return()}finally{if(m)throw p}}}}}catch(v){a=!0,i=v}finally{try{n||null==o.return||o.return()}finally{if(a)throw i}}return r.createElement(d.i,{className:e.gridList,cellHeight:"auto",spacing:20},t)}}]),t}(r.Component),N=Object(v.b)(function(e){return{cities:e.weather.cities,curCity:e.weather.curCity}},null)(Object(p.withStyles)(function(e){return{gridList:{flexWrap:"nowrap"},gridListTile:{maxWidth:"300px"}}})(L)),T=n(110),B=Object(p.createMuiTheme)({palette:{type:"light"},typography:{useNextVariants:!0}}),D=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(T.a,{theme:B},a.a.createElement(d.n,null,a.a.createElement(C,null),a.a.createElement(N,null)))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=n(24),P=n(62),q=Object(H.combineReducers)({weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cities:[],curCity:0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH":return Object(P.a)({},e,{curCity:t.id});case"SUCCESS":var n=!1,r=e.cities.map(function(e){return e.id===t.id?(n=!0,t.city):e});return n||r.push(t.city),Object(P.a)({},e,{cities:r});default:return e}}}),A=n(108),F=n(109),J=Object(H.createStore)(q,Object(A.composeWithDevTools)(Object(H.applyMiddleware)(F.a)));c.a.render(a.a.createElement(v.a,{store:J},a.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[5410,2,1]]]);
//# sourceMappingURL=main.8eefa86c.chunk.js.map