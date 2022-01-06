function createGrid(size = 16) {
    const container = document.querySelector(".container");
    for (let i = 0; i < size * size; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("pixels");
        container.appendChild(newDiv);
    }
    container.setAttribute("style", `grid-template-columns: repeat(${size}, 1fr);`)
}

function clearScreen() {
    document.querySelector(".container").innerHTML = "";
    let value = document.querySelector("#pixel-creator")
    createGrid(value.value);
    fillColor();
}

function fillColor() {
    let pixels = document.querySelectorAll(".pixels")

    pixels.forEach(pixel =>
        pixel.addEventListener("mouseenter", function () {

            if (colorMode === "rainbow") {
                let red = Math.floor(Math.random() * 256);
                let green = Math.floor(Math.random() * 256);
                let blue = Math.floor(Math.random() * 256);
                let rgbColor = `rgb(${red}, ${green}, ${blue})`
                this.setAttribute("style", `background-color: ${rgbColor}`)

            } else if (colorMode === "color") {
                let colorPicker = document.querySelector("#color-picker")
                this.setAttribute("style", `background-color: ${colorPicker.value}`)

            } else if (colorMode === "eraser") {
                this.setAttribute("style", `background-color: #FFFFFF`)
            }
        })
    )
} 

function updateLabel(resolution) {
    let label = document.querySelector(".pixel-label");
    label.textContent = resolution + " x " + resolution
}

function removeActiveClass(){
    let buttons = document.querySelectorAll("button");
    buttons.forEach(button =>
        button.classList.remove("active")
    )
}

let pixelCreator = document.querySelector("#pixel-creator")
pixelCreator.addEventListener("change", function (e) {
    let value = e.target.value
    clearScreen(value);
    updateLabel(value);
})

let colorMode = "color"
let clearButton = document.querySelector(".clear")
clearButton.addEventListener("click", clearScreen)

let eraser = document.querySelector(".eraser")
eraser.addEventListener("click", function () {
    removeActiveClass();
    eraser.classList.add("active");
    colorMode = "eraser";
    fillColor();
})

let rainbow = document.querySelector(".rainbow")
rainbow.addEventListener("click", function () {
    removeActiveClass();
    rainbow.classList.add("active");
    colorMode = "rainbow";
    fillColor();
})

let color = document.querySelector(".color")
color.addEventListener("click", function () {
    removeActiveClass();
    color.classList.add("active");
    colorMode = "color";
    fillColor();
})

let colorPicker = document.querySelector("#color-picker")
colorPicker.addEventListener("click", function () {
    removeActiveClass();
    color.classList.add("active");
    colorMode = "color"
    fillColor();
})

createGrid()
fillColor()










