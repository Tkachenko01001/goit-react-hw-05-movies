"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{415:function(t,e,n){n.r(e),n.d(e,{API_KEY:function(){return d},URL:function(){return s}});var c=n(439),r=n(791),i=n(243),a=n(689),o=n(87),u=n(184),s="https://api.themoviedb.org/",d="9966181ff2d8ade1b3b30b053a683c00";e.default=function(){var t=(0,r.useState)([]),e=(0,c.Z)(t,2),n=e[0],f=e[1];(0,r.useEffect)((function(){i.Z.get("".concat(s,"/3/trending/movie/day?api_key=").concat(d)).then((function(t){f(t.data.results)})).catch((function(t){console.log(t)}))}),[]);var l=(0,a.TH)();return(0,u.jsxs)("div",{children:[(0,u.jsx)("h1",{children:"Trending today"}),(0,u.jsx)("ul",{children:n.map((function(t){return(0,u.jsxs)("li",{children:[" ",(0,u.jsx)(o.rU,{to:"/movies/".concat(t.id),state:{from:l},children:t.title})," "]},t.id)}))})]})}}}]);
//# sourceMappingURL=415.a68a72a3.chunk.js.map