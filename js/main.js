$(window).load("on", () => {
  $("#loader").fadeOut(1000);
});

$(document).ready(() => {
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
    strings: ["C", "Core Java", "JavaScript", "Python"],
    typeSpeed: 30,
    backSpeed: 30,
    loop: true,
  });

  $("#about h1")
    .addClass("animate__animated animate__zoomInLeft")
    .css("--animate-duration", "1500ms");

  $("#about p").addClass(
    "animate__animated animate__fadeInRight animate__slow"
  );
});
