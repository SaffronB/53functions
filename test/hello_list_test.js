var assert = require('assert');
var hello_list = require('../hello_list');

describe("For the hello_list function,", function() {
  it('I should return as many hello world entries as the number supplied ', function() {
    var result = hello_list (3);
    assert.equal(result, 'hello world hello world hello world ')

  });

});
