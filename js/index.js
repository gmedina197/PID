let referenceImgDom = document.getElementById('picField-1');
let canvasRI = document.getElementById('canvas-1');
let adjustImgDom = document.getElementById('picField-2');
let canvasAI = document.getElementById('canvas-2');

let refImage, adjImage;

function uploadRef () {
	refImage = new SimpleImage(referenceImgDom);
	refImage.drawTo(canvasRI);
}

function uploadAdj () {
	adjImage = new SimpleImage(adjustImgDom);
	adjImage.drawTo(canvasAI);
}

function makeGray () {
	for (let pixel of refImage.values()) {
		let avg = ( pixel.getRed() + pixel.getGreen() + pixel.getBlue() ) / 3;
		pixel.setRed(avg);
		pixel.setGreen(avg);
		pixel.setBlue(avg);
	}
	//let pixel = image.getPixel(0, 0);
	refImage.drawTo(canvasRI);
}