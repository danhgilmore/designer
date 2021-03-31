class BoardDesign {
	constructor(
		// Defines parameters:
		width,
		length,
		pattern,
		juiceGroove,
		feet
	) {
		// Define the properties:
		this.width = width;
		this.length = length;
		this.pattern = pattern;
		this.juiceGroove = juiceGroove;
		this.feet = feet;
	}
	
	updateLength(length) {
		this.length = length;
	}
	updateWidth(width) {
		this.width = width;
	}
	toggleJuiceGroove(juiceGrooveStatus) {
		this.juiceGroove = juiceGrooveStatus;
	}
	toggleFeet(feet) {
		this.feet = feet;
	}
}

export default BoardDesign;