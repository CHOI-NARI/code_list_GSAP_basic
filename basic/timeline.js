// new Date()
// 타임라인 생성 : 애니메이션 순서 정하기

const timeline = gsap.timeline();

timeline.to(".circle", {
  y: 0,
  duration: 3,
  opacity: 1,
});

timeline.to(
  ".box",
  {
    x: 0,
    duration: 3,
    opacity: 1,
  },
  "-=1" // 앞에 있는 애니메이션이 끝나기 1초전에 시작해줘
  //"<" //앞에 있는 애니메이션이랑 똑같이 시작해줘
);

timeline.to(".text", {
  y: 0,
  duration: 0.5,
  opacity: 1,
});
