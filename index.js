let roundNumber1 = Math.floor(Math.random() * 6) + 1;
let roundNumber2 = Math.floor(Math.random() * 6) + 1;

let imagePath = "images/";

let player1 = document.querySelector(".img1");
player1.setAttribute("src", `${imagePath}dice${roundNumber1}.png`);

let player2 = document.querySelector(".img2");
player2.setAttribute("src", `${imagePath}dice${roundNumber2}.png`);

let heading = document.querySelector("h1");

decideWinner();

// Function to decide the winner
function decideWinner() {
  if (roundNumber1 === roundNumber2) {
    heading.textContent = "Draw!";
  } else if (roundNumber1 > roundNumber2) {
    heading.textContent = "Player 1 Wins!🚩";
  } else {
    heading.textContent = "Player 2 Wins!🚩";
  }
}
