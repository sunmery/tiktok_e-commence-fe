import{p as t,s as r}from"./react-B4QmjwaR.js";const s=localStorage.getItem("addresses"),a=s?JSON.parse(s):[],e=t({addresses:a,default_address:{id:1,street_address:"Connecticut",city:"Hermannbury",state:"Wisconsin",country:"elit",zip_code:"94832-4784"}});r(e,()=>{localStorage.setItem("addresses",JSON.stringify(e.addresses))});export{e as a};