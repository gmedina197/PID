let canvas = document.getElementById('canvas-1'),
    ctx = canvas.getContext('2d'),
    rect = {
        startX: 0,
        startY: 0,
        w: 0,
        h: 0
    },
    drag = false;

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function init() {
    canvas.addEventListener('mousedown', mouseDown, false);
    canvas.addEventListener('mouseup', mouseUp, false);
    canvas.addEventListener('mousemove', mouseMove, false);
}

function mouseDown(evt) {
    var pos = getMousePos(canvas, evt);
    rect.startX = pos.x;
    rect.startY = pos.y;
    drag = true;
}

function mouseUp() {
    drag = false;
    makeSelectedMatrix(rect);
}

function mouseMove(evt) {
    if (drag) {
        var pos = getMousePos(canvas, evt);
        rect.w = pos.x - rect.startX;
        rect.h = pos.y - rect.startY;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        refImage.drawTo(canvasRI);
        draw();
    }
}

function draw() {
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'yellow';
    ctx.strokeRect(rect.startX, rect.startY, rect.w, rect.h);
}

function makeSelectedMatrix(area) {
    console.log(area);
    console.log(grayScaleMatrix);
    let matrix; // = H x W
    for (let i = 0; i < area.h; i++) {
        for (let j = 0; j < area.w; j++) {
            //get pixel from adj image
            //put in the matrix
        }
    }

    if (refImage.getWidth() && adjImage.getWidth()) {
        console.log('reference image size: ' + refImage.getWidth() + 'x' + refImage.getHeight());
        console.log('adjust image size: ' + adjImage.getWidth() + 'x' + adjImage.getHeight());
    }
}
