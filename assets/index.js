let i = 0;
let speed = 250; /* The speed/duration of the effect in milliseconds */
let txt = "The Blotto Game"; /* The text */
const mainTitle = document.getElementById("blotto-title");

console.log(txt.charAt(7));
console.log(mainTitle);

function typeWriter() {
  if (i < txt.length) {
    mainTitle.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// window.onload(typeWriter());
window.onload = typeWriter();
