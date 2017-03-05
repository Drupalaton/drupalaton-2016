(function ($) {
  Drupal.behaviors.drupalaton_theme = {
    attach: function (context) {

	    var width = $(window).width();

	    // Enable Bootstrap 3 Hover Dropdowns.
	    if (width >= 976) {
		    $('.dropdown-toggle').click(function() {
			    var location = $(this).attr('href');
			    window.location.href = location; return false;
		    });
	    }

	    /* Navbar toggle */
	    var $toggles = $('button.navbar-toggle');
	    $($toggles.attr('data-target')).addClass('collapse');

	    $toggles.click(function() {
		    var $menu = $($(this).attr('data-target'))
			    , $toggle = $(this)
			    ;

		    $toggle.toggleClass('navigation-collapse-in');
	    });

      // Parallax elements move settings
      var scrollorama = $.scrollorama({ 
        blocks: '.scrollorama'
      });
      
      // function in normal width monitor, wider than 980 px
      if (width >= 980) {
        scrollorama
        .animate('#bigboat', { delay: 0, duration: 1200, property: 'left', start: 100, end: 900  })
        .animate('#smallboat', { delay: 0, duration: 1200, property: 'left', start: 200, end: 850  })
        .animate('.cloud1', { delay: 0, duration: 1200, property: 'left', start: 0, end: 650  })
        .animate('.cloud2', { delay: 0, duration: 1200, property: 'left', start: 60, end: 650  })
        .animate('.cloud3', { delay: 0, duration: 1200, property: 'left', start: 740, end: 650  })
        .animate('.cloud4', { delay: 0, duration: 1200, property: 'left', start: 930, end: 650  })
        .animate('.cloud5', { delay: 0, duration: 1200, property: 'left', start: 350, end: 650  })
        
        .animate('.cloud6', { delay: 0, duration: 1200, property: 'left', start: 750, end: 650  })
        .animate('.cloud7', { delay: 0, duration: 1200, property: 'left', start: 940, end: 650  })
        .animate('.cloud8', { delay: 0, duration: 1200, property: 'left', start: 900, end: 650  })
        .animate('.cloud9', { delay: 0, duration: 1200, property: 'left', start: 820, end: 650  })
        .animate('.cloud10',{ delay: 0, duration: 1200, property: 'left', start: 970, end: 650  });
      }
      else if (width < 979 && width >= 600) {
        scrollorama
        .animate('#bigboat', { delay: 0, duration: 800, property: 'left', start: -10, end: 600  })
        .animate('#smallboat', { delay: 0, duration: 700, property: 'left', start: -10, end: 600  });
    
      }
      else if (width < 600) {
        // no move
      }
    }
  };
})(jQuery);