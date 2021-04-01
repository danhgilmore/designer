import BoardDesign from "./BoardDesign.js";

let customDesign = new BoardDesign(
	12,
	16,
	"1W 1M 1W 1M 1W 1M 1W 1M 1W 1M 1W 1M",
	false,
	false
);

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
	canvasApp( customDesign );
};

function canvasApp( customDesign ) {
    
	if ( customDesign == null ) {
		// TODO: Add error code here
		alert( 'customDesign is null' );
	}
	
	let pattern = customDesign.pattern;
    let patternArray = pattern.split(" ");
    let numStrips = patternArray.length;
    
	let theCanvas = document.getElementById("previewCanvas");
	let context = theCanvas.getContext("2d");

	Debugger.log("Drawing Board Design");

	function drawBoardDesign( ) {

		let rectWidth = 300;
		let rectLength = 500;
				
		let imgCherry = new Image();
		let imgMaple = new Image();
		let imgPadauk = new Image();
		let imgPurpleHeart = new Image();
		let imgWalnut = new Image();
		
		context.fillStyle = "#dfdede";
		context.fillRect(0,0, rectLength, rectWidth);
		
		imgCherry.src = "img/cherry-vertical.jpg";
		imgMaple.src = "img/maple-vertical.jpg";
		imgPadauk.src = "img/padauk-vertical.jpg";
		imgPurpleHeart.src = "img/purpleheart-vertical.jpg";
		imgWalnut.src = "img/walnut-vertical.jpg";
		
		patternArray.forEach( myFunction );

		function myFunction( value, index, array ) {
			let stripWidth = patternArray[index].charAt(0);
            let stripSpecies = patternArray[index].charAt(1);
			
			
			
			//console.log( value + ' ' + index + ' ' +  array);
		}
		/*
		for (var i = 0; i < numStrips; i++ ) {
            let measurement = patternArray[i].charAt(0);
            let species = patternArray[i].charAt(1);
			
			switch (species) {
				case 'C':
				console.log(species);
					
					break;
				case 'M':
				console.log(species);
					
					break;
				case 'P':
				console.log(species);
					
					break;
				case 'PH':
				console.log(species);
					
					break;
				case 'W':
				console.log(species);
					
					break;
			}
        }
*/
		imgWalnut.onload = function() {
			context.drawImage(imgWalnut, 0, 0, 500, 350/numStrips);
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
    
	
	
	//TODO: Add validation functionality here. Pattern must be [0-9][A-Z][" "] (AlphaNumber then space)'
	//      This can be done with the keypress & paste events
	jQuery("#pattern").change(function(event) {
		
	});
});
