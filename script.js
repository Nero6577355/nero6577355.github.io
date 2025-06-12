const text = "Hi, I'm JJhnllrafer — a passionate Web Developer!";
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
