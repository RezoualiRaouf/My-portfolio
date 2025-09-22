emailjs.init("6Ih25VGn6JauSMCGr");

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Optional: Change button text while sending
  const submitBtn = document.getElementById("form__submit_btn");
  submitBtn.value = "Sending...";
  submitBtn.disabled = true;

  emailjs
    .sendForm("service_a7b1l5w", "template_y20rm9c", this)
    .then(
      function () {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset();
      },
      function (error) {
        alert("Failed to send message. Please try again.");
        console.log("Error:", error);
      }
    )
    .finally(function () {
      // Reset button
      submitBtn.value = "Send Message";
      submitBtn.disabled = false;
    });
});
