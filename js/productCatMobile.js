const lenis =  new Lenis({
    smoothWheel: true,
  });


  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)

gsap.to('.Pro-BTN .text',{
    y:0
})
gsap.to('.Pro-BTN .icon',{
    y:0
})
let header = document.querySelector('header')
header.classList.add('light')
let cats = document.querySelectorAll('.Pro-Cat')
gsap.registerPlugin(ScrollTrigger);
cats.forEach(c=>{
    gsap.to(c.querySelector('img'),{
        scale:1,
        scrollTrigger: {
            trigger:c,
          start: "top 70%", 
          end:'bottom bottom',
        },
    })
    gsap.to(c.querySelector('h2'),{
        y:0,
        scrollTrigger: {
            trigger:c,
          start: "top 70%", 
          end:'bottom bottom',
        },
    })
    gsap.to(c.querySelector('p'),{
        y:0,
        scrollTrigger: {
            trigger:c,
          start: "top 70%", 
          end:'bottom bottom',
        },
    })
})