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
	var $logo = $('#logo a');
	var navHeight = $nav.outerHeight();

	function smoothScroll(e) {
		e.preventDefault();
		var elem = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(elem).offset().top
		}, 500, 'swing');
	}

	$($logo).add($link).on('click', smoothScroll);

	$link.on('click', function() {
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