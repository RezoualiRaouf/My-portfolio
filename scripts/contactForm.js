function contactForm() {
  window.addEventListener("load", function () {
    emailjs.init("6Ih25VGn6JauSMCGr");

    document
      .getElementById("contactForm")
      .addEventListener("submit", function (e) {
        e.preventDefault();

        const submitBtn = document.getElementById("form__submit_btn");
        submitBtn.value = "Sending...";
        submitBtn.disabled = true;

        emailjs
          .sendForm("service_a7b1l5w", "template_y20rm9c", this)
          .then(function () {
            showPopup();
            document.getElementById("contactForm").reset();
          })
          .catch(function () {
            alert("Failed to send message. Please try again.");
          })
          .finally(function () {
            submitBtn.value = "Send Message";
            submitBtn.disabled = false;
          });
      });
  });
}

// Show popup function
function showPopup() {
  document.getElementById("thankYouPopup").style.display = "flex";
}

// Close popup function
function closePopup() {
  document.getElementById("thankYouPopup").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  contactForm();
});
