
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn?.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}


const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

navToggle?.addEventListener("click", () => {
  navLinks.classList.toggle("show-links");
});

(function(){
    emailjs.init("7vq5AXkJETnYyhzwH");
  })();
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
  
    emailjs.sendForm('service_sh20v8e', 'template_kioa9y3', this)
    .then(function () {
        document.getElementById("form-status").classList.remove("hidden");
        document.getElementById("contact-form").reset();
      }, function (error) {
        alert("Ocurrió un error al enviar el mensaje. Intenta más tarde.");
        console.error(error);
      });
  });
  
