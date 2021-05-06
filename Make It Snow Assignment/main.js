// SnowFlakes
// Initialize Canvas
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Bubbles Array
let flakes = [];

// Main Draw Loop
requestAnimationFrame(main);
function main () {
    // Fill Canvas
    fill("black");
    rect(0, 0, cnv.width, cnv.height, "fill");

    // Draw & Move SnowFlakes
    for (let i = 0; i < flakes.length; i++) {
        // Snowflake Speed
        flakes[i].y += flakes[i].r;
        // Makes the Snows Fall Slightly Angled
        flakes[i].x ++;
        // Draw Snowflake
        drawSnowflake(flakes[i]);
        // Teleport Back to Top and Give Random x Value
        if (flakes[i].y >= 600) {
            flakes[i].y = 0;
            flakes[i].x = randomInt(-50, cnv.width);
        }
    }
    // Loop Draw
    requestAnimationFrame(main);
}

// Creates a New Random Snowflake
function randomSnowflake() {
    return {
        x: randomInt(0, cnv.width),
        y: randomInt(0, cnv.height),
        r: randomInt(2, 10),
        color: "white"
    }
}

// Draws the Snowflake
function drawSnowflake (sFlake) {
    fill(sFlake.color)
    circle(sFlake.x, sFlake.y, sFlake.r, "fill");
}

// Event Stuff
document.addEventListener("keydown", keydownHandler);
function keydownHandler(event) {
    if (event.keyCode === 39) { // Right Arrow
        // Add Snowflake
        flakes.push(randomSnowflake());
    } else if (event.keyCode === 37) { // Left Arrow
        // Remove Snowflake
        flakes.pop();
    } 
}