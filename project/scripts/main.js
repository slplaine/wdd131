// Footer dates
const yearSpan = document.getElementById("currentyear");
const lastModified = document.getElementById("lastModified");

yearSpan.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modified: ${document.lastModified}`;

// Example of localStorage usage
const nameForm = document.getElementById("nameForm");
const welcomeMessage = document.getElementById("welcomeMessage");

if (localStorage.getItem("visitorName")) {
  welcomeMessage.textContent = `Welcome back, ${localStorage.getItem("visitorName")}!`;
}

nameForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const nameInput = document.getElementById("visitorName").value;
  localStorage.setItem("visitorName", nameInput);
  welcomeMessage.textContent = `Hello, ${nameInput}! Thanks for visiting.`;
});
// Footer dates
const yearSpan = document.getElementById("currentyear");
const lastModified = document.getElementById("lastModified");

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
if (lastModified) {
  lastModified.textContent = `Last Modified: ${document.lastModified}`;
}

// Form interaction
const nameForm = document.getElementById("nameForm");
const welcomeMessage = document.getElementById("welcomeMessage");

if (localStorage.getItem("visitorName") && welcomeMessage) {
  welcomeMessage.textContent = `Welcome back, ${localStorage.getItem("visitorName")}!`;
}

if (nameForm) {
  nameForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const nameInput = document.getElementById("visitorName").value;
    const emailInput = document.getElementById("visitorEmail").value;
    const messageInput = document.getElementById("message").value;

    // Save name in localStorage
    localStorage.setItem("visitorName", nameInput);

    // Show personalized message
    if (welcomeMessage) {
      welcomeMessage.textContent = `Hello, ${nameInput}! Thanks for your message.`;
    }

    // For now, just log the data (simulating sending)
    console.log("Form submitted:", { nameInput, emailInput, messageInput });

    // Clear form
    nameForm.reset();
  });
}
