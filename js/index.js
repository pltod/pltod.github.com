$(document).ready(function() {
	$('.state').tooltip();
	$('#manifestoCarousel').carousel(0);
	$('#manifestoCarousel').carousel('pause');

	//Twitter Button
	! function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if(!d.getElementById(id)) {
			console.log("creating element");
			js = d.createElement(s);
			js.id = id;
			js.src = "//platform.twitter.com/widgets.js";
			fjs.parentNode.insertBefore(js, fjs);
		}
	}(document, "script", "twitter-wjs");

	//G+ Button
	(function() {
		var po = document.createElement('script');
		po.type = 'text/javascript';
		po.async = true;
		po.src = 'https://apis.google.com/js/plusone.js';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(po, s);
	})(); 
	
	//Scrolling by http://imakewebthings.com/ 
	! function() {
		// Wicked credit to
		// http://www.zachstronaut.com/posts/2009/01/18/jquery-smooth-scroll-bugs.html
		var scrollElement = 'html, body';
		$('html, body').each(function() {
			var initScrollTop = $(this).attr('scrollTop');
			$(this).attr('scrollTop', initScrollTop + 1);
			if($(this).attr('scrollTop') == initScrollTop + 1) {
				scrollElement = this.nodeName.toLowerCase();
				$(this).attr('scrollTop', initScrollTop);
				return false;
			}
		});
		// Smooth scrolling for internal links
		$("a[href^='#']").click(function(event) {
			event.preventDefault();

			//Skip all carousel items from being scrolled. May be with a class if possible
			if(this.hash == "#manifestoCarousel" || this.hash == "#fatherCarousel" || this.hash == "#projectsCarousel" || this.hash == "#educationCarousel" || this.hash == "#blogAreasCarousel" || this.hash == "#employeeCarousel" || this.hash == "#touristCarousel")
				return;
			var $this = $(this), target = this.hash, $target = $(target);
			$(scrollElement).stop().animate({
				'scrollTop' : $target.offset().top
			}, 500, 'swing', function() {
				window.location.hash = target;
			});
		});
		$(function() {
			var $window = $(window)
			// Make source code pretty with prettify
			window.prettyPrint && prettyPrint()
		});
	}()

});
