describe('letterArray', function() {
  it("will break down a given word into an array of individual letters", function() {
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

// randomwordfunction() {
//   var chosenWord = Math.random(["word1", "word2", "word3"])
//   return chosenWord;
// }
//
// Word(chosenWord)
