import R from"./DocsAside.1f67885b.js";import U from"./ProseCodeInline.40cfeef5.js";import X from"./Alert.8193b712.js";import Z from"./DocsPageBottom.587595a5.js";import q from"./DocsPrevNext.20b80337.js";import{d as G,V as K,a9 as Q,s as W,I as m,r as $,m as Y,o as ee,ac as oe,b as u,X as A,w as h,J as t,c as g,g as r,f as y,e as p,Z as te,D as x,t as ne,F as se,n as k,a8 as ae,ad as ce,p as le,i as re,k as _e}from"./entry.4f458951.js";import ie from"./DocsToc.c2b15370.js";import"./slot.6e21a7e4.js";import"./node.676c5e99.js";import"./ProseA.93434613.js";import"./EditOnLink.vue.389259d0.js";import"./DocsTocLinks.d6180494.js";const ue=d=>(le("data-v-2b17f4a5"),d=d(),re(),d),pe={class:"page-body"},de={key:1,class:"toc"},me={class:"toc-wrapper"},fe=ue(()=>p("span",{class:"title"},"Table of Contents",-1)),ve=G({__name:"DocsPageLayout",setup(d){const{page:s}=K(),{config:f,tree:b}=Q(),F=W(),H=(e,o=!0)=>{var n;return typeof((n=s.value)==null?void 0:n[e])<"u"?s.value[e]:o},T=m(()=>{var e,o,n;return!s.value||((n=(o=(e=s.value)==null?void 0:e.body)==null?void 0:o.children)==null?void 0:n.length)>0}),P=m(()=>{var e,o,n,c,l;return((e=s.value)==null?void 0:e.toc)!==!1&&((l=(c=(n=(o=s.value)==null?void 0:o.body)==null?void 0:n.toc)==null?void 0:c.links)==null?void 0:l.length)>=2}),S=m(()=>{var e,o,n,c,l;return((e=s.value)==null?void 0:e.aside)!==!1&&(((o=b.value)==null?void 0:o.length)>1||((l=(c=(n=b.value)==null?void 0:n[0])==null?void 0:c.children)==null?void 0:l.length))}),L=m(()=>H("bottom",!0)),_=$(!1),a=$(null),v=()=>F.path.split("/").slice(0,2).join("/"),i=Y("asideScroll",()=>{var e;return{parentPath:v(),scrollTop:((e=a.value)==null?void 0:e.scrollTop)||0}});function C(){a.value&&(a.value.scrollHeight===0&&setTimeout(C,0),a.value.scrollTop=i.value.scrollTop)}return ee(()=>{i.value.parentPath!==v()?(i.value.parentPath=v(),i.value.scrollTop=0):C()}),oe(()=>{a.value&&(i.value.scrollTop=a.value.scrollTop)}),(e,o)=>{var D,w,B,I,N,V;const n=R,c=U,l=X,M=Z,j=q,z=ae,E=ie,J=ce;return u(),A(J,{fluid:(w=(D=t(f))==null?void 0:D.main)==null?void 0:w.fluid,padded:(I=(B=t(f))==null?void 0:B.main)==null?void 0:I.padded,class:k(["docs-page-content",{fluid:(V=(N=t(f))==null?void 0:N.main)==null?void 0:V.fluid,"has-toc":t(P),"has-aside":t(S)}])},{default:h(()=>[t(S)?(u(),g("aside",{key:0,ref_key:"asideNav",ref:a,class:"aside-nav"},[r(n,{class:"app-aside"})],512)):y("",!0),p("article",pe,[t(T)?te(e.$slots,"default",{key:0},void 0,!0):(u(),A(l,{key:1,type:"info"},{default:h(()=>[x(" Start writing in "),r(c,null,{default:h(()=>[x("content/"+ne(t(s)._file),1)]),_:1}),x(" to see this page taking shape. ")]),_:1})),t(T)&&t(s)&&t(L)?(u(),g(se,{key:2},[r(M),r(j)],64)):y("",!0)]),t(P)?(u(),g("div",de,[p("div",me,[p("button",{onClick:o[0]||(o[0]=O=>_.value=!t(_))},[fe,r(z,{name:"heroicons-outline:chevron-right",class:k(["icon",[t(_)&&"rotate"]])},null,8,["class"])]),p("div",{class:k(["docs-toc-wrapper",[t(_)&&"opened"]])},[r(E,{onMove:o[1]||(o[1]=O=>_.value=!1)})],2)])])):y("",!0)]),_:3},8,["fluid","padded","class"])}}});const Be=_e(ve,[["__scopeId","data-v-2b17f4a5"]]);export{Be as default};
