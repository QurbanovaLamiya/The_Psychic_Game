let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
 guessesLeft = 15;
 wins = 0;
 losses = 0;
 guessedLetters = [];
 letterToGuess = null;


let updateGuessesLeft = () => {
  document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

let updateLetterToGuess = () => {
  letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};

let updateGuessesSoFar = () => {
  document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
};

let reset = function() {
  guessesLeft = 15;
  guessedLetters = [];
  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
};

updateLetterToGuess();
updateGuessesLeft();


document.onkeydown = function(event) {
  guessesLeft--;

  let letter = String.fromCharCode(event.which).toLowerCase();

  guessedLetters.push(letter);

  updateGuessesLeft();
  updateGuessesSoFar();

  if (letter === letterToGuess) {
    wins++;
    document.querySelector("#wins").innerHTML = wins;
    reset();
  };

  if (guessesLeft === 0) {
    losses++;
    document.querySelector("#losses").innerHTML = losses;
    reset();
  }
};