const containerEl = document.querySelector(".container");
const refreshBtn = document.querySelector("button");

for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll(".color-container");

generateColors();

refreshBtn.addEventListener("click", generateColors);

function generateColors() {
    colorContainerEls.forEach((colorContainerEl) => {
        const newColor = randomColor();
        colorContainerEl.style.backgroundColor = "#" + newColor;
        colorContainerEl.innerText = "#" + newColor;
    });
}

function randomColor() {
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let color = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        color += chars[randomNum];
    }
    return color;
}
                                    // How It Works

    //  1) Initial Load:
    //         The script creates 30 color boxes and assigns each one a random color when the page loads.

    //  2)  Refreshing Colors:
    //         When the "Refresh Colors" button is clicked, the generateColors function runs again, assigning new random colors to all boxes.

    //  3)  Random Color Generation:
    //         Each time a random color is needed, randomColor() generates a 6-character hex code using the characters 0-9 and a-f.