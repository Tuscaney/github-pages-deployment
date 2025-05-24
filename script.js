// script.js

function greetUser() {
  const name = prompt("What's your name?");
  if (name) {
    const message = `Hello, ${name}! Welcome to the Git & Bash Cheat Sheet.`;
    alert(message); // <- Set your breakpoint on this line
  }
}

// Run after page loads
window.onload = function () {
  const button = document.getElementById("greetBtn");
  if (button) {
    button.addEventListener("click", greetUser);
  }
};