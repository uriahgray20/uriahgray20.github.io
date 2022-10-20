$(document).ready(function () {
    console.log("document ready");
  
    $(".mapBlock.c").get(0).scrollIntoView();
  
    setTimeout(function () {
      $(".mapBlock").addClass("show");
    }, 400);
  
    $(".btnSW").click(function () {
      $(".mapBlock.se").get(0).scrollIntoView({ behavior: "smooth" });
    });
  
    $(".btnN").click(function () {
      $(".mapBlock.n").get(0).scrollIntoView({ behavior: "smooth" });
    });
  
    $(".btnNW").click(function () {
      $(".mapBlock.nw").get(0).scrollIntoView({ behavior: "smooth" });
    });
  });
  