// -------------------------------------
// 1. SAY HELLO BUTTON
// Demonstrates: variable, function,
// getElementById, and click event.
// -------------------------------------
const helloButton = document.getElementById("helloButton");
const helloMessage = document.getElementById("helloMessage");

function showGreeting() {
  helloMessage.innerText = "Hello! Thanks for visiting my portfolio 👋";
}

helloButton.addEventListener("click", showGreeting);

// -------------------------------------
// 2. CONTACT FORM
// This is only a front-end demo.
// It does NOT send an actual email.
// Demonstrates: submit event, function,
// condition, and DOM text update.
// -------------------------------------
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
  // Stop the page from refreshing.
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const visitorName = nameInput.value.trim();

  if (visitorName === "") {
    formMessage.innerText = "Please enter your name first.";
  } else {
    formMessage.innerText =
      "Thanks, " + visitorName + "! Your demo message was received.";

    // Clear the form after a successful demo submission.
    contactForm.reset();
  }
});

// -------------------------------------
// 3. CURRENT YEAR IN THE FOOTER
// -------------------------------------
const year = document.getElementById("year");
year.innerText = new Date().getFullYear();
