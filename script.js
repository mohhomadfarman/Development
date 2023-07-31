gsap.registerPlugin(ScrollTrigger);

  // const lenis = new Lenis({
  //   duration: 1.2,
  //   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
  // })

  // function raf(time) {
  //     lenis.raf(time)
  //     requestAnimationFrame(raf)
  // }

  // requestAnimationFrame(raf)
let slider = gsap.timeline();

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.img',
      scrub: 2
    }
  })
  .to('.img', {
    stagger: .2,
    y: -700,
    scrub: true
  })


  

slider.to(".Common-sections",{
    duration:5,
width: "0%",
height: "0",
opacity: 0,
scrollTrigger: {
    trigger: ".Common-sections", // start the animation when ".box" enters the viewport (once)
    start:"top -200px",
    end:"bottom bottom",

      //  markers:true,
        scrub: 2, 
}
}).to(".mein-height",{
    duration:5,
        width: "100%", 
        scrollTrigger: {
            trigger: ".mein-height", // start the animation when ".box" enters the viewport (once)
            start:"top -200px",
        end:"bottom bottom",
        
      //  markers:true,
        scrub: 2, 
        } 
    }).to(".slider-swiper-1",{
        duration:3,
        x: "-50%",
        pin: true,
        scrollTrigger: {
            trigger: ".slider-swiper-1", // start the animation when ".box" enters the viewport (once)
            start:"top -400px",
        end:"bottom bottom",
      //  markers:true,
        scrub: 2, 
        } 
    })
    .to(".text-dive",{
    duration:3,
    x: "-25%",
    y:"100%",
scale:2,
opacity: 1,
    scrollTrigger: {
        trigger: ".text-dive", // start the animation when ".box" enters the viewport (once)
        start:"top 200px",
        end:"bottom bottom",
   markers:true,
    scrub: 2, 
    // delay:2,
    } 
  })

  


let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".wrapper-container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".wrapper-container").offsetWidth
  }
});



