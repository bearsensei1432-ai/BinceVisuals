/* Bince Visuals – gallery, filters, photo viewer, copy buttons. Photo list lives in photos.js */
const sheet=document.getElementById("sheet");
let view=shots.slice(),idx=0;
const pad=n=>String(n).padStart(2,"0");

for(const k of Object.keys(names)){
  const n=shots.filter(s=>s.c===k).length;
  document.getElementById("cnt-"+k).textContent=n+" frames";
}

function render(f){
  view=f==="all"?shots.slice():shots.filter(s=>s.c===f);
  sheet.innerHTML=view.map((s,i)=>`
    <button class="shot" data-i="${i}" aria-label="Open ${s.t}">
      <div class="ph" style="aspect-ratio:${s.r}"><div class="scene s-${s.s}"></div><span class="slot-label">Photo slot</span><img class="photo" src="${s.src}" alt="${s.t}" loading="lazy" decoding="async" onload="this.parentNode.style.aspectRatio=this.naturalWidth+'/'+this.naturalHeight" onerror="this.remove()"></div>
      <figcaption><span class="mono">${pad(i+1)} · ${s.t}</span><span class="mono">${names[s.c]}</span></figcaption>
    </button>`).join("");
  document.querySelectorAll(".chip").forEach(c=>c.setAttribute("aria-pressed",c.dataset.f===f));
}
render("all");

document.querySelector(".filters").addEventListener("click",e=>{
  const b=e.target.closest(".chip"); if(b) render(b.dataset.f);
});
document.querySelectorAll(".reel").forEach(r=>r.addEventListener("click",()=>{
  render(r.dataset.go);
  document.getElementById("work").scrollIntoView({behavior:"smooth"});
}));

/* lightbox */
const lb=document.getElementById("lb"),lbImg=document.getElementById("lb-img"),lbScene=document.getElementById("lb-scene");
let lastFocus=null;
function show(i){
  idx=(i+view.length)%view.length;
  const s=view[idx];
  lbScene.className="scene s-"+s.s;
  lbImg.style.aspectRatio=s.r;
  const ph=document.getElementById("lb-photo");
  ph.hidden=true; ph.alt=s.t;
  ph.onload=()=>{ph.hidden=false;lbImg.style.aspectRatio=ph.naturalWidth+"/"+ph.naturalHeight};
  ph.onerror=()=>{ph.hidden=true};
  ph.src=s.src;
  document.getElementById("lb-title").textContent=s.t;
  document.getElementById("lb-exif").textContent=s.x||"";
  document.getElementById("lb-count").textContent=`Frame ${pad(idx+1)} / ${pad(view.length)} · ${names[s.c]}`;
}
function openLb(i){lastFocus=document.activeElement;show(i);lb.hidden=false;document.body.style.overflow="hidden";document.getElementById("lb-close").focus()}
function closeLb(){lb.hidden=true;document.body.style.overflow="";lastFocus&&lastFocus.focus()}
sheet.addEventListener("click",e=>{const b=e.target.closest(".shot"); if(b) openLb(+b.dataset.i)});
document.getElementById("lb-close").onclick=closeLb;
document.getElementById("lb-prev").onclick=()=>show(idx-1);
document.getElementById("lb-next").onclick=()=>show(idx+1);
lb.addEventListener("click",e=>{if(e.target===lb||e.target.classList.contains("lb-stage"))closeLb()});
document.addEventListener("keydown",e=>{
  if(lb.hidden)return;
  if(e.key==="Escape")closeLb();
  if(e.key==="ArrowRight")show(idx+1);
  if(e.key==="ArrowLeft")show(idx-1);
});
let sx=null;
lb.addEventListener("touchstart",e=>{sx=e.touches[0].clientX},{passive:true});
lb.addEventListener("touchend",e=>{
  if(sx===null)return; const dx=e.changedTouches[0].clientX-sx; sx=null;
  if(Math.abs(dx)>40) show(idx+(dx<0?1:-1));
});

/* copy email */
document.querySelectorAll(".copy").forEach(b=>b.addEventListener("click",()=>{
  const el=document.getElementById(b.dataset.copy),txt=el.textContent.trim();
  const done=()=>{b.textContent="Copied";setTimeout(()=>b.textContent="Copy",1600)};
  try{navigator.clipboard.writeText(txt).then(done).catch(()=>sel(el))}catch(_){sel(el)}
}));
function sel(el){const r=document.createRange();r.selectNodeContents(el);const s=getSelection();s.removeAllRanges();s.addRange(r)}

/* hero timecode */
const tc=document.getElementById("tc");
if(!matchMedia("(prefers-reduced-motion: reduce)").matches){
  let f=0;setInterval(()=>{f++;const fr=f%24,sec=Math.floor(f/24);tc.textContent=`00:${pad(Math.floor(sec/60)%60)}:${pad(sec%60)}:${pad(fr)}`},1000/24);
}

/* mobile tab highlight */
const tabs=[...document.querySelectorAll(".tabbar a")];
const io=new IntersectionObserver(es=>es.forEach(en=>{
  if(en.isIntersecting){const id=en.target.id;tabs.forEach(t=>t.classList.toggle("on",t.dataset.t===id||(id==="series"&&t.dataset.t==="top")))}
}),{rootMargin:"-45% 0px -50% 0px"});
["top","series","work","about","contact"].forEach(id=>io.observe(document.getElementById(id)));
