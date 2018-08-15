$(function() {
  $(".work-container").hover(
    function() {
      // $(this).find(".work-title-container").fadeOut(0.1);
      $(this).find(".work-descr-container").fadeIn();
      $(this).children(".work-container-overlay").css("background-color", "rgba(255,255,255,0.7)");
    },
    function() {
      // $(this).find(".work-title-container").fadeIn();
      $(this).find(".work-descr-container").fadeOut(0.1);
      $(this).children(".work-container-overlay").css("background-color", "rgba(255,255,255,0.1)");
    }
  )


  $("#page").removeClass("fade-out");

  // $(".page").fadeIn();

});
