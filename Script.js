var mq = window.matchMedia( "(max-width: 767px)" );
if (mq.matches) {
	$("#logoDark").removeClass("float-right");	
	function openNav() {
		    document.getElementById("sidenav").style.width = "100%";
}
} else {
  function openNav() {
	    document.getElementById("sidenav").style.width = "250px";
}
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}

$(document).ready(function(){
   var height = $(window).height();
   jQuery('#sliderHeader').css('height',height+'px');
});

