const text = "Hi, I'm Jhanelle S. Rafer — an inspired Web Developer!";
const typedText = document.getElementById("typed-text");
let index = 0;

function typeWriter() {
  if (index < text.length) {
    typedText.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 50);
  }
}

window.onload = typeWriter;

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      alert("Message sent! I'll get back to you soon.");
      form.reset();
    } else {
      alert("Oops! Something went wrong.");
    }
  });
});
