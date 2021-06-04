$(window).load("on", () => {
  $("#loader").fadeOut(1000);
});

$(document).ready(() => {
  AOS.init();

  $(window).scroll(function() {
    if (this.scrollY > 20) $("header").addClass("header-scroll");
    else $("header").removeClass("header-scroll");
  });

  var typed1 = new Typed("#typed", {
    strings: [
      "Computer Science Engineer.",
      "Web Developer.",
      "Data Science and Machine Learning enthusiast.",
    ],
    typeSpeed: 40,
    backSpeed: 30,
    startDelay: 1600,
    loop: true,
  });

  var typed2 = new Typed("#typed-lang", {
    strings: ["Java", "Python", "C", "SQL"],
    typeSpeed: 30,
    backSpeed: 30,
    loop: true,
  });

  $("#about h1")
    .addClass("animate__animated animate__zoomInLeft")
    .css({
      "--animate-duration": "1500ms"
    });

  $("#about p").addClass(
    "animate__animated animate__fadeInRight animate__slow"
  );

  $(".projects").slick({
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
