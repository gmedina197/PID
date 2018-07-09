let referenceImgDom = document.getElementById("picField-1"),
    canvasRI = document.getElementById("canvas-1"),
    adjustImgDom = document.getElementById("picField-2"),
    canvasAI = document.getElementById("canvas-2");

let refImage,
    adjImage,
    refImageMatrix = [],
    adjImageMatrix = [];

function makeGray() {
    if (refImage) {
        refImageMatrix = grayScaleMatrix(refImage, canvasRI);
    }

    if (adjImage) {
        adjImageMatrix = grayScaleMatrix(adjImage, canvasAI);
    }
}

function grayScaleMatrix(imgObj, canvas) {
    let list = [],
        matrix = [];
    for (let pixel of imgObj.toArray()) {
        let avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        list.push(avg);
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }

    matrix = listToMatrix(list, imgObj.getWidth());    
    imgObj.drawTo(canvas);

    return matrix;
}

function listToMatrix(list, elementsPerSubArray) {
    let matrix = [],
        i,
        k;
    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }

        matrix[k].push(list[i]);
    }
    return matrix;
}

document.addEventListener("DOMContentLoaded", () => {
    var elems = document.querySelectorAll(".fixed-action-btn");
    var instances = M.FloatingActionButton.init(elems, {
        direction: "right",
        hoverEnabled: false
    });
});

/*========================================================================================
    FILE UPLOAD
=========================================================================================*/
function uploadRef() {
    refImage = new SimpleImage(referenceImgDom);
    refImage.drawTo(canvasRI);
    init();
}

function uploadAdj() {
    adjImage = new SimpleImage(adjustImgDom);
    adjImage.drawTo(canvasAI);
}

function uploadRefImage() {
    document.getElementById("picField-1").click();
}

function uploadAdjImage() {
    document.getElementById("picField-2").click();
}

//hide the obj to style the float button
referenceImgDom.style.display = "none";
adjustImgDom.style.display = "none";

referenceImgDom.addEventListener("change", uploadRef);
adjustImgDom.addEventListener("change", uploadAdj);

/*===========================================================================================
    RESET CANVAS
============================================================================================*/
function resetRefImage() {
    let ctx = canvasRI.getContext("2d");
    ctx.clearRect(0, 0, canvasRI.width, canvasRI.height);
    canvasRI.width = 300;
    canvasRI.height = 150;
}

function resetAdjImage() {
    let ctx = canvasAI.getContext("2d");
    ctx.clearRect(0, 0, canvasAI.width, canvasAI.height);
    canvasAI.width = 300;
    canvasAI.height = 150;
}

function resetBothImg() {
    resetAdjImage();
    resetRefImage();
}

document.addEventListener("DOMContentLoaded", function() {
    var elems = document.querySelectorAll(".modal");
    var instances = M.Modal.init(elems, {});
});