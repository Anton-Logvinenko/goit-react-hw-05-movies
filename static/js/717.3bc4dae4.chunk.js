"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[717],{717:function(t,n,e){e.r(n),e.d(n,{default:function(){return l}});var r=e(861),a=e(439),c=e(757),u=e.n(c),s=e(791),o=e(689),i=e(429),p=e(184),f=function(t){var n=t.castInfo;return console.log("castInfo",n),0===n.length?(0,p.jsx)("h2",{children:"No cast Information"}):(0,p.jsx)("ul",{children:n.map((function(t){var n=t.id,e=t.name,r=t.character,a=t.profile_path;return(0,p.jsxs)("li",{children:[(0,p.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w500/".concat(a):i,alt:e,width:"70"}),(0,p.jsxs)("p",{children:["Name: ",e]}),(0,p.jsxs)("p",{children:["Character: ",r||'"no information"']})]},n)}))})},h=e(768),l=function(){var t=(0,s.useState)(null),n=(0,a.Z)(t,2),e=n[0],c=n[1],i=(0,o.UO)().movieId;if((0,s.useEffect)((function(){function t(){return(t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,h.M1)(i);case 3:n=t.sent,c(n.cast),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[i]),e)return(0,p.jsx)(f,{castInfo:e})}},768:function(t,n,e){e.d(n,{M1:function(){return v},Q1:function(){return y},ZK:function(){return d},q5:function(){return w},ts:function(){return h}});var r=e(861),a=e(757),c=e.n(a),u=e(243),s="https://api.themoviedb.org/3",o="992e567e43c913ea6cedbae9c8870c1e",i="".concat(s,"/trending/movie/week"),p="".concat(s,"/search/movie"),f="".concat(s,"/movie/");function h(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function t(){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={api_key:o},t.next=3,u.Z.get("".concat(i),{params:n});case 3:return e=t.sent,console.log("111111",e),t.abrupt("return",e.data);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={api_key:o},t.next=3,u.Z.get("".concat(f).concat(n),{params:e});case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={api_key:o},t.next=3,u.Z.get("".concat(f).concat(n,"/credits"),{params:e});case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={api_key:o},t.next=3,u.Z.get("".concat(f).concat(n,"/reviews"),{params:e});case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return k.apply(this,arguments)}function k(){return(k=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={api_key:o,query:n,page:1},t.next=3,u.Z.get("".concat(p),{params:e});case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},429:function(t,n,e){t.exports=e.p+"static/media/posterPlug.fcd4e0277ea2592c9687.png"}}]);
//# sourceMappingURL=717.3bc4dae4.chunk.js.map