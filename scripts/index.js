//Slick slider
$(".parts").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: false,
  dots: false,
  speed: 300,
  responsive: [
    {
      breakpoint: 1025,
      settings: "unslick",
    },
    {
      breakpoint: 770,
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

const part01 = document.querySelector(".part:first-child");
const part02 = document.querySelector(".part:nth-child(2)");
const part03 = document.querySelector(".part:nth-child(3)");
const part04 = document.querySelector(".part:nth-child(4)");
const part05 = document.querySelector(".part:nth-child(5)");
const part06 = document.querySelector(".part:nth-child(6)");

part01.addEventListener("click", () => {
  location.href = "login.html";
});

part02.addEventListener("click", () => {
  location.href = "food.html";
});
part03.addEventListener("click", () => {
  location.href = "beauty.html";
});
part04.addEventListener("click", () => {
  location.href = "fashion.html";
});
part05.addEventListener("click", () => {
  location.href = "lifestyle.html";
});
part06.addEventListener("click", () => {
  location.href = "event.html";
});
