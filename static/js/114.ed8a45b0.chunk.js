"use strict";(self.webpackChunktest_tweets=self.webpackChunktest_tweets||[]).push([[114],{4114:function(e,n,t){t.r(n),t.d(n,{default:function(){return I}});var r=t(9439),l=t(8683),o=t(4925),i=t(7584),s=t(184),u=["selected","type","children"],c=function(e){var n=e.onClick;return(0,s.jsx)(i.jC,{type:"button",onClick:n,style:{backgroundColor:"#5CD3A8"},children:"Load more"})},f=function(e){e.selected;var n=e.type,t=void 0===n?"button":n,r=e.children,c=(0,o.Z)(e,u);return(0,s.jsx)(i.Gw,(0,l.Z)((0,l.Z)({type:t},c),{},{children:r}))},d=t(7582),a=t(9434),w=t(1429),h=t(3660),j=function(e){return e.users},x=function(e){return e.users.pagination},g=function(e){return e.filters.status},v=(0,h.createSelector)([function(e){return e.users.items},g],(function(e,n){switch(n){case d.H.follow:return e.filter((function(e){return!e.isFollower}));case d.H.following:return e.filter((function(e){return e.isFollower}));default:return e}})),F=function(){var e=(0,a.I0)(),n=(0,a.v9)(g),t=function(n){return e((0,w.b)(n))};return(0,s.jsxs)("div",{children:[(0,s.jsx)(f,{selected:n===d.H.all,onClick:function(){return t(d.H.all)},children:"All"}),(0,s.jsx)(f,{selected:n===d.H.follow,onClick:function(){return t(d.H.follow)},children:"Follow"}),(0,s.jsx)(f,{selected:n===d.H.following,onClick:function(){return t(d.H.following)},children:"Following"})]})},k=t(4225),p=function(e){var n,t=e.avatar,r=e.tweets,o=e.followers,u=e.user,c=e.id,f=e.isFollower,d=(0,a.I0)(),w={avatar:t,tweets:r,user:u,id:c};return(0,s.jsx)(i.ck,{children:(0,s.jsxs)(i.du,{children:[(0,s.jsx)(i.HK,{children:(0,s.jsx)(i.qE,{src:t,alt:u})}),(0,s.jsxs)(i.mo,{children:[(0,s.jsxs)(i.iU,{children:[r," Tweets"]}),(0,s.jsxs)(i.g3,{children:[(n=o,n.toString().length>3?n.toString().slice(0,n.toString().length-3)+","+n.toString().slice(n.toString().length-3):n.toString())," Followers"]}),(0,s.jsx)(i.jC,{type:"button",onClick:function(){d(f?(0,k.A)((0,l.Z)((0,l.Z)({},w),{},{followers:o-1,isFollower:!1})):(0,k.A)((0,l.Z)((0,l.Z)({},w),{},{followers:o+1,isFollower:!0})))},bgColor:f,children:f?"Following":"Follow"})]})]})})},C=function(e){var n=e.items;return(0,s.jsx)(i.aV,{children:null===n||void 0===n?void 0:n.map((function(e){return(0,s.jsx)(p,{avatar:e.avatar,tweets:e.tweets,followers:e.followers,user:e.user,id:e.id,isFollower:e.isFollower},e.id)}))})},m=t(6058),H=t.n(m),S=function(){return(0,s.jsx)(i.zL,{children:(0,s.jsx)(H(),{color:"#f7f507",size:"50px"})})},b=t(2791),Z=t(7689),y=t(9114),A=function(){var e,n,t=(0,Z.TH)(),l=(0,a.I0)(),o=(0,a.v9)(v),u=(0,a.v9)(j),f=u.isLoading,w=u.error,h=u.items,g=(0,a.v9)(x),p=g.page,m=g.limit,H=(0,b.useState)(!0),A=(0,r.Z)(H,2),I=A[0],L=A[1];(0,b.useEffect)((function(){l((0,k.u)({page:p,limit:m}))}),[l,p,m]);var T=function(e,n){switch(n){case d.H.follow:return e.filter((function(e){return!e.isFollower}));case d.H.following:return e.filter((function(e){return e.isFollower}));default:return e}}(o),z=null!==(e=null===t||void 0===t||null===(n=t.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.hx,{to:z,children:"Go back"}),(0,s.jsx)(i.aT,{children:"Filters"}),(0,s.jsx)(F,{}),(0,s.jsxs)(i.S$,{children:[(0,s.jsxs)(i.oR,{children:[f&&!w&&(0,s.jsx)(S,{}),(0,s.jsx)(C,{items:T}),f&&(0,s.jsx)(S,{})]}),I?(0,s.jsx)(c,{onClick:function(){l((0,y.Jr)({page:p,limit:m+3})),m>h.length&&L(!1)}}):(0,s.jsx)(i.v3,{children:"Sorry this is the end!"})]})]})},I=function(){return(0,s.jsx)(A,{})}}}]);
//# sourceMappingURL=114.ed8a45b0.chunk.js.map