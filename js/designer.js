( function ( $ ) {
    // Expressions
} )( jQuery );

import BoardDesign from "./BoardDesign.js";

let customDesign = new BoardDesign(
	12,
	16,
	"1W 1M 1W 1M 1W 1M 1W 1M 1W 1M 1W 1M",
	false,
	false
);

window.addEventListener("load", eventWindowLoaded, false);


function eventWindowLoaded() {
	//canvasApp( customDesign );
};

function loader( images, thingToDo, allDone) {
	if (!images) {
		return;
	}
	
	if ("undefined" === images.length ) {
		// convert single item 
		images = images[images];
	}

	var count = images.length;
	
	let thingToDoCompleted = function (images, i) {
		count--;
		if ( 0 == count ) {
			allDone(images);
		}
	};
	
	for (let i = 0; i < images.length; i++ ) {
		thingToDo(images, i, thingToDoCompleted);
	}
}

function loadImage( images, i, onComplete) {
	let onLoad = function (e) {
		e.target.removeEventListener("load", onLoad);
		onComplete(images, i);
	}
	let img = new Image();
	img.addEventListener("load", onLoad, false);
	img.src = images[i];
}


let images = ["img/cherry-vertical.jpg",
	"img/maple-vertical.jpg",
	"img/padauk-vertical.jpg",
	"img/purpleheart-vertical.jpg",
	"img/walnut-vertical.jpg"];
	
loader( images, loadImage, function () {
	
	canvasApp( customDesign );
});	

function canvasApp( customDesign ) {
    
	if ( customDesign == null ) {
		// TODO: Add error code here
		alert( 'customDesign is null' );
	}
	
	/*
	let pattern = customDesign.pattern;
    let patternArray = pattern.split(" ");
    let numStrips = patternArray.length;
    
	let theCanvas = document.getElementById("previewCanvas");
	let context = theCanvas.getContext("2d");

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
	
	imgWalnut.onload = function() {
		
		context.drawImage(imgWalnut, 0, 0, 500, 350/numStrips);
	};
	*/
}

$(document).ready( function (){

    /*$('#width').on('change', function() {
        $('#widthPreviewDisplay').html($('#width').val());
    });

    $('#length').on('change', function() {
        $('#lengthPreviewDisplay').html($('#length').val());
    });
*/
    let pattern = $('#pattern').val();
    let patternArray = pattern.split(" ");
    let arrayLength = patternArray.length;
    
	
	
	//TODO: Add validation functionality here. Pattern must be [0-9][A-Z][" "] (AlphaNumber then space)'
	//      This can be done with the keypress & paste events
	$("#pattern").change(function(event) {
		
	});
});


