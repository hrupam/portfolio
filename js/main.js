$(document).ready(() => {
  $("#about h1")
    .addClass("animate__animated animate__zoomInLeft")
    .css("--animate-duration", "950ms");

  $("#about p")
    .addClass("animate__animated animate__zoomInRight")
    .css("--animate-duration", "1000ms");
});
