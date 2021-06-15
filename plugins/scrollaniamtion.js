const animtaedScrollObserver = new IntersectionObserver(
  (entries, animtaedScrollObserver)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting){
      entry.target.classList.add('enter');
      animtaedScrollObserver.unobserve(entry.target);
    }
  });
  }
)
export default {
  bind(el){
    animtaedScrollObserver.observe(el,);

  }
}
