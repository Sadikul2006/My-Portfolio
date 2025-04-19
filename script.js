const textContainer = document.getElementById("text-container");


const texts = ["Web Developer", "Frontend Developer"];
let currentTextIndex = 0;
let charIndex = 0;

function typeText() {
  if (charIndex < texts[currentTextIndex].length) {
    textContainer.textContent += texts[currentTextIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 150);
  } else {
    setTimeout(deleteText, 700);
  }
}

function deleteText() {
  if (charIndex > 0) {
    textContainer.textContent = texts[currentTextIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteText, 80);
  } else {
    currentTextIndex = (currentTextIndex + 1) % texts.length;
    setTimeout(typeText, 500);
  }
}

setTimeout(typeText, 800);