$(function() {
	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				css: {
					'background-color': 'rgba(0, 124, 243, .7)'
				}
			}
		}
	});

	$('.menu-icon').on('click', function() {
		$('header nav ul').toggleClass('open');
	})

	var $window = $(window);
	var $nav = $('nav');
	var $listItems = $('li');
	var $link = $('li a');
	var navHeight = $nav.outerHeight();
	var $logo = $('#logo a');

	$logo.on('click', function(e) {
		e.preventDefault();
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 500, 'swing');
	});

	$link.on('click', function(e) {
		e.preventDefault();
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 500, 'swing');
		$listItems.removeClass('active');
		$(this).parent().addClass('active');
	});

	$window.on('scroll', function() {
		var $scrollPos = $window.scrollTop();
		if($scrollPos > 0){
			$nav.addClass('stickyStyle');
		} else if ($scrollPos <= 10) {
			$nav.removeClass('stickyStyle');
		}

		var $section = $('section');
		$section.each(function() {
			var $this = $(this);
			if($this.offset().top < ($scrollPos + navHeight) && 
				($scrollPos + navHeight) < ($this.offset().top + $this.outerHeight())) {
				var targetClass = '.' + $this.attr('id');
				$listItems.removeClass('active');
				$(targetClass).addClass('active');
				if($this.attr('id') === 'client') {
					$listItems.removeClass('active');
					$('li.pages').addClass('active');
				}
			} else if($scrollPos < (800 - navHeight)) {
				$listItems.removeClass('active');
				$('li.home').addClass('active');
			}
		});
	});
});