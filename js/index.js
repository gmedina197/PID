//Reference Image
let referenceImgDom = document.getElementById('picField-1');
let canvasRI = document.getElementById('canvas-1');
let canvasContextRI = canvasRI.getContext('2d');
let referencePicture = new Picture();
let image = null;

function upload () {
	image = new SimpleImage(referenceImgDom);
	image.drawTo(canvasRI);
}

function makeGray() {
	console.log(image.values());
	for (let pixel of image.values()) {
		let avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
		pixel.setRed(avg);
		pixel.setGreen(avg);
		pixel.setBlue(avg);
	}
	image.drawTo(canvasRI);
}