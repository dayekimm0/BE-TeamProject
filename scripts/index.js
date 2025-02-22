//Slick slider
$(".parts-slick").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: false,
  dots: true,
  speed: 300,
  centerPadding: "10px",
  variableWidth: true,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
});
