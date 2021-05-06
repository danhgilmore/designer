$(document).ready( function() {
	console.log("ready");
});
	
function drawPattern() {
	
	let pattern = $('#pattern').val(); // 1W 1MP 1W 1MP 1W 1MP 1W 1MP 1W 1MP 1W 1MP
    let patternArray = pattern.split(" ");  // ["1W", "1MP",...]
    let numStrips = patternArray.length; 
	
	let theCanvas = document.getElementById("previewCanvas");
	let context = theCanvas.getContext("2d");
	let stripQuarters = boardWidth/0.25; // This is the number of quarter inch objects in the board
	console.log('quarters = ' + stripQuarters);
	
	context.fillStyle = "#dfdede";
	context.fillRect(0,0, theCanvas.width, theCanvas.height);  // 300 400
	
	let imgSpecies = '';
	let dx = 0;  // Starting X axis pixel 
	let dy = 0;  // Starting Y axis pixel...this will always be 0 because it draws from the top of the canvas down.
	let dWidth = 0;
	let strip = '';
	
	// for each strip, divide it into quarters.
	for ( var i = 0; i < numStrips; i++ ) {
		let canvasStrip = patternArray[i];
		
		let stripWidth = Number(canvasStrip.replace(/[^0-9\.]+/g, ''));   // i.e., 1
		let stripSpecies = canvasStrip.replace(/[0-9\.]/g, '');		    // i.e., W
		stripSpecies = stripSpecies.toUpperCase();
		
		// We will draw strips in 1/4" strips, to accommodate the 1/4" interval available for width
		stripQuarters = stripWidth / 0.25;  // 1 inch = 4 quarters
		// For each quarter inch of the strip, draw it on the canvas
		for ( var j = 0; j < stripQuarters; j++ ) {
			switch (stripSpecies) {
				case 'C':
					imgSpecies = imgCherry;
					break;
				case 'MP':
					imgSpecies= imgMaple;				
					break;
				case 'P':
					imgSpecies = imgPadauk;
					break;
				case 'PH':
					imgSpecies = imgPurpleHeart;
					break;
				case 'W':
					imgSpecies = imgWalnut;				
					break;
			}
			// How did I determine this value?!?!?
			dWidth = 6.25;
			
			// Draw the image on the canvas
			context.drawImage(imgSpecies, dx, dy, dWidth, theCanvas.height) ;
			dx = dx + dWidth;
		}
	}
}

let images = [
		["C", "cherry", "img/cherry-vertical.jpg"],
		["MP", "maple", "img/maple-vertical.jpg"],
		["P", "padauk", "img/padauk-vertical.jpg"],
		["PH", "purpleheart", "img/purpleheart-vertical.jpg"],
		["W", "walnut", "img/walnut-vertical.jpg"]
	];

let imgCherry = new Image();
let imgMaple = new Image();
let imgPadauk = new Image();
let imgPurpleHeart = new Image();
let imgWalnut = new Image();

let boardWidth = $('#width').val();
let boardLength = $('#length').val();
console.log('Board width = ' + boardWidth);
console.log('Board length = ' + boardLength);

imgCherry.src = "img/cherry-vertical.jpg";
imgMaple.src = "img/maple-vertical.jpg";
imgPadauk.src = "img/padauk-vertical.jpg";
imgPurpleHeart.src = "img/purpleheart-vertical.jpg";
imgWalnut.src = "img/walnut-vertical.jpg";

imgCherry.onload = function() {
	drawPattern();
}

jQuery('#pattern').on( 'input propertychange paste', function() {
	drawPattern();
});
