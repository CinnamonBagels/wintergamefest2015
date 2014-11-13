/**
 * Author: Samuel Ko ssko@ucsd.edu
 * Partial code credit and parallax scrolling tutorial here:
 * http://andyshora.com/parallax.html
 */

'use strict';

(function() {
	var parallaxElements = [];
	var windowHeight;

	$('.parallax').each(function() {
		$(this).css({
			position: 'fixed',
			height: '1080px',
			width: '1920'
		});
	})

	function parallax(scrollTop) {

		for (var id in parallaxElements) {

			// distance of element from top of viewport
			var viewportOffsetTop = parallaxElements[id].initialOffsetY - scrollTop;

			// distance of element from bottom of viewport
			var viewportOffsetBottom = windowHeight - viewportOffsetTop;

			if ((viewportOffsetBottom >= parallaxElements[id].start) && (viewportOffsetBottom <= parallaxElements[id].stop)) {
				// element is now active, fix the position so when we scroll it stays fixed

				var speedMultiplier = parallaxElements[id].speed || 1;
				var pos = (windowHeight - parallaxElements[id].start);

				$(parallaxElements[id].elm).css({
					position: 'fixed',
					top: pos+'px',
					left: '50%',
					marginLeft: -(parallaxElements[id].width/2) +'px'
				});

			} else if (viewportOffsetBottom > parallaxElements[id].stop) {
				// scrolled past the stop value, make position relative again

				$(parallaxElements[id].elm).css({
					position: 'relative',
					top: (parallaxElements[id].stop-parallaxElements[id].start)+'px',
					left: 'auto',
					marginLeft: 'auto'
				});

			} else if (viewportOffsetBottom < parallaxElements[id].start) {
				// scrolled up back past the start value, reset position

				$(parallaxElements[id].elm).css({
					position: 'relative',
					top: 0,
					left: 'auto',
					marginLeft: 'auto'
				});

			}
		}
	}
	$(document).ready(function() {
		windowHeight = $(window).height();

		$('html, body').scrollTop(1);

		var touchSupported = (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);

		if(touchSupported) {
			$(window).bind('touchmove', function(e) {
				console.log('touch found');
				var val = e.currentTarget.scrollY;
				//touch scrolling for mobile will call 
				parallax(val);
			});
		} 

		$(window).bind('scroll', function(e) {
			var val = $(this).scrollTop();
			parallax(val);
		});

		$(window).resize(function() {
			windowHeight = $(this).height();

			for (var id in parallaxElements) {
				parallaxElements[id].initialOffsetY = $(parallaxElements[id].elm).offset().top;
				parallaxElements[id].height = $(parallaxElements[id].elm).height();
			}
		});


		// get parallax elements straight away as they wont change
		// this will minimise DOM interactions on scroll events
		$('.parallax').each(function(){

			var $elm = $(this);
			var id = $elm.data('id');

			// use data-id as key
			parallaxElements[id] = {
				id: $elm.data('id'),
				start: $elm.data('start'),
				stop: $elm.data('stop'),
				speed: $elm.data('speed'),
				elm: $elm[0],
				initialOffsetY: $elm.offset().top,
				height: $elm.height(),
				width: $elm.outerWidth()
			};

		});
	});
})();