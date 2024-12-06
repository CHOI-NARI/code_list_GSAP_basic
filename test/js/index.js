gsap.registerPlugin(ScrollTrigger);

const timeline3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".anything",
    markers: true,
    pin: true,
    scrub: 1,
    start: "top top",
    end: "bottom bottom",
  },
});

timeline3.to(".anythingContainer", {
  x: -2360,
  duration: 3,
});
