const IMAGE_COUNT = 5;	


function imageLoaded( i ) {
	if (i >= IMAGE_COUNT-1 ) {
		drawPattern( );
	}
}

function loadImages( images ) {
	
	if (!images) {
		return;
	}
	
	if ("undefined" === images.length ) {
		// convert single item 
		images = [images];
	}
	
	let imgCount = images.length;
	
	for ( let i = 0; i < imgCount; i++ ) {
		
		let img = new Image();
		img.src = images[i][2];
		console.log(img.src);
		img.onload = imageLoaded( i );
	}	
}

function drawPattern() {
	console.log(images[1]);
	let pattern = $('#pattern').val(); // 1W 1MP 1W 1MP 1W 1MP 1W 1MP 1W 1MP 1W 1MP
    let patternArray = pattern.split(" ");
    let numStrips = patternArray.length;
	
	let theCanvas = document.getElementById("previewCanvas");
	let context = theCanvas.getContext("2d");

	let rectWidth = 350;
	let rectLength = 500;
	
	context.fillStyle = "#dfdede";
	context.fillRect(0,0, rectLength, rectWidth);
	
	//let stripWidth = strip.replace(/[A-Z]/g, '');

	let strip = '';
	// for each strip, draw it in the canvas
	for ( strip of patternArray ) {
		let stripWidth = Number(strip.replace(/[^0-9\.]+/g, ''));
		let stripSpecies = strip.replace(/[0-9\.]/g, '');
		
		/*switch (stripSpecies) {
				case 'C':
					context.drawImage(images[0], 0,0, rectLength, rectWidth/numStrips );			
					
					break;
				case 'M':
				context.drawImage(images[1], 0,0, rectLength, rectWidth/numStrips );
					
					break;
				case 'P':
				context.drawImage(images[2], 0,0, rectLength, rectWidth/numStrips );
					
					break;
				case 'PH':
				context.drawImage(images[3], 0,0, rectLength, rectWidth/numStrips );
					
					break;
				case 'W':
				context.drawImage(images[4], 0,0, rectLength, rectWidth/numStrips );
					
					break;
			}
			*/
	}
	
	//context.drawImage(images[1], 0, 0);
	
}

let images = [
		["C", "cherry", "img/cherry-vertical.jpg"],
		["MP", "maple", "img/maple-vertical.jpg"],
		["P", "padauk", "img/padauk-vertical.jpg"],
		["PH", "purpleheart", "img/purpleheart-vertical.jpg"],
		["W", "walnut", "img/walnut-vertical.jpg"]
	];



loadImages( images );


