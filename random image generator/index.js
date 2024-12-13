const imageContainerEL = document.querySelector(".image-container");
const btnEL = document.querySelector(".btn");

btnEL.addEventListener("click", () => {
    const imageNum = 10; 
    addNewImage(imageNum);
});

function addNewImage(imageNum) {
    for (let index = 0; index < imageNum; index++) {
        const newImgEL = document.createElement("img");
        newImgEL.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
        
        imageContainerEL.appendChild(newImgEL); 
    }
}
