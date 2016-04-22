var assert = require ('assert');
var sum_word = require ('../sum_word_len')

describe("For the sum_word function,", function() {
  it('I should take a sentence as a parameter and return the sum of the length of words in it', function() {
    var result = sum_word('Hello kittycat, what have you been up to?');
    assert.equal(result, 32);

  });

});
