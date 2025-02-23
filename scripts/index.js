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

document.addEventListener("DOMContentLoaded", function () {
  const texts = document.querySelectorAll(".con2-text p");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show"); // 화면에 보이면 애니메이션 실행
        }
      });
    },
    {
      threshold: 1, // 요소의 50%가 화면에 보이면 실행
    }
  );

  texts.forEach((text) => observer.observe(text));
});
