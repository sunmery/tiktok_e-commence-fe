import{c as a,r as n,j as s}from"./index-0_AJGUiB.js";import{u as c}from"./react-B4QmjwaR.js";import{a as d}from"./addressesStore-C5g-Df6S.js";import{u as l}from"./user-DJrwfZtz.js";const j=a("/orders/")({component:u});function u(){const[i,o]=n.useState([]),{default_address:t}=c(d),{account:r}=c(l);return n.useEffect(()=>{fetch("http://36.137.181.229:30009/v1/orders",{method:"POST",headers:{Authorization:"Bearer "+localStorage.getItem("token")},body:JSON.stringify({owner:r.owner,name:r.name,user_currency:r.user_currency,address:t,email:r.email,order_items:i})}).then(e=>e.json()).then(e=>o(e)).catch(e=>console.error(e))},[]),s.jsx("div",{children:(i==null?void 0:i.length)>0?i.map(e=>s.jsxs("ol",{children:[s.jsx("li",{children:s.jsxs("span",{children:[t.id,",",t.street_address,",",t.city,",",t.state,",",t.country,",",t.zip_code]})}),s.jsxs("li",{children:["id:",e.id]}),s.jsxs("li",{children:["name:",e.name]}),s.jsxs("li",{children:["description:",e.description]}),s.jsxs("li",{children:["picture:",e.picture]}),s.jsxs("li",{children:["price:",e.price]}),s.jsxs("li",{children:["quantity:",e.quantity]}),s.jsxs("li",{children:["categories:",e.categories]})]},e.id)):s.jsx("div",{children:"暂无数据"})})}export{j as Route};
