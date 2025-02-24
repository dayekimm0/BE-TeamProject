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
      breakpoint: 768,
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
