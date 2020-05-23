// Global Javascript Initialization
$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
});
var Global = function() {
  'use strict';

  // Bootstra Components
  var handleBootstrapComponents = function() {
    // Bootstrap Carousel
    $('.carousel').carousel({
      interval: 5000,
      pause: 'hover'
    });

    // Tooltips
    $('.tooltips').tooltip();
    $('.tooltips-show').tooltip('show');
    $('.tooltips-hide').tooltip('hide');
    $('.tooltips-toggle').tooltip('toggle');
    $('.tooltips-destroy').tooltip('destroy');

    // Popovers
    $('.popovers').popover();
    $('.popovers-show').popover('show');
    $('.popovers-hide').popover('hide');
    $('.popovers-toggle').popover('toggle');
    $('.popovers-destroy').popover('destroy');
  }

   // Scroll To Section
   var handleScrollToSection = function() {
      $("a").on('click', function(event) {

        
        if (this.hash !== "") {
          
          event.preventDefault();    
          // Store hash
          var hash = this.hash;
    
          
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
      
            window.location.hash = hash;
          });
        }
      });   
  }

  // Handle Promo Section
  var handlePromoSection = function() {
    $('.js__fullwidth-img').each(function() {
      $(this).css('background-image', 'url(' + $(this).children('img').attr('src') + ')');
      $(this).children('img').hide();
    });
  }

  // Handle Overlay
  var handleOverlay = function() {
    var overlay = $('.js__bg-overlay'),
      headerOverlay = $('.js__header-overlay'),
      trigger = $('.js__trigger');

    trigger.on('click', function() {
      overlay.toggleClass('-is-open');
      headerOverlay.toggleClass('-is-open');
      trigger.toggleClass('-is-active');
    });
  }

  // Vertical Center Aligned
  // Note! This works only with promo block and background image via CSS.
  var handleVerticalCenterAligned = function() {
    $('.js__ver-center-aligned').each(function() {
      $(this).css('padding-top', $(this).parent().height() / 2 - $(this).height() / 2);
    });
    $(window).resize(function() {
      $('.js__ver-center-aligned').each(function() {
        $(this).css('padding-top', $(this).parent().height() / 2 - $(this).height() / 2);
      });
    });
  }

  // handle group element heights
  var handleEqualHeight = function() {
   $('[data-auto-height]').each(function() {
      var parent = $(this);
      var items = $('[data-height]', parent);
      var height = 0;
      var mode = parent.attr('data-mode');
      var offset = parseInt(parent.attr('data-offset') ? parent.attr('data-offset') : 0);

      items.each(function() {
        if ($(this).attr('data-height') == "height") {
          $(this).css('height', '');
        } else {
          $(this).css('min-height', '');
        }

        var height_ = (mode == 'base-height' ? $(this).outerHeight() : $(this).outerHeight(true));
        if (height_ > height) {
          height = height_;
        }
      });

      height = height + offset;

      items.each(function() {
        if ($(this).attr('data-height') == "height") {
          $(this).css('height', height);
        } else {
          $(this).css('min-height', height);
        }
      });

      if(parent.attr('data-related')) {
        $(parent.attr('data-related')).css('height', parent.height());
      }
   });       
  }

  var Hide = function () {
    $('#mySelect').on('click', function(){

        var ele = document.getElementById("mySelect").selectedIndex;
        console.log(ele);
        if (ele === 1) {
          var element = document.getElementById("hide");
          element.style.display="block";
          //element.classList.toggle("activate");
        }else {
          var element = document.getElementById("hide");
          element.style.display="none";

        }

    })
    
  }

  return {
    init: function() {
      handleBootstrapComponents(); // initial setup for Bootstrap Components
      handleScrollToSection(); // initial setup for Scroll To Section
      handlePromoSection(); // initial setup for Promo Section
      handleOverlay(); // initial setup for Overlay
      handleVerticalCenterAligned(); // initial setup for Vertical Center Aligned
      handleEqualHeight();
      Hide(); // initial setup for Equal Height
    }
  }
}();

$(document).ready(function() {
  Global.init();
});
