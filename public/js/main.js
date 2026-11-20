const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');if(toggle&&nav){toggle.addEventListener('click',()=>{const opened=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!opened));nav.classList.toggle('open',!opened)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}))}if('IntersectionObserver'in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}})},{threshold:.07});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))}else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));

// Selector accesible de servicios: un detalle y una fotografía grande a la vez.
const browser=document.querySelector('[data-service-browser]');
if(browser){
 const options=[...browser.querySelectorAll('[data-service-select]')];
 const panels=[...browser.querySelectorAll('[data-service-panel]')];
 const activate=(slug,updateHash=false)=>{
  if(!options.some(button=>button.dataset.serviceSelect===slug))return;
  options.forEach(button=>{const active=button.dataset.serviceSelect===slug;button.classList.toggle('selected',active);button.setAttribute('aria-pressed',String(active))});
  panels.forEach(panel=>{panel.hidden=panel.dataset.servicePanel!==slug});
  if(updateHash)history.replaceState(null,'','#'+encodeURIComponent(slug));
 };
 options.forEach(button=>button.addEventListener('click',()=>activate(button.dataset.serviceSelect,true)));
 const initial=decodeURIComponent(location.hash.slice(1));if(initial)activate(initial);
 window.addEventListener('hashchange',()=>activate(decodeURIComponent(location.hash.slice(1))));
}
