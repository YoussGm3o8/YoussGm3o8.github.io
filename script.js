const header=document.querySelector("[data-header]");
const toggle=document.querySelector("[data-nav-toggle]");
const nav=document.querySelector("[data-nav]");
const year=document.querySelector("[data-year]");

const updateHeader=()=>header?.classList.toggle("scrolled",window.scrollY>12);
updateHeader();
window.addEventListener("scroll",updateHeader,{passive:true});

toggle?.addEventListener("click",()=>{
  const open=toggle.getAttribute("aria-expanded")==="true";
  toggle.setAttribute("aria-expanded",String(!open));
  nav?.classList.toggle("open",!open);
});
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
  nav.classList.remove("open");
  toggle?.setAttribute("aria-expanded","false");
}));

if(year) year.textContent=new Date().getFullYear();

const reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const items=[...document.querySelectorAll(".reveal")];
if(reduce||!("IntersectionObserver" in window)){
  items.forEach(el=>el.classList.add("visible"));
}else{
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
        io.unobserve(entry.target);
      }
    });
  },{threshold:.12,rootMargin:"0px 0px -40px"});
  items.forEach(el=>io.observe(el));
}
