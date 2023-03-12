// Etch-a-Sketch

// Set up a “hover” effect so that the grid divs change color when the mouse passes over them, 
// It will leave a (pixelated) trail through the grid like a pen would
function hover () {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseenter", () => {
            square.style.cssText = "background-color: #bdbdbd";
        });
    });
}

// Create a webpage with a grid of square divs
// Create the divs using JavaScript if the user enters a valid grid number
function newGrid () {
    const div = document.querySelector("div.container");
    let gridSize = +prompt("How many squares per side would you like for your grid?\nEnter an integer between 1 and 100");
    while (!Number.isInteger(gridSize) || (gridSize < 1 && gridSize !== 0)|| gridSize > 100) {
        gridSize = +prompt("Please enter a valid integer between 1 and 100");
    }

    div.textContent = "";
    div.style.cssText = "display: block";

    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        div.appendChild(row);
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }
        row.style.cssText = `grid-template-columns: repeat(${gridSize},1fr)`;
    }
        
    hover();

}

// Prompt the user to enter the number of squares on each side of the grid layout
// The user will receive the prompt after pressing a button
const button = document.querySelector("button");
button.addEventListener("click", newGrid);