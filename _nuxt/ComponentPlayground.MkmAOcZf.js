import{L as m,H as p,d as c,ac as i,r as l,M as e,l as u}from"./entry.3PUCS74T.js";import{u as d}from"./asyncData.NPgEm8I7.js";import f from"./Ellipsis.RWcyNZNK.js";import y from"./ComponentPlaygroundData.cFkZpR5R.js";import"./TabsHeader.Q2yaYO2K.js";import"./ComponentPlaygroundProps.Ml8C76nt.js";import"./ProseH4.Jl0ijuAP.js";import"./ProseCodeInline.wNvKBMtS.js";import"./Badge.l3RI3lxu.js";import"./MDCSlot.pBUiGu7c.js";import"./slot.7N3PIw6e.js";import"./ProseP.zHzpgvjD.js";import"./index.ZU-0RBNH.js";import"./ComponentPlaygroundSlots.vue.LZ6GBRuA.js";import"./ComponentPlaygroundTokens.vue.WG5LM3R7.js";async function g(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=l({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),E=u(h,[["__scopeId","data-v-af8cd031"]]);export{E as default};