//Slick slider
$(".parts").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: false,
  dots: false,
  speed: 300,
  responsive: [
    {
      breakpoint: 1025, // 1024px 이하에서는 슬라이드 제거
      settings: "unslick",
    },
    {
      breakpoint: 768, // 767px 이하에서는 1개씩 보여줌
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        speed: 300,
      },
    },
  ],
});

// Add this JavaScript to trigger the animations
document.addEventListener("DOMContentLoaded", function () {
  const pTags = document.querySelectorAll("#con2 .con2-text p");

  pTags.forEach((p, index) => {
    p.style.animationDelay = `${index * 0.3}s`;
    if (index % 2 === 0) {
      p.style.animationName = "slideInFromLeft"; //
    } else {
      p.style.animationName = "slideInFromRight"; // 2nd and 4th
    }
  });
});
