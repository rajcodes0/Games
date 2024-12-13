const inputEL = document.querySelector(".input");

const bodyEL = document.querySelector("body");

inputEL.checked = false;
inputEL.addEventListener("change", updateBody);

function updateBody() {
  if (inputEL.checked) {
    bodyEL.style.background = "black";
  } else {
    bodyEL.style.background = "white";
  }
}
