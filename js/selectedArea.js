canvas = document.getElementById('canvas-1');

let pos = {
    x: 0,
    y: 0
}

canvas.addEventListener('mousedown', (evt) => {
    pos.x = evt.x;
	pos.y = evt.y;

	let canvas = document.getElementById('canvas-1');

	pos.x-= canvas.offsetLeft;
	pos.y-= canvas.offsetTop;
    console.log ('x: ' + pos.x + ' y: ' + pos.y);
});

function getPos() {
    return pos;
}