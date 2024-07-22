// from initial to final

// gsap.to(".box", {
//   x: 100,
//   y: 50,
//   duration: 2,
//   rotate: 60,
//   delay: 1,
//   backgroundColor: "purple",
// });

// from final to initial

// gsap.from(".box", {
//   x: 100,
//   y: 50,
//   duration: 2,
//   delay: 1,
//   rotate: 60,
//   backgroundColor: "Gold",
// });

// .................................................

// let time = gsap.timeline();

// time.to(".box1", {
//   x: 600,
//   rotate: 360,
//   scale: 0.5,
//   duration: 2,
// });

// time.to(".box2", {
//   x: 600,
//   rotate: 360,
//   scale: 0.5,
//   duration: 2,
// });

// time.to(".box3", {
//   x: 600,
//   rotate: 360,
//   scale: 0.5,
//   duration: 2,
// });

// .................................................

// GSAP Project

// let time = gsap.timeline();

// time.from(".nav h3", {
//   y: -50,
//   opacity: 0,
//   delay: 1,
//   stagger: 0.2,
// });

// time.from(".main h1", {
//   x: -500,
//   opacity: 0,
//   duration: 2,
//   stagger: 1,
// });

// .................................................

// gsap.from(".page1 .circle", {
//   scale: 0,
//   delay: 1,
//   duration: 2,
//   rotate: 360,
// });

// gsap.from(".page2 .circle", {
//   scale: 0,
//   delay: 1,
//   duration: 2,
//   rotate: 360,
//   scrollTrigger: ".page2 .circle",
// });

// gsap.from(".page3 .circle", {
//   scale: 0,
//   delay: 1,
//   duration: 2,
//   rotate: 360,
//   scrollTrigger: {
//     trigger: ".page3 .cirlce",
//     scroller: "body",
//     markers: true,
//     start: "top 60%",
//     end: "top 30%",
//     scrub: 2,
//   },
// });

// .................................................

// gsap.to(".page2 img", {
//   width: "100%",
//   scrollTrigger: {
//     trigger: ".page2",
//     scroller: "body",
//     markers: true,
//     start: "top 0",
//     end: "top -100%",
//     scrub: 2,
//     pin: true,
//   },
// });

// .................................................

// Locomotive

const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

// locomotive sakkiyo
