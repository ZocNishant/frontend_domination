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

// const scroll = new LocomotiveScroll({
//   el: document.querySelector(".main"),
//   smooth: true,
// });

// locomotive sakkiyo

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform
    ? "transform"
    : "fixed",
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

gsap.from(".page1 .box1", {
  scale: 0,
  duration: 1,
  delay: 1,
  opacity: 0,
  rotate: 360,
});

gsap.from(".page2 .box2", {
  scale: 0,
  duration: 1,
  delay: 1,
  opacity: 0,
  rotate: 360,
  scrollTrigger: ".page2 .box2",
  scroller: ".main",
  markers: true,
  start: "top 50%",
});

gsap.from(".page3 .box3", {
  scale: 0,
  duration: 1,
  delay: 1,
  opacity: 0,
  rotate: 360,
  scrollTrigger: ".page3 .box3",
  scroller: ".main",
  markers: true,
  start: "top 50%",
});
