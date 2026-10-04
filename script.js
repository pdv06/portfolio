// 1. VARIABLES + DOM SELECTION
// These variables store references to elements that already exist in index.html.

const heading = document.querySelector("header h1");
const projectCards = document.querySelectorAll(".project-card");
const contactForm = document.querySelector("#contact form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const submitButton = contactForm.querySelector("button");

// Create a paragraph for form feedback so you do not need to edit the HTML.
const formMessage = document.createElement("p");
formMessage.id = "formMessage";
contactForm.appendChild(formMessage);

// 2. CONSOLE.LOG()
// Open the browser Developer Tools > Console to see these messages.
console.log("Portfolio website loaded!");
console.log("Portfolio heading:", heading.textContent);
console.log("Number of projects:", projectCards.length);

// 3. REUSABLE FUNCTION + OPERATORS + CONTROL FLOW
// The function returns true only when all three fields contain text.
function checkForm(name, email, message) {
if (name === "" || email === "" || message === "") {
return false;
}
return true;
}

// 4. LOOP + CLICK EVENTS + DOM STYLE CHANGES
// Add a click event to every project card.
for (let i = 0; i < projectCards.length; i++) {
projectCards[i].addEventListener("click", function () {

// Remove the highlight from all cards first.
for (let j = 0; j < projectCards.length; j++) {
projectCards[j].style.backgroundColor = "";
}

// Highlight only the card that was clicked.
projectCards[i].style.backgroundColor = "lightyellow";
console.log("Project " + (i + 1) + " was clicked.");
});
}
// 5. FORM SUBMIT EVENT
contactForm.addEventListener("submit", function (event) {

// Prevent the browser from refreshing or leaving the page.
event.preventDefault();

// Read the user's input. trim() removes extra spaces at the beginning/end.
const visitorName = nameInput.value.trim();
const visitorEmail = emailInput.value.trim();
const visitorMessage = messageInput.value.trim();

// 6. IF / ELSE + DOM TEXT CHANGES
if (checkForm(visitorName, visitorEmail, visitorMessage)) {
formMessage.textContent =
"Thank you, " + visitorName + "! Your message has been received.";
submitButton.textContent = "Message Sent!";
console.log("Name:", visitorName);
console.log("Email:", visitorEmail);
console.log("Message:", visitorMessage);

// Clear the form after a successful submission.
contactForm.reset();
} else {
formMessage.textContent = "Please complete all fields before sending.";
submitButton.textContent = "Send";
}
});