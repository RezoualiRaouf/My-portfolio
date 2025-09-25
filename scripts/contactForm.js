// Simple contactForm.js - With daily submission limit
window.addEventListener("load", function () {
  emailjs.init("6Ih25VGn6JauSMCGr");

  document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      // Check daily submission limit
      if (!canSubmitToday()) {
        showPopup("submitLimitPopup");
        return;
      }

      const submitBtn = document.getElementById("form__submit_btn");
      submitBtn.value = "Sending...";
      submitBtn.disabled = true;

      emailjs
        .sendForm("service_a7b1l5w", "template_y20rm9c", this)
        .then(function () {
          recordSubmission(); // Record successful submission
          showPopup("thankYouPopup");
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

// Show popup function
function showPopup(id) {
  document.getElementById(id).style.display = "flex";
}

// Close popup function
function closePopup() {
  document.querySelectorAll(".popup-overlay").forEach((el) => {
    el.style.display = "none";
  });
}

// Daily submission limit functions
function canSubmitToday() {
  const today = new Date().toDateString();
  const submissions = JSON.parse(
    localStorage.getItem("dailySubmissions") || "{}"
  );

  // Clean up old dates
  for (let date in submissions) {
    if (date !== today) {
      delete submissions[date];
    }
  }

  localStorage.setItem("dailySubmissions", JSON.stringify(submissions));
  return (submissions[today] || 0) < 2;
}

function recordSubmission() {
  const today = new Date().toDateString();
  const submissions = JSON.parse(
    localStorage.getItem("dailySubmissions") || "{}"
  );
  submissions[today] = (submissions[today] || 0) + 1;
  localStorage.setItem("dailySubmissions", JSON.stringify(submissions));
}

// Show remaining submissions on page load
function updateSubmissionCounter() {
  const today = new Date().toDateString();
  const submissions = JSON.parse(
    localStorage.getItem("dailySubmissions") || "{}"
  );
  const used = submissions[today] || 0;
  const remaining = 2 - used;

  const counter = document.getElementById("submission-counter");
  if (counter) {
    counter.textContent = `Submissions remaining today: ${remaining}`;
    if (remaining === 0) {
      counter.style.color = "red";
    }
  }
}

// Call on page load
updateSubmissionCounter();
