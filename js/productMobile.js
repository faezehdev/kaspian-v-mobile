const lenis =  new Lenis({
    smoothWheel: true,
  });
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  } 
requestAnimationFrame(raf)
let header = document.querySelector('header')
header.classList.add('light')
gsap.to('.Section-1 h1',{
    y:0
})
gsap.to('.Section-1 p',{
    y:0
})
// gallery slider
let SwiperBanner= new Swiper ('.swiper-gallery', {
  slidesPerView: 1,
  spaceBetween: 0,
  effect:'fade' ,
  fadeEffect: {
    crossFade: true,
  },
 speed:2000,
 pagination: {
  el: '.gallery-Container .swiper-pagination',
        clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">'+ '</span>';
    },
},
navigation: {
  nextEl: ".gallery-Container .swiper-button-next",
  prevEl: ".gallery-Container .swiper-button-prev",
}
  })
// product slider
let SwiperPro= new Swiper ('.swiper-product', {
  slidesPerView: 1,
  spaceBetween: 0,
  effect:'slide' ,
 speed:200,
navigation: {
  nextEl: ".Related-Container .swiper-button-next",
  prevEl: ".Related-Container .swiper-button-prev",
}
  })
  gsap.to(".roundTxt img", {
    scrollTrigger: {
        trigger: ".Section-1",
        scrub: 1,
        start: 'top top',
        end: '+=5000',
    },
    rotation: 360,
    duration: 1,
    ease: "none",
});
  
let btns = document.querySelectorAll('.HoverNav span.NItem');
let btnLink= document.querySelectorAll('.HoverNav span a');
let sections = document.querySelectorAll('.section')
btns.forEach(btn=>{         

   btn.addEventListener('click',(e)=>{
    console.log(e.currentTarget.children[0]);
    
    e.preventDefault();
    for(let p=0 ; p< btns.length ; p++){
      btns[p].classList.remove('active');
    }
    btn.classList.add('active');
    let target = $(e.currentTarget.children[0]).attr('href');
    lenis.scrollTo(`${target}`,{offset:-115})

  });
  })
gsap.registerPlugin(ScrollTrigger);

lenis.on('scroll', (args) => {
      let scrTop = args.scroll
      sections.forEach(sec =>{
        let top = scrTop;
        let offset = sec.offsetTop-100;
        let height= sec.offsetHeight;
        let id =sec.getAttribute('id')
        if(top>= offset && top < offset + height){
        btns.forEach(btn=>{         
        btn.classList.remove('active');
        if(document.querySelector('.HoverNav a[href*='+id + ']') == null){
          return;
        }
        let parent = document.querySelector('.HoverNav a[href*='+id + ']')
        parent.parentElement.classList.add('active')
       document.querySelector(`.section#${id} `).classList.add('active')
        })
      }
    })
  
},)
