$(document).ready(function() {
	$('.state').tooltip();
	$('#manifestoCarousel').carousel(0)
	$('#manifestoCarousel').carousel('pause');
	
	!function(d,s,id){
		console.log(d);
		console.log(s);
		console.log(id);
		var js,fjs=d.getElementsByTagName(s)[0];
		console.log(js);
		console.log(fjs);
		if(!d.getElementById(id)){
			console.log("creating element");
			js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";
			fjs.parentNode.insertBefore(js,fjs);
		}
	}(document,"script","twitter-wjs");
});