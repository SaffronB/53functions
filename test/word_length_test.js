var assert = require("assert");
var word_length = require("../word_length.js");

describe('For the word_length function I should', function() {
  it('take a sentence as a parameter and returns the average word length rounded up and rounded down', function() {
    var result = word_length('Hello kittycat, what have you been up to?');
    assert.equal(result, 4);

  });
});
