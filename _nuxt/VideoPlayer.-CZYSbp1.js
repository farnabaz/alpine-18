import{d as m,H as i,r as f,b as o,c,L as e,W as _,f as u,F as h,Y as v,n as k,$ as w,p as b,i as g,e as x,l as B}from"./entry.3PUCS74T.js";const I=t=>(b("data-v-78c38406"),t=t(),g(),t),S={key:1,class:"loaded"},$=["poster"],C=["src"],V=["src","type"],N=["autoplay","src"],E=I(()=>x("button",null,null,-1)),F=[E],L=m({__name:"VideoPlayer",props:{poster:{type:String,default:""},src:{type:String,default:""},sources:{type:Array,default:()=>[]},autoplay:{type:Boolean,default:!1}},setup(t){const r=t,a=i(()=>{if(r.src&&r.src.includes("youtube.com/watch")){const s=r.src.match(/\?v=([^&]*)/);return{name:"youtube",src:`https://www.youtube-nocookie.com/embed/${(s==null?void 0:s[1])||""}?autoplay=1`,poster:r.poster||`https://i3.ytimg.com/vi/${(s==null?void 0:s[1])||""}/hqdefault.jpg`}}}),p=f(!1);if(!r.src&&!r.sources.length)throw new Error("VideoPlayer: you need to provide either `src` or `sources` props");const d=i(()=>{var s,l;return r.src||((l=(s=r.sources)==null?void 0:s[0])==null?void 0:l.src)||!1});return(s,l)=>{const y=w;return o(),c("div",{class:k(["video-player",{loaded:e(p)}])},[(e(a)?e(a).poster:t.poster)?(o(),_(y,{key:0,src:e(a)?e(a).poster:t.poster},null,8,["src"])):u("",!0),e(p)?(o(),c("div",S,[e(a)?e(a).name==="youtube"?(o(),c("iframe",{key:1,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true",autoplay:t.autoplay,src:e(a).src},null,8,N)):u("",!0):(o(),c("video",{key:0,poster:t.poster,controls:"",autoplay:""},[e(d)?(o(),c("source",{key:0,src:e(d)},null,8,C)):u("",!0),(o(!0),c(h,null,v(t.sources,n=>(o(),c("source",{key:n.src||n,src:n.src||n,type:n.type},null,8,V))),128))],8,$))])):u("",!0),e(p)?u("",!0):(o(),c("div",{key:2,class:"play-button",onClick:l[0]||(l[0]=n=>p.value=!0)},F))],2)}}}),j=B(L,[["__scopeId","data-v-78c38406"]]);export{j as default};
