window.addEventListener("load", eventWindowLoaded, false);

var Debugger = function() { };

Debugger.log = function(message) {
	try {
		console.log(message);
	} catch (exception) {
		return;
	}
}




function eventWindowLoaded() {
	canvasApp();
};

function canvasApp() {

	var theCanvas = document.getElementById("previewCanvas");
	var context = theCanvas.getContext("2d");
	
	Debugger.log("Drawing Canvas");

	function drawScreen() {
		context.fillStyle = "#dfdede";
		context.fillRect(0,0, 500, 300);
		
		var testImage = new Image();
		testImage.src = "img/walnut-vertical.jpg";
		testImage.onload = function() {
			context.drawImage(testImage, 0, 0, 500, 350/12);
		};
		
	}	
	drawScreen();
	

	
}





jQuery(document).ready( function (){

    jQuery('#width').on('change', function() {
        jQuery('#widthPreviewDisplay').html(jQuery('#width').val());
    });

    jQuery('#length').on('change', function() {
        jQuery('#lengthPreviewDisplay').html(jQuery('#length').val());
    });
/*
    var pattern = jQuery('#pattern').val();
    var patternArray = pattern.split(" ");
    var arrayLength = patternArray.length;
    for (var i = 0; i < arrayLength; i++ ) {
        jQuery("#preview").append('<div class="row"><div class="strip">' + patternArray[i] + '</div></div>');
    }
*/	
	//TODO: Add validation functionality here. Pattern must be [0-9][A-Z][" "] (AlphaNumber then space)'
	//      This can be done with the keypress & paste events
	jQuery("#pattern").change(function(event) {
		
	});
	
	

});


