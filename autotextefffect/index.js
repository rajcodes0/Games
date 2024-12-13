const containerEL = document.querySelector(".container");

const careers = ["YouTube", "Web Developer", "Freelancer"];

let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
  // Animate one character at a time
  characterIndex++;

  // Determine if we need "a" or "am" based on the first letter of the career title
  const article = careers[careerIndex].slice(0, 1).toLowerCase() === "i" ? "am" : "a";

  // Update the HTML with the current part of the career title
  containerEL.innerHTML = `<h1>I am ${article} ${careers[careerIndex].slice(0, characterIndex)}</h1>`;

  // If we've finished the current career title, reset and move to the next one
  if (characterIndex === careers[careerIndex].length) {
    characterIndex = 0;
    careerIndex++;  // Move to the next career

    // If we've gone through all careers, start over
    if (careerIndex === careers.length) {
      careerIndex = 0;
    }
  }

  // Call updateText again after 400ms
  setTimeout(updateText, 200);
}
