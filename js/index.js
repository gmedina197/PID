let referenceImgDom = document.getElementById('picField-1'),
    canvasRI = document.getElementById('canvas-1'),
    adjustImgDom = document.getElementById('picField-2'),
    canvasAI = document.getElementById('canvas-2');

let refImage,
    adjImage,
    grayScaleMatrix = [];

function uploadRef() {
    refImage = new SimpleImage(referenceImgDom);
    refImage.drawTo(canvasRI);
    console.log(
        'reference image size ' + canvasRI.height + ' x ' + canvasRI.width
    );
    init();
}

function uploadAdj() {
    adjImage = new SimpleImage(adjustImgDom);
    console.log(
        'adjust image size ' + canvasAI.height + ' x ' + canvasAI.width
    );
    adjImage.drawTo(canvasAI);
}

function makeGray() {
    for (let pixel of refImage.pixels()) {
        let avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        grayScaleMatrix.push(avg);
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    //let pixel = image.getPixel(0, 0);
    console.log(grayScaleMatrix);
    refImage.drawTo(canvasRI);
}

document.addEventListener('DOMContentLoaded', () => {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
        direction: 'left',
        hoverEnabled: false,
    });
});
