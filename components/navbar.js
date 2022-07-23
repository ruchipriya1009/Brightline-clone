window.addEventListener("scroll",()=>{
    let nav=document.querySelector(".navbar");
    let position=window.scrollY>0;
    nav.classList.toggle("afterscroll", position);
})

const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click",function(e) {
  const ul = document.querySelector('header  ul');
  ul.classList.toggle('menu-slide');
  hamburger.classList.toggle("cross")
})