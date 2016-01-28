describe('Word', function() {
  it("gets the necessary properties from a chosen word", function() {
    var testWord = new Word("apple");
    expect(testWord.word).to.equal("apple");
    expect(testWord.length).to.equal(5);
    expect(testWord.letters).to.eql(["a", "p", "p", "l", "e"]);
    expect(testWord.solvedArray).to.eql(["_", "_", "_", "_", "_"]);
  });

  it("will replace the corresponding underscored position(s) with the correct guessed letter", function() {
    var testWord = new Word("apple");
    expect(testWord.solvedAdd([1, 2], "p", ["_", "_", "_", "_", "_"])).to.eql(["_", "p", "p", "_", "_"]);
  });

  it("replacing the letters in a word with underscores into a new array", function() {
    var testWord = new Word("apple");
    expect(testWord.solvedArraySetup("apple")).to.eql(["_", "_", "_", "_", "_"]);
  });

  it("will convert an array of strings into a single string with spaces added between elements", function() {
    var testWord = new Word("apple");
    expect(testWord.solvedDisplay(["a", "p", "p", "l", "e"])).to.equal("a p p l e ");
  });
});

describe('Game', function() {
  it("returns false if the letter is not in the word when guessCheck is called", function() {
    var testGame = new Game();
    expect(testGame.guessCheck("b", "apple")).to.equal(false);
  });
  it("returns false if the letter is not in the word when guessCheck is called", function() {
    var testGame = new Game();
    expect(testGame.guessCheck("a", "apple")).to.equal(true);
  });
  it("will locate all instances of letter guessed when letterCheck is called", function() {
    var testGame = new Game();
    expect(testGame.letterPositions("a", "banana")).to.eql([1, 3, 5]);
  });
});
