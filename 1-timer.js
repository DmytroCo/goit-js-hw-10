import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{f as b,i as l}from"./assets/vendor-BbbuE1sJ.js";const e=document.querySelector("#datetime-picker"),o=document.querySelector("button[data-start]"),p=document.querySelector(".value[data-seconds]"),y=document.querySelector(".value[data-minutes]"),g=document.querySelector(".value[data-hours]"),C=document.querySelector(".value[data-days]");o.setAttribute("disabled",!0);let a;const v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){a=t[0],console.log(a),a.getTime()<=Date.now()?(l.error({title:"Error",message:"Please choose a date in the future",position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff",messageSize:"16px",titleColor:"#ffffff"}),o.setAttribute("disabled",!0)):a.getTime()>Date.now()&&(l.success({title:"OK",message:"Press Start!",position:"topRight",backgroundColor:"#59A10D",messageColor:"#ffffff",messageSize:"16px",titleColor:"#ffffff"}),o.removeAttribute("disabled"))}};e.addEventListener("input",b("#datetime-picker",v));o.addEventListener("click",D);function S(t){const n=Math.floor(t%864e5%36e5%6e4/1e3),s=Math.floor(t%864e5%36e5/6e4),r=Math.floor(t%864e5/36e5);return{days:Math.floor(t/864e5),hours:r,minutes:s,seconds:n}}const i=t=>t.toString().padStart(2,"0");function D(){o.setAttribute("disabled",!0);const t=setInterval(()=>{const d=new Date,u=new Date(e.value)-d,{days:c,hours:n,minutes:s,seconds:r}=S(u);if(u<=0){e.removeAttribute("disabled");return}e.setAttribute("disabled",!0),p.textContent=i(r),y.textContent=i(s),g.textContent=i(n),C.textContent=i(c),[c,n,s,r].every(h=>h===0)&&(clearInterval(t),e.disabled=!1)},1e3)}
//# sourceMappingURL=1-timer.js.map