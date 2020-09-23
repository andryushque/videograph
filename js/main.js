$(document).ready(function () {
  /*=== Mobile Menu ===*/
  // Show and hide navigation menu
  var mmenuButton = $(".mmenu");
  var mmenuButtonIcon = $(".mmenu__icon");
  var navigationMenu = $(".nav");
  mmenuButton.on("click", function () {
    mmenuButtonIcon.toggleClass("fa-times"); //hamburger button
    mmenuButtonIcon.toggleClass("fa-bars"); //close button
    navigationMenu.toggleClass("nav--hidden");
  });

  /*=== Owl Carousel ===*/
  // Slider for intro section
  $(".intro .owl-carousel").owlCarousel({
    loop: true,
    dots: true,
    mouseDrag: false,
    items: 1,
    margin: 0,
    smartSpeed: 1200,
    autoHeight: false,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
  });

  // Number of slider for every dot
  var sliderDot = $(".intro .owl-dot");
  sliderDot.each(function () {
    var index = $(this).index() + 1;
    if (index < 10) {
      $(this).html("0").append(index);
    } else {
      $(this).html(index);
    }
  });
});
