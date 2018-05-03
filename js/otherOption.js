/*referenceImgDom.addEventListener('change', (evt) => {
	/*let image1 = evt.target.files[0];
	let fileReader = new FileReader();

	fileReader.onload = (e) => {

		let img = new Image();
		img.src = e.target.result;
	
		img.onload = () => {
			console.log(img.width + " x " + img.height);
			referencePicture.setDimension(img.width, img.height);
			//referencePicture.showImageOnCanvas(img, canvasContextRI);
			createImageData(convertDataURIToBinary(fileReader.result), canvasContextRI, referencePicture);
			referencePicture.setImageData(imageData);
		}
	};
	fileReader.readAsDataURL(image1);
});

//Adjust Image
let adjustImgDom = document.getElementById('picField-2');
let canvasAI = document.getElementById('canvas-2');
let canvasContextAI = canvasAI.getContext('2d');
let adjustPicture = new Picture();

adjustImgDom.addEventListener('change', (evt) => {
	let image1 = evt.target.files[0];
	let fileReader = new FileReader();

	fileReader.onload = (e) => {

		let img = new Image();
		img.src = e.target.result;

		img.onload = () => {
			console.log(img.width + " x " + img.height);
			adjustPicture.setDimension(img.width, img.height);
			adjustPicture.showImageOnCanvas(img, canvasContextAI);
			createImageData(convertDataURIToBinary(fileReader.result), canvasContextAI, adjustPicture);
			adjustPicture.setImageData(imageData);
		}
	};
	fileReader.readAsDataURL(image1);
});

//Other Operations
let imageData;
function createImageData (data, canvasContext, objImage) {
	imageData = canvasContext.createImageData(objImage.width, objImage.height);
	imageData.data.set(data);
}

const BASE64_MARKER = ';base64,';
function convertDataURIToBinary(dataURI) {
  let base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
  let base64 = dataURI.substring(base64Index);
  let raw = window.atob(base64);
  let rawLength = raw.length;
  let array = new Uint8ClampedArray(new ArrayBuffer(rawLength));

  for(i = 0; i < rawLength; i++) {
    array[i] = raw.charCodeAt(i);
  }
  return array;
}*/