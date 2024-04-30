const cont = document.querySelector(".container");

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

for (let i = 0; i < 16; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    cont.appendChild(square);
    square.style.border = "solid black";
    square.style = "width: 25%; height: 25%;"
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = getRandomColor();
    });
}
let n = 4;
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    let first;
    for (let i = 0; i < n * n; i++) {
        first = cont.firstChild;
        first.remove();
    }

    
    n = prompt("How many columns/rows would you like to have?");
    for (let i = 0; i < n * n; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        cont.appendChild(square);
        square.style.border = "solid black";
        square.style = `width: ${100 / n}%; height: ${100 / n}%;`;
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = getRandomColor();
        });
    }
});

