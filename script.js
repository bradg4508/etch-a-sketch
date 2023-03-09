// Etch-a-Sketch

// Create a webpage with a 16x16 grid of square divs
// Create the divs using JavaScript
const div = document.querySelector("div.container");
for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    div.appendChild(row);
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        row.appendChild(square);
    }    
}

