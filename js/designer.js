import BoardDesign from "./BoardDesign.js";

const defaultDesign = new BoardDesign(
	12,
	16,
	"1W 1M 1W 1M 1W 1M 1W 1M 1W 1M 1W 1M",
	false,
	false
);
console.log(defaultDesign);
window.addEventListener("load", eventWindowLoaded, false);

let Debugger = function() { };

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

	let theCanvas = document.getElementById("previewCanvas");
	let context = theCanvas.getContext("2d");
	
	Debugger.log("Drawing Board Design");

	function drawBoardDesign() {
		
		context.fillStyle = "#dfdede";
		context.fillRect(0,0, 500, 300);
		
		let imgCherry = new Image();
		let imgMaple = new Image();
		let imgPadauk = new Image();
		let imgPurpleHeart = new Image();
		let imgWalnut = new Image();
		
		imgCherry.src = "img/cherry-vertical.jpg";
		imgMaple.src = "img/maple-vertical.jpg";
		imgPadauk.src = "img/padauk-vertical.jpg";
		imgPurpleHeart.src = "img/purpleheart-vertical.jpg";
		imgWalnut.src = "img/walnut-vertical.jpg";
		
		imgWalnut.onload = function() {
			context.drawImage(imgWalnut, 0, 0, 500, 350/12);
		};
		
	}	
	drawBoardDesign();
}

jQuery(document).ready( function (){

    /*jQuery('#width').on('change', function() {
        jQuery('#widthPreviewDisplay').html(jQuery('#width').val());
    });

    jQuery('#length').on('change', function() {
        jQuery('#lengthPreviewDisplay').html(jQuery('#length').val());
    });
*/
    let pattern = jQuery('#pattern').val();
    let patternArray = pattern.split(" ");
    let arrayLength = patternArray.length;
    
	for (var i = 0; i < arrayLength; i++ ) {
        //jQuery("#preview").append('<div class="row"><div class="strip">' + patternArray[i] + '</div></div>');
    }
	
	//TODO: Add validation functionality here. Pattern must be [0-9][A-Z][" "] (AlphaNumber then space)'
	//      This can be done with the keypress & paste events
	jQuery("#pattern").change(function(event) {
		
	});
});
