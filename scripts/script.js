https: gsap.registerPlugin(ScrollTrigger);
// * * * * Forest Parallax
let text = document.getElementById("text");
let bird1 = document.getElementById("bird1");
let bird2 = document.getElementById("bird2");
let btn = document.getElementById("btn");
let rocks = document.getElementById("rocks");
let water = document.getElementById("water");
let forest = document.getElementById("forest");
let header = document.getElementById("header");

window.addEventListener("scroll", function () {
  let value = window.scrollY;

  text.style.top = 50 + value * -0.5 + "%";
  bird1.style.top = value * -1.5 + "px";
  bird1.style.left = value * 2 + "px";
  bird2.style.top = value * -1.5 + "px";
  bird2.style.left = value * -5 + "px";

  btn.style.marginTop = value * 1.5 + "px";
  rocks.style.top = value * -0.12 + "px";
  forest.style.top = value * 0.25 + "px";

  header.style.top = value * 0.5 + "px";
});

// * * * * Mountains Parallax Animation
// gsap.to(["#bg"], {
//   scrollTrigger: {
//     scrub: 1,
//   },
//   scale: 1.5,
// });

// gsap.to(["#man"], {
//   scrollTrigger: {
//     scrub: 1,
//   },
//   scale: 0.5,
// });

// gsap.to(["#mountain_left"], {
//   scrollTrigger: {
//     scrub: 1,
//   },
//   x: -500,
// });

// gsap.to(["#mountain_right"], {
//   scrollTrigger: {
//     scrub: 1,
//   },
//   x: 500,
// });

// gsap.to(["#clouds_1"], {
//   scrollTrigger: {
//     scrub: 1,
//   },
//   x: 200,
// });

// gsap.to(["#clouds_2"], {
//   scrollTrigger: {
//     scrub: 1,
//   },
//   x: -200,
// });

// gsap.to(["#text"], {
//   scrollTrigger: {
//     scrub: 1,
//   },
//   y: 600,
// });
