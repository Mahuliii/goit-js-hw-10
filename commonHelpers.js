import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as m,i as f}from"./assets/vendor-77e16229.js";let c=null;const n={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")},s=document.querySelector("#datetime-picker");m(s,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0],console.log(t[0]);let e=document.querySelector("[data-start]");t[0].getTime()<=new Date().getTime()?(e.disabled=!0,f.show({backgroundColor:"rgba(239, 64, 64, 1)",title:"Error",titleColor:"rgba(255, 255, 255, 1)",message:"Please choose a date in the future",messageColor:"rgba(255, 255, 255, 1)",position:"topCenter"})):(e.disabled=!1,e.addEventListener("click",()=>{e.disabled=!0,s.disabled=!0,c=setInterval(()=>{const r=Date.now(),o=t[0]-r;o<1e3&&(clearInterval(c),e.disabled=!1,s.disabled=!1);const{days:d,hours:u,minutes:l,seconds:i}=y(o);h(d,u,l,i)},1e3)}))}});const h=(t,e,r,o)=>{n.days.textContent=a(t),n.hours.textContent=a(e),n.minutes.textContent=a(r),n.seconds.textContent=a(o)},a=t=>t<10?"0"+t:t,y=t=>{const e=Math.floor(t/1e3%60),r=Math.floor(t/1e3/60%60),o=Math.floor(t/1e3/60/60%24);return{days:Math.floor(t/(1e3*60*60*24)),hours:o,minutes:r,seconds:e}};
//# sourceMappingURL=commonHelpers.js.map
