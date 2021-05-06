//
//
// From Random Library
//
//

// Return a Random Integar Between low and high
function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

//
//
// From Graphics Library
//
//

// Simplify fillStyle
function fill(color) {
    ctx.fillStyle = color;
}
// Draw a Rectangle
function rect(x, y, w, h, mode) {
    if (mode === "fill") {
        ctx.fillRect(x, y, w, h);
    } else if (mode === "stroke") {
        ctx.strokeRect(x, y, w, h)
    }
}
// Draw a Circle
function circle(x, y, r , mode) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    if (mode === "fill") {
        ctx.fill();
    } else if (mode === "stroke") {
        ctx.stroke();
    }
}