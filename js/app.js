$(function() {
  // $(".work-container").hover(
  //   function() {
  //     // $(this).find(".work-title-container").fadeOut(0.1);
  //     $(this).find(".work-descr-container").fadeIn();
  //     $(this).children(".work-container-overlay").css("background-color", "rgba(255,255,255,0.7)");
  //   },
  //   function() {
  //     // $(this).find(".work-title-container").fadeIn();
  //     $(this).find(".work-descr-container").fadeOut(0.1);
  //     $(this).children(".work-container-overlay").css("background-color", "rgba(255,255,255,0.1)");
  //   }
  // )


  $("#page").removeClass("fade-out");

  // $(".page").fadeIn();

  // $(".cross, .mobile-menu").hide();
  // $( ".hamburger" ).click(function() {
  //   $( ".mobile-menu" ).animate({width: 'toggle'}, 300, function() {
  //   $( ".hamburger" ).hide();
  //   $( ".cross" ).show();
  //   });
  // });
  //
  // $( ".cross" ).click(function() {
  //   $( ".mobile-menu" ).animate({width: 'toggle'}, 300, function() {
  //   $( ".cross" ).hide();
  //   $( ".hamburger" ).show();
  //   });
  // });

  // $(document).ready(function(){
  $(".mobile-menu").hide();
	$('#nav-icon3').click(function(){
  	$(this).toggleClass('open');
    $( ".mobile-menu" ).animate({width: 'toggle'}, 300);
  });
  // });

});
