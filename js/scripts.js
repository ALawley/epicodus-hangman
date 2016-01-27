var lossCounter = 0;

var letterArray = function(word) {
  var wordArray = [];
  for (var index = 0; index < word.length; index +=1) {
    wordArray.push(word.slice(index, index + 1))
  }
  return wordArray;
}
function ChosenWord(word) {
  this.word = word;
  this.length = word.length;
  this.letters = letterArray(word);
}
var randomWord = function() {
  var allWords = ["planet", "pineapple", "spaceship", "skyscraper", "revolution", "television", "blackboard", "tulip", "vehicle", "psychology", "labyrinth", "manuscript"];
  var chosenWord = allWords[Math.floor(Math.random()*allWords.length)];
  return chosenWord;
}

var guessCheck = function(letter, word) {
  for (var index = 0; index < word.length; index += 1) {
    if (word[index] === letter) {
      return true;
    }
  }
  lossCounter += 1;
  return false;
}

var letterPositions = function(letter, word) {
  var positionNumbers = [];
  for (var index = 0; index < word.length; index += 1) {
    if (word[index] === letter) {
      positionNumbers.push(index);
    }
  }
  return positionNumbers;    
}
