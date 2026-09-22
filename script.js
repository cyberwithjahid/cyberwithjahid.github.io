document.getElementById("year").textContent=new Date().getFullYear();
const menu=document.querySelector(".menu"),nav=document.querySelector(".topbar nav");
menu.addEventListener("click",()=>{nav.classList.toggle("open");menu.setAttribute("aria-expanded",nav.classList.contains("open"))});
document.querySelectorAll(".topbar nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const reveal=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");reveal.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll(".reveal").forEach(el=>reveal.observe(el));
window.addEventListener("scroll",()=>{const d=document.documentElement,s=d.scrollTop/(d.scrollHeight-d.clientHeight)*100;document.getElementById("progress").style.width=s+"%"},{passive:true});