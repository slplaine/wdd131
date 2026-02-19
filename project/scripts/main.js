// ====== Menu Hambúrguer ======
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.page-links');

hamburger.addEventListener('click', () => { navMenu.classList.toggle('active'); });

// ====== Footer Dates ======
const yearSpan = document.getElementById("currentyear");
const lastModified = document.getElementById("lastModified");

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
if (lastModified) {
  lastModified.textContent = `Last Modified: ${document.lastModified}`;
}

// ====== Form Interaction ======
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

    // Salva nome no localStorage
    localStorage.setItem("visitorName", nameInput);

    // Mensagem personalizada
    if (welcomeMessage) {
      welcomeMessage.textContent = `Hello, ${nameInput}! Thanks for your message.`;
    }

    // Simula envio (log no console)
    console.log("Form submitted:", { nameInput, emailInput, messageInput });

    // Limpa formulário
    nameForm.reset();
  });
}
