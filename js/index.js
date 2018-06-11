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
    init();
}

function uploadAdj() {
    adjImage = new SimpleImage(adjustImgDom);
    adjImage.drawTo(canvasAI);
}

function makeGray() {
    let grayScaleList = [];
    for (let pixel of refImage.pixels()) {
        let avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        grayScaleList.push(avg);
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    //let pixel = image.getPixel(0, 0);
    grayScaleMatrix = listToMatrix(grayScaleList, refImage.getHeight());
    refImage.drawTo(canvasRI);
}

function listToMatrix(list, elementsPerSubArray) {
    var matrix = [], i, k;

    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }

        matrix[k].push(list[i]);
    }
    return matrix;
}

document.addEventListener('DOMContentLoaded', () => {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
        direction: 'right',
        hoverEnabled: false,
    });
});

function uploadRefImage() {
    document.getElementById("picField-1").click();
}

function uploadAdjImage() {
    document.getElementById("picField-2").click();
}

//hide the obj to style the float button
referenceImgDom.style.display = 'none';
adjustImgDom.style.display = 'none';

referenceImgDom.addEventListener('change', uploadRef);
adjustImgDom.addEventListener('change', uploadAdj);
