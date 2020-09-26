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

  // Slider for blog section
  $(".blog .owl-carousel").owlCarousel({
    loop: true,
    dots: true,
    dotsEach: true,
    items: 3,
    smartSpeed: 1200,
    responsive: {
      992: {
        items: 3,
      },
      768: {
        items: 2,
      },
      320: {
        items: 1,
      },
    },
  });

  // Slider for testimonials section
  $(".testimonials .owl-carousel").owlCarousel({
    loop: true,
    dots: true,
    dotsEach: true,
    items: 3,
    smartSpeed: 1200,
    responsive: {
      992: {
        items: 3,
      },
      768: {
        items: 2,
      },
      320: {
        items: 1,
      },
    },
  });

  // Slider for logos section
  $(".logos .owl-carousel").owlCarousel({
    loop: true,
    items: 5,
    autoplay: true,
    smartSpeed: 1200,
    responsive: {
      1201: {
        items: 5,
      },
      992: {
        items: 4,
      },
      768: {
        items: 3,
      },
      576: {
        items: 2,
      },
      320: {
        items: 1,
      },
    },
  });

  /*=== Counter ===*/
  // animation to counter numbers (from 0)
  $(".counter__number").each(function () {
    $(this)
      .prop("counter", 0)
      .animate(
        {
          counter: $(this).text(),
        },
        {
          duration: 5000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });

  /*=== To Top Button ===*/
  var topButton = $(".top-button");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      topButton.addClass("show");
    } else {
      topButton.removeClass("show");
    }
  });
  topButton.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "600");
  });

  /*=== Preloader ===*/
  $(window).on("load", function () {
    $(".loader").fadeOut();
    $(".preloder").delay(200).fadeOut("slow");
  });

  /*=== Portfolio Filter ===*/
  const filterTab = $("[data-filter]");
  filterTab.on("click", function (event) {
    event.preventDefault();
    $(this).addClass("active").siblings().removeClass("active");
  });
  if ($(".portfolio__items").length > 0) {
    const containerEl = document.querySelector(".portfolio__items");
    const mixer = mixitup(containerEl);
  }
});
