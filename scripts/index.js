function themeToggle() {
  let themeSwitch = document.getElementById("checkbox-id");
  if (
    themeSwitch.addEventListener("change", () => {
      console.log(themeSwitch);
    })
  ) {
  }
}

// wait until DOM loads
document.addEventListener("DOMContentLoaded", function () {
  themeToggle();
});
