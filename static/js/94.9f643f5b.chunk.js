"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[94],{2094:function(t,n,e){e.r(n),e.d(n,{default:function(){return h}});var r=e(5861),a=e(9439),c=e(7757),u=e.n(c),s=e(2791),i=e(7689),o=e(1768),p=e(184),f=function(t){var n=t.reviewsInfo;return 0===n.length?(0,p.jsx)("h2",{children:"We don,t have any reviews for this movie"}):(0,p.jsx)("ul",{children:n.map((function(t){var n=t.author,e=t.content,r=t.id;return(0,p.jsxs)("li",{children:[(0,p.jsxs)("p",{children:[" Author: ",n]}),(0,p.jsxs)("p",{children:[" ",e]})]},r)}))})},h=function(){var t=(0,s.useState)(null),n=(0,a.Z)(t,2),e=n[0],c=n[1],h=(0,i.UO)().movieId;if((0,s.useEffect)((function(){function t(){return(t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.q5)(h);case 3:n=t.sent,c(n.results),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[h]),e)return(0,p.jsx)(f,{reviewsInfo:e})}},1768:function(t,n,e){e.d(n,{M1:function(){return w},Q1:function(){return k},ZK:function(){return l},q5:function(){return x},ts:function(){return h}});var r=e(5861),a=e(7757),c=e.n(a),u=e(1243),s="https://api.themoviedb.org/3",i="992e567e43c913ea6cedbae9c8870c1e",o="".concat(s,"/trending/movie/week"),p="".concat(s,"/search/movie"),f="".concat(s,"/movie/");function h(){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={api_key:i},t.next=3,u.Z.get("".concat(o),{params:n});case 3:return e=t.sent,t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={api_key:i},t.next=3,u.Z.get("".concat(f).concat(n),{params:e});case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={api_key:i},t.next=3,u.Z.get("".concat(f).concat(n,"/credits"),{params:e});case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={api_key:i},t.next=3,u.Z.get("".concat(f).concat(n,"/reviews"),{params:e});case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(t){return Z.apply(this,arguments)}function Z(){return(Z=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={api_key:i,query:n},t.next=3,u.Z.get("".concat(p),{params:e});case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=94.9f643f5b.chunk.js.map