$(function() {
  $(".cross, .mobile-menu").hide();
  $( ".hamburger" ).click(function() {
    $( ".mobile-menu" ).animate({width: 'toggle'}, 300, function() {
    $( ".hamburger" ).hide();
    $( ".cross" ).show();
    });
  });

  $( ".cross" ).click(function() {
    $( ".mobile-menu" ).animate({width: 'toggle'}, 300, function() {
    $( ".cross" ).hide();
    $( ".hamburger" ).show();
    });
  });
});