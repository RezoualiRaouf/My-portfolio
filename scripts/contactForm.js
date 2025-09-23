// Load EmailJS dynamically
if (typeof emailjs === "undefined") {
  const script = document.createElement("script");
  script.src =
    "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
  script.onload = function () {
    console.log("EmailJS loaded dynamically");
    initEmailJS(); // Call your init function here
  };
  document.head.appendChild(script);
}

// Wait for page to load completely
window.addEventListener("load", function () {
  // Check if emailjs is available
  if (typeof emailjs !== "undefined") {
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
            submitBtn.value = "Send Message";
            submitBtn.disabled = false;
          });
      });
  } else {
    console.error("EmailJS library not loaded!");
  }
});

// Test function
function testEmailJS() {
  if (typeof emailjs !== "undefined") {
    emailjs
      .send("service_a7b1l5w", "template_y20rm9c", {
        name: "Test User",
        email: "test@example.com",
        message: "This is a test message",
      })
      .then(
        function (response) {
          console.log("Test SUCCESS!", response);
          alert("Test email sent successfully!");
        },
        function (error) {
          console.log("Test FAILED...", error);
          alert("Test failed: " + JSON.stringify(error));
        }
      );
  } else {
    alert("EmailJS not loaded yet!");
  }
}
