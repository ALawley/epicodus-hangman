describe('letterArray', function() {
  it("will break a given word into an array of individual letters", function() {
    expect(letterArray("apple")).to.eql(["a", "p", "p", "l", "e"]);
  });
});

describe('ChosenWord', function() {
  it("gets the necessary properties from a chosen word", function() {
    var testChosenWord = new ChosenWord("apple");
    expect(testChosenWord.word).to.equal("apple");
    expect(testChosenWord.length).to.equal(5);
    expect(testChosenWord.letters).to.eql(["a", "p", "p", "l", "e"])
  });
});
describe('guessCheck', function() {
  it("returns false if the letter is not in the word", function() {
    expect(guessCheck("b", "apple")).to.equal(false);
  });
  it("returns true if the letter is found in the word", function() {
    expect(guessCheck("a", "apple")).to.equal(true);
  });
});
