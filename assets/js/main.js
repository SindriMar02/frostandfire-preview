import {initLenis,lenis} from './lenis.js';
import {initMotion} from './motion.js';
import {initMenu} from './menu.js';
import {initStay} from './stay.js';
const {gsap,ScrollTrigger,CustomEase}=window;
// The hero film is the hotel's own drone loop. Reduced motion shows its poster only; the film resumes if the preference is lifted.
{const v=document.querySelector('.hero-video'),mq=matchMedia('(prefers-reduced-motion: reduce)');
 if(v){const sync=()=>{if(mq.matches){v.pause();v.removeAttribute('autoplay');try{v.currentTime=0;}catch{}}else v.play?.().catch(()=>{});};sync();mq.addEventListener('change',sync);
  document.addEventListener('visibilitychange',()=>{if(document.hidden)v.pause();else if(!mq.matches)v.play?.().catch(()=>{});});}}
if(gsap&&ScrollTrigger){
 gsap.registerPlugin(ScrollTrigger,CustomEase);CustomEase.create('house','.625,.05,0,1');ScrollTrigger.config({ignoreMobileResize:true});
 initLenis(gsap,ScrollTrigger);
 const menu=initMenu(),stay=initStay();
 window.ff={menu,stay,get lenis(){return lenis;}};
 await initMotion(gsap,ScrollTrigger);
 document.documentElement.dataset.ready='true';
}
