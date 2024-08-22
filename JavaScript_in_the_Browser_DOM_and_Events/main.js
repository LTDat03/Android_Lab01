// JavaScript in the Browser: DOM and Events

// Coding Challenge 1

var secretNumber = Math.trunc(Math.random() * 100) + 1;
var score = 100;

var displayMessage = (message) => {
  return (document.getElementById("message").textContent = message);
};

document.getElementById("check").addEventListener("click", function () {
  var guess = Number(document.getElementById("input").value);
  document.body.style.backgroundColor = 'white'; // Reset the background color
  if (!guess) {
    displayMessage("⛔ No Number!");
  }else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.getElementById("answer").textContent = secretNumber;
    document.body.style.backgroundColor = 'red';
    document.getElementById("input").style.width = "20rem";
    score++;
  } else {
    displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
    score--;
  }

  document.getElementById("score").textContent = score;
  if (score === 0) {
    displayMessage("💥 You lost the game!");
    document.getElementById("score").textContent = 0;
    document.getElementById("check").disabled = true;
  }
});
document.getElementById("again").addEventListener("click", function () {
  var secretNumber = Math.trunc(Math.random() * 100) + 1;
  score = 100;

  displayMessage("Start guessing...");
  document.getElementById("check").disabled = false;
  document.getElementById("input").value = "";
  document.body.style.backgroundColor = "#222"; // Set the background color
  document.getElementById("answer").style.width = "15rem"; // Set the width of the number
  document.getElementById("answer").textContent = "?"; // Set answer to ?
  document.getElementById("score").textContent = score; // set score to 100
});
