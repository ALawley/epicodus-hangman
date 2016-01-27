// This *should*(?) be everything you need on the back end (we think). You'll just need to build the html of the page out, then create the front end code to tie everything together.
function Game() {
  // we're setting this.lossCounter to 0 and will later in our code increment it by 1 with every wrong guess. Can be used as a loss condition when this.lossCounter >= a number of tries.
  this.lossCounter = 0;
  // this is the victory counter. Later in our code we increment it with each successful guess by the number of spaces containing that letter. When it equals the word's length, user wins.
  this.solveCounter = 0;
}

function Word(word) {
  this.word = word;
  this.length = this.word.length;
  // sets this.letters equal to an array containing each individual letter of the input word as a string
  this.letters = this.word.split("");
}

Game.prototype.randomWord = function() {
  var allWords = ["planet", "pineapple", "spaceship", "skyscraper", "revolution", "television", "blackboard", "tulip", "vehicle", "psychology", "labyrinth", "manuscript"];
  var chosenWord = allWords[Math.floor(Math.random()*allWords.length)];
  return chosenWord;
}

// Evaluates guess as right or wrong. Checks for all letters of a word (2nd parameter), if an input letter (1st parameter) matches. Returns true and stops if does, increments loss counter and returns false if none do.
Game.prototype.guessCheck = function(letter, word) {
  for (var index = 0; index < word.length; index += 1) {
    if (word[index] === letter) {
      return true;
    }
  }
  this.lossCounter += 1;
  return false;
}

// Checks all positions of the word the correctly guessed letter is found in. Returns numerical array of all index numbers (so starting at 0). Can be used for filling in blanks. Also increases the solveCounter by the number of letters filled in.
Game.prototype.letterPositions = function(letter, word) {
  var positionNumbers = [];
  for (var index = 0; index < word.length; index += 1) {
    if (word[index] === letter) {
      positionNumbers.push(index);
    }
  }
  this.solveCounter += positionNumbers.length
  return positionNumbers;
}
