class area {
    constructor(selectedCanvas) {
        this.canvas = document.getElementById(selectedCanvas),
        this.ctx = this.getCtx(),
        this.rect = {
            startX: 0,
            startY: 0,
            w: 0,
            h:0
        },
        this.drag = false;
    }

    getCtx() {
        this.ctx = this.canvas.getContext('2d');
    }

    init() {
        this.canvas.addEventListener('mousedown', this.mouseDown, false);
        this.canvas.addEventListener('mouseup', this.mouseUp, false);
        this.canvas.addEventListener('mousemove', this.mouseMove, false); 
    }

    mouseDown (evt) {
        this.rect.startX = evt.pageX - this.offsetLeft;
        this.rect.startY = evt.pageY - this.offsetTop;
        this.drag = true;
    }
    
    mouseUp () {
        this.drag = false;
        console.log(this.rect);
    }
    
    mouseMove (evt) {
        if (this.drag) {
            this.rect.w = (evt.pageX - this.offsetLeft) - this.rect.startX;
            this.rect.h = (evt.pageY - this.offsetTop) - rect.startY;
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            refImage.drawTo(canvasRI);        
            draw();
        }
    }
    
    draw () {
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = 'yellow';
        this.ctx.strokeRect(this.rect.startX, this.rect.startY, this.rect.w, this.rect.h);
    }
}


/*let canvas = document.getElementById('canvas-1'),
    ctx = canvas.getContext('2d'),
    rect = {
        startX: 0,
        startY: 0,
        w: 0,
        h: 0
    },
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
    console.log(rect);
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
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'yellow';
    ctx.strokeRect(rect.startX, rect.startY, rect.w, rect.h);
}

init();*/