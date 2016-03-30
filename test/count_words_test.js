var assert = require('assert');
var count_words = require('../count_words');

describe("For the count_words function,", function() {
  it('I should takes a sentence as a parameter and return the number of words in the sentence', function() {
    var result = count_words('Hello kittycat, what have you been up to?');
    assert.equal(result, 8);

  });

});
