let canvas = document.getElementById('canvas-1'),
    ctx = canvas.getContext('2d'),
    rect = {},
    drag = false;

function init () {
    canvas.addEventListener('mousedown', mouseDown, false);
    canvas.addEventListener('mouseup', mouseUp, false);
    canvas.addEventListener('mousemove', mouseMove, false);
}

function mouseDown (evt) {
    rect.startX = evt.pageX - this.offsetLeft;
    rect.startY = evt.pageY - this.offsetTop;
    drag = true;
}

function mouseUp () {
    drag = false;
}

function mouseMove (evt) {
    if (drag) {
        rect.w = (evt.pageX - this.offsetLeft) - rect.startX;
        rect.h = (evt.pageY - this.offsetTop) - rect.startY;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
	    refImage.drawTo(canvasRI);        
        draw();
    }
}

function draw () {
    ctx.strokeRect(rect.startX, rect.startY, rect.w, rect.h);
}

init();