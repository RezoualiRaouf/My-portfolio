/**
 * Contact Form Handler with FormSubmit Integration
 * Handles form submission and displays thank you popup
 */

class ContactFormHandler {
  constructor() {
    this.form = document.getElementById("contactForm");
    this.popup = document.getElementById("thankYouPopup");

    if (this.form) {
      this.init();
    }
  }

  init() {
    // Handle form submission
    this.form.addEventListener("submit", (e) => this.handleSubmit(e));

    // Handle popup close events
    this.setupPopupEvents();

    // Check for success parameter in URL (in case of redirect)
    this.checkUrlParams();
  }

  handleSubmit(e) {
    // Add loading state
    this.form.classList.add("loading");

    // Show popup after a brief delay to simulate processing
    setTimeout(() => {
      this.showThankYouPopup();
    }, 1000);
  }

  showThankYouPopup() {
    if (this.popup) {
      this.popup.classList.add("show");
      // Reset form
      this.form.reset();
      this.form.classList.remove("loading");
    }
  }

  closePopup() {
    if (this.popup) {
      this.popup.classList.remove("show");
    }
  }

  setupPopupEvents() {
    if (!this.popup) return;

    // Close button
    const closeBtn = this.popup.querySelector(".popup-close-btn");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => this.closePopup());
    }

    // Close when clicking overlay
    this.popup.addEventListener("click", (e) => {
      if (e.target === this.popup) {
        this.closePopup();
      }
    });

    // Close with Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.popup.classList.contains("show")) {
        this.closePopup();
      }
    });
  }

  checkUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("success") === "true") {
      this.showThankYouPopup();
      // Clean URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new ContactFormHandler();
});

// Export for potential use in other modules
if (typeof module !== "undefined" && module.exports) {
  module.exports = ContactFormHandler;
}
