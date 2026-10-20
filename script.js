(function(){
var b=document.querySelector('.burger'),u=document.querySelector('.nav ul');
if(b){b.addEventListener('click',function(){u.classList.toggle('open')})}
var io='IntersectionObserver' in window?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12}):null;
document.querySelectorAll('.reveal').forEach(function(el){io?io.observe(el):el.classList.add('in')});
var cur='usd';try{cur=localStorage.getItem('ld_cur')||'usd'}catch(e){}
function setCur(c){cur=c;document.querySelectorAll('[data-gbp]').forEach(function(el){el.textContent=el.getAttribute('data-'+c)});document.querySelectorAll('.toggle button').forEach(function(x){x.classList.toggle('on',x.getAttribute('data-c')===c)});try{localStorage.setItem('ld_cur',c)}catch(e){}}
document.querySelectorAll('.toggle button').forEach(function(x){x.addEventListener('click',function(){setCur(x.getAttribute('data-c'))})});
if(document.querySelector('[data-gbp]'))setCur(cur);
var f=document.getElementById('audit-form');
if(f){f.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(f);var body='Name: '+d.get('name')+'\nEmail: '+d.get('email')+'\nInstagram / Facebook page: '+d.get('page')+'\nBusiness type: '+d.get('type')+'\nMain goal: '+d.get('goal')+'\n\nAnything else:\n'+(d.get('msg')||'');
window.location.href='mailto:laitondigitalmarketing@gmail.com?subject='+encodeURIComponent('Free audit request: '+d.get('name'))+'&body='+encodeURIComponent(body);var s=document.getElementById('sent');if(s)s.style.display='block'})}
})();
