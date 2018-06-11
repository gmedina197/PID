let canvas = document.getElementById('canvas-1'),
    ctx = canvas.getContext('2d'),
    rect = {
        startX: 0,
        startY: 0,
        w: 0,
        h: 0
    },
    drag = false;

function init() {
    canvas.addEventListener('mousedown', mouseDown, false);
    canvas.addEventListener('mouseup', mouseUp, false);
    canvas.addEventListener('mousemove', mouseMove, false);
}

function mouseDown(evt) {
    rect.startX = evt.pageX - this.offsetLeft;
    rect.startY = evt.pageY - this.offsetTop;
    drag = true;
}

function mouseUp() {
    drag = false;
    makeSelectedMatrix(rect);
}

function mouseMove(evt) {
    if (drag) {
        rect.w = evt.pageX - this.offsetLeft - rect.startX;
        rect.h = evt.pageY - this.offsetTop - rect.startY;
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
    for(let i = 0; i < area.h; i++) {
        for(let j = 0; j < area.w; j++) {
            
        }
    }

    console.log('Size: ' + refImage.getWidth() + 'x' + refImage.getHeight());
}
