var THEMETAGS = THEMETAGS || {};

(function () {
  "use strict"; //preloader

  $(window).ready(function () {
    $("#preloader").delay(100).fadeOut("fade");
  }); //dropdown menu hover js

  $("ul.nav li.dropdown").hover(function () {
    $(this).find(".dropdown-menu").stop(true, true).delay(100).fadeIn(200);
  }, function () {
    $(this).find(".dropdown-menu").stop(true, true).delay(100).fadeOut(200);
  }); //sticky header

  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();

    if (scroll < 2) {
      $("nav.sticky-header").removeClass("affix");
    } else {
      $("nav.sticky-header").addClass("affix");
    }
  }); 
  THEMETAGS.initialize = {
    init: function () {
      THEMETAGS.initialize.general();
    },
    general: function () {
      // Mouse Move Parallax Element
      var $scene = $(".parallax-element").parallax({
        scalarX: 100,
        scalarY: 100
      });
    }
  };
  THEMETAGS.documentOnReady = {
    init: function () {
      THEMETAGS.initialize.init();
    }
  };
  $(document).ready(THEMETAGS.documentOnReady.init);
  $(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
  }); //animated js

  AOS.init({
    easing: "ease-in-out",
    // default easing for AOS animations
    once: true,
    // whether animation should happen only once - while scrolling down
    duration: 500 // values from 0 to 3000, with step 50ms

  }); //magnific popup js

  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });
  $(".popup-with-form").magnificPopup({
    type: "inline",
    preloader: false,
    focus: "#name"
  });
})();




// Grab wrapper nodes
const rootNode = document.querySelector('.embla')
const viewportNode = rootNode.querySelector('.embla__viewport')

// Grab button nodes
const prevButtonNode = rootNode.querySelector('.embla__prev')
const nextButtonNode = rootNode.querySelector('.embla__next')

var emblaNode = document.querySelector('.embla')
var options = { loop: true }

var embla = EmblaCarousel(emblaNode, options)

// Add click listeners
prevButtonNode.addEventListener('click', embla.scrollPrev, false)
nextButtonNode.addEventListener('click', embla.scrollNext, false)

