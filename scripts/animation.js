const typingTexts = [
  "A passionate computer science graduate",
  "Who is actively seeking internship opportunities!",
];

let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let isWaiting = false;

function typeText() {
  // Find the element - it should match your HTML structure
  const element = document.querySelector(".bio__description_text");

  if (!element) {
    console.error("Element with class bio__description_text not found");
    return;
  }

  const currentText = typingTexts[currentTextIndex];

  if (isWaiting) {
    // Wait period between delete and next text
    setTimeout(() => {
      isWaiting = false;
      typeText();
    }, 500);
    return;
  }

  if (!isDeleting) {
    // Typing phase
    element.textContent = currentText.substring(0, currentCharIndex + 1);
    currentCharIndex++;

    if (currentCharIndex === currentText.length) {
      // Finished typing, wait before deleting
      setTimeout(() => {
        isDeleting = true;
        typeText();
      }, 1000); // Wait 1 seconds before starting to delete
      return;
    }
  } else {
    // Deleting phase
    element.textContent = currentText.substring(0, currentCharIndex - 1);
    currentCharIndex--;

    if (currentCharIndex === 0) {
      // Finished deleting
      isDeleting = false;
      currentTextIndex = (currentTextIndex + 1) % typingTexts.length;
      isWaiting = true; // Add a small wait before starting next text
    }
  }

  // Set different speeds for typing vs deleting
  const speed = isDeleting ? 25 : 50;
  setTimeout(typeText, speed);
}

// Start the animation when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Wait 0.5 second before starting the animation
  setTimeout(typeText, 500);
});
