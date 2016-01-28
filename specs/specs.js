describe('Word', function() {
  it("gets the necessary properties from a chosen word", function() {
    var testWord = new Word("apple");
    expect(testWord.word).to.equal("apple");
    expect(testWord.length).to.equal(5);
    expect(testWord.letters).to.eql(["a", "p", "p", "l", "e"])
    expect(testWord.solvedArray).to.eql(["_", "_", "_", "_", "_"])
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
