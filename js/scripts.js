function Game() {
  this.lossCounter = 0;
  this.solveCounter = 0;
}

function Word(word) {
  this.word = word;
  this.length = this.word.length;
  this.letters = this.word.split("");
}

Game.prototype.randomWord = function() {
  var allWords = ["planet", "pineapple", "spaceship", "skyscraper", "revolution", "television", "blackboard", "tulip", "vehicle", "psychology", "labyrinth", "manuscript"];
  var chosenWord = allWords[Math.floor(Math.random()*allWords.length)];
  return chosenWord;
}

Game.prototype.guessCheck = function(letter, word) {
  for (var index = 0; index < word.length; index += 1) {
    if (word[index] === letter) {
      return true;
    }
  }
  this.lossCounter += 1;
  return false;
}

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
