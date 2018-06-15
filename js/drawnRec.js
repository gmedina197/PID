let canvas = document.getElementById('canvas-1'),
    ctx = canvas.getContext('2d'),
    rect = {
        startX: 0,
        startY: 0,
        w: 0,
        h: 0
    },
    fullImage = false,
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
    rect.startX = Math.round(pos.x);
    rect.startY = Math.round(pos.y);
    drag = true;
}

function mouseUp() {
    drag = false;
    if(fullImage)
        makeFullImgMatrix();
    else    
        makSelectedMatrix(rect);
}

function mouseMove(evt) {
    if (drag) {
        var pos = getMousePos(canvas, evt);
        rect.w = Math.round(pos.x - rect.startX);
        rect.h = Math.round(pos.y - rect.startY);
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

function makeFullImgMatrix() {
}

function makeSelectedMatrix(area) {
    ctx.strokeStyle = 'green';
    ctx.strokeRect(rect.startX, rect.startY, rect.w, rect.h);
    
    console.log(area);
    console.log(grayScaleMatrix); 

    let adjacencyList = new Array(area.h).fill(0); /*w * h */
    let adjacencyMatrix = [];
    
    for (let i = 0, m = area.startX; i < area.w; i++, m++) {
        adjacencyMatrix[i] = new Array(adjacencyList.length);
        for (let j = 0, n = area.startY; j < area.h; j++, n++) {
            adjacencyMatrix[i][j] = grayScaleMatrix[m][n];
        }
    }
    console.log(adjacencyMatrix)
}
