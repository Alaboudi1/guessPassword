(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&u(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const d="c",l="g2",a="fh",f="jb3",m="A4",g="Bc5",p="Aa1Bb2Cc3Dd4Ee5Ff6";let c=0,i=0;const h=(r,s)=>{switch(s){case 1:return r===d;case 2:return r===l;case 3:return r===a;case 4:return r===f;case 5:return r===m;case 6:return r===g;case 7:return r===p;default:return!1}},y=()=>{if(console.time("1"),i>10)throw Error;i++;const r=parseInt(document.getElementById("passwordType").value),s=document.getElementById("passwordInput").value,n=h(s,r);c++,document.getElementById("result").innerHTML=n?`<b>${s}</b> is Correct!👏🏻 You have guessed <b> ${c} </b>  times.`:`<b>${s}</b> is Incorrect!❌ You have guessed <b> ${c} </b>  times.`,console.timeEnd("1")};document.getElementById("guess").addEventListener("click",y);