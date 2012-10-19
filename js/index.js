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

});
