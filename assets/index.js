var i = 0;
var txt = "The Blotto Game"; /* The text */
const mainTitle = document.getElementById("blotto-title");
var speed = 230; /* The speed/duration of the effect in milliseconds */

console.log(txt.charAt(7));
console.log(mainTitle);

function typeWriter() {
  if (i < txt.length) {
    mainTitle.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload(typeWriter());
