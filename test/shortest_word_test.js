var assert = require("assert");
var shortest_word = require("../shortest_word.js");


describe("For the shortest_word function,", function() {
  it('I should take a sentence as a parameter and returs the shortest word in it, and the length of the word', function() {
    var result = shortest_word('Hello kittycat, whats up?');
    assert.deepEqual(result, {word: 'up', length:2});

  });
});
