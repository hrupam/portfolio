$(document).ready(() => {
  $("#about h1")
    .addClass("animate__animated animate__zoomInLeft")
    .css("--animate-duration", "1500ms");

  $("#about p").addClass(
    "animate__animated animate__fadeInRight animate__slow"
  );
});
