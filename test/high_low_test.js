var assert = require('assert');
var high_low = require('../high_low');

describe("For the high_low function,", function() {
  it('I should return the highest and lowest numbers from a list of numbers', function() {
    var result = high_low([3, 8, 2, 9, 15, 5, 6]);
    assert.deepEqual(result, [2, 15]);

  });

});
