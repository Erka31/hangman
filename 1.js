const letters = document.getElementById("letters");
const wordDisplay = document.getElementById("wordDisplay");
const underlines = document.getElementById("underline");
const underline = document.getElementsByClassName("1a");
const lives = document.getElementById("lives");
const alphabet = "abcdefghijklmnopqrstuvwxyz";
let result = "erhme";
let live = 10;

for (let i = 0; i < alphabet.length; i++) {
  const button = document.createElement("button");
  button.innerHTML = alphabet[i];
  button.id = i.toString();
  letters.appendChild(button);

  button.addEventListener("click", function () {
    button.style.pointerEvents = "none";
    button.style.color = "grey";
    if (result.includes(alphabet[i])) {
      for (let j = 0; j < result.length; j++) {
        if (result[j] === alphabet[i]) {
          underline[j].innerHTML = alphabet[i];
        }
      }
      if (underlines.innerText.includes("_") === false) {
        alert("You win! Would you like to play again?");
        window.location.reload();
      }
    } else {
      live--;
      lives.innerHTML = `You have ${live} lives!`;
      if (live == 0) {
        alert("You lost! Would you like to play again?");
        window.location.reload();
      }
    }
  });
}

for (let i = 0; i < result.length; i++) {
  const div = document.createElement("div");
  div.id = [i];
  div.innerHTML = " _ ";
  div.className = "1a";
  underlines.appendChild(div);
}

function updateLives() {
  lives.innerHTML = `You have ${live} lives!`;
}
updateLives();
