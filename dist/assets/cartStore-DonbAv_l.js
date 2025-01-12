import{v as G,w as K,x as f,_ as a,r as p,y as Q,z as I,V as X,N as Y,A as D,j as y,D as _,E as Z}from"./index-0_AJGUiB.js";import{p as w,s as oo}from"./react-B4QmjwaR.js";function eo(e){return G("MuiTypography",e)}K("MuiTypography",["root","h1","h2","h3","h4","title-lg","title-md","title-sm","body-lg","body-md","body-sm","body-xs","noWrap","gutterBottom","startDecorator","endDecorator","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid"]);const to=["color","textColor"],ro=["component","gutterBottom","noWrap","level","levelMapping","children","endDecorator","startDecorator","variant","slots","slotProps"],N=p.createContext(!1),ao=p.createContext(!1),so=e=>{const{gutterBottom:o,noWrap:l,level:s,color:t,variant:r}=e,i={root:["root",s,o&&"gutterBottom",l&&"noWrap",t&&`color${_(t)}`,r&&`variant${_(r)}`],startDecorator:["startDecorator"],endDecorator:["endDecorator"]};return Z(i,eo,{})},lo=f("span",{name:"JoyTypography",slot:"StartDecorator",overridesResolver:(e,o)=>o.startDecorator})({display:"inline-flex",marginInlineEnd:"clamp(4px, var(--Typography-gap, 0.375em), 0.75rem)"}),no=f("span",{name:"JoyTypography",slot:"endDecorator",overridesResolver:(e,o)=>o.endDecorator})({display:"inline-flex",marginInlineStart:"clamp(4px, var(--Typography-gap, 0.375em), 0.75rem)"}),io=f("span",{name:"JoyTypography",slot:"Root",overridesResolver:(e,o)=>o.root})(({theme:e,ownerState:o})=>{var l,s,t,r,i;const d=o.level!=="inherit"?(l=e.typography[o.level])==null?void 0:l.lineHeight:"1";return a({"--Icon-fontSize":`calc(1em * ${d})`},o.color&&{"--Icon-color":"currentColor"},{margin:"var(--Typography-margin, 0px)"},o.nesting?{display:"inline"}:a({display:"block"},o.unstable_hasSkeleton&&{position:"relative"}),(o.startDecorator||o.endDecorator)&&a({display:"flex",alignItems:"center"},o.nesting&&a({display:"inline-flex"},o.startDecorator&&{verticalAlign:"bottom"})),o.level&&o.level!=="inherit"&&e.typography[o.level],{fontSize:`var(--Typography-fontSize, ${o.level&&o.level!=="inherit"&&(s=(t=e.typography[o.level])==null?void 0:t.fontSize)!=null?s:"inherit"})`},o.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},o.gutterBottom&&{marginBottom:"0.35em"},o.color&&{color:`var(--variant-plainColor, rgba(${(r=e.vars.palette[o.color])==null?void 0:r.mainChannel} / 1))`},o.variant&&a({borderRadius:e.vars.radius.xs,paddingBlock:"min(0.1em, 4px)",paddingInline:"0.25em"},!o.nesting&&{marginInline:"-0.25em"},(i=e.variants[o.variant])==null?void 0:i[o.color]))}),R={h1:"h1",h2:"h2",h3:"h3",h4:"h4","title-lg":"p","title-md":"p","title-sm":"p","body-lg":"p","body-md":"p","body-sm":"p","body-xs":"span",inherit:"p"},po=p.forwardRef(function(o,l){var s;const t=Q({props:o,name:"JoyTypography"}),{color:r,textColor:i}=t,d=I(t,to),g=p.useContext(N),E=p.useContext(ao),h=X(a({},d,{color:i})),{component:W,gutterBottom:j=!1,noWrap:k=!1,level:z="body-md",levelMapping:J=R,children:c,endDecorator:T,startDecorator:C,variant:b,slots:M={},slotProps:S={}}=h,O=I(h,ro),U=(s=o.color)!=null?s:b?r??"neutral":r,v=g||E?o.level||"inherit":z,P=Y(c,["Skeleton"]),$=W||(g?"span":J[v]||R[v]||"span"),m=a({},h,{level:v,component:$,color:U,gutterBottom:j,noWrap:k,nesting:g,variant:b,unstable_hasSkeleton:P}),u=so(m),x=a({},O,{component:$,slots:M,slotProps:S}),[A,H]=D("root",{ref:l,className:u.root,elementType:io,externalForwardedProps:x,ownerState:m}),[V,F]=D("startDecorator",{className:u.startDecorator,elementType:lo,externalForwardedProps:x,ownerState:m}),[L,q]=D("endDecorator",{className:u.endDecorator,elementType:no,externalForwardedProps:x,ownerState:m});return y.jsx(N.Provider,{value:!0,children:y.jsxs(A,a({},H,{children:[C&&y.jsx(V,a({},F,{children:C})),P?p.cloneElement(c,{variant:c.props.variant||"inline"}):c,T&&y.jsx(L,a({},q,{children:T}))]}))})});po.muiName="Typography";const B=localStorage.getItem("cart"),co=B?JSON.parse(B):[],n=w({items:co,addItem(e,o,l,s){const t=n.items.find(r=>r.id===e);t?t.quantity+=s:n.items.push({id:e,name:o,price:l,quantity:s})},removeItem(e){n.items=n.items.filter(o=>o.id!==e)},clearCart(){n.items=[]}});oo(n,()=>{localStorage.setItem("cart",JSON.stringify(n.items))});export{po as T,ao as a,n as c};