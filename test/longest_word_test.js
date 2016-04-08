//takes a sentence as a parameter and returns the longest word in it, and the length of the word
var assert = require("assert");
var longest_word = require("../longest_word.js");


describe("For the longest_word function,", function() {
  it('I should use a sentence as a parameter and return the longest word in it, and the length of the word', function() {
    var result = longest_word('Hello kittycat, whats up?');
    assert.deepEqual(result, {word: 'kittycat', length:8});

  });
});
