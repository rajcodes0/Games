const btnEL = document.querySelector(".btn");

btnEL.addEventListener("mouseover", (event) => {
    
    const rect = btnEL.getBoundingClientRect(); 
    const y = event.clientY - rect.top;  
    const x = event.clientX - rect.left;  

    
    btnEL.style.setProperty("--xPos", `${x}px`);
    btnEL.style.setProperty("--yPos", `${y}px`);
});
