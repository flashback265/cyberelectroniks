// Simple typewriter effect
const phrases = ["Innovation", "Security", "Speed", "Intelligence"];
let i = 0, j = 0, currentPhrase = [], isDeleting = false;
const element = document.getElementById("typewriter");

function typeLoop() {
  element.innerHTML = currentPhrase.join("");

  if (!isDeleting && j <= phrases[i].length) {
    currentPhrase.push(phrases[i][j]);
    j++;
  }

  if (isDeleting && j <= phrases[i].length) {
    currentPhrase.pop();
    j--;
  }

  if (j === phrases[i].length) isDeleting = true;
  if (j === 0 && isDeleting) {
    isDeleting = false;
    i = (i + 1) % phrases.length;
  }

  setTimeout(typeLoop, isDeleting ? 50 : 150);
}

typeLoop();

function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}
