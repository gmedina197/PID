let canvas = document.getElementById("canvas-1"),
    ctx = canvas.getContext("2d"),
    rect = {
        startX: 0,
        startY: 0,
        w: 0,
        h: 0
    },
    fullImage = false,
    medias = {
        ref: 0,
        adj: 0,
    },
    variances = {
        ref: 0,
        adj: 0
    },
    drag = false,
    selectedMatrix = [];

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function init() {
    canvas.addEventListener("mousedown", mouseDown, false);
    canvas.addEventListener("mouseup", mouseUp, false);
    canvas.addEventListener("mousemove", mouseMove, false);
}

function mouseDown(evt) {
    var pos = getMousePos(canvas, evt);
    rect.startX = Math.round(pos.x);
    rect.startY = Math.round(pos.y);
    drag = true;
}

function mouseUp() {
    drag = false;
    makeSelectedMatrix(rect);
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
    ctx.strokeStyle = "yellow";
    ctx.strokeRect(rect.startX, rect.startY, rect.w, rect.h);
}

function makeFullImgMatrix() {
    selectedMatrix = refImageMatrix;
}

function makeSelectedMatrix(area) {
    //fullimg use
    ctx.strokeStyle = "green";
    ctx.strokeRect(rect.startX, rect.startY, rect.w, rect.h);

    let adjacencyList = new Array(area.h).fill(0); // w * h
    for (let i = 0, m = area.startX; i < area.w; i++, m++) {
        selectedMatrix[i] = new Array(adjacencyList.length);
        for (let j = 0, n = area.startY; j < area.h; j++, n++) {
            selectedMatrix[i][j] = refImageMatrix[m][n];
        }
    }
}

//return the average on a list of pixels
function getMedia(list) {
    let element = 0;
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list[0].length; j++) {
            element += list[i][j];
        }
    }

    return element / (list.length * list[0].length);
}

function getVariation(list, media) {
    let element = 0;
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list[0].length; j++) {
            element += Math.pow(list[i][j] - media, 2);
        }
    }

    return element / (list.length * list[0].length);
}

function getGain(vr, va) {
    return Math.sqrt(vr / va);
}

function getOffSet(mr, ma, gain) {
    return mr - gain * ma;
}

function adjImageAdjustment(gain, offset) {
    let matrix = [];
    for (let x = 0; x < adjImageMatrix.length; x++) {
        for (let y = 0; y < adjImageMatrix[0].length; y++) {
            let pixel = adjImageMatrix[x][y];
            matrix.push(gain * pixel + offset);
        }
    }
    let i = 0;
    for (let pixel of adjImage.pixels()) {
        let p = matrix[i];
        pixel.setRed(p);
        pixel.setGreen(p);
        pixel.setBlue(p);
        i++;
    }
    adjImageMatrix = listToMatrix(matrix, adjImage.getWidth());
    adjImage.drawTo(canvasAI);
}

function findPatterns() {
    let ctxAI = canvasAI.getContext('2d');
    let sum = Number.MIN_SAFE_INTEGER;
    let start = {
        x: 0,
        y: 0
    },
    covariance = 0,
    SelMedia = getMedia(selectedMatrix),
    SelVariance = getVariation(selectedMatrix, SelMedia);


    if(selectedMatrix.length > adjImageMatrix.length) {
        alert('erro');
    } else {
        for (let xa = 0; xa < adjImageMatrix.length - selectedMatrix.length; xa++) {
            for (let ya = 0; ya < adjImageMatrix[0].length - selectedMatrix[0].length; ya++) {
                covariance = 0;
                let AdjMatrix = new Array(selectedMatrix.length),
                    AdjMedia = 0,
                    AdjVariance;
                for (let xr = 0; xr < selectedMatrix.length; xr++) {
                    AdjMatrix[xr] = new Array(selectedMatrix[0].length);
                    for (let yr = 0; yr < selectedMatrix[0].length; yr++) {
                        AdjMatrix[xr][yr] = adjImageMatrix[xa + xr][ya + yr];
                    }
                }
                AdjMedia = getMedia(AdjMatrix);
                AdjVariance = getVariation(AdjMatrix, AdjMedia);
                for (let xr = 0; xr < selectedMatrix.length; xr++) {
                    for (let yr = 0; yr < selectedMatrix[0].length; yr++) {
                        let g1 = AdjMatrix[xr][yr] - AdjMedia;
                        let g2 = selectedMatrix[xr][yr] - SelMedia;
                        covariance += (g1 * g2);
                    }
                }
                covariance /= (selectedMatrix.length * selectedMatrix[0].length);
                let correlation = covariance / Math.sqrt(AdjVariance * SelVariance);
                if(correlation > sum){
                    console.log(correlation);
                    sum = correlation;
                    start.x = xa;
                    start.y = ya;
                }
            }
        }
    }
    
    //???????????????????????????????????????????????????????????
    ctxAI.strokeRect(start.y, start.x, selectedMatrix[0].length, selectedMatrix.length);    
}

function run() {
    medias.ref = getMedia(refImageMatrix);
    medias.adj = getMedia(adjImageMatrix);

    variances.ref = getVariation(refImageMatrix, medias.ref);
    variances.adj = getVariation(adjImageMatrix, medias.adj);

    let gain = getGain(variances.ref, variances.adj);
    let offset = getOffSet(medias.ref, medias.adj, gain);
    
    adjImageAdjustment(gain, offset);
    findPatterns();
}