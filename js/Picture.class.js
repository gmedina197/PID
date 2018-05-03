class Picture {
	//width, height, imageData
	constructor() {
		this.width;
		this.height;
		this.imageData;
		this.media;
	}

	calculateMedia() {
		let pixelMatrix = Array.from(this.imageData.data);
		let accumulated = 0;
		for( i = 0; i < pixelMatrix.length; i++){
			if(i % 4 === 0){
				continue;
			}
			accumulated += pixelMatrix[i];
		}
		return accumulated / pixelMatrix.length;
	}

	makeGray() {
		let imgdata = Array.from(this.imageData.data);

		//pular 4 elemento
		let pix = new Pixel(imgdata[0], imgdata[1], imgdata[2] );
		console.log(pix.getAvg());
		for( i = 0; i < imgdata.length; i+=3) {	
			console.log(imgdata[i], imgdata[i+1], imgdata[i+2]);
		}
	}

	setDimension (width, height) {
		this.width = width;
		this.height = height;
	}

	setImageData (data) {
		this.imageData = data;
		console.log(this.imageData.data);
		this.media = this.calculateMedia();
		this.makeGray();
		console.log(this.media);
	}

	showImageOnCanvas (image, canvasContext) {
		canvasContext.canvas.width = this.width;
		canvasContext.canvas.height = this.height;
		canvasContext.drawImage(image, 0, 0, this.width, this.height);
	}
}