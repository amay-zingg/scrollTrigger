https: gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  // toggleActions: "restart pause resume pause",
  // scroller: ".container",
});

gsap.to(["#bg"], {
  scrollTrigger: {
    scrub: 1,
  },
  scale: 1.5,
});

gsap.to(["#man"], {
  scrollTrigger: {
    scrub: 1,
  },
  scale: 0.5,
});

gsap.to(["#mountain_left"], {
  scrollTrigger: {
    scrub: 1,
  },
  x: -500,
});

gsap.to(["#mountain_right"], {
  scrollTrigger: {
    scrub: 1,
  },
  x: 500,
});

gsap.to(["#clouds_1"], {
  scrollTrigger: {
    scrub: 1,
  },
  x: 200,
});

gsap.to(["#clouds_2"], {
  scrollTrigger: {
    scrub: 1,
  },
  x: -200,
});

gsap.to(["#text"], {
  scrollTrigger: {
    scrub: 1,
  },
  y: 600,
});


// https: gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.defaults({
//   toggleActions: "restart pause resume pause",
//   scroller: ".container",
// });

// gsap.to(".orange p", {
//   scrollTrigger: ".orange", 
//   duration: 2, 
//   rotation: 360,
// });

// gsap.to(".red", {
//   scrollTrigger: {
//     trigger: ".red",
//     toggleActions: "restart pause reverse pause"
//   }, 
//   duration: 1, 
//   backgroundColor: "#FFA500", 
//   ease: "none",
// });

// gsap.to(".yoyo p", {
//   scrollTrigger: ".yoyo", 
//   scale: 2, 
//   repeat: -1, 
//   yoyo: true, 
//   ease: "power2"
// });